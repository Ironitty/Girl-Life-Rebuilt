import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIvanVitekFight1(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 3;
  (s as any).ivansportday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A3']} ${((s as any).npc_lastname ?? 0)?.['A3']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  if (((s as any).loc ?? 0) === 'gdksport') {
    scene.text('When you enter the sports center, Ivan sees you come in. Even though he\'s getting ready for a training session and is only wearing his boxing shorts, he comes over for a quick chat.');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>!" he grins, happy to see you. "Here to do some training?"
    scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}!" he grins, happy to see you. "Here to do some training?"`);
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
    scene.text(`"So you decided to show up after all, huh?" he snarks at Ivan. "What's this? You planning to let ${((s as any).pcs_nickname ?? 0)} fight for you?"`);
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
  scene.build();
}

function enterTraining(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/ivan/training/train1.jpg');
  scene.text('You see Ivan near the punching bags, who turns to you when you get close.');
  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>!" he grins, happy to see you. "What are you doing here?"
  scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}!" he grins, happy to see you. "What are you doing here?"`);
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
    (s as any).ivanQW['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
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
    (s as any).ivanQW['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
    qspCall(s, 'exercise', 'tier2', 30, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train3.jpg');
    scene.text('He finds a pair of boxing gloves that\'ll fit you, then helps you put them on. After that, he has you start punching the heavy bag while he gives you pointers on how you\'re swinging and standing, among other things.');
    scene.text('After a few minutes, he slips the focus mitts on his hands and you smile as you bump your glove covered hand against the focus mitts. "Let\'s get started."');
    (s as any).ivanQW['boxing_lessons'] = ((s as any).ivanQW['boxing_lessons'] ?? 0) + (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'jab', 'punch', 'def');
    scene.img('images/characters/pavlovsk/school/boy/ivan/training/train3.jpg');
    scene.text('He finds a pair of boxing gloves that\'ll fit you, then helps you put them on. After that, he has you start punching the heavy bag while he gives you pointers on how you\'re swinging and standing, among other things.');
    scene.text('After a few minutes, he slips some boxing gloves on his hands and smiles at you. "We\'re going to spar today."');
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
  scene.actions([{ label: 'Continue', goto: ['IvanEv', 'locker_room_dressed'] }]);
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
        { label: 'Tell him to go away [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
        { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
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
      { label: 'Tell him to go away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cover up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/locker/coverup.jpg');
    scene.text('You stand still for a moment, like a deer in headlights, then quickly cover up yourself with your hands.');
    scene.text('"What the fuck, Ivan?!" you yell in shock and surprise.');
    scene.text('He blushes slightly at your reaction. "Sorry! I just thought that, after a workout like that, that you might want to... Have a little fun..."');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
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
        { label: 'Tell him to go away [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
        { label: 'Get dressed', goto: ['IvanEv', 'locker_room_dressed'] },
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
      { label: 'Tell him to go away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
    default:
      enterIvanVitekFight1(s, scene);
      break;
  }
}

export const IvanEv: LocationDef = {
  name: 'IvanEv',
  title: '<<$npc_firstname[\'A3\']>> <<$npc_lastname[\'A3\']>>',
  region: 'other',
  description: ['When you enter the sports center, Ivan sees you come in. Even though he\'s getting ready for a training session and is only wearing his boxing shorts, he comes over for a quick chat.'],
  enter: enter,
};
