import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It would be rude to even knock on the door at this time. Sonia is probably asleep, so you decide against it and lower your hand.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_residential', ''] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.text('You go to Sonia\'s house and knock on the door.');
      if (((s as any).soniaQW ?? 0)?.['hate'] === 1) {
        scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
        if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
          ((s as any).soniaQW ?? {})['tkachenko'] = 1;
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
        if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 1) {
          if (((s as any).daystart ?? 0) <= ((s as any).soniaQW ?? 0)?.['fallday'] + 7) {
            scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
            if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
              ((s as any).soniaQW ?? {})['tkachenko'] = 1;
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
            if (((s as any).soniaQW ?? 0)?.['fallenangel'] <= 3) {
              (s as any).SoniaLoc = 2;
              scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
              scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she won\'t leave her room anymore."');
              scene.text('Once you enter, she closes the door behind you.');
              scene.actions([
                { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special1'] },
              ]);
            } else {
              if (((s as any).soniaQW ?? 0)?.['fallenangel'] <= 6) {
                (s as any).SoniaLoc = 2;
                scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she hardly ever leaves her room anymore."');
                scene.text('Once you enter, she closes the door behind you.');
                scene.actions([
                  { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special2'] },
                ]);
              } else {
                if (((s as any).soniaQW ?? 0)?.['fallenangel'] <= 9) {
                  (s as any).SoniaLoc = 2;
                  scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                  scene.text('You stand outside the Ivanko household, knocking on the door. It\'s quickly answered by Sonia\'s mother, who has an unfriendly, serious look on her face before she sighs and holds the door open. "Sonia is in her room. I don\'t know what\'s wrong with that girl, but she stays in her room most of the time and when she does come out, all she does is mope around the house."');
                  scene.text('Once you enter, she closes the door behind you.');
                  scene.actions([
                    { label: 'Go to Sonia\'s room', goto: ['soniachat', 'sonia_chat_special3'] },
                  ]);
                } else {
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
                      if (((s as any).temprand ?? 0) === 2) {
                        (s as any).SoniaLoc = 2;
                        scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                        // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                        scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in her room."`);
                        scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                        scene.actions([
                          { label: 'Enter', goto: ['soniahome', 'hallway'] },
                        ]);
                      } else {
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
                          if (((s as any).temprand ?? 0) === 4  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                            (s as any).SoniaLoc = 7;
                            scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                            // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                            scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in the bathroom taking a shower, you are welcome to go wait in her room for her."`);
                            scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                            scene.actions([
                              { label: 'Enter', goto: ['soniahome', 'hallway'] },
                            ]);
                          } else {
                            if (((s as any).temprand ?? 0) === 5) {
                              scene.img('images/locations/pavlovsk/resident/soniaHome/shulyov.jpg');
                              if (((s as any).soniaQW ?? 0)?.['shulyov'] === 0) {
                                ((s as any).soniaQW ?? {})['shulyov'] = 1;
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
                                    if (((s as any).temprand ?? 0) <= 3  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                                      (s as any).SoniaLoc = 5;
                                      scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    } else {
                                      (s as any).SoniaLoc = 2;
                                      scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    }
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
                                    if (((s as any).temprand ?? 0) <= 3  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                                      (s as any).SoniaLoc = 5;
                                      scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    } else {
                                      (s as any).SoniaLoc = 2;
                                      scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    }
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
                                    if (((s as any).temprand ?? 0) <= 3  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
                                      (s as any).SoniaLoc = 5;
                                      scene.text('He snorts. "Yeah, she\'s in the livingroom. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    } else {
                                      (s as any).SoniaLoc = 2;
                                      scene.text('He snorts. "Yeah, she\'s in her room. By all means, come in and make yourself comfortable."');
                                      scene.text('Once you\'re inside, he closes the door behind you. He stands there momentarily, checking you out before he finally walks away.');
                                    }
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
                                    if (((s as any).temprand ?? 0) <= 3  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 2) {
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
                                scene.actions([
                                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                                ]);
                              }
                            } else {
                              if (((s as any).temprand ?? 0) === 6  &&  ((s as any).soniaQW ?? 0)?.['happyslut'] >= 1) {
                                (s as any).SoniaLoc = 4;
                                scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
                                // TODO-QSP: dynamic text: You stand outside the Ivanko household, knocking on the door. It's quickly answe...
                                scene.text(`You stand outside the Ivanko household, knocking on the door. It's quickly answered by Sonia's mother, who has an unfriendly, serious look on her face. "Hello again, ${((s as any).pcs_firstname ?? 0)}. Sonia is in the kitchen."`);
                                scene.text('"Thank you, Mrs Ivanko," you politely reply to keep her happy, and she lets you in before closing the door behind you.');
                                scene.actions([
                                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                                ]);
                              } else {
                                (s as any).SoniaLoc = 2;
                                scene.img('images/characters/shared/headshots_main/big25.jpg');
                                scene.text('You stand outside the Ivanko household, hoping that Sonia will be the one to open the door.');
                                // TODO-QSP: dynamic text: To your relief, Sonia answers the door with a smile. "Hi, <<$pcs_nickname>>! Com...
                                scene.text(`To your relief, Sonia answers the door with a smile. "Hi, ${((s as any).pcs_nickname ?? 0)}! Come in." You can't help but notice she seems more like her old self, well other than she is wearing tighter and more revealing clothes than she used to, before her fall from grace.`);
                                scene.text('She closes the door and heads for her room as you walk inside, you can\'t help but notice a little extra sway and wiggle to her butt as she walks down the hall, you don\'t know if that is for you or just how she is now.');
                                scene.actions([
                                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
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
        } else {
          if ((Math.floor(Math.random() * 4) + 1) === 1) {
            scene.img('images/locations/pavlovsk/resident/soniaHome/tkachenko.jpg');
            (s as any).SoniaLoc = 0;
            if (((s as any).soniaQW ?? 0)?.['tkachenko'] === 0) {
              ((s as any).soniaQW ?? {})['tkachenko'] = 1;
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
                ((s as any).soniaQW ?? {})['tkachenko'] = 1;
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
              if (((s as any).temprand ?? 0) <= 4) {
                scene.img('images/locations/pavlovsk/resident/soniaHome/shulyov.jpg');
                if (((s as any).soniaQW ?? 0)?.['shulyov'] === 0) {
                  ((s as any).soniaQW ?? {})['shulyov'] = 1;
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
                scene.actions([
                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                ]);
              } else {
                (s as any).SoniaLoc = 2;
                scene.img('images/characters/shared/headshots_main/big25.jpg');
                scene.text('You stand outside the Ivanko household, hoping that Sonia will be the one to open the door.');
                // TODO-QSP: dynamic text: To your relief, Sonia answers the door with a smile. "Hi, <<$pcs_nickname>>! Com...
                scene.text(`To your relief, Sonia answers the door with a smile. "Hi, ${((s as any).pcs_nickname ?? 0)}! Come in."`);
                scene.text('She closes the door and heads for her room as you walk inside.');
                scene.actions([
                  { label: 'Enter', goto: ['soniahome', 'hallway'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/hall.jpg');
  scene.text('You enter a small bright hallway with a door to the lounge on your right and a staircase at the end leading to the bedrooms and bathroom upstairs. There\'s also a door to the kitchen in front of you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
    { label: 'Go to Sonia\'s bedroom', goto: ['soniahome', 'sonia_room'] },
    { label: 'Go to Brother\'s Room', goto: ['soniahome', 'soniabrother'] },
    { label: 'Go to Parents Room', goto: ['soniahome', 'soniaparents'] },
    { label: 'Go to the living room', goto: ['soniahome', 'livingroom'] },
    { label: 'Go to the bathroom', goto: ['soniahome', 'bathroom'] },
    { label: 'Go to the kitchen', goto: ['soniahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterBackyard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'outdoors');
  scene.text('<center><b>Garden in Backyard</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/house_back.jpg');
  scene.text('You step out through the french doors into the garden. The first thing you notice is all the flowers — several large flower beds with a neatly kept path snaking through them. A few trees give plenty of shade, and there are a couple of stone benches to sit on. A tall wooden fence runs all along the back yard, giving a fair bit of privacy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back inside', goto: ['soniahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  if (((s as any).SoniaLoc ?? 0) === 7) {
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering1.jpg');
    scene.text('You enter the bathroom, which is fully tiled with a grey-and-white colour scheme. Whilst reasonably small, it\'s very tastefully decorated. It\'s a fairly typical bathroom, but this might be the cleanest one you\'ve ever been in. It looks practically brand new and smells lovely. The shower is running and you can faintly see Sonia\'s naked body through the plastic shower curtain. She stops moving a moment, likely having heard the door. "Is someone there?"');
    // TODO-QSP: dynamic text: You reply to her. "Yeah it's just me <<$pcs_nickname>>, I just wanted to stop by...
    scene.text(`You reply to her. "Yeah it's just me ${((s as any).pcs_nickname ?? 0)}, I just wanted to stop by and see if you wanted to hangout."`);
    scene.actions([
      { label: 'Wait for her reply', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).soniaQW ?? 0)?.['happyslut'] >= 1) {
      scene.text('<center><b>Sonia Showering</b></center>');
      scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering2.jpg');
      // TODO-QSP: dynamic text: Sonia jerks the shower curtain wide open, giving you a full view of her naked, w...
      scene.text(`Sonia jerks the shower curtain wide open, giving you a full view of her naked, wet, soapy body. "Oh hey ${((s as any).pcs_nickname ?? 0)}, sure just give me a few minutes to finish showering."`);
      qspCall(s, 'arousal', 'voyeur', 1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Watch Sonia shower', handler: (st: GameState) => {
    // TODO-QSP: soniaQW['shower_stay'] = 1
  }, goto: ['soniahome', 'sonia_shower'] },
        { label: 'Offer to wait in her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering3.jpg');
    scene.text('You nod to that. "Okay, sure, I can go wait in your room until you finish."');
    scene.text('Before you can even start to turn to leave, she giggles. "Don\'t be silly — just stay here and we can talk while I shower." As she says this, she starts to lather up her hair with shampoo, with her arms raised and her hands in her hair. It causes her body to arch back, giving you a very nice view of her naked body. "Besides, it\'s not like we haven\'t seen each other naked at school in the locker room showering." She brings up a good point.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stay and watch Sonia shower', goto: ['soniahome', 'sonia_shower'] },
      { label: 'Wait in her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
    qspCall(s, 'stat', '');
    (s as any).SoniaLoc = 2;
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering4.jpg');
    scene.text('You shake your head no. "No, I would rather just wait in your room for you." As you leave the bathroom to head to her room, you notice she frowns, you don\'t think she liked you not staying. You still leave and go to her room, where you spend a few minutes looking around her room, before she comes in and takes a seat on the bed.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Sonia Showering</b></center>');
      scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering1.jpg');
      (s as any).SoniaLoc = 2;
      // TODO-QSP: dynamic text: Sonia peeks her head out from behind the curtain, while holding it in place so y...
      scene.text(`Sonia peeks her head out from behind the curtain, while holding it in place so you can't see anything other than her head. "Oh hey ${((s as any).pcs_nickname ?? 0)}, sure just give me a couple of minutes, you can wait in my room."`);
      scene.text('You nod to that. "Ok sure." Then you leave the bathroom and head to her room, you spend a few minutes looking around her room, before she comes in and takes a seat on the bed.');
      scene.actions([
        { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/bathroom.jpg');
    scene.text('You enter the bathroom, which is fully tiled with a grey-and-white colour scheme. Whilst reasonably small, it\'s very tastefully decorated. It\'s a fairly typical bathroom, but this might be the cleanest one you\'ve ever been in. It looks practically brand new and smells lovely.');
    scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
    qspCall(s, 'piercing_management', 'set_manage_string');
    qspCall(s, 'din_van', 'bath');
    qspCall(s, 'din_van', 'bteeth');
    qspCall(s, 'din_van', 'tampon');
    qspCall(s, 'din_van', 'basin');
    qspCall(s, 'din_van', 'prvt_pee');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You take a quick shower.');
    scene.actions([
      { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(s, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
      { label: 'Dry off and get dressed', goto: ['soniahome', 'bathroom'] },
    ]);
  } },
      { label: 'Go to the hallway', goto: ['soniahome', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoniaShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering4.jpg');
  if (((s as any).soniaQW ?? 0)?.['shower_stay'] === 1) {
    ((s as any).soniaQW ?? {})['shower_stay'] = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('You decide to stay and watch her shower, without asking her if she is ok with it. After all, she was the one to fling the shower curtain wide open, giving you a full view of her naked body. "Sure, take all the time you need."');
    scene.text('She grins at your comment, you are sure she has noticed how you are checking out her naked body. "Liking what you are seeing?"');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.actions([
        { label: 'Flirt with her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering5.jpg');
    scene.text('You in a very obvious way look over her naked body as you reply. "Much better now."');
    scene.text('She bites her lower lip, obviously turned on by you checking her out and your comments. "Well you could always join me."');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get undressed to join her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('You start to take off your clothes at her words. "That sounds like a good idea." She keeps showering, but she is mostly watching you remove your clothes and get naked.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'flash', (-2));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Join her', goto: ['soniaev1', 'shower_sex'] },
    ]);
  } },
      { label: 'Just watch her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('You smile at her. "Tempting, but I\'d rather just watch."');
    scene.text('She grins a bit, apparently not minding you watching her shower. "Suit yourself." She spends a few more minutes showering before she fully rinses herself off, then grabs a towel and starts drying herself off. The two of you chat about unimportant small talk while she does, just to pass the time. Once fully dried off, she gets dressed, then leads you to her room and closes the door behind both of you.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her things are ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering5.jpg');
    scene.text('You don\'t focus on staring at her naked body, you act like you do with the girls in the locker room at school, aware she is naked but not really focusing on it. "Not bad. How about you?"');
    scene.text('She pauses a moment as if she was expecting something different. "The same, I have my good days and my bad days like everyone else."');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Just talk to her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('She spends a few more minutes showering before she fully rinses herself off. She grabs a towel and starts drying herself off, as she does these things the two of you chat about a bunch of unimportant small talk, just to pass the time. Once she is fully dried off, she gets dressed, with that she leads you to her room. She closes the door behind both of you and goes to sit on her bed.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('You decide to stay, after all it\'s not like you haven\'t seen her naked many times before in the school locker room showers. After lathering up her hair with shampoo she starts to rinse her hair out. You can\'t help but notice the trails of soapy suds running down her naked lithe body. You feel yourself getting a little aroused watching her naked body, to the point you almost missed what she just said. "How have things been for you?"');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.actions([
        { label: 'Flirt with her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering5.jpg');
    scene.text('You in a very obvious way look over her naked body as you reply. "Much better now."');
    scene.text('She bites her lower lip, obviously turned on by you checking her out and your comments. "Well you could always join me." You know if you join her this will lead to sex, you can just tell by the way she is looking at you.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get undressed to join her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('You start to take off your clothes at her words. "That sounds like a good idea." She keeps showering, but she is mostly watching you remove your clothes as you get naked as well.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'flash', (-2));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Join her', goto: ['soniaev1', 'shower_sex'] },
    ]);
  } },
      { label: 'Just watch her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('You smile at her. "Tempting, but I would rather just watch."');
    scene.text('She grins a bit, apparently not minding you watching her shower. "Suit yourself." She spends a few more minutes showering before she fully rinses herself off. She grabs a towel and starts drying herself off, as she does these things the two of you chat about a bunch of unimportant small talk, just to pass the time. Once she is fully dried off, she gets dressed, with that she leads you to her room. She closes the door behind both of you and goes to sit on her bed.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her things are ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering5.jpg');
    scene.text('You don\'t focus on staring at her naked body, you act like you do with the girls in the locker room at school, aware she is naked but not really focusing on it. "Not bad. How about you?"');
    scene.text('She pauses a moment as if she was expecting something different. "The same, I have my good days and my bad days like everyone else."');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Just talk to her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia Showering</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Bathroom/sonia_showering6.jpg');
    scene.text('She spends a few more minutes showering before she fully rinses herself off. She grabs a towel and starts drying herself off, as she does these things the two of you chat about a bunch of unimportant small talk, just to pass the time. Once she is fully dried off, she gets dressed, with that she leads you to her room. She closes the door behind both of you and goes to sit on her bed.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out in Sonia\'s room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/kitchen.jpg');
  if (((s as any).SoniaLoc ?? 0) === 4) {
    if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 1  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 3) {
      scene.text('As you enter the kitchen, you notice that whilst it isn\'t large, it\'s very tastefully done and has everything needed. It also has a dining table adjacent to it for family meals. There is also a set of french doors leading into a back yard. <a href="exec:gt \'soniachat\', \'sonia_chat_special1\'">Sonia</a> is sitting at the kitchen table. She looks up at you with red, puffy eyes.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 4  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 6) {
        scene.text('As you enter the kitchen, you notice that whilst it isn\'t large, it\'s very tastefully done and has everything needed. It also has a dining table adjacent to it for family meals. There is also a set of french doors leading into a back yard. <a href="exec:gt \'soniachat\', \'sonia_chat_special2\'">Sonia</a> is sitting at the kitchen table, staring at nothing in particular.');
      } else {
        if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 7  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 9) {
          scene.text('As you enter the kitchen, you notice that whilst it isn\'t large, it\'s very tastefully done and has everything needed. It also has a dining table adjacent to it for family meals. There is also a set of french doors leading into a back yard. <a href="exec:gt \'soniachat\', \'sonia_chat_special3\'">Sonia</a> is sitting at the kitchen table. She gives you a tired smile.');
        } else {
          if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 10) {
            scene.text('As you enter the kitchen, you notice that whilst it isn\'t large, it\'s very tastefully done and has everything needed. It also has a dining table adjacent to it for family meals. There is also a set of french doors leading into a back yard. <a href="exec:gt \'soniachat\', \'sonia_chat_happyslut\'">Sonia</a> is sitting at the kitchen table, snacking on something, and looks up with a smile as you walk in.');
          }
        }
      }
    }
  } else {
    scene.text('As you enter the kitchen, you notice that whilst it isn\'t large, it\'s very tastefully done and has everything needed. It also has a dining table adjacent to it for family meals. There is also a set of french doors leading into a back yard.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', goto: ['soniahome', 'hallway'] },
    { label: 'Go to the backyard', goto: ['soniahome', 'backyard'] },
    { label: 'Look in the fridge', goto: ['soniahome', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).ivanko ?? 0)?.['food_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).ivanko ?? {})['soup'] = 1;
    ((s as any).ivanko ?? {})['leftovers'] = 1;
    ((s as any).ivanko ?? {})['water'] = 1;
    ((s as any).ivanko ?? {})['sandwich'] = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).ivanko ?? 0)?.['leftovers'] >= 1) {
    ((s as any).ivanko ?? {})['leftover_txt'] = ' some leftovers';
  } else {
    ((s as any).ivanko ?? {})['leftover_txt'] = '';
  }
  if (((s as any).ivanko ?? 0)?.['soup'] >= 1) {
    ((s as any).ivanko ?? {})['soup_txt'] = ' some soup';
  } else {
    ((s as any).ivanko ?? {})['soup_txt'] = '';
  }
  if (((s as any).ivanko ?? 0)?.['water'] >= 1) {
    ((s as any).ivanko ?? {})['water_txt'] = ' some bottled water';
  } else {
    ((s as any).ivanko ?? {})['water_txt'] = '';
  }
  if (((s as any).ivanko ?? 0)?.['sandwich'] >= 1) {
    ((s as any).ivanko ?? {})['sandwich_txt'] = ' some stuff to make a sandwich';
  } else {
    ((s as any).ivanko ?? {})['sandwich_txt'] = '';
  }
  scene.img('images/shared/home/kitchen/fridge.jpg');
  // TODO-QSP: dynamic text: You open the fridge and see:<<$ivanko['water_txt']>><<$ivanko['soup_txt']>><<$iv...
  scene.text(`You open the fridge and see:${((s as any).ivanko ?? 0)?.['water_txt']}${((s as any).ivanko ?? 0)?.['soup_txt']}${((s as any).ivanko ?? 0)?.['leftover_txt']}${((s as any).ivanko ?? 0)?.['sandwich_txt']}`);
  if (((s as any).ivanko ?? 0)?.['leftovers'] > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).ivanko ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).ivanko ?? {})['leftovers'] = (((s as any).ivanko ?? {})['leftovers'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from last night\'s dinner. Unfortunately, it isn\'t very good, even for leftovers. You doubt it was much better when it was fresh.');
    scene.actions([
      { label: 'Continue', goto: ['soniahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).ivanko ?? 0)?.['water'] > 0) {
    scene.actions([
      { label: 'Have some water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).ivanko ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).ivanko ?? {})['water'] = (((s as any).ivanko ?? {})['water'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You drink some bottled water.');
    scene.actions([
      { label: 'Continue', goto: ['soniahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).ivanko ?? 0)?.['soup'] > 0) {
    scene.actions([
      { label: 'Have some soup', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).ivanko ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).ivanko ?? {})['soup'] = (((s as any).ivanko ?? {})['soup'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/soup.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You find some soup in the fridge and spoon out a bowlful to eat. Unfortunately, it isn\'t very good, and you feel that it was sitting there too long.');
    scene.actions([
      { label: 'Continue', goto: ['soniahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).ivanko ?? 0)?.['sandwich'] > 0) {
    scene.actions([
      { label: 'Make a sandwich', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).ivanko ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).ivanko ?? {})['sandwich'] = (((s as any).ivanko ?? {})['sandwich'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/reuben.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You get all the stuff you need from the fridge, get some bread out of the cabinet and make yourself a sandwich.');
    scene.actions([
      { label: 'Continue', goto: ['soniahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['soniahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  if (((s as any).livingev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).livingev = 0;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/living_room.jpg');
  if (((s as any).SoniaLoc ?? 0) === 5) {
    scene.text('You walk into a small but comfortable lounge which is very clean and tidy. You see the TV in the corner and a cozy family settee on the opposite wall facing a fireplace, giving the room a warm and comfortable look.');
    scene.text('<a href="exec:gt \'soniachat\', \'livingroom\'">Sonia</a> is lying on the couch reading a book.');
  } else {
    scene.text('You walk into a small but comfortable lounge which is very clean and tidy. You see the TV in the corner and a cozy family settee on the opposite wall facing a fireplace, giving the room a warm and comfortable look.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['soniahome', 'hallway'] },
  ]);
  scene.build();
}

function enterSoniaparents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/parents_bedroom.jpg');
  scene.text('You look into Sonia\'s parents\' bedroom and see that, as with the rest of the house, it\'s spotless, tidy and tastefully decorated, making the most of the available space. There\'s a wardrobe to your right and the bed on the left, with a chest of drawers and a beautiful fireplace.');
  if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 22) {
    scene.text('You look into the bedroom and see Sonia\'s parents asleep. Not wanting to disturb them, you close the door and leave.');
    scene.actions([
      { label: 'Leave', goto: ['soniahome', 'hallway'] },
    ]);
  } else {
    scene.text('Since nobody\'s here, you should probably leave, or you could take a look around if you\'re that curious.');
    scene.actions([
      { label: 'Leave', goto: ['soniahome', 'hallway'] },
      { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Sonia\'s parent\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/momsdrawer.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet. Even though you hope to find something, you don\'t see anything interesting. The room is perfectly organized, with each drawer containing a type of clothing neatly folded up. Other than that, there seems to be nothing of interest.');
    scene.actions([
      { label: 'Leave', goto: ['soniahome', 'hallway'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoniabrother(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Shulyov\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/shulyov.jpg');
  scene.text('You try the door, but it\'s locked.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['soniahome', 'hallway'] },
  ]);
  scene.build();
}

function enterSoniaRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_room.jpg');
  if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 1  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 3) {
    scene.text('The first thing you notice about her room is that it\'s spotless and orderly, with nothing out of place. There is a dresser against one wall with several things neatly placed on it, with pictures on the wall above it. The bed is near the center of the room against one wall, and is made with a body pillow leaning against the other pillows, with a small <a href="exec:gt \'soniahome\',\'night_stand\'">nightstand</a> beside it. Above the bed is a short string of lights, while a small makeup table with all the makeup lined up in a very orderly fashion sits against another wall.');
    scene.text('<a href="exec:gt \'soniachat\', \'sonia_chat_special1\'">Sonia</a> is lying on her bed crying.');
  } else {
    if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 4  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 6) {
      scene.text('The first thing you notice about her room is that it\'s spotless and orderly, with nothing out of place. There is a dresser against one wall with several things neatly placed on it, with pictures on the wall above it. The bed is near the center of the room against one wall, and is made with a body pillow leaning against the other pillows, with a small <a href="exec:gt \'soniahome\',\'night_stand\'">nightstand</a> beside it. Above the bed is a short string of lights, while a small makeup table with all the makeup lined up in a very orderly fashion sits against another wall.');
      scene.text('<a href="exec:gt \'soniachat\', \'sonia_chat_special2\'">Sonia</a> is lying on her bed under her covers, with the covers pulled all the way up until most of her face is hidden, looking depressed and miserable, but at least she\'s not crying.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 7  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 9) {
        scene.text('The first thing you notice about her room is that it\'s spotless and orderly, with nothing out of place. There is a dresser against one wall with several things neatly placed on it, with pictures on the wall above it. The bed is near the center of the room against one wall, and is made with a body pillow leaning against the other pillows, with a small <a href="exec:gt \'soniahome\',\'night_stand\'">nightstand</a> beside it. Above the bed is a short string of lights, while a small makeup table with all the makeup lined up in a very orderly fashion sits against another wall.');
        scene.text('<a href="exec:gt \'soniachat\', \'sonia_chat_special3\'">Sonia</a> is sitting on her bed relaxing. She doesn\'t look happy like she used to, but she doesn\'t look miserable or on the verge of tears like she has of late either. You think she might finally be coming to terms with her new reality.');
      } else {
        if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 10) {
          scene.text('The first thing you notice about her room is that it\'s spotless and orderly, with nothing out of place. There is a dresser against one wall with several things neatly placed on it, with pictures on the wall above it. The bed is near the center of the room against one wall, and is made with a body pillow leaning against the other pillows, with a small <a href="exec:gt \'soniahome\',\'night_stand\'">nightstand</a> beside it. Above the bed is a short string of lights, while a small makeup table with all the makeup lined up in a very orderly fashion sits against another wall.');
          scene.text('<a href="exec:gt \'soniachat\', \'sonia_chat_happyslut\'">Sonia</a> is lying on her bed on her stomach, wearing some very short shorts. She looks at you and grins for the first time in a long time that you have seen. Her legs slide forward, giving you a somewhat suggestive view, with her shorts riding up the crack of her ass a bit.');
        } else {
          scene.text('The first thing you notice about her room is that it\'s spotless and orderly, with nothing out of place. There is a dresser against one wall with several things neatly placed on it, with pictures on the wall above it. The bed is near the center of the room against one wall, and is made with a body pillow leaning against the other pillows, with a small <a href="exec:gt \'soniahome\',\'night_stand\'">nightstand</a> beside it. Above the bed is a short string of lights, while a small makeup table with all the makeup lined up in a very orderly fashion sits against another wall.');
          scene.text('<a href="exec:gt \'soniachat\', \'sonia_chat\'">Sonia</a> is sitting on her bed relaxing.');
        }
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Dress yourself', handler: (st: GameState) => {
    qspCall(st, 'shortgs', 'dress');
  }, goto: ['soniahome', 'sonia_room'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the hallway', goto: ['soniahome', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNightStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 10) {
    if (((s as any).soniaQW ?? 0)?.['happyslut'] <= 4) {
      scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand2.jpg');
      scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The small bullet vibrator is still gone, but in its place is an average-sized vibrator.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['happyslut'] <= 8) {
        scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand2.jpg');
        scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The small bullet vibrator is still gone, but in its place is an average-sized vibrator, now there is also a strap-on harness with an average-sized dildo attached to it.');
      } else {
        if (((s as any).soniaQW ?? 0)?.['happyslut'] <= 12) {
          scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand3.jpg');
          scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The small bullet vibrator is still gone, but in its place is an average-sized vibrator, now there is also a strap-on harness with a slightly larger dildo next to it, and next to that is a dog-penis-shaped dildo.');
        } else {
          if (((s as any).soniaQW ?? 0)?.['happyslut'] <= 15) {
            scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand3.jpg');
            scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The small bullet vibrator is still gone, but in its place is an average-sized vibrator, now there is also a strap-on harness with a large black dildo next to it, and next to that is a large dog-penis-shaped dildo.');
          } else {
            scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand3.jpg');
            scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The small bullet vibrator is still gone, but in its place is an average-sized vibrator, now there is also a strap-on harness with a large black dildo next to it, a large dog-penis-shaped dildo beside that, and a monstrous demonic dildo at the end.');
          }
        }
      }
    }
  } else {
    if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 1  &&  ((s as any).soniaQW ?? 0)?.['fallenangel'] <= 9) {
      scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand1.jpg');
      scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. You notice the little bullet vibrator is now missing, you wonder if she threw it away considering what happened or just moved it.');
    } else {
      scene.img('images/locations/pavlovsk/resident/soniahome/sonia_bedroom/nightstand1.jpg');
      scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. Inside it is neatly organized with a lot of skin care products and other normal things you might find in a nightstand. The only thing of note is the small bullet vibrator tucked into the corner almost completely concealed.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the drawer', goto: ['soniahome', 'sonia_room'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'backyard':
      enterBackyard(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'sonia_shower':
      enterSoniaShower(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'soniaparents':
      enterSoniaparents(s, scene);
      break;
    case 'soniabrother':
      enterSoniabrother(s, scene);
      break;
    case 'sonia_room':
      enterSoniaRoom(s, scene);
      break;
    case 'night_stand':
      enterNightStand(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const soniahome: LocationDef = {
  name: 'soniahome',
  title: 'Hallway',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'livingr',
  enter: enter,
};
