import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 0);
  scene.img('images/locations/city/industrial/bar/martinafterhours.jpg');
  if (((s as any).MartinSexTalk ?? 0) === 0  &&  ((s as any).MartinSex ?? 0) === 0) {
    scene.text('You approach Martin as he\'s cleaning the floor. The bartender raises his head when he notices you.');
    // TODO-QSP: dynamic text: "Oh, I didn't think you were still here, <<$pcs_firstname>>."
    scene.text(`"Oh, I didn't think you were still here, ${((s as any).pcs_firstname ?? 0)}."`);
    // TODO-QSP: dynamic text: You pout your <<$pc_desc['lip size']>> lips. "If you are that unhappy about it, ...
    scene.text(`You pout your ${((s as any).pc_desc ?? 0)?.['lip size']} lips. "If you are that unhappy about it, maybe you want me to leave?"`);
    scene.text('He gives you a half-smile. "No, of course not."');
    scene.text('"Thought so," you say, smiling back.');
    if (((s as any).MartinTalkVar ?? 0) < 10) {
      scene.text('You haven\'t known Martin for very long, so this may be a good opportunity to talk a little more.');
      scene.actions([
        { label: 'Chat with Martin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 1);
    scene.text('So, you take the opportunity and do just that: You have normal old chat with your favorite barkeeper.');
    // TODO-QSP: dynamic text: Every now and then, you get a little flirty or add a double entendre, but you ke...
    scene.text(`Every now and then, you get a little flirty or add a double entendre, but you keep the conversation light and friendly overall, same as you would during your regular visits and talks. You catch up on the day-to-day' + iif($MartinHobby!', ', your ${((s as any).MartinHobby ?? 0)},', ') + ' and talk about a few other trivial things.`);
    scene.text('After about half an hour, you decide that you should let Martin finish up for the night. After a brief but friendly goodnight, you leave your friend to himself and exit the bar.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Leave the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 2) + 0);
    scene.text('"Just wanted to say goodnight before I leave," you say.');
    scene.text('"Oh, and here I was hoping that you actually wanted to spend time with me." Martin puts on the worst impression of a little-girl pout you have ever seen.');
    scene.text('"Oh my god," you try to hold back your laughter, but the longer you look at the grown, scarred man\'s pout, the more absurd and funny it gets. "Don\'t ever do that around patrons. You\'d scare them away and I bet the beer would go sour or something, too."');
    scene.text('He laughs at that, too, and you have another exchange like that or two before you realize that you decided you were going to leave, not chat.');
    scene.text('"I should go, before you pout again," you tease. "Don\'t work too hard, yeah?"');
    scene.text('"And you be careful on the way home," Martin admonishes.');
    scene.text('You share a brief, friendly hug and goodbye before you turn and leave the bar.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('As nice as this exchange is, something is different about this, you can tell. You have been chatting with him for a while now and yet you have never felt this… tense before, as if you were mentally preparing for something.');
      // TODO-QSP: dynamic text: But it's not just you: You have had plenty of time to watch him while he worked,...
      scene.text(`But it's not just you: You have had plenty of time to watch him while he worked, seen the way he looks at the women who come to the bar, even the attractive ones: He is appreciative of beauty but self-confident enough to not try to hide his brief stare. The way his eyes jump down to your curves, lingering on your ${((s as any).pc_desc ?? 0)?.['back']} back, ass,' + iif(pcs_tattoos['tramp'] > 0, ' the tramp stamp in between,', ') + ' and ${((s as any).pc_desc ?? 0)?.['legs']} legs for a moment before jumping back, as if he couldn't keep himself from doing it but didn't want you to notice… It's almost like he's a different man. And not an unattractive one at that…`);
      scene.actions([
        { label: 'Leave the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'mood', 'lower', Math.floor(Math.random() * 2) + 0);
    scene.text('"Just wanted to say goodnight before I leave," you say, feeling a little tense and unhappy with yourself for running away instead of dealing with whatever emotional dilemma you are facing.');
    scene.text('"Already?" He asks.');
    scene.text('"Yeah, I have to get up early tomorrow," you apologize. "Don\'t work too hard, yeah?"');
    scene.text('"And you be careful on your way home," Martin admonishes.');
    scene.text('You share a brief, friendly hug and goodbye before you turn and leave the bar, wondering if or when you will gather the courage to talk about this with Martin.');
    scene.text('<i>Maybe tomorrow</i>, you think to yourself.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Keep it light - Talk to Martin', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinafterhours.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 0);
    scene.text('But… you are just friends, right? You like hanging out at the bar, like that Martin has an open ear for you, treats you the same as his regulars. Okay, maybe he is a little more protective of you than of his other regulars every now and then, but he is a good man, a good friend, and it might be a mistake to risk all that for… what?');
    scene.text('Your inability to answer that question makes the decision for you, and you just have a normal chat with Martin.');
    // TODO-QSP: dynamic text: Every now and then, you get a little flirty or add a double entendre, but you ke...
    scene.text(`Every now and then, you get a little flirty or add a double entendre, but you keep the conversation light and friendly overall, same as you would during your regular visits and talks. You catch up on the day-to-day' + iif($MartinHobby!', ', your ${((s as any).MartinHobby ?? 0)},', ') + ' and talk about a few other trivial things, doing your best to ignore his occasional glance at your ${((s as any).pc_desc ?? 0)?.['breast']} breasts.`);
    scene.text('After about half an hour, you decide that you should let Martin finish up for the night. After a brief but friendly goodnight, you leave the bar with a tingly stomach - whether it\'s purely from lustful longing or more, you\'re not sure, but you know that the only way to find out is to talk to Martin when he\'s alone again.');
    scene.text('<i>Maybe tomorrow</i>, you think to yourself.');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Go for it - Flirt with him', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinflirt.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.text('You don\'t know when this thing with Martin went from friendly chats and idle flirts to something else, but there is a tingling in your belly, and lower, when you look at him that you would very much like to act on…');
    scene.text('And since Martin is trying his best to hide his interest and it doesn\'t look like he is gonna do you the favor of making the first step, you will have to take matters into your own hands.');
    // TODO-QSP: dynamic text: You flirt more aggressively than you have up until now: You smile more,' + iif(p...
    scene.text(`You flirt more aggressively than you have up until now: You smile more,' + iif(pcs_hairlng>81, ' play with your ${((s as any).pc_descWordy ?? 0)?.['hair length']},', ') + ' touch his arm every now and then, even move and lean over in ways that give him good looks at your ${((s as any).pc_desc ?? 0)?.['breast']} cleavage or ${((s as any).bodyVars ?? 0)?.['desc']} butt - in other words, you drop about as many hints as womanly possible, short of stripping right then and there.`);
    // TODO-QSP: dynamic text: Twenty minutes pass like that and you are starting to wonder if Martin is playin...
    scene.text(`Twenty minutes pass like that and you are starting to wonder if Martin is playing hard to get or if he really is oblivious to what you're doing… when he visibly catches himself staring at your ${((s as any).pc_desc ?? 0)?.['lip gloss']} lips and suddenly declares: "You shouldn't get involved with me."`);
    scene.text('"Excuse me?" You are so astonished by what he said that you are almost sure you misheard him.');
    scene.text('But no. "You shouldn\'t get involved with me," he repeats, a strange, wistful look in his eyes. "You are young, smart, and beautiful. You are wasting your time here."');
    scene.text('You get closer to him, an inch away from touching him, and lower your voice to a whisper. "If I\'m that smart, why don\'t you let me decide what I want?"');
    scene.text('He looks at you, longing but self-possessed. "Some decisions are better made for you."');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      if (((s as any).cycle ?? 0) === 0) {
        scene.text('You are half-tempted to go on the offensive, show him what he\'s missing out on by acting like a knight in shining armor and see if that won\'t change his mind, but then you remember that you are on your period, so stripping isn\'t really a sexy option right now.');
        if (((s as any).stat ?? 0)?.['bj'] > 20) {
          scene.text('Or you could just pull his pants off and blow him - you\'ve done it enough times to know how convincing that can be, and your period certainly isn\'t going to stand in the way of <i>that</i>.');
          scene.actions([
            { label: 'Give Martin a blowjob', handler: (st: GameState) => {
    (st as any).MartinConvinceBJ = 1;
  }, goto: ['MartinSex3', 'MartinBlowTease'] },
          ]);
        }
      } else {
        scene.text('You are half-tempted to go on the offensive, show him what he\'s missing out on by acting like a knight in shining armor and see if that won\'t change his mind.');
        if (((s as any).stat ?? 0)?.['bj'] > 20) {
          scene.text('Or you could just pull his pants off and blow him - you\'ve done it enough times to know how convincing that can be.');
          scene.actions([
            { label: 'Be even more aggressive - Give Martin a blowjob', handler: (st: GameState) => {
    (st as any).MartinConvinceBJ = 1;
  }, goto: ['MartinSex3', 'MartinBlowTease'] },
          ]);
        }
        scene.actions([
          { label: 'Go on the offensive - Strip', handler: (st: GameState) => {
    (st as any).MartinStripVar = 1;
  }, goto: ['MartinSex', 'MartinTease'] },
        ]);
      }
    }
    scene.actions([
      { label: 'I understand (calm)', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinunderstand.jpg');
    (s as any).MartinSexTalk = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A216', 1);
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('Could he be right? Maybe it really isn\'t a good idea to act on this. He is old enough to be your father, after all; and right now, you are friends and everything is fine - why risk that for a bit of fun?');
    scene.text('"I understand… I guess." You step back. Of course, you feel a little rejected, but your mind is working hard to convince you that it\'s better this way.');
    // TODO-QSP: dynamic text: "Good," Martin gives a sigh of relief. You could tell that he was holding himsel...
    scene.text(`"Good," Martin gives a sigh of relief. You could tell that he was holding himself back, but the sigh gives you an impression of how much of an effort that really was for him. "I don't want this to stand between us, ${((s as any).pcs_firstname ?? 0)}, I just… Uh…" He trails off, unsure what to say.`);
    scene.text('"It\'s okay," you assure him. "I… I guess I better get going."');
    scene.text('"Yeah, I should finish this up anyway," he agrees awkwardly, nodding to the mop in his hand. "See you soon?"');
    scene.text('"Sure, I\'ll be around."');
    scene.text('You give him as much of a smile as you can manage, turn around and leave the bar, utterly confused as to what you want.');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
      { label: 'Storm out (angry)', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinangry.jpg');
    (s as any).MartinSexTalk = 1;
    (s as any).MartinSexTalkDay = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'lower', 'tiny');
    // TODO-QSP: $OpenInnerThought + 'Too young? Really?' + $CloseInnerThought
    scene.text('Being treated like you are basically a child pisses you off to no end. Who is he to decide what is good or bad for you, anyway?');
    scene.text('Well, if he wants some teenage drama, he can have it!');
    scene.text('"Fine, you know what? Fuck this." You turn around, walking towards the door, barely able to contain your anger.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>," Martin begins, his voice taking on his most calming tone, ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}," Martin begins, his voice taking on his most calming tone, but instead of calming you, it is the pinprick needed to set you off.`);
    // TODO-QSP: dynamic text: In the blink of an eye, you are face to face with him again, yelling at him unre...
    scene.text(`In the blink of an eye, you are face to face with him again, yelling at him unrestrainedly. "No! Apparently, you think I'm too young and too dumb to know what I want, so you don't get to '${((s as any).pcs_firstname ?? 0)}' me! I don't need another stepdad who knows what's best for me!"`);
    scene.text('Before Martin could utter even another word, you had stormed out of the bar, livid at his paternalism and, deep down, below the layers of fury, wounded by his rejection.');
    scene.actions([
      { label: 'Get out of the bar', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    scene.text('You approach Martin from behind, but you aren\'t sure he has noticed you yet. He said you were too young to know better, that you were seeing something in him that wasn\'t there - he was basically saying that you were stupid, wasn\'t he?');
    scene.text('But instead of forgetting about him or wallowing in self-pity, you are now standing here, and feeling indecisive at that. What are you gonna do, apologize to him for not letting yourself be patronized? It\'s not like he was right… right?');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      scene.text('Maybe he just needs a little push. Maybe, all you have to do is show him that you aren\'t too young, show him what he is missing out on.');
      if (((s as any).cycle ?? 0) === 0) {
        scene.text('But, damn, since you are currently on your period, that isn\'t an option today. You will have to think of something else or come back some other time.');
      }
      if (((s as any).stat ?? 0)?.['bj'] > 20) {
        if (((s as any).cycle ?? 0) === 0) {
          scene.text('A good blowjob would probably set him straight right quick, no matter what time of the month it is.');
        } else {
          scene.text('And if all else fails, you can just go down on Martin - what man\'s going to argue with a woman who her lips wrapped around his cock?');
        }
      }
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      if (((s as any).cycle ?? 0) !== 0) {
        scene.actions([
          { label: 'Go on the offensive - Strip', handler: (st: GameState) => {
    (st as any).MartinStripVar = 1;
  }, goto: ['MartinSex', 'MartinTease'] },
        ]);
      }
      if (((s as any).stat ?? 0)?.['bj'] > 20) {
        scene.actions([
          { label: 'Be even more aggressive - Give Martin a blowjob', handler: (st: GameState) => {
    (st as any).MartinConvinceBJ = 1;
  }, goto: ['MartinSex3', 'MartinBlowTease'] },
        ]);
      }
    }
    if (((s as any).MartinSexTalk ?? 0) === 2  &&  ((s as any).MartinSex ?? 0) === 0) {
      scene.text('You approach Martin as he\'s cleaning the floor. The bartender raises his head when he notices you.');
      // TODO-QSP: dynamic text: "Oh, I didn't think you were still here, <<$pcs_firstname>>."
      scene.text(`"Oh, I didn't think you were still here, ${((s as any).pcs_firstname ?? 0)}."`);
      // TODO-QSP: dynamic text: You pout your <<$pc_desc['lip size']>> lips. "If you are that unhappy about it, ...
      scene.text(`You pout your ${((s as any).pc_desc ?? 0)?.['lip size']} lips. "If you are that unhappy about it, maybe you want me to leave?"`);
      scene.text('He gives you a half-smile. "No, of course not."');
      scene.text('"Thought so," you say, smiling back.');
      scene.text('Martin rejected you, but you can tell that he is attracted to you, no matter what he said about age. You told him that you understand, but that doesn\'t mean it has to be the final word in the matter…');
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
        if (((s as any).cycle ?? 0) === 0) {
          scene.text('You are half-tempted to go on the offensive, show him what he\'s missing out on by acting like a knight in shining armor and see if that won\'t change his mind, but then you remember that you are on your period, so stripping isn\'t really a sexy option right now.');
          scene.text('Or you could just pull his pants off and blow him - you\'ve done it enough times to know how convincing that can be, and your period certainly isn\'t going to stand in the way of <i>that</i>.');
        } else {
          scene.text('You are half-tempted to go on the offensive, show him what he\'s missing out on by acting like a knight in shining armor and see if that won\'t change his mind.');
          if (((s as any).stat ?? 0)?.['bj'] > 20) {
            scene.text('Or you could just pull his pants off and blow him - you\'ve done it enough times to know how convincing that can be.');
          }
        }
      }
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
        if (((s as any).cycle ?? 0) !== 0) {
          scene.actions([
            { label: 'Go on the offensive - Strip', handler: (st: GameState) => {
    (st as any).MartinStripVar = 1;
  }, goto: ['MartinSex', 'MartinTease'] },
          ]);
        }
        if (((s as any).stat ?? 0)?.['bj'] > 20) {
          scene.actions([
            { label: 'Be even more aggressive - Give Martin a blowjob', handler: (st: GameState) => {
    (st as any).MartinConvinceBJ = 1;
  }, goto: ['MartinSex3', 'MartinBlowTease'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Leave the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'mood', 'lower', Math.floor(Math.random() * 2) + 0);
    scene.text('"Just wanted to say goodnight before I leave," you say, feeling a little tense and unhappy with yourself for running away instead of dealing with whatever emotional dilemma you are facing.');
    scene.text('"Already?" He asks.');
    scene.text('"Yeah, I have to get up early tomorrow," you apologize. "Don\'t work too hard, yeah?"');
    scene.text('"And you be careful on your way home," Martin admonishes.');
    scene.text('You share a brief, friendly hug and goodbye before you turn and leave the bar, wondering if or when you will gather the courage to talk about this with Martin again.');
    scene.text('<i>Maybe tomorrow</i>, you think to yourself.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Avoid the topic - Chat with Martin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('You don\'t know if you want to have the final word, though. Shouldn\'t you go into this with some kind of plan, an idea of how to convince him? Hell, are you even sure you want more from him? Isn\'t it enough to be friend with him?');
    scene.text('Your inability to answer these questions makes the decision for you, and you just have a normal chat with Martin.');
    // TODO-QSP: dynamic text: Every now and then, you get a little flirty or add a double entendre, but you ke...
    scene.text(`Every now and then, you get a little flirty or add a double entendre, but you keep the conversation light and friendly overall, same as you would during your regular visits and talks. You catch up on the day-to-day' + iif($MartinHobby!', ', your ${((s as any).MartinHobby ?? 0)},', ') + ' and talk about a few other trivial things, doing your best to ignore his occasional glance at your ${((s as any).pc_desc ?? 0)?.['breast']} breasts.`);
    scene.text('After about half an hour, you decide that you should let Martin finish up for the night. After a brief but friendly goodnight, you leave the bar with a tingly stomach - whether it\'s from nervousness, desire or something else, you can\'t tell, but you probably won\'t find out unless you talk about this with Martin.');
    scene.text('<i>Maybe tomorrow</i>, you think to yourself.');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Talk about "getting involved"', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinreconcile.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('As far as you\'re concerned, it\'s time to address the elephant in the room.');
    scene.text('"Martin, I think we should talk."');
    scene.text('The bartender frowns. "Alright, corazón. What do you want to talk about?"');
    scene.text('<i>Damn.</i> You were hoping that he would help you with this, what with the situation being pretty awkward as it is, but him playing dumb doesn\'t make this easier.');
    scene.text('"Uh…"');
    scene.text('You are feeling indecisive, and the way Martin is looking at you is putting even more pressure on you. You are attracted to him, one way or another, that much is clear, but why is it so damn hard to put into words what you have on your mind?');
    scene.text('Well, with your eloquence having deserted you at the worst possible moment, the question is:');
    scene.text('Do you take a stand or run for the hills?');
    scene.actions([
      { label: 'Chicken out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'mood', 'lower', 'small');
    // TODO-QSP: $OpenInnerThought + 'I want to talk about this! I really, really do!' + $CloseInnerThought + ' You t...
    scene.text('… but that doesn\'t mean it has to be today, right?');
    scene.text('"Nevermind, it\'s not urgent," you backpedal quickly. "I have to go now."');
    scene.text('Feeling really awkward, and a little angry with yourself for chickening out, you turn around and leave, ignoring the confused but somewhat relieved Martin.');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
      { label: 'Kiss Martin', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinkiss.mp4');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).MartinSex = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A216', 2);
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('Deciding to act before you can change your mind, you close the gap between the two of you and kiss Martin.');
    scene.text('He was probably prepared for you bringing up your mutual attraction, but it seems he didn\'t think you would be this forward. He doesn\'t push you away, but he isn\'t really kissing you back either. However, as you\'re pressing up against him, you can feel a slight bulge forming in his crotch that gives you a small sense of accomplishment and reassurance.');
    // TODO-QSP: dynamic text: When you break the kiss, Martin looks at in silence for a moment. "<<$pcs_firstn...
    scene.text(`When you break the kiss, Martin looks at in silence for a moment. "${((s as any).pcs_firstname ?? 0)}, we talked about this. It-"`);
    scene.text('"No," you interrupt him, "<b>you</b> talked about this. I tried to tell you that I didn\'t care what you were saying." You grin.');
    scene.text('Again, he musters you in silence for a long moment. He seems to be struggling with himself, weighing his obvious desire to give in against his better judgment.');
    scene.text('"Are you sure you want this?" He asks finally.');
    scene.text('Yeah, are you? You didn\'t even expect to get this far, did you?');
    scene.text('"I don\'t know what I\'ll want a year from now," you answer honestly, "I don\'t even know what I\'ll want a week from now, but I know that, right now, I want you."');
    scene.text('For a few seconds, nothing happens - Martin seems indecisive, a feeling you know all too well.');
    // TODO-QSP: dynamic text: Then, all of a sudden, you feel his lips against yours, showing without a doubt ...
    scene.text(`Then, all of a sudden, you feel his lips against yours, showing without a doubt which side of him won the argument, and you kiss him back with a passion, your ${((s as any).pc_desc ?? 0)?.['tongue']} tongue finally united with his.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Better to take it slow - Leave', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text('You make out for a while and the urge to take this further is strong, but something is holding you back. Why rush into this? Waiting a little longer would surely make it even better, right? And maybe, just maybe, you need a day or two to process what just happened.');
    scene.text('Despite how good the kiss feels, you break it eventually and step back, out of your tight embrace with Martin. You\'re breathing is heavy, but you manage to state what\'s on your mind:');
    scene.text('"We should take it slow."');
    scene.text('Martin\'s cock must be rock-hard by now if the bulge in his pants is anything to go by, and his breathing is as heavy as yours, but he nods slowly.');
    scene.text('"You\'re right. I… uh, I have to finish up here at the bar anyway."');
    scene.text('"Finishing up, huh?" You smirk.');
    scene.text('"Oh, screw you," he retorts, and both of you break into a chuckle. The unintended pun helps you keep your cool, though - it took a lot of convincing, both on your end and on his, to get this far, and you don\'t want to mess up this careful balance between friendship and… Attraction? Love? Overflowing horniness? By jumping the gun.');
    scene.text('"Okay, then I\'ll see you soon?"');
    scene.text('"Yeah. You know where to find me, corazón." Martin gives you the most lighthearted smile you have ever seen on him - it\'s strange how that can make a man look younger, and how that can make you weak in the knees.');
    // TODO-QSP: dynamic text: With a goofy smile of your own plastered on your <<$pc_desc['face']>> face, you ...
    scene.text(`With a goofy smile of your own plastered on your ${((s as any).pc_desc ?? 0)?.['face']} face, you turn around and leave the bar.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
      { label: 'Go down on Martin', goto: ['MartinSex3', 'MartinBlowTease'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Still here, <<$pcs_firstname>>?"
      scene.text(`"Still here, ${((s as any).pcs_firstname ?? 0)}?"`);
      scene.text('"So it would seem," you smile and approach him. "Would you like me to leave?"');
      scene.text('"No." In the blink of an eye, Martin has pulled you close and gives you a kiss. "Can\'t you tell?"');
      scene.text('You laugh in surprise, but also because you <b>can</b> tell that he has a bulge in his pants.');
      if (((s as any).cycle ?? 0) !== 0) {
        scene.actions([
          { label: 'Tease him', goto: ['MartinSex', 'MartinTease'] },
        ]);
      }
      scene.actions([
        { label: 'Leave the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 2) + 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.text('"But, really, I just wanted to say goodnight before I leave," you say teasingly.');
    scene.text('"Oh, you gotta leave already?" He asks, sounding a little disappointed.');
    scene.text('"Yeah, I have to get up early tomorrow," you apologize, your eyes glued to his poorly hidden hard-on. "Don\'t work too <b>hard</b>, yeah?" You grin coquettishly.');
    scene.text('"Oh, screw you," he murmurs, but grins too.');
    scene.text('You share a kiss, and a fondle or two, but you don\'t wanna make this <b>harder</b> on him than it already is, so you finally step away, smiling inwardly at your stupid pun.');
    scene.text('"Be careful on your way home," Martin admonishes, as usual.');
    // TODO-QSP: dynamic text: You raise your <<$pc_descRandom['brow']>> eyebrow at that, but there's no helpin...
    scene.text(`You raise your ${((s as any).pc_descRandom ?? 0)?.['brow']} eyebrow at that, but there's no helping it - he's gonna worry anyway.`);
    scene.text('"Always am," you reassure him, turn around and leave the bar, wondering if, maybe instead of leaving, you should have fucked Martin\'s brains out.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Talk to Martin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 1);
    scene.text('But you decide not to indulge him today. After all, you are a respectable woman who would <b>never</b> have sex in a public place, right?');
    scene.text('So instead, you just have a normal chat with Martin. Well, as normal as can be in this situation.');
    // TODO-QSP: dynamic text: You catch up on the day-to-day' + iif($MartinHobby!', ', your <<$MartinHobby>>,'...
    scene.text(`You catch up on the day-to-day' + iif($MartinHobby!', ', your ${((s as any).MartinHobby ?? 0)},', ') + ' and talk about a few other trivial things, but this conversation is at regular intervals interrupted by double entendres, kisses, you giving Martin generous looks at your ${((s as any).pc_desc ?? 0)?.['breast']} cleavage and ${((s as any).bodyVars ?? 0)?.['desc']} ass, and other things you cannot or will not do while the bar is open.`);
    scene.text('After about half an hour of talking, among other things, you decide that you should let Martin finish up for the night. After a final goodnight kiss, you leave the bar with a tingly stomach, your mind still lingering at the bulge in his pants and all the things you could do with him instead of talking…');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
        { label: 'Blow him', goto: ['MartinSex3', 'MartinBlowTease'] },
      ]);
    }
    scene.actions([
      { label: 'Reconcile with Martin', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martinreconcile.jpg');
    (s as any).MartinSexTalk = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A216', 2);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.text('No matter how you look at it, things didn\'t go well last time. You hate the way he decided for you without actually listening to you, but are you happy about how you basically told him to go fuck himself?');
    scene.text('No, not really. And the way things look, your only options are to either be the bigger woman or to have awkward conversations with him, if any, from hereon out.');
    scene.text('With an inward sigh, you decide that it is time to restore your friendship with Martin… or whatever it is that\'s going on between you.');
    scene.text('"Martin?"');
    scene.text('Martin doesn\'t seem startled when you call out to him - on the contrary, it seems like he was just waiting for you to address him, and now that you have, he turns to face you, looking friendly as ever - well, maybe he seems a little more on edge than usual.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>. Still here?"
    scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}. Still here?"`);
    scene.text('"Yeah, I waited for you to close the bar so we could talk. I…" You don\'t really know what you want to tell him. Part of you feels that apologizing may not be the worst thing to do, but another insists that you have nothing to apologize for. "I wanted to tell you that I understand… I guess. Or, well, no, I don\'t, but at least I\'m trying to understand what you meant last time."');
    // TODO-QSP: dynamic text: "Good," Martin gives a sigh of relief. You could tell that he was a little on ed...
    scene.text(`"Good," Martin gives a sigh of relief. You could tell that he was a little on edge, but the sigh gave away how uncertain he was about what you were gonna do or say. "I'm sorry too, ${((s as any).pcs_firstname ?? 0)}, if I offended you. I probably chose my words poorly and I don't want this to stand between us, I just don't want you to do something you'll regret."`);
    scene.text('"I get it," you hear yourself say. Do you really, though?');
    scene.text('Neither of you has anything more to say, it seems. You spend a few minutes in silence, looking at each other. No, it sure isn\'t the same it was before. You can definitely sense that tension that lead to this mess in the first place.');
    scene.text('But the silence isn\'t nearly as bad as it could be, or maybe should be. Clearing the air was cathartic, and while you cannot just launch into one of your casual banters, you\'ll be fine, given a little time.');
    scene.text('It\'s you who eventually breaks the silence. "I, uh… I guess I better get going."');
    scene.text('"Yeah, I should finish this up anyway," he agrees awkwardly, nodding to the mop in his hand. "See you soon?"');
    scene.text('"Sure, I\'ll be around."');
    scene.text('You give him as much of a smile as you can manage, turn around and leave the bar, relieved at your reconciliation but also unsure as to whether the restored friendship is enough for you.');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
      { label: 'You are still too angry to talk to him - Just leave the bar', handler: (st: GameState) => {
    scene.text('But as much as you try to bring yourself to, you just can\'t properly face him yet.');
    scene.text('You turn and go towards the exit. You can hear something behind you, feel his look on your back, but you ignore it as best you can and go outside, the matter between you unresolved.');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const MartinSex: LocationDef = {
  name: 'MartinSex',
  title: 'You approach Martin as he\'s cleaning the floor. The bartende',
  region: 'other',
  description: ['You approach Martin as he\'s cleaning the floor. The bartender raises his head when he notices you.'],
  enter: enter,
};
