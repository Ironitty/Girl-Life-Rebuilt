import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter___(s: GameState, scene: SceneBuilder): void {
  (s as any).vballVars['coach_leave'] = ((s as any).daystart ?? 0);
  scene.build();
}

function enterCoachOffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'volley_coach', 'coach_office');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/coach_office.jpg');
  // TODO-QSP: dynamic text: You enter the coach's office in which there are cups, balls, sports equipment, a...
  scene.text(`You enter the coach's office in which there are cups, balls, sports equipment, awards, and a desk where the coach sometimes sits and does paperwork. ${((s as any).npc_nickname ?? 0)?.['A69']} Nikolaevich does not only teach amateur volleyball but he also coaches a professional volleyball team.`);
  if (((s as any).vballVars ?? 0)?.['coach_leave'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Talk to coach', handler: (st: GameState) => {
    // TODO-QSP: vballVars['coach_leave'] = 0
  }, goto: ['volley_coach', 'coach_talk'] },
    ]);
  } else {
    scene.text('Coach has gone home for the day.');
  }
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterMassageRoom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  scene.text('You are in the back room of Coach Mikhail\'s office.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Your <a href="exec: gs \'volley_coach\', \'massage_redress\' & gs \'volley_coach\', \'massage_room\'">clothes</a> are in a pile on the floor next to the massage table.');
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    }
  } },
    { label: 'Take a shower', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
    } else {
      if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 0))) {
        scene.actions([{ label: 'Continue', goto: ['gdksport', 'shower'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterCoachTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A69');
  if (((s as any).npc_nickname ?? 0)?.['A69'] === '') {
    (s as any).npc_nickname['A69'] = 'Coach Mikhail';
    (s as any).npc_usedname['A69'] = 'Coach Mikhail';
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 0) {
    if (((s as any).npc_rel ?? 0)?.['A69'] <= 0) {
      (s as any).pcs_usedname['A69'] = ((s as any).pcs_lastname ?? 0);
      // TODO-QSP: dynamic text: "Ugh, what do you want <<$pcs_lastname>>?"
      scene.text(`"Ugh, what do you want ${((s as any).pcs_lastname ?? 0)}?"`);
    } else {
      (s as any).pcs_usedname['A69'] = ((s as any).pcs_lastname ?? 0);
      // TODO-QSP: dynamic text: "What do you want <<$pcs_lastname>>? I'm very busy with the team."
      scene.text(`"What do you want ${((s as any).pcs_lastname ?? 0)}? I'm very busy with the team."`);
      if (((s as any).npc_rel ?? 0)?.['A69'] < 40) {
        (s as any).pcs_usedname['A69'] = ((s as any).pcs_lastname ?? 0);
        // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>?"
        scene.text(`"Yes, ${((s as any).pcs_lastname ?? 0)}?"`);
      } else {
        (s as any).pcs_usedname['A69'] = ((s as any).pcs_firstname ?? 0);
        // TODO-QSP: dynamic text: "Yes, <<$pcs_firstname>>?"
        scene.text(`"Yes, ${((s as any).pcs_firstname ?? 0)}?"`);
        if (((s as any).npc_rel ?? 0)?.['A69'] < 80) {
          (s as any).pcs_usedname['A69'] = ((s as any).pcs_firstname ?? 0);
          // TODO-QSP: dynamic text: "What do you need, <<$pcs_firstname>>?"
          scene.text(`"What do you need, ${((s as any).pcs_firstname ?? 0)}?"`);
        } else {
          (s as any).pcs_usedname['A69'] = ((s as any).pcs_nickname ?? 0);
          // TODO-QSP: dynamic text: "What can I help you with, <<$pcs_nickname>>?"
          scene.text(`"What can I help you with, ${((s as any).pcs_nickname ?? 0)}?"`);
        }
        if (((s as any).vballVars ?? 0)?.['coachsex'] > 0) {
          if (((s as any).vballVars ?? 0)?.['coachsex'] === 1) {
            // TODO-QSP: dynamic text: "Of course, <<$pcs_lastname>>.
            scene.text(`"Of course, ${((s as any).pcs_lastname ?? 0)}.`);
          } else {
            // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>?"
            scene.text(`"Yes, ${((s as any).pcs_lastname ?? 0)}?"`);
            if (((s as any).vballVars ?? 0)?.['coachsex'] === 3) {
              // TODO-QSP: dynamic text: "Yes, <<$pcs_firstname>>?"
              scene.text(`"Yes, ${((s as any).pcs_firstname ?? 0)}?"`);
            } else {
              // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>?"
              scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}?"`);
            }
            if (((s as any).vballVars ?? 0)?.['coach_lust'] > 0) {
              if (((s as any).vballVars ?? 0)?.['coach_lust'] < 20) {
                scene.text('His attention flicker down towards your ass for a moment before coming back up to meet your eyes.');
              } else {
                scene.text('Sometimes you can see Coach Mikhail looking your body up and down.');
                if (((s as any).vballVars ?? 0)?.['coach_lust'] < 60) {
                  scene.text('Coach seems more interested in watching you practice than the other girls.');
                } else {
                  scene.text('Coach sometimes makes lewd comments around you and you often catch him ogling your body.');
                  scene.text('Coach can\'t take his eyes of you and he keeps making sexual references in your presence.');
                }
              }
              // TODO-QSP: dynamic text: "What is it <<$pcs_lastname>>? Did you need help with something?"
              scene.text(`"What is it ${((s as any).pcs_lastname ?? 0)}? Did you need help with something?"`);
            }
            qspCall(s, 'volley_coach', 'coach_talk_menu');
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '!!!':
      enter___(s, scene);
      break;
    case 'coach_office':
      enterCoachOffice(s, scene);
      break;
    case 'massage_room':
      enterMassageRoom(s, scene);
      break;
    case 'coach_talk':
      enterCoachTalk(s, scene);
      break;
    default:
      enter___(s, scene);
      break;
  }
}

export const volley_coach: LocationDef = {
  name: 'volley_coach',
  title: 'You\'ve run out of shampoo and will have to buy some more before you can wash yourself.',
  region: 'other',
  enter: enter,
};
