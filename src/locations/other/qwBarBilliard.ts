import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBilliardEngine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pool ?? 0) < 10) {
    (s as any).billwin = (Math.floor(Math.random() * 11) + 0);
  } else {
    if (((s as any).pcs_pool ?? 0) >= 10  &&  ((s as any).pcs_pool ?? 0) < 20) {
      (s as any).billwin = (Math.floor(Math.random() * 13) + 0);
    } else {
      if (((s as any).pcs_pool ?? 0) >= 20  &&  ((s as any).pcs_pool ?? 0) < 30) {
        (s as any).billwin = (Math.floor(Math.random() * 15) + 0);
      } else {
        if (((s as any).pcs_pool ?? 0) >= 30  &&  ((s as any).pcs_pool ?? 0) < 40) {
          (s as any).billwin = (Math.floor(Math.random() * 17) + 0);
        } else {
          if (((s as any).pcs_pool ?? 0) >= 40  &&  ((s as any).pcs_pool ?? 0) < 50) {
            (s as any).billwin = (Math.floor(Math.random() * 19) + 0);
          } else {
            if (((s as any).pcs_pool ?? 0) >= 50  &&  ((s as any).pcs_pool ?? 0) < 60) {
              (s as any).billwin = (Math.floor(Math.random() * 21) + 0);
            } else {
              if (((s as any).pcs_pool ?? 0) >= 60  &&  ((s as any).pcs_pool ?? 0) < 70) {
                (s as any).billwin = (Math.floor(Math.random() * 23) + 0);
              } else {
                if (((s as any).pcs_pool ?? 0) >= 70  &&  ((s as any).pcs_pool ?? 0) < 80) {
                  (s as any).billwin = (Math.floor(Math.random() * 25) + 0);
                } else {
                  if (((s as any).pcs_pool ?? 0) >= 80  &&  ((s as any).pcs_pool ?? 0) < 90) {
                    (s as any).billwin = (Math.floor(Math.random() * 27) + 0);
                  } else {
                    if (((s as any).pcs_pool ?? 0) >= 90  &&  ((s as any).pcs_pool ?? 0) < 100) {
                      (s as any).billwin = (Math.floor(Math.random() * 29) + 0);
                    } else {
                      if (((s as any).pcs_pool ?? 0) >= 100) {
                        (s as any).billwin = (Math.floor(Math.random() * 31) + 0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBilliardEv1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).billiard_ev_var ?? 0) === 1) {
    if (((s as any).billwin ?? 0) > 16) {
      scene.actions([
        { label: 'Win', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolw.jpg');
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'money', 'earn', 2500, 'cash');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('He comes out strong and plays really well, but you play just a tiny bit better and manage to win the round by a hair.');
    scene.text('He seems completely surprised by the fact that you beat him but still congratulates you.');
    scene.text('"How about a rematch?" You tease, to which he laughs and shakes his head: "Nah, I think I\'ve lost enough money for one day."');
    scene.text('You collect your winnings, chat with him for a few more minutes and then part ways.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lose', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pooll.jpg');
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'money', 'pay', 2500, 'cash');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('He had a strong start, but you caught back up to him, matching him ball for a ball for a while. Towards the end, however, he ran the table with precise shots, not only pocketing his balls but also setting them up in ways that blocked yours. You lost, utterly and completely.');
    scene.text('He laughs and says you almost had him, pointing out how lucky he got there at the end to beat you, though you\'re not quite sure it was as close as he makes it sound.');
    scene.text('Still, he offers to play you again for the same amount, so you get a chance to "win your money back."');
    scene.actions([
      { label: 'Play again', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).billiard_ev_var = 1;
      scene.text('"Alright, let\'s play."');
      // TODO-QSP: dynamic text: You ' + iif(bag > 0, 'open your purse', 'reach into your pocket') + ' and pull o...
      scene.text('You ' + ((((st as any).bag ?? 0) > 0) ? ('open your purse') : ('reach into your pocket')) + ' and pull out enough money to lay it down on the table. He grins, racks up the balls and lets you break again as he lays his money down on top of yours.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardEngine(s, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardEv1(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      { label: 'Tell him you don\'t have that kind of money', handler: (st: GameState) => {
    (st as any).PBB_Met = 2;
    scene.text('You shrug slightly and tell him you don\'t have that much money on you. He nods in understanding, then looks around a bit before leaning in close. "We can play for something else, you know…"');
    scene.text('You look at him suspiciously. "Like what?"');
    scene.text('He gives you a relaxed, friendly smile. "If you win, you get the money. And if I win, you give me a blowjob. Sound fair?"');
    if (((st as any).fame ?? 0)?.['city_slut'] < 75) {
      qspCall(st, 'willpower', 'bj', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Not that kind of girl', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Not that kind of girl', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.text('You shake your head and glare at him.');
    scene.text('"Do I look like some sort of cheap whore to you?"');
    scene.text('You don\'t even give him time to respond - you simply turn on your heel and walk back to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
        ]);
      }
    }
    if (((st as any).pcs_inhib ?? 0) >= 20) {
      scene.actions([
        { label: 'You\'re on', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pool2.jpg');
    (st as any).billiard_ev_var = 2;
    scene.text('<i>I can take him</i>, you think to yourself, <i>and even if I can\'t, it\'s just a blowjob.</i>');
    scene.text('With that in mind, you nod your head and tell him he\'s on.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardEngine(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardEv1(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t think so', handler: (st: GameState) => {
    scene.text('The thought of making a wager that might end up with you sucking some random guy\'s cock doesn\'t really bother you in and of itself, but you are not really interest in it either.');
    scene.text('Deciding against it, you tell him: "I think I\'ll pass today. Thank you for the drink and the game, though."');
    scene.text('He seems to notice that you don\'t seem angry or even put off, so he smiles and simply says "See you around" before you leave.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
      { label: 'You\'ve played enough', handler: (st: GameState) => {
    scene.text('You shake your head no.');
    scene.text('"I think I\'ve lost enough money, and I should probably get going anyway."');
    scene.text('"Sounds reasonable," he concurs, "but remember, luck is fickle: My luck can run out any moment."');
    scene.text('"Then maybe it\'ll run out next time. Thank you for the drink and the… expensive company." With that, you return to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).billiard_ev_var ?? 0) === 2) {
      if (((s as any).billwin ?? 0) > 16) {
        scene.actions([
          { label: 'Win', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'money', 'earn', 2500, 'cash');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/poolw.jpg');
    scene.text('He comes out strong and plays really well, but you play just a tiny bit better and manage to win the round by a hair.');
    scene.text('He seems completely surprised by the fact that you beat him but still congratulates you.');
    scene.text('"How about a rematch?" You tease, to which he laughs and shakes his head: "Nah, I think I\'ve lost enough money for one day."');
    scene.text('You collect your winnings, chat with him for a few more minutes and then part ways.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lose', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 2));
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pooll.jpg');
    scene.text('He is good - really good. In fact, you think he has been holding back a bit until now: He rarely misses a shot, sets up obstacles for you, and before long, he has won the game.');
    scene.text('"Guess I\'m getting that blowjob," he says with a smug smile.');
    scene.text('You made that bet willingly but you are getting the distinct feeling that he hustled you…');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolr.jpg');
    scene.text('You shake your head. "I\'m not sucking your dick. You scammed me."');
    scene.text('You turn to walk off, but his eyes flash with anger and he grabs your arm. "You\'re not going anywhere. You made a bet, sweetheart, and you lost, so pay up."');
    scene.text('"Let me go!"');
    scene.text('You try and jerk free but you can\'t, he is much stronger than he looks. Things get a little heated and you both get louder, but before things can escalate, Martin, with his uncanny ability to appear wherever he\'s needed, walks in.');
    scene.text('"You two need to calm down. What\'s going on?" He asks, his tone calm but abrasive.');
    scene.text('The guy speaks quickly before you can even get a word in: "We made a bet and now she is refusing to pay up."');
    scene.text('Martin nods and then looks to you, letting you have your say, so you tell him: "He hustled me and now he wants me to give him a blowjob for losing."');
    scene.text('The guy snorts indignantly and almost yells: "That\'s what you bet! You sure as hell would have taken my money if I had lost!"');
    scene.text('Before the two of you can start shouting at each other again, the bartender raises his hands to silence the both of you, then turns towards you and asks, "Is it true? Did you bet a blowjob against his money?"');
    scene.text('You lower your head to avoid his gaze - not because he would have glared at you but because there was a hint of disappointment in it that you really didn\'t want to see.');
    scene.text('"Yeah, I did," you confess quietly.');
    scene.text('"Alright." Martin pauses for a second. "Leave."');
    if (((st as any).npc_rel ?? 0)?.['A216'] < 20  ||  ((st as any).MartinLie ?? 0) === 1) {
      qspCall(st, 'npc_relationship', 'modify', 'A216', (-1));
      scene.text('You look up and see Martin\'s eyes rest on you. "Leave, now."');
      scene.text('"But-"');
      scene.text('"What about my payout?" The guy protests, but Martin doesn\'t turn to him. That doesn\'t diminish his threat, though:');
      // TODO-QSP: dynamic text: "You shut your mouth or I swear I will stuff it with those pool balls! <<$pcs_fi...
      scene.text(`"You shut your mouth or I swear I will stuff it with those pool balls! ${((st as any).pcs_firstname ?? '')}, go."`);
      scene.text('Not wanting to make him say it once more, you quickly turn and walk towards the exit. Something about the disappointment you saw in Martin\'s eyes doesn\'t sit well with you, though. You got out of giving that blowjob, but you\'re half-wondering if it hadn\'t been better to give so you didn\'t have to admit to Martin that you had taken that bet.');
      if (((st as any).MartinLie ?? 0) === 1) {
        scene.text('It seems that, after having lied to him before, he\'s got a short fuse for when you\'re behaving inappropriately in the bar.');
      }
      scene.actions([
        { label: 'Leave the bar', goto: ['city_industrial', ''] },
      ]);
    } else {
      qspCall(st, 'npc_relationship', 'modify', 'A216', (-2));
      scene.text('You look up and expect to see Martin\'s face, but instead all you see is his shoulder - his eyes are resting on your pool partner who looks back and forth between the two of you incredulously.');
      scene.text('"You\'ve gotta be kidding me."');
      scene.text('"I\'m not. Get out of my bar," Martin insists.');
      scene.text('"I\'m the one who\'s getting screwed here!" The guy yells.');
      scene.text('"Oh please, do you really think I don\'t notice how you chat up anybody who looks like they might not know how to play? Your con may not be the kind the militia would go for but you are lucky I even let you back in here to begin with."');
      scene.text('The guy seems to want to retort, but Martin cuts him off: "So unless you want to find another place to hang out, I suggest you get lost. Now."');
      scene.text('He glares at Martin, then at you, but then angrily grabs his money from the pool table and walks out.');
      scene.text('"Thank you, Mart-"');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>," he cuts you off, "why the fuck would you offer a blowjob a...
      scene.text(`"${((st as any).pcs_firstname ?? '')}," he cuts you off, "why the fuck would you offer a blowjob as a wager?"`);
      scene.text('"I didn\'t! He… suggested it."');
      scene.text('"And you went for it. You took him up on his offer, for what? For some money?"');
      scene.text('"I-"');
      scene.text('"If I offered you money right now," he cuts you off again, "would you get down on your knees and blow me? Huh?!"');
      if ((!((st as any).MartinSex ?? 0))) {
        scene.text('His words hit you surprisingly hard. You\'re not sure if you want to slap him, walk off, or break into tears. Before you can decide, you feel his calloused hand at your chin, forcing you to raise your head and meet his eyes.');
        scene.text('"There are things you shouldn\'t do for money. You\'re not easy, coraz󮬠so don\'t make yourself cheap."');
        scene.text('And with that, Martin walks off, leaving you to contemplate his words and his concern for you.');
        scene.actions([
          { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
        ]);
      } else {
        qspCall(st, 'npc_relationship', 'modify', 'A216', (-1));
        scene.text('"You don\'t have to offer me money for that," you say and put your hand on his crotch.');
        // TODO-QSP: dynamic text: "I know that. But," he seems to be having trouble focusing on what he wants to s...
        scene.text(`"I know that. But," he seems to be having trouble focusing on what he wants to say, "${((st as any).pcs_firstname ?? '')}, not here, not now."`);
        scene.text('For a moment, you wonder how far he would go. Reluctant as he is, you doubt that he\'d go as far as screwing you over the billiard table while there are people in the bar. He seems to be on the verge of agreeing to a blowjob, though, if you are bold or horny enough to push him…');
        (st as any).martinpos = 'I\'ll do it if you want me to';
        qspCall(st, 'willpower', 'bj', 'self');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => String(((st as any).martinpos ?? '') ?? ''), handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '', labelFn: (s: GameState) => String(((st as any).martinpos ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/locations/city/industrial/bar/sex/pool/poolm1.jpg');
    qspCall(st, 'boyStat', 'A216');
    qspCall(st, 'npc_relationship', 'modify', 'A216', 1);
    if (((st as any).pcs_horny ?? 0) >= 80  &&  ((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      scene.text('"Oh, I think you <b>do</b> want it here and now," you say coyly as you unbutton Martin\'s pants, "and I want to, too." You can see him tense, see that he is torn between his own rules and his lust for you, but in that moment your hand reaches into his underpants and your fingers close around his impressive length, the battle is over.');
    } else {
      scene.text('"Are you sure? I would do it if you asked me to."');
      scene.text('The truth is that, as much as you want to push him, you want him to give you that tiny little nudge you need to overcome your own reluctance. And he gives it:');
    }
    scene.text('"Then do it. Suck my dick."');
    // TODO-QSP: dynamic text: Smiling, you get down on your knees, pulling his pants down as you go. You know ...
    scene.text('Smiling, you get down on your knees, pulling his pants down as you go. You know full well that there\'s a room\'s worth of potential audience waiting on the other side of the curtain, so you don\'t waste any time: After a single teasing lick around the tip of his cock, you \' + iif(pcs_hairlng>81, \'brush a particularly annoying strand of your ' + ((st as any).pc_descWordy ?? 0)?.['hair length'] ?? '' + ' out of your face\', \'fish a rogue hair out of your mouth\') + \' and take his ' + ((st as any).dick ?? '') + 'cm ' + ((st as any).dick_girth ?? '') + ' dick into your mouth.');
    // TODO-QSP: dynamic text: You bob your head '+ iif(stat['bj']>20, 'confidently', 'reluctantly, still tryin...
    scene.text('You bob your head \'+ iif(stat[\'bj\']>20, \'confidently\', \'reluctantly, still trying to figure blowjobs out\') + iif(stat[\'bj\']>40, \' and with wild abandon\', \') + \' and run your ' + ((st as any).pc_desc ?? 0)?.['tongue'] ?? '' + ' tongue around it to stimulate him as much as you can.');
    scene.text('You\'re not sure if the prospect of getting caught here with a cock in your mouth terrifies or excites you more, but you don\'t really feel the need to find out which it is.');
    (st as any).orgasm_txt = 'But you do anyway: It\'s the latter. As you unconsciously knead your ' + ((st as any).pc_desc ?? 0)?.['breast'] + ' breasts through your top, the heat between your legs grows and spreads to your belly. You moan around Martin\'s cock as the orgasm overcomes you. You don\'t have to look up to see the self-satisfied expression on Martin\'s face when he realizes that you came from sucking his cock…';
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make Martin come', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolm2.jpg');
    scene.text('You are giving Martin the best blowjob you can, working him over with your mouth, tongue and hand to make him shoot his load quickly. And you seem to be doing something right, cause Martin is starting to tense.');
    scene.text('As Martin groans quietly, moments away from climax, you become acutely aware of the heat between your legs. The forbidden nature of what you\'re doing apparently isn\'t lost on your pussy, regardless of whether your conscious mind is turned on or scared.');
    scene.text('Finally, your latin lover bends his head back as he empties his sperm into your mouth. You double your efforts, licking and sucking even harder.');
    (st as any).orgasm_txt = 'Or at least you try: You moan around Martin\'s cock when the first jet of his ' + ((((st as any).trait_vars ?? 0)?.['cumeater']===1) ? ('tasty ') : ('')) + 'cum lands on your tongue and pushes you over the edge, making it difficult to focus on his pleasure. You think you manage quite well, but you don\'t have to look up to see the self-satisfied expression on Martin\'s face when he realizes that you came from sucking his cock - from him cumming in your mouth, in fact.';
    qspCall(st, 'arousal', 'bj', 2, 'exhibitionism');
    qspCall(st, 'stat', '');
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: When his orgasm subsides, you audibly swallow Martin''s ' + iif(trait_vars['cume...
    scene.text('When his orgasm subsides, you audibly swallow Martin\'s ' + ((((st as any).trait_vars ?? 0)?.['cumeater']===1) ? ('delicious ') : ('')) + 'load and show him your clean tongue. The barkeeper smiles at how ' + ((((st as any).pcs_dom ?? 0)>=30) ? ('bold') : ('shy')) + ' you are about this gesture.');
    scene.text('After that, you quickly return to reality when the sound of breaking glass reminds you of the bar behind the curtain. Martin zips his pants back up and you barely have time to get up on your feet when two guys pull the veil aside, looking to play a game of billiards.');
    scene.text('They seem just as surprised as you to see each other, but they just give Martin a friendly "hello" before the two of you leave. As Martin strides towards the source of the noise you heard, you stay back long enough to hear the guys at the pool table break into wild speculations.');
    scene.text('That was definitely an experience…');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Back off', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A216', 1);
    scene.text('You not and remove your hand from his swelling cock.');
    scene.text('"Okay, if that\'s what you want."');
    // TODO-QSP: iif(pcs_inhib<30, 'You are secretly relieved that he didn''t agree, cause you''re not sure you could...
    scene.text('"It\'s better this way. But maybe we could continue after closing time?"');
    scene.text('"I\'ll see what I can do," you say noncommittally, give him a smile and leave him to calm down.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
        ]);
      }
    }
  } },
      { label: 'Pay up', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poold1.jpg');
    qspCall(st, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    // TODO-QSP: dynamic text: Well, a bet is a bet. If you weren''t willing to do it, you shouldn''t have made...
    scene.text('Well, a bet is a bet. If you weren\'t willing to do it, you shouldn\'t have made the bet. At least that\'s what\'s going through your head as you get down on your knees in front of him. Even being in a separate room and hidden from sight, the fact that everything that\'s between you and a whole bar full of people is a fluttering curtain ' + ((((st as any).trait_vars ?? 0)?.['exhibitionist'] < 1) ? ('terrifies') : ('excites')) + ' you.');
    scene.text('He has his pants unbuttoned in about two seconds and out comes his cock, standing at attention already and revealing his eagerness and anticipation.');
    scene.text('You quickly take it into your mouth and start sucking it for all you are worth, looking to get this over with as quickly as you can. You use your hands to caress his shaft and fondle his balls as you suck his dick, and while could imagine yourself doing more pleasant things, the fact that you are blowing a stranger in public does have a slight effect on you.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Payoff', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poold2.jpg');
    scene.text('It feels like you\'ve only just started when you hear him give a suppressed grunt. You barely manage to open your mouth and pull away as he shoots his load of cum all over your face and into your mouth. He looks down at you as he tucks his dick away.');
    scene.text('"Pleasure doing business with you sweetheart, maybe we can do it again sometime. And I hope you enjoy your… consolation price."');
    scene.text('With a fat grin on his face, he walks off, whistling and very pleased with himself, leaving you covered in cum.');
    scene.text('Maybe billiards just isn\'t for you.');
    qspCall(st, 'arousal', 'end');
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBilliardEv2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).bill_rand ?? 0))) {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolvicart.jpg');
    scene.text('You enter the backroom. As soon as you set foot inside, Jaska\'s friends immediately turn their heads and give you broad grins.');
    if ((!((s as any).Jaska_Friend_Bill ?? 0))) {
      scene.text('"What do we have here? A pretty girl looking to play with us?" Asks one of them');
      scene.text('The other seems to recognize you: "Aren\'t you the girl we saw with Jaska the other night?"');
      scene.text('"Yeah, I guess," you shrug. "Where is he, anyway?"');
      scene.text('"Probably losing more money against people who are better than him," the first one muses and both chuckle. "Are you looking for him?"');
      scene.text('"Not specifically. Just want to play some billiards, so I thought, why not play with you?"');
      scene.text('"If you wanna learn how to play to win, you came to the right people. We\'ll go easy on you."');
      scene.text('You notice how blatantly the other one checks you out but you ignore it as best you can.');
      scene.actions([
        { label: 'Play a round', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 3) + 3));
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 11) + 5));
    (st as any).Jaska_Friend_Bill = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pool2.jpg');
    scene.text('Time flies when you\'re having fun and, as sleazy as the two - they introduce themselves as Artyom and Victor - come across, they are pretty decent company once you get used to their bawdy comments.');
    scene.text('The game ends up being quite close as you take shots on your own while they play together. You end up winning closely.');
    scene.text('"Great shots there at the end," Victor admits.');
    scene.text('"I do what I can", you humblebrag as you lean the billiard cue against the table. "It\'s been fun though."');
    scene.text('"Yeah," Artyom agrees. After the briefest of pauses and quick exchange of glances between the two, he continues: "How about we make it even more fun?"');
    scene.text('The grin they have on their faces reminds you of how they looked at Jaska. "What are you thinking?"');
    // TODO-QSP: dynamic text: "How about a little wager?" Victor suggests, tellingly aware of what his friend ...
    scene.text(`"How about a little wager?" Victor suggests, tellingly aware of what his friend had in mind. "Nothing too insane… ${qspFunc(s, 'money', 'string_price', 500)} each, winner takes all?"`);
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 1) {
      scene.actions([
        { label: 'Sure, let\'s play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 3) + 3));
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 11) + 15));
    qspCall(st, 'money', 'earn', 1000, 'cash');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
    // TODO-QSP: dynamic text: "Sure, I''m game if you are." You rummage through your ' + iif(bag>0, 'purse', '...
    scene.text('"Sure, I\'m game if you are." You rummage through your ' + ((((st as any).bag ?? 0)>0) ? ('purse') : ('pocket')) + ' and put a couple of bills on the table. Your two opponents quickly follow suit and set up the game.');
    scene.text('The following game is close and it\'s clear that Artyom and Victor are very skilled players, but Victor fumbles a shot or two towards the end of the game, which greatly upsets Artyom, and his mistakes are enough to bring you victory.');
    scene.text('"You won, fair and square," Victor admits and hands you your winnings.');
    scene.text('"Thanks. I got lucky, though. I can\'t believe you missed those shots at the end."');
    scene.text('"Me neither," Artyom agrees bitterly.');
    scene.text('Victor gives him a stern look, then leans in and says quietly: "Don\'t mind Artyom. He\'s a sore loser, even though we\'ve been playing for ages. It just doesn\'t happen very often that we come across somebody who\'s as good as you."');
    scene.text('You smile at the compliment and the extra money in your hand. If they play like that every time, you should come here often for easy money.');
    scene.text('But you don\'t say that out loud, of course. You just tell them that you should get going and that you\'ll see them around.');
    scene.text('"We\'ll be here for you," Victor promises as you turn to the curtain.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      ]);
    } else {
      if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
        scene.actions([
          { label: 'Sounds fun - I\'m broke, though', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolvicart.jpg');
    scene.text('"Sounds like fun… but I don\'t have that kind of money on me", you admit.');
    scene.text('Victor gives you a surprised look. "Oh? Well, that\'s a pity."');
    scene.text('Artyom nods gravely. "Shame. You play a lot better than Jaska. Would have been fun to actually be challenged for once."');
    scene.text('"Yeah, well, can\'t be helped," you shrug.');
    scene.text('"Well," Artyom begins, "maybe we could-"');
    scene.text('"Maybe next time," Victor cuts him off. "Want to play another round without a wager?"');
    scene.actions([
      { label: 'Sure, let\'s play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 3) + 3));
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 11) + 5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
    scene.text('You agree to play another friendly match. You cannot help but notice the scowl on Artyom\'s face, and it seems to have very little to do with the fact that you are, once again, coming out ahead at the end.');
    scene.text('Victor once again applauds your skill while Artyom merely gives you an acknowledging nod. Victor seems annoyed at his friend\'s bad mood but doesn\'t let it keep himself from having a friendly chat with you for a few minutes.');
    scene.text('"You know where to find us if you wanna play," Victor emphasizes as you give them your goodbye.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No, I should probably get going."');
    scene.text('Victor gives you a friendly pat on the shoulder. "Alright, take care."');
    scene.text('As you walk out, you cannot help but notice the scowl on Artyom\'s face. It\'s not directed at you but at Victor. Looks like they had slightly different ideas of what was supposed to happen…');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'I don\'t think so', handler: (st: GameState) => {
    scene.text('"Nah, I think one game was enough for the night," you decide. "Maybe another time?"');
    scene.text('Artyom looks like he wants to say something, but Victor quickly interjects: "Sure, another time. You know where to find us. We\'re always happy to have you."');
    scene.text('"See you later," you bid them farewell and return to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).Jaska_Friend_Bill ?? 0) === 1) {
        // TODO-QSP: dynamic text: "Well, look what the cat dragged in. Good to see you, <<$pcs_firstname>>," Victo...
        scene.text(`"Well, look what the cat dragged in. Good to see you, ${((s as any).pcs_firstname ?? '')}," Victor greets you.`);
        scene.text('"You too. Are you guys busy?"');
        scene.text('"Nah, this game was pretty boring," Artyom declares.');
        scene.text('Victor leans in a little closer. "Of course he\'d say that. He was losing."');
        scene.text('"I heard you," Artyom informs him.');
        scene.text('"I know. You were meant to." Victor turns to you. "So, ready to play?"');
        scene.text('"Sure, let\'s do it."');
        scene.text('"Hold on," Artyom interjects. "Are we playing for money? Cause Victor and I were and you interrupted our game."');
        scene.text('You don\'t see any cash on the table, but that doesn\'t have to mean anything. "How much were you playing for?"');
        // TODO-QSP: dynamic text: "<<$func(''money'', ''string_profit'', 1000)>> each."
        scene.text(`"${qspFunc(s, 'money', 'string_profit', 1000)} each."`);
        if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1) {
          scene.actions([
            { label: 'Sure, let\'s play (for cash)', goto: ['qwBarBilliard2', 'VicArt_Ev1_Cash'] },
          ]);
        }
        scene.actions([
          { label: 'I don\'t wanna play for that much', handler: (st: GameState) => {
    scene.text('"I don\'t think I wanna play for that much tonight," you declare.');
    scene.text('"Oh," Victor makes, disappointed. "Well, in that case, you are welcome to watch as I take Artyom to the cleaners."');
    scene.text('"Yeah, right, as if," Artyom retorts.');
    scene.text('"Sounds like fun, but I think I better get going. I don\'t wanna be blamed if either of you loses," you joke.');
    scene.text('"Alright, see you later," they tell you as you return to the main room.');
    scene.actions([
      { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
          { label: 'Sounds fun - I\'m almost broke, though', goto: ['qwBarBilliard2', 'VicArt_Ev1_Broke'] },
        ]);
      } else {
        if (((s as any).Jaska_Friend_Bill ?? 0) <= 3) {
          scene.text('');
          scene.text('Artyom and Victor');
        } else {
          if (((s as any).Jaska_Friend_Bill ?? 0) >= 4) {
          }
        }
      }
    }
  } else {
    if (((s as any).bill_rand ?? 0) > 2) {
      scene.img('images/locations/city/industrial/bar/sex/pool/pool3.jpg');
      scene.text('You enter the backroom. The group of three inside turn to greet you and you strike up a conversation with them as they finish the round they\'ve been playing.');
      if (((s as any).bill_rand ?? 0) > 3) {
        scene.text('You notice a small pile of bills sitting on the edge of the table. It\'s no fortune by any stretch but these guys seem to enjoy a little wager.');
      }
      scene.text('As they set up a new one, they invite you to play with them.');
      scene.actions([
        { label: 'Suggest playing for money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: dynamic text: "How about we make this more interesting?" You suggest. "We could play for money...
      scene.text(`"How about we make this more interesting?" You suggest. "We could play for money. Maybe like ${qspFunc(s, 'money', 'string_price', 250)} each?"`);
      if (((st as any).bill_rand ?? 0) > 3) {
        if (((st as any).pcs_pool ?? 0) >= 60) {
          (st as any).temp = (Math.floor(Math.random() * 4) + 1);
        }
        if (((st as any).temp ?? 0) === 1) {
          scene.text('One of them shakes their head. "I don\'t think so. I know you. You play way too well."');
          scene.text('"Yeah, I don\'t think I wanna play for money with you either," another one agrees.');
          scene.text('"Suit yourselves," you shrug and turn to leave. Pity.');
          scene.actions([
            { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
          ]);
        } else {
          qspCall(st, 'money', 'pay', 250, 'cash');
          qspCall(st, 'stat', '');
          scene.text('"Sure," one of them agrees and his friends nod, "we can do another match for cash."');
          scene.text('Without further ado, they set up the table again.');
          scene.actions([
            { label: 'Play to win', goto: ['qwBarBilliard', 'billiard_money'] },
          ]);
        }
      } else {
        scene.text('Your suggestion seems to be making them really uncomfortable.');
        scene.text('"It\'s been a long day," one of them explains, "and I don\'t think any of us are really up for a wager tonight, even if it\'s a small one. We\'d rather just have a good time, no risk involved."');
        scene.actions([
          { label: 'Have a friendly match instead', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 1));
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 11) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).temp = (Math.floor(Math.random() * 4) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
    scene.text('You agree to playing a friendly match instead, though you have to admit you would have liked to maybe make a little money this way.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardFriendly(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Sounds boring - Return to the bar', goto: ['qwbarPolet', ''] },
        ]);
      }
    }
  } },
        { label: 'Suggest a friendly match', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 1));
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 11) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).temp = (Math.floor(Math.random() * 4) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
    scene.text('You suggest playing a friendly match and they agree to keep money out of this.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBilliardFriendly(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBilliardFriendly(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp ?? 0) <= 2) {
    scene.text('The following match is slow but enjoyable, thanks to the cheerful conversation you are having with the guys as you wait for whoever\'s turn it is to take their shot.');
    if (((s as any).temp ?? 0) === 1) {
      qspCall(s, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 1));
      scene.text('But you and the guys end up trying to do trick-shots to impress each other. Most of them fail spectacularly but those that work are quite impressive.');
    } else {
      scene.text('As it turns out, the guys are pretty terrible at billiards. You don\'t exactly play like a champ yourself but their shots are remarkably badly aimed. That would have been a great boost in confidence if you didn\'t catch two of them staring at your ass as you bent over for your final shot - maybe they were just distracted?');
    }
  } else {
    scene.text('The match is friendly and remains close until the end. It\'s one of those games that starts off friendly but gets more tense and engaging as you take turns.');
    if (((s as any).temp ?? 0) === 3) {
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('Which makes it even more satisfying when your opponents miss their final shot and you end up winning by a hair.');
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('Which makes it a little frustrating when your opponents perfectly aim their final shot and win, your own victory just one shot away. That\'s what you get for feeling competitive.');
    }
  }
  scene.text('Either way, it was great fun and you quite enjoyed playing.');
  scene.text('Another small group of people enters the backroom just as you and your newfound acquaintances finish up. With a few friendly words, you return to the main room and part ways.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
  ]);
  scene.build();
}

function enterBilliardMoney(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'pool', (Math.floor(Math.random() * 4) + 1));
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/locations/city/industrial/bar/sex/pool/pool4.mp4');
  scene.text('You give it your best shot. True, there\'s not a lot of money riding on this, but losing money is never fun.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBilliardEngine(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).billwin ?? 0) >= 8) {
    qspCall(s, 'money', 'earn', 500, 'cash');
    qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * 16) + 5));
    // TODO-QSP: dynamic text: Lady Luck seems to be smiling on you tonight - you end up ' + iif(pcs_pool>50, '...
    scene.text('Lady Luck seems to be smiling on you tonight - you end up ' + ((((s as any).pcs_pool ?? 0)>50) ? ('comfortably') : ('closely')) + ' winning the game.');
    scene.text('Your opponents look disappointed but remain friendly as they hand over your winnings.');
    // TODO-QSP: dynamic text: Understandably, they don''t feel like playing another round, so you all return t...
    scene.text(`Understandably, they don't feel like playing another round, so you all return to the main room together. Still, ${qspFunc(s, 'money', 'string_profit', 500)} isn't a bad turnout for half an hour's work.`);
  } else {
    qspCall(s, 'money', 'pay', 250, 'cash');
    qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 16) + 5));
    // TODO-QSP: dynamic text: Luck really wasn''t on your side this time: You ' + iif(pcs_pool>50, 'give them ...
    scene.text('Luck really wasn\'t on your side this time: You ' + ((((s as any).pcs_pool ?? 0)>50) ? ('give them a run for their money but end up fumbling several critical shots') : ('are getting absolutely destroyed by them')) + ' and have to admit defeat.');
    scene.text('You commend them for their skill as you hand over the cash, since you don\'t wanna be a sore loser, but you don\'t really feel like playing another round with them.');
    // TODO-QSP: dynamic text: Since they also have to leave, you return to the main room with them where you p...
    scene.text(`Since they also have to leave, you return to the main room with them where you part ways, ${qspFunc(s, 'money', 'string_price', 250)} poorer than half an hour ago.`);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the bar', goto: ['qwBarPolet', 'bar'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'billiard_engine':
      enterBilliardEngine(s, scene);
      break;
    case 'billiard_ev1':
      enterBilliardEv1(s, scene);
      break;
    case 'billiard_ev2':
      enterBilliardEv2(s, scene);
      break;
    case 'billiard_friendly':
      enterBilliardFriendly(s, scene);
      break;
    case 'billiard_money':
      enterBilliardMoney(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const qwBarBilliard: LocationDef = {
  name: 'qwBarBilliard',
  title: 'You enter the backroom. As soon as you set foot inside, Jask',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
