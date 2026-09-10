// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModel(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'AURORA<br>'
  // TODO-QSP: $text += 'We are St. Petersburg''s lead female casting agency, providing actresses for blockbuster m...
  // TODO-QSP: $text += 'TV shows and commercials, and we are looking for our next BIG STAR!<br>'
  // TODO-QSP: $text += '<br>If you are…<br>'
  // TODO-QSP: $text += '- 16 or older<br>'
  // TODO-QSP: $text += '- Punctual, reliable and able to travel<br>'
  // TODO-QSP: $text += '- Available for part-time work<br>'
  // TODO-QSP: $text += '- Wanting to appear in blockbuster movies and popular TV shows<br>'
  // TODO-QSP: $text += '<br>Then we are looking for YOU<br>'
  // TODO-QSP: $text += 'Come to the Aurora Talent Agency located in the City Center<br>'
  // TODO-QSP: $text += 'Have your first audition TODAY!<br>'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Guitar lessons with Vikotr Zinchuk.<br>'
  // TODO-QSP: $text += '- Modern methods<br>'
  // TODO-QSP: $text += '- All ages welcome<br>'
  // TODO-QSP: $text += '- Flexible schedule<br>'
  // TODO-QSP: $text += '<br>Courses available:<br>'
  // TODO-QSP: $text += '- Classical guitar<br>'
  // TODO-QSP: $text += '- Acoustic guitar<br>'
  // TODO-QSP: $text += '- Electric guitar<br>'
  // TODO-QSP: $text += '<br>Lessons for just <<$func(''money'', ''string_price'', 300)>>!<br>'
  // TODO-QSP: $text += 'Enroll now'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  (s as any).ml_guitarlesson['advertisement'] = 1;
  scene.build();
}

function enterSing(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Let your inner beauty shine! Singing lessons now available at the Vladimir Lenin community...
  // TODO-QSP: $text += 'Only <<$func(''money'', ''string_price'', 500)>>!'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterBurlesque(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Pushkin Dance Theater (Est. 1995)<br>'
  // TODO-QSP: $text += 'We are a celebrated burlesque troupe based in Pushkin.<br>'
  // TODO-QSP: $text += 'It is inspired by the beauty of the human sexuality and is full of extravagance, glamour a...
  // TODO-QSP: $text += '<br>Come to see the performance, it is an exaltation of beauty, grace & female elegance.<b...
  // TODO-QSP: $text += 'Catch the shows from 6 PM to 11 PM, from Wednesday to Sunday<br>'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterSecretary(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Titan-Express Engineering<br>'
  // TODO-QSP: $text += 'Join our Team, We are hiring!<br>'
  // TODO-QSP: $text += '<br>Our company is looking to hire motivated members to work at our different locations.<b...
  // TODO-QSP: $text += 'To apply, walk-in in person only at our regular business hours<br>'
  // TODO-QSP: $text += '<br>Current openings<br>'
  // TODO-QSP: $text += 'Full-Time Information Directory Assistant<br>'
  // TODO-QSP: $text += 'Mon to Fri: 9 AM to 5 PM<br>'
  // TODO-QSP: $text += 'Starting salary at <<$func(''money'', ''string_profit'', 1500)>> per shift<br>'
  // TODO-QSP: $text += '<br>Requirements<br>'
  // TODO-QSP: $text += 'Secretarial Work Certificate<br>'
  // TODO-QSP: $text += 'Professional Attire & Appearance<br>'
  // TODO-QSP: $text += '<br>If you have any questions, please reach us at www.te.corp.com<br>'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  if (((s as any).job_hiring_step ?? 0)?.['city_office_secretary'] === 0) {
    (s as any).job_hiring_step['city_office_secretary'] = 1;
  }
  scene.build();
}

function enterDiner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Dish Washer Wanted!<br>'
  // TODO-QSP: $text += 'Diner Bystroeshka located in Downtown District.<br>'
  // TODO-QSP: $text += '100 per hour<br>'
  // TODO-QSP: $text += 'Apply in person.'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterFitness(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Your Sports Club. Join Now!</center>');
  scene.build();
}

function enterPushkin(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Visit Pushkin!<br>'
  // TODO-QSP: $text += 'Explore beautiful historic buildings and the famous Catherine park.<br>'
  // TODO-QSP: $text += 'Embrace history and heritage in Old Town.'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Do you have the groove and something to prove? Then sign up for Dance Classes at Pavlovsk ...
  // TODO-QSP: $text += 'Lessons range from beginner to expert level. FUN for girls of any skill level.<br>'
  // TODO-QSP: $text += 'And, if you''ve really know how to shake that money-maker, then audition for the<br>'
  // TODO-QSP: $text += '<br>Albina''s Starlets<br>'
  // TODO-QSP: $text += '<br>Pavlovsk''s renowned dance troupe! If you''re accepted you could be travelling to a va...
  // TODO-QSP: $text += 'Stop by today and dance your problems away!'
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterTherapy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += 'Depression? Low self-esteem?<br>'
  // TODO-QSP: $text += 'Don''t let it break you!<br>'
  // TODO-QSP: $text += '<br>Come see the friendly and warm Dr. Pavlov. Board certified and highly respected.<br>'
  // TODO-QSP: $text += 'Dr. Pavlov offers traditional therapy sessions as well as a highly advanced and effective ...
  // TODO-QSP: $text += 'Pick yourself up from the depths of sadness and take back control of your life! It''s neve...
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  scene.build();
}

function enterHotelmaid(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $text += '<b>Maid Wanted!</b><br>'
  // TODO-QSP: $text += '<br>The Pavlovsk Hotel is looking for a hardworking maid to join our housekeeping team.<br...
  // TODO-QSP: $text += 'Duties include cleaning rooms, making beds, and maintaining common areas.<br>'
  // TODO-QSP: $text += '<br>No experience necessary — we will train you!<br>'
  // TODO-QSP: $text += 'Flexible hours available.<br>'
  // TODO-QSP: $text += '<br>Interested? Visit the hotel reception at the Pavlovsk Market and ask about the positio...
  // TODO-QSP: $text += '</center>'
  // TODO-QSP: $text
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 0) {
    (s as any).job_hiring_step['pav_hotel_maid'] = 1;
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
      enterModel(s, scene);
      break;
  }
}

export const adverts_view: LocationDef = {
  name: 'adverts_view',
  title: '<center>Your Sports Club. Join Now!</center>',
  region: 'other',
  enter: enter,
};
