import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDormFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 100) + 0;
  ((s as any).uni_dorm ?? {})['event_minut'] = ((s as any).totminut ?? 0) + 60;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/2girl_hump\' + rand(1, 2) + \'.jpg');
    scene.text('As you walk down the hall, you see two girls grinding and dancing provocatively against each other while another takes photos with her phone. Some boys are also watching them.');
    scene.text('As you pass by, you wonder if they\'re just doing it to get the boys attention or if they\'re actually into it.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/3naked_girls\' + rand(1, 3) + \'.jpg');
      scene.text('As you walk down the hall, you\'re greeted by three tipsy, giggling, completely naked girls. The dark haired one looks familiar and you\'re sure you\'ve seen her around campus before; she doesn\'t seem to mind as her friend gropes at her breasts.');
      scene.text('They push by you and continue into the stairwell, leaving you to imagine where they\'re off to next.');
      qspCall(s, 'arousal', 'voyeur', 1);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/4girls_running.jpg');
        scene.text('You walk down the mostly quiet hall when four girls suddenly come screaming and laughing down the hallway at full speed.');
        scene.text('You dodge out of the way and they continue sprinting away. What was that about?');
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_couple1.jpg');
          scene.text('As you walk down the hall, you see a naked girl riding on the back of a naked guy. This place is truly crazy sometimes!');
          qspCall(s, 'arousal', 'voyeur', 1);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_girl\' + rand(1, 2) + \'.jpg');
            scene.text('As you walk down the hallway, one of the dorm room doors suddenly opens and a naked girl steps into view and casually walks down the hall to the communal showers.');
            qspCall(s, 'arousal', 'voyeur', 1);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_girls_group\' + rand(1, 2) + \'.jpg');
              scene.text('There\'s loud, booming music coming from an open door at the end of the hallway as a group of semi and completely nude girls come running in and out with drinks in hand.');
              scene.text('Seeing how much fun they\'re having, you almost consider joining them before you decide to just keep walking.');
              qspCall(s, 'arousal', 'voyeur', 1);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 6) {
                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_guy_lock.jpg');
                scene.text('There\'s some definite drama going on today. You see a naked guy pleading with someone through a locked dorm room door.');
                scene.text('This has obviously gone on for a while already seeing as other girls have congregated outside their own rooms to watch the show, all snickering and taking photos of the banished young man.');
                qspCall(s, 'arousal', 'voyeur', 1);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 7) {
                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/nude_girl_bentover.jpg');
                  scene.text('You\'re welcomed to the floor with quite the view today! A naked girl is completely bent over, picking up her things.');
                  scene.text('Despite the scene, no one else seems to be surprised by this, simply passing her by and minding their own business.');
                  qspCall(s, 'arousal', 'voyeur', 1);
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 8) {
                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/splits_girl.jpg');
                    scene.text('There\'s a few girls gathered in the hallway, talking amongst themselves before you hear one of them dare the other to do a handstand.');
                    scene.text('Almost immediately, she takes off her shoes and balances herself against the wall before flipping up onto her hands. This causes her skirt to drop over her waist however, exposing her panties to her friends, as well as a few passing guys.');
                    scene.text('The girl quickly drops back to her feet, her cheeks flushed with embarrassment.');
                    qspCall(s, 'arousal', 'voyeur', 1);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 9) {
                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/topless_girl\' + rand(1, 2) + \'.jpg');
                      scene.text('You pass several people walking around in their underwear or, in the case of one girl, completely naked. No one seems to take much notice as they get on with their daily routine.');
                      qspCall(s, 'arousal', 'voyeur', 1);
                      qspCall(s, 'arousal', 'end');
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 10) {
                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/4girl_hump.jpg');
                        scene.text('As you head down the hallway, you run into two girls bent over with two other girls standing right behind them, pretending to hump them as several guys watch and cheer.');
                        scene.text('The girls seem to be enjoying the attention they\'re getting as you make your way past them to head on your way.');
                        qspCall(s, 'arousal', 'voyeur', 1);
                        qspCall(s, 'arousal', 'end');
                        qspCall(s, 'stat', '');
                        scene.actions([
                          { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 11) {
                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/butt_flash1.jpg');
                          scene.text('As you walk down the hallway, you see a few guys ahead of you with a girl in front of them.');
                          scene.text('As you walk, the girl suddenly pulls down the back of her sweatpants to show off her bare ass, which gets the guys hooting and hollering.');
                          scene.text('She just laughs at them before walking into a room, the guys stopping and knocking on the door as you continue on your way.');
                          qspCall(s, 'arousal', 'voyeur', 1);
                          qspCall(s, 'arousal', 'end');
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 12) {
                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/drunk_girl.jpg');
                            scene.text('As you walk down the hallway, you walk past a girl squatting along the side of the hallway in a short skirt. She has a bottle of vodka in her hand and keeps taking big swigs from it, swaying as she drinks.');
                            scene.text('She makes eye contact with you as she takes a big swig, the only thing keeping her from falling being the wall she\'s leaning against.');
                            scene.text('You could mention how she\'s showing off her panties with the way she\'s squatting, but you doubt she cares.');
                            qspCall(s, 'arousal', 'voyeur', 1);
                            qspCall(s, 'arousal', 'end');
                            qspCall(s, 'stat', '');
                            scene.actions([
                              { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 13) {
                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girl_flash_girl.jpg');
                              scene.text('You notice two girls and a few guys hanging around by the door to the stairs when one of the girls suddenly pulls up her friend\'s dress, showing off her bare ass before giving it a slap.');
                              scene.text('Her friend gets into it and moans as her ass gets slapped, the guys grinning as they all ask for a turn. The two girls seem to enjoy teasing the guys as you continue on your way.');
                              qspCall(s, 'arousal', 'voyeur', 1);
                              qspCall(s, 'arousal', 'end');
                              qspCall(s, 'stat', '');
                              scene.actions([
                                { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 14) {
                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girl_wedgie.jpg');
                                scene.text('You notice a girl standing by a bulletin board reading the various notices on it. As she does, another girl rushes behind her and reaches down the back of her pants before pulling her panties up, giving the first girl a massive wedgie.');
                                scene.text('She screams, trying to get away as the other girl keeps tugging on her panties. Once she finally gets free, she turns on the other girl, who takes off running. You\'re not sure if that was friendly or not…');
                                qspCall(s, 'arousal', 'voyeur', 1);
                                qspCall(s, 'arousal', 'end');
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 15) {
                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girl_pantsed1.jpg');
                                  scene.text('Two girls are walking ahead of you when one suddenly grabs the pants of the other and pulls them down. The exposed girl frantically tries to cover up as the other laughs and tries to prevent her from pulling her pants up.');
                                  scene.text('As they wrestle, they both end up on the floor and start laughing as the fully clothed girl starts spanking the other\'s bare ass.');
                                  scene.text('They barely notice you as the clothed girl gets up and runs off, the other following closely behind after pulling her pants back up.');
                                  qspCall(s, 'arousal', 'voyeur', 1);
                                  qspCall(s, 'arousal', 'end');
                                  qspCall(s, 'stat', '');
                                  scene.actions([
                                    { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 16) {
                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girls_makeout1.jpg');
                                    scene.text('Two girls walk down the hall side by side before exchanging glances. The taller of the two then turns and pins the shorter girl against the wall before she starts kissing her.');
                                    scene.text('The shorter girl responds in kind, wrapping her arms around the neck of the taller girl before jumping up and wrapping her legs around her waist. The taller girl holds the shorter girl up as they go into a full makeout session right here in the hall.');
                                    scene.text('After a few minutes, they finally break the kiss and rush into one of the nearby rooms.');
                                    qspCall(s, 'arousal', 'voyeur', 1);
                                    qspCall(s, 'arousal', 'end');
                                    qspCall(s, 'stat', '');
                                    scene.actions([
                                      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 17) {
                                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/topless_girls1.jpg');
                                      scene.text('As you\'re walking down the hallway, a girly scream pierces the air and half a dozen girls coming running down the hallway wearing only their panties, their exposed breasts bouncing around as they run past you.');
                                      scene.text('A few people exchange confused looks while a few guys predictably decide to follow the half naked girls.');
                                      qspCall(s, 'arousal', 'voyeur', 1);
                                      qspCall(s, 'arousal', 'end');
                                      qspCall(s, 'stat', '');
                                      scene.actions([
                                        { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 18) {
                                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/towelhead_girl.jpg');
                                        scene.text('As you approach the communal showers, a girl walks out wearing nothing but a towel around her head.');
                                        scene.text('She walks past several other students and doesn\'t seem bothered at all by the ogling and cat calls she gets as she walks down the hall and into one of the rooms.');
                                        qspCall(s, 'arousal', 'voyeur', 1);
                                        qspCall(s, 'arousal', 'end');
                                        qspCall(s, 'stat', '');
                                        scene.actions([
                                          { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 19) {
                                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/petition_girl.jpg');
                                          scene.text('As you walk down the hallway, you notice a girl stopping everyone and asking them to sign a petition. As you get close, she turns to you. "Will you sign the petition?"');
                                          scene.text('You look down at the clipboard she\'s carrying. "What\'s it for?"');
                                          scene.text('She smiles as you seem to take an interest in her petition. "It\'s to get the library hours extended to 2am. Some of us need to study very late and these dorms are just too loud at that time. Will you sign it?"');
                                          scene.actions([
                                            { label: 'Refuse', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                            { label: 'Sign the petition', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/petition_girl.jpg');
    scene.text('You nod and pick up the pen, sign your name on the petition.');
    scene.text('"Oh thank you! Thank you so much!" the girl exclaims before she turns and starts talking to another student, trying to get them to sign as well.');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } },
                                          ]);
                                        } else {
                                          if (((s as any).temp ?? 0) === 20) {
                                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_shower_girl1.jpg');
                                            scene.text('As you approach the communal showers, a naked girl suddenly storms out.');
                                            scene.text('"Who the fuck took my clothes?!" she hisses and glares at several other students, but no one admits to it.');
                                            scene.text('She doesn\'t seem bothered at all by the ogling and cat calls she gets as she walks down the hall, ignoring it all.');
                                            qspCall(s, 'arousal', 'voyeur', 1);
                                            qspCall(s, 'arousal', 'end');
                                            qspCall(s, 'stat', '');
                                            scene.actions([
                                              { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                              { label: 'Watch her', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_shower_girl2.jpg');
    scene.text('She walks down the hallway, completely naked. "Okay, very funny Anya! I <i>will</i> get you back for this, you bitch!"');
    scene.text('She doesn\'t sound too mad, but then again she doesn\'t exactly sound happy about it either.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go on', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_shower_girl3.jpg');
    scene.text('As she continues, a guy stops her. "Hey, if you\'re going to parade around naked like that, then how about you show us <i>all</i>the goods?"');
    scene.text('She smirks before she turns around and spreads her asscheeks, showing off her pussy and asshole to everyone looking.');
    scene.text('He looks around in shock. "Fuck yeah, that\'s how every slut should be!"');
    scene.text('She just ignores his comment and walks further down the hallway.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go where you were going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      { label: 'Watch her some more', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_shower_girl4.jpg');
    scene.text('She finally stops at a door and turns the handle. You can hear the laughter of several other girls inside as she opens the door.');
    scene.text('"Fuck you! I\'m going to fucking kill you fucking bitches! I had to-"');
    scene.text('Her rant is cut off as she marches into the room and slams the door behind her.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go on your way', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                                            ]);
                                          } else {
                                            scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
                                            scene.text('As you walk down the hallway, you hear some noises coming from one of the rooms. You stop near the door and listen, but you can\'t make it out. You could try the door and see if it\'s unlocked or just mind your own business.');
                                            scene.actions([
                                              { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                              { label: 'Try the door', handler: (st: GameState) => {
    scene.img('images/pc/activities/spy/peep3.jpg');
    scene.text('You step up to the door and check the handle. It turns easily in your hand, so it\'s not locked, but do you peep? You really want to know what\'s happening, but what if someone sees you?');
    scene.actions([
      { label: 'Don\'t peek', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      { label: 'Peek', goto: ['uni_dorm_events', 'dorm_floor_sex'] },
    ]);
  } },
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
  scene.build();
}

function enterDormFloorSex(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 90) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_2wm_orgy1.jpg');
    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see two girls riding two guys reverse cowgirl style, toasting each other with drinks as they fuck the guys beneath them.');
    scene.text('They seem to be having a lot of fun, so you close the door before you\'re caught.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_2wm_orgy2.jpg');
      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see two girls riding two guys reverse cowgirl style, high fiving each other as they fuck the guys beneath them.');
      scene.text('They seem to be having a lot of fun, so you close the door before you\'re caught.');
      qspCall(s, 'arousal', 'voyeur_sex', 1);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_cuni1.jpg');
        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see one girl straddling another girl\'s face and moaning loudly as she\'s eaten out.');
        scene.text('You quickly close the door before you\'re caught.');
        qspCall(s, 'arousal', 'voyeur_sex', 1);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_cuni2.jpg');
          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see one girl on all fours with another girl behind her, her face buried in her pussy as she eats her out.');
          scene.text('You quickly close the door before you\'re caught.');
          qspCall(s, 'arousal', 'voyeur_sex', 1);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_cuni3.jpg');
            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see two girls sixty-nining each other, both moaning loudly as they do.');
            scene.text('You quickly close the door before you\'re caught.');
            qspCall(s, 'arousal', 'voyeur_sex', 1);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_strap_anal1.jpg');
              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a brunette on the bed on all fours while a blonde wearing a strap-on roughly fucks her in the ass.');
              scene.text('"What the fuck did I tell you about fucking my boyfriend?" the blonde asks as she slams the dildo deep into the brunette\'s ass, causing her to loudly squeal.');
              scene.text('"I\'m sorry! I was drunk! Please stop, it hurts!" she cries out, seemingly not enjoying what\'s happening.');
              scene.text('The blonde shakes her head. "Not until I\'m convinced you\'ve learned your lesson!" she says as she keeps fucking the other girl.');
              scene.text('While curious to know the whole story, you quietly close the door before you\'re caught.');
              qspCall(s, 'arousal', 'voyeur_sex', 1);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 6) {
                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_strap1.jpg');
                scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a blonde wearing a strap-on fucking a brunette\'s pussy, the brunette seemingly loving it.');
                scene.text('Just as you\'re about to close the door, the blonde looks over and sees you. "What the fuck?! Fuck off, pervert!"');
                scene.text('You blush and quickly close the door.');
                qspCall(s, 'arousal', 'voyeur_sex', 1);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 7) {
                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_wm_3some1.jpg');
                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy laying on the bed on his back as one girl rides his dick reverse cowgirl style and another sits on his face.');
                  scene.text('The cowgirl is looking right at you when you open the door, so you quickly close the door while blushing.');
                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 8) {
                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_wm_3some2.jpg');
                    scene.text('You turn the handle and gently push the door just wide enough to look inside. You see a blonde on all fours with another girl sitting in front of her with her legs spread wide, waiting to be eaten out. Behind the blonde is a guy stroking his dick to make it hard.');
                    scene.text('You quickly close the door before you\'re caught.');
                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 9) {
                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_wm_3some3.jpg');
                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy laying on the bed making out with one girl as another gives him a loud and sloppy blowjob.');
                      scene.text('You quickly close the door before you\'re caught.');
                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                      qspCall(s, 'arousal', 'end');
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 10) {
                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/2wf_wm_3some4.jpg');
                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy laying on the bed with one girl straddling his face as another one rides his dick cowgirl style. The two girls are making out as they ride the guy.');
                        scene.text('You quickly close the door before you\'re caught.');
                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                        qspCall(s, 'arousal', 'end');
                        qspCall(s, 'stat', '');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 11) {
                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_2wm_3some1.jpg');
                          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked girl on all fours on a couch while a guy fucks her from behind. She\'s smiling at a second guy who\'s watching while jerking off.');
                          scene.text('You quickly close the door before you\'re caught.');
                          qspCall(s, 'arousal', 'voyeur_sex', 1);
                          qspCall(s, 'arousal', 'end');
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 12) {
                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_2wm_3some2.jpg');
                            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a girl on all fours on the bed, sucking one guy off while a second guy fucks her from behind.');
                            scene.text('You quickly close the door before you\'re caught.');
                            qspCall(s, 'arousal', 'voyeur_sex', 1);
                            qspCall(s, 'arousal', 'end');
                            qspCall(s, 'stat', '');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 13) {
                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_2wm_dp1.jpg');
                              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy laying on the bed while a girl straddles him, riding him cowgirl style as another guy comes up behind her. She cries out as his dick disappears into her ass, but she continues to ride the guy beneath her as the other one starts fucking her ass.');
                              scene.text('You quickly close the door before you\'re caught.');
                              qspCall(s, 'arousal', 'voyeur_sex', 1);
                              qspCall(s, 'arousal', 'end');
                              qspCall(s, 'stat', '');
                              scene.actions([
                                { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 14) {
                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_2wm_dp2.jpg');
                                scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy laying on the floor while a girl straddles him, riding him cowgirl style as you watch another guy come up behind her and push her forward before his dick disappears into her ass.');
                                scene.text('She continues to ride the guy beneath her as the other one starts fucking her ass. You quickly close the door before you\'re caught.');
                                qspCall(s, 'arousal', 'voyeur_sex', 1);
                                qspCall(s, 'arousal', 'end');
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 15) {
                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_5wm_gb1.jpg');
                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a girl bent over with three guys in front of her, sucking the dick of one while jerking the other two off as a fourth guy has his dick shoved up her ass. A fifth guys stands next to them jerking off while waiting his turn.');
                                  scene.text('You quickly close the door before you\'re caught.');
                                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                                  qspCall(s, 'arousal', 'end');
                                  qspCall(s, 'stat', '');
                                  scene.actions([
                                    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 16) {
                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_anal1.jpg');
                                    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a girl on all fours on the bed as a guy fucks her ass from behind. By the sounds of her moans, she\'s enjoying it as much as he is.');
                                    scene.text('You quickly close the door before you\'re caught.');
                                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                                    qspCall(s, 'arousal', 'end');
                                    qspCall(s, 'stat', '');
                                    scene.actions([
                                      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 17) {
                                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_anal2.jpg');
                                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a guy sitting on a couch as a girl rides him reverse cowgirl style with his dick in her ass.');
                                      scene.text('They both seem to be enjoying themselves, so you quickly close the door before you\'re caught.');
                                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                                      qspCall(s, 'arousal', 'end');
                                      qspCall(s, 'stat', '');
                                      scene.actions([
                                        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 18) {
                                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_anal3.jpg');
                                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. The first thing you hear is the girl begging. "Not my ass… Please, it hurts!"');
                                        scene.text('As you look inside, you see a girl naked from the waist down bent over the seat of a couch as a guy roughly fucks her ass. You notice her hands are handcuffed behind her back.');
                                        scene.text('"Just relax and it won\'t hurt so much! You agreed to try it," he says as he keeps savagely fucking her ass. You quickly close the door before you\'re caught.');
                                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                                        qspCall(s, 'arousal', 'end');
                                        qspCall(s, 'stat', '');
                                        scene.actions([
                                          { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 19) {
                                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_bj1.jpg');
                                          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked guy standing in the room with a naked girl kneeling in front of him, her head bobbing back and forth as she sucks his dick.');
                                          scene.text('You quickly close the door before you\'re caught.');
                                          qspCall(s, 'arousal', 'voyeur_sex', 1);
                                          qspCall(s, 'arousal', 'end');
                                          qspCall(s, 'stat', '');
                                          scene.actions([
                                            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                          ]);
                                        } else {
                                          if (((s as any).temp ?? 0) === 20) {
                                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_bj2.jpg');
                                            scene.text('You turn the handle and gently push the door open a crack, just wide enough to look inside. A guy lays on his back on the bed as a girl kneels between his legs sucking his dick, her head bobbing up and down as she does.');
                                            scene.text('You quickly close the door before you\'re caught.');
                                            qspCall(s, 'arousal', 'voyeur_sex', 1);
                                            qspCall(s, 'arousal', 'end');
                                            qspCall(s, 'stat', '');
                                            scene.actions([
                                              { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                            ]);
                                          } else {
                                            if (((s as any).temp ?? 0) === 21) {
                                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_cowgirl1.jpg');
                                              scene.text('You turn the handle and gently push the door open just wide enough to look inside. A guy lays on his back on the bed while a girl rides his dick cowgirl style. They seem to be really enjoying themselves, so much so that they high five each other in the middle of it.');
                                              scene.text('You quickly close the door before you\'re caught.');
                                              qspCall(s, 'arousal', 'voyeur_sex', 1);
                                              qspCall(s, 'arousal', 'end');
                                              qspCall(s, 'stat', '');
                                              scene.actions([
                                                { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                              ]);
                                            } else {
                                              if (((s as any).temp ?? 0) === 22) {
                                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_cuni1.jpg');
                                                scene.text('You turn the handle and gently push the door open just wide enough to look inside. A naked girl is on all fours on the bed while a guy kneels behind her with his face buried in her ass. She\'s moaning loudly as he eats her out.');
                                                scene.text('Just as you\'re about to close the door, he looks right at you and gives you a double thumbs up. Blushing, you quickly close the door.');
                                                qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                qspCall(s, 'arousal', 'end');
                                                qspCall(s, 'stat', '');
                                                scene.actions([
                                                  { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                ]);
                                              } else {
                                                if (((s as any).temp ?? 0) === 23) {
                                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_cuni2.jpg');
                                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. A naked guy lays on a couch while a girl, naked from the waist down, rides his face.');
                                                  scene.text('As you watch, she looks over at you and grins. You blush bright red before quickly closing the door.');
                                                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                  qspCall(s, 'arousal', 'end');
                                                  qspCall(s, 'stat', '');
                                                  scene.actions([
                                                    { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                  ]);
                                                } else {
                                                  if (((s as any).temp ?? 0) === 24) {
                                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_vag1.jpg');
                                                    scene.text('You turn the handle and gently push the door open just wide enough to look inside. A girl, naked from the waist down, lays on her back with her legs against her body while a guy practically lays on top of her fucking her missionary style.');
                                                    scene.text('You quietly close the door and leave.');
                                                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                    qspCall(s, 'arousal', 'end');
                                                    qspCall(s, 'stat', '');
                                                    scene.actions([
                                                      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                    ]);
                                                  } else {
                                                    if (((s as any).temp ?? 0) === 25) {
                                                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/bf_3wm_voyeur1.jpg');
                                                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked black girl laying on her side on the bed, with a white guy laying behind her fucking her. Two more white guys are watching them.');
                                                      scene.text('You quickly close the door before you\'re caught.');
                                                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                      qspCall(s, 'arousal', 'end');
                                                      qspCall(s, 'stat', '');
                                                      scene.actions([
                                                        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                      ]);
                                                    } else {
                                                      if (((s as any).temp ?? 0) === 26) {
                                                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/sex/wf_wm_vag2.jpg');
                                                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. A naked girl is on all fours on a bed while a naked guy is fucking her from behind. She keeps egging him on to go harder, which he tries to the best of his ability.');
                                                        scene.text('You quickly close the door before you\'re caught.');
                                                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                        qspCall(s, 'arousal', 'end');
                                                        qspCall(s, 'stat', '');
                                                        scene.actions([
                                                          { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                        ]);
                                                      } else {
                                                        if (((s as any).temp ?? 0) < 60) {
                                                          scene.img('images/locations/city/island/university/dorm/hallway/peek.jpg');
                                                          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You\'re greeted by the sight of an empty door room, but notice that the TV has been left on.');
                                                          scene.text('Having found the source of the noise, you close the door.');
                                                          scene.actions([
                                                            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                                                          ]);
                                                        } else {
                                                          scene.img('images/locations/city/island/university/dorm/hallway/locked.jpg');
                                                          scene.text('You turn the handle, but the door is locked.');
                                                          scene.actions([
                                                            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
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
  scene.build();
}

function enterDormFloor8(s: GameState, scene: SceneBuilder): void {
  ((s as any).uni_dorm ?? {})['event_minut'] = ((s as any).totminut ?? 0) + 60;
  (s as any).temp = Math.floor(Math.random() * 100) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/cuffed_girl.jpg');
    scene.text('As you walk down the hallway, you see a naked white girl standing next to a dorm room door. Her hands are handcuffed behind her back, with another pair of cuffs with a short chain cuffed around each of her ankles. When she notices you coming down the hall, she blushes and hides her face. You have no clue why she\'s out in the hallway like this, but she seems to be going along with it.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/ebony_lezdom.jpg');
      scene.text('As you walk down the hallway, you\'re greeted by an ebony girl pinning a white girl against the wall. She has one of her hands wrapped around the white girl\'s neck while the other slides down to her crotch, where she roughly grabs the girl by the pussy, causing her to wince in pain.');
      scene.text('"What the fuck did I tell you, you little whore?" the ebony girl asks.');
      scene.text('"I\'m sorry, but his dick was too big! It hurt!" she replies.');
      scene.text('The ebony girl twists her hand in the girl\'s crotch, causing her to wince even more. "I don\'t fucking care if it hurt. I bet this hurts even more, doesn\'t it?"');
      scene.text('The white girl winces, but nods.');
      scene.text('"That\'s right. Next time I sell your white ass to one of the brothers on this floor and he wants to fuck that tight little ass of yours, you\'re going to take it, and you\'re going to tell him to fuck your ass harder. Got it?" the ebony girl barks.');
      scene.text('The white girl nods and breathes a sigh of relief as the black girl lets go of her. "We have this conversation again and you\'re going to <i>really</i> regret it…"');
      scene.text('When the white girl nods, the ebony girl continues. "Good. Now get down to room 812. There\'s a few boys there expecting you."');
      scene.text('The white girl hurries down the hallway as the ebony girl looks at you. "What the fuck you looking at?" she asks before she heads into what you assume is her dorm room.');
      qspCall(s, 'arousal', 'voyeur', 1);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/ir_kiss\' + rand(1, 2) + \'.jpg');
        scene.text('As you walk down the hallway, you spot a white girl with a black guy. They stop in front of one of the doors and make out for a few seconds before the guy unlocks the door and leads the girl into his room.');
        qspCall(s, 'arousal', 'voyeur', 1);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/naked_wgirl.jpg');
          scene.text('As you walk down the hallway, you see a totally naked girl knocking on one of the dorm room doors. A few seconds later, a black guy opens the door and looks the girl over with a huge smile before stepping aside to let her in.');
          scene.text('He looks at you and gives you a wink as he closes the door.');
          qspCall(s, 'arousal', 'voyeur', 1);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/party_girl.jpg');
            scene.text('As you walk down the hallway, you meet a girl coming the other way. She\'s wearing a tight black skirt, her black bra visible under her black sheer top. She seems a little unsteady on her feet, stumbling as she gives you a friendly smile.');
            scene.text('You can\'t tell if she\'s drunk, high or both.');
            scene.actions([
              { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/wg_bm.jpg');
              scene.text('As you walk down the hallway, you see a white girl being followed by a black guy. She stops in front of one of the dorm room doors and opens it. As she does, the guy gives her a hard slap on the ass, causing her to yelp.');
              scene.text('You\'re unsure if she\'s into it or not as she walks into the dorm room. The guy quickly follows her inside and closes the door.');
              scene.actions([
                { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 6) {
                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bgirl_spank_wgirl.jpg');
                scene.text('As you walk down the hall, you see a black girl talking to a white girl. They seem to be friendly and you overhear the white girl mention how she has been bad.');
                scene.text('The black girl smirks and pulls down the white girl\'s shorts to expose her panty clad ass and starts spanking her. Both of them laugh about it, but it does attract the attention of others that stop to watch.');
                qspCall(s, 'arousal', 'voyeur', 1);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 7) {
                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmbmwf.jpg');
                  scene.text('You see some black guys talking to a white girl as they start to crowd her, which she doesn\'t seem to mind at all. As you get close, they stop talking and all turn to look at you.');
                  scene.text('The girl blushes a little, while the guys both smile at you, leaving little doubt in your mind where this is going.');
                  scene.actions([
                    { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 8) {
                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmbmwf_skirtup.jpg');
                    scene.text('You see some black guys talking to a white girl, who exchange some looks before they reach down at the same time and pull up the hem of her dress until her panties are exposed.');
                    scene.text('As you get close, they stop talking and all turn to look at you. The girl blushes a little, while the guys both smile at you, leaving little doubt in your mind where this is going.');
                    qspCall(s, 'arousal', 'voyeur', 1);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 9) {
                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmwf_2grop1.jpg');
                      scene.text('You spot a white girl approaching from the other end of the hallway, closely followed by a black guy. As they get close, the guy suddenly grabs the girl from behind and she squeals and giggles as his right hand runs across her stomach and under her shirt while his left hand cups her breast.');
                      scene.text('She leans back against him and reaches one hand back to pull him closer to her. As they do this, they both look at you, perhaps to see how you will react.');
                      qspCall(s, 'arousal', 'voyeur', 1);
                      qspCall(s, 'arousal', 'end');
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                        { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmwf_2grop2.jpg');
    scene.text('They keep watching you, as the guy pulls up the girls shirt, exposing her breasts. His right hand slides up to cup her breast while the other slides down the front of her shorts.');
    scene.text('By the way his hand is moving in her shorts, you think he might actually be fingerbanging her right there as she reaches back to grope his crotch.');
    scene.text('A few seconds later, he drags her into one of the dorm rooms and closes the door.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 10) {
                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmwf_grop.jpg');
                        scene.text('A white girl and black guy are standing in the hallway talking to each other. As you approach, she steps up closer to him and he reaches around and grabs her ass with both hands before giving it a firm squeeze.');
                        scene.text('She giggles at his antics and they start kissing as you walk past them.');
                        qspCall(s, 'arousal', 'voyeur', 1);
                        qspCall(s, 'arousal', 'end');
                        qspCall(s, 'stat', '');
                        scene.actions([
                          { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 11) {
                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/bmwf_panties.jpg');
                          scene.text('A white girl and black guy are standing in the hallway talking to each other. As you approach, she turns, only for the guy to grab her by the back of the head and nuzzle her neck.');
                          scene.text('She moans softly as his hand pulls down the top of her dress, exposing her breast before it slides down her dress to the hemline and pulls it up, showing off her black panties.');
                          scene.text('She moans softly and doesn\'t resist as he continues nuzzling and kissing her neck. His hand then slides inside her panties and he starts fingerbanging her right here in the hallway.');
                          scene.text('Seconds later, he guides her to a dorm room and shoves her inside before closing the door behind him.');
                          qspCall(s, 'arousal', 'voyeur', 1);
                          qspCall(s, 'arousal', 'end');
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 12) {
                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/girl_gang_grop.jpg');
                            scene.text('You see a white girl getting surrounded by a four black guys.');
                            scene.text('"Oh yeah, I remember you," you overhear one of the guys say. "Craving more big black cock?"');
                            scene.text('The girl just blushes and the guys take her silence as consent before moving in close. They start pawing at her dress and have both her breasts and her pussy exposed within seconds.');
                            scene.text('One of the guys then looks to the others. "She only got three holes. Guess we have to take turns."');
                            scene.text('This gets some laughs out of the others while the girl remains silent, blushing more when your eyes suddenly meet.');
                            scene.text('The guys don\'t seem to notice you as they pull her into a dorm room and close the door.');
                            qspCall(s, 'arousal', 'voyeur', 1);
                            qspCall(s, 'arousal', 'end');
                            qspCall(s, 'stat', '');
                            scene.actions([
                              { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 13) {
                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/girl_pinned.jpg');
                              scene.text('As you walk down the hallway, you see a white girl with with a black guy, who is using one of his hands to pin her to the wall while the other roams around her body.');
                              scene.text('She seems to be enjoying it as you pass by them.');
                              scene.actions([
                                { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 14) {
                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/naked_girl_leash.jpg');
                                scene.text('As you turn a corner in the hallway, you see a black man holding a leash, which is attached to a collar around a white girl\'s neck, who kneels on the floor in front of him, wearing only the collar and a pair of black heels.');
                                scene.text('He looks at you for a moment and smirks, then yanks the leash hard. "Come on, bitch!"');
                                scene.text('The girl starts crawling on her hands and knees behind him as he walks away.');
                                qspCall(s, 'arousal', 'voyeur', 1);
                                qspCall(s, 'arousal', 'end');
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 15) {
                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/naked_guy.jpg');
                                  scene.text('One of the doors opens and a naked black man steps out. You can\'t help but stare at his rather large cock, which is hanging half way to his knees as he reaches his hands back behind his head and stretches.');
                                  scene.text('When he notices you looking at him, he gives you a knowing smirk before he walks down the hallway to the showers.');
                                  qspCall(s, 'arousal', 'voyeur', 1);
                                  qspCall(s, 'arousal', 'end');
                                  qspCall(s, 'stat', '');
                                  scene.actions([
                                    { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 16) {
                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/girl_leash.jpg');
                                    scene.text('As you turn a corner in the hallway, you see a black man naked from the waist up holding a leash in one hand. The leash is attached to a collar around a pale skinned white girl\'s neck, who kneels on the floor in front of him, wearing a fancy looking set of black lingerie and red high heeled shoes.');
                                    scene.text('They\'re blocking you from continuing on your way, but before you can say anything, the black man suddenly speaks up. "Take out my dick, bitch!"');
                                    scene.text('She obediently reaches up and unbuttons his pants before pulling them down until his rather large dick swings free.');
                                    qspCall(s, 'arousal', 'voyeur', 1);
                                    qspCall(s, 'arousal', 'end');
                                    qspCall(s, 'stat', '');
                                    scene.actions([
                                      { label: 'Turn around and go back', goto: ['uni_dorm', 'eighth_floor'] },
                                      { label: 'Watch them', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash1.jpg');
    scene.text('He reaches down and smacks her face hard enough that her head moves slightly. "Don\'t just sit there! Get sucking, slut!"');
    scene.text('She obediently starts sucking his large black dick, not seeming to mind or maybe even liking being slapped.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around and go back', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash2.jpg');
    scene.text('You watch her taking his dick deeper and deeper down her throat as she sucks, her pale skin contrasting with his ebony black skin, her red lips wrapped around the shaft of his black cock standing out almost as much.');
    scene.text('He pets the top of her head like a dog. "That\'s a good little bitch."');
    scene.text('She bobs her head back and forth sucking his dick for all she\'s worth, apparently loving the attention and praise she\'s getting.');
    scene.text('He then reaches down and grabs her by the hair before roughly pulling her off his dick and pushing her down.');
    scene.text('"Down on all fours, bitch!" he tells her and she obeys his command without complaint.');
    scene.text('He pulls up his pants with his free hand, then starts walking down the hallway as you debate whether you should follow them or not.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Don\'t follow them', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Follow them', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash3.jpg');
    scene.text('You decide to follow them and see what they do. He leads her down the hallway, walking faster than she can keep up by crawling on all fours.');
    scene.text('He seems to be doing it on purpose so he can yank the chain leash attached to her collar. "Hurry up, bitch! I want to fuck you!"');
    scene.text('He leads her down the hallway, almost to the furthest part of the eighth floor. You\'ve heard rumors that this part of the floor is filled with sex crazed Africans who kidnap and rape Russian girls, but you don\'t believe it in the slightest.');
    scene.text('He stops and opens a door before leading her in, but he doesn\'t close the door. You take this as an invitation to look in, if you dare.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Peek into the room', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash4.jpg');
    scene.text('You peek in and see that he has walked her over to a chair. He looks up at you as if he was expecting you to follow. "If you want to see how a tight little white bitch takes a proper black cock, then come in and close the door."');
    scene.text('He undresses and sits in the chair before yanking the chain again. "Take off your bra and panties, bitch!"');
    scene.text('She does as he commands and takes them off, leaving her mostly naked with everything on display. They both look at you, waiting to see if you stay or not.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave and close the door', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Enter the room', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'bbc', 'tiny');
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash5.jpg');
    scene.text('You step into the room and close the door behind you. Looking around, you find a chair near the door and sit on it. Is this here for people like you?');
    scene.text('As you\'re pondering this, he stands up. "Get on all fours on the bed, bitch!"');
    scene.text('She crawls over to the bed and crawls up onto it, stopping near the middle of the bed with her ass facing him.');
    scene.text('His dick swings back and forth as he walks over to the bed and climbs onto it. He kneels behind her before violently thrusting his hips forward.');
    scene.text('You hear her gasp in pain slightly and glance back at him as he starts fucking her hard and fast right away.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch her get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash6.jpg');
    scene.text('The sound of slapping flesh echoes into the room along with her grunts of pain and moans of pleasure while he grunts loudly with each thrust. "That\'s it, bitch! Take this black cock!"');
    scene.text('She isn\'t telling him to stop and isn\'t pulling away from him, so she must be enjoying it to one degree or another. You could keep watching, but maybe you should leave now?');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash7.jpg');
    scene.text('He hammers her pussy with long, hard, fast thrusts. "Fuck, this pussy used to be tighter! I must be wearing it out!" he chuckles. "Luckily for me, you have another hole that\'s not as well used."');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch her get ass fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash8.jpg');
    scene.text('He pulls his hips back and she starts to pull away, but he yanks on the chain, which makes her choke.');
    scene.text('"No!" she pleads. "Please! Not my ass!"');
    scene.text('He shoves his hips forward and she cries out in pain before he slaps the side of her face. "Shut up and stop trying to pull away from me, bitch!"');
    scene.text('He grabs her shoulder with one hand and pulls back on the leash to try and keep her from pulling away as he shoves his hips all the way forward.');
    scene.text('She white knuckles the sheets. "Ow! It hurts!"');
    scene.text('He just ignores her as he starts fucking her ass. She starts lowering her hips down so he can\'t thrust as deep, but he shoves her all the way down until she\'s laying on her stomach.');
    scene.text('"No more pulling away now, bitch!" he laughs as he pins her to the bed beneath him.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch her submit to him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash9.jpg');
    scene.text('Now that she\'s pinned between him and the bed, he shoves his hips forward again, causing her to hiss in pain before he lets go and places a hand on her shoulder to keep her from trying to squirm away from him.');
    scene.text('"I was going to take it easy on your ass the first time, but now I\'m going to teach you a fucking lesson."');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch as she gets her ass pounded', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash10.jpg');
    scene.text('He pounds her ass hard and fast with no mercy. "You like this, bitch?!"');
    scene.text('She nods. "Yes… I… love… being… yours…"');
    scene.text('You don\'t think she\'s enjoying the physical act of anal sex, but you\'re pretty sure she\'s getting off on being fully submissive and treated like this.');
    scene.text('He laughs at her response. "I know. I\'m going to keep fucking this ass every night until you learn to love it. Would you like that?"');
    scene.text('"Yes!" she whispers just loud enough for you to hear and he starts frantically fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch him cum', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash10.jpg');
    scene.text('He suddenly crawls off her and drags her by her leash with him as he gets off the bed and drags her onto the floor, where she kneels in front of him with her mouth already open.');
    scene.text('He aims for and starts cumming in her mouth, but some lands on her face.');
    scene.text('"Tell our guest what you live for," he commands as he looks at you.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch her becomes his submissive', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set1/bm_wf_leash11.jpg');
    scene.text('She turns to look at you and beams with pride and happiness. "The best thing about life is being a black man\'s personal fuck toy. It gives me purpose and makes me life have meaning. It\'s the only thing I have ever been good at."');
    scene.text('She looks up at him for approval and he pats her on the head again. "Good bitch." Then he looks back at you. "You should do the same. It\'s the only thing you bitches are good for. You may leave now."');
    scene.text('You get the feeling you have now overstayed your welcome, so you get up out of the chair and leave the room. You close the door behind you and start walking down the hall again, not sure how you feel about what you just watched. She did seem awfully happy there at the end…');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
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
                                    scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
                                    scene.text('As you walk down the hallway, you hear some noises coming from one of the rooms. You stop near the door and listen, but you can\'t make it out. You could try the door and see if it\'s unlocked or just mind your own business.');
                                    scene.actions([
                                      { label: 'Keep going', goto: ['uni_dorm', 'eighth_floor'] },
                                      { label: 'Try the door', handler: (st: GameState) => {
    scene.img('images/pc/activities/spy/peep3.jpg');
    scene.text('You step up to the door and check the handle. It turns easily in your hand, so it\'s not locked, but do you peep? You really want to know what\'s happening, but what if someone sees you?');
    scene.actions([
      { label: 'Don\'t peek', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Peek', goto: ['uni_dorm_events', 'dorm_floor_eight_sex'] },
    ]);
  } },
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

function enterDormFloorEightSex(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 90) + 0;
  qspCall(s, 'schedule', 'A23');
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bf_1wf1.jpg');
    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl laying on the floor on her back with a black girl straddling her face, getting eaten out while another black girl kneels next to them rubbing her clit as she watches. Over on the couch is a few guys watching the girls.');
    scene.text('You quickly close the door before you\'re caught.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bf_1wf2.jpg');
      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see some black girls laying on the floor with their legs spread wide. One is rubbing the clit of the other, while a white girl is laying on her stomach with her head between the legs of the other girl eating her out.');
      scene.text('You quickly close the door before you\'re caught.');
      qspCall(s, 'arousal', 'voyeur_sex', 1);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bf_strap_vag1.jpg');
        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a pair of black girls inside. One of them is bent over while her friend stands behind her wearing a strap-on, fucking her from behind.');
        scene.text('You quickly close the door before you\'re caught.');
        qspCall(s, 'arousal', 'voyeur_sex', 1);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bf_wm_3some1.jpg');
          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white guy laying on his back on the bed as one black girl straddles his face as another rides his cock cowgirl style.');
          scene.text('You quickly close the door before you\'re caught.');
          qspCall(s, 'arousal', 'voyeur_sex', 1);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bm_2wf_anal1.jpg');
            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see two black guys laying on the bed as two white girls straddle them reverse cowgirl style with their cocks in their asses.');
            scene.text('You quickly close the door before you\'re caught.');
            qspCall(s, 'arousal', 'voyeur_sex', 1);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/2bm_wf_3some1.jpg');
              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl laying on her back on the bed, being fucked in the missionary position by a black guy as she sucks the dick of a second black guy.');
              scene.text('You quickly close the door before you\'re caught.');
              qspCall(s, 'arousal', 'voyeur_sex', 1);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 6) {
                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/3bm_3wf_orgy1.jpg');
                scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see three white girls, two laying on their back on the bed getting fucked by two black guys while the third is on her knees on the edge of the bed being fucked from behind by a third black guy.');
                scene.text('You quickly close the door before you\'re caught.');
                qspCall(s, 'arousal', 'voyeur_sex', 1);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 7) {
                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/3bm_wf_dp1.jpg');
                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black guy on his back on the floor as a white girl lays across his chest. A second black guy is fucking her ass from behind while a third is kneeling next to her head as she sucks his dick.');
                  scene.text('You quickly close the door before you\'re caught.');
                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 8) {
                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/4bm_wf_dp1.jpg');
                    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black guy laying on the floor on his back as a white girl lays on top of him. A second black guy is fucking her ass from behind while two more black guys are watching them while stroking their dicks, seemingly awaiting their turn.');
                    scene.text('You quickly close the door before you\'re caught.');
                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 9) {
                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/5bm_2wf_orgy1.jpg');
                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see two white girls laying on their backs on the bed as two black guys fuck them missionary style. Three more black guys are crowded around stroking their dicks, waiting for their turn to fuck the girls.');
                      scene.text('You quickly close the door before you\'re caught.');
                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                      qspCall(s, 'arousal', 'end');
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 10) {
                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/5bm_wf_gb1.jpg');
                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl on all fours on the bed being fucked from behind by a black guy as a second kneels next to her head as she sucks his dick, a third is stroking his dick while waiting his turn, a fourth has just finished getting undressed and a fifth is filming it all on his phone.');
                        scene.text('You quickly close the door before you\'re caught.');
                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                        qspCall(s, 'arousal', 'end');
                        qspCall(s, 'stat', '');
                        scene.actions([
                          { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 11) {
                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/7bm_wf_orgy1.jpg');
                          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black guy laying on his back on the couch as a white girl rides his cock while sucking a second guy\'s dick and a third fucks her in the ass. Standing by and stroking their dicks is four more black guys all waiting their turn to fuck the girl.');
                          scene.text('You quickly close the door before you\'re caught.');
                          qspCall(s, 'arousal', 'voyeur_sex', 1);
                          qspCall(s, 'arousal', 'end');
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 12) {
                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_2wm_dp1.jpg');
                            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white guy laying on the couch with a black girl riding his cock cowgirl style as a second white guy fucks her ass from behind.');
                            scene.text('You quickly close the door before you\'re caught.');
                            qspCall(s, 'arousal', 'voyeur_sex', 1);
                            qspCall(s, 'arousal', 'end');
                            qspCall(s, 'stat', '');
                            scene.actions([
                              { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 13) {
                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_bm_anal1.jpg');
                              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black guy laying on the bed on his back as a black girl impales her ass on his cock reverse cowgirl style.');
                              scene.text('You quickly close the door before you\'re caught.');
                              qspCall(s, 'arousal', 'voyeur_sex', 1);
                              qspCall(s, 'arousal', 'end');
                              qspCall(s, 'stat', '');
                              scene.actions([
                                { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 14) {
                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_bm_bj1.jpg');
                                scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black girl laying on her back on the bed while sucking the cock of a black guy.');
                                scene.text('You quickly close the door before you\'re caught.');
                                qspCall(s, 'arousal', 'voyeur_sex', 1);
                                qspCall(s, 'arousal', 'end');
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 15) {
                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_bm_vag1.jpg');
                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black guy sitting on the couch while a black girl rides his cock reverse cowgirl style.');
                                  scene.text('You quickly close the door before you\'re caught.');
                                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                                  qspCall(s, 'arousal', 'end');
                                  qspCall(s, 'stat', '');
                                  scene.actions([
                                    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 16) {
                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_bm_vag2.jpg');
                                    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black girl on her knees bent over on the couch as a black man fucks her from behind.');
                                    scene.text('You quickly close the door before you\'re caught.');
                                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                                    qspCall(s, 'arousal', 'end');
                                    qspCall(s, 'stat', '');
                                    scene.actions([
                                      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 17) {
                                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_bm_vag3.jpg');
                                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black girl laying on a bed, naked from the waist down as a black guy fucks her pussy missionary style.');
                                      scene.text('You quickly close the door before you\'re caught.');
                                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                                      qspCall(s, 'arousal', 'end');
                                      qspCall(s, 'stat', '');
                                      scene.actions([
                                        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 18) {
                                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wf_strap_vag1.jpg');
                                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl on all fours on the couch while a black girl wearing a strap-on fucks her pussy from behind.');
                                        scene.text('As you watch, the black girl looks over at you and grins widely. Blushing, you quickly close the door and leave.');
                                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                                        qspCall(s, 'arousal', 'end');
                                        qspCall(s, 'stat', '');
                                        scene.actions([
                                          { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 19) {
                                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wf_cuni1.jpg');
                                          scene.text('You turn the handle and gently push the door just wide enough to look inside. You see a black girl laying on her back on the bed with her legs spread wide as a white girl is on all fours licks her pussy.');
                                          scene.text('You quickly close the door before you\'re caught.');
                                          qspCall(s, 'arousal', 'voyeur_sex', 1);
                                          qspCall(s, 'arousal', 'end');
                                          qspCall(s, 'stat', '');
                                          scene.actions([
                                            { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                          ]);
                                        } else {
                                          if (((s as any).temp ?? 0) === 20) {
                                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wm_anal1.jpg');
                                            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black girl laying on her side while a white guy lays on his side behind her with his dick up her ass.');
                                            scene.text('You quickly close the door before you\'re caught.');
                                            qspCall(s, 'arousal', 'voyeur_sex', 1);
                                            qspCall(s, 'arousal', 'end');
                                            qspCall(s, 'stat', '');
                                            scene.actions([
                                              { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                            ]);
                                          } else {
                                            if (((s as any).temp ?? 0) === 21) {
                                              scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wm_bj1.jpg');
                                              scene.text('You turn the handle and gently push the door open just wide enough to look inside. A white guy lays on his back on the bed while a black girl lays next to him sucking his dick, her head bobbing up and down as one of his free hands rubs her clit.');
                                              scene.text('You quickly close the door before you\'re caught.');
                                              qspCall(s, 'arousal', 'voyeur_sex', 1);
                                              qspCall(s, 'arousal', 'end');
                                              qspCall(s, 'stat', '');
                                              scene.actions([
                                                { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                              ]);
                                            } else {
                                              if (((s as any).temp ?? 0) === 22) {
                                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wm_cuni1.jpg');
                                                scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked black girl laying on the bed, her legs spread wide as a partially dressed white guy has his face buried in her crotch licking her pussy.');
                                                scene.text('As you watch, the girl turns her head and looks right at you. She gives you a dirty look when your eyes meet and you quickly close the door and leave.');
                                                qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                qspCall(s, 'arousal', 'end');
                                                qspCall(s, 'stat', '');
                                                scene.actions([
                                                  { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                ]);
                                              } else {
                                                if (((s as any).temp ?? 0) === 23) {
                                                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bf_wm_vag1.jpg');
                                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a black girl laying on her side while a white guy lays on his side behind her with his dick in her pussy.');
                                                  scene.text('You quickly close the door before you\'re caught.');
                                                  qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                  qspCall(s, 'arousal', 'end');
                                                  qspCall(s, 'stat', '');
                                                  scene.actions([
                                                    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                  ]);
                                                } else {
                                                  if (((s as any).temp ?? 0) === 24) {
                                                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bm_af_anal1.jpg');
                                                    scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked Asian girl on all fours on the bed as a black guy crouches above her with his dick buried in her ass.');
                                                    scene.text('You watch as he hammers her ass, her cries sounding like she\'s enjoying it before you close the door.');
                                                    qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                    qspCall(s, 'arousal', 'end');
                                                    qspCall(s, 'stat', '');
                                                    scene.actions([
                                                      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                    ]);
                                                  } else {
                                                    if (((s as any).temp ?? 0) === 25) {
                                                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bm_wf_anal1.jpg');
                                                      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked white girl laying on her stomach on the bed with her legs spread wide as a black guy kneels behind her with his dick buried deep in her ass.');
                                                      scene.text('As he fucks her ass, she begs him to fuck her ass harder. You quickly close the door before you\'re caught.');
                                                      qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                      qspCall(s, 'arousal', 'end');
                                                      qspCall(s, 'stat', '');
                                                      scene.actions([
                                                        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                      ]);
                                                    } else {
                                                      if (((s as any).temp ?? 0) === 26) {
                                                        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bm_wf_bj1.jpg');
                                                        scene.text('You turn the handle and gently push the door open just wide enough to look inside. A black guy is sitting on his bed naked while a white girl kneels over next to him, her head bobbing up and down as she sucks his cock.');
                                                        scene.text('You quickly close the door before you\'re caught.');
                                                        qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                        qspCall(s, 'arousal', 'end');
                                                        qspCall(s, 'stat', '');
                                                        scene.actions([
                                                          { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                        ]);
                                                      } else {
                                                        if (((s as any).temp ?? 0) === 27) {
                                                          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bm_wf_cuni1.jpg');
                                                          scene.text('You turn the handle and gently push the door open just wide enough to look inside. A white girl is laying on the bed on her back, her legs spread wide as a partially dressed black guy squats next to the bed with his face in her crotch licking her pussy.');
                                                          scene.text('You quickly close the door before you\'re caught.');
                                                          qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                          qspCall(s, 'arousal', 'end');
                                                          qspCall(s, 'stat', '');
                                                          scene.actions([
                                                            { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                          ]);
                                                        } else {
                                                          if (((s as any).temp ?? 0) === 28) {
                                                            scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/bm_wf_vag1.jpg');
                                                            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked white girl on all fours on the bed as a black guy kneels behind her fucking her from behind.');
                                                            scene.text('She\'s crying out, begging him to fuck her harder, so you quickly close the door before you\'re caught.');
                                                            qspCall(s, 'arousal', 'voyeur_sex', 1);
                                                            qspCall(s, 'arousal', 'end');
                                                            qspCall(s, 'stat', '');
                                                            scene.actions([
                                                              { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                            ]);
                                                          } else {
                                                            if (((s as any).temp ?? 0) === 29  &&  ((s as any).locat ?? 0)?.['A23'] === 26) {
                                                              qspCall(s, 'albina_events', 'floor_eight_sex');
                                                            } else {
                                                              if (((s as any).temp ?? 0) === 30) {
                                                                scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm0.jpg');
                                                                ((s as any).harunaQW ?? {})['meet'] = 1;
                                                                if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
                                                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see five naked white girls bent over on a couch, their pussies on full display. They all turn and look at you as you realize whatever noise you had heard is now gone and the only sound was of the door creaking slightly as you opened it.');
                                                                  scene.text('You notice Haruna standing off to one side of the couch, his large and very thick black dick hanging half way to his knees. You remember seeing him hanging out with Djibril a lot. He turns to look at you as well and grins.');
                                                                  scene.text('"Hello again," he says pleasantly in heavily accented Russian. "Come in and close the door."');
                                                                  scene.text('He continues talking as your mind swirls. "You can watch as I fuck your white… sisters… butts." He stumbles over the word sister. You think he meant something else, but you get the gist of what he meant. "Or you are welcome to take off your clothes and join the end of the line," he says, motioning at the couch where there is just enough room for you to squeeze in.');
                                                                  scene.text('The girl closest to Haruna smiles reassuringly and motions you in. "Come on and join us. Don\'t worry if this is your first time with a black guy or your first time getting fucked in the butt. It hurts a little at first, but then it feels <i>so amazing</i>!"');
                                                                  scene.text('The next two girls give you similar smiles and seem to agree, the fourth one is smiling but less sure, and the last one looks a bit nervous as the first girl speaks up again.');
                                                                  scene.text('"This is Zhabina. It\'s her first time with a black guy," she explains, ndicating the girl who is second closest to you. "And that is Gagolina. This will be her first black guy <i>and</i> first anal. The rest of us have done this a few times already."');
                                                                  scene.text('You mind slowly takes in what you\'re seeing and hearing. You have to admit that you\'re a little intrigued at the idea of submissively waiting your turn to be fucked by a well hung African guy, but is that really something you want to take part in? Or even just watch?');
                                                                  scene.text('As you ponder, Haruna lubes up his dick and hands the bottle of lube to the first girl. who lubes up her ass before handing it to the next girl, who does the same before passing it along.');
                                                                } else {
                                                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see five naked white girls bent over on a couch, their pussies on full display. They all turn and look at you as you realize whatever noise you had heard is now gone and the only sound was of the door creaking slightly as you opened it.');
                                                                  scene.text('You then notice a naked black man standing off to one side of the couch, his large and very thick dick hanging half way to his knees.');
                                                                  scene.text('He turns to look at you as well and grins. "Hello, I am Haruna," he says pleasantly enough in heavily accented Russian. "Come in and close the door."');
                                                                  scene.text('He continues talking as your mind swirls. "You can just watch as I fuck your white… sisters… butts." He stumbles over the word sister. You think he meant something else, but you get the gist of what he meant. "Or you are welcome to take off your clothes and join the end of the line," he says, motioning at the couch where there is just enough room for you to squeeze in.');
                                                                  scene.text('The girl closest to Haruna smiles reassuringly and motions you in. "Come on and join us. Don\'t worry if this is your first time with a black guy or your first time getting fucked in the butt. It hurts a little at first, but then it feels <i>so amazing</i>!"');
                                                                  scene.text('The next two girls give you similar smiles and seem to agree, the fourth one is smiling but less sure, and the last one looks a bit nervous as the first girl speaks up again.');
                                                                  scene.text('"This is Zhabina. It\'s her first time with a black guy," she explains, ndicating the girl who is second closest to you. "And that is Gagolina. This will be her first black guy <i>and</i> first anal. The rest of us have done this a few times already."');
                                                                  scene.text('You mind slowly takes in what you\'re seeing and hearing. You have to admit that you\'re a little intrigued at the idea of submissively waiting your turn to be fucked by a well hung African guy, but is that really something you want to take part in? Or even just watch?');
                                                                  scene.text('As you ponder, Haruna lubes up his dick and hands the bottle of lube to the first girl. who lubes up her ass before handing it to the next girl, who does the same before passing it along.');
                                                                }
                                                                qspCall(s, 'arousal', 'voyeur', 3);
                                                                qspCall(s, 'arousal', 'end');
                                                                qspCall(s, 'stat', '');
                                                                scene.actions([
                                                                  { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                                  { label: 'Join in', goto: ['uni_dorm_events_sex', '8floor_anal_gangbang'] },
                                                                  { label: 'Stay and watch', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm1.jpg');
    scene.text('You enter the room and stand by the door after closing it. You watch as Haruna walks up behind the first girl and lines his dick up with her asshole.');
    scene.text('He pushes forward and his large massively thick black dick slides into her asshole with surprising ease.');
    scene.text('She moans as he starts fucking her ass, the other girls looking over and watching as their friend gets her ass fucked; all but the last look eager for their turn.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm2.jpg');
    scene.text('After fucking the first girl\'s ass for several minutes, he pulls out of her and moves down to the second one. He lines his dick up and shoves it up her ass, causing her to tense up and hiss in pain before she relaxes and starts moaning, really getting into it.');
    scene.text('Before she can get off, he pulls out and slides his dick into the third girl\'s ass. She starts moaning loudly at once and begs him to fuck her harder, which Haruna is only to happy to do.');
    scene.text('He quickly starts hammering her ass hard and fast as you see the last girl\'s eyes grow wide; she looks even more nervous as Haruna grunts and fills the third girl\'s ass with his cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Wonder if he is done', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm4.jpg');
    scene.text('He pants for a moment before pulling out of the girl\'s ass. You see some cum leaking out of her asshole as he strokes his dick to get it hard again before he moves to the fourth girl in line.');
    scene.text('She cries out as he shoves his dick up her ass, but you can\'t tell if it\'s pleasure, pain or both.');
    scene.text('"Oh my god! His black dick… Is so big!" she pants and leans all the way forward with her face on the couch as he fucks her ass, clearly enjoying it.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Watch him finish', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm3.jpg');
    scene.text('The last girl looks nervous now that it\'s her turn.');
    scene.text('"Take deep breath and relax," Haruna tells her as he moves in behind her.');
    scene.text('She does as he instructs and he slides his dick up her ass. She yelps and jumps forward a bit, but his hands on her hips keep her from pulling to far away.');
    scene.text('"OW! Ow! It hurts! He\'s too big!" She says, but her friends all give her encouragement, telling her that it will feel better in time.');
    scene.text('With their encouragement, she stops complaining and just lets him fuck her ass, but you can tell she\'s not enjoying it.');
    scene.text('After a few minutes, he pulls out of Gagolina\'s ass and she sighs in relief as he walks back to the first girl and slides his dick back in her ass.');
    scene.text('He fucks her hard and fast before he buries his dick balls deep in her ass and grunts as he cums in her ass as well. When he pulls out, you can see some cum leaking from her well fucked ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Ask the girls why they did this', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/misc/2wg_lovebbc.jpg');
    scene.text('You wait around as everyone get cleaned up and dressed. As the girls finish dressing, the first and second girls put on shirts that say "I heart black guys".');
    scene.text('As they all finish dressing, you decide to ask them why they do this, as you don\'t think any of them got off.');
    scene.text('You clear your throat softly. "I was just wondering why you guys did this? I mean I don\'t think any of you got off from it."');
    scene.text('The first girl frowns, as if you asked an offensive question. "This is not about us. This is about paying racial restitution." Several of the other girls nod in agreement. "This is about whites paying for our crimes against the Africans. White colonists enslaved many Africans and then shipped them around the world."');
    scene.text('You think about it for a moment. "I don\'t think Russia was really involved with that."');
    scene.text('She shakes her head. "It doesn\'t matter. As Professor Bryant says, this is about racial reparations. It doesn\'t matter if our ancestors did it or not. They allowed, and often supported, other whites to enslave the blacks of Africa. It is our duty to repay them."');
    scene.text('You\'ve heard of Professor Bryant; he\'s a black American that teaches African Studies here at the university. "So having sex with them makes up for slavery?"');
    scene.text('She sighs like you\'re thick headed. "No, of course not, but it\'s a start. If we offer up our bodies for their pleasure, then we are at least paying them back a little. That\'s why I, Tseydlits, started the White Pussy for African Cock club. We are all members who are doing our part. You should join us."');
    scene.text('She gives you the information on how to go about joining them and you talk to them all a little longer. They all seem to believe in the cause and all of them are taking the African Studies elective course.');
    scene.text('Shortly after, they all leave, as do you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Ask Haruna why he did this', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big245.jpg');
    scene.text('As you talk to the girls, you notice Haruna has got dressed and sat on the couch in front of the TV.');
    scene.text('You decide to ask him what his take on all this is. "Do you agree with the girls?"');
    scene.text('He shrugs. "I don\'t know, seems kind of silly to me, but…" He can\'t help but grin. "I like fucking white girls. I like fucking girls in the butt. These girls think all white girls owe Africans their bodies, so I call them over, line up as many as I can and fuck each of them in the butt. My goal is to fuck ten of them in a row."');
    scene.text('You blink, not really sure what to say about that. "Oh. Okay. Good luck with that, I guess…"');
    scene.text('He nods and grins before he turns the TV on and starts watching it. You don\'t think you\'re going to learn any more from him, so decide to leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask Haruna why he did this', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big245.jpg');
    scene.text('You wait around as everyone get cleaned up and gets dressed. As the girls finish dressing, the first and second girls put on shirts that say "I heart black guys".');
    scene.text('Haruna gets dressed and sits on the couch in front of the TV as the girls all leave, talking about how they\'ve made some reparations today.');
    scene.text('You decide to ask him what this was all about. "So… What was all of this about?"');
    scene.text('He grins. "I like fucking white girls. I like fucking girls in the butt. These girls think all white girls owe Africans their bodies, so I call them over, line up as many as I can and fuck each of them in the butt. My goal is to fuck ten of them in a row."');
    scene.text('You blink, not really sure what to say about that. "Oh. Okay. Good luck with that, I guess…"');
    scene.text('He nods and grins before he turns the TV on and starts watching it. You don\'t think you\'re going to learn any more from him, so decide to leave.');
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
                                                              } else {
                                                                if (((s as any).temp ?? 0) < 60) {
                                                                  scene.img('images/locations/city/island/university/dorm/hallway/peek.jpg');
                                                                  scene.text('You turn the handle and gently push the door open just wide enough to look inside. You\'re greeted by the sight of an empty door room, but notice that the TV has been left on.');
                                                                  scene.text('Having found the source of the noise, you close the door.');
                                                                  scene.actions([
                                                                    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
                                                                  ]);
                                                                } else {
                                                                  scene.img('images/locations/city/island/university/dorm/hallway/locked.jpg');
                                                                  scene.text('You turn the handle, but the door is locked.');
                                                                  scene.actions([
                                                                    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dorm_floor':
      enterDormFloor(s, scene);
      break;
    case 'dorm_floor_sex':
      enterDormFloorSex(s, scene);
      break;
    case 'dorm_floor8':
      enterDormFloor8(s, scene);
      break;
    case 'dorm_floor_eight_sex':
      enterDormFloorEightSex(s, scene);
      break;
    default:
      enterDormFloor(s, scene);
      break;
  }
}

export const uni_dorm_events: LocationDef = {
  name: 'uni_dorm_events',
  title: 'As you walk down the hall, you see two girls grinding and da',
  region: 'other',
  description: ['As you walk down the hall, you see two girls grinding and dancing provocatively against each other while another takes photos with her phone. Some boys are also watching them.'],
  enter: enter,
};
