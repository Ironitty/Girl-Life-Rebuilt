import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).nosave = 1;
  qspCall(s, 'stat', '');
  ((s as any).KGZVars ?? {})['rec'] = (((s as any).KGZVars ?? {})?.['day'] - 1) * 24 + (((s as any).KGZVars ?? {})?.['hour'] - 8);
  if (((s as any).KGZVars ?? 0)?.['record'] < ((s as any).KGZVars ?? 0)?.['rec']) {
    ((s as any).KGZVars ?? {})['record'] = ((s as any).KGZVars ?? 0)?.['rec'];
  }
  scene.text('<center><b>Dead City</b></center>');
  // TODO-QSP: dynamic text: <center><b>Your record: <<KGZVars['record']>> hours</b></center>
  scene.text(`<center><b>Your record: ${((s as any).KGZVars ?? 0)?.['record']} hours</b></center>`);
  if (((s as any).KGZVars ?? 0)?.['dost'] === 1) {
    scene.text('Achievement unlocked: Found Fort Bragg');
  }
  scene.text('A zombie survival game where your only goal is to survive as long as possible, through whatever means necessary.');
  if (((s as any).KGZVars ?? 0)?.['HP'] > 0) {
    scene.actions([
      { label: 'Load a saved game', goto: ['KGZgame', ''] },
    ]);
  }
  scene.actions([
    { label: 'Play a new game', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['HP'] = 100;
    ((s as any).KGZVars ?? {})['day'] = 1;
    ((s as any).KGZVars ?? {})['hour'] = 8;
    ((s as any).KGZVars ?? {})['sup'] = 3;
    ((s as any).KGZVars ?? {})['medkit'] = 1;
    ((s as any).KGZVars ?? {})['rec'] = 0;
    scene.text('Various logos fade in and out on the screen as the game boots up.');
    scene.text('DeGross Entertainment');
    scene.text('In collaboration with');
    scene.text('PAPA_GANS Inc.');
    scene.text('<b>DEAD CITY</b>');
    scene.text('An introduction scene then plays, a man monologuing as scenes of chaos unfold:');
    scene.text('I was an ordinary man who went to work and paid bills, but everything changed that morning…');
    scene.text('I woke up surprisingly early, the sun\'s rays coming through the curtains joyfully heralding a new day.');
    scene.text('I normally didn\'t have time to watch the news, but that day I decided not to rush to work, and simply enjoy the morning. I brewed a coffee and switched the TV on, only to be greeted by scenes of chaos on the streets as reports flooded in about riots and people attacking each other on the street after the government had quarantined the city amidst what they called "a highly contagious viral outbreak."');
    scene.text('I watched in shock and horror as the reporter was suddenly attacked by what appeared to be a group of snarling girls covered in blood. As screams and gunshots rang out, the signal was suddenly lost.');
    scene.text('I was then interrupted by a noise outside the apartment door. I heard vicious snarls followed by heart-rending cries, cries which ended after a few seconds… I quickly barricaded the door before looking out the window as sirens blared and buildings burned.');
    scene.text('3 months have passed since then and the military have contained the zombie outbreak within the city by cutting it off from the outside world, but those of us left trapped inside were left to fend for ourselves against not only the dead, but each other…');
    scene.actions([
      { label: 'Start playing', goto: ['KGZgame', ''] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).nosave = 0;
  }, goto: ['komp', 'start'] },
  ]);
  scene.build();
}

export const KGZstart: LocationDef = {
  name: 'KGZstart',
  title: '<center><b>Dead City</b></center>',
  region: 'kgd',
  description: ['Achievement unlocked: Found Fort Bragg'],
  enter: enter,
};
