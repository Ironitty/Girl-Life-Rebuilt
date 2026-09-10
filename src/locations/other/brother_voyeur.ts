import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShowertalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = ((s as any).npc_dick ?? 0)?.['A' + String(34)];
  if (((s as any).brotherQW ?? 0)?.['shower_talk'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['brother_voyeur', 'showertalk2'] }]);
  }
  (s as any).brotherQW['shower_talk'] = ((s as any).brotherQW['shower_talk'] ?? 0) + (1);
  scene.img('images/shared/home/bathroom/brothertalk1.jpg');
  scene.text('Through the crack in the door you make eye contact with your brother.');
  scene.text('"Hey Kolka!"');
  // TODO-QSP: dynamic text: You see the shock in his eyes as he realizes he's been caught and moves away, tr...
  scene.text(`You see the shock in his eyes as he realizes he's been caught and moves away, trying to close the door. "Wait! Come in here a sec!" you say, a bright and good-humored smile on your face. "And shut the door behind you! Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29']} or dad see!"`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothertalk2.jpg');
    scene.text('He timidly slips inside, closing the door behind him like you asked, his eyes downcast and ashamed. He clearly still expects you to scold him.');
    scene.text('You laugh at him as quietly as you can, not wanting to draw your parents attention. "Aww, don\'t be like that! I\'m not gonna get you in trouble Kolka."');
    scene.text('"You\'re not?" he says, looking up at you before blushing at your exposed body and turning away again.');
    scene.text('"Of course not silly! I\'m not even mad! I just wanted to catch up with my favorite little brother and I thought, since you were right there, why not now?"');
    scene.text('"Oh, okay…" he nods, still looking away.');
    if (((s as any).npc_rel ?? 0)?.['A34'] <50) {
      qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
    }
    if (((s as any).pcs_inhib ?? 0) >= 40  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 90) {
      scene.actions([
        { label: '"You can look at me you know"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    (s as any).brotherQW['shower_look'] = 1;
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
      (s as any).brotherQW['Sex'] = 2;
    }
    scene.img('images/shared/home/bathroom/brothertalk4.jpg');
    scene.text('"Kolka…" When you say this he starts to turn towards you a little bit but then stops himself and continues to stare at the wall. You sigh sympathetically. "It\'s okay to look at me you know."');
    // TODO-QSP: dynamic text: He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit...
    scene.text(`He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit between your face, your breasts, your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy, the walls, and the floor, unable to make up his mind of where he should be looking.`);
    scene.text('"Yes really!" you laugh. "I told you, I\'m not mad! Yeah, yeah, I know. I\'ve got boobs. I\'ve got a pussy instead of a penis. I know it\'s strange and distracting and all that, but you\'re my brother and I love you! I don\'t want to have to share my conversations between you and the wall. So, I don\'t mind you looking. If it means I can spend this time getting closer to you, you can look all you want. Okay?"');
    scene.text('Kolka\'s eyes finally come to rest on your face, looking at you confidently now. You can tell there\'s love in his eyes and this vulnerability you\'ve shown really means something to him and your relationship with him. "Okay!" he says with an enthusiastic smile.');
    scene.text('"Just don\'t tell anyone else about it!" you laugh when he furiously nods in promised agreement. The two of you happily talk about random topics while you finish up your shower. For the most part, Kolka continues to look at your face but you can\'t help but notice the frequent quick glance at your breasts that ever so slightly widens his smile.');
    scene.text('<i>Boys will be boys after all…</i> you muse to yourself, a smile subconsciously turning the corners of your own lips.');
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    if (((s as any).bro_ass_compliment ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'ass_compliment'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask him about his day', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    scene.text('You casually talk to him about his day while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    if (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
      { label: 'Ask how school\'s going', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    scene.text('You casually chat with him about how he\'s doing in school while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    if (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
      { label: 'Ask him about his friends', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    scene.text('You chat with him about his friends and what he does for fun with them while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    if (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowertalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_QW ?? 0)?.['A34'] <= 1) {
    (s as any).npc_QW['A34'] = 2;
  }
  (s as any).brotherQW['shower_talk'] = ((s as any).brotherQW['shower_talk'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
  if (((s as any).brotherQW ?? 0)?.['shower_look'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['brother_voyeur', 'brothershowerlook'] }]);
  }
  if (((s as any).brothershowerask ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.img('images/shared/home/bathroom/brothertalk1.jpg');
  } else {
    scene.img('images/shared/home/bathroom/brothertalkbusy.jpg');
  }
  scene.text('Seeing your brother spy on you through a crack the door again, call out to him.');
  scene.text('"Hey Kolka! Did you want to have another chat with me while I shower?"');
  if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 2) {
  } else {
    scene.text('He nods shyly at you. "Okay, come on in! Don\'t forget to close the door!"');
    if (((s as any).brotherQW ?? 0)?.['shower_look'] < 1) {
      // TODO-QSP: dynamic text: He nods eagerly. You can't help but smile at his resemblance to a begging puppy....
      scene.text(`He nods eagerly. You can't help but smile at his resemblance to a begging puppy. "Well hurry up then!" you say. "Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29']} catches you coming in!"`);
    } else {
      // TODO-QSP: dynamic text: He nods enthusiastically, unable to hide his eager grin. "Well hurry up then!" y...
      scene.text(`He nods enthusiastically, unable to hide his eager grin. "Well hurry up then!" you say with a smile to match his. "Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29']} catches us!"`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).brotherQW ?? 0)?.['shower_look'] >= 1) {
      scene.actions([{ label: 'Continue', goto: ['brother_voyeur', 'brothershowerlook'] }]);
    }
    if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
      qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
    }
    scene.img('images/shared/home/bathroom/brothertalk3.jpg');
    scene.text('He slips inside and sits on the toilet again, staring at the wall, though not before "sneaking" a peek at your exposed breasts.');
    scene.text('What do you want to talk about with him today?');
    if (((s as any).pcs_horny ?? 0) >= 55) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    scene.text('While talking to your brother you can\'t help but be distracted from the conversation by the heat of arousal coming from your pussy. A crazy idea comes into your head and you suddenly consider using the showerhead on your pussy while your brother is sitting right there.');
    scene.text('Are you really going to do this?');
    scene.actions([
      { label: 'Don\'t do it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('Deciding it\'s too risky, you continue the conversation normally, though you find yourself unconsciously rubbing your thighs together and the denial of your release increasing your frustration some more.');
    if (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
      { label: 'Do it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('Unable to help yourself, you decide to risk it. After taking a quick look at your brother to make sure he\'s still facing away you gently lower the showerhead between your legs.');
    scene.text('As the pressure builds on your pussy your responses to what your brother is saying become increasingly close to moans, often being monosyllabic or simple hums and your eyes squeeze tight as you concentrate on the sensation.');
    scene.text('"Mmm. Mhmm~! Mmm-MMMM!"');
    scene.text('Finally, release comes and you begin to quiver, bracing yourself with a hand on the slick shower wall as you ride out your orgasm.');
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', 5, 'incest', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).brother_shower['mast_look'] = Math.floor(Math.random() * 3) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    if (((s as any).brother_shower ?? 0)?.['mast_look'] !== 1) {
      scene.text('After taking a few more seconds to calm down, you peek back out at your brother and he doesn\'t seem to have noticed anything was amiss. With a quiet sigh of relief, you decide to quickly finish washing up.');
    } else {
      scene.text('As your orgasm winds down, you breathe deeply and glance upward towards your brother. You quickly stiffen up when you see what looks to be like the finishing movements of his shoulders turning back forward. Were you so caught up in pleasure that you didn\'t notice that he was watching you masturbate in front of him?');
      scene.text('You gulp and try to continue the conversation normally. His responses seem more or less the same and the conversation doesn\'t seem to be any different other than a burning in your cheeks. Maybe he didn\'t see anything after all? But you can\'t be sure…');
    }
    if (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"You can look at me you know"', handler: (st: GameState) => {
    (s as any).brotherQW['shower_look'] = 1;
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
      (s as any).brotherQW['Sex'] = 2;
    }
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    scene.img('images/shared/home/bathroom/brothertalk4.jpg');
    scene.text('"Kolka…" When you say this he starts to turn towards you a little bit but then stops himself and continues to stare at the wall. You sigh sympathetically. "It\'s okay to look at me you know."');
    // TODO-QSP: dynamic text: He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit...
    scene.text(`He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit between your face, your breasts, your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy, the walls, and the floor, unable to make up his mind of where he should be looking.`);
    scene.text('"Yes really!" you laugh. "Yeah, yeah, I know. I\'ve got boobs. I\'ve got a pussy instead of a penis. I know it\'s strange and distracting and all that, but you\'re my brother and I love you! I don\'t want to have to share my conversations between you and the wall. So, I don\'t mind you looking. If it means I can spend this time getting closer to you, you can look all you want. Okay?"');
    scene.text('Kolka\'s eyes finally come to rest on your face, looking confidently at you confidently now. You can tell there\'s love in his eyes and this vulnerability you\'ve shown really means something to him and your relationship with him. "Okay!" he says with an enthusiastic smile.');
    scene.text('"Just don\'t tell anyone else about it!" you laugh when he furiously nods in promised agreement. The two of you happily talk about random topics while you finish up your shower. For the most part, Kolka continues to look at your face but you can\'t help but notice the frequent quick glance at your breasts that ever so slightly widens his smile.');
    scene.text('<i>Boys will be boys after all…</i> you muse to yourself, a smile subconsciously turning the corners of your own lips.');
    if (((s as any).bro_ass_compliment ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'ass_compliment'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
      ]);
    }
  } },
      { label: 'Ask him about his day', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 6) {
      scene.text('You casually talk to him about his day while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    } else {
      scene.text('He happily talks to you about his day, though he still sits on the toilet facing away. He also still takes a few looks at you now and again but they aren\'t as sneaky and they mostly seem to be glances to see your face. <i>Not that his eyes don\'t wander downward anyways…</i> you notice with a smile.');
      qspCall(s, 'brother_voyeur', 'day_talk');
    }
    scene.actions([
      { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
    ]);
  } },
      { label: 'Ask how school\'s going', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 6) {
      scene.text('You casually chat with him about how he\'s doing in school while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    } else {
      scene.text('He energetically talks to you about school and how it\'s going for him, though he still sits on the toilet facing away. He also still takes a few looks at you now and again but they aren\'t as sneaky and they mostly seem to be glances to see your face. <i>Not that his eyes don\'t wander downward anyways…</i> you notice with a smile.');
      qspCall(s, 'brother_voyeur', 'school_talk');
    }
    scene.actions([
      { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
    ]);
  } },
      { label: 'Ask him about his friends', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 6) {
      scene.text('You chat with him about his friends and what he does for fun with them while you shower. He sits on the toilet seat and faces away from you, awkwardly answering all your questions and queries, but you still see him occasionally stealing glances at your naked body. Not that it bothers you any, as you simply smile to yourself, amused that he thinks he\'s still being sneaky.');
    } else {
      scene.text('He cheerfully talks to you about him and his friends and what they get up to together, though he still sits on the toilet facing away. He also still takes a few looks at you now and again but they aren\'t as sneaky and they mostly seem to be glances to see your face. <i>Not that his eyes don\'t wander downward anyways…</i> you notice with a smile.');
      qspCall(s, 'brother_voyeur', 'friend_talk');
    }
    scene.actions([
      { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
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
    case 'showertalk1':
      enterShowertalk1(s, scene);
      break;
    case 'showertalk2':
      enterShowertalk2(s, scene);
      break;
    default:
      enterShowertalk1(s, scene);
      break;
  }
}

export const brother_voyeur: LocationDef = {
  name: 'brother_voyeur',
  title: 'Through the crack in the door you make eye contact with your',
  region: 'other',
  description: ['Through the crack in the door you make eye contact with your brother.'],
  enter: enter,
};
