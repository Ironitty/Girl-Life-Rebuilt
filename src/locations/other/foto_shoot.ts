import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterModel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0))/2);
  (s as any).modelpayfin = 900 + (15*(Math.floor(Math.random() * 6) + 0));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Manager</b></center>');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"What kind of shoot would you like to do today?"');
  scene.text('<center><b>Modelling guide</b></center>');
  scene.text('<b>Catalog</b> - A catalog shoot is any shoot that is meant to appear in a basic paper or online catalog. They don\'t do much for your fame but the base pay is steady.');
  scene.text('<b>Fashion</b> - A fashion shoot is more stylized and though the base pay is not as high, there will be a higher bonus based on your modelling skill and fame.');
  scene.text('<b>Glamour</b> - A glamour shoot will always involve nudity or risqué clothing, though will always be artistic in nature. This type of modelling will have good pay with good bonuses based on skill and fame, but also will spread your fame beyond the city far more quickly. If you grew up in a small town outside St. Petersburg, the pictures may reach its populace sooner rather than later.');
  scene.text('<b>Erotic</b> - An erotic shoot makes no excuses about its purpose. The intent is to capture sexual images of female bodies to sell to pornography sites and erotic magazines. This type of modelling will have the highest bonuses based on your appearance but will also increase your fame in the porn industry as well.');
  scene.text('</table></center>');
  if (((s as any).Fit ?? 0)?.['FMR'] === 1) {
    scene.actions([
      { label: '"I\'d like to do a fitness shoot"', goto: ['foto_shoot', 'fitness_shoot'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    scene.text('<center><b>Manager</b></center>');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sorry, I just realized that I have something to do right now. Can I come back later?"');
    // TODO-QSP: dynamic text: "Sure, no problem <<$model['lastname']>>, just let us know when you're ready to ...
    scene.text(`"Sure, no problem ${((s as any).model ?? 0)?.['lastname']}, just let us know when you're ready to work."`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Actually I\'d like to practice', goto: ['foto_practice', 'start'] },
    { label: '"I\'d like to do a catalog shoot"', handler: (st: GameState) => {
    if (((s as any).modelfoto ?? 0)?.['shoots'] >= 10  &&  ((s as any).pcs_mdlng ?? 0) > 20  &&  ((s as any).modelfoto ?? 0)?.['fashion'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'fashion_persuasion'] }]);
    }
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Alright, what kind of shoot? Clothing or swimsuits?"');
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Clothing', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'catalog';
    ((s as any).modelfoto ?? {})['catalog'] = (((s as any).modelfoto ?? {})['catalog'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 2);
    (s as any).model_week = (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7;
    qspCall(s, 'fame', 'city', 'modelling', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 450;
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/city/citycenter/photo/catalog/1.mp4');
      scene.text('You spend two hours modelling various tights with tops for the online catalogs of retail clothing stores. You change clothes probably 30 times over the shoot, but always wear the same expression. It\'s boring but it still gets you paid.');
    } else {
      scene.img('images/locations/city/citycenter/photo/catalog/2.mp4');
      scene.text('You spend two hours modelling various dresses for the online catalogs of retail clothing stores. You change clothes probably 30 times over the shoot, but always wear the same expression. It\'s boring but it still gets you paid.');
    }
    // TODO-QSP: dynamic text: You receive <<$func('money', 'string_profit', 450)>> for the job.
    scene.text(`You receive ${qspFunc(s, 'money', 'string_profit', 450)} for the job.`);
    scene.actions([
      { label: 'Finish', goto: ['foto', 'end'] },
    ]);
  } },
      { label: 'Swimsuits', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'swim_catalog';
    ((s as any).modelfoto ?? {})['catalog'] = (((s as any).modelfoto ?? {})['catalog'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 2);
    (s as any).model_week = (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7;
    qspCall(s, 'fame', 'city', 'modelling', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 450;
    scene.img(`images/locations/city/citycenter/photo/bikini/${Math.floor(Math.random() * 3) + 1}.mp4`);
    scene.text('You change in and out of various different bikinis, modelling them with the same pose and expression for use in online and department store catalogs.');
    // TODO-QSP: dynamic text: You receive <<$func('money', 'string_profit', 450)>> for the job.
    scene.text(`You receive ${qspFunc(s, 'money', 'string_profit', 450)} for the job.`);
    scene.actions([
      { label: 'Finish', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
    { label: '"I\'d like to do a fashion shoot"', handler: (st: GameState) => {
    if (((s as any).pcs_mdlng ?? 0) < 20) {
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto_shoot', 'fashion_shoot'] }]);
    }
  } },
    { label: '"I\'d like to do a glamour shoot"', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 30  &&  ((s as any).modelfoto ?? 0)?.['glamour'] < 1) {
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto_shoot', 'glamour_shoot'] }]);
    }
  } },
    { label: '"I\'d like to do a nude shoot"', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 30  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto_shoot', 'nude_shoot'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterFashionShoot(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Alright, what kind of shoot would you like to do? Fashion, bikini, or lingerie?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fashion', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'fashion';
    if (((s as any).modelfoto ?? 0)?.['fashion'] >= 10  &&  ((s as any).modelfoto ?? 0)?.['bikini'] + ((s as any).modelfoto ?? 0)?.['lingerie'] < 1  &&  ((s as any).modelfoto ?? 0)?.['glamour'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'lingerie_persuasion'] }]);
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fashion options', goto: ['foto_shoot', 'fashion_shoot'] },
      { label: 'Agree (2:00)', goto: ['foto_shoot', 'fashion'] },
    ]);
  } },
    { label: 'Bikini', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'bikini';
    if (((s as any).modelfoto ?? 0)?.['bikini'] + ((s as any).modelfoto ?? 0)?.['lingerie'] >= 10  &&  ((s as any).pcs_mdlng ?? 0) > 20  &&  ((s as any).modelfoto ?? 0)?.['glamour'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'glamour_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 20) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'bikini'] },
      ]);
    } else {
      scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      if (((s as any).pcs_mdlng ?? 0) > 20) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'bikini'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fashion options', goto: ['foto_shoot', 'fashion_shoot'] },
    ]);
  } },
    { label: 'Lingerie modelling', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'lingerie';
    if (((s as any).modelfoto ?? 0)?.['bikini'] + ((s as any).modelfoto ?? 0)?.['lingerie'] >= 10  &&  ((s as any).modelfoto ?? 0)?.['glamour'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'glamour_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 25) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'lingerie'] },
      ]);
    } else {
      scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      if (((s as any).pcs_mdlng ?? 0) > 20) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'lingerie'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fashion options', goto: ['foto_shoot', 'fashion_shoot'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGlamourShoot(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Alright, we can do that. What kind of glamour shoot?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sexy clothing', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'sexy_clo';
    if (((s as any).modelfoto ?? 0)?.['sexy'] >= 10  &&  ((s as any).modelfoto ?? 0)?.['transparent'] + ((s as any).modelfoto ?? 0)?.['trans_ling'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nip'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'trans_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 30) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'sexy'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['sexy'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 20) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'sexy'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other glamour options', goto: ['foto_shoot', 'glamour_shoot'] },
    ]);
  } },
    { label: 'Transparent clothing', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'trans_clo';
    if (((s as any).modelfoto ?? 0)?.['trans_ling'] + ((s as any).modelfoto ?? 0)?.['transparent'] >= 5  &&  ((s as any).modelfoto ?? 0)?.['topless'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'topless_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 45) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'transparent'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['transparent'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 40) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'transparent'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other glamour options', goto: ['foto_shoot', 'glamour_shoot'] },
    ]);
  } },
    { label: 'Transparent Lingerie', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'trans_ling';
    if (((s as any).modelfoto ?? 0)?.['trans_ling'] + ((s as any).modelfoto ?? 0)?.['transparent'] >= 5  &&  ((s as any).modelfoto ?? 0)?.['topless'] < 1  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      ((s as any).modelfoto ?? {})['shoot_type'] = 'trans_ling';
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'topless_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 45) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'trans_ling'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['trans_ling'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 40) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'trans_ling'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other glamour options', goto: ['foto_shoot', 'glamour_shoot'] },
    ]);
  } },
    { label: 'Exposed breasts', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'topless';
    if (((s as any).modelfoto ?? 0)?.['topless'] >= 5  &&  ((s as any).modelfoto ?? 0)?.['nude'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'nude_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 50) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'topless'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 45) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'topless'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other glamour options', goto: ['foto_shoot', 'glamour_shoot'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeShoot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Alright, we can do that. What kind of nude shoot?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Limited nude', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'taste_nude';
    if (((s as any).modelfoto ?? 0)?.['tastenude'] >= 5  &&  (((s as any).modelfoto ?? 0)?.['topless'] + ((s as any).modelfoto ?? 0)?.['toplessnude'] + ((s as any).modelfoto ?? 0)?.['fullnude']) < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'nude_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'tasteful'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['tastenude'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 35) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'tasteful'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other nude options', goto: ['foto_shoot', 'nude_shoot'] },
    ]);
  } },
    { label: 'Exposed breasts nude', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'top_nude';
    if (((s as any).modelfoto ?? 0)?.['toplessnude'] >= 3  &&  ((s as any).modelfoto ?? 0)?.['pussy'] < 1) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'nude_persuasion'] }]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 55) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'topless_nude'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['toplessnude'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
      } else {
        scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
      }
      if (((s as any).pcs_inhib ?? 0) > 50) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'topless_nude'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other nude options', goto: ['foto_shoot', 'nude_shoot'] },
    ]);
  } },
    { label: 'Full exposure', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'full_nude';
    if (((s as any).modelfoto ?? 0)?.['fullnude'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['foto_nude_debut', 'nude_debut_pre'] }]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['fullnude'] > 0  &&  ((s as any).modelfoto ?? 0)?.['first_nude_pre'] === '') {
        scene.actions([{ label: 'Continue', goto: ['foto_nude_debut', 'nude_debut_memory'] }]);
      }
    }
    if (((s as any).pcs_inhib ?? 0) >= 60) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'nude'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['fullnude'] > 0) {
        scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more of these kinds of pictures of you floating around?<i>');
      } else {
        if (((s as any).modelfoto ?? 0)?.['pussy'] < 1) {
          scene.text('You think about asking to do this shoot but hesitate, not sure if you\'re ready to put pictures of your pussy all over the internet.');
        } else {
          scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
        }
      }
      if (((s as any).pcs_inhib ?? 0) > 55) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'nude'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other nude options', goto: ['foto_shoot', 'nude_shoot'] },
    ]);
  } },
    { label: 'Erotic', handler: (st: GameState) => {
    ((s as any).modelfoto ?? {})['shoot_type'] = 'erotic';
    if (((s as any).pcs_inhib ?? 0) >= 65) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'erotic'] },
      ]);
    } else {
      if (((s as any).modelfoto ?? 0)?.['pussy'] <= 0) {
        scene.text('You think about asking to do this shoot but hesitate, not sure if you\'re ready to put pictures of your pussy and asshole all over the internet, especially ones that focus on them!');
      } else {
        if (((s as any).modelfoto ?? 0)?.['erotic'] <= 0) {
          scene.text('You think about asking to do this shoot but then blush and realize you aren\'t confident enough to have pictures of yourself like this circling around the internet. Maybe you could practice it later, but you\'re not ready to do it for real.');
        } else {
          scene.text('You think about asking to do this shoot but hesitate. You\'ve done it before but still… Are you really comfortable with <i>more</i> of these kinds of pictures of you floating around?');
        }
      }
      if (((s as any).pcs_inhib ?? 0) > 60) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'erotic'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other nude options', goto: ['foto_shoot', 'nude_shoot'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFitnessShoot(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Alright, what kind of shoot would you like to do? Sportwear, Sport underwear, or Artistic nude?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sportwear', handler: (st: GameState) => {
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fitness options', goto: ['foto_shoot', 'fitness_shoot'] },
      { label: 'Agree (2:00)', goto: ['foto_shoot', 'sportswear'] },
    ]);
  } },
    { label: 'Sports underwear', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) >= 20) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'sports_underwear'] },
      ]);
    } else {
      if (((s as any).pcs_inhib ?? 0) > 10) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'sports_underwear'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fitness options', goto: ['foto_shoot', 'fitness_shoot'] },
    ]);
  } },
    { label: 'Artistic nude', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) >= 45) {
      scene.actions([
        { label: 'Agree (2:00)', goto: ['foto_shoot', 'fitness_artistic_nude'] },
      ]);
    } else {
      if (((s as any).pcs_inhib ?? 0) > 30) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
        scene.text('Or you could just force yourself do it anyways…');
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['foto_shoot', 'fitness_artistic_nude'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
      { label: 'Look at other fitness options', goto: ['foto_shoot', 'fitness_shoot'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFashion(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 300 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700)/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10);
  ((s as any).modelfoto ?? {})['fashion'] = (((s as any).modelfoto ?? {})['fashion'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 5);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 8) + 3);
  }
  (s as any).fashionshoot = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).fashionshoot ?? 0) === 1) {
    scene.img(`images/locations/city/citycenter/photo/fashion/${Math.floor(Math.random() * 5) + 1}.mp4`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/fashion/${Math.floor(Math.random() * 30) + 1}.jpg`);
  }
  scene.text('You dress up in the latest in fashion wear and spend the next two hours posing for the photographer.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBikini(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 325 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700)/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10);
  ((s as any).modelfoto ?? {})['bikini'] = (((s as any).modelfoto ?? {})['bikini'] ?? 0) + (1);
  if (((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'willpower', 'pay', 'self');
  }
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 8) + 3);
  }
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
  if (((s as any).pcs_inhib ?? 0) < 50) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/photo/bikini/${Math.floor(Math.random() * 2) + 4}.mp4`);
  scene.text('You spend the shoot in designer bikinis, modelling them to appear in various higher end magazines.');
  // TODO-QSP: dynamic text: Two hours later, you're all done. The photographer thanks you for your time and ...
  scene.text(`Two hours later, you're all done. The photographer thanks you for your time and pays you ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for the job.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLingerie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 350 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700)/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10);
  ((s as any).modelfoto ?? {})['lingerie'] = (((s as any).modelfoto ?? {})['lingerie'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 4) + 3);
  }
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
  (s as any).shoot = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).shoot ?? 0) === 1) {
    scene.img(`images/locations/city/citycenter/photo/lingerie/${Math.floor(Math.random() * 5) + 1}.mp4`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/lingerie/${Math.floor(Math.random() * 37) + 1}.jpg`);
  }
  scene.text('You put on some high end lingerie and spend the next two hours striking various poses for a photographer for use in fashion magazines.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 500 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700)/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10);
  ((s as any).modelfoto ?? {})['glamour'] = (((s as any).modelfoto ?? {})['glamour'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['sexy'] = (((s as any).modelfoto ?? {})['sexy'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 6) + 1);
  }
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/photo/sexy/${Math.floor(Math.random() * 48) + 1}.jpg`);
  scene.text('You dress up in sexy clothes and spend the next two hours posing for the photographer.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransparent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0)) + (((s as any).pcs_apprnc ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['glamour'] = (((s as any).modelfoto ?? {})['glamour'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['sexy'] = (((s as any).modelfoto ?? {})['sexy'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['transparent'] = (((s as any).modelfoto ?? {})['transparent'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 6) + 3);
  }
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/photo/seethru/${Math.floor(Math.random() * 25) + 1}.jpg`);
  scene.text('You put on a transparent top and spend the next two hours in various poses for the photographer, a flash highlighting your breasts with every click of the camera.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransLing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 650 + (((s as any).modelpay ?? 0) * 2) + (((s as any).pcs_apprnc ?? 0)) + (15*(Math.floor(Math.random() * 8) + 0));
  ((s as any).modelfoto ?? {})['glamour'] = (((s as any).modelfoto ?? {})['glamour'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['trans_ling'] = (((s as any).modelfoto ?? {})['trans_ling'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['lingerie'] = (((s as any).modelfoto ?? {})['lingerie'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 3) + 8);
  if (((s as any).pcs_inhib ?? 0) < 45) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 6) + 3);
  }
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.img(`images/locations/city/citycenter/photo/ling_trans/${Math.floor(Math.random() * 3) + 1}.mp4`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/ling_trans/${Math.floor(Math.random() * 26) + 1}.jpg`);
  }
  scene.text('You put on some very lacy, very transparent underwear and get to posing, your nipples often showing through the thin fabric.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTopless(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 700 + (((s as any).modelpay ?? 0)) + (((s as any).pcs_apprnc ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['topless'] = (((s as any).modelfoto ?? {})['topless'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['glamour'] = (((s as any).modelfoto ?? {})['glamour'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
  if (((s as any).pcs_inhib ?? 0) < 50) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 6) + 3);
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/photo/topless/${Math.floor(Math.random() * 56) + 1}.jpg`);
  scene.text('You spend two hours striking various posing with topless breasts, listening to instruction while the photographer takes pictures of you.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTasteful(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0);
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['tastenude'] = (((s as any).modelfoto ?? {})['tastenude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 9);
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 8) + 3);
  }
  scene.img(`images/locations/city/citycenter/photo/tastenude/${Math.floor(Math.random() * 28) + 1}.jpg`);
  scene.text('Already naked, you step onto the set and begin the shoot immediately.');
  // TODO-QSP: dynamic text: You spend two hours posing confidently for a photographer taking pictures of you...
  scene.text(`You spend two hours posing confidently for a photographer taking pictures of you, often being asked to carefully position your hands or legs in ways that tastefully hides your pussy and nipples. These images, though incredibly provocative, are still somehow considered to be conservative enough to be allowed on the front cover of fashion, sports, and other tabloid magazines. When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterToplessNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0);
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['toplessnude'] = (((s as any).modelfoto ?? {})['toplessnude'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 9);
  if (((s as any).pcs_inhib ?? 0) < 55) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 1);
  }
  qspCall(s, 'fame', 'city', 'modelling', 'medium');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 8) + 3);
  }
  scene.img(`images/locations/city/citycenter/photo/topnude/${Math.floor(Math.random() * 77) + 1}.jpg`);
  scene.text('Already naked, you step onto the set and begin the shoot immediately.');
  // TODO-QSP: dynamic text: You spend two hours posing confidently for a photographer taking pictures of you...
  scene.text(`You spend two hours posing confidently for a photographer taking pictures of you, often using props, hands, legs, or shadow to shield your pussy while simultaneously teasing the would-be readers of what they cannot see. When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0);
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  if (((s as any).modelfoto ?? 0)?.['nude'] === 0) {
    (s as any).modelpayfin = ((s as any).modelpayfin ?? 0) * 2;
    (s as any).foto_persuade = 0;
  }
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['fullnude'] = (((s as any).modelfoto ?? {})['fullnude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['pussy'] = (((s as any).modelfoto ?? {})['pussy'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 9);
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 1);
  }
  qspCall(s, 'fame', 'city', 'modelling', 'medium');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 200) {
    qspCall(s, 'fame', 'city', 'modelling', Math.floor(Math.random() * 6) + 5);
  }
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    if (((s as any).pcs_pubes ?? 0) < 16) {
      scene.img(`images/locations/city/citycenter/photo/nude/${Math.floor(Math.random() * 17) + 1}.jpg`);
      scene.text('Already naked, you step onto the set and begin the shoot immediately.');
      // TODO-QSP: dynamic text: You spend two hours posing for a photographer taking pictures of you that fully ...
      scene.text(`You spend two hours posing for a photographer taking pictures of you that fully expose your breasts and pussy. When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
    } else {
      scene.img(`images/locations/city/citycenter/photo/bnude/${Math.floor(Math.random() * 20) + 1}.jpg`);
      ((s as any).modelfoto ?? {})['bush'] = (((s as any).modelfoto ?? {})['bush'] ?? 0) + (1);
      scene.text('Already naked, you step onto the set and begin the shoot immediately.');
      // TODO-QSP: dynamic text: You spend two hours posing confidently for a photographer taking pictures of you...
      scene.text(`You spend two hours posing confidently for a photographer taking pictures of you, your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy providing a nice contrast to the rest of your smooth body. When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
    }
  } else {
    if (((s as any).pcs_pubes ?? 0) < 16) {
      ((s as any).modelfoto ?? {})['pussy'] = (((s as any).modelfoto ?? {})['pussy'] ?? 0) + (1);
      scene.img(`images/locations/city/citycenter/photo/nude/${Math.floor(Math.random() * 17) + 1}.jpg`);
      scene.text('The photographer sends you on a quick trip to the dressing room to change into some clothes before the shoot.');
      scene.text('Once you\'re back, you spend two hours posing in the selected outfit and stripping or removing each piece as required. You never completely lose the clothes, but at one point or another, your breasts or pussy or both are put on display for the camera.');
      // TODO-QSP: dynamic text: When the shoot ends, both you and the photographers are very proud of the result...
      scene.text(`When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
    } else {
      scene.img(`images/locations/city/citycenter/photo/bnude/${Math.floor(Math.random() * 20) + 1}.jpg`);
      scene.text('The photographer sends you on a quick trip to the dressing room to change into some clothes before the shoot.');
      scene.text('Once you\'re back, you spend two hours posing for a photographer taking pictures of you in the selected outfit and stripping down piece by piece until your most intimate parts are exposed. Even though you started clothed, you have no doubt that the full spread will feature images that capture every part of you, even your furry pussy.');
      // TODO-QSP: dynamic text: When the shoot ends, both you and the photographers are very proud of the result...
      scene.text(`When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
    }
  }
  if (((s as any).modelfoto ?? 0)?.['nude'] === 1  &&  ((s as any).foto_persuade ?? 0) !== 5) {
    scene.text('You blink at the amount but the person who gave it to you reassures you it\'s normal. The studio has a policy of doubling the pay for a model\'s nude debut.');
  } else {
    if (((s as any).modelfoto ?? 0)?.['nude'] === 1  &&  ((s as any).foto_persuade ?? 0) === 5) {
      scene.text('It even includes the bonus the manager said they\'d give you for your debut!');
    }
  }
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterErotic(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + (((s as any).pcs_apprnc ?? 0) * 3);
  (s as any).modelpayfin = 1000 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['erotic'] = (((s as any).modelfoto ?? {})['erotic'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nip'] = (((s as any).modelfoto ?? {})['nip'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['pussy'] = (((s as any).modelfoto ?? {})['pussy'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['asshole'] = (((s as any).modelfoto ?? {})['asshole'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 1);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  qspCall(s, 'fame', 'city', 'porn', 'small');
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (6);
  }
  scene.img(`images/locations/city/citycenter/photo/erotic/${Math.floor(Math.random() * 19) + 1}.jpg`);
  if (((s as any).pantyworntype ?? 0) !== 'none') {
  } else {
    scene.text('Already naked, you step onto the set and begin the shoot immediately.');
  }
  // TODO-QSP: dynamic text: You spend two hours posing while the photographer takes many photos of your nude...
  scene.text(`You spend two hours posing while the photographer takes many photos of your nude body, but especially your breasts, pussy, and asshole. You can see the rock-hard outline of his cock the whole time and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSportswear(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 300 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (((s as any).fame ?? {})?.['city_modelling']/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10) + (((s as any).fame ?? {})?.['city_sport']/2);
  ((s as any).modelfoto ?? {})['fitness'] = (((s as any).modelfoto ?? {})['fitness'] ?? 0) + (1);
  (s as any).pcs_sweat = 60;
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 3) + 2);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  qspCall(s, 'stat', '');
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 0);
  if (((s as any).temp_bs_class ?? 0) / 100 >= 2  &&  (((s as any).temp_bs_class ?? 0) % 100) >= 8) {
    (s as any).modelpayfin = ((s as any).modelpayfin ?? 0) + (300);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/fitness/FSM${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/fitness/FSV${Math.floor(Math.random() * 4) + 1}.jpg`);
  }
  scene.text('Modeling sportwear, is slightly different from other jobs. First, you are taken to the near-by Havanna Fitness Center, as the studio doesn\'t have all the necessary props to do it. Second, you must look "dynamic", and that means do some warm-ups, and add some oil, to give that "sweaty" and "sporty" look. After that, you are ready to pose the next two hours for the photographer.');
  // TODO-QSP: dynamic text: After having taken all his pictures, the photographer thanks you for your time a...
  scene.text(`After having taken all his pictures, the photographer thanks you for your time and concludes the shoot, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
    scene.actions([
      { label: 'Leave', goto: ['foto_events', 'commercial'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSportsUnderwear(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpayfin = 325 + (((s as any).modelpay ?? 0)) + (15*(Math.floor(Math.random() * 6) + 0)) + (((s as any).pcs_apprnc ?? 0)) + (((s as any).fame ?? {})?.['city_modelling']/2) + (((s as any).pcs_mdlng ?? 0)/2 * 10) + (((s as any).fame ?? {})?.['city_sport']/2);
  ((s as any).modelfoto ?? {})['fitness'] = (((s as any).modelfoto ?? {})['fitness'] ?? 0) + (1);
  (s as any).pcs_sweat = 60;
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 3);
  if (((s as any).pcs_inhib ?? 0) < 50) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 0);
  if (((s as any).temp_bs_class ?? 0) / 100 >= 2  &&  (((s as any).temp_bs_class ?? 0) % 100) >= 8) {
    (s as any).modelpayfin = ((s as any).modelpayfin ?? 0) + (325);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/fitness/FUM${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/fitness/FUV${Math.floor(Math.random() * 4) + 1}.jpg`);
  }
  scene.text('Modeling sport underwear, is slightly different from other jobs. First, you are taken to the Havanna Fitness Center, as the studio doesn\'t have all the necessary props to do it. Second, you must look "dynamic", and that means do some warm-ups, and add some oil, to give that "sweaty" and "sporty" look. After that, you are ready to pose the next two hours for the photographer.');
  // TODO-QSP: dynamic text: After having taken all his pictures, you and the crew head back to Aphrodite, co...
  scene.text(`After having taken all his pictures, you and the crew head back to Aphrodite, counting out your ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} to hand to you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'end'] },
  ]);
  scene.build();
}

function enterFitnessArtisticNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((s as any).fame ?? {})?.['city_modelling'] + ((s as any).pcs_apprnc ?? 0) + ((s as any).fame ?? {})?.['city_sport'];
  (s as any).modelpayfin = 600 + (((s as any).modelpay ?? 0) * 2) + (15*(Math.floor(Math.random() * 6) + 0));
  ((s as any).modelfoto ?? {})['fitness'] = (((s as any).modelfoto ?? {})['fitness'] ?? 0) + (1);
  ((s as any).modelfoto ?? {})['nude'] = (((s as any).modelfoto ?? {})['nude'] ?? 0) + (1);
  (s as any).pcs_sweat = 60;
  qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 4);
  qspCall(s, 'fame', 'city', 'modelling', 'small');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
  qspCall(s, 'stat', '');
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 0);
  if (((s as any).temp_bs_class ?? 0) / 100 >= 2  &&  (((s as any).temp_bs_class ?? 0) % 100) >= 8) {
    (s as any).modelpayfin = ((s as any).modelpayfin ?? 0) + (600);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/fitness/FNM${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/city/citycenter/photo/fitness/FNV${Math.floor(Math.random() * 4) + 1}.jpg`);
  }
  scene.text('Already naked, you do some warm-ups, work up a sweat, add some body-oil and step onto the set to begin the shoot.');
  // TODO-QSP: dynamic text: You spend two hours posing confidently for a photographer taking pictures of you...
  scene.text(`You spend two hours posing confidently for a photographer taking pictures of you, often being asked to carefully position your hands or legs in ways that tastefully hides your pussy and nipples. These images, are less provocative, than artistic, as they must show your body in movement so they can appear in sports-related advertisements, articles, and magazines. When the shoot ends, both you and the photographers are very proud of the results and you are paid ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin ?? 0))} for your work.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['foto', 'end'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'model':
      enterModel(s, scene);
      break;
    case 'fashion_shoot':
      enterFashionShoot(s, scene);
      break;
    case 'glamour_shoot':
      enterGlamourShoot(s, scene);
      break;
    case 'nude_shoot':
      enterNudeShoot(s, scene);
      break;
    case 'fitness_shoot':
      enterFitnessShoot(s, scene);
      break;
    case 'fashion':
      enterFashion(s, scene);
      break;
    case 'bikini':
      enterBikini(s, scene);
      break;
    case 'lingerie':
      enterLingerie(s, scene);
      break;
    case 'sexy':
      enterSexy(s, scene);
      break;
    case 'transparent':
      enterTransparent(s, scene);
      break;
    case 'trans_ling':
      enterTransLing(s, scene);
      break;
    case 'topless':
      enterTopless(s, scene);
      break;
    case 'tasteful':
      enterTasteful(s, scene);
      break;
    case 'topless_nude':
      enterToplessNude(s, scene);
      break;
    case 'nude':
      enterNude(s, scene);
      break;
    case 'erotic':
      enterErotic(s, scene);
      break;
    case 'sportswear':
      enterSportswear(s, scene);
      break;
    case 'sports_underwear':
      enterSportsUnderwear(s, scene);
      break;
    case 'fitness_artistic_nude':
      enterFitnessArtisticNude(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const foto_shoot: LocationDef = {
  name: 'foto_shoot',
  title: 'Manager',
  region: 'other',
  enter: enter,
};
