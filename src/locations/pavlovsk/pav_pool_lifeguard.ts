import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloSwimwear ?? 0)) {
    qspCall(s, 'clothing', 'wear_last_worn');
  }
  qspCall(s, 'outfit', 'remove_backup', 'lifeguard');
  qspGoto(s, 'pav_pool', 'entrance');
  // TODO-QSP: end
  scene.build();
}

function enterTraining(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lockers.jpg');
  if (((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 1) {
    scene.text('The chief lifeguard shows you the staff locker room, which is just as run down and grimy as the public ones.');
    scene.text('"Take a quick shower and put this on," she orders and hands you a red one piece swimsuit. "LIFEGUARD" is written prominently on the front and back.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'outfit', 'backup', 'lifeguard');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'clothing', 'wear', 'danilovich_swimsuit', 2, 'borrowed');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('You strip from your clothes and place them in one of the lockers before taking a quick shower.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.text('Once you finish, you use one of the provided towels to dry yourself before slipping into the skintight swimsuit and inspecting yourself in one of the mirrors.');
    scene.text('You immediately notice both your nipples and the outline of your pussy are clearly visible through the thin fabric.');
    if (((st as any).tits ?? 0) >= 5) {
      scene.text('Your large breasts are tightly constricted by the fabric, leaving you feeling a little uncomfortable.');
    }
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('Glancing behind you, you notice the minimal amount of coverage, leaving your prominent ass cheeks on full display.');
    }
    scene.text('You then return to the chief lifeguard, who motions for you to follow her out to the pool.');
    scene.actions([
      { label: 'Start your training', goto: ['pav_pool_lifeguard', 'training1'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You follow Maria into the grimy staff locker room, where she motions for you to shower and get dressed.');
    scene.text('"Be quick about it. We need to finish your training before the crowds come in."');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'outfit', 'backup', 'lifeguard');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'clothing', 'wear', 'danilovich_swimsuit', 2, 'borrowed');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('You strip from your clothes and place them in one of the lockers before taking a quick shower.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.text('Once you finish, you use one of the provided towels to dry yourself before slipping back into the skintight swimsuit.');
    if (((st as any).tits ?? 0) >= 5) {
      scene.text('Despite your best efforts to adjust them, your breasts are simply too large to comfortably fit inside this outfit.');
    }
    scene.text('You then return to Maria, who motions for you to follow her out to the pool.');
    scene.actions([
      { label: 'Continue your training', goto: ['pav_pool_lifeguard', 'training2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTraining1(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_pool_lifeguard'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/training.jpg');
  scene.text('As you enter the pool area, you notice the lack of people, allowing you to train before the crowds fill the pool.');
  scene.text('"Okay, into the water," the lifeguard orders. "We\'ll start with rescue techniques before the public arrive and get in our way."');
  scene.text('You dive into the pool and spend the next two hours learning and practicing how to assist or rescue a person in distress in the water.');
  scene.text('The crowds then flood in and you leave the pool to practice CPR and other life saving techniques before learning how to supervise those in the pool and how to spot anyone in distress.');
  scene.text('After 4 hours, the chief lifeguard calls an end to your training session.');
  scene.text('"Good job… Oh, my apologies. I haven\'t even asked you what your name is!" she smiles.');
  // TODO-QSP: dynamic text: You smile in return. "<<$pcs_firstname>>, but people just call me <<$pcs_nicknam...
  scene.text(`You smile in return. "${((s as any).pcs_firstname ?? '')}, but people just call me ${((s as any).pcs_nickname ?? '')}."`);
  scene.text('"You can call me Maria. You can go and shower now, but be back tomorrow at the same time to finish your training."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the staff locker room', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    // TODO-QSP: 'You enter the staff locker room and remove your swimsuit ' + iif(tits >= 5, ', breathing a sigh of ...
    scene.text('You then hit the showers, enjoying the warmth of the water pouring over you. Once you\'re finished, you step out and wrap yourself in one of the poor quality towels that have been provided for staff use.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((st as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
    scene.text('As you change back into your clothes, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything. You tell yourself you\'re just being paranoid and continue getting dressed.');
    // TODO-QSP: dynamic text: Once you''re finished, you spot a set of <a href="exec:minut += 1 & gt ''pav_poo...
    scene.text('Once you\'re finished, you spot a set of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pav_pool_lifeguard/u0027, /u0027mirror/u0027); return false;">mirrors</a> where you can brush your hair or do your makeup.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool_lifeguard', 'leave'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTraining2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_employed', 'pav_pool_lifeguard');
  ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})['pav_pool_lifeguard'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/training.jpg');
  scene.text('You enter the empty pool with Maria, where you continue practicing what you\'ve already learned while also learning some more advanced techniques and the dangers around the pool that aren\'t related to the water itself.');
  scene.text('At the end of the session, Maria beckons you over.');
  // TODO-QSP: dynamic text: "Excellent work, <<$pcs_nickname>>. You''ve done all the required training and I...
  scene.text(`"Excellent work, ${((s as any).pcs_nickname ?? '')}. You've done all the required training and I don't see any reasons why I shouldn't hire you. You can start next week. You can keep the uniform by the way. It's yours now."`);
  scene.text('You just give her nod before making your way to the locker room.');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('As you walk around the edge of the pool, you notice a cute, slightly muscular boy in red trunks checking you out.');
    if (((s as any).tits ?? 0) >= 5) {
      scene.text('As you get closer, you notice him shamelessly glaring at your large breasts as they strain against the fabric of your skintight swimsuit.');
    }
    scene.text('"Hey there, I\'m Vadim," he says with a flirty smile. "You must be the new girl Maria hired, no?"');
    // TODO-QSP: dynamic text: "That''s me," you reply. "I''m <<$pcs_nickname>>."
    scene.text(`"That's me," you reply. "I'm ${((s as any).pcs_nickname ?? '')}."`);
    // TODO-QSP: dynamic text: "A beautiful name for a beautiful girl," he smiles. "I''ll be seeing you around,...
    scene.text(`"A beautiful name for a beautiful girl," he smiles. "I'll be seeing you around, ${((s as any).pcs_nickname ?? '')}."`);
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('As you walk away, you sense him checking out your ass.');
    }
  } else {
    scene.text('As you walk around the edge of the pool, you notice a cute, slightly muscular boy in red trunks heading your way.');
    scene.text('"Excuse me, are you Vadim by any chance?" you ask and he stops to look at you.');
    scene.text('"Yeah, that\'s me. Who\'s asking?" he replies before he notices your outfit. "Oh. You\'re that new girl Maria hired, aren\'t you?"');
    // TODO-QSP: dynamic text: "That''s me," you smile. "I''m <<$pcs_nickname>>."
    scene.text(`"That's me," you smile. "I'm ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('"Cool…" he says flatly. "I\'ll see you around I guess…"');
    scene.text('He brushes past you and starts flirting with some pretty girls in the pool, leaving you feeling a little insulted by how dismissive he was of you.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the staff locker room', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    // TODO-QSP: 'You enter the staff locker room and remove your swimsuit '+iif(tits >= 5, ', breathing a sigh of re...
    scene.text('You then hit the showers, enjoying the warmth of the water pouring over you. Once you\'re finished, you step out and wrap yourself in one of the poor quality towels that have been provided for staff use.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((st as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/photoclothing.jpg');
    scene.text('As you change back into your clothes, you\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything. You tell yourself you\'re just being paranoid and continue getting dressed.');
    // TODO-QSP: dynamic text: Once you''re finished, you spot a set of <a href="exec:minut += 1 & gt ''pav_poo...
    scene.text('Once you\'re finished, you spot a set of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pav_pool_lifeguard/u0027, /u0027mirror/u0027); return false;">mirrors</a> where you can brush your hair or do your makeup.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool_lifeguard', 'leave'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStaffLockerRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lockers.jpg');
  scene.text('The staff locker room is just as run down and grimy as the rest of the building. The unisex design offers little privacy, but you rarely encounter any of your fellow staff members here.');
  scene.text('A row of dilapidated lockers line one wall, with a group of old benches provided as a seating area. The showers are towards the back of the room.');
  // TODO-QSP: dynamic text: A set of <a href="exec:minut += 1 & gt ''pav_pool_lifeguard'', ''mirror''">mirro...
  scene.text('A set of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pav_pool_lifeguard/u0027, /u0027mirror/u0027); return false;">mirrors</a> where you can brush your hair or do your makeup line the wall opposite the lockers, while an old water fountain provides hydration to anyone desperate enough to use it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'pav_pool_lifeguard', 'cash');
    if (((st as any).temp_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: You collect your wages for the day (<<$func(''money'', ''string_profit'', temp_p...
      scene.text(`You collect your wages for the day (${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay ?? ''))}) before leaving.`);
    } else {
      scene.text('You head for the exit.');
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_lifeguard', 'leave'] },
    ]);
  } },
    { label: 'Use the water fountain', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/water_fountain.jpg');
    scene.text('While the water fountain looks clean, you still question how hygienic it would be to drink the water from it.');
    scene.actions([
      { label: 'Don\'t drink', handler: (st: GameState) => {
    scene.text('You decide against drinking from the water fountain.');
    scene.actions([
      { label: 'Leave', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
    ]);
  } },
      { label: 'Drink some water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'beverage', 'water_stats');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/waterfountain.jpg');
    scene.text('You take a few sips of water from the fountain while trying not to think of your murky surroundings.');
    scene.actions([
      { label: 'Finish drinking', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMirror(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'pav_pool_lifeguard', 'mirror');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/mirrorsink.jpg');
  // TODO-QSP: dynamic text: The <a href="exec:minut += 1 & gt ''mirror'', ''start''">mirrors</a> are is just...
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> are is just as murky as the rest of the changing room. It\'s almost like the owners don\'t care about the dilapidated appearance.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the changing room', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
  ]);
  scene.build();
}

function enterStartShift(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'jobs', 'clock', 'pav_pool_lifeguard');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lockers.jpg');
  scene.text('You enter the staff locker room and strip from your clothes, ready to put on your uniform.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a quick shower first', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'outfit', 'backup', 'lifeguard');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'clothing', 'wear', 'danilovich_swimsuit', 2, 'borrowed');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('You enter one of the shower stalls and take a quick shower.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.text('Once you finish, you slip into the skintight swimsuit and adjust it before heading out into the noisy pool area.');
    scene.actions([
      { label: 'Go to work', goto: ['pav_pool_lifeguard', 'shift_part1'] },
    ]);
  } },
    { label: 'Put your uniform on', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'backup', 'lifeguard');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'clothing', 'wear', 'danilovich_swimsuit', 2, 'borrowed');
    qspCall(st, 'stat', '');
    scene.text('You slip into the skintight swimsuit and adjust it before heading out into the noisy pool area.');
    scene.actions([
      { label: 'Go to work', goto: ['pav_pool_lifeguard', 'shift_part1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEndShift(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/lockers.jpg');
  scene.text('You enter the staff locker room and prepare to strip out of your uniform.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    qspCall(st, 'stat', '');
    scene.text('You slip out of your swimsuit and get dressed back into your clothes.');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((st as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
      scene.text('You\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything. You tell yourself you\'re just being paranoid and continue getting dressed.');
    }
    scene.actions([
      { label: 'Finish getting dressed', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
    ]);
  } },
    { label: 'Take a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('You slip out of your swimsuit and enter one of the shower stalls, enjoying the sensation of the warm water on your skin.');
    if ((Math.floor(Math.random() * 3) + 0) > 0  ||  ((st as any).pav_swimpool ?? 0)?.['vadim_shower_reject'] !== 0  ||  ((st as any).pcs_hotcat ?? 0) < 6) {
      scene.text('Once you\'re finished, you step out and wrap yourself in one of the poor quality towels that have been provided for staff use before heading to your locker and getting dressed.');
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['storeclerkhiddenphotos'] = ((st as any).pav_swimpool['storeclerkhiddenphotos'] ?? 0) + (1);
        scene.text('You\'re startled when you think you hear a camera click, as if someone was taking photos, but you don\'t see anything. You tell yourself you\'re just being paranoid and continue getting dressed.');
      }
      scene.actions([
        { label: 'Finish getting dressed', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
      ]);
    } else {
      scene.text('As you enjoy your shower, you suddenly hear what sounds like someone entering the locker room. Cautious of the fact that someone is now in the room, you cover yourself up while picking up your pace, only to turn round and see Vadim smiling at you.');
      scene.text('"Hey there, beautiful," he smiles.');
      if (((st as any).tits ?? 0) >= 5) {
        scene.text('You can see him trying to peek at your large breasts as you cover them with your hands.');
      }
      if (((st as any).pav_swimpool ?? 0)?.['vadim_sex'] === 0) {
        scene.actions([
          { label: 'Ask what he wants', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('"What do you want, Vadim? I\'m trying to shower here," you ask as he continues checking you out.');
    scene.text('"I think you\'re pretty hot and was wondering if you wanted to… have some fun?"');
    scene.text('The way he says it leaves no doubt in your mind what he means.');
    scene.actions([
      { label: 'Maybe some other time', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('"Maybe some other time, Vadim. I\'m not really in the mood and I have to be somewhere else soon," you reply with a smile.');
    scene.text('He returns the smile. "Sure thing, beautiful. I\'ll be seeing you around."');
    scene.text('He winks at you before walking away, leaving you to finish your shower in peace before you get dressed.');
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
      { label: 'Have some fun', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You remove your hands from your breasts, giving Vadim a good look at them as you smile at him. "Like what you see?"');
    scene.text('"Very much so!" he grins as he quickly removes his trunks and joins you in the shower.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_lifeguard', 'vadim_shower_sex'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"Mind if I… join you again?" he smirks, making no effort to hide the fact that he\'s trying to sneak a peek at your breasts.');
        scene.actions([
          { label: 'Stop hooking up with him', handler: (st: GameState) => {
    scene.text('You shake your head as you continue covering yourself up. "Sorry, but I think we should stop doing this."');
    scene.text('"Oh? And why is that?" he asks, clearly surprised at your answer, but trying to act smooth.');
    scene.actions([
      { label: 'Be polite', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_shower_reject'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('"I don\'t want to be rude, but you\'re not exactly… big…" you reply.');
    scene.text('He frowns. "So? You still fucked me, didn\'t you?"');
    scene.text('You blush a little. "Yes, but I… I didn\'t actually… enjoy it…"');
    scene.text('Oh…" he replies, looking more than a little crestfallen. "If that\'s how you feel, then I won\'t bother you again…"');
    scene.text('He leaves the room with his head hung low. Feeling a little guilty, you finish your shower before you grab a towel and head to your locker to get dressed. You hope this won\'t make your job awkward…');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
      { label: 'Be blunt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_shower_reject'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('"Maybe because you have a tiny dick and suck at sex? I barely felt you inside me!"');
    scene.text('He recoils in shock. "What?! You fucking bitch! You still fucked me, didn\'t you?!"');
    scene.text('"And I wish I hadn\'t because it was some of the worst sex I\'ve ever had! Maybe I\'ll let all those pretty girls you like flirting with know all about your… little secret?"');
    scene.text('He looks furious. "Do that and you\'ll regret ever getting a job here, you fucking cunt!"');
    scene.text('He storms out of the room, leaving you in peace to finish your shower before you grab a towel and head to your locker to get dressed.');
    scene.text('You don\'t think you\'ll ever be seeing him in here again, but you get the sense that you should tread carefully when it comes to your job…');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tell him to leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_shower_reject'] = 1;
    qspCall(st, 'stat', '');
    scene.text('"What are you doing?! I\'m showering here!" you cry out as you cover yourself up.');
    scene.text('"It\'s a unisex locker room. You should expect guys to walk in on you," he bluntly replies while continuing to check you out.');
    scene.text('"That might be the case, but I expect you to respect my privacy and not peep on me like some perv! Can you please leave?"');
    scene.text('"Fine!" he scoffs. "Whatever, bitch…"');
    scene.text('He storms out of the room, leaving you to finish your shower in peace.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You quickly dress yourself in case he comes back, but he never does.');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['pav_pool_lifeguard', 'staff_locker_room'] },
    ]);
  } },
    ]);
  } },
        { label: 'Maybe some other time', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('"Maybe some other time, Vadim. I\'m not really in the mood and I have to be somewhere else soon," you reply with a smile.');
    scene.text('He returns the smile. "Sure thing, beautiful. I\'ll be seeing you around."');
    scene.text('He winks at you before walking away, leaving you to finish your shower in peace before you get dressed.');
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
        { label: 'Have some fun', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You smile and remove your hands from your breasts, giving him a good look before you turn and wiggle your ass, inviting him to join you.');
    scene.text('He grins happily and quickly removes his trunks before joining you in the shower.');
    scene.actions([
      { label: 'Continue', goto: ['pav_pool_lifeguard', 'vadim_shower_sex'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterShiftPart1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
  scene.text('The pool is crowded with all kinds of people and you can barely hear yourself think as you head to the lifeguard chair.');
  if (((s as any).pav_swimpool ?? 0)?.['first_lifeguard_shift'] !== 0) {
    scene.text('You spot Vadim patrolling around the edge of the pool as you take your place atop the raised chair.');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('His gaze lingers on you for quite some time as he walks past you.');
    }
    scene.actions([
      { label: 'Start your shift', goto: ['pav_pool_lifeguard', 'shift_part11'] },
    ]);
  } else {
    scene.text('Vadim is waiting for you as you approach.');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Hey there, beautiful," he says with a smile. "Maria said I was to show you the ropes, so get up on the chair and let\'s get started."');
      scene.text('You nod and climb up into the chair as Vadim watches.');
      if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
        scene.text('You can sense him checking out your ass as you do and turn around to see him smiling up at you as you take a seat in the chair.');
      }
      scene.text('"Let\'s get started then, beautiful."');
    } else {
      scene.text('"Hey," he replies without much enthusiasm. "Maria said I had to show you what to do, so get up in the chair."');
      scene.text('You do as he says and climb up into the chair. When you look back down at Vadim, he isn\'t paying attention to you. You follow his gaze and realize that he\'s checking out a rather attractive looking girl playing in the pool with her friends.');
      scene.text('"Uhhh… Vadim?" you say, grabbing his attention.');
      scene.text('"What? Oh right. Let\'s get this over with then."');
    }
    scene.actions([
      { label: 'Learn the ropes', handler: (st: GameState) => {
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['first_lifeguard_shift'] = 1;
    qspCall(st, 'stat', '');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('Vadim gives you a rundown on what you\'re expected to do, mainly keeping an eye on the swimmers and making sure they follow the rules. You get the sense that Vadim is more interested in checking you out than explaining things to you, though.');
      scene.text('"Basically, just make sure nobody is a dick and that nobody drowns. You can do that while sitting up here looking all pretty for everyone," he says with a wink.');
      if (((st as any).tits ?? 0) >= 5) {
        scene.text('You catch him sneaking a glance at your breasts straining against the tight fabric of your swimsuit.');
      }
      scene.text('"You get a half hour lunch at 3, but until then you\'re stuck up here babysitting. I\'ll be doing the rounds making sure everyone behaves in and out of the pool, so just me a shout if you need anything or you just want to chat…"');
      scene.text('He grins and gives you a knowing wink before heading off, leaving you to supervise the crowded pool.');
    } else {
      scene.text('Vadim gives you a rundown on what you\'re expected to do, mainly keeping an eye on the swimmers and making sure they follow the rules. However, he looks and sounds rather bored and like he wants to be anywhere but here.');
      scene.text('"Basically, just make sure nobody is a dick and that nobody drowns. Simple, right? You get a half hour lunch at 3, but until then you\'re stuck up here babysitting. I\'ll be doing the rounds making sure everyone behaves in and out of the pool, so just me a shout if you need anything."');
      scene.text('He walks away before you can reply, leaving you to supervise the crowded pool.');
    }
    scene.actions([
      { label: 'Start your shift', goto: ['pav_pool_lifeguard', 'shift_part11'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShiftPart11(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
  scene.text('From atop your raised vantage point, you look down into the pool at the crowds of people who are either swimming or playing games in the water.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.img('images/locations/pavlovsk/community/swim/kidsplash.jpg');
      scene.text('You watch a kid splashing water in the corner of the pool. Since he isn\'t bothering anyone, you leave him be and return your focus to other parts of the pool.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/community/swim/kidsplashgroup.jpg');
        scene.text('You see a group of boys splashing water at each other. While they\'re just having fun, they\'re also hitting other nearby swimmers.');
        scene.actions([
          { label: 'Blow your whistle', handler: (st: GameState) => {
    scene.text('You blow your whistle and get their attention before shaking your head, silently telling them off. The boys just scowl at you before swimming off to another part of the pool.');
    scene.actions([
      { label: 'Go for your break', goto: ['pav_pool_lifeguard', 'break'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).temp_rand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/community/swim/diving.jpg');
          scene.text('You watch a girl diving into the pool. She has an elegant form and gracefully slides into the pool with barely a ripple.');
        } else {
          if (((st as any).temp_rand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/community/swim/exitloosebra.jpg');
            scene.text('You watch a girl exiting the pool who is unaware that the string of her bikini top has loosened. As she pulls her hair back, her top suddenly falls off, exposing her breasts to anyone who\'s watching. She gets a few whistles and cheers from both men and boys in the pool.');
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              scene.text('She blushes as she quickly grabs her top and fixes it back in place before retying the knot on the string. She then hurries away as you hear some of the boys complaining.');
            } else {
              scene.text('She doesn\'t seem to mind about her wardrobe malfunction and lets everyone watch as she leaves her exposed breasts on show for a few seconds before she slowly fixes her bikini top. She winks at everyone in the pool before walking away, much to the joy of some of the boys.');
            }
            qspCall(st, 'arousal_oneline', 'voyeur', (-1));
            qspCall(st, 'stat', '');
          } else {
            if (((st as any).temp_rand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/community/swim/exitloosepanties.jpg');
              scene.text('You watch a girl exiting the pool who is unaware that her bikini bottom has loosened. As she pulls herself out of the water, her bottom slides down and exposes her ass to anyone watching. She gets a few whistles and cheers from both men and boys in the pool.');
              if ((!(Math.floor(Math.random() * 2) + 0))) {
                scene.text('She blushes as she quickly climbs out of the pool and grabs her bottom before pulling it up. She then hurries away as you hear some of the boys complaining.');
              } else {
                scene.text('She doesn\'t seem to mind about her wardrobe malfunction and lets everyone watch as she leaves her exposed ass on show while climbing out of the water. She then slowly pulls her bikini bottom back up and winks at everyone in the pool before walking away, much to the joy of some of the boys.');
              }
              qspCall(st, 'arousal_oneline', 'voyeur', (-1));
              qspCall(st, 'stat', '');
            } else {
              if (((st as any).temp_rand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/community/swim/kisswater.jpg');
                scene.text('You catch a glimpse of a couple making out at the edge of the pool, gaining a small audience who either watch in intrigue or disgust. They soon break their kiss and leave the pool. You have no doubt in your mind about what they\'re running off to do.');
              } else {
                if (((st as any).temp_rand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/community/swim/exerciseswim.jpg');
                  scene.text('There\'s nothing interesting happening in the pool right now, so you just watch a woman trying to swim laps in the crowded pool.');
                } else {
                  if (((st as any).temp_rand ?? 0) === 7) {
                    scene.img('images/locations/pavlovsk/community/swim/ladder1.jpg');
                    scene.text('From your elevated vantage point, you get a good view at a girl in a bikini as she climbs down the ladder into the pool to join her friends.');
                  } else {
                    if (((st as any).temp_rand ?? 0) === 8) {
                      scene.img('images/locations/pavlovsk/community/swim/sitwater.jpg');
                      scene.text('You spot a woman sitting at the edge of the pool with her feet in the water, watching everyone else in the pool. You wonder if she\'s a parent watching her kid or is just someone choosing to relax away from the bustle of the busy pool.');
                    } else {
                      if (((st as any).temp_rand ?? 0) === 9) {
                        scene.img('images/locations/pavlovsk/community/swim/bratkid.jpg');
                        scene.text('As you watch everyone swimming in the pool, you suddenly see and hear an annoying kid running along the edge of the pool.');
                        scene.actions([
                          { label: 'Blow your whistle', handler: (st: GameState) => {
    scene.text('You blow your whistle and get his attention, causing him to stop in his tracks.');
    scene.text('"No running in the pool area!" you shout from your chair.');
    scene.text('He scowls up at you. "Whatever! I wasn\'t even doing anything wrong!"');
    scene.actions([
      { label: 'Tell him off', handler: (st: GameState) => {
    scene.text('"Follow the rules and behave or I\'ll kick you out!" you retort.');
    scene.text('Clearly annoyed, he makes a face at you before climbing into the water and joining his friends, who mock him for getting told off by a girl.');
    scene.actions([
      { label: 'Go for your break', goto: ['pav_pool_lifeguard', 'break'] },
    ]);
  } },
      { label: 'Let him go', handler: (st: GameState) => {
    scene.text('"Don\'t do it again," you tell him before sending him on his way.');
    scene.text('He just ignores you and immediately does a cannonball into the pool, splashing multiple people as his friends laugh at his antics.');
    scene.actions([
      { label: 'Go for your break', goto: ['pav_pool_lifeguard', 'break'] },
    ]);
  } },
    ]);
  } },
                        ]);
                      } else {
                        if (((st as any).temp_rand ?? 0) === 10  &&  ((st as any).pcs_hotcat ?? 0) >= 6) {
                          scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                          scene.text('As you monitor the pool from your vantage point, you suddenly catch sight of a boy who looks like he\'s struggling to stay afloat.');
                          scene.actions([
                            { label: 'Dive into the water', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/exerciseswim.jpg');
    scene.text('Remembering your training, you dive into the water and swim over to the boy. Taking hold of him and pulling him close, you swim back over into the shallows and prop him up against the edge of the pool.');
    scene.text('"Are you okay?!" you ask, your heart racing.');
    if (((st as any).tits ?? 0) >= 5) {
      scene.text('"Fine now that I got to motorboat those bad boys! They make great life rafts and an even better cushion!" he grins.');
      scene.text('Glancing around, you see his friends snickering not far away and realize this was a ploy.');
      scene.text('"Of course this is all a joke to you!" you say, instinctively adjusting your swimsuit as it strains against your breasts. "What if your little game distracted me from helping someone who was actually drowning? What if I ignore you next time when you\'re actually in distress? Don\'t let me catch you doing something like this again!"');
      scene.text('"Calm down! It was just a joke!" he scowls and takes one last peek at your breasts before he and his friends swim away.');
      scene.text('Annoyed, you climb out of the pool and return to your chair, being extra vigilant for anything amiss.');
    } else {
      scene.text('"Wow, a pretty girl actually saved my life!" he grins.');
      scene.text('Hearing some snickering, you glance around and spot his friends watching you, betraying the boy\'s true intentions.');
      scene.text('"Really?" you scowl. "You wasted my time and possibly distracted me from an actual emergency just so you could show off in front of your friends? What if I ignore you when you actually need my help because I think you\'re messing around again? Don\'t let me catch you doing something like this again!"');
      scene.text('"Calm down, sweet cheeks. It was just a joke!" he scowls back before he and his friends swim away.');
      scene.text('Annoyed, you climb out of the pool and return to your chair, being extra vigilant for anything amiss.');
    }
    scene.actions([
      { label: 'Go for your break', goto: ['pav_pool_lifeguard', 'break'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((st as any).temp_rand ?? 0) === 11) {
                            scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                            scene.text('As you scan the pool for anything amiss, you spot Vadim flirting with a girl in a skimpy bikini that leaves very little to the imagination.');
                            scene.text('You just shake your head before returning your focus to the pool.');
                          } else {
                            scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                            scene.text('Despite the large crowds in the pool, nothing interesting happens and you just watch everyone enjoying themselves in the water.');
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
    }
    scene.actions([
      { label: 'Go for your break', goto: ['pav_pool_lifeguard', 'break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShiftPart2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
  scene.text('You return to the pool area, which is just as noisy and crowded as when you left it. You climb back up into the chair and take a seat to resume your duties.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your shift', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('From atop your raised vantage point, you look down into the pool at the crowds of people who are either swimming or playing games in the water.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.img('images/locations/pavlovsk/community/swim/kidsplash.jpg');
      scene.text('You watch a kid splashing water in the corner of the pool. Since he isn\'t bothering anyone, you leave him be and return your focus to other parts of the pool.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/community/swim/kidsplashgroup.jpg');
        scene.text('You see a group of boys splashing water at each other. While they\'re just having fun, they\'re also hitting other nearby swimmers.');
        scene.actions([
          { label: 'Blow your whistle', handler: (st: GameState) => {
    scene.text('You blow your whistle and get their attention before shaking your head, silently telling them off. The boys just scowl at you before swimming off to another part of the pool.');
    scene.actions([
      { label: 'End your shift', goto: ['pav_pool_lifeguard', 'end_shift'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).temp_rand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/community/swim/diving.jpg');
          scene.text('You watch a girl diving into the pool. She has an elegant form and gracefully slides into the pool with barely a ripple.');
        } else {
          if (((st as any).temp_rand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/community/swim/exitloosebra.jpg');
            scene.text('You watch a girl exiting the pool who is unaware that the string of her bikini top has loosened. As she pulls her hair back, her top suddenly falls off, exposing her breasts to anyone who\'s watching. She gets a few whistles and cheers from both men and boys in the pool.');
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              scene.text('She blushes as she quickly grabs her top and fixes it back in place before retying the knot on the string. She then hurries away as you hear some of the boys complaining.');
            } else {
              scene.text('She doesn\'t seem to mind about her wardrobe malfunction and lets everyone watch as she leaves her exposed breasts on show for a few seconds before she slowly fixes her bikini top. She winks at everyone in the pool before walking away, much to the joy of some of the boys.');
            }
            qspCall(st, 'arousal_oneline', 'voyeur', (-1));
            qspCall(st, 'stat', '');
          } else {
            if (((st as any).temp_rand ?? 0) === 4) {
              scene.img('images/locations/pavlovsk/community/swim/exitloosepanties.jpg');
              scene.text('You watch a girl exiting the pool who is unaware that her bikini bottom has loosened. As she pulls herself out of the water, her bottom slides down and exposes her ass to anyone watching. She gets a few whistles and cheers from both men and boys in the pool.');
              if ((!(Math.floor(Math.random() * 2) + 0))) {
                scene.text('She blushes as she quickly climbs out of the pool and grabs her bottom before pulling it up. She then hurries away as you hear some of the boys complaining.');
              } else {
                scene.text('She doesn\'t seem to mind about her wardrobe malfunction and lets everyone watch as she leaves her exposed ass on show while climbing out of the water. She then slowly pulls her bikini bottom back up and winks at everyone in the pool before walking away, much to the joy of some of the boys.');
              }
              qspCall(st, 'arousal_oneline', 'voyeur', (-1));
              qspCall(st, 'stat', '');
            } else {
              if (((st as any).temp_rand ?? 0) === 5) {
                scene.img('images/locations/pavlovsk/community/swim/kisswater.jpg');
                scene.text('You catch a glimpse of a couple making out at the edge of the pool, gaining a small audience who either watch in intrigue or disgust. They soon break their kiss and leave the pool. You have no doubt in your mind about what they\'re running off to do.');
              } else {
                if (((st as any).temp_rand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/community/swim/exerciseswim.jpg');
                  scene.text('There\'s nothing interesting happening in the pool right now, so you just watch a woman trying to swim laps in the crowded pool.');
                } else {
                  if (((st as any).temp_rand ?? 0) === 7) {
                    scene.img('images/locations/pavlovsk/community/swim/ladder1.jpg');
                    scene.text('From your elevated vantage point, you get a good view at a girl in a bikini as she climbs down the ladder into the pool to join her friends.');
                  } else {
                    if (((st as any).temp_rand ?? 0) === 8) {
                      scene.img('images/locations/pavlovsk/community/swim/sitwater.jpg');
                      scene.text('You spot a woman sitting at the edge of the pool with her feet in the water, watching everyone else in the pool. You wonder if she\'s a parent watching her kid or is just someone choosing to relax away from the bustle of the busy pool.');
                    } else {
                      if (((st as any).temp_rand ?? 0) === 9) {
                        scene.img('images/locations/pavlovsk/community/swim/bratkid.jpg');
                        scene.text('As you watch everyone swimming in the pool, you suddenly see and hear an annoying kid running along the edge of the pool.');
                        scene.actions([
                          { label: 'Blow your whistle', handler: (st: GameState) => {
    scene.text('You blow your whistle and get his attention, causing him to stop in his tracks.');
    scene.text('"No running in the pool area!" you shout from your chair.');
    scene.text('He scowls up at you. "Whatever! I wasn\'t even doing anything wrong!"');
    scene.actions([
      { label: 'Tell him off', handler: (st: GameState) => {
    scene.text('"Follow the rules and behave or I\'ll kick you out!" you retort.');
    scene.text('Clearly annoyed, he makes a face at you before climbing into the water and joining his friends, who mock him for getting told off by a girl.');
    scene.actions([
      { label: 'End your shift', goto: ['pav_pool_lifeguard', 'end_shift'] },
    ]);
  } },
      { label: 'Let him go', handler: (st: GameState) => {
    scene.text('"Don\'t do it again," you tell him before sending him on his way.');
    scene.text('He just ignores you and immediately does a cannonball into the pool, splashing multiple people as his friends laugh at his antics.');
    scene.actions([
      { label: 'End your shift', goto: ['pav_pool_lifeguard', 'end_shift'] },
    ]);
  } },
    ]);
  } },
                        ]);
                      } else {
                        if (((st as any).temp_rand ?? 0) === 10  &&  ((st as any).pcs_hotcat ?? 0) >= 6) {
                          scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                          scene.text('As you monitor the crowded pool from your vantage point, you suddenly catch sight of a boy who looks like he\'s struggling to stay afloat.');
                          scene.actions([
                            { label: 'Dive into the water', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/swim/exerciseswim.jpg');
    scene.text('Remembering your training, you dive into the water and swim over to the boy. Taking hold of him and pulling him close, you swim back over into the shallows and prop him up against the edge of the pool.');
    scene.text('"Are you okay?!" you ask, your heart racing.');
    if (((st as any).tits ?? 0) >= 5) {
      scene.text('"Fine now that I got to motorboat those bad boys! They make great life rafts and an even better cushion!" he grins.');
      scene.text('Glancing around, you see his friends snickering not far away and realize this was a ploy.');
      scene.text('"Of course this is all a joke to you!" you say, instinctively adjusting your swimsuit as it strains against your breasts. "What if your little game distracted me from helping someone who was actually drowning? What if I ignore you next time when you\'re actually in distress? Don\'t let me catch you doing something like this again!"');
      scene.text('"Calm down! It was just a joke!" he scowls and takes one last peek at your breasts before he and his friends swim away.');
      scene.text('Annoyed, you climb out of the pool and return to your chair, being extra vigilant for anything amiss.');
    } else {
      scene.text('"Wow, a pretty girl actually saved my life!" he grins.');
      scene.text('Hearing some snickering, you glance around and spot his friends watching you, betraying the boy\'s true intentions.');
      scene.text('"Really?" you scowl. "You wasted my time and possibly distracted me from an actual emergency just so you could show off in front of your friends? What if I ignore you when you actually need my help because I think you\'re messing around again? Don\'t let me catch you doing something like this again!"');
      scene.text('"Calm down, sweet cheeks. It was just a joke!" he scowls back before he and his friends swim away.');
      scene.text('Annoyed, you climb out of the pool and return to your chair, being extra vigilant for anything amiss.');
    }
    scene.actions([
      { label: 'End your shift', goto: ['pav_pool_lifeguard', 'end_shift'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((st as any).temp_rand ?? 0) === 11) {
                            scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                            scene.text('As you scan the pool for anything amiss, you spot Vadim flirting with a girl in a skimpy bikini that leaves very little to the imagination.');
                            scene.text('You just shake your head before returning your focus to the pool.');
                          } else {
                            scene.img('images/locations/pavlovsk/community/swim/pool3.jpg');
                            scene.text('Despite the large crowds in the pool, nothing interesting happens and you just watch everyone enjoying themselves in the water.');
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
    }
    scene.actions([
      { label: 'End your shift', goto: ['pav_pool_lifeguard', 'end_shift'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBreak(s: GameState, scene: SceneBuilder): void {
  (s as any).hour = 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/swim/cafeteria2.jpg');
  scene.text('The clock soon reaches 3 and you climb down from the chair to take your break, heading to the cafeteria to grab something to eat.');
  scene.text('When you arrive, your options are limited to the snacks on display, so you grab one and take a seat.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'food', 'small_meal_stats');
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/food.jpg');
    scene.text('You enjoy a small tasty, but somewhat fattening, snack while watching the people around you do the same thing.');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/cafeteria2.jpg');
    scene.text('You decide to grab a drink to finish things off. The question is… Which one?');
    scene.actions([
      { label: 'Grab a juice', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'beverage', 'juice_stats');
    qspCall(st, 'stat', '');
    scene.img('images/shared/drinks/juice.jpg');
    scene.text('You grab a refreshing juice and use it to wash down your snack before relaxing in the cafeteria until it\'s time for you to return to the pool.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
      { label: 'Grab a coffee', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'beverage', 'coffee_stats');
    qspCall(st, 'stat', '');
    scene.img('images/shared/drinks/coffee.jpg');
    scene.text('You enjoy a hot coffee while watching the crowds passing through the cafeteria. It\'s soon time for you to return to work.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
      { label: 'Grab a tea', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'beverage', 'tea_stats');
    qspCall(st, 'stat', '');
    scene.img('images/shared/drinks/tea.jpg');
    scene.text('You enjoy a relaxing tea while watching the crowds passing through the cafeteria. It\'s soon time for you to return to work.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
      { label: 'Grab an energy drink', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'beverage', 'energy_drink_stats');
    qspCall(st, 'stat', '');
    scene.img('images/shared/drinks/energy_drink.jpg');
    scene.text('You grab an energy drink and use it to wash down your snack before relaxing in the cafeteria until it\'s time for you to return to the pool.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
      { label: 'Have some water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'beverage', 'water_stats');
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/brothel/barorderwater.jpg');
    scene.text('You enjoy a glass of water while watching the crowds passing through the cafeteria. It\'s soon time for you to return to the pool.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Just relax', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/swim/cafeteria2.jpg');
    scene.text('You decide to just relax in the cafeteria, watching the crowds passing through until it\'s time for you to return to the pool.');
    scene.actions([
      { label: 'Get back to work', goto: ['pav_pool_lifeguard', 'shift_part2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVadimShowerSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A294');
  qspCall(s, 'stat', '');
  if (((s as any).pav_swimpool ?? 0)?.['vadim_sex'] === 0) {
    qspCall(s, 'arousal', 'massage', 3);
    qspCall(s, 'arousal', 'clit_finger', (-3));
    qspCall(s, 'arousal', 'hj', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/grope1.mp4');
    scene.text('You and Vadim embrace each other under the shower and he starts eagerly groping at your breasts before you guide his hand down to your clit. He smiles and starts teasing you as you in turn reach down and start jerking his cock in your hand.');
    // TODO-QSP: dynamic text: To your disappointment, it doesn''t grow that much bigger as he gets hard and yo...
    scene.text(`To your disappointment, it doesn't grow that much bigger as he gets hard and you glance down to see that he's sporting a rather average ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 3);
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_sex'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/bj3.mp4');
    scene.text('You spin around and get down on your knees, looking up to see him smiling down at you.');
    scene.text('"I don\'t have all day! Hurry up and suck my dick!"');
    scene.text('You just frown before taking his cock into your mouth, causing him to groan loudly as you start sucking.');
    scene.text('After a few minutes, you take his entire length into your mouth without much difficulty, causing him to grunt as you deepthroat him before popping his dick out of your mouth and licking the shaft a few times.');
    scene.text('Vadim scans the room before looking down at you. "We don\'t have much time. Hurry up and bend over so I can fuck your pussy!"');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/doggy4.mp4');
    scene.text('You nod and quickly get up off your knees before spinning around. Spacing your legs apart, you lean against the shower wall before pushing your ass out, presenting your pussy to Vadim.');
    scene.text('You feel him rubbing the tip of his cock against your slit before he presses it against your hole and it slowly slides inside you, causing him to moan softly.');
    scene.text('"Warm and wet. Just the way I like it," he laughs.');
    scene.text('He starts thrusting, but you can barely feel it inside you as his hips slap against your ass, telling you that this is all he\'s got.');
    scene.actions([
      { label: 'Fake it', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.text('You don\'t want to feel like you\'re insulting him by being silent though, so you decide to fake it.');
    scene.text('"Ugghh! Mmmhhmm! Your cock feels so good in my pussy!" you cry out with fake moans of pleasure as the sound of his hips slapping against your ass are muffled by the sound of running water.');
    scene.text('He seems oblivious to your lack of enjoyment and just keeps pounding you as hard as he can with his small cock, forcing you to continue faking it as much as he\'s enjoying it.');
    scene.text('Despite his small size, he seems to have an endless amount of stamina.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'kiss', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/leg_up2.mp4');
    scene.text('After a few minutes, he suddenly pulls out and spins you around before pushing you up against the shower wall.');
    scene.text('Lifting your leg up, he quickly slides his cock back inside you and resumes fucking you, eagerly thrusting his small cock into your pussy, which is eager for more than he can provide.');
    scene.text('He\'s once again oblivious to your lack of pleasure and passionately starts kissing you.');
    scene.text('After a few more minutes of this, he finally starts grunting. "Fuck, I\'m gonna cum!');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', '', '', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/creampie1.mp4');
    scene.text('You\'re too bored to really care anymore. "You can finish inside me," you shrug.');
    scene.text('He grins at you in surprise, but keeps eagerly fucking you until he grunts loudly and you feel his cum spurting into your pussy.');
    scene.text('Once he finishes and pulls out of you, you feel his cum trickle out of your pussy and run down the inside of your leg.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'face', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/facial1.jpg');
    scene.text('"Pull out!" you reply. "I don\'t want your cum inside me!"');
    scene.text('He nods and quickly pulls out of you before you get down on your knees in front of him. A few seconds later, spurts of cum splatter across your face as Vadim groans loudly.');
    scene.text('Once he\'s finished, you open your eyes and look up to see him grinning down at you as he sighs in satisfaction.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Bored', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.text('His small cock isn\'t giving you much pleasure and you quickly grow bored as you lean against the shower wall, hoping he\'ll finish soon.');
    scene.text('Despite his small size, he has plenty of stamina and keeps fucking you for what feels like an eternity before he suddenly pulls out.');
    scene.text('Thinking he\'s finally done, you eagerly turn around to get on your knees, but find his rock hard cock still standing stiffly to attention.');
    scene.text('He pushes you up against the shower wall and lifts your leg up before sliding his cock back into your pussy.');
    scene.text('He\'s once again oblivious to your lack of pleasure as he eagerly thrusts his small cock into your pussy, which is eager for more than he can provide.');
    scene.text('After a few more minutes of this, he finally starts grunting. "Fuck, I\'m gonna cum!');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', '', '', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/creampie1.mp4');
    scene.text('You\'re too bored to really care anymore. "You can finish inside me," you shrug.');
    scene.text('He grins at you in surprise, but keeps eagerly fucking you until he grunts loudly and you feel his cum spurting into your pussy.');
    scene.text('Once he finishes and pulls out of you, you feel his cum trickle out of your pussy and run down the inside of your leg.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'stomach', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
    scene.text('"Pull out then!" you reply. "I don\'t want your cum inside me!"');
    scene.text('He nods and quickly pulls out of you before you grab his dick and start jerking it. A few seconds later, spurts of cum splatter across your stomach as Vadim groans loudly.');
    scene.text('Once he\'s finished, you glance up and see him grinning at you as he sighs in satisfaction.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck my ass instead', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/shower9.mp4');
    scene.text('"How about you fuck my ass instead?" you ask with a flirty smile.');
    scene.text('He looks surprised. "Oh. Uh… I\'ve never fucked a girl in the ass before."');
    scene.text('"There\'s a first time for everything," you reply as you space your legs apart and bend over before pushing your ass out and spreading your cheeks, exposing your asshole.');
    // TODO-QSP: dynamic text: You feel him fumble around a little before he presses the tip of his <<dick>>cm ...
    scene.text(`You feel him fumble around a little before he presses the tip of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your asshole and slowly pushes forward.`);
    scene.text('You wince a little in pain as your asshole stretches, but his cock is small enough for you to comfortably take it without lube.');
    scene.text('He starts slowly fucking you, but gradually picks up the pace as time goes on.');
    scene.text('"Fuck, I never knew an asshole could be so tight!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'anus', 'A294');
    qspCall(st, 'stat', '');
    scene.text('Vadim eagerly continues fucking your ass, but doesn\'t last very long. You soon feel his cock twitching as his cum spurts into your ass.');
    scene.text('When he pulls out, you feel his cum dribble out of your ass and run down the inside of your leg as you continue leaning against the shower wall.');
    scene.text('"That… That was amazing!" he pants. "I need to start fucking girls in the ass more often!"');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/bj4.mp4');
    // TODO-QSP: dynamic text: He doesn''t waste any time and immediately pushes you down onto your knees with ...
    scene.text(`He doesn't waste any time and immediately pushes you down onto your knees with his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock in your face.`);
    // TODO-QSP: dynamic text: You take it into your mouth and start sucking, occasionally popping it out of yo...
    scene.text(`You take it into your mouth and start sucking, occasionally popping it out of your mouth and licking the shaft. Vadim just groan loudly in pleasure as you suck on his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock.`);
    scene.text('After a few minutes, he pulls his dick out of your mouth and pulls you to your feet.');
    scene.text('"So which hole will it be today?" he asks with a knowing grin.');
    scene.actions([
      { label: 'Eat my pussy first', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/cuni2.mp4');
    scene.text('Knowing his small cock won\'t be giving you much pleasure, you decide that he should return the favour to make it up to you.');
    scene.text('"None. I want you to get down on your knees and eat my pussy," you smirk.');
    scene.text('He frowns, as if he\'s never been told to do this before, but reluctantly gets down on his knees and starts licking your pussy.');
    scene.text('You\'re not sure if he\'s entirely inexperienced at it or is just rushing, but his attempts at eating you out don\'t go as well as you hoped.');
    scene.text('"Slow down! It isn\'t a race," you tell him as you grab his head.');
    scene.text('While he does slow down, his lack of technique frustrates you and you soon give up.');
    scene.actions([
      { label: 'Fuck my pussy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 6);
    qspCall(st, 'arousal', 'clit_finger', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/doggy4.mp4');
    scene.text('"Hurry up and fuck my pussy!" you tell him, barely able to hide your frustration.');
    // TODO-QSP: dynamic text: You spin around and bend over for him as he eagerly rubs the tip of his <<dick>>...
    scene.text(`You spin around and bend over for him as he eagerly rubs the tip of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your slit before sliding it inside you.`);
    scene.text('As he starts thrusting, you reach down and start rubbing your clit to feel some kind of pleasure, which Vadim notices.');
    scene.text('"That\'s right, slut! Tease your pussy as I fuck it!"');
    scene.text('You just roll your eyes and soon grow bored, despite Vadim\'s eagerness and the arousal of teasing your clit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(st, 'cum_call', 'butt', 'A294');
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'stat', '');
      scene.text('Your thoughts are soon interrupted when Vadim starts thrusting even harder and starts grunting.');
      scene.text('"Are you about to cum already?" you ask, barely able to mask your disappointment.');
      scene.text('"Sorry!" he grunts. "I just remembered this smoking hot babe in a little bikini who was in the pool earlier!"');
      scene.text('He quickly pulls out of you and you feel spurts of cum splattering over your ass as he grunts loudly.');
      scene.text('Once he finishes, you glance back and see him sporting a toothy grin as he pants softly.');
      scene.actions([
        { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
      ]);
    } else {
      scene.text('His stamina seems to last forever before he starts grunting. "Fuck! Gonna cum!"');
      scene.text('You\'re just thankful that it\'s finally over.');
      scene.actions([
        { label: 'Creampie', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', '', 'A294');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/creampie1.mp4');
    scene.text('You\'re too bored to care. "You can cum inside me…" you mumble.');
    scene.text('A clearly happy Vadim fucks you even harder, the sound of his hips slapping against your ass audible even over the sound of the running water before you suddenly feel his warm cum spurting into your pussy.');
    scene.text('Once he finishes and pulls out of you, you feel his cum trickle out of your pussy and run down the inside of your leg as you continue leaning against the shower wall.');
    scene.text('"Fuck, that was amazing!" he pants as you just roll your eyes.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
        { label: 'Pull out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'stomach', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
    scene.text('"Pull out!" you reply. "I don\'t want your cum inside me!"');
    scene.text('He nods and quickly pulls out of you before you spin around and grab his dick. Jerking it in your hand, spurts of cum soon splatter across your stomach as Vadim groans loudly.');
    scene.text('Once he\'s finished, you glance up and see him grinning at you as he sighs in satisfaction.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
      { label: 'Fuck my ass', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'arousal', 'clit_finger', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/shower9.mp4');
    scene.text('"Hurry up and fuck my ass!" you tell him, barely able to hide your frustration.');
    // TODO-QSP: dynamic text: You spin around and bend over for him as he eagerly rubs the tip of his <<dick>>...
    scene.text(`You spin around and bend over for him as he eagerly rubs the tip of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your asshole before sliding it inside you.`);
    scene.text('As he starts thrusting, you reach down and start rubbing your clit to feel some kind of pleasure, which Vadim notices.');
    scene.text('"That\'s right, slut! Tease your pussy as I fuck your slutty ass!"');
    scene.text('You just roll your eyes and soon grow bored, despite Vadim\'s eagerness and the arousal of teasing your clit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'anus', 'A294');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('Barely a few minutes pass before Vadim starts fucking you even harder as he grunts loudly.');
    scene.text('"Are you about to cum already?" you ask, barely able to mask your disappointment.');
    scene.text('"Sorry!" he grunts. "Your ass is just so tight that I can\'t hold it any longer!"');
    scene.text('The words barely escape his lips before you feel his warm cum spurting into your ass as he moans softly.');
    scene.text('Once he finishes, he pulls out and you feel his cum dribble out of your ass and run down the inside of your leg as you continue leaning against the shower wall.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck my pussy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 6);
    qspCall(st, 'arousal', 'clit_finger', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/doggy4.mp4');
    scene.text('"Hurry up and fuck my pussy!" you tell him, barely able to hide your frustration.');
    // TODO-QSP: dynamic text: You spin around and bend over for him as he eagerly rubs the tip of his <<dick>>...
    scene.text(`You spin around and bend over for him as he eagerly rubs the tip of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your slit before sliding it inside you.`);
    scene.text('As he starts thrusting, you reach down and start rubbing your clit to feel some kind of pleasure, which Vadim notices.');
    scene.text('"That\'s right, slut! Tease your pussy as I fuck it!"');
    scene.text('You just roll your eyes and soon grow bored, despite Vadim\'s eagerness and the arousal of teasing your clit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(st, 'cum_call', 'butt', 'A294');
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'stat', '');
      scene.text('Your thoughts are soon interrupted when Vadim starts thrusting even harder and starts grunting.');
      scene.text('"Are you about to cum already?" you ask, barely able to mask your disappointment.');
      scene.text('"Sorry!" he grunts. "I just remembered this smoking hot babe in a little bikini who was in the pool earlier!"');
      scene.text('He quickly pulls out of you and you feel spurts of cum splattering over your ass as he grunts loudly.');
      scene.text('Once he finishes, you glance back and see him sporting a toothy grin as he pants softly.');
      scene.actions([
        { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
      ]);
    } else {
      scene.text('His stamina seems to last forever before he starts grunting. "Fuck! Gonna cum!"');
      scene.text('You\'re just thankful that it\'s finally over.');
      scene.actions([
        { label: 'Creampie', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', '', 'A294');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/creampie1.mp4');
    scene.text('You\'re too bored to care. "You can cum inside me…" you mumble.');
    scene.text('A clearly happy Vadim fucks you even harder, the sound of his hips slapping against your ass audible even over the sound of the running water before you suddenly feel his warm cum spurting into your pussy.');
    scene.text('Once he finishes and pulls out of you, you feel his cum trickle out of your pussy and run down the inside of your leg as you continue leaning against the shower wall.');
    scene.text('"Fuck, that was amazing!" he pants as you just roll your eyes.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
        { label: 'Pull out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'stomach', 'A294');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
    scene.text('"Pull out!" you reply. "I don\'t want your cum inside me!"');
    scene.text('He nods and quickly pulls out of you before you spin around and grab his dick. Jerking it in your hand, spurts of cum soon splatter across your stomach as Vadim groans loudly.');
    scene.text('Once he\'s finished, you glance up and see him grinning at you as he sighs in satisfaction.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Fuck my ass', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'arousal', 'clit_finger', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/shower9.mp4');
    scene.text('"Hurry up and fuck my ass!" you tell him, barely able to hide your frustration.');
    // TODO-QSP: dynamic text: You spin around and bend over for him as he eagerly rubs the tip of his <<dick>>...
    scene.text(`You spin around and bend over for him as he eagerly rubs the tip of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your asshole before sliding it inside you.`);
    scene.text('As he starts thrusting, you reach down and start rubbing your clit to feel some kind of pleasure, which Vadim notices.');
    scene.text('"That\'s right, slut! Tease your pussy as I fuck your slutty ass!"');
    scene.text('You just roll your eyes and soon grow bored despite Vadim\'s eagerness and the arousal of teasing your clit.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'anus', 'A294');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('Barely a few minutes pass before Vadim starts fucking you even harder as he grunts loudly.');
    scene.text('"Are you about to cum already?" you ask, barely able to mask your disappointment.');
    scene.text('"Sorry!" he grunts. "Your ass is just so tight that I can\'t hold it any longer!"');
    scene.text('The words barely escape his lips before you feel his warm cum spurting into your ass as he moans softly.');
    scene.text('Once he finishes, he pulls out and you feel his cum dribble out of your ass and run down the inside of your leg as you continue leaning against the shower wall.');
    scene.actions([
      { label: 'Finish up', goto: ['pav_pool_lifeguard', 'vadim_shower_postsex'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVadimShowerPostsex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/after2.mp4');
  scene.text('Vadim pants loudly as he runs his hands over your wet body. "That was pretty good, hot stuff. Fancy doing it again sometime?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('"Maybe," you shrug. "I\'ll see how I feel."');
    scene.text('"I look forward to it already!" he grins before he pulls his trunks back on and leaves the room.');
    scene.text('Alone again, you quickly wash up under the shower before grabbing a towel and heading to your locker to get dressed.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    scene.text('You shake your head and he looks surprised.');
    scene.text('"Oh? And why not?" he asks, clearly surprised at your answer, but trying to act smooth.');
    scene.actions([
      { label: 'Be polite', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_shower_reject'] = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('"I don\'t want to be rude, but you\'re not exactly… big…" you reply.');
    scene.text('He frowns. "So? You still fucked me, didn\'t you?"');
    scene.text('You blush a little. "Yes, but I… I didn\'t actually… enjoy it…"');
    scene.text('Oh…" he replies, looking more than a little crestfallen. "If that\'s how you feel, then I won\'t bother you again…"');
    scene.text('He grabs his trunks and puts them back on before leaving the room with his head hung low.');
    scene.text('Feeling a little guilty, you wash up under the shower before you grab a towel and head to your locker to get dressed. You hope this won\'t make your job awkward…');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
  } },
    ]);
  } },
      { label: 'Be blunt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).pav_swimpool = (st as any).pav_swimpool ?? {})['vadim_shower_reject'] = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
    scene.text('"Maybe because you have a tiny dick and suck at sex? I barely felt you inside me!"');
    scene.text('He recoils in shock. "What?! You fucking bitch! You still fucked me, didn\'t you?!"');
    scene.text('"And I wish I hadn\'t because it was some of the worst sex I\'ve ever had! Maybe I\'ll let all those pretty girls you like flirting with know all about your… little secret?"');
    scene.text('He looks furious. "Do that and you\'ll regret ever getting a job here, you fucking cunt!"');
    scene.text('He pulls his trunks back on and storms out of the room, leaving you in peace to clean up under the shower before you grab a towel and head to your locker to get dressed.');
    scene.text('You don\'t think you\'ll ever be seeing him in here again, but you get the sense that you should tread carefully when it comes to your job…');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore', 'lifeguard');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_pool_lifeguard', 'staff_locker_room');
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
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'training':
      enterTraining(s, scene);
      break;
    case 'training1':
      enterTraining1(s, scene);
      break;
    case 'training2':
      enterTraining2(s, scene);
      break;
    case 'staff_locker_room':
      enterStaffLockerRoom(s, scene);
      break;
    case 'mirror':
      enterMirror(s, scene);
      break;
    case 'start_shift':
      enterStartShift(s, scene);
      break;
    case 'end_shift':
      enterEndShift(s, scene);
      break;
    case 'shift_part1':
      enterShiftPart1(s, scene);
      break;
    case 'shift_part11':
      enterShiftPart11(s, scene);
      break;
    case 'shift_part2':
      enterShiftPart2(s, scene);
      break;
    case 'break':
      enterBreak(s, scene);
      break;
    case 'vadim_shower_sex':
      enterVadimShowerSex(s, scene);
      break;
    case 'vadim_shower_postsex':
      enterVadimShowerPostsex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_pool_lifeguard: LocationDef = {
  name: 'pav_pool_lifeguard',
  title: 'The chief lifeguard shows you the staff locker room, which i',
  region: 'pavlovsk',
  enter: enter,
};
