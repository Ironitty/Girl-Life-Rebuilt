// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCheckForEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).experimentQW ?? 0)?.['trial_active'] !== ''  &&  ((s as any).experimentQW ?? 0)?.['trial_duration'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).experimentQW ?? 0)?.['event_day']) {
    // TODO-QSP: $sleep_events_priority[] = "gs 'city_experimental_trials_events', 'set_experimental_trials_event'"
  }
  return;
  scene.build();
}

function enterSetExperimentalTrialsEvent(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['city_experimental_trials_events', ''] }]);
  scene.build();
}

function enterNewspaperAd(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Help advance medical research today</b></center>');
  scene.text('A St. Petersburg based medical clinic is offering significant payments to those who are willing to take part in their medical trials. We have interviewed various participants.');
  scene.text('"All I had to do was swallow a pill and report back a week later. Took me less than 10 minutes and haven\'t regretted it!"');
  scene.text('"The staff are very friendly and helpful. My hair grew 20 cm and I got paid for it! That\'s a steal if you ask me."');
  scene.text('[Redacted]');
  scene.text('"I\'ve taken part in multiple trials now, and I haven\'t had any complaints! Best decision of my life!"');
  scene.text('Signup for a medical trial today, and help build a brighter future!');
  if (((s as any).experimentQW ?? 0)?.['discovered'] < 1) {
    ((s as any).experimentQW ?? {})['discovered'] = 1;
  }
  return;
  scene.build();
}

function enterComputerAd(s: GameState, scene: SceneBuilder): void {
  scene.text('You find an ad to participate in medical trials.');
  scene.text('<center><b>Help advance medical research today</b></center>');
  scene.text('"All I had to do was swallow a pill and report back a week later. Took me less than 10 minutes and haven\'t regretted it!"');
  scene.text('"The staff are very friendly and helpful. My hair grew 20 cm and I got paid for it! That\'s a steal if you ask me."');
  scene.text('[Redacted]');
  scene.text('"I\'ve taken part in multiple trials now, and I haven\'t had any complaints! Best decision of my life!"');
  scene.text('Signup for a medical trial today at the St. Petersburg clinic, and help build a brighter future!');
  if (((s as any).experimentQW ?? 0)?.['discovered'] < 1) {
    ((s as any).experimentQW ?? {})['discovered'] = 1;
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_for_events':
      enterCheckForEvents(s, scene);
      break;
    case 'set_experimental_trials_event':
      enterSetExperimentalTrialsEvent(s, scene);
      break;
    case 'newspaper_ad':
      enterNewspaperAd(s, scene);
      break;
    case 'computer_ad':
      enterComputerAd(s, scene);
      break;
    default:
      enterCheckForEvents(s, scene);
      break;
  }
}

export const city_experimental_trials_events: LocationDef = {
  name: 'city_experimental_trials_events',
  title: '<center><b>Help advance medical research today</b></center>',
  region: 'city',
  enter: enter,
};
