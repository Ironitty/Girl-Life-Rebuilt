import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLesSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract06.jpg');
  if (((s as any).AnnaQW ?? 0)?.['dress'] === 1) {
    scene.text('Leaving your clothes in the room you follow Anna next door.');
  } else {
    scene.text('You follow Anna to the next hotel room.');
  }
  scene.text('In the room is a woman wearing a skimpy dress with a collar and leash. Anna picks up the handle of the leash and makes the woman kneel down, Anna stands tall and looks at you full of confidence. You sense that the show is started.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> meet slut jeanine, slut meet <<$pcs_nickname>>. Presentation ...
  scene.text(`"${((s as any).pcs_nickname ?? 0)} meet slut jeanine, slut meet ${((s as any).pcs_nickname ?? 0)}. Presentation done, Shall we begin? Good."`);
  scene.text('You barely have the time to realize you are now in the middle of a BDSM session.');
  scene.text('"What do we have here? A happy hooker? And tell me slut, why are you smiling? Did your last client pay you that well? Or are you just happy to see your Mistress? You may answer." There is strength in the way Anna delivers these words.');
  scene.text('"Mistress! this slut is happy to see The Mistress!" The woman replies enthusiastically.');
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract07.jpg');
    scene.text('Anna turns the woman around and exposes her breasts to the woman who\'s smile broadens. Anna quite suddenly becomes deadly serious.');
    scene.text('"Although understandable, I did not give you permission to smile." She practically shouts at the woman.');
    // TODO-QSP: dynamic text: "You are embarrassing me in front of my friend and that is not right. You deserv...
    scene.text(`"You are embarrassing me in front of my friend and that is not right. You deserve a small punishment, don't you agree ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08a.jpg');
    scene.text('You were told not to interact in the session but Anna directly asked you a question so you have to say something.');
    scene.text('You decide to play along and not upset the session so you meekly agree.');
    scene.text('Anna spends some time verbally abusing the woman and making a show of her dominant position. The woman is sheepish and completely compliant, you might think she could not enjoy such treatment but also remember how happy she was to see Anna.');
    scene.text('Finally Anna tells the woman it is time for her punishment and shows her an outfit to change into, she also picks up an odd looking gag and throws it on the floor next to the woman. "Wear this!"');
    // TODO-QSP: dynamic text: The woman immediately strips and starts to put on the outfit which is nothing mo...
    scene.text(`The woman immediately strips and starts to put on the outfit which is nothing more than a corset, gloves boots. She can't fasten the corset up on her own but struggles trying to, Anna looks to you and smiles, ${((s as any).pcs_nickname ?? 0)} will help you with your corset seeing as you are too usless to do it yourself."`);
    scene.text('You walk over to the woman and fasten up the corset, it fits perfectly and you guess it to be hers understanding more about how the session is organised.');
    scene.text('While you were busy Anna had also changed into her second outfit she is holding a rubber tube and bulb pump. which she attaches to the woman\'s gag.');
    scene.text('"This is an inflatable cock gag, as I pump this bulb the rubber cock inside this slut\'s month gets bigger and harder. That makes this dirty sluts pussy get wet."');
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'TMI', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08a.mp4');
    scene.text('Anna pumps and pumps and pumps. The woman\'s mouth must now be completely full and she is drooling and even gagging on the rubber cock. Despite the clear discomfort a few moans escape her mouth, while tears roll down her cheeks.');
    scene.text('Still she seems to accept her fate. You are stunned at this, you knew there was sex and sexual games but this is mostly pain and humiliation yet the warmth between your own legs reminds you is very sexual too.');
    scene.text('Eventually Anna relents. "43 pumps, a new record slut. Have you spent the last month practicing at a glory hole?" Still gagged and her mouth overly full there is no way for the woman to give an answer.');
    scene.text('Anna deflates the gag and removes it, she points to an odd looking chair that looks like its belongs to a dentist and tells the woman to get on it.');
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'les_sex2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Suggest a spanking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08b.jpg');
    scene.text('You were told not to interact in the session but Anna directly asked you a question so you have to say something.');
    scene.text('"A splendid idea Sweetie." Anna seems happy with this suggestion.');
    scene.text('Anna spends some time verbally abusing the woman and making a show of her dominant position. The woman is sheepish and completely compliant, you might think she could not enjoy such treatment but also remember how happy she was to see Anna.');
    scene.text('Finally Anna tells the woman it is time for her punishment and shows her an outfit to change into. "Wear this!"');
    // TODO-QSP: dynamic text: The woman immediately strips and starts to put on the outfit which is nothing mo...
    scene.text(`The woman immediately strips and starts to put on the outfit which is nothing more than a corset, gloves boots. She can't fasten the corset up on her own but struggles trying to, Anna looks to you and smiles, ${((s as any).pcs_nickname ?? 0)} will help you with your corset seeing as you are too usless to do it yourself."`);
    scene.text('You walk over to the woman and fasten up the corset, it fits perfectly and you guess it to be hers understanding more about how the session is organised.');
    scene.text('While you were busy Anna had also changed into her second outfit she drags the poor soul on to the bed, bending her over to give you a full view and motions for you to sit on a chair facing them.');
    // TODO-QSP: dynamic text: "This is old school punishment <<$pcs_nickname>>. I start easy and then a bit ha...
    scene.text(`"This is old school punishment ${((s as any).pcs_nickname ?? 0)}. I start easy and then a bit hard until soon I will be slapping her very hard. These kinds of slut need to be disciplined or they will become disobedient." Anna says this while slapping the women's butt noticeable harder each stroke while the woman counts each strike.`);
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08b.mp4');
    scene.text('After a few strokes at full strength Anna stops to pick up a belt. "Of course your hand can only hit so hard Sweetie. Sometimes you need to make a point."');
    scene.text('With this she starts to hit the woman with the belt quickly turning her butt bright red. You are shocked how hard and how much she hit this woman for such a minor transgression.');
    scene.text('"Don\'t worry Sweetie, the butt is naturally cushioned and can take a much more serve beating before it would welt or cut. You have to be much more careful with a cane or whip though."');
    scene.text('She turns back to the woman, "I hope you learned your lesson Slut now get on that chair before I have to use a whip on you."');
    scene.text('The woman quickly gets on the sex chair that has been set up in the room, it\'s clear Anna has a lot of equipment and props. You start to wonder about how much it must cost to enjoy this lifestyle.');
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'les_sex2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Suggest a stronger punishment', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08c.jpg');
    scene.text('You were told not to interact in the session but Anna directly asked you a question so you have to say something.');
    scene.text('"Oh Sweetie you are naughty, but I agree this slut needs a good caning so that she might learn her place"');
    scene.text('Anna spends some time verbally abusing the woman and making a show of her dominant position. The woman is sheepish and completely compliant, you might think she could not enjoy such treatment but also remember how happy she was to see Anna.');
    scene.text('Finally Anna tells the woman it is time for her punishment and shows her an outfit to change into. "Wear this!"');
    // TODO-QSP: dynamic text: The woman immediately strips and starts to put on the outfit which is nothing mo...
    scene.text(`The woman immediately strips and starts to put on the outfit which is nothing more than a corset, gloves boots. She can't fasten the corset up on her own but struggles trying to, Anna looks to you and smiles, ${((s as any).pcs_nickname ?? 0)} will help you with your corset seeing as you are too usless to do it yourself."`);
    scene.text('You walk over to the woman and fasten up the corset, it fits perfectly and you guess it to be hers understanding more about how the session is organised.');
    scene.text('While you were busy Anna had also changed into her second outfit she drags the poor soul on to the bed, bending her over to give you a full view and motions for you to sit on a chair facing them.');
    // TODO-QSP: dynamic text: "This is just like the punishments you might get at school <<$pcs_nickname>>. Ex...
    scene.text(`"This is just like the punishments you might get at school ${((s as any).pcs_nickname ?? 0)}. Except I start easy and then a bit hard until soon I will be hitting her very hard. These kinds of slut need to be disciplined or they will become disobedient." Anna says this while caning the women's butt noticeable harder each stroke while the woman counts each strike.`);
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract08c.mp4');
    scene.text('Anna continues to cane the woman as visible welts start to form. you are shocked how hard and how much she hit this woman for such a minor transgression.');
    scene.text('"Don\'t worry Sweetie, the butt is naturally cushioned and can take a much more serve beating before it would welt too much or cut."');
    scene.text('She turns back to the woman, "I hope you learned your lesson Slut now get on that chair before I have to use a whip on you."');
    scene.text('The woman quickly gets on the sex chair that has been set up in the room, it\'s clear Anna has a lot of equipment and props. You start to wonder about how much it must cost to enjoy this lifestyle.');
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'les_sex2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLesSex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09.jpg');
  scene.text('Anna binds the woman to the chair by tying her arms behind her and legs together using some ropes, after that she wedges a vibrator on her pussy and turns it on.');
  scene.text('"I know Sweetie, the floor will be a mess but if this slut doesn\'t cum her brains out she\'ll spend all day tomorrow thinking about sex when she should be serving her Mistress. We have to think about our reputations here, it would not look good if we returned her all horny."');
  scene.text('"Unless we just edged her all night until her brain melts." Anna turns of the vibrator as she says this.');
  scene.text('"No, please Mistress, please. It has been so long, I need it. I\'ve been a good slut for you."');
  scene.text('"Well you Mistress did tell me your denial had been longer than normal, but that is because you have not been behaving."');
  scene.text('The woman looks at Anna like a kitten begging for attention, Anna takes her time thinking about it (or is she just acting?) before she pushed the vibrator back and turns it back on again.');
  scene.text('She leaves it going while she stands next to the regular hotel chair you are sat in and explains how the woman and her Mistress play with chastity and denial. Her only releases come as a treat when she is brought to visit Anna. After quite a lot of chatting and a lot of moaning the woman is a wreck having cum so many times you stopped even noticing.');
  // TODO-QSP: dynamic text: "A choice for you <<$pcs_nickname>>, she's got one more orgasm in her before she...
  scene.text(`"A choice for you ${((s as any).pcs_nickname ?? 0)}, she's got one more orgasm in her before she completely loses her mind. You can do it, or she can." she says as she holds up the vibrator still buzzing and whirring in her hand.`);
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: '"Pass me the baton"', handler: (st: GameState) => {
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09aa.mp4');
    scene.text('You walk over to Anna and take the vibrator off her. She unties the woman\'s hands and goes and sits in the chair you were just sitting in leaving you to do as you please while still being observed. You think she might be testing or assessing you so you make a show of each action.');
    scene.text('You move the vibrator around testing for more sensitive spots and as she starts to pant heavily you lift it. The woman now free to move her hands just rests them on her body and lets you do whatever you like.');
    scene.text('You edge her once more and Anna rolls her eyes at you making it clear you might be milking the situation a bit much. So you use the sensitive spots you remember from your probing and bring the woman to a final squirting orgasm.');
    // TODO-QSP: dynamic text: "Very good Sweetie now ' + iif(AnnaQW['dress'] = 1, 'go next door and get dresse...
    scene.text('"Very good Sweetie now \' + iif(AnnaQW[\'dress\'] = 1, \'go next door and get dressed\', \'leave us\') + \', I have to get this slut ready for her Mistress and clean things up in here. I will see you next time and we can talk more then.');
    // TODO-QSP: dynamic text: She ushers you out of the room and you ' + iif(AnnaQW['dress'] = 1, 'get dressed...
    scene.text('She ushers you out of the room and you \' + iif(AnnaQW[\'dress\'] = 1, \'get dressed, then\', \') + \' return to the hotel lobby.');
    qspCall(s, 'arousal', 'vaginal_vibe_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    { label: 'Let the woman do it herself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09ac.mp4');
    scene.text('Anna unties the woman and hands her the vibrator which she pressed against her pussy still craving another orgasm despite the clear fatigue you see in her body.');
    scene.text('Anna walks over to stand next to the chair you are seated on and you ask her, "How can she still crave more?"');
    scene.text('Anna laughs, "When you don\'t get any release for weeks or even months at a time you take every opportunity you can when you are given permission."');
    scene.text('You now understand to some extent how orgasm denial can be used to control another person and can see the intense pleasure someone being subjected to it can feel as the woman squirts to one last orgasm.');
    scene.text('By now she is so exhausted that Anna has to rush over and take the vibrator off her before she drops it on the floor.');
    scene.text('"I have to get this slut ready for her Mistress and clean things up in here. I will see you next time and we can talk more then." Anna says');
    // TODO-QSP: dynamic text: She ushers you out of the room and you ' + iif(AnnaQW['dress'] = 1, 'get dressed...
    scene.text('She ushers you out of the room and you \' + iif(AnnaQW[\'dress\'] = 1, \'get dressed, then\', \') + \' return to the hotel lobby.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlaveM(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem0.jpg');
  // TODO-QSP: dynamic text: You look good <<$pcs_nickname>>"
  scene.text(`You look good ${((s as any).pcs_nickname ?? 0)}"`);
  scene.text('Oh thanks. Do you think pink makes me look dominant though?"');
  scene.text('"Absolutely not, another color would make you look more confident but honestly it doesn\'t matter. You could be dress as a fairy and still your subs have to obey, no matter what."');
  scene.text('"Got it, but these are a bit transparent and very small."');
  scene.text('"I know, I wanted something to look at too." She laughs. You\'re not sure if she is serious or if it relates to the session.');
  scene.text('An older man walks in, he looks down at all times and quickly strips off his expensive suit and sits in front of Anna in just his shirt and boxer shorts.');
  // TODO-QSP: dynamic text: "Before the presentation <<$pcs_nickname>>." She continues ignoring the man comp...
  scene.text(`"Before the presentation ${((s as any).pcs_nickname ?? 0)}." She continues ignoring the man completely, "Is there anything you would like to ask? Something you may want to improve or a last minute tip?"`);
  scene.actions([
    { label: '"Control"', handler: (st: GameState) => {
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem1a.jpg');
    // TODO-QSP: dynamic text: Anna stretches her leg towards the man, and puts her heel on his crotch. "This i...
    scene.text(`Anna stretches her leg towards the man, and puts her heel on his crotch. "This is worm, worm She is ${((s as any).pcs_nickname ?? 0)}, a new Mistress". She smiles at you.`);
    scene.text('"Control you say? Ok. First of all do not think you have the power of life and death of the sub. That\'s totally forbidden. As you can imagine there would be no benefit to you there, that means that the basic needs of the sub must be satisfied: food, water, sleep, etc."');
    scene.text('"Second, no one is psychic. With time a sub can easily understand the Dominant\'s intentions, but orders have to be explicitly stated before they can be executed. This can be in advance, like worm here knowing that he must not make eye contact."');
    scene.text('"Third… erm, maybe you can answer this: Who do you think has the most control into a BDSM relationship?" Anna is clearly expecting an answer from you.');
    scene.actions([
      { label: 'The Dominant', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem1a.jpg');
    scene.text('"You could not be much farther from the truth."');
    scene.text('"Are you kidding me?" You exclaim, confused by her reply.');
    scene.text('"Absolutely not, think about it. Who can stop the session when he/she wants?"');
    scene.text('"True but the sub cannot decide what you do or how you do it."');
    scene.text('"Of course not." Her heel pushes harder against the sub\'s groin and he winces. "However, they still preserve that most important decision: To continue or not. This can be used even to break a contract. This will ends all the benefits for both parties and that relationship would be so broken that nothing could restore it but they have that power."');
    scene.text('You had not considered this but she is right that power even if it is never used must be recognized.');
    scene.text('"OK Sweetie, just remember: As a Dom you should never overstep the limits and then your subs will have no desire stop, that way the relationship will remain strong. Shall we start?"');
    scene.actions([
      { label: 'Get started', goto: ['hotel_anna_sex', 'slaveM1'] },
    ]);
  } },
      { label: 'The sub', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem1a.jpg');
    // TODO-QSP: dynamic text: "Exactly <<$pcs_nickname>>. She smiles.
    scene.text(`"Exactly ${((s as any).pcs_nickname ?? 0)}. She smiles.`);
    scene.text('"subs have say as to what the session will be, but they have the most powerful decision: to continue or not."');
    scene.text('"This can even apply to a contract. Of course this will end all the benefits for both parties and that relationship would be completely destroyed."');
    scene.text('That is why a Dom must respect their sub\'s needs and limits, they must also take the time and effort to understand what their sub needs. That way the sub will never have the desire to use their power, that is dominance."');
    scene.text('You feel like you now understand control in a BDSM relationship.');
    scene.text('"Shall we begin?" Anna nods towards the sub on the chair in front of her.');
    scene.actions([
      { label: 'Get started', goto: ['hotel_anna_sex', 'slaveM1'] },
    ]);
  } },
    ]);
  } },
    { label: '"Obedience"', handler: (st: GameState) => {
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem1b.jpg');
    // TODO-QSP: dynamic text: Anna stretches her leg towards the man, and puts her heel on his crotch. "This i...
    scene.text(`Anna stretches her leg towards the man, and puts her heel on his crotch. "This is worm, worm She is ${((s as any).pcs_nickname ?? 0)}, a new Mistress". She smiles at you.`);
    scene.text('"Obedience you say?" She looks toward the man lifting her foot away from him. "Stand up Worm." He quickly stands up. "Lean over the chair now." He does as she says.');
    scene.text('Anna smiles at you as she stands up and places her knee on his back forcing him lower across the chair. "Well there\'s a lot to cover on that subject Sweetie. We\'ll just cover some basics for now."');
    scene.text('"Firstly there is discipline, a basic element of BDSM. Discipline, in turn is split into two areas: to take something, for example restriction; or to give something, for example a punishment."');
    scene.text('"Discipline is useless on its own, it must be balanced with a reward system, this can be simple things like affection or sexual interaction. Our worm here enjoys being dominated so for him the punishment is also the reward. Isn\'t it worm? You may speak to answer."');
    scene.text('"Yes, Mistress. Thank you, Mistress." The man replies without hesitation.');
    scene.text('Anna smiles again, "You see Sweetie, obedience."');
    scene.text('"So obedience to the Dominant from the sub is built up with both rewards and punishments?" You ask to confirm.');
    scene.text('"Well, mostly. There re exceptions, sometimes a sub will set rules such as their agreed limits which the Dom must follow and sometimes obedience will be offered without a need to reinforce it."');
    scene.text('"Being able to read the situation and understand what is needed and when is something every Dom must learn. Look for these things during the session, let\'s begin." You nod');
    scene.actions([
      { label: 'Get started', goto: ['hotel_anna_sex', 'slaveM1'] },
    ]);
  } },
    { label: '"Punishment"', handler: (st: GameState) => {
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem1c.jpg');
    scene.text('"Oh Sweetie that is a good thing to understand. Punishment is not something you do just because you enjoy it (although you might well do so) it is a tool"');
    scene.text('She instructs the man to lie across the chair face down and climbs on his back From there she pulls down his pants and boxers to expose half his butt. "Worm here would let me whip his ass all day and never complain."');
    scene.text('"However, if there is no reason for me doing so neither of us would enjoy the session as much as we could. You are fortunate today because this worm was meant to be here last week."');
    scene.text('She gently hits his ass with her cane, "He knows missing a session is not acceptable and requires a lot of punishment."');
    scene.text('"This punishment is how we reinforce behaviour, when he leaves today beaten and humiliated he will know that missing a session is not acceptable and his behaviour will improve."');
    scene.text('"So today I will not just punish him but also teach you how to do so, you will make mistakes, hit him a bit too hard, hit him somewhere more sensitive, leave worse marks."');
    scene.text('You start to say something to deny you would do this but she motions to you to be quiet, "I am not criticising, we all learn this way and worm here has earned every welt and bruise."');
    scene.text('It is only now that you notice the man\'s breathing release how turned on he is, you remember your lessons. Anticipation can be as powerful as the act itself. You smile at Anna and tell her, "I understand."');
    scene.actions([
      { label: 'Get started', goto: ['hotel_anna_sex', 'slaveM1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlaveM1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem2.jpg');
  scene.text('To start the session Anna tells the man to strip and ties his hands together, securing them to his waist with a rope.');
  scene.text('With him facing away from both of you she starts to whip his back as you watch on.');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem3b.jpg');
    scene.text('"When you swing your arm there is not much power, you have to use your wrist to flick just before you hit him if you want it to hurt" The man winces as she strike him much harder."');
    scene.text('"You have to moderate though, some gentle strikes to maintain the punishment with an occasional much harder strike to reinforce."');
    scene.text('"Now your turn"');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Prepare', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem3a.jpg');
    scene.text('Anna shows you where to land your strikes on the man and checks you grip on the whip to make sure you are ready.');
    scene.actions([
      { label: 'Whip it!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem3d.jpg');
    scene.text('You strike the man with the whip. It feels good but there is resistance, you are worrying about hurting him.');
    scene.text('"Good, now flick your wrist and hit him hard. Just the once."');
    scene.text('You follow the instruction and the man winces from the blow, you are about to ask him if he\'s OK but Anna holds her hand up telling you to stop.');
    scene.text('"Very good, I think he\'d like you to hit him harder but but its still early. Now tell him how worthless he is and how much he deserves this."');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem3c.jpg');
    scene.text('You were not prepared for this and caught off guard but you want to impress Anna so you stand right next to the man and do your best.');
    scene.text('"Are you enjoying yourself, Worm? This is what you get for missing a session with your Mistress. Next time I\'ll use this lash on your balls, maybe then you\'ll remember to keep your appointments."');
    scene.text('"Good, time to move on to the next punishment"');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'slaveM2'] },
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

function enterSlaveM2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem4b.jpg');
  scene.text('Anna unites the man only to tie his hands behind his back. She helps him to lie down on the floor face down and promptly climbs on to his back!');
  scene.text('"This punishment is simple, you only need to stand on his back like this. It is a little difficult to keep balance so you should lean on the wall as you do it."');
  scene.text('Anna is not even touching the wall and looks completely stable but such skill comes with experience.');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Prepare', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem4.jpg');
    scene.text('Anna gets off the man\'s back and you place one foot up gauging the support.');
    scene.text('Anna holds your arm for support and spends most of the time staring at your small pinks panties. You stop yourself from reflexively calling her a pervert realising just how stupid that would sound considering the situation.');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stand on him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem4a.jpg');
    scene.text('You manage to get both feet on him and with Anna\'s help turn around so you can lean on the wall.');
    scene.text('It feels weird as every slight movement beneath you threatens to send you sprawling to the floor but also powerful as this man acts as a literal doormat.');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem4c.jpg');
    // TODO-QSP: dynamic text: "Very good <<$pcs_nickname>>, now the fleshier bits near his butt and middle of ...
    scene.text(`"Very good ${((s as any).pcs_nickname ?? 0)}, now the fleshier bits near his butt and middle of his back either side of his spine are less sensitive."`);
    scene.text('"These bits by his shoulders will hurt a bit more." She says pushing her heel into his shoulder. "And the back of his kidneys down here can hurt lot so be careful there."');
    scene.text('"That\'s pain covered, now for a bit of humiliation." Anna says as she helps you back on to the ground.');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Humiliate him', goto: ['hotel_anna_sex', 'slaveM3'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlaveM3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem5b.jpg');
  scene.text('Anna unties the man and walks over to a couple of chairs, "Take a seat seat Sweetie, you\'ve done well."');
  scene.text('"As for you Worm, clean my boots!"');
  scene.text('The man crawls over to her and starts to lick her boots clean holding them steady in his hands. It is clear he has been trained on how to do this.');
  scene.text('Anna chats with you about current affairs and the weather. After a she is satisfied that her boots are clean she points at you.');
  // TODO-QSP: dynamic text: "Now clean Mistress <<$pcs_nickname>>'s."
  scene.text(`"Now clean Mistress ${((s as any).pcs_nickname ?? 0)}'s."`);
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Have your boots cleaned', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem5a.jpg');
    scene.text('The man crawls over and starts to clean your boots in the same manner.');
    scene.text('Anna continues chatting away about nothing important as if you\'d met up with her in a cafe and were talking over a cup of tea.');
    scene.text('After a while the man looks to Anna to signal he has finished, "I\'ve seen cleaner but it will do. The session is nearly finished stand up."');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem7.jpg');
    scene.text('The man stands as does Anna, "Come her Sweetie." She points to the floor just behind the man and you walk where she is pointing.');
    // TODO-QSP: dynamic text: "Bend Worm" The man bends forwards legs slightly apart. "OK <<$pcs_nickname>> gr...
    scene.text(`"Bend Worm" The man bends forwards legs slightly apart. "OK ${((s as any).pcs_nickname ?? 0)} grab his balls in your hand."`);
    scene.text('You are shocked and hesitate. "Not too tight but let him know you are fully in control."');
    scene.text('You reach under his butt and grab hold of his balls as instructed, the man is clearly uncomfortable.');
    // TODO-QSP: dynamic text: "Mistress <<$pcs_nickname>> owns them as much as I do. Do you understand Worm?" ...
    scene.text(`"Mistress ${((s as any).pcs_nickname ?? 0)} owns them as much as I do. Do you understand Worm?" The man nods obediently.`);
    scene.text('"You can let go now Sweetie, worm kneel by my desk."');
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'One last thing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/male/slavem6.jpg');
    scene.text('The man kneels in front of the desk facing it.');
    scene.text('"This here is a contract worm and I signed. It sets his limits, they are split into hard (will not do) and soft (does not want to do but will if forced) and the various conditions that define our time together."');
    scene.text('"Not every client has one but for my regulars this is essential to keep things safe and enjoyable." She picks up her whip and hits the man surprising him.');
    scene.text('He yelps and Anna smiles with real joy. "Oh that will need punishing. Next week I\'ll bring the nipple clamps."');
    scene.text('"OK Sveta, your lesson is over. Go change in the next room I have to finish up some things here." She quickly shoos you out obviously not wanting to share with you what happens at the end of her session with "Worm"');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change and leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlaveF(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef4b.jpg');
  scene.text('As you enter the room the most obvious thing is a woman in a black latex mask tied by her hands to a rope hanging from the ceiling next to the bed.');
  scene.text('She\'s wearing purple latex panties and a small yellow latex bra. Anna leads you to the bed and tells you to lie down.');
  qspCall(s, 'arousal', 'erotic', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lie on the bed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef4a.jpg');
    // TODO-QSP: dynamic text: Anna lies next to you nearest the tied up woman, looking at er she says: "Nice b...
    scene.text(`Anna lies next to you nearest the tied up woman, looking at er she says: "Nice butt, almost a shame to whip it. Let's admire it for a minute while we relax and have a smoke, what do you think ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('You know this is performance and not to go off script, besides Anna\'s hand is on your thigh ready to guide you if you do. "That sounds like a great idea."');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Light up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef0.jpg');
    scene.text('Anna carefully lights a long cigarette and handing one to you helps ou to light your own from her\'s.');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef1c.jpg');
    scene.text('You both draw a few drags from the cigarettes to get them going and Anna starts to explain: "Slut here has been a bad girl."');
    scene.text('"She\'s not even one of mine but a friend has been having trouble controlling her and has a bit of a soft spot for this pet. Although she can\'t even see us currently eventually she will be able to smell us smoking her favourite cigarettes."');
    scene.text('"Let me show you a couple of details while I get us a whip"');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Details?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef2.jpg');
    scene.text('Anna stands up and points to the slave\'s hands, "These double wide wrist cuffs have two strong hooks suitable for long term restraining."');
    scene.text('She then points to the slave\'s feet, "These shoes however are ultra high heeled and very painful to wear for any duration unless your slave is well trained in such things."');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef1a.jpg');
    scene.text('"Is this slave trained in such things?" You ask Anna as she lies back on the bed.');
    scene.text('"God no Sweetie, she\'s awful." Anna says matter of factly as you puff on the cigarette worried it might go out.');
    scene.text('"Here, hit her with this paddle." Anna says handing it to you.');
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hit "Slut"', goto: ['hotel_anna_sex', 'slaveF1'] },
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

function enterSlaveF1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef3a.jpg');
  scene.text('You reach over Anna and smack the woman on her butt with the paddle. She\'s clearly surprised and wobbles around nearly falling over her heels.');
  scene.text('"I told you she was badly trained Sweetie. Hit her some more, she has to learn somewhere. Not too hard though we are training her balance not pain resistance. That\'s for another day."');
  scene.text('You continue to strike her and each time she seems slightly less likely to topple.');
  scene.text('"Good, but that is the easy test. Now it\'s my turn"');
  qspCall(s, 'arousal', 'BDSM_give', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Anna\'s turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef3c.jpg');
    scene.text('Anna is much crueller with her approach, she hits erratically so that the woman can\'t predict and brace herself. The timing is odd and she varies how hard she strikes.');
    scene.text('Every so often she just rubs the lashes of the whip on the woman\'s butt sensually, this really affects the woman\'s balance.');
    scene.text('Finally a particularly sharp strike has the woman topple and she is left held up just by her arms yelping in pain.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yikes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef5.jpg');
    scene.text('Anna quickly gets to her feet and quickly unties the woman\'s wrist cuffs helping her to her knees on the floor.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> why don't you sit on that chair?" She suggests as she removes...
    scene.text(`"${((s as any).pcs_nickname ?? 0)} why don't you sit on that chair?" She suggests as she removes the outer mask revealing a second mask that covers all but the woman's mouth and eyes.`);
    scene.text('As you sit down Anna holds her foot out to the woman: "Take my shoes off slut!"');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef6b.jpg');
    scene.text('With her ballet shoes removed Anna rubs her foot in the woman\'s face.');
    scene.text('"Sweetie I never explained soft limits to you, did I?"');
    scene.text('"No", You reply');
    scene.text('"These are things a submissive doesn\'t like and would rather not do but unlike hard limits can be forced in certain situations."');
    scene.text('"Take Slut here for example, she doesn\'t like feet or women. At least not sexually." The woman is trying to avoid the foot in her face throughout this explanation.');
    scene.text('"Sweetie, could you hold this brat\'s head still for me?"');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hold her head', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef6c.jpg');
    scene.text('With the cigarette in your mouth you grab the woman\'s head and Anna forces both feet on her face.');
    scene.text('"So your friend is a man wanted you to punish her because you are a woman?" You probe.');
    // TODO-QSP: dynamic text: "Very good <<$pcs_nickname>>, that's part of it. I'm also very good at this" She...
    scene.text(`"Very good ${((s as any).pcs_nickname ?? 0)}, that's part of it. I'm also very good at this" She laughs as she says this. "Now suck my toe bitch!" She barks.`);
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sucking', goto: ['hotel_anna_sex', 'slaveF2'] },
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

function enterSlaveF2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef9a.jpg');
  scene.text('You let go off the woman\'s head but keep your hand on her shoulder to remind her of your presence and she willingly holds Anna\'s foot while first kissing her toe.');
  scene.text('"That is not sucking." Anna stresses. The woman slowly proceeds to suck Anna\'s big toe.');
  scene.text('"Pathetic!" Anna removes her toe abruptly. "Open your mouth, no wider!"');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Foot!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef7a.jpg');
    scene.text('With the woman\'s mouth open as wide as she can Anna pushes her foot inside. "When I say suck my toes, I mean all of them. Now suck or I\'ll be wiping your tiny tits next!');
    scene.text('The woman both scared and humiliated sucks on Anna\'s foot like a baby with a bottle.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/female/slavef7.jpg');
    scene.text('Once satisfied Anna pulls her foot back and holds it in front of the woman who caresses it without instruction. Clearly this is part of ongoing training.');
    scene.text('"She\'s finally starting to get it Sweetie." There\'s not a lot more I have to teach you that isn\'t hands on, other than boring technical stuff you can do in your own time."');
    scene.text('"This isn\'t hands on?"');
    scene.text('She adjusts her position to show your her glistening pussy and says: "Oh Sweetie, I mean one on one between us. Next time <i>you</i> will be the submissive. After that we\'ll see how you are as a Domme."');
    scene.text('You have plenty to think and worry about as you leave and get dressed back in your regular clothing. Anna said there was some more she had to do with "Slut", you cough and are reminded of those odd cigarettes. Hopefully you won\'t see them again.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnnaPathChoice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorevnaBDSM_session_librarian ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start1a.jpg');
    scene.text('<center><b> "Well sweetie, I will force you on nothing… but today you will be able to have only the submissive role in the session… Your clear disposition, made me think you\'ll need more time to come to the best solution for yourself. To be honest there will be no such a difference with the original session we planned…" </b></center>');
    scene.actions([
      { label: 'WHAT? Are you tricking me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).IgorevnaBDSM_session_librarian = 2;
    (s as any).Anna_trust = 0;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start1b.jpg');
    scene.text('"Anna! How could you…"');
    scene.actions([
      { label: 'leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'ok', goto: ['hotel_anna', 'Anna_sub_session'] },
      { label: 'Sorry Anna, i\'m not ready for this…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).IgorevnaBDSM_session_librarian = 0;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0a.jpg');
    scene.text('<center><b> "Understandable. Well in that case we can only talk about how things are going in the world…" </b></center>');
    scene.actions([
      { label: 'Thanks Anna, see you…', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg');
    scene.text('"Anna…"');
    if (((s as any).IgorevnaBDSM_session_librarian ?? 0) === 3) {
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg');
      // TODO-QSP: 'You spoke about an hour with Anna, but you made no progress with her. At the end she lead you to th...
      scene.actions([
        { label: 'I understand, and your frienship has a great value for me. I\'m ready to start if you agree.', goto: ['hotel_anna', 'Anna_sub_hurt'] },
        { label: 'Sorry Anna, i\'m not ready for this.', goto: ['pav_hotel', ''] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0n.jpg');
      scene.text('<center><b> "Choices choices…!" </b></center>');
      scene.actions([
        { label: 'Ehmm… Anna… go easy on me…', goto: ['hotel_anna', 'Anna_sub_session'] },
        { label: 'Oh… you will love it…', goto: ['hotel_anna_sex', 'Anna_dom_session'] },
        { label: 'Mmmmm… mmmm… i\'m not sure… what do you suggest me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0na.jpg');
    scene.text(`<center><b> "Hehehe…${((s as any).pcs_nickname ?? 0)}, it's not the we are on the cafe'…" </b></center>`);
    scene.actions([
      { label: 'Well… how could the flog be "soft"?…', goto: ['hotel_anna', 'Anna_sub_session'] },
      { label: 'Well… you really have a great bum…', goto: ['hotel_anna_sex', 'Anna_dom_session'] },
    ]);
  } },
        { label: 'Sorry Anna, i\'m not ready for this…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0a.jpg');
    scene.text('<center><b> "Well in that case we can only talk about how things are going in the world…" </b></center>');
    scene.actions([
      { label: 'Thanks Anna, see you…', goto: ['pav_hotel', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait Anna…(penitent)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg');
    scene.text(' "…You… you\'ve done nothing wrong. It\'s my fault, I trust you but doing a session was a bit of a shock for me…"');
    scene.actions([
      { label: 'I understand, and your frienship has a great value for me. I\'m ready to start if you agree.', goto: ['hotel_anna', 'Anna_sub_hurt'] },
      { label: 'Sorry Anna, i\'m not ready for this.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).IgorevnaBDSM_session_librarian = 3;
    (s as any).Anna_trust = 0;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg');
    // TODO-QSP: 'You don''t have anything more to add, or you don''t want to; it doesn''t matter. Anna says: ' + $fu...
    scene.actions([
      { label: 'You dont have much to say…', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: '…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).IgorevnaBDSM_session_librarian = 3;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg');
    // TODO-QSP: dynamic text: You have nothing to say, and that could have hurt Anna more than before; probabl...
    scene.text(`You have nothing to say, and that could have hurt Anna more than before; probably it wasn't your intention, or probably that's the reason… it doesn't matter. Anna fills the empty silence this time… it could be the last. ' + $func('wrap', 'accent', ' "…I never had an intention toward you ${((s as any).pcs_firstname ?? 0)} either good or bad. I looked at you as a person with a thirst for knowledge who could have some benefit from whatever kind of relationship you were looking for… a simple word of comfort, or even a scold if necessary… That's why it's useless for us to continue our session: if there's no trust in each other, why should we continue seeing each other? I'm an open person ${((s as any).pcs_firstname ?? 0)}, and it's not usual for me to close the door to someone else; nonetheless, due to our arguments and my need to know if I can trust you, we shouldn't continue further until we both agree. There's only one way possible to know if we both agree to that: a session between me and you, with the Dom role precluded for you for obvious reasons. " ') + ' There's really not much to add…`);
    scene.actions([
      { label: '…', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'les_sex':
      enterLesSex(s, scene);
      break;
    case 'les_sex2':
      enterLesSex2(s, scene);
      break;
    case 'slaveM':
      enterSlaveM(s, scene);
      break;
    case 'slaveM1':
      enterSlaveM1(s, scene);
      break;
    case 'slaveM2':
      enterSlaveM2(s, scene);
      break;
    case 'slaveM3':
      enterSlaveM3(s, scene);
      break;
    case 'slaveF':
      enterSlaveF(s, scene);
      break;
    case 'slaveF1':
      enterSlaveF1(s, scene);
      break;
    case 'slaveF2':
      enterSlaveF2(s, scene);
      break;
    case 'Anna_path_choice':
      enterAnnaPathChoice(s, scene);
      break;
    default:
      enterLesSex(s, scene);
      break;
  }
}

export const hotel_anna_sex: LocationDef = {
  name: 'hotel_anna_sex',
  title: ' "Well sweetie, I will force you on nothing… but today you will be able to have only the submissive role in the session… Your clear disposition, made me think you\'ll need more time to come to the best solution for yourself. To be honest there will be no such a difference with the original session we planned…" ',
  region: 'other',
  locationType: 'event',
  description: ['Leaving your clothes in the room you follow Anna next door.'],
  enter: enter,
};
