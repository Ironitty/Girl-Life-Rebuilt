import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDummy(s: GameState, scene: SceneBuilder): void {
  scene.text('It is a shortcut out - because this event is not finished, be patient !!!');
  scene.actions([
    { label: 'Return to village', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).npc_qw = (s as any).npc_qw ?? {})['A221'] = 1;
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
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Hug him goodbye', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hug him goodbye', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
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
      { label: 'Flirt', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flirt', handler: (st: GameState) => {
    ((st as any).npc_qw = (st as any).npc_qw ?? {})['A221'] = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big221.jpg');
    scene.text('"Hi," You say, playfully biting your lip when you see him look your way.');
    scene.text('You can see a hint of a smile touch his lips, "Well you\'re a sight for sore eyes there Kotenok," He replies, reaching into his back pocket before taking a sip, "You wouldn\'t be trying to distract me with your feminine wiles would you?"');
    scene.text('You put a hand to your chest in mock offence, unable to keep a smile off your face, "Would I do something like that?"');
    scene.text('He laughs softly, shaking his head then starting to walk towards you. He stops just a couple of steps short of where you are, leaning against a piece of farm equipment.');
    qspCall(st, 'willpower', 'misc', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move closer to him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move closer to him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'grigory', 'barn_closer');
  } },
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
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
      { label: 'Resist his advances', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist his advances', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'boystat', 'A221');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You let the kiss linger and within moments his hands are roaming over your body as he begins to undress you. There\'s something animalistic in his movements, like a stud animal that can smell a mate.');
      scene.text('Once naked, he pushes you onto a pile of hay, the motion only somewhat playful. Within seconds, his own clothing joins yours on the ground at his feet.');
      scene.text('Moving towards you, he pauses, both affection and need clear in his expression. "I do care about you Kotenok," His expression becomes self conscious, "And I\'ve wanted this for a long time now."');
      scene.text('You can\'t quite suppress a smile, and when he sees your smile he returns it with one of his own.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('Without a further word, he takes hold of your hips, flipping you over onto your hands and knees. You feel his calused hand reach between your legs to fondle your pussy, testing its wetness.');
    scene.text('He almost immediately removes his hand and takes hold of both of your hips. You can feel the tip of his cock brush the inside of your thigh, finding your slit he thrusts forward, sinking his entire length into you in one rough shove. You cry out in pain at the sudden loss of your virginity. Grigory freezes in place, concern in his features. When he looks down at where your bodies meet, his expression turns to surprise, "You?" He stammers, starting to withdraw.');
    scene.text('Reaching out, you put your arms around him, holding him to you so that he can\'t fully pull out of you, "It\'s ok," You say softly, forcing a smile through the discomfort, "I wanted you to be my first."');
    scene.text('For several seconds, he just looks down at you a blank expression on his face like he\'s still trying to make sense of what you just said. His cock throbs once inside of you as a smile starts to touch his lips.');
    scene.text('Suddenly, he\'s kissing you again, his lips pressed firmly against your own as his hips begin to buck against you. At first it\'s uncomfortable, but eventually it begins to feel good.');
    qspCall(st, 'arousal', 'vaginal', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).npc_qw = (st as any).npc_qw ?? {})['A221'] = 3;
    scene.text('For several minutes he fucks you with rapid thrusts that fill the air with the sounds of your bodies meeting.');
    scene.text('It\'s not long before you can feel his pace become irregular, then with one sudden lunge and a grunt, he presses deep before unloading his seed deep inside of you.');
    scene.text('Withdrawing, you can feel some of his cum, mingled with your virgin blood, drip from your freshly used pussy. He gives your ass a playful slap, then reaches for his clothes.');
    scene.text('With his clothes in hand, he stops to look at you, "I want nothing more than to stay here with you, but I need to get back to work," Grigory says, you can still hear that he\'s still short of breath, "See you later Kishka."');
    scene.text('Without another word, he exits the barn. After he is gone, you can\'t help but think about how happy he looked before leaving.');
    qspCall(st, 'cum_call', '', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'arousal', 'vaginal', 10);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_had_sex ?? 0)?.['A221']) {
        scene.text('You let the kiss linger and within moments his hands are roaming over your body as he begins to undress you. There\'s something animalistic in his movements, like a stud animal that can smell a mate.');
        scene.text('Once naked, he pushes you onto a pile of hay, the motion only somewhat playful. Within seconds, his own clothing joins yours on the ground at his feet.');
        scene.text('Moving towards you, he smiles, both affection and need clear in his expression. Without a word, he takes hold of your hips, flipping you over onto your hands and knees. You feel his calused hand reach between your legs to fondle your pussy, testing its wetness.');
        scene.text('He almost immediately removes his hand and takes hold of both of your hips. You can feel the tip of his cock brush the inside of your thigh, finding your slit he thrusts forward, sinking his entire length into you in one rough shove. Without so much as a pause, he begins to fuck you with rapid thrusts that fill the air with the sounds of your bodies meeting.');
        scene.text('It\'s not long before you can feel his pace become irregular, then with one sudden lunge and a grunt, he presses deep before unloading his seed deep inside of you.');
        scene.text('Withdrawing, you can feel some of his cum drip from your freshly used pussy. He gives your ass a playful slap, then reaches for his clothes.');
        scene.text('"I need to get back to work," Grigory says, you can still hear that he\'s still short of breath, "See you later little lady."');
        scene.text('Without another word, he exits the barn.');
        qspCall(st, 'cum_call', '', ((st as any).npcID ?? 0), 1);
        qspCall(st, 'arousal', 'vaginal', 10);
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', goto: ['gad_gpbarn', ''] },
        ]);
      } else {
        ((st as any).npc_qw = (st as any).npc_qw ?? {})['A221'] = 3;
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
        qspCall(st, 'cum_call', '', ((st as any).npcID ?? 0), 1);
        qspCall(st, 'arousal', 'vaginal', 10);
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Continue', goto: ['gad_gpbarn', ''] },
        ]);
      }
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
    if (((s as any).grigory_garden ?? 0) === 1) {
      (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.text('You decide to work in the garden for a little while. Kneeling in the soil, you pull weeds, occasionally finding a rock in the soil that you pull free.');
      scene.text('While you are working, you see your grandmother looking out the back window of the house.');
      scene.text('She gives you a smile and a wave that you quickly return before turning your attention back to working in the garden.');
      scene.actions([
        { label: 'Continue', goto: ['grigory', 'dummy'] },
      ]);
    } else {
      if (((s as any).grigory_garden ?? 0) === 2) {
        (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.text('Looking at the garden, you decide to water the plants.');
        scene.text('An hour later, the soil is muddy, droplets of water dripping from the plants in the garden.');
        scene.actions([
          { label: 'Continue', goto: ['grigory', 'dummy'] },
        ]);
      } else {
        if (((s as any).grigory_garden ?? 0) === 3) {
          (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          scene.text('You barely start to work in the garden before you see your grandfather\'s approach.');
          scene.text('"You\'re a good child," He nods to himself, glancing at the garden, "A very good girl."');
          scene.text('Realizing that\'s as close to a thank you you\'re likely to get from your grandfather, you smile to yourself and get back to work. You can hear the sound of his cane hitting the ground every step as he walks away.');
          scene.actions([
            { label: 'Continue', goto: ['grigory', 'dummy'] },
          ]);
        } else {
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
            if (((s as any).grigory_garden ?? 0) === 5) {
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
              scene.actions([
                { label: 'Continue', goto: ['grigory', 'dummy'] },
              ]);
            } else {
              if (((s as any).grigory_garden ?? 0) === 6) {
                (s as any).grigory_garden = ((s as any).grigory_garden ?? 0) + (1);
                (s as any).minut = ((s as any).minut ?? 0) + 30;
                scene.text('You\'ve been working in the garden for several minutes when you notice a movement through the bushes along the fence.');
                scene.text('Glancing that way, you can see someone on the other side bushes watching you.');
                scene.text('It takes you a few seconds, but you finally realize that it\'s Grigory watching you.');
                qspCall(s, 'willpower', 'self', 'easy');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Tease him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tease him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
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
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGardenComfort(s: GameState, scene: SceneBuilder): void {
  scene.text('"You\'re sweet Grigory," You begin, trying to think of how best to continue, "But you don\'t have to be weird around me."');
  scene.text('He doesn\'t quite meet your eyes as he shifts his weight from foot to foot, "You\'re right Kotenok," He says softly.');
  scene.text('"I\'m your friend," A smile blossoms on your face, "If you want to talk to me, just talk to me."');
  scene.text('The two of you spend a few more minutes talking, the situation still feeling a little weird when you finally part ways. When he leaves, he gives a little smile and a wave.');
  scene.actions([
    { label: 'Continue', goto: ['grigory', 'dummy'] },
  ]);
  scene.build();
}

function enterGardenBrush(s: GameState, scene: SceneBuilder): void {
  scene.text('You decide to deflect, changing the subject, "You want to go get the hoe from the barn for me?"');
  scene.text('"Yeah, sure Kotenok," He says quickly, then heads for the barn. A minute later, he returns with the hoe.');
  scene.text('"Thank you Grigory," You take the hoe and return to work.');
  scene.text('"You\'re welcome Kotenok," He says, his voice small as he speaks. You can see him sip at his flask absently, still half watching you from the corner of his eye.');
  scene.text('"Relax Grigory," You say with a reassuring smile, "Stop being weird and be the friend I love."');
  scene.text('A wistful smile touches his lips, "I need to get back to work, see you later Kotenok."');
  scene.text('"See you later Grigory," You reply softly.');
  scene.text('A moment later, you\'re left with your work and your thoughts.');
  scene.actions([
    { label: 'Continue', goto: ['grigory', 'dummy'] },
  ]);
  scene.build();
}

function enterGardenTease(s: GameState, scene: SceneBuilder): void {
  scene.text('"You could really scare a girl peeping at her like that," You say with a little smirk, "It\'s a good thing I know you\'re just a little strange."');
  scene.text('Grigory opens his mouth like he\'s going to say something, but then closes it again. With a sigh, you see the big man defalte a little, "Sorry Kotenok," He finally mumbles.');
  scene.text('Again, he looks like he\'s going to say something, but finally gives you a self conscious wave and leaves.');
  scene.text('Shrugging to yourself, you return to your work.');
  scene.actions([
    { label: 'Continue', goto: ['grigory', 'dummy'] },
  ]);
  scene.build();
}

function enterFlower1(s: GameState, scene: SceneBuilder): void {
  scene.text('Waking up, you glance towards the window, instinctively turning your eyes towards the light filtering through. What you see surprises you.');
  scene.text('Along the windowsill are dozens of prairie crocus, the little purple flowers tucked in near the frame so they won\'t fall.');
  scene.text('Standing up, you pad towards the window, opening it. Just the act of opening the window is enough for several of the flowers to fall to the ground outside.');
  scene.text('Reaching out, you pick up one of the flowers, looking at it in wonder.');
  scene.text('You used to pick these things all the time when you were little.');
  scene.text('Wondering who could have put them there, you look out across the yard but see no sign of who might have left them there.');
  scene.actions([
    { label: 'Well that\'s kind of creepy', handler: (st: GameState) => {
    if ((!((st as any).grigory_flower ?? 0))) {
      (st as any).grigory_flower = 1;
      scene.text('Shuddering slightly, you grimly realize that you might have a stalker. You\'re going to have to be careful in case whoever it is proves dangerous.');
    } else {
      scene.text('Unhappy and just a little unsettled, you wonder for a moment how best to approach this situation. You can tell someone about it, but everyone would probably just tell you that you\'re overreacting. You could try to ignore it but it might just encourage whoever is doing it. Or you could try to find out who\'s doing it, but that could prove dangerous.');
      scene.text('Sighing, you prepare to start your day.');
    }
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    { label: 'That\'s actually kind of cute', handler: (st: GameState) => {
    (st as any).grigory_flower = 2;
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('Your heart flutters momentarily, a smile plastered across your face as you hold the flower close to your heart before smelling it.');
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('Unable to suppress a smile, you raise the flower to your nose to smell it.');
        scene.text('<i>I wonder who could have left them there? Mitka maybe, but he\'s never expressed this kind of romantic side before</i>, you think to yourself.');
        scene.text('Looking out the window for a few seconds, you turn and place the flower on the stand beside your bed before starting your day.');
      } else {
        scene.text('Smiling, you wonder happily who might have left the flowers there for you. You\'ve got a secret crush!');
        scene.text('You almost dance back to your bed where you throw yourself onto it, holding the flower to your heart for a few seconds.');
        scene.text('When you finally get up, you sit the flower on the little stand beside your bed, smiling as you look at it.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFlower2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Mitka," You begin, "Any chance you were outside my room this morning?"');
  scene.text('He looks at you blankly, "Should I have been?"');
  scene.text('"There were flowers on my windowsill when I woke up this morning. Did you leave them there?"');
  scene.text('A sudden smile splits his face, "If I say yes, will it get me laid?"');
  if (((s as any).grigory_flower ?? 0) === 2) {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.img('images/locations/gadukino/sex/mitka/mitkafirst.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitka2.jpg');
    }
    scene.text('Mitka takes you to his house and onto the veranda. He has you sit on the couch and begins pawing at your clothes pulling them off you.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('You feel your hymen break as Mitka penetrates you. Mitka looks down at you in surprise and says, "Wow, how were you still a virgin? If I had known, I would have savoured this moment longer!"');
    }
    scene.text('Breathing heavily, Mitka gets off of you and says, "Nice fuck!"');
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A63'] = ((st as any).npc_QW['A63'] ?? 0) + (1);
    qspCall(st, 'boyStat', 'A63');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A63'] = 1;
    qspCall(st, 'arousal', 'vaginal', 10, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'What is wrong with you?', handler: (st: GameState) => {
    scene.text('"What the fuck is wrong with you?" You shout, more than a little upset.');
    scene.text('He looks surprised at your sudden intensity, "Hey! Don\'t freak out, I\'m not the one who left the flowers, ok."');
    scene.text('Taking a couple steps back from you, he flips you the bird, "Crazy fucking bitch," He mumbles then walks away.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Probably not', handler: (st: GameState) => {
    scene.text('"I don\'t think so," You say, a little shocked at the proposition. Since it doesn\'t look like he was the one to leave the flowers, you turn and walk away.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFlower3(s: GameState, scene: SceneBuilder): void {
  scene.text('"Grandpa," You say in greeting, "Can we talk for a minute?"');
  scene.text('"What do you need granddaughter?"');
  scene.text('You consider your next words for a few seconds, "Someone left flowers on my windowsill last night, and I don\'t know who."');
  scene.text('"Heh, I used to do things like that when I was younger," He gives you a faint smile, "Some boy just wants to become a man."');
  scene.text('You look at him, a little surprised at his reply.');
  scene.text('"But how do I find out who did it? Did you maybe see someone in the yard this morning?"');
  scene.text('Grandfather barks a little laugh, "Even if I knew, and I don\'t, I wouldn\'t tell you." He shakes his head, "Got to make the man work for it."');
  scene.text('Waving dismissively, you know grandfather is done talking about it.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFlower4(s: GameState, scene: SceneBuilder): void {
  scene.text('"Grandma."');
  scene.text('"Youngling? What\'s on your mind?"');
  scene.text('You sigh, "Someone left flowers on my windowframe this morning."');
  scene.text('Your grandmother smiles broadly, "Someone has a little crush." She states.');
  scene.text('"But I don\'t know who it is," You say, feeling a little overwhelmed.');
  scene.text('"But that is the magic of it!" Grandmother says, clearly overjoyed by the situation. She leans forward, kissing your cheek, "Whoever this boy is, he will reveal himself if you just let him."');
  scene.text('Not feeling much better, you thank her.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFlower5(s: GameState, scene: SceneBuilder): void {
  scene.text('You can see Grigory out in the field with the cows. Instead of bothering while he\'s clearly hard at work, you instead move closer to his truck.');
  scene.text('For several minutes, you watch him work in the field, though he does not appear to see you.');
  scene.text('Sighing, you glance at his truck and notice a bag sitting in the front seat, several little purple flowers falling out of it.');
  scene.text('Your eyes widen at the sight.');
  if (((s as any).grigory_flower ?? 0) === 1) {
    scene.actions([
      { label: 'Creepy', handler: (st: GameState) => {
    (st as any).grigory_flower = 10;
    (st as any).flowerday = ((st as any).daystart ?? 0);
    scene.text('You can feel my blood run cold as you look at the flowers. There is a deep sinking feeling in the pit of your stomach. Grigory, Grigory is the one who is leaving the flowers.');
    scene.text('Opening the passenger side door of the truck, you open the bag further, revealing that it is indeed full of the little purple flowers.');
    scene.text('Glancing at Grigory in the field again, you quickly leave, trying to make sense of it all.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grigory_flower ?? 0) === 2) {
      scene.actions([
        { label: 'Cute', handler: (st: GameState) => {
    (st as any).grigory_flower = 11;
    (st as any).flowerday = ((st as any).daystart ?? 0);
    scene.text('Your heart races at the sight of the flowers. Excitement filling you.');
    scene.text('You glance at Grigory still in the field, then back at the bag of flowers.');
    scene.text('Grigory has a crush on me! You think with a sudden realization.');
    scene.text('You don\'t know how long you stand there, trying to make sense of the jumble of feelings inside of you.');
    if (((st as any).npc_qw ?? 0)?.['A221'] < 3) {
      scene.text('Do I share those feelings? You wonder, confused.');
      scene.text('Glancing at Grigory in the field one more time, you wander off, confused and unertain of what to do.');
    } else {
      scene.text('You bite your lip, smiling. I can\'t believe that he\'s been leaving flowers for me!');
      scene.text('Not wanting to spoil the anything, you slip away. A spring in your step as you go.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterFlower6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).Not_Intimate ?? 0) === 1) {
    scene.text('After finding the flowers in Grigory\'s truck, you\'ve spent nearly every waking moment thinking about the flowers. You had known Grigory all your life, and to discover that he felt like that about you, at his age, is enough to make you shudder.');
    scene.text('When you see Grigory out by the field, you have to fight down a bit of bile as you decide that this has to be when you confront him.');
    scene.text('A smile just begins to touch his features at the sight of you, but seeing the expression on his face it quickly falters.');
    scene.text('With a sudden expression of concern, he just starts to open his mouth when you jab a finger into his chest, "What the hell is wrong with you?" You shout into his face.');
    scene.text('He jerks back, shock on his face almost as if you had physically hit him. You don\'t give him time to reply before you continue, "What did I ever do to you except talk with you sometimes? You\'ve been stalking me? Leaving flowers where I might find them? How long did you stare through my window when you put those flowers there? Did you get your rocks off watching me sleep?" Your anger starting to subside slightly, you shudder.');
    scene.text('"Just stay away from me you freak." Turning, you storm away from him.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } else {
    scene.text('You\'re overcome by mixed feelings when you see Grigory in the field throwing hay from the back of his truck with a pitchfork. When he sees you approaching, he stabs the pitchfork into the pile of hay so it remains upright, then jumps down, "Kotenok!" He says with a smile, that smile quickly fading when he sees your expression.');
    scene.text('"What\'s wrong?"');
    scene.text('"What do you think is wrong?" You say angrily, "You\'ve been freaking me out! Leaving little tokens of your affection laying around. I didn\'t know who they had come from!"');
    scene.text('"Kotenok," Grigory says, his eyes filled with concern, "I thought it would be cute to leave you flowers. That it would brighten your day."');
    scene.text('"Well it didn\'t! It scared the shit out of me, and when I saw the flowers in your truck and realized it was you who had been scaring me," You\'re on the verge of tears.');
    scene.text('He reaches out towards you, prepared to take you in his arms.');
    scene.actions([
      { label: 'Reject him', handler: (st: GameState) => {
    scene.text('You step back suddenly, "Don\'t touch me!" You manage, your voice thick with emotion, "Just," You pause, trying to make sense of it all, "Just leave me a lone."');
    scene.text('Turning on your heel, you run back towards town.');
  } },
      { label: 'Let him', handler: (st: GameState) => {
    scene.text('When you feel his big arms wrap around you, you melt into his chest, starting to cry, "I was scared," You say softly through your tears.');
    scene.text('"I\'m so sorry," He whispers in your ear, "I never meant for it to be anything but a heartfelt token of my affection."');
    scene.text('No further words are shared for several minutes until he finally says, "Let me show you something."');
    scene.text('He leads you to his truck and helps you into it. Then slipping around to the other side of the vehicle he starts the truck and starts off down the road.');
    scene.text('You wonder where he is taking you, but you don\'t trust yourself to talk just yet. It doesn\'t take long before you realize he\'s headed for his house.');
    scene.text('Once he puts the truck in park just outside of his house, he walks around and opens the door for you. Taking your hand, he leads you inside.');
    scene.text('When you reach the living room, he turns to you, raw emotion in his features. Softly he says, "Wait here, I have something to show you."');
    scene.text('A second later, he vanishes into his bedroom. It\'s not long before he returns with a children\'s book in his hand.');
    scene.text('He sits the book on the small table in the center of the living room. It\'s an old copy of The Golden Key written by Aleskei Tolstoi. ');
    scene.text('The silence stretches for a few seconds before he starts to talk, "You were five, maybe six years old at the time," He begins, his voice deep as he talks softly, "And I was still trying to get over the girl I had lost," He half smiles, but it quickly falters as he continues, "You walked up to me and told me that things would be ok. You handed me this book and told me that your mother would read this book to you, and that it\'s how you knew she loved you," He pauses, thought you aren\'t sure if he\'s waiting for some sign of recognition from me, or just giving a moment for the information to sink in.');
    scene.text('"You gave me the book and told me that some day I could read it to a woman I love so that she will know that I love her too," You can see unshed tears in his eyes as he almost reverently opens the front cover. There pressed flat just inside the cover is a single prairie crocus, "Then you ran to the fence and picked this flower before coming back to me and handing it to me. I\'ll never forget the smile on your face as you threw your arms around my neck, and every time I saw one of those little purple flowers, it made me think of you."');
    scene.text('You can see in his expression his fear that you\'re going to reject him.');
    scene.text('Not knowing what to say, you lean towards him, one hand coming to rest on the cheek of his weathered face. You can feel one of his arms slip around your middle, almost timidly. With your face mere inches from his, you close the last little distance to let our lips touch his.');
    scene.text('With no sign of effort, he sweeps you up in his arms. You cling tightly to him, "I won\'t promise that I\'ll be perfect, I\'m bound to mess things up along the way, but I can picture spending my life with you," You\'re a little surprised that he\'s speaking in such a heartfelt way without the need of his trusty flask, "Will you be my girlfriend? Not just us flirting around town when we see each other or fooling around once in a while, but actually make this the start of something more?"');
    scene.actions([
      { label: 'Yes', goto: ['grigory', 'accept'] },
      { label: 'I\'m not sure', goto: ['grigory', 'reject'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFlower7(s: GameState, scene: SceneBuilder): void {
  scene.text('Entering the garden, you can see flowers on the ground. Dozens of prairie crocus spread into a heart just inside the gate of the garden.');
  // TODO-QSP: If Creepy_path = 1:
  scene.text('Shuddering, you feel a chill settle into your core.');
  scene.text('You step towards the flowers, kicking them. Many of them go flying, scattering across the ground. At least it breaks the pattern.');
  scene.text('Feeling only slightly better, you turn away from the remaining flowers.');
  if (((s as any).Cute_path ?? 0) === 1) {
    scene.text('Seeing the flowers, you smile as your heart races.');
    scene.text('Kneeling beside the flowers, you pick up a single one. For a second, you look at it, wondering who left it there. Then on a sudden impulse you tuck the flower into your hair.');
    scene.text('Maybe whoever left these here for me will see it and finally say something?');
  }
  scene.actions([
    { label: 'Continue', goto: ['grigory', 'dummy'] },
  ]);
  scene.build();
}

function enterFlower8(s: GameState, scene: SceneBuilder): void {
  scene.text('After finding the flowers in Grigory\'s truck, you\'ve spent nearly every waking moment thinking about the flowers. You had known Grigory all your life, and to discover that he felt like that about you, at his age, is enough to make you shudder.');
  scene.text('When you see Grigory out by the field, you feel a flutter of excitement.');
  scene.text('A smile just begins to touch his features at the sight of you.');
  scene.text('You give a little smile of your own in return.');
  scene.text('"Hey there Kotenok," He takes a half step towards you.');
  scene.text('"Grigory," You say softly, the sound carrying impossible weight, "Can we talk?"');
  scene.text('He quickly nods, "Yes, any time," Grigory\'s expression holds on a hint of concern, "What do you want to talk about?"');
  scene.text('"You\'ve been leaving flowers for me," You say, your tone uncertain.');
  scene.text('"Yes Kotenok, I\'ve been leaving flowers for you. Something beautiful that makes me think of you every time I see one."');
  scene.text('You take a step towards him, a question in your eyes.');
  scene.text('His eyes search yours as if trying to find something. Taking a deep breath, he lets out a long sigh, "I suppose you don\'t remember. You were young when it happened."');
  scene.text('He offers you his hand.');
  if (((s as any).intimate ?? 0)=== 1) {
    scene.actions([
      { label: 'Take It', handler: (st: GameState) => {
    scene.text('You barely hesitate before taking his hand. A second later, you find yourself swept into his big arms. You melt into his arms, enjoying his warmth as he nearly crushes you against his powerful chest.');
    scene.text('No further words are shared for several minutes until he finally says, "Let me show you something."');
    scene.text('He leads you to his truck and helps you into it. Then slipping around to the other side of the vehicle he starts the truck and starts off down the road.');
    scene.text('You wonder where he is taking you, but you don\'t trust yourself to talk just yet. It doesn\'t take long before you realize he\'s headed for his house.');
    scene.text('Once he puts the truck in park just outside of his house, he walks around and opens the door for you. Taking your hand, he leads you inside.');
    scene.text('When you reach the living room, he turns to you, raw emotion in his features. Softly he says, "Wait here, I have something to show you."');
    scene.text('A second later, he vanishes into his bedroom. It\'s not long before he returns with a children\'s book in his hand.');
    scene.text('He sits the book on the small table in the center of the living room. It\'s an old copy of The Golden Key written by Aleskei Tolstoi. ');
    scene.text('The silence stretches for a few seconds before he starts to talk, "You were five, maybe six years old at the time," He begins, his voice deep as he talks softly, "And I was still trying to get over the girl I had lost," He half smiles, but it quickly falters as he continues, "You walked up to me and told me that things would be ok. You handed me this book and told me that your mother would read this book to you, and that it\'s how you knew she loved you," He pauses, thought you aren\'t sure if he\'s waiting for some sign of recognition from me, or just giving a moment for the information to sink in.');
    scene.text('"You gave me the book and told me that some day I could read it to a woman I love so that she will know that I love her too," You can see unshed tears in his eyes as he almost reverently opens the front cover. There pressed flat just inside the cover is a single prairie crocus, "Then you ran to the fence and picked this flower before coming back to me and handing it to me. I\'ll never forget the smile on your face as you threw your arms around my neck, and every time I saw one of those little purple flowers, it made me think of you."');
    scene.text('You can see in his expression his fear that you\'re going to reject him.');
    scene.text('Not knowing what to say, you lean towards him, one hand coming to rest on the cheek of his weathered face. You can feel one of his arms slip around your middle, almost timidly. With your face mere inches from his, you close the last little distance to let our lips touch his.');
    scene.text('With no sign of effort, he sweeps you up in his arms. You cling tightly to him, "I won\'t promise that I\'ll be perfect, I\'m bound to mess things up along the way, but I can picture spending my life with you," You\'re a little surprised that he\'s speaking in such a heartfelt way without the need of his trusty flask, "Will you be my girlfriend? Not just us flirting around town when we see each other or fooling around once in a while, but actually make this the start of something more?"');
    scene.actions([
      { label: 'Accept', goto: ['grigory', 'accept'] },
      { label: 'Reject', goto: ['grigory', 'reject'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Take it', handler: (st: GameState) => {
    scene.text('You barely hesitate before taking his hand. A second later, you find yourself swept into his big arms. You melt into his arms, enjoying his warmth as he nearly crushes you against his powerful chest.');
    scene.text('No further words are shared for several minutes until he finally says, "Let me show you something."');
    scene.text('He leads you to his truck and helps you into it. Then slipping around to the other side of the vehicle he starts the truck and starts off down the road.');
    scene.text('You wonder where he is taking you, but you don\'t trust yourself to talk just yet. It doesn\'t take long before you realize he\'s headed for his house.');
    scene.text('Once he puts the truck in park just outside of his house, he walks around and opens the door for you. Taking your hand, he leads you inside.');
    scene.text('When you reach the living room, he turns to you, raw emotion in his features. Softly he says, "Wait here, I have something to show you."');
    scene.text('A second later, he vanishes into his bedroom. It\'s not long before he returns with a children\'s book in his hand.');
    scene.text('He sits the book on the small table in the center of the living room. It\'s an old copy of The Golden Key written by Aleskei Tolstoi.');
    scene.text('The silence stretches for a few seconds before he starts to talk, "You were five, maybe six years old at the time," He begins, his voice deep as he talks softly, "And I was still trying to get over the girl I had lost," He half smiles, but it quickly falters as he continues, "You walked up to me and told me that things would be ok. You handed me this book and told me that your mother would read this book to you, and that it\'s how you knew she loved you," He pauses, thought you aren\'t sure if he\'s waiting for some sign of recognition from me, or just giving a moment for the information to sink in.');
    scene.text('"You gave me the book and told me that some day I could read it to a woman I love so that she will know that I love her too," You can see unshed tears in his eyes as he almost reverently opens the front cover. There pressed flat just inside the cover is a single prairie crocus, "Then you ran to the fence and picked this flower before coming back to me and handing it to me. I\'ll never forget the smile on your face as you threw your arms around my neck, and every time I saw one of those little purple flowers, it made me think of you."');
    scene.text('You can see in his expression his fear that you\'re going to reject him.');
    scene.text('Not knowing what to say, you lean towards him, one hand coming to rest on the cheek of his weathered face. You can feel one of his arms slip around your middle, almost timidly. With your face mere inches from his, you close the last little distance to let our lips touch his. You\'re tense at first, but eventually warm to his kiss, returning it.');
    scene.text('With no sign of effort, he sweeps you up in his arms. You cling tightly to him in surprise, "I won\'t promise that I\'ll be perfect, I\'m bound to mess things up along the way, but I can picture spending my life with you," You\'re a little surprised that he\'s speaking in such a heartfelt way without the need of his trusty flask, "Will you be my girlfriend? Not just us flirting around town when we see each other or anything like that, but actually make this the start of something more?"');
    scene.actions([
      { label: 'Accept', goto: ['grigory', 'accept'] },
      { label: 'Reject', goto: ['grigory', 'reject'] },
    ]);
  } },
      { label: 'Don\'t Take it', handler: (st: GameState) => {
    scene.text('When he reaches for your hand, you take a half step back, uncertain.');
    scene.text('You can see uncertainty, bordering on pain in his eyes.');
    scene.text('"I\'m sorry," You say, "I love you, but only as a friend."');
    scene.text('Mixed emotions swirl in your head as you try to make sense of it all.');
    scene.text('He opens his mouth, but no sound comes out. His expression is hopeless.');
    scene.text('"I need time to think about this," You say finally. Stepping up to him, you give him a quick hug before turning and walking away.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'reject'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterReject(s: GameState, scene: SceneBuilder): void {
  scene.text('"I don\'t know," You say hesitantly.');
  scene.text('You can see Grigory\'s expression start to fall, his embrace lessening until you find yourself slipping from his grasp.');
  scene.text('"I don\'t want to ruin what we already have," You add.');
  scene.text('Grigory takes a half step back from you, then something desperate crosses his features. He reaches out and pulls you to him again, nearly crushing you in his grip as he kisses you with bruising force.');
  scene.text('You squirm in his grip, trying to free yourself. Your squirming turns to ineffective hitting and kicking within seconds. Then just when you think he won\'t let you go until he\'s crushed you, he lets go.');
  scene.text('The look in his eyes scares you. Its haunted, mixed with a lustful hunger that makes you afraid of the large man for the first time in your life.');
  scene.text('"It might be best if I go," You say quickly, taking a step towards the door without taking your eyes off of Grigory.');
  scene.text('The big man tenses, like he\'s going to try stopping you, but he does not move towards you.');
  scene.text('When you reach the door, you open it and turn to run. You\'ve neared the end of his driveway and are just stepping onto the dirt road leading to it when you finally look back.');
  scene.text('There on the porch of his house, Grigory is standing watching you, his flask in hand.');
  scene.text('Turning your attention back to the road, you continue towards the village.');
  scene.actions([
    { label: 'Continue', goto: ['grigory', 'reject'] },
  ]);
  scene.build();
}

function enterAccept(s: GameState, scene: SceneBuilder): void {
  scene.text('"Yes," You say even before you realize you\'ve made a decision.');
  scene.text('The smile the blossoms on Grigory\'s face is enough to make your heart race, and a nervous smile finds its way onto your own face in return.');
  scene.text('Suddenly, his lips are pressed against yours so hard it takes your breath away. The seconds that follow are a blur as he sweeps you off towards his bedroom, pieces of each of your blothing hitting the floor in your wake.');
  scene.actions([
    { label: 'Virgin', handler: (st: GameState) => {
    scene.text('With almost exaggerated care, Grigory lays you on his bed, his big hands taking hold of your panties and sliding your last article of clothing slowly down your legs.');
    scene.text('"I\'m," You start to say, but can\'t quite find the words to tell him you\'re still a virgin, "I\'ve never."');
    scene.text('Realization crosses his features, his eyes widening a little, "We don\'t have to," He begins, but you cut him off.');
    scene.text('"It\'s ok," You tremble slightly, but he has nothing to do with the temperature, "I want this too," Your voice is barely a whisper.');
    scene.text('With a nod, Grigory leans in to kiss you tenderly on the lips. You can feel his big fingers parting the folds of your pussy, his caluses feeling rough on your tender flesh.');
    scene.text('You\'re just starting to feel wet when you feel the tip of his penis bursh your pussy, barely finding your hole before he starts to push forward.');
    scene.text('A kind of pressure starts to build at your opening, bordering on uncomfortable before the tip of his cock slips inside leaving you feeling full in a way you\'ve never experienced before. Not waiting for invitation, he starts to push forward, the fullness turning to discomfort a short distance inside of you.');
    scene.text('You\'ve barely had tie to realize he\'s pressing against your hymen before he jerks his hips forward, shoving a little over half his length into you in a single thrust. Pulling back, he pushes forward a second time.');
    scene.text('You grunt at the pain and bite your lip to muffle the sound.');
    scene.text('Within a few seconds, his hips are moving in slow but steady movements. The pain slowly giving way to discomfort, and the discomfort not quite going away before you start to feel something more pleasant replacing it.');
    scene.text('It\'s not long before Gribory\'s fucking starts to become rougher, his own need evident.');
    scene.text('You can start to feel a pressure starting to build inside of you. Around that same time, Grigory\'s thrusts start to loose their rhythm, becoming erratic as he nears his own orgasm.');
    scene.text('The pressure inside of you continues to build until he feels like you can barely think anymore, a sudden warmth floods your pussy as Grigory fills you with his seed. A whimper escapes your lips at the pleasure of it, though your pussy still aches and quivers around his shrinking shaft, desperate for the release you didn\'t quite experience.');
    scene.text('"I love you Kotenok," Grigory says, short of breath. He slips his arms around you, pulling you into a tight embrace before rolling onto his side beside you. A few seconds later, you can hear the soft sounds of him sleeping.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    { label: 'Not Virgin', handler: (st: GameState) => {
    scene.text('With almost exaggerated care, Grigory lays you on his bed, his big hands taking hold of your panties and sliding your last article of clothing slowly down your legs.');
    scene.text('The moment your panties are off, you spread your legs, exposing your sex to him invitingly.');
    scene.text('He doesn\'t hesitate. Moving on top of you, he kisses your lips. You can feel his hardened member brush your labia, then feeling how wet you already are, he angles his cockhead towards your opening and slides inside with a single firm thrust.');
    scene.text('You moan with pleasure, your legs wrapping around his torso to pull him deeper.');
    scene.text('Within seconds, he\'s thrusting into you with an intensity you\'ve never felt before. Wet sounds fill the air as your bodies meet rapidly. You can feel a growing pleasure deep inside of yourself that starts to crest into an incredibly intense orgasm. When your pussy clamps down around his cock, he groans. You can feel him pulse inside of you, twitching as he begins to pour his seed into your depths.');
    scene.text('"I love you Kotenok," Grigory says, short of breath. He slips his arms around you, pulling you into a tight embrace before rolling onto his side beside you. A few seconds later, you can hear the soft sounds of him sleeping.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterField1(s: GameState, scene: SceneBuilder): void {
  scene.text('When you near the field, you can see Grigory working in the field with some of the animals. You pause to watch, but it\'s clear that he is busy so you don\'t want to interrupt.');
  if (((s as any).npc_qw ?? 0)?.['A221'] < 3) {
    scene.text('Eventually he looks your way, smiling when he notices you. He gives you a little wave that you quickly return.');
    scene.text('As he goes back to work, you continue on your way.');
  } else {
    scene.text('When he finally looks your way you find yourself pleased as a smile spreads across his face.');
    scene.text('Raising two fingers to his lips, he kisses them then holds them out in your direction across the field.');
    scene.text('When he does, you put both hands over your heart and smile back at him.');
    scene.text('Feeling unexpectedly happy, you give him a little wave then continue on your way.');
  }
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterField2(s: GameState, scene: SceneBuilder): void {
  scene.text('You can see Grigory standing beside his old truck while looking out at the field. Following his gaze, you notice that he\'s watching a bull mount one of the female cows part way across the pasture.');
  scene.text('Grigory shifts where he stands, one hand adjusting the tent in the front of his pants.');
  scene.actions([
    { label: 'Leave before this gets weird', goto: ['grigory', 'field_weird'] },
    { label: 'Tease him a little about it', goto: ['grigory', 'field_tease'] },
    { label: 'Watch the scene unfold', goto: ['grigory', 'field_watch'] },
  ]);
  scene.build();
}

function enterFieldWeird(s: GameState, scene: SceneBuilder): void {
  scene.text('Quietly, you make your exit before Grigory can notice that you are there.');
  scene.actions([
    { label: 'Continue', goto: ['gad_field', 'field'] },
  ]);
  scene.build();
}

function enterFieldTease(s: GameState, scene: SceneBuilder): void {
  scene.text('"So this is what passes for porn around here?" You tease unable to hide your smirk.');
  scene.text('Grigory sputters, half turning to hide his state of arousal, "I, uh," He stammers, unable to find anything to say, his face is crimson with embarrassment.');
  scene.actions([
    { label: 'Tease him more', handler: (st: GameState) => {
    scene.text('"Somehow I don\'t think she\'s going to feel a thing after having that bull inside her," You say with a giggle.');
    scene.text('You can see his mouth open like he\'s going to say something, then snap shut again. A second later it opens again, "I uh, uh, got to go."');
    scene.text('Quickly getting into his truck, he starts the engine and drives off.');
  } },
    { label: 'Brush it off', handler: (st: GameState) => {
    scene.text('"It\'s ok, I won\'t say anything to anyone," You say, not wanting to further embarrass him.');
    if ((!((st as any).grig_caught ?? 0))) {
      (st as any).grig_caught = 1;
      scene.text('"Does that really turn you on?" You ask curiously.');
      scene.text('Grigory doesn\'t look up from where he seems to be pondering his feet, but he nods his head.');
      scene.text('Reaching for his flask, he takes a sip, but doesn\'t put it away like he usually does.');
      scene.text('"I didn\'t know that there were actually people into that kind of thing," Your voice is full of surprise.');
      scene.text('"I\'m really sorry," For such a large man, his voice is surprisingly timid, "I should probably go now."');
      scene.text('You take a few steps closer to him, "It\'s alright," You say to him reassuringly, "I\'ll pretend I never saw anything if it makes you feel better," Stepping close to him, you give him a little hug.');
      scene.text('He tenses initially, then relaxes, his face near your head as he inhales deeply.');
      scene.text('You\'re a little surprised when he puts his hands on your hips and pushes you gently away, "Thank you for being understanding my little Kotenok," His voice is raw with emotion when he speaks.');
      scene.text('"You\'re my friend right? We can\'t let your little kink get in the way of a good thing," You meet his gaze. His eyes never leave your own as he takes another small sip from his flask.');
      scene.text('"Friend," He says softly, "Right."');
      scene.text('Stepping back towards him, you give him one more little hug before letting go again, "Just don\'t let anyone else know about this," You say with comical sternness, "It\'s our secret, and our secret alone," You playfully cross your arms over your chest while putting on your best fake serious face.');
      scene.text('Grigory laughs suddenly, much of the tension leaving him, "You\'re a very special girl," He says softly, you\'re not entirely sure he was talking to you when he said it. More firmly he adds, "I should really get back to work."');
      scene.text('With a self conscious smile and a half wave, he returns to his truck and leaves.');
    } else {
      scene.text('"This is starting to become a habit," You say, shaking your head.');
      scene.text('"Sorry," He says softly in reply.');
      scene.text('"It\'s ok, if it makes you happy, that\'s what\'s important," You tell him reassuringly.');
      scene.text('He gives you a little smile, "Thank you for being so understanding Kotenok."');
      scene.text('After the silence stretches for a few seconds, he says, "I should get back to work." Reaching out, he puts his arm around you in a half hug. You return it without a second thought, savoring the warmth of his large body for just a second before releasing him again.');
      scene.text('"don\'t let me stop you," You say with a grin. Waving, you watch as he gets in his truck and drives off.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFieldWatch(s: GameState, scene: SceneBuilder): void {
  scene.text('Staying quiet, you watch the animals mating in the field. You\'re a little surprised at just how quickly it\'s over. The bull mounts its mate, thrusting savagely for maybe half a minute before leaving its mate behind, massive amounts of cum dripping from her vagina.');
  scene.text('Turning your attention back to Grigory, you can see that his hand is now inside of his pants, moving rhythmically.');
  scene.text('You can feel your own arousal growing slightly at the sight.');
  scene.actions([
    { label: 'Just watch', handler: (st: GameState) => {
    scene.text('Breathless at the sight of him stroking himself, you stand there and watch.');
    scene.text('For a couple of minutes Grigory continues, then suddenly stiffens for a moment.');
    scene.text('Becoming aware of his surroundings again, he looks around quickly, spotting you. His expression becomes shocked.');
    scene.text('"So, what you been up to?" You try to make it sound like you just arrived.');
    scene.text('"Not much Kotenok," He replies uncertainly.');
    scene.text('You move closer, leaning against the truck beside him, "It\'s a nice day," You try to sound innocent.');
    scene.text('You see him pull his flask out of the corner of his eye and take a small sip, "And the view just keeps getting better," He says softly, looking straight at you as he does so. You\'re sure he didn\'t mean for you to hear. When you blush he quickly looks away.');
    scene.text('Almost absently, he offers you the flask. Taking it, you raise it to your lips, barely tasting the fluid before handing it back. He quickly takes another sip before returning it to his back pocket.');
    scene.text('"I should get going, I\'ve got plenty that still needs to be done today."');
    scene.text('You put one arm around him in a little hug. In return, he sweeps you up in a big hug, your feet coming off the ground as he does so.');
    scene.text('You\'re still thinking about what you saw as he leaves.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('Aroused by the sight, one of your hands goes to your crotch, starting to rub yourself through your clothing. You\'re barely aware of the fact that your motions are almost perfectly timed with Grigory\'s own movements.');
    scene.text('You\'re so caught up in what you\'re doing that you don\'t even realize that he finished and is now openly staring at you. When your body shudders with release, you open your eyes and see him looking straight at you with a hungry look in his eyes.');
    if (((st as any).npc_qw ?? 0)?.['A221'] < 3) {
      scene.text('"Oh my God," You blurt, blushing bright red.');
      scene.text('You see him take a slow sip from his flask, "It\'s OK, I didn\'t mind."');
      scene.text('He swallows visibly, seeming to snap out of a trance as he looks away.');
      scene.text('The silence stretches on until it starts to be uncomfortable, "You might be a little embarrassed," He starts, "But you don\'t have to be. That was the hottest thing I\'ve seen in a long time," He can\'t quite seem to look at you as he says it.');
      scene.text('"Thanks," You pause, "I think."');
      scene.text('You glance at him, seeing a wistful smile on his angular face as he looks out over the field in the general direction of the bull.');
      scene.text('"I\'ll see you around," You finally say, giving him a little wave.');
      scene.text('You barely take two steps before he closes the distance between you, sweeping you up in his arms in a hug that is just a little too tight. Sitting you back down, "Uh, yeah, " He fidgets suddenly, "See you around Kotenok."');
      scene.text('Without another word the two of you part ways.');
    } else {
      scene.text('"Sorry," You mumble.');
      scene.text('Grigory grins, "Nothing to be sorry for," He steps towards you, slipping his arms around your middle. Giving you an affectionate squeeze, he lifts you off the ground, twirling you around in a circle before sitting you back down, "My little Kotenok," He finishes affectionately.');
      scene.text('You have to stand on your tiptoes, but you rise up enough to kiss him lightly on the lips, "You know, you\'re kind of sweet when you want to be," I say with a little laugh.');
      scene.text('With a big grin, and a hint of color creeping onto his cheeks, he replies, "And don\'t you forget it."');
      scene.text('You see him take a deep breath, then let it all out in a rush, his smile fading suddenly, "Unfortunately, I need to get back to work."');
      scene.text('"Maybe I\'ll see you a little later then?"');
      scene.text('Taking hold of your hips, he picks you up again, this time pulling you close to give you a firm kiss before sitting you back down, "Later then."');
      scene.text('A minute later, Grigory\'s truck is disappearing down the road.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
    { label: 'Move closer', handler: (st: GameState) => {
    scene.text('Without wanting to draw attention, you move closer to Grigory, your gaze alternating between him and the bull in the field');
    scene.text('Not as sneaky as you had intended, he quickly notices your approach.');
    if (((st as any).npc_qw ?? 0)?.['A221'] < 3) {
      scene.text('"I, uh," He sputters, looking for a way to explain himself, "Well shit." He finally blurts.');
      scene.text('"Don\'t stop on my account," You\'re surprised at the words that leave your mouth.');
      scene.text('Grigory looks at you, clearly surprised at the words as well.');
      scene.text('"Having a good day?" You ask, trying to break the stretching silence.');
      scene.text('"Um, yeah, I guess so," He says timidly, not meeting your eyes.');
      scene.text('The two of you talk for several minutes, the conversation slowly becoming less awkward as you do so. After a while, he excuses himself and leave so he can get back to work.');
    } else {
      scene.text('Grigory blushes, mumbling something unintelligible.');
      scene.text('You giggle softly at his discomfort, but finish closing the distance between you, no longer trying to hide your presence. Ignoring what he was just doing, you lean up against him.');
      scene.text('With a sigh, he slips a big arm around you.');
      scene.text('The two of you remain there for a long time, just enjoying the closeness to each other. You\'re snapped out of your musings when he gives you a little squeeze, "I should get back to work Kotenok."');
      scene.text('After an affectionate goodbye, the two of you part ways.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterField3(s: GameState, scene: SceneBuilder): void {
  scene.text('Seeing Grigory, you start to walk in his direction just seconds before he notices you.');
  scene.text('A big smile appears on Grigory\'s face when he sees you approaching, "My Kotenok," He says almost shyly.');
  scene.text('"My Grigory," You reply as you greet him with a hug.');
  scene.text('"What brings you out here today Kotenok?" He asks after a long silence.');
  scene.text('"What, I can\'t just come see you?" You break the hug with mock indignation. You find yourself unable to suppress a smile when you see how happy he looks.');
  scene.text('Stepping close to him again, you half hug him as you press against his side. You close your eyes, taking a deep breath. From where your ear is pressed against his side, you can hear his heartbeat. He puts one of his arms around you, holding you close.');
  scene.text('This is actually really nice, you think.');
  scene.text('You stand there like that for a long time before he finally speaks, the rumble of his voice filling your ears, "Kotenok," There\'s a long pause, like he wants to say something more. Eventually you look up at him, "I should get back to work," He finally adds.');
  scene.text('"I understand," You say, a little disappointed. ');
  scene.text('That disappointment is short lived however as he sweeps you up in his arms suddenly, pressing his lips against yours in a rough but affectionate kiss before sitting you back down.');
  scene.text('The two of you say your goodbyes and finally part ways. You can\'t help but think about how good it felt to be so close to him.');
  scene.actions([
    { label: 'Be Friendly', handler: (st: GameState) => {
    scene.text('Grigory smiles when he sees your approach, raising a hand in greeting.');
    scene.text('You wave back, "Saw you out here and wanted to say hi."');
    scene.text('Pulling his flask, he takes a little sip before returning it to his pocket, "Well, hi then Kotenok," He replies warmly.');
    scene.text('Stepping close, the two of you talk for several minutes before he has to get back to work.');
    scene.actions([
      { label: 'Say Goodbye', handler: (st: GameState) => {
    scene.text('"I enjoyed getting to talk to you again," You admit, "I\'ll be looking forward to the next time I see you." With a smile, you wave and start to make your exit.');
    scene.text('Grigory smiles broadly, waving goodby as you leave.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
      { label: 'Hug him goodbye', handler: (st: GameState) => {
    scene.text('He seems surprised when you reach out, putting your arms around his powerful frame. Your arms barely reach all the way around his middle.');
    scene.text('"Whoa," Grigory says in surprise, then bends down slightly as he wraps his own big arms around you.');
    scene.text('The hug lingers, then just before it starts to become awkward, he lifts you off of your feet and twirls you around once before sitting you back on your feet. You can\'t help but laugh as you remember all the times he did exactly the same thing to you when you were little.');
    scene.text('"I really liked getting to see you again," You say through your dwindling laughter, "I hope to see you again soon."');
    scene.text('You can see that he has a big grin on his face, one that you suspect matches your own, "I\'ll be around."');
    scene.text('With a friendly wave, the two of you part ways.');
    scene.text('Reaching out, you wrap your arms around his large frame. You can barely feel your fingertips touch with your arms wrapped around his middle.');
    scene.text('"A man could get used to this," You can hear Grigory smiling as he says it. His powerful arms slip around you to return the hug.');
    scene.text('The hug lingers comfortably for several seconds. Then, sweeping you up in his arms, he spins you around once just like he used to when you were little before sitting you back down on the ground. You laugh happily.');
    scene.text('"It was nice seeing you again," You say through your dwindling laughter.');
    scene.text('You can see that he has a big grin on his face, one that you suspect matches your own, "I\'ll be around."');
    scene.text('With a friendly wave, the two of you part ways.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
    ]);
  } },
    { label: 'Be a Tease', handler: (st: GameState) => {
    scene.text('The big awkward man is easy to get excited, you think with a smile.');
    scene.text('When he notices you, he raises a hand in greeting. In return, you wink and blow him a kiss.');
    scene.text('He seems stunned for several seconds, and you\'re barely able to suppress a giggle. As you continue walking, you see him reach for his flask as you pass him without a word.');
    scene.actions([
      { label: 'Continue', goto: ['gad_field', 'field'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDrunk(s: GameState, scene: SceneBuilder): void {
  scene.text('Walking through the little villiage, you experience a moment of vertigo that nearly takes you off your feet.');
  scene.text('Thinking little of it, you keep stumbling down the road.');
  scene.text('Stumbling again, you start to fall, but suddenly the world shifts and you\'re flying instead.');
  scene.text('It takes you a few seconds to realize that someone just caught you and is still holding you in their arms, having swept you off of your feet.');
  scene.text('Disoriented, you start to struggle until you hear a familiar voice, though you\'re too drunk to place it, "Easy Kotenok, it\'s just me."');
  scene.text('You find the rumbling voice comforting, and you stop struggling. Instead, you try to look up at the big man carrying you, "Yyeti?"');
  scene.text('The man chuckles lightly, "It would break your grandparents\' hearts to see you like this," He says to himself. You can feel him stop walking, only becoming aware of the gintle swaying as it comes to an end.');
  scene.text('"Now what?" He asks.');
  scene.text('"Dunno," You slur.');
  scene.text('Another soft laugh, "Wasn\'t asking you Kotenok," He gives you an affectionate squeeze. You close your eyes and just enjoy the warmth of the big man cradling you so close to his body.');
  scene.text('"Only other place I can think of is mine," A long pause, "Hope you don\'t take this the wrong way," He seems to say to himself.');
  scene.text('A second later you begin to feel the swaying of his footsteps again. Within seconds you drift to sleep.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('With a groan of discomfort, you feel yourself being sat in a cold leather chair, the chill of the night making you shiver as the big warm thing you had snuggled against is gone.');
    scene.text('"It\'s ok," You hear someone say softly. The voice is familiar, Grigory? What\'s he doing with me?');
    scene.text('The train of thought is interrupted as he wraps his big warm coat around you. With a little sigh, your world fades once more.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You\'re woken again when you feel someone picking you up. You struggle ineffectively for a second before you\'re able to focus on the big man holding you, "Grigory?" You slur heavily, "What uuh doin?"');
    scene.text('"It\'s ok Kotenok," Grigory says softly, "You\'re drunk and I brought you home."');
    scene.text('"Kaaaaay," You manage, closing your eyes and enjoying the feel of his big body pressed against your own.');
    scene.text('The creak of wood causes you to open your eyes again, the world tilting wildly for a second. You are almost sick but close your eyes until it passes. When you finally focus on the room around you, "Not iiih hoooome."');
    scene.text('"No, it\'s mine," Grigory\'s voice says soothingly, "Figured it was here or your grandparents place, and they\'re probably happier not knowing their granddaughter is drunk."');
    scene.text('He shifts his grip, cradling you, but only with one arm for a few seconds. You can tell he\'s doing something, but you can\'t focus enough to figure out what. A moment later, he lays you in a large bed, the covers pulled back already. You make a small grunt of protest when you feel him pull your shoes free of your feet, but can\'t bring yourself to mount a real objection. He doesn\'t seem to pay any mind to your protest anyway. With almost exaggerated care, he tucks you in, fully clothed.');
    scene.text('"Sweet dreams my little Kotenok," He says softly.');
    scene.text('"Youuuu sweet," You mumble, closing your eyes.');
    scene.text('You feel something press softly against your forehead for a second. You wonder if he just kissed your forehead, but can\'t quite will yourself to open your eyes.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You wake to the smell of cooking eggs and a pounding headache.');
    scene.text('Opening your eyes, you have a moment of disorientation until half remembered fragments of the previous night start coming back to you.');
    scene.text('Part of you wants to remain in the warm bed forever, but you know you have to get up sometime. Pushing back the covers, you slip from the bed.');
    scene.text('Padding across the room towards the door, you see your shoes sitting beside it. Your world tilts unexpectedly as you reach for them, but you manage to stay upright.');
    scene.text('Once through the door, you follow the scent of eggs and coffee. Reaching the kitchen, you see Grigory at the stove fixing breakfast. Eggs, toast, coffee, and a jar of what looks like jam your grandmother might have made.');
    scene.text('You watch as he scoops a pair of eggs onto each of two plates then turns towards the table. He freezes suddenly when he sees you.');
    scene.text('His easy manner becomes almost instantly awkward, a goofy smile finding its way onto his face as he blushes a little, "Kotenok," He says, pausing for a second before sitting the plates at a modest sized table, "Was making you breakfast," He gestures at the plates he just sat down.');
    scene.text('"Thank you Grigory," You say softly before walking to the table. Sitting down, he does the same across from you.');
    scene.text('"Dig in," He says, putting action to words as he spreads some jam on his toast and begins to eat.');
    scene.text('The two of you eat in silence for a while before Grigory finally speaks, "I can give you a ride back to your grandparents\' house in a little while if you\'d like."');
    scene.text('"Thank you," You reply, feeling better now that you have some food in your belly, "And thank you for last night too. I owe you."');
    scene.text('A wistful smile touches his lips, "Want to pay me back?" His smile grows into an open grin.');
    scene.text('Suddenly cautious of his intentions, "Depends on what you have in mind," You reply, saying each word slowly.');
    scene.text('"Help me wash the dishes?"');
    scene.text('You laugh openly at the request, tension you didn\'t know was filling you drains from your body, "Sure."');
    scene.text('Finishing your meal, you gather up the dishes and head for the sink. When you start the water, you\'re a little surprised to see Grigory join you with a dish towel.');
    scene.text('For the next few minutes the two of you wash the breakfast dishes. Once done, "Thank you, want that ride now Kotenok?"');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRomanticEvent(s: GameState, scene: SceneBuilder): void {
  scene.text('You\'re waling down the road, only half paying attention to where you are going as you look up at the night sky.');
  scene.text('Without warning, your world suddenly shifts as your feet are swept out from under you. You let out a surprised "eep!"');
  scene.text('"You know, good girls don\'t stay out this late," Grigory teases.');
  scene.text('You look towards the voice, seeing the man who just swept you off your feet in the most physical of ways.');
  scene.text('Reaching out, you wrap your arms around Grigory\'s neck, feeling small but protected in the big man\'s arms, "Was just enjoying the evening."');
  scene.text('"Well Kotenok," You can as much feel as hear his voice as he cradles you against his chest, "If you\'d like, you can enjoy the evening with me?');
  scene.text('The two of you reach the river and start to walk along the shore until you reach a secluded little bend in the river where you can no longer see any sign of the town behind you.');
  scene.text('Grigory sits, using his big arms to pull you into his lap, "This is one of my favorite places Kotenok, the way the stars and moon reflect off the water late at night, always makes me feel content."');
  scene.text('You snuggle closer to him, your head against his chest as you enjoy the warmth of his body against your own.');
  scene.text('For a long time, the two of you sit along the shore, you can hear his heartbeat from where your head is pressed against his chest, the rhythmic beating putting you at ease.');
  scene.text('You start to drift off, almost falling to sleep when the rumble of his voice demands your attention, "Kotenok? You going to fall asleep on me? Maybe we should go."');
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('You sigh softly, then stretch to kiss him lightly on the cheek, "Maybe another time."');
    scene.text('Grigory sighs heavily, "Another time then," He says, sitting you down again.');
    scene.text('He engulfs you in a gentle hug, then lets you go again. When he lets you go, he pulls his flask and takes a little sip.');
    scene.text('You watch him as he starts to walk away, looking a little crestfallen.');
    scene.actions([
      { label: 'Continue', goto: ['gadukino', ''] },
    ]);
  } },
    { label: 'Accept', handler: (st: GameState) => {
    scene.text('"Sounds like fun," You say with a smile. He hugs you to him for a second, then lowers you gently back onto your feet. Reaching out, he takes your hand, his big hand engulfing yours in its warmth.');
    scene.text('Setting a liesurely pace, the two of you begin to walk down the road. For several minutes, the two of you walk in silence, enjoying each other\'s presence.');
    // TODO-QSP: If temper < 5:
    scene.text('You shiver slightly in the cold night air, making you aware of the chill. Grigory seems to notice, letting go of your hand long enough to take his jacket off and drape it around you. His lingering body warmth makes the coat feel almost like an oven.');
    scene.text('A little smile touches your lips and you savor the feeling. You look down at yourself, noticing that his jacket is so big that it hangs around you like a dress, reaching just past your knees.');
    scene.text('Grigory\'s amused expression tells you that he\'s noticed the same.');
    scene.text('Instead of taking your hand again, this time he slips an arm around you.');
    scene.text('Taking a deep breath of the evening air, Girogy lets go of your hand. You start to look towars him, wondering what he might be up to, only to have him slip his arm around you, hugging you to his side.');
  } },
    { label: 'Stay a little longer', handler: (st: GameState) => {
    scene.text('"Can\'t we stay a little longer?" You ask, stifling a yawn as you say it.');
    scene.text('You more feel then hear his soft chuckle, "Whatever makes you happy Kotenok," He sounds happy when he speaks.');
    scene.text('This is nice, you think, closing your eyes for a moment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('The sky is much brighter when you open your eyes again. The second thing you notice is that you\'re in bed.');
    scene.text('You roll part way over, the weight arcoss your hip shifting as you do so. You look down to see Grigory\'s arm draped across your middle. With a little smile, you turn the rest of the way towars him, finding him in his pajamas, under the covers with you. ');
    scene.text('Grigory makes a soft sound, almost a snore, in his sleep. Your little smile blossoms into an amused grin when you see that he\'s been drooling in his sleep.');
    scene.text('"Good morning Grigory," You say softly.');
    scene.text('Grigory smiles, his eyes opening a second later, "Good morning Kotenok."');
    scene.text('Leaning forward, you give him a little kiss on the cheek, careful to avoid the drool, before quickly slipping out of bed.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  } },
    { label: 'Lets go', handler: (st: GameState) => {
    scene.text('"Where were you thinking?" You ask.');
    scene.text('"I can walk you back to your Grandparent\'s home, or you could come back to mine," He looks you in the eye, a hopeful look on his face.');
    if (((st as any).grandmaQW ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Grandparents Home', handler: (st: GameState) => {
    scene.text('"I should probably get back to my Grandparent\'s place," You say.');
    scene.text('You see a rueful smile cross Grigory\'s face, "Ok," Standing, he gives you a little hug, your feet dangling off the ground, before he lowers you to stand on your own two feet again.');
    scene.text('Slipping his arm around you, you lean against him as the two of you make the walk back to your Grandparent\'s home.');
    scene.text('Once there, the two of you say your goodbyes, him leaning down to kiss your lips lightly. He slowly straightens, his eyes on yours, "Until next time Kotenok."');
    scene.text('You\'re unable to hide a little smile, "Until next time Grigory."');
    scene.text('Turning on his heel, he starts to wander back towards the town\'s center.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gphouse', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Grigory\'s Home', handler: (st: GameState) => {
    scene.text('Stretching to reach, you kiss him on the lips. When he returns it, you can\'t help but smile into the kiss, feeling his tongue probe into your mouth.');
    scene.text('He finally breaks the kiss, leaving you breathless, "My place it is."');
    scene.text('Standing up, he sweeps you into his arms. You kick your legs playfully, throwing your arms around his neck.');
    scene.text('Holding you effortlessly, he carries you back towards town, only sitting you back down when he nears his truck.');
    scene.text('He opens the door for you and you get in. A few seconds later, he\'s in his side of the truck and you\'re both heading down the road towards his house.');
    scene.text('At his house, you get out your side of the truck before he can get the door for you. He leads you into the house, taking your hand as he makes his way into his bedroom.');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDrunkLate(s: GameState, scene: SceneBuilder): void {
  scene.text('"Kotenok!" Grigory\'s voice startles you.');
  scene.text('You look around, trying to peer into the dark shadows between houses, "Grigory?"');
  scene.text('"I love you Kotenok," He calls loudly. The sound of his voice is enough for you to finally figure out where he is.');
  scene.text('Turning towards the darkness between two buildings, "Are you ok Grigory?"');
  scene.text('The big man finally emerges from the shadows, his steps staggered. After a few paces, he reaches for the wall to steady himself. With his other hand, he raises his flask to his lips. A look of concern crosses his features, then he holds the flask out in front of himself. Tipping it upside down, nothing comes out, "Damn," He mutters before returning the flask to his pocket.');
  if (((s as any).Flower_path_not_complete ?? 0) === 1) {
    scene.text('"Grigory, I think you\'re drunk," You say, "Maybe you should go home and get some sleep? You\'re talking nonsense."');
    scene.text('Grigory pauses, leaning heavily against the building. Meeting your gaze, he reaches for his flask again, raising it almost to his lips before seeming to remember that it\'s empty. Making a sour face, he puts it away again.');
    scene.actions([
      { label: 'Offer to help him', handler: (st: GameState) => {
    scene.text('"Do you need help getting home?" You ask softly, stepping towards him.');
    scene.text('"I love you Kotenok," He mumbles, not quite meeting your eyes as he says it.');
    scene.text('"No you don\'t Grigory, you\'re just drunk," You step up close to him, looking into his soft eyes, "Let me help you get home."');
    scene.text('Grigory opens his mouth like he\'s going to say something, then closes it again. He reaches for his flask again, but as soon as his fingers come in contact with it, he sighs heavily and lets his hand fall back to his side.');
    scene.text('"Can you walk?" You ask, knowing full well that he\'s far too large for you to effectively support him, "I can help steady you a little if you need it."');
    scene.text('His voice is a little sad when he replies, "Ok," Pushing off from the wall, he reaches out and places a big hand on your shoulder, reminding you just how large he really is.');
    scene.text('Slipping up beside him, you put your arm around him to help steady him, "Where\'d you park?" You ask him.');
    scene.text('His only reply is a vague gesture towards the outskirts of town.');
    scene.text('You start walking in that direction. At times, the massive man leans on you heavily enough that it nearly drives you to your knees, but for the most part, he stays upright with little effort. Your back is beginning to ache from the effort when you finally see his pickup parked beside the field just outside of town.');
    scene.text('Once there, he reaches out for his truck, opening the door before turning to look at you. He looks like he wants to say something, but refrains from doing so.');
    scene.text('"You going to be ok getting the rest of the way home?" You ask.');
    scene.text('He nods, swaying slightly as he does so, "Yes," He says, his voice subdued, "Thank you Kotenok."');
    scene.text('You watch as he climbs into the vehicle with some difficulty, then fumbles with the keys for a moment before you hear the engine rumble angrily to life.');
    scene.text('A minute later, all you can see are the tail lights of the truck as he drives home.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
      { label: 'Tease him a little bit', handler: (st: GameState) => {
    scene.text('Seeing Grigory looking at you with adoration in his eyes, you can\'t help yourself. You bite your lip playfully and let one hand come up to cup your breast.');
    scene.text('Why is he so fun to tease? You think as a smile spreads on your face.');
    scene.text('"Kotenok, please," Grigory slurs, his hungry eyes watching every move you make, "Stop teasing me like this."');
    scene.text('"Teasing you?" Your tone is playful, "I wouldn\'t tease you, would I?"');
    scene.text('You see a jumble of emotions cross his face as he struggles to maintain his composure.');
    scene.text('You jump a little in surprise as he pushes off of the wall suddenly. For a split second, you think he\'s going to attack you, then his expression turns sad. Turning his gaze away from you, he starts to walk drunkedly away.');
    scene.text('You\'re unable to stifle a giggle as he leaves.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"Grigory, you\'re drunk," You say.');
    scene.text('"Love you Kotenok," Grigory says in a mumble, taking a couple more unsteady steps towards you.');
    scene.text('You wonder if you should try to steady the big man, or just trust him to keep himself upright.');
    if (((s as any).Not_Romanticly_involved ?? 0)===1) {
      scene.text('"We\'ve already talked about this. I don\'t have those kind of feelings for you."');
      scene.text('Grigory pauses, leaning heavily against the building. His eyes are filled with sadness, he reaches for his flask again, raising it almost to his lips before seeming to remember that it\'s empty. Making a sour face, he puts it away again.');
      scene.text('"You should get home, sleep it off," You add.');
      scene.text('He opens his mouth like he\'s going to say something, but before he can utter a word, you turn and walk away.');
      scene.actions([
        { label: 'Continue', goto: ['grigory', 'dummy'] },
      ]);
    } else {
      scene.text('"I know you do," You say with a fond smile on your lips.');
      scene.text('Gregory\'s smile is warm, reachig his eyes. He takes a couple more unsteady steps towards you.');
      scene.text('Seeing him waver on his feet, you step forward quickly and slip an arm around him to steady the large man. The sudden weight he puts on you is almost enough to send you both tumbling to the ground, but somehow you both stay upright.');
      scene.text('"Where\'d you park?" You ask him. ');
      scene.text('His only reply is a vague gesture towards the outskirts of town.');
      scene.text('You start walking in that direction. At times, the massive man leans on you heavily enough that it nearly drives you to your knees, but for the most part, he stays upright with little effort. Your back is beginning to ache from the effort when you finally see his pickup parked beside the field just outside of town.');
      scene.text('Once there, he reaches out for his truck, opening the door before turning to look at you.');
      scene.text('"You want me to ride home with you? Make sure you get there ok?" You ask, as you look up into his big soulful eyes.');
      scene.text('He leans forward, kissing the top of your head in answer. You can smell the alcohol on him as he does so. Even so, you tilt your head up and kiss him on the chin before he turns to the truck.');
      scene.actions([
        { label: 'Let him go alone', handler: (st: GameState) => {
    scene.text('Hoping he makes it home ok, you watch him climb into the vehicle. When he looks at you, you blow him a little kiss, then wave as he starts to drive away. The last you see of him is his smile and a casual wave in return.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
        { label: 'Go with him', handler: (st: GameState) => {
    scene.text('Moving quickly, you get into the passenger side of the vehicle right as the engine roars to life. A few seconds later, the truck is in motion.');
    scene.text('After a short drive, Grigory slows the vehicle as he pulls to a stop in front of his home.');
    scene.text('There\'s a sudden silence as he turns the key, killing the engine. Then without removing the key, he swings open his door and starts to get out. The truck rocks heavily when he grabs his door for support.');
    scene.text('Realizing he\'s leaving his keys, you reach over and remove them from the ignition before getting out your own side of the truck.');
    scene.text('By the time you close the door behind yourself, Grigory is already walking clumsily towards the house. At the door, the large man starts to pat his pockets, looking for the key to the front door. You jingle the keys he had forgotten and are rewarded with a sheepish grin from him. Stepping to the door, you unlock it and turn the knob to open it.');
    scene.text('Gregory enters a couple of paces behind you, having the presence of mind to close the door behind himself.');
    scene.text('You turn on a light, then walk further into the house to turn the bedroom light on. Somewhere behind you, you hear him bump into something. ');
    scene.text('Turning to look, you see Gregory only half way across the living room of the house, an end table several inches from where you had last seen it beside him. His shirt is on the floor behind him and his pants are just sliding past his knees. All the while, he\'s swaying dangerously as he tries to pull first one, then the other, boot off his feet.');
    scene.text('When he reaches the bedroom door, he\'s managed to loose his pants just a few paces behind himself and is reaching for his underwear. He gives you a smile that would seem lecherous from anyone else, but just looks cute on his weathered face.');
    scene.text('Stepping further into the room, you pull back the covers for him.');
    scene.text('"Kotenok," He says drunkedly, "I\'m going to make love to you." ');
    scene.text('You turn just in time to see him half reach, half fall, towards you. You quickly move out of the way to avoid being crushed by him.');
    scene.text('He ends up falling about two thirds onto the bed, and after a couple of minutes, you\'re able to get him the rest of the way onto the bed. By then, you can hear the soft sounds of his snoring.');
    scene.text('You can\'t help but smile while looking at him, his naked ass sticking up into the air. You quickly pull the covers over him.');
    scene.text('After a few seconds consideration, you pull remove your own shoes, then pull back the covers on the other side of the bed before crawling in beside him.');
    scene.text('Snuggling up against the warmth of his big body, you feel him roll onto his side, one of his arms slipping around your middle. "Love you Kotenok," He mumbles in his drunken sleep.');
    scene.text('Smiling to yourself, you close your eyes and drift off to sleep.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (((33 - ((st as any).hour ?? 0)) * 60) - ((st as any).minut ?? 0));
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (100);
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (100);
    qspCall(st, 'stat', '');
    scene.text('You\'re woken by the early morning sun peeking past the drapes of the bedroom. You start to shy away from the light, but then realize that you\'re alone in the bed.');
    scene.text('Looking around the room, you see that Grigory is nowhere to be seen. ');
    scene.text('"Grigory?" You call softly when you finally motivate yourself to crawl out of bed, "Grigory? Where\'d you get off to?"');
    scene.text('With no response, you exit the bedroom and start to look around. The first thing you notice is that all of Grigory\'s clothes have been picked up, and that the end table has been moved back to where it belongs. The second is when you look out the living room window and notice that his truck is gone.');
    scene.text('You sigh, then start back toward the bedroom to grab your shoes and tidy up before leaving. You\'re almost to the front door when you notice a note stuck to the door.');
    scene.text('Sorry about last night. I had a bit too much to drink. Please forgive me.');
    scene.text('I was going to wake you this morning, but you looked like a sleeping angel and I couldn\'t bring myself to wake you up. I hope you slept well.');
    scene.text('Help yourself to the fridge for breakfast, maybe I\'ll see you a little later.');
    scene.text('Love you Kotenok,');
    scene.text('Grigory</b>');
    scene.text('Smiling to yourself, you take down the note.');
    scene.actions([
      { label: 'Continue', goto: ['grigory', 'dummy'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  scene.text('Walking in the darkness, you see a shape between the houses. Slowing your pace, you watch as Grigory moves into view.');
  scene.text('"Hey there Kotenok," His voice has a slightly drunken slur.');
  scene.text('"Hi Grigory," You say, feeling suddenly uncomfortable with the way he is looking at you.');
  scene.text('Grigory takes a sip from his flask, his eyes never leaving your body as he does so, "Good girls should be home in bed at this hour," He says, his voice husky, "But you\'re just a little tease aren\'t you? You like to toy with men\'s emotions."');
  scene.text('Your discomfort at the situation quickly edges towards fear.');
  scene.actions([
    { label: 'Leave quickly', handler: (st: GameState) => {
    scene.text('"You\'re right, good girls should be in bed at this hour, and I should be heading home to bed right now." Scared to take your eyes off of him, you take a few steps in the direction of your grandparent\'s home.');
    scene.text('His eyes never leave you as you walk away. The last thing you see before rounding the corner is him raising his flask to his lips for another sip.');
  } },
    { label: 'Try to talk to him', handler: (st: GameState) => {
    scene.text('"Grigory, are you ok?" You ask, concerned.');
    scene.text('In spite of your unease, you take a couple of steps towards the large man.');
    scene.text('"Ok?" He blurts drunkenly, "You toy with my heart, then you ask if I\'m ok?" There\'s raw emotion in his voice as he speaks.');
    scene.text('Your thoughts go to all the times you\'ve teased him, or been mean to him just for your own entertainment.');
    scene.text('Maybe I\'ve been out of line? You think, looking up at the big man as he looms over you.');
    scene.text('Suddenly, he takes a step towards you, his arms wrapping around you in a grip that\'s just a little too tight, "Grigory, you\'re hurting me," You manage to say as he squeezes the air from your lungs.');
    scene.text('The grip lingers for another second, then he lets go suddenly. ');
    scene.text('Your chest aches just a little as you take a deep breath. After a few seconds of breathing again, "Grigory?" You call his name softly, keeping just a little distance between the two of you, "I never mean to hurt you, if I tease you a little, it\'s because you\'re my friend."');
    scene.text('"Friend," The word sounds bitter coming from Grigory\'s mouth.');
    scene.text('"I think you need to go home, get some sleep," You venture, "Can I help you to your truck?" Even as you ask, you wonder how you\'d ever be able to help the giant of a man get to his truck considering how much smaller than him you are.');
    scene.text('Taking a step towards you again, he doesn\'t embrace you this time, instead he leans forward, his lips touching your forehead. The smell of alcohol is strong on him, "Later Kotenok," He mumbles, then turns and starts walking away.');
    scene.text('Standing there, you can see from the way he walks that he\'s had far too much to drink this night.');
    scene.actions([
      { label: 'Continue', goto: ['gadukino', ''] },
    ]);
  } },
    { label: 'Tease him a little', handler: (st: GameState) => {
    scene.text('"A tease?" You can\'t help but smile a little, "Maybe I am."');
    scene.text('Grigory raises his flask to his lips for another sip.');
    scene.text('You let one of your hands reach up, cupping your breast while biting your lip seductively, "And who says I\'m a good girl?" You barely suppress a laugh at the way Grigory openly gapes at you for several seconds.');
    scene.text('Then, faster than you ever imagined the big man could move, he closes the distance between you, picking you up in a crushing hug that makes your ribs hurt. His lips press against yours, and the taste of the alcohol on his tongue is enough to make your head swim.');
    scene.text('Before you even realize what is happening, Grigory lets go of you, shoving you to the ground roughly. ');
    scene.text('Your heart races as you start to get up, only reaching your hands and knees before his huge hands grab your hips. With a powerful pull and the sound of ripping clothing, you feel the cool night air on your suddenly exposed bottom.');
    if (((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('"Grigory, no! I\'m-" You cry in alarm, horrified at what he is about to do to you.');
      scene.text('One of his hands grabs the back of your neck, pushing your face into the dirt before you can protest further. A second later, you can feel his other hand brush between your legs as he searches for your slit.');
      scene.text('The moment his thick finger touches the folds of your pussy, you can hear him make a pleased sound. His finger probes deeper until he finds your opening, then shoves his finger forward, tearing through your hymen painfully.');
      scene.text('"You\'re a tight little slut, Kotenok," He growls behind you. His fingers piston in and out of you a number of times, then withdraw.');
      scene.text('You shudder, hoping this means Grigory has come to his senses, but the pleasant thought is dashed when you feel a finger, larger than the first probe your lips. It\'s not until he starts to push forward that you realize this isn\'t his finger, but instead is his penis.');
      scene.text('Shoving forward roughly, you feel his big cock fill you suddenly, pain, discomfort, and a sense of rightness all fill your core with a confusing mix of sensations that make you whimper.');
      scene.text('Without any hesitation, he begins to rut at your sex, rapid, almost violent thrusts. Pain and pleasure fill you while you thrash under him, trying to escape the big man\'s attack, but his size and position above you leave you helpless to stop him.');
      scene.text('Fortunately, or perhaps not so fortunately, it only takes him a minute or two before he thrusts forward and stops suddenly.');
      scene.text('Then you can feel a warmth filling your deepest place and you\'re faced with the new horror that your freshly deflowered pussy is being filled with his cum.');
      scene.text('A pathetic, hopeless cry escapes your lips as he satisfies himself inside of you, then his entire weight is suddenly pressing you against the ground.');
      scene.text('"Grigory! Get off! You\'re crushing me!" You groan, but he does not heed your words.');
      scene.text('After a few seconds, you realize that you\'re hearing a growling sound coming from him. You\'re filled with disbelief as you realize that he\'s fallen asleep on top of you, his rapidly deflating cock slipping from your abused pussy.');
      scene.text('It takes you a couple of minutes to push him off of you enough to escape, then once you do, you gather up your torn clothes and make a rapid retreat.');
      scene.actions([
        { label: 'Continue', goto: ['gadukino', ''] },
      ]);
    } else {
      if (((st as any).High_Arousal ?? 0)===1) {
        scene.text('"Grigory, don\'t!" You cry in alarm, horrified at what he is about to do to you.');
        scene.text('One of his hands grabs the back of your neck, pushing your face into the dirt before you can protest further. A second later, you can feel his other hand brush between your legs as he searches for your slit.');
        scene.text('The moment his thick finger touches the folds of your pussy, you can hear him make a pleased sound. His finger probes deeper until he finds your embarrassingly wet opening, then shoves his finger forward, filling you with a fullness that would be pleasant under different circumstances.');
        scene.text('"You\'re a tight little slut, Kotenok," He growls behind you. His fingers piston in and out of you a number of times, then withdraw.');
        scene.text('You shudder, hoping this means Grigory has come to his senses, but the pleasant thought is dashed when you feel a finger, larger than the first probe your lips. It\'s not until he starts to push forward that you realize this isn\'t his finger, but instead is his penis.');
        scene.text('Shoving forward roughly, you feel his big cock fill you with almost no resistance, filling you with a delightful feeling that makes you moan in pleasure.');
        scene.text('Without any hesitation, he begins to rut at your sex, rapid, almost violent thrusts. Pleasure fills you while you lay under him, enjoying the pleasure while hating the circumstances.');
        scene.text('Fortunately, or perhaps not so fortunately, it only takes him a minute or two before he thrusts forward and stops suddenly.');
        scene.text('Then you can feel a warmth filling your deepest place and you\'re faced with the realization that he\'s cumming inside of you, filling your womb with his seed.');
        scene.text('A pathetic, wanton moan fills the air as you cum around his throbbing cock, then his entire weight is suddenly pressing you against the ground.');
        scene.text('"Grigory! Get off! You\'re crushing me!" You groan, but he does not heed your words.');
        scene.text('After a few seconds, you realize that you\'re hearing a growling sound coming from him. You\'re filled with disbelief as you realize that he\'s fallen asleep on top of you, his rapidly deflating cock slipping from your abused pussy.');
        scene.text('It takes you a couple of minutes to push him off of you enough to escape, then once you do, you gather up your torn clothes and make a rapid retreat.');
        scene.actions([
          { label: 'Continue', goto: ['gadukino', ''] },
        ]);
      } else {
        scene.text('"Grigory, don\'t!" You cry in alarm, horrified at what he is about to do to you.');
        scene.text('One of his hands grabs the back of your neck, pushing your face into the dirt before you can protest further. A second later, you can feel his other hand brush between your legs as he searches for your slit.');
        scene.text('The moment his thick finger touches the folds of your pussy, you can hear him make a pleased sound. His finger probes deeper until he finds your unaroused sex, then shoves his finger forward, filling you with a fullness that is painful given the fact that you don\'t feel aroused.');
        scene.text('"You\'re a tight little slut, Kotenok," He growls behind you. His fingers piston in and out of you a number of times, then withdraw.');
        scene.text('You shudder, hoping this means Grigory has come to his senses, but the pleasant thought is dashed when you feel a finger, larger than the first probe your lips. It\'s not until he starts to push forward that you realize this isn\'t his finger, but instead is his penis. ');
        scene.text('Shoving forward roughly, you feel his big cock fill you suddenly, filling you with pain because you are not wet enough for the invasion.');
        scene.text('Without any hesitation, he begins to rut at your sex, rapid, almost violent thrusts. You cry and scream as he painfully violates you.');
        scene.text('Fortunately, or perhaps not so fortunately, it only takes him a minute or two before he thrusts forward and stops suddenly.');
        scene.text('Then you can feel a warmth filling your deepest place and you\'re faced with the realization that he\'s cumming inside of you, filling your womb with his seed.');
        scene.text('A pathetic cry fills the air as you feel him empty the contents of his balls within you.');
        scene.text('Then, with no warning, his entire weight is suddenly pressing you against the ground.');
        scene.text('"Grigory! Get off! You\'re crushing me!" You groan, but he does not heed your words.');
        scene.text('After a few seconds, you realize that you\'re hearing a growling sound coming from him. You\'re filled with disbelief as you realize that he\'s fallen asleep on top of you, his rapidly deflating cock slipping from your painfully abused pussy.');
        scene.text('It takes you a couple of minutes to push him off of you enough to escape, then once you do, you gather up your torn clothes and make a rapid retreat.');
        scene.actions([
          { label: 'Continue', goto: ['gadukino', ''] },
        ]);
      }
    }
  } },
  ]);
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
    case 'garden_comfort':
      enterGardenComfort(s, scene);
      break;
    case 'garden_brush':
      enterGardenBrush(s, scene);
      break;
    case 'garden_tease':
      enterGardenTease(s, scene);
      break;
    case 'flower1':
      enterFlower1(s, scene);
      break;
    case 'flower2':
      enterFlower2(s, scene);
      break;
    case 'flower3':
      enterFlower3(s, scene);
      break;
    case 'flower4':
      enterFlower4(s, scene);
      break;
    case 'flower5':
      enterFlower5(s, scene);
      break;
    case 'flower6':
      enterFlower6(s, scene);
      break;
    case 'flower7':
      enterFlower7(s, scene);
      break;
    case 'flower8':
      enterFlower8(s, scene);
      break;
    case 'reject':
      enterReject(s, scene);
      break;
    case 'accept':
      enterAccept(s, scene);
      break;
    case 'field1':
      enterField1(s, scene);
      break;
    case 'field2':
      enterField2(s, scene);
      break;
    case 'field_weird':
      enterFieldWeird(s, scene);
      break;
    case 'field_tease':
      enterFieldTease(s, scene);
      break;
    case 'field_watch':
      enterFieldWatch(s, scene);
      break;
    case 'field3':
      enterField3(s, scene);
      break;
    case 'drunk':
      enterDrunk(s, scene);
      break;
    case 'romantic_event':
      enterRomanticEvent(s, scene);
      break;
    case 'drunk_late':
      enterDrunkLate(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const grigory: LocationDef = {
  name: 'grigory',
  title: 'It is a shortcut out - because this event is not finished, b',
  region: 'other',
  enter: enter,
};
