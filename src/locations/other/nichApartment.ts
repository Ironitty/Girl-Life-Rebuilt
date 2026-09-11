import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichWork ?? 0) === 2) {
    if (((s as any).nichLastWorkDay ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'nichUtil', 'startWorkday');
    }
    qspCall(s, 'nichUtil', 'checkOutfit');
  }
  if ((!((s as any).nichWork ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['nichApartment', 'visitTanya'] }]);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nicholas\' Apartment</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/hallway.jpg');
  scene.text('You are standing in a luxurious and spacious city center home.');
  if ((!((s as any).nichGalaDisabled ?? 0))) {
    // TODO-QSP: $nickFamDesc += ' He lives here with his wife <a href="exec: gt ''nichGala'', ''desc''">Gala</a>.'
  }
  // TODO-QSP: $nickFamDesc += ' <a href="exec: gt ''nichTanya'', ''desc''">Tanya</a> is the daughter of Gala and s...
  // TODO-QSP: $nickFamDesc
  if (((s as any).nichWork ?? 0) === 2) {
    scene.text('You work here as a live-in maid.');
    if (((s as any).nichNote ?? 0) === 1) {
      scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed work. This is unacceptable. Take your stuff and l...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed work. This is unacceptable. Take your stuff and leave. You are fired. -Nicholas"`);
      scene.text('You see all your belongings standing in front of the door prepared for your departure.');
      return;
      scene.actions([
        { label: 'Fired', goto: ['nichUtil', 'fired'] },
      ]);
    } else {
      if (((s as any).nichNote ?? 0) === 2) {
        scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed work. This is unacceptable. I expect this not to ...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed work. This is unacceptable. I expect this not to happen again. -Nicholas"`);
        scene.text('<a href="exec: gt \'nichApartment\', \'removeNote\'">Remove note</a>');
      } else {
        if (((s as any).nichNote ?? 0) === 11) {
          scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed your last mandatory evaluation. This is unaccepta...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed your last mandatory evaluation. This is unacceptable. Take your stuff and leave. You are fired. -Nicholas"`);
          scene.text('You see all your belongings standing in front of the door prepared for your departure.');
          return;
          scene.actions([
            { label: 'Fired', goto: ['nichUtil', 'fired'] },
          ]);
        } else {
          if (((s as any).nichNote ?? 0) === 12) {
            scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed your last mandatory evaluation. This is unaccepta...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed your last mandatory evaluation. This is unacceptable. I expect this not to happen again. -Nicholas"`);
            scene.text('<a href="exec: gt \'nichApartment\', \'removeNote\'">Remove note</a>');
          }
        }
      }
    }
  } else {
    if (((s as any).nichWork ?? 0) === 3) {
      scene.text('You used to work here.');
    }
  }
  scene.text('The corridor\'s floor and walls are a tasteful mix of marble and wood. Besides several paintings and small statues for decoration, the only thing of note in it is are a coat and shoe rack for guests.');
  if (((s as any).nichNichAct ?? 0) === 'leaveWork') {
    scene.text('<a href="exec: gt \'nichNicholas\', \'start\'">Nicholas</a> is wearing an expensive suit and is about to leave for work.');
  } else {
    if (((s as any).nichNichAct ?? 0) === 'returnWork') {
      scene.text('Nicholas is wearing one of his expensive suits. Apparently he just returned from work.');
    } else {
      if (((s as any).nichNichAct ?? 0) === 'leaveShopping') {
        scene.text('Nicholas is about to leave the apartment. It looks as if he wants to go shopping.');
      } else {
        if (((s as any).nichNichAct ?? 0) === 'returnShopping') {
          scene.text('Nicholas just returned from shopping. Apparently he bought some things from expensive shops.');
        } else {
          if (((s as any).nichNichAct ?? 0) === 'leaveClub') {
            scene.text('Nicholas is wearing one of his finest black tie suits. Apparently he is about to leave for his club.');
            if (((s as any).nichGalaAct ?? 0) === 'leaveClub') {
              scene.text('Gala accompanies him. She is wearing her silver jewelry and an expensive looking dress which is a perfect combination of classy and sexy.');
            }
          } else {
            if (((s as any).nichNichAct ?? 0) === 'returnClub') {
              if (((s as any).nichGalaAct ?? 0) === 'returnClub') {
                scene.text('Nicholas and Gala just returned from their club.');
              }
              scene.text('Nicholas just returned from his club.');
            }
          }
        }
      }
    }
  }
  if (((s as any).nichGalaAct ?? 0) === 'leaveSpa') {
    scene.text('Gala is about to leave the apartment. As far as you know she is going to her spa.');
  } else {
    if (((s as any).nichGalaAct ?? 0) === 'returnSpa') {
      scene.text('Gala just entered the apartment. She seems to be very releaxed. Apparently she was at her spa.');
    } else {
      if (((s as any).nichGalaAct ?? 0) === 'leaveFriend') {
        scene.text('Gala is about to leave the apartment. She is wearing one of her favorite short dresses and apparently spent much effort applying her make-up. As far as you know she wants to visit a friend of hers.');
      } else {
        if (((s as any).nichGalaAct ?? 0) === 'returnFriend') {
          scene.text('Gala just entered the apartment. As far as you know she visited a friend.');
        }
      }
    }
  }
  if (((s as any).nichTanyAct ?? 0) === 'leaveUni') {
    scene.text('Tanya is about to leave the apartment. It looks as if she is about to attend her classes at university.');
  } else {
    if (((s as any).nichTanyAct ?? 0) === 'returnUni') {
      scene.text('Tanya just entered the apartment. Apparently she returned from university.');
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'leaveBallet') {
        scene.text('Tanya is about to leave the apartment. Apparently she is going to attend to her ballet lessons.');
      } else {
        if (((s as any).nichTanyAct ?? 0) === 'returnBallet') {
          scene.text('Tanya just entered the apartment. As far as you know she was at her ballet lessons.');
        } else {
          if (((s as any).nichTanyAct ?? 0) === 'leaveFriend') {
            scene.text('Tanya is about to leave the apartment. As far as you know she is going to visit a friend.');
          } else {
            if (((s as any).nichTanyAct ?? 0) === 'returnFriend') {
              scene.text('Tanya just entered the apartment. As far as you know she visited a friend.');
            } else {
              if (((s as any).nichTanyAct ?? 0) === 'leaveShopping') {
                scene.text('Tanya is about to leave the apartment. From the way she is dresses you assume that she is heading for a shopping trip.');
              } else {
                if (((s as any).nichTanyAct ?? 0) === 'returnShopping') {
                  scene.text('Tanya just entered the apartment. She carries some plastic bags with her, indicating that she bought some new clothes and shoes.');
                } else {
                  if (((s as any).nichTanyAct ?? 0) === 'leaveClub') {
                    scene.text('Tanya is about to leave to a dance club.');
                  } else {
                    if (((s as any).nichTanyAct ?? 0) === 'returnClub') {
                      scene.text('Tanya just entered the apartment. She wears the clothes she usually wears to her dance club. She appears to be a little bit exhausted.');
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
  if (((s as any).nichWork ?? 0) === 2) {
    scene.actions([
      { label: '<b>Go to your bedroom</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomServant', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the servant bedroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomServant', ''] },
    ]);
  }
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'hallway');
    if (((s as any).nichWorkState ?? 0) > 0) {
      scene.actions([
        { label: 'Clean apartment', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'cleanApartment', 'start'
  } },
      ]);
    }
  }
  if (((s as any).nichWork ?? 0) === 3  &&  ((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 22) {
    scene.actions([
      { label: 'Get changed into the maid outfit and ask for your job back.', goto: ['nichStudy', 'reHire'] },
    ]);
  }
  if (((s as any).nichDebug ?? 0) === 1) {
    scene.actions([
      { label: 'Debug Menu', goto: ['nichUtil', 'debug'] },
    ]);
  }
  scene.actions([
    { label: '<b>Leave and go to the city center</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
    }
  } },
    { label: 'Go to the living room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichLivingroom', ''] },
    { label: 'Go to the master bedroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomMaster', ''] },
    { label: 'Go to Tanya\'s room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomTanja', ''] },
    { label: 'Go to the study', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichStudy', ''] },
    { label: 'Go to the guest cloakroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBathGuest', ''] },
  ]);
  scene.build();
}

function enterJobInterview(s: GameState, scene: SceneBuilder): void {
  scene.text('The address you have been given leads you to a very expensive looking apartment building. A porter stands at the door, inspecting you while you come closer.');
  scene.text('"Hello, I am here to apply for the job as live-in maid."');
  if ((!((s as any).PMaid ?? 0))) {
    scene.text('"I am afraid I am not allowed to let you pass dressed like this, Miss. Master Nicholas made it very clear that every applicant for this position has to be dressed in an appropriate outfit. Meaning you have to wear a maid uniform for the job interview. You can get one at the mall nearby."');
    scene.actions([
      { label: 'Turn around', goto: ['city_center', ''] },
    ]);
  } else {
    scene.text('"Very well. Just give me a minute."');
    scene.text('He turns around and steps a few feet away from you. Then he activates what appears to be a wireless device in his ear.');
    scene.text('"We have another applicant for the maid job… A young girl… Yes, she is dressed correctly… Very well."');
    scene.text('He turns back to you.');
    scene.text('"Master Nicholas is informed of your arrival and will expect you in his living room. His wife, Mistress Gala, and his daughter, Miss Tanya, will also be present."');
    scene.text('He calls the elevator for you and presses the button for the uppest floor after you stepped inside.');
    scene.text('"Good luck, Miss." he says before the doors close.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/01.jpg');
    scene.text('Finally the elevator stops and its doors open.');
    if (((s as any).nichTanya ?? 0)?.['Known'] === 0) {
      scene.text('In front of you stands a cute girl smiling at you.');
      scene.text('"Hello. My name is Tanya. You are here for the maid-job I guess? Just follow me to the living room. My parents are waiting for you."');
    } else {
      scene.text('In front of you stands a cute girl smiling at you. It is Tanya!');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>? You are the girl applying as a maid? Why didn't you tell me ...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}? You are the girl applying as a maid? Why didn't you tell me that you are interested in a maid-job? Anyways, follow me. My parents want to meet you."`);
    }
    scene.actions([
      { label: 'Follow her', goto: ['nichApartment', 'hiring'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterHiring(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichHotelReferral ?? 0) === 2) {
    (s as any).nichHireMode = 1;
  } else {
    (s as any).nichHireMode = 2;
  }
  scene.img('images/characters/city/nicholas/01.jpg');
  scene.text('Tanya leads you into the living room. Nicholas, her step-father, and her mother Gala are already sitting there.');
  if (((s as any).nichHireMode ?? 0) === 1) {
    // TODO-QSP: dynamic text: "This is <<$pcs_nickname>>." Tanya says before sitting down next to her mother. ...
    scene.text(`"This is ${((s as any).pcs_nickname ?? 0)}." Tanya says before sitting down next to her mother. You have the feeling that you are expected to keep standing.`);
  } else {
    if (((s as any).nichHireMode ?? 0) === 2) {
      // TODO-QSP: dynamic text: "This is <<$pcs_nickname>>, the girl I told you about." Tanya says before sittin...
      scene.text(`"This is ${((s as any).pcs_nickname ?? 0)}, the girl I told you about." Tanya says before sitting down next to her mother. You have the feeling that you are expected to keep standing.`);
    }
  }
  if (qspFunc(s, 'body_din', 'pregnancyVisibility', 0, 'nude') === 1) {
    scene.text('Nicholas only takes a short look at you.');
    scene.text('"I am sorry, but I can\'t have a pregnant woman be my maid. You might apply again once you have given birth. If the position is still open then."');
    if (((s as any).thinkpreg ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
      scene.text('Pregnant? He can\'t be serious! You are not pregnant!');
    }
    scene.text('You are escorted out of the apartment building.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  }
  if (((s as any).PCloInhibit ?? 0) > 20) {
    (s as any).nichGalaOpinion = 1;
    if (((s as any).nichHireMode ?? 0) === 1) {
      scene.text('Gala look at your uniform disparagingly. "Nicholas, what did you say you wanted the new maid to wear? This girl looks like a hooker."');
      // TODO-QSP: dynamic text: "The rule is to wear a maid uniform. If <<$pcs_nickname>> is comfortable showing...
      scene.text(`"The rule is to wear a maid uniform. If ${((s as any).pcs_nickname ?? 0)} is comfortable showing her skin we won't judge her." Nicholas' voice is friendly but also commands authority.`);
    } else {
      if (((s as any).nichHireMode ?? 0) === 2) {
        scene.text('Gala look at your uniform disparagingly. "Tanya, what did you tell this girl we would hire her as? Did you tell her to dress like a hooker?"');
        scene.text('Tanya squirms a little and her head turns red "Of course not…"');
        // TODO-QSP: dynamic text: Nicholas raises his hand. The gesture is subtle. Nevertheless it immediately sil...
        scene.text(`Nicholas raises his hand. The gesture is subtle. Nevertheless it immediately silences both women. "The rule is to wear a maid uniform. If ${((s as any).pcs_nickname ?? 0)} is comfortable showing her skin we won't judge her." Nicholas' voice is friendly but also commands authority.`);
      }
    }
    scene.text('Gala nods though it\'s clear that she does not agree with her husband.');
  } else {
    if (((s as any).pcs_apprnc ?? 0) >= 120) {
      scene.text('Gala leans forward to take a closer look at you. "She is gorgeous."');
      scene.text('"Maybe so. But that\'s not the reason we consider hiring her." Nicholas\' voice is friendly but also commands authority.');
      scene.text('Gala nods though it\'s clear that she does not completely believe her husband.');
    } else {
      scene.text('Gala leans forward to take a closer look at you. "Finally a girl who looks like a real maid. I was afraid you would present us with yet another slut."');
      scene.text('"I don\'t think Katinka was a slut." Tanya protests.');
      scene.text('Nicholas raises his hand. The gesture is subtle. Nevertheless it immediately silences both women. "This is not the time to discuss that matter." Nicholas\' voice is friendly but also commands authority.');
      scene.text('Gala nods though it\'s clear that she does not agree with her husband.');
    }
  }
  scene.text('Nicholas stands up and walks around you, inspecting your from every side.');
  if (((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > (Math.floor(Math.random() * 4) + 2)) {
    scene.text('Whether it\'s a whiff of the smell or something he spotted - the cum on you cannot escape his senses; he wrinkles his nose and you can see is expression harden.');
    scene.text('"I cannot believe you have the audacity to come before me like a prostitute after a busy night. Is that how you intend to leave a good impression with me?" He doesn\'t give you time to respond, dismissively waving his hand: "I won\'t hire anybody who can\'t even clean herself up. Get out!"');
    scene.text('You are escorted out of the apartment building.');
    (s as any).nichWork = 4;
    return;
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  }
  (s as any).nichImperfections = 0;
  if (((s as any).PShoHeels ?? 0) < 4) {
    (s as any).nichImperfections = ((s as any).nichImperfections ?? 0) + (1);
    scene.text('He makes a nod in the direction of your feet.');
    scene.text('"I do understand that wearing heels may cause discomfort. Especially while doing manual labor. But as a maid that is something you have to get comfortable with."');
  } else {
    if (((s as any).PShoHeels ?? 0) >= 5) {
      scene.text('He makes a nod in the direction of your feet.');
      scene.text('"I hope you are able to work in these heels. I approve of your choice of footwear but there is no sense in wearing these shoes if you can\'t perform to my satisfaction."');
    }
  }
  if (((s as any).lashair ?? 0) !== 1  &&  ((s as any).pcs_pubes ?? 0) > 3  ||  ((s as any).pcs_leghair ?? 0) > 3) {
    (s as any).nichImperfections = ((s as any).nichImperfections ?? 0) + (1);
    scene.text('"Are your legs, armpits and sex clean-shaved?"');
    scene.text('Looking down and realizing that you are, in fact, not, you shake your head no, and he nods gravely.');
    scene.text('"I expect my maids to have nothing short of a perfect personal hygiene", he states. "If you can\'t take care of yourself, how are you going to care for this household? You will take care of this if we hire you."');
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    (s as any).nichImperfections = ((s as any).nichImperfections ?? 0) + (1);
    scene.text('Of course, he cannot miss the fact that your hair is tangled and uncombed. He almost imperceptibly shakes his head at you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I expect from my maids what I expect from all of my employee...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I expect from my maids what I expect from all of my employees, and what they can expect of me: An immaculate appearance that commands respect, for you, for me, for my company, for my family. If you want to work for us you will start taking care of your hair."`);
  }
  if ((!((s as any).nichImperfections ?? 0))) {
    scene.text('Unable to find anything to criticize, he gives you an approving nod.');
    // TODO-QSP: dynamic text: "The uniform suits you, <<$pcs_nickname>>, and it seems you know how to take car...
    scene.text(`"The uniform suits you, ${((s as any).pcs_nickname ?? 0)}, and it seems you know how to take care of your appearance. Good."`);
  }
  if (((s as any).nichHireMode ?? 0) === 1) {
    scene.text('He sits back down and takes a look at your referral. Then he looks at the two women sitting next to him. Both of them shrug.');
  } else {
    if (((s as any).nichHireMode ?? 0) === 2) {
      scene.text('He sits back down. "Tanya told me that you will do a good job as our maid. And I trust her judgment." He takes a look at the two women sitting next to him. Tanya beams back while Gala shrugs.');
    }
  }
  scene.text('"Well then. In the name of my family I would like to offer you the job as our live-in maid. There are a few rules you should be aware of:');
  scene.text('1. You have to look presentable at all times. During work you will wear your uniform.');
  scene.text('2. Your job is to clean the apartment, to buy groceries and to prepare breakfast. Sometimes we will have special requests which you are also required to follow.');
  scene.text('3. You have your own bedroom and a personal bathroom. Every other room is your working place only and you will always act and be treated as a maid there.');
  scene.text('4. You will work from Thursday to Tuesday. Once your probation is over Wednesday will be your free day.');
  // TODO-QSP: dynamic text: 5. Your payment is <<$func('money', 'string_profit', 10000)>> each month. I will...
  scene.text(`5. Your payment is ${qspFunc(s, 'money', 'string_profit', 10000)} each month. I will transfer the money to your bank account at the first day of each month.`);
  if (((s as any).day ?? 0) > 24) {
    // TODO-QSP: dynamic text: Since only a few days of this month remain your first salary will be <<$func('mo...
    scene.text(`Since only a few days of this month remain your first salary will be ${qspFunc(s, 'money', 'string_profit', 2500)}.`);
    (s as any).nichSalaryNext = 2500;
  } else {
    if (((s as any).day ?? 0) > 15) {
      // TODO-QSP: dynamic text: Since you start in the middle of the month your first salary will be <<$func('mo...
      scene.text(`Since you start in the middle of the month your first salary will be ${qspFunc(s, 'money', 'string_profit', 5000)}.`);
      (s as any).nichSalaryNext = 5000;
    } else {
      (s as any).nichSalaryNext = 10000;
    }
  }
  scene.text('6. You will call me Master Nicholas, my wife is Mistress Gala and from now on Tanya is Miss Tanya to you. You will also curtsy when you approach one of us.');
  scene.text('7. Starting tomorrow you are on probation. You will do all your chores during the day and report to me in the evening. If you do everything to my satisfaction for three days I will formally employ you.');
  scene.text('Do you accept these conditions?"');
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'nichUtil', 'hired');
    scene.text('"I do, Master Nicholas."');
    scene.text('"Good. Your work will start tomorrow. You are dismissed for the evening. Tanya will show you your room."');
    if (((s as any).nichHireMode ?? 0) === 1) {
      // TODO-QSP: dynamic text: Tanya stands up. She looks not too excited. "Of course. Follow me, <<$pcs_nickna...
      scene.text(`Tanya stands up. She looks not too excited. "Of course. Follow me, ${((s as any).pcs_nickname ?? 0)}!"`);
    } else {
      if (((s as any).nichHireMode ?? 0) === 2) {
        // TODO-QSP: dynamic text: Tanya jumps up. She looks excited. "Of course. Follow me, <<$pcs_nickname>>!"
        scene.text(`Tanya jumps up. She looks excited. "Of course. Follow me, ${((s as any).pcs_nickname ?? 0)}!"`);
      }
    }
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    if (((s as any).nichHireMode ?? 0) === 2) {
      scene.img('images/characters/city/tanya/bedroom_servant0.jpg');
    }
    scene.text('She leads you to your new room.');
    scene.text('It has a small double bed, a wardrobe, a desk and enough free space for doing exercises. A door leads to your personal bathroom.');
    if (((s as any).nichHireMode ?? 0) === 1) {
      scene.text('After showing you around your tiny new home she leaves you.');
      scene.actions([
        { label: 'Continue', goto: ['nichBedroomServant', ''] },
      ]);
    } else {
      if (((s as any).nichHireMode ?? 0) === 2) {
        scene.text('After showing you around your tiny new home she sits down on your bed.');
        scene.text('"Do I really have to call you Miss Tanya now, Miss Tanya?"');
        scene.text('She laughs out. "No, of course not. Only when Nicholas is around. Following the \'protocol\' is very important to him."');
        scene.text('She drives her hand over the fabric of your duvet cover. Looking at you she bites down on her lower lip. "You\'re looking hot in this uniform…" You feel like she is undressing you with her eyes.');
        scene.actions([
          { label: 'Fuck her', goto: ['nichTanya', 'sexL'] },
          { label: 'Not in the mood', handler: (st: GameState) => {
    scene.text('"Sorry Tanya, but I\'m not in the mood right now. It was a very stressful day."');
    scene.text('"I understand." She jumps up and gives you a hug before heading for the door. "If you change your mind just come over to my room." With a wink she leaves and closes the door behind her.');
    scene.actions([
      { label: 'Continue', goto: ['nichBedroomServant', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    scene.text('"I… Uh, I don\'t know if this is right for me", you stutter.');
    scene.text('Nicholas seems surprised and annoyed - he most likely isn\'t used to people just telling him they changed their mind at the very last second - but he maintains a friendly face and simply states: "That is unfortunate, but I\'m sure you have your reasons."');
    if (((s as any).nichHireMode ?? 0) === 2) {
      scene.text('Tanya, however, looks livid. She doesn\'t say a word, her lips so tightly pressed together she probably wouldn\'t be able to say anything without yelling, but her silence says more than her screams possibly could: You dealt severe damage to your relationship with her by making her look stupid like this.');
      scene.text('As you excuse yourself, turn and quietly leave the apartment, you realize that you will have to put some effort into restoring Tanya\'s friendship with you… if you can save it at all.');
      qspCall(s, 'npc_relationship', 'set', 'A218', 1);
      (s as any).nichWork = 0;
      (s as any).nichJobRefused = 1;
      (s as any).nichJobRefusedTReact = 1;
    }
    scene.actions([
      { label: 'Leave now before you can do anymore damage', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVisitTanya(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichWork ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['nichApartment', 'agreed_to_job'] }]);
  } else {
    if (((s as any).nichTanya ?? 0)?.['FuckCounter'] > (Math.floor(Math.random() * 4) + 15)  &&  ((s as any).nichJobRefused ?? 0) < 1  &&  ((s as any).nichWork ?? 0) === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility', 0, 'nude') === 0) {
      scene.actions([{ label: 'Continue', goto: ['nichApartment', 'job_offer'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['nichApartment', 'casual_visit'] }]);
    }
  }
  scene.build();
}

function enterAgreedToJob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A218'] < 50) {
    qspCall(s, 'npc_relationship', 'modify', 'A218', Math.floor(Math.random() * 2) + 1);
  }
  if (((s as any).nichTanya ?? 0)?.['FuckLast'] === ((s as any).daystart ?? 0)) {
    scene.text('Now that the immediate lust is sated and you\'re both enjoying your postcoital bliss, you rest naked in each other\'s arms.');
    if ((!((s as any).PMaid ?? 0))) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I really enjoy this. But I kind of promised to my parents th...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I really enjoy this. But I kind of promised to my parents that you will apply for the maid job. I really need you to quit your current job."`);
      scene.text('You promise her to do it as soon as possible before putting your uniform back on.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I really enjoy this. But I kind of promised to my parents th...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I really enjoy this. But I kind of promised to my parents that you will apply for the maid job. I really need you to wear a maid uniform the next time you come over."`);
      scene.text('You promise her to do so before putting your clothes back on.');
    }
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_center', ''] },
    ]);
  } else {
    if (((s as any).PMaid ?? 0) === 1) {
      // TODO-QSP: dynamic text: When Tanya opens the door she takes a few seconds to admire your look. "Wow, <<$...
      scene.text(`When Tanya opens the door she takes a few seconds to admire your look. "Wow, ${((s as any).pcs_nickname ?? 0)}, this uniform really suits you. How does it feel?"`);
      scene.actions([
        { label: 'Great', handler: (st: GameState) => {
    scene.text('"Good, I guess. I think I could really get used to wearing it."');
    scene.text('Tanya smiles brightly. That\'s great, because you will need to wear it a lot.');
    scene.text('"Come on now. My parents are waiting in the living room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['nichApartment', 'hiring'] },
    ]);
  } },
        { label: 'Embarrassing', handler: (st: GameState) => {
    scene.text('"I don\'t know. It felt a little bit embarrassing walking through the streets dressed like this."');
    scene.text('Tanya smiles comfortingly. "Don\'t worry. You will get used to it."');
    scene.text('"Come on now. My parents are waiting in the living room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['nichApartment', 'hiring'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).PMaid ?? 0)) {
        // TODO-QSP: dynamic text: When Tanya opens the door she takes a few seconds to admire your look. "Wow, <<$...
        scene.text(`When Tanya opens the door she takes a few seconds to admire your look. "Wow, ${((s as any).pcs_nickname ?? 0)}, this uniform really suits you. Are you ready to have your interview with my parents?"`);
        scene.text('"Not yet. I still have to quit my current job."');
        scene.text('Tanya looks a little bit disappointed but then she smirks at you. "Oh, I understand. You are wearing this outfit for me and not for my parents."');
        scene.text('Not giving you a chance to say a word, she leads you to her room and pushes you on her bed.');
        scene.actions([
          { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
        ]);
      } else {
        if ((((s as any).work ?? 0) === 0  ||  ((s as any).cheatVars ?? 0)?.['work'] === 0)) {
          scene.text('When Tanya opens the door she looks a little be disappointed.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I told you that you need to wear a maid uniform when you mee...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I told you that you need to wear a maid uniform when you meet my parents. Remember?"`);
          scene.text('She bites down on her lip. "But since you are here we could have some fun as well."');
          scene.text('Not giving you a chance to say a word, she leads you to her room and pushes you on her bed.');
          scene.actions([
            { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/door_01.jpg');
  scene.text('Tanya opens the door for you. As you look into her eyes, they seem to be sparkling with excitement, and her entire face lights up as she smiles at you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, it's so good you are here. I have the best idea ever! Our ma...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, it's so good you are here. I have the best idea ever! Our maid left us recently, and my stepfather is looking for a replacement. I could suggest <b>you</b> to him! He pays really well, and all you gotta do is tidy up a bit, but you would be able to live right here with us!"`);
  scene.text('Tanya is so giddy that you almost don\'t dare to voice your concerns: "And where do you get the idea that your stepfather would employ me? I\'ve never worked as a maid before and I\'m sure that, with his kind of money, he could get a much better one."');
  scene.text('"Believe me, if I ask him <i>nicely</i>, he will hire you", Tanya smiles lasciviously.');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    scene.actions([
      { label: 'Refuse (still at school)', handler: (st: GameState) => {
    (s as any).nichJobRefused = 1;
    scene.text('"I\'m still at school Tanya. I can\'t work here full time and go to school can I? It is sweet that you want me to be here all the time though."');
    scene.text('"Damn that\'s a good point, I was so keen to get you to work here I forgot that you\'re still at school. Maybe when you graduate? Just talk to me about it if you can do it in the future, OK? I can convince Dad to get you the job" She says with an exaggerated wink.');
    scene.text('Without saying another word she takes your hand and leads you to her room.');
    scene.actions([
      { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).university ?? 0)?.['student'] === 1) {
      scene.actions([
        { label: 'Refuse (still at school)', handler: (st: GameState) => {
    (s as any).nichJobRefused = 1;
    scene.text('"I\'m at uni Tanya, as you know. I can\'t work here full time and do a degree, it would be too much. It is sweet that you want me to be here all the time though."');
    scene.text('"Damn that\'s a good point, I was so keen to get you to work here I didn\'t even think about your degree course. A maid with a degree might be over qualified, but if you did ever want to do it I can convince Dad to get you the job" She says with an exaggerated wink.');
    scene.text('Without saying another word she takes your hand and leads you to her room.');
    scene.actions([
      { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A218', (-5));
    ((s as any).nichTanya ?? {})['FuckLast'] = ((s as any).daystart ?? 0);
    scene.text('"I don\'t know about this, Tanya", you say carefully. "I mean, can you imagine me cleaning up and cooking, day in and day out? It doesn\'t sound like me."');
    scene.text('Her joyful expression falters and is quickly replaced with a cold, angry stare. "You just don\'t want to be around me."');
    scene.text('"No!", you exclaim, "No, of course I\'d love to be around yo-"');
    scene.text('She cuts you off: "Then why are you telling me this shit?! You could live with me, with us, and you\'d be getting free money for dusting off a table or something!"');
    scene.text('You realize you can\'t really reach her with logic while she\'s in this mood, so you try to appease her. "Look, I… It\'s just really sudden, and I need time to think about it. It sounds great, but if I offered you something that would change your life, you would want to have some time to think too, right?"');
    scene.text('Tanya still doesn\'t look happy about your refusal, but her anger seems to dissipate somewhat and she looks away. "Yeah, sure, whatever." You think you can see tears in her eyes when she turns her back on you and says: "I\'ve gotta go do something now."');
    scene.text('You understand immediately: "Yeah, okay, I had to leave anyway. Talk to you soon?"');
    scene.text('"Sure", is the last thing you hear from her that day.');
    (s as any).nichJobRefused = 1;
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_center', ''] },
    ]);
  } },
        { label: 'Agree', goto: ['nichTanya', 'hire'] },
        { label: 'Maybe later', handler: (st: GameState) => {
    (s as any).nichJobRefused = 2;
    scene.text('"Of course I\'d love to be able to spend more time here with you but I have other commitments and I can\'t just drop them so how about if circumstances change I get back to you? For now let\'s leave things as they are and just enjoy our times together."');
    scene.text('"So maybe in the future? Talk to me when you can start working here. We seem to get through maids very quickly for some reason."');
    scene.text('Without saying another word she takes your hand and leads you to her room.');
    scene.actions([
      { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterCasualVisit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/door_01.jpg');
  if (((s as any).nichJobRefusedTReact ?? 0) === 1) {
    // TODO-QSP: dynamic text: Tanya opens the door looking angrily at you. "You got some nerve showing up like...
    scene.text(`Tanya opens the door looking angrily at you. "You got some nerve showing up like nothing happened, ${((s as any).pcs_nickname ?? 0)}! Do you even realize how I felt after you changed your mind about working for us in the very last second?!"`);
    scene.text('She bites down on her lip. Apparently her lust for you is bigger than her anger.');
    scene.text('"Well, since you are here you could as well come in. Maybe you find a good way to apologize."');
  } else {
    if (((s as any).nichTanya ?? 0)?.['FuckLast'] === ((s as any).daystart ?? 0) - 1) {
      // TODO-QSP: dynamic text: Tanya opens the door and smiles warmly at you. "Hello <<$pcs_nickname>>! I didn'...
      scene.text(`Tanya opens the door and smiles warmly at you. "Hello ${((s as any).pcs_nickname ?? 0)}! I didn't expect to see you so soon again."`);
    } else {
      if (((s as any).nichTanya ?? 0)?.['FuckLast'] > ((s as any).daystart ?? 0) - 8) {
        // TODO-QSP: dynamic text: Tanya opens the door and smiles warmly at you. "Hello <<$pcs_nickname>>! I was h...
        scene.text(`Tanya opens the door and smiles warmly at you. "Hello ${((s as any).pcs_nickname ?? 0)}! I was hoping you would show up today."`);
      } else {
        if (((s as any).nichTanya ?? 0)?.['FuckLast'] > ((s as any).daystart ?? 0) - 30) {
          // TODO-QSP: dynamic text: Tanya opens the door and smiles warmly at you. "Hello <<$pcs_nickname>>! Where h...
          scene.text(`Tanya opens the door and smiles warmly at you. "Hello ${((s as any).pcs_nickname ?? 0)}! Where have you been in the past weeks? I was beginning to wonder if you had forgotten me."`);
        } else {
          // TODO-QSP: dynamic text: Tanya opens the door and smiles warmly at you. "Hello <<$pcs_nickname>>! After a...
          scene.text(`Tanya opens the door and smiles warmly at you. "Hello ${((s as any).pcs_nickname ?? 0)}! After all these weeks of not hearing anything from you I was beginning to wonder if you would show up again. I'm very happy you did."`);
        }
      }
    }
  }
  scene.text('Without saying another word she takes your hand and leads you to her room.');
  if ((((s as any).nichTanya ?? 0)?.['DateCounter'] > 0  ||  ((s as any).nichJobRefused ?? 0) === 1)  &&  (((s as any).nichTanya ?? 0)?.['DateLast'] !== ((s as any).daystart ?? 0)  ||  ((s as any).nichDebug ?? 0) === 1)) {
    qspCall(s, 'nichTanya', 'date_proposal');
  }
  scene.actions([
    { label: 'Have sex with Tanya', goto: ['nichTanya', 'sexL'] },
    { label: 'Chat with Tanya', goto: ['nichTanya', 'chat'] },
  ]);
  scene.build();
}

function enterRemoveNote(s: GameState, scene: SceneBuilder): void {
  (s as any).nichNote = 0;
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  scene.build();
}

function enterMaidJobReHire(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Nicholas\' Apartment</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/hallway.jpg');
  scene.text('Your memory leads you to a very expensive looking apartment building you once grew accustomed to. A porter stands at the door, inspecting you while you come closer.');
  // TODO-QSP: dynamic text: "Hi," you greet the familiar man. "Is '+$npc_nickname['A52']+' home?"
  scene.text('"Hi," you greet the familiar man. "Is \'+$npc_nickname[\'A52\']+\' home?"');
  // TODO-QSP: dynamic text: The man's eyes light up as he reckognises you. "Hello, Miss <<$pcs_lastname>>! W...
  scene.text(`The man's eyes light up as he reckognises you. "Hello, Miss ${((s as any).pcs_lastname ?? 0)}! What brings you here?"`);
  // TODO-QSP: dynamic text: "I am here to see if '+$npc_nickname['A52']+' still needs a maid," you answer po...
  scene.text('"I am here to see if \'+$npc_nickname[\'A52\']+\' still needs a maid," you answer politely.');
  scene.text('"I see. Master Nicholas is currently in his study. I am sure he will be glad to see you," he replies as he lets you in.');
  scene.actions([
    { label: 'Head to the study.', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/01.jpg');
    scene.text('As you enter the apartment, a happy face greets you.');
    scene.text('In front of you stands a cute girl smiling at you. It\'s Tanya!');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I heard a new maid was coming, is that you? This is great! N...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}! I heard a new maid was coming, is that you? This is great! Nicholas is in the study, see you later!"`);
    scene.actions([
      { label: 'Get changed into the maid outfit and go to the study.', goto: ['nichStudy', 'reHire'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'jobInterview':
      enterJobInterview(s, scene);
      break;
    case 'hiring':
      enterHiring(s, scene);
      break;
    case 'visitTanya':
      enterVisitTanya(s, scene);
      break;
    case 'agreed_to_job':
      enterAgreedToJob(s, scene);
      break;
    case 'job_offer':
      enterJobOffer(s, scene);
      break;
    case 'casual_visit':
      enterCasualVisit(s, scene);
      break;
    case 'removeNote':
      enterRemoveNote(s, scene);
      break;
    case 'maidJobReHire':
      enterMaidJobReHire(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichApartment: LocationDef = {
  name: 'nichApartment',
  title: '<center><b>Nicholas\' Apartment</b></center>',
  region: 'other',
  locationType: 'event',
  description: ['You are standing in a luxurious and spacious city center home.'],
  enter: enter,
};
