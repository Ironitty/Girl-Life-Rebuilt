import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBandGarage(s: GameState, scene: SceneBuilder): void {
  (s as any).hangout_rand = 'hangout' + (Math.floor(Math.random() * 9) + 1) + '';
  qspCall(s, 'core_library', 'setloc', 'praiders_garage', 'band_garage');
  (s as any).location_type = 'private';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['radomirblocked'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['beer_daystart'] < ((s as any).daystart ?? 0)) {
    ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['beer_count'] = 0;
  }
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'arkadi_fyodorov_schedule', '');
  qspCall(s, 'radomir_popov_schedule', '');
  qspCall(s, 'valentin_bogdanov_schedule', '');
  if (((s as any).locat ?? 0)?.['A144'] === 24  &&  ((s as any).locat ?? 0)?.['A154'] === 24  &&  ((s as any).locat ?? 0)?.['A156'] === 24  &&  ((s as any).locat ?? 0)?.['A158'] === 24  &&  ((s as any).hour ?? 0) < 23) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/garage/band/band_garage.jpg');
      scene.text('The garage has been converted into a music studio that Radomir and his band hang out in. In the left corner, opposite the door, is a makeshift stage with a drum set on it. Surrounding the stage are several large speakers, amps, mics and guitar stands. The walls are plastered with sound deafening foam that has various posters stapled into it. In the left corner near the door is an old iron stove which is currently radiating heat. The only source of heat in the room, it barely keeps the garage at a reasonable temperature. Along the right wall is an old ratty couch and some chairs surrounding a coffee table completely covered in empty beer bottles and discarded takeout containers. If someone needs a refresher, there\'s an ice cooler next to the couch with several bottles of beer and water in it.');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/garage/band/band_garage.jpg');
      scene.text('The garage has been converted into a music studio that Radomir and his band hang out in. In the left corner, opposite the door, is a makeshift stage with a drum set on it. Surrounding the stage are several large speakers, amps, mics and guitar stands. The walls are plastered with sound deafening foam that has various posters stapled into it. In the left corner near the door is an old iron stove used to heat the garage during the winter, but it\'s turned off at the moment. Along the right wall is an old ratty couch and some chairs surrounding a coffee table completely covered in empty beer bottles and discarded takeout containers. If someone needs a refresher, there\'s an ice cooler next to the couch with several bottles of beer and water in it.');
    }
    if (((s as any).gopnikbandQW ?? 0)?.['beer_count'] < 3) {
      scene.actions([
        { label: 'Grab a beer from the cooler', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/band_garage.jpg');
    scene.text('You reach into the ice-cold cooler and pull out a chilled bottle of beer. The glass sweats in your hand as you pop it open and take a sip. It\'s not great, but it gets the job done.');
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).gopnikbandQW = (st as any).gopnikbandQW ?? {})['beer_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).gopnikbandQW = (st as any).gopnikbandQW ?? {})['beer_count'] = ((st as any).gopnikbandQW['beer_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'go back', goto: ['praiders_garage', 'band_garage'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_hydra ?? 0) < 100) {
      scene.actions([
        { label: 'Grab a bottle of water from the cooler', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/band_garage.jpg');
    scene.text('You dig past the beer to find a plastic bottle of water, crack it open, and take several gulps. Refreshing and much needed.');
    qspCall(st, 'beverage', 'water_stats');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'go back', goto: ['praiders_garage', 'band_garage'] },
    ]);
  } },
      ]);
    }
    if (((s as any).hour ?? 0) <= 20) {
      scene.text('The band is currently practicing. Radomir is standing up front with the mic in his hands as he bellows out the lyrics to one of their songs. He is flanked on either side by Anushka playing guitar, who also provides backup vocals, and Valentin playing bass. Arkadi plays the drums on the small raised stage behind them.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
        { label: 'Listen to them play', goto: ['praiders_garage', 'listen_practice'] },
      ]);
    } else {
      scene.text('The band are done practicing for the day and are lounging around the garage with a few others.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
        { label: 'Join them', goto: ['praiders_garage', 'hangout'] },
      ]);
    }
  } else {
    scene.text('<center>Five Eight Estate - Garages</center>');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/garages.jpg');
    scene.text('You go to the garage and find it locked up. You can\'t hear any noise inside. It looks like no one is currently here.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterListenPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'praiders_garage', 'listen_practice');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).practice_session = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).practice_session ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('They are playing fairly well before Radomir stops. "Stop, stop!" Once the music stops he turns towards Anushka. "What the fuck, Nush? You started the rift too soon! It\'s supposed to be after I start singing the next verse!"');
    scene.text('She snarls back at him. "You were too late! You missed your cue to start singing!"');
    scene.text('He looks pissed that she\'s blaming him. "Fuck you Nush, I didn\'t miss it. You started too soon!" Valentin chimes in. "Dude, you missed your cue. We were all in sync." They all start arguing until Arkadi yells to get everyone to stop and start again.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice2.jpg');
    scene.text('They start playing again, but Radomir again stops and turns towards Arkadi. "What the fuck was that shit? We don\'t need you going off sheet. This has to be perfect." This leads to yet another argument.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice4.jpg');
    scene.text('They seem a bit off as they start again, the stress and fighting is obviously getting to all of them. They notice this as well, which quickly leads to another short argument where Radomir calls people out.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice3.jpg');
    scene.text('They get to a point where the music suddenly repeats and Radomir isn\'t singing. The rest seem to share a glance and then stop playing as Valentin speaks up. "Rad, what the fuck man? You missed your cue. Again."');
    scene.text('Radomir turns towards him. "No I didn\'t, I was waiting for you all to get your shit together and then you just stopped." They argue again as Arkadi tries to get them to start over and Valentin finally has enough. "Fuck it, I need a break!" With that, he puts his guitar in the stand, followed by Nush doing the same as Arkadi gets up from behind the drums and Radomir walks towards the couches.');
    scene.actions([
      { label: 'Tell them they were good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('They made a few mistakes but, you didn\'t think it was that bad. "Hey, you guys did really well."');
    scene.text('"That was shit! That\'s the kind shit you hear from amateurs! We\'ll never make it like that."');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, but we can and usually are much better." Valentin rep...
    scene.text(`"Thanks ${((st as any).pcs_nickname || '')}, but we can and usually are much better." Valentin replies. With that, they all spread out and take seats, grabbing some beers as they do. Valentin sits on one end of the couch, Arkadi sits on an old box, Radomir sits on the only reclining chair and Anushka sits on the other end of the couch. After an awkward silence where they quietly drink their beers, they seem to start to loosen up and relax.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Radomir he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Radomir is really cute and is such a great singer. "Radomir, you were amazing." you tell him with a smile.');
    scene.text('He smiles back at you. "Yeah, I was wasn\'t I? Now if only these… if only the rest of them can get their shit together, we might have a chance." Anushka and Valentin flip him off while Arkadi shakes his head. Radomir just ignores them as he sits down on his recliner.');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      // TODO-QSP: dynamic text: Once he sits down with a beer in hand, he pats the arm of the chair. "Hey <<$pcs...
      scene.text(`Once he sits down with a beer in hand, he pats the arm of the chair. "Hey ${((st as any).pcs_nickname || '')}, come over here and take a seat."`);
    } else {
      scene.text('"Nice to have a fan that knows who the real star is." he says before taking a swig of his beer.');
    }
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.actions([
        { label: 'Sit with Radomir', goto: ['praiders_garage_chat', 'chat_radomir'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Anushka she was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You think Anushka did great despite what happened. "You were great, Anushka." you tell her with a smile.');
    // TODO-QSP: dynamic text: She smiles back at you. "Thanks <<$pcs_nickname>>, but we need to do better if w...
    scene.text(`She smiles back at you. "Thanks ${((st as any).pcs_nickname || '')}, but we need to do better if we want to make it."`);
    scene.text('"Yeah, if you would focus and stop screwing up." Radomir mutters, which causes her to flip him off. Radomir smirks as he grabs a beer. "Maybe later, but thanks for the offer."');
    scene.text('Anushka gives him a dirty look and sits on the other end of the couch from Valentin while Radomir sits down on his recliner and Arkadi takes a seat on an upturned box.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Valentin he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You think Valentin did great despite what happened. "You were great, Valentin." you tell him with a smile.');
    // TODO-QSP: dynamic text: He smiles back at you. "Thanks <<$pcs_nickname>>, but we still need to work out ...
    scene.text(`He smiles back at you. "Thanks ${((st as any).pcs_nickname || '')}, but we still need to work out some kinks."`);
    scene.text('"Yeah, if the rest of you would get your act together." Radomir mutters, which Valentin just ignores as he sits on the other end of the couch from Anushka while Radomir sits down on his recliner and Arkadi takes a seat on an upturned box.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Arkadi he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('You think Arkadi did great despite what happened. "You were great, Arkadi." you tell him with a smile.');
    // TODO-QSP: dynamic text: He nods at you. "Thanks <<$pcs_nickname>>, but we''ve still got a long way to go...
    scene.text(`He nods at you. "Thanks ${((st as any).pcs_nickname || '')}, but we've still got a long way to go."`);
    scene.text('"Yeah, you keep banging on your drums like an amateur…" Radomir mutters, which causes Arkadi to turn on him. "How about I bang on you with my fists?"');
    scene.text('Valentin grabs Arkadi by the arm. "Leave it man, you know how he gets."');
    scene.text('Radomir laughs as he grabs a beer and sits on his recliner, with the rest spreading out. ');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('They all spread out and take seats, grabbing some beers as they do. Valentin sits on one end of the couch, Arkadi sits on an old box, Radomir sits on the only reclining chair and Anushka sits on the other end of the couch. After an awkward silence where they quietly drink their beers, they seem to start to loosen up and relax.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
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
    if (((s as any).practice_session ?? 0) <= 3) {
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        (s as any).track_loop = 'sound/pussyriot' + (Math.floor(Math.random() * 3) + 1) + '.mp3';
        (s as any).volume = 100;
        (s as any).music_loop = 1;
      }
      scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
      scene.text('They start playing and seem to just be in perfect sync tonight. They have great timing and Radomir rips off some amazing vocals, showing off his range, as well as holding a note for an amazing length of time.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
        { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice2.jpg');
    scene.text('They play a few more songs and Arkadi pulls off one of the best drum solos you\'ve ever heard in the middle of one of the songs. They sound a lot better than your typical garage band.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice3.jpg');
    scene.text('They continue playing songs, with Anushka and Valentin playing a few dueling rifts. The whole group is spot on with this song.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice4.jpg');
    scene.text('Nearing the end of their practice session, they finish with Anushka giving Radomir her guitar to play as she takes his place at the mic and sings several songs.');
    scene.actions([
      { label: 'Tell them they were good', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('They played really well, at least as good as a lot of the stuff you\'ve heard on the radio. "You guys were great!"');
    scene.text('Radomir replies with a smile. "Yeah I know, we fucking nailed it. We are so making it."');
    scene.text('Valentin and Anushka say thanks while Arkadi just nods at you. Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Radomir he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Radomir is really cute and is such a great singer. "You were amazing." you tell him with a smile.');
    scene.text('He smiles back at you. "Yeah, I was wasn\'t I? I just fucking nailed it, like always." The rest ignore him claiming all the credit as they grab some beer and crowd onto the couch with those who listened to them practice.');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      // TODO-QSP: dynamic text: He sits down with a beer in hand and pats the arm of the chair. "Hey <<$pcs_nick...
      scene.text(`He sits down with a beer in hand and pats the arm of the chair. "Hey ${((st as any).pcs_nickname || '')}, come over here and take a seat."`);
    } else {
      scene.text('"Nice to have a fan that knows who the real star is." he says before taking a swig of his beer.');
    }
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.actions([
        { label: 'Sit with Radomir', goto: ['praiders_garage_chat', 'chat_radomir'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Anushka she was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The whole band was great, but you felt Anushka really did amazing. "You were amazing, Nush! The whole band did great."');
    // TODO-QSP: dynamic text: She smiles at you. "Thanks <<$pcs_nickname>>, we really did well tonight." Anush...
    scene.text(`She smiles at you. "Thanks ${((st as any).pcs_nickname || '')}, we really did well tonight." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Valentin he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('The whole band was great, but you felt Valentin really did amazing. "You were amazing, Valentin! The whole band did great."');
    // TODO-QSP: dynamic text: He smiles at you. "Thanks <<$pcs_nickname>>, we were just in the zone tonight. I...
    scene.text(`He smiles at you. "Thanks ${((st as any).pcs_nickname || '')}, we were just in the zone tonight. It was great." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Arkadi he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('The whole band was great, but you felt Arkadi really did amazing. "You were amazing, Arkadi! That drum solo, just wow! The whole band did great."');
    scene.text('He nods at you. "Thanks. All of us being so in sync tonight was great." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('As they put their instruments away, they compliment each other and talk about how great a night it was. Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
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
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        (s as any).track_loop = 'sound/pussyriot' + (Math.floor(Math.random() * 3) + 1) + '.mp3';
        (s as any).volume = 100;
        (s as any).music_loop = 1;
      }
      scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
      scene.text('They start playing and seem to be in perfect sync tonight. They have great timing and Anushka is able to hit the low contralto notes, followed by hitting the high soprano notes. She has a great vocal range too. During one of the songs, she and Radomir have a duet and the way they sing together side by side and look at each other makes it apparent that they have real chemistry with each other.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
        { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice3.jpg');
    scene.text('They play a few more songs and Arkadi really sets the tone and melody for one of the songs, creating the perfect beat for the rest to follow. But the whole group was just still spot on.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice4.jpg');
    scene.text('They play a few more songs, where Anushka does most of the singing while Radomir takes over lead guitar. Radomir and Valentin play a few dueling rifts that blend together well. The whole group is spot on with this song.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice2.jpg');
    scene.text('Nearing the end of their practice session, they finish with Anushka giving Radomir her guitar to play while she takes his place at the mic and takes over singing for several songs.');
    scene.actions([
      { label: 'Tell them they were good', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('They played really well, at least as good as a lot of the stuff you\'ve heard on the radio. "You guys were great!"');
    scene.text('Radomir replies with a smile. "Yeah I know right, we fucking nailed it, we are so making it."');
    // TODO-QSP: dynamic text: At the same time Valentin says, "Thanks <<$pcs_nickname>>." Followed by Anushka ...
    scene.text(`At the same time Valentin says, "Thanks ${((st as any).pcs_nickname || '')}." Followed by Anushka saying thanks and Arkadi nodding to you. With that Anushka, Valentin and Arkadi crowd the couch, while, Radomir sits on the only reclining chair. They grab some beers, all smiling and laughing as they take a seat among those listening to them practice today.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Radomir he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Radomir is really cute and is such a great singer. "You were amazing." you tell him with a smile.');
    scene.text('He smiles back at you. "Yeah, I was wasn\'t I? I just fucking nailed it, like always." The rest ignore him claiming all the credit as they grab some beer and crowd onto the couch with those who listened to them practice.');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      // TODO-QSP: dynamic text: He sits down with a beer in hand and pats the arm of the chair. "Hey <<$pcs_nick...
      scene.text(`He sits down with a beer in hand and pats the arm of the chair. "Hey ${((st as any).pcs_nickname || '')}, come over here and take a seat."`);
    } else {
      scene.text('"Nice to have a fan that knows who the real star is." he says before taking a swig of his beer.');
    }
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.actions([
        { label: 'Sit with Radomir', goto: ['praiders_garage_chat', 'chat_radomir'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Anushka she was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The whole band was great, but you felt Anushka really did amazing. "You were amazing, Nush! The whole band did great."');
    // TODO-QSP: dynamic text: She smiles at you. "Thanks <<$pcs_nickname>>, we really did well tonight." Anush...
    scene.text(`She smiles at you. "Thanks ${((st as any).pcs_nickname || '')}, we really did well tonight." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Valentin he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A158', 'like');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('The whole band was great, but you felt Valentin really did amazing. "You were amazing, Valentin! The whole band did great."');
    // TODO-QSP: dynamic text: He smiles at you. "Thanks <<$pcs_nickname>>, we were just in the zone tonight. I...
    scene.text(`He smiles at you. "Thanks ${((st as any).pcs_nickname || '')}, we were just in the zone tonight. It was great." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Tell Arkadi he was good', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A156', 'like');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('The whole band was great, but you felt Arkadi really did amazing. "You were amazing, Arkadi! That drum solo, just wow! The whole band did great."');
    scene.text('He nods at you. "Thanks. All of us being so in sync tonight was great." Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
    ]);
  } },
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/practice1.jpg');
    scene.text('As they put their instruments away, they compliment each other and talk about how great a night it was. Anushka, Valentin and Arkadi then crowd the couch while Radomir sits on the only reclining chair. They grab some beers, smiling and laughing as they take a seat among those who were listening to them practice.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Hang out', goto: ['praiders_garage', 'hangout'] },
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

function enterHangout(s: GameState, scene: SceneBuilder): void {
  (s as any).hangout_rand = 'hangout' + (Math.floor(Math.random() * 9) + 1) + '';
  qspGoto(s, 'praiders_garage', ((s as any).hangout_rand ?? ''));
  // TODO-QSP: end
  scene.build();
}

function enterHangout1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '1'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout1'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout1'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Lena and Lera hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '2'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout2'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout2'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Lena and Lera', goto: ['praiders_garage_chat', 'chat_lenalera'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Lavrenti hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '3'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout3'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout3'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Lavrenti', goto: ['praiders_garage_chat', 'chat_lavrenti'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Lavrenti, Lena and Lera hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '4'] },
      ]);
    }
    scene.actions([
      { label: 'Just hang out', goto: ['praiders_garage', 'hangout4'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout4'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Lena and Lera', goto: ['praiders_garage_chat', 'chat_lenalera'] },
      { label: 'Talk to Lavrenti', goto: ['praiders_garage_chat', 'chat_lavrenti'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona, Lena and Lera hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '5'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout5'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout5'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Talk to Lena and Lera', goto: ['praiders_garage_chat', 'chat_lenalera'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona and Lavrenti hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '6'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout6'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout6'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Talk to Lavrenti', goto: ['praiders_garage_chat', 'chat_lavrenti'] },
      { label: 'Talk to Niko', goto: ['praiders_garage_chat', 'chat_niko'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona and Roman hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '7'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout7'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout7'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Talk to Roman', goto: ['praiders_garage_chat', 'chat_roman'] },
      { label: 'Talk to Niko', goto: ['praiders_garage_chat', 'chat_niko'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona, Lena, Lera and Lavrenti hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '8'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout8'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout8'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Talk to Lena and Lera', goto: ['praiders_garage_chat', 'chat_lenalera'] },
      { label: 'Talk to Lavrenti', goto: ['praiders_garage_chat', 'chat_lavrenti'] },
      { label: 'Talk to Niko', goto: ['praiders_garage_chat', 'chat_niko'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 1;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona, Lena, Lera, Lavrenti and Roman hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '9'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout9'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    qspCall(st, 'stat', '');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout9'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Alyona', goto: ['praiders_garage_chat', 'chat_alyona'] },
      { label: 'Talk to Lena and Lera', goto: ['praiders_garage_chat', 'chat_lenalera'] },
      { label: 'Talk to Lavrenti', goto: ['praiders_garage_chat', 'chat_lavrenti'] },
      { label: 'Talk to Roman', goto: ['praiders_garage_chat', 'chat_roman'] },
      { label: 'Talk to Niko', goto: ['praiders_garage_chat', 'chat_niko'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHangout10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['alyona_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lena_lara_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['lavrenti_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['roman_present'] = 0;
  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['niko_present'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  scene.text('Everyone sits around the small coffee table on the couch and the various chairs scattered around. Beers are handed out and a few people smoke weed or do lines of harder drugs as everyone relaxes and chats, with several conversations going at once. Several stories are shared about past events or bragging rights, many about the band and some of the gigs they\'ve done. In addition to the band and some people you don\'t know, you also see Alyona, Lena, Lera, Lavrenti and Roman hanging out as well.');
  if (((s as any).hour ?? 0) < 23) {
    if (((s as any).gopnikbandQW ?? 0)?.['radomirblocked'] !== 1) {
      scene.actions([
        { label: 'Talk to Radomir', goto: ['praiders_garage_chat', 'chat_radomir', '9'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout9'] },
      { label: 'Grab a beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/drinkbeer.jpg');
    scene.text('You grab one of the offered beers and take a long swig of it before joining in the banter going back and forth. Someone occasionally tells a funny or embarrassing story, which often gets a laugh from everyone. It doesn\'t take too long for you to finish off your beer.');
    qspCall(st, 'stat', '');
    if (((st as any).hour ?? 0) < 23) {
      scene.actions([
        { label: 'Keep hanging out', goto: ['praiders_garage', 'hangout9'] },
        { label: 'Leave', goto: ['pav_complex', 'garages'] },
      ]);
    } else {
      scene.actions([
        { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
      ]);
    }
  } },
      { label: 'Talk to Anushka', goto: ['praiders_garage_chat', 'chat_anushka'] },
      { label: 'Talk to Valentin', goto: ['praiders_garage_chat', 'chat_valentin'] },
      { label: 'Talk to Arkadi', goto: ['praiders_garage_chat', 'chat_arkadi'] },
      { label: 'Talk to Niko', goto: ['praiders_garage_chat', 'chat_niko'] },
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } else {
    scene.actions([
      { label: 'Party is finishing', goto: ['praiders_garage', 'party_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPartyOver(s: GameState, scene: SceneBuilder): void {
  (s as any).temprand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).temprand ?? 0) === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['alyona_present'] === 1) {
    qspGoto(s, 'praiders_garage_events', 'alyona_dad');
  } else {
    if (((s as any).temprand ?? 0) === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
      qspGoto(s, 'praiders_garage_events', 'roman_fight');
    } else {
      if (((s as any).temprand ?? 0) === 3  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
        qspGoto(s, 'praiders_garage_events', 'lav_baddrugs');
      } else {
        if (((s as any).temprand ?? 0) === 4) {
          qspGoto(s, 'praiders_garage_events', 'radnush_love');
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/garage/band/band_garage.jpg');
          scene.text('It eventually starts getting late and everyone starts to slowly leave until you\'re one of the last people left. Everyone left seems to be pairing up or leaving in small groups, leaving you on your own as one of the last people to leave. Arkadi stops to lock the garage up before walking off himself, leaving you alone among the garages.');
          scene.actions([
            { label: 'Leave', goto: ['pav_complex', 'garages'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'band_garage':
      enterBandGarage(s, scene);
      break;
    case 'listen_practice':
      enterListenPractice(s, scene);
      break;
    case 'hangout':
      enterHangout(s, scene);
      break;
    case 'hangout1':
      enterHangout1(s, scene);
      break;
    case 'hangout2':
      enterHangout2(s, scene);
      break;
    case 'hangout3':
      enterHangout3(s, scene);
      break;
    case 'hangout4':
      enterHangout4(s, scene);
      break;
    case 'hangout5':
      enterHangout5(s, scene);
      break;
    case 'hangout6':
      enterHangout6(s, scene);
      break;
    case 'hangout7':
      enterHangout7(s, scene);
      break;
    case 'hangout8':
      enterHangout8(s, scene);
      break;
    case 'hangout9':
      enterHangout9(s, scene);
      break;
    case 'hangout10':
      enterHangout10(s, scene);
      break;
    case 'party_over':
      enterPartyOver(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const praiders_garage: LocationDef = {
  name: 'praiders_garage',
  title: 'The garage has been converted into a music studio that Radom',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
