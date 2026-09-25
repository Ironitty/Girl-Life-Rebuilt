import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBench(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_aptcourtev', 'bench');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).track_loop = 'sound/outsideschool.mp3';
    (s as any).volume = 80;
    (s as any).music_loop = 1;
  }
  if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/resident/apartment/events/benchw.jpg');
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/bench.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/benchn.jpg');
    }
  }
  scene.text('You take a seat on one of the benches in the courtyard and relax.');
  if (((s as any).mc_inventory ?? 0)?.['mag_cooking'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['mag_fashion'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['mag_computer'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['mag_biography'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['mag_knitting'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['mag_fitness'] === 1) {
    scene.actions([
      { label: 'Read a magazine', goto: ['pav_aptcourtev', 'read'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Smoke', goto: ['pav_aptcourtev', 'smoke'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', goto: ['pav_aptcourtev', 'smoke_joint'] },
    ]);
  }
  scene.actions([
    { label: 'Get up', goto: ['pav_complex', 'start'] },
    { label: 'Wait thirty minutes', goto: ['pav_aptcourtev', 'wait'] },
    { label: 'Play on your phone', goto: ['pav_aptcourtev', 'phone'] },
  ]);
  scene.build();
}

function enterWait(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) === 1) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      qspGoto(s, 'pav_aptcourtev', 'events1');
    } else {
      qspGoto(s, 'pav_aptcourtev', 'events2');
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/benchw.jpg');
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/bench.jpg"></center>`);
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/benchn.jpg"></center>`);
      }
    }
    scene.text('You sit back and relax, watching the goings on in the courtyard. After half an hour, nothing interesting has happened.');
    scene.actions([
      { label: 'Get up', goto: ['pav_complex', 'start'] },
      { label: 'Keep sitting', goto: ['pav_aptcourtev', 'wait'] },
    ]);
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/benchreadw.jpg');
  scene.text('You take one of your magazines out of your purse and start reading it while enjoying the fresh air.');
  scene.actions([
    { label: 'Get up', goto: ['pav_complex', 'start'] },
    { label: 'Keep reading', goto: ['pav_aptcourtev', 'read'] },
  ]);
  scene.build();
}

function enterPhone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/benchphonew.jpg');
  scene.text('You pull out your phone and check your messages before playing a game.');
  scene.actions([
    { label: 'Get up', goto: ['pav_complex', 'start'] },
    { label: 'Keep playing on your phone', goto: ['pav_aptcourtev', 'phone'] },
  ]);
  scene.build();
}

function enterSmoke(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/benchsmoke.jpg');
  scene.text('You take out a pack of smokes and light a cigarette before taking a long slow drag off it as you relax on the bench.');
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Have another cigarette', goto: ['pav_aptcourtev', 'smoke'] },
    ]);
  }
  scene.actions([
    { label: 'Get up', goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

function enterSmokeJoint(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'drugs', 'joint');
  scene.img('images/locations/pavlovsk/resident/apartment/events/benchsmoke.jpg');
  scene.text('You pull a joint of your purse and light it up. Trying to act like you\'re just smoking a cigarette, you take a long slow drag off it as you relax on the bench. You\'re soon feeling the effects.');
  scene.actions([
    { label: 'Get up', goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

function enterEvents1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  while (true) {
    if (((s as any).rolanmeet ?? 0) === 0  ||  ((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).events = (Math.floor(Math.random() * 21) + 0);
    } else {
      (s as any).events = (Math.floor(Math.random() * 23) + 0);
    }
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 50  &&  (Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).anushka_met ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).locat ?? 0)?.['A144'] === 23  ||  ((s as any).locat ?? 0)?.['A144'] === 22)) {
      if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
        break;
      }
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 8) {
        break;
      }
      (s as any).anushka_met = ((s as any).daystart ?? 0);
      scene.img('images/characters/shared/headshots_main/big144.jpg');
      scene.text(`As you walk into the building, you nearly run into Anushka. "Hey ${((s as any).pcs_nickname ?? '')}, what's up?" she asks.`);
      scene.text('"Just killing time. Bored, you know?" you reply.');
      scene.text('She nods and finishes checking the mail. "Yeah, I know how that is. Hey, want to come up to my place and hang out?"');
      scene.actions([
        { label: 'I can\'t', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
        { label: 'Sure', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['anushapt', 'firstvisit'] },
      ]);
    } else {
      if ((!((s as any).events ?? 0))) {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        scene.img('images/locations/pavlovsk/resident/apartment/events/evbg.jpg');
        scene.text('You notice a boy and girl making out as he fondles her breasts. They seem completely oblivious to the rest of the world and are just enjoying each other. You don\'t know either of them.');
        qspCall(s, 'arousal', 'voyeur_sex', (-10));
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        if (((s as any).events ?? 0) === 1) {
          qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/evbgkiss` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
          scene.text('A boy and girl are sitting on one of the benches making out passionately, seemingly unaware or not caring that anyone is watching them. You think you recognize the boy as part of the group that smoke in the stairwell.');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          if (((s as any).events ?? 0) === 2) {
            if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
              break;
            }
            (s as any).minut = ((s as any).minut ?? 0) + 3;
            scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/evggkiss` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
            if ((Math.floor(Math.random() * 4) + 1) === 1  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 14)) {
              scene.text('You notice Lena and Lera passionately kissing each other, completely unaware that anyone is watching them.');
            } else {
              scene.text('You notice two girls passionately kissing each other, completely unaware that anyone is watching them.');
            }
            qspCall(s, 'arousal', 'voyeur', (-10));
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Move away', goto: ['pav_complex', 'start'] },
            ]);
          } else {
            if (((s as any).events ?? 0) === 3) {
              scene.img('images/locations/pavlovsk/resident/apartment/events/evggphone.jpg');
              scene.text('You see two girls laying on the ground giggling about something as one of them talks on the phone.');
              scene.actions([
                { label: 'Move away', goto: ['pav_complex', 'start'] },
              ]);
            } else {
              if (((s as any).events ?? 0) === 4) {
                qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                scene.img('images/locations/pavlovsk/resident/apartment/events/evggupsk.jpg');
                scene.text('A group of girls are sitting on the ground, talking to each other. From this vantage point, you can see up one of their skirts. You wonder if they are aware of the fact.');
                scene.actions([
                  { label: 'Move away', goto: ['pav_complex', 'start'] },
                ]);
              } else {
                if (((s as any).events ?? 0) === 5) {
                  qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/evupsk` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
                  scene.text('A girl is sitting on one of the other benches directly across from you. Her legs are spread slightly apart, giving you a perfect upskirt view of her panties. You\'re not sure if she\'s doing it on purpose or not.');
                  scene.actions([
                    { label: 'Move away', goto: ['pav_complex', 'start'] },
                  ]);
                } else {
                  if (((s as any).events ?? 0) === 6) {
                    qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                    scene.img('images/locations/pavlovsk/resident/apartment/events/evupsknop1.jpg');
                    scene.text('There is a girl sitting on one of the other benches almost directly across from you. Her legs are spread slightly apart, giving you a perfect upskirt view of her pussy. She apparently chose not to wear panties today, which makes you think she\'s doing it on purpose.');
                    scene.actions([
                      { label: 'Move away', goto: ['pav_complex', 'start'] },
                    ]);
                  } else {
                    if (((s as any).events ?? 0) === 7) {
                      scene.img('images/locations/pavlovsk/resident/apartment/events/3girls.jpg');
                      scene.text('You see some guys checking out three girls, who seem well aware of their attention. One of the boys says something to his friends and they seem to egg him on, but before he can do what ever is he had planned, the girl on the right walks around her friend in the center, firmly grips her hips and starts to pretend fuck her from behind, which causes her friends to laugh and the boys to hoot and holler.');
                      scene.text('The girl on the left grabs the head of her friend in the center, turns towards her and pulls her head down to her crotch before pretending to fuck her mouth.');
                      scene.text('The middle girl seems to get into it and pretends to suck a dick while her other friend pounds against her ass. They keep this up until the boys start to approach them, at which point they flip the boys off and run away, leaving the boys frustrated and hollering some unpleasant things after them.');
                      scene.actions([
                        { label: 'Move away', goto: ['pav_complex', 'start'] },
                      ]);
                    } else {
                      if (((s as any).events ?? 0) === 8) {
                        qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                        scene.img('images/locations/pavlovsk/resident/apartment/events/3moons.jpg');
                        scene.text('You notice three girls standing at the alley near the garages. Every time a car drives down the alley, they turn around and moon it. After several minutes, they grow bored and walk away down the alley.');
                        scene.actions([
                          { label: 'Move away', goto: ['pav_complex', 'start'] },
                        ]);
                      } else {
                        if (((s as any).events ?? 0) === 9) {
                          if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).locat ?? 0)?.['A144'] < 22  ||  ((s as any).locat ?? 0)?.['A144'] > 23) {
                            break;
                          }
                          qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                          scene.img('images/locations/pavlovsk/resident/apartment/events/eatu.jpg');
                          scene.text('You see Anushka across the courtyard. When she notices you looking, she raises her hand up to her face and spreads two fingers in a V in front of her mouth before sticking her tongue out between them in the universal sign for \'eat me\'. Before you can respond, she heads inside her building.');
                          scene.actions([
                            { label: 'Move away', goto: ['pav_complex', 'start'] },
                            { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_aptcourtev1', 'follownush'] },
                          ]);
                        } else {
                          if (((s as any).events ?? 0) === 10) {
                            scene.img('images/locations/pavlovsk/resident/apartment/events/gop1.jpg');
                            scene.text('A small group of gopniks are sitting on one of the benches. You\'ve seen them before, hanging out and smoking in the stairwell. They are all older than you, and you think one or two of them might have gone to school with your sister. They give you a predatory look and seem to be getting pretty drunk, which is not a good combination.');
                            scene.actions([
                              { label: 'Move away', goto: ['pav_complex', 'start'] },
                            ]);
                          } else {
                            if (((s as any).events ?? 0) === 11) {
                              scene.img('images/locations/pavlovsk/resident/apartment/events/roughnight.jpg');
                              scene.text('You see a girl sitting on one of the trashcans with a bottle of alcohol in hand. Her stockings are torn, her make-up is smeared, her hair is messed up and one of the straps of her dress is partially torn. She looks like she has had a really rough time recently. She notices you looking at her and takes another drink from the bottle before walking away. You think that might have been one of Kolka\'s friends.');
                              scene.actions([
                                { label: 'Move away', goto: ['pav_complex', 'start'] },
                              ]);
                            } else {
                              if (((s as any).events ?? 0) === 12) {
                                if (((s as any).temper ?? 0) < 10) {
                                  break;
                                }
                                if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
                                  scene.img('images/locations/pavlovsk/resident/apartment/events/waterw.jpg');
                                } else {
                                  scene.img('images/locations/pavlovsk/resident/apartment/events/water.jpg');
                                }
                                scene.text('You notice some young boys heading towards you, the oldest about your brother\'s age. They are all holding water balloons or large open bottles of water. As they get closer, they suddenly run over and start throwing the water on you. They chase you across the courtyard until they break off when they see a new victim.');
                                (s as any).pcs_hairbsh = 0;
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Move away', goto: ['pav_complex', 'start'] },
                                ]);
                              } else {
                                if (((s as any).events ?? 0) === 13) {
                                  scene.img('images/locations/pavlovsk/resident/apartment/events/boys.jpg');
                                  scene.text('A small group of boys, the oldest a year or two younger than your brother, are riding their bikes around near the garages, but they start following you. You can hear them talking, and it sounds like they\'re trying to goad each other into doing something. You never find out what it is, as it seems none of them are willing to do it and they all pedal away.');
                                  scene.actions([
                                    { label: 'Move away', goto: ['pav_complex', 'start'] },
                                  ]);
                                } else {
                                  if (((s as any).events ?? 0) === 14) {
                                    qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                                    (s as any).minut = ((s as any).minut ?? 0) + 3;
                                    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/sex/evbj` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
                                    (s as any).text_rand = (Math.floor(Math.random() * 3) + 0);
                                    if (((s as any).text_rand ?? 0) === 1  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).week ?? 0) > 5  ||  ((s as any).hour ?? 0) >= 14)) {
                                      scene.text('You spot Lavrenti leaning against a wall near the storage buildings and are surprised to see Lena squatting down in front of him as she sucks his dick, seemingly enjoying it as much as Lavrenti. After a few minutes, you hear him moan, his cock never leaving her mouth as she continues to milk him for another minute before standing up. They walk away together as you wonder if Vitek is aware of what his sister is getting up to, though you definitely aren\'t going to ask him.');
                                    } else {
                                      if (((s as any).text_rand ?? 0) === 2  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).locat ?? 0)?.['Anya'] === 9  ||  ((s as any).locat ?? 0)?.['Anya'] === 13  ||  ((s as any).locat ?? 0)?.['Anya'] === 14  ||  ((s as any).locat ?? 0)?.['Anya'] === 24)  &&  (((s as any).sisterQW ?? 0)?.['AnyaRomaQW'] === 0  ||  ((s as any).sisterQW ?? 0)?.['partytalk'] > 0)) {
                                        scene.text('You spot a guy you think you recognize leaning against a wall near the storage buildings, but it\'s hard to tell as his face is turned to the side and tilted down. There\'s a girl kneeling in front of him, giving him an enthusiastic blowjob. You move to get a better view and realize it is Roma, your sister\'s boyfriend and… Oh god! It\'s your sister! She\'s sucking him for all she\'s worth, taking his dick all the way down her throat. Part of you knows you shouldn\'t watch, but another can\'t look away. Where did your sister learn these skills? Can she teach you?');
                                        scene.text('You\'re pulled out of your thoughts when you hear Roma moan, his hand gripping the back of Anya\'s head as he cums hard in her mouth. Anya doesn\'t resist and continues to suck, even after Roma removes his hand from her head. She sucks his cock clean before standing up. You instinctively duck, hoping you\'re not noticed. They briefly kiss before walking away hand in hand.');
                                      } else {
                                        scene.text('You spot an extremely happy-looking guy leaning up against the wall near the storage buildings as a girl gives him an enthusiastic blowjob. After a few minutes, you hear the guy moan, his cock never leaving the girl\'s mouth as she continues to milk him for another minute before standing up. The two then walk away together.');
                                      }
                                    }
                                    (s as any).text_rand = undefined;
                                    qspCall(s, 'arousal', 'voyeur_sex', (-10));
                                    qspCall(s, 'arousal', 'end');
                                    scene.actions([
                                      { label: 'Move away', goto: ['pav_complex', 'start'] },
                                    ]);
                                  } else {
                                    if (((s as any).events ?? 0) === 15) {
                                      if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) < 14)) {
                                        break;
                                      }
                                      qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                                      (s as any).minut = ((s as any).minut ?? 0) + 3;
                                      scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evgopbj.jpg');
                                      if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
                                        scene.text('Between two of the storage buildings, you notice Sonia squatting between Vitek, Dan and Vasily, taking turns sucking their cocks. It doesn\'t take too long before the three gopniks start jerking their dicks and cumming all over Sonia\'s face.');
                                        scene.text('The trio begin laughing as they put their dicks back in the pants. Dan then pulls out his phone and starts taking photos of Sonia covered in their cum. As she gets to her feet, Vitek and Vasily grab her by the arms and start pulling her towards the street, never giving her a chance to clean the cum from her face. She tries to struggle, but they don\'t seem to care and they\'re soon gone.');
                                      } else {
                                        scene.text('Between two of the storage buildings, you notice a girl you don\'t recognize squatting between Vitek, Dan and Vasily, taking turns sucking their cocks. It doesn\'t take too long before the three Gopniks start jerking their dicks and cumming all over the girl\'s face.');
                                        scene.text('The trio begin laughing as they put their dicks back in the pants. Dan then pulls out his phone and starts taking photos of the girl covered in their cum. As she gets to her feet, Vitek and Vasily grab her by the arms and start pulling her towards the street, never giving her a chance to clean the cum from her face. She tries to resist, but they don\'t seem to care and they\'re soon gone.');
                                      }
                                      qspCall(s, 'arousal', 'voyeur_sex', (-10));
                                      qspCall(s, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Move away', goto: ['pav_complex', 'start'] },
                                      ]);
                                    } else {
                                      if (((s as any).events ?? 0) === 16) {
                                        if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).locat ?? 0)?.['A144'] < 22  ||  ((s as any).locat ?? 0)?.['A144'] > 23) {
                                          break;
                                        }
                                        scene.img('images/locations/pavlovsk/resident/apartment/events/nushbench.jpg');
                                        scene.text('As you walk through the courtyard, you see Anushka sitting on one of the benches. She hasn\'t noticed you yet.');
                                        scene.actions([
                                          { label: 'Move away', goto: ['pav_complex', 'start'] },
                                          { label: 'Take a seat next to her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(st, 'Stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nushbenchtalk.jpg');
    scene.text(`You stop and take a seat next to her, and she glances over as you sit down. "Hey ${((st as any).pcs_nickname ?? '')}, what's up?" she asks.`);
    scene.text('"Just killing time. Bored, you know?" you reply.');
    scene.text('She nods. "Yeah, I know how that is. I was so bored I was making up little stories for what the people were doing." She points at some old guy walking towards the garages. "Take him for example. He used to be part of the KGB. Now he\'s a freelance assassin and was just hired to go kill that shrill of an old woman that is always sitting in the market yelling at every girl wearing a skirt higher than her ankle. You know the one."');
    scene.text('You smile and nod. "So did you hire him?"');
    scene.text('That gets a laugh from her. "Okay, your turn." You take a moment to find someone else and start making up your own story. The two of you spend the next few minutes laughing and making up stories about the different people you see passing through the courtyard before she gets a message and jumps up with a huge grin. "Need to go, see you later." She runs off without another word.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
                                        ]);
                                      } else {
                                        if (((s as any).events ?? 0) === 17) {
                                          qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                                          scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke.jpg');
                                          scene.text('You notice a few boys from the complex smoking near one of the buildings by the garages.');
                                          scene.actions([
                                            { label: 'Move away', goto: ['pav_complex', 'start'] },
                                            { label: 'Ask for a cigarette', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke2.jpg');
    scene.text('You walk over to the boys and give them a smile. "Hey, can I bum one of those?" you ask while indicating the cigarette.');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('They give you a look of disgust. "Get lost, slut! We don\'t want to be seen with you!" Not sure what to say and not wanting to make a scene, you quickly walk away.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if ((((st as any).fame ?? 0)?.['pav_slut'] >= 100  &&  ((st as any).grupTipe ?? 0) !== 4)  ||  (((st as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((st as any).grupTipe ?? 0) === 4)) {
        scene.text('They look you over and one of them seems to recognize you. "Oh it\'s you." You\'re a little surprised, and his friend seems just as confused before the first one whispers something and he smiles.');
        scene.text('"Sure. You can have a cigarette… if you suck our dicks first."');
        scene.text('"What? Why the fuck would I do that?" you reply.');
        scene.text('He snorts a laugh. "Come on, everyone knows you\'re a cocksucker. So get down on your knees and suck us off or get lost!"');
        qspCall(st, 'willpower', 'bj', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down on your knees', goto: ['pav_aptcourtev', 'smokeblowjob'] },
        ]);
      } else {
        scene.text('One of the boys nods and pulls a pack out of his pocket before pulling a cigarette out and handing it to you.');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
          { label: 'Smoke with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke2.jpg');
    scene.text('You take the cigarette and one of the boys lights it for you. You take a long slow draw off it. "Thanks. I needed that."');
    scene.text('They smile in return. "Sure, no problem."');
    scene.text('The three of you talk about some of the neighbors you both know and things you\'ve seen around the complex while you smoke. Once you finish your cigarette, you thank them again before moving on.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        ]);
      }
    }
  } },
                                          ]);
                                        } else {
                                          if (((s as any).events ?? 0) === 18) {
                                            qspGoto(s, 'pav_complexrolan', '');
                                          } else {
                                            qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                                            scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim_friends.jpg');
                                            if (((s as any).maksimQW ?? 0)?.['QWstage'] <= 0) {
                                              scene.text('You notice a few boys a few years younger than your brother, that can\'t be more than twelve or thirteen, hanging out together smoking cigarettes. You think you have seen them around before, you think at least one of them lives in one of the other buildings.');
                                              scene.actions([
                                                { label: 'Move away', goto: ['pav_complex', 'start'] },
                                              ]);
                                            } else {
                                              scene.text('You notice Maksim, Anushka\'s little brother and a few boys his age, hanging out together smoking cigarettes.');
                                              if (((s as any).maksimQW ?? 0)?.['blackmail'] === 1) {
                                                scene.actions([
                                                  { label: 'Go over and talk to him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail'] = 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You walk over to the boys and give them a smile. "What are you boys up to." you ask.');
    scene.text('Maksim gives you a once over obviously checking out your body again as he grins. "Well if it isn\'t my favorite slut."');
    scene.text('One of the other boys asks Maksim. "Who\'s the thot?"');
    scene.text('Maksim glances over to him. "The slutty ass friend of my sister I told you guys about."');
    scene.text('Another says. "This is her?" Suddenly they are all looking at you like a piece of meat. Maksim must have told them about seeing your tits.');
    scene.text('You shake your head at them. "This one? What have you been telling your friends about me?" You ask Maksim.');
    scene.text('Maksim grins as he says. "Only the truth. That you like spying on my sister getting fucked like a slut and how I caught you, then you showing me your tits." His friends hang on his every word, they all seemed impressed, likely none of them have seen a pair of tits in person before.');
    scene.text('You sigh and now regret coming over. "Is that so?"');
    scene.text('Maksim nods to you. "Yep, though I am not sure they quite believe me though. So why don\'t you prove it to them."');
    scene.text('At first, you can\'t believe he would make this demand of you, but then you realize of course he would, he is trying to show off for his little friends. "Right here?"');
    scene.text('He looks around as do you. At least no one else is currently around if you have to do it. "Yeah right here, no one is around."');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "No. I am not going to show you and your friends my tits."');
    scene.text('One of the other boys says to the rest. "See told you Maksim was lying." Others jump in with similar comments');
    scene.text('Now Maksim turns red from anger and embarrassment. "If you don\'t I will tell Nush you were spying on her."');
    scene.text('You see how he is getting desperate, you sigh a bit and decide to throw him a bone. "Look our deal was I show… YOU… my tits, not your friends. So I am not breaking our deal."');
    scene.text('Suddenly his friends all shut up and one of them asks. "Wait, he was telling the truth?" While Maksim moves over to stand next to you with a smug look on his face.');
    scene.text('You nod. "Yeah but only him, not his friends." Suddenly all his friends look at him like he is the coolest person they ever meet. "Well I should get going." You decide now is a good time to leave before they start trying to get you to show them all your tits. As you are walking off, you feel a slap on your ass, you glance back to see a smug Maksim standing there watching you, you just shake your head and leave.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Flash them', goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
    ]);
  } },
                                                ]);
                                              } else {
                                                if (((s as any).maksimQW ?? 0)?.['blackmail'] === 2) {
                                                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                                                  qspCall(s, 'stat', '');
                                                  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                                                  scene.text('You walk over to the boys and give them a smile. "What are you boys up to." you ask.');
                                                  scene.text('Maksim gives you a once over obviously checking out your body again as he grins. "Well if it isn\'t my favorite slut."');
                                                  scene.text('Several of the boys leer at you. "Maksim\'s bitch is back."');
                                                  scene.text('The rest of the boys all laugh, they all seem to be like Maksim and have no respect for girls at all. Gopniks in the making you figure.');
                                                  scene.text('You shake your head at them. "What are you boys doing?" You ask Maksim.');
                                                  scene.text('Maksim grins. "Just talking about the sluts in school and which one of us is going to bang them first." His friends seem to all agree with his words a few others throw in a few choice words, one of them naming a girl you never heard of.');
                                                  scene.text('You shake your head slightly. "Is that so?"');
                                                  scene.text('One of his friends nudges him. Maksim glances at him then back to you. "I think we should extend our deal and you should flash my friends your tits."');
                                                  scene.text('At first, you can\'t believe he would make this demand of you, but then you realize of course he would, he is trying to show off for his little friends. "Right here?"');
                                                  scene.text('He looks around as do you. At least no one else is currently around if you have to do it. "Yeah right here, no one is around."');
                                                  qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
                                                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                                    scene.actions([
                                                      { label: 'Tell him no', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                                    ]);
                                                  } else {
                                                    scene.actions([
                                                      { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "No. I told you last time, I\'m at not showing your friends."');
    scene.text('One of the other boys says to the rest. "You said you would talk to her." Others jump in with similar comments.');
    scene.text('Now Maksim gives them an annoyed look. "I told you I would work on it." While Maksim moves over to stand next to you as he says to you. "Do it or I will tell Nush you were spying on her."');
    scene.text('The look on his face says he is serious, you really don\'t want her to know. Maybe she wouldn\'t mind but maybe she would, you have to admit it is a little creepy spying on your friend having sex.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "Nope, you will just have to tell her then."');
    scene.text('Now Maksim looks angry. "Fine I will."');
    scene.text('Then you smile to him. "Just remember if you do then you will never see these again." You say as your grab and lift your own tits.');
    scene.text('You see the light go off in his head. He knows if he tells, he will have no blackmail over you to show you his tits in private. "Whatever get out of here." You are unsure what he will decide, but you think he will keep your secret. As you are walking off, you feel a slap on your ass. You glance back to see a smug Maksim standing there watching you. You just shake your head and leave.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to flash them', handler: (st: GameState) => {
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail'] = 3;
  }, goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
    ]);
  } },
                                                    ]);
                                                  }
                                                  scene.actions([
                                                    { label: 'Flash them', handler: (st: GameState) => {
    ((st as any).maksimQW = (st as any).maksimQW ?? {})['blackmail'] = 3;
  }, goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
                                                  ]);
                                                } else {
                                                  if (((s as any).maksimQW ?? 0)?.['blackmail'] >= 3) {
                                                    (s as any).minut = ((s as any).minut ?? 0) + 5;
                                                    qspCall(s, 'stat', '');
                                                    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                                                    scene.text('You walk over to the boys and give them a smile. "What are you boys up to." you ask.');
                                                    scene.text('Maksim gives you a once over obviously checking out your body again as he grins. "Well if it isn\'t our favorite slut."');
                                                    scene.text('Several of the boys leer at you. "Maksim\'s bitch is back. Show us your tits again."');
                                                    scene.text('The rest of the boys all laugh, they all seem to be like Maksim and have no respect for girls at all. Gopniks in the making you figure.');
                                                    scene.text('You just sigh and soon all of them are badgering you to show them your tits.');
                                                    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
                                                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                                      scene.actions([
                                                        { label: 'Tell him no', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                                      ]);
                                                    } else {
                                                      scene.actions([
                                                        { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "No. I showed you all last time, not in the mood today."');
    scene.text('Now the boys all start trying to get Maksim to force you to flash them again.');
    scene.text('Now Maksim gives them an annoyed look. "Shut up, let me deal with this." While Maksim moves over to stand next to you as he says to you. "Do it or I will tell Nush you were spying on her."');
    scene.text('The look on his face says he is serious, you really don\'t want her to know. Maybe she wouldn\'t mind but maybe she would, you have to admit it is a little creepy spying on your friend having sex.');
    qspCall(st, 'willpower', 'exhib', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "Nope, you will just have to tell her then."');
    scene.text('Now Maksim looks angry. "Fine I will."');
    scene.text('Then you smile to him. "Just remember if you do then you will never see these again." You say as your grab and lift your own tits.');
    scene.text('You see the light go off in his head. He knows if he tells, he will have no blackmail over you to show you his tits in private. "Whatever get out of here." You are unsure what he will decide but you think he will keep your secret. As you are walking off, you feel a slap on your ass, you glance back to see a smug Maksim standing there watching you, you just shake your head and leave.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to flash them again', goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
    ]);
  } },
                                                      ]);
                                                    }
                                                    scene.actions([
                                                      { label: 'Flash them again', goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
                                                    ]);
                                                  } else {
                                                    scene.actions([
                                                      { label: 'Go over and talk to him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('You walk over to the boys and give them a smile. "What are you boys up to." you ask.');
      scene.text('Maksim gives you a once over obviously checking out your body again. "What up slut?"');
      scene.text('One of the other boys asks Maksim. "Who\'s the thot?"');
      scene.text('Maksim glances over to him. "One of my sisters slutty ass friends."');
      scene.text('You shake your head at them. "No need to be rude."');
      scene.text('Maksim reaches down and grabs his crotch lifting it a bit as he says. "Why don\'t you do something useful with that pretty mouth of yours and suck my dick, like a good little slut." That makes his friends laugh, likely as he wanted, you are sure he is showing off for them.');
      scene.text('You smirk to him. "I don\'t date little boys, only grown men."');
      scene.text('His friends laugh a bit at your comment, while Maksim gets dark red in anger. "I\'ll show you who\'s a man." He says as he starts to unbutton his pants. Not wanting to see his little dick you turn and walk off while flipping him the bird.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.text('You walk over to the boys and give them a smile. "What are you boys up to." you ask.');
      scene.text('Maksim gives you a look of annoyance. "What do you want? Isn\'t it bad enough you come over to our apartment all the time, now you have to bother me when I am hanging out with my friends."');
      scene.text('One of the other boys asks Maksim. "Who\'s the cow?"');
      scene.text('Maksim glances over to him. "One of my sisters ugly ass friends."');
      scene.text('You shake your head at them. "No need to be rude."');
      scene.text('Maksim takes a puff off his cigarette and makes a lame attempt to blow it at your face but you are not close enough. "We are not friends you dumb cow, so go away and stop bothering me." You sigh slightly and decide it is better to leave than argue with a bunch of pre-teens.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
  } },
                                                    ]);
                                                  }
                                                }
                                              }
                                              scene.actions([
                                                { label: 'Move away', goto: ['pav_complex', 'start'] },
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
  scene.build();
}

function enterMaksimFriendsFlash(s: GameState, scene: SceneBuilder): void {
  ((s as any).maksimQW = (s as any).maksimQW ?? {})['blackmail_flash_friends'] = ((s as any).maksimQW['blackmail_flash_friends'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'sex', 3);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  if (((s as any).maksimQW ?? 0)?.['blackmail_flash_friends'] < 5) {
    (s as any).flash_image = 'images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/friends_tits.jpg';
    ((s as any).flash_text = (s as any).flash_text ?? {})[0] = 'You sigh, knowing what he wants. "Fine!" You say as you start to show him your tits again.';
    ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>He shakes his head and grins. "Not this time, show us your pussy!"');
    ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>You can\'t believe you let this little shit blackmail you, into showing him and his friends your pussy. "Seriously?"');
    ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>He laughs. "Yeah now do it slut."');
    ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br><br>You sigh, you know the little snitch would tell Anushka, so you do as you are told and pull up your skirt showing off your bare pussy.');
    ((s as any).flash_text = (s as any).flash_text ?? {})[1] = 'He stares are your pussy like the rest then looks up at your face and stares you right in the eye as he says. "Ok that\'s enough, you can go."';
    ((s as any).flash_text = (s as any).flash_text ?? {})[1] = ((s as any).flash_text[1] ?? 0) + ('<br>You frown and drop your skirt, to cover your pussy back up. Then you walk away, not wanting to deal with them anymore, as you walk off you can hear his friends asking him all sorts of questions in awe of him.');
    ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[0] = 'humiliation';
    ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[1] = 'sub';
    qspCall(s, 'flash', 'tits', 'outdoors', 1, 2);
  } else {
    if (((s as any).maksimQW ?? 0)?.['blackmail_flash_friends'] < 10) {
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = 'You sigh, knowing what he wants. "Fine!" You say as you start to show him your tits again.';
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>He shakes his head and grins. "Not this time, show us your pussy!"');
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>You can\'t believe you let this little shit blackmail you, into showing him and his friends your pussy. "Seriously?"');
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br>He laughs. "Yeah now do it slut."');
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('<br><br>You sigh, you know the little snitch would tell Anushka, so you do as you are told and pull up your skirt showing off your bare pussy.');
      ((s as any).flash_text = (s as any).flash_text ?? {})[1] = 'He stares are your pussy like the rest then looks up at your face and stares you right in the eye as he says. "Ok that\'s enough, you can go."';
      if (((s as any).PCLoSkirt ?? 0) > 0) {
        (s as any).flash_image = 'images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/friends_pussy2.jpg';
        ((s as any).flash_text = (s as any).flash_text ?? {})[1] = ((s as any).flash_text[1] ?? 0) + ('You frown and drop your skirt, to cover your pussy back up. Then you walk away, not wanting to deal with them anymore, as you walk off you can hear his friends asking him all sorts of questions in awe of him.');
      } else {
        (s as any).flash_image = 'images/pc/activities/flashing/pants/outside/pussy/7.jpg';
        ((s as any).flash_text = (s as any).flash_text ?? {})[1] = ((s as any).flash_text[1] ?? 0) + ('<br>You frown and pull your pants back up, to cover your pussy back up. Then you walk away, not wanting to deal with them anymore, as you walk off you can hear his friends asking him all sorts of questions in awe of him.');
      }
      ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[0] = 'humiliation';
      ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[1] = 'sub';
      qspCall(s, 'flash', 'pussy', 'outdoors', 1, 2);
    } else {
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = 'You sigh, knowing what he wants. "Fine!" You say as you start to show him your pussy again.';
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('He shakes his head and grins. "Not this time, show us everything!"');
      ((s as any).flash_text = (s as any).flash_text ?? {})[0] = ((s as any).flash_text[0] ?? 0) + ('You sigh, you know the little snitch would tell Anushka, so you do as you are told and pull up your skirt showing off your bare pussy, while pulling down your top to expose your tits.');
      ((s as any).flash_text = (s as any).flash_text ?? {})[1] = 'He stares at you like the rest then looks up at your face and stares you right in the eye as he says. "Ok that\'s enough, you can go."';
      if (((s as any).PCLoSkirt ?? 0) > 0) {
        (s as any).flash_image = 'images/pc/activities/flashing/dress/outside/full/4.jpg';
        ((s as any).flash_text = (s as any).flash_text ?? {})[1] = ((s as any).flash_text[1] ?? 0) + ('You frown and drop your skirt, to cover your pussy back up, while pulling up your top to cover up your breasts. Then you walk away, not wanting to deal with them anymore, as you walk off you can hear his friends asking him all sorts of questions in awe of him.');
      } else {
        (s as any).flash_image = 'images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/friends_full1.jpg';
        ((s as any).flash_text = (s as any).flash_text ?? {})[1] = ((s as any).flash_text[1] ?? 0) + ('You frown and pull your pants up to cover your pussy back up, while pulling up your top to cover up your breasts. Then you walk away, not wanting to deal with them anymore, as you walk off you can hear his friends asking him all sorts of questions in awe of him.');
      }
      ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[0] = 'humiliation';
      ((s as any).flash_arousal = (s as any).flash_arousal ?? {})[1] = 'sub';
      qspCall(s, 'flash', 'pussy', 'outdoors', 1, 2);
    }
  }
  scene.actions([
    { label: 'Move away', goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

function enterEvents2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  while (true) {
    if (((s as any).pavComplex_met_dealer ?? 0) < 3) {
      (s as any).nightevents = (Math.floor(Math.random() * 14) + 1);
    } else {
      (s as any).nightevents = (Math.floor(Math.random() * 12) + 1);
    }
    if (((s as any).nightevents ?? 0) === 1) {
      if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 3)  ||  ((s as any).hour ?? 0) > 6) {
        break;
      }
      qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evanal.jpg');
      scene.text('A young girl is bent over a bench near the garages, her skirt pushed up and her panties hanging off her left ankle as a man pounds her ass as quickly as he can while pulling her hair. The man appears older, about your stepdad\'s age if you had to guess, though you can\'t really see his face as their location is fairly obscured. You think you recognize the girl as one of your brother\'s classmates. Not wanting to get caught watching, you move on.');
      qspCall(s, 'arousal', 'voyeur_sex', (-10));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((s as any).nightevents ?? 0) === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        scene.img('images/locations/pavlovsk/resident/apartment/events/boygirlplay.jpg');
        scene.text('A boy and a girl are talking near one of the doors to the buildings before she turns her back to him and he pushes her forward. They start dry humping and seem to really get into it since it doesn\'t take long for them to quickly head inside.');
        qspCall(s, 'arousal', 'voyeur', (-10));
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        if (((s as any).nightevents ?? 0) === 3) {
          qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evbgsex.jpg');
          scene.text('A young girl is bent over and propped against the brick wall near the garages. Her skirt is pulled up across her stomach and her panties are around her right ankle. Behind her, a guy is pounding her pussy for all he\'s worth, his hands glued to her hips. You think you recognize the girl, though you\'re at loss for a name. A friend of your sister, perhaps?');
          qspCall(s, 'arousal', 'voyeur_sex', (-10));
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          if (((s as any).nightevents ?? 0) === 4) {
            qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
            (s as any).minut = ((s as any).minut ?? 0) + 3;
            scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evbjn.jpg');
            (s as any).text_rand = (Math.floor(Math.random() * 3) + 0);
            if (((s as any).text_rand ?? 0) === 1  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 4)  ||  ((s as any).hour ?? 0) < 7)) {
              scene.text('You spot Lavrenti leaning against a wall near the storage buildings and are surprised to see Lena squatting down in front of him as she sucks his dick, seemingly enjoying it as much as Lavrenti. After a few minutes, you hear him moan, his cock never leaving her mouth as she continues to milk him for another minute before standing up. They walk away together as you wonder if Vitek is aware of what his sister is getting up to, though you definitely aren\'t going to ask him.');
            } else {
              if (((s as any).text_rand ?? 0) === 2  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).locat ?? 0)?.['Anya'] === 9  ||  ((s as any).locat ?? 0)?.['Anya'] === 13  ||  ((s as any).locat ?? 0)?.['Anya'] === 14  ||  ((s as any).locat ?? 0)?.['Anya'] === 24)  &&  (((s as any).sisterQW ?? 0)?.['AnyaRomaQW'] === 0  ||  ((s as any).sisterQW ?? 0)?.['partytalk'] > 0)) {
                scene.text('You spot a guy you think you recognize leaning against a wall near the storage buildings, but it\'s hard to tell as his face is turned to the side and tilted down. There\'s a girl kneeling in front of him, giving him an enthusiastic blowjob. You move to get a better view and realize it is Roma, your sister\'s boyfriend and… Oh god! It\'s your sister! She\'s sucking him for all she\'s worth, taking his dick all the way down her throat. Part of you knows you shouldn\'t watch, but another can\'t look away. Where did your sister learn these skills? Can she teach you?');
                scene.text('You\'re pulled out of your thoughts when you hear Roma moan, his hand gripping the back of Anya\'s head as he cums hard in her mouth. Anya doesn\'t resist and continues to suck, even after Roma removes his hand from her head. She sucks his cock clean before standing up. You instinctively duck, hoping you\'re not noticed. They briefly kiss before walking away hand in hand.');
              } else {
                scene.text('You spot an extremely happy-looking guy leaning up against the wall near the storage buildings as a girl gives him an enthusiastic blowjob. After a few minutes, you hear the guy moan, his cock never leaving the girl\'s mouth as she continues to milk him for another minute before standing up. The two then walk away together.');
              }
            }
            (s as any).text_rand = undefined;
            qspCall(s, 'arousal', 'voyeur_sex', (-10));
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Move away', goto: ['pav_complex', 'start'] },
            ]);
          } else {
            if (((s as any).nightevents ?? 0) === 5) {
              if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 3)  ||  ((s as any).hour ?? 0) > 6) {
                break;
              }
              qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
              (s as any).minut = ((s as any).minut ?? 0) + 3;
              scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evgopbjn.jpg');
              if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
                scene.text('Between two of the storage buildings, you notice Sonia squatting between Vitek, Dan and Vasily, taking turns sucking their cocks. It doesn\'t take too long before the three gopniks start jerking their dicks and cumming all over Sonia\'s face.');
                scene.text('The trio begin laughing as they put their dicks back in the pants. Dan then pulls out his phone and starts taking photos of Sonia covered in their cum. As she gets to her feet, Vitek and Vasily grab her by the arms and start pulling her towards the street, never giving her a chance to clean the cum from her face. She tries to struggle, but they don\'t seem to care and they\'re soon gone.');
              } else {
                scene.text('Between two of the storage buildings, you notice a girl you don\'t recognize squatting between Vitek, Dan and Vasily, taking turns sucking their cocks. It doesn\'t take too long before the three Gopniks start jerking their dicks and cumming all over the girl\'s face.');
                scene.text('The trio begin laughing as they put their dicks back in the pants. Dan then pulls out his phone and starts taking photos of the girl covered in their cum. As she gets to her feet, Vitek and Vasily grab her by the arms and start pulling her towards the street, never giving her a chance to clean the cum from her face. She tries to resist, but they don\'t seem to care and they\'re soon gone.');
              }
              qspCall(s, 'arousal', 'voyeur_sex', (-10));
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Move away', goto: ['pav_complex', 'start'] },
              ]);
            } else {
              if (((s as any).nightevents ?? 0) === 6) {
                qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                scene.img('images/locations/pavlovsk/resident/apartment/events/gopn1.jpg');
                scene.text('You notice a group of gopnik boys and a girl hanging out. They are manhandling her quite a bit, but she seems to be okay with it, or at least is not putting up a fight or trying to get away, which only encourages them. They are soon grabbing her by the tits and pulling her clothes off. It looks like they\'re planning to gangbang her at any moment. Not wishing to get their attention, you move on.');
                scene.actions([
                  { label: 'Move away', goto: ['pav_complex', 'start'] },
                ]);
              } else {
                if (((s as any).nightevents ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/resident/apartment/events/gopn2.jpg');
                  scene.text('You notice a group of gopnik boys and a girl who is stripped down to her panties. They are manhandling her quite a bit, but she seems to be okay with it, or at least is not putting up a fight or trying to get away. One of the guys pulls her into his lap as she notices you looking; she stares at you with a resigned look on her face before turning her attention back to the boys. Not wishing to get the guys\' attention, you move on.');
                  scene.actions([
                    { label: 'Move away', goto: ['pav_complex', 'start'] },
                  ]);
                } else {
                  if (((s as any).nightevents ?? 0) === 8) {
                    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 3)  ||  ((s as any).hour ?? 0) > 6) {
                      break;
                    }
                    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
                      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
                    } else {
                      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
                    }
                    scene.text('You see Vitek, Dan and Vasily sitting on one of the benches in the courtyard, drinking and smoking.');
                    scene.actions([
                      { label: 'Move away', goto: ['pav_complex', 'start'] },
                      { label: 'Join them', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
    }
    scene.text('You walk over and greet them.');
    if (((st as any).grupTipe ?? 0) === 5) {
      scene.text('They give you a look of disgust. "Get lost, loser!"');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. As you sit down, he offers you a beer.');
        qspCall(st, 'willpower', 'drink', 'resist', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse beer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
    }
    scene.text('You refuse the beer and they shrug and share a look. You then tell Vasily about what\'s been going on lately in your life and make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_aptcourtev', 'male_gopnik_beer'] },
        ]);
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to, nerd?" he asks in a teasing tone as you sit down.');
          scene.text('Dan glances over at you with a sneer. "You sure you should be here? This group isn\'t really for people like you." You glance around and notice a few other hard looks being tossed your way.');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          scene.text('Vasily smiles at you and scoots over, giving you a spot to sit between him and Dan. "What you up to?" he asks in a teasing tone as you sit down.');
          scene.text('Dan glances over at you with a sneer. "Looking to slum it a little, princess? Got tired of all the limp dicks you normally hang out with and want to know what a real cock feels like?"');
          scene.text('Vitek grins. "Is that it? You looking for some real cock?"');
          scene.text('Maybe hanging out with them isn\'t the best idea…');
          scene.actions([
            { label: 'Make excuse and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
    }
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time, I need to get going." You wave at them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
    }
    scene.text('You tell Vasily about what\'s been going on lately in your life and make small talk with the guys for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Ask for a beer', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stoogesw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/3stooges.jpg');
    }
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Vasily laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_aptcourtev', 'male_gopnik_beer'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
                    ]);
                  } else {
                    if (((s as any).nightevents ?? 0) === 9) {
                      if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).locat ?? 0)?.['A144'] < 20  ||  ((s as any).locat ?? 0)?.['A144'] === 21  ||  ((s as any).locat ?? 0)?.['A144'] > 23  ||  ((((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).hour ?? 0) > 3)  ||  ((s as any).hour ?? 0) > 6) {
                        break;
                      }
                      scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
                      scene.text('Lena, Lera, Alyona and Anushka are hanging out on one of the benches, drinking beers and smoking cigarettes and weed while laughing and messing around.');
                      scene.actions([
                        { label: 'Move away', goto: ['pav_complex', 'start'] },
                        { label: 'Join them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('You walk over to them. "Hey guys, mind if I join you?"');
    if (((st as any).grupTipe ?? 0) === 5) {
      scene.text('Lena and Lera both give you a look of disgust while Alyona just ignores you.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        scene.text(`They make some room on the bench. "Join us ${((st as any).pcs_nickname ?? '')}," Anushka says.`);
        qspCall(st, 'willpower', 'drink', 'resist', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'refuse beer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('You refuse the beer and they give each other a look, but don\'t say anything. You tell them about what\'s been going on lately in your life and make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_aptcourtev', 'female_gopnik_beer_1'] },
        ]);
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('You are not met with smiles or inviting looks. Lena speaks up first. "What do you want, freak?"');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          scene.text('You are not met with smiles or inviting looks. Lena speaks up first. "What? Looking to slum it for a bit?"');
          scene.text('You smile at them. "I just wanted to hang out if that\'s okay?"');
          scene.text('"Whatever," Lera replies, but they don\'t actively chase you off.');
          scene.actions([
            { label: 'Make excuse and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time, I need to get going." You wave at them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Make small talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('You tell them about what\'s been going on lately in your life and make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Ask for a beer', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Anushka laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_aptcourtev', 'female_gopnik_beer_1'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
                      ]);
                    } else {
                      if (((s as any).nightevents ?? 0) === 10) {
                        if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 3)  ||  ((s as any).hour ?? 0) > 6) {
                          break;
                        }
                        scene.img('images/locations/pavlovsk/resident/apartment/events/lelepa.jpg');
                        scene.text('Lena, Lera, and Pauline are hanging out on one of the benches, drinking beers and smoking cigarettes while laughing and messing around.');
                        scene.actions([
                          { label: 'Move away', goto: ['pav_complex', 'start'] },
                          { label: 'Join them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/lelepa.jpg');
    scene.text('You walk over to them. "Hey guys, mind if I join you?"');
    if (((st as any).grupTipe ?? 0) === 5) {
      scene.text('They all give you a look of disgust.');
      scene.text('"Get lost loser!" Pauline shouts in a tone that makes you think she\'s ready to kick your ass.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        scene.text(`They make some room on the bench. "Join us ${((st as any).pcs_nickname ?? '')}," Pauline says.`);
        qspCall(st, 'willpower', 'drink', 'resist', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'refuse beer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse beer', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/gopgirls.jpg');
    scene.text('You refuse the beer and they give each other a look, but don\'t say anything. You tell them about what\'s been going on lately in your life and make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', goto: ['pav_aptcourtev', 'female_gopnik_beer_2'] },
        ]);
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          scene.text('You are not met with smiles or inviting looks. Lena speaks up first. "What do you want, freak?"');
          scene.text('You smile at them. "I just wanted to hang out if that\'s okay?"');
          scene.text('"Get lost loser!" Pauline replies, but they don\'t actively chase you off.');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          scene.text('You are not met with smiles or inviting looks. Lena speaks up first. "What? Looking to slum it for a bit?"');
          scene.text('You smile at them. "I just wanted to hang out if that\'s okay?"');
          scene.text('"Fuck off, princess!" Pauline replies, but they don\'t actively chase you off.');
          scene.actions([
            { label: 'Make excuse and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.text('Starting to feel nervous, you glance down at your phone. "Oh, I didn\'t notice the time, I need to get going." You wave at them and start walking away as you hear them laughing behind you.');
    scene.actions([
      { label: 'Move away', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
            { label: 'Make small talk', handler: (st: GameState) => {
    scene.text('You tell them about what\'s been going on lately in your life and make small talk with the girls for a while, but they seem to quickly get tired of listening and tell you that they\'ve got things to do. They grab the few beers left and walk away without inviting you to join them.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
            { label: 'Ask for a beer', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('"How about you pass me one of those beers?" you ask as you take a seat.');
    scene.text('Lera laughs and hands you a beer.');
    scene.actions([
      { label: 'Drink beer', goto: ['pav_aptcourtev', 'female_gopnik_beer_2'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
                        ]);
                      } else {
                        if (((s as any).nightevents ?? 0) === 11) {
                          qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
                          scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke.jpg');
                          scene.text('You notice a few boys from the complex smoking near the garages.');
                          scene.actions([
                            { label: 'Move away', goto: ['pav_complex', 'start'] },
                            { label: 'Ask for a cigarette', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke2.jpg');
    scene.text('You walk over to the boys and give them a smile. "Hey can I bum one of those?" you ask while indicating the cigarette.');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('They give you a look of disgust. "Get lost, slut! We don\'t want to be seen with you!" Not sure what to say and not wanting to make a scene, you quickly walk away.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if ((((st as any).fame ?? 0)?.['pav_slut'] >= 100  &&  ((st as any).grupTipe ?? 0) !== 4)  ||  (((st as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((st as any).grupTipe ?? 0) === 4)) {
        scene.text('They look you over and one of them seems to recognize you. "Oh it\'s you." You\'re a little surprised, and his friend seems just as confused before the first one whispers something and he smiles.');
        scene.text('"Sure. You can have a cigarette… if you suck our dicks first."');
        scene.text('"What? Why the fuck would I do that?" you reply.');
        scene.text('He snorts a laugh. "Come on, everyone knows you\'re a cocksucker. So get down on your knees and suck us off or get lost!"');
        qspCall(st, 'willpower', 'bj', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down on your knees', goto: ['pav_aptcourtev', 'smokeblowjob'] },
        ]);
      } else {
        scene.text('One of the boys nods and pulls a pack out of his pocket before pulling a cigarette out and handing it to you.');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
          { label: 'Smoke with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'drugs', 'smoke', 1);
    scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke2.jpg');
    scene.text('You take the cigarette and one of the boys lights it for you. You take a long slow draw off it. "Thanks. I needed that."');
    scene.text('They smile in return. "Sure, no problem."');
    scene.text('The three of you talk about some of the neighbors you both know and things you\'ve seen around the complex while you smoke. Once you finish your cigarette, you thank them again before moving on.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        ]);
      }
    }
  } },
                          ]);
                        } else {
                          (s as any).pavComplex_met_dealer = ((s as any).pavComplex_met_dealer ?? 0) + (1);
                          qspGoto(s, 'pav_aptcourtev', 'dealer');
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

function enterDealer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/events/weed.jpg');
  scene.text(`You turn at the sound of movement, just in time to see a guy slightly older than you walk up to you. He stops just short of you and is holding a joint in his hand. "You look like the type of girl that likes to have fun. Only ${qspFunc(s, 'money', 'string_price', 50)} each or a dozen for ${qspFunc(s, 'money', 'string_price', 500)}. So what do you say?"`);
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head and quickly walk past him.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['joints'] = ((st as any).mc_inventory['joints'] ?? 0) + (1);
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'money', 'pay', 50, 'cash');
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/events/weed.jpg');
      scene.text(`You glance around to make sure no one is watching, then pull out ${qspFunc(s, 'money', 'string_price', 50)} from your purse and hand it over to him. He hands you the joint with a smile and walks away. "Enjoy."`);
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
  } },
    { label: 'I\'ll take a dozen', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['joints'] = ((st as any).mc_inventory['joints'] ?? 0) + (12);
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'money', 'pay', 500, 'cash');
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/events/weed.jpg');
      scene.text(`You glance around to make sure no one is watching, then pull out ${qspFunc(s, 'money', 'string_price', 500)} from your purse and hand it over to him. He hands you a small bag of weed with some wrapping paper with a smile before walking away. "Enjoy."`);
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMaleGopnikBeer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/events/drinkbeer.jpg');
  scene.text('You take the offered beer and take a swig of it as you listen to the boys talking about their latest ventures, which range from vandalism and beating some guy up to gangbanging some slut. You occasionally comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You grab another beer from the collection the boys have and they don\'t seem to mind. You keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    if (((st as any).fame ?? 0)?.['pav_slut'] < 100  &&  ((st as any).grupTipe ?? 0) !== 4) {
      scene.text(`After you drink another beer, you're starting to feel the effects, but Vasily keeps you from grabbing another. "It's time for you to go ${((st as any).pcs_nickname ?? '')}. Good girls don't get wasted like this." He won't take no for an answer and escorts you away from them before turning and going back to join Vitek and Dan.`);
      scene.actions([
        { label: 'Stop drinking and leave', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((st as any).kotovLoveQW ?? 0) > 0) {
        scene.text(`After you drink another beer, you're starting to feel the effects, but Vitek gets up and pulls you up as well. "It's time for you to go ${((st as any).pcs_nickname ?? '')}. You're getting drunk, so home and I'll see you later." He won't take no for an answer and escorts you away from them before turning and going back to join Vasily and Dan.`);
        scene.actions([
          { label: 'Stop drinking and leave', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        scene.text('You\'re starting to feel the effects of the beers, but are having too much fun. You grab another beer and they don\'t seem to mind. You keep drinking as you continue listening to them.');
        qspCall(st, 'willpower', 'drink', 'resist');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
          ]);
        }
        scene.actions([
          { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text(`You're feeling pretty drunk and the guys seem to be amused at the sight of you. They exchange a few words that you can't quite make out before Vasily speaks up. "Hey ${((st as any).pcs_nickname ?? '')}, you really know how to drink."`);
    scene.text('You nod at the compliment. "Yeah… I do okay…" you slur in reply.');
    scene.text('This seems to amuse them even more. "Yeah, I bet you could down a beer faster than Vitek, couldn\'t you?" You give him a look, but feel like you could out-drink anyone right now, so you drunkenly nod.');
    scene.text('Vasily grins widely. "Great! How about we make a bet? If you can drink one down faster than Vitek, we\'ll buy you a case of beer, but if you lose, you have to walk around the complex completely naked. What do you say?"');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/dandick.jpg');
    scene.text('You shake your head. "No, I don\'t think so. I wouldn\'t win, so no reason for me to make that bet." You reach for another beer, but Dan pulls it away before you can grab it. He then stands up and pulls his dick out of his pants. "If you want another beer, you have to suck my dick."');
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not sucking your dick for a fucking beer, Dan!"');
    scene.text('He laughs. "Then you\'re not getting another beer." Knowing you won\'t win the bet and unwilling to suck his dick, you sigh and leave.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).grupTipe ?? 0) === 4) {
      qspCall(st, 'willpower', 'drink', 'force', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Threaten Dan', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Threaten Dan', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'willpower', 'drink', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/dandick.jpg');
    scene.text(`You smile at Dan before reaching over and grabbing his dick, but instead of stroking it, you dig your nails deeply into it, making him squirm and yell. "Fuck ${((st as any).pcs_nickname ?? '')}, let go before you rip my dick off!" Vitek and Vasily howl in laughter at this.`);
    scene.text('You give him a sadistic smile. "Give me a beer and I\'ll let go…" He gives you a dirty look but winces as you dig your nails in even harder. He quickly hands you another beer and you take your time taking another drink before releasing him.');
    scene.text('He puts his dick away and spends the next several minutes complaining. With the last of the beers drank, the boys get up and tell you that they\'ll see you later before leaving. They don\'t invite you to join them, so you take the hint.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Agree', goto: ['pav_aptcourtev1', 'suck3stooges'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make bet', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re feeling confident. "Fine, you got a bet." The boys laugh while Dan hands you and Vitek a beer. "Okay, start drinking when I say so."');
    scene.text('When both you and Vitek nod, Dan says "Drink!"');
    scene.text('You start guzzling the beer and are keeping up with Vitek, maybe even winning, when Vasily pokes you in the stomach, which causes you to sputter out some beer and slow you down. Before you can recover, Vitek finishes.');
    scene.text(`Vasily laughs. "Okay, strip and pay up ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You glare at him. "You cheated."');
    scene.text('He holds up his hands. "We never said you couldn\'t do something to make the other lose, so stop whining and pay up."');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-2));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-2));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No, you cheated!"');
    scene.text('Dan gives you a slight shove. "Then get the fuck out of here and don\'t come back!"');
    scene.text('You know they\'ll get over it eventually, bou also know there\'s no point arguing with them, so you leave them to grumble about you backtracking on the bet.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay up', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nudewalkb.jpg');
    scene.text('You strip off your clothes while the boys hoot and whistle. Once you\'re completely naked, Vitek points at the garages. "Come on, start over there and walk all the way around the whole complex." You nod and walk over with the boys following you, Vasily stopping to grab your purse and clothes.');
    scene.text('They follow behind you, laughing and talking while enjoying the view. A car occasionally drives by, the headlights lighting up your naked body. You notice a few people see you, their reactions ranging from disgust to interest, but none of them approach or say anything.');
    scene.text('Just before you get back to where you started, you notice you can\'t hear the boys anymore. You turn back and see that they\'ve disappeared. Walking back in search of them, you see your purse hanging from the handle of one of the garage doors, but no sign of them or your clothes. Grabbing your purse, you need to somehow make it back to the apartments without being spotted.');
    scene.actions([
      { label: 'Go home', goto: ['home_events', 'go_home_naked'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemaleGopnikBeer_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A44', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/drinkbeerg` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  scene.text('You take the offered beer and take a swig of it as you listen to the girls talking about their latest ventures, which range from vandalism and beating some girl up, to bullying some of the nerds and outcasts, or what boys they find cute. You occasionally comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You grab another beer from the collection the girls have and they don\'t seem to mind. You keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer. They don\'t seem to mind as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text(`You're feeling pretty drunk, and the girls seem to be amused by the sight of you. They exchange a few words that you can't quite make out before Lena speaks up. "Hey ${((st as any).pcs_nickname ?? '')}, you really know how to drink."`);
    scene.text('You nod at the compliment. "Yeah… I do okay…" you slur in reply.');
    scene.text('This seems to amuse them even more. "Yeah, I bet you could down a beer faster than Alyona, couldn\'t you?" You give her a look, but feel like you could out-drink anyone right now, so you drunkenly nod.');
    scene.text('Lena grins widely. "Great! How about we make a bet? If you can out down one faster than Alyona, Lera will walk around the complex naked, but if you lose, you have to do it. What do you say?" Lera gives Lena a look of surprise, but Lena just nods and Lera doesn\'t say anything.');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse bet', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    scene.text('You shake your head. "No, I don\'t think so. I wouldn\'t win, so no reason for me to make that bet." You reach for another beer, but Lera pulls it away before you can grab it. She then stands up and pulls her pants down enough to show off her clit. "If you want another beer, you have to eat me," she says with a smirk. The other girls perk up at this and seem interested in what you\'re going to do.');
    qspCall(st, 'willpower', 'cuni', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "I\'m not licking your pussy for a beer, Lera!"');
    scene.text('She laughs. "Then you\'re not getting another beer." Knowing you won\'t win this and unwilling to lick her pussy for a beer, you sigh and leave.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).grupTipe ?? 0) === 4) {
      qspCall(st, 'willpower', 'drink', 'force', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Threaten Lera', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Threaten Lera', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'willpower', 'drink', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/eatmelera.jpg');
    scene.text(`You smile at Lera and reach over and pinch her clit between your index finger and thumb, which makes her squeal in pain as she grabs your arm with her hands. "Fuck ${((st as any).pcs_nickname ?? '')}, let go before you rip my clit off!" The other girls howl in laughter at this.`);
    scene.text('You give her a sadistic smile. "Give me a beer and I\'ll let go." She gives you a dirty look but winces as you dig your nails in even harder. She quickly hands you another beer and you take your time taking another drink before releasing her.');
    scene.text('She pulls her pants back up and spends the next several minutes complaining. With the last of the beers drank, the girls get up and bid each other farewell before they each go their own way.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Agree', goto: ['pav_aptcourtev', 'eatlera'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make bet', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re feeling confident. "Fine you got a bet." The girls laugh while Lena hands you and Alyona a beer and says "Okay, start drinking when I say."');
    scene.text('When both you and Alyona nod, Lena says "Drink!"');
    scene.text('You start guzzling the beer and are keeping up with Alyona, maybe even winning, when Lera pokes you in the stomach, which causes you to sputter out some beer and slow you down. Before you can recover, Alyona finishes.');
    scene.text(`They all laugh while Lera taunts you. "Okay, strip and pay up ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You glare at her. "You cheated."');
    scene.text('She holds up her hands. "We never said you couldn\'t do something to make the other lose, so stop whining and pay up."');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A44', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No, you cheated!"');
    scene.text('Lera gives you a slight shove. "Then get the fuck out of here and don\'t come back"');
    scene.text('You know they\'ll get over it eventually, but also know there\'s no point arguing with them, so you leave them to grumble about you backtracking on the bet.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Payup', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A44', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', 2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nudewalkg.jpg');
    scene.text('You strip off your clothes while the girls hoot and whistle. Once you\'re completely naked, Lena points at the garages. "Come on, start over there and walk all the way around the whole complex." You nod and walk over with the girls following you, Lera stopping to grab your purse and clothes.');
    scene.text('They follow behind you, laughing and enjoying the view. A car occasionally drives by, the headlights lighting up your naked body. You notice a few people see you, their reactions ranging from disgust to interest, but none of them approach or say anything.');
    scene.text('Just before you get back to where you started, you notice you can\'t hear the girls anymore. You turn back and see that they\'ve disappeared. Walking back in search of them, you see your purse hanging from the handle of one of the garage doors, but no sign of them or your clothes. Grabbing your purse, you need to somehow make it back to the apartments without being spotted.');
    scene.actions([
      { label: 'Go home', goto: ['home_events', 'go_home_naked'] },
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

function enterFemaleGopnikBeer_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/drinkbeerg` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  scene.text('You take the offered beer and take a swig of it as you listen to the girls talking about their latest ventures, which range from vandalism and beating some girl up, bullying some of the nerds and outcasts, talking about other girls, or what boys they find cute. You occasionally comment, but mostly just listen to them.');
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You grab another beer from the collection the girls have and they don\'t seem to mind. You keep drinking as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink even more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re starting to feel the effects of the beers, but are having too much fun, so you grab another beer. They don\'t seem to mind as you continue listening to them.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Grab another beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text(`You're feeling pretty drunk, and the girls seem to be amused by the sight of you. They exchange a few words that you can't quite make out before Lena speaks up. "Hey ${((st as any).pcs_nickname ?? '')}, have another," she says as she hands you another beer.`);
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop drinking and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep drinking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('They keep passing you beers before you even finish your current one and encouraging you to drink faster.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Had enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Had enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No thanks. I think I\'ve had enough. Thanks for the beers though."');
    scene.text('You get up and stumble away before you get really wasted.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Try to keep up', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'drugs', 'alcohol', 'beer', 3);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/events/beer` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You\'re completely wasted now, yet they still keep handing you beer and encouraging you to drink up.');
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Had enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Had enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head. "No thanks. I think I had enough. Thanks for the beers though."');
    scene.text('You get up and stumble away, barely able to walk at all.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'drugs', 'alcohol', 'beer', 3);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/passedout.jpg');
    scene.text('You lose count of the number of beers you drink and everything becomes fuzzy before going black.');
    scene.text('You don\'t know how long you were passed out, but you feel sick to your stomach and your head is starting to hurt as you find yourself lying face down on the ground. As you slowly get up, you notice you\'re completely naked other than your shoes and your purse laying a few feet away.');
    scene.text('Panicking, you look around but don\'t see anyone, just all the empty bottles by the bench where the girls once were.');
    scene.actions([
      { label: 'Go home', goto: ['home_events', 'go_home_naked'] },
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

function enterEatlera(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'npcStat', 'A21');
  qspCall(s, 'fame', 'pav', 'sex', 3);
  qspCall(s, 'npc_relationship', 'modify', 'A21', 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lera/sex/complex/eatlera1.jpg');
  scene.text('You bite your lip and look at her inviting pussy. Part of you no longer cares about the beer, you just really want to eat her pussy. You glance at the other girls and they seem to be encouraging you to do it, so you get down on your knees. As you do Lera pulls her pants and panties off and pulls up her long shirt, lifting up one her legs and spreading them to give you easy access.');
  scene.text('You lean in and start to lap at her clit and pussy. She moans softly as the other girls whistle and catcall. Lera, on the other hand, has her own words of encouragement. "Mmhmm… That\'s right bitch, eat my pussy!"');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/complex/eatlera2.jpg');
    scene.text('She reaches and clasps the back of your head pulling your face against her pussy as she grinds against your face.');
    scene.text('"Look at that bitch go! She must really want a fucking beer," Lena comments.');
    scene.text('"I think she just likes eating pussy," Alyona adds.');
    scene.text('Anushka snorts. "Oh please! Everyone here has been on her knees eating pussy before, so don\'t act like you\'ve never done this."');
    scene.text('"Not for a beer, I haven\'t!" Lena replies.');
    scene.text('"Yeah, well… " Anushka trails off, obviously not sure what to say in response to that.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/complex/eatlera2.jpg');
    scene.text(`Lera seems completely unaware of what the other girls are saying. She starts moaning louder as she grips your hair tightly and forces your face against her crotch as hard as she can as she grinds it against your face. A few minutes later, she lets out a cry and shudders against you before she lets go of your head and steps back. "Fuck, that was good. You can fucking eat pussy ${((st as any).pcs_nickname ?? '')}!" As she puts her pants back on she bites her lip and gives you a once over, having obviously really enjoyed the experience.`);
    scene.text('You wipe your face off and reach over to grab another beer, only to find none left. Lena, Anushka and Alyona all are finishing one as you watch. Lena shrugs. "What? You took too long, lez," she says with a laugh.');
    scene.text('"Yeah, look at her. She doesn\'t care there\'s no beer. She just wanted some pussy," Alyona adds.');
    scene.text('"Yeah, well next time she can eat mine then," Lena replies.');
    scene.text('"When you bring the beer maybe, which is never. You\'re almost as bad as Mooch," Lera tells Lena and the other girls laugh.');
    scene.text('You all fall back into some banter for a while before everyone decides it\'s time to go.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSmokeblowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'fame', 'pav', 'sex', 3);
  qspCall(s, 'npcgeneratec', '0', 'Smoker', (Math.floor(Math.random() * 4) + 17), 1, 1);
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '0', 'Smoker', (Math.floor(Math.random() * 4) + 17), 1, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 'a');
  scene.img('images/locations/pavlovsk/resident/apartment/events/sex/smokebj1.jpg');
  scene.text('You get down on your knees. "Oh shit, I can\'t believe she\'s really going to do it!" one of them says as they both quickly pull their dicks out. You start sucking the cock of the one that told you to get down on your knees and jerking the other one off with your free hand.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/smokebj2.jpg');
    scene.text('You switch and suck the other one\'s dick while jerking the first one off before you alternate back and forth sucking them both off. When they both start to moan loudly, you sit back on your heels and start jerking them both off while pointing their cocks at your face.');
    qspCall(st, 'arousal', 'bj', 4, ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', 1, ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/smokebj3.jpg');
    scene.text('Suddenly, though not unexpectedly, cum starts splattering on your face. Seconds later, the other one starts to cum as well and soon both of them have coated your face in their cum. They then put their dicks away, "Hey, what about my cigarette?" you ask and one of them laughs and tosses you the rest of his pack of smokes.');
    scene.text('"Here you go, best investment I ever made," he tells his friend. "Come on, let\'s go buy some more." They both walk away, leaving you on your knees with some cigarettes and a face full of cum.');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cigarettes'] = ((st as any).mc_inventory['cigarettes'] ?? 0) + ((Math.floor(Math.random() * 6) + 3));
    qspCall(st, 'arousal', 'hj', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwoBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'arousal', 'end');
  (s as any).nakedrand = undefined;
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspCall(s, 'npcStat', 'A122');
    qspCall(s, 'npcStat', 'A123', 'a');
  } else {
    qspCall(s, 'npcStat', 'A125');
    qspCall(s, 'npcStat', 'A126', 'a');
  }
  scene.img('images/locations/pavlovsk/naked/aptstairsnaked.jpg');
  scene.text(`Once inside, you sigh in relief. Taking a look around, you glance up the stairs and slowly start creeping up them, hoping no one suddenly comes out of their apartment or comes down the stairs. Just before you make it to your door, you hear the clomping of boots on the stairs. "Well well, look what we have here. What are you doing, ${((s as any).pcs_nickname ?? '')}?"`);
  scene.text(`You turn around and see ${((s as any).npcdesc ?? '')} and ${((s as any).npcdesc1 ?? '')}, standing behind you. One of them is taking your picture with his phone while the other walks over and leans against your apartment door, so you open it. "Please guys, I just need to get inside. Please don't share those pictures."`);
  scene.text('The one taking the pictures laughs and keeps taking them, while his friends leers at you, looking over your whole body. "Well, if you\'re going to run around like a whore, we should treat you like one. So how about you come over here and let us fuck you and we\'ll keep your secret. What do you say?"');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'gangbang', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'fame', 'pav', 'sex', 4);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/naked/homedoornaked.jpg');
    scene.text('You shake your head. "No, I\'ll not be your personal whore. Now get out of my way."');
    scene.text('He laughs and gets off the door. "Whatever you say, whore." With that, you open the door and head into your apartment as their laughter echoes out in the hall. Sighing, you walk down the hall to your bedroom.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stay home', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 2);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/napt.jpg');
    scene.text('You nod in agreement. "Okay fine, if you won\'t tell anyone. Just tell me what you want."');
    scene.text('"Well, to fuck you like the whore you are, of course!" he barks with a laugh before they take you to their apartment. Once inside, one of them pushes you down to your knees and they stand on each side of you, with obvious bulges in their pants.');
    qspCall(st, 'arousal', 'foreplay', 2, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nsuck1.jpg');
    scene.text(`They pull down their pants and let their hard dicks spring free. "Well? They won't suck themselves, whore," ${((st as any).npcdesc ?? '')} says with a laugh. You take one of their cocks into your mouth while you jerk ${((st as any).npcdesc1 ?? '')} off.`);
    qspCall(st, 'arousal', 'bj', 2, ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'hj', (-2), ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch dicks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nsuck2.jpg');
    scene.text(`As you are sucking and jerking the guys off, ${((st as any).npcdesc1 ?? '')} grabs your hair and pulls your face to his cock. "My turn to get my dick sucked." You do as you are told and now start sucking his dick, while jerking the other one off now.`);
    scene.text('After a few minutes, they stop. "Get your ass up there on the foot stool so we can fuck you!"');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Tell them you are a vigin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nanal1.jpg');
    scene.text('You sit down on the cushion. "Guys, can\'t I just suck you off? I\'m still a virgin."');
    scene.text('They both scoff at that. "Bullshit!" one of them stays and you give him a serious look and nod.');
    scene.text('They pause for a second and the other one says "Well good thing you go more holes then. Lay down on your side." He grins as you do it before adding "Don\'t worry, we won\'t pop your cherry."');
    scene.text(`${((st as any).npcdesc ?? '')}, pushes you over so you're laying on your side, and sticks his dick back in your mouth, making you unable to see what the other one is doing, but you feel him moving in behind you. A moment later, you feel slick fingers lubing up your asshole before you feel the head of his cock against it.`);
    scene.text('With a quick shove, he pops his cock into your ass and starts fucking it. It hurts a little, but at least he used lube and it isn\'t too bad. You lay on your side as one of them fucks your mouth and the other fucks your ass.');
    qspCall(st, 'pain', '1', 'asshole', 'stretch');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch dicks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nanal2.jpg');
    scene.text('As you lay there getting fucked you hear the one with his dick in your mouth talking to his friend. "Let\'s switch. I want to fuck her ass too." They switch positions and the dick that was in your ass now slides into your mouth, causing you to taste the lube among other things, while the other slides into your ass and starts pumping hard and fast.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back on your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/ncum.jpg');
    scene.text('Several minutes go by until they both start grunting, obviously getting close to cumming. They pull out of you as one of them says "Get on your knees and open your mouth, whore." You do as you\'re told and they both start jerking their dicks in front of your face. Both of them start cumming at almost the same time, some of it going in your mouth and on your tongue, while the rest splatters your face.');
    scene.text('Once they finish cumming on you, they grab you by the arms and pull you to your feet, drag you over to the door and shove you out into the hall naked with your face covered in their cum. "Get lost whore!" With that, they close the door in your face.');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub', 'group', 'humiliation');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/naked/homedoornaked.jpg');
    scene.text('You walk back to your own apartment and unlock the door. You walk down the hall to your bedroom and are finally able to get cleaned up and dressed.');
    scene.actions([
      { label: 'Stay home', goto: ['bedrPar', ''] },
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
      { label: 'Let them do what they want', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nfuck1.jpg');
    scene.text(`You get down on your hands and knees on the cushion as ${((st as any).npcdesc ?? '')} walks over and lays down on the cushion on his back. He pulls your head over and forces it back down on his dick as the other walks up behind you. You feel the head of his cock rub against your slit before he slides it inside you. He starts fucking you hard and fast while his friend forces your head down to gag on his dick.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch dicks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/nfuck2.jpg');
    scene.text(`As you get fucked you hear ${((st as any).npcdesc ?? '')} talking to his friend. "Let's switch. I want to fuck her too." They switch positions and the dick that was in your pussy now slides into your mouth while the other slides into your pussy and starts pumping hard and fast. You feel him rubbing his thumb against your asshole as he fucks you.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Double tap', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/ndp1.jpg');
    scene.text(`As you get fucked some more, ${((st as any).npcdesc1 ?? '')} speaks up. "Let's switch again. I want to fuck her some more."`);
    scene.text(`His friend doesn't stop fucking you. "You already had a turn." They argue back and forth until they reach a compromise. They make you crawl up and mount ${((st as any).npcdesc ?? '')} while his friend moves up behind you and presses the head of his cock against your asshole until it pops in. You feel a moment of pain as he slides it in further and they both start to fuck you.`);
    qspCall(st, 'pain', '1', 'asshole', 'stretch');
    qspCall(st, 'pain', '1', 'asshole', 'stretch');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch holes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/ndp2.jpg');
    scene.text('Several minutes go by until they want to switch again. This time, they make you roll over so the guy laying on his back can slide his dick up your ass and his friend slips his dick in your pussy. Once they\'re both in, they start fucking you again, filling you up completely.');
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID ?? 0), 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back on your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/apartment/ncum.jpg');
    scene.text('Several minutes go by until they both start grunting, obviously getting close to cumming. They pull out of you as one of them says "Get on your knees and open your mouth, whore." You do as you\'re told and they both start jerking their dicks in front of your face. Both of them start cumming at almost the same time, some of it going in your mouth and on your tongue, while the rest splatters your face.');
    scene.text('Once they finish cumming on you, they grab you by the arms and pull you to your feet, drag you over to the door and shove you out into the hall naked with your face covered in their cum. "Get lost whore!" With that, they close the door in your face.');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub', 'group', 'humiliation');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/naked/homedoornaked.jpg');
    scene.text('You walk back to your own apartment and unlock the door. You walk down the hall to your bedroom and are finally able to get cleaned up and dressed.');
    scene.actions([
      { label: 'Stay home', goto: ['bedrPar', ''] },
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
  scene.build();
}

function enterMisha(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).nakedrand = undefined;
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'npc_relationship', 'modify', 'A54', 3);
  scene.img('images/locations/pavlovsk/naked/aptstairsnaked.jpg');
  scene.text(`Once inside you sigh in relief. Taking a look around, you glance up the stairs and slowly start creeping up them, hoping no one suddenly comes out of their apartment or comes down the stairs. You almost make it to your door when you hear a door behind you open, followed by a cough. You turn around and see Uncle Misha watching you with a raised eyebrow. "Should I ask why you're sneaking around naked, ${((s as any).pcs_nickname ?? '')}?"`);
  scene.text('You blush as he stares at your naked body, having been caught by someone you know. "Some girls at school stole my clothes," you explain to him, and he snorts a laugh and shakes his head.');
  scene.text('"Well, you best get inside then," he tells you and you unlock the door as quickly as you can. As you head inside, you think you hear him say "Where were girls like that when I was in school?"');
  scene.text('You rush down the hall to your bedroom.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Go to your bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/naked/homedoornaked.jpg');
    scene.text('You finally make it to your bedroom and are able to get dressed.');
    scene.actions([
      { label: 'Put on spare uniform and go back to school', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'school_outfit');
    (st as any).minut = ((st as any).minut ?? 0) + 12;
    scene.img('images/locations/pavlovsk/school/walk_home2.jpg');
    scene.img('images/locations/pavlovsk/school/walk_homew1.jpg');
    scene.text('You change into your other school uniform quickly and then quickly rush back to school.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).missing_class = ((st as any).missing_class ?? 0) + (1);
    (st as any).school_period = ((st as any).school_period ?? 0) + (1);
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Stay home', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bench':
      enterBench(s, scene);
      break;
    case 'wait':
      enterWait(s, scene);
      break;
    case 'read':
      enterRead(s, scene);
      break;
    case 'phone':
      enterPhone(s, scene);
      break;
    case 'smoke':
      enterSmoke(s, scene);
      break;
    case 'smoke_joint':
      enterSmokeJoint(s, scene);
      break;
    case 'events1':
      enterEvents1(s, scene);
      break;
    case 'maksim_friends_flash':
      enterMaksimFriendsFlash(s, scene);
      break;
    case 'events2':
      enterEvents2(s, scene);
      break;
    case 'dealer':
      enterDealer(s, scene);
      break;
    case 'male_gopnik_beer':
      enterMaleGopnikBeer(s, scene);
      break;
    case 'female_gopnik_beer_1':
      enterFemaleGopnikBeer_1(s, scene);
      break;
    case 'female_gopnik_beer_2':
      enterFemaleGopnikBeer_2(s, scene);
      break;
    case 'eatlera':
      enterEatlera(s, scene);
      break;
    case 'smokeblowjob':
      enterSmokeblowjob(s, scene);
      break;
    case 'two_boys':
      enterTwoBoys(s, scene);
      break;
    case 'misha':
      enterMisha(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_aptcourtev: LocationDef = {
  name: 'pav_aptcourtev',
  title: 'You take a seat on one of the benches in the courtyard and r',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
