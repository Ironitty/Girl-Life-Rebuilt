import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  scene.img(`images/locations/shared/abduction/girltocar${((s as any).i ?? 0)}.jpg`);
  scene.text('You suddenly hear what sounds like someone rushing up behind you, but before you can turn and look, you feel something hit your head hard. You stumble as your vision goes black…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['abduction', 'abdCarTrunk'] },
  ]);
  scene.build();
}

function enterAbdCarTrunk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/trunkint1.jpg');
  scene.text('You wake up in a very tight, dark place. You quickly realize that you\'re in the trunk of a moving car.');
  scene.text('You try to kick the walls with your feet, but after a while you can see that it\'s pointless.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoomFirstEntry'] },
  ]);
  scene.build();
}

function enterAbdRoomFirstEntry(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/downstairs1.jpg');
  scene.text('The car stops and you hear the sound of someone walking outside before the trunk opens up.');
  scene.text('Before your eyes adjust to the bright flow of daylight, you\'re hoisted up by a strong man and carried into a house.');
  scene.text('He carries you downstairs into the basement.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoomFirstChaining'] },
  ]);
  scene.build();
}

function enterAbdRoomFirstChaining(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/abduction/sex/shackled${((s as any).i ?? 0)}.jpg`);
  scene.text('You\'re thrown onto a dirty bed. The man forcibly undresses you before shackling your wrists and ankles. He then slaps a collar around your neck before chaining you to the wall.');
  scene.text('"You must have really pissed the wrong person off girl," he says.');
  scene.text('"What is this place? What are you going to do to me?" you ask.');
  scene.text('"This is where girls are brought to be trained as sex slaves!"');
  scene.text('"… But… How… No…"');
  scene.text('"Shut up, slut! Usually, we torture you for fun and for as long as we want. Once you break, we sell you to the highest bidder."');
  scene.text('"You can\'t do this to me! It\'s illegal!"');
  scene.text('"Ha! Who do you think our best customers are? Slimy politicians, corrupt police officers, sleazy businessmen… We have our cover, so you should shut up and get used to it!"');
  scene.text('The man leaves without saying another word as you tearfully sob and yell for him to come back.');
  qspCall(s, 'underwear', 'remove');
  (s as any).painkiller_bak = ((s as any).mc_inventory ?? 0)?.['painkillers'];
  (s as any).prezik_bak = ((s as any).mc_inventory ?? 0)?.['equipped_condoms'];
  (s as any).vitamin_bak = ((s as any).mc_inventory ?? 0)?.['vitamins'];
  (s as any).kosmetica_bak = ((s as any).mc_inventory ?? 0)?.['cosmetics'];
  (s as any).lipbalm_bak = ((s as any).mc_inventory ?? 0)?.['lipbalm'];
  (s as any).tampon_bak = ((s as any).mc_inventory ?? 0)?.['tampons'];
  (s as any).shampoo_bak = ((s as any).mc_inventory ?? 0)?.['shampoo'];
  (s as any).stanok_bak = ((s as any).mc_inventory ?? 0)?.['razor'];
  (s as any).deodorant_bak = ((s as any).mc_inventory ?? 0)?.['deodorant'];
  ((s as any).mc_inventory ?? {})['painkillers'] = 0;
  ((s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
  ((s as any).mc_inventory ?? {})['vitamins'] = 0;
  ((s as any).mc_inventory ?? {})['cosmetics'] = 0;
  ((s as any).mc_inventory ?? {})['lipbalm'] = 0;
  ((s as any).mc_inventory ?? {})['tampons'] = 0;
  ((s as any).mc_inventory ?? {})['shampoo'] = 0;
  ((s as any).mc_inventory ?? {})['razor'] = 0;
  ((s as any).mc_inventory ?? {})['deodorant'] = 0;
  if (((s as any).bag ?? 0) === 1) {
    (s as any).bag = 0;
    (s as any).bagtaken = 1;
  }
  (s as any).tabletkishot = Math.floor(Math.random() * 8) + 84;
  (s as any).shotdays = 93;
  (s as any).tabletkicheck = 2;
  (s as any).pillcon = 40000;
  (s as any).broken = 0;
  (s as any).rapeCount = 0;
  (s as any).tortureCount = 0;
  qspCall(s, 'money', 'set', 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'clothing', 'strip');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 1;
  scene.img('images/locations/shared/abduction/basement1.jpg');
  scene.text('You\'re in a dark basement that has only one window and some lights. You\'re chained to the wall like a dog, a collar wrapped tightly around your neck while cold metal shackles dig painfully into your wrists and ankles.');
  scene.text('You can only move a few meters from the wall to reach several things left for you by your captors.');
  (s as any).eventChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).pcs_sleep ?? 0) > 30  &&  ((s as any).eventChance ?? 0) <= 60) {
    scene.actions([
      { label: 'Take a nap (4:00)', goto: ['abduction', 'abdSomeoneComing'] },
    ]);
  } else {
    scene.actions([
      { label: 'Take a nap (4:00)', goto: ['abduction', 'abdSleep'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around', goto: ['abduction', 'abdFood'] },
  ]);
  scene.build();
}

function enterAbdSomeoneComing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/downstairs2.jpg');
  scene.text('You hear the sounds of footsteps that gradually get louder before they reach the top of the stairs.');
  if (((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.img('images/locations/shared/abduction/sex/shave1.jpg');
    scene.text('You are forced to shave yourself.');
    scene.text('You\'re watched the whole time, probably so you don\'t cut yourself or something similar.');
    (s as any).pcs_pubes = 0;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  }
  if (((s as any).broken ?? 0) === 0  &&  ((s as any).rapeCount ?? 0) === 0  &&  ((s as any).tortureCount ?? 0) === 0  &&  (!((s as any).examed ?? 0))) {
    scene.text('The man comes up to you. He grabs your chain and forcibly wraps a blindfold around your head to cover your eyes.');
    scene.text('He leads you up the stairs as you feel a breath of fresh air that sensually caresses your bare skin.');
    scene.actions([
      { label: 'Continue', goto: ['abduction', 'abdExamStart'] },
    ]);
  } else {
    if ((!((s as any).broken ?? 0))) {
      scene.text('You fearfully back away from the man and curl up against the wall, your body trembling in fear of what\'s going to happen next.');
      if (((s as any).rapeCount ?? 0) >= 5) {
        scene.actions([
          { label: 'Plead that you can\'t take any more', goto: ['abduction', 'abdBreak1'] },
        ]);
      }
      scene.actions([
        { label: 'Cower in fear', goto: ['abduction', 'abdRape'] },
      ]);
    }
    (s as any).buyoutChance = (((s as any).broken ?? 0) + ((s as any).tortureCount ?? 0) + ((s as any).rapeCount ?? 0) + ((s as any).abdCustomerCount ?? 0)) - 20;
    (s as any).saleChance = (((s as any).broken ?? 0) + ((s as any).tortureCount ?? 0) + ((s as any).rapeCount ?? 0) + ((s as any).abdCustomerCount ?? 0)) - 10;
    if (((s as any).broken ?? 0) > 0) {
      (s as any).saleChanceRand = Math.floor(Math.random() * 100) + 1;
      (s as any).customerChance = Math.floor(Math.random() * 100) + 1;
      (s as any).painkillerChance = Math.floor(Math.random() * 100) + 1;
      (s as any).buyoutChanceRand = Math.floor(Math.random() * 100) + 1;
      if (((s as any).broken ?? 0) < 10) {
        scene.actions([
          { label: 'Welcome back, Master', goto: ['abduction', 'abdBrokenAsk'] },
        ]);
      } else {
        if ((((s as any).broken ?? 0) >= 10  &&  ((s as any).abdTools ?? 0) === 0)) {
          scene.actions([
            { label: 'Welcome back, Master', goto: ['abduction', 'abdBrokenGiveTools'] },
          ]);
        } else {
          if (((s as any).customerChance ?? 0) <= 50) {
            (s as any).abdCustomerCount = ((s as any).abdCustomerCount ?? 0) + (1);
            scene.actions([
              { label: 'Welcome back, Master', goto: ['abductionCustomer', 'abdCustomerGate'] },
            ]);
          } else {
            if (((s as any).abdCustomerCount ?? 0) > 5  &&  ((s as any).buyoutChanceRand ?? 0) <= (2 * ((s as any).buyoutChance ?? 0))) {
              scene.actions([
                { label: 'Welcome back, Master', goto: ['abductionCustomer', 'abdCustomerGateBuyout'] },
              ]);
            } else {
              if (((s as any).abdCustomerCount ?? 0) > 5  &&  ((s as any).saleChanceRand ?? 0) <= (2 * ((s as any).saleChance ?? 0))) {
                scene.text('"I have some good news for you slave."');
                scene.actions([
                  { label: 'Yes Master?', goto: ['abduction', 'abdBeSold'] },
                ]);
              } else {
                if (((s as any).painkillerChance ?? 0) <= 30) {
                  scene.actions([
                    { label: 'Welcome back, Master', goto: ['abduction', 'abdBrokenGivePainkiller'] },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Welcome back, Master', goto: ['abduction', 'abdBrokenAsk'] },
                  ]);
                }
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

function enterAbdExamStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/shared/abduction/examroom.jpg');
  scene.text('Your blindfold is removed and you find yourself in a small room that\'s painted white. The light is very bright and blinds you to the point that you can barely see.');
  scene.text('As your eyes adjust, you see that it\'s some kind of examination room. It distinctly reminds you of a gynecologist\'s office.');
  scene.text('"Sit." the man sternly orders.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['abduction', 'abdExamResist'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Obey', goto: ['abduction', 'abdExamObey'] },
  ]);
  scene.build();
}

function enterAbdExamResist(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/examslap.mp4');
  scene.text('Terrified of what they\'ll do, you start screaming for help and clawing at your collar, trying desperately to escape.');
  scene.text('However, your captor\'s strength, along with your tightly adjusted cuffs, make your attempt to escape futile.');
  scene.text('He yanks roughly on your chain, your collar choking you as he pulls you to the ground in front of him. He slaps your face hard and leaves it stinging with a red handmark across your cheek.');
  scene.text('"You\'re only making it harder bitch!" he yells in your face before effortlessly picking you up and slamming you into the chair, winding you. He removes your shackles before tightly restraining you.');
  scene.text('He then calmly sits down in a chair in the far corner of the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdExam1'] },
  ]);
  scene.build();
}

function enterAbdExamObey(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/examsit.jpg');
  scene.text('Like an obedient slave, you willingly climb up onto the chair as you wonder what perverse things are going to happen to you.');
  scene.text('The man ties you up anyway, probably to make sure you don\'t try to escape after they start. This makes you even more nervous. He also removes your shackles.');
  scene.text('He then calmly sits down in a chair in the far corner of the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdExam1'] },
  ]);
  scene.build();
}

function enterAbdExam1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/exam1.jpg');
  scene.text('A man enters the room dressed like a doctor, wearing a lab coat and suit with a stethoscope around his neck. He walks as if he\'s unconcerned about you.');
  scene.text('Obviously, he doesn\'t speak to you, but rather to the man sitting in the chair. "Wow, a nice catch indeed." the doctor exclaims.');
  scene.text('The doctor puts on a pair of rubber gloves and sits down on a small chair in front of you. He looks at your spread legs and what\'s between them.');
  // TODO-QSP: dynamic text: He continues to speak to the man. "She's about <<age>> years old."
  scene.text(`He continues to speak to the man. "She's about ${((s as any).age ?? 0)} years old."`);
  if (((s as any).age ?? 0) < 18) {
    scene.text('"Geez, you like them young, don\'t you?"');
    scene.text('"Who wants to fuck some old meat? The customers just love how the young ones squeal." the man replies.');
    scene.text('"Heh, I see…" He continues with the usual report of his findings.');
  }
  scene.text('He continues to examine every inch of you. "Regarding her usage levels:"');
  // TODO-QSP: dynamic text: He shines a light in your mouth. "Her throat is <<$throattipe>>."
  scene.text(`He shines a light in your mouth. "Her throat is ${((s as any).throattipe ?? 0)}."`);
  // TODO-QSP: dynamic text: Next, he prods a finger around in your ass. "And her ass is <<$anustipe>>."
  scene.text(`Next, he prods a finger around in your ass. "And her ass is ${((s as any).anustipe ?? 0)}."`);
  scene.text('He pulls his finger out of your ass and finally reaches for your pussy.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('"Oh, you\'ll like this. Her pussy is fresh. We have a virgin here."');
    scene.text('"Looks like we hit the jackpot once again dear Doctor," the man replies with a happy smile.');
  } else {
    // TODO-QSP: dynamic text: "And her pussy is <<$vaginatipe>>.
    scene.text(`"And her pussy is ${((s as any).vaginatipe ?? 0)}.`);
  }
  scene.text('The doctor finally takes his hands off of you and prepares several needles filled with unknown fluids.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdExam2'] },
  ]);
  scene.build();
}

function enterAbdExam2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/exam2.jpg');
  scene.text('"Listen here, little slave. We\'ll make sure that you\'re healthy and ready to be trained."');
  scene.text('He quickly injects all the solutions into one of your arms. The needle pricks your skin to hit the vein in the crook of your arm.');
  scene.text('"The examination is now over."');
  scene.text('The doctor leaves the room and the man puts your shackles and blindfold back on before leading you back down to the basement.');
  qspCall(s, 'medical_din', 'healSTDs');
  (s as any).examed = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdBrokenGiveTools(s: GameState, scene: SceneBuilder): void {
  (s as any).abdTools = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhoredildosbag.jpg');
  scene.text('Your master approaches you. It looks like he\'s holding something big in his hands.');
  scene.text('When he steps into the light, you can see that he\'s holding some very large dildos.');
  scene.text('"Hello, my slave. I have a gift for you."');
  scene.text('You remain quiet, fearful thoughts of having these dildos shoved anywhere into your body making you feel sick.');
  scene.text('"Aren\'t you glad whore? These dildos are here for you to train on, so you can perform better in a "live" situation."');
  scene.text('"Uhmm… thank you Master."');
  scene.text('He puts them down next to your bed and leaves without saying another word.');
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 0) {
      ((s as any).mc_inventory ?? {})['breast_pump'] = 1;
    }
    scene.text('In the bottom of the box, under the various dildos, you also find a working breast pump.');
    if (((s as any).lact_engorgement ?? 0) > 3) {
      scene.text('You\'re relieved that you can now empty your painfully full breasts.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdBreak1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/questioned1.jpg');
  scene.text('"Please… please! I can\'t bear this anymore! I\'ll do anything, just let me go!" you tearfully plead.');
  scene.text('"You don\'t understand bitch. You only leave this place in one of two ways. Either as a sex slave - or as a corpse."');
  scene.text('"But…"');
  scene.text('"You\'ll be sold to someone as their slave. If you won\'t accept that, then you will be utilized for the more perverted needs of our customers. Those girls usually don\'t survive for long.');
  scene.text('A sense of dread washes over you as your mind races to think of what horrors might await you.');
  scene.text('"Now, show me what a good slave you are."');
  (s as any).tortureType = Math.floor(Math.random() * 3) + 1;
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Spit in his face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Spit in his face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['abduction', 'abdTorture'] },
    ]);
  }
  if (((s as any).rapeCount ?? 0) <= 10) {
    scene.actions([
      { label: 'Say nothing and crawl back to your bed', goto: ['abduction', 'abdRape'] },
    ]);
  }
  if (((s as any).tortureCount ?? 0) >= 5  ||  ((s as any).rapeCount ?? 0) >= 10) {
    if (((s as any).broken ?? 0) > 0) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.actions([
          { label: 'Please fuck my pussy, Master', goto: ['abduction', 'abdBreak2FuckA1'] },
        ]);
      }
      scene.actions([
        { label: 'Please fuck my mouth Master', goto: ['abduction', 'abdBreak2FuckB1'] },
      ]);
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.actions([
          { label: 'You… you are my master. Please accept my pussy for your use…', goto: ['abduction', 'abdBreak2FuckA1'] },
        ]);
      }
      scene.actions([
        { label: 'You… you are my master. Please accept my mouth for your use…', goto: ['abduction', 'abdBreak2FuckB1'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdBrokenGivePainkiller(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/pill1.jpg');
  scene.text('Your master approaches you. "You have been a good slave so far. Good slaves are rewarded."');
  scene.text('He hands you a single painkiller pill.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse and keep your mouth shut [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse and keep your mouth shut [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['abduction', 'abdBrokenGivePainkillerNo'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take and swallow it', goto: ['abduction', 'abdBrokenGivePainkillerYes'] },
  ]);
  scene.build();
}

function enterAbdBrokenGivePainkillerYes(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/pill2.jpg');
  scene.text('You happily take the pill and swallow it immediately.');
  qspCall(s, 'stat', '');
  (s as any).painkillerGive = Math.floor(Math.random() * 100) + 1;
  if (((s as any).painkillerGive ?? 0) > 20  &&  ((s as any).broken ?? 0) >= 10) {
    scene.text('Your master nods in approval and hands you a small pack of painkillers.');
    ((s as any).mc_inventory ?? {})['painkillers'] = (((s as any).mc_inventory ?? {})['painkillers'] ?? 0) + (6);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'How can I thank you, Master?', goto: ['abduction', 'abdBrokenAsk'] },
  ]);
  scene.build();
}

function enterAbdBrokenGivePainkillerNo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/pill1.mp4');
  scene.text('You see anger flash across your master\'s face. "Refusing a gift? It seems like this slave needs to be reminded of her place."');
  scene.text('He ties you down on top of the table and secures your head. Some devious device is attached to your nose which pulls your head backwards and forces you to open your mouth slightly.');
  scene.text('Your master takes a clamp and pulls your tongue out. It tightly and painfully squeezes it. He then secures the pill on top of a dildo and pushes the tip down your throat.');
  scene.text('Your gag reflex activates, causing you to gag and choke, but he doesn\'t remove the dildo for as long as you try to throw up.');
  scene.text('You almost pass out. Everything goes dark, and at that moment he removes it.');
  scene.text('You have been forced to swallow the pill, but your master still looks very angry.');
  qspCall(s, 'drugs', 'painkiller', 'gift');
  (s as any).broken = ((s as any).broken ?? 0) - (5);
  ((s as any).pain ?? {})['tongue'] = (((s as any).pain ?? {})['tongue'] ?? 0) + (5);
  ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (5);
  ((s as any).pain ?? {})['nose'] = (((s as any).pain ?? {})['nose'] ?? 0) + (5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTorture'] },
  ]);
  scene.build();
}

function enterAbdBrokenAsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('Your master responds. "Very good. What do you want me to do to you, slave?"');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.actions([
      { label: 'Please fuck my pussy, Master', goto: ['abduction', 'abdBreak2FuckA1'] },
    ]);
  }
  if (((s as any).broken ?? 0) >= 5) {
    scene.actions([
      { label: 'Please rape me, Master', goto: ['abduction', 'abdRape'] },
    ]);
  }
  if (((s as any).broken ?? 0) >= 10) {
    scene.actions([
      { label: 'Please punish me, Master', goto: ['abduction', 'abdTorture'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Please fuck my mouth, Master', goto: ['abduction', 'abdBreak2FuckB1'] },
  ]);
  scene.build();
}

function enterAbdBreak2FuckA1(s: GameState, scene: SceneBuilder): void {
  (s as any).broken = ((s as any).broken ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', '', '', 'Master', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
  scene.img('images/locations/shared/abduction/sex/brokena1.jpg');
  scene.text('Your tormentor unchains you and throws you onto your dirty bed.');
  scene.text('Spreading your legs wide apart, you spit on your hand and smear it on your pussy. "Come and take me, Master."');
  scene.text('"I like my bitches restrained!" your master says and ties your hands and feet together, securing your position.');
  scene.text('His dick penetrates your pussy easily with the saliva doing its job.');
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdBreak2FuckA2'] },
  ]);
  scene.build();
}

function enterAbdBreak2FuckA2(s: GameState, scene: SceneBuilder): void {
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'mouth', 'Master', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
  scene.img('images/locations/shared/abduction/sex/brokena2.jpg');
  scene.text('Fucking you wildly for some time, your master stops right before he orgasms.');
  scene.text('He unties your hands and legs, then ties your hands behind your back.');
  scene.text('Knowing what he expects you to do, you open your mouth wide and await his cock.');
  scene.text('After some mouthfucking and gagging, he cums in your mouth.');
  if (((s as any).broken ?? 0) === 1) {
    scene.text('"Very good, slave. You\'re on the path to redeeming yourself." Finished with you, he releases your arms to secure you back in your usual location before leaving.');
  }
  (s as any).broken = ((s as any).broken ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdBreak2FuckB1(s: GameState, scene: SceneBuilder): void {
  (s as any).broken = ((s as any).broken ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'mouth', 'Master');
  scene.img('images/locations/shared/abduction/sex/brokenb1.jpg');
  scene.text('Your master unchains you and leads you to a device.');
  scene.text('You can see that it\'s meant to restrain a person in a prone position with their head at the same height as someone\'s crotch.');
  scene.text('You want to please your master, so you lie down on it straight away and dutifully await the attaching of the restraints.');
  scene.text('After your master ties you up, he walks up to your head. Your already open mouth is then roughly fucked by his member.');
  scene.text('When he\'s about to cum, he pulls his dick out and points it towards your face. You stick your tongue out in anticipation. His cum soon splatters across your face and tongue.');
  qspCall(s, 'arousal', 'bj', 20, 'sub', 'bound', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdBreak2FuckB2'] },
  ]);
  scene.build();
}

function enterAbdBreak2FuckB2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (1);
  scene.img('images/locations/shared/abduction/sex/brokenb2.jpg');
  scene.text('Surprisingly, his dick is not wearing out. He moves behind you and starts to penetrate your ass.');
  scene.text('You relax your anus as much as you can, so he enters you quite easily. Just a small hint of pain pulses through you.');
  scene.text('Fucking you furiously for some time, your master cums deep inside you.');
  if (((s as any).broken ?? 0) === 1) {
    scene.text('"Very good, slave. You\'re on the path to redeeming yourself." Finished with you, he releases your arms to secure you back in your usual location before leaving.');
  }
  (s as any).broken = ((s as any).broken ?? 0) + (1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'anus', 'Master');
  qspCall(s, 'arousal', 'anal', 20, 'sub', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdSleep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'forced', 240);
  scene.img('images/locations/shared/abduction/bed1.jpg');
  scene.text('You\'ve slept for several hours, but nightmares have awakened you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdEscape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/cellarwindow1.jpg');
  scene.text('Looking at the only window in the basement, you notice that there\'s a lock on it to prevent your escape.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to break the lock', goto: ['abduction', 'abdEscapeWindow1'] },
    { label: 'Go back to your bed and re-attach your leash to the wall', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdEscapeWindow1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/cellarwindow1.jpg');
  scene.text('You try to loosen the screws locking the window in place.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).breakChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).breakChance ?? 0) <= 50) {
    scene.text('You hear someone slam a door nearby. Maybe it\'s your master returning?');
    scene.text('You\'re close to unscrewing the window! You decide to…');
    scene.actions([
      { label: 'Run back to your bed and reattach your leash to the wall', goto: ['abduction', 'abdSomeoneComing'] },
      { label: 'Try to unscrew it', goto: ['abduction', 'abdEscapeWindow2'] },
    ]);
  } else {
    scene.text('No luck. The window is still screwed in very tight.');
    scene.actions([
      { label: 'Go back', goto: ['abduction', 'abdFood'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdEscapeWindow2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/cellarwindow1.jpg');
  scene.text('You continue in your attempts to break the window.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).breakChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).breakChance ?? 0) <= 90) {
    scene.text('You desperately try to unscrew it, but you run out of time… and luck.');
    scene.text('Your master comes into the basement and catches you running around unleashed. This won\'t end well for you…');
    (s as any).failedEscapeCount = ((s as any).failedEscapeCount ?? 0) + (1);
    scene.actions([
      { label: 'Panic', goto: ['abduction', 'abdTorture'] },
    ]);
  } else {
    scene.text('You did it, and just in time! Before anyone can discover your actions, you manage to loosen the window and pull yourself through it.');
    scene.text('As you land, you see a pile of discarded clothes. It looks like the clothes of 4 or 5 girls, but by luck one of the outfits is yours!');
    if (((s as any).bagtaken ?? 0) === 1) {
      scene.text('Even your handbag is here!');
    }
    scene.actions([
      { label: 'Run away', goto: ['abduction', 'abdEscapeWindow3'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdEscapeWindow3(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 0;
  (s as any).abductionReturned = 1;
  qspCall(s, 'stat', '');
  if (((s as any).bagtaken ?? 0) === 1) {
    (s as any).bag = 1;
    (s as any).bagtaken = 0;
  }
  (s as any).i = Math.floor(Math.random() * 3) + 1;
  qspCall(s, 'underwear', 'wear');
  qspCall(s, 'underwear', 'dispose');
  qspCall(s, 'clothing', 'wear_last_worn');
  qspCall(s, 'shoes', 'wear', 'last_worn');
  qspCall(s, 'purses', 'wear', 'last_worn');
  qspCall(s, 'coats', 'wear', 'last_worn');
  scene.img(`images/locations/shared/abduction/midnowhere${((s as any).i ?? 0)}.jpg`);
  scene.text('Pulling on your clothes as you run, you finally think you\'re far enough away and try to find your bearings.');
  scene.text('Any underwear you had with you is lost, but that\'s a small price to pay for your freedom.');
  scene.text('Looking around, you discover that you\'re in the middle of nowhere.');
  scene.text('Before you in the distance, you see a shimmer of something that could be water.');
  scene.text('If you turn back, you can hear distant noise of what could be a highway.');
  scene.text('On your left, you can see the dust and pollution of what could be a large city.');
  scene.text('You can\'t see anything to your right, but something is pulling you that way…');
  scene.text('You decide to…');
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (50);
  }
  qspCall(s, 'stat', '');
  ((s as any).mc_inventory ?? {})['painkillers'] = ((s as any).painkiller_bak ?? 0);
  ((s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).prezik_bak ?? 0);
  ((s as any).mc_inventory ?? {})['vitamins'] = ((s as any).vitamin_bak ?? 0);
  ((s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).kosmetica_bak ?? 0);
  ((s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).lipbalm_bak ?? 0);
  ((s as any).mc_inventory ?? {})['tampons'] = ((s as any).tampon_bak ?? 0);
  ((s as any).mc_inventory ?? {})['shampoo'] = ((s as any).shampoo_bak ?? 0);
  ((s as any).mc_inventory ?? {})['razor'] = ((s as any).stanok_bak ?? 0);
  ((s as any).mc_inventory ?? {})['deodorant'] = ((s as any).deodorant_bak ?? 0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn and run the opposite direction', goto: ['road', '12'] },
    { label: 'Run left', goto: ['city_industrial', ''] },
    { label: 'Run right', goto: ['pav_commercial', ''] },
    { label: 'Run forward', goto: ['city_lake', 'start'] },
  ]);
  scene.build();
}

function enterAbdFood(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/basement2.jpg');
  scene.text('There are some water bottles and dried food beneath your bed.');
  scene.text('A half broken, dirty mirror provides some means to inspect your appearance.');
  scene.text('In the corner is something remotely similar to a shower. It only has cold water though.');
  if (((s as any).pcs_energy ?? 0) >= 10) {
    scene.text('There\'s enough space to do some basic <a href="exec:gt \'abduction\', \'abdexercise\'">exercise</a>.');
  } else {
    scene.text('There\'s enough space to do some basic exercise but you are too hungry to do them.');
  }
  (s as any).chainChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).chainChance ?? 0) <= 20  &&  (((s as any).rapeCount ?? 0) > 5  ||  ((s as any).tortureCount ?? 0) > 5)) {
    scene.text('You spot a loose link on your chain. You try to manipulate it, and manage to free yourself from the wall.');
    scene.text('<a href="exec:gt \'abduction\', \'abdEscape\'">Run to the window.</a>');
  }
  if (((s as any).abdTools ?? 0) === 1) {
    if (((s as any).mc_inventory ?? 0)?.['breast_pump'] > 0  &&  ((s as any).bp_unbox ?? 0) >= 1) {
      scene.actions([
        { label: 'Use breast pump', goto: ['lact_bp', 'bp_milking'] },
      ]);
    }
    scene.actions([
      { label: 'Train with dildos', goto: ['abduction', 'abdTrainDildos'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['painkillers']) {
    }
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['painkillers']>></b> painkiller<<$pluralS>>.
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['painkillers']}</b> painkiller${((s as any).pluralS ?? 0)}.`);
    if (((s as any).pain ?? 0)?.['total'] > 0) {
      // TODO-QSP: act $func('drugs', 'painkiller_act_str'):
      qspCall(s, 'drugs', 'painkiller');
      if (((s as any).pcs_hydra ?? 0) >= 100) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
      } else {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
      }
      qspCall(s, 'stat', '');
      scene.text('You take a painkiller and gulp it down with a glass of water.');
      scene.actions([
        { label: 'Continue', goto: ['abduction', 'abdFood'] },
      ]);
    }
  }
  // TODO-QSP: end
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat dried food (0:10)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).frost = 0;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (25);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (20);
    }
    (s as any).pcs_breath = 0;
    (s as any).fat = ((s as any).fat ?? 0) + (4);
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/abduction/driedbread1.jpg');
    scene.text('You eat the dried meat and bread. It causes your throat to become dry, so some water could come in handy.');
    scene.actions([
      { label: 'Get back', goto: ['abduction', 'abdFood'] },
    ]);
  } },
    { label: 'Drink water (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).frost = 1;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (100);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
    scene.text('You drank the whole bottle.');
    scene.actions([
      { label: 'Get back', goto: ['abduction', 'abdFood'] },
    ]);
  } },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    { label: 'Take a cold shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/abduction/shower1.jpg');
    scene.text('The shower is cold and you don\'t have any shampoo, but at least you get clean again…');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get back', goto: ['abduction', 'abdFood'] },
    ]);
  } },
    { label: 'Get back to your bed', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdexercise(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'stren');
  scene.img('images/pc/activities/exercises/push_nude.mp4');
  // TODO-QSP: dynamic text: You do push-ups for <<$timestring>> minutes, improving your strength.
  scene.text(`You do push-ups for ${((s as any).timestring ?? 0)} minutes, improving your strength.`);
  qspCall(s, 'exercise', 'pushups_inner');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier2', 30, 'vital');
    scene.img('images/pc/activities/exercises/abdominal_nude.mp4');
    // TODO-QSP: dynamic text: You do a series of abdominal exercises for <<$timestring>> minutes, improving yo...
    scene.text(`You do a series of abdominal exercises for ${((s as any).timestring ?? 0)} minutes, improving your endurance.`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['abduction', 'abdFood'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAbdRape(s: GameState, scene: SceneBuilder): void {
  (s as any).rapeCount = ((s as any).rapeCount ?? 0) + (1);
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
  (s as any).rapeType = Math.floor(Math.random() * 5) + 1;
  if (((s as any).broken ?? 0) < 10) {
    qspCall(s, 'mood', 'lower', 'min');
  }
  if (((s as any).rapeType ?? 0) === 1) {
    ((s as any).pain ?? {})['mouth'] = (((s as any).pain ?? {})['mouth'] ?? 0) + (3);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth', 'Master');
    (s as any).i = Math.floor(Math.random() * 4) + 1;
    (s as any).gifornot = Math.floor(Math.random() * 100) + 1;
    if (((s as any).gifornot ?? 0) > 50) {
      scene.img(`images/locations/shared/abduction/sex/mouthgagblow${((s as any).i ?? 0)}.jpg`);
    } else {
      scene.img('images/locations/shared/abduction/sex/mouthgagblow1.mp4');
    }
    scene.text('Your hands are tied. A metal ring, fastened by a leather gag, is inside your mouth, keeping it pried open.');
    scene.text('You have to endure a very rough mouth fuck. He knows no limits and gags you as much as he wants. He does let you breathe from time to time, but for most of the experience you feel like you\'re about to pass out. Your saliva is all over his dick and drips onto your breasts and stomach.');
    qspCall(s, 'arousal', 'bj', 30, 'sub', 'bound', 'maso');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['abduction', 'abdRoom'] },
    ]);
  } else {
    if (((s as any).rapeType ?? 0) === 2  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (10);
      (s as any).cumnostd = 1;
      qspCall(s, 'cum_call', '', '', 'Master');
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      scene.img(`images/locations/shared/abduction/sex/fucktiedpussy${((s as any).i ?? 0)}.jpg`);
      scene.text('Your hands are tied, and you\'re bent over the bed.');
      scene.text('The guy starts to penetrate your pussy without warning. A sharp pain shoots through your abdomen because your pussy isn\'t wet enough to receive a dick.');
      qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'bound', 'maso');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['abduction', 'abdRoom'] },
      ]);
    } else {
      if (((s as any).rapeType ?? 0) === 3) {
        ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (10);
        (s as any).cumnostd = 1;
        qspCall(s, 'cum_call', 'anus', 'Master');
        (s as any).gifornot = 0;
        if (((s as any).gifornot ?? 0) > 50) {
          scene.img('images/locations/shared/abduction/sex/fucktiedanal\'+rand(1, 4)+\'.jpg');
        } else {
          scene.img('images/locations/shared/abduction/sex/fucktiedanal1.mp4');
        }
        scene.text('Your hands are tied, and you\'re bent over the bed.');
        scene.text('The guy starts to penetrate your ass without warning. A sharp pain shoots through your anus as your ass is neither relaxed nor wet enough to receive a dick.');
        qspCall(s, 'arousal', 'anal', 30, 'sub', 'bound', 'maso');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['abduction', 'abdRoom'] },
        ]);
      } else {
        if (((s as any).rapeType ?? 0) === 4) {
          ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (8);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.img('images/locations/shared/abduction/sex/fistanal\'+rand(1, 5)+\'.jpg');
          scene.text('Your hands and feet are bound as you hang upside down with your ass in the air.');
          scene.text('The guy starts trying to push his thick fist inside your anus. At least he used a bit of lubricant…');
          scene.text('When your sphincter fails to resist anymore, you hear a loud pop as his fist quickly penetrates you.');
          scene.text('He doesn\'t stop there and pushes his hand deep. You can feel your intestines expanding as he opens his fist inside you.');
          scene.text('The pain is unbearable, but he doesn\'t care.');
          qspCall(s, 'arousal', 'anal_fist', 30, 'sub', 'bound', 'maso');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Continue', goto: ['abduction', 'abdRoom'] },
          ]);
        } else {
          if (((s as any).rapeType ?? 0) === 5  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
            ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
            ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (10);
            qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
            scene.img('images/locations/shared/abduction/sex/fistvaginal\'+rand(1, 5)+\'.jpg');
            scene.text('Your hands and feet are tied with your ass raised higher than your head.');
            scene.text('The guy starts pushing his thick fist deep inside your pussy. At least he used a bit of lubricant…');
            scene.text('Suddenly, you feel his fingers touch your cervix. He\'s doing it on purpose!');
            scene.text('He\'s pinching and pressing your cervix. You cry out loudly and try to shake him off, but you are bound tight. There\'s no hope of success…');
            scene.text('"Do you like it, slave?" He stops pushing, but you can feel a finger still brushing up against your cervix. "Should we penetrate another hole girl?"');
            scene.text('"No! Please… stop… Just… stop…" you plead through tears.');
            qspCall(s, 'arousal', 'vaginal_fist', 30, 'sub', 'bound', 'maso');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Continue', goto: ['abduction', 'abdRoom'] },
            ]);
          } else {
            qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
            ((s as any).pain ?? {})['mouth'] = (((s as any).pain ?? {})['mouth'] ?? 0) + (5);
            (s as any).cumnostd = 1;
            qspCall(s, 'cum_call', 'mouth', 'Master');
            (s as any).i = Math.floor(Math.random() * 4) + 1;
            (s as any).gifornot = 0;
            if (((s as any).gifornot ?? 0) > 50) {
              scene.img(`images/locations/shared/abduction/sex/mouthgagblow${((s as any).i ?? 0)}.jpg`);
            } else {
              scene.img('images/locations/shared/abduction/sex/mouthgagblow1.mp4');
            }
            scene.text('Your hands are tied. A metal ring, fastened by a leather gag, is inside your mouth, keeping it pried open.');
            scene.text('You have to endure a very rough mouth fuck. He knows no limits and gags you as much as he wants. He does let you breathe from time to time, but for most of the experience you feel like you\'re about to pass out. Your saliva is all over his dick and drips onto your breasts and stomach.');
            qspCall(s, 'arousal', 'bj', 30, 'sub', 'bound', 'maso');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Continue', goto: ['abduction', 'abdRoom'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdTorture(s: GameState, scene: SceneBuilder): void {
  (s as any).tortureType = Math.floor(Math.random() * 4) + 1;
  (s as any).tortureCount = ((s as any).tortureCount ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).tortureType ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['abduction', 'abdTortureA1'] }]);
  } else {
    if (((s as any).tortureType ?? 0) === 2  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      scene.actions([{ label: 'Continue', goto: ['abduction', 'abdTortureB1'] }]);
    } else {
      if (((s as any).tortureType ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['abduction', 'abdTortureC1'] }]);
      } else {
        if (((s as any).tortureType ?? 0) === 4  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
          scene.actions([{ label: 'Continue', goto: ['abduction', 'abdTortureD1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['abduction', 'abdTortureC1'] }]);
        }
      }
    }
  }
  if (((s as any).broken ?? 0) < 10) {
    qspCall(s, 'mood', 'lower', 'min');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdTortureA1(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['feet'] = (((s as any).pain ?? {})['feet'] ?? 0) + (5);
  ((s as any).pain ?? {})['hands'] = (((s as any).pain ?? {})['hands'] ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/torturea1.jpg');
  scene.text('You\'re dragged from your bed and led to the far side of the basement. Suspicious looking rings and straps can be seen attached to the wall.');
  scene.text('Your hands are secured with a rope high on the wall and your legs are unpleasantly lifted above your head and secured as well.');
  scene.text('You\'re now hanging by your hands with your pussy and ass available for any perverted usage.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureA2'] },
  ]);
  scene.build();
}

function enterAbdTortureA2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) + (5);
  scene.img('images/locations/shared/abduction/sex/torturea2.jpg');
  scene.text('Your tormentor secures a rope around your neck and starts to play with your idle nipples.');
  scene.text('As your nipples harden, he firmly attaches the rope to them and tightens it around your neck.');
  scene.text('"Ouch! It hurts… please remove it!"');
  scene.text('In response, the tormentor slaps a gag in your mouth and walks away, leaving you alone.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'bound', 'maso');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureA3'] },
  ]);
  scene.build();
}

function enterAbdTortureA3(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/locations/shared/abduction/sex/torturea3.jpg');
  scene.text('After a while, the tormentor returns with a dildo attached to a long stick.');
  scene.text('"Mmmphh!" is the only sound you\'re able to make in protest of what\'s coming towards you.');
  scene.text('Without any warning, he stuffs the dildo inside your ass. It goes so deep that you can feel it push against your intestines.');
  scene.text('He secures the stick to the ground before leaving the room.');
  scene.text('You swing on the rope left and right trying to push the dildo out of your ass. However, it\'s too deep inside you.');
  qspCall(s, 'arousal', 'anal_dildo', 30, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureA4'] },
  ]);
  scene.build();
}

function enterAbdTortureA4(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (5);
  scene.img('images/locations/shared/abduction/sex/torturea4.jpg');
  scene.text('After what seems like an eternity, the tormentor returns.');
  scene.text('Pleased to find you with tears and saliva all over your breasts and stomach, he unscrews the stick.');
  scene.text('As a last sign of the torture, he pushes the stick even deeper inside you in a single thrust before swiftly removing it.');
  scene.text('You start to tremble, but you know it\'s finally over.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTortureB1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/tortureb1.jpg');
  scene.text('You\'re forced to lay on your stomach on the cold ground.');
  scene.text('Your hands are tied together and raised high in the air. You can feel your joints being bent to their limits. Your legs are then forced wide apart and secured on opposite sides. You can\'t move an inch.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureB2'] },
  ]);
  scene.build();
}

function enterAbdTortureB2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (10);
  scene.img('images/locations/shared/abduction/sex/tortureb2.jpg');
  scene.text('You hear your tormentor returning.');
  scene.text('"Uummmphh!" is the sound your gagged mouth makes as the cane suddenly strikes your ass.');
  scene.text('You are given a thorough ass whipping.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureB3'] },
  ]);
  scene.build();
}

function enterAbdTortureB3(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (2);
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (2);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/locations/shared/abduction/sex/tortureb3.jpg');
  scene.text('As soon as the whipping stops, you feel a new source of pain in both your pussy and your ass - something is being pushed inside both your holes.');
  scene.text('You\'re given no time to adjust, and both your holes are fucked viciously, fast and deep.');
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureB4'] },
  ]);
  scene.build();
}

function enterAbdTortureB4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/tortureb4.jpg');
  scene.text('Finally, your pussy and ass are left alone. Whatever was inside you has been removed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTortureC1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/torturec1.jpg');
  scene.text('Your tormentor looks angry. Your hands are tied behind your back and legs. He attaches a rope to your feet and you\'re suddenlt lifted into the air upside down.');
  scene.text('After a few minutes where you\'re left hanging, your tormentor approaches you with a leather whip.');
  scene.text('He spins you around and whips whatever comes before him. Ass, back, stomach, pussy, legs, breasts. The whip hits your exposed flesh and leaves angry looking welts behind.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureC2'] },
  ]);
  scene.build();
}

function enterAbdTortureC2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (60);
  ((s as any).pain ?? {})['back'] = (((s as any).pain ?? {})['back'] ?? 0) + (50);
  ((s as any).pain ?? {})['thighs'] = (((s as any).pain ?? {})['thighs'] ?? 0) + (25);
  ((s as any).pain ?? {})['chest'] = (((s as any).pain ?? {})['chest'] ?? 0) + (25);
  ((s as any).pain ?? {})['breasts'] = (((s as any).pain ?? {})['breasts'] ?? 0) + (50);
  ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (25);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/torturec2.jpg');
  scene.text('Twenty minutes of thorough whipping leaves your body trembling and severely bruised.');
  scene.text('Your tender breasts are especially sore.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTortureD1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/tortured1.jpg');
  scene.text('Your tormentor brings a crude rope and you tremble as you wonder what he\'s going to do with it.');
  scene.text('You almost sigh in relief when he "just" ties you up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureD2'] },
  ]);
  scene.build();
}

function enterAbdTortureD2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/tortured2.jpg');
  scene.text('You\'re forced down on your knees on top of some kind of bench. The ropes are fixed so you can\'t move.');
  scene.text('Not being able to see what\'s going on behind you, you suddenly feel something cold touching your asshole.');
  scene.text('With a single thrust, something is shoved deep inside your anus. Tears stream down your face and you cry out loudly.');
  qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureD3'] },
  ]);
  scene.build();
}

function enterAbdTortureD3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  scene.img('images/locations/shared/abduction/sex/tortured3.jpg');
  scene.text('Next is your tender pussy. He shoves the dildo in, not giving you any time to adjust.');
  scene.text('Last comes your mouth. Finally, you can see what is being inserted into your every hole: dildos attached to long wooden sticks.');
  scene.text('The sticks are fixed tightly to the device - if you move just a bit, any one of them gets shoved even deeper. It brings even more discomfort and pain to your already abused body.');
  scene.text('Your tormentor walks away to leave you in this state for what feels like an eternity.');
  qspCall(s, 'arousal', 'vaginal_dildo', 60, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureD4'] },
  ]);
  scene.build();
}

function enterAbdTortureD4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/tortured4.jpg');
  scene.text('He finally returns and comes back. You\'re unplugged, but your torture is far from over.');
  scene.text('"Suck me and this will be over. For now…"');
  scene.text('You have no choice but to do what he orders.');
  qspCall(s, 'arousal', 'bj', 60, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTortureD5'] },
  ]);
  scene.build();
}

function enterAbdTortureD5(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'mouth', 'Master');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/tortured5.mp4');
  scene.text('Even though your head is spinning and everything is aching inside you, you\'re able to make him cum in just a few minutes.');
  scene.text('Being bound, he shows you no remorse and fucks you raw before cumming in your very sore throat.');
  qspCall(s, 'arousal', 'vaginal', 20, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'arousal', 'anal', 20, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'arousal', 'bj', 20, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdBeSold(s: GameState, scene: SceneBuilder): void {
  scene.text('"We have a buyer for you…" your master says with a cruel smile.');
  // TODO-QSP: end
  scene.actions([
    { label: 'I don\'t want to be sold', goto: ['abduction', 'abdConsiderSold'] },
    { label: 'I want to leave', goto: ['abduction', 'abdSoldSauna'] },
  ]);
  scene.build();
}

function enterAbdConsiderSold(s: GameState, scene: SceneBuilder): void {
  scene.text('"Are you sure slave?" he asks. "You\'ll stay here and continue to be used…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', goto: ['abduction', 'abdNotSold'] },
    { label: 'Change your mind', goto: ['abduction', 'abdSoldSauna'] },
  ]);
  scene.build();
}

function enterAbdNotSold(s: GameState, scene: SceneBuilder): void {
  scene.text('"Very well. We\'ll see each other again soon," your master says.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdSoldSauna(s: GameState, scene: SceneBuilder): void {
  scene.text('"A nice lady from an established business." he smiles.');
  scene.text('You are blindfolded and led away to a car. After some time, you are led through doors and the blindfold is removed. You are in a backroom of a brothel.');
  // TODO-QSP: dynamic text: "The madame of the brothel stands before you. "I paid ' + $func('money', 'string...
  scene.text('"The madame of the brothel stands before you. "I paid \' + $func(\'money\', \'string_debt_addition\', 8000) + \' for you, bitch. Don\'t make me regret this."');
  scene.text('"Yes, madame." you obediently reply.');
  scene.text('"I\'m not a bad person," she continues. "If you earn me at least five times more than what I paid, I may let you go."');
  scene.text('With this faint sign of hope, she leaves you alone.');
  qspCall(s, 'money', 'debt_add', 'workDolg', 40000);
  if (((s as any).bagtaken ?? 0) === 1) {
    (s as any).bag = 1;
    (s as any).bagtaken = 0;
  }
  ((s as any).mc_inventory ?? {})['painkillers'] = ((s as any).painkiller_bak ?? 0);
  ((s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).prezik_bak ?? 0);
  ((s as any).mc_inventory ?? {})['vitamins'] = ((s as any).vitamin_bak ?? 0);
  ((s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).kosmetica_bak ?? 0);
  ((s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).lipbalm_bak ?? 0);
  ((s as any).mc_inventory ?? {})['tampons'] = ((s as any).tampon_bak ?? 0);
  ((s as any).mc_inventory ?? {})['shampoo'] = ((s as any).shampoo_bak ?? 0);
  ((s as any).mc_inventory ?? {})['razor'] = ((s as any).stanok_bak ?? 0);
  ((s as any).mc_inventory ?? {})['deodorant'] = ((s as any).deodorant_bak ?? 0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_sauna', 'saunaroom'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomer(s: GameState, scene: SceneBuilder): void {
  (s as any).abdCustomerFailCount = ((s as any).abdCustomerFailCount ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorefailed.mp4');
  scene.text('Your master angrily leads you back to the basement.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomer1'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomer1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhorefailed1.mp4');
  scene.text('Your master looks very upset.');
  scene.text('First, he takes some ropes and ties you up. Your breasts start to turn purple from the lack of blood circulation because of how tightly fastened they are.');
  qspCall(s, 'arousal', 'foreplay', 15, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomer2'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomer2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (2);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailed2.mp4');
  scene.text('He then forces a considerable plug into your anus with little warning. Being tied up, you can\'t resist in any way.');
  qspCall(s, 'arousal', 'anal_dildo', 5, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomer3'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomer3(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['mouth'] = (((s as any).pain ?? {})['mouth'] ?? 0) + (5);
  ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (10);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailed3.mp4');
  scene.text('Continuing, he blindfolds you and attaches a ring gag, which stops you from closing your mouth. Now completely helpless, you hear him walking away, leaving you to wonder what he has planned next.');
  scene.text('After some time of relative quiet, you hear someone approaching. In a matter of seconds, someone grabs your head. He pushes his warm cock into your mouth and down your throat, making it impossible to breathe.');
  scene.text('You panic, but he doesn\'t let go until you\'re on the verge of passing out. Only then does he stop, not letting you escape into unconsciousness.');
  qspCall(s, 'mood', 'lower', 'min');
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  (s as any).endRand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).endRand ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', goto: ['abduction', 'abdFailedCustomerElectro1'] },
    ]);
  } else {
    if (((s as any).endRand ?? 0) === 2) {
      scene.actions([
        { label: 'Continue', goto: ['abduction', 'abdFailedCustomerHook1'] },
      ]);
    } else {
      if (((s as any).endRand ?? 0) === 3) {
        scene.actions([
          { label: 'Continue', goto: ['abduction', 'abdFailedCustomerWhip1'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbdFailedCustomerElectro1(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['pubic'] = (((s as any).pain ?? {})['pubic'] ?? 0) + (20);
  ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) + (20);
  ((s as any).pain ?? {})['breasts'] = (((s as any).pain ?? {})['breasts'] ?? 0) + (20);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedelectro1.mp4');
  scene.text('Your restraints are removed, but you\'re led to a wall to be chained anew to a different device.');
  scene.text('This time, you can see everything - but you wish you couldn\'t.');
  scene.text('Electrodes are taped to your nipples, clitoris, and vagina.');
  scene.text('Your master takes a few steps back and pushes a button on a remote. In that moment, an electric shock goes through your whole body, causing you to shake.');
  scene.text('You moan loudly and beg for him to stop.');
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerElectro2'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerElectro2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (20);
  ((s as any).pain ?? {})['tummy'] = (((s as any).pain ?? {})['tummy'] ?? 0) + (20);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedelectro2.mp4');
  scene.text('Your legs are pulled into the air and restrained to a wall. You hang by your hands with both of your holes fully at their disposal.');
  scene.text('The first plug is violently taken out with a loud "SCHLOP".');
  scene.text('However, your anus isn\'t left empty for long as a new plug is quickly inserted. Fear grips you as you see the wires hanging out of it.');
  scene.text('The remote button is pushed again, and this time you can feel it inside your intestines and anus.');
  qspCall(s, 'arousal', 'anal_dildo', 30, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerElectro3'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerElectro3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  ((s as any).pain ?? {})['feet'] = (((s as any).pain ?? {})['feet'] ?? 0) + (10);
  ((s as any).pain ?? {})['hands'] = (((s as any).pain ?? {})['hands'] ?? 0) + (10);
  ((s as any).pain ?? {})['back'] = (((s as any).pain ?? {})['back'] ?? 0) + (10);
  qspCall(s, 'mood', 'lower', 'min');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedelectro3.jpg');
  scene.text('Finally, your torment is at an end.');
  scene.text('"Remember this lesson slave. If you disappoint a customer again, a more severe punishment may be forced upon you."');
  scene.text('"If you\'re found to be more trouble than you\'re worth, one of our more perverse customers will pay us well for the opportunity to torture you to death."');
  scene.text('You just nod that you understand and remain silent.');
  scene.text('Your master leaves without another word - and you are left hanging on the wall.');
  scene.text('You are tired, everything hurts, and there seems to be no sign of when you will be removed from this terrible bondage, if at all.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerChainedBack'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerHook1(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedhook1.mp4');
  scene.text('You\'re put on all fours and chained. Your ass is high in the air, showing both your holes to anyone standing behind you.');
  scene.text('Somebody you don\'t see approaches from behind to remove the buttplug with a loud "SCHLOP" and immediately, and very violently, shoves something cold inside your anus.');
  scene.text('You cry in both pain and surprise.');
  qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerHook2'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerHook2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['labia'] = (((s as any).pain ?? {})['labia'] ?? 0) + (20);
  ((s as any).pain ?? {})['clitoris'] = (((s as any).pain ?? {})['clitoris'] ?? 0) + (20);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedhook2.mp4');
  scene.text('Trying to look behind you, you see your master bring something in his hands.');
  scene.text('He puts it up against your pussy and it suddenly starts to vibrate.');
  scene.text('The intensity is too much for you, and instead of bringing you pleasure, it feels like a devious mix of intense pain and orgasmic pulses.');
  scene.text('After a while, you piss yourself while experiencing something like a very painful orgasm.');
  qspCall(s, 'arousal', 'vaginal_vibe', 30, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerHook3'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerHook3(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (10);
  ((s as any).pain ?? {})['cervix'] = (((s as any).pain ?? {})['cervix'] ?? 0) + (20);
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedhook3.mp4');
  scene.text('Your pussy is very sensitive after the vibrator treatment, and your master knows that all too well.');
  scene.text('He slams his dick deep inside you to hit your cervix. It seems like he\'s doing it on purpose.');
  scene.text('You try to beg for mercy, but he doesn\'t care. He wants you to suffer - this is your punishment…');
  qspCall(s, 'arousal', 'vaginal', 20, 'sub', 'bound', 'maso', 'humiliation', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerHook4'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerHook4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (30);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'mood', 'lower', 'min');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/abduction/sex/slavewhorefailedhook4.mp4');
  scene.text('Finally, you faint from all the abuse.');
  scene.text('You wake up alone in the room, but your position has been changed while you were unconscious.');
  scene.text('You are bound on some kind of stool, hands tied together, and most importantly, your ass is lifted in the air and hanging by the hook.');
  scene.text('You start to realize the pain of hanging by your asshole, so you try to push your legs up to move your ass even higher.');
  scene.text('However, you can only remain in that position for a few minutes before you get tired and are forced to relax your legs, allowing the pain to quickly return to your stretched asshole.');
  scene.text('Nobody is nearby, but you know all too well that no one will take pity on you anyway. You just have to hope that this part of your punishment will end soon.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', goto: ['abduction', 'abdFailedCustomerChainedBack'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerWhip1(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['labia'] = (((s as any).pain ?? {})['labia'] ?? 0) + (5);
  ((s as any).pain ?? {})['clitoris'] = (((s as any).pain ?? {})['clitoris'] ?? 0) + (5);
  scene.img('images/locations/shared/abduction/sex/slavewhorewhip1.mp4');
  scene.text('Your master removes your bondage and in anger pushes you on the ground before spreading your legs.');
  scene.text('"You fucking whore! You\'re going to learn how to be more fucking obedient!"');
  scene.text('He starts to spank your pussy with his hand.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerWhip2'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerWhip2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['labia'] = (((s as any).pain ?? {})['labia'] ?? 0) + (10);
  ((s as any).pain ?? {})['clitoris'] = (((s as any).pain ?? {})['clitoris'] ?? 0) + (10);
  ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (20);
  scene.img('images/locations/shared/abduction/sex/slavewhorewhip2.mp4');
  scene.text('After a while, he cools down, but your pussy is already red and stinging.');
  scene.text('He grabs you by your hair and leads you to another device. You have to lie down on your shoulders and put your ass high in the air before he affixes you into this uncomfortable position with some straps.');
  scene.text('Content with how helpless you are, he grabs a rubber baton.');
  scene.text('He hits you hard, targeting your exposed labia, causing intense pain to shoot through your body.');
  scene.text('From time to time, he alternates, giving your asscheeks an even harder hit.');
  qspCall(s, 'arousal', 'foreplay', 20, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerWhip3'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerWhip3(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['labia'] = (((s as any).pain ?? {})['labia'] ?? 0) + (10);
  ((s as any).pain ?? {})['clitoris'] = (((s as any).pain ?? {})['clitoris'] ?? 0) + (10);
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (10);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/locations/shared/abduction/sex/slavewhorewhip3.mp4');
  scene.text('As if the baton wasn\'t enough, your master reaches for a long dildo attached to a stick.');
  scene.text('With one heavy thrust, he penetrates your dry ass and fixes the stick to the wall. The metal stick\'s weight is enough to push your guts aside as it presses against your intestinal walls.');
  scene.text('He then picks up a different weapon - a leather cat-o-nine whip.');
  scene.text('His target is the same - your now raw and heavily stinging labia and clitoris.');
  qspCall(s, 'arousal', 'anal', 20, 'sub', 'bound', 'maso', 'humiliation', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdFailedCustomerWhip4'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerWhip4(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain ?? {})['labia'] = (((s as any).pain ?? {})['labia'] ?? 0) + (20);
  ((s as any).pain ?? {})['clitoris'] = (((s as any).pain ?? {})['clitoris'] ?? 0) + (20);
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (20);
  qspCall(s, 'mood', 'lower', 'min');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/locations/shared/abduction/sex/slavewhorewhip4.mp4');
  scene.text('After this even rougher punishment, you are on the brink of fainting.');
  scene.text('Your master brings another device on a stick - a vibrator with a large head.');
  scene.text('He buries the head deep between your labia while touching your clitoris directly, your position being ideal for this.');
  scene.text('When the device is turned on, you realize it must be on the highest setting. It almost makes you orgasm instantly.');
  scene.text('Your master leaves, and you\'re left alone with this device teasing you as the dildo continues pushing deep into your ass. Everything aches from this inhuman position.');
  scene.text('You pass in and out of consciousness while having intense orgasms mixed with a lot of pain. You tremble helplessly, the only sounds in the room being your moans and the humming of the vibrator.');
  qspCall(s, 'arousal', 'vaginal_vibe', 240, 'sub', 'bound', 'maso', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Endure it', goto: ['abduction', 'abdFailedCustomerChainedBack'] },
  ]);
  scene.build();
}

function enterAbdFailedCustomerChainedBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/shared/abduction/chainedback.jpg');
  scene.text('After what seems like an eternity, you\'re unbound and chained back to the wall.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildos(s: GameState, scene: SceneBuilder): void {
  (s as any).dildoSmall = 10;
  (s as any).dildoRegular = 20;
  (s as any).dildoBig = 30;
  (s as any).dildoHorse = 35;
  scene.img('images/locations/shared/abduction/sex/slavewhoredildos1.jpg');
  scene.text('You take the dildos from the ground and clean them up in the shower.');
  scene.text('There are four of them: small, regular, big, and horse sized.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.actions([
      { label: 'Train your pussy', goto: ['abduction', 'abdTrainDildosVaginaGate'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Train your ass', goto: ['abduction', 'abdTrainDildosAnalGate'] },
    { label: 'Train your mouth', goto: ['abduction', 'abdTrainDildosMouthGate'] },
    { label: 'Go back', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosVaginaGate(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhoredildos1.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick the small dildo', goto: ['abduction', 'abdTrainDildosSmall'] },
    { label: 'Pick the regular dildo', goto: ['abduction', 'abdTrainDildosRegular'] },
    { label: 'Pick the big dildo', goto: ['abduction', 'abdTrainDildosBig'] },
    { label: 'Pick the horse sized dildo', goto: ['abduction', 'abdTrainDildosHorse'] },
    { label: 'Go back', goto: ['abduction', 'abdTrainDildos'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalGate(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhoredildos1.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick the small dildo', goto: ['abduction', 'abdTrainDildosAnalSmall'] },
    { label: 'Pick the regular dildo', goto: ['abduction', 'abdTrainDildosAnalRegular'] },
    { label: 'Pick the big dildo', goto: ['abduction', 'abdTrainDildosAnalBig'] },
    { label: 'Pick the horse sized dildo', goto: ['abduction', 'abdTrainDildosAnalHorse'] },
    { label: 'Go back', goto: ['abduction', 'abdTrainDildos'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthGate(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/sex/slavewhoredildos1.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick the small dildo', goto: ['abduction', 'abdTrainDildosMouthSmall'] },
    { label: 'Pick the regular dildo', goto: ['abduction', 'abdTrainDildosMouthRegular'] },
    { label: 'Pick the big dildo', goto: ['abduction', 'abdTrainDildosMouthBig'] },
    { label: 'Pick the horse sized dildo', goto: ['abduction', 'abdTrainDildosMouthHorse'] },
    { label: 'Go back', goto: ['abduction', 'abdTrainDildos'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosSmall(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.text('You feel that your pussy can easily accommodate this dildo.');
  } else {
    scene.text('This dildo will stretch your pussy, making it a bit deeper and wider.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use it', goto: ['abduction', 'abdTrainDildosSmallUse'] },
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosVaginaGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosSmallUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 10;
  if (((s as any).pcs_vag ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildossmall.mp4');
    scene.text('You start fucking the dildo with ease. Your pussy swallows it whole without a single problem.');
    qspCall(s, 'arousal', 'vaginal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildossmallhurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal', 'vaginal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosSmall'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosRegular(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) >= ((s as any).dildoRegular ?? 0)) {
    scene.text('You feel that your pussy can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosRegularUse'] },
    ]);
  } else {
    if (((s as any).pcs_vag ?? 0) <= ((s as any).dildoRegular ?? 0)  &&  ((s as any).pcs_vag ?? 0) > ((s as any).dildoSmall ?? 0)) {
      scene.text('This dildo will stretch your pussy, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosRegularUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your pussy apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosVaginaGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosRegularUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 20;
  if (((s as any).pcs_vag ?? 0) > ((s as any).dildoRegular ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosregular.mp4');
    scene.text('You start fucking the dildo with ease. Your pussy swallows it whole without any problem.');
    qspCall(s, 'arousal', 'vaginal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosregularhurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal', 'vaginal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosRegular'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) >= ((s as any).dildoBig ?? 0)) {
    scene.text('You feel that your pussy can accommodate this dildo easily.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosBigUse'] },
    ]);
  } else {
    if (((s as any).pcs_vag ?? 0) <= ((s as any).dildoBig ?? 0)  &&  ((s as any).pcs_vag ?? 0) > ((s as any).dildoRegular ?? 0)) {
      scene.text('This dildo will stretch your pussy, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosBigUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your pussy apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosVaginaGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosBigUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 30;
  if (((s as any).pcs_vag ?? 0) > ((s as any).dildoBig ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosbig.mp4');
    scene.text('You start fucking the dildo with ease. Your pussy swallows it whole without any problem.');
    qspCall(s, 'arousal', 'vaginal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosbighurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal', 'vaginal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosBig'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosHorse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) >= ((s as any).dildoHorse ?? 0)) {
    scene.text('Despite its size, you feel that your pussy can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosHorseUse'] },
    ]);
  } else {
    if (((s as any).pcs_vag ?? 0) <= ((s as any).dildoHorse ?? 0)  &&  ((s as any).pcs_vag ?? 0) > ((s as any).dildoBig ?? 0)) {
      scene.text('This dildo will stretch your pussy, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosHorseUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your pussy apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosVaginaGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosHorseUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 35;
  if (((s as any).pcs_vag ?? 0) > ((s as any).dildoHorse ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildoshorse.mp4');
    scene.text('You start fucking the dildo with ease. Your pussy swallows it whole without any problem.');
    qspCall(s, 'arousal', 'vaginal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildoshorsehurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal', 'vaginal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosHorse'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalSmall(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.text('You feel that your anus can easily accommodate this dildo.');
  } else {
    scene.text('This dildo will stretch your anus, making it a bit deeper and wider.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalSmallUse'] },
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosAnalGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalSmallUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 10;
  if (((s as any).pcs_ass ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalsmall.mp4');
    scene.text('You start fucking the dildo with ease as your anus swallows it whole without any problem.');
    qspCall(s, 'arousal', 'anal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalsmallhurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'arousal', 'anal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosAnalSmall'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalRegular(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) >= ((s as any).dildoRegular ?? 0)) {
    scene.text('You feel that your anus can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalRegularUse'] },
    ]);
  } else {
    if (((s as any).pcs_ass ?? 0) <= ((s as any).dildoRegular ?? 0)  &&  ((s as any).pcs_ass ?? 0) > ((s as any).dildoSmall ?? 0)) {
      scene.text('This dildo will stretch your anus, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalRegularUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your anus apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosAnalGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalRegularUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 20;
  if (((s as any).pcs_ass ?? 0) > ((s as any).dildoRegular ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalregular.mp4');
    scene.text('You start fucking the dildo with ease as your anus swallows it whole without any problem.');
    qspCall(s, 'arousal', 'anal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalregularhurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'arousal', 'anal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosAnalRegular'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) >= ((s as any).dildoBig ?? 0)) {
    scene.text('You feel that your anus can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalBigUse'] },
    ]);
  } else {
    if (((s as any).pcs_ass ?? 0) <= ((s as any).dildoBig ?? 0)  &&  ((s as any).pcs_ass ?? 0) > ((s as any).dildoRegular ?? 0)) {
      scene.text('This dildo will stretch your anus, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalBigUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your anus apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosAnalGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalBigUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 30;
  if (((s as any).pcs_ass ?? 0) > ((s as any).dildoBig ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalbig.mp4');
    scene.text('You start fucking the dildo with ease as your anus swallows it whole without any problem.');
    qspCall(s, 'arousal', 'anal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalbighurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'arousal', 'anal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosAnalBig'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalHorse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) >= ((s as any).dildoHorse ?? 0)) {
    scene.text('Despite its size, you feel that your anus can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalHorseUse'] },
    ]);
  } else {
    if (((s as any).pcs_ass ?? 0) <= ((s as any).dildoHorse ?? 0)  &&  ((s as any).pcs_ass ?? 0) > ((s as any).dildoBig ?? 0)) {
      scene.text('This dildo will stretch your anus, making it a bit deeper and wider.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosAnalHorseUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your anus apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosAnalGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosAnalHorseUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 35;
  if (((s as any).pcs_ass ?? 0) > ((s as any).dildoBig ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalhorse.mp4');
    scene.text('You start fucking the dildo with ease as your anus swallows it whole without any problem.');
    qspCall(s, 'arousal', 'anal_dildo', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosanalhorsehurt.mp4');
    scene.text('You start to fuck yourself with this dildo, knowing it is bigger than what you can handle.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'arousal', 'anal_dildo', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosAnalHorse'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthSmall(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.text('You feel that your throat can easily accommodate this dildo.');
  } else {
    scene.text('This dildo will stretch your throat, making it a bit deeper.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthSmallUse'] },
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosMouthGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthSmallUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 10;
  if (((s as any).pcs_throat ?? 0) > ((s as any).dildoSmall ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthsmall.mp4');
    scene.text('You start sucking the dildo with ease as your throat swallows it whole without any problem.');
    qspCall(s, 'arousal', 'dildo_suck', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthsmallhurt.mp4');
    scene.text('You start to suck the dildo, knowing it is bigger than what you can handle and pushing it as deep as possible while trying not to suffocate.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(s, 'arousal', 'dildo_suck', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosMouthSmall'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthRegular(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) >= ((s as any).dildoRegular ?? 0)) {
    scene.text('You feel that your throat can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthRegularUse'] },
    ]);
  } else {
    if (((s as any).pcs_throat ?? 0) <= ((s as any).dildoRegular ?? 0)  &&  ((s as any).pcs_throat ?? 0) > ((s as any).dildoSmall ?? 0)) {
      scene.text('This dildo will stretch your throat, making it a bit deeper.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthRegularUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your throat apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosMouthGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthRegularUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 20;
  if (((s as any).pcs_throat ?? 0) > ((s as any).dildoRegular ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthregular.mp4');
    scene.text('You start sucking the dildo with ease as your throat swallows it whole without any problem.');
    qspCall(s, 'arousal', 'dildo_suck', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthregularhurt.mp4');
    scene.text('You start to suck the dildo, knowing it is bigger than what you can handle and pushing it as deep as possible while trying not to suffocate.');
    scene.text('It hurts but you can feel that some progress was made.');
    ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(s, 'arousal', 'dildo_suck', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosMouthRegular'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) >= ((s as any).dildoBig ?? 0)) {
    scene.text('You feel that your throat can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthBigUse'] },
    ]);
  } else {
    if (((s as any).pcs_throat ?? 0) <= ((s as any).dildoBig ?? 0)  &&  ((s as any).pcs_throat ?? 0) > ((s as any).dildoRegular ?? 0)) {
      scene.text('This dildo will stretch your throat, making it a bit deeper.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthBigUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your throat apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosMouthGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthBigUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = 30;
  if (((s as any).pcs_throat ?? 0) > ((s as any).dildoBig ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthbig.mp4');
    scene.text('You start sucking the dildo with ease as your throat swallows it whole without any problem.');
    qspCall(s, 'arousal', 'dildo_suck', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthbighurt.mp4');
    scene.text('You start to suck the dildo, knowing it is bigger than what you can handle and pushing it as deep as possible while trying not to suffocate.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(s, 'arousal', 'dildo_suck', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosMouthBig'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthHorse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) >= ((s as any).dildoHorse ?? 0)) {
    scene.text('Despite its size, you feel that your throat can easily accommodate this dildo.');
    scene.actions([
      { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthHorseUse'] },
    ]);
  } else {
    if (((s as any).pcs_throat ?? 0) <= ((s as any).dildoHorse ?? 0)  &&  ((s as any).pcs_throat ?? 0) > ((s as any).dildoBig ?? 0)) {
      scene.text('This dildo will stretch your throat, making it a bit deeper.');
      scene.actions([
        { label: 'Use it', goto: ['abduction', 'abdTrainDildosMouthHorseUse'] },
      ]);
    } else {
      scene.text('You can clearly see that this dildo will tear your throat apart if it\'s inserted all the way in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose different dildo', goto: ['abduction', 'abdTrainDildosMouthGate'] },
    { label: 'Go back to your bed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdTrainDildosMouthHorseUse(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = ((s as any).dildoHorse ?? 0);
  if (((s as any).pcs_throat ?? 0) > ((s as any).dildoHorse ?? 0)) {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthhorse.mp4');
    scene.text('You start sucking the dildo with ease as your throat swallows it whole without any problem.');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'dildo_suck', 60);
  } else {
    scene.img('images/locations/shared/abduction/sex/slavewhoredildosmouthhorsehurt.mp4');
    scene.text('You start to suck the dildo, knowing it is bigger than what you can handle and pushing it as deep as possible while trying not to suffocate.');
    scene.text('It hurts, but you can feel that some progress was made.');
    ((s as any).pain ?? {})['throat'] = (((s as any).pain ?? {})['throat'] ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(s, 'arousal', 'dildo_suck', 60, 'rough');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTrainDildosMouthHorse'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'abdCarTrunk':
      enterAbdCarTrunk(s, scene);
      break;
    case 'abdRoomFirstEntry':
      enterAbdRoomFirstEntry(s, scene);
      break;
    case 'abdRoomFirstChaining':
      enterAbdRoomFirstChaining(s, scene);
      break;
    case 'abdRoom':
      enterAbdRoom(s, scene);
      break;
    case 'abdSomeoneComing':
      enterAbdSomeoneComing(s, scene);
      break;
    case 'abdExamStart':
      enterAbdExamStart(s, scene);
      break;
    case 'abdExamResist':
      enterAbdExamResist(s, scene);
      break;
    case 'abdExamObey':
      enterAbdExamObey(s, scene);
      break;
    case 'abdExam1':
      enterAbdExam1(s, scene);
      break;
    case 'abdExam2':
      enterAbdExam2(s, scene);
      break;
    case 'abdBrokenGiveTools':
      enterAbdBrokenGiveTools(s, scene);
      break;
    case 'abdBreak1':
      enterAbdBreak1(s, scene);
      break;
    case 'abdBrokenGivePainkiller':
      enterAbdBrokenGivePainkiller(s, scene);
      break;
    case 'abdBrokenGivePainkillerYes':
      enterAbdBrokenGivePainkillerYes(s, scene);
      break;
    case 'abdBrokenGivePainkillerNo':
      enterAbdBrokenGivePainkillerNo(s, scene);
      break;
    case 'abdBrokenAsk':
      enterAbdBrokenAsk(s, scene);
      break;
    case 'abdBreak2FuckA1':
      enterAbdBreak2FuckA1(s, scene);
      break;
    case 'abdBreak2FuckA2':
      enterAbdBreak2FuckA2(s, scene);
      break;
    case 'abdBreak2FuckB1':
      enterAbdBreak2FuckB1(s, scene);
      break;
    case 'abdBreak2FuckB2':
      enterAbdBreak2FuckB2(s, scene);
      break;
    case 'abdSleep':
      enterAbdSleep(s, scene);
      break;
    case 'abdEscape':
      enterAbdEscape(s, scene);
      break;
    case 'abdEscapeWindow1':
      enterAbdEscapeWindow1(s, scene);
      break;
    case 'abdEscapeWindow2':
      enterAbdEscapeWindow2(s, scene);
      break;
    case 'abdEscapeWindow3':
      enterAbdEscapeWindow3(s, scene);
      break;
    case 'abdFood':
      enterAbdFood(s, scene);
      break;
    case 'abdexercise':
      enterAbdexercise(s, scene);
      break;
    case 'abdRape':
      enterAbdRape(s, scene);
      break;
    case 'abdTorture':
      enterAbdTorture(s, scene);
      break;
    case 'abdTortureA1':
      enterAbdTortureA1(s, scene);
      break;
    case 'abdTortureA2':
      enterAbdTortureA2(s, scene);
      break;
    case 'abdTortureA3':
      enterAbdTortureA3(s, scene);
      break;
    case 'abdTortureA4':
      enterAbdTortureA4(s, scene);
      break;
    case 'abdTortureB1':
      enterAbdTortureB1(s, scene);
      break;
    case 'abdTortureB2':
      enterAbdTortureB2(s, scene);
      break;
    case 'abdTortureB3':
      enterAbdTortureB3(s, scene);
      break;
    case 'abdTortureB4':
      enterAbdTortureB4(s, scene);
      break;
    case 'abdTortureC1':
      enterAbdTortureC1(s, scene);
      break;
    case 'abdTortureC2':
      enterAbdTortureC2(s, scene);
      break;
    case 'abdTortureD1':
      enterAbdTortureD1(s, scene);
      break;
    case 'abdTortureD2':
      enterAbdTortureD2(s, scene);
      break;
    case 'abdTortureD3':
      enterAbdTortureD3(s, scene);
      break;
    case 'abdTortureD4':
      enterAbdTortureD4(s, scene);
      break;
    case 'abdTortureD5':
      enterAbdTortureD5(s, scene);
      break;
    case 'abdBeSold':
      enterAbdBeSold(s, scene);
      break;
    case 'abdConsiderSold':
      enterAbdConsiderSold(s, scene);
      break;
    case 'abdNotSold':
      enterAbdNotSold(s, scene);
      break;
    case 'abdSoldSauna':
      enterAbdSoldSauna(s, scene);
      break;
    case 'abdFailedCustomer':
      enterAbdFailedCustomer(s, scene);
      break;
    case 'abdFailedCustomer1':
      enterAbdFailedCustomer1(s, scene);
      break;
    case 'abdFailedCustomer2':
      enterAbdFailedCustomer2(s, scene);
      break;
    case 'abdFailedCustomer3':
      enterAbdFailedCustomer3(s, scene);
      break;
    case 'abdFailedCustomerElectro1':
      enterAbdFailedCustomerElectro1(s, scene);
      break;
    case 'abdFailedCustomerElectro2':
      enterAbdFailedCustomerElectro2(s, scene);
      break;
    case 'abdFailedCustomerElectro3':
      enterAbdFailedCustomerElectro3(s, scene);
      break;
    case 'abdFailedCustomerHook1':
      enterAbdFailedCustomerHook1(s, scene);
      break;
    case 'abdFailedCustomerHook2':
      enterAbdFailedCustomerHook2(s, scene);
      break;
    case 'abdFailedCustomerHook3':
      enterAbdFailedCustomerHook3(s, scene);
      break;
    case 'abdFailedCustomerHook4':
      enterAbdFailedCustomerHook4(s, scene);
      break;
    case 'abdFailedCustomerWhip1':
      enterAbdFailedCustomerWhip1(s, scene);
      break;
    case 'abdFailedCustomerWhip2':
      enterAbdFailedCustomerWhip2(s, scene);
      break;
    case 'abdFailedCustomerWhip3':
      enterAbdFailedCustomerWhip3(s, scene);
      break;
    case 'abdFailedCustomerWhip4':
      enterAbdFailedCustomerWhip4(s, scene);
      break;
    case 'abdFailedCustomerChainedBack':
      enterAbdFailedCustomerChainedBack(s, scene);
      break;
    case 'abdTrainDildos':
      enterAbdTrainDildos(s, scene);
      break;
    case 'abdTrainDildosVaginaGate':
      enterAbdTrainDildosVaginaGate(s, scene);
      break;
    case 'abdTrainDildosAnalGate':
      enterAbdTrainDildosAnalGate(s, scene);
      break;
    case 'abdTrainDildosMouthGate':
      enterAbdTrainDildosMouthGate(s, scene);
      break;
    case 'abdTrainDildosSmall':
      enterAbdTrainDildosSmall(s, scene);
      break;
    case 'abdTrainDildosSmallUse':
      enterAbdTrainDildosSmallUse(s, scene);
      break;
    case 'abdTrainDildosRegular':
      enterAbdTrainDildosRegular(s, scene);
      break;
    case 'abdTrainDildosRegularUse':
      enterAbdTrainDildosRegularUse(s, scene);
      break;
    case 'abdTrainDildosBig':
      enterAbdTrainDildosBig(s, scene);
      break;
    case 'abdTrainDildosBigUse':
      enterAbdTrainDildosBigUse(s, scene);
      break;
    case 'abdTrainDildosHorse':
      enterAbdTrainDildosHorse(s, scene);
      break;
    case 'abdTrainDildosHorseUse':
      enterAbdTrainDildosHorseUse(s, scene);
      break;
    case 'abdTrainDildosAnalSmall':
      enterAbdTrainDildosAnalSmall(s, scene);
      break;
    case 'abdTrainDildosAnalSmallUse':
      enterAbdTrainDildosAnalSmallUse(s, scene);
      break;
    case 'abdTrainDildosAnalRegular':
      enterAbdTrainDildosAnalRegular(s, scene);
      break;
    case 'abdTrainDildosAnalRegularUse':
      enterAbdTrainDildosAnalRegularUse(s, scene);
      break;
    case 'abdTrainDildosAnalBig':
      enterAbdTrainDildosAnalBig(s, scene);
      break;
    case 'abdTrainDildosAnalBigUse':
      enterAbdTrainDildosAnalBigUse(s, scene);
      break;
    case 'abdTrainDildosAnalHorse':
      enterAbdTrainDildosAnalHorse(s, scene);
      break;
    case 'abdTrainDildosAnalHorseUse':
      enterAbdTrainDildosAnalHorseUse(s, scene);
      break;
    case 'abdTrainDildosMouthSmall':
      enterAbdTrainDildosMouthSmall(s, scene);
      break;
    case 'abdTrainDildosMouthSmallUse':
      enterAbdTrainDildosMouthSmallUse(s, scene);
      break;
    case 'abdTrainDildosMouthRegular':
      enterAbdTrainDildosMouthRegular(s, scene);
      break;
    case 'abdTrainDildosMouthRegularUse':
      enterAbdTrainDildosMouthRegularUse(s, scene);
      break;
    case 'abdTrainDildosMouthBig':
      enterAbdTrainDildosMouthBig(s, scene);
      break;
    case 'abdTrainDildosMouthBigUse':
      enterAbdTrainDildosMouthBigUse(s, scene);
      break;
    case 'abdTrainDildosMouthHorse':
      enterAbdTrainDildosMouthHorse(s, scene);
      break;
    case 'abdTrainDildosMouthHorseUse':
      enterAbdTrainDildosMouthHorseUse(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const abduction: LocationDef = {
  name: 'abduction',
  title: 'You suddenly hear what sounds like someone rushing up behind',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
