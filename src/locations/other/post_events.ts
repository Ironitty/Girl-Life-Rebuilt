import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).post_vars = (s as any).post_vars ?? {})['qw_1'] = 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/events/postevent1-1.jpg');
  scene.text('You return to the man\'s house after you leave the post office and ring the doorbell. "Ah, you came back!" he smiles happily when he opens the door. "Please come in, this will only take a minute of your time."');
  scene.text('"I only need to make sure it fits your body well. So, you know, she doesn\'t hate me!" he laughs nervously. "Anyway, right this way!"');
  scene.text('He ushers you into the bathroom, giving you the gown after taking it out of the package carefully. He tells you to take as long as you need and closes the door so you have some privacy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Model the gown for him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/events/postevent1-2.jpg');
    scene.text('He didn\'t lie. The gown covers you up enough so you don\'t feel too exposed. You carefully put it on and open the bathroom door, modeling the gown for him.');
    scene.text('The man\'s eyes light up the moment you enter the room.');
    scene.text('"That\'s great! Fantastic! She\'s going to look so hot…" he murmurs.');
    qspCall(st, 'willpower', 'exhib', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flirt with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flirt with him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('"What about me?" you ask him sweetly. When he looks at you, you ask again. "What about me? Do you think I look hot in it?"');
    scene.text('"I, uhh…" he mumbles.');
    scene.text('"It\'s okay! Your wife isn\'t here, right? It\'s just you and me! You can say whatever you want!" you wink at him.');
    scene.text('The man is still speechless, but the bulge in his pants tells you everything you need to know. Nevertheless, you want to hear him say it.');
    scene.text('"Well?" you ask him sharply.');
    scene.text('"You look… Very sexy," he confesses. He\'s actually fairly attractive, despite his age.');
    qspCall(st, 'willpower', 'foreplay', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Press on and seduce him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Press on and seduce him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/events/postevent1-3.jpg');
    scene.text('"It\'d be so easy for you to just throw me down on that bed and fuck me…" you say huskily, whisking the gown to the side to show him your pussy. "See? Easy access. I wouldn\'t even have to take it off!"');
    scene.text('The man knows he shouldn\'t be looking at you, but at the same time can\'t look away. Still, he makes no move. "Please, I\'m a married man!" he mumbles.');
    scene.text('"And? Married men still have needs! Don\'t you want to fuck me?" you whisper in his ear while rubbing your hand over his groin. "Maybe I\'ll do the things your wife won\'t, if you ask me nicely…"');
    scene.text('You seem to have struck a nerve there! He looks you in the eye to be sure you\'re not joking, then sighs. "Needs? Things my wife won\'t do? "That would be just about everything. She\'s never ever given me a blowjob because she thinks it\'s degrading and disgusting!"');
    scene.text('You slip out of the gown and stand naked before him while smiling sweetly. "Well, I don\'t. Forget about your wife for a while and focus on me. Your wife isn\'t here, I am. If there was one thing you could ask of me, anything at all, what would it be?"');
    scene.text('The man ponders for a second, then looks at you as if he\'s too embarrassed to say it. "A blowjob, definitely a blowjob. I haven\'t had one in forever!"');
    qspCall(st, 'willpower', 'bj', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t do it, but tell him he deserves better', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t do it, but tell him he deserves better', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    (st as any).postmarriedQW = 1;
    scene.text('"You know what? No. Ask your wife one last time," you reply. "Just be straight with her and tell her what you want, like you told me. If she cares for you, she\'ll do it."');
    scene.text('The man looks at you in confusion for a second, but nods. In a way, he actually looks relieved…');
    scene.text('"And if she keeps saying no, then it\'s her own fault if you find someone else who\'s more willing. Someone like me. Right?" you smile at him. You\'re still completely naked, and the man\'s eyes explore your body once more.');
    scene.text('"Right…" he says doubtfully. You can tell that he\'s very conflicted.');
    scene.text('"You deserve someone who takes care of you! I mean it! You\'re a great guy!" you tell him to give him some confidence. "Let\'s make a deal. Ask your wife tonight. If she says no, I\'ll do it next time I deliver mail here. Okay?"');
    scene.text('"I guess that sounds fair?" he says, still a bit confused.');
    scene.text('You give him a soft kiss on the cheek. "Good luck tonight!"');
    scene.text('Before he can reply, you go to the bathroom and change back into your regular clothes.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a blowjob he\'ll never forget', goto: ['post_events', '1-1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ease up and ask if that was all', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'money', 'earn', 300);
    qspCall(st, 'stat', '');
    scene.text('"Anyway, that\'s all you needed from me, right?" you ask him with a wink after he\'s been staring at your outfit for a while.');
    scene.text('The man snaps out of his daydream and instantly feels guilty for lusting over you. "Erm, yes!" he mutters. "Thank you! That was exactly what I needed to see. It looks great…"');
    scene.text('"Great on me, you mean?" you laugh while nodding at the tenting erection in his pants. The man nods embarrassedly and leaves so you can change.');
    scene.text('You put your regular clothes back on and find him waiting outside, clearly looking relieved.');
    // TODO-QSP: dynamic text: He offers you <<$func(''money'', ''string_profit'', 300)>> and a wide smile. "Th...
    scene.text(`He offers you ${qspFunc(s, 'money', 'string_profit', 300)} and a wide smile. "Thank you so much! I know it was weird of me to ask, but you really helped me out today. Please take this for your time."`);
    scene.actions([
      { label: 'Take the money and leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask if that was all', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'money', 'earn', 300);
    qspCall(st, 'stat', '');
    scene.text('"Uhh… That\'s all you needed from me, right?" you ask after he\'s been staring at your outfit for a while.');
    scene.text('The man snaps out of his daydream and nods. "Erm, yes! Thank you! That was exactly what I needed to see. It looks great!"');
    scene.text('You change back into your regular clothes and find him waiting outside, clearly looking relieved.');
    // TODO-QSP: dynamic text: "If this won''t do it, I don''t know what will," he mutters before he offers you...
    scene.text(`"If this won't do it, I don't know what will," he mutters before he offers you ${qspFunc(s, 'money', 'string_profit', 300)} and a wide smile. "Thank you so much! I know it was weird of me to ask…"`);
    scene.actions([
      { label: 'Take the money and leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Nice man', 38);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/shared/postoffice/sex/postevent1-4.jpg');
  scene.text('"Just a blowjob? You could literally ask me to do anything you can think of, and all you ask for is a blowjob?" you grin at him. "That\'s… kind of sweet, actually. I\'ll make it a good one!"');
  scene.text('You help him out of his pants and drop to your knees before him, giving his cock a few strokes with your hand.');
  scene.text('"Mmm… You have a nice cock!" you muse and close your lips around the shaft. As you slowly start sucking him off, he looks around uncomfortably.');
  scene.text('"Are you sure you want to do this?" he asks with some concern in his voice. "You don\'t have to do it, you know. I can ju-"');
  scene.text('You let his dick slip out of your mouth and interrupt him. "It really has been a while, huh? I love the taste of your cock… You just sit back and relax…"');
  scene.text('You close your lips around his cock again and try to take as much of his length down your throat as you can while looking him straight in the eye. You make an effort of showing how much you enjoy sucking him off as your slurping sounds fill the room.');
  scene.text('Within a few minutes, the man\'s breaths grow shorter and shallower until he groans. "Oh m- I\'m going to cum!"');
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take his load on your body', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'breasts', 'Nice man');
    scene.img('images/locations/shared/postoffice/sex/postevent1-5.jpg');
    scene.text('When he\'s about to burst, you release his cock from your mouth and jerk him off while aiming the head at your breasts. Thick sperm soons covers them while you sit there grinning.');
    qspCall(st, 'arousal', 'hj', 2);
    qspCall(st, 'arousal', 'end');
    scene.text('"That was… Oh wow… I don\'t…" the man mumbles as he sits on a chair and regains his breath.');
    scene.text('"Maybe you should be a bit more firm with your wife to get what you want! It\'s a crime to let a nice cock like that go to waste…" you wink at him.');
    scene.text('"My wife… What have I done!?" he exclaims, suddenly realizing what he\'s done. "Oh no. No no no! This is bad…"');
    scene.text('He looks at you desperately, expecting you to say something.');
    scene.actions([
      { label: 'Reassure him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    (st as any).postmarriedQW = 2;
    scene.text('"Relax, you did nothing wrong! She\'s the one not taking care of you! Right?" you tell him. The man looks at you, still rather doubtful.');
    scene.text('"Right!?" you repeat.');
    scene.text('"I guess… But…" he mutters.');
    scene.text('"No buts," you continue. "If she\'s not taking care of your needs, this is her fault more than yours. She should be happy to have a nice cock like yours at her disposal! Anyway, no one knows what we did, so it\'s our little secret!"');
    scene.text('You put your hand on his shoulder. "Just give her the gown like you intended to and show some confidence! Girls like that."');
    scene.text('He nods decisively and smiles. "You know what? You\'re right! Thank you so much!"');
    scene.text('"Happy to help!" you wink before heading to the bathroom to freshen up. After you use a wash cloth to clean the sperm off your body, you get dressed and return to the living room. The man is already rehearsing some lines he plans to use on his wife tonight.');
    scene.text('You give him a soft kiss on his cheek. "Good luck tonight! You can do it!" you whisper and see yourself out.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  ((s as any).post_vars = (s as any).post_vars ?? {})['qw_2'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/shared/postoffice/events/postevent2-2.jpg');
  scene.text('You return to the apartment and climb the stairwell to the floor where you met Jenya. She\'s already waiting for you in the stairwell, bottle in hand.');
  scene.text('"There you are! I knew you\'d come back!" she grins and gives you another kiss on the lips. Her breath smells faintly of sperm mixed with booze.');
  scene.text('"Arsen was getting antsy! He didn\'t think you\'d come back…" she says. "I knew you would, though! I saw that look in your eyes… Come on, they\'re waiting for you!"');
  scene.text('She pulls you into the apartment and starts undressing you before the door is even closed.');
  scene.text('Arsen and Maksim are behind a PC, looking through some photos Maksim took earlier. You see Jenya deepthroating Arsen like a pro, the happiness clearly visible in her eyes.');
  qspCall(s, 'arousal', 'porn', 5);
  qspCall(s, 'stat', '');
  scene.text('"He loves it when I do that!" she whispers in your ear as she keeps undressing you. "And… I do too! Shhh!"');
  scene.text('She gives you a conspiratory wink and undresses too.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her to the bedroom', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-3.jpg');
    scene.text('"You know where we\'ll be, boys!" she shouts to the guys and ushers you into a bedroom without waiting for an answer. She guides you to a bed and lies down next to you.');
    scene.text('Her hands explore your body eagerly while she aggressively slips her tongue into your mouth and kisses you dominantly.');
    qspCall(st, 'arousal', 'kiss', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.text('"Are you okay, dear? Want some vodka for your nerves?" she asks when she feels you\'re a bit overwhelmed by her raw sexuality.');
    scene.actions([
      { label: 'Drink vodka', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/sex/postevent2-4.jpg');
    scene.text('"Maybe a few sips to take the edge off," you mutter, but she pours a mug full and hands it to you. "Cheers!" she grins and takes a swig straight from the bottle before putting it away.');
    scene.text('You take a few sips of the vodka. It\'s the cheap home brewed stuff, but it gets the job done.');
    scene.text('Within minutes, you feel a slight buzz in your head and Jenya starts kissing you again. She starts off slowly, but her kisses become more and more passionate, and you struggle to keep the mug straight.');
    scene.text('Realizing you need to get rid of the mug, you decide to just gulp down the rest and let yourself fall back down on the bed, where Jenya immediately climbs on top of you. After a few minutes, she refills the mug and hands it to you again.');
    scene.actions([
      { label: 'Close your eyes and enjoy her touch', goto: ['post_events', '2-1'] },
    ]);
  } },
      { label: 'Ask about the camera', handler: (st: GameState) => {
    scene.text('"What\'s the deal with the camera guy?" you ask.');
    scene.text('"Arsen likes to show me off," she smiles. "He\'s such a sweetie! I\'m not sure what Maksim does with the photos. I think he runs a website, or uses them for a magazine or whatever."');
    scene.text('"You never asked him?" you ask. "Aren\'t you afraid someone will recognize you?"');
    scene.text('She laughs. "And then what? They would see I\'m hot, that I love sex, and that I\'m good at it! That\'s nothing to be ashamed of! Besides, it hasn\'t happened yet. I think he only publishes abroad…"');
    scene.text('When she sees your face, she kisses your neck. "You\'re not getting cold feet, are you? Here, have some vodka to ease your nerves! You\'ll be fine, trust me!"');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'You don\'t want to do this', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You don\'t want to do this', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"I\'m sorry, but I really can\'t do this," you tell her and push her off you.');
    scene.text('Jenya looks disappointed, but doesn\'t try to stop you. "That\'s a shame," she smiles. "Arsen would\'ve loved to have a cutie like you. Oh well, more cock for me!"');
    scene.text('You\'re gathering your clothes when Arsen and Maksim enter the room. Both their cocks are semi-erect and bob up and down with every step.');
    scene.text('"You\'re leaving?" he asks in disbelief. "We waited over an hour for this!"');
    scene.text('Maksim also seems upset. "I already promised the subscribers a threesome!"');
    scene.text('"Relax, baby! It\'s okay. Come here, I\'ll take care of both of you! That\'s still a threesome, right?" she says while pulling the two of them towards the bed. "See yourself out, will you?" she says with a wink before she takes both their cocks in her hands and starts jerking them off. You hear loud slurping sounds coming from the bedroom as you get dressed in the living room. Jenya truly seems to enjoy what she does…');
    scene.actions([
      { label: 'Leave the apartment', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink the vodka', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/sex/postevent2-4.jpg');
    scene.text('"Maybe a few sips to take the edge off," you mutter, but she completely fills the mug and hands it to you. "Cheers!" she grins and takes a swig straight from the bottle before putting it away.');
    scene.text('You take a few sips of the vodka. It\'s the cheap home brewed stuff, but it gets the job done.');
    scene.text('Within minutes, you feel a slight buzz in your head and Jenya begins to kiss you again. She starts off slowly, but her kisses become more and more passionate, and you struggle to keep the mug straight.');
    scene.text('Realizing you need to get rid of the mug, you decide to just gulp down the rest and let yourself fall back down on the bed, where Jenya immediately climbs on top of you. After a few minutes, she refills the mug and hands it to you again.');
    scene.actions([
      { label: 'Close your eyes and enjoy her touch', goto: ['post_events', '2-1'] },
    ]);
  } },
    ]);
  } },
      { label: 'Tell her you only want to be with her', handler: (st: GameState) => {
    scene.text('"To be honest, I only wanted to be with you!" you say softly.');
    scene.text('She shakes her head resolutely. "Sorry, honey, but me and Arsen share everything, including our lovers. He got me several guys already, but you\'re the first girl we\'ve shared. There\'s no way he would just watch, especially with a girl as cute as you! He\'s going to be all over you!"');
    scene.text('"Come on, please?" you plead. "I really like you, but…"');
    scene.text('She sighs and thinks for a second. "Okay, look. I\'ll try to keep him happy and do most of the work, but you can\'t ignore him. At least suck him off a little, you know? Does that sound okay?"');
    scene.text('Before you can answer, she continues. "I\'ll tell him he can fuck my ass, if it really comes to that. He loves my ass, but I never let him have it. He just doesn\'t know how to pace himself and make it feel good for me too! Anyway, I don\'t think he\'ll say no, but if he goes for you, I won\'t stop him. I can\'t stop him. Not after everything he does for me. I already promised him he\'d get to fuck a young cutie today, so…"');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'You don\'t want to do this', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You don\'t want to do this', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"I\'m sorry, but I really can\'t do this," you tell her and push her off you.');
    scene.text('The girl looks disappointed, but doesn\'t try to stop you. "That\'s a shame. Arsen would\'ve loved to have a cutie like you. Oh well, more cocks for me!"');
    scene.text('You\'re gathering your clothes when Arsen and Maksim enter the room. Both their cocks are semi-erect and bob up and down with every step.');
    scene.text('"You\'re leaving?" he asks in disbelief. "We waited over an hour for this!"');
    scene.text('Maksim also seems upset. "I already promised the subscribers a threesome!"');
    scene.text('"Relax, baby! I\'m sorry, she changed her mind. Come here, I\'ll take care of both of you! That\'s still a threesome, right Maksim?" she smiles while pulling the two of them towards the bed. "See yourself out, will you?" she says with a wink before she takes both their cocks in her hands and starts jerking them off. The guys completely forget about you and you walk out of the room quietly.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for the vodka', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/sex/postevent2-4.jpg');
    scene.text('"Maybe some vodka to take the edge off isn\'t such a bad idea after all," you mutter and she pours a mug full and hands it to you.');
    scene.text('"Cheers!" she grins and takes a swig straight from the bottle before putting it away.');
    scene.text('You take a few sips of the vodka. It\'s the cheap home brewed stuff, but it gets the job done.');
    scene.text('Within minutes, you feel a slight buzz in your head and Jenya starts kissing you again. She starts off slowly, but her kisses become more and more passionate, and you struggle to keep the mug straight.');
    scene.text('Realizing you need to get rid of the mug, you decide to just gulp down the rest and let yourself fall back down on the bed, where Jenya immediately climbs on top of you again. After a few minutes, she refills the mug and hands it to you again.');
    scene.actions([
      { label: 'Close your eyes and enjoy her touch', goto: ['post_events', '2-1'] },
    ]);
  } },
      { label: 'That sounds fair', handler: (st: GameState) => {
    scene.text('You give her ass cheeks a soft squeeze and kiss her. "Yeah, okay. I can do that, if it means I get to be with you…"');
    scene.text('At that point, Arsen and Maksim enter the room. They\'re still completely naked, and their semi-erect cocks bob up and down with every step. Arsen theatrically jumps onto the bed and gets between the two of you, while Maksim readies his camera.');
    scene.text('"Put your hand on his cock!" Jenya whispers in your ear. "Go on!"');
    scene.text('You do as she says and smile for the camera as Maksim starts taking photos. Hopefully no one you know will see these…');
    scene.text('"That\'s it. Get that cock nice and hard," Arsen orders.');
    scene.actions([
      { label: 'Continue', goto: ['post_events', '2-2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A163');
  scene.img('images/locations/shared/postoffice/sex/postevent2-6.jpg');
  scene.text('You suddenly feel movement on the bed. When you open your eyes, your vision is a bit blurry but you can distinctly see Arsen\'s cock. You can also hear the clicking of a camera.');
  scene.text('"Go on, cutie!" Jenya says. "Suck his cock for me. Make him feel good."');
  scene.text('You do as she says, gently sucking on the head of his cock while you do your best to hold the mug straight. Jenya kisses him fondly. "Do you like her, babe? I figured you would…"');
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  scene.text('For the next few minutes, you suck Arsen off while Maksim takes dozens of photos.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/shared/postoffice/sex/postevent2-7.jpg');
    scene.text('Jenya slides down and takes the mug from your hand, putting it on the nightstand. She then brings her mouth to Arsen\'s dick, and starts licking his shaft while you suck on the head. For the next few minutes, you take turns sucking him off while the other licks on his balls.');
    scene.text('"Do you want to fuck her now, babe?" you vaguely hear Jenya whisper in Arsen\'s ear. "You can do whatever you want… She\'s hammered, so she\'ll do whatever you want!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-8.jpg');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.text('The alcohol is really hitting you hard now, and the room feels a bit wobbly when Arsen pulls you on top of him. He guides his cock to your pussy and grunts in your ear. "Sit down on it. Go on."');
    scene.text('You slowly lower yourself onto his cock, feeling it penetrate you further and further. Jenya is smiling at you from the corner of the bed, idly jerking off Maksim as he continues taking photos.');
    scene.text('Arsen spanks your ass cheeks repeatedly until you move your hips back and forth.');
    qspCall(st, 'pain', '', 2, 'asscheeks');
    scene.text('"That\'s it, cutie! Ride that cock! Isn\'t it the best cock you ever had?" Jenya grins, happy to see how enthusiastic you are. Is it because of the alcohol or just because his cock makes you feel really good?');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-9.jpg');
    scene.text('The next thing you remember is being on your knees next to the bed, getting fucked from behind by Arsen as Jenya eagerly grinds her crotch against your face, guiding your mouth to where she wants it.');
    scene.text('Maksim taking photos of you getting fucked doesn\'t even cross your mind any more, and you moan eagerly while Arsen drills his cock inside you over and over.');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub');
    qspCall(st, 'arousal', 'cuni_give', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.text('"Remember, don\'t cum inside her!" Jenya reminds Arsen. "If you\'re cumming inside anyone, it should be me…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-10.jpg');
    scene.text('Arsen pulls out of you and tells you to get on your knees.');
    scene.text('As he guides his cock to your mouth, Jenya gets up from the bed and motions for Maksim to come closer. She takes the camera from him and grins. "Go on. You look like you\'re about to pop too!"');
    scene.text('It takes you a second to realize that there are two cocks in front of you instead of one, but you absent-mindedly close your fingers around them and suck the guys off in turn.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'face', 'A163', 1);
    qspCall(st, 'boyStat', 'A164');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'face', 'A164', 1);
    qspCall(st, 'stat', '');
    scene.text('"This girl is amazing!" Maksim gasps right when he hits his orgasm and his warm cum lands on your face.');
    scene.text('Arsen laughs. "Drunk sluts are the best! You\'ve really outdone yourself this time, Jenya."');
    scene.text('Seconds later, he groans loudly and adds his load to Maksim\'s, completely covering your face. Jenya takes photos of it all while grinning at you like a proud mother hen.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 13;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/locations/shared/postoffice/sex/postevent2-11.jpg');
    scene.text('Jenya gives the camera back to Maksim and gets down on the bed with you, softly kissing you and lapping their cum off your face with her tongue.');
    scene.text('Maksim takes a few more photos of the two of you before he leaves the room with Arsen. You\'re alone with Jenya now.');
    scene.text('"You were so great! Did you see how happy Arsen was!?" she beams between kisses. "Mmm… mmm… delicious…"');
    scene.text('For the next half hour, Jenya keeps kissing and fondling you. In your drunken haze, you can\'t think of anything else to do than to just kiss and fondle her back.');
    qspCall(st, 'arousal', 'kiss', 30);
    qspCall(st, 'arousal', 'end');
    scene.text('She eventually gets up. "Alright, cutie! Time to get you out of here. Come on, I\'ll help you get dressed."');
    scene.text('You put your clothes back on with a little help from Jenya and walk to the living room with her. You see Arsen and Maksim near the PC again, looking over photos of you getting fucked from behind while you eat Jenya\'s pussy. They both give you a dismissive nod when they realize you\'re leaving.');
    scene.text('Jenya walks you down the stairs and kisses you on the cheek one more time before heading back up. Hopefully they\'ll keep those photos to themselves…');
    scene.actions([
      { label: 'Lean against a wall and figure out where you are', goto: ['pav_residential', ''] },
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

function enter2_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A163');
  scene.img('images/locations/shared/postoffice/sex/postevent2-12.jpg');
  scene.text('You get down on your back again and gently stroke his cock until it\'s completely erect while occasionally kissing the head.');
  scene.text('Jenya joins you and the two of you run your tongues across Arsen\'s shaft, making him groan with delight. You occasionally hear a soft click from a camera in the background, but don\'t pay attention to it.');
  scene.text('"Go on, cutie. Take it in your mouth!" Jenya winks at you and uses her lips to guide Arsen\'s erection towards your mouth.');
  scene.text('Remembering your deal with her, you obediently part your lips and close them around his shaft, licking his precum off the head. It tastes a bit salty, but not necessarily unpleasant.');
  scene.text('Arsen repositions a little so he can get more of his length into your mouth, while Jenya gets between your legs and starts licking your pussy. She\'s good at it…');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'arousal', 'cuni', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-13.jpg');
    scene.text('When Arsen looks like he wants more, Jenya quickly intervenes, shooting you a wink. "I\'m so horny right now! I need you to fuck me, babe! Please?"');
    scene.text('Arsen grins and guides his dick into Jenya\'s welcoming pussy, making her moan with delight. You watch her breasts bounce back and forth over your head for a while, occasionally pinching her nipples while you play with yourself.');
    scene.text('You then sit up straight and kiss Jenya on the lips, stifling her moans while Arsen fucks her harder to try and coax a reaction out of her.');
    scene.text('After a few minutes, Arsen slows down a little and collapses on the bed, gasping for breath. His erection, glistening with Jenya\'s juices, is pointing straight up in the air.');
    scene.text('Jenya takes a moment to catch her breath as well, and wipes the sweat from her forehead. "What do you think, sweetie? Do you want to take it for a ride?" she asks between breaths. She looks fairly tired from the fucking Arsen just gave her.');
    qspCall(st, 'arousal', 'masturbate', 5);
    qspCall(st, 'arousal', 'kiss', (-5));
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and let her do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and let her do it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/shared/postoffice/sex/postevent2-14.jpg');
    scene.text('You discretely shake your head at her and she bites her lower lip in disappointment, but then smiles at Arsen as she straddles him. "You\'re not done yet, babe!" she tells him in a sing-song voice while she slowly lets his cock sink into her again.');
    scene.text('She silently mouths the words "You owe me!" to you while she begins to ride Arsen. From the ecstatic look on her face a few seconds later, she really doesn\'t seem to mind all that much!');
    scene.text('Jenya\'s high-pitched squeals fill the room as she rides enthusiastically Arsen, despite her fatigue. Realizing you have to do <i>something</i>, you gently fondle Arsen\'s balls.');
    scene.text('He suddenly realizes you\'re still here and his hand finds its way between your legs. He slips several fingers inside your pussy and starts fingering you.');
    scene.text('Arsen is very interested in you and keeps trying to get close to you, but Jenya is always one step ahead of him and offers herself so you don\'t have to.');
    scene.text('Eventually, his breathing grows short and more ragged, and you realize he must be close to orgasming. Jenya smiles tiredly at you. "Go ahead, cutie. Finish him off with your mouth!"');
    qspCall(st, 'arousal', 'vaginal_finger', 5);
    qspCall(st, 'arousal', 'foreplay_give', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give Arsen a blowjob', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/shared/postoffice/sex/postevent2-15.jpg');
    scene.text('You nod and get on your knees before Arsen, gently running your tongue across his shaft. You can taste Jenya\'s juices on it.');
    scene.text('Jenya beckons Maksim to come closer and grins. "I know I shouldn\'t, but you look like you could use some relief too, Maksim!"');
    scene.text('Maksim\'s cock had been hard throughout the shoot, and Jenya takes most of his length in her mouth immediately before he can say a word. You focus on sucking Arsen\'s dick as you hear Maksim groan behind you.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Let Arsen cum in your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A163', 1);
    qspCall(st, 'boyStat', 'A164');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A164', 1);
    scene.img('images/locations/shared/postoffice/sex/postevent2-16.jpg');
    scene.text('"I\'m going to cum!" Arsen groans and you feel the first jets of his sperm landing on your tongue. Jenya immediately gets down next to you and eagerly watches how her boyfriend shoots his load in your mouth. Arsen\'s load isn\'t very big, but that\'s no surprise - how many times did Jenya make him cum already today?');
    scene.text('When Arsen pulls back, she grins proudly at you and locks her lips onto yours. Your mouth is then filled with even more cum.');
    scene.text('"Show their cum to the camera and swallow it, cutie!" she orders. "Enjoy your tasty treat…"');
    scene.text('You obediently open your mouth and Maksim takes several more photos of you. "Oh man! This next update is going to be spectacular! I don\'t know where you found her, but wow!" he grins at Arsen.');
    scene.text('You then swallow the cum and Maksim takes several more photos of your empty mouth. When he has the shots he wants, he and Arsen leave as you relax on the bed with Jenya.');
    scene.text('"I\'m exhausted!" she says tiredly. "I\'m going to take a nap. You can stay if you want? We can nap together?"');
    scene.actions([
      { label: 'Stay and nap with Jenya', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'forced', 65);
    scene.img('images/locations/shared/postoffice/sex/postevent2-17.jpg');
    scene.text('"Now that you mention it, I could use a nap…" you reply and get comfortable on the bed.');
    scene.text('Jenya embraces you and you both fall asleep. You\'re then awoken by the sensation of her rubbing her body against yours. Her soft kisses on your neck give you goosebumps all over your body.');
    scene.text('"Sorry cutie, but we have plans for tonight!" she whispers with some regret in her voice. "Maybe we\'ll see you again?"');
    scene.text('"Maybe. I deliver mail every week!" you smile as you get out of bed and put your clothes back on. Jenya doesn\'t bother to put any on.');
    scene.text('When the two of you walk to the living room, Arsen and Maksim are taking turns smoking the water pipe.');
    scene.text('"All done, boys?" she grins. "Look, Maksim is done with the upload. Let\'s see how we did!"');
    scene.text('You see a foreign porn website on the computer screen. A picture of your sperm-filled mouth is very prominent on it. The image set has already been downloaded several hundred times!');
    scene.text('"You\'re going to be a big hit in Germany!" Maksim winks. "Just kidding. It\'s a German amateur website, so no one in Russia will find it. Your secret is safe!"');
    scene.text('Before you can say anything, Jenya grabs you by the arm and pulls you to the door. "So… Maybe we\'ll see you soon, \'porn star\'!" she grins while pushing you out of the apartment before giving you one last kiss and closing the door behind you.');
    scene.actions([
      { label: 'Return to the streets', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'I can\'t stay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('"Sorry, but I can\'t stay," you reply while shaking your head.');
    scene.text('She pouts, but nods understandingly. She gets up to give you one last kiss. "You were so much fun and I loved having you around! Maybe I\'ll see you again?"');
    scene.text('"Maybe. I deliver mail every week!" you smile as you put your clothes back on.');
    scene.text('When you walk through the living room on your way out, you see Maksim and Arsen sitting at a desk in front of the computer screen again. They browse back and forth between images of your sperm-filled mouth, trying to decide on which is the best one. You probably don\'t want to know what they\'re going to do with those…');
    scene.text('You decide not to disturb them and leave the apartment.');
    scene.actions([
      { label: 'Return to the streets', goto: ['pav_residential', ''] },
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
      { label: 'Agree to ride Arsen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'pain', '', 1, 'asscheeks');
    scene.img('images/locations/shared/postoffice/sex/postevent2-8.jpg');
    scene.text('Without saying a word, you throw your leg over Arsen and straddle him before slowly guiding his cock to your wet slit.');
    scene.text('You groan loudly as you feel his cock parting your pussy lips and slowly sink into your body. Jenya is smiling at you from the corner of the bed while idly jerking off Maksim as he continues taking photos.');
    scene.text('Arsen spanks your ass cheeks a few times and you automatically start riding him.');
    scene.text('"That\'s it, cutie! Ride that cock!" Jenya grins, happy to see how enthusiastic you are.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-9.jpg');
    scene.text('The next thing you remember is being on your knees next to the bed, getting fucked from behind by Arsen as Jenya eagerly grinds her pussy against your face, guiding your mouth to where she wants it.');
    scene.text('Maksim taking photos of you getting fucked doesn\'t even cross your mind any more, and you moan eagerly into Jenya\'s pussy as Arsen drills his cock inside you over and over.');
    scene.text('"Remember, don\'t cum inside her!" Jenya reminds him. "If you\'re cumming inside anyone, it should be me…"');
    scene.text('Eventually, his breathing grows short and more ragged, and you realize he must be close to orgasming. Jenya smiles at you. "Go ahead, cutie. Finish him off with your mouth!"');
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'arousal', 'cuni_give', (-15), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let Arsen cum in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent2-16.jpg');
    scene.text('"I\'m going to cum!" Arsen groans, mere seconds after you take his cock into your mouth. You feel the first jets of his sperm landing on your tongue as Jenya immediately gets down next to you and eagerly watches how her boyfriend shoots his load in your mouth. Arsen\'s load isn\'t very big, but that\'s no surprise - how many times did Jenya make him cum already today?');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A163', 1);
    qspCall(st, 'boyStat', 'A164');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A163', 1);
    qspCall(st, 'stat', '');
    scene.text('When Arsen pulls back, she grins proudly at you and locks her lips on yours. Your mouth is suddenly filled with even more cum! Jenya must\'ve gotten Maksim off while you were busy and kept his cum in her mouth.');
    scene.text('"Show the load to the camera and swallow it, cutie!" she orders. "Enjoy your tasty treat…"');
    scene.text('You obediently open your mouth and Maksim takes several more photos of you. "Oh man! This next update is going to be spectacular! I don\'t know where you found her, but wow!" he grins at Arsen.');
    scene.text('You then swallow the sperm and Maksim takes several more photos of your empty mouth. When he has the shots he wants, he and Arsen leave as you relax on the bed with Jenya.');
    scene.text('"I\'m exhausted!" she says tiredly. "I\'m going to take a nap. You can stay if you want? We can nap together?"');
    scene.actions([
      { label: 'Stay and nap with Jenya', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'pass_time', 65);
    scene.img('images/locations/shared/postoffice/sex/postevent2-17.jpg');
    scene.text('"Now that you mention it, I could use a nap…" you reply and get comfortable on the bed.');
    scene.text('Jenya embraces you and you both fall asleep. You\'re then awoken by the sensation of her rubbing her body against yours. Her soft kisses on your neck give you goosebumps all over your body.');
    scene.text('"Sorry cutie, but we have plans for tonight!" she whispers with some regret in her voice. "Maybe we\'ll see you again?"');
    scene.text('"Maybe. I deliver mail every week!" you smile as you get out of bed and put your clothes back on. Jenya doesn\'t bother to put any on.');
    scene.text('When the two of you walk to the living room, Arsen and Maksim are taking turns smoking the water pipe.');
    scene.text('"All done, boys?" she grins. "Look, Maksim is done with the upload. Let\'s see how we did!"');
    scene.text('You see a foreign porn website on the computer screen. A picture of your sperm-filled mouth is very prominent on it. The image set has already been downloaded several hundred times!');
    scene.text('"You\'re going to be a big hit in Germany!" Maksim winks. "Just kidding. It\'s a German amateur website, so no one in Russia will find it. Your secret is safe!"');
    scene.text('Before you can say anything, Jenya grabs you by the arm and pulls you to the door. "So… Maybe we\'ll see you soon, \'porn star\'!" she grins while pushing you out of the apartment before giving you one last kiss and closing the door behind you.');
    scene.actions([
      { label: 'Return to the streets', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'I can\'t stay', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('"Sorry, but I can\'t stay," you reply while shaking your head.');
    scene.text('She pouts, but nods understandingly. She gets up to give you one last kiss. "You were so much fun and I loved having you around! Maybe I\'ll see you again?"');
    scene.text('"Maybe. I deliver mail every week!" you smile as you put your clothes back on.');
    scene.text('When you walk through the living room on your way out, you see Maksim and Arsen sitting at a desk in front of the computer screen again. They browse back and forth between images of your sperm-filled mouth, trying to decide on which is the best one. You probably don\'t want to know what they\'re going to do with those…');
    scene.text('You decide not to disturb them and leave the apartment.');
    scene.actions([
      { label: 'Return to the streets', goto: ['pav_residential', ''] },
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

function enter3(s: GameState, scene: SceneBuilder): void {
  ((s as any).post_vars = (s as any).post_vars ?? {})['qw_3'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A108');
  scene.img('images/locations/shared/postoffice/sex/postevent3-2.jpg');
  scene.text('"I knew you\'d come back," the man grins when you return to his house. "Something in your eyes told me you like being a little slut even more than I like having one around. Come in."');
  scene.text('You give the man a weak smile and enter his house. There\'s no turning back now.');
  scene.text('He takes you by the arm and guides you to his bedroom, where he strips and lies down on the bed. "Strip and join me," he orders. "Play with my cock while we talk."');
  scene.text('You nod and take your clothes off before you sit on the bed and wrap your fingers around his shaft.');
  scene.text('"So, girl… Tell me. Who are you and why are you here holding the cock of a man you\'ve just met?" he asks sharply, letting out a satisfied groan when you start moving your hand slowly. His cock is definitely not small, that\'s for sure!');
  qspCall(s, 'arousal', 'hj', 5, 'prostitution');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: "Uhhh, I''m <<$pcs_firstname>>," you say. "And I''m here because…"
  scene.text(`"Uhhh, I'm ${((s as any).pcs_firstname ?? '')}," you say. "And I'm here because…"`);
  // TODO-QSP: end
  scene.actions([
    { label: '"I want what\'s in that package."', handler: (st: GameState) => {
    scene.text('"I want what\'s in that package."');
    scene.text('"I see. So you\'re a whore?" he remarks.');
    scene.text('When you\'re about to object, he continues. "You have sex with men and they give you something in return. That sounds like a whore to me."');
    scene.text('The man laughs when he sees your reaction. "Don\'t worry, I\'m not judging you. I love whores who know what they\'re doing. Make me happy and I\'ll make it worth your while. Show me what you can do with your mouth. Only your mouth, no hands."');
    scene.actions([
      { label: 'Please him with your mouth', goto: ['post_events', '3-1'] },
    ]);
  } },
    { label: '"I love cocks!"', handler: (st: GameState) => {
    scene.text('"I love cocks!"');
    scene.text('"Hah! My favourite type of girl!" he laughs, not expecting such a direct answer from you. "In that case: impress me. Take care of me and you\'ll get all the cock you want. And I\'ll take care of you. I love spoiling my little sluts. Go on. Show me what you can do with your mouth. Only your mouth, no hands."');
    scene.actions([
      { label: 'Please him with your mouth', goto: ['post_events', '3-1'] },
    ]);
  } },
    { label: '"I like being told what to do."', handler: (st: GameState) => {
    (st as any).postcuffs = 1;
    scene.text('"I like being told what to do."');
    scene.text('"Do you, now?" he grins evilly. "In that case, let\'s make this a little bit more interesting. Close your eyes, turn around and put your hands behind your back."');
    scene.text('You hear him rummaging in the nightstand drawer before you feel the cold touch of metal on your wrists. "Those are not coming off until you get me off. Start sucking."');
    scene.actions([
      { label: 'Please him with your mouth', goto: ['post_events', '3-1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter3_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).postcuffs ?? 0) === 1) {
    scene.img('images/locations/shared/postoffice/sex/postevent3-4.jpg');
  } else {
    scene.img('images/locations/shared/postoffice/sex/postevent3-3.jpg');
  }
  if (((s as any).stat ?? 0)?.['bj'] >= 50) {
    scene.text('You\'ve sucked cock many times before, and pull out every trick you know to best please him. He seems thoroughly impressed with your performance. Despite the thick head, you manage to take his cock all the way down your throat too, which impresses him even more.');
    scene.text('Finally, he grabs a firm hold of your head to keep it in place as several splurts of cum land on your tongue, after which he finally lets you go.');
    qspCall(s, 'arousal', 'bj', 15, 'deepthroat', 'prostitution');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A108');
    qspCall(s, 'stat', '');
    scene.text('"That was amazing!" he grins. "Even better than the last girl I had, and that was after months of training! You\'re definitely paying me a visit more often…"');
    scene.actions([
      { label: 'Continue', goto: ['post_events', '3-2'] },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['bj'] > 15) {
      scene.text('You have some experience giving blowjobs, but it\'s difficult to do without being able to use your hands!');
      scene.text('You do the best you can, but struggle when he tries to push more of his length down your throat. The thick head makes it very difficult.');
      scene.text('"Time\'s up!" he grunts and grabs a firm hold of your head. He starts fucking your mouth, roaring as he shoots his cum directly down your throat.');
      qspCall(s, 'arousal', 'bj', 15, 'sub', 'prostitution');
      qspCall(s, 'cum_call', 'mouth_swallow', 'A108');
      qspCall(s, 'stat', '');
      scene.text('"That… was decent," he says. "I\'ve had better, but we can make a good cocksucker out of you yet."');
      scene.actions([
        { label: 'Continue', goto: ['post_events', '3-2'] },
      ]);
    } else {
      scene.text('You swallow nervously when you see his cock dangling in front of you. It\'s bigger than you thought it would be!');
      scene.text('The man notices your hesitation. "Well? I said start sucking!"');
      scene.text('You try your best, but it\'s painfully obvious to him that you\'re no good at pleasing a man with your mouth.');
      qspCall(s, 'arousal', 'bj', 5);
      scene.text('After he feels your teeth on his cock for the second time, he pulls away and scolds you. "That was terrible! Wait here…"');
      scene.text('He walks away before returning with a ring gag. "Since you can\'t give a decent blowjob, you\'re going to wear this. Open your mouth."');
      qspCall(s, 'willpower', 'humiliation', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Beg him to let you try again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Beg him to let you try again', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/shared/postoffice/sex/postevent3-6.jpg');
    scene.text('You shake your head. "No, I can do it! Please let me try again! No need for that thing."');
    scene.text('He looks at you intently for a second, but puts the gag away. "Alright then," he sighs. "I\'ll give you one more chance. Get down on your knees in front of me."');
    scene.text('You do as he says and take the head of his cock back into your mouth, making sure to be careful with your teeth.');
    scene.text('Luckily, he lets you control the pace. While you occasionally try to take a bit more of his shaft in your mouth, you decide to play it safe and mostly just focus on the head, gently sucking on it and teasing it with your tongue.');
    qspCall(st, 'arousal', 'bj', 15, 'prostitution');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A108');
    qspCall(st, 'stat', '');
    scene.text('"Look at me!" he groans and a warm load of his cum fills your mouth seconds later. "That was better I guess, but rather half-hearted. Swallow," he orders as he strokes your hair with his hand. You do so without hesitation.');
    scene.text('"You have a lot to learn, but it\'ll be worth it!" he sighs contently. "You could become a good little slut for me, with some training."');
    scene.actions([
      { label: 'Continue', goto: ['post_events', '3-2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Open your mouth obediently', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent3-5.jpg');
    scene.text('You let the man put the ring into your mouth and wait obediently as he fastens it behind your head.');
    scene.text('When he guides his cock back towards your wide open mouth, you realize how little control you have now. You cough and splutter several times when he shoves his cock inside your mouth further than you can handle. He usually backs off just enough to give you a moment to recover, then continues to fuck your unexperienced throat.');
    scene.text('You feel relieved when you feel the man\'s cum splurting down your throat a few minutes later.');
    qspCall(st, 'arousal', 'bj', 15, 'sub', 'bound', 'prostitution');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A108');
    qspCall(st, 'stat', '');
    scene.text('"Don\'t feel bad, you did good!" he pants as he undoes the gag. "Not the blowjob itself, obviously. That was terrible, but you\'re not afraid to get a little kinky and continued to try and please me even when you were having a rough time. You\'re exactly the kind of girl I\'m looking for!"');
    scene.actions([
      { label: 'Continue', goto: ['post_events', '3-2'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter3_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'end');
  scene.img('images/pc/items/gm/school/11.jpg');
  scene.text('The man lies back down on the bed with a content smile on his face. After a few seconds, he remembers his promise and nods at the package on the table. "Go ahead, it\'s yours. Put it on. I want to see how you look in it."');
  scene.text('You open the package you delivered to his house earlier today and find a school uniform inside. You quickly try it on and check yourself out in the mirror.');
  scene.text('"Looks great on you!" he grins. When you turn around to look at him, he gets up from the bed and beckons you to follow him. He walks to another room and opens a closet, filled to the brim with girl\'s clothes! A lot of it is fairly high quality, but also rather skimpy.');
  scene.text('"I don\'t have time for girlfriends or wives," he states. "Too much nagging, too much drama. I get enough of that at work, so I don\'t need more at home. What I\'m looking for is a slut who simply does what I want, when I want."');
  scene.text('"My last little slut was too scared that her parents would ask questions about how she paid for all those new clothes, so she kept everything I bought her here," he continues, nodding at the closet\'s contents. "Then, one day, she stopped visiting. Turns out her parents found out about me fucking their precious little daughter and forced her to move away with them! Haven\'t heard from her since. Damn shame, too. She didn\'t know much when I first found her, but she was always so eager to please…"');
  scene.text('He shoots you a seductive smile. "Anyway, long story short: you like clothes, I have a closet full of them. And I like you. See where I\'m going with this?"');
  scene.text('You feel his hand sliding underneath your skirt and fondling your ass cheeks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/events/postwardrobe.jpg');
    scene.text('"Uhh…" you let the word linger in the air as you look at the closet full of clothes again. "I think so. You want me to…"');
    scene.text('"I want you to be my new slut," he says. His grip on your ass tightens and he pulls your body against his. His cock is already semi-hard again.');
    scene.text('"I don\'t know what it is about you, but…" he whispers before kissing your neck. "If you\'re a good little slut for me, everything in that closet could be yours. And more. I treat my sluts well."');
    scene.text('He then suddenly pulls away and dismisses you. "Anyway, I have to go now. When I want you to come over, I\'ll send a letter to my house on Saturday. I assume you\'ll be the one delivering it?"');
    scene.text('With that, he enters the bathroom. Figuring he expects you to see yourself out, you quickly change back into your normal clothes and put your new outfit in a bag.');
    if (qspFunc(s, 'clothing', 'is_owned', 'gm_school', 11) === 0) {
      qspCall(st, 'clothing', 'add_item', 'gm_school', 11);
    }
    scene.actions([
      { label: 'Leave his apartment', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  ((s as any).post_vars = (s as any).post_vars ?? {})['qw_4'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcgeneratec', '', 0, 'Sleazy man', 38);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/shared/postoffice/sex/postevent4-3.jpg');
  scene.text('With a deep sigh, you drop your bag. "Fine. Just promise you won\'t report me?" you ask and he smiles benevolently. "You have my word. Come, this way."');
  scene.text('He tosses the envelope aside and guides you to his bed, where he lies down on his back. You\'d swear his erection looks like it\'s throbbing with anticipation as it pokes up into the air.');
  scene.text('You wrap your fingers around his shaft and start stroking his cock, causing the man to moan softly. Still, a few minutes later he looks no closer to his orgasm than when you started.');
  qspCall(s, 'arousal', 'hj', 5);
  qspCall(s, 'stat', '');
  scene.text('Surprised by his stamina, you give him a questioning look and he grins at you. "I never said it\'d be easy! Maybe you have to try a little harder…"');
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    scene.actions([
      { label: 'Use some lubricant to get him off faster', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/locations/shared/postoffice/sex/postevent4-6.jpg');
    scene.text('You stop jerking him off and reach for your things, quickly squirting some lube into the palm of your hand.');
    scene.text('The man is trying not to show you any emotions and tries to keep you here as long as possible, but when you put your hand back on his cock and start stroking it again, he can\'t help but groan. Initially from the cold touch of the lubricant, but immediately after because it feels so much better!');
    scene.text('"Slow down! You\'re going to ma-" he moans, but his cock already is already spasming and his jizz slowly dribbles down his shaft.');
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.text('"I\'m going to make you cum?" you say with a sly grin. "That was exactly what I was trying to do. Now sign so I can go!"');
    scene.text('The man sighs and signs as promised. "I hope I\'ll see you again!" he says as you walk towards the door.');
    scene.text('"I hope not!" you yell back at him before you close the door behind you.');
    scene.actions([
      { label: 'Continue your round', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_intel ?? 0) > 70) {
    scene.actions([
      { label: 'Look around and try to figure out why it\'s not working', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    scene.text('How is he no closer to orgasming after all that you\'ve done?! This doesn\'t make any sense! Is he tricking you?');
    scene.text('When you quickly cast a glance at his nightstand, you see an opened tube. Wait, is that… numbing cream!?');
    scene.text('"Numbing cream!?" you shout, making the guy flinch. Your hand is still firmly wrapped around his cock and he groans when you clench your fist in anger. He might\'ve numbed the head of his cock with it, but the way you\'re squeezing his cock and balls instantly puts the fear of God into him.');
    scene.text('"I-I\'m sorry!" he shouts. "I thought it wo- ow! Oww! Please let go! I\'ll sign! I\'ll sign your thing! I won\'t bother you ever again!"');
    qspCall(st, 'willpower', 'misc', 'force', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'That\'s not good enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'That\'s not good enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.text('"Not good enough!" you yell as you tighten your grip on his junk even more. "You take advantage of me while I\'m just trying to do my job!? How many girls have you degraded like this before me? I really should make you suffer…"');
    // TODO-QSP: dynamic text: "N-no! Please! I can pay! I''ll give you <<$func(''money'', ''string_profit'', 1...
    scene.text(`"N-no! Please! I can pay! I'll give you ${qspFunc(s, 'money', 'string_profit', 1000)}, just please let go! I won't bother anyone ever again! I promise!" he cries out. You'd swear he's nearly in tears now.`);
    scene.actions([
      { label: 'Accept the money', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 1000);
    // TODO-QSP: dynamic text: "Now you''re talking!" you say menacingly. Without you even letting go, the man ...
    scene.text(`"Now you're talking!" you say menacingly. Without you even letting go, the man promptly reaches for his wallet on the nightstand and pulls out the ${qspFunc(s, 'money', 'string_profit', 1000)} he promised you.`);
    scene.text('You let go of his cock and balls to take the money from his trembling hand, causing the man to sigh in relief. "Oh thank God… I thought you were going to crush them!"');
    scene.text('"I was seriously considering it. And you definitely would\'ve deserved it. Now sign so I never have to see your face again!"');
    scene.text('He promptly signs and you leave his apartment. You didn\'t lose too much time over this, but you still have mail to deliver.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      { label: 'Make him suffer', handler: (st: GameState) => {
    ((st as any).post_vars = (st as any).post_vars ?? {})['qw_4'] = 1;
    scene.text('"I don\'t want your money…" you reply and clench your fist as hard as you can.');
    scene.text('The man cries out in pain and you know one thing for sure: he\'ll never try to blackmail a girl again.');
    scene.text('You no longer care about getting his signature, you\'d be more than happy to explain to the postmaster why this one is missing. You give him a knee in the groin for good measure. "Asshole! Are you going to complain about this!?"');
    scene.text('You\'ve reduced the man to a sniffling mess, curled up into a ball. "No… No… Please, just leave…" he whimpers.');
    scene.text('As you get ready to leave, you smirk at him. "A piece of advice: if you want to blackmail a girl, don\'t put your most delicate parts in her hands!"');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let go', handler: (st: GameState) => {
    scene.text('You give his balls one more angry squeeze before letting go. "You\'re damn right you won\'t bother me again!" you grin. "Now sign, unless you want me to tell the postmaster exactly why your signature is missing!"');
    scene.text('"Okay, okay!" he yelps and quickly signs before you can change your mind. He curls up into a ball after he signs, carefully caressing his junk.');
    scene.text('"You\'re pathetic, you know that?" you scoff and walk away. You don\'t know how many girls he tried to blackmail before you, but you\'re fairly sure you put an end to it just now.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show some skin to get him off faster', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/postoffice/sex/postevent4-4.jpg');
    } else {
      scene.img('images/locations/shared/postoffice/sex/postevent4-5.jpg');
    }
    scene.text('You wordlessly slip out of your clothes and the man grins triumphantly at you. "That\'s it, girl! Way to go the extra mile!"');
    scene.text('You ignore his comments as his eyes rove your exposed body.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('When he reaches out to touch you, you slap his hand away. "No touching! That was not part of the deal. Try that again and I\'m out of here!"');
      scene.text('He raises his hands apologetically and puts them behind his head while you resume jerking him off. A few minutes later, his breathing becomes more shallow and you can tell he\'s close to orgasming.');
      scene.text('You place your fingers around the base of his shaft and only very lightly brush one over his cock with a cruel grin until you see his cock spasm and shoot his cum straight up into the air, splattering onto his stomach.');
      qspCall(st, 'arousal', 'hj', 5, 'dom');
      qspCall(st, 'stat', '');
      scene.text('The man groans in frustration, but just as he\'s about to complain, you stop him. "You asked me to touch your dick, and I did. Now sign so I can go."');
      scene.text('He signs without saying a word, still a bit dazed on how you completely ruined his orgasm. You wipe your hand on his bed sheets and put your clothes back on.');
    } else {
      scene.text('You keep your bra on to at least remain somewhat decent. Just as you\'re about to put your hand back on his cock, he gets up from the bed and forces you down on your back before straddling you.');
      scene.text('"That\'s better… Keep stroking, girl!" he grunts as he pulls your bra aside. "You have nice tits and shouldn\'t be hiding them. Keep going!"');
      scene.text('Without realizing it, you\'ve started moving your hand again. Except this time, his cock is pointed straight at your face!');
      scene.text('"Yeah!" he grunts as several ropes of his warm cum land on the bottom of your chin.');
      qspCall(st, 'arousal', 'hj', 5);
      qspCall(st, 'cum_call', 'face', 'Sleazy man');
      qspCall(st, 'stat', '');
      scene.text('"Wow, you\'re fun! And horribly naive…" the man pants as he picks up the clipboard and puts his signature on the sheet. "There. I\'ll be seeing you again!"');
      scene.text('You try to ignore his triumphant grin as you put your clothes back on. At least the postmaster can\'t give you any trouble now…');
    }
    scene.actions([
      { label: 'Continue your round', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    { label: 'Use your mouth to get him off faster', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent4-7.jpg');
    scene.text('You don\'t want to seem too eager, so you restrict yourself to just licking the tip or sucking on the head of his cock from time to time while you keep stroking his shaft. His cock has a faint chemical scent to it at first, but you can\'t quite tell why.');
    scene.text('"Oh, what\'s this? Starting to enjoy yourself? Good girl, I knew you had it in you…" he says with a laugh.');
    scene.text('You ignore his remarks and just keep doing what you\'re doing. Once you get him off, you can be on your way and hopefully never see him again.');
    scene.text('It seems to be having an effect on him. His breaths grow shorter, he starts thrusting his hips towards your mouth. He can\'t hold back any longer!');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Don\'t let him cum in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent4-8.jpg');
    scene.text('You quickly take his cock out of your mouth when you realize he\'s about to burst, but can\'t prevent him from shooting his warm load all over your face.');
    scene.text('"Thaaat\'s a good girl…" he groans, definitely pleased with himself. "That\'s a nice look for you, but I guess you hear that a lot, huh?" he laughs.');
    scene.text('You feel around for something to wipe your face with, and eventually settle for his bed sheets. "I was going to wash those anyway," he shrugs. "Here\'s your signature. I\'ll be seeing you again soon, I\'ll make sure of it!"');
    scene.text('You quickly check your face in the mirror to see if you missed anything before heading out.');
    scene.actions([
      { label: 'Continue your round', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      { label: 'Make him cum in your mouth', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', 'Sleazy man');
    scene.img('images/locations/shared/postoffice/sex/postevent4-9.jpg');
    scene.text('You don\'t want his cum on your face or on your clothes. How would you explain that?');
    scene.text('Closing your lips tightly around the head, you flick your tongue over his cock a few times and feel his warm, tangy cum spurt against the back of your mouth.');
    scene.text('When he\'s mostly done, you let his cock slide out of your mouth and lick the head a few times, showing him his load on your tongue before swallowing it.');
    // TODO-QSP: dynamic text: "Oh wow! You''re… I''ve visited whores that weren''t as good…" he pants, simply ...
    scene.text(`"Oh wow! You're… I've visited whores that weren't as good…" he pants, simply amazed. He signs for his mail and gives you ${qspFunc(s, 'money', 'string_profit', 200)}. "Here, take this. If you ever want to make some extra cash during your round, you know where I live! Knock twice."`);
    scene.text('"Uhh, I\'ll keep it in mind," you tell him as you stand up to leave his apartment.');
    scene.actions([
      { label: 'Continue your round', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['post_deliveries', 'resume'] },
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
    case '1':
      enter1(s, scene);
      break;
    case '1-1':
      enter1_1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '2-1':
      enter2_1(s, scene);
      break;
    case '2-2':
      enter2_2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '3-1':
      enter3_1(s, scene);
      break;
    case '3-2':
      enter3_2(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const post_events: LocationDef = {
  name: 'post_events',
  title: 'You return to the man\'s house after you leave the post offic',
  region: 'other',
  enter: enter,
};
