import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMariAge(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).day ?? 0) >= 20) {
    ((s as any).mari = (s as any).mari ?? {})['age'] = ((s as any).year ?? 0) - 1999;
  } else {
    ((s as any).mari = (s as any).mari ?? {})['age'] = ((s as any).year ?? 0) - 1998;
  }
  // TODO-QSP: end
  scene.build();
}

function enterMari_1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariAge(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mari ?? 0)?.['status'] === 2) {
    qspGoto(s, 'model_mari', 'mari_2');
  }
  if (((s as any).mari ?? 0)?.['status'] === 3) {
    qspGoto(s, 'model_mari', 'mari_3');
  }
  if (((s as any).mari ?? 0)?.['status'] === 4) {
    qspGoto(s, 'model_mari', 'mari_4');
  }
  scene.img('images/characters/city/models/mari/meeting/1.jpg');
  scene.text('As you walk around the different sets inside the agency, you notice another model waiting on set for a shoot to start. You realize after a second, you can see right through her top, the breast area a mesh fabric.');
  scene.text('You stand there for a while in the background contemplating if you should approach her or not. After a while you decide to go for it, thinking what\'s the worst that can happen.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/2.jpg');
    scene.text('"Hi, I hope I\'m not bothering you. I don\'t think we\'ve met and I wanted to introduce myself," you say as you step up to her.');
    // TODO-QSP: dynamic text: "I''m <<$model[''firstname'']>>."
    scene.text(`"I'm ${((st as any).model ?? 0)?.['firstname'] ?? ''}."`);
    scene.text('Mari looks your way and smiles, "Hello, it\'s always nice meeting a new model. I\'m Mari." She runs her hand through her hair absentmindedly and you can\'t help but notice her breasts becoming even more visible now that her curly brown hair has been moved out of the way.');
    scene.actions([
      { label: '"Your nipples are showing"', handler: (st: GameState) => {
    if (((st as any).braworntype ?? 0) === 'none') {
      scene.img('images/characters/city/models/mari/meeting/2.jpg');
      scene.text('"Your uhh, nipples are showing," you say, glancing down at them straining against the mesh.');
      scene.text('"So are yours," she smiles, glancing back at your bare chest.');
      scene.actions([
        { label: 'Good point', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4a.jpg');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('"Good point," you reply, looking down at your naked body.');
      scene.text('"I\'m gonna to sit down if you don\'t mind," she says, stretching her legs out on the bench. "Long hours standing up and all, no use standing when you don\'t have to."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMari_1_1(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"Good point," you reply, looking down at your tits, nipples hard in the cold air of the studio.');
      scene.text('"I\'m gonna to sit down if you don\'t mind," she says, stretching her legs out on the bench. "Long hours standing up and all, no use standing when you don\'t have to! By the way, did you just come from a topless shoot or something?"');
      scene.text('She looks pointedly at the panties covering your hips.');
      scene.text('"Uhh… well, uhh… The truth is that I\'m… a bit too shy to be walking around the studio naked. I begged the managers to let me keep my panties on for a little while, just to get used to the idea."');
      scene.text('"Oh! That was nice of them. Surprising though. Some girls <i>do</i> have trouble adjusting to the dress code around here but if the managers catch them wearing something, they usually just make them take it off. But you\'ll get used to it eventually. We all do."');
      scene.actions([
        { label: '"Were you shy?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4b.jpg');
    scene.text('"Were you shy when you first started here too?"');
    scene.text('"Me? Not really," she says, crossing her legs. "I guess when they asked me to strip down during the initial audition I was a little nervous, but that was for a different reason."');
    scene.text('<i>Hmm? What does that mean?</i>');
    scene.text('"But other than that, I don\'t mind really. I\'ve always been pretty comfortable being naked." And indeed, as the two of you chat, Mari doesn\'t appear to be bothered in the slightest that her breasts are completely on display.');
    scene.actions([
      { label: 'How long have you been working here?', handler: (st: GameState) => {
    qspCall(st, 'model_mari', 'mari_1.1');
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.img('images/characters/city/models/mari/meeting/2a.jpg');
      scene.text('"Your uhh, nipples are showing," you say, glancing down at them straining against the mesh.');
      scene.text('"What?? They are???" Her eyes go wide with panic.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/2a.jpg');
    scene.text('"I\'m just kidding," she says, breaking into a goofy smile. "Yeah, I know they\'re showing. Kind of the point of working at a nude modelling agency. By the way," she says, sitting down on the bench behind her, glancing down at your body. "Are you on your way to a shoot or something?"');
    scene.text('"Huh? No? Why?" You look at yourself, following her gaze.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('"You\'re wearing underwear."');
      scene.text('"Uhh… well, uhh… The truth is that I\'m… a bit too shy to be walking around the studio naked. I begged the managers to let me keep my underwear on for a little while, just to get used to the idea."');
      scene.text('"Oh! That was nice of them. Surprising though. Sometimes when girls start here, they have trouble adjusting to the dress code and if the managers catch them wearing something they make them take it off. But don\'t worry about it too much. Everyone gets used to it sooner or later."');
    } else {
      scene.text('"You\'re wearing a bra."');
      scene.text('"Uhh… well, uhh… The truth is that I\'m… a bit too shy to be walking around the studio naked. I begged the managers to let me keep my underwear on for a little while, just to get used to the idea."');
      scene.text('"But took your panties off anyways?" She looks pointedly at your bare pussy.');
      scene.text('"I uhh… wasn\'t wearing any when I got here…" You can feel your cheeks burning with embarrassment.');
      scene.text('"Oh, okay," she says, holding back a smile but not making any more comments on the matter. "That was nice of them to let you keep something on though. Pretty surprising actually. Sometimes when girls start here, they have trouble adjusting to the dress code and if the managers catch them wearing something they make them take it off. But don\'t worry about it too much. Everyone gets used to it sooner or later."');
    }
    scene.actions([
      { label: '"Were you shy?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4b.jpg');
    scene.text('"Were you shy when you first started here too?"');
    scene.text('"Me? Not really," she says, crossing her legs. "I guess when they asked me to strip down during the initial audition I was a little nervous, but that was for a different reason."');
    scene.text('<i>Hmm? What does that mean?</i>');
    scene.text('"But other than that, I don\'t mind really. I\'ve always been pretty comfortable being naked." And indeed, as the two of you chat, Mari doesn\'t appear to be bothered in the slightest that her breasts are completely on display.');
    scene.actions([
      { label: 'How long have you been working here?', handler: (st: GameState) => {
    qspCall(st, 'model_mari', 'mari_1.1');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Don\'t say anything', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4a.jpg');
    scene.text('You decide not to say anything, she seems comfortable as is.');
    scene.text('"I\'m gonna to sit down if you don\'t mind," she says, stretching her legs out on the bench. "Long hours standing up and all, no use standing when you don\'t have to!"');
    scene.text('Mari doesn\'t appear to be bothered in the slightest that her breasts are completely on display while talking to you. She seems very comfortable with her body.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMari_1_1(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMari_1_1(s: GameState, scene: SceneBuilder): void {
  scene.text('"How long have you been a model?" you ask.');
  scene.text('"I\'ve been working for this agency for about a year. Ever since I moved to the city really."');
  scene.text('Something piques an interest in you as Mari mentions she\'s from out of town. "You\'re not from St. Petersburg?"');
  scene.text('"Nope, moved here from a place called Gadukino. You\'ve probably never heard of it. It\'s a small village outside the city. Too small to be honest, same boring ins and outs every day. I wanted more excitement in my life! More than a simple farm girl would ever have. So I moved here."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMari_1_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMari_1_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.actions([
      { label: '"You\'re from Gadukino?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4a.jpg');
    scene.text('"You\'re from Gadukino?" you exclaim. "My grandparents live in Gadukino! I\'m from Pavlovsk right down the road!"');
    scene.text('Her face breaks out into a smile as you say that.');
    scene.text('"Well fancy that! Maybe we\'re long lost cousins or something!"');
    scene.actions([
      { label: 'Talk about Gadukino', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/1.jpg');
    scene.text('You spend the next few minutes talking about your home towns until a photographer comes up and says, "Alright Mari, it\'s time to start."');
    scene.text('"Okay Vasin."');
    // TODO-QSP: dynamic text: She hurriedly gets up and starts double checking her clothing and hair before gi...
    scene.text(`She hurriedly gets up and starts double checking her clothing and hair before giving you a quick wave and smile, whispering to you, "It was nice to meet you ${((st as any).model ?? 0)?.['firstname'] ?? ''}! I hope we'll get to talk more later!"`);
    scene.text('You wave your farewells back and get off the set.');
    ((st as any).mari = (st as any).mari ?? {})['status'] = 2;
    scene.actions([
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/5.jpg');
    scene.text('You stick around for a while watching Mari as the photographer gives her instructions and she poses accordingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/6.jpg');
    scene.text('You watch her drop her skirt on the photographer\'s command, revealing her lack of underwear and a neat triangle of pubic hair.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/7.jpg');
    scene.text('You watch her pull off her top next with a smile and a laugh and you realize that she\'s genuinely happy right now.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/8.jpg');
    scene.text('She seems to really love being a model.');
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
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask for modelling advice', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4b.jpg');
    scene.text('You feel Mari being honest and open so you decide to ask her, "Do you have any advice for a new model like me?');
    scene.text('Mari strokes her chin with her fingers and thinks for moments.');
    scene.text('"Just enjoy yourself!" she smiles at you. "We get to live in this great city and experience life like few people get to. Sure, the money is good and every day is full of excitement, but that\'s not what\'s important. I\'ve found that being grateful for what you have and enjoying what you do is the best way to live and it\'ll help you in your work. So keep a positive attitude and you\'ll be all good."');
    scene.actions([
      { label: '"Thanks Mari, that helps a lot."', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/1.jpg');
    // TODO-QSP: dynamic text: You barely get to thank her for the advice before she''s suddenly being called u...
    scene.text(`You barely get to thank her for the advice before she's suddenly being called up to get ready. She hurriedly gets up and starts double checking her clothing and hair before giving you a quick smile and whispering, "It was nice meeting you ${((st as any).model ?? 0)?.['firstname'] ?? ''}! I hope we can talk more later!"`);
    ((st as any).mari = (st as any).mari ?? {})['status'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Watch her work', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/5.jpg');
    scene.text('You stick around for a while watching Mari as the photographer gives her instructions and she poses accordingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/6.jpg');
    scene.text('At the photographer\'s command, she drops her skirt, revealing her lack of underwear and a neat triangle of pubic hair.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/7.jpg');
    scene.text('She pulls off her top next with a smile and a laugh and you realize that she\'s genuinely happy right now.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/8.jpg');
    scene.text('Mari really seems to love being a model…');
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
  } },
  ]);
  scene.build();
}

function enterMari_2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariAge(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/characters/city/models/mari/talking/reading1.jpg');
  scene.text('On your way to a shoot, you see Mari on a break, sitting in the chair of an unused set. At least you think she\'s on break because she\'s reading a book. But you\'re not totally sure since she\'s also completely naked.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Hey Mari! What\'re you doing here? Aren\'t you on break?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    // TODO-QSP: dynamic text: "Oh hi, <<$model[''nickname'']>>," she says as she hears your voice and looks up...
    scene.text(`"Oh hi, ${((st as any).model ?? 0)?.['nickname'] ?? ''}," she says as she hears your voice and looks up. "I am! But it's boring to spend it the break rooms. I spend most of my breaks lounging around on the sets. No one's using them and it's just more fun that way. Besides, this chair is really comfy!" she says with a laugh. You can't help but smile and laugh with her. She's just so cheerful.`);
    scene.text('As you continue to look at her, you also notice how relaxed she is. Other models and staff continue to mill about the studio and despite her nudity, she sits there reading as normally as if she were in a park on a sunny day.');
    scene.actions([
      { label: 'You\'re not bothered about nudity are you?', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"You really don\'t mind being naked, do you?" you blurt out without thinking.');
    scene.text('"Hmm? What do you mean?" she asks looking up at you curiously.');
    scene.text('"Oh! Uhh," you stammer, trying to recover. "I just, well I guess just talking to you and stuff, I figured you\'d be more shy about all this. Being naked in the studio all the time, the shoots and all that.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    // TODO-QSP: dynamic text: "<<$model[''nickname'']>>," she says, giving you a look. "Come on."
    scene.text(`"${((st as any).model ?? 0)?.['nickname'] ?? ''}," she says, giving you a look. "Come on."`);
    scene.text('"Come on, what?"');
    scene.text('A slight smirk turns up on her lips. "What do you mean, \'what?\' You\'ve been working here for long enough, surely you\'ve noticed."');
    scene.actions([
      { label: 'Shrug', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('You shrug and say, "I haven\'t the faintest idea what you\'re talking about Mari."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('She stands up and laughs again. "Everybody\'s naked!" she giggles. Once more, you can\'t help but join in with her infectious laughter.');
    scene.text('"Alright, alright. You got me. But you\'re really not embarrassed at all?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading18.jpg');
    scene.text('"Not really," she shrugs. "Is it really that surprising to you?"');
    scene.text('"Yeah, why not? Country girl, moved to the city, taken advantage of by old men who want to see her naked…"');
    scene.text('"That last one didn\'t happen, I wanted to work here!"');
    scene.text('"Mari, please. There\'s a \'no-dress code\' policy here. Of <i>course</i> it\'s for pervy old men."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"Haha! Okay, you\'re right on that one. But honestly, I kind of like it."');
    scene.text('"You <i>like</i> the no clothing rule??"');
    scene.text('"I mean, there is a certain freedom being naked," she says, seeing the look of confusion on your face. "but that\'s not what I mean. A lot of the girls here were\'t comfortable with it when they started, but after a few weeks, everyone gets used to it. And after a while, they stop thinking about it completely. We can stand around, chit-chat with each other, hang out in our birthday suits and we all act like it\'s nothing. Just another day at work. It\'s… it\'s like our uniform!" she says, sending both of you into giggle fits.');
    scene.text('"Well, they could always give us a real uniform," you say. "I think that would accomplish the same effect and not leave us poor girls shivering all the time."');
    scene.text('"But you get what I mean, don\'t you? In a weird way, I think it brings us closer together."');
    scene.text('You nod along with her. "It\'s kind of like, some unspoken thing isn\'t it? You can\'t put your finger on it, but there\'s something special about it, in this place."');
    scene.text('Mari smiles at you. "Yeah. It\'s exactly like that. I guess that\'s why it doesn\'t bother me."');
    scene.actions([
      { label: '"I gotta go"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"Well, I should probably get going. I\'ll talk to you later Mari!"');
    scene.text('"Hang on! Before you go," she says, pausing to put her book down.');
    scene.text('"What is it?"');
    scene.text('Before you know it, she throws her arms around you and wraps you in a big warm hug. You feel her soft breasts smushing into yours, the smoothness of her body rubbing against you, her nipples two gentle points of pressure on your skin, your own nipples pressing back into her… It\'s all strangely calming. Mari\'s right. It is relaxing to be naked together.');
    // TODO-QSP: dynamic text: "If you ever need help with anything, you can always come talk to me <<$model[''...
    scene.text(`"If you ever need help with anything, you can always come talk to me ${((st as any).model ?? 0)?.['nickname'] ?? ''}." She pulls back and smiles wide at you. "Girls have to stick together, you know!"`);
    scene.text('"Thanks Mari, I really appreciate it."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading13.jpg');
    scene.text('You walk away and she goes back to reading her book. She\'s still smiling, though you\'re not sure if it\'s from the conversation or if it\'s because she just read something funny.');
    ((st as any).mari = (st as any).mari ?? {})['status'] = 3;
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

function enterMari_3(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariAge(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mari ?? 0)?.['used_firstname'] === '') {
    ((s as any).mari = (s as any).mari ?? {})['used_firstname'] = ((s as any).model ?? 0)?.['firstname'];
    ((s as any).mari = (s as any).mari ?? {})['used_nickname'] = ((s as any).model ?? 0)?.['nickname'];
  }
  ((s as any).mari = (s as any).mari ?? {})['status'] = (Math.floor(Math.random() * 2) + 3);
  scene.img('images/characters/city/models/mari/talking/reading1.jpg');
  scene.text('Looking for Mari, find her on break in her favorite set chair reading that same book as always.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: '"Hi Mari!"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('She looks up and smiles as she hears your greeting.');
    // TODO-QSP: dynamic text: "Hi <<$mari[''used_nickname'']>>! What''s up? Did you want to talk?
    scene.text(`"Hi ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}! What's up? Did you want to talk?`);
    scene.actions([
      { label: 'Just passing by', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading13.jpg');
    scene.text('"Nah, just wanted to say hi. See you around Mari!"');
    scene.text('"Okay! See you later!" she says as she goes back to reading her book.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Yeah!', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    // TODO-QSP: dynamic text: "What''s up <<$mari[''used_nickname'']>>?"
    scene.text(`"What's up ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMari_4(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariAge(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).mari = (s as any).mari ?? {})['busy'] = (Math.floor(Math.random() * 3) + 1);
  ((s as any).mari = (s as any).mari ?? {})['status'] = (Math.floor(Math.random() * 2) + 3);
  ((s as any).mari = (s as any).mari ?? {})['busy_cooldown'] = ((s as any).hour ?? 0) + 2;
  ((s as any).mari = (s as any).mari ?? {})['busy_cooldown_day'] = ((s as any).daystart ?? 0);
  if (((s as any).mari ?? 0)?.['busy'] === 1) {
    scene.img('images/characters/city/models/mari/talking/busy.jpg');
    scene.text('You\'re looking for Mari when you hear her name called out from a set.');
    scene.text('Peeking from the shadows, you see her holding up her hair with a smirk on her face while the camera flashes in front of her. The more you look at her, the more you feel like the smile is unconscious and just a byproduct of her genuinely enjoying her job.');
    scene.text('She\'s clearly busy right now. You can find her again later.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } else {
    if (((s as any).mari ?? 0)?.['busy'] === 2) {
      scene.img('images/characters/city/models/mari/talking/busy2.jpg');
      scene.text('Searching for Mari, you peer into the sets, hoping to find her relaxing in one of them. You peek into another set and find yourself simultaneously gratified and disappointed. Standing fully nude amidst hay and wooden props is Mari, as well as a full crew in the middle of a shoot.');
      scene.text('<i>*click* *click*</i>');
      scene.text('"Okay, just hold that pose Mari… Yeah, just like that. Try to keep on your toes and keep your back straight."');
      scene.text('<i>*click* *click*</i>');
      scene.text('She\'s clearly being quite attentive and trying her best. But as you look closer you see her calves shaking, struggling to keep her on her toes.');
      if (((s as any).mari ?? 0)?.['farm_shoot'] === 0) {
        ((s as any).mari = (s as any).mari ?? {})['farm_shoot'] = 1;
        scene.text('<i>Huh, I didn\'t know we had a dedicated set just for shooting farm stuff. I thought they went out to Gadukino every time. Oh well, looks Mari\'s busy. I guess I\'ll have to find her some other time.</i> Eyeing her quivering toes one last time you think, <i>Hang in there girl!</i>');
        scene.actions([
          { label: 'Leave', goto: ['foto', 'studio'] },
        ]);
      } else {
        if (((s as any).mari ?? 0)?.['farm_shoot'] === 1) {
          scene.text('<i>Stuck playing the farm girl again, huh Mari? They really are slave drivers for this kind of thing aren\'t they? I guess I\'ll find you some other time.</i>');
          scene.actions([
            { label: 'Leave', goto: ['foto', 'studio'] },
          ]);
        }
      }
    } else {
      if (((s as any).mari ?? 0)?.['busy'] === 3) {
        scene.img('images/characters/city/models/mari/talking/busy3.jpg');
        scene.text('You\'re looking for Mari when you find her in the middle of a shoot.');
        if (((s as any).mari ?? 0)?.['cloth_shoot'] === 0) {
          ((s as any).mari = (s as any).mari ?? {})['cloth_shoot'] = 1;
          scene.text('In more clothes than you\'ve ever seen her wearing before (though admittedly, you\'ve almost only ever seen her nude), she holds up her hair with an intense expression on her face and moving very intently. When the photographer gives commands she enacts them flawlessly. She seems to be in an incredible state of focus.');
          scene.text('<i>I guess even a cheerful girl like Mari gets serious sometimes… and someone as comfortable being naked does clothed shoots… I shouldn\'t be a distraction to her. I\'ll come find her again later.</i>');
          scene.actions([
            { label: 'Leave', goto: ['foto', 'studio'] },
          ]);
        } else {
          if (((s as any).mari ?? 0)?.['cloth_shoot'] === 1) {
            scene.text('She looks focused and intent again.');
            scene.text('<i>Ahh, she\'s being serious. I shouldn\'t bother her right now. I\'ll find her again later,</i> you think to yourself before slipping away.');
            scene.actions([
              { label: 'Leave', goto: ['foto', 'studio'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariChat(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariAge(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariSmallTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariBookChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFoodChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFitnessChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading13.jpg');
    scene.text('"I\'ve got to get going Mari, I\'ll see you later!"');
    // TODO-QSP: dynamic text: "Okay, bye <<$mari[''used_name'']>>!"
    scene.text(`"Okay, bye ${((st as any).mari ?? 0)?.['used_name'] ?? ''}!"`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about modelling', goto: ['model_mari', 'mari_modelling_chat'] },
  ]);
  scene.build();
}

function enterMariSmallTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Discuss random topics', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['convo'] = (Math.floor(Math.random() * 7) + 1);
    if (((st as any).mari ?? 0)?.['convo'] === 7  &&  ((st as any).mari ?? 0)?.['sex'] < 1) {
      ((st as any).mari = (st as any).mari ?? {})['convo'] = (Math.floor(Math.random() * 5) + 1);
    } else {
      if (((st as any).mari ?? 0)?.['convo'] === 6  &&  ((st as any).mari ?? 0)?.['model_ask'] < 1) {
        ((st as any).mari = (st as any).mari ?? {})['convo'] = (Math.floor(Math.random() * 5) + 1);
      }
    }
    if (((st as any).mari ?? 0)?.['convo'] === 1) {
      scene.img('images/characters/city/models/mari/talking/reading2.jpg');
      scene.text('"Hey Mari, how come you don\'t shave your bush?"');
      scene.text('"The photographers actually ask me not to shave. They say it helps sell my \'farm girl\' look," she says, causing you both to giggle a little. "Besides, I tried shaving once when I still lived in Gadukino and I hated that prickly feeling when it would start to grow back as stubble. It\'s too much of a hassle to keep it smooth down there so since then I just decided to keep it trimmed."');
      if (((st as any).pubestyle ?? 0) >= 2) {
        scene.text('"I know what you mean! Keeping it clean-shaven is too much work. What\'s wrong with having a bit of bush?"');
        scene.text('"Right???"');
        scene.text('The two of you laugh together over your agreement in pubic hair fashion.');
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).mari ?? 0)?.['convo'] === 2) {
        scene.img('images/characters/city/models/mari/talking/reading7.jpg');
        scene.text('"Seen any good movies lately Mari?"');
        scene.text('"No, not really. I don\'t go to the movies much. I prefer reading. Besides, half the time there\'s someone getting head in the back row. It\'s really distracting!"');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).mari ?? 0)?.['convo'] === 3) {
          ((st as any).mari = (st as any).mari ?? {})['nudity'] = 1;
          scene.img('images/characters/city/models/mari/talking/reading15.jpg');
          scene.text('"So, have you always been this comfortable with nudity?"');
          scene.text('"Kind of? I guess? I\'ve never felt very shy about my body. I\'d go skinny dipping with all the other kids and be happy to jump in with them. I\'d even say hi to the fishermen sometimes."');
          scene.text('"You\'d really do that? Mari, you were destined to be a nude model!" you laugh. "Would you even read nude like this in the village?"');
          scene.text('She thinks for a moment before answering. "Probably not back then, but I will admit that I spend a lot more time in my apartment without clothes now. It\'s kind of comfortable to relax like this isn\'t it? I think the \'office culture\' here at the studio has had an effect on me," she says laughing.');
          scene.actions([
            { label: 'Laugh with her', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"Don\'t get me wrong, it\'s not like I would hang around my parents house like this or anything like that, but since coming here, I think I\'ve learned how much I enjoy being naked."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if (((st as any).mari ?? 0)?.['convo'] === 4) {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFamilyChat(s, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            if (((st as any).mari ?? 0)?.['convo'] === 5) {
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariUnderwearChat(s, scene); (st as any).locArgs = __savedLocArgs; }
            } else {
              if (((st as any).mari ?? 0)?.['convo'] === 6  &&  ((st as any).mari ?? 0)?.['model_ask'] === 1) {
                { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariModelAsk(s, scene); (st as any).locArgs = __savedLocArgs; }
              } else {
                if (((st as any).mari ?? 0)?.['convo'] === 7) {
                  scene.img('images/characters/city/models/mari/talking/reading5.jpg');
                  scene.text('"Sooooo Mariiiii! Any luck finding a boyfriend yet?"');
                  // TODO-QSP: dynamic text: "<<$mari[''used_nickname'']>>!"
                  scene.text(`"${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}!"`);
                  scene.text('"Hey girl! I\'m just concerned for you! I want you to get that opportunity for that special someone to pop your cherry while we\'re both still young! It\'s like you say, us girls have to stick together don\'t we?"');
                  scene.text('She smiles back at you. "Yeah. We do."');
                  { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterMariFamilyChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/models/mari/talking/reading3.jpg');
  scene.text('"Any siblings Mari?"');
  scene.text('"No, none for me. I\'m an only child. What about you?"');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).npc_rel ?? 0)?.['A34'] < 20) {
      scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my stupid little brother. He\'s such a pain in the ass!"');
      scene.text('Mari sits up a bit. "Really? What\'s so bad about him?"');
      scene.text('"Ugh! Everything! He\'s an annoying little brat! He just spends all his time playing football with his friends and if I\'m around he\'ll scream at me until I go away. He\'s always asking me to do his homework for him and worst of all he\'s always trying to spy on me in the shower!"');
      scene.text('"What? You don\'t have a latch or something to stop him?"');
      scene.text('You blush. "Uh, yeah I do, but I, uh, forget to lock it sometimes…"');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A34'] < 40) {
        scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my annoying little brother."');
        scene.text('Mari sits up a bit. "Really? What\'s so irritating about him?"');
        scene.text('"Oh, nothing much. Just sibling squabbles. He\'s not all that bad, just gets on my nerves sometimes."');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A34'] < 60) {
          scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my little brother."');
          scene.text('"That sounds nice. What are they like?"');
          scene.text('"Well to be honest, my sister can be a bit of a slut, but she\'s still the best one I could ask for. My brother loves playing football so sometimes I join him and his friends at the field."');
          scene.text('"Maybe I\'ll get to meet them one day!"');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A34'] < 80) {
            scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my silly little brother."');
            scene.text('Mari smiles at you. "That\'s sounds nice."');
            scene.text('You think of your siblings and smile. "Yeah. It is."');
          } else {
            if (((s as any).sisterLesb ?? 0) >= 6) {
              scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my adorable little brother. I love them both so much!"');
              scene.text('Mari smiles at you. "You sound close."');
              scene.text('Your mind wanders back to your sister and how you sometimes wake her up in the middle of the night to fool around with her. "You could say that…"');
            } else {
              if (((s as any).brotherQW ?? 0)?.['Sex'] < 1) {
                scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my adorable little brother. I love them both so much!"');
                scene.text('Mari smiles at you. "You sound close."');
                scene.text('You think of your siblings and smile, "Yeah. We are."');
              } else {
                if (((s as any).sisterLesb ?? 0) >= 6  &&  ((s as any).brotherQW ?? 0)?.['Sex'] < 7) {
                  scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my adorable little brother. I love them both so much!"');
                  scene.text('Mari smiles at you. "You sound close."');
                  scene.text('Your mind wanders back to your siblings and how you\'ve fooled around with both of them separately.');
                  scene.text('"You could say that…"');
                } else {
                  if (((s as any).sisterLesb ?? 0) >= 6  &&  ((s as any).brotherQW ?? 0)?.['Sex'] >= 7) {
                    scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my adorable little brother. I love them both so much!"');
                    scene.text('Mari smiles at you. "You sound close."');
                    scene.text('Your mind wanders back to your siblings and how you\'ve fooled around with your sister and even had full fledged intercourse with your brother. Your thoughts wander to the memory of the last time his cock was inside you and it causes you to blush.');
                    scene.text('"You could say that…"');
                  } else {
                    scene.text('"Yeah, I\'ve got two. My sister who\'s about the same age as you are and my silly little brother."');
                    scene.text('Mari smiles at you. "That\'s sounds nice."');
                    scene.text('You think of your siblings and smile. "Yeah. It is."');
                  }
                }
              }
            }
          }
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('"No, there\'s just me."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariUnderwearChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/models/mari/talking/reading3.jpg');
  // TODO-QSP: dynamic text: "Hey <<$mari[''used_nickname'']>>, where do you buy your underwear? I never got ...
  scene.text(`"Hey ${((s as any).mari ?? 0)?.['used_nickname'] ?? ''}, where do you buy your underwear? I never got out of the habit of buying cheap stuff from G&M from when I was barely scraping by. But I guess since this modelling thing has worked out for me, I should consider getting some nicer pairs. Any suggestions?"`);
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
    scene.actions([
      { label: 'I don\'t wear underwear', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Actually…" you start. "I don\'t wear underwear."');
    scene.text('"What?! Seriously?! Never?!"');
    scene.text('"I don\'t like how it feels. At some point it became more uncomfortable to wear it than to not wear it."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    // TODO-QSP: dynamic text: "<<$mari[''used_nickname'']>>! Isn''t that kind of slutty?"
    scene.text(`"${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}! Isn't that kind of slutty?"`);
    if (((st as any).mari ?? 0)?.['nudity'] === 1) {
      scene.text('"This coming from the girl who strips down whenever she gets home?" you scoff.');
      scene.text('"Yeah! Inside my home!" Mari laughs back. "Not outside! I\'m comfortable being naked, I\'m not an exhibitionist!"');
    } else {
      scene.text('"Mari! Are you slut shaming me?" you ask her in mock accusation.');
      scene.text('"No! No! Well… Maybe a <i>little,</i>" Mari replies in a teasing voice.');
      scene.text('"Mari!"');
      scene.text('"It <i>is</i> kind of slutty!"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I buy from G&M too', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Actually, I buy mine from G&M too," you admit.');
    scene.text('"Seriously?" she laughs.');
    scene.actions([
      { label: 'They\'re cheap', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"You\'re right," you shrug. "They\'re cheap and affordable. I don\'t have the money to spend on nicer stuff right now."');
    scene.text('"That\'s fair," Mari smiles. "It\'s not like there\'s anything wrong with buying from G&M I guess."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I like them', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"I just like them," you shrug. "They\'re cheap and comfortable and have simple designs that I like."');
    scene.text('"They are pretty classic," Mari agrees with you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'I buy from Pussy Kats', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"I get most of my underwear from Pussy Kats," you tell her.');
    scene.text('"Oh yeah? What do you like about them?"');
    scene.actions([
      { label: 'They\'re comfy', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"They\'re really comfy!" you answer. "Nice soft cotton, elastic that doesn\'t rub or itch. I just feel better when I\'m wearing them."');
    scene.text('"Really? Maybe I should check it out after work," Mari smiles.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'They\'re cute', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"They\'re really cute!" you answer. "Cute colors, cute designs, cute cuts-"');
    scene.text('"I get it! They\'re cute!" Mari laughs. "Maybe I\'ll check it out after work."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'I buy from Lusso Intimo', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"I get most of my underwear from Lusso Intimo," you tell her.');
    scene.text('"Oh yeah? I\'ve never shopped there before. What kind of stuff do they have?"');
    scene.text('"Super stylish and fancy. Very lacy. I really like it."');
    scene.text('"Oh. I\'m not really into lace. A bit uncomfortable for me. Maybe I\'ll try something else. Thanks for the suggestion though!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I mostly wear sports underwear', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"I mostly buy sports underwear actually," you tell her.');
    scene.text('"Really? How come?"');
    scene.actions([
      { label: 'They\'re comfy', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"They\'re actually super comfortable!" you answer.');
    scene.text('"Whaa-? Really?"');
    scene.text('"Yeah! Made of good material and form fitting. Honestly, sometimes I forget I\'m even wearing them!"');
    scene.text('"Well that sounds pretty cool. Maybe I\'ll check it out after work," she says thoughtfully.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Because I exercise?', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Uhh… Cause I do a lot of exercise?" you answer with a sort of "no duh" expression.');
    scene.text('"Oh." Mari laughs. "Of course! Sorry, I thought you had some kind of special reason, but that\'s the most obvious answer isn\'t it?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMariModelAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/models/mari/talking/reading4.jpg');
  // TODO-QSP: dynamic text: "By the way <<$mari[''used_firstname'']>>, I just realized something," she says,...
  scene.text(`"By the way ${((s as any).mari ?? 0)?.['used_firstname'] ?? ''}, I just realized something," she says, giving you a suspicious look.`);
  scene.text('You look back at her quizzically.');
  scene.text('"I told you about how I got started as a model here and why, but it\'s not fair if only <i>I</i> share something like that. What about you? Why did you decide to become a model?"');
  if (((s as any).pcs_inhib ?? 0) < 20  ||  ((s as any).studio_inhib ?? 0) > 0) {
    scene.actions([
      { label: 'To build confidence', handler: (st: GameState) => {
    if (((st as any).studio_inhib ?? 0) === 3  &&  ((st as any).pcs_inhib ?? 0) >= 60) {
      scene.img('images/characters/city/models/mari/talking/reading6.jpg');
      scene.text('"I first started here because I wanted to build up my confidence," you explain. "I was pretty shy about my body when I first started working here and I remember I was <i>not</i> comfortable with the \'no clothes\' policy. But now… I don\'t even think about it anymore. I just… strip down and get to work."');
      scene.text('"Wow! That\'s amazing! I\'m so happy for you!" Mari gets up and gives you a warm hug, pressing her naked body tight against you. "It\'s important to be comfortable in your own skin. I\'m glad you started working here."');
      scene.text('"Yeah, me too," you smile back at her.');
    } else {
      if (((st as any).studio_inhib ?? 0) === 3) {
        scene.img('images/characters/city/models/mari/talking/reading6.jpg');
        scene.text('"I first started here because I wanted to build up my confidence," you tell her. "I was pretty shy about my body when I first started working here and to be honest, I\'m still not totally comfortable being naked all the time. But it\'s really helped me to come out of my shell! I wasn\'t expecting that, but I won\'t complain about it anymore."');
        // TODO-QSP: dynamic text: "Wow! That''s great <<$mari[''used_nickname'']>>! And don''t worry. You''ll get ...
        scene.text(`"Wow! That's great ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}! And don't worry. You'll get completely used to the nudity soon. Everyone who works here for more than a couple months does."`);
        scene.text('"As comfortable as you are?" you tease.');
        scene.text('"Well, not even <i>I\'m</i> comfortable with how cold the A/C gets in here!" Mari replies, throwing both of you into a fit of laughter.');
      } else {
        if (((st as any).studio_inhib ?? 0) === 2) {
          scene.img('images/characters/city/models/mari/talking/reading3.jpg');
          scene.text('"I\'m trying to build up my confidence," you admit. "I\'m kind of… shy about my body. I thought that doing some modelling might help. But I didn\'t expect anything like this \'dress code\' when I first signed up! This is miserable!"');
          scene.text('"But you\'re still doing it anyways," Mari points out. "That\'s super brave! A lot of girls who start out here feel the same way you do now. Some end up quitting over it. But the ones who stay all end up <i>way</i> more confident in themselves. Trust me, if you keep working here you\'ll definitely get what you came here for!"');
          scene.text('"Thanks Mari," you smile, comforted by what she said.');
        } else {
          scene.img('images/characters/city/models/mari/talking/reading3.jpg');
          scene.text('"I was hoping to build up my confidence," you admit hesitantly. "I\'m actually really shy about my body. Putting my clothes in my locker puts me on edge and even just the idea of wearing certain kinds of clothes is too much for me. But everyone around me seems like they\'re having fun and I want to experience new things and I don\'t want to be held back by my own inhibitions."');
          // TODO-QSP: dynamic text: "Wow! It was really brave of you to pick a nude modelling studio to do that, but...
          scene.text(`"Wow! It was really brave of you to pick a nude modelling studio to do that, but I guess it gets the job done. Don't you worry ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}, keep coming here and you'll definitely start to see some changes in your life. I don't even wear clothes around the house anymore!"`);
          scene.text('You both laugh and you feel somewhat comforted by what she said.');
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    scene.actions([
      { label: 'Because it turns me on', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('"What? Why? Cause it turns me on!"');
    scene.text('"… you can\'t be serious," she says, giving you a look.');
    scene.actions([
      { label: 'I\'m totally serious', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Who says I\'m not being serious? Being a model is fucking hot! Knowing that all those men are out there looking at pictures of me, probably whacking it, fantasizing about sleeping with me, it just really turns my crank, know what I\'m saying?"');
    // TODO-QSP: dynamic text: Mari looks away, smiling but also blushing in embarrassment. "Oh my goodness <<$...
    scene.text(`Mari looks away, smiling but also blushing in embarrassment. "Oh my goodness ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}! I had no idea you were such a pervert!"`);
    scene.text('"Come on Mari, don\'t tell me you don\'t get off on this at least a little?"');
    scene.text('"No!" she laughs. "I\'m not judging you for it or anything, but that definitely wasn\'t the answer I was expecting."');
    scene.text('"Hey Mari, you think that your old boss is jerking off to pictures of you right now?"');
    scene.text('She blushes even harder going, "Oh no, I do NOT even want to consider that!"');
    scene.text('"Well maybe he\'s jerking off to pictures of me instead? Would you prefer that?" You continue to tease her for a minute, both of you relentlessly giggling before you run out of good ammo to keep it going.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'To make money to buy things', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"I just really wanted the extra cash so I could buy more stuff. Clothes, makeup, whatever. It\'s not like I really <i>need</i> to be doing this. I\'m just in it for the money."');
    scene.text('"Oh well, I suppose that\'s a fair a reason as any," she says. "I like being able to afford nice things too."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'To make money because I needed it', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"Oh, I just needed the money. Things to buy, bills to pay, you know."');
    scene.text('"Oh yeah, I definitely couldn\'t afford my apartment if I didn\'t work here. But it\'s not a bad job is it?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariBookChat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about her book', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading16.jpg');
    scene.text('"How come you\'re always reading the same book Mari?"');
    scene.text('"Oh this old thing? I don\'t know, it\'s just one of my favorite stories. I fell in love with it back when I still lived in Gadukino. It\'s about a girl who moves away from her home and experiences all kinds of stuff. Love, and adventure, and new things she never even dreamed existed… I guess it\'s comforting to me because I feel like the girl in this story. And I suppose it also reminds me a bit of home and how it\'s never far away…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading7.jpg');
    scene.text('She says her last sentence with a smile. No sadness. No regret. Just happy to be living her life the way she is and happy she had parents who let her strike out on her own at such a young age.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMariFoodChat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about food', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Hey Mari, do you know any good places to eat around here?"');
    scene.text('"Hmm… There\'s a place near by here that sells really great burgers! But the photographers specifically ask us not to eat there too often or we\'ll get fat and they\'ll fire us."');
    scene.text('You laugh about it together.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariFitnessChat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask how she stays in shape', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"How do you stay in such good shape Mari? I\'m struggling to keep this figure."');
    scene.text('"I know right? It\'s so hard!" The nice thing though is that there\'s a fitness center nearby so I can always work out there on my way home from work. Good prices <i>and</i> conveniently placed! There\'s a few perverts there though, so watch out!"');
    scene.text('"Haha, okay Mari!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariModellingChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/models/mari/talking/reading2.jpg');
  scene.text('"You want to talk about modelling? What about it?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariModelAdvice(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariOrigin(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mari ?? 0)?.['name_chat'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariNametalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariParents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFakepassportTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFirstNude(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'model_mari', 'mari_chat');
  } },
  ]);
  scene.build();
}

function enterMariModelAdvice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mari ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['model_exp'] = ((st as any).daystart ?? 0);
    qspCall(st, 'exp_gain', 'mdlng', 1);
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Hmm… Basically what I told you before: Just be grateful for what you have and be happy, and it\'ll be alright. Keep a positive attitude and try not to take anything the photographers say personally. Remember, they\'re trying to help themselves as much as they\'re trying to help you."');
    scene.text('You thank her for her advice.');
    scene.text('"Oh! And one more thing too."');
    scene.actions([
      { label: '"What\'s that?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    if (((st as any).pcs_pubes ?? 0) < 11) {
      scene.text('She stands up and gives you a tight hug. Once again you feel her soft breasts molding into yours and her hot skin rubbing against you. Her hug is so tight that your hips are being pressed together and you can feel her bush between your legs.');
    } else {
      scene.text('She stands up and gives you a tight hug. Once again you feel her soft breasts molding into yours and her hot skin rubbing against you. Her hug is so tight that your hips are being pressed together and you can feel her bush brushing against your own.');
    }
    scene.text('Pulling back with a smile she says, "Always make friends with your co-workers. Especially girls. We have to stick together!"');
    scene.text('You can\'t help but smile back, saying, "We sure do Mari!"');
    scene.actions([
      { label: 'Continue', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariOrigin(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her how she became a model', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['model_ask'] = 1;
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"How did you become a model here Mari? Did you get hired here right after moving from Gadukino?"');
    scene.text('"Well, no, not immediately. I tried a few other jobs out first. I tried being a clerk at Pussy Kats in the mall before I found this job."');
    scene.text('"Jobs weren\'t exciting enough for you?"');
    scene.text('"Oh no, it\'s not that. If I could do anything for work and still get paid enough to live comfortably, I don\'t think I\'d mind working at a clothing store."');
    scene.text('You frown.');
    scene.actions([
      { label: '"Why\'d you quit then?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('She gives you a look and says, "Too many perverts."');
    scene.actions([
      { label: '"We\'re nude models!"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Mari!" you cry out with a laugh. "You\'re a nude model!"');
    scene.text('Laughing with you she looks down and says, "I know! I know! But all the employees and the customers were constantly trying to get into my pants and I once walked in on the manager jerking off into a condom! At least as a model I can assume people are getting off by to pictures of me instead of trying to reach up my skirt. Then they\'re happy and I don\'t have to see it!"');
    scene.text('After thinking about it a bit, you can\'t help but be inclined to agree.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading7.jpg');
    scene.text('"So then how <i>did</i> you get hired here?"');
    scene.text('Mari looks down at her book smiling in a way that looks like she\'s slightly embarrassed. "I just… kind of… walked in… I saw some of the albums they have by the entrance, thought, \'Hey, maybe I can do this?\' and asked if I could get hired here."');
    scene.text('"And they hired you just like that?" you ask.');
    scene.text('"Well, I mean I had to do the same things you did. I asked, they asked me to strip down, I did what they said, you know how it was. There were a couple extra hoops I had to jump through too though. Don\'t tell anyone but I was 17 at the time so I had to buy a fake passport just to get started. But as you can see, it was well worth it!"');
    ((st as any).mari = (st as any).mari ?? {})['fakepassport'] = 1;
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
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

function enterMariNametalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about her real name', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['name_chat'] = 1;
    scene.img('images/characters/city/models/mari/talking/reading7.jpg');
    scene.text('"Hey Mari, I was wondering. You know how some models here use fake names?"');
    scene.text('"Yeah?"');
    scene.text('"Is Mari your real name?" you ask');
    scene.text('"Well, yes and no," she smiles shyly.');
    scene.actions([
      { label: 'What\'s that supposed to mean?', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/face.jpg');
    scene.text('"Huh? What does <i>that</i> mean?" you asked.');
    scene.text('"Well, my real name is actually Mariya," she says. "When they asked me if I wanted to use another name, I was kind of surprised. I just kind of said Mari and they went with it. Next thing you know, it\'s in the database."');
    scene.actions([
      { label: 'Mari suits you', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"It suits you," you smile. "\'Mari\', I mean."');
    scene.text('"Yeah? I think so too," she smiles back at you. "Ever since I started this job, I think of myself more as \'Mari\'. I introduce myself that way to everyone now. What about you?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'You look like a Mariya', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Now that you mention it, you do look like a \'Mariya\'," you remark.');
    scene.text('"What\'s <i>that</i> supposed to mean?" she says, blushing. "Only my family members still call me Mariya. Even Mitka calls me Mari when he sees me. But enough about me. What about you?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMariNametalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What <i>about</i> me?', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/face.jpg');
    scene.text('"What <i>about</i> me?" You quizzically tilt your head at Mari.');
    // TODO-QSP: dynamic text: "Your name!" she says, laughing. "Is <<$model[''firstname'']>> your real name?"
    scene.text(`"Your name!" she says, laughing. "Is ${((st as any).model ?? 0)?.['firstname'] ?? ''} your real name?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'My name?', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/face.jpg');
    scene.text('"<i>My</i> name?" you say, taken aback.');
    // TODO-QSP: dynamic text: "Yes! Your name!" she says, laughing. "Is <<$model[''firstname'']>> your real na...
    scene.text(`"Yes! Your name!" she says, laughing. "Is ${((st as any).model ?? 0)?.['firstname'] ?? ''} your real name?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariNametalk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_firstname ?? 0)) {
    scene.actions([
      { label: 'It is actually', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"It is, actually," you nod.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariSameNametalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)) {
      scene.actions([
        { label: 'It\'s my nickname', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"It is, actually," you nod. "Well, sort of. It\'s a nickname for me, like you."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariSameNametalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'No, it\'s ' + String(((s as any).pcs_firstname ?? '') ?? ''), handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    if (((st as any).pcs_nickname ?? 0) !== ((st as any).pcs_firstname ?? 0)) {
      // TODO-QSP: dynamic text: "It''s not," you shake your head. "My real name is <<$pcs_firstname>>. My friend...
      scene.text(`"It's not," you shake your head. "My real name is ${((st as any).pcs_firstname ?? '')}. My friends call me ${((st as any).pcs_nickname ?? '')}."`);
    } else {
      // TODO-QSP: dynamic text: "It''s not," you shake your head. "My real name is <<$pcs_firstname>>."
      scene.text(`"It's not," you shake your head. "My real name is ${((st as any).pcs_firstname ?? '')}."`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk5(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'d rather not say', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('"I\'d… rather not say," you say hesitantly.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'That\'s a secret', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('"That\'s a secret," you say, giving her a smug smirk and a wink.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariNametalk4(s: GameState, scene: SceneBuilder): void {
  scene.text('"Come now," Mari says, giving you a look. "That\'s not really fair, is it? I told you mine. Well, let you know it\'s real anyways. Please? Won\'t you tell me?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Insist no', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading10.jpg');
    scene.text('"No Mari," you shake your head. "I don\'t want people knowing my real name. It\'s important that it stays that way."');
    scene.text('"You\'re right," Mari says, looking down and seeming ashamed. "I\'m being insensitive. It\'s not my business. I\'m sorry."');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    { label: 'Give in and tell her', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('You feel bad leaving her in the dark. She\'s right. It\'s only fair after all.');
    if (((st as any).model ?? 0)?.['firstname'] === ((st as any).pcs_firstname ?? 0)) {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>> is my real name," you admit.
      scene.text(`"${((st as any).pcs_firstname ?? '')} is my real name," you admit.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariSameNametalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).model ?? 0)?.['firstname'] === ((st as any).pcs_nickname ?? 0)) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>> is my real name," you admit. "Sort of. It''s my nickname."
        scene.text(`"${((st as any).pcs_nickname ?? '')} is my real name," you admit. "Sort of. It's my nickname."`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariSameNametalk(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).pcs_nickname ?? 0) !== ((st as any).pcs_firstname ?? 0)) {
          // TODO-QSP: dynamic text: "My real name is <<$pcs_firstname>>," you admit. "My friends call me <<$pcs_nick...
          scene.text(`"My real name is ${((st as any).pcs_firstname ?? '')}," you admit. "My friends call me ${((st as any).pcs_nickname ?? '')}."`);
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk5(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "My real name is <<$pcs_firstname>>," you admit.
          scene.text(`"My real name is ${((st as any).pcs_firstname ?? '')}," you admit.`);
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariNametalk5(s, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterMariNametalk5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" Mari says, smiling to herself as if seeing how your name fe...
  scene.text(`"${((s as any).pcs_nickname ?? '')}…" Mari says, smiling to herself as if seeing how your name feels in her mouth. "I like it. Do… do you mind if I call you that?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'d rather you not', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"Sorry," you say. "I\'d rather you not. I want to keep a distance between my real life and this job, you know?"');
    scene.text('"I get that," Mari replies understandingly. "Sorry for asking. I shouldn\'t have."');
    scene.text('"It\'s okay," you tell her. "But at least you know now."');
    scene.text('"Yeah…" Mari smiles back at you.');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    { label: 'I\'d like that', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['used_firstname'] = ((st as any).pcs_firstname ?? 0);
    ((st as any).mari = (st as any).mari ?? {})['used_nickname'] = ((st as any).pcs_nickname ?? 0);
    ((st as any).mari = (st as any).mari ?? {})['used_lastname'] = ((st as any).pcs_lastname ?? 0);
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"I think I\'d like that," you say and Mari practically beams back at you.');
    scene.text('"Really?"');
    scene.text('"Why do you look so surprised?" you laugh. "You asked."');
    // TODO-QSP: dynamic text: "No! It''s not that! I-" Mari stops, blushing. "I''m really grateful <<$mari[''u...
    scene.text(`"No! It's not that! I-" Mari stops, blushing. "I'm really grateful ${((st as any).mari ?? 0)?.['used_firstname'] ?? ''}`);
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMariSameNametalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"Really?" Mari perks up at that.');
  scene.text('"You seem surprised," you laugh.');
  if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_firstname ?? 0)) {
    scene.text('"Most of the other models use a proper fake name," she says. "I didn\'t expect anybody else to use their real name."');
  } else {
    scene.text('"Most of the other models use a proper fake name," she says. "I didn\'t expect anybody else to be like me and basically still use their real name."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
  ]);
  scene.build();
}

function enterMariParents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mari ?? 0)?.['parent_ask'] < 1  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.actions([
      { label: 'Ask about her parents', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['parent_ask'] = 1;
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"Hey, this is kind of personal but… I was wondering. What do your parents think of all this? I\'m mostly asking since we kind of come from similar backgrounds and you know, your parents are from Gadukino and I\'m from Pavlovsky and we\'re in sort of similar situations and… you know…"');
    scene.text('You trail off at the end of your sentence, unsure of how to end such a personal request.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading9.jpg');
    scene.text('Mari looks away for a moment, contemplating your question.');
    scene.text('"Well, to be honest I don\'t really know. I mean my parents know I\'ve got a job in the city but they don\'t know exactly what I do. I know they love me a lot and they\'re very happy for me for living my dream and maybe they\'d even be proud of me if I told them about it, but I don\'t know."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading10.jpg');
    if (((st as any).mari ?? 0)?.['age'] <= 19) {
      scene.text('"I\'m not sure how much they <i>need</i> to know about their teenage daughter having pictures taken of her in the nude and put in magazines and on the internet. So my advice is, it all depends on your parents. If they\'re cool with it, maybe you should tell them. Otherwise, I guess don\'t."');
    } else {
      scene.text('"I\'m not sure how much they <i>need</i> to know about their daughter having pictures taken of her in the nude and put in magazines and on the internet. So my advice is, it all depends on your parents. If they\'re cool with it, maybe you should tell them. Otherwise, I guess don\'t."');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading11.jpg');
    scene.text('She looks at you a bit concerned, hoping that she\'s been of some help to you.');
    scene.text('Unsure of what to do you hesitate in your response resulting in an awkward pause.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"Oh, come here silly," she says as she stands up and wraps you in a big hug. Just like the first time she hugged you, you can feel the wonderful softness of her breasts, the warmth of her body and the smoothness of her skin pressing against yours. It\'s… nice… There\'s no other way to describe it.');
    // TODO-QSP: dynamic text: "If you need anything, I''m here for you <<$mari[''used_firstname'']>>." She pul...
    scene.text(`"If you need anything, I'm here for you ${((st as any).mari ?? 0)?.['used_firstname'] ?? ''}." She pulls back and smiles wide at you.`);
    scene.text('You smile back, saying, "Thanks for the talk Mari, I\'ll keep it in mind when I decide on how to deal with things."');
    scene.text('"So, was there anything else you wanted to talk about?"');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterMariFakepassportTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mari ?? 0)?.['fakepassport'] === 1) {
    scene.actions([
      { label: 'Ask about her fake passport', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"Wait, you used a fake passport to start working here?"');
    scene.text('"Yeah."');
    scene.text('"So how old are you now?');
    if (((st as any).year ?? 0) === 2016  ||  (((st as any).year ?? 0) === 2017  &&  ((st as any).month ?? 0) < 5)) {
      scene.text('"I\'m 18 now, thankfully. My birthday was actually just this last May."');
    } else {
      if (((st as any).year ?? 0) > 2016  &&  ((st as any).month ?? 0) > 5) {
        // TODO-QSP: dynamic text: "I''m <<2016 - 1997>>. I turned 18 back in 2016."
        scene.text(`"I'm ${2016 - 1997}. I turned 18 back in 2016."`);
      } else {
        // TODO-QSP: dynamic text: "I''m <<2016 - 1998>>. I turned 18 back in 2016."
        scene.text(`"I'm ${2016 - 1998}. I turned 18 back in 2016."`);
      }
    }
    if (((st as any).age ?? 0) < 18  &&  ((st as any).fakepassport ?? 0) === 1) {
      scene.actions([
        { label: '"Did you buy it from the print shop guy?"', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['knows_underage'] = 1;
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Hey, did you buy it from that guy in the red light district print shop?" you ask her.');
    scene.text('She perks up as you say this.');
    scene.text('"I did! How did you know? Are you using one now? How old are you?"');
    scene.actions([
      { label: 'Tell her shyly', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I''m <<age>>… You''re not going to tell anyone are you?"
    scene.text(`"I'm ${((st as any).age ?? '')}… You're not going to tell anyone are you?"`);
    scene.text('"Are you kidding? How could I? You basically did the same thing I did. We\'d both get in trouble!" she laughs.');
    scene.actions([
      { label: '"Hey…"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"Hey… this reminds me for some reason… The guy who interviewed you, did he also make you strip down before telling you how old you needed to be to work here?"');
    scene.text('Mari jumps up out of her seat to finish your sentence, "And then told you that he liked your naked body so you should go to the red light district and buy a fake passport??"');
    scene.text('"Yeah he did!" you cry out. "What a perv! Going out of his way to make excuses to take pictures of underage girls like us!"');
    // TODO-QSP: dynamic text: You laugh about it together and then try to quiet down a bit, remembering you sh...
    scene.text(`You laugh about it together and then try to quiet down a bit, remembering you should probably not spread it around that you're only ${((st as any).age ?? '')}…`);
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    ]);
  } },
      { label: 'Tell her excitedly', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    // TODO-QSP: dynamic text: "I''m <<age>>!"
    scene.text(`"I'm ${((st as any).age ?? '')}!"`);
    scene.text('"What??" she cries, jumping up excitedly. "That\'s crazy!"');
    scene.text('"I know right? What are the odds that two girls like us from outside the city would both buy fake passports to end up here?"');
    scene.text('"You said you visit your grandparents in Gadukino sometimes right? Maybe it\'s something in the water!" she laughs.');
    scene.text('You laugh with her for a moment before the both of you calm down again.');
    scene.text('"Hey… this reminds me for some reason… The guy who auditioned you… Did he also make you strip down before telling you how old you needed to be to work here?"');
    scene.text('"And then told you that he liked your naked body so you should go to the red light district and buy a fake passport??"');
    scene.text('"Yeah he did! What a perv! Going out of his way to make excuses to take pictures of underage girls like us!"');
    // TODO-QSP: dynamic text: You both burst into fits of laughter before clapping your hands over your mouths...
    scene.text(`You both burst into fits of laughter before clapping your hands over your mouths and trying to stifle your hysterics. You probably shouldn't spread it around that you're only ${((st as any).age ?? '')}…`);
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).age ?? 0) >=18  &&  ((st as any).fakepassport ?? 0) === 1) {
      scene.actions([
        { label: '"Did you buy it from the print shop guy?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Hey, did you buy it from that guy in the red light district print shop?" you ask her.');
    scene.text('She perks up as you say this.');
    scene.text('"I did! How did you know? Are you using one now? How old are you?"');
    if (((st as any).age ?? 0) === ((st as any).model ?? 0)?.['age']) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'I\'m ' + String(((st as any).age ?? '') ?? '') + '.', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    // TODO-QSP: dynamic text: "I''m <<age>>. I didn''t work here when I was still underage, but I still needed...
    scene.text(`"I'm ${((st as any).age ?? '')}. I didn't work here when I was still underage, but I still needed the fake to buy booze and stuff," you grin.`);
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.text('"That\'s fair enough I guess. Not everyone has a neighbor like Misha brewing moonshine vodka in his barn," she laughs.');
    } else {
      scene.text('"That\'s fair enough I guess. I didn\'t drink when I lived in the village, but if I ever wanted one, I had a neighbor who would brew moonshine in his barn," she laughs.');
    }
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'I\'m ' + String(((st as any).age ?? '') ?? '') + '.', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    // TODO-QSP: dynamic text: "Oh, I''m <<age>>. But just like you, I still needed a fake one when I first sta...
    scene.text(`"Oh, I'm ${((st as any).age ?? '')}. But just like you, I still needed a fake one when I first started here. This reminds me for some reason, did the guy who auditioned you also make you strip down before telling you how old you needed to be to work here?"`);
    scene.text('Mari jumps up out of her seat to finish your sentence, "And then told you that he liked your naked body so you should go to the red light district and buy a fake passport??"');
    scene.text('"Yeah he did!" you cry out. "What a perv! Going out of his way to make excuses to take pictures of underage girls like us!"');
    scene.text('You laugh about it together and then try to quiet down a bit, remembering you should probably not spread it around that the studio uses underage models. Wouldn\'t be very good for your careers…');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((st as any).fakepassport ?? 0) === 2) {
      scene.actions([
        { label: '"Did you buy it from the print shop guy?"', handler: (st: GameState) => {
    scene.text('"Hey, did you buy it from that guy at the print shop in the red light district?" you ask her.');
    scene.text('She perks up as you say this.');
    scene.text('"I did! How did you know? Are you using one now? How old are you?"');
    scene.actions([
      { label: '', labelFn: (s: GameState) => '"I\'m ' + String(((st as any).age ?? '') ?? '') + ', I never used a fake passport."', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    // TODO-QSP: dynamic text: "Oh no, I''ve never bought a fake passport. I''m <<age>> and I''ve always been w...
    scene.text(`"Oh no, I've never bought a fake passport. I'm ${((st as any).age ?? '')} and I've always been working here legally, I just know about the guy. It was where the Gopniks in my school would go to get their fakes so they could buy booze," you say with a laugh.`);
    scene.text('"Oh! I didn\'t realize he was that well known."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading8.jpg');
    scene.text('You decide to tease her a bit. "You know Mari, for a girl who went out of her way to start nude modelling before she was legal, you\'re kind of innocent."');
    scene.text('She grins back at you. "What can I say? I\'m just a poor, naive, gullible farm girl who was promised fame and fortune if she got naked."');
    scene.text('You both burst into laughter and then try to quiet down a bit, remembering you should probably not spread it around that the studio uses underage models. Wouldn\'t be very good for your careers…');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if ((!((st as any).fakepassport ?? 0))) {
      scene.actions([
        { label: '"Where did you even get it?"', handler: (st: GameState) => {
    scene.text('"Where did you even get a fake passport? Weren\'t you new here?"');
    scene.text('"Oh! I definitely was!" Mari says. "When I asked about working here, the guy had me strip down to check me out. Then when he said I looked good enough he asked me how old I was. When I told him I was only 17 he said I couldn\'t work here. I really needed the job so I asked him if there was any way I could and he said that since he liked my body, I should find a guy in the red light district who sells fake passport from him and come back."');
    scene.actions([
      { label: '"I can\'t believe you went through so much to start nude modelling underage!"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"I can\'t believe you went through so much to start nude modelling while you were underage!" you say in astonishment. "Couldn\'t you have just waited a year?"');
    // TODO-QSP: dynamic text: She looks down in embarrassment. "Well… I guess… But I <i>really</i> love this j...
    scene.text(`She looks down in embarrassment. "Well… I guess… But I <i>really</i> love this job ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}. Wasn't it all worth it?"`);
    scene.text('As you look at her, you relent a bit. You can\'t really fault her for chasing so hard after something she loves doing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading8.jpg');
    scene.text('Still, you decide the opportunity to tease her is too good to pass up. "You know Mari, for a girl who went out of her way to start nude modelling before she was legal, you\'re kind of innocent."');
    scene.text('She grins back at you. "What can I say? I\'m just a poor, naive, gullible farm girl. They said they could make all my dreams come true if I took my clothes off for them…"');
    scene.text('You both burst into laughter and then try to quiet down a bit, remembering you should probably not spread it around that the studio uses underage models. Wouldn\'t be very good for your careers…');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariFirstNude(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about her nude debut', handler: (st: GameState) => {
    if (((st as any).modelfoto ?? 0)?.['fullnude'] === 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude2(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcNudeDebutTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterMariFirstNude2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).modelfoto ?? 0)?.['fullnude'] === 0) {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Hey Mari, what was your nude debut like?" you ask.');
    scene.text('"My first nude shoot? Why? You thinking about doing one?"');
    scene.actions([
      { label: 'Just curious', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('You shake your head.');
    scene.text('"I\'m just curious to know what it was like for you."');
    scene.text('"If you\'re so curious, you haven\'t looked through my portfolio at the front have you?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Been thinking about it (experience)', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"I\'ve been thinking about it," you admit. "I think it might be a good experience for me."');
    scene.text('"You should do it!" Mari says. "I think you\'re right. It was a great experience for me anyways. I had a lot of fun doing it. I\'ve never really been embarrassed about my body so when they asked me if I wanted to pose nude I just figured why not? It was a little embarrassing to shave everything, uhm, down there… but even that wasn\'t too bad. I just remember laughing a lot and feeling strangely energized. And since I did my debut early on in my career, the majority of my portfolio is filled with nudes now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude2_shave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Been thinking about it (career)', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading2.jpg');
    scene.text('"I\'ve been thinking about it," you admit. "I can\'t help but feel like it would be good for my career."');
    scene.text('"That\'s fair," Mari nods. "It was good for mine. Let me get a jump on nude shoots early on so now my portfolio is full of them. It was good exposure and got me a lot more jobs. But more than that, it was just a great experience for me. I had a lot of fun doing it. I\'ve never really been embarrassed about my body so when they asked me if I wanted to pose nude I just figured why not? It was a little embarrassing to shave everything, uhm, down there… but even that wasn\'t too bad. I just remember laughing a lot and feeling strangely energized. Maybe my nerves just make me laugh," she smiles shyly.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude2_shave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Been thinking about it (money)', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading15.jpg');
    scene.text('"I\'ve been thinking about it," you admit. "I heard you get double rate for your debut. I could really use the money."');
    scene.text('"That\'s fair," Mari nods. "It gave me enough money for the first deposit to move into my own place. But more than that, it was just a great experience for me. I had a lot of fun doing it. I\'ve never really been embarrassed about my body so when they asked me if I wanted to pose nude I just figured why not? It was a little embarrassing to shave everything, uhm, down there… but even that wasn\'t too bad. I just remember laughing a lot and feeling strangely energized. Maybe my nerves just make me laugh," she smiles shyly.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude2_shave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('"But sorry, you wanted to talk about my debut, not yours," she says looking mildly chagrined.');
    scene.text('"It\'s okay," you shake your head.');
    scene.text('"You haven\'t seen the cover photo from the portfolio folders have you?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFirstNude3(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariFirstNude2_shave(s: GameState, scene: SceneBuilder): void {
  scene.text('"They made you shave for it?" you ask.');
  scene.text('"Yeah. The studio has this policy that every model\'s first full frontal has to shave her… yeah… I\'d done it once before, but it\'s not like I showed anybody, let alone had photographs taken of it. It made me feel… naked? Like being more naked than naked if that makes any sense. It\'s a good thing I like being naked!" she laughs.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMariFirstNude4(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMariFirstNude3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"No," you shake your head. "I haven\'t seen yours."');
    scene.text('"Well, that\'s probably for the best," Mari replies, a faint blush coloring her cheeks. "You\'d probably tease me for looking too cheerful. Honestly? It was a great experience for me. I had a lot of fun doing it. I\'ve never really been embarrassed about my body so when they asked me if I wanted to pose nude I just figured why not? It was a little embarrassing to shave everything, uhm, down there… but even that wasn\'t too bad. It mostly felt… breezy? Like being more naked than naked if that makes any sense. It\'s a good thing I like being naked!" she laughs. "But since I did my debut early on in my career, the majority of my portfolio is filled with nudes now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"Yeah I\'ve gone through yours."');
    scene.text('"Oh dear!" Mari blushes hard. "Well then you could probably tell I might have been having too much fun. I\'ve never really been embarrassed about my body so when they asked me if I wanted to pose nude I just figured why not? It was a little embarrassing to shave everything, uhm, down there… but even that wasn\'t too bad. It mostly felt… breezy? Like being more naked than naked if that makes any sense. It\'s a good thing I like being naked!" she laughs. "But honestly? It was a great experience for me. And since I did it early on in my career the majority of my portfolio is filled with nudes now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMariFirstNude4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mari ?? 0)?.['fakepassport'] === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).modelfoto ?? 0)?.['fullnude'] > 0  &&  ((st as any).mari ?? 0)?.['knows_underage'] === 1) {
      scene.img('images/characters/city/models/mari/talking/reading4.jpg');
      scene.text('"So you did your first nude shoot when you were still underage?" you ask.');
      if (((st as any).mari ?? 0)?.['age'] === 18) {
        scene.text('"Yeah, just like you," she smirks. "I guess maybe it\'s not something to be too proud of when you put it like that. It certainly makes it harder to consider telling my parents about what I do. If they ever start reading dates, they might do the math. My mother would be mortified! But there\'s no turning back now. I was only a couple months from my birthday anyways. Seems like a technicality at that point. I look the same in photos of when I was 17 as I do now that I\'m 18."');
      } else {
        scene.text('"Yeah, just like you," she smirks. "I guess maybe it\'s not something to be too proud of when you put it like that. It certainly makes it harder to consider telling my parents about what I do. If they ever start reading dates, they might do the math. My mother would be mortified! But there\'s no turning back now. I was only a couple months from my birthday anyways. Seems like a technicality at that point. I look the same in photos of when I was 17 as I do in photos of when I was 18."');
      }
      scene.actions([
        { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
      ]);
    } else {
      scene.img('images/characters/city/models/mari/talking/reading5.jpg');
      scene.text('"So you did your first nude shoot when you were still underage?" you ask.');
      if (((st as any).mari ?? 0)?.['age'] === 18) {
        scene.text('"Yeah, I guess so," she shrugs a little shyly. "It certainly makes it harder to consider telling my parents about what I do. If they ever start reading dates, they might do the maths. My mother would be mortified! But there\'s no turning back now. I was only a couple months from my birthday anyways. Seems like a technicality at that point. I look the same in photos of when I was 17 as I do now that I\'m 18."');
      } else {
        scene.text('"Yeah, I guess so," she shrugs a little shyly. "It certainly makes it harder to consider telling my parents about what I do. If they ever start reading dates, they might do the maths. My mother would be mortified! But there\'s no turning back now. I was only a couple months from my birthday anyways. Seems like a technicality at that point. I look the same in photos of when I was 17 as I do in photos of when I was 18."');
      }
      scene.actions([
        { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep chatting', goto: ['model_mari', 'mari_modelling_chat'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcNudeDebutTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/models/mari/talking/reading3.jpg');
  scene.text('"What was your nude debut like Mari?" you ask and she perks up.');
  scene.text('"Oh yeah! I heard you did your first nude shoot! Congratulations! How was it?"');
  if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'mortified'  ||  ((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'empty'  ||  ((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'regret') {
    scene.actions([
      { label: 'It was good (lie)', handler: (st: GameState) => {
    scene.text('"It was… good," you say, plastering a false smile on your face and hiding your horrendous experience behind it. "I… It was a good time."');
    scene.text('"That\'s great! I\'m so happy for you," Mari smiles back brightly. That smile especially makes it hard for you to come clean.');
    scene.actions([
      { label: 'Continue', goto: ['model_mari', 'mari_first_nude2'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).modelfoto ?? 0)?.['nude_shave_yes'] === 1  ||  ((s as any).modelfoto ?? 0)?.['nude_shave_no'] === 1) {
      scene.actions([
        { label: 'Annoyed you had to shave', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"It\'s so dumb that they make you shave for it," you scowl.');
    scene.text('"I know right?" Mari laughs. "I really liked my bush, it was all prickly for weeks after mine. Silly too since they asked me to keep a bush after that."');
    scene.actions([
      { label: 'Continue', goto: ['model_mari', 'mari_first_nude2'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell the truth', handler: (st: GameState) => {
    if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'mortified') {
      scene.img('images/characters/city/models/mari/talking/reading11.jpg');
      if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
        scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so nervous I thought I was going to throw up. And then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these. I… I feel like I made a mistake."');
      } else {
        if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
          scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually strangely… aroused. My body felt hot and- well I won\'t go into the details but it\'s weird looking back on it now. But then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these. I… I feel like I made a mistake."');
        } else {
          if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
            scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually… happy. I felt excited. I was having fun. But then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these. I… I feel like I made a mistake."');
          } else {
            if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
              scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so calm. I felt professional. Like I was a real super model. Totally unflappable. But then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these. I… I feel like I made a mistake."');
            } else {
              if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… numb. Like I was outside myself looking in on myself making a terrible mistake. And then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these… It only cemented those feelings."');
              } else {
                if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                  scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>dirty</i>. Like I was selling a part of myself. And I guess I was because when I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these… That\'s when I felt dirtier than ever…"');
                } else {
                  if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                    scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>hollow</i>. Like I gave something up inside me. And then when it was over, I saw the photos of myself, everything bared to the world, and I was absolutely mortified. The realization that anyone who looks up my name would see these… It just made me feel empty inside."');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'empty') {
        scene.img('images/characters/city/models/mari/talking/reading11.jpg');
        if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
          scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so nervous I thought I was going to throw up. And then when it was over and I saw the photos of myself, everything bared to the world, and I just felt… <i>empty</i>. Like I lost a part of myself that I can never get back."');
        } else {
          if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
            scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually strangely… aroused. My body felt hot and- well I won\'t go into the details but it\'s weird looking back on it now. But then when it was over and I saw the photos of myself, everything bared to the world, and I just felt… <i>empty</i>. Like I lost a part of myself that I can never get back."');
          } else {
            if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
              scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually… happy. I felt excited. I was having fun. But then when it was over and I saw the photos of myself, everything bared to the world, and I just felt… <i>empty</i>. Like I lost a part of myself that I can never get back."');
            } else {
              if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so calm. I felt professional. Like I was a real super model. Totally unflappable. But then when it was over and I saw the photos of myself, everything bared to the world, and I just felt… <i>empty</i>. Like I lost a part of myself that I can never get back."');
              } else {
                if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                  scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… numb. Like I was outside myself looking in on myself making a terrible mistake. And then when it was over and I saw the photos of myself, everything bared to the world, and I just felt… <i>empty</i>. Like I lost a part of myself that I can never get back."');
                } else {
                  if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                    scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>dirty</i>. Like I was selling a part of myself. And I guess I was because when I saw the photos of myself, everything bared to the world… it made me feel empty inside. Like I sold my soul for some money. And that made me feel dirtier than ever."');
                  } else {
                    if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                      scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>hollow</i>. Like I gave something up inside me. And then when it was over, I saw the photos of myself, everything bared to the world, and… I felt like I just dug a hole inside myself I\'m never going to be able to fill again."');
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'regret') {
          scene.img('images/characters/city/models/mari/talking/reading11.jpg');
          if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
            scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so nervous I thought I was going to throw up. And then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
          } else {
            if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
              scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually strangely… aroused. My body felt hot and- well I won\'t go into the details but it\'s weird looking back on it now. But then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
            } else {
              if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                scene.text('"It… it wasn\'t great," you admit. "During the shoot I was actually… happy. I felt excited. I was having fun. But then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
              } else {
                if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                  scene.text('"It… it wasn\'t great," you admit. "During the shoot I was so calm. I felt professional. Like I was a real super model. Totally unflappable. But then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
                } else {
                  if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                    scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… numb. Like I was outside myself looking in on myself making a terrible mistake. And then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
                  } else {
                    if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                      scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>dirty</i>. Like I was selling a part of myself. And then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… What did I do this for? Money? Fame? I felt dirtier than ever and I don\'t know that I\'ve ever regretted anything as much as this…"');
                    } else {
                      if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                        scene.text('"It… it wasn\'t great," you admit. "During the shoot I just felt… <i>hollow</i>. Like I gave something up inside me. And then when it was over and I saw the photos of myself, everything bared to the world, I realized that this is going to be on the internet forever. I\'ll never be able to get rid of them and anyone who looks up my name can find them and… I can never take it back. I don\'t know that I\'ve ever regretted anything as much as this…"');
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'amazed'  ||  ((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'proud') {
            scene.img('images/characters/city/models/mari/face.jpg');
            if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
              scene.text('"It was… really great actually," you smile. "During the shoot I was so nervous I thought I was going to throw up. But when it was over and I saw the photos, I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! I was so happy with how everything turned out."');
            } else {
              if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
                scene.text('"It was… really great actually," you smile. "During the shoot I was actually strangely… aroused. My body felt hot and- well I won\'t go into the details but it\'s weird looking back on it now. And when I saw the photos, I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! I was so happy with how everything turned out."');
              } else {
                if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                  scene.text('"It was… really great actually," you smile. "The whole thing just made me feel… happy. I think I get what it\'s like for you when you\'re modelling now. I just wanted to laugh the entire time. And when I got to see the photos I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! I loved every second of it."');
                } else {
                  if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                    scene.text('"It was… really great actually," you smile. "During the shoot I was so calm. I felt professional. Like I was a real super model. Totally unflappable. But when I got to see the photos I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! I was so happy with how everything turned out."');
                  } else {
                    if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                      scene.text('"It was… really great actually," you smile. "During the shoot I just felt… numb. Like I was outside myself looking in on myself making a terrible mistake. But when I got to see the photos I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! All my nerves and fears and regrets vanished instantly. I was so happy with how everything turned out."');
                    } else {
                      if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                        scene.text('"It was… really great actually," you smile. "I have to admit, during the shoot I felt… dirty. Like I was selling a part of myself, whoring myself out with my own image. But when I got to see the photos I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! All my nerves and fears and regrets vanished instantly. I was so happy with how everything turned out."');
                      } else {
                        if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                          scene.text('"It was… really great actually," you smile. "I have to admit, during the shoot I felt… hollow. Like I was giving something up inside me. But when I got to see the photos I just remember thinking, \'Wow! This is me?\' I couldn\'t believe it! All my nerves and fears and regrets vanished instantly. I was so happy with how everything turned out."');
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'aroused') {
              scene.img('images/characters/city/models/mari/talking/reading5.jpg');
              if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
                scene.text('"It… it really turned me on," you admit with a warm blush. "During the shoot I was so nervous I thought I was going to throw up. But when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' Is it kind of weird that I got turned on by pictures of me?"');
              } else {
                if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
                  scene.text('"It… it really turned me on," you admit with a warm blush. "During the whole shoot, I just felt so aroused. My body felt hot and my nipples were hard and I was half afraid I was going to start leaking all over the set. And when I saw the photos, I remember thinking, \'I\'m so hot!\' Is it kind of weird that I got turned on by pictures of me? I almost wet myself right there."');
                } else {
                  if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                    scene.text('"It… it really turned me on," you admit with a warm blush. "The whole thing just made me feel… happy. I think I get what it\'s like for you when you\'re modelling now. I just wanted to laugh the entire time. And when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' Is it kind of weird that I got turned on by pictures of me?"');
                  } else {
                    if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                      scene.text('"It… it really turned me on," you admit with a warm blush. "During the shoot I was so calm. I felt professional. Like I was a real super model. Totally unflappable. But when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' Is it kind of weird that I got turned on by pictures of me?"');
                    } else {
                      if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                        scene.text('"It… it really turned me on," you admit with a warm blush. "During the shoot I just felt… numb. Like I was outside myself looking in on myself making a terrible mistake. But when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' Is it kind of weird that I got turned on by pictures of me?"');
                      } else {
                        if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                          scene.text('"It… it really turned me on," you admit with a warm blush. "I have to admit, during the shoot I felt… dirty. Like I was selling a part of myself, whoring myself out with my own image. But when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' I got over those bad feelings pretty quickly. Is it kind of weird that I got turned on by pictures of me?"');
                        } else {
                          if (((st as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                            scene.text('"It… it really turned me on," you admit with a warm blush. "I have to admit, during the shoot I felt… hollow. Like I was giving something up inside me. But when I got to see the photos I just felt something <i>gush</i> inside me. I remember thinking, \'I\'m so hot!\' I got over those bad feelings pretty quickly. Is it kind of weird that I got turned on by pictures of me?"');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'mortified'  ||  ((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'empty'  ||  ((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'regret') {
      // TODO-QSP: dynamic text: Mari''s smile fades. "I''m so sorry <<$mari[''used_nickname'']>>. Well, now I fe...
      scene.text(`Mari's smile fades. "I'm so sorry ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}. Well, now I feel guilty that my experience was so different…"`);
      scene.text('"Don\'t be," you reassure her. "I would hate to find out that everyone\'s first nude shoot was like mine."');
      scene.text('You give her a small smile and her own smile begins to peek back out again.');
      scene.text('"I suppose that\'s true. If you\'re asking about my debut, that doesn\'t mean you\'ve seen the cover photo in my portfolio, does it?"');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariFirstNude3(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'amazed'  ||  ((st as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'proud') {
        scene.text('Mari smiles brightly back at you.');
        // TODO-QSP: dynamic text: "That''s great <<$mari[''used_nickname'']>>! I''m glad you had such a great expe...
        scene.text(`"That's great ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}! I'm glad you had such a great experience. First times varies a lot between girls here. I've seen some who really regret it and some who don't."`);
        scene.actions([
          { label: 'Continue', goto: ['model_mari', 'mari_first_nude2'] },
        ]);
      } else {
        scene.text('Mari blushes furiously and looks away. When she looks back at you, it seems like she\'s trying really hard to maintain eye contact and not look down.');
        scene.text('"It\'s not the weirdest thing I\'ve ever heard," she smiles. "Believe it or not I\'ve heard it before. Girls have all kinds of reactions to their first time posing nude. Ranging from embarrassment and shame to excitement and joy, and yeah, feeling… like you did."');
        scene.actions([
          { label: 'Continue', goto: ['model_mari', 'mari_first_nude2'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterOtherModelsTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about the other models' }, // TODO-QSP: empty action body
  ]);
  scene.build();
}

function enterWeekendPlans(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) === 5) {
    scene.actions([
      { label: 'Ask about her weekend plans', handler: (st: GameState) => {
    if (((st as any).mari ?? 0)?.['weekend_gone'] < ((st as any).daystart ?? 0)  &&  ((st as any).mari ?? 0)?.['weekend_stay'] < ((st as any).daystart ?? 0)) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        ((st as any).mari = (st as any).mari ?? {})['weekend_gone'] = ((st as any).daystart ?? 0) + 2;
      } else {
        ((st as any).mari = (st as any).mari ?? {})['weekend_stay'] = ((st as any).daystart ?? 0) + 2;
      }
    }
    if (((st as any).mari ?? 0)?.['weekend_gone'] > ((st as any).daystart ?? 0)) {
      if (((st as any).mari ?? 0)?.['weekend_ask'] === ((st as any).daystart ?? 0)) {
        scene.img('images/characters/city/models/mari/talking/reading4.jpg');
        scene.text('"Any plans for the weekend Mari?" you ask.');
        scene.text('"Didn\'t I already tell you?" she laughs. "I\'m visiting my parents in Gadukino tomorrow."');
      } else {
        scene.img('images/characters/city/models/mari/talking/reading2.jpg');
        scene.text('"Any plans for the weekend Mari?" you ask.');
        scene.text('"I\'m gonna go home to visit my parents," she smiles.');
        scene.text('"In Gadukino?"');
        scene.text('"Mhm. I make a point of trying to see them every couple weeks. Sometimes work gets in the way, but I can usually make it out at least once a month. It\'s nice that they\'re only a train ride away. I always feel better after spending some time with them."');
      }
    } else {
      if (((st as any).mari ?? 0)?.['weekend_ask'] === ((st as any).daystart ?? 0)) {
        scene.img('images/characters/city/models/mari/talking/reading4.jpg');
        scene.text('"Any plans for the weekend Mari?" you ask.');
        scene.text('"Didn\'t I already tell you?" she laughs. "I\'m just hanging around the city like the rest of the week."');
      } else {
        scene.img('images/characters/city/models/mari/talking/reading19.jpg');
        scene.text('"Any plans for the weekend Mari?" you ask.');
        scene.text('"Not really," she says scratching her head. "I have a few shoots scheduled but I was hoping to spend the rest of the time relaxing. Do some reading, take a walk in the park maybe. I really need to go to the gym but I don\'t want to!" she laughs as well.');
      }
    }
    ((st as any).mari = (st as any).mari ?? {})['weekend_ask'] = ((st as any).daystart ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMariSexTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mari ?? 0)?.['sex'] === 0) {
    scene.actions([
      { label: 'Talk about sex', handler: (st: GameState) => {
    ((st as any).mari = (st as any).mari ?? {})['sex'] = 1;
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('"Sex?? You want to talk about sex???" she says, seemingly surprised.');
    scene.text('"Yeah, just a bit of girl talk," you say with a conspirational smile.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    // TODO-QSP: dynamic text: "Well… That''s… I…" Mari is blushing heavily, her face turning dramatically red....
    scene.text(`"Well… That's… I…" Mari is blushing heavily, her face turning dramatically red. You think this is the first time you've ever seen her embarrassed about something. "I don't have a lot to talk about in that department ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}…"`);
    scene.actions([
      { label: '"Wait… don\'t tell me you…"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading4.jpg');
    scene.text('The realization dawns on you slowly as her face grows more and more red. "Wait… don\'t tell me you\'ve…"');
    scene.text('"Never had sex?" she says shyly. "No… I haven\'t…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('Your mouth is agape as she wriggles in embarrassment. She doesn\'t seem upset by any means, she\'s still clearly smiling. It kind of reminds you of when you were younger and when girls asked each other if they had ever kissed a boy.');
    // TODO-QSP: dynamic text: "You''re a virgin?! You''re a nude model who''s <<mari[''age'']>> and living in ...
    scene.text(`"You're a virgin?! You're a nude model who's ${((st as any).mari ?? 0)?.['age'] ?? ''} and living in St. Petersburg and you're a virgin?!"`);
    scene.text('Your exclamations are met with hushes, "Shh! Shh! Shh shh shh! Not so loud!" as Mari tries to quiet you down while holding back her own nervous laughter.');
    scene.actions([
      { label: '"But how?!"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading6.jpg');
    scene.text('"But how?!"');
    scene.text('"And who was I supposed to lose it to??" she says with a laugh. "You know Gadukino. Mitka or one of his friends? There isn\'t much selection there is there?"');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading14.jpg');
    scene.text('You nod at her statement as you realize she kind of has a point.');
    scene.text('"I want it to be <i>romantic!</i>" she says with a swoon. "I want to be swept off my feet and fall in love and just slip head over heels with someone until one thing leads to the next and then they\'re on top of me and our clothes are coming off and I feel them inside me, slow and gentle and…"');
    scene.text('She blushes and cuts off.');
    scene.text('"Sorry. I\'m being really sappy and embarrassing right now…"');
    scene.actions([
      { label: 'It sounds romantic', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    scene.text('"It sounds very romantic Mari," you smile.');
    scene.text('"Shut up, you\'re just saying that," she waves you off, cheeks turning an even deeper red.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading19.jpg');
    scene.text('She looks a little confused and picks up her book again.');
    scene.text('Mari blushes intensely and says, "N-no… I like boys…" You see her whisper the words again quietly to herself, "I like boys…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading10.jpg');
    scene.text('She shakes her head and snaps out of it, sitting back down and picking up her book again.');
    scene.text('"Anyways, was there anything else you wanted to talk about?"');
    scene.actions([
      { label: '"No, that was all"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    // TODO-QSP: dynamic text: "Alright <<$mari[''used_nickname'']>>. I''ll see you later okay?"
    scene.text(`"Alright ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}. I'll see you later okay?"`);
    scene.text('"For sure Mari!"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Yeah, I wanted to talk about…"', handler: (st: GameState) => {
    scene.text('"Yeah, actually I wanted to talk about…"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: '"Are you bi?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading18.jpg');
    scene.text('"Are you bi Mari?" you blurt out without thinking.');
    scene.text('She turns suddenly giving you a bewildered look. "What? Why would you ask that…?"');
    scene.text('"Oh, sorry. I didn\'t mean to offend you! I swear! It\'s just that I wasn\'t sure and… well you never actually said \'he\'. I wasn\'t sure if you went both ways."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading19.jpg');
    scene.text('"Well I…" Mari looks off to the side seeming puzzled. "I never really thought about it. I like boys! I know that. But… girls?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading17.jpg');
    scene.text('"What do you think? Do you really think I might like girls too?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading17.jpg');
    scene.text('"No!" you say hurriedly. "I mean, I was being rude. I was just reading too far into things. I didn\'t mean to… You know."');
    // TODO-QSP: dynamic text: "It''s okay <<$mari[''used_nickname'']>>," Mari says, instantly breaking back in...
    scene.text(`"It's okay ${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}," Mari says, instantly breaking back into her usual smile. "You're probably right. No harm done."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading19.jpg');
    scene.text('"No harm done…" she mutters to herself again with a far-off look.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Maybe', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading19.jpg');
    scene.text('"Maybe?" you shrug. "The way you act, how kind you are to the other girls here, the way you\'re always hugging me… It might be more affectionate than you realize. But I can\'t be the judge of that. Only you can say if it\'s something more."');
    scene.text('"I guess this is something I\'ll have to think about…" she mumbles with a far-off look.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
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
  if (((s as any).mari ?? 0)?.['sex'] === 1) {
    scene.actions([
      { label: 'Ask for sex advice', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading5.jpg');
    // TODO-QSP: dynamic text: "<<$mari[''used_nickname'']>>, we already talked about this! I''m a virgin remem...
    scene.text(`"${((st as any).mari ?? 0)?.['used_nickname'] ?? ''}, we already talked about this! I'm a virgin remember?"`);
    scene.text('"Well… you never know if something… <i>popped</i> up!" you say with a wink.');
    scene.text('She blushes at the inference.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMariChat(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mari_age':
      enterMariAge(s, scene);
      break;
    case 'mari_1':
      enterMari_1(s, scene);
      break;
    case 'mari_1.1':
      enterMari_1_1(s, scene);
      break;
    case 'mari_1.2':
      enterMari_1_2(s, scene);
      break;
    case 'mari_2':
      enterMari_2(s, scene);
      break;
    case 'mari_3':
      enterMari_3(s, scene);
      break;
    case 'mari_4':
      enterMari_4(s, scene);
      break;
    case 'mari_chat':
      enterMariChat(s, scene);
      break;
    case 'mari_small_talk':
      enterMariSmallTalk(s, scene);
      break;
    case 'mari_family_chat':
      enterMariFamilyChat(s, scene);
      break;
    case 'mari_underwear_chat':
      enterMariUnderwearChat(s, scene);
      break;
    case 'mari_model_ask':
      enterMariModelAsk(s, scene);
      break;
    case 'mari_book_chat':
      enterMariBookChat(s, scene);
      break;
    case 'mari_food_chat':
      enterMariFoodChat(s, scene);
      break;
    case 'mari_fitness_chat':
      enterMariFitnessChat(s, scene);
      break;
    case 'mari_modelling_chat':
      enterMariModellingChat(s, scene);
      break;
    case 'mari_model_advice':
      enterMariModelAdvice(s, scene);
      break;
    case 'mari_origin':
      enterMariOrigin(s, scene);
      break;
    case 'mari_nametalk':
      enterMariNametalk(s, scene);
      break;
    case 'mari_nametalk2':
      enterMariNametalk2(s, scene);
      break;
    case 'mari_nametalk3':
      enterMariNametalk3(s, scene);
      break;
    case 'mari_nametalk4':
      enterMariNametalk4(s, scene);
      break;
    case 'mari_nametalk5':
      enterMariNametalk5(s, scene);
      break;
    case 'mari_same_nametalk':
      enterMariSameNametalk(s, scene);
      break;
    case 'mari_parents':
      enterMariParents(s, scene);
      break;
    case 'mari_fakepassport_talk':
      enterMariFakepassportTalk(s, scene);
      break;
    case 'mari_first_nude':
      enterMariFirstNude(s, scene);
      break;
    case 'mari_first_nude2':
      enterMariFirstNude2(s, scene);
      break;
    case 'mari_first_nude2.shave':
      enterMariFirstNude2_shave(s, scene);
      break;
    case 'mari_first_nude3':
      enterMariFirstNude3(s, scene);
      break;
    case 'mari_first_nude4':
      enterMariFirstNude4(s, scene);
      break;
    case 'pc_nude_debut_talk':
      enterPcNudeDebutTalk(s, scene);
      break;
    case 'other_models_talk':
      enterOtherModelsTalk(s, scene);
      break;
    case 'weekend_plans':
      enterWeekendPlans(s, scene);
      break;
    case 'mari_sex_talk':
      enterMariSexTalk(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const model_mari: LocationDef = {
  name: 'model_mari',
  title: 'As you walk around the different sets inside the agency, you',
  region: 'other',
  enter: enter,
};
