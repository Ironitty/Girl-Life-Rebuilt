import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'home');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).NatashaHomeDay ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).NatashaHomeDay = ((s as any).daystart ?? 0);
    (s as any).NatashaLoc = 0;
  }
  if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > (280 + ((s as any).rand ?? 0)(-2, 2))) {
    (s as any).NatbelQW['babycount'] = ((s as any).NatbelQW['babycount'] ?? 0) + (1);
    (s as any).NatbelQW['pregday'] = 0;
  }
  qspCall(s, 'natbelEv', 'nat_schedule');
  qspCall(s, 'natbelEv', 'natmomhome');
  qspCall(s, 'natbelEv', 'nat_mother_state');
  if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    (s as any).NatbelQW['MotherDoor'] = Math.floor(Math.random() * 2) + 0;
  } else {
    (s as any).NatbelQW['MotherDoor'] = 0;
  }
  if (((s as any).NatbelQW ?? 0)?.['seethroughwearing'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    (s as any).NatbelQW['MotherDoor'] = 1;
    (s as any).NatashaLoc = 2;
  }
  if ((((s as any).NatashaLoc ?? 0) === 6  ||  ((s as any).NatashaLoc ?? 0) === 7)  &&  ((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1) {
    (s as any).NatbelQW['MotherDoor'] = 1;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It\'s too late in the day to visit Natasha.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } else {
    scene.text('It\'s too early in the day to visit Natasha.');
    if (((s as any).NatbelQW ?? 0)?.['blocked'] === 1) {
      if (((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['block_day']  &&  ((s as any).NatbelQW ?? 0)?.['block_reason'] === 'slut') {
        scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'slut_reconcile_door'] }]);
      }
      scene.text('You knock on the door several times, but no one answers.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['pregday'] === 0  ||  (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) <= 90)) {
        scene.img('images/characters/shared/headshots_main/big16.jpg');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/natasha/16(2).jpg');
        if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) >= 200) {
          scene.img('images/characters/pavlovsk/school/girl/natasha/16(3).jpg');
        }
        scene.text('You stand outside the Belova household, knocking on the door. After a few moments, Natasha opens the door.');
        if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200) {
          scene.text('Looking at Natasha, her pregnant belly is starting to show. You have a strong suspicion that she carries your niece or nephew.');
        } else {
          scene.text('Looking at Natasha, it is clear that she is pregnant. You have a strong suspicion that she carries your niece or nephew.');
        }
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 10) {
          scene.text('Natasha sees it\'s you at the door, and she immediately lowers her head slightly, not quite looking you in the eye, but you notice she\'s pleased to see you.');
          // TODO-QSP: dynamic text: "Oh, hi <<$pcs_nickname>>. Come in."
          scene.text(`"Oh, hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
        } else {
          scene.text('Natasha sees it\'s you at the door and you see her shoulders slump a little as she starts looking at your feet rather than at your face.');
          // TODO-QSP: dynamic text: "Oh, uhm, hi <<$pcs_nickname>>. Come in."
          scene.text(`"Oh, uhm, hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
          scene.text('Natasha sees it\'s you at the door and greets you with a warm hug.');
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. Come in."
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}. Come in."`);
        }
        (s as any).NatashaLoc = 1;
        if (((s as any).NatbelQW ?? 0)?.['MotherHome'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['MotherDoor'] === 1) {
          if (((s as any).NatbelQW ?? 0)?.['MotherState'] !== 3) {
            scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomcasual.jpg');
          } else {
            scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/natmomdressedup.jpg');
          }
          scene.text('You stand outside the Belova household, knocking on the door. It takes quite a while before someone actually comes and in the end, it turns out to be Natasha\'s mother.');
          if (((s as any).NatbelQW ?? 0)?.['MetMother'] === 0) {
            (s as any).NatbelQW['MetMother'] = 1;
            // TODO-QSP: dynamic text: Her mother stands there for a second before she seems to notice you. She looks <...
            scene.text(`Her mother stands there for a second before she seems to notice you. She looks ${((s as any).NatbelQW ?? 0)?.['MotherStateMsg']}.`);
            // TODO-QSP: dynamic text: "Hi, I'm <<$pcs_nickname>>. I go to school with Natasha. Is she home?"
            scene.text(`"Hi, I'm ${((s as any).pcs_nickname ?? 0)}. I go to school with Natasha. Is she home?"`);
            // TODO-QSP: dynamic text: "It's nice to meet a friend of Natasha's. I'm her mother <<$npc_firstname['A191'...
            scene.text(`"It's nice to meet a friend of Natasha's. I'm her mother ${((s as any).npc_firstname ?? 0)?.['A191']}, but you can call me ${((s as any).npc_nickname ?? 0)?.['A191']}."`);
          } else {
            // TODO-QSP: dynamic text: Her mother stands there for a second before she seems to notice you. She looks <...
            scene.text(`Her mother stands there for a second before she seems to notice you. She looks ${((s as any).NatbelQW ?? 0)?.['MotherStateMsg']}.`);
          }
          if (((s as any).NatashaLoc ?? 0) !== 0) {
            // TODO-QSP: dynamic text: "Well now don't just stand there <<$pcs_nickname>>. Come on in!"
            scene.text(`"Well now don't just stand there ${((s as any).pcs_nickname ?? 0)}. Come on in!"`);
            // TODO-QSP: dynamic text: "<<$NatashaLocMsg>>"
            scene.text(`"${((s as any).NatashaLocMsg ?? 0)}"`);
            scene.actions([
              { label: 'Ask about her mood', goto: ['natbelEv', 'ask_state'] },
              { label: 'Go inside.', goto: ['natbelapt', 'hallway'] },
              { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>."
            scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}."`);
            // TODO-QSP: dynamic text: "<<$NatashaLocMsg>>"
            scene.text(`"${((s as any).NatashaLocMsg ?? 0)}"`);
            scene.actions([
              { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
            ]);
          }
        } else {
          scene.text('You knock on the door several times, but no one answers. There is probably no one home at the moment.');
          scene.actions([
            { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
          ]);
        }
        scene.actions([
          { label: 'Go inside', goto: ['natbelapt', 'hallway'] },
          { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  }
  scene.build();
}

export const natbelapt: LocationDef = {
  name: 'natbelapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  description: ['You walk up to the front door and knock.'],
  enter: enter,
};
