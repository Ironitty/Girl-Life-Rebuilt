import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).anushkaQW['num_tour_SMS_send'] = ((s as any).anushkaQW['num_tour_SMS_send'] ?? 0) + (1);
  (s as any).anushkaQW['tour_SMS_send'] = ((s as any).daystart ?? 0);
  if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 1) {
    qspCall(s, 'band_tour_anushka_SMS', 'Week1', 'Add SMS');
  } else {
    if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 2) {
      qspCall(s, 'band_tour_anushka_SMS', 'Week2', 'Add SMS');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 3) {
        qspCall(s, 'band_tour_anushka_SMS', 'Week3', 'Add SMS');
      } else {
        if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 4) {
          qspCall(s, 'band_tour_anushka_SMS', 'Week4', 'Add SMS');
        } else {
          if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 5) {
            qspCall(s, 'band_tour_anushka_SMS', 'Week5', 'Add SMS');
          } else {
            if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 6) {
              qspCall(s, 'band_tour_anushka_SMS', 'Week6', 'Add SMS');
            } else {
              if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 7) {
                qspCall(s, 'band_tour_anushka_SMS', 'Week7', 'Add SMS');
              } else {
                if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 8) {
                  qspCall(s, 'band_tour_anushka_SMS', 'Week8', 'Add SMS');
                } else {
                  if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 9) {
                    qspCall(s, 'band_tour_anushka_SMS', 'Week9', 'Add SMS');
                  } else {
                    if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 10) {
                      qspCall(s, 'band_tour_anushka_SMS', 'Week10', 'Add SMS');
                    } else {
                      if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 11) {
                        qspCall(s, 'band_tour_anushka_SMS', 'Week11', 'Add SMS');
                        (s as any).gopnikbandQW['on_tour'] = 0;
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
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'A144');
  scene.build();
}

function enterWeek1(s: GameState, scene: SceneBuilder): void {
  (s as any).SMSTree['0'] = '"Hey, what up? Just got up, it was a long night last night. Did our first gig at this little club in Pskov, it was pretty cool. Stayed up drinking afterwards, have a hell of a headache. Hope you are having half as much fun as I am bitch." Her text is followed by emojis aligned in a lewd way.';
  (s as any).SMSTree['a1'] = 'Good luck!';
  if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
    qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week1.jpg');
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a1'], 'band_tour_anushka_SMS', 'Week1', 'Choice_a'
    qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Choice_a') {
      (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A144')", { location: "band_tour_anushka_SMS" });
      if (((s as any).temp_pos ?? 0) === -1  ||  ((s as any).contactAnon ?? 0)?.[String((s as any).temp_pos ?? 0)] === 1) {
        qspCall(s, 'telefon', 'AddContact', 'A144', 'images/characters/shared/headshots_main/big144.jpg', 0);
      }
      qspCall(s, 'SMStext_builder', 'start');
      // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['a1']
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      qspCall(s, 'SMStext_builder', 'end');
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'Week2') {
    (s as any).SMSTree['0'] = '"Got to Smolensk, been playing most nights in local clubs. Going to do a little site seeing today, the boys are all out still. Was a hell of a party last night, so many bitches just throwing themselves at the boys and boy do they love it." Her text is followed by emojis aligned in a lewd way.';
    if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
      qspCall(s, 'SMStext_builder', 'start');
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
      qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week2.jpg');
      qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
      qspCall(s, 'SMStext_builder', 'end');
    }
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'Week3') {
      (s as any).SMSTree['0'] = '"We got to Minsk just in time for Рок За Бобров festival, it was amazing. We camped out all four days. So many bands, so much good music, we got to get up on stage as well. Not the main stage but one of the side stages. So fucking cool, I want to come back next year and do it again." A string of excited emojis follow the text';
      if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
        qspCall(s, 'SMStext_builder', 'start');
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
        qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week3.jpg');
        qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
        qspCall(s, 'SMStext_builder', 'end');
      }
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'Week4') {
        (s as any).SMSTree['0'] = '"We made Kyiv in time for Atlas music festival, they also had a beer festival and a lot of tattoo artists. I was going to get a new tattoo, but the wait was too long. Val got so drunk we had to carry him back to the hotel."';
        if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
          qspCall(s, 'SMStext_builder', 'start');
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
          qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week4.jpg');
          qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
          qspCall(s, 'SMStext_builder', 'end');
        }
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'Week5') {
          (s as any).SMSTree['0'] = '"Third festival in a row, we made the Маяк Fest here in Odessa. So cool, I am loving this trip. Spent a lot of time at the music festival, played some gigs, but spent a lot of the time at the beach. I wish another girl had come, hanging out with just the boys is getting old." emoji of a gun to head.';
          if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
            qspCall(s, 'SMStext_builder', 'start');
            // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
            qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week5.jpg');
            qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
            qspCall(s, 'SMStext_builder', 'end');
          }
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'Week6') {
            (s as any).SMSTree['0'] = '"There was some watermelon festival going on here at Rostov, Arkadi entered into the eating contest and lost, we took some with us for our next drive. Played at a lot of small clubs while here."';
            if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
              qspCall(s, 'SMStext_builder', 'start');
              // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
              qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week6.jpg');
              qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
              qspCall(s, 'SMStext_builder', 'end');
            }
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'Week7') {
              (s as any).SMSTree['0'] = '"Had some big gigs in Volgograd, followed by a two day party at some girls place. I don\'t remember half of it, but I woke up in the van, somehow we picked up two bitches who are now with us, the guys take turns fucking them in the back, as we drive." Followed by several lewd emojis for sex';
              if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
                qspCall(s, 'SMStext_builder', 'start');
                // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
                qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week7.jpg');
                qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
                qspCall(s, 'SMStext_builder', 'end');
              }
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'Week8') {
                (s as any).SMSTree['0'] = '"Had some great gigs here in Voronezh, one of the bitches took off, getting a bus ride home. Anna stayed, she seems to love it when I drive, so the boys can triple team her. The rest of the time she spends passed out from drinking too much, she is starting to get on my nerves."';
                if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
                  qspCall(s, 'SMStext_builder', 'start');
                  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
                  qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week8.jpg');
                  qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
                  qspCall(s, 'SMStext_builder', 'end');
                }
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'Week9') {
                  (s as any).SMSTree['0'] = '"Moscow is huge and amazing, had a blast here. Getting sick of the boys, after two months with them I am ready to strangle them. At least we ditched the bitch, we just left her passed out in the hotel room."';
                  if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
                    qspCall(s, 'SMStext_builder', 'start');
                    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
                    qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week9.jpg');
                    qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
                    qspCall(s, 'SMStext_builder', 'end');
                  }
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'Week10') {
                    (s as any).SMSTree['0'] = '"On the way to Novgorod I almost jumped out of the van. We stopped at some diner and the boys all had this bean stew. Within an hour the van was like a toxic gas zone. they made a game out of who could fart the loudest, I almost threw up several times. Spent most of the time with my head hanging out the window." emoji of a vomiting face.';
                    if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
                      qspCall(s, 'SMStext_builder', 'start');
                      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
                      qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week10.jpg');
                      qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
                      qspCall(s, 'SMStext_builder', 'end');
                    }
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 'Week11') {
                      (s as any).SMSTree['0'] = '"Back home, can\'t believe it but I actually missed this place. Got to start packing tomorrow to move to the city and get ready for Uni."';
                      if (((s as any).locArgs?.[1] ?? 0) === 'Add SMS') {
                        qspCall(s, 'SMStext_builder', 'start');
                        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
                        qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/anushka/tour/week11.jpg');
                        qspCall(s, 'SMStext_builder', 'add_sms', 'A144');
                        qspCall(s, 'SMStext_builder', 'end');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Week1':
      enterWeek1(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const band_tour_anushka_SMS: LocationDef = {
  name: 'band_tour_anushka_SMS',
  region: 'other',
  enter: enter,
};
