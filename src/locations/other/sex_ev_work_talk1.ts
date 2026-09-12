import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterJobTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  if ((!((s as any).npc_job_known ?? 0))) {
    qspCall(s, 'sex_ev_work_talk1', 'whats_your_job');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'topics');
  } },
  ]);
  scene.build();
}

function enterWhatsYourJob(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What is your job?', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Hey, I never asked," you muse. "What is it you do for work again?"');
    if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'cashier_supermarket') {
      // TODO-QSP: dynamic text: "Nothing special, just a cashier at a generic supermarket," <<$npcdesc>> shrugs.
      scene.text(`"Nothing special, just a cashier at a generic supermarket," ${((s as any).npcdesc ?? 0)} shrugs.`);
      scene.text('"Pyaterochka?" you ask and he nods.');
      scene.text('"That\'s the one."');
      if (((s as any).region ?? 0) === 'pav') {
        scene.text('"Huh. I wonder if you know my sister?"');
      }
      qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
    } else {
      if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'cashier_liquor') {
        // TODO-QSP: dynamic text: "Cashier at a liquor store," <<$npcdesc>> shrugs. "Pretty boring."
        scene.text(`"Cashier at a liquor store," ${((s as any).npcdesc ?? 0)} shrugs. "Pretty boring."`);
        qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
      } else {
        if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'cashier_coffee') {
          // TODO-QSP: dynamic text: "I work the register at a coffee shop," <<$npcdesc>> says. "It gets pretty hecti...
          scene.text(`"I work the register at a coffee shop," ${((s as any).npcdesc ?? 0)} says. "It gets pretty hectic in there sometimes. Especially mornings."`);
          scene.text('"That\'s cool. Is the coffee any good?"');
          scene.text('"It\'s fine I guess," he shrugs. "Nothing special. Just generic shit."');
          qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
        } else {
          if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'barista') {
            // TODO-QSP: dynamic text: "I work as a barista at a coffee shop," <<$npcdesc>> says. "It gets pretty hecti...
            scene.text(`"I work as a barista at a coffee shop," ${((s as any).npcdesc ?? 0)} says. "It gets pretty hectic in there sometimes. Especially mornings.`);
            scene.text('"That\'s cool. Is the coffee any good?"');
            scene.text('"It is when I make it," he smirks.');
            qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
          } else {
            if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'fast_food') {
              // TODO-QSP: dynamic text: "I flip burgers at this chain fast food joint," <<$npcdesc>> says. " Pay sucks a...
              scene.text(`"I flip burgers at this chain fast food joint," ${((s as any).npcdesc ?? 0)} says. " Pay sucks and customers are all assholes. Service industry is shit."`);
            } else {
              if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'taxi_driver') {
                // TODO-QSP: dynamic text: "I drive a cab in the city," <<$npcdesc>> says. "Not much, but it pays the bills...
                scene.text(`"I drive a cab in the city," ${((s as any).npcdesc ?? 0)} says. "Not much, but it pays the bills.`);
                qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
              } else {
                if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'masseuse') {
                  // TODO-QSP: dynamic text: "I work as a masseuse in the city," <<$npcdesc>> says.
                  scene.text(`"I work as a masseuse in the city," ${((s as any).npcdesc ?? 0)} says.`);
                  scene.actions([
                    { label: 'That\'s cool', handler: (st: GameState) => {
    scene.text('"That\'s cool. You\'ll have to show me your skills sometime," you smile.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                    { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"That\'s cool. So, you give happy endings to dirty old guys?" you smirk, making a jerk-off motion with your hand.');
    if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'hate');
      // TODO-QSP: dynamic text: "What the fuck?" <<$npcdesc>> gives you a deep frown of disgust. "What do you th...
      scene.text(`"What the fuck?" ${((s as any).npcdesc ?? 0)} gives you a deep frown of disgust. "What do you think I am, some kind of faggot?"`);
      scene.text('"I was just joking," you say.');
      scene.text('"Jokes are supposed to be funny."');
    } else {
      if (((s as any).npc_humor ?? 0) === 2) {
        scene.text('"If the tip is big enough, I\'ll jerk off any guy," he grins. "Too bad none of the women ask me to finger them instead."');
      } else {
        if (((s as any).npc_humor ?? 0) === 3) {
          scene.text('"The only dirty guy I jerk off is right here," he grins back, gesturing at his own cock.');
        } else {
          scene.text('"No, not that kind of massage," he chuckles.');
        }
      }
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                  ]);
                } else {
                  if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'masseuse_sexual') {
                    // TODO-QSP: dynamic text: "I work as a masseuse in the city," <<$npcdesc>> says.
                    scene.text(`"I work as a masseuse in the city," ${((s as any).npcdesc ?? 0)} says.`);
                    scene.actions([
                      { label: 'That\'s cool', handler: (st: GameState) => {
    scene.text('"That\'s cool. You\'ll have to show me your skills sometime," you smile.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                      { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"That\'s cool. So, you give happy endings to dirty old guys?" you smirk, making a jerk-off motion with your hand.');
    scene.text('"No, just girls," he smirks back.');
    scene.text('"Ha! Good comeback."');
    scene.text('"No, really." You look back at him and he seems totally serious. "I specialize in \'magic finger\' massages for women."');
    scene.actions([
      { label: 'Oh', handler: (st: GameState) => {
    scene.text('"Oh..." you trail off, not really sure what else to say.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
      { label: 'Do you fuck too?', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('Unable to contain your curiosity, you ask the obvious next question.');
    scene.text('"Do you fuck them too?"');
    scene.text('"Sometimes," he replies. "When paid for the privilege."');
    scene.actions([
      { label: 'Oh', handler: (st: GameState) => {
    scene.text('"Oh..." you trail off, not really sure what else to say.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
      { label: 'Do I get a discount?', handler: (st: GameState) => {
    scene.text('"So if I show up at you work do I get a fuckbuddy discount?" you grin.');
    scene.text('"Bitch, you\'re getting it for free right now," he grins back.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
    ]);
  } },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'factory') {
                      if (((s as any).region ?? 0) === 'pav') {
                        // TODO-QSP: dynamic text: "I work at the textile factory," <<$npcdesc>> says.
                        scene.text(`"I work at the textile factory," ${((s as any).npcdesc ?? 0)} says.`);
                      } else {
                        // TODO-QSP: dynamic text: "I work at the textile factory in the next town over," <<$npcdesc>> says.
                        scene.text(`"I work at the textile factory in the next town over," ${((s as any).npcdesc ?? 0)} says.`);
                        if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
                          scene.text('"The one in Pavlovsk?"');
                          scene.text('"Yeah, how\'d you know?"');
                          scene.text('"I grew up in Pav."');
                          scene.text('"Huh. Imagine that."');
                        }
                      }
                      qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                    } else {
                      if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'bartender') {
                        // TODO-QSP: dynamic text: "Bartender," <<$npcdesc>> says.
                        scene.text(`"Bartender," ${((s as any).npcdesc ?? 0)} says.`);
                        scene.text('"That\'s pretty cool. So you have to know how to make a lot of fancy drinks?"');
                        scene.text('"Yeah, but everyone just orders vodka anyways," he snickers.');
                        qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                      } else {
                        if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'mechanic') {
                          // TODO-QSP: dynamic text: "I work on cars," <<$npcdesc>> says.
                          scene.text(`"I work on cars," ${((s as any).npcdesc ?? 0)} says.`);
                          scene.text('"Oh cool, like a mechanic?"');
                          scene.text('"Yeah, exactly."');
                          qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                        } else {
                          if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'line_cook') {
                            // TODO-QSP: dynamic text: "I work in a kitchen," <<$npcdesc>> says.
                            scene.text(`"I work in a kitchen," ${((s as any).npcdesc ?? 0)} says.`);
                            scene.text('"Oh, cool. Like a chef?"');
                            scene.text('"No, I\'m just a line cook. Nothing fancy."');
                            qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                          } else {
                            if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'waiter') {
                              // TODO-QSP: dynamic text: "I wait tables," <<$npcdesc>> says.
                              scene.text(`"I wait tables," ${((s as any).npcdesc ?? 0)} says.`);
                              qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                            } else {
                              if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'personal_trainer') {
                                // TODO-QSP: dynamic text: "I work at a gym as a personal trainer," <<$npcdesc>> says.
                                scene.text(`"I work at a gym as a personal trainer," ${((s as any).npcdesc ?? 0)} says.`);
                                scene.actions([
                                  { label: 'That\'s cool', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool. So you know how to get people in shape? Got any tips to keep a girl\'s figure?"');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text('"Lots of sex," he grins. "It\'s great cardio."');
    } else {
      scene.text('"Watch what you eat," he shrugs. "Fewer calories in than out. That\'s all that matters if you want to lose weight."');
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                  { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool. So you train lots of MILFs and cougars and young fuckable girls like me, right? In all tight pants that let you see their ass right through the spandex?" You grin, bouncing your eyebrows at him.');
    scene.text('"Fuck, I wish. I get as many old fat guys as I get girls. None of them want to fuck though. Most of them have boyfriends."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                ]);
                              } else {
                                if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'programmer') {
                                  // TODO-QSP: dynamic text: "I work in tech," <<$npcdesc>> says. "Do the programming for an IT company in th...
                                  scene.text(`"I work in tech," ${((s as any).npcdesc ?? 0)} says. "Do the programming for an IT company in the city."`);
                                  scene.text('"So you can fix my computer if I have a problem?"');
                                  scene.text('"Oh fuck," he groans. "Not you too."');
                                  qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                                } else {
                                  if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'criminal') {
                                    if (((s as any).npc_criminal_open ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                                      if (!(s as any).npc_criminal_known) (s as any).npc_criminal_known = {}; (s as any).npc_criminal_known[String((s as any).npcID ?? 0)] = 1;
                                      if (((s as any).npc_crime_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'drug_dealer') {
                                        // TODO-QSP: dynamic text: "I sell drugs," <<$npcdesc>> says blatantly.
                                        scene.text(`"I sell drugs," ${((s as any).npcdesc ?? 0)} says blatantly.`);
                                        scene.actions([
                                          { label: 'Uncomfortable', handler: (st: GameState) => {
    if (!(s as any).npc_criminal_discomfort) (s as any).npc_criminal_discomfort = {}; (s as any).npc_criminal_discomfort[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Oh." You gulp uncomfortably, unsure of what else to say.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                          { label: 'Nonchalant', handler: (st: GameState) => {
    scene.text('"Oh, all right. That\'s cool I guess."');
    scene.text('"Got a problem?"');
    scene.text('"No, none at all," you assure him. "Gotta make a living somehow. What kind of drugs do you sell?"');
    scene.text('"Coke mostly. Some weed on the side now and then."');
    scene.text('"Cool, cool."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                          { label: 'Impressed', handler: (st: GameState) => {
    scene.text('"Seriously?" You sit up on the bed.');
    scene.text('"Yeah. Why? Got a problem?"');
    scene.text('"No, no! That\'s super cool!" you assure him. "You must make a lot of money."');
    scene.text('"Not as much as you\'d think," he shrugs. "Bosses gotta get their cut. I only make a percentage of what sells."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                        ]);
                                      } else {
                                        if (((s as any).npc_crime_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'enforcer') {
                                          // TODO-QSP: dynamic text: "I'm an enforcer for a gang," <<$npcdesc>> says blatantly.
                                          scene.text(`"I'm an enforcer for a gang," ${((s as any).npcdesc ?? 0)} says blatantly.`);
                                          scene.actions([
                                            { label: 'Uncomfortable', handler: (st: GameState) => {
    if (!(s as any).npc_criminal_discomfort) (s as any).npc_criminal_discomfort = {}; (s as any).npc_criminal_discomfort[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Oh." You gulp uncomfortably, unsure of what else to say.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                            { label: 'Nonchalant', handler: (st: GameState) => {
    scene.text('"Oh, all right. That\'s cool I guess."');
    scene.text('"Got a problem?"');
    scene.text('"No, none at all," you assure him. "Gotta make a living somehow. What does an enforcer do exactly?"');
    scene.text('"A lot of things. I represent the muscle. If the gang needs someone beaten up, I\'ll beat them up. If they need someone protected, I\'ll beat up anyone who tries to get past. If they need someone intimidated, I\'ll threaten to beat them up."');
    scene.text('"Cool, cool."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                            { label: 'Impressed', handler: (st: GameState) => {
    scene.text('"Seriously?" You sit up on the bed.');
    scene.text('"Yeah. Why? Got a problem?"');
    scene.text('"No, no! That\'s badass!" you assure him. "Is it cool working for a gang?"');
    scene.text('"It\'s a living," he shrugs. "It\'s the only thing I\'ve ever known."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                          ]);
                                        } else {
                                          // TODO-QSP: dynamic text: "I steal things," <<$npcdesc>> says blatantly.
                                          scene.text(`"I steal things," ${((s as any).npcdesc ?? 0)} says blatantly.`);
                                          scene.actions([
                                            { label: 'Uncomfortable', handler: (st: GameState) => {
    if (!(s as any).npc_criminal_discomfort) (s as any).npc_criminal_discomfort = {}; (s as any).npc_criminal_discomfort[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Oh." You gulp uncomfortably, unsure of what else to say.');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                            { label: 'Nonchalant', handler: (st: GameState) => {
    scene.text('"Oh, all right. That\'s cool I guess."');
    scene.text('"Got a problem?"');
    scene.text('"No, none at all," you assure him. "Gotta make a living somehow. What kind of stuff do you steal?"');
    scene.text('"Lots of things. Cars, jewelry, I\'ll rob a house every now and then."');
    scene.text('"Cool, cool."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                            { label: 'Impressed', handler: (st: GameState) => {
    scene.text('"Seriously?" You sit up on the bed.');
    scene.text('"Yeah. Why? Got a problem?"');
    scene.text('"No, no! That\'s badass!" you assure him. "What\'s it like being a thief?"');
    scene.text('"It\'s pretty fun," he grins. "There\'s a certain high you get that only comes from successfully getting away with stealing something."');
    qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
  } },
                                          ]);
                                        }
                                      }
                                    } else {
                                      if (((s as any).npc_crime_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'drug_dealer') {
                                        // TODO-QSP: dynamic text: "I work in pharmaceuticals," <<$npcdesc>> says.
                                        scene.text(`"I work in pharmaceuticals," ${((s as any).npcdesc ?? 0)} says.`);
                                        if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
                                          scene.text('"That\'s cool. My aunt is a pharmacist too."');
                                          scene.text('"Oh. Good to know."');
                                        } else {
                                          scene.text('"Huh. What\'s that like?"');
                                          scene.text('"Like being a drug dealer," he snickers.');
                                        }
                                      } else {
                                        if (((s as any).npc_crime_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'enforcer') {
                                          // TODO-QSP: dynamic text: "I'm a sort of fixer," <<$npcdesc>> says.
                                          scene.text(`"I'm a sort of fixer," ${((s as any).npcdesc ?? 0)} says.`);
                                          scene.text('"Fixer? You mean like a handyman?"');
                                          scene.text('"Not really," he shrugs. "It\'s more like I\'m on call to help people out. When someone calls me, I head over and give them a hand."');
                                          scene.text('"Sounds... chaotic."');
                                          scene.text('"Yeah, a little. Never know exactly what the problem is until I get there."');
                                        } else {
                                          // TODO-QSP: dynamic text: "I work in acquisitions and sales," <<$npcdesc>> says.
                                          scene.text(`"I work in acquisitions and sales," ${((s as any).npcdesc ?? 0)} says.`);
                                          scene.text('"So... like a salesman?"');
                                          scene.text('"Sort of? I\'m kind of a middle man. I get things from people and then sell them to other people."');
                                        }
                                      }
                                      qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                                    }
                                  } else {
                                    if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'businessman') {
                                      // TODO-QSP: dynamic text: "I run a company I founded," <<$npcdesc>> says casually.
                                      scene.text(`"I run a company I founded," ${((s as any).npcdesc ?? 0)} says casually.`);
                                      scene.text('"Oh wow. Explains the apartment. What do you sell?"');
                                      scene.text('"Imported cars from China. Everybody needs cars."');
                                      scene.text('"Very practical," you nod."');
                                      qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                                    } else {
                                      if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'lawyer') {
                                        // TODO-QSP: dynamic text: "I'm the partner at a law firm here in the city," <<$npcdesc>> says.
                                        scene.text(`"I'm the partner at a law firm here in the city," ${((s as any).npcdesc ?? 0)} says.`);
                                        scene.text('"Oh wow. Impressive. Explains the condo."');
                                        qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
                                      } else {
                                        if (((s as any).npc_occupation ?? 0)?.[String((s as any).npcID ?? 0)] === 'investment_banker') {
                                          if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
                                            // TODO-QSP: dynamic text: "I work for one of the big banks here in the city," <<$npcdesc>> says.
                                            scene.text(`"I work for one of the big banks here in the city," ${((s as any).npcdesc ?? 0)} says.`);
                                            scene.text('"Oh wow. Impressive. Explains the condo," you smirk. "So if I\'m looking to start a career in finance I should come to you?"');
                                          } else {
                                            if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
                                              // TODO-QSP: dynamic text: "I work for one of the big banks here in the city," <<$npcdesc>> says.
                                              scene.text(`"I work for one of the big banks here in the city," ${((s as any).npcdesc ?? 0)} says.`);
                                              scene.text('"And you come over to my place instead of inviting me over to yours?" you smirk. "So if I\'m looking to start a career in finance I should come to you?"');
                                            } else {
                                              if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
                                                if (((s as any).region ?? 0) === 'pav') {
                                                  // TODO-QSP: dynamic text: "I work for one of the big banks in the city," <<$npcdesc>> says.
                                                  scene.text(`"I work for one of the big banks in the city," ${((s as any).npcdesc ?? 0)} says.`);
                                                  scene.text('"Oh wow. Impressive. Explains this fancy hotel room," you smirk sarcastically at the cheap decor of the motel. "So if I\'m looking to start a career in finance I should come to you?"');
                                                } else {
                                                  // TODO-QSP: dynamic text: "I work for one of the big banks here in the city," <<$npcdesc>> says.
                                                  scene.text(`"I work for one of the big banks here in the city," ${((s as any).npcdesc ?? 0)} says.`);
                                                  scene.text('"Oh wow. Impressive. Explains this fancy hotel room," you smirk. "So if I\'m looking to start a career in finance I should come to you?"');
                                                }
                                              }
                                            }
                                          }
                                          scene.text('"That depends on how good of a case you make for investment," he says teasingly.');
                                          if (((s as any).sex_ev ?? 0)?.['bj_count'] > 0) {
                                            scene.text('"The blowjob wasn\'t enough?" you grin back.');
                                          } else {
                                            scene.text('You nod at him and give him a kiss on the cheek.');
                                          }
                                          qspCall(s, 'sex_ev_pillow_talk2', 'small_talk');
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'job_talk':
      enterJobTalk(s, scene);
      break;
    case 'whats_your_job':
      enterWhatsYourJob(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_work_talk1: LocationDef = {
  name: 'sex_ev_work_talk1',
  region: 'other',
  enter: enter,
};
