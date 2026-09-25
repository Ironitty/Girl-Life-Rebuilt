import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_chats', 'nerds');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNerdEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/school/chat/nerd` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
  if ((!((s as any).PSchool ?? 0))) {
    scene.text('You are using the school uniform cheat and are not wearing a uniform, therefore there are no reactions to your uniform.');
  } else {
    if (((s as any).PCloInhibit ?? 0) <= 5) {
      if (((s as any).fame ?? 0)?.['pav_sex'] > 0) {
        qspCall(s, 'fame', 'pav', 'sex', (-1));
      }
      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', 1);
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
      if (((s as any).npc_rel ?? 0)?.['A142'] < 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
      }
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
      } else {
        scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
      }
    } else {
      if (((s as any).PCloSkirt ?? 0) > 5  ||  ((s as any).PCloThinness ?? 0) >= 5  ||  ((s as any).PCloBra ?? 0) === 2) {
        qspCall(s, 'fame', 'pav', 'sex', 3);
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-5));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (10);
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
      } else {
        if (((s as any).PCloSkirt ?? 0) < 5) {
          if (((s as any).PCloInhibit ?? 0) >= 30  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
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
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) + (1);
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              } else {
                scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              }
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) + (1);
                if (((s as any).grupTipe ?? 0) === 3) {
                  scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
                } else {
                  scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
                }
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) - (1);
                  if (((s as any).grupTipe ?? 0) === 3) {
                    scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  } else {
                    scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  }
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
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
                }
              }
            }
          }
        } else {
          if (((s as any).PCloInhibit ?? 0) >= 35  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
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
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) + (1);
              if (((s as any).grupTipe ?? 0) === 3) {
                scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              } else {
                scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
              }
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', 1);
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) + (1);
                if (((s as any).grupTipe ?? 0) === 3) {
                  scene.text('You go to the classroom that you and your fellow nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. You get several warm smiles and greetings from your fellow nerds.');
                } else {
                  scene.text('You go to one of the classrooms that the nerds like to gather in and find them all clustered around a table talking and engaged in a variety of pet projects. Some of them seem to be surprised at what you\'re wearing, but they also seem to approve.');
                }
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'outcasts', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[5] = ((s as any).grupvalue[5] ?? 0) - (1);
                  if (((s as any).grupTipe ?? 0) === 3) {
                    scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  } else {
                    scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                  }
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
                    if (((s as any).grupTipe ?? 0) === 3) {
                      scene.text('You enter the classroom that you and your fellow nerds like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                    } else {
                      scene.text('You go to the classrooms that the nerdy students like to hang out in and find them, as usual, all gathered around a table talking and engaging in various hobby projects. A few of them look up as you walk closer. Feofan and Artem are struggling to conceal their disapproving stares at your chosen uniform, while Julia\'s eyes seem to linger on you a fraction longer. However, you can see that she\'s wary of you and doesn\'t approve of your attire, and her gaze isn\'t all that welcoming either.');
                    }
                  } else {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) - (1);
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
            }
          }
        }
      }
    }
  }
  scene.text('Artem, Petka, Julia, Natasha, Zinaida, Evgeny, Feofan, Gerasim and Natalia are sitting around some tables they\'ve moved together.');
  qspCall(s, 'gschool_groups', 'nerds');
  scene.text('The outcasts are hiding away from everyone else, hoping that no one will pick on them today.');
  scene.text('Lesco is reading a book ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('') : ('Fedor is sitting on a window sill staring outside')) + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('') : ('Sonia is sitting at a desk typing on her phone ')) + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5  &&  ((s as any).npc_grupTipe ?? 0)?.['A18'] !== 5  &&  ((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('and Petia is roaming around like he\'s about to approach someone.') : ('and Petia is roaming around like he\'s about to approach someone.')));
  qspCall(s, 'gschool_groups', 'outcasts');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_chats', 'gopniks');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGopnikEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/pavlovsk/school/chat/gopnik.jpg');
  if ((!((s as any).PSchool ?? 0))) {
    scene.text('You are using the school uniform cheat and are not wearing a uniform, therefore no one can react to your uniform.');
  } else {
    if (((s as any).PCloInhibit ?? 0) <= 5) {
      scene.text('<center><b>This uniform is very conservative. Only the nerds would approve of you wearing it.</b></center>');
      if (((s as any).grupTipe ?? 0) === 4) {
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (10);
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-5));
        qspCall(s, 'npc_relationship', 'modify', 'A189', 5);
        scene.text('You head to the stairwell that you and your fellow gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations.');
        scene.text('A few of them stare at you before Dan laughs and Lavrenti speaks up. "What are you wearing?" They seem stunned at your uniform as Anushka chimes in. "Please tell me you just lost some kind of bet?" Several others comment, all expressing displeasure at your choice of uniform. After a few minutes of ridicule, they finally lose interest in you, but you can tell you lost their respect and maybe more today.');
      } else {
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (5);
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-2));
        scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations.');
        scene.text('A few of them stare at you before Radomir speaks up. "Are you lost or something?" Pauline then chimes in, pointing back the way you came. "The nerds are back that way, loser." Several others also comment, all expressing displeasure at your choice of uniform. You feel very unwelcome among them, which makes you uneasy.');
      }
    } else {
      if (((s as any).PCloSkirt ?? 0) > 5  ||  ((s as any).PCloThinness ?? 0) >= 5  ||  ((s as any).PCloBra ?? 0) === 2) {
        if (((s as any).grupTipe ?? 0) === 4) {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (3);
          qspCall(s, 'fame', 'pav', 'sex', 1);
        }
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-1));
        qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
        if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).kotovLoveQW ?? 0)?.['clo_comment'] === 0) {
          ((s as any).kotovLoveQW = (s as any).kotovLoveQW ?? {})['clo_comment'] = 1;
          qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
          qspCall(s, 'mood', 'lower', 'small');
          qspCall(s, 'stat', '');
          scene.text('You head to the stairwell that ' + ((((s as any).grupTipe ?? 0) === 4) ? ('you and your fellow') : ('the')) + ' gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, Dan stands up and whistles. "Hey there, slut. Why don\'t you come over here and suck my dick?" Several of the other gopniks laugh and a few of the guys comment about being next in line. You feel yourself getting very nervous around them dressed the way you are and fear they might actually try something. No one comes down to this end of the school at this time of the day after all without a good reason.');
          scene.text('Vitek stands up and shoves Dan up against the wall. "What did you say about my girl?"');
          scene.text('Dan just swallows while everyone else shuts up. "Hey, I was just joking! We all know she\'s your girl."');
          scene.text('Vitek lets go of him. "Then watch your fucking mouth!" He turns towards you and walks over, grabbing you by the arm and dragging you over to the side. "Just what are you wearing? You\'re dressed like a slut! Don\'t wear this to school again. Now get out of here." He then shoves you away. You glance back, but know better than to tempt fate so you walk away.');
          return;
        } else {
          if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).kotovLoveQW ?? 0)?.['clo_comment'] === 1) {
            qspCall(s, 'npc_relationship', 'modify', 'A9', 'hate');
            qspCall(s, 'mood', 'lower', 'small');
            qspCall(s, 'stat', '');
            scene.text('You head to the stairwell that ' + ((((s as any).grupTipe ?? 0) === 4) ? ('you and your fellow') : ('the')) + ' gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, everyone notices you and when Vitek sees you, he tenses up and angrily walks over to you before grabbing you roughly by the arm and dragging you out of the stairwell. "What did I tell you about coming to school dressed like this? No girl of mine is going to walk around dressed like some slut. Now don\'t come back to school dressed like this again!" He roughly shoves you into the wall and storms back to the other gopniks.');
            return;
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('You head to the stairwell that you and your fellow gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, Dan stands up and whistles. "Hey there, slut. Why don\'t you come over here and suck my dick?" Several of the other gopniks laugh and a few of the guys comment about being next in line. You feel yourself getting very nervous around them dressed the way you are and fear they might actually try something. No one comes down to this end of the school at this time of the day after all without a good reason.');
            } else {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (5);
              qspCall(s, 'fame', 'pav', 'sex', 3);
              scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, Dan stands up and whistles. "Hey there, slut. Why don\'t you come over here and suck my dick?" Several of the other gopniks laugh and a few of the guys comment as well. "Like she came to see you Dan! She obviously came to throw herself at me," Radomir says. You feel yourself getting very nervous around them dressed the way you are and fear they might actually try something. No one comes down to this end of the school at this time of the day after all without a good reason.');
            }
          }
        }
      } else {
        if (((s as any).PCloSkirt ?? 0) < 5) {
          if (((s as any).PCloInhibit ?? 0) >= 30  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
            scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, Dan stands up and whistles. "Hey it looks like there\'s a wannabe slut approaching. Maybe I\'ll ask you to you come over here and suck my dick?" Several of the other gopniks laugh and a few of the guys comment as well. "Hey Dan, it might be your lucky day! I\'m just surprised she\'s not heading my way," Radomir says. You feel yourself getting a little nervous around them dressed the way you are and think that they might actually try something. After all no one other than a gopnik comes down to this end of the school at this time of the day without a good reason so you\'d be on your own if they do.');
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-1));
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
              scene.text('There are some shakes of disapproval and negative comments made about your pink uniform style.');
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
                scene.text('There are some nods of approval and positive comments made about your dark uniform style.');
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
                  scene.text('There are some nods of approval and positive comments made about your rebellious uniform style.');
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
                    scene.text('There are some nods of approval and positive comments made about your rebellious uniform style.');
                  } else {
                    if (((s as any).grupTipe ?? 0) === 4) {
                      scene.text('You head to the stairwell that you and your fellow gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations.');
                    } else {
                      scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations.');
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).PCloInhibit ?? 0) >= 35  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
            if (((s as any).npc_rel ?? 0)?.['A143'] < 50) {
              qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
            }
            if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
              qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
            }
            if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
              qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
            }
            scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. As you approach, Dan stands up and whistles. "Hey it looks like there\'s a wannabe slut approaching. Maybe I\'ll ask you to you come over here and suck my dick?" Several of the other gopniks laugh and a few of the guys comment as well. "Hey Dan, it might be your lucky day! I\'m just surprised she\'s not heading my way," Radomir says. You feel yourself getting a little nervous around them dressed the way you are and think that they might actually try something. After all no one other than a gopnik comes down to this end of the school at this time of the day without a good reason so you\'d be on your own if they do.');
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-1));
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
              scene.text('There are some shakes of disapproval and negative comments made about your pink uniform style.');
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
                scene.text('There are some nods of approval and positive comments made about your dark uniform style.');
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (10);
                  if (((s as any).npc_rel ?? 0)?.['A143'] < 50) {
                    qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
                  }
                  if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                    qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
                  }
                  if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
                    qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
                  }
                  scene.text('There are some nods of approval and positive comments made about your rebellious uniform style.');
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (10);
                    if (((s as any).npc_rel ?? 0)?.['A143'] < 50) {
                      qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
                    }
                    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                      qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
                    }
                    if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
                      qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
                    }
                    scene.text('There are some nods of approval and positive comments made about your rebellious uniform style.');
                  } else {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', 1);
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
                    if (((s as any).npc_rel ?? 0)?.['A143'] < 50) {
                      qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
                    }
                    if (((s as any).npc_rel ?? 0)?.['A144'] < 60) {
                      qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
                    }
                    if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
                      qspCall(s, 'npc_relationship', 'modify', 'A189', 'like');
                    }
                    if (((s as any).grupTipe ?? 0) === 4) {
                      scene.text('You head to the stairwell that you and your fellow gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. A few of them take note of your slightly risky uniform and seem to approve of it.');
                    } else {
                      scene.text('You head to the stairwell that the gopniks like to gather in and find them leaning against the wall or sitting on the stairs engaged in a variety of conversations. A few of them take note of your slightly risky uniform and seem to approve of it.');
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
  scene.text('Vitek, Dan, Vasily, Lena, Lera, Pauline, Alyona, Anushka, Katyusha, Radomir, Lavrenti, Arkadi, Roman, Valentin and Niko are hanging around.');
  qspCall(s, 'gschool_groups', 'gopniks');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterGopniks2(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCooljocks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_chats', 'cooljocks');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCooljockEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/pavlovsk/school/chat/cooljocks.jpg');
  scene.text('When the break finally comes, the girls wander through the hallways of the school, gossiping about pretty much everyone they know while the guys are standing around in small groups, some of them sneaking off to have a smoke behind the school building.');
  if ((!((s as any).PSchool ?? 0))) {
    scene.text('You are using the school uniform cheat and are not wearing a uniform, therefore no one can react to your uniform.');
  } else {
    if (((s as any).PCloInhibit ?? 0) <= 5) {
      if (((s as any).fame ?? 0)?.['pav_sex'] > 0) {
        qspCall(s, 'fame', 'pav', 'sex', (-1));
      }
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (3);
      qspCall(s, 'npc_relationship', 'modify', 'A1', 'loathe');
      qspCall(s, 'npc_relationship', 'modify', 'A8', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A13', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A15', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
      qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
      qspCall(s, 'npc_relationship', 'modify', 'A19', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A22', 'dislike');
      qspCall(s, 'npc_relationship', 'modify', 'A23', 'dislike');
      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
        qspCall(s, 'npc_relationship', 'modify', 'A25', (-1));
      }
      qspCall(s, 'npc_relationship', 'modify', 'A139', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A140', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A147', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A148', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A149', (-1));
      qspCall(s, 'npc_relationship', 'modify', 'A165', (-1));
      if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
        scene.text('As you approach them, you notice some of them giving you a disapproving look as Lizaveta takes your picture and starts texting, obviously sending the picture around. Vicky smirks before whispering something to Vanya and Katja.');
      } else {
        scene.text('As you approach them, you notice some of them giving you a disapproving look as Christina starts to laugh. "What are you wearing? Did mommy dress you? I mean we\'re all glad she did, the more clothes you wear that hide that hideous body the better." Lariska and Lina add their own snide remarks similar to Christina\'s and several other students laugh at her comments as Lizaveta takes your picture and starts texting, obviously sending the picture around. Vicky smirks before whispering something to Vanya and Katja.');
      }
      scene.text('Stasya glances at Bella. "My god, she\'s an absolute social disaster. Really no sense of style at all." She then turns towards Andrey. "If I ever wore something like that, would you still love me?"');
      scene.text('Andrey shakes his head. "Hell no, a man has to have his standards after all." This results in more of them laughing at you.');
      scene.text('Dimka steps forwards. "Maybe you\'re lost? The nerds and outcasts are over that way." He points in the direction of the classroom the nerds and outcasts hang out in. "Perhaps you\'ll find those who might appreciate your sense of… style there." Igor, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + ' Marcus, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Veronika, Lazar and Erast either ignore what\'s going on or join in on mocking your clothes.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 5  ||  ((s as any).PCloThinness ?? 0) >= 5  ||  ((s as any).PCloBra ?? 0) === 2) {
        qspCall(s, 'fame', 'pav', 'sex', 5);
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
        qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (5);
        qspCall(s, 'npc_relationship', 'modify', 'A1', 'hate');
        qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
        qspCall(s, 'npc_relationship', 'modify', 'A22', 'hate');
        if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
          qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
        }
        qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
        scene.text('As you approach, everyone is staring at you. Irina speaks up. "What on earth are you wearing? Forget to change out of your whoring clothes last night?" Several of the others laugh and you can sense the general feeling of agreement from the rest.');
        scene.text('Dimka smirks. "Maybe she messed up the wash and her uniform shrunk, but she was too stupid to notice?"');
        scene.text('Bella steps forward. "Get out of here with your whorish clothes! No one wants you around!" You hear several murmurs of agreement from the others. It looks like even Igor, Katja, Vicky, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Stasya, Albina, Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya appear to agree. They either give you the cold shoulder or refuse to meet your eyes. Feeling very unwelcome, you turn around and leave.');
        qspCall(s, 'stat', '');
        return;
      } else {
        if (((s as any).PCloSkirt ?? 0) < 5) {
          if (((s as any).PCloInhibit ?? 0) >= 30  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (2);
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
            qspCall(s, 'fame', 'pav', 'sex', 2);
            qspCall(s, 'npc_relationship', 'modify', 'A1', 'hate');
            qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
            qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
            qspCall(s, 'npc_relationship', 'modify', 'A22', 'hate');
            if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
              qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
            }
            qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
            qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
            scene.text('As you approach, everyone is staring at you. Irina speaks up. "What on earth are you wearing? Forget to change out of your whoring clothes last night?" Several of the others laugh and you can sense the general feeling of agreement from the rest.');
            scene.text('Dimka smirks. "Maybe she messed up the wash and her uniform shrunk, but she was too stupid to notice?"');
            scene.text('Bella steps forward. "Looks like someone is looking for a good time." You hear several murmurs of agreement from the others. It looks like even Igor, Katja, Vicky, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Stasya, Albina, Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya appear to agree. They either give you the cold shoulder or refuse to meet your eyes. Feeling very unwelcome, you turn around and leave.');
            qspCall(s, 'stat', '');
            return;
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', 1);
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
              if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
                scene.text('Staysia greets you "Hey cutie, looking cool today." Bella looks over and nods in agreement smiling at you.');
                scene.text('Dimka, Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
              } else {
                scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look cute," Stasya says with a smirk.');
                scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
              }
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (2);
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
                scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look dark," Stasya says with a smirk.');
                scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (2);
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', 1);
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
                  scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look tough," Stasya says with a smirk.');
                  scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                  scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (5);
                    qspCall(s, 'npc_relationship', 'modify', 'A1', 'hate');
                    qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
                    qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
                    qspCall(s, 'npc_relationship', 'modify', 'A22', 'hate');
                    if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                      qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
                    }
                    qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
                    qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
                    scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look tough," Stasya says with a smirk.');
                    scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                    scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
                  } else {
                    if (((s as any).PCloQuality ?? 0) >= 4) {
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
                      if (((s as any).npc_rel ?? 0)?.['A4'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A4', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A14'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A15'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A15', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A17'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A17', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A22'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A22', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A23'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
                      }
                      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                        if (((s as any).npc_rel ?? 0)?.['A25'] < 50) {
                          qspCall(s, 'npc_relationship', 'modify', 'A25', 1);
                        }
                      }
                      if (((s as any).npc_rel ?? 0)?.['A139'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A139', 1);
                      }
                      if (((s as any).npc_rel ?? 0)?.['A140'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A140', 1);
                      }
                      scene.text(`As you approach them, several of them give you approving looks. "Looking good ${((s as any).pcs_nickname ?? '')}! Where did you buy that uniform?" Stasya comments.`);
                      scene.text('"Yeah I like it, it looks very nice," Vicky adds. Katja, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta and Bella all comment on how nice your outfit looks while Dimka, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor ') : ('')) + 'and Svyatoslav talk among themselves. However, you do notice Igor seems to be somewhat paying attention, maybe at you in particular. Christina just pretends you don\'t exist while she talks to Lina and Lariska while Veronika is reading something and seems to be entirely unaware of the conversation.');
                    } else {
                      scene.text('Dimka, Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Stasya, Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Lariska, Christina, Lina, Bella, Veronika, Lazar, Erast and Vanya are all gathered around the lockers.');
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).PCloInhibit ?? 0) >= 35  ||  ((s as any).PCloTopCut ?? 0) === 4) {
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
            qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (5);
            qspCall(s, 'fame', 'pav', 'sex', 5);
            qspCall(s, 'npc_relationship', 'modify', 'A1', 'hate');
            qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
            qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
            qspCall(s, 'npc_relationship', 'modify', 'A22', 'hate');
            if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
              qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
            }
            qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
            qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
            scene.text('As you approach, everyone is staring at you. Irina speaks up. "What on earth are you wearing? Forget to change out of your whoring clothes last night?" Several of the others laugh and you can sense the general feeling of agreement from the rest.');
            scene.text('Dimka smirks. "Maybe she messed up the wash and her uniform shrunk, but she was too stupid to notice?"');
            scene.text('Bella steps forward. "Looks like someone is looking for a good time." You hear several murmurs of agreement from the others. It looks like even Igor, Katja, Vicky, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Stasya, Albina, Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya appear to agree. They either give you the cold shoulder or refuse to meet your eyes. Feeling very unwelcome, you turn around and leave.');
            qspCall(s, 'stat', '');
            return;
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
              qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', 1);
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (1);
              scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look cute," Stasya says with a smirk.');
              scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
              scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (2);
                qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
                scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look dark," Stasya says with a smirk.');
                scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (2);
                  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', 1);
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
                  scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look tough," Stasya says with a smirk.');
                  scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                  scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
                } else {
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
                    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-1));
                    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (5);
                    qspCall(s, 'npc_relationship', 'modify', 'A1', 'hate');
                    qspCall(s, 'npc_relationship', 'modify', 'A17', 'dislike');
                    qspCall(s, 'npc_relationship', 'modify', 'A18', 'hate');
                    qspCall(s, 'npc_relationship', 'modify', 'A22', 'hate');
                    if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                      qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
                    }
                    qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
                    qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
                    scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to look tough," Stasya says with a smirk.');
                    scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                    scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
                  } else {
                    if (((s as any).PCloQuality ?? 0) >= 4) {
                      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', 1);
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) + (2);
                      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', 1);
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
                      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                        if (((s as any).npc_rel ?? 0)?.['A25'] < 50) {
                          qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
                        }
                      }
                      scene.text(`As you approach them, several of them give you approving looks. "Looking good ${((s as any).pcs_nickname ?? '')}! Where did you buy that uniform?" Stasya comments.`);
                      scene.text('"Yeah I like it, it looks very nice," Vicky adds. Katja, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta and Bella all comment on how nice your outfit looks while Dimka, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor ') : ('')) + 'and Svyatoslav talk among themselves. However, you do notice Igor seems to be somewhat paying attention, maybe at you in particular. Christina just pretends you don\'t exist while she talks to Lina and Lariska while Veronika is reading something and seems to be entirely unaware of the conversation.');
                    } else {
                      qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', 1, 'male');
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
                      if (((s as any).npc_rel ?? 0)?.['A3'] < 60) {
                        qspCall(s, 'npc_relationship', 'modify', 'A3', 'love');
                      }
                      if (((s as any).npc_rel ?? 0)?.['A5'] < 60) {
                        qspCall(s, 'npc_relationship', 'modify', 'A5', 'love');
                      }
                      if (((s as any).npc_rel ?? 0)?.['A8'] < 60) {
                        qspCall(s, 'npc_relationship', 'modify', 'A8', 'love');
                      }
                      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
                        if (((s as any).npc_rel ?? 0)?.['A25'] < 50) {
                          qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
                        }
                      }
                      if (((s as any).npc_rel ?? 0)?.['A146'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A146', 'like');
                      }
                      if (((s as any).npc_rel ?? 0)?.['A147'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A147', 'like');
                      }
                      if (((s as any).npc_rel ?? 0)?.['A148'] < 50) {
                        qspCall(s, 'npc_relationship', 'modify', 'A148', 'like');
                      }
                      scene.text('As you approach them, several of them give you once over, obviously noticing your uniform. "Someone\'s trying hard to get the boys to look at her," Stasya says with a smirk.');
                      scene.text('Hearing this, Bella gives you a closer look. "It wouldn\'t be so bad if it was a good quality."');
                      scene.text('"Now Bella, you know her family can\'t afford the finer things in life," Dimka adds. If not for the tone of his voice and the smirk, it would almost sound like he was defending you, but it comes across as more of an insult. Igor, Katja, Vicky, Irina, Albina, ' + ((((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5) ? ('Sonia, ') : ('')) + 'Lizaveta, Marcus, Andrey, Mefodiy, Ivan, ' + ((((s as any).npc_grupTipe ?? 0)?.['A5'] !== 5) ? ('Fedor, ') : ('')) + 'Svyatoslav, Christina, Lariska, Lina, Veronika, Lazar, Erast and Vanya just stay out of it.');
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
  scene.text('The cool kids Dimka, Igor, Katja, Vicky, Irina, Bella, Stasya, Lizaveta, Marcus, Andrey and Mefodiy like to hang around in groups.');
  qspCall(s, 'gschool_groups', 'popular');
  scene.text('While the jocks Ivan, Fedor, Svyatoslav, Lariska, Christina, lina, Albina, Veronika, Lazar, Erast and Vanya are spread evenly.');
  qspCall(s, 'gschool_groups', 'jocks');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterNerdEventCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 20) + 0);
  if (((s as any).gschool_gropeday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((((s as any).pcs_hotcat ?? 0) >= 8  &&  ((s as any).temp_rand ?? 0) < 2)  ||  (((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).temp_rand ?? 0) === 0))) {
    (s as any).temp_rand = undefined;
    qspGoto(s, 'gschool_chats', 'nerd_grope_event');
  }
  (s as any).temp_rand = undefined;
  qspCall(s, 'natbel_friend', 'slut_reconcile_school_check', 'nerd_chat');
  scene.build();
}

function enterGopnikEventCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 20) + 0);
  if (((s as any).gschool_gropeday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((((s as any).pcs_hotcat ?? 0) >= 8  &&  ((s as any).temp_rand ?? 0) < 2)  ||  (((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).temp_rand ?? 0) === 0))) {
    (s as any).temp_rand = undefined;
    qspGoto(s, 'gschool_chats', 'gopnik_grope_event');
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterCooljockEventCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 20) + 0);
  if (((s as any).gschool_gropeday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((((s as any).pcs_hotcat ?? 0) >= 8  &&  ((s as any).temp_rand ?? 0) < 2)  ||  (((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).temp_rand ?? 0) === 0))) {
    (s as any).temp_rand = undefined;
    qspGoto(s, 'gschool_chats', 'cooljocks_grope_event');
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterNerdGropeEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).gschool_gropeday = ((s as any).daystart ?? 0);
  if (((s as any).pantyworntype ?? 0) === 'none') {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.img('images/locations/pavlovsk/school/events/buttgrab_nopanties.jpg');
    scene.text('When you enter the hallway heading for the classroom the nerds hang out in, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your naked ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you as you hear several classmates remark on your lack of panties.');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
  } else {
    scene.img('images/locations/pavlovsk/school/events/boysex_tualet.jpg');
    scene.text('When you enter the hallway heading for the classroom the nerds hang out in, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you.');
    qspCall(s, 'arousal', 'flashlite', 1, 'humiliation');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Ignore it', goto: ['gschool_chats', 'nerds'] },
    { label: 'Identify the perpetrator', goto: ['gschool_events1', 'butt_grab'] },
  ]);
  scene.build();
}

function enterGopnikGropeEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).gschool_gropeday = ((s as any).daystart ?? 0);
  if (((s as any).pantyworntype ?? 0) === 'none') {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.img('images/locations/pavlovsk/school/events/buttgrab_nopanties.jpg');
    scene.text('When you enter the hallway heading for the stairwell, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your naked ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you as you hear several classmates remark on your lack of panties.');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
  } else {
    scene.img('images/locations/pavlovsk/school/events/boysex_tualet.jpg');
    scene.text('When you enter the hallway heading for the stairwell, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you.');
    qspCall(s, 'arousal', 'flashlite', 1, 'humiliation');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Ignore it', goto: ['gschool_chats', 'gopniks'] },
    { label: 'Identify the perpetrator', goto: ['gschool_events1', 'butt_grab'] },
  ]);
  scene.build();
}

function enterCooljocksGropeEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).gschool_gropeday = ((s as any).daystart ?? 0);
  if (((s as any).pantyworntype ?? 0) === 'none') {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.img('images/locations/pavlovsk/school/events/buttgrab_nopanties.jpg');
    scene.text('When you enter the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your naked ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you as you hear several classmates remark on your lack of panties.');
    qspCall(s, 'arousal', 'flash', 1, 'humiliation');
  } else {
    scene.img('images/locations/pavlovsk/school/events/boysex_tualet.jpg');
    scene.text('When you enter the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away. By the time you can see who\'s behind you, you find half the guys in your class standing there, all looking in different directions and trying to act inconspicuous, a few of them even having the gall to whistle innocently. You try to tell from their faces which one of them just touched you.');
    qspCall(s, 'arousal', 'flashlite', 1, 'humiliation');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Ignore it', goto: ['gschool_chats', 'cooljocks'] },
    { label: 'Identify the perpetrator', goto: ['gschool_events1', 'butt_grab'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nerds':
      enterNerds(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    case 'gopniks2':
      enterGopniks2(s, scene);
      break;
    case 'cooljocks':
      enterCooljocks(s, scene);
      break;
    case 'nerd_event_check':
      enterNerdEventCheck(s, scene);
      break;
    case 'gopnik_event_check':
      enterGopnikEventCheck(s, scene);
      break;
    case 'cooljock_event_check':
      enterCooljockEventCheck(s, scene);
      break;
    case 'nerd_grope_event':
      enterNerdGropeEvent(s, scene);
      break;
    case 'gopnik_grope_event':
      enterGopnikGropeEvent(s, scene);
      break;
    case 'cooljocks_grope_event':
      enterCooljocksGropeEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_chats: LocationDef = {
  name: 'gschool_chats',
  title: 'This uniform is very conservative. Only the nerds would appr',
  region: 'other',
  enter: enter,
};
