import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCount(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tattoo_management', 'count');
  qspCall(s, 'piercing_management', 'count');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Black Dragon Tattoo & Piercing Parlor</b></center>');
  scene.img('images/locations/city/industrial/salon/pirsingstudia.jpg');
  scene.text('A small tattoo and piercing studio, with a single female artist doing both the tattoos and the piercings.');
  scene.text('Various pictures showing off examples of tattoos and piercings adorn the walls.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.text('The parlor is closing and you are asked to leave.');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShopMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterShopMenu(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table border=1>');
  scene.text('<tr>');
  scene.text('<th>');
  scene.text('View tattoos');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('View tattoos');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('View piercings');
  scene.text('</th>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_hand'">Hand - <<$func('money', 'string...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_hand'">Hand - ${qspFunc(s, 'money', 'string_price', 7000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_lip'">Lip - <<$func('money', 'string_p...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_lip'">Lip - ${qspFunc(s, 'money', 'string_price', 5000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_ears'">Ear - ...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_ears'">Ear - ${qspFunc(s, 'money', 'string_price', 3000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_ears'">Ear - ...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_ears'">Ear - ${qspFunc(s, 'money', 'string_price', 1000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_wrist'">Wrist - <<$func('money', 'stri...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_wrist'">Wrist - ${qspFunc(s, 'money', 'string_price', 7000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_belly'">Belly - <<$func('money', 'stri...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_belly'">Belly - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_nose'">Nose -...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_nose'">Nose - ${qspFunc(s, 'money', 'string_price', 5000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_nose'">Nose -...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_nose'">Nose - ${qspFunc(s, 'money', 'string_price', 2000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_ankle'">Ankle - <<$func('money', 'stri...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_ankle'">Ankle - ${qspFunc(s, 'money', 'string_price', 8000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_ass'">Ass - <<$func('money', 'string_p...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_ass'">Ass - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_brow'">Eyebro...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_brow'">Eyebrow - ${qspFunc(s, 'money', 'string_price', 5000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_brow'">Eyebro...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_brow'">Eyebrow - ${qspFunc(s, 'money', 'string_price', 2000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_arm'">Arm - <<$func('money', 'string_p...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_arm'">Arm - ${qspFunc(s, 'money', 'string_price', 8000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_face'">Face - <<$func('money', 'string...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_face'">Face - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_lip'">Lip - <...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_lip'">Lip - ${qspFunc(s, 'money', 'string_price', 6000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_lip'">Lip - <...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_lip'">Lip - ${qspFunc(s, 'money', 'string_price', 3000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_shoulder'">Shoulder - <<$func('money',...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_shoulder'">Shoulder - ${qspFunc(s, 'money', 'string_price', 8000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_chest'">Chest - <<$func('money', 'stri...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_chest'">Chest - ${qspFunc(s, 'money', 'string_price', 12000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_tongue'">Tong...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_tongue'">Tongue - ${qspFunc(s, 'money', 'string_price', 7000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_tongue'">Tong...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_tongue'">Tongue - ${qspFunc(s, 'money', 'string_price', 4000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_neck'">Neck - <<$func('money', 'string...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_neck'">Neck - ${qspFunc(s, 'money', 'string_price', 8000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_tramp'">Tramp stamp - <<$func('money',...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_tramp'">Tramp stamp - ${qspFunc(s, 'money', 'string_price', 12000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_navel'">Navel...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_navel'">Navel - ${qspFunc(s, 'money', 'string_price', 8000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_navel'">Navel...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_navel'">Navel - ${qspFunc(s, 'money', 'string_price', 5000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_back'">Back - <<$func('money', 'string...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_back'">Back - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_under'">Under breast - <<$func('money'...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_under'">Under breast - ${qspFunc(s, 'money', 'string_price', 12000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_nipples'">Nip...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_nipples'">Nipple - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_nipples'">Nip...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_nipples'">Nipple - ${qspFunc(s, 'money', 'string_price', 6000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_leg'">Legs - <<$func('money', 'string_...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_leg'">Legs - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_breast'">Breasts - <<$func('money', 's...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_breast'">Breasts - ${qspFunc(s, 'money', 'string_price', 15000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_pussy'">Pussy...
    scene.text(`<a href="exec: salon_temp_state = 0 & gt 'pirsingsalon', 'piercing_pussy'">Pussy - ${qspFunc(s, 'money', 'string_price', 25000)}</a>`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_pussy'">Pussy...
    scene.text(`<a href="exec: salon_temp_state = 1 & gt 'pirsingsalon', 'piercing_pussy'">Pussy - ${qspFunc(s, 'money', 'string_price', 10000)}</a>`);
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_side'">Side - <<$func('money', 'string...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_side'">Side - ${qspFunc(s, 'money', 'string_price', 12000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  // TODO-QSP: dynamic text: <a href="exec: gt 'pirsingsalon', 'tattoo_pussy'">Pubic - <<$func('money', 'stri...
  scene.text(`<a href="exec: gt 'pirsingsalon', 'tattoo_pussy'">Pubic - ${qspFunc(s, 'money', 'string_price', 20000)}</a>`);
  scene.text('</td>');
  scene.text('<td>');
  scene.text('</td>');
  scene.text('</tr>');
  // TODO-QSP: end
  scene.build();
}

function enterPiercingEars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_ears');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['ears'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'ears', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'ears');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingNose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_nose');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['nose'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'nose', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nose');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingBrow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_brow');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['brow'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'eyebrows', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'brow');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingLip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_lip');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['lip'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'lips', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingTongue(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_tongue');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['tongue'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'tongue', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'tongue');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingNavel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_navel');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['navel'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'tummy', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'navel');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingNipples(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_nipples');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['nipples'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'nipples', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nipples');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterPiercingPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'piercing_pussy');
  qspCall(s, 'stat', '');
  if (((s as any).salon_temp_state ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['pussy'] !== 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).salon_temp_state = 1;
    qspCall(s, 'pain', '', 1, 'pubic', 'pierce');
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'piercings', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooAnkle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_ankle');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'ankle_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ankle');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooArm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_arm');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'arm_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'arm');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooAss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_ass');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'ass_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'ass');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooBack(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_back');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'back_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'back');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooBelly(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_belly');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'belly_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'belly');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooBreast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_breast');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'breast_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'breast');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooChest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_chest');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'chest_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'chest');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooFace(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_face');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'face_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'face');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooHand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_hand');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'hand_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'hand');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooLeg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_leg');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'leg_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'leg');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooLip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_lip');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'lip_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'lip');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooNeck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_neck');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'neck_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'neck');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_pussy');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'pussy');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooShoulder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_shoulder');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'shoulder_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'shoulder');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooSide(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_side');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'side_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'side');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooTramp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_tramp');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'tramp');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooUnder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_under');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'under_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'under');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enterTattooWrist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pirsingsalon', 'tattoo_wrist');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    scene.img(`${qspFunc(s, 'tattoo_management', 'wrist_image')}`);
    scene.text('You already have this tattoo here.');
  } else {
    if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
      qspCall(s, 'shop_utils', 'init', 'start', 'tattoos', 'shop');
      qspCall(s, 'shop_utils', 'init', 'add_type', 'wrist');
      qspCall(s, 'shop_utils', 'init', 'end');
    }
    qspCall(s, 'shop_utils', 'display', 'grid_shop');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['pirsingsalon', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'count':
      enterCount(s, scene);
      break;
    case 'shop_menu':
      enterShopMenu(s, scene);
      break;
    case 'piercing_ears':
      enterPiercingEars(s, scene);
      break;
    case 'piercing_nose':
      enterPiercingNose(s, scene);
      break;
    case 'piercing_brow':
      enterPiercingBrow(s, scene);
      break;
    case 'piercing_lip':
      enterPiercingLip(s, scene);
      break;
    case 'piercing_tongue':
      enterPiercingTongue(s, scene);
      break;
    case 'piercing_navel':
      enterPiercingNavel(s, scene);
      break;
    case 'piercing_nipples':
      enterPiercingNipples(s, scene);
      break;
    case 'piercing_pussy':
      enterPiercingPussy(s, scene);
      break;
    case 'tattoo_ankle':
      enterTattooAnkle(s, scene);
      break;
    case 'tattoo_arm':
      enterTattooArm(s, scene);
      break;
    case 'tattoo_ass':
      enterTattooAss(s, scene);
      break;
    case 'tattoo_back':
      enterTattooBack(s, scene);
      break;
    case 'tattoo_belly':
      enterTattooBelly(s, scene);
      break;
    case 'tattoo_breast':
      enterTattooBreast(s, scene);
      break;
    case 'tattoo_chest':
      enterTattooChest(s, scene);
      break;
    case 'tattoo_face':
      enterTattooFace(s, scene);
      break;
    case 'tattoo_hand':
      enterTattooHand(s, scene);
      break;
    case 'tattoo_leg':
      enterTattooLeg(s, scene);
      break;
    case 'tattoo_lip':
      enterTattooLip(s, scene);
      break;
    case 'tattoo_neck':
      enterTattooNeck(s, scene);
      break;
    case 'tattoo_pussy':
      enterTattooPussy(s, scene);
      break;
    case 'tattoo_shoulder':
      enterTattooShoulder(s, scene);
      break;
    case 'tattoo_side':
      enterTattooSide(s, scene);
      break;
    case 'tattoo_tramp':
      enterTattooTramp(s, scene);
      break;
    case 'tattoo_under':
      enterTattooUnder(s, scene);
      break;
    case 'tattoo_wrist':
      enterTattooWrist(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pirsingsalon: LocationDef = {
  name: 'pirsingsalon',
  title: '<center><b>Black Dragon Tattoo & Piercing Parlor</b></center',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
