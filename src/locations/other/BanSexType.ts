// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).BanSexTypeCheck = 1;
  (s as any).BlowArray[0] = (-1);
  (s as any).CooneyArray[0] = (-1);
  (s as any).CooneyArray[1] = 12;
  (s as any).CooneyArray[2] = 28;
  (s as any).CooneyArray[3] = 29;
  (s as any).CooneyArray[4] = 30;
  (s as any).CooneyArray[5] = 34;
  (s as any).CooneyArray[6] = 35;
  (s as any).CooneyArray[7] = 50;
  (s as any).CooneyArray[8] = 55;
  (s as any).CooneyArray[9] = 76;
  (s as any).CooneyArray[10] = 81;
  (s as any).CooneyArray[11] = 87;
  (s as any).MissionArray[0] = (-1);
  (s as any).MissionArray[1] = 31;
  (s as any).MissionArray[2] = 33;
  (s as any).MissionArray[3] = 36;
  (s as any).CowgirlArray[0] = (-1);
  (s as any).CowgirlArray[1] = 15;
  (s as any).CowgirlArray[2] = 28;
  (s as any).CowgirlArray[3] = 29;
  (s as any).CowgirlArray[4] = 32;
  (s as any).DoggyArray[0] = (-1);
  (s as any).SidewaysArray[0] = (-1);
  (s as any).SidewaysArray[1] = 13;
  (s as any).SidewaysArray[2] = 36;
  (s as any).SidewaysArray[3] = 39;
  (s as any).SidewaysArray[4] = 75;
  (s as any).AnalArray[0] = (-1);
  (s as any).AnalArray[1] = 15;
  (s as any).AnalArray[2] = 16;
  (s as any).AnalArray[3] = 17;
  (s as any).AnalArray[4] = 22;
  (s as any).AnalArray[5] = 44;
  (s as any).AnalArray[6] = 51;
  (s as any).AnalArray[7] = 52;
  (s as any).AnalArray[8] = 61;
  (s as any).AnalArray[9] = 74;
  (s as any).AnalArray[10] = 77;
  (s as any).AnalArray[11] = 80;
  scene.build();
}

export const BanSexType: LocationDef = {
  name: 'BanSexType',
  region: 'other',
  enter: enter,
};
