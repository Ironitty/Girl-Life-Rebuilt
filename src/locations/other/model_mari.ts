import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMariAge(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).day ?? 0) >= 20) {
    (s as any).mari['age'] = ((s as any).year ?? 0) - 1999;
  } else {
    (s as any).mari['age'] = ((s as any).year ?? 0) - 1998;
  }
  scene.build();
}

function enterMari_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'model_mari', 'mari_age');
  if (((s as any).mari ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_mari', 'mari_2'] }]);
  }
  if (((s as any).mari ?? 0)?.['status'] === 3) {
    scene.actions([{ label: 'Continue', goto: ['model_mari', 'mari_3'] }]);
  }
  if (((s as any).mari ?? 0)?.['status'] === 4) {
    scene.actions([{ label: 'Continue', goto: ['model_mari', 'mari_4'] }]);
  }
  scene.img('images/characters/city/models/mari/meeting/1.jpg');
  scene.text('As you walk around the different sets inside the agency, you notice another model waiting on set for a shoot to start. You realize after a second, you can see right through her top, the breast area a mesh fabric.');
  scene.text('You stand there for a while in the background contemplating if you should approach her or not. After a while you decide to go for it, thinking what\'s the worst that can happen.');
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/2.jpg');
    scene.text('"Hi, I hope I\'m not bothering you. I don\'t think we\'ve met and I wanted to introduce myself," you say as you step up to her.');
    // TODO-QSP: dynamic text: "I'm <<$model['firstname']>>."
    scene.text(`"I'm ${((s as any).model ?? 0)?.['firstname']}."`);
    scene.text('Mari looks your way and smiles, "Hello, it\'s always nice meeting a new model. I\'m Mari." She runs her hand through her hair absentmindedly and you can\'t help but notice her breasts becoming even more visible now that her curly brown hair has been moved out of the way.');
    scene.actions([
      { label: '"Your nipples are showing"', handler: (st: GameState) => {
    if (((s as any).braworntype ?? 0) === 'none') {
      scene.img('images/characters/city/models/mari/meeting/2.jpg');
      scene.text('"Your uhh, nipples are showing," you say, glancing down at them straining against the mesh.');
      scene.text('"So are yours," she smiles, glancing back at your bare chest.');
      scene.actions([
        { label: 'Good point', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4a.jpg');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('"Good point," you reply, looking down at your naked body.');
      scene.text('"I\'m gonna to sit down if you don\'t mind," she says, stretching her legs out on the bench. "Long hours standing up and all, no use standing when you don\'t have to."');
      qspCall(s, 'model_mari', 'mari_1.1');
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
    if (((s as any).pantyworntype ?? 0) !== 'none') {
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
    qspCall(s, 'model_mari', 'mari_1.1');
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
  qspCall(s, 'model_mari', 'mari_1.2');
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
    scene.text(`She hurriedly gets up and starts double checking her clothing and hair before giving you a quick wave and smile, whispering to you, "It was nice to meet you ${((s as any).model ?? 0)?.['firstname']}! I hope we'll get to talk more later!"`);
    scene.text('You wave your farewells back and get off the set.');
    (s as any).mari['status'] = 2;
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
  scene.actions([
    { label: 'Ask for modelling advice', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/4b.jpg');
    scene.text('You feel Mari being honest and open so you decide to ask her, "Do you have any advice for a new model like me?');
    scene.text('Mari strokes her chin with her fingers and thinks for moments.');
    scene.text('"Just enjoy yourself!" she smiles at you. "We get to live in this great city and experience life like few people get to. Sure, the money is good and every day is full of excitement, but that\'s not what\'s important. I\'ve found that being grateful for what you have and enjoying what you do is the best way to live and it\'ll help you in your work. So keep a positive attitude and you\'ll be all good."');
    scene.actions([
      { label: '"Thanks Mari, that helps a lot."', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/meeting/1.jpg');
    // TODO-QSP: dynamic text: You barely get to thank her for the advice before she's suddenly being called up...
    scene.text(`You barely get to thank her for the advice before she's suddenly being called up to get ready. She hurriedly gets up and starts double checking her clothing and hair before giving you a quick smile and whispering, "It was nice meeting you ${((s as any).model ?? 0)?.['firstname']}! I hope we can talk more later!"`);
    (s as any).mari['status'] = 2;
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
  qspCall(s, 'model_mari', 'mari_age');
  scene.img('images/characters/city/models/mari/talking/reading1.jpg');
  scene.text('On your way to a shoot, you see Mari on a break, sitting in the chair of an unused set. At least you think she\'s on break because she\'s reading a book. But you\'re not totally sure since she\'s also completely naked.');
  scene.actions([
    { label: '"Hey Mari! What\'re you doing here? Aren\'t you on break?"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    // TODO-QSP: dynamic text: "Oh hi, <<$model['nickname']>>," she says as she hears your voice and looks up. ...
    scene.text(`"Oh hi, ${((s as any).model ?? 0)?.['nickname']}," she says as she hears your voice and looks up. "I am! But it's boring to spend it the break rooms. I spend most of my breaks lounging around on the sets. No one's using them and it's just more fun that way. Besides, this chair is really comfy!" she says with a laugh. You can't help but smile and laugh with her. She's just so cheerful.`);
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
    // TODO-QSP: dynamic text: "<<$model['nickname']>>," she says, giving you a look. "Come on."
    scene.text(`"${((s as any).model ?? 0)?.['nickname']}," she says, giving you a look. "Come on."`);
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
    // TODO-QSP: dynamic text: "If you ever need help with anything, you can always come talk to me <<$model['n...
    scene.text(`"If you ever need help with anything, you can always come talk to me ${((s as any).model ?? 0)?.['nickname']}." She pulls back and smiles wide at you. "Girls have to stick together, you know!"`);
    scene.text('"Thanks Mari, I really appreciate it."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading13.jpg');
    scene.text('You walk away and she goes back to reading her book. She\'s still smiling, though you\'re not sure if it\'s from the conversation or if it\'s because she just read something funny.');
    (s as any).mari['status'] = 3;
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
  qspCall(s, 'model_mari', 'mari_age');
  if (((s as any).mari ?? 0)?.['used_firstname'] === '') {
    (s as any).mari['used_firstname'] = ((s as any).model ?? 0)?.['firstname'];
    (s as any).mari['used_nickname'] = ((s as any).model ?? 0)?.['nickname'];
  }
  (s as any).mari['status'] = Math.floor(Math.random() * 2) + 3;
  scene.img('images/characters/city/models/mari/talking/reading1.jpg');
  scene.text('Looking for Mari, find her on break in her favorite set chair reading that same book as always.');
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: '"Hi Mari!"', handler: (st: GameState) => {
    scene.img('images/characters/city/models/mari/talking/reading3.jpg');
    scene.text('She looks up and smiles as she hears your greeting.');
    // TODO-QSP: dynamic text: "Hi <<$mari['used_nickname']>>! What's up? Did you want to talk?
    scene.text(`"Hi ${((s as any).mari ?? 0)?.['used_nickname']}! What's up? Did you want to talk?`);
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
    // TODO-QSP: dynamic text: "What's up <<$mari['used_nickname']>>?"
    scene.text(`"What's up ${((s as any).mari ?? 0)?.['used_nickname']}?"`);
    qspCall(s, 'model_mari', 'mari_chat');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMari_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'model_mari', 'mari_age');
  (s as any).mari['busy'] = Math.floor(Math.random() * 3) + 1;
  (s as any).mari['status'] = Math.floor(Math.random() * 2) + 3;
  (s as any).mari['busy_cooldown'] = ((s as any).hour ?? 0) + 2;
  (s as any).mari['busy_cooldown_day'] = ((s as any).daystart ?? 0);
  if (((s as any).mari ?? 0)?.['busy'] === 1) {
    scene.img('images/characters/city/models/mari/talking/busy.jpg');
    scene.text('You\'re looking for Mari when you hear her name called out from a set.');
    scene.text('Peeking from the shadows, you see her holding up her hair with a smirk on her face while the camera flashes in front of her. The more you look at her, the more you feel like the smile is unconscious and just a byproduct of her genuinely enjoying her job.');
    scene.text('She\'s clearly busy right now. You can find her again later.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } else {
    scene.img('images/characters/city/models/mari/talking/busy2.jpg');
    scene.text('Searching for Mari, you peer into the sets, hoping to find her relaxing in one of them. You peek into another set and find yourself simultaneously gratified and disappointed. Standing fully nude amidst hay and wooden props is Mari, as well as a full crew in the middle of a shoot.');
    scene.text('<i>*click* *click*</i>');
    scene.text('"Okay, just hold that pose Mari… Yeah, just like that. Try to keep on your toes and keep your back straight."');
    scene.text('<i>*click* *click*</i>');
    scene.text('She\'s clearly being quite attentive and trying her best. But as you look closer you see her calves shaking, struggling to keep her on her toes.');
    if (((s as any).mari ?? 0)?.['farm_shoot'] === 0) {
      (s as any).mari['farm_shoot'] = 1;
      scene.text('<i>Huh, I didn\'t know we had a dedicated set just for shooting farm stuff. I thought they went out to Gadukino every time. Oh well, looks Mari\'s busy. I guess I\'ll have to find her some other time.</i> Eyeing her quivering toes one last time you think, <i>Hang in there girl!</i>');
      scene.actions([
        { label: 'Leave', goto: ['foto', 'studio'] },
      ]);
    } else {
      scene.text('<i>Stuck playing the farm girl again, huh Mari? They really are slave drivers for this kind of thing aren\'t they? I guess I\'ll find you some other time.</i>');
      scene.actions([
        { label: 'Leave', goto: ['foto', 'studio'] },
      ]);
    }
    if (((s as any).mari ?? 0)?.['busy'] === 3) {
      scene.img('images/characters/city/models/mari/talking/busy3.jpg');
      scene.text('You\'re looking for Mari when you find her in the middle of a shoot.');
      if (((s as any).mari ?? 0)?.['cloth_shoot'] === 0) {
        (s as any).mari['cloth_shoot'] = 1;
        scene.text('In more clothes than you\'ve ever seen her wearing before (though admittedly, you\'ve almost only ever seen her nude), she holds up her hair with an intense expression on her face and moving very intently. When the photographer gives commands she enacts them flawlessly. She seems to be in an incredible state of focus.');
        scene.text('<i>I guess even a cheerful girl like Mari gets serious sometimes… and someone as comfortable being naked does clothed shoots… I shouldn\'t be a distraction to her. I\'ll come find her again later.</i>');
        scene.actions([
          { label: 'Leave', goto: ['foto', 'studio'] },
        ]);
      } else {
        scene.text('She looks focused and intent again.');
        scene.text('<i>Ahh, she\'s being serious. I shouldn\'t bother her right now. I\'ll find her again later,</i> you think to yourself before slipping away.');
        scene.actions([
          { label: 'Leave', goto: ['foto', 'studio'] },
        ]);
      }
    }
  }
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
    default:
      enterMariAge(s, scene);
      break;
  }
}

export const model_mari: LocationDef = {
  name: 'model_mari',
  title: 'As you walk around the different sets inside the agency, you',
  region: 'other',
  enter: enter,
};
