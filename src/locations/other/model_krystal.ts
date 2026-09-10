import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKrystal1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).krystal ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_krystal', 'krystal2'] }]);
  }
  if (((s as any).krystal ?? 0)?.['status'] === 3) {
    scene.actions([{ label: 'Continue', goto: ['model_krystal', 'krystal3'] }]);
  }
  if (((s as any).krystal ?? 0)?.['status'] === 4) {
    scene.actions([{ label: 'Continue', goto: ['model_krystal', 'krystal4'] }]);
  }
  if (((s as any).krystal ?? 0)?.['status'] === 5) {
    scene.actions([{ label: 'Continue', goto: ['model_krystal', 'krystal5'] }]);
  }
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('Walking by one of the sets you hear the photographer exclaim, "Yeah, that\'s exactly what I was looking for. It\'s always a pleasure working with you Katherine. You always seem to outdo yourself with every shoot."');
  scene.text('By hearing that you\'re too excited and can\'t miss the opportunity to find out what the fuss is about.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/1.jpg');
    scene.text('As you peek in you see a girl posing in several exposing poses. You are spellbound by how flexible she is and you don\'t even realize that you\'re now standing in the open with your mouth open.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/2.jpg');
    scene.text('Katherine looking teasingly your way says, "Looks like we have a little voyeur here."');
    scene.text('All of a sudden everyone stops and turns their attention towards you. You stand there, blushing, wanting to crawl under a stone. The photographer tells everyone to take five while Katherine walks over towards you smiling.');
    scene.actions([
      { label: 'I\'m so sorry I didn\'t mean…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/3.jpg');
    scene.text('As Katherine approaches you, she keeps on laughing, "Did you enjoy the show?"');
    scene.text('You nod and tell her you\'re sorry for disturbing on the set, it really wasn\'t on purpose, "I was just amazed by the intensity in the shoot."');
    scene.text('"Thanks, I\'ve had a lot of practice. If you play nice I might tell you all about it one day."');
    scene.actions([
      { label: '"That would be nice"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/4.jpg');
    scene.text('"Who are you by the way? I don\'t think I\'ve seen you here before." Katherine asks.');
    // TODO-QSP: dynamic text: "Sorry, I'm <<$model['firstname']>>. I just got recruited by the agency so I'm j...
    scene.text(`"Sorry, I'm ${((s as any).model ?? 0)?.['firstname']}. I just got recruited by the agency so I'm just walking around checking the place out."`);
    scene.text('"Wow I\'m impressed it might be the first time they\'ve ever recruited someone interesting… Oh I totally forgot to introduce myself, I\'m Krystal."');
    scene.actions([
      { label: '"Krystal?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/5.jpg');
    scene.text('"Krystal?" you ask. "Didn\'t the photographer just call you Katherine?"');
    scene.text('"Hmm? Oh yeah. I work a lot of places, use a lot of aliases, but you can call me Krystal. That\'s my real name."');
    scene.text('You hear the photographer yell out that the break is over and he wants Katherine, er- Krystal back on the set.');
    scene.text('"Alright, gotta go babe. Hope to see you later!" she says going back to set.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting/6.jpg');
    scene.text('You say your farewells and watch her work for a few more minutes. If nothing else, she certainly has no shame.');
    (s as any).krystal['status'] = 2;
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

function enterKrystal2(s: GameState, scene: SceneBuilder): void {
  (s as any).krystal['status'] = 3;
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
  scene.text('As you walk through the studio, something catches your eye and you see that Krystal is waving you over. She\'s wearing a blue top and panties, so she must be getting ready for a shoot.');
  scene.text('"Hey beautiful! Long time no see. How\'re you doing?" she asks.');
  scene.text('"Good to hear!"');
  scene.text('"And how are things with you Krystal?"');
  scene.text('"Me? I\'m great!"');
  scene.text('Her happy mood intrigues you. "Oh! Did something good happen?"');
  scene.text('She smiles and says, "Yeah! I got absolutely fucking <i>railed</i> about an hour ago."');
  scene.actions([
    { label: 'Surprise', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/2.jpg');
    scene.text('You blink, recoiling a bit in shock, surprised by her openly talking about her sex life like that. Especially so… explicitly.');
    scene.text('"You know when someone fills your holes <i>just</i> right and hits all those perfect spots?" she continues, stretching her arms behind her head and sighing. "No better feeling than that in the world! Well… maybe except the tip of a cock touching the back of your throat… Or maybe getting creampied… Or maybe swallowing… Or maybe it\'s hot cum landing on your face…"');
    scene.text('Before she can ramble any further, you interrupt her.');
    scene.text('"You\'re uhh… pretty candid about this kind of stuff huh?"');
    scene.text('"Why wouldn\'t I be? Sex is my favorite hobby! I love everything about it!"');
    if (((s as any).stat ?? 0)?.['porn'] > 0) {
      scene.actions([
        { label: '"Hey, aren\'t you a porn star?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/5.jpg');
    scene.text('"Hang on," you say. "I feel like I\'ve seen you somewhere before…"');
    scene.text('You rack your brain for a moment before blinking in a moment of clarity.');
    scene.text('"Do you… do you do porn?"');
    scene.text('"Yup!" she says cheerfully. "But they call me Angie in most of my videos."');
    scene.actions([
      { label: '"I thought I recognized you!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Oh yeah. That good fucking I was talking about? I just came from a porn studio. Got gangbanged," she grins. "My favorite kind of scene because I don\'t have to choose one way to get fucked. Mouth? Pussy? Ass? Everything gets stuffed."');
    scene.text('"Yeah, I could kind of tell. I\'ve seen some of your work before. You really seem to enjoy those."');
    scene.text('"Want to give it a try?" she smiles.');
    scene.actions([
      { label: '"WHAT?!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/3.jpg');
    scene.text('"<i>WHAT?!</i>"');
    scene.text('"Woah woah, no need to act so shocked. I thought you sounded interested. I can get you a business card later if you want one. I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?"');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?"');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    }
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Maybe you should try porn?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/3.jpg');
    scene.text('"Maybe you should try porn," you laugh. "Might as well mix business with pleasure if you enjoy it that much."');
    scene.text('"Hmm? Oh, I\'m already a porn star."');
    qspCall(s, 'model_krystal', 'krystal2_2');
  } },
    ]);
  } },
    { label: '"That good huh?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/2.jpg');
    scene.text('"Oh? That good huh?"');
    scene.text('"You know when someone fills your holes <i>just</i> right and hits all those perfect spots?" she continues, clearly egged on by your interest. "No better feeling than that in the world! Well… maybe except the tip of a cock touching the back of your throat… Or maybe getting creampied… Or maybe swallowing… Or maybe it\'s hot cum landing on your face…"');
    scene.text('"You get around a lot huh?"');
    scene.text('"Not as much as you\'d think," she smirks mischeviously.');
    if (((s as any).stat ?? 0)?.['porn'] > 0) {
      scene.actions([
        { label: '"Hey, aren\'t you a porn star?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/5.jpg');
    scene.text('"Hang on," you say. "I feel like I\'ve seen you somewhere before…"');
    scene.text('You rack your brain for a moment before blinking in a moment of clarity.');
    scene.text('"Do you… do you do porn?"');
    scene.text('"Yup!" she says cheerfully. "But they call me Angie in most of my videos."');
    scene.actions([
      { label: '"I thought I recognized you!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Oh yeah. That good fucking I was talking about? I just came from a porn studio. Got gangbanged," she grins. "My favorite kind of scene because I don\'t have to choose one way to get fucked. Mouth? Pussy? Ass? Everything gets stuffed."');
    scene.text('"Yeah, I could kind of tell. I\'ve seen some of your work before. You really seem to enjoy those."');
    scene.text('"Want to give it a try?" she smiles.');
    scene.actions([
      { label: '"WHAT?!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/3.jpg');
    scene.text('"<i>WHAT?!</i>"');
    scene.text('"Woah woah, no need to act so shocked. I thought you sounded interested. I can get you a business card later if you want one. I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?"');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?"');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    }
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Maybe you should try porn?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/3.jpg');
    scene.text('"Maybe you should try porn," you laugh. "Might as well mix business with pleasure if you enjoy it that much."');
    scene.text('"Hmm? Oh, I\'m already a porn star."');
    qspCall(s, 'model_krystal', 'krystal2_2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2_2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '"What?!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"What?!"');
    scene.text('Your jaw drops. You look her over again. She\'s definitely hot and you can see how she\'d fit in there. For some reason you just didn\'t expect it, seeing she\'s so famous here at Aphrodite.');
    scene.text('"Yeah, I just finished up a gangbang scene at a porn studio about an hour ago. My favorite kind of scene because I don\'t have to choose one way to get fucked. Every hole, every pleasure, no need to choose," she smiles. "Want to give it a try?"');
    scene.actions([
      { label: '"WHAT?!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"<i>WHAT?!</i>"');
    scene.text('"Woah woah, no need to act so shocked. I just thought, you\'re pretty enough to work here, why not try porn? It\'s a lot of fun," she grins. "I can get you a business card later. I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?" you ask.');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? Porn?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    }
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
    ]);
  } },
    { label: '"Cool!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Woah! Seriously?"');
    scene.text('"Yeah, babe! You didn\'t think that this body was just for show did you?" she smirks.');
    scene.text('"That\'s so cool!" you gush.');
    scene.text('"I know right?" her smirk broadens into a grin. "I just finished up a gangbang scene at a porn studio about an hour ago. My favorite kind of scene because I don\'t have to choose one way to get fucked. Every hole, every pleasure, no need to choose," she smiles. "Want to give it a try?"');
    scene.actions([
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?" you ask.');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    }
    qspCall(s, 'model_krystal', 'krystal2_nothanks');
    qspCall(s, 'model_krystal', 'krystal2_sure1');
    qspCall(s, 'model_krystal', 'krystal2_sure2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2Nothanks(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"Uhh, I appreciate the offer but no thanks. I\'m good."');
    scene.text('"Suit yourself," she shrugs. "Let me know if you ever change your mind."');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname']} is going to have to clear out."`);
    scene.text('"Sorry, I don\'t want to get in the way," you say and quickly bow out..');
    scene.text('As you walk away, you hear Krystal say, "So… I got creampied by like, five guys about an hour ago. Some stuff might leak out randomly during the shoot. Just a head\'s up."');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2Sure1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Sure…?', handler: (st: GameState) => {
    (s as any).krystal['porn_card_hour'] = ((s as any).hour ?? 0) + 2;
    (s as any).krystal['porn_card_day'] = ((s as any).daystart ?? 0);
    scene.text('"Uhmm… sure…?"');
    scene.text('"Great! But my purse is in the locker room. I\'ll get you one after I\'m done here," she smiles. "Don\'t forget to stick around!"');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname']} is going to have to clear out."`);
    scene.text('"Sorry, I don\'t want to get in the way," you say and quickly bow out..');
    scene.text('As you walk away, you hear Krystal say, "So… just a warning, I got creampied by like, five guys about an hour ago. Some stuff might leak out randomly during the shoot. Just a head\'s up."');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2Sure2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Sure!', handler: (st: GameState) => {
    (s as any).krystal['porn_card_hour'] = ((s as any).hour ?? 0) + 2;
    (s as any).krystal['porn_card_day'] = ((s as any).daystart ?? 0);
    scene.text('"Sure! What you described, it does sound pretty fun," you smile eagerly.');
    scene.text('"Great! But my purse is in the locker room. I\'ll get you one after I\'m done here," she smiles. "Don\'t forget to stick around!"');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname']} is going to have to clear out."`);
    scene.text('"Sorry, I don\'t want to get in the way," you say and quickly bow out..');
    scene.text('As you walk away, you hear Krystal say, "So… just a warning, I got creampied by like, five guys about an hour ago. Some stuff might leak out randomly during the shoot. Just a head\'s up."');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystalPornCard(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "Hey! <<$model['nickname']>>!" someone calls your name through the studio.
  scene.text(`"Hey! ${((s as any).model ?? 0)?.['nickname']}!" someone calls your name through the studio.`);
  scene.text('Turning, you see Krystal padding her way towards you on bare feet, completely naked as opposed to the last time you saw her.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    (s as any).pornstudio = 1;
    if (((s as any).krystal ?? 0)?.['porn_card_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Glad I caught you before you left!" She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
    } else {
      scene.text('"Sorry I couldn\'t find you yesterday. I must\'ve just missed you. She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
      if (((s as any).krystal ?? 0)?.['porn_card_day'] < ((s as any).daystart ?? 0) - 1) {
        scene.text('"Where have you been babe?? I\'ve been looking for you for days! Did you already do your two shoots for the week or something?" She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
      }
      scene.text('<b>Spunk Bang Productions</b>');
      scene.text('The address on it says it\'s in the city limits.');
      scene.text('"There you go! One porn production company business card, as promised," Krystal smiles. "You can use your phone to look up the address, but it\'s pretty easy to find. Just head to the red light district and it\'ll be between the strip club and the toy shop. If you pass the copy shop with the guy who does fake passports, you\'ve gone too far. Anyways, I got shit to do. See you later! Either here or there."');
      scene.text('Her last remark is given with a lustful grin and she waggles her fingers at you in goodbye before heading off towards the locker room.');
      scene.actions([
        { label: 'Am I really going to try porn…?', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk1.mp4');
    scene.text('You watch Krystal walk away, a swagger in her hips, before looking back down at the card she left you.');
    scene.text('<i>Am I really going to try porn…?</i> you ask yourself.');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'studio'] },
    ]);
  } },
        { label: 'Can\'t wait', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk1.mp4');
    scene.text('You watch Krystal walk away, a swagger in her hips, before looking back down at the card she left you.');
    scene.text('<i>Can\'t wait to see you…</i> you smile to yourself.');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'krystal1':
      enterKrystal1(s, scene);
      break;
    case 'krystal2':
      enterKrystal2(s, scene);
      break;
    case 'krystal2_2':
      enterKrystal2_2(s, scene);
      break;
    case 'krystal2_nothanks':
      enterKrystal2Nothanks(s, scene);
      break;
    case 'krystal2_sure1':
      enterKrystal2Sure1(s, scene);
      break;
    case 'krystal2_sure2':
      enterKrystal2Sure2(s, scene);
      break;
    case 'krystal_porn_card':
      enterKrystalPornCard(s, scene);
      break;
    default:
      enterKrystal1(s, scene);
      break;
  }
}

export const model_krystal: LocationDef = {
  name: 'model_krystal',
  title: 'You\'ve run out of shampoo and will have to buy some more before you can wash yourself.',
  region: 'other',
  description: ['Walking by one of the sets you hear the photographer exclaim, "Yeah, that\'s exactly what I was looking for. It\'s always a pleasure working with you Katherine. You always seem to outdo yourself with every shoot."'],
  enter: enter,
};
