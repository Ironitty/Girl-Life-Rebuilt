import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('Your computer boots up and you\'re soon looking at your operating system\'s main screen.');
  if (((s as any).AlbinaQW ?? 0)?.['flashdrive'] === 1) {
    if ((((s as any).loc ?? 0) === 'pav_shared_apt'  &&  ((s as any).loc_arg ?? 0) === 'pcsRoom')  ||  (((s as any).loc ?? 0) === 'mey_home'  &&  ((s as any).loc_arg ?? 0) === 'guest_bedroom')  ||  ((s as any).loc ?? 0) === 'nichBedroomServant'  ||  (((s as any).locat ?? 0)?.['Anya_inroom'] === 0  &&  ((s as any).loc ?? 0) === 'bedrPar')) {
      scene.actions([
        { label: 'Check Albina\'s flash drive', goto: ['albina_events', 'flash_drive'] },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_game_ds'] > 0) {
    scene.actions([
      { label: 'Play Dead City', goto: ['KGZstart', ''] },
    ]);
  }
  (s as any).elektro = ((s as any).elektro ?? 0) + (5);
  (s as any).subs = ((s as any).access ?? 0)?.['subscription'];
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] > 0) {
    if (((s as any).access ?? 0)?.['metered'] === 0) {
      scene.actions([
        { label: 'Browse the internet', goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Browse the internet - You have ' + String(((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] ?? '' ?? '') + ' minutes of access left', goto: ['komp', 'browse'] },
      ]);
    }
  } else {
    scene.text('You don\'t have internet access here, and you don\'t even have mobile internet.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Shut your computer down', goto: ['komp', 'fin'] },
    { label: 'Play Solitaire (0:20)', goto: ['komp', 'pasians'] },
  ]);
  scene.build();
}

function enterBrowse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1  &&  ((s as any).loc ?? 0) === 'bedrPar') {
    if (((s as any).access ?? 0)?.['noporn'] === '') {
      qspCall(s, 'internet_mobile', 'add_limitation', 'noporn', 'You can\'t watch porn with your sister in the room!');
    }
    if (((s as any).access ?? 0)?.['nocamshow'] === '') {
      qspCall(s, 'internet_mobile', 'add_limitation', 'nocamshow', 'You can\'t do a camshow with your sister in the room!');
    }
  }
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.text('<center><b>Browser</b></center>');
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    // TODO-QSP: 'You have no internet access. '+iif(access['metered'], ' You have to buy more minutes.', ' Maybe you...
    if (((s as any).camGirl ?? 0)?.['MFC_account'] === 1  &&  ((s as any).access ?? 0)?.['nocamshow'] === ''  &&  ((s as any).mc_inventory ?? 0)?.['tech_webcam'] === 1) {
      scene.text('Since MyFreeCams will cover the cost, you can still log on to do a cam show.');
      scene.actions([
        { label: 'Go to MyFreeCams.org', goto: ['komp_cam_MFC_main', 'start'] },
      ]);
    }
  } else {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    if (((s as any).access ?? 0)?.['general'] !== '') {
      // TODO-QSP: dynamic text: <center><h4 style="color: red;"><b><<$access[''general'']>></b></h4></center>
      scene.text(`<center><h4 style="color: red;"><b>${((s as any).access ?? 0)?.['general'] ?? ''}</b></h4></center>`);
    }
    scene.text('You head to your favourite start page while you decide what you want to do.');
    scene.text('A blinking banner for a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027agent/u0027); return false;">Kirsanova Real Estate Agency</a> keeps popping up in the corner.');
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_apartment')  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      scene.actions([
        { label: 'Rent your apartment out', goto: ['komp', 'sale'] },
      ]);
    }
    if (((s as any).access ?? 0)?.['noporn'] === '') {
      scene.actions([
        { label: 'Watch porn', goto: ['komp', 'porno'] },
      ]);
    } else {
      // TODO-QSP: "<b><<$access['noporn']>></b>"
    }
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text('You should get dressed before searching for jobs.');
      } else {
        scene.actions([
          { label: 'Look for a job online', goto: ['komp', 'rabota'] },
        ]);
      }
    }
    if (((s as any).shantfoto ?? 0) > 0) {
      scene.actions([
        { label: 'Find the girl you took photos of in the park', goto: ['komp_assbook', 'blackmail'] },
      ]);
    }
    if (((s as any).fuckornot ?? 0) === 3) {
      qspGoto(s, 'komp_HF_or_not', 'fuckornot');
      scene.actions([
        { label: 'Visit \'Fuckable or not\' site', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'komp'
  } },
      ]);
    }
    if (((s as any).hotornot ?? 0) >= 2) {
      qspGoto(s, 'komp_HF_or_not', 'hotornot');
      scene.actions([
        { label: 'Visit \'Hot or not\' site', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'komp'
  } },
      ]);
    }
    if (((s as any).fuckornot_uni ?? 0) === 1) {
      qspGoto(s, 'komp_HF_or_not', 'fuckornot_uni');
      scene.actions([
        { label: 'Visit \'Fuckable or not\' University site', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'komp'
  } },
      ]);
    }
    if (((s as any).hotornot_uni ?? 0) === 1) {
      qspGoto(s, 'komp_HF_or_not', 'hotornot_uni');
      scene.actions([
        { label: 'Visit \'Hot or not\' University site', handler: (st: GameState) => {
    // TODO-QSP: $view_location = 'komp'
  } },
      ]);
    }
    if (((s as any).hostel ?? 0)?.['status'] === 7) {
      scene.actions([
        { label: 'Read letter from Eugene', goto: ['pav_voc_school', 'dating_profile'] },
      ]);
    }
    if (((s as any).camGirl ?? 0)?.['MFC_account'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['tech_webcam'] === 1) {
      if (((s as any).access ?? 0)?.['nocamshow'] === '') {
        scene.actions([
          { label: 'Go to MyFreeCams.org', goto: ['komp_cam_MFC_main', 'start'] },
        ]);
      } else {
        // TODO-QSP: "<b><<$access['nocamshow']>></b>"
      }
    }
    if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0)  ||  qspFunc(s, 'uniutil', 'student', 'enrolled')) {
      scene.actions([
        { label: 'Spend time studying', goto: ['komp', 'study'] },
      ]);
    }
    if (((s as any).sucpcinfo ?? 0) === 0  &&  ((s as any).succubxp ?? 0) > 0) {
      scene.actions([
        { label: 'Research the strange feelings you\'ve been having', goto: ['succubus', 'kompresearch'] },
      ]);
    }
    scene.actions([
      { label: 'Browse a dating website (1:00)', goto: ['komp', 'znak'] },
      { label: 'Search for cable TV services (1:00)', goto: ['komp', 'kabtv'] },
      { label: 'Play an online game', goto: ['KGstart', ''] },
      { label: 'Check social media on Assbook', goto: ['komp_assbook', 'main'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the browser', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enterSale(s: GameState, scene: SceneBuilder): void {
  if (((s as any).access ?? 0)?.['metered']  &&  ((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 15) {
    // TODO-QSP: dynamic text: You check the website, but realize that <<subscription[$subs]>> minutes won''t b...
    scene.text(`You check the website, but realize that ${((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] ?? ''} minutes won't be enough to fill out all the forms.`);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You go to a popular website where people can post advertisements for free. You could post an advertisement here.');
    if (((s as any).obkvsdam ?? 0) >= 1  &&  qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_apartment')  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      scene.text('You place an advertisement to rent out your apartment. You should check every once in a while to see if anyone responds.');
    }
    if (((s as any).obkvsdam ?? 0) === 0  &&  qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_apartment')  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      scene.actions([
        { label: 'Rent out your city residential apartment', handler: (st: GameState) => {
    (st as any).obkvsdam = 1;
  }, goto: ['komp', 'sale'] },
      ]);
    } else {
      if (((s as any).obkvsdam ?? 0) > 0) {
        scene.actions([
          { label: 'Check if you got any replies', handler: (st: GameState) => {
    if (((st as any).obkvsdam ?? 0) === 1) {
      scene.text('Nobody has responded to your offer to rent out your apartment yet.');
    } else {
      if (((st as any).obkvsdam ?? 0) > 1) {
        (st as any).predsum = 14000 + (((st as any).obkvsdam ?? 0)*1000);
        // TODO-QSP: dynamic text: Someone wants to stay in your apartment for a month! They''re offering you <<fun...
        scene.text(`Someone wants to stay in your apartment for a month! They're offering you ${qspFunc(s, 'money', 'string_profit', ((st as any).predsum ?? ''))} in cash.`);
        scene.actions([
          { label: 'Accept the offer', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'tenants_move_in', 'city_apartment', ((((st as any).month ?? 0) + 1 > 12) ? (1) : (((st as any).month ?? 0) + 1)), Math.min(((st as any).day ?? 0), ((st as any).monthsEnd ?? 0)?.[String((st as any).tenant_endmonth ?? 0)]));
    qspCall(st, 'money', 'earn', ((st as any).predsum ?? 0), 'cash');
    qspGoto(st, 'komp', 'start');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave this website', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterPorno(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.text('<center><b>Browser</b></center>');
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    // TODO-QSP: 'You have no internet access. '+iif(access['metered'], ' You have to buy more minutes.', ' Maybe you...
    scene.actions([
      { label: 'Close the browser', goto: ['komp', 'start'] },
    ]);
  } else {
    if (((s as any).access ?? 0)?.['noporn'] !== '') {
      scene.img('images/pc/items/accessories/computer/komp.jpg');
      // TODO-QSP: dynamic text: $access['noporn']
      scene.text('$access[\'noporn\']');
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.img('images/pc/items/accessories/computer/komp.jpg');
      scene.text('You go to a porn site and browse through videos for a few minutes.');
      if (((s as any).porn_studio ?? 0)?.['pickup_porn'] === 1  &&  ((s as any).porn_studio ?? 0)?.['pickup_porn_seen'] === 0  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
        ((s as any).porn_studio = (s as any).porn_studio ?? {})['pickup_porn_seen'] = 1;
        qspGoto(s, 'pickup_porn', 'discover_video');
      }
      if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] === 2) {
        scene.actions([
          { label: 'Look up your Casting Call video', goto: ['pickup_porn', 'watch_casting_call'] },
        ]);
      }
      if (((s as any).AlbinaQW ?? 0)?.['porno'] === 1) {
        qspCall(s, 'willpower', 'voyeur', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Look up Albina\'s porno', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Look up Albina\'s porno', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'albina_events', 'casting_video');
  } },
          ]);
        }
      }
      if (((s as any).fame ?? 0)?.['city_porn'] >= 100) {
        scene.actions([
          { label: 'Watch one of your own videos', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video you like the look of and click on it before getting comfortable. When the video loads up, you\'re surprised to find that the girl starring in it… is <i>you</i>!');
    scene.actions([
      { label: 'Watch it', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'stat', '');
    scene.text('Watching yourself performing on camera is an oddly erotic experience.');
    if (((st as any).fame ?? 0)?.['city_porn'] < 300) {
      scene.text('Most of the people commenting don\'t appear to really know who you are. You wonder if anyone you know has seen your videos?');
    } else {
      scene.text('The viewers have no trouble recognizing you and a lot of the comments refer to you by your stage name. You wonder if anyone you know has seen your videos?');
    }
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'arousal', 'erotic', (-30));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Turn it off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You immediately turn the video off and leave the website. If you found that video yourself, then how many people have seen you?');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_horny ?? 0) >= 50) {
        scene.actions([
          { label: 'Masturbate', goto: ['komp', 'masturbate'] },
        ]);
      }
      scene.actions([
        { label: 'Watch vanilla porn', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked and spend some time watching it while imagining yourself being in her place.');
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
        { label: 'Watch anal porn', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked in the ass and spend some time watching it while imagining yourself being in her place.');
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
        { label: 'Watch lesbian porn', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of two girls licking each other\'s pussies and imagine yourself as one of them.');
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
        { label: 'Watch BBC porn', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked by a BBC and spend some time watching it. You can\'t keep your eyes off the massive cock on your screen as you imagine yourself being in the girl\'s place.');
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
        { label: 'Watch BDSM porn', handler: (st: GameState) => {
    (st as any).elektro = ((st as any).elektro ?? 0) + (3);
    qspCall(st, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('You find a video of a girl who is tied up naked and gagged being spanked, whipped and otherwise left at the mercy of her very dominant Master, a man with huge muscular arms.');
      scene.text('You spend some time watching it while imagining what it would be like to be both master and slave.');
    } else {
      scene.text('You find a video of a young woman who is tied up naked and gagged being spanked, whipped and otherwise left at the mercy of her dominating Mistress, an older woman dressed in leather.');
      scene.text('You spend some time watching it while imagining what it would be like to be in the places of both women.');
    }
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 30);
    qspCall(st, 'arousal', 'porn', 30);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMasturbate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    // TODO-QSP: 'You have no internet access. '+iif(access['metered'], ' You have to buy more minutes.', ' Maybe you...
  } else {
    qspCall(s, 'sweat', 'add', 10);
    if ((!((s as any).divanmastr ?? 0))) {
      (s as any).divanmastr = 1;
      if (((s as any).pcs_inhib ?? 0) < 30) {
        qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 1));
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/kompmas.jpg');
    scene.text('You click on a link to something really dirty and get comfortable in front of your computer, rubbing your clit and fingering yourself while imagining you\'re the girl in the video.');
    qspCall(s, 'arousal', 'clit_finger', 30, 'masturbate');
    qspCall(s, 'arousal', 'vaginal_finger', (-30), 'masturbate');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      (s as any).orgasm_or = 'yes';
      (s as any).orgasm_txt = 'Your muscles suddenly tighten and you stifle your moans as you have a powerful orgasm. That was just what you needed!';
      qspCall(s, 'arousal', 'clit_finger', (-1), 'masturbate');
      qspCall(s, 'stat', '');
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.actions([
        { label: 'Masturbate some more', goto: ['komp', 'masturbate'] },
      ]);
    }
    scene.actions([
      { label: 'Stop masturbating', handler: (st: GameState) => {
    (st as any).divanmastr = 0;
  }, goto: ['komp', 'porno'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPasians(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You entertain yourself by playing a game of Solitaire.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Play for another 20 minutes', goto: ['komp', 'pasians'] },
    { label: 'Return to desktop', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enterZnak(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You enter a dating site and immediately see all sorts of profiles of both men and women.');
  if (((s as any).hostel ?? 0)?.['status'] === 8) {
    scene.actions([
      { label: 'Pick someone suitable for Eugenia', handler: (st: GameState) => {
    ((st as any).hostel = (st as any).hostel ?? {})['status'] = 9;
    scene.text('You click through dozens of profiles before choosing a guy you think would be a good match for Eugenia and sending him a message, asking if he wants to meet up somewhere.');
    scene.text('Now the waiting game begins! Let\'s hope you picked a nice guy for her…');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).home ?? 0)?.['type'] !== 'permanent_residence') {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('You spend time looking at the various profiles, but it won\'t let you register unless you have your own home.');
      scene.text('Still, some of the pictures were quite raunchy and the more desperate profiles were really funny.');
    } else {
      scene.actions([
        { label: 'Look for a kind man', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    ((st as any).npc_gentle = (st as any).npc_gentle ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).npc_rough = (st as any).npc_rough ?? {})[String((st as any).npcID ?? 0)] = 0;
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((st as any).npcdesc ?? '')} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
        { label: 'Look for a normal guy', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    ((st as any).npc_gentle = (st as any).npc_gentle ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).npc_rough = (st as any).npc_rough ?? {})[String((st as any).npcID ?? 0)] = 0;
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((st as any).npcdesc ?? '')} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
        { label: 'Look for a strong man', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    ((st as any).npc_gentle = (st as any).npc_gentle ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).npc_rough = (st as any).npc_rough ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((st as any).npcdesc ?? '')} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave this website', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterKabtv(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  // TODO-QSP: dynamic text: You check out the website of the local cable TV provider. A subscription for cab...
  scene.text(`You check out the website of the local cable TV provider. A subscription for cable TV costs ${qspFunc(s, 'money', 'string_price', 300)} per month, payable on the 25th.`);
  scene.text('');
  if (((s as any).kabel ?? 0) === 1) {
    scene.text('You currently have a cable subscription for your TV.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Cancel your cable subscription (' + String(qspFunc(s, 'money', 'string_price', 300) ?? '') + ')', handler: (st: GameState) => {
    (st as any).kabel = 0;
    qspCall(st, 'money', 'pay', 300, 'bank');
    qspGoto(st, 'komp', 'browse');
  } },
    ]);
  } else {
    if (((s as any).kabel ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
      scene.text('You currently do not have a cable subscription for your TV.');
      scene.actions([
        { label: 'Get cable services for your TV', handler: (st: GameState) => {
    qspGoto(st, 'komp', 'browse');
  } },
      ]);
    } else {
      if (((s as any).kabel ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] >= 1) {
        scene.text('You currently do not have a cable subscription for your TV.');
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Get cable services for your TV (' + String(qspFunc(s, 'money', 'string_price', 300) ?? '') + ' per month)', handler: (st: GameState) => {
    (st as any).kabel = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 10);
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp', 'browse');
  } },
        ]);
      } else {
        scene.text('You don\'t even have a TV!');
        scene.actions([
          { label: 'Leave this website', goto: ['komp', 'browse'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave this website', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterFoto(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.text('<center><b>Browser</b></center>');
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    // TODO-QSP: 'You have no internet access. '+iif(access['metered'], ' You have to buy more minutes.', ' Maybe you...
    scene.actions([
      { label: 'Close the browser', goto: ['komp', 'start'] },
    ]);
  } else {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You\'re currently on Russia\'s biggest social network site, "Assbook". Almost everyone has an account here, probably including the girl you took that photo of the other day!');
    scene.text('"Maybe if I can find her, I can blackmail her?" you think to yourself. "This photo is very raunchy, after all… I bet she would hate to see it published if she\'s important!"');
    scene.text('You can\'t help but rub your pussy every now and then while you look at it. You\'ll probably keep a copy of this for yourself, either way!');
    if (((s as any).shantfoto ?? 0) > 0) {
      scene.actions([
        { label: 'Try to find out who she is (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).elektro = ((st as any).elektro ?? 0) + (6);
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 60);
    (st as any).fotsearchrand = (Math.floor(Math.random() * 11) + 0);
    if (((st as any).fotsearchrand ?? 0) <= 7) {
      scene.text('Despite your best efforts, you don\'t manage to find the girl this time.');
      scene.actions([
        { label: 'Go back to the "Assbook" main page', goto: ['komp', 'foto'] },
      ]);
    }
    if (((st as any).fotsearchrand ?? 0) > 7) {
      (st as any).shantfoto = ((st as any).shantfoto ?? 0) - (1);
      scene.text('Despite your best efforts, you don\'t manage to… Wait, that\'s her! You found her!');
      (st as any).gerofotorand = (Math.floor(Math.random() * 101) + 0);
      if (((st as any).gerofotorand ?? 0) > 30) {
        scene.text('Your hopes are quickly shattered when you check out her profile. Cheap clothes, few friends, lives in a poor district of the city… This girl isn\'t worth blackmailing.');
        scene.actions([
          { label: 'Go back to the "Assbook" main page', goto: ['komp', 'foto'] },
        ]);
      }
      if (((st as any).gerofotorand ?? 0) >= 5  &&  ((st as any).gerofotorand ?? 0) <= 30) {
        (st as any).shantsr = ((st as any).shantsr ?? 0) + (1);
        scene.text('As you click through her profile, you find that the outfits she\'s wearing in her photos look stylish, so she definitely has money.');
        scene.text('"Why not spend some of it on me?" you laugh to yourself.');
        // TODO-QSP: dynamic text: You send a copy of the photo with a message telling her she has 48 hours to tran...
        scene.text(`You send a copy of the photo with a message telling her she has 48 hours to transfer ${qspFunc(s, 'money', 'string_profit', 5000)} into your bank account, otherwise you'll send the photo to her entire friends list.`);
        scene.actions([
          { label: 'Go back to the "Assbook" main page', goto: ['komp', 'foto'] },
        ]);
      }
      if (((st as any).gerofotorand ?? 0) < 5) {
        (st as any).shantbog = ((st as any).shantbog ?? 0) + (1);
        scene.text('You can hardly believe it when you check out her profile. This girl is a celebrity! It would be a major scandal if this photo got published!');
        // TODO-QSP: dynamic text: You send a copy of the photo with a message telling her she has 48 hours to tran...
        scene.text(`You send a copy of the photo with a message telling her she has 48 hours to transfer ${qspFunc(s, 'money', 'string_profit', 30000)} into your bank account, otherwise you'll leak the photo to the press.`);
        scene.actions([
          { label: 'Go back to the "Assbook" main page', goto: ['komp', 'foto'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRabota(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.text('<center><b>Browser</b></center>');
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    // TODO-QSP: 'You have no internet access. '+iif(access['metered'], ' You have to buy more minutes.', ' Maybe you...
    scene.actions([
      { label: 'Close the browser', goto: ['komp', 'start'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    (s as any).komprabota = (Math.floor(Math.random() * 14) + 0);
    if (((s as any).loc ?? 0) === 'vasilyhome') {
      (s as any).komprabota = (Math.floor(Math.random() * 12) + 5);
    }
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    if (((s as any).komprabota ?? 0) === 0  &&  (!((s as any).gorodokkomp ?? 0))) {
      // TODO-QSP: dynamic text: You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY...
      scene.text(`You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY</b>! Female underwear model for a photoshoot. Pay: ${qspFunc(s, 'money', 'string_profit', 2000)} cash."`);
      scene.text('The description explains that they need someone today. If you decide to take this job, then you\'ll need to go there right away.');
      if (((s as any).pcs_apprnc ?? 0) < 120) {
        scene.text('You consider it for a moment but decide against it. You\'re probably not pretty enough to be an underwear model.');
      } else {
        scene.actions([
          { label: 'Accept the job', goto: ['qjob', 'var1'] },
        ]);
      }
    } else {
      if (((s as any).komprabota ?? 0) === 1  &&  (!((s as any).gorodokkomp ?? 0))) {
        // TODO-QSP: dynamic text: You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY...
        scene.text(`You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY</b>! Female underwear model for a photoshoot. Pay: ${qspFunc(s, 'money', 'string_profit', 2000)} cash."`);
        scene.text('The description explains that they need someone today. If you decide to take this job, then you\'ll need to go there right away.');
        if (((s as any).pcs_apprnc ?? 0) < 120) {
          scene.text('You consider it for a moment, but decide against it. You\'re probably not pretty enough to be an underwear model.');
        } else {
          scene.actions([
            { label: 'Accept the job', goto: ['qjob', 'var2'] },
          ]);
        }
      } else {
        if (((s as any).komprabota ?? 0) >= 2  &&  ((s as any).komprabota ?? 0) < 5  &&  (!((s as any).gorodokkomp ?? 0))) {
          // TODO-QSP: dynamic text: You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY...
          scene.text(`You find a job vacancy on a legit-looking website. It reads: "Wanted <b>URGENTLY</b>! Good-looking female model, posing for artwork. Must be able to stand still in one pose for a long time. Pay: ${qspFunc(s, 'money', 'string_profit', 1000)} cash."`);
          scene.text('The description explains that they need someone today. If you decide to take this job, then you\'ll need to go there right away.');
          if (((s as any).pcs_apprnc ?? 0) < 60) {
            scene.text('You consider it for a moment but decide against it. You\'re probably not pretty enough to be a model.');
          } else {
            scene.actions([
              { label: 'Accept the job', goto: ['qjob', 'var3'] },
            ]);
          }
        } else {
          if (((s as any).komprabota ?? 0) >= 5  &&  ((s as any).komprabota ?? 0) < 8  &&  ((s as any).camGirl ?? 0)?.['MFC_account'] === 0) {
            scene.text('You find a job vacancy on a legit-looking website. It reads: "Webcam models wanted! Flexible working hours. Click for more info."');
            scene.actions([
              { label: 'Gather more information', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).elektro = ((st as any).elektro ?? 0) + (1);
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 5);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore1.jpg');
    scene.text('You click the button and get taken to the full job description.');
    scene.text('<i>You will be required to expose your body in front of viewers and fulfil their every wish. Payment is based on a tip system: Customers on the website buy tokens which they can use to tip girls they enjoy watching.');
    scene.text('The website will cover all costs during your shows, but how much money you make is up to you: The better you are at attracting viewers, and the more you\'re willing to do to please them, the more likely they will be to tip you.');
    scene.text('Any tokens you earn will be converted to rubles and paid into your bank account immediately after a session ends. The website also hides your stream for viewers from your region, so the chance of you being recognized by someone you know in real life is very low.');
    scene.text('If you\'re interested, please fill in the questionnaire below.</i>');
    if ((!((st as any).bankAccount ?? 0))) {
      scene.text('You need a valid bank account to be able to register for this job.');
    } else {
      if (((st as any).pcs_inhib ?? 0) >= 40  ||  ((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  (((st as any).pcs_inhib ?? 0) >= 35  &&  ((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
        scene.actions([
          { label: 'Fill in the questionnaire', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore2.jpg');
    qspCall(st, 'komp_cam_functions', 'MFC_init');
    scene.text('You fill out the questionnaire and register yourself as a webcam model. Ten minutes later, you\'re approved and can now earn money as a webcam girl.');
    scene.text('Of course, you\'ll need a functioning webcam to do this! If you don\'t have one yet, they\'re fairly cheap to buy at most local supermarket chains.');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You don\'t feel comfortable showing off your body in this way.');
      }
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).komprabota ?? 0) >= 8  &&  ((s as any).komprabota ?? 0) < 10  &&  (!((s as any).film ?? 0))) {
              scene.text('You find a job vacancy on a legit-looking website. It reads: "Nude female models wanted! Flexible hours and pay. Click for more info."');
              scene.actions([
{ label: 'Gather more information', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).elektro = ((st as any).elektro ?? 0) + (1);
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 5);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You click the button for the full job description, but it\'s brief and not entirely helpful.');
    scene.text('<i>Are you a girl who likes exposing herself on camera in erotic situations for other people\'s pleasure? If so, then come to this address and ask for Dimitri! Under 21s preferred.</i>"');
    scene.text('A quick search of the listed address tells you that it\'s located somewhere in the red light district of the city.');
    if ((!((st as any).pornstudio ?? 0))) {
      scene.text('You\'ve heard rumors that an underground porn studio is located somewhere in that area.');
    }
    if (((st as any).pornstudio ?? 0) === 1) {
      scene.text('The porn studio is located in that area. This job listing suddenly makes more sense to you.');
    }
    if (((st as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Write down the address', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if ((!((st as any).pornstudio ?? 0))) {
      (st as any).pornstudio = 1;
    }
    qspCall(st, 'stat', '');
    scene.text('You quickly take a note of the address. A job is a job, even if it is seedy.');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.text('You have a good idea what this listing is implying, and don\'t feel comfortable going along with it. You quickly close the tab.');
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    }
  } },
]);
              return;
            } else {
              if (((s as any).komprabota ?? 0) === 10  &&  ((s as any).experimentQW ?? 0)?.['discovered'] < 1) {
                qspCall(s, 'city_experimental_trials_events', 'computer_ad');
              } else {
                if (((s as any).komprabota ?? 0) === 11  &&  ((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 0) {
                  scene.img('images/shared/newspaper/hotelmaidoffer.jpg');
                  scene.text('You find a listing on a local jobs board: "<b>Maid Wanted!</b> The Pavlovsk Hotel is looking for a hardworking maid. No experience necessary. Flexible hours. Apply in person at the hotel reception."');
                  scene.text('<i>It doesn\'t look like a glamorous job, but at least it\'s honest work. You make a mental note of the hotel\'s location at the Pavlovsk market.</i>');
                  ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
                } else {
                  scene.text('Unfortunately, you don\'t find any jobs you would consider doing.');
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 7) {
      scene.actions([
        { label: 'Search for more jobs', goto: ['komp', 'rabota'] },
      ]);
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
  qspCall(s, 'exp_gain', 'intel', 1);
  qspCall(s, 'exp_gain', 'compskl', 1);
  scene.text('<center><b>The Institute for Education Measurement</b></center>');
  scene.img('images/pc/items/accessories/computer/study.jpg');
  scene.text('You spend half an hour on the IEM website, reading news articles and educational blogs. You already feel a bit smarter.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave this website', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterAgent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
  qspCall(s, 'stat', '');
  qspCall(s, 'housing', 'rent');
  qspCall(s, 'housing', 'sale');
  scene.text('<center><b>Kirsanova Real Estate Agency</b></center>');
  scene.img('images/pc/items/accessories/computer/agent.jpg');
  scene.text('You\'re currently at the website of the largest real estate agency in the area, Kirsanova Real Estate Agency.');
  scene.text('<br>The website shows they have apartments available for rent or purchase in various areas, both in and out of the city. Renting or purchasing requires you to visit the agency in the city center to fill out an application and collect the keys. Rent on all properties is deducted every month on the 25th.');
  scene.text('<b>Property listing</b>:');
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'city_apartment')) {
    if (qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment') > 0) {
      // TODO-QSP: dynamic text: You have <b><<func(''homes_properties'', ''get_rent_days'', ''city_apartment'')>...
      scene.text(`You have <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')} days</b> remaining on the rental of your St. Petersburg apartment.`);
    }
    scene.actions([
      { label: 'Pay rent on St. Petersburg', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', qspFunc(s, 'homes_properties', 'get_rent_amount', 'city_apartment'), 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'homes_properties', 'pay_rent', 'city_apartment', 'bank');
      // TODO-QSP: dynamic text: After a very simple procedure, you can now call an apartment in the city residen...
      scene.text(`After a very simple procedure, you can now call an apartment in the city residential district home for another month. You have <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')} days</b> remaining on the rental of your apartment.`);
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    }
  } },
    ]);
  } else {
    if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment') === 0) {
      scene.text('There is an apartment in St. Petersburg residential area available, for rent or purchase.');
      // TODO-QSP: dynamic text: Rent is: <<$func(''money'', ''string_price'', func(''homes_properties'', ''get_r...
      scene.text(`Rent is: ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_rent_amount', 'city_apartment'))} per month. Current sale price is listed at: ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_property_sales_price', 'city_apartment'))}.`);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'village_cottage') === 0) {
    scene.text('There is a holiday cottage with an adjacent allotment in the communal village for sale.');
    // TODO-QSP: dynamic text: Current sale price is listed at: <<$func(''money'', ''string_price'', func(''hom...
    scene.text(`Current sale price is listed at: ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_property_sales_price', 'village_cottage'))}.`);
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'old_town_apartment')) {
    if (qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment') >= 0) {
      // TODO-QSP: dynamic text: You have <b><<func(''homes_properties'', ''get_rent_days'', ''old_town_apartment...
      scene.text(`You have <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')} days</b> remaining on the rental of your Pushkin apartment.`);
    }
    scene.actions([
      { label: 'Pay rent on Pushkin', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', qspFunc(s, 'homes_properties', 'get_rent_amount', 'old_town_apartment'), 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'homes_properties', 'pay_rent', 'old_town_apartment', 'bank');
      // TODO-QSP: dynamic text: After a very simple procedure, you can now call an apartment in Pushkin home for...
      scene.text(`After a very simple procedure, you can now call an apartment in Pushkin home for another month. You have <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')} days</b> remaining on the rental of your apartment.`);
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    }
  } },
    ]);
  } else {
    if (qspFunc(s, 'homes_properties', 'has_access', 'old_town_apartment') === 0) {
      scene.text('There is an apartment in Pushkin area (Old Town) available to rent.');
      // TODO-QSP: dynamic text: Rent is: <<$func(''money'', ''string_price'', func(''homes_properties'', ''get_r...
      scene.text(`Rent is: ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_rent_amount', 'old_town_apartment'))} per month.`);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'matryona_mansion') === 0) {
    scene.text('There is a plot in the suburbs available for purchase, with planning permission for a mansion.');
    // TODO-QSP: dynamic text: Current sale price is listed at: <<$func(''money'', ''string_price'', func(''hom...
    scene.text(`Current sale price is listed at: ${qspFunc(s, 'money', 'string_price', qspFunc(s, 'homes_properties', 'get_property_sales_price', 'matryona_mansion'))}.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave this website', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterBank(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accessories/computer/online_bank.jpg');
  // TODO-QSP: dynamic text: You can buy prepaid internet access online through your bank account. 1 hour of ...
  scene.text(`You can buy prepaid internet access online through your bank account. 1 hour of internet only costs ${qspFunc(s, 'money', 'string_price', 10)}! *`);
  if (((s as any).karta ?? 0) >= ((s as any).bankDebtLimit ?? 0)) {
    // TODO-QSP: dynamic text: You have <<$func(''money'', ''format_balance'', ''bank'')>> in your account.
    scene.text(`You have ${qspFunc(s, 'money', 'format_balance', 'bank')} in your account.`);
    // TODO-QSP: 'You have an overdraft limit of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', bankDebtL...
  } else {
    // TODO-QSP: 'You are overdrawn by ' + $func('wrap', 'neg', '<<$func(''money'', ''format'', bankDebtLimit - karta...
    // TODO-QSP: 'You have a remaining credit limit of ' + $func('wrap', 'accent','<<$func(''money'', ''format'', kar...
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Buy internet time', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: intinp = input ("How many hours of internet access do you wish to purchase? (1hr = <<$func('money', 'string_price', 10)>>)")
      if (((st as any).intinp ?? 0) <= 0  ||  qspFunc(s, 'money', 'can_afford', ((st as any).intinp ?? 0) * 10, 'bank') === 0) {
        scene.text('Invalid amount.');
      } else {
        // TODO-QSP: gs 'money', 'pay', intinp * 10, 'bank'
        (st as any).internet = ((st as any).internet ?? 0) + (((st as any).intinp ?? 0));
        // TODO-QSP: dynamic text: You pay for <<intinp>> hours of prepaid internet access. You have a total of <<i...
        scene.text(`You pay for ${((st as any).intinp ?? '')} hours of prepaid internet access. You have a total of ${((st as any).internet ?? '')} hours of internet access remaining.`);
        // TODO-QSP: dynamic text: <<$func(''money'', ''string_price'', intinp * 10)>> was removed from your accoun...
        scene.text(`${qspFunc(s, 'money', 'string_price', ((st as any).intinp ?? '') * 10)} was removed from your account to pay for it.`);
      }
      scene.actions([
        { label: 'Continue', goto: ['komp', 'bank'] },
      ]);
    }
  } },
    { label: 'Close your browser', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') !== 'fin') {
    if (((s as any).loc ?? 0) === 'pav_library'  &&  (((s as any).hour ?? 0) >= 18  ||  ((s as any).hour ?? 0) < 8)  ||  ((s as any).loc ?? 0) === 'city_library'  &&  (((s as any).hour ?? 0) >= 19  ||  ((s as any).hour ?? 0) < 8)  ||  ((s as any).loc ?? 0) === 'uni_library'  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8)) {
      scene.img('images/pc/items/accessories/computer/komp.jpg');
      scene.text('The library is closing.');
      scene.actions([
{ label: 'Shut your computer down', goto: ['komp', 'fin'] },
]);
      return;
    }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'browse':
      enterBrowse(s, scene);
      break;
    case 'sale':
      enterSale(s, scene);
      break;
    case 'porno':
      enterPorno(s, scene);
      break;
    case 'masturbate':
      enterMasturbate(s, scene);
      break;
    case 'pasians':
      enterPasians(s, scene);
      break;
    case 'znak':
      enterZnak(s, scene);
      break;
    case 'kabtv':
      enterKabtv(s, scene);
      break;
    case 'foto':
      enterFoto(s, scene);
      break;
    case 'rabota':
      enterRabota(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'agent':
      enterAgent(s, scene);
      break;
    case 'bank':
      enterBank(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp: LocationDef = {
  name: 'komp',
  title: '!',
  region: 'other',
  enter: enter,
};
