import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWorkout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== 'nude') {
    scene.actions([{ label: 'Continue', goto: ['exercise', 'workout'] }]);
  }
  if (qspFunc(s, 'pcs_has_attr', 'clothes_naked') === 0) {
    scene.img('images/locations/gadukino/forest/nudeforest1.2.jpg');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 3) {
      scene.text('Your cheeks redden with embarrassment as you strip off your clothes. You giggle nervously at the thought of getting caught naked in the meadow.');
    } else {
      scene.text('You strip off your clothes. The thought of getting caught naked in the meadow excites you.');
    }
    (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_meadow');
    qspCall(s, 'outfit', 'strip_all', 'gad_meadow');
  }
  qspCall(s, 'arousal', 'flash', (-10));
  qspCall(s, 'arousal', 'end');
  if (qspFunc(s, 'pcs_has_attr', 'clothes_naked')) {
    scene.actions([{ label: 'Continue', goto: ['exercise', 'workout'] }]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['exercise', 'workout'] },
    ]);
  }
  scene.build();
}

function enterFruitTrees(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/gadukino/meadow/meadow_fruit_${Math.floor(Math.random() * 2) + 0}.jpg`);
  scene.text('These fruit trees are flourishing in the undisturbed beauty of the meadow. But, unfortunately, all the fruit is out of your reach.');
  scene.actions([
    { label: 'Continue', goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enterRuins(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/meadow/meadow_nearby_ruins.jpg');
  scene.text('The ruins of this old house look intriguing. But, you wonder how long it has been here.');
  scene.actions([
    { label: 'Continue', goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enterMiraFreeAndHere(s: GameState, scene: SceneBuilder): void {
  scene.text('<a href="exec: gt \'gad_meadow\', \'Mira\'">Mira</a> is in the meadow, spinning with a delightful smile and laughing.');
  scene.actions([
    { label: 'Talk to Mira', goto: ['gad_meadow', 'Mira'] },
  ]);
  scene.build();
}

function enterMira(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).MiraVars ?? 0)?.['meadow'] === 1) {
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('"Wow! This place is awesome. My family and I have only been in the village for a few months, but I have never heard anyone talk about this place." Mira tells you. "Now I know where I can come to when I want to be alone. You don\'t mind, do you?"');
    scene.actions([
      { label: 'You allow her to come here on her own', handler: (st: GameState) => {
    ((s as any).MiraVars ?? {})['meadow'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('"I think you are a responsible person, Mira. So, you can come to the meadow whenever it pleases you. But, I want this place to remain a secret, so you can never tell anyone about this place."');
    scene.text('Mira readily agrees and is as happy as a lark. Mira energetically nods and says, "I\'ll take this secret to the grave, I swear. But, if I don\'t, I\'ll grant you three wishes, which I promise I will perform no matter what…"');
    scene.actions([
      { label: 'Finish', goto: ['gad_meadow', 'start'] },
    ]);
  } },
      { label: 'Sorry, I want to keep this meadow private', handler: (st: GameState) => {
    ((s as any).MiraVars ?? {})['meadow'] = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You tell her that this is your haven, and you would prefer that if she wants to come to the meadow, she can only do so with you. Mira looks crestfallen. Tears start to well up in her eyes, though she tries not to let you see.');
    scene.text('Mira looks at you seriously, "I will abide by your wishes. I swear. If I don\'t, I\'ll grant you three wishes that I promise to perform no matter what…"');
    if (((s as any).npc_QW ?? 0)?.['A64'] < 15) {
      scene.text('You and Mira speak for a while. Her mood is a little down, but a smile slowly creeps onto her face as you chat.');
      scene.text('Mira then asks if you could help cheer up her father. He has been depressed ever since her mother\'s death nearly two years ago.');
      scene.actions([
        { label: 'Maybe', handler: (st: GameState) => {
    ((s as any).MiraVars ?? {})['meadow'] = 4;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
    qspCall(s, 'stat', '');
    if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
      scene.img('images/characters/gadukino/mira/mira.jpg');
    } else {
      scene.img('images/characters/gadukino/mira/mira3.jpg');
    }
    scene.text('You agree, intrigued. You ask Mira what she has in mind? After a few seconds, she tells you she saw her father masturbating that morning. She doesn\'t think her father has been with a woman since her mother died. Mira is sorry for her father\'s loss, she\'s too, for that matter, but she has an overwhelming desire to help him. She can\'t just do nothing.');
    scene.text('You know Mira loves her father very much. But you don\'t know what you can do to help. You don\'t want or need this drama in your life. So you tell her that there is nothing you can do to help with her father\'s depression. Mira pouts and stands with her arms crossed. Her whole demeanour is one of injured innocence.');
    scene.text('A few minutes later, to your surprise, you feel a bit sorry for how you snapped at Mira. But, you think to yourself, chatting with her dad couldn\'t hurt, and it would be a good deed.');
    scene.actions([
      { label: 'Leave', goto: ['gad_meadow', 'start'] },
    ]);
  } },
        { label: 'Leave', goto: ['gad_meadow', 'start'] },
      ]);
    } else {
      ((s as any).MiraVars ?? {})['meadow'] = 5;
      scene.text('You and Mira speak for a while. Her mood is a little down, but a smile slowly creeps onto her face as you chat.');
      scene.text('"I saw you meeting with my father. I want to thank you for attending to him. He had been depressed since my mother died two years ago. Being with you has really cheered him up."');
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      if (((s as any).pcs_inhib ?? 0) <= 30) {
        scene.actions([
          { label: 'Blush', handler: (st: GameState) => {
    scene.text('You are a bit surprised that Mira must have been spying on you, and even though you two are friends, you are still a bit embarrassed.');
    scene.text('You feel your cheeks get warm and quickly say goodbye to Mira.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gad_meadow', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).pcs_inhib ?? 0) > 30) {
          scene.actions([
            { label: 'You\'re welcome', handler: (st: GameState) => {
    scene.text('You are a bit surprised that Mira must have been spying on you, and even though you two are friends, you didn\'t think she was that type of girl.');
    scene.text('You quickly respond, "Oh really, did you like what you saw? How about you join in next time? I\'m sure your father wouldn\'t mind."');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gad_meadow', 'start'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Say nothing and leave', goto: ['gad_meadow', 'start'] },
      ]);
    }
  } },
    ]);
  } else {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      qspCall(s, 'miroslava', 'miraclothes');
      scene.text('"What a wonderful place you have found. It\'s so comfortable and sunny!"');
      if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 15  &&  ((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1) {
        scene.actions([
          { label: 'Mira, come here and stick that tongue of your in my wet pussy!', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['cuni_given'] === 0) {
      ((s as any).MiraVars ?? {})['cuni_given'] = 1;
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    qspCall(s, 'npcStat', 'A64');
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/characters/gadukino/mira/sex/miralick.jpg');
      scene.text('Mira immediately sits on the grass and waits until you get undressed. Then, holding out your hand, you throw caution to the winds and push your panties aside, revealing your already dripping snatch…');
      qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miralick1.jpg');
    scene.text('You enjoy Mira\'s gentle touch between your legs. Then, she teases you by gently touching your clit…');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miralick2.jpg');
    scene.text('A couple of minutes later, you eagerly get rid of your panties while Mira lowers her mouth to your pussy and lightly nibbles on your clit. Suddenly, you are in the midst of an orgasm.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miralick2.jpg');
    scene.text('Mira obediently kneels at your feet, licking your clit and fingering your pussy. After a few minutes of this treatment, Mira brings you to a blazing orgasm.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['gad_meadow', 'start'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Finish', goto: ['gad_meadow', 'start'] },
      ]);
    }
  }
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temper ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mirameadowmastr.jpg');
    scene.text('You were about to approach her, but stop as she undoes her pants. You decide to watch to what she does…');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr1.jpg');
    scene.text('Mira pulls up harshly on her panties, so they bite deeply between her labia. Mira looks around again, but you are concealed in the dense thicket. Thus, she fails to spot you watching…');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr2.jpg');
    scene.text('She pauses for a few seconds before slowly sliding her hand inside her panties to rub her crotch.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr3.jpg');
    scene.text('Next, she pulls down her panties, and you can see her wet pussy.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr4.jpg');
    scene.text('Then she removes her jacket, exposing her small tits.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr5.jpg');
    scene.text('She begins to fondle her breasts while continuing to finger herself.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr6.jpg');
    scene.text('Finally, she leans against the nearest tree as she brings herself to orgasm. You watch for a couple minutes in hopes of a sequel, but Mira begins to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur_sex', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
  } else {
    if (((s as any).temper ?? 0) < 25) {
      scene.img('images/characters/gadukino/mira/mirameadowmastr7.jpg');
      scene.text('Mira is leaning against a tree and starts to caress herself.');
      qspCall(s, 'arousal', 'voyeur_sex', 2, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr8.jpg');
    scene.text('She plays with herself for a few minutes before stopping to look at a nearby log…');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr9.jpg');
    scene.text('Having made her decision, she walks over to the log and starts to remove her panties.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr10.jpg');
    scene.text('Taking off her panties, she gently sits down on the log…');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr11.jpg');
    scene.text('Mira begins to caress herself again and brings herself to orgasm… You watch for a couple minutes in hopes of a sequel, but Mira starts to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur_sex', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      scene.img('images/characters/gadukino/mira/mirameadowmastr12.jpg');
      scene.text('You see Mira standing on a tree stump with a hand in her pants and her tits exposed, enjoying the cool breeze.');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr13.jpg');
    scene.text('She soon gets bored and, as if on purpose, turns her ass towards you and pulls off her skirt.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr14.jpg');
    scene.text('After doing this, she sits down on the stump and continues to caress herself.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr15.jpg');
    scene.text('After getting up from the stump, Mira takes off her top and is only in her panties.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr16.jpg');
    scene.text('Finally, she takes off her shirt, squats, and brings herself to orgasm. You watch for a couple minutes in hopes of a sequel, but Mira begins to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur_sex', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
  }
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/mirameadowsex.jpg');
  scene.text('You see Mira and Mitka talking to each other. You can\'t hear what they say from this far away, but they begin to undress in your meadow.');
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowsex1.jpg');
    scene.text('Mira lies before Mitka on the bedspread and opens her legs invitingly in front of him. Mitka wastes no time and immediately starts roughly fucking her pussy.');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
      ((s as any).MiraVars ?? {})['QW'] = 3;
    }
    scene.img('images/characters/gadukino/mira/mirameadowsex2.jpg');
    scene.text('Fifteen minutes Mitka finally cums in Mira and leaves. Mira cleans up and then leaves as well.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal.jpg');
    scene.text('You see Mira lower her ass onto Mitka\'s member and begin to bounce on top of him. You can hear the sound every time her butt cheeks hit his thighs…');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
  } else {
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal1.jpg');
    scene.text('Mira gets down on all fours and spreads her ass cheeks wide apart. She moans loudly as Mitka drives his cock into her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal2.jpg');
    scene.text('After a couple of minutes, Mitka slaps her ass and pulls out of Mira. She gets up on her knees before him and sticks her tongue out as his warm cum shoots all over her face.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temper ?? 0) < 15) {
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj.jpg');
    scene.text('She enthusiastically sucks his cock and takes his whole member down her throat…');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj1.jpg');
    scene.text('But, apparently, you\'re a little late because, after a couple minutes, Kolyamba puts a hand on the back of Mira\'s head and holds her while he cums down her throat. At first, she gags but eventually obediently swallows his cum…');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj2.jpg');
    scene.text('All Mira has on is some flip-flops with her face on the ground and her ass in the air. She moans loudly as Kolyamba pounds her pussy and cums inside of her…');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  }
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temper ?? 0) < 20) {
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj7.jpg');
    scene.text('Mira is kneeling between the three friends and sucking their cocks with great pleasure. But, unfortunately, they are all crowded around her, so you can\'t determine who is in her mouth, who is grabbing her tits, and who is getting a handjob.');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
  } else {
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj8.jpg');
    scene.text('Mira is kneeling between the three friends and sucking their cocks with great pleasure. But, unfortunately, they are all crowded around her, so you can\'t determine who is in her mouth, who is grabbing her tits, and who is getting a handjob.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars ?? {})['QW'] = (((s as any).MiraVars ?? {})['QW'] ?? 0) + (1);
  if (((s as any).temper ?? 0) < 15) {
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj11.jpg');
    scene.text('Mira squats in front of one of the boys and takes his cock in her mouth while another gets ready for his turn.');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
  } else {
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).temper ?? 0) < 25) {
      scene.img('images/characters/gadukino/mira/sex/mirameadowbj10.jpg');
      scene.text('Two boys are fucking Mira in her mouth and pussy simultaneously. The whole time they are laughing and talking while Mira moans in between them… Fifteen minutes later, they finish with her and leave.');
      qspCall(s, 'arousal', 'voyeur_sex', 15);
    } else {
      scene.img('images/characters/gadukino/mira/sex/mirameadowbj9.jpg');
      scene.text('Mira and the two boys she is with are all naked. She is sucking one of them while another plays with her breasts and pussy from behind.');
      qspCall(s, 'arousal', 'voyeur_sex', 15);
    }
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars ?? {})['QW'] = (((s as any).MiraVars ?? {})['QW'] ?? 0) + (1);
  scene.img('images/characters/gadukino/mira/sex/mirameadowbj12.jpg');
  scene.text('Mira is almost invisible with all the bodies around her. You can only see her naked ass and feet swaying in the air. You spend half an hour watching as the men take turns fucking Mira until they are all tired.');
  qspCall(s, 'arousal', 'voyeur_sex', 30);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/gadukino/mira/mirameadows.jpg');
  scene.text('You see Mira on all fours with her back to you. She is shoving an ear of corn in her ass which looks painful, but she is still moaning. Eventually, Mira finishes and tosses the cum covered ear of corn off into the bushes, almost hitting you!');
  qspCall(s, 'arousal', 'voyeur_sex', 30);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enterMiraMitka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  scene.img('images/characters/gadukino/mira/mirameadowsex.jpg');
  scene.text('You see Mira and Mitka talking to each other. You can\'t hear what they say from this far away, but they begin to undress in your meadow.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowsex1.jpg');
    scene.text('Mira lies before Mitka on the bedspread and opens her legs invitingly in front of him. Mitka wastes no time and immediately starts roughly fucking her pussy.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
      ((s as any).MiraVars ?? {})['QW'] = 3;
    }
    ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
    scene.img('images/characters/gadukino/mira/mirameadowsex2.jpg');
    scene.text('Fifteen minutes Mitka finally cums in Mira and leaves. Mira cleans up and then leaves as well.');
    qspCall(s, 'arousal', 'voyeur_sex', 15);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMiraGang(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars ?? {})['QW'] = 31;
  ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
  scene.img('images/characters/gadukino/mira/sex/mirameadowbj12.jpg');
  scene.text('Mira is almost invisible with all the bodies around her. You can only see her naked ass and feet swaying in the air. You spend half an hour watching as the men take turns fucking Mira until they are all tired.');
  qspCall(s, 'arousal', 'voyeur_sex', 30);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
  ]);
  scene.build();
}

function enterMiraperversion11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).MiraVars ?? {})['QW'] = 12;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('You don\'t know where to begin, so you stay silent, staring at Mira. At the same time, Mira is looking at her feet and blushing hard.');
  scene.text('Finally, you gather your wits and ask what happened last night? Still not looking you in the eye, Mira stammers out that she doesn\'t know why she did it. She says that she was out of control.');
  scene.text('But you were also drunk and did not do what she did. Her face sinks with shame, and she looks at the ground.');
  scene.text('You speak with her awhile and somehow manage to soothe her and tell her that she should just bite the bullet and move on.');
  scene.text('Mira sincerely thanks you for your support, but her eyes still look down…');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLesbMira(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 81) + 0;
  qspCall(s, 'npcStat', 'A64');
  scene.img('images/characters/gadukino/mira/mirakiss1.jpg');
  scene.text('"I\'m glad you came, Mira," you say.');
  scene.text('You continue, "Mira, I want you," you whispered in her ear and kissed her passionately on the lips.');
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).MiraVars ?? 0)?.['arousal'] < 20) {
    // TODO-QSP: act 'Continue': gt 'mirasex', 'mirakiss'
  }
  if (((s as any).MiraVars ?? 0)?.['arousal'] >= 20) {
    // TODO-QSP: act 'Continue': gt 'mirasex', 'foreplay'
  }
  scene.build();
}

function enterMiraLesb(s: GameState, scene: SceneBuilder): void {
  ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 41) + 40;
  qspCall(s, 'npcStat', 'A64');
  scene.img('images/characters/gadukino/mira/mirakiss4.jpg');
  scene.text('In the meadow, Mira walks up to you, smiling mischievously.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, let me see your pussy", she whispered in your ear while pinn...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, let me see your pussy", she whispered in your ear while pinning you to the tree and kissing your lips.`);
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 20) {
    // TODO-QSP: act 'Agree': gt 'mirasex', 'mirakiss'
  }
  if (((s as any).pcs_horny ?? 0) >= 20) {
    // TODO-QSP: act 'Agree': gt 'mirasex', 'foreplay'
  }
  if (((s as any).pcs_horny ?? 0) < 40) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
    qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
    scene.img('images/characters/gadukino/mira/mira_lesb_talk2.jpg');
    scene.text('You tried hard to break out of her embrace.');
    scene.text('"Mira, come on now, " you said, seeing the silent question in her eyes. The mood isn\'t right.');
    scene.text('"You\'re mean, " she sulked at you in response.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLesbTalkMira1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('You are long silent, looking at Mira, not knowing how to start the conversation. But then still dare.');
  scene.text('"Mira, you let all the boys in our village fuck you. Why?"');
  scene.text('"Yeah, so what?" Mira is a bit embarrassed as she replies.');
  scene.text('"I thought; you served all the boys, but you forgot about your best friend."');
  scene.text('"You are not a guy, so why would you want to do that?" Mira answered, surprised.');
  scene.text('"Everyone knows girls know the best ways to pleasure other girls." You shoot back.');
  scene.text('"But I don\'t do that. I\'m not a lesbian," said Mira.');
  scene.text('She may not be a lesbian, but you can tell by her flushed cheeks and shaky voice that she finds the idea very arousing.');
  scene.text('"Don\'t worry, I won\'t be mean or rough like Mitka", you continue to push her. "We can lick each other, or I can leave, and you can go back to the village boys instead and forget about me."');
  scene.text('Mira thought for a second, but it was an easy choice. She didn\'t want to lose your friendship.');
  // TODO-QSP: dynamic text: "Well, <<$pcs_nickname>>, I'll do it, " she said, falling to her knees.
  scene.text(`"Well, ${((s as any).pcs_nickname ?? 0)}, I'll do it, " she said, falling to her knees.`);
  scene.actions([
    { label: 'Let Mira lick you', goto: ['mirasex', 'miralick_first'] },
  ]);
  scene.build();
}

function enterLesbTalkMira2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  ((s as any).MiraVars ?? {})['had_sex'] = 2;
  qspCall(s, 'miroslava', 'miraclothes');
  qspCall(s, 'stat', '');
  scene.text('You walk up to Mira with a malicious smile on your face.');
  scene.text('"Well, Mira, congratulations," you said. "You\'re a whore now. The same as me. All the boys fucked you too."');
  scene.text('She tried to keep silent, but you were not satisfied.');
  scene.text('"So, did they or didn\'t they? You insist on an answer.');
  scene.text('"Well, yes", she acknowledged.');
  scene.text('"Do you know what that means? You continue.');
  scene.text('"What?" Mira asked, blushing terribly, although she already guessed where this was going.');
  scene.text('"It\'s time to return the favor", you replied triumphantly while leaning on a tree and beckoning her with your finger. "You can start."');
  scene.text('Mira hesitated a couple of moments as if pondering something and then sat down in front of you on her knees.');
  scene.actions([
    { label: 'Let Mira lick you', goto: ['mirasex', 'miralick_first'] },
  ]);
  scene.build();
}

function enterLesbTalkMira3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'miroslava', 'miraclothes');
  qspCall(s, 'stat', '');
  scene.text('You leaned on the tree and beckoned Mira the finger.');
  scene.text('"Get over her, Mira. You know what to do."');
  scene.text('She already knew what to do and got down on her knees in front of you.');
  scene.actions([
    { label: 'Let Mira lick you', goto: ['mirasex', 'miralick_first'] },
  ]);
  scene.build();
}

function enterMiraLesbTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 81) + 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/mira_lesb_talk.jpg');
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    scene.text('When you came into the clearing, Mira immediately came to you with a sly smile on her lips.');
  } else {
    scene.text('In the clearing, you met Mira. Seeing you, she immediately came up with a sly smile on her lips.');
  }
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you fucked all the boys in the village now.
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you fucked all the boys in the village now.`);
  scene.text('You tried to keep silent, but Mira wouldn\'t let it go.');
  scene.text('"So did they or didn\'t they?" - she insisted on your answer.');
  scene.text('"Well, yeah, so?"');
  scene.text('"I was thinking about how you served all the boys and forgot about your best friend," Mira said, looking you in the eye.');
  if (((s as any).stat ?? 0)?.['lesbian_count'] === 0) {
    scene.text('"So you\'re not a guy. Do you want to do that?" - you say, surprised');
    scene.text('"Everyone knows girls know the best ways to pleasure girls," she answered.');
  } else {
    scene.text('You already guessed where she was going with this but still hesitated.');
    // TODO-QSP: dynamic text: "Come on, don't sulk, <<$pcs_nickname>>, it doesn't suit you," she continued to ...
    scene.text(`"Come on, don't sulk, ${((s as any).pcs_nickname ?? 0)}, it doesn't suit you," she continued to get comfortable on the nearest stone.`);
    scene.text('"Well, Mira, I\'ll do it, " you said, falling on your knees.');
    scene.text('"In the end, why not please your friend?" you thought.');
  }
  if (((s as any).stat ?? 0)?.['lesbian_count'] === 0) {
    scene.actions([
      { label: 'Hesitate', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_lesb_talk2.jpg');
    scene.text('After these words, you stared dumbfounded at Mira.');
    scene.text('"But I don\'t do that. I\'m not a lesbian," you try to find a way out of this. But the idea that you will go down on a girl right here in the middle of the clearing makes your pussy soaking wet, even if you didn\'t want it to.');
    scene.actions([
      { label: 'Try to convince Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/mira_lesb_talk3.jpg');
    scene.text('You still hoped that you could change Mira\'s mind.');
    // TODO-QSP: dynamic text: "Come on, don't be a prude now, <<$pcs_nickname>>," said Mira, taking you by the...
    scene.text(`"Come on, don't be a prude now, ${((s as any).pcs_nickname ?? 0)}," said Mira, taking you by the shirt and pulling you to the nearest stone. "Sluts should always pleasure their friends first."`);
    scene.text('Sitting on the stone, she looked eagerly at you.');
    scene.text('"Well, what are you waiting for? I\'m ready."');
    scene.text('"Well, Mira, I\'ll do it, " you finally gave in, sinking to your knees. "In the end, why not help Mira out?" thinking to yourself.');
    scene.actions([
      { label: 'Lick Mira', goto: ['mirasex', 'lickmira_start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Lick Mira', goto: ['mirasex', 'lickmira_first'] },
    ]);
  }
  scene.build();
}

function enterMiraLesbTalk2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  ((s as any).MiraVars ?? {})['had_sex'] = 2;
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 81) + 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/mira_lesb_talk2.jpg');
  scene.text('Mira walks up to you with a malicious smile on her face.');
  // TODO-QSP: dynamic text: "Well, <<$pcs_nickname>>," congratulations, she said. "You are now the same whor...
  scene.text(`"Well, ${((s as any).pcs_nickname ?? 0)}," congratulations, she said. "You are now the same whore as me. All the boys fucked you too."`);
  scene.text('You tried to keep silent, but she was not satisfied.');
  scene.text('"So, did they or didn\'t they?" she insists on an answer.');
  scene.text('"Well, yes", you acknowledged.');
  scene.text('"You know what that means?" she continues.');
  scene.text('"What?" you ask, blushing terribly, although you already guessed where this is going.');
  scene.text('"It\'s time to return the favor, " she said triumphantly, leaning on a tree, beckoning you with her finger. "You can start."');
  scene.text('You hesitated for a couple of moments as if pondering something, and then you knelt down on your knees in front of her.');
  scene.actions([
    { label: 'Lick Mira', goto: ['mirasex', 'lickmira_first'] },
  ]);
  scene.build();
}

function enterMiraLesbTalk3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 41) + 40;
  ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/gadukino/mira/mira_lesb_talk3.jpg');
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    scene.text('When you came into the clearing, Mira immediately turned to you with an excited face.');
    // TODO-QSP: dynamic text: "Come help me out, <<$pcs_nickname>>," she said and started to get comfortable.
    scene.text(`"Come help me out, ${((s as any).pcs_nickname ?? 0)}," she said and started to get comfortable.`);
  } else {
    scene.text('In the clearing, you meet Mira. Seeing you, she immediately approached you with an excited face.');
    // TODO-QSP: dynamic text: "Where were you, <<$pcs_nickname>>? I was looking for you," she said. So get ove...
    scene.text(`"Where were you, ${((s as any).pcs_nickname ?? 0)}? I was looking for you," she said. So get over here and help me out.`);
  }
  scene.text('You are already familiar with this and get on your knees before her.');
  scene.actions([
    { label: 'Lick Mira', goto: ['mirasex', 'lickmira_first'] },
  ]);
  scene.build();
}

function enterMiraLesbTalk4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  ((s as any).MiraVars ?? {})['arousal'] = Math.floor(Math.random() * 41) + 40;
  ((s as any).MiraVars ?? {})['event_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('Walking through the village, you meet Mira. Seeing you, she immediately approaches you with an excited face.');
  // TODO-QSP: dynamic text: "Where were you, <<$pcs_nickname>>? I was looking for you," she said. "Let's go ...
  scene.text(`"Where were you, ${((s as any).pcs_nickname ?? 0)}? I was looking for you," she said. "Let's go take a walk in our meadow."`);
  scene.text('She grabs you by the hand and literally drags you behind her. You can hear Mira\'s excited breath and know fully why she is taking you to the meadow.');
  scene.text('When you came into the clearing, Mira immediately turned to you with an excited face.');
  // TODO-QSP: dynamic text: "Come help me out, <<$pcs_nickname>>," she said and started to get comfortable.
  scene.text(`"Come help me out, ${((s as any).pcs_nickname ?? 0)}," she said and started to get comfortable.`);
  scene.text('You are already familiar with this and get on your knees before her.');
  scene.actions([
    { label: 'Lick Mira', goto: ['mirasex', 'lickmira_first'] },
  ]);
  scene.build();
}

function enterMirameadow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  (((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 5)  &&  ((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 15  &&  ((s as any).temper ?? 0) >= 12  &&  ((s as any).temper ?? 0) < 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  (!((s as any).temp_md ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/gadukino/mira/mirameadowmastr.jpg');
    scene.text('You were about to approach her but stopped as she undoes her pants. You decide to watch what she does…');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr1.jpg');
    scene.text('Mira pulls up harshly on her panties, so they bite deeply between her labia. Mira looks around again, but you are concealed in the dense thicket. Thus, she fails to spot you watching…');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr2.jpg');
    scene.text('She pauses for a few seconds before slowly sliding her hand inside her panties to rub her crotch.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr3.jpg');
    scene.text('Next, she pulls down her panties, and you can see her wet pussy.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr4.jpg');
    scene.text('Then she removes her jacket, exposing her small tits.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr5.jpg');
    scene.text('She begins to fondle her breasts while continuing to finger herself.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr6.jpg');
    scene.text('Finally, she leans against the nearest tree as she brings herself to orgasm. You watch for a couple minutes in hopes of a sequel, but Mira begins to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
  } else {
    if (((s as any).MiraVars ?? 0)?.['meadow'] === 3  &&  qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 15  &&  ((s as any).temper ?? 0) >= 20  &&  ((s as any).temper ?? 0) < 25  &&  ((s as any).sunWeather ?? 0) === 1  &&  (!((s as any).temp_md ?? 0))) {
      scene.img('images/characters/gadukino/mira/mirameadowmastr7.jpg');
      scene.text('Mira is leaning against a tree and starts to caress herself.');
      qspCall(s, 'arousal', 'voyeur', 2);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr8.jpg');
    scene.text('She plays with herself for a few minutes before she stops to look at a nearby log…');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr9.jpg');
    scene.text('Having made her decision, she walks over to the log and starts to remove her panties.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr10.jpg');
    scene.text('Taking off her panties, she gently sits down on the log…');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr11.jpg');
    scene.text('Mira begins to caress herself again and brings herself to orgasm… You watch for a couple minutes in hopes of a sequel, but Mira starts to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
      if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).MiraVars ?? 0)?.['meadow'] === 2  &&  ((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 15  &&  ((s as any).temper ?? 0) >= 25  &&  ((s as any).sunWeather ?? 0) === 1  &&  (!((s as any).temp_md ?? 0))) {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        scene.img('images/characters/gadukino/mira/mirameadowmastr12.jpg');
        scene.text('You see Mira standing on a tree stump with a hand in her pants and her tits exposed enjoying the cool breeze.');
        scene.actions([
          { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr13.jpg');
    scene.text('She soon gets bored and, as if on purpose, turns her ass towards you and pulls off her skirt.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr14.jpg');
    scene.text('After doing this, she sits down on the stump and continues to caress herself.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr15.jpg');
    scene.text('After getting up from the stump, Mira takes off her top and is only in her panties.');
    qspCall(s, 'arousal', 'voyeur', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowmastr16.jpg');
    scene.text('Finally, she takes off her shirt, squats, and brings herself to orgasm. You watch for a couple minutes in hopes of a sequel, but Mira begins to get dressed, so you decide to make a hasty retreat…');
    qspCall(s, 'arousal', 'voyeur', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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
    }
  }
  if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).MiraVars ?? 0)?.['meadow'] === 2  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    if (((s as any).temp_md ?? 0) === 1  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
      qspCall(s, 'stat', '');
      scene.img('images/characters/gadukino/mira/mirameadowsex.jpg');
      scene.text('You see Mira and Mitka talking to each other. You can\'t hear what they say from this far away, but they begin to undress in your meadow.');
      scene.actions([
        { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/mirameadowsex1.jpg');
    scene.text('Mira lies before Mitka on the bedspread and opens her legs invitingly in front of him. Mitka wastes no time and immediately starts roughly fucking her pussy.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['QW'] === 2) {
      ((s as any).MiraVars ?? {})['QW'] = 3;
    }
    ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
    scene.img('images/characters/gadukino/mira/mirameadowsex2.jpg');
    scene.text('Fifteen minutes Mitka finally cums in Mira and leaves. Mira cleans up and then leaves as well.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_md ?? 0) === 2  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 8) {
        qspCall(s, 'stat', '');
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.img('images/characters/gadukino/mira/sex/mirameadowanal.jpg');
          scene.text('You see Mira lower her ass onto Mitka\'s member and begin to bounce on top of him. You can hear the sound every time her butt cheeks hit his thighs…');
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'stat', '');
        } else {
          scene.img('images/characters/gadukino/mira/sex/mirameadowanal1.jpg');
          scene.text('Mira gets down on all fours and spreads her ass cheeks wide apart. She moans loudly as Mitka drives his cock into her ass.');
          qspCall(s, 'arousal', 'voyeur', 2);
          qspCall(s, 'stat', '');
        }
        scene.actions([
          { label: 'Watch', handler: (st: GameState) => {
    ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
    scene.img('images/characters/gadukino/mira/sex/mirameadowanal2.jpg');
    scene.text('After a couple of minutes, Mitka slaps her ass and pulls out of Mira. She gets up on her knees before him and sticks her tongue out as his warm cum shoots all over her face.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp_md ?? 0) === 3  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
          if (((s as any).temper ?? 0) < 15) {
            scene.img('images/characters/gadukino/mira/sex/mirameadowbj.jpg');
            scene.text('She enthusiastically sucks his cock and takes his whole member down her throat…');
            qspCall(s, 'arousal', 'voyeur', 2);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Watch', handler: (st: GameState) => {
    ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
    scene.img('images/characters/gadukino/mira/sex/mirameadowbj1.jpg');
    scene.text('But, apparently, you\'re a little late because, after a couple minutes, Kolyamba puts a hand on the back of Mira\'s head and holds her while he cums down her throat. At first, she gags but eventually obediently swallows his cum…');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
    ]);
  } },
            ]);
          } else {
            ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
            scene.img('images/characters/gadukino/mira/sex/mirameadowbj2.jpg');
            scene.text('All Mira has on is some flip-flops with her face on the ground and her ass in the air. She moans loudly as Kolyamba pounds her pussy and cums inside of her…');
            qspCall(s, 'arousal', 'voyeur', 5);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
            ]);
          }
        } else {
          if (((s as any).temp_md ?? 0) === 4  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
            qspCall(s, 'stat', '');
            if (((s as any).temper ?? 0) < 20) {
              ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
              scene.img('images/characters/gadukino/mira/sex/mirameadowbj5.jpg');
              scene.text('Mira is tied to a tree as Vasyan enthusiastically drives his cock in her mouth. She gags and coughs, but simultaneously, she moves her head farther down his member. Finally, after a couple of minutes, Vasyan tilts back his head and, with a blissful roar cums in her mouth…');
              qspCall(s, 'arousal', 'voyeur', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
              ]);
            } else {
              ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
              scene.img('images/characters/gadukino/mira/sex/mirameadowbj6.jpg');
              scene.text('Mira is completely naked and bent over in front of Vasyan. She is really enjoying it as he thrusts into her ass. After a few minutes, he pulls out and sprays cum over her back.');
              qspCall(s, 'arousal', 'voyeur', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
              ]);
            }
          } else {
            if (((s as any).temp_md ?? 0) === 5  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
              qspCall(s, 'stat', '');
              if (((s as any).temper ?? 0) < 20) {
                ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
                scene.img('images/characters/gadukino/mira/sex/mirameadowbj3.jpg');
                scene.text('They are completely naked, and Mira sticks her ass up in the air as she deepthroats Vasyan. After a few minutes, you see Mira gulp down his sperm without removing her mouth from his cock.');
                qspCall(s, 'arousal', 'voyeur', 5);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                ]);
              } else {
                scene.img('images/characters/gadukino/mira/sex/mirameadowbj4.jpg');
                scene.text('They are completely naked, and Mira squeals joyfully as she rides on Vasyan\'s member. Unfortunately, he does not last long and cums all over her butt as soon as he pulls out of her.');
                qspCall(s, 'arousal', 'voyeur', 5);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                ]);
              }
            } else {
              if (((s as any).temp_md ?? 0) === 6  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
                ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
                if (((s as any).temper ?? 0) < 20) {
                  scene.img('images/characters/gadukino/mira/sex/mirameadowbj7.jpg');
                  scene.text('Mira is kneeling between the three friends and sucking their cocks with great pleasure. They are all crowded around her, so you can\'t determine who is in her mouth, who is grabbing her tits, and who is getting a handjob.');
                  qspCall(s, 'arousal', 'voyeur', 5);
                } else {
                  scene.img('images/characters/gadukino/mira/sex/mirameadowbj8.jpg');
                  scene.text('Mira is kneeling between the three friends and sucking their cocks with great pleasure. They are all crowded around her, so you can\'t determine who is in her mouth, who is grabbing her tits, and who is getting a handjob.');
                  qspCall(s, 'arousal', 'voyeur', 5);
                }
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                ]);
              } else {
                if (((s as any).temp_md ?? 0) === 7  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
                  if (((s as any).MiraVars ?? 0)?.['QW'] < 20) {
                    ((s as any).MiraVars ?? {})['QW'] = (((s as any).MiraVars ?? {})['QW'] ?? 0) + (1);
                  }
                  if (((s as any).temper ?? 0) < 20) {
                    scene.img('images/characters/gadukino/mira/sex/mirameadowbj11.jpg');
                    scene.text('Mira squats in front of one of the boys and takes his cock in her mouth while another gets ready for his turn.');
                    qspCall(s, 'arousal', 'voyeur', 5);
                  } else {
                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).temper ?? 0) < 25) {
                      scene.img('images/characters/gadukino/mira/sex/mirameadowbj10.jpg');
                      scene.text('Two boys are fucking Mira in her mouth and pussy simultaneously. The whole time they are laughing and talking while Mira moans in between them… Fifteen minutes later, they finish with her and leave.');
                      qspCall(s, 'arousal', 'voyeur', 5);
                    } else {
                      scene.img('images/characters/gadukino/mira/sex/mirameadowbj9.jpg');
                      scene.text('Mira and the two boys she is with are all naked. She is sucking one of them while another plays with her breasts and pussy from behind.');
                      qspCall(s, 'arousal', 'voyeur', 5);
                    }
                  }
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                  ]);
                } else {
                  if (((s as any).temp_md ?? 0) === 8  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 30) {
                    ((s as any).MiraVars ?? {})['QW'] = (((s as any).MiraVars ?? {})['QW'] ?? 0) + (1);
                    ((s as any).MiraVars ?? {})['Mitka_fucks'] = (((s as any).MiraVars ?? {})['Mitka_fucks'] ?? 0) + (1);
                    scene.img('images/characters/gadukino/mira/sex/mirameadowbj12.jpg');
                    scene.text('Mira is almost invisible with all the bodies around her. You can only see her naked ass and feet swaying in the air. You spend half an hour watching as the men take turns fucking Mira until they are all tired.');
                    qspCall(s, 'arousal', 'voyeur', 30);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                    ]);
                  } else {
                    if (((s as any).temp_md ?? 0) === 9  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 20) {
                      scene.img('images/characters/gadukino/mira/mirameadows.jpg');
                      scene.text('You see Mira on all fours with her back to you. She is shoving an ear of corn in her ass which looks painful, but she is still moaning. Eventually, Mira finishes and tosses the cum covered ear of corn off into the bushes, almost hitting you!');
                      qspCall(s, 'arousal', 'voyeur', 10);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Hide until she leaves', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'workout':
      enterWorkout(s, scene);
      break;
    case 'fruit_trees':
      enterFruitTrees(s, scene);
      break;
    case 'ruins':
      enterRuins(s, scene);
      break;
    case 'Mira_free_and_here':
      enterMiraFreeAndHere(s, scene);
      break;
    case 'Mira':
      enterMira(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case 'mira_mitka':
      enterMiraMitka(s, scene);
      break;
    case 'mira_gang':
      enterMiraGang(s, scene);
      break;
    case 'miraperversion11':
      enterMiraperversion11(s, scene);
      break;
    case 'lesb_mira':
      enterLesbMira(s, scene);
      break;
    case 'mira_lesb':
      enterMiraLesb(s, scene);
      break;
    case 'lesb_talk_mira1':
      enterLesbTalkMira1(s, scene);
      break;
    case 'lesb_talk_mira2':
      enterLesbTalkMira2(s, scene);
      break;
    case 'lesb_talk_mira3':
      enterLesbTalkMira3(s, scene);
      break;
    case 'mira_lesb_talk1':
      enterMiraLesbTalk1(s, scene);
      break;
    case 'mira_lesb_talk2':
      enterMiraLesbTalk2(s, scene);
      break;
    case 'mira_lesb_talk3':
      enterMiraLesbTalk3(s, scene);
      break;
    case 'mira_lesb_talk4':
      enterMiraLesbTalk4(s, scene);
      break;
    case 'mirameadow':
      enterMirameadow(s, scene);
      break;
    default:
      enterWorkout(s, scene);
      break;
  }
}

export const gad_meadow: LocationDef = {
  name: 'gad_meadow',
  title: '<center><h4>Meadow</h4></center>',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['Your cheeks redden with embarrassment as you strip off your clothes. You giggle nervously at the thought of getting caught naked in the meadow.'],
  enter: enter,
};
