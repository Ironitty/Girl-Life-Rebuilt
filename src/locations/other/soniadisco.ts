import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).month ?? 0) > 9  &&  ((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['fallday'] + 6) {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] < 7) {
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0) -1;
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall'] = ((s as any).soniaQW['soniafall'] ?? 0) + (1);
    } else {
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['slut'] = 1;
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallenangel'] = 1;
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0);
      if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['slutdays'] = ((s as any).daystart ?? 0);
      if (!(s as any).npc_grupTipe) (s as any).npc_grupTipe = {}; (s as any).npc_grupTipe['A25'] = 5;
      if (!(s as any).npcGoSchool) (s as any).npcGoSchool = {}; (s as any).npcGoSchool['A25'] = '<a href="exec:gt \'gschool_outcast_chats\', \'\' + $lcase($npc_usedname[\'A25\']) + \'\'">' + qspUntranslated(s, "npc_usedname[\"A25\"]>", { location: "soniadisco" }) + '</a>';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).soniaQW ?? 0)?.['fallday'] + 6) {
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0);
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 0) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco0'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco'] }]);
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['soniadisco', 'disco0'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDisco0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['soniafall'] === 0) {
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall'] = 1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/0.jpg');
  scene.text('You notice Sonia out on the dance floor really working her body. She seems to be dancing like there\'s no tomorrow. As you watch, she stops from time to time to grab some drinks from the gopniks, who seem happy to supply her with alcohol.');
  // TODO-QSP: end
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
    if (!(s as any).discobloc) (s as any).discobloc = {}; (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
  }
  // TODO-QSP: end
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
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Boobs', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) > 19) {
      if (!(s as any).discobloc) (s as any).discobloc = {}; (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
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
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (2);
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
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall'] = ((s as any).soniaQW['soniafall'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/0.jpg');
  if (((s as any).soniaQW ?? 0)?.['soniafall'] === 0) {
    scene.text('Sonia is hanging out with the gopniks. Before you have a chance to walk over and see what\'s going on, Vitek takes her by the hand and leads her out of the disco with Dan, Pauline and Vasily following right behind them. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it.');
  } else {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 3) {
      scene.text('You see Vitek and some of the other gopniks hanging out, watching Sonia get drunk and dancing wildly. You notice them talking among themselves before Vitek says something that shuts them all up and he walks over to Sonia. Instead of dancing with her though, he whispers something in her ear.');
      scene.text('She looks at him and smiles before nodding her head. Vitek then leads her off the dance floor and out of the disco. Several of the other gopniks scramble to catch up to the two of them after he waves them over. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it.');
    } else {
      scene.text('Sonia is hanging out with Vitek and some of his friends. Vasily\'s carrying a paper bag with the neck of a bottle sticking out the top of it. Before too long, they all leave together, heading out of the disco.');
    }
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
    if (((s as any).grupTipe ?? 0) === 4) {
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
          { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance', '\'declineinvite\''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1', '\'declineinvite\''] }]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Go with them', goto: ['soniadisco', 'join_them'] },
      ]);
    } else {
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
        if (((s as any).grupTipe ?? 0) === 5) {
          scene.text('Vitek notices you watching them and frowns. "What the fuck are you looking at, loser? Get lost!" ');
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
                { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance', '\'declineinvite\''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1', '\'declineinvite\''] }]);
    }
  } },
              ]);
            }
            scene.actions([
              { label: 'Go with them', goto: ['soniadisco', 'join_them'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterJoinThem(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
  if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
  if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A24', 'like');
  scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
  scene.text('You\'re not sure whether he invited you along because he wants you to come, or just because he\'s afraid you would rat them out. Either way, you follow the guys outside to a small table around the back of the community center. Vasily pours the vodka into some plastic cups and hands everybody one, including you. Vitek, Sonia, Dan, Vasily and Pauline are here along with you.');
  if (((s as any).soniarushout ?? 0) === 1) {
    scene.text('You join them outside at the small table they\'ve been using behind the community center. Finding yourself next to Sonia, you turn and whisper in her ear. "I\'m surprised you came back to party with them after last time."');
    scene.text('She blushes a little. "I won\'t get that drunk again."');
  }
  qspCall(s, 'willpower', 'drink', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    qspCall(s, 'soniadisco', 'peerpressure');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a drink with them', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You enjoy their company, only slowly sipping the vodka and alternating it with lemonade. Sonia just slams down shot after shot. When the cups are empty, Vasily offers everyone a refill.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    qspCall(s, 'soniadisco', 'peerpressure');
  } },
      ]);
    }
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([
        { label: 'Encourage her', goto: ['soniadisco', 'soniadrinkmore'] },
      ]);
    }
    scene.actions([
      { label: 'Take another drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    qspCall(s, 'soniadisco', 'peerpressure');
  } },
      { label: 'Caution Sonia', handler: (st: GameState) => {
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['help'] = ((s as any).soniaQW['help'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
    qspCall(s, 'stat', '');
    qspCall(s, 'soniadisco', 'peerpressure');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniadrinkmore(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall'] = ((s as any).soniaQW['soniafall'] ?? 0) + (1);
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['encourage'] = ((s as any).soniaQW['encourage'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A24', 'like');
  qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadrink.jpg');
  scene.text('You smile and take hold of her hand that\'s holding the cup and encourage her to sit back down. "What\'s the rush, Sonia? We\'re having a good time here, right?" you ask her, extending her arm and cup towards Vasily, who happily refills it.');
  scene.text('Sonia grins at you before she downs about half the cup in one gulp, coughing a little as she does. You all talk and drink some more as Sonia finishes the cup and, as the boys start passing out more, lets her cup be filled again.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take another drink', handler: (st: GameState) => {
    qspCall(s, 'soniadisco', 'peerpressure');
  } },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/sonia/1.jpg');
  if (((s as any).hour ?? 0) > 19) {
    if (!(s as any).discobloc) (s as any).discobloc = {}; (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'declineinvite') {
    scene.text('You don\'t really want to drink alcohol right now, so you just shake your head. "Thanks for the invite, but I think I\'d rather stay here right now. You guys have fun!"');
    scene.text('A few minutes later, you see them coming back to the disco. Vitek occasionally steadies Sonia when she nearly falls over; you can tell she\'s totally hammered.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'staytoend') {
      scene.text('You go back to the disco with the rest of the group, where ');
    } else {
      scene.text('Not wanting to stick around, you return to the dance. A while later, the rest of the group returns, and ');
    }
  }
  scene.text('Sonia immediately runs to the dance floor. Her drunken stumbling doesn\'t look too much like dancing, but she\'s having fun. In her enthusiasm to pull off some experimental dance moves, she doesn\'t notice that one of her straps has slid down.');
  scene.text('Since she\'s not wearing a bra, one of her breasts is fully exposed, and it bounces whenever she jumps.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/1.jpg');
    scene.text('Sonia dances around while grinding on boys. She looks like she\'s having fun, but you can see others watching and whispering about her acting like a slut.');
    scene.text('Several minutes later, Katja walks up to Sonia and tries to get her to leave the dance floor, but she jerks away and says something that leaves Katja just shaking her head before walking away.');
    scene.text('Eventually, Sonia stumbles over to the girls\' restroom looking a bit sick, and you notice Katja follow her. After a while, the two walk out and leave the disco, Katja presumably taking Sonia home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
    { label: 'Approach Sonia', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/1.jpg');
    scene.text('Sonia dances around while grinding on boys. She looks like she\'s having fun, but you can see others watching and whispering about her acting like a slut.');
    scene.text('You shake your head in disbelief. Maybe you should do something?');
    scene.actions([
      { label: 'Help her out', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (5);
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.img('images/characters/pavlovsk/school/girl/sonia/0.jpg');
    scene.text('You stand in front of her to block most of the stares. You can\'t think of a way to tactfully say what you need to over the loud, thumping music, so you sigh and yell in her ear. "Sonia! Your boob is hanging out! You should cover up!"');
    scene.text('Sonia smiles drunkenly at you, but after a few seconds she finally gets what you\'re trying to tell her. She gives you a grateful nod and awkwardly tries to fix herself in the middle of the dance floor.');
    scene.text('She manages to cover herself and looks around. Only now starting to realize what\'s going on, she blushes a bit.');
    scene.text('"Maybe you should go home? You\'re pretty wasted."');
    scene.text('She nods and starts to head out, but you notice she can barely walk, so you help her outside. With the fresh air, she seems a little more stable. You could walk her home or go back to the disco.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to dance', goto: ['pav_disco', ''] },
      { label: 'Walk her home', goto: ['soniadisco', 'walkhome'] },
    ]);
  } },
      { label: 'Pull the other strap down too', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (2);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    scene.img('images/characters/pavlovsk/school/girl/sonia/2.jpg');
    scene.text('"You have a nice set of tits, Sonia. I can see why you\'d be so willing to show them off to the world."');
    scene.text('She looks at you with a slightly puzzled look on her face, but never stops dancing. "Wha- What are you talking about?"');
    scene.text('With a grin, you put your hand on her other shoulder and slide that strap down too, fully exposing her breasts to everyone looking her way. She barely notices and doesn\'t understand why you\'re staring at her so intently.');
    scene.text('Once you walk away, she dances with both her breasts bouncing freely for several minutes before some guys pawing at her exposed breasts finally make her notice. She blushes, but also laughs about it as she puts everything back in place.');
    qspCall(s, 'arousal', 'erotic_nudity', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPeerpressure(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 2) {
    if (((s as any).soniadisco_peerpressuretrigger ?? 0) === 'cautionsonia') {
      scene.img('images/characters/pavlovsk/school/girl/sonia/disco/soniadrink.jpg');
    } else {
      scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    }
  } else {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] === 3) {
      scene.img('images/characters/pavlovsk/school/girl/sonia/disco/panties1.jpg');
    } else {
      if (((s as any).soniaQW ?? 0)?.['soniafall'] === 4) {
        scene.img('images/characters/pavlovsk/school/girl/sonia/disco/boobs.jpg');
      } else {
        if (((s as any).soniaQW ?? 0)?.['soniafall'] === 5) {
          scene.img('images/characters/pavlovsk/school/girl/sonia/disco/pussy.jpg');
        } else {
          if (((s as any).soniaQW ?? 0)?.['soniafall'] === 6) {
            scene.img('images/characters/pavlovsk/school/girl/sonia/disco/popsicle1.jpg');
          } else {
            scene.img('images/characters/pavlovsk/school/girl/sonia/disco/popsicle2.jpg');
          }
        }
      }
    }
  }
  if (((s as any).soniadisco_peerpressuretrigger ?? 0) === 'declinedrink') {
    scene.text('You shake your head and decline. You don\'t want to get too drunk and instead settle for just watching.');
  } else {
    if (((s as any).soniadisco_peerpressuretrigger ?? 0) === 'takedrink') {
      qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
      scene.text('You smile and hold up your cup for a refill. Everyone is laughing and having a good time.');
    } else {
      if (((s as any).soniadisco_peerpressuretrigger ?? 0) === 'cautionsonia') {
        qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
        scene.text('You move over to sit next to Sonia, turning down the drink. "Slow down, Sonia! You don\'t want to get wasted."');
        scene.text('She turns and gives you a sour look.');
        if (((s as any).soniaQW ?? 0)?.['help'] > 0) {
          // TODO-QSP: dynamic text: "We've already been over this, <<$pcs_nickname>>! You aren't my mother, so how a...
          scene.text(`"We've already been over this, ${((s as any).pcs_nickname ?? 0)}! You aren't my mother, so how about you chill out and enjoy it like the rest of us?"`);
          scene.text('She grabs the bottle and chugs down a quarter of it as the gopniks all encourage her to keep going.');
        } else {
          scene.text('"What are you, my mother? God, I\'m tired of always being the good girl! I just want to cut loose and party for once!"');
          scene.text('The gopniks all cheer and encourage her to drink some more.');
        }
      } else {
        if (((s as any).soniadisco_peerpressuretrigger ?? 0) === 'soniadrinkmore') {
          if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
            scene.text('You smile and hold up your cup for a refill. Everyone is laughing and having a good time. When it comes time for a third refill, Vasily refuses.');
            scene.text('"Good girls shouldn\'t get drunk around bad boys," he whispers.');
          } else {
            qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
            scene.text('You smile and hold up your cup for a refill. Everyone is laughing and having a good time.');
          }
        }
      }
    }
  }
  if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 2) {
    qspCall(s, 'soniadisco', 'notpressured');
  } else {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] === 3) {
      qspCall(s, 'soniadisco', 'pressuredforpanties');
    } else {
      if (((s as any).soniaQW ?? 0)?.['soniafall'] === 4) {
        qspCall(s, 'soniadisco', 'pressuredfortits');
      } else {
        if (((s as any).soniaQW ?? 0)?.['soniafall'] === 5) {
          qspCall(s, 'soniadisco', 'pressuredforpussy');
        } else {
          if (((s as any).soniaQW ?? 0)?.['soniafall'] === 6) {
            qspCall(s, 'soniadisco', 'pressuredforblowjob');
          } else {
            qspCall(s, 'soniadisco', 'pressuredforgangbang');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotpressured(s: GameState, scene: SceneBuilder): void {
  scene.text('Sonia does have more, a lot more, and it doesn\'t take long before she\'s wasted.');
  scene.text('"I want to go dancing! Let\'s go back to the disco!" she cheerfully exclaims with a slight slur in her voice and a cheeky grin on her face.');
  if (((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'cautionsonia'  &&  ((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'soniadrinkmore') {
    scene.actions([
      { label: 'Encourage her', goto: ['soniadisco', 'soniadrinkmore'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
  ]);
  scene.build();
}

function enterPressuredforpanties(s: GameState, scene: SceneBuilder): void {
  scene.text('Sonia\'s really getting wasted now. Taking advantage of the situation, Dan approaches her. "Hey, Sonia. What color are your panties?"');
  scene.text('She looks a little confused. "What?"');
  scene.text('"You were going to show us what color your panties are," he says.');
  scene.text('Sonia blinks. "I was?" she asks, and all the guys agree. She glances at you and you nod.');
  scene.text('Pauline offers more helpful advice. "Go on! Don\'t be a tease."');
  scene.text('With the encouragement, Sonia stands up and turns around, pulling up her dress to show off the back of her panties as Pauline records the whole thing on her phone.');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) < 6  ||  ((s as any).grupTipe ?? 0) === 4) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/panties2.jpg');
    scene.text('"Now show us the front!" Vasily grins as the boys all cheer.');
    scene.text('With a huge grin, Sonia turns to face everyone and pulls up her dress again, but seems to realize that maybe she\'s going too far and starts to blush.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" she yells with a slight slur in her voice.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    if (((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'cautionsonia'  &&  ((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'soniadrinkmore') {
      scene.actions([
        { label: 'Encourage her', goto: ['soniadisco', 'soniadrinkmore'] },
      ]);
    }
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/panties2.jpg');
    scene.text('"Now show us the front!" Vasily grins as the boys all cheer.');
    scene.text('With a huge grin, Sonia turns to face everyone and pulls up her dress again.');
    // TODO-QSP: dynamic text: When Sonia's done flashing everyone her panties, Dan looks at you. "Now show us ...
    scene.text(`When Sonia's done flashing everyone her panties, Dan looks at you. "Now show us your panties, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You feel everyone\'s eyes shift towards you. Even with everyone encouraging you, you don\'t know what to do. Pauline continues to record Sonia with her phone.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You shake your head. "I\'m not going to do that."');
    scene.text('Vitek gets visibly angry. "Then why are you here? We give you free drinks and this is how you repay us? Fuck you then, get out!"');
    scene.text('Dan gets up and forces you to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Show your panties', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/panties.jpg');
    scene.text('Pauline starts to record you as you pull your clothes aside and quickly flash your panties.');
    scene.text('When you cover back up, Sonia yells out with a slight slur in her voice. "I want to go dancing! Let\'s go back to the disco!"');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not wearing panties', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You blush a little. "I\'m not wearing any…"');
    scene.text('"Then show us your pussy, slut!"');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You shake your head. "I\'m not going to do that!"');
    scene.text('Vitek gets visibly angry. "Then why are you here? We give you free drinks and this is how you repay us? Fuck you then, get out and don\'t come back!"');
    scene.text('Dan gets up and forces you to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show your pussy', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/pussy.jpg');
    scene.text('Pauline starts to record you as you pull your clothes aside and quickly flash your pussy.');
    scene.text('When you cover back up, Sonia yells out with a slight slur in her voice. "I want to go dancing! Let\'s go back to the disco!"');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPressuredfortits(s: GameState, scene: SceneBuilder): void {
  scene.text('Sonia\'s really getting wasted now. Taking advantage of the situation, Dan pours her another drink. "Hey, Sonia. Are you going to show us your tits now?"');
  scene.text('She looks a little confused. "What?"');
  scene.text('"You said you were going to show us your tits earlier," he says.');
  scene.text('Sonia blinks. "I was?" she asks and all the guys agree. She glances at you and you nod.');
  scene.text('Pauline offers more helpful advice. "Yeah, you said you had really perky ones. So go on and prove it!"');
  scene.text('With the encouragement, Sonia pulls down her top to show off her breasts.');
  scene.text('"Now show us your ass!" Vasily adds.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) < 6  ||  ((s as any).grupTipe ?? 0) === 4) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/butt.jpg');
    scene.text('With a huge grin, Sonia stands up and turns around. She pulls up the back of her dress and pulls down her panties, showing off her bare ass to everyone. She seems to realize that maybe she\'s going too far and starts to blush.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" she yells with a slight slur in her voice.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    if (((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'cautionsonia'  &&  ((s as any).soniadisco_peerpressuretrigger ?? 0) !== 'soniadrinkmore') {
      scene.actions([
        { label: 'Encourage her', goto: ['soniadisco', 'soniadrinkmore'] },
      ]);
    }
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/butt.jpg');
    scene.text('Sonia stands up, a little unsteady on her feet, and pulls up the back of her dress before pulling down her panties, showing off her bare ass to everyone. She then seems to realize that maybe she\'s going too far and starts to blush.');
    // TODO-QSP: dynamic text: Just as Sonia's dress falls back in place, Dan looks at you. "Show us your tits ...
    scene.text(`Just as Sonia's dress falls back in place, Dan looks at you. "Show us your tits now, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You feel everyone\'s eyes shift towards you. Even with everyone encouraging you, you don\'t know what to do as Pauline continues to record Sonia with her phone.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You shake your head. "I\'m not going to do that."');
    scene.text('Vitek gets visibly angry. "Then why are you here? We give you free drinks and this is how you repay us? Fuck you then, get out!"');
    scene.text('Dan gets up and forces you to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show your breasts', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/tits.jpg');
    scene.text('Pauline starts to record you as you pull your clothes aside and quickly flash your breasts.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" Sonia yells out with a slight slur in her voice as you cover back up.');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPressuredforpussy(s: GameState, scene: SceneBuilder): void {
  scene.text('Sonia\'s really getting wasted now. Taking advantage of the situation, Dan approaches. "Hey Sonia, are you going to show us your pussy now?"');
  scene.text('She looks a little confused. "What?"');
  scene.text('"You said you were going to show us your pussy earlier," he says.');
  scene.text('Sonia blinks. "I was?" she asks, and all the guys agree. She glances at you and you nod.');
  scene.text('Pauline offers more helpful advice. ""Yeah, you said you had a pretty pussy. So go on and prove it."');
  scene.text('With the encouragement, Sonia pulls her dress up and pulls her panties aside, showing off her pussy. She has a huge grin on her face at all the attention she\'s getting.');
  scene.text('"Show us everything," Vasily says.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) < 6  ||  ((s as any).grupTipe ?? 0) === 4) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).soniarushout = 1;
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/fullfront.jpg');
    scene.text('Sonia pulls down her dress to expose her breasts, putting everything on full display for all to see. Her grin starts to fade when she seems to realize that maybe she went too far, and starts to blush and cover herself back up.');
    scene.text('"I… I need to go!" she stammers before getting up and running off.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go after her', goto: ['soniadisco', 'chasesonia'] },
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/fullfront.jpg');
    scene.text('Sonia pulls down her dress to expose her breasts, putting everything on full display for all to see. Her grin starts to fade when she seems to realize that maybe she went too far, and starts to blush and cover herself back up.');
    // TODO-QSP: dynamic text: Just as Sonia's dress falls back in place, Dan looks at you. "Show us your pussy...
    scene.text(`Just as Sonia's dress falls back in place, Dan looks at you. "Show us your pussy now, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You feel everyone\'s eyes shift towards you. Even with everyone encouraging you, you don\'t know what to do as Pauline continues to record Sonia with her phone.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopdrinking.jpg');
    scene.text('You shake your head. "I\'m not going to do that."');
    scene.text('Vitek gets visibly angry. "Then why are you here? We give you free drinks and this is how you repay us? Fuck you then, get out!"');
    scene.text('Dan gets up and forces you to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] <= 6) {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['soniadisco', 'dance1'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Show your pussy', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/pussy.jpg');
    scene.text('Pauline starts to record you as you pull your clothes aside and quickly flash your pussy.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" Sonia yells out with a slight slur in her voice as you cover back up.');
    qspCall(s, 'arousal', 'flashlite', 5, 'inhibition');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPressuredforblowjob(s: GameState, scene: SceneBuilder): void {
  scene.text('Vitek gets up and walks over to Sonia. "Nice tits."');
  scene.text('Sonia grins at him. "Really? Do you like them?"');
  scene.text('Her words are rather slurred as she teasingly runs a finger over her nipple, which is quite visible through the thin fabric of her top.');
  scene.text('He nods appreciatively. "Absolutely! Your lips are gorgeous too. I bet you like to suck on things."');
  scene.text('She slaps his chest indignantly. "Vitek! Have you lost your mind?!"');
  scene.text('Vitek raises his hands defensively and smirks. "Whoa, calm down! I was talking about popsicles! What did you think I meant?"');
  scene.text('"Whatever. There\'s no way you have a popsicle on you anyway," she mutters as she blushes.');
  scene.text('"Oh really?" Vitek replies. "If I did, would you suck it?"');
  scene.text('Sonia smiles at him. "Of course! I love popsicles! Bu-"');
  scene.text('Vitek reaches into his pocket and actually pulls one out. She looks at him in awe for a moment, almost as if he were a magician who just made a bunny appear out of thin air.');
  scene.text('When she tries to reach for it, he pulls it away. "No, no hands. I\'ll hold it; you can only use your mouth."');
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/popsicle2.jpg');
    scene.text('Sonia obediently pulls her hands away and opens her mouth. Vitek slowly puts the popsicle against her lips and tongue and she closes her lips around it and sucks on it while looking at him seductively.');
    scene.text('Vitek grins and lowers the popsicle until it\'s at the same level as his groin. Sonia eventually gets down on her knees after bending over awkwardly and nearly falling over once or twice. The way she\'s sucking and licking the popsicle has definitely aroused Vitek; you see his cock straining against the fabric of his pants.');
    scene.text('Meanwhile, Dan and Vasily are looking at the two of them with their mouths open while somewhat awkwardly hiding their erections.');
    scene.text('Once the popsicle is mostly gone, Dan clears his throat. "Open your mouth and shows us your tongue."');
    scene.text('She opens her mouth, showing off her red-stained tongue.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj1.jpg');
    scene.text('As she shows off her colored tongue to everyone, Vitek pulls his cock out of his pants and shoves it into her mouth before she can react.');
    scene.text('"I gave you a treat, so now it\'s your turn to give me one," he says with a lecherous smile. The rest of the group agree with him and encourages her to do it. Pauline places her hand on the back of Sonia\'s head, preventing her from pulling away.');
    scene.text('Sonia hesitates for a moment before she starts sucking and Pauline steps back and starts filming.');
    scene.text('You don\'t know what to do. If you try to intervene, you\'ll be going against the whole group, but maybe Sonia will realize what she\'s gotten herself into.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Physically intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Physically intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (20);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (5);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'loathe');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj2.jpg');
    scene.text('"For fuck sake, Sonia! Stop before you go too far!" you yell out before trying to push Pauline away.');
    scene.text('Your actions don\'t penetrate the girl\'s alcohol-soaked brain. She looks unsure for just a moment before she goes right back to sucking Vitek\'s cock.');
    scene.text('Vitek has had enough of you trying to spoil their fun and shoves you hard, sending you to the ground.');
    scene.text('Pauline glares at you once she catches her balance before returning to filming again.');
    scene.text('Dan roughly grabs you by the arm and jerks you up, but Vasily grabs your other arm.');
    scene.text('"I got her," he assures Dan, who gives you a dirty look before letting go.');
    // TODO-QSP: dynamic text: Vasily walks you around the corner. "What the fuck were you thinking, <<$pcs_nic...
    scene.text(`Vasily walks you around the corner. "What the fuck were you thinking, ${((s as any).pcs_nickname ?? 0)}? You should be glad Vitek didn't beat the shit out of you! Get out of here and don't come back!"`);
    scene.text('He shoves you towards the door before going back to the others.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['vitek_bj_watched'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj2.jpg');
    scene.text('Sonia bobs her head up and down on Vitek\'s cock, working her mouth down until she starts to gag. She has her lips tightly wrapped around the shaft, and just like the popsicle, she sucks on his dick with no hands.');
    scene.text('Pauline continues to record as the guys cheer Sonia on. You get the feeling that the guys want to join in, but one look from Vitek shuts them down.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj3.jpg');
    scene.text('Sonia starts getting into a rhythm and Vitek seems content to let her work at her own pace, though he gives her occasional encouragement.');
    scene.text('Pauline offers her a few pointers, which Sonia listens to and does her best to follow, making Vitek moan even louder.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_hotcat ?? 0) < 6  ||  ((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Watch them finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj4.jpg');
    scene.text('Vitek suddenly lets out a loud moan and Sonia starts gagging as she takes hold of his dick and strokes the shaft, milking every drop of cum into her mouth.');
    scene.text('Once he finishes, he looks down at her. "Show me."');
    scene.text('She knows what he wants and opens her mouth to show her cum-filled mouth. It\'s so full that a little leaks out from the corner onto her cheek.');
    scene.text('He grins at her. "That\'s a good girl. Now swallow."');
    scene.text('She gulps down his load before standing up. Pauline motions towards the cum on her cheek, which Sonia wipes up and sucks off her fingers. She suddenly blushes, possibly realizing she might have gone too far.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" she says with a slight slur in her voice and a cheeky grin on her face.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Watch them finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj4.jpg');
    scene.text('Vitek suddenly lets out a loud groan and Sonia makes a slight gagging noise as she takes hold of his dick and strokes the shaft, milking every drop of his cum into her mouth.');
    scene.text('Once he finishes, he looks down at her. "Show me."');
    scene.text('She knows what he wants and opens her mouth to show her cum-filled mouth. It\'s so full that a little leaks out from the corner onto her cheek.');
    scene.text('He grins at her. "That\'s a good girl. Now swallow."');
    scene.text('She gulps down his load before standing up. Pauline motions towards the cum on her cheek, which Sonia wipes up and sucks off her fingers before she suddenly blushes, possibly realizing she might have gone too far.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
      { label: 'See what happens next', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/gopnik/dan_dick.jpg');
    // TODO-QSP: dynamic text: Dan stands up and walks over to you, his crotch at face level. "Now it's your tu...
    scene.text(`Dan stands up and walks over to you, his crotch at face level. "Now it's your turn to suck my dick, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You feel everyone\'s eyes shift towards you. Even with everyone encouraging you, you don\'t know what to do as Pauline starts to record you with her phone.');
    qspCall(s, 'arousal', 'erotic', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/dan_dick.jpg');
    scene.text('You shake your head and pull away from him so his dick isn\'t directly in your face. "I\'m not sucking your dick, Dan!"');
    scene.text('Dan gets visibly angry. "Then why are you here? We show you a good time, you drink our beer and then tell us to fuck off?!"');
    scene.text('Vasily grabs you by the arm and walks you back around the building. "You need to go before things get ugly."');
    scene.text('Before he can turn back, Sonia comes drunkenly walking past the two of you, and the rest follow shortly behind her. Dan shoots you a dirty look as he goes by.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'adore');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'like');
    qspCall(s, 'fame', 'pav', 'sex', 30);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/gopnik/sex/dan_bj1.jpg');
    scene.text('You look at the others, then up at him before opening your mouth. Pauline records as he quickly sticks his dick in your mouth. The other guys cheer Dan on while also calling you a slut and other derogatory names.');
    qspCall(s, 'arousal', 'bj', 2, 'inhibition', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/gopnik/sex/dan_bj2.jpg');
    scene.text('Dan moans a little. "Yeah, that\'s it, you fucking slut. You suck dick like a pro."');
    scene.text('Pauline laughs as she keeps recording. "Yeah, I bet she\'s sucked off most of the guys in school already. What a fucking slut!"');
    scene.text('The rest of them just laugh as they watch, though Sonia looks a little uncomfortable listening to them. You feel Dan\'s hands grab the back of your head.');
    qspCall(s, 'arousal', 'bj', 2, 'inhibition', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/gopnik/sex/dan_bj3.jpg');
    scene.text('With his hands firmly on the back of your head, he thrusts his dick completely into your mouth. You gag a little when his cock goes down your throat and your nose is smashed against his stomach. He starts moaning louder as he deeply fucks your mouth, causing you to constantly gag on his dick.');
    qspCall(s, 'arousal', 'bj', 2, 'inhibition', 'deepthroat', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/gopnik/sex/dan_bj_cum.jpg');
    scene.text('He suddenly pulls his dick out of your mouth. "Keep your fucking mouth open, slut."');
    scene.text('Before you have a moment to think about it, he starts cumming. Most of it ends up on your tongue, while some hits the back of your throat. Once he finishes cumming, he wipes the tip of his dick off on your lips before tucking it away.');
    scene.text('Pauline moves in closer with her phone. "Swallow it, slut!"');
    scene.text('Glancing around, you do as you\'re told and swallow Dan\'s cum before quickly wiping the cum off your lips.');
    scene.text('"I want to go dancing! Let\'s go back to the disco!" Sonia says with a slight slur in her voice and a cheeky grin on her face.');
    qspCall(s, 'cum_call', 'mouth', 'A10', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance', '\'staytoend\''] },
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
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance'] },
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

function enterPressuredforgangbang(s: GameState, scene: SceneBuilder): void {
  scene.text('Vitek gets up and walks over to Sonia. "Nice tits."');
  scene.text('Sonia grins. "Really? Do you like them?" she asks with a slurred voice.');
  scene.text('She teasingly runs a finger over her nipple, which is quite visible through the thin fabric of her top.');
  scene.text('He nods appreciatively. "Absolutely! Your lips are gorgeous too. How about you suck me off again?"');
  scene.text('She slaps his chest indignantly. "Vitek! Have you lost your mind?!"');
  scene.text('Vitek raises his hands in defense and smirks. "Whoa, calm down! You liked doing it last time! Come on, no one will know! We didn\'t tell anyone last time."');
  scene.text('Sonia bites her lip. "Okay, but you guys won\'t tell anyone, right?"');
  scene.text('"Of course not!" he says with a smile before he unbuttons his pants and pulls out his semi-hard dick. "Now open wide."');
  scene.text('She does so, sticking out her tongue in turn.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang1.jpg');
    scene.text('Vitek pushes his dick into her awaiting mouth as everyone cheers them on. Sonia starts to enthusiastically suck as Dan and Vasily look at each other before standing up, intent on joining in this time.');
    scene.text('You don\'t know what to do. If you try to intervene, you\'ll be going against the whole group, but maybe Sonia will realize what she\'s gotten herself into.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Physically intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Physically intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (20);
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['soniafall_block'] = ((s as any).soniaQW['soniafall_block'] ?? 0) + (5);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'loathe');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/bj2.jpg');
    scene.text('"For fuck sake, Sonia! Don\'t you realize they\'re going to tell everyone about this?!" you yell out before trying to push Pauline away.');
    scene.text('Sonia stops for a moment, but Vitek grabs her by the hair and starts skull fucking her. Dan rushes over towards you and shoves you back, causing you to fall.');
    scene.text('"Keep your mouth shut unless you want to join her!" he yells.');
    scene.text('Vasily grabs you by the arm. "I got her," he tells Dan.');
    scene.text('Dan gives you a dirty look before he walks over towards Sonia and pulls out his dick.');
    // TODO-QSP: dynamic text: Vasily walks you around the corner. "What the fuck were you thinking, <<$pcs_nic...
    scene.text(`Vasily walks you around the corner. "What the fuck were you thinking, ${((s as any).pcs_nickname ?? 0)}? You should be glad Dan didn't kick the shit out of you! Get lost and don't think about coming back!"`);
    scene.text('He shoves you towards the door, before going back to the others.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep watching', goto: ['soniadisco', 'soniabang'] },
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalkhome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/disco/walkhome1.jpg');
  // TODO-QSP: dynamic text: As you help her stumble home, she turns to you and smiles. "Thanks, <<$pcs_nickn...
  scene.text(`As you help her stumble home, she turns to you and smiles. "Thanks, ${((s as any).pcs_nickname ?? 0)}…"`);
  scene.text('The two of you continue the walk to her house mostly in silence before you come upon a fairly average-looking house in the middle of the residential area.');
  scene.text('She stops and points. "This is me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Warn her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'hate');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/disco/walkhome2.jpg');
    scene.text('Once at her door, you warn her to take it easy next time. "Just be careful with the drinking next time. You really went overboard tonight."');
    scene.text('She rolls her eyes. "Stop trying to mother me! I get enough of that at home. It was just a little harmless fun! No one cares."');
    scene.text('She then stumbles into her house, leaving you alone outside.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    { label: 'Ask if she\'ll be okay', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).npc_rel ?? 0)?.['A25'] >= 60) {
      qspCall(s, 'npcStat', 'A25');
      scene.img('images/characters/pavlovsk/school/girl/sonia/walkhomekiss.jpg');
      scene.text('You walk her to the doorway and decide to check on her before you head out. "You sure you\'re okay? Don\'t need me to walk you in?"');
      scene.text('She starts to say something before she stops. The next thing you know, she\'s kissing you!');
      qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Pull away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You pull away from her, breaking the kiss.');
    scene.text('She blushes when you do. "I\'m sorry!" she mumbles. "I don\'t know what came over me!"');
    scene.text('Before you can even get a word in, she opens the door and hurries into her house, closing the door behind her. Not knowing what else to do, you leave.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
        { label: 'Return the kiss', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    scene.img('images/characters/pavlovsk/school/girl/sonia/walkhomekiss.jpg');
    scene.text('After a moment of surprise, you return the kiss just as passionately as she\'s giving it. Your hands go down to hold her hips as you kiss for several wonderful minutes.');
    // TODO-QSP: dynamic text: She eventually breaks the kiss and bites her lower lip. "Would you like to come ...
    scene.text(`She eventually breaks the kiss and bites her lower lip. "Would you like to come inside, ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'dislike');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You shake your head. "Maybe next time. It\'s getting late and I should get going."');
    scene.text('She nods in understanding, but you also notice her frowns a little. "Sure, no problem. Talk to you later."');
    scene.text('She opens her door and stumbles inside without another word before closing the door, leaving you alone outside her house.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Yes', goto: ['soniaev1', 'homesex'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big25.jpg');
      scene.text('You walk her to the doorway and decide to check on her before you head out. "You sure you\'re okay? Don\'t need me to walk you in?"');
      scene.text('She shakes her head and smiles. "Thanks, but I\'m fine. Really. I can make it the rest of the way. Thank you for walking me home, though."');
      scene.text('She unlocks the door and heads in. Just before she closes the door, she gives you one last smile and a wave.');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterChasesonia(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big25.jpg');
  scene.text('You run outside after Sonia and catch up with her just outside the community center.');
  scene.text('"Sonia, wait!" you call out to her.');
  scene.text('She stops and turns around to face you. "What? Are you going to tell me how stupid I was being?" she says, slurring her words.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'loathe');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You nod slightly. "What were you thinking? You know people will talk and what that could mean," you chastise her.');
    scene.text('She shakes her head. "Whatever! They won\'t say anything, so stop trying to be my mother! I\'m old enough to make up my own mind, so stay out of my business!" she says angrily and storms off.');
    scene.text('You consider following her, but you know it would only make things worse.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You shake your head. "No, I just wanted to make sure you were okay."');
    scene.text('She sighs. "Sorry, I didn\'t mean to snap. I just got carried away. I think I should go home."');
    scene.actions([
      { label: 'Walk home with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You smile at her. "I was going to head home myself. How about we walk together?"');
    scene.text('She pauses for a moment before she nods. "Yeah, okay."');
    scene.actions([
      { label: 'Walk her home', goto: ['soniadisco', 'walkhome'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('You nod in agreement. "Yeah, that\'s likely for the best. Be careful walking home."');
    scene.text('She rolls her eyes slightly. "Yes, mom."');
    scene.text('She turns and starts to walk away, stumbling slightly along the way.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDance1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    if (!(s as any).discobloc) (s as any).discobloc = {}; (s as any).discobloc['A25'] = ((s as any).daystart ?? 0);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['slut'] = 1;
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallenangel'] = 1;
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['fallday'] = ((s as any).daystart ?? 0);
  if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['slutdays'] = ((s as any).daystart ?? 0);
  if (!(s as any).npc_grupTipe) (s as any).npc_grupTipe = {}; (s as any).npc_grupTipe['A25'] = 5;
  if (!(s as any).npcGoSchool) (s as any).npcGoSchool = {}; (s as any).npcGoSchool['A25'] = '<a href="exec:gt \'gschool_outcast_chats\', \'\' + $lcase($npc_usedname[\'A25\']) + \'\'">' + qspUntranslated(s, "npc_usedname[\"A25\"]>", { location: "soniadisco" }) + '</a>';
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/cumwalk.jpg');
  if (((s as any).locArgs?.[1] ?? 0) === 'staytoend') {
    scene.text('Vitek drags a drunken Sonia around like she\'s a trophy on display. She\'s all smiles and looks pretty happy and completely wasted. You follow them inside and stop near the door.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'declineinvite') {
      scene.text('You don\'t really want to drink alcohol right now, so you just shake your head. "Thanks for the invite, but I think I\'d rather stay here right now. You guys have fun!"');
      scene.text('Half an hour later, you see the boys return, quite rowdy and pleased with themselves. ');
    } else {
      scene.text('Not wanting to stick around and see what happens to Sonia, you return to the dance. A while later, the boys return, quite rowdy and looking quite pleased with themselves.');
    }
    scene.text('Vitek is dragging a drunken Sonia around like she\'s a trophy on display. She\'s all smiles and seems pretty happy, but is even more drunk than when you last saw her. When you look closer, you see her face is entirely covered in cum! You don\'t know if she\'s too drunk to notice or simply doesn\'t care.');
  }
  scene.text('Vitek leads her around the disco, and several people take photos of Sonia\'s cum-covered face. She seems to be catching on that something isn\'t right, but has yet to figure it out.');
  scene.text('"Sonia just let all six of us fuck her in every hole she has at the same time like the slut she now is!" one of the guys loudly proclaims.');
  scene.text('Sonia looks shocked and stares at Vitek, who just laughs at her. She reaches up to touch her face and seems to realize it\'s covered in cum. The boys all laugh and make lewd remarks towards her, while the girls look at her with contempt or just turn their backs on her. Even her friends want nothing to do with her now and ignore her completely.');
  scene.text('She immediately bursts into tears and runs out of the disco while trying to cover up her face. The atmosphere in the disco slowly returns to normal, but everyone keeps talking about Sonia and what she did. A few people even whisper that they always knew she was a slut.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore Sonia', goto: ['pav_disco', ''] },
    { label: 'Follow Sonia', goto: ['soniadisco', 'followsonia'] },
  ]);
  scene.build();
}

function enterSoniabang(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang2.jpg');
  scene.text('Pauline steps back while the other guys get up and crowd around Sonia while pulling their dicks out. Sonia starts jerking them all off, switching between which dick she\'s sucking to try and give them all attention.');
  scene.text('Pauline takes out her phone and starts recording, making sure to get a good close up of Sonia\'s face as she does. She seems pretty amused by all this. "Why are you all just standing around? She has more than one hole!" She then looks at Sonia. "Don\'t you, slut?"');
  scene.text('Sonia mutters something, but it\'s too hard to tell what with a cock in her mouth. The guys not getting their cocks attended to start pulling off her clothes, quickly leaving her completely naked.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to stop her', handler: (st: GameState) => {
    if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['help'] = ((s as any).soniaQW['help'] ?? 0) + (1);
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (10);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang2.jpg');
    scene.text('You can\'t just watch her like this. "Sonia! Think about what you\'re doing!"');
    scene.text('All the guys turn to give you a dirty look as Sonia pauses.');
    scene.text('Dan whirls around to face you and closes the distance in no time. You try to back up, but he\'s too fast. He shoves you just enough to almost cause you to fall. "Keep your mouth shut unless you want to join her!"');
    scene.text('Before you can respond, you see Vasily catch your eye and shake his head, silently warning you to not push Dan. Slightly afraid, you have no choice but to keep quiet and just watch, hoping that Sonia will do the right thing.');
    scene.actions([
      { label: 'Her fate', goto: ['soniadisco', 'soniafall'] },
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
    ]);
  } },
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang2.jpg');
    scene.text('Sonia stares at the erection in front of her face before she slowly extends her hand and pokes the cock with her finger. It twitches and some precum leaks from the head, making her giggle with glee. Fascinated by it, she hesitantly closes her slender fingers around the head and jerks it off carefully.');
    scene.text('Vitek groans, maybe not expecting his plan to actually get this far. "Now have a taste… I bet you\'ll love it!"');
    scene.text('She pauses and you watch as she perhaps makes one of the biggest decisions of her life.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Her fate', goto: ['soniadisco', 'soniafall'] },
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
    ]);
  } },
    { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
  ]);
  scene.build();
}

function enterSoniafall(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang3.jpg');
  scene.text('Vitek lies down on his back and pulls Sonia on top of him before he roughly slides his dick into her pussy and starts fucking her from underneath as Dan steps up behind her, spits on the crack of her ass, and forces his cock into her asshole. She barely seems to notice since she\'s so drunk.');
  scene.text('Dan and Vitek fuck her roughly while the other guys stand around waiting for their turn.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang4.jpg');
    scene.text('They trade positions, two of the others now fucking both of Sonia\'s holes as Pauline records it. Vitek stands near her head and shoves his dick back in her mouth. Now with every hole on her body filled, she seems to be getting into it. You think she\'s too drunk to realize what\'s going on.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang5.jpg');
    scene.text('Each guy takes a turn with her and Sonia doesn\'t seem to mind - in fact, she seems to be loving it as Pauline records the whole thing. The guys are not remotely gentle, but it doesn\'t seem to matter. Sonia moans and writhes in pleasure as they all take turns fucking her before one of them pops his load right in her mouth.');
    scene.text('She swallows most of it, but some leaks out as she switches to a new cock. Several of the other guys seem to be getting close to blowing their loads as well.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/gangbang6.jpg');
    scene.text('When they stop to change positions, Vitek has Sonia get on her knees and the guys all surround her while jerking their dicks. They soon all cum on her, the vast majority of it ending up on her face and in her hair, leaving her a complete mess.');
    scene.text('"Suck us clean," Vitek orders after the last guy finishes.');
    scene.text('Sonia does as she\'s told and when she\'s done, the guys help her up, pull her dress over the top of her head and start leading her back to the disco.');
    scene.text('"Come on, Sonia. Let\'s go dance," Dan says with a laugh.');
    scene.text('Sonia gets excited, apparently too drunk to notice that her hair and face are covered in cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Follow them', goto: ['soniadisco', 'dance1', '\'staytoend\''] },
    ]);
  } },
    ]);
  } },
      { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
    ]);
  } },
    { label: 'Go back to the disco', goto: ['soniadisco', 'dance1'] },
  ]);
  scene.build();
}

function enterFollowsonia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
  scene.text('You look around and see that everyone is either laughing at Sonia or looking at her in disgust. When you look back, she\'s gone, so you head outside to see if you can find her.');
  scene.text('You find her drunkenly leaning against a tree, sobbing while trying to keep her balance. Thick gobs of cum are slowly drying on her face as tears stream down her cheeks. It looks like reality has finally caught up with her and she\'s realized what she just did.');
  scene.text('"What have I done?" she whispers between sobs. "I\'m such an idiot!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Approach her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
    if (((s as any).soniaQW ?? 0)?.['help'] > ((s as any).soniaQW ?? 0)?.['encourage']) {
      scene.text('You walk up to her. "Are you okay?"');
      scene.text('She gives you a look of disbelief. "No, I\'m not okay! You saw what happened! Everyone is going to think I\'m a slut! Hell, I <i>am</i> a slut!" she replies between sobs.');
      scene.text('You nod. "I know. I tried to help you and I wish I could have done more."');
      scene.text('She nods in return. "I know. God, I was so stupid!" she says before she starts sobbing harder.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['encourage'] > 0  &&  ((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A25', '-10');
        scene.text('She turns to you as you approach. "I thought you were my friend! Why would you do that to me?"');
      } else {
        if (((s as any).soniaQW ?? 0)?.['encourage'] > 0) {
          qspCall(s, 'npc_relationship', 'modify', 'A25', 'loathe');
          scene.text('She turns to you as you approach. "What do you want? Come to gloat and make fun of me too?"');
        } else {
          scene.text('You walk up to her. "Are you okay?"');
          scene.text('She gives you a look of disbelief. "No, I\'m not okay! You saw what happened! Everyone is going to think I\'m a slut! Hell, I <i>am</i> a slut!" she replies between sobs.');
        }
      }
    }
    if (((s as any).soniaQW ?? 0)?.['help'] > ((s as any).soniaQW ?? 0)?.['encourage']  ||  ((s as any).soniaQW ?? 0)?.['encourage'] === 0) {
      scene.actions([
        { label: 'Comfort her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'adore');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
    if (((s as any).soniaQW ?? 0)?.['help'] > 0) {
      scene.text('You put your arm around her shoulder and hug her. "I\'m so sorry this happened to you. I tried to help, but I should have done more."');
      scene.text('She shakes her head. "No, you tried to warn me. God, I\'m so stupid! My life is over!" she cries and starts sobbing even harder.');
      scene.text('You try wiping the cum off her face and out of her hair as best you can, holding her as she sobs against your shoulder.');
      scene.text('"I should go home," she whispers once you have her face and hair mostly cleaned up and she seems to have calmed down a little.');
    } else {
      scene.text('You put your arm around her shoulder and hug her. "I\'m so sorry this happened to you. I wish I\'d said or done something to help you."');
      scene.text('She shakes her head. "No, you couldn\'t have said anything to change my mind. This is my fault. God, I\'m so stupid! My life is over!" she cries and starts sobbing even harder.');
      scene.text('You try wiping the cum off her face and out of her hair as best you can, holding her as she sobs into your shoulder.');
      scene.text('"I should go home," she whispers once you have her face and hair mostly cleaned up and she seems to have calmed down a little.');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
      { label: 'Help her home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
    scene.text('"At least let me walk you home. It\'s the least I can do," you tell her.');
    scene.text('She merely nods and leans against you as the two of you walk home, the noise of the night interrupted by her sniffles and sobs.');
    scene.text('You walk her to the residential area and up to the door of a fairly average looking house.');
    scene.text('"This is me. Thank you for walking me home," she says as she unlocks the door.');
    scene.text('She starts sobbing again, but before you can think of something to say, she hurries inside and closes the door. You can hear her sobs through the door.');
    scene.text('Her life is going to be a living hell from now on, but maybe you can help her somehow…');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
    scene.text('"I\'m sorry. I shouldn\'t have encouraged you. I didn\'t think it would go that far, and I didn\'t know the guys would do that to you. It wasn\'t right and I\'m sorry."');
    scene.text('She nods slightly. "No matter what you said, it would have happened anyway. I wanted to party, to be the bad girl. Guess I got what I wanted. I\'m so stupid!" she says before starting to sob again.');
    scene.text('"Is there anything I can do to help?" you ask.');
    scene.text('She shakes her head. "Just leave me alone!"');
    scene.text('You nod and step away, honoring her wishes and walking away. As you do, you can hear her sobbing.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her it\'s her own fault', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/sonia/soniasad.jpg');
    if (((s as any).soniaQW ?? 0)?.['help'] > ((s as any).soniaQW ?? 0)?.['encourage']) {
      scene.text('"I tried to help you, but you wouldn\'t listen! This is your own fault," you bluntly tell her.');
      scene.text('"I know!" she cries before she takes off running.');
      scene.text('Maybe you should have been nicer, even if it was her own fault.');
    } else {
      if (((s as any).soniaQW ?? 0)?.['encourage'] > 0  &&  ((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
        qspCall(s, 'npc_relationship', 'modify', 'A25', '-20');
        if (!(s as any).soniaQW) (s as any).soniaQW = {}; (s as any).soniaQW['hate'] = 1;
        scene.text('You shake your head. She was all happy before and now she\'s crying about it. "What did you expect? You were acting like a slut! You wanted to have fun and walk on the wild side and you did. You have no one to blame but yourself."');
        scene.text('She cries even harder. "I thought you were my friend! You encouraged me! Why would you do that?"');
        scene.text('"Come on, we both know nothing I was going to say would have gotten you to stop. You wanted to know what it was like to be a bad girl, so I helped you do what you wanted. That\'s not my fault, it\'s yours."');
        scene.text('"Stay away from me!" she screams before she takes off running.');
        scene.text('Maybe you should have been nicer, even if it was her own fault.');
      } else {
        if (((s as any).soniaQW ?? 0)?.['encourage'] > 0) {
          qspCall(s, 'npc_relationship', 'modify', 'A25', '-10');
          scene.text('You shake your head. She was all happy before and now she\'s crying about it. "What did you expect? You were acting like a slut! You wanted to have fun and walk on the wild side and you did. You have no one to blame but yourself."');
          scene.text('"I know!" she cries before she takes off running.');
          scene.text('Maybe you should have been nicer, even if it was her own fault.');
        } else {
          scene.text('"This is your own fault. You wanted to be a bad girl and got just what you wanted," you tell her.');
          scene.text('"I know!" she cries before she takes off running.');
          scene.text('Maybe you should have been nicer, even if it was her own fault.');
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Go back to the disco', goto: ['pav_disco', ''] },
  ]);
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
    case 'join_them':
      enterJoinThem(s, scene);
      break;
    case 'soniadrinkmore':
      enterSoniadrinkmore(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'peerpressure':
      enterPeerpressure(s, scene);
      break;
    case 'notpressured':
      enterNotpressured(s, scene);
      break;
    case 'pressuredforpanties':
      enterPressuredforpanties(s, scene);
      break;
    case 'pressuredfortits':
      enterPressuredfortits(s, scene);
      break;
    case 'pressuredforpussy':
      enterPressuredforpussy(s, scene);
      break;
    case 'pressuredforblowjob':
      enterPressuredforblowjob(s, scene);
      break;
    case 'pressuredforgangbang':
      enterPressuredforgangbang(s, scene);
      break;
    case 'walkhome':
      enterWalkhome(s, scene);
      break;
    case 'chasesonia':
      enterChasesonia(s, scene);
      break;
    case 'dance1':
      enterDance1(s, scene);
      break;
    case 'soniabang':
      enterSoniabang(s, scene);
      break;
    case 'soniafall':
      enterSoniafall(s, scene);
      break;
    case 'followsonia':
      enterFollowsonia(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const soniadisco: LocationDef = {
  name: 'soniadisco',
  title: 'You notice Sonia out on the dance floor really working her b',
  region: 'other',
  enter: enter,
};
