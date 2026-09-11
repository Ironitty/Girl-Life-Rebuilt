import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Make small talk', goto: ['albina_chat', 'small_talk2'] },
    { label: 'Talk about sex', goto: ['albina_sex_chat', 'sex_talk_start'] },
  ]);
  scene.build();
}

function enterChatExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
  } else {
    if (((s as any).region ?? 0) === 'city') {
      scene.actions([{ label: 'Continue', goto: ['albina_dorm', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
    }
  }
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Keep talking', goto: ['albina_chat', 'small_talk2'] },
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
  ]);
  scene.build();
}

function enterSmallTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('You chat about a variety of things, including school, music, clothes and what\'s been going on in Pavlovsk lately.');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    qspCall(s, 'albina_chat', 'topic_menu');
  } else {
    ((s as any).AlbinaQW ?? {})['chat_rand'] = Math.floor(Math.random() * 3) + 1;
    if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 1) {
      qspCall(s, 'albina_chat', 'job_talk1');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 2) {
        qspCall(s, 'albina_chat', 'underwear_talk');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 3  &&  ((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== '') {
          qspCall(s, 'albina_chat2', 'recurrent_porn_talk1');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 4) {
            qspCall(s, 'albina_chat', 'pube_talk2');
          } else {
            qspCall(s, 'albina_chat', 'small_talk');
          }
        }
      }
    }
  }
  scene.build();
}

function enterTopicMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Talk about people', handler: (st: GameState) => {
    qspCall(s, 'albina_chat', 'maid_conversation');
    qspCall(s, 'albina_chat', 'lazar_conversation');
    qspCall(s, 'albina_chat', 'zoya_conversation');
    if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).AlbinaQW ?? 0)?.['niko_help'] === 0) {
      qspCall(s, 'albina_chat', 'niko_help_talk');
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'albina_chat', 'topic_menu');
  } },
    ]);
  } },
    { label: 'Talk about life', handler: (st: GameState) => {
    qspCall(s, 'albina_chat', 'fun_talk');
    qspCall(s, 'albina_chat', 'exercise_talk');
    qspCall(s, 'albina_chat', 'diet_talk');
    qspCall(s, 'albina_chat', 'pajama_talk');
    qspCall(s, 'albina_chat', 'clothing_conversation');
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'albina_chat', 'topic_menu');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJobTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    // TODO-QSP: dynamic text: "What do you do for money, <<$pcs_nickname>>?" she asks. "Don't tell me you stil...
    scene.text(`"What do you do for money, ${((s as any).pcs_nickname ?? 0)}?" she asks. "Don't tell me you still rely on your parents?"`);
    if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
      scene.actions([
        { label: 'Work as a maid', handler: (st: GameState) => {
    scene.text('"I work as a maid at the hotel back in Pavlovsk. It doesn\'t pay much, but it\'s still money."');
    scene.text('She wrinkles her nose in disgust. "Ugh. I avoid Pav like the fucking plague! Do yourself a favor and get a good job in the city."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
      scene.actions([
        { label: 'Work as a lifeguard', handler: (st: GameState) => {
    scene.text('"I work as a lifeguard at the swimming pool back in Pavlovsk. It doesn\'t pay much, but it\'s still money."');
    scene.text('"Isn\'t that place full of pervs creeping on girls?" she asks.');
    scene.text('"Sometimes, but it\'s just part of the job," you reply with a shrug.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('You sigh. "Yeah… I still get most of my money from my mom. Trying to get a decent job sucks!"');
    scene.text('"Who said you have to get a decent job?" she smiles. "You could work at the sex shop and spend all day selling dildos and porno mags to pervs."');
    scene.text('"Of course that\'s what you would suggest!" you reply with a grin. "But I guess it wouldn\'t be too bad working at one of the stores in the mall or something…"');
    scene.text('"Just looking out for my bestie!" she smiles.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Odd jobs', handler: (st: GameState) => {
    scene.text('"No, I do odd jobs here and there," you shrug. "There\'s a lot of things to do, both in Pav and in the city. They don\'t pay very much, but it\'s still money."');
    scene.text('She wrinkles her nose in disgust. "Ugh. I avoid Pav like the fucking plague! Do yourself a favor and get a good job in the city."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "What do you do for money, <<$pcs_nickname>>?" she asks. "I used to get money fo...
    scene.text(`"What do you do for money, ${((s as any).pcs_nickname ?? 0)}?" she asks. "I used to get money for things from Starlets. Whatever my father didn't steal from me anyway. But that's dried up now and I can't rely on Mama forever. Don't tell me that everything you had came from Starlets?"`);
    if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
      scene.actions([
        { label: 'Work as a maid', handler: (st: GameState) => {
    scene.text('"I work as a maid at the hotel near the train station. It doesn\'t pay much, but it\'s still money."');
    scene.text('She wrinkles her nose in disgust. "Eww. There\'s no amount of money in the world that would get me changing the cum stained sheets in that place!"');
    scene.text('"Somebody needs to do it and I need the money," you reply with a shrug.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
    if (((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] === 'employed') {
      scene.actions([
        { label: 'Work as a lifeguard', handler: (st: GameState) => {
    scene.text('"I work as a lifeguard at the swimming pool in town. It doesn\'t pay much, but it\'s still money."');
    scene.text('"Isn\'t that place full of pervs creeping on girls?" she asks.');
    scene.text('"Sometimes, but it\'s just part of the job," you reply with a shrug.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
    scene.actions([
      { label: 'My mom', handler: (st: GameState) => {
    scene.text('"I get most of my money from my mom too," you say reluctantly. "Starlets was all the extra money I made too."');
    scene.text('"<i>Fuuuuck</i>," she groans, flipping over to stare at the ceiling in frustration. "What else can I do? I\'m <i>so</i> over getting fucked for money!"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Odd jobs', handler: (st: GameState) => {
    scene.text('"Odd jobs here and there," you shrug. "There\'s a lot of things to do around town. They don\'t pay very much, but it gives me some spending money. You could try doing that?"');
    scene.text('She wrinkles her nose in disgust.');
    scene.text('"I don\'t want to <i>work</i> for a living!" she says, sending both of you into giggles.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  qspCall(s, 'albina_chat2', 'first_model_talk1');
  if (((s as any).film ?? 0) > 0) {
    scene.actions([
      { label: 'Tell her you\'ve shot porn', handler: (st: GameState) => {
    qspCall(st, 'albina_chat', 'pornstar_talk1');
  } },
    ]);
  }
  // TODO-QSP: end !}
  if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
    scene.actions([
      { label: 'I\'m a stripper', handler: (st: GameState) => {
    qspCall(s, 'albina_chat', 'stripper_talk1');
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
    scene.actions([
      { label: 'I\'m a bargirl', handler: (st: GameState) => {
    qspCall(s, 'albina_chat', 'bargirl_talk1');
  } },
    ]);
  }
  scene.actions([
    { label: 'I work as a masseuse', handler: (st: GameState) => {
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterStripperTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    if (((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
      scene.text('"You already know what I do for money," you say with a sly smile. "We work together at the same club."');
      scene.text('She grins back. "True. We\'re the two hottest girls that place has to offer!"');
      scene.text('"What does your mother think of you working at such a place?" you ask.');
      scene.text('"She doesn\'t know," she shrugs. "I don\'t know what she would say if she ever found out, but that\'s a problem for later. What about your mother? Does she know you work at a strip club?"');
      scene.actions([
        { label: 'She would disown me', handler: (st: GameState) => {
    scene.text('"No, but if she ever learned that I dance naked for money, she\'d likely disown me on the spot!" you reply.');
    scene.text('"That would suck, but a girl has to make a living, doesn\'t she?"');
    scene.text('"I guess…" you sigh. "I just wish she would stop treating me like a child."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        { label: 'I don\'t care', handler: (st: GameState) => {
    scene.text('"I don\'t care what she thinks anymore," you shrug. "I\'m an adult now, so she can stop interfering with my life and let me do what I want!"');
    scene.text('"I don\'t know what Mama would think if she ever found out I dance there," she replies. "I want to be a nurse to make her proud and her learning of my current… employment would make her… <i>not</i> proud of me."');
    scene.text('"That\'s exactly my problem," you reply. "It doesn\'t matter what I do with my life, my mother will always judge me for daring to have sex! It\'s pretty tiresome and I don\'t have the energy for it. If she hates me for being a stripper, then so be it."');
    // TODO-QSP: dynamic text: "Damn <<$pcs_nickname>>, remind me not to get on your bad side!"
    scene.text(`"Damn ${((s as any).pcs_nickname ?? 0)}, remind me not to get on your bad side!"`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('"I… do some strip dancing in the city…" you admit, blushing hard.');
    scene.text('Her jaw drops. "You\'re a stripper?!"');
    scene.text('You laugh nervously. "Y-Yeah. I needed money and it\'s… an easy job," you reply.');
    // TODO-QSP: dynamic text: "Don't be so embarrassed, <<$pcs_nickname>>. I'm a stripper too."
    scene.text(`"Don't be so embarrassed, ${((s as any).pcs_nickname ?? 0)}. I'm a stripper too."`);
    scene.text('"Really?" you ask, suddenly feeling a little relieved.');
    scene.text('"Yeah! Strange that we\'ve never seen each other there. Maybe that will change?"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        { label: 'Nonchalant', handler: (st: GameState) => {
    scene.text('"I do some strip dancing in the city," you say casually.');
    scene.text('"Wait, you\'re a stripper too?!" she exclaims.');
    scene.text('"Yeah? It\'s easy money for an easy job," you reply. "Wait, what do you mean \'too\'?"');
    scene.text('"I\'m a stripper too!" she excitedly replies. "Strange that we\'ve never seen each other there. Maybe that will change?"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        { label: 'Proud', handler: (st: GameState) => {
    scene.text('"I do some strip dancing in the city," you admit, letting a smug smile creep onto your lips.');
    scene.text('"You\'re a stripper too?!" she asks excitedly.');
    scene.text('"Why not? It\'s easy money and it\'s fun," you reply."Wait, what do you mean \'too\'?"');
    scene.text('"I\'m a stripper too!" she excitedly replies. "Strange that we\'ve never seen each other there. Maybe that will change?"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('"I… do some strip dancing in the city…" you admit, blushing hard.');
    if (((s as any).age ?? 0) < 18) {
      scene.text('Her jaw drops. "You\'re a stripper?! How?! You\'re underage!"');
      if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
        scene.text('"I\'ve had a fake passport for years," you shrug uncomfortably. "Easiest way to get booze. Now it helps me with other things too."');
      } else {
        scene.text('"I… got a fake passport that the club don\'t really care to check," you admit. "It wasn\'t easy getting it."');
        scene.text('She grins. "Maybe I\'ll come visit you at work one night…"');
        scene.text('"Please don\'t…" you reply uncomfortably and she pats you on the shoulder.');
        // TODO-QSP: dynamic text: "Don't panic, <<$pcs_nickname>>, I'm just kidding!"
        scene.text(`"Don't panic, ${((s as any).pcs_nickname ?? 0)}, I'm just kidding!"`);
        qspCall(s, 'albina_chat', 'small_talk');
      }
    } else {
      scene.text('Her jaw drops. "You\'re a stripper?!"');
      scene.text('You laugh nervously. "Y-Yeah. I needed money and it\'s… an easy job," you reply.');
      scene.text('"Say no more. I\'ve always thought about doing it myself, I just don\'t know what Mama would say about it…"');
      qspCall(s, 'albina_chat', 'small_talk');
    }
  } },
      { label: 'Nonchalant', handler: (st: GameState) => {
    scene.text('"I do some strip dancing in the city," you say casually.');
    if (((s as any).age ?? 0) < 18) {
      scene.text('"You\'re a stripper?!" she exclaims, her jaw dropping. "How?! You\'re underage!"');
      if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
        scene.text('"I\'ve had a fake passport for years," you say, rolling your eyes. "How do you think I got all my booze?"');
      } else {
        // TODO-QSP: dynamic text: "I got a fake passport," you admit with a shrug. "It wasn't easy, but it gets me...
        scene.text('"I got a fake passport," you admit with a shrug. "It wasn\'t easy, but it gets me past any doors that have an 18+ requirement."');
        scene.text('"Maybe I\'ll come visit you at work one night," she grins.');
        scene.text('You gasp. "You would not!"');
        scene.text('She smiles even wider. "I would so!"');
        scene.text('She raises her arms in defence as you hit her with a pillow.');
        qspCall(s, 'albina_chat', 'small_talk');
      }
    } else {
      scene.text('"You\'re a stripper?!" she exclaims and you shrug.');
      scene.text('"Yeah. It\'s easy money for an easy job," you reply.');
      scene.text('"Easy, huh?" She strokes her chin, mulling it over. "It sounds fun but… I don\'t know what Mama would say if she found out…"');
      qspCall(s, 'albina_chat', 'small_talk');
    }
  } },
      { label: 'Proud', handler: (st: GameState) => {
    scene.text('"I do some strip dancing in the city," you admit, letting a smug smile creep onto your lips.');
    if (((s as any).age ?? 0) < 18) {
      scene.text('"You\'re a stripper?!" she exclaims, her jaw dropping. "How?! You\'re underage!"');
      if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
        scene.text('"I\'ve had a fake passport for years," you grin. "Easiest way to get booze. Now it helps me with other things too."');
      } else {
        // TODO-QSP: dynamic text: "I got a fake passport. Expensive, but it gets me into 18+ areas."
        scene.text('"I got a fake passport. Expensive, but it gets me into 18+ areas."');
        scene.text('She grins. "Maybe I\'ll come visit you at work one night…"');
        scene.text('"I\'m not giving you a free show," you smirk.');
        scene.text('She smiles even wider. "Don\'t worry, I\'d happily pay to watch you shake that ass!"');
        qspCall(s, 'albina_chat', 'small_talk');
      }
    } else {
      scene.text('"You\'re a stripper?!" she asks excitedly.');
      scene.text('"Why not? It\'s easy money and it\'s fun," you reply.');
      scene.text('"I\'ve always wondered what it would be like, but I don\'t know what Mama would say about it…"');
      qspCall(s, 'albina_chat', 'small_talk');
    }
  } },
    ]);
  }
  scene.build();
}

function enterPornstarTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['porno'] > 0) {
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'embarrassed';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Actually I…" you mumble, a blush already heating up your face. "I\'ve been uhh… starring in some… <i>adult films</i>…?"');
    scene.text('She sighs. "I done that stupid fucking casting video, so I\'m not in a position to judge you, but that doesn\'t mean I have to agree with you doing it as an actual job."');
    qspCall(s, 'albina_chat', 'pornstar_talk4');
  } },
      { label: 'Casual', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'casual';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'ve been starring in pornos," you say with a casual shrug of your shoulders.');
    scene.text('She sighs. "I done that stupid fucking casting video, so I\'m not in a position to judge you, but that doesn\'t mean I have to agree with you doing it as an actual job."');
    qspCall(s, 'albina_chat', 'pornstar_talk4');
  } },
      { label: 'Happy', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'happy';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Actually I…" you say, a smile tugging at the corners of your mouth. "I\'ve been shooting some porn."');
    scene.text('She sighs. "I done that stupid fucking casting video, so I\'m not in a position to judge you, but that doesn\'t mean I have to agree with you doing it as an actual job."');
    qspCall(s, 'albina_chat', 'pornstar_talk4');
  } },
    ]);
  } else {
    if (((s as any).pfname ?? 0) !== '') {
      scene.actions([
        { label: 'Embarrassed', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'embarrassed';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Actually I…" you mumble, a blush already heating up your face. "I\'ve been uhh… starring in some… <i>adult films</i>…?"');
    scene.text('She grimaces at you in disgust. "Ew! You\'re doing porn?! Seriously?!"');
    qspCall(s, 'albina_chat', 'pornstar_talk2');
  } },
        { label: 'Casual', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'casual';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'ve been starring in pornos," you say with a casual shrug of your shoulders.');
    scene.text('Her jaw drops and she gives you a look of utter revulsion.');
    scene.text('"Ew! You\'re doing porn?! Seriously?!"');
    qspCall(s, 'albina_chat', 'pornstar_talk2');
  } },
        { label: 'Happy', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_talk'] = 'happy';
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Actually I…" you say, a smile tugging at the corners of your mouth. "I\'ve been shooting some porn."');
    scene.text('Her jaw drops and she gives you a look of utter revulsion.');
    scene.text('"Ew! You\'re doing porn?! Seriously?!"');
    qspCall(s, 'albina_chat', 'pornstar_talk2');
  } },
      ]);
    }
  }
  scene.build();
}

function enterAlbinaPornRant1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
    // TODO-QSP: dynamic text: "After everything you and I went through, you let yourself get talked into being...
    scene.text(`"After everything you and I went through, you let yourself get talked into being fucked on camera just for some cash?" she sneers back. "I can't believe you'd stoop to doing something so disgusting, ${((s as any).pcs_nickname ?? 0)}."`);
  } else {
    // TODO-QSP: dynamic text: "After everything I protected you from, you let yourself get talked into being f...
    scene.text(`"After everything I protected you from, you let yourself get talked into being fucked on camera just for some cash?" she sneers back. "I can't believe you'd stoop to doing something so disgusting, ${((s as any).pcs_nickname ?? 0)}."`);
  }
  scene.build();
}

function enterAlbinaPornRant2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
    scene.text('"Ugh, gross!" she sneers. "I can\'t believe after everything you and I went through, you\'re still willing to get fucked on camera just for some extra cash. I can\'t imagine doing porn, especially with all the videos and images of me that are likely floating around out there thanks to my father\'s creep friends. Like I\'d want to add any more to their collection."');
  } else {
    scene.text('"Ugh, gross!" she sneers. "I can\'t believe after everything I protected you from, you\'re willing to get fucked on camera just for some extra cash. I can\'t imagine doing porn, especially with all the videos and images of me that are likely floating around out thanks to my father\'s creep friends. Like I\'d want to add any more to their collection."');
  }
  scene.build();
}

function enterPornstarTalk2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'albina_chat', 'pornstar_talk2.1');
  qspCall(s, 'albina_chat', 'pornstar_talk2.2');
  qspCall(s, 'albina_chat', 'pornstar_talk2.3');
  qspCall(s, 'albina_chat', 'pornstar_talk2.4');
  qspCall(s, 'albina_chat', 'pornstar_talk2.5');
  scene.build();
}

function enterPornstarTalk2_1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'What\'s wrong with porn?', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] === 'embarrassed') {
      scene.text('"What\'s wrong with doing porn?" you ask, your cheeks heating up even more as annoyance overtakes your embarrassment. "Don\'t you watch it?"');
    } else {
      scene.text('"What\'s wrong with doing porn?" you ask, your face heating up with irritation. "Don\'t you watch it?"');
    }
    if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('"Yeah, but I don\'t <i>make</i> it!" she sneers. "I can\'t believe after everything you and I went through, you\'d still let yourself get fucked on camera just for some money."');
      scene.text('"This is different," you protest. "This is what <i>I</i> want."');
      scene.text('"Yeah? Well, I want to keep money out of my sex life," she says. "It\'s already fucked my life up enough. I guess if you want to keep fucking up yours with it, then that\'s your choice."');
    } else {
      scene.text('"Yeah, but I don\'t <i>make</i> it!" she sneers. "I can\'t believe after everything I protected you from, you\'re willing to get fucked on camera just for some extra cash."');
      scene.text('"This is different," you protest. "This is what <i>I</i> want."');
      scene.text('"Yeah? Well, I want to keep money out of my sex life," she says. "It\'s already fucked my life up. I guess if you want to fuck up yours, then that\'s your choice."');
    }
    qspCall(s, 'albina_chat', 'pornstar_talk3.1');
    qspCall(s, 'albina_chat', 'pornstar_talk3.2');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk2_2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I need the money (ashamed)', handler: (st: GameState) => {
    scene.text('"It\'s not my first choice of job," you admit, a sharp arrow of shame piercing your chest at your friend\'s judgemental tone. "But I really need the money right now…"');
    qspCall(s, 'albina_chat', 'albina_porn_rant1');
    scene.text('She takes a breath to continue her diatribe, but seeing the expression on your face, she suddenly stops.');
    scene.text('"Sorry…" she mumbles, looking away in shame. "I didn\'t mean to be so harsh. I… I think I was taking this a little too personally. With everything that happened… I guess I just have a problem with sex and money. Mama would probably say I was projecting."');
    scene.text('She gives you a sad smile.');
    scene.actions([
      { label: 'Forgive her', handler: (st: GameState) => {
    scene.text('You take a deep breath, trying to settle your nerves a little before you respond.');
    scene.text('"Look, you don\'t need to agree with what I\'m doing. I don\'t even know if I agree with myself doing it, but don\'t judge me for it, okay? It really hurts."');
    scene.text('She nods solemnly and you breathe a sigh of relief.');
    scene.text('"Thanks," you say and finally move on to other topics.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPornstarTalk2_3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== 'embarrassed') {
    scene.actions([
      { label: 'I need the money (casual)', handler: (st: GameState) => {
    scene.text('"I need the money," you shrug. "It pays decently well."');
    qspCall(s, 'albina_chat', 'albina_porn_rant1');
    qspCall(s, 'albina_chat', 'pornstar_talk3.1');
    qspCall(s, 'albina_chat', 'pornstar_talk3.2');
  } },
    ]);
  }
  scene.build();
}

function enterPornstarTalk2_4(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I want to afford nice stuff', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] === 'embarrassed') {
      scene.text('"I just want to be able to afford nice things," you say, your blush deepening at your own justification. "The pay is pretty good and lets me buy expensive stuff."');
    } else {
      scene.text('"I just want to be able to afford nice things," you shrug. "The pay is pretty good and lets me buy expensive stuff. Is that so wrong?"');
    }
    qspCall(s, 'albina_chat', 'albina_porn_rant2');
    qspCall(s, 'albina_chat', 'pornstar_talk3.1');
    qspCall(s, 'albina_chat', 'pornstar_talk3.2');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk2_5(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'It\'s fun', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] === 'embarrassed') {
      scene.text('"It\'s kind of fun actually," you say, your blush deepening at the admission. "The sex is really good and it kind of makes me feel like a movie star."');
    } else {
      scene.text('"It\'s kind of fun actually," you smirk. "The sex is really good and it kind of makes me feel like a movie star."');
    }
    qspCall(s, 'albina_chat', 'albina_porn_rant2');
    qspCall(s, 'albina_chat', 'pornstar_talk3.1');
    qspCall(s, 'albina_chat', 'pornstar_talk3.2');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk3_1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Agree to disagree', handler: (st: GameState) => {
    scene.text('"Whatever," you sigh. "Let\'s just talk about something else."');
    scene.text('"Yeah," she mutters and pointedly turns away from you.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk3_2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Get mad', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['porn_fight'] = 1;
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('"Well <i>so-rry</i> that I was born into a poor family that lives on an estate, barely scraping by week to week, instead of getting to live in a mansion with a pool, a walk-in closet, and a maid!" you snap back at her. "<i>Excuse me</i> if I have to resort to sex work because I don\'t have a credit card to just buy all the slutty thongs I want without a second thought and every single piece of clothing in my wardrobe has to be bought without a single fucking ruble of help!"');
    scene.text('Her eyes fill with rage and she opens her mouth like she\'s about to say something, but it dies in her throat and she looks away, seemingly ashamed. She chews on her lip for a few seconds while avoiding eye contact with you.');
    scene.text('"Sorry…" she mumbles. "I shouldn\'t have said those things. You\'re right. I went through what I went through, but I\'ve never had to struggle for money. I shouldn\'t be making judgments on someone who does."');
    scene.text('She finally turns back towards you, wearing a sad smile on her face.');
    scene.actions([
      { label: 'Forgive her', handler: (st: GameState) => {
    scene.text('You take a deep breath as your adrenaline comes down.');
    scene.text('"Look, you don\'t need to agree with what I\'m doing, but just don\'t judge me for it. It really hurts."');
    scene.text('She nods solemnly and you breathe a sigh of relief.');
    scene.text('"Thanks," you reply softly.');
    scene.text('She gives you a small, guilty smile. "Should we talk about something else now?"');
    scene.text('"Yeah," you smile back.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Apologize', handler: (st: GameState) => {
    scene.text('You take a deep breath as your adrenaline comes down.');
    scene.text('"I\'m sorry too," you say. "It\'s not your fault that you were born rich any more than it\'s mine that I was born poor."');
    scene.text('"No! Don\'t apologize!" she says hurriedly. "It <i>was</i> my fault. I was being a stuck up cunt. Mama would probably tell me I was projecting."');
    scene.text('Her smile takes on a self deprecating tone, but you can see some real humor in there as well and smile back.');
    scene.text('With this little tiff between friends over, you finally move on to other topics.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'What\'s wrong with porn?', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] === 'embarrassed') {
      scene.text('"What\'s wrong with doing porn?" you ask, your cheeks heating up even more as annoyance overtakes your embarrassment. "Like you said, you filmed a video yourself."');
    } else {
      scene.text('"What\'s wrong with doing porn?" you ask, your face heating up with irritation. "You done it yourself, so it can\'t be that bad!"');
    }
    scene.text('"Yeah, and I like I told you before, I regretted it the instant I walked out of that hotel room! I let myself be exploited, and I hate to see it happening to you as well."');
    qspCall(s, 'albina_chat', 'pornstar_talk4.1');
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== 'embarrassed') {
      qspCall(s, 'albina_chat', 'pornstar_talk4.2');
    }
    qspCall(s, 'albina_chat', 'pornstar_talk4.3');
    qspCall(s, 'albina_chat', 'pornstar_talk4.4');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4_1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I need the money (ashamed)', handler: (st: GameState) => {
    scene.text('"It\'s not my first choice of job," you admit. "But I really need the money right now…"');
    scene.text('She gives you a sad smile. "But it\'s not the only way you can earn');
    scene.text('"Not any that pay as much as this does," you reply. "I\'d quit if I could, but no other job out can pay me as much as this one does, even if I\'m ashamed to do it."');
    qspCall(s, 'albina_chat', 'pornstar_talk4.5');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4_2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I need the money (casual)', handler: (st: GameState) => {
    scene.text('You shrug. "I need the money and it pays decently well."');
    scene.text('"I get that," she replies. "But couldn\'t you find a job that\'s... less demeaning?"');
    scene.text('"I could, but those aren\'t as convenient and don\'t pay nearly as much," you reply. "I need the money, so I do what I must."');
    qspCall(s, 'albina_chat', 'pornstar_talk4.5');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4_3(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'It\'s fun', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['porn_talk'] === 'embarrassed') {
      scene.text('"It\'s kind of fun actually," you say, your blush deepening at the admission. "The sex is really good and it kind of makes me feel like a movie star."');
    } else {
      scene.text('"It\'s kind of fun actually," you smirk. "The sex is really good and it kind of makes me feel like a movie star. I get paid to get laid!"');
    }
    scene.text('"I though doing that dumb video was fun at first, but I quickly regretted it, and that was just <i>one</i> video. No amount of money will convince me to do it again."');
    scene.text('"Maybe I need the money," you coldly reply.');
    qspCall(s, 'albina_chat', 'pornstar_talk4.5');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4_4(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Avoid talking about it', handler: (st: GameState) => {
    scene.text('"You sigh. "Let\'s just talk about something else."');
    scene.text('"Yeah," she mutters and pointedly turns away from you.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPornstarTalk4_5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: cla  & *nl
  scene.text('She opens her mouth like she\'s about to say something, but it dies in her throat and she looks away, seemingly ashamed. She chews on her lip for a few seconds while avoiding eye contact with you.');
  // TODO-QSP: dynamic text: "Sorry..." she mumbles. "I shouldn't be so quick to judge you. I just... You're ...
  scene.text(`"Sorry..." she mumbles. "I shouldn't be so quick to judge you. I just... You're my friend, ${((s as any).pcs_nickname ?? 0)}, and I don't want to see you getting hurt is all."`);
  scene.text('"I know, but I can look after myself. It\'s sweet that you care, though. It\'s good to know you have my back if something ever did go wrong."');
  scene.text('She gives you a small smile. "You know it! Should we talk about something else now?"');
  scene.text('"Yeah," you smile back.');
  qspCall(s, 'albina_chat', 'small_talk');
  scene.build();
}

function enterUnderwearTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, where do you buy your panties?" she asks.
  scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, where do you buy your panties?" she asks.`);
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
    scene.actions([
      { label: 'I don\'t wear underwear', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['commando_know'] = 3;
    scene.actions([
      { label: 'Shy', handler: (st: GameState) => {
    scene.text('"Actually…" you start. "I stopped wearing panties."');
    if (((s as any).region ?? 0) === 'pav') {
      scene.text('Her jaw drops. "So… At school… When you\'re in your uniform with a <i>skirt</i>…?"');
    } else {
      scene.text('Her jaw drops. "So… When we were at school… And you were in your uniform with a <i>skirt</i>…?"');
    }
    scene.text('"You feel your face redden. "Yeah…');
    scene.text('"And right now you\'re…"');
    scene.text('"Yeah…" Your cheeks are blazing hot.');
    scene.text('She stares at you for a few seconds. "Slut," she replies as her face breaks into one of the biggest grins you\'ve ever seen her wear.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Casual', handler: (st: GameState) => {
    scene.text('"I don\'t," you shrug.');
    scene.text('"What do you mean you don\'t?" she asks, looking puzzled.');
    scene.text('"I don\'t buy panties because I don\'t wear them."');
    if (((s as any).region ?? 0) === 'pav') {
      scene.text('Her jaw drops. "So… At school… When you\'re in your uniform with a <i>skirt</i>…?"');
    } else {
      scene.text('Her jaw drops. "So… When we were at school… And you were in your uniform with a <i>skirt</i>…?"');
    }
    scene.text('"Yup," you say deadpan.');
    scene.text('"And right now you\'re…"');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('"Feeling the breeze," you say with an equal lack of emotion.');
    } else {
      scene.text('"Feeling the inside of my pants," you say with an equal lack of emotion.');
    }
    scene.text('She stares at you for a few seconds. "Slut," she replies as her face breaks into one of the biggest grins you\'ve ever seen her wear.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Proud', handler: (st: GameState) => {
    scene.text('"I don\'t wear panties," you smirk.');
    scene.text('Her jaw drops. "Seriously?"');
    scene.text('"Seriously," you reply, letting your smirk transform into a grin.');
    scene.text('"Never?"');
    scene.text('"Never ever!"');
    scene.text('She stares at you for a few seconds. "Slut," she replies as her face breaks into one of the biggest grins you\'ve ever seen her wear.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'G&M', handler: (st: GameState) => {
    scene.text('"I get most of mine from G&M," you admit.');
    scene.text('"Seriously?" she scoffs.');
    scene.actions([
      { label: 'They\'re cheap', handler: (st: GameState) => {
    scene.text('"They\'re cheap and affordable," you shrug. "Not everybody\'s a rich princess like you."');
    // TODO-QSP: dynamic text: "I'll have you know I get all my thongs from a seedy sex shop in the red light d...
    scene.text(`"I'll have you know I get all my thongs from a seedy sex shop in the red light district for ${qspFunc(s, 'money', 'string_price', 500)} a pop," she says while turning her nose up at you. "I'm no princess. I'm a dirty little girl who likes her panties cheap and snappable."`);
    scene.text('You both laugh at that.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'I like them', handler: (st: GameState) => {
    scene.text('"I just like them," you shrug. "They\'re cheap and comfortable, and I like the designs."');
    // TODO-QSP: dynamic text: "You know what else is cheap?" she replies, eyes twinkling. "Thongs. Lots of tho...
    scene.text(`"You know what else is cheap?" she replies, eyes twinkling. "Thongs. Lots of thongs, all ${qspFunc(s, 'money', 'string_price', 500)} a pop at the sex shop in the city. Easy to replace when someone snaps them right off your pussy," she grins.`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    { label: 'Pussy Kats', handler: (st: GameState) => {
    scene.text('"I get most of my underwear from Pussy Kats," you reply.');
    scene.text('"Yeah? What do you like about them?"');
    scene.actions([
      { label: 'They\'re comfy', handler: (st: GameState) => {
    scene.text('"They\'re really comfy," you answer. "Nice soft cotton, elastic that doesn\'t rub or itch. I just feel better when I\'m wearing them."');
    scene.text('"Full panties feel too constricting for my fat ass," she replies while wrinkling her nose. "It feels wrong if I\'m not wearing a thong. Plus no V-P-O."');
    scene.text('She punctuates her acronym by drawing an inverted triangle with both her index fingers while smirking and bouncing her eyebrows at you.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'They\'re cute', handler: (st: GameState) => {
    scene.text('"I like cute panties," you answer. "Between the cuts, designs and colors, Pussy Kats are the cutest."');
    scene.text('"Sexy is always better than cute," she grins. "You ought to try a thong sometime. One look at your ass in a mirror and you\'ll never go back."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    { label: 'Fashionista', handler: (st: GameState) => {
    scene.text('"I get most of my underwear from Fashionista," you reply.');
    scene.text('"You\'re into lace like Katja, huh?" she grins.');
    scene.text('"I guess," you shrug. "I just like the way it looks and feels."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Lusso', handler: (st: GameState) => {
    scene.text('"I get most of my underwear from Lusso Intimo," you reply.');
    scene.text('"Look at you, you fancy bitch," she teases. "That\'s where Mama gets her underwear from too."');
    scene.text('"If you\'re gonna wear it, it ought to be nice, don\'t you think?"');
    scene.text('"Quality doesn\'t matter to me as long as it\'s a thong and it looks good. And they don\'t sell thongs there," she grins wickedly.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'I mostly wear sports underwear', handler: (st: GameState) => {
    scene.text('"I mostly buy sports underwear actually," you reply.');
    scene.text('"Seriously?"');
    scene.actions([
      { label: 'They\'re comfy', handler: (st: GameState) => {
    scene.text('"Yeah, seriously! They\'re made of good material and form fitting, nice and stretchy. It\'s just comfortable."');
    scene.text('"Got hella V-P-O though," she says while drawing an inverted triangle with both her index fingers and bouncing her eyebrows suggestively.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Good for dancing', handler: (st: GameState) => {
    scene.text('"They\'re good for dancing," you shrug. "Nice and flexible, no chaffing."');
    scene.text('"You\'re still dancing?" she asks seriously. "After Starlets shut down and all I thought you might…"');
    scene.text('"Of course I\'m still dancing! Aren\'t you?"');
    scene.text('"I guess that\'s a fair point," she smiles back, perhaps feeling a little silly for assuming.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommandoTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0) {
    scene.text('"So you really never wear underwear?" she asks. Her glance at your thighs tells you the thought is turning her on at least a little, but the look in her eyes seems to show a certain amount of genuine curiosity.');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] >= 2) {
      scene.actions([
        { label: 'Never', handler: (st: GameState) => {
    scene.text('"Nope. Never," you answer.');
    scene.text('"I have to ask… Why?"');
    qspCall(s, 'albina_chat', 'commando_reply');
  } },
        { label: 'Only when I have to', handler: (st: GameState) => {
    scene.text('"Only when I have to," you sigh, as if the very thought of putting on panties is a chore.');
    scene.text('"I have to ask… Why?"');
    qspCall(s, 'albina_chat', 'commando_reply');
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] < 3) {
      scene.actions([
        { label: 'Not <i>never</i>', handler: (st: GameState) => {
    // TODO-QSP: '"Not <i>never</i>," you smile wryly. ' + iif(trait_vars['panty_preference'] = 2, '"Just when I feel...
    scene.text('"I have to ask… Why?"');
    qspCall(s, 'albina_chat', 'commando_reply');
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['commando_streak'] > 14) {
      scene.actions([
        { label: 'Not in weeks', handler: (st: GameState) => {
    scene.text('"Haven\'t in weeks," you tell her.');
    scene.text('"I have to ask… Why?"');
    qspCall(s, 'albina_chat', 'commando_reply');
  } },
      ]);
    }
  } else {
    scene.text('"So… Are you wearing any underwear right now?" she asks, that twinkle back in her eye again.');
    scene.actions([
      { label: 'It was one time', handler: (st: GameState) => {
    scene.text('"It was just that <i>one</i> time!" you protest. "I\'m not going panty-less every day!"');
    scene.text('"Mhmm. Suuuure…"');
    scene.text('"Seriously! I wear panties!"');
    scene.text('"Prove it."');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.actions([
        { label: 'Uhh…', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Uhh…" Your face flushes with heat.');
    scene.text('"HA! I knew it!" she shouts gleefully.');
    scene.text('"I just forgot them today!"');
    scene.text('"Nobody \'just forgets\' their underwear, you slut!" she cackles loudly, gasping for breath and clutching her stomach.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        { label: 'Show her (you\'re not wearing any)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('With a wry smirk, you sit up crosslegged on the bed and hike your skirt, giving Albina a straight view right up your pussy, its lips spread with your legs.');
    } else {
      scene.text('With a wry smirk, you sit up, kneeling on the bed and pull down your pants, giving Albina a full frontal view of your pussy.');
    }
    scene.text('She blinks in brief surprise before a haughty smile takes over her face.');
    scene.text('"Slut," she says matter-of-factly.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Show her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Fine, look."');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('You sit crosslegged on the bed and hike your skirt a little, showing Albina your panties underneath.');
    } else {
      scene.text('You reach back and pull back your waistband to show her your panty-clad ass underneath your pants.');
    }
    scene.text('"Nice…" she says, openly leering.');
    scene.text('"Wait, was this all just a scheme for you to look at my panties?"');
    scene.text('"What if it was?" she asks with a teasing smirk.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCommandoReply(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I don\'t remember', handler: (st: GameState) => {
    scene.text('"I…" you start to say before trailing off. "… I don\'t remember actually…"');
    scene.text('"What? What do you mean you don\'t remember? You just forgot to put on panties one day and never put them on again?"');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
      scene.text('"Not exactly," you smirk wryly. "I started going commando for <i>some</i> reason. I just don\'t remember <i>what</i>. At this point, it feels more wrong to wear panties than to go without. It feels weird having something between my legs covering my pussy. Like tape over my nipples."');
      scene.text('"<i>That\'s</i> weird," she says and gives you a funny look.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 2) {
        scene.text('"Not exactly," you smirk wryly. "I started going commando for <i>some</i> reason. I just don\'t remember <i>what</i>. Now it just feels… natural. As natural as wearing panties. Like switching between pants and skirts. Just two different ways of dressing."');
        scene.text('"<i>That\'s</i> weird," she says and gives you a funny look.');
      } else {
        scene.text('"Not exactly," you smirk wryly. "I started going commando for <i>some</i> reason. I just don\'t remember <i>what</i>. I only do it in skirts though. Feels weird having my pants rubbing up against my pussy."');
        scene.text('"Slut," she says while smirking back at you.');
      }
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'It seemed sexy', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
      scene.text('"It\'s just… sexy. Makes me <i>feel</i> sexy. Empowered. But now I\'ve been doing it so long, I can\'t go back. It feels weird having something between my legs covering my pussy. Like tape over my nipples."');
      scene.text('"Well, you\'re right about the sexy part," she smirks and blatantly ogles your ass.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 2) {
        scene.text('"It\'s just… sexy. There\'s something empowering about it. It made me <i>feel</i> sexy and no panty lines so it made me <i>look</i> sexy. Now I just go based on my mood. Sometimes I wear them, sometimes I don\'t. It\'s almost like choosing whether to wear a skirt or pants for the day."');
        scene.text('"Well you\'ve definitely got the sexy part down," she smirks and blatantly ogles your ass.');
      } else {
        scene.text('"It\'s just… sexy. It\'s strangely empowering. Makes me feel more confident somehow. Though I prefer doing it skirts rather than pants at the moment. Feels weird having something rubbing up against my pussy."');
        scene.text('"Hoping someone will get a glimpse?" she grins and blatantly ogles your ass.');
      }
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Panty lines', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
      scene.text('"I started because I didn\'t want panty lines," you explain. "But now it\'s a personal comfort thing. It feels weird having something between my legs covering my pussy. Like tape over my nipples."');
      scene.text('"Could\'ve just switched to thongs," she points out.');
      scene.text('"I could\'ve," you smirk. "But here we are…"');
      scene.text('She just grins back at you.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 2) {
        scene.text('"No panty lines," you grin. She seems amused by your reply.');
        scene.text('"You could just do what I do and use thongs."');
        scene.text('"Could\'ve. But this is easier. Saves me money."');
        scene.text('"I do go through them pretty quickly," she smiles ruefully. "Between wear, general flimsiness, and Lazar snapping them off, my thongs don\'t last very long…"');
      } else {
        scene.text('"No panty lines," you grin. "Although I\'m still getting used to wearing them in pants. Makes my pussy itch."');
        scene.text('"You <i>could</i> just wear thongs," she points out, rolling her eyes. "No crotch itch that way."');
        scene.text('"Could\'ve. But this is easier than buying new panties."');
        scene.text('"I do go through them pretty quickly," she smiles ruefully. "Between wear, general flimsiness, and Lazar snapping them off, my thongs don\'t last very long…"');
      }
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Because of you (dancing)', handler: (st: GameState) => {
    scene.text('"Because of you," you smirk.');
    scene.text('"<i>Me</i>?!" she sputters. "What did I do?"');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
      scene.text('You can\'t help but grin at her reaction. "Well, indirectly because of you. When I started dancing with the Starlets, I felt more comfortable and sexy when I danced without panties on. It started feeling more and more natural. Eventually, the panties came off and I never put them back on. Now it feels weird having something so snug against my pussy. Like tape over my nipples."');
    } else {
      scene.text('You can\'t help but grin at her reaction. "Well, indirectly because of you. When I started dancing with the Starlets, I felt more comfortable and sexy when I danced without panties on. It started feeling more and more natural. Now I can take them or leave them. Just depends on my mood."');
    }
    scene.text('"Hmmm… Just one thing though…"');
    scene.text('"What\'s that?" you ask.');
    scene.text('"Starlets was only on three times a week…" Her eyes twinkle and a smile tugs at the corner of her lips. "That doesn\'t explain why you skipped out on panties on the other four days…"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPubeTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask about her pubes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).region ?? 0) === 'pav') {
      scene.text('"I can\'t help but notice when we\'re in the locker room that you keep your pussy clean," you say. "Do you shave every day?"');
      if (((s as any).AlbinaQW ?? 0)?.['shower_caught'] === 0) {
        scene.text('"You spying on me or something?" she asks with a raised eyebrow. She\'s giving you a "glare", but you can also see a smirk tugging at the corner of her lips. When the full smile finally breaks out, she laughs. "I wax all my body hair, especially my pussy. I used to use a razor, but I can\'t stand the feeling of stubble. Prickly, pokey, ick!"');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['shower_caught'] === 1) {
          scene.text('"Is that what you were looking at when I caught you staring?" she says with a smug smirk. She holds the look for a few seconds before laughing. "I wax all my body hair, especially my pussy. I used to use a razor, but I can\'t stand the feeling of stubble. Prickly, pokey, ick!"');
        } else {
          scene.text('"How often are you peeping on me in there?" she laughs. "I wax all my body hair, especially my pussy. I used to use a razor, but I hate stubble. Prickly, pokey, ick!"');
        }
      }
      scene.text('She shivers with a grimace of disgust and annoyance. "Waxing takes care of the problem for weeks at a time. Which is great because shaving hurt my neck too!"');
      if ((Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_prcptn ?? 0)) {
        ((s as any).AlbinaQW ?? {})['pube_hint'] = 1;
        scene.text('She laughs and you start to laugh with her when it suddenly strikes you; Is it just you or does her laugh seem a little… forced?');
        scene.text('Whether or not it\'s your imagination, you don\'t get any time to think about it as she turns the question on you.');
      } else {
        scene.text('She barks a short laugh before swiftly turning the question back on you.');
      }
      qspCall(s, 'albina_chat', 'pube_talk2');
    } else {
      scene.text('"I noticed that your pussy is always cleanshaven," you say. "Do you shave every day?"');
      scene.text('"You spying on me or something?" she asks with a raised eyebrow. She\'s giving you a "glare", but you can also see a smirk tugging at the corner of her lips.');
      scene.text('When the full smile finally breaks out, she laughs. "I wax all my body hair, especially my pussy. I used to use a razor, but I can\'t stand the feeling of stubble. Prickly, pokey, ick!"');
      scene.text('She swiftly turns the question back on you.');
      qspCall(s, 'albina_chat', 'pube_talk2');
    }
  } },
  ]);
  scene.build();
}

function enterPubeTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pube_style ?? 0)?.['word'] === 'shaved') {
    scene.text('"What about you? I remember you having a distinctive baldness down there yourself," she grins.');
    qspCall(s, 'albina_chat', 'grow_pubes_chat1');
    scene.actions([
      { label: 'I hate bush too', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Yeah," you nod. "I hate bush too. It\'s itchy and scratchy and just makes me feel gross down there. I much prefer being cleanshaven."');
    scene.text('"Fuck yeah!" she cheers, high-fiving you. "Smooth pussy for life!"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'It\'s stylish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    // TODO-QSP: dynamic text: "Bush is so unfashionable," you say while rolling your eyes. "So 20th century. I...
    scene.text(`"Bush is so unfashionable," you say while rolling your eyes. "So 20th century. It's ${((s as any).year ?? 0)} for goodness' sake! Who the hell still has bush?"`);
    scene.text('"Pfft-! You\'re just like Katja," she snickers. "But I won\'t complain that you see it my way either. Smooth pussy revolution!" she cheers, high-fiving you.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Boys like it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('"Yeah. Boys like it that way," you say with a shrug. "I don\'t really care one way or the other, but as long as it keeps letting me get laid, I\'ll keep shaving."');
    } else {
      scene.text('"Yeah. Boys like it that way," you say with a shrug. "I don\'t really care one way or the other, but as long as it makes the boys think I\'m sexy, I\'ll keep on shaving."');
    }
    if (((s as any).AlbinaQW ?? 0)?.['pube_hint'] === 1) {
      scene.text('Just for a split second, her smile falters before she covers it up with a bright and toothy grin.');
      scene.text('"Ha! You slut!" she snickers teasingly, pushing your shoulder lightly before moving on to other topics.');
      scene.text('<i>There it is again</i>!');
      scene.text('<i>What is that about</i>…');
    } else {
      scene.text('"Ha! You slut!" she snickers teasingly, pushing your shoulder lightly before moving on to other topics.');
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } else {
    if (((s as any).pube_style ?? 0)?.['word'] === 'stubbly') {
      if (((s as any).region ?? 0) === 'pav') {
        scene.text('"What about you? You were looking pretty stubbly in the locker room the other day," she remarks with a raised eyebrow. "Forget to shave?"');
      } else {
        scene.text('"What about you?" she asks while raising an eyebrow. "I remember you being pretty stubbly down there. Do you always forget to shave?"');
      }
      qspCall(s, 'albina_chat', 'grow_pubes_chat1');
      if (((s as any).pubestyle ?? 0) === 11) {
        scene.actions([
          { label: 'Only once it gets bad (lazy)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'m too lazy to keep it clean all the time," you shrug. "I\'ll get to it eventually."');
    scene.text('"Doesn\'t it bother you?" she grimaces back at you.');
    scene.text('"Not enough to do it today."');
    scene.text('"Ew. I don\'t know how you can stand it. If I feel even a hint of stubble, I shave it off and then get a wax as soon as I can."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        ]);
      }
      scene.actions([
        { label: 'I really need to', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Yeah, I really need to," you sigh. "I normally do, but I\'ve been busy lately and haven\'t had time to take care of it."');
    scene.text('You wrinkle your nose in discomfort and Albina gives a grimace back to match.');
    scene.text('"Ew. I can\'t even wait a day. If I feel even a hint of stubble, I shave it off and then get a wax as soon as I can."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 15) {
        if (((s as any).region ?? 0) === 'pav') {
          scene.text('"What about you?" she remarks with a raised eyebrow. "The locker room makes it pretty obvious <i>you</i> aren\'t waxing. You really like having that little patch of hair down there?"');
        } else {
          scene.text('"What about you?" she asks. "Do you still have that little patch of hair down there?"');
        }
        scene.actions([
          { label: 'It\'s cute', handler: (st: GameState) => {
    scene.text('"I think it\'s cute!" you smile back. "Don\'t you?"');
    scene.text('"I prefer \'hot\' over cute," she smirks back. "And nothing\'s hotter than a smooth pussy."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
          { label: 'Shaving makes me feel young', handler: (st: GameState) => {
    scene.text('"I\'ve tried going clean shaven before, but it just made me feel like a little girl. Like I\'m back in primary school." You wrinkle your nose in disgust. "No thanks. Now I always keep a little hair down there."');
    // TODO-QSP: dynamic text: "That's old fashioned thinking," she insists. "Plenty of women go full Brazilian...
    scene.text(`"That's old fashioned thinking," she insists. "Plenty of women go full Brazilian and it doesn't make them any girlier. You need to get with the times. It's ${((s as any).year ?? 0)}, bitch!"`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
        ]);
      } else {
        if (((s as any).pcs_pubes ?? 0) <= 25) {
          if (((s as any).region ?? 0) === 'pav') {
            scene.text('"What about you?" she remarks with a raised eyebrow. "The locker room makes it pretty obvious <i>you</i> aren\'t waxing. How can you stand having hair down there?"');
          } else {
            scene.text('"What about you?" she asks. "You still have that bush down there? How can you stand it?"');
          }
          scene.actions([
            { label: 'It\'s classy', handler: (st: GameState) => {
    scene.text('"I think it\'s classy," you smile back wryly. "A more refined, mature look."');
    scene.text('"\'Classy and mature\' is pretty much the exact opposite of what I want," she guffaws. "I want \'hot and dirty.\' Smooth pussy fits that bill."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
            { label: 'Shaving makes me feel young', handler: (st: GameState) => {
    scene.text('"I\'ve tried going clean shaven before, but it just made me feel like a little girl. Like I\'m back in primary school." You wrinkle your nose in disgust. "No thanks. I\'ll keep some bush down there like a woman."');
    // TODO-QSP: dynamic text: "That's old fashioned thinking," she insists. "Plenty of women go full Brazilian...
    scene.text(`"That's old fashioned thinking," she insists. "Plenty of women go full Brazilian. You need to get with the times. It's ${((s as any).year ?? 0)}, bitch!"`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
          ]);
        } else {
          if (((s as any).pcs_pubes ?? 0) <= 30) {
            if (((s as any).region ?? 0) === 'pav') {
              // TODO-QSP: dynamic text: "I've seen you in the locker room too, <<$pcs_nickname>>," she says with a hint ...
              scene.text(`"I've seen you in the locker room too, ${((s as any).pcs_nickname ?? 0)}," she says with a hint of disgust. "Your pussy looks like a fucking hamster!"`);
            } else {
              // TODO-QSP: dynamic text: "I've seen your pussy too, <<$pcs_nickname>>," she says with a hint of disgust. ...
              scene.text(`"I've seen your pussy too, ${((s as any).pcs_nickname ?? 0)}," she says with a hint of disgust. "A furball like that must itch like hell!"`);
            }
          } else {
            if (((s as any).region ?? 0) === 'pav') {
              scene.text('"What about you?" she remarks with a raised eyebrow. "The locker room makes it pretty obvious <i>you</i> aren\'t waxing. I mean, do you shave at all?!"');
            } else {
              // TODO-QSP: dynamic text: "Do you even shave at all, <<$pcs_nickname>>?" she asks with a hint of disgust. ...
              scene.text(`"Do you even shave at all, ${((s as any).pcs_nickname ?? 0)}?" she asks with a hint of disgust. "I've seen the fucking jungle you have down there."`);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGrowPubesChat1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Growing it out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'m actually growing it out right now," you say.');
    qspCall(s, 'albina_chat', 'grow_pubes_chat2');
  } },
    { label: 'Thinking about growing it out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'ve actually been thinking about growing it out lately," you say.');
    qspCall(s, 'albina_chat', 'grow_pubes_chat2');
  } },
  ]);
  scene.build();
}

function enterGrowPubesChat2(s: GameState, scene: SceneBuilder): void {
  scene.text('She wrinkles her nose in disgust. "Ew! Why the fuck would you do that?"');
  scene.actions([
    { label: 'Change of pace', handler: (st: GameState) => {
    scene.text('"No reason," you shrug back. "Change of pace I guess. Might feel nice having some hair down there again."');
    scene.text('"That\'s like saying you want to drink piss instead of lemonade for a \'change of pace,\'" she replies, shaking her head in disgust. "Gross."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Too much work', handler: (st: GameState) => {
    scene.text('"It\'s a pain in the ass to stay smooth down there," you sigh. "Shaving is such a hassle. If I have some bush, at least the time between maintaining will increase."');
    scene.text('"You should just start waxing like I do. It hurts a little when it all comes out, but that month of relief is <i>so</i> worth it."');
    scene.text('You eyeball her suspiciously. "How much pain are we talking about here? When you say \'a little bit\', do you mean \'normal people\' little bit or \'Albina who likes to get spanked until she can\'t sit down\' little bit?"');
    scene.text('"You\'ll just have to find out," she smirks back.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Feels weird', handler: (st: GameState) => {
    scene.text('"It just feels weird," you say, wrinkling your nose. "Everything all smooth down there. It\'s… unnatural. Gives me weird vibes."');
    scene.text('"You just need to get used to it," she insists. "After a month, you don\'t even notice it anymore."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Makes me feel young', handler: (st: GameState) => {
    scene.text('"It makes me feel like a little girl," you say, wrinkling your nose. "Everything all smooth down there… Ugh. It makes me feel like I\'m back in primary school. I\'m tired of it. I want to feel like a woman instead of a girl, thank you very much."');
    // TODO-QSP: dynamic text: "That's old fashioned thinking," she insists. "Plenty of women go full Brazilian...
    scene.text(`"That's old fashioned thinking," she insists. "Plenty of women go full Brazilian. You need to get with the times. It's ${((s as any).year ?? 0)}, bitch!"`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Tired of pleasing guys', handler: (st: GameState) => {
    scene.text('"I\'ve never enjoyed having a shaved pussy. I only ever did it because guys liked it," you sigh. "I\'m tired of conforming what I do with <i>my body</i> just to please boys. I\'m going bush and I\'m gonna like it."');
    scene.text('"I guess I can\'t blame you for that," she says with a rueful smile.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPubeExplainChat1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pube_style ?? 0)?.['shape'] !== 'bush') {
  }
  scene.build();
}

function enterTellAboutGenericBoyfriend(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('She grins at you. "Right, so who are you dating again?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>…" you reply.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}…" you reply.`);
  scene.text('"Who?" she asks with a confused look on her face.');
  scene.text('You shake your head. "You won\'t know him. I only just met him."');
  scene.text('"Some random guy you just bumped into? I\'m sure that will end well…" she sarcastically quips before you tell her about him and how you met.');
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  // TODO-QSP: dynamic text: You sigh in a way only those who are in love can. "Hopefully <<$ARGS[1]>> and I ...
  scene.text(`You sigh in a way only those who are in love can. "Hopefully ${((s as any).locArgs?.[1] ?? 0)} and I can get married soon."`);
  scene.text('She gives you a somewhat skeptical look, then shrugs. "Best of luck with that, I guess. I\'m happy just hooking up for casual sex. Relationships can suck it."');
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
  ]);
  scene.build();
}

function enterMaidConversation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['Maid'] === 0) {
    scene.actions([
      { label: 'The new maid', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I take it you\'ve met the new maid, Milena? She\'s a little older than the last one, but my father isn\'t here to charm her into sucking his dick…" she scowls.');
    scene.text('"Not that it would work anyway. She bats for the other team, if you know what I mean…" she says with a wink. "Mama says I shouldn\'t disturb her when she\'s doing her work, but we like chatting with each other. That\'s when I found out about her… secret girlfriend."');
    scene.text('You laugh. "A <i>secret</i> girlfriend? You mean she has a proper one as well?"');
    // TODO-QSP: dynamic text: She gives you a hard stare. "It's not funny, <<$pcs_nickname>>! She's already be...
    scene.text(`She gives you a hard stare. "It's not funny, ${((s as any).pcs_nickname ?? 0)}! She's already been disowned by her parents for coming out as a lesbian and she doesn't want anyone else, <i>especially</i> her boss, finding out. I shouldn't have even outed her like that, especially not behind her back."`);
    scene.text('You blush as you apologize before she changes the subject.');
    ((s as any).AlbinaQW ?? {})['Maid'] = 1;
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLazarConversation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['Lazar_Sex'] === 1) {
    scene.actions([
      { label: 'Ask her about Lazar', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['Lazar_Sex'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] >= 1) {
      scene.text('"What\'s the deal with you and Lazar?" you ask.');
      scene.text('She gives you a puzzled look. "What do you mean? We just have casual sex with each other. Hell, you\'ve had a threesome with us!"');
      scene.text('"<i>Is</i> it just sex or is there… something more?" you try to imply.');
      scene.text('She shakes her head. "We just have sex when we feel like it, no strings attached."');
      scene.text('"So there\'s nothing serious then? No chance of you guys ever becoming a couple?"');
      scene.text('"We have sex, but he was and still is a good friend to me. We\'re never going to be a couple, end of story."');
      scene.text('She <i>really</i> doesn\'t want to have this conversation with you and you know better than to push your luck with her.');
    } else {
      scene.text('"What\'s the deal with you and Lazar?" you ask.');
      scene.text('She gives you a puzzled look. "What do you mean?"');
      scene.text('"It\'s no secret that the two of you hook up. Is it just sex or is there… something more?" you try to imply.');
      scene.text('She shakes her head. "We just have sex when we feel like it, no strings attached. I don\'t care about being his \'girlfriend\' and he enjoys all the female attention he gets. It would never work between us."');
      scene.text('"So there\'s nothing serious then? No chance of you guys ever becoming a couple?"');
      scene.text('"We have sex, but he was and still is a good friend to me. We\'re never going to be a couple, end of story."');
      scene.text('She <i>really</i> doesn\'t want to have this conversation with you and you know better than to push your luck with her.');
    }
    scene.text('"So what about you? Hooked up with anyone?" she asks, turning the conversation on you.');
    qspCall(s, 'albina_chat', 'lover_conversation');
  } },
    ]);
  }
  scene.build();
}

function enterLoverConversation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['fuckbuddies_current'] > 0) {
    if (((s as any).stat ?? 0)?.['fuckbuddies_current'] === 1) {
      scene.actions([
        { label: 'I have a fuckbuddy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Pretty much the same deal as you," you smile. "I keep it casual with a fuckbuddy. We booty call each other whenever we want to get off."');
    scene.text('"Better that way, isn\'t it?" she smirks. "Romance is overrated. Let\'s not kid ourselves. We\'re all in it for the fucking."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['fuckbuddies_current'] < 7) {
        scene.actions([
          { label: 'A few fuckbuddies', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Pretty much the same deal as you," you smile. "I keep it casual with a few fuckbuddies I have stashed around the way. They booty call me whenever they want to hook up."');
    scene.text('"Better that way, isn\'t it?" she smirks. "Romance is overrated. Let\'s not kid ourselves. Even couples are just looking for an excuse to fuck."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'A lot of fuckbuddies', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Pretty much the same deal as you," you smile. "I have a bunch of guys I keep it casual with. They booty call me whenever they want to hook up."');
    scene.text('"A bunch?" She raises an eyebrow. "How much is \'a bunch\'?"');
    if (((s as any).stat ?? 0)?.['fuckbuddies_current'] <= 10) {
      // TODO-QSP: dynamic text: "Hmmm…" You start counting off your various lovers on your fingers. "<<stat['fuc...
      scene.text(`"Hmmm…" You start counting off your various lovers on your fingers. "${((s as any).stat ?? {})?.['fuckbuddies_current'] - 1}? No wait, ${((s as any).stat ?? 0)?.['fuckbuddies_current']}. I just wait for them to text me if they want to fuck."`);
    } else {
      scene.text('"Let\'s just say more than ten," you say with a wry smirk.');
    }
    scene.text('"You slut!" she grins.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
      { label: 'Accept your sluttiness', handler: (st: GameState) => {
    scene.text('"Uh, yes?" You give her a nonchalant shrug. "I like sex. I\'m going to have as much of it as I want. If that makes me a slut then so be it."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).stat ?? 0)?.['hookup'] > 0) {
    scene.actions([
      { label: 'I hook up with random guys', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You know how guys try to pick you up around town?" you ask and she rolls her eyes.');
    scene.text('"Yeah. I can\'t go a day without some pervert catcalling me about my ass." She gives you a sly smile. "Just because they\'re right doesn\'t make it any less gross, though."');
    scene.text('"Well…" you wink and her jaw drops.');
    scene.text('"You slut!" she grins.');
    scene.text('"Hey!" you say, shoving her back with both hands but laughing anyways.');
    scene.text('"Ow! Come on! You know I\'m kidding. But seriously, do you really get off on one night stands? I like fucking Lazar because he <i>knows</i> how to fuck me. He knows exactly what to do to drive me insane and I love it. Is fucking a random guy once enough for you?"');
    scene.actions([
      { label: 'It\'s hit or miss', handler: (st: GameState) => {
    scene.text('"It\'s pretty hit or miss," you admit. "But when it\'s good, it\'s great. I can put up with a few bad lays and tiny dicks for that. Hit enough quantity, you\'ll get quality."');
    scene.text('"You really are a slut!" she guffaws loudly.');
    scene.text('"Take it back, you bitch!" you laugh back.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
      { label: 'Absolutely', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Absolutely," you grin. "I love trying new dicks! I think I'm up to <<stat['vagi...
    scene.text(`"Absolutely," you grin. "I love trying new dicks! I think I'm up to ${((s as any).stat ?? 0)?.['vaginal']}."`);
    scene.text('"You really are a slut!" she guffaws loudly.');
    scene.text('"Take that back, you bitch!" you laugh back.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0)  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a boyfriend', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('She grins at you. "Right, so who are you dating again?"');
    qspCall(s, 'albina_chat', 'lover_niko_talk');
    qspCall(s, 'albina_chat', 'lover_fedor_talk');
    qspCall(s, 'albina_chat', 'lover_artem_talk');
    qspCall(s, 'albina_chat', 'lover_rex_talk');
    (s as any).i = 0;
    // TODO-QSP: :lover_looop
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''albina_chat'', ''tell_about_generic_boyf...
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'lover_looop'
    }
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'albina_chat', 'lover_kolka_talk');
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You shake your head. "Not really, no…"');
    scene.text('She shakes her head and smiles. "Don\'t worry, not everyone\'s interested in dating."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLoverNikoTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell her.');
    // TODO-QSP: dynamic text: She gives you a concerned look. "<<$pcs_nickname>>, he's bad news. He isn't what...
    scene.text(`She gives you a concerned look. "${((s as any).pcs_nickname ?? 0)}, he's bad news. He isn't what he seems, so just… Just be careful with him, okay?"`);
    scene.text('"What do you mean?" you ask curiously, but she just dismisses the question and changes the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLoverFedorTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Fedor', handler: (st: GameState) => {
    scene.text('"Fedor," you reply.');
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('She arches her brow, obviously surprised. "Fedor? Really? He sucked Vasily\'s dick in front of everyone!"');
      scene.text('You frown at her. "He didn\'t have a choice! Those criminals were going to take everything from his family and he couldn\'t pay them. He\'s not gay!"');
      scene.text('"Are you sure? He looked like he was <i>really</i> enjoying it. I don\'t care if he\'s gay or bi or whatever." She loudly sighs. "Look. If he makes you happy, then you\'ve got nothing to worry about," she says and you both decide to change the subject.');
    } else {
      scene.text('"Fedor? You\'re setting your sights pretty low with him. Why not go for Ivan?" she says with a smile.');
      scene.text('"I like him. He\'s sweet," you shoot back.');
      scene.text('"I don\'t know what you see in him, but if Fedor makes you happy, then go for it," she replies with a smile.');
      scene.text('She then proceeds to keep teasing you on your taste in boys.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLoverVitekTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kotovLoveQW ?? 0) === 1) {
    scene.actions([
      { label: 'Vitek', handler: (st: GameState) => {
    scene.text('"Vitek," you reply.');
    // TODO-QSP: dynamic text: She's taken aback in surprise. "Really <<$pcs_nickname>>, <i>really</i>? Of all ...
    scene.text(`She's taken aback in surprise. "Really ${((s as any).pcs_nickname ?? 0)}, <i>really</i>? Of all the boys in school, you go for the wannabe tough guy with tiny dick syndrome? With the amount of steroids he's probably jacked up on, I'd be surprised if his dick hasn't shrivelled back up inside him yet!"`);
    scene.text('You\'re about to speak, but she scoffs in disgust and quickly changes the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLoverArtemTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.actions([
      { label: 'Artem', handler: (st: GameState) => {
    scene.text('"Artem," you reply and she arches a brow.');
    scene.text('"Artem? Geeky little Artem?" She stops and seems to consider it. "Well, I guess he is kind of cute… I bet you have him wrapped around your little finger and he does whatever you want, right?" she says with a sly smile.');
    scene.text('You shake your head. "He\'s sweet, and really nice to me."');
    scene.text('She laughs, seemingly amused by your words. "Yeah, I\'m sure he is \'nice\' and \'sweet\'. Does he rock your world, though?" she asks with a grin.');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('You grin. "He\'s actually becoming a lot more confident, and dominant, in bed. So yeah, you could say he rocks my world."');
      scene.text('"And your bed by the sounds of it," she smirks. "I didn\'t think a little nerd like him would have that in him."');
      scene.text('"I think his new attitude surprises even him sometimes," you reply.');
    } else {
      scene.text('You disregard her comment. "There\'s more to life than sex you know!" The amused look on her face tells you she isn\'t buying it, though. "Okay fine, he\'s pretty good at it… Good enough anyway."');
      scene.text('She again laughs at your comment. "I\'m sure that feedback will be well received! Whatever, he\'s a nerd who\'s getting some pussy. That makes him the alpha of that pack of losers," she says while shrugging her shoulders.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLoverRexTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rex_love ?? 0) === 1) {
    scene.actions([
      { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Rex…" you reply.');
    scene.text('She cocks her head slightly before replying. "Wait <i>Rex</i>, the guy who throws all those kick ass parties?"');
    scene.text('You nod. "Yeah, that\'s him."');
    scene.text('She grows strangely excited. "How the fuck did you meet him? Isn\'t he older than us?"');
    scene.text('"He\'s friends with my sister. She invited me to his party and that\'s where we met." You proceed to talk about the night you met him and your first date, Albina being strangely engrossed in your story.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLoverKolkaTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['Sex'] > 0) {
    scene.actions([
      { label: 'Kolka', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['kolka_know'] === 0) {
      ((s as any).AlbinaQW ?? {})['kolka_know'] = 1;
      scene.text('"Well…" you say. "I\'ve been doing stuff with Kolka lately."');
      scene.text('"Kolka? Who\'s Kolk-" She stops mid-sentence and her eyes go wide. "Wait, you mean your <i>brother</i>?!"');
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5) {
        scene.actions([
          { label: 'It\'s just handjobs', handler: (st: GameState) => {
    if (((s as any).brotherwakeup ?? 0) > 0) {
      scene.text('"It\'s just a handjob now and then," you say, trying to justify yourself. "Help him get off. Or get him out of bed for school."');
    } else {
      scene.text('"It\'s just a handjob now and then," you say, trying to justify yourself. "Help him get off, help him sleep."');
    }
    scene.text('Albina holds up her hand, cutting you off.');
    // TODO-QSP: dynamic text: "TMI <<$pcs_nickname>>," she says, grimacing. "Way TMI. Keep your weird family b...
    scene.text(`"TMI ${((s as any).pcs_nickname ?? 0)}," she says, grimacing. "Way TMI. Keep your weird family business to yourself."`);
    scene.text('"But you aske—"');
    scene.text('"<i>No,</i>" she says firmly. "We\'re never talking about this again."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
        ]);
      }
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 6) {
        scene.actions([
          { label: 'It\'s just blowjobs', handler: (st: GameState) => {
    if (((s as any).brotherwakeup ?? 0) > 0) {
      scene.text('"It\'s not like I let him fuck me," you say, trying to justify yourself. "It\'s just the occasional blowjob to help him relieve the tension or motivate him to wake up for school."');
    } else {
      scene.text('"It\'s not like I let him fuck me," you say, trying to justify yourself. "It\'s just the occasional blowjob to help him relieve the tension."');
    }
    scene.text('Albina holds up her hand, cutting you off.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says, grimacing. "That's fucking disgusting."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," she says, grimacing. "That's fucking disgusting."`);
    scene.text('"But you aske-"');
    scene.text('"<i>No,</i>" she says firmly. "I\'m just going to pretend you never told me that. Keep your weird family business to yourself. We\'re never talking about this again."');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
        ]);
      }
      if (((s as any).brotherQW ?? 0)?.['Sex'] === 9) {
        scene.actions([
          { label: 'It\'s just casual', handler: (st: GameState) => {
    scene.text('"It\'s just casual," you say, trying to justify yourself. "Totally physical, purely for pleasure purposes only. You know, for a little brother, he\'s got a surprisingly good coc-"');
    scene.text('Albina holds up her hand, cutting you off.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she grimaces. "That's fucking disgusting."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," she grimaces. "That's fucking disgusting."`);
    scene.text('"What? It\'s not like we\'re gonna get married. Is it so wrong to have a little fun together and-"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says, firmly interrupting you again. "I'm going to pret...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," she says, firmly interrupting you again. "I'm going to pretend you never said that. And I don't want to hear about it ever again."`);
    scene.text('"Bu-"');
    scene.text('"<i>Ever. Again.</i>"');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
        ]);
      }
      if (((s as any).brotherQW ?? 0)?.['Sex'] === 10) {
        scene.actions([
          { label: 'I love him', handler: (st: GameState) => {
    scene.text('""I\'ve recently realized that I see him as more than just my brother. I let him into the shower with me and one thing led to another and-"');
    scene.text('Albina holds up her hand, cutting you off.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she grimaces. "That's fucking disgusting."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," she grimaces. "That's fucking disgusting."`);
    scene.text('"Albina, I <i>love</i> him. He means everything to me and I want to spend the rest of my life-"');
    scene.text('"Okay, <i>stop</i>." She firmly interrupts you again. "If that\'s how you really feel I… I\'m not going to harp on you for it, but I\'m also going to pretend you never said it. I don\'t want to hear about it ever again."');
    scene.text('"Bu-"');
    scene.text('"<i>Ever. Again.</i>"');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"Well, still mostly Kolka, but-"');
      scene.text('Albina shoves her hand directly into your face and clamps it over your mouth while glaring at you.');
      scene.text('"I told you I don\'t want to hear about that. That\'s your weird family business and <b>I. Don\'t. Want. To. Know.</b>"');
      scene.actions([
        { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
        { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterZoyaConversation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['Mom_Future'] === 0) {
    scene.actions([
      { label: 'Ask about her mother', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['Mom_Future'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You\'re not sure how you should ask this, but you\'re curious about her mother. "I don\'t mean to pry, but what\'s the story with your mother?"');
    scene.text('Albina glances at you, but relents. "I don\'t know why, but she wanted to become a psychiatrist to \'make a difference\' as she calls it, so she ended up doing modelling, a lot of it nude and erotic, to earn enough money to go to university."');
    scene.text('She tenses up slightly. "She met my… My father through a mutual friend at the modelling studio and they eventually got married, but she was just a trophy wife that he paraded around everywhere he could."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"It made her uncomfortable, and after she ended up pregnant with me, things just got worse. My father never wanted children, so they argued constantly after I was born. She ended up divorcing him, but he made her choose between her studies… and me. Being forced to leave me behind broke her heart and she still feels guilty about it, so please don\'t mention anything about it to her."');
    scene.text('"Anyway, she went to Moscow, where she earned her degree before she moved back here and got her dream job working at a hospital in the city, right under his nose. She\'s looking into getting me into uni myself," she says with a warm smile and a twinkle in her eye. You\'ve never seen her look so… happy before.');
    scene.text('She turns to you. "So what about you? What do you want to do after school?" she asks warmly.');
    if (((s as any).rex_love ?? 0) === 1) {
      // TODO-QSP: act 'Get married to Rex': gt 'albina_chat', 'telling_marrige_dreams', 'Rex'
    }
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      // TODO-QSP: act 'Get married to Artem': gt 'albina_chat', 'telling_marrige_dreams', 'Artem'
    }
    if (((s as any).kotovLoveQW ?? 0) === 1) {
      // TODO-QSP: act 'Get married to Vitek': gt 'albina_chat', 'telling_marrige_dreams', 'Vitek'
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 5) {
      // TODO-QSP: act 'Get married to Fedor': gt 'albina_chat', 'telling_marrige_dreams', 'Fedor'
    }
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      // TODO-QSP: act 'Get married to Niko': gt 'albina_chat', 'telling_marrige_dreams', 'Niko'
    }
    (s as any).i = 0;
    // TODO-QSP: :marrid_looop
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic 'act ''Get married to <<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''albina_chat'', ''telling_...
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'marrid_looop'
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I\'m not sure, but I guess I have a few options," you admit.');
    scene.text('She nods. "Well, you should decide before you end up stuck in this shithole town or working some shitty job in the city. Although being a stripper <i>does</i> pay well…" she says with a smirk.');
    scene.text('Unsure if she\'s being serious or not and not knowing what else to say, you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You get a little excited. "I\'m planning to attend university as well. At least now I\'ll know someone there."');
    scene.text('"Maybe we could get dorm rooms next to each other?" she says and you both smile.');
    scene.actions([
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
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

function enterClothingConversation(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFunTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Talk about life', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You do anything fun lately?" you ask.');
    if (((s as any).region ?? 0) === 'pav') {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        scene.text('"Hmm… Lazar?" she grins.');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('"I went shopping in the city recently," she replies. "Got a lot of nice stuff. And a lot of cheap thongs. You should come with me sometime," she adds with a smirk. "I\'d love to dress you down. I mean- up. Dress you up."');
        } else {
          if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
            scene.text('"I had a great soak in the hot tub the other day," she sighs happily. "Perfect freezing cold weather and burning hot water with the jets turned all the way up. And then I got sloppy drunk afterwards," she grins.');
          } else {
            scene.text('"I had a great nap by the pool the other day," she sighs happily. "No top, sun on my skin, right after a swim so my muscles were all relaxed. It was <i>fucking great</i>."');
          }
        }
      }
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        scene.text('She grins. "Wouldn\'t you like to know…"');
        scene.text('"Let me rephrase then," you smirk. "Did you do <i>anyone</i> fun?"');
        scene.text('You both just laugh.');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('"I posed for an art class recently," she replies. "It was an… interesting experience."');
        } else {
          scene.text('"I had a really good yoga session the other day," she replies. "Stretching my muscles while naked felt amazing!"');
        }
      }
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterExerciseTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'How does you keep fit?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"What\'s your workout schedule like?" you ask. "Do you just dance or do you do other things too?"');
    scene.text('"Dancing is my main exercise, but I try to get in a full body workout on the same day. Lots of squats for my ass," she smirks. "And a good amount of cardio so I won\'t get tired during shows. But I\'ll only work out three or four times a week at most. Rest days are important or I\'ll get hurt and that means no more dancing. Sometimes I\'ll just dance and skip the gym, especially if I hit the pole. You\'d be surprised how much strength it takes, but I do stretches nearly every day to keep me nice and flexible."');
    scene.text('She adds the last part with a sly look of implication."');
    scene.text('"What about you?" she asks. "You keeping fit these days?"');
    qspCall(s, 'albina_chat', 'exercise_reply');
  } },
  ]);
  scene.build();
}

function enterExerciseReply(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Not since Starlets', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Not really," you shrug. "Not since Starlets. It was good when I had a goal to work towards, but I just can\'t keep it up for the sake of fitness."');
    scene.text('"You really ought to try though." She nudges you pointedly. "It\'s good for your brain. It keeps you young and sexy," she adds with a smirk.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'A few times a week', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Same as you more or less," you reply. "A few times a week, not more than that."');
    scene.text('"It\'s the best way to do it," she nods.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Every day', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I work out pretty much every day," you tell her. "It\'s part of my routine. I like the consistency and I love seeing the progress I\'m making."');
    scene.text('"Don\'t hurt yourself," she replies, looking annoyed. "You\'re at least hitting different muscle groups, right?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.text('"Not really," you admit. "I just do everything."');
    scene.text('"You can\'t do that!" she says. "If you work everything every day, it\'s only a matter of time before an injury happens!"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Yeah, I try to do something different every day," you tell her.');
    scene.text('"At least you\'re doing that much," she says with a small smile, looking relieved.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    { label: 'Every morning', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I work out every morning," you reply. "On the weekends, whenever I wake up. On weekdays, just before school."');
    scene.text('"You really ought to program in some rest days," she replies, looking annoyed. "You\'ll hurt yourself keeping that up."');
    scene.text('"It\'s part of my routine this way," you shrug. "I just roll out of bed and get to it."');
    scene.text('"I guess," she huffs.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterDietTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask what she eats', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"What\'s your diet like?" you ask.');
    scene.text('"I burn a lot of calories dancing, so I don\'t watch my intake <i>too</i> much," she tells you. "But I try to keep a healthy balance. Mostly chicken for protein, a good variety of veggies, minimize carbs. I like seeing my abs in the mirror," she smirks.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPajamaTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask what she wears to bed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/sleep1.jpg');
    scene.text('"I almost always sleep naked," she smirks. "I love the silky smooth feeling of my sheets. It feels wrong to even wear panties under the covers and deprive myself of that lovely softness. And because I\'m on the pill, I don\'t need to worry about getting my period and staining the sheets. I can just snuggle in and sleep comfortably."');
    // TODO-QSP: end !}
    scene.actions([
      { label: 'I sleep naked too', handler: (st: GameState) => {
    scene.actions([
      { label: 'Same reason', handler: (st: GameState) => {
    scene.text('"I sleep naked too," you tell her. "There\'s nothing quite like sheets on bare skin, is there?"');
    scene.text('"You naughty girl," she replies jokingly. "I bet you shower naked too, you slut!"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'It gets hot', handler: (st: GameState) => {
    scene.text('"I sleep naked too," you tell her. "It gets too hot for me if I\'m wearing clothes under the covers."');
    scene.text('"Hot and bothered?" she grins back jokingly. "Look at you, getting turned on by your own nudity, you naughty girl!"');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
      { label: 'I wear panties', handler: (st: GameState) => {
    scene.actions([
      { label: 'Same reason', handler: (st: GameState) => {
    scene.text('"I like how it feels too," you tell her. "But I still wear panties to bed."');
    scene.text('"Prude," she replies jokingly. "I bet you turn off the lights when you masturbate too."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'It gets hot', handler: (st: GameState) => {
    scene.text('"I still wear panties," you tell her. "It\'s too hot for me under the covers if I put on anything more than that."');
    scene.text('"Full nude makes you too \'hot?\'" she grins back, bouncing her eyebrows suggestively.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
      { label: 'Same reason', handler: (st: GameState) => {
    scene.text('"I like how it feels too," you tell her. "But I still wear panties to bed."');
    scene.text('"Prude," she replies jokingly. "I bet you turn off the lights when you masturbate too."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'It gets hot', handler: (st: GameState) => {
    scene.text('"I still wear panties," you tell her. "It\'s too hot for me under the covers if I put on anything more than that."');
    scene.text('"Full nude makes you too \'hot?\'" she grins back, bouncing her eyebrows suggestively.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Panties and a top (no bra)', handler: (st: GameState) => {
    scene.actions([
      { label: 'It\'s comfy', handler: (st: GameState) => {
    scene.text('"I sleep fully covered," you tell her. "I skip the bra, but I still wear panties and a shirt. I think it\'s comfy."');
    scene.text('"You don\'t know what you\'re missing out on," she grins back. "Try losing the shirt sometime. You won\'t go back."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Sleeping nude is weird', handler: (st: GameState) => {
    scene.text('"I sleep fully covered," you say, giving her a look. "Sleeping naked is <i>weird</i>."');
    scene.text('"Prude," she replies jokingly. "I bet you turn off the lights when you masturbate too."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNikoHelpTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask for help with Niko', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['niko_help'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    // TODO-QSP: dynamic text: You feel her wrap an arm around you. "What's up, <<$pcs_nickname>>? You're looki...
    scene.text(`You feel her wrap an arm around you. "What's up, ${((s as any).pcs_nickname ?? 0)}? You're looking pretty glum."`);
    scene.text('You collect your thoughts before replying. "Ever since I broke up with Niko, he\'s been raping me at lunchtime and I…"');
    scene.text('Her face contorts in rage. "That slimy little motherfucker\'s been doing <b>WHAT</b>?! Don\'t worry, I\'ll sort him out…"');
    scene.text('She doesn\'t elaborate on what she\'s planning when you ask, but you give her a tight hug. "Thanks Albina, I just don\'t know what to do!"');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemThreesome(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW ?? {})['alb3some_ask'] = 2;
  ((s as any).AlbinaQW ?? {})['artem_invite'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Can I ask you something?" you say as you sit on her bed.');
  scene.text('"Anything," she replies with a smile.');
  scene.text('"Would you… Would you be interested in a threesome with me… and Artem?"');
  scene.text('"How good is he at fucking?" she smirks. "And be honest!"');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    scene.actions([
      { label: 'He\'s dominant', handler: (st: GameState) => {
    scene.text('"You\'d be surprised at how dominant he\'s become," you reply.');
    scene.text('"So you\'re saying he could fuck me silly until I cum?" she grins. "You must have trained him well."');
    scene.text('You give her a sly smile. "You could say that…"');
    scene.text('She bites her lip. "Okay, but on one condition."');
    scene.text('"Name it," you reply.');
    scene.text('"He has to beat me at a game of my choosing first," she states. "Do that and he can dominate us both as much as he wishes."');
    scene.text('"I\'ll ask him, but I think we both already know the answer," you say and you both laugh.');
    scene.actions([
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'He\'s confident', handler: (st: GameState) => {
    scene.text('"He\'s actually becoming quite confident, a lot more than he was in school," you reply.');
    scene.text('"So you\'re saying he could literally flirt the panties off of me?" she grins.');
    scene.text('You smirk at her. "Honestly? I think he actually could at this point."');
    scene.text('She smiles. "Okay, I\'ll give him a shot. On one condition."');
    scene.text('"Name it," you reply.');
    scene.text('"He has to beat me at a game of my choosing first," she states. "Do that and I might even let him keep my panties afterwards."');
    scene.text('"I\'ll ask him, but I think we both already know the answer," you say and you both laugh.');
    scene.actions([
      { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
      { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterArtemThreesome1(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW ?? {})['alb3some_again'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"So how would you rate your experience with Artem?" you ask as you take a seat on her bed.');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('She bites her lip while squeezing her legs together. "Do you even have to ask? I\'m getting wet just thinking about it!"');
    scene.text('"How about a repeat performance then?" you grin.');
    scene.text('"I\'m down," she grins. "Same time, same place. Tell him I want him to fuck me even harder this time. And maybe fuck me in the ass as well."');
    scene.text('"I doubt that\'s an offer he\'ll ever refuse!" you smile.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['artem_dom_bj'] === 1) {
      scene.text('She bites her lip. "It was just a blowjob, but my panties were outright <i>soaked</i> by the time he came! I think I might have came a little myself…"');
      scene.text('"How about letting him fuck you this time then?" you grin.');
      scene.text('"I\'m down," she grins. "Same time, same place. Tell him I\'m expecting a good pounding after that throatfucking he gave me last time."');
      scene.text('"I doubt that\'s an offer he\'ll ever refuse!" you smile.');
    } else {
      scene.text('She shrugs. "It was okay, I guess. Why?"');
      scene.text('"He was asking if you were up for another threesome," you reply.');
      // TODO-QSP: dynamic text: "I don't know, <<$pcs_nickname>>…" she says somewhat hesitantly. "I'm sure he's ...
      scene.text(`"I don't know, ${((s as any).pcs_nickname ?? 0)}…" she says somewhat hesitantly. "I'm sure he's a nice guy, but you know how rough I love it and he doesn't strike me as the dominant type who's capable of giving me a good pounding."`);
      scene.text('You give her your best puppy eyes. "Do it for me then? <i>Please</i>?"');
      scene.text('She rolls her eyes and smiles at your antics. "Okay fine, but only for you. The puppy eyes won\'t work a second time, though."');
      scene.text('"You\'ll have fun," you say. "I\'ll make sure of it."');
      // TODO-QSP: dynamic text: She smiles again. "I'll hold you to that, <<$pcs_nickname>>. Bring him here agai...
      scene.text(`She smiles again. "I'll hold you to that, ${((s as any).pcs_nickname ?? 0)}. Bring him here again on Sunday night and we'll see."`);
    }
  }
  scene.actions([
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
  ]);
  scene.build();
}

function enterBlackGuy(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW ?? {})['know_ermias_sex'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"Do you happen to know anybody living up on the eighth floor?" you ask and she immediately shoots you a glance.');
  scene.text('"Why? Do <i>you</i>?"');
  scene.text('"I asked you first," you smirk.');
  scene.text('"I guess nothing\'s a secret around here…" she mumbles before she turns to you. "Yes, I\'m hooking up with a black guy upstairs. He\'s called Ermias and yes, he has a massive cock and that\'s why I\'m fucking him. Happy?"');
  if (((s as any).ErmiasQW ?? 0)?.['meet'] === 1) {
    scene.text('"Wait a minute," you reply. "Ermias Okeke?"');
    scene.text('"Yeah, do you-" she starts before grinning. "Oh my god, you slut! You\'re fucking him too, aren\'t you?!"');
    if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
      scene.text('"No!" you reply. "He\'s in some of my classes and we just chat."');
      scene.text('"Suuurrree," she smirks and you smack her with a pillow.');
      scene.text('"I\'m being serious! He hasn\'t asked me. At least not yet."');
      scene.text('She grins. "Oh so you <i>want</i> to fuck him?"');
      scene.text('You just blush and she smiles even wider. "Slut."');
    } else {
      scene.text('You just blush and she smiles.');
      scene.text('"His dick really is massive, isn\'t it?"');
      scene.text('You smile back. "One of the biggest I\'ve ever seen. It felt like he was going to rip my pussy in two!"');
      scene.text('"Tell me about it," she replies. "He actually bruised my cervix the first time he fucked me. It was worth it for the orgasm, though."');
    }
  }
  if (((s as any).meet_kendra ?? 0) === 1) {
    scene.text('"It\'s nothing to be embarrassed about," you reply. "I know a girl called Kendra who lives on that floor."');
    scene.text('"I\'ve heard about her," she replies. "Doesn\'t she get off on making white girls her sex slaves or something?"');
    scene.text('"So I\'ve heard," you shrug. "Like I said, I only know her."');
    if (((s as any).kendraQW ?? 0)?.['sub'] > 0) {
      scene.text('You decide to leave out the fact that you yourself are one of Kendra\'s slaves.');
    }
  }
  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
    scene.text('"It\'s nothing to be embarrassed about," you reply. "I know a guy called Djibril who lives on that floor."');
    scene.text('She nods. "I\'ve heard of him. He\'s one of Ermias\'s friends, right? So have you had sex with this Djibril?"');
    if (((s as any).npc_had_sex ?? 0)?.['A82'] === 0) {
      scene.text('You shake your head. "Not yet."');
      scene.text('"Not <i>yet</i>?" she smirks. "So you\'re <i>going</i> to fuck him at some point?"');
      scene.text('You blush as you try to come up with an answer.');
      scene.text('"Ha!" she snickers. "I knew it."');
    } else {
      scene.text('You nod, comfortable admitting to it after her own confession.');
      scene.text('"Slut," she smiles. "So how big is his cock?"');
      scene.text('You hold out your hands to show her and she grins.');
      scene.text('"Ermias is even bigger than that. He can fill my entire pussy right up to my cervix and <i>still</i> have an inch or two to spare! Not that that stops him from trying to get that inside me too."');
      scene.text('The two of you end up discussing your respective partners and how their performances compare to each other.');
      if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 1) {
        scene.text('You decide to leave out the fact that you\'ve been gangbanged by Djibril and his friends.');
      }
    }
  }
  if (((s as any).meet_kendra ?? 0) === 0  &&  ((s as any).DjibrilQW ?? 0)?.['meet'] === 0) {
    scene.text('You give her a weak smile in response.');
    scene.text('"You… You don\'t know anybody who lives up there, do you?"');
    scene.text('You shake your head and she blushes bright red.');
    scene.text('"Great. I\'ve just outed myself as a BBC slut in front of my friend."');
    scene.text('"I\'m not going to judge you," you reply. "Like you said, I\'m your friend, and friends don\'t judge."');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, but it still feels embarrassing to have told you that...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, but it still feels embarrassing to have told you that."`);
  }
  scene.actions([
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
  ]);
  scene.build();
}

function enterClubBj(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW ?? {})['saw_club_bj'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"So…" you start. "About what I saw you doing at the club…"');
  scene.text('"Oh… <i>That</i>," she says as you see her start blushing slightly. "Some of the clients we dance for sometimes pay extra for a… \'happy ending\' to their dance. Nothing more than a blowjob and we get to keep all the money afterwards."');
  scene.text('She sighs. "I know it sounds hypocritical after some of the things I might have said before, but the difference is that <i>I\'m</i> in control now. <i>I</i> get to choose which guys I suck off and when. I also feel safe knowing that a security guard is there to sort them out if they try pushing their luck."');
  scene.text('"I didn\'t think you\'d ever do something like that," you reply.');
  scene.text('"Neither did I," she says with a small smile. "I was against it at first, but I slowly came round to it after I realized that I wasn\'t being forced to do it. Like I said, it\'s my choice if I do it or not, and that made me more comfortable with the idea."');
  scene.text('"Okay," you smile. "As long as you\'re comfortable with it, then I won\'t say anything more about it."');
  scene.actions([
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'chat_exit':
      enterChatExit(s, scene);
      break;
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'small_talk2':
      enterSmallTalk2(s, scene);
      break;
    case 'topic_menu':
      enterTopicMenu(s, scene);
      break;
    case 'job_talk1':
      enterJobTalk1(s, scene);
      break;
    case 'stripper_talk1':
      enterStripperTalk1(s, scene);
      break;
    case 'pornstar_talk1':
      enterPornstarTalk1(s, scene);
      break;
    case 'albina_porn_rant1':
      enterAlbinaPornRant1(s, scene);
      break;
    case 'albina_porn_rant2':
      enterAlbinaPornRant2(s, scene);
      break;
    case 'pornstar_talk2':
      enterPornstarTalk2(s, scene);
      break;
    case 'pornstar_talk2.1':
      enterPornstarTalk2_1(s, scene);
      break;
    case 'pornstar_talk2.2':
      enterPornstarTalk2_2(s, scene);
      break;
    case 'pornstar_talk2.3':
      enterPornstarTalk2_3(s, scene);
      break;
    case 'pornstar_talk2.4':
      enterPornstarTalk2_4(s, scene);
      break;
    case 'pornstar_talk2.5':
      enterPornstarTalk2_5(s, scene);
      break;
    case 'pornstar_talk3.1':
      enterPornstarTalk3_1(s, scene);
      break;
    case 'pornstar_talk3.2':
      enterPornstarTalk3_2(s, scene);
      break;
    case 'pornstar_talk4':
      enterPornstarTalk4(s, scene);
      break;
    case 'pornstar_talk4.1':
      enterPornstarTalk4_1(s, scene);
      break;
    case 'pornstar_talk4.2':
      enterPornstarTalk4_2(s, scene);
      break;
    case 'pornstar_talk4.3':
      enterPornstarTalk4_3(s, scene);
      break;
    case 'pornstar_talk4.4':
      enterPornstarTalk4_4(s, scene);
      break;
    case 'pornstar_talk4.5':
      enterPornstarTalk4_5(s, scene);
      break;
    case 'underwear_talk':
      enterUnderwearTalk(s, scene);
      break;
    case 'commando_talk':
      enterCommandoTalk(s, scene);
      break;
    case 'commando_reply':
      enterCommandoReply(s, scene);
      break;
    case 'pube_talk':
      enterPubeTalk(s, scene);
      break;
    case 'pube_talk2':
      enterPubeTalk2(s, scene);
      break;
    case 'grow_pubes_chat1':
      enterGrowPubesChat1(s, scene);
      break;
    case 'grow_pubes_chat2':
      enterGrowPubesChat2(s, scene);
      break;
    case 'pube_explain_chat1':
      enterPubeExplainChat1(s, scene);
      break;
    case 'tell_about_generic_boyfriend':
      enterTellAboutGenericBoyfriend(s, scene);
      break;
    case 'telling_marrige_dreams':
      enterTellingMarrigeDreams(s, scene);
      break;
    case 'maid_conversation':
      enterMaidConversation(s, scene);
      break;
    case 'lazar_conversation':
      enterLazarConversation(s, scene);
      break;
    case 'lover_conversation':
      enterLoverConversation(s, scene);
      break;
    case 'lover_niko_talk':
      enterLoverNikoTalk(s, scene);
      break;
    case 'lover_fedor_talk':
      enterLoverFedorTalk(s, scene);
      break;
    case 'lover_vitek_talk':
      enterLoverVitekTalk(s, scene);
      break;
    case 'lover_artem_talk':
      enterLoverArtemTalk(s, scene);
      break;
    case 'lover_rex_talk':
      enterLoverRexTalk(s, scene);
      break;
    case 'lover_kolka_talk':
      enterLoverKolkaTalk(s, scene);
      break;
    case 'zoya_conversation':
      enterZoyaConversation(s, scene);
      break;
    case 'clothing_conversation':
      enterClothingConversation(s, scene);
      break;
    case 'fun_talk':
      enterFunTalk(s, scene);
      break;
    case 'exercise_talk':
      enterExerciseTalk(s, scene);
      break;
    case 'exercise_reply':
      enterExerciseReply(s, scene);
      break;
    case 'diet_talk':
      enterDietTalk(s, scene);
      break;
    case 'pajama_talk':
      enterPajamaTalk(s, scene);
      break;
    case 'niko_help_talk':
      enterNikoHelpTalk(s, scene);
      break;
    case 'artem_threesome':
      enterArtemThreesome(s, scene);
      break;
    case 'artem_threesome1':
      enterArtemThreesome1(s, scene);
      break;
    case 'black_guy':
      enterBlackGuy(s, scene);
      break;
    case 'club_bj':
      enterClubBj(s, scene);
      break;
    default:
      enterChat(s, scene);
      break;
  }
}

export const albina_chat: LocationDef = {
  name: 'albina_chat',
  title: 'You chat about a variety of things, including school, music,',
  region: 'other',
  enter: enter,
};
