import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChampagne1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model['firstname']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname']}!"`);
  scene.text('As you walk out of the changing room you hear someone call your name.');
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.text('"I\'ve been looking for you."');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What\'s up?"');
    scene.text('"A lot of our readers have been sending in a lot of comments about you. They really seem to love you so management wanted to do a special spread on you. But we only have time in the schedule to do it right now. Interested?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sorry but no thanks. I don\'t really have time to do do this right now."');
    scene.text('"Ahh, that\'s a shame. Well, sorry to hear that. See you later then."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'What kind of shoot is it?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What kind of shoot are we talking about here? Topless? Nude?"');
    scene.text('"Well, the idea is to have you play around a bottle of champagne. It\'ll have stages to it, first just some glittery panties but we\'ll transition into a full frontal shoot where you pour the champagne all over yourself. Pay will be about the normal rate for a full frontal shoot. Still interested?"');
    scene.actions([
      { label: 'I\'d rather not', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehh, sorry but if it\'s all the same to you, I\'d rather not."');
    scene.text('"Are you sure? Giving the readers a spread like this that they specifically asked for would do wonders for your reputation. You\'d be likely to get attention even from people who aren\'t already your fans."');
    scene.actions([
      { label: 'I\'m sure', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yes I\'m sure."');
    scene.text('"Ahh, that\'s a shame. Well, sorry to hear that. See you later then."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Well, maybe…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… maybe…" you say. "I guess if it will be that good for my career, then sure."');
    scene.text('"Great! Go have your makeup checked by the dressers and then come meet me at the set."');
    scene.actions([
      { label: 'Go to makeup', goto: ['foto_events2', 'champagne1.2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Okay I\'ll do it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yeah that sounds really good! I\'ll do it!"');
    scene.text('"Great! Go have your makeup checked by the dressers and then come meet me at the set."');
    scene.actions([
      { label: 'Go to makeup', goto: ['foto_events2', 'champagne1.2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Love to do this!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yeah! I\'d love to do this!"');
    scene.text('"Great! Go have your makeup checked by the dressers and then come meet me at the set."');
    scene.actions([
      { label: 'Go to makeup', goto: ['foto_events2', 'champagne1.2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChampagne1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 5;
  (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0);
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['shoots'] = (((s as any).modelfoto ?? {})['shoots'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['fullnude'] = (((s as any).modelfoto ?? {})['fullnude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['pussy'] = (((s as any).modelfoto ?? {})['pussy'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 9);
  scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
  scene.text('You walk over to the makeup department and the dressers get your hair and face ready before going to meet the photographer on set. Just before you leave, they have you slip on a gold thong and then send you on your way.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/champagne1.mp4');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('Once there, they give you a bottle of champagne and help you into a giant coupe. You spend the next 30 minutes having a surprisingly good time posing for the cameras. The giant glass is a fun set piece and you enjoy getting to play around inside of it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/champagne2.mp4');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('For the next part, the thong comes off and you start playing around more with the champagne inside the bottle. You pose nude and give the camera sultry looks. You pour the alcohol over yourself while you play with your breasts, letting the photographers get close up as it cascades over your nipples. You climb back into the glass and spend some more time laughing while you kick your legs around and flash your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 25);
    qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
    ((s as any).modelfoto ?? {})['earnings'] = (((s as any).modelfoto ?? {})['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
    qspCall(s, 'fame', 'city', 'modelling', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    // TODO-QSP: dynamic text: After about an hour, they've got all the shots they want for your special. It wa...
    scene.text(`After about an hour, they've got all the shots they want for your special. It was a pretty short shoot since they knew what they wanted to get and everything was already set up. However, you're very sticky from all that champagne you poured over yourself. Someone gives you an envelope containing ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} and you thank them, excusing yourself to go take a shower and get all this stuff off of you.`);
    scene.actions([
      { label: 'Go take a shower', goto: ['foto', 'showers'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKickboxingDocumentary(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"A kickboxing documentary?" you ask.');
  scene.text('"Yea. The local sports magazine, is doing a coverage of the Female Kickboxing League. We are doing the graphic part, lots of work doing artistic naked pics, making you women look badass and beautiful. As you are gaining in popularity, they will want a journalist to do an interview. The royalties and the advertising are great. Are you interested?."');
  scene.text('"Hmmm…"');
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'Yeah! I\'m in!', handler: (st: GameState) => {
    (s as any).specialjob7 = 0;
    scene.text('"Great! The photographers are all ready doing their job in the Havanna Fitness Center. You will meet the journalist there."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fitness/KD1.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 900 + (((s as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0)) + ((((s as any).fame ?? {})?.['city_kickboxing'] + ((s as any).pcs_apprnc ?? 0))/2)*2;
    ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
    ((s as any).modelfoto ?? {})['shoots'] = (((s as any).modelfoto ?? {})['shoots'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'fame', 'city', 'kickboxing', 'medium');
    qspCall(s, 'fame', 'city', 'modelling', 'medium');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
    ((s as any).modelfoto ?? {})['earnings'] = (((s as any).modelfoto ?? {})['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.text('You aren\'t the only one doing this documentary. Around you, walking between photographers, there are other kickboxers trying to follow the instructions to be "dynamic". Beyond that, the modeling is fairly artistic, showing skin but hiding the important bits between props and poses.');
    scene.text('After doing several shots, finally a journalist has time to talk with you.');
    scene.actions([
      { label: 'Do the interview.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fitness/KD2.jpg');
    if (((s as any).fame ?? 0)?.['city_kickboxing'] >=400  &&  ((s as any).kickbox ?? 0)?.['sash'] >= 5) {
      // TODO-QSP: dynamic text: "You are <<$pcs_lastname>> Isn't it?"
      scene.text(`"You are ${((s as any).pcs_lastname ?? 0)} Isn't it?"`);
      scene.text('The journalist shakes your hand with a big smile on his face. Interviewing you, must be a great thing, as practically without stopping, you are showered with questions, from the sport-related to the personal, passing for the absolute trivial.');
      scene.text('"Your feeling about that victory? Your favorite color? A man in your life?"');
      scene.text('The interview goes and goes like this during a long time, until your allocated time end, and then reluctantly the journalist leaves you to talk to another kickboxer.');
    } else {
      if (((s as any).fame ?? 0)?.['city_kickboxing'] >=200  &&  ((s as any).kickbox ?? 0)?.['sash'] >= 2) {
        scene.text('Between shots, a journalist comes and asks you questions. Most of them, are fairly generic. Personal data, your opinions about the league, confirmation on their information. In general, it doesn\'t seem too deep but it is evident that the journalist has his hands more than full, catching up with all the women in the gymnasium.');
      } else {
        scene.text('You wait between shots, but the journalist seems to find somebody else more interesting and forgets to talk with you.');
      }
    }
    scene.actions([
      { label: ' Finally the job is done', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fitness/KD3.jpg');
    if (((s as any).fame ?? 0)?.['city_kickboxing'] >=400  &&  ((s as any).kickbox ?? 0)?.['sash'] >= 5) {
      // TODO-QSP: dynamic text: Two hours later, the model session/interviews end. After returning to the studio...
      scene.text(`Two hours later, the model session/interviews end. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
      scene.text('Sometime later, the article is sent to your phone…');
      scene.text('And is a little awkward… The realization, that you are getting famous, as one of the best, if not the BEST, female kickboxer in all St. Petersburg. Practically, the article turns around you. With even fans asking all kinds of personal questions. Damn! You are Hot, Mean and Famous!');
    } else {
      if (((s as any).fame ?? 0)?.['city_kickboxing'] >=200  &&  ((s as any).kickbox ?? 0)?.['sash'] >= 2) {
        // TODO-QSP: dynamic text: Two hours later, the model session/interviews end. After returning to the studio...
        scene.text(`Two hours later, the model session/interviews end. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
        scene.text('Sometime later, the article is sent to your phone…');
        scene.text('Being true, is a little dry, mentioning your name, general information and that you are an up-and-coming kickboxer.');
      } else {
        // TODO-QSP: dynamic text: Two hours later, the model session/interviews end. After returning to the studio...
        scene.text(`Two hours later, the model session/interviews end. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
        scene.text('Sometime later, the article is sent to your phone…');
        scene.text('And is disappointing! Beyond your photo is only your name, and the mention, that you are a participant in the League.');
      }
    }
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
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

function enterTrack__FieldDocumentary(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"A Track & Field documentary?" you ask.');
  scene.text('"Aja. During the warmer seasons, local sports magazines, they like to do articles about the women on the running business. With the sun and heat, they can take them to the field and do some artistic photos. We are doing the graphic part in a reserved field. Most photos will be naked, and as they want you to do some runs, it will not be possible to hide all of your bodyparts. As you are gaining in popularity, they will want a journalist to do an interview. The royalties and the advertising are great. Are you interested?."');
  scene.text('"Hmmm…"');
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (s as any).specialjob8 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! The photographers are all ready doing their job in the field near the Havanna Fitness Center. You will meet a journalist there."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/TD1.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 1800 + (((s as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0)) + ((((s as any).fame ?? {})?.['city_running'] + ((s as any).pcs_apprnc ?? 0))/2)*2;
    ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
    ((s as any).modelfoto ?? {})['shoots'] = (((s as any).modelfoto ?? {})['shoots'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'fame', 'city', 'running', 'small');
    qspCall(s, 'fame', 'city', 'modelling', 'small');
    qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
    ((s as any).modelfoto ?? {})['earnings'] = (((s as any).modelfoto ?? {})['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
    ((s as any).modelfoto ?? {})['topless'] = (((s as any).modelfoto ?? {})['topless'] ?? 0) + (1);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('You aren\'t the only one doing this documentary. Around you, walking between photographers, there are other runners trying to follow the instructions to be "dynamic". Beyond that, the models, try to be fairlly artistic, showing skin, but hiding the important bits, between props and poses, sadly with all the movement, that is easier said than done, and the security have their hands full, shooing away all the voyeurs trying to catch a peek.');
    scene.text('After doing several shots, finally a journalist has time to talk with you.');
    scene.actions([
      { label: 'Do the interview.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/TD2.jpg');
    if (((s as any).fame ?? 0)?.['city_running'] >=400  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] >= 3) {
      // TODO-QSP: dynamic text: "You are <<$pcs_lastname>> Isn't it?"
      scene.text(`"You are ${((s as any).pcs_lastname ?? 0)} Isn't it?"`);
      scene.text('The journalist shakes your hand with a big smile on his face. Interviewing you must be a great thing, as practically without stopping, you are showered with questions, from the sport-related to the personal, passing for the absolute trivial.');
      scene.text('"Your feeling about that victory? Your favorite color? A man in your life?"');
      scene.text('The interview goes on and on like this for a long time, until you\'re allocated time ends, and then reluctantly the journalist leaves you to talk to another runner.');
    } else {
      if (((s as any).fame ?? 0)?.['city_running'] >=200  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] >= 1) {
        scene.text('Between shots, a journalist comes and asks you questions. Most of them, are fairly generic. Personal data, your opinions about the Championship, confirmation on their information. In general, it doesn\'t seem too deep but it is evident that the journalist has his hands more than full, catching up with all the women in the field.');
      } else {
        scene.text('You wait between shots, but the journalist seems to find somebody else more interesting and forgets to talk with you.');
      }
    }
    scene.actions([
      { label: ' Finally the job is done', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/TD3.jpg');
    if (((s as any).fame ?? 0)?.['city_running'] >=400  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] >= 3) {
      // TODO-QSP: dynamic text: Two hours later, the model session/interviews ends. After returning to the studi...
      scene.text(`Two hours later, the model session/interviews ends. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
      scene.text('Sometime later, the article is sent to your phone…');
      scene.text('And is a little awkward… The realization, that you are getting famous, as one of the best, if not THE best runner in The Women\'s 400 Meter Dash category in all of St. Petersburg. Practically, the article turns around you. With even fans asking all kinds of personal questions. Damn! You are Hot, Fast and Famous!');
    } else {
      if (((s as any).fame ?? 0)?.['city_running'] >=200  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] >= 1) {
        // TODO-QSP: dynamic text: Two hours later, the model session/interviews ends. After returning to the studi...
        scene.text(`Two hours later, the model session/interviews ends. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
        scene.text('Sometime later, the article is sent to your phone…');
        scene.text('Being true, is a little dry, mentioning your name, general information and that you are an up-and-coming runner in The Women\'s 400 Meter Dash category.');
      } else {
        scene.img('images/locations/city/citycenter/photo/TD2.jpg');
        // TODO-QSP: dynamic text: Two hours later, the model session/interview ends. After returning to the studio...
        scene.text(`Two hours later, the model session/interview ends. After returning to the studio, you are handed ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} in payment for the job.`);
        scene.text('Sometime later, the article is sent to your phone…');
        scene.text('And is disappointing! Beyond your photo is only your name, and the mention, that you are a new runner in The Women\'s 400 Meter Dash category.');
      }
    }
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'champagne1':
      enterChampagne1(s, scene);
      break;
    case 'champagne1.2':
      enterChampagne1_2(s, scene);
      break;
    case 'kickboxing_documentary':
      enterKickboxingDocumentary(s, scene);
      break;
    case 'track_&_field_documentary':
      enterTrack__FieldDocumentary(s, scene);
      break;
    default:
      enterChampagne1(s, scene);
      break;
  }
}

export const foto_events2: LocationDef = {
  name: 'foto_events2',
  title: 'As you walk out of the changing room you hear someone call y',
  region: 'other',
  description: ['As you walk out of the changing room you hear someone call your name.'],
  enter: enter,
};
