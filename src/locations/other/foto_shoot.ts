import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((((s as any).min ?? 0)(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0))/2);
  (s as any).modelpayfin = 900 + (15*((s as any).rand ?? 0)(0, 5));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Manager</b></center>');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"What kind of shoot would you like to do today?"');
  scene.text('<center><b>Modelling guide</b></center>');
  scene.text('<b>Catalog</b> - A catalog shoot is any shoot that is meant to appear in a basic paper or online catalog. They don\'t do much for your fame but the base pay is steady.');
  scene.text('<b>Fashion</b> - A fashion shoot is more stylized and though the base pay is not as high, there will be a higher bonus based on your modelling skill and fame.');
  scene.text('<b>Glamour</b> - A glamour shoot will always involve nudity or risqué clothing, though will always be artistic in nature. This type of modelling will have good pay with good bonuses based on skill and fame, but also will spread your fame beyond the city far more quickly. If you grew up in a small town outside St. Petersburg, the pictures may reach its populace sooner rather than later.');
  scene.text('<b>Erotic</b> - An erotic shoot makes no excuses about its purpose. The intent is to capture sexual images of female bodies to sell to pornography sites and erotic magazines. This type of modelling will have the highest bonuses based on your appearance but will also increase your fame in the porn industry as well.');
  // TODO-QSP: *p '</table></center>'
  if (((s as any).Fit ?? 0)?.['FMR'] === 1) {
    scene.actions([
      { label: '"I\'d like to do a fitness shoot"', goto: ['foto_shoot', 'fitness_shoot'] },
    ]);
  }
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
    (s as any).modelfoto['shoot_type'] = 'catalog';
    (s as any).modelfoto['catalog'] = ((s as any).modelfoto['catalog'] ?? 0) + (1);
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 2);
    (s as any).model_week = (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7;
    qspCall(s, 'fame', 'city', 'modelling', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 450;
    if (Math.floor(Math.random() * 2) + 1 === 1) {
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
    (s as any).modelfoto['shoot_type'] = 'swim_catalog';
    (s as any).modelfoto['catalog'] = ((s as any).modelfoto['catalog'] ?? 0) + (1);
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
  scene.actions([
    { label: 'Fashion', handler: (st: GameState) => {
    (s as any).modelfoto['shoot_type'] = 'fashion';
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
    (s as any).modelfoto['shoot_type'] = 'bikini';
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
        qspCall(s, 'willpower', 'pay', 'self');
        scene.actions([{ label: 'Continue', goto: ['foto_shoot', 'bikini'] }]);
        scene.actions([
          { label: 'Agree (2:00) [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'model':
      enterModel(s, scene);
      break;
    case 'fashion_shoot':
      enterFashionShoot(s, scene);
      break;
    default:
      enterModel(s, scene);
      break;
  }
}

export const foto_shoot: LocationDef = {
  name: 'foto_shoot',
  title: 'Manager',
  region: 'other',
  description: ['"What kind of shoot would you like to do today?"'],
  enter: enter,
};
