// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).sex_ev ?? 0)?.['sensitive_cuni'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'player home') {
      if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
        // TODO-QSP: dynamic text: You drag <<$npcdesc>> back into your bedroom. Before you can do anything, he sho...
        scene.text(`You drag ${((s as any).npcdesc ?? 0)} back into your bedroom. Before you can do anything, he shoves you backwards onto the bed and kneels between your legs.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto your bed and begins laying a trail o...
        scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto your bed and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> drags you into his bedroom, shoving you backwards onto the bed, and...
        scene.text(`${((s as any).npcdesc ?? 0)} drags you into his bedroom, shoving you backwards onto the bed, and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
        scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
      }
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
        if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> drags you out of the shower and back into the room, shoving you ont...
          scene.text(`${((s as any).npcdesc ?? 0)} drags you out of the shower and back into the room, shoving you onto the bed and begins laying a trail of kisses up your thighs leading straight towards your pussy.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
          scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed begins laying a trail of kis...
        scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed begins laying a trail of kisses, heading down between your legs.`);
      }
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'player home') {
        if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
          // TODO-QSP: dynamic text: You drag <<$npcdesc>> back into your bedroom. Before you can do anything, he sho...
          scene.text(`You drag ${((s as any).npcdesc ?? 0)} back into your bedroom. Before you can do anything, he shoves you backwards onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto your bed and begins making a line of...
          scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto your bed and begins making a line of kisses up your stomach towards your breasts.`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> drags you into his bedroom and shoves you backwards onto onto the b...
          scene.text(`${((s as any).npcdesc ?? 0)} drags you into his bedroom and shoves you backwards onto onto the bed, making a line of kisses up your wet stomach, towards your breasts.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
          scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
        }
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> drags you out of the shower and back into the room, shoving you ont...
            scene.text(`${((s as any).npcdesc ?? 0)} drags you out of the shower and back into the room, shoving you onto the bed and begins laying a trail of kisses up your stomach towards your breasts.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
            scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
          }
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> shoves you backwards onto onto the bed and begins making a line of ...
          scene.text(`${((s as any).npcdesc ?? 0)} shoves you backwards onto onto the bed and begins making a line of kisses up your stomach towards your breasts.`);
        }
      }
    }
  }
  scene.build();
}

export const sex_ev_foreplay_desc: LocationDef = {
  name: 'sex_ev_foreplay_desc',
  title: '"That\'s... I\'m not really comfortable with guys... down ther',
  region: 'other',
  enter: enter,
};
