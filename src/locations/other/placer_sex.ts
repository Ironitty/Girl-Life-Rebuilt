import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDinDush(s: GameState, scene: SceneBuilder): void {
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  // TODO-QSP: dynamic text: <<$din_dush_text>>
  scene.text(`${((s as any).din_dush_text ?? 0)}`);
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  scene.build();
}

function enterDinAnalPlugInOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).analPlugInbonus = 10;
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex16.mp4');
  scene.build();
}

function enterSittingParkBench(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 7  &&  ((s as any).pcs_apprnc ?? 0) >= 120) {
    scene.actions([{ label: 'Continue', goto: ['placer_sex', 'sleeping_park_alco_rape'] }]);
  } else {
    if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
      // TODO-QSP: iif(rand(0, 1)=1, '<center><img <<$set_imgh>> src="images/locations/shared/park/bench_5.jpg"></cente...
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/shared/park/bench_2.jpg');
      } else {
        if (((s as any).PCloPants ?? 0) > 3) {
          scene.img('images/locations/shared/park/bench_1.jpg');
        } else {
          scene.img('images/locations/shared/park/bench_3.jpg');
        }
      }
    }
    (s as any).waiting = qspUntranslated(s, "val(input(\"How long would you like to rest?<br>(Default 15 minutes, maximum 120 minutes)\"))", { location: "placer_sex" });
    if (((s as any).alko ?? 0) >= 4) {
      scene.actions([{ label: 'Continue', goto: ['placer_sex', 'sleeping_park_bench'] }]);
    }
    if ((!((s as any).waiting ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
    } else {
      if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
        qspCall(s, 'mood', 'raise', 'tiny');
        if (((s as any).pcs_sleep ?? 0) < 90  &&  ((s as any).waiting ?? 0) >= 60) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
        }
      }
    }
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  }
  scene.build();
}

function enterSleepingParkBench(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  (s as any).pcs_hairbsh = 0;
  (s as any).inSleep = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 480;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (80);
  qspCall(s, 'stat', '');
  (s as any).inSleep = 0;
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img('images/locations/shared/park/sleeping_park_form.jpg');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/shared/park/sleeping_park_dress.jpg');
    } else {
      if (((s as any).PCloPants ?? 0) > 3) {
        scene.img('images/locations/shared/park/sleeping_park_shorts.jpg');
      } else {
        scene.img('images/locations/shared/park/sleeping_park_jeans.jpg');
      }
    }
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    scene.text('Makeup smeared in the face, you think, that is harmful to the appearance of sleep with makeup, skin ages faster from this.');
  }
  scene.text('You\'re feeling tired, and decide to try and get some sleep on the park bench.');
  scene.text('');
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    if (((s as any).PCloSkirt ?? 0) === 4) {
      scene.img('images/locations/shared/park/sleeping_park1.jpg');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        qspCall(s, 'underwear', 'dispose');
        scene.text('You wake up with a smile, stretching your arms and legs. You realize your panties are missing and quickly close your legs. You fearfully think to yourself : "I hope that whoever took my panties did not take advantage of me while I was out".');
      } else {
        scene.text('You wake up with a smile, stretching your arms and legs, flashing your bare pussy to the entire Park.');
      }
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/shared/park/sleeping_park.jpg');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          qspCall(s, 'underwear', 'dispose');
          scene.text('You wake up with a smile, stretching your arms and legs. You realize your panties are missing and quickly close your legs. You fearfully think to yourself : "I hope that whoever took my panties did not take advantage of me while I was out".');
        } else {
          scene.text('You wake up with a smile, stretching your arms and legs, flashing your bare pussy to the entire Park.');
        }
      } else {
        scene.img('images/locations/shared/park/sleeping_park2.jpg');
        scene.text('You wake up with a smile, stretching your arms and legs.');
      }
    }
    if ((Math.floor(Math.random() * 10) + 1) <= 6  &&  ((s as any).money ?? 0) !== 0) {
      scene.text('You now realize someone stole your money while you were sleeping!');
      qspCall(s, 'money', 'set', 0, 'cash');
    }
    (s as any).temp = Math.floor(Math.random() * 10) + 1;
    if (((s as any).temp ?? 0) <= 8) {
      qspCall(s, 'npcgeneratec', '', 0, 'stranger park', Math.floor(Math.random() * 31) + 30);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      if (((s as any).PCloSkirt ?? 0) !== 0) {
        if (((s as any).temp ?? 0) === 3) {
          scene.text('You feel something sticky on your labia, what the hell is this?');
          qspCall(s, 'cum_call', 'labia', 'stranger park', 2);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.text('You feel something sticky on your legs, what the hell is this?');
            qspCall(s, 'cum_call', 'legs', 'stranger park', 2);
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.text('You feel something sticky on your butt, what the hell is this?');
              qspCall(s, 'cum_call', 'butt', 'stranger park', 2);
            }
          }
        }
      } else {
        if (((s as any).temp ?? 0) === 1) {
          scene.text('You feel something sticky on your hair, what the hell is this?');
          qspCall(s, 'cum_call', 'hair', 'stranger park', 2);
        } else {
          if (((s as any).temp ?? 0) === 2) {
            scene.text('You feel something sticky on your face, what the hell is this?');
            qspCall(s, 'cum_call', 'face', 'stranger park', 2);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.text('You feel something sticky on your hands, what the hell is this?');
              qspCall(s, 'cum_call', 'hands', 'stranger park', 2);
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.text('You feel something sticky on your clothes, what the hell is this?');
                qspCall(s, 'cum_call', 'clothes', 'stranger park', 2);
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  scene.text('You feel something sticky and a salty taste in your mouth, what the hell is this?');
                  qspCall(s, 'cum_call', 'mouth', 'stranger park', 2);
                }
              }
            }
          }
        }
      }
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepingParkAlcoRape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_1.jpg');
  scene.text('Maybe it\'s the alcohol, or maybe you just haven\'t slept well… but you feel tired. You sit down on the park bench, wanting to rest your exhausted body for a while. Slowly, your eyes begin to close. Realizing that it could be dangerous to fall asleep in a public place like the park, you do your best to stay awake. The alcohol in your blood makes it impossible though, and you slowly feel your consciousness drift away.');
  scene.text('A few minutes later, you\'re vaguely aware of the fact that someone is dragging you up from the park bench. You\'re too drunk to do anything about it though, and slowly fade out again.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_2.jpg');
    scene.text('The next thing you remember is being taken somewhere. Someone has thrown you over their shoulder, and is hauling you off like you\'re a sack of potatoes. You already felt sick to your stomach before, and this position is making it even worse; his shoulder is lodged against your stomach, and your head is hanging upside down. You try to protest, but all that comes out of your mouth is some incoherent, drunken slurring. The person carrying you either doesn\'t care or doesn\'t notice, and just keeps walking.');
    scene.text('When you briefly come to your senses again you notice you\'re indoors now, still being carried by this stranger. A terrible thought crosses your mind: "Oh god… no one knows I\'m here! What if he\'s going to kill me!?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_3.jpg');
    scene.text('Suddenly you feel your balance shifting, and you feel a soft ground underneath you… are you on a bed?');
    scene.text('You silently feel grateful just to have something soft underneath you, and your nauseated feelings lessen a bit now that you\'re no longer in this awkward position over his shoulder.');
    scene.text('When you open your eyes, you see the vague contours of a man. The last things you catch before passing out again, is that he\'s beginning to undress you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_4.jpg');
    scene.text('…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_5.jpg');
    scene.text('When you regain consciousness again, you slowly open your eyes and get startled by the look of a naked guy, sitting right next to your head. Your body is not very willing to cooperate when you want to get away from him, and you barely manage to pull your face away from his groin as you mumble: "Wha… who are you? Where am I?"');
    scene.text('Slowly, your mind puts the pieces together - this guy brought you here, after you passed out on the park bench!');
    scene.text('There is some threat in his voice when he speaks: "You\'re not going to do anything stupid, are you?');
    scene.text('You try to reassure him: "No, don\'t worry. Thank you for taking me out of the park, I don\'t know what could\'ve happened to me there!"');
    scene.text('The man smirks at your naivete, and without changing his tone says: "It already happened, you idiot. Now take off your clothes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 18) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).cumprecheck = 1;
    (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_6.jpg');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Your eyes grow wide, and you cry out: "Please, sir! Please, I\'m begging you! I\'m still a virgin… I can\'t lose my virginity like this!"');
      scene.text('The guy is not interested in your pleas: "Look, girl. This can go two ways… either you take your clothes off for me, or I will do it for you. What\'s it going to be?"');
      scene.text('You realize he\'s not going to let you go. With tears in your eyes you slowly begin to take off your clothes, softly begging the whole time: "Please, sir… please don\'t do this…"');
    } else {
      scene.text('For a moment you consider pretending to be a virgin, hoping that will get him to show you some mercy. You take another look at his face, and the sparkle in his eyes make you realize he\'s not going to fall for that. You let out a soft sigh and resign to your fate.');
      scene.text('When you begin to take your clothes off, the guy even helps you. He gently runs his hands all over your body while he assists you, and you feel slightly confused. For someone who is forcing you to take your clothes off, he\'s surprisingly kind and gentle.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_7.jpg');
    if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('His stone cold expression never leaves his face, while he orders you in an even tone: "Good, now suck my cock."');
      scene.text('It\'s still flaccid, and you hesitantly close your lips around it. You put one hand near the base to help yourself while you slowly feel his cock harden between your lips, never taking it out of your mouth. It\'s a bit longer than you expected it to be, and you have a rough time suppressing your gag reflex when it hits the back of your throat.');
      scene.text('He\'s not very impressed with your efforts so far, and moans: "Come on, street trash… put some effort into it!"');
      scene.text('"This doesn\'t feel real, I must still be asleep!" you reassure yourself. "I will wake up, and everything will be fine."');
      qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_8.jpg');
    scene.text('Unfortunately, all is not fine. Getting tired of your mouth, he pulls you towards him and tosses you down onto the bed in one fluent motion. He barrels down on top of you, and you feel his erection pressing against your stomach.');
    scene.text('A thought flashes through your head: "Oh god, he\'s going to rape me now! I don\'t want this… this can\'t be happening!"');
    scene.text('During this time, you feel his erection slowly making its way down, towards your coveted cunt. You barely have time to mentally prepare yourself, because he slams his hips against yours and thrusts his long and big cock deep inside you as soon as he reaches it.');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_9.mp4');
    scene.text('It feels like he\'s forcing a hot lead pipe inside you! You\'ve thought about sex many times, but you never imagined it being quite as painful as it is right now.');
    scene.text('The rapist ignored your screams and fucks you mercilessly. Some of your blood is on the sofa, but that doesn\'t stop him. If anything, your suffering only makes him fucks you harder. His hands knead your breasts roughly while he thrusts his cock inside you faster and faster.');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_10.mp4');
    scene.text('The torture goes on for another few minutes, even though it feels like an eternity. Then finally the guy reaches his orgasm, and he just rests his body on top of yours when he pumps his cum deep inside your pussy. When he pulls out of you, he gets up from the bed to examine his victim.');
    scene.text('You\'re lying there on his bed, a mixture of blood and semen leaking from your painful vagina. Tears stream down your face while you look at him fearfully… what is he going to do with you now?');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_11.jpg');
    scene.text('For the first time, you see a smile on your rapist\'s face. It\'s a cruel, sadistic smile. He asks: "Well, how do you feel?"');
    scene.text('You cry out: "How the fuck do you think I feel!? Fuck you!"');
    scene.text('He\'s infuriated by your swearing, and balls his fist as he screams: "WHAT!? What did you just say!?');
    scene.text('"N- nothing sir! I said nothing!" you hastily reply.');
    scene.text('It doesn\'t help. He grabs your hair and forcefully pulls you up from the bed, forcing you to stand close in front of him. A hard slap in the face makes you lose your balance, and you hit your head against a cabinet as you struggle to stay on your feet.');
    scene.text('"You keep that mouth in check, bitch. Next time I won\'t be so kind" he growls at you.');
    scene.text('If that was kind, you don\'t want to know what the alternative is! You nod, terrified of what he could do to you.');
    scene.text('He nods, his anger slowly subsiding: "Good. Now go take a shower, girl. I want to watch you wash my cum off your body."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_12.jpg');
    scene.text('You feel exhausted, and think to yourself: "I can barely stand… I was such a fool to sleep in the park, I just want to go home!", while you climb in the tub and get down on your knees.');
    scene.text('The man\'s patience wears thin when you take too long to get started for his tastes, and he scolds you: "Do you not understand how to wash yourself, bitch?"');
    scene.text('With these words he gets into the tub with you and grabs hold of your hair. Your head is right between his legs, and he crudely shoves his cock inside your open mouth. He fucks your mouth for a while, not allowing you to pull your head away despite your best attempts.');
    scene.text('During the struggling he forces his cock all the way down your throat, and you nearly throw up from the deep intrusion.');
    scene.text('A powerful stream of semen enters your mouth, and he groans at you: "Eat up, bitch. Here it comes!"');
    scene.text('You nearly choke on his semen, while you do your best to swallow his load. You don\'t catch all of it, and some of his cum dribbles down your chin, onto your chest.');
    scene.text('The man scolds you once more: "Bitch, I told you to swallow that!" as he pushes you away from him.');
    scene.text('You fall back into the bathtub, and cower in the corner while you beg him with tears in your eyes: "I\'m sorry sir! Just please, don\'t hit me!"');
    qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_13.jpg');
    scene.text('"He waves his hand at you and says with a satisfied grin: "I guess I can\'t be too mad, you fully drained me. Go on, get dressed.');
    scene.text('This might be it! You quickly wipe the tears from your eyes and rush to your stuff. You quickly gather your things after you put your clothes back on. Hopefully he will let you go now.');
    scene.text('Indeed he does, but not before he warns you: "If you tell anyone what happened, I will find you. I will find you and I will kill you. Understood?"');
    scene.text('You quickly nod: "I won\'t tell anyone, I promise", feeling your body tense up again out of fear.');
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
    (s as any).flag_rape_1 = 1;
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'huge');
    (s as any).pcs_horny = 0;
    (s as any).vgape = 2;
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('He nods contently and continues: "Good, now suck my cock."');
      scene.text('You were already expecting him to say that, and nod as you get down on your knees before him. You take his flaccid member in your hand, and obediently close your lips around the head. You gently begin to suck on it, teasing it with your tongue. It\'s growing steadily, and you feel it harden inside your mouth.');
      qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_14.jpg');
    scene.text('Soon you have his dick fully erect and you shamefully realize you\'re giving this blowjob way more effort than you probably should, given the circumstances. The whole situation has you rather aroused despite the start, and you feel a burning desire between your legs.');
    qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_15.jpg');
    scene.text('Once he\'s sufficiently warmed up, he gets up and puts you on the bed on your hands and knees, before positioning behind you. You can\'t see his eyes from your position, but they\'re wild, burning with passion and promising fun. With a roar he grabs onto your hips and forces his cock inside you, nearly making you pass out from the sudden sensations.');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_16.jpg');
    scene.text('Great waves of pleasure hit your body while your supposed rapist fucks you from behind, and you feel ashamed about the fact that he turns you on so much. He roughly grabs onto your breasts and squeezes your nipples while he fucks you, and after a while you feel you slapping your hips into his thrusts enthusiastically.');
    scene.text('When you feel him slow down, you push him down onto the bed, and get right back onto his cock as you begin to ride him. It started as rape but by now you\'re taking the initiative, actively fucking the guy.');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_10.mp4');
    scene.text('You feel his thrusts becoming shorter and more intense, and you realize he\'s about to have his orgasm. With the last bit of air in your lungs you squeak: "Please, not inside me!"');
    scene.text('He ignores it, and pushes you down on your stomach while he thrusts his cock inside you as deep as he can. He\'s very deep inside you and for a second you wonder if he\'s trying to shoot the powerful spurts of his cum straight into your uterus. The feeling sends you over the edge as well, and you groan: "Yeeeesssss" as the orgasm rocks your body.');
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_13.jpg');
    scene.text('The two of you lie down for a while to catch your breath. You look at him and ask: "Can I please go now?"');
    scene.text('"So you can get yourself into more trouble?" asks the guy.');
    scene.text('You hastily reply: "Nope, no trouble. I\'m just going to go home and lay low for a while."');
    scene.text('He nods and says, with some concern in his voice: "Yes, of course you can go. Just promise me you won\'t go binge drinking again like that. Or if you do, at least do it somewhere safe so you don\'t end up alone in the park."');
    scene.text('You promise, talking to yourself as much as to him: "I won\'t, I\'ve learned my lesson."');
    scene.text('You quickly gather your things and get dressed, eager to leave this place before he can change his mind.');
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    }
    (s as any).flag_rape_1 = 2;
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).dick ?? 0) - ((s as any).pcs_vag ?? 0) > 8) {
      (s as any).vgape = 2;
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'din_dush':
      enterDinDush(s, scene);
      break;
    case 'din_analPlugIn_off':
      enterDinAnalPlugInOff(s, scene);
      break;
    case 'sitting_park_bench':
      enterSittingParkBench(s, scene);
      break;
    case 'sleeping_park_bench':
      enterSleepingParkBench(s, scene);
      break;
    case 'sleeping_park_alco_rape':
      enterSleepingParkAlcoRape(s, scene);
      break;
    default:
      enterDinDush(s, scene);
      break;
  }
}

export const placer_sex: LocationDef = {
  name: 'placer_sex',
  title: '<br>Your deodorant gets washed away in the shower.',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
