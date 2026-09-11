import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNudeDebutMemory(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('Hello, if you are seeing this page it is either because you were already doing nude modelling on a save before this content was added or the game has bugged out for some reason.');
  scene.text('The following scene is a memory of your full frontal debut as a model and the creator encourages you to roleplay it as your character would have been at the time of their first nude shoot.');
  scene.text('Please enjoy.');
  scene.actions([
    { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut_pre'] },
  ]);
  scene.build();
}

function enterNudeDebutPre(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"You want to do a nude shoot? This would be your first one, won\'t it?" the manager asks.');
  scene.text('"Yes," you nod back.');
  qspCall(s, 'foto_nude_debut', 'nude_debut_shave_start');
  scene.build();
}

function enterNudeDebutShaveStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_leghair ?? 0) > 3) {
    ((s as any).temp ?? {})['model_shave'] = '"And your legs too."';
  }
  if (((s as any).modelfoto ?? 0)?.['nude_shave_no'] === 1) {
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      ((s as any).modelfoto ?? {})['nude_shave_yes'] = 1;
      scene.text('"I see you came prepared this time," he says, eyeing the smooth clean-shaven skin over your pussy. "Let\'s get to work then."');
      scene.actions([
        { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
      ]);
    } else {
      if (((s as any).pcs_pubes ?? 0) > 10) {
        scene.text('"Then you know the policy. Go shave that muff off," he says, gesturing towards the hair growing between your legs.');
      } else {
        scene.text('"Then you know the policy. Go shave that stubble off," he says, gesturing towards the hair growing between your legs.');
      }
      qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
    }
  } else {
    if (((s as any).pcs_pubes ?? 0) > 3) {
      qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
      if (((s as any).pcs_pubes ?? 0) < 10) {
        if (((s as any).foto_persuade ?? 0) === 5) {
          // TODO-QSP: dynamic text: "Just one thing. You need to shave that stubble off," he says, eyeing the fuzzy ...
          scene.text(`"Just one thing. You need to shave that stubble off," he says, eyeing the fuzzy patch between your legs. ${((s as any).temp ?? 0)?.['model_shave']}`);
        } else {
          // TODO-QSP: dynamic text: "You'll have to shave that stubble off," he says, eyeing the fuzzy patch between...
          scene.text(`"You'll have to shave that stubble off," he says, eyeing the fuzzy patch between your legs. ${((s as any).temp ?? 0)?.['model_shave']}`);
        }
        scene.actions([
          { label: 'But I\'m growing it out', handler: (st: GameState) => {
    scene.text('"But I\'m growing it out," you protest.');
    scene.text('"Start again tomorrow," he shrugs. "It\'s your debut. All models must be clean-shaven for their nude debut. Even if I wanted to give you a pass, it\'s not up to me. Besides, stubble looks bad."');
    qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
  } },
        ]);
      } else {
        if (((s as any).pcs_pubes ?? 0) > 3) {
          if (((s as any).foto_persuade ?? 0) === 5) {
            // TODO-QSP: dynamic text: "Just one thing. You need to shave that off first," he says, eyeing your pubic h...
            scene.text(`"Just one thing. You need to shave that off first," he says, eyeing your pubic hair. ${((s as any).temp ?? 0)?.['model_shave']}`);
          } else {
            // TODO-QSP: dynamic text: "You need to shave that off first," he says, eyeing your pubic hair. <<$temp['mo...
            scene.text(`"You need to shave that off first," he says, eyeing your pubic hair. ${((s as any).temp ?? 0)?.['model_shave']}`);
          }
          scene.actions([
            { label: 'But I like it this way', handler: (st: GameState) => {
    scene.text('"But I like it this way," you protest.');
    scene.text('"Policy," he shrugs. "It\'s your debut. All models must be clean-shaven for their nude debut. Even if I wanted to give you a pass, it\'s not up to me. You can start growing it out again tomorrow."');
    qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
  } },
          ]);
        }
      }
    } else {
      // TODO-QSP: dynamic text: "Then let's get to work. Go ahead and meet us on set <<rand(11,30)>>."
      scene.text(`"Then let's get to work. Go ahead and meet us on set ${Math.floor(Math.random() * 20) + 11}."`);
      scene.text('You nod and follow his instructions, heading off to the designated set.');
      scene.actions([
        { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
      ]);
    }
  }
  scene.build();
}

function enterNudeDebutShaveOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_shave_no'] = 1;
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"If that\'s a requirement, then I\'m out," you say shaking your head.');
    scene.text('"Okay," he shrugs. "Come back if you change your mind. Did you want to do a different shoot today?"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
    ]);
  } },
    { label: 'Okay', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_shave_yes'] = 1;
    scene.text('"Okay," you nod. "I\'ll get it done."');
    scene.text('"Go to the showers and do it now," he says. "We\'ll arrange the set in the meantime."');
    scene.actions([
      { label: 'Go shave', goto: ['foto_nude_debut', 'nude_debut_shaving'] },
    ]);
  } },
    { label: 'Okay (hesitant)', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_shave_yes'] = 1;
    scene.text('"Okay…" you mumble. "I… I guess I could…"');
    scene.text('"Go to the showers and do it now," he says. "We\'ll arrange the set in the meantime."');
    scene.actions([
      { label: 'Go shave', goto: ['foto_nude_debut', 'nude_debut_shaving'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeDebutShaving(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/shower.jpg');
  if (((s as any).pcs_pubes ?? 0) < 10) {
    scene.text('You follow the instructions you\'ve been given and dutifully shave off the stubble surrounding your pussy. A few minutes later, you\'re silky smooth and head to the set.');
  } else {
    scene.text('You follow the instructions you\'ve been given and dutifully shave off the bush covering your pussy. A few minutes later, you\'re silky smooth and head to the set.');
  }
  (s as any).pcs_pubes = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
  ]);
  scene.build();
}

function enterNudeDebut1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 500) {
    scene.text('There\'s a buzz on set as the studio prepares to shoot your nude debut.');
    if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text('You\'ve gone topless before, but for such a famous model as yourself, baring everything is still exciting news for everyone involved in the publication. Especially for the upper management who get to sell the pictures.');
      } else {
        scene.text('You\'ve shown your nipples on one occasion or another, but you\'ve never gone fully topless before, let alone fully nude. It\'s no wonder there\'s excitement that you\'re soon going to bare it all. Especially for the upper management who get to sell the pictures.');
      }
    } else {
      scene.text('As a model whose name regularly comes up in magazines and internet articles, often in the running for \'Sexiest Woman of the Year\', your fame is undeniable. So to jump from never having published a topless spread to baring it all in a full nude, it\'s no wonder there\'s excitement that you\'re soon going to bare it all. Especially for the upper management who get to sell the pictures.');
    }
  } else {
    if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
      scene.text('There\'s a modest buzz on set as the crew prepares to shoot your nude debut.');
      if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
        if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
          scene.text('You\'ve gone topless before, but for a model such as yourself with a decent following, baring everything is still exciting news for everyone involved in the publication.');
        } else {
          scene.text('You\'ve shown your nipples on one occasion or another, but you\'ve never gone fully topless before, let alone fully nude. For a model such as yourself with a decent following, baring everything is still exciting news for everyone involved in the publication.');
        }
      } else {
        scene.text('As a model with a decent following, even if you\'re not super famous, your name still pops up in celebrity magazines now and then. So to go from never having published a topless shoot to a full nude shoot is exciting news.');
      }
    } else {
      if (((s as any).modelfoto ?? 0)?.['shoots'] > 0) {
        scene.text('The crew move to prepare the set for your nude debut.');
        if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
          scene.text('You\'ve done a few shoots for the studio before, including topless ones, but with models always walking around the studio naked, it seems this is just business as usual for them today.');
        } else {
          scene.text('You\'ve done a few shoots for the studio before but with models always walking around the studio naked, it seems this is just business as usual for them today.');
        }
      } else {
        scene.text('The crew move to prepare the set.');
        scene.text('This is your first modelling shoot ever but no one seems surprised or even find it remarkable that you\'re jumping straight into it. It seems to them that you\'re just one of the many desperate girls who come into the studio, willing to bare it all for easy money.');
      }
    }
  }
  qspCall(s, 'foto_nude_debut', 'nude_debut2');
  scene.build();
}

function enterNudeDebut2Desc(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('It\'s decided that since it\'s your debut, it\'s going to be a full frontal shoot against a plain backdrop, showing you head to toe with your pussy exposed with nothing to distract from your beauty.');
  scene.build();
}

function enterNudeDebut2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling…');
    if (((s as any).pcs_inhib ?? 0) > 50  ||  ((s as any).modelfoto ?? 0)?.['shoots'] >= 50) {
      scene.actions([
        { label: 'Calm', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'calm';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>calm</i>.');
    if (((s as any).modelfoto ?? 0)?.['shoots'] >= 50) {
      scene.text('It\'s not like you don\'t feel anything, but you\'re not scared either. You\'re not nervous. You don\'t feel jittery. You feel… ready. You\'ve done dozens of shoots before. This is hardly going to be any different.');
    } else {
      scene.text('It\'s not like you don\'t feel anything, but you\'re not scared either. You\'re not nervous. You don\'t feel jittery. You\'re not shy about your body. There\'s no reason to be. You feel… ready. ');
    }
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      ]);
    }
    scene.actions([
      { label: 'Nervous (bad)', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'nervous_bad';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>nervous</i>.');
    if (((s as any).modelfoto ?? 0)?.['shoots'] >= 100) {
      scene.text('Your stomach flutters and you swallow uncomfortably, trying to keep your breathing steady. Your skin feels cold and your hands tremble. What is <i>with</i> you? You\'ve literally done hundreds of shoots before. Why are you getting nervous now?');
      scene.text('<i>Because in this one I\'ll be naked</i> you admit to yourself.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['shoots'] >= 40) {
        scene.text('Your stomach flutters and you swallow uncomfortably, trying to keep your breathing steady. Your skin feels cold and your hands tremble. You\'ve done dozens of shoots before but never anything like this. You can\'t deny that something about being <i>naked</i> changes the atmosphere');
      } else {
        scene.text('Your stomach flutters and you swallow uncomfortably, trying to keep your breathing steady. Your skin feels cold and your hands tremble. It\'s hard to keep steady and you feel pretty on edge.');
      }
    }
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Nervous (good)', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'nervous_good';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>nervous</i>.');
    scene.text('But in a good way. Your stomach flutters and it\'s difficult to breathe steadily, but you\'re… excited? There\'s a "trembling" inside you that you can\'t shake, looking forward to stepping in front of the camera and hearing that first shutter click.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Nervous (aroused)', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'nervous_aroused';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>aroused</i>.');
    scene.text('Your skin goes hot and you feel heat flush through your hips. Uncomfortably aware of a gathering wetness inside you, you take a hard swallow, trying to keep your breathing steady. At the same time, there is an incessant fluttering in your stomach and your hands won\'t stop trembling.');
    scene.text('Some part of you acknowledges that this must just be your body\'s reaction to stress, but it doesn\'t make it any less embarrassing and you hope nobody notices how stiff your nipples are.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Aroused', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'aroused';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>aroused</i>.');
    scene.text('Your skin goes hot and you feel heat flush through your hips. Deeply aware of a gathering wetness inside you, you take a hard swallow, trying to keep your breathing steady, trying not to pant as you feel your nipples swell.');
    scene.text('Some part of you is seriously turned on by the fact that full frontal images of your naked body are about to be put on display in public and your body is responding.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Excited', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'excited';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>excited</i>.');
    scene.text('You <i>tremble</i> with excitement, already eager to get in front of the camera and start posing. Every minute passes with agonizing slowness.');
    scene.text('<i>Hurry up!</i> you mentally shout at the crew.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Scared', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'scared';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>scared</i>.');
    scene.text('Already, you\'re beginning to regret your decision. A knot forms inside you, making you sick to your stomach. The cool air on your skin forms goosebumps of fear, suddenly making you startingly aware of your nakedness and you\'re not even on camera yet.');
    scene.text('<i>What have I gotten myself into…</i> you ask yourself.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
      { label: 'Numb', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['first_nude_pre'] = 'numb';
    qspCall(s, 'foto_nude_debut', 'nude_debut2_desc');
    scene.text('You watch it all get set up feeling… <i>numb</i>.');
    scene.text('You don\'t feel anything. It\'s like you\'re having an out of body experience, looking at yourself from a bird\'s eye view, standing there naked as the crew positions the lighting around the camera.');
    qspCall(s, 'foto_nude_debut', 'nude_debut3');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeDebut3(s: GameState, scene: SceneBuilder): void {
  scene.text('Finally, the photographer turns to you and says, "It\'s time."');
  scene.actions([
    { label: 'Step on set', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You take the center stage, surrounded by lights and crewmembers.');
    scene.text('The photographer calls for you to take your first pose.');
    scene.text('The lights flash- and you feel…');
    scene.actions([
      { label: 'Sick', goto: ['foto_nude_debut', 'sick_debut'] },
      { label: 'Aroused', goto: ['foto_nude_debut', 'aroused_debut'] },
      { label: 'Happy', goto: ['foto_nude_debut', 'happy_debut'] },
      { label: 'Calm', goto: ['foto_nude_debut', 'calm_debut'] },
      { label: 'Numb', goto: ['foto_nude_debut', 'numb_debut'] },
      { label: 'Dirty', goto: ['foto_nude_debut', 'dirty_debut'] },
      { label: 'Hollow', goto: ['foto_nude_debut', 'hollow_debut'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSickDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'sick';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('Your earlier jitters get worse the instant you hear the first shutter click.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The arousal you felt just moments ago disappears in a cold flash the instant you hear the first shutter click.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The excitement you felt just moments ago disappears in a cold flash the instant you hear the first shutter click.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('Feeling comes rushing back to you the instant you hear the first shutter click.');
          scene.text('It isn\'t good.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('Your earlier calm suddenly abandons you the instant you hear the first shutter click.');
          }
        }
      }
    }
  }
  scene.text('A wave of dizziness passes through your head. Your legs feel like jelly, barely keeping you upright. The lights flash again and you suddenly want to throw up.');
  scene.text('Time passes in a miserable blur, barely aware of your surroundings while taking stiff poses, trying with all your might to keep from ruining the shoot by vomiting all over the set. By the time the photographer calls an end to the shoot, you\'re on the verge of tears, having wanted it to be over an hour ago.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterArousedDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'aroused';
  qspCall(s, 'arousal', 'erotic', (-60), 'exhibitionism');
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('Your earlier jitters disappear in a hot flash the instant you hear the first shutter click.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The arousal you felt just moments ago compounds exponentially in a hot flash the instant you hear the first shutter click.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The excitement you felt just moments ago transforms in a hot flash the instant you hear the first shutter click.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('Feeling comes rushing back to you the instant you hear the first shutter click.');
          scene.text('It feels… <i>hot</i>.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('Your earlier calm suddenly abandons you in a hot flash the instant you hear the first shutter click.');
          }
        }
      }
    }
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('<i>Heat</i> washes through your entire body. Your nipples go rock-hard. Your clit twitches. Your virgin pussy <i>aches</i> to be filled. Every click of the shutter sends electric tingles racing across your skin.');
  } else {
    scene.text('<i>Heat</i> washes through your entire body. Your nipples go rock-hard. Your clit twitches. Your pussy <i>aches</i> to be filled. Every click of the shutter sends electric tingles racing across your skin.');
  }
  scene.text('Time passes in a furious blur, barely aware of your surroundings while taking poses, trying with all your might not to openly pant in heat. Several pauses have to be taken just to wipe you down, the overflowing arousal of your dripping snatch won\'t stop running down your thighs. The intervals between each wipe gets shorter after each one until the shoot is called to an end.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterHappyDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'happy';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('Your earlier jitters disappear the instant you hear the first shutter click.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The arousal you felt just moments ago disappears the instant you hear the first shutter click.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The excitement you felt just moments ago explodes within you the instant you hear the first shutter click.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('Feeling comes rushing back to you the instant you hear the first shutter click.');
          scene.text('You feel… <i>happy</i>.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('Your earlier calm suddenly disappears the instant you hear the first shutter click.');
          }
        }
      }
    }
  }
  scene.text('Joy overflows from your soul with every new flash of the lights and click of the shutters.');
  scene.text('Time passes in a blur, taking casual poses with such enthusiasm that the photographer has to tell you to slow down. Something about this is fills you with glee and it\'s all you can do not to break into laughter. By the time the photographer calls an end to the shoot, you feel giddy.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterCalmDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'calm';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  scene.text('The shutter goes <i>click</i>.');
  scene.text('The lights flash.');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
    scene.text('And you spring into action.');
    scene.text('You are as calm as a placid lake, not a single ripple of nerves or worry across the still water of your mind. You listen attentively, moving through poses as the camera continues to click and adjusting with nothing but the most pure professionalism.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
      scene.text('And in an instant, all your nerves disappear.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
        scene.text('And in an instant, your body cools.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
          scene.text('And in an instant, all your nerves disappear.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
            scene.text('And in an instant, your body springs into action.');
          }
        }
      }
    }
    scene.text('A cool calm takes over, your mind as peaceful as a placid lake. You listen attentively, moving through poses as the camera continues to click and adjusting with nothing but the most pure professionalism.');
  }
  scene.text('Time passes in a blur and before you know it, the shoot is already over.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterNumbDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'numb';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  scene.text('The shutter goes <i>click</i>.');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('Your nerves disappear. And all feeling in your body disappears with them.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The arousal you felt just moments ago suddenly disappears, all feeling in your body disappearing with it.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The excitement you felt just moments ago suddenly disappears, all feeling in your body disappearing with it.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('And all feeling in your body disappears.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('Your earlier calm suddenly disappears, all feeling in your body disappearing with it.');
          }
        }
      }
    }
  }
  scene.text('Numbness surrounds you. The air around your skin feels fuzzy. You move through different poses as instructed, but your body feels stiff and every movement awkward.');
  scene.text('It feels like an age passes before the photographer calls an end to the shoot.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterDirtyDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'dirty';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  scene.text('The shutter goes <i>click</i>.');
  scene.text('The lights flash.');
  scene.text('And disgust suddenly overwhelms you.');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('You feel filthy, like you just showered with garbage as you suddenly realize what you\'re doing. It may just be photos, it may just be modelling, but you\'re selling your body. You\'re giving up a part of your innocence with every pose you take and every camera flash and for what? Money? Fame? Some kind of sick satisfaction you get from showing off?');
    scene.text('It coats your skin in an invisible layer, a feeling you just can\'t shake. The feeling persists through the entire hour before the shoot is called to an end.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The arousal you felt vanishes in a hot flash as you suddenly realize what you\'re doing. It may just be photos, it may just be modelling, but you\'re selling your body. You\'re giving up a part of your innocence with every pose you take and every camera flash and for what? Money? Fame? Some kind of sick satisfaction you get from showing off?');
      scene.text('You feel filthy, like you just showered with garbage and slime and its residue is still coating your skin. The feeling persists through the entire hour before the shoot is called to an end.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The excitement you felt vanishes in a hot flash as you suddenly realize what you\'re doing. It may just be photos, it may just be modelling, but you\'re selling your body. You\'re giving up a part of your innocence with every pose you take and every camera flash and for what? Money? Fame? Some kind of sick satisfaction you get from showing off?');
        scene.text('You feel filthy, like you just showered with garbage and slime and its residue is still coating your skin. The feeling persists through the entire hour before the shoot is called to an end.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('The numbness you were experiencing vanishes in a hot flash as you suddenly realize what you\'re doing. It may just be photos, it may just be modelling, but you\'re selling your body. You\'re giving up a part of your innocence with every pose you take and every camera flash and for what? Money? Fame? Some kind of sick satisfaction you get from showing off?');
          scene.text('You feel filthy, like you just showered with garbage and slime and its residue is still coating your skin. The feeling persists through the entire hour before the shoot is called to an end.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('Your earlier calm suddenly vanishes in a hot flash as you suddenly realize what you\'re doing. It may just be photos, it may just be modelling, but you\'re selling your body. You\'re giving up a part of your innocence with every pose you take and every camera flash and for what? Money? Fame? Some kind of sick satisfaction you get from showing off?');
            scene.text('You feel filthy, like you just showered with garbage and slime and its residue is still coating your skin. The feeling persists through the entire hour before the shoot is called to an end.');
          }
        }
      }
    }
  }
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterHollowDebut(s: GameState, scene: SceneBuilder): void {
  ((s as any).modelfoto ?? {})['first_nude_during'] = 'hollow';
  scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
  if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_bad'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'scared') {
    scene.text('The shutter goes <i>click</i> and your nerves vanish, replaced instead by an empty feeling in the pit of your stomach.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_aroused'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'aroused') {
      scene.text('The shutter goes <i>click</i> and your arousal vanishes, replaced instead by an empty feeling in the pit of your stomach.');
    } else {
      if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'excited'  ||  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'nervous_good') {
        scene.text('The shutter goes <i>click</i> and your excitement vanishes, replaced instead by an empty feeling in the pit of your stomach.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'numb') {
          scene.text('The shutter goes <i>click</i> and feeling suddenly returns to your body, an empty sensation in the pit of your stomach coming with it.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_pre'] === 'calm') {
            scene.text('The shutter goes <i>click</i> and your calm vanishes, replaced instead by an empty feeling in the pit of your stomach.');
          }
        }
      }
    }
  }
  scene.text('You move through the poses as the camera flashes in a near confusion, wondering why you feel this way. You can\'t explain why, but it feels like you gave something up the moment that first picture was taken. Something you can\'t get back.');
  scene.text('Halfway through the shoot, you blink in surprise when a single tear suddenly rolls down your cheek, pausing to carefully wipe it away without smudging your makeup. You stare at the droplet of water on the end of your finger in hollow confusion, wondering what just happened.');
  scene.text('The empty feeling never goes away. By the end of the shoot, it only feels deeper.');
  qspCall(s, 'foto_nude_debut', 'debut_after1');
  scene.build();
}

function enterDebutAfter1(s: GameState, scene: SceneBuilder): void {
  scene.text('"Want to see how it turned out?"');
  scene.actions([
    { label: 'Approach', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('You step away from the set to look at the computer…');
    scene.actions([
      { label: 'Look at the photos', handler: (st: GameState) => {
    // TODO-QSP: modelfoto['debut_image'] = 1
    qspCall(st, 'foto_nude_debut', 'debut_after2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDebutAfter2(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/city/citycenter/photo/shoots/nude/debut/${((s as any).modelfoto ?? 0)?.['debut_image']}.jpg`);
  if (((s as any).modelfoto ?? 0)?.['debut_image'] < 7) {
    scene.actions([
      { label: 'Next set', handler: (st: GameState) => {
    // TODO-QSP: modelfoto['debut_image'] += 3
    qspCall(st, 'foto_nude_debut', 'debut_after2');
  } },
    ]);
  }
  if (((s as any).modelfoto ?? 0)?.['debut_image'] > 1) {
    scene.actions([
      { label: 'Previous set', handler: (st: GameState) => {
    // TODO-QSP: modelfoto['debut_image'] -= 3
    qspCall(st, 'foto_nude_debut', 'debut_after2');
  } },
    ]);
  }
  qspCall(s, 'foto_nude_debut', 'debut_after_reaction');
  scene.build();
}

function enterDebutAfterReaction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).modelfoto ?? 0)?.['nude_shave_yes'] === 1) {
    scene.text('The photographer shows you an album of high res pictures of your naked body, taken just minutes ago. Some of them are just your waist up, some of them capture you head to toe. Many of them capture your vagina in detail, the resolution so great that, without any kind of bush to obscure it, even your pussy\'s lips are visible.');
  } else {
    scene.text('The photographer shows you an album of high res pictures of your naked body, taken just minutes ago. Some of them are just your waist up, some of them capture you head to toe. Many of them capture your vagina in detail, the resolution so great that even your pussy\'s lips are visible.');
  }
  if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === '') {
    scene.text('You stare over his shoulder as he scrolls through feeling…');
    scene.actions([
      { label: 'Amazed', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'amazed';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
      { label: 'Mortified', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'mortified';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
      { label: 'Proud', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'proud';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
      { label: 'Empty', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'empty';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
      { label: 'Regret', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'regret';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
      { label: 'Aroused', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['nude_after_reaction'] = 'aroused';
    qspCall(s, 'foto_nude_debut', 'debut_after2');
  } },
    ]);
  } else {
    if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'amazed') {
      scene.text('You stare over his shoulder as he scrolls through feeling… <i>amazed.</i>');
      if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
        scene.text('Your nausea vanishes as your jaw goes slack, openly gaping at the images. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! You can\'t stop staring at the screen, unable to believe how well it all turned out.');
      } else {
        if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
          scene.text('Your jaw goes slack as you gape at the screen. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! You can\'t stop staring, heat intensifying between your legs, somehow getting off on your own nudes.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
            scene.text('You\'re practically bouncing with glee as the photographer flicks through the gallery. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! You almost want to break out laughing just staring at yourself on the screen, unable to believe how well it all turned out.');
          } else {
            if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
              scene.text('Awe breaks through the calm that you embodied during the shoot and your eyes go wide. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! Your jaw goes slack just staring at yourself on the screen, unable to believe how well it all turned out.');
            } else {
              if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                scene.text('Awe breaks through the numbness that has been covering your body since the shoot started and your eyes go wide. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! Your jaw goes slack just staring at yourself on the screen, unable to believe how well it all turned out.');
              } else {
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                  scene.text('Your eyes go wide. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! Your jaw goes slack just staring at yourself on the screen, unable to believe how well it all turned out.');
                  scene.text('The invisible grime that coated your skin no longer seems to be there…');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                    scene.text('Your eyes go wide. These are pictures of you? You look incredible! You look classy and beautiful and sexy all at once! Your jaw goes slack just staring at yourself on the screen, unable to believe how well it all turned out.');
                    scene.text('The empty hole inside you is suddenly filled with awe…');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'mortified') {
        scene.text('You stare over his shoulder as he scrolls through feeling… <i>mortified.</i>');
        if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
          scene.text('Your nausea intensifies and it\'s all you can do not to throw up all over the screen. What did you just do? Everything is visible. <i>Everything</i>.');
          scene.text('And this is going to be all over the internet! Anyone can see it! Everyone can see it!');
          scene.text('What on earth were you thinking doing this shoot?!');
        } else {
          if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
            scene.text('Your arousal vanishes, an eerie chill taking its place as realization sets in.');
            scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
            scene.text('You thought this was hot? This is a nightmare!');
          } else {
            if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
              scene.text('The happiness you felt during the shoot vanishes, an eerie chill taking its place as realization sets in.');
              scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
              scene.text('You gulp wondering if you just made a huge mistake…');
            } else {
              if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                scene.text('The calm you felt during the shoot vanishes, an eerie chill taking its place as realization sets in.');
                scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
                scene.text('You gulp wondering if you just made a huge mistake…');
              } else {
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                  scene.text('The numbness you felt during the shoot vanishes, replaced by sheer terror as realization sets in.');
                  scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
                  scene.text('What on earth were you thinking doing this shoot?!');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                    scene.text('Horror overtakes your mind as you stare at the screen.');
                    scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
                    scene.text('Your skin suddenly feels more grimy than ever before…');
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                      scene.text('Your mind starts to go numb as you stare at the screen.');
                      scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
                      scene.text('The hollow pit in your chest suddenly seems bottomless…');
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'proud') {
          scene.text('You stare over his shoulder as he scrolls through feeling… <i>proud.</i>');
          if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
            scene.text('Your nausea vanishes as the pride begins to well up in your chest. These pictures are incredible, professional, and sexy. As nervous as you were, this was something good. And you can feel good about this.');
          } else {
            if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
              scene.text('That pride begins to well up in your chest, bubbling up inside you. These pictures are incredible, professional, and sexy. You felt so hot and aroused during the shoot, but you realize that this is something so much more than some kind of exhibition fetish. This was an achievement.');
            } else {
              if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                scene.text('That pride begins to well up in your chest, bubbling up inside you. These pictures are incredible, professional, and sexy. The joy you felt during the shoot intensifies to near bursting as you realize this is something that you will carry with you for the rest of your life. This was an achievement.');
              } else {
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                  scene.text('That pride begins to well up in your chest, bubbling up inside you. These pictures are incredible, professional, and sexy. You did <i>good</i> work today. This was an achievement.');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                    scene.text('The numbness you felt during the shoot vanishes as the pride begins to well up in your chest. These pictures are incredible, professional, and sexy. You almost can\'t believe it\'s you on that screen.');
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                      scene.text('The filth you felt during the shoot seems to disappear as the pride begins to well up in your chest. These pictures are incredible, professional, and sexy. You almost can\'t believe it\'s you on that screen. Regret vanishes, replaced by a sense of achievement that you know you will carry for the rest of your life.');
                    } else {
                      if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                        scene.text('Bit by bit, the hole in your chest seems to get filled up, filled by the pride you feel looking at these pictures until it is overflowing inside you. These pictures are incredible, professional, and sexy. You almost can\'t believe it\'s you on that screen. Regret vanishes, replaced by a sense of achievement that you know you will carry for the rest of your life.');
                      }
                    }
                  }
                }
              }
            }
          }
          scene.text('A smile spreads across your face as you continue to stare at the screen.');
        } else {
          if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'empty') {
            scene.text('You stare over his shoulder as he scrolls through feeling… <i>empty.</i>');
            if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
              scene.text('Your nausea disappears, a hollow hole in your chest taking its place.');
              scene.text('As your eyes roam the screen, the hole grows deeper and deeper. You thought you would feel something at the end of this shoot. Anything. But you feel nothing instead. Why?');
              scene.text('Even when you felt sick, it felt better than this emptiness…');
            } else {
              if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
                scene.text('Your arousal slowly fades away as your eyes roam the screen, a hollow hole in your chest taking its place.');
                scene.text('As the photographer keeps scrolling, the hole grows deeper and deeper. You thought you would feel something at the end of this shoot. Anything. But you feel nothing instead. Why?');
                scene.text('Why does this make you feel so empty…');
              } else {
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                  scene.text('The happiness you felt during the shoot slowly fades as your eyes roam the screen, a hollow hole in your chest taking its place.');
                  scene.text('As the photographer keeps scrolling, the hole grows deeper and deeper. You were <i>so</i> happy just minutes ago. But now… you feel empty. Why?');
                  scene.text('Why do you feel so empty…');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                    scene.text('The calm you felt during the shoot change and mutate into something darker, stranger, forming into a hollow hole deep in your chest.');
                    scene.text('As the photographer keeps scrolling, the hole grows deeper and deeper. Why?');
                    scene.text('Why do you feel so empty…');
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                      scene.text('The numbness you felt during the shoot begins to change and mutate into something darker, stranger, forming into a hollow hole deep in your chest.');
                      scene.text('As the photographer keeps scrolling, the hole grows deeper and deeper. Why?');
                      scene.text('Why do you feel so empty…');
                    } else {
                      if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                        scene.text('The invisible grim on your skin begins to fade away. A hollow hole begins to form in your chest to replace it.');
                        scene.text('As the photographer keeps scrolling, the hole grows deeper and deeper. You thought you would feel something at the end of this shoot. Anything. But you feel nothing instead. Why?');
                        scene.text('Why does this make you feel so empty…');
                      } else {
                        if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                          scene.text('That hollow feeling you felt during the shoot grows deeper and deeper and deeper as the photographer keeps scrolling.');
                          scene.text('It\'s like there\'s a hole in your chest where your heart should be. Black. Bottomless.');
                          scene.text('Makes you wonder what you lost…');
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'regret') {
              scene.text('You stare over his shoulder as he scrolls through feeling… <i>regret.</i>');
              if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
                scene.text('Your nausea intensifies and it\'s all you can do not to throw up all over the screen. What did you just do? Everything is visible. <i>Everything</i>.');
                scene.text('This is going to be all over the internet! Anyone can see it! Everyone can see it!');
                scene.text('And for what? Money?');
                scene.text('You wonder if you\'ll ever regret something in your life as much as you regret this.');
              } else {
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
                  scene.text('Your arousal vanishes as shame washes over you in waves.');
                  scene.text('It\'s like what you feel after orgasming to particularly nasty thoughts. You were so into it up until the moment you climaxed and suddenly, it\'s revolting.');
                  scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web. You can <i>never</i> take this back.');
                  scene.text('You wonder if you\'ll ever regret something in your life as much as you regret this.');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                    scene.text('The happiness you felt during the shoot vanishes as shame washes over you in waves.');
                    scene.text('It\'s like what you feel after orgasming to particularly nasty thoughts. You were so into it up until the moment you climaxed and suddenly, it\'s revolting.');
                    scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web. You can <i>never</i> take this back.');
                    scene.text('You wonder if you\'ll ever regret something in your life as much as you regret this.');
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                      scene.text('The calm you felt during the shoot vanishes as shame washes over you in waves.');
                      scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web. You can <i>never</i> take this back.');
                      scene.text('You wonder if you\'ll ever regret something in your life as much as you regret this.');
                    } else {
                      if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                        scene.text('The numbness you felt during the shoot vanishes, replaced by sheer terror as realization sets in.');
                        scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web. You can <i>never</i> take this back.');
                        scene.text('You wonder if you\'ll ever regret something in your life as much as you regret this.');
                      } else {
                        if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                          scene.text('Shame overtakes your mind as you stare at the screen.');
                          scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web. You can <i>never</i> take this back and you did it for what? Money? Fame?');
                          scene.text('Your skin suddenly feels more grimy than ever before…');
                        } else {
                          if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                            scene.text('Your mind starts to go numb as you stare at the screen.');
                            scene.text('Everything is visible. <i>Everything</i>. Anyone and everyone who looks this up will find it. And it\'s going to be on the internet forever, un-erasable as it is downloaded, spread, and shared across the world wide web.');
                            scene.text('The hollow pit in your chest is filled with bottomless regret…');
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).modelfoto ?? 0)?.['nude_after_reaction'] === 'aroused') {
                scene.text('These are pictures of you? They\'re… They\'re so… <i>fucking hot!</i>');
                if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'sick') {
                  scene.text('Your nausea vanishes as you gulp, deeply aware of the heat pooling between your legs.');
                  scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                  scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                } else {
                  if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'aroused') {
                    scene.text('The heat between your legs is almost unbearable. Your pussy <i>burns</i> with arousal.');
                    scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                    scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                  } else {
                    if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'happy') {
                      scene.text('You\'re practically bouncing with glee as the photographer flicks through the gallery, your joy swiftly turning sexual in nature. The heat between your legs is almost unbearable. Your pussy <i>burns</i> with arousal.');
                      scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                      scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                    } else {
                      if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'calm') {
                        scene.text('Awe breaks through the calm that you embodied during the shoot and your eyes go wide, suddenly aware of the heat pooling between your legs.');
                        scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                        scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                      } else {
                        if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'numb') {
                          scene.text('Awe breaks through the numbness that has been covering your body since the shoot started and your eyes go wide, suddenly aware of the heat pooling between your legs.');
                          scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                          scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                        } else {
                          if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'dirty') {
                            scene.text('Your eyes go wide. You swallow reflexively. The imaginary filth coating your skin suddenly takes a sexual turn as you feel heat pooling between your legs.');
                            scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                            scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes. You\'re a dirty, <i>dirty</i> girl…');
                          } else {
                            if (((s as any).modelfoto ?? 0)?.['first_nude_during'] === 'hollow') {
                              scene.text('Your eyes go wide. You swallow reflexively. The hole in your chest disappears and the only hole you can think about now is the one between your legs and how much you\'d love it to get filled…');
                              scene.text('These are so sexy! The sudden awareness that everyone in the world might see these pictures sends hot flashes dancing across your skin. Your nipples stiffen and swell.');
                              scene.text('You can\'t stop staring, unable to tear your eyes away as you try to keep from panting at your own nudes.');
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', goto: ['foto_nude_debut', 'debut_ending'] },
    ]);
  }
  scene.build();
}

function enterDebutEnding(s: GameState, scene: SceneBuilder): void {
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0);
  (s as any).modelpayfin = (600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0))) * 2;
  ((s as any).modelfoto ?? {})['shoots'] = (((s as any).modelfoto ?? {})['shoots'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['pussy'] = (((s as any).modelfoto ?? {})['pussy'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['fullnude'] = (((s as any).modelfoto ?? {})['fullnude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude_debut'] = 1;
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('All the pictures taken, the staff begin striking the set and a manager comes out with your pay.');
  // TODO-QSP: dynamic text: They hand you an envelope containing <<$func('money', 'string_profit', modelpayf...
  scene.text(`They hand you an envelope containing ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))}, double the going rate for a standard nude shoot, as promised.`);
  scene.text('And with that, your nude debut shoot is concluded.');
  scene.actions([
    { label: 'Continue', goto: ['foto', 'end'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nude_debut_memory':
      enterNudeDebutMemory(s, scene);
      break;
    case 'nude_debut_pre':
      enterNudeDebutPre(s, scene);
      break;
    case 'nude_debut_shave_start':
      enterNudeDebutShaveStart(s, scene);
      break;
    case 'nude_debut_shave_options':
      enterNudeDebutShaveOptions(s, scene);
      break;
    case 'nude_debut_shaving':
      enterNudeDebutShaving(s, scene);
      break;
    case 'nude_debut1':
      enterNudeDebut1(s, scene);
      break;
    case 'nude_debut2_desc':
      enterNudeDebut2Desc(s, scene);
      break;
    case 'nude_debut2':
      enterNudeDebut2(s, scene);
      break;
    case 'nude_debut3':
      enterNudeDebut3(s, scene);
      break;
    case 'sick_debut':
      enterSickDebut(s, scene);
      break;
    case 'aroused_debut':
      enterArousedDebut(s, scene);
      break;
    case 'happy_debut':
      enterHappyDebut(s, scene);
      break;
    case 'calm_debut':
      enterCalmDebut(s, scene);
      break;
    case 'numb_debut':
      enterNumbDebut(s, scene);
      break;
    case 'dirty_debut':
      enterDirtyDebut(s, scene);
      break;
    case 'hollow_debut':
      enterHollowDebut(s, scene);
      break;
    case 'debut_after1':
      enterDebutAfter1(s, scene);
      break;
    case 'debut_after2':
      enterDebutAfter2(s, scene);
      break;
    case 'debut_after_reaction':
      enterDebutAfterReaction(s, scene);
      break;
    case 'debut_ending':
      enterDebutEnding(s, scene);
      break;
    default:
      enterNudeDebutMemory(s, scene);
      break;
  }
}

export const foto_nude_debut: LocationDef = {
  name: 'foto_nude_debut',
  title: 'Hello, if you are seeing this page it is either because you ',
  region: 'other',
  description: ['Hello, if you are seeing this page it is either because you were already doing nude modelling on a save before this content was added or the game has bugged out for some reason.'],
  enter: enter,
};
