import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClientTalk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  if (((s as any).whore_money_bjsex ?? 0) < 50) {
    scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/fear.jpg');
    scene.text('You open the door and look at a strange man who looks quite surprised. He accidentally mutters: "Holy shit, she looks terrible!", just loud enough for you to hear.');
    scene.text('He quickly pulls himself together and apologizes: "Erm… my apologies miss, I must be at the wrong apartment. Have a nice day."');
    scene.text('You open your mouth to tell him he is at the right place, but he\'s gone before you can speak up. Maybe you should try to look a bit nicer before you open the door, if you want to receive clients here.');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/home/event/whore/door_nude` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress') {
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door_glamur.jpg');
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door.jpg');
      }
    }
    scene.text(`When you open the door, you see a stranger quickly eyeing you up and down. He smiles and asks: "Excuse me, are you ${((s as any).pcs_nickname ?? '')}?"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Nope, never heard of her!"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Nope, never heard of her!"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pod_whore', 'hide', 'pod_client_talk_no');
  } },
      ]);
    }
    scene.actions([
      { label: '"Yes, that\'s me!"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You give him a sweet smile and say: "Yes, that\'s me. Why are you asking?"');
    scene.text('The man looks a tad embarrassed to bring it up, but he\'s too horny to back down now: "I hear you\'re a prostitute, who services men in the stairwell here. Is that right?"');
    if (((st as any).pcs_sleep ?? 0) < 10  ||  (!((st as any).pod_whore_client_count ?? 0))) {
      scene.actions([
        { label: 'Decline, you\'re too tired', goto: ['pod_whore', 'hide', 'pod_client_talk_noson'] },
      ]);
    } else {
      qspCall(st, 'willpower', 'prostitution', 'resist', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline, you don\'t want to fuck him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline, you don\'t want to fuck him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pod_whore', 'hide', 'pod_whore_no');
  } },
        ]);
      }
      scene.actions([
        { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pod_whore_countQW ?? 0) <= 15) {
    if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).pod_whore_client_count = (Math.floor(Math.random() * 5) + 4);
    }
  } else {
    if (((s as any).pod_whore_countQW ?? 0) > 15) {
      if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).pod_whore_client_count = (Math.floor(Math.random() * 9) + 8);
      }
    }
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 20) {
    (s as any).money_silicone = 0;
  } else {
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 30) {
      (s as any).money_silicone = 50;
    } else {
      if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 40) {
        (s as any).money_silicone = 100;
      } else {
        (s as any).money_silicone = 150;
      }
    }
  }
  (s as any).money_mop = 0;
  if (((s as any).pcs_makeup ?? 0) >= 2) {
    (s as any).money_mop = 50;
  }
  (s as any).money_hapri = 0;
  if (((s as any).pcs_hairbsh ?? 0) === 1) {
    (s as any).money_hapri = 50;
  }
  (s as any).money_glamur = 0;
  if (((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress') {
    (s as any).money_glamur = 150;
  }
  (s as any).money_odethooker = 0;
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    (s as any).money_odethooker = 50;
  }
  (s as any).money_skin = 0;
  if (((s as any).pcs_skin ?? 0) >= 600) {
    (s as any).money_skin = 50;
  }
  (s as any).money_skin_tan = 0;
  if (((s as any).pcs_tan ?? 0) > 0) {
    (s as any).money_skin_tan = 50;
  }
  (s as any).money_leghair = 0;
  if (((s as any).pcs_leghair ?? 0) <= 0) {
    (s as any).money_leghair = 50;
  }
  (s as any).money_resnic = 0;
  if (((s as any).pcs_lashes ?? 0) === 2) {
    (s as any).money_resnic = 50;
  }
  if (((s as any).pcs_lashes ?? 0) > 2) {
    (s as any).money_resnic = 100;
  }
  (s as any).money_pcs_lipbalm = 0;
  if (((s as any).pcs_lipbalm ?? 0) >= 1) {
    (s as any).money_pcs_lipbalm = 50;
  }
  (s as any).money_throat = 0;
  if (((s as any).pcs_throat ?? 0) >= 20) {
    (s as any).money_throat = 50;
  }
  (s as any).money_vagina = 0;
  if (((s as any).pcs_vag ?? 0) >= 20) {
    (s as any).money_vagina = 50;
  }
  (s as any).money_anus = 0;
  if (((s as any).pcs_ass ?? 0) >= 20) {
    (s as any).money_anus = 50;
  }
  (s as any).money_horny = 0;
  if (((s as any).pcs_horny ?? 0) > 70) {
    (s as any).money_horny = 50;
  }
  (s as any).money_vnesh = 0;
  if (((s as any).pcs_apprnc ?? 0) === -10) {
    (s as any).money_vnesh = 150;
  }
  (s as any).money_cumfrot = 0;
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
    (s as any).money_cumfrot = 50;
  }
  (s as any).money_sweat = 0;
  if (((s as any).pcs_sweat ?? 0) >= 20  &&  ((s as any).pcs_sweat ?? 0) <= 39) {
    (s as any).money_sweat = 50;
  }
  if (((s as any).pcs_sweat ?? 0) > 39) {
    (s as any).money_sweat = 100;
  }
  (s as any).money_cumlip = 0;
  if (((s as any).cumloc ?? 0)[12] === 1) {
    (s as any).money_cumlip = 50;
  }
  (s as any).money_cumface = 0;
  if (((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).money_cumface = 50;
  }
  (s as any).money_cumbelly = 0;
  if (((s as any).cumloc ?? 0)[14] === 1) {
    (s as any).money_cumbelly = 50;
  }
  (s as any).money_cumass = 0;
  if (((s as any).cumloc ?? 0)[4] === 1) {
    (s as any).money_cumass = 50;
  }
  (s as any).money_cumpussy = 0;
  if (((s as any).cumloc ?? 0)[0] > 0) {
    (s as any).money_cumpussy = 20;
  }
  if (((s as any).cumsumvag ?? 0) > 20) {
    (s as any).money_cumpussy = ((s as any).money_cumpussy ?? 0) + (30);
  }
  (s as any).money_cumanus = 0;
  if (((s as any).cumloc ?? 0)[3] > 0) {
    (s as any).money_cumanus = 20;
  }
  if (((s as any).cumsumass ?? 0) > 20) {
    (s as any).money_cumanus = ((s as any).money_cumanus ?? 0) + (30);
  }
  (s as any).money_son = 0;
  if (((s as any).pcs_sleep ?? 0) < 25) {
    (s as any).money_son = 50;
  }
  (s as any).whore_money_rnd = (Math.floor(Math.random() * 51) + 50);
  (s as any).whore_dopmoney = ((s as any).whore_money_rnd ?? 0);
  (s as any).whore_money_bjsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 50 + ((s as any).money_throat ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_clsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 150 - ((s as any).money_vagina ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_analsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 200 - ((s as any).money_anus ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_allsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0) + 50;
  (s as any).whore_money_groupsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0) + ((s as any).whore_money_clsex ?? 0) + ((s as any).whore_dopmoney ?? 0);
  (s as any).whore_money_bjvagsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_clsex ?? 0);
  (s as any).whore_money_bjanalsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0);
  scene.build();
}

function enterHide(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_analPlugIn') {
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('The guy asks in surprise: "There\'s a plug in your ass?"');
      scene.text('You blush and confess: "I like to be prepared…"');
      scene.text('He slowly pulls it out of your ass with a lewd grin: "In that case, you didn\'t prepare for nothing. I\'ll see to filling that hole again real soon."');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_lubri') {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
      (s as any).agape = 1;
      qspCall(s, 'arousal', 'anal_finger', 1);
      (s as any).pod_whore_lubri_text = '<br>You quickly interrupt the guy as you hand him your lube: "Wait, you should use this first! It\'ll feel better for both of us!" The guy spreads some lube over his fingers and rubs it all over his dick, before rubbing some on your tight butthole as well.';
    } else {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        (s as any).pod_whore_lubri_text = '';
        (s as any).agape = 2;
        (s as any).pcs_horny = 0;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_bj') {
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_bj = 'For some reason, you can\'t help but get turned on by the idea that you\'re going to suck some old stranger\'s dick in the stairwell for money. The guy must\'ve noticed your body tremble, and takes control more firmly: "Kneel and take my dick in your mouth, whore. I\'m not paying you to look at it." With these words, he unbuttons his pants. You kneel down and close your fingers around his firm erection, and slowly guide it towards your mouth. You close your ' + (((s as any).pc_desc ?? 0)?.['lips']) + ' lips around it and begin to gently suck him off. He encourages you between his moans: "That feels great girl… keep sucking, don\'t stop…"';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_bj = 'You\'re too afraid to look him in the eye, and avoid his look as you go with him. The guy tells you: "Kneel down, stupid bitch! You have two minutes to get it nice and slick, after that I want your ass!" You reel back a little at the thought… he\'s going to fuck your ass!? Then you remind yourself: you need the money. You drop to your knees and take his dick in your mouth, telling yourself you should drool over it as much as you can to make the assfucking easier on yourself.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).txt_pod_whore_bj = 'He pulls his penis out of his pants and tells you: "Start sucking, baby." Without saying a word, you drop to your knees and begin to suck his huge dick. You can feel it growing even larger in your mouth. Then he pulls his dick away from you, and orders you: "My balls, whore. Lick them, and lick them good." Well… he is paying. You silently do as he says, taking his balls in your mouth and sucking on them, licking the shaft of his dick as well. You can tell he\'s pleased with your performance, but you hope that doesn\'t encourage him to demand even rougher things from you.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).txt_pod_whore_bj = 'You kneel before him, and open your mouth wide. He immediately accepts your invitation and tries to shoves his dick in, but it\'s too big.  He crudely tells you to try harder: "Suck it, whore. If you can\'t take it down your throat, at least try something else." You do your best to please him, clamping your lips around the head of his cock and licking it all over with your tongue. You can tell you\'re doing a good job, and soon the guy can no longer suppress his moans.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).txt_pod_whore_bj = 'You follow the man into the stairwell and squat down, pulling his pants down. Wow… his cock is big. You admire his dick for a second and then take a deep breath before licking the head. You try to close your lips around the head and suck him off, but you already know you won\'t be able to deepthroat this guy. He puts his hands on the back of your head but doesn\'t force you to take him in any deeper, he\'s content with the amount of effort you\'re putting in. Occasionally you look up at him and look him into the eyes, and you can tell he\'s turned on by that.';
    }
    (s as any).txt_pod_whore_bj = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_vag') {
    (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_vag = 'You pull your clothes to the side and show him your bare ass as you bend over for him. He immediately moves up behind you and rubs his hard cock over your pussy lips before sliding it in. He roughly fucks you, slapping your ass cheeks in turn with his hand. You do your best to stifle your moans, but you\'re still too loud for his tastes. You feel him move a little and soon he covers your mouth with one of his hands, while he keeps slapping your ass with the other. You groan into his hand as he picks up the pace and fucks you even faster. He has an evil grin on his face and laughs when he tells you: "Keep it down, whore. People live here, do you want them all to come over and see what you\'re doing?" You desperately shake your head no and try to hold back your moans, but he\'s really not making it easy on you when he slaps your ass even harder, trying to provoke a squeal out of you.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_vag = 'You stand with your back to him, your hands resting on a window sill. When he pulls your clothes aside, you see a clear wet spot on them. Damn… you don\'t want to admit it to him, but you could really use a good fucking right now! Getting paid for it is just a bonus. He\'s already behind you, and quickly shoves his stiff rod into your pussy in one firm stroke. He gets it all the way in quite easily, and his balls are soon resting against your butt cheeks while he rests for a second and reaches out for your boobs. You gasp as he gently pinches your nipples and rubs them between his fingers, just as he begins to fuck you in long slow strokes.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).txt_pod_whore_vag = 'The man puts his hand on your shoulder and turns you around, moving his hand down your back and letting it rest on your ass for a moment, before giving it a loud slap. The sound of the slap and your yelp that followed echo throughout the stairwell, and desperately you hope no one heard you. He explores your pussy for a moment with his hands, and you hang your head in shame when you see his admiring look, and hear the loud sopping sounds of his fingers digging into your wet pussy over and over. Then, he decides he wants to fuck you and slams his dick in. From the short and hurried thrusts you can tell he doesn\'t want to be here for long. You must\'ve been moaning too much, since he covers up your mouth with the hand that was just on your pussy, and you can smell yourself on his fingers. The smell arouses you even more.';
    }
    (s as any).txt_pod_whore_vag = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_anal') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pod_whore_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_anal = 'The man puts his arm around your waist and pulls you up close against him. He tugs on your clothes for a second, trying to get them out of the way. Soon after, you feel his dick resting on your ass cheeks while he leans your head back and kisses you. Then he takes his cock into his hand, and guides it towards your puckered butthole. ' + ((s as any).pod_whore_lubri_text ?? 0) + ' He decides you\'re ready, and slowly pushes the head of his cock into your anus. He embraces your body for a second and just plays with your boobs while he lets you get used to the size, before slowly thrusting it in deeper and deeper.  It actually feels pretty good! You can\'t help but get aroused from the thought that an older man would pay you good money, just so he can fuck your cute little ass. He slowly picks up the pace, but all the while shows respect for your body and tries to make sure you have a good time too.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_anal = 'You pull your clothes to the side and show him your bare ass as you bend over for him and offer him your asshole. He eagerly accepts your invitation and walks up to you, immediately rubbing the head of his cock against your clenched anus. ' + ((s as any).pod_whore_lubri_text ?? 0) + ' He decides he\'s been patient enough, and roughly shoves his cock half-way into your anus in one thrust. Then he begins to fuck your ass roughly, while slapping your ass cheeks quite hard. You do your best to stifle your moans, but you\'re too loud for his tastes. You feel him move a little and soon he covers your mouth with one of his hands, while he keeps slapping your ass with the other. You groan into his hand as he picks up the pace and fucks your ass even faster. He has an evil grin on his face and laughs when he tells you: "Keep it down, whore. People live here. Do you want them all to come over and see you\'re selling your ass for money in the stairwell?" You desperately shake your head no and try to hold back your moans, but he\'s really not making it easy on you when he slaps your ass even harder, trying to provoke a squeal out of you. ';
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pod_whore_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).txt_pod_whore_anal = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_cum') {
    (s as any).temp_rand = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_cum = 'The man begins to moan, and within minutes he tells you he wants to finish in your mouth. You let him, and soon enough you feel him shooting several jets of cum into your mouth. You swallow it all obediently, and lick your lips and his dick clean afterwards. As you get up, he quickly tucks his dick back into his pants. Then he takes out his wallet and counts out the money he owes you. He seems very happy: "Nice job, whore. I\'ll definitely be back to make use of your services again!" You can\'t help but think: "The money is nice… but what happens if he tells all his friends? Will they also all come over to have a go at me… and what if they all come at once!?"';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_cum = 'The man quickly finishes, shooting his load in your mouth like he wanted. He quickly pulls up his pants and grabs some crumpled bills from his pocket. He offers them to you and says: "Here you go slut, you\'ve earned it. See you around, I\'m sure".';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).txt_pod_whore_cum = 'The man moans softly, and you soon feel his cum fill your mouth. Ugh, it tastes awful! You try to find a way to discretely spit it out, but he notices and puts his hands on your mouth keeping it shut. "No no slut, don\'t be rude! You\'re not spitting it out. I want to see an empty mouth before you get any money." Well, if he insists… you\'re not happy about it but nod obediently, and do your best to swallow his bitter sperm. It takes you some effort, but eventually you manage and you open your mouth and show him your open mouth, moving your tongue around. This puts a grin on his face, and he beams at you while he offers you the money: "See? That wasn\'t so bad, was it? Next time, don\'t make me ask… here you go, you\'ve earned it."';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).txt_pod_whore_cum = 'The man didn\'t give you any warming, and you\'re slightly surprised by the jets of his hot sperm suddenly landing on the back of your throat while you suck him off like he told you to. Realizing he\'s paying you good money for your services, you decide not to throw a fuss and simply keep sucking, swallowing the cum that he shoots into your mouth. After you\'re pretty sure he\'s finished, you slowly pull your head back and lick the remains of sperm from his cock. You can see his face is flustered, and it takes him a second to recuperate. He gently runs his hand through your hair and smiles at you: "Wow… you\'re the best whore I\'ve ever had, that was amazing!" Then he quickly straightens his clothes. You can\'t help but feel a tinge of pride as you see him count out your well-earned money… another happy customer!';
    }
    (s as any).txt_pod_whore_cum = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_bj') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_bj = 'I want a blowjob.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_bj = 'You do blowjobs, right?';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_bj = 'I want those pretty lips around my dick.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_bj = 'I want to watch that cute face of yours as it bobs up and down on my cock.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_bj = 'I haven\'t had any in a while… take me in your mouth and I\'ll be happy.';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_bj = 'I don\'t have much time right now, how about a quick blowjob?';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_bj = 'I heard you give the best blowjobs in town… I want to find out for myself if that\'s true.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_bj = 'Are you any good at sucking dick? I want a good blowjob right now.';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_bj = 'You gave a friend of mine a blowjob, and he told me you were great. I want the same.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_bj = 'I want you to take my cock as far down your throat as it\'ll go!';
    }
    (s as any).result = ((s as any).rnd_client_text_bj ?? 0);
    (s as any).rnd_client_text_bj = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_vag') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_vag = 'Is your pussy still tight? If so, I want it.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_vag = 'I feel like fucking your pussy today.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_vag = 'I only want your pussy today, I\'m in a hurry.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_vag = 'I have been in a bit of a dry spell… I really need some pussy right now!';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_vag = 'My friend told me you have the cutest little squeals when he fucked your pussy. I want to find out for myself if that\'s true.';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_vag = 'I want to fuck your pussy, but I don\'t have much time. We\'ll have to be quick!';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_vag = 'I hear your snatch is always dripping. I want to see you squirm as I fuck it.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_vag = 'One of my buddies told me you have the best pussy in town. I have to have it too!';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_vag = 'One of my best friends is getting married soon, and we need a girl for his bachelor party who puts out. I need to fuck your pussy first, to see if you\'re good enough for him.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_vag = 'Is it okay if I take some photos of you as I fuck your pussy? No? Okay… I still want you.';
    }
    (s as any).result = ((s as any).rnd_client_text_vag ?? 0);
    (s as any).rnd_client_text_vag = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_anal') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_anal = 'I want to fuck that tight little asshole of yours.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_anal = 'I\'m looking for a cute ass to fuck, but I\'m kind of in a hurry.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_anal = 'I hear anal sex is great, but I want to try before I fuck my girlfriend there… would you mind giving me some tips?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_anal = 'I hear you\'re the biggest buttslut in town. I want your ass.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_anal = 'My friend said you came when he fucked you in the ass… I bet him I could do that too.';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_anal = 'I\'m kind of in a rush, how about a quick buttfuck?';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_anal = 'I\'m looking for something a bit unusual today… how about your ass?';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_anal = 'Do you do anal sex too?';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_anal = 'Your ass looks great, girl. How about I fuck you there?';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_anal = 'I want to see you bounce that butt on my cock while I fuck your ass.';
    }
    (s as any).result = ((s as any).rnd_client_text_anal ?? 0);
    (s as any).rnd_client_text_anal = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_all') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_all = 'I can\'t decide what I want… how about I just pay for everything and I decide as we go?';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_all = 'I want all of your holes.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_all = 'I want to fuck all of your holes, no questions asked. Understood?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_all = 'You\'re so hot, I can\'t just choose one thing! You know what, I\'ll get the full package.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_all = 'I\'m still fairly new to sex. How about I just pay you for everything, and we see where it leads?';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_all = 'I can\'t decide what I want… how about I just pay for everything and I decide as we go?';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_all = 'I want all of your holes.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_all = 'I want to fuck all of your holes, no questions asked. Understood?';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_all = 'You\'re so hot, I can\'t just choose one thing! You know what, I\'ll get the full package.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_all = 'I\'m still fairly new to sex. How about I just pay you for everything, and we see where it leads?';
    }
    (s as any).result = ((s as any).rnd_client_text_all ?? 0);
    (s as any).rnd_client_text_all = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_group') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_group = 'I\'m not alone here, my friend is waiting outside. Can you handle two guys at once?';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_group = 'My buddy is waiting just around the corner, we want to fuck you together.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_group = 'My friend is about to leave town, but I promised him a cute girl to fuck before he goes. How about we fuck you together?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_group = 'Me and my buddy are looking for a quick fuck. You available?';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_group = 'All of my friends have been saying how great you are at fucking a group of guys. Care to take care of us?';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_group = 'We don\'t have much time, we\'re just looking for a quick fuck. We want all of your holes.';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_group = 'Me and my friend are looking for a cute little fuckpuppet to stuff. You will do just fine.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_group = 'It\'s my birthday, and my friend here says he\'ll share you with me as a gift.';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_group = 'It\'s my friend\'s first time, but I want in as well. Do you fuck two guys at once?';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_group = 'We\'re looking for a girl that\'s not so squeamish. You want to get fucked by my buddy and me?';
    }
    (s as any).result = ((s as any).rnd_client_text_group ?? 0);
    (s as any).rnd_client_text_group = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_bj_vag') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_bj_vag = 'I want to fuck your throat and pussy both.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_bj_vag = 'I\'m looking for a quick blowjob and fuck.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_bj_vag = 'How about you suck me off for a while, and after that I fuck your pussy?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_bj_vag = 'My friend says your mouth and pussy are both great… you know what? I\'ll take both.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_bj_vag = 'How about you warm me up with your mouth first, and then I fuck your pussy?';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_bj_vag = 'I want to fuck your pussy, and then watch you lick your juices off my cock.';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_bj_vag = 'I hear you\'re the best lay in town. I want your mouth and pussy, and quick… I\'m in a hurry.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_bj_vag = 'I think I\'ll have both your mouth and pussy today.';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_bj_vag = 'I was planning to only fuck your pussy, but how can I say no to that cute little face of yours? I\'ll have a blowjob too.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_bj_vag = 'I bet your lips would look great around my cock. Both sets of lips, if you know what I mean.';
    }
    (s as any).result = ((s as any).rnd_client_text_bj_vag ?? 0);
    (s as any).rnd_client_text_bj_vag = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_text_bj_anal') {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_text_bj_anal = 'I want to fuck you in the ass. You can warm me up with your mouth first.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_text_bj_anal = 'My wife won\'t give me a blowjob, or let me fuck her ass… so I want both from you.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_text_bj_anal = 'I love it when a girl sucks my dick, right before I fuck her ass.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_text_bj_anal = 'I\'m not interested in your pussy today, I want you to give me a blowjob and then we move straight to your ass.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_text_bj_anal = 'I feel like doing something nasty today… how about you blow me, and then I fuck your ass?';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_text_bj_anal = 'I want your mouth and ass today.';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_text_bj_anal = 'I hear your ass is the best in town, so I definitely want to fuck that. How about you blow me first?';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rnd_client_text_bj_anal = '' + ((s as any).pcs_nickname ?? 0) + ', the buttslut… what would I ever want from you? Your mouth and ass, of course!';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).rnd_client_text_bj_anal = 'I\'m going to fuck your throat, and then I\'m going to fuck your ass.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).rnd_client_text_bj_anal = 'Your pussy can get some rest today, I want to fuck your ass. You can lubricate my cock by giving me a blowjob first.';
    }
    (s as any).result = ((s as any).rnd_client_text_bj_anal ?? 0);
    (s as any).rnd_client_text_bj_anal = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_torgtext1') {
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_torgtext = 'But those prices seem kind of high. Take off ' + qspFunc(s, 'money', 'string_profit', 100) + ' and we have a deal.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_torgtext = 'But you\'re rather expensive. How about a ' + qspFunc(s, 'money', 'string_profit', 100) + ' discount?';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_torgtext = 'But my friends said you would be cheaper. How about you take ' + qspFunc(s, 'money', 'string_profit', 100) + ' off the price?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_torgtext = 'But… you\'re not that good looking. Take ' + qspFunc(s, 'money', 'string_profit', 100) + ' off the price and I will consider it.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_torgtext = 'But I don\'t think you\'re worth that money. Let\'s agree on ' + qspFunc(s, 'money', 'string_profit', 100) + ' cheaper.';
    }
    (s as any).result = ((s as any).rnd_client_torgtext ?? 0);
    (s as any).rnd_client_torgtext = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_torgtext2') {
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_torgtext2 = 'But you want too much money. Maybe for ' + qspFunc(s, 'money', 'string_profit', 50) + ' less…';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_torgtext2 = 'But you\'re too expensive. Make me a better offer, at least ' + qspFunc(s, 'money', 'string_profit', 50) + ' lower.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_torgtext2 = 'But your services are not as cheap as I thought. How about you lower your prices a little? ' + qspFunc(s, 'money', 'string_profit', 50) + ' maybe?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_torgtext2 = 'But my friends said you were cheaper. How about ' + qspFunc(s, 'money', 'string_profit', 50) + ' less? That sounds like a fair price to me.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_torgtext2 = 'But I\'m a little bit short on money. Can you do it for ' + qspFunc(s, 'money', 'string_profit', 50) + ' less?';
    }
    (s as any).result = ((s as any).rnd_client_torgtext2 ?? 0);
    (s as any).rnd_client_torgtext2 = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_torgtext3') {
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_torgtext3 = 'But what the fuck!? I was told you were not that expensive!';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_torgtext3 = 'But that\'s a lot of money! I was told you\'re a cheaper whore than that!';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_torgtext3 = 'But everyone in town says you\'re a cheap whore. What happened to your prices?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_torgtext3 = 'But… what? The guys told me you were a cheap fuck! Those prices aren\'t cheap at all!';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_torgtext3 = 'But wow… you\'re way too greedy, for that money I can fuck three whores in the city - at once!';
    }
    (s as any).result = ((s as any).rnd_client_torgtext3 ?? 0);
    (s as any).rnd_client_torgtext3 = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_torgtext4') {
    (s as any).temp_rand = (Math.floor(Math.random() * 7) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_torgtext4 = 'Sound good?';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_torgtext4 = 'Do you agree?';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_torgtext4 = 'Deal?';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_torgtext4 = 'What do you say?';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_torgtext4 = 'Alright?';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rnd_client_torgtext4 = 'Sound fair?';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rnd_client_torgtext4 = 'How about it?';
    }
    (s as any).result = ((s as any).rnd_client_torgtext4 ?? 0);
    (s as any).rnd_client_torgtext4 = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rnd_client_torgtext5') {
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_client_torgtext5 = 'I can give you';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rnd_client_torgtext5 = 'I quickly counted how much money I have on me, it\'s';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rnd_client_torgtext5 = 'I have more than enough on me. I\'ll give you';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rnd_client_torgtext5 = 'I\'m a bit short on cash, I can only offer you';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rnd_client_torgtext5 = 'I think you\'re worth';
    }
    (s as any).result = ((s as any).rnd_client_torgtext5 ?? 0);
    (s as any).rnd_client_torgtext5 = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_no') {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/no2.jpg');
    scene.text('"Sorry, I\'m a little busy right now. Perhaps you could come back later?"');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_noprice') {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/no1.jpg');
    scene.text('"I\'m sorry, but I think my rates are more than reasonable. No deal."');
    scene.actions([
      { label: 'Close the door on him', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_price') {
    scene.text('You smile and give him a list of your services:');
    if (((s as any).whore_money_rnd ?? 0) <= 0) {
      scene.text('You give him a seductive smile: "You know what, you\'re cute. I\'ll give you a special deal on my prices."');
    }
    scene.text(`"A blowjob will cost you ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_bjsex ?? ''))}<br>fucking my pussy is ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_clsex ?? ''))}<br>or you can fuck my ass for ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_analsex ?? ''))}.<br>You can also just give me ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_allsex ?? ''))}, you can fuck me any way you like then for as long as you want… no holes barred.<br>If you are with your friends, I'll be happy to take all of you on at once for ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_groupsex ?? ''))}.`);
    (s as any).rnd_client_event = (Math.floor(Math.random() * 7) + 1);
    if (((s as any).rnd_client_event ?? 0) === 1) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_bj');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev1\'';
      (s as any).total_money = ((s as any).whore_money_bjsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 2) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_vag');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev2\'';
      (s as any).total_money = ((s as any).whore_money_clsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 3) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_anal');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev3\'';
      (s as any).total_money = ((s as any).whore_money_analsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 4) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_all');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev4\'';
      (s as any).total_money = ((s as any).whore_money_allsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 5) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_group');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev5\'';
      (s as any).total_money = ((s as any).whore_money_groupsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 6) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_bj_vag');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev6\'';
      (s as any).total_money = ((s as any).whore_money_bjvagsex ?? 0);
    }
    if (((s as any).rnd_client_event ?? 0) === 7) {
      (s as any).rnd_client_text = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_text_bj_anal');
      (s as any).goto_rnd_client_event = 'gt \'pod_whore\',\'hide\', \'pod_whore_ev7\'';
      (s as any).total_money = ((s as any).whore_money_bjanalsex ?? 0);
    }
    (s as any).rnd_client_money = (Math.floor(Math.random() * 96) + 150);
    (s as any).rnd_client_money2 = (Math.floor(Math.random() * 146) + 450);
    (s as any).rnd_client_money3 = (Math.floor(Math.random() * 146) + 300);
    (s as any).rnd_client_torgtext1 = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_torgtext1');
    (s as any).rnd_client_torgtext2 = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_torgtext2');
    (s as any).rnd_client_torgtext3 = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_torgtext3');
    (s as any).rnd_client_torgtext4 = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_torgtext4');
    (s as any).rnd_client_torgtext5 = qspFunc(s, 'pod_whore', 'hide', 'rnd_client_torgtext5');
    (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        if (((s as any).total_money ?? 0) >= 250) {
          (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + ' ' + ((s as any).rnd_client_torgtext1 ?? 0) + '"';
          (s as any).total_money = ((s as any).total_money ?? 0) - (100);
        } else {
          if (((s as any).total_money ?? 0) < 250) {
            (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
          }
        }
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          if (((s as any).total_money ?? 0) >= 150) {
            (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + ' ' + ((s as any).rnd_client_torgtext2 ?? 0) + '"';
            (s as any).total_money = ((s as any).total_money ?? 0) - (50);
          } else {
            if (((s as any).total_money ?? 0) < 150) {
              (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
            }
          }
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            if (((s as any).rnd_client_event ?? 0) < 4  &&  ((s as any).total_money ?? 0) >= 250) {
              (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + ' ' + ((s as any).rnd_client_torgtext3 ?? 0) + ' ' + ((s as any).rnd_client_torgtext5 ?? 0) + ' ' + qspFunc(s, 'money', 'string_profit', ((s as any).rnd_client_money ?? 0)) + '. ' + ((s as any).rnd_client_torgtext4 ?? 0) + '"';
              (s as any).total_money = ((s as any).rnd_client_money ?? 0);
            } else {
              if (((s as any).rnd_client_event ?? 0) < 4  &&  ((s as any).total_money ?? 0) < 250) {
                (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
              }
            }
            if (((s as any).rnd_client_event ?? 0) >= 4  &&  ((s as any).rnd_client_event ?? 0) <= 5  &&  ((s as any).total_money ?? 0) >= 600) {
              (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + ' ' + ((s as any).rnd_client_torgtext3 ?? 0) + ' ' + ((s as any).rnd_client_torgtext5 ?? 0) + ' ' + qspFunc(s, 'money', 'string_profit', ((s as any).rnd_client_money2 ?? 0)) + '. ' + ((s as any).rnd_client_torgtext4 ?? 0) + '"';
              (s as any).total_money = ((s as any).rnd_client_money2 ?? 0);
            } else {
              if (((s as any).rnd_client_event ?? 0) >= 4  &&  ((s as any).total_money ?? 0) < 600) {
                (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
              }
            }
            if (((s as any).rnd_client_event ?? 0) >= 6  &&  ((s as any).total_money ?? 0) >= 450) {
              (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + ' ' + ((s as any).rnd_client_torgtext3 ?? 0) + ' ' + ((s as any).rnd_client_torgtext5 ?? 0) + ' ' + qspFunc(s, 'money', 'string_profit', ((s as any).rnd_client_money3 ?? 0)) + '. ' + ((s as any).rnd_client_torgtext4 ?? 0) + '"';
              (s as any).total_money = ((s as any).rnd_client_money3 ?? 0);
            } else {
              if (((s as any).rnd_client_event ?? 0) >= 6  &&  ((s as any).total_money ?? 0) < 450) {
                (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
              }
            }
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              (s as any).rnd_clint_torg = 'The man thinks for a second, and then says: "' + ((s as any).rnd_client_text ?? 0) + '"';
            }
          }
        }
      }
    }
    if (((s as any).temp_rand ?? 0) >= 2  &&  ((s as any).temp_rand ?? 0) <= 4) {
      scene.actions([
        { label: 'Decline and shut the door', goto: ['pod_whore', 'hide', 'pod_whore_noprice'] },
      ]);
    }
    scene.actions([
      { label: 'Accept and go with him', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).goto_rnd_client_event || ''));
  } },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar1') {
    scene.text('You simply give the man a questioning look, and he continues: "Some friends of mine gave me this address. They said a beautiful girl lives here, that took care of both their bodies and minds. You sure look beautiful… I thought you were the one they were talking about."');
    scene.actions([
      { label: 'Object', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar2'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar2') {
    scene.text('You pretend to be insulted: "So you\'re saying I look like a whore!?"');
    if (((s as any).pod_whore_countQW ?? 0) <= 15) {
      scene.text('The man apologizes again: "I\'m so sorry, I must\'ve gotten the wrong address."');
      scene.text('He turns around and leaves before you can tell him otherwise.');
      scene.actions([
        { label: 'Close the door', goto: ['korrPar', ''] },
      ]);
    } else {
      scene.text('He looks at you defiantly and says: "Look, girl. You can\'t blame me for being confused… it even says so right there on the wall! A whore lives here!"');
      scene.actions([
        { label: 'Scold him', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar3'] },
        { label: 'Back down a little', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar5'] },
      ]);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar3') {
    qspCall(s, 'stat', '');
    scene.text('You act insulted and shout at him: "Any idiot can write down that crap on someone\'s wall, that doesn\'t make it true!"');
    scene.text('The man raises his hands in defense and mutters: "Alright alright, I get it… she\'s not here. I\'m sorry, I should go."');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Close the door', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Close the door', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'korrPar', '');
  } },
      ]);
    }
    scene.actions([
      { label: '"Are you sure?"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar9'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar4') {
    scene.text('You\'re not sure whether to be insulted or not. You simply tell him: "I\'m sorry sir, I don\'t know any prostitutes. You should leave."');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar5') {
    scene.text('You smirk at him: "Just because someone wrote it there, that doesn\'t make it true… for all I know, you were the one who put that there!"');
    scene.text('He goes in full defensive mode now: "Wait, what? I didn\'t do anything!"');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'End the conversation', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'End the conversation', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pod_whore', 'hide', 'pod_client_talk_bazar7');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep teasing him', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar6'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar6') {
    qspCall(s, 'stat', '');
    scene.text(`You keep teasing him: "Well, you could always just go from door to door, trying to find a girl named ${((s as any).pcs_nickname ?? '')}…", while you do your best not to laugh.`);
    scene.text('The guy is clearly taken aback, his face deeply red with embarrassment.');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'End the conversation', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'End the conversation', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pod_whore', 'hide', 'pod_client_talk_bazar7');
  } },
      ]);
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Confess you\'re ' + String(((s as any).pcs_nickname ?? '') ?? ''), goto: ['pod_whore', 'hide', 'pod_client_talk_bazar8'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar7') {
    qspCall(s, 'stat', '');
    scene.text('You sigh and tell him: "This conversation is over. Good day, sir", and close the door in his face. Mere seconds later, you already feel bad about how you treated him.');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar8') {
    scene.text(`You feel bad for the guy, and confess: "I'm sorry babe, I was just teasing you. I'm ${((s as any).pcs_nickname ?? '')}. How can I make it up to you? All of my holes are at your disposal, I'll even give you a discount…"`);
    scene.text('He looks relieved, and it takes him a second to realize why he\'s here. Then it hits him, and he says: "Right… how much do you charge?"');
    scene.actions([
      { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar9') {
    scene.text(`You can barely hide your smile when you say: "Is that all you have to say for yourself? You know, my name also happens to be ${((s as any).pcs_nickname ?? '')}…"`);
    scene.text(`The man looks at you with a somewhat confused look on his face: "Wait… so you're not the ${((s as any).pcs_nickname ?? '')} that's being advertised on the walls? Are you also in the business or not?"`);
    scene.actions([
      { label: '"Maybe…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar10'] },
      { label: '"Just kidding!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar11'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar10') {
    scene.text('You show the effort of quickly eyeing him top to bottom, and then smile mysteriously: "For you, sweetie? Maybe… do you like me?"');
    scene.text('The man really doesn\'t know what\'s happening any more: "Erm, do I like you? Heck yea, you\'re pretty cute… why, do you want to go out some time?"');
    scene.actions([
      { label: '"You do look cute…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar12'] },
      { label: '"No, I was joking!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar13'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar11') {
    scene.text(`You decide to let him off easy, and just admit it: "I was just kidding, babe. I'm ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('The guy looks at you, not quite sure what to think: "Wait… so you were just leading me on?"');
    scene.text('You give him a friendly smile and say: "I\'m sorry, babe. Maybe I can make it up to you? I bet I could make you feel good…"');
    scene.text('You see the greedy look in his eyes, you can tell he wants you. After a second, he says: "Alright, you got me. How much do you charge?"');
    scene.actions([
      { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar12') {
    scene.text('You keep smiling mysteriously at him, chuckling internally. You love messing with guys! You tell him: "Well, you do look cute… what did you have in mind?"');
    scene.text('He\'s half blubbering now, and you can tell he\'s doing his best to find a way out of this conversation: "Erm… I don\'t know, maybe I could take you some place nice?"');
    scene.text('You simply smile: "Oh? Where would you take me?"');
    scene.text('The man feels encouraged by you not blowing him off immediately, and suggests: "Maybe we could go for a walk? Or we could go have a drink in a cafe, or go see a movie?"');
    scene.actions([
      { label: '"Sorry, sweetie…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar14'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar13') {
    qspCall(s, 'stat', '');
    scene.text('You chuckle and shake your head: "Of course not! What kind of girl do you think I am?"');
    scene.text('The man is obviously insulted, and sneers: "A bitch, to be honest."');
    scene.text('You feel you may have crossed a line, and try to respond: "How would you feel if some guy was at your door, hoping to find a prostitute?"');
    scene.text('He\'s not buying it, and angrily says: "I would feel like this is a huge fucking waste of time. Thanks for nothing, bitch."');
    scene.text('He turns around and leaves before you can get another word in, and you feel a tinge of regret for hurting his feelings like that.');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_bazar14') {
    scene.text('You can\'t keep toying with this poor man! You chuckle and tell him: "I\'m sorry sweetie, I don\'t think I could take my clients to a place like that!"');
    scene.text(`The man is silent for a moment while he connects the dots in his mind, and then mutters: "Wait… so you are <b>the</b> ${((s as any).pcs_nickname ?? '')} and you were messing with me the whole time!?"`);
    scene.text('You laugh out loud and tell him: "Sorry babe, I was testing you. I like you though, you\'re cute. How about I give you a discount, maybe I can make it up to you?"');
    scene.text('The man looks a tad embarrassed, but is mostly just relieved you are who he thinks you are: "Damn, you got me there! Alright then… how much do you charge?"');
    scene.actions([
      { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_no') {
    qspCall(s, 'stat', '');
    scene.text(`You shake your head: "I'm sorry, I don't know who this ${((s as any).pcs_nickname ?? '')} is. You must be at the wrong number."`);
    scene.text('The man smiles and apologizes: "I\'m sorry, miss. Could you tell me where I could find a willing girl? I have more than enough money on me."');
    scene.actions([
      { label: '"I don\'t know any whores!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar4'] },
      { label: '"Money, you say?"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar1'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_client_talk_noson') {
    qspCall(s, 'stat', '');
    scene.text('You look at the guy sympathetically and say: "I\'m sorry, babe. You\'re cute, but I\'m simply exhausted today. I wouldn\'t be able to give you the attention you deserve. Maybe come back tomorrow, I\'ll show you a good time then?"');
    scene.text('The man is a tad frustrated about coming over to your place for nothing, but you can tell your attempts to butter him up salvaged the situation a bit: "Really, you think so? Alright… maybe I\'ll come back tomorrow."');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev_end') {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 0, '', '', 10);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 0, '', '', 30);
    if (((s as any).pcs_energy ?? 0) >= 15) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (4);
    }
    if (((s as any).pcs_hydra ?? 0) >= 20) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
    }
    (s as any).pcs_hairbsh = 0;
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(s, 'money', 'earn', ((s as any).total_money ?? 0), 'cash');
    (s as any).pod_whore_countQW = ((s as any).pod_whore_countQW ?? 0) + (1);
    (s as any).pod_whore_client_day = ((s as any).daystart ?? 0);
    (s as any).pod_whore_client_count = ((s as any).pod_whore_client_count ?? 0) - (1);
    qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 7) + 6));
    qspCall(s, 'arousal', 'end');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/cum` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_cum']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text(`The man gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).total_money ?? ''))}, as promised.`);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', '');
  }, goto: ['korrPar', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', '');
  }, goto: ['pod_ezd', 'etaj_2'] },
      ]);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev1') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 11) + 5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/bj` + (Math.floor(Math.random() * 17) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev2') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 9) + 7), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_vag']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev3') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 9) + 7), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 8) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev4') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 10) + 3), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/bj` + (Math.floor(Math.random() * 17) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 9) + 5), 'prostitution');
    qspCall(st, 'stat', '');
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_vag']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', (Math.floor(Math.random() * 9) + 7), 'prostitution');
    qspCall(st, 'stat', '');
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 8) + '.mp4"></video></center>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_anal']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev6') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 11) + 5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/bj` + (Math.floor(Math.random() * 17) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 9) + 7), 'prostitution');
    qspCall(st, 'stat', '');
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_vag']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev7') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 11) + 5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/bj` + (Math.floor(Math.random() * 17) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', (Math.floor(Math.random() * 9) + 7), 'prostitution');
    qspCall(st, 'stat', '');
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/sex` + (Math.floor(Math.random() * 7) + 8) + '.mp4"></video></center>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_anal']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_groupbj') {
    (s as any).temp_rand = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_groupbj = 'You drop down to your knees and eagerly begin to suck off one of the guys. After a few minutes, his friend gets impatient and says: "Back off man, it\'s my turn now." His friend replies: "Don\'t be greedy, she can service two cocks at the same time. ' + ((s as any).pcs_nickname ?? 0) + ', suck us both off at once." He rubs his cock against your cheek, spreading his precum all over it. You do your best to please him too, and try to please both of them at the same time. After a few minutes, one of the men tells you he\'s going to fuck you now. He says: "Bare your ass and go lean up against that railing."';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_groupbj = 'You follow them to the stairwell. Your knees are trembling, and you feel your pussy slowly getting soaked between your legs… are you really going to fuck two guys at once, just for the money? One guy unbottons his pants immediately, his erection eagerly jumping out. The other guy still has his pants on, and you massage the bulge in his groin through the fabric. You silently kneel before them and gently take the exposed cock in your hand. He rudely interrupts you and says: "Nice try, whore. Open your mouth wide, I\'m going to fuck your throat." You do your best to suppress your gag reflex as he rams his dick down your throat, while his friend takes off your top and roughly massages your tits with his hands. He pinches your nipples hard, in an attempt to get you to open your mouth further for his friend so he can ram his dick even further down your throat. After a while, they switch places. They repeat the same thing, and from the routine in their handlings you wonder if they\'ve used girls like you more often together. The guys want more than just a blowjob from you, and one of them commands you: "Get over there and lean against the railing, pushing your ass up. We\'re going to fuck you now."';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).txt_pod_whore_groupbj = 'You don\'t know these guys at all. You follow them, rather timidly, hoping they will make the first move. The shorter guy pulls his pants down, and orders you: "Go on whore, suck it." His dick is not particularly big. Nevertheless, you do as he says, and you do your best to suck him off like it\'s the best dick you have ever had. The other guy takes his pants off and offers you his dick too. It\'s a fair bit bigger, and you do your best to please both guys with your mouth. Nevertheless, they can tell your heart is not really into it. They look at one another and say: "Looks like it\'s up to us… she\'s not trying at all." You don\'t want to find out what they mean by that and redouble your efforts, trying to enthusiastically suck one of them off while you massage the other guy\'s cock with your hand.  You see them looking at one another, and then one guy speaks up: "I\'m going first. You got to go first on that last whore we fucked." You can tell the other guy is a bit disappointed, but nods in agreement: "That\'s fair". Then he smirks at you: "Save some for me, whore."';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).txt_pod_whore_groupbj = 'You move up between the guys and put your arms around their waists, and say: "Come on guys, let\'s go into the stairwell. How do you want me?" You can tell the boys are uncomfortable, and you guide them towards a quiet corner. You try to reassure them: "Relax boys… we\'ll be fine here, no one ever walks through here at this time of day. Why don\'t you show me what you have for me?" They\'re still rather timid. You drop to your haunches and undo the pants of one of the guys, pulling out his limp dick. You close your mouth around it and begin to suck, and slowly but surely you can feel it grow erect in your mouth. The other guy fumbles with your clothes for a moment. After he manages to get your boobs to hang out of your top, he also offers you his cock. It\'s already hard, you can tell the horniness of the guys is slowly trumping the embarrassment they felt before. You figure this is their first time with a prostitute, and you want to do your best to make it a time to remember. You suck them off and stroke them enthusiastically, giving them a sweet smile and encouraging them to be more daring. After a few minutes, you take the cock you\'re currently sucking on out of your mouth and ask them: "So boys, what do you say… would you like to fuck me now?"';
    }
    (s as any).txt_pod_whore_groupbj = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'text_pod_whore_groupsex') {
    (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).txt_pod_whore_groupsex = 'You obediently pull your clothes to the side, and spread your legs as the guy walks up behind you and paws at your naked ass, running his fingers over your pussy lips a few times. He notices how wet you are, and grins: "Nice…" as he rubs his cock against your hole and slams it in one fluent motion. Without saying another word, he begins to fuck you. It actually feels great, he sure knows what he\'s doing! You moan with pleasure, despite yourself when you realize you\'re loving this, getting fucked by some dirty middle-aged man for money. Still, it feels so good! His friend just watches the two of you have sex, happy to just wait for his turn to have you to himself. He casually jerks off while he watches you, in order to keep his cock ready.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).txt_pod_whore_groupsex = 'You expose your ass to one of the guys, and tease him a little by giving him an innocent smile as you ask: "Would you like me like this, sir?"  He gives your ass a hard slap, and grins at your yelp: "Just like that, girl". He moves up behind you and you feel the head of his cock press against your tight pussy. Fortunately he\'s not that well-hung, and he slides it in quite easily.  It actually feels good. You softly begin to moan when the guy fucks you, loud enough for them to notice. They laugh, and one of them says: "You\'re loving this, aren\'t you girl? You really should be paying <b>us</b> instead…"';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).txt_pod_whore_groupsex = 'When you lean against the railing, one of the guys immediately follows you and you feel his hard erection poking against your back. He groans: "Put some back into it girl, I expect to feel those hips slapping back against me." You nod obediently and enthusiastically ride him once he enters his dick inside you. It feels surprisingly good… maybe even better than it should. You could definitely get used to having men come to your house! As much cock as you want, and you don\'t even have to go look for it! The other guy is watching your face intently while slowly jerking himself off. You can tell that your pleasure in getting fucked is arousing him a great deal.';
    }
    (s as any).txt_pod_whore_groupsex = undefined;
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_ev5') {
    (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
    if (((s as any).temp_rand ?? 0) === 1) {
      qspGoto(s, 'pod_whore', 'hide', 'pod_whore_groupsexev1');
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      qspGoto(s, 'pod_whore', 'hide', 'pod_whore_groupsexev2');
    }
    (s as any).temp_rand = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_groupsexev1') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated', '1');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'npcgeneratec', '0', 'client', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated', '2');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 3) + 3), (((s as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'group');
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 3) + 3), (((s as any).npcID ?? 0)?.[2] ?? 0), 'prostitution', 'group');
    qspCall(s, 'stat', '');
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/1_1_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_groupbj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 7) + 5), (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'group');
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/1_2_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_groupsex']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 7), (((st as any).npcID ?? 0)?.[2] ?? 0), 'prostitution', 'group');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/1_3.jpg');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'text_pod_whore_groupsex']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', (((st as any).boy ?? 0)?.[1] ?? 0), 0, '', '', 10);
    qspCall(st, 'cum_call', 'mouth', (((st as any).boy ?? 0)?.[1] ?? 0), 0, '', '', 30);
    qspCall(st, 'cum_call', 'face', (((st as any).boy ?? 0)?.[2] ?? 0), 0, '', '', 10);
    qspCall(st, 'cum_call', 'mouth', (((st as any).boy ?? 0)?.[2] ?? 0), 0, '', '', 20);
    qspCall(st, 'cum_call', 'breasts', (((st as any).boy ?? 0)?.[2] ?? 0), 0, '', '', 10);
    if (((st as any).pcs_energy ?? 0) >= 15) {
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) - (8);
    }
    if (((st as any).pcs_hydra ?? 0) >= 20) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    }
    (st as any).pcs_hairbsh = 0;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 5) + 3));
    qspCall(st, 'money', 'earn', ((st as any).total_money ?? 0), 'cash');
    (st as any).pod_whore_countQW = ((st as any).pod_whore_countQW ?? 0) + (1);
    (st as any).pod_whore_client_day = ((st as any).daystart ?? 0);
    (st as any).pod_whore_client_count = ((st as any).pod_whore_client_count ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/1_4_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('After they fucked you in several positions and both had their turns, they tell you they want to cum on your face.');
    scene.text('You eagerly drop to your knees and stick out your tongue, inviting them to cum in your mouth while you look them deep in the eyes.');
    scene.text(`Soon enough, the hot jets of cum splatter down on your face, mostly on your exposed tongue. A few drips run down your chin and drop onto your ${((st as any).titsize ?? '')} boobs. You absent-mindedly rub them, spreading their cum all over them.`);
    scene.text('You can tell the men are truly spent, and enjoyed your services a great deal.');
    scene.text(`One guy produces the money you were promised, and hands you the ${qspFunc(s, 'money', 'string_profit', ((st as any).total_money ?? ''))}. He smiles happily: "You were great, girl. We'll definitely be back."`);
    scene.actions([
      { label: 'Thank them and leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', '');
  }, goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pod_whore_groupsexev2') {
    qspCall(s, 'npcgeneratec', '0', 'customer', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated', '1');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'npcgeneratec', '0', 'client', (Math.floor(Math.random() * 23) + 18));
    qspCall(s, 'npcStat', '$npclastgenerated', '2');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 3) + 3), (((s as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'group');
    qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 3) + 3), (((s as any).npcID ?? 0)?.[2] ?? 0), 'prostitution', 'group');
    qspCall(s, 'stat', '');
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/2_1_` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_pod_whore_groupbj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_2_1.mp4');
    scene.text('The guys indicate they want to fuck you now. As soon as you lean over, the man behind you immediately grabs onto your hips and begins to fuck you with long, hard thrusts.');
    scene.text('The other guy gets in front of you and says: "Go on, whore. Put that mouth of yours to work as well, I\'m not just going to stand here and wait."');
    scene.text('You obediently open your mouth and take his dick in your mouth. It\'s a bit difficult to give him a good blowjob while your pussy is also getting pounded, especially with him moving his hips like that, but after a while they get into a steady pace and you just let the guys have their way with you.');
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 5), (((st as any).npcID ?? 0)?.[2] ?? 0), 'prostitution', 'group');
    qspCall(st, 'arousal', 'bj', (-5), (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'group');
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'gopsex', 'hide', 'accview_ggsex');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_3_1.mp4');
    scene.text('Then they switch places, and you now have the other guy fucking you. You can taste your pussy juices on his dick as he makes you suck it. You\'re still not very comfortable in this position, but you steady yourself on the man\'s belt and after a while you get back into that steady pace.');
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 5), (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'group');
    qspCall(st, 'arousal', 'bj', (-5), (((st as any).npcID ?? 0)?.[2] ?? 0), 'prostitution');
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/sex/2_2_` + (Math.floor(Math.random() * 2) + 2) + '.mp4"></video></center>');
    scene.text('Then the guy fucking you lies down on his back, his cock never leaving your pussy. He drags you with him, and you steady your hands on his chest behind you. He expects you to ride him now, while the other guy moves back up to your face and tells you to keep sucking.');
    scene.text('You don\'t give it any more thought and just open your mouth as he says, and close your lips around it again.');
    scene.text('Getting fucked by two guys at once really makes you feel like a dirty slut. The guys probably think that getting fucked is all that you are good for, and treat you like a slab of meat.');
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 5), (((st as any).npcID ?? 0)?.[2] ?? 0), 'prostitution', 'group');
    qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_3_2.mp4');
    scene.text('The man you\'ve been blowing for the past 10 minutes suddenly pulls you up, and lowers himself to the ground before he tells you to get on his dick. He pulls your hips closer against him once you rub his hard cock against your pussy lips, and begins to fuck you vigorously.');
    scene.text('The other man points his cock at your mouth and grins at you: "You know what I want, whore. Start sucking."');
    scene.text('You nod and take his dick in your mouth, once again tasting yourself. You rather enjoy the way you taste, and the thought of licking your juices off someone\'s cock turns you on a lot.');
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'stomach', (((st as any).boy ?? 0)?.[2] ?? 0), 0, '', '', 10);
    qspCall(st, 'cum_call', '', (((st as any).boy ?? 0)?.[2] ?? 0), 0, '', '', 30);
    qspCall(st, 'cum_call', 'face', (((st as any).boy ?? 0)?.[1] ?? 0), 0, '', '', 10);
    qspCall(st, 'cum_call', 'mouth', (((st as any).boy ?? 0)?.[1] ?? 0), 0, '', '', 30);
    if (((st as any).pcs_energy ?? 0) >= 15) {
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) - (8);
    }
    if (((st as any).pcs_hydra ?? 0) >= 20) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    }
    (st as any).pcs_hairbsh = 0;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 5) + 3));
    qspCall(st, 'money', 'earn', ((st as any).total_money ?? 0), 'cash');
    (st as any).pod_whore_countQW = ((st as any).pod_whore_countQW ?? 0) + (1);
    (st as any).pod_whore_client_day = ((st as any).daystart ?? 0);
    (st as any).pod_whore_client_count = ((st as any).pod_whore_client_count ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_4.jpg');
    scene.text('After a few more minutes of getting fucked, you suddenly feel the guy underneath you spasm. Seconds later you feel a warm liquid inside you, and when he pulls his cock out of you his cum slowly drips from your pussy. A few more jets of cum come out, landing on your stomach. The other guy cums inside your mouth at the same time, without any warning. You swallow his load as best you can, and only miss a few drops that end up on your chin.');
    scene.text('The guys don\'t pay much attention to you when they put their clothes back on. They\'re mostly talking to one another about how much of a good fuck you were, pretending you\'re not there.');
    scene.text(`Then one guy turns to you and gives you the money: "You're a pretty decent fuck, ${((st as any).pcs_nickname ?? '')}. Here are the ${qspFunc(s, 'money', 'string_profit', ((st as any).total_money ?? ''))} we agreed upon. See you around."`);
    scene.actions([
      { label: 'Thank them and leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', '');
  }, goto: ['pod_ezd', 'etaj_2'] },
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
  if (String((s as any).locArgs?.[1] ?? '') === 'clean') {
    (s as any).temp_rand = undefined;
    (s as any).goto_rnd_client_event = undefined;
    (s as any).rnd_client_money = undefined;
    (s as any).rnd_client_money2 = undefined;
    (s as any).rnd_client_money3 = undefined;
    (s as any).pod_whore_lubri_text = undefined;
    (s as any).money_silicone = undefined;
    (s as any).money_mop = undefined;
    (s as any).money_hapri = undefined;
    (s as any).money_glamur = undefined;
    (s as any).money_odethooker = undefined;
    (s as any).money_skin = undefined;
    (s as any).money_skin_tan = undefined;
    (s as any).money_leghair = undefined;
    (s as any).money_resnic = undefined;
    (s as any).money_pcs_lipbalm = undefined;
    (s as any).whore_dopmoney = undefined;
    (s as any).money_throat = undefined;
    (s as any).money_vnesh = undefined;
    (s as any).money_horny = undefined;
    (s as any).money_cumfrot = undefined;
    (s as any).money_sweat = undefined;
    (s as any).money_cumlip = undefined;
    (s as any).money_cumface = undefined;
    (s as any).money_cumbelly = undefined;
    (s as any).money_cumpussy = undefined;
    (s as any).money_cumanus = undefined;
    (s as any).money_cumass = undefined;
    (s as any).money_son = undefined;
    (s as any).whore_money_bjsex = undefined;
    (s as any).whore_money_clsex = undefined;
    (s as any).whore_money_analsex = undefined;
    (s as any).whore_money_groupsex = undefined;
    (s as any).whore_money_bjvagsex = undefined;
    (s as any).whore_money_bjanalsex = undefined;
    (s as any).whore_money_rnd = undefined;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'client_talk':
      enterClientTalk(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'hide':
      enterHide(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pod_whore: LocationDef = {
  name: 'pod_whore',
  title: 'You open the door and look at a strange man who looks quite ',
  region: 'other',
  enter: enter,
};
