import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
        { label: 'Refuse the drink', handler: (st: GameState) => {
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
    // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Igor walks over and offers yo...
    scene.text(`As you're hanging out and chatting with the girls, Igor walks over and offers you his hand. "Come dance with me, ${((s as any).pcs_nickname ?? 0)}."`);
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
      // TODO-QSP: dynamic text: As you're hanging out and chatting with the girls, Katja strikes up a conversati...
      scene.text(`As you're hanging out and chatting with the girls, Katja strikes up a conversation with you. After a few seconds, a song comes on and Katja becomes excited. "I love this song!" she squeals as she turns to you and grabs you by the hand. "Dance with me, ${((s as any).pcs_nickname ?? 0)}!"`);
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
    }
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
  }
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const nyp_school: LocationDef = {
  name: 'nyp_school',
  title: 'You notice what you think are all your classmates from schoo',
  region: 'other',
  description: ['You notice what you think are all your classmates from school here, or at least the majority of them. Most of them are milling about at several tables with tea and sweets laid out. It doesn\'t take long before most of them drift off into their individual cliques, with the gopniks staking claim to the bleachers, sitting and laying about on them, the cool kids and jocks mingling around the tables and the nerds hovering around the edges. The outcasts do their best to stay out of sight, leaning against one of the walls far from the gopniks.'],
  enter: enter,
};
