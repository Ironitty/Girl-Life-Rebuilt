import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  scene.img(`images/locations/shared/abduction/girltocar${((s as any).i ?? 0)}.jpg`);
  scene.text('You suddenly hear what sounds like someone rushing up behind you, but before you can turn and look, you feel something hit your head hard. You stumble as your vision goes black…');
  scene.actions([
    { label: 'Pass out', goto: ['abduction', 'abdCarTrunk'] },
  ]);
  scene.build();
}

function enterAbdCarTrunk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/abduction/trunkint1.jpg');
  scene.text('You wake up in a very tight, dark place. You quickly realize that you\'re in the trunk of a moving car.');
  scene.text('You try to kick the walls with your feet, but after a while you can see that it\'s pointless.');
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
        // TODO-QSP: act 'Plead that you can''t take any more': gt 'abduction', 'abdBreak1'
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
        // TODO-QSP: act 'Please fuck my pussy, Master': gt 'abduction', 'abdBreak2FuckA1'
      }
      scene.actions([
        { label: 'Please fuck my mouth Master', goto: ['abduction', 'abdBreak2FuckB1'] },
      ]);
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        // TODO-QSP: act 'You… you are my master. Please accept my pussy for your use…': gt 'abduction', 'abdBreak2FuckA1...
      }
      scene.actions([
        { label: 'You… you are my master. Please accept my mouth for your use…', goto: ['abduction', 'abdBreak2FuckB1'] },
      ]);
    }
  }
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
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdTorture'] },
  ]);
  scene.build();
}

function enterAbdBrokenAsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('Your master responds. "Very good. What do you want me to do to you, slave?"');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    // TODO-QSP: act 'Please fuck my pussy, Master': gt 'abduction', 'abdBreak2FuckA1'
  }
  if (((s as any).broken ?? 0) >= 5) {
    // TODO-QSP: act 'Please rape me, Master': gt 'abduction', 'abdRape'
  }
  if (((s as any).broken ?? 0) >= 10) {
    // TODO-QSP: act 'Please punish me, Master': gt 'abduction', 'abdTorture'
  }
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
  scene.actions([
    { label: 'Continue', goto: ['abduction', 'abdRoom'] },
  ]);
  scene.build();
}

function enterAbdSleep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'forced', 240);
  scene.img('images/locations/shared/abduction/bed1.jpg');
  scene.text('You\'ve slept for several hours, but nightmares have awakened you.');
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
      // TODO-QSP: act 'Use breast pump': gt 'lact_bp', 'bp_milking'
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const abduction: LocationDef = {
  name: 'abduction',
  title: 'You suddenly hear what sounds like someone rushing up behind',
  region: 'other',
  locationType: 'private',
  description: ['You suddenly hear what sounds like someone rushing up behind you, but before you can turn and look, you feel something hit your head hard. You stumble as your vision goes black…'],
  enter: enter,
};
