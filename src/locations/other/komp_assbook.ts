import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).subs = (((s as any).access ?? 0)?.['subscription']);
  scene.text('<center><b>Assbook</b></center>');
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    scene.text('You have no internet access, ' + ((((s as any).access ?? 0)?.['metered']) ? (' you have to buy more minutes.') : (' maybe you forgot to pay the internet bill?')));
    scene.actions([
      { label: '<b>Close the browser</b>', goto: ['komp', 'start'] },
    ]);
  } else {
    scene.img('images/system/image_needed.png');
    scene.text('You\'re currently on Russia\'s biggest social network site, "Assbook". Almost everyone has an account here');
    if (((s as any).assbook ?? 0)?.['account_name'] === '') {
      scene.text('Click here to log in or <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp_assbook\u0027, \u0027signup\u0027); return false;">sign up</a>');
    } else {
      scene.text('Click here to <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp_assbook\u0027, \u0027login\u0027); return false;">log in</a> or signup');
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
  scene.actions([
    { label: 'Close Assbook', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).subs = (((s as any).access ?? 0)?.['subscription']);
  scene.text('<center><b>Assbook</b></center>');
  if (((s as any).subscription ?? 0)?.[String((s as any).subs ?? 0)] < 1) {
    scene.img('images/pc/items/accessories/computer/eror.jpg');
    scene.text('You have no internet access, ' + ((((s as any).access ?? 0)?.['metered']) ? (' you have to buy more minutes.') : (' maybe you forgot to pay the internet bill?')));
    scene.actions([
      { label: '<b>Close the browser</b>', goto: ['komp', 'start'] },
    ]);
  } else {
    scene.img('images/system/image_needed.png');
    scene.text('You\'re currently on Russia\'s biggest social network site, "Assbook". Almost everyone has an account here');
    if (((s as any).assbook ?? 0)?.['account_name'] === '') {
      scene.text('Click here to log in or <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp_assbook\u0027, \u0027signup\u0027); return false;">sign up</a>');
    } else {
      scene.text('Click here to <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp_assbook\u0027, \u0027login\u0027); return false;">log in</a> or signup');
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
  scene.actions([
    { label: 'Close Assbook', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterSignup(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Assbook</b></center>');
  scene.img('images/system/image_needed.png');
  scene.text('You consider which name you\'d like to register under.');
  ((s as any).assbook = (s as any).assbook ?? {})['account_name'] = window.prompt("Which name would you like to use? (Leave blank for " + (((s as any).pcs_nickname ?? 0)) + ")") ?? '';
  if (((s as any).assbook ?? 0)?.['account_name'] === '') {
    ((s as any).assbook = (s as any).assbook ?? {})['account_name'] = '' + ((s as any).pcs_nickname ?? 0) + '';
  }
  scene.text('You fill in your personal details and within a few moments you\'ve created an account. You can even upload photos to your own page.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
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
  scene.actions([
    { label: 'Keep browsing assbook (0:20)', goto: ['komp_assbook', 'browse'] },
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterFriends(s: GameState, scene: SceneBuilder): void {
  scene.text('You don\'t know the account names of your friends :(');
  scene.text('This content is WIP.');
  scene.actions([
    { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
  ]);
  scene.build();
}

function enterLogin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/image_needed.png');
  scene.text('This content is WIP.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027komp_assbook\u0027, \u0027upload_photo\u0027); return false;">Upload a new photo</a>');
  scene.text('Uploaded photos:');
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  (s as any).temp_locationCnt = 0;
  do {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_locationCnt ?? 0)]; enterShowlocation(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
    scene.actions([
      { label: 'Go back to the main page', goto: ['komp_assbook', 'main'] },
    ]);
  } while (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length);
  scene.build();
}

function enterShowlocation(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "selfieLoc[ARGS[1]]", { location: "komp_assbook" })]; enterListretrieve(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterListretrieve(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<center><table width=80%>';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'komp_assbook', 'retrieve_clothed_selfies', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'komp_assbook', 'retrieve_swim_selfies', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table></center>');
  (s as any).temp_table = undefined;
  scene.build();
}

function enterRetrieveClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<tr></tr><tr>');
    (s as any).temp_cnum = 0;
    (s as any).temp_clocnt = 1;
    do {
      // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_clothed[<<temp_clocnt>>]'
      if (((s as any).assbook_locval ?? 0) === 1) {
        if (((s as any).temp_cnum ?? 0) === 5) {
          (s as any).result = ((s as any).result ?? '') + '</tr><tr>';
          (s as any).temp_cnum = 0;
        }
        (s as any).result = ((s as any).result ?? 0) + ('<td width="20%">' + qspFunc(s, 'phone_selfies_popup', 'set_selfie', ((s as any).locArgs?.[2] ?? 0), 'clothed', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_clocnt ?? 0)) + '</td>');
        (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
      }
      (s as any).temp_clocnt = ((s as any).temp_clocnt ?? 0) + (1);
      if (((s as any).temp_cnum ?? 0) !== 4) {
        (s as any).result = ((s as any).result ?? '') + '<td></td>';
      }
      (s as any).result = ((s as any).result ?? 0) + ('</tr><tr></tr>');
    } while (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')]);
  }
  return;
  scene.build();
}

function enterRetrieveSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<tr></tr><tr>');
    (s as any).temp_cnum = 0;
    (s as any).temp_swicnt = 1;
    do {
      // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_bikini[<<temp_clocnt>>]'
      if (((s as any).phone_locval ?? 0) === 1) {
        if (((s as any).temp_cnum ?? 0) === 5) {
          (s as any).result = ((s as any).result ?? '') + '</tr><tr>';
          (s as any).temp_cnum = 0;
        }
        (s as any).result = ((s as any).result ?? 0) + ('<td width="20%">' + qspFunc(s, 'phone_selfies_popup', 'set_selfie', ((s as any).locArgs?.[2] ?? 0), 'bikini', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_clocnt ?? 0)) + '</td>');
        (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
      }
      (s as any).temp_swicnt = ((s as any).temp_swicnt ?? 0) + (1);
      if (((s as any).temp_cnum ?? 0) !== 4) {
        (s as any).result = ((s as any).result ?? '') + '<td></td>';
      }
      (s as any).result = ((s as any).result ?? 0) + ('</tr><tr></tr>');
    } while (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]);
  }
  return;
  scene.build();
}

function enterUploadPhoto(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_suppress_other_selfies = 1;
  (s as any).temp_ssh_ret_loc = 'komp_assbook';
  (s as any).temp_ssh_ret_arg = 'upload_photo2';
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  (s as any).temp_locationCnt = 0;
  do {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_locationCnt ?? 0)]; enterShowlocation2(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_locationCnt = ((s as any).temp_locationCnt ?? 0) + (1);
    scene.actions([
      { label: 'Go back to your page', handler: (st: GameState) => {
    (st as any).temp_suppress_other_selfies = undefined;
    (st as any).temp_ssh_ret_loc = undefined;
    (st as any).temp_ssh_ret_arg = undefined;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 1);
    qspGoto(st, 'komp_assbook', 'login');
  } },
    ]);
  } while (((s as any).temp_locationCnt ?? 0) < Object.keys((s as any).selfieLoc ?? {}).length);
  scene.build();
}

function enterUploadPhoto2(s: GameState, scene: SceneBuilder): void {
  scene.text('assbook_' + ((s as any).locArgs?.[2] ?? 0) + '_' + ((s as any).locArgs?.[3] ?? 0) + '[' + ((s as any).locArgs?.[5] ?? 0) + '] = 1');
  (s as any).temp_suppress_other_selfies = undefined;
  (s as any).temp_ssh_ret_loc = undefined;
  (s as any).temp_ssh_ret_arg = undefined;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  qspGoto(s, 'komp_assbook', 'login');
  scene.build();
}

function enterShowlocation2(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${qspUntranslated(s, "selfieLocDesc[ARGS[1]]", { location: "komp_assbook" })} selfies</b></center>`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "selfieLoc[ARGS[1]]", { location: "komp_assbook" })]; enterListretrieve2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterListretrieve2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_table = '<center><table width=80%>';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'komp_assbook', 'upload_clothed_selfies', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, 'komp_assbook', 'upload_swim_selfies', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table></center>');
  (s as any).temp_table = undefined;
  scene.build();
}

function enterUploadClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<tr></tr><tr>');
    (s as any).temp_cnum = 0;
    (s as any).temp_clocnt = 1;
    do {
      // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_clothed[<<temp_clocnt>>]'
      // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_closelfie[<<temp_clocnt>>]'
      if (((s as any).assbook_locval ?? 0) === 0  &&  ((s as any).phone_locval ?? 0) === 1) {
        if (((s as any).temp_cnum ?? 0) === 5) {
          (s as any).result = ((s as any).result ?? '') + '</tr><tr>';
          (s as any).temp_cnum = 0;
        }
        (s as any).result = ((s as any).result ?? 0) + ('<td width="20%">' + qspFunc(s, 'phone_selfies_popup', 'set_selfie', ((s as any).locArgs?.[2] ?? 0), 'clothed', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_clocnt ?? 0)) + '</td>');
        (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
      }
      (s as any).temp_clocnt = ((s as any).temp_clocnt ?? 0) + (1);
      if (((s as any).temp_cnum ?? 0) !== 4) {
        (s as any).result = ((s as any).result ?? '') + '<td></td>';
      }
      (s as any).result = ((s as any).result ?? 0) + ('</tr><tr></tr>');
    } while (((s as any).temp_clocnt ?? 0) <= ((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')]);
  }
  return;
  scene.build();
}

function enterUploadSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<tr></tr><tr>');
    (s as any).temp_cnum = 0;
    (s as any).temp_swicnt = 1;
    do {
      // TODO-QSP: dynamic 'assbook_locval = assbook_<<$ARGS[2]>>_bikini[<<temp_clocnt>>]'
      // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_swim[<<temp_clocnt>>]'
      if (((s as any).assbook_locval ?? 0) === 0  &&  ((s as any).phone_locval ?? 0) === 1) {
        if (((s as any).temp_cnum ?? 0) === 5) {
          (s as any).result = ((s as any).result ?? '') + '</tr><tr>';
          (s as any).temp_cnum = 0;
        }
        (s as any).result = ((s as any).result ?? 0) + ('<td width="20%">' + qspFunc(s, 'phone_selfies_popup', 'set_selfie', ((s as any).locArgs?.[2] ?? 0), 'bikini', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_clocnt ?? 0)) + '</td>');
        (s as any).temp_cnum = ((s as any).temp_cnum ?? 0) + (1);
      }
      (s as any).temp_swicnt = ((s as any).temp_swicnt ?? 0) + (1);
      if (((s as any).temp_cnum ?? 0) !== 4) {
        (s as any).result = ((s as any).result ?? '') + '<td></td>';
      }
      (s as any).result = ((s as any).result ?? 0) + ('</tr><tr></tr>');
    } while (((s as any).temp_swicnt ?? 0) <= ((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]);
  }
  return;
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
  scene.actions([
    { label: 'Try to find out who she is (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).elektro = ((st as any).elektro ?? 0) + (6);
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 60);
    (st as any).temp_rand = (Math.floor(Math.random() * 10) + 0);
    if (((st as any).temp_rand ?? 0) < 7) {
      scene.text('Despite your best efforts, you don\'t manage to find the girl this time.');
      scene.actions([
        { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
      ]);
    } else {
      (st as any).shantfoto = ((st as any).shantfoto ?? 0) - (1);
      scene.text('Despite your best efforts, you don\'t manage to… wait, that\'s her! You found her!');
      (st as any).temp_randB = (Math.floor(Math.random() * 100) + 0);
      if (((st as any).temp_randB ?? 0) < 70) {
        scene.text('Your dreams of making a fortune are quickly shattered when you check out her profile. Cheap clothes, few friends, lives in a poor district of the city… this girl is not worth blackmailing.');
        scene.actions([
          { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
        ]);
      } else {
        if (((st as any).temp_randB ?? 0) < 95) {
          (st as any).shantsr = ((st as any).shantsr ?? 0) + (1);
          scene.text('When you click through her profile, you estimate she\'s an unknown middle-class girl. Still, she has a lot of friends and the outfits she\'s wearing in her photos look stylish… she has money to spend.');
          scene.text('"Why not make her spend some of it on me?" you laugh to yourself, and begin to write a private message.');
          scene.text(`You send her a copy of the photo with the private message and tell her to transfer a very modest amount of ${qspFunc(s, 'money', 'string_profit', 5000)} to your bank account. If she doesn't want that photo to be sent to her entire friends list (which you secured before sending the message), the money needs to be on your bank account within 48 hours.`);
          scene.actions([
            { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
          ]);
        } else {
          (st as any).shantbog = ((st as any).shantbog ?? 0) + (1);
          scene.text('You can barely believe it when you read her profile, this girl is a celebrity! It would be a major scandal if this photo got published!');
          scene.text(`You send her a copy of the photo with a private message, telling her to transfer ${qspFunc(s, 'money', 'string_profit', 30000)} to your bank account. If she doesn't want that photo to be sent to the press, the money needs to be on your bank account within 48 hours.`);
          scene.actions([
            { label: 'Go back to the "Assbook" main page', goto: ['komp_assbook', 'main'] },
          ]);
        }
      }
      (st as any).temp_randB = undefined;
    }
    (st as any).temp_rand = undefined;
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
