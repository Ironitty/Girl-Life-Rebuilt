import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 100) + 0;
  (s as any).uni_dorm['event_minut'] = ((s as any).totminut ?? 0) + 60;
  if (((s as any).temp ?? 0) === 0) {
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
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/3naked_girls\' + rand(1, 3) + \'.jpg');
    scene.text('As you walk down the hall, you\'re greeted by three tipsy, giggling, completely naked girls. The dark haired one looks familiar and you\'re sure you\'ve seen her around campus before; she doesn\'t seem to mind as her friend gropes at her breasts.');
    scene.text('They push by you and continue into the stairwell, leaving you to imagine where they\'re off to next.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
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
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_couple1.jpg');
      scene.text('As you walk down the hall, you see a naked girl riding on the back of a naked guy. This place is truly crazy sometimes!');
      qspCall(s, 'arousal', 'voyeur', 1);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
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
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor/naked_girls_group\' + rand(1, 2) + \'.jpg');
        scene.text('There\'s loud, booming music coming from an open door at the end of the hallway as a group of semi and completely nude girls come running in and out with drinks in hand.');
        scene.text('Seeing how much fun they\'re having, you almost consider joining them before you decide to just keep walking.');
        qspCall(s, 'arousal', 'voyeur', 1);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'stat', '');
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
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor/nude_girl_bentover.jpg');
          scene.text('You\'re welcomed to the floor with quite the view today! A naked girl is completely bent over, picking up her things.');
          scene.text('Despite the scene, no one else seems to be surprised by this, simply passing her by and minding their own business.');
          qspCall(s, 'arousal', 'voyeur', 1);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
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
            scene.img('images/locations/city/island/university/dorm/hallway/events/floor/topless_girl\' + rand(1, 2) + \'.jpg');
            scene.text('You pass several people walking around in their underwear or, in the case of one girl, completely naked. No one seems to take much notice as they get on with their daily routine.');
            qspCall(s, 'arousal', 'voyeur', 1);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
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
              scene.img('images/locations/city/island/university/dorm/hallway/events/floor/butt_flash1.jpg');
              scene.text('As you walk down the hallway, you see a few guys ahead of you with a girl in front of them.');
              scene.text('As you walk, the girl suddenly pulls down the back of her sweatpants to show off her bare ass, which gets the guys hooting and hollering.');
              scene.text('She just laughs at them before walking into a room, the guys stopping and knocking on the door as you continue on your way.');
              qspCall(s, 'arousal', 'voyeur', 1);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'stat', '');
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
                scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girl_flash_girl.jpg');
                scene.text('You notice two girls and a few guys hanging around by the door to the stairs when one of the girls suddenly pulls up her friend\'s dress, showing off her bare ass before giving it a slap.');
                scene.text('Her friend gets into it and moans as her ass gets slapped, the guys grinning as they all ask for a turn. The two girls seem to enjoy teasing the guys as you continue on your way.');
                qspCall(s, 'arousal', 'voyeur', 1);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'stat', '');
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
                  scene.img('images/locations/city/island/university/dorm/hallway/events/floor/girl_pantsed1.jpg');
                  scene.text('Two girls are walking ahead of you when one suddenly grabs the pants of the other and pulls them down. The exposed girl frantically tries to cover up as the other laughs and tries to prevent her from pulling her pants up.');
                  scene.text('As they wrestle, they both end up on the floor and start laughing as the fully clothed girl starts spanking the other\'s bare ass.');
                  scene.text('They barely notice you as the clothed girl gets up and runs off, the other following closely behind after pulling her pants back up.');
                  qspCall(s, 'arousal', 'voyeur', 1);
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'stat', '');
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
                    scene.img('images/locations/city/island/university/dorm/hallway/events/floor/topless_girls1.jpg');
                    scene.text('As you\'re walking down the hallway, a girly scream pierces the air and half a dozen girls coming running down the hallway wearing only their panties, their exposed breasts bouncing around as they run past you.');
                    scene.text('A few people exchange confused looks while a few guys predictably decide to follow the half naked girls.');
                    qspCall(s, 'arousal', 'voyeur', 1);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
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
                      scene.img('images/locations/city/island/university/dorm/hallway/events/floor/petition_girl.jpg');
                      scene.text('As you walk down the hallway, you notice a girl stopping everyone and asking them to sign a petition. As you get close, she turns to you. "Will you sign the petition?"');
                      scene.text('You look down at the clipboard she\'s carrying. "What\'s it for?"');
                      scene.text('She smiles as you seem to take an interest in her petition. "It\'s to get the library hours extended to 2am. Some of us need to study very late and these dorms are just too loud at that time. Will you sign it?"');
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
                    }
                    scene.actions([
                      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
                ]);
              }
              scene.actions([
                { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
              ]);
            }
            scene.actions([
              { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
            ]);
          }
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
          ]);
        }
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
        ]);
      }
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  }
  scene.build();
}

export const uni_dorm_events: LocationDef = {
  name: 'uni_dorm_events',
  title: 'As you walk down the hall, you see two girls grinding and da',
  region: 'other',
  description: ['As you walk down the hall, you see two girls grinding and dancing provocatively against each other while another takes photos with her phone. Some boys are also watching them.'],
  enter: enter,
};
