import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you2'
  } },
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
      // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you_too'
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"You fucked me so hard my dick hurts," he says grinning. "So yeah, it was good."');
      } else {
        scene.text('"I could\'ve gone a few more times," he says. "But it wasn\'t bad. What about you?"');
      }
      // TODO-QSP: xgt 'sex_ev_favorite_part', 'good_for_you_too'
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
      { label: 'You didn\'t ask', handler: (st: GameState) => {
    scene.text('"Cause you didn\'t ask!" you scowl. "Only thing I knew was that you pulled out and before I could say anything you\'re blowing your load on my face."');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    }
    // TODO-QSP: end !}
    scene.actions([
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
    default:
      enterGoodForYou(s, scene);
      break;
  }
}

export const sex_ev_favorite_part: LocationDef = {
  name: 'sex_ev_favorite_part',
  title: '"I liked fucking you," he grins. "Especially when I got to b',
  region: 'other',
  enter: enter,
};
