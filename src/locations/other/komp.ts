import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    // TODO-QSP: act 'Play Dead City': gt 'KGZstart'
  }
  (s as any).elektro = ((s as any).elektro ?? 0) + (5);
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] > 0) {
    if (((s as any).access ?? 0)?.['metered'] === 0) {
      scene.actions([
        { label: 'Browse the internet', goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.actions([
        { label: 'Browse the internet - You have <<subscription[$subs]>> minutes of access left', goto: ['komp', 'browse'] },
      ]);
    }
  } else {
    scene.text('You don\'t have internet access here, and you don\'t even have mobile internet.');
  }
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
      // TODO-QSP: dynamic text: <center><h4 style="color: red;"><b><<$access['general']>></b></h4></center>
      scene.text(`<center><h4 style="color: red;"><b>${((s as any).access ?? 0)?.['general']}</b></h4></center>`);
    }
    scene.text('You head to your favourite start page while you decide what you want to do.');
    scene.text('A blinking banner for a <a href="exec: gt \'komp\',\'agent\'">Kirsanova Real Estate Agency</a> keeps popping up in the corner.');
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'city_apartment')  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      // TODO-QSP: act 'Rent your apartment out': gt 'komp', 'sale'
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
      // TODO-QSP: act 'Find the girl you took photos of in the park': gt 'komp_assbook', 'blackmail'
    }
    if (((s as any).fuckornot ?? 0) === 3) {
      // TODO-QSP: act 'Visit ''Fuckable or not'' site': $view_location = 'komp'
      scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'fuckornot'] }]);
    }
    if (((s as any).hotornot ?? 0) >= 2) {
      // TODO-QSP: act 'Visit ''Hot or not'' site': $view_location = 'komp'
      scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'hotornot'] }]);
    }
    if (((s as any).fuckornot_uni ?? 0) === 1) {
      // TODO-QSP: act 'Visit ''Fuckable or not'' University site': $view_location = 'komp'
      scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'fuckornot_uni'] }]);
    }
    if (((s as any).hotornot_uni ?? 0) === 1) {
      // TODO-QSP: act 'Visit ''Hot or not'' University site': $view_location = 'komp'
      scene.actions([{ label: 'Continue', goto: ['komp_HF_or_not', 'hotornot_uni'] }]);
    }
    if (((s as any).hostel ?? 0)?.['status'] === 7) {
      // TODO-QSP: act 'Read letter from Eugene': gt 'pav_voc_school', 'dating_profile'
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
      // TODO-QSP: act 'Spend time studying': gt 'komp', 'study'
    }
    if (((s as any).sucpcinfo ?? 0) === 0  &&  ((s as any).succubxp ?? 0) > 0) {
      // TODO-QSP: act 'Research the strange feelings you''ve been having': gt 'succubus', 'kompresearch'
    }
    scene.actions([
      { label: 'Browse a dating website (1:00)', goto: ['komp', 'znak'] },
      { label: 'Search for cable TV services (1:00)', goto: ['komp', 'kabtv'] },
      { label: 'Play an online game', goto: ['KGstart', ''] },
      { label: 'Check social media on Assbook', goto: ['komp_assbook', 'main'] },
    ]);
  }
  scene.actions([
    { label: 'Close the browser', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enterSale(s: GameState, scene: SceneBuilder): void {
  if (((s as any).access ?? 0)?.['metered']  &&  ((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 15) {
    // TODO-QSP: dynamic text: You check the website, but realize that <<subscription[$subs]>> minutes won't be...
    scene.text(`You check the website, but realize that ${((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)]} minutes won't be enough to fill out all the forms.`);
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
      scene.actions([
        { label: 'Check if you got any replies', handler: (st: GameState) => {
    if (((s as any).obkvsdam ?? 0) === 1) {
      scene.text('Nobody has responded to your offer to rent out your apartment yet.');
    } else {
      (s as any).predsum = 14000 + (((s as any).obkvsdam ?? 0)*1000);
      // TODO-QSP: dynamic text: Someone wants to stay in your apartment for a month! They're offering you <<func...
      scene.text(`Someone wants to stay in your apartment for a month! They're offering you ${qspFunc(s, 'money', 'string_profit', ((s as any).predsum ?? 0))} in cash.`);
      scene.actions([
        { label: 'Accept the offer', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'tenants_move_in', 'city_apartment', ((((s as any).month ?? 0) + 1 > 12) ? (1) : (((s as any).month ?? 0) + 1)), 0);
    qspCall(s, 'money', 'earn', ((s as any).predsum ?? 0), 'cash');
  }, goto: ['komp', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
      ]);
    }
  }
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
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    // TODO-QSP: *p $access['noporn']
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You go to a porn site and browse through videos for a few minutes.');
    if (((s as any).porn_studio ?? 0)?.['pickup_porn'] === 1  &&  ((s as any).porn_studio ?? 0)?.['pickup_porn_seen'] === 0  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
      (s as any).porn_studio['pickup_porn_seen'] = 1;
      scene.actions([{ label: 'Continue', goto: ['pickup_porn', 'discover_video'] }]);
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
          { label: 'Look up Albina\'s porno [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Look up Albina\'s porno', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['albina_events', 'casting_video'] },
        ]);
      }
    }
    if (((s as any).fame ?? 0)?.['city_porn'] >= 100) {
      scene.actions([
        { label: 'Watch one of your own videos', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video you like the look of and click on it before getting comfortable. When the video loads up, you\'re surprised to find that the girl starring in it… is <i>you</i>!');
    scene.actions([
      { label: 'Watch it', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'stat', '');
    scene.text('Watching yourself performing on camera is an oddly erotic experience.');
    if (((s as any).fame ?? 0)?.['city_porn'] < 300) {
      scene.text('Most of the people commenting don\'t appear to really know who you are. You wonder if anyone you know has seen your videos?');
    } else {
      scene.text('The viewers have no trouble recognizing you and a lot of the comments refer to you by your stage name. You wonder if anyone you know has seen your videos?');
    }
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'arousal', 'erotic', (-30));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Turn it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
      // TODO-QSP: act 'Masturbate': gt 'komp', 'masturbate'
    }
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
      { label: 'Watch vanilla porn', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked and spend some time watching it while imagining yourself being in her place.');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Watch anal porn', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked in the ass and spend some time watching it while imagining yourself being in her place.');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Watch lesbian porn', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of two girls licking each other\'s pussies and imagine yourself as one of them.');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Watch BBC porn', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    scene.text('You find a video of a girl getting fucked by a BBC and spend some time watching it. You can\'t keep your eyes off the massive cock on your screen as you imagine yourself being in the girl\'s place.');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Watch BDSM porn', handler: (st: GameState) => {
    (s as any).elektro = ((s as any).elektro ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/pc/items/accessories/computer/porno.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('You find a video of a girl who is tied up naked and gagged being spanked, whipped and otherwise left at the mercy of her very dominant Master, a man with huge muscular arms.');
      scene.text('You spend some time watching it while imagining what it would be like to be both master and slave.');
    } else {
      scene.text('You find a video of a young woman who is tied up naked and gagged being spanked, whipped and otherwise left at the mercy of her dominating Mistress, an older woman dressed in leather.');
      scene.text('You spend some time watching it while imagining what it would be like to be in the places of both women.');
    }
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 30);
    qspCall(s, 'arousal', 'porn', 30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The video ends', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  }
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
        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 3) + 1);
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/kompmas.jpg');
    scene.text('You click on a link to something really dirty and get comfortable in front of your computer, rubbing your clit and fingering yourself while imagining you\'re the girl in the video.');
    qspCall(s, 'arousal', 'clit_finger', 30, 'masturbate');
    qspCall(s, 'arousal', 'vaginal_finger', (-30), 'masturbate');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'arousal', 'clit_finger', (-1), 'masturbate');
      qspCall(s, 'stat', '');
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      // TODO-QSP: act 'Masturbate some more': gt 'komp', 'masturbate'
    }
    scene.actions([
      { label: 'Stop masturbating', handler: (st: GameState) => {
    (st as any).divanmastr = 0;
  }, goto: ['komp', 'porno'] },
    ]);
  }
  scene.build();
}

function enterPasians(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).elektro = ((s as any).elektro ?? 0) + (3);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You entertain yourself by playing a game of Solitaire.');
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
    (s as any).hostel['status'] = 9;
    scene.text('You click through dozens of profiles before choosing a guy you think would be a good match for Eugenia and sending him a message, asking if he wants to meet up somewhere.');
    scene.text('Now the waiting game begins! Let\'s hope you picked a nice guy for her…');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('You spend time looking at the various profiles, but it won\'t let you register unless you have your own home.');
    scene.text('Still, some of the pictures were quite raunchy and the more desperate profiles were really funny.');
    scene.actions([
      { label: 'Look for a kind man', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).npc_gentle[String((s as any).npcID ?? 0)] = 1;
    (s as any).npc_rough[String((s as any).npcID ?? 0)] = 0;
    qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((s as any).npcdesc ?? 0)} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
      { label: 'Look for a normal guy', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).npc_gentle[String((s as any).npcID ?? 0)] = 0;
    (s as any).npc_rough[String((s as any).npcID ?? 0)] = 0;
    qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((s as any).npcdesc ?? 0)} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
      { label: 'Look for a strong man', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).npc_gentle[String((s as any).npcID ?? 0)] = 0;
    (s as any).npc_rough[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    // TODO-QSP: dynamic text: You find a guy named <<$npcdesc>> and send him your number after checking out hi...
    scene.text(`You find a guy named ${((s as any).npcdesc ?? 0)} and send him your number after checking out his profile. You hope he'll call you!`);
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } },
    ]);
  }
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
      { label: 'Cancel your cable subscription (<<$func(\'money\', \'string_price\', 300)>>)', handler: (st: GameState) => {
    (s as any).kabel = 0;
    qspCall(s, 'money', 'pay', 300, 'bank');
  }, goto: ['komp', 'browse'] },
    ]);
  } else {
    scene.text('You currently do not have a cable subscription for your TV.');
    if (((s as any).kabel ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] >= 1) {
      scene.text('You currently do not have a cable subscription for your TV.');
      scene.actions([
        { label: 'Get cable services for your TV (<<$func(\'money\', \'string_price\', 300)>> per month)', handler: (st: GameState) => {
    (s as any).kabel = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 10);
    qspCall(s, 'stat', '');
  }, goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.text('You don\'t even have a TV!');
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    }
    scene.actions([
      { label: 'Get cable services for your TV', goto: ['komp', 'browse'] },
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const komp: LocationDef = {
  name: 'komp',
  title: '<<$func(\'money\', \'format\', bankDebtLimit)>>!',
  region: 'other',
  description: ['Your computer boots up and you\'re soon looking at your operating system\'s main screen.'],
  enter: enter,
};
