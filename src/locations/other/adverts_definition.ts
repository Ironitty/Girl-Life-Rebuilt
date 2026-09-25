// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).adv_init = 1;
  ((s as any).adv_list = (s as any).adv_list ?? {})[1] = 'model';
  ((s as any).adv_list = (s as any).adv_list ?? {})[2] = 'guitar';
  ((s as any).adv_list = (s as any).adv_list ?? {})[3] = 'sing';
  ((s as any).adv_list = (s as any).adv_list ?? {})[4] = 'burlesque';
  ((s as any).adv_list = (s as any).adv_list ?? {})[5] = 'secretary';
  ((s as any).adv_list = (s as any).adv_list ?? {})[6] = 'dinner';
  ((s as any).adv_list = (s as any).adv_list ?? {})[7] = 'fitness';
  ((s as any).adv_list = (s as any).adv_list ?? {})[8] = 'pushkin';
  ((s as any).adv_list = (s as any).adv_list ?? {})[9] = 'starlets';
  ((s as any).adv_list = (s as any).adv_list ?? {})[10] = 'therapy';
  ((s as any).adv_list = (s as any).adv_list ?? {})[11] = 'hotelmaid';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModel(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGuitar(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSing(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBurlesque(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSecretary(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiner(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFitness(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPushkin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStarlets(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTherapy(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHotelmaid(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).adv_listSize = 0;
  scene.build();
}

function enterModel(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['model'] = 'images/locations/shared/noticeboards/city/flyer_modelling.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['model'] = 'Modelling';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['model'] = 'Job offer';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['model'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['model'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['model'] = 1;
  ((s as any).adv_city_industrial = (s as any).adv_city_industrial ?? {})['model'] = 1;
  ((s as any).adv_city_residential = (s as any).adv_city_residential ?? {})['model'] = 1;
  ((s as any).adv_city_center = (s as any).adv_city_center ?? {})['model'] = 1;
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['guitar'] = 'images/locations/shared/noticeboards/pav/flyer_music_guitar.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['guitar'] = 'Guitar';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['guitar'] = 'Lessons';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['guitar'] = 0;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['guitar'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['guitar'] = 1;
  scene.build();
}

function enterSing(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['sing'] = 'images/locations/shared/noticeboards/city/flyer_music_singing.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['sing'] = 'Singing';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['sing'] = 'Lessons';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['sing'] = 50;
  ((s as any).adv_city_industrial = (s as any).adv_city_industrial ?? {})['sing'] = 1;
  ((s as any).adv_city_residential = (s as any).adv_city_residential ?? {})['sing'] = 1;
  ((s as any).adv_city_center = (s as any).adv_city_center ?? {})['sing'] = 1;
  scene.build();
}

function enterBurlesque(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['burlesque'] = 'images/locations/shared/noticeboards/pav/flyer_pushkin_burlesque.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['burlesque'] = 'Burlesque';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['burlesque'] = 'Entertainment';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['burlesque'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['burlesque'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['burlesque'] = 1;
  ((s as any).adv_city_industrial = (s as any).adv_city_industrial ?? {})['burlesque'] = 1;
  ((s as any).adv_city_residential = (s as any).adv_city_residential ?? {})['burlesque'] = 1;
  ((s as any).adv_city_center = (s as any).adv_city_center ?? {})['burlesque'] = 1;
  scene.build();
}

function enterSecretary(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['secretary'] = 'images/locations/shared/noticeboards/city/flyer_secretary.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['secretary'] = 'Secretary job';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['secretary'] = 'Job offer';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['secretary'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['secretary'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['secretary'] = 1;
  scene.build();
}

function enterDiner(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['diner'] = 'images/locations/shared/noticeboards/city/flyer_diner.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['diner'] = 'Diner';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['diner'] = 'Job offer';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['diner'] = 50;
  ((s as any).adv_city_industrial = (s as any).adv_city_industrial ?? {})['diner'] = 1;
  ((s as any).adv_city_residential = (s as any).adv_city_residential ?? {})['diner'] = 1;
  ((s as any).adv_city_center = (s as any).adv_city_center ?? {})['diner'] = 1;
  scene.build();
}

function enterFitness(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['fitness'] = 'images/locations/shared/noticeboards/city/flyer_fitness.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['fitness'] = 'Fitness';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['fitness'] = 'Sport';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['fitness'] = 50;
  ((s as any).adv_city_industrial = (s as any).adv_city_industrial ?? {})['fitness'] = 1;
  ((s as any).adv_city_residential = (s as any).adv_city_residential ?? {})['fitness'] = 1;
  ((s as any).adv_city_center = (s as any).adv_city_center ?? {})['fitness'] = 1;
  scene.build();
}

function enterPushkin(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['pushkin'] = 'images/locations/shared/noticeboards/pav/flyer_pushkin.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['pushkin'] = 'Pushkin';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['pushkin'] = 'Entertainment';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['pushkin'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['pushkin'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['pushkin'] = 1;
  scene.build();
}

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['starlets'] = 'images/locations/shared/noticeboards/pav/flyer_starlets.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['starlets'] = 'Starlets';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['starlets'] = 'Sport';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['starlets'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['starlets'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['starlets'] = 1;
  scene.build();
}

function enterTherapy(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['therapy'] = 'images/locations/shared/noticeboards/pav/flyer_therapy.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['therapy'] = 'Therapy';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['therapy'] = 'Healthcare';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['therapy'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['therapy'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['therapy'] = 1;
  scene.build();
}

function enterHotelmaid(s: GameState, scene: SceneBuilder): void {
  ((s as any).adv_imgPath = (s as any).adv_imgPath ?? {})['hotelmaid'] = 'images/shared/newspaper/hotelmaidoffer.jpg';
  ((s as any).adv_name = (s as any).adv_name ?? {})['hotelmaid'] = 'Hotel maid';
  ((s as any).adv_nameHidden = (s as any).adv_nameHidden ?? {})['hotelmaid'] = 'Job offer';
  ((s as any).adv_chance = (s as any).adv_chance ?? {})['hotelmaid'] = 50;
  ((s as any).adv_pav_commercial = (s as any).adv_pav_commercial ?? {})['hotelmaid'] = 1;
  ((s as any).adv_pav_commcenter = (s as any).adv_pav_commcenter ?? {})['hotelmaid'] = 1;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'model':
      enterModel(s, scene);
      break;
    case 'guitar':
      enterGuitar(s, scene);
      break;
    case 'sing':
      enterSing(s, scene);
      break;
    case 'burlesque':
      enterBurlesque(s, scene);
      break;
    case 'secretary':
      enterSecretary(s, scene);
      break;
    case 'diner':
      enterDiner(s, scene);
      break;
    case 'fitness':
      enterFitness(s, scene);
      break;
    case 'pushkin':
      enterPushkin(s, scene);
      break;
    case 'starlets':
      enterStarlets(s, scene);
      break;
    case 'therapy':
      enterTherapy(s, scene);
      break;
    case 'hotelmaid':
      enterHotelmaid(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const adverts_definition: LocationDef = {
  name: 'adverts_definition',
  region: 'other',
  enter: enter,
};
