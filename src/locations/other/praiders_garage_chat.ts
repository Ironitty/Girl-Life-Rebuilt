import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChatRadomir(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('You take a seat next to Radomir as everyone spreads out. He gives you a sly smile as you sit next to him. "Great set wasn\'t it? We really nailed it." He says the last part with a suggestive tone.');
    scene.text('Before you can even respond, he continues talking about how well the set was and how awesome it is having groupies like you. He\'s clearly not very interested in what you have to say as he rarely gives you a chance to say anything, so you just listen. It\'s pleasant enough conversation though and he\'s pretty nice to you.');
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['radob'] = 0;
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
    scene.text(`"Trust me, ${((s as any).pcs_nickname || '')}. Just watch and you'll see. She's a dyke." He gets up and walks over to grab a beer before coming back.`);
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).gopnikbandQW ?? 0)?.['radob'] === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
        scene.text('You catch Lena looking over and giving Radomir a flirty smile.');
        scene.text('Radomir looks at you with a confident smile. "So I was almost in a threesome a few days ago."');
        scene.text('"You\'re really humble-bragging here, Radomir," you reply while faking a yawn.');
        scene.text('He bursts out laughing. "Well listen here. It was supposed to be a threesome with Lena and Lera…"');
        scene.text('"Is that so?" you nonchalantly answer.');
        scene.text('"Well yeah, like I said it was supposed to be a threesome, but Lera backed the fuck out, the stupid dyke. She\'s chasing Lena\'s sweet pussy, but I get that pussy wet like no one else," he continues on.');
        scene.text('"And this is supposed to impress me?" you reply.');
        scene.text('He gives you a slightly confused stare. "I was just letting you know the facts." He then starts talking about the girl he banged last night.');
        scene.actions([
          { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
        ]);
      } else {
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
          if (((s as any).gopnikbandQW ?? 0)?.['radob'] === 4  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
            scene.text('Lavrenti walks by as you\'re chatting with Radomir. "Great set, Rad," he says with a tip of his beer.');
            scene.text('"Thanks man," Radomir replies before he turns back to you. "Did I ever mention why I like Lavrenti so much?" he asks.');
            scene.text('"Not really. Why?"');
            scene.text('"It\'s quite simple. He\'s my go to guy when it comes to the parties. He\'s got a sweet pad where I\'ve had my share of blackouts thanks to him providing booze and drugs. He\'s also quite easy to deal with since he looks up to me, so I throw him my leftovers here and there when I feel like it," he scoffs. He then relates a few of his favorite stories of Lavrenti\'s parties.');
            scene.actions([
              { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
            ]);
          } else {
            scene.text('He finally starts to wind down, allowing you to get a few words in, although it wasn\'t all bad. He was flirting with you and made you feel like you were the most beautiful girl in the room. You now have a chance to ask him something.');
            scene.actions([
              { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_radomir1'] },
              { label: 'Flirt back', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).NikoVolkovQW ?? 0) >= 5  &&  ((s as any).gopnikbandQW ?? 0)?.['niko_present'] === 1) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
      scene.text('Interested in his advances, you decide to return his flirting, turning to face him before placing your hand on his thigh. "Pretty, huh? So you\'re interested in me?"');
      scene.text('"I might be," Radomir replies. "You know, you remind me of a girl we had back at our last concert. She was a pretty girl that really knew how to follow instructions, and was very obedient. She was very smart, and I believe that you\'re smart too. Maybe we can spend a little time together after the show? You\'re far hotter than the other girls."');
      scene.text('He reaches up to run his hand through your hair. "I just love your hair," he says as his firm touch leaves your body feeling hot, which is only heightened by his compliments and the attention he\'s giving you. He then leans in close and you feel the heat of his breath across your neck as his hand slides up your thigh.');
      // TODO-QSP: dynamic text: The sensuous moment is then interrupted by Niko wrapping his arm around your sho...
      scene.text(`The sensuous moment is then interrupted by Niko wrapping his arm around your shoulder before he drops down between you and Radomir. "Hey ${((s as any).pcs_nickname || '')}, you wouldn't be drinking without me, would you?"`);
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
          { label: 'Stop him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
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
        { label: 'Decline', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
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
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
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
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  } else {
    scene.text('You take a seat next to Radomir as everyone spreads out. He gives you a slightly annoyed glare. "What the fuck do you want?"');
    scene.text('"I just wanted to say hi and tell you it was a great set," you reply, taken aback slightly by his reaction.');
    scene.text('He just nods. "Yeah yeah, got it. How about you go tell someone else?" he says as he pushes you out of the seat. A pretty looking girl then walks up with a smile and he grabs her and drags her in close. Getting the hint, you drift off.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['radomirblocked'] = 1;
  }, goto: ['praiders_garage', 'hangout<<$ARGS[1]>>'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatRadomir1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  scene.text('You now have a chance to ask him something.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"So are you and Arkadi good friends? What do you think of him?" you ask.');
    scene.text('"He\'s alright most of the time. He knows how to party, is great to have at your back in a fight and he\'s a great drummer." Radomir says as he glances over at Arkadi trying to chat up some girl.');
    scene.text('You arch a brow. "That it?"');
    scene.text('He again pauses and shakes his head. "He acts like he owns the band sometimes, like he\'s the only one taking this shit seriously. He knows better than to push it too far though. I keep him in his place."');
    scene.text('"Must be great for the band dynamic as the two of you go back and forth then…" you reply.');
    scene.text('He snorts a laugh. "The rest know how it is. There wouldn\'t be a band without me, so it works out." He then gets up and walks over to grab a beer.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"He\'s my oldest friend. He\'s cool and we have a blast together, but he can be an annoying little bitch sometimes," Radomir deeply sighs.');
    scene.text('"Why is that?" you ask.');
    scene.text('He lifts his chin and you follow his gaze to see Valentin and Anushka standing around the cooler talking and laughing about something.');
    scene.text('"He\'s always taking her side, or telling me I should leave her alone!" he says with a snort. "He just doesn\'t get it. Nush and I have something special, an unbreakable bond. She\'ll always be my little fuck buddy because she loves me and can\'t help it," he says as he leans back looking proud of himself. "He only takes her side because he wants to impress her. I get it. though. Nush is a fine piece of ass."');
    scene.actions([
      { label: 'Valentin has the hots for Anushka?', handler: (st: GameState) => {
    if (!(s as any).valentin) (s as any).valentin = {}; (s as any).valentin['love_nush'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"Oh really? I didn\'t know that Val had the hots for Nush?" you ask curiously.');
    scene.text('"Yeah, but he\'s too much of a pussy to admit it. I told him he could fuck her brains out all he wants, but we need her to be single. Too many of our fans want to fuck her brains out. They need to believe they have a shot," he smirks and shakes his head. "Hell with how big of slut she is, I imagine most of them do."');
    scene.actions([
      { label: 'Just let him talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You don\'t feel like getting into it with him, so you just let him keep going. He\'s soon talking about one of the after parties they had.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Anushka is a slut?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"So you think Nush is just a big slut? I\'m surprised you hang out with her then. I mean sluts are outcasts after all," you point out to him.');
    scene.text('He frowns. "Hey, I didn\'t say she was some worthless slut that won\'t stand up for herself! Who can respect someone like that? No, Nush loves to get fucked, but she won\'t just let any guy bang her. She\'ll knock a guy on his ass if he gets too hands on with her when she isn\'t in the mood. She decides who, when and where she fucks. Well, other than me of course. She\'s my personal fuck toy that I can use anytime, anywhere."');
    scene.text('You roll your eyes slightly, but he doesn\'t seem to notice as he keeps talking. "Anyway, she\'s a party slut who just likes to be fucked, which is great for the band. We can market that shit."');
    scene.text('He then goes on to talk about all his great marketing plans, which are mostly just exploiting Anushka or painting himself as some sort of rock god that girls can rub one off to while listening to their music. He goes on and on for some time until things wind down.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
      { label: 'They are fucking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"Uh, you know they\'re already fucking, right?" you tell him.');
    scene.text('"Yeah, I know they hook up sometimes, but I think he wants her all to himself. I mean why else would he bother trying to impress her all the time? I told him I don\'t care what they do in private, but in public she has to appear single. All the dudes that love our music want to fuck her, and who can blame them? They need to believe they have a shot. It\'s just good marketing, you know?" He smirks and shakes his head before he goes back to telling you about the party they had.');
    scene.actions([
      { label: 'Just let him talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You don\'t feel like getting into it with him, so you just let him keep going. He\'s soon talking about one of the after parties they had.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Anushka is a slut?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"So you think Nush is just a big slut? I\'m surprised you hang out with her then. I mean sluts are outcasts after all," you point out to him.');
    scene.text('He frowns. "Hey, I didn\'t say she was some worthless slut that won\'t stand up for herself! Who can respect someone like that? No, Nush loves to get fucked, but she won\'t just let any guy bang her. She\'ll knock a guy on his ass if he gets too hands on with her when she isn\'t in the mood. She decides who, when and where she fucks. Well, other than me of course. She\'s my personal fuck toy that I can use anytime, anywhere."');
    scene.text('You roll your eyes slightly, but he doesn\'t seem to notice as he keeps talking. "Anyway, she\'s a party slut who just likes to be fucked, which is great for the band. We can market that shit."');
    scene.text('He then goes on to talk about all his great marketing plans, which are mostly just exploiting Anushka or painting himself as some sort of rock god that girls can rub one off to while listening to their music. He goes on and on for some time until things wind down.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You notice Radomir is staring at something as you talk. You turn and see Anushka bent over the cooler grabbing a beer, giving you a perfect view of her perky ass.');
    scene.text('"Fuck, she has a fine ass, don\'t you agree?" he nods towards Anushka as the two of you sit next to each other.');
    scene.text('You look at Anushka and shrug. "I guess. Probably, yeah…"');
    scene.text('He shakes his head. "She has one of the finest asses I\'ve ever fucked. No matter how many times I tear it up, it\'s always super tight." He glances at you. "Honestly, she\'s one of the best fucks I ever had, even if she does bitch about lube too much."');
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
      scene.actions([
        { label: 'I heard you guys used to date', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"I heard you guys used to date. When did all of this happen?" you curiously ask.');
    scene.text('"A few years ago. She used to come around when we started the band and before long I had her wrapped around my finger and we hooked up. She fell head over heels for me." He starts grinning. "She\'s still in love with me, but she became too clingy, so I had to dump her ass. Besides, it\'s better for the band if the two hottest members are single."');
    scene.text('You gasp. "How could you treat her like that? I feel bad for her…"');
    scene.text('He shakes his head. "Why would you feel bad for her? She still gets a good fucking now and again and it\'s great for the band."');
    scene.actions([
      { label: 'Is that so?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('He looks around to make sure nobody can overhear what\'s being said. "She\'s well aware of the rules. We\'re still fuck buddies and I keep her on a short leash because I can use her whenever I want."');
    scene.text('"You\'re terrible, Rad!" you say dismissively.');
    scene.text('"Hey, it\'s the best for the band. How would it look if the two hottest band members were together?! To promote the band, we let her shine. She\'s hot, single and quite the slut, so of course we\'re going to use that." His eyes remain locked on you.');
    scene.text('"Well… I…" You\'re not sure what to say.');
    scene.text('"What?" He gives you a slightly confused stare, wondering why you\'re hesitating. "I give her a good fucking more than any other bitch, so what more could she want? Sure she complains that I\'m too rough sometimes, but like all bitches, she loves it. Why else would she keep coming back for more?" he asks, seeming to actually believe what he\'s saying. He then gets up and walks over to grab a beer.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'So you guys hook up?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('He nods as if it couldn\'t be any more obvious. "Yeah, I plow that ass on a pretty regular basis."');
    scene.text('"I didn\'t know you guys were an item?" you reply.');
    scene.text('He laughs dismissively. "Fuck no, we just hook up. Mind you we used to date. I was her first in every hole on her body," he says, bragging like it\'s something to be proud of. "Now Nush is a total fucking slut, but it\'s like having a hot groupie that plays in the band. It\'s the best of both worlds, let me tell you." He then goes on to talk about their other regular groupies that he fucks.');
    scene.actions([
      { label: 'Just let him talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You don\'t feel like getting into it with him, so you just let him keep going. He\'s soon talking about one of the after parties they had.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Anushka is a slut?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"So you think Nush is just a big slut? I\'m surprised you hang out with her then. I mean sluts are outcasts after all," you point out to him.');
    scene.text('He frowns. "Hey, I didn\'t say she was some worthless slut that won\'t stand up for herself! Who can respect someone like that? No, Nush loves to get fucked, but she won\'t just let any guy bang her. She\'ll knock a guy on his ass if he gets too hands on with her when she isn\'t in the mood. She decides who, when and where she fucks. Well, other than me of course. She\'s my personal fuck toy that I can use anytime, anywhere."');
    scene.text('You roll your eyes slightly, but he doesn\'t seem to notice as he keeps talking. "Anyway, she\'s a party slut who just likes to be fucked, which is great for the band. We can market that shit."');
    scene.text('He then goes on to talk about all his great marketing plans, which are mostly just exploiting Anushka or painting himself as some sort of rock god that girls can rub one off to while listening to their music. He goes on and on for some time until things wind down.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('You take a seat next to Anushka as everyone spreads out. She\'s a little bit sweaty. "We were great, weren\'t we?!" she exclaims excitedly. You nod and start going back and forth as Anushka picks up a beer and opens it by using the table. The two of you chat for some time, talking about almost everything. You can sense that she\'s on an adrenaline high from playing.');
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['nushob'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['nushob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
    scene.text('"Fuck, I\'m glad to talk to someone that isn\'t Lena or Lera," she says as you sit next to her.');
    scene.text('You raise a brow and give her a small smile. "Something happen with them?"');
    scene.text('As soon as you ask, Anushka throws her head back and lets out a loud, exasperated sigh. "All Lena likes to fucking talk about is Vitek!" She sits back up straight and with a mocking tone, she mimics Lena\'s voice. "Oh, Vitek doesn\'t give a shit what anyone says, he does what he wants! Did I tell you about how he pushed around this nerd who is weaker and smaller than him? Ivan thinks he\'s so bad-ass just because he thinks he can box, but Vitek could beat his ass! Vitek, Vitek, VITEK!" She rolls her eyes. "Jesus fucking Christ, just suck your brother\'s dick already!"');
    scene.text('You can\'t help but laugh, and Anushka is quick to give you some side-eye before she starts laughing with you. "Don\'t give her any ideas," you joke.');
    scene.text('"It\'s cool. I mean, I like hanging out with Lena and Lera. They\'re a lot of fun, but sometimes Lena starts talking about Vitek and just goes on, and on, and on about how great he is. At least when she isn\'t bitching about how he\'s ruining her life. It doesn\'t help that she thinks she\'s hot shit because he\'s her brother. She needs to chill… Maybe get Lera to take her mind off things, you know?" she says as she gives you a knowing smile.');
    scene.text('Your conversation with Anushka starts winding down and you seem to be running out of small talk. Now seems like a good time to ask her about something specific.');
    scene.actions([
      { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
    ]);
  } else {
    if (((s as any).gopnikbandQW ?? 0)?.['nushob'] === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
      scene.text('Roman gets up on the back of one of the back of the couches and starting trying to dance before falling off, causing everyone to laugh. He quickly stands up and punches some guy in the face before joining in on the laughing, which makes everyone else find it a little less funny. Anushka glances at you. "Be extra careful around Roman, alright?" She looks a bit stressed, something you\'re not used to seeing.');
      scene.text('"Why? Did he… Do something to you?" you worry, but she shakes her head.');
      scene.text('"No, it\'s just that… Sometimes you just forget how short tempered and crazy that dude is, you know? We were all hanging out in the city last week, and while we were walking some dudes bumped into us. Arkadi tells them to watch it and they start mouthing off, but then Roman just fucking jumps these guys. Right there on the street, and just starts beating them. Of course we have to jump in and we kick their asses pretty fast, but he fucked one of them up pretty bad. We had to drag him off the guy… Fuck, I thought he was going to beat this guy to death…" She doesn\'t sound like she\'s joking.');
      scene.text('She then goes quiet, seemingly lost in thought. "Just be careful around him, okay?"');
      scene.text('Your conversation with Anushka starts winding down and you seem to be running out of small talk. Now seems like a good time to ask her about something specific.');
      scene.actions([
        { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
      ]);
    } else {
      if (((s as any).gopnikbandQW ?? 0)?.['nushob'] === 3) {
        scene.text('She goes quiet all of a sudden, like she\'s crashing from a high. She\'s wearing sunglasses and looks like she\'s had a rough go of it lately, like she might still be hungover or something. You give her a slight nudge and she groans and shifts slowly in her seat before stirring to life. "Huh? What?"');
        scene.text('"You okay, Anushka?" you ask as you watch her squirm and stretch. She lifts her sunglasses to rub her eyes and you notice that it looks like she hasn\'t slept in a while.');
        // TODO-QSP: dynamic text: "Oh dude… Lav had us out partying until like, '+func('time', 'get_time_string', ...
        scene.text('"Oh dude… Lav had us out partying until like, 5:00. I don\'t know what the fuck he gave us, but I think I\'m still hearing colors." The two of you talk, mostly about the drug hazed party they had last night, which she seems to not fully remember.');
        scene.text('Your conversation with Anushka starts winding down and you seem to be running out of small talk. Now seems like a good time to ask her about something specific.');
        scene.actions([
          { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
        ]);
      } else {
        if (((s as any).gopnikbandQW ?? 0)?.['nushob'] === 4) {
          scene.text('"Looks like we\'re going to be getting new fliers and posters to put up around town!" Anushka gushes excitedly. She\'s full of energy as you listen to her describe the new design.');
          scene.text('"So who\'s making these things? No offense, but I can\'t see you or Radomir making something so cool. Maybe if it was just a picture of some tits with the band name printed on it…" you tease and she playfully smacks you on the thigh.');
          scene.text('"Lucky for us, it\'s not me designing them. Radomir got some of the nerds at school to throw something together. Don\'t ask me how he does it, but we\'ve never been disappointed, so I can\'t complain. He\'s good at getting this kind of stuff done for the band."');
          scene.text('Your conversation with Anushka starts winding down and you seem to be running out of small talk. Now seems like a good time to ask her about something specific.');
          scene.actions([
            { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
          ]);
        } else {
          scene.text('Your conversation with Anushka starts winding down and you seem to be running out of small talk. Now seems like a good time to ask her about something specific.');
          scene.actions([
            { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatAnushka1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You decide to ask about Arkadi. "So tell me more about Arkadi."');
    scene.text('"If it wasn\'t for Arkadi, we\'d probably still be sitting in this garage doing fuck all except getting wasted and high," Anushka tells you as she glances over at Arkadi talking with the other guys. She watches him with an admiring gaze, a small smile playing across her lips. "Plus, you know, he\'s a good fuck." She turns back to you and her small smile is now a devious grin. You both laugh, but she isn\'t done yet. "Seriously, he does this thing with his tongue that could make you cum in seconds. Oh fuck, just thinking about it makes me wet!"');
    scene.text('You go on to talk about boys and sex.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about the previous drummer', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You decide to ask about the old drummer. "I heard Arkadi wasn\'t your first drummer. I always thought it was just you guys from the beginning?" you reply, but Anushka shakes her head.');
    scene.text('"No, we had another dude on drums and he was a fucking tool. When I joined the band, he wouldn\'t shut the fuck up about me being a girl trying to "play with the big boys". Honestly, I could ignore the shit at first, but then he started talking about how I was just here to be their personal fuck toy." She gags slightly. "I was ready to kick his teeth down his throat, but Rad and Val saved his sorry ass by kicking him out the band." She then tells you a few stories about him and he sounds like a misogynistic asshole.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You decide to ask about Valentin. "So tell me more about Val."');
    // TODO-QSP: dynamic text: "You're looking a little tense, <<$pcs_nickname>>," Anushka says as she eyes you...
    scene.text(`"You're looking a little tense, ${((s as any).pcs_nickname || '')}," Anushka says as she eyes you up and down. She has a devious sparkle in her eyes that makes you worried about what her intentions are.`);
    scene.text('"I\'m fine… What does that have to do with Val?"');
    scene.text('"I\'m just looking out for a friend," she says, her hand over her heart to show some sincerity. "You just look like you need some <i>fun</i> in your life… and I have just what you need!" She gestures over at Valentin, as if showing off a product. "For the low, low price of totally free, you can spread those legs and take a ride on the Val rocket!"');
    scene.text('You can\'t help but laugh at Anushka\'s showmanship, or lack of it. "What are you doing? Are you his pimp? Or was he just too scared to come ask me himself?"');
    scene.text('Anushka laughs. "Fuck, I wish I was his pimp. The way girls line up to fuck him, I\'d be rich!"');
    scene.text('You go on to talk about boys and sex.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
      scene.text('"So you and Rad used to date?" you ask, already knowing that they did.');
      scene.text('She nods and starts to say something when you\'re interrupted by Radomir loudly telling a graphic tale of some girl he fucked at one of their shows. When you glance back at Anushka, you see she\'s lost her smile and she seems to now be… annoyed. You can\'t quite put your finger on it, but something\'s bothering her.');
      scene.text('"Uh… You okay, Nush?" you ask quietly, but she doesn\'t respond. She inhales deeply through her nose and glances over at Radomir and the guys. You follow her gaze and listen carefully to Radomir retelling an \'epic\' tale of some girl he fucked at a gig. You know they used to date, but also know they broke up and both see other people, so you\'re not sure why she\'s acting this way.');
      scene.actions([
        { label: 'Ask if she\'s okay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Hey, are you okay?" you ask again.');
    scene.text('"He\'s talking about one of the sluts he cheated on me with," she says loudly as she glares daggers at Radomir. He and the others clearly heard her, but they only pause for a second before continuing on like nothing happened. "Fucking asshole! Whatever, I don\'t care. All he did was cheat on me when we were together. It\'s better that he\'s some other girl\'s problem now. Besides, we work together better now that there\'re no strings attached."');
    scene.actions([
      { label: 'Tell her not to blame herself', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Don\'t let him get to you, Nush," you comfort her gently. "All he did was treat you like shit and walk all over you when you guys were together."');
    scene.text('In an instant, Anushka\'s fury is turned on you. "What the fuck do you know?!" She snaps and shoves you away before standing up. "Mind your own fucking business! I\'m not some weak, whiny bitch that got walked all over and used!" Everyone else stops talking and start staring at the two of you.');
    scene.text('Before you can respond, Anushka storms off, more upset than she was before. You look over at Radomir and the guys and they look back at you as they whisper amongst themselves. Radomir then says something and the others laugh.');
    scene.text('Arkadi shakes his head and Valentin gives you a slightly dirty look. He walks over to talk to Anushka before she walks over to check her guitar and he walks back to the couch. The party slowly breaks up and everyone eventually heads out.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
    ]);
  } },
      { label: 'Insult Radomir', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"If only his dick was as big as his ego…" you reply. Hearing this, Anushka\'s anger seems to fade as a tiny smile creeps onto her face.');
    scene.text('As you look at her, she finally lets out a giggle. "It\'s pretty big, but you\'re right. Nothing is as big as his ego. If his dick was, he wouldn\'t be able to walk."');
    scene.text('You laugh at her response before she continues. "I know I shouldn\'t let it bother me anymore. The past is the past, but the fact he still isn\'t sorry for cheating on me… Fuck it, I need another beer." She gets up to grab another beer before you can say anything else to her.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"So you and Rad seem to have pretty great chemistry. Are you guys more than just friends?" you ask in a teasing tone.');
      scene.text('She shakes her head and is about to say something when Radomir loudly starts telling a graphic tale of some girl he fucked at one of their gigs. When you glance back at Anushka, you see she\'s lost her smile and she seems to now be… annoyed. You can\'t quite put your finger on it, but something\'s bothering her.');
      scene.text('"Uh… You okay, Nush?" you ask quietly, but she doesn\'t respond. She inhales deeply through her nose and glances over at Radomir and the guys. You follow her gaze and listen carefully to Radomir retelling an \'epic\' tale of some girl he fucked at a gig. You\'ve heard rumors Radomir and Anushka used to date. Maybe hearing about him fucking other girls is what\'s bothering her?');
      scene.actions([
        { label: 'Ask if she\'s okay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Hey, are you okay?" you ask her again.');
    scene.text('She glances at you and smiles, but you can tell it\'s forced. "Yeah fine, it\'s nothing."');
    scene.text('You nod, but know that something is bothering her. "Well if you want…"');
    scene.text('She interrupts you before you can finish. "I don\'t want to talk about it!" she snaps and you notice several people glance over. She sighs. "Sorry, I just don\'t want to talk about it. I need another beer." She gets up without another word to grab another beer.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterChatValentin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A158', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  scene.text('You take a seat next to Valentin as everyone spreads out. He makes space as you sit next to him. "Oh man, that was so good! We finally managed to hit that hard part!" he gleams with satisfaction. You respond positively telling him that you\'re all doing great. He listens attentively and knows how to drive a conversation forward. The two of you chat for some time, enjoying each other\'s company.');
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['valob'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['valob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['alyona_present'] === 1) {
    scene.text('You notice Valentin shaking his head and glance over at what he\'s looking at. You see Alyona sitting alone, slamming down drink after drink, already looking fairly wasted.');
    scene.text('"I really feel bad about her home situation. It must suck living like that…" he sighs.');
    scene.text('"What do you mean?" you ask.');
    scene.text('He glances at you. "Her dad is an abusive drunk and a big guy. She often shows up at school with bruises, the fucking asshole…" he growls.');
    scene.text('"Her dad smacks her around?" you ask and he nods.');
    scene.text('"Yeah, but she always has an excuse. Anyone that\'s met the bastard knows he does it, though."');
    scene.text('You shake your head. "That\'s just fucked up."');
    scene.text('"I know she sometimes crashes at Nush\'s place to get away from him. Hell, she\'s even crashed at mine a few times," he comments.');
    scene.text('You nod. "Yeah, they seem pretty close."');
    scene.text('"I know she\'s quite close to Nush, in more than one way if you get what I mean…" he adds with a chuckle, apparently trying to change the subject to something less dark.');
    if (((s as any).nushalyon_fuck ?? 0) === 1) {
      scene.text('You smile. "Well you aren\'t kidding about them being close. Just the other day I walked in on them having sex in the school bathroom. They were really going at it!" you gossip.');
      scene.text('Valentin begins to laugh. "Yeah, that sounds like them. Only they would do such a thing. Luckily it was just you that walked in and not one of the teachers…"');
      scene.text('The two of you laugh for a while as you go back and forth about what you saw.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
      ]);
    } else {
      scene.text('You arch a brow. "Really? I mean I guess I shouldn\'t be surprised. Nush is pretty open minded."');
      scene.text('He nods. "For Alyona, I think it\'s more about connection than anything. Hell, even the two of us have hooked up a few times. Nush, Arkadi, her and myself have hooked up now and again as well."');
      scene.text('"I didn\'t know that you were all having orgies together." you reply in surprise.');
      scene.text('"Sometimes, you just have to give into your urges, you know? Everyone has a good time and we all know that it\'s just sex for the fun of it," he smiles. "You know, we might even invite you one day."');
      scene.text('You feel your cheeks flushing at his suggestion.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
      ]);
    }
  } else {
    if (((s as any).gopnikbandQW ?? 0)?.['valob'] === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
      scene.text('As you and Valentin talk, Lavrenti walks over and they engage in an overly complicated handshake before Lavrenti takes a seat and joins in on the conversation. It mostly turns into them talking about girls they have or would like to fuck before someone calls Lavrenti over and he gets up.');
      scene.text('"You two seem to be friends," you tell Valentin with a smile.');
      scene.text('"Yeah, I hang with Lavrenti sometimes. He\'s a cool guy. I mean he\'s still a bit of the \'rich boy walking on the wild side\', but he always has drugs and knows how to throw some epic parties," he says with a smile.');
      scene.text('"I see… Is that all you guys do when you hang with each other?" you ask.');
      scene.text('"To be honest, yeah. We usually just party and have a great time. He\'s a great guy to have around while partying. He\'s chill, charming and knows how to get the girls motor running if you know what I mean…" he says with a laugh.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
      ]);
    } else {
      if (((s as any).gopnikbandQW ?? 0)?.['valob'] === 3  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
        scene.text('You notice Lena glancing over with a smile. Lera notices and glares in your direction, or maybe at Valentin, who\'s looking pretty smug. "What are you smiling at?"');
        scene.text('He looks at you and grins. "Just… Never mind, I really shouldn\'t tell people."');
        scene.text('"Come on, I promise not to tell anyone!" you beg.');
        scene.text('He glances around and moves in close to speak quietly to you. "I fucked the two of them. Just don\'t tell Vitek. The last thing I need is him kicking my ass."');
        scene.text('"Really?" you ask curiously. "Lena always complains about how Vitek ruins her sex life."');
        scene.text('Valentin chuckles. "All Vitek\'s managed to do is turn his sister into a major slut. She\'s always trying to get guys to fuck her. Yeah sure, a lot of them turn her down because they\'re afraid of Vitek, but more than a few say yes and fuck the shit out of her."');
        scene.actions([
          { label: 'Talk about other stuff', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You decide you\'ve heard enough and change the subject. The two of you are soon talking about the band.');
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
    ]);
  } },
          { label: 'Ask about Lera', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['val_lena_lera_3some'] = 1;
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"So why is Lera glaring over here?" you ask. "Jealousy? I heard she has it bad for Lena."');
    scene.text('He shakes his head with a grin. "No. Well, maybe a little. She\'s still pissed that I shot my load in her mouth."');
    scene.text('"What?" you exclaim in shock. "Everyone always whispers she\'s lesbian. You\'re saying the rumors aren\'t true?"');
    scene.text('He shrugs. "Yeah, maybe. I think she\'s a lesbian, but she occasionally seems to like taking dick, at least in threesomes."');
    scene.text('Noticing your questioning stare, he continues. "Okay, they were together and the three of us were hanging out drinking. Lena started flirting with me, and I was more than happy to respond. When we started kissing, Lera tried to get her attention and started kissing her too. Lena starts feeling us both up, then pushes Lera\'s head down, who starts going down on her… Long story short, Lena was up for some fun and made Lera go down on her as we kissed, then sucked my dick. She then made Lera have a go…"');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"Then what?" you interject.');
    scene.text('He shrugs. "They take turns sucking me off. Lera wasn\'t very good at it, but after I fuck them every way a guy can, they finish me off with a blowjob. I hold it until Lera starts sucking me again and I grab her by the head and shoot my load in her mouth. She tried to pull away, but I just filled her mouth with my cum."');
    scene.text('You shake your head. "That was a dickhead move."');
    scene.text('He smiles. "Hey, if she\'s going to hook up with guys, she needs to acquire the taste sooner or later. Besides, Lena started making out with her right after and they start swapping my cum back and forth. In the end, it was all good," he says as if it was no big deal.');
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).gopnikbandQW ?? 0)?.['valob'] === 4  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
          scene.text('As the two of you sit talking, Roman gets up and starts pissing in an empty beer bottle. Valentin just shakes his head. "For fuck\'s sake! The asshole could\'ve walked outside to take a piss!" he comments in annoyance.');
          scene.text('"I thought you guys were all friends?" you inquire.');
          scene.text('"No, he can be cool, but he\'s just too unpredictable. It can be fun, but sometimes he just causes too much trouble," he says as Roman finishes pissing in the bottle.');
          scene.text('"He\'s really that bad?" you ask. "I\'ve heard rumors…"');
          scene.text('"Are you kidding me?! Just the other day, he jumped like five guys and started beating them. We try and stop him, but it doesn\'t matter. The other guys attack us and we ended up having to kick their asses. It could\'ve ended really badly. One day, he\'s going to start a fight with someone dangerous, someone that doesn\'t fuck around…"');
          scene.actions([
            { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Did you enjoy the music, <<$pcs_nickname>>?" Valentin eagerly asks.
          scene.text(`"Did you enjoy the music, ${((s as any).pcs_nickname || '')}?" Valentin eagerly asks.`);
          scene.text('You nod. "Yeah, you seem to have really improved since last time."');
          scene.text('"It\'s looking better and better. If we keep this up, we\'ve got a chance to make it big, at least on a national level." His eyes fill with pride.');
          scene.text('"You\'ll need to keep it up and play at more venues over in St. Petersburg. You\'ll never get discovered if you keep playing around here," you comment, trying to keep him leveled.');
          scene.text('"I know, but tell that to Radomir. He wants to become famous and get inside girls panties, but he doesn\'t want to put in the effort for us to succeed. He thinks it\'s just going to happen." He lets out an exasperated sigh.');
          scene.actions([
            { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_valentin1'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatValentin1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'What\'s the deal with Radomir and Nush?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You know they used to date, but it seems like more than that. "So what\'s the deal with Rad and Nush anyways?" you ask.');
    scene.text('Valentin glances at you. "What do you mean?"');
    scene.text('"Well, I know they used to date and broke up, but they seem like more than just friends at times. What\'s the story?"');
    scene.text('"You want to know about Nush and Rad? Where to start…" he mutters.');
    scene.text('"Start from the beginning!" you exclaim.');
    scene.text('"Girl meets boy, boy meets girl. One falls more in love than the other and she gets hurt, runs over and cries on another band member\'s shoulder… You know the typical Pavlovsk love story."');
    scene.text('"You seem to be tired of talking about it…" you jokingly say and he just frowns in response.');
    scene.actions([
      { label: 'Drop it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You decide that you\'ve heard enough and change the subject. The two of you are soon talking about the band.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Press the issue', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"Yeah but they broke up, so they\'re no longer an item…" you say.');
    scene.text('"Sure, they broke up." He laughs slightly. "To be honest, I get why they broke up and why it\'s good for the band, but them hooking up from time to time, especially with how they sometimes get all lovely dovey until Rad gets tired of using her and starts treating her like shit again, isn\'t going to end well. She\'ll eventually get sick of it, or worse they\'ll get back together." Valentin looks away with a gloomy glare.');
    scene.text('"You really think it will cause problems?" you ask.');
    scene.text('He nods. "If she finally gets sick of it, I\'m afraid Rad won\'t let it go and she\'ll end up leaving the band. There\'s no way we can replace her, at least not easily. I mean it would be good for her, but suck for the rest of us."');
    scene.text('You can understand that. "But you said it would be worse if they got back together. How so?"');
    scene.text('He just gives you a look of disbelief. "Are you kidding?"');
    scene.text('You shake your head. "No. I know they dated, Rad cheated on her, and then they broke up."');
    scene.text('He shakes his head. "That\'s only part of the story."');
    scene.actions([
      { label: 'Drop it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You decide that you\'ve heard enough and change the subject. The two of you are soon talking about the band.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Tell me more', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    if (((s as any).npc_rel ?? 0)?.['A158'] < 60) {
      // TODO-QSP: dynamic text: He shakes his head. "Look, you seem like a nice girl <<$pcs_nickname>>, but we'r...
      scene.text(`He shakes his head. "Look, you seem like a nice girl ${((s as any).pcs_nickname || '')}, but we're not exactly friends. I'm not going to tell a friend's story to someone I barely know. If you want to know, then ask them."`);
      scene.text('"No one wants to talk about it…" you inform him.');
      scene.text('He shrugs and gets up. "Not my problem." He then walks off and you\'re soon engaged in a group discussion about something that happened at school.');
      scene.actions([
        { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: He sighs. "Look, it isn't really my story to tell. You seem like a cool chick an...
      scene.text(`He sighs. "Look, it isn't really my story to tell. You seem like a cool chick and all ${((s as any).pcs_nickname || '')}, but you should really ask them."`);
      scene.text('You lean in close, putting on your charm. "You know no one wants to talk about it, so come on and tell me. I know you want to. Please?" you ask him sweetly.');
      scene.text('He glances at you and can\'t help but smile. "Okay fine, but you didn\'t hear it from me."');
      scene.text('You nod. "I promise."');
      scene.text('"So Rad and I started a band with the douchebag that was our previous drummer. He was like Rad, only he had a much bigger ego, was sexist and didn\'t have any of Rad\'s charm or much in the way of talent. We were young enough that we hadn\'t figured out how bad he really was yet. Anyway, we start our band and one night Nush shows up. She\'d been helping her dad in the garage when she heard us and came to listen."');
      scene.text('You just nod, not wanting to interrupt him.');
      scene.text('"At first, she was just our number one fan and started giving Rad some pointers. It seems like she knew how to play guitar, which douche objected to, but Rad didn\'t care. The two of them started hanging out and playing guitar together and one day they show up together, holding hands and stuff and Rad tells me they\'ve started dating. At first, things were going well, other than douche. Nush helps out more and more and they seem to get along well enough."');
      scene.actions([
        { label: 'Then what happened?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You prod him to keep going. "Then what happened?"');
    scene.text('He shrugs. "Rad became Rad. I mean I always knew he didn\'t think much of girls, his older brother and dad were the same way. Anyway, Rad shows up with this new song he wants to play. He called it "Cherry." God, it was awful… He\'d quickly threw it together and we couldn\'t figure out why he wanted to play it, but once we finish, I notice Nush blushing as red as I\'ve ever seen her. Turns out the song was about Rad popping her cherry."');
    scene.text('He shakes his head slightly. "After that, he started treating her like shit even before he cheated on her."');
    scene.text('"How bad was it?" you ask.');
    scene.text('"He made her do his homework and got the best grades he\'s ever had," he adds with a laugh. "He also used to make her come over when we would hang out and cook for us, get our drinks, run to the store to get snacks when we ran out. He treated her like his personal slave and when he wasn\'t bossing her around, he wanted to fuck her. He treated her even worse then."');
    scene.actions([
      { label: 'Go on', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"What did he do that was so bad when they had sex?" you ask.');
    scene.text('He shakes his head. "You mean other than making her give him a blowjob any time he felt like it, regardless if she wanted to or not? He didn\'t force her, but would just say crap like if she loved him she would, how other girls would do it or how she should be glad that he was her boyfriend and how lucky she was to have a boyfriend at all. You know, emotionally and mentally beat her down until she gave in."');
    scene.text('You shake your head. "Guys can be such assholes…"');
    scene.text('He smiles. "Yeah, we can. Sometimes you\'re just willing to say or do anything to get your dick wet." He blows it off, like it\'s just the way things are.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('He continues when you don\'t respond. "Anyway, that pretty much sums Rad up. He catches up to me one day as I\'m walking to school and has this huge grin on his face. He tells me Nush let him fuck her ass, so I gave him a high five and asked him about it."');
    scene.text('He stops and shakes his head. "Thinking back, I wish I hadn\'t. He tells me about how he talked her into it and it sounded like she was up for it too, but he says after they started she wanted to stop. He just brow beat her into continuing, however, by telling her all the same shit about if she loved him and stuff. He brags about how she starts crying because he\'s too big for her and it hurts so much." You can hear the air quotes around big when he says it. "He brags about how she\'s balling her eyes out, saying he has her wrapped around his finger and she\'ll do anything for him. That pretty much sums up their sex life. She would let him do anything he wanted to her."');
    scene.actions([
      { label: 'Surprised she likes anal', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You shake your head. "If that was her first time, then I\'m surprised she likes it now."');
    scene.text('He shrugs. "I guess she got used to it. That and it doesn\'t have to hurt if the guy isn\'t a dick about it."');
    scene.text('You snort and shake your head as he continues. "Yeah okay, we tend to get carried away sometimes, but most of us want the girl to enjoy it as much as we do, if for no other reason than to make sure she\'s willing to continue having sex with us," he responds. "Anyway, that wasn\'t as bad as what he did next."');
    scene.text('"And what\'s that?" you reply.');
    scene.text('"He started cheating on her with any chick he could nail."');
    scene.actions([
      { label: 'Continue', goto: ['praiders_garage_chat', 'radcheated'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"So is Radomir always this full of himself?" you ask and Valentin seems visibly annoyed.');
    scene.text('"Unfortunately, yeah. The worst part of it is that he\'s really talented, and not just at singing. He can play the guitar almost as good as Nush and he has a knack for lining up gigs. If he put half as much effort into the band as he does chasing pussy, we would likely already have a record deal. My biggest worry is he\'ll dump us and sign solo as soon as we start to become famous." He starts awkwardly laughing.');
    scene.text('"You really think he would do that?!" you loudly reply.');
    scene.text('"Without even blinking. He has a massive ego and thinks it\'s all about him." He looks towards Radomir. "Worse case, Nush can take over lead vocals and we can get another guitar player."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"So who you do hang out with the most within the band?" you ask, wanting to get to know Valentin a little better.');
    scene.text('He thinks before answering. "That\'s a tough one, but I would probably say Arkadi."');
    scene.text('"Really? I didn\'t actually think you two would hang that much," you comment.');
    scene.text('"Yeah? Arkadi is pretty cool and we usually party a lot, so we \'bonded\'," he says with finger quotes. "So yeah, he\'s probably the one I\'m closest to in the band. Plus we often talk about how best to keep Rad and Nush focused on the band instead of their own drama."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"You and Nush seem to get along pretty well," you say with a teasing hint.');
    scene.text('He smiles. "Yeah, she\'s a pretty cool chick who\'s great to party with or even just hang out with. She has her priorities straight… for the most part." He ends his sentence with a frown.');
    scene.text('You look at him as he looks a bit dejected. "What\'s wrong?"');
    scene.text('He sighs. "I can\'t wrap my head around how a cool chick like Nush runs after someone that treats her like crap…"');
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
      scene.text('"A little jealous are we?" you say teasingly.');
      scene.text('He responds a bit too fast. "What?! No! I mean she\'s really cool and all and I like spending time with her is all. We seem to click, so I just don\'t understand how she can let Rad walk all over her. I know they used to date, but still…" He seems honestly perplexed by it.');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
        if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
      }
      scene.text('"What? Who does Nush let walk all over her?" you ask.');
      scene.text('He stares at you dumbfounded. "Rad. Haven\'t you ever watched them together? I know they used to date, but honestly I just don\'t understand how she can let him walk all over her." He seems honestly perplexed by it. "She needs to stand up to him or find a guy that will treat her well."');
      scene.text('You smile at him. "You mean a guy like you?"');
      scene.text('"What?! No! Well sure I like her. She\'s a cool chick, but we\'re friends and I just hate seeing her get mistreated is all."');
    }
    scene.actions([
      { label: 'Why don\'t you ask her out?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You don\'t really know the best way to go about it, but decide to try anyway. "Well, the last time I checked she\'s single and you\'re single. Why don\'t you just ask her out?"');
    scene.text('Valentin laughs. "I have. She\'s cool with hanging out, partying or even fucking…" He then goes quiet. "But she\'s also made it pretty clear that she\'s not looking for anything more than friends with benefits, despite how she constantly chases after Rad." He shakes his head. "I think she\'s still in love with him."');
    scene.text('You glance over and it just so happens that Radomir and Anushka are sitting with each other, getting friendly. "Yeah… Well maybe she\'ll change her mind some day?" you reply, but he changes the subject.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Don\'t encourage him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"I agree, it\'s a bit strange…" you comment.');
    scene.text('"What can you do? Nush seems like she\'s still smitten by him, so I don\'t really know what to do about it…" he says trying to blow it off, but you get the feeling it bothers him more than he\'s letting on.');
    scene.text('"My advice? Let her live her life. You can\'t wait for her to change, so you got focus on you," you tell him in encouragement.');
    scene.text('He nods. "Yeah, you\'re right. It\'s not like I don\'t get to fuck her already," he says with a laugh, making light of the whole situation. He then changes the subject.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about the old drummer', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"So I\'ve been hearing some whispers about the old drummer…" you start off.');
    scene.text('Valentin interrupts you before you finish. "He was an idiot that he thought he was God\'s gift to humanity."');
    scene.text('"That bad?" you continue.');
    scene.text('"Yeah, he managed to have an even bigger ego than Rad, if you can believe that. I\'m getting annoyed just thinking about him, but yes, he was a dick to Nush too, saying that she\'s only good for sucking cock and refusing to play in the same band as a girl."');
    scene.text('"Why wouldn\'t he play in a band with a girl?" you ask.');
    scene.text('Valentin just shrugs. "He seemed to think girls can\'t play or sing, despite all the girl bands out there. Anyway, he bitched and caused problems all the time and finally demanded that either she went or he did. Rad and I told him to fuck off and he left. End of story. In the end, it was the best thing we ever did. We got Arkadi to replace him and we\'re far better for it." You can tell he doesn\'t want to elaborate on it further, so you change the subject and talk about other stuff.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRadcheated(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  scene.text('"He started cheating on her?" you ask.');
  scene.text('He nods. "Yeah, right after he popped both her cherries. Not long after that, we had our first gig at a party Lavrenti was throwing."');
  scene.text('"Then what?" you ask intrigued');
  scene.text('"After we finish our set, he disappears. After I help take care of our gear, I head upstairs to the bathroom, only to find Rad in there getting a blowjob from some chick a few years older than us. I don\'t know if that was the first time or what, I just know after that he cheated on Nush every chance he got. He had two or three regulars he fucked around with, plus he managed to find some girl to fuck at gigs. Eventually Nush caught him and they had a big fight over it."');
  scene.text('"Is that why the old drummer left?" you ask.');
  scene.text('He shakes his head. "No, but it was around the same time. No, Nush forgives him and he promises not to screw around on her again. That was an obvious lie as you\'d guess. After that, they were all lovey dovey again and douche left, with Arkadi joining us soon after, but Rad kept cheating, telling her it was the price of dating a rock star. She stayed with him, but she was clearly miserable and on more than one night, she cried on my shoulder about it, practically begging me to get him to stop. I did what I could, but I knew nothing was going to change."');
  // TODO-QSP: end
  scene.actions([
    { label: 'So what did you do?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"So what did you do?" you ask.');
    scene.text('He shrugs. "Nothing. I talked to Rad and it was obvious he wasn\'t in love with her anymore, if he ever was. He just liked fucking her and loved the attention she devoted to him. Plus, he loved fucking every girl he could, knowing he could get away with it. There was no way he was going to stop. I finally told him she would get tired of it and if they broke up, it could ruin the band. He said she would never dump him, yet the next day he dumped her, saying it was the best for the band. It was, but he was a massive dick about it."');
    scene.text('"We hit a bit of a rough patch after that. She took it hard at first and didn\'t hang out with us, but Rad eventually talked her into staying in the band. I won\'t lie, I did the same thing because we needed her. At first, she was always jealous about the other girls but then… she just stopped caring, for the most part anyway. One night after practice, Rad left with some hottie and Nush came onto to me. We fucked like crazy, but afterwards she made it clear she was just looking for a good time and we were just friends. After that Nush became, well… Nush, a slutty party girl that likes to get drunk, high and have fun. Don\'t get me wrong, Nush was always a wild girl, but she became, let\'s call it \'sexually liberated\' to go along with her other wild ways. The new Nush is even better than the old one," he adds with a laugh.');
    scene.actions([
      { label: 'But is she over him?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"Yeah, but is she really over him?" you ask.');
    scene.text('He sighs. "Honestly? I don\'t think so, at least not completely. She fell for him hard since he was her first in every sense of the word. I\'m not sure if she\'ll ever completely get over him. Most of us always have a special place in our heart for our first love. If she would stop hooking up with him and just be friends or bandmates, she might but…" He trails off before shrugging. "Anyway, that\'s the whole story about why they are the way they are."');
    scene.text('You think about it, and this does explain a lot. While you\'re thinking, Valentin starts chatting to some girl that sits next to him and starts asking him about the band while flirting with him. He\'s only too happy to reciprocate, leaving you to join in the group discussion going on nearby.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatArkadi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A156', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big156.jpg');
  // TODO-QSP: dynamic text: You take a seat next to Arkadi as everyone spreads out. He seems pretty pumped a...
  scene.text(`You take a seat next to Arkadi as everyone spreads out. He seems pretty pumped as you sit next to him - you think he might be on drugs. "I'm fucking buzzing, ${((s as any).pcs_nickname || '')}! I'm going to explode with energy!" He looks around as if he's looking for something or someone. Before you can initiate a conversation, he continues talking about how he needs to see a city friend that will hook him up with something. He's a little arrogant as you speak, rarely listening to what you have to say.`);
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['arkob'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['arkob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
    scene.text('"I notice you and Roman hanging out sometimes," you comment.');
    // TODO-QSP: dynamic text: "Yeah, he's my brother in arms. No one likes to fight as much as that kid. I'm t...
    scene.text(`"Yeah, he's my brother in arms. No one likes to fight as much as that kid. I'm telling you ${((s as any).pcs_nickname || '')}, he would fit right in with the crowd I hung out with in the city. He's mean, he can fight and he can take a beating."`);
    scene.text('"The two of you fight or something?" you pry.');
    scene.text('"Yeah, he was really cocky when I was new in class, always clowning around trying to show off his \'feathers\'. I had it one day and told him to meet me outside after school and we would talk it out."');
    scene.actions([
      { label: 'What happened?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('You\'re on the edge of your seat. You heard rumors about it back when it happened a few years ago.');
    scene.text('Arkadi brightens up. "I should\'ve gotten to know him a little bit better first. Wait for the end of school? Not this fucker…" He points towards Roman, who flips him off. "Oh no, he just jumps across his desk and starts a fight with me. Can you believe it?! In the middle of the classroom!"');
    scene.text('"I bet you got in trouble there…" you comment.');
    scene.text('"You can bet your sweet ass we did, and it was only my second day in school!" he laughs.');
    scene.actions([
      { label: 'Ask him the most important question', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"So… Who won?" you teasingly ask.');
    scene.text('He goes numb before breaking out in laughter. "No one! We knocked each other out. Didn\'t even come to before we were brought to the nurse."');
    scene.text('"Oh…" you shortly reply.');
    scene.text('"Since then, we\'ve been hanging out with each other. We go out, bash some heads and have fun, you know?"');
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_arkadi1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).gopnikbandQW ?? 0)?.['arkob'] === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
      scene.text('As you talk to Arkadi, Lavrenti stops by and passes something to him. They do a complex handshake and exchange greetings. They seem to get along pretty well.');
      scene.text('"What do you think about Lavrenti?" you ask.');
      scene.text('"A cool dude who supplies me with what I need to work properly," he winks.');
      scene.text('"You mean alcohol and drugs?" you ask curiously, knowing Lavrenti has a reputation for always having both.');
      // TODO-QSP: dynamic text: "Listen here, <<$pcs_nickname>>," He grabs you by the arms. "I need that stuff t...
      scene.text(`"Listen here, ${((s as any).pcs_nickname || '')}," He grabs you by the arms. "I need that stuff to function properly. There's nothing wrong with that…" He squeezes your arm even harder.`);
      scene.text('You shake your head. "No, no. Nothing wrong with that…"');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_arkadi1'] },
      ]);
    } else {
      scene.text('He eventually seems to calm down and notice you\'re there. You talk as you also both engage in the general group conversations as well. The conversation slolwy drifts to the band and how things are going where he wants them to, which is the big time. "We\'ve got the talent. If we could all just stay focused, we could make it. I mean really make it, as in world wide fame." He seems pretty convinced, but you\'re not. They\'re pretty good, but world wide fame is a long shot.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_arkadi1'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatArkadi1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big156.jpg');
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  // TODO-QSP: end
  scene.actions([
    { label: 'How\'s the band doing?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"So how is the band doing? Any gigs lined up?" you ask.');
    scene.text('"The band is cool and all, but we need to stop with this petty bullshit. Wherever we go, it often ends up in drama…" he complains.');
    scene.text('"That\'s too bad. Some of your stuff is really good," you say, trying to cheer him up.');
    scene.text('"If everyone would just focus on their damn business, we would get more gigs and build our reputation, but that almost seem impossible with these people…"');
    scene.text('You think a moment. "Who\'s causing the drama?"');
    scene.text('He gives you a dumbfounded glare. "Who fucking else? Rad and Nush! There\'s always drama when they get in one of their moods, or when Rad decides to fuck around and focus on pussy instead of music. If we\'re going to make it, they need to focus, you know?" He seems to be in a bad mood now and barely responds to anything you say.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"Rad seemed to be in rare form during practice tonight." As you start to talk about Radomir, you\'re interrupted by a girl squealing that draws your attention. You look over and see some girl sitting on Radomir\'s lap. He\'s in the process of feeling her up and she\'s half heartedly resisting him, but it\'s obvious she likes it by how she\'s acting.');
    scene.text('"Don\'t get me started on Rad…" Arkadi suddenly says. "I should really kick his ass so he wises up and stops chasing skirts."');
    scene.text('"Aren\'t you all like that though? What\'s the difference with him?" you ask.');
    scene.text('"The guy\'s talented and he knows it, but that\'s the problem. He refuses to work on improving, happy to skate by on his natural talent instead of perfecting it. He only wants to fuck around as if he won\'t get to do that later on. Hell, he\'ll get to fuck better looking hoes than the trash that walks around here, no offense…" he says as he grabs a beer.');
    scene.text('Flabbergasted by his comment, you manage to blurt out a response. "N-None taken. I hope you can convince him somehow…" He gets up and walks over to grab a beer and doesn\'t come back to sit next to you.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    if (!(s as any).valentin) (s as any).valentin = {}; (s as any).valentin['love_nush'] = 1;
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"You and Valentin seem to get along pretty well," you comment.');
    scene.text('"Val is pretty fun in many ways. He reminds me of a friend from the city, so I like hanging out with him," Arkadi suddenly lets his guard down more than usual.');
    scene.text('You see a chance to finally see another side of him. "So what makes him so great?"');
    scene.text('"Well, first of all, he likes to party, so we do that together. I can\'t take out Roman with me, not if I want to party and get laid. Roman is good if I feel like busting some heads, but that\'s about it. Trying to take Roman somewhere to have a relaxing time would just end in disaster, so I need someone that\'s pretty smooth and laid back. Plus I like to fuck with him about Nush," he winks. "It\'s obvious he likes her, but she\'s made it pretty clear that she\'s not interested in anything but fucking around, so he takes what he can get. He likes to say he\'s cool with it, but it\'s so obvious he\'d like to be more than just friends with her."');
    scene.text('"Is that so?" you smirk. "Maybe I should give him…"');
    scene.text('Arkadi interrupts you as you\'re about to finish your train of thought. "Don\'t you dare say anything about it or I\'ll fucking hurt you! I\'m not kidding." In mere seconds, Arkadi has changed back to his regular self. His look suggests he\'s serious, which leaves you baffled why he would care. You change the subject and he seems to calm down.');
    scene.text('He lets out a laugh. "The band don\'t need more drama, so let it be." Just as quickly, he\'s back to being friendly. You talk a bit more about some of the things him and Valentin get up to outside of the band.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"You and Nush seem to get along pretty well," you comment.');
    scene.text('"Man, Nush really needs to make up her mind!" he says with an annoyed tone.');
    scene.text('"What do you mean?" you ask.');
    scene.text('"Well, she\'s cool when she\'s got her professional face on. She plays well, sings well and is a real asset to the band. She\'s also fun to party with, and is great to be around, but then she suddenly gets this twitch in her head and she turns into some little groupie slut, behaving like any other groupie…"');
    scene.text('You\'re a bit confused. "What do you mean? She\'s in the band, so how can she be a groupie at the same time?"');
    scene.text('He sighs. "With Rad. Suddenly, they start acting all lovey dovey like there\'s something there, acting like any other groupie that wants to be fucked by fame, and when she gets like that, drama is sure to follow. She gets annoying as fuck and not fun to be around. Plus it feeds Rad\'s ego, which makes matters worse."');
    scene.text('"Can\'t you say something to her?" you ask.');
    scene.text('"She doesn\'t listen to reason. I\'ve even threatened her, but she still goes back to her old ways. It\'s getting quite annoying and she needs to make up her damn mind about what she wants to do!"');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'What\'s Radomir and Anushka\'s deal?', handler: (st: GameState) => {
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
    }
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('As you talk about the band, you think about how you\'ve seen Anushka and Radomir and how they sometimes act more like a couple than friends. "Nush and Rad are each other\'s throats fighting one day, then they\'re acting like friends or are being all lovey dovey. What\'s up with that?" you ask.');
    scene.text('"Don\'t get me started on that…" he sighs. "They used to be together and then Rad dumped her, but she still can\'t get enough of him, so she keeps coming back over and over again."');
    scene.text('"Wait, they used to date, then Rad dumped her? Now she keeps going back to him? You mean she\'s trying to get back together with him?" you press on.');
    scene.text('He shrugs. "Fuck, I don\'t know. Sometimes she stands her ground and will argue with him when he\'s being a douche. Other times, he goes chasing her fine little ass and she\'ll hook up with him. She lets him treat her like utter shit and doesn\'t say or do anything about it."');
    scene.text('"Sounds like they have a complicated relationship," you comment.');
    scene.text('"I don\'t really want to know about their relationship, it\'s not that interesting. I wouldn\'t care if it didn\'t fuck with the band\'s dynamic," he says in an annoyed voice.');
    scene.actions([
      { label: 'Drop it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('You agree with him. You don\'t really want to know more about their relationship either, so you change the subject.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Press him for more information', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"What more can you tell me?" you ask curiously.');
    scene.text('He shakes his head. "I\'m not getting involved. I just wish they would stop with the drama." Noticing your look, he sighs. "You should ask Val instead, he\'ll probably tell you more. This all started before I joined, so I don\'t know all the details and I honestly don\'t want to know." He nods towards Valentin before getting up and walking away, obviously not wanting to talk about it any longer.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about the previous drummer', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"Do you know anything about the drummer you replaced?" you ask.');
    scene.text('Arkadi looks at you in silence for a while. "Oh, that pussy who couldn\'t handle a girl in the band? Well luckily for him, I wasn\'t here to have a few choice words with him…"');
    scene.text('"You would\'ve beat him up?!" you gasp.');
    scene.text('"Yeah, not because of Nush, she can handle herself, but simply for the kid being a big ass bitch. Stupid people like that need to have the stupid beat out of them until they wise up or shut up," he says while cracking his knuckles. He then gets up and walks over to get a beer, leaving you sitting alone. You join in some group conversations for the rest of the evening.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatAlyona(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big143.jpg');
  scene.text('You take a seat next to Alyona as everyone spreads out. She scoots over as you sit next to her. "Hey…" she mumbles as a manner of greeting. Before you can respond, she picks up a beer and starts to guzzle it down, not really paying any attention to you. She then snaps back, laughing and asking what you were saying.');
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['alyob'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['alyob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['roman_present'] === 1) {
    scene.text('You notice Roman standing next to some girl with his crotch almost in her face. He moves when she does, keeping his crotch pretty much in her face until she stands up and leaves, which just makes Roman laugh.');
    scene.text('"What a douche!" Alyona says in an annoyed tone.');
    scene.text('"Yeah he can be, but I thought you were cool with Roman?" you reply.');
    scene.text('She stares at you with an annoyed glare. "Why would I be on friendly terms with him? He\'s truly the worst, always trying to pick a fight or something. When he isn\'t fighting, he\'s fucking with people trying to get a reaction out of them, or just hurting people that can\'t fight back because he gets off on it. He has all the worse characteristics of the gopniks with none of their positives."');
    scene.text('From what you\'ve seen of him, you can\'t really argue the point. "So why do they invite him?"');
    scene.text('She shrugs. "A lot of the hardcore gopniks think he\'s funny and Arkadi seems to like him for some reason, so he comes to hang out sometimes and I guess he likes their music." She starts telling you about a time Roman held down a kid several years younger and pinched his ears just to make him cry.');
    scene.actions([
      { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_alyona1'] },
    ]);
  } else {
    if (((s as any).gopnikbandQW ?? 0)?.['alyob'] === 2  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
      scene.text('Lena and Lera walk by. "Hey, bunny…" Lera says with a smirk.');
      scene.text('You watch them walk off then turn to Alyona. "I seen you hanging out with Lena and Lera in the courtyard the other day. You guys hang out a lot?"');
      scene.text('She drunkenly slurs her words slightly. "Yeah, I guess they\'re okay. They\'re jealous whores sometimes, which annoys me, but I don\'t mind most of the time."');
      scene.text('"Who are they jealous of?" you curiously ask.');
      scene.text('Alyona snorts. "Anyone prettier than them. Lena is especially jealous of Nush though, who gets away with doing what she wants when she wants, not to mention most of the boys pay attention to Nush when she\'s around." She shrugs a little. "I admit it can get annoying when she gets most of the attention. Lera is just jealous of anyone Lena looks at, the fucking dyke."');
      scene.text('You\'re a little confused. "You don\'t like lesbians? Don\'t you and Nush fool around?"');
      scene.text('Alyona glares at you like you\'re stupid. "We\'re not dykes! We mess around and have fun sometimes, but we like dick. Lera is strictly a carpet muncher. Fuck it, I don\'t care if she is or not, but she needs to figure out that Lena isn\'t a lesbian and deal with it. She just gets on my nerves acting like hot shit because she\'s Lena\'s friend, who only acts like hot shit because of who her brother is. If they\'re going to walk around acting like bad bitches, they need to earn it, you know?"');
      scene.actions([
        { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_alyona1'] },
      ]);
    } else {
      if (((s as any).gopnikbandQW ?? 0)?.['alyob'] === 3  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
        scene.text('You\'re sitting making small talk when suddenly Alyona yells out. "Where the fuck is Lavrenti?!"');
        scene.text('You look around and search for him. "I can\'t see him. Are you sure he\'s here tonight? Do you need him for something?"');
        scene.text('"That fucker\'s probably got some drugs on him, he always does. I need him to hook me up, he\'s always willing to hook me up."');
        scene.text('"Do you often do that with him?" you worryingly look at her. You know she has a reputation for being drunk and high most of the time.');
        scene.text('Alyona gets really annoyed by you. "Look here, bitch. What Lavrenti and I do while we party has got nothing to do with you, got it?!"');
        scene.text('"Okay, sorry for caring…" you fire back.');
        scene.text('Alyona snaps before you can finish what you were about to say. "Who the fuck asked you? Stay out of my business!" She gets up and leaves you alone to talk to some people you don\'t know.');
        scene.actions([
          { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_anushka1'] },
        ]);
      } else {
        scene.text('You make small talk with her for a while and she seems to finally be a bit more coherent than normal, enough for you to ask her some questions. You ask her something, but she doesn\'t seem to hear you so you ask her again.');
        scene.actions([
          { label: 'Ask her some questions', goto: ['praiders_garage_chat', 'chat_alyona1'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatAlyona1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big143.jpg');
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'Ask about "the relationship"', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"So Rad and Nush were together before?" you ask.');
    scene.text('"Yeah, you know what they say. A girl always remembers her first…" Alyona speaks lightly.');
    scene.text('"Wait, what?! Radomir was Anushka\'s first?!" You try your hardest to keep your voice down.');
    scene.text('Alyona quickly puts a finger to her lips. "Quiet! It\'s not something Nush is really proud of. The fucker seduced her and wore her down until she gave up her cherry to him. Then the asshole started cheating on her."');
    scene.text('"What an asshole!" you reply.');
    scene.text('She nods. "Tell me about it. Anyyway, it\'s not my story to tell."');
    if (((s as any).npc_rel ?? 0)?.['A143'] >= 60) {
      scene.text('"Is that why they broke up?" you ask.');
      scene.text('She shakes her head. "No, it tore her up. I spent the whole weekend at her place while she cried about it. She eventually forgave him, but it didn\'t stop the asshole from cheating on her and then he had the balls to break up with her. Some lame ass excuse about how it was best for the band. She can do so much better than that asshole." She continues talking about Radomir being a bastard. She really doesn\'t like him and seems to have plenty to say on the topic.');
      scene.actions([
        { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
      ]);
    } else {
      scene.text('You think about pressing her, but she seems to notice and gives you a look that suggests it would be unwise, so you drop and instead change the subject, which turns out to be mostly her complaining about how most guys are assholes who just want to fuck you and don\'t give a shit about you.');
      scene.actions([
        { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about the band', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"So what do you think of the band?" you ask.');
    scene.text('For a moment, she doesn\'t say anything and you\'re starting to think she didn\'t hear you when she finally turns to look at you. "What?"');
    scene.text('"I said what do you think about the band?" you ask again.');
    scene.text('"I\'m a bit jealous about how talented they are…" she starts off. "They\'re really good and I think they can make it big if they keep it up. Knowing these knuckleheads, they\'ll probably get into a fight and end up killing each other before that happens!" she laughs.');
    scene.text('"You think so?" you ask.');
    scene.text('She shrugs her shoulders. "Who knows? I really hope they continue like this. I would love to see them on a bigger stage, rocking it out, but I think Rad will probably fuck it all up for them."');
    scene.text('"Oh yeah? Why do you think that?"');
    scene.text('She glances at you as if it should be obvious. "Because Rad\'s Rad. Why else?" She starts talking to some of the other people nearby and you end up talking with them as well. It seems like she doesn\'t want to elaborate further.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
    }
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"You and Anushka seem pretty close," you comment.');
    scene.text('She nods. "She\'s my best friend and one of the only people that doesn\'t judge or look down on me."');
    scene.text('"Why would people look down on you or judge you?" you ask.');
    scene.text('She gives you a sour look and you can tell she doesn\'t want to talk about it. "Because of my fucked up family. I don\'t want to talk about it." She glances at Anushka and changes the subject back.');
    scene.text('"I just wish someone else would come along and sweep her off her feet or she would just finally get over that douchebag Rad. She really deserves someone that treats her better. I don\'t really understand what she sees in him, but what can you do? I\'ve tried to tell her but she only gets mad at me, so I just leave her alone and listen to her complain…" she sighs.');
    scene.text('"So they used to date?" you ask.');
    scene.text('"Yeah…" she mumbles before suddenly standing up. "I need another beer." She walks over and grabs another beer before talking to some guy at the cooler. You end up talking to some of the other people sitting near you.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    if (!(s as any).valentin) (s as any).valentin = {}; (s as any).valentin['love_nush'] = 1;
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"What\'s the deal with you and Valentin?" you ask.');
    scene.text('"W-What do you mean?" she stutters, her cheeks flushing.');
    scene.text('"I noticed the way you guys exchange looks at school sometimes. You guys hooking up or what?" you grin.');
    scene.text('She squirms a little. "Yeah, we hook up from time to time. There\'s nothing to it really. We just seem to click sometimes and end up having a great time."');
    scene.text('"So… Are you thinking about getting together?" you pry.');
    scene.text('She shakes her head. "No way, I\'m not big on sharing and all the boys in the band bang every groupie they can. If we dated and I seen another girl hanging with him, I would beat her ass and then his, so it\'s better that we keep it this way. Besides, he\'s got it bad for Nush. A pity she doesn\'t seem to notice. I think he would be good for her."');
    scene.text('"Really? Valentin\'s got the hots for Nush?"');
    scene.text('She nods and goes on to tell you how obvious it is that he likes her and how the only person that doesn\'t seem to notice is Anushka.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"What do you think about Arkadi?" you ask.');
    scene.text('"What about him?"');
    scene.text('"You like hanging out with him? Ever talked with him about stuff? You know, the usual stuff," you continue.');
    scene.text('"Oh, I see. Yeah he\'s cool to hang out with sometimes. He has lots of cool stories from before he moved to Pavlovsk. And he\'s pretty funny too." She starts smiling. "Sometimes, I just want to smack him on the head when he starts rambling about how much better the city is than Pavlovsk. You\'re stuck here now, so shut the hell up and deal with it, you know?" She talks about a time she and the band went to the city and how he showed them some cool little spots.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"So what do you think about Radomir?" you pry.');
    scene.text('"How many times he\'s hit on me, you wonder?" she laughs.');
    scene.text('"He really does that? Even though you\'re Anushka\'s best friend?" You ask.');
    scene.text('She looks at you wide eyed. "Let me tell you, that dude would fuck and tries to fuck every hot girl he meets, and to pretty much everyone\'s disgust, he often manages to pull it off. This not only annoys me, but also the rest of the people that like to hang around here since we know it bothers Anushka, though she really needs to get over it."');
    scene.text('"So stay away from Radomir, that\'s what you\'re saying?" you carefully ask.');
    scene.text('"Yes, very much so. Unless you want to be treated like a piece of meat." You both start laughing and share stories about the various lame attempts guys have made to pick you up.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about the previous drummer', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"So there\'s been lots of talk about this former drummer…" you randomly mention.');
    scene.text('"That loser? Who the fuck was talking about him?" she asks, apparently not believing anyone would talk about him.');
    scene.text('You\'re a little taken aback. "Only that he left because Anushka joined the band."');
    scene.text('"Yeah. He left because his \'manhood\' got hurt at the idea that Nush could rock out better than any of the guys can. It\'s good that he left and Nush remained since they\'re much better now than they would\'ve been with that loser," she frowns and starts talking about what a loser the previous drummer was.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatLenalera(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A21', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big20.jpg');
  scene.text('You take a seat next to Lena and Lera, who are really rowdy. They\'ve already had quite a lot to drink and you can see it on their faces that they would like the couch to themselves, but Lera sighs as she moves closer towards Lena. "I\'m so wet right now! The band got me going!" Lena yells out just as Lera is about to make a move.');
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['leleob'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['leleob'] === 1  &&  ((s as any).gopnikbandQW ?? 0)?.['lavrenti_present'] === 1) {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['lav_lena_know'] = 1;
    scene.text('Lena gets up and catches up to Lavrenti. He passes her something and gives her pat on the ass. You glance over and notice the sour look on Lera\'s face. If looks could kill, Lavrenti would be a dead man. Before you can say anything, Lena comes back over and shows Lera a small bag of pills. "Look what Lav hooked me up with." She seems really happy and even Lera brightens up a bit.');
    scene.text('You decide to ask about the little exchange. "You and Lav seemed pretty friendly…" you say in a teasing tone.');
    scene.text('Lena turns on you. "What the fuck is it to you?"');
    scene.text('"Uh… Well, I just see the two of you together sometimes and it seems like you\'re close…" you reply, but that only seems to annoy her more.');
    scene.text('"It\'s none of your business who I hang out with!" she snaps back.');
    scene.text('To your surprise, Lera seems to come to your defense. "Don\'t be like that. She\'s just telling you what she saw. You and Lav do \'hang out\' a lot… " There\'s a hint of jealousy in her voice, but she shrugs her shoulders as if she doesn\'t really care. "I know Vitek wouldn\'t like you hanging out with Lav."');
    scene.text('Lena inhales sharply through her nose and you watch as her jaw clenches. "You better fucking not…" she warns before whipping around to look at you as she repeats herself. "That goes for you too!"');
    scene.text('"I would never tell Vitek. It\'s none of his business," you say while holding up your hands, which causes Lena to calm down a little.');
    scene.text('"You know I would never tell him anything, but others might. You know how he gets," Lera replies, which causes them to start bickering, which eventually turns into Lena complaining about how Vitek is ruining her life. Now you\'re sorry that you brought it up in the first place.');
    scene.actions([
      { label: 'Ask them some questions', goto: ['praiders_garage_chat', 'chat_lenalera1'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: "I can't wait for their next gig. The last one was a blast. You remember it, Ler...
    scene.text(`"I can't wait for their next gig. The last one was a blast. You remember it, Lera?" Lena says and Lera nods, but before she can respond, Lena continues. "Pity you missed it, ${((s as any).pcs_nickname || '')}," she says in a slightly smug tone.`);
    scene.text('You can only nod in response.');
    scene.actions([
      { label: 'Ask them some questions', goto: ['praiders_garage_chat', 'chat_lenalera1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatLenalera1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big20.jpg');
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'Ask about "the relationship"', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You wonder what they might know about Anushka and Radomir. It seems most people have similar, but slightly different stories to tell. "So what do you guys know about the relationship?"');
    scene.text('"The relationship?" Lena questions as she shares a confused look with Lera. The two sit in silence, trying to figure out what you\'re talking about.');
    scene.text('Lera then suddenly gasps. "Oh, you mean the old drummer douchebag?"');
    scene.text('"Oh yeah, him!" Lena chimes in. "Yeah, he was a total dick. He and Rad went at it a lot. So did Nush if I remember right."');
    scene.text('Lera laughs. "Remember that time he told her to go "fetch him a beer"? Holy shit, I thought Nush was gonna beat him with the mic stand!"');
    scene.text('"She should have beat his ass. He was always calling us groupies and trying to get us to fuck him. It was fun teasing him, though," Lena giggles. She tells you more about how she and Lera used to flirt and tease each other in front of him and you wonder if they were really doing it to mess with him or for their own satisfaction. You also wonder if they purposefully missed what you meant or if they actually don\'t know.');
    scene.actions([
      { label: 'Drop it and make small talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('You decide not to push it and drop it. You just make small talk about school and the band instead.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Correct them', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('You shake your head. "No, I meant what do you guys know about Rad and Nush dating?"');
    scene.text('Lena looks surprised. "They\'re dating again?"');
    scene.text('Lera shakes her head. "No, dummy! She means what do we know about when they used to date." She glances over to confirm that\'s what you meant and you nod.');
    scene.text('Lena gives Lera a slightly dirty look before looking back at you. "Not a lot. They started dating young." She glances at Lera. "What, like fourteen or something?"');
    scene.text('Lera nods. "Yeah, something like that. They were each other\'s first."');
    scene.text('Lena shakes her head. "Rad was definitely Nush\'s first, but she wasn\'t his first."');
    scene.text('Lera snots. "I know what Rad says, but no one I know ever seen him dating a girl before Nush and he was only fourteen too. They were each other\'s first, no matter what he says." They then start arguing over it and you regret bringing it up.');
    scene.actions([
      { label: 'Drop it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('You decide to just drop it and let them argue as you enjoy the rest of the after party.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'Then what?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You finally get them to stop and actually tell you the rest of the story, at least from their point of view.');
    scene.text('Lena continues with a single side glance at Lera. "As I was going to say, they started dating young. Early on, it was obvious they were both really in love. You couldn\'t pry them apart with a crowbar; Each other was all they could talk about."');
    scene.text('Lera nods in agreement. "At least until he cheated on her."');
    scene.text('Lena shrugs. "I heard she cheated on him too."');
    scene.text('Lera shakes her head. "That\'s a bullshit rumor and you know it! Guys are never to blame and girls are always sluts," she says in a bit of a huff.');
    scene.text('Lena sighs and shrugs. "Okay, maybe. Anyway, he cheated on her, but she forgave him and then he did it again. He would cheat, they would fight, she would get upset then go back to him."');
    scene.text('"This went on for months until the prick dumped her," Lera adds. "Fucking bastard…"');
    scene.actions([
      { label: 'He dumped her?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You think about that for a moment. "So he dumped her after he cheated on her?"');
    scene.text('Lera nods. "He sure did."');
    scene.text('"He says she was getting too clingy and honestly, I could see that," Lena adds.');
    scene.text('Lera sighs and looks at Lena. "She wasn\'t clingy! She was in love and he wasn\'t. He just kept stringing her along."');
    scene.text('They start arguing again, so you clear your throat to get their attention. "So that was the end? They broke up after that?"');
    scene.text('They both shake their head. "Oh no," Lena says. "It seemed like it until they started acting all lovey dovey again from time to time. We asked her what was up and she says they were just friends with benefits now." Her tone suggests she doesn\'t fully believe it. "They go from just friends, to fuck buddies to acting like lovers, then fighting. Then they repeat the whole thing all over again."');
    scene.text('"So they\'re not dating, but they seem to be more than friends, but not really?" you ask.');
    scene.text('Lena chimes in again. "Exactly. It honestly gets exhausting. She needs to get over him."');
    scene.text('Lera gives Lena a slight side glance. "Love is love. We can\'t control what the heart wants, but I think she\'s finally getting over him. She\'s starting to act different around him and telling him to fuck off more."');
    scene.text('They launch into a debate about it, so you decide to just leave them to it.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about the band', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"So do you guys actually like listening to the band or are you just here for the free beer?" you say jokingly.');
    scene.text('"The free beer is definitely a perk, but I actually like their music," Lena replies as you watch Lera nod.');
    scene.text('"Watching Nush get away with the dumb shit she does sometimes gets on my nerves, but the free beer and getting to hang out in the garage is pretty good, so I guess it balances out," Lena quips.');
    scene.text('"I think Lena likes hanging out here because Vitek, Vasily and Dan don\'t come around here. Ain\'t that right?" Lera adds.');
    scene.text('"It\'s nice to get a break from the three stooges," Lena laughs as she grabs another beer and the three of you start chatting about a variety of topics.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"So what do you think about Nush?" you ask.');
    scene.text('"She\'s fun to party with, but she\'s one of the biggest sluts I know and she never gets called on it," Lena replies, sounding a little jealous.');
    scene.text('"It\'s because they\'re somewhat famous and she\'s beautiful. Just look at Bella. That bitch gets away with anything because she\'s the prettiest girl around!" You can\'t tell if Lera is jealous or turned on by that.');
    scene.text('"Don\'t you have the hots for her?" Lena replies in a teasing tone.');
    scene.text('Lera glances at Anushka. "Maybe I do. She\'s really pretty and wild. That make you jealous?" she says as she turns to Lena.');
    scene.text('Lena scoffs. "Not at all. Actually, you should ask her if she\'s up for a little threesome…"');
    scene.text('Lera leans in closer to Lena, their bodies pressing closer together. "You mean you wouldn\'t mind sharing me with her?"');
    scene.text('Lena has a smug smile on her face, clearly loving Lera\'s attention. "Not at all. I wouldn\'t mind strapping one on and taking it to her actually. Maybe I\'ll see which one of you I can make squeal the loudest."');
    scene.text('You\'re quickly forgotten about as the two of them get lost in their own perverted world.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"So what do you think about Val?" you ask.');
    scene.text('"He doesn\'t treat us like groupies, plus he\'s nicer to the groupies he fucks," Lera says as she shrugs her shoulders. "Doesn\'t treat them like shit like Rad or Arkadi, but he can still be a bastard like most guys."');
    scene.text('"I think he said he\'s saving up money from the band\'s gigs to buy an American motorcycle to ride across the country. Sounds like fun," Lena chimes in.');
    scene.text('"What, you want to go riding with him across the country?" Lera asks sourly.');
    scene.text('Lena is quiet for a moment as she seems to give it some serious thought. "Yeah maybe, plus he has that huge dick…" she says with a laugh.');
    scene.text('Lera rolls her eyes, but Lena moves closer to give her a quick kiss. "Don\'t worry, your face will still be my favorite thing to sit on and ride!"');
    if (((s as any).gopnikbandQW ?? 0)?.['val_lena_lera_3some'] === 1) {
      scene.text('Lera blushes a little as Lena smiles. "Are you still mad he came in your mouth?"');
      scene.text('A look of utter disgust appears on Lera\'s face. "That was so fucking gross! He was such an asshole!"');
      scene.actions([
        { label: 'Ask about it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"Wait, you guys had a threesome with Val?" you ask in surprise.');
    scene.text('Lena nods. "Yeah, and it was great. Even Lera loved it. At least until he pumped his load into her mouth."');
    scene.text('Lera gives you and Lena an annoyed glare. "Can we stop talking about him cumming in my mouth?"');
    scene.text('Lena just laughs and gives you a pretty graphic and detailed recounting of their threesome.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
        { label: 'None of your business', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"Come on, it wasn\'t that bad! Plus you liked it when we shared it with a kiss." Lena just laughs and gives you a pretty graphic and detailed recounting of their threesome.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      ]);
    } else {
      if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['val_lena_lera_3some'] = 1;
      scene.text('Lera blushes a little before Lena gives you a pretty graphic and detailed recounting of their threesome.');
      scene.actions([
        { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
      ]);
    }
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"I\'ve always had a thing for drummers…" Lena begins as she seemingly gets lost in her fantasy.');
    scene.text('"Does Arkadi know that?" you ask.');
    scene.text('"Lena, you shouldn\'t get involved with him. He\'s like most guys. He only cares if you have a pussy, or other holes, and if he can stick his dick in one of them," Lera says, a little annoyed.');
    scene.text('Lena sighs. "I guess you\'re right, but there\'s something about drummers and the way they behave; so raw and animalistic. It makes me all warm inside…"');
    scene.text('The conversation then turns into what each of you find sexually stimulating. Lena seems to like animalistic behavior as she put it and seems mostly drawn to muscular rough bad boys while Lera seems to like to get wild, cut loose and have fun. Although she doesn\'t say it, the way she talks makes it pretty clear that she\'s into girls.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"He\'s cute, but he\'s such a tryhard!" Lena says as she rolls her eyes and chugs the last of her beer. "If he didn\'t act like God\'s gift to women, maybe I\'d enjoy fucking him more."');
    scene.text('"Gross, you\'re fucking him?" Lera gags and pulls away from Lena. You listen to the two of them go back and forth about it until Lera finally speaks up. "What can he do that I can\'t? I can guaran-fucking-tee he can\'t make you cum like I can!"');
    scene.text('"Well he has a dick and you know I like dicks," Lena states and her eyes twinkle mischievously as she pulls Lera closer to her. "I think we need to have a little competition then between you and Rad. Let\'s see who can make me cum the hardest and fastest!"');
    scene.text('Lera has a lightly disgusted look on her face. "Gross!"');
    scene.text('Lena laughs. "Come on, I know you sometimes fuck guys and you like our threesomes."');
    scene.text('Lera shakes her head. You\'re not convinced she likes guys, but likely hooks up with them to make Lena happy. "He\'s an asshole and he treats every girl like shit! What could you see in him?" she asks, obviously not seeing the appeal.');
    scene.text('Lena shrugs. "He\'s a cute bad boy and the lead singer of a band. What more is there?" They start bickering about guys and you tune them out as you look around at what\'s going on.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatLavrenti(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big155.jpg');
  scene.text('You take a seat next to Lavrenti as everyone spreads out. He moves over and gives you a friendly smile, but keeps looking around before he finally turns his attention to you. As the two of you start chatting, you get the feeling that he\'s waiting on you to ask him something…');
  if (((s as any).gopnikbandQW ?? 0)?.['lav_lena_know'] === 1) {
    scene.actions([
      { label: 'Ask about him about Lena', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You look over at him and give him a sly smile. "So about you and Lena…"');
    scene.text('He pauses. "What about us?"');
    scene.text('You smile even more. "You know, the two of you… you know…" Your tone leaves no doubt as to what you mean.');
    scene.text('He looks surprised at first. "Where did you… I mean how…" He sighs. "Look, don\'t tell Vitek, okay?"');
    scene.text('You nod. "Sure. As long as you tell me what\'s up."');
    scene.text('He lets out an exasperated sigh. "Fine. We hang out sometimes and things just happened. Now we hookup from time to time. She needs to get off and I\'m happy to help out. That\'s it."');
    scene.text('You give him a skeptical look. "That\'s it?"');
    scene.text('He nods. "Yes, that\'s it. We\'re just friends with benefits." He changes the subject and talks about the music the band played earlier.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'Ask about "the relationship"', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"So what do you know about Rad and Nush?" you ask.');
    scene.text('He gives you a questioning look. "What do you mean?"');
    scene.text('"You know, they used to date and now they don\'t, but they still hang out. They seem to be more than just friends…" you explain.');
    scene.text('He nods. "Oh that, well honestly not a lot. I wasn\'t hanging out with them back then. I know they dated, that he was her first and that he cheated on her before breaking up with her. Other than that, I don\'t really know much. None of them really want to talk about it. Why do you care? Got a thing for Rad?" he says in a teasing tone.');
    scene.text('"What? No!" You shake your head. "I was just curious. Like you said, no one really wants to talk about it and there just seems like there\'s more to it, you know?"');
    scene.text('He nods. "Yeah, I know exactly what you mean. I personally think Nush isn\'t over him, but I think she\'s getting there. The more he takes advantage of her, the more she seems to not take his shit anymore. Personally I can\'t wait for the day she tells him to fuck off for good," he says pretty enthusiastically.');
    scene.text('You smile. "So, you got a thing for Nush?"');
    scene.text('He laughs, seeing what you did. "Maybe a little. I mean she\'s hot, fun, smart and a blast to hang out with. A guy could do a lot worse, though I don\'t think she\'s looking for anything serious anymore. Maybe that will change."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Falling out with Dimka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You know Lavrenti used to be hang with the cool kids and was friends with Dimka. You heard some rumors about what happened, but you never got the details, so you decide to ask the source. "So what happened with you and Dimka?"');
    scene.text('You see his nostrils flare and his eyes flash. Just mentioning the name seems to have pissed him off. "He\'s not the guy I thought he was."');
    scene.text('"What happened? You guys used to be such good friends. I mean I heard rumors, but you know how rumors are. I would rather know the truth."');
    scene.text('He shakes his head. "I don\'t want to talk about it."');
    qspCall(s, 'willpower', 'skill', 'humint', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince him to talk about it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince him to talk about it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"I know, I get it. But sometimes it helps to talk about things. Please?" you beg.');
    scene.text('He sighs and looks at you. "Fine. We were at one of my parties and Dimka drugged my girlfriend at the time, fucked her and filmed it. Then he started blackmailing her into doing all sorts of fucked up shit. This went on for months until she finally broke down and told me."');
    if (((s as any).dimaFilm ?? 0) === 1  ||  ((s as any).DimaRudeBlock ?? 0) === 1) {
      scene.text('You nod, knowing all too well what kind of person he is. "Yeah, I wish I could say I\'m surprised by that."');
      scene.text('Lavrenti gives you an odd look, obviously wondering if you know first hand, but he doesn\'t ask.');
    } else {
      scene.text('You\'re shocked to hear Dimka would do such a thing. "Seriously?"');
      scene.text('He nods. "Yes, he\'s a twisted fuck." He then lets out a sigh.');
    }
    scene.text('He shakes his head as if clearing some thoughts. "Anyways, I confronted him at school the next day. The fucker admitted it and said he was doing me a favor by showing me the kind of whore I was dating."');
    scene.text('You shake your head and pat his arm in sympathy. "That must have been hard…"');
    scene.text('He laughs a little. "Yeah, for him. I just saw red. The next thing I know I hit him and when he went down, I jumped on him and just kept hitting him. Some teachers had to pull me off him. I broke his nose and his face was messed up with bruises for over a week."');
    scene.text('You nod. You remember hearing about it, but not the actual details. "Yeah, I heard a little about it."');
    scene.text('He shakes his head. "I got suspended of course and by the time I got back to school, he had convinced everyone that I was just upset because my girlfriend was all over him and sleeping around and I got pissed about it. No one believed my side of things. She lived in Pushkin and never came over here again. She wouldn\'t talk about it anyway." He sighs, looking a little sad. "The only people that seemed to at least partially believe me were the gopniks and they mostly high fived me for beating the shit out of Dimka. So I decided that whatever their faults they had, at least they were honest about who they were and wouldn\'t stab you in the back. So I started hanging out with them."');
    scene.text('You nod and the two of you talk more about how he started hanging out with the gopniks and how he changed his look.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drop it and make small talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You decide not to push it and drop it. You just make small talk about school and the band instead.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about the band', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"The band\'s pretty good, don\'t you think?" you ask.');
    scene.text('He nods. "Yeah, when they\'re on top of their game, they\'re really good. They just sometimes have their off nights, which is a shame. I think they really have a shot at making it big."');
    scene.text('"So you hang out with them a lot?" You ask him.');
    scene.text('He laughs a little. "Someone is nosy. Yeah I do, I get along with them better than most of the other gopniks."');
    scene.text('"Yeah, I know you only recently started hanging out with the gopniks. Has it been hard?" you ask.');
    scene.text('He shrugs. "Sometimes, but at least they\'re honest. Anyway, I like these guys the most, so I hang out with them fairly often." He then changes the topic.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"So what do you think of Nush?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) >= 10) {
      scene.text('"She\'s fucking hot. Not just good looking, but has the fun personality to turn the score up. I mean Bella might be classically better looking, but Nush has that something extra. She oozes sexuality and that makes her the second hottest girl in school in my book," he says with a grin and a wink, seeming to indicate he thinks you\'re the hottest girl in school.');
    } else {
      scene.text('"She\'s fucking hot. Not just good looking, but has the fun personality to turn the score up. I mean Bella might be classically better looking, but Nush has that something extra. She oozes sexuality and that makes her the hottest girl in school in my book," he says with a grin. "No offense."');
    }
    scene.text('You roll your eyes. "Okay, so she\'s hot. Anything else?"');
    scene.text('He laughs, obviously having responded the way he did on purpose to mess with you. "Yeah, she\'s cool. Like I said, she\'s hot, talented, smart and great to party with. If she ever gets over Rad, the world better watch out."');
    scene.text('"What do you mean?" you ask curiously.');
    scene.text('He shrugs. "I mean the girl is the complete package with a hell of an attitude to back it up. The only thing holding her back is whatever her deal with Rad is. Once she gives him the boot and is over him, she\'ll finally come into her own."');
    scene.text('You give him a look to match your statement. "Okay… So what do you think will happen?"');
    scene.text('He laughs. "Fuck if I know, but it should be fun to watch."');
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      scene.actions([
        { label: 'Get over Rad?', handler: (st: GameState) => {
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
    }
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('He gives you a questioning look. "Surely you know they used to date?"');
    scene.text('You nod. You\'ve heard the rumors. "Some people say they used to date, but others say she cheated on him or that he cheated on her. I never knew what really happened or if it really happened. You know how rumors are."');
    scene.text('He snorts a laugh. "Boy, do I… But yeah, they used to date. Pretty serious from what I little I know."');
    scene.text('"What do you know?" you pry.');
    scene.text('He starts to open his mouth, but stops and looks across the room. He\'s looking at Anushka, who\'s looking at the two of you, almost like she knew you guys were talking about her. "Ask me some other time, or if you want real information on it, ask anyone in the band. They would know more than me."');
    scene.text('You decide to drop it and just talk to him about the band\'s music, which he is happy to engage in. You talk for some time before the party starts to wind down a little.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make small talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You decide to drop it and just talk to him about the band\'s music, which he is happy to engage in. You talk for some time before the party starts to wind down a little.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
      { label: 'You guys ever hook up?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"So you guys ever hook up?" you ask.');
    scene.text('He pauses and shrugs. "Sort of." When he sees your expression, he elaborates. "During lunch, we went to smoke a joint by the old school building. She just blurts out that she\'s horny as fuck. I told her I could help her and next thing I know, she slips her panties off and pushes my head under her skirt, so I make her cum. That\'s when she says we\'re late for class and she\'ll make it up to me later."');
    scene.text('You giggle. "Did she?"');
    scene.text('He shakes his head. "No, not really, I mean she gave me a handjob once, but I\'ve gone down on her a few times now."');
    scene.text('You giggle even more. "Then why keep doing it?"');
    scene.text('"Have you seen her? Besides, I think she\'s about ready. We\'ve been flirting more and more. Next time we party, I\'m going to make my move."');
    scene.text('You just nod, not sure what more to say to him. The two of you end up talking about some of the stuff Anushka has gotten up to at school.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Val is pretty talented, don\'t you think?" you ask.');
    scene.text('He nods. "He is. I know he and Rad are the ones that first started the band. Even before I started hanging out with these guys I liked their music."');
    scene.text('You nod. "You guys hang out much?"');
    scene.text('He nods his head. "He comes over sometimes, or we just go out on the town, getting wasted. I can honestly say he\'s been the most welcoming of the gopniks and treats me like one of them."');
    scene.text('He ends up telling you a few funny stories of him and Val out and about around town.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Arkadi is pretty talented, don\'t you think?" you ask.');
    scene.text('He nods. "He is. He\'s the talent to be really good someday. All of them do." He sounds pretty confident.');
    scene.text('You nod. "You guys hang out much?"');
    scene.text('He shakes his head. "Not too much. He\'s a bit violent for my tastes, but hell most of the gopniks are. We get along, but outside of hanging with the band, my parties, or with him and Val, I don\'t really interact with him much."');
    scene.text('"Yeah, I\'ve heard you always throw great parties," you reply.');
    scene.text('He laughs. "Yeah, I think that\'s the main reason most of them hang out with me. Maybe I\'ll invite you to my next one."');
    scene.text('You nod. "That would be cool." The two of you talk about other stuff, but he never directly invites you.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Rad is pretty talented, don\'t you think?" You ask him.');
    scene.text('He nods. "He\'s almost as good as he thinks he is."');
    scene.text('You notice a bit of a tightness to his voice, which makes you curious. "What, don\'t you like him?"');
    scene.text('He starts to respond, then stops. "He can be a decent guy and he\'s fun to hang out with, but other times he\'s just a complete asshole." He sounds a little bitter.');
    scene.text('"What happened?" you ask.');
    scene.text('"What?" He seems surprised by the question. "Oh nothing, it\'s just the way he treats girls. He has no respect for them. He can be charming when he wants to, but once he has his way with them, he tosses them aside like garbage without a care in the world. It just pisses me off is all." He seems to not want to talk about it anymore. You wonder if it\'s because Radomir reminds him of Dimka.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatRoman(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A157', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['roman_chat'] = 0;
  if (((s as any).gopnikbandQW ?? 0)?.['roman_chat'] === 1) {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    // TODO-QSP: dynamic text: Roman is ecstatic as you slide over to him. "You should've seen it, <<$pcs_nickn...
    scene.text(`Roman is ecstatic as you slide over to him. "You should've seen it, ${((s as any).pcs_nickname || '')}! That was one of the greatest moments in my life!"`);
    scene.text('"What happened?" Your eyes widen as you ask.');
    scene.text('"Well just before I got here, there was a guy following me. I didn\'t really know who it was, but he kept following me, so I hid and watched him pass by…" He takes a pause.');
    scene.text('"What happened after?" You\'re sitting on the edge as your eyes plead for him to continue.');
    scene.text('"I jumped him!" he proudly says. "What I didn\'t know was that his two friends were behind him, so when they saw that I was beating his ass, they jumped in and started fighting…"');
    scene.text('You gasp as he keeps telling the story.');
    scene.text('"So yeah, I whooped their asses and sent them home crying like little bitches!" he gloats and finally calms down.');
    scene.text('As soon as he finishes the story, you start thinking about some of the details that don\'t add up, like how he has no bruises or other injuries. You\'re too afraid to mention anything, though. You know he can snap at any time.');
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_roman1'] },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You take a seat next to Roman as everyone spreads out. You find a little corner as he refuses to make more room for you and sit in silence for a while before he finally turns to you and just stares without saying a thing. You\'re a bit creeped out by how he\'s behaving, but he\'s not doing or saying anything, so you just sit in awkward silence. After a few minutes, he finally moves over, giving you more space. You both loosen up a little and begin to chat.');
    scene.actions([
      { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_roman1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatRoman1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big157.jpg');
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'Ask about "the relationship"', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"Do you know anything about the relationship between Anushka and Radomir?" you bluntly ask.');
    scene.text('Roman looks at you a little surprised. "No idea. Why should I know anything about it? It doesn\'t really concern me."');
    scene.text('"Not at all?" you reply.');
    scene.text('Roman shakes his head. "Well, I\'ve heard that Rad popped her cherry and when he was done with her, he tossed her aside, but still fucks her on the side. I mean I would\'ve done the same thing. The chick is a whore and is only good for fucking… Just like all girls…" he says as he looks at you like a piece of meat.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You look at him. "So what do think of Nush?"');
    scene.text('"She\'s a real hot piece of ass…" he says as he licks his lips. "I would really like to fuck her…"');
    scene.text('"So, she\'s been rejecting you?" you teasingly reply.');
    scene.text('"I\'ve been on her to let me get into those panties, but so far she\'s rejected me…" His eyes darken. "One of these days, even if she says no and I\'m horny, I might go for it anyway."');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('He looks you over. "Maybe I\'l have a go with you as well…" The way he says it and looks at you… Surely he can\'t mean what it sounds like he\'s saying?');
    }
    scene.text('"That\'s… Really disturbing…" you reply before quickly moving away.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"He\'s okay, I guess…" he replies as he shrugs his shoulders.');
    scene.text('"Oh? You don\'t hang too much with him?" you ask.');
    scene.text('"Not really. I\'ve seen him around town and school, but we don\'t deal too much with each other, which I like. That\'s why I find him okay; he doesn\'t bother me and I don\'t bother him. Just how it\'s supposed to be."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"I\'ve heard that you and Arkadi been partying it up lately," you say with a smile.');
    scene.text('In a rare occurrence, Roman drops his guard a little. "Yeah, that dude is fucking crazy you know. We go out, get drunk and then he wants to fight. Can you believe that? He likes to fight almost as much as I do!"');
    scene.text('"So you guys just go out and pick fights with people?" you ask.');
    scene.text('"Hell yeah! I live for that shit!" His eyes are shining with pride. "I love seeing blood splatter everywhere, especially if it\'s a punk that challenges me and I can sense the weakness in him. There\'s no better feeling. And it really helps that Arkadi can carry himself in a fight so I don\'t have to think about him while we\'re swinging."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about Radomir', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"That dude is a punk, a wannabe bad boy. One of these days…" he says while clenching his teeth.');
    scene.text('"One of these days what?" you ask.');
    scene.text('"I\'m going to beat the shit out of him and show him what being a gopnik is all about, not some pussy pretending to be bad…" he quietly replies and hits his fist against his palm over and over. You take the chance to move away.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about the previous drummer', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"So you know anything about the former drummer?" you curiously ask.');
    scene.text('"No. I know he left because of some bullshit and never returned. That\'s all I know about it and to be honest don\'t bother me more about it because I don\'t care!" he sternly replies.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    { label: 'Ask about the band', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"The band is great, don\'t you think?" you ask.');
    scene.text('"The music\'s okay. You can sit and listen to it, but that\'s about it. I don\'t mind hanging around here and going to their concerts because I might get lucky," he explains.');
    scene.text('"Do you think they can make it big?" you continue.');
    // TODO-QSP: dynamic text: "What's with all these questions, <<$pcs_nickname>>? I don't know and I don't re...
    scene.text(`"What's with all these questions, ${((s as any).pcs_nickname || '')}? I don't know and I don't really care, okay?! So either change the subject or I'll shut you up with my cock!" He starts laughing.`);
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChatNiko(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoPayback ?? 0) > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
    scene.text('As you approach Niko, he immediately notices you before placing his leg on the seat next to him. "Fuck off! We have nothing to talk about."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } else {
    if (((s as any).NikoDate ?? 0) > 0  &&  ((s as any).NikoPayback ?? 0) === 0  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  &&  (!((s as any).NikoPayback ?? 0))) {
      qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
      scene.text('As Niko is enjoying a beer, he notices you approach. "Ahh, it\'s my graceful dove, here to brighten my day. Come have a seat. We got plenty of beer, and those perfect eyes of yours to lose myself in."');
      scene.text('You give him a coy smile as you eagerly sit next to him and watch as he scoots over to you, bringing his face to yours before planting his lips gently on yours, sharing a soft, and loving kiss. You have a pleasant conversation with him for a while, longer than you thought as you notice some people are starting to leave already.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_niko1'] },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
      scene.text('Niko appears to be enjoying a beer as you approach. He notices you and gives you a warm smile. "Hello there. I never knew that I\'d be visited by such a graceful beauty. Here, have a seat."');
      scene.text('He offers you a seat right next to him before taking your hand and guiding you onto the seat. Once you\'re seated, instead of releasing your hand, he slowly brings it to his face before softly kissing it. You end up having a pleasant conversation with him for a while, longer than you thought as you notice some people are starting to leave already.');
      scene.actions([
        { label: 'Ask him some questions', goto: ['praiders_garage_chat', 'chat_niko1'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatNiko1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
  scene.text('Now you just have to decide what you want to ask. Since people are starting to leave, you might not have time to ask about much.');
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_1'] === 0) {
    scene.actions([
      { label: 'Ask about Radomir', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_1'] = 1;
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['rad_date'] = 1;
    }
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    scene.text('"What are your thoughts on Radomir?" you ask, curious about the man behind the vocals ');
    scene.text('"The guy can really carry his own around here, but don\'t let his big head intimidate you," Niko replies. "The guy thinks that rocking out with a guitar makes him a tough guy, but it doesn\'t. It just shows how weak he is. How much he worries about how others see him."');
    scene.text('You nod. "Thick headed, huh? It\'s said that fame can really get to your head, but what do you really know about him?"');
    scene.text('Niko shrugs. "Not much. He and Nush had a thing before and everyone seems a bit tight-lipped about it, so I stay out. No need to go poking around the guy\'s messy hookups."');
    scene.text('"So they were dating and something likely happened. Another one of life\'s mysteries, I suppose," you reply.');
    scene.text('A smile stretches across his face as he leans closer to you. "Speaking of mysteries. I seem to have a much more important mystery sitting right next to me…"');
    scene.text('Noticing his demeanour shift, you coyly smile. "And what kind of mystery would that be?"');
    scene.text('His smile shifts to a more seductive grin. "Well I\'d like to know if you\'d like us to get to know each other better? You\'re a gorgeous flower, and I\'m your humble admirer. Would you grant me an afternoon with such a graceful beauty?"');
    if (((s as any).kotovLoveQW ?? 0) === 1) {
      scene.text('You shake your head before playfully pushing him away. "You know I\'m dating Vikek, right? You\'re going to get your ass kicked."');
      scene.text('He chuckles, obviously not taking your warning seriously. "Vitek is strong, but is he charming? Does he help you help you feel more confident with yourself, because I see a beautiful flower being kept in the darkness, and I want to save it."');
      scene.text('You give him another firm push. "If you want flowers, then visit a garden instead of hitting on your friend\'s girl."');
      scene.text('Niko places his hand on his chest. "Ahh, you wound me. I thought we had something special, but perhaps you\'re not yet ready. I get it. When you\'re ready to be with someone that can love you, then you need only pay me a visit. I\'ll be around."');
    } else {
      if (((s as any).fedorKozlovQW ?? 0) >= 5) {
        scene.text('You shake your head before playfully pushing him away. "Sorry, but I\'m already with someone."');
        scene.text('He shakes his head. "You mean that weak jock Fedor? He\'s soft and always living under Ivan\'s shadow. You don\'t need a weak guy like him. With me, there will be no need to worry about anything. I\'ll keep you safe and well satisfied. You won\'t ever need anyone else."');
        scene.text('You don\'t trust his sincerity. "That\'s quite a claim you\'re making there. I wonder how much of it you actually believe?"');
        scene.text('Niko brings his face to yours. "Everything…" he whispers. "You just need to trust me. You do trust me, right?"');
        scene.text('"Trust is earned, not given," you reply. "Fedor has shown me nothing but respect and love. That\'s something I feel you would struggle with."');
        scene.text('Obviously not believing you, he playfully shakes his head. "So you need time, huh? I can wait."');
      } else {
        if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
          scene.text('You shake your head before playfully pushing him away. "Sorry, but I\'m already with someone."');
          scene.text('He shakes his head. "You mean that little nerd Artem? He\'s a soft boy, and not someone that can ever truly care for you, like me. With me, there will be no need to worry about anything. I\'ll keep you safe and well satisfied. You won\'t ever need anyone else."');
          scene.text('You don\'t trust his sincerity. "That\'s quite a claim you\'re making there. I wonder how much of it you actually believe?"');
          scene.text('Niko brings his face to yours. "Everything…" he whispers. "You just need to trust me. You do trust me, right?"');
          scene.text('"Trust is earned, not given," you reply. "Artem trusts me to be faithful, so I\'m going to do just that."');
          scene.text('Obviously not believing you, he playfully shakes his head. "So you need time, huh? I can wait."');
        } else {
          if (((s as any).rex_love ?? 0) === 1) {
            scene.text('You shake your head before playfully pushing him away. "Sorry, but I\'m already with someone."');
            scene.text('He tilts his head. "And who would that be? I don\'t see you with any of the guys around here."');
            scene.text('"He\'s a sweet guy called Rex that I met a little while ago," you reply.');
            scene.text('Niko gives you a puzzled look. "Rex? That sounds like a dog\'s name. You don\'t need a dog in your life when you can have a real man. With me, there will be no need to worry about anything. I\'ll keep you safe and well satisfied. You won\'t ever need anyone else."');
            scene.text('You don\'t trust his sincerity. "That\'s quite a claim you\'re making there. I wonder how much of it you actually believe?"');
            scene.text('Niko brings his face to yours. "Everything…" he whispers. "You just need to trust me. You do trust me, right?"');
            scene.text('"Trust is earned, not given," you reply. "I don\'t really know enough about you to make any kind of decisions like that."');
            scene.text('He playfully shakes his head. "So you need time, huh? I can wait."');
          } else {
            scene.text('You\'re unsure if his words are true. "Well, I\'m not really dating anyone right now, so we\'ll just have to see."');
            // TODO-QSP: dynamic text: Niko's eyes glimmer with hope as his smile widens. "Simply considering is enough...
            scene.text(`Niko's eyes glimmer with hope as his smile widens. "Simply considering is enough to keep me hopeful. I can take very good care of you, ${((s as any).pcs_nickname || '')}. You need only place your trust in me."`);
            scene.text('You coyly smile back at him as you notice everyone else start standing up, signaling the end of the party.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_2'] === 0) {
    scene.actions([
      { label: 'Ask about Valentin', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_2'] = 1;
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    scene.text('"What do you know about Valentin?" you ask.');
    scene.text('"Plays in the band, but seems to consider himself a guardian of the girls here when he isn\'t gushing over Nush."');
    scene.text('"Really?" you reply. Do you think he has a crush on her?"');
    scene.text('"I bet he does, but why he would want to go out with a girl getting dicked by all the guys is beyond me. It\'s not like she\'s going to sell her ass on the corner to make him any money."');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('"That seems a little harsh," you reply. "I hope you don\'t think that way about me…"');
      scene.text('He shakes his head before bringing his face closer. "Of course not," he whispers. "I\'ll always be true to my brave girl. <i>Always</i>."');
    } else {
      scene.text('"That seems a little harsh," you reply. "Do you think of all the girls that way?"');
      scene.text('He shakes his head. "Of course not! I always take good care of the good ones, and I bet you\'re exactly that."');
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_3'] === 0) {
    scene.actions([
      { label: 'Ask about Arkadi', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_3'] = 1;
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    scene.text('Interested in learning more about Arkadi, you decide to ask Niko. "What are your thoughts on Arkadi?"');
    scene.text('"The guy can break someone\'s jaw with less effort then it would take him to count, but he always whines about how tough the city life is. I get it, the city is big, and it\'s easy for your life to get fucked up, but we aren\'t in the city, so I don\'t need to keep hearing about it."');
    scene.text('"That seems a bit hostile. Is there a story of yours in the city?" you respond.');
    scene.text('"There\'s nothing to tell. Cities are big and full of assholes. If you go there, then keep your wallet close, because everyone is looking to take something from you."');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_4'] === 0) {
    scene.actions([
      { label: 'Ask about Anushka', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_4'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/4.jpg');
    scene.text('"What\'s the story with Anushka? She certainly seems popular around here," you ask.');
    scene.text('Niko shrugs. "She\'s a cocky little bitch. She plays with the band, on and off the stage. When she\'s not playing guitar, she\'s fucking one of the guys."');
    scene.text('"Wow, she seems kind of wild!" you reply. "Does she fuck all the guys, or only the band?"');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('"She fucks most of them. She even tries to seduce me, but I\'m happily taken."');
      scene.text('"I hope I\'m not having some competition?" you ask coyly.');
      // TODO-QSP: dynamic text: "There's no beauty more refined than yours, <<$pcs_nickname>>," he seductively r...
      scene.text(`"There's no beauty more refined than yours, ${((s as any).pcs_nickname || '')}," he seductively replies. "You have nothing to fear. My eyes are glued to you, and you alone."`);
    } else {
      scene.text('"She fucks most of them, but thinks she\'s too good for me. The cocky little bitch will learn eventually," he says as he angrily slams his beer on the table.');
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_5'] === 0  &&  ((s as any).gopnikbandQW ?? 0)?.['alyona_present'] === 1) {
    scene.actions([
      { label: 'Ask about Alyona', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_5'] = 1;
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    scene.text('Noticing Alyona slamming down multiple beers, you curiously decide to ask Niko his opinion. "What\'s her problem?"');
    scene.text('Niko shrugs. "She has some fucked up shit going on at home, and takes it out on anyone that gets in her way."');
    scene.text('"I see…" you reply. "It must be pretty bad if she gets that upset."');
    scene.text('Niko shrugs once again. "It seems pretty bad. She likely has a fucked up father who drinks his ass off. You don\'t drink as much as she does without someone in the family being a drunk."');
    scene.text('"Does she ever talk to anyone about it?" you ask.');
    scene.text('Niko shakes his head. "Nah, and I don\'t ask her about it. None of my business, and I have no interest in getting involved in shit like that. I prefer the level headed women, like you."');
    scene.text('He then gives you a wink before returning to his drink.');
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_6'] === 0  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
    scene.actions([
      { label: 'Ask about Lena', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_6'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('"What are your thought on Lena?" you ask.');
    scene.text('"She\'s a fun girl, but sadly always has someone watching over her. It\'s so tricky to get her alone."');
    scene.text('"Is she really that popular?"');
    scene.text('"Nah, she just has a clingy friend who shadows her everywhere. Anyone trying to hook up with her will either have to wait until her brother isn\'t around, or deal with Lera."');
    scene.text('"Do they share boyfriends or something?"');
    scene.text('"Sort of. Lera is always shadowing Lena and wants in on everything she does. She\'s like Lena\'s girlfriend, but Lena doesn\'t see it that way. She knows that guys like me are much more fun."');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('"Well it\'s good to know that you\'re humble," you laugh.');
      scene.text('He chuckles at your sarcastic response. "I\'m just stating how much I care about women. I don\'t block them from doing whatever their heart desires. I\'m a gentle, caring lover, as you already know."');
    } else {
      scene.text('"Well it\'s good to know that you\'re humble," you laugh.');
      scene.text('Niko chuckles at your sarcastic response. "I\'m just stating how much I care about women. I don\'t block them from doing whatever their heart desires. I\'m a gentle, caring lover. Spend more time with me and you\'ll see that."');
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  if (((s as any).gopnikbandQW ?? 0)?.['niko_talk_7'] === 0  &&  ((s as any).gopnikbandQW ?? 0)?.['lena_lara_present'] === 1) {
    scene.actions([
      { label: 'Ask about Lera', handler: (st: GameState) => {
    if (!(s as any).gopnikbandQW) (s as any).gopnikbandQW = {}; (s as any).gopnikbandQW['niko_talk_7'] = 1;
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    scene.text('"So what\'s going on with Lera?" you ask. "I saw her earlier and she looked pissed."');
    scene.text('He shakes his head with a grin. "Who knows? When she isn\'t gripping Lena\'s tits, then she\'s moping around, snapping at anyone that tries to talk to her."');
    scene.text('"Some of the guys say that she\'s a lesbian, but that\'s just an exaggeration right?"');
    scene.text('"She\'s a lesbian for sure," he smirks.');
    scene.text('"How would you know?"');
    scene.text('"Simple, he replies. "She won\'t go out with me."');
    scene.text('You give him a sarcastic grin. "Is that all it takes to become a lesbian? Because we might have more lesbians in school than I thought."');
    // TODO-QSP: dynamic text: Niko makes an exaggerated emote of being stabbed in the head and falling over. "...
    scene.text(`Niko makes an exaggerated emote of being stabbed in the head and falling over. "Oh, you wound me, ${((s as any).pcs_nickname || '')}! But in all honesty, she seems to be obsessed with Lena, and does does everything she wants to do, even if it means fucking the guys together."`);
    scene.text('"Oh, so she sleeps with multiple guys?"');
    scene.text('Niko shakes his head. "Only when Lena is involved. She\'s full on lezzy, and it\'s pretty fucking lame."');
    scene.text('You give him a coy grin. "Not a fan of lesbians, huh?"');
    scene.text('"Well they\'re not doing me any good, and Lera gives me so much shit whenever I try to hook up with Lena. She\'s always glued to her side. It\'s bad enough when her brother does it, but Vitek\'s not always around. Lera is."');
    scene.text('"So she gets in the way of your game, huh?"');
    scene.text('"More like cock blocking. Lesbians only exist to cock block guys, and take away some good options."');
    scene.text('"Harsh!" you reply and he chuckles for a few seconds.');
    scene.text('"That just means that they\'re not good girls like you. Girls like you are special gifts to this world, and deserve to be pampered."');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('Noticing his demeanor rapidly changing, you coyly respond. "Am I really that special?"');
      // TODO-QSP: dynamic text: He brings his face closer to yours. "Of course you are, <<$pcs_firstname>>. Ther...
      scene.text(`He brings his face closer to yours. "Of course you are, ${((s as any).pcs_firstname || '')}. There's no one more perfect than you, and no girl that I'd rather be with." He then gently grips your cheek before giving you a passionate kiss as the party around you begins to wrap up.`);
    } else {
      scene.text('Noticing his demeanor rapidly changing, you coyly respond. "Is that so?"');
      scene.text('He brings his face closer to yours. "Give me a chance and find out."');
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"What\'s new with you?"', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 8) + 1;
    if (((s as any).VK ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
      scene.text('You aren\'t able to think of anything in particular to ask. "So what\'s new with you?"');
      scene.text('"Check this out," he replies. "I had this loud mouth motherfucker talking shit the other day to Roman, and look what he did to his face."');
      scene.text('He shows you a picture on his phone of a man huddled in a corner with a beaten, bloody face. The sight of the images disgusts you, so you shove the phone away. "Eww, gross! Is this what you guys get up to on your own?"');
      scene.text('He casually shrugs. "It\'s just some of life\'s struggles that we guys have to go through. You girls only need to worry about dolling yourselves up and looking pretty. We guy have to get down and dirty."');
      scene.text('Not buying his argument for a second, you shake your head. "Beating a guy almost to death is not a struggle, it\'s a call for help!"');
      scene.text('Niko chuckles. "Maybe if this guy called for help, then he wouldn\'t have had his head caved in."');
      scene.text('You grunt in disgust. "That\'s sick! What\'s wrong with you?!" You then get up and walk away.');
    } else {
      if (((s as any).VK ?? 0) === 2) {
        if (((s as any).VK_AlisaQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
          scene.img('images/characters/pavlovsk/resident/alisa/alisaev/park/alisa_park.jpg');
          scene.text('Not having much to really talk about, you decide to start up a casual conversation with Niko. "Is there anything new around here? It\'s been kind of a drag lately."');
          scene.text('He pulls out his phone and shows you a picture of a woman wearing dark robes near a lake. "Check out this girl. I saw her a few times at the lake in town chanting some bullshit. Some of the guys think she\'s a witch, but with skin that pale, I think she looks more like a vampire."');
          scene.text('Feeling like he\'s just messing with you, you smirk. "A vampire? I think you\'ve been watching too many sci-fi flicks."');
          scene.text('He chuckles. "It\'s just an observation. I don\'t actually believe in that stuff, but it\'s odd to see a girl like that around Pavlovsk. Those Bohemian kind of girls tend to live closer to the city than small towns like ours."');
          scene.text('You shrug. "Maybe she <i>is</i> from the city. It isn\'t unusual for some city girls to end up here."');
          scene.text('He slowly nods his head. "Yeah, but this girl seems a bit different from the rest. Maybe it\'s nothing, but I was getting some dark vibes from her."');
          scene.text('You feel like messing with him. "Afraid that she\'ll drink your blood? Maybe she\'ll drag into her castle and make you her cattle."');
          scene.text('He laughs for a few seconds. "The only girl I want dragging me anywhere is sitting right next to me."');
          scene.text('You sarcastically smirk. "Is that so? Despite all this vampire talk, it seems to me that you\'re the only hungry one here."');
          scene.text('He gives you a seductive smirk in return. "Well if you didn\'t keep me starved, then I wouldn\'t be so hungry."');
          scene.text('"Sounds like you need to work on your appetite. I hear that going for a jog can help with that."');
          scene.text('Niko does an exaggerated emote of being stabbed. "You wound me again! You can be so brutal."');
          scene.text('You\'re not willing to let up. "No brutality here, I\'m just trying to help you."');
          scene.text('"Well if you\'re offering help, then I can certainly use some company after classes are done. If only there was someone with some spare time to spend with me…"');
          scene.text('"Well you could always hit up that vampire girl. She seems to have time… Time to drink your blood."');
          scene.text('He chuckles for a second. "I think I\'ll pass. I like keeping my blood inside my body, thank you."');
          scene.text('"You\'re welcome. Now I should get going before you start showing me pictures of werewolves you\'ve seen."');
          scene.text('"Now that you mention it, I have seen a few of those around. Let me tell you about them," he sarcastically responds.');
          scene.text('You shake your head before getting up and walking away.');
        } else {
          if (((s as any).VK_AlisaQW ?? 0) >= 1  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
            scene.img('images/characters/pavlovsk/resident/alisa/alisaev/park/alisa_park.jpg');
            scene.text('Not having much to talk about, you decide to start up a casual conversation with Niko. "Is there anything new around here? It\'s been kind of a drag lately."');
            scene.text('He pulls out his phone and shows you a picture of a woman wearing dark robes near a lake, who you quickly recognize as Alisa. "Check out this girl. I saw her a few times at the lake in town chanting some bullshit. Some of the guys think she\'s a witch, but with skin that pale, I think she looks more like a vampire."');
            scene.text('Realizing that he\'s referring to Alisa, you decide to play dumb. "A vampire? I think you\'ve been watching too many sci-fi flicks."');
            scene.text('Niko chuckles before replying, "It\'s just an observation, I don\'t actually believe in that stuff, but it\'s odd to see a girl like that around Pavlovsk. Those Bohemian kind of girls tend to live closer to the city than small towns like ours."');
            scene.text('You shrug. "Maybe she <i>is</i> from the city. It isn\'t unusual for some city girls to end up here."');
            scene.text('He slowly nods his head. "Yeah, but this girl seems a bit different from the rest. Maybe it\'s nothing, but I was getting some dark vibes from her."');
            scene.text('You feel like messing with him. "Afraid that she\'ll drink your blood? Maybe she\'ll drag into her castle and make you her cattle."');
            scene.text('He laughs for a few seconds. "The only girl I want dragging me anywhere is sitting right next to me."');
            scene.text('You sarcastically smirk. "Is that so? Despite all this vampire talk, it seems to me that you\'re the only hungry one here."');
            scene.text('He gives you a seductive smirk in return. "Well if you didn\'t keep me starved, then I wouldn\'t be so hungry."');
            scene.text('"Sounds like you need to work on your appetite. I hear that going for a jog can help with that."');
            scene.text('Niko does an exaggerated emote of being stabbed. "You wound me again! You can be so brutal."');
            scene.text('You\'re not willing to let up. "No brutality here, I\'m just trying to help you."');
            scene.text('"Well if you\'re offering help, then I can certainly use some company after classes are done. If only there was someone with some spare time to spend with me…"');
            scene.text('"Well you could always hit up that vampire girl. She seems to have time… Time to drink your blood."');
            scene.text('He chuckles for a second. "I think I\'ll pass. I like keeping my blood inside my body, thank you."');
            scene.text('"You\'re welcome. Now I should get going before you start showing me pictures of werewolves you\'ve seen."');
            scene.text('"Now that you mention it, I have seen a few of those around. Let me tell you about them," he sarcastically responds.');
            scene.text('You shake your head before getting up and walking away.');
          } else {
            scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/fight.jpg');
            scene.text('Not having much to talk about, you decide to start up a casual conversation with Niko. "Is there anything new around here? It\'s been kind of a drag lately."');
            scene.text('He pulls out his phone and shows you a picture of two guys fighting in what looks like an alley behind a club. "Look at these assholes. Can you believe that these dipshits were fighting over a stripper?"');
            scene.text('You tilt your head in surprise. "All of that over a stripper? Was she dating one of them?"');
            scene.text('He shakes his head. "Nope. They both had a thing for her and tried to hit on her at the same time, only to end up hitting on each other. With their fists."');
            scene.text('You giggle at his comment. "It seems some guys are pretty desperate if they\'ll fight over someone they know nothing about."');
            scene.text('Niko nods his head. "Exactly what I thought. There are some girls worth fighting for, girls like you, but those trashy girls aren\'t worth the time they take up. What a bunch of idiots…" He continues shaking his head as the party wraps up.');
          }
        }
      } else {
        if (((s as any).VK ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
          scene.text('Not having much to talk about, you decide to start up a casual conversation with Niko. "Is there anything new around here? It\'s been kind of a drag lately."');
          scene.text('He pulls out his phone and shows you a picture of a really tough looking man. "Check out this guy. Do you know who he is?"');
          scene.text('Not recognizing the man, you shake your head. "No, but he looks really tough."');
          scene.text('He nods his head slowly. "He\'s the toughest motherfucker around here. That\'s Vadim Belly, a fearsome gangster that owns much of Pavlovsk. He has connections everywhere."');
          if (((s as any).NikoPayback ?? 0) === 0  &&  ((s as any).NikoDinerSlut ?? 0) > 0) {
            scene.text('You\'re curious about his interest in this crime lord. "So what interest do you have in him exactly? Has he made you some kind of offer or something?"');
            scene.text('Niko quickly shakes his head. "No way! He\'s not interested in a small fry like me, but his connections can open so many doors to the right person, or people. It\'s just really hard to get close to him."');
            scene.text('Feeling very intimidated, you decide to caution Niko. "I wouldn\'t get involved with someone like that if I were you. One slip up and he could put you in a world of hurt."');
            scene.text('He slowly nods. "Maybe… I\'m just weighing my options."');
            scene.text('"What exactly can that man offer you that would be worth such a risk?" you ask.');
            scene.text('He hesitates before looking at the ground in silence, seemingly lost in thought. "What\'s wrong?" you ask. "Is there something you need from him?"');
            scene.text('He remains silent for a few seconds before he responds. "He might be able to help us. He\'s a strong man who\'s feared in this town. If anyone can restore your reputation, it\'s him."');
            scene.text('"Don\'t put yourself in danger for me!" you exclaim, not wanting him to get mixed up with this terrifying man. "We can find another way to restore my reputation, we just need to work together."');
            // TODO-QSP: dynamic text: Niko slowly nods his head. "You're probably right. I'm just weighing our options...
            scene.text(`Niko slowly nods his head. "You're probably right. I'm just weighing our options for now. Nothing's set in stone, but trust me ${((s as any).pcs_nickname || '')}, I <i>will</i> restore your reputation and make things right. I promise." He then leans over and gives you a soft kiss on the lips before handing you his beer to share.`);
          } else {
            scene.text('You\'re curious Niko\'s interest in this crime lord. "So what interest do you have in him exactly? Has he made you some kind of offer or something?"');
            scene.text('Niko quickly shakes his head. "No way! He\'s not interested in a small fry like me, but his connections can open so many doors to the right person. It\'s just really hard to get close to him."');
            scene.text('Feeling very intimidated, you decide to caution Niko. "I wouldn\'t get involved with someone like that if I were you. One slip up and he could put you in a world of hurt."');
            scene.text('Niko slowly nods. "Maybe… I\'m just weighing my options."');
            scene.text('"What exactly can that man offer you that would be worth such a risk?" you ask.');
            scene.text('Niko hesitates before looking at the ground in silence, seemingly lost in thought. Realizing that there\'s definitely something on his mind, you speak up. "What\'s wrong? Is there something you need from him?"');
            scene.text('He slowly shakes his head. "Nah, forget I mentioned it. Anyway, have a drink. This one\'s on me." He hands you a fresh beer before getting up and walking away.');
          }
        } else {
          if (((s as any).VK ?? 0) === 4) {
            scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
            scene.text('Not having anything in particular to chat about, you decide to make some small talk. "What\'s new in Pav? Anything worth talking about?"');
            scene.text('Niko just shrugs. "There hasn\'t really been much going on. A few fights here and there, but that\'s pretty normal."');
            scene.text('You give him a smirk. "Do all the boys around here always fight? Why not just chat through your differences?" you ask sarcastically.');
            scene.text('He chuckles. "We do chat… Then we fight. It\'s part of the process. Someone chats shit, then they get hit. A fight breaks out, and we all have a good time."');
            scene.text('His comment makes you giggle. "So it\'s more of a bonding exercise, huh?"');
            scene.text('He shrugs again. "A good fight certainly helps the guys bond together. As the saying goes; Violence is a great way to bring people together… for a nice brawl."');
          } else {
            if (((s as any).VK ?? 0) === 5) {
              scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
              scene.text('With a boring day like today, you can only make small talk. "Everything has been so dull lately. Is there anything new?"');
              scene.text('Niko curiously rubs his chin. "You know that quiet girl Natalia?"');
              scene.text('You nod your head. "Yeah, the little bookworm. What about her?"');
              scene.text('"She always carrying that notebook around, but no one knows what\'s in it. Has she ever told you anything?"');
              scene.text('You shake your head. "No. Why do you care anyway? You don\'t strike me as the reading type."');
              scene.text('He shrugs. "I\'m just curious. Do you think she keeps her nudes in there?"');
              scene.text('Shocked, you playfully slap his arm. "You boys are such pervs!"');
              scene.text('He laughs. "Well why else would she keep it so secret? It must be something she doesn\'t want people to see."');
              scene.text('"So she takes nudes of herself, then carries around said nudes everywhere she goes because she doesn\'t want people to see them. Does that make sense to you?"');
              scene.text('"I guess you have a point," he shrugs. "I was hoping it was something interesting, but if it isn\'t nudes, then it\'s not interesting." You give him an exaggerated stare as he chuckles and goes back to his drink.');
            } else {
              if (((s as any).VK ?? 0) === 6) {
                scene.img('images/characters/city/victoria/victoriamisc/home/victoria_sofa.jpg');
                scene.text('Niko appears to be distracted while looking at his phone, so you lean over to see a photo of a woman with white hair, sitting on a couch and holding a guitar. "Who is she?" you ask. "A friend of yours?"');
                scene.text('He smiles. "Nah, she\'s this girl I met a few days ago at one of the band rehearsals. She didn\'t say much, but holy shit, she can really rip a guitar."');
                if (((s as any).VK_Victoria_QW ?? 0) > 0) {
                  scene.text('You immediately recognize the girl as Victoria. "I know her. She\'s the sister of a friend of mine. Her name is Victoria."');
                  scene.text('Niko looks at you in shock. "No shit? Think you could hook me up with her?"');
                  scene.text('You give him a coy smirk. "Want me to hook you up with the girls, huh? What\'s in it for me?"');
                  scene.text('He quickly shakes his head as he smiles. "No, that\'s not what I meant. She blew me away with her performance, and I would love meet her. Also I want to know if she uploaded any of her music, because she can rock out."');
                  scene.text('You slowly nod your head. "Maybe I could introduce you sometime, but she\'s been really busy lately, so now won\'t be a good time."');
                  scene.text('He slowly nods his head. "Alright. When she has some time, then give her my number. That song of hers has been stuck in my head and it\'s driving me crazy!" He then continues to look at the image while seemingly lost in thought.');
                } else {
                  scene.text('You don\'t recognize her. "I\'ve never seen her around town. Is she new or is she from elsewhere?"');
                  scene.text('Niko shrugs. "No idea, but she\'s talented for sure. She just showed up, blew everyone away, then left. That solo she played is still stuck in my head and it\'s driving me crazy! I wish I knew what song it was."');
                  scene.text('Knowing too well what he\'s talking about, you nod. "Yeah, it sucks when a song is stuck in your head and you don\'t know what it is. Maybe she\'ll visit town again sometime? It would certainly be interesting to see more talented musicians around here. Everything is always so dull around here!"');
                  scene.text('Niko slowly nods his head. "You got that right. We need some excitement here for sure." He then continues to look at the image while seemingly lost in thought.');
                }
              } else {
                if (((s as any).VK ?? 0) === 7) {
                  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
                  scene.text('With seemingly nothing going on, you decide to talk to Niko. "This day is such a drag. Have you heard anything interesting?"');
                  scene.text('Niko nods. "Have you heard of the new night club opening up in the city?"');
                  scene.text('You shake your head. "No, can\'t say I have."');
                  scene.text('"It seems like a really lively place, but it\'s invite only. Fucking assholes! I want to check that place out. You can hear the intense beats from the street."');
                  scene.text('"Sounds like a fun club to visit. Any idea how to get invited?"');
                  scene.text('He shakes his head. "Nah. Everyone is so tight-lipped there. It\'s like some exclusive society or something. I want to get in and see what\'s up. Seems wild from what I saw."');
                  scene.text('"What exactly did you see that\'s so interesting?" you ask curiously.');
                  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
                    scene.text('"The people that go there are… Very interesting. They seem to dress very different from what I\'ve seen around the city, and they have some of the most beautiful women there too."');
                    scene.text('Feeling a bit jealous, you lightly jab him with your elbow. "You\'re not thinking of getting another girl, are you?"');
                    scene.text('He lightly rubs on his side as he chuckles. "Oh course not, my princess! I was just saying that they have some incredible style there. The fashion is insane."');
                  } else {
                    scene.text('"The people that go there are… Very interesting. They seem to dress very different from what I\'ve seen around the city, and they have some of the most beautiful women there too."');
                    scene.text('You smirk. "Looking to pick up some women, huh? Is that why you want in so bad?"');
                    scene.text('He chuckles. "Nah, I was just saying that they have some incredible style there. The fashion is insane."');
                  }
                  scene.text('With Niko\'s comment seeming a bit out of character, you decide to press him a bit. "So you\'re into fashion now? Is there some secret life you\'re keeping from everyone here?"');
                  scene.text('He continues chuckling. "I\'m not going all faggy on you. I just saw some sick drips and wanted to get my hand on them. It\'s always good to look slick for a date. That\'s all I\'m saying." He then goes back to drinking his beer.');
                } else {
                  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
                  scene.text('With the day being so slow, you decide to make small talk. "What\'s the word around town?"');
                  scene.text('Niko shrugs. "Not much really. Today has been such a drag. I had to fight to keep myself awake during history class."');
                  scene.text('"Not a fan of history, huh?" you reply and he shakes his head.');
                  scene.text('"Only if I\'m the one creating it. What\'s the point listening to someone else doing shit that doesn\'t affect me in any way? It\'s like I\'m listening to a drunk man\'s bar tales."');
                  scene.text('You slowly nod your head. "Mrs. Sokoloff could at least do a better job making it somewhat engaging."');
                  scene.text('Niko nods. "Yeah, she could add some bloody medieval fights and show some videos of those fights, or re-enactments. Anything to make the class less of a drag."');
                  scene.text('Realizing what he\'s saying, you can\'t help but add a counterpoint. "But if she did that, then we would just be watching movies all day."');
                  scene.text('Niko shrugs. "Would that be such a bad thing? I\'m certainly not learning shit this way." He then goes back to his drunk.');
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Hang out', goto: ['praiders_garage', 'hangout_rand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat_radomir':
      enterChatRadomir(s, scene);
      break;
    case 'chat_radomir1':
      enterChatRadomir1(s, scene);
      break;
    case 'chat_anushka':
      enterChatAnushka(s, scene);
      break;
    case 'chat_anushka1':
      enterChatAnushka1(s, scene);
      break;
    case 'chat_valentin':
      enterChatValentin(s, scene);
      break;
    case 'chat_valentin1':
      enterChatValentin1(s, scene);
      break;
    case 'radcheated':
      enterRadcheated(s, scene);
      break;
    case 'chat_arkadi':
      enterChatArkadi(s, scene);
      break;
    case 'chat_arkadi1':
      enterChatArkadi1(s, scene);
      break;
    case 'chat_alyona':
      enterChatAlyona(s, scene);
      break;
    case 'chat_alyona1':
      enterChatAlyona1(s, scene);
      break;
    case 'chat_lenalera':
      enterChatLenalera(s, scene);
      break;
    case 'chat_lenalera1':
      enterChatLenalera1(s, scene);
      break;
    case 'chat_lavrenti':
      enterChatLavrenti(s, scene);
      break;
    case 'chat_roman':
      enterChatRoman(s, scene);
      break;
    case 'chat_roman1':
      enterChatRoman1(s, scene);
      break;
    case 'chat_niko':
      enterChatNiko(s, scene);
      break;
    case 'chat_niko1':
      enterChatNiko1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const praiders_garage_chat: LocationDef = {
  name: 'praiders_garage_chat',
  title: 'You take a seat next to Radomir as everyone spreads out. He ',
  region: 'other',
  enter: enter,
};
