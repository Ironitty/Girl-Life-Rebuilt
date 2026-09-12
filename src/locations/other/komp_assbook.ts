import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Assbook</b></center>');
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    // TODO-QSP: 'You have no internet access, ' + iif(access['metered'], ' you have to buy more minutes.', ' maybe y...
    scene.actions([
      { label: '<b>Close the browser</b>', goto: ['komp', 'start'] },
    ]);
  } else {
    scene.img('images/system/image_needed.png');
    scene.text('You\'re currently on Russia\'s biggest social network site, "Assbook". Almost everyone has an account here');
    if (((s as any).assbook ?? 0)?.['account_name'] === '') {
      scene.text('Click here to log in or <a href="exec:gt \'komp_assbook\', \'signup\' ">sign up</a>');
    } else {
      scene.text('Click here to <a href="exec:gt \'komp_assbook\', \'login\' ">log in</a> or signup');
      scene.actions([
        { label: 'Go to your page', goto: ['komp_assbook', 'login'] },
      ]);
    }
    if (((s as any).shantfoto ?? 0) > 0) {
      scene.actions([
        { label: 'Find the girl you took photos of in the park', goto: ['komp_assbook', 'blackmail'] },
      ]);
    }
    scene.actions([
      { label: 'Browse assbook (0:20)', goto: ['komp_assbook', 'browse'] },
      { label: 'Look through your friends\' feeds', goto: ['komp_assbook', 'friends'] },
      { label: 'Read more about Assbook', goto: ['komp_assbook', 'mission_statements'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close Assbook', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterSignup(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Assbook</b></center>');
  scene.img('images/system/image_needed.png');
  scene.text('You consider which name you\'d like to register under.');
  ((s as any).assbook ?? {})['account_name'] = 0;
  if (((s as any).assbook ?? 0)?.['account_name'] === '') {
    ((s as any).assbook ?? {})['account_name'] = '' + qspUntranslated(s, "pcs_nickname>", { location: "komp_assbook" }) + '';
  }
  scene.text('You fill in your personal details and within a few moments you\'ve created an account. You can even upload photos to your own page.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterBrowse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).elektro = ((s as any).elektro ?? 0) + (2);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 20);
  qspCall(s, 'stat', '');
  scene.text('You spend some time browsing social media');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep browsing assbook (0:20)', goto: ['komp_assbook', 'browse'] },
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterFriends(s: GameState, scene: SceneBuilder): void {
  scene.text('You don\'t know the account names of your friends :(');
  scene.text('This content is WIP.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterLogin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/image_needed.png');
  scene.text('This content is WIP.');
  scene.text('<a href="exec: gt \'komp_assbook\', \'upload_photo\'">Upload a new photo</a>');
  scene.text('Uploaded photos:');
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  (s as any).temp_locationCnt = 0;
  // TODO-QSP: :LocationLoop
  qspCall(s, 'komp_assbook', 'showlocation', ((s as any).temp_locationCnt ?? 0));
  (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
  if (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length) {
    // TODO-QSP: jump 'LocationLoop'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterShowlocation(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'komp_assbook', 'listretrieve', ARGS[1], $selfieLoc[ARGS[1]]
  // TODO-QSP: end
  scene.build();
}

function enterListretrieve(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_table += $func('komp_assbook', 'retrieve_clothed_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $temp_table += $func('komp_assbook', 'retrieve_swim_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $temp_table += '</table></center>'
  // TODO-QSP: end
  scene.build();
}

function enterRetrieveClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieClotot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_clocnt = 1;
    // TODO-QSP: :retr_clothed_loop
    // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_clothed[<<temp_clocnt>>]'
    if (((s as any).assbook_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'clothed', ARGS...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_clocnt = ((s as any).temp_clocnt ?? 0) + (1);
    if (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieClotot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'retr_clothed_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRetrieveSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimtot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_swicnt = 1;
    // TODO-QSP: :retr_swim_loop
    // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_bikini[<<temp_clocnt>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'bikini', ARGS[...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_swicnt = ((s as any).temp_swicnt ?? 0) + (1);
    if (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimtot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'retr_swim_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUploadPhoto(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_suppress_other_selfies = 1;
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  (s as any).temp_locationCnt = 0;
  // TODO-QSP: :LocationLoop_upload
  qspCall(s, 'komp_assbook', 'showlocation2', ((s as any).temp_locationCnt ?? 0));
  (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
  if (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length) {
    // TODO-QSP: jump 'LocationLoop_upload'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to your page', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 1);
  }, goto: ['komp_assbook', 'login'] },
  ]);
  scene.build();
}

function enterUploadPhoto2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'assbook_<<$ARGS[2]>>_<<$ARGS[3]>>[<<ARGS[5]>>] = 1'
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  scene.actions([{ label: 'Continue', goto: ['komp_assbook', 'login'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterShowlocation2(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${qspUntranslated(s, "selfieLocDesc[ARGS[1]]", { location: "komp_assbook" })} selfies</b></center>`);
  // TODO-QSP: gs 'komp_assbook', 'listretrieve2', ARGS[1], $selfieLoc[ARGS[1]]
  // TODO-QSP: end
  scene.build();
}

function enterListretrieve2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_table += $func('komp_assbook', 'upload_clothed_selfies',  ARGS[1], $ARGS[2])
  // TODO-QSP: $temp_table += $func('komp_assbook', 'upload_swim_selfies',    ARGS[1], $ARGS[2])
  // TODO-QSP: $temp_table += '</table></center>'
  // TODO-QSP: end
  scene.build();
}

function enterUploadClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieClotot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_clocnt = 1;
    // TODO-QSP: :upl_clothed_loop
    // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_clothed[<<temp_clocnt>>]'
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_closelfie[<<temp_clocnt>>]'
    if (((s as any).assbook_locval ?? 0) === 0  &&  ((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'clothed', ARGS...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_clocnt = ((s as any).temp_clocnt ?? 0) + (1);
    if (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieClotot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'upl_clothed_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUploadSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimtot ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $result += '<tr></tr><tr>'
    (s as any).temp_cnum = 0;
    (s as any).temp_swicnt = 1;
    // TODO-QSP: :upl_swim_loop
    // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_bikini[<<temp_clocnt>>]'
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_swim[<<temp_clocnt>>]'
    if (((s as any).assbook_locval ?? 0) === 0  &&  ((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).temp_cnum ?? 0) === 5) {
        // TODO-QSP: $result += '</tr><tr>'
        (s as any).temp_cnum = 0;
      }
      // TODO-QSP: $result += '<td width="20%">' + $func('phone_selfies_popup', 'set_selfie', $ARGS[2], 'bikini', ARGS[...
      (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
    }
    (s as any).temp_swicnt = ((s as any).temp_swicnt ?? 0) + (1);
    if (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimtot ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      // TODO-QSP: jump 'upl_swim_loop'
    }
    if (((s as any).temp_cnum ?? 0) !== 4) {
      // TODO-QSP: $result += '<td></td>'
    }
    // TODO-QSP: $result += '</tr><tr></tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMissionStatements(s: GameState, scene: SceneBuilder): void {
  scene.text('Introducing Assbook: Where Connections Speak Louder than Words!');
  scene.text('Dive into the vibrant and dynamic world of Assbook, your passport to a digital realm filled with the rich tapestry of Russian culture, diverse communities, and unparalleled social interactions. Here\'s why Assbook is the social media platform you\'ve been waiting for:');
  scene.text('<b>Cultural Richness:</b>');
  scene.text('Assbook isn\'t just a social media site; it\'s a celebration of Russian culture. Immerse yourself in a community that cherishes the arts, history, and the unique traditions that make Russia a tapestry of diversity. From captivating stories to stunning visuals, Assbook is your window into the soul of this extraordinary nation.');
  scene.text('<b>Connect with a Purpose:</b>');
  scene.text('Unlike other social media platforms, Assbook is designed to foster meaningful connections. Engage in discussions that matter, share experiences, and find like-minded individuals who appreciate the depth of human interaction. From intellectual debates to heartfelt conversations, Assbook encourages connections that go beyond the surface.');
  scene.text('<b>Visual Storytelling:</b>');
  scene.text('Capture and share your life\'s moments through Assbook\'s visually immersive experience. Whether it\'s breathtaking landscapes, artistic expressions, or snapshots of everyday life, let your images tell the story. With an emphasis on visual storytelling, Assbook transforms your feed into a canvas of emotions, sparking connections through the power of imagery.');
  scene.text('<b>Privacy and Security:</b>');
  scene.text('Your online safety is our top priority. Assbook employs state-of-the-art security measures to ensure that your personal information remains private. Enjoy a worry-free social experience, knowing that your data is in safe hands.');
  scene.text('<b>Community-driven Features:</b>');
  scene.text('Assbook is constantly evolving based on user feedback. Have a suggestion or a feature you\'d love to see? Our community-driven approach means that your voice matters. Shape the platform to suit your needs and make Assbook your own.');
  scene.text('<b>Exclusive Events and Groups:</b>');
  scene.text('Discover and participate in exclusive events and groups tailored to your interests. From cultural meet-ups to niche communities, Assbook provides a platform for you to connect with people who share your passions.');
  scene.text('<b>Assbook for Business:</b>');
  scene.text('Entrepreneurs and businesses, take note! Assbook offers a unique platform for networking, brand promotion, and reaching your target audience. Leverage the power of the Assbook community to elevate your brand and connect with potential customers.');
  scene.text('Join the Assbook revolution today and experience social media in a way that transcends the ordinary. Embrace the beauty of Russian culture, forge lasting connections, and make Assbook your digital home!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterBlackmail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You\'re currently on Russia\'s biggest social network site, "Assbook". Almost everyone has an account here, probably including the girl you took that photo of the other day!');
  scene.text('"Maybe if I can find her, I can blackmail her", you think to yourself. "This photo is very raunchy, after all… I bet she would hate to see it published if she\'s important!"');
  scene.text('You can\'t help but rub your pussy every now and then while you look at it. You\'ll probably keep a copy of this for yourself, either way!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to find out who she is (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).elektro = ((s as any).elektro ?? 0) + (6);
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 60);
    (s as any).temp_rand = Math.floor(Math.random() * 10) + 0;
    if (((s as any).temp_rand ?? 0) < 7) {
      scene.text('Despite your best efforts, you don\'t manage to find the girl this time.');
      scene.actions([
        { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
      ]);
    } else {
      (s as any).shantfoto = ((s as any).shantfoto ?? 0) - (1);
      scene.text('Despite your best efforts, you don\'t manage to… wait, that\'s her! You found her!');
      (s as any).temp_randB = Math.floor(Math.random() * 100) + 0;
      if (((s as any).temp_randB ?? 0) < 70) {
        scene.text('Your dreams of making a fortune are quickly shattered when you check out her profile. Cheap clothes, few friends, lives in a poor district of the city… this girl is not worth blackmailing.');
        scene.actions([
          { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
        ]);
      } else {
        if (((s as any).temp_randB ?? 0) < 95) {
          (s as any).shantsr = ((s as any).shantsr ?? 0) + (1);
          scene.text('When you click through her profile, you estimate she\'s an unknown middle-class girl. Still, she has a lot of friends and the outfits she\'s wearing in her photos look stylish… she has money to spend.');
          scene.text('"Why not make her spend some of it on me?" you laugh to yourself, and begin to write a private message.');
          // TODO-QSP: dynamic text: You send her a copy of the photo with the private message and tell her to transf...
          scene.text(`You send her a copy of the photo with the private message and tell her to transfer a very modest amount of ${qspFunc(s, 'money', 'string_profit', 5000)} to your bank account. If she doesn't want that photo to be sent to her entire friends list (which you secured before sending the message), the money needs to be on your bank account within 48 hours.`);
          scene.actions([
            { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
          ]);
        } else {
          (s as any).shantbog = ((s as any).shantbog ?? 0) + (1);
          scene.text('You can barely believe it when you read her profile, this girl is a celebrity! It would be a major scandal if this photo got published!');
          // TODO-QSP: dynamic text: You send her a copy of the photo with a private message, telling her to transfer...
          scene.text(`You send her a copy of the photo with a private message, telling her to transfer ${qspFunc(s, 'money', 'string_profit', 30000)} to your bank account. If she doesn't want that photo to be sent to the press, the money needs to be on your bank account within 48 hours.`);
          scene.actions([
            { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
          ]);
        }
      }
    }
  } },
    { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'main':
      enterMain(s, scene);
      break;
    case 'signup':
      enterSignup(s, scene);
      break;
    case 'browse':
      enterBrowse(s, scene);
      break;
    case 'friends':
      enterFriends(s, scene);
      break;
    case 'login':
      enterLogin(s, scene);
      break;
    case 'showlocation':
      enterShowlocation(s, scene);
      break;
    case 'listretrieve':
      enterListretrieve(s, scene);
      break;
    case 'retrieve_clothed_selfies':
      enterRetrieveClothedSelfies(s, scene);
      break;
    case 'retrieve_swim_selfies':
      enterRetrieveSwimSelfies(s, scene);
      break;
    case 'upload_photo':
      enterUploadPhoto(s, scene);
      break;
    case 'upload_photo2':
      enterUploadPhoto2(s, scene);
      break;
    case 'showlocation2':
      enterShowlocation2(s, scene);
      break;
    case 'listretrieve2':
      enterListretrieve2(s, scene);
      break;
    case 'upload_clothed_selfies':
      enterUploadClothedSelfies(s, scene);
      break;
    case 'upload_swim_selfies':
      enterUploadSwimSelfies(s, scene);
      break;
    case 'mission_statements':
      enterMissionStatements(s, scene);
      break;
    case 'blackmail':
      enterBlackmail(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_assbook: LocationDef = {
  name: 'komp_assbook',
  title: 'This content is WIP.',
  region: 'other',
  enter: enter,
};
