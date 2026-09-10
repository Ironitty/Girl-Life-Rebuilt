import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichWork ?? 0) === 2) {
    if (((s as any).nichLastWorkDay ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'nichUtil', 'startWorkday');
    }
    qspCall(s, 'nichUtil', 'checkOutfit');
  }
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === 'return') {
    if ((!((s as any).nichWork ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['nichApartment', 'visitTanya'] }]);
    }
    qspCall(s, 'stat', '');
    scene.text('<center><b>Nicholas\' Apartment</b></center>');
    scene.img('images/locations/city/citycenter/nichApartment/hallway.jpg');
    scene.text('You are standing in a luxurious and spacious city center home.');
    if ((!((s as any).nichGalaDisabled ?? 0))) {
      // TODO-QSP: $nickFamDesc += ' He lives here with his wife <a href="exec: gt ''nichGala'', ''desc''">Gala</a>.'
    }
    // TODO-QSP: $nickFamDesc += ' <a href="exec: gt ''nichTanya'', ''desc''">Tanya</a> is the daughter of Gala and s...
    // TODO-QSP: $nickFamDesc
    if (((s as any).nichWork ?? 0) === 2) {
      scene.text('You work here as a live-in maid.');
      if (((s as any).nichNote ?? 0) === 1) {
        scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed work. This is unacceptable. Take your stuff and l...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed work. This is unacceptable. Take your stuff and leave. You are fired. -Nicholas"`);
        scene.text('You see all your belongings standing in front of the door prepared for your departure.');
        return;
        scene.actions([
          { label: 'Fired', goto: ['nichUtil', 'fired'] },
        ]);
      } else {
        scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed work. This is unacceptable. I expect this not to ...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed work. This is unacceptable. I expect this not to happen again. -Nicholas"`);
        scene.text('<a href="exec: gt \'nichApartment\', \'removeNote\'">Remove note</a>');
        if (((s as any).nichNote ?? 0) === 11) {
          scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed your last mandatory evaluation. This is unaccepta...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed your last mandatory evaluation. This is unacceptable. Take your stuff and leave. You are fired. -Nicholas"`);
          scene.text('You see all your belongings standing in front of the door prepared for your departure.');
          return;
          scene.actions([
            { label: 'Fired', goto: ['nichUtil', 'fired'] },
          ]);
        } else {
          scene.text('<font color = red><b>You see a note hanging at the door to your room:</b></font>');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you missed your last mandatory evaluation. This is unaccepta...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, you missed your last mandatory evaluation. This is unacceptable. I expect this not to happen again. -Nicholas"`);
          scene.text('<a href="exec: gt \'nichApartment\', \'removeNote\'">Remove note</a>');
        }
        if (((s as any).nichWork ?? 0) === 3) {
          scene.text('You used to work here.');
        }
        scene.text('The corridor\'s floor and walls are a tasteful mix of marble and wood. Besides several paintings and small statues for decoration, the only thing of note in it is are a coat and shoe rack for guests.');
        if (((s as any).nichNichAct ?? 0) === 'leaveWork') {
          scene.text('<a href="exec: gt \'nichNicholas\', \'start\'">Nicholas</a> is wearing an expensive suit and is about to leave for work.');
        } else {
          scene.text('Nicholas is wearing one of his expensive suits. Apparently he just returned from work.');
          if (((s as any).nichNichAct ?? 0) === 'leaveShopping') {
            scene.text('Nicholas is about to leave the apartment. It looks as if he wants to go shopping.');
          } else {
            scene.text('Nicholas just returned from shopping. Apparently he bought some things from expensive shops.');
            if (((s as any).nichNichAct ?? 0) === 'leaveClub') {
              scene.text('Nicholas is wearing one of his finest black tie suits. Apparently he is about to leave for his club.');
              if (((s as any).nichGalaAct ?? 0) === 'leaveClub') {
                scene.text('Gala accompanies him. She is wearing her silver jewelry and an expensive looking dress which is a perfect combination of classy and sexy.');
              }
            } else {
              if (((s as any).nichGalaAct ?? 0) === 'returnClub') {
                scene.text('Nicholas and Gala just returned from their club.');
              }
              scene.text('Nicholas just returned from his club.');
            }
            if (((s as any).nichGalaAct ?? 0) === 'leaveSpa') {
              scene.text('Gala is about to leave the apartment. As far as you know she is going to her spa.');
            } else {
              scene.text('Gala just entered the apartment. She seems to be very releaxed. Apparently she was at her spa.');
              if (((s as any).nichGalaAct ?? 0) === 'leaveFriend') {
                scene.text('Gala is about to leave the apartment. She is wearing one of her favorite short dresses and apparently spent much effort applying her make-up. As far as you know she wants to visit a friend of hers.');
              } else {
                scene.text('Gala just entered the apartment. As far as you know she visited a friend.');
              }
              if (((s as any).nichTanyAct ?? 0) === 'leaveUni') {
                scene.text('Tanya is about to leave the apartment. It looks as if she is about to attend her classes at university.');
              } else {
                scene.text('Tanya just entered the apartment. Apparently she returned from university.');
                if (((s as any).nichTanyAct ?? 0) === 'leaveBallet') {
                  scene.text('Tanya is about to leave the apartment. Apparently she is going to attend to her ballet lessons.');
                } else {
                  scene.text('Tanya just entered the apartment. As far as you know she was at her ballet lessons.');
                  if (((s as any).nichTanyAct ?? 0) === 'leaveFriend') {
                    scene.text('Tanya is about to leave the apartment. As far as you know she is going to visit a friend.');
                  } else {
                    scene.text('Tanya just entered the apartment. As far as you know she visited a friend.');
                    if (((s as any).nichTanyAct ?? 0) === 'leaveShopping') {
                      scene.text('Tanya is about to leave the apartment. From the way she is dresses you assume that she is heading for a shopping trip.');
                    } else {
                      scene.text('Tanya just entered the apartment. She carries some plastic bags with her, indicating that she bought some new clothes and shoes.');
                      if (((s as any).nichTanyAct ?? 0) === 'leaveClub') {
                        scene.text('Tanya is about to leave to a dance club.');
                      } else {
                        scene.text('Tanya just entered the apartment. She wears the clothes she usually wears to her dance club. She appears to be a little bit exhausted.');
                      }
                      if (((s as any).nichWork ?? 0) === 2) {
                        scene.actions([
                          { label: '<b>Go to your bedroom</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomServant', ''] },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Go to the servant bedroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomServant', ''] },
                        ]);
                      }
                      if (((s as any).nichWork ?? 0) === 2) {
                        qspCall(s, 'nichChore', 'inspect', 'hallway');
                        if (((s as any).nichWorkState ?? 0) > 0) {
                          scene.actions([
                            { label: 'Clean apartment', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'cleanApartment', 'start'
  } },
                          ]);
                        }
                      }
                      if (((s as any).nichWork ?? 0) === 3  &&  ((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 22) {
                        scene.actions([
                          { label: 'Get changed into the maid outfit and ask for your job back.', goto: ['nichStudy', 'reHire'] },
                        ]);
                      }
                      if (((s as any).nichDebug ?? 0) === 1) {
                        scene.actions([
                          { label: 'Debug Menu', goto: ['nichUtil', 'debug'] },
                        ]);
                      }
                      scene.actions([
                        { label: '<b>Leave and go to the city center</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
    }
  } },
                        { label: 'Go to the living room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichLivingroom', ''] },
                        { label: 'Go to the master bedroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomMaster', ''] },
                        { label: 'Go to Tanya\'s room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBedroomTanja', ''] },
                        { label: 'Go to the study', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichStudy', ''] },
                        { label: 'Go to the guest cloakroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBathGuest', ''] },
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const nichApartment: LocationDef = {
  name: 'nichApartment',
  title: '<center><b>Nicholas\' Apartment</b></center>',
  region: 'other',
  locationType: 'event',
  description: ['You are standing in a luxurious and spacious city center home.'],
  enter: enter,
};
