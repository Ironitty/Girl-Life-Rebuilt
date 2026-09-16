import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  scene.build();
}

function enterPoster(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/poster.jpg');
  scene.text('Walking through the hallway, you notice a poster saying that a spot has opened up on the school\'s cheerleading squad and that tryouts are being held after school today. The squad is ruled with an iron fist by Albina and is made up of only the most popular and athletic girls in school.');
  scene.text('However, this hasn\'t stopped some of the nerds from working out and even attending dancing lessons to try out for a spot, despite them spreading rumors about the squad, most of them sexual.');
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('You\'re just the kind of person that the squad is looking for and feel that Albina will heavily approve of you.');
  } else {
    if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.text('You know that Albina would judge you harshly since you\'re not a jock or part of the cool group.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re an outcast. Albina wouldn\'t even look at you, never mind give you a chance. Would it even be worth trying?');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Decide to give it a try', handler: (st: GameState) => {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 1;
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"I\'m one of them. They would be mad to not at least consider me! Those nerds and their rumors are just jealous losers!" you think to yourself as you decide to attend the tryouts and show them that you deserve that spot.');
    } else {
      scene.text('While you\'re not as athletically inclined and they have no respect for you, you decide that you\'re going to try anyway.');
      scene.text('"I\'ll show those stuck up bimbos that I can be as good as any one of them!" you tell yourself as you walk away with a steely confidence.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    { label: 'This doesn\'t interest you', handler: (st: GameState) => {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['reject'] = ((s as any).daystart ?? 0);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = (-1);
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('Even though you\'re capable enough to try out, prancing around on the field to amuse people doesn\'t sound fun to you at all. You shake your head and continue on your way.');
    } else {
      scene.text('"Why would I ever want to join a group of skimpily dressed sluts prancing around a field for the amusement of perverts?" you think to yourself as you walk away in disgust.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
  ]);
  scene.build();
}

function enterPosterRepeat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/poster.jpg');
  scene.text('Walking through the hallway, you notice the poster for the school\'s cheerleading tryouts again. It looks like they still have that open spot and are trying to fill it. You recall how the squad only allows popular or athletic girls to join but that nerds still try out regardless. You also remember some of the sexual rumors you\'ve heard about them.');
  if (((s as any).cheerleadingQW ?? 0)?.['try_count'] > 0) {
    if (((s as any).grupTipe ?? 0) === 3) {
      if (((s as any).cheerleadingQW ?? 0)?.['try_social'] < ((s as any).npc_rel ?? 0)?.['A23'] + ((s as any).grupvalue ?? 0)[((s as any).npc_grupTipe ?? 0)?.['A23']]/2  &&  ((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_cheer ?? 0)) {
      } else {
        if (((s as any).cheerleadingQW ?? 0)?.['try_social'] < ((s as any).npc_rel ?? 0)?.['A23'] + ((s as any).grupvalue ?? 0)[((s as any).npc_grupTipe ?? 0)?.['A23']]/2) {
        } else {
          if (((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_cheer ?? 0)) {
          }
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] === ((s as any).grupTipe ?? 0)) {
          scene.text('Albina and those other snooty bitches turned their noses up at you last time. They\'ll never accept you, no matter how good you are.');
        } else {
          scene.text('They didn\'t accept you last time, so there\'s no chance at all now that you\'re a gopnik.');
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 5) {
          if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] === ((s as any).grupTipe ?? 0)) {
            scene.text('They laughed you right out of the hall last time. They\'ll never accept you, no matter how good you are, so there\'s probably not much point in trying.');
          } else {
            scene.text('They didn\'t accept you last time, so there\'s no chance at all now that you\'re an outcast. Why even bother trying again?');
          }
        } else {
          if (((s as any).cheerleadingQW ?? 0)?.['grupTipe'] !== ((s as any).grupTipe ?? 0)) {
            scene.text('Now that you\'re part of their clique, they\'re bound to treat you better than last time. It\'s worth giving it another shot.');
          } else {
            scene.text('"I\'m sure Albina just had a bad day last time. She wouldn\'t treat me like that again, would she?" you think to yourself as you consider attending the tryouts one more time.');
          }
        }
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.text('You know that Albina would judge you harshly since you\'re not a jock or part of the cool group.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re an outcast. Albina wouldn\'t even look at you, never mind give you a chance. Would it even be worth trying?');
      }
    }
  }
  // TODO-QSP: act iif(cheerleadingQW['try_count'] > 0, 'Decide to try one more time', 'Decide to give it a try thi...
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 1;
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('"I\'m one of them. They would be mad to not at least consider me! Those nerds and their rumors are just jealous losers!" you think to yourself as you decide to attend the tryouts and show them that you deserve that spot.');
  } else {
    scene.text('While you\'re not as athletically inclined and they have no respect for you, you decide that you\'re going to try anyway.');
    scene.text('"I\'ll show these stuck up bimbos that I can be as good as any one of them!" you tell yourself, as you walk away with a steely confidence.');
  }
  qspCall(s, 'gschool_events', 'leave_break_events');
  // TODO-QSP: end
  // TODO-QSP: act iif(cheerleadingQW['try_count'] > 0, 'It''s not worth the hassle ', 'Ignore the poster ') + $fun...
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = (-2);
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('Even though you\'re capable enough to try out, prancing around on the field to amuse people doesn\'t sound fun to you at all. You shake your head and continue on your way.');
  } else {
    scene.text('"Why would I ever want to join a group of skimpily dressed sluts prancing around a field for the amusement of perverts?" you think to yourself as you walk away in disgust.');
  }
  qspCall(s, 'gschool_events', 'leave_break_events');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterTryouts(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['try_count'] = ((s as any).cheerleadingQW['try_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/tryouts.jpg');
  if (((s as any).grupTipe ?? 0) === 5) {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = (-1);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['reject'] = ((s as any).daystart ?? 0);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['grupTipe'] = ((s as any).grupTipe ?? 0);
    scene.text('Albina and the other girls grow silent and just stare at you as you enter. You feel very awkward and self-conscious as Albina walks up to you with a puzzled glare. "What are <i>you</i> doing here?"');
    // TODO-QSP: dynamic text: Christina laughs as she walks up to you. "Oh my god, does this ' + iif(pcs_hotca...
    scene.text('Christina laughs as she walks up to you. "Oh my god, does this \' + iif(pcs_hotcat < 6, \'hidious hag\', \'social reject\') + \' actually think she can become a cheerleader? Everyone would be too busy laughing to focus on the game!"');
    scene.text('"It\'s best if you just leave. Nobody wants you hanging around making things awkward," Albina says.');
    scene.text('"You better hope that I\'m still too busy laughing at your dumb ass that I forget to punish you for embarrassing me," Christina adds.');
    scene.text('It\'s clear that you\'re not wanted here and all the girls present are pointing and laughing at you as Albina just shakes her head dismissively. Tears well up in your eyes as you run out the door, the vicious sound of mocking laughter following you down the corridor.');
    scene.actions([
      { label: 'Flee', goto: ['gschool_grounds', 'main'] },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = (-1);
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['reject'] = ((s as any).daystart ?? 0);
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['grupTipe'] = ((s as any).grupTipe ?? 0);
      scene.text('The other girls grow silent and just stare at you as you enter and Albina walks up to you with a cold glare on her face. "You\'re mistaken if you think I\'m even going to give someone like <i>you</i> a chance. Now fuck off," she says while pointing to the door.');
      // TODO-QSP: dynamic text: Christina laughs as she walks up to you. "Oh my god, does this specimen actually...
      scene.text('Christina laughs as she walks up to you. "Oh my god, does this specimen actually think she can become a cheerleader? Isn\'t there some \'+iif(gopnik_slut = 1, \'dirty gopnik cock waiting for you somewhere to suck it?\', \'drugs waiting somewhere for you to snort them?\')+\'" she asks mockingly, which causes Bella to let out a loud laugh.');
      scene.text('You clench your fist. You want to beat the smug smile off her face, but there\'s nothing you can do except leave, the sounds of mocking laughter following you down the corridor.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: After school, you head to the PE hall to try out for the cheerleading team'+iif(...
      scene.text('After school, you head to the PE hall to try out for the cheerleading team\'+iif(cheerleadingQW[\'try_count\'] > 1, \' again\', \')+\', taking your place amongst the group of hopeful girls already here. Albina is standing with Vicky, Christina, Lina, Lariska and Bella, as well as a few other girls from other classes who you don\'t recognise that round out the squad. They are all inspecting you and talking amongst themselves.');
      scene.text('Once everyone is gathered, Albina speaks up. "Before we begin, you should all know that training is every Tuesday and Thursday and game days are every second Friday. Anyone who can\'t commit to the squad on those days should leave now and not waste our time."');
      scene.text('A few girls leave as Albina starts showing you part of the cheerleading routine as an example and asks everyone to copy it.');
      scene.actions([
        { label: 'Try to follow Albina\'s example', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier2', 30, 'agil', 'vital', 'cheer', 'cheer', 'danc');
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['try_physical'] = ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_cheer ?? 0);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['try_social'] = ((s as any).npc_rel ?? 0)?.['A23'];
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['try_social'] = ((s as any).cheerleadingQW['try_social'] ?? 0) + (100);
    } else {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['try_social'] = ((s as any).cheerleadingQW['try_social'] ?? 0) + (((s as any).grupvalue ?? 0)[(((s as any).npc_grupTipe ?? {})?.['A23'] ?? 0)]/2);
    }
    if (((s as any).cheerleadingQW ?? 0)?.['try_physical'] + ((s as any).cheerleadingQW ?? 0)?.['try_social'] >= 250) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/lineup.jpg');
      if (((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).cheerleadingQW ?? 0)?.['try_social']) {
        scene.text('While you\'re a bit clumsy during your turn, you\'re able to somewhat match the example set and Albina and a few of the other girls seem impressed while Christina just rolls her eyes and scoffs at you.');
      } else {
        scene.text('While they clearly judge you more harshly than some of the other girls, you\'re able to impress Albina and some of the other girls with your physical abilities while Christina just rolls her eyes and scoffs at you.');
      }
      scene.text('After you finish, they line the group up and start moving along, rejecting those who weren\'t good enough until only you and one other girl remain.');
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 3;
        qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_practice');
        qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_games');
        // TODO-QSP: dynamic text: "You, <<$pcs_nickname>>, you actually impressed us'+iif(cheerleadingQW['try_coun...
        scene.text(`"You, ${((s as any).pcs_nickname || '')}, you actually impressed us'+iif(cheerleadingQW['try_count'] > 1, ' this time', ')+'. '+iif(cheerleadingQW['try_physical'] < cheerleadingQW['try_social'], 'Sure, you were a bumbling idiot in your execution, but we have a good feeling about you.', 'I didn't think you had it in you, but those moves really were something!')+' I expect to see you on time at our next practice session!"`);
        scene.text('You barely have time to react before Albina and the other girls walk away. You ignore the jealous stares you receive from the others and get ready to leave.');
      } else {
        ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 2;
        qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_practice');
        // TODO-QSP: dynamic text: Albina and the other girls whisper among themselves before she turns and talks t...
        scene.text(`Albina and the other girls whisper among themselves before she turns and talks to you. "I like your moves ${((s as any).pcs_nickname || '')}, but I can't let someone like you on my squad. I've got a reputation to uphold." She looks back at the others and they all give her wide smiles and giggles before she turns back to you. "However, we are in need of someone who can cover for one of us on <i>very rare</i> occasions, so how does being our backup sound?"`);
        scene.text('Being asked to be the backup is further than anyone like you has ever made it! You nod your head and try not to look too excited as Albina welcomes the other girl to the team.');
        scene.text('There are a lot of puzzled stares and whispers directed at you as everyone prepares to leave. As you\'re about to leave, Albina walks up to you with a serious look on her face.');
        // TODO-QSP: dynamic text: "I'm doing this against my better judgement <<$pcs_nickname>>, so don't make me ...
        scene.text(`"I'm doing this against my better judgement ${((s as any).pcs_nickname || '')}, so don't make me regret it. Give me <i>one</i> good reason to give you the boot and you'll be out on your ass in seconds!" she warns with a hard poke to your chest.`);
        scene.text('You swallow, feeling somewhat intimidated by her warning.');
      }
    } else {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = ((s as any).cheerleadingQW['quest_stage'] ?? 0) - (1);
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['reject'] = ((s as any).daystart ?? 0);
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['grupTipe'] = ((s as any).grupTipe ?? 0);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/lineup.jpg');
      if (((s as any).cheerleadingQW ?? 0)?.['try_physical'] < ((s as any).cheerleadingQW ?? 0)?.['try_social']) {
        // TODO-QSP: dynamic text: You '+iif(cheerleadingQW['try_count'] > 1, 'still', 'just')+' don't have the cap...
        scene.text('You \'+iif(cheerleadingQW[\'try_count\'] > 1, \'still\', \'just\')+\' don\'t have the capability to match Albina\'s high standards. You mess up almost every move and you can hear the mocking laughter of the girls around you.');
      } else {
        // TODO-QSP: dynamic text: You have the feeling you're doing at least as good as some of the others, maybe ...
        scene.text('You have the feeling you\'re doing at least as good as some of the others, maybe even better, but the majority of the girls, especially Christina, constantly point in your direction and laugh at the tiniest of your mistakes\'+iif(cheerleadingQW[\'try_count\'] > 1, \', just like last time\', \')+\'. Being under such scrutiny causes you to stumble even more, provoking yet more mocking. Albina just crosses her arms and shakes her head in disappointment.');
      }
      scene.text('Embarrassed, you sheepishly line up with the group as Albina and the girls start rejecting those who weren\'t good enough, some of the cheerleaders happily mocking and laughing at them.');
      // TODO-QSP: dynamic text: When they get to you, the girls behind Albina can't control themselves and burst...
      scene.text(`When they get to you, the girls behind Albina can't control themselves and burst out laughing. Albina again shakes her head in disappointment as she speaks to you. "'+iif(cheerleadingQW['try_count'] > 1, 'I didn't think you could do any worse than you did last time ${((s as any).pcs_nickname || '')}, but… wow.', 'I don't think I've ever seen a more horrific attempt as that!')+' Why are you even here, ${((s as any).pcs_nickname || '')}? These are tryouts for cheerleading, not a fucking circus!"`);
      // TODO-QSP: 'Feeling dejected, you watch her continue down the line and select the girl she wants on the team. '...
    }
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterschoolPractice(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/gymdoors.jpg');
  // TODO-QSP: dynamic text: You're standing next to the doors leading to the PE hall. You have cheerleading ...
  scene.text('You\'re standing next to the doors leading to the PE hall. You have cheerleading practice at 14:15 and should go and change if you don\'t want to be late.');
  if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 0) {
    scene.text('You recall how angry Albina was at that Karine girl who skipped practice. It probably wouldn\'t be a good idea to do it yourself.');
  } else {
    if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 1  ||  ((s as any).cheerleadingQW ?? 0)?.['skipped'] === 2) {
      scene.text('You remember how angry Albina was last time you were missing. It wouldn\'t be a good idea to do it again.');
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['skipped'] >= 3) {
        scene.text('You remember Albina\'s warning about kicking you off the squad if you\'re absent again.');
      }
    }
  }
  qspCall(s, 'willpower', 'misc', 'self', ((((s as any).cheerleadingQW ?? 0)?.['skipped'] > 0) ? ('hard') : ('')));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Skip practice', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Skip practice', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped'] = ((s as any).cheerleadingQW['skipped'] ?? 0) + (1);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped_ev'] = 1;
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Attend cheerleading practice', goto: ['gschool_cheerleading', 'practice'] },
    { label: 'Quit the cheerleading squad', goto: ['gschool_cheerleading', 'quit'] },
  ]);
  scene.build();
}

function enterAfterschoolGame(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['day'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/school/grounds/field.jpg');
  // TODO-QSP: dynamic text: There is a football game at '+func('time', 'get_time_string', 14, 15)+' on the s...
  scene.text('There is a football game at 14:15 on the sports field behind the school today.');
  if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 0) {
    scene.text('You recall how angry Albina was at that Karine girl, and that was just for skipping practice. It probably wouldn\'t be a good idea to skip a game.');
  } else {
    if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 1  ||  ((s as any).cheerleadingQW ?? 0)?.['skipped'] === 2) {
      scene.text('You remember how angry Albina was last time you were missing. It wouldn\'t be a good idea to do it again.');
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['skipped'] >= 3) {
        scene.text('You remember Albina\'s warning about kicking you out of the squad if you\'re absent again.');
      }
    }
  }
  qspCall(s, 'willpower', 'misc', 'self', ((((s as any).cheerleadingQW ?? 0)?.['skipped'] > 0) ? ('hard') : ('')));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Skip the game', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Skip the game', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped'] = ((s as any).cheerleadingQW['skipped'] ?? 0) + (1);
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped_g_ev'] = 1;
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go cheer for your school', goto: ['gschool_cheerleading', 'game'] },
    { label: 'Quit the cheerleading squad', goto: ['gschool_cheerleading', 'quit'] },
  ]);
  scene.build();
}

function enterPractice(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if ((qspFunc(s, 'body_din', 'pregnancyVisibility') === 1)  ||  (((s as any).grupTipe ?? 0) === 5)) {
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      qspGoto(s, 'gschool_cheerleading', 'cheerleaders_react');
    }
    if (((s as any).grupTipe ?? 0) === 5) {
      qspGoto(s, 'gschool_cheerleading', 'cheerleader_end');
    }
  } else {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['practice_count'] = ((s as any).cheerleadingQW['practice_count'] ?? 0) + (1);
    qspCall(s, 'outfit', 'backup', 'cheer');
    qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 161, 'borrowed');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/changing.jpg');
    if (((s as any).cheerleadingQW ?? 0)?.['practice_count'] === 1) {
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
        // TODO-QSP: dynamic text: Albina is impatiently waiting for you in the locker room as you arrive. "Hurry u...
        scene.text(`Albina is impatiently waiting for you in the locker room as you arrive. "Hurry up ${((s as any).pcs_nickname || '')}, I don't have all day! Get changed and get out there already!" She pushes past you and out the door.`);
        scene.text('You can sense the confusion and contempt the other girls feel towards you as you undress. You know you don\'t belong here, but you want to prove yourself to them. You quickly change into your regular sports clothes and head out.');
      } else {
        scene.text('As you head towards the locker room, you can\'t help but feel excited, wanting to prove yourself and show Albina she made the right choice.');
        scene.text('When you enter the locker room, the rest of the girls are already there and are in various states of undress. You notice a fresh uniform sitting on the bench next to what you presume is Albina\'s, having noticed her bag on the floor nearby. Albina isn\'t here though and you look around for her.');
        // TODO-QSP: dynamic text: "She's just gone to the bathroom <<$pcs_nickname>>. She'll be back soon." You tu...
        scene.text(`"She's just gone to the bathroom ${((s as any).pcs_nickname || '')}. She'll be back soon." You turn to the voice and see Vicky smiling at you. "Just start getting ready."`);
        scene.text('You return a smile and find a spot next to Albina\'s belongings, carefully inspecting your new outfit as you start undressing.');
        // TODO-QSP: dynamic text: Christina walks up and interrupts you. "Don't get ahead of yourself <<$pcs_nickn...
        scene.text(`Christina walks up and interrupts you. "Don't get ahead of yourself ${((s as any).pcs_nickname || '')}. You have to earn that outfit, just like the rest of us had to do." You give her a confused look as Lina and Lariska snicker behind her. The other girls seemingly can't hear her and continue to change. "What? Albina didn't tell you? You earn the right to wear it once Albina says you've earned the right," she says with a mocking smile while circling her palm around her groin.`);
        scene.text('"And what is it she has to do exactly?"');
        scene.text('Christina jumps on the spot. Everyone looks over to see a rather annoyed-looking Albina, her arms crossed, staring daggers at Christina.');
        scene.text('"Well? Go on, tell me," she asks again.');
        // TODO-QSP: dynamic text: "Oh hey Albina! I was just welcoming <<$pcs_nickname>>!" she replies.
        scene.text(`"Oh hey Albina! I was just welcoming ${((s as any).pcs_nickname || '')}!" she replies.`);
        scene.text('Albina scoffs. "I know exactly what you were doing and you won\'t get away with it again. Now get dressed, we\'ve got a routine to practice and we\'ve already wasted enough time!"');
        // TODO-QSP: dynamic text: Everyone scurries to finish getting ready as Albina walks up to you and smiles. ...
        scene.text(`Everyone scurries to finish getting ready as Albina walks up to you and smiles. "Hey ${((s as any).pcs_nickname || '')}. Don't mind her, she just thinks she's the boss when I'm not around. Now get dressed and let's go already!" she says while handing you the outfit. You quickly slide it on and appreciate how smooth and comfortable it feels before you catch up with the others and head off.`);
      }
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
        if ((((s as any).cheerleadingQW ?? 0)?.['game_count'] > 6  &&  (Math.floor(Math.random() * 4) + 0) === 0)  ||  ((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: dynamic text: As you enter the hall, Albina walks up to you, looking strangely cheerful. "Hey ...
          scene.text(`As you enter the hall, Albina walks up to you, looking strangely cheerful. "Hey ${((s as any).pcs_nickname || '')}, I've been talking with the girls and, since you've proven yourself capable, we're <i>mostly</i> in agreement that you deserve a spot on the squad. I'll sort you out with a uniform in due time, but you're part of the squad now. So… welcome, I guess?" she says before walking away to prepare the rest of the squad for practice. You contain your excitement as you take your place among the other girls, overjoyed that you actually made it onto the squad!`);
          ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 3;
          qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_games');
        } else {
          scene.text('The squad is already out practicing when you arrive at the locker room and change. You don\'t have the privilege of owning a uniform and instead train in your sports clothing.');
        }
      } else {
        scene.text('Heading into the locker room, you see Albina and the rest of the squad have already arrived and are in various states of changing into their outfits while chatting to each other. You head to your locker and strip down. You pull your uniform out and start getting dressed. You just finished tying your shoes when Albina gives the order to head out into the PE hall.');
      }
    }
    scene.actions([
      { label: 'Follow the others into the hall', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier2', 90, 'agil', 'vital', 'cheer', 'cheer', 'danc');
    qspCall(s, 'archetypes', 'gain', 'preppy', 'tiny', 'Cheerleading practice');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/practice.mp4');
    if (((s as any).cheerleadingQW ?? 0)?.['practice_count'] === 1) {
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: You head into the hall and Albina comes over to begrudgingly greet you. "I'm tak...
        scene.text(`You head into the hall and Albina comes over to begrudgingly greet you. "I'm taking a risk trusting you here ${((s as any).pcs_nickname || '')}, so don't make me regret it. Just get in the corner and try to follow along."`);
        scene.text('She heads back to the girls and resumes what she was doing. You closely follow the movements of each girl and attempt to copy them with varying degrees of success. Albina watches you with a mixed look of amusement and intrigue on her face.');
        // TODO-QSP: dynamic text: Albina ends the training session and lets the girls leave before walking over to...
        scene.text(`Albina ends the training session and lets the girls leave before walking over to you. "Not bad ${((s as any).pcs_nickname || '')}, not bad. You've a long way to go before I even let you near my squad, so prove that I can rely on you in the future."`);
        scene.text('You actually got praised by the best dancer in school! You contain your excitement as Albina leaves.');
      } else {
        scene.text('Albina heads over to you and cheerfully greets you. "Don\'t you just look delightful!" She then explains what your role in the squad will be and leads you over to the group.');
        scene.text('"It\'s all really simple. Just follow our lead and you\'ll be fine. From the top girls!"');
        // TODO-QSP: dynamic text: You take your place and Albina begins. You practice tumbling and flips and manag...
        scene.text(`You take your place and Albina begins. You practice tumbling and flips and manage not only to impress Albina but the rest of the squad too. "Not bad for your first time, ${((s as any).pcs_nickname || '')}. I expect great things from you."`);
      }
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
        scene.text('You head into the hall and into your corner. You watch the girls closely and copy their moves. You feel like you\'re getting better with each training session and Albina seems to think so too, even giving you a smile a few times as she observes you.');
        if ((!(Math.floor(Math.random() * 10) + 0))) {
          if (((s as any).cheerleadingQW ?? 0)?.['practice_count'] > 4  &&  ((s as any).week ?? 0) === 4  &&  (((s as any).daystart ?? 0) - (((s as any).daystart ?? 0) % 7)) % 2 === 1) {
            ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['backup_game'] = 1;
            qspCall(s, 'calendar', 'add', 'cheerleading_game_tomorrow');
            // TODO-QSP: dynamic text: You finish practicing the last of your moves as Albina heads your way. "<<$pcs_n...
            scene.text(`You finish practicing the last of your moves as Albina heads your way. "${((s as any).pcs_nickname || '')}, one of the girls has just gone and busted her ankle. I need you to stand in for her at the game tomorrow. Don't get ahead of yourself, you're only serving your purpose. So be here tomorrow after school."`);
            scene.text('Albina walks away, but your excited eagerness is suddenly shattered when she turns and glares directly at you. "Don\'t make me regret choosing you!"');
            scene.text('You\'re left with a slight feeling of dread within you.');
          }
        } else {
          if ((!(Math.floor(Math.random() * 9) + 0))) {
            if (((s as any).cheerleadingQW ?? 0)?.['practice_count'] > 4  &&  ((s as any).week ?? 0) === 4  &&  (((s as any).daystart ?? 0) - (((s as any).daystart ?? 0) % 7)) % 2 === 1) {
              ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['backup_game'] = 1;
              qspCall(s, 'calendar', 'add', 'cheerleading_game_tomorrow');
              // TODO-QSP: dynamic text: As you finish practicing on your own, Vicky cheerfully bounces up and greets you...
              scene.text(`As you finish practicing on your own, Vicky cheerfully bounces up and greets you. "Hey ${((s as any).pcs_nickname || '')}, today is your lucky day! You get to replace me tomorrow!"`);
              scene.text('You stare at her and she quickly reassures you. "Don\'t worry, this isn\'t a prank. I have… other things that need my attention tomorrow and Albina is fine with you covering for me. It\'s your job after all!" she giggles.');
              scene.text('You laugh and agree. She smiles and thanks you before whispering in your ear. "I\'m going out with Vanya tomorrow, but Albina wouldn\'t like that, so I told her I had to go to the doctor."');
              scene.text('She then taps her nose at you, silently asking you to keep her secret before she cheerfully bounces off to get changed.');
            }
          } else {
            if ((!(Math.floor(Math.random() * 8) + 0))) {
              if (((s as any).cheerleadingQW ?? 0)?.['backup_game'] !== 1) {
                scene.text('As you\'re practicing, Lariska goes over on her ankle and falls to the ground. Albina and Vicky go to check on her and she meekly insists that she\'s fine, but Albina disagrees and has her stay on the ground as Vicky checks her over.');
                scene.text('Christina then walks over and chimes in, a worried-looking Lina silently standing behind her. "She said she\'s fine, so stop fussing over her and get back to bossing us around!"');
                scene.text('Albina narrows her gaze. "Does she look fine to you? No, she\'s going to sit this one out and we\'ll see how \'fine\' she is later!"');
                scene.text('In response, Lariska tries to get back on her feet, but whimpers slightly in pain.');
                scene.text('"Stop faking it and get off your lazy ass!" Christina shouts.');
                scene.text('Lariska looks at her meekly and tries to stand again, but Vicky has her sit back down.');
                scene.text('"She isn\'t in any shape to continue," Albina says. "Vicky, take her over there to sit out and rest."');
                scene.text('Christina doesn\'t seem happy, but doesn\'t stop Vicky from carrying Lariska over to the benches to rest her injured foot as Albina beckons you over and reluctantly has you take her place for the remainder of the practice session.');
                scene.text('When you finish, Lariska seems well enough to walk to the changing room with a slight limp, which annoys Christina and causes her to again accuse her of faking it.');
              }
            } else {
              if ((!(Math.floor(Math.random() * 7) + 0))) {
                scene.text('As you\'re practicing in the corner, you notice a boy with a phone run up to one of the girls and pull her skirt up to take a panty shot, he and his group of friends fleeing before anyone can stop them.');
                scene.text('After fixing her clothing, the girl assures everyone she\'s fine and the session continues.');
              } else {
                if ((!(Math.floor(Math.random() * 6) + 0))) {
                  scene.text('As you practice, you suddenly notice a group of boys watching you and the other girls practice. Petia is among them - you\'re certain that you can smell him from where you stand. He has a perverted smirk on his face and licks his lips as he watches Albina bend over.');
                  scene.text('One of the girls notices them lurking and stares them down, causing all but Petia to flee. He crosses his arms, acting like he isn\'t scared, but quickly waddles away when Albina straightens up and turns to see him staring at her, causing the girls to laugh at him.');
                  scene.text('After almost throwing up at the thought of him checking her out, she has the group focus and get back on track.');
                } else {
                  if ((!(Math.floor(Math.random() * 5) + 0))) {
                    scene.text('As you practice, you notice a guy sitting at the back of the hall watching the group. He\'s too old to be a student, but Bella flashes him a smile and makes a point of wiggling her ass at him during one of her moves.');
                    scene.text('You\'re curious as to how they know each other, but continue with what you were doing.');
                  } else {
                    if ((!(Math.floor(Math.random() * 4) + 0))) {
                      scene.text('As you practice, Lazar comes into the hall. He watches you and the others for a while before he decides to do some teasing of his own.');
                      scene.text('He takes his shirt off and flexes a bit before he starts jogging laps of the hall, flexing and smiling at you and the others each time he passes you. The girls get a bit flustered and distracted - even Albina bites her lip and smiles at him a few times.');
                      scene.text('You spend the rest of the session distracted by Lazar\'s antics, but nobody is complaining about said distraction and a few girls are struggling to hide their arousal.');
                    } else {
                      if ((!(Math.floor(Math.random() * 3) + 0))) {
                        scene.text('As Lina practices a move that involves holding another girl, Christina decides to amuse herself and pulls Lina\'s skirt up, causing her to squeal as her panties are exposed to everyone. She\'s blushing heavily, forced to endure the humiliation since she can\'t let go of the girl.');
                        scene.text('Christina eventually lets her skirt go and Albina chews her out for being so reckless and childish while praising Lina for not losing her focus. Christina just laughs, calling Albina a bossy spoilsport and mocking her by comparing her to a yapping little dog, all while giving Lina a mocking smirk.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).pcs_cheer ?? 0) < 20) {
          scene.text('Once in the hall, you take your place as Albina explains what you\'ll be practicing and has you begin. You try your best to follow the unfamiliar routine, Albina keeping a watchful eye on you the entire time.');
          // TODO-QSP: dynamic text: "Can you at least try to put some effort into not looking like an idiot, <<$pcs_...
          scene.text(`"Can you at least try to put some effort into not looking like an idiot, ${((s as any).pcs_nickname || '')}?"`);
        } else {
          if (((s as any).pcs_cheer ?? 0) < 30) {
            qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
            scene.text('Once in the hall, you take your place as Albina explains what you\'ll be practicing and has you begin. You\'re starting to learn your moves and can perform them with less clumsiness, but Albina is still critical.');
            // TODO-QSP: dynamic text: "Raise your head and lift your feet, <<$pcs_nickname>>! At least look like you'r...
            scene.text(`"Raise your head and lift your feet, ${((s as any).pcs_nickname || '')}! At least look like you're happy to be here!"`);
          } else {
            if (((s as any).pcs_cheer ?? 0) < 40) {
              qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
              scene.text('Once in the hall, you take your place as Albina explains what you\'ll be practicing and has you begin. Your training is starting to take hold and you\'re able to perform almost to Albina\'s exacting standards.');
              // TODO-QSP: dynamic text: "You're actually starting to impress me, <<$pcs_nickname>>. Keep it up!"
              scene.text(`"You're actually starting to impress me, ${((s as any).pcs_nickname || '')}. Keep it up!"`);
            } else {
              if (((s as any).pcs_cheer ?? 0) < 50) {
                qspCall(s, 'npc_relationship', 'modify', 'A23', 'love');
                scene.text('Once in the hall, you take your place as Albina explains what you\'ll be practicing and has you begin. You have performed the routines dozens of times now and can execute your moves flawlessly to Albina\'s satisfaction.');
                // TODO-QSP: dynamic text: "Perfect <<$pcs_nickname>>! Now that's how it's done!"
                scene.text(`"Perfect ${((s as any).pcs_nickname || '')}! Now that's how it's done!"`);
              } else {
                qspCall(s, 'npc_relationship', 'modify', 'A23', 'love');
                scene.text('Once in the hall, you take your place as Albina explains what you\'ll be practicing and has you begin. Your skill having drastically improved, Albina now considers you one of her best girls and uses you as an example to the others.');
              }
            }
          }
        }
        if ((!(Math.floor(Math.random() * 10) + 0))) {
          scene.text('As you\'re practicing, Lariska goes over on her ankle and falls to the ground. Albina and Vicky go to check on her and she meekly insists that she is fine, but Albina disagrees and has her stay on the ground as Vicky checks her over.');
          scene.text('Christina then walks over and chimes in, a worried looking Lina silently standing behind her. "She said she\'s fine, so stop fussing over and get back to bossing us around!"');
          scene.text('Albina narrows her gaze. "Does she look fine to you? No, she\'s going to sit this one out and we\'ll see how \'fine\' she is later!"');
          scene.text('In response, Lariska tries to get back on her feet, but whimpers slightly in pain.');
          scene.text('"Stop faking it and get off your lazy ass!" Christina shouts. Lariska looks at her meekly and tries to stand again, but Vicky has her sit back down.');
          // TODO-QSP: dynamic text: "She isn't in any shape to continue," Albina says. "<<$pcs_nickname>>, help Vick...
          scene.text(`"She isn't in any shape to continue," Albina says. "${((s as any).pcs_nickname || '')}, help Vicky take her over there to sit out and rest. We'll have to make do without her for the rest of the session."`);
          scene.text('Christina doesn\'t seem happy, but doesn\'t stop you and Vicky from carrying Lariska over to the benches to rest her injured foot. Albina then has the group finish the practice session without her.');
          scene.text('When you finish, Lariska seems well enough to walk to the changing room with a slight limp, which annoys Christina and causes her to again accuse her of faking it.');
        } else {
          if ((!(Math.floor(Math.random() * 9) + 0))) {
            scene.text('As you practice, you notice a group of boys watching you and whispering among themselves, one of them holding a phone in his hand. You ignore them and continue practicing when, in the corner of your eye, you see the boy with the phone run up to you.');
            scene.text('Before you can react, he pulls your skirt up and holds the phone underneath you. You hear the click of the camera before he lets go and the group flees before anyone can stop them.');
            scene.text('You fix your clothing and assure everyone that you\'re fine before the session continues.');
          } else {
            if ((!(Math.floor(Math.random() * 8) + 0))) {
              scene.text('As you practice, you notice a group of boys watching you and whispering among themselves, one of them holding a phone in his hand. You ignore them and continue practicing when, in the corner of your eye, you see the boy with the phone run up to one of the girls.');
              scene.text('Before she can react, he pulls her skirt up and holds the phone underneath her. You hear the click of the camera before he lets go and the group flees before anyone can stop them.');
              scene.text('She fixes her clothing and assures everyone that she\'s fine before the session continues.');
            } else {
              if ((!(Math.floor(Math.random() * 7) + 0))) {
                scene.text('As you practice, you suddenly notice a group of boys watching you and the other girls practice. Petia is among them - you\'re certain that you can smell him from where you stand. He has a perverted smirk on his face and licks his lips as he watches Albina bend over.');
                scene.text('One of the girls notices them lurking and stares them down, causing all but Petia to flee. He crosses his arms, acting like he isn\'t scared, but quickly waddles away when Albina straightens up and turns to see him staring at her, causing the girls to laugh at him.');
                scene.text('After almost throwing up at the thought of him checking her out, she has the group focus and get back on track.');
              } else {
                if ((!(Math.floor(Math.random() * 6) + 0))) {
                  scene.text('As you practice, you notice a guy sitting at the back of the hall watching the group. He\'s too old to be a student, but Bella flashes him a smile and makes a point of wiggling her ass at him during one of her moves.');
                  scene.text('You\'re curious as to how they know each other, but continue with what you were doing.');
                } else {
                  if ((!(Math.floor(Math.random() * 5) + 0))) {
                    scene.text('As you practice, Lazar comes into the hall. He watches you and the others for a while before he decides to do some teasing of his own.');
                    scene.text('He takes his shirt off and flexes a bit before he starts jogging laps of the hall, flexing and smiling at you and the others each time he passes you. The girls get a bit flustered and distracted - even Albina bites her lip and smiles at him a few times.');
                    scene.text('You spend the rest of the session distracted by Lazar\'s antics, but nobody is complaining about said distraction and a few girls are struggling to hide their arousal.');
                  } else {
                    if ((!(Math.floor(Math.random() * 4) + 0))) {
                      scene.text('As Lina practices a move that involves holding another girl, Christina decides to amuse herself and pulls Lina\'s skirt up, causing her to squeal as her panties are exposed to everyone. She\'s blushing heavily, forced to endure the humiliation since she can\'t let go of the girl.');
                      scene.text('Christina eventually lets her skirt go and Albina chews her out for being so reckless and childish while praising Lina for not losing her focus. Christina just laughs and calls her a bossy spoilsport while giving a mocking smirk to Lina.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go take a shower', goto: ['gschool_cheerleading', 'shower'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['game_count'] = ((s as any).cheerleadingQW['game_count'] ?? 0) + (1);
  qspCall(s, 'outfit', 'backup', 'cheer');
  qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 161, 'borrowed');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/changing.jpg');
  if (((s as any).pregtime ?? 0) >= 90) {
    qspGoto(s, 'gschool_cheerleading', 'cheerleaders_react');
  } else {
    scene.text('Heading into the locker room, you see Albina and the rest of the squad have already arrived and are in various states of changing into their uniforms while chatting to each other.');
    // TODO-QSP: dynamic text: You head to your locker and strip down before pulling your uniform out and getti...
    scene.text('You head to your locker and strip down before pulling your uniform out and getting dressed.\'+iif(cheerleadingQW[\'backup_game\'] = 1, \' The fact that you\'re actually wearing the uniform and are going out to perform with them doesn\'t seem real to you, even if the girls have only reluctantly let you join them.\', \')+\'');
    scene.text('You finish tying your shoes when Albina stands on the bench. "You already know that today is game day! So let\'s go out there and cheer our boys to victory!"');
    scene.text('The squad cheers in unison as you all head out.');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/opening.mp4');
    if (((s as any).month ?? 0) >= 10) {
      if (((s as any).temper ?? 0)[0] >= 18) {
        scene.text('You\'re glad it\'s relatively warm for this time of the year as you step outside in your revealing cheerleader uniform. The weather brought out more spectators than usual and everyone seems fired up for a good game of football.');
      } else {
        if (((s as any).cheerleadingQW ?? 0)?.['cold_weather'] === 0) {
          scene.text('There\'s a chill in the air and you shudder as you step outside in your thin outfit that does little to protect you from the elements. Despite the girls\' pleas, the football teams prefer the outdoor field to playing indoors and you\'re forced to perform outside, even during cold weather.');
          scene.text('Thankfully, performing your routine and then cheering from the sidelines helps keep you somewhat warm as you persevere with the vicious cold.');
          ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['cold_weather'] = 1;
        } else {
          scene.text('The cold chill in the air stings with a bitter fury as you step outside. For whatever reason, a few of your fellow cheerleaders have chosen not to wear a bra and their solid nipples are poking through the thin fabric of their outfits.');
          scene.text('You soldier through the biting cold and perform your routine before cheering from the sidelines for the rest of the game, which helps keep you somewhat warm.');
        }
      }
    } else {
      if (((s as any).month ?? 0) <= 3) {
        if (((s as any).cheerleadingQW ?? 0)?.['basketball'] === 0) {
          scene.text('Thankfully, the football team is on its winter break and you\'re now safely in the warm indoors performing for the basketball team. While performing your opening routine, you notice some of the players and spectators checking you and the other girls out. Some of them are just appreciating the show while others are hungrily undressing you with their eyes.');
          scene.text('They continue eying you up for the rest of the game as you cheer from the sidelines. You ignore them as best as you can, thankful that you\'re indoors and warm at least.');
          ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['basketball'] = 1;
        } else {
          scene.text('You head out into the hall and perform your opening routine for the crowd before the game starts and you cheer from the sidelines. You notice a few guys checking you and the other girls out, some of them undressing you with their eyes. You try your best to ignore them as the game continues.');
        }
      } else {
        if (((s as any).month ?? 0) === 4) {
          if (((s as any).cheerleadingQW ?? 0)?.['spring_match'] === 0) {
            scene.text('Football has started back up and you\'re thankful that the weather has somewhat improved. You\'re no longer chilled to the bone, but the temperature picking up means that you sweat a little more doing your routines. You\'re grateful for the bottles of refreshing cold water being passed out as you quench your thirst.');
            ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['spring_match'] = 1;
          }
        }
      }
    }
    qspCall(s, 'exercise', 'tier2', 0, 'agil', 'vital', 'cheer', 'cheer', 'danc');
    scene.text('You and the girls perform your opening routine flawlessly under Albina\'s direction and spend the rest of the game chanting and cheering for your team from the sidelines.');
    scene.text('You notice some guys in the crowd appreciating the view of your ass as you\'re performing right in front of them.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch and cheer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/closing.mp4');
    if (((s as any).month ?? 0) <= 3) {
      scene.text('The game comes to an end and you perform your closing routine for the crowd as the players make their way off the court. You join them after you finish and head into the locker room.');
    } else {
      if (((s as any).month ?? 0) >= 10  &&  ((s as any).temper ?? 0)[0] < 18) {
        scene.text('You let out a sigh of relief when the game ends and after performing your closing routine, you all huddle together and make a dash for the warmth of the locker room.');
      } else {
        scene.text('The game ends and you perform your closing routine for the crowd as the players leave the field. You soon join them in returning to the locker room.');
      }
    }
    scene.text('Once in the locker room, you strip from your uniform and head into the showers.');
    if (((s as any).cheerleadingQW ?? 0)?.['backup_game'] === 1) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['backup_game'] = 0;
      // TODO-QSP: dynamic text: After the game, Albina comes over to you. "I'll give it to you <<$pcs_nickname>>...
      scene.text(`After the game, Albina comes over to you. "I'll give it to you ${((s as any).pcs_nickname || '')}, you didn't embarrass us as much as I thought you would. Don't go taking that uniform by the way, you haven't earned it."`);
      scene.text('She leaves you to walk back to the locker room yourself. Maybe you\'ll earn her respect and this uniform one day if you keep this up?');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'exercise', 'tier2', 0, 'agil', 'vital', 'cheer', 'cheer', 'danc');
    qspCall(s, 'archetypes', 'gain', 'preppy', 'small', 'Cheerleading game');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take a shower', goto: ['gschool_cheerleading', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'outfit', 'strip_all');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('Your deodorant gets washed away in the shower.');
  }
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You head back to the locker room, where you strip and head into the showers. You find an empty stall and step inside before turning the water on and enjoying the sensation of it on your skin.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Once you\'ve finished, you turn the water off, grab your towel and head back to the locker room to get dressed.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
    { label: 'Stay in the shower a little longer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You\'re enjoying this shower and choose to stay in it a little longer, long enough that you\'re sure you\'re the only person left.');
    scene.text('Once you\'ve finished, you turn the water off, grab your towel and head back to the locker room to get dressed.');
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina1.jpg');
      scene.text('As you enter the locker area, you can hear the faint moaning of a girl and decide to check it out, peeking around the corner to see Lina leaning against a locker masturbating. Thankfully, she can\'t see you.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave her alone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina2.jpg');
    scene.text('Although it\'s pretty hot to watch, you don\'t want to push your luck and slowly walk away, leaving her to it. You quietly get dressed and are sneaking out when you hear her scream loudly in pleasure as she orgasms.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
        { label: 'Watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina2.jpg');
    scene.text('She\'s putting on a show that\'s too good to resist. You continue to watch her when she suddenly arches her back and catches you spying.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" she exclaims in surprise as she snaps her legs shut. "I… I ...
    scene.text(`"${((s as any).pcs_nickname || '')}!" she exclaims in surprise as she snaps her legs shut. "I… I didn't think anyone else was here…" she mumbles as she looks down in embarrassment. "Christina asked me eat her out earlier and it left me feeling super horny. I just needed a little relief of my own was all. Can… Can you just pretend that you didn't see me. Please?"`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('You agree to keep quiet about what you saw and you both get dressed, Lina awkwardly avoiding eye contact with you as you do.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
      { label: 'Help her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina3.jpg');
    scene.text('"How about we help each other out instead?" you ask as you look at her seductively.');
    scene.text('She bites her lip as you move over and give her a passionate kiss before you both drop to the floor, making out as you slowly finger her wet pussy.');
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'arousal', 'vaginal_finger_give', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina4.jpg');
    scene.text('You lay her down on her back and move between her legs, running your tongue over her pussy lips and onto her clit as she moans in delight.');
    // TODO-QSP: dynamic text: "Oh that's good <<$pcs_nickname>>, but you need some too!" she says as she has y...
    scene.text(`"Oh that's good ${((s as any).pcs_nickname || '')}, but you need some too!" she says as she has you lie down beside her. She then climbs on top of you and buries her face in your crotch, her glistening pussy sitting before you.`);
    scene.text('You feel her pull your lips apart to expose your clit before she gently starts circling her tongue over it. You moan in immense pleasure before you return the favor, causing her to moan into your pussy.');
    qspCall(s, 'npc_relationship', 'modify', 'A19', 1);
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A19'] = 1;
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/lina5.jpg');
    scene.text('While flicking your tongue over her clit, you decide to add to the pleasure by sliding a few fingers inside her. She moans at the sensation as you feel her pussy tightly clench around your fingers.');
    scene.text('You continue to both lick her and finger her in tandem when she says that she\'s reaching climax. You pull your fingers out and flick your tongue faster, and she soon screams in pleasure.');
    scene.text('Her legs almost buckle as she rides through her orgasm, but she soon turns around and starts kissing you, giving you a taste of your pussy juices on her tongue.');
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'arousal', 'cuni', (-5));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/facewash.jpg');
    // TODO-QSP: dynamic text: "That was just what I needed, <<$pcs_nickname>>! You eat pussy like a pro!"
    scene.text(`"That was just what I needed, ${((s as any).pcs_nickname || '')}! You eat pussy like a pro!"`);
    scene.text('With that, she moves to her locker to get dressed. You wash your face at the sink before getting dressed yourself.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/blowjob.jpg');
          scene.text('As you\'re about to enter the locker area, you\'re surprised to hear what sounds like the faint male groan. Peeking around the corner, you see one of the cheerleaders from another class, on all fours on the bench wearing only her thong as she gags and slurps on a guy\'s cock.');
          scene.text('You recognize him as one of the boys from another class, but can\'t remember which of the sports teams he plays on. Did they not hear you in the shower or do they just not care?');
          scene.text('You shake your head and watch as he suddenly rams his cock down the girl\'s throat, causing her to gag loudly before you suddenly hear someone knocking on the door.');
          scene.text('"I can hear you in there, girls!" you hear the coach say through the door. "Hurry up and get dressed before I come in and throw you out myself, with or without your clothes on!"');
          scene.text('Startled, the boy quickly backs away, causing his wet dick to slide out of the girl\'s mouth. "Fuck! Hurry up and get dressed, babe! We\'ll finish this at my place."');
          scene.text('You watch as the two of them scramble to get dressed before hurrying out the door, having been oblivious to your presence the entire time.');
          qspCall(s, 'arousal', 'voyeur_sex', 2);
          scene.actions([
            { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
          ]);
        } else {
          scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/cowgirl.jpg');
          scene.text('As you\'re about to enter the locker area, you\'re surprised to hear what sounds like voices, only one of them is male… Curious, you peek around the corner and see one of the cheerleaders from another class as she rides a guy\'s cock, her ass slapping against his hips as she slides up and down his shaft.');
          scene.text('You can\'t quite see his face, but you recognise her partner as a boy from another class. You know he\'s on one of the sports team, but can\'t remember which one. Did they not hear you in the shower or do they just not care?');
          scene.text('You shake your head and watch as he suddenly rams his cock deep into the girl\'s pussy, causing her to moan loudly before you suddenly hear someone knocking on the door.');
          scene.text('"I can hear you in there, girls!" you hear the coach say through the door. "Hurry up and get dressed before I come in and throw you out myself, with or without your clothes on!"');
          scene.text('The girl squeals in surprise when the boy suddenly stands up, lifting her with him with his cock still buried in her pussy. "Let\'s finish this in the shower."');
          scene.text('You\'re forced to duck into one of the shower stalls as they enter the room and enter one of the other stalls. Once the coast is clear, you quickly sneak into the locker room and get dressed.');
          qspCall(s, 'arousal', 'voyeur_sex', 2);
          scene.actions([
            { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
          ]);
        }
      } else {
        if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['practice_count'] <= 3  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] === 0  &&  ((s as any).christinaQW ?? 0)?.['fight'] !== 1) {
          scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/christina_ambush.jpg');
          // TODO-QSP: dynamic text: The locker room is quiet as you enter and head to your locker, but panic when yo...
          scene.text('The locker room is quiet as you enter and head to your locker, but panic when you can\'t find your \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'cheerleading uniform\', \'clothes\')+\' inside. "Looking for something?"');
          // TODO-QSP: dynamic text: Before you can react to the voice, your towel is ripped away from you. You turn ...
          scene.text('Before you can react to the voice, your towel is ripped away from you. You turn to see a naked Christina sitting on the bench with your \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'uniform in her hand\', \'clothes in a crumpled pile at her feet\')+\', smiling at you mockingly.');
          if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
            scene.text('"Like I said, you need to earn the right to wear this. Just do as I want and you get it back. You wouldn\'t want to anger Albina by losing it would you?"');
          }
          if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
            scene.text('"These rags are pretty tacky. I\'d be doing you a favor by binning them, but if you want them back then you have to do something for me first."');
          }
          if (((s as any).christinaQW ?? 0)?.['submit'] === 1  ||  ((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
            scene.actions([
              { label: 'Do as you\'re told', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/christina_force.jpg');
    scene.text('Having already submitted to her, you have no desire to fight back and obediently get on your knees in front of her in a submissive pose.');
    // TODO-QSP: dynamic text: She looks at you with a satisfied smirk before '+iif(cheerleadingQW['quest_stage...
    scene.text('She looks at you with a satisfied smirk before \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'tossing your uniform across the room and\', \')+\' dragging you in front of her. "Good bitch. Now eat my pussy."');
    scene.text('She turns around and kneels on the bench before grabbing your head and forcing your face into her crotch. You start obediently running your tongue up and down her pussy before drifting down to her clit and flicking your tongue over it.');
    scene.text('"Oh fuck yeah, just like that, bitch!" she moans in pleasure as she maintains a tight grip on your hair. You please her for a few minutes before her knees give out to the pleasure and she ends up laying flat on the bench, her legs split wide. "Oh fuck! Yes, yes, yes! Keep going, bitch!"');
    scene.text('She continues moaning loudly in pleasure and after a few seconds, she screams out and you\'re drenched by the flood of pussy juice that gushes from her as her orgasm washes over her. She rides through the waves of pleasure as you stay kneeling on the floor. Once she recovers, she stands and smiles. "You look a little dirty there. Here, let me help."');
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
      scene.text('She walks over to your crumpled uniform and picks it up before returning to you and shoving it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she laughs before tossing it on the floor in front of you.');
    }
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
      scene.text('She grabs your crumpled top from the pile on the floor and shoves it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she laughs before tossing it on the floor in front of you.');
    }
    scene.text('You obediently remain on your knees in front of her as she gets dressed. Once she\'s finished, she smiles at you smugly before leaving, allowing you to clean up and get dressed.');
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Submit', handler: (st: GameState) => {
    ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = ((s as any).christinaQW['bully'] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/christina_ambush.jpg');
    scene.text('The idea of submitting to her and letting her do whatever she wants with you sounds appealing to you. "What do you want me to do?" you ask in your most submissive tone.');
    // TODO-QSP: dynamic text: She looks at you with a satisfied smirk. "Be a good little bitch, get on your kn...
    scene.text('She looks at you with a satisfied smirk. "Be a good little bitch, get on your knees and eat my pussy!" she barks as she \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'tosses your uniform across the room and\', \')+\' drags you in front of her.');
    if ((Math.floor(Math.random() * 3) + 0) < 2) {
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/christina_force.jpg');
      scene.text('She turns around and kneels on the bench before grabbing your head and forcing your face into her crotch. You obediently start running your tongue up and down her labia before drifting down to her clit and flicking your tongue over it.');
      scene.text('"Oh fuck yeah, just like that bitch!" she moans in pleasure as she maintains a tight grip on your hair. You continue pleasing her for a few minutes before her knees give out to the pleasure and she ends up laying flat on the bench, her legs split wide. "Oh fuck! Yes, yes, yes! Keep going, bitch!"');
      scene.text('She continues moaning loudly in pleasure and after a few seconds, she screams out and you\'re drenched by the flood of pussy juice that gushes from her as her orgasm washes over her. She rides through the waves of pleasure as you stay kneeling on the floor. Once she recovers, she stands and smiles. "You look a little dirty there. Here, let me help."');
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
        scene.text('She walks over to your crumpled uniform and picks it up before returning to you and shoving it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she says with a smirk before tossing it on the floor in front of you. You quickly stuff it in your bag and she laughs as you scramble to your feet and run to clean yourself up.');
      }
      if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
        scene.text('She grabs your top from the pile on the bench and shoves it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she says with a smirk before tossing it on the floor in front of you. She laughs as you quickly scramble to your feet and run to clean yourself up.');
      }
      scene.text('She\'s gone when you return and you get dressed alone.');
      qspCall(s, 'arousal', 'cuni_give', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/albina_rescue.jpg');
      scene.text('You\'re kneeling between Christina\'s legs and are about to start eating her out when the door flies open and Albina walks in.');
      scene.text('"What the fuck do you think you\'re doing?!" she screams.');
      // TODO-QSP: dynamic text: Christina just laughs. "What does it look like? <<$pcs_nickname>> offered to eat...
      scene.text(`Christina just laughs. "What does it look like? ${((s as any).pcs_nickname || '')} offered to eat my pussy and you're interrupting us, so if you don't mind…"`);
      scene.text('She makes a shooing motion with her hand as Albina stares at you.');
      scene.actions([
        { label: 'She forced me', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = ((s as any).christinaQW['bully'] ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/albina_rescue.jpg');
    // TODO-QSP: dynamic text: "She's lying!" you exclaim while looking up pleadingly at Albina. "She stole my ...
    scene.text('"She\'s lying!" you exclaim while looking up pleadingly at Albina. "She stole my \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'uniform\', \'clothes\')+\' and forced me to eat her out to get \'+iif(cheerleadingQW[\'quest_stage\'] = 3, \'it\', \'them\')+\' back!"');
    // TODO-QSP: dynamic text: "I fucking knew it! No way <<$pcs_nickname>> would ever willingly go down on you...
    scene.text(`"I fucking knew it! No way ${((s as any).pcs_nickname || '')} would ever willingly go down on you," Albina replies while pulling you to your feet and shielding you behind her. "You're fucking despicable, you know that? Stay the fuck away from ${((s as any).pcs_nickname || '')} or we'll be having a chat about your 'extra curricular' activities…"`);
    scene.text('Christina glares at you. "Fucking bitch…" she mumbles before standing up. "Whatever, I\'ve got better things to do." She stops to glare at Albina. "You\'re playing with fire there, bitch. You think daddy would like that you\'re not playing nice?"');
    scene.text('The two stare daggers at each other to the point you think things might actually get violent between them. Thankfully, Christina finishes dressing but flips you both off as she\'s leaving. Once she\'s gone, Albina turns to you.');
    // TODO-QSP: dynamic text: "Are you okay, <<$pcs_nickname>>? Did she hurt you?" You shake your head and she...
    scene.text(`"Are you okay, ${((s as any).pcs_nickname || '')}? Did she hurt you?" You shake your head and she pats you on the shoulder. "Glad I turned up when I did then."`);
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
      scene.text('She grabs your uniform off the floor and places it in your bag as you get dressed. Once you\'re done, she insists on walking you home, despite you assuring her that you\'re fine, and you both leave together.');
    } else {
      scene.text('She waits for you to get dressed and insists on walking you home, despite you assuring her that you\'re fine, and you both leave together.');
    }
    scene.actions([
      { label: 'Walk home with Albina', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'pav_complex', 'start');
  } },
    ]);
  } },
        { label: 'I wanted to do it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = ((s as any).christinaQW['bully'] ?? 0) + (2);
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/christina_force.jpg');
    scene.text('You avoid making eye contact with Albina. "It\'s… It\'s true. I want to do it…" you sheepishly answer and Albina is taken aback in confusion.');
    scene.text('Christina just grins. "You heard her. She doesn\'t need you to rescue her, so run along and go bother someone else."');
    // TODO-QSP: dynamic text: After processing the situation, Albina just scoffs at you in disgust. "Do whatev...
    scene.text(`After processing the situation, Albina just scoffs at you in disgust. "Do whatever the fuck you want ${((s as any).pcs_nickname || '')}, but don't come crying to me when it blows up in your face. Don't say I didn't warn you," she says before she walks out and the door closes behind her.`);
    scene.text('"Yap, yap fucking yap," Christina says while making a mocking motion with her hand. "Does she remind you of an annoying little dog sometimes? Anyway, where were we?"');
    scene.text('She turns around and kneels on the bench before grabbing your head and forcing your face into her crotch. You start obediently running your tongue up and down her pussy before drifting down to her clit and flicking your tongue over it.');
    scene.text('"Oh fuck yeah, just like that, bitch!" she moans in pleasure as she maintains a tight grip on your hair. You please her for a few minutes before her knees give out to the pleasure and she ends up laying flat on the bench, her legs split wide. "Oh fuck! Yes, yes, yes! Keep going, bitch!"');
    scene.text('She continues moaning loudly in pleasure and after a few seconds, she screams out and you\'re drenched by the flood of pussy juice that gushes from her as her orgasm washes over her. She rides through the waves of pleasure as you stay kneeling on the floor. Once she recovers, she stands and smiles. "You look a little dirty there. Here, let me help."');
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
      scene.text('She walks over to your crumpled uniform and picks it up before returning to you and shoving it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she says with a smirk before tossing it on the floor in front of you. You quickly stuff it in your bag and she laughs as you scramble to your feet and run to clean yourself up.');
    }
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
      scene.text('She grabs your crumpled top from the pile on the floor and shoves it in your face, her juices soaking into the fabric as she roughly rubs it across your face. "There. All cleaned up, bitch!" she says with a smirk before tossing it on the floor in front of you. She laughs as you quickly scramble to your feet and run to clean yourself up.');
    }
    scene.text('She\'s gone when you return and you get dressed alone.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
      ]);
    }
  } },
              { label: 'Refuse', handler: (st: GameState) => {
    ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = ((s as any).christinaQW['bully'] ?? 0) - (2);
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/christina_ambush.jpg');
    scene.text('"Fuck you, I\'m not one of your little lapdogs that jumps to do your bidding!" you retort in defiance, which causes her to smile.');
    scene.text('"It\'s nice having people do what you tell them, like you will right now. Albina isn\'t here to save you now and you won\'t be telling her a damn thing if you want to keep your place on the squad. Right now, your place is between my legs eating my pussy!"');
    scene.text('Her arrogance gets the better of you and you lunge forward. Just as you reach her, she jumps to her feet and the two of you start brawling.');
    scene.text('Christina taunts and mocks you in amusement as you loudly insult her, and looks ready to fight you when the door suddenly flies open and Albina storms in.');
    scene.text('"What the fuck\'s going on here? I can hear you two down the hall!" she barks while getting between the two of you.');
    scene.text('Christina glares at you before backing off. "Nothing. I was just leaving," she replies before moving to get dressed. You do the same as Albina remains on guard, a look of disgruntled disappointment on her face.');
    scene.text('Christina finishes dressing and flips you off behind Albina\'s back as she leaves. Albina follows a few minutes later, grumbling about having to babysit the two of you as she walks out, leaving you alone in the locker room. Punches would definitely have been thrown had she not intervened…');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
            ]);
          }
        } else {
          if ((Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3  &&  ((s as any).npc_had_sex ?? 0)?.['A23']) {
            if (((s as any).cheerleadingQW ?? 0)?.['lazar_threesome'] === 0) {
              scene.text('As you\'re getting your clothes ready, the door opens and Albina peeks in. "Oh…" she mumbles before walking in. "I was hoping it would be empty in here."');
              // TODO-QSP: dynamic text: At this point, Lazar peeks his head in the door, a wide grin on his face. "So we...
              scene.text(`At this point, Lazar peeks his head in the door, a wide grin on his face. "So we doing this or no- Oh hey, ${((s as any).pcs_nickname || '')}…" he trails off as he spots you.`);
              scene.text('Albina giggles. "Turns out this place isn\'t as empty as we thought…"');
              // TODO-QSP: dynamic text: Lazar just smiles. "Since she's here, why don't we let <<$pcs_nickname>> join us...
              scene.text(`Lazar just smiles. "Since she's here, why don't we let ${((s as any).pcs_nickname || '')} join us then? I'm always down for a threesome!"`);
              scene.text('You look at Albina, who rolls her eyes and grins at his suggestion.');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"No, I\'m fine thanks. I\'ve got places to be and things to do," you reply.');
    scene.text('Lazar just smiles. "Your loss. The boys locker room should be empty now," he says as he effortlessly lifts Albina in his arms, his hands firmly gripping her ass.');
    scene.text('She giggles as he carries her out of the room, leaving you to finish getting dressed. A few minutes later, you\'re certain that you can hear the muffled sounds of them having sex across the hall.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
                { label: 'Accept', handler: (st: GameState) => {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['lazar_threesome'] = 1;
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A23'] = 1;
    qspCall(s, 'boyStat', 'A154');
    qspCall(s, 'arousal', 'vaginal_finger', (-5));
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome.jpg');
    scene.text('You give them a sly little smile. "Okay, that sounds like fun."');
    scene.text('Lazar couldn\'t look any more happier as he pulls you both in close and cops a feel with each of you, his hand running over your ass and gently squeezing it. "Who wants to go first?"');
    scene.text('Albina pushes him onto the bench and embraces you in a passionate kiss, her tongue twisting around your own as she pulls your towel down, exposing your naked body to Lazar. Her hand then slides between your legs and starts fondling your clit, causing you to moan into her mouth.');
    scene.text('After a few seconds, she breaks the kiss and starts to undress herself. Once she\'s done, you both drop to your knees in front of Lazar and Albina pulling his pants down, his impressively sized erection springing free.');
    scene.text('"You like what you see girls?" he quips.');
    scene.text('You both lick his shaft before Albina moves down and starts sucking on his balls while jerking his cock in her hand as you decide to lick the head and start circling your tongue around it. After a few seconds, Albina brings her head up and you make room to allow her to take his shaft into her mouth and start sucking his dick.');
    scene.text('Lazar puts his hands behind his head and leans back against the lockers as you and Albina take turns sucking his dick. During her turn, Albina slowly takes his entire length into her mouth and starts gagging as she deepthroats him.');
    scene.text('When she withdraws, saliva is dribbling down her chin, but she looks up and smiles at an appreciative Lazar.');
    scene.text('"Best. Blowjob. Ever…" he says softly.');
    scene.actions([
      { label: 'Get your pussies fucked', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome1.mp4');
    scene.text('He then stands up. "Time to get fucked, girls," he says and Albina obediently gets on all fours on the bench before presenting her large ass to Lazar.');
    // TODO-QSP: dynamic text: "Get up there beside her, <<$pcs_nickname>>! I want to see both those asses high...
    scene.text(`"Get up there beside her, ${((s as any).pcs_nickname || '')}! I want to see both those asses high in the air!" Lazar orders and you obediently climb onto the bench next to Albina, who playfully wiggles her ass at Lazar. He gives her ass a good slap in response before pushing his cock into her awaiting pussy. You gasp when his fingers plunge inside your pussy and he starts fingering you.`);
    scene.text('He starts thrusting into Albina and fucks her for a few minutes while also fingering you before he pulls out of you both and moves in behind you.');
    scene.text('You feel the tip of his cock push against your slit before it slowly slides into you. He then grabs your hips and starts thrusting into you as Albina leans over and starts kissing you.');
    scene.text('You spend the next few minutes having Lazar alternate between fucking the two of you while your tongues remain locked together.');
    scene.actions([
      { label: 'Albina gets butt fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome2.mp4');
    scene.text('When Lazar pulls out of Albina and switches back to you, she breaks the kiss and reaches over into her bag before pulling out a bottle of lube. She squirts some out onto her fingers and rubs it into her asshole before pushing her fingers inside and slowly fingering herself.');
    scene.text('"I want your big dick to stretch my tight little asshole!" she says teasingly as she pulls her fingers out and slaps herself on the ass. You feel Lazar pull out of you before he squirts some of the lube onto his dick and moves in behind her.');
    scene.text('You give Albina a few smacks and spread her ass as Lazar guides the tip of his cock between her cheeks. Both he and Albina groan as he slowly penetrates her back door.');
    scene.text('He then grabs her hips and you watch for the next few minutes as he fucks her asshole hard, his balls loudly slapping against her pussy. During one of his thrusts, his cock pops out of her and you look at her slightly gaping asshole.');
    // TODO-QSP: dynamic text: Before he can put it back in, Albina grins at you. "Want a taste of my ass, <<$p...
    scene.text(`Before he can put it back in, Albina grins at you. "Want a taste of my ass, ${((s as any).pcs_nickname || '')}?"`);
    scene.actions([
      { label: 'Tongue fuck her ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome3.mp4');
    scene.text('Without hesitation, you plunge your tongue straight into her stretched asshole and start to vigorously tongue fuck her back door. Albina moans and giggles in delight while Lazar just watches the show while jerking himself.');
    // TODO-QSP: dynamic text: After a few seconds, you withdraw and Lazar penetrates her again. "Uuuuhhh, <<$p...
    scene.text(`After a few seconds, you withdraw and Lazar penetrates her again. "Uuuuhhh, ${((s as any).pcs_nickname || '')}… Eat… my… pussy! Oh fuck yes!" Albina blurts out between moans as Lazar starts fucking her even harder this time.`);
    scene.text('You obediently slide under Albina and start licking her clit and fingering her now soaking wet pussy that\'s dripping her juices onto your face.');
    scene.text('She eventually reaches orgasm, her twitching pussy expelling your fingers and spraying juices everywhere as she screams in pleasure. Lazar is also close and Albina senses this through his ragged thrusts. "Yes, yes. Cum in my ass! Give it to me!" she moans in encouragement.');
    // TODO-QSP: dynamic text: Lazar picks up the pace and soon lets out a loud grunt as you see his balls twit...
    scene.text(`Lazar picks up the pace and soon lets out a loud grunt as you see his balls twitching above you. Once he's finished unloading into her, he grabs hold of Albina's ass in both hands. "Open wide, ${((s as any).pcs_nickname || '')}!" he orders.`);
    scene.text('You obediently open your mouth as Lazar pulls out of Albina and her ass lets out a loud squelch as she squeezes the cum from her ravaged hole into your mouth.');
    scene.text('She then sits right on your face and starts grinding against you, so you obediently lick and tongue fuck her asshole as cum continues to trickle into your mouth. You can hear the sounds of her giving a wet, sloppy blowjob to a groaning Lazar above you.');
    qspCall(s, 'arousal', 'rimming_give', 5);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome4.jpg');
    scene.text('Once she finishes, Albina climbs off of you and pulls you up before she starts making out with you, her tongue lapping away at the cum in your mouth.');
    scene.text('After a few seconds, she breaks the kiss and grimaces as she swallows the cum in her mouth before encouraging you to do the same.');
    scene.text('You gulp down the sticky fluid and Lazar grins. "You two were amazing! We need to do this again sometime!"');
    scene.text('Albina playfully giggles. "Maybe we will, maybe we won\'t…" she teases him and you all laugh before getting dressed.');
    scene.text('You then all leave the room and go your separate ways.');
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Lazar_Threesome'] = ((s as any).AlbinaQW['Lazar_Threesome'] ?? 0) + (1);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Eat her pussy instead', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome3.mp4');
    scene.text('You don\'t really want to do that, so you slide underneath her and start licking her dripping wet pussy instead as Lazar penetrates her ass again.');
    // TODO-QSP: dynamic text: "Uuuuhhh, <<$pcs_nickname>>… Eat… my… pussy! Oh fuck yes!" she blurts out betwee...
    scene.text(`"Uuuuhhh, ${((s as any).pcs_nickname || '')}… Eat… my… pussy! Oh fuck yes!" she blurts out between moans as you lick her clit and finger her pussy.`);
    scene.text('She eventually reaches orgasm, her twitching pussy expelling your fingers and spraying juices everywhere as she screams in pleasure. Lazar is also close and Albina senses this through his ragged thrusts. "Yes, yes! Cum in my ass! Give it to me!" she moans in encouragement.');
    // TODO-QSP: dynamic text: Lazar picks up the pace and soon lets out a loud grunt as you see his balls twit...
    scene.text(`Lazar picks up the pace and soon lets out a loud grunt as you see his balls twitching above you. Once he's finished unloading into her, he grabs hold of Albina's ass in both hands. "Open wide, ${((s as any).pcs_nickname || '')}!" he orders.`);
    scene.text('You obediently open your mouth as Lazar pulls out of Albina and her ass lets out a loud squelch as she squeezes the cum from her ravaged hole into your mouth.');
    scene.text('She then sits right on your face and starts grinding against you as cum continues to trickle into your mouth. You can hear the sounds of her giving a wet, sloppy blowjob to a groaning Lazar above you.');
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome4.jpg');
    scene.text('Once she finishes, Albina climbs off of you and pulls you up before she starts making out with you, her tongue lapping away at the cum in your mouth.');
    scene.text('After a few seconds, she breaks the kiss and grimaces as she swallows the cum in her mouth before encouraging you to do the same.');
    scene.text('You gulp down the sticky fluid and Lazar grins. "You two were amazing! We need to do this again sometime!"');
    scene.text('Albina playfully giggles. "Maybe we will, maybe we won\'t…" she teases him and you all laugh before getting dressed.');
    scene.text('You then all leave the room and go your separate ways.');
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Lazar_Threesome'] = ((s as any).AlbinaQW['Lazar_Threesome'] ?? 0) + (1);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              scene.text('While you\'re getting dressed, Albina approaches you with a mischievous grin on her face.');
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, Lazar and I are going to… have a little fun and we were ...
              scene.text(`"Hey ${((s as any).pcs_nickname || '')}, Lazar and I are going to… have a little fun and we were wondering if you wanted to join us again?"`);
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"No, I\'m fine thanks. I\'ve got places to be and things to do," you reply while shaking your head.');
    scene.text('She looks a little disappointed, but just shrugs her shoulders.');
    scene.text('"Your loss," she says before typing a message on her phone and walking away as you finish getting dressed.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish getting dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
    ]);
  } },
                { label: 'Accept', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A23'] = 1;
    qspCall(s, 'boyStat', 'A154');
    scene.text('You give her a sly little smile. "Yeah, okay. I\'m in."');
    scene.text('She smiles and types a message on her phone. "Okay, get dressed and follow me."');
    scene.text('You do as she says and follow her out the door and down the hall. She stops and looks around before pulling you into the boys locker room.');
    // TODO-QSP: dynamic text: A nude Lazar is already waiting for you, his impressive cock awaiting you. "<<$p...
    scene.text(`A nude Lazar is already waiting for you, his impressive cock awaiting you. "${((s as any).pcs_nickname || '')}! I'm glad you decided to join us again," he grins and you give him a little smile in return.`);
    scene.text('Albina starts undressing, quickly taking her shirt off before dropping her skirt to her ankles and stepping out of it. You undress yourself and Lazar sits on the bench as you and Albina kneel in front of him.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome.jpg');
    scene.text('You both kneel on either side of Lazar\'s dick and start licking his shaft before Albina starts sucking on his balls while jerking his cock in her hand. You decide to lick his head and start circling your tongue around it.');
    scene.text('After a few seconds, Albina brings her head up and you make room to allow her to take his shaft into her mouth and start sucking his dick. Lazar puts his hands behind his head and leans back against the lockers as you and Albina take turns sucking his dick.');
    scene.text('During her turn, Albina slowly takes his entire length into her mouth and starts gagging as she deepthroats him. When she withdraws, saliva is dribbling down her chin, but she looks up and smiles at an appreciative Lazar.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your pussies fucked', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome1.mp4');
    scene.text('He then stands up. "Time to get fucked, girls," he says and Albina obediently gets on all fours on the bench before presenting her large ass to Lazar.');
    // TODO-QSP: dynamic text: "Get up there beside her, <<$pcs_nickname>>! I want to see both those asses high...
    scene.text(`"Get up there beside her, ${((s as any).pcs_nickname || '')}! I want to see both those asses high in the air!" Lazar orders and you obediently climb onto the bench next to Albina, who playfully wiggles her ass at Lazar. He gives her ass a good slap in response before pushing his cock into her awaiting pussy. You gasp when his fingers plunge inside your pussy and he starts fingering you.`);
    scene.text('He starts thrusting into Albina and fucks her for a few minutes while also fingering you before he pulls out of you both and moves in behind you.');
    scene.text('You feel the tip of his cock push against your slit before it slowly slides into you. He then grabs your hips and starts thrusting into you as Albina leans over and starts kissing you.');
    scene.text('You spend the next few minutes having Lazar alternate between fucking the two of you while your tongues remain locked together.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Albina gets butt fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome2.mp4');
    scene.text('When Lazar pulls out of Albina and switches back to you, she breaks the kiss and reaches over into her bag before pulling out a bottle of lube. She squirts some out onto her fingers and rubs it into her asshole before pushing her fingers inside and slowly fingering herself.');
    scene.text('"I want your big dick to stretch my tight little asshole!" she says teasingly as she pulls her fingers out and slaps herself on the ass. You feel Lazar pull out of you before he squirts some of the lube onto his dick and moves in behind her.');
    scene.text('You give Albina a few smacks and spread her ass as Lazar guides the tip of his cock between her cheeks. Both he and Albina groan as he slowly penetrates her back door.');
    scene.text('He then grabs her hips and you watch for the next few minutes as he fucks her asshole hard, his balls loudly slapping against her pussy. During one of his thrusts, his cock pops out of her and you look at her slightly gaping asshole.');
    // TODO-QSP: dynamic text: Before he can put it back in, Albina grins at you. "Want a taste of my ass, <<$p...
    scene.text(`Before he can put it back in, Albina grins at you. "Want a taste of my ass, ${((s as any).pcs_nickname || '')}?"`);
    qspCall(s, 'arousal', 'bj', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tongue fuck her ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome3.mp4');
    scene.text('Without hesitation, you plunge your tongue straight into her stretched asshole and start to vigorously tongue fuck her back door. Albina moans and giggles in delight while Lazar just watches the show while jerking himself.');
    // TODO-QSP: dynamic text: After a few seconds, you withdraw and Lazar penetrates her again. "Uuuuhhh, <<$p...
    scene.text(`After a few seconds, you withdraw and Lazar penetrates her again. "Uuuuhhh, ${((s as any).pcs_nickname || '')}… Eat… my… pussy! Oh fuck yes!" Albina blurts out between moans as Lazar starts fucking her even harder this time.`);
    scene.text('You obediently slide under Albina and start licking her clit and fingering her now soaking wet pussy that\'s dripping her juices onto your face.');
    scene.text('She eventually reaches orgasm, her twitching pussy expelling your fingers and spraying juices everywhere as she screams in pleasure. Lazar is also close and Albina senses this through his ragged thrusts. "Yes, yes. Cum in my ass! Give it to me!" she moans in encouragement.');
    // TODO-QSP: dynamic text: Lazar picks up the pace and soon lets out a loud grunt as you see his balls twit...
    scene.text(`Lazar picks up the pace and soon lets out a loud grunt as you see his balls twitching above you. Once he's finished unloading into her, he grabs hold of Albina's ass in both hands. "Open wide, ${((s as any).pcs_nickname || '')}!" he orders.`);
    scene.text('You obediently open your mouth as Lazar pulls out of Albina and her ass lets out a loud squelch as she squeezes the cum from her ravaged hole into your mouth.');
    scene.text('She then sits right on your face and starts grinding against you, so you obediently lick and tongue fuck her asshole as cum continues to trickle into your mouth. You can hear the sounds of her giving a wet, sloppy blowjob to a groaning Lazar above you.');
    qspCall(s, 'arousal', 'rimming_give', 5);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome4.jpg');
    scene.text('Once she finishes, Albina climbs off of you and pulls you up before she starts making out with you, her tongue lapping away at the cum in your mouth.');
    scene.text('After a few seconds, she breaks the kiss and grimaces as she swallows the cum in her mouth before encouraging you to do the same.');
    scene.text('You gulp down the sticky fluid and Lazar grins. "Until next time, girls."');
    scene.text('Albina teases him by bending over and wiggling her naked ass at him, showing off her still slightly gaping anus.');
    scene.text('You all get dressed before leaving the room and going your separate ways.');
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Lazar_Threesome'] = ((s as any).AlbinaQW['Lazar_Threesome'] ?? 0) + (1);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Eat her pussy instead', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome3.mp4');
    scene.text('You don\'t really want to do that, so you slide underneath her and start licking her dripping wet pussy instead as Lazar penetrates her ass again.');
    // TODO-QSP: dynamic text: "Uuuuhhh, <<$pcs_nickname>>… Eat… my… pussy! Oh fuck yes!" she blurts out betwee...
    scene.text(`"Uuuuhhh, ${((s as any).pcs_nickname || '')}… Eat… my… pussy! Oh fuck yes!" she blurts out between moans as you lick her clit and finger her pussy.`);
    scene.text('She eventually reaches orgasm, her twitching pussy expelling your fingers and spraying juices everywhere as she screams in pleasure. Lazar is also close and Albina senses this through his ragged thrusts. "Yes, yes! Cum in my ass! Give it to me!" she moans in encouragement.');
    // TODO-QSP: dynamic text: Lazar picks up the pace and soon lets out a loud grunt as you see his balls twit...
    scene.text(`Lazar picks up the pace and soon lets out a loud grunt as you see his balls twitching above you. Once he's finished unloading into her, he grabs hold of Albina's ass in both hands. "Open wide, ${((s as any).pcs_nickname || '')}!" he orders.`);
    scene.text('You obediently open your mouth as Lazar pulls out of Albina and her ass lets out a loud squelch as she squeezes the cum from her ravaged hole into your mouth.');
    scene.text('She then sits right on your face and starts grinding against you as cum continues to trickle into your mouth. You can hear the sounds of her giving a wet, sloppy blowjob to a groaning Lazar above you.');
    qspCall(s, 'arousal', 'cuni_give', 5);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/threesome4.jpg');
    scene.text('Once she finishes, Albina climbs off of you and pulls you up before she starts making out with you, her tongue lapping away at the cum in your mouth.');
    scene.text('After a few seconds, she breaks the kiss and grimaces as she swallows the cum in her mouth before encouraging you to do the same.');
    scene.text('You gulp down the sticky fluid and Lazar grins. "Until next time, girls."');
    scene.text('Albina teases him by bending over and wiggling her naked ass at him, showing off her still slightly gaping anus.');
    scene.text('You all get dressed before leaving the room and going your separate ways.');
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Lazar_Threesome'] = ((s as any).AlbinaQW['Lazar_Threesome'] ?? 0) + (1);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              ]);
            }
          } else {
            scene.text('You dry yourself before grabbing your clothes from your locker and getting dressed.');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Get ready to leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'cheer');
    qspCall(s, 'outfit', 'remove_backup', 'cheer');
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      qspGoto(s, 'gschool_cheerleading', 'bella');
    }
    qspGoto(s, 'gschool_grounds', 'change_room');
  } },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBella(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).bellawatch ?? 0))) {
    scene.text('As you finish getting dressed, you hear noises coming from out in the hallway. You peer out and notice that the door to the boys\' locker room is ajar, with whispered voices coming from inside. Curious, you sneak over and listen.');
    scene.text('"Get that tight little ass over here!" You then hear a feminine giggle, followed by what sounds like wet, sloppy gagging.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex.jpg');
    scene.text('You\'re even more curious now, and crack the door open a little further to take a peek.');
    scene.text('You see Bella in her cheerleading outfit, kneeling in front of some guy that you don\'t recognize. He has his cock stuffed in her mouth, Bella deepthroating him without too much difficulty.');
    scene.text('Each time he backs off and pulls out of her mouth, Bella gasps for air, letting out a few muffled words before she\'s gagged again. "<i>Flmmpf flmmpf</i> --we talked about this-- <i>flmmpf flfff, flath, mmmph!</i> --we may-- <i>flfff, flath</i> --get caught-- <i>mmmph, blahgggghspf…</i>"');
    scene.text('Noticeably irritated by her comments, the guy punishes Bella by shoving his cock even further down her throat. "Didn\'t your parents ever teach you not to talk with your mouth full?"');
    scene.text('A few seconds later, she pops his drool-coated cock out of her mouth, and he lies back on the bench. He has quite an impressive member standing to attention.');
    scene.text('The guy reclines back, savoring his achievement as Bella wipes the drool from her chin. "Do something like that again, and you\'ll wake up with something… missing…" She brushes her foot against his cock, which twitches at her touch and makes him swallow hard. It looks like he got the message Bella wanted to convey.');
    scene.text('You decide to leave before you\'re caught, but realize that you\'ve left your bag in the locker room, so you quickly run back to grab it.');
    (s as any).bellawatch = 1;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
      { label: 'Don\'t peek', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('It\'s none of your business and you don\'t want to get caught. You quickly back away from the door, only to realize that you\'ve left your bag in the locker room, so you quickly run back to grab it.');
    scene.actions([
      { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).bellawatch ?? 0) === 1) {
      if (((s as any).soniaQW ?? 0)?.['slut'] !== 4) {
        scene.text('You\'re alone in the locker room when you hear the familiar sounds coming from across the hall.');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Watch them again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex.jpg');
    scene.text('Despite only being half dressed, your curiosity gets the better of you and you sneak across the hall to take another peek.');
    scene.text('Peering in, you again see Bella in her cheerleading outfit, kneeling in front of the same guy and deepthroating him.');
    scene.text('Each time he backs off and pulls out of her mouth, Bella gasps for air, letting out a few muffled words before she\'s gagged again. "<i>Flmmpf flmmpf</i> --think I heard-- <i>flmmpf flfff, flath, mmmph!</i> --some footsteps-- <i>flfff, flath</i> --could you-- <i>mmmph, blahgggghspf…</i>"');
    scene.text('The guy takes a brief look over his shoulder, and you quickly duck out of sight.');
    scene.text('"There\'s no one there. My mesmerizing cock must have you imagining things."');
    scene.text('"<i>flmmpf! flfff, flath,</i> --fuck you!-- <i>mmmph…</i>" you hear a flustered Bella respond while flipping him off.');
    scene.text('A few seconds later, she pops his drool-coated cock out of her mouth, and he lies back on the bench. He has quite an impressive member standing to attention.');
    scene.text('The guy reclines back and Bella slowly slides her foot over his cock and seductively giggles. "You ready?"');
    scene.text('You\'ve seen enough and hurry back to the locker room to finish getting dressed before you\'re caught.');
    (s as any).bellawatch = 2;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
          { label: 'Leave them alone', handler: (st: GameState) => {
    scene.text('Knowing that it must be Bella and that guy going at it again, you contemplate going and peeking on them again, but in the end you decide not to and finish getting dressed.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You\'re again alone in the locker room when you hear the familiar sounds coming from across the hall.');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Watch them again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex.jpg');
    scene.text('Despite only being half dressed, your curiosity gets the better of you and you sneak across the hall to take another peek.');
    scene.text('Peering in, you again see Bella in her cheerleading outfit, kneeling in front of the same guy and deepthroating him.');
    scene.text('Each time he backs off and pulls out of her mouth, Bella gasps for air, letting out a few muffled words before she\'s gagged again. "<i>Flmmpf flmmpf flmmpf flfff, flath, mmmph!</i> Feel like-- <i>flfff, flath mmmph, blahgggghspf</i>… Sonia!"');
    scene.text('The guy pops his cock out of her mouth. "Who the hell is Sonia?"');
    scene.text('Bella start laughing. "Only the biggest slut in town. There isn\'t a boy in this entire school whose dick she hasn\'t sucked!"');
    scene.text('You\'ve seen enough and decide to leave them alone before you get caught. You hurry back over to the locker room to finish getting dressed.');
    (s as any).bellawatch = 2;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
          { label: 'Ignore them', handler: (st: GameState) => {
    scene.text('You peek out the door but decide to ignore them. However, just as you\'re about to head back into the locker room, you hear a muffled conversation and can\'t help but wander over and listen in.');
    scene.text('"Who\'s the sluttiest girl at this school?" you hear the guy ask.');
    scene.text('"Oh, it\'s definitely Sonia. She\'ll do anything for a cock!"');
    scene.text('They both start laughing, and the guy continues. "Let\'s mix it up a little. I want you to act like Sonia as you\'re sucking me off."');
    scene.text('"<i>Flmmpf flmmpf flmmpf!</i> Big dick… <i>flfff, flath mmmph, blahgggghspf</i>… Must suck! <i>mmpph!</i> So horny!"');
    scene.text('This has become far too weird, so you quickly return to the locker room to finish getting dressed.');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).bellawatch ?? 0) === 2) {
        scene.text('You\'re again alone in the locker room when you hear the familiar sounds coming from across the hall.');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex.jpg');
    scene.text('You decide to have another peek. Once again, you play it safe, cracking the door open and carefully peering in. As usual, Bella is sucking his dick.');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get a closer look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex2.jpg');
    scene.text('You\'re curious about the identity of the guy she\'s with. You really can\'t imagine Bella sucking off any of the boys in your class.');
    scene.text('Both of their backs are turned to you and you\'re sure that they can\'t hear you, so you decide to push the door open just enough to squeeze in and hide behind the lockers. From this much better vantage point, you can see that her friend is a slightly older guy. You don\'t know him, but you do recognize him from <i>somewhere</i>.');
    scene.text('You keep watching as Bella climbs onto the bench he\'s sitting on, grabs his cock, and guides it into her wet pussy, both of them moaning loudly as it penetrates her. She starts riding him hard and fast, shrieking with pleasure as she takes him balls-deep into her pussy.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasex3.jpg');
    scene.text('You suddenly remember where you recognize this guy from. You\'ve seen him at a few of the games, and now Bella\'s habit of giving him a little show makes sense.');
    scene.text('At this point you\'re far too intrigued to look away. After Bella rides his cock for a few minutes, it pops out of her, and her friend decides to change position and stands. He moves in behind her and pulls her onto all fours before penetrating her and thrusting. He grabs onto her hips and really starts pounding her, causing her to shriek loudly in pleasure.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    (s as any).rand_finish = Math.floor(Math.random() * 4) + 0;
    if (((s as any).rand_finish ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A22'] >= 60) {
      (s as any).rand_finish = 0;
    }
    if ((!((s as any).rand_finish ?? 0))) {
      qspCall(s, 'mood', 'raise', 'small');
      scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/bellacaught.jpg');
      scene.text('At this point, your luck finally runs out. As Bella arches her head back, she catches you peeping. You squeal and try to hide, but Bella quickly scrambles off the bench and chases you around behind the lockers. She walks up to you looking rather unimpressed, her soaking wet pussy dripping juices down her thighs.');
      scene.text('"I… I…" you stammer while Bella just crosses her arms and stares at you.');
      // TODO-QSP: dynamic text: "Do I even want to know why you're peeping, <<$pcs_nickname>>? Forget it. Just d...
      scene.text(`"Do I even want to know why you're peeping, ${((s as any).pcs_nickname || '')}? Forget it. Just don't get the wrong idea, please. This is my friend Yuri, and we…" she says while looking at him with distaste. "<i>…you know</i>, on occasion. Anyway, I'd appreciate it if you didn't tell anyone. God knows what Lizaveta would make of this."`);
      scene.text('You can\'t fault her for having needs, and you know how mean some girls can be with this sort of thing, especially if it\'s with an older guy. You agree to keep quiet and head for the door.');
      scene.text('You\'re pretty sure they\'ll just get right back to what they were doing after you leave. You hurry back to the locker room to grab your belongings.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
      ]);
    } else {
      if (((s as any).rand_finish ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/bellacaught.mp4');
        scene.text('At this point, your luck finally runs out. As Bella arches her head back, she catches you peeping. You squeal and try to hide, but Bella quickly scrambles off the bench, slides her panties on and chases you around behind the lockers. She walks up to you looking rather unimpressed, the massive wet patch on her panties a giveaway at how aroused she\'s feeling.');
        scene.text('"I… I…" you stammer while Bella just crosses her arms and stares at you.');
        scene.text('"What kind of perverted <i>freak</i> are you? Do you get off on watching other people have sex?" You\'re about to reply when she suddenly slaps you hard and you feel a sharp sting pulse through your cheek. "You won\'t tell <i>anyone</i> about what you just saw. Got it?"');
        scene.text('All of this happens as she\'s shoving you out of the locker room, giving you no time to react. "Fucking kids these days…" you hear her mumbling before the door closes in your face. You rub your stinging cheek before walking back to the locker room to grab your belongings.');
        qspCall(s, 'pain', '', 5, 'cheeks', 'slap');
        qspCall(s, 'mood', 'lower', 'medium');
        qspCall(s, 'npc_relationship', 'modify', 'A22', (-5));
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/events/sex/bellasexclimax.jpg');
        scene.text('They\'re way too into it to notice that you\'re watching them.');
        scene.text('After a few minutes, Bella is loudly screeching. "YES! YES! Keep going! I\'m going to--" She doesn\'t finish her sentence before she screams in pleasure, collapsing onto the bench as her orgasm overwhelms her. The guy keeps pounding into her, then suddenly groans in pleasure. He pulls out of her and she flips onto her back, squeezing her large breasts together as he jerks himself.');
        scene.text('Bella giggles as his cum squirts over her breasts. When he\'s done, she takes his cock into her mouth and sucks him off before he pulls her to her feet and drags her off to the showers, where you\'re certain that round two will happen.');
        scene.text('You take your chance and leave while you can, feeling very aroused at what you just witnessed as you hurry back to the locker room to grab your belongings.');
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave them to it', goto: ['gschool_grounds', 'change_room'] },
        ]);
      }
    }
  } },
    ]);
  } },
      { label: 'Ignore them', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You decide to just leave them to it and finish getting dressed.');
    scene.actions([
      { label: 'Finish getting dressed', goto: ['gschool_grounds', 'change_room'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSkippedEv(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-5));
    scene.text('Albina is waiting for you in the hallway and pulls you to the side.');
    // TODO-QSP: '"Where were you yesterday, <<$pcs_nickname>>? '+iif(cheerleadingQW['skipped_ev'] = 1, 'You missed l...
    scene.text('"Sorry, Albina. I… had a family thing I had to deal with yesterday and I didn\'t have time to tell you…" you meekly reply. ');
    // TODO-QSP: dynamic text: She doesn't look completely convinced. "Right… Well if you care about your place...
    scene.text('She doesn\'t look completely convinced. "Right… Well if you care about your place on the team then you\'ll be at the next \'+iif(cheerleadingQW[\'skipped_ev\'] = 1, \'practice session\', \'game\')+\' on time. No excuses."');
    scene.text('You nod at her and she gives you a pat on the shoulder before walking away. It looks like you got off lightly this time.');
  } else {
    if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A23', (-10));
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('You notice Albina angrily watching you walk down the hallway towards her and she drags you to the side when you reach her.');
      // TODO-QSP: dynamic text: "Skipping '+iif(cheerleadingQW['skipped_ev'] = 1, 'practice', 'the game')+' <i>a...
      scene.text(`"Skipping '+iif(cheerleadingQW['skipped_ev'] = 1, 'practice', 'the game')+' <i>again</i>, ${((s as any).pcs_nickname || '')}?! I thought I told you that you were to be '+iif(cheerleadingQW['skipped_ev'] = 1, 'at practice', 'at the next game')+'… <b>no excuses</b>?! I don't care about what miserable story you have to defend yourself with. You either commit to the squad or you're out. Don't test me, ${((s as any).pcs_nickname || '')}!"`);
      scene.text('You don\'t have a chance to speak before she storms off. Maybe it\'s best for both of you if you stopped pissing her off?');
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['skipped'] === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A23', (-20));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (3);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (1);
        qspCall(s, 'mood', 'lower', 'large');
        scene.text('You\'re walking down the hallway when you clock a furious Albina heading straight for you. You barely have time to react before she grabs your shirt and forcefully pins you against the lockers, silencing the hall as everyone looks at you.');
        // TODO-QSP: dynamic text: Albina glares directly into your eyes. "ARE YOU DOING THIS TO MOCK ME, YOU FUCKI...
        scene.text('Albina glares directly into your eyes. "ARE YOU DOING THIS TO MOCK ME, YOU FUCKING BITCH?! I\'VE GIVEN YOU CHANCE AFTER FUCKING CHANCE AND YOU STILL SKIP \'+iif(cheerleadingQW[\'skipped_ev\'] = 1, \'PRACTICE\', \'GAME DAY\')+\'?! Luckily for you, Vicky convinced me to give you one. Last. Fucking. Chance. You dare miss even ONE FUCKING SECOND of our next \'+iif(cheerleadingQW[\'skipped_ev\'] = 1, \'session\', \'performance\')+\', then you better pray that I don\'t fucking find you."');
        scene.text('She releases you and angrily storms off, shoving other students out of her way. You compose yourself and continue on your way, trying to ignore the stares.');
      } else {
        qspCall(s, 'npc_relationship', 'set', 'A23', 10);
        qspCall(s, 'npc_relationship', 'modify', 'A18', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A15', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A22', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A13', 'dislike');
        qspCall(s, 'npc_relationship', 'modify', 'A19', 'dislike');
        ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = (-2);
        qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_practice');
        qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_games');
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (7);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (10);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (3);
        qspCall(s, 'mood', 'lower', 'huge');
        scene.text('As you walk down the hallway, you hear your name echo off the walls and the angry stomping of heels as you see an absolutely livid Albina, fists clenched, storming down the hallway at you, Vicky following close behind.');
        scene.text('"You think this is funny, don\'t you? Well, you\'re FUCKING DONE!!" Vicky stops her from attacking you in a fit of rage.');
        scene.text('"That\'s right. Done. I\'m kicking your fucking bitch ass off the team. Right here, right fucking now. If I EVER see you…" She walks right up to you. "Then you better hope I\'m in a good fucking mood, bitch!"');
        scene.text('She stares at you enraged before Vicky places a hand on her shoulder and leads her away, looking extremely disappointed with you.');
        scene.text('The other students start talking among themselves as you\'re left feeling somewhat intimidated by Albina\'s actions.');
      }
    }
  }
  if (((s as any).cheerleadingQW ?? 0)?.['skipped_ev'] === 1) {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped_ev'] = 0;
  }
  if (((s as any).cheerleadingQW ?? 0)?.['skipped_g_ev'] === 1) {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['skipped_g_ev'] = 0;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadersReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: As you enter the locker room, Albina motions you aside. "What the hell, <<$pcs_n...
  scene.text(`As you enter the locker room, Albina motions you aside. "What the hell, ${((s as any).pcs_nickname || '')}!? Who knocked you up? You can't do this if you're pregnant! I'm sorry, but I'm going to have to cut you loose," she says while placing a hand on your shoulder.`);
  scene.text('You nod in understanding and say your goodbyes before Albina walks back to the group, telling them to hurry up and finish getting changed.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A23'] = 1;
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_practice');
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_games');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
  ]);
  scene.build();
}

function enterCheerleaderEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You see the disapproving looks on the girls faces as you enter the locker room. ...
  scene.text(`You see the disapproving looks on the girls faces as you enter the locker room. Albina walks over to you and, looking severely disappointed, shakes her head. "Why ${((s as any).pcs_nickname || '')}? You used to be cool, but now you've gone and done this to yourself. I'm sorry, but I just can't have someone like you being associated with us anymore."`);
  scene.text('She motions to the door and you walk out in shame, tears welling up in your eyes.');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 0;
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_practice');
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_games');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
  ]);
  scene.build();
}

function enterQuit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/changing.jpg');
  // TODO-QSP: dynamic text: You enter the locker room and look around for Albina, spotting her as she finish...
  scene.text(`You enter the locker room and look around for Albina, spotting her as she finishes getting ready. You walk over to her and she gives you a puzzled stare. "Hurry up and get dressed ${((s as any).pcs_nickname || '')}, we haven't got all day to wait for you!" she barks. You meekly smile at her in response. "Well? Hurry up and spit it out." she says while motioning for you to hurry up.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you want to quit the cheerleading team', handler: (st: GameState) => {
    scene.text('"I… I don\'t want to be a part of this anymore. I\'ve thought it over and this just isn\'t for me."');
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
      // TODO-QSP: dynamic text: Albina just rolls her eyes at you. "Whatever, <<$pcs_nickname>>. I don't really ...
      scene.text(`Albina just rolls her eyes at you. "Whatever, ${((s as any).pcs_nickname || '')}. I don't really care if you want to be here or not. I have <i>actual</i> cheerleaders to lead, so if you want to go, then fuck off and don't come back."`);
      scene.text('She then pushes you aside and walks out of the room. The other girls then follow her out, leaving you alone.');
    } else {
      // TODO-QSP: dynamic text: Albina gives you an even bigger puzzled stare. "What? Why? Never mind. If you wa...
      scene.text(`Albina gives you an even bigger puzzled stare. "What? Why? Never mind. If you want to leave, then I won't stop you. Just know that I thought you had some real potential here ${((s as any).pcs_nickname || '')}. And thanks for telling me and not just disappearing like <i>some other people</i> have," she adds.`);
      scene.text('You breathe a sigh of relief as she gathers the girls and leaves, letting you go on your way.');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['quest_stage'] = 0;
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_practice');
    qspCall(s, 'calendar', 'pack', 'remove', 'cheerleading_games');
    qspGoto(s, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    { label: 'Change your mind', handler: (st: GameState) => {
    scene.text('"Err.. It\'s nothing. Sorry."');
    // TODO-QSP: dynamic text: Albina looks at you in confusion. "Are you okay, <<$pcs_nickname>>?"
    scene.text(`Albina looks at you in confusion. "Are you okay, ${((s as any).pcs_nickname || '')}?"`);
    scene.text('You look at the floor as you try and stutter out an answer.');
    scene.text('Albina stops you. "Just take today off. There\'s clearly something bothering you and you obviously don\'t feel like telling me what it is. Come back when you deal with it."');
    scene.text('You just nod as Albina dismisses you.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'poster':
      enterPoster(s, scene);
      break;
    case 'poster_repeat':
      enterPosterRepeat(s, scene);
      break;
    case 'tryouts':
      enterTryouts(s, scene);
      break;
    case 'afterschool_practice':
      enterAfterschoolPractice(s, scene);
      break;
    case 'afterschool_game':
      enterAfterschoolGame(s, scene);
      break;
    case 'practice':
      enterPractice(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'bella':
      enterBella(s, scene);
      break;
    case 'skipped_ev':
      enterSkippedEv(s, scene);
      break;
    case 'cheerleaders_react':
      enterCheerleadersReact(s, scene);
      break;
    case 'cheerleader_end':
      enterCheerleaderEnd(s, scene);
      break;
    case 'quit':
      enterQuit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_cheerleading: LocationDef = {
  name: 'gschool_cheerleading',
  title: '(Last chance to join cheerleading)',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
