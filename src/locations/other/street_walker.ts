import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).prst_loc ?? 0))) {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      }
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h2>St. Petersburg</h2></center>');
    scene.text('<center><b>City center</b></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/citycenter/downw.jpg');
      } else {
        scene.img('images/locations/city/citycenter/downwn.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/citycenter/down.jpg');
      } else {
        scene.img('images/locations/city/citycenter/down_night.jpg');
      }
    }
  } else {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      }
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h2>St. Petersburg</h2></center>');
    scene.text('<center><b>Red Light District</b></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/industrial/industw.jpg');
      } else {
        scene.img('images/locations/city/industrial/industwn.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/industrial/city_industrial.jpg');
      } else {
        scene.img('images/locations/city/industrial/nord2.jpg');
      }
    }
    if (((s as any).prst_loc ?? 0) === 2) {
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
          }
          if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
          }
        } else {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
          }
          if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
          }
        }
      }
      qspCall(s, 'stat', '');
      scene.text('<center><h2>St. Petersburg</h2></center>');
      scene.text('<center><b>Residential</b></center>');
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/city/residential/streetw.jpg');
        } else {
          scene.img('images/locations/city/residential/streetwn.jpg');
        }
      } else {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/city/residential/street.jpg');
        } else {
          scene.img('images/locations/city/residential/street_night.jpg');
        }
      }
    }
  }
  scene.build();
}

export const street_walker: LocationDef = {
  name: 'street_walker',
  title: 'Street',
  region: 'other',
  enter: enter,
};
