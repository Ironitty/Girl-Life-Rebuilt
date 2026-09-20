import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterVicArt_Ev1_Cash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'pool', (Math.floor(Math.random() * 3) + 2));
  scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
  scene.text('"Why not."');
  // TODO-QSP: dynamic text: You try to ignore the voice in the back of your head that insists <<$func(''mone...
  scene.text(`You try to ignore the voice in the back of your head that insists ${qspFunc(s, 'money', 'string_price', 1000)} are nothing to sneeze at as you pull out the bills and put them on the table.`);
  scene.text('Victor and Artyom smile and put their own cash on top of yours before setting up a new game.');
  qspCall(s, 'qwBarBilliard', 'billiard_engine');
  if (((s as any).billwin ?? 0) > 12) {
    qspCall(s, 'money', 'earn', 2000, 'cash');
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * 3) + 3));
    scene.text('The game goes well for you. Granted, you are missing a shot here and there, but overall, you are playing fairly well and end up deciding the match for yourself.');
    scene.text('Artyom seems miffed by the fact that they lost and even Victor looks somewhat surprised at how well you are playing this time, but he congratulates you on your success and hands you your winnings.');
    scene.text('"How about another round?" You ask teasingly.');
    scene.text('Victor laughs. "No thanks, I think you\'ve proven that luck is on your side tonight. We\'ll play more next time we\'re here."');
    // TODO-QSP: dynamic text: You grin. "Sure thing." Cheerfully waving the handful of bills around, you bid t...
    scene.text(`You grin. "Sure thing." Cheerfully waving the handful of bills around, you bid them farewell and return to the main room, ${qspFunc(s, 'money', 'string_profit', 2000)} richer for it.`);
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } else {
    qspCall(s, 'money', 'pay', 1000, 'cash');
    qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 5) + 1));
    scene.text('The game starts off in your favor. Artyom misses several easy shots early on and allows you to get a comfortable headstart, but as Victor places his shots with surgical precision, your advantage melts away.');
    scene.text('Two or three missed shots later, you begrudgingly concede defeat.');
    scene.text('"You gave us a good run for our money," Victor says conciliatorily and Artyom agrees. "Our luck could run out any moment. You could play again and win your money back."');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No, I think I\'ve lost enough for one day," you decline.');
    scene.text('"Well, you know where to find us," Artyom says with an uncharacteristic smile.');
    // TODO-QSP: dynamic text: "Take care, <<$pcs_firstname>>," Victor bids you farewell and you return to the ...
    scene.text(`"Take care, ${((st as any).pcs_firstname || '')}," Victor bids you farewell and you return to the main room.`);
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      { label: 'Maybe I could… I\'m almost broke though', goto: ['qwBarBilliard2', 'VicArt_Ev1_Broke'] },
      { label: 'Maybe I could… (Play for cash)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'qwBarBilliard2', 'VicArt_Ev1_Cash');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVicArt_Ev1_Broke(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/sex/pool/poolvicart.jpg');
  if (((s as any).Jaska_Friend_Bill ?? 0) === 1) {
    scene.text('"I\'d like to but I don\'t think I can afford to play for that much," you admit.');
    // TODO-QSP: dynamic text: "That''s a pity." Victor gives you a long, pensive look. "You know… You are a ve...
    scene.text(`"That's a pity." Victor gives you a long, pensive look. "You know… You are a very pretty girl, ${((s as any).pcs_firstname || '')}. Isn't she, Artyom?"`);
    scene.text('"Very," he agrees.');
    scene.text('"You know, I usually wouldn\'t entertain a thought like that but, now that we know you a little better… why don\'t you just bet something other than money? I mean, we\'re all friends here and we\'d be fine with pretty much anything you wanna bet, wouldn\'t we, Artyom?"');
    scene.text('"Very," he repeats and grins.');
    scene.text('You are not sure if you\'re really surprised by their offer. Artyom isn\'t exactly the king of subtlety but Victor seems nice enough. Was this their intention all along or was it really the spontaneous suggestion he makes it out to be?');
    if (((s as any).PBB_Met ?? 0) === 2) {
      scene.text('But at least they aren\'t trying to force you into giving them blowjobs, unlike a certain other regular.');
    }
    scene.text('Unsure whether you want to agree at all, you ask carefully: "So, what, you want me to do a striptease?"');
    scene.text('Victor\'s eyes widen slightly at the suggestion. "That… sounds fair. Right?" He looks at Artyom who nods in agreement. "Yeah, a striptease, right here in this room."');
    scene.text('"Wait, here?! What about the bartender? What if he caught us?"');
    scene.text('"We wouldn\'t insist if we hadn\'t made the experience that even the best people might run off when it comes to paying up. But unfortunately, that\'s how it is. It\'s better to pay your dues right away anyway, isn\'t it? Plus," Victor smiles, "Martin\'s not gonna catch us as long as you stay quiet…"');
    scene.text('Running away… You gotta admit that the thought of running away if you lost has crossed your mind.');
    if (((s as any).PBB_Met ?? 0) === 2) {
      scene.text('Getting out of giving a blowjob to a lecherous trickster can be that easy.');
    }
    scene.text('Nobody\'s forcing you to take this bet. But it\'s clear that, if you take it, you will have to make good on it - however friendly they appear, Victor and Artyom don\'t look like the kind of guys you wanna have trouble with.');
    scene.text('So, are you willing to take that bet? Would you be willing to strip naked for two guys you barely know in the backroom of a bar, only one thin curtain away from dozens of patrons?');
  } else {
    scene.text('"I\'d like to but I don\'t think I can afford to play for that much," you admit.');
    // TODO-QSP: dynamic text: "Well, our offer still stands," Artyom reminds you. "You could bet doing a strip...
    scene.text('"Well, our offer still stands," Artyom reminds you. "You could bet doing a striptease instead.' + ((((s as any).Jaska_Friend_Bill ?? 0) >= 2) ? ('… maybe even more than that."') : ('')) + '"');
    scene.text('"Right," you say pensively. "That. And I would have to do it…"');
    scene.text('"Here," Victor confirms. "Only if you lose, of course."');
    scene.text('Are you willing to take that bet? Would you be willing to strip naked for two guys you barely know in the backroom of a bar, only one thin curtain away from dozens of patrons?');
    if (((s as any).Jaska_Friend_Bill ?? 0) >= 2) {
      scene.text('Or would you be willing to do even more than that? Maybe in exchange for a higher wager?');
    }
  }
  if (((s as any).pcs_inhib ?? 0) >= 40) {
    scene.actions([
      { label: 'Deal - If I lose, I strip', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 3) + 2));
    scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
    scene.text('There\'s a difference between fantasizing about getting caught in a public place and actually getting caught. And there\'s a world of difference between getting caught by people you don\'t know and will never see again and people you might run into again and again, some of which you might know.');
    scene.text('But even though this thought echoes in your head, you nod yes. "Okay."');
    scene.text('"Okay what?" Victor asks. "We need to hear what you are betting."');
    scene.text('You take a deep breath. "If I lose, I\'ll do a striptease. Here," you add when they keep looking at you expectantly.');
    scene.text('"Great," Artyom exclaims. "Let\'s play."');
    qspCall(st, 'qwBarBilliard', 'billiard_engine');
    if (((st as any).billwin ?? 0) > 12) {
      qspCall(st, 'money', 'earn', 2000, 'cash');
      qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 3) + 3));
      scene.text('The game goes well for you. Granted, you are missing a shot here and there, but overall, you are playing fairly well and end up deciding the match for yourself.');
      scene.text('Artyom seems miffed by the fact that you\'ve won and even Victor looks somewhat surprised at how well you are playing this time, but he congratulates you on your success and hands you your winnings.');
      scene.text('"How about another round?" You ask teasingly.');
      scene.text('Victor laughs. "No thanks, I think you\'ve proven that luck is on your side tonight. We\'ll play more next time we\'re here."');
      // TODO-QSP: dynamic text: You grin. "Sure thing." Cheerfully waving the handful of bills around, you bid t...
      scene.text(`You grin. "Sure thing." Cheerfully waving the handful of bills around, you bid them farewell and return to the main room, ${qspFunc(s, 'money', 'string_profit', 2000)} richer for it - not a bad turnout for a bet like yours.`);
      scene.actions([
        { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
      ]);
    } else {
      qspCall(st, 'mood', 'lower', (Math.floor(Math.random() * 5) + 1));
      scene.text('The game starts off in your favor. Artyom misses several easy shots early on and allows you to get a comfortable headstart, but as Victor places his shots with surgical precision, your advantage melts away.');
      scene.text('Two or three missed shots later, they sink their final ball and win the game.');
      scene.text('"Good game."');
      scene.text('All of you know what\'s coming next and there is no way around it for you.');
      scene.actions([
        { label: 'Pay your dues', handler: (st: GameState) => {
    if (((st as any).Jaska_Friend_Bill ?? 0) === 1) {
      (st as any).Jaska_Friend_Bill = 2;
    }
    (st as any).pic_rand = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).pic_rand ?? 0) === 1) {
    } else {
      if (((st as any).pic_rand ?? 0) === 2) {
        scene.text('…');
      }
    }
    scene.actions([
      { label: 'part 2', handler: (st: GameState) => {
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).pcs_inhib ?? 0) >= 50  &&  ((s as any).Jaska_Friend_Bill ?? 0) >= 2) {
    scene.actions([
      { label: 'Okay - If I lose, I masturbate', handler: (st: GameState) => {
    if (((st as any).Jaska_Friend_Bill ?? 0) === 2) {
      (st as any).Jaska_Friend_Bill = 3;
    }
  } },
    ]);
  }
  if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).Jaska_Friend_Bill ?? 0) >= 3) {
    scene.actions([
      { label: 'Alright - If I lose, I blow you', handler: (st: GameState) => {
    if (((st as any).Jaska_Friend_Bill ?? 0) === 3) {
      scene.text('Artyom looks at you triumphantly and Victor also seems quite pleased with this outcome.');
      scene.text('"Well, it looks like it\'s time to make good on your wager," he says as he unzips his pants.');
      scene.actions([
        { label: 'Start blowing them', handler: (st: GameState) => {
    (st as any).Jaska_Friend_Bill = 4;
    scene.text('bla bla bla');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('"What the hell is going on here?!"');
    scene.text('The voice of Martin breaks your erotic reverie like a bucket of ice water. He\'s standing in the door frame, having quickly closed the curtain behind himself to bar other people from looking inside.');
    // TODO-QSP: dynamic text: "Just having fun with our little <<$pcs_firstname>>."
    scene.text(`"Just having fun with our little ${((st as any).pcs_firstname || '')}."`);
    scene.text('Martin didn\'t seem to recognize you or believe it was really you until now but the look he meets you with is anything but friendly. His voice, low as it is, is cold and threatening. "Get out, all of you."');
    scene.text('Artyom laughs. "Throw us out? Are you insane, old man?"');
    scene.text('Victor silences his friend with a wave of his hand and walks up to the Colombian bartender. "Now now, Martin, you wouldn\'t want to antagonize two of your best patrons, would you?"');
    scene.text('"You have no right to do things like this here," Martin insists.');
    // TODO-QSP: dynamic text: "And we usually wouldn''t," Victor agrees, "but <<$pcs_firstname>> is such wonde...
    scene.text(`"And we usually wouldn't," Victor agrees, "but ${((st as any).pcs_firstname || '')} is such wonderful company that we just couldn't help ourselves."`);
    scene.text('"This ain\'t no brothel where you can just fuck whatever slut you please!" The bartender booms.');
    scene.text('"No, but we will fuck <i>this</i> slut as we please." Victor had kept a somewhat friendly tone up until now but his voice is now no less threatening than Martin\'s.');
    scene.text('"This is not what we agreed on."');
    scene.text('"Agreements change. And you wouldn\'t want to insult our bosses over something as trivial as this, would you?"');
    scene.text('Martin seems to be bristling with rage but he keeps himself in check… barely. "What do you want?"');
    // TODO-QSP: dynamic text: Victor smiles triumphantly. "Oh, I thought that maybe Artyom and I will occasion...
    scene.text(`Victor smiles triumphantly. "Oh, I thought that maybe Artyom and I will occasionally play a little billiards with ${((st as any).pcs_firstname || '')} or other girls in here and allow them to make up for their losses with… services." Artyom chuckles at that.`);
    scene.text('Martin, however, remains silent. All he does is stare at you in anger. You cannot help but wonder if he would even be in this situation if it wasn\'t for you.');
    scene.text('"Of course, as a sign of our goodwill, we will compensate you," Victor continues. "5 percent of what the girls bet in here is yours. At least when they\'re betting money. That\'s fair, isn\'t it?"');
    scene.text('You\'re not sure how Martin is going to react. For a moment, it looks like he may just as likely punch Victor as shake his hand on it. Hell, by the way he looks at you, you wouldn\'t be surprised if he punched you.');
    scene.text('But he doesn\'t. He slowly turns towards the exit again. "10 percent. And you keep quiet in here and don\'t make a mess."');
    scene.text('Artyom grin disappears and it looks like he wants to tell Martin where he can stick his demands, but Victor says "Deal" as Martin steps outside.');
    scene.text('"Why did you agree to that?" Artyom asks his friend. "He\'s got nothing on us."');
    // TODO-QSP: dynamic text: "Because that''s how you keep your partners happy. He didn''t demand anything we...
    scene.text(`"Because that's how you keep your partners happy. He didn't demand anything we weren't going to give him anyway and 10 percent of a blowjob isn't anything, really, is it, ${((st as any).pcs_firstname || '')}?"`);
    scene.text('You remain silent, your face and stomach burning with… Could it be shame?');
    scene.text('"Now, where were we?" Victor muses and slaps his cock against your face.');
    scene.actions([
      { label: 'Finish them', handler: (st: GameState) => {
    scene.text('As you ready yourself to walk out, you realize that the other patrons must have heard the argument between Martin and the guys, must have heard your name…');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    scene.text('After a few seconds, you have made your decision: "I… don\'t think I wanna take the risk."');
    scene.text('"I understand." Victor really looks like he does. Artyom looks disappointed, though, which might be the reason an uncomfortable silence settles in.');
    scene.text('"I, um… I think I should get going," you say eventually.');
    scene.text('"Yeah, we\'ll see you next time."');
    scene.text('With a few more parting words, you return to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'VicArt_Ev1_Cash':
      enterVicArt_Ev1_Cash(s, scene);
      break;
    case 'VicArt_Ev1_Broke':
      enterVicArt_Ev1_Broke(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const qwBarBilliard2: LocationDef = {
  name: 'qwBarBilliard2',
  title: '"Why not."',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
