import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt_city', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  if (((s as any).anushkaQW ?? 0)?.['home_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).anushkaQW['home_day'] = ((s as any).daystart ?? 0);
    (s as any).locat['A144'] = 0;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up the stairs to the top floor where Anushka, Radomir, Valentin and Arkadi are renting a three bedroom apartment.');
  if (((s as any).hour ?? 0) >= 23) {
    scene.text('It\'s too late in the day to visit Anushka, Radomir, Valentin or Arkadi.');
    scene.actions([
      { label: 'Move away from the door', goto: ['city_island', ''] },
    ]);
  } else {
    scene.text('It\'s too early in the day to visit Anushka, Radomir, Valentin or Arkadi.');
    if (((s as any).AnushkaLocCity ?? 0) === 'home') {
      if (((s as any).ArkadiLocCity ?? 0) === 'home') {
        (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
        scene.text('You stand outside the door as you knock, waiting to see who answers it.');
        if (((s as any).aptdoor ?? 0) === 1) {
          scene.img('images/characters/shared/headshots_main/big156.jpg');
          if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
            scene.text('Arkadi answers the door. "What\'s up?"');
            scene.text('You give him one of your big smiles. "Nothing much. Just thought I\'d stop by and hang out."');
            scene.text('He nods. "Nush is in her room if you\'re looking for her, but you\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
          } else {
            scene.text('Arkadi answers the door. "What the fuck do you want?"');
            scene.text('You give him a careful smile. "Nothing much. Just thought I\'d stop by and hang out."');
            scene.text('He gives you a look of disgust. "Nush is in her room if you\'re looking for her. Otherwise you can fuck off," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
            scene.text('Arkadi answers the door. "What\'s up?"');
            scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
            scene.text('He nods. "Nush is in her room if you\'re looking for her," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
          }
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        } else {
          scene.img('images/characters/shared/headshots_main/big144.jpg');
          // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
          scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come on in." She leads you down the hall to her room.`);
          (s as any).locat['A144'] = 2;
          scene.actions([
            { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
          ]);
        }
      } else {
        (s as any).locat['A144'] = 2;
        scene.img('images/characters/shared/headshots_main/big144.jpg');
        // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
        scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come on in." She leads you down the hall to her room.`);
        scene.actions([
          { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
        ]);
      }
    } else {
      (s as any).locat['A156'] = 1;
      (s as any).locat['A158'] = 1;
      (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
      scene.text('You stand outside the door as you knock, waiting to see who answers it.');
      if (((s as any).aptdoor ?? 0) === 1) {
        (s as any).locat['A156'] = 1;
        scene.img('images/characters/shared/headshots_main/big156.jpg');
        if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
          scene.text('Arkadi answers the door. "What\'s up?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at work, but you\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in. You see him walk back to the living room.');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        } else {
          scene.text('Arkadi answers the door. "What the fuck do you want?"');
          scene.text('You carefully smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He gives you a look of disgust. "Nush is at work, so fuck off," he says as he closes the door in your face.');
          scene.text('Arkadi answers the door. "What\'s up?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at work."');
          scene.text('"Okay. Is it cool if I just hang out here?"');
          scene.text('He shrugs as he walks away from the door. "Whatever."');
          scene.text('He leaves you to decide if you want to enter as you see him walk back to the living room.');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        }
      } else {
        (s as any).locat['A158'] = 1;
        scene.img('images/characters/shared/headshots_main/big158.jpg');
        if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
          scene.text('Valentin answers the door. "Hey girl, what you up to?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at work, but you\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to enter as you see him walk back to the living room.');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        } else {
          scene.text('Valentin answers the door. "Nush is at work," he says just before closing the door in your face again.');
          scene.text('Valentin answers the door. "Hey girl, what you up to?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at work."');
          scene.text('"Okay. Is it cool if I just hang out?"');
          scene.text('He shrugs as he walks away from the door. "Sure, come in."');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        }
      }
      if (((s as any).locat ?? 0)?.['A144'] === 11) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).locat['A158'] = 1;
        scene.img('images/characters/shared/headshots_main/big158.jpg');
        if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
          scene.text('Valentin answers the door. "Hey girl, what you up to?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at the modeling studio, but you\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        } else {
          scene.text('Valentin answers the door. "Nush is at the modeling studio," he says just before closing the door in your face.');
          scene.text('Valentin answers the door. "Hey girl, what you up to?"');
          scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
          scene.text('He nods. "Nush is at the modeling studio."');
          scene.text('"Okay. Is it cool if I just hang out?"');
          scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
          scene.actions([
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Leave', goto: ['city_island', ''] },
            { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
          ]);
        }
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
        scene.text('You stand outside the door as you knock, waiting to see who answers it.');
        if (((s as any).aptdoor ?? 0) === 1) {
          scene.img('images/characters/shared/headshots_main/big144.jpg');
          // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
          scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come on in." She leads you down the hall to her room.`);
          scene.actions([
            { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
          ]);
        } else {
          (s as any).locat['A158'] = 1;
          scene.img('images/characters/shared/headshots_main/big158.jpg');
          if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
            scene.text('Valentin answers the door. "Hey girl, what you up to?"');
            scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
            scene.text('He nods. "Nush is in her room if you\'re looking for her. You\'re welcome to hang out as well," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
            scene.actions([
              { label: 'Leave', goto: ['city_island', ''] },
              { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
            ]);
          } else {
            scene.text('Valentin answers the door. "Nush is in her room," he says as he turns and walks away before you can say anything in return.');
            scene.text('Valentin answers the door. "Hey girl, what you up to?"');
            scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
            scene.text('He nods. "Nush is in her room if you\'re looking for her."');
            scene.text('"Okay. Is it cool if I just hang out?"');
            scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
            scene.actions([
              { label: 'Leave', goto: ['city_island', ''] },
              { label: 'Leave', goto: ['city_island', ''] },
              { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
            ]);
          }
        }
        if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
          (s as any).locat['A144'] = 2;
          (s as any).locat['A156'] = 1;
          (s as any).aptdoor = Math.floor(Math.random() * 3) + 1;
          scene.text('You stand outside the door as you knock, waiting to see who answers it.');
          if (((s as any).aptdoor ?? 0) === 1) {
            scene.img('images/characters/shared/headshots_main/big156.jpg');
            if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
              scene.text('Arkadi answers the door. "What\'s up?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is in her room if you\'re looking for her. You\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in. You see him walk back to the living room.');
            } else {
              scene.text('Arkadi answers the door. "What the fuck do you want?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He gives you a look of disgust. "Nush is in her room if you\'re looking for her. Otherwise, just fuck off," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              scene.text('Arkadi answers the door. "What\'s up?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is in her room if you\'re looking for her," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
            }
            scene.actions([
              { label: 'Leave', goto: ['city_island', ''] },
              { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
            ]);
          } else {
            scene.img('images/characters/shared/headshots_main/big144.jpg');
            // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
            scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come on in." She leads you down the hall to her room.`);
            scene.img('images/characters/shared/headshots_main/big156.jpg');
            if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
              scene.text('Valentin answers the door. "Hey girl, what you up to?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is in her room if you\'re looking for her. You are welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            } else {
              scene.text('Valentin answers the door. "Nush is in her room," he says as he turns and walks away before you can say anything in return.');
              scene.text('Valentin answers the door. "Hey girl, what you up to?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is in her room if you\'re looking for her."');
              scene.text('"Okay. Is it cool if I just hang out?"');
              scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            }
            scene.actions([
              { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
            ]);
          }
        } else {
          (s as any).locat['A144'] = 9;
          (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
          scene.text('You stand outside the door as you knock, waiting to see who answers it.');
          if (((s as any).aptdoor ?? 0) === 1) {
            (s as any).locat['A156'] = 1;
            scene.img('images/characters/shared/headshots_main/big156.jpg');
            if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
              scene.text('Arkadi answers the door. "What\'s up?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is at work, but you\'re welcome to hang out," he says with a smile as he walks away from the door, leaving you to decide if you want to walk in. You see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            } else {
              scene.text('Arkadi answers the door. "What the fuck do you want?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He gives you a look of disgust. "Nush is at work, so fuck off," he says as he closes the door in your face.');
              scene.text('Arkadi answers the door. "What\'s up?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is at work."');
              scene.text('"Okay. Is it cool if I just hang out?"');
              scene.text('"Whatever," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            }
          } else {
            (s as any).locat['A158'] = 1;
            scene.img('images/characters/shared/headshots_main/big156.jpg');
            if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
              scene.text('Valentin answers the door. "Hey girl, what you up to?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is at work, but you\'re welcome to hangout." He says as he walks away from the door, leaving you to decide if you want to walk in. You see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            } else {
              scene.text('Valentin answers the door. "Nush is at work." He says just before closing the door in your face.');
              scene.text('Valentin answers the door. "Hey girl, what you up to?"');
              scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
              scene.text('He nods. "Nush is at work."');
              scene.text('"Okay. Is it cool if I just hang out?"');
              scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              scene.actions([
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Leave', goto: ['city_island', ''] },
                { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
              ]);
            }
          }
          scene.text('You knock on the door several times, but no one answers. You assume nobody\'s home at the moment.');
          scene.actions([
            { label: 'Move away from the door and leave', goto: ['city_island', ''] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['city_island', ''] },
    ]);
  }
  scene.build();
}

export const anushapt_city: LocationDef = {
  name: 'anushapt_city',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  description: ['You walk up the stairs to the top floor where Anushka, Radomir, Valentin and Arkadi are renting a three bedroom apartment.'],
  enter: enter,
};
