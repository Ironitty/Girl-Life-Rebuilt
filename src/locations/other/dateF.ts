import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'npcgeneratec', '', 1, '', (Math.floor(Math.random() * 18) + 18), 'like');
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
    scene.text(`You notice ${((s as any).npcheight_pref ?? '')} girl with ${((s as any).npcbuild_pref ?? '')} body and ${((s as any).npchair ?? '')} hair approaching you. She is wearing ${((s as any).npcClo ?? '')}.`);
    // TODO-QSP: dynamic text: As she nears you, she presents herself; "Hi. My name is <<$npcdesc>>. What are y...
    scene.text(`As she nears you, she presents herself; "Hi. My name is ${((s as any).npcdesc ?? '')}. What are you doing here all by yourself?"`);
    scene.actions([
      { label: 'Greet her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: "Hi! My name is <<$pcs_nickname>>." you answer. "School just ended so I was tryi...
    scene.text(`"Hi! My name is ${((st as any).pcs_nickname ?? '')}." you answer. "School just ended so I was trying to figure out what to do for the rest of the day."`);
    // TODO-QSP: dynamic text: "Oh really." After a moment of silence <<$npcdesc>> finally speaks up; "Don''t t...
    scene.text(`"Oh really." After a moment of silence ${((st as any).npcdesc ?? '')} finally speaks up; "Don't take this the wrong way but what school do you attend?" she asks.`);
    scene.actions([
      { label: 'Don\'t tell her which school', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('You break out into laughter, "Why would I tell you that, for all I know you could be a weird stalker."');
    scene.text('"Did you just accuse me for being a stalker?" she asks as her voice changes to a more serious tone.');
    scene.text('"I didn\'t mean to make you upset, but don\'t you thinks it\'s a bit creepy for someone unknown to walk up a schoolgirl and ask what school they go to?" you answer.');
    // TODO-QSP: dynamic text: <<$npcdesc>> clearly upset by your question just turns around and walks away wit...
    scene.text(`${((st as any).npcdesc ?? '')} clearly upset by your question just turns around and walks away without saying another word.`);
    scene.text('"What a strange girl." you think to yourself as you watch her going away muttering something to herself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Tell her', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I don\'t really know if I should tell you that. For all I know you might be a creepy woman that wants to kidnap me."');
    scene.text('"I\'m sorry I knew I would come off as creepy, but I got a bit thrown off by your school outfit. I didn\'t mean anything by it."');
    if (((st as any).loc ?? 0) === 'pav_residential'  ||  ((st as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"Thanks, I think…" you answer thinking she\'s pretty cute while squirming.');
      scene.text('"Okay, I\'ll tell you but you must promise me one thing." you tease her.');
      // TODO-QSP: dynamic text: Staying quiet for a moment, <<$npcdesc>> is contemplating what she should answer...
      scene.text(`Staying quiet for a moment, ${((st as any).npcdesc ?? '')} is contemplating what she should answer, finally deciding, "Sure, whatever you want, I can't say no to a girl in a hot school outfit…"`);
      // TODO-QSP: dynamic text: You tell <<$npcdesc>> what school you attend. "I know of that school, it''s know...
      scene.text(`You tell ${((st as any).npcdesc ?? '')} what school you attend. "I know of that school, it's known for its beautiful girls." You blush a little as she's definitely flirting with you. "May I entertain you for the rest of the day?" she asks.`);
    } else {
      scene.text('You think to yourself there shouldn\'t be any problems since you\'re in another place. You tell her the name of the school as she looks at you confused, "I\'ve never heard of that school."');
      scene.text('"It\'s the school in Pavlovsk." you tell her.');
      scene.text('"Oh, that\'s great…" she stops herself. She smiles as she tells you, "Good thing I stopped myself I almost went all creepy once again."');
      scene.text('You smile back as she gathers courage to ask you, "Since you\'re not from here, what would you say to letting me show you around the town?"');
    }
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('As you\'re talking you get a creepy feeling about this girl, "I\'m sorry but I just remembered I was supposed to meet a friend."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed. "Oh, that''s a shame. Could I get-…"
    scene.text(`${((st as any).npcdesc ?? '')} looks at you disappointed. "Oh, that's a shame. Could I get-…"`);
    scene.text('You\'re already moving away from her before she even finished her sentence not hearing what she wanted.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Decline politely', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry but I\'m not interested. I sort of have a boyfriend…" you answer wanting to reject the girl as easy as possible.');
    scene.text('"That\'s too bad… I should have guessed a girl in that hot outfit would be taken."');
    scene.text('As you move away from her, you\'re glad you declined, especially after the last comment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"Sure, that sounds fun and I just so happen to have some time to kill." You say with a wink.');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((st as any).npcdesc ?? '')} "So, what do you want to do?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npcdesc>> adds your number t...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npcdesc ?? '')} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
      // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
      scene.text(`You notice ${((s as any).npcheight_pref ?? '')} girl with ${((s as any).npcbuild_pref ?? '')} body and ${((s as any).npchair ?? '')} hair approaching you. She is wearing ${((s as any).npcClo ?? '')}.`);
      scene.text('As she nears you, you hear her say, "Hey baby, you seem like a girl that likes to have fun. What do you say, wanna hang out?"');
      scene.actions([
        { label: 'Look at her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('You give her a once over and then give her an amused look, "What did you say? I hope you know what you\'re getting yourself into."');
    scene.text('Not fazed by your brashness she continues on, "I know it\'s just a front with girls like you. All of you just act hard but I\'ve got you all figured out. Tell me this instead, what is your name?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"How about I kick your ass instead? Now get out of here before you know what my boot feels like shoved up your ass." you reply angrily.');
    scene.text('"Okay, okay, sheesh… take it easy." she says loudly as she\'s moving away from you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Answer her', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You give her a contemptuous look. "Oh, you have me all figured out do you? My na...
    scene.text(`You give her a contemptuous look. "Oh, you have me all figured out do you? My name is ${((st as any).pcs_nickname ?? '')}, not that it is any of your business."`);
    if (((st as any).loc ?? 0) === 'pav_residential'  ||  ((st as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"Well, I spotted you while I was on my way to a friend\'s place and your looks caught my attention. Simply said, I want to add another trophy to my trophy wall." she impudently answers.');
      scene.text('You snap and get up in her face, "How about I cut off your tits and add them to my collection."');
      scene.text('She starts laughing clearly not feeling threatened by you, "Relax, I\'m only kidding. I like my tits just where they are, but if you wanted to fondle them…" She says with a grin. "But seriously, I just wanted to ask you out, so how about it?');
    } else {
      scene.text('"Well, I spotted you while I was walking around town and your looks caught my attention. Simply said, I want to add another trophy to my trophy wall." she impudently answers.');
      scene.text('You snap and get up in her face, "How about I cut off your tits and add them to my collection."');
      scene.text('She starts laughing clearly not feeling threatened by you, "Relax, I\'m only kidding. I like my tits just where they are, but if you wanted to fondle them…" She says with a grin. "But seriously, I just wanted to ask you out, so how about it?');
    }
    scene.actions([
      { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m busy right now." You tell her and watch her become disappointed. "But maybe I will get bored out of my skull and you will seem like a better open, so take my number and maybe I will answer if you call."');
    // TODO-QSP: dynamic text: She laughs at your response. "Thanks. I''ll try to make sure to call you when yo...
    scene.text(`She laughs at your response. "Thanks. I'll try to make sure to call you when you're really bored." ${((st as any).npcdesc ?? '')} adds your number to her contact list.`);
    scene.text('"Don\'t count on it loser." you answer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Fuck off!', handler: (st: GameState) => {
    scene.img('images/pc/reactions/fuckoff1.jpg');
    scene.text('"Fuck off loser, I only date real men, the kinda that would kick your ass just for laughs!" you answer.');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you in shock as she was not ready for you to react that wa...
    scene.text(`${((st as any).npcdesc ?? '')} looks at you in shock as she was not ready for you to react that way. "Well, I thought we could just have a little fun together…"`);
    // TODO-QSP: dynamic text: As you''re getting more annoyed you give her a shove making her back up a couple...
    scene.text(`As you're getting more annoyed you give her a shove making her back up a couple of steps. "Get the fuck out of here before I kick your ass!" ${((st as any).npcdesc ?? '')} seeing she's getting nowhere moves away quickly.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Fine', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('You give her a hard look and eye her up and down. "Fine I\'m fucking bored anyways, but you\'re paying."');
    scene.text('"Good, I expected no other outcome." she says. "I\'ll give it to you to decide what we should do?".');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) < 6) {
        scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
        // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
        scene.text(`You notice ${((s as any).npcheight_pref ?? '')} girl with ${((s as any).npcbuild_pref ?? '')} body and ${((s as any).npchair ?? '')} hair approaching you. She is wearing ${((s as any).npcClo ?? '')}.`);
        // TODO-QSP: dynamic text: As she nears you, she reaches out her hand for a handshake. "Hi. My name is <<$n...
        scene.text(`As she nears you, she reaches out her hand for a handshake. "Hi. My name is ${((s as any).npcdesc ?? '')}."`);
        scene.actions([
          { label: 'Refuse and walk away', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('Not really impressed, you decide to teach her a lesson, "Sure thing, here\'s my number."');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly scribbles it down not knowing you''ve just given her a tota...
    scene.text(`${((st as any).npcdesc ?? '')} quickly scribbles it down not knowing you've just given her a totally unknown number.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          { label: 'Grasp hand', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You think <<$npcdesc>> is cute-looking and even though you''re not sure about th...
    scene.text(`You think ${((st as any).npcdesc ?? '')} is cute-looking and even though you're not sure about this you decide grasping her hand.`);
    scene.text('"Aren\'t you going to tell me your name?" she asks.');
    scene.actions([
      { label: 'Decline', goto: ['dateF', 'decline'] },
      { label: 'Happily tell her your name', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('All of a sudden you get a bubbly feeling in your stomach thinking if she\'s really asking your name?');
    // TODO-QSP: dynamic text: You break out in a smile telling her, "My name is <<$pcs_nickname>>."
    scene.text(`You break out in a smile telling her, "My name is ${((st as any).pcs_nickname ?? '')}."`);
    // TODO-QSP: dynamic text: "What a beautiful name and a loving smile." <<$npcdesc>> tells you.
    scene.text(`"What a beautiful name and a loving smile." ${((st as any).npcdesc ?? '')} tells you.`);
    // TODO-QSP: dynamic text: You start blushing as <<$npcdesc>> compliments you… "So what do you say <<$pcs_n...
    scene.text(`You start blushing as ${((st as any).npcdesc ?? '')} compliments you… "So what do you say ${((st as any).pcs_nickname ?? '')} would you like to go on a date with me?"`);
    scene.actions([
      { label: 'Decline', goto: ['dateF', 'decline'] },
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('You think about it a moment and figure why not "Sure I would love to out with you."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((st as any).npcdesc ?? '')} "So, what do you want to do?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npcdesc>> adds your number t...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npcdesc ?? '')} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
        // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
        scene.text(`You notice ${((s as any).npcheight_pref ?? '')} girl with ${((s as any).npcbuild_pref ?? '')} body and ${((s as any).npchair ?? '')} hair approaching you. She is wearing ${((s as any).npcClo ?? '')}.`);
        scene.text('She walks up to full of confidence, "Damn, baby, on a scale from 1 to 10, you\'re an 11. How about a date?"');
        scene.actions([
          { label: 'Excuse me?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: "Yeah, you heard me." said <<$npcdesc>>. "Don''t act all that surprised, you''re...
    scene.text(`"Yeah, you heard me." said ${((st as any).npcdesc ?? '')}. "Don't act all that surprised, you're good-looking, I'm good-looking we would be the perfect couple, so what do you say?"`);
    scene.text('"Isn\'t someone full of confidence." you comment, seizing control of the conversation, as you contemplate your next move…');
    scene.actions([
      { label: 'Remain silent', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"Come on, gorgeous, don\'t give me the silent treatment."');
    scene.text('As you hear the word gorgeous you melt straight away. You blush and mumble thanks, stammering like a buffoon.');
    // TODO-QSP: dynamic text: <<$npcdesc>> noticing that you''re having some trouble, smiles and tells you, "I...
    scene.text(`${((st as any).npcdesc ?? '')} noticing that you're having some trouble, smiles and tells you, "I'll ask you one more time, I don't want to come off as desperate." she says laughing.`);
    scene.text('"Someone not desperate would have introduced themselves first and told me their name first. I don\'t want to talk to a complete stranger."');
    // TODO-QSP: dynamic text: "<<$npcdesc>>! And yours?" she asks you confidently, seeing a glimmer of hope.
    scene.text(`"${((st as any).npcdesc ?? '')}! And yours?" she asks you confidently, seeing a glimmer of hope.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>." you answer.
    scene.text(`"${((st as any).pcs_nickname ?? '')}." you answer.`);
    // TODO-QSP: dynamic text: "Just as I expected a beautiful name for a beautiful girl…" <<$npcdesc>> quickly...
    scene.text(`"Just as I expected a beautiful name for a beautiful girl…" ${((st as any).npcdesc ?? '')} quickly replies.`);
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry but I don\'t feel myself attracted to you enough and I don\'t want to lead you on."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed. "Oh well, I didn''t think I had a chance...
    scene.text(`${((st as any).npcdesc ?? '')} looks at you disappointed. "Oh well, I didn't think I had a chance but you can't blame me for trying."`);
    scene.text('The two of you say goodbye to each other.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Look at her in disgust', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, it\'s good that you have all this confidence, but I\'m way out of your league. There\'s no way I would be caught seen out with you."');
    scene.text('"What did you say, you little…" you\'re not able to hear the rest as you walk away…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Agree to a date', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"Stop, you\'re making me blush again. Sure, sounds like fun, I would love to."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do gorgeous?".
    scene.text(`"Great!" answers ${((st as any).npcdesc ?? '')} "So, what do you want to do gorgeous?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npcdesc>> adds your number t...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npcdesc ?? '')} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
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
  scene.actions([
    { label: 'Ignore her and hurry away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDecline(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  scene.text('"I\'m sorry but I don\'t feel us clicking so I\'ll have to decline."');
  // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed and then shrugs. "Well can''t blame a gir...
  scene.text(`${((s as any).npcdesc ?? '')} looks at you disappointed and then shrugs. "Well can't blame a girl for trying, right?"`);
  scene.text('The two of you say goodbye to each other.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDateChoice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: '"Let\'s go to the park"', goto: ['dateF', 'datepark'] },
    ]);
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    scene.text('"We could just go to my place and make out." She says with a blush that exposes her arousal.');
    scene.actions([
      { label: 'Let\'s have sex', goto: ['hookup_female', 'quickie'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"Let\'s go to a bar"', goto: ['dateF', 'datebar'] },
  ]);
  scene.build();
}

function enterDatepark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/datef/park1.jpg');
  scene.text('"Since it\'s such a beautiful day today, let\'s go for a walk in the park." you suggest.');
  // TODO-QSP: dynamic text: "Sounds great. Lets go." <<$npcdesc>> walks with you towards the park.
  scene.text(`"Sounds great. Lets go." ${((s as any).npcdesc ?? '')} walks with you towards the park.`);
  scene.text('The two of you walk in the park for a while causally talking, getting knowing each other. After a while she suggests sitting down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch people', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/park2.jpg');
    // TODO-QSP: dynamic text: The two of you sit down and begin commenting on the people walking by. You laugh...
    scene.text(`The two of you sit down and begin commenting on the people walking by. You laugh while ${((st as any).npcdesc ?? '')} makes up stories about their backgrounds and quirks.`);
    // TODO-QSP: dynamic text: There are a few times you almost get caught as you point and laugh. As you''re s...
    scene.text(`There are a few times you almost get caught as you point and laugh. As you're sitting down an ice cream pushcart appears, generating quite a buzz around it. ${((st as any).npcdesc ?? '')} asks you, "I sure could go for some ice cream. Would you also like some ice cream?"`);
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/park3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> runs away to the pushcart and comes back with two ice creams. "Here...
    scene.text(`${((st as any).npcdesc ?? '')} runs away to the pushcart and comes back with two ice creams. "Here you go, ${((st as any).pcs_nickname ?? '')} I hope you'll enjoy it."`);
    // TODO-QSP: dynamic text: You nod and thank her. The two of you continue talking while eating the ice crea...
    scene.text(`You nod and thank her. The two of you continue talking while eating the ice cream. As you finish ${((st as any).npcdesc ?? '')} asks, "Shall we move on?"`);
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/park4.jpg');
    scene.text('As you continue walking the two of you begin holding hands. You\'re really enjoying yourself by now everything is going really well.');
    // TODO-QSP: dynamic text: You don''t even notice that the two of you strayed off the beaten path, all of a...
    scene.text(`You don't even notice that the two of you strayed off the beaten path, all of a sudden ${((st as any).npcdesc ?? '')} stops and whispers in your ear, "Now that we're at a secluded spot, you know what would make this date even better?"`);
    scene.actions([
      { label: 'What?', handler: (st: GameState) => {
    scene.img('images/locations/shared/datef/park5.jpg');
    // TODO-QSP: dynamic text: Before you''re even able to respond <<$npcdesc>> leans in and kisses you on the ...
    scene.text(`Before you're even able to respond ${((st as any).npcdesc ?? '')} leans in and kisses you on the lips.`);
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/locations/shared/datef/park6.jpg');
    // TODO-QSP: dynamic text: Feeling frisky you kiss <<$npcdesc>> back. Not before long the two of you are ha...
    scene.text(`Feeling frisky you kiss ${((st as any).npcdesc ?? '')} back. Not before long the two of you are having a make out session, french kissing each other.`);
    scene.text('You feel yourself getting more and more aroused, maybe you should stop before the situation escalates too much…');
    qspCall(st, 'arousal', 'kiss', 3, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go along with her', handler: (st: GameState) => {
    (st as any).gfsex = 1;
    (st as any).dateFType = 'walk_back';
    qspGoto(st, 'lezbsex', 'start');
  } },
      { label: 'Stop her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/parkback.jpg');
    scene.text('You put your hand on her chest and push her away from you. "No, we need to stop." At first she keeps trying to kiss you but you push on her a bit harder and pull back as you do. "I said no!"');
    scene.text('She stops at once. "Sorry, got a little carried away."');
    scene.actions([
      { label: 'Walk back', goto: ['dateF', 'walk_back'] },
    ]);
  } },
    ]);
  } },
      { label: 'Back up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/parkback.jpg');
    scene.text('At first you are surprised by the kiss and return it but quickly you pull back as you push her away. "Stop, I\'m enjoying the date but I\'m not that kind of girl if you thought otherwise."');
    // TODO-QSP: dynamic text: She shakes her head. "No, not at all. I''m not going to make you do something yo...
    scene.text(`She shakes her head. "No, not at all. I'm not going to make you do something you don't want." ${((st as any).npcdesc ?? '')} answers.`);
    scene.actions([
      { label: 'Walk back', goto: ['dateF', 'walk_back'] },
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

function enterWalkBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/datef/parkback.jpg');
  scene.text('As you finish up the two still holding hands walk all the way back to the park entrance. You stand there for a while feeling that awkward silence creeping up as neither of you know how to end the date.');
  // TODO-QSP: dynamic text: "I''ve had a great time." you say smiling. "Yeah, me too…" <<$npcdesc>> says qui...
  scene.text(`"I've had a great time." you say smiling. "Yeah, me too…" ${((s as any).npcdesc ?? '')} says quietly. "Could I get your number so I can call you?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img('images/locations/shared/date/givenumber.jpg');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> your number. "Now I really hope you don''t forget to call ...
    scene.text(`You give ${((st as any).npcdesc ?? '')} your number. "Now I really hope you don't forget to call me." you tell her. "Oh, don't worry about that I'll be in touch." she says.`);
    scene.text('You end the date by her giving you a kiss on the cheek.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Sorry', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/datereject.jpg');
    scene.text('"I\'ve really enjoyed the date but I\'m sorry I can\'t give you my number…"');
    scene.text('"But why, I thought…" Before she continues you stop her telling her that you\'re sorry once again but that it won\'t work out between the two of you.');
    // TODO-QSP: dynamic text: <<$npcdesc>> disappointingly looks at you, "Well at least I gave it my best shot...
    scene.text(`${((st as any).npcdesc ?? '')} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDatebar(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/barinside.jpg');
  // TODO-QSP: dynamic text: "How about going to a bar?" you ask <<$npcdesc>>.
  scene.text(`"How about going to a bar?" you ask ${((s as any).npcdesc ?? '')}.`);
  // TODO-QSP: dynamic text: "Great idea, <<$pcs_nickname>>. I know a great bar with great drinks and lightni...
  scene.text(`"Great idea, ${((s as any).pcs_nickname ?? '')}. I know a great bar with great drinks and lightning."`);
  scene.text('The two of you enter this buzzing hip bar and find a spot where you have a great overview over the place.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Order', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/bardrink.jpg');
    // TODO-QSP: dynamic text: As you sit down <<$npcdesc>> asks you, "Would you like to drink something?"
    scene.text(`As you sit down ${((st as any).npcdesc ?? '')} asks you, "Would you like to drink something?"`);
    scene.actions([
      { label: 'I\'ll have a beer, thanks', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    scene.img('images/locations/shared/datef/bar1.jpg');
    // TODO-QSP: dynamic text: "My kind of girl." <<$npcdesc>> tells you.
    scene.text(`"My kind of girl." ${((st as any).npcdesc ?? '')} tells you.`);
    scene.actions([
      { label: 'Talk', goto: ['dateF', 'bartalk'] },
    ]);
  } },
      { label: 'I\'ll have some hard liquor, thanks', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    scene.img('images/locations/shared/datef/bar1.jpg');
    // TODO-QSP: dynamic text: "My kind of girl." <<$npcdesc>> tells you.
    scene.text(`"My kind of girl." ${((st as any).npcdesc ?? '')} tells you.`);
    scene.actions([
      { label: 'Talk', goto: ['dateF', 'bartalk'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBartalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/barinside.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> goes to the bar counter and after a while returns with the drinks.
  scene.text(`${((s as any).npcdesc ?? '')} goes to the bar counter and after a while returns with the drinks.`);
  // TODO-QSP: dynamic text: "This place is packed." you say to <<$npcdesc>>
  scene.text(`"This place is packed." you say to ${((s as any).npcdesc ?? '')}`);
  scene.text('"Yeah, it\'s pretty cool, I think it\'s the night when there is a band playing live here, so I guess that\'s why it\'s so packed."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue on', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/barband.jpg');
    scene.text('As you sit there talking to each other, the lights suddenly go dim and you hear a guitar riff playing.');
    // TODO-QSP: dynamic text: The band steps out and starts playing. You''re amazed over how well they play an...
    scene.text(`The band steps out and starts playing. You're amazed over how well they play and turn to ${((st as any).npcdesc ?? '')} "They are pretty good don't you think?"`);
    // TODO-QSP: dynamic text: <<$npcdesc>> nods her head. "Yeah they are, do you want another drink?"
    scene.text(`${((st as any).npcdesc ?? '')} nods her head. "Yeah they are, do you want another drink?"`);
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/bar2.jpg');
    scene.text('"Are you trying to get me drunk?" you say winking towards her.');
    scene.text('"No comments." she responds smiling.');
    // TODO-QSP: dynamic text: "Well, I''m having a great time so why not." <<$npcdesc>> goes over to the count...
    scene.text(`"Well, I'm having a great time so why not." ${((st as any).npcdesc ?? '')} goes over to the counter and returns with two new drinks.`);
    if (((st as any).pcs_danc ?? 0) > 30) {
      scene.actions([
        { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/bar3.jpg');
    scene.text('Some time goes by and you\'re not able to contain yourself anymore, you got to dance.');
    // TODO-QSP: dynamic text: "Would you like to dance?" you ask <<$npcdesc>>.
    scene.text(`"Would you like to dance?" you ask ${((st as any).npcdesc ?? '')}.`);
    scene.text('She shakes her head. "I am no dancer, but you should if you want to dance." She says indicating you should get out on the dance floor yourself.');
    // TODO-QSP: dynamic text: You get up from the chair and walk up near the stage and begin moving sensually,...
    scene.text(`You get up from the chair and walk up near the stage and begin moving sensually, teasing ${((st as any).npcdesc ?? '')}.`);
    scene.actions([
      { label: 'Return to your date', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    scene.img('images/locations/shared/datef/bar3.jpg');
    // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>> you really know how to move. I bet all that dancing made...
    scene.text(`"Damn ${((st as any).pcs_nickname ?? '')} you really know how to move. I bet all that dancing made you even thirstier."`);
    scene.text('You nod and she quickly gets up and gets more drinks.');
    scene.text('You chug the drink down, quenching some of the thirst. "Look at you go. I love a girl that can keep a drink down."');
    scene.text('By now you\'re feeling quite tipsy and feeling your inhibitions fading away. You panic a little at the feeling and feel you must get a breather before you lose control.');
    scene.actions([
      { label: 'Excuse yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/bar4.jpg');
    scene.text('You excuse yourself by saying you need to visit the restroom. You walk off and lock the door behind you, looking in the mirror as everything begins to spin.');
    scene.text('You don\'t know how long you\'ve been in the restroom but all of a sudden you hear a knock on the door, "Are you alright? You\'ve been in there for a while now."');
    // TODO-QSP: dynamic text: Recognizing <<$npcdesc>> voice, you come to your senses and open the door, quick...
    scene.text(`Recognizing ${((st as any).npcdesc ?? '')} voice, you come to your senses and open the door, quickly pulling her in.`);
    scene.text('"What\'s happening?" she asks as you lean into her and begin kissing her.');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/locations/shared/datef/bar5.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t seem to mind your brashness. She begins grabbing you all o...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't seem to mind your brashness. She begins grabbing you all over your body, adding even more to your arousal.`);
    scene.text('As you\'re kissing you feel her fingers playing with your wet clit through the panties.');
    // TODO-QSP: dynamic text: "Get down on your knees <<$pcs_nickname>>."
    scene.text(`"Get down on your knees ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go along with her', handler: (st: GameState) => {
    (st as any).gfsex = 1;
    (st as any).dateFType = 'barend';
    qspGoto(st, 'lezbsex', 'start');
  } },
      { label: 'Decide to stop', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/shared/date/barinside.jpg');
    scene.text('You can\'t get yourself to go through this. Excusing yourself you walk back to the table and sit down.');
    // TODO-QSP: dynamic text: <<$npcdesc>> arrives shortly after you to the table. The whole situation is too ...
    scene.text(`${((st as any).npcdesc ?? '')} arrives shortly after you to the table. The whole situation is too awkward now and you begin to blush as you're really ashamed of your actions. You're starting to panic a bit…`);
    scene.actions([
      { label: 'Finish the date', goto: ['dateF', 'barend'] },
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
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/datef/bar2.jpg');
    // TODO-QSP: dynamic text: You and <<$npcdesc>> continue talking even if it''s hard to hear what she says a...
    scene.text(`You and ${((st as any).npcdesc ?? '')} continue talking even if it's hard to hear what she says at some times because of the loud music.`);
    scene.text('Mostly you talk about yours and her backgrounds and future plans.');
    scene.text('You\'re so into the conversation that you don\'t even notice that the band left and that the bar is half empty.');
    scene.actions([
      { label: 'Finish the date', goto: ['dateF', 'barend'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarend(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/datef/bar2.jpg');
  // TODO-QSP: dynamic text: You tell <<$npcdesc>>, "I''ve had a great time but we should be on our way."
  scene.text(`You tell ${((s as any).npcdesc ?? '')}, "I've had a great time but we should be on our way."`);
  // TODO-QSP: dynamic text: "I had a great time, you''re really fun to hang out with." <<$npcdesc>> tells yo...
  scene.text(`"I had a great time, you're really fun to hang out with." ${((s as any).npcdesc ?? '')} tells you. "Could I get your number?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_girlfriend', ((st as any).npcID ?? 0));
    scene.img('images/locations/shared/date/givenumber.jpg');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> your number. "Now I really hope you don''t forget to call ...
    scene.text(`You give ${((st as any).npcdesc ?? '')} your number. "Now I really hope you don't forget to call me." you tell her. "Oh, don't worry about that I'll be in touch." she says.`);
    scene.text('You end the date by her giving you a kiss on the cheek.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Sorry', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/barreject.jpg');
    scene.text('"I\'ve really enjoyed the date but I just can\'t I\'ve made a fool of myself…"');
    scene.text('"No you didn\'t, I understand…" Before she continues you stop her telling her that you\'re sorry once again but you\'re too ashamed to see her again.');
    // TODO-QSP: dynamic text: <<$npcdesc>> disappointingly looks at you, "Well at least I gave it my best shot...
    scene.text(`${((st as any).npcdesc ?? '')} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
    case 'decline':
      enterDecline(s, scene);
      break;
    case 'date_choice':
      enterDateChoice(s, scene);
      break;
    case 'datepark':
      enterDatepark(s, scene);
      break;
    case 'walk_back':
      enterWalkBack(s, scene);
      break;
    case 'datebar':
      enterDatebar(s, scene);
      break;
    case 'bartalk':
      enterBartalk(s, scene);
      break;
    case 'barend':
      enterBarend(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dateF: LocationDef = {
  name: 'dateF',
  title: '"I\'m sorry but I don\'t feel us clicking so I\'ll have to decl',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
