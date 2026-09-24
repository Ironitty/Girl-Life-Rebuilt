import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDimkalina0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).dimbadgirl = 0;
  if ((!((s as any).dimlinaQW ?? 0))) {
    qspGoto(s, 'dimalina', 'dimkalina1');
  } else {
    if (((s as any).dimlinaQW ?? 0) === 1) {
      qspGoto(s, 'dimalina', 'dimkalina2');
    } else {
      if (((s as any).dimlinaQW ?? 0) === 2) {
        qspGoto(s, 'dimalina', 'dimkalina3');
      } else {
        if (((s as any).dimlinaQW ?? 0) === 3) {
          qspGoto(s, 'dimalina', 'dimkalina4');
        } else {
          if (((s as any).dimlinaQW ?? 0) === 4) {
            qspGoto(s, 'dimalina', 'dimkalina5');
          } else {
            if (((s as any).dimlinaQW ?? 0) === 5) {
              qspGoto(s, 'dimalina', 'dimkalina6');
            } else {
              if (((s as any).dimlinaQW ?? 0) === 6) {
                qspGoto(s, 'dimalina', 'dimkalina7');
              } else {
                qspGoto(s, 'dimalina', 'dimkalina8');
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

function enterDimkalina1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).dimlinaQW ?? 0))) {
    (s as any).dimlinaQW = 1;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D1.jpg');
  scene.text('With reluctance, you remove your clothes and watch Dimka carefully as he shows you a package. Inside there is a rubber ball with leather straps.');
  scene.text('"You know what it is, slut?"');
  scene.text('Swallowing hard, you nod your head in agreement. "A ball gag?"');
  scene.text('"That\'s right! I was wondering what perverted shit a slut like you would want as a gift, and here it is, all for you. But before that, take this." In his hand, there is a pair of pink pills. Just as you open your mouth to question him, he shoves the pills in. You try to push them out, but Dimka immediately stuffs the ball gag into your mouth and straps it in. It\'s so big, you begin to think that he chose the wrong size as your jaw starts to hurt.');
  scene.text('"Now look at this, whore," He says as he opens the closet door.');
  qspCall(s, 'pain', '2', 'jaw', 'bind');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look inside the closet', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D2.jpg');
    scene.text('You hesitantly walk over and peer inside. You are… not sure what he was doing until you see the chains. What the hell? The sick fuck has improvised a bondage set in his closet.');
    scene.text('"Ahh… Why that face?. And to think I spent all this time making this lovely gift for you!" He sighs. "Don\'t worry I\'m sure you will learn to appreciate it. So… come on, get in."');
    scene.text('You\'re looking apprehensively at the chains and start to consider making a run for the door when Dimka\'s mobile sounds. Quickly, he answers the call.');
    scene.text('"Dimka here… Hm… Oh…? You\'re on your way…? Hm… What…? No…! Of course, no…! Yeah, I\'ll be waiting."');
    scene.text('With an enthusiastic smile, Dimka shoves you into the closet and chains you up, even taking a moment to admire his work. The chains hurt you and the position doesn\'t let you relax.');
    scene.text('"Alright, this is what is about to happen: I\'m going to close the door, and if I hear a <i>single</i> sound from you during this visit, you will be punished. Understood?"');
    qspCall(st, 'willpower', 'humiliation', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Shake your head in disagreement', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Shake your head in disagreement', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('He smiles down at you. "You will learn to obey me, slut, you will learn." He tightens the chains around your throat until you can\'t breathe. Shaking, you fight to breathe as your vision starts to darken. Finally, he releases the chains and shuts the door as you sit there coughing and teary eyed. You focus on catching your breath and After a while you take notice to Dimka going about his business as usual on the other side of the door. You are just a toy for him, to fuck, hurt and forget.');
    scene.text('"Come in and make yourself comfortable."');
    scene.text('Spying through a slit in the closet door, you see the new guest and you recognize her as Avelina Starov. Judging by her expression, she seems unimpressed and leery of being in Dimka\'s room.');
    scene.text('His eyes do a superficial sweep of the room and during a moment his eyes meet yours. Maybe it\'s the drug but you are sure that he winks at you.');
    scene.text('for a while, the two of them talk about trivialities. When the conversation comes to a pause, he leans closer and presses his lips against hers, the kiss quickly deepening as they start making out. While they kiss, he tries to slip his hands beneath her top, hoping to grope at her breasts but she stops him. That sudden move kills the mood and the two of them seems unsure of what to do until Dimka finally breaks the awkward silence.');
    if (((st as any).pcs_health ?? 0) > 20) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    }
    if (((st as any).pcs_mood ?? 0) > 5) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    qspCall(st, 'npc_relationship', 'modify', 'A1', 'loathe');
    qspCall(st, 'pain', '3', 'throat', 'choke');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen carefully', goto: ['dimalina', 'Listen'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Nod in understanding', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('You obediently agree to follow his command before the door is finally shut. You sit there. Silent. Thinking. Hearing Dimka go about his business as if you weren\'t there. You are just a toy for him, to fuck, hurt and forget.');
    scene.text('"Come in and make yourself comfortable."');
    scene.text('Spying through a slit in the closet door, you see the new guest and you recognize her as Avelina Starov. Judging by her expression, she seems unimpressed and leery of being in Dimka\'s room.');
    scene.text('His eyes do a superficial sweep of the room and during a moment his eyes meet yours. Maybe it\'s the drug but you are sure that he winks at you.');
    scene.text('for a while, the two of them talk about trivialities. When the conversation comes to a pause, he leans closer and presses his lips against hers, the kiss quickly deepening as they start making out. While they kiss, he tries to slip his hands beneath her top, hoping to grope at her breasts but she stops him. That sudden move kills the mood and the two of them seems unsure of what to do until Dimka finally breaks the awkward silence.');
    if (((st as any).pcs_mood ?? 0) > 10) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    qspCall(st, 'npc_relationship', 'modify', 'A1', 'like');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen carefully', goto: ['dimalina', 'Listen'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterListen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D4.jpg');
  scene.text('"Hey, can I show you something?" Before Lina can reply, he jumps off the bed and goes to his desk. After some rummaging, he returns with an HD digital camera. "Pretty cool, isn\'t it? Come on, let me show you what it can do!" He points the camera at Lina with the expectation that she start modeling for him.');
  scene.text('Lina bites her lips and look around the room. It\'s evident that she doesn\'t want to at first, but eventually she begins to pose in playfully and innocent ways, following Dimka\'s suggestions. As you watch, the drug in your blood kicks into high gear and you begin to get aroused and your mind drifts to inappropriate thoughts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D5.jpg');
    scene.text('"Hey! I have an idea…" Lina is sitting on her knees with a puzzled expression as Dimka moves closer and suddenly starts to pull her top up, revealing her bra before she can properly react and stop him.');
    scene.text('"Hey! What are you doing?!"');
    scene.text('"You have an amazing body, you should show it off more, Lina. None of the other girls at school can compare, not even Christina!" Dimka reassures her, which seems to be working as she relaxes slightly. "Don\'t worry, I\'d never show anyone this, but I just can\'t help it… you\'re so beautiful! You don\'t need to take anything else off…');
    scene.text('Lina shifts nervously, her cheeks flushed slightly after hearing Dimka\'s confession. After a moment of consideration, she slips out of her bottoms, sitting there in sweater and panties as he continues to film her. Back in the closet, you try to ignore your drug-induced arousal but it gets more and more difficult. In the back of your mind, images and sensations pop up. You… Need… To… Do… Something…');
    qspCall(st, 'arousal', 'voyeur', 5, 'bound');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'dimalina', 'Help');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep Watching', goto: ['dimalina', 'watch'] },
      { label: 'Fantasize about… Lina?!', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/F1.jpg');
    scene.text('You break the chains and overpower Dimka, then take Lina in your arms and get out of there as fast as possible. Far away from that psychopath, you embrace Lina and admire her as she stands there in your arms, wearing nothing but a sexy set of lingerie. "Please make me your bitch and do whatever you want!" Lina begs you. Your hands drift to her bottom and caress the taut flesh, making Lina moan. You kiss her and smile. As you push one hand under her panties, she freezes and opens her legs slightly to make it easy for you to caress between her thighs. She moans, cries, and whimper as you expertly drive her to orgasm after orgasm. But this isn\'t the end. You pause for a moment, she looks at you with tired and puzzled eyes. After a moment she gasps in shock and pain as you begin to finger-fuck her asshole…');
    scene.text('You blink as your mind awakens from the sudden daydream. During your sex-crazed haze, Dimka seems to has moved Lina to a new position. She kneels on the bed before him.');
    qspCall(st, 'arousal', 'voyeur', 5, 'bound');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'dimalina', 'Help');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep Watching', goto: ['dimalina', 'watch'] },
    ]);
  } },
      { label: 'Fantasize about… Dimka?!', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/FD1.jpg');
    scene.text('Dimka kneels before you, he is your bitch, but you aren\'t happy. He doesn\'t know how to lick boots properly like a bitch should. This is unforgivable and only serve to piss you off. "Seriously? Why must I waste my time helping a little sick fuck like yourself? Come on!" You firmly kick him aside and he lays there, staring up at you with a pathetic look. "Poor little pet…" You sigh. "A good mistress must educate her wards. I\'m far too good for you, you realize that, right?" You sit in a chair and let him clean them slowly and a bit sloppily. Why… won\'t… he… learn?! You whip his back and he lets out a strained whimper. After trying to get him to clean your boots again you realize… he\'s doing it on purpose! Of course, he\'s a bratty little bitch. He\'s getting off on this, but he knows better to ask for release. If he wants it so bad, then it seems like some pegging will be in order, but he won\'t get his release so easily. With a smile, you relax and recline in your chair and watch a nervous Dimka who doesn\'t realize what\'s going to happen next…');
    scene.text('You blink as your mind awakens from the sudden daydream. Dimka seems to has moved Lina to a new position. She kneels on the bed before him.');
    qspCall(st, 'arousal', 'voyeur', 5, 'bound');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to help her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'dimalina', 'Help');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep Watching', goto: ['dimalina', 'watch'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHelp(s: GameState, scene: SceneBuilder): void {
  (s as any).dimbadgirl = 1;
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
  scene.text('You\'re lost in a lust filled haze and your mind drifts… but, you must help her. You need to clear your mind somehow. With very little options, you start to twist your wrist in the chains until the pain sobers you up enough to let out a loud whimper.');
  scene.text('"What is that?" Lina seems startled as your painful moan is faintly heard. But Dimka will not be stopped so easily.');
  scene.text('"That? Oh fuck… that\'s uh… I think that\'s just a local dog. A lot of people around here own dogs and I hear them all the time!"');
  scene.text('"Oh… Look Dimka, I don\'t feel like…"');
  scene.text('"Hey don\'t worry, just relax. Here, I\'ll put on some music, trust me you\'ll love it!" Dimka puts on some music, drowning out your muffled cries. After a short moment, they\'re continuing where they left off until Lina is left kneeling on his bed. He stops and walks toward her, his erection very clearly pressing against his pants.');
  scene.text('"Lina… Can you…? I mean…"');
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'loathe');
  qspCall(s, 'npc_relationship', 'modify', 'A19', 'adore');
  if (((s as any).pcs_health ?? 0) > 20) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (20);
  }
  if (((s as any).pcs_mood ?? 0) > 5) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  qspCall(s, 'pain', '2', 'wrists', 'bind');
  qspCall(s, 'pain', '2', 'mouth', 'bind');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch helplessly', goto: ['dimalina', 'watch'] },
  ]);
  scene.build();
}

function enterWatch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D7.jpg');
  scene.text('Lina sits there quietly observing him as he caresses her hair and for a long moment nothing move in the room.');
  scene.text('"You don\'t need to do this." Hearing those words muttered from his mouth sound so foreign to you. You wish that Lina would see what he was doing and leave, but she is too tangled in the inertia to really stop now. She doesn\'t respond but it doesn\'t matter. Dimka takes her silence as an invitation as he takes his cock out of the pants and brings her hand over into his lap to have her start caressing his shaft. Dimka is in heaven and can only grunt as the handjob relieves him of his pent-up needs. Between grunts he instructs Lina.');
  scene.text('"Come on babe, faster!!"');
  scene.text('Lina starts stroking faster and he can only cry in satisfaction.');
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'This should be over soon…', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D8.jpg');
    scene.text('Without warning, Dimka grabs at her top and pulls it up to reveal her tits. Lina reacts poorly but is too slow to do anything as she was focused on stroking him. "Hey… What are you doing?"');
    scene.text('"Dimka groans, "I don\'t want to get your clothes dirty!"');
    scene.text('She just bites her lip and lets him roughly undress her of what is left of her clothes.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch helplessly', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D9.jpg');
    scene.text('He shoves her backward but Lina doesn\'t resist as she looks at him with a perplexed expression. Finally, he begins to masturbate over her and with a cry of pleasure, shoots his load onto her mouth and chest. She lays there frozen with her eyes closed while Dimka falls at her side with a contented sigh. Finally, without saying a word Lina gets up and awkwardly hurries to the bathroom trying not to spill his jizz. Dimka sits there with a happy smile, then looks in your direction and gives a knowing smirk and wink. Lina returns after a while cleaned and redressed.');
    scene.text('"…Dimka I should go."');
    scene.text('"What? Oh… Listen I… I\'m sorry for screwing this up, I hope you don\'t hate me…"');
    scene.text('She gives him a little smile but doesn\'t say anything…');
    scene.text('"Well… call me, okay?"');
    scene.text('She nods slightly but that\'s all before she finally leaves.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for Dimka', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'pain', '1', 'neck', 'bind');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    if (((st as any).dimbadgirl ?? 0) === 1) {
      scene.text('After that, Dimka opens the closet and you look up at him to see him smirking down at you.');
      scene.text('"You really are a useless whore, aren\'t you?!" You expect him to hit you, so you flinch, but there\'s no impact. Instead Dimka walks behind you, and you begin to sweat and tremble as… Fuck! The chains get tense! Dimka is hanging you!');
      scene.text('"Come on Slut! You knew the consequences!"');
      scene.text('You struggle to maintain your footing as you fight to breathe. It feels like the moment stretches on forever, but it suddenly comes to an end when he loses his grip and lets you fall. As you lie there in a heap on the floor, he takes away the ball gag and chains.');
      scene.text('"Come on, get dressed and leave, I\'m only human and can\'t fuck you now."');
      scene.text('You groan and stand up on unstable legs. Your body hurts and you\'re still in a lustful haze. You get dressed as quick as you can and leave.');
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
      if (((st as any).pcs_mood ?? 0) > 5) {
        qspCall(st, 'mood', 'lower', 'small');
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBindpain(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'pain', '3', 'throat', 'choke');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
      (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 31) + 30));
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('After that, Dimka opens the closet and you look up at him to see him smiling down at you.');
      scene.text('"Well, it looks like you\'re not a complete dumb slut, but don\'t get confused: you\'re still just as worthless." He yanks the gag out and tugs you free from the chains. "Come on, get dressed and leave, I\'m done with you for today. I\'m only human, I can\'t be bothered to fuck you now."');
      scene.text('You groan and stand up on unstable legs. Your body hurts and you\'re still in a lustful haze.');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 1) {
    (s as any).dimlinaQW = 2;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D1.jpg');
  scene.text('You sigh… how bad is it that this doesn\'t bother you anymore? You don\'t care to resist him, especially if it\'ll just lead to you getting punished harsher later. With little hesitation, you start to take your clothes off.');
  scene.text('Dimka looks at you with a smirk, "Aw, what\'s wrong? Why the sad face, slut?"');
  scene.text('You don\'t respond, which makes him chuckle. "Don\'t worry, I know what you want and I have it right here!" He pulls out the ball bag in one hand and… those pink pills in his other hand. You stare at them for a moment as he holds them out to you.');
  scene.text('"Will… Avelina be here today?" You ask quietly.');
  scene.text('He raises a brow, "Worried you\'ll be replaced, whore?" he laughs, "She\'s my girlfriend now, so get used to it. You\'ll be seeing a lot more of her."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore him and undress', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D2.jpg');
    scene.text('You look at him and groan. All you want to do is wipe that smug smile off his face… permanently. With a resigned sigh, you take the pills before letting him put the ball gag on you. He then pushes you in the closet and begins to put you in chains. As he immobilizes you, Dimka takes his time, extracting as much pain from you as he can. The suffering only commences as arousal kick and the murkiness begins to send mixed signals to your brain. Finally, you are put in the setup and with a satisfactory smile Dimka observes his work.');
    scene.text('"Look at you, I can already see a puddle on the floor. You have absolutely no shame, hm? Well Slut, remember that I don\'t wanna hear you."');
    scene.text('He looks at you with his trademark shit-eating smile and closes the door. You close your eyes and cry, how the fuck did you end up like this?! Your mind is a mess, in pain but also painfully aroused. Despite that, you notice Dimka talking to someone…');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('"Hey, Lina welcome back!"');
    scene.text('"Thanks Dimka… "');
    scene.text('Dimka smiles and pulls out some photos to show her. "Look how cute your photos ended up, I can\'t believe it. You know, I think I\'m the luckiest man on earth to have such a beautiful girlfriend!"');
    scene.text('"Uh?"');
    scene.text('"Hey let\'s continue where we left!"');
    scene.text('"I don\'t know…"');
    scene.text('"Oh. Come on. Pretty please…"');
    scene.actions([
      { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D10.jpg');
    scene.text('You know that Lina has never been one to say "no" to people, so after a moment she sighs and begins to undress. Slowly and hesitantly, she slips out of her skirt, then kneels and bends over, putting her head on the floor with her butt in the air. He moves around Lina, taking snaps, but then stops.');
    scene.text('"This isn\'t working… Hm… Let\'s see." Dimka starts to pull at her panties and Lina tries to stop him, but he just yanks them down without hesitation.');
    scene.text('"Come on, you\'ll look great, I promise!"');
    scene.text('She finally resigns herself to being Dimka\'s model and lets him pull them down her thighs.');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'dimalina', 'distraction');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do nothing', goto: ['dimalina', 'watch2'] },
      { label: 'Fantasize about Lina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/F2.jpg');
    scene.text('Lina and You are kneeling on the floor. Your underwear is nowhere to be found. She smiles as your last bout of sex has confirmed that being your lover is the best decision in her life. With skilled fingers you tease her inner thighs, making her moan in frustrated anticipation. She begs, pleads and supplicates for more… and finally you caress her lower lips. She cums and the smell of her arousal fills the room. You begin a fast masturbation, giving her what she needs. She cums again and again under your expertise. Finally, you stop and look at her… waiting. Wasted, she asks you to make love to her.');
    scene.text('Sadly, the sound of Lina\'s voice puts a stop to your fantasy.');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'dimalina', 'distraction');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do nothing', goto: ['dimalina', 'watch2'] },
    ]);
  } },
      { label: 'Fantasize about Dimka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/FD2.jpg');
    scene.text('What the fuck is wrong with him? Why doesn\'t he understand that this is all he is good for: licking your boots. You\'re tired of him trying to be coy. You could be doing so much more, be instead you have to sit here and train him to be a proper sub bitch. Dimka must sense your growing frustration with him because you hear him whimper and tremble. Not in the mood for his games, you take your other foot and step on his fingers as he kneels beneath you on all fours. You ignore his cries of pain, instead you look out a nearby window and notice a couple walking by. The two are smiling, the woman is giggling and hanging on to him while they whisper to each other. You know as soon as they\'re alone, they\'ll be fucking each other, and the thought of that makes you both jealous and a bit horny. You wanted to have some fun today, but no, instead you have to deal with this.');
    scene.text('Sadly, the sound of Lina\'s voice puts a stop to your fantasy.');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cause a distraction', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'dimalina', 'distraction');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do nothing', goto: ['dimalina', 'watch2'] },
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

function enterDistraction(s: GameState, scene: SceneBuilder): void {
  (s as any).dimbadgirl = 1;
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
  scene.text('Your mind is working against you, even if you aren\'t sure what\'s really happening right now. You need to help Lina! With a groan, you struggle against the chains, causing them to rattle and shake.');
  scene.text('"Shit…!" Dimka curses under his breath.');
  scene.text('"Something wrong?" Lina asks but Dimka reassures her there isn\'t a problem.');
  scene.text('"I think something just fell. Give me a second to check…" He quickly leaves Lina before she has time to ask him anymore questions. Entering the closet carefully so she doesn\'t see anything, he strangles you and whispers in your ear, pretending to be picking something up from the floor. "Shut up, slut! If you keep this up, I will beat you so badly you\'ll end up in the emergency room, understand?"');
  scene.text('Breathless you nod in understanding. He rises, trying to calm his rising fury, but luckily for you, he knows he can\'t leave his "girlfriend" alone for too long so he leaves quickly and returns to a confused Lina who has had enough time to put her panties back on…');
  scene.text('"Don\'t worry! Something just fell off the shelf in there," he tells her, but she seems unconvinced. Quickly he follows up it up, "I didn\'t want to tell you, but… it\'s a present I\'ve been getting ready for you. I had to make sure it didn\'t get messed up."');
  scene.text('Lina looks at him then the closet and finally the door. She\'s not buying it and wants to leave! Good! But Dimka isn\'t going to lose her so easily. He moves closer to Lina and caress her hair.');
  scene.text('"Look Lina… can we just start over? I don\'t want things to end likes this… come here, babe." Dimka pulls her closer into a deep kiss and all her doubt seems to melt away as they make out. By the end of it, Lina doesn\'t say anything, she just grabs his zipper and takes out his dick before she starts to stroke him.');
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (20);
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'loathe');
  qspCall(s, 'pain', '3', 'throat', 'choke');
  if (((s as any).pcs_mood ?? 0) > 10) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her jerk him off', goto: ['dimalina', 'cums1'] },
  ]);
  scene.build();
}

function enterWatch2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D11.jpg');
  scene.text('"Like this, Dimka?"');
  scene.text('He groans, "Oh yeah… just like that, keep going." You didn\'t notice until now that they\'ve moved to the bed, where Lina has been giving him a handjob. As he calls her his girlfriend, you think she seems excited as she spits onto his cock and pumps him a bit faster, but judging by the look of discomfort, it\'s obvious she did that to distract him so he doesn\'t call her that again.');
  scene.text('"Fuck… that\'s much better!" Dimka then caresses the back of Lina\'s head as his face twists with pleasure.');
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her jerk him off', goto: ['dimalina', 'cums1'] },
  ]);
  scene.build();
}

function enterCums1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D12.jpg');
  scene.text('"Please Lina… fuck… can you use your mouth?"');
  scene.text('Lina looks at him only for a moment, and with a quickness that shows she just wants this over and done with, she takes his dick into her mouth and starts to suck him. He grunts in obvious pleasure, as Lina begins a slow-paced blowjob.');
  scene.text('"Yes… You… Hmf…"');
  scene.text('She moves faster, making Dimka breath quicken. Your altered mental state can only raise your arousal, as the scene, more proper on a porn video play before you. He is reaching his climax and quickly pushes her head away so she can stroke him until he\'s finally shooting his load all over her face. You groan in frustration as your own release is negated by the chains on your hands and legs.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D13.jpg');
    if (((st as any).dimbadgirl ?? 0) === 1) {
      scene.text('The groan must be louder than you expected, as Lina turns her cum covered face in your direction. You freeze, thinking what Dimka is going to do to you. Lina quickly leaves to the restroom, leaving a satisfied Dimka alone. She doesn\'t seem to return and after a while it\'s evident that she left the house. With a scowl he looks at your direction in the closet. Struggling against the drug arousal and the numbness in your limbs, you try to stay calm, but tears find their way to your eyes. After some time Dimka opens the closet and without warning gives you a hard slap across the face. You let out a muffle cry, but it doesn\'t faze him in the slightest. "I told you to be quiet, slut. It cost me a lot to get her to this point, I won\'t let you fuck it up!"');
      scene.text('After a moment of him standing over you, watching you whimper and tremble, he unchains your and removes the gag. You can barely stand, numbness in your limbs making the task nearly impossible. "Alright, get dressed and get out." Dimka doesn\'t even stop to see you redress as he beings to look through his new collection.');
      if (((st as any).pcs_mood ?? 0) > 10) {
        qspCall(st, 'mood', 'lower', 'small');
      }
    } else {
      scene.text('The groan must be louder than you expected, as Lina turns her cum covered face in your direction. You freeze, thinking what Dimka is going to do to you. Lina quickly leaves to the restroom, leaving a satisfied Dimka alone. She doesn\'t seem to return and after a while it\'s evident that she left the house. With a puzzled expression, Dimka opens the closet.');
      scene.text('"Fuck… That was great! She\'s so much better than you. This is why you\'re just the slut and she\'s my girlfriend." Dimka laughs down at you. "It was worth it taking my time to get her to this point, definitely worth the wait." He starts to unchain you and remove the gag, but it doesn\'t help much. You can barely stand, numbness in your limbs making the task nearly impossible. "Alright, get dressed and get out." Dimka doesn\'t even stop to see you redress as he beings to look through his new collection.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBindpain(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).pcs_mood ?? 0) > 5) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    if (((st as any).pcs_health ?? 0) > 20) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    }
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 2) {
    (s as any).dimlinaQW = 3;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D1.jpg');
  scene.text('You stand there looking at Dimka and with a resigned sigh, you begin to strip down. In a twist, he doesn\'t seem to take much interest in what you are doing, he\'s is concentrated on his computer. For a long moment, you sit there on the floor, feeling a bit troubled. Finally, taking a peek over his shoulder, you see several images of the room taken from different angles. Damn… the little sick fuck must have put more cameras. Without looking at you, he speaks. "Ok… Prepare yourself." Barely looking at you, he passes you the pills and the gag ball.');
  qspCall(s, 'willpower', 'drugs', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Hide the pills', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Hide the pills', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D2.jpg');
    scene.text('Gritting your teeth, you look to Dimka. He\'s distracted adjusting some settings, so you throw the pills into your clothes and hide them. Relieved that he hasn\'t noticed, you put on the gag ball. Fortunately, this time it\'s you who put this thing on and manage to do so without hurting your jaw. Dimka ends what he was doing and looks at you with an expression of satisfaction on his face.');
    scene.text('"Look Slut, if you behave, the next time I will give you a gift. OK?"');
    scene.text('You wordlessly agree by nodding, and he seems satisfied. As usual he chains you up in the closet but weirdly, today he seems genuinely in a good mood. You wait there as Dimka prepare the cameras in the room.');
    scene.actions([
      { label: 'Watch', goto: ['dimalina', 'watch3'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the pills', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D2.jpg');
    scene.text('You are trapped and without options. Gritting your teeth, you take them. After eating the pills, you put in the gag. Fortunately, this time it\'s you who put this thing on and manage to put it on without hurting your jaw. Dimka ends what he was doing and looks at you with an expression of satisfaction on his face.');
    scene.text('"Look Slut, if you behave, the next time I will give you a gift. OK?"');
    scene.text('You wordlessly agree with a nod, and he seems satisfied. As usual he chains you up in the closet but weirdly, today he seems genuinely in a good mood. You wait there as Dimka prepare the cameras in the room.');
    scene.actions([
      { label: 'Watch', goto: ['dimalina', 'watch3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatch3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
  scene.text('"Dimka! Lina is here and wants to talk to you!" After his mother calls him, he leaves the room and for some time you\'re left there in silence until finally, you hear a muffled voice on the other side of the door.');
  scene.text('"Look I\'m sorry, can we… can we talk about this?"');
  scene.text('"I\'m sorry Dimka, it\'s just that… I like someone else and this can\'t work."');
  scene.text('"Right… well we can still be friends, can\'t we? Stay for a bit, have a drink and hang out."');
  scene.text('After that, he leads Lina into his room and leaves her for a while before returning with two sodas. The two of them seem on edge as they sit in silence sipping on their drinks. You notice Lina begins to rub her legs together as her breathing gets a bit heavier. You quickly recognize her actions as ones you\'ve done before… there is no mistake: Lina was slipped those same pink pills, no doubt put in her drink. Groaning she begins to stand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'She is drugged…', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D14.jpg');
    scene.text('"Hmm… I think… That… Hm?" She stands and then stumbles a bit before falling back onto the bed. Dimka sees his chance and gently guides her to lay down. She tries to fight back, but it only results in her being positioned onto her stomach by him. Smiling, he puts his hands under her skirt and slides her panties down to her thighs. Lina lets out a breathy moan as she looks back at him in confusion and arousal.');
    scene.text('"I know how to make you behave…" Dimka whispers to her before he begins to unzip the front of his jeans. You close your eyes for a moment…');
    scene.actions([
      { label: 'Dream of Lina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/F3.jpg');
    scene.text('You can hear Lina\'s cries of pleasure and a sudden image of her comes to mind. She is on all fours moaning as you massage lube into her tight little ass. She looks at you with concern, but you know what to do, you are going to fill that cute hole with the beads. Your fingers were only the beginning. You lick the beads and spread her cheeks. When you begin to push, she gasps, cries and clenches her teeth as she adjusts to the toy and slowly starts to enjoy the feeling. You smile knowing that by the end of this, she\'ll be the perfect anal slut for you.');
    scene.text('Just as you begin to thrust the beads in and out of her ass a bit, you\'re pulled back to reality by the sound of grunting from Dimka');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lina is defiled…', goto: ['dimalina', 'linadefiled'] },
    ]);
  } },
      { label: 'Dream of Dimka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/FD3.jpg');
    scene.text('Seeing Dimka drug and rape Lina, your mind drifts and you\'re comforted by a dream much better than the reality you\'re currently facing.');
    scene.text('You are too good for this bitch. Eventually, you resign to indulging the little shit and have him worship your honey pot. He kneels and licks your sacred pussy and clit, causing you to squirm a bit with pleasure in your seat. Of course you are not going to oblige him, saying that it feels good. He isn\'t a lover. But for the moment, he can continue trying to appease you…');
    scene.text('Just as the pleasure begins to build closer to your climax, the needy moans of Lina bring you back to reality.');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lina is defiled…', goto: ['dimalina', 'linadefiled'] },
    ]);
  } },
      { label: 'Continue to watch them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D12.jpg');
    scene.text('Pulling out his cock, he grabs Lina\'s hair and holds her in place as he slaps his cock against her face. The mask of shyness and awkwardness is gone, and his true face resurfaces. "From now on, you are no longer Lina. You are Little Slut. Understood?!"');
    scene.text('"No… I…"');
    scene.text('Dimka just smiles and pushes his dick against her lips, trying to force them open. Lina resists for as long as she can, but you can see her will to fight leaving her body as the drugs take effect. His member pushes between her lips and he quickly slides deeper and deeper into her mouth.');
    scene.text('"Oh… Yeah!"');
    scene.text('He proceeds to take a good hold of Lina\'s head and begins forcefully skull-fucking her. Breathless and straining in pain to keep up, Lina hits him but there\'s no strength behind it.');
    scene.text('"Hey… be grateful! I\'m just lubricating my dick unless you want me to go in dry, huh?!"');
    scene.text('Scared of what that would mean for her, she submits and grabs his cock, beginning a furious blowjob. Finally, Dimka releases her then proceeds to undress her and himself further. He pushes her back onto her stomach again and lifts her ass as he aligns his cock with her pussy.');
    qspCall(st, 'arousal', 'voyeur', 5, 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lina is defiled…', goto: ['dimalina', 'linadefiled'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLinadefiled(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D15.jpg');
  scene.text('"Agh… No… Please…" Her "distressed" cries for him to stop end up sounding more like moans of pleasure as he slips inside her.');
  scene.text('"Come on help a little… Move your ass!" He demands. She follows his commands but in a desynchronized form. Her mind trapped between the induced lust and the need to escape.');
  scene.text('"That\'s better!"');
  scene.text('Dimka is near the end and you expect him to cum inside her but instead he suddenly pushes her away and begins stroking fast and hard in front of Lina\'s face.');
  // TODO-QSP: end
  scene.actions([
    { label: 'He cums all over her…', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D16.jpg');
    scene.text('"Open your fucking mouth!"');
    scene.text('Lina obeys and even manages to give him a lick before he cums onto her exposed tongue.');
    scene.text('"Uff… That was great!"');
    scene.text('for a while, Lina doesn\'t move. She lies there breathing heavily, staring blankly ahead as she processes what just happened. Finally, she gets up and shakily redress. It isn\'t until she\'s mostly done getting dressed that she starts to cry, running out of the room whimpering. Dimka then opens the closet.');
    scene.text('"That was a close call, but dad says that he will not pay another abortion. Too bad, you know, I think she would make the perfect breeding material."');
    scene.text('He doesn\'t seem at all bothered with what has just happened. He actually seems quite happy with himself as he quickly removes your chains and gag.');
    scene.text('"Ok Slut, a deal is a deal. You\'ve been a good girl so I\'ll have a treat for you, but for now I\'m done playing with you, so get out."');
    scene.text('Silently you redress and leave.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBindpain(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'voyeur_sex', 10, 'bound');
    if (((st as any).pcs_mood ?? 0) > 10) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    if (((st as any).pcs_health ?? 0) > 20) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    }
    qspCall(st, 'npc_relationship', 'modify', 'A1', 'like');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 3) {
    (s as any).dimlinaQW = 4;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D1.jpg');
  scene.text('While you\'re undressing, he looks at you with calm, even placid eyes, the visage of a man that has everything he wishes. You hate him and at this moment, the only thing that can give you peace, is removing his eyes with your hands. Finally, you are naked and stand there waiting for his next fuckery.');
  scene.text('"You know, I think that we must talk about our relationship. I mean, you are the Slut and you met the future Miss Nosov… Hm… Well we will think about something."');
  scene.text('"Now for your present." He walks to you and shows you a roll of sticky tape. "Like I said, you have been good, so… I won\'t chain you today."');
  scene.text('He then proceeds to tie your hands and feet, leaving you delicately on the floor of the closet. You are a bit daunted by Dimka\'s sudden friendly demeanor and sit there in silence. He then closes the door and begins to prepare himself. Shortly after, Lina storms into the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'What\'s happening?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"What the fuck do you want, Dimka!?"');
    scene.text('He stands there with a surprised expression, he can\'t believe the tone of Lina. She is there oozing rage, completely different from her normal timid demeanor.');
    scene.text('Finally, Dimka seems to shake his stupor. "I\'m glad you ask, look at this."');
    scene.text('He passes the camera to her. You can see tears on her face and at that point, you know exactly what is happening in her head. Discouragement, rage, fear, shock…');
    scene.text('"If you don\'t do…"');
    scene.text('Slap!');
    scene.text('The sound of her hand hitting Dimka\'s face is deafening. He falls back and crashes down on the bed. At the same time, Lina takes the camera and smashes it on the floor. She turns and begins to run towards the door, but before reaching it, hesitates. She returns to grab what is left of the camera and leaves the room.');
    scene.actions([
      { label: 'Oh shit!', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('He slowly stands up with an expression of true rage on his face. He paces around the room clenching his fists, groaning and breathing heavily. Finally, he looks in your direction and a cold sweat runs down your back. He opens the closet and forcefully throws you on the couch where he begins to slap you.');
    scene.text('"You! It\'s your fucking fault! All of you! I\'m treating you like queens! And you do this to me!?"');
    scene.text('You cower, but your bound hands make it difficult. Finally, it looks like Dimka is out of steam and begins to undress. He starts looking for some kind of… Hook? With a ball at the end.');
    scene.text('"Time for your punishment, Slut!"');
    scene.text('He pushes you into a doggy position and shows you the hook.');
    scene.text('"You know what this is, stupid cow? It\'s an anal hook! Let\'s see if I can teach you some manners."');
    if (((st as any).succubusflag ?? 0) === 1) {
      scene.actions([
        { label: 'Succubus comeback', goto: ['dimalina', 'succubusdimka'] },
      ]);
    }
    scene.actions([
      { label: 'Endure', goto: ['dimalina', 'endure'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 4) {
    (s as any).dimlinaQW = 5;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D1.jpg');
  scene.text('During your undressing, you see that Dimka seems distracted. He constantly looks around the room, edgy, as if something bothers him. It even takes him some moments to realize that you are naked. On the floor near the closet, you see a new set of bondage gear. Leather and chrome, and your heart skips a beat when you realize it can\'t be for you.');
  scene.text('"Aright, into the closet," he simply orders.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get chained up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('Silently he begins to "help" you to put on the chains and ball gag, making sure that it hurts and does not let you rest. When he\'s finally done, you expect him to close the closet door but instead, he leaves it open. As he sits at his desk, you see him rubbing his hands. He seems strangely nervous as the minutes pass by and the two of you wait for… Lina to arrive.');
    // TODO-QSP: dynamic text: "Hm? <<$pcs_firstname>>!?" Lina can''t look away from you as she''s caught compl...
    scene.text(`"Hm? ${((st as any).pcs_firstname ?? '')}!?" Lina can't look away from you as she's caught completely off guard. Dimka smiles and that's when you understand that this was his plan.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>? No, her name is Slut, and like you, she is my bitch, and yo...
    scene.text(`"${((st as any).pcs_firstname ?? '')}? No, her name is Slut, and like you, she is my bitch, and you know why is that, Little Slut? Remember that little DVD that arrived at your home? Hm? What message accompanied it?"`);
    scene.text('Lina winces at his words and avoids Dimka\'s gaze, reddens and look out of the corner of her eye towards you');
    scene.text('"I don\'t fucking hear you Little Slut!"');
    scene.text('"That… If I don\'t come, and do whatever you like, you will show the… The video to everyone."');
    scene.text('"Good Little Slut! As a clarification, you are going to come here once a week, and remember, I\'ve made copies of everything and stored them somewhere safe. I\'m sure right now you\'re thinking of doing something, maybe telling the police? If you think that the police will help you, forget it. I\'m a minor and my father has money and a great lawyer. So… you understand?"');
    scene.text('Quivering and on the verge of tears, the only thing that she can do is agree.');
    scene.text('"Ok… Good… Now get naked!"');
    scene.actions([
      { label: 'Watch Lina obey her new master', goto: ['dimalina', 'linaundress'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 5) {
    (s as any).dimlinaQW = 6;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/dimkaroom.jpg');
  scene.text('The room is surprisingly clean and organized for a boys room. It is fairly tastefully decorated. Along one wall next to the bed is a wardrobe with mirrored doors, a small zebra pattern love seat sits along a wall near the bed. Next to the loveseat is a mini fridge and just above that on a shelf is a stereo system. There is also a desk with a desktop computer setup on it and a laptop laying nearby as well. All in the room seems pretty expensive. There are some drinks and chips on a low table. Sitting at the desk is Dimka, he apparently heard you open the door as he turns to face you as you walk in.');
  // TODO-QSP: dynamic text: As he sees you, an evil smile spreads across his face. "So good of you to join m...
  scene.text(`As he sees you, an evil smile spreads across his face. "So good of you to join me, ${((s as any).pcs_nickname ?? '')}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'What the fuck', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D24.jpg');
    scene.text('Dimka is looking at you expectantly, but you\'re not really sure what to do. You stand there awkwardly for a bit before he sighs. "There are no drugs, just sit and drink." He points to the glass filled with what you assume to be soda.');
    scene.text('You eye him suspiciously as you reluctantly grab the glass and take a seat in a nearby chair. Hesitating, you stare down into the glass, unsure if he\'s being genuine or if this is some king of sick trick.');
    scene.text('"Seriously…" He then proceeds to take your glass and take a sip. "Satisfied? There is nothing in there!"');
    scene.text('You sigh before finally taking a drink from the glass. As you thought, it\'s a sweet soda and from what you can tell, he may not have done anything to it. Looking back at Dimka, you see a small, satisfied smile spread across his face.');
    scene.text('"I feel a bit disappointed by your lack of trust. I mean, seriously, I just want to pass some time with you!"');
    scene.text('"Well… What did you want to talk about?" You ask.');
    scene.text('Dimka takes a drink from his glass, thinking over his answer.');
    scene.actions([
      { label: 'What is he planning…', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Well, I think that you have been a good girl lately, I figured I\'d give you a little break and enjoy some quiet time with my favorite girl."');
    scene.text('"Uhm… thank you." Why is he suddenly being so… nice? Is this just a trick to get your guard down? ');
    scene.text('"So tell me… how is your mother? I mean, the gossip is that she is quite a slut."');
    scene.text('Your expression hardens into a grimace. So this is what he was up to. "She\'s a happily married woman, so that rumor… well it\'s just that; a rumor."');
    scene.text('Dimka snickers, "Yeah right! Alright, you don\'t want to talk about that… so lets talk about what I should do next with my new Little Slut, hm?"');
    scene.text('"New…? You mean Lina?"');
    scene.text('His eyes light up with delight as he watches you make the horrific realization of Lina\'s fate with him. "Just like how I had to train you to be a good obedient girl, her performance as my girlfriend leaves a lot to be desired, so I\'ve been thinking I should train her to be something much better instead…"');
    scene.text('"I… I mean… I don\'t really know…"');
    scene.text('"I will admit," he starts as he leans back in his seat. "She\'s an amazing cocksucker, but she has no real personality, which means she\'s perfect to be molded into whatever I\'d like." Dimka smiles wickedly and chuckles. "At first all I wanted was for her to be my girlfriend, but after seeing how you\'ve turned out, I know I can train her into something even better than you. What do you think?"');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave her alone!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Leave her alone!"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('As soon as the words leave your mouth, Dimka\'s earlier haughty attitude shifts into something much more darker and dangerous. He straightens himself and leans forward a bit, his cold eyes staring right through you. "What was that, slut?"');
    scene.text('You avoid his gaze by looking down at your lap and quietly reply, "I just think… she isn\'t worth the trouble?"');
    scene.text('With a small smirk, Dimka goes to the closet and opens it. Inside lies Lina in chains, the skin around her restraints red and purple as she struggles to breath around the gag.');
    scene.text('"Oh? What do we have here? Take a look my Little Slut, it seems your friend has come to take your place. Well, I suppose you can go then…" Dimka proceeds to undo the chains and she falls to the floor gasping for breath. Red chain marks all over her body attest to the pain that must have suffered. Without looking at her, he takes out the anal hook that had been inside her and then takes off the gag and binding tape.');
    scene.text('"Get out of here before I change my mind"');
    scene.text('Lina looks at you with a mix of fear, gratitude and regret as Dimka orders you to get in the closet. You look at her and hope she leaves quickly as you take your place inside the closet. No longer hesitating, Lina grabs her clothes from a pile beside his bed and quickly puts on her top and bottoms and bundles the rest up in her arms before rushing out the room. Meanwhile, Dimka is too distracted be his rising fury with you to really care what she does. Instead he shoves you against the back wall of the closet as he starts to bind your feet and wrists with the sticky tape.');
    if (((st as any).succubusflag ?? 0) === 1) {
      scene.actions([
        { label: 'Your succubus instincts take over', goto: ['dimalina', 'succubusdimka'] },
      ]);
    }
    scene.actions([
      { label: 'Endure', goto: ['dimalina', 'endure'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"That… Sounds nice."', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Dimka gives you his patented shit-eating smile and hops up from the couch, startling you."');
    scene.text('"Oh… Really! You think she\'ll make a good Little Slut?"');
    scene.text('You look at him with a blank expression. Why is he so excited?');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, time is running short and I must do something. You may ...
    scene.text(`"Well ${((st as any).pcs_nickname ?? '')}, time is running short and I must do something. You may go now."`);
    scene.text('Not wanting to miss your chance, you proceed to leave his room. With one last glance back at him, you see he stands in the middle of the room smiling and looking to the closet. As you close the door of his room, you swear that you hear the noise of chains.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina7(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 6) {
    (s as any).dimlinaQW = 7;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
  scene.text('Undressing under the watchful eyes of Dimka, you notice his face full of scorn. Fuck… What have you done?');
  scene.text('"Into the closet, Slut." He practically throws you in, and immediately starts to bind you with the chains. They\'re painfully tight… so tight that you feel parts of you go numb as you sit there.');
  scene.text('"Ohh… does it hurt, Slut?" he asks mockingly as you wince in pain. "Let\'s play a game. Little Slut is coming and we are going to see how much she likes you. I don\'t want any interruptions from you, understand?"');
  scene.text('You nod weakly and he closes the door. You are barely capable of sitting up and the next minutes seem to drag on for an eternity as you struggle helplessly against the chains. Meanwhile, Dimka puts out a series of "toys" on his desk, just beside the chip and drinks he has out for Lina and him. When he\'s satisfied with how everything looks, he sits down and waits for her. Minutes past until finally Lina meekly enters the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to them chit-chat', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Hey Lina! How are you doing?"');
    scene.text('Lina\'s mind seems to be wandering as it takes her a moment to realize what he had said. "What? Oh, I\'m fine I guess."');
    scene.text('"Good!" Dimka replies back quickly.');
    scene.text('"Right…" she says quietly. "So… what did you want, Dimka?"');
    scene.text('"Well… I need to ask you something. Slut has been disobedient lately… More than usual, and I was thinking of teaching her a lesson. I wanted your help on figuring out what exactly her punishment should be…"');
    scene.actions([
      { label: 'Your fate is up to Lina…', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('Lina\'s eyes widen in disbelief at Dimka\'s proposition casually being brought up. She begins to look warily at the closet and bite her lips. It\'s obvious that she doesn\'t want to respond to that question, but Dimka has other ideas.');
    scene.text('"Let\'s be crystal clear, Lina. You are my girlfriend, and we are talking about a slut. So… What I am trying to say, is that you don\'t need to care about her. She will like anything you do, she\'s a slut after all, and you aren\'t like her. You don\'t need to fear anything… understand?"');
    scene.text('Lina seems to be processing what he\'s telling her and… Crap! She\'s considering what he said! Fuck! You now realize that maybe talking and being nice to her was important. A cold shiver runs through you as Lina speaks up softly.');
    scene.text('"Hm… I\'m not a slut… But… I don\'t know…"');
    if (((st as any).npc_rel ?? 0)?.['A19'] < 50) {
      scene.actions([
        { label: 'Crap!', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Ahh… Don\'t worry, Lina. I know that you are a nice girl, you can\'t really think about a proper punishment. Don\'t worry babe, let me choose."');
    scene.text('Lina doesn\'t seem all that pleased with his reply. She looks conflicted, almost on the verge of tears. Dimka on the other hand isn\'t all that bothered and starts munching on the chips, casually talking about trivial things as if he didn\'t just ask Lina anything earlier. For the most part, Lina sits there quietly, doing her best to avoid looking at the closet you\'re currently trapped in…');
    scene.text('"Alright, Lina. It was fun, but I have things to do. Can we pick this up later?"');
    scene.text('She doesn\'t respond, just stands meekly and hurries out the room, throwing a gaze full of regrets in your direction. Smiling, Dimka opens the closet and looks at you.');
    scene.text('"Did you see that? The difference between her and you is like night and day. That\'s why she\'s my girlfriend and you\'re just a filthy slut." He then proceeds to remove the chains and ball gag. You sigh in comfort, feeling returning to your arms and legs, but this is short-lived as Dimka bounds you again with sticky tape. WIthout hesitation, he drags you out to his couch and forces you down onto your hands and knees as he positions himself behind you.');
    if (((st as any).succubusflag ?? 0) === 1) {
      scene.actions([
        { label: 'Succubus comeback', goto: ['dimalina', 'succubusdimka'] },
      ]);
    }
    scene.actions([
      { label: 'Endure', goto: ['dimalina', 'endure'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A19'] < 80) {
        scene.actions([
          { label: 'Lina hesitates', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('Lina stops and looks at you in the closet. She\'s biting her lip nervously, her eyes darting between you and the floor as she thinks it over. Dimka just smiles at her obvious discomfort.');
    scene.text('"Come on, Lina! What do you say?"');
    scene.text('"I can\'t! I… I… This is too much!"');
    scene.actions([
      { label: 'Dimka doesn\'t look happy', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('"Oh? What happened, Little Slut? You can\'t talk?"');
    scene.text('He looks between her and you and begins to mock Lina.');
    scene.text('"Oh… I… I… Can\'t…!"');
    scene.text('Lina stands there, on the verge of tears, but this only makes Dimka smile more.');
    scene.text('"Alright, Little Slut. It seems that I must teach you a lesson. Undress!"');
    scene.actions([
      { label: 'Lina obeys with a whimper', goto: ['dimalina', 'linaundress'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'She considers you a good friend', handler: (st: GameState) => {
    scene.text('Lina takes a long gaze at the closet and somehow your eyes cross. She stands there looking pitiful.');
    scene.text('"Come on Lina! What do you say?"');
    scene.text('She gives you a little smile and then looks to Dimka.');
    scene.text('"I… I think she is a nice girl and doesn\'t need to be punished."');
    scene.actions([
      { label: 'He won\'t like that…', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('Dimka gives her a cruel smile as he laughs at her. "I knew that you would say that. You really are a sweet girl… that\'s why you\'re my girlfriend!"');
    // TODO-QSP: dynamic text: He stands and gives Lina a warm smile, but something feels off about it as he ci...
    scene.text(`He stands and gives Lina a warm smile, but something feels off about it as he circles around her. He walks over to you and removes the gag and then your chains, leaving you there on the floor to recover. "But you need to know that there's always going to be consequences to your actions… especially when you're wrong. You think ${((st as any).pcs_nickname ?? '')} is a nice girl, but I know better, and I want you to know better. Hopefully after this, you'll see just what kind of girl she is," he says, stopping in front of a shaking and terrified looking Lina.`);
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Help her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Help her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'dimalina', 'helplina');
  } },
      ]);
    }
    if (((st as any).succubusflag ?? 0) === 1) {
      scene.actions([
        { label: 'Succubus comeback', goto: ['dimalina', 'succubuslina'] },
      ]);
    }
    scene.actions([
      { label: 'You can\'t bring yourself to move…', goto: ['dimalina', 'linaundress'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkalina8(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimlinaQW ?? 0) === 7) {
    (s as any).dimlinaQW = 8;
  }
  scene.img('images/locations/pavlovsk/resident/dimkahome/dimkaroom.jpg');
  scene.text('"Slut, you didn\'t have enough, Hm? Coming so you can be with me? but, what can be expected from the women in your family?"');
  scene.text('Cringing, you suppress the urge to hit his head against the wall and make humanity\'s a favor. Dimka feels your incommodity and just give you an evil smile.');
  scene.text('"Come on! Recognize it! You are a total Slut! I am trying to pass some quality time with my girlfriend and you come over to be fucked!"');
  scene.text('"Well, you told me that I should come to visit, so…"');
  scene.text('He gives you a condescending smile and sits smugly in his chair.');
  scene.text('"Yeah… So… You show up just when she is about to arrive? No way that this is a coincidence!"');
  scene.text('Just at that moment, Lina arrive at the room.');
  // TODO-QSP: dynamic text: "Ehm… Dimka I''m here! Hm?! Ehm… Hello <<$pcs_firstname>>"
  scene.text(`"Ehm… Dimka I'm here! Hm?! Ehm… Hello ${((s as any).pcs_firstname ?? '')}"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'He wants to play', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('Dimka barely acknowledges Lina entry with a head movement, and she, after giving you a puzzled gaze, smartly and silently, sits miserably in a corner and tries to not attract any attention. During a long moment, Dimka don\'t do anything, only observing you two squirm under his fucked up gaze. Finally, he takes a decision and gets up with a sudden jump, scaring Lina and begins to look into the closet.');
    scene.text('"Ok Slut. Let\'s play. I don\'t have the time or energy to deal with you two so… what is your choice?"');
    scene.text('He shows you a ball gag and anal hook. Lina gasp and looks at you with pleading eyes.');
    qspCall(st, 'willpower', 'sex', 'force', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Neither', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Neither"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspGoto(st, 'dimalina', 'helplina');
  } },
      ]);
    }
    if (((st as any).succubusflag ?? 0) === 1) {
      scene.actions([
        { label: 'Succubus comeback', goto: ['dimalina', 'succubuslina'] },
      ]);
    }
    scene.actions([
      { label: '"Anal hook"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('Neither choice is good, but the hook seems the less painful. Dimka smiles at a scared Lina and proceeds to take her to the closet.');
    scene.text('"Come on, Slut. What are you waiting for?"');
    scene.text('You walk slowly to him and understand what he wants. Looking down to avoid Lina\'s gaze, you two begin to chain her up in the closet. Lina whimpers and gasps as Dimka secures the chains and ball gag in a painfully way.');
    scene.text('"Ok. Your turn Slut."');
    scene.text('He then ties you up with the sticky tape and puts you doggy style on the couch. Looking behind your back, you see him getting naked and climb behind you.');
    scene.actions([
      { label: 'Endure', goto: ['dimalina', 'endure'] },
    ]);
  } },
      { label: '"Chains"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D3.jpg');
    scene.text('Neither choice is good but maybe the chains will be less painful for Lina. Dimka smiles and proceeds to take you to the closet.');
    scene.text('"Come on Little Slut. What are you waiting for?"');
    scene.text('Lina walks closer slowly and understands what Dimka wants. Looking down, to avoid your gaze, Lina begins to help Dimka to chain you in the closet. You struggle as Dimka secures the chains and ball gag in a painfully way.');
    scene.text('"Ok. Your turn to undress Little Slut."');
    scene.actions([
      { label: 'She undresses', goto: ['dimalina', 'linaundress'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEndure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A1');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D18.jpg');
  scene.text('It\'s cold and frosted. He must have put it in ice. You shiver at the intrusion, as Dimka pushes and uses the anal hook to force you to raise your butt.');
  if (((s as any).pcs_ass ?? 0) < 10  &&  ((s as any).sucskill ?? 0) < 4) {
    scene.text('"Please, no!" You scream.');
    scene.text('"Shut up! Slut!"');
    scene.text('You push your face in the couch and cry, as Dimka rapes your anus. You are humiliated and the only thing you can do is weep at the total desecration of your body. Dimka seems delighted and continues to force your abused asshole, making you raise it in a cycle of humiliation and pain. The seconds seem to become an eternity as you pray for his climax, but he isn\'t close to stopping as you feel the tip of his cock pressing against your pussy.');
  } else {
    if (((s as any).pcs_ass ?? 0) < 20  &&  ((s as any).sucskill ?? 0) < 4) {
      scene.text('"Fuck, no!" You shudder.');
      scene.text('"Shut up! Slut!"');
      scene.text('You push your face in the couch and grit your teeth, as Dimka rapes your anus. You are humiliated and must endure this new violation of your body. Dimka seems to try to break you and continually forces more of it up your asshole until you feel his cock pressing against your pussy.');
    } else {
      scene.text('"Fuck!" You gasp.');
      scene.text('"I know you like it Slut!"');
      scene.text('You moan as the metal rubs your innards. Your arousal and anal experience combined, make you enjoy the anal rape. Dimka senses this and begins to probe your asshole more until you feel his cock pressing against your pussy.');
      qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', goto: ['dimalina', 'hooksex'] },
  ]);
  scene.build();
}

function enterHooksex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A1');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D17.jpg');
  // TODO-QSP: dynamic text: You feel the shaft of his <<dick>>cm <<$dick_girth>> cock pushing your vaginal l...
  scene.text(`You feel the shaft of his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock pushing your vaginal lips slightly apart.`);
  if (((s as any).pcs_vag ?? 0) < 10) {
    scene.text('You howl in pain, without foreplay you are dry and Dimka is too mad to really care. Enduring his trusts you bite your lips and wait for him to cum.');
    scene.text('"Oh yeah… For a Slut, you know how to maintain a tight cunt. I must…" He grunts with pleasure. "rethink your punishment"');
    scene.text('He continues forcing himself painfully on you. In the meantime, you try to think of other things, anything, to forget about the rape. Your body reacts and some wetness makes the situation less painful. Fortunately, he finally reaches climax and cums.');
    scene.text('You two lie there, trying to catch your breath. He then stands up and leaves. "I\'m going to shower to get rid of your stink, get out of my home."');
    scene.text('You sob and redress getting out of this madhouse, quickly.');
  } else {
    if (((s as any).pcs_vag ?? 0) < 20) {
      scene.text('You groan, you are not in the mood to feel pleasure, and Dimka is too mad to really care, you bite your lips and wait for him to cum.');
      scene.text('"Shit… You ARE a Slut aren\'t you, how many cocks have you taken up there?"');
      scene.text('He continues forcing himself on you. In the meantime, you try to think of other things, anything, to forget about the rape. The only option left is shut up and endure until his climax. Fortunately, he finally reaches it and cums.');
      scene.text('You two lie there trying to catch your breath, he then stands up and leaves. "I\'m going to shower to get rid of your stink, get out of my home."');
      scene.text('You rise over unstable legs and redress getting out of this madhouse.');
    } else {
      scene.text('You groan in pleasure, your arousal betraying you. Even biting your lips you can\'t stay silent and your moaning grows louder.');
      scene.text('"Fuck… You really like this, Slut!"');
      scene.text('He continues forcing himself on you. A gasp of pleasure escapes your throat. You are trapped between your hate for Dimka and your own self-loathing. Gritting your teeth, you enjoy the cold rape. Finally, he reaches his climax and cums.');
      scene.text('You two lie there trying to catch your breath, he then stands up and leaves. "I\'m going to shower to get rid of your stink, get out of my home."');
      scene.text('You rise confused over what just happens and redress getting out of this house.');
      qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID ?? 0), 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'stat', '');
    }
  }
  qspCall(s, 'pain', '2', 'hair', 'pull');
  qspCall(s, 'pain', '2', 'cheeks', 'slap');
  qspCall(s, 'pain', '2', 'mouth', 'bind');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBindpain(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal']; enterSexpain(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anal']; enterSexpain(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_mood ?? 0) > 5) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  if (((s as any).pcs_health ?? 0) > 20) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (20);
  }
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 11) + 20));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterHelplina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'pay', 'self');
  qspCall(s, 'npcStat', 'A1');
  qspCall(s, 'npcStat', 'A19', 'a');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D25.jpg');
  scene.text('You are half dressed when a sudden idea pops into your head. Maybe there is a way to help her…');
  scene.text('"What are you doing?" Lina squeaks in surprise as you throw her on the bed. Dimka looks at you with a questioning expression, but before he can say anything, you interrupt him.');
  scene.text('"I\'m just getting her ready…" You tell him. Dimka just stands there looking confused as you fight to undress a more than reluctant Lina.');
  scene.text('"Shh… Follow my lead, ok?" You manage to whisper to Lina as you wrestle her out of her clothes. Trusting you, Lina stops and lets you quickly undress her. Grabbing her by the hair, you force her mouth against your bust. Intuitively, she understands and begins to lick your tits. You let out a breathy moan, enjoying how talented she is with her tongue. "O-oh!" You gasp.');
  qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dimka joins in', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A1');
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D26.jpg');
    scene.text('While you and Lina were busy with each other, Dimka stripped himself of his clothes and climbs onto the bed to separate the two of you.');
    scene.text('"Playtime is over for you two sluts!"');
    scene.text('Lina looks embarrassed, suggesting that she was really into it. Dimka meanwhile is looking smug as he lays back on the bed, his erection on full display.');
    scene.text('"What the hell are you waiting for, an invitation? Suck!"');
    // TODO-QSP: dynamic text: You grab the <<dick>>cm <<$dick_girth>> cock and prepare to suck him when a part...
    scene.text(`You grab the ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock and prepare to suck him when a particularly forward Lina pushes you away and takes it to the back of her throat. To your surprise, she begins to give a demonstration in deepthroating.`);
    scene.text('"Oh yeah! That…" he grunts, "is skill!"');
    scene.text('Lina looks at you with a somewhat embarrassed expression as she slides his cock free from her mouth. Without hesitation, you grab it and start sucking.');
    scene.text('"Not bad Slut but there\'s no point… Agh… She\'s better than you!"');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D27.jpg');
    scene.text('Without realizing it, it turns into a cock sucking competition as you and Lina take turns blowing Dimka. "Ok Sluts, time for the main dish!"');
    // TODO-QSP: dynamic text: Before Dimka has time to say anything else, you straddle him and push his <<dick...
    scene.text(`Before Dimka has time to say anything else, you straddle him and push his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock inside of you. Thanks to the copious amount of spit and the fact that you are in control, you manage to push it in without problems, this time.`);
    scene.text('"Oh? What? You want to be the "Numero Uno" girl? Lets see… Hm… What are you waiting for Little Slut? Are you going to let her do that?"');
    scene.text('You were hoping that maybe this way Dimka will let Lina go, but it is clear that that is not that easy. You begin to rock your hips when something wet and cold touch your buttocks. Bend behind you, Lina is proceeding to lick Dimka\'s balls.');
    scene.text('"Gasp… What are you doing?"');
    scene.text('You stop when a smiling Lina stops and kisses your backside. It is more than evident that the two of you are getting carried away by the atmosphere and your arousal is making your movement more quick and insistent.');
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D28.jpg');
    scene.text('Dimka kicks Lina, who falls back and then throws you off of him.');
    scene.text('"You think this is just a game, Sluts? I\'m in control here!"');
    scene.text('He pushes you on your back and puts his hands around your neck. You gasp trying to get some air. As you try to push him away from you, his member penetrates you painfully until it hits the deepness of your vagina.');
    scene.text('"Stop! You are going to kill her!" Lina cries but Dimka only smiles as you struggle under his grasp.');
    scene.text('"You want to help her? Ok, Little Slut. Make yourself useful!" He then grabs Lina by her hair and she responds by meekly kissing him. Dimka can\'t fuck and grab the two of you, so the pressure around your throat lessens as his grip weakens. This continues for some more minutes, until he cums.');
    scene.text('Dimka slumps back, out of breath and exhausted as he tries to collect himself. "Alright… you\'ve done your job, now get out!"');
    scene.text('Dimka then leaves for the restroom. As you and Lina redress, she embraces you.');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_firstname>>"
    scene.text(`"Thanks ${((st as any).pcs_firstname ?? '')}"`);
    qspCall(st, 'pain', '3', 'throat', 'choke');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'vaginal']; enterSexpain(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).pcs_mood ?? 0) > 5) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    if (((st as any).pcs_health ?? 0) > 20) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    }
    qspCall(st, 'npc_relationship', 'modify', 'A1', 'loathe');
    qspCall(st, 'npc_relationship', 'modify', 'A19', 'adore');
    scene.actions([
      { label: 'Leave', goto: ['dimalina', 'walklina'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalklina(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big19.jpg');
  scene.text('You two stand in the street. Lina looks at the ground and seems lost in her thoughts. Finally, she sighs and begins to walk.');
  scene.text('"I\'m going home."');
  scene.text('She says, more to herself than to you. "What could you do to help?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Hm… Lina, I\'ve got to do something and have to leave."');
    scene.text('She looks at you a moment, and shrugs.');
    // TODO-QSP: dynamic text: "Do whatever you want, <<$pcs_firstname>>.
    scene.text(`"Do whatever you want, ${((st as any).pcs_firstname ?? '')}.`);
    scene.text('Then she begins to walk towards her home.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    { label: 'Accompany her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    if (((st as any).npc_rel ?? 0)?.['A19'] <= 30) {
      scene.text('Lina begins to walk towards her home. Her parent\'s apartment is in the same complex as yours. As you catch up with her, she stops and gives you a questioning gaze.');
      scene.text('"Let\'s go home Lina."');
      scene.text('She doesn\'t move, but looks intensely into your eyes. Biting her lips, she gets tense and doesn\'t move.');
      scene.text('"Lina?"');
      scene.text('She whispers something.');
      scene.text('"Uh? What?"');
      scene.text('"Leave me alone!"');
      scene.text('She cries and then turns, running with all her strength and leaving you far behind.');
      if (((st as any).pcs_mood ?? 0) > 10) {
        qspCall(st, 'mood', 'lower', 'small');
      }
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A19'] < 50) {
        scene.text('Lina begins to walk towards her home. Her parent\'s apartment is in the same complex as yours. As you catch up to her, she stops and gives you a questioning gaze.');
        scene.text('"Let\'s go home Lina."');
        scene.text('She sighs and begins to walk alongside you. She seems lost in her thoughts. You try to chat with her, but she only responds with short replies.');
        scene.text('"Lina?"');
        scene.text('"Uh? What?"');
        scene.text('She looks at you with tired eyes and that\'s when you notice you both have made it to the courtyard at the apartment complex.');
        scene.text('"Do you want me to walk you inside?"');
        scene.text('Lina looks a bit troubled. "I… better not. My parents don\'t like that I take visitors home…');
        scene.text('Sensing that it\'d be better to not push the issue, you leave.');
        qspCall(st, 'npc_relationship', 'modify', 'A19', 'love');
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Leave', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('Lina begins to walk towards her home. Her parent\'s apartment is in the same complex as yours. As you catch up with her, she stops and gives you a questioning gaze.');
        scene.text('"Let\'s go home, Lina," You say to her.');
        scene.text('She sighs and begins to walk alongside you. She seems lost in her thoughts. You try to chat with her but…');
        scene.text('"Can we just… walk?"');
        scene.text('Lina looks at you with pleading eyes and you have to concede. She grabs your hand and puts her head on your shoulder. You decide to take a detour through the park and sense that is the correct choice, since Lina seems to relax. Finally you two end up in the courtyard.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big19.jpg');
    scene.text('"Ok, this is my stop."');
    scene.text('Lina leaves your side and looks at you with a half smile.');
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>… I… Well I needed that."
    scene.text(`"Thanks, ${((st as any).pcs_nickname ?? '')}… I… Well I needed that."`);
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBindpain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '2', 'neck', 'bind');
  qspCall(s, 'pain', '2', 'back', 'bind');
  qspCall(s, 'pain', '2', 'legs', 'bind');
  qspCall(s, 'pain', '2', 'shoulders', 'bind');
  qspCall(s, 'pain', '2', 'armL', 'bind');
  qspCall(s, 'pain', '2', 'armR', 'bind');
  qspCall(s, 'pain', '2', 'wrists', 'bind');
  qspCall(s, 'pain', '2', 'ankles', 'bind');
  qspCall(s, 'pain', '2', 'breasts', 'bind');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSexpain(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'vaginal') {
    if (((s as any).pcs_vag ?? 0) < 10  &&  ((s as any).sucskill ?? 0) < 4) {
      qspCall(s, 'pain', '7', 'vaginal', 'ache');
    } else {
      if (((s as any).pcs_vag ?? 0) < 20  &&  ((s as any).sucskill ?? 0) < 4) {
        qspCall(s, 'pain', '5', 'vaginal', 'ache');
      } else {
        qspCall(s, 'pain', '3', 'vaginal', 'ache');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'anal') {
      if (((s as any).pcs_ass ?? 0) < 10  &&  ((s as any).sucskill ?? 0) < 4) {
        qspCall(s, 'pain', '7', 'asshole', 'ache');
      } else {
        if (((s as any).pcs_ass ?? 0) < 20  &&  ((s as any).sucskill ?? 0) < 4) {
          qspCall(s, 'pain', '5', 'asshole', 'ache');
        } else {
          qspCall(s, 'pain', '3', 'asshole', 'ache');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEscape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  if (((s as any).spellKnown ?? 0)?.['stun'] === 1  &&  ((s as any).pcs_mana ?? 0) >= ((s as any).spellMana ?? 0)?.['stun']) {
    scene.text('Fear triggers your adrenaline and instinctively, your mana responds and power words escape your mouth. Dimka then freezes and falls back paralyzed. With him momentarily out of action, you grab your clothes and run half-dressed away from his home.');
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - ((((s as any).spellMana ?? 0)?.['stun']));
  } else {
    if (((s as any).pcs_stren ?? 0) >= 40) {
      scene.text('Fear triggers your adrenaline and with newfound strength you suddenly struggle and thrash against the tape until it rips. Dimka is taken by surprise and doesn\'t react fast enough to stop you from slamming back against him. You fall back on top of him and you hear him groan and gasp as the air is knocked out of him. You scramble to your feet and grab your belongings, running away from his house half dressed.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBindpain(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'pain', '2', 'mouth', 'bind');
  if (((s as any).pcs_mood ?? 0) > 10) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  if (((s as any).pcs_health ?? 0) > 20) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (20);
  }
  qspCall(s, 'npc_relationship', 'modify', 'A1', (-40));
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 21) + 10));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterSuccubusdimka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A1');
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D17.jpg');
  scene.text('You groan in pleasure, your arousal betraying you. Biting your lips you can\'t shut up as your moans grow louder.');
  scene.text('"Fuck… you\'ve finally snapped and given in, huh? "');
  scene.text('"Yes, master, please, more!"');
  scene.text('Your eager responses surprise Dimka and quickly the rage he was feeling earlier is replaced by arousal. You watch with a smile as he easily gives in to you. He is yours now.');
  qspCall(s, 'arousal', 'BDSM', 2, ((s as any).npcID ?? 0), 'bound', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Awaken your true self', handler: (st: GameState) => {
    scene.img('images/pc/body/succubusself.jpg');
    scene.text('You let the power flood your body, leaving you feeling warm and… insatiably hungry.');
    scene.text('If Dimka thinks that he can rape you without consequences, he will be disappointed. He\'s not in control anymore and you are not going to let him hurt you any further. Easily, you pull your wrists and legs apart, ripping the tape in the process. Glancing over your shoulder, you see Dimka looking at you confused. You turn to face him and see he\'s trying to process what\'s going on, but isn\'t able to understand how this shift in power has happened suddenly. One of your hands rise to his chest, caressing it. He\'s confused yet aroused and it makes you giggle knowing how helpless he is to his own primal desires of wanting to fuck while still knowing something isn\'t <i>quite</i> right…');
    qspCall(st, 'arousal', 'BDSM_give', 1, ((st as any).npcID ?? 0), 'dom');
    scene.actions([
      { label: 'Time for dinner', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D19.jpg');
    scene.text('"What the…?" Dimka mumbles.');
    scene.text('You press a finger against his lips and whisper softly, "Shh… it\'s okay, Master. I\'m here to serve you." You lead him back to his couch and make him sit. For a moment, you consider your options. You could end him right here, right now but then you realize you have no idea where he\'s hidden that recording of you and even if you did there\'s no telling if he\'s made copies. Until you can be sure you can get rid of that recording completely, you have to settle with playing as Dimka\'s "dutiful" slave slut.');
    scene.text('You stand over his member and slowly lower yourself down onto it in a reverse cowgirl position.');
    scene.text('He lets out a drawn out groan, his face twisted in pleasure and confusion. "Oh… what are you doing?"');
    scene.text('"Master, let me help you," You purr. With inhuman grace, you begin to ride him, the rage and madness soon forgotten. His hand caresses your hips and you smile, accelerating your ride and putting him on edge. There is nothing like the touch of a succubus…');
    // TODO-QSP: dynamic text: "Oh…<<$pcs_nickname>>" He cums and fills you with energy. Smiling you rise and l...
    scene.text(`"Oh…${((st as any).pcs_nickname ?? '')}" He cums and fills you with energy. Smiling you rise and look at him, he is wasted and exhausted.`);
    scene.text('"I think… you can go?" he mumbles tiredly. With a smile, you leave him trying to catch his breath. After taking a quick shower in the restroom, you redress and leave.');
    qspCall(st, 'arousal', 'vaginal', 10, ((st as any).npcID ?? 0), 'dom');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', '', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'pain', '2', 'hair', 'pull');
    qspCall(st, 'pain', '2', 'cheeks', 'slap');
    qspCall(st, 'pain', '2', 'mouth', 'bind');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBindpain(st, scene); (st as any).locArgs = __savedLocArgs; }
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuccubuslina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A1');
  qspCall(s, 'npcStat', 'A19', 'a');
  scene.img('images/pc/body/succubusself.jpg');
  scene.text('You look at the items in his hand for a minute and an idea pops in your head. You can\'t stop comparing people with food. As an example, Dimka is a chocolate treat, mouth-watering on the outside, but full of maggots on the inside. On the other hand, Lina is a mix of fruits, sweet and healthy, yet somehow bland. Of course, you can\'t mix them. You must do something…');
  scene.text('You call your true self up from its resting place.');
  scene.text('It fills you completely, suffusing your being with power…');
  scene.text('and hunger.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dominate them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D29.jpg');
    scene.text('There is a sudden change in the room as you begin to channel your power. The human occupants feel it in their bones. Without waiting for their reaction, you grab Lina\'s hand and walk to the bed. You lie there and smile to her. Tendrils of lust infused with mana cross unseen through the room and tangle around Dimka and Lina');
    scene.text('"I think… That our master needs a little demonstration of what a pair of sluts can do."');
    scene.text('Dimka seems confused, and Lina… well… Lina doesn\'t seem to actually like your idea… But that is going to change. You caress, grope and kiss her, slowly taking away your clothes. She is a little reluctant at first, but soon her skin turns red as you take control of her arousal.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>… I…"
    scene.text(`"${((st as any).pcs_firstname ?? '')}… I…"`);
    scene.text('"Shh… just follow my lead."');
    scene.text('She gives you a timid smile that soon grows as your lesbian show turns hotter. Horny as hell, she practically rips apart those clothes she\'s still wearing. Looking at Dimka, you see that he paces nervously from feet to feet. You can\' wait to drain the little shit. So… What next?');
    qspCall(st, 'arousal', 'foreplay', 5, ((st as any).npcID1 ?? 0), 'lesbian', 'dom');
    qspCall(st, 'arousal', 'kiss', (-2), ((st as any).npcID1 ?? 0), 'lesbian', 'dom');
    qspCall(st, 'arousal', 'striptease', (-2), ((st as any).npcID1 ?? 0), 'lesbian', 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '"Time for the main dish… Master"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D30.jpg');
    scene.text('Dimka jumps on the bed and crawls towards Lina. He probably thinks that he is in control of her. Hehehe. Poor stupid kid. She lays on her back, observing him with a mix of lust and hate. They are slaves to their desires and you are the one who whispers the lust in their ears.');
    scene.text('"Master… Take your Little Slut. I have her ready for you."');
    // TODO-QSP: dynamic text: Grabbing his <<dick>>cm <<$dick_girth>> cock, you carefully push it against Lina...
    scene.text(`Grabbing his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock, you carefully push it against Lina's smooth pubic zone. She is whimpering. You push Dimka's back, who is finally smiling, to penetrate the reluctant girl. As your magic crosses between you three, Lina forgets her reluctance and cries in lust.`);
    scene.text('"Yes! Master! Fuck me!"');
    scene.text('Taking control of the rhythm, you manage to push the pair slowly to their limits. Lina can\'t stop looking at you, as is evident who is really fucking her. Dimka is lost in the enhanced arousal that your touch has unchained. They are loving it… That is so unjust. You must do something');
    qspCall(st, 'arousal', 'foreplay', 3, ((st as any).npcID ?? 0), 'dom');
    qspCall(st, 'arousal', 'foreplay', (-3), ((st as any).npcID1 ?? 0), 'lesbian', 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '"My turn Master"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D31.jpg');
    scene.text('You whisper in Dimka\'s ear. He doesn\'t understand exactly what you want, but lets you take him away from Lina. Putting him on his back, you make a bowlegged Lina sit and you two crawl towards him.');
    scene.text('"Master… You don\'t need to tire. Little Slut and I are going to do all the work."');
    scene.text('Lina mounts him in a reverse cowgirl position and begins a slow paced ride. She moans and cries, her disgust for Dimka quickly evaporates. Meanwhile you caress his face and smile. He is lost in his arousal and finally shut his mouth full of shit.');
    scene.text('"Master… Help me… Please"');
    scene.text('Whimpering you sit on his face and wait. His tongue push against your folds. Grabbing his hair, you forcefully ride his face. He complies and tries to desperately follow your rhythm as you face-fuck him.');
    qspCall(st, 'arousal', 'cuni', 3, ((st as any).npcID ?? 0), 'dom');
    qspCall(st, 'arousal', 'foreplay', (-3), ((st as any).npcID1 ?? 0), 'lesbian', 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They are yours', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D32.jpg');
    scene.text('During the next hour, you fuck them. Changing from one to another, making Dimka serve Lina and you, bathing her body in his semen. You don\'t let Dimka catch any breath. Finally exhausted, without force or cum, he leaves weary for the restroom.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>?"
    scene.text(`"${((st as any).pcs_firstname ?? '')}?"`);
    scene.text('Lina looks at you with embarrassed, tired and confused eyes. She doesn\'t know exactly what happened, but is aware that you were the catalyst.');
    scene.text('"What just happened?"');
    scene.text('You smile and caress her sweaty and cum covered body. A pretty blush appears on her skin.');
    scene.text('"Don\'t let him hurt you."');
    scene.text('Picking some semen with your fingers, you push it in her mouth. She fervently opens up her mouth and licks. Oh… Yes. She is yours. Finally, after resting for a moment, you help her redress and leave Dimka\'s home.');
    qspCall(st, 'arousal', 'cuni', (Math.floor(Math.random() * 6) + 10), ((st as any).npcID1 ?? 0), 'dom');
    qspCall(st, 'arousal', 'cuni_give', (Math.floor(Math.random() * 6) + 10), ((st as any).npcID1 ?? 0), 'dom');
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 10), ((st as any).npcID ?? 0), 'dom');
    qspCall(st, 'cum_call', '', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'labia', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'butt', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'back', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'legs', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'arms', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'stomach', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'npc_relationship', 'modify', 'A1', 'loathe');
    qspCall(st, 'npc_relationship', 'modify', 'A19', 'adore');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['dimalina', 'walklina'] },
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

function enterLinaundress(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D20.jpg');
  scene.text('She takes her clothes with resigned desperation and stands there trying to conceal herself. Dimka smiles and observes her for a while, making Lina even more nervous. Taking the bondage gear, he proceeds to put it on Lina. Admiring his work, he pushes her on the couch.');
  scene.text('"A little bird told me, that you like to play hard, so…"');
  scene.text('Slap!!');
  scene.text('The sound reverberates as Dimka proceeds to spank her.');
  scene.text('Slap!!');
  scene.text('Lina struggles against the chains, but she can\'t move');
  scene.text('Slap!!');
  scene.text('You shiver, relieved that you are not in her position.');
  scene.text('Slap!!');
  scene.text('Tears form in her eyes.');
  scene.text('Slap!!');
  scene.text('The minutes pass while Lina\'s skin gets redder.');
  scene.text('Slap… Slap… Slap!!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Helplessly watch her be abused', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D21.jpg');
    scene.text('Dimka is getting progressively more excited and vocal as he continues spanking Lina. You feel sorry for her, but there\'s nothing you can do. He suddenly stops and you think he\'s had enough, but it\'s only the beginning for Lina. With a twisted grin, he begins taking off his clothes before positioning himself behind Lina and sliding his cock inside her pussy. The ball gag only allows Lina to whimper at the sudden and careless intrusion. She isn\'t aroused in the slightest which makes it far more painful than it should be.');
    scene.text('"Looks like you need to make it wet if you don\'t want this to hurt. Time to show off your cocksucking skills, little slut!"');
    scene.actions([
      { label: 'She has no choice but to obey', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D22.jpg');
    scene.text('He throws Lina to the ground and lifts her by the hair, leaving Lina on her knees. She sobs loudly as he removes the gag, but her cries are muffled once again as Dimka shoves his cock down her throat.');
    scene.text('"Now remember, no teeth!" Dimka begin to skullfuck her, disregarding her whimpers of pain as she struggles against the rough fucking.');
    scene.text('"Show more passion, Little Slut!" he demands with a grunt. It takes a moment, but eventually Lina relaxes as best she can while being assaulted. She probably just wants this to be over with…');
    scene.actions([
      { label: 'Watch as she cries', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/dimkahome/linased/D23.jpg');
    scene.text('Breathless, Lina opens her mouth, just in time to receive a full face of Dimka\'s slimy jizz before falling to the floor sobbing. After some minutes of Lina crying while he sits back with a smile to catch his breath, Dimka gets up and unchains you.');
    scene.text('"Clean her up and get her out of here."');
    scene.text('He leaves for the bathroom and you help Lina redress and walk her out of this house.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBindpain(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'pain', '2', 'mouth', 'bind');
    if (((st as any).pcs_mood ?? 0) > 5) {
      qspCall(st, 'mood', 'lower', 'small');
    }
    if (((st as any).pcs_health ?? 0) > 20) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    }
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 21) + 20));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['dimalina', 'walklina'] },
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
    case 'dimkalina0':
      enterDimkalina0(s, scene);
      break;
    case 'dimkalina1':
      enterDimkalina1(s, scene);
      break;
    case 'Listen':
      enterListen(s, scene);
      break;
    case 'Help':
      enterHelp(s, scene);
      break;
    case 'watch':
      enterWatch(s, scene);
      break;
    case 'dimkalina2':
      enterDimkalina2(s, scene);
      break;
    case 'distraction':
      enterDistraction(s, scene);
      break;
    case 'watch2':
      enterWatch2(s, scene);
      break;
    case 'cums1':
      enterCums1(s, scene);
      break;
    case 'dimkalina3':
      enterDimkalina3(s, scene);
      break;
    case 'watch3':
      enterWatch3(s, scene);
      break;
    case 'linadefiled':
      enterLinadefiled(s, scene);
      break;
    case 'dimkalina4':
      enterDimkalina4(s, scene);
      break;
    case 'dimkalina5':
      enterDimkalina5(s, scene);
      break;
    case 'dimkalina6':
      enterDimkalina6(s, scene);
      break;
    case 'dimkalina7':
      enterDimkalina7(s, scene);
      break;
    case 'dimkalina8':
      enterDimkalina8(s, scene);
      break;
    case 'endure':
      enterEndure(s, scene);
      break;
    case 'hooksex':
      enterHooksex(s, scene);
      break;
    case 'helplina':
      enterHelplina(s, scene);
      break;
    case 'walklina':
      enterWalklina(s, scene);
      break;
    case 'bindpain':
      enterBindpain(s, scene);
      break;
    case 'sexpain':
      enterSexpain(s, scene);
      break;
    case 'escape':
      enterEscape(s, scene);
      break;
    case 'succubusdimka':
      enterSuccubusdimka(s, scene);
      break;
    case 'succubuslina':
      enterSuccubuslina(s, scene);
      break;
    case 'linaundress':
      enterLinaundress(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dimalina: LocationDef = {
  name: 'dimalina',
  title: 'With reluctance, you remove your clothes and watch Dimka car',
  region: 'other',
  enter: enter,
};
