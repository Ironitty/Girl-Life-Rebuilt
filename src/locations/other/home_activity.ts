import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWashSheets(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/system/image_needed.png');
  scene.text('You wash your sheets.');
  // TODO-QSP: act'Continue': gt 'bed_get_out', 'start'
  scene.build();
}

function enterVomitingCheck(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_at_a_home')) {
    qspCall(s, 'home_activity', 'vomiting_images');
    scene.actions([{ label: 'Continue', goto: ['home_activity', 'morning_vomit'] }]);
  } else {
    ((s as any).vomit ?? {})['morning_sick'] = 0;
    ((s as any).vomit ?? {})['hangover'] = 0;
    ((s as any).vomit ?? {})['unlucky'] = 0;
  }
  scene.build();
}

function enterVomitingImages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).at_home_txt ?? 0) === 'city_apartment') {
    if ((!((s as any).rembedr ?? 0))) {
      ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/apartment/bedr.jpg"></center>';
    } else {
      ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/apartment/bedr2.jpg"></center>';
    }
    if ((!((s as any).remvanr ?? 0))) {
      ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/apartment/vanr.jpg"></center>';
    } else {
      if (((s as any).remvanr ?? 0) === 1) {
        ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/shared/bathroom/vanr2.jpg"></center>';
      }
    }
  } else {
    if (((s as any).at_home_txt ?? 0) === 'parents_home') {
      ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg"></center>';
      ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg"></center>';
    } else {
      if (((s as any).at_home_txt ?? 0) === 'village_cottage') {
        if (qspFunc(s, 'homes_properties', 'is_property_renovated', 'village_cottage')) {
          ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/suburban/cottage/dacharoom2.jpg"></center>';
          ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/suburban/cottage/dacharoom2.jpg"></center>';
        } else {
          ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/suburban/cottage/dacharoom1.jpg"></center>';
          ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/suburban/cottage/dacharoom1.jpg"></center>';
        }
      } else {
        if (((s as any).at_home_txt ?? 0) === 'old_town_apartment') {
          ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/apartment/bedr2.jpg"></center>';
          ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pushkin/apartment/vanr2x.jpg"></center>';
        } else {
          if (((s as any).at_home_txt ?? 0) === 'matryona_mansion') {
            if (((s as any).ymanrem ?? 0)[4] === 2) {
              ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/y_bedroom.jpg"></center>';
            } else {
              if (((s as any).ymanrem ?? 0)[4] === 1) {
                ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/i_finished.jpg"></center>';
              } else {
                ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/i_unfinished.jpg"></center>';
              }
            }
            if (((s as any).ymanrem ?? 0)[5] === 2) {
              ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/y_bathroom.jpg"></center>';
            } else {
              if (((s as any).ymanrem ?? 0)[5] === 1) {
                ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/i_finished.jpg"></center>';
              } else {
                ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/suburb/mansion/i_unfinished.jpg"></center>';
              }
            }
          } else {
            if (((s as any).at_home_txt ?? 0) === 'pavlovsk_hotel') {
              if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) {
                ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal.jpg"></center>';
                ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.normal1.jpg"></center>';
              } else {
                if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 2  ||  ((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
                  ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.better.jpg"></center>';
                  ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.better1.jpg"></center>';
                } else {
                  if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 3) {
                    ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.best.jpg"></center>';
                    ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
                  }
                }
              }
              ((s as any).home_activity ?? {})['vomit_bedroom'] = '';
              ((s as any).home_activity ?? {})['vomit_bathroom'] = '';
              // TODO-QSP: 'vasilyhome', 'bathroom' !}
            } else {
              if (((s as any).at_home_txt ?? 0) === 'shared_apartment') {
                ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/shared/home/bedroom/sofabed.jpg"></center>';
                ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg"></center>';
                ((s as any).home_activity ?? {})['vomit_bedroom'] = '';
                ((s as any).home_activity ?? {})['vomit_bathroom'] = qspUntranslated(s, "'' !}", { location: "home_activity" });
              } else {
                if (((s as any).at_home_txt ?? 0) === 'city_house') {
                  ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/house/crh_bedroom.jpg"></center>';
                  ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/city/residential/house/crh_bathroom.jpg"></center>';
                } else {
                  if (((s as any).at_home_txt ?? 0) === 'meynold_household') {
                    ((s as any).home_activity ?? {})['vomit_bedroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/resident/meynolds/guestroom.jpg"></center>';
                    ((s as any).home_activity ?? {})['vomit_bathroom'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "home_activity" }) + ' src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
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

function enterMorningVomit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 3, 'head', 'ache');
  if (((s as any).region ?? 0) === 'gad') {
    ((s as any).lastwornclothingtype ?? {})['swim'] = ((s as any).clothingworntype ?? 0);
    ((s as any).lastwornclothingnumber ?? {})['swim'] = ((s as any).clothingwornnumber ?? 0);
    ((s as any).lastwornpantytype ?? {})['swim'] = ((s as any).pantyworntype ?? 0);
    ((s as any).lastwornpantynumber ?? {})['swim'] = ((s as any).pantywornnumber ?? 0);
    ((s as any).lastwornbratype ?? {})['swim'] = ((s as any).braworntype ?? 0);
    ((s as any).lastwornbranumber ?? {})['swim'] = ((s as any).brawornnumber ?? 0);
  }
  if (((s as any).loc ?? 0) !== 'uni_dorm') {
    qspCall(s, 'outfit', 'strip_all');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: $home_activity['vomit_bedroom']
  scene.text('Before you even open your eyes, your stomach churns. Nausea courses through you, acid burns at the back of your throat, and you know without a doubt:');
  scene.text('<b>You\'re about to throw up.</b>');
  scene.actions([
    { label: 'Run to the bathroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/home/bathroom/vomit.jpg');
    scene.text('Clamping your hand over your mouth, you scramble from your bed and tear your way to the bathroom. You barely manage to lift the lid up in time and violently hurl into the toilet bowl.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 7) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/home/bathroom/vomit_after.jpg');
    scene.text('After several minutes of retching, your stomach finally seems to be empty, and you just lay there, panting over the toilet bowl. You groan, headache pounding in your skull with the kind of throb that makes you think it\'s going to be there for the rest of the day.');
    if (((s as any).vomit ?? 0)?.['hangover'] === 1) {
      scene.text('<i>Ugh, maybe I had too much to drink last night...</i> you think to yourself as you lay there on the floor.');
    } else {
      if (((s as any).vomit ?? 0)?.['morning_sick'] === 1) {
        if (((s as any).knowpreg ?? 0) === 1) {
          if ((!((s as any).morning_sickness ?? 0))) {
            (s as any).morning_sickness = 1;
            scene.text('<i>Ugh, is this what morning sickness feels like?</i> you think to yourself as you lay there on the floor.');
          } else {
            scene.text('<i>Ugh! Why does pregnancy have to come with so many side effects...</i> you think to yourself as you lay there on the floor.');
          }
        } else {
          if (((s as any).thinkpreg ?? 0) === 1) {
            qspCall(s, 'home_activity', 'think_preg_react');
          } else {
            if ((!((s as any).knowpreg ?? 0))) {
              if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 35  &&  (Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_intel ?? 0)) {
                qspCall(s, 'home_activity', 'preg_scare');
              } else {
                scene.text('<i>Ugh, I feel awful! I wonder if I should see a doctor?</i> you think to yourself as you lay there on the floor.');
              }
            }
          }
        }
      } else {
        if (((s as any).vomit ?? 0)?.['unlucky'] === 1) {
          scene.text('<i>Ugh, I feel awful! I wonder if I should see a doctor?</i> you think to yourself as you lay there on the floor.');
        }
      }
    }
    if (((s as any).loc ?? 0) === 'mey_home') {
      scene.actions([
        { label: 'Continue', goto: ['mey_home', 'mey_morning_vomit'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPregScare(s: GameState, scene: SceneBuilder): void {
  (s as any).thinkpreg = 1;
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.text('<i>Ugh, I feel awful!</i> you think to yourself. <i>I wonder if-</i>');
    scene.text('The blood drains from your face with a sudden realization:');
    if (((s as any).daystart ?? 0) - ((s as any).stat ?? 0)?.['last_creampie_known'] < 30) {
      if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 35)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 42)) {
        scene.text('You\'ve been having sex, your period is a week late, and you\'re throwing up in the morning.');
      } else {
        if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 42)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 56)) {
          scene.text('You\'ve been having sex, your period is two weeks late, and you\'re throwing up in the morning.');
        } else {
          if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 56) {
            scene.text('You\'ve been having sex, your period is a month late, and you\'re throwing up in the morning.');
          } else {
            if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 35)) {
              scene.text('You\'ve been having sex, your period is late, and you\'re throwing up in the morning.');
            }
          }
        }
      }
      scene.text('Are you...<i>pregnant?</i>');
    } else {
      if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 35)) {
        scene.text('Your period is late and you\'re throwing up in the morning.');
      } else {
        if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 35)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 42)) {
          scene.text('Your period is a week late and you\'re throwing up in the morning.');
        } else {
          if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 42)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 56)) {
            scene.text('Your period is two weeks late and you\'re throwing up in the morning.');
          } else {
            if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 56) {
              scene.text('Your period is a month late and you\'re throwing up in the morning.');
            }
          }
        }
      }
      scene.text('Are you...<i>pregnant?</i> But how? You haven\'t had sex with a man in weeks!');
    }
  } else {
    if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 35)) {
      scene.text('Your period is late and you\'re throwing up in the morning.');
    } else {
      if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 35)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 42)) {
        scene.text('Your period is a week late and you\'re throwing up in the morning.');
      } else {
        if ((((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 42)  &&  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) <= 56)) {
          scene.text('Your period is two weeks late and you\'re throwing up in the morning.');
        } else {
          if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 56) {
            scene.text('Your period is a month late and you\'re throwing up in the morning.');
          }
        }
      }
    }
    scene.text('Are you...<i>pregnant?</i>');
    scene.text('But you\'ve never had sex! This can\'t be true!');
  }
  if (((s as any).loc ?? 0) === 'mey_home') {
    scene.actions([
      { label: 'Continue', goto: ['mey_home', 'mey_preg_scare'] },
    ]);
  } else {
    qspCall(s, 'home_activity', 'preg_scare_react');
  }
  scene.build();
}

function enterThinkPregReact(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'This is scaring you', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('Anxiety fills your chest, replacing the bile recently vacated from it.');
    scene.text('You don\'t like the frequency with which this is happening. More and more, the evidence is pointing towards you being pregnant.');
    scene.text('<i>What am I going to do?</i> you think to yourself.');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    { label: 'I better not be pregnant', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('Disgust and irritation fill you as you reach out to flush the toilet.');
    scene.text('<i>Oh God,</i> you groan internally. <i>I swear, this better be a stomach bug and not pregnancy. I am not ready for motherhood.</i>');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    { label: 'I can\'t wait for this baby', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('Even through the pain and the horrid taste on your lips, you can\'t help but smile.');
    scene.text('<i>I\'m so ready for this baby!</i> you think excitedly.');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    { label: 'Baby good, morning sickness bad', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('You clutch your head, wincing at the sharp pain that lances through it.');
    scene.text('<i>This baby can not come sooner,</i> you think to yourself. <i>Really looking forward to watching it grow, but <b>really</b> hate this pregnancy stuff.</i>');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPregScareReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'This is impossible', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('<i>This doesn\'t make any sense,</i> you think, putting your hand on your head as you feel woozy again.');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['vaginal'] === 1) {
      scene.actions([
        { label: 'You\'ve only had sex once!', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('<i>But I\'ve only had sex once!</i> you cry internally. <i>How can I already be pregnant?!</i>');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'I need a test!', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('<i>I need to take a pregnancy test right now!</i> you think urgently. <i>I need to figure out what is going on!</i>');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    { label: 'This is really bad', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    scene.text('<i>This is really really bad!</i> you think, the blood draining from your face. <i>I don\'t want to be a mom! Not now!</i>');
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
    { label: 'This is wonderful!', handler: (st: GameState) => {
    // TODO-QSP: $home_activity['vomit_bathroom']
    if ((!((s as any).kid ?? 0))) {
      scene.text('<i>I\'m going to be a mom!</i> you think, smiling to yourself. <i>This is the best day of my life!</i>');
    } else {
      scene.text('<i>I\'m going to have another baby!</i> you think, smiling to yourself. <i>This is wonderful!</i>');
    }
    scene.actions([
      { label: 'Continue', goto: ['bed_get_out', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVomitingExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).vomit ?? {})['morning_sick'] = 0;
  ((s as any).vomit ?? {})['hangover'] = 0;
  ((s as any).vomit ?? {})['unlucky'] = 0;
  qspCall(s, 'homes_properties', 'go_bathroom');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'wash_sheets':
      enterWashSheets(s, scene);
      break;
    case 'vomiting_check':
      enterVomitingCheck(s, scene);
      break;
    case 'vomiting_images':
      enterVomitingImages(s, scene);
      break;
    case 'morning_vomit':
      enterMorningVomit(s, scene);
      break;
    case 'preg_scare':
      enterPregScare(s, scene);
      break;
    case 'think_preg_react':
      enterThinkPregReact(s, scene);
      break;
    case 'preg_scare_react':
      enterPregScareReact(s, scene);
      break;
    case 'vomiting_exit':
      enterVomitingExit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const home_activity: LocationDef = {
  name: 'home_activity',
  title: 'You wash your sheets.',
  region: 'other',
  enter: enter,
};
