import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < 760) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates'] < 10) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_nightclub_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_mall_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_library_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_cafe_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).natbelQW ?? 0)?.['uni_dates_beach_1'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 21) {
    if (((s as any).natbelQW ?? 0)?.['uni_dates_sonia_event'] === 0) {
      scene.actions([
        { label: 'Search for Natasha to chat with her about the fashion blog', handler: (st: GameState) => {
    if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['uni_dates_sonia_event'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    scene.text('You have an idea about using the fashion blog you know Natasha works on so you try to call her but get no answer.');
    scene.text('Having got no reply you decide to take a quick look in the Coffee Hole, however, she isn\'t there either.');
    scene.text('Finally you decide to try her dorm room on the off chance so head there.');
    scene.actions([
      { label: 'Enter Natasha\'s room', goto: ['natbel_uni_dates_2', 'enter_natasha_room'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).natbelQW ?? 0)?.['designs_chat_done'] === 1  &&  ((s as any).natbelQW ?? 0)?.['designs_aphrodite_done'] === 0) {
    scene.actions([
      { label: 'Ask Aphrodite Photography about Natasha\'s designs', goto: ['natbel_uni_dates_2', 'visit_aphrodite'] },
    ]);
  }
  if (((s as any).natbelQW ?? 0)?.['designs_aphrodite_done'] === 1  &&  ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] === 0) {
    if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16) {
      scene.actions([
        { label: 'Take Natasha\'s designs to the tailor', goto: ['natbel_uni_dates_2', 'visit_tailor'] },
      ]);
    }
  }
  if (((s as any).natbelQW ?? 0)?.['tailor_visit_day'] > 0  &&  ((s as any).natbelQW ?? 0)?.['tailor_collected'] === 0) {
    if (((s as any).daystart ?? 0) >= ((s as any).natbelQW ?? 0)?.['tailor_visit_day'] + 30) {
      if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16) {
        scene.actions([
          { label: 'Collect the clothes from the tailor [+$func(\'money\', \'get_cost_string\', 10000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_uni_dates_2', 'collect_tailor'] }]);
    }
  } },
        ]);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEnterNatashaRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).soniaQW ?? 0)?.['encourage'] === 0  ||  ((s as any).soniaQW ?? 0)?.['help'] >= ((s as any).soniaQW ?? 0)?.['encourage']) {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat_sonia1.jpg');
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 60) {
      scene.text('Just before you reach Natasha\'s room, you see Sonia, leaving Natasha\'s room.');
      // TODO-QSP: dynamic text: She gives you a friendly smile and greets you: "Hello <<$pcs_nickname>>, how are...
      scene.text(`She gives you a friendly smile and greets you: "Hello ${((s as any).pcs_nickname ?? 0)}, how are things with you?"`);
      scene.text('"Good, thanks. I hope you\'ve settled in well and enjoying your course." You carefully avoid any reference to her final year at school, which will have many painful memories.');
      scene.text('"Yeah it\'s great and I\'m learning lots, not to mention there is a lot of cute boys here. I\'m just so glad to be here and away from home. Are you off to see Natasha?"');
      scene.text('You nod to her. "Yes, I wanted to talk to her about the fashion blog I know she works on."');
      scene.text('Sonia nods. "Okay then, I\'ll leave you two lovebirds to it!" She says with a wink and heads out using the stairs.');
      scene.text('"Bye Sonia, see you around." You give her a friendly smile before entering Natasha\'s room.');
      // TODO-QSP: dynamic text: As you enter Natasha looks up, sees you and smiles. "Hi <<$pcs_nickname>>. I did...
      scene.text(`As you enter Natasha looks up, sees you and smiles. "Hi ${((s as any).pcs_nickname ?? 0)}. I didn't expect to see you today. Did you see Sonia? She's just left. We were discussing the fashion blog and our course."`);
      scene.text('"Yes, I bumped into her outside. Anyway if you\'re busy I\'ll leave you to it and catch up with you in the Coffee Hole soon."');
      // TODO-QSP: dynamic text: "Okay, erm... Actually <<$pcs_nickname>>, I have something I need to discuss wit...
      scene.text(`"Okay, erm... Actually ${((s as any).pcs_nickname ?? 0)}, I have something I need to discuss with you, so I guess now is as good a time as any."`);
      scene.actions([
        { label: 'Discuss your relationship status', goto: ['natbel_uni_dates_2', 'discuss_relationship_status'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
        scene.text('Just before you reach Natasha\'s room, you see Sonia, leaving Natasha\'s room.');
        scene.text('You give her a smile and friendly wave, she returns a forced fake smile to you as she walks past you.');
        // TODO-QSP: dynamic text: As you enter Natasha looks up, sees you and smiles. "Hi <<$pcs_nickname>>. I did...
        scene.text(`As you enter Natasha looks up, sees you and smiles. "Hi ${((s as any).pcs_nickname ?? 0)}. I didn't expect to see you today. Did you see Sonia? She's just left, I wish you two got along better. We were discussing the fashion blog and our course."`);
        scene.text('"Yes, I bumped into her outside. Anyway if you\'re busy I\'ll leave you to it and catch up with you in the Coffee Hole soon."');
        // TODO-QSP: dynamic text: "Okay, erm... Actually <<$pcs_nickname>>, I have something I need to discuss wit...
        scene.text(`"Okay, erm... Actually ${((s as any).pcs_nickname ?? 0)}, I have something I need to discuss with you, so I guess now is as good a time as any."`);
        scene.actions([
          { label: 'Discuss your relationship status', goto: ['natbel_uni_dates_2', 'discuss_relationship_status'] },
        ]);
      } else {
        scene.text('Just before you reach Natasha\'s room, you see Sonia, leaving Natasha\'s room.');
        // TODO-QSP: dynamic text: She gives you a friendly smile and greets you: "Hello <<$pcs_nickname>>, how are...
        scene.text(`She gives you a friendly smile and greets you: "Hello ${((s as any).pcs_nickname ?? 0)}, how are things with you?"`);
        scene.text('"Good, thanks. I hope you\'ve settled in well and enjoying your course." You carefully avoid any reference to her final year at school, which will have many painful memories.');
        scene.text('"Yeah it\'s great and I\'m learning lots, not to mention there is a lot of cute boys here. I\'m just so glad to be here and away from home. Are you off to see Natasha?"');
        scene.text('You nod to her. "Yes, I wanted to talk to her about the fashion blog I know she works on."');
        scene.text('Sonia nods. "Okay then, I\'ll leave you two lovebirds to it!" She says with a wink and heads out using the stairs.');
        scene.text('"Bye Sonia, see you around." You give her a friendly smile before entering Natasha\'s room.');
        // TODO-QSP: dynamic text: As you enter Natasha looks up, sees you and smiles. "Hi <<$pcs_nickname>>. I did...
        scene.text(`As you enter Natasha looks up, sees you and smiles. "Hi ${((s as any).pcs_nickname ?? 0)}. I didn't expect to see you today. Did you see Sonia? She's just left. We were discussing the fashion blog and our course."`);
        scene.text('"Yes, I bumped into her outside. Anyway if you\'re busy I\'ll leave you to it and catch up with you in the Coffee Hole soon."');
        // TODO-QSP: dynamic text: "Okay, erm... Actually <<$pcs_nickname>>, I have something I need to discuss wit...
        scene.text(`"Okay, erm... Actually ${((s as any).pcs_nickname ?? 0)}, I have something I need to discuss with you, so I guess now is as good a time as any."`);
        scene.actions([
          { label: 'Discuss your relationship status', goto: ['natbel_uni_dates_2', 'discuss_relationship_status'] },
        ]);
      }
    }
  } else {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat_sonia2.jpg');
    scene.text('As you are about to enter Natasha\'s room you hear voices inside. <i>Good</i>, you think, <i>I\'ve found her at last</i>.');
    scene.text('As you open the door slightly, you see Sonia sitting on Natasha\'s bed, chatting with her.');
    scene.text('You hear Sonia telling Natasha how you acted at the disco during her fall.');
    scene.text('Natasha gets off the bed, then takes a step backwards looking flustered. She pulls away and you hear her tell Sonia, "I\'m sorry for what happened to you, Sonia. I... I just don\'t know what I can say..." She trails off.');
    scene.text('Sonia snorts. "Surely you\'re not going to tell me you\'re falling for <i>HER</i>?"');
    scene.text('Natasha takes a further step back and nods. "Yeah, I guess I am, but for what it\'s worth I\'m sorry, Sonia."');
    scene.text('At this point you blurt out. "Sonia, what are you doing here?"');
    scene.text('You notice Sonia jumps and looks at you in surprise, that quickly turns into a hard look of pure hate.');
    scene.text('"Oh, it\'s the fucking bitch! I might have guessed." Giving you a look of pure hatred as she gets up.');
    scene.text('She looks at Natasha. "Later, Natasha... Bear in mind what I said about this bitch! Don\'t trust her or she\'ll happily ruin your life for laughs, like she did mine!"');
    scene.actions([
      { label: 'Sonia leaves', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat_sonia3.jpg');
    scene.text('With that, Sonia stands, gives Natasha a big smile and leaves making sure she barges into you on the way out.');
    scene.text('You don\'t react or say anything as you are not proud of how you acted at the disco when she got involved with the gopniks.');
    scene.text('You turn to Natasha and ask "What was all that about?"');
    scene.text('A very flustered Natasha takes a deep breath before replying. "Well she told me how you behaved towards her at the disco... I didn\'t know what to do or say so just kept my distance."');
    scene.text('It\'s clear she has something else on her mind so you give her time and don\'t say anything.');
    // TODO-QSP: dynamic text: She pauses and takes another deep breath then continues. "That wasn't nice, <<$p...
    scene.text(`She pauses and takes another deep breath then continues. "That wasn't nice, ${((s as any).pcs_nickname ?? 0)}! I think at the very least you should go and apologise to her. It won't undo what happened but it might help her to know you are sorry."`);
    scene.text('She\'s said just what you were thinking, so you agree. "Yes, I think you\'re right. That\'s the least I can do and if she gives me some verbals I\'ll just have to accept it. I\'ll do so the next time I see her."');
    // TODO-QSP: dynamic text: Natasha looks relieved. "Thank you <<$pcs_nickname>>." After a pause she continu...
    scene.text(`Natasha looks relieved. "Thank you ${((s as any).pcs_nickname ?? 0)}." After a pause she continues. "Also, I want to discuss something with you..."`);
    scene.actions([
      { label: 'Discuss your relationship status', goto: ['natbel_uni_dates_2', 'discuss_relationship_status'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDiscussRelationshipStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha15.jpg');
  scene.text('All thoughts about the Fashion Blog now long forgotten you look at Natasha and see what\'s on her mind.');
  scene.text('Although she brought up the subject of setting a relationship status you can see Natasha looks worried as you wait for her to start.');
  // TODO-QSP: dynamic text: Natasha brings her hand to her forehead and looks a little sad and thoughtful as...
  scene.text(`Natasha brings her hand to her forehead and looks a little sad and thoughtful as she says "${((s as any).pcs_nickname ?? 0)}, I wanted to just clarify our relationship with you. I think we need to do that going forward and now seems like a good time to do so."`);
  scene.text('You don\'t say anything and allow her to continue as it\'s clear she hasn\'t finished.');
  scene.text('"The time I\'ve spent with you made me very happy, and I love being your girlfriend, but I just feel we should confirm if you want us to have other relationships as well or if you want us to be an <i>official</i> item."');
  scene.text('"Sorry, Natasha, first off what do you want? What exactly are you saying? Do you want a committed or open relationship or do you want to break up? As you brought the subject up I need to know what <i>YOU</i> really want, not what you think I want."');
  scene.text('She gathers herself then almost in a whisper replies "I want you as my girlfriend and only you."');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Confirm sole girlfriend relationship', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('You break into a grin. "There, that wasn\'t so hard was it?!"');
    scene.text('For a moment she simply sits by your side and looks completely lost then shrugs. "I guess that depends on your answer."');
    scene.text('You slowly lean in towards her and gently bring her face near yours.');
    scene.text('When your face is inches from hers you feel her hands shaking as she takes hold of your face and slowly brings your mouth to hers as she gives you a long passionate kiss.');
    scene.text('After what seems ages but was only a few seconds you slowly break the kiss and answer her "Okay <i>girlfriend</i>, sealed with a kiss. So now you\'ve got your answer no more second guessing what I want please! Let\'s just enjoy our time together."');
    // TODO-QSP: dynamic text: Natasha breaks out into a huge grin. "You've just made my day <<$pcs_nickname>>;...
    scene.text(`Natasha breaks out into a huge grin. "You've just made my day ${((s as any).pcs_nickname ?? 0)}; I simply couldn't be happier right now!"`);
    scene.actions([
      { label: 'Continue spending time with Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat35.jpg');
    scene.text('Natasha takes a seat, gives you her best smile. "I\'ve been meaning to discuss that with you in private for a while now but I\'ve been unsure how to approach it."');
    scene.text('You look at her a little confused wondering exactly what else she has on her mind.');
    scene.text('After a few moments she continues. "Well we needed to have the earlier discussion before this and I really didn\'t know how to approach that."');
    scene.text('You simply nod your acknowledgement.');
    scene.text('"Well... Erm... Now that we\'re <i>official</i> I thought we should mark it in some way. Initially I was going to get us a ring each but that wasn\'t appropriate given the culture here.... So..." She trails off then gets up and fetches a little package and hands one to you and keeps the other on her lap.');
    scene.text('You open the box and see a pretty necklace with a padlock in the shape of a heart.');
    scene.text('You lean over and give her another kiss. "So what\'s in the other package?" You ask.');
    scene.actions([
      { label: 'Natasha\'s necklace', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat36.jpg');
    scene.text('She opens it and shows you. It\'s very similar to the one she just gave you.');
    scene.text('"This one is for me. They are to symbolise that we are girlfriends."');
    scene.text('You are aware that Natasha is somewhat naive so you ask. "Is there any deeper meaning in these Natasha?"');
    scene.text('She explains. "Well sort of, I used the internet and they are supposed to a symbol of protection, luck and longevity for the wearer."');
    scene.text('After a few seconds she continues. "I thought that\'s a pretty good description of how I feel towards you so... Erm... What do you think? Do you like yours? Shall we wear them?"');
    scene.text('"Yes, of course Natasha but I guess I should have bought yours for you."');
    // TODO-QSP: dynamic text: She shakes her head. "No <<$pcs_nickname>>, let me buy them also as a bit of a "...
    scene.text(`She shakes her head. "No ${((s as any).pcs_nickname ?? 0)}, let me buy them also as a bit of a "thank you" for all you've done for me."`);
    scene.text('You ask. "So long as you\'re sure?" She nods to confirm so you let it drop and just give her a hug.');
    scene.text('"OK <i>girlfriend</i> I guess I\'d better get going and leave you to your homework." With a parting kiss you exit her room.');
    scene.actions([
      { label: 'Leave Natasha\'s room', handler: (st: GameState) => {
    if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['designs_unlock_day'] = ((s as any).daystart ?? 0);
  }, goto: ['uni_dorm', 'ninth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDesignsChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['designs_chat_done'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat1.jpg');
  scene.text('You spot Natasha sitting alone by the window and head over.');
  scene.text('After exchanging greetings and a brief chat you ask her how she\'s getting on with her design course. "So Natasha, you\'ve been at university a while now; how are you finding the classes?"');
  scene.text('She beams at you. "Yeah really great thanks. I feel like I\'m learning loads although it can be a little overwhelming at times."');
  scene.text('You nod in acknowledgement then continue. "Do you have a portfolio of your own designs that you like best yet?"');
  scene.text('She sighs. "Well I\'ve got numerous designs but it\'s all in a bit of a muddle. I really do need to spend some time sorting through them and putting the best ones into folders for the different types of clothes but I can\'t seem to find the time."');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Show me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    scene.text('"Okay Natasha, I guess it\'s tricky with all the university work and finding some time to relax. Anyway, I\'d love to see some of them. Are they in your room?"');
    scene.text('"Yeah, we can head up if you like. My roommate is away at the moment. I don\'t know why she bothered with a dorm room as she just appears randomly and uses it for a few days then she\'s off again. I think she spends most of her time with her boyfriend and stays with him."');
    scene.text('"Well, having the dorm room is probably a wise decision as it gives her the option plus a fallback if she splits up with the boyfriend. Anyway, enough about her; let\'s go."');
    scene.text('You get up and go to Natasha\'s dorm room, which is located on the floor below yours.');
    scene.actions([
      { label: 'Head up to Natasha\'s room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    scene.text('On arriving at her room she was correct and her roommate isn\'t there.');
    // TODO-QSP: dynamic text: Natasha starts rummaging around under her bed and takes out numerous loose piece...
    scene.text(`Natasha starts rummaging around under her bed and takes out numerous loose pieces of paper with various designs on them, then looks at you apologetically. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, they're in a bit of a mess. As I said I need to go through them then place the good ones into a folder and sort them by type."`);
    scene.text('You grin at her. "Yeah, I see what you mean!"');
    scene.text('Confused, you ask her. "How come? You\'re always super tidy."');
    scene.text('"Well it started off as just some idle drawings which I generally threw away. Then I started keeping a few of the better ones and with the pressure of our final year at school, helping my mother and now university I just couldn\'t seem to find the time."');
    scene.text('You give her an encouraging smile. "Well, I guess there\'s no time like the present!"');
    scene.text('She looks at you quizzically. "I don\'t have the folders..." She trails off looking a bit dejected.');
    scene.actions([
      { label: 'Get her some equipment [+$func(\'money\', \'get_cost_string\', 500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat28.jpg');
      scene.text('With a broad grin you tell her. "You know <i>girlfriend</i>, for someone as clever as you, you\'re totally disorganised when it comes to your main passion!"');
      // TODO-QSP: dynamic text: Natasha is embarrassed and looks downcast. "I know, I'm sorry <<$pcs_nickname>>....
      scene.text(`Natasha is embarrassed and looks downcast. "I know, I'm sorry ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('"Hey, don\'t apologise — it isn\'t a problem. Anyway I\'m taking you shopping now, so grab your coat."');
      scene.text('Natasha immediately perks up, grins and puts her coat on, then stands in front of you expectantly, having obviously misunderstood your intentions.');
      scene.text('"Yeah, well, not clothes shopping, silly! I\'m taking you to the local crafts shop to get you organised as there\'s no point in sorting through all these only to put them back into a big pile just to get messed up again."');
      // TODO-QSP: dynamic text: "Oh, okay <<$pcs_nickname>>, yes that's a good idea. There's a stationery and ar...
      scene.text(`"Oh, okay ${((s as any).pcs_nickname ?? 0)}, yes that's a good idea. There's a stationery and arts shop not far from here."`);
      scene.text('"Yep, I know as I looked into it just in case. That\'s where we\'re going, then it\'s back here to at least make a start on sorting through your designs."');
      scene.text('On arriving at the shop you both find suitable folders, which Natasha purchases.');
      scene.text('While she\'s paying for the items you find a top quality drawing set and decide to get it for her and go to the checkout to pay the 400 rubles.');
      scene.text('When paying the salesman tells you that it also comes with a special offer on a fashion design program using Adobe Illustrator which is massively reduced to 100 rubles if you buy both together.');
      scene.text('You thank the salesman and pay the 500 rubles, then join Natasha who is waiting by the door.');
      qspCall(s, 'money', 'pay', 500);
      scene.actions([
        { label: 'Return to Natasha\'s room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/uni_cafe.jpg');
    scene.text('On your way back Natasha takes you to the university café.');
    scene.text('"I think we\'ll need a coffee before we start."');
    scene.text('"Good thinking, Natasha. Yes please."');
    scene.text('She gets two coffees and you head up to her room while sipping them.');
    qspCall(s, 'beverage', 'coffee_stats');
    scene.actions([
      { label: 'Give Natasha the gift', goto: ['natbel_uni_dates_2', 'designs_dorm_gift'] },
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

function enterDesignsDormGift(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat29.jpg');
  scene.text('Once in her room she looks at your bag. "I didn\'t know you needed stationery too; what did you get?"');
  scene.text('You hand the bag over to her and, peering inside, she looks confused. "Have you decided to start drawing as a hobby or something?"');
  scene.text('"Nope. It\'s for you, silly! I noticed most of your pencils are pretty worn out and thought I\'d get you a good quality set by way of encouragement and support, as I know you\'re clearly passionate about it."');
  scene.text('She takes the set out of the bag. "Wow! These are really top quality! I... I..." She stops talking and you can see a tear in her eye.');
  scene.text('Confused, you ask. "What\'s the matter Natasha? I thought you\'d like them."');
  scene.text('Natasha turns to you and gives you a big kiss and hug. "Yeah I love them. They\'re much better than what I\'ve been using. Sorry for getting emotional — I know you\'ve bought me much more expensive things, but this... well, this is special. It\'s the first time someone has bought me anything for design or said anything encouraging other than my tutor. I think even my mother just humours me, thinking it\'s just a phase."');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Sort through her drawings', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat30.jpg');
    scene.text('"Okay Natasha, now that you\'re kitted out let\'s sort through what you\'ve got and pop the best ones into folders by type."');
    scene.text('Natasha nods her agreement. "No time like the present, I guess. That way I won\'t get distracted and it needs to be done."');
    scene.text('"So how do you want to do this? They are your drawings and you know way more about this than me."');
    scene.text('She decides to start by sorting them into type — casual, evening wear etc. — so you both take some of her drawings and put them into the relevant piles.');
    scene.text('"I guess we should remove all those that aren\'t going to be good enough for a portfolio and just end up with the few best ones. The rest can go into training folders as they might come in useful later for ideas and so on. Maybe you can look at them and see if you agree?" she asks.');
    scene.text('You agree and after about an hour you\'re finished. She has her best ones in a folder split by type and all the others in secondary folders.');
    scene.actions([
      { label: 'You get an idea', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
    scene.text('"Well Natasha, I think that some of these are great; in fact I\'m sure that they wouldn\'t look out of place at Fashionista and there\'s a couple that could even be at Mon Cheri."');
    scene.text('She looks dubious. "Well, I\'m not so sure..."');
    scene.text('"Umm... Let me borrow this folder for a moment. I just want to make a couple of copies in the library. I\'ll be back shortly."');
    scene.text('You take her portfolio folder down to the library and copy the drawings you particularly like and Natasha\'s favourites, then return to her room.');
    scene.text('On returning you inform Natasha of your plan. "I want to show these to Aphrodite Photography to get their opinion, if you\'re okay with that?"');
    // TODO-QSP: dynamic text: She's unsure. "I don't know <<$pcs_nickname>>; I'm really not sure if they're go...
    scene.text(`She's unsure. "I don't know ${((s as any).pcs_nickname ?? 0)}; I'm really not sure if they're good enough."`);
    scene.text('"Well if they\'re not, I\'m sure they\'ll tell me and no harm done. Anyway let\'s just see what happens. Just give me a few days."');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I don't mind, but it'll probably be a wasted trip."
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, I don't mind, but it'll probably be a wasted trip."`);
    scene.text('You give her a hug and a kiss and leave her room, telling her you\'ll catch up with her again soon in the Coffee Hole.');
    scene.actions([
      { label: 'Return to the corridor', goto: ['uni_dorm', 'ninth_floor'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVisitAphrodite(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/down.jpg');
  scene.text('You decide to fulfil your promise to Natasha and take her designs to Aphrodite Photography to get their opinion about their quality and ask if they\'d be interested in doing anything with them.');
  scene.text('You take the metro to the center and, on arriving, head into the agency and seek out the manager.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Discuss her designs with the manager', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
      scene.text('You approach the manager and introduce yourself, briefly telling him the purpose of your visit.');
    } else {
      // TODO-QSP: dynamic text: You approach the manager, who greets you. "Hello <<$pcs_nickname>>, how can I he...
      scene.text(`You approach the manager, who greets you. "Hello ${((s as any).pcs_nickname ?? 0)}, how can I help you today?" You return his greeting and briefly tell him the purpose of your visit.`);
    }
    scene.text('He asks if you have any of the designs with you so you show him the copies you took from Natasha\'s portfolio.');
    scene.text('Initially he starts flicking through them quickly, which doesn\'t look too promising, but after he\'s looked at a few he slows down and looks through them all again slowly.');
    scene.text('When he\'s looked at all of them he looks up at you. "Where did you get these?" he asks.');
    scene.text('"They belong to my friend; why do you ask?"');
    scene.text('"I just want to make sure they aren\'t stolen or subject to copyright."');
    scene.text('"No, she knows I was going to ask your opinion and see if you would be interested in doing anything with them."');
    scene.actions([
      { label: 'A second opinion', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: After taking another look he nods and tells you. "Okay <<$pcs_nickname>>, I'm go...
    scene.text(`After taking another look he nods and tells you. "Okay ${((s as any).pcs_nickname ?? 0)}, I'm going to get one of our photographers to take a look as he's much more qualified to give an opinion than me."`);
    scene.text('When the photographer arrives the manager explains you have come with some clothing designs which need a professional second opinion.');
    scene.text('The photographer also spends some time looking through the designs, then they ask you to leave the room so they can discuss your request.');
    scene.text('After a few minutes the manager opens the door and asks you to rejoin them.');
    scene.text('Once you\'ve entered the room he gives the designs back to you. "So what exactly are you asking of the agency?" he asks.');
    scene.text('You\'re a little unsure how to proceed as you are out of your depth. You take a few moments then reply. "To be honest I\'m not really sure. I mean, I like them but I\'m not a professional so I thought I\'d ask. My friend wants to become a fashion designer and is studying the course at university. I just got the idea that if you thought they were good you might want to do something with them."');
    scene.text('"Well we do fashion shoots but for established designers. We haven\'t done anything for someone who isn\'t known yet."');
    scene.text('"Alright, I understand and thank you for taking the time to look through them. I\'m sorry if I\'ve wasted your time."');
    // TODO-QSP: dynamic text: With that you stand and reach over to collect Natasha's drawings. Before you can...
    scene.text(`With that you stand and reach over to collect Natasha's drawings. Before you can pick them up the manager continues. "You haven't wasted our time ${((s as any).pcs_nickname ?? 0)}. I tell you what, let's go over the road and get a coffee and continue this discussion."`);
    scene.actions([
      { label: 'Local talent', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/burger.jpg');
    scene.text('You pick up Natasha\'s designs and the three of you go to the diner. The manager orders three coffees and you all sit at a table.');
    qspCall(s, 'beverage', 'coffee_stats');
    // TODO-QSP: dynamic text: Once you're seated the manager continues the previous discussion. "Look <<$pcs_n...
    scene.text(`Once you're seated the manager continues the previous discussion. "Look ${((s as any).pcs_nickname ?? 0)}, we both like the designs and we really like the possibility of promoting local talent. However, the problem is that your friend is unknown, so you'd need a promoter; otherwise we couldn't do the show as we wouldn't be in a position to pay the models without guaranteed advertising revenue from the show."`);
    scene.text('"Thank you again for your time. I guess I\'ll have to discuss what to do next with my friend and probably get some dresses made so you can see the finished product."');
    scene.text('He nods. "Yes, that\'s probably the best first step. Maybe just get a couple made. If you want, we can take a look and you can go from there, but you will need some sort of sponsor to fund the event."');
    scene.text('You finish your coffee and shake their hands before leaving.');
    scene.actions([
      { label: 'Phone Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat31.jpg');
    scene.text('Once you\'ve left the diner you phone Natasha with the news.');
    scene.text('"Hello Natasha, I\'ve got some news for you."');
    scene.text('You explain about the meeting with Aphrodite.');
    scene.text('She is thrilled with their reaction but you caution her. "Natasha, this is very early stages. I guess we need to select a few of the designs and get the outfits or dresses made and go from there. Maybe we could ask the agency to do some photos of us in the dresses."');
    scene.text('"That might be too expensive..." she replies.');
    scene.text('"Let\'s just see. I\'m just heading to the metro now so we can have a chat when I\'m back at the university."');
    scene.text('"Yeah, that sounds good; I\'m in the shared lounge. See you soon." She blows you a kiss down the phone and hangs up.');
    scene.actions([
      { label: 'Discuss with Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['designs_aphrodite_done'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat32.jpg');
    scene.text('You take the metro back and go to the lounge where you spot Natasha relaxing on a settee.');
    scene.text('After greeting each other with a kiss on the cheeks you tell her what you learned.');
    scene.text('After some discussion you both agree that Natasha will find some casual and glamorous outfits and you\'ll get a couple made by a tailor.');
    scene.text('Once they have been made and given that you haven\'t got a sponsor for a show, you suggest a few simple photos of either or both of you wearing the dress or outfit.');
    scene.text('Whilst Natasha isn\'t comfortable with the idea of modelling her clothing she does reluctantly agree to do so as that\'s the only realistic option.');
    scene.text('You give her a big hug and a goodbye kiss before you leave the dorm lounge.');
    scene.actions([
      { label: 'Return to the corridor', goto: ['uni_dorm', 'ninth_floor'] },
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

function enterVisitTailor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street.jpg');
  scene.text('You decide to get Natasha\'s designs made and take them to the tailor located in the residential area near the market.');
  scene.text('You take the metro to the residential area and enter the tailor\'s shop.');
  scene.text('An elderly man is sitting at a table. He pulls his glasses down a little and looks over the top of them as he smiles at you.');
  scene.text('"Hello young lady. I am Jacob Solomonovich, but you can call me Yasha. So what is your name and how can I help you today?"');
  // TODO-QSP: dynamic text: Returning his smile, you tell him. "Hello Yasha, I'm <<$pcs_nickname>>. My frien...
  scene.text(`Returning his smile, you tell him. "Hello Yasha, I'm ${((s as any).pcs_nickname ?? 0)}. My friend wants to become a fashion designer and..."`);
  scene.text('He interrupts you. "Now that\'s very commendable but very difficult to succeed in. Anyway, sorry, I didn\'t let you finish."');
  scene.text('Smiling, you tell him. "That\'s okay... I have some of her designs with me. I was hoping that you could get them made up for her so we can try them out and maybe get some photos done for her portfolio."');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him the designs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['tailor_visit_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/market/tailor.jpg');
    scene.text('"Yes of course, please show me."');
    scene.text('You give him her designs and he takes a good look at them before replying. "You know, your friend is very good."');
    scene.text('You ask. "Can you make these dresses and outfits for us, please? And if so, how much will it cost?"');
    scene.text('"Yes, I\'d love to do that for you. It\'s been some time since I last did something like this as mostly I just have to adjust or repair customers\' clothes." He pauses and rubs his chin then asks. "Is there any rush and who am I making them for?"');
    scene.text('You shake your head. "No rush. It\'s for my friend Natasha and I\'m just trying to encourage her with her designs as it\'s her passion. Why do you ask?" You continue. "I\'d like all nine in her size plus this design — a glamorous looking dress — for both of us, please." You tell Yasha Natasha\'s size.');
    scene.text('With a broad smile he answers you. "Well, it\'s lovely to know that you\'re such a supportive friend, and the reason for the question is along the same lines. It is my passion to make nice clothing and I don\'t get too many opportunities to do so. Therefore, if you don\'t mind me doing it in my spare time, I can make them much cheaper for you as I could do it as a hobby. You have 9 designs plus the special dress in her size, so how does 10,000 rubles with the dress for you included in total sound?"');
    scene.text('"That\'d be great, Yasha, thank you. Do you need some money up front?"');
    // TODO-QSP: dynamic text: "No, that's okay <<$pcs_nickname>>, you can pay me when you collect them. Come b...
    scene.text(`"No, that's okay ${((s as any).pcs_nickname ?? 0)}, you can pay me when you collect them. Come back in about a month and they should be ready."`);
    scene.actions([
      { label: 'Return to the city residential area', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCollectTailor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/market/tailor.jpg');
  scene.text('You decide to collect Natasha\'s designs from the tailor.');
  scene.text('You take the metro to the residential area and enter the tailor\'s shop.');
  scene.text('On entering, Yasha looks up and greets you.');
  // TODO-QSP: dynamic text: "Hello again <<$pcs_nickname>>. I made all the dresses and outfits as we agreed;...
  scene.text(`"Hello again ${((s as any).pcs_nickname ?? 0)}. I made all the dresses and outfits as we agreed; would you like to take a look?"`);
  scene.text('"Yes please, Yasha. I\'m intrigued to see the finished product as things always look a little different when they are real rather than a drawing."');
  scene.text('Yasha gets up and leads you to a rail in the back of the shop and shows you the dresses and outfits.');
  scene.text('"What do you think? Are you pleased with the results?" he asks.');
  scene.text('"Wow! They\'re great. Thank you so much, Yasha." You can\'t resist giving him a hug.');
  scene.text('You pay the agreed 10,000 rubles as he wraps the dresses and outfits up for you.');
  qspCall(s, 'money', 'pay', 10000);
  if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['tailor_collected'] = 1;
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Show Natasha the tailor\'s work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat32.jpg');
    scene.text('You take the metro back to the university and go to the lounge area on Natasha\'s floor, where she\'s waiting for you. On the way you decide to stop off in your room and wear the dress made for you, so you quickly change. As you enter the lounge you motion to her to come with you and you both head to her room.');
    scene.text('On entering her room you give her a kiss and look around. "No roommate again?" you ask.');
    scene.text('"Nope, she\'s out again. So... how do they look?" she asks somewhat nervously.');
    scene.text('"Great Natasha, better than I\'d imagined. Yasha did a superb job! Here, let me show you." You put the package down and step back.');
    scene.text('Natasha immediately reaches for the package but you stop her. She looks at you quizzically.');
    scene.text('"Eyes on me first, <i>girlfriend</i>. Do you like it?"');
    // TODO-QSP: dynamic text: Natasha looks at you and motions for you to do a twirl. "New dress <<$pcs_nickna...
    scene.text(`Natasha looks at you and motions for you to do a twirl. "New dress ${((s as any).pcs_nickname ?? 0)}? It's lovely; where did you get it?"`);
    scene.text('You grin at her. "Well, I\'m glad you like it as there\'s an identical one in there for you."');
    scene.text('She looks confused so you clarify. "It\'s one of your designs, silly!"');
    scene.text('"Oh!... Oh!... Wow! I never expected them to look that good."');
    scene.text('With that you open the package and show her the rest of her dresses and outfits. "So, what do you think? Are you pleased with them?"');
    // TODO-QSP: dynamic text: Natasha looks so happy as well as being about ready to burst into tears as she g...
    scene.text(`Natasha looks so happy as well as being about ready to burst into tears as she grabs you and hugs you close. "Thank you so much ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Natasha has an idea about the photos', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat31.jpg');
    scene.text('As she finally relaxes she asks you how much she owes you.');
    scene.text('"You don\'t, <i>girlfriend</i>; it\'s my pleasure to try to help you achieve your dreams."');
    scene.text('You place a finger across her lips to stifle any further protests.');
    scene.text('After a pause you continue. "So I guess we\'ll need some photos of you in these plus a suitable occasion to wear some of them."');
    // TODO-QSP: dynamic text: Natasha has an idea about the photos. "<<$pcs_nickname>>, about the photos — ins...
    scene.text(`Natasha has an idea about the photos. "${((s as any).pcs_nickname ?? 0)}, about the photos — instead of going to Aphrodite as that'd be expensive, what about Julia? I've seen some of her work and it's really good."`);
    scene.text('"Yes, that\'s a great idea, Natasha. Let\'s give her a call."');
    scene.text('Natasha calls Julia and after spending some time chatting, Julia confirms she\'d love to do the photos for Natasha and will be with you in a few minutes.');
    scene.actions([
      { label: 'Julia takes the photos', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/characters/shared/headshots_main/12.jpg');
    scene.text('On arriving you spend some time on general chat and catching up before Julia asks. "So what\'s going on with you two and how come you want me to take photos of Natasha?"');
    scene.text('You explain that you\'ve had some of Natasha\'s designs made and would like some photos of her wearing them for her portfolio.');
    scene.text('Julia is only too pleased to help and directs Natasha into various poses with her wearing each of the new dresses and outfits.');
    scene.actions([
      { label: 'Vespa shoot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat33.jpg');
    scene.text('For the final dress Julia gets an idea and tells you to follow her. She leads you outside and takes you to a Vespa, then gets Natasha to pose beside it.');
    scene.text('Julia is thoroughly enjoying herself and seems to love the role of directing Natasha.');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/uni/uninat34.jpg');
    scene.text('"Now sit on it, Natasha," she commands.');
    scene.text('Natasha looks unsure but Julia reassures her. "I know the owner; it\'ll be fine."');
    scene.text('Once Julia is happy with the photos you return to Natasha\'s room where Julia shows you both the results of Natasha\'s mini fashion shoot.');
    scene.text('"They\'re great, Julia; many thanks." You tell her as you both give her a hug.');
    scene.actions([
      { label: 'Julia asks a question', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/characters/shared/headshots_main/12.jpg');
    scene.text('"So, what are you going to do with them now?" Julia asks.');
    scene.text('"We\'re not really sure. To go further we really need some sort of sponsorship and it\'s not really practical to go running around asking companies and clothing manufacturers. Apart from anything else we need to be able to concentrate on university so we can\'t get too distracted." You reply, whilst looking at Natasha who is nodding along in agreement.');
    scene.text('Julia looks thoughtful then suggests. "Why not wear the most glamorous dress out somewhere like the ballet or Babel? All sorts of famous people go there so you never know your luck."');
    scene.text('With a big smile you give Julia a hug. "Yes, thank you Julia; that\'s a great idea! Guess we\'ll have to get glammed up at some point!"');
    scene.text('Natasha objects. "I\'m not sure about the ballet in one of my outfits... What if it isn\'t acceptable?... Also, Babel has a strict dress code and will only let people in wearing designer brand clothing."');
    scene.text('"Yeah Natasha, that\'s the whole point. If we go there wearing your outfits and they let us in it\'ll prove the standard of the clothing and then it\'ll just be pot luck if the right person notices us."');
    scene.text('Julia nods her agreement but Natasha remains unconvinced as you reply. "Anyway, that\'s for another day. In the meantime, thank you so much for your help, Julia; we really appreciate it."');
    scene.text('Julia looks at her watch. "Oh dear, I\'m a bit late and need to get going. It\'s been fun, guys." She gives you both a hug before leaving.');
    scene.actions([
      { label: 'You get an idea', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (!(s as any).natbelQW) (s as any).natbelQW = {}; (s as any).natbelQW['designs_complete'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha16.jpg');
    scene.text('You turn to Natasha and give her a tender kiss. "Anyway, <i>girlfriend</i>, we\'ve got the outfits and the photos and a few ideas. Julia\'s suggestions are actually pretty good, but we\'ve come this far so are you alright if we place it all in pending for now?"');
    // TODO-QSP: dynamic text: "Yes, of course <<$pcs_nickname>>. I'm just happy and content with life right no...
    scene.text(`"Yes, of course ${((s as any).pcs_nickname ?? 0)}. I'm just happy and content with life right now. I'm really enjoying university and spending time with you. This has been pretty full on and it'd be nice to take a step back for a while and concentrate on the day to day stuff, especially our coursework."`);
    scene.text('"Guess I should be heading off too. See you soon, Natasha." After another gentle kiss you get up and leave.');
    scene.actions([
      { label: 'Return to the corridor', goto: ['uni_dorm', 'ninth_floor'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_act':
      enterSetAct(s, scene);
      break;
    case 'enter_natasha_room':
      enterEnterNatashaRoom(s, scene);
      break;
    case 'discuss_relationship_status':
      enterDiscussRelationshipStatus(s, scene);
      break;
    case 'designs_chat':
      enterDesignsChat(s, scene);
      break;
    case 'designs_dorm_gift':
      enterDesignsDormGift(s, scene);
      break;
    case 'visit_aphrodite':
      enterVisitAphrodite(s, scene);
      break;
    case 'visit_tailor':
      enterVisitTailor(s, scene);
      break;
    case 'collect_tailor':
      enterCollectTailor(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_uni_dates_2: LocationDef = {
  name: 'natbel_uni_dates_2',
  title: 'Just before you reach Natasha\'s room, you see Sonia, leaving',
  region: 'other',
  enter: enter,
};
