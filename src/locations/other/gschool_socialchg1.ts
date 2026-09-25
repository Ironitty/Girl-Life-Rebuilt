import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTLazar(s: GameState, scene: SceneBuilder): void {
  ((s as any).socialchg = (s as any).socialchg ?? {})['tLazar_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  scene.text('You decide to walk over and see what the fuss is about. As usual, Lazar is showing off his skills as some younger kids challenge him 1-on-1 or even 1-on-2, and he easily bests them. You see several girls from school sitting on the bleachers watching Lazar and notice that he glances at them from time to time, obviously trying to show off.');
  scene.text('As you walk out onto the field, he waves at you to come over before he kicks the ball away so that the younger kids go chasing after it. You stop in your tracks when you see your brother among the kids chasing the ball, and you know he would do anything to embarrass you.');
  scene.actions([
    { label: 'Run away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A149', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('You blush and quickly turn your back before Kolka notices you. Lazar watches dumbfounded, wondering why you suddenly had a change of heart before he shrugs it off and challenges the kids to try besting him again.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Walk over to him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('"Hey Lazar!" you yell out as you wave and smile.');
    scene.text('He waves back and begins talking about how he\'s showing the kids some new skills he\'s picked up. The two of you talk about sports before the ball suddenly hits you in the back of the head.');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A149', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('Turning around, you see Kolka and his friends laughing. Your face turns bright red and just as you\'re about to yell at him, Lazar steps in. "Hey! Why did you do that?!"');
    scene.text('You sigh. "It\'s okay… He\'s my stupid little brother. He\'s probably just jealous that I\'m talking to you."');
    scene.text('Lazar nods before walking over and whispering at them. Kolka and his friends then walk up to you and apologize. You smile and turn to Lazar, giving him a little nod. Next, the kids start organizing themselves into teams for a football game, asking Lazar to watch and give them some pointers. He laughs at their request but eventually agrees. Finally, you feel it\'s time to leave since it looks like Lazar will be busy, but just as you start to go, Lazar stops you. "Hey, why don\'t you hang around and watch?"');
    qspCall(st, 'camera', 'check_person', 'lazar');
    scene.actions([
      { label: 'Maybe another time', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('You shake your head. "That\'s okay, I\'ve got some stuff I need to do. Maybe some other time."');
    scene.text('He nods in response. "Okay, suit yourself." He then turns back to watch Kolka and his classmates\' play.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A149', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).month ?? 0) > 2  &&  ((st as any).month ?? 0) < 9) {
      scene.img('images/locations/pavlovsk/school/grounds/football1.jpg');
    } else {
      scene.img('images/locations/pavlovsk/school/grounds/football4.jpg');
    }
    scene.text('The kids constantly yell at Lazar to watch them, and he gives them support or advice. Still, after a while, they get into the game, and you\'re pretty sure they\'ve forgotten that you and Lazar are there. "Hey, I\'m going to take off. Talk to you later, okay?"');
    if (((st as any).npc_rel ?? 0)?.['A149'] < 50  ||  ((st as any).pcs_hotcat ?? 0) < 6  ||  ((st as any).fame ?? 0)?.['pav_slut'] <= 150) {
      scene.text(`He turns and nods at you. "Yeah, sure. See you around ${((st as any).pcs_nickname ?? '')}."`);
      scene.actions([
        { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
      ]);
    } else {
      scene.text('He reaches over and grabs you by the hand to stop you. "Why don\'t you stick around? We could go behind those trees and have a little fun…"');
      scene.text('"Yeah? What kind of fun?" you reply, and he smiles.');
      scene.text('"You know… fun." His body language and tone of voice leave you no doubt about what he means, but you want him to say it anyway.');
      scene.text('"Yeah, and exactly what is fun to you?" you ask teasingly, and he grins. "Well… blowjobs are fun."');
      scene.text('You roll your eyes and look over at Kolka and his friends. "They might see," you tell him while indicating to them. The trees aren\'t that far away from the field.');
      scene.text('He shakes his head confidently. "They won\'t see anything. We\'ll be too far away and they won\'t even be looking anyway."');
      qspCall(st, 'willpower', 'bj', 'resist', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('You roll your eyes. You\'re not taking any chances. "No, I don\'t think it\'s a good idea," you tell him as you pull your hand free from his.');
    scene.text('He shrugs and laughs. "Well, you can\'t blame a guy for trying."');
    scene.text('You shake your head and start walking away. "See you later, Lazar."');
    scene.text(`"Bye, ${((st as any).pcs_nickname ?? '')}," he calls after you.`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let\'s go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A149', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/stay.jpg');
    scene.text('Your brother and his friends seem engrossed in the game and haven\'t looked your way in a while, and the treeline is far enough for them to hopefully not see anything. "Sure, why not? Let\'s go."');
    scene.text('He grins and walks with you over to the trees. Once you\'re behind the trees, he lets go of your hand and unbuttons his pants, pulling his underwear down enough for his stiffening cock to spring free. You take hold of it and give it a few strokes, feeling it harden in your hand.');
    qspCall(st, 'arousal', 'hj', 2, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/bj1.jpg');
    scene.text(`You get down on your knees and take his cock into your mouth. You start sucking his dick while stroking his shaft and playing with his balls, his moans of pleasure saying he's enjoying it. Then, after a few minutes, he starts trying to thrust into your mouth. "I want to fuck you now, ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just a blowjob', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just a blowjob', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/bjtalk.jpg');
    scene.text('You pop his dick out of your mouth and slowly stroke it with your hand. "I said I would give you a blowjob, nothing else."');
    scene.text(`"Come on, ${((st as any).pcs_nickname ?? '')}! You know you want it just as bad as I do. Just let me fuck you. I promise I won't cum in you."`);
    qspCall(st, 'arousal', 'hj', 1, 'exhibitionism');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/bj2.jpg');
    scene.text('You\'re getting a little annoyed at the way he keeps pushing things. "I said no! We can just stop if you want?"');
    scene.text('"No, a blowjob is fine. I just thought you wanted to get off too, is all…" His excuse rings hollow in your ears as you take his dick back into your mouth and start sucking him off again.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/bj3.jpg');
    scene.text('You keep working his cock with your mouth as you stroke his shaft and play with his balls. He moans softly, enjoying the blowjob you\'re giving him.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'No warning', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/bj3.jpg');
    scene.text(`You keep one eye on the sports field to ensure no one is coming over when you suddenly feel his cum squirting your mouth without warning. When he finishes cumming, he pulls his dick out of your mouth and tucks it away before pressing his pants as you swallow his cum. "Thanks, ${((st as any).pcs_nickname ?? '')}. I needed that, but I should get back before they notice I'm gone. Catch you later." He turns and heads back to the sports field.`);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'cum_call', 'mouth', 'A149');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['gschool_socialchg1', 'lazar_vaginal'] },
      { label: 'Fuck my ass', goto: ['gschool_socialchg1', 'lazar_anal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him', goto: ['gschool_socialchg1', 'lazar_vaginal'] },
      { label: 'You can fuck my ass', goto: ['gschool_socialchg1', 'lazar_anal'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/getfucked.jpg');
  scene.text('"Fine, you can fuck me," you tell him, and he grins. "Awesome. Now just turn around and bend over."');
  scene.text('You turn around and face the tree before pulling your clothes aside to expose your pussy to him and bending over. You feel the tip of his dick rubbing against your wet slit before he slides his massive dick into your pussy. You can feel it stretching to accommodate him and feel completely full.');
  qspCall(s, 'arousal', 'vaginal', 3, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/vaginal1.jpg');
    scene.text('It starts to feel amazing despite its size, or maybe because of it. Either way, you feel yourself getting wetter as he fucks your pussy. Then, you start moaning in pleasure, trying not to be too loud and attract any attention.');
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/vaginal2.jpg');
    scene.text('As your moans get louder, he starts fucking you harder and faster, eventually fucking you balls-deep with each thrust. His dick slides out of you during one thrust, but he misses when he tries sliding it back in. So instead of penetrating your pussy, his massive dick slides balls deep into your ass with a single thrust.');
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wrong hole!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/anal2.jpg');
    scene.text('You squeal at the pain and try to pull away, but he has a firm grip on your hips. When you try to pull away, he pulls you back as he pounds your ass without mercy. "Lazar, stop! That\'s my ass!"');
    scene.text('He keeps pounding away and grunting with exertion. "What?"');
    scene.text('"I said that\'s my asshole! You\'re fucking my ass!" you cry out as you keep trying in vain to get him to slow down or pull away.');
    scene.text('He looks at you before looking down. He slows down but doesn\'t stop fucking you as he grins. "Sorry, I didn\'t notice. Seriously, it was an accident! I\'m almost there anyway."');
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/buttcum.jpg');
    scene.text(`A few minutes later, he pulls out, and you feel his warm cum splattered across your ass cheeks. When he finishes cumming, he tucks his dick away and buttons his pants up. "Thanks, ${((st as any).pcs_nickname ?? '')}. I needed that, but I should get back before they notice I'm gone. Catch you later." He turns and heads back to the sports field, leaving you bent over the tree with his cum running down your ass.`);
    qspCall(st, 'cum_call', 'butt', 'A149');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
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

function enterLazarAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/getfucked.jpg');
  scene.text('"Fine, but you can only fuck my ass!"');
  scene.text('His grin tells you he doesn\'t mind at all. "Works for me. Now just turn around and bend over."');
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
    scene.text('You turn around and face the tree before pulling your clothes aside to expose your ass to him and bending over. He spits on your asshole a few times and rubs it with his fingers to give you some lubrication. You then feel the tip of his dick pressing up against your wet hole, and the pressure builds until his dick pops into your asshole, causing you to gasp in pain. Finally, he pauses to let you adjust before he starts to slowly fuck your ass.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  } else {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.text('You dig around in your purse, pull out your bottle of lube, and hand it to him. You then turn around and face the tree before pulling your clothes aside to expose your ass to him and bending over. He squirts some lube onto your asshole and rubs it in to give you some lubrication before you feel the tip of his dick press up against your hole. The pressure builds until the head of his dick pops into your asshole, causing you to gasp in pain. Then, he pauses to let you adjust and squirts a little more lube onto his dick before he starts to slowly fuck your ass.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (10);
  }
  qspCall(s, 'arousal', 'anal', 3, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/anal1.jpg');
    scene.text('He tries to be gentle, but it feels like he\'s splitting your ass. He keeps working his cock deeper and deeper up your ass, and you take several deep breaths, trying to relax to make it feel more pleasant. It starts to feel good after a few seconds despite its size, or maybe because of it. Either way, the pain gives way to pleasure, and you start to moan as he holds you by the hips and fucks you.');
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/anal2.jpg');
    scene.text('He steadily works deeper into your ass until you feel his balls slap against your pussy with each thrust. Once he\'s sure you\'re into it, he tightens his grip on your hips and starts hammering your ass, grunting and moaning loudly. You can tell he is getting close.');
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/sportsfield/buttcum.jpg');
    scene.text(`A few seconds later, he pulls out, and you feel his warm cum splatter your ass cheeks. When he finishes cumming, he tucks his dick away and buttons his pants up. "Thanks, ${((st as any).pcs_nickname ?? '')}. I needed that, but I should get back before they notice I'm gone. Catch you later." He turns and heads back to the sports field, leaving you bent over the tree with his cum running down your ass.`);
    qspCall(st, 'cum_call', 'butt', 'A149');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTIvan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  scene.text('Ivan is looking victorious as he greets you. "What are you doing out here this early?"');
  scene.text('"Nothing much, just out for a stroll." you answer, "I wasn\'t expecting to run into the two of you."');
  scene.text('Ivan smiles. "We usually do this to gain an edge against our opponents."');
  scene.actions([
    { label: 'I see', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text(`You carefully listen while Ivan rambles a bit. "You should join us sometime, ${((st as any).pcs_nickname ?? '')}. You can't be any worse than Fedor over here."`);
    scene.text('He winks at Fedor, who makes a funny face while you smile back. "I\'ll think about it."');
    scene.text('"Great!" Ivan replies, "Well, that\'s enough resting, Fedor. Time for another lap."');
    scene.text('The two of them bid you farewell, and you watch them disappear over the horizon.');
    scene.actions([
      { label: 'Return to the secluded beach', goto: ['pav_lake_nude', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTFedor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  scene.text('A flustered Fedor is huffing and puffing. "You really need to take it easy. I can barely keep up with you, Ivan…"');
  scene.text('"Come on, Fedor. Don\'t sell yourself short. You\'ve got potential, and remember the dirtbag you wanted to get revenge on…" Ivan replies in an attempt to motivate a dejected Fedor.');
  scene.actions([
    { label: 'Ask about the dirtbag', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A5', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('"I don\'t mean to pry, but what is this about a dirtbag?" you ask.');
    scene.text('Fedor looks uncomfortable, but Ivan gives him a nudge. "Go on, tell her."');
    scene.text('Fedor starts by telling you about a boxing fight last year where he went against an opponent that beat him badly, and ever since then, he\'s been seeking revenge.');
    scene.text('Ivan chimes in. "And we just found out who our opponents will be for the next fight, and Fedor here is going to meet that guy again."');
    scene.text('You give Fedor an encouraging smile. "I\'m sure you\'ll do great! He\'s got nothing on you."');
    scene.text('Fedor acknowledges your attempt to motivate him by giving you a slight nod as he takes a deep breath. "No time to rest. Let\'s go!" he says before taking off running again.');
    scene.text('Ivan gives you a thumbs-up as he starts running after Fedor. "Hey champ, wait up! You\'re running too fast!"');
    scene.actions([
      { label: 'Return to the secluded beach', goto: ['pav_lake_nude', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIvanFedorNaked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/event/talknaked1.jpg');
  scene.text('You put on your best smile, despite feeling exposed. You really should have considered that you might run into someone you knew while walking around the beach naked. "Hey guys…"');
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.text(`Ivan has a massive grin, while Fedor looks shocked and tries to cover you up with his hands. "What are you doing, ${((s as any).pcs_nickname ?? '')}?!"`);
    scene.text('You shrug in response. "You know, just out to enjoy the cool breeze and warm sun on my skin while I take a walk. How about you guys?" you reply while trying to act as casual as you can.');
    scene.text('Fedor glances around. "What if someone else sees you? What will they think? What will they say?" He sounds perturbed.');
    scene.text('You frown. "I understand you\'re worried about what people will think and say about your girlfriend, Fedor, but this is my body, and it makes me happy. I don\'t care what anyone else says. Unless you\'re ashamed of me?"');
    scene.text('He shakes his head while Ivan walks off a little, obviously not wanting to get involved. "No, no, it\'s not that. It\'s just… I worry… never mind." He sighs. "You\'re right, it is your body, and if you want to do this, then I won\'t stop you."');
    scene.text('You smile at him and give him a quick kiss, interrupted by Ivan. "You ready? We\'ve got a few more miles to go."');
    scene.text('Fedor nods at Ivan before turning back to you. "Okay, I\'ve got to go. Talk to you later, okay?" He turns and runs after Ivan, who has already started running again.');
    scene.actions([
      { label: 'Leave them to their training', goto: ['pav_lake_nude', ''] },
    ]);
  } else {
    scene.text(`Ivan has a massive grin, while Fedor seems to be shocked. "So what are you up to, ${((s as any).pcs_nickname ?? '')}?"`);
    scene.text('You shrug in response. "You know, just out to enjoy the cool breeze and warm sun on my skin while I take a walk. How about you guys?" you reply while trying to act as casual as you can.');
    scene.text('Ivan chuckles. "We were out training. So, is it normal for you to walk around naked like this?"');
    scene.actions([
      { label: 'I made a mistake', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/coverupnaked.jpg');
    scene.text('You blush and suddenly feel very self-conscious, quickly covering yourself up with your hands as best as possible. "I… I made a mistake. I don\'t know what I was thinking. Please don\'t tell anyone." you beg them.');
    scene.text('Fedor shakes his head. "Don\'t worry, we won\'t tell anyone," he says as he glances at Ivan.');
    scene.text('Ivan nods. "Yeah, not a problem. We won\'t tell anyone, but if you don\'t want anyone to see you, maybe you should go put some clothes on?" he says with a bemused smile.');
    scene.text('You nod and turn to head back towards your clothes. "Thanks, guys. See you around." With that, they wave goodbye and go back to their run.');
    scene.actions([
      { label: 'Go to your clothes', goto: ['pav_lake_nude', ''] },
    ]);
  } },
      { label: 'I\'m not ashamed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/talknaked1.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('"I have nothing to be ashamed of. This is how I was made, and I look amazing, plus I like showing it off," you reply.');
      scene.text('Their eyes roam all over your naked body, and you feel more than a thrill from it. "Yeah, you do, and no, you have nothing to be ashamed of," Ivan says. "Yeah, you have every reason to be proud," Fedor adds before they exchange looks and grin at you.');
      scene.text('You arch a brow at them. "What?"');
      scene.text('They exchange looks again, and Ivan speaks up. "Would you want to go somewhere more private where we could… appreciate your body even more?" But, of course, you know precisely what he means.');
      if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.actions([
          { label: 'Sure', goto: ['gschool_socialchg1', 'ivanfedor_threesome'] },
        ]);
      }
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/event/talknaked1.jpg');
    scene.text('You shake your head with a bemused smile. "Thanks, but just because I like to walk around naked doesn\'t mean I want to have sex."');
    scene.text('They both shake their heads, stammer and talk over each other while trying to explain themselves.');
    scene.text('You interrupt them. "It\'s okay. I don\'t mind you asking but no."');
    scene.text('Ivan nods. "Yeah, cool. Well okay… I guess we\'ll get back to training then… Have fun on your walk." With that, they wave goodbye and go back to their run.');
    scene.actions([
      { label: 'Leave them to their training', goto: ['pav_lake_nude', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('"I have nothing to be ashamed of. This is how I was made, and I look amazing, plus I like showing it off," you reply.');
      scene.text('They\'re both looking at anything but your naked body and Ivan scratches his head while looking up at the clouds. "Yeah, I guess. But… we should really get back to training." Ivan says. "Yeah, have fun," Fedor adds, and they exchange looks before returning to their run.');
      scene.actions([
        { label: 'Leave them to their training', goto: ['pav_lake_nude', ''] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterIvanfedorThreesome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A5');
  qspCall(s, 'npcStat', 'A3', 'a');
  scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some1.jpg');
  scene.text('The three of you walk further down the beach past the sauna, where almost no one ever goes. Once you\'re sure no one else is around, the boys start stripping off their clothes as you drop to your knees between them. You take their cocks in your hands and start jerking them until you get them both rock-hard.');
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some2.jpg');
    scene.text('Once they\'re both hard, you take Ivan\'s cock into your mouth and start sucking it while you keep stroking it with your hand. You use your other hand to keep stroking Fedor\'s dick. After a few minutes, you switch cocks, and the boys give each other a high five.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-2), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'bj', 2, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-3), ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch cocks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some3.jpg');
    scene.text(`Once you switch back to sucking on Ivan's cock, Fedor takes hold of your hips and pulls you up. You keep sucking Ivan's cock, which forces you to bend over as Fedor pulls you up into a standing position. Next, Fedor steps in behind you and teases your clit to get you wet before he rubs the tip of his dick against your slit. Once he is sure you're wet enough, he pushes his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick inside your pussy, stretching and filling it out. Then, he slowly starts fucking you, steadily going deeper with each thrust as you suck on Ivan's cock.`);
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'bj', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A3');
    scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some4.jpg');
    scene.text(`You moan around Ivan's cock as Fedor fucks you before Ivan interrupts things. "Fedor, get on your back so ${((st as any).pcs_nickname ?? '')} can ride you. I want some of that ass."`);
    scene.text(`Fedor pulls out of you and lays down on his back. You straddle him, and Ivan fingers you before smearing your juices on his dick. You lower yourself down onto Fedor's dick, which slides inside your pussy. Ivan kneels down behind you, spits on your asshole and rubs it with his fingers before you feel the tip of his dick pressing against your asshole. The pressure builds until the head of his dick pops in your ass, and Ivan starts slowly fucking your ass, being as gentle as he can. At the same time, you adjust to his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick stretching your ass.`);
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Double the fun', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some5.jpg');
    scene.text('Ivan grabs your hips and holds them in place, Fedor thrusts into your pussy below, and Ivan pounds your asshole. You moan louder and louder as the boys fuck both your holes.');
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/sex/ivanfed3some5.jpg');
    scene.text('They both start grunting, and you can tell they\'re both getting close. Then, they both quickly pull out of you and stand up as you get on your knees. Their cum starts splattering over your breasts, covering them. You can feel it running down your chest until they finally both finish.');
    scene.text(`They start getting dressed. "That was great, ${((st as any).pcs_nickname ?? '')}. You're amazing," Fedor says when he finishes.`);
    scene.text(`Ivan nods in agreement. "We should get back to our training. I hope we see you around again, ${((st as any).pcs_nickname ?? '')}. Catch you later." Ivan says with a wink. They wave goodbye and start running again.`);
    qspCall(st, 'arousal', 'foreplay', 5, 'group', 'exhibitionism');
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the secluded beach', goto: ['pav_lake_nude', ''] },
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

function enterTSvyatoslav(s: GameState, scene: SceneBuilder): void {
  ((s as any).socialchg = (s as any).socialchg ?? {})['tSvyatoslav_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big8.jpg');
  scene.text('You wait patiently until Svyatoslav ends one of his runs. "You\'re improving greatly!" you compliment him with a smile.');
  scene.text('"Thanks! I\'ve been trying my hardest to one-up Ivan this year," he replies while panting as sweat runs down his forehead.');
  scene.actions([
    { label: 'Keep up the good work', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A8', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big8.jpg');
    scene.text('You give him some encouraging words. "If you continue working out as hard as you\'re currently doing, then I\'m sure you\'ll finally be able to beat Ivan."');
    scene.text('Still panting, Svyatoslav smiles and nods while picking up the water bottle and taking a sip. You stand and chat with him a little longer until he tells you that his break is up and again gets ready to sprint.');
    scene.actions([
      { label: 'Leave him to it', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    { label: 'Laugh at him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A8', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big8.jpg');
    scene.text('You can\'t contain your laughter as you listen to him. "Don\'t be silly! You\'ll never be able to beat Ivan. You\'ve tried and failed so often that it\'s not even funny anymore."');
    scene.text('You can clearly see that Svyatoslav is agitated by your words. "You know what, I\'ll show you and the rest of the school that I will be the best. I\'ll beat Ivan, and you\'ll feel like idiots for laughing at me!"');
    scene.text('"Okay, champ, take it easy now." you patronize him.');
    scene.text('Svyatoslav scoffs before he turns and starts sprinting up and down the makeshift track while ignoring you.');
    scene.actions([
      { label: 'Leave him to it', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTVanya(s: GameState, scene: SceneBuilder): void {
  ((s as any).socialchg = (s as any).socialchg ?? {})['tVanya_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big165.jpg');
  scene.text(`Vanya stops in his tracks when he sees you. "Hey, ${((s as any).pcs_nickname ?? '')}, you're out early today!" he says with a subtle smile.`);
  scene.text('"The same can be said about you!" you answer playfully.');
  scene.text('"Well, to be honest, I was looking for something…" he mumbles before trailing off.');
  scene.actions([
    { label: 'Ask what he\'s up to', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A165', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big165.jpg');
    scene.text('"What are you up to, Vanya?" you impatiently ask.');
    scene.text('Vanya lights up in a snicker. "Well, since you asked, I might as well tell you." He goes silent for a few seconds before continuing. "I was looking for a secluded spot for Vicky and me…"');
    scene.text('Looking at him, you start laughing loudly. "Why am I not surprised? That\'s so typical of you!"');
    scene.text('"Well, you know, there\'s barely anyone in the park right now, so it seems like the perfect time to be on the lookout…" He touches the back of his head and nervously laughs.');
    scene.text('"If it was anyone else, I would say you were being really weird, but I get that. So I hope you find a decent spot. And tell Vicky I said hi!" You give him a smile and a wink.');
    scene.text('"Sure, sure!" he replies as he slowly starts scampering away from you.');
    scene.actions([
      { label: 'Go back to what you were doing', goto: ['pav_park', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTErast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big150.jpg');
  scene.text('You walk up to Erast. You don\'t want to bother him, but you must ask him how it works. "Sorry, Erast, I don\'t want to bother you…" you start as he puts down the weights.');
  scene.text(`"Oh, hi, ${((s as any).pcs_nickname ?? '')}. You need some help?" Erast politely replies.`);
  scene.actions([
    { label: 'Nod your head', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'npc_relationship', 'modify', 'A150', 2);
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'exp_gain', 'stren', 1);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big150.jpg');
    scene.text('You silently nod your head. "Have you seen the new machine they\'ve added?"');
    scene.text('Erast gives a subtle smile and nods. "Yeah, what about it?"');
    scene.text('You squirm a little as you continue. "Well, I want to try it out, but I don\'t know how to use it…"');
    scene.text(`"Don't worry, ${((st as any).pcs_nickname ?? '')}. I'll show you how to use it." He leads you back to the machine and shows you how to use it, ensuring you've got the hang of it before leaving.`);
    scene.actions([
      { label: 'Thank him', goto: ['pav_commcenter', ''] },
    ]);
  } },
    { label: 'Shake your head', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big150.jpg');
    scene.text('Feeling somewhat embarrassed, you quickly shake your head as your face turns bright red.');
    scene.text('"Are you sure you don\'t need any help?" he asks again.');
    scene.text('"N-No, I\'m sorry to have bothered you…" you shyly reply and quickly move away.');
    scene.text('Erast is still scratching his head as you quickly dash away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLariskaGm_1(s: GameState, scene: SceneBuilder): void {
  (s as any).lari_gm = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  if (((s as any).LariskaQW ?? 0)?.['story'] === 4) {
    scene.text(`She sees you coming into the store behind her and smiles. "Hey, ${((s as any).pcs_nickname ?? '')}. Here to do some shopping?"`);
    scene.actions([
      { label: 'Leave the store', goto: ['pav_commercial', ''] },
      { label: 'Stay and shop alone', goto: ['shop_coco_carmen', 'start'] },
      { label: 'Offer to try on clothes with Lariska', goto: ['gschool_socialchg1', 'lariska_gm_2'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      scene.text(`She sees you coming in the store behind her and smiles. "Hey ${((s as any).pcs_nickname ?? '')}. Here to do some shopping?"`);
      scene.actions([
        { label: 'Leave the store', goto: ['pav_commercial', ''] },
        { label: 'Stay and shop alone', goto: ['shop_coco_carmen', 'start'] },
        { label: 'Offer to try on clothes with Lariska', goto: ['gschool_socialchg1', 'lariska_gm_2'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A13'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.text('She sees you in the store behind her and frowns but doesn\'t say anything.');
        scene.text('"Hey, Lariska. Doing some shopping?"');
        scene.text('She just looks at you and doesn\'t respond at all. It\'s pretty obvious she wants nothing to do with you.');
        scene.actions([
          { label: 'Leave the store', goto: ['pav_commercial', ''] },
          { label: 'Stay and shop alone', goto: ['shop_coco_carmen', 'start'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
          scene.text('She sees you coming into the store behind her and, with a disgusted look on her face, says, "What are <i>you</i> doing here? This place doesn\'t sell anything slutty enough for <i>you</i> to wear."');
          scene.text('Your face turns red with anger, and you shoot back. "At least I can make my own decisions. Are you even allowed to be here without Christina keeping an eye on you?"');
          scene.text('She just sneers at you. "Go fuck yourself, slut." With that, she leaves the store, obviously not wanting to shop anymore.');
          scene.actions([
            { label: 'Leave the store', goto: ['pav_commercial', ''] },
            { label: 'Stay and shop alone', goto: ['shop_coco_carmen', 'start'] },
          ]);
        } else {
          scene.text(`She sees you coming into the store behind her and nods at you. "Hey, ${((s as any).pcs_nickname ?? '')}. Doing some shopping?"`);
          scene.actions([
            { label: 'Leave the store', goto: ['pav_commercial', ''] },
            { label: 'Stay and shop alone', goto: ['shop_coco_carmen', 'start'] },
            { label: 'Offer to try on clothes with Lariska', goto: ['gschool_socialchg1', 'lariska_gm_2'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterLariskaGm_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_1.jpg');
  scene.text('You and Lariska try on random clothes, emerging from your changing rooms like you\'re models walking down a catwalk.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_2.jpg');
    scene.text('Eventually, you start changing in the same room, laughing and giggling as you try on the various items you picked out for each other.');
    scene.text('At one point, you catch her staring at you in the mirror while you are both topless. You notice her nipples are hard, and you feel yours getting hard checking her out too. Slipping an arm around her waist, you both stare at your reflections in the mirror, comparing yourselves to each other.');
    if (((st as any).lariskalove ?? 0) < 7  &&  ((st as any).LariskaQW ?? 0)?.['story'] < 10) {
      scene.text('She eventually gets embarrassed at the attention and turns away, her face turning bright red.');
    } else {
      scene.text('You smile at her through her reflection in the mirror with a suggestive look in your eyes.');
    }
    qspCall(st, 'arousal', 'erotic_nudity', 10, 'exhibitionism');
    qspCall(st, 'stat', '');
    if (((st as any).lariskalove ?? 0) >= 7  &&  ((st as any).LariskaQW ?? 0)?.['story'] >= 10) {
      scene.actions([
        { label: 'Flirt with Lariska', goto: ['gschool_socialchg1', 'lariska_gm_3'] },
      ]);
    }
    scene.actions([
      { label: 'Leave the store', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_commercial', '');
  } },
      { label: 'Stay and shop alone', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'shop_coco_carmen', 'start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLariskaGm_3(s: GameState, scene: SceneBuilder): void {
  (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
  qspCall(s, 'npcStat', 'A13');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_3.jpg');
  scene.text('You maintain eye contact as you slide your hand down her back until you reach her panties. Softly hooking your finger over them, you slowly drag them down until her pink pussy is exposed. Dropping your panties, you gently push her against the mirror, enjoying the sight of her naked in the stand-up mirror before pulling her into your arms and kissing her.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_4.jpg');
    scene.text('You push her up against the wall as you make out with her. Then, you reach between her legs to rub her pussy. Her breath quickens as lust takes over, and she starts exploring your body with her hands, keeping her lips locked on yours. Eventually, her fingers find their way between your legs, and you both finger each other.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', (-10), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_5.jpg');
    scene.text('You sit on the bench in the changing room, pulling her onto your lap while you continue to explore her mouth with your tongue. Her hips start moving like she is riding an imaginary cock, grinding her pussy into yours.');
    qspCall(st, 'arousal', 'trib', (-8));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/sex/gm/gm_lariska_6.jpg');
    scene.text('Face red with desire, Lariska stands up, pulling you off the bench and down to the floor on your back. Straddling your bare chest, she buries her face between your legs, licking and slurping wildly. You do the same, licking her clit while thrusting your fingers inside her pussy.');
    (st as any).orgasm_txt = 'You can tell she is getting close. Her pussy is soaking wet and leaking like crazy. The sight and feeling of her going wild on your clit sends you over the edge, and your body starts shaking. Your orgasm also sets hers off, both of you writhing on the floor, attempting to keep licking your way through the other orgasm.';
    (st as any).orgasm_or = 'custom';
    scene.text('Exhausted, you let your head fall back while you catch your breath. You hear her panting and feel her breath on your now sensitive lower lips as you come down in post-orgasmic bliss.');
    scene.text('Once you catch your breath, you stand up and share a long kiss while stroking her cheek with your hand. When you pull back from it, she seems to remember you\'re in a public place and gets nervous, her face red again.');
    scene.actions([
      { label: 'Clean up and leave the store', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'pav_commercial', '');
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

function enterTBella(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big22.jpg');
  scene.text('You approach Bella and tap her on her shoulder. "Hey, Bella! You\'re heading into the city?"');
  scene.text('Bella sighs loudly as she replies. "Yeah, I\'m meeting some of my friends in town. There\'s a new gym opening, and we thought we might check it out."');
  scene.actions([
    { label: 'Sounds amazing', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A22', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big22.jpg');
    scene.text('You start grinning but then turn serious. "That sounds great, but isn\'t there an age limit at those gyms?"');
    scene.text('"Hanging around with older people does have its perks." she winks. "One of my friends can get me in, no questions asked."');
    scene.text('You nod your head. "Must be great hanging around with older people…"');
    scene.text('"Oh, the stories I\'ve got to tell…" Bella replies, but before she can continue, there\'s an announcement. She excuses herself, saying that\'s the train she needs to catch.');
    scene.actions([
      { label: 'Return to the train platform', goto: ['pav_train_hall', 'platform'] },
    ]);
  } },
    { label: 'What\'s wrong with the gym in Pavlovsk?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A22', (-2));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big22.jpg');
    scene.text('"Why not just train here instead? We have an excellent gym." you innocently ask.');
    scene.text(`Bella starts laughing loudly. "Poor little ${((st as any).pcs_nickname ?? '')}. You're so innocent and still have a lot to learn…"`);
    scene.text('"Like what?" you ask, a little offended.');
    scene.text('Bella just smirks. "Well, first of all, there are fully grown men there, not little wimpy boys that think they\'re the shit. Real men who know how to treat women… And let\'s not talk about all the sexy women that work out."');
    scene.text(`As she's about to continue, you hear an announcement. "That's my train. Too bad, ${((st as any).pcs_nickname ?? '')}. I thought about inviting you, but you disappointed me. I had higher hopes about you…" she says before walking away from you.`);
    scene.actions([
      { label: 'Return to the train platform', goto: ['pav_train_hall', 'platform'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTVeronika(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big141.jpg');
  scene.text('Noticing it\'s Veronika, you start waving and trying to catch her attention. But, unfortunately, she barely bats an eye towards you as you try your hardest to get her attention.');
  scene.text('After a while, she stops practicing and starts skating towards you.');
  scene.actions([
    { label: 'Greet her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big141.jpg');
    scene.text('"Hey Veronika!" you shout out. "Looking great out there!"');
    scene.text('Ice cold with a blank expression, she stops in front of you. "What do you want? Can\'t you see that I\'m practicing?"');
    scene.actions([
      { label: 'Discourage her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A141', (-2));
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big141.jpg');
    scene.text('"Sheesh, why are you always such a bitch?" you reply, irritated by her nonchalant greeting.');
    scene.text('Veronika rolls her eyes and lets out a sigh. "Do I really need to explain it to you?"');
    scene.text('"You\'re such an ungrateful bitch!!!" you yell out. "I just wanted to encourage you, but since you\'re being a bitch about it, I hope you break your leg! Or your face."');
    scene.text('Stone-cold Veronika shrugs her shoulders before turning and skating away like the conversation never happened.');
    scene.actions([
      { label: 'Walk away', goto: ['pav_lake', ''] },
    ]);
  } },
      { label: 'Encourage her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A141', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big141.jpg');
    scene.text('"I just wanted to say that you\'re looking great out there." you smile. "I bet you\'ll have no issues getting on the Russian team."');
    scene.text('Veronika, still stone-faced and rigid, replies a little reluctantly. "Thanks, I guess… I train a lot, so I can leave this god-forsaken hellhole behind."');
    scene.text('You awkwardly smile. "I know what you mean. It really is a dump, isn\'t it?"');
    scene.text('She just blankly stares at you. "If there\'s nothing more, I need to get back to my training…" Before you\'re able to reply, Veronika has already started skating away from you.');
    scene.actions([
      { label: 'Walk away', goto: ['pav_lake', ''] },
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
    case 'tLazar':
      enterTLazar(s, scene);
      break;
    case 'lazar_vaginal':
      enterLazarVaginal(s, scene);
      break;
    case 'lazar_anal':
      enterLazarAnal(s, scene);
      break;
    case 'tIvan':
      enterTIvan(s, scene);
      break;
    case 'tFedor':
      enterTFedor(s, scene);
      break;
    case 'ivan_fedor_naked':
      enterIvanFedorNaked(s, scene);
      break;
    case 'ivanfedor_threesome':
      enterIvanfedorThreesome(s, scene);
      break;
    case 'tSvyatoslav':
      enterTSvyatoslav(s, scene);
      break;
    case 'tVanya':
      enterTVanya(s, scene);
      break;
    case 'tErast':
      enterTErast(s, scene);
      break;
    case 'lariska_gm_1':
      enterLariskaGm_1(s, scene);
      break;
    case 'lariska_gm_2':
      enterLariskaGm_2(s, scene);
      break;
    case 'lariska_gm_3':
      enterLariskaGm_3(s, scene);
      break;
    case 'tBella':
      enterTBella(s, scene);
      break;
    case 'tVeronika':
      enterTVeronika(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_socialchg1: LocationDef = {
  name: 'gschool_socialchg1',
  title: 'You decide to walk over and see what the fuss is about. As u',
  region: 'other',
  enter: enter,
};
