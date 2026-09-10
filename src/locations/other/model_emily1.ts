// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEmily_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).emily ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_emily1', 'emily_2'] }]);
  }
  if (((s as any).emily ?? 0)?.['status'] === 5) {
    scene.actions([{ label: 'Continue', goto: ['model_emily1', 'emily_chat'] }]);
  }
  if (((s as any).emily ?? 0)?.['status'] >= 3) {
    scene.actions([{ label: 'Continue', goto: ['model_emily1', 'emily_modelling'] }]);
  }
  (s as any).emily['status'] = 2;
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You\'re walking through the studio when you hear someone shout from behind you.');
  scene.text('"Move bitch!"');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('Turning around, you see a girl with long hair, large breasts, and serious look on her face."');
    scene.text('"Get the fuck out of the way! I\'m trying to get to my shoot!"');
    scene.actions([
      { label: '"Oh, sorry about that…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You apologetically step aside as she strides past you. "Sorry, I didn\'t realize I was in the way.');
    scene.text('"Well you should pay more attention. You must be new here."');
    scene.text('"Yeah, I am. I actua-"');
    scene.text('She cuts you off mid-sentence.');
    scene.text('"Well, here\'s your introduction: I\'m Emily and if you see me coming, get <i>the fuck</i> out of my way. I\'m going to be the next big thing in this city and it\'s stupid little bitches like you who are always getting in my way and holding me back. So step <i>off</i>. I have things to do."');
    scene.text('She walks past and onto a nearby set, loudly complaining to the photographer.');
    scene.text('"Hey, I know I\'m late. There was some fucking new girl who doesn\'t know her fucking place around here. Let\'s get started."');
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
    (s as any).emily['hate'] = ((s as any).emily['hate'] ?? 0) + (1);
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
  (s as any).emily['status'] = 3;
  scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
  if (((s as any).emily ?? 0)?.['hate'] === 1) {
    scene.text('Walking through the studio, you round the corner of a set and nearly bump into Emily. The two of you immediately lock eyes and stare each other down.');
    scene.text('Unable to control the impulse, your eyes flick to her shapely breasts before going back into the stare. Even though it was only a fraction of a second, she saw you do it and immediately pounces on you for it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).tits ?? 0) < 4) {
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
        { label: 'Try to resolve things', goto: ['model_emily1', 'emily_resolve'] },
        { label: 'Call her "cow tits"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/3.jpg');
    (s as any).emily['hate'] = ((s as any).emily['hate'] ?? 0) + (1);
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
      scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/1.jpg');
      scene.text('"What\'s the matter, slut? Jealous? Wish you had a pair like mine?"');
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
          { label: 'Try to resolve things', goto: ['model_emily1', 'emily_resolve'] },
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
      scene.actions([
        { label: '"We\'re the same size!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/4.jpg');
    scene.text('Your mouth drops open in disbelief and offense. "What are you talking about you stuck up bitch?! We\'re the same size!');
    scene.text('She continues smirking as she pretends to muse over what you said.');
    scene.text('"True… But there\'s more to it than size…" she says, moving through poses like she\'s doing a shoot or something. "Softness, supplness, the way they bounce…" She sways them back and forth to make her point, jiggling with the slightest movements.');
    scene.text('"No one cares what size a girl\'s tits are when they\'re as flabby as yours," Emily whispers before striding past and leaving you fuming.');
    scene.text('<i><b>This. Fucking. Bitch!</b></i>');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
        { label: 'Try to resolve things', goto: ['model_emily1', 'emily_resolve'] },
        { label: '"Why? So they can distract from your ass ugly face?"', handler: (st: GameState) => {
    (s as any).emily['hate'] = ((s as any).emily['hate'] ?? 0) + (1);
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
    }
    scene.text('Walking through the studio, you round the corner of a set and nearly bump into Emily.');
    scene.text('"Oh. It\'s you," she says flatly.');
    // TODO-QSP: dynamic text: "Uhh, yeah… I never introduced myself the last time we saw each other. I'm <<$mo...
    scene.text(`"Uhh, yeah… I never introduced myself the last time we saw each other. I'm ${((s as any).model ?? 0)?.['firstname']}, I'm a new model here at the agency."`);
    scene.text('"Yeah, I know. Models are the only ones who walk around here naked, I\'m not retarded."');
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
    (s as any).emily['hate'] = ((s as any).emily['hate'] ?? 0) - (1);
    scene.img('images/locations/city/citycenter/photo/portraits/emily_r/talking/face.jpg');
    scene.text('You find yourself taken aback by her tirade and step away from her.');
    scene.text('"I-, I\'m sorry Emily. I didn\'t realize you were so serious about your work here. I never meant to bother you, I just… we just bumped into each other by accident, I swear."');
    scene.text('She sighs in exasperation, but otherwise recomposes herself. "Okay, whatever. It\'s not a big deal I guess, just don\'t make a habit of it," she says and brushes past you. You hear her muttering under her breath as she walks away. "Fucking amateurs, why do they even waste time with girls like that here…"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Who gave you the right?"', handler: (st: GameState) => {
    (s as any).emily['hate'] = ((s as any).emily['hate'] ?? 0) + (1);
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
  } },
    ]);
  }
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
    default:
      enterEmily_1(s, scene);
      break;
  }
}

export const model_emily1: LocationDef = {
  name: 'model_emily1',
  title: 'You\'re walking through the studio when you hear someone shou',
  region: 'other',
  description: ['You\'re walking through the studio when you hear someone shout from behind you.'],
  enter: enter,
};
