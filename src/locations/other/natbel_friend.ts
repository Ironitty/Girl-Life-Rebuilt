import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBreakup(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length  === 1) {
    ((s as any).ARGS ?? {})[1] = 14;
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = 'slut';
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 0) {
    ((s as any).NatbelQW ?? {})['FriendLover'] = -((s as any).NatbelQW ?? {})?.['FriendLover'];
  }
  ((s as any).NatbelQW ?? {})['blocked'] = 1;
  ((s as any).NatbelQW ?? {})['block_day'] = ((s as any).daystart ?? 0) + ((s as any).ARGS ?? 0)[1];
  ((s as any).NatbelQW ?? {})['block_reason'] = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterReconcile(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 0) {
    ((s as any).NatbelQW ?? {})['FriendLover'] = -((s as any).NatbelQW ?? {})?.['FriendLover'];
  }
  qspCall(s, 'array', 'remove_element', 'NatbelQW', 'blocked');
  qspCall(s, 'array', 'remove_element', 'NatbelQW', 'block_day');
  qspCall(s, 'array', 'remove_element', '$NatbelQW', 'block_reason');
  // TODO-QSP: end
  scene.build();
}

function enterInitSlutfameCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] <= 75) {
    ((s as any).NatbelQW ?? {})['pav_slutfame_limit'] = 175;
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] <= 175) {
      ((s as any).NatbelQW ?? {})['pav_slutfame_limit'] = ((s as any).fame ?? {})?.['pav_slut'] + 100;
    } else {
      ((s as any).NatbelQW ?? {})['pav_slutfame_limit'] = 275;
      ((s as any).NatbelQW ?? {})['know_slut'] = 1;
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSlutfameCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3  &&  ((s as any).NatbelQW ?? 0)?.['know_slut'] === 0) {
    if (((s as any).fame ?? 0)?.['pav_slut'] > ((s as any).NatbelQW ?? 0)?.['pav_slutfame_limit']) {
      scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'slut_breakup'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSlutBreakup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['know_slut'] = 1;
  qspCall(s, 'natbel_friend', 'breakup', 14, 'slut');
  qspCall(s, 'npc_relationship', 'set', 'A16', 50);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
  scene.text('You can see Natasha crying with her head in her hands so you go to comfort her but she pushes you away.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> I really regret having to do this but we need to break up! I ...
  scene.text(`"${((s as any).pcs_nickname ?? 0)} I really regret having to do this but we need to break up! I can't continue with this relationship given the extent of your recent behaviour! I can no longer be associated with you! I'm so sorry it has come to this as I've had a great time with you and this period of being your girlfriend has been one of the happiest for me but it's over. I'm so sorry…" By now she's sobbing.`);
  scene.text('You\'re unsure of what to do for the best but feel it would only make it worse if you tried to persuade her to change her mind.');
  scene.text('So with a long sigh and after a final look at her you get up and leave without responding.');
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterKissAndBecomeLovers(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
    ((s as any).NatbelQW ?? {})['FriendLover'] = 3;
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSetupShoppingSpree(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).NatbelQW ?? {})['shopping'] = 1;
  ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
  scene.text('You give Natasha a supportive hug and an encouraging smile. Wanting to change the subject, your eyes wander around her room and you notice some magazines on her desk. "Oh, what are these?" you ask as you walk over and take a closer look.');
  scene.text('"Some fashion magazines I picked up," she says with a smile crossing her face. "Do you want to look through them with me?"');
  scene.text('You agree, thinking it would be a good distraction from talking about debts and Christina.');
  scene.text('You grab a few of them and join Natasha on the floor, spending several minutes flipping through page after page, taking turns pointing out dresses and outfits the two you of you like.');
  scene.text('One of the magazines has an advert for the local hairdresser, A Cut Above. Natasha says that at some point she wants a new style when she can afford it and points out a few options she\'d like.');
  // TODO-QSP: end
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
  ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
  ((s as any).NatbelQW ?? {})['shopping'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha8.jpg');
  scene.text('"So, Natasha," you start. "Have you decided on which hairstyle you\'d like?"');
  scene.text('"Well, I\'m still a little undecided," she says. "Since you\'re paying, I\'d like your thoughts."');
  scene.text('You sit by her and look through her choices. She\'s circled a few, and you spend a few minutes deciding which would look best for her.');
  // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. I'm sure it'll look awesome. I hope that you'll b...
  scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}. I'm sure it'll look awesome. I hope that you'll be happy with the result too."`);
  scene.text('You smile at her, "I\'m sure I will be. So, are you ready for our trip?"');
  scene.text('"Oh, yes!" she beams. "I\'ve been so looking forward to this!"');
  // TODO-QSP: end
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
  ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
  ((s as any).NatbelQW ?? {})['disco_invite'] = 1;
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her to confirm she\'s your girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
      ((s as any).NatbelQW ?? {})['FriendLover'] = 3;
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
  ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
  ((s as any).NatbelQW ?? {})['disco_invite'] = 2;
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
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('I know I\'m not everyone\'s favourite person, but I hope I\'ve proven that I\'m a good friend," you tell her.');
      scene.text('Natasha looks apprehensive as she has understood the implications of what you are saying.');
      scene.text('"Okay, well enough of this nonsense with you disappearing into the crowd when I approach you. If you do that to me again, I won\'t be happy and will need to seriously rethink our relationship."');
      // TODO-QSP: dynamic text: A very sad and worried Natasha looks at you and replies. "Yes, I know, <<$pcs_ni...
      scene.text(`A very sad and worried Natasha looks at you and replies. "Yes, I know, ${((s as any).pcs_nickname ?? 0)}. That wasn't one of my finest actions. I'm so sorry, and yes, I'll dance with you. In fact, it'll be my pleasure to do so." She pauses for a second.`);
      scene.text('"I\'m so happy you weren\'t offended by my rudeness."');
      scene.text('You smile reassuringly at her. "Look, I understand, and at least you weren\'t as rude as some others. So don\'t let it worry you. I\'m looking forward to dancing with you in your new outfit."');
    } else {
      scene.text('"When we get there, your first dance is with me," you tell Natasha.');
      // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>. It'll be my pleasure."
      scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}. It'll be my pleasure."`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterDisco_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  ((s as any).NatbelQW ?? {})['disco_invite'] = 3;
  ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
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
  // TODO-QSP: end
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
    ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
  }, goto: ['natbel_kissinggames', 'natbelapt_kiss'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her to confirm she\'s your girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
      ((s as any).NatbelQW ?? {})['FriendLover'] = 3;
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
  // TODO-QSP: end
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
  ((s as any).NatbelQW ?? {})['FriendLover'] = 5;
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
  // TODO-QSP: end
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
  ((s as any).NatbelQW ?? {})['FriendLover'] = 7;
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
      if (((s as any).pcs_stam ?? 0) < 2*((s as any).stammax ?? 0) /3) {
        (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (((s as any).stammax ?? 0) / 5);
      }
    }
    if (((s as any).pcs_energy ?? 0) < 50) {
      (s as any).pcs_energy = 50;
    } else {
      if (((s as any).pcs_energy ?? 0) < 75) {
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
      }
    }
    if (((s as any).pcs_hydra ?? 0) < 50) {
      (s as any).pcs_hydra = 50;
    } else {
      if (((s as any).pcs_hydra ?? 0) < 75) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
      }
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
      if (((s as any).pcs_energy ?? 0) < 20) {
        scene.actions([
          { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
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
          if ((!((s as any).PSport ?? 0))) {
            scene.actions([
              { label: 'Enter the amateur fight', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Enter the amateur fight', handler: (st: GameState) => {
    ((s as any).kickbox ?? {})['amateur_fight_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    ((s as any).kickbox ?? {})['opponent'] = ((s as any).kickbox ?? {})?.['sash'] + ((Math.floor(Math.random() * (5 - -2 + 1)) + (-2)) / 2);
    ((s as any).temp_kickboxVars ?? {})['fight_type'] = 1;
    // TODO-QSP: gs 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', kickbox['opponent']
  }, goto: ['havana_kickboxing', 'match'] },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
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
            if (((s as any).apparel ?? 0)?.['status'] !== 'sport') {
              scene.actions([
                { label: '<b>Enter competition race</b>', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You need to wear your sport clothe...
  } },
              ]);
            } else {
              scene.actions([
                { label: '<b>Enter competition race</b>', goto: ['havana_running', 'race_start'] },
              ]);
            }
          }
        }
      }
    } else {
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
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['de...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) - (1);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterCityDate1Aftersport(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/gym/desk.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet Natasha in the gym reception area', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/gym/desk.jpg');
    scene.text('You exit the shower room and enter the reception area where you see Natasha waiting for you.');
    if (((s as any).runnerQW ?? 0)?.['gold_medals'] > ((s as any).temp_gold_medals ?? 0)) {
      // TODO-QSP: dynamic text: Natasha is positively gushing as she rushes up to you and hugs you tightly "<<$p...
      scene.text(`Natasha is positively gushing as she rushes up to you and hugs you tightly "${((s as any).pcs_nickname ?? 0)} that was something else ${((s as any).pcs_nickname ?? 0)}! Well done! That was super fast. I looked it up and you're very close to the National championships times and not far off Olympic qualification."`);
      scene.text('You smile at her and take her hand, "Yep, well that\'s the idea but I want to study too and have a career so I get to choose rather than have it chosen for me. Anyway enough of me, I want to have some fun time with you so let\'s go and get changed quickly then head off to the shops and have a bit of girly time."');
      // TODO-QSP: dynamic text: That brings a smile "A bit of window shopping sounds like a good plan to me; we ...
      scene.text(`That brings a smile "A bit of window shopping sounds like a good plan to me; we can get to try on some stuff too. Come on ${((s as any).pcs_nickname ?? 0)} let's go."`);
      scene.text('She doesn\'t catch you rolling your eyes or the smirk on your face as you head out.');
    } else {
      // TODO-QSP: dynamic text: Natasha looks happy and smiles at you as she comes up to you and hugs you "<<$pc...
      scene.text(`Natasha looks happy and smiles at you as she comes up to you and hugs you "${((s as any).pcs_nickname ?? 0)} that was close ${((s as any).pcs_nickname ?? 0)}! Well done!"`);
      scene.text('You smile at her and take her hand, "Yep, well guess it\'ll take a bit more practice before I start winning consistently but I want to see how far I can get with this but I want to study too and have a career so I get to choose rather than have it chosen for me. Anyway enough of me, I want to have some fun time with you so let\'s go and get changed quickly then head off to the shops and have a bit of girly time."');
      // TODO-QSP: dynamic text: That brings a smile "A bit of window shopping sounds like a good plan to me; we ...
      scene.text(`That brings a smile "A bit of window shopping sounds like a good plan to me; we can get to try on some stuff too. Come on ${((s as any).pcs_nickname ?? 0)} let's go."`);
      scene.text('She doesn\'t catch you rolling your eyes or the smirk on your face as you head out.');
    }
    scene.actions([
      { label: 'Go to the locker room to change', goto: ['natbel_friend', 'city_date1_sporthub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityDate1Mall(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'money', 'pay', 1800);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha11.jpg');
  scene.text('You both head down to the mall and hit the clothes shops.');
  scene.text('As Natasha has some nice outfits now and doesn\'t need anything you just enjoy yourselves having a little fashion show.');
  scene.text('Time flies and before you know it nearly an hour has passed so you tap Natasha on the shoulder and indicate that it\'s time to go as you don\'t want to get to the park restaurant too late.');
  scene.text('You decide on a change of clothes as Natasha wants to dress up for you so you start making your way out of the mall and back to the hotel.');
  // TODO-QSP: dynamic text: On impulse passing Lusso Intimo you enter telling Natasha to wait for you outsid...
  scene.text(`On impulse passing Lusso Intimo you enter telling Natasha to wait for you outside. Once inside you pick out a sexy black bra and panties set and pay the ${qspFunc(s, 'money', 'string_price', 1800)} at the desk before exiting and the two of you head to the hotel.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hotel and change', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha42.mp4');
    scene.text('Arriving at the hotel you both freshen up and get changed.');
    scene.text('Natasha decides on her red party dress and while she\'s changing you sneak up behind her and hand the bag from Lusso Intimo. "Here you go sexy" you say in a husky a voice. "I realised that when we got you kitted out we forgot the most important part so here you go, pop these on and let me see."');
    // TODO-QSP: dynamic text: She opens the bag and takes a look inside. "Oh <<$pcs_nickname>> they're lovely....
    scene.text(`She opens the bag and takes a look inside. "Oh ${((s as any).pcs_nickname ?? 0)} they're lovely. Thank you so much." She gives you a hug and excitedly replaces her existing underwear with her new set.`);
    scene.text('You turn to face her just in time to see her butt fully exposed as she adjusts her dress. "Yep, that\'s the look I was aiming for" you say with a bit of a throaty growl. "I\'ll look forward to peeling them off you later. Anyway <i>girlfriend</i> get a wriggle on as we should get going."');
    scene.actions([
      { label: 'Go to the cafe in the park', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'food', 'large_meal_stats');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/parkcafe.jpg');
    scene.text('Taking hold of Natasha\'s hand you walk in the park to the restaurant passing the time with general chat about current events, school and anything that comes to mind.');
    scene.text('Once you arrive at the restaurant you get a table and Natasha goes to order some food and a drink.');
    scene.text('When she returns you smile at her and say, "Natasha I hope you said a big thank you to your mother as this is very nice and really not expected."');
    // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>, of course. I know how difficult things are for her." She...
    scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}, of course. I know how difficult things are for her." She replies with a tinge of sadness in her voice.`);
    scene.actions([
      { label: 'Discuss jobs in St. Petersburg', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 140;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/Hands.jpg');
    scene.text('Your food and drink soon arrives and you start eating and chatting whilst occasionally holding hands across the table.');
    scene.text('"Well Natasha this is shaping up to be a great weekend. Anyway back to your question about my jobs." You stop momentarily.');
    if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0  &&  (((s as any).runnerQW ?? 0)?.['bronze_medals'] + ((s as any).runnerQW ?? 0)?.['silver_medals'] + ((s as any).runnerQW ?? 0)?.['gold_medals']) > 0) {
      // TODO-QSP: $temp_city_work[] = 'runner'
    }
    if (((s as any).photography_start ?? 0) > 0) {
      // TODO-QSP: $temp_city_work[] = 'photographer'
    }
    if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'masseuse'
    }
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'model'
    }
    if (Object.keys((s as any).temp_city_work ?? {}).length === 0) {
      scene.text('"So are you happy <i>girlfriend</i>?" You enquire.');
      // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I was just curious and interested in you." She gives you...
      scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I was just curious and interested in you." She gives you a friendly smile before returning her attention to her meal.`);
      scene.text('"No problem, let\'s just enjoy the rest of our weekend."');
      // TODO-QSP: dynamic text: "Oh yes <<$pcs_nickname>>. It's already great. I can't remember ever coming here...
      scene.text(`"Oh yes ${((s as any).pcs_nickname ?? 0)}. It's already great. I can't remember ever coming here before. This is so nice of you."`);
      scene.actions([
        { label: 'Discuss the fashion blog', goto: ['natbel_friend', 'city_date1_fashionblog'] },
      ]);
    } else {
      if (Object.keys((s as any).temp_city_work ?? {}).length === 1  &&  ((s as any).temp_city_work ?? 0)[0] === 'runner') {
        if (((s as any).runnerQW ?? 0)?.['gold_medals'] > ((s as any).temp_gold_medals ?? 0)) {
          scene.text('"So are you happy <i>girlfriend</i>??" You enquire.');
          // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I was just curious and interested in you and I got to se...
          scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I was just curious and interested in you and I got to see you win your race. Well done!" She gets up and comes over to give you a big hug before getting a bit embarrassed and sitting down again and giving your hand a squeeze. "Sorry, I guess I got a bit carried away."`);
          scene.text('"That\'s fine Natasha, just maybe save it until a bit later." You tell her and wink.');
          scene.text('She immediately blushes and looks down.');
          scene.text('"Getting hot in here Natasha?" You continue to tease her. "Shall I get you a glass of ice water?"');
          // TODO-QSP: dynamic text: "Stop it <<$pcs_nickname>>." She says blushing even more. After gathering hersel...
          scene.text(`"Stop it ${((s as any).pcs_nickname ?? 0)}." She says blushing even more. After gathering herself she continues. "It's already been a great weekend. I can't remember ever coming to Saint Petersburg before. This is so nice of you."`);
        } else {
          scene.text('"So are you happy <i>girlfriend</i>?" You enquire.');
          // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I was just curious and interested in you and I got to se...
          scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I was just curious and interested in you and I got to see you race. That was very fast, well done, it was close! Maybe next time." She gets up and comes over to give you a big hug before getting a bit embarrassed and sitting down again and giving your hand a squeeze. "Sorry, I guess I got a bit carried away."`);
          scene.text('"That\'s fine Natasha, just maybe save it until a bit later." You tell her and wink.');
          scene.text('She immediately blushes and looks down.');
          scene.text('"Getting hot in here Natasha?" You continue to tease her. "Shall I get you a glass of ice water?"');
          // TODO-QSP: dynamic text: "Stop it <<$pcs_nickname>>." She says blushing more. After gathering herself she...
          scene.text(`"Stop it ${((s as any).pcs_nickname ?? 0)}." She says blushing more. After gathering herself she continues. "It's already been a great weekend. I can't remember ever coming to Saint Petersburg before. This is so nice of you."`);
        }
        scene.actions([
          { label: 'Discuss the fashion blog', goto: ['natbel_friend', 'city_date1_fashionblog'] },
        ]);
      } else {
        scene.actions([
          { label: 'Other jobs in St. Petersburg', goto: ['natbel_friend', 'city_date1_jobshub'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityDate1Jobshub(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
  scene.text('As the meal moves towards the end and you are finishing your drinks you see that Natasha has something on her mind by the way she keeps glancing at you.');
  scene.text('"So Natasha, I can see there\'s still something on your mind, what is it?"');
  scene.text('"Well, I was wondering…" She pauses.');
  scene.text('"Come on Natasha, spit it out. I won\'t bite… Much!" You say followed by a mouthing a quick bite.');
  scene.text('She smiles at you. "Okay, well I was just wondering if you did anything else here other than maybe a bit of restaurant work or other casual jobs?"');
  if (Object.keys((s as any).temp_city_work ?? {}).length === 0  ||  Object.keys((s as any).temp_city_work ?? {}).length === 1  &&  ((s as any).temp_city_work ?? 0)[0] === 'runner') {
    scene.actions([
      { label: 'Nope that\'s it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Nope, that\'s it, for now anyway.');
    // TODO-QSP: dynamic text: Natasha smiles at you and replies "Thank you <<$pcs_nickname>>."
    scene.text(`Natasha smiles at you and replies "Thank you ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"So are you happy <i>girlfriend</i>?" You enquire.');
    if (((s as any).temp_city_work ?? 0)[0] === 'runner') {
      if (((s as any).runnerQW ?? 0)?.['gold_medals'] > ((s as any).temp_gold_medals ?? 0)) {
        // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I was just curious and interested in you and I got to se...
        scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I was just curious and interested in you and I got to see you win your race. Well done!" She gets up and comes over to give you a big hug before getting a bit embarrassed and sitting down again and giving your hand a squeeze. "Sorry, I guess I got a bit carried away."`);
      } else {
        // TODO-QSP: dynamic text: "Yes <<$pcs_nickname>>. I was just curious and interested in you and I got to se...
        scene.text(`"Yes ${((s as any).pcs_nickname ?? 0)}. I was just curious and interested in you and I got to see you race. That was very fast, well done, it was close! Maybe next time." She gets up and comes over to give you a big hug before getting a bit embarrassed and sitting down again and giving your hand a squeeze. "Sorry, I guess I got a bit carried away."`);
      }
      scene.text('"That\'s fine Natasha, just maybe save it until a bit later." You tell her and wink.');
    }
    scene.text('She immediately blushes and looks down.');
    scene.text('"Getting hot in here Natasha?" You continue to tease her. "Shall I get you a glass of ice water?"');
    // TODO-QSP: dynamic text: "Stop it <<$pcs_nickname>>." She says blushing more. After gathering herself she...
    scene.text(`"Stop it ${((s as any).pcs_nickname ?? 0)}." She says blushing more. After gathering herself she continues. "It's already been a great weekend. I can't remember ever coming to Saint Petersburg before. This is so nice of you."`);
    scene.text('You get up and give her a hug. "Come on let\'s just enjoy our weekend."');
    scene.text('Natasha nods at you and you continue your meal.');
    scene.actions([
      { label: 'Discuss the fashion blog', goto: ['natbel_friend', 'city_date1_fashionblog'] },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('photographer') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you work as a photographer', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Well, I so some commissioned photography work but it\'s not a regular job; a bit as and when as it depends on what\'s available when I go and ask."');
    scene.text('Natasha nods to acknowledge what you said. "What sort of work do you get from this?" She asks.');
    scene.text('"That\'s completely random and some pay better than others, but it\'s a way to gaining more experience so I\'m happy to take them as I quite enjoy seeing the world through a lens; you never know I may become good enough to start doing some well paid jobs." You shrug.');
    scene.text('"Yeah I guess we\'re all trying to figure out what we want to do and even if we\'ve chosen a career path there\'s lots of different options in that chosen path."');
    scene.text('You smile at her and nod your agreement.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('masseuse') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you work at the Beauty Bar', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"Yes, I\'m a qualified masseuse and work at the beauty bar in the Galeria Mall." You pause. "So if you ever get too stressed maybe my magic hands can help" You grin at her before continuing. "Although I can think of other more enjoyable ways to relieve stress."');
    // TODO-QSP: dynamic text: Natasha blushes at your remark "<<$pcs_nickname>>! Not so loud!"
    scene.text(`Natasha blushes at your remark "${((s as any).pcs_nickname ?? 0)}! Not so loud!"`);
    scene.text('You hold your hands up. "Sorry Natasha you just blush and get embarrassed so easily I can\'t resist a bit of teasing."');
    scene.text('"I know and I don\'t mind you teasing, I just need to get used to all this." You smile at her and take a sip of your drink.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('model') : -1) >= 0) {
    scene.actions([
      { label: 'Tell her you are a model', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
    scene.text('"I work as a model at Aphrodite Photography but please don\'t spread that around. I like the job as there are no fixed times which means it\'s much easier to fit it in my schedule."');
    scene.text('Natasha is clearly shocked and sits in front of you wide eyed and speechless for a moment. Then suddenly she starts to reply with the words coming out in such a rush you find it difficult to actually understand what she\'s saying. "A model! What? How?" Followed by something you just didn\'t get at all.');
    scene.text('"Slow down Natasha! Yes a model, are you saying you don\'t think I\'m pretty enough? Is that why you\'re so shocked?" You tease.');
    // TODO-QSP: dynamic text: "No! No! Of course you're pretty. It's not that <<$pcs_nickname>>! It's just a s...
    scene.text(`"No! No! Of course you're pretty. It's not that ${((s as any).pcs_nickname ?? 0)}! It's just a surprise."`);
    scene.text('"Chill Natasha it\'s fine and before you ask yes I have a portfolio which I\'ll show you if you want."');
    // TODO-QSP: dynamic text: Natasha slowly recovers her poise. "Yes please <<$pcs_nickname>>, that'd be grea...
    scene.text(`Natasha slowly recovers her poise. "Yes please ${((s as any).pcs_nickname ?? 0)}, that'd be great. You never know if I do well with fashion I might get to a point where I can ask you to model some of my stuff."`);
    scene.text('"Yeah, that\'d make us a great team wouldn\'t it?" You reassure her.');
    scene.text('She takes a moment then looks at you quizzically and asks "Why don\'t you want me to say anything? I presume you mean in school?"');
    scene.actions([
      { label: 'Just don\'t want it spread', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('"No specific reason Natasha, I just don\'t want to be answering stuff about it if it get\'s out when it\'s nothing to do with anyone else." You pause as Natasha looks at you questioningly. "Come on Natasha you know what Lizavetta is like and I\'ve told you this in strict confidence!"');
    scene.text('Natasha nods at you "Yes it\'s okay I get it and I won\'t say anything."');
    scene.text('You continue. "Actually Anushka works there too and I don\'t think she\'d want us spreading this either."');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>> I won't say anything so if someone finds out it w...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)} I won't say anything so if someone finds out it won't be from me and yes I completely agree, Anushka is none of my business."`);
    scene.text('"Thank you. Anyway it\'d be up to her if she wants to say something."');
    scene.text('Natasha nods her agreement and plays with her hair while beaming at you.');
    if (((s as any).firstkasting ?? 0) === 0  &&  ((s as any).modelfoto ?? 0)?.['erotic'] === 0) {
      scene.actions([
        { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
      ]);
    } else {
      scene.actions([
        { label: 'Erm…', goto: ['natbel_friend', 'city_date1_jobs_model2'] },
      ]);
    }
  } },
      { label: 'Don\'t want to deal with Lizavetta and the other insufferable <i>cool kids</i>', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    scene.text('"Simple really Natasha, I just don\'t want to deal with Lizavetta together with the three witches!"');
    scene.text('She looks at you questioningly so you expand.');
    scene.text('"Yep, you know from Macbeth? <i>Double Double Toil and Trouble</i> aka Irina, Bella, Stasya then add in Trouble, also known as Lizavetta who feeds their ego! They\'re just so bloody insufferable!"');
    scene.text('Natasha has a small laugh. "I never thought of them like that but now that you mention it, yes I have to agree… Yep, that\'s a good description of those four!"');
    scene.text('"Well I never thought I\'d hear you say that!" You smile at her. "And they\'re another reason I said to you about not becoming a <i>cool kid</i> or at least not like them! If you want to be like a <i>cool kid</i> model yourself on Katja or Vicky; they\'re nice. However, I just want you to be you and true to yourself."');
    // TODO-QSP: dynamic text: "I'm trying <<$pcs_nickname>>, I just lack self confidence but you've already he...
    scene.text(`"I'm trying ${((s as any).pcs_nickname ?? 0)}, I just lack self confidence but you've already helped me a lot." She plays with her hair and beams at you.`);
    if (((s as any).firstkasting ?? 0) === 0  &&  ((s as any).modelfoto ?? 0)?.['erotic'] === 0) {
      scene.actions([
        { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
      ]);
    } else {
      scene.actions([
        { label: 'Erm…', goto: ['natbel_friend', 'city_date1_jobs_model2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCityDate1JobsModel2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/cafe1.jpg');
  // TODO-QSP: dynamic text: Natasha starts fidgeting then looks at you and says in a very quiet voice "Erm… ...
  scene.text(`Natasha starts fidgeting then looks at you and says in a very quiet voice "Erm… ${((s as any).pcs_nickname ?? 0)} are you ${((s as any).model ?? 0)?.['nickname']}?"`);
  scene.text('You look at her quizzically but she doesn\'t respond and averts her eyes away from you.');
  scene.text('You were hoping she wouldn\'t have brought this up but guess that at some point it would need to be discussed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No it\'s not me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/cafe1.jpg');
    scene.text('She caught you unaware and you\'re not sure how to respond so for now you feel that it\'s better to deny and see where it goes so you reply. "No Natasha guess it\'s a look alike." You tail off not wanting to push it further and hoping she\'ll just drop it and move on.');
    // TODO-QSP: dynamic text: Unfortunately for you she doesn't. "Well she really looks like you <<$pcs_nickna...
    scene.text(`Unfortunately for you she doesn't. "Well she really looks like you ${((s as any).pcs_nickname ?? 0)}." She looks sad as she pauses then continues. "Sorry ${((s as any).pcs_nickname ?? 0)} I shouldn't have brought it up. I didn't mean to embarrass you."`);
    scene.text('You feel bad for lying to her and sigh. You don\'t want to base your relationship on lies so you take a deep breath and admit that it is you.');
    scene.actions([
      { label: 'Yeah that\'s me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/Hands.jpg');
    if ((Array.isArray((s as any).temp_city_work) ? ((s as any).temp_city_work as any[]).indexOf('runner') : -1) < 0) {
      scene.text('"Well… Yes Natasha, I didn\'t want to say anything as I really don\'t want that known as it\'d just cause problems but yes I do it because the money is good. Maybe I\'ll stop soon, I\'ll have to think about that. I\'m sorry I lied to you initially, that wasn\'t nice!"');
      // TODO-QSP: dynamic text: Natasha gives you a hug. "Don't worry <<$pcs_nickname>> I'd never say anything w...
      scene.text(`Natasha gives you a hug. "Don't worry ${((s as any).pcs_nickname ?? 0)} I'd never say anything whatever happens between us. I'm already grateful for all you've done for me and I'll support you in whatever you decide. I'm also starting to be able to help out money wise so if you're doing this for me you can stop if you want as I'm just happy spending time with you."`);
      scene.text('"Thank you Natasha and no don\'t worry I\'m not doing it just to fund us." You take hold of her hand and give it a friendly squeeze');
      scene.actions([
        { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
      ]);
    } else {
      if (((s as any).runnerQW ?? 0)?.['champ_gold'] === 0) {
        scene.text('"Well… Yes Natasha, I didn\'t want to say anything as I really don\'t want that known as it\'d just cause problems but yes I do it because the money is good. Maybe I\'ll be able to stop soon, I\'ll have to think about that. Also I\'m sorry I lied to you initially, that wasn\'t nice!"');
        // TODO-QSP: dynamic text: Natasha gives you a hug. "Don't worry <<$pcs_nickname>> I'd never say anything w...
        scene.text(`Natasha gives you a hug. "Don't worry ${((s as any).pcs_nickname ?? 0)} I'd never say anything whatever happens between us. I'm already grateful for all you've done for me and I'll support you in whatever you decide. I'm also starting to be able to help out money wise so if you're doing this for me you can stop if you want as I'm just happy spending time with you."`);
        scene.text('"Thank you Natasha and no don\'t worry I\'m not doing it just to fund us. Anyway, now that my racing is starting to provide a good income plus the model work it should be fine so it shouldn\'t be much longer before I can stop if I want as I\'ll also be able to do the sports modeling work which comes with better pay."');
        scene.text('You take hold of her hand and give it a friendly squeeze.');
        scene.actions([
          { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
        ]);
      } else {
        scene.text('"Well… Yes Natasha, I didn\'t want to say anything as I really don\'t want that known as it\'d just cause problems but yes I do it because the money is good. Maybe I\'ll be able to stop soon, I\'ll have to think about that. I\'m sorry I lied to you initially, that wasn\'t nice!"');
        // TODO-QSP: dynamic text: Natasha gives you a hug. "Don't worry <<$pcs_nickname>> I'd never say anything w...
        scene.text(`Natasha gives you a hug. "Don't worry ${((s as any).pcs_nickname ?? 0)} I'd never say anything whatever happens between us. I'm already grateful for all you've done for me and I'll support you in whatever you decide. I'm also starting to be able to help out money wise so if you're doing this just for me please stop as I'm just happy spending time with you."`);
        scene.text('"Thank you Natasha and no don\'t worry I\'m not doing it just to fund us."');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.text('You pause then laugh and continue, "Anyway Natasha how come you know I do erotic modelling but didn\'t have a clue that I\'m the 400M track champion for St. Petersburg?" You giggle and finish off with. "Guess I know how you spend your spare time!"');
    scene.text('Natasha goes scarlet and mutters something that she knows because she looks at the model pages and apologises again that she didn\'t know about your sporting achievements.');
    scene.text('You lift her chin and give her a kiss and hug. "It\'s fine Natasha, I just couldn\'t resist a bit or teasing." You take hold of her hand and give it a friendly squeeze.');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date1_jobshub'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityDate1Fashionblog(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco1.jpg');
  scene.text('"So Natasha, how\'s this fashion blog of yours going?" You ask.');
  // TODO-QSP: dynamic text: She smiles at you and responds happily. "It's not my blog <<$pcs_nickname>>, I j...
  scene.text(`She smiles at you and responds happily. "It's not my blog ${((s as any).pcs_nickname ?? 0)}, I just help out but yeah it's going fine and I'm really enjoying it. Making a bit of money from it is also really nice."`);
  scene.text('"Well that\'s great Natasha, I\'m so pleased for you."');
  scene.text('Natasha motions you to get closer. "Here let me show you."');
  scene.text('She gets her phone out and shows you the blog. "I don\'t do the content, although I\'ve made some suggestions on content to add or amend; I mainly do the techie stuff."');
  scene.text('"Looks great Natasha, let\'s hope it continues. We might even get tips of where to go if we want to go shopping again or just browse."');
  scene.text('She nods and smiles, probably thinking of hauling you round loads of shops and trying on stuff with her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to hotel for the night', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/park4.jpg');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I'll go and pay then I guess we should head out." Natas...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, I'll go and pay then I guess we should head out." Natasha gets up and pays for the meal.`);
    scene.text('"Thank you Natasha, this was really nice and yes, best get going as we don\'t want to be hanging around in the park too late." You pause then tap her on her butt. "Right <i>girlfriend</i> let\'s get that sexy ass of yours back to the hotel room!"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Shhh!" She responds going bright red as she gets up and star...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}! Shhh!" She responds going bright red as she gets up and starts walking towards the exit where she stops and buys you an ice pop each. She hands one to you and grinning says "Maybe this will keep you quiet."`);
    scene.text('You can\'t resist a little further teasing so you respond with a smirk. "Well thanks… Oh yes, now we can practice our sucking and licking skills on the way!"');
    scene.text('Natasha is now an even brighter shade of red. "Be quite!… What am I to do with you?" She shakes her head.');
    scene.text('You start to respond. "Well… Now that\'s a good question." However, deciding you don\'t want to tease her further you take her hand and say while grinning. "You know; you\'re so cute when you get embarrassed."');
    scene.text('You both head back to the hotel chatting about whatever comes to mind and sucking on your ice pops.');
    scene.actions([
      { label: 'Start undressing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha43.jpg');
    scene.text('You arrive back at the hotel and enter your room and immediately guide Natasha to the bed and after a passionate kiss you start pulling her dress down. "I\'ve been wanting to do that for a while now, good thing we were in a public place earlier or you\'d never have finished your meal!"');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down to business', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha44.jpg');
    scene.text('You pull her dress down and she steps out of it then sits back on the bed.');
    scene.text('Wasting no time you crawl over to her and push her down onto her back and start massaging her breasts.');
    qspCall(s, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha45.jpg');
    scene.text('With your dress now loosely around your waist you turn your attention to Natasha\'s pussy as she pulls her panties to the side for you.');
    scene.text('As you start alternately licking and flicking your tongue in and out of her clit she starts moaning and you start tasting her juices which start flowing freely.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha takes control', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha46.jpg');
    scene.text('She\'s really gets into it and takes over pushing you down on the bed then immediately climbing on top of you.');
    scene.text('Looking down at you with a mixture of love and lust she straddles your leg and starts riding it as she strokes your body.');
    scene.text('It doesn\'t take long before she cums on your thigh soaking it with her juices.');
    qspCall(s, 'arousal', 'massage', 5, 'lesbian');
    qspCall(s, 'arousal', 'erotic_nudity', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha47.jpg');
    scene.text('She leaves you lying on the bed and completely climbs on top of you presenting her pussy to your eager mouth.');
    scene.text('As you get to work on her you feel Natasha sliding her tongue slowly up and down and flicking it inside you as she sucks up your juices that are flowing out by now.');
    scene.text('Suddenly and almost without warning the dam bursts and you reach a toe curling orgasm squirting into her mouth and soaking her face with your juices.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Reflect', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['FriendLover'] = 9;
    ((s as any).npc_had_sex ?? {})['A16'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha48.jpg');
    scene.text('You both slowly come down from your high and sit back on the bed cuddling and kissing each other as you both catch your breath.');
    scene.text('Eventually you are able to speak. "Well that was definitely worth the wait! I\'m glad you\'re my <i>girlfriend</i>, you\'d have been wasted on guys!"');
    scene.text('Natasha simply responds by kissing you and playing with you, kisses which you return.');
    scene.text('In between kisses you tell her "I\'m happy too as you seem to be getting a little more confident; I was wondering if or when you would."');
    scene.text('When Natasha looks confused you clarify. "Well you took control back there in the heat of passion." You nod and continue. "That was good to see as I\'ve been trying to build your confidence."');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>> I guess that'll be a long process as I'm just not used t...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)} I guess that'll be a long process as I'm just not used to someone who looks out for me as you've done."`);
    scene.text('You kiss her again. "Well the point is that if you take control of things they can be great but you need the confidence to do so and yes I know it\'ll be a long process but I think you\'re worth it."');
    scene.text('At that Natasha gives you another kiss and says, "Guess we\'d best get cleaned up and get some sleep."');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha49.jpg');
    scene.text('You both get washed, do your teeth and climb into bed after a long day.');
    scene.text('Flopping down on the bed Natasha gives you a final kiss and after a quick cuddle closes her eyes falling asleep almost immediately.');
    qspCall(s, 'sleep_simple', 'sleep_until', 8, 0);
    scene.actions([
      { label: 'Wake up', goto: ['natbel_friend', 'city_date1_cleanup'] },
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

function enterCityDate1Cleanup(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'city_date2_start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCityDate2Start(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha50.jpg');
  scene.text('You wake up first and after looking over at Natashsa and seeing she\'s still asleep you check the time on your phone.');
  scene.text('Deciding you need to get moving you give Natasha a soft kiss then nudge slowly waking her up.');
  scene.text('"Come on sleepyhead we need to get moving if we want to do something and I plan to take you somewhere nice today."');
  scene.text('Natasha slowly comes too and rubbing her eyes asks you. "So what\'s the plan?"');
  scene.text('"Well I was going to spend it looking at the shops in the mall but we did that yesterday sooo you like gardens… right?" You ask. "I have somewhere special in mind but you\'ll need to wait and see where."');
  scene.text('"Yes, they can be so relaxing. Sounds lovely and we can always go to the mall another time."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up sex', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha51.mp4');
    // TODO-QSP: dynamic text: Natasha slides over to you and wraps her arm around you. "Umm, this is a nice wa...
    scene.text(`Natasha slides over to you and wraps her arm around you. "Umm, this is a nice way to wake up ${((s as any).pcs_nickname ?? 0)}" she says as she starts playing with your breast`);
    scene.text('"Umm… Yeah…" You respond closing your eyes and enjoying her embrace as you slowly start to feel your arousal building.');
    scene.text('It seems that the same is happening to Natasha as you can hear her breathing change and she starts moving against you ever so slightly at first…');
    scene.text('You lie pretty still just letting your body respond to her actions as you let her take control of the pace.');
    scene.text('It\'s not long before she gives you a long passionate kiss which you fully return as you roll over facing her.');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'arousal', 'massage', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    ((s as any).NatbelQW ?? {})['horny'] = 0;
    (s as any).nat_org = 0;
    qspCall(s, 'natbel_friend', 'city_date2_morningsex');
  } },
  ]);
  scene.build();
}

function enterCityDate2Morningsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_last_used ?? 0) !== 'boobkiss') {
    scene.actions([
      { label: 'Boob kiss', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['horny'] = (((s as any).NatbelQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 10);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha52.jpg');
    scene.text('You crawl on top of her and tweak her nipples at first.');
    scene.text('Slowly you begin kissing, licking and sucking them then letting her nipple pop out before recommencing as you keep your eyes focused directly on hers.');
    qspCall(s, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'natbel_friend', 'city_date2_morningsex');
  } },
    ]);
  }
  if (((s as any).temp_last_used ?? 0) !== 'scissoring') {
    scene.actions([
      { label: 'Scissoring', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['horny'] = (((s as any).NatbelQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 10);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha53.jpg');
    scene.text('As both of your passion builds neither of you can resist moving so that your legs are intertwined.');
    scene.text('You both begin rocking back and forth slowly at first but gradually increasing in speed and intensity bring you both higher and higher.');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'natbel_friend', 'city_date2_morningsex');
  } },
    ]);
  }
  if (((s as any).temp_last_used ?? 0) !== 'special') {
    scene.actions([
      { label: 'Special play', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['horny'] = (((s as any).NatbelQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 10);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha54.jpg');
    scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
    scene.text('Slowly moving your body up and down you start edging her using your boob, your hard erect nipple gliding over her soaking wet slit.');
    scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit in rhythm with your actions.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-5), 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'natbel_friend', 'city_date2_morningsex');
  } },
    ]);
  }
  if ((((s as any).NatbelQW ?? 0)?.['horny'] % 10000) >= 100) {
    scene.actions([
      { label: 'Making Natasha cum', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['horny'] = (((s as any).NatbelQW ?? {})?.['horny'] / 10000) * 10000 + 10000;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha55.jpg');
    scene.text('After you lie back and spread your legs for Natasha to lick you out. However, she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
    scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
    scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
    scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
    scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and at the same time starts to tremble uncontrollably. She grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'natbel_friend', 'city_date2_morningsex');
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] >= 10000) {
    scene.actions([
      { label: 'Natasha makes you cum', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['horny'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha56.mp4');
    scene.text('Your excitement has been building a while but you managed to contain it and keep yourself on the edge, however, all of a sudden Natasha starts changing the pace and her tongue hits just the right spot!');
    scene.text('Unable to hold back any longer you groan loudly and squirt into her mouth as you grab her arse squeezing her buttocks together.');
    scene.text('You then spend a few minutes in each other\'s arms enjoying the afterglow and a little reluctant to move.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Shower breakfast and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/pavlovsk/hotel/roomservice.jpg');
    // TODO-QSP: dynamic text: After you've both recovered from your early morning exertions Natasha leans over...
    scene.text(`After you've both recovered from your early morning exertions Natasha leans over and says, "Okay ${((s as any).pcs_nickname ?? 0)} I'll order us some breakfast in bed, my treat."`);
    scene.text('"That\'d be nice, thank you. While you\'re doing that I\'ll get showered and dressed." You give her an affectionate kiss on the cheek as you head into the bathroom returning 15 minutes later having got showered, brushed your teeth and combed your hair.');
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['wardrobe', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCityDate2WardrobeHub(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/roomservice.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose something else to wear', goto: ['wardrobe', 'start'] },
    { label: 'Wait for breakfast to arrive', handler: (st: GameState) => {
    qspCall(s, 'food', 'medium_meal_stats');
    scene.text('Once back in the room you quickly get dressed just as breakfast arrives.');
    scene.text('You both tuck in, no doubt hungry from your early morning exercise.');
    scene.actions([
      { label: 'Go to the Peterhof Palace', goto: ['natbel_friend', 'city_date2_palace'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCityDate2Palace(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha57.jpg');
  // TODO-QSP: dynamic text: Once you're both washed, dressed and finished breakfast Natasha looks at you and...
  scene.text(`Once you're both washed, dressed and finished breakfast Natasha looks at you and asks, "So ${((s as any).pcs_nickname ?? 0)}, shall we head to the gardens you mentioned? Are they far?"`);
  scene.text('Smiling you respond, no not far and they\'re special. There\'s also the famous Hermitage museum. Maybe when you\'re at university you can go and visit as there\'s loads of interesting stuff there plus the gardens are beautiful let alone the frontage which is really special and often there are often horse drawn carriages outside."');
  // TODO-QSP: dynamic text: A concerned Natasha looks at you. "<<$pcs_nickname>> I know I've mentioned this ...
  scene.text(`A concerned Natasha looks at you. "${((s as any).pcs_nickname ?? 0)} I know I've mentioned this before but won't you be going to university too?"`);
  scene.text('"Well first off that\'ll depend on my grades as I\'m not as clever as you."');
  scene.text('Natasha frowns. "You know I\'ll help you don\'t you? If you want to get there you can."');
  scene.text('"Let\'s just see how things go eh?" You say taking hold of Natasha\'s hand and pulling her into the gardens proper.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the Palace gardens', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha57a.jpg');
    scene.text('Realising that she needs to drop the subject Natasha doesn\'t pursue it further. "Okay, shall we go; I\'m ready?"');
    scene.text('With that you both head out and enter the gardens where you see the beautiful palace with pretty fountains and statues to the front.');
    scene.text('You both pause to admire before continuing your stroll.');
    scene.actions([
      { label: 'Explore the Hermitage Gardens', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha58.jpg');
    scene.text('You both take your time strolling through the various gardens whilst holding hands.');
    scene.text('Perhaps surprisingly, you don\'t hear many people commenting on your evident closeness and simply enjoy the beautiful gardens.');
    // TODO-QSP: dynamic text: After a while a smiling Natasha looks at you. "You're full of surprises <<$pcs_n...
    scene.text(`After a while a smiling Natasha looks at you. "You're full of surprises ${((s as any).pcs_nickname ?? 0)}; I didn't think you'd be interested in something like this."`);
    scene.text('With a grin you respond. "Yeah well I guess I\'m full of surprises. I\'m glad you like it."');
    scene.text('"So have you been here before?" she asks you.');
    scene.text('You shake your head. "Nope, I just looked up various things to do for our visit and picked something and this appealed as I didn\'t fancy another trip round the shops."');
    scene.text('Natasha has a small giggle. "Yeah sorry about the extended fashion show."');
    scene.actions([
      { label: 'Conclude your visit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha59.jpg');
    scene.text('You continue to wander around the gardens talking about various things that interest either or both of you.');
    scene.text('Natasha suddenly stops you and asks if you know exactly where you both are at the moment as she\'s fascinated by the fountain in front of you.');
    scene.text('"If I remember correctly this is the Neptune Fountain in the upper garden of Peterhof." You reply.');
    scene.text('"Well that\'d explain it as it looks like something from Greek mythology."');
    scene.text('Not knowing any Greek mythology you simply smile and nod.');
    scene.text('As it\'s approaching midday you sigh and turn to Natasha, "Well I guess we\'d best be leaving Neptune and his friends and start to head back home."');
    scene.actions([
      { label: 'Take the train home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/trainstation/central_station_inside.jpg');
    scene.text('You link arms with her as you both make your way to the central station to get the train home.');
    scene.text('Natasha pays for the ticket and you take your seats on the train home.');
    // TODO-QSP: dynamic text: As you're nearing your station she turns to you and smiles. "Thank you for this ...
    scene.text(`As you're nearing your station she turns to you and smiles. "Thank you for this weekend ${((s as any).pcs_nickname ?? 0)}. I've really enjoyed it."`);
    scene.text('"My pleasure, I really like our time together and yeah, this was a lovely break. Back to reality soon."');
    scene.text('She smiles and nods at you in acknowledgement.');
    scene.text('Before long you\'re heading to your apartment block as Natasha tells you that her mother has asked to have a quick chat with you before you leave so you go back to her place.');
    scene.actions([
      { label: '<<$npc_usedname[\'A191\']>> speaks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcouchchat.jpg');
    // TODO-QSP: dynamic text: On arriving back at Natasha's <<$npc_usedname['A191']>> greets you and leads you...
    scene.text(`On arriving back at Natasha's ${((s as any).npc_usedname ?? 0)?.['A191']} greets you and leads you and Natasha to the lounge. "Hello ${((s as any).pcs_nickname ?? 0)}, I hope you both had a good weekend." You both nod in confirmation but don't say anything as it's clear that she has something she wants to say.`);
    scene.text('She continues. "Okay, come in both of you. I\'ve just made some tea, would you like some?" You both nod in confirmation. "I take it Natasha told you I wanted to have this talk?" Again you nod in confirmation as she continues.');
    if (((s as any).grupTipe ?? 0) === 4  ||  ((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
      scene.text('"Well… How best to put this?" She pauses momentarily. "I\'m aware that you are one of the <i>trouble maker</i> kids in school."');
      scene.text('"Right! I wondered when that would be mentioned. I get so fed up with just being branded as something when there\'s much more to me than just which clique I\'m in at school. We\'re not all bad!"');
      // TODO-QSP: dynamic text: "I guess that's true <<$pcs_nickname>> as you've just helped my daughter and hav...
      scene.text(`"I guess that's true ${((s as any).pcs_nickname ?? 0)} as you've just helped my daughter and haven't picked on her as some of the others do and not just the trouble makers. It's just that you two are a pretty much 100% different so I get that you may have asked for help with homework and in return reduced some of the bullying Natasha has to endure but to get together; well frankly that surprised me."`);
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'slut'  ||  ((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 300) {
        scene.text('"Well… I don\'t really know how to say this without giving offence so please bear with me." She pauses momentarily. "I\'m aware that you have a bit of a bad reputation."');
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'goth'  ||  ((s as any).PCloStyle ?? 0) === 2) {
          scene.text('"Well… How best to put this?" She pauses momentarily. "Given my daughter is so into fashion and you dress, shall we say <i>differently</i>."');
          scene.text('At this point you interrupt. "Yeah it\'s not the current fashion but it is an alternative fashion. I really don\'t care how others dress but this is me so I guess it\'s a statement of who I am and I don\'t intend changing anytime soon. That doesn\'t mean that I want Natasha to copy me, she needs to be true to herself."');
          // TODO-QSP: dynamic text: That's fine <<$pcs_nickname>> and, in fact I like what you wear most of the time...
          scene.text(`That's fine ${((s as any).pcs_nickname ?? 0)} and, in fact I like what you wear most of the time but I guess what I'm trying to say is that I have no clue what attracted you to each other."`);
        } else {
          scene.text('"Well… How best to put this?" She pauses momentarily. "I don\'t really know why you both decided to get together…"');
        }
      }
    }
    scene.text('On hearing this you reply. "Right well I can guess where this is going. I suppose I\'d best be leaving then!"');
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> shakes her head. "Oh no <<$pcs_nickname>>, please don'...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} shakes her head. "Oh no ${((s as any).pcs_nickname ?? 0)}, please don't do that." You pause as she continues. "Please sit back down, I didn't mean any offence. You didn't let me finish. I was going to say that irrespective of anything else you've been nothing but kind to my girl and she really needed someone in her corner; since you became her friend she's perked up but especially so since you two got close. I'm really grateful to you for that."`);
    scene.text('A blushing Natasha interrupts. "Mother!"');
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> looks at her daughter. "What?! I just wanted to acknow...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} looks at her daughter. "What?! I just wanted to acknowledge that and say that ${((s as any).pcs_nickname ?? 0)} is welcome here while you two are together and to say I don't care about any other stuff; I just care how you two behave towards each other. Anyway Natasha, did you speak to ${((s as any).pcs_nickname ?? 0)} following our discussion?"`);
    scene.text('She shakes her head sadly. "No sorry mother I didn\'t want to risk ruining our weekend… Well okay I guess I\'ll do so now."');
    scene.actions([
      { label: 'Relationship status', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha15.jpg');
    scene.text('You turn your attention to Natasha, who looks worried and wait for her to start.');
    // TODO-QSP: dynamic text: Natasha brings her hand to her forehead and looks a little sad and thoughtful as...
    scene.text(`Natasha brings her hand to her forehead and looks a little sad and thoughtful as she says "${((s as any).pcs_nickname ?? 0)}, I wanted to just clarify our relationship with you as I know that you didn't initially mean to ask me to be your girlfriend. I sort of pressured you and that was wrong, I'm sorry for that…" She pauses and looks more upset but indicates she hasn't finished. She takes a deep breath and continues "You're doing so made me very happy and I love being your girlfriend but I just had to let you know that if you or I feel the need to have other relationships that's okay for now."`);
    scene.text('"Sorry, Natasha, first off is that you speaking or your mother and what exactly are you saying? Do you want us to break up or what?"');
    scene.actions([
      { label: 'Discuss an open relationship', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['rel_type'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    // TODO-QSP: dynamic text: A now distraught Natasha replies. "NO <<$pcs_nickname>>! No! I love being your g...
    scene.text(`A now distraught Natasha replies. "NO ${((s as any).pcs_nickname ?? 0)}! No! I love being your girlfriend! Fuck! I knew I'd mess this up! I guess I mean that if you need to experiment I might get upset but would accept it, at least for now. We can have a discussion later on as to the long term future. For now let's just have fun together and enjoy each other's company."`);
    scene.text('Before you can respond she continues. "Also to answer your other question, yes I spoke to my mother but that was because I felt bad about pressuring you and yes she suggested this as a possible option." She gives a big sigh. "But in the end I do agree that this is a possible solution for now."');
    scene.text('You take a moment to digest what she just said then respond, "Okay Natasha, I guess what you\'re saying is that for now you\'d be okay with an open relationship? Then if I go to university with you we can think about taking it to a different level at some point while we\'re there?"');
    scene.text('Natasha nods at you. "Yes I guess so. I mean I\'d prefer it if it was just you and I but we\'re both very young and as you said initially we shouldn\'t jump into something and mess it up because it\'s too soon."');
    scene.text('"Okay Natasha, thanks for your honesty. I know that would have been hard for you." You give her a hug. "I haven\'t really thought about it but don\'t worry I won\'t do anything to embarrass you." You pause. "Anyway, just because we can doesn\'t mean we will."');
    // TODO-QSP: dynamic text: A relieved Natasha looks at you, nods and smiles. "Sorry <<$pcs_nickname>> I'm j...
    scene.text(`A relieved Natasha looks at you, nods and smiles. "Sorry ${((s as any).pcs_nickname ?? 0)} I'm just not used to all this. Please be patient with me."`);
    scene.text('"That\'s fine Natasha, we\'re both learning as we go so we need to be patient with each other."');
    // TODO-QSP: dynamic text: Remembering that <<$npc_usedname['A191']>> is in the room you look over to her a...
    scene.text(`Remembering that ${((s as any).npc_usedname ?? 0)?.['A191']} is in the room you look over to her and she simply smiles at both of you.`);
    scene.actions([
      { label: '<<$npc_usedname[\'A191\']>> tells <<$pcs_nickname>> she can stay over', goto: ['natbel_friend', 'city_date2_after_rel_talk'] },
    ]);
  } },
      { label: 'Question Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    // TODO-QSP: dynamic text: A now distraught Natasha replies. "NO <<$pcs_nickname>>! No! I love being your g...
    scene.text(`A now distraught Natasha replies. "NO ${((s as any).pcs_nickname ?? 0)}! No! I love being your girlfriend! Fuck! I knew I'd mess this up!"`);
    scene.text('On hearing this you decide to interrupt her, "Umm… So you want an open relationship? Is that what <i>YOU</i> really want or what you think I want as I think it\'s that later?"');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, you said you wanted to take things slowly but I feel th...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}, you said you wanted to take things slowly but I feel that I sort of pressured you into asking me and I'm not comfortable with having done that."`);
    scene.text('You sigh as you reply and give her a hug as you continue, "No Natasha you\'re avoiding my question! I know my known mind so I repeat, what do you want?"');
    scene.text('Natasha slowly moves back from you and looks at you before replying in a very quiet voice. "Well I think you know the answer to that."');
    scene.text('"Yes I guess I do but given you raised this I need to hear it from you; I know you don\'t much like making decisions but this is one I can\'t make for you."');
    scene.text('Now almost in a whisper she replies "I want you for my girlfriend and only you."');
    scene.actions([
      { label: 'Confirm sole GF relationship', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['rel_type'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('You break into a grin. "There, that wasn\'t so hard was it?!"');
    scene.text('For a moment she simply sits by your side and looks completely lost then shrugs. "I guess that depends on your answer."');
    // TODO-QSP: dynamic text: You slowly lean in towards her and ignoring <<$npc_usedname['A191']>> also being...
    scene.text(`You slowly lean in towards her and ignoring ${((s as any).npc_usedname ?? 0)?.['A191']} also being in the room gently bring her face near yours.`);
    scene.text('When your face is inches from hers you feel her hands shaking as she takes hold of your face and slowly brings your mouth to hers as she gives you a passionate kiss.');
    scene.text('After what seems ages but was only a few seconds you slowly break the kiss and answer her "Okay <i>girlfriend</i>, sealed with a kiss I guess. So you\'ve got your answer now enough second guessing what I want please! Let\'s just enjoy being together and see what happens."');
    // TODO-QSP: dynamic text: "You've just made my day <<$pcs_nickname>>; I simply couldn't be happier right n...
    scene.text(`"You've just made my day ${((s as any).pcs_nickname ?? 0)}; I simply couldn't be happier right now!"`);
    // TODO-QSP: dynamic text: Remembering that <<$npc_usedname['A191']>> is in the room you look over to her a...
    scene.text(`Remembering that ${((s as any).npc_usedname ?? 0)?.['A191']} is in the room you look over to her and she simply smiles at both you.`);
    scene.actions([
      { label: '<<$npc_usedname[\'A191\']>> tells Natasha you can stay over', goto: ['natbel_friend', 'city_date2_after_rel_talk'] },
    ]);
  } },
      { label: 'Confirm open GF relationship', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['rel_type'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('You break into a grin. "There, that wasn\'t so hard was it?!"');
    scene.text('For a moment she simply sits by your side and looks completely lost then shrugs. "Guess that depends on your answer."');
    // TODO-QSP: dynamic text: You slowly lean in towards her and ignoring <<$npc_usedname['A191']>> also being...
    scene.text(`You slowly lean in towards her and ignoring ${((s as any).npc_usedname ?? 0)?.['A191']} also being in the room slowly bring her face near yours and give her a comforting kiss.`);
    scene.text('"Well don\'t worry I like having you as my girlfriend too and don\'t want that to change, however, I am aware that we are both young and I don\'t think that either of us should commit to too much too soon so for now I guess it\'d be better for both of us to keep things fairly open.');
    scene.text('Natasha clearly looks unhappy about this but nods then shrugs. "Yeah, okay I guess so."');
    scene.text('"Look Natasha just because we can doesn\'t mean we should. All I\'m saying is that if either of us makes a mistake that shouldn\'t be the end for us. After all we\'re both very young and inexperienced so mistakes can easily happen and I think that at the moment it\'s more important how we treat each other. If we\'re still together we can have another conversation when we\'re a bit older and decide properly then."');
    // TODO-QSP: dynamic text: At this point <<$npc_usedname['A191']>> joins the conversation. "I think that <<...
    scene.text(`At this point ${((s as any).npc_usedname ?? 0)?.['A191']} joins the conversation. "I think that ${((s as any).pcs_nickname ?? 0)} has a valid point; think on it and I'm sure you'll come to agree." Natasha looks at her, nods and gives her a weak smile.`);
    scene.actions([
      { label: '<<$npc_usedname[\'A191\']>> tells Natasha you can stay over', goto: ['natbel_friend', 'city_date2_after_rel_talk'] },
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

function enterCityDate2AfterRelTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcouchchat.jpg');
  // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> sees Natasha and you appear to have finished so takes ...
  scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} sees Natasha and you appear to have finished so takes starts speaking to you as you sip on your tea. "Well ${((s as any).pcs_nickname ?? 0)}, now you've had your chat let's just have our tea and relax for a bit. A little warning to both of you though; just be careful how you act together in public as you know how some people are."`);
  scene.text('You reply. "Yes I fully agree especially around here. Hopefully if we stay together and move to St Petersburg folks there may be a little more open minded, however, that\'s for the future."');
  // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> continues. "Just one more thing, I wanted to thank you...
  scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} continues. "Just one more thing, I wanted to thank you for having walked my girl home from the disco and let you know that you are welcome to stay over if you both get back late while the two of you are together. After all even inside this block it's not always safe at night."`);
  if (qspFunc(s, 'homes_properties', 'is_current_home', 'parents_home')) {
    scene.actions([
      { label: 'Thank <<$npc_usedname[\'A191\']>> and say you may need to when you tell your parents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcouchchat.jpg');
    // TODO-QSP: dynamic text: "Thank you <<$npc_usedname['A191']>>, that's very kind of you and I may need to ...
    scene.text(`"Thank you ${((s as any).npc_usedname ?? 0)?.['A191']}, that's very kind of you and I may need to take you up on your offer when I tell my parents about the two of us as I guess that the reaction won't be good and I'm going to have to do that soon or they're likely to find out anyway and that'd be worse."`);
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> gives you a hug. "Well <<$pcs_nickname>> I can only ho...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} gives you a hug. "Well ${((s as any).pcs_nickname ?? 0)} I can only hope that goes better than you are imagining."`);
    scene.text('"Yeah, so do I but I very much doubt it will." You shrug and then take a sip of your tea.');
    // TODO-QSP: dynamic text: You spend the next few minutes chatting about general stuff before you get up an...
    scene.text(`You spend the next few minutes chatting about general stuff before you get up and say goodbye to ${((s as any).npc_usedname ?? 0)?.['A191']}. Natasha then takes you by the hand and leads you to her room.`);
    qspCall(s, 'kit_din', 'dritea');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date2_cleanup'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell <<$npc_usedname[\'A191\']>> you\'ve moved out from your parents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcouchchat.jpg');
    // TODO-QSP: dynamic text: "Thank you <<$npc_usedname['A191']>>, that's very kind of you. Also I guess I sh...
    scene.text(`"Thank you ${((s as any).npc_usedname ?? 0)?.['A191']}, that's very kind of you. Also I guess I should tell you that I no longer live at home.`);
    // TODO-QSP: dynamic text: Both Natasha and <<$npc_usedname['A191']>> look at you in astonishment but don't...
    scene.text(`Both Natasha and ${((s as any).npc_usedname ?? 0)?.['A191']} look at you in astonishment but don't say anything so you continue. I'm sorry to say that things just got so bad for me at home and I simply felt I had to leave as I couldn't take much more of it." You give a long sad sigh.`);
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> looks thoughtful and after a moment replies. "It sound...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} looks thoughtful and after a moment replies. "It sounds as though you are a bit sad about your situation with your parents so maybe if you speak to them it may open the door to a reconciliation."`);
    scene.text('"I guess. I\'ll have to think about that and maybe I\'ll try at some point as I miss them but don\'t want to just go back and be unhappy again."');
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> nods then gives you a hug. "I'm sorry to hear about yo...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} nods then gives you a hug. "I'm sorry to hear about your troubles and that decision lies with you to do as you think best and I wish you well with it, however, I hope you don't take offence but while I'm happy for you to spend the odd night here I'd rather Natasha didn't stay over with you, at least for now."`);
    // TODO-QSP: dynamic text: You nod. "That's fine <<$npc_usedname['A191']>>, I completely understand."
    scene.text(`You nod. "That's fine ${((s as any).npc_usedname ?? 0)?.['A191']}, I completely understand."`);
    scene.text('You look over at Natasha and quietly say "sorry" to which she responds by giving you a hug.');
    // TODO-QSP: dynamic text: With the chat over you say goodbye to <<$npc_usedname['A191']>> as Natasha takes...
    scene.text(`With the chat over you say goodbye to ${((s as any).npc_usedname ?? 0)?.['A191']} as Natasha takes you by the hand and leads you to her room.`);
    qspCall(s, 'kit_din', 'dritea');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['natbel_friend', 'city_date2_cleanup'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCityDate2Cleanup(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['natbelapt', 'natroom'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterIsabellaEnters(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images\\locations\\pavlovsk\\resident\\apartment\\natbelapt/natmomserious.jpg');
  // TODO-QSP: dynamic text: On hearing the door open you look up and see <<$npc_usedname['A191']>> enter. Yo...
  scene.text(`On hearing the door open you look up and see ${((s as any).npc_usedname ?? 0)?.['A191']} enter. You smile at her and greet her. "Hello ${((s as any).npc_usedname ?? 0)?.['A191']}, are you okay only you look very serious?"`);
  scene.text('She smiles at you fleetingly. "Yes but that\'s only thanks to you two."');
  scene.text('You look a little confused and she continues. "Well you both got me home the other night when I embarrassed myself; I can\'t remember much after having a huge argument with my date; safe to say I won\'t be seeing him again. Anyway I just wanted to apologise and thank you for helping Natasha. I don\'t know how she\'d have managed without help."');
  scene.text('"Oh… Look, don\'t worry about it. It\'s just one of those things I guess and I\'m sure that Natasha and I will need a friend to help us sometimes."');
  scene.text('She looks sad. "Yes well I\'m the parent and so I\'m supposed to set a good example. I won\'t go into it but I do need to reduce my drinking especially when things get on top of me; it\'s not the answer to dealing with life\'s problems."');
  scene.text('Unsure of how to respond you simply smile at her.');
  scene.text('"Anyway I\'m sorry for what happened and very grateful to you two. I\'ll leave you alone now." With that she turns and leaves.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Natasha is concerned', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['Isabella'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    scene.text('As she leaves Natasha also thanks you again for your help and gives you a hug.');
    scene.text('She confides in you. "I\'m getting a bit worried about my mother. She\'s never got as bad as the other night but I have noticed that she\'s been drinking more."');
    scene.text('Unsure of what to do or say you give her a comforting hug and a supportive kiss.');
    // TODO-QSP: dynamic text: She hugs you back. "Thank you <<$pcs_nickname>> for being there when I needed yo...
    scene.text(`She hugs you back. "Thank you ${((s as any).pcs_nickname ?? 0)} for being there when I needed you."`);
    scene.text('You respond. "Look Natasha, I guess all you can do is be a good daughter and help her out as you have been doing around the house and such to make her life a little easier. There isn\'t much else I can think of at the moment."');
    scene.text('Natasha thanks you again and continues. "Yeah I guess you\'re right. I\'ll just have to do my best and see how it goes. Anyway enough of that."');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEndOfGschool(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'We need a chat about the future', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['end_of_gschool_chat'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha18.jpg');
    scene.text('While chatting you notice Natasha suddenly looks quite sertious so you raise a questioning eyebrow and wait for her to start.');
    // TODO-QSP: dynamic text: She clears her throat and begins. "<<$pcs_nickname>>, I need to ask you what you...
    scene.text(`She clears her throat and begins. "${((s as any).pcs_nickname ?? 0)}, I need to ask you what you will do after school. As you know I'm going to go to university."`);
    scene.text('You aren\'t sure where this is going but as the time to make a final decision is fast approaching you decide to tell her your plans.');
    scene.actions([
      { label: 'I\'m going to university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    scene.text('"I\'m going to try university. After all my grades are okay, thanks in no small part to your help, especuially with that pesky homework." You say with a smile.');
    // TODO-QSP: dynamic text: Natasha breaks into a grin. "Oh <<$pcs_nickname>> that's wonderful and I'm sure ...
    scene.text(`Natasha breaks into a grin. "Oh ${((s as any).pcs_nickname ?? 0)} that's wonderful and I'm sure we can help and support each other there and make sure we pass our courses. That should be a great benefit for us in our future careers."`);
    scene.text('"Hey, aren\'t you getting a little ahead of yourself here; we haven\'t even started university yet and you\'ve got us passing with flying colours?! Anyway, why did you ask?"');
    scene.text('"Well, I just wanted to make sure as I was concerned that if I was at university and you weren\'t that our relationship couldn\'t really continue as we\'d have to focus on different tings so I got up the courage to ask you to set my mind at ease."');
    scene.text('You grin at her. "You do realise that I\'ll be looking for your help at university don\'t you?"');
    scene.text('She nods. "Yeah and I like helping you. Anyway, you\'ve also helped me with my school work."');
    scene.actions([
      { label: 'What do you mean?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('"She\'s one of the brightest kids in the school so you\'re unsure what she\'s getting at so you ask. "What do you mean? Okay I\'ve helped a bit buying you some stuff but not in relation to your studies."');
    scene.text('She smile at you happily. "Well in addition to that just having a good friend has helped, let alone a girlfriend who I love spending time with. You\'ve just made me much happier in general and with that there\'s less to worry about."');
    scene.text('"So not with my intellectual abilities then?" You tease.');
    scene.text('She looks very happy. "Oh shut up and stop teasing!');
    scene.text('With that she takes hold of your face and gives you a long lingering kiss which stops further teasing.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'I\'m going to go to work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    scene.text('You sigh as you know your answer won\'t be what she wants to hear. "I\'m going to go to work as I don\'t think I\'m cut out to go onto university."');
    scene.text('At this Natasha looks very upset.');
    scene.text('You try to comfort her. "Look Natasha it\'s not the end of the world. Let\'s just see how it goes."');
    // TODO-QSP: dynamic text: A little surprisingly she shakes her head. "No <<$pcs_nickname>>. I've thought a...
    scene.text(`A little surprisingly she shakes her head. "No ${((s as any).pcs_nickname ?? 0)}. I've thought about this long and hard and if I go to university and you don't I simply don't think it'll work out as I'd need to concentrarte on my studies and you'll need to do likewise with your career."`);
    scene.actions([
      { label: 'Break up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'natbel_friend', 'breakup', 14, 'uni');
    qspCall(s, 'npc_relationship', 'set', 'A16', 50);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
    scene.text('By now she\'s crying with her head in her hands but she maintains her resolve before she continue.');
    // TODO-QSP: dynamic text: "I respect your decision <<$pcs_nickname>> and wish you well. I've had a great t...
    scene.text(`"I respect your decision ${((s as any).pcs_nickname ?? 0)} and wish you well. I've had a great time with you and this period of being your girlfriend has been one of the happiest for me but we need to call it a day on our relationship. I simply need to give 100% to my university education and I can't see it would work if you aren't at university too. I'm so sorry…"`);
    scene.text('You\'re unsure of what to do for the best but feel it would only make it worse if you tried to persuade her to change her mind.');
    scene.text('So with a long sigh and after a final look at her you get up and leave without responding.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBirthdayInvitation(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Natasha gives you an invitation [+$func(\'money\', \'get_cost_string\', 1000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
      // TODO-QSP: dynamic text: While looking at some magazines with Natasha she asks you, "So <<$pcs_nickname>>...
      scene.text(`While looking at some magazines with Natasha she asks you, "So ${((s as any).pcs_nickname ?? 0)}, my birthday is coming up shortly and I wondered if you'd like to join my mother and I for a meal at Del Parco the Saturday after? I know it's not much but I'd love it if you could join us."`);
      scene.text('"Oh I didn\'t know, probably should have asked you."');
      scene.text('"Don\'t worry. I know it\'s not much but it\'s my mother\'s treat so will you come?"');
      scene.actions([
        { label: 'Accept (you\'ll give  [+$func(\'money\', \'string_price\', 1000) + \'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['bday_invite'] = 1;
    qspCall(s, 'money', 'pay', 1000);
    qspCall(s, 'time', 'to_daystart', ((s as any).year ?? 0), 7, 6);
    // TODO-QSP: gs 'time', 'to_date', dateVars['daystart']
    ((s as any).NatbelQW ?? {})['bday_day'] = ((s as any).dateVars ?? {})?.['daystart'] + ((13 - ((s as any).dateVars ?? {})?.['week']) % 7);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    scene.text('"Yes, of course Natasha, I\'d love to come and thanks for the invitation. What time do you want me to arrive?"');
    scene.text('"If you get to Del Parco about 7PM that\'d be great as the table is booked for then."');
    scene.text('"Okay Natasha I\'ll look forward to it."');
    // TODO-QSP: dynamic text: A beaming Natasha looks at you. "Anyway <<$pcs_nickname>> when is yours? I hope ...
    scene.text(`A beaming Natasha looks at you. "Anyway ${((s as any).pcs_nickname ?? 0)} when is yours? I hope I haven't missed it?"`);
    scene.text('With a smile you tell her your birthday.');
    if (((s as any).month ?? 0) > ((s as any).birthmonth ?? 0)  ||  ((s as any).month ?? 0) === ((s as any).birthmonth ?? 0)  &&  ((s as any).day ?? 0) > ((s as any).birthday ?? 0)) {
      // TODO-QSP: dynamic text: "Oh I'm sorry <<$pcs_nickname>> I should probably have asked you earlier."
      scene.text(`"Oh I'm sorry ${((s as any).pcs_nickname ?? 0)} I should probably have asked you earlier."`);
    } else {
      scene.text('"So shall we do something for yours too? That\'d be lovely!"');
      scene.text('You reply, "Thanks Natasha but I really have no clue if my family will do anything for mine so best we leave it for this year."');
      // TODO-QSP: dynamic text: Natasha nods. "Oh! Okay <<$pcs_nickname>>, let me know if you change your mind."
      scene.text(`Natasha nods. "Oh! Okay ${((s as any).pcs_nickname ?? 0)}, let me know if you change your mind."`);
    }
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
        { label: 'Decline (you\'ll give  [+$func(\'money\', \'string_price\', 1000) + \'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['bday_invite'] = (-1);
    qspCall(s, 'money', 'pay', 1000);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha8.jpg');
    scene.text('You sigh and let her down gently. "I\'m really sorry Natasha but I can\'t make it but thank you for the invitation."');
    // TODO-QSP: dynamic text: Natasha looks a little sad but gives you a brief hug anyway. "Not to worry <<$pc...
    scene.text(`Natasha looks a little sad but gives you a brief hug anyway. "Not to worry ${((s as any).pcs_nickname ?? 0)} I know it's a bit short notice."`);
    scene.text('You decide to comfort her and reply "I\'m really sorry Natasha, look we\'ll have other trips out. I know it won\'t be your birthday but I\'m sure we\'ll have fun anyway."');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBdayDelParco(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Look for Natasha and Isabella', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/friends/delparco2.jpg');
    // TODO-QSP: dynamic text: You arrive at Del Parco and look for Natasha and <<$npc_usedname['A191']>>. Spot...
    scene.text(`You arrive at Del Parco and look for Natasha and ${((s as any).npc_usedname ?? 0)?.['A191']}. Spotting them at a table you head over and join them.`);
    // TODO-QSP: dynamic text: As you arrive they greet you and <<$npc_usedname['A191']>> leaves the two of you...
    scene.text(`As you arrive they greet you and ${((s as any).npc_usedname ?? 0)?.['A191']} leaves the two of you alone for a while as she excuses herself and heads off to the ladies.`);
    scene.text('You give Natasha a friendly kiss and wish her a happy birthday. "Well happy birthday <i>girlfriend</i>. Apologies as I haven\'t got you a present yet. I was thinking of some perfume but I\'d rather you were with me so you could choose what you wanted as I wouldn\'t want to get the wrong one."');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>> I wouldn't mind and anyway I'm sure I'd like whatever you ...
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)} I wouldn't mind and anyway I'm sure I'd like whatever you chose." Natasha response smiling. "In any event you don't have to get me anything, you've bought me plenty of nice clothes and I'm very grategul."`);
    scene.actions([
      { label: '<<$npc_usedname[\'A191\']>> returns', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\pavlovsk\\resident\\apartment\\natbelapt/natmomserious.jpg');
    // TODO-QSP: dynamic text: You both look up as you see <<$npc_usedname['A191']>> returning to the table.
    scene.text(`You both look up as you see ${((s as any).npc_usedname ?? 0)?.['A191']} returning to the table.`);
    scene.text('She smiles at Natasha and hands her a present. "Happy birthday darling. I\'m sorry it\'s not much but I hope you like it."');
    scene.text('"I\'m sure I will mom and thank you."');
    // TODO-QSP: dynamic text: <<$npc_usedname['A191']>> gives you a wink as she looks at her daughter opening ...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A191']} gives you a wink as she looks at her daughter opening her present.`);
    scene.text('"Oh wow! Thank you mother that\'s just the makeup I was looking at in the magazine but how did you…" Then she realises and looks at you."');
    scene.text('With a broad grin you nod and tell her. "Well you\'ve been going on about this makeup since forever and we didn\'t really know what to get so your mother and I got this for you as a joint present. I\'m glad you like it."');
    scene.text('After a short pause and a short giggle you continue. "So now will you give my poor ears a rest about the makeup?"');
    // TODO-QSP: dynamic text: "No promises <<$pcs_nickname>>…" She replies grinning.
    scene.text(`"No promises ${((s as any).pcs_nickname ?? 0)}…" She replies grinning.`);
    scene.actions([
      { label: 'Have a nice meal', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'food', 'large_meal_stats');
    qspCall(s, 'drugs', 'alcohol', 'wine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha64.jpg');
    scene.text('Once Natasha has her present and cards the three of you sit down and enjoy a lovely meal and a glass of wine.');
    // TODO-QSP: dynamic text: As the meal draws to a close <<$npc_usedname['A191']>> turns to you and thanks y...
    scene.text(`As the meal draws to a close ${((s as any).npc_usedname ?? 0)?.['A191']} turns to you and thanks you for the tip regarding the birthday present and for your contribution.`);
    scene.text('Before the waiter comes over with the bill you offer to pay towards the meal.');
    // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>> but that won't be necessary. Anyway, you've already...
    scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)} but that won't be necessary. Anyway, you've already done so much for my daughter and I can't thank you enough so this is a small thank you from me.`);
    scene.text('After a short pause she continues. "Anyway cheers girls and happy birthday darling."');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    ((s as any).NatbelQW ?? {})['bday_invite'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_night.jpg');
    scene.text('Following the meal the three of you leave Del Parco and make your way back to Natasha\'s apartment.');
    scene.text('Along the way you chat about whatever comes to mind and Natasha is still saying that she loved her present and the meal.');
    // TODO-QSP: dynamic text: As you approach the apartment <<$npc_usedname['A191']>> turns to you. "Please st...
    scene.text(`As you approach the apartment ${((s as any).npc_usedname ?? 0)?.['A191']} turns to you. "Please stay over tonight if you'd like ${((s as any).pcs_nickname ?? 0)}. I'm sure you don't want to be out on your own and I'm 100% sure Natasha would like you to stay over."`);
    // TODO-QSP: dynamic text: "Thank you <<$npc_usedname['A191']>> and yes that'd be lovely. Also thanks for a...
    scene.text(`"Thank you ${((s as any).npc_usedname ?? 0)?.['A191']} and yes that'd be lovely. Also thanks for accepting our erm… <i>girlfriend</i> relationship and not making it awkward for us."`);
    // TODO-QSP: dynamic text: "Well I have to say it was a bit of a shock but when I had a chance to think abo...
    scene.text(`"Well I have to say it was a bit of a shock but when I had a chance to think abouit it and I simply realised how happy my girl has been recently so clearly that wasn't just a coincidence and as I just want to see her happy it was pretty much a no-brainer." ${((s as any).npc_usedname ?? 0)?.['A191']} smiles and gives you a quick hug.`);
    scene.text('As you arrive back at Natasha\'s she leans close to you and whispers. "I\'ve got a present for you too but it hasn\'t arrived yet so when it does I thought I\'d take you out once we\'re at university as that\'s not long away now."');
    qspCall(s, 'core_library', 'setloc', 'natbelapt', 'natroom');
    qspCall(s, 'natbel_kissinggames', 'set_main_sex_act');
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

function enterBirthdayMissed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).NatbelQW ?? {})['bday_invite'] = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  scene.text('As you enter her room you see Natasha looks a bit sad but before you can say anything she asks "Is everything is okay as you missed my birthday meal?"');
  scene.text('"Yes, I\'m fine Natasha, thanks for asking and I\'m really sorry that I couldn\'t come; I got delayed and by the time I got home it was just too late."');
  // TODO-QSP: dynamic text: "That's alright <<$pcs_nickname>>, I'm just glad you're okay. Don't worry as we'...
  scene.text(`"That's alright ${((s as any).pcs_nickname ?? 0)}, I'm just glad you're okay. Don't worry as we'll have plenty of occasions when we can go out together."`);
  scene.text('"Anyway, I hope you had a good time."');
  // TODO-QSP: dynamic text: "I did <<$pcs_nickname>> and thank you for your present; it's just what I wanted...
  scene.text(`"I did ${((s as any).pcs_nickname ?? 0)} and thank you for your present; it's just what I wanted."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
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
    case 'city_date1_aftersport':
      enterCityDate1Aftersport(s, scene);
      break;
    case 'city_date1_mall':
      enterCityDate1Mall(s, scene);
      break;
    case 'city_date1_jobshub':
      enterCityDate1Jobshub(s, scene);
      break;
    case 'city_date1_jobs_model2':
      enterCityDate1JobsModel2(s, scene);
      break;
    case 'city_date1_fashionblog':
      enterCityDate1Fashionblog(s, scene);
      break;
    case 'city_date1_cleanup':
      enterCityDate1Cleanup(s, scene);
      break;
    case 'city_date2_start':
      enterCityDate2Start(s, scene);
      break;
    case 'city_date2_morningsex':
      enterCityDate2Morningsex(s, scene);
      break;
    case 'city_date2_wardrobe_hub':
      enterCityDate2WardrobeHub(s, scene);
      break;
    case 'city_date2_palace':
      enterCityDate2Palace(s, scene);
      break;
    case 'city_date2_after_rel_talk':
      enterCityDate2AfterRelTalk(s, scene);
      break;
    case 'city_date2_cleanup':
      enterCityDate2Cleanup(s, scene);
      break;
    case 'isabella_enters':
      enterIsabellaEnters(s, scene);
      break;
    case 'end_of_gschool':
      enterEndOfGschool(s, scene);
      break;
    case 'birthday_invitation':
      enterBirthdayInvitation(s, scene);
      break;
    case 'bday_del_parco':
      enterBdayDelParco(s, scene);
      break;
    case 'birthday_missed':
      enterBirthdayMissed(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
