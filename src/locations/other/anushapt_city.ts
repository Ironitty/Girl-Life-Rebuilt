import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
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
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['home_day'] = ((s as any).daystart ?? 0);
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 0;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up the stairs to the top floor where Anushka, Radomir, Valentin and Arkadi are renting a three bedroom apartment.');
  if (((s as any).hour ?? 0) >= 23) {
    scene.text('It\'s too late in the day to visit Anushka, Radomir, Valentin or Arkadi.');
    scene.actions([
      { label: 'Move away from the door', goto: ['city_island', ''] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early in the day to visit Anushka, Radomir, Valentin or Arkadi.');
      scene.actions([
        { label: 'Move away from the door', goto: ['city_island', ''] },
      ]);
    } else {
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
              if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                scene.text('Arkadi answers the door. "What the fuck do you want?"');
                scene.text('You give him a careful smile. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He gives you a look of disgust. "Nush is in her room if you\'re looking for her. Otherwise you can fuck off," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              } else {
                scene.text('Arkadi answers the door. "What\'s up?"');
                scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He nods. "Nush is in her room if you\'re looking for her," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
              }
            }
            scene.actions([
              { label: 'Leave', goto: ['city_island', ''] },
              { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
            ]);
          } else {
            scene.img('images/characters/shared/headshots_main/big144.jpg');
            // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
            scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname || '')}. Come on in." She leads you down the hall to her room.`);
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 2;
            scene.actions([
              { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
            ]);
          }
        } else {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 2;
          scene.img('images/characters/shared/headshots_main/big144.jpg');
          // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
          scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname || '')}. Come on in." She leads you down the hall to her room.`);
          scene.actions([
            { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
          ]);
        }
      } else {
        if (((s as any).locat ?? 0)?.['A144'] === 9) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 1;
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 1;
          (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
          scene.text('You stand outside the door as you knock, waiting to see who answers it.');
          if (((s as any).aptdoor ?? 0) === 1) {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 1;
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
              if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                scene.text('Arkadi answers the door. "What the fuck do you want?"');
                scene.text('You carefully smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He gives you a look of disgust. "Nush is at work, so fuck off," he says as he closes the door in your face.');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                ]);
              } else {
                scene.text('Arkadi answers the door. "What\'s up?"');
                scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He nods. "Nush is at work."');
                scene.text('"Okay. Is it cool if I just hang out here?"');
                scene.text('He shrugs as he walks away from the door. "Whatever."');
                scene.text('He leaves you to decide if you want to enter as you see him walk back to the living room.');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                  { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                ]);
              }
            }
          } else {
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 1;
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
              if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                scene.text('Valentin answers the door. "Nush is at work," he says just before closing the door in your face again.');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                ]);
              } else {
                scene.text('Valentin answers the door. "Hey girl, what you up to?"');
                scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He nods. "Nush is at work."');
                scene.text('"Okay. Is it cool if I just hang out?"');
                scene.text('He shrugs as he walks away from the door. "Sure, come in."');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                  { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).locat ?? 0)?.['A144'] === 11) {
            (s as any).minut = ((s as any).minut ?? 0) + 1;
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 1;
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
              if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                scene.text('Valentin answers the door. "Nush is at the modeling studio," he says just before closing the door in your face.');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                ]);
              } else {
                scene.text('Valentin answers the door. "Hey girl, what you up to?"');
                scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                scene.text('He nods. "Nush is at the modeling studio."');
                scene.text('"Okay. Is it cool if I just hang out?"');
                scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                scene.actions([
                  { label: 'Leave', goto: ['city_island', ''] },
                  { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                ]);
              }
            }
          } else {
            if (((s as any).AnushkaLocCity ?? 0) === 'home'  &&  ((s as any).ValentinLocCity ?? 0) === 'home') {
              (s as any).minut = ((s as any).minut ?? 0) + 1;
              (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
              scene.text('You stand outside the door as you knock, waiting to see who answers it.');
              if (((s as any).aptdoor ?? 0) === 1) {
                scene.img('images/characters/shared/headshots_main/big144.jpg');
                // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
                scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname || '')}. Come on in." She leads you down the hall to her room.`);
                scene.actions([
                  { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
                ]);
              } else {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 1;
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
                  if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                    scene.text('Valentin answers the door. "Nush is in her room," he says as he turns and walks away before you can say anything in return.');
                    scene.actions([
                      { label: 'Leave', goto: ['city_island', ''] },
                    ]);
                  } else {
                    scene.text('Valentin answers the door. "Hey girl, what you up to?"');
                    scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                    scene.text('He nods. "Nush is in her room if you\'re looking for her."');
                    scene.text('"Okay. Is it cool if I just hang out?"');
                    scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                    scene.actions([
                      { label: 'Leave', goto: ['city_island', ''] },
                      { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 2;
                if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 1;
                (s as any).aptdoor = Math.floor(Math.random() * 3) + 1;
                scene.text('You stand outside the door as you knock, waiting to see who answers it.');
                if (((s as any).aptdoor ?? 0) === 1) {
                  scene.img('images/characters/shared/headshots_main/big156.jpg');
                  if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
                    scene.text('Arkadi answers the door. "What\'s up?"');
                    scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                    scene.text('He nods. "Nush is in her room if you\'re looking for her. You\'re welcome to hang out," he says as he walks away from the door, leaving you to decide if you want to walk in. You see him walk back to the living room.');
                  } else {
                    if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                      scene.text('Arkadi answers the door. "What the fuck do you want?"');
                      scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                      scene.text('He gives you a look of disgust. "Nush is in her room if you\'re looking for her. Otherwise, just fuck off," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                    } else {
                      scene.text('Arkadi answers the door. "What\'s up?"');
                      scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                      scene.text('He nods. "Nush is in her room if you\'re looking for her," he says as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                    }
                  }
                  scene.actions([
                    { label: 'Leave', goto: ['city_island', ''] },
                    { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                  ]);
                } else {
                  if (((s as any).aptdoor ?? 0) === 2) {
                    scene.img('images/characters/shared/headshots_main/big144.jpg');
                    // TODO-QSP: dynamic text: Anushka opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in." She leads ...
                    scene.text(`Anushka opens the door, smiling. "Hey ${((s as any).pcs_nickname || '')}. Come on in." She leads you down the hall to her room.`);
                    scene.actions([
                      { label: 'Enter', goto: ['anush_bedroom_city', 'anushroom'] },
                    ]);
                  } else {
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
                      if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                        scene.text('Valentin answers the door. "Nush is in her room," he says as he turns and walks away before you can say anything in return.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                        ]);
                      } else {
                        scene.text('Valentin answers the door. "Hey girl, what you up to?"');
                        scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                        scene.text('He nods. "Nush is in her room if you\'re looking for her."');
                        scene.text('"Okay. Is it cool if I just hang out?"');
                        scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                          { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                        ]);
                      }
                    }
                  }
                }
              } else {
                if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 23) {
                  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 9;
                  (s as any).aptdoor = Math.floor(Math.random() * 2) + 1;
                  scene.text('You stand outside the door as you knock, waiting to see who answers it.');
                  if (((s as any).aptdoor ?? 0) === 1) {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 1;
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
                      if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                        scene.text('Arkadi answers the door. "What the fuck do you want?"');
                        scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                        scene.text('He gives you a look of disgust. "Nush is at work, so fuck off," he says as he closes the door in your face.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                        ]);
                      } else {
                        scene.text('Arkadi answers the door. "What\'s up?"');
                        scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                        scene.text('He nods. "Nush is at work."');
                        scene.text('"Okay. Is it cool if I just hang out?"');
                        scene.text('"Whatever," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                          { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                        ]);
                      }
                    }
                  } else {
                    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 1;
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
                      if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                        scene.text('Valentin answers the door. "Nush is at work." He says just before closing the door in your face.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                        ]);
                      } else {
                        scene.text('Valentin answers the door. "Hey girl, what you up to?"');
                        scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and hang out."');
                        scene.text('He nods. "Nush is at work."');
                        scene.text('"Okay. Is it cool if I just hang out?"');
                        scene.text('"Sure, come in," he shrugs as he walks away from the door, leaving you to decide if you want to walk in as you see him walk back to the living room.');
                        scene.actions([
                          { label: 'Leave', goto: ['city_island', ''] },
                          { label: 'Enter', goto: ['anushapt_city', 'hallway'] },
                        ]);
                      }
                    }
                  }
                } else {
                  scene.text('You knock on the door several times, but no one answers. You assume nobody\'s home at the moment.');
                  scene.actions([
                    { label: 'Move away from the door and leave', goto: ['city_island', ''] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'anushapt_city', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/hallway.jpg');
  scene.text('This is the entrance hall to the apartment. It\'s devoid of any furniture and the walls and floor are completely bare. The only thing you can see is a single row of coat hooks by the door, which is mostly empty. Other than that the hall, just has a series of doors leading to the other rooms in the apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave the apartment</b>', goto: ['city_island', ''] },
    { label: 'Anushka\'s room', goto: ['anush_bedroom_city', 'anushroom'] },
    { label: 'Radomir\'s room', goto: ['anushapt_city', 'rad_room'] },
    { label: 'Arkadi and Valentin\'s room', goto: ['anushapt_city', 'ark_val_room'] },
    { label: 'Bathroom', goto: ['anushapt_city', 'bathroom'] },
    { label: 'Living room', goto: ['anushapt_city', 'livingroom'] },
    { label: 'Kitchen', goto: ['anushapt_city', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anushapt_city', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/bathroom.jpg');
  scene.text('The bathroom is fairly clean and larger than most apartment bathrooms you\'ve seen. It has white floor tiles with dark green lower wall tiles and lighter green ones above. The one thing you notice right away is the toilet set is up, which is not a surprise with three guys living here.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['anushapt_city', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    qspCall(s, 'anushapt_city_schedule', '');
    (s as any).tempShower = 5;
    if (((s as any).tempShower ?? 0) === 0  &&  ((((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23))) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
      scene.text('Despite the pattering noise of the running water, you hear the bathroom door open. You look past the shower curtain to see Eduard walking up to the toilet and unzipping his pants.');
      if (((s as any).pcs_inhib ?? 0) >= 50) {
        scene.actions([
          { label: 'Give him a show', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showershow.jpg');
    scene.text('It seems he hasn\'t looked over to see who is in the shower yet. You decide to pull the curtain wide open and give him a proper view of your soapy naked body. "Excuse me, is this what you were looking for?" you ask him.');
    scene.text('He is a bit surprised at first. "Oh sorry… I thought you were my wife." His eyes roam up and down your naked body as he pulls out his dick and starts to piss in the toilet. "Don\'t mind me. Just get back to your shower." he adds with a smirk.');
    scene.text('You keep showering with the curtain open while glancing at him every now and then, but after his first once over, he doesn\'t really pay you much attention. Once he is done, he washes his hands and leaves. He closes the door behind him without even another glance at your naked body. You decide to continue with your shower, and you don\'t have any more surprises after that.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt_city', 'bathroom'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Uhm excuse me?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showergetout.jpg');
    scene.text('You pull the shower curtain tight against your body to make sure there\'s nothing for him to see other than your head, but you look out at him in consternation.');
    scene.text('He looks up at you when you question him. It takes him a moment to realize who you are and he quickly zips up his pants. "Shit sorry… I thought you were my wife." He turns away and hurries for the door. "I\'ll just be going… Sorry again." he says as he pulls the door closed. Unsure about what to think, you just decide to finish your shower.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt_city', 'bathroom'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).tempShower ?? 0) === 1  &&  ((s as any).maksimQW ?? 0)?.['QWstage'] >= 5) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
        scene.text('Despite the pattering noise of the running water, you hear the bathroom door creaking slightly. Looking past the shower curtain you see that the bathroom door has been cracked open a little bit. Through the small crack in the doorway, you notice Maksim, Anushka\'s younger brother, peeking in to watch you shower.');
        if (((s as any).pcs_inhib ?? 0) >= 50) {
          scene.actions([
            { label: 'Give him a show', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showershow.jpg');
    scene.text('Looking straight at him, you give him a smile. You pull the curtain wide open to give him the perfect view of your naked, wet, supple body. His eyes grow wide and he wastes no time, quickly coming into the bathroom, pulling the door closed behind him. After a few minutes of just watching you, you notice him pulling out his phone and trying to take a picture. You immediately shake your head at him. "No pictures or I will tell your sister that you snuck in here and started taking pictures of me in the shower." He doesn\'t say anything, but gives you a look that\'s a mixture of disgust, annoyance and fear at the mention of his sister.');
    scene.text('He just settles in, enjoying watching you shower and dry yourself off. As you start getting dressed, you shoo him out of the room before finishing up.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt_city', 'bathroom'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Yell at him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showergetout.jpg');
    if (((s as any).locat ?? 0)?.['A144'] === 0) {
      scene.text('You pull the shower curtain tight against your body to make sure there is nothing for him to see other than your head. "Get out of here you little pervert!"');
      scene.text('He laughs, then quickly ducks away before you hear Anushka yelling at him. "What the hell are you doing?" As you continue your shower, you hear a lot more yelling from behind the door, and there is even a loud crash. Suddenly, silence descends upon the apartment.');
    } else {
      scene.text('You pull the shower curtain tight against your body to make sure there is nothing for him to see other than your head. "Get out of here you little pervert!"');
      scene.text('He just laughs at you and keeps watching.');
      scene.text('"Get out of her or I will tell your sister… or you dad." You tell him.');
      scene.text('You see a flicker of fear in his eyes at the mention of his sister a lot when you mention his dad, he gives you an angry glare before closing the door leaving you in peace.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt_city', 'bathroom'] },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>Bathroom</b></center>');
        scene.img('images/shared/home/bathroom/dush.mp4');
        scene.text('You take a nice shower fully cleaning yourself.');
        scene.actions([
          { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(s, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
          { label: 'Get out of the shower', goto: ['anushapt_city', 'bathroom'] },
        ]);
      }
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
  } },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anushapt_city', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/living_room.jpg');
  if (((s as any).week ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 5;
    scene.text('The room has a couple of recliners and a couch. In front of the couch is a large coffee table with several empty beer bottles and cups spread across the table, along with some scattered papers and a pill bottle. Opposite the couch, mounted on the wall is an average size flat screen TV, underneath which is a TV stand with several game systems and other electronics on it. A drum set sits in one corner while speakers, amps, guitars and a variety of other musical electronics sit along the two walls not occupied by the TV or the couch.');
    scene.text('The room isn\'t exactly messy, but it\'s far from clean. Arkadi is sitting on the couch playing a game.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
      { label: 'Join him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A156', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/video_games/videogame_boy.jpg');
    scene.text('You take a seat next to Arkadi. After a few minutes, he switches to a two player game and you pick up the other controller and start playing with him. The two of you have a good time playing games for a while, but you eventually get bored and he seems to have no interest in switching games, so you get up and decide to look around the rest of the apartment.');
    scene.actions([
      { label: 'Leave the livingroom', goto: ['anushapt_city', 'hallway'] },
    ]);
  } },
    ]);
  } else {
    if ((((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 23)) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A156'] = 5;
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 5;
      scene.text('The room has a couple of recliners and a couch. In front of the couch is a large coffee table with several empty beer bottles and cups spread across the table, along with some scattered papers and a pill bottle. Opposite the couch, mounted on the wall is an average size flat screen TV, underneath which is a TV stand with several game systems and other electronics on it. A drum set sits in one corner while speakers, amps, guitars and a variety of other musical electronics sit along the two walls not occupied by the TV or the couch.');
      scene.text('The room isn\'t exactly messy, but it\'s far from clean. Arkadi and Valentin are sitting on the couch playing a game.');
      scene.actions([
        { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
        { label: 'Join themn', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A156', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A158', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/video_games/videogame_2boys\' + rand(1, 2) + \'.jpg');
    scene.text('You take a seat between the boys and watch as they play the game. Valentin asks you how things have been going and generally makes pleasant conversation with you as he plays, while Arkadi mostly ignores you. He seems very intent on winning his game against Valentin and has no time for talking.');
    scene.text('After a while, you get bored and eventually excuse yourself, but they barely even notice you leaving.');
    scene.actions([
      { label: 'Leave the living room', goto: ['anushapt_city', 'hallway'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A158'] = 5;
        scene.text('The room has a couple of recliners and a couch. In front of the couch is a large coffee table with several empty beer bottles and cups spread across the table, along with some scattered papers and a pill bottle. Opposite the couch, mounted on the wall is an average size flat screen TV, underneath which is a TV stand with several game systems and other electronics on it. A drum set sits in one corner while speakers, amps, guitars and a variety of other musical electronics sit along the two walls not occupied by the TV or the couch.');
        scene.text('The room isn\'t exactly messy, but it\'s far from clean. Valentin is sitting on the couch playing a game.');
        scene.actions([
          { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
          { label: 'Join him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A158', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/video_games/videogame_boy.jpg');
    scene.text('You take a seat next to Valentin. After a few minutes, he switches to a two player game and you pick up the other controller and start playing with him. As the two of you play, he asks how things are going and politely chats while you play.');
    scene.text('You eventually get bored and he seems to have no interest in switching games, so you get up and decide to look around the rest of the apartment.');
    scene.actions([
      { label: 'Leave the room', goto: ['anushapt_city', 'hallway'] },
    ]);
  } },
        ]);
      } else {
        scene.text('The room has a couple of recliners and a couch. In front of the couch is a large coffee table with several empty beer bottles and cups spread across the table, along with some scattered papers and a pill bottle. Opposite the couch, mounted on the wall is an average size flat screen TV, underneath which is a TV stand with several game systems and other electronics on it. A drum set sits in one corner while speakers, amps, guitars and a variety of other musical electronics sit along the two walls not occupied by the TV or the couch.');
        scene.text('The room isn\'t exactly messy, but it\'s far from clean. No one is here right now.');
        scene.actions([
          { label: 'Leave the room', goto: ['anushapt_city', 'hallway'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt_city', 'kitchen');
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/kitchen.jpg');
  scene.text('The first thing that stands out about the room is that one corner is more of a curve where the cabinets are. Along the back wall is one narrow window where the cabinets start and go all the way up along one wall, leaving two walls covered in cabinets, a stove, sink and refrigerator. Most of the counter space is filled with small appliances, cups, and various other items and a few dirty dishes are in the sink.');
  scene.text('Against the wall opposite the cabinets is a small table with four chairs, which is covered in bags of chips, papers and other things. You wouldn\'t call the kitchen dirty, but it isn\'t exactly clean either.');
  qspCall(s, 'kit_din', 'fill_bottle');
  qspCall(s, 'kit_din', 'driwater');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
    { label: 'Look in the fridge', goto: ['anushapt_city', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).anushfood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).anushbeer_count = 20;
    (s as any).anushvodka_count = 10;
    (s as any).anushsup_count = 3;
    (s as any).anushfresh_count = 5;
  }
  qspCall(s, 'stat', '');
  if (((s as any).anushbeer_count ?? 0) > 1) {
  } else {
    if (((s as any).anushbeer_count ?? 0) === 1) {
    }
  }
  if (((s as any).anushvodka_count ?? 0) === 10) {
  } else {
    if (((s as any).anushvodka_count ?? 0) === 5) {
    } else {
      if (((s as any).anushvodka_count ?? 0) === 1) {
      }
    }
  }
  if (((s as any).anushsup_count ?? 0) >= 3) {
  }
  scene.img('images/locations/city/island/homes/band_apt/fridge.jpg');
  scene.text('You open the fridge and see some leftovers of different kinds, some vodka, about two dozen beers, milk, juice, yogurt, some sodas and some fresh vegetables. The vegetables and yogurt have to be Anushka\'s, even though you have a bit of a hard time seeing her eating healthy.');
  if (((s as any).anushbeer_count ?? 0) > 0) {
    scene.actions([
      { label: 'Have a beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    (s as any).anushfood_day = ((s as any).daystart ?? 0);
    (s as any).anushbeer_count = ((s as any).anushbeer_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer\'+rand(1, 3)+\'.jpg');
    scene.text('You take a bottle of beer from the fridge and drink it, which quenches your thirst.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt_city', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushvodka_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink some vodka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    (s as any).anushfood_day = ((s as any).daystart ?? 0);
    (s as any).anushvodka_count = ((s as any).anushvodka_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka\'+rand(1, 2)+\'.jpg');
    scene.text('You pour some vodka into a glass and drink it. You shiver as you feel the warm, burning sensation slowly slide down your gullet.');
    scene.actions([
      { label: 'Put the bottle back in the fridge', goto: ['anushapt_city', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
      { label: 'Drink more vodka', handler: (st: GameState) => {
    if ((!((s as any).anushvodka_count ?? 0))) {
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka0.jpg');
      scene.text('<font color = red>There\'s no vodka left. You drank it all!</font>');
    } else {
      if (((s as any).anushvodka_count ?? 0) > 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        qspCall(s, 'drugs', 'alcohol', 'vodka');
        (s as any).anushvodka_count = ((s as any).anushvodka_count ?? 0) - (1);
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka\'+rand(1, 2)+\'.jpg');
        scene.text('You pour yourself another glass and drain it in one gulp. Wow, that stuff is strong!');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['anushapt_city', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).anushsup_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).anushfood_day = ((s as any).daystart ?? 0);
    (s as any).anushsup_count = ((s as any).anushsup_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from a ready to make meal. You wonder if anyone here knows how to cook.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt_city', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushfresh_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat veggies', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).anushfood_day = ((s as any).daystart ?? 0);
    (s as any).anushfresh_count = ((s as any).anushfresh_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/veggies.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You grab a plate of fresh vegetables from the fridge and put them on a plate before you take a seat and eat them. When you\'re done, you rinse your plate off in the sink.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt_city', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['anushapt_city', 'kitchen'] },
  ]);
  scene.build();
}

function enterSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (25);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 4;
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/get_snacks.jpg');
  scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
  scene.text('As you walk into the kitchen, Anushka points to a refrigerator. "Grab some drinks out of the fridge and anything else good."');
  scene.text('While you are doing that, she grabs a couple of snack cakes and chips from the cabinets, and once you both have your spoils from your raid on the kitchen, you head back to her room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to her room', handler: (st: GameState) => {
    // TODO-QSP: locat['A144'] = 2
  }, goto: ['anush_bedroom_city', 'anushroom'] },
  ]);
  scene.build();
}

function enterRadRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  scene.text('<center><b>Radomir\'s room</b></center>');
  if ((((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4)  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A154'] = 3;
    (s as any).tempRad = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).tempRad ?? 0))) {
      scene.img('images/locations/city/island/homes/band_apt/door.jpg');
      scene.text('Just as you walk up to the door, you hear sounds coming from the other side. As you lean in close to the door, you can make out the soft moans and cries of a girl, with a louder Radomir\'s voice partially drowning them out. "Yeah, that\'s right bitch! Take my cock! You love my big cock pounding your tight little ass, don\'t you slut?!"');
      scene.text('You can\'t hear a reply, but it sounds like they\'re both having fun, so you should leave them alone.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
      ]);
    } else {
      scene.img('images/locations/city/island/homes/band_apt/rad_room.jpg');
      scene.text('The room is surprisingly clean and well kept. There is a large build in the middle of the room against the opposite wall. "Rock Star" is spelled out above the bed, a dresser sits on one side of the room with a guitar in front of it. Along the opposite wall is a desk with a laptop on it with a medium sized TV and bean bag chair in front of it.');
      scene.text('Radomir is sitting at the desk, working on his laptop.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        { label: 'Say hi', handler: (st: GameState) => {
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You walk into his room. "Hi. You busy?"');
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 60) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('He glances over at you. "Hey girl, what you up to?"');
      scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and see what you were doing."');
      scene.text('He nods. "Just working on a new song is all."');
      scene.text('The two of you talk about music, but he keeps getting distracted by working on the song. After a while, you decide to leave him to it.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        scene.text('He glances over at you and immediately has a look of anger on his face.');
        scene.text('"What the fuck are you doing? Get the fuck out of my room!" he says as he gets up and crosses over to you. He grabs you by the arm and shoves your out of his room, closing the door afterwards.');
        scene.actions([
          { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.text('He glances up at you and then back at his computer. "Yeah, I\'m busy."');
        scene.text('"Can I ask what you\'re doing?" you ask, trying to strike up more of a conversation.');
        scene.text('He sighs and looks over at you. "I\'m working on a new song. Now if you don\'t mind, I\'d like to be left alone."');
        scene.text('He returns his focus to his laptop and ignores you, so you decide to leave.');
        scene.actions([
          { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        ]);
      }
    }
  } },
      ]);
    }
  } else {
    if (((s as any).week ?? 0) === 7  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20)) {
      scene.img('images/locations/city/island/homes/band_apt/rad_room.jpg');
      scene.text('The room is surprisingly clean and well kept. There is a large build in the middle of the room against the opposite wall. "Rock Star" is spelled out above the bed, a dresser sits on one side of the room with a guitar in front of it. Along the opposite wall is a desk with a laptop on it with a medium sized TV and bean bag chair in front of it.');
      scene.text('Radomir is sitting at the desk, working on his laptop.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        { label: 'Say hi', handler: (st: GameState) => {
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You walk into his room. "Hi. You busy?"');
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 60) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('He glances over at you. "Hey girl, what you up to?"');
      scene.text('You smile at him. "Nothing much. Just thought I\'d stop by and see what you were doing."');
      scene.text('He nods. "Just working on a new song is all."');
      scene.text('The two of you talk about music, but he keeps getting distracted by working on the song. After a while, you decide to leave him to it.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        scene.text('He glances over at you and immediately has a look of anger on his face.');
        scene.text('"What the fuck are you doing? Get the fuck out of my room!" he says as he gets up and crosses over to you. He grabs you by the arm and shoves your out of his room, closing the door afterwards.');
        scene.actions([
          { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.text('He glances up at you and then back at his computer. "Yeah, I\'m busy."');
        scene.text('"Can I ask what you are doing?" you ask, trying to strike up more of a conversation.');
        scene.text('He sighs and looks over at you. "I\'m working on a new song. Now if you don\'t mind, I\'d like to be left alone."');
        scene.text('He returns his focus to his laptop and ignores you, so you decide to leave.');
        scene.actions([
          { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.img('images/locations/city/island/homes/band_apt/rad_room.jpg');
      scene.text('The room is surprisingly clean and well kept. There is a large build in the middle of the room against the opposite wall. "Rock Star" is spelled out above the bed, a dresser sits on one side of the room with a guitar in front of it. Along the opposite wall is a desk with a laptop on it with a medium sized TV and bean bag chair in front of it.');
      scene.text('Since nobody\'s here, you should probably leave, but you could take a look around if you\'re curious.');
      scene.actions([
        { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
        { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/city/island/homes/band_apt/rad_nightstand.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet, but you don\'t find anything of interest. His computer is password protected, so you can\'t use it. The only thing of note is some condoms and other stuff in one of the night stands.');
    scene.actions([
      { label: 'Leave his room', goto: ['anushapt_city', 'hallway'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterArkValRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  scene.text('<center><b>Arkadi and Valentin\'s room</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/ark_val_room.jpg');
  scene.text('The room is pretty small, the smallest bedroom in the apartment. In each corner opposite the door is a bed; both are a mess and neither looks like they\'ve ever been made. The walls and even the ceiling are covered in posters along with a few records. Most of the posters are of various bands, but a few are of scantly or completely naked girls, along with one rather large Star Wars poster on the ceiling.');
  scene.text('Between the beds along the back wall are two night stands, one by each bed. Both are pretty cluttered looking, with a single window just between the night stands. Other a closet near the door, the room is otherwise pretty empty.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
    { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Arkadi and Valentin\'s room</b></center>');
    scene.img('images/locations/city/island/homes/band_apt/ark_val_room.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet, but you don\'t find anything of interest. The room is too disorganized for you to find much. Beyond clothes, nothing stands out other than a few joints and condoms in the nightstands.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt_city', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNushlivroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'anushapt_city_schedule', '');
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['A144'] = 5;
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/city/island/homes/band_apt/living_room.jpg');
  scene.text('The room has a couple of recliners and a couch where Anushka is sitting. In front of the couch is a large coffee table with several empty beer bottles and cups spread across it. There are also some scattered papers and a pill bottle sitting on the table. Opposite the couch in front of the window is a fairly large TV playing an action movie of some sort and a stereo system. The room isn\'t exactly messy, but it\'s far from clean. You walk over and sit down next to Anushka.');
  scene.text('You notice that you don\'t hear anything else. "Where\'s everyone else?"');
  scene.text('She shrugs. "I think they all went out to see a movie, so I have the place to myself."');
  if (((s as any).strapNumber ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
    scene.actions([
      { label: 'Pull out your strap-on', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap1.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('Anushka arches her eyebrows when you pull the strap-on out of your purse, then bites her lower lip. "Just what are you planning to do with that?"');
      scene.text('You give her a grin. "I was thinking about fucking you with it, or maybe having you fuck me with it? With nobody home, it would be a crime to waste the freedom it gives us."');
      scene.text('She gets flushed, and you can tell she is turned on. "Yeah? Well hand it over and I\'ll fuck your tight little asshole until you scream for me."');
      scene.actions([
        { label: 'Fuck her', goto: ['anushkaev1', 'couch_strapon_give', '\'city\''] },
        { label: 'Give her the strap-on', goto: ['anushkaev1', 'couch_strapon_get', '\'city\''] },
      ]);
    } else {
      scene.text('Anushka reaches up and takes the strap-on from you. She takes a look at it then gives the straps a few good tugs while she checks the size of the dildo. "Pretty nice one. It\'s a quality dildo and sturdy harness. You made a good choice," she says as she hands it back to you and turns her attention back to the movie. Taking the hint that she doesn\'t want to play, you put the strap-on away and join her in watching the TV.');
      scene.actions([
        { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    qspCall(s, 'anushapt_city_schedule', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you chat while watching some cheesy American action movie, so you barely pay attention to it. In fact, it ends and something else comes on that you don\'t even remember. After a few hours though, you hear keys in the lock of the door.');
    scene.text('"Shit, they\'re home already. Come on, let\'s go," she says as she gets up and heads to her room.');
    scene.actions([
      { label: 'Follow Anushka to her room', handler: (st: GameState) => {
    // TODO-QSP: locat['A144' ] = 2
  }, goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    qspCall(s, 'anushapt_city_schedule', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you chat while watching some cheesy American action movie, so you barely pay attention to it. In fact, it ends and something else comes on that you don\'t even remember. After a few hours though, you hear keys in the lock of the door.');
    scene.text('"Shit, they\'re home already. Come on, let\'s go," she says as she gets up and heads to her room.');
    scene.actions([
      { label: 'Follow Anushka to her room', handler: (st: GameState) => {
    // TODO-QSP: locat['A144'] = 2
  }, goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'snack':
      enterSnack(s, scene);
      break;
    case 'rad_room':
      enterRadRoom(s, scene);
      break;
    case 'ark_val_room':
      enterArkValRoom(s, scene);
      break;
    case 'nushlivroom':
      enterNushlivroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushapt_city: LocationDef = {
  name: 'anushapt_city',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  enter: enter,
};
