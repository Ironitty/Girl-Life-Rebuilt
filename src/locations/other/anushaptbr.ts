import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s brother\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
  scene.text('The room is disorganized and untidy. It\'s fairly messy with a lot of clothes scattered about in various piles. Two beds are crammed against opposite walls, leaving an open space in the center. There is a small TV on a stand in the room with a PlayStation console lying partially hidden under some clothes in front of it.');
  if (((s as any).AnushkaLoc ?? 0) === 3  &&  ((s as any).maksimQW ?? 0)?.['QWstage'] === 0) {
    (s as any).maksimQW['QWstage'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('The two of you enter her brothers\' room. They immediately stop doing what they are doing and look towards you in fear and anger. Maksim, the older brother, is 13 or 14, the age when boys start paying attention to girls. Timofey is about a year or two younger.');
    scene.text('Maksim gathers some courage before speaking. "What do you want? Get out of our room!"');
    scene.text('"Calm down. I just wanted to see what you were up to because I know you little shitheads are always up to something!" Anushka quickly replies.');
    scene.text('"Why do you care what we do? Shouldn\'t you be off with your band or sucking some cock?"');
    scene.text('Anushka reaches out and slaps him on the back of the head. "Watch what you say, or I\'ll beat your little ass!"');
    scene.text('He rubs the back of his head. "That\'s what mother always says."');
    scene.text('Anushka fumes. "Fuck that bitch and don\'t listen to her. You better off listen to dad, you little asshole!"');
    scene.text('He just rolls his eyes and ignores her. "Don\'t tell me… Is this one of the famous groupies that we\'ve heard so many stories about?" he asks while looking at you.');
    scene.actions([
      { label: 'Excuse me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s brother\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"What do you mean?" you ask.');
    scene.text('"We hear a lot of great stories about the band and its groupies from Rad," he answers.');
    scene.text('"Don\'t listen to him! He\'s just making most of that stuff up to impress you!" Anushka snaps.');
    scene.text('"Well, at least we can hope this groupie is better than Alyona." Maksim says.');
    scene.actions([
      { label: 'Why\'s that?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s brother\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"She\'s really mean to us! She always beats me up and won\'t play games with us," Maksim says as he looks at you sadly. Timofey nods in agreement.');
    scene.text('"If you stop trying to film her while she\'s taking a shower, maybe she wouldn\'t be kicking your ass, you little pervert!" Anushka interjects.');
    scene.text('"Your brothers are really something else. I guess even boys at this age think with their smaller heads," you reply.');
    scene.text('Anushka nods in agreement. "Yeah, most of them are slaves to their lust, even if they\'re too young to even understand it yet."');
    scene.text('Maksim puffs up. "I\'m not too young!"');
    scene.text('Anushka laughs at him and turns to you. "Maybe I should tell Dad what they\'re up to?"');
    scene.actions([
      { label: 'Laugh', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('The brothers are looking at the two of you in total fear as Anushka continues. "Look at them! They\'re scared shitless!"');
    scene.text('Maksim is fuming with anger and starts yelling. "Get out of our room!"');
    scene.text('When you and Anushka just keep laughing, he and Timofey get up and push you out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).maksimQW['QWstage'] = 1;
    (s as any).maksimQW['nush_games'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('The two of you enter her brothers\' room and they immediately stop doing what they were doing as Maksim gathers some courage. "What do you want?" He notices you and starts staring at your breasts. "I see you brought your groupie with you again."');
    scene.text('"Calm down. I just wanted to see if you were up for a match?" Anushka quickly replies, pointing to the gaming console in their room.');
    scene.text('Maksim glances at his brother for a moment, then back at Anushka. "All of us?"');
    scene.text('She nods. "That\'s the plan. The two of us against the two of you."');
    scene.text('Both of them get excited. "Your friend better be great, because we are getting really good at this game!"');
    scene.text('"You really think you can beat me this time? You got your asses handed to you the last time!" Anushka quickly replies while smiling.');
    scene.text('The boys nod at each other. "This time will be different. We\'re sure we\'ll win!"');
    if (((s as any).AnushkaLoc ?? 0) !== 3) {
      (s as any).temp_brotherroom = Math.floor(Math.random() * 6) + 1;
      if (((s as any).temp_brotherroom ?? 0) === 1  &&  ((s as any).maksimQW ?? 0)?.['QWstage'] === 1) {
        (s as any).maksimQW['QWstage'] = 2;
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        qspCall(s, 'stat', '');
        scene.text('You open the door and look into the brothers\' room. You see the boys sitting and talking about something. Maksim is 13 or 14, the age when boys start paying attention to girls. Timofey is about a year or two younger.');
        scene.actions([
          { label: 'What are you up to?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/brothers.jpg');
    scene.text('"Nothing much really. We were just discussing what kind of band we were going to have when we\'re older," Maksim responds.');
    scene.text('"Oh? So you want to be like your big sister and be in a band too?" you ask.');
    scene.text('Maksim shakes his head. "I don\'t want to be like her, but I do want to be like Radomir. I want to be the band leader and get all the bitches for free. He\'s the best."');
    scene.text('Before you can respond, Timofey cuts in. "Arkadi is the best! Or maybe Valentin because they give us stuff."');
    scene.actions([
      { label: 'What does Valentin give you?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"He\'s pretty cool. He gives us his old video games sometimes. He also has a bike like dad and spends a lot of time with him," Timofey answers.');
    scene.text('"Does he ever let you sit on his bike?" you ask.');
    scene.text('"Yeah, he lets us ride with him sometimes. It\'s so awesome!" Timofey smiles.');
    scene.text('"He doesn\'t let us drink though…" Maksim moans.');
    scene.actions([
      { label: 'Who lets you drink?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"Arkadi!" they both shout. "Just don\'t tell our dad because he\'ll get mad."');
    scene.text('"Don\'t worry. I won\'t tell your dad," you reassure them.');
    scene.actions([
      { label: 'What about Radomir?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"He\'s pretty cool. I want to be like him when I grow up!" Maksim confidently says.');
    scene.text('"Because he\'s a good musician?" you ask.');
    scene.text('"No, because he\'s a pussy magnet! He can get any girl he wants!" he says while giving you his best seductive grin. It\'s laughable at best.');
    scene.text('"That was way too much information for me. I think it\'s time for me to head out. I\'m feeling a bit nauseous." You see a disappointed look on Maksim\'s face.');
    scene.text('As you\'re walking out, Maksim turns to his brother. "Bitches are a ruble a dozen, just like Radomir said!"');
    scene.text('As you close the door, you hear Timofey agreeing. It\'s very likely that he has no idea what he\'s agreeing with, though.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
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
        qspCall(s, 'stat', '');
        (s as any).maksimQW['QWstage'] = 3;
        scene.text('You open the door and look in the brothers\' room. You see them fighting on Maksim\'s bed. They immediately stop when they see you.');
        if (((s as any).temp_brotherroom ?? 0) === 3  &&  ((s as any).maksimQW ?? 0)?.['QWstage'] >= 3) {
          if (((s as any).maksimQW ?? 0)?.['QWstage'] < 4) {
            (s as any).maksimQW['QWstage'] = 4;
          }
          qspCall(s, 'stat', '');
          scene.text('You open the door and look in the brothers\' room. You see Maksim in there alone, playing some first-person shooter on the PlayStation.');
          scene.actions([
            { label: 'Ask where Timofey is', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('"Where\'s your brother?" you ask.');
    scene.text('Maksim gives you an annoyed look. "Why do you care? He\'s probably outside playing in the dirt like a stupid kid."');
    scene.text('You smile. "Why aren\'t you playing with him?"');
    scene.text('"I\'m not a little kid anymore. I\'m practically a grown man!" he tells you.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
      { label: 'Ask if he wants to play', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    if (((s as any).maksimQW ?? 0)?.['blackmail_flash'] > 10) {
      (s as any).maksimQW['blackmail_flash'] = ((s as any).maksimQW['blackmail_flash'] ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 1);
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim_blackmail/naked_video_games.jpg');
      scene.text('You nod while trying not to laugh. "Oh, I see. Do you want to play a game with me then?"');
      scene.text('It looks like he\'s about to say no, but then he smiles. "Okay, but you have to play naked."');
      scene.text('You shake your head. "I don\'t think so." you tell him.');
      scene.text('He grins. "Do it or I will tell Nush you were spying on her."');
      scene.text('You sigh once more being blackmailed by a boy who is barely a teenager, how did you get yourself into this. "Fine!" With that, you strip out of your clothes and pick up one of the controllers. The two of you play a game but you easily beat him, as he spends the whole time staring at your naked body instead of paying attention to the game.');
      scene.text('With him still staring at your naked body you decided you had enough for now. Getting up you get dressed. "Hey you don\'t got to get dressed we can play another game." He says.');
      scene.text('You shake your head. "Maybe some other day." Once you finish getting dressed you leave.');
      qspCall(s, 'arousal', 'flash', 15, 'humiliation', 'sub');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['anushapt', 'hallway'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
      scene.text('You nod while trying not to laugh. "Oh I see. Do you want to play a game with me then?"');
      scene.text('It looks like he\'s about to say no, but then he smiles. "Okay, but only if we make it interesting."');
      scene.text('"Interesting how?" you ask.');
      scene.text('He grins. "If I win, you have to show me your boobs, but if you win, I\'ll tell you a secret about Nush that you don\'t know."');
      if (((s as any).pcs_inhib ?? 0) > 30) {
        // TODO-QSP: act 'Deal (Go easy on Maksim)': gt 'anushaptbr', 'race_maksim_result', 1
      }
      scene.actions([
        { label: 'I don\'t think so', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('You shake your head. "No, I don\'t think so…" you tell him.');
    scene.text('He frowns. "Fine then! Get out of my room. Just get out!"');
    scene.text('You back out of the doorway. "Okay… Okay, I\'m going."');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
        { label: 'Deal', goto: ['anushaptbr', 'race_maksim_result'] },
      ]);
    }
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You open the door and look into the brothers\' room. You see Maksim and Timofey are here, doing whatever it is that boys do. Maksim stares at your breasts for a few seconds before telling you to get lost.');
          scene.text('Timofey looks over at you. "Yeah, get lost. No girls allowed!"');
          scene.text('After that, they just ignore you.');
        }
        scene.actions([
          { label: 'What are you doing?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/browrestle.jpg');
    scene.text('"What are you boys up to?" you ask.');
    scene.text('Maksim blushes. "N-Nothing… G-get out of our room!"');
    scene.text('You walk over to his bed and find a porn magazine lying on it.');
    scene.text('Timofey starts teasing him. "Haha, you got caught by one of Anushka\'s friends looking at the magazine!"');
    scene.text('"Shut up! You\'re just a little kid, so what do you know?!"');
    scene.actions([
      { label: 'Grab the magazine', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('You walk up to them and grab the magazine. Maksim tries his hardest to stop you, but you easily manage to push him away.');
    scene.text('"Give that back! It\'s mine!" he says dejectedly. "It\'s all your fault!" he says as he turns to his brother. "If you could only keep your mouth shut. I can\'t wait to get my own room."');
    scene.text('Timofey just keeps on sneering at his brother.');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"It doesn\'t have to be all bad," you say. "I share a room with my sister."');
    scene.text('"Wow, two girls in one room? That\'s so hot!" Maksim says. "Our sister is the only one with her own room. That\'s so unfair!"');
    scene.text('"She is a girl after all. Wouldn\'t it be awkward if she shared a room with you?" you try to explain.');
    scene.text('"I guess, but she could sleep in the living room, then we could each have our own room!" he says as if that would be totally fair.');
    scene.text('Giving up on reasoning with him, you shrug and turn to the magazine. As you flip through the pages, you realize the boy has some kinky tastes and wonder who might have bought something like this for him. Whoever it was, you figure there\'s no harm in him looking at pictures, so when you reach the end, you throw the magazine back onto his bed. "I won\'t tell anyone your secret, but try to be nice to each other at least."');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'What\'s this all about?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/broroom.jpg');
    scene.text('"Oh don\'t worry. Sometimes I sit and play video games with them. I always beat their asses." Anushka explains.');
    scene.text('"Not this time!" Maksim looks at the two of you determined.');
    scene.actions([
      { label: 'Sit down and play', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/playgamebro.jpg');
    scene.text('The brothers turn away from you and start whispering amongst themselves. They must be planning something.');
    scene.text('"Let\'s play!" Timofey says with a smile.');
    scene.text('The four of you play for several minutes. You really don\'t know what\'s happening because it\'s some shooter game you\'ve never played before. However, Anushka does her best to explain as you play.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/playgamebro.jpg');
    if (((s as any).pcs_gaming ?? 0) <= 20) {
      (s as any).maksimQW['nush_games_win'] = 1;
      scene.text('The game is pretty much over. Both of them are better players than you are. Anushka does what she can, but the brothers easily manage to win the first game, they have a big lead during the second game when Anushka uses her foot to push Maksim off the bed, he manages to get back up. It gives you a chance but Timofey manages to keep you from taking advantage of it, despite Anushka trying to cheat the brothers manage to win again.');
      scene.text('Both brothers jump up and do some weird little victory dance. "Haha, we win and you lose! Even if you did try and cheat, loser!" Maksim taunts.');
      scene.text('Anushka rolls her eyes at their antics. "You just got lucky is all."');
      scene.text('"You suck, you suck!" Maksim chants and Timofey quickly joins in. "Losers, losers!"');
      scene.text('Anushka gets up and shakes her head. "Come on, let\'s go. They\'re not going to stop acting like jackasses anytime soon." You get up and follow her out.');
    } else {
      (s as any).maksimQW['nush_games_win'] = 2;
      scene.text('You start to get a handle on things, and for a while, the game is pretty much a draw with no team getting the upper hand. All of a sudden, however, you make a mistake, and the brothers are about to win. Just as they\'re about to grab their victory though, Anushka uses her foot to push Maksim off the bed. This allows her to secure the win while he\'s trying to recover.');
      scene.text('He immediately starts yelling. "You cheated! You always do this when you\'re about to lose!"');
      scene.text('"Yeah, Nush\'s a cheater!" Timofey chimes in.');
      scene.text('"Don\'t be such a crybaby! I thought you said you were prepared this time?" she says, teasing them with a smile on her face.');
      scene.text('The comment only makes the situation worse, and things escalate. The brothers are now yelling at Anushka and taking it way too seriously. After a while, Anushka gets fed up with them and starts yelling back.');
      scene.text('The door suddenly opens and their dad, Eduard, is standing there. "Knock it off!" he bellows and Anushka and the boys go silent at once.');
      scene.text('"But dad! She cheated again!" Timofey pleads with him.');
      scene.text('"But dad nothing. Weren\'t you supposed to be studying?" Eduard asks.');
      scene.text('"Y-Yes…" both brothers answer.');
      scene.text('"Well get to it!" he says to them, then turns to you and Anushka. "You two get out of their room and stop tormenting your brothers, Nush!" He holds the door open until you both leave, then pulls it shut hard.');
      scene.text('Anushka starts to respond, but Eduard interrupts her. "I don\'t care! Leave them alone so they can study. Take your friend to your room." With that, he turns and goes back to the living room.');
      (s as any).maksimQW['nush_games_win'] = 3;
      scene.text('While it\'s your first time playing, you manage to hold your own, and with Anushka\'s skill, it becomes clear you two have the upper hand. The brothers keep it close, but they fall a little short in both games.');
      scene.text('Maksim throws down his controller and turns on Timofey. "Why are you so bad? We could have beat them if you didn\'t suck so much!"');
      // TODO-QSP: dynamic text: Timofey tries to defend himself. "It's not my fault Nush and <<$pcs_nickname>> a...
      scene.text(`Timofey tries to defend himself. "It's not my fault Nush and ${((s as any).pcs_nickname ?? 0)} are too good!"`);
      scene.text('Before Maksim can respond, Anushka cuts him off. "It\'s not Timo\'s fault. I killed you three times when you kept trying to go through that courtyard. You\'re just mad because you got beat by a girl… Again!" she says teasingly and sticks her tongue out at him.');
      scene.text('Maksim\'s eyes flare at Anushka. "GO SUCK A DICK! THAT\'S ALL <i>YOU\'RE</i> GOOD AT, SLUT!" he screams at her.');
      scene.text('Anushka\'s eyes narrow. "Watch your mouth, you little shit! It\'s just a game!"');
      scene.text('Before anyone can say anymore, the door suddenly opens and their dad, Eduard, is standing there. "Knock it off!" he bellows, and in response, everyone shuts up.');
      scene.text('He looks at Maksim. "Did I just hear you call your sister a slut and tell her to suck a dick?" His voice is low and full of anger. Maksim visibly shrinks under his dad\'s gaze.');
      scene.text('"She was teasing me…" he whines weakly, trying to defend himself.');
      scene.text('Eduard turns and glares at Anushka. "Stop teasing your brothers and go to your room." When she starts to open her mouth, he cuts her off. "I don\'t want to hear it. Go to your room!" With that, she gets up in a huff and does as she\'s told. You follow behind her.');
      scene.text('"What have I told you about calling your sister a slut?" you hear Eduard ask as you leave.');
      scene.text('Maksim\'s voice cracks. "I\'m sorry…"');
      scene.text('The door closes before you can hear any more, leaving you unable to make out anything beyond muffled sounds.');
    }
    if (((s as any).pcs_gaming ?? 0) > 20) {
      qspCall(s, 'mood', 'raise', 'tiny');
    }
    scene.actions([
      { label: 'Go to Anushka\'s room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

export const anushaptbr: LocationDef = {
  name: 'anushaptbr',
  title: 'Anushka\'s brother\'s room',
  region: 'other',
  description: ['The room is disorganized and untidy. It\'s fairly messy with a lot of clothes scattered about in various piles. Two beds are crammed against opposite walls, leaving an open space in the center. There is a small TV on a stand in the room with a PlayStation console lying partially hidden under some clothes in front of it.'],
  enter: enter,
};
