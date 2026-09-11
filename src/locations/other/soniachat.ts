import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['happyslut'] >= 1  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['happyslut_tickday'] + 7) {
    (s as any).soniaQW['happyslut'] = ((s as any).soniaQW['happyslut'] ?? 0) + (1);
    (s as any).soniaQW['happyslut_tickday'] = ((s as any).daystart ?? 0);
  }
  scene.build();
}

function enterSoniaChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
  scene.text('You sit on the bed next to Sonia and look around her room as she starts chatting about something she recently read about in a magazine.');
  if (((s as any).soniaQW ?? 0)?.['cheap_clothes'] === 1) {
    scene.actions([
      { label: 'Ask her why she doesn\'t buy nicer clothes', handler: (st: GameState) => {
    (s as any).soniaQW['cheap_clothes'] = ((s as any).soniaQW['cheap_clothes'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You decide to ask her about why she has such cheap clothes but lives in a pretty nice house. "I don\'t mean to be rude, but you live in a pretty nice house, so I have to wonder. Why don\'t you just buy nicer clothes?"');
    scene.text('She lets out a slight laugh. "I\'d love to, but my mother thinks spending money on flashy clothes is a waste of money and my father thinks everyone needs to learn the value of a ruble."');
    scene.text('The last part she does her best to sound like a man when saying, which makes you both giggle. "Anyway, they have me on a very strict small allowance, so I have to be frugal," she adds with a shrug.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['shulyov'] > 0) {
    scene.actions([
      { label: 'Ask about her brother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('"So. I met your brother," you state matter of factly.');
    scene.text('"Oh god, don\'t fall for anything he says. He\'s a total horndog to the point I can\'t count the number of \'girlfriends\' he\'s had. He just uses them for sex and tosses them aside, yet they keep coming back to him. Do yourself a favor and stay away from him," she says in a serious tone.');
    scene.text('You just nod in response, not sure what you could possibly say back to her.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A25');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      scene.text('As you sit side by side, you can\'t help but look at her. Maybe for too long, or maybe she just senses it, because she turns her head to look at you. Her face is not that far from yours and you can\'t help yourself. You lean over to give her a kiss.');
      scene.text('She briefly returns your kiss before stopping to pull away. Sensing that she isn\'t interested, you decide to keep talking instead.');
      qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Stop kissing and talk more', goto: ['soniachat', 'sonia_chat'] },
      ]);
    } else {
      scene.text('As you sit side by side, you can\'t help but look at her. Maybe for too long, or maybe she just senses it, because she turns her head to look at you. Her face is not that far from yours and you can\'t help yourself.');
      scene.text('You lean over to give her a kiss, a kiss she fully returns.');
      qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Stop', goto: ['soniachat', 'sonia_chat'] },
        { label: 'Make out', handler: (st: GameState) => {
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    scene.text('As you wrap your hands around the side of her face, you feel her hands hold you by your hips as the two of you passionately make out. After a few minutes, she pulls away looking a little flustered before she gets up and cracks the window open.');
    scene.text('"It\'s getting hot in here," she says, but doesn\'t elaborate when she sits back down on the bed. She chooses a spot close to you, but not so close as to invite another kiss.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, or school in general.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    { label: 'Ask what she\'s been up to', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('"So what have you been up to lately?" you ask.');
    scene.text('She sighs dramatically. "Mostly trying to find some fun and avoid my parents. I think I\'ll hang myself if I hear one more speech about how a proper young lady has to act!"');
    // TODO-QSP: dynamic text: She ends her rant with a giggle and you smile at her. "Well, don't do that. You ...
    scene.text(`She ends her rant with a giggle and you smile at her. "Well, don't do that. You have too pretty of a neck to bruise." You both laugh at that. "But seriously, I understand. My ${((s as any).npc_nickname ?? 0)?.['A29']} is <i>insanely</i> overbearing as well."`);
    scene.text('The two of you are soon talking about how bad your mothers are. It seems you have a lot in common with your overbearing mothers trying to control every aspect of your lives.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    { label: 'Ask her about her fashion sense', handler: (st: GameState) => {
    (s as any).soniaQW['cheap_clothes'] = ((s as any).soniaQW['cheap_clothes'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('She often wears older clothes, but she somehow always manages to make them work and look stylish. "How do you manage to always look so nice?"');
    scene.text('She smiles. "You mean for someone that has cheaper clothes?"');
    scene.text('You\'re about to protest that you didn\'t mean it that way when she stops you. "I learned to sew. At first, it was just to fix tears and later alter clothes so they fit better and look nicer. You\'d be surprised what you can do with a little effort."');
    scene.text('She goes on to talk about how she goes about turning fairly plain looking clothes into stylish outfits. Having seen her house you know her family is not poor, not like yours, which makes you wonder why she buys cheap clothes.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    { label: 'Ask about hanging out with the gopniks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('"What\'s going on with you and the gopniks?" you ask.');
    scene.text('"I\'m just tired of being the good girl. I want to cut loose, get a little wild and have some fun. What\'s wrong with that?" she replies.');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, but you can\'t really trust those guys," you meekly reply.');
    scene.text('She rolls her eyes. "I can take care of myself! Just let me have my fun!"');
    scene.text('You\'re about to say something, but you can tell it will only cause an argument and decide to drop it.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    { label: 'Ask about the future', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('"What are your plans for after school?" you ask.');
    scene.text('She looks at you with a smile. "I\'ve got good grades, more than enough to get into the university in Saint Petersburg. I\'m planning to enrol there after school and study fashion design, but my parents want me to become a doctor or a lawyer or get a business degree or something like that."');
    scene.text('Before you can say anything, she turns to you. "What about you? What are your plans for the future?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      if (((s as any).rex_love ?? 0) === 1) {
        // TODO-QSP: act 'Get married to Rex': gt 'soniachat', 'telling_marrige_dreams', 'Rex'
      }
      if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
        // TODO-QSP: act 'Get married to Artem': gt 'soniachat', 'telling_marrige_dreams', 'Artem'
      }
      if (((s as any).kotovLoveQW ?? 0) === 1) {
        // TODO-QSP: act 'Get married to Vitek': gt 'soniachat', 'telling_marrige_dreams', 'Vitek'
      }
      if (((s as any).fedorKozlovQW ?? 0) >= 5) {
        // TODO-QSP: act 'Get married to Fedor': gt 'soniachat', 'telling_marrige_dreams', 'Fedor'
      }
      if (((s as any).NikoVolkovQW ?? 0) >= 5) {
        // TODO-QSP: act 'Get married to Niko': gt 'soniachat', 'telling_marrige_dreams', 'Niko'
      }
      (s as any).i = 0;
      // TODO-QSP: :marrid_looop
      if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
          // TODO-QSP: dynamic 'act ''Get married to <<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''soniachat'', ''telling_ma...
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        // TODO-QSP: jump 'marrid_looop'
      }
    } else {
      scene.actions([
        { label: 'Get married', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You sigh in a way only hopeless romantics do. "Hopefully I can find that special someone and get married soon."');
    scene.text('She smiles, seeing the signs of love. "If he makes you happy, then I\'m happy for you."');
    scene.text('You\'re not sure what more to say on the topic and decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('"I\'m not sure, but I guess I have a few options," you tell her.');
    scene.text('She nods. "Oh. Well, I guess you still have some time left to make up your mind..." she says. She sounds unsure though, as if she doesn\'t believe it herself.');
    scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You get a little excited. "I\'m planning to attend the university too. At least now I\'ll know someone there."');
    scene.text('She grins happily. "Maybe we should think about being roommates when we go? As you said, then we would know someone and we already get along. Let\'s talk about it some more when the time comes."');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask if she has a boy/girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You don\'t even know if she\'s a virgin or not and don\'t know if you should even ask, but you\'re curious. "Do you have a boyfriend? Or a girlfriend?"');
    scene.text('She shakes her head. "Nope, but I\'d like to find the right guy. Until then, I just want to have a little fun."');
    scene.actions([
      { label: 'Ask if she has ever dated', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You nod in understanding. "So have you ever... you know, dated a guy?"');
    scene.text('She blushes when she realizes what you\'re really asking. "A few times, but nothing too serious until a few months ago. While on vacation with my family, I met this boy... and it was magical. We spent all our time together and one night... Well, we did it..." she giggles.');
    scene.text('You smile. "I\'m glad you found someone, but it\'s a shame he isn\'t close. Are you still seeing him?"');
    scene.text('She shakes her head. "We talked about it, but felt it wouldn\'t be fair. We still talk, but are free to see other people."');
    scene.text('She starts talking about her first time with him and how after that, they had sex almost every day until she had to come home. When she finishes her story, she turns to you. "What about you?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['soniachat', 'boyfriend_chat'] },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
      { label: 'Let it drop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You smile at her reassuringly. "I\'m sure you\'ll find the right guy, or girl."');
    scene.text('She giggles. "I kind of already did..."');
    scene.text('You look surprised. "Well? Who is it?"');
    scene.text('She blushes. "While on vacation with my family, I met this boy... And it was magical. We spent all our time together and one night... Well, we did it," she giggles.');
    scene.text('You smile. "I\'m glad you found someone, but it\'s a shame he isn\'t close. Are you still seeing him?"');
    scene.text('She shakes her head. "We talked about it, but felt it wouldn\'t be fair. We still talk, but are free to see other people."');
    scene.text('She starts talking about her first time with him and how after that, they had sex almost every day until she had to come home. When she finishes her story, she turns to you. "What about you?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['soniachat', 'boyfriend_chat'] },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/sonia/soniasmile.jpg');
  // TODO-QSP: dynamic text: You sigh in a way only those who are in love can. "Hopefully <<$ARGS[1]>> and I ...
  scene.text(`You sigh in a way only those who are in love can. "Hopefully ${((s as any).locArgs?.[1] ?? 0)} and I can get married soon."`);
  scene.text('She smiles at you. "Best of luck with that."');
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Change the subject', goto: ['soniachat', 'sonia_chat'] },
  ]);
  scene.build();
}

function enterBoyfriendChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell her.');
    scene.text('She smiles at you. "Oh. He seems pretty nice and charming. You know, for one of the gopniks."');
    scene.text('You talk to her about how great of a guy he is.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Fedor', handler: (st: GameState) => {
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('"Fedor," you tell her.');
      scene.text('She arches a brow in surprise. "Fedor? Is he into girls? I mean, after he sucked Vasily\'s dick in front of the whole school, you kind of have to wonder..."');
      scene.text('You frown at her. "He didn\'t have a choice! Those criminals were going to take everything from his family because he couldn\'t pay them. He\'s not gay!"');
      scene.text('She holds up her hands. "Okay, okay. Sorry. As long as he makes you happy, that\'s all that matters," she says, trying to make peace.');
      scene.text('You nod, accepting her apology, and start telling her about how great of a guy he is.');
      scene.actions([
        { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
        { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
      ]);
    } else {
      scene.text('"Fedor," you tell her.');
      scene.text('She arches her brow slightly. "Fedor?" she asks before grinning. "If you were going to date a jock, I would have gone for Lazar. Or maybe Ivan?" she says with a giggle.');
      scene.text('You smile at her. "I like Fedor. He\'s sweet and makes me happy. You can have Lazar or Ivan."');
      scene.text('"I think Albina has Lazar locked down tight," she replies.');
      scene.text('You both giggle before you tell her about how great Fedor is and what an amazing boyfriend he is.');
      scene.actions([
        { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
        { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).kotovLoveQW ?? 0) === 1) {
    scene.actions([
      { label: 'Vitek', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['vitek_bj_watched'] === 1) {
      scene.text('"Vitek," you tell her.');
      scene.text('She seems surprised. "Really? But neither of you said anything... When he and I... You know..."');
      scene.text('You shrug. "He messes around sometimes, but I know he loves me, so I don\'t mind."');
      scene.text('After that, the conversation quickly stops, so you decide to change the subject.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['soniafall'] >= 6) {
        scene.text('"Vitek," you tell her.');
        scene.text('She seems surprised. "Really? I... I\'m sorry, but he said he wasn\'t seeing anyone and we fooled around."');
        scene.text('You can tell she\'s afraid of how you\'ll react, but you know it isn\'t her fault.');
        scene.text('You shake your head, not sure what to say. "Let\'s just change the subject."');
      } else {
        scene.text('"Vitek," you tell her.');
        scene.text('She seems surprised. "Really? I\'ve been hanging out with him, Dan and Vasily lately and he never once mentioned it."');
        scene.text('You shrug. "I trust him."');
        scene.text('After that, the conversation quickly stops and you decide to change the subject.');
      }
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.actions([
      { label: 'Artem', handler: (st: GameState) => {
    (s as any).soniaQW['artem_bf'] = 1;
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('"Artem," you tell her.');
      scene.text('She grins. "Well, you guys make a cute couple," she says with a giggle.');
      scene.text('You sigh in a way only those in love can. "He\'s sweet and really nice to me."');
      scene.text('You both giggle before you tell her about how great Artem is and what an amazing boyfriend he is.');
    } else {
      scene.text('"Artem," you tell her.');
      scene.text('She looks a little surprised. "Artem? The nerd?" She seems to consider it for a moment. "Well, I guess he is kind of cute... Just a little surprised is all," she says with a giggle.');
      scene.text('You shake your head slightly at her comment. "He\'s sweet and really nice to me."');
      scene.text('You both giggle before you tell her about how great Artem is and what an amazing boyfriend he is.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).rex_love ?? 0) === 1) {
    scene.actions([
      { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Rex," you tell her.');
    scene.text('"Who?" she asks as she cocks her head slightly. "Wait, isn\'t he the guy that throws parties all the time? My brother sometimes goes to them."');
    scene.text('You nod. "Yeah, that\'s him."');
    scene.text('She now has an inquisitive look on her face. "How did you meet him? He\'s a few years older than you," she asks.');
    scene.text('You smile at her. "I was invited to his party," you tell her. "Okay, he\'s friends with my sister. She invited me to his party and that\'s where we met."');
    scene.text('You talk about the night you met him and your first date.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
    ]);
  } },
    ]);
  }
  (s as any).i = 0;
  // TODO-QSP: :lover_looop
  if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
      // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''soniachat'', ''tell_about_generic_boyfri...
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'lover_looop'
  }
  scene.build();
}

function enterTellAboutGenericBoyfriend(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>," you tell her.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}," you tell her.`);
  scene.text('"Who?" she asks as she cocks her head slightly.');
  scene.text('You shake your head slightly. "You\'ve never met him. I only just met him."');
  scene.text('She smiles. "Just some guy you met, huh?"');
  scene.text('You laugh before you start telling her about him.');
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Keep talking', goto: ['soniachat', 'sonia_chat'] },
  ]);
  scene.build();
}

function enterSoniaChatSpecial1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['fallenangel'] < 2) {
    (s as any).soniaQW['fallenangel'] = 2;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
  scene.text('You walk over and sit on the bed next to Sonia before leaning in and comforting her as best you can.');
  scene.text('She cries for several more minutes before she stops and looks at you with puffy eyes and a tear stained face. "Why are you here?"');
  scene.actions([
    { label: 'I wanted to see how you were', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('You give her a hug. "I wanted to see how you were and remind you that you still have a friend."');
    scene.text('She hugs you back fiercely and starts crying again. "Thank you! You don\'t know how much that means to me!"');
    scene.text('You talk about what happened to her and what\'s been going on at school. From time to time, she starts crying again.');
    scene.text('"I just don\'t know what I\'m going to do..." she says dejectedly.');
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Tell her you\'ll protect her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"I\'ll try to protect you from the others, but you\'ve got to start standing up for yourself too," you tell her firmly.');
    scene.text('She smiles sadly. "I know you\'d try, but we both know you can\'t be everywhere and there\'s way more of them."');
    scene.text('You promise to figure something out and talk for a while before she stops you.');
    scene.text('"I... I need to be alone again. I just can\'t think or talk about this right now."');
    scene.text('You assure her you understand, making her smile as you say your goodbyes and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      scene.actions([
        { label: 'Let\'s improve our reputation together', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"You know you\'re not the only one in this mess; just look at me!" you tell her.');
    scene.text('This brings a smile to her face and you grin back at her as you continue. "Hey, I\'m happy to see you can still smile, but that\'s my reputation you\'re grinning at!"');
    // TODO-QSP: dynamic text: "Oh! I'm sorry, <<$pcs_nickname>>! I didn't mean to..." she trails off.
    scene.text(`"Oh! I'm sorry, ${((s as any).pcs_nickname ?? 0)}! I didn't mean to..." she trails off.`);
    scene.text('"Don\'t worry about it. I was just joking with you. Look, how about we try and do this together?"');
    scene.actions([
      { label: 'Tell her you\'ll redeem yourselves together', handler: (st: GameState) => {
    (s as any).soniaQW['redemp'] = 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('She looks a little confused, so you explain. "My reputation is in the gutter too and I\'m fed up with getting picked on, so how about we help each other and work together so we can rejoin a clique and improve our lives at school?"');
    scene.text('She looks thoughtful for a moment. "Yeah, I guess we could do that, but I don\'t think it will be that easy."');
    scene.text('You nod in agreement. "I didn\'t say it would, but it can be done if we help each other and stay determined."');
    scene.text('She opens her mouth a few times to respond but closes it each time, clearly not sure how to respond. "Yeah, maybe... At least we can try." She smiles at you and gives you a brief hug. "This won\'t be easy, but this is our life, so yeah! Let\'s do it! For now though, I\'d like to be alone if you don\'t mind."');
    scene.text('The two of you hug again and you say your goodbyes. As you leave, you both ponder how best to approach the mess you\'re both in.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her you\'ll help', handler: (st: GameState) => {
    (s as any).soniaQW['redemp'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'adore');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"I\'ll help you get through this," you tell her firmly.');
    scene.text('She smiles sadly. "How?"');
    scene.text('You shrug. "I don\'t know, but one bad night doesn\'t define you. We\'ll just convince the others and find a way for them to accept you again."');
    scene.text('You hug it out and talk about how you might do it without a solid plan. You then talk for a while before she stops you.');
    scene.text('"I... I need to be alone again. I just can\'t think or talk about this right now."');
    scene.text('You assure her you do understand, making her smile as you say your goodbyes and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Tell her to accept it', handler: (st: GameState) => {
    (s as any).soniaQW['fallenangel'] = ((s as any).soniaQW['fallenangel'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"Just accept it," you bluntly tell her.');
    scene.text('She looks shocked. "<i>What</i>?! Accept being seen as the <i>town slut</i>?!"');
    scene.text('You shrug. "You wanted to walk on the wild side, right?"');
    scene.text('She frowns as tears start streaming down her face before she sadly nods.');
    scene.text('"And you were enjoying yourself until, well, your rep was ruined?" you continue.');
    scene.text('She frowns before she slowly nods. "Yeah. I guess I was..."');
    scene.text('She seems reluctant to admit it, so you give her a slight smile. "Then own it. Be the party girl you wanted to be, but on <i>your</i> terms."');
    scene.text('She looks thoughtful for a moment. "I guess... I mean I see your point, but I don\'t think it will be that easy."');
    scene.text('You nod in agreement. "I didn\'t say it would, but it can be done. Look at Anushka. She has a hell of a rep and if even half the stuff I\'ve heard is true, she\'s done worse than you. Yet she manages to keep things on her terms, so why can\'t you?"');
    scene.text('She opens her mouth a few times to respond, but closes it each time, clearly not sure how to respond. "Yeah... You\'re right. This won\'t be easy, but this is <i>my</i> life, damnit!" She laughs a little, but only briefly. "You gave me a lot to think about, but I\'d like to be alone for now if you don\'t mind."');
    scene.text('The two of you hug again and you say your goodbyes before leaving her to ponder what to do next.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniaChatSpecial2(s: GameState, scene: SceneBuilder): void {
  (s as any).soniaQW['fallenangel'] = ((s as any).soniaQW['fallenangel'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_depressed.jpg');
  scene.text('You sit on the bed next to Sonia, who looks at you and gives you a weak smile. You can tell she\'s still sad and depressed, but at least she\'s not crying. At least not at this moment. If you want to chat, you\'ll have to lead the conversation.');
  if (((s as any).soniaQW ?? 0)?.['chat_smalltalk_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).soniaQW['chat_smalltalk_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_depressed.jpg');
    scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, or school in general. When you talk about fashion, she livens up for a bit, but when school and friends comes up, she states that you\'re the only friend she has left, which kills the mood, so you decide to change the topic.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['chat_howwere_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'I wanted to see how you were', handler: (st: GameState) => {
    (s as any).soniaQW['chat_howwere_day'] = ((s as any).daystart ?? 0);
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_depressed.jpg');
    scene.text('"I just wanted to check how you were doing," you say.');
    scene.text('She sighs and shrugs. "Trying to make the best of my new reality. Since everyone picks on me, I do my best to avoid them," she says with a frown.');
    scene.text('You give her an encouraging smile. "You\'ve just got to make it to the end of the school year, then you can go to the university and this will all just be a bad memory."');
    scene.text('The two of you are soon talking about how much better things will be at the university.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special2'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['chat_gopniks_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask about the gopniks', handler: (st: GameState) => {
    (s as any).soniaQW['chat_gopniks_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_depressed.jpg');
    scene.text('"Are the gopniks still hassling you?" you ask.');
    scene.text('She looks like she\'s about to cry when you bring them up, but she gets herself under control. "Not as bad as it was... I\'ve gotten a bit better at avoiding them and I think they\'re starting to get bored of me..."');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, they can be total assholes."');
    scene.text('She just nods and you decide it\'s best to change the subject.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special2'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', (-10));
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    // TODO-QSP: dynamic text: You lean in and try and kiss her, but she recoils at once. "What the fuck, <<$pc...
    scene.text(`You lean in and try and kiss her, but she recoils at once. "What the fuck, ${((s as any).pcs_nickname ?? 0)}?!"`);
    scene.text('You\'re a little surprised by her reaction. "Sorry! I didn\'t mean anything by it."');
    scene.text('She gives you a disgusted look. "I can\'t believe you of all people would try that after... After what\'s happened to me... Get out."');
    scene.text('You try to comfort her, but she stands up and points at the door, already starting to cry. "Please leave!"');
    scene.text('Not wanting to upset her further, you get up and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Anything you want to talk about?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"Is there anything you want to talk about?" you ask her softly.');
    scene.text('She shakes her head and you can see tears start to run down her face. "No," she croaks out, trying to stop herself from sobbing. "I\'m sorry, but I don\'t want to talk anymore."');
    // TODO-QSP: dynamic text: As you get up to leave, she suddenly grabs your hand. "I appreciate you stopping...
    scene.text(`As you get up to leave, she suddenly grabs your hand. "I appreciate you stopping by, ${((s as any).pcs_nickname ?? 0)}. It means more to me than you'll ever know, but I just need to be alone for a while."`);
    scene.text('You nod and offer her a comforting smile. "I understand. I\'ll come and see you again soon. I promise."');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniaChatSpecial3(s: GameState, scene: SceneBuilder): void {
  (s as any).soniaQW['fallenangel'] = ((s as any).soniaQW['fallenangel'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_unhappy.jpg');
  scene.text('You sit on the bed next to Sonia, who looks at you and gives you a weak smile. You can tell she\'s still sad and depressed, but at least she\'s not crying. At least not at this moment. If you want to chat, you\'ll have to lead the conversation.');
  if (((s as any).soniaQW ?? 0)?.['chat_smalltalk_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).soniaQW['chat_smalltalk_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_unhappy.jpg');
    scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, or school in general. When you talk about fashion, she livens up for a bit, but when school and friends comes up, she states that you\'re the only friend she has left, which kills the mood, so you decide to change the topic.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special3'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['chat_howwere_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'I wanted to see how you were', handler: (st: GameState) => {
    (s as any).soniaQW['chat_howwere_day'] = ((s as any).daystart ?? 0);
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_unhappy.jpg');
    scene.text('"I just wanted to check how you were doing," you say.');
    scene.text('She sighs and shrugs. "Enduring. I\'ve started to get used to all the teasing and bullying and I\'m getting better at avoiding the gopniks after school, so things are better. Not great, but better," she says with a frown.');
    scene.text('You give her an encouraging smile. "You\'ve just got to make it to the end of the school year, then you can go to the university and this will all just be a bad memory."');
    scene.text('The two of you are soon talking about how much better things will be at the university.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special3'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['chat_gopniks_day'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask about the gopniks', handler: (st: GameState) => {
    (s as any).soniaQW['chat_gopniks_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_unhappy.jpg');
    scene.text('"Are the gopniks still hassling you?" you ask.');
    scene.text('She looks like she\'s about to cry when you bring them up, but she gets herself under control. "Not as bad as it was... I\'ve gotten a bit better at avoiding them and they\'re starting to get bored of me... I guess sometimes it\'s not so bad, when I can get them to be nicer about the whole thing."');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, they can be total assholes."');
    scene.text('She just nods and you decide it\'s best to change the subject.');
    scene.actions([
      { label: 'Stop talking and leave', goto: ['pav_residential', ''] },
      { label: 'Talk about something else', goto: ['soniachat', 'sonia_chat_special3'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'hate');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    // TODO-QSP: dynamic text: You lean in and try and kiss her, at first she lets you kiss her, but then she r...
    scene.text(`You lean in and try and kiss her, at first she lets you kiss her, but then she recoils. "What the fuck, ${((s as any).pcs_nickname ?? 0)}?!"`);
    scene.text('You\'re a little surprised by her reaction. "Sorry! I didn\'t mean anything by it."');
    scene.text('She starts openly crying. "I can\'t, I\'m not ready and you should of all people know better. Please just leave me alone."');
    scene.text('You try to comfort her, but she stands up and points at the door, now fully crying. "Please leave!"');
    scene.text('Not wanting to upset her further, you get up and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Anything you want to talk about?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/soniacrying.jpg');
    scene.text('"Is there anything you want to talk about?" you ask her softly.');
    scene.text('She shakes her head and you can see tears starting to run down her face. "Not yet, I\'m not ready," she croaks out, trying to keep from sobbing. "I\'m sorry, but I don\'t want to talk anymore."');
    // TODO-QSP: dynamic text: As you get up to leave she grabs your hand. "I appreciate you stopping by, <<$pc...
    scene.text(`As you get up to leave she grabs your hand. "I appreciate you stopping by, ${((s as any).pcs_nickname ?? 0)}. It means more to me than you'll ever know, but I just need to be alone for a while."`);
    scene.text('You nod and offer her a comforting smile. "I understand. I\'ll come see you again soon. I promise."');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).SoniaLoc = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  if (((s as any).soniaQW ?? 0)?.['happyslut'] >= 1) {
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_livingroom2.jpg');
    scene.text('As you walk in, Sonia is laying on the couch reading a book. She turns her head to glance back at you, causing her knee to slide off the edge of the couch, which ends up giving you a nice view of her butt cheeks hanging out of her very short shorts.');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, what are you up to?" she asks.
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, what are you up to?" she asks.`);
    scene.text('You can\'t help but stare at her slightly exposed butt cheeks. "Just thought I\'d stop by and see if you wanted to hang out," you tell her.');
    scene.text('"Sure. You want to go to my room for some privacy?" she asks with a slight giggle.');
    scene.actions([
      { label: 'Go to her room', handler: (st: GameState) => {
    (s as any).SoniaLoc = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_livingroom2.jpg');
    scene.text('With the living room being so open to the rest of the house, there are some things you feel you can\'t talk to her about here.');
    scene.text('"How about we head to your room?" you ask.');
    scene.text('She nods. "Okay, sure."');
    scene.text('She gets up off the couch and pushes herself back into a half-standing, half-kneeling doggy style position. You think she holds this position far longer than she needs before she finally stands up.');
    scene.text('"Okay, follow me," she says as she starts towards her room.');
    scene.actions([
      { label: 'Go to her room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
      { label: 'Take a seat on the couch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('You walk over to the couch as she places the book on an end table, rolls over and sits up to give you room.');
    scene.text('"Here works fine," you reply as you take a seat.');
    scene.text('She glances at you. "Sure... What do you want to talk about?"');
    scene.actions([
      { label: 'Start with a little small talk', goto: ['soniachat', 'livingroom_chat2'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_livingroom1.jpg');
    // TODO-QSP: dynamic text: As you walk in, Sonia glances up from the book she's reading and grins at you. "...
    scene.text(`As you walk in, Sonia glances up from the book she's reading and grins at you. "Hey ${((s as any).pcs_nickname ?? 0)} what are you up to?"`);
    scene.text('You shrug slightly. "Just thought I\'d stop by and see if you wanted to hang out."');
    scene.text('"Sure! You want to go to my room for some juicy gossip?" she asks with a slight giggle.');
    scene.actions([
      { label: 'Go to her room', handler: (st: GameState) => {
    (s as any).SoniaLoc = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_livingroom1.jpg');
    scene.text('With the living room being so open to the rest of the house, there are some things you feel you can\'t talk to her about here.');
    scene.text('"How about we head to your room?" you ask.');
    scene.text('She nods. "Okay, sure."');
    scene.text('She gets up and the two of you walk down to her room.');
    scene.actions([
      { label: 'Go to her room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
      { label: 'Take a seat on the couch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('You walk over to the couch as she places the book on an end table, rolls over and sits up to give you room.');
    scene.text('"Here works fine," you reply as you take a seat.');
    scene.text('She glances at you. "Sure... What do you want to talk about?"');
    scene.actions([
      { label: 'Start with a little small talk', goto: ['soniachat', 'livingroom_chat1'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLivingroomChat1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).SoniaLoc = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
  scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, or school in general.');
  if (((s as any).soniaQW ?? 0)?.['shulyov'] > 0) {
    scene.actions([
      { label: 'Ask about her brother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"So. I met your brother," you state matter of factly.');
    scene.text('"Oh god, don\'t fall for anything he says. He\'s a total horndog to the point I can\'t count the number of \'girlfriends\' he\'s had. He just uses them for sex and tosses them aside, yet they keep coming back to him. Do yourself a favor and stay away from him," she says in a serious tone.');
    scene.text('You just nod in response, not sure what you could possibly say back to her.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat1'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Ask to go to her room', handler: (st: GameState) => {
    (s as any).SoniaLoc = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('With the living room being so open to the rest of the house, there are some things you feel you can\'t talk to her about here.');
    scene.text('"How about we head to your room?" you ask.');
    scene.text('She nods and the two of you walk down to her room.');
    scene.actions([
      { label: 'Go to her room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    { label: 'Ask what she\'s been up to', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"So what have you been up to lately?" you ask.');
    scene.text('She sighs dramatically. "Mostly trying to find some fun and avoid my parents. I think I\'ll hang myself if I hear one more speech about how a proper young lady has to act!"');
    // TODO-QSP: dynamic text: She ends her rant with a giggle and you smile at her. "Well, don't do that. You ...
    scene.text(`She ends her rant with a giggle and you smile at her. "Well, don't do that. You have too pretty of a neck to bruise." You both laugh at that. "But seriously, I understand. My ${((s as any).npc_nickname ?? 0)?.['A29']} is <i>insanely</i> overbearing as well."`);
    scene.text('The two of you are soon talking about how bad your mothers are. It seems you have a lot in common with your overbearing mothers trying to control every aspect of your lives.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat1'] },
    ]);
  } },
    { label: 'Ask her about her fashion sense', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('She often wears older clothes, but she somehow always manages to make them work and look stylish. "How do you manage to always look so nice?"');
    scene.text('She smiles. "You mean for someone that has cheaper clothes?"');
    scene.text('You\'re about to protest that you didn\'t mean it that way when she stops you. "I learned to sew. At first, it was just to fix tears and later alter clothes so they fit better and look nicer. You\'d be surprised what you can do with a little effort."');
    scene.text('She goes on to talk about how she goes about turning fairly plain looking clothes into stylish outfits.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat1'] },
    ]);
  } },
    { label: 'Ask about hanging out with the gopniks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"What\'s going on with you and the gopniks?" you ask.');
    scene.text('"I\'m just tired of being the good girl. I want to cut loose, get a little wild and have some fun. What\'s wrong with that?" she replies.');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, but you can\'t really trust those guys," you meekly reply.');
    scene.text('She rolls her eyes. "I can take care of myself! Just let me have my fun!"');
    scene.text('You\'re about to say something, but you can tell it will only cause an argument and decide to drop it.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLivingroomChat2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'soniahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).SoniaLoc = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
  scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, or school in general.');
  if (((s as any).soniaQW ?? 0)?.['shulyov'] > 0) {
    scene.actions([
      { label: 'Ask about her brother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"So. I met your brother," you state matter of factly.');
    scene.text('"Oh god, don\'t fall for anything he says. He\'s a total horndog to the point I can\'t count the number of \'girlfriends\' he\'s had. He just uses them for sex and tosses them aside, yet they keep coming back to him," she says.');
    scene.text('She then pauses for a moment before continuing. "I used to not understand why those girls would just keep coming back to him, but now? Now I kind of get it. Sometimes it\'s fun to just let a guy use you and fuck you senseless, you know?"');
    scene.text('You just nod in response, not sure what you could possibly say back to her.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat2'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Ask to go to her room', handler: (st: GameState) => {
    (s as any).SoniaLoc = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('With the living room being so open to the rest of the house, there are some things you feel you can\'t talk to her about here.');
    scene.text('"How about we head to your room?" you ask.');
    scene.text('She nods and the two of you walk down to her room.');
    scene.actions([
      { label: 'Go to her room', goto: ['soniahome', 'sonia_room'] },
    ]);
  } },
    { label: 'Ask what she\'s been up to', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"So what have you been up to lately?" you ask.');
    scene.text('She grins at you. "Mostly sucking dick or taking cock. Once I learned to embrace my new situation, I\'ve started to really enjoy myself. Being a slut is a lot of fun actually."');
    scene.text('Her look then turns serious. "I\'m still struggling with making it on my terms, but either way I like a good fuck."');
    if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).stat ?? 0)?.['men_fucked'] >= 5) {
      scene.text('You laugh a little. "Tell me about it. I love a good dicking myself."');
    } else {
      scene.text('You smile at her. "Well, as long as you\'re having fun I guess that\'s all that matters." You both laugh at that. "But seriously, I understand. Just make sure you are careful."');
    }
    scene.text('The two of you are soon talking about sex, boys, and even girls you both find attractive.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat2'] },
    ]);
  } },
    { label: 'Ask her about her fashion sense', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('She often wears older clothes, but she somehow always manages to make them work and look stylish. "How do you manage to always look so nice?"');
    scene.text('She smiles. "You mean for someone that has cheaper clothes?"');
    scene.text('You\'re about to protest that you didn\'t mean it that way when she stops you. "I learned to sew. At first, it was just to fix tears and later alter clothes so they fit better and look nicer. You\'d be surprised what you can do with a little effort."');
    scene.text('She goes on to talk about how she goes about turning fairly plain looking clothes into stylish outfits.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat2'] },
    ]);
  } },
    { label: 'Ask if she still hangs out with the gopniks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Living Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/Livingroom/sonia_chat.jpg');
    scene.text('"Do you still avoid the gopniks or have you started to hang out with them again?" you ask.');
    scene.text('"I used to avoid them, and I still do sometimes, but they\'re fun to party with," she replies.');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, I mean if that\'s what you want," you meekly reply.');
    scene.text('She sighs slightly. "I know, I know. Trust me I remember what happened, but ... I don\'t know. Sometimes it\'s just fun being a fuck toy."');
    scene.text('You\'re about to say something, but you are not sure how to respond to that so you decide to change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['soniachat', 'livingroom_chat2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniaChatHappyslut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['happyslut_visitday'] + 7) {
    (s as any).soniaQW['happyslut'] = ((s as any).soniaQW['happyslut'] ?? 0) + (1);
    (s as any).soniaQW['happyslut_visitday'] = ((s as any).daystart ?? 0);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sonia\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
  scene.text('You sit on the bed next to Sonia, who is dressed more slutty than she used to dress. She seems a lot more like her old self, like she might have finally come to terms with how her life is or maybe even embraced it.');
  if (((s as any).soniaQW ?? 0)?.['cheap_clothes'] === 1) {
    scene.actions([
      { label: 'Ask her why she doesn\'t buy nicer clothes', handler: (st: GameState) => {
    (s as any).soniaQW['cheap_clothes'] = ((s as any).soniaQW['cheap_clothes'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_bed.jpg');
    scene.text('You decide to ask her about why she has such cheap clothes but lives in a pretty nice house. "I don\'t mean to be rude, but you live in a pretty nice house, so I have to wonder. Why don\'t you just buy nicer clothes?"');
    scene.text('She lets out a slight laugh. "I\'d love to, but my mother thinks spending money on flashy clothes is a waste of money and my father thinks everyone needs to learn the value of a ruble."');
    scene.text('The last part she does her best to sound like a man when saying, which makes you both giggle. "Anyway, they have me on a very strict small allowance, so I have to be frugal," she adds with a shrug.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['shulyov'] > 0) {
    scene.actions([
      { label: 'Ask about her brother', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('"So. I met your brother," you state matter of factly.');
    scene.text('"Oh god, don\'t fall for anything he says. He\'s a total horndog to the point I can\'t count the number of \'girlfriends\' he\'s had. He just uses them for sex and tosses them aside, yet they keep coming back to him," she says.');
    scene.text('She then pauses for a moment before continuing. "I used to not understand why those girls would just keep coming back to him, but now? Now I kind of get it. Sometimes it\'s fun to just let a guy use you and fuck you senseless, you know?"');
    scene.text('You just nod in response, not sure what you could possibly say back to her.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['artem_bf'] === 1  &&  (((s as any).artemQW ?? 0)?.['nush3some'] >= 2  ||  ((s as any).artemQW ?? 0)?.['katja_threesome'] >= 2)) {
    scene.actions([
      { label: 'Bring up Artem threesomes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You think for a moment if you want to talk about how Artem has changed. "You remember when I told you I was dating Artem?"');
    scene.text('She nods and takes hold of your hand, seemingly concerned that you\'re about to tell her something bad. "Is something wrong? Are you guys not getting along?"');
    scene.text('You shake you head and can\'t help but smile at her concern. "No, nothing like that. Kind of the opposite, in fact."');
    scene.text('She looks relieved to hear that and relaxes a little. "What do you mean?"');
    scene.text('You can\'t help but grin. "I\'ve been encouraging him to stand up for himself, be more confident and even be a little dominant, and boy did it work! We\'ve ended up having some threesomes."');
    scene.text('"Really?!" she gasps. "With who?!"');
    if (((s as any).artemQW ?? 0)?.['katja_threesome'] >= 2) {
      scene.actions([
        { label: 'Tell her about Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You\'re not sure if you should be saying anything, but you think Katja wouldn\'t mind so long as Sonia doesn\'t tell anyone else.');
    scene.text('"Okay, but you have to swear not to tell anyone," you smirk and Sonia grins and nods.');
    scene.text('"It was Katja," you tell her with a smile.');
    scene.text('"Katja? Seriously?" she replies, seemingly having a hard time wrapping her head around it. "I would have never guessed..."');
    scene.text('She then looks thoughtful. "So... Did she like it? Also I have to say I\'m surprised Katja would do something like that, especially with one of the nerds."');
    scene.text('"I can see why you asked me not to say anything, though. That would really hurt her rep with those assholes who think they\'re so cool," she rants, her anger and bitterness at how the cool kids all turned on her coming through.');
    scene.text('You decide to ignore the anger and pretend like you didn\'t notice. "Yeah, she seemed to like it. Katja\'s more fun than she lets on, she\'s just very worried about appearances is all."');
    scene.text('Realizing what you just said, you quickly decide to change the subject.');
    if (((s as any).artemQW ?? 0)?.['nush3some'] >= 2) {
      scene.text('You could always tell her about Anushka as well...');
      scene.actions([
        { label: 'Tell her about Anushka', handler: (st: GameState) => {
    (s as any).artemQW['sonia3some_ask'] = ((s as any).artemQW['sonia3some_ask'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You guess Anushka wouldn\'t have any issue, either. "Katja isn\'t the only one..." you tease.');
    scene.text('Sonia smiles. "Who knew Artem was such a stud! Who else?"');
    scene.text('"Remember, you can\'t say anything, especially not this one because... it\'s Nush."');
    scene.text('She looks surprised. "Really? I mean I know she has a bit of a rep as a slut, but her giving it to a nerd <i>is</i> a bit shocking."');
    scene.text('She then looks thoughtful. "I can see why you don\'t think she would want the other gopniks to know she\'s letting a nerd fuck her. Wow, watching Nush get fucked by a nerd <i>would</i> be a sight to see!" she giggles.');
    scene.text('You smile. "I think she actually gets off on the idea of a nerd fucking and dominating her."');
    scene.text('She giggles, then nods. "Yeah I can see that, something so different. I can totally see why she would like letting a nerd fuck her."');
    scene.text('She shakes her head a little, as if clearing it and coming to terms with what she\'s hearing. "So you\'re telling me, little nerd Artem has fucked Nush, one of the tough gopnik girls <i>and<i> Katja one of the prim and proper cool kids?"');
    scene.text('You nod with a proud smile on your face.');
    scene.text('"Wow!" she laughs. "I have to say I\'m impressed, I never would have dreamed he could pull <i>that</i> off. So is this like a regular thing or just, you know, a one off thing out of curiosity on the girls part?"');
    scene.text('You grin. "A regular thing. They both seem to enjoy it, for their own reasons."');
    scene.text('"WOW! Maybe I should give him another look..." she says with a sheepish smile on her face. "I mean if you\'re okay with it, that is. I mean it sounds like he might be fun to hook up with."');
    scene.text('You know she\'s asking without asking. "I\'ll ask him and see what he thinks. I\'ll let you know."');
    scene.text('She smiles at that and the two of you then talk about some threesomes you\'ve both had.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['nush3some'] >= 2) {
      scene.actions([
        { label: 'Tell her about Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You\'re not sure if you should be saying anything, but you think Anushka wouldn\'t mind so long as Sonia doesn\'t tell anyone else.');
    scene.text('"Okay, but you have to swear to not repeat it," you tell her. "I don\'t think she would care if I told you, but... it\'s Nush."');
    scene.text('She looks surprised. "Really? I mean I know she has a bit of a rep as a slut, but her giving it to a nerd <i>is</i> a bit shocking."');
    scene.text('She then looks thoughtful. "I can see why you don\'t think she would want the other gopniks to know she\'s letting a nerd fuck her. Wow, watching Nush get fucked by a nerd <i>would</i> be a sight to see!" she giggles.');
    scene.text('You smile. "I think she actually gets off on the idea of a nerd fucking and dominating her."');
    scene.text('She giggles, then nods. "Yeah I can see that, something so different. I can totally see why she would like letting a nerd fuck her."');
    if (((s as any).artemQW ?? 0)?.['katja_threesome'] >= 2) {
      scene.text('You could always tell her about Katja as well...');
      scene.actions([
        { label: 'Tell her about Katja', handler: (st: GameState) => {
    (s as any).artemQW['sonia3some_ask'] = ((s as any).artemQW['sonia3some_ask'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You pause a moment, not sure if you should tell her about Katja as well, but decide she wouldn\'t have an issue with it so long as Sonia doesn\'t tell anyone else.');
    scene.text('"Nush isn\'t the only one..." you tease.');
    scene.text('Sonia smiles. "Who knew Artem was such a stud! Who else?"');
    scene.text('"Remember you can\'t say anything, especially since... it\'s Katja."');
    scene.text('"Katja? Seriously?" she replies, seemingly having a hard time wrapping her head around it. "I would have never guessed..."');
    scene.text('She then looks thoughtful. "So... Did she like it? Also I have to say I\'m surprised Katja would do something like that, especially with one of the nerds."');
    scene.text('"I can see why you asked me not to say anything, though. That would really hurt her rep with those assholes who think they\'re so cool," she rants, her anger and bitterness at how the cool kids all turned on her coming through.');
    scene.text('You decide to ignore the anger and pretend like you didn\'t notice. "Yeah she seemed to like it, Katja is more fun than she comes off."');
    scene.text('She shakes her head a little, as if clearing it and coming to terms with what she\'s hearing. "So you\'re telling me, little nerd Artem has fucked Nush, one of the tough gopnik girls <i>and<i> Katja one of the prim and proper cool kids?"');
    scene.text('You nod with a proud smile on your face.');
    scene.text('"Wow!" she laughs. "I have to say I\'m impressed, I never would have dreamed he could pull <i>that</i> off. So is this like a regular thing or just, you know, a one off thing out of curiosity on the girls part?"');
    scene.text('You grin. "A regular thing. They both seem to enjoy it, for their own reasons."');
    scene.text('"WOW! Maybe I should give him another look..." she says with a sheepish smile on her face. "I mean if you\'re okay with it, that is. I mean it sounds like he might be fun to hook up with."');
    scene.text('You know she\'s asking without asking. "I\'ll ask him and see what he thinks. I\'ll let you know."');
    scene.text('She smiles at that and the two of you then talk about some threesomes you\'ve both had.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t tell', handler: (st: GameState) => {
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You decide against telling her anything. "Sorry I can\'t say who it is, at least not without asking them first."');
    scene.text('She frowns in disappointment at first, then nods her head and smiles. "I get it. If they ever say you can, then I\'d love to know."');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).soniaQW ?? 0)?.['kiss_day'] < ((s as any).daystart ?? 0)) {
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A25');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).soniaQW['kiss_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      scene.text('As you sit side by side, you can\'t help but look at her. Maybe for too long, or maybe she just senses it, because she turns her head to look at you. Her face is not that far from yours and you can\'t help yourself. You lean over to give her a kiss.');
      scene.text('She briefly returns your kiss before stopping to pull away. Sensing that she isn\'t interested, you decide to keep talking instead.');
      qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Stop kissing and talk more', goto: ['soniachat', 'sonia_chat_happyslut'] },
      ]);
    } else {
      scene.text('As you sit side by side, you can\'t help but look at her. Maybe for too long, or maybe she just senses it, because she turns her head to look at you. Her face is not that far from yours and you can\'t help yourself. You lean over to give her a kiss, a kiss she fully returns.');
      qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Stop', goto: ['soniachat', 'sonia_chat_happyslut'] },
        { label: 'Make out', handler: (st: GameState) => {
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/sonia/home/bed_kiss.jpg');
    // TODO-QSP: 'As you wrap your hands around the side of her face, you feel her hands hold you by your hips as the...
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1  &&  ((s as any).strapon ?? 0) === 1  &&  ((s as any).strapnumber ?? 0) > 0) {
      scene.actions([
        { label: 'Fuck her using Penis Envy', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/puton_strapon1.mp4');
    scene.text('You get up and grab your stuff. "I\'ll be right back, I\'ve got to go do something in the bathroom."');
    scene.text('She gives you a curious gaze, but doesn\'t pry as you smile at her and hurry to the bathroom. Once inside, you quickly put on your strapon harness with attached dildo.');
    if ((!((s as any).penisEnvyVariable ?? 0))) {
      scene.actions([
        { label: 'Cast Penis Envy', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    scene.img('images/pc/magic/cast_spell.jpg');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.text('You cast the spell and feel the magic coursing through your body. It centers on your pelvic region as you feel the dildo meld with your body and it slowly twitches. Once the magical sensation has passed, you look down and see a dick the same size as the dildo was, hanging down in front of you.');
      scene.text('You can\'t help but smile, hoping Sonia will enjoy this as much as you will. You put your new dick away before you go back to her room.');
      scene.actions([
        { label: 'Go back to her room', handler: (st: GameState) => {
    if (((s as any).PCloPants ?? 0) > 0  &&  ((s as any).PCloPantsShortness ?? 0) <= 2) {
      scene.img('images/pc/magic/penis_envy/reveal_pants1.jpg');
      scene.text('You open the door to her room and see her sitting on her bed in a sexy little blue lingerie; she must have changed while you were casting your spell.');
      scene.text('She\'s smiling at you in anticipation and you feel your new dick starting to stir and get hard at the sight of her. Not wanting to disappoint her, you walk up to her bed and start to unbutton your pants, letting your new dick fall free.');
      scene.text('Her eyes widen as she stares at your dick hanging down. "Wow, that looks so real!"');
    } else {
      if (((s as any).PCloPants ?? 0) > 0) {
        scene.img('images/pc/magic/penis_envy/reveal_shorts1.jpg');
        scene.text('You open the door to her room and see her sitting on her bed in a sexy little blue lingerie; she must have changed while you were casting your spell.');
        scene.text('She\'s smiling at you in anticipation and you feel your new dick starting to stir and get hard at the sight of her. Not wanting to disappoint her, you walk up her bed and start to unbutton your shorts, letting your new dick fall free.');
        scene.text('Her eyes widen as she stares at your dick hanging down. "Wow, that looks so real!"');
      } else {
        if (((s as any).PCloDress ?? 0) > 0  ||  ((s as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/pc/magic/penis_envy/reveal_skirt1.jpg');
          scene.text('You open the door to her room and see her sitting on her bed in a sexy little blue lingerie; she must have changed while you were casting your spell.');
          // TODO-QSP: dynamic text: She's smiling at you in anticipation and you feel your new dick starting to stir...
          scene.text(`She's smiling at you in anticipation and you feel your new dick starting to stir and get hard at the sight of her. Not wanting to disappoint her, you walk up next to her bed and pull up your ${((((s as any).PCloDress ?? 0) > 0) ? ('dress') : ('skirt'))}, letting your new dick dangle in full view.`);
          scene.text('Her eyes widen as she stares at your dick hanging down. "Wow, that looks so real!"');
        }
      }
    }
    scene.text('You smile. "It\'s a new realistic dildo that\'s supposed to look and feel real. Not to mention it shoots fake cum."');
    scene.text('She giggles as you give your dick a few strokes, which causes it to get even harder before you lay down on her bed on your back. "Get over here and suck my dick."');
    scene.actions([
      { label: 'Get your dick sucked', goto: ['soniaev1', 'strapon_magic_bedroom'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You cast the spell and feel the magic coursing through your body. It centers on your pelvic region as you feel the dildo meld with your body, but you lose your focus and the magic slowly flutters and dissipates, leaving you feeling a little cold.');
      scene.text('You look down and see the harness and dildo still in place, but no real dick. You sigh at your failure. Hopefully Sonia will still enjoy this.');
      scene.text('You walk back to her room wearing the strapon harness. As you walk in, you see Sonia\'s eyes go right to the dildo hanging from your strapon harness.');
      scene.text('You give the dildo a few tugs to ensure it will stay in place before you climb up on her bed on your knees. "Suck my dick."');
      scene.actions([
        { label: 'Get your dick sucked', goto: ['soniaev1', 'strapon_fucking'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop kissing', goto: ['soniachat', 'sonia_chat_happyslut'] },
      { label: 'Make a move on her', goto: ['soniaev1', 'eatsonia'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You talk with Sonia about various things, mostly about fashion, your mutual friends, boys, sex, or school in general.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    { label: 'Ask what she\'s been up to', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('"So what have you been up to lately?" you ask.');
    scene.text('She grins at you. "Mostly sucking dick or taking cock. Once I learned to embrace my new situation, I\'ve started to really enjoy myself. Being a slut is a lot of fun actually."');
    scene.text('Her look then turns serious. "I\'m still struggling with making it on my terms, but either way I like a good fuck."');
    if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).stat ?? 0)?.['men_fucked'] >= 5) {
      scene.text('You laugh a little. "Tell me about it. I love a good dicking myself."');
    } else {
      scene.text('You smile at her. "Well, as long as you\'re having fun I guess that\'s all that matters." You both laugh at that. "But seriously, I understand. Just make sure you are careful."');
      scene.text('The two of you are soon talking about sex, boys, and even girls you both find attractive.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    { label: 'Ask her about her fashion sense', handler: (st: GameState) => {
    (s as any).soniaQW['cheap_clothes'] = ((s as any).soniaQW['cheap_clothes'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('She often wears older clothes, but she somehow always manages to make them work and look stylish. "How do you manage to always look so nice?"');
    scene.text('She smiles. "You mean for someone that has cheaper clothes?"');
    scene.text('You\'re about to protest that you didn\'t mean it that way when she stops you. "I learned to sew. At first, it was just to fix tears and later alter clothes so they fit better and look nicer. You\'d be surprised what you can do with a little effort."');
    scene.text('She goes on to talk about how she goes about turning fairly plain looking clothes into stylish outfits.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    { label: 'Ask if she still hangs out with the gopniks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('"Do you still avoid the gopniks or have you started to hangout with them again?" you ask.');
    scene.text('"I used to avoid them, and I still do sometimes, but they\'re fun to party with," she replies.');
    scene.text('You sit in silence, wondering if you should push things. "Yeah, I mean if that\'s what you want," you meekly reply.');
    scene.text('She sighs slightly. "I know, I know. Trust me I remember what happened, but ... I don\'t know. Sometimes it\'s just fun being a fuck toy."');
    scene.text('You\'re about to say something, but you are not sure how to respond to that so you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    { label: 'Ask about the future', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('"What are your plans for after school?" you ask.');
    scene.text('She looks at you with a smile. "I\'ve got good grades, more than enough to get into the university in Saint Petersburg. I\'m planning to enrol there after school and study fashion design, but my parents want me to become a doctor or a lawyer or get a business degree or something like that."');
    scene.text('Before you can say anything, she turns to you. "What about you? What are your plans for the future?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      if (((s as any).rex_love ?? 0) === 1) {
        scene.actions([
          { label: 'Get married to Rex', handler: (st: GameState) => {
    // TODO-QSP: gt 'soniachat', 'telling_marrige_dreams1', 'Rex'
  } },
        ]);
      }
      if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
        scene.actions([
          { label: 'Get married to Artem', handler: (st: GameState) => {
    // TODO-QSP: gt 'soniachat', 'telling_marrige_dreams1', 'Artem'
  } },
        ]);
      }
      if (((s as any).kotovLoveQW ?? 0) === 1) {
        scene.actions([
          { label: 'Get married to Vitek', handler: (st: GameState) => {
    // TODO-QSP: gt 'soniachat', 'telling_marrige_dreams1', 'Vitek'
  } },
        ]);
      }
      if (((s as any).fedorKozlovQW ?? 0) >= 5) {
        scene.actions([
          { label: 'Get married to Fedor', handler: (st: GameState) => {
    // TODO-QSP: gt 'soniachat', 'telling_marrige_dreams1', 'Fedor'
  } },
        ]);
      }
      if (((s as any).NikoVolkovQW ?? 0) >= 5) {
        scene.actions([
          { label: 'Get married to Niko', handler: (st: GameState) => {
    // TODO-QSP: gt 'soniachat', 'telling_marrige_dreams1', 'Niko'
  } },
        ]);
      }
      (s as any).i = 0;
      // TODO-QSP: :marrid_loop_hc
      if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
          // TODO-QSP: dynamic "act 'Get married to <<$npc_usedname[$temp_npcid]>>': gt 'soniachat', 'telling_marrige_dream...
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        // TODO-QSP: jump 'marrid_loop_hc'
      }
    } else {
      scene.actions([
        { label: 'Get married', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You sigh in a way only hopeless romantics do. "Hopefully I can find that special someone and get married soon."');
    scene.text('She smiles, seeing the signs of love. "If he makes you happy, then I\'m happy for you."');
    scene.text('You\'re not sure what more to say on the topic and decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('"I\'m not sure, but I guess I have a few options," you tell her.');
    scene.text('She nods. "Oh. Well, I guess you still have some time left to make up your mind..." she says. She sounds unsure though, as if she doesn\'t believe it herself.');
    scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You get a little excited. "I\'m planning to attend the university too. At least now I\'ll know someone there."');
    scene.text('She grins happily. "Maybe we should think about being roommates when we go? As you said, then we would know someone and we already get along. Let\'s talk about it some more when the time comes."');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask if she has a boy/girlfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You know she\'s had a fair bit of sex at this point, but you don\'t know if she is romantically involved with anyone or if she even wants to be. "Do you have a boyfriend? Or a girlfriend?"');
    scene.text('She shakes her head. "Nope. Let\'s be honest, with my reputation now, no one would want to be with me." She looks a little sad, but it quickly disappears. "Maybe someday in a few years after I graduate and make a new life for myself. Until then, I just want to have a little fun."');
    scene.actions([
      { label: 'Ask if she goes on dates', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You nod in understanding. "So you don\'t really date then?"');
    scene.text('She smiles and shakes her head. "No, I mostly just hook up with some cute guy I find or hang out with someone and just let nature take its course. I\'m more interested in just having fun now. I mean, that <i>is</i> what I wanted... just not the way I imagined it happening."');
    scene.text('You smile. "I\'m glad you can make the best of things."');
    scene.text('She shrugs a little. "I mean I can\'t change the past, so might as well try my best to be happy and enjoy myself," she says before she turns to you. "What about you? You dating anyone?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['soniachat', 'boyfriend_chat1'] },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
      { label: 'Let it drop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Sonia\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
    scene.text('You smile at her reassuringly. "I\'m sure you\'ll find the right guy, or girl, when the time is right."');
    scene.text('"Yeah me too," she giggles before she turns to you. "What about you?"');
    if (((s as any).rex_love ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['soniachat', 'boyfriend_chat1'] },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
  // TODO-QSP: dynamic text: You sigh in a way only those who are in love can. "Hopefully <<$ARGS[1]>> and I ...
  scene.text(`You sigh in a way only those who are in love can. "Hopefully ${((s as any).locArgs?.[1] ?? 0)} and I can get married soon."`);
  scene.text('She smiles at you. "Why when you can have any boy you want?"');
  scene.text('You start to explain why, but considering what\'s happened in her life, you decide to leave it and change the subject.');
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Change the subject', goto: ['soniachat', 'sonia_chat_happyslut'] },
  ]);
  scene.build();
}

function enterBoyfriendChat1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell her.');
    scene.text('Her smile falters a little. "Oh. He seems pretty nice and charming. You know, for one of the gopniks, but I\'m not sure you can fully trust any of them. They\'re fun to have fun with, but for more..."');
    scene.text('She trails off, clearly worried he might do to you what happened to her, but she lets it drop and you choose to ignore it. She just doesn\'t know him, not like you do.');
    scene.text('You talk to her about how great of a guy he is.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Fedor', handler: (st: GameState) => {
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('"Fedor," you tell her.');
      scene.text('She looks a bit surprised. "Fedor? Sorry, I didn\'t mean for it to sound like that. I of all people can understand how you can end up doing something you don\'t want and suddenly that one event defines you. He seems nice enough, I hope the two of you are happy. Just watch out who knows; you know how others can be."');
      scene.text('You smile and start telling her about how great of a guy he is.');
      scene.actions([
        { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
        { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
      ]);
    } else {
      scene.text('"Fedor," you tell her.');
      scene.text('She arches her brow slightly. "Fedor?" she asks before grinning. "If you were going to date a jock, I would have gone for Lazar. Or maybe Ivan?" she says with a giggle.');
      scene.text('You smile at her. "I like Fedor. He\'s sweet and makes me happy. You can have Lazar or Ivan."');
      scene.text('You both giggle before you tell her about how great Fedor is and what an amazing boyfriend he is.');
      scene.actions([
        { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
        { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).kotovLoveQW ?? 0) === 1) {
    scene.actions([
      { label: 'Vitek', handler: (st: GameState) => {
    scene.text('"Vitek," you tell her.');
    scene.text('She seems surprised. "Really? But neither of you said anything... After... You know..."');
    scene.text('You shrug. "He messes around sometimes, but I know he loves me, so I don\'t mind."');
    scene.text('After that, the conversation quickly stops, so you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.actions([
      { label: 'Artem', handler: (st: GameState) => {
    (s as any).soniaQW['artem_bf'] = 1;
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('"Artem," you tell her.');
      scene.text('She grins. "Well, you guys make a cute couple," she says with a giggle.');
      scene.text('You sigh in a way only those in love can. "He\'s sweet and really nice to me."');
      scene.text('You both giggle before you tell her about how great Artem is and what an amazing boyfriend he is.');
    } else {
      scene.text('"Artem," you tell her.');
      scene.text('She looks a little surprised. "Artem? The nerd?" She seems to consider it for a moment. "Well, I guess he is kind of cute... Just a little surprised is all," she says with a giggle.');
      scene.text('You shake your head slightly at her comment. "He\'s sweet and really nice to me."');
      scene.text('You both giggle before you tell her about how great Artem is and what an amazing boyfriend he is.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  if (((s as any).rex_love ?? 0) === 1) {
    scene.actions([
      { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Rex," you tell her.');
    scene.text('"Who?" she asks as she cocks her head slightly. "Wait, isn\'t he the guy that throws parties all the time? My brother sometimes goes to them."');
    scene.text('You nod. "Yeah, that\'s him."');
    scene.text('She now has an inquisitive look on her face. "How did you meet him? He\'s a few years older than you."');
    scene.text('You smile at her. "I was invited to his party," you tell her. "Okay, he\'s friends with my sister. She invited me to his party and that\'s where we met."');
    scene.text('You talk about the night you met him and your first date.');
    scene.actions([
      { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
      { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
    ]);
  } },
    ]);
  }
  (s as any).i = 0;
  // TODO-QSP: :lover_loop_bc1
  if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
      // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''soniachat'', ''tell_about_generic_boyfri...
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'lover_loop_bc1'
  }
  scene.build();
}

function enterTellAboutGenericBoyfriend1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/soniaHome/sonia_bedroom/sonia_happyslut.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>," you tell her.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}," you tell her.`);
  scene.text('"Who?" she asks as she cocks her head slightly.');
  scene.text('You shake your head slightly. "You\'ve never met him. I only just met him."');
  scene.text('She smiles. "Just some guy you met, huh?"');
  scene.text('You laugh before you start telling her about him.');
  scene.actions([
    { label: 'Stop talking', goto: ['soniahome', 'sonia_room'] },
    { label: 'Keep talking', goto: ['soniachat', 'sonia_chat_happyslut'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'sonia_chat':
      enterSoniaChat(s, scene);
      break;
    case 'telling_marrige_dreams':
      enterTellingMarrigeDreams(s, scene);
      break;
    case 'boyfriend_chat':
      enterBoyfriendChat(s, scene);
      break;
    case 'tell_about_generic_boyfriend':
      enterTellAboutGenericBoyfriend(s, scene);
      break;
    case 'sonia_chat_special1':
      enterSoniaChatSpecial1(s, scene);
      break;
    case 'sonia_chat_special2':
      enterSoniaChatSpecial2(s, scene);
      break;
    case 'sonia_chat_special3':
      enterSoniaChatSpecial3(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'livingroom_chat1':
      enterLivingroomChat1(s, scene);
      break;
    case 'livingroom_chat2':
      enterLivingroomChat2(s, scene);
      break;
    case 'sonia_chat_happyslut':
      enterSoniaChatHappyslut(s, scene);
      break;
    case 'telling_marrige_dreams1':
      enterTellingMarrigeDreams1(s, scene);
      break;
    case 'boyfriend_chat1':
      enterBoyfriendChat1(s, scene);
      break;
    case 'tell_about_generic_boyfriend1':
      enterTellAboutGenericBoyfriend1(s, scene);
      break;
    default:
      enterCikl(s, scene);
      break;
  }
}

export const soniachat: LocationDef = {
  name: 'soniachat',
  title: 'Sonia\'s Room',
  region: 'other',
  locclass: 'livingr',
  enter: enter,
};
