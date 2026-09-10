import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('You take a seat next to Radomir as everyone spreads out. He gives you a sly smile as you sit next to him. "Great set wasn\'t it? We really nailed it." He says the last part with a suggestive tone.');
    scene.text('Before you can even respond, he continues talking about how well the set was and how awesome it is having groupies like you. He\'s clearly not very interested in what you have to say as he rarely gives you a chance to say anything, so you just listen. It\'s pleasant enough conversation though and he\'s pretty nice to you.');
    (s as any).gopnikbandQW['radob'] = 0;
    if (((s as any).gopnikbandQW ?? 0)?.['radob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['alyona_present'] === 1) {
      scene.text('You notice the lewd grin on Radomir\'s face as he glances at you and indicates with his head for you to look. You turn your head to follow his gaze and see Anushka and Alyona sitting on the couch next to each other very closely, almost intimately you would say.');
      scene.text('"Have you heard the latest rumors?" he asks while looking at you seriously.');
      scene.text('You shake your head. "About who? What\'s up?" you reply.');
      scene.text('He looks around as if he\'s trying to avoid someone. "Don\'t tell anyone, but I\'m pretty sure that Alyona is a rug muncher."');
      scene.actions([
        { label: 'What?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Your eyes widen. "I don\'t believe you. I saw her flirting with a guy the other day!"');
    scene.text('"Well listen here then because I have a lot of proof that she\'s a lesbian. The biggest one is that she turned me down. She also hangs with Anushka all the time and I\'ve seen her throwing looks at her, not to mention how they act together. Last but not least, I\'ve heard that her mother was one of the biggest muff divers back in the days, that old whore."');
    scene.text('"She might be into girls, but I\'m pretty sure she\'s into guys as well," you reply while crossing your arms.');
    // TODO-QSP: dynamic text: "Trust me, <<$pcs_nickname>>. Just watch and you'll see. She's a dyke." He gets ...
    scene.text(`"Trust me, ${((s as any).pcs_nickname ?? 0)}. Just watch and you'll see. She's a dyke." He gets up and walks over to grab a beer before coming back.`);
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You catch Lena looking over and giving Radomir a flirty smile.');
      scene.text('Radomir looks at you with a confident smile. "So I was almost in a threesome a few days ago."');
      scene.text('"You\'re really humble-bragging here, Radomir," you reply while faking a yawn.');
      scene.text('He bursts out laughing. "Well listen here. It was supposed to be a threesome with Lena and Lera…"');
      scene.text('"Is that so?" you nonchalantly answer.');
      scene.text('"Well yeah, like I said it was supposed to be a threesome, but Lera backed the fuck out, the stupid dyke. She\'s chasing Lena\'s sweet pussy, but I get that pussy wet like no one else," he continues on.');
      scene.text('"And this is supposed to impress me?" you reply.');
      scene.text('He gives you a slightly confused stare. "I was just letting you know the facts." He then starts talking about the girl he banged last night.');
      if (((s as any).gopnikbandQW ?? 0)?.['radob'] === 3  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
        scene.text('Your chat is interrupted by Roman suddenly headbutting a guy for no apparent reason. The guy crumbles to the floor, which gets a laugh out of most of those present. Roman then walks over and grabs a beer like nothing happened.');
        scene.text('"Man, you should never fuck around with Roman," Radomir says confoundedly to you. "He\'s got a screw loose in his head."');
        scene.text('"I\'ve heard he\'s really violent…" you reply.');
        scene.text('"Well let me tell you a story about this hot chick that was just about to suck me off. So we start doing our thing and I whip out my huge cock," he says without even blinking. "She gets on her knees, grabs it and just as she\'s about to start sucking it, her boyfriend walks in…"');
        scene.text('"Must\'ve been quite the scene…" you comment.');
        scene.text('"Well… It would\'ve been if Roman hadn\'t come by at that moment and kicked the guy\'s ass so hard the girl ran to him and had to help him to leave, all crying and shit. I think Roman might have sent him to the hospital," he snickers. "So yeah, not only is Roman crazy, he\'s also a master at cock-blocking." He goes on to share a few other amusing stories.');
        scene.actions([
          { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
        ]);
      } else {
        scene.text('Lavrenti walks by as you\'re chatting with Radomir. "Great set, Rad," he says with a tip of his beer.');
        scene.text('"Thanks man," Radomir replies before he turns back to you. "Did I ever mention why I like Lavrenti so much?" he asks.');
        scene.text('"Not really. Why?"');
        scene.text('"It\'s quite simple. He\'s my go to guy when it comes to the parties. He\'s got a sweet pad where I\'ve had my share of blackouts thanks to him providing booze and drugs. He\'s also quite easy to deal with since he looks up to me, so I throw him my leftovers here and there when I feel like it," he scoffs. He then relates a few of his favorite stories of Lavrenti\'s parties.');
        scene.text('He finally starts to wind down, allowing you to get a few words in, although it wasn\'t all bad. He was flirting with you and made you feel like you were the most beautiful girl in the room. You now have a chance to ask him something.');
        scene.actions([
          { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
          { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
          { label: 'Flirt back', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).NikoVolkovQW ?? 0) >= 5  &&  ((s as any).gopnikbandQW ?? 0)?.['niko_present'] === 1) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
      scene.text('Interested in his advances, you decide to return his flirting, turning to face him before placing your hand on his thigh. "Pretty, huh? So you\'re interested in me?"');
      scene.text('"I might be," Radomir replies. "You know, you remind me of a girl we had back at our last concert. She was a pretty girl that really knew how to follow instructions, and was very obedient. She was very smart, and I believe that you\'re smart too. Maybe we can spend a little time together after the show? You\'re far hotter than the other girls."');
      scene.text('He reaches up to run his hand through your hair. "I just love your hair," he says as his firm touch leaves your body feeling hot, which is only heightened by his compliments and the attention he\'s giving you. He then leans in close and you feel the heat of his breath across your neck as his hand slides up your thigh.');
      // TODO-QSP: dynamic text: The sensuous moment is then interrupted by Niko wrapping his arm around your sho...
      scene.text(`The sensuous moment is then interrupted by Niko wrapping his arm around your shoulder before he drops down between you and Radomir. "Hey ${((s as any).pcs_nickname ?? 0)}, you wouldn't be drinking without me, would you?"`);
      scene.text('You look back at Niko before replying. "Oh, I was just chatting about the band. It\'s good to see you."');
      scene.text('Niko leans in closer before giving you a kiss on the lips, making sure to let Radomir see. He then goes to get himself a drink. You wink at Radomir and proceed to ask him some questions.');
      qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big154.jpg');
      scene.text('You decide to flirt back with him, turning so you\'re facing him before placing your hand on his thigh. "So you really think I\'m pretty?"');
      scene.text('He talks about some of the groupies the band has before complimenting you. "You\'re far hotter than the other girls." He reaches up to run his hand through your hair. "And I just love your hair."');
      scene.text('You feel yourself getting a little turned on by the compliments and attention he\'s giving you as he leans in close and you feel the heat of his breath on your neck as his hand slides up your thigh.');
      qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'foreplay', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout\' + rand(1, 4) + \'.jpg');
    scene.text('You quickly push his hand away. "What the fuck are you doing, Rad?!"');
    scene.text('"What? Just relax, I know you want it." He moves his hand further up, almost touching your groin.');
    scene.text('He\'s clearly not understanding. Just before his hand ends up touching you, you slam your foot against his and he pulls his hand way with a huge smile. "Hey, no need for that! We both know you want it, but if you need to pretend you don\'t, then I get it." He leans back in close, almost touching you. "You\'ll be wet and begging for it soon enough…" He then gets up and walks over to grab a beer.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hang out', handler: (st: GameState) => {
    // TODO-QSP: gt 'praiders_garage', $hangout_rand
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let him feel you up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You can\'t help but let out a soft moan as he feels you up.');
    scene.text('"She purrs too…" he whispers as his hand keeps moving upwards…');
    scene.text('His hand slides up and starts rubbing your crotch, making you a little wet. "How about we make this party a private one?" he asks with a lewd grin.');
    qspCall(s, 'arousal', 'foreplay', 1, 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout\' + rand(1, 4) + \'.jpg');
    scene.text('You nearly give in, but grab his hand and push it away from your crotch. "Maybe some other time," you mutter before quickly getting up and walking away to rejoin the rest of the party.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hang out', handler: (st: GameState) => {
    // TODO-QSP: gt 'praiders_garage', $hangout_rand
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You can only nod in agreement and he gets up and walks over to the radio to turn it off. "Okay everyone, party\'s over," he says as he starts ushering everyone out. Anushka shakes her head and slightly rolls her eyes as she leaves, but everyone has soon filed out, leaving you and Radomir alone.');
    scene.actions([
      { label: 'Alone', goto: ['praiders_garageev1', 'radsex'] },
    ]);
  } },
    ]);
  } },
        { label: 'Tease him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'dislike');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/band/hangout\' + rand(1, 4) + \'.jpg');
    scene.text('Not wanting to let him get the best of you, you decide to play around with him. As his hand starts moving up your thigh, you let your hand slip down and rub his bulge.');
    scene.text('Radomir lets out a grunt. "Oh, you want to play that way?"');
    scene.text('You nod and grab even harder. He flinches a little as you smile. "I really want to unbutton your pants right now…" you say teasingly while biting your lip.');
    scene.text('His eyes grow wide, obviously expecting at least a blowjob from you.');
    scene.text('"But maybe some other time…" You lick your lips as you stand up, leaving him with a hard-on as you join the rest of the party.');
    qspCall(s, 'arousal', 'foreplay', 2, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hang out', handler: (st: GameState) => {
    // TODO-QSP: gt 'praiders_garage', $hangout_rand
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
      scene.text('You take a seat next to Radomir as everyone spreads out. He gives you a slightly annoyed glare. "What the fuck do you want?"');
      scene.text('"I just wanted to say hi and tell you it was a great set," you reply, taken aback slightly by his reaction.');
      scene.text('He just nods. "Yeah yeah, got it. How about you go tell someone else?" he says as he pushes you out of the seat. A pretty looking girl then walks up with a smile and he grabs her and drags her in close. Getting the hint, you drift off.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
        { label: 'Move away', handler: (st: GameState) => {
    (s as any).gopnikbandQW['radomirblocked'] = 1;
  }, goto: ['praiders_garage', 'hangout<<$ARGS[1]>>'] },
      ]);
    }
  }
  scene.build();
}

export const praiders_garage_chat: LocationDef = {
  name: 'praiders_garage_chat',
  title: 'You take a seat next to Radomir as everyone spreads out. He ',
  region: 'other',
  description: ['You take a seat next to Radomir as everyone spreads out. He gives you a sly smile as you sit next to him. "Great set wasn\'t it? We really nailed it." He says the last part with a suggestive tone.'],
  enter: enter,
};
