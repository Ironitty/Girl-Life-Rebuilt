import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/soniaHome/house_front.jpg');
  scene.text('You approach Sonia\'s house, walking up the pathway through a small well-cared garden with various flowers and shrubs towards a grey, wooden-clad house, which is equally well-cared for.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It would be rude to even knock on the door at this time. Sonia is probably asleep, so you decide against it and lower your hand.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.text('It would be rude to even knock on the door at this time. Sonia is probably asleep, so you decide against it and lower your hand.');
    qspCall(s, 'stat', '');
    scene.text('You go to Sonia\'s house and knock on the door.');
    if (((s as any).soniaQW ?? 0)?.['hate'] === 1) {
      scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
      if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
        (s as any).soniaQW['tkachenko'] = 1;
        scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face. "Hello. Can I help you?" she asks.');
        // TODO-QSP: dynamic text: You smile at her. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
        scene.text(`You smile at her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
        scene.text('She frowns at you. It seems she doesn\'t care for your casual attitude. "I am Tseydlits Ivanko, but you can call me Mrs Ivanko. Who are you exactly?"');
        // TODO-QSP: dynamic text: You keep your smile. "Sorry, Mrs Ivanko. I'm <<$pcs_firstname>> <<$pcs_lastname>...
        scene.text(`You keep your smile. "Sorry, Mrs Ivanko. I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}."`);
        scene.text('She nods. "Sonia says she never wants to see you again, so please leave and don\'t come back!" she says before closing the door in your face.');
      } else {
        scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face.');
        scene.text('"Sonia says she never wants to see you again, so stop bothering her!" she says before closing the door in your face.');
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((s as any).daystart ?? 0) <= ((s as any).soniaQW ?? 0)?.['fallday'] + 7) {
        scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
        if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
          (s as any).soniaQW['tkachenko'] = 1;
          scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face. "Hello. Can I help you?" she asks.');
          // TODO-QSP: dynamic text: You smile at her. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
          scene.text(`You smile at her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
          scene.text('She frowns at you. It seems she doesn\'t care for your casual attitude. "I am Tseydlits Ivanko, but you can call me Mrs Ivanko. Who are you exactly?"');
          // TODO-QSP: dynamic text: You keep your smile. "Sorry, Mrs Ivanko. I'm <<$pcs_firstname>> <<$pcs_lastname>...
          scene.text(`You keep your smile. "Sorry, Mrs Ivanko. I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}."`);
          scene.text('She nods a little. "Sonia doesn\'t want to see anyone!" she says before closing the door in your face.');
          scene.actions([
            { label: 'Leave', goto: ['pav_residential', ''] },
          ]);
        } else {
          scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face.');
          scene.text('"Sonia doesn\'t want to see anyone!" she says before closing the door in your face.');
          scene.actions([
            { label: 'Leave', goto: ['pav_residential', ''] },
          ]);
        }
      } else {
        (s as any).SoniaLoc = 2;
        scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
        scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she won\'t leave her room anymore."');
        scene.text('Once you enter, she closes the door behind you.');
        if (((s as any).soniaQW ?? 0)?.['fallenangel'] <= 6) {
          (s as any).SoniaLoc = 2;
          scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
          scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she hardly ever leaves her room anymore."');
          scene.text('Once you enter, she closes the door behind you.');
          scene.actions([
            { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special2'] },
          ]);
        } else {
          (s as any).SoniaLoc = 2;
          scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
          scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she stays in her room most of the time and when she does come out, all she does is mope around the house."');
          scene.text('Once you enter, she closes the door behind you.');
          if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 10) {
            (s as any).temprand = Math.floor(Math.random() * 7) + 1;
            if (((s as any).temprand ?? 0) === 1) {
              (s as any).SoniaLoc = 0;
              scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
              scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face.');
              scene.text('"Sonia isn\'t here, but she should be home later. You can call her then," she says before politely closing the door, not inviting you in.');
              scene.actions([
                { label: 'Leave', goto: ['pav_residential', ''] },
              ]);
            } else {
              (s as any).SoniaLoc = 2;
              scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
              // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
              scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in her room."`);
              scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
              if (((s as any).temprand ?? 0) === 3  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                (s as any).SoniaLoc = 5;
                scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in the living room."`);
                scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                scene.actions([
                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                ]);
              } else {
                (s as any).SoniaLoc = 7;
                scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in the bathroom taking a shower, you are welcome to go wait in her room for her."`);
                scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                if (((s as any).temprand ?? 0) === 5) {
                  scene.img('images/locations/pavlovsk/resident/soniaHome/shulyov.jpg');
                  if (((s as any).soniaQW ?? 0)?.['shulyov'] === 0) {
                    (s as any).soniaQW['shulyov'] = 1;
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by a young, good-looking man about your sister\'s age who has a friendly smile. "Hello. Can I help you?" he asks as he looks you over with hungry eyes.');
                      // TODO-QSP: dynamic text: You smile at him. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                      scene.text(`You smile at him. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                      scene.text('He nods and stands aside. "My name is Shulyov. A beautiful thing like you shouldn\'t be hanging out with a slut like my sister. It\'s bad for your rep."');
                      scene.text('You look a little surprised by what he said. "How do you…"');
                      scene.text('He shrugs and interrupts you. "Anyone remotely in the know, knows all about my sister\'s antics. I can\'t say I\'m remotely surprised. I always knew she was a slut in the making," he says in disgust, like he blames her for what happened.');
                      scene.text('You frown at him. "That\'s not very nice! Is she here or not?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                        (s as any).SoniaLoc = 7;
                        scene.text('He snorts. "Yeah, she\'s in the bathroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      } else {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      }
                    } else {
                      scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by a young, good-looking man about your sister\'s age who has a friendly smile. "Hello. Can I help you?" he asks.');
                      // TODO-QSP: dynamic text: You smile at him. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                      scene.text(`You smile at him. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                      scene.text('He nods and stands aside. "My name is Shulyov. You shouldn\'t be hanging out with a slut like my sister. It\'s bad for your rep."');
                      scene.text('You look a little surprised by what he said. "How do you…"');
                      scene.text('He shrugs and interrupts you. "Anyone remotely in the know, knows all about my sister\'s antics. I can\'t say I\'m remotely surprised. I always knew she was a slut in the making," he says in disgust, like he blames her for what happened.');
                      scene.text('You frown at him. "That\'s not very nice! Is she here or not?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                        (s as any).SoniaLoc = 7;
                        scene.text('He snorts. "Yeah, she\'s in the bathroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      } else {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      }
                    }
                    scene.actions([
                      { label: 'Enter', goto: ['soniahome', 'hallway'] },
                    ]);
                  } else {
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                      scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Shulyov. "Hello again, ${((s as any).pcs_nickname ?? 0)}. Nice to see you again," he says as he looks you over with hungry eyes.`);
                      scene.text('You smile at him. "Hi. Is Sonia here?"');
                      scene.text('He nods and stands aside. "A beautiful thing like you shouldn\'t be hanging out with a slut like my sister. It\'s bad for your rep," he says in disgust, like he blames her for what happened.');
                      scene.text('You frown at him, sick of his comments. "Is she here or not?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                        (s as any).SoniaLoc = 7;
                        scene.text('He snorts. "Yeah, she\'s in the bathroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      } else {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      }
                    } else {
                      // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                      scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Shulyov. "Hello again ${((s as any).pcs_nickname ?? 0)}," he says to you with a bored look on his face.`);
                      scene.text('You smile at him. "Hi. Is Sonia here?"');
                      scene.text('He nods and stands aside. "You shouldn\'t be hanging out with a slut like my sister. It\'s bad for your rep," he says in disgust, like he blames her for what happened.');
                      scene.text('You frown at him, sick of his comments. "Is she here or not?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) === 1  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                        (s as any).SoniaLoc = 7;
                        scene.text('He snorts. "Yeah, she\'s in the bathroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      } else {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      }
                    }
                    scene.actions([
                      { label: 'Enter', goto: ['soniahome', 'hallway'] },
                    ]);
                  }
                } else {
                  (s as any).SoniaLoc = 4;
                  scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                  // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                  scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in the kitchen."`);
                  scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                  (s as any).SoniaLoc = 2;
                  scene.img('images/characters/shared/headshots_main/big25.jpg');
                  scene.text('You stand outside the Ivanko household, hoping that Sonia will be the one to open the door.');
                  // TODO-QSP: dynamic text: To your relief, Sonia answers the door with a smile. "Hi, <<$pcs_nickname>>! Com...
                  scene.text(`To your relief, Sonia answers the door with a smile. "Hi, ${((s as any).pcs_nickname ?? 0)}! Come in." You can't help but notice she seems more like her old self, well other than she is wearing tighter and more revealing clothes than she used to, before her fall from grace.`);
                  scene.text('She closes the door and heads for her room as you walk inside, you can\'t help but notice a little extra sway and wiggle to her butt as she walks down the hall, you don\'t know if that is for you or just how she is now.');
                  scene.actions([
                    { label: 'Enter', goto: ['soniahome', 'hallway'] },
                    { label: 'Enter', goto: ['soniahome', 'hallway'] },
                  ]);
                }
                scene.actions([
                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                ]);
              }
              if ((Math.floor(Math.random() * 4) + 1) === 1) {
                scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                (s as any).SoniaLoc = 0;
                if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
                  (s as any).soniaQW['tkachenko'] = 1;
                  scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face. "Hello. Can I help you?" she asks.');
                  // TODO-QSP: dynamic text: You smile at her. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                  scene.text(`You smile at her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                  scene.text('She frowns at you. It seems she doesn\'t care for your casual attitude. "I am Tseydlits Ivanko, but you can call me Mrs Ivanko. Who are you exactly?"');
                  // TODO-QSP: dynamic text: You keep your smile. "Sorry, Mrs Ivanko. I'm <<$pcs_firstname>> <<$pcs_lastname>...
                  scene.text(`You keep your smile. "Sorry, Mrs Ivanko. I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}."`);
                  scene.text('She nods. "Sonia isn\'t here, but she should be home later. You can call her then," she says before closing the door in your face.');
                } else {
                  scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face.');
                  scene.text('"Sonia isn\'t here, but she should be home later. You can call her then," she says before politely closing the door, not inviting you in.');
                }
                scene.actions([
                  { label: 'Leave', goto: ['pav_residential', ''] },
                ]);
              } else {
                (s as any).SoniaLoc = 2;
                (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                if (((s as any).temprand ?? 0) <= 2) {
                  scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                  if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
                    (s as any).soniaQW['tkachenko'] = 1;
                    scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face. "Hello. Can I help you?" she asks.');
                    // TODO-QSP: dynamic text: You smile at her. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                    scene.text(`You smile at her. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                    scene.text('She frowns at you. It seems she doesn\'t care for your casual attitude. "I am Tseydlits Ivanko, but you can call me Mrs Ivanko. Who are you exactly?"');
                    // TODO-QSP: dynamic text: You keep your smile. "Sorry, Mrs Ivanko. I'm <<$pcs_firstname>> <<$pcs_lastname>...
                    scene.text(`You keep your smile. "Sorry, Mrs Ivanko. I'm ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}."`);
                    scene.text('She nods a little. "Better. Young ladies should have proper manners after all. Sonia is in her room."');
                    scene.text('She stands aside to let you in before she closes the door.');
                  } else {
                    // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                    scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in her room."`);
                    scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                  }
                  scene.actions([
                    { label: 'Enter', goto: ['soniahome', 'hallway'] },
                  ]);
                } else {
                  scene.img('images/locations/pavlovsk/resident/soniaHome/shulyov.jpg');
                  if (((s as any).soniaQW ?? 0)?.['shulyov'] === 0) {
                    (s as any).soniaQW['shulyov'] = 1;
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by a young, good-looking man about your sister\'s age who has a friendly smile. "Hello. Can I help you?" he asks as he looks you over with hungry eyes.');
                      // TODO-QSP: dynamic text: You smile at him. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                      scene.text(`You smile at him. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) <= 2) {
                        (s as any).SoniaLoc = 5;
                        scene.text('He nods and stands aside. "I didn\'t know my little sister had such beautiful friends. By all means, come in and welcome. My name is Shulyov. Sonia is in the living room."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      } else {
                        (s as any).SoniaLoc = 2;
                        scene.text('He nods and stands aside. "I didn\'t know my little sister had such beautiful friends. By all means, come in and welcome. My name is Shulyov. Sonia is in her room."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      }
                    } else {
                      scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by a young, good-looking man about your sister\'s age who has a friendly smile. "Hello. Can I help you?" he asks.');
                      // TODO-QSP: dynamic text: You smile at him. "Hi, I'm <<$pcs_nickname>>, one of Sonia's classmates. Is she ...
                      scene.text(`You smile at him. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}, one of Sonia's classmates. Is she here?"`);
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) <= 2) {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      } else {
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      }
                    }
                  } else {
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                      scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Shulyov, who gives you a friendly smile. "Hello again, ${((s as any).pcs_nickname ?? 0)}. Nice to see you," he says as he looks you over with hungry eyes.`);
                      scene.text('You smile at him. "Hi. Is Sonia here?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) <= 2) {
                        (s as any).SoniaLoc = 5;
                        scene.text('He nods and stands aside. "I didn\'t know my little sister had such beautiful friends. By all means, come in and welcome. My name is Shulyov. Sonia is in the living room."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      } else {
                        (s as any).SoniaLoc = 2;
                        scene.text('He nods and stands aside. "I didn\'t know my little sister had such beautiful friends. By all means, come in and welcome. My name is Shulyov. Sonia is in her room."');
                        scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                      }
                    } else {
                      scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Shulyov with a bored look on his face, "Yeah?"');
                      scene.text('You smile at him. "Hi. Is Sonia here?"');
                      (s as any).temprand = Math.floor(Math.random() * 6) + 1;
                      if (((s as any).temprand ?? 0) <= 2) {
                        (s as any).SoniaLoc = 5;
                        scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      } else {
                        (s as any).SoniaLoc = 2;
                        scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                        scene.text('Once you\'re inside, he closes the door behind you.');
                      }
                    }
                  }
                  (s as any).SoniaLoc = 2;
                  scene.img('images/characters/shared/headshots_main/big25.jpg');
                  scene.text('You stand outside the Ivanko household, hoping that Sonia will be the one to open the door.');
                  // TODO-QSP: dynamic text: To your relief, Sonia answers the door with a smile. "Hi, <<$pcs_nickname>>! Com...
                  scene.text(`To your relief, Sonia answers the door with a smile. "Hi, ${((s as any).pcs_nickname ?? 0)}! Come in."`);
                  scene.text('She closes the door and heads for her room as you walk inside.');
                  scene.actions([
                    { label: 'Enter', goto: ['soniahome', 'hallway'] },
                    { label: 'Enter', goto: ['soniahome', 'hallway'] },
                  ]);
                }
              }
              scene.actions([
                { label: 'Enter', goto: ['soniahome', 'hallway'] },
              ]);
            }
          }
          scene.actions([
            { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special3'] },
          ]);
        }
        scene.actions([
          { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special1'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

export const soniahome: LocationDef = {
  name: 'soniahome',
  title: 'Hallway',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'livingr',
  description: ['You approach Sonia\'s house, walking up the pathway through a small well-cared garden with various flowers and shrubs towards a grey, wooden-clad house, which is equally well-cared for.'],
  enter: enter,
};
