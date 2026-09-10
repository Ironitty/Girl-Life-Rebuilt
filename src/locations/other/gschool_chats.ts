import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_chats', 'nerds');
  qspCall(s, 'gschool_chats', 'nerd_event_check');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/pavlovsk/school/chat/nerd\' + rand(1, 3) + \'.jpg');
  if ((!((s as any).PSchool ?? 0))) {
    scene.text('You are using the school uniform cheat and are not wearing a uniform, therefore there are no reactions to your uniform.');
  } else {
    if (((s as any).PCloInhibit ?? 0) <= 5) {
      if (((s as any).fame ?? 0)?.['pav_sex'] > 0) {
        qspCall(s, 'fame', 'pav', 'sex', (-1));
      }
      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', 1);
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
      if (((s as any).npc_rel ?? 0)?.['A142'] < 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
      }
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
      } else {
        scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
      }
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 3);
      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-5));
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (10);
      qspCall(s, 'npc_relationship', 'modify', 'A16', 3);
      qspCall(s, 'npc_relationship', 'modify', 'A152', 3);
      if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
        qspCall(s, 'npc_relationship', 'modify', 'A25', 'love');
      }
      qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('When you walk in, the room goes dead silent and everyone stares at you. Several of the nerds blush at the scandalous display of flesh from your uniform, or lack thereof before Feofan finally speaks up. "What are you wearing?" Natasha butts in. "A better questions is why?" As you get closer, the nerds all share looks before looking at Feofan, who swallows. "Maybe you should go hang out somewhere else or go change or something?" They all close ranks, making sure not to give you space to walk up and talk to them. The outcasts, on the other hand, don\'t seem to care as much.');
      } else {
        scene.text('When you walk in, the room goes dead silent and everyone stares at you. Several of the nerds blush at the scandalous display of flesh from your uniform, or lack thereof before they all close ranks, making sure not to give you space to walk up and talk to them. The outcasts, on the other hand, don\'t seem to care as much.');
      }
      if (((s as any).PCloSkirt ?? 0) < 5) {
        if (((s as any).PCloInhibit ?? 0) >= 30  ||  ((s as any).PCloTopCut ?? 0) === 4) {
          (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
          qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
          if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
            qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
          }
          qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
          if (((s as any).grupTipe ?? 0) === 3) {
            scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem struggle to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes linger on your attire a bit longer; her gaze doesn\'t feel all that welcoming either.');
          } else {
            scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as always, all nerding around a table talking and engaging in various personal projects. Several of them look up as you walk closer. Artem and Petka both seem to be struggling to hide their judgmental stares about your choice of uniform and you don\'t find the look Julia has in her eyes all that comforting either.');
          }
        } else {
          qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
          (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
          qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
          (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) + (1);
          if (((s as any).grupTipe ?? 0) === 3) {
            scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
          } else {
            scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
          }
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
            (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) + (1);
            if (((s as any).grupTipe ?? 0) === 3) {
              scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
            } else {
              scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
            }
          } else {
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
            (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', (-1));
            (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) - (1);
            if (((s as any).grupTipe ?? 0) === 3) {
              scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
            } else {
              scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
            }
            if (((s as any).PCloStyle ?? 0) === 2) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
              (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              } else {
                scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A12'] < 50) {
                qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
              }
              if (((s as any).npc_rel ?? 0)?.['A16'] < 50) {
                qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
              }
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Natasha notices your uniform. "Oh I like your uniform, it\'s very pretty. Don\'t you think?" She nudges Julia, who looks at you and blushes. "Yes, very pretty…" she says in agreement. You notice that she seems to struggle to look away.');
              } else {
                scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Natasha notices your uniform. "Oh I like your uniform, it\'s very pretty. Don\'t you think?" She nudges Julia, who looks at you and blushes. "Yes, very pretty…" she says in agreement. You notice that her eyes remain on you for a few extra moments.');
              }
            }
            if (((s as any).PCloInhibit ?? 0) >= 35  ||  ((s as any).PCloTopCut ?? 0) === 4) {
              (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
              if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
                qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
              }
              qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem struggle to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes linger on your attire a bit longer; her gaze doesn\'t feel all that welcoming either.');
              } else {
                scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as always, all nerding around a table talking and engaging in various personal projects. Several of them look up as you walk closer. Artem and Petka both seem to be struggling to hide their judgmental stares about your choice of uniform and you don\'t find the look Julia has in her eyes all that comforting either.');
              }
            } else {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
              (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
              (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) + (1);
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              } else {
                scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              }
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
                (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) + (1);
                if (((s as any).grupTipe ?? 0) === 3) {
                  scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
                } else {
                  scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
                }
              } else {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', (-1));
                (s as any).grupvalue[5] = ((s as any).grupvalue[5] ?? 0) - (1);
                if (((s as any).grupTipe ?? 0) === 3) {
                  scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                } else {
                  scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                }
                if (((s as any).PCloStyle ?? 0) === 2) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                  (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                  if (((s as any).grupTipe ?? 0) === 3) {
                    scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  } else {
                    scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  }
                } else {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                  (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                  if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
                    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
                  }
                  qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
                  if (((s as any).grupTipe ?? 0) === 3) {
                    scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem struggle to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes linger on your attire a bit longer; her gaze doesn\'t feel all that welcoming either.');
                  } else {
                    scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as always, all nerding around a table talking and engaging in various personal projects. Several of them look up as you walk closer. Artem and Petka both seem to be struggling to hide their judgmental stares about your choice of uniform and you don\'t find the look Julia has in her eyes all that comforting either.');
                  }
                }
              }
            }
            scene.text('Artem, Petka, Julia, Natasha, Zinaida, Evgeny, Feofan, Gerasim and Natalia are sitting around some tables they\'ve moved together.');
            qspCall(s, 'gschool_groups', 'nerds');
            scene.text('The outcasts are hiding away from everyone else, hoping that no one will pick on them today.');
            // TODO-QSP: 'Lesco is reading a book '+iif(npc_grupTipe['A5'] ! 5, '', 'Fedor is sitting on a window sill starin...
            qspCall(s, 'gschool_groups', 'outcasts');
            qspCall(s, 'stat', '');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

export const gschool_chats: LocationDef = {
  name: 'gschool_chats',
  title: 'This uniform is very conservative. Only the nerds would approve of you wearing it.',
  region: 'other',
  description: ['You are using the school uniform cheat and are not wearing a uniform, therefore there are no reactions to your uniform.'],
  enter: enter,
};
