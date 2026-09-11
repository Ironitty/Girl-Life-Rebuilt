import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'npc_relationship', 'modify', 'A216', Math.floor(Math.random() * 2) + 0);
  scene.img('images/locations/city/industrial/bar/martinafterhours.jpg');
  if (((s as any).MartinSexTalk ?? 0) === 0  &&  (!((s as any).MartinSex ?? 0))) {
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
      if ((!((s as any).cycle ?? 0))) {
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
    if (((s as any).MartinSexTalk ?? 0) === 1  &&  (!((s as any).MartinSex ?? 0))) {
      scene.text('You approach Martin from behind, but you aren\'t sure he has noticed you yet. He said you were too young to know better, that you were seeing something in him that wasn\'t there - he was basically saying that you were stupid, wasn\'t he?');
      scene.text('But instead of forgetting about him or wallowing in self-pity, you are now standing here, and feeling indecisive at that. What are you gonna do, apologize to him for not letting yourself be patronized? It\'s not like he was right… right?');
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
        scene.text('Maybe he just needs a little push. Maybe, all you have to do is show him that you aren\'t too young, show him what he is missing out on.');
        if ((!((s as any).cycle ?? 0))) {
          scene.text('But, damn, since you are currently on your period, that isn\'t an option today. You will have to think of something else or come back some other time.');
        }
        if (((s as any).stat ?? 0)?.['bj'] > 20) {
          if ((!((s as any).cycle ?? 0))) {
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
    } else {
      if (((s as any).MartinSexTalk ?? 0) === 2  &&  (!((s as any).MartinSex ?? 0))) {
        scene.text('You approach Martin as he\'s cleaning the floor. The bartender raises his head when he notices you.');
        // TODO-QSP: dynamic text: "Oh, I didn't think you were still here, <<$pcs_firstname>>."
        scene.text(`"Oh, I didn't think you were still here, ${((s as any).pcs_firstname ?? 0)}."`);
        // TODO-QSP: dynamic text: You pout your <<$pc_desc['lip size']>> lips. "If you are that unhappy about it, ...
        scene.text(`You pout your ${((s as any).pc_desc ?? 0)?.['lip size']} lips. "If you are that unhappy about it, maybe you want me to leave?"`);
        scene.text('He gives you a half-smile. "No, of course not."');
        scene.text('"Thought so," you say, smiling back.');
        scene.text('Martin rejected you, but you can tell that he is attracted to you, no matter what he said about age. You told him that you understand, but that doesn\'t mean it has to be the final word in the matter…');
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
          if ((!((s as any).cycle ?? 0))) {
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
    }
  }
  scene.build();
}

function enterMartinTease(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).MartinStripVar ?? 0) === 1) {
    (s as any).MartinSex = 1;
    (s as any).MartinSexTalk = 2;
    if (((s as any).pcs_dancero ?? 0) <= 50) {
      qspCall(s, 'exp_gain', 'dancero', Math.floor(Math.random() * 4) + 2);
    }
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([{ label: 'Continue', goto: ['MartinSex', 'MartinTease1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['MartinSex', 'MartinTease2'] }]);
    }
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([{ label: 'Continue', goto: ['MartinSex', 'MartinTease3'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['MartinSex', 'MartinTease4'] }]);
    }
  }
  scene.build();
}

function enterMartinTease1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease1.jpg');
  scene.text('You are not in the mood to play hard-to-get; in fact, now that you think about it, maybe the easiest way to get Martin to drop this "you deserve better" spiel is to be <i>easy</i>.');
  scene.text('You bend over and take off your lower garment.');
  // TODO-QSP: dynamic text: Martin is utterly perplexed by that. "<<$pcs_firstname>>, what are you-"
  scene.text(`Martin is utterly perplexed by that. "${((s as any).pcs_firstname ?? 0)}, what are you-"`);
  scene.text('"Oops, I seem to have accidentally pulled my panties down," you say innocently, giving him a broad smile.');
  // TODO-QSP: dynamic text: Most of your crotch is revealed to him, but your <<$pc_desc['pussy']>> pussy is ...
  scene.text(`Most of your crotch is revealed to him, but your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy is only vaguely perceptible. Still, you can already tell that the situation is entirely different from how it was a minute ago - the suave barkeeper is on the defensive. And you are just getting started…`);
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease2.jpg');
    scene.text('You pull your panties all the way down to your knees and spin around for a moment to let him look at you from all sides. Spotting a growing bulge in his pants, you turn your back to Martin and bend over a nearby table.');
    scene.text('"Well?" You ask flirtatiously over your shoulder, your pussy and asshole completely revealed to him. "Do I still look too young to you? Or… just old enough?"');
    scene.text('His speechlessness is all the answer you need.');
    scene.text('And you can\'t blame him for this reaction - you went from being a friendly flirt to showing him your pussy in under a minute, so most men would need a second to catch up with a reality that has gone utterly mad.');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/buttplug.jpg');
      scene.text('But it seems that something particular, in your ass, has caught his attention.');
      scene.text('"Oh." You realize that you are still wearing your anal plug. "Do you like my buttplug?" You ask Martin coyly.');
      scene.text('He still seems a little dumbfounded, but has regained enough control over himself to nod.');
      scene.text('Smiling to yourself, you slowly remove the toy from your ass. You have a feeling that he is already at his limit coping with your stripping, so your buttplug may be a little more than he can handle right now.');
    }
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climb on the table', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease3.jpg');
    // TODO-QSP: dynamic text: Deciding to make full use of the table being there, you climb on top of it and s...
    scene.text(`Deciding to make full use of the table being there, you climb on top of it and sit down, spreading your legs to give Martin a good view of your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy.`);
    scene.text('"You could do more than just look, you know." The flirtatious tone is gone now - anything but being openly sultry just wouldn\'t do this porno-esque situation justice.');
    // TODO-QSP: dynamic text: Plus, Martin isn't the only one getting turned on by this, and both of you can s...
    scene.text(`Plus, Martin isn't the only one getting turned on by this, and both of you can see it. "This ${((s as any).pc_desc ?? 0)?.['pubes']} ${((s as any).pc_desc ?? 0)?.['pussy']} pussy could be yours."`);
    scene.text('Maybe something you said shook him out of his reverie, or maybe enough time has passed for him to snap out of it, but Martin seems to have regained the ability to speak. But he just loves saying things you don\'t want to hear, doesn\'t he?');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I'm trying to be <b>sensible</b> here. This is not a good i...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, I'm trying to be <b>sensible</b> here. This is not a good idea. You should cover yourself and go."`);
    scene.text('It\'s telling that his mouth says one thing while his eyes are transfixed with your glistening pussy.');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sensibly take off your shirt', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease4.jpg');
    scene.text('"I don\'t know what gave you the idea that I wanted \'sensible\'."');
    scene.text('As you say that, you pull your shirt over your head, revealing your breasts to him. "A man should be able to tell when a woman wants to fuck. Can\'t you?"');
    scene.text('Pride - it is most men\'s sore spot and your final remarks were squarely aimed at Martin\'s sense of pride. You might as well have asked him if he couldn\'t get it up. It was a dangerous game to play.');
    scene.text('But it worked: Before you know it, Martin has closed the gap between you and is kissing you, hard.');
    // TODO-QSP: dynamic text: His hands are roaming your body, pawing at your breasts, brushing against your a...
    scene.text(`His hands are roaming your body, pawing at your breasts, brushing against your ass and pussy. Then, all of a sudden, Martin pulls you closer to the edge, his pants miraculously already undone, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick revealed in all its glory.`);
    scene.text('"Alright, niña," he growls, "you asked for a fuck, you\'ll get a fuck."');
    qspCall(s, 'arousal', 'foreplay', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Martin fuck you', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexDyn'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMartinTease2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'wine');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopant_tease1.jpg');
  scene.text('You are not in the mood to play hard-to-get; in fact, now that you think about it, maybe the easiest way to get Martin to drop this "you deserve better" spiel is to be <i>easy</i>.');
  scene.text('"You know what?" You slip out of your shoes first. "I think I\'ll have something to drink. Do you have wine somewhere behind… Ah, I see it."');
  scene.text('Without waiting for Martin\'s reply, you stretch and bend over the counter slightly, reaching for a glass and an open bottle of white wine. You didn\'t even know Martin had wine.');
  scene.text('The trick in all this was to make it look natural while carefully shifting around just enough so he could…');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>," you can hear him swallow from across the room, "are you we...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}," you can hear him swallow from across the room, "are you wearing underwear?"`);
  scene.text('Bingo.');
  scene.text('You look at him, glass of wine in hand and standing on your tiptoes, your pantiless crotch just barely visible to him, and take a sip.');
  scene.text('"I must have forgotten to put it on," you note innocently.');
  qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Time for a good look', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease2.jpg');
    scene.text('It wouldn\'t be nice to tease Martin with a sight like that and keep him guessing if the carpets do indeed match the drapes.');
    // TODO-QSP: dynamic text: Without putting the glass down, you turn your side to Martin and bare your lower...
    scene.text(`Without putting the glass down, you turn your side to Martin and bare your lower half with your free hand. You can feel Martin's eyes linger on your ${((s as any).pc_desc ?? 0)?.['legs']} legs, but you know what he really wants to see, as much as he'd deny it.`);
    // TODO-QSP: dynamic text: Feeling ready to burn whatever bridge there's left behind you, you face Martin, ...
    scene.text(`Feeling ready to burn whatever bridge there's left behind you, you face Martin, revealing your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy to him. He seems shocked by your boldness; not just by you stripping for him, right here in the empty bar - although that must be a big part of it - but also by the fact that you had been walking around commando like there was nothing to it.`);
    scene.text('"Like what you see?"');
    scene.text('You don\'t know if he was even physically capable of saying no, given that he just barely managed to croak a "yes" - still, it was nice that he was being honest with you and himself.');
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Then he\'s gonna like what\'s next', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease3.jpg');
    scene.text('With an audience as appreciative as this, how could you possibly stop now?');
    // TODO-QSP: dynamic text: Setting the glass, your trusty prop, aside, you pull down what little covers you...
    scene.text(`Setting the glass, your trusty prop, aside, you pull down what little covers your ${((s as any).pc_desc ?? 0)?.['chest']} chest and ${((s as any).pc_desc ?? 0)?.['belly']} belly, giving Martin a good look at your ${((s as any).pc_desc ?? 0)?.['breast']} tits, your ${((s as any).pc_desc ?? 0)?.['nipples']} nipples standing hard thanks to the chilly, smoky air… and maybe also due to his intense stares.`);
    // TODO-QSP: dynamic text: You lift your arms a little, playing with your <<$pc_descWordy['hair length']>> ...
    scene.text(`You lift your arms a little, playing with your ${((s as any).pc_descWordy ?? 0)?.['hair length']} and sticking out your breasts even more.`);
    scene.text('No, you <b>really</b> aren\'t making it easy for Martin to adhere to his principles regarding celibacy and sexy young women, or whatever it is that\'s holding him back from bending you over and nailing you into the fucking counter.');
    scene.text('He\'s not frozen solid anymore, though. He seems to be struggling with his lust, and you don\'t think his \'reason\' is winning.');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go Lust!', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease4.jpg');
    scene.text('He\'s staggering, but he isn\'t out yet. You have to keep at it.');
    scene.text('"I\'m flexible, too. See?"');
    // TODO-QSP: dynamic text: You don't wait for a reply. You simply lift your <<$pc_desc['legs']>> leg up ove...
    scene.text(`You don't wait for a reply. You simply lift your ${((s as any).pc_desc ?? 0)?.['legs']} leg up over the stool next to you, giving him a spectacular view at your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, stop." Martin has found his voice again, it seems - not tha...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, stop." Martin has found his voice again, it seems - not that he's using it to say something helpful. "This is wrong."`);
    scene.text('"Really?" You look at your leg, confused. "Yeah, I guess you\'re right."');
    scene.text('You momentarily see something like hope or relief flare up in his eyes. You are not feeling very merciful tonight, though:');
    // TODO-QSP: dynamic text: You put one of your hands on your ass and pull slightly, completely revealing wh...
    scene.text(`You put one of your hands on your ass and pull slightly, completely revealing what little of your pussy and ${((s as any).pc_desc ?? 0)?.['anus']} asshole wasn't already visible to him.`);
    scene.text('"There, better now?"');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/buttplug.jpg');
      scene.text('But it seems that something particular, in your ass, has caught his attention, rendering him silent once more.');
      scene.text('"Oh." You realize that you are still wearing your anal plug. "Don\'t mind my buttplug."');
      scene.text('If he does mind, he\'s unable to say it.');
      scene.text('Smiling to yourself, you slowly remove the toy from your ass. You have a feeling that he is already at his limit, coping with your stripping and lack of panties, so your buttplug may be a little more than he can handle right now.');
    }
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Just one last push…', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease5.jpg');
    scene.text('Ridding yourself of what little items you have still left on you, you put your leg up on the bar and bend over. Your ass and pussy aren\'t just visible to Martin - they are also very much accessible.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>-" But you cut him off.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}-" But you cut him off.`);
    scene.text('"If you are gonna say anything but \'I want to fuck you so bad right now\', I\'m going to scream." You\'re not sound very playful now, to be honest. All the cards are on the table, and you went about a million extra miles to show Martin just how much you want him. If he doesn\'t finally take a hint, you\'re going to-');
    scene.text('But before you can even finish the thought, Martin kissing you, hard, his hands are roaming your body and exploring every mound and every crevice.');
    scene.text('"Alright, you asked for it," he growls, "but I\'m not gonna play nice."');
    scene.text('"I never wanted you to," you moan, his fingers stroking your pussy and clit.');
    // TODO-QSP: dynamic text: You don't know if his zipper exploded at your last words or if he was just that ...
    scene.text(`You don't know if his zipper exploded at your last words or if he was just that damn good with his hands that you didn't even notice when he opened it to reveal his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick, but you cannot wait to feel him inside you and, judging by how he's now taking position behind you, neither can he.`);
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Martin fuck you', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexDyn'] },
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

function enterMartinTease3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_dancero ?? 0) <= 50) {
    qspCall(s, 'exp_gain', 'dancero', Math.floor(Math.random() * 4) + 2);
  }
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease1.jpg');
  scene.text('Feeling in the mood to give Martin a bit of a show today, you give him a soft push, just strong enough to make him get the hint and sit down on the chair behind him.');
  // TODO-QSP: dynamic text: You then take a few steps back and slowly bend forward, giving him a generous lo...
  scene.text(`You then take a few steps back and slowly bend forward, giving him a generous look at your ${((s as any).pc_desc ?? 0)?.['breast']} cleavage and ${((s as any).pc_desc ?? 0)?.['legs']} legs as you take off your lower garment.`);
  scene.text('Martin certainly looks like he likes where this is going, and you have no intention of changing course.');
  scene.text('Without much ado, you smile and pull down your panties as well. Most of your crotch is revealed to him, but your sex is only vaguely perceptible. But taking the initiative like this is fun, and it adds to the thrill to know that you\'re standing in the middle of a bar, even if nobody\'s gonna enter.');
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease2.jpg');
    scene.text('You pull your panties all the way down to your knees and spin around for a moment, to let him look at you from all sides… and to bar him from seeing your exposed crotch right away. Still, you quickly spot the growing bulge in his pants - knowing that you are half-naked and seeing you in glorious, pantiless profile seems to be enough to get his engine going.');
    scene.text('You ever so slowly turn your back to Martin and lasciviously bend over a nearby table.');
    // TODO-QSP: dynamic text: "Well?" You ask flirtatiously over your shoulder, your <<$pc_desc['pubes']>> pus...
    scene.text(`"Well?" You ask flirtatiously over your shoulder, your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy and asshole completely revealed to him. "Enjoying the view?"`);
    scene.text('"You have no idea," he breathes, a lustful glint in his eyes.');
    if ((!((s as any).analPlugIn ?? 0))) {
      // TODO-QSP: dynamic text: Considering how reluctant he was to let you "settle for an old man", he seems to...
      scene.text(`Considering how reluctant he was to let you "settle for an old man", he seems to be awfully happy about that same young ${((s as any).bodyVars ?? 0)?.['desc']} woman stripping and exposing her privates to him.`);
    } else {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/buttplug.jpg');
      scene.text('Your ass in particular seems to have caught your attention, and it doesn\'t take you long to realize that he\'s staring at your anal plug with utter fascination.');
      scene.text('"My my, it\'s almost like you enjoy it when women take something up their ass," you comment playfully.');
      scene.text('"Pull it out." His voice is low but the order unmistakeable. "Slowly."');
      scene.text('"Why should I?" You ask, a hint of defiance in your response.');
      scene.text('"Because if I have to look at it a moment longer, I\'ll come over there, pull it out and fuck your ass right now."');
      scene.text('Even though you two share a laugh over his \'threat\', the thought that the plug might excite him that much makes your pussy tingle.');
      // TODO-QSP: dynamic text: Taking all the time in the world, you comply, reach down and slooooowly remove t...
      scene.text(`Taking all the time in the world, you comply, reach down and slooooowly remove the toy from your ass, moaning softly as your ${((s as any).pc_desc ?? 0)?.['anus']} ass releases its intruder.`);
      scene.text('The glint you saw earlier is now a full-blown fire, fueled by the sight of your gaping and ready asshole.');
    }
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climb on the table', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease3.jpg');
    // TODO-QSP: dynamic text: Making full use of the table being there, you climb on top and sit down on it, g...
    scene.text(`Making full use of the table being there, you climb on top and sit down on it, giving Martin an alluring smile and spreading your ${((s as any).pc_desc ?? 0)?.['legs']} legs, giving the lucky guy in the front row an exclusive look at your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy.`);
    scene.text('"The way you look at me really turns me on, you know," you sigh. The flirtatious tone is gone now - the wetness you feel between your legs makes anything but \'sultry\' feel inadequate.');
    scene.text('Your body\'s display of excitement cannot possibly have escaped Martin, because is looking at you intently, feasting on the sight of you like he\'d never get to do it again. "You and me both, mi amor."');
    scene.text('Feeling it would be cruel to continue too quickly - and enjoying his stare immensely - you give him a moment to bask in the nubile display before you…');
    qspCall(s, 'arousal', 'foreplay', 2, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take off your shirt', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/tease4.jpg');
    // TODO-QSP: dynamic text: … pull your shirt over your head, revealing your <<$pc_desc['breast']>> breasts ...
    scene.text(`… pull your shirt over your head, revealing your ${((s as any).pc_desc ?? 0)?.['breast']} breasts to Martin. "And what do you think of my tits?"`);
    scene.text('Martin leans back, smiling ear to ear, and shows you his crotch in response, and the sight before you adds fuel to the fire in your loins: He is pitching a perfect tent, his pants barely able to contain the cock underneath, and Martin seems very pleased with himself and the world. And why wouldn\'t he be? What man his age would be anything but ecstatic to have a pretty young woman strip for him, and only him, and to have her stare at his hard-on in curiosity?');
    scene.text('You could certainly make him, and yourself, even happier, if you wanted to.');
    scene.text('But at least part of the excitement you are feeling right now came from teasing Martin, from having control over the situation and over him. And, as cruel as that may be, what could possibly emphasize your power over him more than leaving him with blue balls?');
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).bag ?? 0) > 0) {
      scene.text('Or… well, you could take your \'little friend\' out of your purse and take care of your own needs before deciding anything…');
    }
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).cycle ?? 0) !== 0) {
      scene.actions([
        { label: 'Tell Martin to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 1  &&  ((s as any).cycle ?? 0) !== 0) {
        scene.actions([
          { label: 'Martin wants to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).bag ?? 0) > 0) {
      scene.actions([
        { label: 'Masturbate with your dildo', goto: ['MartinSex', 'MartinTeaseDildo'] },
      ]);
    }
    scene.actions([
      { label: 'Take care of Martin (Blowjob)', goto: ['MartinSex3', 'MartinBlowTease'] },
      { label: 'Beckon Martin to fuck you like this (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and bend over for Martin (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Roll on your side (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Blueball him. Get dressed and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-1));
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('"I\'m glad you like it," you say, swinging your legs off the table as you put your shirt back on, "because that\'s all you\'ll be getting today."');
    scene.text('At first, Martin probably thinks you\'re joking, but seeing as you\'re putting your other clothes back on as well, he gets up, frowning.');
    scene.text('"You\'d leave me here, alone, in this state?" He points towards his crotch where his dick is straining against the fabric of his pants. "You couldn\'t possibly be this cruel."');
    // TODO-QSP: dynamic text: You walk up to Martin, put your <<$pc_desc['arms']>> arms around his neck and gi...
    scene.text(`You walk up to Martin, put your ${((s as any).pc_desc ?? 0)?.['arms']} arms around his neck and give him a soft kiss. When you break it, you whisper: "If I wasn't cruel at least once in a while, you wouldn't appreciate it when I'm not."`);
    scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
    scene.text('… A horny bandit.');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
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

function enterMartinTease4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'wine');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopant_tease1.jpg');
  scene.text('Feeling in the mood to give Martin a bit of a show today, you give him a soft push, just strong enough to make him get the hint and sit down on the chair behind him.');
  scene.text('You slip out of your shoes first. "You know, I think I\'ll have something to drink. Do you mind if I help myself?"');
  scene.text('Without waiting for Martin\'s reply, you stretch and bend over the counter slightly. Spotting a glass that\'s within reach and an open bottle of white wine, you fill it with a thumb or two of the cool liquid. You don\'t think you\'ve ever seen Martin serve wine to anyone - it would seem he likes to have a little while he closes up shop.');
  scene.text('But while you are having a taste, you aren\'t standing idle. The trick in all this is to look careless, naturally moving and accidentally shifting around until…');
  scene.text('… well, until you can hear Martin swallow from across the room. "What underwear are you wearing tonight?"');
  scene.text('You smile to yourself as you look over your shoulder, your voice an enticing whisper "None at all. Why do you ask?" Glass of wine in hand and standing on your tiptoes, your pantiless crotch just barely visible to him, and take a sip.');
  scene.text('Martin chuckles softly at your nonchalance, but with his eyes glued to your crotch, he replies: "Just curious."');
  qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'A little curiosity doesn\'t hurt', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease2.jpg');
    // TODO-QSP: dynamic text: Without putting the glass down, you turn your side to Martin and bare your lower...
    scene.text(`Without putting the glass down, you turn your side to Martin and bare your lower half with your free hand, making it blatantly obvious that you were indeed going commando. You can feel Martin's eyes linger on your ${((s as any).pc_desc ?? 0)?.['legs']} legs, but you know what he really wants to see - he wants you to confirm what he already knows.`);
    // TODO-QSP: dynamic text: You slowly turn to face Martin, revealing your <<$pc_desc['pubes']>> pussy to hi...
    scene.text(`You slowly turn to face Martin, revealing your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy to him. Your boldness to strip for him, right here in the empty bar, and to walk around without underwear seem to turn him on immensely, if the bulge in his pants is any indication.`);
    scene.text('"Like what you see?" You ask, taking another small sip of wine.');
    scene.text('"You little minx", is all he says, sounding as incredulous as he does admiring - not to mention horny.');
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'He\'s gonna like what\'s next', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease3.jpg');
    scene.text('With an audience as appreciative as this, how could you possibly stop now?');
    // TODO-QSP: dynamic text: Setting the glass aside, you pull down what little covers your <<$pc_desc['chest...
    scene.text(`Setting the glass aside, you pull down what little covers your ${((s as any).pc_desc ?? 0)?.['chest']} chest and ${((s as any).pc_desc ?? 0)?.['belly']} belly, giving Martin a good look at your ${((s as any).pc_desc ?? 0)?.['breast']} tits, your ${((s as any).pc_desc ?? 0)?.['nipples']} nipples standing hard thanks to the chilly, smoky air… and maybe also due to his intense stares.`);
    // TODO-QSP: dynamic text: You lift your arms a little, playing with your <<$pc_descWordy['hair length']>> ...
    scene.text(`You lift your arms a little, playing with your ${((s as any).pc_descWordy ?? 0)?.['hair length']} and sticking out your breasts even more.`);
    scene.text('Honestly, it wouldn\'t have surprised you if he had just bent you over and nailed you into the fucking counter then and there - his eyes are certainly burning with desire enough to tell you that he wants to.');
    scene.text('But he doesn\'t jump up and fuck you. He sits there, patiently, waiting to see what else you have in store for him, how else you want to tease and torture him.');
    scene.text('He enjoys that a pretty young woman like you is putting on a show for him, and him alone, and he doesn\'t want to interrupt it.');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The show must go on', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease4.jpg');
    scene.text('Well, if it\'s a sexy torture he wants, you are happy to deliver.');
    scene.text('"Want to see how flexible I am?"');
    // TODO-QSP: dynamic text: You don't wait for a reply. You simply lift your <<$pc_desc['legs']>> leg up ove...
    scene.text(`You don't wait for a reply. You simply lift your ${((s as any).pc_desc ?? 0)?.['legs']} leg up over the stool next to you, giving him a spectacular view at your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy.`);
    scene.text('When you look up from the stool, you are stunned to see Martin give you a look of indifference. "That\'s okay, I guess."');
    scene.text('You almost burst into laughter after your brain has caught up with his challenge, but you are only too happy to indulge him, if it\'s an even sexier display he wants.');
    // TODO-QSP: dynamic text: You put one of your hands on your ass and pull slightly, completely revealing wh...
    scene.text(`You put one of your hands on your ass and pull slightly, completely revealing what little of your pussy and ${((s as any).pc_desc ?? 0)?.['anus']} asshole wasn't already visible to him.`);
    scene.text('"Just okay, huh?"');
    if ((!((s as any).analPlugIn ?? 0))) {
      scene.text('"Maybe a little better than okay," he smirks.');
      // TODO-QSP: dynamic text: Considering how reluctant he was to let you "settle for an old man", he seems to...
      scene.text(`Considering how reluctant he was to let you "settle for an old man", he seems to be awfully happy about teasing that same young ${((s as any).bodyVars ?? 0)?.['desc']} woman while she's stripping and exposing her privates to him.`);
    } else {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/buttplug.jpg');
      scene.text('But something on your ass seems to distract him from your question, and it doesn\'t take you long to realize that he\'s staring at your anal plug with utter fascination.');
      scene.text('"My my, it\'s almost like you enjoy it when women take something up their ass," you comment playfully.');
      scene.text('"Pull it out." His voice is low but the order unmistakeable. "Slowly."');
      scene.text('"Why should I?" You ask, a hint of defiance in your response.');
      scene.text('"Because if I have to look at it a moment longer, I\'ll come over there, pull it out and fuck your ass right now."');
      scene.text('Even though you two share a laugh over his \'threat\', the thought that the plug might excite him that much makes your pussy tingle.');
      // TODO-QSP: dynamic text: Taking all the time in the world, you comply, reach down and slooooowly remove t...
      scene.text(`Taking all the time in the world, you comply, reach down and slooooowly remove the toy from your ass, moaning softly as your ${((s as any).pc_desc ?? 0)?.['anus']} ass releases its intruder.`);
      scene.text('The glint you saw earlier is now a full-blown fire, fueled by the sight of your gaping and ready asshole.');
    }
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Better than okay', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/nopanties_tease5.jpg');
    scene.text('Ridding yourself of what little items you have still left on you, you put your leg up on the bar and bend over. Your ass and pussy aren\'t just visible to Martin - they are also very much accessible.');
    scene.text('"So…" Your tone is about as casual as you can muster, but your glistening pussy gives away your true feelings. "What do you think of my body?"');
    scene.text('Martin leans back, smiling ear to ear, and shows you his crotch in response, and the sight before you adds fuel to the fire in your loins: He is pitching a perfect tent, his pants barely able to contain the cock underneath, and Martin seems very pleased with himself and the world. And why wouldn\'t he be? What man his age would be anything but ecstatic to have a pretty young woman strip for him, and only him, and to have her stare at his hard-on in curiosity?');
    scene.text('You could certainly make him, and yourself, even happier, if you wanted to.');
    scene.text('But at least part of the excitement you are feeling right now came from teasing Martin, from having control over the situation and over him. And, as cruel as that may be, what could possibly emphasize your power over him more than leaving him with blue balls?');
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).bag ?? 0) > 0) {
      scene.text('Or… well, you could take your \'little friend\' out of your purse and take care of your own needs before deciding anything…');
    }
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).cycle ?? 0) !== 0) {
      scene.actions([
        { label: 'Tell Martin to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 1  &&  ((s as any).cycle ?? 0) !== 0) {
        scene.actions([
          { label: 'Martin wants to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).bag ?? 0) > 0) {
      scene.actions([
        { label: 'Masturbate with your dildo', goto: ['MartinSex', 'MartinTeaseDildo'] },
      ]);
    }
    scene.actions([
      { label: 'Take care of Martin (Blowjob)', goto: ['MartinSex3', 'MartinBlowTease'] },
      { label: 'Beckon Martin to fuck you like this (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and bend over for Martin (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Roll on your side (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Blueball him. Get dressed and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-1));
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('"I\'m glad you like it," you say, swinging your legs off the table as you put your shirt back on, "because that\'s all you\'ll be getting today."');
    scene.text('At first, Martin probably thinks you\'re joking, but seeing as you\'re putting your other clothes back on as well, he gets up, frowning.');
    scene.text('"You\'d leave me here, alone, in this state?" He points towards his crotch where his dick is straining against the fabric of his pants. "You couldn\'t possibly be this cruel."');
    scene.text('You walk up to Martin, put your arms around his neck and give him a soft kiss. When you break it, you whisper:');
    scene.text('"If I wasn\'t cruel at least once in a while, you wouldn\'t appreciate it when I\'m not. Besides, I think you\'ll cum immediately when I\'m out that door once you realize that I\'m going commando again."');
    scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
    scene.text('… A horny, pantiless bandit.');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
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

function enterMartinTeaseDildo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/teasedildo1.jpg');
  // TODO-QSP: dynamic text: You roll to your <<$pc_desc['side']>> side. Grinning like a Cheshire cat, you ru...
  scene.text(`You roll to your ${((s as any).pc_desc ?? 0)?.['side']} side. Grinning like a Cheshire cat, you rummage through your purse and, under the curious looks of Martin, pull out your ' + iif(dildo = 1, '10cm', '15cm') + ' dildo.`);
  scene.text('"Whatever am I going to do with this?" you wonder out loud, locking eyes with Martin as you give the tip of the dildo a lick or three.');
  scene.text('"Yes, whatever indeed," he muses, his pants stretched to their limit around his crotch.');
  scene.text('With the dildo sufficiently licked and your audience on the verge of exploding, you decide to stop torturing him and rub the dildo against your pussy lips, enjoying the damped tip against your orifice, the prospect of penetrating yourself in front of Martin arousing you to no end.');
  // TODO-QSP: dynamic text: Tired of teasing yourself, you put the ' + iif(dildo = 1, '10cm', '15cm') + ' ru...
  scene.text('Tired of teasing yourself, you put the \' + iif(dildo = 1, \'10cm\', \'15cm\') + \' rubber dick inside your wet slit. The sensation is incredible - you knew that stripping for Martin had aroused you but it is only now that you realize how aroused and longing for something hard inside you really were.');
  scene.text('You smile at Martin as you slowly push it deeper inside, but involuntary moans are escaping you now.');
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck yourself with your dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/teasedildo2.jpg');
    scene.text('Your smile fades fast as lust overtakes you.');
    scene.text('Time moves different when you are aroused like this, when every sensation is like a shockwave in your head and every nerve of your body is on edge. A giant crowd could have been watching you right now and you wouldn\'t even care - no, actually, at this point it would probably only make this more intense.');
    // TODO-QSP: dynamic text: You can sense every tiny movement of the dildo inside your <<$pc_desc['pussy']>>...
    scene.text(`You can sense every tiny movement of the dildo inside your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy as you shift around, move it in and out, rubbing it against this wall and that and making sure to brush against your clit every now and then.`);
    scene.text('There are plenty of instances when you wouldn\'t be able to cum without rubbing your sensitive nub, but this situation is so hot that you have no trouble at all getting yourself off.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum all over your dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/tease/teasedildo3.jpg');
    scene.text('And off you get.');
    scene.text('It starts slow, like the rumble of thunder in the distance, but before you know it, an explosion goes off in your head and your body starts shaking like a leaf in the wind. You can hear yourself moaning loudly, but you are barely even registering that, like it\'s happening in an adjacent room, to another person.');
    scene.text('As you come down from your high, you regain awareness of your surroundings and open your eyes. Martin is still there, spellbound.');
    scene.text('You give him an almost shy smile and, opting to give him a little tease-cherry on top, lick your dildo clean before you put it away.');
    scene.text('The question of whether he enjoyed the show entirely superfluous. The question of whether you still want to leave him with blue (or, at this point, deep purple) balls, however, still stands.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).cycle ?? 0) !== 0) {
      scene.actions([
        { label: 'Tell Martin to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 1  &&  ((s as any).cycle ?? 0) !== 0) {
        scene.actions([
          { label: 'Martin wants to go down on you', goto: ['MartinSex3', 'MartinPussyLick'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Take care of Martin (Blowjob)', goto: ['MartinSex3', 'MartinBlowTease'] },
      { label: 'Roll on your back (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and bend over for Martin (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Beckon Martin to fuck you like this (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Get up and tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      { label: 'Blueball him. Get dressed and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-1));
    qspCall(s, 'underwear', 'wear');
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('"I\'m glad you liked the show," you say, swinging your legs off the table as you put your top back on, "because that\'s all you\'ll be getting today."');
    scene.text('At first, Martin probably thinks you\'re joking, but seeing as you\'re putting your other clothes back on as well, he gets up, frowning.');
    scene.text('"You\'d leave me here, alone, in this state?" He points towards his crotch where his dick is straining against the fabric of his pants. "You couldn\'t possibly be this cruel."');
    // TODO-QSP: dynamic text: You walk up to Martin, put your arms around his neck and give him a soft kiss, t...
    scene.text(`You walk up to Martin, put your arms around his neck and give him a soft kiss, the taste of your ${((s as any).pc_desc ?? 0)?.['pussy']} pussy on your ${((s as any).pc_desc ?? 0)?.['lips']} lips and tongue. When you break it, you whisper: "If I wasn't cruel at least once in a while, you wouldn't appreciate it when I'm not."`);
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('"Besides," you add with a naughty smile, "you just saw me cum really hard, so I think you\'ll cum immediately when I\'m out that door once you realize that I\'m going commando again."');
      scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
      scene.text('… A cruel, pantiless bandit.');
    } else {
      scene.text('"Besides," you add with a naughty smile, "you just saw me cum really hard, so you certainly have something to keep you warm tonight."');
      scene.text('With that, you quickly move out of his range, towards the door, blow the perplexed barkeeper a final kiss and make off like a bandit.');
      scene.text('… A cruel bandit.');
    }
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
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
    case 'MartinTease':
      enterMartinTease(s, scene);
      break;
    case 'MartinTease1':
      enterMartinTease1(s, scene);
      break;
    case 'MartinTease2':
      enterMartinTease2(s, scene);
      break;
    case 'MartinTease3':
      enterMartinTease3(s, scene);
      break;
    case 'MartinTease4':
      enterMartinTease4(s, scene);
      break;
    case 'MartinTeaseDildo':
      enterMartinTeaseDildo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MartinSex: LocationDef = {
  name: 'MartinSex',
  title: 'You approach Martin as he\'s cleaning the floor. The bartende',
  region: 'other',
  description: ['You approach Martin as he\'s cleaning the floor. The bartender raises his head when he notices you.'],
  enter: enter,
};
