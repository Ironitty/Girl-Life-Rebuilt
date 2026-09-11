import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGoodForYou(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['good_for_you'] === 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['blue_ball'] !== 1) {
    scene.actions([
      { label: 'Was it good for you?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['good_for_you'] = 1;
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
  ((s as any).sex_ev ?? {})['good_for_you'] = 1;
  ((s as any).sex_ev ?? {})['boy_topics'] = (((s as any).sex_ev ?? {})['boy_topics'] ?? 0) - (1);
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
    scene.actions([{ label: 'Continue', goto: ['sex_ev_favorite_part', 'boy_good_for_you_options'] }]);
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
  }, goto: ['sex_ev_favorite_part', 'good_for_you2'] },
      { label: 'It was nice', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'smile3', 'jpg');
    scene.text('"It was nice," you say, somewhat cheerfully.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'I had fun', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"I had fun too," you smile back. "Was it... good...? For my first time...?');
    } else {
      scene.text('"I had fun too," you smile back.');
    }
  }, goto: ['sex_ev_favorite_part', 'good_for_you2'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    { label: 'I could still go more', handler: (st: GameState) => {
    scene.text('"I could still go for more," you grin.');
    scene.text('"Fuck, you\'re insatiable!" he laughs.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Hey, don\'t forget I was a virgin until five minutes ago," you laugh with him. "I just found out how fun sex is. Of course I want more!"');
    } else {
      if (((s as any).pcs_horny ?? 0) > 80) {
        scene.text('"I was really close to my next orgasm," you reply, wistfully rubbing your thighs together.');
      } else {
        if (((s as any).age ?? 0) < 20) {
          scene.text('"I\'m a horny teenager, what do you expect?" you reply, rubbing your thighs together.');
        } else {
          scene.text('"I\'m a just a horny girl," you reply, rubbing your thighs together.');
        }
      }
    }
  }, goto: ['sex_ev_favorite_part', 'good_for_you2'] },
  ]);
  scene.build();
}

function enterGoodForYou2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'creampie_favorite'"
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).sex_ev ?? 0)?.['mouth_cum_count'] > 0) {
      // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'cum_mouth_favorite'"
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  &&  ((s as any).sex_ev ?? 0)?.['facial_count'] > 0) {
        // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'facial_favorite'"
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits'  &&  ((s as any).sex_ev ?? 0)?.['cum_tits'] > 0) {
          // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'tit_cum_favorite'"
        }
      }
    }
  }
  if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['cuni_orgasm'] > 0) {
    // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'pussyeat_favorite'"
  } else {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['miss_fuck'] === 1) {
      // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'npc_miss_fav1'"
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['doggy_fuck'] === 1) {
        // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'npc_doggy_fav1'"
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['cowgirl_fuck'] === 1) {
          // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'npc_cowgirl_fav1'"
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 1) {
            // TODO-QSP: $favorite_sex_act[] = "xgt 'sex_ev_favorite_part', 'npc_anal_fav1'"
          }
        }
      }
    }
  }
  if (Object.keys((s as any).favorite_sex_act ?? {}).length > 0) {
  } else {
    if (((s as any).sex_ev ?? 0)?.['virgin'] !== 1) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= ((s as any).sex_ev ?? 0)?.['sex_stamina']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"You fucked me so hard my dick hurts," he says grinning. "What about you?"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] < 5  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] !== 1) {
          scene.text('"I could\'ve gone a few more times," he says. "But it wasn\'t bad. How about you?"');
        } else {
          scene.text('"Yeah, it was," he says. "How about you?"');
        }
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_favorite_part', 'good_for_you_too'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"You fucked me so hard my dick hurts," he says grinning. "So yeah, it was good."');
      } else {
        scene.text('"I could\'ve gone a few more times," he says. "But it wasn\'t bad. What about you?"');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_favorite_part', 'good_for_you_too'] }]);
    }
  }
  scene.build();
}

function enterCreampieFavorite(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] !== 'anal'  ||  ((s as any).sex_ev ?? 0)?.['anal_creampie_count'] < 1) {
    ((s as any).sex_ev ?? {})['boy_favorite'] = 'creampie';
    scene.actions([
      { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    scene.text('"I\'m glad you found my pussy so satisfying," you smirk in amusement.');
    scene.text('"What about you?" he asks. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      { label: 'I liked it too', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] === ((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count']) {
      scene.text('"I liked it too," you say, beaming at him. "Your cock throbbing, your cum filling my pussy up, I could <i>feel</i> all of it. I think we came together every time."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
        scene.text('"I liked it too," you say, beaming at him. "Your cock throbbing, your cum filling my pussy up, I could <i>feel</i> all of it. I couldn\'t help but come with you."');
      } else {
        scene.text('"I liked it too," you say, beaming at him. "Every time you came, I could <i>feel</i> you inside me. Your cock throbbing, your cum filling my pussy up. It felt really good."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['boy_favorite'] = 'anal_creampie';
    scene.actions([
      { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    scene.text('"I\'m glad you found my ass so satisfying," you smirk in amusement.');
    scene.text('"What about you?" he asks. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      { label: 'I liked it too', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['anal_creampie_count'] === ((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count']) {
      scene.text('"I liked it too," you say, beaming at him. "Your cock throbbing, your cum filling my ass up, I could <i>feel</i> all of it. I think we came together every time."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
        scene.text('"I liked it too," you say, beaming at him. "Your cock throbbing, your cum filling my ass up, I could <i>feel</i> all of it. I couldn\'t help but come with you."');
      } else {
        scene.text('"I liked it too," you say, beaming at him. "Every time you came, I could <i>feel</i> you inside me. Your cock throbbing, your cum filling my ass up. It felt really good."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  ((s as any).sex_ev ?? 0)?.['anal_creampie_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['anal_surprise_creampie_count'] >= 3) {
      // TODO-QSP: dynamic text: "Your ass is amazing," <<$npcdesc>> says. "It's like you were sucking me in, I c...
      scene.text(`"Your ass is amazing," ${((s as any).npcdesc ?? 0)} says. "It's like you were sucking me in, I couldn't stop coming inside you."`);
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 100) {
        // TODO-QSP: dynamic text: "Coming inside you was amazing," <<$npcdesc>> says. "Other guys are into facials...
        scene.text(`"Coming inside you was amazing," ${((s as any).npcdesc ?? 0)} says. "Other guys are into facials and watching girls swallow, which is fine I guess, but there's nothing like filling a girl's ass. What about you?"`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
          // TODO-QSP: dynamic text: "I love coming inside you," <<$npcdesc>> says smiling warmly at you. "Especially...
          scene.text(`"I love coming inside you," ${((s as any).npcdesc ?? 0)} says smiling warmly at you. "Especially when you come too. It drives me crazy feeling you orgasm on my cock. What about you?"`);
        } else {
          // TODO-QSP: dynamic text: "I love coming inside you," <<$npcdesc>> says smiling warmly at you. "I want to ...
          scene.text(`"I love coming inside you," ${((s as any).npcdesc ?? 0)} says smiling warmly at you. "I want to fill your ass with cum and never stop. What about you?"`);
        }
      }
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['surprise_creampie_count'] >= 3) {
      ((s as any).sex_ev ?? {})['boy_favorite'] = 'creampie';
      // TODO-QSP: dynamic text: "Your pussy is amazing," <<$npcdesc>> says. "It's like you were sucking me in, I...
      scene.text(`"Your pussy is amazing," ${((s as any).npcdesc ?? 0)} says. "It's like you were sucking me in, I couldn't stop coming inside you."`);
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
        scene.actions([
          { label: 'Ask next time (tease)', handler: (st: GameState) => {
    scene.text('"It would be nice if you would ask before you do," you smile teasingly. "I\'m not just a cum receptacle you know."');
    scene.text('"Sorry," he replies, though he doesn\'t look it. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
          { label: 'Ask next time (annoyed)', handler: (st: GameState) => {
    scene.text('"It would be nice if you would ask first," you frown in annoyance. "I\'m not just a cum receptacle you know."');
    scene.text('"Sorry," he replies, though he doesn\'t look it. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
        ]);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 100) {
        // TODO-QSP: dynamic text: "Coming inside you was amazing," <<$npcdesc>> says. "Other guys are into facials...
        scene.text(`"Coming inside you was amazing," ${((s as any).npcdesc ?? 0)} says. "Other guys are into facials and watching girls swallow, which is fine I guess, but there's nothing like filling a girl's pussy. What about you?"`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
          // TODO-QSP: dynamic text: "I love coming inside you," <<$npcdesc>> says smiling warmly at you. "Especially...
          scene.text(`"I love coming inside you," ${((s as any).npcdesc ?? 0)} says smiling warmly at you. "Especially when you come too. It drives me crazy feeling you orgasm on my cock. What about you?"`);
        } else {
          // TODO-QSP: dynamic text: "I love coming inside you," <<$npcdesc>> says smiling warmly at you. "I want to ...
          scene.text(`"I love coming inside you," ${((s as any).npcdesc ?? 0)} says smiling warmly at you. "I want to fill your pussy with cum and never stop. What about you?"`);
        }
      }
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  }
  scene.build();
}

function enterCumMouthFavorite(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['swallow_count'] > 0) {
    ((s as any).sex_ev ?? {})['boy_favorite'] = 'swallowing';
    // TODO-QSP: dynamic text: "It was so hot watching you swallow," <<$npcdesc>> says.
    scene.text(`"It was so hot watching you swallow," ${((s as any).npcdesc ?? 0)} says.`);
    if (((s as any).npc_tasty_cum ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'Your cum is disgusting', handler: (st: GameState) => {
    ((s as any).npc_gross_cum ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"You could stand to eat some more fruit if you want me to keep doing it," you say, wrinkling your nose. "Your cum tastes <i>horrible</i>. It\'s like drinking expired caviar."');
    scene.text('You stick your tongue out, half gagging at the lingering flavour.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on, it can't be that bad," <<$npcdesc>> scowls at you.
      scene.text(`"Come on, it can't be that bad," ${((s as any).npcdesc ?? 0)} scowls at you.`);
      scene.actions([
        { label: 'Insist', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Yes, it can be and it is," you say, making a face at him. "I <i>wish</i> was making this up. Yuck!"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Maybe exaggerating', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Well..." you say. "Maybe I\'m exaggerating just a <i>little</i>. But I still don\'t like the taste."');
    scene.text('You give him an apologetic smile which he seems to accept when he smiles back.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Get sarcastic', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    // TODO-QSP: dynamic text: "<i>It can't be that bad,</i>" you repeat, mocking <<$npcdesc>> with a squeaky h...
    scene.text(`"<i>It can't be that bad,</i>" you repeat, mocking ${((s as any).npcdesc ?? 0)} with a squeaky high voice. "I'd like to see you get down there and blow yourself to completion. Then we'll see."`);
    qspCall(s, 'sex_ev_pillow_talk', 'angry_end2');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['swallow_count'] > 1) {
        // TODO-QSP: dynamic text: "If it's so bad, why did you keep doing it?" <<$npcdesc>> asks.
        scene.text(`"If it's so bad, why did you keep doing it?" ${((s as any).npcdesc ?? 0)} asks.`);
        scene.actions([
          { label: 'For you (affectionate)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Cause I like you too much to say no," you say, smirking wryly at him.');
    scene.text('He smiles back warmly.');
    scene.text('"Well what about you? Was there something I did to make you feel good?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
          { label: 'For you (sarcastic)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Why do you think?" you say, eyeballing him. "Cause <i>somebody</i> likes watching me swallow."');
    scene.text('He smiles back.');
    scene.text('"Well what about you? Was there something I did to make you feel good?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
          { label: 'Acquiring taste', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I figure if I do it enough times maybe I\'ll get used to it," you say, eyeballing him with a grim expression. "Starting to have my doubts though."');
    // TODO-QSP: dynamic text: <<$npcdesc>> laughs.
    scene.text(`${((s as any).npcdesc ?? 0)} laughs.`);
    scene.text('"Well I appreciate the effort. What about you? Was there something I did to make you feel good?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
          { label: 'Spitting is quitting', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Cause spitting is quitting," you say, eyeballing him. "If I start something, I\'m gonna finish it."');
    // TODO-QSP: dynamic text: <<$npcdesc>> laughs.
    scene.text(`${((s as any).npcdesc ?? 0)} laughs.`);
    scene.text('"You certainly do. What about you then? Was there something I did to make you feel good?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Sorry I guess," <<$npcdesc>> says, looking a little embarrassed. "Was there som...
        scene.text(`"Sorry I guess," ${((s as any).npcdesc ?? 0)} says, looking a little embarrassed. "Was there something you did enjoy?"`);
        qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
        qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
      }
    }
  } },
      ]);
    }
    if (((s as any).npc_gross_cum ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'You\'re delicious', handler: (st: GameState) => {
    ((s as any).npc_tasty_cum ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.text('"Your cum is delicious," you grin. "I like all cum, but yours is like a fine shot of vodka. Smooth and leaves you wanting more."');
    } else {
      scene.text('"Your cum is delicious," you grin. "I don\'t usually like cum all that much, but yours is really nice. It\'s almost sweet."');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> looks pretty pleased with himself at that.
    scene.text(`${((s as any).npcdesc ?? 0)} looks pretty pleased with himself at that.`);
    scene.text('"What else did you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'I love cum', handler: (st: GameState) => {
    scene.text('"I love cum," you grin. "If it\'s in my mouth, I can\'t help but swallow."');
    // TODO-QSP: dynamic text: <<$npcdesc>> can't seem to help but grin back at you.
    scene.text(`${((s as any).npcdesc ?? 0)} can't seem to help but grin back at you.`);
    scene.text('"What else did you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      ]);
    }
    scene.actions([
      { label: 'I aim to please', handler: (st: GameState) => {
    scene.text('"Glad you thought so," you smile pleasantly. "I aim to please."');
    scene.text('"So what about you? What did you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      { label: 'Not my favorite', handler: (st: GameState) => {
    scene.text('"It\'s not exactly my favorite flavour of syrup," you smile ruefully. "But I\'m glad you thought it was hot."');
    scene.text('"So what about you? What did you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['boy_favorite'] = 'cum_in_mouth';
    // TODO-QSP: dynamic text: "Coming in your mouth felt great," <<$npcdesc>> says. "I wish you'd swallow thou...
    scene.text(`"Coming in your mouth felt great," ${((s as any).npcdesc ?? 0)} says. "I wish you'd swallow though."`);
    scene.actions([
      { label: 'I don\'t like it', handler: (st: GameState) => {
    scene.text('"I don\'t like it," you say, wrinkling your nose. "It\'s just <i>weird</i> swallowing cum."');
    scene.text('"Then what <i>do</i> you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'It\'s gross', handler: (st: GameState) => {
    scene.text('"Cum is gross," you say, wrinkling your nose. "I hate it. There\'s no way I\'m swallowing that vile shit."');
    scene.text('"Then what <i>do</i> you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Don\'t like you enough', handler: (st: GameState) => {
    scene.text('"I don\'t like you enough for that yet," you say.');
    scene.text('"So if you liked me more, you\'d swallow for me?"');
    scene.actions([
      { label: 'No (tease)', handler: (st: GameState) => {
    scene.text('"No," you smirk teasingly. "Now that I know it\'s what you want, maybe I\'ll keep spitting just to fuck with you."');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Way to be a bitch about it," <<$npcdesc>> scowls, grumbling to himself.
      scene.text(`"Way to be a bitch about it," ${((s as any).npcdesc ?? 0)} scowls, grumbling to himself.`);
      qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      // TODO-QSP: dynamic text: "Okay, I see how it is," <<$npcdesc>> chuckles. "So what do <i>you</i> like then...
      scene.text(`"Okay, I see how it is," ${((s as any).npcdesc ?? 0)} chuckles. "So what do <i>you</i> like then? So I know what to avoid in the future?"`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    }
  } },
      { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe," you smirk teasingly.');
    // TODO-QSP: dynamic text: "Okay, I see how it is," <<$npcdesc>> chuckles. "So what did <i>you</i> enjoy th...
    scene.text(`"Okay, I see how it is," ${((s as any).npcdesc ?? 0)} chuckles. "So what did <i>you</i> enjoy then? So I know what to do to make you like me?"`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Yes," you smirk, a mischievous twinkle in your eye. "Every drop."');
    // TODO-QSP: dynamic text: "Well in that case," <<$npcdesc>> smiles back. "What do I do to make you like me...
    scene.text(`"Well in that case," ${((s as any).npcdesc ?? 0)} smiles back. "What do I do to make you like me?"`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
      { label: 'Only for boyfriends', handler: (st: GameState) => {
    scene.text('"I only swallow for my boyfriend," you say.');
    scene.text('"So if I were your boyfriend, you\'d swallow for me?"');
    scene.actions([
      { label: 'No (tease)', handler: (st: GameState) => {
    scene.text('"No," you smirk teasingly. "Not now that I know how much you\'d love it. If we started dating, maybe I\'d spit just to drive you crazy."');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Way to be a bitch about it," <<$npcdesc>> scowls, grumbling to himself.
      scene.text(`"Way to be a bitch about it," ${((s as any).npcdesc ?? 0)} scowls, grumbling to himself.`);
      qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      // TODO-QSP: dynamic text: "Okay, I see how it is," <<$npcdesc>> chuckles. "So what do <i>you</i> like then...
      scene.text(`"Okay, I see how it is," ${((s as any).npcdesc ?? 0)} chuckles. "So what do <i>you</i> like then? So I know how to drive <i>you</i> crazy."`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    }
  } },
      { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe," you smirk teasingly.');
    if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Okay, I see how it is," <<$npcdesc>> chuckles. "So what did <i>you</i> enjoy th...
      scene.text(`"Okay, I see how it is," ${((s as any).npcdesc ?? 0)} chuckles. "So what did <i>you</i> enjoy then? So I know how to steal you from your boyfriend."`);
    } else {
      // TODO-QSP: dynamic text: "Okay, I see how it is," <<$npcdesc>> chuckles. "So what did <i>you</i> enjoy th...
      scene.text(`"Okay, I see how it is," ${((s as any).npcdesc ?? 0)} chuckles. "So what did <i>you</i> enjoy then? So I know what to do to make you my girlfriend."`);
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Yes," you smirk, a mischievous twinkle in your eye. "Every drop."');
    if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Well in that case," <<$npcdesc>> smiles back. "What do I do to make you break u...
      scene.text(`"Well in that case," ${((s as any).npcdesc ?? 0)} smiles back. "What do I do to make you break up with your boyfriend for me?"`);
    } else {
      // TODO-QSP: dynamic text: "Well in that case," <<$npcdesc>> smiles back. "So what did <i>you</i> enjoy the...
      scene.text(`"Well in that case," ${((s as any).npcdesc ?? 0)} smiles back. "So what did <i>you</i> enjoy then? So I know what to do to make you my girlfriend."`);
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFacialFavorite(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'facial';
  if (((s as any).sex_ev ?? 0)?.['pc_facial_jerk'] === 1) {
    // TODO-QSP: dynamic text: "I love seeing your face covered in cum," <<$npcdesc>> grins. "Especially when y...
    scene.text(`"I love seeing your face covered in cum," ${((s as any).npcdesc ?? 0)} grins. "Especially when you finished me yourself. That was fucking hot."`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['facial_swallow'] > 0) {
      // TODO-QSP: dynamic text: "I love seeing your face covered in cum," <<$npcdesc>> grins. "Plus it was a bon...
      scene.text(`"I love seeing your face covered in cum," ${((s as any).npcdesc ?? 0)} grins. "Plus it was a bonus watching you swallow after. That was hot."`);
    } else {
      // TODO-QSP: dynamic text: "I love blowing my load all over your face," <<$npcdesc>> grins. "It's fucking h...
      scene.text(`"I love blowing my load all over your face," ${((s as any).npcdesc ?? 0)} grins. "It's fucking hot."`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['disgusting_facial'] === 0) {
    scene.actions([
      { label: 'I liked it too', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"I think it\'s hot too," you grin back through the cum still glazing your cheeks. You revel in it, saying, "Having this stuff on my face is weirdly empowering. It makes me feel like a sex goddess!"');
    } else {
      scene.text('"I think it\'s hot too. There\'s something about having a guy\'s cum on my face that just makes me feel like a sex goddess," you grin back.');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'It feels nice', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"I like how it feels," you smile, rubbing your cheek where his cum still coats your face. "It\'s warm and sticky, but in a good way. It feels nice on my skin."');
    } else {
      scene.text('"I like how it feels," you smile. "It\'s warm and sticky, but in a good way. It feels nice on my skin."');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'It\'s gross', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"Well that makes one of us who thinks so," you grimace, face still covered in the vile substance. "It\'s slimy and gross and gets everywhere."');
    } else {
      scene.text('"Well that makes one of us who thinks so," you grimace. "It\'s slimy and gross and gets everywhere."');
    }
    scene.text('"If it\'s so gross, why do you let me do it?"');
    scene.actions([
      { label: 'Sex is a two way street', handler: (st: GameState) => {
    scene.text('"Cause it goes both ways," you shrug. "If I don\'t let you do stuff to me that you enjoy then how can I ask the same of you?"');
    // TODO-QSP: dynamic text: "Well, what do you enjoy then?" <<$npcdesc>> asks.
    scene.text(`"Well, what do you enjoy then?" ${((s as any).npcdesc ?? 0)} asks.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Cause you like it', handler: (st: GameState) => {
    scene.actions([
      { label: '(Affectionate)', handler: (st: GameState) => {
    scene.text('"Cause I know you like it," you smirk. "And I like turning you on."');
    // TODO-QSP: dynamic text: "Well, what can I do to turn you on then?" <<$npcdesc>> asks.
    scene.text(`"Well, what can I do to turn you on then?" ${((s as any).npcdesc ?? 0)} asks.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: '(Sarcastic)', handler: (st: GameState) => {
    scene.text('"Cause I know you\'re a pervert," you say eyeballing him. "And pervs like seeing girls get facials."');
    // TODO-QSP: dynamic text: "We sure do," <<$npcdesc>> chuckles. "But what about you? What do you like?"
    scene.text(`"We sure do," ${((s as any).npcdesc ?? 0)} chuckles. "But what about you? What do you like?"`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
      { label: 'I don\'t get a say (subservient)', handler: (st: GameState) => {
    scene.text('"Cause it\'s not up to me," you shrug. "Sex is about making the guy feel good. I\'m the girl you\'re fucking. If you want to come on my face, who am I to stop you?"');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Well I don't want you to feel like you always have to be serving me," <<$npcdes...
      scene.text(`"Well I don't want you to feel like you always have to be serving me," ${((s as any).npcdesc ?? 0)} smiles back. "What can I do to make you feel good?"`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    } else {
      if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Glad you know your place," <<$npcdesc>> says smugly.
        scene.text(`"Glad you know your place," ${((s as any).npcdesc ?? 0)} says smugly.`);
        qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
      } else {
        // TODO-QSP: dynamic text: "That's nice of you," <<$npcdesc>> smiles back.
        scene.text(`"That's nice of you," ${((s as any).npcdesc ?? 0)} smiles back.`);
        qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"Well I always like looking hot," you smirk back through the cum still glazing your cheeks.');
    } else {
      scene.text('"Well I always like looking hot," you smirk amusedly.');
    }
    scene.text('"What about you?" he asks. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'Why?', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"What is it about guys and finishing on girls faces?" you ask amusedly, very conscious of the cum that still glazes your cheeks. "What\'s so hot about it?"');
    } else {
      scene.text('"What is it about guys and finishing on girls faces?" you ask amusedly. "What\'s so hot about it?"');
    }
    scene.text('"I don\'t know," he shrugs. "There\'s just something... primal about it. It\'s hot, what else do you want me to say? But what about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
  ]);
  scene.build();
}

function enterTitCumFavorite(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'tit_cum';
  if (((s as any).sex_ev ?? 0)?.['pc_titcum_jerk'] === 1) {
    // TODO-QSP: dynamic text: "I love coming all over your tits," <<$npcdesc>> grins. "Especially when you fin...
    scene.text(`"I love coming all over your tits," ${((s as any).npcdesc ?? 0)} grins. "Especially when you finished me yourself. That was fucking hot."`);
  } else {
    // TODO-QSP: dynamic text: "I love coming all over your tits," <<$npcdesc>> grins. "You look so sexy like t...
    scene.text(`"I love coming all over your tits," ${((s as any).npcdesc ?? 0)} grins. "You look so sexy like that."`);
  }
  if (((s as any).sex_ev ?? 0)?.['tit_cum_gross'] === 0) {
    scene.actions([
      { label: 'I liked it too', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      scene.text('"I think it\'s hot too," you grin looking down at the thick liquid still glazing your chest. You revel in it, saying,"Having this stuff on me is weirdly empowering. It makes me feel like a sex goddess!"');
    } else {
      scene.text('"I think it\'s hot too," you grin back. "There\'s something about having a guy\'s cum on my chest that just makes me feel like a sex goddess!"');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'It feels nice', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      scene.text('"I like how it feels," you smile, fondling your own chest and spreading the thick liquid around. "It\'s warm and sticky, but in a good way. It feels nice on my skin."');
    } else {
      scene.text('"I like how it feels," you smile. "It\'s warm and sticky, but in a good way. It feels nice on my skin."');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'It\'s gross', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      scene.text('"Well that makes one of us who thinks so," you grimace, looking down at your chest which is still covered in the vile substance. "It\'s slimy and gross and gets everywhere."');
    } else {
      scene.text('"Well that makes one of us who thinks so," you grimace. "It\'s slimy and gross and gets everywhere."');
    }
    scene.text('"If it\'s so gross, why do you let me do it?"');
    scene.actions([
      { label: 'Sex is a two way street', handler: (st: GameState) => {
    scene.text('"Cause it goes both ways," you shrug. "If I don\'t let you do stuff to me that you enjoy then how can I ask the same of you?"');
    // TODO-QSP: dynamic text: "Well, what do you enjoy then?" <<$npcdesc>> asks.
    scene.text(`"Well, what do you enjoy then?" ${((s as any).npcdesc ?? 0)} asks.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Cause you like it', handler: (st: GameState) => {
    scene.actions([
      { label: '(Affectionate)', handler: (st: GameState) => {
    scene.text('"Cause I know you like it," you smirk. "And I like turning you on."');
    // TODO-QSP: dynamic text: "Well, what can I do to turn you on then?" <<$npcdesc>> asks.
    scene.text(`"Well, what can I do to turn you on then?" ${((s as any).npcdesc ?? 0)} asks.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: '(Sarcastic)', handler: (st: GameState) => {
    scene.text('"Cause I know you\'re a pervert," you say eyeballing him. "And pervs like seeing girls get slimed."');
    // TODO-QSP: dynamic text: "We sure do," <<$npcdesc>> chuckles. "But what about you? What do you like?"
    scene.text(`"We sure do," ${((s as any).npcdesc ?? 0)} chuckles. "But what about you? What do you like?"`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
      { label: 'I don\'t get a say (subservient)', handler: (st: GameState) => {
    scene.text('"Cause it\'s not up to me," you shrug. "Sex is about making the guy feel good. I\'m the girl you\'re fucking. If you want to come on my tits, who am I to stop you?"');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Well I don't want you to feel like you always have to be serving me," <<$npcdes...
      scene.text(`"Well I don't want you to feel like you always have to be serving me," ${((s as any).npcdesc ?? 0)} smiles back. "What can I do to make you feel good?"`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    } else {
      if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Glad you know your place," <<$npcdesc>> says smugly.
        scene.text(`"Glad you know your place," ${((s as any).npcdesc ?? 0)} says smugly.`);
        qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
      } else {
        // TODO-QSP: dynamic text: "That's nice of you," <<$npcdesc>> smiles back.
        scene.text(`"That's nice of you," ${((s as any).npcdesc ?? 0)} smiles back.`);
        qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      scene.text('"Well I as long as you had fun," you smirk, glancing down at his cum still covering your chest.');
    } else {
      scene.text('"Well I as long as you had fun," you smirk amusedly.');
    }
    scene.text('"What about you?" he asks. "What about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'Why?', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      scene.text('"What is it about guys and coming on tits?" you ask amusedly, very conscious of the cum that still glazes your chest. "What\'s so hot about it?"');
    } else {
      scene.text('"What is it about guys and coming on tits?" you ask amusedly. "What\'s so hot about it?"');
    }
    scene.text('"Tits are sexy, girls with cum on them are sexy," he shrugs. "So tits with cum on them are the sexiest. What\'s not to love about it? But what about you? What was your favorite part?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
  ]);
  scene.build();
}

function enterPussyeatFavorite(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'pussyeating';
  // TODO-QSP: dynamic text: "I love the way you taste," <<$npcdesc>> smiles.
  scene.text(`"I love the way you taste," ${((s as any).npcdesc ?? 0)} smiles.`);
  qspCall(s, 'sex_ev_pillow_talk', 'kuni_wear_out');
  scene.actions([
    { label: 'What do I taste like?', handler: (st: GameState) => {
    scene.text('"Yeah?" you smirk back. "What do I taste like?"');
    scene.text('"Hmm... A little salty. Maybe a little sweet too. Not exactly sure how to describe it other than to say you taste delicious. Did you enjoy it too?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    { label: 'What do you like about eating pussy?', handler: (st: GameState) => {
    scene.text('"Why do you like eating pussy so much?" you giggle. "You\'re not gonna come from it."');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: "I just like giving more than I like receiving," <<$npcdesc>> shrugs. "It turns ...
      scene.text(`"I just like giving more than I like receiving," ${((s as any).npcdesc ?? 0)} shrugs. "It turns me on knowing that what I'm doing is making a girl feel good. I love making girls squirm just by running my tongue across their clit at the right time and I like the way they taste. What can I say? I just think it's fun. What about you? What do you like?"`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    } else {
      // TODO-QSP: dynamic text: "Well, do you like giving blowjobs?" <<$npcdesc>> asks.
      scene.text(`"Well, do you like giving blowjobs?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"Uhh, no?" You cock your head. "It\'s boring and makes my neck hurt and my jaw ache."');
    // TODO-QSP: dynamic text: "Oh. Well, how do I explain it then?" <<$npcdesc>> rubs his chin. "I just like g...
    scene.text(`"Oh. Well, how do I explain it then?" ${((s as any).npcdesc ?? 0)} rubs his chin. "I just like giving more than I like receiving. It turns me on knowing that what I'm doing is making a girl feel good. I love making girls squirm just by running my tongue across their clit at the right time and I like the way they taste."`);
    // TODO-QSP: dynamic text: <<$npcdesc>> shrugs.
    scene.text(`${((s as any).npcdesc ?? 0)} shrugs.`);
    scene.text('"What can I say? I just think it\'s fun. What about you? What do you like?"');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
        { label: 'Yes', handler: (st: GameState) => {
    scene.text('"... yeah," you admit.');
    scene.text('"What do you like about it?"');
    scene.actions([
      { label: 'Making you feel good', handler: (st: GameState) => {
    scene.text('"I like making the guy feel good," you say. "Making <i>you</i> feel good. I love how when I use my tongue just right, I can feel your entire body respond through your cock."');
    // TODO-QSP: dynamic text: "Same thing with eating pussy," <<$npcdesc>> smirks back. "I like giving more th...
    scene.text(`"Same thing with eating pussy," ${((s as any).npcdesc ?? 0)} smirks back. "I like giving more than receiving. It's fun to make girls squirm and I love the taste of pussy. So if you're allowed to love blowjobs, why can't I love eating pussy?"`);
    scene.text('"Guess you\'ve got a point," you chuckle.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'The taste', handler: (st: GameState) => {
    scene.text('"Something about having a cock in my mouth just feels good," you say. "The sweaty rough texture, the sort of musky smell. It\'s like licking a warm salty popsicle."');
    // TODO-QSP: dynamic text: "Same thing with eating pussy," <<$npcdesc>> smirks back. "I love the taste of p...
    scene.text(`"Same thing with eating pussy," ${((s as any).npcdesc ?? 0)} smirks back. "I love the taste of pussy. And it's fun to lick them, playing with their little clits and making girls squirm with just my tongue. So if you're allowed to love blowjobs, why can't I love eating pussy?"`);
    scene.text('"Guess you\'ve got a point," you chuckle.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'The control', handler: (st: GameState) => {
    scene.text('"I guess because of the control?" you say. "There\'s something... empowering about having a cock in my mouth. Like I could just chomp down and cause tons of pain but also that I have a direct line to the pleasure a guy is feeling. <i>I</i> get to decide if he gets to feel good. <i>I</i> get to decide if he gets to come. I can edge him, I can tease him, I can swallow him whole, make him gasp. Something about that just... turns me on."');
    // TODO-QSP: dynamic text: "Same thing with eating pussy," <<$npcdesc>> smirks back. "I like giving more th...
    scene.text(`"Same thing with eating pussy," ${((s as any).npcdesc ?? 0)} smirks back. "I like giving more than receiving. I love the taste of pussy and it's fun to lick them, playing with their little clits and making girls squirm with just my tongue. So if you're allowed to love blowjobs, why can't I love eating pussy?"`);
    scene.text('"Guess you\'ve got a point," you chuckle.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
      ]);
    }
  } },
    { label: 'You\'re really good at it', handler: (st: GameState) => {
    scene.text('"Did I mention that you\'re really good at that?" you smile.');
    if (((s as any).sex_ev ?? 0)?.['good_at_cuni'] === 1) {
      scene.text('"I think you might have once or twice," he smiles back.');
    } else {
      scene.text('"You didn\'t have to," he smirks back. "I could tell by the way you were screaming my name."');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
  ]);
  scene.build();
}

function enterNpcMissFav1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'missionary';
  scene.text('"I liked fucking you," he grins. "Especially when I got to be on top."');
  scene.actions([
    { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"Me too," you smile back. "There\'s just something... pleasant about missionary. Can\'t explain it but it\'s my favorite way to fuck."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '')) {
      scene.text('"Me too," you smile back. "I like how I can see your face when you come inside me."');
    } else {
      scene.text('"Me too," you smile back. "I like how we can stare into each other\'s eyes while we fuck."');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"Me too," you smile back. "I prefer being on bottom myself."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Like feeling his weight', handler: (st: GameState) => {
    scene.text('"Me too," you smile back. "I can feel the weight of your entire body when you\'re on top, pressing down through your cock into my pussy. I love it."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
    { label: 'It\'s not my favorite (liked)', handler: (st: GameState) => {
    scene.text('"Yeah?" you say. "Missionary isn\'t usually my favorite, but I had fun while we were doing it."');
    scene.text('"Then what <i>is</i> your favorite?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'It\'s not my favorite (disliked)', handler: (st: GameState) => {
    scene.text('"At least you were having fun," you say wryly. "Missionary isn\'t really my cup of tea."');
    scene.text('"Then what do you prefer?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'Isn\'t missionary boring?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/after/pillow_talk3.jpg');
      scene.text('"Don\'t you think missionary is kind of boring?" you sigh unhappily. "It\'s just so... basic."');
      qspCall(s, 'sex_ev_favorite_part', 'npc_argue_lashout');
    } else {
      scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
      scene.text('"Don\'t you think missionary is kind of boring?" you sigh unhappily. "It\'s just so... basic."');
      scene.text('"If missionary is boring, then what do you prefer?" he asks back wryly.');
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  } },
  ]);
  scene.build();
}

function enterNpcDoggyFav1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'doggy';
  scene.text('"I liked fucking you," he grins. "Especially when I got to fuck you from behind."');
  scene.actions([
    { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "It feels better in doggy. Hits the inside of my pussy just right."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I can feel you so much deeper inside when you fuck me doggy."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "It feels dirty. And I like it dirty."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Like the impact', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I like how it feels, not just being penetrated but when your hips hit my ass. The impact of it goes through my whole body and I just think that\'s <i>super hot</i>."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
    { label: 'It\'s not my favorite (liked)', handler: (st: GameState) => {
    scene.text('"Yeah?" you say. "Doggystyle isn\'t usually my favorite, but I had fun while we were doing it."');
    scene.text('"Then what <i>is</i> your favorite?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'It\'s not my favorite (disliked)', handler: (st: GameState) => {
    scene.text('"At least you were having fun," you say wryly. "Doggystyle isn\'t really my cup of tea."');
    scene.text('"Then what do you prefer?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'Isn\'t doggy boring?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/after/pillow_talk3.jpg');
      scene.text('"Don\'t you think doggy is kind of boring?" you sigh unhappily. "I\'m just on hands and knees the whole time staring at the wall and you can\'t see anything of me except my ass."');
      qspCall(s, 'sex_ev_favorite_part', 'npc_argue_lashout');
    } else {
      scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
      scene.text('"Don\'t you think doggy is kind of boring?" you sigh unhappily. "I\'m just on hands and knees the whole time staring at the wall and you can\'t see anything of me except my ass."');
      scene.text('"If doggy\'s boring, then what do you prefer?" he asks back wryly.');
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  } },
  ]);
  scene.build();
}

function enterNpcCowgirlFav1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'cowgirl';
  if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
    scene.text('"I liked when you were on top," he grins. "I love the view of your tits bouncing around in front of me."');
  } else {
    scene.text('"I liked when you were on top," he grins.');
  }
  scene.actions([
    { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I love bouncing on your dick! I can\'t get that feeling in any other position."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "Your cock rubs against the inside of my pussy in a whole different way. I can only get that when I\'m on top."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Like control', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "I like being in charge."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
    { label: 'It\'s not my favorite (liked)', handler: (st: GameState) => {
    scene.text('"Yeah?" you say. "Cowgirl isn\'t usually my favorite, but it was fun bouncing on your dick."');
    scene.text('"Then what <i>is</i> your favorite?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'It\'s not my favorite (disliked)', handler: (st: GameState) => {
    scene.text('"At least you were having fun," you say wryly. "Cowgirl isn\'t really my cup of tea."');
    scene.text('"Then what do you prefer?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    { label: 'Cowgirl sucks', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
      scene.text('"Really? I hate cowgirl," you sigh. "It\'s so tiring, just bouncing up and down on your dick for ages until you come. Makes my legs sore."');
      qspCall(s, 'sex_ev_favorite_part', 'npc_argue_lashout');
    } else {
      scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
      scene.text('"Really? I hate cowgirl," you sigh. "It\'s so tiring, just bouncing up and down on your dick for ages until you come. Makes my legs sore."');
      scene.text('"Well, then what do you prefer?" he asks back wryly.');
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  } },
  ]);
  scene.build();
}

function enterNpcAnalFav1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'anal';
  scene.text('"I liked fucking your ass," he grins.');
  if (((s as any).stat ?? 0)?.['anal'] > 1  &&  ((s as any).sex_ev ?? 0)?.['anal_virgin'] !== 1) {
    scene.actions([
      { label: 'It\'s not my favorite (liked)', handler: (st: GameState) => {
    scene.text('"Yeah?" you say. "I\'m not super into anal, but this was fun."');
    scene.text('"Then what <i>is</i> your favorite?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
      { label: 'It\'s not my favorite (disliked)', handler: (st: GameState) => {
    scene.text('"At least you were having fun," you say wryly. "Anal isn\'t really my cup of tea."');
    scene.text('"Then what do you prefer?" he asks in response.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
    qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
  } },
    ]);
  }
  scene.actions([
    { label: 'Me too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.actions([
      { label: 'Feels better than vaginal', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I think I like it better than vaginal sex."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Hits different', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "It scratches a totally different itch from pussy sex."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Me too," you grin back wickedly. "It feels dirty. And I like it dirty."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } },
    { label: 'Isn\'t doggy boring?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/shared/sex/after/pillow_talk3.jpg');
      scene.text('"Don\'t you think doggy is kind of boring?" you sigh unhappily. "I\'m just on hands and knees the whole time staring at the wall and you can\'t see anything of me except my ass."');
      qspCall(s, 'sex_ev_favorite_part', 'npc_argue_lashout');
    } else {
      scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
      scene.text('"Don\'t you think doggy is kind of boring?" you sigh unhappily. "I\'m just on hands and knees the whole time staring at the wall and you can\'t see anything of me except my ass."');
      scene.text('"If doggy\'s boring, then what do you prefer?" he asks back wryly.');
      qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
      qspCall(s, 'sex_ev_favorite_part', 'pc_nothing_fav');
    }
  } },
  ]);
  scene.build();
}

function enterNpcArgueLashout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
  // TODO-QSP: dynamic text: "Why're you being such a bitch?" <<$npcdesc>> scowls back. "What's the point of ...
  scene.text(`"Why're you being such a bitch?" ${((s as any).npcdesc ?? 0)} scowls back. "What's the point of asking me what I liked if you're just going to piss on it?"`);
  scene.actions([
    { label: 'Let it slide', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('A spike of anger jolts through you and your body stiffens for a fight by instinct. But you take a deep breath through your nose and turn your head, choosing not to pursue conflict and just let it go instead.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>>'s response causes you to start. After a moment of shock, you shake ...
    scene.text(`${((s as any).npcdesc ?? 0)}'s response causes you to start. After a moment of shock, you shake your head.`);
    scene.text('"You\'re right," you say ruefully. "I\'m sorry. I shouldn\'t have said that."');
    scene.text('He turns to look at you, chewing on his cheek for a few seconds.');
    scene.text('"Whatever," he mumbles back.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterNpcBjFav1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_favorite'] = 'blowjob';
  scene.build();
}

function enterPcFavoritePart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'You liked the sex', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_favorite_part', 'pc_fuck_fav1');
    qspCall(s, 'sex_ev_favorite_part', 'pc_fuck_fav2');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['anal_count'] > 0) {
    scene.actions([
      { label: 'You liked the anal sex', goto: ['sex_ev_favorite_part', 'pc_anal_pref1'] },
    ]);
  }
  qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_cuni_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_creampie_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_analcreampie_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_mouthcum_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_facial_fav1');
  qspCall(s, 'sex_ev_favorite_part', 'pc_titcum_fav1');
  scene.actions([
    { label: 'You love his cock', handler: (st: GameState) => {
    if (((s as any).pcs_pubes ?? 0) < 12) {
      scene.img('images/shared/sex/after/dick_play1.jpg');
    } else {
      scene.img('images/shared/sex/after/dick_play2.jpg');
    }
    scene.text('"I love your cock," you grin, teasingly wrapping your fingers around his shaft. "This bad boy is the main reason I keep coming over all the time. I don\'t care what we do as long as I get to play with this guy."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterPcNothingFav(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No one thing', handler: (st: GameState) => {
    scene.actions([
      { label: 'Nothing in particular', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Nothing in particular," you shrug in response. "I just like sex."');
    scene.text('You smile warmly at him.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Everything together', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I couldn\'t choose just one thing," you smile warmly. "I liked all of it. <i>Everything</i> we do together... That\'s sex."');
    // TODO-QSP: dynamic text: <<$npcdesc>> returns the smile with more than a hint of satisfaction.
    scene.text(`${((s as any).npcdesc ?? 0)} returns the smile with more than a hint of satisfaction.`);
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPcBjFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['bj_count'] > 0) {
    scene.actions([
      { label: 'Liked sucking his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked sucking your cock," you grin.');
    scene.actions([
      { label: 'Making you feel good', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked sucking your cock," you grin. "I love the way I can make you groan and buck your hips just with my mouth. It makes me feel sexy."');
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      // TODO-QSP: dynamic text: "Blowjobs are my favorite," <<$npcdesc>> smiles back running his thumb across yo...
      scene.text(`"Blowjobs are my favorite," ${((s as any).npcdesc ?? 0)} smiles back running his thumb across your lips. "But the head you give is especially great."`);
    } else {
      // TODO-QSP: dynamic text: "You've got magic lips," <<$npcdesc>> smiles back, running his thumb across your...
      scene.text(`"You've got magic lips," ${((s as any).npcdesc ?? 0)} smiles back, running his thumb across your lips.`);
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav2');
    qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav3');
  } },
      { label: 'Oral fixation', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked sucking your cock," you grin. "I think I have some kind of oral fixation. Something about having a cock in my mouth just feels <i>good</i>."');
    // TODO-QSP: dynamic text: "Oral fixation huh?" <<$npcdesc>> says, running his thumb across your lips.
    scene.text(`"Oral fixation huh?" ${((s as any).npcdesc ?? 0)} says, running his thumb across your lips.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav3');
  } },
      { label: 'The taste', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked sucking your cock," you grin. "It tastes good."');
    if (((s as any).sex_ev ?? 0)?.['mouth_cum_gross'] === 1) {
      // TODO-QSP: dynamic text: "You didn't seem to think that when I came in your mouth," <<$npcdesc>> smirks.
      scene.text(`"You didn't seem to think that when I came in your mouth," ${((s as any).npcdesc ?? 0)} smirks.`);
      scene.text('"Okay, <i>that\'s</i> different," you protest. "I said I like the taste of your cock, not the taste of your cum."');
      qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      // TODO-QSP: dynamic text: "Explains why you're so good at it," <<$npcdesc>> smirks, running his thumb acro...
      scene.text(`"Explains why you're so good at it," ${((s as any).npcdesc ?? 0)} smirks, running his thumb across your lips. "You were gobbling it up like it was your last meal."`);
      qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_bj_fav3');
    }
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Wish you could\'ve blown him', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I wish I could\'ve sucked your cock," you say wistfully.');
    if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 40) {
      // TODO-QSP: dynamic text: "You're one of those types huh?" <<$npcdesc>> smirks.
      scene.text(`"You're one of those types huh?" ${((s as any).npcdesc ?? 0)} smirks.`);
    } else {
      // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> seems surprised. "I thought girls hate blowjobs."
      scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} seems surprised. "I thought girls hate blowjobs."`);
    }
    scene.actions([
      { label: 'Like making guys feel good', handler: (st: GameState) => {
    scene.text('"I love the way I can make a boy groan and buck his hips just with my mouth," you grin. " It makes me feel sexy."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Oral fixation', handler: (st: GameState) => {
    scene.text('"I think I have some kind of oral fixation," you grin. "Something about having a cock in my mouth just feels <i>so good</i>."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'The taste', handler: (st: GameState) => {
    scene.text('"I like the taste," you grin. "There\'s something incredibly sexy about the taste of cock."');
    if (((s as any).sex_ev ?? 0)?.['mouth_cum_gross'] === 1) {
      // TODO-QSP: dynamic text: "You didn't seem to think that when I came in your mouth," <<$npcdesc>> smirks.
      scene.text(`"You didn't seem to think that when I came in your mouth," ${((s as any).npcdesc ?? 0)} smirks.`);
      scene.text('"Okay, <i>that\'s</i> different," you protest. "I said I like the taste of your cock, not the taste of your cum."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcBjFav2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take the compliment', handler: (st: GameState) => {
    scene.text('You enjoy the praise, letting it wash over you and give you a warm fuzzy feeling inside.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterPcBjFav3(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Suck his thumb', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As his thumb trails past you let it slip into your mouth. Almost instinctively, ...
    scene.text(`As his thumb trails past you let it slip into your mouth. Almost instinctively, you begin sucking on it like a tiny dick, making doe eyes at ${((s as any).npcdesc ?? 0)} for a few seconds until you let it pop from your lips.`);
    scene.text('An intense silence hangs between you as you just keep staring at each other for several more moments.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterPcFuckFav1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Be open about it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.text('"I liked the sex," you grin, unable to contain your pleasure.');
      // TODO-QSP: dynamic text: "Not bad for your first time huh?" <<$npcdesc>> grins back.
      scene.text(`"Not bad for your first time huh?" ${((s as any).npcdesc ?? 0)} grins back.`);
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Not bad at all," you say, with a shake of your head. "You made for a memorable first fuck."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Wish I hadn\'t waited', handler: (st: GameState) => {
    scene.text('"Makes me wish I hadn\'t waited so long," you sigh. "I would have fucked a guy ages ago if I knew it felt this good!"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_favorite_part', 'pc_miss_pref1');
      qspCall(s, 'sex_ev_favorite_part', 'pc_doggy_pref1');
      qspCall(s, 'sex_ev_favorite_part', 'pc_cowgirl_pref1');
      qspCall(s, 'sex_ev_favorite_part', 'pc_rough_gentle_fav1');
    }
    if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
      scene.actions([
        { label: 'When you came together', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.text('"It was <i>amazing</i> when we came together," you gush.');
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Hey, when you\'re good, you\'re good," he says smugly.');
      } else {
        scene.text('"Yeah. That was great," he says, nodding in agreement.');
      }
    } else {
      if (((s as any).stat ?? 0)?.['simultaneous_orgasm_count'] === 0) {
        scene.text('"When we came together," you smile warmly. "I\'ve never had a simultaneous orgasm like that before."');
      } else {
        scene.text('"When we came together," you smile warmly. "There\'s nothing better than a simultaneous orgasm."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPcMissPref1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['miss_fuck'] === 1) {
    scene.actions([
      { label: 'When we did it missionary', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I liked it when you were on top," you smile.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "That's your favorite position?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "That's your favorite position?"`);
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"Hmmm... It\'s not usually my favorite," you shrug. "But something about it was nice this time."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"There\'s just something... pleasant about it," you say. "I like having you between my legs."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
      scene.text('"I liked the intimacy of it," you say. "And how I got to see your face when we came together."');
      scene.text('You add the last part with a smile.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '')) {
        scene.text('"I liked the intimacy of it," you say. "And how I can see your face when you come inside me."');
        scene.text('You add the last part with a smile.');
      } else {
        scene.text('"I liked the intimacy of it," you say. "And how I can see your face while you fuck me."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like feeling his weight', handler: (st: GameState) => {
    scene.text('"I could feel the <i>weight</i> of you when you\'re on top," you say. "Your entire body pressing down through your cock into my pussy. You have no idea how amazing it was."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"I just like it when you\'re on top," you smirk. "I\'m a power bottom."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer missionary', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    // TODO-QSP: dynamic text: "I wish we could have done it with you on top," you tell <<$npcdesc>>.
    scene.text(`"I wish we could have done it with you on top," you tell ${((s as any).npcdesc ?? 0)}.`);
    scene.text('"Yeah? That\'s your favorite position?"');
    scene.actions([
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"There\'s just something... pleasant about it," you say. "Can\'t really explain. I just like it when the guy\'s on top."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
      scene.text('"I like the intimacy of it," you say. "Let\'s me see your face when we come together."');
      scene.text('You add the last part with a smile.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  (((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '')) {
        scene.text('"I like the intimacy of it," you say. "I want to see your face when you come inside me."');
        scene.text('You add the last part with a smile.');
      } else {
        scene.text('"I liked the intimacy of it," you say. "And how I can see your face while you fuck me."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Want to feel his weight', handler: (st: GameState) => {
    scene.text('"When we do it like that, I can feel your <i>weight</i> on top of me," you grin. "Your entire body pressing down through your cock into my pussy. You have no idea how amazing it feels."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"That\'s just the kind of girl I am," you smirk. "I\'m a power bottom."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcDoggyPref1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['doggy_fuck'] === 1) {
    scene.actions([
      { label: 'When we did it doggy', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I liked it when you fucked me from behind," you smile.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like it doggy?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like it doggy?"`);
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"Hmmm... It\'s not <i>usually</i> my favorite," you shrug. "But it was good this time. Nice to mix things up."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Hell yes," you grin. "It feels so much better when you fuck me from behind."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Hell yes," you grin. "Don\'t you know? Your cock goes deeper in doggy."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"It feels dirty," you grin wickedly. "And I like it dirty."');
    // TODO-QSP: dynamic text: "You dirty girl," <<$npcdesc>> smirks back.
    scene.text(`"You dirty girl," ${((s as any).npcdesc ?? 0)} smirks back.`);
    scene.text('"Stop!" you tease. "You\'re gonna make me come."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer doggystyle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I wish we could\'ve done it doggystyle," you tell him.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like it like that?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like it like that?"`);
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"It feels better on all fours," you smirk wistfully.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"It goes deeper from behind," you smirk wistfully.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"I like it dirty. And nothing\'s dirtier than doggystyle," you grin wickedly.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcCowgirlPref1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cowgirl_fuck'] === 1) {
    scene.actions([
      { label: 'When I got to ride you', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.mp4');
    scene.text('"I liked it when I got to be on top," you smile.');
    if (((s as any).sex_ev ?? 0)?.['cowgirl_dom'] === 1) {
      // TODO-QSP: dynamic text: "Yeah, you really took charge," <<$npc_usedname[$npcID]>> says, blushing.
      scene.text(`"Yeah, you really took charge," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} says, blushing.`);
    } else {
      // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like to ride?"
      scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like to ride?"`);
    }
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"It\'s not <i>usually</i> my favorite," you shrug in amusement. "But who doesn\'t like a good ride now and then?"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"I love bouncing on dick!" you say. "I can\'t get that feeling in any other position."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"The angle\'s better," you grin. "Rubs against the inside of my pussy in a whole different way."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the control', handler: (st: GameState) => {
    scene.text('"I like being in charge," you smirk.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer being on top', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.mp4');
    scene.text('"I really wanted to ride you," you tell him.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like cowgirl?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like cowgirl?"`);
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Bouncing on dick is the best feeling in the world," you reply wistfully. "Wish I could\'ve felt it today..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"The angle\'s better," you reply wistfully. "Rubs against the inside of my pussy in a whole different way. Wish I could\'ve gotten that kind of rubbing today..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the control', handler: (st: GameState) => {
    scene.text('"I want to be in charge," you reply ruefully. "It\'s no fun being on bottom."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcRoughGentleFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['gentle_fuck'] === 1) {
    scene.actions([
      { label: 'When he was gentle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "I liked it when you were gentle," you say, smiling warmly at <<$npcdesc>>.
    scene.text(`"I liked it when you were gentle," you say, smiling warmly at ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer it gentle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Would\'ve been nice if you were a little more gentle," you say wistfully. "I like it softer."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['rough_fuck'] === 1) {
      scene.actions([
        { label: 'When he got rough with you', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you got rough with me," you grin.');
    // TODO-QSP: dynamic text: "You like it rough?" <<$npcdesc>> grins back.
    scene.text(`"You like it rough?" ${((s as any).npcdesc ?? 0)} grins back.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not always," you shrug. "But what girl doesn\'t like a bit of rough housing now and again?"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love it when guys get rough with me," you admit freely. "There\'s something so sexy about it, something so intense, so <i>primal</i>. And I love the exhausted feeling that comes after like we just fucked each other\'s brains out."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the force', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love it when guys get rough with me," you admit freely. "That feeling of getting <i>pounded</i>, when I can feel your fucking through my entire body; I love that the most."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the pain', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love it when guys get rough with me," you admit freely. "I kind of hurts, but in like a good way. There\'s something so sexy about it, something so intense, so <i>primal</i>. And I love the exhausted feeling that comes after like we just fucked each other\'s brains out."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Sub', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I love it when guys get rough with me," you admit freely. "Especially when they do it in a way that is like they\'re just <i>taking</i> what they want and I\'m powerless to stop them. I don\'t know what it is, but there\'s just something <i>hot</i> about that."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_knows_pc_likes_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'The usual pounding', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Just the usual pounding," you grin. "I love it when you fuck me hard."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    scene.actions([
      { label: 'When he fucked you hard', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you fucked me hard," you grin.');
    // TODO-QSP: dynamic text: "You like it rough?" <<$npcdesc>> grins.
    scene.text(`"You like it rough?" ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not always," you shrug. "But any one speed is boring if you don\'t mix it up. A good pounding is always welcome provided the timing is right."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Yeah," you admit freely. "Nothing I love more than a good pounding."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcFuckFav2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Be shy about it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.text('"I liked- I liked the sex," you mumble, a crimson blush spreading through your cheeks.');
      // TODO-QSP: dynamic text: "Not bad for your first time huh?" <<$npcdesc>> grins back.
      scene.text(`"Not bad for your first time huh?" ${((s as any).npcdesc ?? 0)} grins back.`);
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('You shake your head, smiling shyly, feeling your blush intensify.');
    scene.text('<i>Oh my! How embarrassing!</i>');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Wish I hadn\'t waited', handler: (st: GameState) => {
    scene.text('"Makes me wish I hadn\'t waited so long," you smile shyly, feeling your blush intensify. "I didn\'t know sex felt this good."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_favorite_part', 'pc_miss_pref2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_doggy_pref2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_cowgirl_pref2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_rough_gentle_fav2');
    }
  } },
    ]);
  }
  scene.build();
}

function enterPcMissPref2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['miss_fuck'] === 1) {
    scene.actions([
      { label: 'When we did it missionary', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when... when we did it in missionary," you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "That's your favorite position?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "That's your favorite position?"`);
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"It, uhm... it\'s not usually my favorite," you stammer. "But something about it was nice this time."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify, managing to stammer out, "I-it\'s pleasant..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify, managing to stammer out, "I-it\'s kind of intimate... I liked that..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like feeling his weight', handler: (st: GameState) => {
    scene.text('"I could feel the <i>weight</i> of you when you\'re on top... The entire weight of your body concentrated on your cock inside me..." The obscenity of what you just said out loud suddenly hits you and your blush intensifies immediately and you start stammering. "I-it... uhm... It felt... good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "I like... I like being on the bottom..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer missionary', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it... doing it in missionary," you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "That's your favorite position?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "That's your favorite position?"`);
    scene.actions([
      { label: 'It\'s pleasant', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify, managing to stammer out, "I-it\'s pleasant..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'It\'s intimate', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify, managing to stammer out, "I-it\'s kind of intimate... I like that about it..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Want to feel his weight', handler: (st: GameState) => {
    scene.text('"I like the feeling of a guy on top of me," you confess. "The entire weight of his body concentrated on his cock inside me..."');
    scene.text('The obscenity of what you just said out loud suddenly hits you and your blush intensifies immediately and you start stammering.');
    scene.text('"I-it... uhm... It feels... good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like being on bottom', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "I uhm... I like being on the bottom..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcDoggyPref2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['doggy_fuck'] === 1) {
    scene.actions([
      { label: 'When we did it doggy', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you, uhm... when you did me from behind..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like it doggy?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like it doggy?"`);
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"Not usually my favorite," you stammer. "But something about it was nice this time."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... feels better from behind..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It goes... deeper... from behind..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit. "I kind of like how, uhm... <i>dirty</i>... it feels..."');
    // TODO-QSP: dynamic text: "You dirty girl," <<$npcdesc>> replies and you feel your blush intensify.
    scene.text(`"You dirty girl," ${((s as any).npcdesc ?? 0)} replies and you feel your blush intensify.`);
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer doggystyle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I like, uhm... I like taking it from behind..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like it doggy?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like it doggy?"`);
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... feels better from behind..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Goes deeper', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It goes... deeper... from behind..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit. "I kind of like how, uhm... <i>dirty</i>... it feels..."');
    // TODO-QSP: dynamic text: "You dirty girl," <<$npcdesc>> replies and you feel your blush intensify.
    scene.text(`"You dirty girl," ${((s as any).npcdesc ?? 0)} replies and you feel your blush intensify.`);
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcCowgirlPref2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cowgirl_fuck'] === 1) {
    scene.actions([
      { label: 'When I got to ride you', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when, uhm... when I got to be on top..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like to ride?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like to ride?"`);
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"Not usually my favorite," you stammer. "But something about it was nice this time."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... feels better when I\'m on top..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It hits, uh... different part, when I\'m on top..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the control', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit. "I kind of like how I\'m, uhm... in control..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Prefer being on top', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I like it when, uhm... when I get to be on top..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "Yeah?" <<$npcdesc>> grins back. "You like to ride?"
    scene.text(`"Yeah?" ${((s as any).npcdesc ?? 0)} grins back. "You like to ride?"`);
    scene.actions([
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It feels better when I\'m on top..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Good angle', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It hits, uh... a different part, when I\'m on top..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Like the control', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit. "I kind of like how, uhm... being in control..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcRoughGentleFav2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['gentle_fuck'] === 1) {
    scene.actions([
      { label: 'When you were gentle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you were, uhm... when you fucked me softly..." you say, a crimson blush spreading through your cheeks.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['rough_fuck'] === 1) {
      scene.actions([
        { label: 'When you got rough with me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you, uhm... when you got rough with me..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "You like it rough?" <<$npcdesc>> grins.
    scene.text(`"You like it rough?" ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not a-always," you stammer. "But the variety was nice..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... felt good... getting manhandled by you..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Liked the pain', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It hurt but... the hurt felt good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'I didn\'t know until now', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I uhm... I didn\'t know until you did it," you admit, feeling your blush intensify.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'When you fucked me hard', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you, uhm... when you fucked me hard..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "You like to get pounded?" <<$npcdesc>> grins.
    scene.text(`"You like to get pounded?" ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not a-always," you stammer. "But it\'s nice now and again..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... feels good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcAnalPref1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
  if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
    scene.text('"I liked it when you fucked my ass," you grin, unable to contain yourself.');
    // TODO-QSP: dynamic text: "Not bad for your first time huh?" <<$npcdesc>> grins back.
    scene.text(`"Not bad for your first time huh?" ${((s as any).npcdesc ?? 0)} grins back.`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Not bad at all," you say, with a shake of your head. "You made for a memorable first time."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Wish I hadn\'t waited', handler: (st: GameState) => {
    scene.text('"Makes me wish I hadn\'t waited so long," you sigh. "I would have let a guy fuck my ass ages ago if I knew it felt this good!"');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    scene.text('"I liked it when you fucked my ass," you grin.');
    if ((Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('innocent') : -1) >= 0  ||  (Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('nerdy') : -1) >= 0) {
      scene.text('"You\'re a lot more wild than you look," he says, looking at you with amused surprise.');
      scene.actions([
        { label: 'Appearances aren\'t everything', handler: (st: GameState) => {
    scene.text('"You shouldn\'t judge a book by its cover," you smirk back.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Sheltered upbringing', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Blame my sheltered upbringing," you smirk back. "With a <<$lcase($npc_nickname[...
    scene.text(`"Blame my sheltered upbringing," you smirk back. "With a ${qspUntranslated(s, "lcase(npc_nickname['A29'])", { location: "sex_ev_favorite_part" })} as controlling as mine, you end up looking one way and running the other."`);
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"I knew you were a buttslut," he grins back.');
        scene.actions([
          { label: 'Damn right', handler: (st: GameState) => {
    scene.text('"Damn right I am," you say proudly.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.text('"You\'ve got a tight one," he says, looking at yours admiringly.');
      }
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_rough_gentle_fav1');
    scene.actions([
      { label: 'Not usually', handler: (st: GameState) => {
    scene.text('"Anal isn\'t <i>usually</i> my favorite," you admit. "But it was good this time. Nice to mix things up."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"Anal feels so much better than vaginal," you continue. "The pleasure is <i>completely</i> different."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels different', handler: (st: GameState) => {
    scene.text('"Anal sex feels so different from vaginal sex," you continue. "It\'s an itch that can only be scratched one way."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Feels dirty', handler: (st: GameState) => {
    scene.text('"It feels dirty," you grin wickedly. "And I like it dirty."');
    // TODO-QSP: dynamic text: "You dirty girl," <<$npcdesc>> smirks back.
    scene.text(`"You dirty girl," ${((s as any).npcdesc ?? 0)} smirks back.`);
    scene.text('"Stop!" you tease. "You\'re gonna make me come."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
    scene.actions([
      { label: 'When you came together', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      scene.text('"It was <i>amazing</i> when we came together," you gush.');
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Hey, when you\'re good, you\'re good," he says smugly.');
      } else {
        scene.text('"Yeah. That was great," he says, nodding in agreement.');
      }
    } else {
      if (((s as any).stat ?? 0)?.['simultaneous_orgasm_count'] === 0) {
        scene.text('"When we came together," you smile warmly. "I\'ve never had a simultaneous orgasm like that before."');
      } else {
        scene.text('"When we came together," you smile warmly. "There\'s nothing better than a simultaneous orgasm."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterPcAnalPref2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Be shy about it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.text('"I liked- I liked the sex," you mumble, a crimson blush spreading through your cheeks.');
      // TODO-QSP: dynamic text: "Not bad for your first time huh?" <<$npcdesc>> grins back.
      scene.text(`"Not bad for your first time huh?" ${((s as any).npcdesc ?? 0)} grins back.`);
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('You shake your head, smiling shyly, feeling your blush intensify.');
    scene.text('<i>Oh my! How embarrassing!</i>');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Wish I hadn\'t waited', handler: (st: GameState) => {
    scene.text('"Makes me wish I hadn\'t waited so long," you smile shyly, feeling your blush intensify. "I didn\'t know sex felt this good."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_favorite_part', 'pc_miss_pref2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_doggy_pref2');
      qspCall(s, 'sex_ev_favorite_part', 'pc_cowgirl_pref2');
      if (((s as any).sex_ev ?? 0)?.['gentle_fuck'] === 1) {
        scene.actions([
          { label: 'When you were gentle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you were, uhm... when you fucked me softly..." you say, a crimson blush spreading through your cheeks.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['rough_fuck'] === 1) {
          scene.actions([
            { label: 'When you got rough with me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you, uhm... when you got rough with me..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "You like it rough?" <<$npcdesc>> grins.
    scene.text(`"You like it rough?" ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not a-always," you stammer. "But the variety was nice..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... felt good... getting manhandled by you..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Liked the pain', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It hurt but... the hurt felt good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'I didn\'t know until now', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I uhm... I didn\'t know until you did it," you admit, feeling your blush intensify.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'When you fucked me hard', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I liked it when you, uhm... when you fucked me hard..." you say, a crimson blush spreading through your cheeks.');
    // TODO-QSP: dynamic text: "You like to get pounded?" <<$npcdesc>> grins.
    scene.text(`"You like to get pounded?" ${((s as any).npcdesc ?? 0)} grins.`);
    scene.actions([
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Not a-always," you stammer. "But it\'s nice now and again..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Admit it', handler: (st: GameState) => {
    scene.text('"Y-yes," you admit, feeling your blush intensify. "It... feels good..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterPcCuniFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cuni_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['facesit_count'] > 0) {
      scene.actions([
        { label: 'Enjoyed sitting on his face', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'pussyeating') {
      scene.text('"That was my favorite part too," you grin. "But specifically when I sat on your face. I bet you were practically drowning in my girl cum."');
    } else {
      scene.text('"I liked it when I sat on your face," you grin. "Your head between my thighs was amazing. I think I got off on the face sitting as much as I did the pussy licking."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['creampie_eat'] > 0) {
      scene.actions([
        { label: 'It was hot when he ate the creampie out of you', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'pussyeating') {
      scene.text('"When you ate the creampie out of my pussy," you grin, shuddering at the memory. "I know you love eating pussy, but holy fuck, that was so hot."');
    } else {
      scene.text('"When you ate the creampie out of my pussy," you grin, shuddering at the memory. "Holy fuck, that was so hot."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    scene.actions([
      { label: 'He\'d good at giving head', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'pussyeating') {
      scene.text('"That was my favorite part too," you grin. "When you ate me out. You\'re just so good at it!"');
    } else {
      // TODO-QSP: dynamic text: "I liked it when you ate me out ' + iif($sex_ev['boy_favorite'] = 'pussyeating',...
      scene.text('"I liked it when you ate me out \' + iif($sex_ev[\'boy_favorite\'] = \'pussyeating\', \'too\', \') + \'," you grin. "A tongue playing with the little man in the boat drives me crazy. I love it."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterPcCreampieFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: 'Liked it when he came inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'creampie'  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).sex_ev ?? 0)?.['surprise_creampie_count'] > 0  &&  ((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        // TODO-QSP: dynamic text: "I... liked it when you came inside me," you admit, quickly holding up your fing...
        scene.text(`"I... liked it when you came inside me," you admit, quickly holding up your finger before ${((s as any).npcdesc ?? 0)} can say anything. "But you still need to ask before you do it! You know I'm not on birth control so it's extra important!"`);
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
          // TODO-QSP: dynamic text: "I... liked it when you came inside me," you admit, quickly holding up your fing...
          scene.text(`"I... liked it when you came inside me," you admit, quickly holding up your finger before ${((s as any).npcdesc ?? 0)} can say anything. "But you still need to ask before you do it! I'm not on birth control so it's dangerous."`);
        } else {
          // TODO-QSP: dynamic text: "I... liked it when you came inside me," you admit, quickly holding up your fing...
          scene.text(`"I... liked it when you came inside me," you admit, quickly holding up your finger before ${((s as any).npcdesc ?? 0)} can say anything. "But you still need to ask before you do it! Just because it feels good doesn't mean you can't ask permission!"`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'creampie') {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: "I liked it when you came inside too," you smile warmly at <<$npcdesc>> rubbing ...
          scene.text(`"I liked it when you came inside too," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum continues to leak from your pussy. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        } else {
          // TODO-QSP: dynamic text: "I liked it when you came inside too," you smile warmly at <<$npcdesc>> rubbing ...
          scene.text(`"I liked it when you came inside too," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum was leaking from your snatch just minutes ago. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        }
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: "I liked it when you came inside me," you smile warmly at <<$npcdesc>> rubbing y...
          scene.text(`"I liked it when you came inside me," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum continues to leak from your pussy. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        } else {
          // TODO-QSP: dynamic text: "I liked it when you came inside me," you smile warmly at <<$npcdesc>> rubbing y...
          scene.text(`"I liked it when you came inside me," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum was leaking from your snatch just minutes ago. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_convo'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).sex_ev ?? 0)?.['risky_creampie'] > 0  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'prob_safe') {
      qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
    } else {
      qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
    ]);
  }
  scene.build();
}

function enterPcAnalCreampieFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['anal_creampie_count'] > 0) {
    scene.actions([
      { label: 'Liked it when he came in your ass', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'creampie') {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        // TODO-QSP: dynamic text: "I liked it more when you came in my ass," you grin at <<$npcdesc>> rubbing your...
        scene.text(`"I liked it more when you came in my ass," you grin at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum continues to leak from both your holes. "The way your cock <i>throbbed</i> inside it, I could feel your cum filling me up. It felt so good."`);
      } else {
        // TODO-QSP: dynamic text: "I liked it when you came inside too," you smile warmly at <<$npcdesc>> rubbing ...
        scene.text(`"I liked it when you came inside too," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum was leaking from your snatch just minutes ago. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'anal_creampie') {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: "I liked it more when you came in my ass," you grin at <<$npcdesc>> rubbing your...
          scene.text(`"I liked it more when you came in my ass," you grin at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum continues to leak from both your holes. "The way your cock <i>throbbed</i> inside it, I could feel your cum filling me up. It felt so good."`);
        } else {
          // TODO-QSP: dynamic text: "I liked it when you came inside too," you smile warmly at <<$npcdesc>> rubbing ...
          scene.text(`"I liked it when you came inside too," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum was leaking from your snatch just minutes ago. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        }
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          // TODO-QSP: dynamic text: "I liked it when you came inside me," you smile warmly at <<$npcdesc>> rubbing y...
          scene.text(`"I liked it when you came inside me," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum continues to leak from your pussy. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        } else {
          // TODO-QSP: dynamic text: "I liked it when you came inside me," you smile warmly at <<$npcdesc>> rubbing y...
          scene.text(`"I liked it when you came inside me," you smile warmly at ${((s as any).npcdesc ?? 0)} rubbing your wet thighs together where his cum was leaking from your snatch just minutes ago. "The way your cock <i>throbbed</i> inside me, I could feel your cum filling me up. It felt so good."`);
        }
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterPcMouthcumFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['mouth_cum_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['swallow_count'] > 0  &&  ((s as any).npc_gross_cum ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'When I swallowed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'swallowing') {
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
        scene.text('"I liked it when I swallowed your cum," you admit with a smile. "There\'s something strangely hot about gulping down a guy\'s load. And it tastes good too."');
      } else {
        scene.text('"I liked it when I swallowed your cum," you admit with a smile. "There\'s something strangely hot about gulping down a guy\'s load, even if I don\'t like the taste. Maybe it\'s just the look on your face when I swallow," you smirk mischievously.');
      }
      qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      // TODO-QSP: dynamic text: "I liked it when I swallowed your cum," you tell <<$npcdesc>>.
      scene.text(`"I liked it when I swallowed your cum," you tell ${((s as any).npcdesc ?? 0)}.`);
      scene.text('"What did you like about it?" he asks in response, eyes gleaming with arousal and curiosity.');
      scene.actions([
        { label: 'The situation', handler: (st: GameState) => {
    scene.text('"Just... doing it I guess?" you say with a shy smile. "There\'s just something... <i>hot</i> about swallowing a guys\'s load. I don\'t really get it myself if I\'m being honest. All I know is that it turns me on."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'The look on your face', handler: (st: GameState) => {
    scene.text('"The look on your face," you grin devilishly at him. "You have no idea but guy\'s faces just <i>light up</i> when you swallow their cum. There\'s something so funny about it. And so arousing..."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'The taste', handler: (st: GameState) => {
    scene.text('"I just like the taste," you grin. "Besides, it\'s already in my mouth. Feels like a waste if I spit it out. Might as well get some protein in my diet."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Liked when he came in your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'swallowing') {
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
        scene.text('"I liked it when you came in my mouth too," you admit with a smile. "There\'s something strangely hot about gulping down a guy\'s load. And it tastes good too."');
      } else {
        scene.text('"I liked it when you came in my mouth too," you admit with a smile. "There\'s something strangely hot about gulping down a guy\'s load, even if I don\'t like the taste. Maybe it\'s just the look on your face when I swallow," you smirk mischievously.');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'cum_in_mouth') {
        scene.text('"I liked it when you came in my mouth too," you admit with a smile. "There\'s something strangely hot about a guy pumping load after load into your mouth. Turns me on for some reason. Even though I don\'t like swallowing."');
      } else {
        scene.text('"I liked it when you came in my mouth," you smile. "There\'s something strangely hot about a guy pumping load after load into your mouth. Turns me on for some reason."');
      }
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterPcFacialFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['facial_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['disgusting_facial'] === 0) {
      scene.actions([
        { label: 'Liked getting facialed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'facial') {
      scene.text('"The same as you," you admit with a smile. "There\'s something strangely hot about when a guy blows his load all over my face. I just feel... <i>sexy</i>."');
      // TODO-QSP: dynamic text: "You look sexy too," <<$npcdesc>> grins.
      scene.text(`"You look sexy too," ${((s as any).npcdesc ?? 0)} grins.`);
    } else {
      scene.text('"I liked it when you came on my face," you smile. "There\'s something strangely hot about when a guy blows his load all over my face. I just feel... <i>sexy</i>."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  scene.build();
}

function enterPcTitcumFav1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_tits'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['tit_cum_gross'] === 0) {
      scene.actions([
        { label: 'Liked it when he came on your tits', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_favorite'] === 'tit_cum') {
      scene.text('"The same as you," you admit with a smile. "There\'s something strangely hot about when a guy blows his load all over my tits. I just feel... <i>sexy</i>. And the warmth is oddly comforting..."');
      // TODO-QSP: dynamic text: "You look sexy too," <<$npcdesc>> grins.
      scene.text(`"You look sexy too," ${((s as any).npcdesc ?? 0)} grins.`);
    } else {
      scene.text('"I liked it when you came on my face," you smile. "There\'s something strangely hot about when a guy blows his load all over my face. I just feel... <i>sexy</i>. And the warmth is oddly comforting..."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  scene.build();
}

function enterPcBrokenCondom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['broken_condom_creampie_cum'] === 1) {
    scene.actions([
      { label: 'When the condom broke', handler: (st: GameState) => {
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"When, er-" You feel yourself blushing already but force yourself to stammer out the rest. "When the condom, uhm... broke..."');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterGoodForYouToo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
    scene.actions([
      { label: 'Didn\'t get to come', handler: (st: GameState) => {
    scene.actions([
      { label: 'Irritable', handler: (st: GameState) => {
    scene.text('"You need to up your game," you sigh irritably. "I didn\'t even come once."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Teasing', handler: (st: GameState) => {
    scene.text('"I didn\'t manage to come even once," you smirk wistfully, rubbing your thighs together. "You need to up your game."');
    scene.text('"I\'ll work on it," he smiles back shyly.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      { label: 'Lie', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"You were great," you smile, lying through your teeth.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Good dicking', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('"You gave me a <i>good</i> dicking," you grin back. "What more could I ask for?"');
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Dick drunk', handler: (st: GameState) => {
    scene.text('"I think I\'m dick drunk," you say with a ditzy giggle, rubbing your wet thighs together.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  }
  if (((s as any).pain ?? 0)?.['vaginal'] > 40) {
    scene.actions([
      { label: 'Won\'t walk right', handler: (st: GameState) => {
    scene.actions([
      { label: '(in a good way)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sore_pussy_talk'] = 1;
    if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
      // TODO-QSP: dynamic text: "I'm not gonna be able to walk right for a week either," you say, rubbing your t...
      scene.text(`"I'm not gonna be able to walk right for a week either," you say, rubbing your thighs over your thoroughly fucked sex and grinning as you add, "I think you might've pounded my pussy into a ${((s as any).npcdesc ?? 0)} shape."`);
    } else {
      // TODO-QSP: dynamic text: "I'm not gonna be able to walk right for a week," you say, rubbing your thighs o...
      scene.text(`"I'm not gonna be able to walk right for a week," you say, rubbing your thighs over your thoroughly fucked sex and grinning as you add, "I think you might've pounded my pussy into a ${((s as any).npcdesc ?? 0)} shape."`);
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: '(in a bad way)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['keep_it_up'] = 1;
    ((s as any).sex_ev ?? {})['sore_pussy_talk'] = 1;
    if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
      scene.text('"I might not be able to walk right for a week either," you wince, rubbing your thighs over your aching pussy. "I might have a hard time sitting down tomorrow..."');
    } else {
      scene.text('"I\'m not gonna be able to walk right for a week," you wince, rubbing your thighs over your aching pussy. "I might have a hard time sitting down tomorrow..."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pain ?? 0)?.['vaginal'] > 10) {
      scene.actions([
        { label: 'Sore pussy', handler: (st: GameState) => {
    scene.actions([
      { label: '(in a good way)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sore_pussy_talk'] = 1;
    scene.text('"I\'m a little sore," you say with a half smile, rubbing your wet thighs together over your delightfully tender sex. "But in a good way."');
    if (((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Like the soreness after a workout?" <<$npcdesc>> asks amusedly.
      scene.text(`"Like the soreness after a workout?" ${((s as any).npcdesc ?? 0)} asks amusedly.`);
      scene.text('"Yeah," you nod. "Something like that. But in my pussy."');
    } else {
      // TODO-QSP: dynamic text: "How can you feel sore in a good way?" <<$npcdesc>> asks amusedly.
      scene.text(`"How can you feel sore in a good way?" ${((s as any).npcdesc ?? 0)} asks amusedly.`);
      scene.text('"I just do," you shrug. "Besides, it\'s your fault for fucking me so well."');
    }
    scene.text('You both grin at that.');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: '(in a bad way)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sore_pussy_talk'] = 1;
    scene.text('"We went a few more times than I would\'ve liked," you say with a half smile, half grimace, rubbing your thighs together over your sore pussy. "My pussy kind of hurts."');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm_count'] + ((s as any).sex_ev ?? 0)?.['fake_orgasm_count'] > 3) {
    scene.actions([
      { label: 'Lots of orgasms', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You made me come lots," you say, flashing a tired smile at <<$npcdesc>>. "It wa...
    scene.text(`"You made me come lots," you say, flashing a tired smile at ${((s as any).npcdesc ?? 0)}. "It was more than good."`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.actions([
        { label: 'You got me off', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You got me off," you say, smiling at <<$npcdesc>>. "How could I complain?"
    scene.text(`"You got me off," you say, smiling at ${((s as any).npcdesc ?? 0)}. "How could I complain?"`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
    scene.actions([
      { label: 'Could\'ve gone more rounds', handler: (st: GameState) => {
    scene.text('"I could\'ve gone a few more rounds," you say wistfully.');
    scene.text('"Sorry," he says, looking a little embarrassed. "The spirit is willing, but the flesh is spongey and bruised.');
    scene.actions([
      { label: 'Laugh', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>>'s response makes you laugh out loud.
    scene.text(`${((s as any).npcdesc ?? 0)}'s response makes you laugh out loud.`);
    scene.text('"That\'s okay," you giggle. "I forgive you."');
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
      { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    // TODO-QSP: dynamic text: You roll your eyes to the heavens though <<$npcdesc>> looks quite amused by his ...
    scene.text(`You roll your eyes to the heavens though ${((s as any).npcdesc ?? 0)} looks quite amused by his own joke.`);
    scene.text('"You\'ve endured such hardship, getting fucked by me so many times," you say flatly.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] + ((s as any).sex_ev ?? 0)?.['anal_creampie_count'] >= 4  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anal'] > 0)) {
    scene.actions([
      { label: 'I\'m full (of cum)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['creampie_pillow_talk'] = 1;
    if (((s as any).cum_loc ?? 0)?.['anus'] < 1) {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
      // TODO-QSP: dynamic text: "I'm all full," you smile, rubbing your belly in tired satisfaction as <<$npcdes...
      scene.text(`"I'm all full," you smile, rubbing your belly in tired satisfaction as ${((s as any).npcdesc ?? 0)}'s cum overflows from your snatch.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] < 1) {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
        // TODO-QSP: dynamic text: "I'm all full," you smile, rubbing your belly in tired satisfaction as <<$npcdes...
        scene.text(`"I'm all full," you smile, rubbing your belly in tired satisfaction as ${((s as any).npcdesc ?? 0)}'s cum seeps from your asshole.`);
      } else {
        scene.img('images/shared/sex/cum/both_holes1.jpg');
        // TODO-QSP: dynamic text: "I'm all full," you smile, rubbing your belly in tired satisfaction as <<$npcdes...
        scene.text(`"I'm all full," you smile, rubbing your belly in tired satisfaction as ${((s as any).npcdesc ?? 0)}'s cum seeps out from both your holes.`);
      }
    }
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    ]);
  }
  scene.actions([
    { label: 'Satisfied', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I had fun," you say, smiling at <<$npcdesc>>.
    scene.text(`"I had fun," you say, smiling at ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_favorite_part', 'pc_favorite_part');
  } },
    { label: 'Unsatisfied', handler: (st: GameState) => {
    scene.text('"Not really," you sigh.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'It was okay', handler: (st: GameState) => {
    // TODO-QSP: '"It was fine I guess," you shrug.' + iif(sex_ev['virgin'] ! 1, ' "Wasn''t the worst lay I''ve ever ...
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
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
    case 'good_for_you2':
      enterGoodForYou2(s, scene);
      break;
    case 'creampie_favorite':
      enterCreampieFavorite(s, scene);
      break;
    case 'cum_mouth_favorite':
      enterCumMouthFavorite(s, scene);
      break;
    case 'facial_favorite':
      enterFacialFavorite(s, scene);
      break;
    case 'tit_cum_favorite':
      enterTitCumFavorite(s, scene);
      break;
    case 'pussyeat_favorite':
      enterPussyeatFavorite(s, scene);
      break;
    case 'npc_miss_fav1':
      enterNpcMissFav1(s, scene);
      break;
    case 'npc_doggy_fav1':
      enterNpcDoggyFav1(s, scene);
      break;
    case 'npc_cowgirl_fav1':
      enterNpcCowgirlFav1(s, scene);
      break;
    case 'npc_anal_fav1':
      enterNpcAnalFav1(s, scene);
      break;
    case 'npc_argue_lashout':
      enterNpcArgueLashout(s, scene);
      break;
    case 'npc_bj_fav1':
      enterNpcBjFav1(s, scene);
      break;
    case 'pc_favorite_part':
      enterPcFavoritePart(s, scene);
      break;
    case 'pc_nothing_fav':
      enterPcNothingFav(s, scene);
      break;
    case 'pc_bj_fav1':
      enterPcBjFav1(s, scene);
      break;
    case 'pc_bj_fav2':
      enterPcBjFav2(s, scene);
      break;
    case 'pc_bj_fav3':
      enterPcBjFav3(s, scene);
      break;
    case 'pc_fuck_fav1':
      enterPcFuckFav1(s, scene);
      break;
    case 'pc_miss_pref1':
      enterPcMissPref1(s, scene);
      break;
    case 'pc_doggy_pref1':
      enterPcDoggyPref1(s, scene);
      break;
    case 'pc_cowgirl_pref1':
      enterPcCowgirlPref1(s, scene);
      break;
    case 'pc_rough_gentle_fav1':
      enterPcRoughGentleFav1(s, scene);
      break;
    case 'pc_fuck_fav2':
      enterPcFuckFav2(s, scene);
      break;
    case 'pc_miss_pref2':
      enterPcMissPref2(s, scene);
      break;
    case 'pc_doggy_pref2':
      enterPcDoggyPref2(s, scene);
      break;
    case 'pc_cowgirl_pref2':
      enterPcCowgirlPref2(s, scene);
      break;
    case 'pc_rough_gentle_fav2':
      enterPcRoughGentleFav2(s, scene);
      break;
    case 'pc_anal_pref1':
      enterPcAnalPref1(s, scene);
      break;
    case 'pc_anal_pref2':
      enterPcAnalPref2(s, scene);
      break;
    case 'pc_cuni_fav1':
      enterPcCuniFav1(s, scene);
      break;
    case 'pc_creampie_fav1':
      enterPcCreampieFav1(s, scene);
      break;
    case 'pc_anal_creampie_fav1':
      enterPcAnalCreampieFav1(s, scene);
      break;
    case 'pc_mouthcum_fav1':
      enterPcMouthcumFav1(s, scene);
      break;
    case 'pc_facial_fav1':
      enterPcFacialFav1(s, scene);
      break;
    case 'pc_titcum_fav1':
      enterPcTitcumFav1(s, scene);
      break;
    case 'pc_broken_condom1':
      enterPcBrokenCondom1(s, scene);
      break;
    case 'good_for_you_too':
      enterGoodForYouToo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_favorite_part: LocationDef = {
  name: 'sex_ev_favorite_part',
  title: '"I liked fucking you," he grins. "Especially when I got to b',
  region: 'other',
  enter: enter,
};
