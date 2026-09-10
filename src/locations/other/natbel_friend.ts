import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBreakup(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length  === 1) {
    (s as any).ARGS[1] = 14;
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    (s as any).ARGS[2] = 'slut';
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 0) {
    (s as any).NatbelQW['FriendLover'] = -((s as any).NatbelQW ?? 0)?.['FriendLover'];
  }
  (s as any).NatbelQW['blocked'] = 1;
  (s as any).NatbelQW['block_day'] = ((s as any).daystart ?? 0) + ((s as any).ARGS ?? 0)[1];
  (s as any).NatbelQW['block_reason'] = ((s as any).locArgs?.[2] ?? 0);
  scene.build();
}

function enterReconcile(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 0) {
    (s as any).NatbelQW['FriendLover'] = -((s as any).NatbelQW ?? 0)?.['FriendLover'];
  }
  qspCall(s, 'array', 'remove_element', 'NatbelQW', 'blocked');
  qspCall(s, 'array', 'remove_element', 'NatbelQW', 'block_day');
  qspCall(s, 'array', 'remove_element', '$NatbelQW', 'block_reason');
  scene.build();
}

function enterInitSlutfameCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] <= 75) {
    (s as any).NatbelQW['pav_slutfame_limit'] = 175;
  } else {
    (s as any).NatbelQW['pav_slutfame_limit'] = ((s as any).fame ?? 0)?.['pav_slut'] + 100;
    (s as any).NatbelQW['pav_slutfame_limit'] = 275;
    (s as any).NatbelQW['know_slut'] = 1;
  }
  scene.build();
}

function enterSlutfameCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3  &&  ((s as any).NatbelQW ?? 0)?.['know_slut'] === 0) {
    if (((s as any).fame ?? 0)?.['pav_slut'] > ((s as any).NatbelQW ?? 0)?.['pav_slutfame_limit']) {
      scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'slut_breakup'] }]);
    }
  }
  scene.build();
}

function enterSlutBreakup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).NatbelQW['know_slut'] = 1;
  qspCall(s, 'natbel_friend', 'breakup', 14, 'slut');
  qspCall(s, 'npc_relationship', 'set', 'A16', 50);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
  scene.text('You can see Natasha crying with her head in her hands so you go to comfort her but she pushes you away.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> I really regret having to do this but we need to break up! I ...
  scene.text(`"${((s as any).pcs_nickname ?? 0)} I really regret having to do this but we need to break up! I can't continue with this relationship given the extent of your recent behaviour! I can no longer be associated with you! I'm so sorry it has come to this as I've had a great time with you and this period of being your girlfriend has been one of the happiest for me but it's over. I'm so sorry…" By now she's sobbing.`);
  scene.text('You\'re unsure of what to do for the best but feel it would only make it worse if you tried to persuade her to change her mind.');
  scene.text('So with a long sigh and after a final look at her you get up and leave without responding.');
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
  ]);
  scene.build();
}

function enterSlutReconcileDoor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'natbel_friend', 'reconcile');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha10b.jpg');
  scene.text('Although you understand why Natasha broke up with you, you feel she should have also considered how happy you were together as well as remembering how much you helped her when she needed it.');
  scene.text('You wonder if she acted in haste or if it was due to peer pressure.');
  scene.text('Would she like to get back together now that she\'s had time to think further and reflect on the consequence of her action.');
  scene.text('With a sigh you decide that it wouldn\'t do any harm to ask so you head up to her apartment and knock on the door, which is answered by Natasha who smiles at you but waits for you to speak without inviting you in.');
  scene.text('Not wishing to prolong this if it doesn\'t work you ask her straight. "Hello Natasha, I\'ll get straight to the reason for my visit. I just wondered if, now that you\'ve had the opportunity to reflect further if you\'d reconsider and get back together with me."');
  // TODO-QSP: dynamic text: Natasha's smile widens. "I'm relieved you called <<$pcs_nickname>> and yes I've ...
  scene.text(`Natasha's smile widens. "I'm relieved you called ${((s as any).pcs_nickname ?? 0)} and yes I've had time to think and yes I'd like to give us another chance as I've missed you."`);
  scene.text('You return her smile. "Right then <i>girlfriend</i> are you just going to stand there grinniing at me or are you going to invite me in?"');
  // TODO-QSP: dynamic text: "Yes of course <<$pcs_nickname>> please come in, let's go to my bedroom."
  scene.text(`"Yes of course ${((s as any).pcs_nickname ?? 0)} please come in, let's go to my bedroom."`);
  scene.actions([
    { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSlutReconcileSchoolCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['blocked'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).NatbelQW ?? 0)?.['block_reason'] !== 'slut') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'nerd_chat') {
    if (((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['block_day']) {
      // TODO-QSP: exit
    }
  } else {
    if (((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['block_day'] + 14) {
      // TODO-QSP: exit
    }
  }
  qspCall(s, 'natbel_friend', 'reconcile');
  // TODO-QSP: gt 'natbel_friend', 'slut_reconcile_school_event', $ARGS[1]
  scene.build();
}

function enterSlutReconcileSchoolEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/16.jpg');
  scene.text('As you leave class Natasha leaves with you and takes hold of your arm and speaks to you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want to have a quick chat with you in private please."
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want to have a quick chat with you in private please."`);
  scene.text('You wonder what her chat could be about given she previously ended your relationship. You don\'t feel like you want to have another similar discussion so shake your head. "No Natasha I don\'t think there\'s anything more to say. You broke up with me and that\'s that!"');
  if (((s as any).locArgs?.[1] ?? 0) === 'nerd_chat') {
    // TODO-QSP: dynamic text: Natasha looks like she's about to cry but holds it together and starts leading y...
    scene.text(`Natasha looks like she's about to cry but holds it together and starts leading you away from your classmates so that it's not possible to be overheard. "Okay ${((s as any).pcs_nickname ?? 0)} I guess you've got every right to be cross with me but just 5 minutes. Please…"`);
    scene.text('You don\'t reply but go with her. You both find a quiet spot and wait for Natasha to start.');
  } else {
    scene.text('Natasha looks like she\'s about to cry but holds it together and starts leading you away from your classmates so that it\'s not possible to be overheard. You can hear Bella and some of the other kids whispering and can see dome of the derogatory looks Natasha is receiving, especially from her fellow nerds. Despite this she keeps a tight hold of you and begins to lead you away from them.');
    // TODO-QSP: dynamic text: As you leave to fins a quiet spot she begins. "Okay <<$pcs_nickname>> I guess yo...
    scene.text(`As you leave to fins a quiet spot she begins. "Okay ${((s as any).pcs_nickname ?? 0)} I guess you've got every right to be cross with me but just 5 minutes. Please…"`);
    scene.text('You don\'t reply but go with her. You both find a quiet spot and wait for Natasha to start.');
  }
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> I've reflected on what happened and all I can say is that I'm...
  scene.text(`"${((s as any).pcs_nickname ?? 0)} I've reflected on what happened and all I can say is that I'm sorry; I should have tried to support and help you and I didn't. I'm so ashamed of that!"`);
  scene.text('You nod in acknowledgement but don\'t say anything.');
  if (((s as any).locArgs?.[1] ?? 0) === 'nerd_chat') {
    // TODO-QSP: dynamic text: As you don't respond Natasha takes a deep breath to compose herself and continue...
    scene.text(`As you don't respond Natasha takes a deep breath to compose herself and continues. "Even more than that I really miss you ${((s as any).pcs_nickname ?? 0)}.`);
    scene.text('Still unsure of what she\'s trying to say other than apologise you decide to prompt her as she\'s obviously struggling with what she wants to say, "Look Natasha, I don\'t know what you want here, you broke up with me and that\'s your decision. I don\'t need an apology for your doing so. If there\'s anything else please just say it."');
  } else {
    // TODO-QSP: dynamic text: As you don't respond Natasha takes a deep breath to compose herself and continue...
    scene.text(`As you don't respond Natasha takes a deep breath to compose herself and continues. "More than that I really miss you ${((s as any).pcs_nickname ?? 0)}." A single tear rolls down her face which she makes no attempt to wipe away.`);
    scene.text('Still unsure of what she\'s trying to say other than apologise you decide to prompt her as she\'s obviously struggling with her emotions, "Look Natasha, I don\'t know what you want here, you broke up with me and that\'s your decision. I don\'t need an apology for your doing so. That was your choice. If there\'s anything else please just say it."');
  }
  // TODO-QSP: dynamic text: With a sad smile Natasha continues, "Okay <<$pcs_nickname>> I guess I deserved t...
  scene.text(`With a sad smile Natasha continues, "Okay ${((s as any).pcs_nickname ?? 0)} I guess I deserved that. I feel really bad about breaking up with you…"`);
  scene.text('Not making it easy for her you respond "Yeah I got that but what exactly do you want?"');
  scene.text('"Well… Okay I guess… I mean I\'d like us to get back together… That\'s if you want to?…"');
  scene.text('After a short pause you reply, "Well alright Natasha let me think on it and if I agree I\'ll meet you after school."');
  // TODO-QSP: dynamic text: Okay <<$pcs_nickname>>, thank you for at least not rejecting me immediately. I h...
  scene.text(`Okay ${((s as any).pcs_nickname ?? 0)}, thank you for at least not rejecting me immediately. I hope to see you after school." She gives you a weak smile and starts heading to the next class.`);
  scene.text('With a deep sigh you start think if you want to get back with her as you also head to your next lesson.');
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterKissAndBecomeLovers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
    (s as any).NatbelQW['FriendLover'] = 3;
    qspCall(s, 'natbel_friend', 'init_slutfame_check');
  }
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
  // TODO-QSP: dynamic text: You both sit on the couch as she turns towards you, smiles, and says, "I just wa...
  scene.text(`You both sit on the couch as she turns towards you, smiles, and says, "I just want to say thank you, ${((s as any).pcs_nickname ?? 0)}, for taking me to the disco tonight and again for my wonderful day out with you."`);
  scene.text('You\'ve decided that you want Natasha as your girlfriend. Her face is not far from yours, so you lean in to kiss her.');
  scene.text('Pushing yourself forward, your lips meet with Natasha\'s. There\'s a sudden jolt coursing through you, and it must be the same for her as you feel her tense for a brief moment before relaxing into your kiss.');
  scene.text('You both hesitantly pull back. You slowly open your eyes and see her doing the same.');
  scene.text('You stare at each other for a brief moment before speaking.');
  scene.text('"Well, I\'ve been thinking things over, Natasha. I don\'t want to risk losing our friendship, but I\'m ready to try dating. Let\'s just take it one day at a time and try not to rush things, okay?"');
  scene.text('"Mmm, yeah, well…" Natasha says, moistening her lips. She holds you gently but firmly, bringing her face close to yours. "We should…" Natasha leans forward and starts kissing you again. "take… things…" She holds you close as she makes out with you. Finding it impossible to resist, you start kissing her back. "Slow…"');
  scene.text('Time seems to stand still while you make out, but you eventually pull yourself away.');
  scene.text('Licking her lips, Natasha looks lovingly at you. "Was that slow enough for you?"');
  scene.text('You giggle, still caressing her face, "That was…" You start leaning towards her again before catching yourself and pulling back. "Wow! Unexpected… Wonderful…" You pause momentarily.');
  scene.text('Then you continue, "I do mean it, though," you say, still trying to catch your breath and look serious. "We need to think carefully about what we want and how we want our relationship to progress."');
  // TODO-QSP: dynamic text: "I know, <<$pcs_nickname>>," she replies, still licking her lips and savouring t...
  scene.text(`"I know, ${((s as any).pcs_nickname ?? 0)}," she replies, still licking her lips and savouring the taste of your kiss.`);
  qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSetupShoppingSpree(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).NatbelQW['shopping'] = 1;
  (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
  scene.text('You give Natasha a supportive hug and an encouraging smile. Wanting to change the subject, your eyes wander around her room and you notice some magazines on her desk. "Oh, what are these?" you ask as you walk over and take a closer look.');
  scene.text('"Some fashion magazines I picked up," she says with a smile crossing her face. "Do you want to look through them with me?"');
  scene.text('You agree, thinking it would be a good distraction from talking about debts and Christina.');
  scene.text('You grab a few of them and join Natasha on the floor, spending several minutes flipping through page after page, taking turns pointing out dresses and outfits the two you of you like.');
  scene.text('One of the magazines has an advert for the local hairdresser, A Cut Above. Natasha says that at some point she wants a new style when she can afford it and points out a few options she\'d like.');
  scene.actions([
    { label: 'You get an idea', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    scene.text('You look over at Natasha with a grin. "Well, Natasha, this gives me an idea; one that I think we\'ll both enjoy. But before I tell you, there are some ground rules."');
    scene.text('Natasha looks at you with a smile on her face, but doesn\'t say anything.');
    scene.text('"First, you can\'t say no. Second, no apologizing. And finally, definitely no crying. If you break these rules, there will be punishment," you giggle.');
    scene.text('Her smile fades a little bit when you say \'punishment\'.');
    scene.text('"Don\'t worry," you offer. "I told you, it\'s something that you\'ll enjoy. Oh, and to clarify, these rules only apply to nice stuff. So, do you want to know what it is?"');
    scene.text('She nods.');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha8.jpg');
    scene.text('"It\'s a shopping trip!" you announce.');
    // TODO-QSP: dynamic text: Natasha's eyes light up for a moment before dimming and she frowns. "I'd really ...
    scene.text(`Natasha's eyes light up for a moment before dimming and she frowns. "I'd really love that, ${((s as any).pcs_nickname ?? 0)}. But you know I don't have a lot of money. Maybe we could window shop instead or I could help you pick something out for yourself?"`);
    scene.text('"No," you interrupt her, shaking your head. "You don\'t understand. I\'m taking you dress shopping and if we find something, I\'m going to buy it for you."');
    scene.text('"I can\'t let you do that," Natasha says.');
    scene.text('You hold your hand up. "\'First rule: You can\'t say no!\'"');
    scene.text('"But…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha9.jpg');
    scene.text('You admonish her, "No \'buts\', either. I can\'t recall that being in any of the rules!"');
    // TODO-QSP: dynamic text: "You really don't have to do this, <<$pcs_nickname>>. You want to be my friend a...
    scene.text(`"You really don't have to do this, ${((s as any).pcs_nickname ?? 0)}. You want to be my friend and you've helped me with my debts, I'm grateful for that," Natasha says with a genuine smile.`);
    scene.text('"I\'m doing this because I want to, because you\'re my friend," you tell her. "When I first loaned you the money, I thought you were going to treat yourself, so I\'m inclined to do it myself now."');
    scene.text('Natasha tries to speak. "But…"');
    scene.text('You press a finger to her lips and say after a giggle, "Nope. None of that. Remember, there\'s a punishment for breaking my rules and you\'ve just told me what it\'s going to be. From now on, when you break them, I\'m gonna smack your butt!"');
    // TODO-QSP: dynamic text: Her smile turns into a grin, "Yes, <<$pcs_nickname>>. Thank you, for all of this...
    scene.text(`Her smile turns into a grin, "Yes, ${((s as any).pcs_nickname ?? 0)}. Thank you, for all of this."`);
    scene.text('You share a hug.');
    scene.text('"I might need a bit of time to get some money together for this outing," you say. "While I\'m working on that, you can figure out what hairstyle you want to get. We\'ll get that done when we go shopping."');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>."
    scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"That\'s better. See, you\'re a good student after all!" you tease.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShoppingSpree(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  (s as any).NatbelQW['shopping'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha8.jpg');
  scene.text('"So, Natasha," you start. "Have you decided on which hairstyle you\'d like?"');
  scene.text('"Well, I\'m still a little undecided," she says. "Since you\'re paying, I\'d like your thoughts."');
  scene.text('You sit by her and look through her choices. She\'s circled a few, and you spend a few minutes deciding which would look best for her.');
  // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. I'm sure it'll look awesome. I hope that you'll b...
  scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}. I'm sure it'll look awesome. I hope that you'll be happy with the result too."`);
  scene.text('You smile at her, "I\'m sure I will be. So, are you ready for our trip?"');
  scene.text('"Oh, yes!" she beams. "I\'ve been so looking forward to this!"');
  scene.actions([
    { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha9.jpg');
    scene.text('You both stand up to leave.');
    scene.text('"Oh, before I forget," she says.');
    scene.text('You turn to her and notice her pulling out a small handful of bills from her purse. "I wanted to contribute as much as possible, so I did some odd jobs handing out flyers. So now I can at least pay for our food while we\'re out."');
    scene.text('"Oh, that sounds great. Thanks!" you offer. "It\'ll be a lovely end to our trip before we head home."');
    scene.actions([
      { label: 'Go to the market', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/pav_market_day.jpg');
    scene.text('Arriving at the market, you and Natasha browse the selection of clothes available. However, nothing stands out.');
    scene.text('You lean over to Natasha. "Um, I don\'t think that there\'s much here today. What do you say we go ahead and get your hair done, then we\'ll head over to G&M and see if there\'s something nice there?"');
    scene.text('Natasha looks at you sadly, "Well, I agree there\'s nothing that I like here, but G&M is way more expensive."');
    scene.text('"You let me worry about that," you tell her. "Come on, let\'s go."');
    scene.text('She hesitates for a second, "But…"');
    scene.text('You give her an amused look.');
    scene.text('She backs down. "Okay, if you\'re sure."');
    scene.actions([
      { label: 'Head to A Cut Above', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'money', 'pay', 700);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha10a.jpg');
    scene.text('You grab Natasha\'s hand, head towards the commercial district, and into A Cut Above.');
    scene.text('Once inside, Natasha talks with a stylist and picks out her desired new hairstyle. She takes a seat, and the stylist begins working.');
    scene.text('Nearly half an hour later, a smiling and clearly delighted Natasha has had her hair styled and cut. She calls you over to show you the result.');
    scene.actions([
      { label: 'Check out the new Natasha', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha10b.jpg');
    // TODO-QSP: dynamic text: You approach Natasha, who is admiring herself in the mirror. "So, what do you th...
    scene.text(`You approach Natasha, who is admiring herself in the mirror. "So, what do you think, ${((s as any).pcs_nickname ?? 0)}?" she asks, taking a slow heel turn. "Do you like it?"`);
    scene.text('"Natasha, that really suits you," you say. "It looks better than I thought it would from the pictures."');
    // TODO-QSP: dynamic text: The two of you thank the stylist for his work, and you pay him ' + $func('money'...
    scene.text('The two of you thank the stylist for his work, and you pay him \' + $func(\'money\', \'string_price\', 700) + \', and you say to him, "Guess I know where to come when I need mine done."');
    scene.text('You turn back to Natasha, "Time to go find you a pretty dress!"');
    scene.actions([
      { label: 'Go to G&M', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'money', 'pay', 1300);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
    scene.text('The two of you make your way to G&M and start looking for clothes, with a focus on dresses.');
    scene.text('You spend several minutes picking and choosing between various outfits until you have a small assortment of clothes that you can both agree on. Finally, Natasha steps into the dressing room to change, showing off each dress.');
    // TODO-QSP: dynamic text: Natasha has difficulty choosing between three outfits and asks you to make the f...
    scene.text(`Natasha has difficulty choosing between three outfits and asks you to make the final choice. Finally, you decide on a lovely party dress. "Okay, ${((s as any).pcs_nickname ?? 0)}," she says, smiling. "Then that's the one. It'll look much nicer than what I currently have at home."`);
    // TODO-QSP: dynamic text: You take the ' + $func('money', 'string_price', 1300) + ' dress and head to the ...
    scene.text('You take the \' + $func(\'money\', \'string_price\', 1300) + \' dress and head to the register to pay for it while Natasha gets dressed.');
    scene.actions([
      { label: 'Wait for Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha12.jpg');
    // TODO-QSP: dynamic text: Natasha meets you at the front of the store and takes you by hand. "Come on, <<$...
    scene.text(`Natasha meets you at the front of the store and takes you by hand. "Come on, ${((s as any).pcs_nickname ?? 0)}," she says. "Let's go."`);
    scene.text('As she leads you from the store, she continues, "This bit is a small thank you for such a wonderful present. I simply can\'t keep expecting you to always pay for me. I want to contribute. So I\'ll keep passing out flyers and a cleaning job, so long as the hours are flexible."');
    scene.text('"I appreciate the gesture, Natasha. Maybe we\'ll be able to do this again soon?" you suggest. "Just make sure that your jobs don\'t get in the way of your schoolwork."');
    scene.text('"Yes, Mum," she replies sarcastically.');
    scene.text('You giggle and reply, "Yep, it\'s self-interest too. I need help with my homework!"');
    scene.text('The two of you laugh between yourselves as you make your way to the park.');
    scene.actions([
      { label: 'Natasha takes you to Del Parco', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (25);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (12);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (65);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (15);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha13.jpg');
    scene.text('You enter the cafe, still hand in hand. You find a table, and Natasha orders the two of you a coffee and a Reuben sandwich to split.');
    scene.text('While waiting on your food, you talk to Natasha about your day.');
    scene.text('"Well, Natasha," you start, "today was pretty fun, I think. Did you enjoy it?"');
    // TODO-QSP: dynamic text: She reaches across the table and squeezes your hand, "I really have, <<$pcs_nick...
    scene.text(`She reaches across the table and squeezes your hand, "I really have, ${((s as any).pcs_nickname ?? 0)}. My life was a complete mess until you came along. You've given me hope and happiness in our short time together."`);
    scene.text('You enjoy your meal, sharing some inconsequential small talk between bites. When you\'re finished, Natasha gets up to pay for the dinner, and you two leave the cafe together.');
    scene.actions([
      { label: 'Walk through the park', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha14.jpg');
    scene.text('While walking back through the park, you notice Natasha looking downwards.');
    scene.text('"Natasha, what\'s wrong?" you ask. "I thought we were having fun together?"');
    scene.text('She quickly looks back up at you apologetically. "I was, but," she looks back down. "I\'m just a bit sad that it\'s ending. I can\'t remember another time like this that I got so spoiled other than with my mum when she could afford it."');
    scene.text('You pull her towards you and hold her face gently. You reassure her. "Well, I enjoyed it too. Anyway, it\'s not the end. We can still hang out together. Also, you never know. We might get to do something like this again in the future."');
    scene.text('After a pause, you continue. "And I guess we need to think about how we want to develop our relationship. We\'re both young, and I don\'t want to mess it up by wanting too much too soon."');
    // TODO-QSP: dynamic text: Natasha looks at you and smiles, "Yes, <<$pcs_nickname>>, I know."
    scene.text(`Natasha looks at you and smiles, "Yes, ${((s as any).pcs_nickname ?? 0)}, I know."`);
    scene.text('You return to Five Eight Estate and drop off Natasha at her apartment.');
    scene.actions([
      { label: 'Return to Five Eight', goto: ['pav_complex', 'start'] },
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

function enterLoveJct(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  (s as any).NatbelQW['disco_invite'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha15.jpg');
  scene.text('You smile at Natasha, "Okay, first off, I really like you and enjoyed our shopping trip. Hopefully, you did too?"');
  // TODO-QSP: dynamic text: "Oh yes, <<$pcs_nickname>>," she smiles back. "It was lovely to spend that time ...
  scene.text(`"Oh yes, ${((s as any).pcs_nickname ?? 0)}," she smiles back. "It was lovely to spend that time with you, let alone get so spoiled."`);
  scene.text('You nod. "I guess we need to chat about where we go from here." You take a quick breath. "The thing is, Natasha, from what I\'ve heard, you\'re attracted to guys, so I don\'t know how a romantic relationship with me would sit with you."');
  scene.text('Natasha looks a little apprehensive. "Well, I\'ve indeed been attracted to guys, but honestly, I just feel let down by them. I\'ve never enjoyed dating a guy as much as I did our time together." She stares down at the floor. "I guess you\'ve heard the nasty rumors going around school about me sucking guys off when I couldn\'t pay them back on time," she pauses and holds her hand up, indicating she wants to continue.');
  scene.text('She sighs before continuing. "They aren\'t true, but I have been foolish in the past." She lets out a deep sigh. "I hope you won\'t think too poorly of me, but I fell for Lazar\'s charms and went on a couple of dates with him. At first, he was sweet and even talked about me becoming his girlfriend. But, I was such an idiot and let him make love to me."');
  scene.text('By now, she\'s in tears, and you move over to comfort her. "I think I can guess the rest. After that, he backed off, and there was no more talk of being his girlfriend?"');
  scene.text('Natasha confirms your suspicion by nodding her head.');
  scene.text('You gently rub at her back, "Look, it\'s in the past and wasn\'t your fault. You\'re not the first girl to fall for a sleazy guy\'s charms."');
  scene.text('She takes a moment to recompose herself. "I tried going on dates with other guys, but one kept blowing me off, and I caught another cheating with another girl. So I put off the idea of ever dating again. But," she looks at you, her eyes still glistening, "After the other day with you, I think I\'d like to give it another try."');
  scene.text('You try to lighten the mood a bit with a joke. "I don\'t know, Natasha, you aren\'t exactly a cheap date."');
  // TODO-QSP: dynamic text: Her eyes light up, and a big smile crosses her face. "<<$pcs_nickname>> do you m...
  scene.text(`Her eyes light up, and a big smile crosses her face. "${((s as any).pcs_nickname ?? 0)} do you mean the shopping trip was our first date?"`);
  scene.text('The question catches you off guard; you\'re not sure you meant "date" literally. Before you can think about it, Natasha starts to bring her face closer to yours.');
  scene.actions([
    { label: 'Kiss her to confirm she\'s your girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
      (s as any).NatbelQW['FriendLover'] = 3;
      qspCall(s, 'natbel_friend', 'init_slutfame_check');
    }
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('You push yourself forward, and your lips meet with Natasha\'s. There\'s a sudden jolt coursing through you, and it must be the same for her; you feel her tense for a brief moment before relaxing into your kiss.');
    scene.text('Time seems to stand still until you both gently pull apart.');
    scene.text('You both hesitantly pull back. Then, you slowly open your eyes and see her doing the same.');
    scene.text('You stare at one another for a few seconds. "Does that answer your question?" you ask slyly.');
    scene.text('Natasha sighs contentedly and smiles at you, happy you sealed her being your girlfriend with the kiss.');
    scene.text('"Well, taking things slowly lasted only a short time. However, I don\'t want to ruin a good thing, so I think, at least for now, we should take our time," you tell her.');
    scene.text('"Mmm, yeah," Natasha says, licking her lips. "We should take things slow." She smacks her lips…');
    scene.text('Natasha leans in and starts kissing you again. You find it increasingly difficult to resist and start kissing her back.');
    scene.text('"Umm, very… slow…" Natasha says in a husky voice as you momentarily break to catch your breath before you resume kissing and cuddling.');
    scene.text('Time seems to stand still while you make out, but you eventually pull yourself away.');
    scene.text('"I do mean it, though," you say, trying to catch your breath. "We need to think carefully about what we want and how we want our relationship to progress."');
    // TODO-QSP: dynamic text: "I know, <<$pcs_nickname>>," she replies.
    scene.text(`"I know, ${((s as any).pcs_nickname ?? 0)}," she replies.`);
    scene.text('You continue, "Well, Natasha, I think I\'d better head off now before things get too steamy."');
    scene.text('Natasha sighs contentedly and smiles at you, and nods as you get up to leave.');
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Not now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha17.jpg');
    scene.text('Realizing things have seriously escalated, you pull yourself back. "Wait, Natasha. I\'m sorry, this is a bit too fast for me."');
    scene.text('Natasha stops herself, blinking in confusion.');
    scene.text('"It\'s not that I don\'t like you," you offer. "You\'re a great friend, and I wonder if we could be more. I\'m just unsure what I want yet and don\'t want to ruin what we\'ve got."');
    scene.text('You see disappointment spreading across her face. "I\'m not saying "no," you say while reaching out for her hands. Let\'s take things slowly. I wouldn\'t want to do anything to jeopardize my friendship with you. I cherish that too much."');
    // TODO-QSP: dynamic text: A small amount of relief starts to return to Natasha's face. "Your friendship me...
    scene.text(`A small amount of relief starts to return to Natasha's face. "Your friendship means the world to me, too, ${((s as any).pcs_nickname ?? 0)}. You're right. I wouldn't want to lose that either."`);
    scene.text('"Okay, let\'s just be sure and give ourselves a little time."');
    scene.text('Natasha still looks sad but nods at you in confirmation.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDisco_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  (s as any).NatbelQW['disco_invite'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha18.jpg');
  scene.text('After some general chat, you ask Natasha to go to the disco next Saturday so you can see her in her new dress. "So Natasha, how about I pick you up next Saturday evening, and we go to the disco together?"');
  // TODO-QSP: dynamic text: Natasha breaks out with a huge grin, "Yes, I'd love that, <<$pcs_nickname>>! Tha...
  scene.text(`Natasha breaks out with a huge grin, "Yes, I'd love that, ${((s as any).pcs_nickname ?? 0)}! Thank you."`);
  scene.text('You continue, "Right, well, I\'m not sure when I\'ll be able to get here yet, so…"');
  // TODO-QSP: dynamic text: A smiling Natasha interrupts, "Don't worry about the time, <<$pcs_nickname>>. As...
  scene.text(`A smiling Natasha interrupts, "Don't worry about the time, ${((s as any).pcs_nickname ?? 0)}. As you know, I don't often get the chance to go anyway, so I'll tell my mum during the week so she won't worry if I'm not home."`);
  scene.text('"Good! I\'ll see you then, and you <b>will</b> wear your new dress… Okay?!" you say, leaving her no doubt that there\'s only one correct answer."');
  scene.text('"Yes, I\'d love to. However, I\'m not sure I\'d be brave enough if I went on my own, so I\'m happy you\'ll be with me."');
  scene.text('You continue, "One thing though…"');
  scene.text('Natasha looks at you quizzically.');
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.text('I know you have reasons to be scared of the Gopnik, but I hope I\'ve proven that I\'m not going to bully you… Unless you break the rules!" you say with a slight giggle.');
    scene.text('Natasha looks apprehensive as she has understood the implications of what you are saying.');
    scene.text('You continue. "Okay, well enough of this nonsense with you disappearing into the crowd when I approach you. If you do that to me again, I won\'t be happy and will need to rethink seriously about our relationship."');
    // TODO-QSP: dynamic text: A very sad and worried Natasha looks at you and replies, "Yes, I know, <<$pcs_ni...
    scene.text(`A very sad and worried Natasha looks at you and replies, "Yes, I know, ${((s as any).pcs_nickname ?? 0)}. That wasn't one of my finest actions. I'm so sorry, and yes, I'll dance with you. In fact, it'll be my pleasure to do so." She pauses for a second.`);
    scene.text('"I\'m so happy you weren\'t offended by my rudeness."');
    scene.text('You smile reassuringly at her. "Look, I understand, and at least you weren\'t as rude as some others. Don\'t let it worry you; I\'m looking forward to dancing with you in your new outfit."');
  } else {
    scene.text('I know I\'m not everyone\'s favourite person, but I hope I\'ve proven that I\'m a good friend," you tell her.');
    scene.text('Natasha looks apprehensive as she has understood the implications of what you are saying.');
    scene.text('"Okay, well enough of this nonsense with you disappearing into the crowd when I approach you. If you do that to me again, I won\'t be happy and will need to seriously rethink our relationship."');
    // TODO-QSP: dynamic text: A very sad and worried Natasha looks at you and replies. "Yes, I know, <<$pcs_ni...
    scene.text(`A very sad and worried Natasha looks at you and replies. "Yes, I know, ${((s as any).pcs_nickname ?? 0)}. That wasn't one of my finest actions. I'm so sorry, and yes, I'll dance with you. In fact, it'll be my pleasure to do so." She pauses for a second.`);
    scene.text('"I\'m so happy you weren\'t offended by my rudeness."');
    scene.text('You smile reassuringly at her. "Look, I understand, and at least you weren\'t as rude as some others. So don\'t let it worry you. I\'m looking forward to dancing with you in your new outfit."');
    scene.text('"When we get there, your first dance is with me," you tell Natasha.');
    // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>. It'll be my pleasure."
    scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}. It'll be my pleasure."`);
  }
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterDisco_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).NatbelQW['disco_invite'] = 3;
  (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha19.jpg');
  scene.text('You see that Natasha is wearing her dress. "Yep, that was definitely the right choice, Natasha. It looks great on you."');
  scene.text('Natasha smiles, "Thanks, and thank you for getting it for me. It\'s so much nicer than any of my others. I\'m almost ready to go. I just need a few minutes to put some makeup on."');
  scene.text('She walks over to a mirror and starts applying her makeup.');
  if (((s as any).pcs_makeup ?? 0) <= 1) {
    scene.text('She eyes you from the reflection in the mirror, "Would you like me to put some makeup on you as well? You\'ll look even lovelier."');
    scene.actions([
      { label: 'I suppose a little wouldn\'t hurt', handler: (st: GameState) => {
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 2;
    qspCall(s, 'stat', '');
    scene.text('Natasha applies a light amount of makeup to your face.');
    scene.actions([
      { label: 'Leave for the disco', goto: ['natbel_friend', 'disco_2_cont'] },
    ]);
  } },
      { label: 'Yes, please', handler: (st: GameState) => {
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 3;
    qspCall(s, 'stat', '');
    scene.text('Natasha spends a few minutes applying some makeup to your face.');
    scene.actions([
      { label: 'Leave for the disco', goto: ['natbel_friend', 'disco_2_cont'] },
    ]);
  } },
      { label: 'No, thanks', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Thanking Natasha, you politely decline the offer.');
    scene.actions([
      { label: 'Leave for the disco', goto: ['natbel_friend', 'disco_2_cont'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave for the disco', goto: ['natbel_friend', 'disco_2_cont'] },
    ]);
  }
  scene.build();
}

function enterDisco_2Cont(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'money', 'pay', 25);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/natasha_sveta_dance.jpg');
  scene.text('After arriving at the disco, you have a couple of dances together, then head over to a table and chat.');
  scene.text('Katja and Mefodiy approach the two of you and comment on Natasha\'s new look and dress, leaving her beaming with happiness.');
  // TODO-QSP: dynamic text: A few hours later, Natasha turns to you. "<<$pcs_nickname>>, I've really enjoyed...
  scene.text(`A few hours later, Natasha turns to you. "${((s as any).pcs_nickname ?? 0)}, I've really enjoyed myself tonight, but I should get home soon, so my mum doesn't worry. Would you please walk me home?"`);
  scene.text('"Of course, Natasha. I\'ve had a lovely time as well," you tell her. "It\'s so nice to see that at least some of our classmates taking notice of your new look."');
  scene.text('You take her by the hand and walk back to her apartment.');
  scene.text('When you reach her door, she pulls you in close.');
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 7) {
    scene.actions([
      { label: 'Kiss your girlfriend (take things further)', handler: (st: GameState) => {
    (s as any).NatbelQW['evt_day'] = ((s as any).daystart ?? 0);
  }, goto: ['natbel_kissinggames', 'natbelapt_kiss'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her to confirm she\'s your girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
      (s as any).NatbelQW['FriendLover'] = 3;
      qspCall(s, 'natbel_friend', 'init_slutfame_check');
    }
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('Natasha pulls you over to the couch, still holding onto your hand.');
    // TODO-QSP: dynamic text: You both sit down as she turns towards you, smiling, "I just want to say thank y...
    scene.text(`You both sit down as she turns towards you, smiling, "I just want to say thank you, ${((s as any).pcs_nickname ?? 0)}, for taking me to the disco tonight and again for my wonderful day out with you."`);
    scene.text('You\'ve decided that you want Natasha as your girlfriend. Her face is not far from yours, so you lean in to kiss her.');
    scene.text('Pushing yourself forward, your lips meet with Natasha\'s. There\'s a sudden jolt coursing through you, and it must be the same for her as you feel her tense for a brief moment before relaxing into your kiss.');
    scene.text('You both hesitantly pull back. You slowly open your eyes and see her doing the same.');
    scene.text('You stare at each other for a brief moment before speaking.');
    scene.text('"Well, I\'ve been thinking things over, Natasha. I don\'t want to risk losing our friendship, but I\'m ready to try dating. So let\'s take it one day at a time and try not to rush things, okay?"');
    scene.text('"Mmm, yeah, well…" Natasha says, moistening her lips. She holds you gently but firmly, bringing her face close to yours. "We should…" Natasha leans forward and starts kissing you again. "Take… things…" She holds you close as she makes out with you. Finding it impossible to resist, you start kissing her back. "Slow…"');
    scene.text('Time seems to stand still while you make out, but you eventually pull yourself away.');
    scene.text('Licking her lips again, Natasha looks lovingly at you. "Was that slow enough for you?"');
    scene.text('You giggle, still caressing her face, "That was…" You start leaning towards her again before catching yourself and pulling back. "Wow! Unexpected… Wonderful…" You pause momentarily.');
    scene.text('Then you continue, "I do mean it, though," you say, still trying to catch your breath and trying your best to look serious. "We need to think carefully about what we want and how we want our relationship to progress."');
    // TODO-QSP: dynamic text: "I know, <<$pcs_nickname>>," she replies, still licking her lips and savouring t...
    scene.text(`"I know, ${((s as any).pcs_nickname ?? 0)}," she replies, still licking her lips and savouring the taste of your kiss.`);
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Say goodnight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha20.jpg');
    scene.text('Realizing that she wants to kiss you, you hesitate and gently kiss her on the forehead. "Thank you for tonight. I hope you enjoyed it as much as me. Maybe we can do this again soon?"');
    // TODO-QSP: dynamic text: Natasha looks slightly disappointed but smiles at you, "Yes, I know, <<$pcs_nick...
    scene.text(`Natasha looks slightly disappointed but smiles at you, "Yes, I know, ${((s as any).pcs_nickname ?? 0)}. But, we need to take it slow and think about what we want from our relationship."`);
    scene.text('You nod and take a step back.');
    scene.text('Natasha continues, "Well, the decision is yours, and I\'ll respect it. But I think by now you know that I\'d like us to be more than friends."');
    scene.text('"I\'d like that, too," you tell her. "We\'re already best friends, and I don\'t want to spoil anything by rushing it."');
    scene.text('After a brief pause and a nervous giggle, you try to soften the blow and continue. "I\'m not as clever as you, so it takes me longer to process things, and I didn\'t expect to feel like this so quickly."');
    scene.text('Natasha smiles at you and nods. "Tonight was great. See you soon."');
    scene.text('"Yes, it was. See you soon."');
    scene.actions([
      { label: 'Return', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShoppingTrip(s: GameState, scene: SceneBuilder): void {
  (s as any).NatbelQW['FriendLover'] = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha8.jpg');
  scene.text('"So," you start. "Have you decided which uniform you\'d like?"');
  scene.text('"Well, I… No. I have no idea really, so let\'s see what they\'ve got," she replies. "Anyway, since you\'re paying and I\'m your girlfriend, I\'d like to know what you think."');
  scene.text('You smile at her, "Okay, no problem."');
  // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. I'm sure whichever one I get, it'll look great. I...
  scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}. I'm sure whichever one I get, it'll look great. I just hope that you'll like it too."`);
  scene.text('"I\'m sure I will. So, are you ready?"');
  scene.text('"Oh, yes!" she beams. "I\'ve been so looking forward to this! The last trip was great and I love spending time with you."');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha9.jpg');
    scene.text('You both stand up to leave.');
    scene.text('"Oh, before I forget," she says.');
    scene.text('You turn to her and notice her pulling out a handful of bills from her purse. "I really wanted to contribute as much as I could, so I carried on doing some odd jobs handing out flyers and such so I can pay for our food while we\'re out."');
    scene.text('"Oh, that\'ll be a lovely end to our trip before we head home," you say to her.');
    scene.actions([
      { label: 'Go to G&M', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 55;
    qspCall(s, 'money', 'pay', 2550);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
    scene.text('The two of you make your way to G&M and start looking for clothes. You initially have a look at some dresses and both of you try some on.');
    scene.text('After a while, you say, "Okay, come on, Natasha. I think we\'ve gotten a little distracted. We\'re never going to get you a new uniform if we don\'t look at them. And at this rate, the shop will close before we do!"');
    // TODO-QSP: dynamic text: She replies, "Yes, you're right, <<$pcs_nickname>>. No harm in a bit of looking,...
    scene.text(`She replies, "Yes, you're right, ${((s as any).pcs_nickname ?? 0)}. No harm in a bit of looking, though."`);
    scene.text('"True, but let\'s concentrate on finding you a new uniform."');
    scene.text('You spend several minutes picking and choosing between various uniforms until you have a small assortment that you both agree on. Natasha steps into the dressing room to change, then stepping out to show off each one.');
    scene.text('She has difficulty choosing between a couple of them and asks for you to make the final choice. You decide on a nice uniform that looks good and is likely to help improve her standing with the cool kids and jocks.');
    // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>," she says, smiling. "Then I'll go for that one. It's m...
    scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}," she says, smiling. "Then I'll go for that one. It's much nicer than what I've currently got at home, which was from last year."`);
    // TODO-QSP: dynamic text: You take the ' + $func('money', 'string_price', 2550) + ' uniform and head to th...
    scene.text('You take the \' + $func(\'money\', \'string_price\', 2550) + \' uniform and head to the register to pay for it while Natasha gets dressed.');
    scene.actions([
      { label: 'Wait for Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha12.jpg');
    // TODO-QSP: dynamic text: She meets you at the front of the store and takes you by the hand, before headin...
    scene.text(`She meets you at the front of the store and takes you by the hand, before heading off to Del Parco. "Thank you, that was so nice of you. So now my treat, I'm just sorry it's not more. Come on, ${((s as any).pcs_nickname ?? 0)}," she says. "Let's go."`);
    scene.text('As she leads you away from the store, she continues, "This is just a small thank you for another wonderful present. I know that I can\'t keep expecting you to pay for me all the time and I will contribute as best I can. I\'ll keep passing out fliers and doing my cleaning job for now, I\'m sorry I can\'t do more but I need to help my mum."');
    scene.text('"Thanks, but don\'t worry about it. I\'m fully aware of your situation. Umm… Guess I\'ll need to arrange another trip with you soon as you could also do with something nice for when you\'re out and about too. And I know I\'ve said it before but just make sure that your jobs don\'t get in the way of your schoolwork."');
    scene.text('"Yes, <i>Mum</i>," she replies sarcastically.');
    scene.text('You giggle and reply, "Really?! Okay, well, I agree with your mum there. Plus, you\'ve helped me with my homework, which I appreciate."');
    scene.text('The two of you laugh and joke together as you make your way through the park.');
    scene.actions([
      { label: 'Natasha takes you to Del Parco', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'beverage', 'coffee_stats');
    qspCall(s, 'food', 'reuben_stats');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha13.jpg');
    scene.text('You enter the cafe, still hand in hand. You find a table and Natasha orders the two of you a coffee and a Reuben sandwich each.');
    scene.text('While waiting on your food, you talk to each other about your day.');
    scene.text('"Well," you say to her. "I hope you enjoyed today."');
    // TODO-QSP: dynamic text: She reaches across the table and squeezes your hand, "I really have, <<$pcs_nick...
    scene.text(`She reaches across the table and squeezes your hand, "I really have, ${((s as any).pcs_nickname ?? 0)}. I love spending time with you. Plus, I loved the chance to try on dresses with you, let alone my wonderful present."`);
    scene.text('You enjoy your meal, sharing some inconsequential small talk between bites. When you\'re finished, Natasha gets up to pay for the meal.');
    scene.actions([
      { label: 'Leave the cafe', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha22.jpg');
    scene.text('While walking back through the park, you stop and sit at a wall.');
    scene.text('"Well, today has been lovely," you say.');
    scene.text('"Yes, it has. You\'re such a great friend to me."');
    scene.text('"I\'m so glad that I met you, Natasha. I won\'t forget that this all started because you kindly offered to help me with my homework when I was struggling. So don\'t think that our friendship has been all one-sided."');
    scene.text('On impulse, you gently take hold of her face and bring it close to yours. You both lean in for a tender kiss.');
    scene.text('A passerby yells out a derogatory comment, but you both ignore it.');
    scene.text('Afterwards, the two of you return to Natasha\'s apartment.');
    scene.actions([
      { label: 'Natasha\'s obsession with the cool kids', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    scene.text('"Just to let you know, I expect you to wear your new uniform to school going forward," you say when you enter her bedroom.');
    // TODO-QSP: dynamic text: Natasha looks at you, smiling, "Oh, yes, <<$pcs_nickname>>. I'm so looking forwa...
    scene.text(`Natasha looks at you, smiling, "Oh, yes, ${((s as any).pcs_nickname ?? 0)}. I'm so looking forward to doing that. Thank you again for this wonderful present!"`);
    scene.text('Seeing her excitement and knowing her obsession with the \'cool kids\' you frown inwardly and decide you need to have a serious talk to her. "Okay, I\'m sure that you will get positive comments and responses but just be careful not to read too much into it."');
    scene.text('She looks a bit confused but doesn\'t respond so you continue. "I\'m sorry this might upset you a bit. However, I think I need to tell you something."');
    scene.text('You take a deep breath, "The \'cool\' kids know that you and your family are poor and most of them are all about image, so it\'s unlikely that they\'ll accept you as one of them."');
    scene.text('Natasha protests, "But… At the disco, both Katja and Mefodiy said I looked nice?"');
    scene.text('"Yeah, well, I didn\'t say they were all bad. Both of them are very nice. Vicky is nice, too, and I guess the only reason she didn\'t come over is she was into Vanya most of the night. All I\'m saying is that you musn\'t think that they\'ll accept you as one of them. I\'m sure you will get some nice comments, which is good but don\'t expect too much."');
    scene.text('She tries to reply but you hold your hand up indicating you\'re not finished. "Also, some of them are just plain nasty despite their image."');
    scene.text('"What do you mean?" Natasha asks, moving slightly away from you.');
    scene.actions([
      { label: 'You explain', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha15.jpg');
    scene.text('"Well, I get the impression that some of the girls are a bit two-faced; I\'m sure that you\'ve overheard some of their comments. Umm… Also, whatever you do, I\'d suggest that you stay away from Dimka. I get the feeling if even half the rumors are true that there\'s something wrong with him. Earlier, when you mentioned your \'indiscretion\' with Lazar. For a moment, I was worried that it might have been him."');
    // TODO-QSP: dynamic text: She looks deflated but nods. "I guess you're right, <<$pcs_nickname>>. It's just...
    scene.text(`She looks deflated but nods. "I guess you're right, ${((s as any).pcs_nickname ?? 0)}. It's just that I love fashion and that's what they're into."`);
    scene.text('"Look, there\'s nothing stopping you from achieving your dreams. You\'re one of the brightest kids in school and you should have no problems getting into university and getting into the career of your choice through your hard work." You pause. "I take it you are intending on going to university?"');
    // TODO-QSP: dynamic text: Natasha looks happier when you say this. "Oh, yes, <<$pcs_nickname>>. I want to ...
    scene.text(`Natasha looks happier when you say this. "Oh, yes, ${((s as any).pcs_nickname ?? 0)}. I want to do a course in Fashion Design."`);
    scene.text('"Well, then, you\'ll probably have one up on all of them if you get to be a recognized fashion designer and they end up buying stuff you designed while paying a fortune for it."');
    scene.actions([
      { label: 'Deep down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    // TODO-QSP: dynamic text: Smiling, Natasha looks at you and nods. "Actually, deep down, I know they won't ...
    scene.text(`Smiling, Natasha looks at you and nods. "Actually, deep down, I know they won't accept me, ${((s as any).pcs_nickname ?? 0)}. It's just frustrating."`);
    scene.text('You lean towards her, hold her face gently and bring it slowly towards yours before giving her a tender kiss.');
    scene.text('She looks cheerfully at you. "So, what do you intend to do when you leave school."');
    scene.actions([
      { label: 'Go to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    scene.text('"Well, I hope to go to university but I guess that will depend on my grades," you tell her.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, if you want to get there, you can do it. You aren't stupid a...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, if you want to get there, you can do it. You aren't stupid and I'll help as much as I can with homework, revision and so on."`);
    scene.text('You smile at her. "Thank you, Natasha. I guess we\'ll see. We can talk about that more when the time comes."');
    scene.text('Natasha nods at you.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      { label: 'Not a clue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    scene.text('"To be honest, I haven\'t thought that far ahead. I\'ve got some options job-wise, too. Maybe we can discuss this when decision time is approaching?"');
    // TODO-QSP: dynamic text: "Yes, of course, <<$pcs_nickname>>. If you need any help with your studies in th...
    scene.text(`"Yes, of course, ${((s as any).pcs_nickname ?? 0)}. If you need any help with your studies in the meantime, just ask me. I'll always be happy to help where I can."`);
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
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

function enterShoppingTrip2(s: GameState, scene: SceneBuilder): void {
  (s as any).NatbelQW['FriendLover'] = 7;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha9.jpg');
  scene.text('"So, seen any outfits you\'d like?"');
  scene.text('"I didn\'t really want to look through the adverts and thought it best just to go and see. After all, sometimes something can look great in a picture but not so nice on or the other way around and I want to know what you think before I spend your money."');
  scene.text('You smile at her, "Sounds like a plan. So shall we go?"');
  // TODO-QSP: dynamic text: "Oh, yes, <<$pcs_nickname>>!" she beams. "I so look forward to our shopping trip...
  scene.text(`"Oh, yes, ${((s as any).pcs_nickname ?? 0)}!" she beams. "I so look forward to our shopping trips together. The last one was great and I love spending time with you."`);
  scene.text('She continues, "I\'ve also got enough money together for some food after."');
  scene.text('"Oh, that\'ll be a lovely end to our trip before we head home. Let\'s go," you say, smiling at her.');
  scene.actions([
    { label: 'Go to Flamingos', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
    scene.text('The two of you make your way to Flamingos and start looking for clothes. You start by looking through their dress selection, even trying a few of them on, before moving over to the outfit selections.');
    scene.text('After a while, "Natasha, have you seen anything you like?"');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>," she replies. "There are a couple but they're really ex...
    scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}," she replies. "There are a couple but they're really expensive!"`);
    scene.text('"I know but I chose to offer this to you. Now that we\'ve got an idea of what\'s here, let\'s try Coco and see what they\'ve got."');
    scene.text('"Okay, that\'s a good idea."');
    scene.actions([
      { label: 'Go to Coco', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
    scene.text('You head over to Coco and start browsing through their collection.');
    scene.text('A bit later, you ask, "Do you like anything you\'ve seen here, or do you want to go back to Flamingos?"');
    scene.text('She hesitates for a moment. "There are a couple in both shops, but they\'re way more expensive and I don\'t want to waste your money!"');
    scene.text('You turn to her. "Look, Natasha, I knew what I was getting into when I invited you on this shopping trip. I want to treat you, so stop worrying and pick something you like!"');
    // TODO-QSP: dynamic text: "Sorry, <<$pcs_nickname>>," she says in a lowered voice. "I just don't want to l...
    scene.text(`"Sorry, ${((s as any).pcs_nickname ?? 0)}," she says in a lowered voice. "I just don't want to lose you but I feel like I'm taking advantage of your kindness."`);
    scene.text('You grab her hand and hold it. "You\'re not," you smile to her.');
    scene.text('"Okay, well," a small smile forms on her face, "there\'s a few nice outfits here and at Flamingos, but I think I prefer the ones here. Plus, it\'s a bit cheaper, as well…"');
    scene.text('"Enough about the price! I don\'t want to hear it again!" you playfully chastise her. "Let\'s pick out an outfit already."');
    scene.text('"Well," she bites her lip. "Since you already got me a dress before, and this is supposed to be a day-to-day outfit, I think I want a pair of trousers and a top."');
    scene.text('"Alright. How about we go and pick out a few of our faves and then we\'ll head to the dressing room. You can give me a mini-fashion show!" you giggle.');
    scene.actions([
      { label: 'Mini-fashion show', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 4350);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha23.jpg');
    scene.text('You spend several minutes picking and choosing between various outfits until you have a few that you can both agree on. Natasha steps into the dressing room to change, and then stepping out to show off each one.');
    scene.text('She has difficulty choosing between a couple of them and asks for you to make the final choice. You decide on a nice outfit that you think suits her.');
    // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>," she says, smiling. "Then that's the one. It's <i>sooo...
    scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}," she says, smiling. "Then that's the one. It's <i>sooo</i> much nicer than anything I have."`);
    // TODO-QSP: dynamic text: You take the ' + $func('money', 'string_price', 4350) + ' outfit and head to the...
    scene.text('You take the \' + $func(\'money\', \'string_price\', 4350) + \' outfit and head to the register to pay for it while Natasha gets dressed.');
    scene.actions([
      { label: 'Wait for Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha12.jpg');
    scene.text('She meets you at the front of the store and reaches out to hold your hand. You both head off towards Pushkin.');
    scene.text('You quickly notice that you\'re not heading towards Del Parco. "Uh, Natasha, where are we going?"');
    // TODO-QSP: dynamic text: "Well, I got some extra money so thought I'd treat us to a meal at Limael Cafe. ...
    scene.text(`"Well, I got some extra money so thought I'd treat us to a meal at Limael Cafe. I still wish I could do more. Anyway. Come on, ${((s as any).pcs_nickname ?? 0)}," she says. "Let's go."`);
    scene.text('"I thought you were just handing out fliers and doing a cleaning job?"');
    scene.text('"See, there\'s this fashion blog I love to look at whenever I have the chance. Well, recently, whoever runs the site posted that they were looking for some technical help, so I signed up," she explains.');
    scene.text('"That sounds like a great opportunity, and thank you, Natasha. Guess we\'ll need to arrange another trip soon. Maybe just for fun this time since you\'re all kitted out now."');
    scene.text('She looks at you and smiles happily.');
    scene.text('The two of you pass the time together as you make your way to the Okhlopkov Square in Pushkin.');
    scene.actions([
      { label: 'Head to Limael Cafe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    qspCall(s, 'beverage', 'coffee_stats');
    qspCall(s, 'food', 'cheeseburger_stats');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha13.jpg');
    scene.text('You enter the cafe, still hand in hand. You find a table and Natasha orders the two of you a coffee and a burger each.');
    scene.text('Over your meal, you talk to each other about your day.');
    scene.text('"I\'ve had a great time with you," you start. "I hope you enjoyed today, too."');
    // TODO-QSP: dynamic text: She reaches across the table and squeezes your hand, "Oh yes, <<$pcs_nickname>>....
    scene.text(`She reaches across the table and squeezes your hand, "Oh yes, ${((s as any).pcs_nickname ?? 0)}. I love our time together and our days out. I also love the opportunity to try on outfits and dresses with you, especially since I can actually end up with one that's not second hand."`);
    scene.text('You enjoy your meal, sharing some general small talk between bites. When you\'re finished, Natasha gets up to pay and you two leave the cafe together.');
    scene.text('You both return to the Five Eight Estate and enter her apartment.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('Natasha leads you over to her bed, still holding your hand and turns to you with lust in her eyes.');
    scene.text('You both sit on the bed and Natasha immediately leans into you and starts kissing you.');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('Wanting more, she pushes you down on the bed while you continue to make out.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    qspCall(s, 'arousal', 'kiss', 6, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'breasts', 2, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Busted…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcasual.jpg');
    // TODO-QSP: dynamic text: Natasha's mother, <<$npc_usedname['A191']>>, suddenly enters the room unannounce...
    scene.text(`Natasha's mother, ${((s as any).npc_usedname ?? 0)?.['A191']}, suddenly enters the room unannounced. "${((s as any).pcs_nickname ?? 0)}, I just wanted to say thank-" she stops when she sees the two of you partially undressed on the bed.`);
    scene.text('You quickly cover up as a distraught Natasha quietly panics. "Mum! Why didn\'t you knock?"');
    scene.text('"I did, but I see now that you were… occupied," she replies. She takes a step forward and deeply sighs');
    scene.text('After a few moments of awkward silence, "Well, now I see why my little girl has been beaming most of the time lately. I knew you two had become good friends. I have to say I\'m shocked but," she stops to clear her throat. "I\'m actually happy for you."');
    scene.text('Neither you nor Natasha say anything.');
    // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>. I'm sure you weren't expecting this." She turns t...
    scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}. I'm sure you weren't expecting this." She turns to her daughter. "Natasha, why on Earth didn't you say something to me when things started to get serious between the two of you? Haven't I always been here to support you?"`);
    scene.actions([
      { label: 'A mother\'s love', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
    scene.text('Natasha looks visibly upset. "I know, and I\'m sorry, Mum. I just didn\'t know how you\'d react. I mean, two girls, together. You know how people are."');
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> cuts off her daughter. "You're my daughter and I love ...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} cuts off her daughter. "You're my daughter and I love you unconditionally. I want to be there to help you and support you as best I can, but I can't do that unless you talk to me about important things like this. I'm guessing this is more than a bit of fun given the new clothes you've been wearing recently. And I assume ${((s as any).pcs_nickname ?? 0)} here has been buying them for you?"`);
    scene.actions([
      { label: 'Explain your side of the story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcasual.jpg');
    // TODO-QSP: dynamic text: Natasha is bright red and it doesn't appear that she's going to reply any time s...
    scene.text(`Natasha is bright red and it doesn't appear that she's going to reply any time soon, so you spend a few minutes telling ${((s as any).npc_usedname ?? 0)?.['A191']} most of everything that's happened up until now.`);
    // TODO-QSP: dynamic text: She gives you a warm hug afterwards. "Thank you, <<$pcs_nickname>>. I appreciate...
    scene.text(`She gives you a warm hug afterwards. "Thank you, ${((s as any).pcs_nickname ?? 0)}. I appreciate you speaking up for Natasha and for your generosity as well." Then she turns and hugs her daughter. "I want both of you to know that you can talk to me. I don't judge people by anything other than their actions."`);
    // TODO-QSP: dynamic text: She gets up and starts to leave the room, but stops at the door. "Would you like...
    scene.text(`She gets up and starts to leave the room, but stops at the door. "Would you like to stay for dinner, ${((s as any).pcs_nickname ?? 0)}"`);
    scene.text('"Thanks, Mum," Natasha says. "But we actually ate not too long ago."');
    scene.text('"That\'s very kind of you," you add. "Maybe another time?"');
    scene.text('"Well, you\'re free to join us whenever you want. You\'re most welcome," she offers. "Okay, I guess I should give you two some privacy," she says with a wink.');
    scene.actions([
      { label: 'Natasha asks an awkward question', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    // TODO-QSP: dynamic text: You sit next to Natasha on the floor and she looks at you. "I'm sorry, <<$pcs_ni...
    scene.text(`You sit next to Natasha on the floor and she looks at you. "I'm sorry, ${((s as any).pcs_nickname ?? 0)}. Guess that was a bit awkward."`);
    scene.text('You smile at her, "Yeah, but it\'s better that it\'s out in the open now."');
    scene.text('"Are you going to tell your parents?"');
    scene.text('When you don\'t answer, she prods you questioningly.');
    // TODO-QSP: dynamic text: You frown. "Well, I want to but… my <<$npc_nickname['A29']>> isn't as open-minde...
    scene.text(`You frown. "Well, I want to but… my ${((s as any).npc_nickname ?? 0)?.['A29']} isn't as open-minded as yours. To be honest, I just don't know how to do it. We lucked out with your mother, even if it was an embarrassing start. I don't know how things would have gone down if this was my ${((s as any).npc_nickname ?? 0)?.['A29']}. Worst case, she'd probably disown me and kick me out of the house…"`);
    // TODO-QSP: dynamic text: Natasha gives you a gentle hug. "Okay, <<$pcs_nickname>>. I won't press you on i...
    scene.text(`Natasha gives you a gentle hug. "Okay, ${((s as any).pcs_nickname ?? 0)}. I won't press you on it for now, but if we stay together, we'll need to do something eventually."`);
    scene.text('You squeeze her back. "I know."');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
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
  } },
  ]);
  scene.build();
}

function enterCityDate1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
  scene.text('You enter Natasha\'s bedroom and see her looking at a magazine so you join her.');
  scene.text('"Okay Natasha, are you ready to go to St. Petersburg with me? I\'m just checking as you asked for a bit of time."');
  // TODO-QSP: dynamic text: "Oh yes <<$pcs_nickname>>, I don't remember ever having gone there before so tha...
  scene.text(`"Oh yes ${((s as any).pcs_nickname ?? 0)}, I don't remember ever having gone there before so thank you for taking me. Let me just go and tell my mother as I've worked hard and saved up enough so we can stay over and get breakfast."`);
  // TODO-QSP: dynamic text: You are a little concerned and look at her quizzically, "Are you sure Natasha, t...
  scene.text(`You are a little concerned and look at her quizzically, "Are you sure Natasha, that's ${qspFunc(s, 'money', 'string_price', 500)} just for a standard room?"`);
  // TODO-QSP: dynamic text: Natasha replies, "Well I wanted to do a little something nice for you so, as I s...
  scene.text(`Natasha replies, "Well I wanted to do a little something nice for you so, as I said I've worked hard and saved up enough for a room and some breakfast plus there should be some left over for something to eat while we are there. I want to make this a special trip for us and spend the night with you without my mother walking in." You both giggle remembering the embarrassing event when ${((s as any).npc_usedname ?? 0)?.['A191']} entered while you were making out.`);
  scene.actions([
    { label: '<<$npc_usedname[\'A191\']>>\'s present', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha9.jpg');
    // TODO-QSP: dynamic text: Five minutes later Natasha returns smiling. "Okay <<$pcs_nickname>>, let's go. I...
    scene.text(`Five minutes later Natasha returns smiling. "Okay ${((s as any).pcs_nickname ?? 0)}, let's go. I've let my mother know and she's happy for us and has also given me a little bit more money so now we can definitely have something to eat tonight as well."`);
    scene.text('"Well that was very generous of her, especially that I know how difficult things are for her."');
    // TODO-QSP: dynamic text: "I know <<$pcs_nickname>> and don't worry I gave her a big thank you for it. Do ...
    scene.text(`"I know ${((s as any).pcs_nickname ?? 0)} and don't worry I gave her a big thank you for it. Do you need to let your parents know you won't be back tonight?"`);
    // TODO-QSP: dynamic text: You shake your head, "No Natasha, it'll be okay and I still need to work out how...
    scene.text(`You shake your head, "No Natasha, it'll be okay and I still need to work out how to tell ${((s as any).npc_nickname ?? 0)?.['A29']} about us anyway… I'm really not looking forward to that conversation with her as I know she'll probably be mad; I just hope she doesn't go too far overboard as I've pretty much had it with her domineering attitude and don't want to say something and make it even worse!"`);
    scene.text('She looks at you with concern as you both stand and give each other a hug then head off to the station.');
    scene.actions([
      { label: 'Train journey', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 300);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/hotel/receptionist.jpg');
    scene.text('On arriving at the station you buy two tickets to St. Petersburg centre and hand over the 300 rumbles at the ticket office.');
    scene.text('After an uneventful journey you arrive at St Petersburg Centre and head off to the Hotel Indigo to check in.');
    if (((s as any).runnerQW ?? 0)?.['joined_team'] <= 0  &&  ((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] <= 0) {
      scene.actions([
        { label: 'Go to your hotel room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.normal.jpg');
    scene.text('You both approach the receptionist and Natasha rents a standard room for one night and pays for it giving you a big smile.');
    scene.text('After paying for the room you head up there and check it out.');
    scene.text('You turn to Natasha. "Thank you for this Natasha, it\'s very kind of you and absolutely wasn\'t expected."');
    scene.text('Natasha gives you a hug. "I just want to show my appreciation for all you\'ve done for me. I\'ve so enjoyed being with you and was overjoyed when you called me your girlfriend. That was so unexpected, especially after my… Erm… Stupidity with… Lazar" Natasha stops talking and blushes.');
    scene.text('You return her hug. "Well don\'t worry about it Natasha; that was before our time together anyway. I didn\'t really expect our relationship to go like this either. Initially I just thought you were nice and we could be friends and do our homework together. We\'re both still very young and so let\'s enjoy our journey together and see where it goes."');
    scene.text('Natasha nods her agreement as you continue. "Anyway Natasha are you all set?"');
    // TODO-QSP: dynamic text: Natasha nods at you "Yes <<$pcs_nickname>> shall we go and explore for a while?"
    scene.text(`Natasha nods at you "Yes ${((s as any).pcs_nickname ?? 0)} shall we go and explore for a while?"`);
    scene.text('"Yep, sounds like a plan, let\'s go."');
    scene.actions([
      { label: 'Go and explore the city', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('You both leave the hotel, link arms and wander off slowly taking in the sights of the city centre and just spend some time chatting together as you go.');
    scene.text('There are some wonderful places to take in including the Cathedral of Our Lady of Kazan and you both just enjoy the sights and sounds of the city until you spot the main library, which you know will be of great interest to Natasha so you steer her in that direction.');
    scene.actions([
      { label: 'Go to the library', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/library/downlibint.jpg');
    scene.text('"Come on Natasha, that looks like the National Library, it\'s supposed to be huge and I\'m sure you\'ll find it useful when you go to university, let\'s take a look."');
    // TODO-QSP: dynamic text: Natasha looks at you and asks, "So <<$pcs_nickname>> aren't you going to go to u...
    scene.text(`Natasha looks at you and asks, "So ${((s as any).pcs_nickname ?? 0)} aren't you going to go to university then? Only I thought we might both need to come here for research?"`);
    scene.text('You smile at her, "I\'ve got some time before I need to decide, after all we\'re not all as clever as you."');
    scene.text('She gives your arm a squeeze. "You know I\'ll help you with your studies so if you want to go I\'m sure it won\'t be a problem. Anyway, as you say, I guess we\'ll have to wait and see. After all nothing is to be taken for granted."');
    scene.text('You smile back at her but don\'t reply as you enter the very impressive library and spend some time looking through the various sections before you exit shortly followed by Natasha.');
    // TODO-QSP: dynamic text: "I could spend all day in there <<$pcs_nickname>>, there's so many interesting b...
    scene.text(`"I could spend all day in there ${((s as any).pcs_nickname ?? 0)}, there's so many interesting books and such a wonderful building too."`);
    scene.text('"Yep, well as impressive as it is I didn\'t want to spend all our time in there. There\'s plenty of time for that. Come on let\'s go to the park and take a stroll."');
    scene.actions([
      { label: 'Go to the park and have a walk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 130;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/park.jpg');
    scene.text('You both link arms and head off to the central park. After just over half an hour you arrive and take a stroll around the park taking care to avoid a group of junkies and pass by a cafe.');
    scene.text('"That looks like a nice place, how about we finish our walk then maybe freshen up. We coulsd maybe head over here later."');
    // TODO-QSP: dynamic text: Natasha looks a bit unsure. "Well yes <<$pcs_nickname>> maybe but I guess that t...
    scene.text(`Natasha looks a bit unsure. "Well yes ${((s as any).pcs_nickname ?? 0)} maybe but I guess that the park might not be very safe after dark."`);
    scene.text('You shake your head "Come on Natasha, there are two of us and if we go straight here and when we leave head directly back to the hotel we should be safe enough. Where\'s your sense of adventure?"');
    // TODO-QSP: dynamic text: "Well okay then <<$pcs_nickname>> let's do that. We'll just need to make sure we...
    scene.text(`"Well okay then ${((s as any).pcs_nickname ?? 0)} let's do that. We'll just need to make sure we keep our wits about us."`);
    scene.text('You give her a friendly smile then with the evening plan decided you head back to the hotel and freshen up before a bit.');
    scene.actions([
      { label: 'Go to the mall', goto: ['natbel_friend', 'city_date1_mall'] },
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
        { label: 'Go to your hotel room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.normal.jpg');
    scene.text('On arriving and going to the reception desk to check in Natasha tells you to put your money away and pays for the room.');
    scene.text('After paying for the room you head up there and check it out.');
    scene.text('You turn to her. "Thank you for this Natasha, it\'s very kind of you and absolutely wasn\'t expected."');
    scene.text('She gives you a hug. "I just want to show my appreciation for all you\'ve done for me. I\'ve so enjoyed being with you and was overjoyed when you called me your girlfriend. That was so unexpected, as well as… Erm…" Natasha stops talking and blushes.');
    scene.text('You return her hug. "Well don\'t worry Natasha. I didn\'t really expect our relationship to go like this either. Initially I just thought you were nice and we could be friends and do our homework together. We\'re both still very young and we\'ll need to enjoy our journey together and see where it leads."');
    scene.text('Natasha nods her agreement.');
    scene.actions([
      { label: 'Tell Natasha you\'ll see her after the gym', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/gym/desk.jpg');
    if (((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] > 0) {
      scene.text('"Anyway I need to be heading off to the gym as I compete there in a kickboxing competition. You can have a little while to yourself and I\'ll text you when I\'m done."');
      // TODO-QSP: dynamic text: Natasha is stunned. "Oh <<$pcs_nickname>>! What? You might get badly hurt!"
      scene.text(`Natasha is stunned. "Oh ${((s as any).pcs_nickname ?? 0)}! What? You might get badly hurt!"`);
      scene.text('"Now that\'s the reason I didn\'t get you a ticket to watch it!" You say smiling at her and you give her a reassuring smile. "Anyway, I haven\'t got too badly hurt yet plus I get paid prize money if I win."');
      scene.text('Natasha still looks worried and shakes her head but doesn\'t say anything.');
      scene.text('You continue, "I\'ll drop you a text when I go for my shower so you can meet me in the gym\'s reception area then we can go for a bite to eat."');
      // TODO-QSP: dynamic text: A still worried looking Natasha gives you a hug. "Okay <<$pcs_nickname>>, good l...
      scene.text(`A still worried looking Natasha gives you a hug. "Okay ${((s as any).pcs_nickname ?? 0)}, good luck and please try to be careful in the fight."`);
      scene.text('You hug her back and kiss her on the cheek before heading off to get ready.');
      if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
        scene.text('As you release her from her hug you tell her, "Look Natasha, don\'t worry too much about the kickboxing fight; how do you think I was able to beat Christina? That\'s one of the reasons I started training for it then as I got better and started doing well in sparring matches it was the obvious choice to progress to the weekly fights."');
        // TODO-QSP: dynamic text: Natasha returns your kiss, "Well I can't complain about you stopping that bully....
        scene.text(`Natasha returns your kiss, "Well I can't complain about you stopping that bully. Just be careful ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('"Will do Natasha, see you soon." You head off to get ready.');
      }
      scene.text('You have a quick think and decide if you want to get a take-away from the diner or just enter the gym. Knowing that Natasha is waiting for you, you decide that you won\'t do any training today and just take part in the fight then head to the track for the race and meet her after having a shower.');
    } else {
      scene.text('"Anyway I need to be heading off to the gym for my race. I\'ve got you a ticket so you can watch if you want or you can have a while to yourself and I\'ll text you when I\'m done."');
      // TODO-QSP: dynamic text: "Oh no <<$pcs_nickname>> I wouldn't miss your race for the world! Let's go."
      scene.text(`"Oh no ${((s as any).pcs_nickname ?? 0)} I wouldn't miss your race for the world! Let's go."`);
      scene.text('You both head off to the Havana Fitness Centre where you give Natasha her ticket and you tell her that you\'ll see her later and meet her in the gym\'s reception area, after the race has finished.');
      scene.text('You have a quick think and decide if you want to get a take-away from the diner or just enter the gym. Knowing that Natasha is waiting for you, you decide that you won\'t do any training today and just take part in the race then shower and meet her after.');
    }
    (s as any).temp_gold_medals = ((s as any).runnerQW ?? 0)?.['gold_medals'];
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_sporthub'] },
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
  scene.build();
}

function enterCityDate1Sporthub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbel_friend', 'city_date1_sporthub');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dressing</b></center>');
  scene.img('images/locations/city/citycenter/gym/locker.jpg');
  scene.text('Recruiting girls for local track team, the winners will receive cash prizes.');
  scene.text('Attention, visitors to the sports section must wear sports outfits and shoes when using the facilities.');
  if (((s as any).pcs_sweat ?? 0) >= 20) {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    if (((s as any).pcs_inhib ?? 0) < 15) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You go into the bathroom and turn on the shower. You lather your body and wash in the shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['natbel_friend', 'city_date1_sporthub'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5  ||  ((s as any).pcs_energy ?? 0) < 20  ||  ((s as any).pcs_hydra ?? 0) < 20) {
    scene.actions([
      { label: 'Take a short rest and get some food from a nearby diner', handler: (st: GameState) => {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 3) {
      (s as any).pcs_stam = ((s as any).stammax ?? 0) / 3;
    } else {
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (((s as any).stammax ?? 0) / 5);
    }
    if (((s as any).pcs_energy ?? 0) < 50) {
      (s as any).pcs_energy = 50;
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
    }
    if (((s as any).pcs_hydra ?? 0) < 50) {
      (s as any).pcs_hydra = 50;
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    }
    qspCall(s, 'stat', '');
    scene.text('You quickly run outside, grab a bite to eat and a bit of fresh air. You already feel much better.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_sporthub'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'shortgs', 'clothing_status');
  if (((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] > 0  &&  ((s as any).kickbox ?? 0)?.['amateur_fight_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      scene.actions([
        { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
      ]);
    } else {
      if (((s as any).pcs_hydra ?? 0) < 20) {
        scene.actions([
          { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
          { label: 'Enter the amateur fight', handler: (st: GameState) => {
    (s as any).kickbox['amateur_fight_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    (s as any).kickbox['opponent'] = ((s as any).kickbox ?? 0)?.['sash'] + (((s as any).rand ?? 0)(-2, 5) / 2);
    (s as any).temp_kickboxVars['fight_type'] = 1;
    // TODO-QSP: gs 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', kickbox['opponent']
  }, goto: ['havana_kickboxing', 'match'] },
        ]);
      }
      if (((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
        if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
          scene.actions([
            { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
              { label: '<b>Enter competition race</b>', goto: ['havana_running', 'race_start'] },
            ]);
          }
          if (((s as any).PCloStyle2 ?? 0) === 6  ||  ((s as any).PCloSPort ?? 0) === 1  ||  ((s as any).PShoStyle2 ?? 0) === 2  ||  ((s as any).PShoSport ?? 0) === 1) {
            scene.actions([
              { label: 'Go to the mall with Natasha  [+$func(\'wrap\', \'neg\', \'(Change your cloth...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your normal cloth...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go to the mall with Natasha', goto: ['natbel_friend', 'city_date1_mall'] },
            ]);
          }
          scene.actions([
            { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        }
        if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
          // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['de...
          scene.actions([
            { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_sporthub'] },
    ]);
  } },
          ]);
        }
        qspCall(s, 'din_van', 'tampon');
      }
      scene.actions([
        { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'breakup':
      enterBreakup(s, scene);
      break;
    case 'reconcile':
      enterReconcile(s, scene);
      break;
    case 'init_slutfame_check':
      enterInitSlutfameCheck(s, scene);
      break;
    case 'slutfame_check':
      enterSlutfameCheck(s, scene);
      break;
    case 'slut_breakup':
      enterSlutBreakup(s, scene);
      break;
    case 'slut_reconcile_door':
      enterSlutReconcileDoor(s, scene);
      break;
    case 'slut_reconcile_school_check':
      enterSlutReconcileSchoolCheck(s, scene);
      break;
    case 'slut_reconcile_school_event':
      enterSlutReconcileSchoolEvent(s, scene);
      break;
    case 'kiss_and_become_lovers':
      enterKissAndBecomeLovers(s, scene);
      break;
    case 'setup_shopping_spree':
      enterSetupShoppingSpree(s, scene);
      break;
    case 'shopping_spree':
      enterShoppingSpree(s, scene);
      break;
    case 'love_jct':
      enterLoveJct(s, scene);
      break;
    case 'disco_1':
      enterDisco_1(s, scene);
      break;
    case 'disco_2':
      enterDisco_2(s, scene);
      break;
    case 'disco_2_cont':
      enterDisco_2Cont(s, scene);
      break;
    case 'shopping_trip':
      enterShoppingTrip(s, scene);
      break;
    case 'shopping_trip2':
      enterShoppingTrip2(s, scene);
      break;
    case 'city_date1':
      enterCityDate1(s, scene);
      break;
    case 'city_date1_sporthub':
      enterCityDate1Sporthub(s, scene);
      break;
    default:
      enterBreakup(s, scene);
      break;
  }
}

export const natbel_friend: LocationDef = {
  name: 'natbel_friend',
  title: 'Dressing',
  region: 'other',
  locclass: 'bedr',
  enter: enter,
};
