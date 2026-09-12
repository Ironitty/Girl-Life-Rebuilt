import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStrapon1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/strapon.jpg');
  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).npc_had_sex ?? 0)?.['A144'] > 0) {
    ((s as any).npc_had_sex ?? {})['A144'] = 1;
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 100) {
      scene.text('You pull out the strap-on harness and hold it up. "Yeah, I like this… I\'m going to use it to fuck you like the little slut you are."');
      scene.text('Her eyes widen ever so slightly and she rolls over onto all fours with her ass facing you. She looks back over her shoulder at you and bites her lower lip; you can see the lust in her eyes and how badly she wants you to fuck her. You smile at her. "Who\'s my good little bitch? Do you want my cock?"');
      scene.text('"Yes… Please fuck me with your big cock," she breathlessly replies.');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['dom_nush'] <= -50) {
        scene.text('You pull out the strap-on harness and hold it up. "Yeah, I like this…"');
        scene.text('Her eyes widen ever so slightly as she grins and holds out her hand. "So my little slut wants to get fucked again, huh? Well hand it to me and I\'ll make your dreams come true," she says in a somewhat commanding tone.');
      } else {
        scene.text('You pull out the strap-on harness and hold it up. "Yeah, I like this…"');
        scene.text('Her eyes widen ever so slightly. "Just what do you plan to do with that?"');
      }
    }
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= -50  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Take turns', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/strapon.jpg');
    scene.text('You smile at her. "How about we take turns? I fuck you, then you fuck me."');
    scene.text('She grins and nods her head as she starts taking off her clothes. You toss the strap-on and the bottle of lube on the bed, then start stripping as well. You\'re soon both naked and you crawl across the bed next to her.');
    scene.actions([
      { label: 'Strap-on fun', goto: ['anushkaev3', 'bedstrapongive'] },
    ]);
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Fuck me', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['strapon'] = 1;
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/fuckme.jpg');
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 100) {
      scene.text('As you walk up behind her, she wiggles her ass suggestively at you. Smiling, you reach over and slap her ass hard enough to make her yelp a little. "Not today. Today, I want you to give me a good fucking."');
      scene.text('She spins around and flops down on the bed with an arched brow. You see her smiling deviously as you hand her the strap-on. "Okay, one hard fucking coming up."');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['dom_nush'] <= -50) {
        scene.text('You bite your lower lip, walk over, and hand the strap-on to her. "Yes… I want you to fuck me again."');
        scene.text('Her grin widens. "Beg me to fuck you like the little slut you are," she says in a somewhat commanding tone.');
        scene.text('You look down, unable to meet her eyes. "Please fuck me, fuck me like the little slut I am."');
      } else {
        scene.text('You feel slightly aroused as you hand the strap-on over to Anushka. "Maybe you could wear it and show me what you can do with it?"');
        scene.text('She takes it and points at it as she looks at you. "So you want me to wear this and fuck you silly with it, huh?"');
        scene.text('You nod your head, thinking you already made that clear, and she grins.');
      }
    }
    scene.actions([
      { label: 'You asked for it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme1.jpg');
    scene.text('She suddenly grabs you and pushes you back on the bed, nearly shoving the dildo in your face. "Careful what you ask for because I\'m going to turn you into my little bitch!"');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme2.jpg');
    scene.text('Before you can even respond, she sits the harness to the side, leans forward and starts kissing you. Surprised, you quickly give into the kiss and return the passion.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme3.jpg');
    scene.text('As the kiss continues, she starts undressing you. She pulls your top off, revealing your breasts, then pulls your bottoms off. Once she\'s done, you help her strip down as well, though she stops once she\'s in her underwear.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme4.jpg');
    scene.text('She pushes you back on the bed and you spread your legs, giving her easy access to your pussy. She leans over and starts to lick your clit almost at once. She licks, sucks, kisses and nips at your clit, slowly working her tongue inside your pussy and tongue fucking you. As she does, she finishes pulling her own clothes off.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Face sitting', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme5.jpg');
    scene.text('Once she has you soaking wet, she crawls up on the bed, straddling your face, and eases down until her pussy is against your face. You start licking her in return and hearing her soft moans of pleasure arouses you even more.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck this', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme6.jpg');
    scene.text('Several minutes go by before she climbs off your face, grabs the harness and quickly slides it on. After making sure it\'s securely in place, she grabs you by the hair and pulls your face over the dildo. "Suck my dick, slut!"');
    // TODO-QSP: dynamic text: You obediently open your mouth and take the <<dick>>cm <<$dick_girth>> dildo in ...
    scene.text(`You obediently open your mouth and take the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo in your mouth. She mostly lets you control how deep you take it, although she pushes it a bit deeper a few times, making you gag a little.`);
    qspCall(s, 'arousal', 'dildo_suck', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme7.jpg');
    scene.text('Once she gets bored of you sucking the dildo, she flips you on your back and spreads your legs before she kneels between them. She rubs the tip of her dildo against your wet pussy lips until it\'s wet, then slowly slides the dildo inside you, causing you to moan in pleasure. She gently starts to fuck you, slowly picking up the pace as you get wetter and moan louder.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme8.jpg');
    scene.text('Several blissful minutes go by before she flips you over and pulls you up on all fours. She scoots up behind you and you feel the tip of the dildo rub against your slit before it easily slides inside you.');
    scene.text('After a few thrusts, she grabs onto your hips and starts to really fuck you hard and fast. "Yeah, take my big cock you slut! See how easy your pussy just swallowed it up? You\'re such a dirty little slut!" she says as she starts really pounding you.');
    scene.text('Her hips slam against your ass, slowly pushing you forward until you\'re on your stomach. After a few more thrusts, she pulls out and you feel the tip of the dildo press against your asshole…');
    qspCall(s, 'arousal', 'vaginal_strap', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Not my ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme11.jpg');
    scene.text('After you loudly protest, she scoffs, but you feel the dildo slide back into your pussy and she keeps fucking you for a while.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal_strap', 2, 'lesbian');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why you, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('Finally, sweating and panting, she pulls out of you and collapses against you. You feel the very wet and sticky dildo pressing against your ass cheeks ass she kisses and nibbles your ear as she whispers "I want to fuck your ass next time…"');
    scene.text('You laugh, but don\'t respond. The two of you just lie against each other for a few minutes before she finally gets up and starts cleaning up and getting dressed. You get up and do the same.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Let her', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme9.jpg');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('She straddles your thighs to get a better position, then starts pulling on your butt plug. As you glance back, you see a huge grin on her face. "You won\'t be needing this for a while…" she says as she pulls it free and shows it to you.');
    } else {
      scene.text('She straddles your thighs to get a better position and uses her hands to spread your ass cheeks. As you glance back, you see a huge grin on her face. She obviously loves the idea of fucking you in the ass.');
    }
    // TODO-QSP: dynamic text: You feel the tip of the wet dildo press against your asshole. The pressure build...
    scene.text(`You feel the tip of the wet dildo press against your asshole. The pressure builds until the head pops inside you and she slowly slides the whole ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo balls deep in your ass, causing you to wince and moan in a mix of pleasure and pain. She slowly starts fucking your ass, building up speed with each thrust until she's pounding your ass hard and it starts to hurt.`);
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Not so rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('She starts really hammering your ass and you grip the bed sheets tightly in your hands, unsure if the pleasure or pain is winning out. "Not so rough!" you moan between grunts of pain.');
    scene.text('Her response is to slam the full length of the dildo into your ass before leaning forward and putting her lips to your ear. "Shut your fucking mouth slut!" She doesn\'t relent with the pounding, but despite the roughness, you feel your pleasure building.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap', 2, 'lesbian', 'sub', 'rough', 'lube');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme11.jpg');
    scene.text('Finally, sweating and panting, she pulls out of you and collapses against you. You feel the wet and sticky dildo pressing against your ass cheeks as she kisses and nibbles your ear as she whispers "You okay? You sounded like you were really enjoying it."');
    scene.text('You laugh and nod. "Yeah, but my ass fucking hurts."');
    scene.text('She giggles. "Well, I guess you need more practice at being an anal whore then. Don\'t worry, by the time I\'m done with you, you\'ll barely notice when a guy sticks his dick in there."');
    scene.text('You roll your eyes. "Thanks, but I think I would rather you left my asshole intact if you don\'t mind." The two of you laugh as you lie against each other for a few minutes before she gets up and starts cleaning up and getting dressed. You get up and do the same.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let her pound you', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('She starts really hammering your ass and you grip the bed sheets tightly in your hands, unsure if the pleasure or pain is winning out at this point. Your moans of pleasure are turning into groans of pain.');
    scene.text('She takes note of your change and her response is to pull almost all the way out of your ass before slamming the full length of the dildo balls deep back into you. She leans forward and puts her lips to your ear. "Tell me that I own you, tell me your fuck holes are mine to as do with as I please!"');
    scene.text('"I\'m yours, my fuck holes belong to you, to do with as you please!" you grunt out, but she doesn\'t relent with the pounding. If anything, she starts fucking you even harder. Despite the roughness, you feel your pleasure building.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'sub', 'rough', 'lube');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme11.jpg');
    scene.text('Finally, sweating and panting, you hear her breathing quickening and her thrusts become more urgent. "Oh fuck, oh fuck… I\'m about to cum." She then suddenly cries out and collapses on top you, her body shaking as she has a powerful orgasm. Several seconds pass before she pulls out and collapses on the bed next to you. "Oh my god, that was amazing! I didn\'t know I could orgasm so hard from wearing one of these."');
    scene.text('You laugh a little. "Good for you, but my ass fucking hurts now."');
    scene.text('She giggles. "Well, I guess you need more practice at being an anal whore then. Don\'t worry, by the time I\'m done with you, you\'ll barely notice when a guy sticks his dick in there."');
    scene.text('You roll your eyes. "Thanks, but I think I would rather you left my asshole intact if you don\'t mind." The two of you laugh as you lie against each other for a few minutes before she gets up and starts cleaning up and getting dressed. You get up and do the same.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] > -50) {
      scene.actions([
        { label: 'I\'m going to fuck you with it', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['strapon'] = 1;
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/fucknush.jpg');
    scene.text('You hold up the harness, letting the dildo hang between your face and hers. "Well, I was thinking of strapping this thing on and fucking you silly with it."');
    scene.text('You can tell by her expression that she got a little turned on by that. "Is that so?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush1.jpg');
    scene.text('"Yeah, I am," you tell her as you step into the harness, pull it up into place and start tightening the straps. As you do, she starts playing with the dildo, showing how eager she is to be fucked by you.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush2.jpg');
    scene.text('With the harness secure, you lean forward and kiss her. Before long, you\'re passionately making out with each other, your hands roaming all over each other\'s bodies as your tongues explore each other\'s mouths.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Undress her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush3.jpg');
    scene.text('As you keep kissing, you start pulling her clothes off. She soon returns the favor and starts taking your clothes off until you\'re both naked. You break the kiss and crawl onto the bed where you lie on your back.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
      scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush3.jpg');
      scene.text('While she finishes getting undressed you use the time to cast the penis envy spell on the strapon.');
      qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
      qspCall(s, 'stat', '');
      if ((!((s as any).penisEnvyVariable ?? 0))) {
        scene.actions([
          { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Pull her on top', goto: ['anushkaev1', 'strapon_cowgirl_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Pull her on top', goto: ['anushkaev1', 'strapon_cowgirl'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull her on top', goto: ['anushkaev1', 'strapon_cowgirl_magic'] },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Pull her on top', goto: ['anushkaev1', 'strapon_cowgirl'] },
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
    }
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 50) {
      scene.actions([
        { label: 'You\'re my bitch', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['strapon'] = 1;
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush1.jpg');
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 100) {
      scene.text('You reach over and strip off her top. "I\'m going to strap this in place and fuck you like the slut you are."');
      scene.text('She doesn\'t resist at all as you pull off her top. You can tell by her expression that she got a little turned on by that. As you pull the dildo up, she opens her mouth for you.');
      scene.text('You shove the dildo into her mouth and down her throat, making her gag and drool. "I\'m going to fuck you until you beg me to stop, and then I\'m just going to fuck you even harder, until you tell me you\'re my little fuck slut to do with as I please."');
      scene.text('You could do this for as long as you like, but you\'re eager to get on with the action. You could make her lick your pussy, or strap this strap-on on and fuck her pussy, or even just go straight to her ass.');
      qspCall(s, 'arousal', 'foreplay', 3, 'lesbian', 'dom', 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
    } else {
      scene.text('You reach over and strip off her top. "I\'m going to strap this in place and fuck you like the slut you are."');
      scene.text('She resists you pulling off her top, but you can tell by her expression that she got a little turned on by that. "Maybe I\'ll take it away from you and fuck you with…"');
      scene.text('As she\'s talking, you shove the strap-on dildo into her mouth. You don\'t know what she was going to say, but you have a pretty good idea. "No, I don\'t think you will. I\'m going to fuck you until you beg me to stop and then I\'m just going to fuck you even harder, until you tell me you\'re my little fuck slut to do with as I please."');
      scene.text('She tries to push back on your arm to pull the dildo out of her mouth. You let her almost get it out when you reach up with your other hand and grab her by her hair and force her head forward. With one hand on her head and the other shoving the dildo into her mouth, you shove it all the way into her mouth, making her gag repeatedly until drool starts running out of her mouth.');
      scene.text('She resists your efforts, but she\'s either not resisting as hard as she can or you\'re just overpowering hwer. You could make her lick your pussy, or strap this strap-on on and fuck her pussy, or even just go straight to her ass.');
      qspCall(s, 'arousal', 'foreplay', 3, 'lesbian', 'dom', 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Eat me bitch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush2.jpg');
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 100) {
      scene.text('You pull the dildo out of her mouth and set it aside. She gasps as she try and catches her breath, as she does you quickly undress. She bites her lower lip and gives you a hungry look as you get naked, you both know what is coming next.');
      scene.text('You lay on her bed naked spreading your legs. You don\'t even have to say anything, she buries her face in your snatch before you are completely in place, as she starts licking your pussy, you grab her by the hair and twist your hips grinding your pussy against her face.');
      scene.text('"Eat me cum slut, if you do a really good job, I might take it easy on you." You laugh as you say it, which turns into a moan as she starts licking your clit and slit, sliding her tongue into your pussy like the good little bitch she is.');
      qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      scene.text('You pull the dildo out of her mouth and set it aside. She gasps as she tries to catch her breath, allowing you to quickly undress. She gives you a slightly dirty look as she wipes drool off her chin. "Fucking bitch!"');
      scene.text('You smirk at her comment, dominating her like this is such a turn on. "I might be a bitch, but I\'m going to make you <i>my</i> bitch," you tell her as you lay on her bed and spread your legs. Before she can protest, you grab her by the hair and pull her face between your legs. You twist your hips and grind your pussy against her face.');
      scene.text('"Eat me slut! If you do a really good job, I might take it easy on you." You laugh as you say it, which turns into a moan as she starts licking your clit and slit, sliding her tongue into your pussy like a good girl.');
      qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Keep eating me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush3.jpg');
    scene.text('Once you\'re sure she\'s going to do as she\'s told, you let go of her head. She keeps licking your pussy and tongue fucking you.');
    if (((s as any).orgasm_or ?? 0) === 'yes') {
    }
    scene.text('Now it\'s time to really show her who\'s boss and fuck her.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her pussy', goto: ['anushkaev1', 'domnush_fuckpussy'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her pussy', goto: ['anushkaev1', 'domnush_fuckpussy'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck my ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['strapon'] = 1;
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/fuckme.jpg');
    if (((s as any).anushkaQW ?? 0)?.['dom_nush'] >= 100) {
      scene.text('As you walk up behind her, she wiggles her ass suggestively at you. Smiling, you reach over and slap her ass hard enough to make her yelp a little. "Not today. Today, I want you to fuck my ass."');
      scene.text('She spins around and flops down on the bed with an arched brow. You see her smile deviously as you hand her strap-on. "Okay, one hard butt fucking coming up."');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['dom_nush'] <= -50) {
        scene.text('You bite your lower lip, walk over, and hand her the strap-on. "Yes… I want you to butt fuck me."');
        scene.text('Her grin widens. "You\'re such a dirty little whore and a complete butt slut. Tell me how much of a butt slut you are!" she says in a somewhat commanding tone.');
        scene.text('You look down, unable to meet her eyes. "I\'m a dirty little butt slut, I loved getting my ass ploughed."');
      } else {
        scene.text('You feel slightly aroused as you hand the strap-on over to Anushka. "Maybe you could wear it and show me what you can do with it?"');
        scene.text('She takes it and points at it as she looks at you. "So you want me to wear this and fuck you silly with it, huh?"');
        scene.text('You nod your head, thinking you already made that clear, and she grins.');
      }
    }
    scene.actions([
      { label: 'You asked for it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme1.jpg');
    scene.text('She suddenly grabs you and pushes you back on the bed, nearly shoving the dildo in your face. "Careful what you ask for because I\'m going to turn you into my little bitch!"');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme2.jpg');
    scene.text('Before you can even respond, she sits the harness to the side, leans forward and starts kissing you. Surprised, you quickly give into the kiss and return the passion.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme3.jpg');
    scene.text('As the kiss continues, she starts undressing you. She pulls your top off, revealing your breasts, then pulls your bottoms off. Once she\'s done, you help her strip down as well, though she stops once she\'s in her underwear.');
    qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme4.jpg');
    scene.text('She pushes you back on the bed and you spread your legs, giving her easy access to your pussy. She leans over and starts to lick your clit almost at once. She licks, sucks, kisses and nips at your clit, slowly working her tongue inside your pussy and tongue fucking you. As she does, she finishes pulling her own clothes off.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Face sitting', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme5.jpg');
    scene.text('Once she has you soaking wet, she crawls up on the bed, straddling your face, and eases down until her pussy is against your face. You start licking her in return and hearing her soft moans of pleasure arouses you even more.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck this', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme6.jpg');
    scene.text('Several minutes go by before she climbs off your face, grabs the harness and quickly slides it on. After making sure it\'s securely in place, she grabs you by the hair and pulls your face over the dildo. "Suck my dick, slut!"');
    // TODO-QSP: dynamic text: You obediently open your mouth and take the <<dick>>cm <<$dick_girth>> dildo in ...
    scene.text(`You obediently open your mouth and take the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo in your mouth. She mostly lets you control how deep you take it, although she pushes it a bit deeper a few times, making you gag a little.`);
    qspCall(s, 'arousal', 'dildo_suck', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme9.jpg');
    scene.text('Once she gets bored of you sucking the dildo, she flips your ass towards her.');
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('She straddles your thighs to get a better position, then starts pulling on your butt plug. As you glance back, you see a huge grin on her face. "You won\'t be needing this for a while…" she says as she pulls it free and shows it to you.');
    } else {
      scene.text('She straddles your thighs to get a better position and uses her hands to spread your ass cheeks. As you glance back, you see a huge grin on her face. She obviously loves the idea of fucking you in the ass.');
    }
    scene.text('Her hips slam against your ass, slowly pushing you forward until you\'re on your stomach. After a few more thrusts, she pulls out and you feel the tip of the dildo press against your asshole…');
    // TODO-QSP: dynamic text: The pressure builds until the head pops inside of you and she slowly slides the ...
    scene.text(`The pressure builds until the head pops inside of you and she slowly slides the whole ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo balls deep in your ass, causing you to wince and moan in a mix of pleasure and pain. She slowly starts fucking your ass, building up speed with each thrust until she's pounding your ass hard and it starts to hurt.`);
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Not so rough', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('She starts really hammering your ass and you grip the bed sheets tightly in your hands, unsure if the pleasure or pain is winning out. "Not so rough!" you moan between grunts of pain.');
    scene.text('Her response is to slam the full length of the dildo into your ass before leaning forward and putting her lips to your ear. "Shut your fucking mouth slut!" She doesn\'t relent with the pounding, but despite the roughness, you feel your pleasure building.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap', 2, 'lesbian', 'sub', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme11.jpg');
    scene.text('Finally, sweating and panting, she pulls out of you and collapses against you. You feel the wet and sticky dildo pressing against your ass cheeks as she kisses and nibbles your ear as she whispers "You okay? You sounded like you were really enjoying it."');
    scene.text('You laugh and nod. "Yeah, but my ass fucking hurts."');
    scene.text('She giggles. "Well, I guess you need more practice at being an anal whore then. Don\'t worry, by the time I\'m done with you, you\'ll barely notice when a guy sticks his dick in there."');
    scene.text('You roll your eyes. "Thanks, but I think I would rather you left my asshole intact if you don\'t mind." The two of you laugh as you lie against each other for a few minutes before she gets up and starts cleaning up and getting dressed. You get up and do the same.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let her pound you', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('She starts really hammering your ass and you grip the bed sheets tightly in your hands, unsure if the pleasure or pain is winning out at this point. Your moans of pleasure are turning into groans of pain.');
    scene.text('She takes note of your change and her response is to pull almost all the way out of your ass before slamming the full length of the dildo balls deep back into you. She leans forward and puts her lips to your ear. "Tell me that I own you, tell me your asshole is mine to as do with as I please!"');
    scene.text('"I\'m yours! My asshole belongs to you, to do with as you please!" you grunt out, but she doesn\'t relent with the pounding. If anything, she starts fucking you even harder. Despite the roughness, you feel your pleasure building.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'sub', 'rough', 'lube');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme11.jpg');
    scene.text('Finally, sweating and panting, you hear her breathing quickening and her thrusts become more urgent. "Oh fuck, oh fuck… I\'m about to cum." She then suddenly cries out and collapses on top you, her body shaking as she has a powerful orgasm. Several seconds pass before she pulls out and collapses on the bed next to you. "Oh my god, that was amazing! I didn\'t know I could orgasm so hard from wearing one of these."');
    scene.text('You laugh a little. "Good for you, but my ass fucking hurts now."');
    scene.text('She giggles. "Well, I guess you need more practice at being an anal whore then. Don\'t worry, by the time I\'m done with you, you\'ll barely notice when a guy sticks his dick in there."');
    scene.text('You roll your eyes. "Thanks, but I think I would rather you left my asshole intact if you don\'t mind." The two of you laugh as you lie against each other for a few minutes before she gets up and starts cleaning up and dressed. You get up and do the same.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0) {
      scene.text('You pull out the strap-on harness and hold it up. "Yeah, I like this…"');
      scene.text('She laughs, walks over and takes it from you before putting it back in the drawer and closing it. "Well then maybe you should buy one then, huh?"');
      scene.text('A little disappointed she doesn\'t want to play, you just nod. "I already have one, I just liked yours."');
      scene.text('She smiles a bit. "Thanks, I guess. Never heard someone say they like my strapon before, but sure." You can tell she is not interested in playing with it, with you, so you let it drop.');
    } else {
      scene.text('You pull out the strap-on harness and hold it up. "Yeah, I like this…"');
      scene.text('She laughs, walks over and takes it from you before putting it back in the drawer and closing it. "Well then maybe you should buy one then, huh?"');
      scene.text('A little disappointed she doesn\'t want to play, you just nod. "Yeah, I guess I should…"');
    }
    scene.actions([
      { label: 'Look around some more', goto: ['$returnLoc', 'anushroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStraponCowgirl(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush4.jpg');
  scene.text('You grab her arm and pull her over, guiding her to straddle you. She wastes little time and quickly lines up the dildo before easing herself down. You watch as the dildo slowly penetrates her pussy and disappears inside her as she lets out a soft moan. She starts riding you slowly at first, but starts going faster over time. The faster she goes, the louder she moans.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her keep riding it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush5.jpg');
    scene.text('She seems to be having a lot of fun, so you let her stay on top and control the action. She starts moaning louder as she rides you with wild abandon and leans forward to kiss you as she rides the dildo deep. As she keeps going, you can tell she\'s getting close to having an orgasm.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her finish', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush5.jpg');
    scene.text('Not wanting to interrupt her fun, you let her keep riding you. With the dildo buried balls deep in her pussy, she keeps riding it and starts crying out. "Yes, yes, fuck yes!" She finally collapses on top of you as she cries out and you feel the wetness from her orgasm on your skin. Once the orgasm passes, she slowly sits up with a huge grin on her face. "Fuck, I needed that!"');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('She rolls off you and lays next to you with a blissful sigh of contentment. You pull off the harness and toss it aside before looking at her. She glances at you with a huge grin. You lay back with a smile, happy that you could bring so much joy to your friend.');
    scene.text('The two of you lay side by side naked for some time, nearly falling asleep in the silence, before you both begin to stir and get cleaned up and dressed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Make her eat you out', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush9.jpg');
    scene.text('She rolls off you and lays next to you with a blissful sigh of contentment, but you haven\'t finished yet. You pull off the harness and toss it aside before looking at her, legs spread. "Eat me, bitch!"');
    scene.text('She giggles and crawls over, placing her face between your legs. She starts eating you out, her tongue darting around perfectly. The girl really knows how to eat pussy.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush10.jpg');
    scene.text('You\'re so wet that you can feel the building sensation within you threatening to burst out. You\'re just on the edge…');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('Finally, she crawls up to lie beside you and leans over to give you a kiss, giving you a taste of your pussy. After a brief kiss, the two of you lie side by side for a few minutes before she gets up and starts to get cleaned up and dressed, and you do the same.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Switch to doggy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush6.jpg');
    scene.text('You can tell she\'s getting close, but you\'re not yet done. You push her off and she reluctantly crawls off you before you get up on your knees and pull her ass over towards you before pushing her forward onto all fours. You then slide the dildo back into her pussy, causing her to moan loudly.');
    scene.text('You start fucking her from behind, and before long, she\'s slamming her ass back against you, fucking you as much as you\'re fucking her. On one of the thrusts, you pull back enough to slide the dildo out of her completely. She looks back over her shoulder, desperately wanting you to keep fucking her. "Don\'t stop, keep fucking me!" she says near breathlessly.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep fucking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush8.jpg');
    scene.text('You keep fucking her pussy doggy style and it doesn\'t take much longer until she has an intense orgasm. You fuck her all the way through her orgasm.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, yet are unable to cum. You\'re starting to get tired, so decide to stop.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her eat you out', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush9.jpg');
    scene.text('Once she\'s finished, you pull the dildo out of her. She falls forward on the bed and rolls over onto her back as you take off the harness and toss it aside. You\'re not finished yet, so you lay back and spread you legs wide. "Come over here and eat my pussy, bitch!"');
    scene.text('She giggles and crawls over, placing her face between your legs. She starts eating you out, her tongue darting around perfectly. The girl really knows how to eat pussy.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush10.jpg');
    scene.text('You\'re so wet, you can feel the building sensation within you threatening to burst out. You\'re just on the edge…');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('Finally, she crawls up to lie beside you and leans over to give you a kiss, giving you a taste of your pussy. After a brief kiss, the two of you lie side by side for a few minutes before she gets up and starts to get cleaned up and dressed, and you do the same.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and you hear her give a blissful sigh of contentment. She glances at you with a huge grin and you lay back with a smile, happy that you could bring so much joy to your friend.');
    scene.text('The two of you lay side by side naked for some time, nearly falling asleep in the silence, before you both begin to stir and get cleaned up and dressed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Slip it in her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush7.jpg');
    scene.text('You grin as she begs you to keep fucking her. You push your hips forward and line the tip of the dildo up with her asshole. You barely get it lined up before you push forward, popping the head of the dildo into her asshole as you hear her gasp in a mix of pleasure and pain.');
    scene.text('You start fucking her ass slowly and not too deep. Her moans and cries of pleasure grow with each thrust and you get caught up in the moment and start going balls deep into her ass pretty hard. She eventually reaches back with one arm and places her hand on your hip, trying to slow you down a little and keep you from going so deep.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Punish that ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Punish that ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush8.jpg');
    scene.text('You push her hand away and pull back until the dildo slides out of her ass. She drops her hand back down on the bed, but once she does, you push the tip against her gaping asshole and shove it back in balls deep, which causes her to cry out a little.');
    scene.text('You grab her hips with both hands and start pounding her ass as hard as you can. "Bitch, your ass is mine and I\'ll fuck it however I want! I\'ll fuck you so hard you won\'t be able to sit down for a week!" you bark in a commanding tone.');
    scene.text('She doesn\'t respond, but you can tell she\'s getting off despite the pain. Before too long, she has an intense orgasm that leaves her quivering for several minutes, barely able to breathe.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, yet are unable to cum. You\'re starting to get tired, so decide to stop.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('You pull the dildo out of her ass and hear her sigh in relief as you remove the harness before throwing it on the floor. She rolls over onto her back.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and she glances at you. "Bitch!" There\'s no heat to her words and the huge grin gives away her true mood.');
    scene.text('You giggle at her comment. "Shut up, butt slut! You know you loved getting your ass pounded."');
    scene.text('She gives you a playful shove. "Fuck you, my ass hurts right now."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Next time, I\'m going to fuck your ass just as hard."');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and that you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Make her eat you out', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush9.jpg');
    scene.text('You haven\'t had your release yet, so you look at her as you lay back and spread your legs. "Eat me, bitch!"');
    scene.text('She giggles and crawls over, placing her face between your legs. She starts eating you out, her tongue darting around perfectly. The girl really knows how to eat pussy.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush10.jpg');
    scene.text('You\'re so wet that you can feel the building sensation within you threatening to burst out. You\'re just on the edge…');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('Finally, she crawls up to lie beside you and leans over to give you a kiss, giving you a taste of your pussy. After a brief kiss, the two of you lie side by side for a few minutes before she gets up and starts to get cleaned up and dressed, and you do the same.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and she glances at you. "Bitch!" There\'s no heat to her words and the huge grin gives away her true mood.');
    scene.text('You giggle at her comment. "Shut up, butt slut. You know you loved getting your ass pounded."');
    scene.text('She gives you a playful shove. "Fuck you, my ass really hurts right now."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Next time, I\'m going to fuck your ass just as hard."');
    scene.text('You laugh at her comment. "We\'ll see my little butt slut, we\'ll see…"');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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
      { label: 'Ease up', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush7.jpg');
    scene.text('You take the hint and back off. After you slow down a little, she starts moaning louder. "Oh god yes, fuck yes! Fuck my ass, fuck it!" Shortly after, she has a massive orgasm that leaves her withering on the bed.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, yet are unable to cum. You\'re starting to get tired, so decide to stop.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('You pull the dildo out of her ass and hear her sigh in pleasure as you remove the harness before throwing it on the floor. She rolls over onto her back.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and she glances at you. "Oh fuck, that was amazing!" She gives you a huge grin.');
    scene.text('You giggle at her comment. "I know, I\'m the best and you know you loved getting your ass fucked."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the sensation of having a gaping asshole."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Bitch!" she says playfully');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Make her eat you out', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush9.jpg');
    scene.text('You haven\'t had your release yet, so you look at her as you lay back and spread your legs. "Eat me, bitch!"');
    scene.text('She giggles and crawls over, placing her face between your legs. She starts eating you out, her tongue darting around perfectly. The girl really knows how to eat pussy.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush10.jpg');
    scene.text('You\'re so wet that you can feel the building sensation within you threatening to burst out. You\'re just on the edge…');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but you just can\'t cum. You don\'t know why, but you just can\'t. You wither around faking an orgasm before pulling away from her. She gives you a look and you think she knows you faked it, but she doesn\'t say anything.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('Finally, she crawls up to lie beside you and leans over to give you a kiss, giving you a taste of your pussy. After a brief kiss, the two of you lie side by side for a few minutes before she gets up and starts to get cleaned up and dressed, and you do the same.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and she glances at you. "Oh fuck, that was amazing!" She gives you a huge grin.');
    scene.text('You giggle at her comment. "I know, I\'m the best and you know you loved getting your ass fucked."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the sensation of having a gaping asshole."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Bitch!" she says playfully');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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
  scene.build();
}

function enterStraponCowgirlMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush4.jpg');
  scene.text('You grab her arm and pull her over, guiding her to straddle you. She wastes little time and quickly lines up your dick, just having her hand grip your dick feels pleasant. When she eases herself down, you feel your dick slowly slide into her wet pussy, causing you both to moan in pleasure. You watch as your dick slowly penetrates her pussy and disappears inside her completely. She starts riding you slowly at first, but starts going faster over time. The faster she goes, the louder she moans, while you moan as well, as her pussy grips your dick tightly milking it with each stroke.');
  qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her keep riding it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush5.jpg');
    scene.text('She seems to be having a lot of fun, so you let her stay on top and control the action. She starts moaning louder as she rides you with wild abandon and leans forward to kiss you as she rides your dick balls deep. As she keeps going, you can tell she\'s getting close to having an orgasm.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her finish', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush5.jpg');
    scene.text('Not wanting to interrupt her fun, you let her keep riding you. With your cock buried balls deep in her pussy, she keeps riding it and starts crying out. "Yes, yes, fuck yes!" She finally collapses on top of you as she cries out and you feel the wetness from her orgasm on your cock and balls, as it runs down onto you. Once her orgasm passes, you feel your balls tighten and you can tell you are close yourself. So you grab onto her hips to hold her on top of you as you start fucking her from beneath.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('She lifts off you, as she does, you feel your cock slide out of her warm wet pussy, then she rolls off you, and lays next to you with a blissful sigh of contentment. "Fuck, I needed that!" You pull off the harness and toss it aside before looking at her. She glances at you with a huge grin. You lay back with a smile, happy that you could bring so much joy to your friend.');
    qspCall(s, 'arousal', 'magicd_vaginal', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Switch to doggy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush6.jpg');
    scene.text('You can tell she\'s getting close, but you\'re not yet done. You push her off and she reluctantly crawls off you before you get up on your knees and pull her ass over towards you before pushing her forward onto all fours. You then slide your cock back into her warm wet tight pussy, causing you both to moan loudly.');
    scene.text('You start fucking her from behind, and before long, she\'s slamming her ass back against you, fucking you as much as you\'re fucking her, while her pussy has a python grip on your cock, which feels amazing. On one of the thrusts, you pull back enough to slide the dildo out of her completely. She looks back over her shoulder, desperately wanting you to keep fucking her. "Don\'t stop, keep fucking me!" she says near breathlessly.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep fucking her pussy', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie2.jpg');
    scene.text('You keep fucking her pussy doggy style and it doesn\'t take much longer until she has an intense orgasm. You fuck her all the way through her orgasm.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('When you finally pull your dick out of her warm wet pussy, you see your cum come running out of her. With how wet she is, you don\'t even think she has noticed you pumped her twat full of your cum. She falls forward on the bed and rolls over onto her back as you take off the harness and toss it aside, ending the magic. After a brief kiss, the two of you lie side by side for a few minutes before she gets up and starts to get cleaned up and dressed, and you do the same.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Slip it in her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush7.jpg');
    scene.text('You grin as she begs you to keep fucking her. You push your hips forward and line the tip of your cock up with her asshole. You barely get it lined up before you push forward, popping the head of your dick into her asshole as you hear her gasp in a mix of pleasure and pain.');
    scene.text('You start fucking her ass slowly and not too deep. Her moans and cries of pleasure grow with each thrust. As her tight little also grips the shaft of your cock, you start really getting into it, the feeling is amazing, you get caught up in the moment, and start going balls deep into her ass pretty hard and fast. She eventually reaches back with one arm and places her hand on your hip, trying to slow you down a little, to keep you from going so deep and hard.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Punish that ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Punish that ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush8.jpg');
    scene.text('You push her hand away and pull back until your cock slides out of her warm tight asshole. She drops her hand back down on the bed, but once she does, you push the tip against her gaping asshole and shove it back in balls deep, which causes her to cry out a little.');
    scene.text('You grab her hips with both hands and start pounding her ass as hard as you can. "Bitch, your ass is mine and I\'ll fuck it however I want! I\'ll fuck you so hard you won\'t be able to sit down for a week!" you bark in a commanding tone.');
    scene.text('She doesn\'t respond, but you can tell she\'s getting off despite the pain, just as you feel yourself building up as your balls tighten up, not just the fucking, but being dominate is turning you on. Before too long, she has an intense orgasm that leaves her quivering for several minutes, barely able to breathe. You keep fucking her butt with your cock all the way through her orgasm, her orgasm causes her muscles to spasm, tightening around your dick until you can\'t take it anymore yourself.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('You pull your cock out of her ass and hear her sigh in relief as you remove the harness, ending the spell, before throwing it on the floor. She rolls over onto her back.');
    scene.text('You lay next to her and she glances at you. "Bitch!" There\'s no heat to her words and the huge grin gives away her true mood.');
    scene.text('You giggle at her comment. "Shut up, butt slut! You know you loved getting your ass pounded."');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('She gives you a playful shove. "Fuck you, my ass hurts right now."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Next time, I\'m going to fuck your ass just as hard."');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and that you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ease up', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush7.jpg');
    scene.text('You take the hint and back off. After you slow down a little, she starts moaning louder. "Oh god yes, fuck yes! Fuck my ass, fuck it!" Shortly after, she has a massive orgasm that leaves her withering on the bed. You keep fucking her butt with your cock all the way through her orgasm, her orgasm causes her muscles to spasm, tightening around your dick until you can\'t take it anymore yourself.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('You pull your cock out of her ass and hear her sigh in relief as you remove the harness, ending the spell, before throwing it on the floor. She rolls over onto her back.');
    scene.text('You lay next to her and she glances at you. "Bitch!" There\'s no heat to her words and the huge grin gives away her true mood.');
    scene.text('You giggle at her comment. "Shut up, butt slut! You know you loved getting your ass pounded."');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lay next to her and she glances at you. "Oh fuck, that was amazing!" She gives you a huge grin.');
    scene.text('You giggle at her comment. "I know, I\'m the best and you know you loved getting your ass fucked."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the sensation of having a gaping asshole."');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you, isn\'t it?"');
    scene.text('She flips you the bird. "Bitch!" she says playfully');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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

function enterDomnushFuckpussy(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush4.jpg');
  if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
    scene.text('You push her face forward onto the bed, then crawl on your knees behind her. Once behind her, you grab her hips and lift them back, encouraging her to get on all fours in front of you. You take the strap-on harness and slide it on, pulling the straps tightly before rubbing her pussy with your fingers and finding that it\'s already soaking wet. You could use this moment to cast the spell.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'stat', '');
    if ((!((s as any).penisEnvyVariable ?? 0))) {
      scene.actions([
        { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Fuck her pussy', goto: ['anushkaev1', 'strapon_doggy_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her pussy', goto: ['anushkaev1', 'strapon_doggy'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her pussy', goto: ['anushkaev1', 'strapon_doggy_magic'] },
      ]);
    }
  } else {
    scene.text('You push her face forward onto the bed, then crawl on your knees behind her. Once behind her, you grab her hips and lift them back, encouraging her to get on all fours in front of you. You take the strap-on harness and slide it on, pulling the straps tightly before rubbing her pussy with your fingers and finding that it\'s already soaking wet.');
    scene.actions([
      { label: 'Fuck her pussy', goto: ['anushkaev1', 'strapon_doggy'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDomnushDoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush4.jpg');
  scene.text('You crawl up behind her and rub the tip of the dildo against her wet slit. With just a slight movement of your hips, the cock easily slides into her wet pussy, eliciting a soft moan of pleasure. You grab onto her hips with your hands and bury the cock balls deep into her, causing her to gasp and moan loudly in pleasure.');
  scene.text('While hanging onto her hips, you pull nearly all the way out of her and slam it back as far as it will go before you start fucking her as hard and rough as you can. You could keep fucking her pussy, but you can\'t help but notice her asshole just looks like it\'s begging for a big cock to rip it up.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush5.jpg');
    scene.text('You keep it up, pounding her pussy with wild abandon as she moans and withers under you. It doesn\'t seem to matter how hard or fast you fuck her, she loves every moment of it. After several more minutes of this, her breathing gets faster. You could fuck her until she cums, but you can\'t help but notice her asshole just looks like it\'s begging for a big cock to rip it up…');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her finish', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You keep it up, until finally, with both of you sweating and panting, you hear her breathing quickening and your thrusts become more urgent. "Oh fuck, oh fuck… I\'m about to cum." She suddenly cries out and collapses face first onto the bed. You follow her down and keep fucking her, her body shaking underneath you as she has a powerful orgasm.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but just can\'t cum. You\'re starting to get tired and decide to stop.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You roll off her, pulling the strap-on out of her pussy as you do, and take a second to slip the harness off before laying next to her as she turns over on her back and you hear her give a blissful sigh of contentment. She glances at you with a huge grin and you lay back with a smile, happy that you could bring so much joy to your friend.');
    scene.text('The two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass1'] },
    ]);
  } },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass1'] },
    ]);
  } },
    { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass1'] },
  ]);
  scene.build();
}

function enterStraponDoggyMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush4.jpg');
  scene.text('You crawl up behind her and rub the tip of your dick against her wet slit. With just a slight movement of your hips, your cock easily slides into her tight warm wet pussy, eliciting a soft moan of pleasure, from you both. You grab onto her hips with your hands and bury the cock balls deep into her, causing her to gasp and moan loudly in pleasure.');
  scene.text('While hanging onto her hips, you pull nearly all the way out of her and slam it back as far as it will go before you start fucking her as hard and rough as you can. You could keep fucking her pussy, but you can\'t help but notice her asshole just looks like it\'s begging for a big cock to rip it up and you just so happen to be magically endowed with a big cock.');
  qspCall(s, 'arousal', 'magicd_vaginal', 5, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush5.jpg');
    scene.text('You keep it up, pounding her pussy with wild abandon as she moans and withers under you, as you feel your balls slap against her clit. It doesn\'t seem to matter how hard or fast you fuck her, she loves every moment of it. After several more minutes of this, her breathing gets faster. You could fuck her until she cums, but you can\'t help but notice her asshole just looks like it\'s begging for a big cock to rip it up… and you just so happen to be magically endowed with a big cock.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her finish', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/pc/magic/penis_envy/creampie2.jpg');
    scene.text('You keep it up, until finally, with both of you sweating and panting, you hear her breathing quickening and your thrusts become more urgent. "Oh fuck, oh fuck… I\'m about to cum." She suddenly cries out and collapses face first onto the bed. You follow her down and keep fucking her, her body shaking underneath you as she has a powerful orgasm. As her orgasm\'s you feel her pussy tighten around your cock like a python.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('When you finally pull your dick out of her warm wet pussy, you see your cum come running out of her. With how wet she is, you don\'t even think she has noticed you pumped her twat full of your cum.');
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You roll off her, pulling your cock out of her pussy as you do, and take a second to slip the harness off, breaking the magic, before laying next to her as she turns over on her back and you hear her give a blissful sigh of contentment. She glances at you with a huge grin and you lay back with a smile, happy that you could bring so much joy to your friend.');
    scene.text('The two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass_magic1'] },
    ]);
  } },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass_magic1'] },
    ]);
  } },
    { label: 'Fuck her ass', goto: ['anushkaev1', 'domnush_fuckass_magic1'] },
  ]);
  scene.build();
}

function enterDomnushFuckass1(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You slip your dick out of her wet pussy while letting go of one of her hips with one of your hands. You use that hand to grip the fake cock and guide it to her asshole. You feel her start to pull away when the tip makes content with her asshole, but you hold her fast with your one remaining hand. You shove your hips forward and feel her ass resisting the invasion of the dildo, but then feel it give way and your fake wet cock slides into her ass.');
  scene.text('She cries out in a mix of surprise, pain and pleasure. You\'re not sure which is the stronger emotion she\'s feeling, but you don\'t really care as you shove the full length of the shaft balls deep into her ass.');
  qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you keep fucking her ass, you hear her occasional hiss in pain between the moans of pleasure. You can tell she is enjoying the rough butt fucking you are giving her, even if she is finding it a little painful at times. "Oh fuck, oh fuck… slow down a little… oh…"');
    scene.text('You ignore her request to slow down and she starts breathing heavily. You can tell she\'s getting close to an orgasm. "AH, AH… AH, OH… OH…" She lets out a cry of pleasure as she finally cums. You hold onto her hips and plough her ass all the way through her orgasm. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    scene.text('Now that she\'s had her orgasm, you could give her ass a rest, but you\'re feeling very aroused. The harness rubbing against your clit with each thrust, the heady power of being the one doing the fucking and in complete control, not to mention just listening to her get off. Maybe you can just keep fucking her a little more and get off yourself? You grin at your own thoughts as you watch her coming down from her orgasm.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('You tighten your grip on her hips with your hands and keep pounding her ass hard and fast before you hear her sucking in breath sharply. "Okay… Fuck, can you stop? It\'s really starting to hurt…"');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there. Just a few more minutes," you tell her as you adjust your thrusts, trying to get the harness to rub your clit as much as possible.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but just can\'t cum. You\'re starting to get tired and decide to stop.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
    ]);
  } },
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
    ]);
  } },
    { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
  ]);
  scene.build();
}

function enterDomnushFuckassAfterglow1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
  scene.text('Having had your fun, you pull back until the fake cock slides out of her ass and she lets out a relieved sigh. "Fuck, that kind of hurt." There\'s no heat to her words and the huge grin gives away her true mood.');
  scene.text('You giggle a little at her comment. "You know you loved getting your ass fucked."');
  scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the sensation of having a gaping asshole."');
  scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you isn\'t it." You say teasing her.');
  scene.text('She flips you the bird. "Bitch!" she says playfully');
  scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
  scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
  scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
  scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
  ]);
  scene.build();
}

function enterDomnushFuckassMagic1(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You slip your dick out of her wet pussy while letting go of one of her hips with one of your hands. You use that hand to grip your cock and guide it to her asshole. You feel her start to pull away when the tip makes content with her asshole, but you hold her fast with your one remaining hand. You shove your hips forward and feel her ass resisting the invasion your dick, but then feel it give way and your wet cock slides into her ass.');
  scene.text('She cries out in a mix of surprise, pain and pleasure. You\'re not sure which is the stronger emotion she\'s feeling, but you don\'t really care as you shove the full length of the shaft balls deep into her ass, making you moan in pleasure.');
  qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you keep fucking her ass, you hear her occasional hiss in pain between the moans of pleasure. You can tell she is enjoying the rough butt fucking you are giving her, even if she is finding it a little painful at times. "Oh fuck, oh fuck… slow down a little… oh…"');
    scene.text('You ignore her request to slow down, the feeling of her tight little asshole gripping the shaft of your cock, milking it with every stroke is almost more than you can take. She starts breathing heavily, you can tell she\'s getting close to an orgasm. "AH, AH… AH, OH… OH…" She lets out a cry of pleasure as she finally cums. You hold onto her hips and plough her ass all the way through her orgasm, you feel as her muscles tighten around your cock even more. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    scene.text('Now that she\'s had her orgasm, you could give her ass a rest, but you really want to cum yourself. The feeling of her tight little asshole gripping the shaft of your dick tightly makes you really not want to stop, not yet anyways. Maybe you can just keep fucking her a little more and get off yourself? You grin at your own thoughts as you watch her coming down from her orgasm.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('You tighten your grip on her hips with your hands and keep pounding her ass hard and fast before you hear her sucking in breath sharply. "Okay… Fuck, can you stop? It\'s really starting to hurt…"');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there. Just a few more minutes," you tell her as you shoved your cock balls deep into her ass, pounding it as hard and fast as you can.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('Having had your fun, you pull back until the cock slides out of her ass and she lets out a relieved sigh. "Fuck, that kind of hurt." There\'s no heat to her words and the huge grin gives away her true mood.');
    scene.text('You giggle a little at her comment. "You know you loved getting your ass fucked."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the sensation of having a gaping asshole."');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you isn\'t it." You say teasing her.');
    scene.text('She flips you the bird. "Bitch!" she says playfully');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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

function enterDomnushFuckass2(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/lubeit.jpg');
  if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
    scene.text('Having decided to just go straight to fucking her ass, you grab the bottle of lube off her nightstand. You start to squirt a lot of lube onto the fake cock before a mischievous thought crosses your mind. What if you lubed up just the tip, enough to get it in her ass, and then fuck her?');
    scene.text('You look at her ass and then to the lube bottle in your hand. Do you really want to do that to your friend? Would she mind? Maybe she\'ll enjoy it? Would you get off on it more? You could use this moment to cast the spell.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'stat', '');
    if ((!((s as any).penisEnvyVariable ?? 0))) {
      scene.actions([
        { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Lube the dildo up', goto: ['anushkaev1', 'domnush_fuckass_lubed_magic'] },
        { label: 'Just lube the tip', goto: ['anushkaev1', 'domnush_fuckass_nolube_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Lube the dildo up', goto: ['anushkaev1', 'domnush_fuckass_lubed'] },
        { label: 'Just lube the tip', goto: ['anushkaev1', 'domnush_fuckass_nolube'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lube the dildo up', goto: ['anushkaev1', 'domnush_fuckass_lubed_magic'] },
        { label: 'Just lube the tip', goto: ['anushkaev1', 'domnush_fuckass_nolube_magic'] },
      ]);
    }
  } else {
    scene.text('Having decided to just go straight to fucking her ass, you grab the bottle of lube off her nightstand. You start to squirt a lot of lube onto the fake cock before a mischievous thought crosses your mind. What if you lubed up just the tip, enough to get it in her ass, and then fuck her?');
    scene.text('You look at her ass and then to the lube bottle in your hand. Do you really want to do that to your friend? Would she mind? Maybe she\'ll enjoy it? Would you get off on it more?');
    scene.actions([
      { label: 'Lube the dildo up', goto: ['anushkaev1', 'domnush_fuckass_lubed'] },
      { label: 'Just lube the tip', goto: ['anushkaev1', 'domnush_fuckass_nolube'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDomnushFuckassLubed(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You decide it will be more fun for both of you if you use plenty of lube. You squirt a generous amount onto the dildo and stroke it several times, working the lube the length of the shaft. She looks back over her shoulder at you and notices what you\'re doing. "What, straight in my ass? You\'re not going to at least get me going and fuck my pussy first? Or at least lick me or finger bang me first?"');
  scene.text('You add a little extra to the tip, then put a little on your fingers and rub it against her asshole. "Like you don\'t let any guy just shove his cock up your ass anytime he wants! I know you\'re a little butt slut and love it." Once her asshole is lubed up, you hold the dildo with one hand while placing another on her hip and guiding the dildo to her asshole.');
  scene.text('Her ass resists the invasion of your fake cock. You feel the pressure building up as she tries to pull away when you try and force it in, but you hold her fast with your one remaining hand. "Just relax and take a deep breath bitch," you tell her as you slap her ass. She takes a deep breath and stops moving as she tries to relax.');
  scene.text('You shove your hips forward and feel her asshole give way as your fake cock slides into her ass. She hisses in a mix of pain and pleasure. You\'re not sure which is the stronger emotion she\'s feeling, but you don\'t really care as you shove the full length of the shaft balls deep into her ass.');
  qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you start fucking her ass, you watch as her ass swallows the full length of your dick. You can\'t shove it any deeper into her, now you place your other hand on her hip and hang onto her hips with both of your hands. "Fuck, your ass feels so tight! It\'s gripping my cock so tightly." You hear her moan loudly, your dirty talk turning her on, as she reaches between her legs to rub her clit. You pull the dildo about halfway out of her ass before sliding it all the way back in. You start slowly fucking her faster and harder as she moans and groans in a mix of pain and pleasure.');
    scene.text('As you keep fucking her ass, you hear her occasionally hiss in pain between her moans of pleasure. You can tell she is enjoying the rough butt fucking you are giving her, even if she is finding it a little painful at times. "Oh fuck, oh fuck… Slow down a little… Oh…"');
    scene.text('You ignore her request to slow down as she starts breathing heavily. You can tell she\'s getting close to an orgasm. "AH, AH… AH, OH… OH…" She lets out a cry of pleasure as she finally cums. You hold onto her hips and plough her ass all the way through her orgasm. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    scene.text('Now that she\'s had her orgasm, you could give her ass a rest, but you\'re feeling very aroused. The harness rubbing against your clit with each thrust, the power of being the one doing the fucking and in complete control, not to mention just listening to her get off. Maybe you can just keep fucking her a little more and get off yourself? You grin at your own thoughts as you watch her coming down from her orgasm.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('As the two of you keep going, you fuck her harder and faster, pulling the dildo almost all the way out of her ass before roughly slamming it back into her balls deep. You sometimes pull back a bit too far and it completely slides out of her ass, causing her to sigh in relief, but also disappointment. It only takes you a second to quickly slide the fake cock back into her gaping asshole, which always causes her to white knuckle the sheets and gasp loudly.');
    scene.text('After a while, you hear her sucking in breath sharply. "Okay… Fuck, can you stop? It\'s really starting to hurt…" You tighten your grip on her hips with your hands and keep pounding her ass hard and fast.');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there. Just a few more minutes," you tell her as you adjust your thrusts, trying to get the harness to rub your clit as much as possible.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re so close, but just can\'t cum. You\'re starting to get tired, so you decide to stop and give her ass a break.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
    ]);
  } },
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
    ]);
  } },
    { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow1'] },
  ]);
  scene.build();
}

function enterDomnushFuckassLubedMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You decide it will be more fun for both of you if you use plenty of lube. You squirt a generous amount onto your dick and stroke it several times, working the lube the length of the shaft. She looks back over her shoulder at you and notices what you\'re doing. "What, straight in my ass? You\'re not going to at least get me going and fuck my pussy first? Or at least lick me or finger bang me first?"');
  scene.text('You add a little extra to the tip, then put a little on your fingers and rub it against her asshole. "Like you don\'t let any guy just shove his cock up your ass anytime he wants! I know you\'re a little butt slut and love it." Once her asshole is lubed up, you hold your dick with one hand while placing another on her hip and guiding yoru cock to her asshole.');
  scene.text('Her ass resists the invasion of your cock. You feel the pressure building up as she tries to pull away when you try and force it in, but you hold her fast with your one remaining hand. "Just relax and take a deep breath bitch," you tell her as you slap her ass. She takes a deep breath and stops moving as she tries to relax.');
  scene.text('You shove your hips forward and feel her asshole give way as your cock slides into her well lubed ass, once it is in, it slides pretty easily with all the lube the rest of the way in. She hisses in a mix of pain and pleasure. You\'re not sure which is the stronger emotion she\'s feeling, but you don\'t really care as you shove the full length of your dick balls deep into her ass.');
  qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you start fucking her ass, you watch as her ass swallows the full length of your dick. You can\'t shove it any deeper into her, now you place your other hand on her hip and hang onto her hips with both of your hands. "Fuck, your ass feels so tight! It\'s gripping my cock so tightly." You hear her moan loudly, your dirty talk turning her on, as she reaches between her legs to rub her clit. You pull your cock about halfway out of her ass before sliding it all the way back in. You start slowly fucking her faster and harder as she moans and groans in a mix of pain and pleasure, while all you feel is the pleasure of her butt milking your cock, as it grips your shaft tightly.');
    scene.text('As you keep fucking her ass, you hear her occasionally hiss in pain between her moans of pleasure. You can tell she is enjoying the rough butt fucking you are giving her, maybe as much as you are enjoying the sensation of your cock fucking her ass, even if she is finding it a little painful at times. "Oh fuck, oh fuck… Slow down a little… Oh…"');
    scene.text('You ignore her request to slow down as she starts breathing heavily. You can tell she\'s getting close to an orgasm and you are not to far off yourself. "AH, AH… AH, OH… OH…" She lets out a cry of pleasure as she finally cums. You hold onto her hips and plough her ass all the way through her orgasm. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('As the two of you keep going, you fuck her harder and faster, pulling your cock almost all the way out of her ass before roughly slamming it back into her, until you feel your balls slap against her wet slit. You sometimes pull back a bit too far and it completely slides out of her ass, causing her to sigh in relief, but also disappointment. It only takes you a second to quickly slide your cock back into her gaping asshole, where it slides easily back into her. Which always causes her to white knuckle the sheets and gasp loudly.');
    scene.text('After a while, you hear her sucking in breath sharply. "Okay… Fuck, can you stop? It\'s really starting to hurt…" You tighten your grip on her hips with your hands and keep pounding her ass hard and fast.');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there. Just a few more minutes," you tell her as you hammer your cock balls deep into her butt as hard and fast as you can. Now her moans have completely turned into grunts of pain.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('Having had your fun, you pull back until the cock slides out of her ass and she lets out a relieved sigh. "Fuck, that hurt." There\'s not much heat to her words, she had fun you can tell.');
    scene.text('You giggle a little at her comment. "You know you loved getting your ass fucked raw."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the burning sensation, from you fucking it raw."');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lean over and give her a kiss on the lips. "That\'s a natural state for you isn\'t it." You say teasing her.');
    scene.text('She flips you the bird. "Bitch!" she says playfully');
    scene.text('You laugh at her comment. "Come on, tell me you\'re a butt slut and you love being my butt slut," you say in a commanding tone.');
    scene.text('She rolls her eyes at you and is silent until you elbow her slightly and she sighs. "I\'m a butt slut and I love being your butt slut. Happy?"');
    scene.text('You giggle loudly, then turn your head to give her a kiss on the lips. "Yes, I\'m happy."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed and cleaned up.');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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

function enterDomnushFuckassNolube(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (2);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You decide it will be more fun to completely dominate her and make this about you. You squirt just a little onto the tip of the large fuck dick, just enough to get the head nice and slick. She looks back over her shoulder at you and notices what you\'re doing. "What, straight in my ass? You\'re not going to at least get me going and fuck my pussy first? Or at least lick me or finger bang me first?"');
  scene.text('"Like you don\'t let any guy just shove his cock up your ass anytime he wants! I know you\'re a little butt slut and you love it," you reply as you grip the fake cock and guide it to her asshole.');
  scene.text('"Just make sure to use plenty of lube, okay?" she says, obviously having noticed that you didn\'t apply much lube to the dildo and none to her ass.');
  scene.text('You snort as you grab her hip with one hand. "Like you need much lube with how loose your ass is. Just take a deep breath and enjoy it slut! This is about me, not you, so shut up."');
  scene.text('Her ass resists the invasion of your fake cock. You feel the pressure building up and she tries to pull away as you try and force it in, but you hold her fast with your one remaining hand. "Just relax and take a deep breath, bitch," you tell her as you slap her ass. She takes a deep breath and stops moving as she tries to relax.');
  scene.text('You shove your hips forward and feel her asshole give way as your fake cock slides into her ass. She hisses in a mix of pain and pleasure and you notice she grips the sheets tightly, making her knuckles go white. "FUCK!" she cries out loudly.');
  qspCall(s, 'arousal', 'anal_strap_give', 2, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you start fucking her ass, you can\'t get it very deep. You can feel the resistance to your barely lubed dick as you try and force it deeper into her ass. You can\'t shove it any deeper into her, so you take a second to stop and spit in the crack of her ass to provide a little more lube. You pull out a little and grab onto her hips with both hands. "Fuck, your ass feels so tight! It\'s gripping my cock so tightly."');
    scene.text('"FUCK! Shit! It fucking hurts, use more lube!" she says in a pleading tone and you slap her ass hard in response.');
    scene.text('"Shut up! Stop resisting and it will stop hurting!" you tell her as you add another bit of spit. At this point, you\'ve managed to get it half way into her ass, each thrust getting just a little deeper.');
    scene.text('As you keep fucking her ass, you hear her groan and occasionally hiss in pain. You\'re not sure if she\'s enjoying this at all, but you occasionally hear one of her groans turn into a moan of pleasure. "Oh fuck, oh fuck… Slow down a little… Oh… Please use more lube."');
    scene.text('You ignore her request to slow down or use more lube, having finally managed to work the fake dick balls deep into her ass. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    // TODO-QSP: dynamic text: "Please stop <<$pcs_nickname>>, it's really starting to hurt! My ass feels like ...
    scene.text(`"Please stop ${((s as any).pcs_nickname ?? 0)}, it's really starting to hurt! My ass feels like it's on fire!" she pleads with you and tries to pull away but you dig your fingernails into her hips to hold her in place. Maybe you should give her ass a rest, but this has you very aroused. The harness rubbing against your clit with each stroke, the heady power of being the one doing the fucking and in complete control, and knowing this is all about your pleasure. Maybe you can just keep fucking her a little more and get off yourself, I mean if you don't get off you could argue this was for nothing.`);
    qspCall(s, 'arousal', 'anal_strap_give', 2, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('As you keep going, fucking her harder and faster, you hear her sucking in breath sharply. "Please, please stop!" You tighten your grip on her hips with your hands and keep pounding her ass hard and fast.');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there, but the more you talk, the longer this will take!" You adjust your thrusts, trying to get the harness to rub your clit as much as possible.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'anal_strap_give', 2, 'lesbian', 'dom', 'rough');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re nearly overwhelmed by the wild excitement of fucking Anushka\'s asshole. You\'re so close, but just can\'t cum. You\'re starting to get tired and imagine you\'ve fucked her asshole raw by now.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow2'] },
    ]);
  } },
      { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow2'] },
    ]);
  } },
    { label: 'Pull out', goto: ['anushkaev1', 'domnush_fuckass_afterglow2'] },
  ]);
  scene.build();
}

function enterDomnushFuckassAfterglow2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
  scene.text('Having had your fun, you pull back until the fake cock slides out of her ass and lets out a relieved sigh. She lays on her side and rubs her ass. "You fucking cunt!" You\'re unsure how serious she is since she looks like she\'s in a bit of pain right now.');
  scene.text('You giggle a little at her comment. "Shut up, butt slut. You know you loved getting your ass pounded."');
  scene.text('She gives you slightly pained expression. "Fuck you, my ass feels like it is on fire right now."');
  scene.text('You lean over and give her a kiss on the lips, which seems to have mollified her a little. "I\'m sorry I got carried away, but you know how I love pounding your cute little ass. Don\'t forget you\'re my little bitch and your ass belongs to me. We both know I can fuck it when, where, and how I want anytime."');
  scene.text('She flips you the bird. "At least use more fucking lube next time! Fuck, my ass hurts."');
  scene.text('You laugh at her comment and notice she said she\'s willing to let you have another go. "I told you, you\'re my bitch. The sooner you accept this, the sooner you\'ll start enjoying it."');
  scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed, cleaning up after your love making, if you can call that while sex ride love making.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
  ]);
  scene.build();
}

function enterDomnushFuckassNolubeMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (2);
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
  scene.text('You decide it will be more fun to completely dominate her and make this about you. You squirt just a little onto the tip of your large dick, just enough to get the head nice and slick. She looks back over her shoulder at you and notices what you\'re doing. "What, straight in my ass? You\'re not going to at least get me going and fuck my pussy first? Or at least lick me or finger bang me first?"');
  scene.text('"Like you don\'t let any guy just shove his cock up your ass anytime he wants! I know you\'re a little butt slut and you love it," you reply as you grip the fake cock and guide it to her asshole.');
  scene.text('"Just make sure to use plenty of lube, okay?" she says, obviously having noticed that you didn\'t apply much lube to your cock and none to her ass.');
  scene.text('You snort as you grab her hip with one hand. "Like you need much lube with how loose your ass is. Just take a deep breath and enjoy it slut! This is about me, not you, so shut up."');
  scene.text('Her ass resists the invasion of your cock. You feel the pressure building up and she tries to pull away as you try and force it in, but you hold her fast with your one remaining hand. "Just relax and take a deep breath, bitch," you tell her as you slap her ass. She takes a deep breath and stops moving as she tries to relax.');
  scene.text('You shove your hips forward and feel her asshole give way as your cock slides into her ass. She hisses in a mix of pain and pleasure and you notice she grips the sheets tightly, making her knuckles go white. "FUCK!" she cries out loudly. While you moan loudly, as her barely lubed asshole grips your dick in a crushing grip.');
  qspCall(s, 'arousal', 'magicd_anal', 2, 'lesbian', 'dom', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you start fucking her ass, you can\'t get it very deep. You can feel the resistance to your barely lubed dick as you try and force it deeper into her ass. You can\'t shove it any deeper into her, so you take a second to stop and spit in the crack of her ass to provide a little more lube. You pull out a little and grab onto her hips with both hands. "Fuck, your ass feels so tight! It\'s gripping my cock so tightly."');
    scene.text('"FUCK! Shit! It fucking hurts, use more lube!" she says in a pleading tone and you slap her ass hard in response.');
    scene.text('"Shut up! Stop resisting and it will stop hurting!" you tell her as you add another bit of spit. At this point, you\'ve managed to get it half way into her ass, each thrust getting just a little deeper.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck her ass raw [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her ass raw [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you keep fucking her ass, you hear her groan and occasionally hiss in pain. You\'re not sure if she\'s enjoying this at all, but you occasionally hear one of her groans turn into a moan of pleasure. "Oh fuck, oh fuck… Slow down a little… Oh… Please use more lube."');
    scene.text('You ignore her request to slow down or use more lube, having finally managed to work your dick balls deep into her ass, the friction from her barely lubed butthole grips the shaft of your cock tightly, it feels amazing. No wonder boys like not using to much lube while fucking. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    // TODO-QSP: dynamic text: "Please stop <<$pcs_nickname>>, it's really starting to hurt! My ass feels like ...
    scene.text(`"Please stop ${((s as any).pcs_nickname ?? 0)}, it's really starting to hurt! My ass feels like it's on fire!" she pleads with you and tries to pull away but you dig your fingernails into her hips to hold her in place. Maybe you should give her ass a rest, but this has you very aroused. Her ass milking your dick with each stroke, the heady power of being the one doing the fucking and in complete control, and knowing this is all about your pleasure. Maybe you can just keep fucking her a little more and get off yourself, I mean if you don't get off you could argue this was for nothing.`);
    qspCall(s, 'arousal', 'magicd_anal', 2, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('As you keep going, fucking her harder and faster, you hear her sucking in breath sharply. "Please, please stop!" You tighten your grip on her hips with your hands and keep pounding her ass hard and fast.');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there, the more you talk, the longer this will take!" You say as you hammer her butt until your balls are bouncing against her pussy.');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('Having had your fun, you pull back until the fake cock slides out of her ass and lets out a relieved sigh. She lays on her side and rubs her ass. "You fucking cunt!" You\'re unsure how serious she is since she looks like she\'s in a bit of pain right now.');
    scene.text('You giggle a little at her comment. "Shut up, butt slut. You know you loved getting your ass pounded."');
    scene.text('She gives you slightly pained expression. "Fuck you, my ass feels like it is on fire right now."');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lean over and give her a kiss on the lips, which seems to have mollified her a little. "I\'m sorry I got carried away, but you know how I love pounding your cute little ass. Don\'t forget you\'re my little bitch and your ass belongs to me. We both know I can fuck it when, where, and how I want anytime."');
    scene.text('She flips you the bird. "At least use more fucking lube next time! Fuck, my ass hurts."');
    scene.text('You laugh at her comment and notice she said she\'s willing to let you have another go. "I told you, you\'re my bitch. The sooner you accept this, the sooner you\'ll start enjoying it."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed, cleaning up after your love making, if you can call that while sex ride love making.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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
      { label: 'Use lube', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush7.jpg');
    scene.text('As you keep fucking her ass, you hear her groan and occasionally hiss in pain. You\'re not sure if she\'s enjoying this at all, but you occasionally hear one of her groans turn into a moan of pleasure. "Oh fuck, oh fuck… Slow down a little… Oh… Please use more lube."');
    scene.text('It seems like she is in more pain than you thought, you grab the bottle of lube and pull your dick out of her ass. She sighs in a relieve as you do, then you squirt some lube into her gaping asshole and squirt some more on the shaft of your dick.');
    scene.text('With her now fully lubed up, you shove your dick back into her asshole, she groans in a pain a bit but also moans in pleasure. Now that her butt is fully lubed you have no problem working your dick balls deep into her ass. You can\'t help but smile. Despite all her talk and attitude, there\'s a small part of her that just loves being dominated and fucked like a slut.');
    // TODO-QSP: dynamic text: "Oh… fuck <<$pcs_nickname>>, that feels so much better… oh… yes…" She starts to ...
    scene.text(`"Oh… fuck ${((s as any).pcs_nickname ?? 0)}, that feels so much better… oh… yes…" She starts to relax and really get into it now.`);
    qspCall(s, 'arousal', 'magicd_anal', 2, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
    scene.text('As you keep going, fucking her harder and faster, you hear her sucking in breath sharply. "Oh fuck… ooohhh fuck… yes… fuck my ass… fuck me…" You tighten your grip on her hips with your hands and keep pounding her ass hard and fast. Suddenly her body starts to spasm as she has an orgasm.');
    scene.text('You\'re trying to focus on your own building orgasm and her talking is distracting you. "Shut up slut, I\'m almost there!" You keep up the hard and fast pounding, hammering your cock balls deep into her butt, until your balls slap against her now soaking wet pussy.');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fill her ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/creampie_anal_girl1.jpg');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    scene.text('Having had your fun, you pull back until the cock slides out of her ass and she lets out a relieved sigh. "Fuck, that hurt." There\'s not much heat to her words, she had fun you can tell.');
    scene.text('You giggle a little at her comment. "You know you loved getting your ass fucked raw."');
    scene.text('She gives you a playful shove and giggles. "Okay yeah, I admit it. I love getting fucked in the ass, but I don\'t enjoy the burning sensation, from you fucking it raw."');
    scene.text('You look at her and smile. "I didn\'t fuck it raw, I used lube."');
    scene.text('She gives you a slightly dirty look, you can tell she is mostly playing… mostly. "Yeah finally, after you almost caught me ass on fire from the friction." You laugh at her over dramatic description of events.');
    qspCall(s, 'arousal', 'magicd_anal', 1, 'lesbian', 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_sleep.jpg');
    scene.text('You lean over and give her a kiss on the lips, which seems to have mollified her a little. "I\'m sorry I got carried away, but you know how I love pounding your cute little ass. Don\'t forget you\'re my little bitch and your ass belongs to me. We both know I can fuck it when, where, and how I want anytime."');
    scene.text('She flips you the bird. "At least use more fucking lube next time! Fuck, my ass hurts."');
    scene.text('You laugh at her comment and notice she said she\'s willing to let you have another go. "I told you, you\'re my bitch. The sooner you accept this, the sooner you\'ll start enjoying it."');
    scene.text('She shakes her head and with the banter finished, the two of you lay side by side naked for some time, nearly falling asleep in the silence before you both begin to stir and get dressed, cleaning up after your love making, if you can call that while sex ride love making.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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

function enterCouchStraponGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A144'] = 1;
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  ((s as any).anushkaQW ?? {})['strapon'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap2.jpg');
  scene.text('You hold it in front of her face to draw her eyes to it. "I\'m going to take this dildo and fuck you like you\'re my personal little fuck toy."');
  scene.text('She bites her lower lip and you can tell she is really turned on. You both lean forward until your lips meet and passionately kissing each other.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make her eat you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap3.jpg');
    scene.text('As the two of you keep kissing, you start taking each other\'s clothes off. Once you\'re fully naked, you break the kiss, but keep your hand behind her neck. Leaning back against the arm of the couch, you spread your legs and pull her face down to your crotch. You feel her tongue flittering against you clit at once. "That\'s right slut! Lick my pussy."');
    scene.text('You lean back and enjoy her tongue plunging inside your pussy, occasionally using your hand to force her face tighter against you, smearing her face with your wetness for several minutes before changing positions.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Sit on her face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Sit on her face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap4.jpg');
    scene.text('You use her hair to pull her head back and she gives you a questioning look. You just keep leaning forward and pulling her hair until she has to lie on her back. Once on her back, you trail your tongue up her stomach and across her breasts to her face before you sit back up. You scoot forward and straddle her face, lowering your pussy down against her face. She starts darting her tongue into your wet pussy while you ride and rub your clit against her face.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap5.jpg');
    if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
      scene.text('Having decided to just go straight to fucking her ass, you grab the bottle of lube off her nightstand. You start to squirt a lot of lube onto the fake cock before a mischievous thought crosses your mind. What if you lubed up just the tip, enough to get it in her ass, and then fuck her?');
      scene.text('You look at her ass and then to the lube bottle in your hand. Do you really want to do that to your friend? Would she mind? Maybe she\'ll enjoy it? Would you get off on it more? You could use this moment to cast the spell.');
      qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
      qspCall(s, 'stat', '');
      if ((!((s as any).penisEnvyVariable ?? 0))) {
        scene.actions([
          { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her_magic'] },
        { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her'] },
        { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her_magic'] },
          { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass_magic'] },
        ]);
      }
    } else {
      scene.text('You use her hair to pull her head back and she gives you a questioning look. You just keep leaning forward and pulling her hair until she has to lie on her back. Once on her back, you pull her legs apart and start gently kiss your way down the insides of her thighs, slowly working your way to her pussy. You find her pussy soaking wet, and she starts moaning as soon as your tongue makes contact with her clit. You alternate between slipping your tongue as deep into her wet pussy as you can and flicking her clit with your tongue for several minutes.');
      scene.text('You then stop and step into the harness and pull it up before pulling the straps tight and adjusting the dildo so it is firm against your pelvis.');
      qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her'] },
        { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
      { label: 'Eat her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap5.jpg');
    scene.text('You use her hair to pull her head back and she gives you a questioning look. You just keep leaning forward and pulling her hair until she has to lie on her back. Once on her back, you pull her legs apart and start gently kissing your way down the insides of her thighs, slowly working your way to her pussy. You find her pussy soaking wet, and she starts moaning as soon as your tongue makes contact with her clit. You alternate between slipping your tongue as deep into her wet pussy as you can and flicking her clit with your tongue for several minutes.');
    scene.text('You then stop, step into the harness and pull it up before pulling the straps tight and adjusting the dildo so it is firm against your pelvis.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her', goto: ['anushkaev1', 'couch_fuck_her'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouchFuckHer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'boyStat', 'D<<strapNumber>>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap6.jpg');
  // TODO-QSP: dynamic text: With the strapon firmly in place, you sit on the couch and pull her onto your la...
  scene.text(`With the strapon firmly in place, you sit on the couch and pull her onto your lap. She straddles you and lowers herself down until the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo slides in, stretching her wet pussy. You let her take the lead and she starts riding you as she leans down towards you. Your lips meet and you begin to kiss as she rides you.`);
  qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['anushkaev1', 'couch_strap_finish'] },
    { label: 'Fuck her more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap7.jpg');
    scene.text('She takes the full length of the dildo into her pussy, her movements becoming more frantic as she moans into your mouth as you kiss. Her thighs slap against yours as she thrusts herself up and down on the dildo until she cries out in orgasm. She slowly rides it out, passionately kissing you as she does.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re nearly overwhelmed by the wild excitement of fucking Anushka\'s pussy. You\'re so close, but just can\'t cum. Once she finishes riding you through her orgasm and comes to a stop, you know you\'ve missed your moment.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['anushkaev1', 'couch_strap_finish'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
    ]);
  } },
    { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass'] },
  ]);
  scene.build();
}

function enterCouchFuckHerAss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'boyStat', 'D<<strapNumber>>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap8.jpg');
  // TODO-QSP: dynamic text: Standing up with the strapon firmly in place, you point at her. "Turn around and...
  scene.text(`Standing up with the strapon firmly in place, you point at her. "Turn around and get on your hands and knees you little slut, I'm gong to fuck your ass now!" She gives you a sly look, gets on her knees and turns around so her ass is facing you. She grabs some lube and applies it to her asshole while you apply a good amount to the dildo, getting it nice and slick. You climb onto the couch and lower yourself down as you line the tip of the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo against her asshole. Pushing forward, you feel some resistanc before the head pops into her ass and she gasps loudly. You grab hold of her hips and start slowly fucking her ass, working it deeper with each stroke.`);
  scene.text('You feel her trying to pull away a little, so you tighten your grip on her hips and pull her back, forcing the strapon balls deep into her ass. "Don\'t pull away from me bitch, your ass belongs to me now." you tell her as you start picking up a little speed.');
  scene.text('"Tell me how much you love getting your ass fucked!" you demand.');
  scene.text('"Oh yes, I love getting my ass fucked! Please fuck me harder!" she moans and begs in reply.');
  qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'anal', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Fuck her ass hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Fuck her ass hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap9.jpg');
    scene.text('"Oh you want me to <i>FUCK</i> your ass? I\'ll fuck your ass like the dirty anal slut you are!" you tell her as you take a really hard grip on her hips, slam the strap-on balls deep into her ass and start really pounding her hole as hard and fast as you can. You can feel her try to pull away as she grips the back of the couch hard. You pull her back, not letting her escape the anal pounding you\'re giving her.');
    // TODO-QSP: dynamic text: "Slow down a little <<$pcs_nickname>>! It's starting to hurt!" she tells you, bu...
    scene.text(`"Slow down a little ${((s as any).pcs_nickname ?? 0)}! It's starting to hurt!" she tells you, but you can tell she's also getting off on it.`);
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her ass hurt', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    ((s as any).anushkaQW ?? {})['strapon_anal_pain'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap10.jpg');
    scene.text('"Shut your mouth slut! I\'ll fuck you however I want!" You grab her by the throat while you hammer her ass without mercy. She pulls away as much as she can until she runs out of room. Now pinned against the back of the couch, you nearly pull the full length of the dildo out of her ass, barely leaving the tip inside her before slamming it back down balls deep as fast as you can.');
    // TODO-QSP: dynamic text: "Fuck <<$pcs_nickname>>, that hurts!" she says as she white knuckles the back of...
    scene.text(`"Fuck ${((s as any).pcs_nickname ?? 0)}, that hurts!" she says as she white knuckles the back of the couch. Despite what she says, she doesn't try to push you off either. You know her well enough to know she's getting off on this. A few minutes later, she cries out in ecstasy and her whole body shakes as she orgasms hard. You keep fucking her as she rides through her orgasm. Once it passes, you step back and pull the dildo out of her ass.`);
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian', 'dom');
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('You\'re nearly overwhelmed by the wild excitement of fucking Anushka\'s asshole. You\'re so close, but just can\'t cum. You fuck her through her own orgasm when you realize you\'re not going to get one yourself.');
    }
    qspCall(s, 'arousal', 'end');
    scene.text('You roll off her and the dildo slides out of her ass as you do.');
    scene.text('She rolls over, placing on hand on her ravaged ass. "Fuck, my ass is going to be sore tomorrow."');
    scene.text('You laugh. "For all the bitching you were doing, I noticed you didn\'t try and push me off either. You know you loved having your ass ripped up."');
    // TODO-QSP: dynamic text: She blushes a little. "Fuck you <<$pcs_nickname>>!" she says in a mostly joking ...
    scene.text(`She blushes a little. "Fuck you ${((s as any).pcs_nickname ?? 0)}!" she says in a mostly joking tone.`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['anushkaev1', 'couch_strap_finish'] },
    ]);
  } },
      { label: 'Catch my spit with your tongue', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap11.jpg');
    scene.text('You decide to show her a little mercy and ease up just a little with the ass fucking you\'re giving her. You wrap your hand around her throat and tilt her head back. "Open your mouth and stick your tongue out, you dirty little slut."');
    scene.text('She does as you tell her and you spit into her mouth. "Eat my cum slut." you demand and she closes her mouth and swallows your spit as you keep fucking her ass.');
    scene.text('Your dirty talk seems to have been enough to push her over the edge. She cries out in ecstasy and her whole body shakes as she orgasms hard. You keep fucking her as she rides through her orgasm. Once it passes, you step back and pull the dildo out of her ass.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['anushkaev1', 'couch_strap_finish'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap9.jpg');
    scene.text('You keep fucking her ass, finding the right depth and rhythm to really make her moan. "You\'re such a dirty little anal slut! Look at you about to cum from getting your asshole fucked!" Your dirty talk seems to have been enough to push her over the edge. She cries out in ecstasy and her whole body shakes as she orgasms hard. You keep fucking her as she rides through her orgasm. Once it passes, you step back and pull the dildo out of her ass.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['anushkaev1', 'couch_strap_finish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouchStrapFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap12.jpg');
  scene.text('You loosen the harness and step out of it. You lean forward and lock lips with her, sharing a passionate kiss for a few minutes. She then breaks the kiss and you both stand to get cleaned up. After cleaning the strap-on, you put it back in your purse and you both get dressed again, bantering back and forth. Once dressed, you both take your seats back on the couch and Anushka changes the channel to some other movie. The two of you then settle down to hang out for a while.');
  qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    (s as any).AnushkaLoc = 2;
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    // TODO-QSP: dynamic text: The two of you watch some cheesy American action movie and chat about how great ...
    scene.text('The two of you watch some cheesy American action movie and chat about how great it will be when you\'re on your own, not having your parents or other people around telling you what to do. You barely pay attention to the movie as you talk. After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already. Come on, let\'s go." she says and gets up and heads to her room\'+iif(anushkaQW[\'strapon_anal_pain\'] = 1, \'though she is walking a little gingerly, her ass still recovering.\', \'.\')+\'');
    // TODO-QSP: 'Her brothers then come running in and to their room, followed by Valeria complaining about where th...
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouchFuckHerMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap6.jpg');
  // TODO-QSP: dynamic text: With the magic melding the strapon to you body, you feel the dildo twitch to lif...
  scene.text(`With the magic melding the strapon to you body, you feel the dildo twitch to life. You sit on the couch and pull her onto your lap. She straddles you and lowers herself down until your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slides in, stretching her wet pussy. Her pussy clenches around your dick, causing you to moan almost as loud as she does. You let her take the lead and she starts riding you as she leans down towards you. Your lips meet and you begin to kiss as she rides you.`);
  qspCall(s, 'arousal', 'magicd_vaginal', 3, 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish on her face', goto: ['anushkaev1', 'couch_strap_finish_magic1'] },
    { label: 'Finish in her mouth', goto: ['anushkaev1', 'couch_strap_finish_magic2'] },
    { label: 'Fuck her more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap7.jpg');
    scene.text('She takes the full length of your magic dick into her pussy, her movements becoming more frantic as she moans into your mouth as you kiss. Her thighs slap against yours as she thrusts herself up and down on your magic cock until she cries out in orgasm. She slowly rides it out, passionately kissing you as she does.');
    scene.actions([
      { label: 'Finish on her face', goto: ['anushkaev1', 'couch_strap_finish_magic1'] },
      { label: 'Finish in her mouth', goto: ['anushkaev1', 'couch_strap_finish_magic2'] },
      { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass_magic'] },
    ]);
  } },
    { label: 'Fuck her ass', goto: ['anushkaev1', 'couch_fuck_her_ass_magic'] },
  ]);
  scene.build();
}

function enterCouchFuckHerAssMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap8.jpg');
  // TODO-QSP: dynamic text: Standing up with your hard magic cock bouncing with your movement, you point at ...
  scene.text(`Standing up with your hard magic cock bouncing with your movement, you point at her. "Turn around and get on your hands and knees you little slut, I'm gong to fuck your ass now!" She gives you a sly look, gets on her knees and turns around so her ass is facing you. She grabs some lube and applies it to her asshole, getting it nice and slick. You climb onto the couch and lower yourself down as you line the tip of the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} magical dick against her asshole. Pushing forward, you feel some resistance before the head of your cock pops into her ass, you both gasps loudly. You feel her tight asshole clenching your dick tightly. You grab hold of her hips and start slowly fucking her ass, working it deeper with each stroke.`);
  scene.text('You feel her trying to pull away a little, so you tighten your grip on her hips and pull her back, forcing magic cock balls deep into her ass. "Don\'t pull away from me bitch, your ass belongs to me now." you tell her as you start picking up a little speed.');
  scene.text('"Tell me how much you love getting your ass fucked!" you demand.');
  scene.text('"Oh yes, I love getting my ass fucked! Please fuck me harder!" she moans and begs in reply.');
  qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'anal', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Fuck her ass hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Fuck her ass hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap9.jpg');
    scene.text('"Oh you want me to <i>FUCK</i> your ass? I\'ll fuck your ass like the dirty anal slut you are!" you tell her as you take a really hard grip on her hips, slam your magic cock balls deep into her ass and start really pounding her hole as hard and fast as you can, you can feel your balls slapping against her wet pussy. You can feel her try to pull away as she grips the back of the couch hard. You pull her back, not letting her escape the anal pounding you\'re giving her.');
    // TODO-QSP: dynamic text: "Slow down a little <<$pcs_nickname>>! It's starting to hurt!" she tells you, bu...
    scene.text(`"Slow down a little ${((s as any).pcs_nickname ?? 0)}! It's starting to hurt!" she tells you, but you can tell she's also getting off on it.`);
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her ass hurt', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) + (1);
    ((s as any).anushkaQW ?? {})['strapon_anal_pain'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap10.jpg');
    scene.text('"Shut your mouth slut! I\'ll fuck you however I want!" You grab her by the throat while you hammer her ass without mercy. She pulls away as much as she can until she runs out of room. Now pinned against the back of the couch, you nearly pull the full length of your magical dick out of her ass, barely leaving the tip inside her before slamming it back down balls deep as fast as you can.');
    // TODO-QSP: dynamic text: "Fuck <<$pcs_nickname>>, that hurts!" she says as she white knuckles the back of...
    scene.text(`"Fuck ${((s as any).pcs_nickname ?? 0)}, that hurts!" she says as she white knuckles the back of the couch. Despite what she says, she doesn't try to push you off either. You know her well enough to know she's getting off on this. A few minutes later, she cries out in ecstasy and her whole body shakes as she orgasms hard. You keep fucking her as she rides through her orgasm. Once it passes, you step back and pull your magical cock out of her ass.`);
    scene.text('You roll off her as you do your cock slides out of her ass.');
    scene.text('She rolls over, placing on hand on her ravaged ass. "Fuck, my ass is going to be sore tomorrow."');
    scene.text('You laugh. "For all the bitching you were doing, I noticed you didn\'t try and push me off either. You know you loved having your ass ripped up."');
    // TODO-QSP: dynamic text: She blushes a little. "Fuck you <<$pcs_nickname>>!" she says in a mostly joking ...
    scene.text(`She blushes a little. "Fuck you ${((s as any).pcs_nickname ?? 0)}!" she says in a mostly joking tone.`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish on her face', goto: ['anushkaev1', 'couch_strap_finish_magic1'] },
      { label: 'Finish in her mouth', goto: ['anushkaev1', 'couch_strap_finish_magic2'] },
    ]);
  } },
      { label: 'Finish on her face', goto: ['anushkaev1', 'couch_strap_finish_magic1'] },
      { label: 'Finish in her mouth', goto: ['anushkaev1', 'couch_strap_finish_magic2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap9.jpg');
    scene.text('You keep fucking her ass, finding the right depth and rhythm to really make her moan. "You\'re such a dirty little anal slut! Look at you about to cum from getting your ass fucked!" Your dirty talk seems to have been enough to push her over the edge. She cries out in ecstasy and her whole body shakes as she orgasms hard, her asshole clenches your dick even tighter. You keep fucking her as she rides through her orgasm.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish on her face', goto: ['anushkaev1', 'couch_strap_finish_magic1'] },
      { label: 'Finish in her mouth', goto: ['anushkaev1', 'couch_strap_finish_magic2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouchStrapFinishMagic1(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/facial.jpg');
  scene.text('Once your have removed your magical cock from her slutty hole, you feel the pressure building up, you know you are about to cum. You step up on the couch so you are standing above her, your dick directly in front of her face as you start jerking off. It only takes a few moments until you feel the sudden release, as cum starts flying out of your cock all over her face.');
  qspCall(s, 'arousal', 'magicd_hj', 3, 'lesbian', 'dom', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['magic_dick_cum_mouth'] >= 1) {
    scene.text('She holds her head in place and doesn\'t move, now expecting it from the other times you shot your load on her. Once you finish cumming, you step off the couch panting a bit, feeling drained in more ways than one. She licks some cum off her lips. "Mmhmm I love how sweet it tastes." She then licks the rest of it off her lips, before grabbing a tissue to clean the rest off her face.');
  } else {
    scene.text('She jerks her head back in surprise but you manage to still get most of your cum on her face as she says. "What the fuck was that?"');
    scene.text('Once you finish cumming, you step off the couch panting a bit, feeling drained in more ways than one. "OH… uh, it\'s just one of those fake realistic looking dildo with fake cum, that shoots out when I cum." You try to explain to her, you can see her eyes start to cloud almost at once as the magic starts to work on her memory.');
    scene.text('She nods a bit after a moment. "Oh… yeah I heard of those." She licks some cum off her lips. "Mmhmm it\'s taste kinda sweet, I like how it tastes." She then licks the rest of it off her lips, before grabbing a tissue to clean the rest off her face.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove the strapon', goto: ['anushkaev1', 'couch_strap_finish_magic_remove'] },
  ]);
  scene.build();
}

function enterCouchStrapFinishMagic2(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['magic_dick'] = (((s as any).anushkaQW ?? {})['magic_dick'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/cum_mouth.jpg');
  scene.text('Once your have removed your magical cock from her slutty hole, you feel the pressure building up, you know you are about to cum. You step up on the couch so you are standing above her, your dick directly in front of her face as you start jerking off, as you tell her. "Open your mouth and stick out your tongue. It only takes a few moments until you feel the sudden release, as cum starts flying out of your cock all over her face and into her mouth.');
  qspCall(s, 'arousal', 'magicd_hj', 3, 'lesbian', 'dom', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['magic_dick_cum_mouth'] >= 1) {
    scene.text('Your aim is pretty good as most of your cum ends up in her mouth or on her tongue. She holds her head in place and doesn\'t move, now expecting it from the other times you shot your load in her mouth. Once you finish cumming, you step off the couch panting a bit, feeling drained in more ways than one. She swallows your cum down. "Mmhmm I love how sweet it tastes, honestly I would suck a dick just to swallow this if guys cum tasted this good." She then licks the rest of it off her lips, before grabbing a tissue to clean the rest off her face.');
  } else {
    scene.text('She jerks her head back in surprise but you manage to still get most of your cum in her mouth. Once you stop cumming she swallows your cum, once she has finished she says. "What the fuck was that?"');
    scene.text('Once you finish cumming, you step off the couch panting a bit, feeling drained in more ways than one. "OH… uh, it\'s just one of those fake realistic looking dildo with fake cum, that shoots out when I cum." You try to explain to her, you can see her eyes start to cloud almost at once as the magic starts to work on her memory.');
    scene.text('She nods a bit after a moment. "Oh… yeah I heard of those." She licks some cum off her lips. "Mmhmm it\'s taste kinda sweet, I like how it tastes." She then licks the rest of it off her lips, before grabbing a tissue to clean the rest off her face.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove the strapon', goto: ['anushkaev1', 'couch_strap_finish_magic_remove'] },
  ]);
  scene.build();
}

function enterCouchStrapFinishMagicRemove(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] = (((s as any).anushkaQW ?? {})['magic_dick_cum_mouth'] ?? 0) + (1);
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap12.jpg');
  scene.text('You loosen the harness, as you do, you feel the magic of the spell break. You feel the harness loosen from your skin and the dildo turn back into a regular silicone dildo, as you step out of the harness. You lean forward and lock lips with her, sharing a passionate kiss for a few minutes, you can taste the sweetness of your magical cum still on her lips and tongue as you do. She then breaks the kiss and you both stand to get cleaned up. After cleaning the strap-on, you put it back in your purse and you both get dressed again, bantering back and forth. Once dressed, you both take your seats back on the couch and Anushka changes the channel to some other movie. The two of you then settle down to hang out for a while.');
  qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the show with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    (s as any).AnushkaLoc = 2;
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    // TODO-QSP: dynamic text: The two of you watch some cheesy American action movie and chat about how great ...
    scene.text('The two of you watch some cheesy American action movie and chat about how great it will be when you\'re on your own, not having your parents or other people around telling you what to do. You barely pay attention to the movie as you talk. After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already. Come on, let\'s go." she says and gets up and heads to her room\'+iif(anushkaQW[\'strapon_anal_pain\'] = 1, \'though she is walking a little gingerly, her ass still recovering.\', \'.\')+\'');
    // TODO-QSP: 'Her brothers then come running in and to their room, followed by Valeria complaining about where th...
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouchStraponGet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npcStat', 'A144');
  ((s as any).npc_had_sex ?? {})['A144'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap2.jpg');
  scene.text('Turned on by what she said, you hand the strap-on over to her. She takes it and pulls you into a kiss with her that lasts for a few minutes.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Help her put on the harness', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/cstrapget1.jpg');
    scene.text('She finally breaks the kiss and steps into the harness, pulling it into place. You help her get the harness in place and pull the straps tight so it doesn\'t move around.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck her dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/cstrapget2.jpg');
    scene.text('She places her hand on the back of your head and pulls your head down to the strapon. "Suck my dick, slut!"');
    // TODO-QSP: dynamic text: You open your mouth, take the dildo into your mouth and sucking on it, getting i...
    scene.text(`You open your mouth, take the dildo into your mouth and sucking on it, getting it nice and wet while her hand guides your head, occasionally forcing it a bit further into your mouth. "Fuck, you're such a good cock sucker ${((s as any).pcs_nickname ?? 0)}. No wonder all the boys talk about you." she tells you in a teasing tone. Her dirty talk turns you on.`);
    qspCall(s, 'arousal', 'dildo_suck', 2, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow the whole thing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/cstrapget3.jpg');
    scene.text('She starts forcing your head down more and more, gagging you with the dildo and making you slobber all over it. "Come on you fucking slut, I know you can deepthroat this." she says just before she forces the dildo down your throat, gagging you. After a few seconds, she finally releases you to let you catch your breath before doing it again. She pulls off most of her clothes while she face fucks you.');
    qspCall(s, 'arousal', 'dildo_suck', 2, 'lesbian', 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/cstrapget4.jpg');
    scene.text('She pulls your head back until the dildo slides out of your mouth. "Turn around and get on your hands and knees, bitch." You do as you\'re told and turn around on your hands and knees. She pulls the bottom half of your clothes off and scoots up behind you. You feel her squirt some lube onto your asshole and using her finger to rub it in, getting your hole nice and wet.');
    // TODO-QSP: dynamic text: You then feel the wet tip of the dildo press against your asshole and the pressu...
    scene.text(`You then feel the wet tip of the dildo press against your asshole and the pressure builds until the head of it pops into your ass. She shoves the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo half way up your ass in one go and you let out a little cry of pain. She then slowly starts fucking your ass, making you moan in pleasure instead of pain.`);
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your ass is hers', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['dom_nush'] = (((s as any).anushkaQW ?? {})['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/cstrapget5.jpg');
    scene.text('She slaps your ass several times while she fucks it. "Yeah that\'s right, this is my little ass to fuck anytime I want!" she says before she shoves it balls deep in your ass and starts really hammering away. You start to pull away, but she grabs you by the hair and pulls you back. Unable to escape, she hammers your ass balls deep. "Yeah, that\'s right! Scream for me bitch. Tell me whose ass this is!"');
    scene.text('"My ass belongs to you!" you beg, hoping it will slow her down, but it just encourages her to be rougher. Just when you think you can\'t take it anymore, she almost collapses on your back, crying out in ecstasy as you feel her shuddering and quivering against you with the dildo buried in your ass. She takes a deep breath. "Oh my god, that was so amazing! I just came so fucking hard." She giggles as she pulls the dildo out of your ass. "Fucking great call, I needed that."');
    scene.text('You look back at her. "Glad my ass could be of service," you joke, and she giggles even more. She gives you a quick kiss as she starts taking off the harness. "Come on, let\'s get cleaned up before my dad and the brats get home." The two of you quickly get everything cleaned up and then sit back on the couch to watch the rest of the movie.');
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'sub', 'rough', 'lube');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Watch the show with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 100;
    (s as any).AnushkaLoc = 2;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you watch some cheesy American action movie and chat about how nice it will be when you are on your own, not having your parents or other people around telling you what to do. You barely pay attention to the movie as you talk. After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already. Come on, let\'s go." she says and gets up and heads to her room just as her brothers come running in and to their room, followed by Valeria complaining about where they ate. Ed then walks by and gives you a slight nod before going into the kitchen.');
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['$returnLoc', 'anushroom'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'strapon1':
      enterStrapon1(s, scene);
      break;
    case 'strapon_cowgirl':
      enterStraponCowgirl(s, scene);
      break;
    case 'strapon_cowgirl_magic':
      enterStraponCowgirlMagic(s, scene);
      break;
    case 'domnush_fuckpussy':
      enterDomnushFuckpussy(s, scene);
      break;
    case 'domnush_doggy':
      enterDomnushDoggy(s, scene);
      break;
    case 'strapon_doggy_magic':
      enterStraponDoggyMagic(s, scene);
      break;
    case 'domnush_fuckass1':
      enterDomnushFuckass1(s, scene);
      break;
    case 'domnush_fuckass_afterglow1':
      enterDomnushFuckassAfterglow1(s, scene);
      break;
    case 'domnush_fuckass_magic1':
      enterDomnushFuckassMagic1(s, scene);
      break;
    case 'domnush_fuckass2':
      enterDomnushFuckass2(s, scene);
      break;
    case 'domnush_fuckass_lubed':
      enterDomnushFuckassLubed(s, scene);
      break;
    case 'domnush_fuckass_lubed_magic':
      enterDomnushFuckassLubedMagic(s, scene);
      break;
    case 'domnush_fuckass_nolube':
      enterDomnushFuckassNolube(s, scene);
      break;
    case 'domnush_fuckass_afterglow2':
      enterDomnushFuckassAfterglow2(s, scene);
      break;
    case 'domnush_fuckass_nolube_magic':
      enterDomnushFuckassNolubeMagic(s, scene);
      break;
    case 'couch_strapon_give':
      enterCouchStraponGive(s, scene);
      break;
    case 'couch_fuck_her':
      enterCouchFuckHer(s, scene);
      break;
    case 'couch_fuck_her_ass':
      enterCouchFuckHerAss(s, scene);
      break;
    case 'couch_strap_finish':
      enterCouchStrapFinish(s, scene);
      break;
    case 'couch_fuck_her_magic':
      enterCouchFuckHerMagic(s, scene);
      break;
    case 'couch_fuck_her_ass_magic':
      enterCouchFuckHerAssMagic(s, scene);
      break;
    case 'couch_strap_finish_magic1':
      enterCouchStrapFinishMagic1(s, scene);
      break;
    case 'couch_strap_finish_magic2':
      enterCouchStrapFinishMagic2(s, scene);
      break;
    case 'couch_strap_finish_magic_remove':
      enterCouchStrapFinishMagicRemove(s, scene);
      break;
    case 'couch_strapon_get':
      enterCouchStraponGet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushkaev1: LocationDef = {
  name: 'anushkaev1',
  title: 'Living room',
  region: 'other',
  enter: enter,
};
