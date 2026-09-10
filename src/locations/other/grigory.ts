import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDummy(s: GameState, scene: SceneBuilder): void {
  scene.text('It is a shortcut out - because this event is not finished, be patient !!!');
  scene.actions([
    { label: 'Return to village', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).npc_qw['A221'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big221.jpg');
  scene.text('When you near the fields you notice a man walking near your grandparents\' cows.');
  scene.text('Curious, you slow your pace, watching the man for several minutes as he inspects one of the cows then starts walking towards a nearby pickup truck with its back end full of hay.');
  scene.text('He just reaches for the pitch fork sticking out of the hay when he finally notices you. He stops mid motion and seems to ponder something for several seconds before starting to walk your direction.');
  scene.text('Looking at him, you can\'t help but think he looks familiar, but you aren\'t quite able to place him.');
  scene.text('He\'s perhaps in his late thirties, early forties at most. His angular face is framed by his unruly brown hair, and as he draws closer you start to become aware of just how massive this man is.');
  scene.text('"Kotenok?" He calls when he gets close, the pet name surprising you.');
  scene.actions([
    { label: '"Grigory?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"Grigory? Grigory Chekov?" You ask, a smile blossoming on your face, "It\'s been a long time. I thought you had moved to the city?"');
    scene.text('Grigory gives you an authentic smile, "Yes and no. There\'s a big corporate farm to the southeast of Saint Petersburg. I worked there for a couple of years, but," Grimacing, "It just wasn\'t a good fit for me so I came home," He gestures at the area around him.');
    scene.text('His smile is a little self conscious, "I love this little town, and I missed it.');
    scene.text('"It\'s been too long Kotenok," When he finally nears where you\'re standing, he shows no sign of slowing down, instead reaching out and picking you up by your hips and holding you out at arm\'s length.');
    scene.text('The sheer strength involved in such a feat, to pick you up so effortlessly, is impressive. You can see him looking you over, his eyes lingering momentarily on your breasts before he blushes slightly and pulls you into a small hug before sitting you back down, "You\'ve grown into quite the woman," He says, glancing at the cows in the field.');
    scene.text('Reaching for his back pocket, he pulls a flask. Tipping the flask back, he takes a long pull from it before screwing the cap back in place and returning it to his back pocket.');
    scene.text('"I had a little money saved up, barely enough to make a downpayment on the farm up the road," Ha half smiles, "I\'ll be paying on it the rest of my life, but it\'s mine."');
    scene.actions([
      { label: '"That\'s great!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"That\'s great!" You say, authentically happy for him.');
    scene.text('"Besides, your grandparents were always good to me growing up, letting me do yard work and helping with the animals. By being back here I can help keep an eye on them," He suddenly looks self conscious, "They might not be blood, but they treated me better than my own parents, and that makes them family if you ask me."');
    scene.text('You\'re a little surprised at the admission, remembering all the times you saw him hanging out around your grandparents and helping out over the years. In spite of all the memories of him hanging around, you\'re still taken back by how close he feels to your grandparents.');
    scene.text('"So, how\'s your mother been?" He asks, suddenly changing the subject.');
    scene.text('"She\'s good," You reply, not sure what else to say, "If she\'s not at the cafe, she\'s usually at home."');
    scene.text('Grigory reaches for his flask again, taking a nother sip while his eyes linger on you, "That\'s good. She\'s happy?"');
    scene.text('"Most the time," You say with a half smile.');
    scene.text('He just nods, taking another sip before returning his flask to his pocket again.');
    scene.text('"How about you?" He finally breaks the silence, "What have you been up to?"');
    scene.text('You smile, "School, family, trying to save up a few dollars."');
    scene.text('The two of you end up talking for maybe half an hour about old times and what you\'ve each been doing over the last couple of years.');
    scene.text('Finally, the two of you drift into a comfortable silence. Eventually he sighs, "I really need to get back to work my little Kotenok," He gives a wistful smile, his eyes drifting over your body for a moment before meeting your eyes again, "You really have grown into an exceptional young woman. I hope you return for another visit soon."');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Hug him goodbye [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hug him goodbye', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('He seems surprised when you reach out, putting your arms around his powerful frame. Your arms barely reach all the way around his middle.');
    scene.text('"Whoa," Grigory says in surprise, then bends down slightly as he wraps his own big arms around you.');
    scene.text('The hug lingers, then just before it starts to become awkward, he lifts you off of your feet and twirls you around once before sitting you back on your feet. You can\'t help but laugh as you remember all the times he did exactly the same thing to you when you were little.');
    scene.text('"I really liked getting to see you again," You say through your dwindling laughter, "I hope to see you again soon."');
    scene.text('You can see that he has a big grin on his face, one that you suspect matches your own, "I\'ll be around."');
    scene.text('With a friendly wave, the two of you part ways.');
    scene.actions([
      { label: 'Return', goto: ['gad_field', 'field'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"I enjoyed getting to talk to you again," You admit, "I\'ll be sure to say hi the next time I see you." With a smile, you wave and start to make your exit.');
    scene.text('Grigory smiles broadly, waving goodbye as you leave.');
    scene.actions([
      { label: 'Return', goto: ['gad_field', 'field'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).grigory_barn = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/junk_barn.jpg');
  scene.text('When you start to enter the barn behind your grandparents\' place, you can hear someone or something moving about inside.');
  scene.text('You cautiously lean in to see what is happening. Inside you see Grigory rummaging through the garage.');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flirt', handler: (st: GameState) => {
    (s as any).npc_qw['A221'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"Hi," You say, playfully biting your lip when you see him look your way.');
    scene.text('You can see a hint of a smile touch his lips, "Well you\'re a sight for sore eyes there Kotenok," He replies, reaching into his back pocket before taking a sip, "You wouldn\'t be trying to distract me with your feminine wiles would you?"');
    scene.text('You put a hand to your chest in mock offence, unable to keep a smile off your face, "Would I do something like that?"');
    scene.text('He laughs softly, shaking his head then starting to walk towards you. He stops just a couple of steps short of where you are, leaning against a piece of farm equipment.');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move closer to him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move closer to him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['grigory', 'barn_closer'] },
      ]);
    }
    scene.actions([
      { label: 'Chat with Grigory', goto: ['grigory', 'barn_stand'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave him be', goto: ['gad_gpbarn', ''] },
    { label: 'Say hi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"Hi!" You call out.');
    scene.text('"Hey there Kotenok!" He replies with a smile and a little wave, "Any chance you\'d be willing to help look for their shovel?"');
    scene.text('You don\'t have quite enough time to answer before he speaks again, "Nevermind, there it is." He says.');
    scene.text('Crossing the barn, he retrieves the shovel and starts to walk your way, "It\'s good to see you again." He gives you a little smile as he exits the barn.');
    scene.actions([
      { label: 'Talk for a bit', goto: ['grigory', 'barn_stand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarnCloser(s: GameState, scene: SceneBuilder): void {
  scene.text('You take a few steps closer to him. He smiles at you, putting an arm around your shoulders.');
  scene.text('For several seconds, he seems to search your eyes, then leans forward. When your lips meet, he kisses you roughly, his tongue pressing into your mouth. He tastes of alcohol.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist his advances [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist his advances', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"Whoa," You say, putting a hand on his chest and pushing lightly. Grigory is far too big of a man to be pushed away, but he takes a hint and steps back anyway.');
    scene.text('With a slight grimace, he reaches for his flask and takes a sip.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'barn_stand'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let him continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'boystat', 'A221');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You let the kiss linger and within moments his hands are roaming over your body as he begins to undress you. There\'s something animalistic in his movements, like a stud animal that can smell a mate.');
      scene.text('Once naked, he pushes you onto a pile of hay, the motion only somewhat playful. Within seconds, his own clothing joins yours on the ground at his feet.');
      scene.text('Moving towards you, he pauses, both affection and need clear in his expression. "I do care about you Kotenok," His expression becomes self conscious, "And I\'ve wanted this for a long time now."');
      scene.text('You can\'t quite suppress a smile, and when he sees your smile he returns it with one of his own.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.text('Without a further word, he takes hold of your hips, flipping you over onto your hands and knees. You feel his calused hand reach between your legs to fondle your pussy, testing its wetness.');
    scene.text('He almost immediately removes his hand and takes hold of both of your hips. You can feel the tip of his cock brush the inside of your thigh, finding your slit he thrusts forward, sinking his entire length into you in one rough shove. You cry out in pain at the sudden loss of your virginity. Grigory freezes in place, concern in his features. When he looks down at where your bodies meet, his expression turns to surprise, "You?" He stammers, starting to withdraw.');
    scene.text('Reaching out, you put your arms around him, holding him to you so that he can\'t fully pull out of you, "It\'s ok," You say softly, forcing a smile through the discomfort, "I wanted you to be my first."');
    scene.text('For several seconds, he just looks down at you a blank expression on his face like he\'s still trying to make sense of what you just said. His cock throbs once inside of you as a smile starts to touch his lips.');
    scene.text('Suddenly, he\'s kissing you again, his lips pressed firmly against your own as his hips begin to buck against you. At first it\'s uncomfortable, but eventually it begins to feel good.');
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).npc_qw['A221'] = 3;
    scene.text('For several minutes he fucks you with rapid thrusts that fill the air with the sounds of your bodies meeting.');
    scene.text('It\'s not long before you can feel his pace become irregular, then with one sudden lunge and a grunt, he presses deep before unloading his seed deep inside of you.');
    scene.text('Withdrawing, you can feel some of his cum, mingled with your virgin blood, drip from your freshly used pussy. He gives your ass a playful slap, then reaches for his clothes.');
    scene.text('With his clothes in hand, he stops to look at you, "I want nothing more than to stay here with you, but I need to get back to work," Grigory says, you can still hear that he\'s still short of breath, "See you later Kishka."');
    scene.text('Without another word, he exits the barn. After he is gone, you can\'t help but think about how happy he looked before leaving.');
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You let the kiss linger and within moments his hands are roaming over your body as he begins to undress you. There\'s something animalistic in his movements, like a stud animal that can smell a mate.');
      scene.text('Once naked, he pushes you onto a pile of hay, the motion only somewhat playful. Within seconds, his own clothing joins yours on the ground at his feet.');
      scene.text('Moving towards you, he smiles, both affection and need clear in his expression. Without a word, he takes hold of your hips, flipping you over onto your hands and knees. You feel his calused hand reach between your legs to fondle your pussy, testing its wetness.');
      scene.text('He almost immediately removes his hand and takes hold of both of your hips. You can feel the tip of his cock brush the inside of your thigh, finding your slit he thrusts forward, sinking his entire length into you in one rough shove. Without so much as a pause, he begins to fuck you with rapid thrusts that fill the air with the sounds of your bodies meeting.');
      scene.text('It\'s not long before you can feel his pace become irregular, then with one sudden lunge and a grunt, he presses deep before unloading his seed deep inside of you.');
      scene.text('Withdrawing, you can feel some of his cum drip from your freshly used pussy. He gives your ass a playful slap, then reaches for his clothes.');
      scene.text('"I need to get back to work," Grigory says, you can still hear that he\'s still short of breath, "See you later little lady."');
      scene.text('Without another word, he exits the barn.');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'arousal', 'vaginal', 10);
      qspCall(s, 'arousal', 'end');
      (s as any).npc_qw['A221'] = 3;
      scene.text('You let the kiss linger and within moments his hands are roaming over your body as he begins to undress you. There\'s something animalistic in his movements, like a stud animal that can smell a mate.');
      scene.text('Once naked, he pushes you onto a pile of hay, the motion only somewhat playful. Within seconds, his own clothing joins yours on the ground at his feet.');
      scene.text('Moving towards you, he pauses, both affection and need clear in his expression. "I do care about you Kotenok," His expression becomes self conscious, "And I\'ve wanted this for a long time now."');
      scene.text('You can\'t quite suppress a smile, and when he sees your smile he returns it with one of his own.');
      scene.text('Without a further word, he takes hold of your hips, flipping you over onto your hands and knees. You feel his callused hand reach between your legs to fondle your pussy, testing its wetness.');
      scene.text('He almost immediately removes his hand and takes hold of both of your hips. You can feel the tip of his cock brush the inside of your thigh, finding your slit he thrusts forward, sinking his entire length into you in one rough shove. Without so much as a pause, he begins to fuck you with rapid thrusts that fill the air with the sounds of your bodies meeting.');
      scene.text('It\'s not long before you can feel his pace become irregular, then with one sudden lunge and a grunt, he presses deep before unloading his seed deep inside of you.');
      scene.text('Withdrawing, you can feel some of his cum drip from your freshly used pussy. He gives your ass a playful slap, then reaches for his clothes.');
      scene.text('"I need to get back to work," Grigory says, you can still hear that he\'s still short of breath, "See you later little lady."');
      scene.text('Without another word, he exits the barn.');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'arousal', 'vaginal', 10);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['gad_gpbarn', ''] },
        { label: 'Continue', goto: ['gad_gpbarn', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBarnStand(s: GameState, scene: SceneBuilder): void {
  scene.text('For several minutes the two of you talk, but eventually he stops and gives a disappointed little smile, "Well little lady, I really need to get back to work."');
  scene.text('You say your goodbyes and he exits the barn.');
  scene.actions([
    { label: 'Continue', goto: ['gad_gpbarn', ''] },
  ]);
  scene.build();
}

function enterGarden(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).grigory_garden ?? 0))) {
    (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('Entering the garden, you decide that you\'ll spend a little time helping out by working in the garden.');
    scene.text('For the next half hour, you pull weeds in the garden.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } else {
    (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('You decide to work in the garden for a little while. Kneeling in the soil, you pull weeds, occasionally finding a rock in the soil that you pull free.');
    scene.text('While you are working, you see your grandmother looking out the back window of the house.');
    scene.text('She gives you a smile and a wave that you quickly return before turning your attention back to working in the garden.');
    if (((s as any).grigory_garden ?? 0) === 2) {
      (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.text('Looking at the garden, you decide to water the plants.');
      scene.text('An hour later, the soil is muddy, droplets of water dripping from the plants in the garden.');
      scene.actions([
        { label: 'Continue', goto: ['grigory', 'dummy'] },
      ]);
    } else {
      (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.text('You barely start to work in the garden before you see your grandfather\'s approach.');
      scene.text('"You\'re a good child," He nods to himself, glancing at the garden, "A very good girl."');
      scene.text('Realizing that\'s as close to a thank you you\'re likely to get from your grandfather, you smile to yourself and get back to work. You can hear the sound of his cane hitting the ground every step as he walks away.');
      if (((s as any).grigory_garden ?? 0) === 4) {
        (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.text('You don\'t know how long you had been working in the garden before a shadow falls over you. Glancing up, you see your grandfather sanding right beside you.');
        scene.text('"You have seen Grigory around?" Your grandfather asks.');
        if (((s as any).npc_qw ?? 0)?.['A221'] === 0) {
          scene.text('It takes you a second before you place the name, "Grigory? You\'re confused grandfather, he moved away a couple of years ago," You can\'t help but remember the kind giant of a man who always had a moment to talk to you even when you were a little child.');
          scene.text('"No, he has returned. Bought the old farm at the end of the road, past the field," He grimaces, "Was going to see if he could help me with something."');
          scene.text('Not bothering to say more, your grandfather wanders off towards the barn, cane in hand…');
          scene.text('Still thinking about Grigory and all the time you spent around him when you were younger, you barely get anything else done in the garden. You kind of hope to see him again.');
        } else {
          scene.text('"Sorry grandfather, I haven\'t seen him in a little while." You say to him.');
          scene.text('"A shame," Grandfather says flatly, "He\'s good man, was going to see if he could help me with something."');
          scene.text('Grandfather starts to turn like he\'s going to leave, then pauses, "You\'d do well to find a man like him. Get married, have a family."');
          scene.text('You\'re left kneeling in the dirt, a look of surprise on your face.');
          scene.text('Grandfather chuckles, clearly pleased by your expression before walking off towards the barn, leaning heavily on his cane…');
          scene.text('Slightly flustered, you don\'t get much more done in the garden.');
        }
        scene.actions([
          { label: 'Continue', goto: ['grigory', 'dummy'] },
        ]);
      } else {
        (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.text('You\'ve been working in the garden for a little while before you hear a sound nearby. Looking up, you see Grigory leaning against the fince watching you work. You can see that he\'s holding his flask in his hand.');
        scene.text('Taking a little sip, he smiles at you.');
        scene.text('"Do you need something? Grandfather is either in the house or the barn," You pause, feeling a slight thrill at the idea, "Or are you here to see me?"');
        scene.text('"Just here to admire the view," He says, a little color creeping into his cheeks.');
        scene.text('You can\'t help but feel a little heat in your own cheeks in response to the bold statement. "If you\'re just going to gawk at me, the least you can do is come over here and help me weed this garden," You joke.');
        scene.text('Grigory stammers, not quite able to find words, "I um," He glances towards the barn, "I heard your grandfather wanted some help with something. See you later Kotenok."');
        scene.text('Casting one last smile your way, he quickly looks away again and makes haste to the barn.');
        scene.text('Smiling, you get back to working in the garden.');
        if (((s as any).grigory_garden ?? 0) === 6) {
          (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          scene.text('You\'ve been working in the garden for several minutes when you notice a movement through the bushes along the fence.');
          scene.text('Glancing that way, you can see someone on the other side bushes watching you.');
          scene.text('It takes you a few seconds, but you finally realize that it\'s Grigory watching you.');
          qspCall(s, 'willpower', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Tease him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('Smiling to yourself, you stretch a little, making sure to push your chest out in the direction of your voyeur.');
    scene.text('When you return to working, you kneel with your back to him, pushing your bottom in his general direction, wiggling it playfully as you do so.');
    scene.text('A short while later you glance back at him, it\'s clear that he is still watching, but the bushes are too thick for you to make out much more than that.');
    scene.text('Eventually you\'re done working in the garden. When you stand up, you look at the bushes one last time, blowing a little kiss, then leaving the garden.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Ignore him', handler: (st: GameState) => {
    scene.text('Ignoring the fact that he\'s spying on you, you return to weeding the garden.');
    scene.text('When you finish, you glance at where Grigory was before, but there\'s no sign of him now.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
            { label: 'Say something', handler: (st: GameState) => {
    scene.text('"Hi Grigory," I call to him.');
    scene.text('Slowly, he stands up where I can see him, his face crimson, "Hello Kotenok."');
    scene.text('You see him take a long sip from his flask,');
    scene.text('"What were you doing over there?" You ask, wondering what he\'s going to say');
    scene.text('He looks uncomfortable, visibly struggling to find an answer, "You\'re very pretty Kotenok, and," He trails off for several seconds, "I\'ve never been good at talking with girls."');
    scene.text('You let out a little laugh, "You\'ve known me as long as I can remember, you didn\'t start acting weird around me until recently."');
    scene.actions([
      { label: 'Be Comforting', goto: ['grigory', 'garden_comfort'] },
      { label: 'Brush it off', goto: ['grigory', 'garden_brush'] },
      { label: 'Tease him about it', goto: ['grigory', 'garden_tease'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Continue', goto: ['grigory', 'dummy'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['grigory', 'dummy'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dummy':
      enterDummy(s, scene);
      break;
    case 'meet':
      enterMeet(s, scene);
      break;
    case 'barn':
      enterBarn(s, scene);
      break;
    case 'barn_closer':
      enterBarnCloser(s, scene);
      break;
    case 'barn_stand':
      enterBarnStand(s, scene);
      break;
    case 'garden':
      enterGarden(s, scene);
      break;
    default:
      enterDummy(s, scene);
      break;
  }
}

export const grigory: LocationDef = {
  name: 'grigory',
  title: 'It is a shortcut out - because this event is not finished, b',
  region: 'other',
  description: ['It is a shortcut out - because this event is not finished, be patient !!!'],
  enter: enter,
};
