import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIntercom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) > 10  ||  ((s as any).month ?? 0) < 4) {
    scene.img('images/characters/city/alexandria/alexhome2.jpg');
  } else {
    scene.img('images/characters/city/alexandria/alexhome.jpg');
  }
  scene.text('The house is situated on the more wealthy side of the neighborhood. It\'s big and expensive, but not by too much, and sits in a nebulous middle point, making it utterly forgettable, yet classy. You wonder if the neighnours know that one of the most powerful beings in the world lives here.');
  scene.actions([
    { label: 'Call the intercom', handler: (st: GameState) => {
    if (((s as any).succubusQW ?? 0) > 1  &&  ((s as any).succubusQW ?? 0) < 5  &&  (!((s as any).AlexSuc ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).AlexSuc = 1;
      qspCall(s, 'stat', '');
      scene.text('<center><b>Aleksei</b></center>');
      scene.img('images/characters/city/alexandria/alexandria2.jpg');
      scene.text('It only takes a minute for Aleksei to open the door and greet you, but as soon his eyes cross yours, he freezes and you feel a tingle crawl down your spine.');
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>?" He sounds… intrigued, and signals towards his study. Taking...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}?" He sounds… intrigued, and signals towards his study. Taking his cue, you make your way inside, feeling his gaze on your back the whole way.`);
      // TODO-QSP: dynamic text: "Why are you doing that, <<$pcs_lastname>>?"
      scene.text(`"Why are you doing that, ${((s as any).pcs_lastname ?? 0)}?"`);
      scene.text('You freeze in your tracks and blink, confused, as you realize that your hips were swaying… Were you trying to entice Aleksei? You turn as you feel magic wash over you, and see Aleksei examining you with curiosity.');
      // TODO-QSP: dynamic text: "Fascinating, <<$pcs_lastname>>. Hmm… you seem to be pupating… changing on a mag...
      scene.text(`"Fascinating, ${((s as any).pcs_lastname ?? 0)}. Hmm… you seem to be pupating… changing on a magical level… hmm… Can you explain how?"`);
      scene.text('This is your best chance to understand what is happening, so you explain the fairy, the dreams… and the urges. He listens to you, extremely intrigued.');
      // TODO-QSP: dynamic text: "You need to look for specialized help in the form of a flesh crafter wizard, <<...
      scene.text(`"You need to look for specialized help in the form of a flesh crafter wizard, ${((s as any).pcs_lastname ?? 0)}. I am loath to say this, but the nearest one with the proper training is that trickster who has already inserted herself into your life. I urge you to go to her for help."`);
      scene.text('Saying this, he walks past you towards his study and chair.');
      scene.actions([
        { label: 'Continue', goto: ['alexandriaHome', 'study'] },
      ]);
    } else {
      if (qspFunc(s, 'succubus', 'active', 5)  &&  ((s as any).AlexSuc ?? 0) === 1) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        (s as any).AlexSuc = 2;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Aleksei</b></center>');
        scene.img('images/characters/city/alexandria/alexandria2.jpg');
        scene.text('After a minute, Aleksei opens the door to greet you, and your senses flare. He isn\'t just an attractive woman, his power beats with the force of a storm. That means two things: Aleksei is far, far more dangerous than what you believed and he must be an incredibly tasty lie!');
        if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
          // TODO-QSP: dynamic text: "Interesting, <<$pcs_lastname>>. You seem to be fitting in well to your new inca...
          scene.text(`"Interesting, ${((s as any).pcs_lastname ?? 0)}. You seem to be fitting in well to your new incarnation as a Succubus."`);
          scene.text('He doesn\'t appear surprised, more like he was expecting you. As the feeling of being magically examined tingles over your skin, you can\'t resist twirling around so he can appreciate your perfection. Aleksei just raises an unimpressed brow.');
          // TODO-QSP: dynamic text: "If I must be sincere <<$pcs_lastname>>, I'm not exactly happy with your chosen ...
          scene.text(`"If I must be sincere ${((s as any).pcs_lastname ?? 0)}, I'm not exactly happy with your chosen path, but I have hope that it will not be a hindrance to your magic development."`);
          scene.text('Saying this, he passes by your side towards his study and chair.');
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I am disappointed that you have submitted to the Succubae si...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}, I am disappointed that you have submitted to the Succubae siren call."`);
          scene.text('He doesn\'t appear surprised, more like he was expecting you, and as the feeling of being magically examined tingles over your skin, you feel more than a little mortified at her displeased gaze.');
          // TODO-QSP: dynamic text: "If I must be sincere <<$pcs_lastname>>, I'm not surprised that you chose a deca...
          scene.text(`"If I must be sincere ${((s as any).pcs_lastname ?? 0)}, I'm not surprised that you chose a decadent and hedonistic lifepath over your magical studies."`);
          scene.text('Saying this, he past you towards his study and chair.');
        }
        scene.actions([
          { label: 'Continue', goto: ['alexandriaHome', 'study'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Aleksei</b></center>');
        scene.img('images/characters/city/alexandria/alexandria.jpg');
        // TODO-QSP: dynamic text: It only takes a minute for Aleksei to open the door and greet you with a short, ...
        scene.text(`It only takes a minute for Aleksei to open the door and greet you with a short, polite "${((s as any).pcs_lastname ?? 0)}," before turning and walking back inside towards his study.`);
        scene.text('You walk in behind him, examining his home\'s decorations. Most of the windows are closed, limiting any exterior peeking and brightness that, combined with the Victorian furniture, gives the interior a somber and mysterious aura.');
        // TODO-QSP: dynamic text: "Well, <<$pcs_lastname>>, what can I do for you?"
        scene.text(`"Well, ${((s as any).pcs_lastname ?? 0)}, what can I do for you?"`);
        scene.text('Reaching the study, he sits in a chair and lights a cigarette, waiting for you to continue.');
        scene.actions([
          { label: 'Continue', goto: ['alexandriaHome', 'study'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/alexstudy.jpg');
  scene.text('This is Aleksei\'s studio, complete with desk and chairs, where he seems to spend most of his time. The room is full of wall to wall bookcases with carefully organized tomes of knowledge waiting to be consulted. In a corner of the room, you see a table of weird-looking trinkets.');
  scene.text('Besides that and some pictures that complement the ornate decor, the only other thing that calls your attention is a looming pendulum clock, slowly marking the time.');
  if (((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 7) {
    scene.text('Aleksei is sitting in a chair behind his desk, filling the room with the smoke from his cigarette.');
    if (((s as any).AlexandriaQW ?? 0) > 13  &&  ((s as any).AlexandriaQW ?? 0) < 20) {
      scene.actions([
        { label: '"About that sword"', goto: ['alexandriaChat', 'sword'] },
      ]);
    }
    scene.actions([
      { label: 'Chat', goto: ['alexandriaChat', 'chat'] },
      { label: 'Ask about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Ask about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Training', goto: ['alexandriaChat', 'training'] },
    ]);
  } else {
    scene.text('Nobody is currently in this room. You wonder if you should peek inside.');
  }
  scene.actions([
    { label: 'Leave the house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_suburbs', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'intercom':
      enterIntercom(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    default:
      enterIntercom(s, scene);
      break;
  }
}

export const alexandriaHome: LocationDef = {
  name: 'alexandriaHome',
  title: 'Aleksei',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The house is situated on the more wealthy side of the neighborhood. It\'s big and expensive, but not by too much, and sits in a nebulous middle point, making it utterly forgettable, yet classy. You wonder if the neighnours know that one of the most powerful beings in the world lives here.'],
  enter: enter,
};
