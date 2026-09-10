// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCallboard(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/callboard.jpg');
  scene.text('<b>Calls For Extras</b>');
  if (((s as any).casting_extra1 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'BackShowerGirl\'">Background Shower Girl</a>');
  }
  if (((s as any).casting_extra2 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'SpringBreakFlasher\'">Spring Break Flasher</a>');
  }
  if (((s as any).casting_extra3 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'cadaver\'">  </a>');
  }
  if (((s as any).casting_extra4 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'DildoGirl\'">Dildo Girl</a>');
  }
  if (((s as any).casting_extra5 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'NakedLockerGirl\'">Naked Locker Girl</a>');
  }
  if (((s as any).casting_extra6 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'UndressingLockerGirl\'">Undressing Locker Girl</a>');
  }
  if (((s as any).casting_extra7 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'ToplessCheerleader\'">Topless Cheerleader</a>');
  }
  if (((s as any).casting_extra8 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'HotShowerGirl\'">Hot Shower Girl</a>');
  }
  if (((s as any).casting_extra9 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'WerewolfGirl\'">Werewolf Victim</a>');
  }
  scene.text('<b>Calls For Day Players</b>');
  if (((s as any).casting_minor1 ?? 0) <= 25) {
    scene.text('<a href="exec:gt \'casting\',\'DinerWaitress\'">Diner Waitress</a>');
  }
  if (((s as any).casting_minor2 ?? 0) <= 25) {
    scene.text('<a href="exec:gt \'casting\',\'SluttyClubGirl\'">Slutty Club Girl</a>');
  }
  scene.text('<b>Calls For Supporting Actress</b>');
  scene.text('<b>Calls For Lead Actress</b>');
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', ''] },
  ]);
  scene.build();
}

function enterCallboardExtrasUpdate(s: GameState, scene: SceneBuilder): void {
  (s as any).casting_extra1 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra2 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra3 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra4 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra5 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra6 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra7 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra8 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra9 = Math.floor(Math.random() * 100) + 1;
  scene.build();
}

function enterCallboardUpdate(s: GameState, scene: SceneBuilder): void {
  (s as any).casting_minor1 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_minor2 = Math.floor(Math.random() * 100) + 1;
  scene.build();
}

function enterAuditionSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).audition['week'] = Math.floor(Math.random() * 7) + 1;
  if (((s as any).month ?? 0) === 2  &&  (((s as any).audition ?? 0)?.['week'] + ((s as any).day ?? 0)) > 28) {
    (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
    (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 28 + ((s as any).audition ?? 0)?.['week'];
  } else {
    (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
    (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 30 + ((s as any).audition ?? 0)?.['week'];
    if ((((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 5  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 12)  &&  (((s as any).audition ?? 0)?.['week'] + ((s as any).day ?? 0)) > 31) {
      (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
      (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 31 + ((s as any).audition ?? 0)?.['week'];
    } else {
      (s as any).audition['calendar_day'] = ((s as any).day ?? 0) + ((s as any).audition ?? 0)?.['week'];
      (s as any).audition['month'] = ((s as any).monthName ?? 0);
    }
    (s as any).audition['day'] = ((s as any).daystart ?? 0) + ((s as any).audition ?? 0)?.['week'];
    (s as any).acting['shoot_day'] = ((s as any).daystart ?? 0) + ((s as any).rand ?? 0)(((s as any).audition ?? 0)?.['day'] + ((s as any).rand ?? 0)(2, 7));
    (s as any).acting['shoot_time'] = Math.floor(Math.random() * 17) + 6;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'callboard':
      enterCallboard(s, scene);
      break;
    case 'callboard_extras_update':
      enterCallboardExtrasUpdate(s, scene);
      break;
    case 'callboard_update':
      enterCallboardUpdate(s, scene);
      break;
    case 'audition_schedule':
      enterAuditionSchedule(s, scene);
      break;
    default:
      enterCallboard(s, scene);
      break;
  }
}

export const casting: LocationDef = {
  name: 'casting',
  title: '<b>Calls For Extras</b>',
  region: 'other',
  enter: enter,
};
