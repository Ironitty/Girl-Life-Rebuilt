// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).GLust = 0;
  (s as any).namgop = undefined;
  (s as any).namgop_flag = undefined;
  (s as any).VasanLust = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).VasanLust ?? 0) >= 50  &&  ((s as any).VasanTut ?? 0) === 1) {
    (s as any).GLust = ((s as any).GLust ?? 0) + (1);
    (s as any).gopV_msg = 'Vasan looks at you greedily';
    ((s as any).namgop = (s as any).namgop ?? {})[1] = 'Vasan';
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
    ((s as any).namgop = (s as any).namgop ?? {})[2] = 'Bereza';
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
    ((s as any).namgop = (s as any).namgop ?? {})[3] = 'Konstantin';
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
    ((s as any).namgop = (s as any).namgop ?? {})[4] = 'Kostil';
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
    ((s as any).namgop = (s as any).namgop ?? {})[5] = 'Udmurt';
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
    ((s as any).namgop = (s as any).namgop ?? {})[6] = 'Gray';
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
  ((s as any).namgop = (s as any).namgop ?? {})[0] = '';
  (s as any).gopnik = '';
  if (((s as any).gopV ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? 0) + (((s as any).gopV_msg ?? 0));
    if (((s as any).gopB ?? 0) + ((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      (s as any).gopnik = ((s as any).gopnik ?? 0) + (', ');
    } else {
      if (((s as any).gopB ?? 0) + ((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        (s as any).gopnik = ((s as any).gopnik ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).namgop ?? 0)[1] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[1] ?? 0));
    if (((s as any).namgop_flag ?? 0)[2] + ((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (', ');
    } else {
      if (((s as any).namgop_flag ?? 0)[2] + ((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).gopB ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? 0) + (((s as any).gopB_msg ?? 0));
    if (((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      (s as any).gopnik = ((s as any).gopnik ?? 0) + (', ');
    } else {
      if (((s as any).gopVi ?? 0) + ((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        (s as any).gopnik = ((s as any).gopnik ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).namgop ?? 0)[2] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[2] ?? 0));
    if (((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (', ');
    } else {
      if (((s as any).namgop_flag ?? 0)[3] + ((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).gopVi ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? 0) + (((s as any).gopVi_msg ?? 0));
    if (((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      (s as any).gopnik = ((s as any).gopnik ?? 0) + (', ');
    } else {
      if (((s as any).gopK ?? 0) + ((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        (s as any).gopnik = ((s as any).gopnik ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).namgop ?? 0)[3] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[3] ?? 0));
    if (((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (', ');
    } else {
      if (((s as any).namgop_flag ?? 0)[4] + ((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).gopK ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? 0) + (((s as any).gopK_msg ?? 0));
    if (((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) > 1) {
      (s as any).gopnik = ((s as any).gopnik ?? 0) + (', ');
    } else {
      if (((s as any).gopU ?? 0) + ((s as any).gopS ?? 0) === 1) {
        (s as any).gopnik = ((s as any).gopnik ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).namgop ?? 0)[4] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[4] ?? 0));
    if (((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] > 1) {
      ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (', ');
    } else {
      if (((s as any).namgop_flag ?? 0)[5] + ((s as any).namgop_flag ?? 0)[6] === 1) {
        ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (' and ');
      }
    }
  }
  if (((s as any).gopU ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? 0) + (((s as any).gopU_msg ?? 0));
    if (((s as any).gopS ?? 0) === 1) {
      (s as any).gopnik = ((s as any).gopnik ?? '') + ' and ';
    }
  }
  if (((s as any).namgop ?? 0)[5] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[5] ?? 0));
    if (((s as any).namgop_flag ?? 0)[6] === 1) {
      (s as any).gopnik = ((s as any).gopnik ?? '') + ' and ';
    }
  }
  if (((s as any).gopS ?? 0) === 1) {
    (s as any).gopnik = ((s as any).gopnik ?? '') + ((s as any).gopS_msg ?? 0);
  }
  if (((s as any).namgop ?? 0)[6] !== '') {
    ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + ((((s as any).namgop ?? 0)?.[6] ?? 0));
  }
  ((s as any).namgop = (s as any).namgop ?? {})[0] = ((s as any).namgop[0] ?? 0) + (' strip off your clothes and get out their members');
  scene.build();
}

export const goplust: LocationDef = {
  name: 'goplust',
  region: 'other',
  enter: enter,
};
