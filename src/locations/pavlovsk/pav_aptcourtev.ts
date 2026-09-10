import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBench(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_aptcourtev', 'bench');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
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
    // TODO-QSP: act 'Read a magazine': gt 'pav_aptcourtev', 'read'
  }
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    // TODO-QSP: act 'Smoke': gt 'pav_aptcourtev', 'smoke'
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    // TODO-QSP: act 'Smoke a joint': gt 'pav_aptcourtev', 'smoke_joint'
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
      scene.actions([{ label: 'Continue', goto: ['pav_aptcourtev', 'events1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_aptcourtev', 'events2'] }]);
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/benchw.jpg');
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/eve...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/apartment/events/bench.jpg"></center>`);
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/eve...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/apartment/events/benchn.jpg"></center>`);
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
    // TODO-QSP: act 'Have another cigarette': gt 'pav_aptcourtev', 'smoke'
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
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  // TODO-QSP: :reroll_jump1
  if (((s as any).rolanmeet ?? 0) === 0  ||  ((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
    (s as any).events = Math.floor(Math.random() * 21) + 0;
  } else {
    (s as any).events = Math.floor(Math.random() * 23) + 0;
  }
  if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 50  &&  (Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).anushka_met ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).locat ?? 0)?.['A144'] === 23  ||  ((s as any).locat ?? 0)?.['A144'] === 22)) {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      // TODO-QSP: jump 'reroll_jump1'
    }
    if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 8) {
      // TODO-QSP: jump 'reroll_jump1'
    }
    (s as any).anushka_met = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: As you walk into the building, you nearly run into Anushka. "Hey <<$pcs_nickname...
    scene.text(`As you walk into the building, you nearly run into Anushka. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?" she asks.`);
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
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/locations/pavlovsk/resident/apartment/events/evbg.jpg');
    scene.text('You notice a boy and girl making out as he fondles her breasts. They seem completely oblivious to the rest of the world and are just enjoying each other. You don\'t know either of them.');
    qspCall(s, 'arousal', 'voyeur_sex', (-10));
    qspCall(s, 'arousal', 'end');
    if (((s as any).events ?? 0) === 1) {
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
      scene.img('images/locations/pavlovsk/resident/apartment/events/evbgkiss\' + rand(1, 2) + \'.jpg');
      scene.text('A boy and girl are sitting on one of the benches making out passionately, seemingly unaware or not caring that anyone is watching them. You think you recognize the boy as part of the group that smoke in the stairwell.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
        // TODO-QSP: jump 'reroll_jump1'
      }
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      scene.img('images/locations/pavlovsk/resident/apartment/events/evggkiss\' + rand(1, 3) + \'.jpg');
      if ((Math.floor(Math.random() * 4) + 1) === 1  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 14)) {
        scene.text('You notice Lena and Lera passionately kissing each other, completely unaware that anyone is watching them.');
      } else {
        scene.text('You notice two girls passionately kissing each other, completely unaware that anyone is watching them.');
      }
      qspCall(s, 'arousal', 'voyeur', (-10));
      qspCall(s, 'arousal', 'end');
      if (((s as any).events ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/resident/apartment/events/evggphone.jpg');
        scene.text('You see two girls laying on the ground giggling about something as one of them talks on the phone.');
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
        scene.img('images/locations/pavlovsk/resident/apartment/events/evggupsk.jpg');
        scene.text('A group of girls are sitting on the ground, talking to each other. From this vantage point, you can see up one of their skirts. You wonder if they are aware of the fact.');
        if (((s as any).events ?? 0) === 5) {
          qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
          scene.img('images/locations/pavlovsk/resident/apartment/events/evupsk\' + rand(1, 2) + \'.jpg');
          scene.text('A girl is sitting on one of the other benches directly across from you. Her legs are spread slightly apart, giving you a perfect upskirt view of her panties. You\'re not sure if she\'s doing it on purpose or not.');
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
          scene.img('images/locations/pavlovsk/resident/apartment/events/evupsknop1.jpg');
          scene.text('There is a girl sitting on one of the other benches almost directly across from you. Her legs are spread slightly apart, giving you a perfect upskirt view of her pussy. She apparently chose not to wear panties today, which makes you think she\'s doing it on purpose.');
          if (((s as any).events ?? 0) === 7) {
            scene.img('images/locations/pavlovsk/resident/apartment/events/3girls.jpg');
            scene.text('You see some guys checking out three girls, who seem well aware of their attention. One of the boys says something to his friends and they seem to egg him on, but before he can do what ever is he had planned, the girl on the right walks around her friend in the center, firmly grips her hips and starts to pretend fuck her from behind, which causes her friends to laugh and the boys to hoot and holler.');
            scene.text('The girl on the left grabs the head of her friend in the center, turns towards her and pulls her head down to her crotch before pretending to fuck her mouth.');
            scene.text('The middle girl seems to get into it and pretends to suck a dick while her other friend pounds against her ass. They keep this up until the boys start to approach them, at which point they flip the boys off and run away, leaving the boys frustrated and hollering some unpleasant things after them.');
            scene.actions([
              { label: 'Move away', goto: ['pav_complex', 'start'] },
            ]);
          } else {
            qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
            scene.img('images/locations/pavlovsk/resident/apartment/events/3moons.jpg');
            scene.text('You notice three girls standing at the alley near the garages. Every time a car drives down the alley, they turn around and moon it. After several minutes, they grow bored and walk away down the alley.');
            if (((s as any).events ?? 0) === 9) {
              if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).locat ?? 0)?.['A144'] < 22  ||  ((s as any).locat ?? 0)?.['A144'] > 23) {
                // TODO-QSP: jump 'reroll_jump1'
              }
              qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
              scene.img('images/locations/pavlovsk/resident/apartment/events/eatu.jpg');
              scene.text('You see Anushka across the courtyard. When she notices you looking, she raises her hand up to her face and spreads two fingers in a V in front of her mouth before sticking her tongue out between them in the universal sign for \'eat me\'. Before you can respond, she heads inside her building.');
              scene.actions([
                { label: 'Move away', goto: ['pav_complex', 'start'] },
                { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_aptcourtev1', 'follownush'] },
              ]);
            } else {
              scene.img('images/locations/pavlovsk/resident/apartment/events/gop1.jpg');
              scene.text('A small group of gopniks are sitting on one of the benches. You\'ve seen them before, hanging out and smoking in the stairwell. They are all older than you, and you think one or two of them might have gone to school with your sister. They give you a predatory look and seem to be getting pretty drunk, which is not a good combination.');
              if (((s as any).events ?? 0) === 11) {
                scene.img('images/locations/pavlovsk/resident/apartment/events/roughnight.jpg');
                scene.text('You see a girl sitting on one of the trashcans with a bottle of alcohol in hand. Her stockings are torn, her make-up is smeared, her hair is messed up and one of the straps of her dress is partially torn. She looks like she has had a really rough time recently. She notices you looking at her and takes another drink from the bottle before walking away. You think that might have been one of Kolka\'s friends.');
                scene.actions([
                  { label: 'Move away', goto: ['pav_complex', 'start'] },
                ]);
              } else {
                if (((s as any).temper ?? 0) < 10) {
                  // TODO-QSP: jump 'reroll_jump1'
                }
                if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
                  scene.img('images/locations/pavlovsk/resident/apartment/events/waterw.jpg');
                } else {
                  scene.img('images/locations/pavlovsk/resident/apartment/events/water.jpg');
                }
                scene.text('You notice some young boys heading towards you, the oldest about your brother\'s age. They are all holding water balloons or large open bottles of water. As they get closer, they suddenly run over and start throwing the water on you. They chase you across the courtyard until they break off when they see a new victim.');
                (s as any).pcs_hairbsh = 0;
                qspCall(s, 'stat', '');
                if (((s as any).events ?? 0) === 13) {
                  scene.img('images/locations/pavlovsk/resident/apartment/events/boys.jpg');
                  scene.text('A small group of boys, the oldest a year or two younger than your brother, are riding their bikes around near the garages, but they start following you. You can hear them talking, and it sounds like they\'re trying to goad each other into doing something. You never find out what it is, as it seems none of them are willing to do it and they all pedal away.');
                  scene.actions([
                    { label: 'Move away', goto: ['pav_complex', 'start'] },
                  ]);
                } else {
                  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                  (s as any).minut = ((s as any).minut ?? 0) + 3;
                  scene.img('images/locations/pavlovsk/resident/apartment/events/sex/evbj\' + rand(1, 2) + \'.jpg');
                  (s as any).text_rand = Math.floor(Math.random() * 3) + 0;
                  if (((s as any).text_rand ?? 0) === 1  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).week ?? 0) > 5  ||  ((s as any).hour ?? 0) >= 14)) {
                    scene.text('You spot Lavrenti leaning against a wall near the storage buildings and are surprised to see Lena squatting down in front of him as she sucks his dick, seemingly enjoying it as much as Lavrenti. After a few minutes, you hear him moan, his cock never leaving her mouth as she continues to milk him for another minute before standing up. They walk away together as you wonder if Vitek is aware of what his sister is getting up to, though you definitely aren\'t going to ask him.');
                  } else {
                    scene.text('You spot a guy you think you recognize leaning against a wall near the storage buildings, but it\'s hard to tell as his face is turned to the side and tilted down. There\'s a girl kneeling in front of him, giving him an enthusiastic blowjob. You move to get a better view and realize it is Roma, your sister\'s boyfriend and… Oh god! It\'s your sister! She\'s sucking him for all she\'s worth, taking his dick all the way down her throat. Part of you knows you shouldn\'t watch, but another can\'t look away. Where did your sister learn these skills? Can she teach you?');
                    scene.text('You\'re pulled out of your thoughts when you hear Roma moan, his hand gripping the back of Anya\'s head as he cums hard in her mouth. Anya doesn\'t resist and continues to suck, even after Roma removes his hand from her head. She sucks his cock clean before standing up. You instinctively duck, hoping you\'re not noticed. They briefly kiss before walking away hand in hand.');
                    scene.text('You spot an extremely happy-looking guy leaning up against the wall near the storage buildings as a girl gives him an enthusiastic blowjob. After a few minutes, you hear the guy moan, his cock never leaving the girl\'s mouth as she continues to milk him for another minute before standing up. The two then walk away together.');
                  }
                  qspCall(s, 'arousal', 'voyeur_sex', (-10));
                  qspCall(s, 'arousal', 'end');
                  if (((s as any).events ?? 0) === 15) {
                    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) < 14)) {
                      // TODO-QSP: jump 'reroll_jump1'
                    }
                    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
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
                    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  ||  ((s as any).locat ?? 0)?.['A144'] < 22  ||  ((s as any).locat ?? 0)?.['A144'] > 23) {
                      // TODO-QSP: jump 'reroll_jump1'
                    }
                    scene.img('images/locations/pavlovsk/resident/apartment/events/nushbench.jpg');
                    scene.text('As you walk through the courtyard, you see Anushka sitting on one of the benches. She hasn\'t noticed you yet.');
                    if (((s as any).events ?? 0) === 17) {
                      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
                      scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke.jpg');
                      scene.text('You notice a few boys from the complex smoking near one of the buildings by the garages.');
                      scene.actions([
                        { label: 'Move away', goto: ['pav_complex', 'start'] },
                        { label: 'Ask for a cigarette', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/boysmoke2.jpg');
    scene.text('You walk over to the boys and give them a smile. "Hey, can I bum one of those?" you ask while indicating the cigarette.');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('They give you a look of disgust. "Get lost, slut! We don\'t want to be seen with you!" Not sure what to say and not wanting to make a scene, you quickly walk away.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.text('They look you over and one of them seems to recognize you. "Oh it\'s you." You\'re a little surprised, and his friend seems just as confused before the first one whispers something and he smiles.');
      scene.text('"Sure. You can have a cigarette… if you suck our dicks first."');
      scene.text('"What? Why the fuck would I do that?" you reply.');
      scene.text('He snorts a laugh. "Come on, everyone knows you\'re a cocksucker. So get down on your knees and suck us off or get lost!"');
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_complex', 'start'] },
        ]);
      }
      scene.text('One of the boys nods and pulls a pack out of his pocket before pulling a cigarette out and handing it to you.');
      scene.actions([
        { label: 'Get down on your knees', goto: ['pav_aptcourtev', 'smokeblowjob'] },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
        { label: 'Smoke with the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'smoke', 1);
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
  } },
                      ]);
                    } else {
                      scene.actions([{ label: 'Continue', goto: ['pav_complexrolan', ''] }]);
                      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
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
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).maksimQW['blackmail'] = 2;
    qspCall(s, 'stat', '');
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
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
                              { label: 'Tell him no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                            ]);
                          } else {
                            scene.actions([
                              { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "No. I told you last time, I\'m at not showing your friends."');
    scene.text('One of the other boys says to the rest. "You said you would talk to her." Others jump in with similar comments.');
    scene.text('Now Maksim gives them an annoyed look. "I told you I would work on it." While Maksim moves over to stand next to you as he says to you. "Do it or I will tell Nush you were spying on her."');
    scene.text('The look on his face says he is serious, you really don\'t want her to know. Maybe she wouldn\'t mind but maybe she would, you have to admit it is a little creepy spying on your friend having sex.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no again [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
    // TODO-QSP: maksimQW['blackmail'] = 3
  }, goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
    ]);
  } },
                            ]);
                          }
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
                                { label: 'Tell him no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                              ]);
                            } else {
                              scene.actions([
                                { label: 'Tell him no', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You shake your head. "No. I showed you all last time, not in the mood today."');
    scene.text('Now the boys all start trying to get Maksim to force you to flash them again.');
    scene.text('Now Maksim gives them an annoyed look. "Shut up, let me deal with this." While Maksim moves over to stand next to you as he says to you. "Do it or I will tell Nush you were spying on her."');
    scene.text('The look on his face says he is serious, you really don\'t want her to know. Maybe she wouldn\'t mind but maybe she would, you have to admit it is a little creepy spying on your friend having sex.');
    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him no again [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him no again', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
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
                          scene.actions([
                            { label: 'Flash them', handler: (st: GameState) => {
    // TODO-QSP: maksimQW['blackmail'] = 3
  }, goto: ['pav_aptcourtev', 'maksim_friends_flash'] },
                          ]);
                        }
                        scene.actions([
                          { label: 'Move away', goto: ['pav_complex', 'start'] },
                        ]);
                      }
                    }
                    scene.actions([
                      { label: 'Move away', goto: ['pav_complex', 'start'] },
                      { label: 'Take a seat next to her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'Stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nushbenchtalk.jpg');
    // TODO-QSP: dynamic text: You stop and take a seat next to her, and she glances over as you sit down. "Hey...
    scene.text(`You stop and take a seat next to her, and she glances over as you sit down. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?" she asks.`);
    scene.text('"Just killing time. Bored, you know?" you reply.');
    scene.text('She nods. "Yeah, I know how that is. I was so bored I was making up little stories for what the people were doing." She points at some old guy walking towards the garages. "Take him for example. He used to be part of the KGB. Now he\'s a freelance assassin and was just hired to go kill that shrill of an old woman that is always sitting in the market yelling at every girl wearing a skirt higher than her ankle. You know the one."');
    scene.text('You smile and nod. "So did you hire him?"');
    scene.text('That gets a laugh from her. "Okay, your turn." You take a moment to find someone else and start making up your own story. The two of you spend the next few minutes laughing and making up stories about the different people you see passing through the courtyard before she gets a message and jumps up with a huge grin. "Need to go, see you later." She runs off without another word.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Move away', goto: ['pav_complex', 'start'] },
                  ]);
                }
                scene.actions([
                  { label: 'Move away', goto: ['pav_complex', 'start'] },
                ]);
              }
              scene.actions([
                { label: 'Move away', goto: ['pav_complex', 'start'] },
              ]);
            }
            scene.actions([
              { label: 'Move away', goto: ['pav_complex', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Move away', goto: ['pav_complex', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  }
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
    default:
      enterBench(s, scene);
      break;
  }
}

export const pav_aptcourtev: LocationDef = {
  name: 'pav_aptcourtev',
  title: 'You take a seat on one of the benches in the courtyard and r',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You take a seat on one of the benches in the courtyard and relax.'],
  enter: enter,
};
