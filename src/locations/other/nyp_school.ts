import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).alkoblock = 1;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
  scene.text('You notice what you think are all your classmates from school here, or at least the majority of them. Most of them are milling about at several tables with tea and sweets laid out. It doesn\'t take long before most of them drift off into their individual cliques, with the gopniks staking claim to the bleachers, sitting and laying about on them, the cool kids and jocks mingling around the tables and the nerds hovering around the edges. The outcasts do their best to stay out of sight, leaning against one of the walls far from the gopniks.');
  scene.text('Some of the teachers are also here, although they don\'t seem to be paying much attention to the students and seem a lot more interested in socializing with each other.');
  scene.actions([
    { label: 'Have tea and buns', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).fat = ((s as any).fat ?? 0) + (3);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    qspCall(s, 'stat', '');
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 100;
      (s as any).music_loop = 1;
    }
    scene.img('images/locations/pavlovsk/school/events/newyear/picture.jpg');
    scene.text('Within half an hour all the tea has been drank and the buns devoured. After everyone has finished, a teacher takes out a music player and places it on the table. Music starts blasting from the speakers and he contently returns to join the other two teachers, who pay less and less attention to what\'s going on. A few couples and some of the girls get up to dance, but most of your fellow students further separate into their respective cliques.');
    scene.text('Another of the teachers, who seems to be the only one interested in this \'party\', approaches with a camera. "Happy New Year, guys! Time for some pictures!"');
    scene.text('He takes several pictures, with one of the whole class, another of just the boys and then one of just the girls. He then takes pictues of groups of friends or mostly, whether he knows it or not, of social groups.');
    scene.text('The next half hour passes by very slowly before the teachers walk over. "Happy New Year guys, but we need to go home. How about you guys help us clean up?" one of them asks.');
    scene.actions([
      { label: 'Help clear the table', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/spike.jpg');
    scene.text('You help clear the table with the other girls. The boys don\'t help with the cleanup and just keep talking with each other. Once everything is cleaned up, the teachers speak up. "You can stay here for a while and have fun guys. Rolan will come through in a few hours to lock the place up. Until then, feel free to stay and dance and we\'ll see everyone after winter break." The teachers then pack up and leave, acting like they can\'t wait to get out of here, leaving only Mr. Yenotin to watch over everyone.');
    scene.text('With most of the teachers gone, some of the boys start whispering among themselves before pulling out some fruit juice, while a few of the girls cut up fresh fruit slices to add to it. Lena and Lera add the final ingredient; pouring a whole bottle of vodka into the mix, much to the joy of most of the students and to the dismay of the nerds.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).grupTipe ?? 0) !== 4) {
      scene.img('images/locations/pavlovsk/school/events/newyear/boywant.jpg');
      scene.text('Vasily comes up to you and slaps you hard on the ass. "Hey slut, why did you even come here? This is for ordinary people. Your place is behind some building sucking a cock."');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'I came for cock', handler: (st: GameState) => {
    scene.text('You smile at him. "I was hoping to find some cock to suck, you know where I might find one?"');
    scene.text('He blinks, apparently taking a second to process what you just said before he smiles and grabs you by the arm, dragging you off towards the boys locker room. "Then come on, slut! I\'ll give you all the cock you can handle!"');
    scene.actions([
      { label: 'Go to the locker room', goto: ['nyp_school', 'slut'] },
    ]);
  } },
        { label: 'Ignore him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('You silently turn away from Vasily, ignoring his comment, but he suddenly grabs you by the arm. "What do you think you\'re doing, bitch? Answer me when I talk to you!"');
    if (((s as any).AlbinaQW ?? 0)?.['Protect'] === 1) {
      if (((s as any).fame ?? 0)?.['pav_prostitute'] > 10) {
        qspCall(s, 'fame', 'pav', 'prostitute', (-10));
      }
      if (((s as any).fame ?? 0)?.['pav_sex'] > 10) {
        qspCall(s, 'fame', 'pav', 'sex', (-10));
      }
      // TODO-QSP: dynamic text: You hear the clattering of heels and turn to see Albina storming over, her furio...
      scene.text(`You hear the clattering of heels and turn to see Albina storming over, her furious gaze directed towards Vasily. "I distinctly remember telling you and the other tiny dick morons to fuck off and leave ${((s as any).pcs_nickname ?? 0)} alone, or has your tiny dick brain forgotten that conversation?"`);
      scene.text('Vasily has already let go of you and bravely - or stupidly - lunged for Albina. "What did you call me, you buttslut whore!? You want me to fuck you instead!?"');
      // TODO-QSP: dynamic text: Albina, with lightning-fast reflexes, delivers a swift yet brutal kick to his cr...
      scene.text(`Albina, with lightning-fast reflexes, delivers a swift yet brutal kick to his crotch, causing the howling Vasily to fall to the floor. Albina then squats down beside him as he rolls back and forth in pain. "Leave ${((s as any).pcs_nickname ?? 0)} alone or you'll do more than regret getting on my bad side."`);
      scene.text('Vasily curls into a ball on the floor, nursing the pain in his crotch. Either he didn\'t hear her or he doesn\'t know when to stop, because the next thing he utters between incoherent moans of pain is clearly "Fuck you, you dirty anal-loving whore!"');
      scene.text('Albina stands up and proceeds to viciously stomp on his crotch before painfully twisting her heel into him. "You\'re testing my patience! Do you want me to burst your little balls in front of everyone?"');
      scene.text('Vasily squeals pathetically in pain. "No! I\'m sorry, I\'m sorry! Just please, stop!"');
      // TODO-QSP: dynamic text: Albina looks at you. "You better leave before somebody sees you, <<$pcs_nickname...
      scene.text(`Albina looks at you. "You better leave before somebody sees you, ${((s as any).pcs_nickname ?? 0)}. With what people already think of you, you really don't want them to think you did this."`);
      scene.text('Several of the other students are howling in laughter at Vasily\'s humiliating misfortune, but more than a few take another look at you and seem to see you a little differently thanks to Albina coming to your aid. Seeing that you\'re not going to be left alone, you safely slip out while everyone is distracted by Vasily and Albina.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      ]);
    } else {
      scene.text('"What do you want?" you cry out and Vasily just grins. "What do I want? I\'d like a New Year\'s gift. Nothing big, just a little kiss on the cheek. How about we continue this in the locker room and I get to fuck you raw? That would be quite the gift." He grabs you by the arm and pulls you along, with the rest of the students either ignoring what\'s going on or cheering Vasily on. A few of the other gopniks join him in dragging you into the locker room.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get dragged into the locker room', goto: ['nyp_school', 'slut'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 250  &&  ((s as any).grupTipe ?? 0) === 4) {
        // TODO-QSP: dynamic text: One of the boys suddenly calls out to you. "Come over here, <<$pcs_nickname>>. I...
        scene.text(`One of the boys suddenly calls out to you. "Come over here, ${((s as any).pcs_nickname ?? 0)}. I've got something for you."`);
        scene.actions([
          { label: 'Approach', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('You walk up to the guys, who are standing in a circle laughing. You notice one of them holding a bottle of vodka as Dan offers you a glass.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse the drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse the drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/forceddrink.jpg');
    scene.text('You shake your head. "No thanks."');
    // TODO-QSP: dynamic text: "I don't think you understand, <<$pcs_nickname>>," Dan replies. "We <i>weren't</...
    scene.text(`"I don't think you understand, ${((s as any).pcs_nickname ?? 0)}," Dan replies. "We <i>weren't</i> asking."`);
    scene.text('You feel someone grab your hair and pull your head back while Dan grabs your chin and forces your mouth open. Someone then pours vodka into your mouth. You try to spit some out, but once your mouth is full, Dan forces your mouth closed. He then covers your mouth with his hand and pinches your nose closed, forcing you to swallow or drown. After repeating this several times, you\'re so drunk that you can barely stand.');
    if (((s as any).npc_rel ?? 0)?.['A1'] <= 10) {
      (s as any).NosovRevenge = 1;
      // TODO-QSP: dynamic text: Dimka looks at the floor as he talks. "<<$pcs_nickname>>, you and I have had dis...
      scene.text(`Dimka looks at the floor as he talks. "${((s as any).pcs_nickname ?? 0)}, you and I have had disagreements. I sincerely apologize for my misbehavior. I hope you will still come to my party."`);
    }
    scene.actions([
      { label: 'Get dragged into the locker room', goto: ['nyp_school', 'slut'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept the drink', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/vodkabottle.jpg');
    scene.text('You drink the vodka. It burns your throat as you swallow it and you start coughing a little, but quickly recover. The gopniks laugh and encourage you to drink more. The more you drink, the more they encourage you and before long, you\'re really drunk and barely able to stand. Someone then suddenly grabs you and drags you towards the boys locker room.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A1'] <= 10) {
      (s as any).NosovRevenge = 1;
      // TODO-QSP: dynamic text: Dimka looks at the floor as he talks. "<<$pcs_nickname>>, you and I have had dis...
      scene.text(`Dimka looks at the floor as he talks. "${((s as any).pcs_nickname ?? 0)}, you and I have had disagreements. I sincerely apologize for my misbehavior. I hope you will still come to my party."`);
    }
    scene.actions([
      { label: 'Get dragged into the locker room', goto: ['nyp_school', 'slut'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Drink some juice', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/punch.jpg');
    scene.text('You grab one of the plastic cups and spoon out some of the spiked juice. You take a sip and find that it isn\'t too bad since the juice covers up most of the taste of the vodka.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.actions([
        { label: 'Go stand against the wall alone', goto: ['nyp_school', 'outcast'] },
      ]);
    } else {
      scene.actions([
        { label: 'Hang out with the cool kids and jocks', goto: ['nyp_school', 'cool jocks'] },
        { label: 'Hang out with the nerds', goto: ['nyp_school', 'nerds'] },
        { label: 'Hang out with the gopniks', goto: ['nyp_school', 'gopniks'] },
        { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      ]);
    }
    scene.actions([
      { label: 'Drink some more', handler: (st: GameState) => {
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (10);
  }, goto: ['nyp_school', 'drink more'] },
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
          { label: 'Leave', goto: ['gschool_grounds', 'main'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoolJocks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pavlovsk/school/events/newyear/hangout.jpg');
  scene.text('The next half hour passes by very slowly and is uneventful. The boys gather in a group together and talk about whatever it is boys talk about, most likely the girls. The girls mill around in a group and discuss the problems with makeup and skin care. Everyone grabs a drink just to feel a little buzz, with no one wanting to get too drunk.');
  scene.text('Andrey and Stasya spend the whole time dancing together while some of the other girls occasionally agree to dance with one of the boys or often dance in a group.');
  if (((s as any).fedorKozlovQW ?? 0) >= 10) {
    // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Fedor walks over and offers y...
    scene.text(`As you're hanging out and chatting with the girls, Fedor walks over and offers you his hand. "Come dance with me, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Don\'t dance with him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You slightly lower your head. "I\'d love to, but I\'m really tired and just want to chat with my friends. Maybe next time?"');
    scene.text('Fedor looks at the floor. "Alright, I didn\'t mean to interrupt your chat. I\'ll just go…"');
    scene.text('Feeling bad, you give him a smile and plant a soft kiss on his cheek. "Awww, don\'t give me that sad puppy face. How about a kiss instead?"');
    // TODO-QSP: dynamic text: He chuckles before nodding and giving you a passionate kiss. "Alright <<$pcs_nic...
    scene.text(`He chuckles before nodding and giving you a passionate kiss. "Alright ${((s as any).pcs_nickname ?? 0)}, have a good time and I'll see you later." You wave at him as he walks away.`);
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      { label: 'Dance with him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss.mp4');
    scene.text('You place your hand on top of Fedor\'s. "I\'d love to dance with you."');
    scene.text('Fedor gives your hand a light kiss as he wraps his arm around your waist and pulls you toward him. You give him a smile as you both start swaying to the music, feeling Fedor\'s strong arm around your waist keeping your sway in sync with his as you both stare into each other\'s eyes.');
    scene.text('You lean forward and give him a gentle, loving kiss, enjoying the warmth of his lips pressed against yours as he firmly holds you close to him. The kiss lasts for what feels like a minute before you slowly break it off and continue dancing slowly to the music while staring directly into Fedor\'s eyes.');
    scene.actions([
      { label: 'Dance until the party ends', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/fedordance.jpg');
    scene.text('Time seems to have flown by. You rock your hips, enjoying the beats of the music when it suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
    // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door while you and...
    scene.text('The students start picking up their stuff and heading for the door while you and Fedor walk together hand in hand before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
    scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
    if (((s as any).NosovRevenge ?? 0) === 1) {
      // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
      scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
    }
    (s as any).InvitationToDimkaNYparty = 1;
    scene.text('Everyone then slowly makes their way out of the school.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).IgorQW ?? 0)?.['Love'] > 0) {
      // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Igor walks over and offers yo...
      scene.text(`As you're hanging out and chatting with the girls, Igor walks over and offers you his hand. "Come dance with me, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.actions([
        { label: 'Don\'t dance with him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/talk.jpg');
    scene.text('You shake your head. "I don\'t feel like it right now. Maybe later?"');
    scene.text('He frowns before nodding. "Okay, we can just talk if you want?"');
    scene.text('You smile at him. "Of course." You talk with him for a while, but gradually start paying more attention to what the other girls are talking about and the conversation soon turns to girl gossip and topics. Igor seems to enjoy this even more and doesn\'t seem to mind the strange looks from some of the girls when he fully engages with fashion tips and gossip of his own.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
        { label: 'Dance with him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/igordance.jpg');
    scene.text('"Of course," you smile. "I\'d love to dance with you."');
    scene.text('He takes you by the hand and leads you out onto the dance floor. Some songs are fast and get you both really moving around while others are slow, in which case you slow dance together. You really enjoying dancing in front of everyone with your boyfriend.');
    scene.actions([
      { label: 'Dance until the party ends', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('Time seems to have flown by. You rock your hips, enjoying the beats of the music when it suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
    // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door while you and...
    scene.text('The students start picking up their stuff and heading for the door while you and Igor walk together hand in hand before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
    scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
    if (((s as any).NosovRevenge ?? 0) === 1) {
      // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
      scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
    }
    scene.text('Everyone then slowly makes their way out of the school.');
    (s as any).InvitationToDimkaNYparty = 1;
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).Marcus_sextype ?? 0) > 0) {
        // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Marcus walks over and offers ...
        scene.text(`As you're hanging out and chatting with the girls, Marcus walks over and offers you his hand. "Come dance with me, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.actions([
          { label: 'Don\'t dance with him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/talk.jpg');
    scene.text('You shake your head. "I don\'t feel like it right now. Maybe later?"');
    scene.text('He looks a little embarrassed as some of the girls giggle. "Oh. Okay. Well, if you change your mind let me know."');
    scene.text('You smile at him. "Of course." You lean over and give him a quick kiss, which gets a lot of woos from the other girls. He then walks away and the girls tease you about it, while some ask you about him. Before long, all the girls are talking about which boys they think are cute or have the biggest dick.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
          { label: 'Dance with him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/marcusdance.jpg');
    scene.text('"Of course," you smile. "I\'d love to dance with you."');
    scene.text('He takes you by the hand and leads you out onto the dance floor. Some songs are fast and get you both really moving around while others are slow, in which case you slow dance together. You really enjoying dancing in front of everyone.');
    scene.actions([
      { label: 'Dance until the party ends', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('Time seems to have flown by. You rock your hips, enjoying the beats of the music when it suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
    // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door while you and...
    scene.text('The students start picking up their stuff and heading for the door while you and Marcus walk together hand in hand before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
    scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
    if (((s as any).NosovRevenge ?? 0) === 1) {
      // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
      scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
    }
    scene.text('Everyone then slowly makes their way out of the school.');
    (s as any).InvitationToDimkaNYparty = 1;
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_had_sex ?? 0)?.['A14']) {
          // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Katja strikes up a conversati...
          scene.text(`As you're hanging out and chatting with the girls, Katja strikes up a conversation with you. After a few seconds, a song comes on and Katja becomes excited. "I love this song!" she squeals as she turns to you and grabs you by the hand. "Dance with me, ${((s as any).pcs_nickname ?? 0)}!"`);
          scene.actions([
            { label: 'Don\'t dance with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/talk.jpg');
    scene.text('You shake your head. "I don\'t feel like it right now. Maybe later?"');
    scene.text('She frowns before nodding. "Okay. If you change your mind, come join us." She then grabs Vicky by the hand, who drags Vanya along. All three of them are soon dancing together.');
    scene.text('You watch them for a while before turning back to engage in conversation with the other girls.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
            { label: 'Dance with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/katjadance.jpg');
    scene.text('"Of course," you smile. "I\'d love to dance!"');
    scene.text('She takes you by the hand and leads you out onto the dance floor. Before long, Vicky and Vanya join you, Vanya even taking turns dancing with all three of you. Some songs are slower and in those cases you slow dance with Katja, which gets some of the guys hooting and hollering and telling you to make out. You really enjoy dancing in front of everyone with Katja.');
    scene.actions([
      { label: 'Dance until the party ends', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('Time seems to have flown by. You rock your hips, enjoying the beats of the music when it suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
    // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door while you and...
    scene.text('The students start picking up their stuff and heading for the door while you and Katja walk together before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
    scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
    if (((s as any).NosovRevenge ?? 0) === 1) {
      // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
      scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
    }
    scene.text('Everyone then slowly makes their way out of the school.');
    (s as any).InvitationToDimkaNYparty = 1;
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
            // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Albina strikes up a conversat...
            scene.text(`As you're hanging out and chatting with the girls, Albina strikes up a conversation with you. After a few seconds, she grabs your hand and starts pulling you along. "Come and dance with me, ${((s as any).pcs_nickname ?? 0)}!"`);
            scene.actions([
              { label: 'Don\'t dance with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/talk.jpg');
    scene.text('You shake your head and pull yourself free from her grasp. "I don\'t feel like it right now. Maybe later?"');
    // TODO-QSP: dynamic text: She pouts. "Aww, you're no fun, <<$pcs_nickname>>! If you change your mind, then...
    scene.text(`She pouts. "Aww, you're no fun, ${((s as any).pcs_nickname ?? 0)}! If you change your mind, then come join us."`);
    scene.text('A few of the other girls join her on the dance floor and they all start dancing together.');
    scene.text('You watch them for a while before turning back to engage in conversation with the other girls.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
              { label: 'Dance with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/newyear/tusa6.jpg');
    scene.text('"Of course," you smile. "I\'d love to dance!"');
    scene.text('She giggles happily as she drags you onto the dance floor. Albina seems to be in a bit of a buzz and dances very erotically, which gets some of the guys hooting and hollering. You\'re taken aback when Albina suddenly starts making out with you, much to the joy of the guys watching.');
    scene.text('She then breaks the kiss and smiles at you before going back to dancing. You really enjoy dancing in front of everyone with Albina.');
    scene.actions([
      { label: 'Dance until the party ends', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('Time seems to have flown by. You rock your hips, enjoying the beats of the music when it suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
    // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door while you and...
    scene.text('The students start picking up their stuff and heading for the door while you and Katja walk together before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
    scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
    if (((s as any).NosovRevenge ?? 0) === 1) {
      // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
      scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
    }
    scene.text('Everyone then slowly makes their way out of the school.');
    (s as any).InvitationToDimkaNYparty = 1;
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            scene.img('images/locations/pavlovsk/school/events/newyear/hangout.jpg');
            scene.text('The next half hour passes by very slowly and is uneventful. You spend most of the time just talking to the other girls about the latest fashion, what\'s going on in school or recent events. To kill time, all the girls not currently dancing go out and dance together as a group.');
            scene.actions([
              { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  if (((s as any).grupTipe ?? 0) === 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('You see the others sitting at a table lively discussing something. As you approach, you can hear Natasha complaining. "Ugh, you always talk about this damn roleplaying game! It\'s no wonder everyone sees you as nerds! Can\'t we talk about something else?"');
    // TODO-QSP: dynamic text: The group look at her with a blank stare and instead turn towards you. "<<$pcs_n...
    scene.text(`The group look at her with a blank stare and instead turn towards you. "${((s as any).pcs_nickname ?? 0)}, how do you think we should face the undead ruler?" You can hear Natasha ironically yawn.`);
    scene.actions([
      { label: 'Head on', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('You stop and start thinking about the right strategy. "I feel that we\'re strong enough to beat the ruler if we attack head on. As long as everyone know their roles, we shouldn\'t have any trouble beating him."');
    scene.text('Julia nods. "You\'re right. If our tank takes all the damage and our main glass cannons deal lots of damage, we should be good. That is if the game master doesn\'t throw us a curve ball."');
    scene.text('Feofan clears his throat. "You\'ll have to wait and see what the undead king has in store for the party."');
    scene.text('You and the rest of the players grin at the thought of what kind of adventure is awaiting you while Natasha just shakes her head. "You guys really are the worst kind of nerd."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A142', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A12', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      { label: 'Methodically approach it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('You stop and start thinking about the right strategy. "I feel that we should approach this fight very carefully. The undead king seems kind of strong and should not be underestimated."');
    scene.text('Zinaida nods. "I agree. Remember the last time we went head on with that dragon and almost got wiped out? That was such a bad decision. The game master nearly got us all killed there."');
    scene.text('Feofan grins. "It\'s not my fault you decided to run into that fight without any plan. The blame is completely on you. But I have to admit, it was fun seeing you all sweat for a while."');
    scene.text('"Well if you put that way, then we really need to be careful." you reply.');
    scene.text('You continue discussing the game, immersing yourself into the game world while Natasha just shakes her head. "You guys really are the worst kind of nerd."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A142', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A12', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
      scene.text('As you walk past the nerds table, you hear a heated debate going on amongst them. They seem to be discussing some kind of fantasy game. The main focus seems to be on Natasha, who seems to have hit a nerve with several of them.');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Approach', handler: (st: GameState) => {
    scene.text('As you come closer, the discussion subsides as the guys stop talking when they se you.');
    // TODO-QSP: dynamic text: Natasha turns around and greets you. "Hi <<$pcs_nickname>>, sorry about the comm...
    scene.text(`Natasha turns around and greets you. "Hi ${((s as any).pcs_nickname ?? 0)}, sorry about the commotion. I was discussing how annoying it was that the only thing that everyone talks about is this stupid game."`);
    scene.text('"And I take it that you\'re not a fan of it?" you reply.');
    scene.text('She smiles nervously back. "I mean I don\'t mind them talking about it, but it\'s just that they talk about it <i>all</i> the time. It\'s like there\'s nothing else happening around here."');
    scene.text('The other side still haven\'t said a word since you\'ve arrived.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'What do you want to talk about?', handler: (st: GameState) => {
    scene.text('"Well, what do you want to talk about?" you ask. "I mean what do nerds normally talk about that isn\'t something weird?"');
    scene.text('Natasha throws up her hands. "I don\'t know, anything! Clothes, fashion, what\'s going on at school. Even any good books anyone has read or movies they\'ve watched. Just <i>something</i> else."');
    scene.text('You nod. "Sounds boring, but reasonable." You glance at the others and wait for a reply.');
    scene.text('Feofan, who you assume is the leader, tries his hardest to avoid looking you in the eyes while the others try to avoid making any sound at all.');
    scene.text('You\'re a little annoyed by the silent response. "What? Before I arrived, you guys wouldn\'t shut up and now you won\'t talk. What\'s so unreasonable about what she wants?"');
    // TODO-QSP: dynamic text: Feofan sighs and takes a deep breath. "S-Sorry <<$pcs_nickname>>, b-but this gam...
    scene.text(`Feofan sighs and takes a deep breath. "S-Sorry ${((s as any).pcs_nickname ?? 0)}, b-but this game is really immersive and we enjoy it quite a lot. It's not that we don't want to talk about the other stuff, it's just… Who cares?"`);
    scene.text('You give him a silent look over and keep staring at him until he continues. "Anyway, we\'re just passionate and get caught up in the moment is all."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Is that so?', handler: (st: GameState) => {
    scene.text('"It\'s only a stupid game," you reply. "Try living in the real world and maybe you wouldn\'t get picked on so much."');
    scene.text('Feofan nervously looks around, seeking help from the others, but they don\'t want to meet his pleading gaze. "I-I guess we-we can talk about something else…"');
    scene.text('"Good!" you say. "If that was all, then I\'ll be on my way."');
    scene.text('Just as you turn around and the guys let out a sigh of relief, Natasha speaks up. "Don\'t you want to know where they have these game nights? Maybe you\'d be interested in visiting sometime?" she smugly says.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod. "Sure."');
    scene.text('Natasha grins and tells you that they meet in the library at the community center once a week. "I\'m sure they won\'t mind having a new player join them."');
    scene.text('You laugh. "Like I would join them! I don\'t usually like snitches either, but I\'m letting this one go as you\'re providing me with something that could be fun."');
    scene.text('You have them all shook up as you leave their table. You can hear them whisper and curse at Natasha for telling you about their secret spot.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out with the cool kids and jocks', goto: ['nyp_school', 'cool jocks'] },
      { label: 'Hang out with the gopniks', goto: ['nyp_school', 'gopniks'] },
    ]);
  } },
      { label: 'Not interested', handler: (st: GameState) => {
    scene.text('You laugh. "Look, I\'d love to fuck around with you nerds, but I\'m not that interested. You can keep playing your stupid little game."');
    scene.text('The guys let out a sigh of relief as Natasha looks dejected. "Take this as a warning, Natasha," you continue. "No one likes a snitch. You should be glad that we\'re in a public place, otherwise I would\'ve knocked you out."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A16', (-1));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out with the cool kids and jocks', goto: ['nyp_school', 'cool jocks'] },
      { label: 'Hang out with the gopniks', goto: ['nyp_school', 'gopniks'] },
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
      scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
      scene.text('As you pass by the nerds table, you hear Natasha sighing deeply. "All you guys always talk about is that damn game! Do we really have to talk about it all the fricking time? It\'s so annoying!"');
      scene.text('Julia and Zinaida look at her, confused. "But it\'s really fun! You have an immersive world with lots of stuff happening. You can fight dragons, the undead, evil wizards. You get to make decisions that in the end can affect the whole party. And best of all, you get to hang out with your friends in peace."');
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Ask what they\'re talking about', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('You stop and listen in while the girls continue to chat about the game. "What\'s this game you\'re all talking so fondly about?"');
    // TODO-QSP: dynamic text: Natasha looks at you despairingly. "Not you too, <<$pcs_nickname>>!"
    scene.text(`Natasha looks at you despairingly. "Not you too, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You look at her in confusion as Feofan quickly cuts in. "I see we have a new potential player here!" he grins. "Once a week, we meet at the library to play D&D. It\'s a fantasy role-playing game."');
    scene.text('"That\'s totally <i>boring</i>!" Natasha jumps in.');
    scene.text('Feofan, a little annoyed by Natasha butting in, continues. "Does it sound interesting to you?"');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sounds like fun', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('You shine up. "I would love to join you! I\'ve always wanted to be a part of a role-playing game."');
    scene.text('Feofan looks pleased. "Good, then it\'s settled. Gang, welcome our new party member!"');
    scene.text('The rest of the players all welcome you to their little group, while Natasha looks dejectedly at you. "I\'m a little surprised you decided to join so easily. I thought you would also think that this was stupid."');
    scene.text('You shrug slightly. "It sounds like it might be fun, never hurts to try new things," you tell her and she just sighs.');
    scene.text('They open up a free spot for you to sit down and you start talking about the game.');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A153', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A142', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A12', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A16', (-1));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      { label: 'I\'ll think about it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/nerds.jpg');
    scene.text('"I\'ll think about it. I\'m not too sure this is for me," you answer.');
    scene.text('Feofan looks a little dejected. "Well you know where you can find us. Whenever you decide what you want to do, you\'re more than welcome to join us."');
    // TODO-QSP: dynamic text: "Ha!" Natasha yells out. "I told you <<$pcs_nickname>> wouldn't want to join you...
    scene.text(`"Ha!" Natasha yells out. "I told you ${((s as any).pcs_nickname ?? 0)} wouldn't want to join you," she says and sticks her tongue out.`);
    scene.text('You try to calm the situation down and play peace maker. "It\'s not I don\'t want to, I just have schoolwork and other stuff going on. I just don\'t know if I have time for something like that."');
    scene.text('Natasha shrugs her shoulders. "It\'s good enough for me," she says as she gives the others an exasperating grin.');
    scene.text('You end up talking to Natasha about the latest things going on in school while the rest of them go back to talking about their game.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
  scene.text('The gopniks mostly gather over by the bleachers pushed against the wall. A few climb up on top to sit there, with a commanding view of the rest of the party, while the rest stand near the wall in smaller groups.');
  scene.text('As you hang out, it doesn\'t take long for most of them to start complaining about how boring the party is, despite the spiked juice and start discussing ways to make it more interesting. Everyone breaks up into groups to figure out what to do to make it more fun.');
  scene.actions([
    { label: 'Go tag something', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    // TODO-QSP: dynamic text: Ekaterina is frantically waving, trying to get your attention. "<<$pcs_nickname>...
    scene.text(`Ekaterina is frantically waving, trying to get your attention. "${((s as any).pcs_nickname ?? 0)}! ${((s as any).pcs_nickname ?? 0)}! Come over here!"`);
    scene.text('You move over to a small group that\'s gathered in one of the corners of the room. As soon you approach, Ekaterina tells you to come closer as if she\'s about to tell you a secret. "Now that all the teachers are gone, we\'re free to do what ever we want…" she slyly says.');
    scene.text('"Sounds intriguing. What did you have in mind?" you curiously ask.');
    scene.text('"Well, Lavrenti has been kind enough to provide us with some spray cans. So what do you say? Let\'s have some fun," she smiles.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'crime', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
    scene.text('You don\'t want to be a part of such childish things. "There are other ways to leave a memento behind. So no, I won\'t be joining you."');
    // TODO-QSP: dynamic text: The group looks disappointingly at you. "We thought you were cool, <<$pcs_nickna...
    scene.text(`The group looks disappointingly at you. "We thought you were cool, ${((s as any).pcs_nickname ?? 0)}," Ekaterina says. The others nod, agreeing with what she's saying.`);
    scene.text('You shrug your shoulders at their reaction. It doesn\'t really bother you that they find you boring for not going along with it.');
    scene.text('They shake their heads as they walk past you and some of them whisper. "Can you believe she turned us down? Who the fuck does she think she is?"');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let\'s go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('You grin. "Sounds like fun! I was getting bored anyway. Where should we leave our mark?"');
    scene.text('The group ponders. "Maybe in one of the classrooms?" Ekaterina suggests.');
    scene.text('"Definitely the entrance, so everyone can see our masterpiece," Niko replies.');
    scene.text('"One of the exterior walls, as a welcoming sign," Lavrenti scoffs.');
    scene.text('"Why not keep it simple and do it here in the gym locker room instead?" Pauline suggests.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tag a classroom', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/classroom.jpg');
    scene.text('You get the deciding vote and go for tagging a classroom. You can see a clear smile on Ekaterina\'s face.');
    scene.text('"Shall we?" you ask. The others nod and you head out to search for the perfect spot.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A145', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Right here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/classroomtag.jpg');
    scene.text('"What about here?" you ask.');
    scene.text('The others examine the spot for a while and chat amongst themselves before agreeing with you.');
    scene.text('You start tagging everything you get your hands on, mostly writing obscenities and combining the group\'s initials so no one can recognize that it\'s you that\'s doing all this.');
    scene.text('You\'re having a great time and time quickly flies by. Before you know it, you\'ve run out of spray paint and it\'s time to make your exit before anyone notices you.');
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party in the gym. You sneak back in and it doesn\'t seem like anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tag the entrance', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/gschool_hall00.jpg');
    scene.text('You get the deciding vote and go for tagging the entrance. You can see a clear smile on Niko\'s face.');
    scene.text('"Shall we?" you ask. The others nod and you head out to search for the perfect spot.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A189', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Right here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/halltag.jpg');
    scene.text('"What about here?" you ask.');
    scene.text('The others examine the spot for a while and chat amongst themselves before agreeing with you.');
    scene.text('You start tagging everything you get your hands on, mostly writing obscenities and combining the group\'s initials so no one can recognize that it\'s you that\'s doing all this.');
    scene.text('You\'re having a great time and time quickly flies by. Before you know it, you\'ve run out of spray paint and it\'s time to make your exit before anyone notices you.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party in the gym. You sneak back in and it doesn\'t seem like anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tag an exterior wall', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/schoolwinter.jpg');
    scene.text('You get the deciding vote and go for tagging an exterior wall. You can see a clear smile on Lavrenti\'s face.');
    scene.text('"Shall we?" you ask. The others nod and you head out to search for the perfect spot.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Right here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/outside.jpg');
    scene.text('"What about here?" you ask. You don\'t know if it is the snow or the cold but the others agree pretty quickly with your choice.');
    scene.text('You start tagging everything you get your hands on, mostly writing obscenities and combining the group\'s initials so no one can recognize that it\'s you that\'s doing all this.');
    scene.text('You\'re having a great time and time quickly flies by. Before you know it, you\'ve run out of spray paint and it\'s time to make your exit before anyone notices you.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party in the gym. You sneak back in and it doesn\'t seem like anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Tag the locker room', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('You get the deciding vote and go for tagging the gym. You can see a clear smile on Pauline\'s face.');
    scene.text('"Shall we?" you ask. The others nod and you sneak into the boys locker room, where you start searching for the perfect spot.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Right here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/lockerroom.jpg');
    scene.text('"What about here?" you ask.');
    scene.text('The others examine the spot for a while and chat amongst themselves before agreeing with you.');
    scene.text('You start tagging everything you get your hands on, mostly writing obscenities and combining the group\'s initials so no one can recognize that it\'s you that\'s doing all this.');
    scene.text('Some of your classmates are watching you, so you threaten them not to snitch on you. You\'re having a great time and time quickly flies by. Before you know it, you\'ve run out of spray paint and it\'s time to make your exit before anyone notices you.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party in the gym. You sneak back in and it doesn\'t seem like anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
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
    { label: 'Get high', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('You notice the band members standing around, whispering something at each other and laughing. Curious about what they\'re doing, you confidently walk over and Anushka and Alyona happily greet you.');
    scene.text('"I saw that you were being secretive and that got my interest," you intrusively say.');
    scene.text('The group throw some glances at each other. The boys seem irritated by your prodding while the girls cheerfully respond. "Arkadi\'s friends from the city came through and gave him what is supposedly some very good weed."');
    scene.text('Arkadi sighs. "Want to announce it to the whole room maybe? It was supposed to be a secret! There are too many blabbermouths around here."');
    // TODO-QSP: dynamic text: "Surely we can trust <<$pcs_nickname>>, right?" Anushka winks towards you.
    scene.text(`"Surely we can trust ${((s as any).pcs_nickname ?? 0)}, right?" Anushka winks towards you.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('"I\'m not interested, but your secret is safe with me. I won\'t tell anyone," you reply.');
    scene.text('"Yeah, you better keep that mouth shut!" Arkadi aggressively tells you off.');
    // TODO-QSP: dynamic text: "Take it easy, Arkadi! <<$pcs_nickname>> said she wouldn't say anything. And eve...
    scene.text(`"Take it easy, Arkadi! ${((s as any).pcs_nickname ?? 0)} said she wouldn't say anything. And even if she did, it's not like this is a big secret after all," Anushka replies.`);
    scene.text('"As I said, she better keep that mouth shut!" he yells out as he moves away from you. The rest of the group quickly chase after him as you\'re left alone, standing by yourself.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('"Yeah you can trust me, I won\'t tell a soul. I actually want to smoke with you."');
    scene.text('"N-" Arkadi starts to answer, but Anushka cuts him off. "Of course you can join us. The more the merrier."');
    scene.text('Arkadi and the boys look a little irritated, but they know there\'s no way they can win an argument against Anushka.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head to the girls locker room', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('You sneak into the girls locker room and find a bench to sit on, but Arkadi is nowhere to be seen. You look around worried, but Anushka calms you down. "Don\'t worry, he\'ll be here shortly. He just went to roll the joint."');
    scene.text('You sit and chat for a while waiting for Arkadi. It doesn\'t take long before you can see him coming towards you.');
    scene.text('"Took you long enough!" Radomir yells out to him.');
    scene.text('"I wanted to get a drink first to set the mood," he replies. He quickly lights the joint and takes the first smoke before passing it around. It\'s soon your turn.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Have second thoughts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Have second thoughts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('When Alyona passes the joint to you, you begin to internally freak out. You shake your head and show with a hand gesture that you pass.');
    scene.text('"What now?" Arkadi asks. "I thought you wanted to smoke?"');
    scene.text('"I\'ve changed my mind…" you meekly answer.');
    scene.text('He scoffs. "I knew this was a bad idea. We shouldn\'t have let you tag along."');
    scene.text('Anushka once again comes to the rescue. "Leave her alone, Arkadi. If she doesn\'t want to smoke, don\'t force her. She can still stay until we head back."');
    scene.text('You cheer up and start talking to Anushka and Alyona as Arkadi mutters something to the other boys.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/weed.jpg');
    scene.text('You excitingly grab hold of the joint and follow the others lead. You inhale the smoke deeply and you feel your lungs fill up. You can almost instantly feel the weed kick in as you start to feel light-headed.');
    scene.text('Arkadi gives you a smirk. "Good shit, right?"');
    scene.text('You nod and feel even more light-headed, but it\'s not a bad feeling. Instead, you feel more relaxed and spaced out.');
    scene.text('You engage in all kinds of conversations with the rest of the group and you lose track of time. All you know is that you\'re having a great time. As the kick subsides, all of you decide that it\'s time to head back.');
    // TODO-QSP: dynamic text: As you're heading back, Arkadi walks next to you. "You know what, <<$pcs_nicknam...
    scene.text(`As you're heading back, Arkadi walks next to you. "You know what, ${((s as any).pcs_nickname ?? 0)}? You're pretty cool. I'm sorry I reacted the way I did," he says.`);
    scene.text('"Nothing to worry about," you smile.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).narkweed = ((s as any).narkweed ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party in the gym. You sneak back in and it doesn\'t seem like anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
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
    { label: 'Pick on someone', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('Feeling bored, you scan around the room searching for something to kill off some time. It doesn\'t take long before you see Petia standing alone in the corner.');
    scene.text('You quickly move over to Vitek and tell him that you have the perfect plan to kill some time. You quickly explain how you want it to play out and he calls on the others to join in.');
    scene.text('Agreeing on the plan, you approach Petia.');
    scene.actions([
      { label: 'Talk to him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('"Hey Petia!" you cheerfully greet him.');
    scene.text('"What do you want? I don\'t have time to deal with your shit today," he arrogantly replies.');
    scene.text('"Is that any way to greet a classmate?" you reply. "Here I was, wanting to be kind and nice this time, but you\'re making it really hard to do that."');
    scene.text('He sighs dejectedly. "I\'m sorry. Did you need something?"');
    scene.actions([
      { label: 'Tell him a secret', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('"Well here\'s the thing. A friend of mine is quite interested in you, but she\'s too shy to talk to you herself, so she sent me over to talk with you."');
    scene.text('Petia seems distrustful. "Yeah right. You should\'ve tried with something less obvious."');
    scene.text('You look pleadingly at him. "No, I\'m not kidding. Let me call her over." Before he manages to answer, you wave at Lena to come over.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('Lena sees the signal and leaps towards the two of you. She cheerfully stops in front of both of you as you explain that you\'ve told Petia the big secret.');
    scene.text('Lena, being the good actress she is, blushes and pushes you gently. "Why did you tell him that? I told you that in confidence and now you told him. I\'m so ashamed right now!"');
    scene.text('Petia, now looking nervously around, tries to manage the situation. "Wait, wait! No need to fight with each other. Let\'s talk about it."');
    scene.text('Not able to contain herself, Lena goes all in as she gently brushes Petia\'s shoulder and flings her hair around.');
    scene.text('"I should probably leave you two love birds alone," you say.');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/pack.jpg');
    scene.text('You hear Vitek yelling and see him and his crew storming towards you. As he approaches, he starts pushing Petia around. "What the hell are you doing with my sister, you fucking loser?! Do you want me to smash your teeth in?!"');
    scene.text('While this commotion is going on, Lena quickly moves in and grabs Petia\'s cock. "What a loser!" she laughs. "His cock is rock-hard! I barely touched him and he\'s so stiff!"');
    scene.text('She makes a hand gesture at you, telling you that it\'s really small.');
    scene.actions([
      { label: 'Keep bullying him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/pack.jpg');
    scene.text('"Drop your pants! Let\'s see that tiny cock of yours!" Vitek yells out. "You have a hard-on for my sister? Haven\'t you heard what I do to people that mess around with her?" Vitek presses on.');
    scene.text('Petia tries to reason with Vitek. "B-But I didn\'t do anything! It was her that came on to me!"');
    scene.text('"Are you calling my sister a liar?!" he angrily asks.');
    scene.text('"Let me at him!" you hear Roman yell out from behind.');
    scene.text('Lena pats her brother on the back. "That\'s enough, he\'s probably pissed himself already. Maybe I should touch him down there just to check if it\'s wet?"');
    scene.text('They keep picking on him, threatening to beat his ass as you walk away. You can hear Petia sobbing over the threats, having greatly enjoyed yourself.');
    scene.actions([
      { label: 'Back to the party', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/gopniks.jpg');
    scene.text('With the act done, you head back to the party. It doesn\'t seem anyone noticed you were gone. Settling down, you spend the next few minutes talking and laughing about what you just did.');
    scene.actions([
      { label: 'Hang out until the party ends', goto: ['nyp_school', 'end'] },
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

function enterOutcast(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You stand at the edge of the hall with Sonia to avoid drawing any attention to yourselves. You\'re actually quite enjoying yourself and Sonia is happily talking about her latest sexual endeavors.');
    scene.text('The two of you let your guard down and as you talk, you hardly notice that some of the gopniks have snuck upon you.');
    // TODO-QSP: dynamic text: "Ohhh, what is this I hear? <<$pcs_nickname>> and Sonia exchanging tips on how t...
    scene.text(`"Ohhh, what is this I hear? ${((s as any).pcs_nickname ?? 0)} and Sonia exchanging tips on how to suck a cock properly?" Vitek says to the others as they laugh.`);
    scene.text('The two of you throw a quick look at each other, afraid of what might happen next.');
    scene.actions([
      { label: 'What do you want?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('Just as you\'re about to say something back, you feel something bumping your leg. It\'s Sonia discreetly shaking her head, telling you not to engage with them.');
    scene.text('You look at her with a reassuring glance. "What do you want, Vitek? Just leave us alone. We\'re not bothering anyone and we\'ve made sure we stay out of everyone\'s way."');
    scene.text('Vitek patiently waits for you to finish before he grabs you by the neck and forces you down towards his crotch. "I think this one is ready for a good old fashioned fuck session. Who\'s in?" he asks the others.');
    scene.text('You grunt and moan as you try to break free, but he\'s too strong and easily holds you down.');
    scene.actions([
      { label: 'Let go of me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You yell out, hoping that someone will come to your aid, but to no avail.');
    scene.text('While he\'s holding you down, Vitek turns his attention towards Sonia. "Do you want to help out your little friend here?"');
    scene.text('Sonia, teary eyed, nods. "I\'ll do whatever you want! Just leave her be!"');
    scene.text('"See? Even the whores take care of each other," he grins at his friends. "This gives me an idea. The two of you can give us a little warm-up show and after that, we\'ll decide among ourselves who gets who."');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'pain', '', 5, 'neck', 'pinch');
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('In a moment of bravery, you fight back. "Sonia and I are not your playthings, so go fuck yourself!" you yell.');
    // TODO-QSP: dynamic text: Vitek starts laughing as he tightens his grip around your neck and you let out a...
    scene.text(`Vitek starts laughing as he tightens his grip around your neck and you let out a squeak as the pain becomes unbearable. "What did you say, whore? Forget the foreplay boys, ${((s as any).pcs_nickname ?? 0)} will do fine by herself."`);
    scene.text('The guys all laugh in unison, but just as they\'re about to lead you through the main door, Lena runs up to Vitek and whispers something.');
    scene.text('You see his face turn red as he yells to the rest of his gang to get ready for a fight. "You\'re lucky this time, whore! Next time I won\'t be so nice!" he snarls as he releases you from his grip.');
    scene.actions([
      { label: 'Leave the party', handler: (st: GameState) => {
    scene.img('images/system/image_needed.png');
    scene.text('Once the gopniks hurry off, you glance at Sonia. "We should get out of here before they come back. See you later."');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept your punishment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('"Okay!" you shout. "Just let go of me!"');
    scene.text('A huge grin appears on Vitek\'s face. "And you sweet little Sonia? Are you ready to eat some pussy?"');
    scene.text('Sonia hesitates, but as she sees your pleading eyes, she has no choice but to accept.');
    scene.text('Vitek lets go of you. "Great. Now that that\'s settled, shall we?"');
    scene.text('You both nod and make yourself ready to head over to the restroom. Just as you\'re about to leave, Lena runs up to Vitek and whispers something.');
    // TODO-QSP: dynamic text: You see his face turn red as he yells to the rest of his gang to get ready for a...
    scene.text(`You see his face turn red as he yells to the rest of his gang to get ready for a fight. "I'll take a rain check, ${((s as any).pcs_nickname ?? 0)}!" he yells as he walks away.`);
    scene.actions([
      { label: 'Leave the party', handler: (st: GameState) => {
    scene.img('images/system/image_needed.png');
    scene.text('Once the gopniks hurry off, you glance at Sonia. "We should get out of here before they come back. See you later."');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
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
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You stand by yourself with your back to the wall, trying to draw as little attention to yourself as possible. People pass by, not paying attention to you before you suddenly hear someone shouting your name.');
    // TODO-QSP: dynamic text: "We haven't played with <<$pcs_nickname>> for a while. Let's go and fuck around ...
    scene.text(`"We haven't played with ${((s as any).pcs_nickname ?? 0)} for a while. Let's go and fuck around with her," you overhear Lena tell Vitek. He nods and before you know it, the majority of the gopniks stand in front of you.`);
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>! Sucked many cocks today?" Lena asks as the others laugh. ...
    scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}! Sucked many cocks today?" Lena asks as the others laugh. "She's truly a good piece of ass. Who here hasn't fucked her yet? I'm sure she'll be willing to please you."`);
    scene.actions([
      { label: 'Leave me alone', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('Frightened by the sheer number of people that surround you, you try to plead with them. "I haven\'t done anything to you! Please just leave me alone."');
    // TODO-QSP: dynamic text: They all laugh at your pathetic plea. "Listen here, <<$pcs_nickname>>. <i>We</i>...
    scene.text(`They all laugh at your pathetic plea. "Listen here, ${((s as any).pcs_nickname ?? 0)}. <i>We</i> decide when you've had enough and when to stop!" Lena angrily berates you."`);
    // TODO-QSP: dynamic text: Once again, she turns towards the crowd. "Come on, who here hasn't fucked <<$pcs...
    scene.text(`Once again, she turns towards the crowd. "Come on, who here hasn't fucked ${((s as any).pcs_nickname ?? 0)} yet? Any takers? Doesn't matter if you're male or female, I'm sure ${((s as any).pcs_nickname ?? 0)} is up to it."`);
    scene.text('Vitek steps up to you, grabs you by the neck and forces you down to his crotch while the others laugh loudly. "See! I told you she was willing!"');
    scene.actions([
      { label: 'Let go of me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You push him away. "What\'s wrong with you?!" you yell.');
    scene.text('Vitek just laughs. "You didn\'t complain the last time I fucked you when it got rough, did you?" he asks as he shakes your head.');
    scene.text('You just want it to be over with as you quietly answer. "N-No I didn\'t!"');
    scene.text('You can hear the whispers from the others. "Did you hear that? She just admitted to getting fucked by Vitek…"');
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You try to reason with Vitek and Lena. "Please, just let me go! You\'ve made your point!"');
    scene.text('Vitek sighs and lets go of you. "I thought you would put a bigger fight. It\'s more fun when you try to squirm away."');
    scene.text('Lena starts laughing. "Don\'t believe her lies! She\'s just trying to get away." She walks up to you. "How about you show a little skin for the group?" she says as she grabs hold of your clothes and tries to expose your body.');
    scene.text('You try your hardest to keep Lena at a distance and after a few seconds, she gives up and angrily walks away, pushing away some people standing in the crowd.');
    // TODO-QSP: dynamic text: "That's it! The show is over!" Vitek yells. "Until next time, <<$pcs_nickname>>,...
    scene.text(`"That's it! The show is over!" Vitek yells. "Until next time, ${((s as any).pcs_nickname ?? 0)}," he winks.`);
    scene.actions([
      { label: 'Leave the party', handler: (st: GameState) => {
    scene.img('images/system/image_needed.png');
    scene.text('Once the gopniks hurry off, you glance around. You notice the exchange got a lot of attention, and attention for an outcast is bad. With one final look at the decorations, you leave the party in tears before things get worse.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/newyear/newyear.jpg');
  scene.text('Time seems to have flown by as the music suddenly stops. "Okay everyone, time to go home," one of the teachers says. "I hope that you\'ve all had a great time and I wish you all a happy and safe holiday. We\'ll see everyone back at school once the winter break is over."');
  // TODO-QSP: dynamic text: The students start picking up their stuff and heading for the door before Dimka ...
  scene.text('The students start picking up their stuff and heading for the door before Dimka suddenly gets everyone\'s attention. "Hey everyone! My parents left for the New Year, so you know what that means! Party at my house! Come by at \'+func(\'time\', \'get_time_string\', 18, 0)+\' on New Years Eve, you\'re all invited!" Everyone cheers at the idea of a party without any adults around to make it boring.');
  scene.text('He then looks at the outcasts. "Well everyone except you losers that is," he says with a laugh, which gets several of the other students to join in. He then stops and smirks. "Except you Sonia, you can come. I\'m sure you\'ll show your gratitude one way or another."');
  if (((s as any).NosovRevenge ?? 0) === 1) {
    // TODO-QSP: dynamic text: Dimka walks over to you and looks at the floor. "<<$pcs_nickname>>, you and I ha...
    scene.text(`Dimka walks over to you and looks at the floor. "${((s as any).pcs_nickname ?? 0)}, you and I have had some disagreements before, but I sincerely apologize for my behavior and I hope you'll still come to my party."`);
  }
  scene.text('Everyone then slowly makes their way out of the school.');
  (s as any).InvitationToDimkaNYparty = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterSlut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/system/image_needed.png');
  scene.text('Once in the bathroom, Vasily immediately pulls down his pants. "Suck my cock bitch. I know that you\'ve been anticipating this for the whole party."');
  scene.actions([
    { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snybj.jpg');
    scene.text('You kneel down in front of Vasily and start sucking his cock. After a few minutes, you hear the door open and a few guys from your class wander in. Before you know it, all the boys in your class except Vitek, who was rumored to have already passed out, are surrounding you. You hear someone unzipping their fly and pulling out their cock. Shortly thereafter, the others follow suit.');
    qspCall(s, 'fame', 'pav', 'sex', 60);
    qspCall(s, 'npcStat', 'A11', 1);
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'sub'
    // TODO-QSP: npc_had_sex[$npcID[1]] = 1
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Serve classmates', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snyfilming.jpg');
    // TODO-QSP: dynamic text: You slurp on one cock in your mouth while using your hands to jerk off two other...
    scene.text(`You slurp on one cock in your mouth while using your hands to jerk off two others, casually looking up you see that Dimka has taken out a camera and started filming it all. "Don't worry, ${((s as any).pcs_nickname ?? 0)}. This is for all our private collections. I'm sure no one will spread this video around," he winks.`);
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 1, 1, 0, 0, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 2);
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub'
    // TODO-QSP: npc_had_sex[$npcID[2]] = 1
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 0, 0, 1, 1, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 3);
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[3], 'sub', 'group'
    // TODO-QSP: npc_had_sex[$npcID[3]] = 1
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try to please them all', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snyblowbang.jpg');
    scene.text('You suck more cocks than you can count, constantly changing from one to another while always making sure that you\'re jerking off two others. You completely lose track of how many guys there are. All you know is that they\'re surrounding you and are awaiting their turn as they hold their bare cocks out.');
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 0, 0, 1, 1, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 4);
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[4], 'sub'
    // TODO-QSP: npc_had_sex[$npcID[4]] = 1
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 1, 1, 0, 0, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 5);
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[5], 'sub', 'group'
    // TODO-QSP: npc_had_sex[$npcID[5]] = 1
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep doing it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snyblowbang2.jpg');
    scene.text('Some of them grow tired of waiting and start slapping their cocks against your head and face as they wait for your mouth or one of your hands to become available. By now, you\'re starting to feel fatigued and your mouth and arms are already getting tired.');
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 1, 1, 0, 0, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 6);
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[6], 'sub'
    // TODO-QSP: npc_had_sex[$npcID[6]] = 1
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 0, 0, 1, 1, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0), 7);
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[7], 'sub', 'group'
    // TODO-QSP: npc_had_sex[$npcID[7]] = 1
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Struggle through', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snyblowbang3.jpg');
    scene.text('Your jaw starts to ache from sucking so many cocks, but the guys aren\'t easing up as they continue to pile on. You look at them pleadingly, but they just turn away as they tell you that they won\'t fall for your tricks as everyone knows that you\'ve done this many times before.');
    qspCall(s, 'gschool_events', 'rand_boy_arg1', 1, 1, 1, 1, 0, 0);
    qspCall(s, 'npcStat', '', ((s as any).school_static_num ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang');
    ((s as any).npc_had_sex ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/newyear/sex/snycum.jpg');
    scene.text('Just as you\'re about to break, you finally feel one of them twitch inside your mouth and he cums. All of a sudden, you feel another shoot his load onto your face and so begins the rest of them. It\'s like everyone waited for the first one to finish just so they wouldn\'t last the shortest time. By the time the last one finishes, you have lost count of the amount of cum you have either swallowed or have trickling down your face.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    // TODO-QSP: gs 'cum_call', 'face', $npcID[1], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID[2], 1
    // TODO-QSP: gs 'cum_call', 'face', $npcID[3], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID[4], 1
    // TODO-QSP: gs 'cum_call', 'face', $npcID[5], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $npcID[6], 1
    // TODO-QSP: gs 'cum_call', 'face', $npcID[7], 1
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
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

function enterDrinkMore(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/newyear/punch.jpg');
  scene.text('You refill your cup with some of the spiked juice. Again, it isn\'t too bad and tastes slightly better with each swig. You\'re starting to feel the effects of the vodka though.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).alko = ((s as any).alko ?? 0) + (5);
  qspCall(s, 'stat', '');
  if (((s as any).grupTipe ?? 0) === 5) {
    scene.actions([
      { label: 'Go stand against the wall alone', goto: ['nyp_school', 'outcast'] },
    ]);
  } else {
    scene.actions([
      { label: 'Drink some more', goto: ['nyp_school', 'drink more'] },
      { label: 'Hang out with the cool kids and jocks', goto: ['nyp_school', 'cool jocks'] },
      { label: 'Hang out with the nerds', goto: ['nyp_school', 'nerds'] },
      { label: 'Hang out with the gopniks', goto: ['nyp_school', 'gopniks'] },
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cool jocks':
      enterCoolJocks(s, scene);
      break;
    case 'nerds':
      enterNerds(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    case 'outcast':
      enterOutcast(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'slut':
      enterSlut(s, scene);
      break;
    case 'drink more':
      enterDrinkMore(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nyp_school: LocationDef = {
  name: 'nyp_school',
  title: 'You notice what you think are all your classmates from schoo',
  region: 'other',
  enter: enter,
};
