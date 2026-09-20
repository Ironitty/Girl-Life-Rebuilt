// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGenerousInitiativeBed1Desc(s: GameState, scene: SceneBuilder): void {
  if (((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).sex_ev ?? 0)?.['sensitive_cuni'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'player home') {
      if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
        // TODO-QSP: dynamic text: You drag <<$npcdesc>> back into your bedroom. Before you can do anything, he sho...
        scene.text(`You drag ${((s as any).npcdesc || '')} back into your bedroom. Before you can do anything, he shoves you backwards onto the bed and kneels between your legs.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto your bed and begins laying a trail o...
        scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto your bed and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> drags you into his bedroom, shoving you backwards onto the bed, and...
          scene.text(`${((s as any).npcdesc || '')} drags you into his bedroom, shoving you backwards onto the bed, and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
          scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> drags you out of the shower and back into the room, shoving you ont...
            scene.text(`${((s as any).npcdesc || '')} drags you out of the shower and back into the room, shoving you onto the bed and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
            scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
          }
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
          scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'player home') {
      if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
        // TODO-QSP: dynamic text: You drag <<$npcdesc>> back into your bedroom. Before you can do anything, he sho...
        scene.text(`You drag ${((s as any).npcdesc || '')} back into your bedroom. Before you can do anything, he shoves you backwards onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto your bed and begins making a line of...
        scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto your bed and begins making a line of kisses up your stomach towards your breasts.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> drags you into his bedroom and shoves you backwards onto onto the b...
          scene.text(`${((s as any).npcdesc || '')} drags you into his bedroom and shoves you backwards onto onto the bed, making a line of kisses up your wet stomach, towards your breasts.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
          scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> drags you out of the shower and back into the room, shoving you ont...
            scene.text(`${((s as any).npcdesc || '')} drags you out of the shower and back into the room, shoving you onto the bed and begins laying a trail of kisses up your stomach towards your breasts.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
            scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
          }
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
          scene.text(`${((s as any).npcdesc || '')} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniDeny1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'lover') {
    scene.text('"That\'s... I\'m not really comfortable with guys... down there..." you stammer. "It\'s kinda personal..."');
  } else {
    scene.text('"That\'s... I..." you stammer. "I don\'t let guys go down on me unless I\'m really comfortable with them. It\'s a personal thing..."');
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniDeny2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'lover') {
    scene.text('"Woah!" you say, snapping your legs closed. "Sorry... I\'m still not ready for that..."');
  } else {
    scene.text('"Nuh uh," you say, snapping your legs closed. "I\'m still not ready for that."');
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransition1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'player home') {
    // TODO-QSP: dynamic text: You pant tiredly, laying back on your bed as your orgasm slowly winds down. Sudd...
    scene.text(`You pant tiredly, laying back on your bed as your orgasm slowly winds down. Suddenly ${((s as any).npcdesc || '')}'s cock enters your view, dangling above your head, and he bends over you, trying to push it into your panting mouth.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      // TODO-QSP: dynamic text: You pant tiredly, laying back on <<$npcdesc>>''s bed as your orgasm slowly winds...
      scene.text(`You pant tiredly, laying back on ${((s as any).npcdesc || '')}'s bed as your orgasm slowly winds down. Suddenly ${((s as any).npcdesc || '')}'s cock enters your view, dangling above your head, and he bends over you, trying to push it into your panting mouth.`);
    } else {
      // TODO-QSP: dynamic text: You pant tiredly, laying back on the bed as your orgasm slowly winds down. Sudde...
      scene.text(`You pant tiredly, laying back on the bed as your orgasm slowly winds down. Suddenly ${((s as any).npcdesc || '')}'s cock enters your view, dangling above your head, and he bends over you, trying to push it into your panting mouth.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'generous_initiative_bed1_desc':
      enterGenerousInitiativeBed1Desc(s, scene);
      break;
    case 'kuni_deny1':
      enterKuniDeny1(s, scene);
      break;
    case 'kuni_deny2':
      enterKuniDeny2(s, scene);
      break;
    case 'transition1_desc':
      enterTransition1Desc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_foreplay_desc: LocationDef = {
  name: 'sex_ev_foreplay_desc',
  title: '"That\'s... I\'m not really comfortable with guys... down ther',
  region: 'other',
  enter: enter,
};
