import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start') {
    qspCall(s, 'core_library', 'setloc', 'talent_agency', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.text('<center><b>Aurora Talent Agency</b></center>');
    scene.img('images/locations/city/citycenter/aurora/front.jpg');
    scene.text('"Hello, welcome to the Aurora Female Talent Agency! How may I help you?"');
    if (((s as any).casting ?? 0) === 3  &&  ((s as any).hour ?? 0) <= 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0)) {
      ((s as any).audition ?? {})['room'] = 3;
      scene.text('"Oh? Are you here for the SMTV commercial? Please go to interview room 3. They\'re waiting for you inside.');
    } else {
      if (((s as any).casting ?? 0) === 3  &&  ((((s as any).hour ?? 0) > 11  &&  ((s as any).SMTV_commercial ?? 0) === ((s as any).daystart ?? 0))  ||  ((s as any).SMTV_commercial ?? 0) < ((s as any).daystart ?? 0))) {
        scene.text('"You\'re here for the SMTV commercial? Sorry, you\'re late, and you\'ve just cost the production tons of money. You\'ve been fired. The first rule of showbiz, honey: show up on time.');
        (s as any).casting = 0;
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
      { label: 'Go to the interview rooms', goto: ['talent_agency', 'hallway'] },
      { label: 'Check the callboard', goto: ['casting', 'callboard'] },
    ]);
  } else {
    if (((s as any).audition ?? 0)?.['day'] > 0) {
      scene.actions([
        { label: 'Check the callboard', handler: (st: GameState) => {
    // TODO-QSP: msg'You can''t try out for more roles when you already have ...
  } },
      ]);
    } else {
      if (((s as any).actress_cast ?? 0) > 0) {
        scene.actions([
          { label: 'Check the callboard', handler: (st: GameState) => {
    // TODO-QSP: msg'You can''t try out for more roles while you already have...
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const talent_agency: LocationDef = {
  name: 'talent_agency',
  title: 'Aurora Talent Agency',
  region: 'other',
  description: ['"Hello, welcome to the Aurora Female Talent Agency! How may I help you?"'],
  enter: enter,
};
