import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 1, '', Math.floor(Math.random() * 18) + 18, 'like');
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
    scene.text(`You notice ${((s as any).npcheight_pref ?? 0)} girl with ${((s as any).npcbuild_pref ?? 0)} body and ${((s as any).npchair ?? 0)} hair approaching you. She is wearing ${((s as any).npcClo ?? 0)}.`);
    // TODO-QSP: dynamic text: As she nears you, she presents herself; "Hi. My name is <<$npcdesc>>. What are y...
    scene.text(`As she nears you, she presents herself; "Hi. My name is ${((s as any).npcdesc ?? 0)}. What are you doing here all by yourself?"`);
    scene.actions([
      { label: 'Greet her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: "Hi! My name is <<$pcs_nickname>>." you answer. "School just ended so I was tryi...
    scene.text(`"Hi! My name is ${((s as any).pcs_nickname ?? 0)}." you answer. "School just ended so I was trying to figure out what to do for the rest of the day."`);
    // TODO-QSP: dynamic text: "Oh really." After a moment of silence <<$npcdesc>> finally speaks up; "Don't ta...
    scene.text(`"Oh really." After a moment of silence ${((s as any).npcdesc ?? 0)} finally speaks up; "Don't take this the wrong way but what school do you attend?" she asks.`);
    scene.actions([
      { label: 'Don\'t tell her which school', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('You break out into laughter, "Why would I tell you that, for all I know you could be a weird stalker."');
    scene.text('"Did you just accuse me for being a stalker?" she asks as her voice changes to a more serious tone.');
    scene.text('"I didn\'t mean to make you upset, but don\'t you thinks it\'s a bit creepy for someone unknown to walk up a schoolgirl and ask what school they go to?" you answer.');
    // TODO-QSP: dynamic text: <<$npcdesc>> clearly upset by your question just turns around and walks away wit...
    scene.text(`${((s as any).npcdesc ?? 0)} clearly upset by your question just turns around and walks away without saying another word.`);
    scene.text('"What a strange girl." you think to yourself as you watch her going away muttering something to herself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Tell her', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I don\'t really know if I should tell you that. For all I know you might be a creepy woman that wants to kidnap me."');
    scene.text('"I\'m sorry I knew I would come off as creepy, but I got a bit thrown off by your school outfit. I didn\'t mean anything by it."');
    if (((s as any).loc ?? 0) === 'pav_residential'  ||  ((s as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"Thanks, I think…" you answer thinking she\'s pretty cute while squirming.');
      scene.text('"Okay, I\'ll tell you but you must promise me one thing." you tease her.');
      // TODO-QSP: dynamic text: Staying quiet for a moment, <<$npcdesc>> is contemplating what she should answer...
      scene.text(`Staying quiet for a moment, ${((s as any).npcdesc ?? 0)} is contemplating what she should answer, finally deciding, "Sure, whatever you want, I can't say no to a girl in a hot school outfit…"`);
      // TODO-QSP: dynamic text: You tell <<$npcdesc>> what school you attend. "I know of that school, it's known...
      scene.text(`You tell ${((s as any).npcdesc ?? 0)} what school you attend. "I know of that school, it's known for its beautiful girls." You blush a little as she's definitely flirting with you. "May I entertain you for the rest of the day?" she asks.`);
    } else {
      scene.text('You think to yourself there shouldn\'t be any problems since you\'re in another place. You tell her the name of the school as she looks at you confused, "I\'ve never heard of that school."');
      scene.text('"It\'s the school in Pavlovsk." you tell her.');
      scene.text('"Oh, that\'s great…" she stops herself. She smiles as she tells you, "Good thing I stopped myself I almost went all creepy once again."');
      scene.text('You smile back as she gathers courage to ask you, "Since you\'re not from here, what would you say to letting me show you around the town?"');
    }
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('As you\'re talking you get a creepy feeling about this girl, "I\'m sorry but I just remembered I was supposed to meet a friend."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed. "Oh, that's a shame. Could I get-…"
    scene.text(`${((s as any).npcdesc ?? 0)} looks at you disappointed. "Oh, that's a shame. Could I get-…"`);
    scene.text('You\'re already moving away from her before she even finished her sentence not hearing what she wanted.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Decline politely', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry but I\'m not interested. I sort of have a boyfriend…" you answer wanting to reject the girl as easy as possible.');
    scene.text('"That\'s too bad… I should have guessed a girl in that hot outfit would be taken."');
    scene.text('As you move away from her, you\'re glad you declined, especially after the last comment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"Sure, that sounds fun and I just so happen to have some time to kill." You say with a wink.');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((s as any).npcdesc ?? 0)} "So, what do you want to do?".`);
    qspCall(s, 'dateF', 'date_choice');
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_girlfriend', ((s as any).npcID ?? 0));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that's a great idea. I'll be in touch." <<$npcdesc>> adds your number to ...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((s as any).npcdesc ?? 0)} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
    scene.text(`You notice ${((s as any).npcheight_pref ?? 0)} girl with ${((s as any).npcbuild_pref ?? 0)} body and ${((s as any).npchair ?? 0)} hair approaching you. She is wearing ${((s as any).npcClo ?? 0)}.`);
    scene.text('As she nears you, you hear her say, "Hey baby, you seem like a girl that likes to have fun. What do you say, wanna hang out?"');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
      // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
      scene.text(`You notice ${((s as any).npcheight_pref ?? 0)} girl with ${((s as any).npcbuild_pref ?? 0)} body and ${((s as any).npchair ?? 0)} hair approaching you. She is wearing ${((s as any).npcClo ?? 0)}.`);
      // TODO-QSP: dynamic text: As she nears you, she reaches out her hand for a handshake. "Hi. My name is <<$n...
      scene.text(`As she nears you, she reaches out her hand for a handshake. "Hi. My name is ${((s as any).npcdesc ?? 0)}."`);
      scene.actions([
        { label: 'Refuse and walk away', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('Not really impressed, you decide to teach her a lesson, "Sure thing, here\'s my number."');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly scribbles it down not knowing you've just given her a total...
    scene.text(`${((s as any).npcdesc ?? 0)} quickly scribbles it down not knowing you've just given her a totally unknown number.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Grasp hand', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You think <<$npcdesc>> is cute-looking and even though you're not sure about thi...
    scene.text(`You think ${((s as any).npcdesc ?? 0)} is cute-looking and even though you're not sure about this you decide grasping her hand.`);
    scene.text('"Aren\'t you going to tell me your name?" she asks.');
    scene.actions([
      { label: 'Decline', goto: ['dateF', 'decline'] },
      { label: 'Happily tell her your name', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('All of a sudden you get a bubbly feeling in your stomach thinking if she\'s really asking your name?');
    // TODO-QSP: dynamic text: You break out in a smile telling her, "My name is <<$pcs_nickname>>."
    scene.text(`You break out in a smile telling her, "My name is ${((s as any).pcs_nickname ?? 0)}."`);
    // TODO-QSP: dynamic text: "What a beautiful name and a loving smile." <<$npcdesc>> tells you.
    scene.text(`"What a beautiful name and a loving smile." ${((s as any).npcdesc ?? 0)} tells you.`);
    // TODO-QSP: dynamic text: You start blushing as <<$npcdesc>> compliments you… "So what do you say <<$pcs_n...
    scene.text(`You start blushing as ${((s as any).npcdesc ?? 0)} compliments you… "So what do you say ${((s as any).pcs_nickname ?? 0)} would you like to go on a date with me?"`);
    scene.actions([
      { label: 'Decline', goto: ['dateF', 'decline'] },
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('You think about it a moment and figure why not "Sure I would love to out with you."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((s as any).npcdesc ?? 0)} "So, what do you want to do?".`);
    qspCall(s, 'dateF', 'date_choice');
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_girlfriend', ((s as any).npcID ?? 0));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that's a great idea. I'll be in touch." <<$npcdesc>> adds your number to ...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((s as any).npcdesc ?? 0)} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
      // TODO-QSP: dynamic text: You notice <<$npcheight_pref>> girl with <<$npcbuild_pref>> body and <<$npchair>...
      scene.text(`You notice ${((s as any).npcheight_pref ?? 0)} girl with ${((s as any).npcbuild_pref ?? 0)} body and ${((s as any).npchair ?? 0)} hair approaching you. She is wearing ${((s as any).npcClo ?? 0)}.`);
      scene.text('She walks up to full of confidence, "Damn, baby, on a scale from 1 to 10, you\'re an 11. How about a date?"');
      scene.actions([
        { label: 'Excuse me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: "Yeah, you heard me." said <<$npcdesc>>. "Don't act all that surprised, you're g...
    scene.text(`"Yeah, you heard me." said ${((s as any).npcdesc ?? 0)}. "Don't act all that surprised, you're good-looking, I'm good-looking we would be the perfect couple, so what do you say?"`);
    scene.text('"Isn\'t someone full of confidence." you comment, seizing control of the conversation, as you contemplate your next move…');
    scene.actions([
      { label: 'Remain silent', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"Come on, gorgeous, don\'t give me the silent treatment."');
    scene.text('As you hear the word gorgeous you melt straight away. You blush and mumble thanks, stammering like a buffoon.');
    // TODO-QSP: dynamic text: <<$npcdesc>> noticing that you're having some trouble, smiles and tells you, "I'...
    scene.text(`${((s as any).npcdesc ?? 0)} noticing that you're having some trouble, smiles and tells you, "I'll ask you one more time, I don't want to come off as desperate." she says laughing.`);
    scene.text('"Someone not desperate would have introduced themselves first and told me their name first. I don\'t want to talk to a complete stranger."');
    // TODO-QSP: dynamic text: "<<$npcdesc>>! And yours?" she asks you confidently, seeing a glimmer of hope.
    scene.text(`"${((s as any).npcdesc ?? 0)}! And yours?" she asks you confidently, seeing a glimmer of hope.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>." you answer.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}." you answer.`);
    // TODO-QSP: dynamic text: "Just as I expected a beautiful name for a beautiful girl…" <<$npcdesc>> quickly...
    scene.text(`"Just as I expected a beautiful name for a beautiful girl…" ${((s as any).npcdesc ?? 0)} quickly replies.`);
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry but I don\'t feel myself attracted to you enough and I don\'t want to lead you on."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed. "Oh well, I didn't think I had a chance ...
    scene.text(`${((s as any).npcdesc ?? 0)} looks at you disappointed. "Oh well, I didn't think I had a chance but you can't blame me for trying."`);
    scene.text('The two of you say goodbye to each other.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Look at her in disgust', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry, it\'s good that you have all this confidence, but I\'m way out of your league. There\'s no way I would be caught seen out with you."');
    scene.text('"What did you say, you little…" you\'re not able to hear the rest as you walk away…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Agree to a date', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"Stop, you\'re making me blush again. Sure, sounds like fun, I would love to."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npcdesc>> "So, what do you want to do gorgeous?".
    scene.text(`"Great!" answers ${((s as any).npcdesc ?? 0)} "So, what do you want to do gorgeous?".`);
    qspCall(s, 'dateF', 'date_choice');
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_girlfriend', ((s as any).npcID ?? 0));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that's a great idea. I'll be in touch." <<$npcdesc>> adds your number to ...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((s as any).npcdesc ?? 0)} adds your number to her contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
      { label: 'Look at her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('You give her a once over and then give her an amused look, "What did you say? I hope you know what you\'re getting yourself into."');
    scene.text('Not fazed by your brashness she continues on, "I know it\'s just a front with girls like you. All of you just act hard but I\'ve got you all figured out. Tell me this instead, what is your name?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"How about I kick your ass instead? Now get out of here before you know what my boot feels like shoved up your ass." you reply angrily.');
    scene.text('"Okay, okay, sheesh… take it easy." she says loudly as she\'s moving away from you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Answer her', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You give her a contemptuous look. "Oh, you have me all figured out do you? My na...
    scene.text(`You give her a contemptuous look. "Oh, you have me all figured out do you? My name is ${((s as any).pcs_nickname ?? 0)}, not that it is any of your business."`);
    if (((s as any).loc ?? 0) === 'pav_residential'  ||  ((s as any).loc ?? 0) === 'pav_commercial') {
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
    qspCall(s, 'lover', 'add_girlfriend', ((s as any).npcID ?? 0));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m busy right now." You tell her and watch her become disappointed. "But maybe I will get bored out of my skull and you will seem like a better open, so take my number and maybe I will answer if you call."');
    // TODO-QSP: dynamic text: She laughs at your response. "Thanks. I'll try to make sure to call you when you...
    scene.text(`She laughs at your response. "Thanks. I'll try to make sure to call you when you're really bored." ${((s as any).npcdesc ?? 0)} adds your number to her contact list.`);
    scene.text('"Don\'t count on it loser." you answer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Fuck off!', handler: (st: GameState) => {
    scene.img('images/pc/reactions/fuckoff1.jpg');
    scene.text('"Fuck off loser, I only date real men, the kinda that would kick your ass just for laughs!" you answer.');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you in shock as she was not ready for you to react that wa...
    scene.text(`${((s as any).npcdesc ?? 0)} looks at you in shock as she was not ready for you to react that way. "Well, I thought we could just have a little fun together…"`);
    // TODO-QSP: dynamic text: As you're getting more annoyed you give her a shove making her back up a couple ...
    scene.text(`As you're getting more annoyed you give her a shove making her back up a couple of steps. "Get the fuck out of here before I kick your ass!" ${((s as any).npcdesc ?? 0)} seeing she's getting nowhere moves away quickly.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Fine', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('You give her a hard look and eye her up and down. "Fine I\'m fucking bored anyways, but you\'re paying."');
    scene.text('"Good, I expected no other outcome." she says. "I\'ll give it to you to decide what we should do?".');
    qspCall(s, 'dateF', 'date_choice');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'decline') {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.text('"I\'m sorry but I don\'t feel us clicking so I\'ll have to decline."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks at you disappointed and then shrugs. "Well can't blame a girl...
    scene.text(`${((s as any).npcdesc ?? 0)} looks at you disappointed and then shrugs. "Well can't blame a girl for trying, right?"`);
    scene.text('The two of you say goodbye to each other.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'date_choice') {
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: '"Let\'s go to the park"', goto: ['dateF', 'datepark'] },
      ]);
    }
    if (Math.floor(Math.random() * 5) + 0 === 0) {
      scene.text('"We could just go to my place and make out." She says with a blush that exposes her arousal.');
      scene.actions([
        { label: 'Let\'s have sex', goto: ['hookup_female', 'quickie'] },
      ]);
    }
    scene.actions([
      { label: '"Let\'s go to a bar"', goto: ['dateF', 'datebar'] },
    ]);
  }
  scene.actions([
    { label: 'Ignore her and hurry away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

export const dateF: LocationDef = {
  name: 'dateF',
  title: '"I\'m sorry but I don\'t feel us clicking so I\'ll have to decl',
  region: 'other',
  locationType: 'public_indoors',
  description: ['"I\'m sorry but I don\'t feel us clicking so I\'ll have to decline."'],
  enter: enter,
};
