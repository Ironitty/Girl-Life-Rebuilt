import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGoodForYou(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['good_for_you'] === 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['blue_ball'] !== 1) {
    scene.actions([
      { label: 'Was it good for you?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    (s as any).sex_ev['good_for_you'] = 1;
    scene.img('images/shared/sex/after/pillow_talk4.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('"Was it good for you?" you ask pleasantly.');
    qspCall(s, 'sex_ev_favorite_part', 'good_for_you2');
  } },
    ]);
  }
  scene.build();
}

function enterBoyGoodForYou(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['good_for_you'] = 1;
  (s as any).sex_ev['boy_topics'] = ((s as any).sex_ev['boy_topics'] ?? 0) - (1);
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      // TODO-QSP: dynamic text: "Damn! You're incredible!" <<$npcdesc>> says. "I haven't come that much in ages....
      scene.text(`"Damn! You're incredible!" ${((s as any).npcdesc ?? 0)} says. "I haven't come that much in ages."`);
    } else {
      // TODO-QSP: dynamic text: "That was pretty good," <<$npcdesc>> smiles at you.
      scene.text(`"That was pretty good," ${((s as any).npcdesc ?? 0)} smiles at you.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 4 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      // TODO-QSP: dynamic text: "Holy shit," <<$npcdesc>> pants. "You emptied my balls out."
      scene.text(`"Holy shit," ${((s as any).npcdesc ?? 0)} pants. "You emptied my balls out."`);
    } else {
      // TODO-QSP: dynamic text: "Was it good for you too?" <<$npcdesc>> asks, grinning tiredly at you.
      scene.text(`"Was it good for you too?" ${((s as any).npcdesc ?? 0)} asks, grinning tiredly at you.`);
    }
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'boy_good_for_you_options'
  }
  scene.build();
}

function enterBoyGoodForYouOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Lukewarm', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'boy_good_for_you_options'
  } },
      { label: 'Shrug', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    scene.text('All you can do is shrug in response.');
    scene.text('"It was fine I guess," you say apathetically.');
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you2'
  } },
      { label: 'It was nice', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'smile3', 'jpg');
    scene.text('"It was nice," you say, somewhat cheerfully.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
    { label: 'Good', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'boy_good_for_you_options'
  } },
      { label: 'It was nice', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'smile3', 'jpg');
    scene.text('"It was nice," you reply with a soft smile.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'I had fun', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"I had fun too," you smile back. "Was it... good...? For my first time...?');
    } else {
      scene.text('"I had fun too," you smile back.');
    }
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you2'
  } },
    ]);
  } },
    { label: 'Bad', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['deflowered'] === 0) {
      scene.actions([
        { label: 'I\'ve had better', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
      scene.text('"I\'ve had better," you pant tiredly, still coming down from your orgasm.');
    } else {
      scene.text('"I\'ve had better," you shrug ambivalently.');
    }
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] < 1) {
      scene.actions([
        { label: 'I didn\'t cum (annoyed)', handler: (st: GameState) => {
    scene.text('"Would have been nice if I got to come," you sigh passive aggressively.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'boy_good_for_you_options'
  } },
    ]);
  } },
    { label: 'Blush (virgin)', handler: (st: GameState) => {
    scene.text('"Really?" you ask, immediately blushing furiously.');
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Yeah, you were amazing," he smiles at you. "Really good lay your first time!"');
      scene.text('Your blush deepens.');
      // TODO-QSP: xgt 'sex_ev_virgin', 'first_time_talk', 'speaking_of'
    } else {
      scene.text('"Yeah, you were amazing," he smiles at you.');
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    }
  } },
    { label: 'I could still go more', handler: (st: GameState) => {
    scene.text('"I could still go for more," you grin.');
    scene.text('"Fuck, you\'re insatiable!" he laughs.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Hey, don\'t forget I was a virgin until five minutes ago," you laugh with him. "I just found out how fun sex is. Of course I want more!"');
    } else {
      scene.text('"I was really close to my next orgasm," you reply, wistfully rubbing your thighs together.');
      if (((s as any).age ?? 0) < 20) {
        scene.text('"I\'m a horny teenager, what do you expect?" you reply, rubbing your thighs together.');
      } else {
        scene.text('"I\'m a just a horny girl," you reply, rubbing your thighs together.');
      }
      // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you2'
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'good_for_you':
      enterGoodForYou(s, scene);
      break;
    case 'boy_good_for_you':
      enterBoyGoodForYou(s, scene);
      break;
    case 'boy_good_for_you_options':
      enterBoyGoodForYouOptions(s, scene);
      break;
    default:
      enterGoodForYou(s, scene);
      break;
  }
}

export const sex_ev_favorite_part: LocationDef = {
  name: 'sex_ev_favorite_part',
  region: 'other',
  enter: enter,
};
