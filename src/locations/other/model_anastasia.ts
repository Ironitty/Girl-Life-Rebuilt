import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAnastasia1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anastasia ?? 0)?.['escort_ask'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia_escort_ask'] }]);
  }
  if (((s as any).anastasia ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia2'] }]);
  }
  if (((s as any).anastasia ?? 0)?.['status'] === 3) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia3'] }]);
  }
  if (((s as any).anastasia ?? 0)?.['status'] === 4) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia4'] }]);
  }
  if (((s as any).anastasia ?? 0)?.['status'] === 5) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia5'] }]);
  }
  if (((s as any).anastasia ?? 0)?.['status'] === 6) {
    scene.actions([{ label: 'Continue', goto: ['model_anastasia', 'anastasia6'] }]);
  }
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/10.jpg');
  scene.text('As you\'re walking around the different sets at the agency a nude woman with curly black hair walks up to you, "Sorry to bother you but you seem lost, need some help?"');
  // TODO-QSP: dynamic text: You blush as you come to realization that you've must have looked like a fool ju...
  scene.text(`You blush as you come to realization that you've must have looked like a fool just walking around… "Hi, I'm ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I just got recruited by the agency and was just looking around. I didn't mean to be of any trouble…"`);
  scene.text('"Hi, don\'t worry about it, I\'m sure no one minds! You must be the new girl they\'ve been talking about. Interesting…" she says, looking you up and down. "I\'m Anastasia by the way."');
  // TODO-QSP: end
  scene.actions([
    { label: '"Pardon?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('You begin thinking why she finds you interesting and without realizing you open your mouth, "Why do you…" you stop as you realize what you\'ve just done.');
    scene.text('Anastasia a bit surprised by you stopping in the middle of the sentence tilts her head, "Find you interesting? I was just interested in who the new recruit was. The photographers been talking about you, so it\'s naturally I\'m curious who they\'ve brought on board."');
    scene.text('"Thanks, I guess." you carefully answer. "I\'m a bit overwhelmed right now so I\'m just trying to learn the ropes."');
    scene.text('Anastasia smiles and tells you, "Well, if you ever need anything just let me know and I\'ll be glad to help you out."');
    scene.text('You thank her for the welcome and watch on as she goes onto one of the sets…');
    if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasia2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/11.jpg');
  scene.text('As you\'re heading off the set after a photo session you notice Anastasia watching you from the arm of a sofa in the background. She\'s hard to miss as she also completely naked, she must\'ve just finished a shoot there.');
  scene.text('You walk over to her smiling, "Hello Anastasia."');
  // TODO-QSP: dynamic text: She smiles at you and says, "You seem to be improving greatly <<$model['firstnam...
  scene.text(`She smiles at you and says, "You seem to be improving greatly ${((s as any).model ?? 0)?.['firstname'] ?? ''}. You're a natural at this."`);
  // TODO-QSP: end
  scene.actions([
    { label: '"Thanks"', handler: (st: GameState) => {
    scene.text('You blush a little, embarrassed at the high praise you\'re receiving from Russia\'s number one model.');
    scene.text('"I\'ve got some advice to give you if you don\'t mind about how you\'ll exceed even more in this line of work." she tells you.');
    scene.text('You listen eagerly saying, "Of course Anastasia! I\'m still new at this so it\'s a great honor getting advice from someone as experienced as yourself."');
    scene.text('Anastasia giggles by your answer and proudly continues on, "The first thing you need to do is listen to your body. I saw several times when you cramped up a bit which makes you look less pretty."');
    scene.text('You nod, closely listening to her as she continues on, "It\'s also important to listen to the photographers, if they want you to pose in a way, you should follow their advice. They\'re professionals and know what the audience want."');
    scene.actions([
      { label: 'Continue listening', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('She keeps on talking for quite a while and you start losing your concentration as she rambles on. Suddenly she stops and says, "Oh, I\'m sorry, sometimes I get so worked up I forget that I can ramble on for quite a while."');
    scene.text('You re-assure her that you don\'t mind. Suddenly Anastasia looks at you a bit suspiciously.');
    scene.text('"Are you sure you\'re okay, you seem so spaced out. You\'ve been working quite hard lately."');
    scene.text('"Thanks for asking but I\'m totally fine," you re-assure Anastasia.');
    scene.text('"Please don\'t be afraid to approach me with anything, even things outside work. Whatever it is I\'m all ears and I\'ll always have time for you," she says before wrapping you in her arms and giving you a big hug.');
    scene.text('"Mph-kay," you hear your muffled voice say, your face buried in her shoulder and her big breasts pressing against you. As she walks away, the memory of them are still implanted in your mind. They\'re really huge.');
    if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = 3;
    qspCall(s, 'exp_gain', 'mdlng', 5);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasia3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('As you walk through the studio, a faint repetitive noise catches your attention. As you investigate, peering into different sets, the noise increases in clarity. A slapping noise, a bit fleshy, and at regular intervals. It\'s the sound of… sex?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep investigating', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/sex/1.jpg');
    scene.text('Rounding a corner you are suddenly confronted with the shocking image of Anastasia in lingerie being vigorously fucked by two men on the bed of an "unused" set.');
    scene.text('You realize you\'ve found the source of the fleshy slapping sounds as you watch Anastasia\'s ass and pussy mercilessly pounded with large cocks.');
    scene.text('"Ugh! Harder!" she grunts, as the man on bottom reaches up and twists her nipples. "Ahh! Yes! I\'m almost there!"');
    scene.text('You leave quietly, the groans of at least two people orgasming following your footsteps as a parting gift.');
    if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = 4;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasia4(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = Math.floor(Math.random() * 3) + 4;
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
  scene.text('Walking about the studio, you pass by Anastasia who is walking around naked but holding a pair of panties. You are unsure if they\'re hers and she\'s going home or if she\'s about to put them on for a shoot.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: '"Hello Anastasia"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('She turns at your greeting and smiles at you.');
    // TODO-QSP: dynamic text: "Hello, <<$model['nickname']>>! Can I help you with something?"
    scene.text(`"Hello, ${((s as any).model ?? 0)?.['nickname'] ?? ''}! Can I help you with something?"`);
    scene.actions([
      { label: 'Just passing by', handler: (st: GameState) => {
    scene.text('"Oh, no. I just wanted to say hi."');
    scene.text('"Okay, so long as you\'re alright. Don\'t be a stranger!" she says before continuing on her way.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Chat', goto: ['model_anastasia', 'anastasia_chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasia5(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['busy_cooldown_day'] = ((s as any).daystart ?? 0);
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['busy_cooldown'] = ((s as any).hour ?? 0) + 2;
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = Math.floor(Math.random() * 3) + 4;
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/busy.jpg');
  scene.text('You\'re looking for Anastasia when you find her working on a set.');
  scene.text('"Now hold the pose just like that!" the photographer calls. Despite how awkward the pose looks, Anastasia doesn\'t move even a centimeter while she is illuminated by camera flashes and the air is filled with rapid shutter clicks.');
  scene.text('A true pro, this is what it means to be St. Petersburg\'s number one model.');
  scene.text('Not wanting to interrupt just to talk to her, you decide to try and find her again later.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterAnastasia6(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['status'] = Math.floor(Math.random() * 3) + 4;
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/sex/1.jpg');
  scene.text('You are looking for Anastasia to ask her for some advice when you find her… in the bed of an unused being railed by two unknown men…');
  scene.text('"Ugh! Yes! Yes! Just like that!" she cries out.');
  scene.text('One of the men grins and pulls hard on her nipples, eliciting a sound from Anastasia that leaves you undecided on whether it was pain or pleasure.');
  scene.text('"You\'re such a fucking slut Anastasia. I bet you\'ll do anything for money. What would happen to you if all your fans saw you like this right now?"');
  scene.text('Unfazed by his insults she retorts without hesitation, "Then I\'d stand to make a lot more money off of dirty old men like you!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/sex/1.jpg');
    scene.text('You\'re admittedly impressed by Anastasia\'s ability to remain in control of the situation despite the fact that she is literally being fucked in the ass.');
    scene.text('"I\'m cumming!" The man behind her groans and unloads into her ass. This seems to send Anastasia over the edge as she spasms in orgasm');
    scene.text('"You\'re so tight! It\'s sucking me in!" The man underneath thrusts up and blows his load inside her as well.');
    scene.text('They all lay there panting for a while, Anastasia\'s holes still plugged with their cocks before they start to rock back and forth and continue to fuck her.');
    scene.text('"Ohhhh! <i>Ooooh…</i>" She moans as she gets into the sensation again. "This counts as another session you know, you\'re paying double for this."');
    scene.text('"Shut up and keep fucking, whore!"');
    scene.actions([
      { label: 'Leave them be', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('It looks like they\'re going to be a while longer, you\'ll just have to wait to ask Anastasia… whatever it was you were going to ask her…');
    scene.text('As you walk away, you feel a faint blush in your cheeks and a slight wetness between your legs when you realize how far away in the studio you can still hear their activities echoing off the walls.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasiaChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
  // TODO-QSP: dynamic text: "What did you want to talk about <<$model['firstname']>>?"
  scene.text(`"What did you want to talk about ${((s as any).model ?? 0)?.['firstname'] ?? ''}?"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChatOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterChatOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"I have to be off Anastasia, it was nice chatting with you."');
    // TODO-QSP: dynamic text: "Okay, have a nice day <<$model['nickname']>>. Don't be a stranger!"
    scene.text(`"Okay, have a nice day ${((s as any).model ?? 0)?.['nickname'] ?? ''}. Don't be a stranger!"`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about her', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'chat_personal');
  } },
    { label: 'Talk about modelling', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'model_talk');
  } },
    { label: 'Talk about sex', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'sex_talk');
  } },
  ]);
  scene.build();
}

function enterChatPersonal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anastasia ?? 0)?.['sex'] === 0) {
    scene.actions([
      { label: 'Tell her you saw her having sex in the empty set', goto: ['model_anastasia', 'anastasiasex'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'chat_options');
  } },
    { label: 'Ask about food', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"Do you know if there are any good places to eat around here?"');
    // TODO-QSP: dynamic text: Anastasia suddenly grows very serious."<<$model['firstname']>>, you should know ...
    scene.text(`Anastasia suddenly grows very serious."${((s as any).model ?? 0)?.['firstname'] ?? ''}, you should know that as a model and a young woman, a balanced diet is one of the most important things you can have. That is why I take the time to cook all my own food and make sure that I am getting all my nutrients."`);
    scene.text('You nod in understanding. She\'s right, maybe you should be paying more attention to what you eat.');
    scene.text('"Young Mari hasn\'t been telling you to go to that burger joint has she?" she says in an admonishing tone.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChatPersonal(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Ask how she stays in shape', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    // TODO-QSP: dynamic text: "Oh, that's a hard one <<$model['nickname']>>. I myself barely have time to spar...
    scene.text(`"Oh, that's a hard one ${((s as any).model ?? 0)?.['nickname'] ?? ''}. I myself barely have time to spare outside of the studio. A balanced diet really helps, but I find the best way is to just stay as active as you can. Group activities really help."`);
    scene.actions([
      { label: '"Group activities? You mean like sports?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    if (((s as any).anastasia ?? 0)?.['sex'] === 0) {
      scene.text('"Hmm… In a way I suppose so…" she says somewhat mischeviously.');
      scene.text('<i>Huh?</i>');
      scene.text('You think you\'re more confused now than before you asked.');
    } else {
      scene.text('"You know what I mean!" she says with a wide smile. "You\'ve seen me doing it! Sex, silly!" ');
      scene.text('You blush as you think back to all the times you\'ve walked in on her being energetically fucked by multiple men.');
      scene.text('Before you can say anything she starts to elaborate.');
      scene.text('"Like I said, I rarely have time to go to the gym, fitting my exercise in with my work is one of the best ways to get it in. A woman can burn more than 150 calories per hour during sex, it\'s a great way to stay in shape. Even more if you\'re being vigorous in the cowgirl position. That one really helps tone your core you know."');
      if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['exercise'] = 1;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChatPersonal(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Ask about her heritage', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('"Ana, I have to ask," you start. "You don\'t look completely Russian. Are you mixed?"');
    scene.text('"You have a very good eye," she smiles at you. "You\'re one hundred percent correct! I\'m a quarter African. My babushka became pregnant with my mother after she was raped by a black man."');
    scene.text('"Oh my!"');
    scene.text('Your eyes go wide in shock. As open as Anastasia is about sex, you certainly did not expect her to say something like that. She reads the surprise in your expression and keeps going, with a twinkle in her eye.');
    scene.text('"That, or it\'s the lie she told my grandfather after having an affair with a black man. I\'m somewhat inclined to believe it\'s the latter, both because of my own taste for black cock and that I have heard many tales indicating my babushka was quite the floozy in her home town. A little place called Pavlovsk, just outside the city limits. Have you heard of it?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChatPersonal(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterModelTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anastasia ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['model_exp'] = ((s as any).daystart ?? 0);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/15.jpg');
    scene.text('"You must always stay calm, confident, and in control when modelling," she says, suddenly striking a pose. "Remember, you are a beautiful and graceful young woman. As long as you maintain confidence in yourself, that same confidence will shine through to your posture.');
    scene.text('You thank her for her advice and you\'ll try to keep it in mind.');
    qspCall(s, 'exp_gain', 'mdlng', 4);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModelTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'chat_options');
  } },
    { label: 'Ask her how she became a model', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/9.jpg');
    scene.text('"How did you become a model Anastasia?"');
    scene.text('"Oh, this story could take a while for an old gal like me," she says, sitting down. "It all began when I graduated school. I grew up in this city you know, surrounded by the business, the glamour, the rush. Naturally, I needed a job. I was 18, I was inexperienced, and I had no qualifications other than my diploma and that I was pretty. I found that I could get a job as a secretary for quite a bit of money, but I needed a secretarial diploma to get hired. They have courses at the community center in the industrial area, but it cost more money than I had. So to get that, I did nude modelling here."');
    scene.text('"But-"');
    scene.text('She interrupts you by holding up her hand, telling you to wait for her to finish.');
    scene.text('"It was a real spur of the moment thing. One second I was thinking how much money I needed for the course, the next thing I realized I was handed a flyer that said, <b>"Big money for nude models! Inquire at Aphrodite Photography!"</b> So I came."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/4.jpg');
    scene.text('"I was such a silly girl back then," she gushes. "Didn\'t have a clue about what I was doing, photographers had to come up and re-arrange me all the time because I couldn\'t get into the right poses. Oh, to be young… Anyways, after a few weeks I had enough money to take the secretarial course. I continued shooting here at the studio between classes to support myself and 10 short classes later, I was issued my diploma!"');
    scene.text('She smiles brightly at you before fading into a dramatic and pouty frown. "But being a secretary wasn\'t all was cracked up to be. The days were boring, the bosses were inattentive, and everything I had to do was repetitive and menial. I found myself daydreaming about being back in the studio and I realized, \'Well, why not go back?\' So I quit my job as a secretary and I\'ve been modelling here ever since."');
    scene.actions([
      { label: '"Wow…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/3.jpg');
    scene.text('"Wow Anastasia… That was quite the story."');
    scene.text('She smiles at you and says, "I\'m glad I wasn\'t too boring for you."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModelTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).anastasia ?? 0)?.['sex'] === 1) {
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask for sex advice', goto: ['model_anastasia', 'anastasiasextalk'] },
    { label: 'What\'s your favorite thing to do?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('"What\'s your favorite thing to do in sex?" you ask Anastasia.');
    scene.text('"Well, I am naturally more of a giver than a receiver. I get off knowing that the other person is getting off," she smiles warmly. "So most times, I ask them what they want and I give it to them, gaining satisfaction that way. Blowjobs, titjobs, and doggy style tend to be the most popular requests.');
    scene.text('"But if I\'m being honest, I love it when a man knows how to eat pussy. Sex is wonderful and nothing can substitute the feeling of a nice, hard, cock inside you, but when a man knows what he\'s doing down there- oh my! I could practically make him drown in it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAnastasiasex(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).anastasia) (s as any).anastasia = {}; (s as any).anastasia['sex'] = 1;
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
  scene.text('"Oh you saw that?" She barely even reacts to what you said. She doesn\'t appear to be surprised or embarrassed at all.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/2.jpg');
    scene.text('"Just one of the perks of being the top model in Russia." She pauses for a moment to run her hands through her hair, almost like she\'s stretching…');
    scene.text('"All the men end up wanting to fuck you."');
    if (((s as any).stat ?? 0)?.['men_fucked'] >= 10) {
      scene.actions([
        { label: 'I know what you mean', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/3.jpg');
    scene.text('"Oh yeah, I know what you mean," you nod.');
    scene.text('"Oh?"');
    if (((s as any).pcs_cupsize ?? 0) >= 25) {
      scene.actions([
        { label: 'I\'ve got big tits', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I've got big tits too," you grin, looking down meaningfully at your <<$titsize>...
    scene.text(`"I've got big tits too," you grin, looking down meaningfully at your ${((s as any).titsize || '')} breasts. "Boys wouldn't be boys if they didn't drool over the thought of fucking busty girls like me.`);
    scene.text('"True," she smirks. "Though they will pay more to fuck <i>famous</i> busty girls,"');
    if (((s as any).stat ?? 0)?.['prostitution_count'] > 0) {
      scene.actions([
        { label: 'Oh! We can do that here?', goto: ['model_anastasia', 'anastasiasex3'] },
      ]);
    }
    scene.actions([
      { label: 'Pay?', goto: ['model_anastasia', 'anastasiasex2'] },
    ]);
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Showing them your tits does that', handler: (st: GameState) => {
    scene.text('"Yeah, flashing your tits tends to make boys want to fuck you," you grin.');
    scene.text('"You sly little minx you!" she chuckles. "I won\'t deny that I certainly teased enough boys during my youth as well. Though grown men tend to pay more for a fuck when they see your breasts on a magazine cover instead of pulled out of your blouse in the park."');
    if (((s as any).stat ?? 0)?.['prostitution_count'] > 0) {
      scene.actions([
        { label: 'Oh! We can do that here?', goto: ['model_anastasia', 'anastasiasex3'] },
      ]);
    }
    scene.actions([
      { label: 'Pay?', goto: ['model_anastasia', 'anastasiasex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Being pretty makes people want you', handler: (st: GameState) => {
    scene.text('"It\'s not like I wasn\'t pretty before I became a model," you shrug, smiling back. "Men want to fuck pretty girls."');
    scene.text('"Men want to fuck anything that has two legs and a pussy dear. Though they will pay more to fuck <i>famous</i> pretty girls," she smirks.');
    if (((s as any).stat ?? 0)?.['prostitution_count'] > 0) {
      scene.actions([
        { label: 'Oh! We can do that here?', goto: ['model_anastasia', 'anastasiasex3'] },
      ]);
    }
    scene.actions([
      { label: 'Pay?', goto: ['model_anastasia', 'anastasiasex2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Uh…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/3.jpg');
    scene.text('Her candor catches you off guard, especially with how nonchalantly she says it. You didn\'t expect her to be so open about her sexuality like that.');
    // TODO-QSP: dynamic text: "What's the matter <<$model['nickname']>>? You look shocked." She says, laying d...
    scene.text(`"What's the matter ${((s as any).model ?? 0)?.['nickname'] ?? ''}? You look shocked." She says, laying down on a couch of one of the nearby sets. Your teeth make a clicking sound as they snap together, not realizing your mouth had been agape. Following that, you can't help but be excruciatingly aware of her wide open legs and her pussy that is spreading with them.`);
    scene.text('"Oh come now darling, you know that even I have my needs don\'t you? Sexually and financially that is."');
    scene.text('The word "financially" makes you pause, making you forget whatever it was you were about to say.');
    scene.actions([
      { label: '"Financially?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/5.jpg');
    scene.text('Anastasia sits up a bit. "Yes, financially. I need money to live don\'t I?"');
    scene.text('"No, wait! That\'s not what I meant! Who were those men?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/4.jpg');
    scene.text('She leans back again and closes her eyes as if she were tired. "My clients of course. I\'m the number one model in the city, it makes it easy to do some escorting on the side. It\'s a good deal for everyone. They get to live their dream, the studio makes more money on set rental, and in the end I get to supplement my sexual and financial needs. Men will pay a lot of money to have sex with a model like me."');
    scene.actions([
      { label: '"But-"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/6.jpg');
    // TODO-QSP: dynamic text: Before you can say anything she interrupts you as she gets on her knees and stic...
    scene.text(`Before you can say anything she interrupts you as she gets on her knees and sticks her ass out towards you, saying, "Especially like this." The pose is particularly provocative, now showing her slightly parted pussy. "A tip for you ${((s as any).model ?? 0)?.['nickname'] ?? ''}, if you ever get to a position in your career like mine, you'll find that this position is especially versatile."`);
    scene.text('"If they want to fuck you from behind, they can pick either hole. If you\'re on top, all you have to do is work your bum like this," she starts moving her hips up and down, simulating a cowgirl position, "and they\'ll hit all the right spots. For you and for them. They cum in no time and so do I! As you saw, this position is also great if you want to service two, or even three men at once."');
    scene.actions([
      { label: '"No, wait! I wasn\'t asking about any of this!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/9.jpg');
    // TODO-QSP: dynamic text: "<<$model['nickname']>>," she says, "if you're going to have a career in this in...
    scene.text(`"${((s as any).model ?? 0)?.['nickname'] ?? ''}," she says, "if you're going to have a career in this industry you can't be naive about how it works. This is just another way to use your fame."`);
    scene.text('She sounds vaguely disappointed in you, like a mother trying to teach her child manners.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    // TODO-QSP: dynamic text: She picks up her panties and gets up again. "Listen <<$model['nickname']>>, you'...
    scene.text(`She picks up her panties and gets up again. "Listen ${((s as any).model ?? 0)?.['nickname'] ?? ''}, you're great at this job, and one day you might be as famous or even more famous a model than I am. And I want you to be ready when it happens. So just in case, my advice to you is to make sure you're on birth control, make sure you enjoy yourself, and <i>always</i> charge extra for creampies, swallowing, and anal."`);
    // TODO-QSP: dynamic text: And with that, she walks away, leaving you in the confused state of feeling like...
    scene.text(`And with that, she walks away, leaving you in the confused state of feeling like your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} just gave you advice on how to make the transition from nude model to professional hooker.`);
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
  scene.build();
}

function enterAnastasiasex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/5.jpg');
  scene.text('"Pay?" you ask quizzically.');
  scene.text('"Yes. Pay."');
  scene.text('Anastasia regards you with a slight tilt of the head. "Those men were my clients. Who did you think they were?"');
  scene.text('"Oh," you say. "I thought you were just doing it for fun."');
  scene.text('"Well, I do still fuck for fun," she smiles. "But it\'s much more efficient to charge for it as well. I\'m the number one model in the city after all, it makes it easy to do some escorting on the side. It\'s a good deal for everyone. They get to live their dream, the studio makes more money on set rental, and in the end I get to supplement my sexual and financial needs. Men will pay a lot of money to have sex with a model like me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Makes sense', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"Makes sense I suppose," you say, musing what Anastasia\'s just told you. She picks up her panties and stands, regarding you warmly with a motherly touch on your cheek.');
    // TODO-QSP: dynamic text: "Oh <<$model['firstname']>>, you're such a big girl," she says. "Not everyone wo...
    scene.text(`"Oh ${((s as any).model ?? 0)?.['firstname'] ?? ''}, you're such a big girl," she says. "Not everyone would understand like you do. With an attitude like yours, you'll go far in this industry. I see the potential in you to be as famous or even more famous than I am one day! Can I give you some advice?"`);
    scene.text('"Of course Anastasia," you nod, leaning in.');
    scene.text('"Three important things," she says, whispering in your ear. "Make sure to enjoy yourself, never forget your birth control, and <i>always</i> charge extra for creampies, swallowing, and anal."');
    scene.text('With that, she stands back and gives you an eager smile. "Got it?"');
    scene.actions([
      { label: 'Uhh, yeah…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"Uhh, yeah…" you say, trailing off. You weren\'t sure what kind of advice you were expecting, but it sure wasn\'t professional hooking tips.');
    scene.text('"Words to live by dear," she smiles. "Words to live by. If you ever need more advice on that kind of thing, don\'t be afraid to ask. Don\'t be a stranger!"');
    scene.text('With that, she bids you farewell, walking towards another part of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"Yes Anastasia" you say, nodding obediently.');
    scene.text('"Words to live by, dear," she smiles. "Words to live by. If you ever need more advice on that kind of thing, don\'t be afraid to ask. Don\'t be a stranger!"');
    scene.text('With that, she bids you farewell, walking towards another part of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasiasex3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
  scene.text('"We can do that here?" you exclaim.');
  scene.text('"But of course," she smiles at you. "We\'re erotic models in the cultural capital of the nation my dear, it makes it easy to do some escorting on the side. The studio won\'t complain because it makes more money on set rental, and at the same time, girls like you and me get to supplement our financial needs, not to mention all the enjoyable fucking we get to do. Men will pay a lot of money to have sex with a models like us."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wow!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('"Wow!"');
    scene.text('"Yes indeed, we are quite privileged to have the opportunities we do. However, I really must be going deary. I have an appointment soon." You nod as she stands and picks up her panties. "Let me know if you\'d like to get started on escorting. I\'d love to help introduce you to the company. But before I go, may I offer some advice?"');
    scene.text('You listen eagerly as Anastasia leans in to whisper in your ear.');
    scene.text('"There are three things you need to know in this business. Make sure to enjoy yourself, never forget your birth control, and <i>always</i> charge extra for creampies, swallowing, and anal."');
    scene.text('She stands back, meeting your eyes with a smile. "Words to live by my dear. Words to live by. But I must be off now. Don\'t be a stranger!"');
    scene.text('With that, she bids you farewell, walking towards another part of the studio.');
    scene.text('<b>dev note: escorting business still WIP</b>');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnastasiasextalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
  // TODO-QSP: dynamic text: "Sure <<$model['nickname']>>, what would you like help with?"
  scene.text(`"Sure ${((s as any).model ?? 0)?.['nickname'] ?? ''}, what would you like help with?"`);
  scene.text('If you\'re being honest, her reaction is still a little strange to you. She\'s as nonchalant about this as if you asked her for advice about knitting.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    qspCall(st, 'model_anastasia', 'chat_options');
  } },
    { label: 'Ask about blowjobs', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/1.jpg');
    scene.text('You decide asking her for advice on giving blowjobs.');
    scene.text('"You want advice on blowjobs? Of course dear. A couple tricks to remember:');
    scene.text('First of all, watch your teeth. A penis is very sensitive so even slight grazing can be painful. To prevent that from happening, you have to curl your lips over your top teeth and stick your tongue out wide and flat to cover the bottom ones. Drool as much as you can, it\'ll keep your lips from splitting if they\'re dry and it really helps keep his cock nice and slick for reduced friction. It will also subconsciously cause you to open your mouth wider which can be helpful for especially girthy boys. Use lubricant if you can\'t drool enough.');
    scene.text('Second of all, if you\'re trying to go for depth, the most important thing is to keep your throat relaxed. If your throat is tense, your gag reflex will kick in and you\'ll choke. Nothing kills the mood like vomitting all over someone\'s cock does it?" she says with a rueful smile. "Also, don\'t give head for too long. That\'s how you get lockjaw."');
    scene.text('"Is there anything else you wanted to ask about?"');
  } },
    { label: 'Ask about sex', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/8.jpg');
    scene.text('You decide asking her about regular sex.');
    scene.text('"You want advice on vanilla sex? Of course dear." She leads you over to some nearby set furniture and bends over.');
    scene.text('"If you\'re doing it from behind, try it standing up. Get on your toes and stick your bum out like this. Being on the tips of your toes will make your leg muscles tense up and natural cause your vagina clench. Your vaginal walls will clamp down on his cock and will not only make it more enjoyable for the both of you but your orgasm will also be much more intense, so make sure you\'re against a sturdy surface or that he\'s ready to catch you when you cum or you might fall over!" she says with a laugh. Getting serious again she continues, "Watch out for cramps though! I wouldn\'t recommend this with a boy who has a lot of stamina. Although I bet you don\'t know many of those do you?" she says with a sly grin.');
    if (((s as any).stat ?? 0)?.['men_fucked'] < 5) {
      scene.text('You blush at the inquiry.');
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] > 20) {
        scene.text('You grin back.');
      }
    }
    scene.text('"Is there anything else you wanted to ask about?"');
  } },
    { label: 'Ask about anal', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/face.jpg');
    scene.text('You decide asking her about anal.');
    scene.text('"You want advice on anal? Of course dear. First, always be sure to use an enema. Doing anal can get really messy if you don\'t. I won\'t talk about the consequences, just be sure to never agree to it unless you\'ve cleaned yourself out. For actual technique, in some ways it\'s just like giving a blowjob: you need to relax. If you don\'t relax, he\'ll never get in the right way and you risk tearing something and anal bleeding. Lubricant is key. Don\'t let any of the boys lie to you by saying spit or pussy juice will be enough. It\'s not. Always make sure he\'s lubed up so he can slip in nice and easy. Rough sex can feel good too, but be careful to not let anyone pound you too hard! Accidents <i>can</i> happen. Remember that you should always be in control and it\'s up to you if you want to keep going or stop," she says in an cautioning tone. "It\'s your body and you have a right to decide what happens to it."');
    scene.text('"Is there anything else you wanted to ask about?"');
  } },
    { label: 'Ask about cunnilingus', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/3.jpg');
    scene.text('You decide asking her about cunnilingus.');
    scene.text('"You want advice on cunnilingus? For giving or receiving? Doesn\'t matter either way," she says as she lays down on a nearby sofa and spreads her legs. "The most important thing is to concentrate on the little man in the boat, your clit!" she says, massaging hers with her fingers. "He\'s a little narcissist, but as long as all the attention is on him he\'ll be happy to receive it and you or whoever you\'re giving head to will be happy too," she says with a smile.');
    scene.text('"Is there anything else you wanted to ask about?"');
  } },
    { label: 'Having sex with multiple men at once', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/6.jpg');
    scene.text('Embarrassed that you even considered asking her, you blush fiercely and mumble, "I wanted to know if you had any suggestions for having sex with more than one boy…"');
    scene.text('"Do you mean only two? Or did you mean three to five?" she says glibly. "I guess it doesn\'t matter very much. Like I told you before, this position is exceptionally versatile," she says as she gets on a nearby sofa and points her ass towards you.');
    scene.text('"The beauty of this position is that it can be used for all situations! Whether you\'re sucking and fucking or doing some double penetration or sucking while being doubly penetrated or even taking on five boys at once!" she says while moving her hands to jerk off two imaginary cocks, "this position will cover it all."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/anastasia_p/talking/14.jpg');
    if (((s as any).pcs_inhib ?? 0) < 50) {
      scene.text('"It\'s also the most comfortable one," she says while turning over and spreading her legs. You\'re starting to get even more embarrassed. This explanation is taking longer than you thought and several people have passed by while Anastasia continues to talk about the intricacies of being gangbanged at an educational volume. You\'re once again reminded of a mother, loudly talking about her daughter\'s embarrassing hobbies so everyone can hear. You\'re legitimately worried that people around the studio will think you\'re a slut.');
      scene.text('"See, if you try <i>this</i> position, bum down and pussy forward, even with only two cocks, it\'s very hard to handle," she elaborates. "It\'s almost impossible to find a comfortable way to give blowjobs and if you\'re doing double penetration, the angle is very awkward on your asshole. <i>Very</i> uncomfortable. If you\'re going to be penetrated by more than one boy or girl, I highly recommend the first position."');
      scene.text('You blush even harder as she casually slips in the option of using this position for girls with strap-ons. Just when you thought it couldn\'t get any more embarrassing…');
    } else {
      scene.text('"It\'s also the most comfortable one," she says while turning over and spreading her legs. Several people passed by while Anastasia continues to talk about the intricacies of being gangbanged at an educational volume. You listen to her carefully but spare a glance at the models passing by. They don\'t seem to be surprised by her behavior at all. You guess her reputation is a well known and no one actually minds or cares.');
      scene.text('"See, if you try <i>this</i> position, bum down and pussy forward, even with only two cocks, it\'s very hard to handle," she elaborates. "It\'s almost impossible to find a comfortable way to give blowjobs and if you\'re doing double penetration, the angle is very awkward on your asshole. <i>Very</i> uncomfortable. If you\'re going to be penetrated by more than one boy or girl, I highly recommend the first position."');
      scene.text('You nod understandingly at her explanation, raising an eyebrow when you notice she didn\'t discount the option for girls with strap-ons…');
    }
    scene.text('"Is there anything else you wanted to ask about?"');
    scene.actions([
      { label: '"Yeah, I actually wanted to ask…"', goto: ['model_anastasia', 'anastasiasextalk'] },
      { label: '"No, that was all"', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk1.mp4');
    scene.text('You thank her for the advice and tell her you need to be on your way.');
    // TODO-QSP: dynamic text: "Glad I could help <<$model['nickname']>>. Don't be a stranger!" she says as she...
    scene.text(`"Glad I could help ${((s as any).model ?? 0)?.['nickname'] ?? ''}. Don't be a stranger!" she says as she walks off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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
    case 'anastasia1':
      enterAnastasia1(s, scene);
      break;
    case 'anastasia2':
      enterAnastasia2(s, scene);
      break;
    case 'anastasia3':
      enterAnastasia3(s, scene);
      break;
    case 'anastasia4':
      enterAnastasia4(s, scene);
      break;
    case 'anastasia5':
      enterAnastasia5(s, scene);
      break;
    case 'anastasia6':
      enterAnastasia6(s, scene);
      break;
    case 'anastasia_chat':
      enterAnastasiaChat(s, scene);
      break;
    case 'chat_options':
      enterChatOptions(s, scene);
      break;
    case 'chat_personal':
      enterChatPersonal(s, scene);
      break;
    case 'model_talk':
      enterModelTalk(s, scene);
      break;
    case 'sex_talk':
      enterSexTalk(s, scene);
      break;
    case 'anastasiasex':
      enterAnastasiasex(s, scene);
      break;
    case 'anastasiasex2':
      enterAnastasiasex2(s, scene);
      break;
    case 'anastasiasex3':
      enterAnastasiasex3(s, scene);
      break;
    case 'anastasiasextalk':
      enterAnastasiasextalk(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const model_anastasia: LocationDef = {
  name: 'model_anastasia',
  title: 'As you\'re walking around the different sets at the agency a ',
  region: 'other',
  enter: enter,
};
