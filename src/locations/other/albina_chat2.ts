import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstModelTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    scene.actions([
      { label: 'I do some modelling', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_model'] = ((s as any).daystart ?? 0);
    if (((s as any).fame ?? 0)?.['pav_modelling'] >= 400  &&  ((s as any).stat ?? 0)?.['school_knows_model'] === 0) {
      scene.text('"I… Do some modelling in the city…" you admit slowly.');
      scene.text('Her eyes go wide. "Holy shit! The rumors are true!" she shouts gleefully, suddenly punching you in the arm.');
      scene.text('"Ow! What rumors?" you ask in sudden bewilderment.');
      scene.text('"The ones about a model that looks like you!" she grins. "I figured they had to be bullshit, but this means it really is you! Why would you hide that from me?"');
    } else {
      scene.text('"I… Do some modelling in the city…" you admit slowly. Albina\'s eyes go wide right before she swiftly punches you in the arm. "Ow! What the hell!"');
      scene.text('"You\'ve been modelling this whole time and you\'re only just telling me now?" she says, managing to look betrayed while wearing a huge smile at the same time. "Why would you hide that from me?"');
    }
    if (((s as any).age ?? 0) < 18) {
      scene.text('"It\'s not…" you say hesitantly. "Strictly speaking… Legal…"');
      scene.text('Her eyes narrow. "Why? What kind of modelling are you doing?" she asks suspiciously.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy1(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk2(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkProud2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'I didn\'t want people to know', handler: (st: GameState) => {
    scene.text('"I just didn\'t want to spread it around," you mumble. "Word gets around town fast, you know? Could you imagine what my mother would say if she found out?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says, looking at you seriously. "I've kept secrets a lo...
    scene.text(`"${((s as any).pcs_nickname || '')}," she says, looking at you seriously. "I've kept secrets a lot worse than this over the years. I would've kept this one. Don't you trust me?"`);
    scene.text('She looks away from you, seeming genuinely offended that you didn\'t tell her until now.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstModelTalkProud2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her (proud)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).model ?? 0)?.['type'] === 'catalog') {
      scene.text('"Catalogue modelling!" you say with bubbly excitement. "The kind that you see on websites to show what\'s for sale or in magazines with a company\'s stock. It\'s not much right now, but it\'s a foot in the door!"');
      scene.text('"Why didn\'t you tell me sooner?!" she squeals gleefully.');
      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "And since I'm underage, I have to keep it on...
      scene.text('"It\'s an 18+ agency," you explain. "And since I\'m underage, I have to keep it on the down low. I needed a fake passport just to get registered there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).model ?? 0)?.['type'] === 'fashion') {
        scene.text('"Fashion modelling!" you whisper excitedly. "Fancy dresses, designer clothing, all the stuff you see in magazines but never actually see people wearing in real life. <i>I</i> get to wear that!"');
        scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "Why are you hiding it?"');
        // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
        scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).model ?? 0)?.['type'] === 'lingerie') {
          scene.text('"I\'m a freaking lingerie model!" you whisper excitedly. "High end bras and panties, brand names like Victoria\'s Secret and Mon Cheri!"');
          scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "You\'re a goddamn supermodel! Why are you hiding it?"');
          // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
          scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).model ?? 0)?.['type'] === 'glamour') {
            if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
              scene.text('"I do glamour modelling!" you whisper excitedly. "Sexy shoots with tight or thin clothing, a lot of cleavage and a lot of leg. I\'ve even gone topless!"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              scene.text('"I do glamour modelling!" you whisper excitedly. "Sexy shoots with tight or thin clothing, a lot of cleavage and a lot of leg. Sometimes my ass too, but never my tits or pussy. They do that kind of modelling there too though."');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).model ?? 0)?.['type'] === 'fitness') {
              if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                scene.text('"I model a lot of sports clothing," you say proudly. "But I do other stuff too. I\'ve even shown off my tits!"');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                scene.text('"I model a lot of sports clothing," you say proudly. "Sports bras and tight yoga pants and stuff like that. Pretty cool, huh? They do all kinds of modelling there. Even nude modelling."');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              if (((s as any).model ?? 0)?.['type'] === 'artistic nude') {
                scene.text('"Nude modelling!" you squeal in a hushed but excited tone.');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).model ?? 0)?.['type'] === 'erotic') {
                  scene.text('"Erotic nude modelling!" you squeal in a hushed but excited tone.');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
                    scene.text('"All kinds of modelling," you say excitedly. "I\'ve even done nudes!"');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                      scene.text('"All kinds of modelling," you say excitedly. "I\'ve even gone topless!"');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      scene.text('"All kinds of modelling," you say excitedly. "High end fashion. Lacy lingerie. Tight clothing, thin material. You name it."');
                      scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! "Why are you hiding it?"');
                      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
                      scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her (nonchalant)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).model ?? 0)?.['type'] === 'catalog') {
      scene.text('"Just some catalogue modelling," you say nonchalantly. "You know, the kind that you see on websites to show what\'s for sale. No big deal."');
      scene.text('"Why all the secrecy then?" she asks curiously.');
      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
      scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).model ?? 0)?.['type'] === 'fashion') {
        scene.text('"Fashion modelling mostly," you say, shrugging nonchalantly. "Fancy dresses, designer clothing, all the stuff you see in magazines but never actually see people wearing in real life."');
        scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "Why are you hiding it?"');
        // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
        scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).model ?? 0)?.['type'] === 'lingerie') {
          scene.text('"I\'m a lingerie model," you say, shrugging casually. "High end bras and panties. Sexy stuff, usually made with lace. The kind Katja might buy."');
          scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "You\'re a goddamn supermodel! "Why are you hiding it?"');
          // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
          scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).model ?? 0)?.['type'] === 'glamour') {
            if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
              scene.text('"Mostly glamour stuff," you say. "But you can see my tits in some of them. Not exactly something I want to spread around school."');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              scene.text('"It\'s pretty risqué stuff," you say while shrugging. "Thin material. Form fitting. A lot of exposure. Not the kind of stuff I want floating around school. They do other stuff there too. Erotic nudes and all that."');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).model ?? 0)?.['type'] === 'fitness') {
              if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                scene.text('"Mostly sports related stuff," you say. "But you can see my tits in some of them. Not exactly something I want to spread around school."');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                scene.text('"Mostly sports related stuff," you say while shrugging. "But it\'s pretty risqué. Sports bras and tight yoga pants and stuff like that. Not the kind of stuff I want floating around school. The kind I could imagine most of our classmates jacking off to. They do other stuff there too. Erotic nudes and all that."');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              if (((s as any).model ?? 0)?.['type'] === 'artistic nude') {
                scene.text('"Mostly nude modelling," you shrug casually. "You can imagine why I want to keep that on the down low."');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).model ?? 0)?.['type'] === 'erotic') {
                  scene.text('"Erotic nudes mostly," you admit, shrugging casually. "<i>Really</i> sexual. You can practically see right up my pussy in some of them. Not exactly the kind of stuff I want getting spread around school."');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
                    scene.text('"It\'s kind of risqué," you say, shrugging casually. "I\'ve done a few nudes."');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                      scene.text('"It\'s kind of risqué," you say, shrugging casually. "You can see my tits in some of the stuff I\'ve done. Not exactly the kind of stuff I want getting spread around school"');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk4(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      scene.text('"All kinds of stuff," you say, shrugging casually. "High end fashion. Lacy lingerie. Tight clothing, thin material. You name it."');
                      scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! "Why are you hiding it?"');
                      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
                      scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalk3(s: GameState, scene: SceneBuilder): void {
  scene.text('"Nude modelling?" she asks, her eyes glittering with sudden interest. "Have <i>you</i> done any?"');
  if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
    if (((s as any).modelfoto ?? 0)?.['topless'] > 20) {
      scene.text('"I go topless a lot," you say without hesitation. "Never done a full nude, though."');
      scene.text('"Still hot," she grins."');
    } else {
      if (((s as any).modelfoto ?? 0)?.['topless'] > 5) {
        scene.text('"I go topless now and then," you say without hesitation. "Never done a full nude, though."');
        scene.text('"Still hot," she grins."');
      } else {
        scene.text('"I\'ve done a few topless shoots," you say without hesitation. "Not many though, and I\'ve never done a full nude."');
        scene.text('"Sexy…" she grins."');
      }
    }
  } else {
    if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
      scene.text('You shake your head. "I\'ve never gone full nude or topless. You can see my nipples in some of the shoots I\'ve done, though."');
      scene.text('"Sexy…" she grins."');
    } else {
      scene.text('You shake your head. "No. I\'ve never gone full nude or topless."');
      scene.text('Albina frowns, looking <i>very</i> disappointed.');
    }
  }
  qspCall(s, 'albina_chat', 'small_talk');
  // TODO-QSP: end
  scene.build();
}

function enterFirstModelTalk4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
    scene.text('"You\'re <i>naked</i> in these?!" Her eyes go wide and she scrambles for her laptop. "Oh, I <i>gotta</i> see these pics!"');
  } else {
    if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
      scene.text('"You\'re <i>topless</i> in these?!" Her eyes go wide and she scrambles for her laptop. "Oh, I <i>gotta</i> see these pics!"');
    }
  }
  if (((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_firstname ?? 0)  ||  ((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)) {
    scene.actions([
      { label: 'It\'s not my name (lie)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You\'re not gonna find anything just Yandexing my name," you tell her, dramatically rolling your eyes. "Do you really think I\'m stupid enough to use my real name for nude modelling?"');
    scene.text('She stops and turns to look at you with a frown. You snicker internally, but manage to maintain a straight face, hoping she won\'t see through your bluff.');
    scene.text('"Fuck!" she pouts. "Tell me what to search!"');
    scene.text('"Nope! You\'re never finding those pics," you reply smugly, enjoying the feeling of pulling one over on her.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Let her search', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('Albina searches and quickly finds your profile.');
    scene.text('"You didn\'t even change your name?" she snickers.');
    if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_nickname ?? 0)) {
      scene.actions([
        { label: 'It\'s my nickname (protest)', handler: (st: GameState) => {
    scene.text('"It\'s not like it\'s my real legal name," you protest weakly.');
    scene.text('"Still found you in all of two minutes of searching," she smirks before clicking a link that leads straight to your nude debut.');
    scene.actions([
      { label: 'Look at the photos', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude1');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'It seemed wrong', handler: (st: GameState) => {
    scene.text('"It felt weird going by something that wasn\'t my name," you shrug as she clicks a link you know leads straight to your nude debut. "My name is who I am after all."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude1');
  } },
    ]);
  } },
      { label: 'It was a hassle', handler: (st: GameState) => {
    scene.text('"It felt like a hassle, needing to remember to go by different names and all that," you shrug as she clicks a link you know leads straight to your nude debut.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude1');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'It\'s not my name', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You\'re not gonna find anything just Yandexing my name," you tell her, dramatically rolling your eyes. "Do you really think I\'m stupid enough to use my real name for nude modelling?"');
    scene.text('She stops and turns to look at you with a frown. You give her a stare and she stares back.');
    scene.text('"Damn it!" she pouts. "Tell me what to search!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkTell(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Let her search', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('Albina searches for you using your real name, but can\'t find it because you used a pseudonym.');
    scene.text('"Why can\'t I find you?!" she grumbles in frustration.');
    scene.text('"I don\'t use my <i>actual</i> name when modelling," you say. "Do you think I\'m crazy?"');
    scene.text('"Come ooooonnn!" she moans. "Tell me what to search!"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkTell(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"No!" you squeal, grabbing her by the arm to stop her. Albina back looks at you, bewildered.');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 1;
    scene.text('"I don\'t mind that you know what I do, but I don\'t want you to look. Please…" you say, looking deep into your friend\'s eyes. Albina stares back tenderly, putting her other hand on top of yours.');
    scene.text('"Okay, I won\'t," she says. "I\'m sorry. I was just teasing you. I didn\'t think- No, it doesn\'t matter what I thought. I promise, I won\'t go looking for naked pictures of you on the internet for everyone to see."');
    scene.text('The twinkle in her eye lets you know she\'s kidding and she really won\'t go looking, but Albina being Albina means that she has to pretend nothing serious happened.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkTell(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Nope', handler: (st: GameState) => {
    scene.text('"Nope! You\'re never finding those pics," you reply smugly, enjoying a rare moment of superiority over your friend.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Tell her', handler: (st: GameState) => {
    scene.text('You spend a few seconds considering tantalizing her with the knowledge, but you eventually relent.');
    // TODO-QSP: dynamic text: "Okay, okay," you snicker. "I go by <<$model['firstname']>> <<$model['lastname']...
    scene.text(`"Okay, okay," you snicker. "I go by ${((s as any).model ?? 0)?.['firstname'] ?? ''} ${((s as any).model ?? 0)?.['lastname'] ?? ''}."`);
    scene.text('Her eyes light up and she immediately starts clicking away on the keyboard. Moments later, she\'s clicking a link that you know leads to your nude debut.');
    scene.actions([
      { label: 'Look at the photos', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkNude1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/shoots/nude/debut/1.jpg');
  scene.text('Her eyes go wide as a gallery fills the screen.');
  scene.text('"Woah! You\'re so fucking hot!" she says, openly gaping at the full frontal nude pictures of you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('You thought you weren\'t embarrassed by this line of talk, but it\'s hard not to be when the actual pictures are right in front of you, especially when Albina expands them to full screen and takes advantage of the high definition to zoom <i>very</i> far in. A warm blush spreads through your cheeks.');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Hey!" she says, zooming in on your pussy. "I thought you didn\'t shave?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Embarrassed pride', handler: (st: GameState) => {
    scene.text('"I know, right?" you grin. A warm blush spreads through your cheeks despite your pride in your work, unable to help but be a little embarrassed as Albina expands the images to full screen and takes advantage of the high definition to zoom <i>very</i> far in.');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"I can\'t believe you were hiding these from me!" she exclaims. "By the way, what\'s the deal here? I thought you didn\'t shave?"');
      scene.text('She zooms way in on your crotch, getting a close up of your cleanshaven pussy.');
    } else {
      scene.text('"I can\'t believe you were hiding these from me!" she exclaims. "These photos are incredible!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Stay casual', handler: (st: GameState) => {
    scene.text('"Not bad, are they?" you smirk, amused by the look of excitement on Albina\'s face as she rapidly clicks through the photos, often expanding them to full screen to take advantage of the high definition and zoom <i>very</i> far in.');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"I can\'t believe you were hiding these from me!" she exclaims. "By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She zooms way in on your crotch, getting a close up of your cleanshaven pussy.');
    } else {
      scene.text('"I can\'t believe you were hiding these from me!" she exclaims. "These photos are incredible!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'re just saying that', handler: (st: GameState) => {
    scene.text('"You\'re just saying that," you remark skeptically, even as she furiously clicks through them, expanding them to full screen and even zooming in at times, especially on your "womanly features."');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Fuck no!" she exclaims. "Why would I lie? Just looking at these makes me want to eat you out right now! I can\'t believe you were hiding them from me! By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She takes advantage of the high resolution and zooms way in on your pussy, getting a close up of your cleanshaven lips.');
    } else {
      scene.text('"Fuck no!" she exclaims. "Why would I lie? Just looking at these makes me want to eat you out right now!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Professional pride', handler: (st: GameState) => {
    scene.text('"It turned out well, didn\'t it?" you smile as she furiously clicks through them, expanding them to full screen and going out of her way to zoom in on your tits and pussy. "It was a big step for me."');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"I can\'t believe you were hiding this from me!" she exclaims. "By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She zooms way in on your crotch, getting a close up of your cleanshaven pussy.');
    } else {
      scene.text('"I can\'t believe you were hiding these from me!" she exclaims. "These photos are incredible!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Self centered pride', handler: (st: GameState) => {
    scene.text('"Fuck yeah I do," you grin, even ogling yourself a little as she furiously clicks through them, expanding them to full screen and even zooming in at times, especially on your "womanly features."');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Modest, aren\'t we?" she snickers. "I can\'t believe you were hiding this from me! By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She zooms way in on your crotch, getting a close up of your cleanshaven pussy.');
    } else {
      scene.text('"Modest, aren\'t we?" she snickers. "I can\'t believe you were hiding this from me! These photos are incredible!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkNude2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudePubesShaved(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('She starts saving the images to her hard drive and rapidly clicking through other websites, bookmarking them.');
    scene.text('"What are you doing?" you ask, confused.');
    scene.text('"What\'s it look like I\'m doing?" she replies with a salty smirk. "Saving these so I can schlick off to them later!"');
    scene.text('"You are not!" you gape, horrified.');
    scene.text('"Ab-so-fucking-lutely," she grins in response. "But seriously. What made you go nude?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstModelTalkNude3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).foto ?? 0)?.['suborn'] > 0) {
    scene.actions([
      { label: 'I was pressured into it', handler: (st: GameState) => {
    scene.text('"I didn\'t want to," you say. "I was… I had been working there for a while so they asked. I said no, but then they kept asking. Eventually they just… Talked me into it."');
    scene.text('You trail off and Albina\'s grin melts away, her expression becoming somber.');
    // TODO-QSP: dynamic text: "Oh. That's… I'm sorry <<$pcs_nickname>>…" She looks away. "I didn't… I didn't r...
    scene.text(`"Oh. That's… I'm sorry ${((s as any).pcs_nickname || '')}…" She looks away. "I didn't… I didn't realize it was like that…"`);
    scene.text('You sit in silence for a few moments before Albina turns back towards you tentatively.');
    scene.text('"Do you regret it?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"No." You give her a smile. "Whatever the underhanded reason they got me to do it, once it was done, I didn\'t regret it."');
    scene.text('"Well… you <i>are</i> pretty hot in them aren\'t you?" she says, encouraged by your response.');
    scene.text('"Only \'pretty hot\'?" you tease back and she laughs aloud.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Not anymore', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Not anymore," you shake your head. "I <i>did</i> regret it for a while, but after some time, I got used to the idea. I\'m happy I did it."');
    scene.text('"Well… you <i>are</i> pretty hot in them aren\'t you?" she says, encouraged by your response.');
    scene.text('"That helped me a lot to get over it," you grin back and she laughs aloud.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes (thought I wanted it)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I do," you say solemnly. "I thought it would be sexy, feel empowering. But once it started, I just felt… I realized I didn\'t want it anymore. But I couldn\'t take it back. And now those pictures of me are out there. On the internet or in a magazine and… I wish I could take it all back."');
    scene.text('Albina leans her head against your shoulder, saying nothing as the two of you sit in silence for a few minutes.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes (felt pressured)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I do," you say solemnly. "I just wanted to get them off my back and I crossed a line that… I can\'t uncross now. I should\'ve stood my ground…"');
    scene.text('Albina leans her head against your shoulder, saying nothing as the two of you sit in silence for a few minutes.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I asked', handler: (st: GameState) => {
    scene.text('"I asked for it," you shrug.');
    scene.text('"You asked?" She laughs out loud. "Why\'d you do that?"');
    scene.text('"Because I wanted to!" you laugh back. "Lay off, will you?"');
    scene.text('"I\'m gonna refresh this page every day looking for your latest shoots," she grins.');
    scene.text('Despite your protests, Albina continues teasing you for several more minutes before letting you change the subject.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'For my career', handler: (st: GameState) => {
    scene.text('"I thought it would be good for my career," you say. "I didn\'t <i>want</i> to, but everyone says that you have to bare it all at some point."');
    scene.text('"For a girl who didn\'t want it, you don\'t seem so embarrassed to tell me," she grins.');
    scene.actions([
      { label: 'I got used to it', handler: (st: GameState) => {
    if (((s as any).modelfoto ?? 0)?.['nude'] > 24) {
      scene.text('"I got used to it," you shrug. "I\'ve done dozens of nude shoots now. A little late to stay embarrassed."');
    } else {
      scene.text('"I got used to it," you shrug. "I\'ve had time to come to terms with it. Maybe I regretted it at the time, but I don\'t regret it now. Isn\'t that what matters?"');
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'I trust you', handler: (st: GameState) => {
    scene.text('"I trust you," you smile. "It\'s different if I know it\'s just you looking."');
    scene.text('Albina smiles back, lacing her fingers through yours.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    { label: 'For the cash', handler: (st: GameState) => {
    scene.text('"I just wanted the money," you grin. "They pay double for your nude debut, you know."');
    scene.text('"Must\'ve been a good deal for them because I know for a fact that you look <i>great</i> naked," she grins.');
    scene.text('"Stop it!" you say, pushing her backwards with a mock shove.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'I really needed the money (to pay off)', handler: (st: GameState) => {
    scene.text('"I really needed the money," you say, uncomfortably. "I owed some people money and I was desperate. They pay double for your nude debut so I just thought…"');
    scene.text('You trail off and Albina\'s grin melts away, her expression becoming somber.');
    // TODO-QSP: dynamic text: "Oh. That's… I'm sorry <<$pcs_nickname>>." She shuts the laptop and pushes it aw...
    scene.text(`"Oh. That's… I'm sorry ${((s as any).pcs_nickname || '')}." She shuts the laptop and pushes it away. "I shouldn't have teased you. I didn't… I didn't realize it was like that…"`);
    scene.text('"It\'s okay," you assure her. "I\'m over it now. It\'s in the past."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkNudePubesShaved(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_shave'] = 1;
  if (((s as any).modelfoto ?? 0)?.['nude_shave_no'] === 1) {
    scene.actions([
      { label: 'They made me (liked bush)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_shave'] = 2;
    scene.text('"They made me do it," you sigh. "This is my nude debut. The studio\'s policy is that models have to go cleanshaven for their first nude set. I didn\'t want to do it, but they refused to do the shoot unless I did. I really liked my bush! I was so annoyed at how long it took to grow back!"');
    scene.text('Albina\'s grin fades and takes on a more somber expression as she scrolls through the pictures of you with new eyes.');
    if (((s as any).AlbinaQW ?? 0)?.['shave_story'] === 1) {
      scene.text('"I told you about why I started shaving, didn\'t I?" she asks in a flat tone, referring to what she told you while you were both drunk after the pool. "What you said reminds me of that."');
      // TODO-QSP: dynamic text: She shuts the screen of the laptop and pushes it away. "I'm sorry <<$pcs_nicknam...
      scene.text(`She shuts the screen of the laptop and pushes it away. "I'm sorry ${((s as any).pcs_nickname || '')}," she says tenderly. "Maybe we should talk about something else?"`);
    } else {
      // TODO-QSP: dynamic text: "That's really shitty, <<$pcs_nickname>>," she says before abruptly shutting the...
      scene.text(`"That's really shitty, ${((s as any).pcs_nickname || '')}," she says before abruptly shutting the screen of the laptop. "Let's talk about something else."`);
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'They made me (pressured)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_shave'] = 2;
    scene.text('"They made me do it," you sigh. "This is my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set. I didn\'t want to do it, but they refused to do the shoot unless I did."');
    scene.text('Albina\'s grin fades and takes on a more somber expression as she scrolls through the pictures of you with new eyes.');
    if (((s as any).AlbinaQW ?? 0)?.['shave_story'] === 1) {
      scene.text('"I told you about why I started shaving, didn\'t I?" she asks in a flat tone, referring to what she told you while you were both drunk after the pool. "What you said reminds me of that."');
      // TODO-QSP: dynamic text: She shuts the screen of the laptop and pushes it away. "I'm sorry <<$pcs_nicknam...
      scene.text(`She shuts the screen of the laptop and pushes it away. "I'm sorry ${((s as any).pcs_nickname || '')}," she says tenderly. "Maybe we should talk about something else?"`);
    } else {
      // TODO-QSP: dynamic text: "That's really shitty, <<$pcs_nickname>>," she says before abruptly shutting the...
      scene.text(`"That's really shitty, ${((s as any).pcs_nickname || '')}," she says before abruptly shutting the screen of the laptop. "Let's talk about something else."`);
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s a requirement', handler: (st: GameState) => {
    scene.text('"It\'s a requirement," you explain. "This was my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set."');
    scene.text('"Great fucking policy," she grins, practically drooling as she zooms in on your pussy in any photo where it\'s visible.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I wanted to', handler: (st: GameState) => {
    scene.text('"I wanted to," you shrug. "This was my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set, so it\'s not like I really had a choice. I guess I just thought that if I was gonna do it, then shaved was sexier."');
    scene.text('"Great choice," she grins, practically drooling as she zooms in on your pussy in any photo where it\'s visible.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNude2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkShy1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her (embarrassed)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).model ?? 0)?.['type'] === 'catalog') {
      scene.text('"Nothing bad!" you say hurriedly, holding your hands up in defense. "Just some stuff for catalogues. You know, the kind of stuff you see on G&M websites and stuff like that."');
      scene.text('"Why all the secrecy then?" she asks, not letting up.');
      // TODO-QSP: dynamic text: "It's an… 18+ agency…" you say. "I have a fake passport just to work there. They...
      scene.text('"It\'s an… 18+ agency…" you say. "I have a fake passport just to work there. They do… <i>other</i> stuff there too…"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).model ?? 0)?.['type'] === 'fashion') {
        scene.text('"Fashion modelling mostly," you say, shrugging uncomfortably. "Fancy dresses, designer clothing, all the stuff you see in magazines but never actually see people wearing in real life."');
        scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "Why are you so embarrassed about it?"');
        // TODO-QSP: dynamic text: "It's an 18+ agency," you say. "I have to use a fake passport just to work there...
        scene.text('"It\'s an 18+ agency," you say. "I have to use a fake passport just to work there. And they do… <i>other</i> stuff there too…"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).model ?? 0)?.['type'] === 'lingerie') {
          scene.text('"I\'m a… lingerie model?" you say, shrugging uncomfortably. "High end bras and panties. Sexy things, usually stuff with lace."');
          scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! Why are you so embarrassed about it?"');
          // TODO-QSP: dynamic text: "It's an 18+ agency," you say, rubbing your arm. "I have to use a fake passport ...
          scene.text('"It\'s an 18+ agency," you say, rubbing your arm. "I have to use a fake passport just to work there. And they do… <i>other</i> stuff there too…"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).model ?? 0)?.['type'] === 'glamour') {
            if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
              scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "You can… see my breasts in some of them…"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "High end bras and panties. Sexy things, usually stuff with lace."');
              scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! Why are you so embarrassed about it?"');
              // TODO-QSP: dynamic text: "It's an 18+ agency," you say, rubbing your arm. "I have to use a fake passport ...
              scene.text('"It\'s an 18+ agency," you say, rubbing your arm. "I have to use a fake passport just to work there. And they do… <i>other</i> stuff there too…"');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).model ?? 0)?.['type'] === 'fitness') {
              if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "You can… see my breasts in some of them…"');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "I do a lot of fitness related shoots. Sports bras and tight yoga pants and stuff like that."');
                scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! Why are you so embarrassed about it?"');
                // TODO-QSP: dynamic text: "It's an 18+ agency," you say, rubbing your arm. "I have to use a fake passport ...
                scene.text('"It\'s an 18+ agency," you say, rubbing your arm. "I have to use a fake passport just to work there. And they do… <i>other</i> stuff there too…"');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              if (((s as any).model ?? 0)?.['type'] === 'artistic nude') {
                scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "Most of the modelling I do is… nude…?"');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).model ?? 0)?.['type'] === 'erotic') {
                  scene.text('"It\'s kind of… <i>erotic</i>," you admit uncomfortably. "You can practically see right up my pussy in some of them…"');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
                    scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "I\'m… I\'m not wearing any clothes in some of them…"');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
                      scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "You can… see my breasts in some of them…"');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy4(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      scene.text('"It\'s kind of… risqué," you say, shrugging uncomfortably. "High end bras and panties. Sexy things, usually stuff with lace."');
                      scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! Why are you so embarrassed about it?"');
                      // TODO-QSP: dynamic text: "It's an 18+ agency," you say, rubbing your arm. "I have to use a fake passport ...
                      scene.text('"It\'s an 18+ agency," you say, rubbing your arm. "I have to use a fake passport just to work there. And they do… <i>other</i> stuff there too…"');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkShy2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Like nude photography?" she asks in classic straight-to-the-point fashion.');
  scene.text('"Have <i>you</i> done any?" she then asks with a predatory smile.');
  if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
    scene.actions([
      { label: 'No (lie)', handler: (st: GameState) => {
    scene.text('"No!" you say quickly. "No way! I\'m not that desperate!"');
    // TODO-QSP: dynamic text: "Hmmm…" She looks at you suspiciously. "I don't believe you. Why don't we fire u...
    scene.text(`"Hmmm…" She looks at you suspiciously. "I don't believe you. Why don't we fire up my laptop and do a little search for your name online? '${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')} naked'"`);
    // TODO-QSP: dynamic text: She reaches for her laptop and you slap her hand down to the bed. She turns slow...
    scene.text(`She reaches for her laptop and you slap her hand down to the bed. She turns slowly, giving you a smug smirk. "Want to confess something ${((s as any).pcs_nickname || '')}?"`);
    scene.text('"No," you insist, putting your nose up at her. "I just don\'t want you to see any other pictures of me. It\'s embarrassing."');
    scene.text('"Oh, I am <i>so</i> going to schlick off to naked pictures of you later!" she grins.');
    scene.text('"You are not!" you gasp, mouth open wide.');
    scene.text('You start beating her with a pillow as she cackles maniacally the whole time.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Y-yes… I\'ve done a few…" you admit.');
    scene.text('Her eyes gleam and her lips crack into a wide grin. "Seriously? I can\'t believe it! What made you go nude?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.text('"No!" you say quickly. "I wouldn\'t. I mean, I couldn\'t. Could you imagine if any of the boys at school got hold of pictures like that?"');
    scene.text('"But what if <i>I</i> want pictures like that?" She bites her lip seductively, shamelessly eye fucking you.');
    if (((s as any).npc_had_sex ?? 0)?.['A23'] === 1) {
      scene.text('"Albina!" You give her a dry stare. "We\'ve fucked. What do you need pictures like that for?"');
      scene.text('"Maybe I want to get off on you while you\'re busy," she grins.');
    } else {
      scene.text('"I can\'t believe you," you scoff and she lets a smile break through.');
    }
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstModelTalkShy3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).foto ?? 0)?.['suborn'] > 0) {
    scene.actions([
      { label: 'I was pressured into it', handler: (st: GameState) => {
    scene.text('"I didn\'t want to," you say. "I was… I had been working there for a while so they asked. I said no, but then they kept asking. Eventually they just… Talked me into it."');
    // TODO-QSP: dynamic text: You trail off and Albina's grin melts away, her expression becoming somber. "Oh....
    scene.text(`You trail off and Albina's grin melts away, her expression becoming somber. "Oh. That's… I'm sorry ${((s as any).pcs_nickname || '')}…" She looks away. "I didn't… I didn't realize it was like that…"`);
    scene.text('You sit in silence for a few seconds before Albina turns back towards you tentatively.');
    scene.text('"Do you regret it?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"Actually… No." You give Albina a shy smile. "I\'m actually really glad that I did it, but it\'s still kind of embarrassing to tell you about it."');
    scene.text('"Well, don\'t be," she says, her eyes lighting up with your good humor. "You\'re hot as fuck naked!"');
    scene.text('"Stop it!" you say, your face turning crimson as you try to push her away and she laughs aloud.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes (thought I wanted it)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I do," you say solemnly. "I thought it would be sexy, feel empowering. But once it started, I just felt… I realized I didn\'t want it anymore. But I couldn\'t take it back. And now those pictures of me are out there. On the internet or in a magazine and… I wish I could take it all back."');
    scene.text('Albina leans her head against your shoulder, saying nothing as the two of you sit in silence for a few more minutes.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Yes (felt pressured)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"I do," you say, solemnly. "I just wanted to get them off my back and I crossed a line that… I can\'t uncross now. I should\'ve stood my ground."');
    scene.text('Albina leans her head against your shoulder, saying nothing as the two of you sit in silence for a few more minutes.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I asked', handler: (st: GameState) => {
    scene.text('"I told them I wanted to do one," you say, cheeks heating up.');
    scene.text('She laughs out loud. "Then why are you so embarrassed about this? You got what you asked for, didn\'t you?"');
    scene.text('"It\'s embarrassing to tell people I actually know!" you protest. "It\'s different when <i>you</i> know!"');
    scene.text('"Well, get used to it," she says, leaning back with a grin. "If you get famous off this, everyone you talk to will have seen your tits. Probably your pussy too."');
    scene.text('"Stop it!" you say, blushing even harder as you push her backwards, but she doesn\'t stop and you have to endure her teasing for several minutes longer.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'For my career', handler: (st: GameState) => {
    scene.text('"I thought it would be good for my career," you sigh. "I didn\'t <i>want</i> to, but everyone says that you have to bare it all at some point."');
    scene.text('"Must\'ve been a good deal for them because I know for a fact that you look <i>great</i> naked," she grins.');
    scene.text('"Stop it!" you say, pushing her backwards with a mock shove.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'I really needed the money (to buy)', handler: (st: GameState) => {
    scene.text('"I really needed the money," you say, uncomfortably. "I really wanted to buy something and I didn\'t have enough, so I just thought, <i>Well, I could just do a nude shoot…</i> They pay double for your nude debut."');
    scene.text('"Must\'ve been a good deal for them because I know for a fact that you look <i>great</i> naked," she grins.');
    scene.text('"Stop it!" you say, pushing her backwards with a mock shove.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'I really needed the money (to pay off)', handler: (st: GameState) => {
    scene.text('"I really needed the money," you say, uncomfortably. "I owed some people money and I was desperate. They pay double for your nude debut so I just thought…"');
    // TODO-QSP: dynamic text: You trail off and Albina's grin melts away, her expression becoming somber. "Oh....
    scene.text(`You trail off and Albina's grin melts away, her expression becoming somber. "Oh. That's… I'm sorry ${((s as any).pcs_nickname || '')}." She shuts the laptop and pushes it away. "I shouldn't have teased you. I didn't… I didn't realize it was like that…"`);
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkShy4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).model ?? 0)?.['type'] === 'glamour') {
    scene.text('Her eyes go wide. "You\'re naked in these?!"');
    scene.text('"I didn\'t say I was naked!" you protest.');
    scene.text('"Yeah yeah, who cares," she says, completely ignoring you while reaching for her laptop. "Your tits are out, that\'s what matters. I <i>gotta</i> see these pics!"');
  } else {
    scene.text('"You\'re <i>naked</i> in these?!" Her eyes go wide and she scrambles for her laptop. "Oh, I <i>gotta</i> see these pics!"');
  }
  if (((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_firstname ?? 0)  ||  ((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)) {
    scene.actions([
      { label: 'It\'s not my name (lie)', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You\'re not gonna find anything just Yandexing my name," you tell her, dramatically rolling your eyes. "Do you really think I\'m stupid enough to use my real name for nude modelling?"');
    scene.text('She turns to look at you with a frown. You cringe internally but manage to maintain a straight face, hoping she won\'t see through your bluff.');
    scene.text('"Damn it!" she pouts. "Tell me what to search!"');
    scene.text('"Nope! You\'re never finding those pics," you reply smugly, feeling the relief flood through you as she buys your lie.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Let her search', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('Albina searches and quickly finds your profile.');
    scene.text('"You didn\'t even change your name?" she snickers.');
    if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_nickname ?? 0)  ||  ((s as any).model ?? 0)?.['nickname'] === ((s as any).pcs_nickname ?? 0)) {
      scene.actions([
        { label: 'It\'s my nickname (protest)', handler: (st: GameState) => {
    scene.text('"It\'s not like it\'s my actual name," you protest weakly.');
    scene.text('"Still found you in all of two minutes of searching," she smirks before clicking a link that you suddenly realize leads straight to your nude debut.');
    scene.actions([
      { label: 'Look at the photos', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude_shy1');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    scene.text('You blush, but don\'t say anything as she clicks a link you know leads straight to your nude debut.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude_shy1');
  } },
    ]);
  } },
      { label: 'I wasn\'t thinking', handler: (st: GameState) => {
    scene.text('"I wasn\'t thinking about getting caught when I started working there," you mumble, feeling the color drain from your face as she clicks a link you know leads straight to your nude debut.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude_shy1');
  } },
    ]);
  } },
      { label: 'It seemed wrong', handler: (st: GameState) => {
    scene.text('"It felt weird going by something that wasn\'t my name," you mumble, feeling the color drain from your face as she clicks a link you know leads straight to your nude debut.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude_shy1');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'It\'s not my name', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"You\'re not gonna find anything just Yandexing my name," you tell her, dramatically rolling your eyes. "Do you really think I\'m stupid enough to use my real name for nude modelling?"');
    scene.text('She turns to look at you with a frown. You give her a stare and she stares back.');
    scene.text('"Damn it!" she pouts. "Tell me what to search!"');
    scene.text('"Nope! You\'re never finding those pics," you reply smugly, comfortable in the knowledge that she has no leads.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Let her search', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('Albina searches for you using your real name, but can\'t find it because you used a pseudonym.');
    scene.text('"Why can\'t I find it?!" she grumbles in frustration.');
    scene.text('"I don\'t use my <i>actual</i> name when modelling," you say. "Do you think I\'m crazy?"');
    scene.text('"Come ooooonnn!" she moans. "Tell me what to search!"');
    scene.actions([
      { label: 'Nope', handler: (st: GameState) => {
    scene.text('"Nope! You\'re never finding those pics," you reply smugly, comfortable in the knowledge that she has no leads.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      { label: 'Tell her', handler: (st: GameState) => {
    scene.text('After a moment of hesitation, you relent.');
    // TODO-QSP: dynamic text: "I can't believe I'm about to do this…" you sigh. "I go by <<$model['firstname']...
    scene.text(`"I can't believe I'm about to do this…" you sigh. "I go by ${((s as any).model ?? 0)?.['firstname'] ?? ''} ${((s as any).model ?? 0)?.['lastname'] ?? ''}."`);
    scene.text('Her eyes light up and she immediately starts clicking away on the keyboard. Moments later, she\'s clicking a link that you know leads to your nude debut.');
    scene.actions([
      { label: 'Look at the photos', handler: (st: GameState) => {
    qspCall(st, 'albina_chat2', 'first_model_talk_nude_shy1');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('"No!" you squeal, grabbing her by the arm to stop her. Albina looks at you, bewildered.');
    scene.actions([
      { label: 'Beg her', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_no_look'] = 1;
    scene.text('"Please…" you say, looking deep into your friend\'s eyes. Albina stares back tenderly, putting her other hand on top of yours.');
    scene.text('"Okay, I won\'t," she says. "I\'m sorry. I was just teasing you. I didn\'t think- No, it doesn\'t matter. I promise, I won\'t go looking for naked pictures of you on the internet for everyone to see."');
    scene.text('The twinkle in her eye lets you know she\'s kidding and she really won\'t go looking, but Albina being Albina means that she has to pretend nothing serious happened.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkNudeShy1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/shoots/nude/debut/1.jpg');
  scene.text('Her eyes go wide as a gallery fills the screen.');
  scene.text('"Woah! You\'re so fucking hot!" she says, openly gaping at the full frontal nude pictures of you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('You blush furiously as she furiously clicks through them, expanding them to full screen and even zooming in at times, especially on your "womanly features."');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Hey!" she says, zooming in on your pussy lips. "I thought you didn\'t shave?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Embarrassed pride', handler: (st: GameState) => {
    scene.text('"You really think so?" you ask. You blush furiously as she furiously clicks through them, expanding them to full screen and even zooming in at times, especially on your "womanly features," but deep inside your chest you also feel a certain warmth. Something that feels good to be recognized.');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Fuck yes!" she exclaims. "These photos are incredible! I can\'t believe you were hiding them from me! By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She takes advantage of the high resolution and zooms way in on your pussy, getting a close up of your cleanshaven lips.');
    } else {
      scene.text('"Fuck yes!" she exclaims. "These photos are incredible! I can\'t believe you were hiding them from me!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'re just saying that', handler: (st: GameState) => {
    scene.text('"You\'re just saying that," you remark skeptically, even as she furiously clicks through them, expanding them to full screen and even zooming in at times, especially on your "womanly features."');
    if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
      scene.text('"Fuck no!" she exclaims. "Why would I lie? Just looking at these makes me want to eat you out right now! I can\'t believe you were hiding them from me! By the way, what\'s the deal? I thought you didn\'t shave?"');
      scene.text('She takes advantage of the high resolution and zooms way in on your pussy, getting a close up of your cleanshaven lips.');
    } else {
      scene.text('"Fuck no!" she exclaims. "Why would I lie? These photos are incredible! I can\'t believe you were hiding them from me!"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFirstModelTalkNudeShy2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) > 10  &&  ((s as any).AlbinaQW ?? 0)?.['model_shave'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShyPubesShaved(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('She starts saving the images to her hard drive and rapidly clicking through other websites, bookmarking them.');
    scene.text('"What are you doing?" you ask, bewildered.');
    scene.text('"What\'s it look like I\'m doing?" she replies with a salty smirk. "Saving these so I can schlick off to them later!"');
    scene.text('"You are not!" You gape, horrified.');
    scene.text('"Ab-so-fucking-lutely," she grins in response. "But seriously. What made you go nude?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkShy3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstModelTalkNudeShyPubesShaved(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_shave'] = 1;
  if (((s as any).modelfoto ?? 0)?.['nude_shave_no'] === 1) {
    scene.actions([
      { label: 'They made me', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['model_shave'] = 2;
    scene.text('"They made me do it," you mumble shyly. "This is my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set. I didn\'t want to do it, but they refused to do the shoot unless I did."');
    scene.text('Her grin fades and takes on a more somber expression as she scrolls through the pictures of you with new eyes.');
    if (((s as any).AlbinaQW ?? 0)?.['shave_story'] === 1) {
      scene.text('"I told you about why I started shaving, didn\'t I?" she asks referring to that story she told you while you were both drunk after the pool. "What you said reminds me of that."');
      // TODO-QSP: dynamic text: She shuts the screen of the laptop and pushes it away. "I'm sorry <<$pcs_nicknam...
      scene.text(`She shuts the screen of the laptop and pushes it away. "I'm sorry ${((s as any).pcs_nickname || '')}," she says tenderly. "Maybe we should talk about something else?"`);
    } else {
      // TODO-QSP: dynamic text: "That's really shitty, <<$pcs_nickname>>," she says before abruptly shutting the...
      scene.text(`"That's really shitty, ${((s as any).pcs_nickname || '')}," she says before abruptly shutting the screen of the laptop. "Should we talk about something else?"`);
    }
    scene.text('You nod gratefully.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s a requirement', handler: (st: GameState) => {
    scene.text('"It\'s a requirement," you explain. "This was my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set."');
    scene.text('"Great fucking policy," she grins, practically drooling as she zooms in on your pussy in any photo where it\'s visible.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I wanted to', handler: (st: GameState) => {
    scene.text('"I wanted to," you mumble shyly. "This was my nude debut and the studio\'s policy is that models have to go cleanshaven for their first nude set, so it\'s not like I really had a choice. I guess I just thought that if I was gonna do it, then shaved was sexier."');
    scene.text('"Great choice," she grins, practically drooling as she zooms in on your pussy in any photo where it\'s visible.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstModelTalkNudeShy2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRecurrentModelTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"What\'s it like working as a model?" Albina asks, looking curious.');
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s whatever', handler: (st: GameState) => {
    scene.text('"It\'s whatever," you shrug. "Same as any other job I guess. Show up, do the work, get paid."');
    scene.text('"That\'s all you have to say about being a fucking super model?!" she grins back, punching you in the arm. "You bitch!"');
  } },
  ]);
  scene.build();
}

function enterRecurrentModelTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRecurrentPornTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"So…" Albina starts hesitantly, nervously drumming her fingers. "How\'s… the uhh… <i>porn stuff</i> going…?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer uncomfortably', handler: (st: GameState) => {
    scene.text('"It\'s, uhh, fine…" you reply awkwardly, unable to meet Albina\'s gaze. Not that she\'s doing a good job of maintaining eye contact herself.');
    scene.text('"What have you, uhm, filmed lately…?" she asks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalkUncomfortable(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Answer casually', handler: (st: GameState) => {
    scene.text('"It\'s going fine," you shrug casually. Albina nods, but it\'s obvious that she can\'t even look at you while talking about this subject.');
    scene.text('"What have you, uhm, filmed lately…?" she asks.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalkCasual(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: '"We don\'t have to talk about this"', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['no_porn_talk'] = 1;
    scene.text('"Albina," you say gently. "If you\'re uncomfortable with what I do for money, then we don\'t have to talk about it."');
    scene.text('She nods back, looking grateful before quickly changing the subject.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterPornHistoryCheck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRecurrentPornTalkUncomfortable(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['porn_gb_films'] < ((s as any).stat ?? 0)?.['gangbang_films']) {
    scene.actions([
      { label: 'Gangbang scene', handler: (st: GameState) => {
    scene.text('"I… uhh… Got gangbanged a little while ago…? They, er… double penetrated me…"');
    scene.text('You give her an embarrassed smile and you feel your face turn bright red as hers visibly pales.');
    scene.text('"Oh. That\'s uh… good?" She visibly cringes at her own remark and the two of you clumsily move on towards other subjects.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  if (((s as any).AlbinaQW ?? 0)?.['porn_gb_films'] < ((s as any).stat ?? 0)?.['gangbang_films']) {
    scene.actions([
      { label: 'Gangbang scene', handler: (st: GameState) => {
    scene.text('"I… uhh… Got gangbanged a little while ago…? They, er… double penetrated me…"');
    scene.text('You give her an embarrassed smile and you feel your face turn bright red as hers visibly pales.');
    scene.text('"Oh. That\'s uh… good?" She visibly cringes at her own remark and the two of you clumsily move on towards other subjects.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Nothing', handler: (st: GameState) => {
    scene.text('You give her an embarrassed smile. "Nothing really… I haven\'t really shot anything, er, new, recently…"');
    scene.text('"Oh. That\'s uh… good?" She visibly cringes at her own remark and the two of you clumsily move on towards other subjects.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Don\'t go into detail', handler: (st: GameState) => {
    scene.text('"Oh, you know, just a film here or there," you say casually.');
  } },
  ]);
  scene.build();
}

function enterRecurrentPornTalkCasual(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['porn_gb_films'] < ((s as any).stat ?? 0)?.['gangbang_films']) {
    scene.actions([
      { label: 'Gangbang scene', handler: (st: GameState) => {
    scene.text('"I got gangbanged a little while ago," you say as casually as if you were saying you had a banana with your lunch. "Fucked me in all three holes simultaneously."');
    scene.text('Your friend visibly pales, but soldiers on through the conversation nonetheless.');
    scene.text('"That\'s uh… good?" She visibly cringes at her own remark.');
    scene.text('Seeing you\'re not going to get anywhere on this topic, you take the initiative and change the subject.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Nothing', handler: (st: GameState) => {
    scene.text('You shrug again. "Nothing really. I haven\'t gotten to work for the studios very much recently."');
    scene.text('"Oh. That\'s uh… good?" She visibly cringes at her own remark.');
    scene.text('Seeing you\'re not going to get anywhere on this line of conversation, you take the initiative and change the subject.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
    { label: 'Don\'t go into detail', handler: (st: GameState) => {
    scene.text('"Oh, you know, just a film here or there," you say casually. "The usual sucking and fucking on camera. Nothing special."');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
  ]);
  scene.build();
}

function enterRecurrentPornTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" Albina says slowly. "I need to ask you… Do you really think...
  scene.text(`"${((s as any).pcs_nickname || '')}…" Albina says slowly. "I need to ask you… Do you really think shooting porn is worth the money?"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalk2Menu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRecurrentPornTalk2Menu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"It\'s soul destroying"', handler: (st: GameState) => {
    scene.text('You turn away from your friend, unable to look her in the eyes.');
    scene.text('"I don\'t know," you mumble in shame. "Every time I finish a shoot I want to throw up. Every time a guy cums on my face, I feel filthy and no amount of washing up makes me feel clean. When the producers tell me my videos are going live, I\'m terrified that someone I know will see it. It\'s tearing me apart from the inside out…"');
    scene.text('"Then quit," she bluntly replies.');
    scene.text('Turning back to face Albina, you see she\'s practically begging you with just those two words.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalk2NeedMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Conflicted', handler: (st: GameState) => {
    scene.text('"It\'s not a perfect job," you admit uncomfortably. "But it\'s not that bad either. All things considered, it\'s worth what it pays. I <i>need</i> the money right now."');
    scene.text('"But you could do something else for money too," she replies, practically pleading with you. "It doesn\'t have to be something that exposes your most intimate things all over the internet forever."');
    scene.text('"And what would I do?" you ask. "Be a secretary? Or a nurse? Or a reporter? That\'s all future. I need a uni degree for that. Or should I break my back working shit jobs like cleaning toilets and sweeping hallways, or changing cum-stained sheets in a hotel bedroom? I\'m not doing that. Those are worse than getting paid to fuck on camera."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalk2End(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRecurrentPornTalk2NeedMoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"I need the money"', handler: (st: GameState) => {
    scene.text('"I <i>need</i> the money, Albina," you reply uncomfortably. "I don\'t have a choice."');
    // TODO-QSP: dynamic text: "Yes you do," she says softly. "There are other things you can do for money, <<$...
    scene.text(`"Yes you do," she says softly. "There are other things you can do for money, ${((s as any).pcs_nickname || '')}…"`);
    scene.text('"Not without a diploma," you say with a shake of your head. "Or a degree. Or a certification. Or working for 40 hours a week for shit pay. I don\'t have that time or experience. For porn, all I have to do is look pretty as I get fucked on camera. This is the best job I can get with what I have."');
    scene.text('Albina\'s eyes mist up with tears and she looks away, rubbing her eyes with the palm of her hand.');
    scene.text('You let the conversation die off and change subjects.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecurrentPornTalk2End(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRecurrentPornTalk2End(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina\'s eyes mist up with tears and she looks away, rubbing her eyes with the palm of her hand.');
  scene.text('You let the conversation die off and change subjects.');
  qspCall(s, 'albina_chat', 'small_talk');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_model_talk1':
      enterFirstModelTalk1(s, scene);
      break;
    case 'first_model_talk_proud2':
      enterFirstModelTalkProud2(s, scene);
      break;
    case 'first_model_talk2':
      enterFirstModelTalk2(s, scene);
      break;
    case 'first_model_talk3':
      enterFirstModelTalk3(s, scene);
      break;
    case 'first_model_talk4':
      enterFirstModelTalk4(s, scene);
      break;
    case 'first_model_talk_tell':
      enterFirstModelTalkTell(s, scene);
      break;
    case 'first_model_talk_nude1':
      enterFirstModelTalkNude1(s, scene);
      break;
    case 'first_model_talk_nude2':
      enterFirstModelTalkNude2(s, scene);
      break;
    case 'first_model_talk_nude3':
      enterFirstModelTalkNude3(s, scene);
      break;
    case 'first_model_talk_nude_pubes_shaved':
      enterFirstModelTalkNudePubesShaved(s, scene);
      break;
    case 'first_model_talk_shy1':
      enterFirstModelTalkShy1(s, scene);
      break;
    case 'first_model_talk_shy2':
      enterFirstModelTalkShy2(s, scene);
      break;
    case 'first_model_talk_shy3':
      enterFirstModelTalkShy3(s, scene);
      break;
    case 'first_model_talk_shy4':
      enterFirstModelTalkShy4(s, scene);
      break;
    case 'first_model_talk_nude_shy1':
      enterFirstModelTalkNudeShy1(s, scene);
      break;
    case 'first_model_talk_nude_shy2':
      enterFirstModelTalkNudeShy2(s, scene);
      break;
    case 'first_model_talk_nude_shy_pubes_shaved':
      enterFirstModelTalkNudeShyPubesShaved(s, scene);
      break;
    case 'recurrent_model_talk1':
      enterRecurrentModelTalk1(s, scene);
      break;
    case 'recurrent_model_talk2':
      enterRecurrentModelTalk2(s, scene);
      break;
    case 'recurrent_porn_talk1':
      enterRecurrentPornTalk1(s, scene);
      break;
    case 'porn_history_check':
      enterPornHistoryCheck(s, scene);
      break;
    case 'recurrent_porn_talk_uncomfortable':
      enterRecurrentPornTalkUncomfortable(s, scene);
      break;
    case 'recurrent_porn_talk_casual':
      enterRecurrentPornTalkCasual(s, scene);
      break;
    case 'recurrent_porn_talk2':
      enterRecurrentPornTalk2(s, scene);
      break;
    case 'recurrent_porn_talk2_menu':
      enterRecurrentPornTalk2Menu(s, scene);
      break;
    case 'recurrent_porn_talk2_need_money':
      enterRecurrentPornTalk2NeedMoney(s, scene);
      break;
    case 'recurrent_porn_talk2_end':
      enterRecurrentPornTalk2End(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_chat2: LocationDef = {
  name: 'albina_chat2',
  title: '"Nude modelling?" she asks, her eyes glittering with sudden ',
  region: 'other',
  enter: enter,
};
