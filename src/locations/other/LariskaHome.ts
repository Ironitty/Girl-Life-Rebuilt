import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  if (((s as any).locat ?? 0)?.['Lari_athome'] === 1) {
    if (((s as any).week ?? 0) <= 5) {
      scene.img('images/characters/shared/headshots_main/big13.jpg');
      scene.text('You knock on Lariska\'s apartment door.');
      // TODO-QSP: dynamic text: Lariska answers the door. "Come in, <<$pcs_nickname>>."
      scene.text(`Lariska answers the door. "Come in, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.actions([
        { label: 'Enter the apartment', goto: ['LariskaHome', 'hallway'] },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/lariska/lariskamother.jpg');
      if (((s as any).locat ?? 0)?.['Lariska'] === 2  ||  ((s as any).locat ?? 0)?.['Lariska'] === 8  ||  ((s as any).locat ?? 0)?.['Lariska'] === 15  ||  ((s as any).locat ?? 0)?.['Lariska'] === 22) {
      } else {
        if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
        } else {
          if (((s as any).locat ?? 0)?.['Lariska'] === 14  ||  ((s as any).locat ?? 0)?.['Lariska'] === 16  ||  ((s as any).locat ?? 0)?.['Lariska'] === 18) {
          }
          scene.text('You knock on Lariska\'s apartment door.');
          if (((s as any).LariskaQW ?? 0)?.['metAnna'] === 0) {
            scene.text('You knock on Lariska\'s apartment door and a smart looking brunette opens the door. You look helplessly into her impressive cleavage and let out an involuntary sigh.');
            scene.text('"Hello, are you looking for Lariska?" the woman asks with a smile.');
            // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_nickname>>." you reply tearing your eyes away from her nearly e...
            scene.text(`"Yes, I'm ${((s as any).pcs_nickname ?? 0)}." you reply tearing your eyes away from her nearly exposed breasts.`);
            // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>, Lariska has told me all about you. I'm Anna, Lariska's m...
            scene.text(`"Ah, ${((s as any).pcs_nickname ?? 0)}, Lariska has told me all about you. I'm Anna, Lariska's mother. My bunny has been so joyous lately, I am so glad she has found such a good friend! She needed someone to help get her back on her feet."`);
            // TODO-QSP: dynamic text: "<<$text_home>>"
            scene.text(`"${((s as any).text_home ?? 0)}"`);
            (s as any).LariskaQW['metAnna'] = 1;
          } else {
            // TODO-QSP: dynamic text: Lariska's mother opens the door. "Hello, <<$pcs_nickname>>. Come inside, <<$text...
            scene.text(`Lariska's mother opens the door. "Hello, ${((s as any).pcs_nickname ?? 0)}. Come inside, ${((s as any).text_home ?? 0)}"`);
          }
          scene.actions([
            { label: 'Enter the apartment', goto: ['LariskaHome', 'hallway'] },
          ]);
        }
        if (((s as any).locat ?? 0)?.['Lariska'] === 9) {
        } else {
          if (((s as any).locat ?? 0)?.['Lariska'] === 7) {
          } else {
            if (((s as any).locat ?? 0)?.['Lariska'] === 21) {
            } else {
              if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
              }
              if (((s as any).week ?? 0) >= 6) {
                scene.img('images/characters/pavlovsk/school/girl/lariska/lariskamother.jpg');
                if (((s as any).LariskaQW ?? 0)?.['metAnna'] === 0) {
                  scene.text('You knock on Lariska\'s apartment door and a smart looking brunette opens the door. You look helplessly into her impressive cleavage and let out an involuntary sigh.');
                  scene.text('"Hello, are you looking for Lariska?" the woman asks with a smile.');
                  // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_nickname>>." you reply tearing your eyes away from her nearly e...
                  scene.text(`"Yes, I'm ${((s as any).pcs_nickname ?? 0)}." you reply tearing your eyes away from her nearly exposed breasts.`);
                  // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>, Lariska has told me all about you. I'm Anna, Lariska's m...
                  scene.text(`"Ah, ${((s as any).pcs_nickname ?? 0)}, Lariska has told me all about you. I'm Anna, Lariska's mother. My bunny has been so joyous lately, I am so glad she has found such a good friend! She needed someone to help get her back on her feet."`);
                  // TODO-QSP: dynamic text: "<<$text_home>>"
                  scene.text(`"${((s as any).text_home ?? 0)}"`);
                  (s as any).LariskaQW['metAnna'] = 1;
                } else {
                  // TODO-QSP: dynamic text: Lariska's mother opens the door. "Hello, <<$pcs_nickname>>. <<$text_home>>"
                  scene.text(`Lariska's mother opens the door. "Hello, ${((s as any).pcs_nickname ?? 0)}. ${((s as any).text_home ?? 0)}"`);
                }
              } else {
                scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_door.jpg');
                scene.text('You knock on Lariska\'s door, but nobody answers.');
                // TODO-QSP: dynamic text: <<$text_home>>
                scene.text(`${((s as any).text_home ?? 0)}`);
              }
              scene.actions([
                { label: 'Go back to town', goto: ['pav_residential', ''] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const LariskaHome: LocationDef = {
  name: 'LariskaHome',
  title: 'You knock on Lariska\'s apartment door.',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['You knock on Lariska\'s apartment door.'],
  enter: enter,
};
