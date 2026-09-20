import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'npcgeneratec', '', 0, '', (Math.floor(Math.random() * 18) + 18), 'like');
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
    scene.text('A man approaches, smiling at you.');
    // TODO-QSP: dynamic text: "Hi. My name is <<$npc_firstname[$boy]>>. What are you doing here all by yoursel...
    scene.text(`"Hi. My name is ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}. What are you doing here all by yourself?"`);
    scene.actions([
      { label: 'Greet him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: "Hi! My name is <<$pcs_nickname>>." you answer. "School just ended so I was tryi...
    scene.text(`"Hi! My name is ${((st as any).pcs_nickname ?? '')}." you answer. "School just ended so I was trying to figure out what to do for the rest of the day."`);
    // TODO-QSP: dynamic text: "Oh really." After a moment of silence <<$npc_firstname[$boy]>> finally speaks u...
    scene.text(`"Oh really." After a moment of silence ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} finally speaks up; "Don't take this the wrong way but what school do you attend?" he asks.`);
    scene.actions([
      { label: 'Don\'t tell him which school', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('You break out into laughter, "Why would I tell you that, for all I know you could be a rapist."');
    scene.text('"Did you just accuse me for a rapist?" he asks as his voice changes to a more serious tone.');
    scene.text('"I didn\'t mean to make you upset, but don\'t you thinks it\'s a bit strange for someone unknown to walk up a schoolgirl and ask what school they go to?" you answer.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> clearly upset by your question just turns around and wa...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} clearly upset by your question just turns around and walks away without saying another word.`);
    scene.text('"What a strange guy." you think to yourself as you watch him going away muttering something to himself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Tell him', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I don\'t really know if I should tell you that. For all I know you might be a creepy guy, that wants to kidnap me."');
    scene.text('"I\'m sorry I knew I would come off as creepy but I got a bit thrown off by your school outfit. I didn\'t mean anything by it."');
    if (((st as any).loc ?? 0) === 'pav_residential'  ||  ((st as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"Thanks, I think…" you answer thinking he\'s pretty cute while squirming.');
      scene.text('"Okay, I\'ll tell you but you must promise me one thing." you tease him.');
      // TODO-QSP: dynamic text: Staying quiet for a moment, <<$npc_firstname[$boy]>> is contemplating what he sh...
      scene.text(`Staying quiet for a moment, ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is contemplating what he should answer, finally deciding, "Sure, whatever you want, I can't say to a girl in a hot school outfit…"`);
      // TODO-QSP: dynamic text: You tell <<$npc_firstname[$boy]>> what school you attend. "I know of that school...
      scene.text(`You tell ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} what school you attend. "I know of that school, it's known for its hot girls." You blush a little as he's definitely flirting with you. "May I entertain you for the rest of the day?" he asks.`);
    } else {
      scene.text('You think to yourself there shouldn\'t be any problems since you\'re in another place. You tell him the name of the school as he looks at you confused, "I\'ve never heard of that school."');
      scene.text('"It\'s the school in Pavlovsk." you tell him.');
      scene.text('"Oh, that\'s great…" he stops himself. He smiles as he tells you, "Good thing I stopped myself I almost went all creepy once again."');
      scene.text('You smile back as he gathers courage to ask you, "Since you\'re not from here, what would you say to letting me show you around the town?"');
    }
    scene.actions([
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"Sure, that sounds fun and I just so happen to have some time to kill." You say with a wink.');
    // TODO-QSP: dynamic text: "Great!" answers <<$npc_firstname[$boy]>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} "So, what do you want to do?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npc_firstname[$boy]>> adds y...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} adds your number to his contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('As you\'re talking you get a creepy feeling about this guy, "I\'m sorry but I just remembered I was supposed to meet a friend."');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you disappointed. "Oh, that''s a shame. Could ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you disappointed. "Oh, that's a shame. Could I get-…"`);
    scene.text('You\'re already moving away from him before he even finished his sentence not hearing what he wanted.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Decline politely', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry but I\'m not interested. I sort of have a boyfriend…" you answer wanting to reject the guys as easy as possible.');
    scene.text('"That\'s too bad… I should have guessed a girl in that hot outfit would be taken."');
    scene.text('As you move away from him, you\'re glad you declined, especially after the last comment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'How about we fuck?', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"How about a fuck for the road instead?"');
    scene.text('"Excuse me?" It\'s his turn to look surprised now.');
    scene.text('"You, me, your place, we have sex right now. How about it?"');
    scene.text('"I knew it, schoolgirls are the best," he grins. You let him grab you by the arm and tow you off towards a nearby apartment complex.');
    if (((st as any).region ?? 0) === 'city_center'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city_island'  ||  ((st as any).region ?? 0) === 'city_lake'  ||  ((st as any).region ?? 0) === 'city_park') {
      qspCall(st, 'fame', 'city', 'sex', 2);
    } else {
      if (((st as any).region ?? 0) === 'pav'  ||  ((st as any).region ?? 0) === 'pav_park'  ||  ((st as any).region ?? 0) === 'pav') {
        qspCall(st, 'fame', 'pav', 'sex', 2);
      }
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['pickup'] = 'street'
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
      scene.text('A man approaches, smiling at you.');
      scene.text('"Hey baby, you seem like a girl that likes to have fun. What do you say, wanna hang out?"');
      scene.actions([
        { label: 'Look at him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('You give him a once over and then give him an amused look, "What did you say? I hope you know what you\'re getting yourself into."');
    scene.text('Not fazed by your brashness he continues on, "I know it\'s just a front with girls like you. All of you just act hard but I\'ve got you all figured out. Tell me this instead, what is your name?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"How about I kick your ass instead? Now get out of her before you know what my boot feels like shoved up your ass." you reply angrily.');
    scene.text('"Okay, okay, sheesh… take it easy." he says loudly as he\'s moving away from you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Answer him', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You give him a contemptuous look. "Oh, you have us all figured out do you? My na...
    scene.text(`You give him a contemptuous look. "Oh, you have us all figured out do you? My name is ${((st as any).pcs_nickname ?? '')}, not that it is any of your business."`);
    if (((st as any).loc ?? 0) === 'pav_residential'  ||  ((st as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"Well, I spotted you while I was on my way to a friends place and your looks caught my attention. Simply said, I want to add another trophy to my trophy wall." he impudently answers.');
      scene.text('You snap and get up in his face, "How about I cut off your balls and add them to my collection."');
      scene.text('He starts laughing clearly not feeling threatened by you, "Relax, I\'m only kidding. I like my balls just where they are, but if you wanted to fondle them…" He says with a grin. "But seriously, I just wanted to ask you out, so how about it?');
    } else {
      scene.text('"Well, I spotted you while I was walking around town and your looks caught my attention. Simply said, I want to add another trophy to my trophy wall." he impudently answers.');
      scene.text('You snap and get up in his face, "How about I cut off your balls and add them to my collection."');
      scene.text('He starts laughing clearly not feeling threatened by you, "Relax, I\'m only kidding. I like my balls just where they are, but if you wanted to fondle them…" He says with a grin. "But seriously, I just wanted to ask you out, so how about it?');
    }
    scene.actions([
      { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m busy right now." You tell him and watch him become disappointed. "But maybe I will get bored out of my skull and you will seem like a better open, so take my number and maybe I will answer if you call."');
    // TODO-QSP: dynamic text: He laughs at your response. "Thanks. I''ll try to make sure to call you when you...
    scene.text(`He laughs at your response. "Thanks. I'll try to make sure to call you when you're really bored." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} adds your number to his contact list.`);
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
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you in shock as he was not ready for you to re...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you in shock as he was not ready for you to react that way. "Well, I thought we could just have a little fun together…"`);
    // TODO-QSP: dynamic text: As you''re getting more annoyed you give him a shove making him back up a couple...
    scene.text(`As you're getting more annoyed you give him a shove making him back up a couple of steps. "Get the fuck out of here before I kick your ass!" ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} seeing he's getting nowhere moves away quickly.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Fine', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('You give him a hard look and eye him up and down. "Fine I\'m fucking bored anyways, but you\'re paying."');
    scene.text('"Good, I expected no other outcome." he says. "I\'ll give it to you to decide what we should do?".');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'How about we fuck?', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"How about a fuck for the road instead?"');
    scene.text('"Excuse me?" It\'s his turn to look surprised now.');
    scene.text('"You, me, your place, we have sex right now. How about it?"');
    scene.text('"Fuck yeah," he grins. You let him grab you by the arm and tow you off towards a nearby apartment complex.');
    if (((st as any).region ?? 0) === 'city_center'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city_island'  ||  ((st as any).region ?? 0) === 'city_lake'  ||  ((st as any).region ?? 0) === 'city_park') {
      qspCall(st, 'fame', 'city', 'sex', 2);
    } else {
      if (((st as any).region ?? 0) === 'pav'  ||  ((st as any).region ?? 0) === 'pav_park'  ||  ((st as any).region ?? 0) === 'pav') {
        qspCall(st, 'fame', 'pav', 'sex', 2);
      }
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['pickup'] = 'street'
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) < 6) {
        scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
        scene.text('A man approaches, smiling at you.');
        // TODO-QSP: dynamic text: As he nears you, he reaches out his hand for a handshake. "Hi. My name is <<$npc...
        scene.text(`As he nears you, he reaches out his hand for a handshake. "Hi. My name is ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}."`);
        scene.actions([
          { label: 'Give him a fake number', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('Not really impressed, you decide to teach him a lesson, "Sure thing, here\'s my number."');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> quickly scribbles it down not knowing you''ve just give...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} quickly scribbles it down not knowing you've just given him a totally unknown number.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          { label: 'Grasp hand', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: Even though you know it''s impolite to shake hands with the opposite sex, you th...
    scene.text(`Even though you know it's impolite to shake hands with the opposite sex, you think ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is cute-looking and even though you're not sure about this you decide grasping his hand.`);
    scene.text('"Aren\'t you going to tell me your name?" he asks.');
    scene.actions([
      { label: 'Decline', goto: ['dateM', 'decline'] },
      { label: 'Happily tell him your name', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('All of a sudden you get a bubbly feeling in your stomach thinking if he\'s really asking your name?');
    // TODO-QSP: dynamic text: You break out in a smile telling him, "My name is <<$pcs_nickname>>."
    scene.text(`You break out in a smile telling him, "My name is ${((st as any).pcs_nickname ?? '')}."`);
    // TODO-QSP: dynamic text: "What a beautiful name and a loving smile." <<$npc_firstname[$boy]>> tells you.
    scene.text(`"What a beautiful name and a loving smile." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} tells you.`);
    // TODO-QSP: dynamic text: You start blushing as <<$npc_firstname[$boy]>> compliments you… "So what do you ...
    scene.text(`You start blushing as ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} compliments you… "So what do you say ${((st as any).pcs_nickname ?? '')} would you like to go on a date with me?"`);
    scene.actions([
      { label: 'Decline', goto: ['dateM', 'decline'] },
      { label: 'I would love to', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('You think about it a moment and figure why not "Sure I would love to out with you."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npc_firstname[$boy]>> "So, what do you want to do?".
    scene.text(`"Great!" answers ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} "So, what do you want to do?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npc_firstname[$boy]>> adds y...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} adds your number to his contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'How about we fuck?', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"How about a fuck for the road instead?"');
    scene.text('"Excuse me?" It\'s his turn to look surprised now.');
    scene.text('"You, me, your place, we have sex right now. How about it?"');
    scene.text('"Fuck yeah," he grins. You let him grab you by the arm and tow you off towards a nearby apartment complex.');
    if (((st as any).region ?? 0) === 'city_center'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city_island'  ||  ((st as any).region ?? 0) === 'city_lake'  ||  ((st as any).region ?? 0) === 'city_park') {
      qspCall(st, 'fame', 'city', 'sex', 2);
    } else {
      if (((st as any).region ?? 0) === 'pav'  ||  ((st as any).region ?? 0) === 'pav_park'  ||  ((st as any).region ?? 0) === 'pav') {
        qspCall(st, 'fame', 'pav', 'sex', 2);
      }
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['pickup'] = 'street'
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
        scene.text('A man approaches, smiling confidently at you.');
        scene.text('"Damn, baby, on a scale from 1 to 10, you\'re an 11. How about a date?"');
        scene.actions([
          { label: 'Excuse me?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: "Yeah, you heard me." said <<$npc_firstname[$boy]>>. "Don''t act all that surpri...
    scene.text(`"Yeah, you heard me." said ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}. "Don't act all that surprised, you're good-looking, I'm good-looking we would be the perfect couple, so what do you say?"`);
    scene.text('"Isn\'t someone full of confidence," you comment, seizing control of the conversation, as you contemplate your next move…');
    scene.actions([
      { label: 'Remain silent', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"Come on, gorgeous, don\'t give me the silent treatment."');
    scene.text('As you hear the word gorgeous you melt straight away. You blush and mumble thanks, stammering like a buffoon.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> noticing that you''re having some trouble, smiles and t...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} noticing that you're having some trouble, smiles and tells you, "I'll ask you one more time, I don't want to come off as desperate." he says laughing.`);
    scene.text('"Someone not desperate would have introduced themselves first and told me their name first. I don\'t want to talk to a complete stranger."');
    // TODO-QSP: dynamic text: "<<$npc_firstname[$boy]>>! And yours?" he asks you confidently, seeing a glimmer...
    scene.text(`"${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}! And yours?" he asks you confidently, seeing a glimmer of hope.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>." you answer.
    scene.text(`"${((st as any).pcs_nickname ?? '')}." you answer.`);
    // TODO-QSP: dynamic text: "Just as I expected a beautiful name for a beautiful girl…" <<$npc_firstname[$bo...
    scene.text(`"Just as I expected a beautiful name for a beautiful girl…" ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} quickly replies.`);
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry but I don\'t feel myself attracted to you enough and I don\'t want to lead you on."');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you disappointed. "Oh well, I didn''t think I ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you disappointed. "Oh well, I didn't think I had a chance but you can't blame me for trying."`);
    scene.text('The two of you say goodbye to each other.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Look at him in disgust', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, it\'s good that you have all this confidence, but I\'m way out of your league. There\'s no way I would be caught seen out with you."');
    scene.text('"What did you say, you little…" you\'re not able to hear the rest as you walk away…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Agree to a date', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"Stop, you\'re making me blush again. Sure, sounds like fun, I would love to."');
    // TODO-QSP: dynamic text: "Great!" answers <<$npc_firstname[$boy]>> "So, what do you want to do gorgeous?"...
    scene.text(`"Great!" answers ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} "So, what do you want to do gorgeous?".`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateChoice(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I would love to but can\'t right now', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"I\'m sorry, I would love to go on a date with you but I\'m busy right. What if I give you my number so you can call me?"');
    // TODO-QSP: dynamic text: "I say that''s a great idea. I''ll be in touch." <<$npc_firstname[$boy]>> adds y...
    scene.text(`"I say that's a great idea. I'll be in touch." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} adds your number to his contact list.`);
    scene.text('"You better be." you say teasingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'How about we fuck?', handler: (st: GameState) => {
    scene.img(`${((st as any).npc_pic ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}`);
    scene.text('"How about a fuck for the road instead?"');
    scene.text('"Excuse me?" It\'s his turn to look surprised now.');
    scene.text('"You, me, your place, we have sex right now. How about it?"');
    scene.text('"Fuck yeah," he grins. You let him grab you by the arm and tow you off towards a nearby apartment complex.');
    if (((st as any).region ?? 0) === 'city_center'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city'  ||  ((st as any).region ?? 0) === 'city_island'  ||  ((st as any).region ?? 0) === 'city_lake'  ||  ((st as any).region ?? 0) === 'city_park') {
      qspCall(st, 'fame', 'city', 'sex', 2);
    } else {
      if (((st as any).region ?? 0) === 'pav'  ||  ((st as any).region ?? 0) === 'pav_park'  ||  ((st as any).region ?? 0) === 'pav') {
        qspCall(st, 'fame', 'pav', 'sex', 2);
      }
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['pickup'] = 'street'
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
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
    { label: 'Ignore him and hurry away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDecline(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
  scene.text('"I\'m sorry but I don\'t feel us clicking so I\'ll have to decline."');
  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you disappointed then shrugs. "Well can''t bla...
  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} looks at you disappointed then shrugs. "Well can't blame a guy for trying right."`);
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
      { label: '"Let\'s go to the park." (old content)', goto: ['dateM', 'datepark'] },
    ]);
  }
  if (((s as any).loc ?? 0) === 'pav_residential'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_center') {
    scene.actions([
      { label: '"Let\'s go to the movie theater." (old content)', goto: ['dateM', 'datecinema'] },
      { label: '"Let\'s go to the movie theater." (new content)', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    qspGoto(st, 'date_ev', ((st as any).initiate_pre ?? ''), ((st as any).npcID ?? ''), 'movie_date');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"Let\'s go to a cafe" (old content)', goto: ['dateM', 'datecafe'] },
    { label: '"Let\'s go to a cafe" (new content)', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).npcID ?? 0));
    qspGoto(st, 'date_ev', ((st as any).initiate_pre ?? ''), ((st as any).npcID ?? ''), 'casual_meal');
  } },
    { label: '"Let\'s go to a bar." (old content)', goto: ['dateM', 'datebar'] },
  ]);
  scene.build();
}

function enterDatepark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/walk_' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
  scene.text('"Since it\'s such a beautiful day today, let\'s go for a walk in the park." you suggest.');
  // TODO-QSP: dynamic text: "Sounds great. Lets go." <<$npc_firstname[$boy]>> walks with you towards the par...
  scene.text(`"Sounds great. Lets go." ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} walks with you towards the park.`);
  scene.text('The two of you walk in the park for a while causally talking, getting knowing each other. After a while he suggests sitting down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch people', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkwatch.jpg');
    // TODO-QSP: dynamic text: The two of you sit down and begin commenting on the people walking by. You laugh...
    scene.text(`The two of you sit down and begin commenting on the people walking by. You laugh while ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} makes up stories about their backgrounds and quirks.`);
    // TODO-QSP: dynamic text: There are a few times you almost get caught as you point and laugh. As you''re s...
    scene.text(`There are a few times you almost get caught as you point and laugh. As you're sitting down an ice cream pushcart appears, generating quite a buzz around it. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} asks you, "I sure could go for some ice cream. Would you also like some ice cream?"`);
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkice.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> runs away to the pushcart and comes back with two ice c...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} runs away to the pushcart and comes back with two ice creams. "Here you go, ${((st as any).pcs_nickname ?? '')} I hope you'll enjoy it."`);
    // TODO-QSP: dynamic text: You nod and thank him. The two of you continue talking while eating the ice crea...
    scene.text(`You nod and thank him. The two of you continue talking while eating the ice cream. As you finish ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} asks, "Shall we move on?"`);
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkholding.jpg');
    scene.text('As you continue walking the two of you begin holding hands. You\'re really enjoying yourself by now everything is going really well.');
    // TODO-QSP: dynamic text: You don''t even notice that the two of you strayed off the beaten path, all of a...
    scene.text(`You don't even notice that the two of you strayed off the beaten path, all of a sudden ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} stops and whispers in your ear, "Now that we're at a secluded spot, you know what would make this date even better?"`);
    scene.actions([
      { label: 'What?', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parklean.jpg');
    // TODO-QSP: dynamic text: Before you''re even able to respond <<$npc_firstname[$boy]>> leans in and kisses...
    scene.text(`Before you're even able to respond ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} leans in and kisses you on the lips.`);
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parkmake.jpg');
    // TODO-QSP: dynamic text: Feeling frisky you kiss <<$npc_firstname[$boy]>> back. Not before long the two o...
    scene.text(`Feeling frisky you kiss ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} back. Not before long the two of you are having a make out session, french kissing each other.`);
    scene.text('You feel yourself getting more and more aroused, maybe you should stop before the situation escalates too much…');
    qspCall(st, 'arousal', 'kiss', 3, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkback.jpg');
    scene.text('You put your hand on his chest and push him away from you. "No, we need to stop." At first he keeps trying to kiss you but you push on him a bit harder and pull back as you do. "I said no!"');
    scene.text('He stops at once. "Sorry got a little carried away."');
    scene.actions([
      { label: 'Walk back', goto: ['dateM', 'walk_back'] },
    ]);
  } },
      { label: 'Who cares', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parkkiss.jpg');
    scene.text('You decide to ignore the little voice in your back head and continue on the make out session.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> pulls you in closer and slowly begins rubbing your wet ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} pulls you in closer and slowly begins rubbing your wet slit through your clothes. You let out a soft whimper as he's touching you.`);
    qspCall(st, 'arousal', 'kiss', 4, 'exhibitionism');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: As you''re pressed against <<$npc_firstname[$boy]>> you feel his bulge through h...
    scene.text(`As you're pressed against ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} you feel his bulge through his pants. The two of you quickly remove your clothes, playing with each other's sensitive parts.`);
    scene.actions([
      { label: 'On your knees', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parkhj.jpg');
    scene.text('You give him a lustful smirk and get down on your knees. You quickly unbutton his pants and let his semi-grown cock hang loose.');
    scene.text('Looking at it you say, "Let me help you get ready for what\'s to come." as you grab it with your hand and start jerking him off.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> lets out a groan and you feel his cock growing bigger a...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} lets out a groan and you feel his cock growing bigger and bigger. After a minute or so his cock is pulsating and you're ready to move on.`);
    // TODO-QSP: dynamic text: You keep teasing him on as you lick his penis head and penis shaft. <<$npc_first...
    scene.text(`You keep teasing him on as you lick his penis head and penis shaft. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}'s cock twitches as you keep licking him.`);
    qspCall(st, 'arousal', 'hj', 4, 'exhibitionism');
    qspCall(st, 'arousal', 'bj', 4, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give blowjob', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parkbj.jpg');
    // TODO-QSP: dynamic text: "Enough teasing, I want you to blow me <<$pcs_nickname>>, I don''t want to cum b...
    scene.text(`"Enough teasing, I want you to blow me ${((st as any).pcs_nickname ?? '')}, I don't want to cum before you've had a taste of my cock."`);
    scene.text('You comply and start sucking on the head, smacking loudly. You are working calmly and methodically for some minutes and in the end you\'re able to fit him into your mouth entirely.');
    qspCall(st, 'arousal', 'bj', 6, 'exhibitionism');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, you''re really a good little cocksucker. How about you...
    scene.text(`"Damn, ${((st as any).pcs_nickname ?? '')}, you're really a good little cocksucker. How about you get on all fours so I can enjoy that little pussy of yours?"`);
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/parkdoggy.jpg');
    // TODO-QSP: dynamic text: You''re already wet and ready for him as you spread your legs as he bends down. ...
    scene.text(`You're already wet and ready for him as you spread your legs as he bends down. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} slowly runs his shaft along your wet pussy teasing you right back as a payback for before.`);
    // TODO-QSP: dynamic text: You let out a sigh as he slowly enters you. Holding your waist, <<$npc_firstname...
    scene.text(`You let out a sigh as he slowly enters you. Holding your waist, ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} slowly increases his pace. It doesn't take long for him to be at full pace. You feel great as his strong member alternately fills and pleasantly stretches your pussy.`);
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Suddenly, ' + ((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] + ' pounds you at just the right pace and your whole body starts to shiver in orgasm. The intensity of the orgasm nearly makes you scream, but you bite down on your lip and do your best to stifle down the moans so no one hears you.';
    qspCall(st, 'arousal', 'vaginal', 6, 'exhibitionism');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: Even <<$npc_firstname[$boy]>> is groaning and grimacing badly by now ready to cu...
    scene.text(`Even ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is groaning and grimacing badly by now ready to cum.`);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'cum_call', 'labia', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkfinish.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> can''t contain himself anymore, he''s loudly groaning a...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} can't contain himself anymore, he's loudly groaning and as soon he pulls out of you he cums coating your pussy lips.`);
    scene.text('Both of you fall down to the ground, breathing heavily, trying to come to your senses. After a while you into his eyes and start laughing.');
    // TODO-QSP: dynamic text: "That was great <<$pcs_nickname>>. We''ll have to do this again." You get up and...
    scene.text(`"That was great ${((st as any).pcs_nickname ?? '')}. We'll have to do this again." You get up and clean yourself, straightening out your clothes the best you can. "Shall we head back?" you ask.`);
    scene.actions([
      { label: 'Walk back', goto: ['dateM', 'walk_back'] },
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
      { label: 'Back up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/parkback.jpg');
    scene.text('At first you are surprised by the kiss and return it but quickly you pull back as you push him away. "Stop, I\'m enjoying the date but I\'m not that kind of girl if you thought otherwise."');
    // TODO-QSP: dynamic text: He shakes his head. "No, not at all. I''m not going to make you do something you...
    scene.text(`He shakes his head. "No, not at all. I'm not going to make you do something you don't want." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} answers.`);
    scene.actions([
      { label: 'Walk back', goto: ['dateM', 'walk_back'] },
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
  scene.img('images/locations/shared/date/parkholding.jpg');
  scene.text('As you finish up the two still holding hands walk all the way back to the park entrance. You stand there for a while feeling that awkward silence creeping up as neither of you know how to end the date.');
  // TODO-QSP: dynamic text: "I''ve had a great time." you say smiling. "Yeah, me too…" <<$npc_firstname[$boy...
  scene.text(`"I've had a great time." you say smiling. "Yeah, me too…" ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} says quietly. "Could I get your number so I can call you?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img('images/locations/shared/date/givenumber.jpg');
    // TODO-QSP: dynamic text: You give <<$npc_firstname[$boy]>> your number. "Now I really hope you don''t for...
    scene.text(`You give ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} your number. "Now I really hope you don't forget to call me." you tell him. "Oh, don't worry about that I'll be in touch." he says.`);
    scene.text('You end the date by him giving you a kiss on the cheek.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Sorry', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/datereject.jpg');
    scene.text('"I\'ve really enjoyed the date but I\'m sorry I can\'t give you my number…"');
    scene.text('"But why, I thought…" Before he continues you stop him telling him that you\'re sorry once again but that it won\'t work out between the two of you.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> disappointingly looks at you, "Well at least I gave it ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDatecinema(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/theater/kinoteatr.jpg');
  // TODO-QSP: dynamic text: "How about we go and see a movie?" you ask <<$npc_firstname[$boy]>>
  scene.text(`"How about we go and see a movie?" you ask ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
  scene.text('"Sounds like a great idea. There\'s a movie theater nearby."');
  scene.text('You arrive at the movie theater and look at the display showing what movies are playing right now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Decide on a movie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/cinema.jpg');
    // TODO-QSP: dynamic text: "How about this one?" <<$npc_firstname[$boy]>> points at a movie.
    scene.text(`"How about this one?" ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} points at a movie.`);
    scene.text('You shake your head, "No, I\'m not in the mood for that. How about this one?" you point at a comedy.');
    scene.text('"Perfect, I love comedies." he comments.');
    scene.actions([
      { label: 'Buy tickets', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/cinema/theaterbuy.jpg');
    // TODO-QSP: dynamic text: You and <<$npc_firstname[$boy]>> stand in line waiting to approach the box offic...
    scene.text(`You and ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} stand in line waiting to approach the box office.`);
    // TODO-QSP: dynamic text: As you''ve bought the tickets, <<$npc_firstname[$boy]>> asks, "Would you like so...
    scene.text(`As you've bought the tickets, ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} asks, "Would you like something from the concession stand?"`);
    scene.text('"Yeah, I would love some popcorn!" you answer excitingly.');
    scene.text('He smiles and walks over to the concession stand, returning with a big popcorn tub, handing it over to you.');
    scene.text('You shine up immediately, thanking him for buying it for you.');
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/cinema/kino_' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    scene.text('"The movies is about to start. How about we make our way in?" he asks.');
    scene.text('You nod and the two of you make your way inside the theater. You find your seats, making yourselves comfortable.');
    scene.text('The movies starts off in a frantic pace containing many slapstick scenes. You\'re having a great time, laughing almost all the time.');
    scene.actions([
      { label: 'Eat some popcorn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/locations/shared/cinema/kino_' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    // TODO-QSP: dynamic text: As you''re about to grab some popcorn from the tub, <<$npc_firstname[$boy]>> unk...
    scene.text(`As you're about to grab some popcorn from the tub, ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} unknowingly goes to grab some popcorn too, touching your hand.`);
    scene.text('He\'s startled as he didn\'t expect your hand to be there either. You acknowledge his touch by teasingly whispering, "Are you trying to make a move on me?"');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> nervously smiles at you. "Sorry it wasn''t my intention...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} nervously smiles at you. "Sorry it wasn't my intentions to make you feel uncomfortable."`);
    qspCall(st, 'willpower', 'exhib', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/theatertease.jpg');
    scene.text('Feeling frisky and not wanting to let go of the opportunity you tell him, "Come on, no need to get so defensive. Let me show you a thing."');
    // TODO-QSP: dynamic text: You look around checking if everyone else is concentrating on the movie and then...
    scene.text(`You look around checking if everyone else is concentrating on the movie and then quickly remove your top. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} not knowing how to respond looks in awe. Not wanting to wait on him anymore you decide to take action.`);
    scene.text('"Let me show you a great time." you slyly tell him. "Just relax and enjoy yourself."');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/theaterbj.jpg');
    // TODO-QSP: dynamic text: You go down on your knees removing your shirt and bra showing your body to <<$np...
    scene.text(`You go down on your knees removing your shirt and bra showing your body to ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}. You begin playing with his rock-hard penis through the pants.`);
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you with lust. His eyes are quite revealing, h...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you with lust. His eyes are quite revealing, he wants you to please him with your mouth and he wants it now.`);
    // TODO-QSP: dynamic text: You unbutton his pants and pull down his briefs. The rock-hard cock pops out whi...
    scene.text(`You unbutton his pants and pull down his briefs. The rock-hard cock pops out while you look at ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} smiling. "Keep quiet now we don't want to get caught."`);
    // TODO-QSP: dynamic text: You grab <<$npc_firstname[$boy]>> by the shaft and your lips embrace the top of ...
    scene.text(`You grab ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} by the shaft and your lips embrace the top of his cock. After a while you pick up the pace moving the head up and down while ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is trying his best to keep quiet.`);
    qspCall(st, 'arousal', 'bj', 5, 'dom', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lay down on the seat', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/theatercuni.jpg');
    scene.text('After a few minutes you stop and get up, lean into him telling him that it\'s his turn to impress you.');
    // TODO-QSP: dynamic text: You lay down on the empty seats next to you and spread your legs. <<$npc_firstna...
    scene.text(`You lay down on the empty seats next to you and spread your legs. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} by now very aroused dives in and begins playing with your wet clit.`);
    scene.text('His tongue does wonders to your clit and there are a few times you can\'t contain yourself just wanting to scream out loud in pleasure.');
    qspCall(st, 'arousal', 'cuni', 5, 'dom', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Reverse cowgirl', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/theatercow.jpg');
    scene.text('He stops to let you rest just as you\'re nearing the orgasm, feeling irritated you decide to get even.');
    // TODO-QSP: dynamic text: You make <<$npc_firstname[$boy]>> sit down again and plant yourself on top of hi...
    scene.text(`You make ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} sit down again and plant yourself on top of his cock, letting out a quiet whimper as you don't want the guy in front of you to find out what the two of you are doing.`);
    // TODO-QSP: dynamic text: As you control the pace you switch it up multiple times bouncing up and down as ...
    scene.text(`As you control the pace you switch it up multiple times bouncing up and down as you see this as a payback for not letting you orgasm before. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is clearly having some trouble holding himself as his cock is growing inside you.`);
    qspCall(st, 'arousal', 'vaginal', 5, 'dom', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Back to laying down', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0));
    qspCall(st, 'cum_call', 'breasts', ((st as any).boy ?? 0));
    scene.img('images/locations/shared/date/theatervag.jpg');
    // TODO-QSP: dynamic text: By now <<$npc_firstname[$boy]>> is almost drained and the smallest touch would m...
    scene.text(`By now ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is almost drained and the smallest touch would make him cum. You decide to give him a breather as you once again lay down spreading your legs once again while your pussy juice drips all over the seat.`);
    // TODO-QSP: dynamic text: As soon as <<$npc_firstname[$boy]>> enters you he''s already heavily panting. Yo...
    scene.text(`As soon as ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} enters you he's already heavily panting. You whisper angrily to him "Don't you dare cum yet. I'm still not pleased." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} does his best and keeps thrusting for a minute or two not being able to hold on anymore.`);
    qspCall(st, 'arousal', 'vaginal', 5, 'dom', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.text('He starts groaning pulling out his cock out of you and shoots the load all over you. His warm spunk hits your stomach and breast as he jerks out the last drips. You take your finger and swipe a small sample off your stomach putting it in your mouth. It tastes great.');
    scene.actions([
      { label: 'Caught', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/theatercaught.jpg');
    // TODO-QSP: dynamic text: While the two of you are returning to your senses all of a sudden someone flashe...
    scene.text(`While the two of you are returning to your senses all of a sudden someone flashes a light at you. It's the usher… You're totally caught as you're still laying down naked with ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} cum splattered all over you.`);
    // TODO-QSP: dynamic text: "What the hell are you two doing!" the usher yells. The guy that sat in front of...
    scene.text(`"What the hell are you two doing!" the usher yells. The guy that sat in front of you stands up noticing you laying naked quickly picks up the phone and tries taking some pictures. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} pulls up his pants and gets dressed, leaving you all naked to fend for yourself.`);
    scene.text('"Kids these days. It\'s the third time I catch couples doing this shit this week. Pick up your stuff and get the hell out of here, you\'re lucky I don\'t have the time to call the cops."');
    // TODO-QSP: dynamic text: You''re blemishing red as you quickly get dressed, grabbing your stuff, running ...
    scene.text(`You're blemishing red as you quickly get dressed, grabbing your stuff, running out of the theater. You can hear some of the other people commenting on the situation as you walk past them. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is walking besides you and also has his head down looking at the ground as ashamed as you.`);
    scene.actions([
      { label: 'Outside', handler: (st: GameState) => {
    (st as any).location_type = 'public_outdoors';
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/kinoteatr.jpg');
    // TODO-QSP: dynamic text: "Wow, that''s never happened to me before." <<$npc_firstname[$boy]>> tells you.
    scene.text(`"Wow, that's never happened to me before." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} tells you.`);
    scene.text('"I only regret us getting caught. If we\'ve only been able to keep quiet. Nothing do anything about that now." you say smiling.');
    scene.text('"I guess I should ask for your for your number now that we\'ve got to know each other really well?"');
    scene.actions([
      { label: 'Sure', goto: ['dateM', 'cinema_sure'] },
      { label: 'Sorry', goto: ['dateM', 'cinema_sorry'] },
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
    scene.actions([
      { label: 'Keep watching the movie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/cinema/kino_' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    // TODO-QSP: dynamic text: After a while <<$npc_firstname[$boy]>> leans towards you and whispers if you''re...
    scene.text(`After a while ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} leans towards you and whispers if you're enjoying yourself.`);
    scene.text('You turn to him nodding, as you\'re nodding he leans in once again and gives you a kiss. The two of you hold hands for the rest of the movie.');
    scene.actions([
      { label: 'Outside', handler: (st: GameState) => {
    (st as any).location_type = 'public_outdoors';
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/kinoteatr.jpg');
    // TODO-QSP: dynamic text: The movie finishes and the lights get turned on. You and <<$npc_firstname[$boy]>...
    scene.text(`The movie finishes and the lights get turned on. You and ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} walk outside where you talk about how funny the movie was.`);
    scene.text('"I enjoyed the kissing part more." you say to him. He blushes a bit as you compliment him.');
    scene.text('"Glad to hear that. I guess then I\'m not coming on to strong asking you for your number?"');
    scene.actions([
      { label: 'Sure', goto: ['dateM', 'cinema_sure'] },
      { label: 'Sorry', goto: ['dateM', 'cinema_sorry'] },
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

function enterCinemaSure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_boyfriend', ((s as any).boy ?? 0));
  scene.img('images/locations/shared/date/givenumber.jpg');
  // TODO-QSP: dynamic text: You give <<$npc_firstname[$boy]>> your number. "Now I really hope you don''t for...
  scene.text(`You give ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} your number. "Now I really hope you don't forget to call me." you tell him. "Oh, don't worry about that I'll be in touch." he says.`);
  scene.text('You end the date by him giving you a kiss on the cheek.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCinemaSorry(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/date/datereject.jpg');
  scene.text('"I\'ve really enjoyed the date but I\'m sorry I can\'t give you my number…"');
  scene.text('"But why, I thought…" Before he continues you stop him telling him that you\'re sorry once again but that it won\'t work out between the two of you.');
  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> disappointingly looks at you, "Well at least I gave it ...
  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDatecafe(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/cafe.jpg');
  // TODO-QSP: dynamic text: "How about a coffee?" you ask <<$npc_firstname[$boy]>>.
  scene.text(`"How about a coffee?" you ask ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}.`);
  // TODO-QSP: dynamic text: "Great idea <<$pcs_nickname>> I know a great place."
  scene.text(`"Great idea ${((s as any).pcs_nickname ?? '')} I know a great place."`);
  scene.text('The two of you enter the café and find a secluded spot where you can be left alone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Interact', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/cafetalk.jpg');
    // TODO-QSP: dynamic text: "This is a nice spot. So tell me about yourself <<$pcs_nickname>>?" <<$npc_first...
    scene.text(`"This is a nice spot. So tell me about yourself ${((st as any).pcs_nickname ?? '')}?" ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} asks as soon as you sit down.`);
    // TODO-QSP: dynamic text: You tell him a little about your family, where you''re from and the likes. All w...
    scene.text(`You tell him a little about your family, where you're from and the likes. All while ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} carefully listens to your every word just like he's analyzing you in his head.`);
    scene.text('The conversation takes a deeper meaning as he keeps probing you with more serious questions about you.');
    scene.actions([
      { label: 'Order', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/cafewaitress.jpg');
    scene.text('As you prepare yourself to answer another one of his questions the waitress comes over, asking nervously if you\'re ready to order. "Poor girl…" you think "she\'s probably just started working here."');
    // TODO-QSP: dynamic text: She scribbles down your order, as she re-reads the order, she manages to stammer...
    scene.text(`She scribbles down your order, as she re-reads the order, she manages to stammer through your order but when it comes to ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} she messes up.`);
    // TODO-QSP: dynamic text: "What is wrong with you? Can''t you write down a simple order?" <<$npc_firstname...
    scene.text(`"What is wrong with you? Can't you write down a simple order?" ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} reacts.`);
    scene.text('You sit there looking in shock wondering what you should do…');
    qspCall(st, 'willpower', 'misc', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/cafereact.jpg');
    scene.text('The poor waitress returns after a while with your order. You look at her with an apologetic look.');
    // TODO-QSP: dynamic text: "Hope everything is in order." <<$npc_firstname[$boy]>> says. Feeling a bit irri...
    scene.text(`"Hope everything is in order." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} says. Feeling a bit irritated you kick him under the table, while thanking her.`);
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you in despair, "What? Did I do anything wrong...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you in despair, "What? Did I do anything wrong?"`);
    scene.text('"Well, first off, you don\'t need to be a jerk to the waitress." you angrily tell him.');
    scene.text('"I\'m sorry but I\'m just really nervous being on a date with you so I acted out." You can see that he\'s remorseful but you still don\'t want to carry on a conversation with him.');
    scene.actions([
      { label: 'Continue date', goto: ['dateM', 'cafepeople'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/locations/shared/date/cafetelloff.jpg');
    // TODO-QSP: dynamic text: Not liking the way <<$npc_firstname[$boy]>> treated the waitress you go on the a...
    scene.text(`Not liking the way ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} treated the waitress you go on the attack against ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}. You're appalled by how he behaves. With such poor first-impression you decide you don't ever want to see this bottom-feeder again.`);
    scene.text('"You should really learn some manners. To treat a human being like that is despicable. You should be ashamed of yourself."');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at you in fear as he wasn''t expecting you to rea...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you in fear as he wasn't expecting you to react like that.`);
    scene.text('"Nothing to say? No need to, I\'m done. Enjoy the date alone you loser." You quickly get up and walk out of the café.');
    scene.actions([
      { label: 'Rush out', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep quiet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/cafequiet.jpg');
    scene.text('The poor waitress returns after a while with your order. You look at her with an apologetic look.');
    // TODO-QSP: dynamic text: "Hope everything is in order." <<$npc_firstname[$boy]>> says. You''re not confid...
    scene.text(`"Hope everything is in order." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} says. You're not confident enough commenting on how an unknown person is behaving so you keep your mouth shut.`);
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> looks at with confidence, "What? She had it coming. I g...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at with confidence, "What? She had it coming. I get irritated by weak people."`);
    scene.text('You nod in agreement not wanting egging him on.');
    scene.actions([
      { label: 'Continue date', goto: ['dateM', 'cafepeople'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/cafemad.jpg');
    scene.text('"Yeah, I can\'t believe this place hired someone this bad."');
    scene.text('The waitress returns after a while with your order. You look at her angrily.');
    // TODO-QSP: dynamic text: "Hope everything is in order." <<$npc_firstname[$boy]>> says. "Yeah, it would be...
    scene.text(`"Hope everything is in order." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} says. "Yeah, it would be a shame if we needed to talk with the manager." you sourly tell her.`);
    // TODO-QSP: dynamic text: The waitress asks for forgiveness once again before going away. <<$npc_firstname...
    scene.text(`The waitress asks for forgiveness once again before going away. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} looks at you impressed, "I must say, the way you handled her was perfect. I'm getting so turned on."`);
    scene.text('"Thanks, one should not be accepting bad service no matter who you are."');
    scene.actions([
      { label: 'Continue date', goto: ['dateM', 'cafepeople'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCafepeople(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/cafewatching.jpg');
  // TODO-QSP: dynamic text: The two of you sit there awkwardly in silence for a while when all of a sudden b...
  scene.text(`The two of you sit there awkwardly in silence for a while when all of a sudden both of you react to a man sitting a bit further away. You begin laughing while ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} makes up stories about his background and quirks.`);
  scene.text('There are a few times you almost get caught by the man as you point and laugh.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish the date', goto: ['dateM', 'cafeend'] },
  ]);
  scene.build();
}

function enterCafeend(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/cafefinish.jpg');
  // TODO-QSP: dynamic text: After a while you end observing the man and tell <<$npc_firstname[$boy]>>, "Well...
  scene.text(`After a while you end observing the man and tell ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}, "Well, thanks for the coffee but I should be on my way."`);
  // TODO-QSP: dynamic text: "I had a great time, you''re really fun to hang out with." <<$npc_firstname[$boy...
  scene.text(`"I had a great time, you're really fun to hang out with." ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} tells you. "Could I get your number?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img('images/locations/shared/date/givenumber.jpg');
    // TODO-QSP: dynamic text: You give <<$npc_firstname[$boy]>> your number. "Now I really hope you don''t for...
    scene.text(`You give ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} your number. "Now I really hope you don't forget to call me." you tell him. "Oh, don't worry about that I'll be in touch." he says.`);
    scene.text('You end the date by him giving you a kiss on the cheek.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Sorry', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/datereject.jpg');
    scene.text('"I\'ve really enjoyed the date but I\'m not impressed by your first-impression, you were too harsh to that waitress…"');
    scene.text('"But why, I thought…" Before he continues you stop him telling him that you\'re sorry once again but that it won\'t work out between the two of you.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> disappointingly looks at you, "Well at least I gave it ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
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
  // TODO-QSP: dynamic text: "How about going to a bar?" you ask <<$npc_firstname[$boy]>>.
  scene.text(`"How about going to a bar?" you ask ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}.`);
  // TODO-QSP: dynamic text: "Great idea <<$pcs_nickname>> I know a great bar with great drinks and lightning...
  scene.text(`"Great idea ${((s as any).pcs_nickname ?? '')} I know a great bar with great drinks and lightning."`);
  scene.text('The two of you enter this buzzing hip bar and find a spot where you have a great overview over the place.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Order', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/bardrink1.jpg');
    // TODO-QSP: dynamic text: As you sit down <<$npc_firstname[$boy]>> asks you, "Would you like to drink some...
    scene.text(`As you sit down ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} asks you, "Would you like to drink something?"`);
    scene.actions([
      { label: 'I\'ll have a beer, thanks', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    scene.img('images/locations/shared/date/barorder_' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    // TODO-QSP: dynamic text: "My kind of girl." <<$npc_firstname[$boy]>> tells you.
    scene.text(`"My kind of girl." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} tells you.`);
    scene.actions([
      { label: 'Talk', goto: ['dateM', 'bartalk'] },
    ]);
  } },
      { label: 'I\'ll have some hard liquor, thanks', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    scene.img('images/locations/shared/date/barorder_' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    // TODO-QSP: dynamic text: "My kind of girl." <<$npc_firstname[$boy]>> tells you.
    scene.text(`"My kind of girl." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} tells you.`);
    scene.actions([
      { label: 'Talk', goto: ['dateM', 'bartalk'] },
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
  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> goes to the bar counter and after a while returns with ...
  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} goes to the bar counter and after a while returns with the drinks.`);
  // TODO-QSP: dynamic text: "This place is packed." you say to <<$npc_firstname[$boy]>>
  scene.text(`"This place is packed." you say to ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}`);
  scene.text('"Yeah, it\'s pretty cool, I think it\'s the night when there is a band playing live here, so I guess that\'s why it\'s so packed."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue on', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/barband.jpg');
    scene.text('As you sit there talking to each other, the lights suddenly go dim and you hear a guitar riff playing.');
    // TODO-QSP: dynamic text: The band steps out and starts playing. You''re amazed over how well they play an...
    scene.text(`The band steps out and starts playing. You're amazed over how well they play and turn to ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} "They are pretty good don't you think?"`);
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> nods his head. "Yeah they are, do you want another drin...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} nods his head. "Yeah they are, do you want another drink?"`);
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/bardiscuss.jpg');
    scene.text('"Are you trying to get me drunk?" you say winking towards him.');
    scene.text('"No comments." he responds smiling.');
    // TODO-QSP: dynamic text: "Well, I''m having a great time so why not." <<$npc_firstname[$boy]>> goes over ...
    scene.text(`"Well, I'm having a great time so why not." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} goes over to the counter and returns with two new drinks.`);
    if (((st as any).pcs_danc ?? 0) > 30) {
      scene.actions([
        { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/bardancing.jpg');
    scene.text('Some time goes by and you\'re not able to contain yourself anymore, you got to dance.');
    // TODO-QSP: dynamic text: "Would you like to dance?" you ask <<$npc_firstname[$boy]>>.
    scene.text(`"Would you like to dance?" you ask ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}.`);
    scene.text('He shakes his head. "I am no dancer, but you should if you want to dance." He says indicating you should get out on the dance floor yourself.');
    // TODO-QSP: dynamic text: You get up from the chair and walk up near the stage and begin moving sensually,...
    scene.text(`You get up from the chair and walk up near the stage and begin moving sensually, teasing ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''}.`);
    scene.actions([
      { label: 'Return to your date', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/bardrink.jpg');
    // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>> you really know how to move. I bet all that dancing made...
    scene.text(`"Damn ${((st as any).pcs_nickname ?? '')} you really know how to move. I bet all that dancing made you even thirstier."`);
    scene.text('You nod and he quickly gets up and gets more drinks.');
    scene.text('You chug the drink down, quenching some of the thirst. "Look at you go. I love a girl that can keep a drink down."');
    scene.text('By now you\'re feeling quite tipsy and feeling your inhibitions fading away. You panic a little at the feeling and feel you must get a breather before you lose control.');
    scene.actions([
      { label: 'Excuse yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/barrestroom.jpg');
    scene.text('You excuse yourself by saying you need to visit the restroom. You walk off and lock the door behind you, looking in the mirror as everything begins to spin.');
    scene.text('You don\'t know how long you\'ve been in the restroom but all of a sudden you hear a knock on the door, "Are you alright? You\'ve been in there for a while now."');
    // TODO-QSP: dynamic text: Recognizing <<$npc_firstname[$boy]>> voice, you come to your senses and open the...
    scene.text(`Recognizing ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} voice, you come to your senses and open the door, quickly pulling him in.`);
    scene.text('"What\'s happening?" he asks as you lean into him and begin kissing him.');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/barmakeout.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn''t seem to mind your brashness. He begins grabbin...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} doesn't seem to mind your brashness. He begins grabbing you all over your body, adding even more to your arousal.`);
    scene.text('As you\'re kissing you feel his fingers playing with your wet clit through the panties.');
    // TODO-QSP: dynamic text: "Get down on your knees <<$pcs_nickname>>."
    scene.text(`"Get down on your knees ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decide to stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decide to stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/shared/date/barinside.jpg');
    scene.text('You can\'t get yourself to go through this. Excusing yourself you walk back to the table and sit down.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> arrives shortly after you to the table. The whole situa...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} arrives shortly after you to the table. The whole situation is too awkward now and you begin to blush as you're really ashamed of your actions. You're starting to panic a bit…`);
    scene.actions([
      { label: 'Finish the date', goto: ['dateM', 'barend'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/barbj.jpg');
    scene.text('You\'re too aroused to do anything else. You quickly drop down on your knees, grabbing hold of his pants, ripping them open.');
    scene.text('His erect penis pops out and you can clearly see some pre-cum around the foreskin.');
    // TODO-QSP: dynamic text: You devour his flaccid penis with your mouth, swallowing it whole with ease. <<$...
    scene.text(`You devour his flaccid penis with your mouth, swallowing it whole with ease. ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is all warmed up, his cock is twitching and he's right at the edge as you stop, "Oh, no we're not done yet."`);
    qspCall(st, 'arousal', 'bj', 3, 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/barfuck.jpg');
    // TODO-QSP: dynamic text: You tell him to rest for a moment while you get ready. You pull down your pantie...
    scene.text(`You tell him to rest for a moment while you get ready. You pull down your panties exposing your wet cunt, you play with yourself as ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} catches his breath. "That's enough rest." you tell him.`);
    scene.text('You have him stand behind you as you grab hold of the sink. "Come on, fuck me good." you tell him.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> grabs his cock and enters you. You moan as he begins th...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} grabs his cock and enters you. You moan as he begins thrusting. You feel your pussy walls getting stretched and it's a great feeling. He's picking up the pace and you feel his cock twitching once again.`);
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Even though he\'s edging ' + ((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] + ' doesn\'t slow down. He keeps on fucking you balls deep and you can\'t hold on anymore. You begin loudly moaning, your pussy tensing with you orgasming all over his cock.';
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: It doesn''t take long before <<$npc_firstname[$boy]>> is panting heavily and jus...
    scene.text(`It doesn't take long before ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} is panting heavily and just as you're about to say not to cum inside you, you feel a warm stream shoot up deep inside of you.`);
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/locations/shared/date/barcream.jpg');
    scene.text('Your knees are still shaking as he finishes, you don\'t even care that he has cum inside of you. You grab some toilet paper and begin wiping the cum dripping out of your pussy.');
    // TODO-QSP: dynamic text: "That was great <<$pcs_nickname>>." <<$npc_firstname[$boy]>> compliments you. "Y...
    scene.text(`"That was great ${((st as any).pcs_nickname ?? '')}." ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} compliments you. "You were not bad yourself" you tell him.`);
    scene.actions([
      { label: 'Finish the date', goto: ['dateM', 'barend'] },
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
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/date/bardiscuss_' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
    // TODO-QSP: dynamic text: You and <<$npc_firstname[$boy]>> continue talking even if it''s hard to hear wha...
    scene.text(`You and ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} continue talking even if it's hard to hear what he says at some times because of the loud music.`);
    scene.text('Mostly you talk about yours and his backgrounds and future plans.');
    scene.text('You\'re so into the conversation that you don\'t even notice that the band left and that the bar is half empty.');
    scene.actions([
      { label: 'Finish the date', goto: ['dateM', 'barend'] },
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
  scene.img('images/locations/shared/date/bardiscuss_' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  // TODO-QSP: dynamic text: You tell <<$npc_firstname[$boy]>>, "I''ve had a great time but we should be on o...
  scene.text(`You tell ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''}, "I've had a great time but we should be on our way."`);
  // TODO-QSP: dynamic text: "I had a great time, you''re really fun to hang out with." <<$npc_firstname[$boy...
  scene.text(`"I had a great time, you're really fun to hang out with." ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} tells you. "Could I get your number?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    scene.img('images/locations/shared/date/givenumber.jpg');
    // TODO-QSP: dynamic text: You give <<$npc_firstname[$boy]>> your number. "Now I really hope you don''t for...
    scene.text(`You give ${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} your number. "Now I really hope you don't forget to call me." you tell him. "Oh, don't worry about that I'll be in touch." he says.`);
    scene.text('You end the date by him giving you a kiss on the cheek.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Sorry', handler: (st: GameState) => {
    scene.img('images/locations/shared/date/barreject.jpg');
    scene.text('"I\'ve really enjoyed the date but I just can\'t I\'ve made a fool of myself…"');
    scene.text('"No you didn\'t, I understand…" Before he continues you stop him telling him that you\'re sorry once again but you\'re too ashamed to see him again.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> disappointingly looks at you, "Well at least I gave it ...
    scene.text(`${((st as any).npc_firstname ?? 0)?.[String((st as any).boy ?? 0)] ?? ''} disappointingly looks at you, "Well at least I gave it my best shot who knows maybe I'll meet you once again."`);
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
    case 'datecinema':
      enterDatecinema(s, scene);
      break;
    case 'cinema_sure':
      enterCinemaSure(s, scene);
      break;
    case 'cinema_sorry':
      enterCinemaSorry(s, scene);
      break;
    case 'datecafe':
      enterDatecafe(s, scene);
      break;
    case 'cafepeople':
      enterCafepeople(s, scene);
      break;
    case 'cafeend':
      enterCafeend(s, scene);
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

export const dateM: LocationDef = {
  name: 'dateM',
  title: 'A man approaches, smiling at you.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
