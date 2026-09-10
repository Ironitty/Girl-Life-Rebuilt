import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStoryIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).lariska_ball = ((s as any).daystart ?? 0);
  (s as any).LariskaQW['story'] = 1;
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You carefully walk up behind her, trying your best not to distract her as she effortlessly smacks the ball into the wall and having it return to her hands over and over again…');
  // TODO-QSP: $OpenInnerThought + '"What is she doing hanging around here,"' + $CloseInnerThought + ' you wonder.'
  scene.text('You stand there, observing her, trying to figure out why here of all places she would do this, instead of at a safer place like the Community Center, where she wouldn\'t have to worry about being messed with by the local gopniks. You know she doesn\'t live nearby either, which just feeds your curiosity.');
  scene.text('She catches the ball and stops, looking around as if trying to find someone. Noticing someone is behind her, she quickly spins around, but when she realizes it\'s you, her face goes bright red and she literally staggers backwards in surprise.');
  // TODO-QSP: $OpenInnerThought + '"I think she was looking for me,"' + $CloseInnerThought + ' you say to yourself...
  // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>," she says, sounding nervous. "I was just practicing my c...
  scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}," she says, sounding nervous. "I was just practicing my control. Impressed?"`);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Yes!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You nod your head, "Yeah, you\'re amazing, Lariska. I didn\'t know you were such a good volleyball player!');
    // TODO-QSP: dynamic text: Lariska, breaks out in a huge smile and she says "Thanks, <<$pcs_nickname>>. I r...
    scene.text(`Lariska, breaks out in a huge smile and she says "Thanks, ${((s as any).pcs_nickname ?? 0)}. I really got into the zone this time, usually I don't do this good."`);
    scene.text('"No need to be humble, it was really amazing, trust me. I\'ll let you go back to it, I don\'t want to bother you." you say with a smile.');
    scene.text('Smiling back, Lariska turns uncertainly back towards the wall and hits the ball again, only this time she misses it and it smacks her hard in the face.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pretend not to see that', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
    qspCall(s, 'stat', '');
  }, goto: ['pav_complex', 'start'] },
      { label: 'Make sure she is OK', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You rush over to her and take her face in your hands, looking at the spot where the ball smacked her in the face. She tries to tell you she is fine, even though the spot is even more red than her blushing face.');
    scene.text('Surprisingly she stops protesting pretty quickly, and you catch her staring at your lips, which are now only a few centimeters from her own.');
    // TODO-QSP: $OpenInnerThought + '"Does she have a crush on me? Is that why she''s hanging around here, maybe loo...
    scene.text('This might be a dangerous thing to do, Christina controls Lariska, and she may not like you messing with her. Kissing her would pretty much be declaring war on Christina, if she ever found out.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'love');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her go', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('Letting go of her face and stepping back seems to bring her to her senses. Stammering something about needing to go, she grabs the ball and runs off, leaving you wondering if you should have kissed her.');
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You slide one hand to the back of her head, cup her chin with the other, and lean in. As soon as your lips touch hers she panics, looks around like a deer caught in headlights, and bolts away looking terrified.');
    scene.text('Chuckling to yourself, you pick up the forgotten volleyball and take it with you. Returning it could be a good excuse to talk to her at school.');
    (s as any).LariskaQW['story'] = 2;
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Play it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('Wanting to play it off nonchalantly, you shake your head, chuckle, and tell her you\'ve seen others pull off even more impressive moves.');
    scene.text('Lariska tries to smile it off, but deep down you know that rattled her fragile ego, making her lash out with "Like you could do it better!"');
    scene.text('"Why would I need to prove myself over such a silly little thing," you say, laughing derisively');
    // TODO-QSP: dynamic text: By now you can clearly see that you've gotten under her skin. "Go away, <<$pcs_n...
    scene.text(`By now you can clearly see that you've gotten under her skin. "Go away, ${((s as any).pcs_nickname ?? 0)}… Or else I'll make you regret it…"`);
    scene.text('Deciding she isn\'t going to give you any more entertainment for the day, you move on. Behind you the bouncing sounds start again, louder than before…');
    scene.actions([
      { label: 'Walk away', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGettingToKnow(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaQW['story'] = 8;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('"So what does your mother do for a living?"');
  scene.text('Lariska turns a bit red and says "She works at a motel."');
  scene.text('You frown, thinking there is no way the apartment looks this nice without there being more to it.');
  scene.text('Seeing you frown, she sighs and says, "She has a second job too. A mansion in the city employs her to… uhm… make their customers happy."');
  scene.text('She fidgets a bit, not looking you in the eye, before saying "She uh… is a dominatrix. You know, black leather and a whip type of thing?"');
  scene.text('You cannot help but giggle at how nervous she is to tell you that, but decide to change the subject and spare her anymore embarrassment.');
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    scene.text('"So when are you going to join the volleyball team? I\'ve seen you practice, you\'re pretty good at it! We could use you on the team."');
    scene.text('"I want to, I just don\'t know if I\'m good enough."');
    scene.text('"You are, you should try," you say, doing your best to encourage her.');
  } else {
    scene.text('"So when are you going to join the volleyball team? I\'ve seen you practice, you\'re pretty good at it! They could use you on the team."');
    scene.text('"I want to, I just don\'t know if I\'m good enough."');
    scene.text('"You are, you should try," you say, doing your best to encourage her.');
    if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 1) {
      scene.text('"I\'m glad you joined the volleyball team, we have a much better chance of winning now that you\'re playing with us."');
      scene.text('She flushes at the praise and says "Thanks for getting me onto the team, I had been wanting to for so long."');
    } else {
      scene.text('"I\'m glad you joined the volleyball team, they have a much better chance of winning now that you\'re playing with them."');
      scene.text('She flushes at the praise and says "Thanks for getting me onto the team, I had been wanting to for so long."');
    }
    scene.text('You spend the next few minutes chatting about random stuff.');
    scene.actions([
      { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'story_intro':
      enterStoryIntro(s, scene);
      break;
    case 'GettingToKnow':
      enterGettingToKnow(s, scene);
      break;
    default:
      enterStoryIntro(s, scene);
      break;
  }
}

export const lariska_storyline: LocationDef = {
  name: 'lariska_storyline',
  title: 'You carefully walk up behind her, trying your best not to di',
  region: 'other',
  description: ['You carefully walk up behind her, trying your best not to distract her as she effortlessly smacks the ball into the wall and having it return to her hands over and over again…'],
  enter: enter,
};
