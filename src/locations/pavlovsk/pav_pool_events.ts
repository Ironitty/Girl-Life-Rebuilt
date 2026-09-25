import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTimedesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 10) {
    scene.text('The pool is almost empty given how early in the morning it is.');
  } else {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 12) {
      scene.text('The pool is mostly used by families with children and older people at this time.');
    } else {
      if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
        scene.text('The pool is crowded with all kinds of people. It\'s difficult to move around.');
      } else {
        if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 20) {
          scene.text('Given how late it\'s getting, only a few adults are in the pool right now.');
        } else {
          scene.text('It\'s rather late now and you\'re the only person in the pool, which means you can enjoy it all to yourself. The silence is very relaxing.');
        }
      }
    }
  }
  scene.build();
}

function enterStoreSwimsuitBuy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'stat', '');
  scene.text('<center><h3>Pool Store</h3></center>');
  scene.img('images/locations/pavlovsk/community/swim/storeclerk.jpg');
  scene.text('The store clerk looks bored and doesn\'t even seem to notice you until you speak to him.');
  scene.text('"Do you have any swimsuits for sale?" you ask, but he just looks directly into your eyes without saying anything. The silence feels extremely intimidating, but he finally responds after what seems like an eternity.');
  scene.text('\'"I don\'t get much stock delivered here, so I only have this. It\'s yours for 1200₽."\'');
  scene.text('He shows you a skimpy polka dot bikini that barely covers anything. It isn\'t pretty, but there aren\'t any other options.');
  if (qspFunc(s, 'money', 'can_afford', 1200) === 1) {
    scene.actions([
      { label: 'Buy it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h3>Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/storeclerk.jpg');
    if (((st as any).pcs_inhib ?? 0) >= 80) {
      scene.text('The cheap, flimsy bikini looks like it could fall apart at any moment, and is also far too revealing for your taste, but with no other options available, you reluctantly purchase it.');
    } else {
      scene.text('The cheap, flimsy bikini is cheap looks like it could fall apart at any moment, but with no other options available, you reluctantly purchase it.');
    }
    qspCall(st, 'money', 'pay', 1200);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyCheapSwimsuit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } else {
    scene.actions([
      { label: 'I don\'t have enough money', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('<center><h3>Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/storeclerk.jpg');
    scene.text('"Well, how much do you have?" he asks with a wide grin on his face.');
    if (((st as any).money ?? 0) !== 0) {
      scene.text('You count your money.');
      scene.text(`"I only have ${qspFunc(s, 'money', 'format', ((st as any).money ?? ''))}. Do you have anything for that amount?"`);
    } else {
      scene.text('Your purse is empty.');
      scene.text('"Well, I don\'t have anything…" you mumble.');
    }
    scene.text('"I have a… suggestion. If you let me see you naked, then I\'ll give it to you, free of charge…" he says with a perverted smile.');
    scene.text('You look at him perplexed, but he just keeps smiling at you.');
    qspCall(st, 'willpower', 'humiliation', 'self');
    if (((st as any).will_cost ?? 0) > ((st as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Do it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center><h3>Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/divider.jpg');
    scene.text('You hide behind the divider and undress. You can see his shadow through the semi-transparent cloth but are unaware that, due to the position of the lights, he can see you quite well.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><h3>Pool Store</h3></center>');
    scene.img('images/locations/pavlovsk/community/swim/photo.jpg');
    scene.text('Once you finish stripping down, you slowly come out from behind the divider and he immediately starts taking photos. It looks like quite an expensive camera, and the objectifying shutter sound is very distinctive every time he shoots.');
    scene.text('You feel ashamed, and after a short while decide that he\'s seen enough and disappear behind the divider again.');
    scene.text('You quickly pull your clothes back on and leave with the bikini in hand, not looking back at him. You can feel his creepy stare on the back of your head and pick up your pace.');
    qspCall(st, 'money', 'set', 0, 'cash');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['storeclerkvisit'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyCheapSwimsuit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Refuse and leave', goto: ['pav_pool', 'entrance'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBuyCheapSwimsuit(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'clothing', 'is_owned', 'scandalicious_bikinis', 46) === 0) {
    qspCall(s, 'clothing', 'add_item', 'scandalicious_bikinis', 46, 40);
  }
  scene.build();
}

function enterNakedMirror(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/nakedcover.jpg');
  scene.text('You\'re standing naked in front of the mirror when you hear a noise behind you.');
  (s as any).temp_rand = (Math.floor(Math.random() * 5) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    scene.text('You turn around and find a girl studying you from head to toe.');
    scene.text('"Sorry!" she squeaks before quickly leaving.');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.text('You turn around and find a man studying you from head to toe.');
      scene.text('"Got the wrong locker room, but it sure was worth it!" he says before leaving with a smile.');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.text('You turn around and find a man savoring your body with his eyes.');
        scene.text('"Nice… It sure is worth it to come in here from time to time," he says before leaving.');
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          scene.text('You turn around and find the janitor drooling at your body with hungry passion in his eyes.');
          scene.text('"I\'m really sorry! I didn\'t think there was anybody in here," he says, his face flushed red as he turns around and leaves.');
        } else {
          scene.text('You turn around and find a boy pointing a camera at your naked body as your breasts and groin are fully exposed.');
          scene.text('"Got her!" he screams to someone else before running out. You cover yourself and wait until you\'re alone again, but they got a perfect view of you before you could react.');
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'mirror', '1'] },
  ]);
  scene.build();
}

function enterNakedLocker(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/nakedcover.jpg');
  scene.text('You\'re standing naked in the changing room when you hear a noise behind you.');
  (s as any).temp_rand = (Math.floor(Math.random() * 5) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    scene.text('You turn around and find a girl studying you from head to toe.');
    scene.text('"Sorry!" she squeaks before quickly leaving.');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.text('You turn around and find a man studying you from head to toe.');
      scene.text('"Got the wrong locker room, but it sure was worth it!" he says before leaving with a smile.');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.text('You turn around and find a man savoring your body with his eyes.');
        scene.text('"Nice… It sure is worth it to come in here from time to time," he says before leaving.');
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          scene.text('You turn around and find the janitor drooling at your body with hungry passion in his eyes.');
          scene.text('"I\'m really sorry! I didn\'t think there was anybody in here," he says, his face flushed red as he turns around and leaves.');
        } else {
          scene.text('You turn around and find a boy pointing a camera at your naked body as your breasts and groin are fully exposed.');
          scene.text('"Got her!" he screams to someone else before running out. You cover yourself and wait until you\'re alone again, but they got a perfect view of you before you could react.');
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale', '1'] },
  ]);
  scene.build();
}

function enterLockerClothedToNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 10) + 0) > 0) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your clothes off.');
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
      scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
      scene.text('As you take your clothes off, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
      scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and just tell yourself that you\'re being paranoid and continue stripping.');
      ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    } else {
      scene.img(`images/locations/pavlovsk/community/swim/spychange${(Math.floor(Math.random() * 2) + 1)}.jpg`);
      scene.text('As you take your clothes off, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerSwimToNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 10) + 0) > 0) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your swimwear off.');
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
      scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
      scene.text('As you take your swimwear off, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
      scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and just tell yourself that you\'re being paranoid and continue stripping.');
      ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    } else {
      scene.img('images/locations/pavlovsk/community/swim/spychangebikini.jpg');
      scene.text('As you take your swimwear off, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerNudeToClothed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 10) + 0) > 0) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You change back into your clothes.');
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
      scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
      scene.text('As you change back into your clothes, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
      scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but as you don\'t see anything, you tell yourself you\'re just being paranoid and continue getting dressed.');
      ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    } else {
      scene.img(`images/locations/pavlovsk/community/swim/spychange${(Math.floor(Math.random() * 2) + 1)}.jpg`);
      scene.text('As you change back into your clothes, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerNudeToSwim(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 10) + 0) > 0) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You put your swimwear on.');
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
      scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
      scene.text('As you put your swimwear on, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
      scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and quickly continue dressing yourself.');
      ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    } else {
      scene.img('images/locations/pavlovsk/community/swim/spychangebikini.jpg');
      scene.text('As you put your swimwear on, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerClothedToSwim(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = (Math.floor(Math.random() * 10) + 0);
  if (((s as any).temp_rand ?? 0) > 1) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your clothes off and change into your swimwear.');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
        scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
        scene.text('As you take your clothes off, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
        scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and just tell yourself that you\'re being paranoid and continue getting dressed.');
        ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
      } else {
        scene.img(`images/locations/pavlovsk/community/swim/spychange${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        scene.text('As you take your clothes off, you can\'t shake the feeling that you\'re being watched, you quickly change into your swimwear.');
      }
    } else {
      if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
        scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
        scene.text('As you put your swimwear on, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
        scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and quickly continue dressing yourself.');
        ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
      } else {
        scene.img('images/locations/pavlovsk/community/swim/spychangebikini.jpg');
        scene.text('As you put your swimwear on, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterLockerSwimToClothed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = (Math.floor(Math.random() * 10) + 0);
  if (((s as any).temp_rand ?? 0) > 1) {
    scene.img('images/locations/pavlovsk/school/gym/locker/change.jpg');
    scene.text('You take your swimwear off and change back into your clothes.');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
        scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
        scene.text('As you take your swimwear off, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
        scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but you can\'t see anything and just tell yourself that you\'re being paranoid and continue getting dressed.');
        ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
      } else {
        scene.img('images/locations/pavlovsk/community/swim/spychangebikini.jpg');
        scene.text('As you take your swimwear off, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
      }
    } else {
      if (((s as any).pav_swimpool ?? 0)?.['storeclerkvisit'] >= 1) {
        scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
        scene.text('As you change back into your clothes, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything.');
        scene.text('You\'re certain that it sounded like that creepy store clerk\'s camera, but as you don\'t see anything, you tell yourself you\'re just being paranoid and continue getting dressed.');
        ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((s as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
      } else {
        scene.img(`images/locations/pavlovsk/community/swim/spychange${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        scene.text('As you change back into your clothes, you can\'t shake the feeling that you\'re being watched, but you don\'t see anything.');
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterShowerLate(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/pavlovsk/community/swim/covershower.jpg');
    scene.text('As you turn off the water, the silence is suddenly broken by a noise behind you. You look back and see an old man with a camera, who is startled at being caught and runs off. He had been filming you during your shower!');
  } else {
    scene.img('images/locations/pavlovsk/community/swim/covershower.jpg');
    scene.text('As you turn off the water, the silence is suddenly broken by a noise behind you. You look back and see a girl staring at you, who is startled at being caught and runs off. You don\'t know how long she was standing there watching you shower.');
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'showerfemale'] },
  ]);
  scene.build();
}

function enterRelaxedswim(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  scene.img('images/locations/pavlovsk/community/swim/relaxedswim2.jpg');
  if (((s as any).hour ?? 0) < 10) {
    scene.text('The pool is almost empty, so you enjoy your swim a lot.');
    qspCall(s, 'mood', 'raise', 'tiny');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      scene.text('The pool is mostly used by families with children and older people at this time, but it\'s still quiet enough for you to enjoy your swim undisturbed.');
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
      if ((!((s as any).temp_rand ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['pav_pool_events', 'kidsplash'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) === 1) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'kidsplashgroup'] },
          ]);
        }
      }
      (s as any).temp_rand = undefined;
    } else {
      if (((s as any).hour ?? 0) < 18) {
        scene.text('The pool is crowded with all kinds of people. It\'s noisy and difficult to move around, so swimming is far from peaceful and relaxing.');
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).temp_rand = (Math.floor(Math.random() * 31) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'kidsplash'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            scene.actions([
              { label: 'Continue', goto: ['pav_pool_events', 'kidsplashgroup'] },
            ]);
          } else {
            if (((s as any).temp_rand ?? 0) === 2  &&  (!((s as any).PCloOnePiece ?? 0))) {
              scene.actions([
                { label: 'Continue', goto: ['pav_pool_events', 'pullstringbottom'] },
              ]);
            } else {
              if (((s as any).temp_rand ?? 0) === 3) {
                scene.actions([
                  { label: 'Continue', goto: ['pav_pool_events', 'assgrab'] },
                ]);
              } else {
                if (((s as any).temp_rand ?? 0) === 4) {
                  scene.actions([
                    { label: 'Continue', goto: ['pav_pool_events', 'assgrabbihand'] },
                  ]);
                } else {
                  if (((s as any).temp_rand ?? 0) === 5) {
                    scene.actions([
                      { label: 'Continue', goto: ['pav_pool_events', 'gropedfrombelow'] },
                    ]);
                  }
                }
              }
            }
          }
        }
        (s as any).temp_rand = undefined;
      } else {
        scene.text('Given how late in the evening it is, only a few adults are in the water, so you enjoy your swim undisturbed.');
        if ((!(Math.floor(Math.random() * 31) + 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'late_assault'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterExerciseswim(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  scene.img('images/locations/pavlovsk/community/swim/exerciseswim.jpg');
  if (((s as any).hour ?? 0) < 10) {
    scene.text('The pool is almost empty, so you enjoy your swim a lot.');
    qspCall(s, 'exercise', 'tier1', 15, 'stren', 'vital');
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 0));
  } else {
    if (((s as any).hour ?? 0) < 12) {
      scene.text('The pool is mostly used by families with children and older people at this time. You enjoy your swim mostly undisturbed.');
      qspCall(s, 'exercise', 'tier1', 15, 'stren', 'vital');
      (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 0));
    } else {
      if (((s as any).hour ?? 0) < 18) {
        scene.text('The pool is crowded with of all kinds of people. It\'s difficult to move around and your attempts at doing exercise fail.');
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        (s as any).temp_rand = (Math.floor(Math.random() * 16) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'kidsplash'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            scene.actions([
              { label: 'Continue', goto: ['pav_pool_events', 'kidsplashgroup'] },
            ]);
          } else {
            if (((s as any).temp_rand ?? 0) === 2  &&  (!((s as any).PCloOnePiece ?? 0))) {
              scene.actions([
                { label: 'Continue', goto: ['pav_pool_events', 'pullstringbottom'] },
              ]);
            } else {
              if (((s as any).temp_rand ?? 0) === 3) {
                scene.actions([
                  { label: 'Continue', goto: ['pav_pool_events', 'assgrab'] },
                ]);
              } else {
                if (((s as any).temp_rand ?? 0) === 4) {
                  scene.actions([
                    { label: 'Continue', goto: ['pav_pool_events', 'assgrabbihand'] },
                  ]);
                } else {
                  if (((s as any).temp_rand ?? 0) === 5) {
                    scene.actions([
                      { label: 'Continue', goto: ['pav_pool_events', 'gropedfrombelow'] },
                    ]);
                  }
                }
              }
            }
          }
        }
        (s as any).temp_rand = undefined;
      } else {
        scene.text('Given how late it is, only a few adults are in the water, so you enjoy your swim undisturbed.');
        qspCall(s, 'exercise', 'tier1', 15, 'stren', 'vital');
        (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 0));
        if ((!(Math.floor(Math.random() * 31) + 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'late_assault'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterDive(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  scene.img('images/locations/pavlovsk/community/swim/dive.jpg');
  if (((s as any).hour ?? 0) < 10) {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('The pool is almost empty, so you play under the water undisturbed.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('The pool is mostly used by families with children and older people at this time. You enjoy diving and seeing other people underwater with you from time to time.');
    } else {
      if (((s as any).hour ?? 0) < 18) {
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('The pool is crowded with all kinds of people. It\'s difficult to move around on the surface, but diving around them is quite fun.');
        (s as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'divedickout'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            scene.actions([
              { label: 'Continue', goto: ['pav_pool_events', 'kidsunderwater'] },
            ]);
          }
        }
        (s as any).temp_rand = undefined;
      } else {
        scene.text('Given how late it is, only a few adults are in the water. You enjoy diving and seeing other people underwater with you from time to time.');
        qspCall(s, 'mood', 'raise', 'tiny');
        if ((!(Math.floor(Math.random() * 31) + 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'late_assault'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterEdgepool(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/edgepool4.jpg');
  if (((s as any).hour ?? 0) < 10) {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('The pool is almost empty, so you sit by the side of the water undisturbed.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('The pool is mostly used by families with children and older people at this time. You enjoy watching the people having fun in the water.');
    } else {
      if (((s as any).hour ?? 0) < 18) {
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('The pool is crowded with all kinds of people. You try to enjoy watching the noisy activity in the water.');
        if ((!(Math.floor(Math.random() * 13) + 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'approachbehind'] },
          ]);
        }
      } else {
        scene.text('Given how late in the evening it is, only a few adults are in the water. You quietly observe them swimming around in the pool.');
        qspCall(s, 'mood', 'raise', 'tiny');
        if ((!(Math.floor(Math.random() * 9) + 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'sideflirt'] },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterRelaxedwater(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  scene.img('images/locations/pavlovsk/community/swim/relaxedwater1.jpg');
  if (((s as any).hour ?? 0) < 10) {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('The pool is almost empty, so you enjoy lying in the water a lot.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('The pool is mostly used by families with children and older people at this time. You enjoy lying in the water mostly undisturbed.');
      (s as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
      if ((!((s as any).temp_rand ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['pav_pool_events', 'kidsplash'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) === 1) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'kidsplashgroup'] },
          ]);
        }
      }
      (s as any).temp_rand = undefined;
    } else {
      if (((s as any).hour ?? 0) < 18) {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('The pool is crowded with all kinds of people. It\'s impossible to relax in the water without someone constantly bumping into you or getting stinging water splashed across your face.');
        (s as any).temp_rand = (Math.floor(Math.random() * 31) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'kidsplash'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            // TODO-QSP: !{ elseif temp_rand = 2:
            scene.actions([
              { label: 'Continue', goto: ['pav_pool_events', 'kidsplashgroup'] },
              { label: 'Continue', goto: ['pav_pool_events', 'relaxgropebelow'] },
            ]);
          } else {
            if (((s as any).temp_rand ?? 0) === 3  &&  (!((s as any).PCloOnePiece ?? 0))) {
              scene.actions([
                { label: 'Continue', goto: ['pav_pool_events', 'pullstringbottom'] },
              ]);
            }
          }
        }
        (s as any).temp_rand = undefined;
      } else {
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('Given how late in the evening it is, only a few adults are in the pool, so you enjoy lying in the water mostly undisturbed.');
        if ((Math.floor(Math.random() * 30) + 1) === 1  &&  ((s as any).pav_swimpool ?? 0)?.['rape_event'] === 0  &&  ((s as any).hour ?? 0) > 20) {
          scene.actions([
            { label: 'Continue', goto: ['pav_pool_events', 'late_assault'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterFeetwater(s: GameState, scene: SceneBuilder): void {
  ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['disableact'] = 0;
  scene.img('images/locations/pavlovsk/community/swim/sitwater.jpg');
  scene.text('You sit at the edge of the pool, enjoying the water around your feet while observing the activity around you.');
  if (((s as any).hour ?? 0) < 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('The pool is almost empty, so you watch the movement of the water and the odd swimmer that passes by from time to time.');
  } else {
    if (((s as any).hour ?? 0) < 12) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('You enjoy watching people having fun in the water.');
    } else {
      if (((s as any).hour ?? 0) < 18) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('The pool is crowded with all kinds of people and sitting here is proving not to be as relaxing as you hoped. You get splashed with water from time to time.');
        (s as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
        if ((!((s as any).temp_rand ?? 0))) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          scene.text('Some children push you from behind and you fall into the water as they run away snickering loudly.');
          scene.actions([
            { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) === 1) {
            (s as any).minut = ((s as any).minut ?? 0) + 7;
            qspCall(s, 'mood', 'lower', 'tiny');
            scene.text('Some children keep purposefully splashing you with water.');
          } else {
            if (((s as any).temp_rand ?? 0) === 2) {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              scene.text('A ball bounces off your head and lands nearby. You throw it back to the apologetic children that threw it.');
            }
          }
        }
        (s as any).temp_rand = undefined;
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('You observe the few people in the pool while swaying your feet in the water.');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stand up', goto: ['pav_pool', 'pool'] },
    { label: 'Slide into the water', goto: ['pav_pool', 'poolwater'] },
    { label: 'Keep sitting', goto: ['pav_pool_events', 'feetwater'] },
  ]);
  scene.build();
}

function enterWatertoplost(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimedesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You\'re topless in the water, a fact you\'re trying to hide.');
  if ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 21)) {
    scene.text('You see the few people scattered around the pool looking at you from time to time.');
  } else {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
      scene.text('You could try to reach the edge of the pool, but you would have to get very close to other people. You could also wait and hope that the pool empties a little without calling attention to yourself.');
    }
  }
  scene.actions([
    { label: 'Try to reach the edge', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 12  &&  ((st as any).hour ?? 0) < 18) {
      qspGoto(st, 'pav_pool_events', 'tryreachedgenotop');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 3;
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTimedesc(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('You reach the edge of the pool and manage to climb out unnoticed before running to the locker room. You can get rid of this bottom since it\'s useless now.');
      ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['toplost'] = 0;
      qspCall(st, 'clothing', 'strip');
      scene.actions([
        { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
      ]);
    }
  } },
    { label: 'Wait around', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 12  &&  ((st as any).hour ?? 0) < 18) {
      (st as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
      if (((st as any).temp_rand ?? 0) < 2) {
        qspGoto(st, 'pav_pool_events', 'WTL_nothinghappens');
      } else {
        if (((st as any).temp_rand ?? 0) === 2) {
          qspGoto(st, 'pav_pool_events', 'WTL_mast');
        } else {
          qspGoto(st, 'pav_pool_events', 'WTL_boystole');
        }
      }
      (st as any).temp_rand = undefined;
    } else {
      qspGoto(st, 'pav_pool_events', 'WTL_nothinghappens');
    }
  } },
  ]);
  scene.build();
}

function enterWTLNothinghappens(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimedesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You wait around topless in the water for a while. You notice several people staring at you and have to avoid others from time to time, but nobody disturbs you.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool_events', 'watertoplost'] },
  ]);
  scene.build();
}

function enterWTLMast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/assgrab1.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimedesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You\'re topless in the water with only your head poking out when you suddenly feel someone behind you start forcefully squeezing your ass.');
  qspCall(s, 'willpower', 'humiliation', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 100) + 0) < 75) {
      scene.img('images/locations/pavlovsk/community/swim/stopit.jpg');
      scene.text('You manage to shake them off and move away without looking back.');
      scene.actions([
        { label: 'Continue', goto: ['pav_pool_events', 'watertoplost'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/swim/bottomlost.jpg');
      scene.text('You manage to shake them off and attempt to move away, but they tug on the string of your bikini bottom, undoing the knot.');
      scene.text('Struggling to get away from them, it takes you a moment to notice and by then your bikini bottom is almost completely gone.');
      scene.text('You manage to grab onto it and find some space to put it back on and redo the knot.');
      scene.actions([
        { label: 'Continue', goto: ['pav_pool_events', 'watertoplost'] },
      ]);
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'humiliation', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flee', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flee', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/waterleave.jpg');
    scene.text('You manage to get rid of your assailant and flee to an emptier part of the pool.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_events', 'watertoplost'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Freeze', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/grope2.jpg');
    scene.text('You freeze, not sure how to react. Your assailant is standing behind you and notices your submissivness, which makes him bolder.');
    scene.text('"I\'ve got your bikini top right here. I\'ll give it back in a minute."');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim//toploosen.jpg');
    scene.text('You turn and notice that your assailant has his dick out and is discreetly masturbating as he stares at you.');
    scene.text('He seems to be reaching climax and ejaculates while looking directly into your eyes.');
    scene.text('He hands your bikini top back while smiling at you and leaves without saying anything. To your disgust, you realize that he jacked off into it. You quickly clean it as best as you can before putting it back it on.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWTLBoystole(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pav_swimpool ?? 0)?.['boystole'] !== 1) {
    qspGoto(s, 'pav_pool_events', 'watertoplost');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['boystole'] = 0;
  scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
  scene.text('The boy that stole your bikini top approaches you. "Let me see your tits and I\'ll give it back."');
  qspCall(s, 'willpower', 'humiliation', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
    scene.text('You shake your head and he laughs. "Well, good luck then," he says mockingly before swimming away with your bikini top.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_events', 'watertoplost'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Reluctantly do it', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['boystole'] = 0;
    scene.img('images/locations/pavlovsk/community/swim/exposebreasts.jpg');
    if (((st as any).tits ?? 0) < 2) {
      scene.text('You look around before nodding and reluctantly removing your hands from your breasts. He dives down to take a look at you.');
      scene.text('He immediately surfaces with a disappointed look on his face. "I wanted to see some tits! That fat kid over there has bigger tits than you!"');
      scene.text('He tosses your bikini top at you before swimming away in frustration. You quickly put it back on before anyone sees you, feeling a little hurt by his comments.');
    } else {
      if (((st as any).tits ?? 0) <= 4) {
        scene.text('You look around before nodding and reluctantly removing your hands from your breasts. He dives down to take a look at you.');
        scene.text('He surfaces after a short while with a smile on his face. "Nice tits!"');
        scene.text('He returns your bikini top and happily swims away. You quickly put it back on before anyone sees you.');
      } else {
        scene.text('You look around before nodding and reluctantly removing your hands from your breasts. He dives down to take a look at you.');
        scene.text('After what feels like an eternity, he finally surfaces with a huge grin on his face. "Your tits are fucking huge! They\'re bigger than my head!"');
        scene.text('You blush as he returns your bikini top and swims away looking rather satisfied. You quickly put it back on before anyone sees you.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTryreachedgenotop(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/losttop.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimedesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You slowly move towards the edge of the pool while trying to avoid people. You manage for the most part, but do come into contact with someone who thankfully doesn\'t seem to notice anything.');
  scene.text('You reach the edge of the pool and manage to climb out unnoticed before running to the locker room. You can get rid of this bottom since it\'s useless now.');
  ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['toplost'] = 0;
  qspCall(s, 'clothing', 'strip');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
  ]);
  scene.build();
}

function enterKidsplash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/kidsplash.jpg');
  scene.text('You\'re minding your own business and quietly swimming when a kid suddenly splashes you hard with water. The little brat seems to have done it on purpose, and he swims away laughing.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterKidsplashgroup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/kidsplashgroup.jpg');
  scene.text('While swimming, a group of boys start splashing each other with huge amounts of water and you end up caught in the middle. By the time you can reopen your stinging eyes, they are long gone.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterDivedickout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/swim/penisout.jpg');
  scene.text('While diving, you see a guy with his dick hanging out of his shorts. It seems he\'s doing it on purpose as it\'s somewhat hard. Did he swim over to you on purpose so you would see it?');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterApproachbehind(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/approachbehindhard.jpg');
  scene.text('You\'re at the edge of the pool with your back towards the water when you suddenly feel something hard pressing against your ass. As you turn around, you notice a fat older man resting his stomach against your back with what feels like his hard dick pressing against your ass.');
  scene.text('You turn around with a look of shocked disgust on your face and he backs off.');
  scene.text('"Sorry, I fell…" he says with a grin as he leaves.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterKidsunderwater(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/boysdiving.jpg');
  scene.text('While diving, you encounter a group of children who look like they will cause you trouble. You take a different course to avoid them.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterPullstringbottom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloOnePiece ?? 0) === 1) {
    qspGoto(s, 'pav_pool', 'poolwater');
  } else {
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/pullstringbottom2.jpg');
    scene.text('You\'re minding your own business and quietly swimming when you suddenly feel someone forcefully pull on the strings of your bikini bottom.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Before you can react, it has loosened and slipped off you into the water. You frantically start looking around for it, very conscious of the fact that your groin is now on full display to anyone under the water.');
    scene.text('Thankfully, you soon see your bottom floating nearby and manage to grab it, quickly putting it back on and tightly redoing the strings. By the time you finish, your assailant has long since disappeared into the crowd.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAssgrab(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/assgrab1.jpg');
  scene.text('While swimming, you suddenly feel a hand pawing at and squeezing your ass. You turn in time to see an underwater shadow swimming away.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterAssgrabbihand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/assgrab2.jpg');
  scene.text('While swimming, you suddenly feel two hands forcefully pawing at and squeezing your ass. You turn in time to see an underwater shadow swimming away.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterGropedfrombelow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/gropedfrombelow.jpg');
  scene.text('While swimming, you suddenly feel two hands grabbing your waist from below and sliding along your body as you pass above.');
  scene.text('You shiver at the thought that some stranger just assaulted you and decide not to look back.');
  scene.actions([
    { label: 'Continue', goto: ['pav_pool', 'poolwater'] },
  ]);
  scene.build();
}

function enterSideflirt(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/flirtside.jpg');
  scene.text('It\'s rather late now and only you and an older man are in the pool. He swims up to you as you relax at the edge. "Nice evening for a swim, isn\'t it?"');
  scene.text('You notice him making no effort to hide the fact that he\'s checking you out.');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Blow him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Blow him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/community/swim/flirtside.jpg');
    scene.text('"If you say so…" you answer in the most uninterested tone you can manage and look away from him.');
    scene.text('"Whatever. You\'re not worth the effort," he replies and goes back to swimming laps.');
    scene.text('You scoff and shake your head before deciding that it\'s time to go. You climb out of the pool and head for the locker room.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Show interest', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/flirtside.jpg');
    scene.text('"It is. I love feeling the water on my skin," you reply and he smiles while continuing to check you out.');
    scene.text('You spend some time talking about different topics and you find yourself enjoying the conversation.');
    if ((Math.floor(Math.random() * 7) + 0) < 5) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/flirtside.jpg');
    scene.text('He thanks you for your time and leaves. It\'s getting late and you decide that it\'s time to go. You climb out of the pool and head for the locker room.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/abouttokiss.jpg');
    scene.text('You didn\'t realize that he\'s slowly been inching closer to you, and is now so close that you feel him pressing against you.');
    scene.text('He then grabs and pulls you towards him, about to kiss you.');
    qspCall(st, 'willpower', 'kiss', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img(`images/locations/pavlovsk/community/swim/ladder${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You slide out of his hands, climb out of the pool and make a dash for the locker room without looking back.');
    scene.text('"Oh come on!" he shouts at you as you flee.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'kiss', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/community/swim/kisswater.jpg');
    scene.text('You decide to accept the kiss. Your lips welcome each other and soon both your tongues entangle each other in a long deep kiss as he holds your face with both hands.');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['kiss_event'] = 1;
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_events', 'edge_kiss'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stay passive', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/kisswater.jpg');
    scene.text('You freeze, not sure how to react. He notices your submissivness, but doesn\'t seem to care. He engulfs your lips in his mouth as his tongue inches deeper into your mouth.');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['kiss_event'] = 2;
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_events', 'edge_kiss'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterEdgeKiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/swim/pussyplay.jpg');
  if (((s as any).pav_swimpool ?? 0)?.['kiss_event'] === 1) {
    scene.text('He seems to takes your active involvement as permission for more and you feel his hand slide into your bikini bottom as his tongue continues exploring your mouth.');
    scene.text('He starts massaging your clit as he continues making out with you. You start becoming incredibly aroused from the pleasure.');
  } else {
    if (((s as any).pav_swimpool ?? 0)?.['kiss_event'] === 2) {
      scene.text('Thanks to your submissiveness, he starts to take your body for granted; his hand slides into your bikini bottom as his tongue continues exploring your mouth.');
      scene.text('He starts massaging your clit as he continues to make out with you. You remain frozen in place, still unsure about what\'s happening.');
    }
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/waterleave.jpg');
    scene.text('After a short while, he seems to have had enough, smiles at you and swims away.');
    scene.text('You fix your bikini bottom before climbing out of the pool and heading for the locker room. It\'s getting late and you don\'t really want to be here anymore.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/blowforced.jpg');
    scene.text('After a short while, he breaks the kiss. "Take a deep breath. You\'ll need it!"');
    scene.text('You barely manage to take a quick gulp of air before he shoves you under the water, where you\'re greeted by the sight of his hard dick throbbing in front of you.');
    if (((st as any).pav_swimpool ?? 0)?.['kiss_event'] === 1) {
      scene.text('He shoves his dick into your mouth and starts thrusting with great determination. You get the hint and start sucking his dick.');
    } else {
      if (((st as any).pav_swimpool ?? 0)?.['kiss_event'] === 2) {
        scene.text('He shoves his dick into your mouth and starts thrusting with great determination. You make efforts to break free from his grip as he fucks your unwilling mouth.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/cummouth.jpg');
    qspCall(st, 'arousal', 'bj', (-3), 'rough', 'sub');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'cum_call', 'mouth', 'pool stranger', 0);
    qspCall(st, 'cum_call', 'hair', 'pool stranger', 0, '', (-1), 10);
    qspCall(st, 'arousal', 'end');
    if (((st as any).pav_swimpool ?? 0)?.['kiss_event'] === 1) {
      scene.text('After a short while, you feel his dick starting to throb and shots of cum start blasting into your throat as he holds you firmly in place. Your mouth is soon full of cum, and you try to gulp as much down as you can. Once he releases you, the rest of the cum spills out of your mouth and into the water. Quite a lot of the sticky mess gets tangled in your hair.');
      scene.text('You surface to find him climbing out of the pool, seemingly done with you. You can\'t believe you actually did that. You decide it\'s time for you to leave as well and climb out of the pool and head for the locker room.');
    } else {
      if (((st as any).pav_swimpool ?? 0)?.['kiss_event'] === 2) {
        qspCall(st, 'mood', 'lower', 'small');
        scene.text('You eventually manage to get his dick out of your mouth, but he still holds you under the water. He starts jerking off and his cum soon starts blasting into the water in front of you. It gets tangled in your hair and some of it ends up in your mouth.');
        scene.text('You surface to find him climbing out of the pool, seemingly done with you. You can\'t believe you let him do that to you! You climb out of the pool and run to the locker room to get cleaned up.');
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/pussyplay1.jpg');
    scene.text('He pulls your bikini bottom down slightly and you feel something hard pushing between your legs and probing your labia. He starts to slowly hump you without penetrating, sliding the whole length of his hard dick between your legs with each thrust.');
    qspCall(st, 'willpower', 'sex', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Have sex with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Have sex with him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/community/swim/poolfuck.mp4');
    qspCall(st, 'arousal', 'vaginal', (-3), 'exhibitionism', 'sub');
    qspCall(st, 'cum_call', '', 'pool stranger', 0, '', 10000, 50);
    qspCall(st, 'arousal', 'end');
    scene.text('You\'re far too horny now, so you untie your bikini bottom and pull it off before wrapping yourself around him, the tip of his dick pressing against your pussy.');
    scene.text('He doesn\'t hesitate and immediately slides you down onto his shaft, causing you to let out a quiet moan. You grip him tightly as he thrusts his full length in and out of your pussy, doing your best to stay as quiet as possible.');
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('This goes on for a while until he stops thrusting and holds you tightly as you feel a warmth spilling deep into your pussy. He just came inside you! Even though you\'re on birth control and it was the heat of the moment, you\'re still a little pissed that he didn\'t say anything. When he pulls out, his cum spills out of you into the water.');
      scene.text('"That pussy was amazing!" he says before giving you a final passionate kiss and letting you down. You watch as he fixes his shorts and climbs out of the pool. You grab your bikini bottom and make a dash for the locker room, deciding it\'s best not to hang around half naked in the pool with cum leaking out of you.');
    } else {
      scene.text('This goes on for a while until he stops thrusting and holds you tightly as you feel a warmth spilling deep into your pussy. He just came inside you and you\'re not on birth control! You panic and try to climb off of him. When you do, his cum spills out of you into the water.');
      scene.text('You then give him a slap, pissed that he would cum inside you without saying anything. "What the fuck, asshole?! I\'m not on the pill!" you scream, but he just pulls his shorts up and climbs out of the pool, leaving you to it. You grab your bikini bottom and make your way to the locker room, no longer in the mood for swimming.');
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/community/swim/ladder${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You break the kiss and quickly push yourself away from him before pulling your bikini bottom back up. "What the fuck, asshole?! I\'m not some cheap whore for you to fuck!" you shout at him angrily.');
    scene.text('"Don\'t tease guys if you\'re going to be such a fucking prude about it then! Whatever, bitch…" he scoffs before swimming away.');
    scene.text('Deciding it\'s time to leave, you climb out of the pool and run to the locker room.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterLateAssault(s: GameState, scene: SceneBuilder): void {
  ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['rape_event'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/pool5.jpg');
  scene.text('It\'s rather late now and only you and an old man are in the pool. You\'re creeped out by the way he keeps staring at you and avoid him as much as possible as you finish your swim.');
  scene.text('After a few more minutes, you decide it\'s getting late and swim over to the edge to climb out. Just as you\'re about to pull yourself up, a hand suddenly covers your mouth and you\'re dragged kicking and thrashing back into the water.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/assault1.jpg');
    scene.text('"Shut the fuck up and stop struggling, bitch! I\'m going to have some fun with you and you\'re going to let me, otherwise you\'re going to regret it. Understand?"');
    if (((st as any).pcs_agil ?? 0) >= 50) {
      qspCall(st, 'willpower', 'humiliation', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Try to slip away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Try to slip away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'humiliation', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You contort your limber body and manage to slip out of his grasp. Seizing the opportunity, you quickly make your way out of the pool before he can grab you again and run to the locker room without looking back.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pcs_stren ?? 0) >= 60) {
      qspCall(st, 'willpower', 'rape', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Elbow him in the face', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Elbow him in the face', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'rape', 'resist');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You jab your arm back and your elbow makes contact with his nose, causing him to reel back in pain and let you go. You quickly make your way out of the pool before he can grab you again and run to the locker room without looking back.');
    scene.text('You can hear him loudly cursing about how you\'ve broken his nose.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You silently and fearfully nod your head as you feel his other hand slide into your bikini bottom and start stroking your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/assault2.jpg');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      ((st as any).stat = (st as any).stat ?? {})['think_virgin'] = 0;
      ((st as any).stat = (st as any).stat ?? {})['vaginal'] = 1;
      ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['virgin_rape'] = 1;
      qspCall(st, 'stat', '');
      scene.text('Panic and dread set in as you realize that you\'re about to lose your virginity to this rapist, but you\'re helpless to resist as he bends you over and pulls your bikini bottom off. You squirm as you feel the tip of his dick pushing against your pussy and instinctively try to pull away, but he tightens his grip before forcing his way inside.');
      scene.text('You squeal in pain as your virgin pussy is violently deflowered, causing the man to chuckle. "Oh, have I popped your cherry? This <i>is</i> going to be fun…"');
    } else {
      ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['rape'] = 1;
      qspCall(st, 'stat', '');
      scene.text('You\'re helpless to resist as he bends you over the edge of the pool and pulls your bikini bottom off. You feel the tip of his dick pushing against your pussy and you instinctively try to pull away, but he holds you tightly and forces his full length inside you.');
      scene.text('You again try to escape, but he responds by roughly pulling on your hair. "I told you not to fucking squirm, bitch!"');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/assault2.jpg');
    scene.text('He starts violently thrusting in and out of your pussy, holding you by your hair and using it as a handle to apply more force. Your only thought is hoping this will end soon…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/community/swim/assault3.jpg');
    scene.text('After a few minutes, he pulls you on top of him, slides you down onto his dick and resumes roughly fucking you.');
    scene.text('Your attention wanders around the pool. To your dismay, it\'s completely empty and you realize that nobody is coming to help you. Your thoughts are then interrupted when your assailant suddenly groans and you feel a warmth spilling into your pussy. He\'s cumming inside you!');
    scene.text('It might be shock, but you somehow manage to ignore the fact that you\'re being filled with a stranger\'s cum and instead concentrate on the eerie sounds of the deserted pool.');
    qspCall(st, 'arousal', 'vaginal', 10, 'rape');
    qspCall(st, 'cum_call', '', 'pool rapist', 0, '', 15000, 60);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/assault4.jpg');
    scene.text('When he finishes emptying his load inside you, he pulls out and immediately plugs your pussy with his fingers before leaning in and whispering into your ear.');
    scene.text('"Just making sure it stays in there. I want you to get pregnant so you\'ll always remember what happened here. Don\'t think about telling anyone either, because nobody will believe a slutty little bitch like you."');
    scene.text('He keeps his fingers jammed inside your pussy for a few minutes before he finally releases you and climbs out of the pool. You stay frozen in place until you\'re sure he\'s gone, not willing to look back at him as he makes his escape.');
    if (((st as any).pav_swimpool ?? 0)?.['virgin_rape'] === 1  &&  ((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('You start sobbing as your emotions overwhelm you. That man defiled your womanhood and wanted you to get pregnant from it! Luckily, your birth control should stop that from happening.');
      scene.text('You can\'t find your bikini bottom, so you slowly climb out of the pool, clutching your stomach as a sharp pain shoots through your sore and tender pussy. You then make your way to the locker room, trying not to think about what happened.');
    } else {
      if (((st as any).pav_swimpool ?? 0)?.['virgin_rape'] === 1) {
        scene.text('You start sobbing as your emotions overwhelm you. That man defiled your womanhood and wants you to get pregnant from it! You clutch your stomach as a sharp pain suddenly shoots through your sore and tender pussy. That\'s likely to happen given that you\'re not on birth control.');
        scene.text('You can\'t find your bikini bottom, so you slowly climb out of the pool and make your way to the locker room, trying not to think about what happened.');
      } else {
        if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('You place a hand on your stomach, even though you\'re on birth control and shouldn\'t need to worry about getting pregnant. You can\'t find your bikini bottom, so you climb out of the pool and quickly make your way to the locker room, trying not to think about what happened.');
        } else {
          scene.text('You place a hand on your stomach and hold in your sobs, hoping that his words about you getting pregnant don\'t come true. You can\'t find your bikini bottom, so you climb out of the pool and quickly make your way to the locker room, trying not to think about what happened.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_pool', 'lockerfemale'] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'timedesc':
      enterTimedesc(s, scene);
      break;
    case 'store_swimsuit_buy':
      enterStoreSwimsuitBuy(s, scene);
      break;
    case 'buy_cheap_swimsuit':
      enterBuyCheapSwimsuit(s, scene);
      break;
    case 'naked_mirror':
      enterNakedMirror(s, scene);
      break;
    case 'naked_locker':
      enterNakedLocker(s, scene);
      break;
    case 'locker_clothed_to_nude':
      enterLockerClothedToNude(s, scene);
      break;
    case 'locker_swim_to_nude':
      enterLockerSwimToNude(s, scene);
      break;
    case 'locker_nude_to_clothed':
      enterLockerNudeToClothed(s, scene);
      break;
    case 'locker_nude_to_swim':
      enterLockerNudeToSwim(s, scene);
      break;
    case 'locker_clothed_to_swim':
      enterLockerClothedToSwim(s, scene);
      break;
    case 'locker_swim_to_clothed':
      enterLockerSwimToClothed(s, scene);
      break;
    case 'shower_late':
      enterShowerLate(s, scene);
      break;
    case 'relaxedswim':
      enterRelaxedswim(s, scene);
      break;
    case 'exerciseswim':
      enterExerciseswim(s, scene);
      break;
    case 'dive':
      enterDive(s, scene);
      break;
    case 'edgepool':
      enterEdgepool(s, scene);
      break;
    case 'relaxedwater':
      enterRelaxedwater(s, scene);
      break;
    case 'feetwater':
      enterFeetwater(s, scene);
      break;
    case 'watertoplost':
      enterWatertoplost(s, scene);
      break;
    case 'WTL_nothinghappens':
      enterWTLNothinghappens(s, scene);
      break;
    case 'WTL_mast':
      enterWTLMast(s, scene);
      break;
    case 'WTL_boystole':
      enterWTLBoystole(s, scene);
      break;
    case 'tryreachedgenotop':
      enterTryreachedgenotop(s, scene);
      break;
    case 'kidsplash':
      enterKidsplash(s, scene);
      break;
    case 'kidsplashgroup':
      enterKidsplashgroup(s, scene);
      break;
    case 'divedickout':
      enterDivedickout(s, scene);
      break;
    case 'approachbehind':
      enterApproachbehind(s, scene);
      break;
    case 'kidsunderwater':
      enterKidsunderwater(s, scene);
      break;
    case 'pullstringbottom':
      enterPullstringbottom(s, scene);
      break;
    case 'assgrab':
      enterAssgrab(s, scene);
      break;
    case 'assgrabbihand':
      enterAssgrabbihand(s, scene);
      break;
    case 'gropedfrombelow':
      enterGropedfrombelow(s, scene);
      break;
    case 'sideflirt':
      enterSideflirt(s, scene);
      break;
    case 'edge_kiss':
      enterEdgeKiss(s, scene);
      break;
    case 'late_assault':
      enterLateAssault(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_pool_events: LocationDef = {
  name: 'pav_pool_events',
  title: 'The pool is almost empty given how early in the morning it i',
  region: 'pavlovsk',
  enter: enter,
};
