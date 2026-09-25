import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFollownush(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  (s as any).loc = 'pav_aptcourtev1';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
  scene.text('You follow her inside, but not seeing her, you stop and listen a moment.');
  scene.actions([
    { label: 'Leave', goto: ['pav_complex', 'start'] },
    { label: 'Go look for her', handler: (st: GameState) => {
    scene.text('You follow her inside, but not seeing her, you start to head upstairs. You then hear her below you. "Hey, you following me?"');
    scene.text('You\'re not sure what to say. "Sort of. I was just curious what you were up to."');
    if (((st as any).npc_rel ?? 0)?.['A144'] >= 60  &&  ((st as any).npc_had_sex ?? 0)?.['A144']  &&  ((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('She gives you a small amused smile. "So you\'re stalking me, huh? Look I know I\'m hot, so I can hardly blame you."');
      scene.text('You shake your head. "No! I was just curious… Never mind." Before you can turn away, she suddenly grabs your hand.');
      scene.text('"Relax, I was just yanking your chain. I was just going to sit here on the stairs if you want to join me?" she asks. You nod in return and then the two of you walk down to the flight of stairs that go down to the basement where the boiler room and other stuff is, where you are unlikely to be disturbed, as you go about half way down the final flight of stairs she stops and takes a seat on the stairs.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
        { label: 'Join her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/kiss.jpg');
    scene.text('You sit next to her and the two of you start chatting about what\'s been going on lately in your lives. Just as you were telling her about something your sister did, she leaned over and kissed you. You\'re briefly taken aback.');
    qspCall(st, 'willpower', 'sex', 'self', 'medium');
    if (((st as any).will_cost ?? 0) <= ((st as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'Stop the kiss', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
    scene.text('You pull back and break the kiss. "Uh sorry, I don\'t want to make out or anything."');
    scene.text('She shrugs slightly and the two of you start talking again, but things seem a bit awkward. Before long, you both stop saying much before she says she needs to get going and heads out, leaving you behind.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop the kiss', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Get lost in the moment', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/kiss.jpg');
    scene.text('You return the kiss and soon your hands are roaming all over each other\'s bodies. Before long, she starts pulling her clothes off and encouraging you to do the same.');
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).will_cost ?? 0) <= ((st as any).pcs_willpwr ?? 0)) {
      scene.actions([
        { label: 'This is going too far', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
    scene.text('You break the kiss and pull back from her. "Uh sorry, but this is too public."');
    scene.text('She rolls her eyes slightly. "Yeah, whatever. I should get going." She gets up and straightens her clothes before she heads upstairs, leaving you behind.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'This is going too far', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    }
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/undress.jpg');
    scene.text('You start peeling your clothes off as she removes her clothes. Before either of you are fully naked, she grabs you by the hair and pulls your face over to her pussy.');
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/eather.jpg');
    scene.text('Your tongue darts out and licks at her clit before working its way down her pussy, which is soaking wet already. She moans loudly in pleasure while grinding her pussy against your face, leaving your face wet with her juices. Several minutes go by before she reaches over and pulls a small dildo out of her purse. You take it from her hand before turning her around and bending her over.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Dildo her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/dildoher.jpg');
    scene.text('You slide the dildo in her soaking wet pussy, eliciting even louder moans from her as she rocks back against your hand, taking as much of the dildo into her as she can. Several minute go by before she finally begins to shake all over and orgasms. You dildo fuck her pussy through her orgasm and once it passes, she steps away and takes the dildo from you. "Your turn."');
    qspCall(st, 'arousal', 'vaginal_dildo_give', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get dildoed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/getdildo.jpg');
    scene.text('She kneels down in front of you and spreads your legs, encouraging you to place one foot on the railing. She then leans her face between your legs and starts to lap at your clit and tongue fuck your pussy.');
    scene.text('Once she has you good and wet, she slides the dildo inside you and starts fucking you. Soft and slow at first, but goes faster and harder the louder you moan.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal_dildo', (-5), 'lesbian', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/finish.jpg');
    scene.text('Several minutes pass before she encourages you to turn around as she keeps plunging the dildo into your increasingly wet pussy.');
    (st as any).orgasm_txt = 'You are overwhelmed by the wild excitement of the dildo plunging into your pussy, knowing that at any moment someone could catch the two of you having sex in the stairs. You can\'t take any more; waves of pleasure come crashing over you as you wither in ecstasy. She keeps dildoing you until your shuddering stop.';
    qspCall(st, 'arousal', 'vaginal_dildo', 5, 'lesbian', 'exhibitionism');
    (st as any).orgasm_txt = undefined;
    scene.text('You\'re suddenly interrupted by the sound of an old woman\'s voice, who sounds like she is near the top of the stairs. "Oh my god, is someone being attacked? Are you alright dear? What\'s going on?"');
    scene.text('You and Anushka both stop and quickly get dressed. You\'re just pulling on the last of your clothes when an old woman comes round the landing looking at the two of you. She looks confused at first before she scoffs in disgust and heads back upstairs.');
    scene.text('You both burst out laughing before heading up yourself. Just as you reach the next landing, Anushka stops. "Look, I need to go do something. Talk later?" Without waiting for a reply, she takes the steps a couple at a time as she hurries up them, still giggling at what happened.');
    scene.text('Never a dull moment you suppose, but you have other things you can do too. With that, you head back out to the courtyard.');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
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
    } else {
      scene.text('She shrugs a little. "Not much. You?" The two of you briefly chat before she interrupts you. "Look, I need to get going. See you around." She then heads upstairs, obviously not in the mood to talk.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
      ]);
    }
    if (((st as any).spellKnown ?? 0)?.['penisenvy'] === 1  &&  ((st as any).PCLoSkirt ?? 0) > 0) {
      scene.actions([
        { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(st, 'castSpell', 'penisenvy');
    scene.text('Once you are sure you are alone, you take out your strapon and slide it up your legs under your skirt, once it is in place you secure it tightly. Then you focus your magical energy on your strapon harness.');
    if (((st as any).penisEnvyVariable ?? 0) === 1) {
      scene.text('As channel your magical energies, you feel the harness starting to meld with your skin. The dildo starting to twitch to life, the fake balls start to hang and you can feel them filling up with sperm, as the dildo becomes your penis. You reach down to grab your junk, feeling the full sensation of having a penis. As you do your grin to yourself, now just to find someone willing to suck your dick, luckily you know Anushka is likely nearby, and likely has a willing mouth. You start to head upstairs. You then hear her below you. "Hey, you following me?"');
      scene.text('You\'re not sure what to say. "Sort of. I was just curious what you were up to."');
      if (((st as any).npc_rel ?? 0)?.['A144'] >= 60  &&  ((st as any).npc_had_sex ?? 0)?.['A144']  &&  ((st as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('She gives you a small amused smile. "So you\'re stalking me, huh? Look I know I\'m hot, so I can hardly blame you."');
        scene.text('You shake your head and snort a laugh. "No bitch! I was just coming to talk to you is all."');
        scene.text('"Relax, I was just yanking your chain. I was just going to sit here on the stairs if you want to join me?" she asks. You nod in return and then the two of you walk down to the flight of stairs that go down to the basement where the boiler room and other stuff is, where you are unlikely to be disturbed, as you go about half way down the final flight of stairs she stops and takes a seat on the stairs.');
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
          { label: 'Join her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/talking.jpg');
    scene.text('You sit next to her and the two of you start chatting about what\'s been going on lately in your lives. You talk about a variety of topics, from music, her band, school, any cute boys or girls you have seen. As you talk, you can feel your dick slowly getting hard under your skirt. You can\'t help but stare at her pink lips as she talks, imagining those lips wrapped around the shaft of your cock.');
    scene.actions([
      { label: 'Ignore the feelings and just talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/talking.jpg');
    scene.text('The two of you talk for awhile longer, before you hear a phone buzzing. You both check your phones and it turns out to be her\'s, she looks at it a moment and then gets up as she puts her phone away. "Hey I need to get going, so see you around, kay."');
    scene.text('You nod to her. "Sure no problem." With that she hurries up the stairs, you guess it was something important. You spend a few minutes just sitting there thinking about anything to make your dick go soft. Shortly after it does, the spell fades as well. You stand up and slip the harness off, and put your strapon away, before leaving yourself.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Show her your dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/show_penis.jpg');
    scene.text('You wait until a natural break in the conversation. "Hey there is something I want to show you."');
    scene.text('That seems to perk her interest a bit. "Oh yeah whats that?" She asks in a curious tone.');
    scene.text('You smile to her. "Just go stand at the bottom of the stairs and turn around when I tell you to."');
    scene.text('She arches a shapely brow but when you don\'t move or say more, she gets up and walks down the stairs, as she says. "Fine but this better be good."');
    scene.text('You giggle slightly. "Trust me… you\'ll… love it." As she walks down, you slip your panties off. Which lets your semi hard dick hang free, you also pull up your top to expose your breasts. You spread your legs wide, as you pull up your skirt enough that half of your dick is dangling out in the open. "Ok turn around."');
    scene.text('As she turns around and takes in the sight, she looks completely stunned for a moment, her gaze finally fixating on your dangling cock. "What the fuck…" she mutters. You can see the magic working on her brain as she tries to comprehend what she is seeing.');
    scene.text('You smile to her, you know your magic will make her eventually rationalize this and remembering it as just a realistic looking strapon, but for now you can have some fun with her. "I grew a dick just for you."');
    scene.actions([
      { label: 'Mess with her more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/show_penis.jpg');
    scene.text('She looks even more puzzled. "Wait what? That\'s not possible."');
    scene.text('You giggle at her reaction and confusion. "It\'s magic."');
    scene.text('You stand up and walk down the stairs to her, your dick bouncing with her step, her eyes following your dick. "There\'s no such thing." she mutters softly but your hear the doubt in her voice as she questions her reality. She bites her lower lip as she seems unable to take her eyes off your cock.');
    scene.text('Once you standing in front of her you say. "Are you sure? Maybe you should get down on your knee\'s for a closer look."');
    scene.text('You pull your skirt loose and let it fall down around your ankles, a moment later she kneels down in front of you. Your semi hard dick right in front of her face. "It looks so real", she says in a bewildered tone of voice.');
    scene.text('"Go on and feel it, and see how real it feels." You tell her.');
    scene.text('She reaches out one hand and takes hold of it, feeling her hand grip your shaft makes your dick getting harder and her eyes get wider. "How is this possible? It feels so real." It seems she is fighting against the clouding effects, in the end you know she will rationalize this away.');
    scene.text('"Magic!" you see with a giggle. "Why don\'t you put it in your mouth and see how real it tastes." She looks up at you from where she kneels in front of you, stroking your dick, which quickly get hard. "Go on, you know you are curious what a magic cock tastes like."');
    scene.actions([
      { label: 'Get a blowjob', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['magic_dick'] = ((st as any).anushkaQW['magic_dick'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/blowjob1.jpg');
    scene.text('She opens her mouth and takes your dick in her mouth. She starts sucking it at once, she quickly becomes very enthusiastic while she sucks your dick. You quickly start to moan, as you feel her hot wet mouth sucking your dick. Her lips tightly wrapped around the shaft of your cock, as she bobs her head back and forth. You have a strong urge to just grab her head and shove your dick balls deep in her mouth.');
    qspCall(st, 'arousal', 'magicd_bj', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her just suck you off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/blowjob2.jpg');
    scene.text('She sucks on your dick, taking about half the length into her mouth, as she uses one hand to stroke your shaft in rhythm with her mouth. She looks up at you as she does. You moan as she works her own kind of magic on you. "It tastes just like the real thing doesn\'t it?"');
    scene.text('She makes a mmhmm sound in agreement with you as she keeps sucking your dick. With her lips wrapped around your shaft tightly and her hand gripping it even tighter, the feeling of her tongue pressed against the bottom of the shaft of your dock, it feels amazing. No wonder boys love blowjobs, this is such a amazing feeling.');
    qspCall(st, 'arousal', 'magicd_bj', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her keep going', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/blowjob3.jpg');
    scene.text('After a couple of minutes she switches hands and as you start to moan louder she starts picking up the pace. "Damn you are such a good little cock sucking slut." Which only encourages her to go even faster, she is very skilled at sucking dick, or at least it feels that way to you. Soon you feel your balls starting to fill full, you know you are about to blow your load any moment, but you don\'t want her to stop. You are fairly sure she won\'t mind if you cum in her mouth, but maybe you should just coat her face in your cum instead.');
    qspCall(st, 'arousal', 'magicd_bj', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum in her mouth', goto: ['pav_aptcourtev1', 'magic_cum_mouth'] },
      { label: 'Cum on her face', goto: ['pav_aptcourtev1', 'magic_cum_face'] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/throat_fuck1.jpg');
    scene.text('She sucks on your dick, taking about half the length into her mouth, as she uses one hand to stroke your shaft in rhythm with her mouth. She looks up at you as she does. You moan as she works her own kind of magic on you. "It tastes just like the real thing doesn\'t it?"');
    scene.text('She makes a mmhmm sound in agreement with you as she keeps sucking your dick. You want more, unable to hold back anymore. You reach up and grab her by the hair on the back of her head and shove your dick balls deep in her mouth as you start fucking her mouth, as she starts to gag.');
    qspCall(st, 'arousal', 'magicd_bj', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Use both hands', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/throat_fuck2.jpg');
    scene.text('As you feel her try and pull away a bit as she gags on your dick, you reach up and grab ahold of her hair with both hands and keep fucking her mouth. "Oh fuck this feels so good." Soon you feel your balls starting to fill full, you know you are about to blow your load any moment, but you don\'t want her to stop. You are fairly sure she won\'t mind if you cum in her mouth, but maybe you should just coat her face in your cum instead.');
    qspCall(st, 'arousal', 'magicd_bj', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum in her mouth', goto: ['pav_aptcourtev1', 'magic_cum_mouth'] },
      { label: 'Cum on her face', goto: ['pav_aptcourtev1', 'magic_cum_face'] },
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
      } else {
        scene.text('She shrugs a little. "Not much. You?" The two of you briefly chat before she interrupts you. "Look, I need to get going. See you around." She then heads upstairs, obviously not in the mood to talk. You can feel your semi hard cock stirring as you watch her ass as she heads upstairs, you sigh and spend the next few minutes waiting for the spell to fade, once it does you take the strapon harness back off and put it back into your purse before you leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_complex', 'start'] },
        ]);
      }
    } else {
      scene.text('As you channel your magical energies, you feel the harness starting to meld with your skin. The dildo starting to twitch to life, then you start to lose focus and suddenly it all fades. You failed to complete in the spell, you try again and nothing. In frustration you take the harness back off, putting it away. Afterwards you spend a bit of time looking for Anushka in the stairwell but you can\'t find her at all. Perhaps she went to her apartment or went out the front door.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_complex', 'start'] },
        { label: 'Go to her apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['anushapt', 'home'] },
      ]);
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMagicCumMouth(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] = ((s as any).anushkaQW['magic_dick_cum_mouth'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/cum_mouth.jpg');
  (s as any).orgasm_txt = 'You are overwhelmed by the sensation of having your dick sucked, you feel your dick twitching in her mouth as you start to empty your balls full of cum right into her mouth. She is surprised for a moment but doesn\'t stop sucking your dick.';
  qspCall(s, 'arousal', 'magicd_bj', 1);
  (s as any).orgasm_txt = undefined;
  scene.text('As you fill her mouth with your cum, she pulls her mouth off your dick, but keeps stroking it. A couple of more spurts of cum land on her cheek. She sticks out her tongue to show you the cum coating it. "Now swallow it like a good little slut." You have heard that so many times in porno\'s and from girls at school, that guys love to say that.');
  scene.text('She swallows it down, opening her mouth to show you her now clean tongue, you stick your dick back in her mouth as your tell her. "Suck it clean." She does as she is told sucking it nice and clean, before you pull your dick out of her mouth, as you start to get dressed. "So how did it taste?" You ask her.');
  qspCall(s, 'arousal', 'magicd_bj', 1);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/talking.jpg');
    scene.text('She wipes her face clean a you break the spell, as you pull the strapon harness off. "It tasted like a real dick and the cum tasted real… but a little different. I can\'t put my finger on it, just different."');
    scene.text('You smile to her as you put the harness away, before putting your panties back on. "Different good or different bad?" You ask her.');
    scene.text('She looks at the dildo as you put it away. "It looked so much more real when you was wearing it." You can see the magic finally starting to take hold on her mind, changing her memory. "Uh… different good I guess… yeah, I kinda liked it. It was sweeter and less salty, than real cum, it sure felt real… the texture I mean."');
    scene.text('You giggle as you put on your skirt and she finally gets up from her knees, having finally cleaned up her face. "Well as long as you enjoyed it." You say to her.');
    scene.text('She smirks. "It seems you enjoyed it more than I did. I mean did you even feel anything?"');
    scene.text('You nod yes. "Yeah, it has little sensors in it. Attached to a vibrator mounted in the harness. So the faster you sucked the faster it vibrated."');
    scene.text('She nods slowly, then smiles as her mind comes to terms with it. "Oh… yeah ok that makes sense. So I guess as you was cumming the fake cum came out?"');
    scene.text('You nod again. "That\'s right, that\'s exactly how it works." You pause a moment and smile to her. "Maybe we can do it again some time or maybe next time I will fuck that tight little pussy or ass of yours."');
    scene.text('She snorts a laugh. "Wow, such a guy thing to say, but sure maybe." Before she can say more her phone rings, she checks it reading some text. "Hey I need to get going, so see you later kay?"');
    scene.text('You nod to her. "Sure see you later." With that she hurries up the stairs, a moment later you follow her up the stairs, watching her ass as you do. Afterwards you head outside, happy with the results of playing with your magic. Maybe you should do this again with her some time.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMagicCumFace(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/facial.jpg');
  (s as any).orgasm_txt = 'You are overwhelmed by the sensation of having your dick sucked, you feel you are about to cum. You quickly pull your dick out of her mouth, just as your dick starts twitching as you empty your balls full of cum right onto her face. She is surprised for a moment but doesn\'t move as you coat her face in your magical cum.';
  qspCall(s, 'arousal', 'magicd_bj', 1);
  (s as any).orgasm_txt = undefined;
  scene.text('A couple of more spurts of cum land on her cheek. She sticks out her tongue to lick some of your cum off her lips. You stick your dick back in her open mouth as your tell her. "Suck it clean." She does as she is told sucking it nice and clean, before you pull your dick out of her mouth, as you start to get dressed. "So how did it taste?" You ask her.');
  qspCall(s, 'arousal', 'magicd_bj', 1);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/penis_envy/talking.jpg');
    scene.text('She wipes her face clean a you break the spell, as you pull the strapon harness off. "It tasted like a real dick and the cum tasted real… but a little different. I can\'t put my finger on it, just different."');
    scene.text('You smile to her as you put the harness away, before putting your panties back on. "Different good or different bad?" You ask her.');
    scene.text('She looks at the dildo as you put it away. "It looked so much more real when you was wearing it." You can see the magic finally starting to take hold on her mind, changing her memory. "Uh… different good I guess… yeah, I kinda liked it. It was sweeter and less salty, than real cum, it sure felt real… the texture I mean."');
    scene.text('You giggle as you put on your skirt and she finally gets up from her knees, having finally cleaned up her face. "Well as long as you enjoyed it." You say to her.');
    scene.text('She smirks. "It seems you enjoyed it more than I did. I mean did you even feel anything?"');
    scene.text('You nod yes. "Yeah, it has little sensors in it. Attached to a vibrator mounted in the harness. So the faster you sucked the faster it vibrated."');
    scene.text('She nods slowly, then smiles as her mind comes to terms with it. "Oh… yeah ok that makes sense. So I guess as you was cumming the fake cum came out?"');
    scene.text('You nod again. "That\'s right, that\'s exactly how it works." You pause a moment and smile to her. "Maybe we can do it again some time or maybe next time I will fuck that tight little pussy or ass of yours."');
    scene.text('She snorts a laugh. "Wow, such a guy thing to say, but sure maybe." Before she can say more her phone rings, she checks it reading some text. "Hey I need to get going, so see you later kay?"');
    scene.text('You nod to her. "Sure see you later." With that she hurries up the stairs, a moment later you follow her up the stairs, watching her ass as you do. Afterwards you head outside, happy with the results of playing with your magic. Maybe you should do this again with her some time.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuck3stooges(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_aptcourtev1';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'fame', 'pav', 'sex', 3);
  qspCall(s, 'npcStat', 'A9');
  qspCall(s, 'npcStat', 'A10', 'a');
  qspCall(s, 'npcStat', 'A11', 'b');
  qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  scene.img('images/locations/pavlovsk/resident/apartment/events/sex/suck3s1.jpg');
  scene.text('You get down on your knees and start jerking Dan off with one hand before you open your mouth and lean forward, slowly taking his cock into your mouth. You start sucking his dick slowly at first as someone grabs your free hand and puts their dick in it. You glance over and see Vitek staring down at you while Vasily also has his dick out as well.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'arousal', 'hj', (-4), ((s as any).npcID ?? 0), 'group', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck Vitek as well', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/suck3s2.jpg');
    scene.text('You start to alternate between jerking Dan and Vitek off, while sucking the other one\'s cock before Vasily speaks up. "What the fuck? Suck my dick too!"');
    scene.text('Dan and Vitek laugh and Dan says "Maybe it\'s too small and she can\'t see it." This causes them to both laugh even more.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'bj', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Vasily', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/suck3s3.jpg');
    scene.text(`You start sucking Vasily's dick next while you keep jerking Dan and Vitek off. "Oh yeah, that's it. Suck my cock, ${((st as any).pcs_nickname ?? '')}!" he says.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-5), ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck all of them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/suck3s4.jpg');
    scene.text('After sucking Vasily for a bit while jerking the others off, you start switching between all three of them.');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID1 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID2 ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Yummy cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/suck3s5.jpg');
    scene.text('Dan is the first one to cum, splattering your face with his sperm. Moments later, Vasily is covering the other side of your face with his cum. You then focus on just sucking Vitek off while Dan and Vasily sit back down. A few minutes later, Vitek cums in your mouth before he rejoins Dan and Vasily and grabs a beer, taking a big swig of it.');
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0));
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group', 'exhibitionism');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0));
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('"Fuck, that\'s the last beer. Come on, let\'s go," Vitek tells Dan and Vasily.');
      scene.text('"Hey, I just sucked your dicks for a beer! what the fuck?!" you tell them.');
      scene.text('They laugh a little and Vasily says "Our bad. You can have a beer for free next time." With that, they walk away, leaving you behind with a face covered in cum and no beer.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.text('Vitek grabs the second to last beer and sits back down. Vasily grabs the last one, but before you can say anything he hands it to you. You grab it, but he won\'t let go. "You can have it, but you have to sit here with our cum on your face while you drink it."');
      scene.text('You give him an exasperated look and sigh. "Why?"');
      scene.text('He laughs. "It\'s like marking our territory." You roll your eyes, but nod.');
      scene.actions([
        { label: 'Drink with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/sex/beercum.jpg');
    scene.text(`You take the beer and take a drink, keenly aware of the cum covering your face. The boys mostly ignore it and talk about what they've been up to of late. Soon, it's almost like it never happened and as if you had just been sitting around drinking the whole time. Sometime later, the beers are gone and the boys get up and head off to find trouble. "See you around, ${((st as any).pcs_nickname ?? '')}," Vasily says as they walk away.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'follownush':
      enterFollownush(s, scene);
      break;
    case 'magic_cum_mouth':
      enterMagicCumMouth(s, scene);
      break;
    case 'magic_cum_face':
      enterMagicCumFace(s, scene);
      break;
    case 'suck3stooges':
      enterSuck3stooges(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_aptcourtev1: LocationDef = {
  name: 'pav_aptcourtev1',
  title: 'You follow her inside, but not seeing her, you stop and list',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
