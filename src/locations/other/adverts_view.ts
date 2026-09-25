import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterModel(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('AURORA<br>');
  (s as any).text = ((s as any).text ?? 0) + ('We are St. Petersburg\'s lead female casting agency, providing actresses for blockbuster movies,<br>');
  (s as any).text = ((s as any).text ?? 0) + ('TV shows and commercials, and we are looking for our next BIG STAR!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>If you are…<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- 16 or older<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Punctual, reliable and able to travel<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Available for part-time work<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Wanting to appear in blockbuster movies and popular TV shows<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Then we are looking for YOU<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Come to the Aurora Talent Agency located in the City Center<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Have your first audition TODAY!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Guitar lessons with Vikotr Zinchuk.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Modern methods<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- All ages welcome<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Flexible schedule<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Courses available:<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Classical guitar<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Acoustic guitar<br>');
  (s as any).text = ((s as any).text ?? 0) + ('- Electric guitar<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Lessons for just ' + qspFunc(s, 'money', 'string_price', 300) + '!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Enroll now');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  ((s as any).ml_guitarlesson = (s as any).ml_guitarlesson ?? {})['advertisement'] = 1;
  (s as any).text = undefined;
  scene.build();
}

function enterSing(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Let your inner beauty shine! Singing lessons now available at the Vladimir Lenin community centre in St. Petersburg industrial area.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Only ' + qspFunc(s, 'money', 'string_price', 500) + '!');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterBurlesque(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Pushkin Dance Theater (Est. 1995)<br>');
  (s as any).text = ((s as any).text ?? 0) + ('We are a celebrated burlesque troupe based in Pushkin.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('It is inspired by the beauty of the human sexuality and is full of extravagance, glamour and glitter.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Come to see the performance, it is an exaltation of beauty, grace & female elegance.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Catch the shows from 6 PM to 11 PM, from Wednesday to Sunday<br>');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterSecretary(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Titan-Express Engineering<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Join our Team, We are hiring!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Our company is looking to hire motivated members to work at our different locations.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('To apply, walk-in in person only at our regular business hours<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Current openings<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Full-Time Information Directory Assistant<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Mon to Fri: 9 AM to 5 PM<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Starting salary at ' + qspFunc(s, 'money', 'string_profit', 1500) + ' per shift<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Requirements<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Secretarial Work Certificate<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Professional Attire & Appearance<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>If you have any questions, please reach us at www.te.corp.com<br>');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  if (((s as any).job_hiring_step ?? 0)?.['city_office_secretary'] === 0) {
    ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_secretary'] = 1;
  }
  scene.build();
}

function enterDiner(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Dish Washer Wanted!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Diner Bystroeshka located in Downtown District.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('100 per hour<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Apply in person.');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterFitness(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Your Sports Club. Join Now!</center>');
  scene.build();
}

function enterPushkin(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Visit Pushkin!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Explore beautiful historic buildings and the famous Catherine park.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Embrace history and heritage in Old Town.');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Do you have the groove and something to prove? Then sign up for Dance Classes at Pavlovsk Community Center and show us what you\'ve got!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Lessons range from beginner to expert level. FUN for girls of any skill level.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('And, if you\'ve really know how to shake that money-maker, then audition for the<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Albina\'s Starlets<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Pavlovsk\'s renowned dance troupe! If you\'re accepted you could be travelling to a variety of cities and towns to make your hometown proud!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Stop by today and dance your problems away!');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterTherapy(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('Depression? Low self-esteem?<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Don\'t let it break you!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Come see the friendly and warm Dr. Pavlov. Board certified and highly respected.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Dr. Pavlov offers traditional therapy sessions as well as a highly advanced and effective form of hypnotherapy.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Pick yourself up from the depths of sadness and take back control of your life! It\'s never too late for, Peace Of Mind.');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  scene.build();
}

function enterHotelmaid(s: GameState, scene: SceneBuilder): void {
  (s as any).text = '<center>';
  (s as any).text = ((s as any).text ?? 0) + ('<b>Maid Wanted!</b><br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>The Pavlovsk Hotel is looking for a hardworking maid to join our housekeeping team.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Duties include cleaning rooms, making beds, and maintaining common areas.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>No experience necessary — we will train you!<br>');
  (s as any).text = ((s as any).text ?? 0) + ('Flexible hours available.<br>');
  (s as any).text = ((s as any).text ?? 0) + ('<br>Interested? Visit the hotel reception at the Pavlovsk Market and ask about the position.');
  (s as any).text = ((s as any).text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).text || ''), curActs: [] };
  (s as any).text = undefined;
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 0) {
    ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
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

export const adverts_view: LocationDef = {
  name: 'adverts_view',
  title: '<center>Your Sports Club. Join Now!</center>',
  region: 'other',
  enter: enter,
};
