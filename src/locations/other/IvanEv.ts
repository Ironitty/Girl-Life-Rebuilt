import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIvanVitekFight1(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 3;
  (s as any).ivansportday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A3'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A3'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  if (((s as any).loc ?? 0) === 'gdksport') {
    scene.text('When you enter the sports center, Ivan sees you come in. Even though he\'s getting ready for a training session and is only wearing his boxing shorts, he comes over for a quick chat.');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>!" he grins, happy to see you. "Here to do some training?"
    scene.text(`"Hi ${((s as any).pcs_nickname || '')}!" he grins, happy to see you. "Here to do some training?"`);
    scene.text('You smile at him and nod. "Yeah, I am. What are you doing here?"');
    scene.text('He nods over at a hall. "I\'ve been training for a boxing match. It\'s coming up fast, and I\'m pretty excited about it!"');
    if ((!((s as any).kotovVSprohorov ?? 0))) {
      scene.text('He pauses for a second. "I\'m sparring with Vitek today. It\'s part of my preparation for the big match. You can come and watch if you\'d like?"');
      scene.actions([
        { label: 'That sounds like fun', handler: (st: GameState) => {
    (s as any).kotovVSprohorov = 1;
    qspCall(s, 'stat', '');
    scene.text('You follow Ivan into the hall where the local boxing club has their training sessions. It\'s impossible to miss the smell of stale sweat and leather, but in a way it seems oddly fitting for a venue like this.');
    scene.text('Several guys are hitting old punching bags, practicing their swings or working on speed bags. Others are practicing their punches in front of a mirror, studying their own patterns and looking for ways to improve. You\'re the only girl in the hall, for some reason.');
    scene.text('Vitek is already waiting in the ring, dressed in boxing shorts, gloves and a headgear.');
    // TODO-QSP: dynamic text: "So you decided to show up after all, huh?" he snarks at Ivan. "What's this? You...
    scene.text(`"So you decided to show up after all, huh?" he snarks at Ivan. "What's this? You planning to let ${((s as any).pcs_nickname || '')} fight for you?"`);
    scene.text('Ivan smirks at him and quickly puts on his headgear and gloves before getting in the ring. Most of the other guys come over to watch them spar.');
    scene.actions([
      { label: 'Watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('One thing you immediately notice is how different their builds are; Ivan is much taller than Vitek, but Vitek is much broader in the shoulders and looks far more muscular.');
    scene.text('The guys do the customary glove bump before the match before heading to their corners, receiving some last minute advice from the coach.');
    scene.text('When the bell rings, Vitek furiously takes swings at Ivan, without much effect. While his punches are quite powerful, Ivan manages to easily dodge them and dances around him, jabbing only once with his right arm. It\'s a very precise jab, and it hits Vitek straight across the jaw.');
    scene.text('When Vitek realizes his tactic isn\'t working, the roles reverse and he leaves the offensive to Ivan.');
    scene.text('For the remainder of the round, Ivan keeps pressuring Vitek. The latter\'s stamina is not quite as good as the former\'s, and towards the end of the round Vitek starts making mistakes. One swing in particular makes it past his defenses, and his head jerks to the side as Ivan gives him another direct hit on the jaw.');
    scene.text('At that point, the round is over and they go back to their corners, where Vitek gets an earful from the coach.');
    scene.text('"Damn it Viktor, what the hell are you doing?! You need to bob and weave, make him miss or block the hits better! And don\'t separate your arms so far! You\'re opening yourself up way too many times!"');
    scene.text('Ivan just has a sip of water. He still looks fresh, while Vitek is sweating profusely already.');
    scene.actions([
      { label: 'Round 2', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('The second round starts like the first one ended. Ivan is light on his feet and dances around Vitek, who tries to keep his cover intact while he waits for a chance to strike. Ivan gets in some light blows, but Vitek shrugs them off and moves in close for a combo.');
    scene.text('Ivan manages to block the blow to the head, but immediately after takes a devastating blow to the stomach. It nearly knocks the wind out of him, and for the next few seconds, he tries to create some distance between Vitek and him while he catches his breath.');
    scene.text('Vitek grins and keeps closing the gaps as fast as he can and getting a few more good punches in, including a rather fierce one to the face. You wince in sympathy for Ivan, but luckily for him, the round ends and the guys go to their corners.');
    scene.text('This time it\'s Ivan who gets the majority of the instructions, the coach scolding him while wiping the blood off his face.');
    scene.text('"You need to keep your distance, Ivan! Don\'t let him get close!"');
    scene.actions([
      { label: 'Round 3', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('In round 3, Ivan mostly focuses his energy on trying to dodge Vitek\'s assault, hoping Vitek will get tired before he does. Both take a few punches here and there, but once more it\'s not until close to the end of the round when Ivan suddenly finds an opening and lands a powerful hit onto Vitek\'s stomach.');
    scene.text('Vitek falls backwards and lands on his ass with a loud thud. Even the coach is impressed by that one, and lets out an appreciative whistle.');
    scene.text('"Great hit, Ivan! Are you okay to continue, Viktor?"');
    scene.text('Vitek gets back up and angrily glares at Ivan, but nods. "I\'m alright."');
    scene.text('The coach nods. "Very well. Carry on then."');
    scene.text('After that hit, Vitek is noticeably more quiet and tries to dodge and evade Ivan\'s blows more often, while Ivan tries to push his advantage and puts a lot of energy into trying to find an opening.');
    scene.text('When the third round ends, both are sweating and panting heavily. You find yourself appreciating their sweat covered bodies, feeling mildly turned on by the sight.');
    scene.actions([
      { label: 'Round 4', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('When the fourth round begins, Ivan is noticeably tired and not quite as agile. He\'s still very accurate though, and both guys land some decent hits.');
    scene.text('Ivan lets his guard down one time too many, however, and immediately gets punished by Vitek. After being punched in the stomach again, he falls to his knees clutching his abdomen.');
    scene.text('The coach sighs. "Keep those arms closer together and move your feet more, Ivan! You look like you\'re asleep!"');
    scene.text('Even though the fight goes on for another while, it\'s obvious that Ivan will lose if this carries on much longer. Vitek lands another powerful combination of punches, first hitting Ivan in the stomach to make him buckle over and then landing an uppercut on his chin to send him flying backwards.');
    scene.text('With Ivan on the ropes, Vitek rushes in to strike the final blow, only for the coach to end the sparring session.');
    scene.text('"Okay, that\'s enough for today. Get some rest and work on your defense, Ivan. You really need to cover your body better. That last round was very weak."');
    scene.text('Vitek scowls at the coach, clearly annoyed at the attention Ivan is receiving. "Did I do something wrong?"');
    scene.text('The coach just shrugs. "Whatever, Viktor. You know what you\'re doing."');
    scene.actions([
      { label: 'Ask the coach who won', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('"So who won?" you ask the coach.');
    scene.text('He looks at you with a puzzled expression on his face. "Won? You don\'t win in sparring, but if it were a real match, Ivan would have won. In boxing, the amount of hits you land are important for the scoring. It doesn\'t matter how powerful Viktor\'s strikes were, Ivan landed at least a dozen more."');
    scene.text('Vitek overhears your conversation and comes over, snarking at the coach. "You\'re kidding, right?! He was done for! If you hadn\'t ended the match when you did, he would\'ve gone down for sure!"');
    scene.text('The coach lets out an exasperated gasp. "This is not some back alley street brawl, Kotov! We\'re practicing a sport here, and that sport has rules. By those rules, you lost. You should learn to keep your cover up, then maybe you\'d do better."');
    scene.text('Vitek angrily takes off his gloves and throws them away before heading to the corner where the weights are.');
    scene.text('The coach sighs as he watches him walk away. "That boy is all muscle and no brains! Such a shame. He could\'ve been a good boxer with a better mindset."');
    scene.actions([
      { label: 'Can I try boxing?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('"This looks like fun. Can I come and train with you too?" you ask.');
    scene.text('He grins and waves his arm around the room. "Look around. Do you see any other girls here? Who would you face when you\'re sparring? Without sparring, there\'s no point in coming. You wouldn\'t learn anything."');
    scene.text('"Why can\'t I just spar with the guys?" you ask.');
    scene.text('Several of the guys who heard you laugh, and the coach can\'t help but hold back a smile either. "You saw that fight. Imagine what would happen if Viktor hit you that hard? You could be seriously injured! Sorry, but I can\'t allow that. There\'s a dancing school in the other hall that\'s more suitable for you."');
    scene.text('After that, he apologizes and says he has to get back to training. You nod, but still feel dejected that he won\'t even consider letting you train with them.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
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
  } },
      ]);
    }
    scene.actions([
      { label: 'Wish him luck and let him train', goto: ['gdksport', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTraining(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/ivan/training/train1.jpg');
  scene.text('You see Ivan near the punching bags, who turns to you when you get close.');
  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>!" he grins, happy to see you. "What are you doing here?"
  scene.text(`"Hi ${((s as any).pcs_nickname || '')}!" he grins, happy to see you. "What are you doing here?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and let him train', goto: ['gdksport', 'start'] },
    { label: 'Teach me to box', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train2.jpg');
    scene.text('You smile at him. "I was just wondering if you had some time to teach me some boxing moves?"');
    if ((!((s as any).PSport ?? 0))) {
      scene.text('He punches the heavy bag a few more times before he answers. "I told you I would, but you\'ll need to change into some workout clothes first. Do you have any?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train2.jpg');
    scene.text('You shake your head. "No, I don\'t have any athletic clothes. Can\'t I just train like this?"');
    scene.text('He shakes his head. "No, you won\'t be able to move right, and if we\'re going to do this, we\'re going to do it right. When you get some good athletic clothes, I\'ll train you then."');
    scene.text('With nothing more you can say, you just nod and leave him to finish training. You\'ll need to get some athletic clothes and ask him again some other night.');
    scene.actions([
      { label: 'Say goodbye and let him train', goto: ['gdksport', 'start'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train2.jpg');
    scene.text('You nod. "Yes."');
    scene.text('He smiles a little as he keeps hitting the bag. "Okay, then go change and I\'ll show you a few things."');
    scene.text('You head to the locker room and quickly change before returning. "Okay, I\'m ready now."');
    scene.text('He stops punching the bag and looks you over. "Alright then, let\'s get started."');
    scene.actions([
      { label: 'Get boxing lessons', goto: ['IvanEv', 'boxing_lessons'] },
    ]);
  } },
      ]);
    } else {
      scene.text('He punches the heavy bag a few more times before he answers. "I told you I would. You ready?"');
      scene.actions([
        { label: 'Get boxing lessons', goto: ['IvanEv', 'boxing_lessons'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBoxingLessons(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
  if (((s as any).ivanQW ?? 0)?.['boxing_lessons'] <= 3) {
    ((s as any).ivanQW = (s as any).ivanQW ?? {})['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
    qspCall(s, 'exercise', 'tier2', 30, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train3.jpg');
    scene.text('He finds a pair of boxing gloves that\'ll fit you, then helps you put them on. After that, he has you start punching the heavy bag while he gives you pointers on how you\'re swinging and standing, among other things.');
    scene.text('After a few minutes, he slips something on his hands. "These are called Focus Mitts. Punch these, <i>not</i> my face," he jokes, causing you to laugh.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier2', 30, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train4.jpg');
    scene.text('You spend a few minutes punching the focus mitts on Ivan\'s hands. "You\'re going to need to punch harder than that! Don\'t be afraid of hurting me. I can handle it."');
    scene.text('His eyes then move down your body. "Plant your feet wider apart. You\'ll lose your balance standing like that."');
    scene.text('You adjust your feet as instructed and Ivan nods when you punch a little harder. "Great. You\'ll be a pro in no time!"');
    scene.text('After about an hour of practicing, he looks at the time. "I should be heading out. Stop by again if you want to practice some more."');
    scene.text('You nod as you gather your stuff up before heading to the girls locker room to get cleaned up and changed. You might just take him up on the offer again.');
    scene.actions([
      { label: 'Go to the locker room', goto: ['IvanEv', 'locker_room'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).ivanQW ?? 0)?.['boxing_lessons'] < 8) {
      ((s as any).ivanQW = (s as any).ivanQW ?? {})['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
      qspCall(s, 'exercise', 'tier2', 30, 'stren', 'jab', 'punch', 'def');
      scene.img('images/characters/pavlovsk/school/boy/ivan/training/train3.jpg');
      scene.text('He finds a pair of boxing gloves that\'ll fit you, then helps you put them on. After that, he has you start punching the heavy bag while he gives you pointers on how you\'re swinging and standing, among other things.');
      scene.text('After a few minutes, he slips the focus mitts on his hands and you smile as you bump your glove covered hand against the focus mitts. "Let\'s get started."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train5.jpg');
    scene.text('You spend a few minutes punching the focus mitts on Ivan\'s hands. "You\'re getting better, but you still need to punch harder. If it\'ll help, think of someone you\'d like to punch instead."');
    scene.text('His eyes then move down your body. "Good form." You think about who you\'d like to punch, picturing their face on the focus mitts, and Ivan nods when you punch a little harder. "Great. You\'ll be a pro in no time!"');
    scene.text('After about an hour of practicing, he looks at the time. "I should be heading out. Stop by again if you want to practice some more."');
    scene.text('You nod as you gather your stuff up before heading to the girls locker room to get cleaned up and changed. You might just take him up on the offer again.');
    scene.actions([
      { label: 'Go to the locker room', goto: ['IvanEv', 'locker_room'] },
    ]);
  } },
      ]);
    } else {
      ((s as any).ivanQW = (s as any).ivanQW ?? {})['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
      qspCall(s, 'exercise', 'tier3', 30, 'stren', 'jab', 'punch', 'def');
      scene.img('images/characters/pavlovsk/school/boy/ivan/training/train3.jpg');
      scene.text('He finds a pair of boxing gloves that\'ll fit you, then helps you put them on. After that, he has you start punching the heavy bag while he gives you pointers on how you\'re swinging and standing, among other things.');
      scene.text('After a few minutes, he slips some boxing gloves on his hands and smiles at you. "We\'re going to spar today."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier3', 15, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train6.jpg');
    scene.text('You spend a few minutes sparring with Ivan. "Keep your hands up! Guard your face!"');
    scene.text('His eyes then move down your body. "Remember to plant your feet wider apart. You don\'t want to lose your balance!"');
    scene.text('You adjust your feet as instructed as the two of you keep sparring.');
    scene.actions([
      { label: 'Keep sparring', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier3', 15, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train7.jpg');
    scene.text('"That\'s it, work your way inside my reach. With shorter arms, you\'ll need to guard yourself until you\'re close enough to strike back."');
    scene.text('His eyes move down your body. "Try and be quick on your feet. Fast in to strike, then fast out."');
    scene.text('After about an hour of practicing, he looks at the time. "I should be heading out. Stop by again if you want to practice some more."');
    scene.text('You nod as you gather your stuff up before heading to the girls locker room to get cleaned up and changed. You might just take him up on the offer again.');
    scene.actions([
      { label: 'Go to the locker room', goto: ['IvanEv', 'locker_room'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLockerRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/shower/watch.jpg');
  scene.text('After your workout with Ivan, you head into the girls locker room and strip down.');
  scene.text('You notice there\'s no one else here at this time of the evening as you head into the showers and take a quick shower to get all the sweat cleaned off your body.');
  scene.text('Once you\'re done with the shower, you turn the water off and head back to the locker room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).temprand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).temprand ?? 0) === 1  &&  ((s as any).ivanQW ?? 0)?.['sex'] >= 1) {
      scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/surprise.jpg');
      scene.text('You head over to your locker and open it up. As you do, you hear a noise and turn to see Ivan standing half in, half out of the door, staring at your naked body.');
      qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Turn and let him see your naked body', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/full_frontal.jpg');
    scene.text('You turn around, but don\'t move to cover up, which gives him a great view of your naked body. You can see the bulge in his shorts getting bigger as his eyes roam all over your body.');
    scene.text('"Like what you see?" you ask coyly.');
    scene.text('He grins at your reaction. "Yes, yes I do. I thought we could have another kind of workout before going home..."');
    qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Tell him to go away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'dislike');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup_go.jpg');
    scene.text('You smile at him, knowing how badly he wants you. "Not tonight, Ivan. Maybe some other time."');
    scene.text('He sighs. "Alright... Maybe next time."');
    scene.text('He backs out and very slowly closes the door, drinking in your naked body the whole time until he finally closes the door.');
    qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to go away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'You want to fuck', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup_come.jpg');
    scene.text('You feel a thrill run through your body as your pussy starts to get a little wet; you want him to fuck you as badly as he wants to fuck you.');
    scene.text('You smile at him and curl your finger in a \'come here\' motion. "I want you to come over here and fuck my tight little ass."');
    qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for his next move', goto: ['IvanEv', 'locker_room_fuck'] },
    ]);
  } },
    ]);
  } },
        { label: 'Cover up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup.jpg');
    scene.text('You stand still for a moment, like a deer in headlights, then quickly cover up yourself with your hands.');
    scene.text('"What the fuck, Ivan?!" you yell in shock and surprise.');
    scene.text('He blushes slightly at your reaction. "Sorry! I just thought that, after a workout like that, that you might want to... Have a little fun..."');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Tell him to go away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'hate');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup_go.jpg');
    scene.text('You turn to try and cover up using your legs as well. "NO! Please leave!"');
    scene.text('You can\'t help but blush at the idea of showing off your body against your will.');
    scene.text('He blushes, clearly not having expected to receive such a strong negative reaction from you. "Sorry! I\'ll go."');
    scene.text('With that, he quickly leaves and closes the door behind him.');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to go away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'You want to fuck', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup_come.jpg');
    scene.text('Once the surprise has worn off, you have to admit you want to fuck him, maybe almost as much as he wants to fuck you.');
    scene.text('You smile at him and move your hand that was covering your pussy, letting him see it. You then lift your arm and curl your finger in a \'come here\' motion.');
    scene.text('"I want you to come over here and fuck my tight little ass," you tell him.');
    qspCall(s, 'arousal', 'flash', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for his next move', goto: ['IvanEv', 'locker_room_fuck'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspGoto(s, 'IvanEv', 'locker_room_dressed');
    }
  } },
  ]);
  scene.build();
}

function enterLockerRoomFuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/dick_surprise.jpg');
  scene.text('He grins as he pulls his shorts down and his already rock hard dick springs free. You can\'t help but stare at his dick, your mouth watering and your pussy getting wet just thinking about taking it inside you.');
  scene.text('"Why don\'t you come over and suck it instead of staring at it?" he laughs.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex1.jpg');
    scene.text('You walk over and sit on the bench next to him before taking his dick in your hand. You stroke his shaft a few times before you open your mouth and start licking and sucking on the head.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex2.jpg');
    scene.text('He places his hand on the back of your head and forces you to take more of his dick into your mouth.');
    scene.text('"Fuck, that feels good!" he moans before he pulls his dick out of your mouth and pulls you up. You understand what he\'s trying to do and quickly get on all fours on the bench.');
    scene.text('He pulls off his shirt and shorts before he straddles the bench just behind you.');
    scene.text('"Now that\'s a sight you\'ve just got to love!" he says, followed by a slap on your ass.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Present your ass to him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A3');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex3.jpg');
    scene.text('You feel him squirt some liquid onto your asshole before his fingers work it in. Once your ass is lubed up, you feel the tip of his dick press against your asshole.');
    // TODO-QSP: dynamic text: Moments later, he pushes the head of his <<dick>>cm <<$dick_girth>> cock inside ...
    scene.text(`Moments later, he pushes the head of his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock inside you before he slowly slides most of the length of his shaft up your ass.`);
    scene.text('He moans in pleasure and you groan slightly in pain while also moaning in pleasure. As he starts to slowly fuck your ass, your groans slowly turn into moans of pleasure.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex4.jpg');
    scene.text('As the sensation turns to all pleasure, you start moaning louder.');
    scene.text('"OH YES! Fuck, that feels good! Fuck me! Fuck me harder!" you cry out as you take his dick up your ass.');
    scene.text('Hearing this, he grabs hold of your hips and starts to really pound your ass, his balls slapping off the wet slit of your pussy with each powerful thrust.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your ass pounded', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex5.jpg');
    scene.text('His fingers dig into your hips as he hammers your ass hard and deep.');
    scene.text('"Yes... Yes... YES!!!" you cry out in pleasure as your breasts bounce violently with each thrust of his cock.');
    scene.text('He suddenly pulls out of you before he quickly moves up next to you. "Fuck, I\'m about to cum! Open your mouth!"');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/training_sex6.jpg');
    scene.text('You open your mouth just in time to feel the first spurt of cum hit the back of your throat, with the follow up shots filling your mouth.');
    scene.actions([
      { label: 'Spit', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('Once he\'s finished, you turn your head and spit his cum onto the floor.');
    scene.text('"Not a fan of the taste, I take it?" he chuckles as he shakes his head slightly. "I don\'t blame you. I can\'t imagine that it tastes good."');
    scene.text('"It\'s an acquired taste," you reply.');
    scene.text('He nods and chuckles. "I can imagine."');
    scene.text('He then starts getting dressed. As he does, you move back over to the locker you were using.');
    scene.text('Once he\'s done getting dressed, he smiles at you. "I should get going. Need to check in on my brother and sister and make sure they went to bed on time."');
    scene.text('He starts towards the door before turns his head. "Thanks for the fun. Maybe we can do it again some time?"');
    scene.text('With that, he walks out and leaves.');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub');
    qspCall(s, 'cum_call', 'mouth', 'A3', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
    ]);
  } },
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('Once he\'s done, you tilt your head back and swallow his cum before you stick your tongue out to show him that you have swallowed it all.');
    scene.text('"Fuck, that\'s hot," he chuckles as he shakes his head slightly. "I\'m almost ready to go again!"');
    scene.text('"Swallowing cum is such a turn on for me..." you smile coyly.');
    scene.text('He nods and chuckles. "Yeah, I know it was for me. Glad you enjoyed it too."');
    scene.text('He then starts getting dressed. As he does, you move back over to the locker you were using.');
    scene.text('Once he\'s done getting dressed, he smiles at you. "I should get going. Need to check in on my brother and sister and make sure they went to bed on time."');
    scene.text('He starts towards the door before turns his head. "Thanks for the fun. Maybe we can do it again some time?"');
    scene.text('With that, he walks out and leaves.');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A3', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
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
  } },
  ]);
  scene.build();
}

function enterIvanBored(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  scene.text('You look at Ivan and bite your lower lip before whispering in his ear. "I\'m bored..."');
  scene.text('He looks at you and smiles before taking you by the hand and leading you into one of the lesser used areas of the school. He stops at one of the boys restrooms, leaving you outside as he heads in to check if anyone is inside.');
  scene.text('A few seconds later, two younger boys are sent packing by Ivan. Once they round the corner, he pulls you into the bathroom.');
  qspCall(s, 'willpower', 'anal', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gschool_lessons', 'short_break');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go into the bathroom', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'boyStat', 'A3');
    ((s as any).ivanQW = (s as any).ivanQW ?? {})['sex'] = ((s as any).ivanQW['sex'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/bbivanbj.jpg');
    scene.text('Once inside, Ivan starts to passionately kiss you while pulling your clothes off. You return his kiss and help remove your clothes as he backs up and pulls you into one of the stalls.');
    // TODO-QSP: dynamic text: Once your clothes are removed, he gently pushes you down to your knees before he...
    scene.text(`Once your clothes are removed, he gently pushes you down to your knees before he pulls his pants down and sits on the toilet. He then guides your head to his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock and you part your lips and take it into your mouth.`);
    scene.text('You wrap your lips tightly around his shaft and start sucking while using your tongue to tease the head. He moans and grabs your hair, but restrains himself from forcing your head down.');
    scene.text('After a few minutes, he stands up and pulls you up with him before he quickly turns you around.');
    qspCall(s, 'arousal', 'kiss', 1, 'sub');
    qspCall(s, 'arousal', 'bj', 3, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal1.jpg');
    scene.text('You give him a good view at your naked ass.');
    scene.text('"Like what you see?" you ask teasingly.');
    if (((s as any).pcs_buttsize ?? 0) <= 21) {
      scene.text('"You have such a tight little ass! I can\'t wait to pound the fuck out of it," he says excitedly as he steps closer and gives your ass a little smack.');
    } else {
      scene.text('"Fuck yeah, you have a nice fuckable ass!" he says as he steps closer and gives your ass a firm smack, causing it to jiggle a little.');
    }
    qspCall(s, 'arousal', 'foreplay', 1, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal2.jpg');
    scene.text('He rubs the tip of his dick against your asshole before you feel a sharp pain as he pushes it in. With only your saliva as lubrication, it doesn\'t slide in very easily.');
    scene.text('You bite your lip and cry out a little in pain, so he relaxes a little and rubs your back as he takes it slow, giving your ass time to stretch and adjust.');
    // TODO-QSP: dynamic text: He then slowly thrusts his <<dick>>cm <<$dick_girth>> cock into your ass, pushin...
    scene.text(`He then slowly thrusts his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your ass, pushing it just a little deeper each time as you start rubbing your clit until the pleasure overcomes the pain enough for you to enjoy it.`);
    qspCall(s, 'arousal', 'anal', 2, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep getting fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal3.jpg');
    scene.text('As he fucks your ass, you spread your legs a little to give him easier access.');
    scene.text('"Oh yeah, that\'s it! Spread those legs for me! Your ass feels so good squeezing my dick!" he says as you grit your teeth at the pain, but the pain slowly fades and is quickly replaced by intense pleasure.');
    qspCall(s, 'arousal', 'anal', 2, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal4.jpg');
    scene.text('He gives your ass cheek a smack as he keeps fucking your ass, slowly working himself deeper with each thrust.');
    scene.text('"You\'re taking my cock like a champ!" he chuckles.');
    scene.text('"Oh yeah! It\'s starting... To feel... Good!" you moan in response as he smacks your ass again.');
    qspCall(s, 'arousal', 'anal', 2, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your ass hammered', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal5.jpg');
    scene.text('"Fuck, you have the tightest ass I\'ve ever fucked!" he says as he grabs your hips and drives himself balls deep into you, eliciting a squeak of pain from you, but the sensation of pain is quickly overwhelmed by pleasure.');
    scene.text('You place your hands against the stall wall to brace yourself as he holds onto your hips with both hands and starts jackhammering his cock balls deep into your ass before he holds himself there as you feel his cock twitching and spurt after spurt of warm cum starts filling your ass as he grunts loudly.');
    qspCall(s, 'arousal', 'anal', 2, 'sub', 'rough');
    qspCall(s, 'cum_call', 'anus', 'A3', 1);
    if (((s as any).agape ?? 0) < 3) {
      (s as any).agape = 3;
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal6.jpg');
    scene.text('Once he\'s done, he takes a shuddering breath and pulls out of you, his cum immediately dribbling of your gaping asshole.');
    scene.text('He gives your ass another smack and laughs. "I never get tired of that sight."');
    scene.text('You both start to get dressed, him faster than you since you\'re still unsteady on your feet. Once he\'s done, he helps you gather the rest of your clothes from where he tossed them.');
    scene.text('As you\'re seeing to the final adjustments, he goes to the bathroom door and looks out both ways down the hall before motioning you over just as the bell rings.');
    // TODO-QSP: dynamic text: As you're about to leave, he suddenly squeezes your ass. "That was great, <<$pcs...
    scene.text(`As you're about to leave, he suddenly squeezes your ass. "That was great, ${((s as any).pcs_nickname || '')}. Maybe we can do it again sometime, or maybe I'll come see you in the shower at the community center one night..."`);
    scene.text('He grins and winks at you before giving your ass a hard slap and rushing off to class. You only have time to nod in agreement, biting your lip as you watch him go. You then hurry to class yourself.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
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
  } },
  ]);
  scene.build();
}

function enterIvanBoredDisco(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).discobloc = (s as any).discobloc ?? {})['A3'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/disco1.jpg');
  scene.text('You look at Ivan and bite your lower lip before whispering in his ear. "I\'m bored..."');
  scene.text('He looks at you and smiles. "Okay, head to the old mens restroom they\'re remodeling. I\'ll make sure we won\'t be disturbed and meet you there."');
  scene.text('You walk out of the disco and head for the old mens restroom. It looks like the remodeling was started, but never finished. Budget cuts, no doubt.');
  scene.text('You suddenly hear footsteps behind you and turn to see Ivan following you in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait to see what he does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/disco2.jpg');
    // TODO-QSP: dynamic text: He walks up behind you and you feel his growing bulge pressed against your <<$pc...
    scene.text(`He walks up behind you and you feel his growing bulge pressed against your ${((s as any).pc_desc ?? 0)?.['butt'] ?? ''} ass as he slowly pulls your top aside to expose your ${((s as any).pc_desc ?? 0)?.['breast'] ?? ''} breasts.`);
    scene.text('He fondles them and kisses your neck before he whispers in your ear. "I want you to get down on your knees and suck my dick."');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A3');
    ((s as any).ivanQW = (s as any).ivanQW ?? {})['sex'] = ((s as any).ivanQW['sex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj1.jpg');
    scene.text('You turn around and slowly lower yourself to your knees before you unbutton his pants. Reaching inside, you pull his semi hard dick out and take it into your mouth.');
    scene.text('It very quickly grows to full size in your mouth as you suck it.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj2.jpg');
    scene.text('As he moans, you pick up the pace a little and start bobbing your head back and forth as you keep your lips wrapped tightly around the shaft, steadily sucking his dick.');
    // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>>, that feels so good!" he grunts.
    scene.text(`"Damn ${((s as any).pcs_nickname || '')}, that feels so good!" he grunts.`);
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj3.jpg');
    scene.text('You slowly take him deeper into your mouth, causing him to moan louder as you do.');
    scene.text('"Why don\'t you get on all fours?" he asks as he looks down at you. "I want to fuck that sweet little ass of yours now."');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Just suck him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj4.jpg');
    scene.text('You pull his dick out of your mouth and start stroking it. "I\'d rather just suck you off."');
    scene.text('You can tell he\'s a little disappointed, but he agrees. "If that\'s what you want, sure."');
    scene.text('He then reaches down and forces your head forward, his dick sliding back into your mouth as he starts moving his hips and fucking your mouth.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get throat fucked', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj5.jpg');
    scene.text('He places his hand on the back of your head and starts fucking your mouth deeper, his dick sliding down your throat as his balls slap against your chin.');
    scene.text('This causes you to gag and your eyes to water.');
    qspCall(s, 'arousal', 'bj', 2, 'sub', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get throat fucked some more', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discobj6.jpg');
    scene.text('He keeps roughly fucking your throat and you can tell he\'s getting close as he starts losing his composure.');
    scene.text('"Oh fuck..." he mutters as he suddenly picks up the pace.');
    qspCall(s, 'arousal', 'bj', 2, 'sub', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discocum1.jpg');
    scene.text('You suddenly feel the first spurt of warm, salty cum hit your throat, followed by several more as he fills your mouth.');
    scene.text('Once he finishes, he pulls his now softening dick out of your mouth and slips it back into his pants as you stick out your cum-covered tongue for him.');
    scene.actions([
      { label: 'Spit', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You then turn your head and spit his cum onto the floor.');
    scene.text('"Not a fan of the taste, I take it?" he chuckles as he shakes his head slightly. "I don\'t blame you,. I can\'t imagine that it tastes good."');
    scene.text('You stand up and fix your top so your breasts are no longer exposed. "It\'s an acquired taste."');
    scene.text('He nods and chuckles. "I can imagine. Anyway, I should get going. Need to check in on my brother and sister and make sure they went to bed on time."');
    scene.text('He starts towards the door before he turns his head. "Thanks for the fun."');
    scene.text('With that, he walks out and leaves.');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub');
    qspCall(s, 'cum_call', 'mouth', 'A3', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You then tilt your head back and swallow his cum before you stick your tongue back out to show him that you\'ve swallowed it all.');
    scene.text('"Fuck, that\'s hot," he chuckles as he shakes his head slightly. "I\'m almost ready to go again!"');
    scene.text('You stand up and fix your top so your breasts are no longer exposed. "Swallowing cum is such a turn on for me..." you smile coyly.');
    scene.text('He nods and chuckles. "Yeah, I know it was for me. Glad you enjoyed it too. Anyway, I should get going. Need to check in on my brother and sister and make sure they went to bed on time."');
    scene.text('He starts towards the door before he turns his head. "Thanks for the fun."');
    scene.text('With that, he walks out and leaves.');
    qspCall(s, 'arousal', 'foreplay', 1, 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A3', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
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
      scene.actions([
        { label: 'Just suck him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Get down on all fours', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discoanal1.jpg');
    scene.text('You do as he asks and get down on all fours, putting your backside on full display for him to see. He quickly removes the rest of your clothes and gets down on his knees behind you before you feel him squirt some liquid on your asshole.');
    scene.text('He quickly works the lube in before you feel the tip of his dick press against your asshole. He pushes until you feel the head slide into your ass, which causes you both to moan.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get ass fucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A3');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discoanal2.jpg');
    // TODO-QSP: dynamic text: He starts working his <<dick>>cm <<$dick_girth>> cock deeper into your ass, taki...
    scene.text(`He starts working his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock deeper into your ass, taking it slow and giving you time to get used to the feeling of his dick in your ass.`);
    scene.text('It quickly starts feeling really good for you and you start to moan louder as he slowly, but steadily fucks your ass.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get ass fucked some more', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discoanal3.jpg');
    scene.text('You hear him chuckle a liitle. "With how much you\'re moaning, you must really like this."');
    scene.text('He gives your ass a hard smack and starts fucking you a little harder and faster, which elicits even louder moans of pleasure from you.');
    scene.text('"At this rate, we\'ll turn you into a buttslut in no time!" he says as he starts fucking you even harder and deeper.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take him balls deep', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/disco/restroom/discoanal4.jpg');
    scene.text('You feel his balls slapping against your wet pussy with each hard thrust, which feels so good you can hardly stand it.');
    scene.text('"Fuck, you have the tightest ass I\'ve ever fucked!" he says before he drives himself deep into your ass and holds himself there as you feel spurt after spurt of warm cum filling your ass as he grunts loudly.');
    qspCall(s, 'arousal', 'anal', 2, 'lube', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/school/schoolanal6.jpg');
    scene.text('Once he\'s done, he takes a shuddering breath and pulls out of you, his cum immediately dribbling of your gaping asshole.');
    scene.text('He gives your ass another smack and laughs. "I never get tired of that sight."');
    scene.text('He puts his dick back into his pants as you start getting dressed, his cum still leaking out of your asshole.');
    // TODO-QSP: dynamic text: Once you're mostly dressed, he gives your ass a hard slap. "That was great, <<$p...
    scene.text(`Once you're mostly dressed, he gives your ass a hard slap. "That was great, ${((s as any).pcs_nickname || '')}. Maybe we can do this again sometime? Anyway, I should get going. Need to check in on my brother and sister and make sure they went to bed on time."`);
    scene.text('He starts towards the door before he turns his head. "Thanks for the fun."');
    scene.text('With that, he walks out and leaves.');
    qspCall(s, 'arousal', 'anal', 1, 'lube', 'sub');
    qspCall(s, 'cum_call', 'anus', 'A3', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLockerRoomDressed(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'IvanEv';
  (s as any).loc_arg = 'locker_room_dressed';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/get_dressed.jpg');
  scene.text('You open your locker and pick out an outfit to wear.');
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave  [+$func(\'wrap\', \'neg\', \'(Get dressed first...]', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg b', 'You need to get dressed before l...
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ivan_vitek_fight1':
      enterIvanVitekFight1(s, scene);
      break;
    case 'training':
      enterTraining(s, scene);
      break;
    case 'boxing_lessons':
      enterBoxingLessons(s, scene);
      break;
    case 'locker_room':
      enterLockerRoom(s, scene);
      break;
    case 'locker_room_fuck':
      enterLockerRoomFuck(s, scene);
      break;
    case 'ivan_bored':
      enterIvanBored(s, scene);
      break;
    case 'ivan_bored_disco':
      enterIvanBoredDisco(s, scene);
      break;
    case 'locker_room_dressed':
      enterLockerRoomDressed(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const IvanEv: LocationDef = {
  name: 'IvanEv',
  region: 'other',
  enter: enter,
};
