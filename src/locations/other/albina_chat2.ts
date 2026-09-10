import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFirstModelTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    scene.actions([
      { label: 'I do some modelling', handler: (st: GameState) => {
    (s as any).AlbinaQW['know_model'] = ((s as any).daystart ?? 0);
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
      qspCall(s, 'albina_chat2', 'first_model_talk_shy1');
      qspCall(s, 'albina_chat2', 'first_model_talk2');
      qspCall(s, 'albina_chat2', 'first_model_talk_proud2');
    } else {
      scene.actions([
        { label: 'I didn\'t want people to know', handler: (st: GameState) => {
    scene.text('"I just didn\'t want to spread it around," you mumble. "Word gets around town fast, you know? Could you imagine what my mother would say if she found out?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says, looking at you seriously. "I've kept secrets a lo...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," she says, looking at you seriously. "I've kept secrets a lot worse than this over the years. I would've kept this one. Don't you trust me?"`);
    scene.text('She looks away from you, seeming genuinely offended that you didn\'t tell her until now.');
    qspCall(s, 'albina_chat', 'small_talk');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterFirstModelTalkProud2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Tell her (proud)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    if (((s as any).model ?? 0)?.['type'] === 'catalog') {
      scene.text('"Catalogue modelling!" you say with bubbly excitement. "The kind that you see on websites to show what\'s for sale or in magazines with a company\'s stock. It\'s not much right now, but it\'s a foot in the door!"');
      scene.text('"Why didn\'t you tell me sooner?!" she squeals gleefully.');
      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "And since I'm underage, I have to keep it on...
      scene.text('"It\'s an 18+ agency," you explain. "And since I\'m underage, I have to keep it on the down low. I needed a fake passport just to get registered there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
      qspCall(s, 'albina_chat2', 'first_model_talk3');
    } else {
      scene.text('"Fashion modelling!" you whisper excitedly. "Fancy dresses, designer clothing, all the stuff you see in magazines but never actually see people wearing in real life. <i>I</i> get to wear that!"');
      scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "Why are you hiding it?"');
      // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
      scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do all kinds of other stuff there. Fashion, lingerie, nudes, you name it."');
      qspCall(s, 'albina_chat2', 'first_model_talk3');
      if (((s as any).model ?? 0)?.['type'] === 'lingerie') {
        scene.text('"I\'m a freaking lingerie model!" you whisper excitedly. "High end bras and panties, brand names like Victoria\'s Secret and Mon Cheri!"');
        scene.text('"That\'s so cool!" she shouts, punching you in the arm again. "You\'re a goddamn supermodel! Why are you hiding it?"');
        // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
        scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
        qspCall(s, 'albina_chat2', 'first_model_talk3');
      } else {
        if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
          scene.text('"I do glamour modelling!" you whisper excitedly. "Sexy shoots with tight or thin clothing, a lot of cleavage and a lot of leg. I\'ve even gone topless!"');
          qspCall(s, 'albina_chat2', 'first_model_talk4');
        } else {
          scene.text('"I do glamour modelling!" you whisper excitedly. "Sexy shoots with tight or thin clothing, a lot of cleavage and a lot of leg. Sometimes my ass too, but never my tits or pussy. They do that kind of modelling there too though."');
          qspCall(s, 'albina_chat2', 'first_model_talk3');
        }
        if (((s as any).model ?? 0)?.['type'] === 'fitness') {
          if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
            scene.text('"I model a lot of sports clothing," you say proudly. "But I do other stuff too. I\'ve even shown off my tits!"');
            qspCall(s, 'albina_chat2', 'first_model_talk4');
          } else {
            scene.text('"I model a lot of sports clothing," you say proudly. "Sports bras and tight yoga pants and stuff like that. Pretty cool, huh? They do all kinds of modelling there. Even nude modelling."');
            qspCall(s, 'albina_chat2', 'first_model_talk3');
          }
        } else {
          scene.text('"Nude modelling!" you squeal in a hushed but excited tone.');
          qspCall(s, 'albina_chat2', 'first_model_talk4');
          if (((s as any).model ?? 0)?.['type'] === 'erotic') {
            scene.text('"Erotic nude modelling!" you squeal in a hushed but excited tone.');
            qspCall(s, 'albina_chat2', 'first_model_talk4');
          } else {
            if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
              scene.text('"All kinds of modelling," you say excitedly. "I\'ve even done nudes!"');
              qspCall(s, 'albina_chat2', 'first_model_talk4');
            } else {
              scene.text('"All kinds of modelling," you say excitedly. "I\'ve even gone topless!"');
              qspCall(s, 'albina_chat2', 'first_model_talk4');
              scene.text('"All kinds of modelling," you say excitedly. "High end fashion. Lacy lingerie. Tight clothing, thin material. You name it."');
              scene.text('"That\'s so cool!" she exclaims, punching you in the arm again. "You\'re a goddamn supermodel! "Why are you hiding it?"');
              // TODO-QSP: dynamic text: "It's an 18+ agency," you explain. "I have a fake passport just to work there. T...
              scene.text('"It\'s an 18+ agency," you explain. "I have a fake passport just to work there. They do other stuff there too. Erotic nudes and all that."');
              qspCall(s, 'albina_chat2', 'first_model_talk3');
            }
          }
        }
      }
    }
  } },
  ]);
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
    default:
      enterFirstModelTalk1(s, scene);
      break;
  }
}

export const albina_chat2: LocationDef = {
  name: 'albina_chat2',
  region: 'other',
  enter: enter,
};
