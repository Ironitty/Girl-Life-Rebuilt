import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRelationship(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_rel = qspUntranslated(s, "ARGS[1]", { location: "journal_NPC_information" });
  if (((s as any).locArgs?.[2] ?? 0) === 'm') {
    if (((s as any).temp_npc_rel ?? 0) >= 80) {
      scene.text('He really likes you and considers you one of his best friends.');
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 50) {
        scene.text('He really likes you and considers you to be one of his friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) <= 20) {
          scene.text('He really dislikes you, maybe even hates you. Either way, he can\'t stand you.');
        } else {
          scene.text('You are acquaintances with him, but he doesn\'t seem to care much about you either way.');
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'f') {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('She really likes you and considers you one of her best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('She really likes you and considers you to be one of her friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('She really dislikes you, maybe even hates you. Either way, she can\'t stand you.');
          } else {
            scene.text('You are acquaintances with her, but she doesn\'t seem to care much about you either way.');
          }
        }
      }
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('They really like you and considers you one of their best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('They really like you and considers you to be one of their friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('They really dislikes you, maybe even hates you. Either way, they can\'t stand you.');
          } else {
            scene.text('You are acquaintances with them, but they don\'t seem to care much about you either way.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterPast_Relationship(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_rel = qspUntranslated(s, "ARGS[1]", { location: "journal_NPC_information" });
  if (((s as any).locArgs?.[2] ?? 0) === 'm') {
    if (((s as any).temp_npc_rel ?? 0) >= 80) {
      scene.text('He really liked you and considered you one of his best friends.');
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 50) {
        scene.text('He liked you and considered you to be one of his friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) <= 20) {
          scene.text('He really disliked you, maybe even hated you. Either way, he couldn\'t stand you.');
        } else {
          scene.text('You were acquaintances with him, but he didn\'t seem to care much about you either way.');
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'f') {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('She really liked you and considered you one of her best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('She liked you and considered you to be one of her friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('She really disliked you, maybe even hated you. Either way, she couldn\'t stand you.');
          } else {
            scene.text('You were acquaintances with her, but she didn\'t seem to care much about you either way.');
          }
        }
      }
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('They really liked you and considered you one of their best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('They liked you and considered you to be one of their friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('They really disliked you, maybe even hated you. Either way, they couldn\'t stand you.');
          } else {
            scene.text('You were acquaintances with them, but they didn\'t seem to care much about you either way.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterA28(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/28.jpg');
  scene.text('<center>Vladimir (Stepfather)</center>');
  scene.text('Your stepfather is a greying, slightly flabby man who works as a truck driver. Your mother divorced your biological father and married Vladimir when you were less than a year old. One year after being married, your parents welcomed your little brother Kolka, Vladimir\'s first born child. Kolka is his only child that you know of. When not working, your stepfather can often be found working on his cars in the garage. He gets some time alone to watch TV on Monday evenings.');
  if (((s as any).locArgs?.[0] ?? 0) === 'A29') {
    scene.img('images/characters/shared/headshots_main/29.jpg');
    scene.text('<center>Natasha (Mother)</center>');
    scene.text('Your mother was born in Gadukino. She is still quite young and attractive, but you have done the math and know she had Anya when she was only sixteen years old. Your grandmother died in child birth with your mother and your grandfather was killed a few years later in the Afghanistan war. She works at the cafe near the train station.');
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'A30') {
      scene.img('images/characters/shared/headshots_main/30.jpg');
      scene.text('<center>Lyudmila Knavs (Aunt)</center>');
      scene.text('Your mother\'s older sister, who works at the local pharmacy and has a live in boyfriend called Olu whom she met while traveling. He is an African man, which has caused more than a few rumors and sour looks at your aunt. Your aunt doesn\'t seem to care though, and if anything, seems to enjoy flaunting her boyfriend in front of others.');
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'A31') {
        scene.img('images/characters/shared/headshots_main/32.jpg');
        scene.text('<center>Elena Knavs (Great Grandmother)</center>');
        scene.text('Your great grandma is extremely old and almost never leaves the house. Most of the time, she just sits on her bed watching TV or slowly cleans the house. Having raised your mother and aunt Luda, she is like a grandmother to you and a mother to your mother. She has raised two generations of children and is now content with the peace and quiet of the village.');
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'A32') {
          scene.img('images/characters/shared/headshots_main/31.jpg');
          scene.text('<center>Zlatek Knavs (Great Grandfather)</center>');
          scene.text('Your great grandfather is a grumpy old man who is always complaining about the village elders and how they have neglected the village to the point where it is now barely fit to live in. He can walk, but requires a cane, so doesn\'t leave the house unless he has to. Your mother and aunt were raised by your great grandparents.');
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'A33') {
            scene.img('images/characters/shared/headshots_main/33.jpg');
            scene.text('<center>Anya (Sister)</center>');
            scene.text('Anya is your older sister, two years your senior, but she still lives at home and shares a bedroom with you. She chose to work at the local supermarket instead of going to university like your mother wanted and spends most of her free time either partying, hanging out with her friends or with her boyfriend Roma.');
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'A34') {
              scene.img('images/characters/shared/headshots_main/34.jpg');
              scene.text('<center>Kolka (Brother)</center>');
              scene.text('Kolka is your younger brother, born about a year after you. While you share the same mother, Kolka\'s father is your stepfather. He is a student at the same school as you and enjoys football. When he is not playing football or doing homework, he spends much of his free time hanging out with his friends.');
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'A35') {
                scene.img('images/characters/shared/headshots_main/35.jpg');
                scene.text('<center>Mikhail Kuznetsov (Father)</center>');
                scene.text('You\'ve never seen your biological father since your parents divorced, so you have no real memory of him.');
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'A54') {
                  scene.img('images/characters/shared/headshots_main/54.jpg');
                  scene.text('<center>Mikhail "Misha"</center>');
                  scene.text('Your neighbor\'s name is Mikhail, but everyone calls him "Uncle Misha". He lives in the apartment across the hall from you, but your mother always forbade you from talking to him by warning you that he used to be a local crime lord and that you shouldn\'t get involved with him. However, he has always been polite and nice to you. He is close friends with your stepfather, but both have been evasive about how they met and became friends.');
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'A55') {
                    scene.img('images/characters/shared/headshots_main/55.jpg');
                    scene.text('<center>Oluuosegun "Olu" Maina</center>');
                    scene.text('You don\'t know much about your aunt\'s live-in boyfriend, only that he is from Africa and doesn\'t speak Russian very well. He\'s a very large and muscular man and you know many people in the area that find it disgraceful that your aunt lives with him.');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Relationship':
      enterRelationship(s, scene);
      break;
    case 'Past_Relationship':
      enterPast_Relationship(s, scene);
      break;
    case 'A28':
      enterA28(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const journal_NPC_information: LocationDef = {
  name: 'journal_NPC_information',
  title: 'He really likes you and considers you one of his best friend',
  region: 'other',
  enter: enter,
};
