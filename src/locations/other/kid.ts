import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/pc/body/tits/breast_feed.jpg');
  // TODO-QSP: dynamic text: You pick up <<$kidname[ks]>> from <<$kidPosPro[ks]>> crib and cuddle for a momen...
  scene.text(`You pick up ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} from ${((s as any).kidPosPro ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} crib and cuddle for a moment before exposing your breast.`);
  if ((Math.floor(Math.random() * 10) + 1) === 10) {
    // TODO-QSP: dynamic text: You lift <<$kidname[ks]>> to your breast but your <<$sdtext[ks]>> doesn't latch ...
    scene.text(`You lift ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} to your breast but your ${((s as any).sdtext ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} doesn't latch on.`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
    (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, 15);
    if (((s as any).milkedvolume ?? 0) < 800) {
      // TODO-QSP: dynamic text: You lift <<$kidname[ks]>> to your breast and feed your baby <<$polreb[ks]>>. You...
      scene.text(`You lift ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} to your breast and feed your baby ${((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}. Your baby doesn't seem to be satisfied with the amount of milk.`);
    } else {
      // TODO-QSP: dynamic text: You lift <<$kidname[ks]>> to your breast and feed your baby <<$polreb[ks]>>. You...
      scene.text(`You lift ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} to your breast and feed your baby ${((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}. Your baby seems satisfied with the amount of your milk.`);
    }
  }
  // TODO-QSP: dynamic text: You gently lay <<$kidname[ks]>> back <<$babyloc>>.
  scene.text(`You gently lay ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} back ${((s as any).babyloc || '')}.`);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/pc/activities/baby_play.jpg');
  // TODO-QSP: dynamic text: You get down on the floor with your <<$sdtext[ks]>> and begin to make face and n...
  scene.text(`You get down on the floor with your ${((s as any).sdtext ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} and begin to make face and noises to your little ${((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}.`);
  // TODO-QSP: dynamic text: <<$kidname[ks]>> giggles in delight and squirms on the floor in response to you.
  scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} giggles in delight and squirms on the floor in response to you.`);
  scene.text('After a while you get up and straighten your clothes before going on with your day.');
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/pc/activities/tot_play.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_mothername>>! <<$pcs_mothername>>! <<$pcs_mothername>>! <<$pcs_mothernam...
  scene.text(`"${((s as any).pcs_mothername || '')}! ${((s as any).pcs_mothername || '')}! ${((s as any).pcs_mothername || '')}! ${((s as any).pcs_mothername || '')}!" Yells ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}, "Come play with me!"`);
  // TODO-QSP: dynamic text: "Ok <<$kidname[ks]>>!" You reply.
  scene.text(`"Ok ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}!" You reply.`);
  scene.text('You pull out a bin of blocks and spend a period of time playing and building with your child.');
  // TODO-QSP: dynamic text: After a short time, <<$kidname[ks]>> pushes over the small tower you have built,...
  scene.text(`After a short time, ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} pushes over the small tower you have built, snickers and runs off`);
  scene.text('You get up, straighten up your clothes, laugh, and move on with your day');
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/shared/home/tv/kid_tv.jpg');
  // TODO-QSP: dynamic text: You pull <<$kidname[ks]>> up onto the couch with you and cuddle up to watch TV
  scene.text(`You pull ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} up onto the couch with you and cuddle up to watch TV`);
  scene.text('You watch a cartoon featuring a Rabbit, a Duck, and a Pig that is quite silly');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/shared/home/tv/kid_tv2.jpg');
  // TODO-QSP: dynamic text: You attempt to curl up on the couch with <<$kidname[ks]>>
  scene.text(`You attempt to curl up on the couch with ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}`);
  // TODO-QSP: dynamic text: "<<$pcs_mothername>>! I'm trying to watch TV!" <<$kidname[ks]>> says.
  scene.text(`"${((s as any).pcs_mothername || '')}! I'm trying to watch TV!" ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} says.`);
  // TODO-QSP: dynamic text: "Well I am gonna watch with you." You reply, followed by tickling <<$kidname[ks]...
  scene.text(`"Well I am gonna watch with you." You reply, followed by tickling ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} to open up a spot on the couch for you to sit.`);
  scene.text('You watch a kids TV show about two American teenagers that barely catches your interest.');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosPronn[ks] = 'her'
  } else {
    // TODO-QSP: $kidPosPronn[ks] = 'him'
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} ${((s as any).pcs_lastname || '')}</b></center>`);
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
  // TODO-QSP: dynamic text: You see that <<$kidname[ks]>> is working on a pile of homework. They give kids s...
  scene.text(`You see that ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} is working on a pile of homework. They give kids so much homework now days.`);
  // TODO-QSP: dynamic text: "Does my little darling want <<$pcs_mothername>> to help you with some of that?"...
  scene.text(`"Does my little darling want ${((s as any).pcs_mothername || '')} to help you with some of that?" you ask`);
  // TODO-QSP: dynamic text: <<$kidname[ks]>> replies, "<<$pcs_mothername>>?!… <<$pcs_mothername>> stop treat...
  scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} replies, "${((s as any).pcs_mothername || '')}?!… ${((s as any).pcs_mothername || '')} stop treating me like a baby… but yes, I would like some help."`);
  scene.text('<br>');
  // TODO-QSP: dynamic text: You sit down at the table next to <<$kidname[ks]>> and begin to help <<$kidPosPr...
  scene.text(`You sit down at the table next to ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} and begin to help ${((s as any).kidPosPronn ?? 0)?.[String((s as any).ks ?? 0)] ?? ''} with the homework`);
  if (((s as any).class ?? 0)?.['school_grade_average'] > 50) {
    scene.text('The homework is completed quickly thanks to the attention you paid in school. An A should be an easy achievement.');
  } else {
    scene.text('You really wish you had paid more attention in school. The homework is not overly complex but is still not the easiest thing for you.');
  }
  if (!(s as any).homework) (s as any).homework = {}; (s as any).homework[String((s as any).ks ?? 0)] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 51) + 30);
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    if (((s as any).pcs_mothername ?? 0) === '') {
      if (((s as any).pcs_mothername ?? 0) === '') {
      }
    }
  }, goto: ['kid', 'start'] },
    { label: 'Done', goto: ['kid', 'start'] },
    { label: 'Done', goto: ['kid', 'start'] },
    { label: 'Done', goto: ['kid', 'start'] },
    { label: 'Done', goto: ['kid', 'start'] },
    { label: 'Done', goto: ['kid', 'start'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_mothername ?? 0) === '') {
    if (((s as any).pcs_mothername ?? 0) === '') {
    }
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k = 0;
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pain ?? 0)?.['nipples'] > 60) {
    scene.text('You cannot breast feed right now. Your nipples are too sore.');
  }
  // TODO-QSP: :loop
  if (((s as any).k ?? 0) < ((s as any).kid ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKidlist(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).k = ((s as any).k ?? 0) + (1);
    // TODO-QSP: jump 'loop'
  }
  // TODO-QSP: dynamic text: Child Selected: <<$kidname[ks]>>
  scene.text(`Child Selected: ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? ''}`);
  if (((s as any).ks ?? 0) < (((s as any).kid ?? 0) - 1)) {
    // TODO-QSP: dynamic text: <a href="exec:ks += 1& gt 'kid', 'start' ">Select Next Child</a>
    scene.text('<a href="exec:ks += 1& gt \'kid\', \'start\' ">Select Next Child</a>');
    scene.actions([
      { label: 'Select Next Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) + (1);
  }, goto: ['kid', 'start'] },
    ]);
  }
  if (((s as any).ks ?? 0) > 0) {
    scene.text('<a href="exec:ks -= 1& gt \'kid\', \'start\' ">Select Previous Child</a>');
    scene.actions([
      { label: 'Select Previous Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) - (1);
  }, goto: ['kid', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterKidlist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] === ((s as any).year ?? 0)) {
      if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1  &&  (((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]) < 7) {
        if (!(s as any).kiddaycalc) (s as any).kiddaycalc = {}; (s as any).kiddaycalc[String((s as any).k ?? 0)] = ((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)];
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> day old'
        } else {
          // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> days old'
        }
      } else {
        if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1) {
          if (!(s as any).kiddaycalc) (s as any).kiddaycalc = {}; (s as any).kiddaycalc[String((s as any).k ?? 0)] = (((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]) / 7;
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> week old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> weeks old'
          }
        } else {
          if (!(s as any).kidmonthcalc) (s as any).kidmonthcalc = {}; (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]);
          if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> months old'
          }
        }
      }
    } else {
      if (((s as any).month ?? 0) === 1  &&  ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] === 12) {
        if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) < 7) {
          if (!(s as any).kiddaycalc) (s as any).kiddaycalc = {}; (s as any).kiddaycalc[String((s as any).k ?? 0)] = 31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0);
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> day old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> days old'
          }
        } else {
          if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) >= 7) {
            if (!(s as any).kiddaycalc) (s as any).kiddaycalc = {}; (s as any).kiddaycalc[String((s as any).k ?? 0)] = 31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) / 7;
            if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
              // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> week old'
            } else {
              // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> weeks old'
            }
          } else {
            if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] > ((s as any).day ?? 0)) {
              // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
            }
          }
        }
      } else {
        if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] - ((s as any).day ?? 0) <= 0) {
          if (!(s as any).kidmonthcalc) (s as any).kidmonthcalc = {}; (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (12 - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).month ?? 0));
        } else {
          if (!(s as any).kidmonthcalc) (s as any).kidmonthcalc = {}; (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (11 - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).month ?? 0));
        }
        if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
        } else {
          // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> months old'
        }
      }
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1) {
      // TODO-QSP: $kidagetext[k] = '<<kidage[k]>> year old'
    } else {
      // TODO-QSP: $kidagetext[k] = '<<kidage[k]>> years old'
    }
  }
  if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'girl') {
    // TODO-QSP: $sdtext[k] = 'daughter'
  } else {
    if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'boy') {
      // TODO-QSP: $sdtext[k] = 'son'
    }
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosPro[k] = 'her'
  } else {
    // TODO-QSP: $kidPosPro[k] = 'his'
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosProc[k] = 'Her'
  } else {
    // TODO-QSP: $kidPosProc[k] = 'His'
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosProPN[k] = 'She'
  } else {
    // TODO-QSP: $kidPosProPN[k] = 'He'
  }
  if (((s as any).ks ?? 0) === ((s as any).k ?? 0)) {
    // TODO-QSP: dynamic text: <font color= #06992D>Your <<$sdtext[k]>> <<$kidname[k]>> is <<$kidagetext[k]>>. ...
    scene.text(`<font color= #06992D>Your ${((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)] ?? ''} ${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is ${((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)] ?? ''}. ${((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)] ?? ''} date of birth is ${((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}/${((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}/${((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}.</font>`);
  } else {
    // TODO-QSP: dynamic text: Your <<$sdtext[k]>> <<$kidname[k]>> is <<$kidagetext[k]>>. <<$kidPosProc[k]>> da...
    scene.text(`Your ${((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)] ?? ''} ${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is ${((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)] ?? ''}. ${((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)] ?? ''} date of birth is ${((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}/${((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}/${((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] ?? ''}.`);
  }
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
      // TODO-QSP: dynamic text: <<$kidname[k]>></a> is laying on a blanket
      scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''}</a> is laying on a blanket`);
    } else {
      // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep, lying in <<$kidPosPro[k]>> crib.
      scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is asleep, lying in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? ''} crib.`);
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 7) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).rkidloc ?? 0) < 8) {
        // TODO-QSP: dynamic text: <<$kidname[k]>> is playing with toys.
        scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is playing with toys.`);
      } else {
        if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) >= 21) {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep in <<$kidPosPro[k]>> bed.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is asleep in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? ''} bed.`);
        } else {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is watching TV.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is watching TV.`);
        }
      }
    } else {
      if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 18) {
        if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep in <<$kidPosPro[k]>> bed.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is asleep in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? ''} bed.`);
        } else {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 9) {
            // TODO-QSP: dynamic text: <<$kidname[k]>> is getting ready for school.
            scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is getting ready for school.`);
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 16) {
              // TODO-QSP: dynamic text: <<$kidname[k]>> is at school.
              scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is at school.`);
            } else {
              if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).homework ?? 0)?.[String((s as any).k ?? 0)] < ((s as any).daystart ?? 0)) {
                // TODO-QSP: dynamic text: <<$kidname[k]>> is working on homework.
                scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is working on homework.`);
              } else {
                // TODO-QSP: dynamic text: <<$kidname[k]>> is watching TV.
                scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? ''} is watching TV.`);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 1) {
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      scene.actions([
        { label: 'Breast Feed <<$kidname[ks]>>', handler: (st: GameState) => {
    // TODO-QSP: dyneval($breastfeed)
  } },
      ]);
    }
    if (((s as any).babyloc ?? 0) === 'onto the blanket') {
      scene.actions([
        { label: 'Play with <<$kidname[ks]>> (0:20)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($playWithKid)
  } },
      ]);
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 7) {
    if (((s as any).totloc ?? 0) === 'playing with toys on the floor') {
      scene.actions([
        { label: 'Play with <<$kidname[ks]>>(0:30)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($totplay)
  } },
      ]);
    } else {
      if (((s as any).totloc ?? 0) === 'watching tv') {
        scene.actions([
          { label: 'Watch TV with <<$kidname[ks]>>(1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($tottv)
  } },
        ]);
      }
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 18) {
    if (((s as any).kidloc ?? 0) === 'watching TV') {
      scene.actions([
        { label: 'Watch TV with <<$kidname[ks]>> (1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($kidtv)
  } },
      ]);
    } else {
      if (((s as any).kidloc ?? 0) === 'working on homework') {
        scene.actions([
          { label: 'Help <<$kidname[ks]>> with homework.', handler: (st: GameState) => {
    // TODO-QSP: dyneval($homework)
  } },
        ]);
      }
    }
  }
  // TODO-QSP: "<hr>"
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kidlist':
      enterKidlist(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kid: LocationDef = {
  name: 'kid',
  title: '<<$kidname[ks]>> <<$pcs_lastname>>',
  region: 'other',
  description: ['After a while you get up and straighten your clothes before going on with your day.'],
  enter: enter,
};
