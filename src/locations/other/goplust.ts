import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).GLust = 0;
  (s as any).VasanLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).VasanLust ?? 0) >= 50  &&  ((s as any).VasanTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopV_msg = 'Vasan looks at you greedily';
    // TODO-QSP: $namgop[1] = 'Vasan'
    (s as any).gopV = 1;
    (s as any).VasanTut = 2;
  } else {
    if (((s as any).VasanLust ?? 0) < 80  &&  ((s as any).VasanTut ?? 0) === 1) {
      (s as any).gopV_msg = 'Vasan is happy to just chat with you';
      (s as any).gopV = 1;
    } else {
      if ((!((s as any).VasanTut ?? 0))) {
        (s as any).gopV_msg = '';
        (s as any).gopV = 0;
      }
    }
  }
  (s as any).BerezaLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).BerezaLust ?? 0) >= 60  &&  ((s as any).BerezaTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopB_msg = 'Bereza rubs his groin and looks at you with interest';
    // TODO-QSP: $namgop[2] = 'Bereza'
    ((s as any).namgop_flag = (s as any).namgop_flag ?? {})[2] = 1;
    (s as any).gopB = 1;
    (s as any).BerezaTut = 2;
  } else {
    if (((s as any).BerezaLust ?? 0) < 95  &&  ((s as any).BerezaTut ?? 0) === 1) {
      (s as any).gopB_msg = 'Bereza ignores you and chats with his friends';
      (s as any).gopB = 1;
    } else {
      if ((!((s as any).BerezaTut ?? 0))) {
        (s as any).gopB_msg = '';
        (s as any).gopB = 0;
      }
    }
  }
  (s as any).VitekLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).VitekLust ?? 0) >= 60  &&  ((s as any).VitekTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopVi_msg = 'Konstantin can\'t take his eyes off your boobs';
    // TODO-QSP: $namgop[3] = 'Konstantin'
    ((s as any).namgop_flag = (s as any).namgop_flag ?? {})[3] = 1;
    (s as any).gopVi = 1;
    (s as any).VitekTut = 2;
  } else {
    if (((s as any).VitekLust ?? 0) < 90  &&  ((s as any).VitekTut ?? 0) === 1) {
      (s as any).gopVi_msg = 'Konstantin is mostly playing with his phone';
      (s as any).gopVi = 1;
    } else {
      if ((!((s as any).VitekTut ?? 0))) {
        (s as any).gopVi_msg = '';
        (s as any).gopVi = 0;
      }
    }
  }
  (s as any).KotilLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).KotilLust ?? 0) >= 70  &&  ((s as any).KostilTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopK_msg = 'Kostil occasionally touches your thigh';
    // TODO-QSP: $namgop[4] = 'Kostil'
    ((s as any).namgop_flag = (s as any).namgop_flag ?? {})[4] = 1;
    (s as any).gopK = 1;
    (s as any).KostilTut = 2;
  } else {
    if (((s as any).KotilLust ?? 0) < 90  &&  ((s as any).KostilTut ?? 0) === 1) {
      (s as any).gopK_msg = 'Kostil is in a deep conversation with one of his friends';
      (s as any).gopK = 1;
    } else {
      if ((!((s as any).KostilTut ?? 0))) {
        (s as any).gopK_msg = '';
        (s as any).gopK = 0;
      }
    }
  }
  (s as any).UdmurtLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).UdmurtLust ?? 0) >= 80  &&  ((s as any).UdmurtTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopU_msg = 'Udmurt stares intently at you. You can see the bulge in his pants grow';
    // TODO-QSP: $namgop[5] = 'Udmurt'
    ((s as any).namgop_flag = (s as any).namgop_flag ?? {})[5] = 1;
    (s as any).gopU = 1;
    (s as any).UdmurtTut = 2;
  } else {
    if (((s as any).UdmurtLust ?? 0) < 90  &&  ((s as any).UdmurtTut ?? 0) === 1) {
      (s as any).gopU_msg = 'Udmurt squats and spits on the ground, fully focused on his sunflower seeds';
      (s as any).gopU = 1;
    } else {
      if ((!((s as any).UdmurtTut ?? 0))) {
        (s as any).gopU_msg = '';
        (s as any).gopU = 0;
      }
    }
  }
  (s as any).SeriLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).SeriLust ?? 0) >= 90  &&  ((s as any).SeriTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopS_msg = 'Gray grins mischievously at you, revealing his gold teeth. His eyes are focused on your feet';
    // TODO-QSP: $namgop[6] = 'Gray'
    ((s as any).namgop_flag = (s as any).namgop_flag ?? {})[6] = 1;
    (s as any).gopS = 1;
    (s as any).SeriTut = 2;
  } else {
    if (((s as any).SeriLust ?? 0) < 95  &&  ((s as any).SeriTut ?? 0) === 1) {
      (s as any).gopS_msg = 'Gray is talking to someone on the phone';
      (s as any).gopS = 1;
    } else {
      if ((!((s as any).SeriTut ?? 0))) {
        (s as any).gopS_msg = '';
        (s as any).gopS = 0;
      }
    }
  }
  // TODO-QSP: $namgop[0] = ''
  (s as any).gopnik = '';
  if (((s as any).gopV ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopV_msg
    if (((s as any).gopB ?? 0) + ((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      // TODO-QSP: $gopnik += ', '
    } else {
      if (((s as any).gopB ?? 0) + ((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        // TODO-QSP: $gopnik += ' and '
      }
    }
  }
  if (((s as any).namgop ?? 0)[1] !== '') {
    // TODO-QSP: $namgop[0] += $namgop[1]
    if (((s as any).namgop_flag ?? 0)[2] + ((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      // TODO-QSP: $namgop[0] += ', '
    } else {
      if (((s as any).namgop_flag ?? 0)[2] + ((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        // TODO-QSP: $namgop[0] += ' and '
      }
    }
  }
  if (((s as any).gopB ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopB_msg
    if (((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      // TODO-QSP: $gopnik += ', '
    } else {
      if (((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        // TODO-QSP: $gopnik += ' and '
      }
    }
  }
  if (((s as any).namgop ?? 0)[2] !== '') {
    // TODO-QSP: $namgop[0] += $namgop[2]
    if (((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      // TODO-QSP: $namgop[0] += ', '
    } else {
      if (((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        // TODO-QSP: $namgop[0] += ' and '
      }
    }
  }
  if (((s as any).gopVi ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopVi_msg
    if (((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      // TODO-QSP: $gopnik += ', '
    } else {
      if (((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        // TODO-QSP: $gopnik += ' and '
      }
    }
  }
  if (((s as any).namgop ?? 0)[3] !== '') {
    // TODO-QSP: $namgop[0] += $namgop[3]
    if (((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      // TODO-QSP: $namgop[0] += ', '
    } else {
      if (((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        // TODO-QSP: $namgop[0] += ' and '
      }
    }
  }
  if (((s as any).gopK ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopK_msg
    if (((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      // TODO-QSP: $gopnik += ', '
    } else {
      if (((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        // TODO-QSP: $gopnik += ' and '
      }
    }
  }
  if (((s as any).namgop ?? 0)[4] !== '') {
    // TODO-QSP: $namgop[0] += $namgop[4]
    if (((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      // TODO-QSP: $namgop[0] += ', '
    } else {
      if (((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        // TODO-QSP: $namgop[0] += ' and '
      }
    }
  }
  if (((s as any).gopU ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopU_msg
    if (((s as any).gopS ?? 0) === 1) {
      // TODO-QSP: $gopnik += ' and '
    }
  }
  if (((s as any).namgop ?? 0)[5] !== '') {
    // TODO-QSP: $namgop[0] += $namgop[5]
    if (((s as any).namgop_flag ?? 0)[6] === 1) {
      // TODO-QSP: $gopnik += ' and '
    }
  }
  if (((s as any).gopS ?? 0) === 1) {
    // TODO-QSP: $gopnik += $gopS_msg
  }
  if (((s as any).namgop ?? 0)[6] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (qspUntranslated(s, "namgop[6]", { location: "goplust" }));
  }
  // TODO-QSP: $namgop[0] += ' strip off your clothes and get out their members'
  scene.build();
}

export const goplust: LocationDef = {
  name: 'goplust',
  region: 'other',
  enter: enter,
};
