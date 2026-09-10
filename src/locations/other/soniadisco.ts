import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).month ?? 0) > 9  &&  ((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['fallday'] + 6) {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] < 7) {
      (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0) -1;
      (s as any).soniaQW['soniafall'] = ((s as any).soniaQW['soniafall'] ?? 0) + (1);
    } else {
      (s as any).soniaQW['slut'] = 1;
      (s as any).soniaQW['fallenangel'] = 1;
      (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0);
      (s as any).soniaQW['slutdays'] = ((s as any).daystart ?? 0);
      (s as any).npc_grupTipe['A25'] = 5;
      (s as any).npcGoSchool['A25'] = '<a href="exec:gt \'gschool_outcast_chats\', \' + $lcase($npc_usedname[\'A25\']) + \'"><<$npc_usedname["A25"]>></a>';
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['fallday'] + 6) {
    (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0);
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 0) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco0'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco'] }]);
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco0'] }]);
  }
  scene.build();
}

function enterDisco0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['soniafall'] === 0) {
    (s as any).soniaQW['soniafall'] = 1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/0.jpg');
  scene.text('You notice Sonia out on the dance floor really working her body. She seems to be dancing like there\'s no tomorrow. As you watch, she stops from time to time to grab some drinks from the gopniks, who seem happy to supply her with alcohol.');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadance.jpg');
    scene.text('You\'ve heard the rumors that Sonia has started hanging around the gopniks lately; drinking, partying and generally cutting loose. Watching her now though, you can see that she\'s getting totally wasted and is starting to really grind on any and everyone that comes up to dance with her.');
    scene.text('After a while, she\'s barely able to stand up on her own and is hanging onto the guys she\'s grinding into to keep her balance.');
    if (((s as any).soniaQW ?? 0)?.['soniafall'] < 3) {
      qspCall(s, 'soniadisco', 'watchorhelp');
    } else {
      qspCall(s, 'soniadisco', 'soniashowsboobs');
    }
  } },
  ]);
  scene.build();
}

function enterWatchorhelp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
  }
  scene.actions([
    { label: 'Just watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadance.jpg');
    scene.text('The boys are getting quite frisky with Sonia, who\'s hardly putting up any resistance. Their hands roam all over her as she just stumbles around, too drunk to care what\'s happening.');
    scene.text('Several minutes later, Katja walks up to Sonia and tries to get her to leave the dance floor, but she jerks away and says something that leaves Katja just shaking her head before walking away.');
    scene.text('Eventually, Sonia stumbles over to the girls\' restroom looking a bit sick, and you notice Katja follow her. After a while, the two walk out and leave the disco, Katja presumably taking Sonia home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
    { label: 'Help Sonia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadance.jpg');
    scene.text('The boys are getting quite frisky with Sonia, who\'s hardly putting up any resistance. Their hands roam all over her as she just stumbles around, too drunk to care what\'s happening.');
    scene.text('You shake your head in disbelief. If she isn\'t careful, some guy is going to drag her away and take advantage of her.');
    scene.text('You decide to walk over. "Slow down, Sonia! You\'re pretty wasted and giving the guys the wrong idea."');
    scene.text('She turns and gives you a sour look. "What are you, my mother? God, I\'m tired of having to always be the good girl! I just want to cut loose and party for once!"');
    scene.text('With that, she starts grinding her ass on some guy\'s crotch, who looks more than happy to oblige.');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadance.jpg');
    scene.text('You just shake your head and leave Sonia, who continues dancing around and grinding on boys. She looks like she\'s having fun, but you can see others watching and whispering about her acting like a slut.');
    scene.text('Several minutes later, Katja walks up to Sonia and tries to get her to leave the dance floor, but she jerks away and says something that leaves Katja just shaking her head before walking away.');
    scene.text('Eventually, Sonia stumbles over to the girls\' restroom looking a bit sick, and you notice Katja follow her. After a while, the two walk out and leave the disco, Katja presumably taking Sonia home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Convince her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You stand in front of her and grab hold of her arms to keep her still. "Look around, Sonia! You\'re totally wasted and grinding on these guys like you plan to fuck them all!"');
    scene.text('She resists for a moment, but then your words seem to sink in and she drunkenly blinks a few times before looking around. She blushes and seems to sober up a little, the realization of just how wasted she was suddenly hitting her.');
    scene.text('She gives you a grateful nod and awkwardly tries to leave the dance floor, but the guys try to keep her around. You have to intervene on her behalf and make them let go of her. The two of you finally make it to the door and leave the dance hall.');
    // TODO-QSP: dynamic text: Once outside, she smiles at you. "Thanks, <<$pcs_nickname>>. I guess I got a lit...
    scene.text(`Once outside, she smiles at you. "Thanks, ${((s as any).pcs_nickname ?? 0)}. I guess I got a little carried away."`);
    scene.text('"Maybe you should go home. You\'re pretty drunk," you reply.');
    scene.text('She nods and starts to head out, but you notice she can barely walk. When you start to help her, she pulls away. "I can handle it myself!"');
    scene.text('You sigh. "Just be careful."');
    scene.text('She rolls her eyes. "It was just a little harmless fun! No one cares!"');
    scene.text('She then stumbles away without another word.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniashowsboobs(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Boobs', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) > 19) {
      (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/titflash.jpg');
    scene.text('The boys are getting quite frisky with Sonia, who looks to be reveling in the attention. She keeps dancing, not seeming to care about them feeling her up.');
    scene.text('She then grabs the top of her dress and exposes her bare breasts for everyone to see. The guys, and even a few of the girls, start to cheer and whistle, but you notice others shaking their heads and whispering. You know Sonia is starting to earn a bad reputation at school.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/titflash.jpg');
    scene.text('Sonia continues to dance, perhaps more energetically than before as her breasts bounce around freely. ');
    scene.text('Several minutes later, Katja walks up to Sonia and tries to get her to leave the dance floor, but she jerks away and says something that leaves Katja just shaking her head before walking away.');
    scene.text('Eventually, Sonia stumbles over to the girls\' restroom looking a bit sick, and you notice Katja follow her. After a while, the two walk out and leave the disco, Katja presumably taking Sonia home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Help Sonia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/titflash.jpg');
    scene.text('Sonia continues to dance, perhaps more energetically than before as her breasts bounce around freely. ');
    scene.text('You shake your head in disbelief and decide you need to do something before she completely ruins her reputation.');
    scene.text('You walk over to her. "Sonia, what are you doing?! Everyone can see your tits!"');
    scene.text('She turns and gives you a sour look. "What are you, my mother? God, I\'m tired of having to always be the good girl! I just want to cut loose and party for once!"');
    scene.text('With that, she starts grinding her ass on some guy\'s crotch, who looks more than happy to oblige.');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/titflash.jpg');
    scene.text('You just shake your head and leave Sonia, who continues dancing around and grinding on boys with her breasts out. She looks like she\'s having fun, but you can see others watching and whispering about her acting like a slut.');
    scene.text('Several minutes later, Katja walks up to Sonia and tries to get her to leave the dance floor, but she jerks away and says something that leaves Katja just shaking her head before walking away.');
    scene.text('Eventually, Sonia stumbles over to the girls\' restroom looking a bit sick, and you notice Katja follow her. After a while, the two walk out and leave the disco, Katja presumably taking Sonia home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
      { label: 'Convince her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You stand in front of her and grab hold of her arms to keep her still. "Look around, Sonia! You\'re totally wasted and flashing your tits at everybody! People are going to talk about this!"');
    scene.text('She resists for a moment, but then your words seem to sink in and she drunkenly blinks a few times before looking around. She blushes and seems to sober up a little, the realization of just how wasted she was suddenly hitting her.');
    scene.text('She gives you a grateful nod and starts to pull her dress back up; the guys start giving you dirty looks. When you try to the leave the dance floor, the guys try to stop her. You have to intervene on her behalf and make them let go of her. The two of you finally make it to the door and leave the dance hall.');
    // TODO-QSP: dynamic text: Once outside, she smiles at you. "Thanks, <<$pcs_nickname>>. I guess I got a lit...
    scene.text(`Once outside, she smiles at you. "Thanks, ${((s as any).pcs_nickname ?? 0)}. I guess I got a little carried away."`);
    scene.text('"Maybe you should go home. You\'re pretty drunk," you reply.');
    // TODO-QSP: dynamic text: She nods. "Yeah, I guess I should. Thanks again, <<$pcs_nickname>>."
    scene.text(`She nods. "Yeah, I guess I should. Thanks again, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Let her go', goto: ['pav_disco', ''] },
      { label: 'Offer to walk her home', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You catch up to her. "Here, let me walk you home," you tell her.');
    scene.text('It looks like she\'s about to protest and tell you to mind your own business, but then she just nods and smiles at you. "You don\'t have to do that. I can make it myself."');
    scene.text('You nod. "I know, but us girls have to look out for each other, you know?"');
    scene.text('"Yeah, I guess you\'re right," she says with a friendly smile.');
    scene.actions([
      { label: 'Walk her home', goto: ['soniadisco', 'walkhome'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDisco(s: GameState, scene: SceneBuilder): void {
  (s as any).soniaQW['soniafall'] = ((s as any).soniaQW['soniafall'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/0.jpg');
  if (((s as any).soniaQW ?? 0)?.['soniafall'] === 0) {
    scene.text('Sonia is hanging out with the gopniks. Before you have a chance to walk over and see what\'s going on, Vitek takes her by the hand and leads her out of the disco with Dan, Pauline and Vasily following right behind them. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it.');
  } else {
    scene.text('You see Vitek and some of the other gopniks hanging out, watching Sonia get drunk and dancing wildly. You notice them talking among themselves before Vitek says something that shuts them all up and he walks over to Sonia. Instead of dancing with her though, he whispers something in her ear.');
    scene.text('She looks at him and smiles before nodding her head. Vitek then leads her off the dance floor and out of the disco. Several of the other gopniks scramble to catch up to the two of them after he waves them over. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it.');
    scene.text('Sonia is hanging out with Vitek and some of his friends. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it. Before too long, they all leave together, heading out of the disco.');
  }
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    scene.text('Vitek notices you watching them and pauses a for moment, as if he\'s unsure what to do. Then he smiles and walks over to you, giving you a kiss. "Hey babe, me and the boys are going to go hang out. You should stay here and dance a little or something. I\'ll be back shortly."');
    scene.text('You notice Pauline and Sonia are with them. "What? What about Pauline and Sonia? They\'re going, so why can\'t I?" You ask him. You notice the rest have already left, heading outside.');
    scene.text('His face darkens as you question him and he grabs your arms hard enough that it hurts. "I said no and that\'s final, so stay here! Understand?"');
    scene.text('You quickly nod and he relaxes his grip. "I understand."');
    scene.text('He lets go of your arms. "Good girl. Now go have fun." He gives your ass a slap before he turns to follow the rest of the gopniks outside.');
    scene.actions([
      { label: 'Watch them leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: Vitek notices you watching them and grins before waving you over. "Hey, <<$pcs_n...
    scene.text(`Vitek notices you watching them and grins before waving you over. "Hey, ${((s as any).pcs_nickname ?? 0)}. We're going out for a drink and to have some fun… Come join us."`);
    scene.text('Just the way he says it tells you they\'re up to something…');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      // TODO-QSP: gt 'soniadisco', 'dance', 'declineinvite'
    } else {
      // TODO-QSP: gt 'soniadisco', 'dance1', 'declineinvite'
    }
  } },
      ]);
    }
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Vitek notices you watching them and frowns. "What the fuck are you looking at, nerd? Get lost!"');
      scene.text('A few seconds later, they all head out. Vasily glances back at you and shakes his head, letting you know not to follow them.');
      scene.actions([
        { label: 'Watch them leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
      ]);
    } else {
      scene.text('Vitek notices you watching them and frowns. "What the fuck are you looking at, loser? Get lost!" ');
      scene.text('A few seconds later, they all head out. Vasily glances back at you and shakes his head, letting you know not to follow them.');
      if (((s as any).soniaQW ?? 0)?.['soniafall_block'] >= 4) {
        scene.text('Vitek notices you watching them and frowns. "What the fuck are you looking at, bitch? You had your chance to hang out with us and you blew it, so scram!"');
        scene.text('A few seconds later, they all head out. Vasily glances back at you and shakes his head, letting you know not to follow them.');
        scene.actions([
          { label: 'Watch them leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: Vitek notices you watching them and grins, waving you over. "Hey, <<$pcs_nicknam...
        scene.text(`Vitek notices you watching them and grins, waving you over. "Hey, ${((s as any).pcs_nickname ?? 0)}. We're going out for a drink… You should come join us."`);
        qspCall(s, 'willpower', 'drink', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      // TODO-QSP: gt 'soniadisco', 'dance', 'declineinvite'
    } else {
      // TODO-QSP: gt 'soniadisco', 'dance1', 'declineinvite'
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Go with them', goto: ['soniadisco', 'join_them'] },
        ]);
      }
      scene.actions([
        { label: 'Watch them leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Go with them', goto: ['soniadisco', 'join_them'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'disco0':
      enterDisco0(s, scene);
      break;
    case 'watchorhelp':
      enterWatchorhelp(s, scene);
      break;
    case 'soniashowsboobs':
      enterSoniashowsboobs(s, scene);
      break;
    case 'disco':
      enterDisco(s, scene);
      break;
    default:
      enterCikl(s, scene);
      break;
  }
}

export const soniadisco: LocationDef = {
  name: 'soniadisco',
  title: 'You notice Sonia out on the dance floor really working her b',
  region: 'other',
  enter: enter,
};
