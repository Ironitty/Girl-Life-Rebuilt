import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKrystal1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).krystal ?? 0)?.['status'] === 2) {
    qspGoto(s, 'model_krystal', 'krystal2');
  }
  if (((s as any).krystal ?? 0)?.['status'] === 3) {
    qspGoto(s, 'model_krystal', 'krystal3');
  }
  if (((s as any).krystal ?? 0)?.['status'] === 4) {
    qspGoto(s, 'model_krystal', 'krystal4');
  }
  if (((s as any).krystal ?? 0)?.['status'] === 5) {
    qspGoto(s, 'model_krystal', 'krystal5');
  }
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('Walking by one of the sets you hear the photographer exclaim, "Yeah, that\'s exactly what I was looking for. It\'s always a pleasure working with you Katherine. You always seem to outdo yourself with every shoot."');
  scene.text('By hearing that you\'re too excited and can\'t miss the opportunity to find out what the fuss is about.');
  // TODO-QSP: end
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
    scene.text(`"Sorry, I'm ${((s as any).model ?? 0)?.['firstname'] ?? ''}. I just got recruited by the agency so I'm just walking around checking the place out."`);
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
    ((s as any).krystal = (s as any).krystal ?? {})['status'] = 2;
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
  ((s as any).krystal = (s as any).krystal ?? {})['status'] = 3;
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
  scene.text('As you walk through the studio, something catches your eye and you see that Krystal is waving you over. She\'s wearing a blue top and panties, so she must be getting ready for a shoot.');
  scene.text('"Hey beautiful! Long time no see. How\'re you doing?" she asks.');
  scene.text('"Good to hear!"');
  scene.text('"And how are things with you Krystal?"');
  scene.text('"Me? I\'m great!"');
  scene.text('Her happy mood intrigues you. "Oh! Did something good happen?"');
  scene.text('She smiles and says, "Yeah! I got absolutely fucking <i>railed</i> about an hour ago."');
  // TODO-QSP: end
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?"');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?"');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 8) {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      } else {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2_2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?"');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?"');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 8) {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      } else {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A gangbang?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? A gangbang?" you ask.');
    scene.text('"Well, actually I meant porn," she smirks. "But obviously you can try that and porn at the same time if you want. I actually knew a girl who got into porn just because she wanted to see what a gangbang was like. They tied her arms behind her back and let four guys get rough with her for a couple hours. It was super hot. She came like, six times. If you want to try porn or a porn gangbang, I could give you a business card later? I think I have a couple in my purse somewhere."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/4.jpg');
    scene.text('"Try what? Porn?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 8) {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      } else {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Porn?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting2/1.jpg');
    scene.text('"Try what? Porn?" you ask.');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus you\'ve got killer looks girl! You\'d be a hit right away! If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 8) {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Plus, you\'ve got great looks. I can tell you\'ll be popular. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      } else {
        scene.text('"Sure, why not?" she smirks."It\'s fun as fuck! Get to spend all day getting nailed by hot guys with big dicks. Besides, we need more girls like you. Too many \'super model hot\' and \'milf\' and \'too much plastic surgery\' types. We need more \'girl next door\' types like you. If you want, I could give you a business card later? I think I have a couple in my purse somewhere."');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Nothanks(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystal2Sure2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal2Nothanks(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"Uhh, I appreciate the offer but no thanks. I\'m good."');
    scene.text('"Suit yourself," she shrugs. "Let me know if you ever change your mind."');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname'] ?? ''} is going to have to clear out."`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure…?', handler: (st: GameState) => {
    ((s as any).krystal = (s as any).krystal ?? {})['porn_card_hour'] = ((s as any).hour ?? 0) + 2;
    ((s as any).krystal = (s as any).krystal ?? {})['porn_card_day'] = ((s as any).daystart ?? 0);
    scene.text('"Uhmm… sure…?"');
    scene.text('"Great! But my purse is in the locker room. I\'ll get you one after I\'m done here," she smiles. "Don\'t forget to stick around!"');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname'] ?? ''} is going to have to clear out."`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure!', handler: (st: GameState) => {
    ((s as any).krystal = (s as any).krystal ?? {})['porn_card_hour'] = ((s as any).hour ?? 0) + 2;
    ((s as any).krystal = (s as any).krystal ?? {})['porn_card_day'] = ((s as any).daystart ?? 0);
    scene.text('"Sure! What you described, it does sound pretty fun," you smile eagerly.');
    scene.text('"Great! But my purse is in the locker room. I\'ll get you one after I\'m done here," she smiles. "Don\'t forget to stick around!"');
    // TODO-QSP: dynamic text: A photographer comes on set, saying, "Alright Katherine, it's time to start shoo...
    scene.text(`A photographer comes on set, saying, "Alright Katherine, it's time to start shooting. ${((s as any).model ?? 0)?.['firstname'] ?? ''} is going to have to clear out."`);
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
  scene.text(`"Hey! ${((s as any).model ?? 0)?.['nickname'] ?? ''}!" someone calls your name through the studio.`);
  scene.text('Turning, you see Krystal padding her way towards you on bare feet, completely naked as opposed to the last time you saw her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    (s as any).pornstudio = 1;
    if (((s as any).krystal ?? 0)?.['porn_card_day'] === ((s as any).daystart ?? 0)) {
      scene.text('"Glad I caught you before you left!" She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
    } else {
      if (((s as any).krystal ?? 0)?.['porn_card_day'] === ((s as any).daystart ?? 0) - 1) {
        scene.text('"Sorry I couldn\'t find you yesterday. I must\'ve just missed you. She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
      } else {
        if (((s as any).krystal ?? 0)?.['porn_card_day'] < ((s as any).daystart ?? 0) - 1) {
          scene.text('"Where have you been babe?? I\'ve been looking for you for days! Did you already do your two shoots for the week or something?" She extends her arm, holding out a small rectangular card between her fingers towards you. Taking it from her, you see it reads:');
        }
      }
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
  } },
  ]);
  scene.build();
}

function enterKrystalPornCard2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
  scene.text('"Hey Krystal… You remember when you offered me a business card for the porn studio you work at?"');
  scene.text('You watch a small smirk spread across her face.');
  scene.text('"Yes…"');
  scene.text('"And remember how I said no thanks…?"');
  scene.text('"Ahuh…" Her smirk turns into a sly smile.');
  scene.text('"Do you think… I could have that card after all?"');
  scene.text('"Ugh! Finally! I was wondering when you were going to ask. Just gimme a sec, I have one in my purse."');
  scene.text('Krystal dashes off towards the locker rooms, practically skipping all the way there, leaving you alone on the empty set.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pornstudio = 1;
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    scene.text('About a minute later, she comes skipping back and hands you a small white business card.');
    scene.text('<b>Spunk Bang Productions</b>');
    scene.text('The address on it says it\'s in the city limits.');
    scene.text('"There you go! One porn production company business card, as promised," Krystal smiles. "You can use your phone to look up the address, but it\'s pretty easy to find. Just head to the red light district and it\'ll be between the strip club and the toy shop. If you pass the copy shop with the guy who does fake passports, you\'ve gone too far. What made you change your mind?"');
    scene.actions([
      { label: 'Curiosity', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    scene.text('"I\'m just curious I guess?"');
    scene.text('"Well you know what they say about curiosity."');
    scene.text('"It killed the cat?"');
    scene.text('"Nope. It helps you find out you\'re bi," she winks at you. "Anyways, anything else you wanted to talk about?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystalPornCard2End(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Talk about something else', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
      { label: 'Need money', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/10.jpg');
    scene.text('"To be honest, I just really need the money right now," you admit.');
    // TODO-QSP: dynamic text: "Nothing wrong with that. Don't let anybody tell you different <<$model['nicknam...
    scene.text(`"Nothing wrong with that. Don't let anybody tell you different ${((s as any).model ?? 0)?.['nickname'] ?? ''}. Doing porn is just as valid a job as waiting tables or working at a gas station. Plus, they pay way better. I'm sure you'll get whatever you need in a few weeks there. Anyways, was that it? Anything else you wanted to talk about?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystalPornCard2End(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Talk about something else', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
      { label: 'I can\'t stop thinking about it', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    scene.text('"To be honest… ever since you offered it to me… I haven\'t been able to stop thinking about it," you admit. Krystal smiles at you with a predatory grin.');
    scene.text('"Thinking about what? The money? Getting stuffed with cock? Gangbangs?"');
    scene.text('"Yes…" you admit again, a deep blush spreading through your face. Her words spark something inside you and you feel warmth spreading through your hips as well.');
    scene.text('"Well, no one said we can\'t do it for fun either," she says, rubbing her legs together. "Fuck, you\'re gonna get me wet in the middle of the wrong work day. Anyways, was there anything else you wanted to talk about?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKrystalPornCard2End(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Talk about something else', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystalPornCard2End(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No, that\'s all', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
    scene.text('"No, that was it really. I gotta run."');
    scene.text('"To the porn studio?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
    scene.text('"What? No," you say, confusedly. "I mean I have other stuff I need to do today."');
    scene.text('"Yeah I know babe, I\'m just teasing. Alright, go do your thing. I\'ll see you later. Maybe at the <i>other</i> studio," she winks. You wave goodbye and head off back into the main hub of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'No! (blush)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
    scene.text('"No!" As soon as the words leave your lips, your cheeks turn bright red as your face flushes with embarrassment.');
    scene.text('"Oh my god," Krystal grins. "I was just teasing but you really are planning to go there right now aren\'t you!"');
    scene.text('"No! I\'m not!" you protest.');
    scene.text('"You are going to look so adorable, blushing like that with a cock stuffed in your mouth."');
    scene.text('"Krystal!"');
    scene.text('"Okay, okay. I\'ll let you go to <i>not</i> go to the porn studio," she winks. "I\'ll catch you later babe."');
    scene.text('You wave goodbye and head off back into the main hub of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Maybe…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
    scene.text('"Maybe…" you smile slyly.');
    scene.text('"Well, maybe I\'ll see you there later then," she smiles back.');
    scene.text('You wave goodbye and head off back into the main hub of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKrystal3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting3/1.jpg');
  scene.text('You see Krystal standing by one of the sets with a man.');
  scene.text('<i>Must be a photographer.</i>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say hi', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting3/2.jpg');
    scene.text('"Hey Krys-"');
    scene.text('You stop suddenly as the guy starts to reaches up her skirt and down her dress.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting3/3.jpg');
    scene.text('As he pulls down her strap and bares one of her breasts, Krystal looks up and notices you.');
    // TODO-QSP: dynamic text: "Hi <<$model['nickname']>>! Good to see you! Come meet my boyfriend!"
    scene.text(`"Hi ${((s as any).model ?? 0)?.['nickname'] ?? ''}! Good to see you! Come meet my boyfriend!"`);
    scene.text('You timidly walk over to her.');
    scene.text('"This is my boyfriend, Ben," she says while he fondles her breast.');
    scene.text('"Uhmm… Nice to meet you Ben…" You hold out your hand and he says nothing to you, continuing to grope her and kiss the back of her neck.');
    scene.text('"Oh, don\'t mind him," Krystal continues on. "We haven\'t had sex since -<i>ahhh!</i>- this morning, so he\'s very-! eager-!" Her last word comes out as a squeal when he pinches her nipple and pulls on it.');
    scene.text('"Did you want to stick around? We could make this a threesome," she says casually while leaning onto her boyfriend. She\'s clearly enjoying his advances.');
    scene.actions([
      { label: '"No, that\'s okay…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting3/4.jpg');
    scene.text('"No… That\'s okay…" you say. "You haven\'t been with each other in… a little while… I don\'t want to deprive you of each other so I\'m just going to tip on out."');
    scene.text('"Alright," she says. The dress is starting to be pulled off both shoulders now. "Just thought I\'d ask. You never know!"');
    scene.text('As you walk away, you hear her moaning more and more. Just before you get out of earshot you hear her say, "We have to be careful this time Ben. Someone was angry when they found cum on the last set we used. I don\'t want to get in trouble if they catch us this time!"');
    ((s as any).krystal = (s as any).krystal ?? {})['status'] = 4;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Maybe another time"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/meeting3/4.jpg');
    scene.text('"Maybe another time," you smirk. "I got some work I need to do today."');
    scene.text('"Alrighty, catch you later then," she says with a wink as her dress starts to get pulled off.');
    scene.text('As you walk away, you hear her moaning more and more. Just before you get out of earshot you hear her say, "We have to be careful this time Ben. Someone was angry when they found cum on the last set we used. I don\'t want to get in trouble if they catch us this time!"');
    ((s as any).krystal = (s as any).krystal ?? {})['status'] = 4;
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

function enterKrystal4(s: GameState, scene: SceneBuilder): void {
  ((s as any).krystal = (s as any).krystal ?? {})['status'] = Math.floor(Math.random() * 2) + 4;
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
  scene.text('"Hey babe!"');
  scene.text('While walking around the studio, you hear someone call out to you. When you turn around, you see Krystal sitting on a sofa looking expectantly at you.');
  scene.text('"Oh, hey Krystal. I didn\'t see you there."');
  scene.text('"I know. Wanna hang?"');
  // TODO-QSP: end
  scene.actions([
    { label: '"Sorry, I\'m busy"', handler: (st: GameState) => {
    scene.text('"Sorry Krystal, I just remembered I need to do something. Some other time okay?"');
    scene.text('"Don\'t worry about it. Catch you later beautiful!"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: '"Sure"', goto: ['model_krystal', 'krystal_chat'] },
  ]);
  scene.build();
}

function enterKrystal5(s: GameState, scene: SceneBuilder): void {
  ((s as any).krystal = (s as any).krystal ?? {})['busy_cooldown_day'] = ((s as any).daystart ?? 0);
  ((s as any).krystal = (s as any).krystal ?? {})['busy_cooldown'] = ((s as any).hour ?? 0) + 2;
  ((s as any).krystal = (s as any).krystal ?? {})['status'] = Math.floor(Math.random() * 2) + 4;
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/busy.jpg');
  scene.text('You\'re looking for Krystal when you find her on set. She\'s holding her legs open and you are being treated with a very explicit view of her pussy and asshole.');
  scene.text('"Is this wide enough for you?" she calls over to the photographer who is changing settings on his camera.');
  scene.text('He looks up at her, judging the open angles of her legs briefly before saying, "That\'s perfect! Just hold that position right there!"');
  scene.text('"Okay!" she calls back with a sly grin on her face. "You know, not that it\'s difficult for me to hold my legs like this, but you should probably hurry up if you want to get the shot off.');
  scene.text('This is reminding me of the last time I held my legs open for this long. I was getting fucking <i>pummelled</i> by my boyfriend and the memory is going to get me wet soon."');
  scene.text('Hearing that, the photographer rushes back to the set and you decide it\'s probably best if you come back later.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterKrystalChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
  if (((s as any).krystal ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    ((s as any).krystal = (s as any).krystal ?? {})['model_exp'] = ((s as any).daystart ?? 0);
    qspCall(s, 'exp_gain', 'mdlng', 2);
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/10.jpg');
    scene.text('"You\'ve really got to emphasize your assets." She puts her hands up on her head, pulling some of her hair with them. "Right now, what do you notice most about me?"');
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('As soon as she asks, your eyes begin to drift down towards her breasts before immediately flicking back towards her eyes in embarrassment, though not before her noticing.');
    scene.text('She smirks and says, "Exactly. No point in being a nude model if you\'re not gonna show off the goods right? No matter what position, it\'s all about tits, pussy, or ass. That\'s what you want to be showing off!"');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
      { label: 'Your tits', handler: (st: GameState) => {
    scene.text('"Your tits," you say immediately. "You\'re practically shoving them in my face!"');
    scene.text('She smirks and says, "Exactly. No point in being a nude model if you\'re not gonna show off the goods right? No matter what position, it\'s all about tits, pussy, or ass. You\'ve got it, they want it, give them what they want!"');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pornstudio ?? 0) < 1) {
    scene.actions([
      { label: 'Ask her for the porn business card', goto: ['model_krystal', 'krystal_porn_card2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
    scene.text('"Alright. It was fun chatting with you Krystal. I gotta get going though."');
    scene.text('"Okay. See you later babe!"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Discuss random topics', handler: (st: GameState) => {
    (s as any).krystal_convo = Math.floor(Math.random() * 4) + 1;
    if (((s as any).krystal_convo ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/\' + rand(4, 5) + \'.jpg');
      scene.text('"So you\'re a porn star as well as a nude model?"');
      scene.text('"Mhmm. Pays the bills pretty well. Plus who can say no to getting fucked for money? Win win!"');
      scene.text('"Are the photographers okay with that?"');
      scene.text('"Oh yeah, they love it. As far as they\'re concerned, it\'s free publicity to sell more magazines of me. How else do you think I got so popular?"');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal_convo ?? 0) === 2) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/2.jpg');
      scene.text('"Is your boyfriend okay with you doing porn and having sex with other guys?"');
      scene.text('"Oh, he doesn\'t mind all that much. He\'s usually starring in films with me. Besides, he can\'t complain since he gets to fuck other girls too and it\'s kind of his fault we got into the business in the first place."');
      scene.text('"How do you mean?"');
      scene.text('"Well, it was his idea to start making home videos. I was already a model at the time so he thought videos would be a step up. At first it was just being around the house together, but then we\'d start to get frisky with each other and the camera would keep rolling. Soon, we\'d start fucking while watching videos of ourselves fucking. It was so hot taking a creampie watching him give me a cumshot at the same time… I couldn\'t get enough so I signed us up for our first porn audition! A few dozen films later, here we are!"');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal_convo ?? 0) === 3) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/2.jpg');
      scene.text('"Hey Krystal, do you know any good places to eat in the city?"');
      // TODO-QSP: dynamic text: "You could try the diner I used to work at before I became a porn star and model...
      scene.text(`"You could try the diner I used to work at before I became a porn star and modelling was only part time. It's American themed in the residential area. If you need another job, you could probably be a waitress there. And if you ever want better tips as a waitress, you need to use your head. No, seriously, give the customers blowjobs. There's always at least an extra ${qspFunc(s, 'money', 'string_profit', 50)} in it. And you get to swallow some cum!"`);
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal_convo ?? 0) === 4) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
      scene.text('"Krystal, what was your first time like?"');
      scene.text('"My first time? Oh it was fucking great! My first time was a double digit gangbang!"');
      scene.actions([
        { label: 'That\'s crazy!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
    scene.text('"Well, I say gangbang but it\'s really just more that I got ran train on. I was blowing this guy who used to do my homework for me in the boys room and some other guys walked in on us and some of the action. I was trying to finish up with the one I was with but they got impatient so one of them pushed me against the wall and just shoved inside! I was already masturbating with a dildo every day for a couple years now but I had never felt what it was like to have a real cock inside me. It was <i>soooooooo good…</i> I couldn\'t get enough of it! He came inside me and before I could turn around someone else put their cock in me! And then another and another and another and then I started to lose count.');
    scene.text('"Lost count?"');
    scene.text('"Yeah, there were so many of them! More boys just keep coming in! Pun intended," she adds with a smirk, "I\'m pretty sure more than a few took a second turn too. By the time I left the bathroom I could hardly stand and I think I must\'ve had half the cocks in school. Oh, my, god, and there was <i>so much cum.</i> It was streaming down my legs and dripping out of my pussy for the rest of the day. I\'ve always wondered if the teachers noticed or if they just chose to ignore it."');
    scene.text('She\'s been going on for some time now at this point and you\'ve been embarrassedly listening about how she lost her virginity to her classmates running train on her.');
    scene.text('"Uhm… yeah… I wonder too I guess…');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
        { label: 'Sounds hot!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
    scene.text('"That sounds so hot!"');
    scene.text('"I know, right?! Well, I say gangbang but it\'s really just more that I got ran train on. I was blowing this guy who used to do my homework for me in the boys room and some other guys walked in on us and some of the action. I was trying to finish up with the one I was with but they got impatient so one of them pushed me against the wall and just shoved inside! I was already masturbating with a dildo every day for a couple years now but I had never felt what it was like to have a real cock inside me. It was <i>soooooooo good…</i> I couldn\'t get enough of it! He came inside me and before I could turn around someone else put their cock in me! And then another and another and another and then I started to lose count.');
    scene.text('"Lost count?"');
    scene.text('"Yeah, there were so many of them! More boys just keep coming in! Pun intended," she adds with a smirk, "I\'m pretty sure more than a few took a second turn too. By the time I left the bathroom I could hardly stand and I think I must\'ve had half the cocks in school. Oh, my, god, and there was <i>so much cum.</i> It was streaming down my legs and dripping out of my pussy for the rest of the day. I\'ve always wondered if the teachers noticed or if they just chose to ignore it."');
    scene.text('She\'s been going on for some time now at this point and you\'ve been eagerly listening about how she lost her virginity to her classmates running train on her.');
    scene.text('"That was a pretty wild story Krystal."');
    scene.text('"Easily one of my best," she says, grinning at you. "Oh, but I <i>have</i> to tell you later about the time I started an orgy at somebody\'s house party! I think I made about a dozen people lose their virginity\'s that night!"');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Ask how she stays in shape', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/11.jpg');
    scene.text('"Krystal, how do you stay so thin? You have the body of a goddess! What\'s your secret?"');
    scene.text('"Proper dieting and exercise I\'m afraid. I know, pretty boring answer, but the truth is there\'s no real secret to this kind of thing. Just something you have to do to stay thin and pretty."');
    if (((s as any).anastasia_exercise ?? 0) === 1) {
      scene.actions([
        { label: 'But Anastasia said sex was good exercise', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
    scene.text('"Oh." When you say this, you let a bit too much surprise slip into your voice.');
    scene.text('Krystal raises and eyebrow, saying, "Expecting something different?"');
    scene.text('"No! No! I-!" You stop yourself mid sentence as you realize you\'re too deep to back out now. "Well… It\'s just that Anastasia told me that she uses- er, that sex is a good way of staying in shape. I just thought you know… with your other job at the porn studio and your boyfriend and all that…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/7.jpg');
    scene.text('"Ohhh, I get it now. Because of what Anastasia said, you thought that I stayed this thin just because I\'m fucking constantly. Well, she\'s is half right. Sex <i>is</i> good for burning calories and I definitely prefer to get my aerobic exercise in the bedroom with Ben instead of on a treadmill, but a body like this takes more maintenance than that just fucking."');
    scene.text('"How so?" you ask.');
    scene.text('"Well, if you look at me," she says, getting up on her knees and straightening her posture. "You\'ll see my tummy isn\'t just flat, it\'s tight. And the same goes for the rest of my body. You can only get muscle tone like this by lifting weights and stuff." You nod understandingly.');
    scene.text('"Oh, okay. I think I get it now. Thanks Krystal!" You\'re pretty surprised. A conversation you thought was going to be all about Krystal having sex with her boyfriend actually turned out to have some pretty decent advice for health and fitness.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/10.jpg');
    scene.text('Suddenly you realize Krystal is giving you a weird look.');
    scene.text('"W-What…?" you stammer. "Is there something on my face?"');
    scene.text('"No…" she says while eyeing you up. "I just wanted you to know that if you ever want to do some uhh… \'fat burning exercises\' with me and Ben… you\'re more than welcome to join us." She gives you another smirk as she bites her lip.');
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    scene.text('You break eye contact with her and look away, blushing furiously and try to mumble some kind of response. "I… uhh… ummm… yeah…"');
    scene.text('<i>What the hell am I even supposed to say to that?</i> you think to yourself.');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
      { label: 'I\'ll think about it', handler: (st: GameState) => {
    scene.text('"I\'ll think about it…" you smile.');
    scene.text('<i>Especially before bed tonight…</i> you think to yourself.');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
    ]);
  } },
    { label: 'Talk about movies', handler: (st: GameState) => {
    ((s as any).krystal = (s as any).krystal ?? {})['movie'] = Math.floor(Math.random() * 4) + 1;
    if (((s as any).krystal ?? 0)?.['movie'] === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
      scene.text('"See any good movies lately Krystal?"');
      scene.text('"Oh yeah! I love going to the movies! I just went to see that new superhero one with my boyfriend last week!"');
      scene.text('"Oh! Was it good?"');
      scene.text('"Yeah! Er… Not really…? Uhmm… Honestly, I don\'t remember. I got distracted sucking Ben\'s cock…"');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal ?? 0)?.['movie'] === 2) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
      scene.text('"See any good movies lately Krystal?"');
      scene.text('"Oh yeah! I love going to the movies! I just went to see that new horror movie with my boyfriend last week!"');
      scene.text('"Do you like horror movies?"');
      scene.text('"I love going to see horror movies! With all the screaming going on, Ben can get rough and I love trying to see if I can make people think my screams are part of the movie. Besides, horror movies have all the best sex scenes."');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal ?? 0)?.['movie'] === 3) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/11.jpg');
      scene.text('"See any good movies lately Krystal?"');
      scene.text('"Oh yeah! I love going to the movies! I just went to see that new romcom with my boyfriend last week!"');
      scene.text('"Did you think it was funny? Worth watching?"');
      scene.text('"Not really. But it was hard to concentrate on any of the jokes with Ben\'s cock up my ass and my nipples being pulled through my shirt."');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
    if (((s as any).krystal ?? 0)?.['movie'] === 4) {
      scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/8.jpg');
      scene.text('"See any good movies lately Krystal?"');
      scene.text('"Oh yeah! I love going to the movies! I just went to see that new drama with my boyfriend last week!"');
      scene.text('"I\'ve heard good things about that! Was it as good as they say?"');
      scene.text('"I thought it was just okay but I\'m probably not a good judge," she says with a shameless grin. "Ben had me bent over like this into the aisle so I couldn\'t see the screen that well."');
      scene.actions([
        { label: 'Keep chatting', goto: ['model_krystal', 'krystal_chat'] },
      ]);
    }
  } },
    { label: 'Talk about sex', goto: ['model_krystal', 'krystal_sextalk'] },
  ]);
  scene.build();
}

function enterKrystalSextalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/face.jpg');
  scene.text('"My fav subject. What about it babe?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
    scene.text('"Alright. It was fun chatting with you Krystal. I gotta get going though."');
    scene.text('"Okay. See you later babe!"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: '"What\'s your favorite position?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/6.jpg');
    scene.text('"Favorite position? I know I mentioned this before but I absolutely <i>love</i> being gangbanged. A cock in each hand, one in each hole, and someone to throat fuck me is the best. It makes me feel like a fucking goddess! But it\'s so hard to get enough people for that. I pretty much only get to do it when I\'m shooting porn. Even then, most times I just have to settle for a regular DP scene."');
  } },
    { label: '"What\'s been your best sexual experience?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/8.jpg');
    scene.text('"Best fuck ever? Oh, let me tell you! There\'s this shoot that we occasionally do at the porn studio where they get 50 fans to all gangbang one girl. We don\'t get to do it very often because the producers don\'t want to oversaturate the market and you need a pretty famous porn star to do it but I got to do one after my first year. It was a cock carnival! Every hole, endless cum, hours and hours, and you never have to choose what you want, you can just do it all! Facials, creampies, titjobs, you name it, I got to do it for six hours. There was so much cum that I was still leaking by the time Ben got his cock in me at home. I only get to do it once every year, but that first time was really magical."');
  } },
    { label: '"What\'s your sex life at home like?"', handler: (st: GameState) => {
    if (((s as any).krystal ?? 0)?.['sex_life'] === 0) {
      ((s as any).krystal = (s as any).krystal ?? {})['sex_life'] = 1;
    }
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/12.jpg');
    scene.text('"Pretty good I\'d say. Ben and I probably do it at least, what, four or five times a day? In the morning Ben usually wakes me up with a good pounding. If we have a porn shoot then we\'ll fuck on camera. If not, sometimes he drops by the studio for a quickie. Then after work we\'ll fuck before dinner. After dinner we usually relax by watching a movie while I give him head. And then one more good night fuck in bed? Sometimes he wakes me up in the night to do it again but I wouldn\'t say we do that <i>too</i> often. Maybe twice a week. Oh shit. That\'s not five, that\'s six."');
  } },
    { label: '"How do you feel about blowjobs?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/11.jpg');
    scene.text('"Blowjobs? Fucking love em\'. There\'s something I just can\'t describe about having a thick cock in my mouth. The taste, the smell, the feeling of my tongue running over it. Everything about blowjobs are great. Though the best is definitely making eye contact with a guy when he cums in your mouth. Ever try it? If you haven\'t, you need to!"');
  } },
    { label: '"Do you have a type?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/1.jpg');
    scene.text('"Oh sure. I prefer the type that are cut, ones who have girth and a real hardness to them, you know? The kind that won\'t bend over just because you put them in an awkward position. But contrary to other girls, I don\'t like them to be too long. A sizeable length is good, but I want to be able to take them to the hilt, get their full length inside of me, not just most of it, you know? And if they can cum lots that\'s always a bonus but- Oh. You\'re talking about guys. Well, in that case, any guy with a dick like that is my type."');
  } },
    { label: '"Are you into exhibitionism?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/krystal_b/talking/10.jpg');
    scene.text('"Are you asking me just because I do porn? Nah, I\'m just in it for the fucking, I don\'t really care if people see me or not. Sometimes if Ben and I are out on a date and we can\'t wait, I\'ll fuck him in the bathroom or in an alley on the way home or something, but it\'s not like I\'m thrill seeking. I\'m just not shy. And I\'m really impatient."');
  } },
    { label: '"Let\'s talk about something else"', goto: ['model_krystal', 'krystal_chat'] },
  ]);
  scene.build();
}

function enterKrystalshower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/cuni2.mp4');
  scene.text('As you head into the shower area, you\'re hit in the face by the unmistakable sound of someone moaning in pleasure.');
  scene.text('"Ahh! Yes! Just like that!"');
  scene.text('Sure enough, when you round the corner you see Krystal in one of the stalls with her boyfriend doing what sounds like an excellent job of eating her pussy out.');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You step into a stall and turn on the shower, trying your best to ignore what is going on while Krystal starts getting fucked from behind.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('Her boyfriend pushes her against the wall and pulls her leg up to get deep inside her. Krystal\'s moans and the sound of cock slamming into her pussy are too much for you and you can\'t stop yourself from placing the showerhead between your legs, massaging your pussy with powerful jets of warm water and fingers.');
    scene.text('Your voices start to sync together, echoing out of the stalls in perfect time with each other.');
    qspCall(s, 'arousal', 'voyeur_sex', (-10));
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 2) {
      qspCall(s, 'mood', 'raise', 'small');
      scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
      scene.text('Her boyfriend pulls out of her and she jacks him off furiously until he spatters her belly with his cum.');
      qspCall(s, 'arousal', 'voyeur_sex', (-10));
      (s as any).orgasm_or = 'no';
      qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
      (s as any).orgasm_or = 'no';
      qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
      (s as any).orgasm_or = 'yes';
      (s as any).orgasm_txt = 'You feel a warm wave spreading over your entire body and orgasm, biting your lip hard to suppress the scream that wants to come out. You can\'t believe that you just masturbated in the studio showers to Krystal having shower sex with her boyfriend…';
      qspCall(s, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Dry off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_3.jpg');
    // TODO-QSP: dynamic text: You shyly towel off and start to go when you hear Krystal whisper, "Was it good ...
    scene.text(`You shyly towel off and start to go when you hear Krystal whisper, "Was it good for you too ${((s as any).model ?? 0)?.['nickname'] ?? ''}?"`);
    scene.text('Blushing hard you put your towel in the bin and go back to the main floor of the studio.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'mood', 'raise', 'small');
      scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
      scene.text('Her boyfriend pulls out of her and she jacks him off furiously until he spatters her belly with his cum.');
      (s as any).orgasm_or = 'no';
      qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
      (s as any).orgasm_or = 'no';
      qspCall(s, 'arousal', 'clit_vibe', (-5), 'masturbate', 'exhibitionism');
      (s as any).orgasm_or = 'yes';
      (s as any).orgasm_txt = 'You loudly groan as you shudder in orgasm, relishing the beautiful image of Krystal\'s boyfriend\'s cum all over her.';
      qspCall(s, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Dry off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_2.mp4');
    scene.text('You start to towel off, widely smiling at Krystal who is washing the cum off her body.');
    scene.text('She smiles back at you. "Maybe you\'d like to join us next time?"');
    scene.text('"Maybe, we\'ll see!" you say with a smirk.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Dry off', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/leg_up2.mp4');
    scene.text('You start to towel off looking a little enviously at Krystal when her boyfriend pushes her against the wall and starts to take her from the front.');
    scene.text('You take one last look with a bit of regret and go back to the main floor of the studio.');
    qspCall(s, 'arousal', 'voyeur_sex', (-10));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Dry off', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/leg_up2.mp4');
    scene.text('You shyly towel off, still doing your best to ignore the wild and unashamed sex of your co-worker and her boyfriend, who have now switched positions so Krystal\'s back is to the wall with her leg up and his big fat cock now pummelling her from the front.');
    scene.text('As you finish drying off you realize how wet between the legs you are. Blushing hard you put your towel in the bin and go back to the main floor of the studio.');
    qspCall(s, 'arousal', 'voyeur_sex', (-30));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'studio'] },
    { label: 'Go to your makeup station', goto: ['foto', 'makeup'] },
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
    case 'krystal_porn_card2':
      enterKrystalPornCard2(s, scene);
      break;
    case 'krystal_porn_card2_end':
      enterKrystalPornCard2End(s, scene);
      break;
    case 'krystal3':
      enterKrystal3(s, scene);
      break;
    case 'krystal4':
      enterKrystal4(s, scene);
      break;
    case 'krystal5':
      enterKrystal5(s, scene);
      break;
    case 'krystal_chat':
      enterKrystalChat(s, scene);
      break;
    case 'krystal_sextalk':
      enterKrystalSextalk(s, scene);
      break;
    case 'krystalshower':
      enterKrystalshower(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const model_krystal: LocationDef = {
  name: 'model_krystal',
  title: 'You\'ve run out of shampoo and will have to buy some more bef',
  region: 'other',
  enter: enter,
};
