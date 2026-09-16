import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_changingroomVars ?? 0)?.['leave_naked'] === 0) {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  (!((s as any).PSwim ?? 0))) {
      scene.text('Put some clothes on!');
      return;
    }
  }
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'changingroom';
  (s as any).menu_arg = 'view_swim_list';
  (s as any).locclass = 'changingroom';
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['ignore_inhib'] = Math.min(Math.max(0, ((s as any).locArgs?.[0] ?? 0)), 2);
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['leave_naked'] = ((s as any).locArgs?.[1] ?? 0);
  qspGoto(s, 'changingroom', 'view_swim_list');
  // TODO-QSP: end
  scene.build();
}

function enterViewSwimList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 1) {
    scene.actions([
      { label: 'Put your regular clothes back on', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'swim');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeave(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (qspFunc(s, 'clothing', 'get_swimwear_count') === 0) {
    scene.text('<center>You do not own any swimwear.</center>');
    return;
  }
  if (((s as any).temper ?? 0) < 15) {
    if (((String(((s as any).location_type ?? 0)).indexOf(String('indoors'))) + 1) <= 0  &&  ((String(((s as any).loc ?? 0)).indexOf(String('havana'))) + 1) <= 0  &&  ((s as any).loc ?? 0) !== 'pav_pool'  &&  ((String(((s as any).loc_arg ?? 0)).indexOf(String('sauna'))) + 1) <= 0) {
      scene.text('<center>It\'s below 15C - far too cold to get changed into swimwear. You should wait until the weather warms up.</center>');
      return;
    }
  }
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'outfit', 'backup', 'swim');
    // TODO-QSP: gs 'shoes', 'wear', $lastwornshoetype['swim'], lastwornshoenumber['swim']
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopdanilovich_swimsuit
  if (((s as any).danilovich_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).danilovich_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'danilovich_swimsuit'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/danilovich/swimwear/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).danilovich_swimsuit ?? {}).length) {
    // TODO-QSP: jump 'loopdanilovich_swimsuit'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopscandalicious_swimsuit
  if (((s as any).scandalicious_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).scandalicious_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'scandalicious_swimsuit'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/scandalicious/swim/one/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).scandalicious_swimsuit ?? {}).length) {
    // TODO-QSP: jump 'loopscandalicious_swimsuit'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopscandalicious_bikinis
  if (((s as any).scandalicious_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).scandalicious_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'scandalicious_bikinis'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/scandalicious/swim/two/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).scandalicious_bikinis ?? {}).length) {
    // TODO-QSP: jump 'loopscandalicious_bikinis'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopallure_swimsuit
  if (((s as any).allure_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).allure_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'allure_swimsuit'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/allure/one/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).allure_swimsuit ?? {}).length) {
    // TODO-QSP: jump 'loopallure_swimsuit'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopallure_bikinis
  if (((s as any).allure_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).allure_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'allure_bikinis'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/allure/two/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).allure_bikinis ?? {}).length) {
    // TODO-QSP: jump 'loopallure_bikinis'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopnerdvana_swimsuit
  if (((s as any).nerdvana_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).nerdvana_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'nerdvana_swimsuit'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/nerdvana/swim/one/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).nerdvana_swimsuit ?? {}).length) {
    // TODO-QSP: jump 'loopnerdvana_swimsuit'
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
  // TODO-QSP: :loopnerdvana_bikinis
  if (((s as any).nerdvana_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).nerdvana_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0  &&  (((s as any).clothingworntype ?? 0) !== 'nerdvana_bikinis'  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).i ?? 0))) {
    scene.img(`images/pc/items/nerdvana/swim/two/${((s as any).temp_changingroomVars ?? 0)?.['i'] ?? ''}.jpg`);
  }
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
  if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).nerdvana_bikinis ?? {}).length) {
    // TODO-QSP: jump 'loopnerdvana_bikinis'
  }
  if (((String(((s as any).clothingworntype ?? 0)).indexOf(String('swimsuit'))) + 1)) {
    scene.text('<center>You are wearing a swimsuit.</center>');
  } else {
    if (((String(((s as any).clothingworntype ?? 0)).indexOf(String('bikini'))) + 1)) {
      scene.text('<center>You are wearing a bikini.</center>');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'changingroom', 'leave');
  } },
    { label: 'Choose an outfit', handler: (st: GameState) => {
    // TODO-QSP: killvar 'locclass'
  }, goto: ['wardrobe', 'main'] },
  ]);
  scene.build();
}

function enterViewSwimItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  scene.img(`${qspFunc(s, '$clothing_image', '$ARGS[1]', ((s as any).locArgs?.[2] ?? ''))}`);
  // TODO-QSP: dynamic text: <<$ARGS[1]>> no.<<ARGS[2]>>
  scene.text(`${((s as any).locArgs?.[1] ?? '')} no.${((s as any).locArgs?.[2] ?? '')}`);
  ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['strength'] = ((s as any).CloStrength ?? 0);
  if (((s as any).temp_changingroomVars ?? 0)?.['strength'] <= 0) {
    scene.text('This item is worn and is not suitable for further wear.');
    scene.actions([
      { label: 'Throw it away', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'dispose');
    dynamicGoto(s, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    if (((s as any).pcs_inhib ?? 0) < ((s as any).CloInhibit ?? 0)) {
      if ((!((s as any).locArgs?.[3] ?? 0))) {
        scene.text('You don\'t feel daring enough to wear swimwear this revealing.');
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 1) {
          scene.text('You don\'t feel daring enough to wear swimwear this revealing, but if you want to go into the water, you\'re going to have to brave it.');
          qspCall(s, 'willpower', 'exhib', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Put it on', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Put it on', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'shoes', 'strip');
    // TODO-QSP: gs 'clothing', 'wear', $ARGS[1], ARGS[2]
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeave(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 2) {
            scene.text('You don\'t feel daring enough to wear swimwear this revealing, but if you want to go into the water, you\'re going to have to brave it.');
            scene.actions([
              { label: 'Wear', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'shoes', 'strip');
    // TODO-QSP: gs 'clothing', 'wear', $ARGS[1], ARGS[2]
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeave(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).pcs_inhib ?? 0) < (((s as any).CloInhibit ?? 0) + 10)) {
        scene.text('You find this swimwear to be more revealing than you are completely comfortable with but that makes it quite exciting too.');
      }
      scene.actions([
        { label: 'Wear', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'shoes', 'strip');
    // TODO-QSP: gs 'clothing', 'wear', $ARGS[1], ARGS[2]
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeave(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterCountSwimItem(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'danilovich_swimsuit'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_danilovich_swimsuit
    if (((s as any).danilovich_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).danilovich_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).danilovich_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'loopcount_danilovich_swimsuit'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_swimsuit'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_scandalicious_swimsuit
    if (((s as any).scandalicious_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).scandalicious_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).scandalicious_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'loopcount_scandalicious_swimsuit'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_bikinis'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_scandalicious_bikinis
    if (((s as any).scandalicious_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).scandalicious_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).scandalicious_bikinis ?? {}).length) {
      // TODO-QSP: jump 'loopcount_scandalicious_bikinis'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'allure_swimsuit'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_allure_swimsuit
    if (((s as any).allure_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).allure_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).allure_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'loopcount_allure_swimsuit'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'allure_bikinis'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_allure_bikinis
    if (((s as any).allure_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).allure_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).allure_bikinis ?? {}).length) {
      // TODO-QSP: jump 'loopcount_allure_bikinis'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_swimsuit'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_nerdvana_swimsuit
    if (((s as any).nerdvana_swimsuit ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).nerdvana_swimsuit_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).nerdvana_swimsuit ?? {}).length) {
      // TODO-QSP: jump 'loopcount_nerdvana_swimsuit'
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_bikinis'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = 1;
    // TODO-QSP: :loopcount_nerdvana_bikinis
    if (((s as any).nerdvana_bikinis ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 1  &&  ((s as any).nerdvana_bikinis_s ?? 0)[((s as any).temp_changingroomVars ?? 0)?.['i']] === 0) {
      (s as any).result = ((s as any).result ?? 0) + (1);
    }
    ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['i'] = ((s as any).temp_changingroomVars['i'] ?? 0) + (1);
    if (((s as any).temp_changingroomVars ?? 0)?.['i'] <= Object.keys((s as any).nerdvana_bikinis ?? {}).length) {
      // TODO-QSP: jump 'loopcount_nerdvana_bikinis'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'view_swim_list':
      enterViewSwimList(s, scene);
      break;
    case 'view_swim_item':
      enterViewSwimItem(s, scene);
      break;
    case 'count_swim_item':
      enterCountSwimItem(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const changingroom: LocationDef = {
  name: 'changingroom',
  title: 'Put some clothes on!',
  region: 'other',
  locclass: 'changingroom',
  description: ['Put some clothes on!'],
  enter: enter,
};
