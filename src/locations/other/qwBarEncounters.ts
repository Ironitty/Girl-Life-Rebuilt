import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).Enc_Rand = Math.floor(Math.random() * 2) + 1;
  if (((s as any).Enc_Rand ?? 0) === 1  &&  (!((s as any).Jaska_Ev ?? 0))) {
    scene.img('images/locations/city/industrial/bar/billiard_1.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('While you\'re sitting idly at the counter, drink in hand, you take a look around the room. After a moment, your attention is pulled to three guys playing pool. Two of them look to be in their mid to late 30s, while the third looks to be in his early 20s. They\'re all dressed casually albeit a bit rough looking.');
    scene.text('With not much else to do, you settle on watching them play, only mildly interested until you see the younger guy pull out a small wad of cash and reluctantly hand it over to the other two.');
    scene.text('It looks like they\'re playing for money. Maybe they\'ll let you join them?');
    scene.actions([
      { label: 'On second thought…', handler: (st: GameState) => {
    scene.text('After a moment, you decide not to join them, and instead go back to your drink. At least that way you can\'t lose any money, right?');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      { label: 'Ask them if you can play', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/jaska.jpg');
    scene.text('You make your way over to the three of them just as they\'re setting up for another round. "Are you guys playing for money?" you ask.');
    scene.text('"Not anymore." One of the older guys laughs, flaunting the wad of cash. "We\'re done with this dumbass."');
    scene.text('The second one chimes in, "I thought you said you got better, Jaska! You still play like shit, and now you\'re broke!" He smirks before looking to you. "You\'re late, girl. We cleaned him out," he says with a laugh.');
    scene.text('Jaska shakes his head and points his pool cue at them. "Yeah yeah, just fuck off already. Go blow your money on cheap whores and booze, like you always do."');
    scene.text('You watch in silence as the three of them exchange a few more insults before the two older guys gather their things and finally leave. Jaska grabs his glass and finishes off the last bit of alcohol before making his way over to you. He leans against the pool table and looks you up and down. He\'s close enough that you can smell a mixture of alcohol, cigarette and a hint of musk.');
    scene.text('"I don\'t think I\'ve seen you around here before," he says after a moment, "What\'s your name?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you tell him.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," you tell him.`);
    scene.text('"Right. Well, I\'m Jaska, if you didn\'t already know." He laughs ruefully, "So, you ever play pool?" You shake your head and Jaska\'s face lights up a bit. "Then how about I teach you," he suggests, not really asking as much as telling you.');
    if (((s as any).pcs_billiard ?? 0) < 10) {
      scene.actions([
        { label: '"Sounds fun"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    (s as any).Jaska_Ev = 1;
    scene.text('Jaska smiles and hands you his pool cue. You watch him gather the balls into the triangle and set them up in the middle before grabbing another pool cue off the wall. "Alright, since it\'s your first time, I won\'t bore you with the technical shit, and keep it simple." He says as he moves behind you, his hand on the small of your back as he gently pushes you closer to the table.');
    scene.text('"Like this?" You ask, following his lead. You lean down low to the table and allow yourself to be moved this way and that way by Jaska. Before you know it, an hour has passed and he tells you that you\'ve got the basics down, even going as far as to say you could probably beat some of the regulars.');
    scene.text('"Well, that\'s all I got time to teach you," Jaska says, glancing down at his watch. He grabs his worn-out leather jacket and slips it on. "Next time, we\'ll play for real!" He says before pausing, "There will be a next, right?"');
    scene.text('"Of course. Just make sure you have your wallet ready," you tease. He laughs before saying one last goodbye and walking out the door.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I already know how to play', handler: (st: GameState) => {
    (s as any).Jaska_Ev = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('"I already know to how play," you say with a smile.');
    scene.text('Jaska looks a bit surprised, "Oh yeah? Then what are we waiting for, lets play." He says, handing you a pool cue. The two of you spend an hour playing together, and you find that you really enjoy his company, even though he\'s absolutely terrible at pool.');
    scene.text('"No wonder you lost all your money," you tease as you clear the table and beat him again. "How many times have I won now?"');
    scene.text('"Don\'t get cocky." He says as he playfully pushes you aside so he can set up again. "I\'m just going easy on you." He starts to set up, but pauses when he looks at his watch. "Damn."');
    scene.text('"What\'s wrong?" You ask.');
    scene.text('Jaska sighs, "Well, as much as I like being beaten by you, I\'ve gotta go." He sets down the pool cue and slips on his worn-out leather jacket. "How about we play again some other time?"');
    scene.text('"Just make sure you have your wallet ready," you tease. Jaska laughs before saying one last goodbye and leaving.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).PBB_Met ?? 0) === 1) {
      scene.text('While you are sitting at the bar and enjoying your drink, somebody approaches you - it\'s the guy in his mid-twenties you had a drink with earlier. What was his name again?');
      scene.text('Before you can even try to remember, he\'s already sat down next to you and asks if you wanna chat and have a drink on him.');
    } else {
      scene.text('While you are sitting at the bar and enjoying your drink, somebody approaches you - the pool player who bet money against a blowjob.');
      scene.text('For a moment, you expect him to be straightforward about it and ask if you wanna play, but instead, he simply sits down next to you and politely offers to buy you a drink.');
      scene.text('While you are sitting at the bar and enjoying your drink, a guy who\'s slightly older than you - in his mid- or maybe late twenties - sits down next to you and orders himself a drink. After a few minutes of silently nursing on your respective drinks, he starts chatting you up and offers to buy you a drink.');
    }
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.text('You shake your head no and decline the offered drink, letting him know you can buy your own. "But thanks anyways."');
    scene.text('He doesn\'t seem too disappointed though. He remains polite and chats with you for a few more minutes before getting up and leaving you to yourself.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      { label: 'Accept', handler: (st: GameState) => {
    if (((s as any).boozeVar ?? 0) === 'beer') {
      qspCall(s, 'exp_gain', 'agil', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'drugs', 'alcohol', 'beer');
    } else {
      qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'vital', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'drugs', 'alcohol', 'vodka');
      if (((s as any).boozeVar ?? 0) === 'wine') {
        qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 0);
        qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
        qspCall(s, 'drugs', 'alcohol', 'wine');
      } else {
        qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
        qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
        qspCall(s, 'drugs', 'alcohol', 'vodka');
      }
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).PBB_Met = 1;
      // TODO-QSP: dynamic text: You smile at him and accept his offer. He buys you another <<$boozeVar>> and as ...
      scene.text(`You smile at him and accept his offer. He buys you another ${((s as any).boozeVar ?? 0)} and as you nurse on it, the two of you chat some more about everything and nothing.`);
      scene.text('Eventually he asks you if you would like to go play pool with him.');
      scene.actions([
        { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('You decline the offer with a laugh.');
    scene.text('"After the drinks I\'ve had, you\'d have it too easy", you joke, to which he responds with a broad laughter.');
    scene.text('But the two of you sit and talk for another half hour before he says needs to get going.');
    scene.text('"I wouldn\'t mind seeing you again, though," he smiles before leaving.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
        { label: 'Challenge accepted', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pool1.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    (s as any).pcs_billiard = ((s as any).pcs_billiard ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.text('You agree to go play pool with him and he leads you to the side area where the lone pool table sits, deserted and in sore need of use.');
    scene.text('Your new acquaintance racks up the pool balls and lets you go first.');
    scene.text('It ends up being a very close game: He takes the lead for most of it, seemingly effortlessly pocketing one ball after the other, but towards the end he seems to be having trouble even hitting the ones he was aiming for and more than once accidentally sets up easy shots for you. You catch up, take the lead and, with a final good shot, win the game.');
    scene.text('He curses his luck and points out that he "almost had you."');
    scene.text('"Well, it\'s not really worth much when you \'almost\' win the lottery or \'almost\' had an orgasm," you say with a grin.');
    scene.text('"True," he laughs. "How about you give me a chance to restore my honor? A rematch? And now that we know what we\'re up against, we could make it more interesting by playing for money."');
    scene.text('"How much were you thinking?", you ask.');
    // TODO-QSP: dynamic text: "I don't know… <<$func('money', 'string_price', 2500)>>?"
    scene.text(`"I don't know… ${qspFunc(s, 'money', 'string_price', 2500)}?"`);
    if (qspFunc(s, 'money', 'can_afford', 2500) === 1) {
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pool2.jpg');
    (s as any).billiard_ev_var = 1;
    scene.text('"Alright, let\'s play."');
    // TODO-QSP: dynamic text: You ' + iif(bag > 0, 'open your purse', 'reach into your pocket') + ' and pull o...
    scene.text('You \' + iif(bag > 0, \'open your purse\', \'reach into your pocket\') + \' and pull out a few bills and lay them down on the table.');
    scene.text('Your acquaintance gives you a wolfish grin, racks up the balls and lets you break again as he lays his money down on top of yours.');
    qspCall(s, 'qwBarBilliard', 'billiard_engine');
    qspCall(s, 'qwBarBilliard', 'billiard_ev1');
  } },
      ]);
    }
    if (qspFunc(s, 'money', 'can_afford', 2500) === 0  ||  ((s as any).pcs_intel ?? 0) >= 60  ||  ((s as any).pcs_persuas ?? 0) >= 60) {
      scene.actions([
        { label: 'Tell him you don\'t have that kind of money', handler: (st: GameState) => {
    (s as any).PBB_Met = 2;
    scene.text('You shrug slightly and tell him you don\'t have that much money on you. He nods understandingly, then looks around a bit before leaning in close. "We could play for something else, you know…"');
    scene.text('You look at him suspiciously. "Like what?"');
    scene.text('His smile may be friendly, but his casual tone doesn\'t match his suggestion: "If you win, you get the money. And if I win, you give me a blowjob. Sound fair?"');
    if (((s as any).fame ?? 0)?.['city_slut'] < 75) {
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Not that kind of girl [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Not that kind of girl', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('You shake your head and glare at him.');
    scene.text('"Do I look like some sort of cheap whore to you?!"');
    scene.text('You don\'t even give him time to respond - you simply turn on your heel and walk back to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'I don\'t think so', handler: (st: GameState) => {
    scene.text('The thought of making a wager that might end up with you sucking some random guy\'s cock doesn\'t really bother you in and of itself, if you\'re being perfectly honest, but you are not really interested in it either.');
    scene.text('Deciding against it, you tell him: "I think I\'ll pass. Thank you for the drink, though."');
    scene.text('He notices that you don\'t seem angry or even put off, so he smiles and simply says, "Until next time, then," before you leave.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      { label: 'You\'re on', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pool2.jpg');
    (s as any).billiard_ev_var = 2;
    // TODO-QSP: $OpenInnerThought + 'I can take him,' + $CloseInnerThought + ' you think to yourself, ' + $OpenInner...
    scene.text('With that in mind, you nod your head and tell him he\'s got himself a deal.');
    qspCall(s, 'qwBarBilliard', 'billiard_engine');
    qspCall(s, 'qwBarBilliard', 'billiard_ev1');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.text('You shake your head no.');
    scene.text('"That\'s a lot of money for a friendly match. I think I\'m gonna pass. I should get going soon anyway."');
    scene.text('He seems slightly disappointed but quickly recovers: "Well, it was fun while it lasted."');
    scene.text('"Yeah, it was," you agree. "Thank you for the game and the drink."');
    scene.text('"See you around," he bids you farewell and you return to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'stat', '');
    qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 18) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrind1.jpg');
    scene.text('Martin nods and prepares your beverage, then places it in front of you.');
    scene.text('"Thank you," you smile at him and earn a half-smile in return before he leaves you to yourself.');
    if (((s as any).alko ?? 0) >= 5) {
      scene.text('Truth is, you\'re drinking more than you can really handle and at this point, you are starting to feel pretty drunk.');
    }
    scene.text('You lean against the bar, caught up in a random thought as you nurse on your drink, and so you barely notice at first that somebody is grinding against your ass. Taking your ignorance as consent, the guy grabs you by the hip with one hand to pull you back against him, at which point it becomes pretty hard to ignore, and just then, he grabs you by your hair and tilts you forward a bit more.');
    scene.text('It\'s not difficult to deduce how this is going to end if you don\'t put an end to it right now.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Grind back against him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Grind back against him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrind2.mp4');
    scene.text('Maybe it\'s the alcohol, or maybe you are just really horny - whatever the case may be, you don\'t really want the stranger to stop. Quite the opposite, in fact.');
    scene.text('You grind your butt back against him and that is all the incentive he needs: After a little more grinding, he reaches around and worms his fingers into your bottoms. You are shocked and want to say something but just when you open your mouth, he finds your clit and your protest turns into a soft moan. You can feel his erection growing against your butt and the whole situation is getting you really excited.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take charge [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take charge', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrindd1.jpg');
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.text('Once you are good and wet, you pull his hands away, sit down on a bar stool, move your clothes out of the way enough to reveal your pussy and spread your legs as you pull him close. You gently push down on his shoulders and he gets the idea, smiles and goes down to his knees to lick your pussy.');
    scene.text('He laps at your cunt without a hint of reservation. One of his hands is squeezing your tits through your clothes while the other joins his mouth, his fingers inside you adding to the overwhelming sensations you are feeling. You notice some people watching but not as many as you expected; you don\'t care though, this simply feels too great to think about consequences, and your guy friend seems unconcerned with the looks of other patrons too, maybe even enjoying the fact that he can show off his conquest right here.');
    scene.text('He keep going, working your sex tirelessly until an orgasm rocks your body and you have to bite down on your lip to keep yourself from moaning out loud. As the shuddering subsides, he stands up with a shit-eating grin and his hands move to unbutton his pants.');
    qspCall(s, 'arousal', 'cuni', 5, 'dom', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Got to leave', handler: (st: GameState) => {
    scene.text('You put your hands on his and stop him from undoing his pants further. You lean in to kiss his cheek, then whisper. "Thank you for this… but I gotta go. Have a nice evening."');
    scene.text('Then, before he has even had time to process what you just said, you pull away and walk off. You can hear him calling you a "bitch" among other things, but you don\'t care - you got yours, and that puts a spring in your step as you leave the bar.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
      { label: 'Return the favor', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrinds1.mp4');
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.text('Seeing as he got down on you right then and there, it seems only fair for you to do the same for him, so you get down on your knees, squatted down in front of him with your back against the counter, hidden from most views.');
    // TODO-QSP: dynamic text: The strangers pulls out his cock and shoves it in your open mouth - you already ...
    scene.text(`The strangers pulls out his cock and shoves it in your open mouth - you already knew what to expect and at this point, you are eager to suck his cock. He leans in close and starts fucking your mouth, and you are reveling in it, masturbating as he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock down your throat again and again. You don't know if anybody's watching and you are too drunk to feel anything but excitement at the prospect.`);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'exhibitionism', 'deepthroat', 'rough');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub', 'exhibitionism', 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrinds2.jpg');
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.text('You are not quite sure for how long you are squatting there while he fucks your mouth, but at some point, he picks up the pace and starts to groan, then suddenly pulls his cock out of your mouth and the first hot jet of sperm hits your face, then another shoots into your mouth. Several more follow and cover your lips, chin and tongue with cum.');
    scene.text('Once the last spurt is out, he wipes the tip of dick against your lips to get the last drops off cum off. Then he tucks his cock back in his pants, orders another drink for each of you and, before you\'re even fully back on your feet, takes his drink and walks off.');
    qspCall(s, 'arousal', 'end');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'fame', 'city', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish up', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him guide you', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrinds1.mp4');
    scene.text('He works your clit with his fingers for a bit, clearly knowing what he\'s doing and getting you hot and bothered before he pulls his hand free. He turns you around so your back is against the bar and then pushes down on your shoulders until you are squatted down in front of him and hidden from most views.');
    // TODO-QSP: dynamic text: The strangers pulls out his cock and shoves it in your open mouth - you already ...
    scene.text(`The strangers pulls out his cock and shoves it in your open mouth - you already knew what to expect and at this point, you are eager to suck his cock. He leans in close and starts fucking your mouth, and you are reveling in it, masturbating as he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock down your throat again and again. You don't know if anybody's watching and you are too drunk to feel anything but excitement at the prospect.`);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'exhibitionism', 'deepthroat', 'rough');
    qspCall(s, 'arousal', 'clit_finger', (-5), 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/bargrinds2.jpg');
    scene.text('You are not quite sure for how long you are squatting there while he fucks your mouth, but at some point, he picks up the pace and starts to groan, then suddenly pulls his cock out of your mouth and the first hot jet of sperm hits your face, then another shoots into your mouth. Several more follow and cover your lips, chin and tongue with cum.');
    scene.text('Once the last spurt is out, he wipes the tip of dick against your lips to get the last drops off cum off. Then he tucks his cock back in his pants, orders another drink for each of you and, before you\'re even fully back on your feet, takes his drink and walks off.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 0, '', '', 20);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 0, '', '', 20);
    qspCall(s, 'fame', 'city', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish up', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell him to get lost', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A216', 1);
    scene.text('At first you just try to pull away, but the guy is either too drunk or too horny to take a hint. You try to shove him off but the guy hangs onto you, his grip tight and insistent.');
    scene.text('Just as you are about to tell him to "piss off", Martin comes over.');
    scene.text('"Is there a problem here?"');
    scene.text('You nod and open your mouth to respond, but the man talks over you: "No, no problem. The bitch likes it, you can tell…"');
    scene.text('Martin silences him with a glare, giving you the chance to speak up: "This asshole won\'t let go of me. I want him to leave me alone."');
    scene.text('As soon as Martin hears this, he turns and looks at the guy. "I suggest you let her go before I make you let go."');
    scene.text('The man may be horny, but he isn\'t stupid enough to risk butting heads with the bulky bartender, and before you can blink, he has vanished into the night.');
    scene.text('You give the bartender a grateful smile. "Thank you, Martin."');
    scene.text('He just nods. "My pleasure, but I think you\'ve had enough for the night."');
    scene.actions([
      { label: 'He might have a point - Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const qwBarEncounters: LocationDef = {
  name: 'qwBarEncounters',
  title: 'While you\'re sitting idly at the counter, drink in hand, you',
  region: 'other',
  locationType: 'event',
  description: ['While you\'re sitting idly at the counter, drink in hand, you take a look around the room. After a moment, your attention is pulled to three guys playing pool. Two of them look to be in their mid to late 30s, while the third looks to be in his early 20s. They\'re all dressed casually albeit a bit rough looking.'],
  enter: enter,
};
