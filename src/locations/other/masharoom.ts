import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 20) {
    scene.actions([{ label: 'Continue', goto: ['masharoom', 'masha'] }]);
  }
  scene.img('images/characters/city/masha/r1.jpg');
  scene.text('This is Masha\'s room. It is a huge room with many kinds of sex toys and accessories.');
  scene.text('Masha is not here at the moment, but she left the door slightly ajar.');
  scene.actions([
    { label: 'Wait an hour', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['masharoom', 'start'] },
    { label: 'Trying on outfits', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/characters/city/masha/sex/r2.jpg');
    scene.text('You see a row of sexual fetish outfits and latex outfits, three of them are about your size. Since no one is around it wouldn\'t hurt to try one of them on.');
    scene.actions([
      { label: 'Wear the latex mini skirt and hose.', goto: ['masharoom', 'masha'] },
      { label: 'Wear the leather corset and panties.', goto: ['masharoom', '1'] },
      { label: 'Wear the latex corset, stockings, leather collar and bondage cuffs.', goto: ['masharoom', '2'] },
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['shop_erotomaniac', 'podval'] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['shop_erotomaniac', 'podval'] },
  ]);
  scene.build();
}

function enterMasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/masha/r0.jpg');
  scene.text('This is Masha\'s room. It is a huge room with many kinds of sex toys and accessories.');
  scene.text('You find Masha lying half naked on the bed.');
  if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Walk Masha on a leash', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/characters/city/masha/sex/r30.jpg');
    scene.text('You put a collar and leash on Masha and go out the back door onto the street. Masha doesn\'t seem to even be ashamed that someone could you leading her around by a leash, while she follows behind you on all fours. She plays the part of a dog being taken for a walk, she rubs her head against you and even licks your shoes.');
    scene.actions([
      { label: 'Make her sweep the street', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r31.jpg');
    scene.text('You give her a broom and tell her to sweep the street. Masha quickly jumps and starts diligently sweeping the street.');
    scene.actions([
      { label: 'Compliment', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r32.jpg');
    scene.text('"Well done, good girl, here is your reward." With these words, you strapped on a thigh dildo. Masha quickly came to you and turned around, then carefully impaled her pussy on the dildo. You stood there with your leg cocked out slightly, while Masha humped the dildo strapped to your thigh. A few minutes later Masha started squirming and moaning as she cums, she quickly jumped off the dildo and knelt down, catching her breath she carefully licked all her juices off the dildo cleaning it, then she started to lick your shoes. "Lets go home" you said gently pulling on the leash.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Punish', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r33.jpg');
    scene.text('"Bad, very bad you should be punished" with those words you took the broom from her. "Bend over!" you commanded, Masha obediently turned around and bent over. You began to spank her buttocks with the broom, as hard as you can, after a few hits you notice that tears stream down her face, but she continues to stand silently, suffering the blows. When you have finished spanking her, her ass was crimson red, Masha quickly dropped to all fours and cautiously approached you and began to rub on your feet, with her face. "Okay, let\'s go home" you said patting her head, Masha immediately perked up and went happily with you.');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Play with a candle', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r34.jpg');
    scene.text('You order Masha to start licking your pussy, she immediately drops to her knees in front of you. Her tongue slides into your pussy and she expertly begins lapping at your clit, very quickly she nearly brings you to an orgasm. You pull her up by her leash and order her to insert a candle in place of the strapon dildo on your harness. Masha fiddles a little with the candle a before she finally gets it seated in place well for you.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Order to suck', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r35.jpg');
    scene.text('You order her suck the candle and she passionately begins sucking it furiously. A few minutes later you get tired of it.');
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drip wax into the mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r36.jpg');
    scene.text('"And now I\'m going to cum in your mouth." With these words, you lite the wick of the candle. Masha without waiting for your orders kneeled down in front of you, her mouth directly under the end of the candle, she opened her mouth wide and stuck out her tongue. Th wax began to melt and drip it into her mouth. Masha catches every drop, while her whole body shook with pain, but she continued. Soon you noticed that her hands were clenched against her thighs, she was shaking with pain and as another drop fell into her mouth she started to cry, tears streaming down her face. You move the candle away from her mouth and put the candle out. "Ok that\'s enough, good girl."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Drip wax on her chest', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r37.jpg');
    scene.text('"And now I\'m going to cum on your chest, lie down." With these words, you lite the wick of the candle. Masha without waiting for your orders quickly laid down on the floor, you straddled her stomach. The hot wax started to drip onto her chest, each drop making her shudder and moan. Every time a drop fell on a nipple, her body shook harder and you started to try and aim for her nipples. Soon your pussy was very wet, and her whole chest is covered in wax, so the remaining drops are no longer causing her pain.');
    scene.actions([
      { label: 'Give her to lick', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r38.jpg');
    scene.text('You took off the makeshift strapon and moved so you were straddling her face in a 69 position. Masha immediately went into motion with her tongue on your pussy. It didn\'t take her long, you were so excited and with in a few seconds an orgasm rocked your body and you covered her face in your pussy juices.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Meet each other', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r39.jpg');
    scene.text('You took off the makeshift strapon and moved so you were straddling her face in a 69 position. Masha immediately went into motion with her tongue on your pussy. You returned the favor and went to work on her pussy, both of you where so excited that with in a few seconds you both orgasmed hard.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/masha/sex/r40.jpg');
    scene.text('You light the candle and told her to get on all fours, you straddle her back with the candle facing her ass, soon the melted wax began to drip onto her buttocks. The wax drips flows down her ass and into the crack of her ass, with every drop, Masha wails, but does not even try to pull away. A few minutes later her buttocks are covered with a layer of wax.');
    scene.actions([
      { label: 'Enter into it', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r41.jpg');
    scene.text('You extinguish the candle and stood rubbing the end of the candle till it smoothed out and rounded the tip of it. Masha was still on her hands and knees waiting for your instructions. Once the candle had finished cooling you, knelt down behind her and rubbed it against her pussy. You notice at once she is soaking wet, with her wetness running down her inner thighs, nothing excites her more than pain. You grin and rub the tip of the candle all against her pussy lips and the side of the candle against her thighs, coating it with her pussy juices as much as you can. Then you line the candle up against her asshole and push it into her ass, she starts moaning and squirming at once. You start fucking her as hard as you can, while slapping her ass with your hand. This causes her to howl in pain and she quickly goes limp as she orgasms hard. You pull the make shift candle dildo out of her ass and she looks up at you with a beatific smile on her face.');
    qspCall(s, 'arousal', 'anal_strap_give', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Order lick', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r27.jpg');
    scene.text('You lie on the couch and beckon Masha to you as you spread your legs. Commanding her you say "Lick" Masha immediately crouches lips against your crotch, you pull on her leash, pulling her face even more into your pussy. Her tongue laps at your pussy, caressing the clitoris, and penetrating your vagina with her tongue, you\'ll soon feel like your about to have an orgasm.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r29.jpg');
    scene.text('You get up and stand on the sofa, with your legs spread. You pull on her leash and guide her face back to your crotch, her tongue immediately seeks out your pussy and she goes back to work. Just a few deft movements of the tongue and you orgasm, your juices flowing into her mouth.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Ordered to lick ass', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r28.jpg');
    scene.text('You turn over and get up on all fours, letting the leash go you reach back and spread your ass cheeks. You feel her face pressed against your ass almost at once, her tongue licking your ass hole and quickly you feel her tongue slide inside your ass. After a couple of minutes of such manipulations you orgasm.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play a little', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r42.jpg');
    scene.text('You go up to Masha and hugged her from behind start rubbing her breasts, your fingers go to her nipples, first pulling them tight squeeze then turning them in different directions. Masha moans and humps her butt back against you.');
    qspCall(s, 'arousal', 'foreplay_give', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue to play with breast', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r44.jpg');
    scene.text('You lay back on the bed and order her to kneel at your feet. You lift up your heels and grinding them against her nipples, at first softly and slow, but then harder and harder. The harder you get the more she moans.');
    qspCall(s, 'arousal', 'foreplay_give', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her pussy', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 3) + 49;
    scene.img(`images/characters/city/masha/sex/r${((s as any).picrand ?? 0)}.jpg`);
    scene.text('You grab the whip from the table and plunge the handle into her pussy and start fucking her hard with it, she starts screaming and moaning, she quickly has an orgasm.');
    qspCall(s, 'arousal', 'anal_dildo_give', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r64.jpg');
    scene.text('You lay down and she knows what to do, she keeps up and works on you with her tongue until you orgasm as well.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Breast play', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r45.jpg');
    scene.text('You grab her by the hair and pull her to your breasts. Masha licks, kisses and sucks on your nipples.');
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pussy play', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 3) + 46;
    scene.img(`images/characters/city/masha/sex/r${((s as any).picrand ?? 0)}.jpg`);
    scene.text('You order Masha to lick your pussy and she puts her tongue to work on your pussy, her nimble tongue nearly brings you to orgasm with in a few minutes.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let continues', handler: (st: GameState) => {
    scene.text('You did not stop her and a few seconds an orgasm rocks your body, leaving you quivering.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Mark strapon', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 2) + 53;
    scene.img(`images/characters/city/masha/sex/r${((s as any).picrand ?? 0)}.jpg`);
    scene.text('You tell her to and order her to bring you the strapon, Masha hurries to bring it to you and helps you put it. When you are wearing the strapon, you immediately plunge it into her mouth and start fucking her mouth, Masha begins to suck it as if it was a real dick.');
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In pussy', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 6) + 57;
    scene.img(`images/characters/city/masha/sex/r${((s as any).picrand ?? 0)}.jpg`);
    scene.text('You get bored fucking her mouth and pull it out, you move her to a better position and plunge the full shaft of the dildo into her pussy and you start hammering her. Masha moans and actively humps against you as you fuck her, soon her body starts to spasm and she has a screaming orgasm.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'In the ass', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 2) + 55;
    scene.img(`images/characters/city/masha/sex/r${((s as any).picrand ?? 0)}.jpg`);
    scene.text('You get bored fucking her mouth and pull it out, you move her to a better position and plunge the full shaft of the dildo into her anus. You have a bit of trouble forcing it into her ass, as the only lubricant is her saliva, but you not only manage to get it fully in, but you shove the full length of the shaft deep into her ass. You begin to jack hammer her ass, she humps back against you fucking her, with cries of both pain and pleasure. It doesn\'t take long until she starts having a screaming orgasm.');
    qspCall(s, 'arousal', 'anal_strap_give', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Let caresses your pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r43.jpg');
    scene.text('You take her hand and pull it to your pussy, Masha started stroking your clit and fingering your pussy. Her nimble fingers almost brought you to orgasm');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let continues', handler: (st: GameState) => {
    scene.text('You did not stop it, and a few seconds later your body shudders from an orgasm.');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Order to take a dildo', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r52.jpg');
    scene.text('You tell Masha to use a dildo. She takes it and slips it into your pussy. You do not require a lot of time, a few minutes later came. When you are finished, Masha took the dildo from you and started to suck your pussy juices from it, while her other hand masturbated her pussy until she orgasmed.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['shop_erotomaniac', 'podval'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/masha/sex/r3.jpg');
  scene.text('Wearing some latex lingerie, you feel someone watching you. Carefully turning your head, you see that the door is not completely closed, and through the crack a man is watching you.');
  qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Close the door [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Close the door [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['masharoom', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Tease', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r4.jpg');
    scene.text('You sit back and legs spread wide, so your crotch is visible from the door, running your hand into your panties, you start rubbing your clit. Soon your hear the sound of a zipper and heavy breathing coming from the door.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You continue to massage your clitoris, fingering your pussy, and the realization that someone is watching you only strengthens your arousal leading to rapid orgasm. When you have finished, you hear a grunt and see a spurt of liquid, you can only assume is cum hit the floor.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'exhibitionism', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Call him', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Unknown peeper', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/characters/city/masha/sex/r5.jpg');
    scene.text('"Hey, you want to come have a lick?" you asked looking at the door. It was quiet for a few seconds, but soon the door creaked, it was a nerdy college boy, he stood on the verge of not knowing what to do.');
    scene.text('"Well do you want to lick my pussy or would you rather stand there and just watch? As a bonus if you lick me really good, I will jerk you off." you said, looking at him with a satisfied smile.');
    scene.text('The guy finally decided to come to you and knelt down and began to lick your pussy, his movements were not nimble, but clumsy, he hardly keeps you excited, it is obvious he has very little experience with girls.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let licks ass', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r6.jpg');
    scene.text('You move and turn around and bend over. You don\'t know if he just doesn\'t know what he is doing or is missing, but instead of licking your pussy more he starts licking your asshole instead. This really isn\'t doing it for you and you are starting to regret calling him in now, you could have already had yourself off by now.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell him to fuck you', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/characters/city/masha/sex/r8.jpg');
    scene.text('Feeling a bit frustrated you tell him. "Just fuck me already." At those words he hastily takes off his pants and wastes no time at all. His cock went straight to and into your pussy. At least he seems to know the correct hole to fuck you in. You are just starting to enjoy it, when he grunts and starts cumming inside of you. Two pump chump indeed. "For fucks sake, are you really are worthless at pleasing a girl, get the fuck out." He grabs his pants and runs out with out even putting them back on.');
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', '', '', 'Unknown peeper');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Punish', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r9.jpg');
    scene.text('"Stop." He stops licking you and you turn around and open your mouth, he gets all excited and before you can do much more he jams his cock in your mouth and starts trying to fuck your mouth. You suck on him for a moment, letting him enjoy it but then you grab him by the balls and squeeze them hard until he cries out in pain. "Ah! that hurts please stop doing that." He begs you.');
    scene.text('You pull your head away from his dick and keep squeezing his balls."I decided how I will suck you, you don\'t get to decided. Just be grateful a girl is willing to suck you off at all. Now get out of my sight." You jerk his balls down and he drops to the floor in pain, after you let go he grabs his pants and starts to get up, but before he can you kick him from behind in the balls. He groans in pain and rolls on the floor, slowly getting up and scurrying to the door, in fear, trying to get out of the room before you hurt him more.');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Sit on face', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r7.jpg');
    scene.text('When you are tired of his inept actions and decided to take matters into your own hands, so to speak and commanded the guy to lay down. He quickly lays down on his back, obviously expecting your to please him, but you sit on his face and began grind your pussy against his face. The guy is trying to help you with his tongue, but could not get into a rhythm, finally you grab his hair and keep him from trying to move his head around and you rub yourself off on his face. After a few minutes you manage to cum, getting off him you see his face is drip drops of your juice.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r10.jpg');
    scene.text('You turn around, still straddling his face and bend over till you can take his cock in your mouth. You barely even have time to stroke his cock with your lips a couple of times when you feel his hot cum spurting into your mouth. You pull your head away and spit the cum out on his stomach and get off. "Get out!" He quickly grabs his pants and rushes out.');
    qspCall(s, 'arousal', 'bj', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'Unknown peeper');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Straddle him', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/characters/city/masha/sex/r11.jpg');
    scene.text('You move down to straddle his cock, you barely even get his dick into you when you feel him already cumming. You jump off but all you manage to do is end up with his cum in your pussy and all over the outside of it and your inner thighs. You get off him in disgust and point at the door. "Get the fuck out." He quickly grabs his pants and runs out of the room.');
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'labia', 'Unknown peeper');
    qspCall(s, 'cum_call', '', '', 'Unknown peeper');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r12.jpg');
    scene.text('You get off him and take his cock in your hand and start to jerk him off, it only takes a couple of jerks and he is cumming all over your hand and himself. Wiping your hand off on him, you point at the door. "Get the fuck out." He quickly grabs his pants and runs out of the room.');
    qspCall(s, 'arousal', 'hj', 10, 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'hands', 'Unknown peeper');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Boob job', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r13.jpg');
    scene.text('You squeezed his cock between your breasts and stroke him with your breasts, after a few seconds, you feel his hot cum spurtting all over your breasts.');
    qspCall(s, 'arousal', 'titjob', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r14.jpg');
    scene.text('You tried to pull away from him, but it was too late his cock spurted semen jet quite powerful and sperm manages to hit you in the face around your mouth and he keeps cumming, it gets all over your breasts, face, hands and even on his own stomach. Once he stops cumming you point at the door. "Get the fuck out." He quickly grabs his pants and runs out of the room.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'breasts', 'Unknown peeper');
    qspCall(s, 'cum_call', 'face', 'Unknown peeper');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
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

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Unknown dom', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/city/masha/sex/r20.jpg');
  scene.text('Trying another outfit with leather hand cuffs you click them into place and together and you hear them click. You thought they just snapped and unsnapped together but as you try and pull the fasteners apart they won\'t unclick. You frantically began trying to break free so you didn\'t notice the man walking in as you were trying to undo the cuffs, only when he clipped the leash on the collar you were wearing. At first you were happy, thinking Masha had returned, but as you turn around you see he has a hard look in his eye and holding a wooden paddle in his hand. "I see you got all dressed up and ready for me, now let\'s play." He says in a menacing tone.');
  scene.text('"Please help me take this off." showing him your cuffed hands as you beg him to take them off. "Shut up bitch, a slave should not speak without permission of the owner, get on your knees and open your mouth, quickly." he shouted.');
  scene.actions([
    { label: 'You keep asking for release.', handler: (st: GameState) => {
    (s as any).pcs_makeup = 0;
    ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
    scene.img('images/characters/city/masha/sex/r21.jpg');
    scene.text('You don\'t move and shake your head. "Look this is a mistake, just please take these off me." He gives you a glare. "Oh, you unruly bitch. Now I\'ll teach you to obey, your master." With these words he grabs you and flings you onto the couch. You start to get up but he pushes you back down on all fours, he slips a blindfold on you. He brings the paddle down on your ass with a loud smack. Causing you to yelp and jump, but he holds onto leash keeping your from getting away.');
    scene.text('"Now I can beat you until you obey and then do what I want, or you can be a good little slave and do as your told. I am good either way." he says as he smacks your ass with the paddle again.');
    scene.text('You yelp loudly again. "I could scream." you inform him. He laughs as you feel the head of his dick pressing against your asshole.');
    scene.text('You hear him spit and feel it land on the crack of your ass, he works his spit between the tip of his dick and your asshole. "Please do, I love it when bitches scream and cry. The more you talk the worse this is going to be for you." With out further words and with only that little bit of spit as lubrication he forces his cock into your ass.');
    scene.text('You scream in pain as he forces his nearly dry cock into your ass. Tear immediately start to run from you eyes from the pain, it feels like he is ripping your asshole. With a few grunts and more than a bit of struggling he works himself about halfway into you and starts fucking your ass.');
    scene.text('"Please stop or at least use some lube." You beg him, he reaches up and grabs your hair and yanks your head back painfully. "What the fuck did I tell you slave, don\'t speak unless spoken too, now I have to hurt you more."  With those words and pulling painfully on your hair he shoves his cock balls deep into your ass and starts hammering your ass. You cry and whimper but can\'t pull away as he nearly dry fucks your ass balls deep. He hammers into you, obviously enjoying your pain.');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'bound', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tolerate', handler: (st: GameState) => {
    scene.text('Not knowing what else to do, you do your best to tolerate his rough dry fucking of your ass. Since true to his word every time you said anything or resisted he just made it worse. So you silently cry as he dry fucks your ass, what little lubricant there was from his spit is long gone. He fucks you for a long time, so long that your sobs no longer have tears, you have long since used up all your tears, yet a small part of if you is loving it, despite all the pain. What felt like hours later he finally shots his load deep in your ass. You feel the hot spurts of his cum filling you up. "Next time do as you\'re told you submissive bitch or it will be a lot worse, either I or someone else will teach you a lesson that will make you remember this fondly. I\'ll make sure to tell the others your down here." He said with a laugh and then left, he didn\'t even undo the cuffs. You limp over to the door and close it in case he was serious about sending down more men. It takes you a bit to finally get yourself lose.');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'bound', 'rough');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'anus', 'Unknown dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
      { label: 'Ask for release', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r22.jpg');
    scene.text('"Please enough, let me go" you cried. "There\'s no way you\'ll understand your place, if you keep using that mouth to talk." With that he pulled out of your ass and relief flood you, hoping he is planning on releasing you, you hear him walking around. Then you feel a sharp pain on your ass, as he smacks you with the paddle hard again. You open your mouth to cry out, only to have his cock shoved in your mouth. You can taste your own ass still on his cock, he pulls the leash tight so you have no choice but to suck his dick. He fucks your mouth and throat, jamming his cock balls deep into your mouth and down your throat, making you gag. The whole while he keeps spanking your with the paddle, leaving your ass cherry red as tears stream down your face. Sometime later he stops with his cock jammed down your throat and he cums directly into your throat, leaving you no choice but to swallow his load. "Next time do as you\'re told you submissive bitch or it will be a lot worse, either I or someone else will teach you a lesson that will make you remember this fondly. I\'ll make sure to tell the others your down here." He said with a laugh and then left, he didn\'t even undo the cuffs. You limp over to the door and close it in case he was serious about sending down more men. It takes you a bit to finally get yourself lose.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'Unknown dom');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Unknown dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r23.jpg');
    scene.text('You obediently knelt and opened your mouth. He put a blindfold on you and soon you felt his cock pressed against your lips. You open your mouth and start sucking his dick. Several minutes later you feel his cock pulsing and then feel the hot jet of sperm shooting into your mouth. Several spurts of seman fills your mouth up, you immediately swallowed it and continued to suck his dick until you feel it start to go soft.');
    scene.text('"Good bitch, that\'s a good slave, and now lie on the couch, " he said.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Unknown dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r24.jpg');
    scene.text('You turn over and lay down on your back on the couch, doing as he told you. He sits down on top of your chest, straddling you. You feel his semi limp dick rubbing against your lips again. "Suck it slave and get me hard again." You obediently do as your told and suck on his dick until he gets hard again. Once he is fully hard he gets off you and tells you. "Roll over on your side." you do as he tells you, rolling over on your side and you feel him laying down next to you, behind you.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r25.jpg');
    scene.text('You wait on your side, then you feel his fingers rubbing your asshole. They have a bit of lube on them, not as much as you would like but better than nothing. He rubs the lube against your asshole and slips his fingers into your ass. Then he pulls them out and you feel his cock pressed against your ass. He puts a hand on your hip and none to gentle shoves his dick into your ass. He jerks back on you by the hip and thrusts forward, driving himself balls deep on the first thrust. YOu cry out in pain, but you also kinda like it.');
    scene.text('He starts hammering your ass balls deep, your moans of pain and pleasure get louder and louder. You don\'t know which is the more powerful feeling the pain of him hammering your ass or the pleasure. After a bit the pain starts to subside and then all that is left is the pleasure, the thought of being used like this makes it all the more pleasurable. He hammers away at your ass for a long time, you have several orgasms and have completely lost track of time. Finally he starts cumming, you can feel his hot sperm shooting into your ass. Then pulls his dick out of you and gets up. "Quickly now, get up and open your mouth!" he commands.');
    qspCall(s, 'arousal', 'anal_finger', 5, 'sub');
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/r26.jpg');
    scene.text('You opened your mouth and the remnants of sperm poured into it. Not waiting for you to swallow he sticks his dick in your mouth and makes you suck him clean, his dick tastes like your ass, but you suck him clean. Once you are finished he undoes the cuffs, puts his pants on and walks out, closing the door behind him with out another word.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Unknown dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['masharoom', 'start'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'masha':
      enterMasha(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const masharoom: LocationDef = {
  name: 'masharoom',
  title: 'This is Masha\'s room. It is a huge room with many kinds of s',
  region: 'other',
  enter: enter,
};
