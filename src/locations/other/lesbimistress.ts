import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mistressqwest ?? 0) > 12) {
    scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'gholefinish'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'gholepunish'] }]);
  }
  if (((s as any).mistresscontract ?? 0) <= ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'renewal'] }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/mistress.jpg');
    scene.text('Mistress looks at you expectantly and you look at her. You feel like it\'s a personal thing, that you\'re her inanimate sex-plaything, with which she is entitled to do whatever she pleases.');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub45.jpg');
    scene.text('You quickly remove your clothes and, as befits a well-bred slave, pose completely still in front of your mistress.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    if (((s as any).daystart ?? 0) > ((s as any).lesbiday ?? 0) + 7) {
      (s as any).lesbiday = ((s as any).daystart ?? 0);
      qspCall(s, 'sweat', 'add', 20);
      (s as any).spanked = 3;
      qspCall(s, 'mood', 'lower', 'min');
      qspCall(s, 'arousal', 'foreplay', 40, 'sub', 'maso');
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/natalya/sex/sub43.jpg');
      scene.text('Mistress stares at you blankly. "Get in position for a spanking, slave. I\'m going to teach you some manners!"');
      scene.text('She spends half an hour spanking you, occasionally commenting through gritted teeth about your bad behavior and lack of devotion. Once she finishes, she forces you to quickly get dressed before throwing you out the door.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      ]);
    } else {
      (s as any).lesbiday = ((s as any).daystart ?? 0);
      if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 0  &&  ((((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) < 300  &&  ((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) > 200)  ||  ((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) < 120)) {
        scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'BDSMEV'] }]);
      }
      if (((s as any).MistressObedience ?? 0) === 1) {
        if (100 - (Math.floor(Math.random() * 51) + 0) < ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          (s as any).MistressObedience = 2;
        }
      } else {
        if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          (s as any).MistressObedience = 1;
        } else {
          (s as any).MistressObedience = 3;
        }
        if (((s as any).MistressObedience ?? 0) === 3) {
          if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            (s as any).MistressObedience = 2;
          } else {
            (s as any).MistressObedience = 4;
          }
        } else {
          if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            (s as any).MistressObedience = 3;
          } else {
            (s as any).MistressObedience = 5;
          }
          if (((s as any).MistressObedience ?? 0) === 5) {
            if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
              (s as any).MistressObedience = 4;
            }
          }
          if (((s as any).MistressObedience ?? 0) <= 1) {
            // TODO-QSP: :mistsevere
            (s as any).i = Math.floor(Math.random() * 4) + 1;
            if (((s as any).mistsevere ?? 0)?.[String((s as any).i ?? 0)] === 1) {
              // TODO-QSP: jump 'mistsevere'
            }
            (s as any).mistsevere[String((s as any).i ?? 0)] = 1;
            scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'severe_<<i>>'] }]);
          } else {
            // TODO-QSP: :mistpunish
            (s as any).i = Math.floor(Math.random() * 6) + 1;
            if (((s as any).mistpunish ?? 0)?.[String((s as any).i ?? 0)] === 1) {
              // TODO-QSP: jump 'mistpunish'
            }
            (s as any).mistpunish[String((s as any).i ?? 0)] = 1;
            scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'punish_<<i>>'] }]);
            if (((s as any).MistressObedience ?? 0) === 3) {
              // TODO-QSP: :mistneutral
              (s as any).i = Math.floor(Math.random() * 9) + 1;
              if (((s as any).mistneutral ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                // TODO-QSP: jump 'mistneutral'
              }
              (s as any).mistneutral[String((s as any).i ?? 0)] = 1;
              scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'neutral_<<i>>'] }]);
            } else {
              // TODO-QSP: :misttreat
              (s as any).i = Math.floor(Math.random() * 4) + 1;
              if (((s as any).misttreat ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                // TODO-QSP: jump 'misttreat'
              }
              (s as any).misttreat[String((s as any).i ?? 0)] = 1;
              scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'treat_<<i>>'] }]);
              if (((s as any).MistressObedience ?? 0) >= 5) {
                // TODO-QSP: :mistamazing
                (s as any).i = Math.floor(Math.random() * 3) + 1;
                if (((s as any).mistamazing ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                  // TODO-QSP: jump 'mistamazing'
                }
                (s as any).mistamazing[String((s as any).i ?? 0)] = 1;
                scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'amazing_<<i>>'] }]);
              }
            }
          }
        }
      }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const lesbimistress: LocationDef = {
  name: 'lesbimistress',
  region: 'other',
  enter: enter,
};
