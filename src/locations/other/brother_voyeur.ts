import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).year ?? 0) - (((((s as any).npc_dob ?? {})?.['A34'] ?? 0) - ((((s as any).npc_dob ?? {})?.['A34'] ?? 0) % 10000)) / 10000);
  if ((((s as any).npc_dob ?? 0)?.['A34'] % 10000)/100 > ((s as any).month ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherQW['Age'] ?? 0) - (1);
  }
  if ((((s as any).npc_dob ?? 0)?.['A34'] % 10000)/100 === ((s as any).month ?? 0)  &&  (((s as any).npc_dob ?? 0)?.['A34'] % 100) > ((s as any).day ?? 0)) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherQW['Age'] ?? 0) - (1);
  }
  (s as any).dick = ((s as any).npc_dick ?? 0)?.['A' + String(34)];
  if (((s as any).npc_QW ?? 0)?.['A34'] > 20  &&  ((s as any).npc_QW ?? 0)?.['A34'] < 25) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 20;
  }
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['all'] = Math.min(Math.max(1, (4 * ((s as any).pcs_leghair ?? 0) + Math.max(0, ((s as any).pcs_pubes ?? 0)-((s as any).shave_length ?? 0))) / 20), 3);
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['pussy'] = Math.min(Math.max(1, Math.max(0, ((s as any).pcs_pubes ?? 0)-((s as any).shave_length ?? 0)) / 20), 2);
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['legs'] = Math.min(Math.max(1, 4 * ((s as any).pcs_leghair ?? 0) / 20), 3);
  scene.build();
}

function enterShowertalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).dick = ((s as any).npc_dick ?? 0)?.['A' + String(34)];
  if (((s as any).brotherQW ?? 0)?.['shower_talk'] > 0) {
    qspGoto(s, 'brother_voyeur', 'showertalk2');
  }
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_talk'] = ((s as any).brotherQW['shower_talk'] ?? 0) + (1);
  scene.img('images/shared/home/bathroom/brothertalk1.jpg');
  scene.text('Through the crack in the door you make eye contact with your brother.');
  scene.text('"Hey Kolka!"');
  // TODO-QSP: dynamic text: You see the shock in his eyes as he realizes he's been caught and moves away, tr...
  scene.text(`You see the shock in his eyes as he realizes he's been caught and moves away, trying to close the door. "Wait! Come in here a sec!" you say, a bright and good-humored smile on your face. "And shut the door behind you! Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} or dad see!"`);
  // TODO-QSP: end
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
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_look'] = 1;
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 2;
    }
    scene.img('images/shared/home/bathroom/brothertalk4.jpg');
    scene.text('"Kolka…" When you say this he starts to turn towards you a little bit but then stops himself and continues to stare at the wall. You sigh sympathetically. "It\'s okay to look at me you know."');
    // TODO-QSP: dynamic text: He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit...
    scene.text(`He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit between your face, your breasts, your ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy, the walls, and the floor, unable to make up his mind of where he should be looking.`);
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
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 2;
  }
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_talk'] = ((s as any).brotherQW['shower_talk'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
  if (((s as any).brotherQW ?? 0)?.['shower_look'] === 1) {
    qspGoto(s, 'brother_voyeur', 'brothershowerlook');
  }
  if (((s as any).brothershowerask ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.img('images/shared/home/bathroom/brothertalk1.jpg');
  } else {
    if (((s as any).brothershowerask ?? 0) === ((s as any).daystart ?? 0)) {
      scene.img('images/shared/home/bathroom/brothertalkbusy.jpg');
    }
  }
  scene.text('Seeing your brother spy on you through a crack the door again, call out to him.');
  scene.text('"Hey Kolka! Did you want to have another chat with me while I shower?"');
  if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 2) {
  } else {
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] <= 5) {
      scene.text('He nods shyly at you. "Okay, come on in! Don\'t forget to close the door!"');
    } else {
      if (((s as any).brotherQW ?? 0)?.['shower_look'] < 1) {
        // TODO-QSP: dynamic text: He nods eagerly. You can't help but smile at his resemblance to a begging puppy....
        scene.text(`He nods eagerly. You can't help but smile at his resemblance to a begging puppy. "Well hurry up then!" you say. "Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} catches you coming in!"`);
      } else {
        // TODO-QSP: dynamic text: He nods enthusiastically, unable to hide his eager grin. "Well hurry up then!" y...
        scene.text(`He nods enthusiastically, unable to hide his eager grin. "Well hurry up then!" you say with a smile to match his. "Quick! Before ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} catches us!"`);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).brotherQW ?? 0)?.['shower_look'] >= 1) {
      qspGoto(s, 'brother_voyeur', 'brothershowerlook');
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
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'clit_vibe', 5, 'incest', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Calm down', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'mood', 'raise', 'small');
    ((s as any).brother_shower = (s as any).brother_shower ?? {})['mast_look'] = Math.floor(Math.random() * 3) + 1;
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
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_look'] = 1;
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 2) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 2;
    }
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    scene.img('images/shared/home/bathroom/brothertalk4.jpg');
    scene.text('"Kolka…" When you say this he starts to turn towards you a little bit but then stops himself and continues to stare at the wall. You sigh sympathetically. "It\'s okay to look at me you know."');
    // TODO-QSP: dynamic text: He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit...
    scene.text(`He perks up and turns towards you slowly. "R-really?" His wide eyes rapidly flit between your face, your breasts, your ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy, the walls, and the floor, unable to make up his mind of where he should be looking.`);
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDayTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSchoolTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFriendTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrothershowerlook(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothertalk3.jpg');
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['look'] = ((s as any).daystart ?? 0);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  if (((s as any).npc_rel ?? 0)?.['A34'] <50  &&  ((s as any).brothershowerask ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
  }
  if (((s as any).brothershowerask ?? 0) === ((s as any).daystart ?? 0)) {
    scene.text('Maybe he\'s right. It is a little risky and it would certainly be a much more compromising position for your mother to catch you in. Maybe it is better you just talk normally after all.');
  } else {
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 10) {
      scene.text('He slips inside and takes his usual place on the toilet along with the traditional quick glance at your breasts. He\'s gripping the edge of the seat and leaning forward with an eager smile. If nothing else, he\'s certainly happy to be here.');
    } else {
      scene.text('He slips inside and takes his usual place on the toilet seat, gripping the edge and leaning forward eagerly.');
      scene.text('<br>You\'ve noticed something recently. Lately, when Kolka has come in for these shower talks, he hasn\'t been ogling you as much as he used to. A brief glance at your breasts here, a quick look at your ass there, of course, but no one could avoid looking entirely. For the most part though, he maintains eye contact with you. Although, you reason that he probably still gets a good look when you\'re shampooing your hair or sudsing up your body.');
    }
  }
  scene.text('What do you want to talk about with him today?');
  if (((s as any).npc_rel ?? 0)?.['A34'] >= 70  &&  ((s as any).brothershowerask ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask if he wants to shower with you', goto: ['brother_voyeur', 'brother_shower_together_ask'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him about his day', handler: (st: GameState) => {
    (s as any).brothershowerdaytalk = Math.floor(Math.random() * 3) + 1;
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 10) {
      scene.text('He happily talks to you about his day, sometimes unabashedly staring directly at your breasts while he goes off on a tangent. Not that it matters to you. Where he wants to look is his business. After all, you\'re the one who invited him in, you can hardly complain now. You\'re just happy to be spending some quality time with him.');
    } else {
      scene.text('He happily talks to you about his day, only rarely taking glances at your exposed breasts. For the most part, his attention seems to be focused more on the conversation than your naked body.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDayTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    if (((s as any).bro_ass_compliment ?? 0) === 1) {
      qspGoto(s, 'brother_voyeur', 'ass_compliment');
    } else {
      qspGoto(s, 'brother_voyeur', 'shave');
    }
  } },
    ]);
  } },
    { label: 'Ask how school\'s going', handler: (st: GameState) => {
    (s as any).brothershowerschooltalk = Math.floor(Math.random() * 3) + 1;
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 10) {
      scene.text('He energetically talks to you about school and how it\'s going for him, unabashedly trying to get a good look at your ass the majority of the time. Not that it matters to you. Where he wants to look is his business. After all, you\'re the one who invited him in, you can hardly complain now. You\'re just happy to be spending some quality time with him.');
    } else {
      scene.text('He energetically talks to you about school and how it\'s going for him, pretty much only taking a look at your ass when you turn around to wash or rinse. For the most part, he seems to be more engrossed by the conversation than your naked body.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSchoolTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    if (((s as any).bro_ass_compliment ?? 0) === 1) {
      qspGoto(s, 'brother_voyeur', 'ass_compliment');
    } else {
      qspGoto(s, 'brother_voyeur', 'shave');
    }
  } },
    ]);
  } },
    { label: 'Ask him about his friends', handler: (st: GameState) => {
    (s as any).brothershowerfriendtalk = Math.floor(Math.random() * 3) + 1;
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 10) {
      // TODO-QSP: dynamic text: He cheerfully talks to you about him and his friends and what mischief they get ...
      scene.text(`He cheerfully talks to you about him and his friends and what mischief they get up to together, shamelessly taking long appreciative looks at your ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy at random intervals of the conversation. Not that it matters to you. Where he wants to look is his business. After all, you're the one who invited him in, you can hardly complain now. You're just happy to be spending some quality time with him.`);
    } else {
      scene.text('He cheerfully talks to you about him and his friends and what mischief they get up to together, only looking at your pussy when his attention is inadvertently drawn by you washing between your legs. For the most part, he seems more engaged in the conversation than your naked body.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFriendTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).bro_ass_compliment = Math.floor(Math.random() * 3) + 1;
    if (((s as any).bro_ass_compliment ?? 0) === 1) {
      qspGoto(s, 'brother_voyeur', 'ass_compliment');
    } else {
      qspGoto(s, 'brother_voyeur', 'shave');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDayTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['talk'] = Math.floor(Math.random() * 3) + 1;
  if (((s as any).brother_shower ?? 0)?.['talk'] === 1) {
    scene.text('"… but, yeah. It was a pretty good day overall," he finishes, snapping you out of your idle thoughts and bringing you back to the room.');
    scene.text('"That\'s always good to hear!" you reply.');
  } else {
    if (((s as any).brother_shower ?? 0)?.['talk'] === 2) {
      // TODO-QSP: dynamic text: "… so, yeah. <<$npc_nickname['A29']>> wants me to clean up my stuff on the couch...
      scene.text(`"… so, yeah. ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} wants me to clean up my stuff on the couch, but if I'm going to sleep there anyways, why does it matter?" he asks, snapping you out of your idle thoughts and bringing you back to the room.`);
      if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
        // TODO-QSP: dynamic text: "I know it seems pointless but you should listen to <<$npc_nickname['A29']>>. Yo...
        scene.text(`"I know it seems pointless but you should listen to ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. You'll get in trouble otherwise," you admonish him.`);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A29'] < 40) {
          // TODO-QSP: dynamic text: "Ugh, I know! <<$npc_nickname['A29']>> is always nagging me about everything! Sh...
          scene.text(`"Ugh, I know! ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is always nagging me about everything! She can be such a pain in the ass sometimes!" you `);
        }
      }
    } else {
      if (((s as any).brother_shower ?? 0)?.['talk'] === 3) {
        scene.text('"… and dad asked me if I want to help him work on the Gazelle but I don\'t know. I\'d rather go play football with Zhendos and Mishan," he finishes, snapping you out of your idle thoughts and bringing you back to the room.');
        if (((s as any).brother_shower ?? 0)?.['look'] === ((s as any).daystart ?? 0)) {
          scene.text('"It\'s good to have fun with your friends but it might also be good to work with dad. It\'s a good life skill. Besides, girls love nothing more than a man who knows how to work a car!" you wink at him. "It just makes them want to…"');
          scene.text('You trail off, grabbing your breast with one hand and putting the other between your legs with an open mouth in a silent moan, pretending to masturbate. After a couple seconds of gyrating your hips, you spread your hands out over your hips in an "explosion" motion.');
          scene.text('"Sploosh," you say, winking at him.');
        } else {
          scene.text('"It\'s good to have fun with your friends but it might also be good to work with dad. It\'s a good life skill. Besides, girls love nothing more than a man who knows how to work a car!"');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['talk'] = Math.floor(Math.random() * 3) + 1;
  if (((s as any).brother_shower ?? 0)?.['talk'] === 1) {
    scene.text('"I hate math so much!" he moans, snapping you out of your idle thoughts and bringing you back to the room. "I wish it could just go die in a hole!"');
    if (((s as any).class ?? 0)?.['school_math_grade'] >= 70) {
      scene.text('"Don\'t slack off Kolka," you frown. "You may not like it, but your grades are important for your future."');
    } else {
      scene.text('"Ugh! I know what you mean," you grumble in agreement. "Math sucks!"');
    }
  } else {
    if (((s as any).brother_shower ?? 0)?.['talk'] === 2) {
      scene.text('"… and then he ripped his pants!" he giggles, snapping you out of your idle thoughts and bringing you back to the room. "Isn\'t that hilarious?"');
      scene.text('"Uhh, yeah! That\'s pretty funny!" you fake laugh as best you can.');
    } else {
      if (((s as any).brother_shower ?? 0)?.['talk'] === 3  &&  ((s as any).brotherQW ?? 0)?.['sex_ed'] < 1) {
        scene.text('"… so science class is alright," he says, snapping you out of your idle thoughts and bringing you back to the room. "I\'m really having trouble with my anatomy homework though. The diagrams in the book aren\'t very good, I don\'t understand it."');
        scene.text('"Hmm. Well maybe I could help you with it sometime? Do something to help you understand it better?"');
        ((s as any).brotherQW = (s as any).brotherQW ?? {})['anatomy_help'] = 1;
      } else {
        if (((s as any).brother_shower ?? 0)?.['talk'] === 3  &&  ((s as any).brotherQW ?? 0)?.['sex_ed'] >= 1) {
          scene.text('"… so I\'m enjoying science a lot more," he says, snapping you out of your idle thoughts and bringing you back to the room. "My grades have gotten better since you started helping me with my homework but I\'m still not sure I completely get it…" He hesitates. "Could you maybe… give me another anatomy lesson? Like you did before?" he says, looking at you meaningfully.');
          scene.text('"I\'ll think about it…" you say slyly.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFriendTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['talk'] = Math.floor(Math.random() * 3) + 1;
  if (((s as any).brother_shower ?? 0)?.['talk'] === 1) {
    scene.text('… and then he sprayed milk all over his locker!" he says with a burst of laughter, snapping you out of your idle thoughts and bringing you back to the room. "It was <i>so</i> funny! Hey, are you listening?"');
    scene.text('"Uhmm, yeah! Of course!" you say, trying to maintain your poker face as best you can while he frowns at you suspiciously.');
  } else {
    if (((s as any).brother_shower ?? 0)?.['talk'] === 2) {
      scene.text('"… so the plan is while he\'s showering to take his underwear and replace them with girls panties," he says, snapping you out of your idle thoughts and bringing you back into the room. "Zhendos says that I should just steal some of yours out of your drawer but-" he stops dead with wide eyes and the realization of what he just said.');
      scene.text('"<i>Excuse me?</i> You were planning to do <i>what</i> with my underwear??" you say, sternly staring at him while he twiddles his thumbs and tries to pretend he didn\'t say anything.');
    } else {
      if (((s as any).brother_shower ?? 0)?.['talk'] === 3) {
        // TODO-QSP: dynamic text: "I wish I had more time to play football with Zhendos and Mishan though," he say...
        scene.text(`"I wish I had more time to play football with Zhendos and Mishan though," he says, snapping you out of your idle thoughts and bringing you back to the room. "I can't do anything with them when ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is dragging us to Gadukino every other weekend."`);
        if ((!((s as any).seepornofut ?? 0))) {
          // TODO-QSP: dynamic text: "It's okay Kolka," you console him. "Just enjoy the time you have with them. In ...
          scene.text(`"It's okay Kolka," you console him. "Just enjoy the time you have with them. In a couple years ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} might not force you to go anymore but you all might end up too busy to hang out."`);
        } else {
          if (((s as any).seepornofut ?? 0) >= 1) {
            scene.text('"Pfft! More like you want more time to watch porn with them!" you laugh scoffingly.');
            scene.text('"We play football too!" Kolka turns to cry out in protest while you tease him with a silly face and fake jerk off motions. He blushes deeply and quickly turns back to face the wall.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerTogetherAsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['shower_times'] > 0) {
    qspGoto(s, 'brother_voyeur', 'brother_shower_together');
  }
  scene.img('images/shared/home/bathroom/brothertalk4.jpg');
  scene.text('"Hey Kolka," you say.');
  scene.text('"Yeah? What is it?"');
  scene.text('"Why don\'t we save some water? Want to jump in with me while we talk?"');
  scene.text('Kolka\'s eyes go wide at your suggestion. "Woah… R-really…?" he asks in disbelief.');
  scene.text('"What, a girl can\'t take shower with her younger brother?" you grin. "What is the world coming to?"');
  // TODO-QSP: dynamic text: "But what if <<$npc_nickname['A29']>> finds out?" he asks hesitantly.
  scene.text(`"But what if ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} finds out?" he asks hesitantly.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe he\'s right, it\'s risky', goto: ['brother_voyeur', 'brothershowerlook'] },
    { label: 'Just close the latch', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothertalk5.jpg');
    scene.text('"Just close the latch! It\'ll be fine!" you insist.');
    scene.text('You can see he\'s still conflicted, but in the end his baser instincts win and he starts to undress, unable to pass up an opportunity to shower with a female.');
    scene.actions([
      { label: 'Let him get in', goto: ['brother_voyeur', 'brother_shower_together_first'] },
    ]);
  } },
    { label: 'What, are you chicken?', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/ass_compliment.mp4');
    scene.text('"What\'s the matter Kolka? Are you chicken?" you tease.');
    scene.text('"I am not!" he says, his face starting to turn red.');
    scene.actions([
      { label: 'Prove it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothertalk5.jpg');
    scene.text('"Prove it."');
    scene.text('Your challenge can\'t be passed up and Kolka practically starts throwing his clothes off to climb into the shower with you.');
    scene.actions([
      { label: 'Let him get in', goto: ['brother_voyeur', 'brother_shower_together_first'] },
    ]);
  } },
    ]);
  } },
    { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + '!', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothertalkbusy.jpg');
    // TODO-QSP: dynamic text: "Fuck <<$npc_nickname['A29']>>!" you scoff. "I don't care if she finds you in he...
    scene.text(`"Fuck ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}!" you scoff. "I don't care if she finds you in here with your cock up my ass, I'll do what I want! Now are you going to get in here with me or what?"`);
    scene.text('He hesitates for a moment and you can see he\'s still conflicted but in the end his baser instincts win and he starts to undress, already sporting a fine erection from your description of anal sex with him.');
    scene.actions([
      { label: 'Let him get in', goto: ['brother_voyeur', 'brother_shower_together_first'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherShowerTogetherFirst(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothershower.jpg');
  scene.text('He\'s clearly very tense right now. His responses to your questions are somewhat forced and his movements awkward. It doesn\'t take a genius to figure out he\'s uncomfortable because he\'s trying to hide his rock-hard erection.');
  if (((s as any).pcs_inhib ?? 0) >= 50) {
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('You wait for the perfect opportunity to get a good glance at his cock before putting your hand over your mouth in false shock.');
    scene.text('"Kolka!" you gasp. "Getting an erection from showering with your sister? How could you?"');
    scene.text('He quickly covers his groin with his hands before you start to laugh, your hand now being used to suppress your own guffaws so no one wonders why you\'re cackling in the shower.');
    scene.text('"Oh Kolka, you\'re so easy to tease." Seeing him blush hard and continue to cover himself you reassure him. "Kolka, it\'s fine. I don\'t mind that you\'re getting an erection from this."');
    scene.text('He looks at you suspicious, but still embarrassed. "Really? Do you mean it?"');
    scene.text('"Mhm," you say, as you continue to scrub yourself. "I\'m the one who invited you in after all. I don\'t have a right to complain about your body\'s natural responses. Besides, it\'s actually a little flattering to be honest," you say with a wink.');
    scene.text('He seems to relax a little more after that and you continue to wash together until you\'re feeling clean and rinsed off.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
      { label: 'Compliment his cock', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    // TODO-QSP: dynamic text: You look straight at his hard <<dick>>cm cock, completely unashamed, saying, "He...
    scene.text(`You look straight at his hard ${((s as any).dick || '')}cm cock, completely unashamed, saying, "Hey, you're pretty big for a little brother, you know that?"`);
    scene.text('He blushes hard and covers himself.');
    scene.text('"Don\'t be like that!" you grin at him and playfully punch his arm. "I\'m telling you you\'ve got a nice dick!"');
    scene.text('"Thanks I guess…" he mutters.');
    scene.text('"Hey, if you\'re not gonna be a \'shower\' you might as well be a \'grower!\' Careful there! You might end up pleasing a girl with that one day!" you say with a wink.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just ignore it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('You realize that this is something he\'s just going to have to get over and adjust to so you don\'t say anything. He\'s embarrassed enough and it\'s at least very understandable. Although you silently feel quite flattered that he finds your body so arousing.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherShowerTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = Math.floor(Math.random() * 2) + 0;
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_times'] = ((s as any).brotherQW['shower_times'] ?? 0) + (1);
  ((s as any).brother_shower = (s as any).brother_shower ?? {})['together'] = ((s as any).daystart ?? 0);
  scene.img('images/shared/home/bathroom/brothershower.jpg');
  scene.text('Kolka clambers into the shower with you, doing his best to get under the water. The bath tub isn\'t very big and it\'s a tight squeeze for both of you to be in there.');
  if (((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
    scene.actions([
      { label: 'Suggest you wash each other (0:10)', goto: ['brother_voyeur', 'brother_wash_first'] },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['shower_times'] > 2) {
    if (((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).npc_rel ?? 0)?.['A34'] > 80) {
      if (((s as any).pcs_horny ?? 0) >= 50) {
        scene.actions([
          { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    scene.text('"Hey, hand me the showerhead will you?" you say to your brother.');
    if (((s as any).brotherQW ?? 0)?.['fuck'] < 1) {
      scene.text('"What for?" he asks, still complying and handing it over.');
      scene.text('"Got an itch I need to scratch," you smile mischievously.');
    } else {
      scene.text('He knowingly hands the showerhead over. Seems like he\'s looking forward to this.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash2.mp4');
    if (((s as any).brotherQW ?? 0)?.['fuck'] < 1  &&  ((s as any).brotherQW ?? 0)?.['bj'] < 1) {
      scene.text('Maintaining eye contact with Kolka, you place the showerhead between your legs, blasting a powerful jet of water into your pussy. His jaw drops when he realizes that you\'re using the showerhead to masturbate in front of him. His eyes flick back and forth between your face and your pussy and your hard nipples, unable to decide what he wants to look at. His gaze turns you on more and more, arousal tingling through your whole body. When his eyes meet yours, it suddenly sends you over the edge. Your whole body shudders with an intense orgasm but you never look away, staring straight into your brother\'s soul as you cum hard.');
      scene.text('Panting hard and legs still shaking, you hand the showerhead back to Kolka, a weak smile on your face.');
      scene.text('"Thanks, I really needed that."');
      scene.text('"N-no problem," he stammers, not really sure what to do after having a staring contest with his masturbating sister.');
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    } else {
      scene.text('Maintaining eye contact with Kolka, you place the showerhead between your legs, blasting a powerful jet of water into your pussy. He stares back at you, smiling as he gently jerks his rock-hard cock. You stare at each other until you can\'t take it anymore and cum hard, your orgasming ratcheting up in intensity with every second you continue to hold your brother\'s eyes.');
      scene.text('Finally, your legs give out from under you and you collapse to your knees on the shower floor. Stepping up to you, your brother takes the showerhead from you and places it back on its mount. You smile at him weakly before he puts his hand on your head, saying, "Well, it seems you got your rocks off, but I\'ve still got something for you to take care of…"');
      scene.actions([
        { label: 'Blow him', goto: ['brother_shower_sex', 'brother_shower_bj'] },
      ]);
    }
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
    (s as any).orgasm_or = 'custom';
    qspCall(s, 'arousal', 'clit_vibe', 5, 'incest', 'masturbate');
    qspCall(s, 'arousal', 'end');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Give him shower head', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    if (((s as any).brotherQW ?? 0)?.['bj'] < 1  &&  ((s as any).brotherQW ?? 0)?.['fuck'] < 1) {
      scene.text('"Hey Kolka, want to see something cool?"');
      scene.text('"Huh?" He asks, confused. "What is it?"');
      scene.text('His eyes go wide when as your hand slips up his leg and grips his member. Slightly panicked, he looks back at you when you start to kneel.');
      scene.text('"It\'s my mouth around your cock!"');
      scene.actions([
        { label: 'Blow him', goto: ['brother_shower_sex', 'brother_shower_bj'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Looking at Kolka, he glances back at you to see a mischievous twinkle in your ey...
      scene.text(`Looking at Kolka, he glances back at you to see a mischievous twinkle in your eye. Without a second's thought or warning, you get on your knees and wrap your lips around his ${((s as any).dick || '')} cm cock.`);
      scene.actions([
        { label: 'Blow him', goto: ['brother_shower_sex', 'brother_shower_bj'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk while you shower', handler: (st: GameState) => {
    scene.actions([
      { label: 'Ask him about his day', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"So, how was your day?" you ask cheerfully.');
    if (((s as any).brotherQW ?? 0)?.['shower_times'] < 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
      scene.text('"It, uhh… was… g-good… uhm…" he stammers.');
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'brother_shower_together_first'] },
      ]);
    } else {
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4  &&  ((s as any).brother_shower ?? 0)?.['grope'] === 1) {
        scene.text('"Getting better by the moment…" he says, sliding up behind you.');
        scene.actions([
          { label: '"Eek-!"', goto: ['brother_voyeur', 'showerfun'] },
        ]);
      } else {
        if (((s as any).brotherQW ?? 0)?.['shower_times'] >= 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] >= 1) {
          scene.text('Kolka answers readily, telling you the ins and outs and interesting things that happened during his day.');
          scene.actions([
            { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
            { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
          ]);
        }
      }
    }
  } },
      { label: 'Ask how school is going', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"So, how\'s school going?" you ask cheerfully.');
    if (((s as any).brotherQW ?? 0)?.['shower_times'] < 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] < 1) {
      scene.text('"It\'s… Uhh… fine…" he stammers.');
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'brother_shower_together_first'] },
      ]);
    } else {
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4  &&  ((s as any).brother_shower ?? 0)?.['grope'] === 1) {
        ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = 2;
        scene.text('"It\'s fine, but I\'ve been having a little trouble paying attention in class lately," he says, stepping behind you.');
        scene.text('"Why\'s that?"');
        scene.actions([
          { label: '"Eek-!"', goto: ['brother_voyeur', 'showerfun'] },
        ]);
      } else {
        if (((s as any).brotherQW ?? 0)?.['shower_times'] >= 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] >= 1) {
          scene.text('Kolka answers readily, telling you the ins and outs and interesting things that are going on at school.');
          scene.actions([
            { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
            { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
          ]);
        }
      }
    }
  } },
      { label: 'Ask him about his friends', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershower.jpg');
    scene.text('"So, how\'s your friends? Zhendos and Mishan?" you ask cheerfully.');
    if (((s as any).brotherQW ?? 0)?.['shower_times'] < 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] < 1) {
      scene.text('"They\'re… Uhh… fine…" he stammers.');
      scene.actions([
        { label: 'Continue', goto: ['brother_voyeur', 'brother_shower_together_first'] },
      ]);
    } else {
      if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4  &&  ((s as any).brother_shower ?? 0)?.['grope'] === 1) {
        ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = 3;
        scene.text('"Who cares about them?" he says, stepping behind you.');
        scene.actions([
          { label: '"Eek-!"', goto: ['brother_voyeur', 'showerfun'] },
        ]);
      } else {
        if (((s as any).brotherQW ?? 0)?.['shower_times'] >= 3  ||  ((s as any).brotherQW ?? 0)?.['Sex'] >= 1) {
          scene.text('Kolka answers readily, telling you about the mischief he gets up to with his friends.');
          if (((s as any).seepornofut ?? 0) >= 1) {
            scene.text('"Still watching porn together like a bunch of gay bros?" you ask, teasingly.');
            scene.text('<br>"Yeah, you should join us again sometime," he grins. "It\'s always so much better when you have a nice slut there to give handjobs."');
            scene.text('<br>You give him the finger but grin back at him anyways.');
          }
          scene.actions([
            { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
            { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
          ]);
        }
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrotherWashFirst(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherwash ?? 0) > 0) {
    qspGoto(s, 'brother_voyeur', 'brother_wash');
  }
  scene.img('images/shared/home/bathroom/brothertalk4.jpg');
  scene.text('"Hey, I\'ve got an idea. How about we wash each other?"');
  scene.text('"W-wash each other?" Kolka sputters and stares at you with wide eyes. "Y-you mean like… t-touching each other…?"');
  scene.text('"Yes…" you smile at him. "It\'s kind of hard to scrub someone without touching them. Washing each other means that I wash you…" You take his hands and squeeze body wash onto them.');
  scene.text('"… and you wash me!" you say, pressing his hands onto your breasts and using them to lather the soap around, suds quickly popping over your chest. His eyes are so wide now that you half expect them to pop out of his head.');
  scene.text('"Although…" You pull his hands back and slap a washcloth into one of them. He looks at it kind of confused, dumbfounded. "I was mostly talking about my back. It\'s kind of hard to reach. Probably the most practical reason for people washing each other."');
  scene.text('"Oh." Despite his recent glorious moments of getting to touch your boobs, he seems disappointed now that it\'s turning into an actual chore.');
  scene.text('"Don\'t be like that!" you say. "You\'re doing me a favor and I know that means I have to pay the \'play with boobs\' tax. So cheer up kiddo!" you say, putting his free hand back on your breast and squeezing with his hand. He seems to perk up a bit at that.');
  scene.text('"Besides, you wash my back I\'ll wash yours. I might just cop a feel myself," you whisper, firmly grabbing his cock and lathering it with the leftover soap on your hand. With that, you turn your back to him, saying, "So do you want to wash each other or not?" He nods eagerly. "Then let\'s get started!"');
  (s as any).brotherwash = ((s as any).brotherwash ?? 0) + (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash each other (0:05)', goto: ['brother_voyeur', 'brother_wash'] },
  ]);
  scene.build();
}

function enterBrotherWash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 4) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 4;
  }
  (s as any).brotherwash = ((s as any).brotherwash ?? 0) + (1);
  scene.img('images/shared/home/bathroom/brotherwash.jpg');
  scene.text('You and Kolka spend some time lathering each other with soap and rubbing each other down, both of you appreciatively feeling each other\'s bodies as you do so.');
  if (((s as any).brotherwash ?? 0) > 5  ||  ((s as any).brotherQW ?? 0)?.['Sex'] > 5  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0) {
    scene.text('Kolka even slips his hands between your legs and gives your pussy a good cleaning, paying special attention to your clit. You squirm and moan under his touch.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'incest');
  }
  qspCall(s, 'arousal', 'foreplay', 3, 'incest');
  qspCall(s, 'arousal', 'massage', 3, 'incest');
  qspCall(s, 'arousal', 'end');
  if ((((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3)  &&  ((s as any).brotherQW ?? 0)?.['shave_day'] < ((s as any).daystart ?? 0)) {
    if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 3) {
      // TODO-QSP: dynamic text: As you rinse off, your brother gives a meaningful look at your lower body and yo...
      scene.text(`As you rinse off, your brother gives a meaningful look at your lower body and you follow his gaze to your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs and ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy.`);
    } else {
      if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) < 3) {
        // TODO-QSP: dynamic text: As you rinse off, your brother gives a meaningful look at your lower body and yo...
        scene.text(`As you rinse off, your brother gives a meaningful look at your lower body and you follow his gaze to your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs.`);
      } else {
        if (((s as any).pcs_leghair ?? 0) < 3  &&  ((s as any).pcs_pubes ?? 0) > 3) {
          // TODO-QSP: dynamic text: As you rinse off, your brother gives a meaningful look at your lower body and yo...
          scene.text(`As you rinse off, your brother gives a meaningful look at your lower body and you follow his gaze to your ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy.`);
        }
      }
    }
    scene.text('"Aren\'t you going to shave?"');
    if (((s as any).mc_inventory ?? 0)?.['razor'] < Math.min(((((s as any).pcs_pubes ?? 0) > 3) ? (((s as any).razors_to_use ?? 0)?.['pussy']) : (3)), ((((s as any).pcs_leghair ?? 0) > 3) ? (((s as any).razors_to_use ?? 0)?.['legs']) : (3)))) {
      scene.actions([
        { label: '"I can\'t. I don\'t have enough razors"', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 2;
    scene.text('"I couldn\'t even if I wanted to," you say to him with a shrug. He looks at you in confusion. "I\'m out of razors. Can\'t shave without a razor kiddo."');
    scene.text('"Oh." He looks around at the contents of the shower to see that you really are out of razors. "You know, you should really be more responsible sis. You shouldn\'t let yourself run out of shaving supplies like that."');
    scene.text('You roll your eyes at his suggestions of responsibility, recognizing that they\'re obviously motivated by to his preference for clean-shaven girls.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      scene.actions([
        { label: 'Have some fun', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Clean from your shower together, you can\'t help yourself as you start to get frisky with your brother. His hands slide up your body to caress your breasts. In response, you reach back and start jerking his cock feeling him harden under your touch.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)) {
        scene.actions([
          { label: 'I should shave', goto: ['brother_voyeur', 'brother_shower_shave'] },
          { label: 'Just for you', handler: (st: GameState) => {
    ((s as any).brother_shower = (s as any).brother_shower ?? {})['shave_ask1'] = ((s as any).daystart ?? 0);
    qspGoto(s, 'brother_voyeur', 'brother_shower_shave');
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t feel like it', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 2;
    scene.img('images/shared/home/bathroom/brotherwash.jpg');
    scene.text('"Nah," you say dismissively. "Don\'t feel like doing it right now."');
    scene.text('Kolka\'s mouth twists in disappointment. "You know, you really should. Nobody likes girls with hairy legs and a bush between them. You\'ll get bullied by other girls and never get a boyfriend if you don\'t shave."');
    scene.text('You roll your eyes at his suggestions, recognizing that they\'re obviously motivated by to his preference for completely clean-shaven girls.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      scene.actions([
        { label: 'Have some fun', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Clean from your shower together, you can\'t help yourself as you start to get frisky with your brother. His hands slide up your body to caress your breasts. In response, you reach back and start jerking his cock feeling him harden under your touch.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
        { label: 'I like it this way', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 6;
    scene.img('images/shared/home/bathroom/brotherwash.jpg');
    scene.text('"No?" you say questioningly. "I like it this way!"');
    scene.text('Kolka\'s mouth twists in disappointment. "You know, you really should reconsider. Nobody likes girls with hairy legs and a bush between them. You\'ll get bullied by other girls and never get a boyfriend if you don\'t shave."');
    scene.text('You roll your eyes at his suggestions, recognizing that they\'re obviously motivated by to his preference for completely clean-shaven girls.');
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      scene.actions([
        { label: 'Have some fun', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Clean from your shower together, you can\'t help yourself as you start to get frisky with your brother. His hands slide up your body to caress your breasts. In response, you reach back and start jerking his cock feeling him harden under your touch.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
    scene.actions([
      { label: 'Get frisky', handler: (st: GameState) => {
    ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = 4;
    qspGoto(s, 'brother_voyeur', 'showerfun');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish showering', goto: ['brother_voyeur', 'brother_shower_end'] },
  ]);
  scene.build();
}

function enterBrotherShowerShave(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  if (((s as any).brother_shower ?? 0)?.['shave_ask1'] === ((s as any).daystart ?? 0)) {
    scene.text('"You know, I wasn\'t really planning on it," you say looking down at yourself.');
    scene.text('"But just because you asked, I\'ll do it for you!"');
  } else {
    if (((s as any).brother_shower ?? 0)?.['shave_ask2'] === ((s as any).daystart ?? 0)) {
      if (((s as any).brother_shower ?? 0)?.['shave_request'] === 1) {
        scene.text('"I guess I did say that didn\'t I?" you smile at him apologetically and taking your razor again.');
      } else {
        if (((s as any).brother_shower ?? 0)?.['shave_request'] === 2) {
          scene.text('"Oh, alright. Fine…" you sigh in exasperation, reaching for your razor again. "I\'ll shave my pussy if it really means that much to you."');
        }
      }
      scene.text('He grins in eager anticipation as a response.');
    } else {
      scene.text('"Yeah, you\'re probably right. I should shave," you say looking down at yourself, frowning at the growing body hair.');
    }
  }
  if (((s as any).pcs_leghair ?? 0) <= 3  &&  ((s as any).pcs_pubes ?? 0) <= 3) {
    scene.text('You don\'t have enough hair on either your legs or pussy for you to need shave.');
    scene.text('"Sorry bro but I don\'t need to shave. Give a couple of days and I can show you." You say to the now a bit disappointed Kolka but there\'s not much you can do about that.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShaveAlternatives(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['pussy']  &&  ((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['legs']) {
      scene.text('As you pick up your razor, you realize that it has gone dull and you don\'t have any replacements.');
      scene.text('"Sorry bro but I can\'t shave with this. I\'ll have to go out and buy more razors." You say to the now a bit disappointed Kolka but there\'s not much you can do about that.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShaveAlternatives(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShaveBoth(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShaveLegs(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShavePussy(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShaveAlternatives(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
    scene.text('You could cheer him up with something sexual.');
    scene.actions([
      { label: 'Put his hand on your pussy', handler: (st: GameState) => {
    qspCall(st, 'brother_shower_sex', 'sex_menu');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
  ]);
  scene.build();
}

function enterShaveBoth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 3) {
    if (((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['all']) {
    } else {
      scene.actions([
        { label: 'Shave your legs and pussy (0:15)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_pubes = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['all']);
    scene.img('images/shared/home/bathroom/shave.mp4');
    scene.text('"Yeah, sure. Why not?" you smile.');
    scene.text('You lather up your legs and crotch and then start carefully shaving them. Kolka stares at you and watches the process intently.');
    scene.text('"Enjoying the show?" you ask teasingly. He doesn\'t say anything except nod, not looking away for a second. You have to admit, it\'s a little bit exciting, shaving while someone else is in the shower. You might be enjoying this almost as much as your brother is.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['anal'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      qspCall(s, 'arousal', 'vaginal_finger', 1, 'incest');
      qspCall(s, 'stat', '');
      scene.img('images/shared/home/bathroom/brotherpussyfeel.mp4');
      scene.text('"There," you say, rinsing off the last of the hair, stubble, and lather. "Satisfied?"');
      scene.text('You take his hand and press it against your freshly shaved pubic region, letting him feel the smoothness for himself. He does so greedily, taking the opportunity to also fondle your pussy, making you moan into him.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
        { label: 'Lean into it', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'incest');
    qspCall(s, 'stat', '');
    scene.text('Unable to help yourself, you grab his wrist and lean into it, letting his fingers work you even harder.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling.');
      scene.text('You put your hands on either side of your pussy and say, "Well? Satisfied now?"');
      scene.text('"Yeah…" he says, trailing off at the end, obviously hypnotized by your pussy, causing you to roll your eyes.');
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShaveLegs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']) {
    scene.actions([
      { label: 'Shave your legs (0:05)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['legs']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave2.jpg');
    scene.text('You lather up your legs and then start carefully shaving them.');
    if (((s as any).pcs_pubes ?? 0) > 3) {
      // TODO-QSP: 'Kolka frowns. "You''re not going to shave your '+iif(pcs_pubes <= 20, 'pussy?"', 'bush?"')
      if (((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['pussy']) {
        scene.actions([
          { label: '"I can\'t. Razor\'s gone dull"', handler: (st: GameState) => {
    scene.text('"I couldn\'t even if I wanted to," you say to him wistfully. He looks at you in confusion. "Razor\'s gone dull." You thumb the razor to show him. Need a sharp razor to shave. <i>Especially</i> down there," you smile.');
    scene.text('"Oh." He looks disappointed.');
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetFrisky(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).pcs_pubes ?? 0) < 21  ||  ((s as any).shave_length ?? 0) > 0) {
          scene.actions([
            { label: '"Nope! I\'m thinking of growing it out"', handler: (st: GameState) => {
    scene.text('"Nope! I\'m thinking about growing it out," you say cheerfully, smiling at him.');
    if (((s as any).brother_shower ?? 0)?.['shave_ask1'] === ((s as any).daystart ?? 0)) {
      ((s as any).brother_shower = (s as any).brother_shower ?? {})['shave_ask2'] = ((s as any).daystart ?? 0);
      scene.text('Kolka frowns. "I thought you said you were going to do what I asked?"');
      scene.actions([
        { label: 'Not going to change my mind', handler: (st: GameState) => {
    scene.text('"Sorry little brother, you\'re not going to change my mind that easily. I said I\'d shave just because you asked. I didn\'t say that I\'d do everything you asked."');
    scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters while you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I guess I did', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 1
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
        { label: 'Oh alright', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 2
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
      ]);
    } else {
      scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters.');
      scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    }
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetFrisky(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: '"Nah, I don\'t feel like it right now"', handler: (st: GameState) => {
    scene.text('"Nah," you say. "I don\'t feel like doing it right now. Too much of a pain."');
    if (((s as any).brother_shower ?? 0)?.['shave_ask1'] === ((s as any).daystart ?? 0)) {
      ((s as any).brother_shower = (s as any).brother_shower ?? {})['shave_ask2'] = ((s as any).daystart ?? 0);
      scene.text('Kolka frowns. "I thought you said you were going to do what I asked?"');
      scene.actions([
        { label: 'That\'s not what I said', handler: (st: GameState) => {
    scene.text('"That\'s not what I said. I said I\'d shave just because you asked. I didn\'t say what exactly I\'d be shaving or that I\'d do everything you tell me to."');
    scene.text('"Hrmph." Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I guess I did', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 1
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
        { label: 'Oh alright', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 2
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
      ]);
    }
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetFrisky(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
          { label: '"I like it like this"', handler: (st: GameState) => {
    scene.text('"No? Why would I? I like it like this?" you say.');
    if (((s as any).brother_shower ?? 0)?.['shave_ask1'] === ((s as any).daystart ?? 0)) {
      if (((s as any).brother_shower ?? 0)?.['shave_ask2'] === ((s as any).daystart ?? 0)) {
        scene.text('Kolka frowns. "I thought you said you were going to do what I asked?"');
        scene.actions([
          { label: 'Not going to change my mind', handler: (st: GameState) => {
    scene.text('"Sorry little brother, you\'re not going to change my mind that easily. I said I\'d shave just because you asked. I didn\'t say that I\'d shave everything you wanted."');
    scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters while you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: 'I guess I did', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 1
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
          { label: 'Oh alright', handler: (st: GameState) => {
    // TODO-QSP: brother_shower['shave_request'] = 2
  }, goto: ['brother_voyeur', 'brother_shower_shave'] },
        ]);
      } else {
        scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters.');
        scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
      }
    } else {
      scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters.');
      scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
      if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetFrisky(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    }
  } },
          { label: '"Hmm, maybe you\'re right" (0:05)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'like');
    (s as any).pcs_pubes = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave.mp4');
    scene.text('"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch.');
    scene.text('Kolka stares at you intensely as you carefully remove the bits of stubble from around your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      scene.img('images/shared/home/bathroom/brotherpussyfeel.mp4');
      scene.text('"There," you say, rinsing off the last of the hair, stubble, and lather. "Smooth enough for you now?"');
      scene.text('You take his hand and press it against your freshly shaved pubic region, letting him feel it for himself. He does so greedily, taking the opportunity to also slip his fingers your pussy and forcing a moan out of you.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd_2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling.');
      scene.text('You put your hands on either side of your pussy and say, "Well? Satisfied now?"');
      scene.text('"Yeah…" he says, trailing off at the end, obviously hypnotized by your pussy, causing you to roll your eyes.');
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
      if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetFrisky(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShavePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']) {
    scene.actions([
      { label: 'Shave your pussy (0:05)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pubestyle ?? 0) > 0  ||  ((s as any).pubestyle ?? 0) === 10) {
      (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    } else {
      (s as any).pcs_pubes = 0;
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave3.jpg');
    if (((s as any).brother_shower ?? 0)?.['shave_ask2'] === ((s as any).daystart ?? 0)) {
      scene.text('You lather up your crotch and then start carefully shaving your pussy.');
    } else {
      scene.text('"Yeah, I guess I could use a trim."');
      scene.text('You lather up your crotch and then start carefully shaving your pussy.');
    }
    if (((s as any).pcs_leghair ?? 0) > 3) {
      scene.text('Kolka frowns. "You\'re not going to shave your legs?"');
      if (((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['legs']) {
        scene.actions([
          { label: '"I can\'t. Razor\'s gone dull"', handler: (st: GameState) => {
    scene.text('"I couldn\'t even if I wanted to," you say to him wistfully. He looks at you in confusion. "Razor\'s gone dull." You thumb the razor to show him. Need a sharp razor to shave. <i>Especially</i> down there," you smile.');
    scene.text('"Oh." He looks disappointed.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Too lazy"', handler: (st: GameState) => {
    scene.text('"Nah," you say. "I don\'t feel like doing it right now. Too much work."');
    scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your pubic area, enjoying the smoothness and making sure you didn\'t miss a spot.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: '"Hmm, maybe you\'re right" (0:05)', handler: (st: GameState) => {
    (s as any).pcs_leghair = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['legs']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave2.jpg');
    scene.text('"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your legs and begin carefully shaving them.');
    scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling.');
    if (((s as any).brotherQW ?? 0)?.['shave'] === 1) {
      scene.text('<br>As you rinse the remains of the lather away, Kolka asks, "So this is what all the girls do when they need to shave?"');
      scene.text('<br>You laugh at the naiveté of his question. "Yes, yes we do. So be appreciative when a girl\'s clean-shaven for you! We put a lot of work into looking nice for boys. Or other girls," you wink.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      scene.img('images/shared/home/bathroom/brotherpussyfeel.mp4');
      scene.text('"There," you say, taking your brother\'s hand and pressing it against your freshly shaved pubic region. "Smooth enough for you now?"');
      scene.text('"Yeah…" He takes advantage of the opportunity to slip his fingers inside you, forcing a moan from you. "I like it a lot."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd_2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling.');
      scene.text('You put your hands on either side of your pussy as if to frame it for him.');
      scene.text('"Well? Satisfied now?"');
      scene.text('"Yeah…" he says, trailing off at the end, obviously hypnotized by your pussy. You to roll your eyes in response.');
      scene.actions([
        { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img('images/shared/home/bathroom/brotherpussyfeel.mp4');
    qspCall(s, 'arousal', 'vaginal_finger', 1, 'incest');
    qspCall(s, 'stat', '');
    scene.text('"There," you say, taking your brother\'s hand and pressing it against your freshly shaved pubic region. "Happy now?"');
    scene.text('He takes advantage of the opportunity sliding his fingers down your smooth front of your pussy to slip his fingers inside, forcing a moan from you.');
    scene.text('"Very," he grins back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerEnd_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/shave.jpg');
    scene.text('"There," Thrust your hips forward, presenting your freshly shaved pussy to him. "Happy now?"');
    scene.text('"Yeah…" he says, trailing off at the end, obviously hypnotized by your pussy. You to roll your eyes in response.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerfun(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brother_shower ?? 0)?.['grope'] < 4) {
    qspCall(s, 'arousal', 'foreplay', 1, 'incest');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brothershowersex1.jpg');
    scene.text('You squeak as you feel your brother\'s hands grab you by the breasts, squeezing hard and pinching your nipples.');
    if (((s as any).milkedvolume ?? 0) > 0) {
      scene.text('From the tingling in your nipples you can tell that some milk leaked.');
    }
    if (((s as any).brother_shower ?? 0)?.['grope'] === 2) {
      scene.text('"Because I spend all day thinking about these…"');
    }
    if (((s as any).brother_shower ?? 0)?.['grope'] === 3) {
      scene.text('"I\'d rather focus on these…"');
    }
    scene.actions([
      { label: '"Down boy!"', handler: (st: GameState) => {
    scene.text('"Tsk!" you chide him and slap his hands away. "Down boy!"');
    scene.text('His hands snap back, somewhat surprised at your denial.');
    scene.actions([
      { label: 'I\'m not in the mood', handler: (st: GameState) => {
    scene.text('"I\'m not in the mood to take care of you right now Kolka. Bother me some other time."');
    scene.text('Suitably chagrined, the rest of your shower together elapses in only the sound of splashing water and frothing suds.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
    ]);
  } },
      { label: 'I don\'t have time (angry)', handler: (st: GameState) => {
    scene.text('"Fuck, Kolka! I don\'t have time for this today! Can\'t you keep your hands to yourself for five minutes?"');
    scene.text('Suitably chagrined, the rest of your shower together elapses in only the sound of splashing water and frothing suds.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
    ]);
  } },
      { label: 'I don\'t have time (apologetic)', handler: (st: GameState) => {
    scene.text('"I\'m afraid I don\'t have time to fool around today Kolka," you say, giving him an apologetic smile over your shoulder. "Maybe some other time, okay?"');
    scene.text('He nods, obviously disappointed and you finish up your shower together chatting and washing as normal.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
    ]);
  } },
      { label: 'Only when I say so', handler: (st: GameState) => {
    scene.text('"I know it\'s tempting to get handsy but you can only touch when I say so." You give him a sly smile over your shoulder. "I\'m still your big sister Kolka. Show some respect for her, eh?"');
    scene.text('He looks at you wistfully but nods and you finish up your shower together chatting and washing as normal.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
    ]);
  } },
    ]);
  } },
      { label: 'Tease him but deny him', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('You take a moment to savour the feel of his hands on your breasts, reaching back to grab his cock. You jerk it up and down a couple times and turn your head over your shoulder to whisper in his ear.');
    scene.text('"Not today Kolka."');
    scene.text('You push him back, leaving a confused look on his face. You smile at him saying, "As much as I\'d love to, I just can\'t find the time to help you out today. I guess you\'ll have to take things \'into your own hands\' later." You give his cock one last teasing caress and a firm squeeze before getting back to showering.');
    scene.text('The rest of your shower is uneventful, but Kolka\'s erection does seem to be more of a raging hard-on than usual.');
    scene.actions([
      { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
      { label: 'Suggest you wash each other', goto: ['brother_voyeur', 'brother_wash'] },
    ]);
  } },
      { label: 'Get into it', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'incest');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('"Ughh… Oh yeah… Keep doing <i>that…</i>"');
    scene.text('You lean into your brother\'s touch, his hands roaming up and down your body, focusing mostly on your breasts. Your hand unconsciously reaches back and grabs hold of his dick, jerking it gently. You think about what you want to do next.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
    ]);
  } else {
    qspCall(s, 'arousal', 'foreplay', 3, 'incest');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Feeling turned on from your brother\'s hands on you, you lean back into him, teasingly handling his package. He responds in kind, fondling your breasts, eliciting moans when he pinches your nipples.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrotherShowerEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'love');
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_times'] = ((s as any).brotherQW['shower_times'] ?? 0) + (1);
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
    (s as any).cumspclnt = 1;
  } else {
    (s as any).cumspclnt = 18;
  }
  qspCall(s, 'cum_cleanup', '');
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  scene.text('The two of you now feeling fresh and clean, you turn off the water and step out.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Did you have fun?"', handler: (st: GameState) => {
    scene.text('You help towel him off since he needs to leave before you anyways to prevent suspicion and soon he stands dry before you. And you, still nude and dripping.');
    scene.text('"Have fun showering with your sister??"');
    scene.text('Kolka says nothing but grins and nods.');
    if (((s as any).pcs_inhib ?? 0) >= 60  ||  ((s as any).npc_rel ?? 0)?.['A34'] > 85) {
      scene.actions([
        { label: 'Until next time (grab his cock)', handler: (st: GameState) => {
    scene.text('A sly smile on your face, you step forward to grab him by the cock.');
    scene.text('"Until next time little brother," you murmur into his ear, giving his member a hard squeeze. Then, you slap his ass and push him towards the door. "Now, shoo! Before someone catches us in here together."');
    scene.text('Startled, he does as you say, picking up his clothes and peeking into the hallway to make sure no one is there before slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ruffle his hair and send him on his way', handler: (st: GameState) => {
    scene.text('"Well, glad you enjoyed yourself," you say, ruffling his hair, smiling when he cringes back in response to the child-like treatment. "See you later bro."');
    scene.text('He nods back at you, picking up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
      { label: 'Kiss him goodbye', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['kiss'] = ((s as any).brotherQW['kiss'] ?? 0) + (1);
    scene.text('You take a towel and wrap it around yourself before leaning in and giving your brother a quick kiss on the lips.');
    scene.text('"See you later."');
    scene.text('He\'s taken aback by the kiss, but smiles anyways, picking up his clothes before peeking into the hallway to make sure no one is there and slipping out the door.');
    qspCall(s, 'brother_shower_sex', 'brother_shower_finishdryoff');
  } },
    ]);
  } },
    { label: 'Kick him out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('Thoroughly annoyed with your brother, you shove him towards the door.');
    scene.text('"Get out."');
    scene.text('"But I-!"');
    scene.text('"Out!"');
    scene.text('Still dripping wet with his clothes in his arms, you shove Kolka into the hallway naked. If your parents ask about it, you\'ll just tell them he was peeping on you and you sprayed him with the showerhead.');
    if (((s as any).pcs_horny ?? 0) > 70) {
      scene.text('And fuck! You\'re still so goddamn horny!');
    }
    qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  } },
  ]);
  scene.build();
}

function enterAssCompliment(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  scene.img('images/shared/home/bathroom/ass_compliment.mp4');
  scene.text('While you\'re shampooing your hair, your brother decides to speak up about something.');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Can I say something?"
  scene.text(`"Hey ${((s as any).pcs_nickname || '')}. Can I say something?"`);
  scene.text('"Hmm? Sure, what is it Kolka?"');
  scene.text('"You have a great ass!"');
  scene.text('Feeling his smile radiating from behind you, you look over your shoulder and give him a grin and a little shake of your ass to show your appreciation for his compliment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brother_voyeur', 'shave'] },
  ]);
  scene.build();
}

function enterShave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) < 4  &&  ((s as any).pcs_leghair ?? 0) < 4) {
    qspGoto(s, 'brother_voyeur', 'dryoff');
  }
  if (((s as any).brotherQW ?? 0)?.['shower_look'] === 1  &&  ((s as any).brotherQW ?? 0)?.['shave_day'] < ((s as any).daystart ?? 0)) {
    scene.img('images/shared/home/bathroom/brothertalk4.jpg');
    scene.text('You\'re rinsing off when you notice Kolka staring at your legs and what\'s between them.');
    scene.text('"Excuse me?" you ask him pointedly. "Can I help you with something?"');
    if (((s as any).pcs_pubes ?? 0) < 11  &&  ((s as any).pcs_leghair ?? 0) > 3) {
      // TODO-QSP: dynamic text: His lips twisted in thought, he says, "You're looking kind of stubbly down there...
      scene.text(`His lips twisted in thought, he says, "You're looking kind of stubbly down there." You follow his gaze to look at your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs and pussy. "Aren't you going to shave?"`);
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 11  &&  ((s as any).pcs_pubes ?? 0) < 21  &&  ((s as any).pcs_leghair ?? 0) > 3) {
        // TODO-QSP: dynamic text: His lips twisted in thought, he says, "You're growing a bit of a bush down there...
        scene.text(`His lips twisted in thought, he says, "You're growing a bit of a bush down there." You follow his gaze to look at your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs and your trimmed pussy hair. "Looks like your legs are growing grass to match. Aren't you going to shave?"`);
      } else {
        if (((s as any).pcs_pubes ?? 0) >= 21  &&  ((s as any).pcs_leghair ?? 0) > 3) {
          // TODO-QSP: dynamic text: His lips twisted in thought, he says, "That bush you've got is looking more like...
          scene.text(`His lips twisted in thought, he says, "That bush you've got is looking more like a forest right now." You follow his gaze to look at your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs and the thick bush of pubic hair that covers your pussy. "Plus it looks like your legs are growing grass to match. Aren't you going to shave?"`);
        } else {
          if (((s as any).pcs_leghair ?? 0) <= 3  &&  ((s as any).pcs_pubes ?? 0) < 11) {
            scene.text('His lips twisted in thought, he says, "You\'re looking kind of stubbly down there." You follow his gaze to look at the stubble growing on your pussy. "Aren\'t you going to shave?"');
          } else {
            if (((s as any).pcs_leghair ?? 0) <= 3  &&  ((s as any).pcs_pubes ?? 0) >= 11  &&  ((s as any).pcs_pubes ?? 0) < 21) {
              scene.text('His lips twisted in thought, he says, "You\'re growing a bit of a bush down there." You follow his gaze to look at the small patch of hair on your pussy. "Aren\'t you going to shave?"');
            } else {
              if (((s as any).pcs_leghair ?? 0) <= 3  &&  ((s as any).pcs_pubes ?? 0) >= 21) {
                scene.text('His lips twisted in thought, he says, "That bush you\'ve got is looking more like a forest right now." You follow his gaze to look at the thick bush of pubic hair that covers your pussy.');
              } else {
                if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) <= 3) {
                  // TODO-QSP: dynamic text: His lips twisted in thought, he says, "You're looking a little hairy down there....
                  scene.text(`His lips twisted in thought, he says, "You're looking a little hairy down there." You follow his gaze to look at your ${((s as any).pc_desc ?? 0)?.['legs'] ?? ''} legs. "Aren't you going to shave?"`);
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['razor'] === 0) {
      scene.actions([
        { label: '"I can\'t. I don\'t have any razors"', handler: (st: GameState) => {
    scene.text('"I couldn\'t even if I wanted to," you say to him wistfully. He looks at you in confusion. "I\'m out of razors. Can\'t shave without a razor kiddo."');
    scene.text('"Oh." He looks disappointed.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 3  &&  ((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['all']) {
      }
      if (((s as any).pcs_pubes ?? 0) < 21) {
        scene.actions([
          { label: '"Nope! I\'m thinking of growing it out"', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 6;
    scene.text('"Nope! I\'m thinking about growing it out," you say cheerfully, smiling at him.');
    if (((s as any).pcs_pubes ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) < 11) {
      scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters.');
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 11  &&  ((s as any).pcs_pubes ?? 0) < 21) {
        scene.text('"Hmph. I still think you\'d look better if you shaved it off…"');
      }
    }
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Nah, I\'m too lazy"', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 2;
    scene.text('"Nah," you say. "I\'m too lazy to do it. If I start shaving now, I\'ll have to keep shaving every few days. Too much trouble to maintain."');
    scene.text('"Hrmph. No wonder it\'s such a mess down there…" he mutters.');
    scene.text('You glare at him a little but he doesn\'t see it as he\'s already crossed his arms and looked away, still frowning.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_pubes ?? 0) > 10) {
        scene.actions([
          { label: '"I like it like this!"', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 6;
    scene.text('"I like it like this! Nothing wrong with a girl wanting to have a bit of bush down there," you say cheerfully, smiling at him.');
    if (((s as any).pcs_pubes ?? 0) > 20) {
      scene.text('"Hrmph. More like a jungle…" he mutters. You glare at him a little but he doesn\'t see it as he\'s already crossed his arms and looked away, still frowning. "I still think you\'d look better if you shaved it off…"');
      scene.text('"Get used to disappointment," you warn sternly.');
    } else {
      scene.text('"Hmph. I still think you\'d look better if you shaved it off…"');
      scene.text('"Oh Kolka," you roll your eyes. "If you think that every girl out there is going to keep it smooth, you\'re going to be in for a rude surprise."');
      scene.text('"But it looks better that way!" he complains.');
    }
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 3  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['all']) {
        scene.actions([
          { label: 'Shave your legs and pussy (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_pubes = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['all']);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave.mp4');
    scene.text('"Yeah, sure. Why not?" you smile.');
    scene.text('You lather up your legs and crotch and then start carefully shaving them. Kolka stares at you and watches the process intently.');
    scene.text('"Enjoying the show?" you say teasingly. He doesn\'t say anything except nod, not looking away for a second. You have to admit, it\'s a little bit exciting having someone watch you do this. You might be enjoying this almost as much as your brother is.');
    scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the smooth feeling.');
    if (((s as any).brotherQW ?? 0)?.['shave'] === 1) {
      scene.text('As you rinse the remains of the lather away, Kolka asks, "So this is what all the girls do when they need to shave?"');
      scene.text('<br>You laugh at the naiveté of his question. "Yes, yes we do. So be appreciative when a girl\'s clean-shaven for you! We put a lot of work into looking nice for boys. Or other girls," you wink.');
    }
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      }
      if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']) {
        scene.actions([
          { label: 'Shave your legs (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['legs']);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave2.jpg');
    scene.text('"Yeah, I guess my legs could do with a shave."');
    scene.text('You lather up your legs and then start carefully shaving them.');
    if (((s as any).pcs_pubes ?? 0) > 3) {
      scene.text('Kolka frowns. "You\'re not going to shave your pussy?"');
      if (((s as any).mc_inventory ?? 0)?.['razor'] < ((s as any).razors_to_use ?? 0)?.['pussy']) {
        scene.actions([
          { label: '"I can\'t. Razor\'s gone dull"', handler: (st: GameState) => {
    scene.text('"I couldn\'t even if I wanted to," you say to him wistfully. He looks at you in confusion. "Razor\'s gone dull." You thumb the razor to show him. Need a sharp razor to shave. <i>Especially</i> down there," you smile suggestively.');
    scene.text('"Oh." He looks disappointed.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).pcs_pubes ?? 0) < 21  ||  ((s as any).shave_length ?? 0) > 0) {
          scene.actions([
            { label: '"Nope! I\'m thinking of growing it out"', handler: (st: GameState) => {
    scene.text('"Nope! I\'m thinking about growing it out," you say cheerfully, smiling at him.');
    if (((s as any).pcs_pubes ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) < 11) {
      scene.text('"Hmph. I still think you\'d look better if you just kept it smooth…" he mutters.');
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 11  &&  ((s as any).pcs_pubes ?? 0) < 21) {
        scene.text('"Hmph. I still think you\'d look better if you shaved it off…"');
      }
    }
    scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: '"Nah, I\'m too lazy"', handler: (st: GameState) => {
    scene.text('"Nah," you say. "I\'m too lazy to do it. If I start shaving now, I\'ll have to keep shaving every few days. Too much trouble to maintain."');
    scene.text('"Hrmph. No wonder it\'s such a mess down there…" he mutters.');
    scene.text('You glare at him a little but he doesn\'t see it as he\'s already crossed his arms and looked away, still frowning. He seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_pubes ?? 0) > 10) {
          scene.actions([
            { label: '"I like it like this!"', handler: (st: GameState) => {
    scene.text('"I like it like this! Nothing wrong with a girl wanting to have a bit of bush down there," you say cheerfully, smiling at him.');
    if (((s as any).pcs_pubes ?? 0) > 20) {
      scene.text('"Hrmph. More like a jungle…" he mutters. You glare at him a little but he doesn\'t see it as he\'s already crossed his arms and looked away, still frowning. "I still think you\'d look better if you shaved it off…"');
    }
    if (((s as any).pcs_pubes ?? 0) < 21) {
      scene.text('"Hmph. I still think you\'d look better if you shaved it off…"');
    }
    scene.text('Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: '"Nah, I don\'t feel like it right now"', handler: (st: GameState) => {
    scene.text('"Nah," you say, continuing to run the razor over your legs. "I don\'t feel like doing it right now. Too much work."');
    scene.text('Kolka seems disappointed. Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
          { label: '"Hmm, maybe you\'re right"', handler: (st: GameState) => {
    (s as any).pcs_pubes = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    scene.img('images/shared/home/bathroom/shave.mp4');
    if (((s as any).pcs_pubes ?? 0) < 11) {
      scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch.<br>Kolka stares at you intensely as you carefully remove the bits of stubble from around your pussy.');
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 11) {
        scene.text('<br>"Hmm…" You think to yourself for a moment. "Yeah, you\'re right. Maybe it\'s time to get rid of this bush," you say and start lathering up your crotch.<br>Kolka stares at you intensely as you carefully remove the hair from around your pussy.');
        scene.text('<br>"Enjoying the show?" you say teasingly. He doesn\'t say anything except nod, not looking away for a second. You have to admit, it\'s a little bit exciting having someone watch you do this. You might be enjoying this almost as much as your brother is.');
      }
    }
    scene.text('<br>Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling.');
    if (((s as any).brotherQW ?? 0)?.['shave'] === 1) {
      scene.text('<br>As you rinse the remains of the lather away, Kolka asks, "So this is what all the girls do when they need to shave?"');
      scene.text('<br>You laugh at the naiveté of his question. "Yes, yes we do. So be appreciative when a girl\'s clean-shaven for you! We put a lot of work into looking nice for boys. Or other girls," you wink.');
    }
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Once you\'re finished you gently glide your hands over your smooth legs, making sure you didn\'t miss a spot.');
      scene.actions([
        { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']) {
        scene.actions([
          { label: 'Shave your pussy (0:10)', handler: (st: GameState) => {
    if (((s as any).pubestyle ?? 0) > 0  ||  ((s as any).pubestyle ?? 0) === 10) {
      (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    } else {
      (s as any).pcs_pubes = 0;
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brotherQW['shave'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave.mp4');
    if (((s as any).pcs_pubes ?? 0) <= 10) {
      scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch.');
      scene.text('<br>Kolka stares at you intensely as you carefully remove the bits of stubble from around your pussy.');
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 11) {
        scene.text('<br>"Hmm…" You think to yourself for a moment. "Yeah, you\'re right. Maybe it\'s time to get rid of this bush," you say and start lathering up your crotch.');
        scene.text('<br>Kolka stares at you intensely as you carefully remove the hair from around your pussy.');
        scene.text('<br>"Enjoying the show?" you say teasingly. He doesn\'t say anything except nod, not looking away for a second. You have to admit, it\'s a little bit exciting having someone watch you do this. You might be enjoying this almost as much as your brother is.');
      }
    }
    if (((s as any).shave_length ?? 0) === 2) {
      scene.text('Once you\'re finished you gently glide your hands over your freshly shaved pussy, enjoying the smooth feeling.');
      if (((s as any).brotherQW ?? 0)?.['shave'] === 1) {
        scene.text('<br>As you rinse the remains of the lather away, Kolka asks, "So this is what all the girls do when they need to shave?"');
        scene.text('<br>You laugh at the naiveté of his question. "Yes, yes we do. So be appreciative when a girl\'s clean-shaven for you! We put a lot of work into looking nice for boys. Or other girls," you wink.');
      }
      scene.actions([
        { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    } else {
      if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
        if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0) + 5) {
          scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch. start shaving away the edges of your pubic hair. After a few minutes, you\'ve given your pussy a perfect hairdoo and rinse off the rest of the soap, admiring your new sexual fashion before deciding what to do next.');
        } else {
          scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch before spending some time cleaning up the area around your styled pubic hair, shaving away stubble and hair until it\'s neat and tidy again.');
        }
      } else {
        if (((s as any).pubestyle ?? 0) === 9) {
          (s as any).shave_act = 'Trim your bush';
          if (((s as any).pcs_pubes ?? 0) >= 26) {
            scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all," you say and start lathering up your crotch before spending some time trimming back your thick bush of pubic hair, until it is a neat and tidy lawn of hair instead.');
          } else {
            scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all."You spend some time maintaining your bush, keeping it short and neat.');
          }
        } else {
          if (((s as any).pubestyle ?? 0) === 10) {
            if (((s as any).pcs_pubes ?? 0) >= 40) {
              scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all." You spend some time hacking back the wild jungle covering your crotch. Soon enough, you\'re left with a sophisticated and tidy bush of hair that neatly carpets your pussy.');
            } else {
              scene.text('<br>"Hmm…" You think to yourself for a moment. "Maybe you\'re right after all." You spend some time maintaining your bush, trimming back the edges, keeping it neat and tidy.');
            }
          }
        }
      }
      if (((s as any).pcs_pubes ?? 0) > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShaveNotDone(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.actions([
          { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
        ]);
      }
    }
  } },
        ]);
      }
      scene.actions([
        { label: '"Not with you watching!"', handler: (st: GameState) => {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = ((s as any).daystart ?? 0) + 2;
    scene.img('images/shared/home/bathroom/brothertalk3.jpg');
    scene.text('"Not with you watching!" you laugh. "That\'s a bit intimate. Maybe I will when you\'re not around."');
    scene.text('"Hmm…" He seems disappointed.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
      ]);
    }
  } else {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    if (((s as any).pcs_leghair ?? 0) >= 4  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['all']) {
      scene.text('While rinsing off, you notice your legs and pussy could use a shave. You look up and Kolka is still looking at the wall.');
    } else {
      if (((s as any).pcs_leghair ?? 0) < 4  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']) {
        scene.text('While rinsing off, you notice that your pussy could use a shave. You look up and Kolka is still looking at the wall.');
      } else {
        if (((s as any).pcs_leghair ?? 0) >= 4  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']) {
          scene.text('While rinsing off, you notice your legs could use a shave. You look up and Kolka is still looking at the wall.');
        }
      }
    }
    scene.text('Do you want to shave right now?');
    if (((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['all']  &&  ((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 3) {
      scene.actions([
        { label: 'Shave your legs and pussy (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_leghair = 0;
    if (((s as any).pubestyle ?? 0) > 0  ||  ((s as any).pubestyle ?? 0) === 10) {
      (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    } else {
      (s as any).pcs_pubes = 0;
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['all']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave3.jpg');
    scene.text('You casually continue the conversation with your brother while lathering up your legs and crotch before starting to carefully shave them. You notice your brother make a few curious peeks but decide not to say anything and simply continue on with your business and the conversation.');
    scene.text('Once you\'re finished you gently glide your hands over your smooth pussy and legs, enjoying the feeling and getting slightly more aroused by the touch.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']  &&  ((s as any).pcs_leghair ?? 0) > 3) {
      scene.actions([
        { label: 'Shave your legs (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_leghair = 0;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['legs']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave2.jpg');
    scene.text('You casually continue the conversation with your brother while lathering up your legs before starting to carefully shave them. You notice your brother make a few curious peeks but decide not to say anything and simply continue on with your business and the conversation.');
    scene.text('Once you\'re finished you gently glide your hands over your smooth legs, enjoying the feeling and getting slightly more aroused by the touch.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']  &&  ((s as any).pcs_pubes ?? 0) > 3) {
      scene.actions([
        { label: 'Shave your pussy (0:10)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).pubestyle ?? 0) > 0  ||  ((s as any).pubestyle ?? 0) === 10) {
      (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    } else {
      (s as any).pcs_pubes = 0;
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/shave3.jpg');
    scene.text('You casually continue the conversation with your brother while lathering up the area between your legs before starting to carefully shave it. You notice your brother make a few curious peeks but you decide not to say anything and simply continue on with your business and the conversation.');
    scene.text('Once you\'re finished you gently glide your hands over your smooth pussy, enjoying the feeling and getting slightly more aroused by the touch.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Skip it', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/brothershowertalk.mp4');
    scene.text('You don\'t feel the need to shave right now and finish up showering as normal.');
    scene.actions([
      { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShaveNotDone(s: GameState, scene: SceneBuilder): void {
  scene.text('"There!" you smile in satisfaction of a job well done. "Perfect!"');
  scene.text('Kolka on the other hand, frowns in dissatisfaction.');
  scene.text('"What do you mean? You\'re not done?"');
  scene.text('"Uhh, yeah I am. This is the way I like my pubic hair."');
  // TODO-QSP: dynamic text: "You're <i>supposed</i> to shave everything clean <<$pcs_nickname>>."
  scene.text(`"You're <i>supposed</i> to shave everything clean ${((s as any).pcs_nickname || '')}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('"Oh Kolka," you roll your eyes. "If you think that every girl out there is going to keep it smooth, you\'re going to be in for a rude surprise."');
    scene.text('"But it looks better that way!" he complains.');
    scene.text('"Get used to disappointment," you chuckle.');
    if (((s as any).brother_shower ?? 0)?.['together'] === ((s as any).daystart ?? 0)) {
      if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
        scene.actions([
          { label: 'Get frisky', handler: (st: GameState) => {
    ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = 4;
    qspGoto(s, 'brother_voyeur', 'showerfun');
  } },
        ]);
      }
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
    { label: 'Indulge him', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/shave_stubble.mp4');
    scene.text('"Oh <i>fine</i>," you say, giving your half-brother an exasperated smile and get back to work. "Just for you."');
    scene.text('Kolka watches eagerly.');
    scene.text('"Get used to disappointment," you chuckle.');
    if (((s as any).brother_shower ?? 0)?.['together'] === ((s as any).daystart ?? 0)) {
      if (((s as any).brotherQW ?? 0)?.['Sex'] > 0  ||  ((s as any).brotherQW ?? 0)?.['fuck'] > 0  ||  ((s as any).brotherQW ?? 0)?.['bj'] > 0  ||  ((s as any).brotherwash ?? 0) > 5) {
        scene.actions([
          { label: 'Get frisky', handler: (st: GameState) => {
    ((s as any).brother_shower = (s as any).brother_shower ?? {})['grope'] = 4;
    qspGoto(s, 'brother_voyeur', 'showerfun');
  } },
        ]);
      }
      scene.actions([
        { label: 'Finish showering', goto: ['brother_voyeur', 'brother_shower_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Dry off', goto: ['brother_voyeur', 'dryoff'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDryoff(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brotherQW ?? 0)?.['shower_look'] === 0) {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_2.mp4');
    scene.text('Eventually your conversation ends and Kolka excuses himself while you dry yourself off.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_2.mp4');
    scene.text('Eventually, you finish your showering and wrap up what\'s left of your conversation with Kolka while he watches you towel off.');
    scene.actions([
      { label: 'Dry off and stay to use the mirror', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    // TODO-QSP: dynamic text: "I don't mean to kick you out Kolka but I've gotta brush my hair and stuff. I do...
    scene.text(`"I don't mean to kick you out Kolka but I've gotta brush my hair and stuff. I don't want ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad to start wondering where you are so why don't you go on out ahead?"`);
    // TODO-QSP: dynamic text: "Okay. I'll see you later <<$pcs_nickname>>!" he says before slipping out the do...
    scene.text(`"Okay. I'll see you later ${((s as any).pcs_nickname || '')}!" he says before slipping out the door and closing it behind him.`);
    scene.text('You smile faintly and go back to making sure you\'re wiped dry.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
      { label: 'Dry off and leave with Kolka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
    scene.text('When you\'re done, the two of you leave the bathroom together.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowertalkbusy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/brothertalk1.jpg');
  scene.text('You see your brother spying on you through the crack in the door again. When you make eye contact with him, he opens it up a bit to talk to you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he whispers. "Can I come in?"
  scene.text(`"${((s as any).pcs_nickname || '')}," he whispers. "Can I come in?"`);
  scene.text('"Did you want to talk right now?" He nods furiously and starts to widen the door to come in you stop him. "I\'m sorry Kolka! I\'m kind of busy today, I don\'t have time to take a longer shower right now. Maybe next time, okay?" you say apologetically.');
  scene.text('"Oh, okay…" he says dejectedly before closing the door and leaving you to finish your shower. You feel bad, but you really just don\'t have time for him right now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out and dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterGetFrisky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get frisky', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 1, 'incest');
    qspCall(s, 'stat', '');
    scene.text('Clean from your shower together, and now with freshly shaved legs, you can\'t help yourself as you start to get frisky with your brother. His hands slide up your body to caress your breasts. In response, you reach back and start jerking his cock feeling him harden under your touch.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enterShowerEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    { label: 'Cheer him up', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/finger1.mp4');
    scene.text('"Oh don\'t be like that Kolka," you say, gently taking his hand. "I can\'t have you being all pouty on me. I guess your big sister will have to do something about that."');
    // TODO-QSP: dynamic text: You pull his hand over to your pussy, rubbing his fingers up against your clit. ...
    scene.text(`You pull his hand over to your pussy, rubbing his fingers up against your clit. He jumps at the opportunity, immediately sticking his fingers inside and fingerblasting you. You smile at his eagerness. Doesn't seem bothered by your ${((s as any).pc_desc ?? 0)?.['pubes'] ?? ''} pussy now…`);
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enterShowerEnd_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish showering together', goto: ['brother_voyeur', 'brother_shower_end'] },
    { label: 'Have some fun', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'incest');
    qspCall(s, 'arousal', 'foreplay', 1, 'incest');
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/brothershowersex2.jpg');
    scene.text('Clean from your shower together, and now with freshly a shaved pussy, you can\'t help yourself as you start to get frisky with your brother. His hands slide up your body to caress your breasts. In response, you reach back and start jerking his cock feeling him harden under your touch.');
    qspCall(s, 'brother_shower_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enterBrotherGoAway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'npc_relationship', 'modify', 'A34', (-2));
  scene.img('images/shared/home/bathroom/scream.jpg');
  scene.text('You shriek, covering your pussy and breasts with both hands. " What the <i>fuck</i> Kolka!? Get the fuck out of here!"');
  scene.text('Caught red-handed, Kolka slams the door and runs away. You finish showering quietly and dry yourself off.');
  qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  // TODO-QSP: end
  scene.build();
}

function enterBrotherGoAway2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'npc_relationship', 'modify', 'A34', (-1));
  scene.img('images/characters/pavlovsk/resident/kolka/event/shower/b (13).jpg');
  scene.text('Turning to look at him, you give your brother a hard stare, "Kolka, if you don\'t leave right now, I\'m gonna spray you with the showerhead."');
  scene.text('Caught red-handed, Kolka backs away slowly and the door clicks shut.');
  scene.text('<i>Ugh, boys…</i> you think to yourself, rolling your eyes in annoyance. You finish showering and dry yourself off.');
  qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  // TODO-QSP: end
  scene.build();
}

function enterBrotherVoyeurEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).picrand = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  qspCall(s, 'mood', 'raise', 'tiny');
  scene.img(`images/characters/pavlovsk/resident/kolka/event/shower/b (end${((s as any).picrand || '')}).jpg`);
  scene.text('Confused, surreptitiously looking at your brother, you take a towel and wrap it around your flushed, steamed body.');
  scene.text('You shudder at the realization this is wrong. Kolka quietly closes the door and tiptoes out.');
  scene.text('You feel uncomfortable and ashamed, but smile at recalling his wide open eyes, his flushed face and red ears and how they increased the more you decided to tease him.');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'brother_shower_sex', 'brother_shower_finish');
  // TODO-QSP: end
  scene.build();
}

function enterBrotherVoyeurEv1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).picrand = Math.floor(Math.random() * 6) + 2;
  if (((s as any).npc_rel ?? 0)?.['A34'] <50) {
    qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 1);
  }
  if (((s as any).npc_QW ?? 0)?.['A34'] < 1) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 1;
  }
  scene.img(`images/characters/pavlovsk/resident/kolka/event/shower/b (${((s as any).picrand || '')}).jpg`);
  scene.text('You continue to wash as if nothing has happened, glancing at your brother. You carefully wash your body, paying particular attention to your breasts and pussy, feeling the excitement grow in your abdomen.');
  qspCall(s, 'arousal', 'foreplay', 2, 'incest');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 40) {
    scene.actions([
      { label: 'Play with your tits', goto: ['brother_voyeur', 'brother_voyeur_ev2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wipes', goto: ['brother_voyeur', 'brother_voyeur_end'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'foreplay', Math.floor(Math.random() * 6) + 5, 'incest');
  (s as any).picrand = Math.floor(Math.random() * 7) + 1;
  if (((s as any).npc_rel ?? 0)?.['A34'] <50) {
    qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 1);
  }
  scene.img(`images/characters/pavlovsk/resident/kolka/event/shower/c (${((s as any).picrand || '')}).jpg`);
  // TODO-QSP: dynamic text: You turn to face the door, giving Kolka a better view of your body and then erot...
  scene.text(`You turn to face the door, giving Kolka a better view of your body and then erotically squeeze your ${((s as any).titsize || '')} tits. Your fingers graze over your ${((s as any).pc_desc ?? 0)?.['nipples'] ?? ''} nipples and you can't help but give them a slight pinch. You reach for the detachable showerhead and begin spraying water over your chest, all the way gazing at your awestruck sibling. You close your eyes and in the heat of the moment, your heart flutters and you let out a light moan.`);
  qspCall(s, 'arousal', 'foreplay', 3, 'incest');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 80) {
    if (((s as any).npc_QW ?? 0)?.['A34'] >= 4  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 60) {
      scene.actions([
        { label: 'Invite him in', goto: ['brother_voyeur', 'brother_voyeur_ev3_2'] },
      ]);
    }
    scene.actions([
      { label: 'Direct the water at your pussy', goto: ['brother_voyeur', 'brother_voyeur_ev3'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your shower', goto: ['brother_voyeur', 'brother_voyeur_end'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).npc_QW ?? 0)?.['A34'] <= 1) {
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 2;
  }
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).picrand = Math.floor(Math.random() * 2) + 1;
  if (((s as any).npc_rel ?? 0)?.['A34'] <50) {
    qspCall(s, 'npc_relationship', 'modify', 'A34', Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'mood', 'raise', 'small');
  scene.img(`images/characters/pavlovsk/resident/kolka/event/shower/d (${((s as any).picrand || '')}).jpg`);
  // TODO-QSP: dynamic text: You move your feet a little wider apart and move the showerhead down your body u...
  scene.text(`You move your feet a little wider apart and move the showerhead down your body until it hovers just over your aching pussy. The spray of water is intense against your oh-so-sensitive lips and ${((s as any).pc_desc ?? 0)?.['clit'] ?? ''} clit. It doesn't take long before the sensation is too much and you orgasm - wave after wave hitting your entire body, you bite down on your tongue to muffle your moans, but are unable to keep completely silent; the occasional gasp escaping your lips.`);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'clit_vibe', (-5), 'incest', 'masturbate');
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'clit_vibe', 5, 'incest', 'masturbate');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry yourself off', goto: ['brother_voyeur', 'brother_voyeur_end'] },
  ]);
  scene.build();
}

function enterBrotherVoyeurEv3_2(s: GameState, scene: SceneBuilder): void {
  (s as any).brother = ((s as any).brother ?? 0) + (15);
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['confidence'] = ((s as any).brotherQW['confidence'] ?? 0) + (5);
  if (((s as any).pcs_vag ?? 0) < ((s as any).npc_dick ?? 0)?.['A34']) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['fuck'] = ((s as any).brotherQW['fuck'] ?? 0) + (1);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'cum_call', '', '', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/shower/broshower.mp4');
  scene.text('After you gesture for Kolka to enter the room, he closes the latch on the door.');
  if (((s as any).brotherQW ?? 0)?.['know_not_virgin']) {
    scene.text('"I dreamed about this, you know," he says, quickly shedding his clothing before stepping into the shower.');
    // TODO-QSP: dynamic text: You turn your ass to Kolka as he strokes his hardening <<npc_dick['A34']>> cm lo...
    scene.text(`You turn your ass to Kolka as he strokes his hardening ${((s as any).npc_dick ?? 0)?.['A34'] ?? ''} cm long member, before guiding it into your waiting pussy.`);
  } else {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_not_virgin'] = 1;
    scene.text('Kolka\'s voice goes low, you can barely hear him over the noise of the shower. "Are you, you know…"');
    scene.text('"A virgin?" you ask him smiling.');
    scene.text('"Yeah," he replies with a red face and embarrassed expression on his face.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['virgin_think_took'] = 1;
      scene.text('"Yes, I am," you nod to him. "You will be my first, little brother."');
      scene.text('He takes a deep breath to sort himself before shedding his clothes and stepping into the shower.');
      // TODO-QSP: dynamic text: You turn your ass to Kolka as he strokes his hardening <<npc_dick['A34']>> cm lo...
      scene.text(`You turn your ass to Kolka as he strokes his hardening ${((s as any).npc_dick ?? 0)?.['A34'] ?? ''} cm long member, before guiding it into your waiting pussy.`);
      if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
        scene.text('To your surprise his entry in your pussy does not cause you any pain. Of course you have heard about stories that say it didn\'t hurt, but you always thought it fake. You feel lucky to be wrong about that.');
      } else {
        scene.text('You feel a small, sharp pain between your legs, like a needle, but it quickly fades. You turn your head to look back at Kolka, his expression pure rapture.');
      }
    } else {
      // TODO-QSP: dynamic text: You turn your ass to Kolka as he strokes his hardening <<npc_dick['A34']>> cm lo...
      scene.text(`You turn your ass to Kolka as he strokes his hardening ${((s as any).npc_dick ?? 0)?.['A34'] ?? ''} cm long member, before guiding it into your waiting pussy.`);
      if (((s as any).npc_dick ?? 0)?.['A34'] > ((s as any).pcs_vag ?? 0)) {
        scene.text('Kolka\'s dick causes you to flinch a little as your pussy stretches to accept his size.');
      } else {
        scene.text('Kolka\'s dick causes you to groan a little as your pussy readily accepts him into your depth.');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'incest');
  qspCall(s, 'stat', '');
  scene.text('Your brother quickly starts to move his cock inside of you and it doesn\'t take you long to start feeling the oncoming waves of an orgasm. You suddenly grasp at his hands around your hips as you\'re overtaken by a powerful climax. Your pussy pulsates as your walls clamp down around Kolka\'s cock; your greedy, hungry box wanting every drop of your brother\'s cum. A few seconds later, Kolka joins you in orgasm as he shoots his load deep inside of you.');
  qspCall(s, 'cuminsidereact', '');
  // TODO-QSP: dynamic text: The two of you stay latched together for a few more seconds. You finally release...
  scene.text(`The two of you stay latched together for a few more seconds. You finally release Kolka's hands and he slowly withdraws his softening penis. You turn to face your younger sibling, the two of you blushing as your eyes meet. Kolka grins, "Thank you, ${((s as any).pcs_nickname || '')}. You've made me very happy."`);
  // TODO-QSP: dynamic text: Kolka steps out of the shower and begins to dry off. You stay under the water, s...
  scene.text(`Kolka steps out of the shower and begins to dry off. You stay under the water, still somewhat out of breath, as he gets dressed. He heads for the bathroom door, checking momentarily to see if the coast is clear, before turning back to you one last time, "Thanks again, ${((s as any).pcs_nickname || '')}, I really mean it."`);
  scene.text('"That was one of the best thing I have ever done. Thank you!" he says, then he quietly listens at the door for any movement outside, opens the door and leave you alone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shower', goto: ['brother', 'brother_sex_end'] },
  ]);
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
    case 'brothershowerlook':
      enterBrothershowerlook(s, scene);
      break;
    case 'day_talk':
      enterDayTalk(s, scene);
      break;
    case 'school_talk':
      enterSchoolTalk(s, scene);
      break;
    case 'friend_talk':
      enterFriendTalk(s, scene);
      break;
    case 'brother_shower_together_ask':
      enterBrotherShowerTogetherAsk(s, scene);
      break;
    case 'brother_shower_together_first':
      enterBrotherShowerTogetherFirst(s, scene);
      break;
    case 'brother_shower_together':
      enterBrotherShowerTogether(s, scene);
      break;
    case 'brother_wash_first':
      enterBrotherWashFirst(s, scene);
      break;
    case 'brother_wash':
      enterBrotherWash(s, scene);
      break;
    case 'brother_shower_shave':
      enterBrotherShowerShave(s, scene);
      break;
    case 'shave_alternatives':
      enterShaveAlternatives(s, scene);
      break;
    case 'shave_both':
      enterShaveBoth(s, scene);
      break;
    case 'shave_legs':
      enterShaveLegs(s, scene);
      break;
    case 'shave_pussy':
      enterShavePussy(s, scene);
      break;
    case 'showerfun':
      enterShowerfun(s, scene);
      break;
    case 'brother_shower_end':
      enterBrotherShowerEnd(s, scene);
      break;
    case 'ass_compliment':
      enterAssCompliment(s, scene);
      break;
    case 'shave':
      enterShave(s, scene);
      break;
    case 'shave_not_done':
      enterShaveNotDone(s, scene);
      break;
    case 'dryoff':
      enterDryoff(s, scene);
      break;
    case 'showertalkbusy':
      enterShowertalkbusy(s, scene);
      break;
    case 'get_frisky':
      enterGetFrisky(s, scene);
      break;
    case 'shower_end':
      enterShowerEnd(s, scene);
      break;
    case 'shower_end_2':
      enterShowerEnd_2(s, scene);
      break;
    case 'brother_go_away':
      enterBrotherGoAway(s, scene);
      break;
    case 'brother_go_away2':
      enterBrotherGoAway2(s, scene);
      break;
    case 'brother_voyeur_end':
      enterBrotherVoyeurEnd(s, scene);
      break;
    case 'brother_voyeur_ev1':
      enterBrotherVoyeurEv1(s, scene);
      break;
    case 'brother_voyeur_ev2':
      enterBrotherVoyeurEv2(s, scene);
      break;
    case 'brother_voyeur_ev3':
      enterBrotherVoyeurEv3(s, scene);
      break;
    case 'brother_voyeur_ev3_2':
      enterBrotherVoyeurEv3_2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brother_voyeur: LocationDef = {
  name: 'brother_voyeur',
  title: 'Through the crack in the door you make eye contact with your',
  region: 'other',
  enter: enter,
};
