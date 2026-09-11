import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEmily_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).emily ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['foto_models2', 'emily_2'] }]);
  }
  if (((s as any).emily ?? 0)?.['status'] === 5) {
    scene.actions([{ label: 'Continue', goto: ['foto_models2', 'emily_chat'] }]);
  }
  if (((s as any).emily ?? 0)?.['status'] >= 3) {
    scene.actions([{ label: 'Continue', goto: ['foto_models2', 'emily_modelling'] }]);
  }
  ((s as any).emily ?? {})['status'] = 2;
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You\'re walking through the studio when you hear someone shout from behind you.');
  scene.text('"Move bitch!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('Turning around, you see a girl with long hair and large breasts with a serious look on her face."');
    scene.text('"Get the fuck out of the way! I\'m trying to get to my shoot!"');
    scene.actions([
      { label: '"Oh, sorry about that…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You apologetically step aside as she strides past you. "Sorry, I didn\'t realize I was in the way.');
    scene.text('"Well you should pay more attention. You must be new here."');
    scene.text('"Yeah, I am. I actua-"');
    scene.text('She cuts you off mid-sentence. "Well, here\'s your introduction: I\'m Emily and if you see me coming, get <i>the fuck</i> out of my way. I\'m going to be the next big thing in this city and it\'s people like you who are always getting in my way and holding me back. So step off bitch. I have things to do."');
    scene.text('She walks past and onto a nearby set, loudly complaining to the photographer. "Hey, I know I\'m late. There was some fucking new girl who doesn\'t know her fucking place around here. Let\'s get started."');
    scene.actions([
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude1.mp4');
    scene.text('Despite her rude attitude, the moment she steps on set, she acts perfectly professional, taking directions and adjusting poses flawlessly. She knows how to work her assets in just the right ways. She must be really set on being a pro.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"What did you just say to me?!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/turnback.jpg');
    scene.text('"What do you just say to me?! Who do you think you are talking to people like that?"');
    scene.text('The girl shoves her way past you and looks over her shoulder at you. "You must be new here so I\'ll give you the short version: I\'m Emily and I\'m going to be the next big thing in this town, so when you see me coming, you get <i>the fuck</i> out of my way." With that, she walks off towards her shoot.');
    scene.actions([
      { label: 'Take the high road', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk1.mp4');
    scene.text('As you watch her walk away, you\'re deeply offended by what just happened but you know that fighting will only make things worse. For now, you\'ll just keep your cool and maybe work things out later.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude1.mp4');
    scene.text('Despite her rude attitude, the moment she steps on set, she acts perfectly professional, taking directions and adjusting poses flawlessly. She knows how to work her assets in just the right ways. She must be really set on being a pro.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
      { label: '"Bitch!"', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk1.mp4');
    scene.text('"Bitch!" you shout at her as she walks away.');
    scene.text('She gives you the finger over her shoulder and doesn\'t even give you another look as she walks away to her set. This Emily chick pisses you off…');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude1.mp4');
    scene.text('You hate to admit it but she\'s actually really good at this. She\'s incredibly professional, taking directions from the photographer flawlessly. Ugh! Why do girls like her have to have everything?!');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
      { label: '"Cunt!"', handler: (st: GameState) => {
    ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('"Cunt!" you hiss');
    scene.text('She stops dead in her tracks before whirling around and stomping back towards you. "What did you just say to me???"');
    scene.text('"You heard me. Cu-n-<b>t.</b>" You spit the words from between your teeth, emphasizing the word so much that it transforms from one syllable to three. As the last sound leaves your lips, she steps in close to you, her face barely centimeters away from yours. You feel a proximity hovering over your chest and in your subconscious mind you realize it must be her nipples, which are almost touching tips with yours. As the stare goes on, you begin to tense up and you feel like she\'s about to hit you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('Seething anger burns behind her eyes as she continues to leer at you. "Now listen here you fucking slut, I\'m going to be the next big thing in this town and you better remember it. You\'ve seen the photo albums in the main hall? I\'m Emily. That\'s right. I\'m number three. And someday soon I\'m going to be number one. And no matter how hard you try, no matter how hard you work, no matter how hot you think you are, my name is <i>always</i> going to be above yours. Now make like the whore you are and <b>fuck off.</b>"');
    scene.text('With that, she turns around and walks onto a nearby set, where she loudly complains to the photographer. "Hey, I know I\'m late. There was some fucking slut of a newbie who doesn\'t know her fucking place around here. Let\'s get started."');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude1.mp4');
    scene.text('You hate this stupid fucking bitch and her fucking face with her fucking ego and her fucking attitude with all your heart and soul, but nothing pisses you off more than the fact that she\'s actually really good at this. She\'s incredibly professional, taking directions from the photographer flawlessly, working her body in a way that exudes sexuality with every move and pose. If she\'s still as angry as you are, she doesn\'t show the slightest sign of it, maintaining perfect composure at all times.');
    scene.text('"One day… I swear…" you growl under your breath and walk away before you give yourself an aneurysm from being too ticked off.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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

function enterEmily_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).emily ?? {})['status'] = 3;
  scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
  if (((s as any).emily ?? 0)?.['hate'] === 1) {
    scene.text('Walking through the studio, you round the corner of a set and nearly bump into Emily. The two of you immediately lock eyes and stare each other down.');
    scene.text('Unable to control the impulse, your eyes flick to her shapely breasts before going back into the stare. Even though it was only a fraction of a second, she saw you do it and immediately pounces on you for it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).tits ?? 0) <= 4) {
      scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/5.jpg');
      // TODO-QSP: dynamic text: "What's the matter, slut? Jealous?" she says with a smirk, obviously lording the...
      scene.text(`"What's the matter, slut? Jealous?" she says with a smirk, obviously lording the size and shape of her tits over you and your ${((s as any).titsize ?? 0)} breasts.`);
      scene.actions([
        { label: 'Grind your teeth in jealousy', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/4.jpg');
    scene.text('You say nothing and clench your jaw, grinding your teeth together. This girl pisses you off more than anything in the world and it definitely doesn\'t help that she\'s right about you wishing you had bigger breasts. You cross your arms over your chest and look away, hiding your breasts from her gaze and trying your best not to blush in embarrassment.');
    scene.text('"Whatever…" you mutter.');
    scene.text('"Aww…" she says in mock pity. "It\'s okay. Some boys like smaller, flatter girls like you." She leans over to whisper in your ear, "But they all <i>wish</i> they were with a woman like me…" She pats you on the head. "Maybe if you drink your milk you can \'level up\' one day. Or you can use all your whore money to buy some implants!" She cackles to herself as she walks off.');
    scene.text('<i><b>This. Fucking. Bitch!</b></i>');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
        { label: 'Try to resolve things', goto: ['foto_models2', 'emily_resolve'] },
        { label: 'Call her "cow tits"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/3.jpg');
    ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) + (1);
    scene.text('"Why would I be jealous of fat cow tits like yours?" you sneer back.');
    scene.text('"<i>Excuuuuuuuse me?!</i>"');
    scene.text('Your words seem to catch her off guard and she steps back as though she\'s genuinely offended. Sensing you have the upper hand, you push your breasts up with your hands. "Maybe they\'re not as big, but at least they\'re cute, perky and don\'t get waved around like fake cow udders."');
    scene.text('"H-how dare you!" Emily begins to stammer in fury. "My breasts are completely natural and I have <i>never</i> used plastic surgery for anything! I\'m naturally this gorgeous!"');
    scene.text('"Is that the line you give to the boys that tease you at the club?" you say, giving her the same smirk she first gave you as you walk by. "At least I don\'t look like a bimbo bitch!" you call over your shoulder without turning leaving her behind with what you imagine to be a jaw dropped look on her face.');
    scene.text('Pettiness never felt so good…');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).tits ?? 0) === 4) {
        scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
        scene.text('"What\'s the matter, slut? Jealous? Wish you had a pair like mine?"');
        scene.actions([
          { label: '"We\'re the same size!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/4.jpg');
    scene.text('Your mouth drops open in disbelief and offense. "What are you talking about you stuck up bitch?! We\'re the same size!');
    scene.text('She continues smirking as she pretends to muse over what you said.');
    scene.text('"True… But there\'s more to it than size…" she says, moving through poses like she\'s doing a shoot or something. "Softness, supplness, the way they bounce…" She sways them back and forth to make her point, jiggling with the slightest movements.');
    scene.text('"No one cares what size a girl\'s tits are when they\'re as flabby as yours," she whispers before striding past and leaving you fuming.');
    scene.text('<i><b>This. Fucking. Bitch!</b></i>');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
          { label: 'Try to resolve things', goto: ['foto_models2', 'emily_resolve'] },
          { label: '"Why? So they can distract from your ass ugly face?"', handler: (st: GameState) => {
    ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/3.jpg');
    scene.text('"Why would I? At least I don\'t need mine to distract people from an ass ugly face!"');
    scene.text('"<i>Excuuuuuuuse me?!</i>"');
    scene.text('Your words seem to catch her off guard and she steps back as though she\'s genuinely offended. Sensing you have the upper hand, you push your advantage. "Oh yeah, I bet when the boys come by your house they all bring a paper bag to put over that face of yours. They love using your tits to get off, they just don\'t want to see your face while they do it!"');
    scene.text('"H-how dare you!" Emily begins to stammer in fury. "I-! You-!"');
    scene.text('"I don\'t have time for this," you interrupt her. "Let me know if any of them manage to cum without a blindfold. I\'ll take them to the doctor to get them some glasses!" Her jaw drops as you saunter past feeling good about yourself.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).tits ?? 0) >= 5) {
          scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
          // TODO-QSP: dynamic text: "What's the matter, whore? Wish you didn't have such fat cow tits?" she says wit...
          scene.text(`"What's the matter, whore? Wish you didn't have such fat cow tits?" she says with fake concern and pushing out her chest, obviously trying to talk down your larger ${((s as any).titsize ?? 0)} breasts.`);
          scene.actions([
            { label: '"What\'s wrong with having big breasts?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/2.jpg');
    scene.text('"What\'s wrong with having big breasts?!" you exclaim. "Yours are big too!"');
    scene.text('"True," she says while walking up to you so you\'re shoulder to shoulder. "But mine are soft and perky and <i>just</i> the right size. Any bigger and they end up fat and saggy like yours where you have to worry about knocking someone out if you turn too fast." Paying no more attention to you, she strides off while your jaw hits the floor. By the time you recover from this offense, she\'s already long gone.');
    scene.text('<i><b>This. Fucking. Bitch!</b></i>');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
            { label: 'Try to resolve things', goto: ['foto_models2', 'emily_resolve'] },
            { label: 'Insults are just the mark of a jealous bitch', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/3.jpg');
    scene.text('"Are you saying that because you\'re jealous you don\'t have these instead of those mosquito bites you call breasts?"');
    scene.text('"<i>Excuuuuuuuse me?!</i>" Your words seem to catch her off guard and she steps back as though she\'s genuinely offended. "How could you even say that?! My breasts are obviously-"');
    scene.text('"Excuses, excuses!" you say, cutting her off. "You can say whatever you like, the only thing I know is that <i>my</i> milkshakes bring all the boys to the yard." You step up to her and whisper in her ear. "And damn right, <i>they\'re better than yours,</i>"');
    scene.text('<i>Suck it bitch,</i> you think to yourself as you confidently walk away.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.text('Walking through the studio, you round the corner of a set and nearly bump into Emily.');
    scene.text('"Oh. It\'s you," she says flatly.');
    // TODO-QSP: dynamic text: "Uhh, yeah… I never introduced myself the last time we saw each other. I'm <<$mo...
    scene.text(`"Uhh, yeah… I never introduced myself the last time we saw each other. I'm ${((s as any).model ?? 0)?.['firstname']}, I'm a new model here at the agency."`);
    scene.text('"Yeah, I know. Models are the only ones who walk around here naked, I\'m not stupid."');
    scene.text('"Right… So-" you start to say something, but she interrupts you.');
    scene.text('"Look, are you just here to waste my time?"');
    scene.actions([
      { label: '"Excuse me?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You blink, taken aback. "Excuse me?"');
    scene.text('"I\'m asking if you\'re just trying to waste my time. Because everywhere, I go, that\'s all you ever seem to do: get in my way and waste my fucking time."');
    scene.text('She brushes past you while rolling her eyes. You hear her muttering under her breath as she walks away. "Fucking amateurs, why do they even waste time with girls like that here…"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"What\'s your problem bitch?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('"Okay, what\'s your problem bitch?" you snap back at her. "I\'ve only spoken to you two times and both times you\'ve been nothing but a cunt. What the fuck did I ever do to you?"');
    scene.text('Emily gets in your face and snaps back at you. "My problem with you is that you\'re always in my fucking way! You come here, standing around like you\'re going to get famous, and wasting everyone else\'s time that they should be spending on me!"');
    scene.text('"Oh, and you are going to get famous?" you retort.');
    scene.text('"Yes. Because unlike you, I\'ve been getting ready for this my whole life. I spent all of high school eating right and working out, getting a thin body and the most voluptuous ass. I started working here the moment I turned 18 and have spent every day since working with the photographers to become the perfect model. I\'ve done hundreds of shoots, I\'m sponsored by lingerie and clothing companies, and currently I\'m working on breaking into the actress business. And then here <i>you</i> are, coming in for easy money like some kind of cheap whore and expecting me to treat you like some kind of special snowflake!"');
    scene.actions([
      { label: '"I didn\'t realize how serious you were"', handler: (st: GameState) => {
    ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) - (1);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You find yourself taken aback by her tirade and step away from her.');
    scene.text('"I-, I\'m sorry Emily. I didn\'t realize you were so serious about your work here. I never meant to bother you, I just… we just bumped into each other by accident, I swear."');
    scene.text('She sighs in exasperation, but otherwise recomposes herself. "Okay, whatever. It\'s not a big deal I guess, just don\'t make a habit of it," she says and brushes past you. You hear her muttering under her breath as she walks away. "Fucking amateurs, why do they even waste time with girls like that here…"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Who gave you the right?"', handler: (st: GameState) => {
    ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('"And you think that gives you the right to act the way you do?" you shout back. "Plenty of other people are working hard here, so why does your work make you deserve it more than the rest? Just because you were born with big tits and a pretty face doesn\'t mean you\'re \'destined\' to make it big. You\'re such a self-entitled brat!"');
    scene.text('"A filthy amateur like you wouldn\'t understand," she huffs. "And that\'s always what you\'re going to be. Just another set of tits on the internet with a forgotten name to go along with them."');
    scene.text('Without another word, she walks away, leaving you in fumes.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEmilyResolve(s: GameState, scene: SceneBuilder): void {
  ((s as any).emily ?? {})['hate'] = (((s as any).emily ?? {})['hate'] ?? 0) - (1);
  scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/3.jpg');
  // TODO-QSP: dynamic text: You take a deep breath to calm down before saying, "Listen. Maybe we got off on ...
  scene.text(`You take a deep breath to calm down before saying, "Listen. Maybe we got off on the wrong foot yesterday. I just started here and I don't want to be making enemies right out of the gate. I'm ${((s as any).model ?? 0)?.['firstname']} and I'm sorry for what happened yesterday. Can we just try to forget about it?"`);
  scene.text('You hold out your hand as an apology.');
  scene.text('She seems genuinely caught off guard by your actions and takes an actual step back. She quickly composes herself and grabs your hand saying, "Fine. Just… Pay more attention next time," before hurridly walking out of the room.');
  scene.text('You release the breath you didn\'t realize you had been holding. You hope you made the right choice and have fixed things for the future.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterEmilyModelling(s: GameState, scene: SceneBuilder): void {
  ((s as any).emily ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  ((s as any).emily ?? {})['model'] = Math.floor(Math.random() * 4) + 1;
  if (((s as any).emily ?? 0)?.['model'] === 1) {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude1.mp4');
    scene.text('Looking around for Emily, you find her on set in the middle of a nude shoot. She\'s completely concentrated on her task and doesn\'t even notice you. You spend a few minutes watching before walking away.');
  } else {
    if (((s as any).emily ?? 0)?.['model'] === 2) {
      scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/nude2.mp4');
      scene.text('Looking around for Emily, you find her on set in the middle of a nude shoot. She looks happy and completely different from any other time you\'ve interacted with her, but you can only assume it has something to do with the shoot as she blows on some kind of party toy. You watch for a few more minutes before walking away.');
    } else {
      if (((s as any).emily ?? 0)?.['model'] === 3) {
        scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/sexy.mp4');
        scene.text('Looking around for Emily, you find her on set in the middle of a shoot. She\'s wearing some kind of transparent lingerie and unzipped jeans, carefully and purposefully working her thin body to create a sexy atmosphere. You watch for a few more minutes before walking away.');
      } else {
        if (((s as any).emily ?? 0)?.['model'] === 4) {
          scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/underwear.mp4');
          scene.text('Looking around for Emily, you find her on set in the middle of an underwear shoot. As you watch, she moves through a bunch of different positions but never actually stops to pose. The expressions she puts on don\'t seem like a freeze frame of emotion, more like all of her movements are part of the expression together. Taking a look at the camera, you realize this is some kind of video they\'re filming, maybe a commercial. You watch for a little while longer before walking away.');
        } else {
          if (((s as any).emily ?? 0)?.['model'] === 5) {
            scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/sponsor.mp4');
            scene.text('Looking around for Emily, you find her on set in the middle of a shoot. She\'s dancing around and acting playful while intermittently stripping out of her clothing with big bold letters of what the brand is. Maybe this is some kind of sponsorship or commercial she\'s filming right now? Maybe both. You watch for a little while longer before walking away.');
          } else {
            if (((s as any).emily ?? 0)?.['model'] === 6) {
              scene.img('images/locations/city/citycenter/photo/portraits/emily_r/modelling/ana.mp4');
              if (((s as any).anastasia ?? 0) > 0) {
                scene.text('Looking around for Emily, you find her on set in the middle of a lingerie shoot with Anastasia. The two of them sit on the ground together taking cues from each other and the photographers as they go through poses. Anastasia doesn\'t seem to notice but something about Emily\'s face makes her seem bitter, like she\'s annoyed to be working with her. Maybe it has something to do with her rankings in the studio. You watch for a few more minutes before walking away.');
              } else {
                scene.text('Looking around for Emily, you find her on set in the middle of a lingerie shoot with another model you feel like you\'ve seen around. The two of them sit on the ground together taking cues from each other and the photographers as they go through poses. The other woman doesn\'t seem to notice but Emily seems really bitter, like she\'s annoyed to be working with her. You wonder what that\'s about as you watch for a few more minutes before walking away.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterEmilyWarning(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('As you walk through the studio, you hear your "name" ring out from behind you.');
  scene.text('"Hey! Cunt!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You sigh deeply, turning around to see exactly what you expect: bitchy looking Emily walking towards you.');
    if (((s as any).emily ?? 0)?.['hate'] <= 0) {
      scene.text('"I thought we were past this Em-" you start before she cuts you off, stomping right up to your face, her glare reflecting an intensity of rage that you\'ve never seen before, even from her.');
    } else {
      scene.text('"What is it n-" you start before she cuts you off, stomping right up to your face, her glare reflecting an intensity of rage that you\'ve never seen before, even from her.');
    }
    scene.text('"You\'re really rising through the ranks around here." Her voice is completely calm, a strange contrast from the burning fury you see behind her eyes. "Made a name for yourself. Good for you!"');
    scene.text('She gives you a chilling smile.');
    scene.text('"But you\'re going to cash out here. You\'re going to go to the locker room, get your things, get <i>the fuck</i> out of the studio, and never come back."');
    scene.actions([
      { label: 'Gulp', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You reflexively swallow in fear and shyly back away from her.');
    scene.text('"A good bitch knows her place," Emily regards you with a smirk, eyes still dead and lacking humor. "Do what I say and you won\'t have to learn yours."');
    scene.text('She walks away without another word, leaving just as abruptly as she appeared.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Why would I do that?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/5.jpg');
    scene.text('"And why would I do that?" you snort.');
    scene.text('"Because you\'re a good bitch," Emily regards you with a smirk, eyes still dead and lacking humor. "Bitches know their place. And if they don\'t, they get put into their place, whether they like it or not. Consider this your final warning."');
    scene.text('She walks away without another word, leaving just as abruptly as she appeared.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEmilyChat(s: GameState, scene: SceneBuilder): void {
  ((s as any).emily ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/5.jpg');
  scene.text('Looking around for Emily, you find her standing around on an empty set, seemingly waiting between shoots for something.');
  scene.text('"Oh. It\'s you. What do you want?"');
  if (((s as any).emily ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    ((s as any).emily ?? {})['model_exp'] = ((s as any).daystart ?? 0);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('"What? You\'re asking me for modelling advice? Why would I ever give advice to you? If you used it, it would only end up distracting the staff from me and my talents."');
    scene.actions([
      { label: '"Okay…"', handler: (st: GameState) => {
    scene.text('"Okay…" you say, not sure what else to do about her rotten attitude.');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
      { label: 'Suck up to her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/2.jpg');
    qspCall(s, 'exp_gain', 'mdlng', 2);
    scene.text('"Oh. I mean, I just thought I\'d ask you because you\'re the best model here. I thought you would have the best advice to give."');
    scene.text('"Well, it\'s not like you\'re wrong." She shrugs and acts like what you said was just stating facts but you can tell she\'s secretly pleased by what you said. "I suppose I could give some advice to a poor unfortunate soul like you. At the very least maybe you\'d stop embarrassing yourself on set and making the studio look bad." You stomach the verbal abuse and keep yourself in check, recognizing that with Emily you\'re going to have to take her attitude if you want to get anywhere with her.');
    scene.text('"The most important things about modelling is how to hold yourself. If you can\'t pull off the pose to make yourself or the clothes you\'re wearing look sexy then you\'ve failed. Practice the poses, spend time in front of the mirror testing looks. And when you\'re on set, keep changing it up. Taking direction from the photographers is important but if you want to act like a professional then you need to take initiative. Every time the camera flashes, alter your position, even if just a little bit. They\'re only looking for one perfect shot, either they have it or they don\'t. But help them search. And don\'t waste their time."');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
      { label: 'Taunt her into helping you', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/5.jpg');
    qspCall(s, 'exp_gain', 'mdlng', 2);
    scene.text('"What? You\'re so afraid of your position that if you give help to a silly amateur like me it\'ll knock you off your pedestal? Huh. Maybe you\'re not good enough for me to be asking after all…"');
    scene.text('Emily\'s eyes narrow at your words before re-adjusting herself to respond. "I suppose I could give some advice to a poor unfortunate soul like you. At the very least maybe you\'d stop embarrassing yourself on set and making the studio look bad. I can\'t have you bringing down Aphrodite\'s name and my fame just by association."');
    scene.text('You smirk inwardly, pleased with how easy it was to manipulate her into doing this and listen as she starts giving you real advice.');
    scene.text('"The most important things about modelling is how to hold yourself. If you can\'t pull off the pose to make yourself or the clothes you\'re wearing look sexy then you\'ve failed. Practice the poses, spend time in front of the mirror testing looks. And when you\'re on set, keep changing it up. Taking direction from the photographers is important but if you want to act like a professional then you need to take initiative. Every time the camera flashes, alter your position, even if just a little bit. They\'re only looking for one perfect shot, either they have it or they don\'t. But help them search."');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/turnback.jpg');
    scene.text('"I\'m gonna go now," you say.');
    if (((s as any).emily ?? 0)?.['hate'] > 0) {
      scene.text('"Fuck off."');
    } else {
      scene.text('"Whatever."');
    }
    scene.text('With that lovely parting, you walk back towards the main floor of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Ask why she wanted to become a model', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
    scene.text('"I was just curious. Why is it you wanted to become a model? I mean, you seem really serious about it and it sounds like you\'ve been working at it for all your life but… I guess I was just wondering why?"');
    scene.text('"Are you blind?"');
    scene.text('You blink. "What?"');
    scene.text('"I asked if you\'re fucking blind. Come on, be serious. Okay, fine. Let\'s spell this out for retards. Look at my face. Now look at my tits. Now look at my stomach, my legs, my ass, my pussy. Do you notice something? It\'s that I\'m fucking gorgeous. Everything about my body is sexy and perfect. Men want me, women want to be me, and boys dream about me while jerking themselves off in their bedrooms. Now with all of that, why would I want to be anything other than a model? Huh? So, are you blind or are you just fucking stupid?"');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
    { label: 'Ask how she stays in shape', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
    scene.text('"I was wondering if you could give some advice about keeping a model\'s figure. Do you have any?"');
    scene.text('"Yeah, don\'t live like a filthy pig. What, do you want me to write out a diet plan for you that lets you keep stuffing your face with ice cream and chocolate? Cause that doesn\'t exist, stupid."');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
    { label: 'Talk about movies', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('"See any good movies lately?"');
    scene.text('"No."');
    scene.text('"…"');
    scene.text('You wait for her to say something else but it looks like she really isn\'t interested in talking to you.');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'emily_chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeff_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).jeff ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['foto_models2', 'jeff_2'] }]);
  } else {
    if (((s as any).jeff ?? 0)?.['status'] > 2  &&  ((s as any).jeff ?? 0)?.['status'] < 5) {
      scene.actions([{ label: 'Continue', goto: ['foto_models2', 'jeff_3'] }]);
    } else {
      if (((s as any).jeff ?? 0)?.['status'] === 5) {
        scene.actions([{ label: 'Continue', goto: ['foto_models2', 'jeff_modelling'] }]);
      }
    }
  }
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/0.jpg');
  scene.text('Walking around the studio, you suddenly stop when you see a naked girl staring at you.');
  scene.text('<i>Is she a model here? Why is she staring at me like that…?</i>');
  scene.text('Seeing you notice her, she waves you over.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
    scene.text('"Hi! Are you the new model here?"');
    scene.text('"Yeah, I-" you start to say.');
    scene.text('"Welcome to our little family!" the girl says, interrupting you and suddenly jumping up and wrapping her arms around your neck.');
    scene.text('You can feel her puffy nipples against your skin and can tell she\'s really not shy in the least about physical boundaries or personal space.');
    scene.text('"Ah-! Ahm… Thanks…" you say awkwardly when she lets you go. "I was just looking around, getting familiar with the studio."');
    scene.text('"How do you like it? I personally find it very busy… People don\'t want to play with me very often…" she says with a pouty face.');
    scene.actions([
      { label: '"I don\'t actually mind"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/2.jpg');
    scene.text('"I don\'t actually mind it that much."');
    scene.text('"Well why not? Everyone should play more often! Well now, time for introductions! You go first!" she tells you.');
    scene.actions([
      { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/3.jpg');
    // TODO-QSP: dynamic text: "I'm <<$model['firstname']>>."
    scene.text(`"I'm ${((s as any).model ?? 0)?.['firstname']}."`);
    scene.text('"What a cute name!"');
    scene.text('<i>She\'s got quite a bubbly personality doesn\'t she?</i> you think to yourself before you realize she\'s still standing in silence, continuing to smile at you.');
    scene.text('"And your name is…?" you say awkwardly.');
    scene.text('"Oh! You can call me Jeff!" she says.');
    scene.actions([
      { label: '"Jeff…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
    scene.text('"Jeff…?" you ask.');
    scene.text('She nods and smiles. "That\'s what they call me here!"');
    scene.text('"That\'s your real name?"');
    scene.text('"Nope!" She keeps smiling.');
    scene.text('"Ahh, uh… Okay…" you say.');
    scene.text('All of sudden she seems to startle herself and squeaks. "Oh no! I totally forgot, I was supposed to be on set! Gotta run! It was nice meeting you!" you hear Jeff call back as she skips off towards the other side of the studio.');
    scene.text('<i>What a weird girl…</i>');
    ((s as any).jeff ?? {})['status'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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

function enterJeff_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/4.jpg');
  ((s as any).jeff ?? {})['status'] = 3;
  scene.text('As you walk past a set, you hear someone yell out from an armchair. "Hey there, cutie!"');
  scene.text('Looking over, you see Jeff smiling at you, sitting with her legs up and her neat little pussy on peeking out from between them. She must\'ve just finished a shoot.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hey!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"Hey Jeff. How are you? Why are you sitting here all alone?" you ask.');
    scene.text('"Just goofing off a bit!" she answers. She leans in towards you and whispers "I\'m supposed to be on set right now, but I\'m playing hooky for a little while!"');
    scene.actions([
      { label: '"Isn\'t that bad?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/6.jpg');
    scene.text('"Isn\'t that bad?" you ask. "After all, they\'re paying you to be on set and do the job, aren\'t they?"');
    scene.text('"Oh I knowwwww! But why can\'t I have a bit of fun now and then?" She starts to kick her leg up and down playfully.');
    scene.text('Her carefree attitude is very interesting to you. You decide to ask her what she did before she was a model.');
    scene.text('"Before? Oh, I used to work for an escort service."');
    if ((!((s as any).anastasiasex ?? 0))) {
      scene.actions([
        { label: '"Think you could hook me up as an escort?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"An escort service?" you ask in surprise. "They still in business? I\'d love it if you gave me a recommendation there."');
    scene.text('"Hmmmmmmmm… Probably not, I don\'t work there anymore and they\'re kind of annoyed that I left. Especially because they keep seeing me in magazines. They know they really could have jacked up the price with me!"');
    scene.text('"Oh." You twist your mouth in disappointment.');
    scene.text('"Buuuut…"');
    scene.actions([
      { label: '???', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
    scene.text('Jeff leans in conspiratorily to whisper to you.');
    scene.text('"If you really want to give escorting a go… Well… You know how you\'ve seen Anastasia doing <i>mmhmm-mmm-mmm-mhmmmm?</i>" She hums while wiggling her eyebrows at you in some kind of knowing look.');
    if (((s as any).anastasia ?? 0) < 1) {
      scene.text('"Who?" you ask in utter confusion of who she\'s talking about.');
      scene.text('"Oh you haven\'t met her yet? Go-lly, you need to spend more time slacking off and talking to other chicks like me. Oh well, once you meet her, just go talk to her and you\'ll figure it out after a while."');
      scene.actions([
        { label: '"I-,"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"I-," you try to respond before Jeff suddenly jumps up.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get paid! Bye <<$model[...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).anastasia ?? 0) < 4) {
        scene.text('"No…?" You feel very confused and don\'t really know what she\'s trying to get at.');
        scene.text('"Oh!" Jeff squeaks in surprise. "You haven\'t caught her yet? You must not be looking very hard! Oh well, you\'ll catch her eventually. Anyways, just try to talk to her and you\'ll understand."');
        scene.actions([
          { label: '"I-,"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"I-," you try to respond before Jeff suddenly jumps up.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get paid! Bye <<$model[...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"… You mean how she\'s sometimes fucking guys in the studio?" you whisper back.');
        scene.text('"Yup! Exactly! If you want to give escorting a go, try talk to her. I\'m sure you\'ll figure it out eventually."');
        scene.actions([
          { label: '"Anastasia is a hooker??"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"Oh yeah, hardcore. But you didn\'t hear it from me!" she winks at you.');
    scene.actions([
      { label: 'Thanks Jeff!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Thanks for the advice, Jeff!"');
    scene.text('"Nooooo problem!" she says before jumping out of her seat.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get for it! Bye <<$mode...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get for it! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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
    }
    scene.actions([
      { label: '"An… escort service…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"An… escort service…?" you ask tentatively.');
    scene.text('"Mhmmm! I needed some money to pay for my university tuition so I did some part time escorting."');
    scene.text('"So you would…"');
    scene.text('"Let old men use my innocent, nubile teen body to fulfill their sexual fantasies for money? Sure! Sometimes they weren\'t very nice though…" she says putting on a pouty face. "It could be hard sometimes because of that, but I was a big girl so I powered through! Anyways, that\'s why I switched to modelling after a little while. They\'re much nicer here!"');
    scene.actions([
      { label: 'That\'s… good?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Yup! Being a model is a lot more fun."');
    scene.text('"What is it you said you were studying in university?"');
    scene.text('"Economy and management!" she says proudly.');
    scene.text('<i>This airhead? Economy and management?!</i>');
    // TODO-QSP: dynamic text: "Well, I guess I should go now. Gotta get paid! Bye <<$model['nickname']>>!" she...
    scene.text(`"Well, I guess I should go now. Gotta get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
      { label: '"An escort service?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"An escort service??" you ask in surprise.');
    scene.text('"Mhmmm! I needed some money to pay for my university tuition so I did some part time escorting."');
    scene.text('"So you would have sex with people for money?"');
    scene.text('"Yup! I\'d let them fulfill their every sexual fantasy! For some reason a lot of them liked this position," she says, putting her legs up in the air and flashing her pussy at you. "It paid the bills really well and even let me get a nice apartment in the residential area after I paid off my tuition for that year. Sometimes they weren\'t very nice though…" she says putting on a pouty face. "It could be hard sometimes because of that, but I was a big girl so I powered through! Anyways, that\'s why I switched to modelling after a little while. They\'re much nicer here!"');
    scene.actions([
      { label: 'That\'s… good?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Yup! Being a model is a lot more fun."');
    scene.text('"What is it you said you were studying in university?"');
    scene.text('"Economy and management!" she says proudly.');
    scene.text('<i>This airhead? Economy and management?!</i>');
    // TODO-QSP: dynamic text: "Well, I guess I should go now. Gotta get paid! Bye <<$model['nickname']>>!" she...
    scene.text(`"Well, I guess I should go now. Gotta get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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

function enterJeff_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).jeff ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  ((s as any).jeff ?? {})['grope'] = (((s as any).jeff ?? {})['grope'] ?? 0) + (1);
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/grope.jpg');
  scene.text('While walking through the studio, you suddenly feel someone\'s arms wrap around your waist and two soft breasts press into your back.');
  scene.text('Before you can say anything, you jump in surprise as you feel the person\'s hands fly up your body and slap against your breasts to give them a firm squeeze.');
  scene.text('"Hiiiii cutie!" you hear a voice squeak out.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Oh-! Hi!!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
    scene.text('A bit startled, you turn around to see Jeff\'s cheerful face.');
    // TODO-QSP: dynamic text: "<<$model['nickname']>>! Hang out with me!"
    scene.text(`"${((s as any).model ?? 0)?.['nickname']}! Hang out with me!"`);
    scene.actions([
      { label: '"Busy right now"', handler: (st: GameState) => {
    scene.text('"Hey Jeff. Listen, I\'m a little busy right now. Can we do this later?"');
    scene.text('"Sure! Sure! Catch you later cutie!" she says, changing her tune immediately. "Gotta work to earn! Gotta earn to eat! Gotta eat to live! Have fun!" she says before startling you again with a firm squeeze of your ass and skipping off.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Sure"', handler: (st: GameState) => {
    scene.text('"Sure, I\'ve got a minute."');
    scene.text('"What\'cha want to talk about???" she asks.');
    scene.text('Wait, isn\'t she the one who wanted to talk in the first place?');
    scene.actions([
      { label: 'Chat', goto: ['foto_models2', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
  if (((s as any).jeff ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    ((s as any).jeff ?? {})['model_exp'] = ((s as any).daystart ?? 0);
    qspCall(s, 'exp_gain', 'mdlng', 1);
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/9.jpg');
    scene.text('"How to be a better model? Oh that\'s easy! Just have fun!" she says.');
    scene.text('<i>Typical answer from her… Couldn\'t have expected more I guess…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/10.jpg');
    scene.text('"Oh, and also, don\'t forget to get sexy with it! They love it when cute girls like us… <i>mmm-mmm-!</i> act like… <i>pfft-!</i> dirty sluts!" It seems like she\'s legitimately holding back laughter.');
    scene.text('<i>I guess she finds it funny…? Weird…</i>');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).jeff ?? 0)?.['grope'] > 3) {
    scene.actions([
      { label: 'Ask her to stop groping you', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/12.jpg');
    scene.text('"Hey Jeff… You know how whenever you see me you come up behind me and grab my breasts?"');
    scene.text('"Yeah?" she says, smiling and completely oblivious to your awkward tone.');
    scene.text('"Yeah… Could you <i>not</i> do that? It makes me kind of uncomfortable…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/13.jpg');
    scene.text('She laughs. "Of course not, silly! Boobies are meant to be grabbed!" she says while kneading her own to make her point.');
    scene.text('You realize with a sinking feeling that you probably can\'t convince her…');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going. I\'ll see you later, okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Chat', handler: (st: GameState) => {
    ((s as any).jeff ?? {})['convo'] = Math.floor(Math.random() * 5) + 1;
    if (((s as any).jeff ?? 0)?.['convo'] === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/15.jpg');
      scene.text('"So Jeff, have you seen any good movies lately?"');
      scene.text('"Oh no! I don\'t go to the movies. I hate them! They\'re so loud and unpleasant! My poor ears can\'t handle them!" she whines while putting her hands over her ears even though it is perfectly quiet right now.');
      ((s as any).jeff ?? {})['movies'] = 1;
    } else {
      if (((s as any).jeff ?? 0)?.['convo'] === 2) {
        scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/16.jpg');
        scene.text('"Hey Jeff, do you know any good places to eat around here?"');
        scene.text('"Hmmmm nooooo, not reaaaally. I mostly eat at the university\'s cafeteria. They won\'t let you in unless you\'re a student though."');
        scene.text('<i>Well, enrolling in a university just for food doesn\'t seem like a viable option…</i>');
      } else {
        if (((s as any).jeff ?? 0)?.['convo'] === 3) {
          scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/9.jpg');
          scene.text('"Hey Jeff, how do keep your modelling figure while you\'re going to school and working here at the same time?"');
          scene.text('"Cupcakes!"');
          scene.actions([
            { label: '"Excuse me…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/17.jpg');
    scene.text('"And candy! And chocolate! And-"');
    scene.text('"Wait Jeff! What are you talking about? You eat cupcakes and chocolate to maintain your figure??"');
    scene.text('"Hmm?? I thought you were asking me what my favorite things to eat are?"');
    scene.text('"…"');
    scene.actions([
      { label: 'Keep chatting', goto: ['foto_models2', 'jeff_chat'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).jeff ?? 0)?.['convo'] === 4) {
            scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/14.jpg');
            scene.text('"So what do you do for fun Jeff?"');
            scene.text('"I like to dancing at the local nightclub. They won\'t let you in unless you\'re wearing the right kind of clothing and makeup, but you\'re a model so getting that stuff should be easy. You should come with me sometime!"');
            scene.text('"Haha! Okay, maybe I will!"');
            scene.text('"It\'ll be fun! The bartenders there are really nice! They always give me free shots when I show them my titties!"');
            scene.text('"…"');
            if (((s as any).jeff ?? 0)?.['movies'] === 1) {
              scene.text('<i>Wait, didn\'t she say that she hates going to the movies because they\'re loud? How can she go to a nightclub with pounding music then???</i>');
            }
          } else {
            if (((s as any).jeff ?? 0)?.['convo'] === 5) {
              scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/18.jpg');
              scene.text('"Say… Jeff… What kind of grades are you getting at the university?"');
              scene.text('"My grades?" She tilts her head curiously. "I have a 4.9 average. Why do you ask?"');
              scene.text('Your jaw drops as you hear her near perfect grading scores. She continues to stare at you, wondering why you\'re acting so strange. You only snap out of it when you have to slap her hands away for honking your boobs.');
              scene.text('"Oh! So these <i>are</i> your reset buttons!"');
              scene.actions([
                { label: 'Keep chatting', goto: ['foto_models2', 'jeff_chat'] },
              ]);
            }
          }
        }
      }
    }
  } },
    { label: 'Talk about sex', goto: ['foto_models2', 'jeff_sex_talk'] },
  ]);
  scene.build();
}

function enterJeffSexTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
  scene.text('"Oooooh! A bit of girl talk? Sure thing! Whatcha wanna talk about?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going. I\'ll see you later, okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about something else', goto: ['foto_models2', 'jeff_chat'] },
    { label: '"What\'s your favorite position?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/13.jpg');
    scene.text('"Favorite position? Hmmm… Not sure I have one. I don\'t really mind whatever way he wants to do it. I like having my boobies grabbed but you can do that from pretty much any position. Doggy, starfish, cowgirl, sandwich, Eiffel Tower, reverse cowgirl-"');
    scene.text('She goes on continuing to name positions for a while.');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"What\'s your favorite sexual experience?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
    scene.text('"Definitely the time I fucked my bio professor."');
    scene.text('"You fucked your professor?"');
    scene.text('"Oh yeah, I fuck any professor I think I can get away with. Really easy way to bump up your grades. Older guys always have their specific fetishes and my bio professor has a bit of an oral fixation with nipples. The first time we hooked up, I came three times before he even put it in me! That man has a mouth that was made to suck on titties!"');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"Do you have a boyfriend?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
    scene.text('"Boyfriend? Nah, I\'m too young to get tied down by a man. Not literally though. That used to happen a lot."');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"Do you like girls?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/11.jpg');
    scene.text('"Like? Or \'like\' like? Or like in bed? Hmm. I guess I\'d say… Yes, no I swing both ways, and yes! Girls are fun, more fun than guys, but only a dick can satisfy that urge you get for a good pounding. But guys don\'t have boobs, and boobs are the best part about girls!"');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"What\'s your sex life at home like?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/11.jpg');
    scene.text('"Well, I\'m still at uni so there\'s definitely a lot of boys around campus, but I never bring anybody home cause I don\'t want them to know where I live. I try to hook up with strangers at the nightclub instead! It\'s always really fun trying to sneak out the morning after. I wonder if when they wake up and can\'t find a trace of me that they think they might have fucked a ghost!"');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: 'How do you feel about blowjobs?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/21.jpg');
    scene.text('"I don\'t mind giving head. Blowjobs are fine. I prefer getting eaten out though. That\'s why any time a boy asks for a blowjob I ask him if he wants to 69 instead. Even better are 69\'s with girls though. Ever tried it before?" She asks her question innocently but her eyes twinkle mischievously at you.');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
    { label: 'Have you ever been in an orgy?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/20.jpg');
    scene.text('"A couple times. I was at this party once and some of the girls were playing strip beer pong with the guys. One of the girls added on a blowjob as an extra bet and a lot of the other guys started getting real handsie after she lost. Devolved pretty quickly from there. I don\'t know if I like it all that much though. It gets annoying when you\'re bouncing on someone\'s cock on the sofa and when you turn around you realize he\'s been grabbing someone else\'s tits instead of yours. The time everyone started fucking in the hot tub was more fun."');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffSexAdvice(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
  scene.text('"Oh ho ho, looking to impress somebody?" Well, what do you need help with?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going. I\'ll see you later, okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about something else', goto: ['foto_models2', 'jeff_chat'] },
    { label: 'Advice about blowjobs', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/23.jpg');
    scene.text('"Huhh? You want advice about giving head? What\'s so hard to understand? You put it in your mouth, suck it like a lollipop, and swallow the cream when it comes out at the end. Next!"');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"What, regular old pussy pounding? If you\'re looking for advice about that, how about you try mixing up the positions? Ever tried this one?" she asks as she puts her legs together and puts them up in the air. "I love this one because you can squeeze your legs and make your pussy tighten up on his dick. It\'s so funny watching them try not to cum! Although it\'s less funny if they actually do and you haven\'t gotten off yet…"');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about anal', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/23.jpg');
    scene.text('"Anal? Ugh, I hate anal. It\'s just so uncomfortable and you need to have lube and all that. Ew. I avoid it if I can help it. I\'ll basically only allow it if there\'s more than two guys. And really I\'m only doing it to be polite. If there\'s three dicks and three holes but you won\'t let them use one, someone\'s going to feel pretty hurt only getting a handjob while the other two get sucked and fucked."');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about group sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/18.jpg');
    scene.text('"Group sex? You mean like gangbangs and stuff? Well I don\'t do it too much recreationally but back when I was still escorting, the dirty old guys loved it so it would be semi regular. Best advice I can give is just to try relax as much as possible and let them do their thing on you. There could be like, five dicks in or around you! That\'s too many directions. Just relax your body, let them lead. They\'ll end up fucking you in whatever direction they want, no need for you to focus on anything but enjoyment. Oh, and put someone\'s hands on your titties! Makes them more focused about what they\'re doing."');
    scene.actions([
      { label: 'Continue', goto: ['foto_models2', 'jeff_sex_advice'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffModelling(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You\'re looking for Jeff when you hear her voice coming from one of the sets.');
  ((s as any).jeff ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  ((s as any).jeff ?? {})['model'] = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).jeff ?? 0)?.['model'] === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy.jpg');
      scene.text('"Whooo! Yipee!"');
      scene.text('You find her in the middle of a photoshoot and she\'s jumping up and down on the bed kicking her legs and striking poses mid air.');
      scene.text('The photographer seems really excited. "Yes! I love that Jeff! Do you think you can do that again but get your leg higher so we can get a better look at your pussy?"');
      scene.text('"Sure thing boss! <i>Hyaaa!<i/>"');
      scene.text('<i>I guess she\'s busy modelling right now. I\'ll come find her again later.</i>');
      scene.actions([
        { label: 'Leave', goto: ['foto', 'studio'] },
      ]);
    } else {
      if (((s as any).jeff ?? 0)?.['model'] === 2) {
        scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy2.jpg');
        scene.text('You find her in the middle of a shoot, the photographers playing with the lighting around her.');
        scene.text('She looks pretty bored but you can\'t interrupt now even if they\'re just doing lighting stuff and decide to come back later.');
        scene.actions([
          { label: 'Leave', goto: ['foto', 'studio'] },
        ]);
      } else {
        if (((s as any).jeff ?? 0)?.['model'] === 3) {
          scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy3.jpg');
          scene.text('You find her in the middle of a photoshoot bantering with the photographers.');
          scene.text('"God, I wish I could just go clubbing like this sometimes. I\'d get arrested if I tried but it would be the easiest pickups in the world! Could you imagine? Just spread my legs like this and be like, \'Hey bebeee! U lik sum fuk?\' I\'d be in a cab to his place in 2 minutes or the bathroom in 1, getting my brains fucked out."');
          scene.text('The photographers laugh, taking pictures of her even while she goofs off and you decide not to interrupt the shoot.');
          scene.actions([
            { label: 'Leave', goto: ['foto', 'studio'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterAnushka_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) === 9  ||  ((s as any).hour ?? 0) === 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Makeup Station</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/makeup_applied.jpg');
    if (((s as any).anushkaQW ?? 0)?.['model'] >= 1) {
      scene.text('You find Anushka sitting in the makeup area getting her makeup done by Terekhova again. You walk up to her and smile.');
      scene.text('"Hi, back for more modeling work?"');
      scene.text('She glances in your direction. "Hey bitch! Yeah, I am. You too, huh?"');
      scene.text('You nod your head. "Yeah, I was just walking around and seeing what\'s what before getting started."');
      scene.text('Terekhova smiles. "Nice to see you again."');
    } else {
      ((s as any).anushkaQW ?? {})['model'] = 1;
      scene.text('You find Anushka sitting in the makeup area getting her makeup done by one of the makeup artists. You\'re a bit surprised since you didn\'t know she modeled, even though you\'ve heard the rumors around school.');
      scene.text('"So you\'re a model?" you ask.');
      scene.text('She glances in your direction. "Hey bitch! Yeah, I am. You too?"');
      scene.text('You nod your head. "Yeah, I was just walking around and seeing what\'s what."');
      scene.text('She nods. "If you want to get your makeup done, then grab Terekhova, she\'s the best. But you have to wait until she finishes mine," she says in a teasing tone as Terekhova smiles.');
    }
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Makeup Station</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/makeup_applied.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
      scene.text('Anushka asks you about the recent modeling shoots you\'ve done and what\'s going on in your life in general.');
      scene.text('You return the favor, asking her about what\'s going on with her. Before long, you\'re both asking Terekhova for makeup tips, and soon the three of you are talking about modeling, fashion and boys while Anushka gets her makeup done.');
    } else {
      scene.text('You ask her about the recent modeling shoots she\'s done and what\'s going on in her life in general.');
      scene.text('She answers your questions, but seems mostly focused on watching Terekhova do her makeup. She doesn\'t ask you about things going on in your life before Terekhova starts giving the two of you some makeup tips. The three of you are soon talking about modeling, fashion and boys while Anushka gets her makeup done.');
    }
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Makeup Station</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/makeup_check.jpg');
    scene.text('Terekhova, who\'s older than both of you by several years, starts telling the two of you about her most recent boyfriend and both you and Anushka ask for details. Anushka often teases her and asks for sexual details in their relationship, though. Finally, once her makeup is done, Anushka gets up and leans in close to the mirror to inspect her face. "You\'re good to go. They\'re likely waiting for you," Terekhova says with a smile.');
    scene.text('Anushka gives her a smile in return. "Thanks, amazing work as always," she says before turning to you. "I need to go to my photo shoot. You can come watch if you want."');
    scene.actions([
      { label: 'Maybe some other time.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Makeup Station</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/makeup_check.jpg');
    scene.text('You shake your head as she does a last minute check in the mirror. "Maybe some other time. I need to get going."');
    scene.text('She just shrugs. "Okay then, see you around." With that, she turns to go and get dressed for the photo shoot.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Go watch her model', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Makeup Station</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/makeup_check.jpg');
    scene.text('You grin at her. "Sure, I\'d love to watch you work."');
    scene.text('With a final check in the mirror, she smiles back at you. "Well come on, come watch a master at work."');
    scene.text('You roll your eyes slightly and follow her as she gets dressed in her outfit for the photo shoot. You then follow her to where the photographer is waiting, and he quickly puts her to work posing.');
    scene.actions([
      { label: 'Watch', goto: ['foto_models2', 'nush_modeling'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 14) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Photography Studio</b></center>');
      scene.img('images/locations/city/citycenter/photo/foto.jpg');
      scene.text('You see Anushka dressed up and talking to one of the photographers. A few seconds later, she takes her place in front of the lights as he starts to circle around her to take pictures. Looks like you showed up just in time for one of her shoots. You could watch her and see how she does or see to your own affairs.');
      scene.actions([
        { label: 'Leave', goto: ['foto', 'studio'] },
        { label: 'Watch', goto: ['foto_models2', 'nush_modeling'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) === 14  ||  ((s as any).hour ?? 0) === 15) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Photography Studio</b></center>');
        scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
        if (((s as any).anushkaQW ?? 0)?.['model'] >= 1) {
          scene.text('You arrive just in time to see Anushka finish another photo shoot. She has a huge grin on her face as she stands there completely naked. She seems to really enjoy modeling, or maybe she\'s just enjoying being naked in front of everyone. You doubt you\'ll ever figure out which.');
        } else {
          ((s as any).anushkaQW ?? {})['model'] = 1;
          scene.text('You arrive just in time to see Anushka finish a photo shoot. She\'s completely naked with a huge grin on her face. She seems to really enjoy modeling, or maybe she\'s just enjoying being naked in front of everyone. It\'s hard to tell with her.');
          scene.actions([
            { label: 'Leave', goto: ['foto', 'studio'] },
            { label: 'Go talk to her', goto: ['foto_models2', 'nush_chat'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterNushChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Photography Studio</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
  scene.text('As you walk up to her, you can\'t help but look at her naked body. She notices and smirks, but doesn\'t seem to mind in the slightest.');
  scene.text('"How was your photoshoot?" you ask.');
  if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
    scene.text('She grins. "It was great! Fuck, I love doing this. Almost as much as I like playing guitar and singing in the band. Almost… Hell, I almost like it as much as sex… Okay, maybe not that much," she says with a giggle.');
    scene.text('You snort and shake your head at her being… well, her. "I\'m glad you\'re having so much fun. I just wanted to say hi while you were still here."');
    scene.text('She nods. "It\'s cool, we can hang out for a bit. Unless you\'re in a rush for your own shoot?" You could talk to her or go about your own business and let her get dressed.');
  } else {
    scene.text('She gives you a smile. "It was great! Fuck, I love doing this. Almost as much as I like playing guitar and singing in the band. Almost… Hell, I almost like it as much as sex… Okay, maybe not that much," she says with a wink.');
    scene.text('You snort and shake your head at her being… well, her. "I\'m glad you\'re having so much fun. I just wanted to say hi while you were still here."');
    scene.text('She nods. "It\'s cool." You could talk to her and get to know her a little better, or go about your business and let her get dressed.');
  }
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
    { label: 'Talk to her', goto: ['foto_models2', 'nush_chat1'] },
  ]);
  scene.build();
}

function enterNushChat1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Photography Studio</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
  scene.text('Anushka stands there naked as the two of you talk about a variety of things.');
  if (((s as any).nush_chat ?? 0)?.['ask_anastasia'] === 0) {
    scene.actions([
      { label: 'Ask about Anastasia', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).nush_chat ?? {})['ask_anastasia'] = 1;
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    if (((s as any).nush_chat ?? 0)?.['been_here_awhile'] === 0) {
      ((s as any).nush_chat ?? {})['been_here_awhile'] = 1;
      scene.text('"So, you\'ve been modeling here for a while, yeah?" you ask.');
      scene.text('She nods her head. "Yeah, since the start of the summer before our final year of school. Why?"');
    }
    scene.text('"I was just wondering what you thought about Anastasia?" you ask.');
    scene.text('She thinks for a second. "Pretty cool. She knows how to model and has made a name for herself, but I think her days as the top model in the studio are numbered. She can give you some nice advice about modeling if you don\'t mind being mothered to death," she says with a hint of disdain.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nush_chat ?? 0)?.['ask_krystal'] === 0) {
    scene.actions([
      { label: 'Ask about Krystal', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    if (((s as any).nush_chat ?? 0)?.['been_here_awhile'] === 0) {
      ((s as any).nush_chat ?? {})['been_here_awhile'] = 1;
      scene.text('"So, you\'ve been modeling here for a while, yeah?" you ask.');
      scene.text('She nods her head. "Yeah, since the start of the summer before our final year of school. Why?"');
    }
    scene.text('"I was just wondering what you thought about Krystal?" you ask.');
    scene.text('She grins with a devious look on her face. "She\'s a lot of fun. Friendly and, well, just fun to talk to. Her and her boyfriend both do porn, sometimes together and sometimes not." She has a \'the cat ate the canary\' look on her face, like there\'s something more to what she\'s saying.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
      { label: 'What else?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('"Okay, what else? I can tell you\'re holding something back," you tell her.');
    scene.text('She just keeps grinning before looking around and giggling. "I think she might be the first person I\'ve met that likes to fuck even more than I do."');
    scene.text('You arch a brow. "Oh? Why do you say that?"');
    scene.text('She grins with a devious look on her face. "Well, we were hanging out after work one time, talking and stuff when she starts hitting on me. I mean, really hitting on me. Hard. Anyway, long story short, I go back to her place and we start making out, and really getting into it, when I notice this dude sitting in a chair watching us. At first I was a little freaked out, but she wasn\'t so I was like whatever. Then she introduces him as her boyfriend, Ben," she says with an amused giggle.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Then what happened?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('"Then what happened?" you curiously ask.');
    scene.text('"Well, he just watches us and starts jerking off. Then she asks me if it\'s okay if he joined us. I said yes, naturally."');
    scene.text('You giggle at little. "Naturally."');
    scene.text('"He comes over and joins us, and we have a wild threesome." She sighs blissfully, obviously having enjoyed it.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'And?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('"And then?" you prompt her.');
    scene.text('She shrugs. "Afterwards, while we\'re just laying there basking in the afterglow, they tell me how much they enjoyed having me there and I said I liked it as well. Then Ben asked if I wanted to come back and he could invite over a friend or two. Krystal then says they were going to have a party and invited me. Turns out they\'re swingers and have a ton of sex party orgies."');
    scene.text('"Did you go?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['sex'] >= 1) {
      scene.text('She shakes her head. "Not yet. I\'ve been busy and couldn\'t make it to the city on the days they\'re doing it, but I plan to. Why, do you want to join in?"');
      scene.text('You\'re surprised by the question. "I don\'t know, I would have to think about it…"');
      scene.text('She shrugs. "Well, not my place to invite you. If you\'re interested, go talk to Krystal about it."');
      scene.text('She then tells you about a few other details of her and Krystal just hanging out and talking after work. Seems they really get along well with each other.');
    } else {
      scene.text('She shakes her head. "Not yet. I\'ve been busy and couldn\'t make it to the city on the days they\'re doing it, but I plan to."');
      scene.text('She then tells you about a few other details of her and Krystal just hanging out and talking after work. She seems to get along well with Krystal.');
    }
    ((s as any).nush_chat ?? {})['ask_krystal'] = 1;
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
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
  if (((s as any).nush_chat ?? 0)?.['ask_emily'] === 0) {
    scene.actions([
      { label: 'Ask about Emily', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).nush_chat ?? {})['ask_emily'] = 1;
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    if (((s as any).nush_chat ?? 0)?.['been_here_awhile'] === 0) {
      ((s as any).nush_chat ?? {})['been_here_awhile'] = 1;
      scene.text('"So, you\'ve been modeling here for a while, yeah?" you ask.');
      scene.text('She nods her head. "Yeah, since the start of the summer before our final year of school. Why?"');
    }
    scene.text('"I was just wondering what you thought about Emily?" you ask.');
    scene.text('She thinks for a second. "A complete bitch. I mean, a total fucking cunt. She won\'t help anyone and takes this all too seriously, like her life depends on her being the best model or some shit. The irony is, if she wasn\'t such a complete bitch and so hard to work with, she might already be the number one model. I don\'t think anyone likes working with her - I try to avoid her when I can so I don\'t knock her bitch ass out," she says in an aggressive tone. She clearly doesn\'t like her.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nush_chat ?? 0)?.['ask_jeff'] === 0) {
    scene.actions([
      { label: 'Ask about Jeff', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).nush_chat ?? {})['ask_jeff'] = 1;
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    if (((s as any).nush_chat ?? 0)?.['been_here_awhile'] === 0) {
      ((s as any).nush_chat ?? {})['been_here_awhile'] = 1;
      scene.text('"So, you\'ve been modeling here for a while, yeah?" you ask.');
      scene.text('She nods her head. "Yeah, since the start of the summer before our final year of school. Why?"');
    }
    scene.text('"I was just wondering what you thought about Jeff?" you ask.');
    scene.text('She snorts and shakes her head. "Nice girl, if a bit overly friendly. She reminds me of an overgrown puppy that\'s constantly jumping on you, wanting attention. She acts like a complete ditz, but I don\'t know if she\'s really that stupid or just acts that way."');
    scene.text('She then shrugs. "I guess she can\'t be as big of a ditz as she acts since she goes to the university. Oh, and she\'s a hugger. The girl is all touchy-feely, in a friendly eager puppy kind of way. That is, if puppies were constantly grabbing your tits every chance they got," she says in an amused tone.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    ]);
  }
  if (((s as any).nush_chat ?? 0)?.['ask_mari'] === 0) {
    scene.actions([
      { label: 'Ask about Mari', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).nush_chat ?? {})['ask_mari'] = 1;
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    if (((s as any).nush_chat ?? 0)?.['been_here_awhile'] === 0) {
      ((s as any).nush_chat ?? {})['been_here_awhile'] = 1;
      scene.text('"So, you\'ve been modeling here for a while, yeah?" you ask.');
      scene.text('She nods her head. "Yeah, since the start of the summer before our final year of school. Why?"');
    }
    scene.text('"I was just wondering what you thought about Mari?" you ask.');
    scene.text('She shrugs. "Small village girl that went to the city to make a better life for herself. Seems she\'s adapted quite well. Pretty easy going, easy to talk to. Really relaxed about nudity, not just her own but everyone else\'s. I think she\'s in the closest, or at least bisexual. She denies it, but I notice her occasionally stealing glances at the other girls with <i>that</i> look. You know the one."');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Make small talk', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('The two of you chat about a variety of things, mostly your modeling photoshoots, school, music, clothes and what\'s been going on in Pavlovsk lately. She\'s not seemingly bothered in the slightest that she\'s naked in front of you.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    { label: 'Ask how she likes modeling', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('"So, how do you like modeling?" you ask.');
    scene.text('She smiles. "It\'s pretty cool. It pays well, which is the main reason I started doing it. Plus, it\'s good to make contacts in the industry. Got one of the photographers to do a photoshoot with me and the boys for the band. Not to mention it doesn\'t hurt that Rad uses my modeling for the band. He\'s always making sure everyone knows I\'m a model and posts links to my latest photoshoots on our website. He thinks it\'s good for the band and I\'ve got to agree. The more I model, the more people comment and we\'ve been getting gigs much easier."');
    scene.text('"So you\'ve become the face of the band?"');
    scene.text('She starts to answer before pausing to think about it. "Maybe. I mean, it\'s still Rad\'s thing… For now, at least," she says with a smile.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
      { label: 'Ask for modeling advice', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Photography Studio</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/nush_talk.jpg');
    scene.text('"So, do you have any modeling tips for me?" you ask.');
    scene.text('She smiles. "Yeah. Have fun. Seriously, just relax and have fun with it. I mean, where else can you make this kind of money for standing around in different clothes, undressing while some dude takes your picture? Plus, it\'s kind of fun to play dress up in all the different outfits and just show off your body and have it appreciated. Honestly if it wasn\'t for the band, I would likely be pursuing this as a career."');
    scene.text('She stops for a second, realizing she\'s got off topic. "Anyway, like I said, just relax. Have fun with it and don\'t stress about stuff."');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep chatting', goto: ['foto_models2', 'nush_chat1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNushModeling(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anushkaQW ?? 0)?.['model'] === 0) {
    ((s as any).anushkaQW ?? {})['model'] = 1;
  }
  if (((s as any).anushkaQW ?? 0)?.['model'] < 6) {
    // TODO-QSP: gt 'foto_models2', 'nush_photoshoot<<anushkaQW[''model'']>>'
  } else {
    scene.actions([{ label: 'Continue', goto: ['foto_models2', 'nush_photoshoot<<rand(1,5)>>'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNushPhotoshoot1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).anushkaQW ?? 0)?.['model'] > 6) {
    ((s as any).anushkaQW ?? {})['model'] = 6;
  } else {
    ((s as any).anushkaQW ?? {})['model'] = (((s as any).anushkaQW ?? {})['model'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka Photoshoot</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose1.jpg');
  scene.text('Anushka is dressed in a short, tight white skirt that\'s barely long enough to cover anything and a white top that has lots of little holes cut into it, showing off her black and red bra, cleavage and part of her stomach. Black and red high heels and black thigh-high stockings complete the look. She stands in several poses, doing as the photographer asks. She seems to be enjoying herself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose2.jpg');
    scene.text('"Turn around now, lean forward and stick out that cute butt of yours," the photographer tells her and she does what he asks, her new poses causing the short skirt to ride up and show off the bottom of her pantyless ass. The photographer moves around, taking photos of her from different angles as she glances over and grins at you.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose3.jpg');
    scene.text('The photographer moves in front of her. "Pull up that shirt and tease the viewer a little." She pulls up her shirt, following his direction, still bent slightly forward but now facing the camera, looking into it and trying to tease the viewer.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose4.jpg');
    scene.text('"Nice, now lose the top."');
    scene.text('She slowly removes the top while he takes pictures and starts posing in the white skirt with the red and black bra on. He takes photos of her from every direction.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose5.jpg');
    scene.text('"Good, now lose the bra and smile. Tease the camera like it\'s your lover."');
    scene.text('She takes off her top and performs several different poses before getting down on all fours while looking at the camera on the day bed. He squats down to take several photos of her.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose6.jpg');
    scene.text('"Now get up on your knees and pull up that skirt."');
    scene.text('She gets up and pulls the skirt up, showing off her shaved pussy.');
    scene.text('"That\'s it. Now spread your legs just a bit more. That\'s it."');
    scene.text('She follows his directions and poses in a few different ways as he moves around taking pictures.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose7.jpg');
    scene.text('"Alright, now I want you to lay down and relax. Be a little playful."');
    scene.text('She lays down and does what he asks as he moves around taking her photo from above from several different angles.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Finish watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set1/pose8.jpg');
    scene.text('"Now spread those legs… Wider… That\'s it. Play with your boobs now."');
    scene.text('She spreads her legs wide, showing off everything and grabs one of her breasts while staring at the camera, trying to tease and seduce the viewer.');
    scene.text('After a few more minutes, he finally stops and steps back. "Okay, that should do it, you can go. Nice work, Nush."');
    scene.text('She smiles and pulls off the skirt and heels, now completely naked as she take the clothes she was just wearing back to wardrobe.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Talk to her', goto: ['foto_models2', 'nush_chat'] },
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

function enterNushPhotoshoot2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).anushkaQW ?? 0)?.['model'] > 6) {
    ((s as any).anushkaQW ?? {})['model'] = 6;
  } else {
    ((s as any).anushkaQW ?? {})['model'] = (((s as any).anushkaQW ?? {})['model'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka Photoshoot</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose1.jpg');
  scene.text('Anushka is dressed in some old sneakers, a pair of jeans that have been cut so short that they\'re now a micro skirt that her black bikini bottoms can be seen under, and a black bikini top. She stands in several poses doing as the photographer asks. She seems to be enjoying herself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose2.jpg');
    scene.text('"Okay, turn around and spread you legs."');
    scene.text('She does as the photographer tells her, even going a step further and grabbing the bottom of her ass cheeks and spreading them, showing off her bikini bottoms from behind.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose3.jpg');
    scene.text('"Now face me and tease pulling the top aside. That\'s it. A bit more… Now show your nipples."');
    scene.text('She makes poses at each of the commands, slowly pulling the top apart, teasingly showing her breasts until she pulls it apart enough that her nipples are visible.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose4.jpg');
    scene.text('"Alright, now lose the top and tease the camera with that skirt."');
    scene.text('She removes the top and tosses it aside. Unbuttoning and zipping down the jeans-turned-into-micro-skirt, she pulls and twists on them until they\'re not covering much of her bikini bottoms anymore. She seems to really be enjoying herself.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose5.jpg');
    scene.text('"Perfect, now lose the skirt and tease us with those bottoms."');
    scene.text('She lets go of the former jeans and they fall off onto the floor as she pulls the bikini bottoms to one side, then back to the other, followed by down. She comes close to showing her pussy each time, but is always just a little shy of showing it.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose6.jpg');
    scene.text('"Lose the bottoms and give me a look like you want the camera. Make love to it."');
    scene.text('She loses the bottoms and makes several poses, settling on putting one foot on a small table and spreading her legs while running her hands up and down her body.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Finish watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set2/pose7.jpg');
    scene.text('"Get on the couch for me."');
    scene.text('She does so, making several poses before he instructs her further.');
    scene.text('"Okay, get on all fours. No, no. Face your ass towards the arm of the couch… Yeah, that\'s it, put your feet up on the arm of the couch and look back at me. Perfect."');
    scene.text('She gets in the position he requested which gives a nice view of her… well, everything. He moves around taking pictures of her from several angles before he finally seems satisfied and she gathers up the discarded clothing and carries them over to the wardrobe rack to drop them off.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Talk to her', goto: ['foto_models2', 'nush_chat'] },
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

function enterNushPhotoshoot3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).anushkaQW ?? 0)?.['model'] > 6) {
    ((s as any).anushkaQW ?? {})['model'] = 6;
  } else {
    ((s as any).anushkaQW ?? {})['model'] = (((s as any).anushkaQW ?? {})['model'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka Photoshoot</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose1.jpg');
  scene.text('Anushka is dressed in a Victorian style green skirt with a matching top and long side tails partially covering the skirt in layers, an old-style necklace, a large red wig and a skull to finish off the look. She stands in several poses, doing as the photographer asks. She seems to be enjoying herself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose2.jpg');
    scene.text('"Pull the skirt up for me and tease the camera."');
    scene.text('Anushka sets the skull aside and pulls up the front of the skirt, showing off the white underskirt, white stockings and green high-heeled ankle boots that match the skirt.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose3.jpg');
    scene.text('"Take off the skirt and underskirt."');
    scene.text('Anushka removes both and stands in several poses for the photographer.');
    scene.text('"Now pull the tails of the top aside so we can get a good view of those panties."');
    scene.text('She does as she\'s told, showing off the green panties that match the rest of the outfit.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose4.jpg');
    scene.text('The photographer moves around taking pictures from several directions.');
    scene.text('"Okay, pull the panties down, but not all the way."');
    scene.text('She pulls them down just enough for her pussy to be on display as he moves around taking more photos of her, asking her to change how she stands a few times.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose5.jpg');
    scene.text('"Take off the panties and pick up the skull and hold it in your hand while looking at it."');
    scene.text('She does several poses like that for him. "Good, good. Now sit in the chair and spreads your legs while looking at the skull."');
    scene.text('She does so, showing off her cleanly-shaved pussy for all to see as he keeps taking photos.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose6.jpg');
    scene.text('"Now turn and face the chair, lean forward and put your hands on the chair."');
    scene.text('She does as he asks as he moves over and pushes the tails so they hang in front of her hips, showing off her naked ass. He then steps back and takes some photos. "Okay, stand with your feet apart… A bit further… That\'s it. Just like that."');
    scene.text('He squats down to take several photos of her from behind and off to the side.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose7.jpg');
    scene.text('"Now take off the top for me."');
    scene.text('With the top removed, she\'s left wearing only the red wig, green boots, white stockings and matching white bra. She stands in several poses while he moves around her, taking photos from every direction.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Finish watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set3/pose8.jpg');
    scene.text('"Take off the bra and look at the camera like you want to make love to it."');
    scene.text('She removes the bra and gives the camera hungry looks as he moves around taking photos, while she turns her gaze to always be looking at the camera.');
    scene.text('Satisfied, he ends the shoot and Anushka gathers up the discarded clothing and carries them over to the wardrobe rack and drops them off, taking a minute to remove the boots, stockings, wig and necklace as well.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Talk to her', goto: ['foto_models2', 'nush_chat'] },
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

function enterNushPhotoshoot4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).anushkaQW ?? 0)?.['model'] > 6) {
    ((s as any).anushkaQW ?? {})['model'] = 6;
  } else {
    ((s as any).anushkaQW ?? {})['model'] = (((s as any).anushkaQW ?? {})['model'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka Photoshoot</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose1.jpg');
  scene.text('Anushka is dressed in a red school skirt with a strapped crop top, black stockings and black stiletto heels which finish off the look. They even gave her hair extensions to give her longer hair. She stands in several poses doing as the older photographer asks and seems to be enjoying herself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose2.jpg');
    scene.text('"Pull up that skirt for me and just tease those panties."');
    scene.text('She does as he says and seems to love doing it. Underneath the skirt is a pair of black panties. She moves around a lot, swooshing the skirt and pulling it up at times.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose3.jpg');
    scene.text('"Now turn around and bend over for me. Let\'s see that cute little ass."');
    scene.text('She turns around and bends all the way over, the short skirt riding up and showing off her thong clad ass. She looks back at the camera and wiggles her ass as he takes several photos from different angles.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose4.jpg');
    scene.text('"Sit down on the floor facing me with your knees up and your legs spread wide apart."');
    scene.text('She sits down and pulls her legs apart, placing her hands on her inner thighs from underneath. She looks straight at the camera as he starts taking more photos.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose5.jpg');
    scene.text('"Alright, get up for me and lose the top."');
    scene.text('She stands back up and pulls off the top, showing off her perky breasts in all of their glory. She stands in a variety of poses as he moves around taking photos.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose6.jpg');
    scene.text('"Okay, pull up the skirt now."');
    scene.text('She not only pulls up the skirt, but starts pulling her panties to the side slightly, teasing the viewer even more with flashes of her pussy.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose7.jpg');
    scene.text('"Get down on the floor and crawl for me."');
    scene.text('She gets down and crawls around trying to look sexy while he takes photos of her coming towards him, away and from the side. "Alright, now lose the skirt."');
    scene.text('She takes off the skirt and tosses it aside as he takes photos from the same angles again, this time without the skirt hiding anything.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Finish watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set4/pose8.jpg');
    scene.text('"Get up and lose the underwear."');
    scene.text('She stands up and slides her panties off, showing a trimmed bush. "I can\'t believe you wanted me to grow this out. How it that sexy?"');
    scene.text('He sighs. "Just shut up and look pretty, I know what I\'m doing."');
    scene.text('She shuts up, but doesn\'t look happy about it. She quickly hides her displeasure and goes back to posing.');
    scene.text('After a few more minutes, he finishes the shoot with a dismissive wave of his hand. Anushka gathers up the discarded clothing and carries them over to the wardrobe rack to drop them off. She takes a minute to remove the heels, stockings and hair extensions as well.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Talk to her', goto: ['foto_models2', 'nush_chat'] },
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

function enterNushPhotoshoot5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).anushkaQW ?? 0)?.['model'] > 6) {
    ((s as any).anushkaQW ?? {})['model'] = 6;
  } else {
    ((s as any).anushkaQW ?? {})['model'] = (((s as any).anushkaQW ?? {})['model'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka Photoshoot</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose1.jpg');
  scene.text('Anushka is dressed in a skin tight latex body suit, with pink high heels and a pink collar to finish off her look. She\'s wearing hair extensions to give her longer hair again. You can\'t help but think she looks like a dominatrix-in-training, or maybe a sub waiting to get punished with that collar. She\'s working with the older photographer again, standing in several poses and doing as he asks. She seems to be enjoying herself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose2.jpg');
    scene.text('"Turn around for me."');
    scene.text('She turns around and you hear the squeak of the latex rubbing against itself as she moves around. He takes a few photos of her backside encased in the very tight latex.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose3.jpg');
    scene.text('"Alright, unzip it most of the way down and then tug on the collar, like you feel it\'s uncomfortable."');
    scene.text('She unzips the front down to her navel, showing of her cleavage as she tugs and pulls at the pink collar around her neck, looking like she\'s resenting being collared.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose4.jpg');
    scene.text('"Pull the sides apart so we can see your breasts."');
    scene.text('She does as he says and makes several more poses, the suit making noise every time she moves.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose5.jpg');
    scene.text('"I didn\'t tell you to stop tugging at that collar. Come on, work with me here!"');
    scene.text('Looking a little annoyed, she starts tugging and pulling on the collar again, hiding any annoyance she\'s feeling towards the photographer.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose6.jpg');
    scene.text('"Okay, pull down the suit now."');
    scene.text('She shrugs it off her shoulders, but it takes a few seconds as the latex clings to her skin, and she pulls the suit down almost enough to show off her pussy. You notice she has neatly trimmed pubic hair again. The photographer notices as well. "I thought I told you to let it grow out?"');
    scene.text('She looks down at her pubic hair. "I did," she replies while rubbing the hair. "What do you call this?"');
    scene.text('He gives her an annoyed look. "I said to let it grow out, not to trim it."');
    scene.text('She has a disgusted look on her face, but doesn\'t back talk him. After a moment of silence, he sighs and goes back to taking photographs of her.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose7.jpg');
    scene.text('"Let\'s go, take it the rest of the way off."');
    scene.text('She pushes and pulls, struggling to get the skin tight latex body suit off. She finally gets it off and tosses it aside, before posing now completely naked, other than the pink high heels and pink collar around her neck. She stands in a variety of poses while he takes photographs.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Finish watching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka Photoshoot</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/set5/pose8.jpg');
    scene.text('"Pull at the collar again," he says in an annoyed voice.');
    scene.text('She starts tugging at the collar again while looking directly at the camera as if it\'s her master and she\'s fruitlessly trying to resist being owned by the viewer.');
    scene.text('After several more minutes, he finishes the shoot and sends her off with a dismissive wave of his hand. Anushka gathers up the discarded clothing and carries them over to the wardrobe rack to drops them off, taking a minute to remove the heels, collar and hair extensions as well.');
    qspCall(s, 'arousal', 'voyeur', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['foto', 'studio'] },
      { label: 'Talk to her', goto: ['foto_models2', 'nush_chat'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'emily_1':
      enterEmily_1(s, scene);
      break;
    case 'emily_2':
      enterEmily_2(s, scene);
      break;
    case 'emily_resolve':
      enterEmilyResolve(s, scene);
      break;
    case 'emily_modelling':
      enterEmilyModelling(s, scene);
      break;
    case 'emily_warning':
      enterEmilyWarning(s, scene);
      break;
    case 'emily_chat':
      enterEmilyChat(s, scene);
      break;
    case 'jeff_1':
      enterJeff_1(s, scene);
      break;
    case 'jeff_2':
      enterJeff_2(s, scene);
      break;
    case 'jeff_3':
      enterJeff_3(s, scene);
      break;
    case 'jeff_chat':
      enterJeffChat(s, scene);
      break;
    case 'jeff_sex_talk':
      enterJeffSexTalk(s, scene);
      break;
    case 'jeff_sex_advice':
      enterJeffSexAdvice(s, scene);
      break;
    case 'jeff_modelling':
      enterJeffModelling(s, scene);
      break;
    case 'anushka_1':
      enterAnushka_1(s, scene);
      break;
    case 'nush_chat':
      enterNushChat(s, scene);
      break;
    case 'nush_chat1':
      enterNushChat1(s, scene);
      break;
    case 'nush_modeling':
      enterNushModeling(s, scene);
      break;
    case 'nush_photoshoot1':
      enterNushPhotoshoot1(s, scene);
      break;
    case 'nush_photoshoot2':
      enterNushPhotoshoot2(s, scene);
      break;
    case 'nush_photoshoot3':
      enterNushPhotoshoot3(s, scene);
      break;
    case 'nush_photoshoot4':
      enterNushPhotoshoot4(s, scene);
      break;
    case 'nush_photoshoot5':
      enterNushPhotoshoot5(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const foto_models2: LocationDef = {
  name: 'foto_models2',
  title: 'Makeup Station',
  region: 'other',
  enter: enter,
};
