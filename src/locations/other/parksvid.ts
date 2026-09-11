import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/park/0.jpg');
  // TODO-QSP: dynamic text: You go to the park ' + iif($home['town'] = 'pavlovsk', 'in Pavlovsk', 'in St. Pe...
  scene.text(`You go to the park ' + iif($home['town'] = 'pavlovsk', 'in Pavlovsk', 'in St. Petersburg') + ' with ${((s as any).telsob ?? 0)}.`);
  scene.actions([
    { label: 'Go for a walk', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).parksvidrand = Math.floor(Math.random() * 6) + 0;
        if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
      }
    } else {
      if (((s as any).telsob ?? 0) === 'Masha') {
        (s as any).masha = ((s as any).masha ?? 0) + (1);
        if (((s as any).masha ?? 0) >= 20) {
          (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        }
      } else {
        if (((s as any).telsob ?? 0) === 'Kate') {
          qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
          if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
            if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
              scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
          }
        } else {
          if (((s as any).telsob ?? 0) === ((s as any).npcdesc ?? 0)) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 50) {
              scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
            } else {
              (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
              if (((s as any).parksvidrand ?? 0) <= 1) {
                scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
              } else {
                if (((s as any).parksvidrand ?? 0) <= 3) {
                  scene.actions([{ label: 'Continue', goto: ['parksvid', '2'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
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

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/park/1.jpg');
  // TODO-QSP: dynamic text: As you walk through the park, you notice a man in a kilt. <<$telsob>> is interes...
  scene.text(`As you walk through the park, you notice a man in a kilt. ${((s as any).telsob ?? 0)} is interested in why he is wearing a kilt and what he's up to.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Move on', goto: ['parksvid', '3'] },
    { label: 'See what he\'s doing', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/park/2.jpg');
    scene.text('Coming closer, you notice he has a large sphere of some kind, it looks like it is metal. He is rotating it around in his hands.');
    scene.text('"Girls, you want to move back a little and I am getting ready to make a throw and we wouldn\'t want to risk harming such beauties, as yourselves." he said, noting your interest in his occupation.');
    // TODO-QSP: dynamic text: "That's interesting, but do you think he is wearing anything under his skirt?" s...
    scene.text(`"That's interesting, but do you think he is wearing anything under his skirt?" said ${((s as any).telsob ?? 0)}.`);
    scene.text('"How should I know, come on and let\'s ask him."');
    // TODO-QSP: dynamic text: "I'm not going to ask him, you ask him." said <<$telsob>>, making plaintive eyes...
    scene.text(`"I'm not going to ask him, you ask him." said ${((s as any).telsob ?? 0)}, making plaintive eyes.`);
    scene.actions([
      { label: 'Forget it and continue on your walk', goto: ['parksvid', '3'] },
      { label: 'Ask him', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/park/3.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> and you walk up to the guy, she leans against you and whispers in yo...
    scene.text(`${((s as any).telsob ?? 0)} and you walk up to the guy, she leans against you and whispers in your ear. "Well ask."`);
    scene.text('"Is it true what they say? That you\'re not supposed to wear anything at all under a kilt?" you ask');
    scene.text('"You want to know, look and see." He replied with a smile.');
    // TODO-QSP: dynamic text: "Do you want to take a look <<$pcs_nickname>>?" asks <<$telsob>>
    scene.text(`"Do you want to take a look ${((s as any).pcs_nickname ?? 0)}?" asks ${((s as any).telsob ?? 0)}`);
    scene.text('"Go ahead and look yourself." You answer.');
    // TODO-QSP: dynamic text: "Fine, I'll look." Says <<$telsob>> defiantly pouting and squatting down.
    scene.text(`"Fine, I'll look." Says ${((s as any).telsob ?? 0)} defiantly pouting and squatting down.`);
    scene.text('She lifts his kilt a bit and sticks her head under it.');
    // TODO-QSP: dynamic text: "Wow!" Comes her voice from under the kilt and after a few moments when she has ...
    scene.text(`"Wow!" Comes her voice from under the kilt and after a few moments when she has said nothing more, you realize what is going on. "Well what are you staring there?" you ask noticing the huge smile on the guys face and the movement of her head under his kilt, while ${((s as any).telsob ?? 0)} sucks him off right there and then.`);
    scene.text('A few minutes later she crawls out from under the kilt and wipes her lips.');
    scene.text('"If you girls would like to see what else I can do with what\'s under there, I know a spot…" suggests the guy still sporting a huge grin.');
    qspCall(s, 'willpower', 'cuni', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and continue your walk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and continue your walk [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['parksvid', '3'] },
      ]);
    }
    scene.actions([
      { label: 'Go with the guy', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/park/4.jpg');
    scene.text('You decide to go with the guy to his home. No sooner than you are inside the door and he lifts his kilt up and shows off his dangling dick, with not a stitch of anything else on under the kilt.');
    // TODO-QSP: dynamic text: Emboldened <<$telsob>> immediately kneels, clasps her lips around his cock and b...
    scene.text(`Emboldened ${((s as any).telsob ?? 0)} immediately kneels, clasps her lips around his cock and begins to suck his dick. You crouch down behind her and start sliding her panties down, so you can lick and tongue fuck her pussy.`);
    qspCall(s, 'arousal', 'cuni_give', 15, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/park/5.jpg');
    scene.text('After a few minutes he picks her up and puts her on the bed, on all fours, quickly thrusting his dick in her pussy. You get up and crawl on the bed, pulling your clothes off to allow access to your pussy. You lay down in front of her and spread your legs. She immediately starts licking your pussy as she is getting fucked.');
    qspCall(s, 'arousal', 'cuni', 15, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/park/6.jpg');
    scene.text('Sometime later you have an intense orgasm, not long after, he pulls out of her. He grabs her, flips her over and spins her around. Now she is laying on her back with her face near his crotch, she opens her mouth at once. Her mouth is barely even open before he shoves his dick in and starts to fuck her mouth, within moments he is shooting his load across her face and in her mouth.');
    scene.text('You crawl down next to her and lick his cum off her face. He smiles as he watches the two of you. "That was great girls, but I need to get back to practicing at the park. I\'ll walk you back."');
    scene.text('You all get dressed and he walks with you back to the park. Once back in the park you go your separate ways.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['parksvid', '3'] },
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

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: After you finish your walk, <<$telsob>> says she needs to go, she gives you a ki...
  scene.text(`After you finish your walk, ${((s as any).telsob ?? 0)} says she needs to go, she gives you a kiss on the cheek and leaves.`);
  if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
    scene.actions([
      { label: 'Kiss her and say goodbye', goto: ['pav_park', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her and say goodbye', goto: ['city_park', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  if (((s as any).telsob ?? 0) === 'Alla'  ||  ((s as any).telsob ?? 0) === 'Masha'  ||  ((s as any).telsob ?? 0) === 'Kate') {
    // TODO-QSP: dynamic text: After you finish your walk, <<$telsob>> says she needs to go, she gives you a ki...
    scene.text(`After you finish your walk, ${((s as any).telsob ?? 0)} says she needs to go, she gives you a kiss on the cheek and leaves.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Leave', goto: ['pav_park', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['city_park', 'start'] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: After you finish your walk, <<$telsob>> looks at you and waits for your next mov...
    scene.text(`After you finish your walk, ${((s as any).telsob ?? 0)} looks at you and waits for your next move.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Kiss her and say goodbye', goto: ['pav_park', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss her and say goodbye', goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Kiss her and invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const parksvid: LocationDef = {
  name: 'parksvid',
  title: '<center><b>Park</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
