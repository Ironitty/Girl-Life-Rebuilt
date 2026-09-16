import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 8) {
    (s as any).encounter = 0;
  } else {
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14  &&  ((s as any).katjaQW ?? 0)?.['park_sex'] < 2) {
      (s as any).encounter = Math.floor(Math.random() * 9) + 0;
    } else {
      (s as any).encounter = Math.floor(Math.random() * 11) + 0;
    }
  }
  (s as any).met_someone = 0;
  if ((!((s as any).encounter ?? 0))) {
    (s as any).textEvent = 'The park is quiet and deserted. There is no one in sight.';
  } else {
    if (((s as any).encounter ?? 0) === 1) {
      (s as any).textEvent = 'You see a young mother with a stroller walking along a path.';
    } else {
      if (((s as any).encounter ?? 0) === 2) {
        if (((s as any).arch_vars ?? 0)?.['main_active'] !== 'bimbo'  ||  ((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
          (s as any).textEvent = 'A lonely old man with a newspaper in his hand strolls down a path.';
        } else {
          (s as any).textEvent = 'A lonely old man with a newspaper in his hand is strolling down a path. He looks at you greedily when he sees your appearance and walks over to you. When he reaches you, he extends his hand and says: "Hi there, young lady! If you have a minute, come with me! I have something for you!"';
          scene.actions([
            { label: 'Go see what he has', handler: (st: GameState) => {
    // TODO-QSP: gs 'npcgeneratec', 0, 'Old Man from the park', rand(50, 70)
    // TODO-QSP: gs 'boyStat', $npclastgenerated
  }, goto: ['parkBimbo', 'pos1'] },
          ]);
        }
      } else {
        if (((s as any).encounter ?? 0) === 3) {
          (s as any).textEvent = 'You see a woman hauling several shopping bags though the park, they look quite heavy. It\'s probably the quickest way home for her.';
        } else {
          if (((s as any).encounter ?? 0) === 4) {
            (s as any).textEvent = 'You see two young girls taking a stroll in the park.';
          } else {
            if (((s as any).encounter ?? 0) === 5) {
              if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14  &&  ((s as any).katjaQW ?? 0)?.['park_sex'] === 0) {
                ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 1;
              } else {
                if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14  &&  ((s as any).katjaQW ?? 0)?.['park_sex'] === 1) {
                  ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = Math.max(1, Math.floor(Math.random() * 4) + 0);
                } else {
                  if ((!(Math.floor(Math.random() * 2) + 0))) {
                    ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 1;
                  } else {
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 2;
                    } else {
                      if ((!(Math.floor(Math.random() * 2) + 0))) {
                        ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 3;
                      } else {
                        if ((Math.floor(Math.random() * 3) + 0) > 0) {
                          ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 4;
                        } else {
                          ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = 5;
                        }
                      }
                    }
                  }
                }
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
                (s as any).textSub = 'a guy';
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
                (s as any).textSub = 'two guys';
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 3) {
                (s as any).textSub = 'three guys';
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 4) {
                (s as any).textSub = 'four guys';
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 5) {
                (s as any).textSub = 'five guys';
              }
              (s as any).textEvent = 'You see ' + ((s as any).textSub ?? 0) + ' walking through the park, holding a case of beer.';
              ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 1;
              (s as any).met_someone = 1;
            } else {
              if (((s as any).encounter ?? 0) === 6) {
                (s as any).textEvent = 'This part of the park is quiet and deserted. The only sign of life is a stray dog, sniffing around near a garbage bin.';
              } else {
                if (((s as any).encounter ?? 0) === 7) {
                  (s as any).textEvent = 'You see a man and woman walking in the park, holding each other\'s hands tightly. They\'re clearly in love.';
                } else {
                  if (((s as any).encounter ?? 0) === 8) {
                    if (((s as any).hotelcouple ?? 0) === 1) {
                      (s as any).location_type = 'public_indoors';
                      qspCall(s, 'stat', '');
                      scene.text(' after walking around the park for 10 minutes you decide to relax in the grass.');
                      scene.text('Suddenly you are approached by a couple. They come sit next to you.');
                      scene.text('You think you recognise the man but you can\'t quite put your finger on it.');
                      scene.text('Then the man starts speaking : " hi girl, I don\'t know if you remember but we have met once in the hotel "');
                      scene.text('Now you remember where you know the man from, you watched his children so he and his wife could have some \'alone time\'.');
                      scene.img('images/locations/pavlovsk/hotel/couple_park_meet.jpg');
                      scene.text('" You really helped us out that time. Usually we are able to drop the children off with my parents but they were out that day."');
                      scene.text('" My name is Motya and this is my wife Uliana."');
                      scene.text('" So we stay in the Pavlovsk hotel every Thursday. If you want to visit us on a Thursday evening, feel free to drop by in room 207 so we can give you a proper thanks for your help."');
                      scene.text('Then they get up and leave you');
                      scene.text('You wonder what kind of \'thanks\' they have in mind');
                      (s as any).hotelcouple = 2;
                      return;
                      scene.actions([
                        { label: 'Finish your walk', goto: ['pav_park', 'start'] },
                      ]);
                    }
                  } else {
                    if (((s as any).encounter ?? 0) === 9) {
                      (s as any).textEvent = 'You see a group of teenagers sitting on a park bench, listening to some music.';
                      ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = Math.floor(Math.random() * 5) + 2;
                      ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 1;
                      (s as any).met_someone = 1;
                    } else {
                      if (((s as any).encounter ?? 0) === 10) {
                        ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = Math.floor(Math.random() * 4) + 3;
                        (s as any).textEvent = 'Some Gopniks are sitting on their haunches just off to the side of one of the main paths, drinking beer. The area around them is littered with empty bottles.';
                        ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 2;
                        (s as any).met_someone = 1;
                      } else {
                        (s as any).textEvent = 'You see 2 women walking in the park, holding each other\'s hands tightly. They\'re clearly in love.';
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
  if (((s as any).met_someone ?? 0) === 1) {
    qspCall(s, 'placer_man', '');
    (s as any).met_someone = 0;
  }
  if (((s as any).month ?? 0)===3  ||  ((s as any).month ?? 0)===4  ||  ((s as any).month ?? 0)===5) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=17) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
      scene.text('The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. The trees are sprouting new leaves.');
      scene.text('There are puddles on the ground everywhere, all remains from the melted snow. A lot of people in the park are having fun with them, trying to jump over them and mocking those that fail. They\'re not particularly deep though, and plenty of others just walk through without giving them a second thought.');
      scene.text('The park is not particularly crowded, this time of year. Many people think it\'s still too cold to spend much time outdoors.');
    } else {
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      scene.text('The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. The trees are sprouting new leaves.');
      scene.text('There is no particular reason to visit the park during the night, and as a result it\'s largely deserted. In the distance you see one person running through the park, probably using it as a shortcut to go home faster.');
    }
  }
  if (((s as any).month ?? 0)===6  ||  ((s as any).month ?? 0)===7  ||  ((s as any).month ?? 0)===8) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=19) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/park/skver.jpg');
      scene.text('The main square of Pavlovsk Park. At this time of year, it\'s one of the primary places in town that locals and tourists enjoy spending their spare time in.');
      scene.text('It\'s always busy: people are resting, walking, playing and dating to their heart\'s desires, enjoying the nice surroundings.');
    } else {
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      scene.text('The main square of Pavlovsk Park. At this time of year, it\'s one of the places where locals and tourists enjoy going in their spare time.');
      scene.text('However, there is no particular reason to visit the park during the night, and as a result it\'s largely deserted. In the distance you see one person running through the park, probably using it as a shortcut to go home faster.');
    }
  }
  if (((s as any).month ?? 0)===9  ||  ((s as any).month ?? 0)===10  ||  ((s as any).month ?? 0)===11) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=18) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
      scene.text('The main square of Pavlovsk Park. Autumn has come, and some of the trees are already shedding their leaves. The leaves that are still on the trees have changed colour, and are a beautiful mix of red and brown.');
      scene.text('Everywhere in the park, people are enjoying nature. Some are taking photos of the fallen leaves, kids are playing everywhere, and couples are walking hand-in-hand, simply enjoying each other\'s company.');
    } else {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
      scene.text('The main square of Pavlovsk Park. Autumn has come, and some of the trees are already shedding their leaves.');
      scene.text('It gets quite cold at night, and you try to stay active to keep yourself warm. The lone soul you see running across the park is probably trying to get home faster, to warm up with some nice cocoa.');
    }
  }
  if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12) {
    if (((s as any).hour ?? 0)>=7  &&  ((s as any).hour ?? 0)<=16) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
      scene.text('The main square of Pavlovsk Park. It\'s winter, and the park is quite busy with locals and tourists alike.');
      scene.text('There\'s snow everywhere, and kids from the whole town have gathered here to make snowmen and enjoy snowball fights. Some of the adults are joining them, happy to play like kids again for just a moment.');
    } else {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
      scene.text('The main square of Pavlovsk Park. It\'s winter, and the nights in Pavlovsk are very cold.');
      scene.text('As you expected, the park is mostly deserted at this time of day. You occasionally see a wild animal, scrounging for food.');
    }
  }
  if (((s as any).soniaQW ?? 0)?.['slut']===5  &&  (Math.floor(Math.random() * 10) + 1)>=9  &&  ((s as any).hour ?? 0)>14  &&  ((s as any).hour ?? 0)<20) {
    scene.text('');
    scene.text('<b>While you walk past a row of bushes, you hear some strange sounds coming from behind them.</b>');
    scene.text('');
    scene.actions([
      { label: 'Investigate', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/sonia.skver.boy0,0.jpg');
    scene.text('You carefully walk towards the bushes and push some branches aside to see what\'s going on. There you see your classmate Sonia, on her haunches in front of a muscular man. She\'s giving the stranger a blowjob, not even 20 meters away from where people walk!');
    scene.actions([
      { label: 'Keep looking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/sonia.skver.boy1,\'+rand(0, 2)+\'.jpg');
    scene.text('After a while, the guy tells Sonia that he wants more. Sonia obediently gets up and asks him: "Would you like to fuck me from behind, sir?"');
    scene.text('The stranger happily accepts the invitation, and watches in amazement when he notices Sonia eagerly grinding her hips back against him once he\'s inside her. He had no idea she would be such a lusty slut for him, willing to do all the work!');
    scene.text('You watch Sonia give herself to the man for just a moment longer, before you decide you really have to get going. You\'re quite turned on from her little show. Sonia looks like she\'s having a lot of fun, and for just a second you think about what it would feel like to be in her place.');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave them be', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  (s as any).textSomeone = ((s as any).placerStringParameter ?? 0)?.['text_someone'];
  (s as any).textRefuse = ((s as any).placerStringParameter ?? 0)?.['text_friend_refuse'];
  if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
    // TODO-QSP: dynamic text: You arrive at one of the smaller plazas in the park, together with <<$placerStri...
    scene.text(`You arrive at one of the smaller plazas in the park, together with ${((s as any).placerStringParameter ?? 0)?.['ev_name_om'] ?? ''}. ${((s as any).textEvent || '')}`);
    if (((s as any).placerParameter ?? 0)?.['want_to_meet'] === 0) {
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1  &&  ((s as any).placerStringParameter ?? 0)?.['text_start_meet'] === '') {
        ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['text_friend_refuse'] = 'The guy looks at you, and for a second you think he\'s going to say something. However, when he gets closer, he wrinkles his nose and turns away.';
      }
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1  &&  ((s as any).placerStringParameter ?? 0)?.['text_start_meet'] === '') {
        ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['text_friend_refuse'] = 'The guys look at you for a moment, but you see one of them shake his head. The guys then turn their backs to you, and pretend you\'re not there.';
      }
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 0) {
        // TODO-QSP: 'You give the <<$textSomeone>> a cute smile as you walk past. You don''t think you''ve ever seen him...
      }
    } else {
      if (((s as any).placerParameter ?? 0)?.['want_to_meet'] === 1  &&  ((s as any).placerParameter ?? 0)?.['number_of_man'] > 0) {
        // TODO-QSP: dynamic text: You give the <<$textSomeone>> a cute smile as you walk past with your friend.
        scene.text(`You give the ${((s as any).textSomeone || '')} a cute smile as you walk past with your friend.`);
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
          // TODO-QSP: dynamic text: You don't think you've ever seen him before. He approaches you and says: "<<$pla...
          scene.text(`You don't think you've ever seen him before. He approaches you and says: "${((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? ''}"`);
        }
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
          // TODO-QSP: dynamic text: You don't think you've ever seen them before. The guys walk towards you, and one...
          scene.text(`You don't think you've ever seen them before. The guys walk towards you, and one of them says: "${((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? ''}"`);
        }
        scene.actions([
          { label: 'Agree to hang out', handler: (st: GameState) => {
    if (((s as any).placerParameter ?? 0)?.['friend_dom'] < 80) {
      qspGoto(s, 'placer_act', '');
    } else {
      if (((s as any).placerParameter ?? 0)?.['friend_dom'] >= 80) {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: <<$ev_name>> hisses in your ear: "I don't want to hang out with strangers, <<$pc...
        scene.text(`${((s as any).ev_name || '')} hisses in your ear: "I don't want to hang out with strangers, ${((s as any).pcs_nickname || '')}! They could be dangerous! If you want to stay here, I'm leaving."`);
        qspCall(s, 'willpower', 'misc', 'self', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Leave with your friend', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Leave with your friend', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspGoto(s, 'placer_end', '');
  } },
          ]);
        }
        scene.actions([
          { label: 'Say goodbye to your friend and stay', handler: (st: GameState) => {
    ((s as any).placerParameter = (s as any).placerParameter ?? {})['friend_index'] = 0;
    qspGoto(s, 'placer_act', '');
  } },
        ]);
      }
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue on your walk', goto: ['placer_end', ''] },
    ]);
  } else {
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
      // TODO-QSP: dynamic text: You stroll through the park by yourself, enjoying its beauty. <<$textEvent>>
      scene.text(`You stroll through the park by yourself, enjoying its beauty. ${((s as any).textEvent || '')}`);
      if (((s as any).placerParameter ?? 0)?.['want_to_meet'] === 1) {
        // TODO-QSP: dynamic text: You give the <<$textSomeone>> a cute smile as you walk past. 
        scene.text(`You give the ${((s as any).textSomeone || '')} a cute smile as you walk past. `);
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
          // TODO-QSP: dynamic text: You don't think you've ever seen him before. He approaches you and says: "<<$pla...
          scene.text(`You don't think you've ever seen him before. He approaches you and says: "${((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? ''}"`);
        }
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
          // TODO-QSP: dynamic text: You don't think you've ever seen them before. The guys walk towards you, and one...
          scene.text(`You don't think you've ever seen them before. The guys walk towards you, and one of them says: "${((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? ''}"`);
        }
        scene.actions([
          { label: 'Meet', goto: ['placer_act', ''] },
        ]);
      } else {
        if (((s as any).placerParameter ?? 0)?.['want_to_meet'] === 0  &&  ((s as any).placerParameter ?? 0)?.['number_of_man'] > 0) {
          if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
            ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['text_friend_refuse'] = 'The guy looks at you, and for a second you think he\'s going to say something. However, when he gets closer, he wrinkles his nose and turns away.';
          }
          if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
            ((s as any).placerStringParameter = (s as any).placerStringParameter ?? {})['text_friend_refuse'] = 'The guys look at you for a moment, but you see one of them shake his head. The guys then turn their backs to you, and pretend you\'re not there.';
          }
          // TODO-QSP: dynamic text: You give the <<$textSomeone>> a cute smile as you walk past.' & '<<$textRefuse>>
          scene.text(`You give the ${((s as any).textSomeone || '')} a cute smile as you walk past.' & '${((s as any).textRefuse || '')}`);
        }
      }
      scene.actions([
        { label: 'Finish your walk', goto: ['pav_park', 'start'] },
      ]);
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

export const placer_pav_park: LocationDef = {
  name: 'placer_pav_park',
  title: '<center><h2>Pavlovsk Park</h2></center>',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The main square of Pavlovsk Park. Spring has come, melting the worst of the snow. The trees are sprouting new leaves.'],
  enter: enter,
};
