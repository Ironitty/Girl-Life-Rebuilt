import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_nightclub', 'start');
  (s as any).location_type = 'public_outdoors';
  (s as any).sexloc = 'city_nightclub';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Nightclub</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/club.jpg');
  scene.text('The entrance area of the club is full of younger looking people. The entrance itself is watched over by a very large man wearing a shirt that says \'Security\'. He\'s checking everyone and ensuring that they pay to enter.');
  // TODO-QSP: dynamic text: 'The entry fee is ' + $func('money', 'string_price', 250) + '.'
  scene.text('The entry fee is 250₽.');
  if (((s as any).clubwork ?? 0) === 1) {
    scene.actions([
      { label: 'Meet Erik for work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/club.jpg');
    scene.text('You tell the bouncer you\'re here to work for Erik and he looks you over.');
    if (((st as any).pcs_makeup ?? 0) > 1  &&  ((st as any).pcs_sweat ?? 0) < 30  &&  (((st as any).PCloPanties ?? 0) === 1  ||  ((st as any).PCloSkirt ?? 0) > 2  ||  ((st as any).PCloPants ?? 0) > 4  ||  (((st as any).clothingworntype ?? 0) === 'salacious_dress'  ||  ((st as any).clothingworntype ?? 0) === 'salacious_outfits'))) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      scene.text('He nods and says something into his radio before letting you in. A few minutes later, you meet Erik in the foyer.');
      scene.actions([
        { label: 'Talk to him', goto: ['city_nightclub', 'work'] },
      ]);
    } else {
      if (((st as any).PCloStyle ?? 0) === 4  ||  ((st as any).PCloProstitute ?? 0) === 1) {
        scene.text('He shakes his head. "If you\'re looking for paying clients, try the road by the park. This is not a brothel."');
        scene.actions([
          { label: 'Continue', goto: ['city_nightclub', 'start'] },
        ]);
      } else {
        if (((st as any).pcs_sweat ?? 0) >= 30) {
          scene.text('He looks at you and physically cringes. "God, you actually smell!"');
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        } else {
          if (((st as any).pcs_makeup ?? 0) === 1) {
            scene.text('You have to wear some makeup to start your work.');
            scene.actions([
              { label: 'Continue', goto: ['city_nightclub', 'start'] },
            ]);
          } else {
            if ((!((st as any).pcs_makeup ?? 0))) {
              scene.text('He looks at you dismissively. "Fix your makeup first, girl. You look horrible."');
              scene.actions([
                { label: 'Continue', goto: ['city_nightclub', 'start'] },
              ]);
            } else {
              scene.text('He tells you that you\'re over-dressed. You need to wear something shorter, or much more daring if you want to work.');
              scene.actions([
                { label: 'Continue', goto: ['city_nightclub', 'start'] },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the city center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Enter the club', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      if (((st as any).pcs_makeup ?? 0) > 1  &&  ((st as any).pcs_sweat ?? 0) < 50  &&  (((st as any).PCloSkirt ?? 0) > 2  ||  ((st as any).PCloPants ?? 0) > 4  ||  ((st as any).PCloPanties ?? 0) === 1  ||  (((st as any).clothingworntype ?? 0) === 'salacious_dress'  ||  ((st as any).clothingworntype ?? 0) === 'salacious_outfits'))) {
        scene.text('You can feel his eyes roaming all over your body, but he eventually nods and lets you pass. You\'re stopped just inside the door by another large man, who indicates the cashier window. You step over to it and pay the entry fee. After that, he steps aside and lets you go inside.');
        (st as any).minut = ((st as any).minut ?? 0) + 5;
        qspCall(st, 'money', 'pay', 250);
        (st as any).frost = 0;
        qspGoto(st, 'city_nightclub', 'inside');
      } else {
        if (((st as any).PCloStyle ?? 0) === 4  ||  ((st as any).PCloProstitute ?? 0) === 1) {
          scene.text('He shakes his head. "If you\'re looking for paying clients, try the road by the park. This is not a brothel."');
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        } else {
          if (((st as any).pcs_sweat ?? 0) >= 50) {
            scene.text('The bouncer shakes his head. "God girl, you smell!"');
            scene.actions([
              { label: 'Continue', goto: ['city_nightclub', 'start'] },
            ]);
          } else {
            if (((st as any).pcs_makeup ?? 0) === 1) {
              scene.text('The bouncer shakes his head. "At least wear some makeup, girl."');
              scene.actions([
                { label: 'Continue', goto: ['city_nightclub', 'start'] },
              ]);
            } else {
              if ((!((st as any).pcs_makeup ?? 0))) {
                scene.text('The bouncer shakes his head. "Fix your makeup first, girl."');
                scene.actions([
                  { label: 'Continue', goto: ['city_nightclub', 'start'] },
                ]);
              } else {
                scene.text('The bouncer shakes his head. "Don\'t you have something sexier to wear?"');
                scene.actions([
                  { label: 'Continue', goto: ['city_nightclub', 'start'] },
                ]);
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterInside(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclub';
  (s as any).loc_arg = 'inside';
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'inside';
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Night club</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/club9.jpg');
  scene.text('The nightclub is huge. The first floor consists of the dance floor surrounding the main bar. Along the upper level walkway are some <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_nightclub/u0027, /u0027private_rooms/u0027); return false;">private booths</a> and some smaller bars.');
  scene.text('The music is loud and the bass is thumping. You see a laser show going on over at the stage, while on the poorly-lit dance floor, people are dancing like there\'s no tomorrow.');
  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).clubwork ?? 0) === 0  &&  ((s as any).clubno ?? 0) === 0  &&  (!(Math.floor(Math.random() * 11) + 0))) {
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    scene.text('You\'re approached by a man in a suit. At first, you think he must be security, but his suit looks too expensive.');
    scene.text('"Hi there, my name\'s Erik. I\'m the promoter for the club. I\'m looking for someone for some casual work and you have the right look."');
    scene.actions([
{ label: 'Hear him out', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    // TODO-QSP: dynamic text: '"The club opens at '+func('time', 'get_time_string', 18, 0)+'. You can work for...
    scene.text('"The club opens at 18:00. You can work for an hour at a time, up to 1:00. The jobs will vary, according to time and demand. It includes finding customers to bring to the club, promoting drinks, and some dancing."');
    // TODO-QSP: dynamic text: '"Your pay will depend on results: get more people in and get them buying up the...
    scene.text('"Your pay will depend on results: get more people in and get them buying up the promotional drinks, or if you dance well, and you\'ll get \' + $func(\'money\', \'string_profit\', 200) + \'. Do worse, you get less. Do very well, you get a bonus. When you finish, you can stay in the club, so you get free entry as well."');
    scene.text('"So, are you interested?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).clubno = 1;
  }, goto: ['city_nightclub', 'inside'] },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).clubwork = 1;
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    scene.text('You tell him that you\'re interested and he takes your details.');
    // TODO-QSP: dynamic text: "Great… <<$pcs_nickname>>. You can find me here, and I''ll place your details on...
    scene.text(`"Great… ${((st as any).pcs_nickname ?? '')}. You can find me here, and I'll place your details on the door so you can get in, but you still have to do your makeup and dress for clubbing."`);
    scene.actions([
      { label: 'Return', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
    ]);
  } },
]);
    return;
  }
  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).clubwork ?? 0) === 0  &&  ((s as any).clubno ?? 0) === 1) {
    scene.actions([
      { label: 'Look for the promoter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    scene.text('You search the club for a few minutes before finding the promoter.');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('He asks you if you\'ve changed your mind and want to do some work for him.');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    (st as any).clubno = 1;
  }, goto: ['city_nightclub', 'inside'] },
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).clubwork = 1;
    (st as any).clubno = 0;
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    scene.text('You tell him that you\'re interested and he takes your details.');
    // TODO-QSP: dynamic text: "Great… <<$pcs_nickname>>. You can find me here, and I''ll place your details on...
    scene.text(`"Great… ${((st as any).pcs_nickname ?? '')}. You can find me here, and I'll place your details on the door so you can get in, but you still have to do your makeup and dress for clubbing."`);
    scene.actions([
      { label: 'Return', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You ask him about work, but he says you\'re not pretty enough and walks away. You\'re shocked enough that you just stand there and watch him walk away.');
    }
    return;
  } },
    ]);
  }
  if (((s as any).hour ?? 0) <= 3  ||  ((s as any).hour ?? 0) >= 18) {
    scene.actions([
      { label: 'Use the toilet', goto: ['city_nightclubToilet', 'start'] },
      { label: 'Go to the dance floor', goto: ['city_nightclub', 'dance'] },
      { label: 'Go to the bar', goto: ['city_nightclub', 'bar'] },
    ]);
  }
  if ((((s as any).hour ?? 0) < 1  ||  ((s as any).hour ?? 0) >= 18)  &&  ((s as any).clubwork ?? 0) === 1) {
    scene.actions([
      { label: 'Find Erik for work', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    scene.text('You look around and it only takes a few minutes for you to find Erik.');
    scene.actions([
      { label: 'Talk to him', goto: ['city_nightclub', 'work'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the club', handler: (st: GameState) => {
    (st as any).drunk = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'city_center', '');
  } },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'dance';
  qspCall(s, 'stat', '');
  scene.text('<center><b>The dance floor</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/club9.jpg');
  scene.text('The club is filled to the brim with people, most of whom are on the dance floor having a great time.');
  qspCall(s, 'katja_nightclub', 'activity', 'dance_floor');
  if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 18) {
    qspCall(s, 'stat', '');
    scene.text('It\'s getting late and the music stops. It looks like it might be time to go home.');
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the dance floor', goto: ['city_nightclub', 'inside'] },
    { label: 'Dance (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - (5);
    qspCall(st, 'sweat', 'add', 3);
    (st as any).fat = ((st as any).fat ?? 0) - (1);
    qspCall(st, 'exp_gain', 'danc', 1);
    if (((st as any).pcs_inhib ?? 0) < 40) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    if ((Math.floor(Math.random() * 17) + 4) <= ((st as any).pcs_hotcat ?? 0)) {
    }
    scene.img('images/locations/city/citycenter/nightclub/club4.jpg');
    scene.text('The dance floor is full of people and you\'re packed in so tightly that it\'s hard to keep track of who you might potentially be dancing with. You don\'t let it bother you as everyone is forced to dance this closely together.');
    if (((st as any).clrand ?? 0) > 0) {
      if (((st as any).clrand ?? 0) < 5) {
        qspCall(st, 'arousal', 'foreplay', 1);
        qspCall(st, 'npcgeneratec', '0');
        qspCall(st, 'npcStat', '$npclastgenerated');
        // TODO-QSP: dynamic text: As you''re dancing, you feel someone groping your ass. You turn around and see <...
        scene.text(`As you're dancing, you feel someone groping your ass. You turn around and see ${((st as any).npcheight_pref ?? '')}, ${((st as any).npcbuild ?? '')} guy with ${((st as any).npchair ?? '')} hair. He's wearing ${((st as any).npcClo ?? '')}.`);
        scene.actions([
          { label: 'Stop dancing', goto: ['city_nightclub', 'inside'] },
          { label: 'Dance with him', goto: ['city_nightclub', 'dance_guy'] },
        ]);
      } else {
        if (((st as any).clrand ?? 0) > 8) {
          scene.text('As you\'re dancing, you feel a hand groping your ass. You turn around to see who touched your butt, but you\'re surprised to see a woman smiling at you with a guy holding her tight. Both of them look at you with lust in their eyes.');
          scene.actions([
            { label: 'Stop dancing', goto: ['city_nightclub', 'inside'] },
            { label: 'Dance with them', goto: ['city_nightclub', 'dance_couple'] },
          ]);
        } else {
          scene.img('images/locations/city/citycenter/nightclub/dancelezb.jpg');
          scene.text('The dance floor is full of people and you\'re packed in so tightly that it\'s hard to keep track of who you might potentially be dancing with. You don\'t let it bother you as everyone is forced to dance this closely together.');
          scene.text('As you\'re dancing, you feel a hand groping your ass. You turn around to see who touched you and are surprised to see a woman smiling at you. She is seductively biting her lip.');
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.actions([
              { label: '"Let\'s go to the toilet for some fun."', goto: ['city_nightclub', 'lezbsort'] },
            ]);
          } else {
            scene.actions([
              { label: '"Let\'s go to a private-room for some fun."', handler: (st: GameState) => {
    (st as any).picrand = (Math.floor(Math.random() * 5) + 13);
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
            ]);
          }
          scene.actions([
            { label: 'Stop dancing', goto: ['city_nightclub', 'inside'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Go away', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
    { label: 'Go up to the DJ (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/nightclub/club7.jpg');
    if ((!((st as any).alexeyQW ?? 0))) {
      scene.text('The DJ doesn\'t pay you any attention.');
    }
    if (((st as any).alexeyQW ?? 0) > 0  &&  (!((st as any).alexeySex ?? 0))) {
      scene.text('Alexei looks up and smiles at you, recognizing you from the vocal school.');
    } else {
      if (((st as any).alexeyQW ?? 0) > 0  &&  ((st as any).alexeySex ?? 0) > 0) {
        scene.text('When Alexei sees you, he invites you into his booth.');
        scene.actions([
          { label: 'Go into the booth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/club7.jpg');
    scene.text('Alexei barely talks to you as he\'s only paying attention to the music.');
    if (((st as any).alexeyClubSex ?? 0) === 3  &&  (!((st as any).sashaClubQW ?? 0))) {
      (st as any).sashaClubQW = 1;
      scene.text('A man walks into the booth and greets Alexei. He looks to be in his forties and has a large belly, a bald head and is wearing glasses. Alexei introduces him as Alexander E., the owner of the club, and the two talk for a moment before Alexander leaves.');
      scene.actions([
{ label: 'Leave the booth', goto: ['city_nightclub', 'dance'] },
]);
      return;
    }
    if (((st as any).alexeyClubSex ?? 0) !== 3  ||  ((st as any).sashaClubQW ?? 0) > 0) {
      scene.actions([
        { label: 'Leave the booth', goto: ['city_nightclub', 'dance'] },
        { label: 'Get on your knees and give him a BJ', handler: (st: GameState) => {
    (st as any).alexeySex = ((st as any).alexeySex ?? 0) + (1);
    (st as any).alexeyClubSex = ((st as any).alexeyClubSex ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/blowjob/bj${(Math.floor(Math.random() * 13) + 29)}.jpg`);
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc[''lips'']>> lips around his cock before ...
    scene.text(`You kneel down and wrap your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips around his cock before you start sucking on it. Alexei helps by moving his hips back and forth; you notice his movement is in sync to the beat of the music he's playing. After a few minutes, he groans. "You better swallow it all. I don't want anyone to clean up our mess."`);
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npcStat', 'A81');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/cum/mouth/cum${(Math.floor(Math.random() * 14) + 34)}.jpg`);
    // TODO-QSP: dynamic text: Streams of cum hit you in the mouth and start running down your <<$pc_desc[''lip...
    scene.text(`Streams of cum hit you in the mouth and start running down your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips. Alexei wipes his dick on your mouth before putting it back in his pants.`);
    scene.text('You begin greedily swallowing his cum and using your finger to collect the drips that escaped your mouth before licking your finger clean. Once you\'ve swallowed every last drop, you stand up and leave.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the booth', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave the booth', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDanceGuy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/nightclub/club8.jpg');
  scene.text('You continue to dance with the guy and he reaches under your skirt to grope your ass.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 90) {
    scene.actions([
      { label: 'Leave him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_nightclub', 'dance');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    scene.text('You\'re passionately kissing the guy, while he\'s continuously groping you, always dedicating one of his hands to either your tits or your ass.');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.text('"Why don\'t we go to the VIP rooms? We\'ll have a bit more privacy there," he says between kisses.');
      qspCall(st, 'arousal', 'kiss', 5);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go to a private room with the guy', handler: (st: GameState) => {
    (st as any).picrand = 38;
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'sex', 'var'
  } },
      ]);
    } else {
      scene.text('"Let\'s go to the toilet," he says with a smile.');
      qspCall(st, 'arousal', 'kiss', 5);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go to the toilet with him', goto: ['city_nightclub', 'sex'] },
      ]);
    }
    if (((st as any).pcs_horny ?? 0) < 70) {
      scene.actions([
        { label: 'Go to the dance floor', goto: ['city_nightclub', 'dance'] },
      ]);
    }
    scene.actions([
      { label: 'Suggest going to his place', handler: (st: GameState) => {
    scene.text('You lean in and whisper in his ear. "How about we have fun at your place instead?"');
    scene.text('His eyes light up and he grabs your hand before quickly dragging you to the exit.');
    scene.actions([
      { label: 'Go with him', goto: ['sex_ev_start', 'npc_home_start', 'hookup'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDanceCouple(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/nightclub/dance_couple.jpg');
  scene.text('You continue to dance with the couple and they both grab your ass from time to time. After a few songs, the woman leans into you. "Why don\'t you come with us to a private room to have some fun?"');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 90) {
    scene.actions([
      { label: 'Leave them', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_nightclub', 'dance');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to a private room with them', handler: (st: GameState) => {
    qspCall(st, 'dinSex', 'std_trigger_oral');
    scene.img('images/locations/city/citycenter/nightclub/sex/vip1.jpg');
    scene.text('You agree and head to the private rooms. The man talks with a security guard, but you\'re too distracted by the woman\'s hands already all over your body. You\'re then lead into a private room and the thick curtain blocks the view from the outside.');
    scene.text('"Why don\'t you take the lead?" the woman asks as she starts undressing. You have them start on the couch, with the man sitting while she kneels beside him and gives him a blowjob. You raptly watch the two lovers, getting more and more excited by the display.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/vip2.jpg');
    scene.text('He turns her around and starts fucking her from behind. Deciding you\'ve waited long enough, you undress and slide your wet pussy in front of her face. She immediately starts licking you in all the right places.');
    qspCall(st, 'arousal', 'cuni', 10, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/vip3.jpg');
    scene.text('She pulls out a double-sided dildo and inserts one end into your greedy hole before she starts sucking on the other. You\'re surprised by how good she is at pleasuring you this way.');
    qspCall(st, 'arousal', 'vaginal_dildo', 10, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/vip4.jpg');
    scene.text('She then turns around and puts it in her pussy. You both start grinding in an attempt to get the most pleasure possible while she goes back to giving a blowjob to the man. You have an explosive orgasm and can\'t wait to see what these two will do next for you.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_dildo', 10, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/vip5.jpg');
    scene.text('The man, perhaps feeling a bit left out at this point, turns her around again. This time however, he seems to think her ass is as lonely as he felt and starts fucking her there.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/vip6.jpg');
    scene.text('You soon see her convulsing in orgasmic bliss as the man grunts to let her know he\'s cumming as well. You lick the drool off the side of your lips as you watch him cum over her chest and into her mouth.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_nightclub', 'private_rooms');
  } },
      { label: 'Lick her breasts', handler: (st: GameState) => {
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/citycenter/nightclub/sex/vip7.jpg');
    scene.text('You lick the cum from her chest and face, trying not to miss any of it.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['city_nightclub', 'private_rooms'] },
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
  } },
  ]);
  scene.build();
}

function enterBar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).loc = 'city_nightclub';
  (s as any).loc_arg = 'bar';
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'bar';
  qspCall(s, 'stat', '');
  scene.text('<center><b>bar</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/club10.jpg');
  scene.text('You have to squeeze yourself through the crowd to get to the bar. On your way, random guys try to lay their hands on you, try to convince you to dance or drink with them. Some even try to grope your tits or ass while others play the white knight and try to get your attention by protecting you.');
  qspCall(s, 'katja_nightclub', 'activity', 'bar');
  if (((s as any).pcs_apprnc ?? 0) > 56) {
    (s as any).barsexrand = (Math.floor(Math.random() * 11) + 0);
    if (((s as any).barsexrand ?? 0) === 1) {
      // TODO-QSP: killvar 'barsexrand'
      qspGoto(s, 'city_nightclub', 'bar0');
    }
    if (((s as any).barsexrand ?? 0) === 2) {
      // TODO-QSP: killvar 'barsexrand'
      qspGoto(s, 'city_nightclub', 'bar1');
    }
  }
  if (((s as any).alko ?? 0) >= 7) {
    (s as any).temp = (Math.floor(Math.random() * 101) + 0);
    if (((s as any).temp ?? 0) <= 6) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/citycenter/nightclub/club1.jpg');
      scene.text('You\'re so drunk that you can barely remember where you live.');
      scene.actions([
        { label: 'Try to go home', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 7) {
        qspCall(s, 'stat', '');
        scene.img('images/shared/sex/public/ivrand4.jpg');
        qspCall(s, 'npcgeneratec', '0', 'Club Dancer', (Math.floor(Math.random() * 9) + 18));
        qspCall(s, 'npcStat', '$npclastgenerated');
        (s as any).spafinloc = 12;
        qspCall(s, 'cum_manage', '');
        scene.text('The last thing you remember is how you sucked someone\'s cock in the middle of the dance floor.');
        scene.text('You\'re too drunk to continue partying and security has to escort you out.');
        qspCall(s, 'arousal', 'bj', 10, 'sub');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['city_center', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 8) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/citycenter/nightclub/club5.jpg');
          scene.text('The last thing you remember is how you tried to pose as a waitress.');
          scene.text('You\'re too drunk to continue partying and security has to escort you out.');
          scene.actions([
            { label: 'Leave', goto: ['city_center', ''] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 9) {
            qspCall(s, 'stat', '');
            scene.img('images/shared/sex/public/ivrand6.jpg');
            scene.text('The last thing you remember is a girl being bent over a table and fucked by a guy from behind.');
            scene.text('You\'re too drunk to continue partying here. Security has to escort you out.');
            qspCall(s, 'arousal', 'erotic_sex', 10);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Leave', goto: ['city_center', ''] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 10) {
              qspCall(s, 'stat', '');
              scene.img('images/shared/sex/public/ivrand7.jpg');
              scene.text('You see a small group of girls losing it on the dance floor. They\'re moving like there\'s no tomorrow.');
              scene.text('You\'re too drunk to continue partying here. Security has to escort you out.');
              qspCall(s, 'arousal', 'erotic', 10);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Leave', goto: ['city_center', ''] },
              ]);
            } else {
              if (((s as any).temp ?? 0) === 11) {
                qspCall(s, 'stat', '');
                scene.img('images/shared/sex/public/ivrand8.jpg');
                scene.text('You see two hot girls passionately kissing each other.');
                scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                qspCall(s, 'arousal', 'erotic', 10);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Leave', goto: ['city_center', ''] },
                ]);
              } else {
                if (((s as any).temp ?? 0) === 12) {
                  qspCall(s, 'stat', '');
                  scene.img('images/shared/sex/public/ivrand9.jpg');
                  scene.text('The last thing you remember is a girl who crawled under a table because she dropped her phone. Her skirt moved up and revealed the fact that she didn\'t put on any panties.');
                  scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                  qspCall(s, 'arousal', 'erotic', 10);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Leave', goto: ['city_center', ''] },
                  ]);
                } else {
                  if (((s as any).temp ?? 0) === 13) {
                    qspCall(s, 'stat', '');
                    scene.img('images/shared/sex/public/ivrand10.jpg');
                    scene.text('You notice a woman who\'s giving a guy a blowjob. She opens her mouth and takes the cock in her hand while the guy pours champagne into her mouth.');
                    scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                    qspCall(s, 'arousal', 'erotic_sex', 10);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', goto: ['city_center', ''] },
                    ]);
                  } else {
                    if (((s as any).temp ?? 0) === 14) {
                      qspCall(s, 'stat', '');
                      scene.img('images/shared/sex/public/ivrand11.jpg');
                      scene.text('You happen to notice a small group of drunken girls giggling. One of them is fingering the pussy of another girl.');
                      scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                      qspCall(s, 'arousal', 'erotic_sex', 10);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', goto: ['city_center', ''] },
                      ]);
                    } else {
                      if (((s as any).temp ?? 0) === 15) {
                        qspCall(s, 'stat', '');
                        scene.img('images/shared/sex/public/ivrand12.jpg');
                        scene.text('The last thing you can remember is dancing with a black guy who had his hands on your hips.');
                        scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                        qspCall(s, 'arousal', 'foreplay', 10);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', goto: ['city_center', ''] },
                        ]);
                      } else {
                        if (((s as any).temp ?? 0) === 16) {
                          qspCall(s, 'stat', '');
                          scene.img('images/locations/city/citycenter/nightclub/club13.jpg');
                          scene.text('The last thing you remember is how you tried dancing with a random guy.');
                          scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                          qspCall(s, 'arousal', 'foreplay', 10);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Leave', goto: ['city_center', ''] },
                          ]);
                        } else {
                          if (((s as any).temp ?? 0) === 17) {
                            qspCall(s, 'stat', '');
                            scene.img('images/locations/city/citycenter/nightclub/club14.jpg');
                            scene.text('The last thing you remember is how you undressed and danced half-naked in front of everyone.');
                            scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                            qspCall(s, 'arousal', 'foreplay', 10);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', goto: ['city_center', ''] },
                            ]);
                          } else {
                            if (((s as any).temp ?? 0) === 18) {
                              qspCall(s, 'stat', '');
                              scene.img('images/shared/sex/public/ivrand15.jpg');
                              scene.text('You see a guy and a girl on the dance floor, kissing each other. The guy, however, uses one of his hands to have some fun with her pussy.');
                              scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                              qspCall(s, 'arousal', 'erotic_sex', 10);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Leave', goto: ['city_center', ''] },
                              ]);
                            } else {
                              if (((s as any).temp ?? 0) === 19) {
                                qspCall(s, 'stat', '');
                                scene.img('images/shared/sex/public/ivrand16.jpg');
                                scene.text('You can see a drunken girl spreading her legs on one of the bar stools. She\'s not wearing any panties and the guy next to her takes the opportunity to finger her.');
                                scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                                qspCall(s, 'arousal', 'erotic_sex', 10);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Leave', goto: ['city_center', ''] },
                                ]);
                              } else {
                                if (((s as any).temp ?? 0) === 20) {
                                  qspCall(s, 'stat', '');
                                  scene.img('images/shared/sex/public/ivrand17.jpg');
                                  scene.text('You can see a guy hugging and kissing a drunken girl, while another guy sucks on her exposed breasts.');
                                  scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                                  qspCall(s, 'arousal', 'erotic_sex', 10);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Leave', goto: ['city_center', ''] },
                                  ]);
                                } else {
                                  if (((s as any).temp ?? 0) === 21) {
                                    qspCall(s, 'stat', '');
                                    scene.img('images/locations/city/citycenter/nightclub/club21.jpg');
                                    scene.text('You see a girl as drunk as you attempting to take a picture of her panties.');
                                    scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                                    qspCall(s, 'arousal', 'erotic', 10);
                                    qspCall(s, 'arousal', 'end');
                                    scene.actions([
                                      { label: 'Leave', goto: ['city_center', ''] },
                                    ]);
                                  } else {
                                    if (((s as any).temp ?? 0) === 22) {
                                      qspCall(s, 'stat', '');
                                      scene.img('images/locations/city/citycenter/nightclub/club22.jpg');
                                      scene.text('You see a girl lying on the dance floor, passed out drunk. Someone has taken her panties, exposing her pussy.');
                                      scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                                      qspCall(s, 'arousal', 'erotic', 10);
                                      qspCall(s, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Leave', goto: ['city_center', ''] },
                                      ]);
                                    } else {
                                      if (((s as any).temp ?? 0) === 23) {
                                        qspCall(s, 'stat', '');
                                        scene.img('images/locations/city/citycenter/nightclub/club23.jpg');
                                        scene.text('You see a girl lying on the dance floor, passed out drunk. Someone has lifted her skirt up, exposing her panties to everyone.');
                                        scene.text('You\'re so drunk that you fall asleep on the spot. Security has to wake you up and escort you out.');
                                        qspCall(s, 'arousal', 'erotic', 10);
                                        qspCall(s, 'arousal', 'end');
                                        scene.actions([
                                          { label: 'Leave', goto: ['city_center', ''] },
                                        ]);
                                      } else {
                                        if (((s as any).temp ?? 0) === 24) {
                                          qspCall(s, 'stat', '');
                                          scene.img('images/locations/city/citycenter/nightclub/club24.jpg');
                                          scene.text('The last thing you\'re able to remember is that you used the men\'s restroom to pee.');
                                          scene.text('You\'re too drunk to continue partying and security has to escort you out.');
                                          qspCall(s, 'arousal', 'erotic', 10);
                                          qspCall(s, 'arousal', 'end');
                                          scene.actions([
                                            { label: 'Leave', goto: ['city_center', ''] },
                                          ]);
                                        } else {
                                          if (((s as any).temp ?? 0) > 24) {
                                            qspCall(s, 'stat', '');
                                            scene.img('images/locations/city/citycenter/nightclub/club25.jpg');
                                            scene.text('You see a girl passed out drunk on a box. You can clearly see her panties.');
                                            scene.text('You\'re so drunk that you fall asleep on the spot. Security has to wake you up and escort you out.');
                                            qspCall(s, 'arousal', 'erotic', 10);
                                            qspCall(s, 'arousal', 'end');
                                            scene.actions([
                                              { label: 'Leave', goto: ['city_center', ''] },
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
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Order from the menu', handler: (st: GameState) => {
    qspCall(st, 'food_menu', '');
  } },
    { label: 'Go back', goto: ['city_nightclub', 'inside'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinSex', 'std_trigger_oral');
  qspCall(s, 'npcgeneratec', '0');
  (s as any).dick = (Math.floor(Math.random() * 9) + 10);
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'stat', '');
  scene.text('<center><b>toilet stall</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex.jpg');
  scene.text('You head to the men\'s toilet, where he drags you into one of the empty stalls. He starts to caress your breasts before helping you undress.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give him a blowjob', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/citycenter/nightclub/sex/clubbj.jpg');
    qspCall(st, 'dinSex', 'std_trigger_oral');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.img('images/shared/sex/handjob/hand.jpg');
      (st as any).spafinloc = 13;
      qspCall(st, 'cum_manage', '');
      scene.text('You take his cock and point it away from you. He groans as he cums and most of his cum gets splattered onto the floor, with a few drops covering your hand.');
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
        (st as any).spafinloc = 11;
        qspCall(st, 'cum_manage', '');
        (st as any).SUB = ((st as any).SUB ?? 0) + (1);
        scene.img('images/locations/city/citycenter/nightclub/sex/clubfacial.jpg');
        scene.text('The guy grabs your hair and cums on your face. You quickly close your eyes, but it\'s too late. A few blasts of cum get in your eyes and sting them.');
      } else {
        scene.actions([
{ label: 'Point his cock at the floor', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hand.jpg');
    (st as any).spafinloc = 13;
    qspCall(st, 'cum_manage', '');
    scene.text('You take his cock and point it away from you. He groans as he cums and most of his cum gets splattered onto the floor, with a few drops covering your hand.');
    scene.actions([
      { label: 'Stand up', goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  } },
{ label: 'Let him cum on your face', handler: (st: GameState) => {
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/citycenter/nightclub/sex/clubfacial1.jpg');
    scene.text('You grab his cock and point it at your face. He groans as he cums and you feel his cum splattering across your face.');
    scene.actions([
      { label: 'Stand up', goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  } },
]);
        return;
      }
    }
    scene.actions([
      { label: 'Stand up', goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  } },
      { label: 'Swallow his cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    scene.img('images/locations/city/citycenter/nightclub/sex/clubswallow.jpg');
    scene.text('The guy came in your mouth, you can feel his hot and salty semen pouring into it. Without hesitation, you swallow it.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Stand up', goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  } },
    ]);
  } },
    { label: 'Doggy style', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/citycenter/nightclub/sex/clubsex.jpg');
    scene.text('You turn around and kneel on the toilet seat. "Fuck me!" you say and present your ass and pussy to him.');
    scene.text('You don\'t have to tell him twice. He grabs your hips, positions his cock in front of your pussy, and with a strong push, he enters you. You moan with pleasure and are surprised by the sheer force he uses to enter you.');
    scene.text('He grunts heavily as he fucks you, continuing with force and speed until both of you are reaching orgasm.');
    scene.text('You look at him. "Don\'t you dare cum inside!"');
    scene.text('In between his grunts, he nods and a few seconds later, he pulls out.');
    (st as any).spafinloc = 14;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) > 90) {
      (st as any).orgasm_or = 'custom';
      (st as any).orgasm_txt = 'As your heartbeat slows and you catch your breath, you realize your arousal has peaked. A warmth fills you and your eyes lose focus.';
    }
    scene.text('You recover to find yourself alone in the cubicle and quickly re-dress.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBar0(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Bar</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex/bar0.jpg');
  scene.text('As you sit at the bar, a woman walks up and starts chatting with you.');
  scene.text('During the conversation, you get the feeling that she\'s flirting with you, but before you can react, her hands start wandering over your body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from her', goto: ['city_nightclub', 'bar'] },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/sex/bar1.jpg');
    scene.text('Her flirting works on you. You move closer and start kissing her. At first, it feels strange kissing a random woman, but it doesn\'t take long for it to move from awkward to passionate.');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Move away from her', goto: ['city_nightclub', 'bar'] },
      { label: 'Tell her to meet you in the restroom', goto: ['city_nightclub', 'lezbsort'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBar1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Bar</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex/bar7.jpg');
  scene.text('As you sit at the bar, a man comes over and grabs your ass. "Why don\'t we have some fun together?" he asks. You can tell from the slur in his voice that he\'s had more than a few drinks tonight.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn him down', goto: ['city_nightclub', 'bar'] },
    { label: 'Take him to the restroom', goto: ['city_nightclub', 'sex'] },
  ]);
  scene.build();
}

function enterLezbsort(s: GameState, scene: SceneBuilder): void {
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  scene.text('<center><b>WC</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex/lezbsort.jpg');
  scene.text('She follows you into the women\'s restroom and you lure her into one of the empty stalls.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her', goto: ['city_nightclub', 'lezbsort1'] },
    { label: 'Tell her to lick you', goto: ['city_nightclub', 'lezbsort2'] },
  ]);
  scene.build();
}

function enterLezbsort1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>WC</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex/sortukuni.jpg');
  scene.text('You remove her pants and she sits on the toilet before spreading her legs. You passionately lick her pussy as she moans heavily and plays with her erect nipples. Sometime later, you make her cum.');
  qspCall(s, 'dinSex', 'std_trigger');
  qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 15  ||  ((s as any).hour ?? 0) <= 3) {
    scene.actions([
      { label: 'Your turn', goto: ['city_nightclub', 'lezbsort2'] },
    ]);
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_nightclubToilet', 'clubtoilet_women'] },
  ]);
  scene.build();
}

function enterLezbsort2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>WC</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/sex/sortkuni.jpg');
  scene.text('You sit on the toilet and lift your feet up. "Lick it," you tell her. She seductively bites her lips and happily follows your orders, parting your pussy lips before she starts passionately eating you out. She doesn\'t stop until you cry out in pleasure and cum.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'dinSex', 'std_trigger_oral');
  qspCall(s, 'arousal', 'cuni', 10, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 15  ||  ((s as any).hour ?? 0) <= 3) {
    scene.actions([
      { label: 'Lick her', goto: ['city_nightclub', 'lezbsort1'] },
    ]);
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_nightclubToilet', 'clubtoilet_women'] },
  ]);
  scene.build();
}

function enterPrivateRooms(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/nightclub/private_booths_walkway.jpg');
  scene.text('Upstairs overlooking the dance floor is a walkway which has a number of private booths where thick curtains can be used for privacy.');
  scene.text('Security guards are on watch, making sure that people who have paid for them won\'t be disturbed.');
  scene.text('There\'s also some smaller bars, some with their own dance floors, located up here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the private booths', goto: ['city_nightclub', 'inside'] },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).clubjob = ((s as any).clubjob ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
  if (((s as any).pcs_danc ?? 0) > 30) {
    (s as any).clubr = 0;
  } else {
    (s as any).clubr = 0;
  }
  if ((!((s as any).clubr ?? 0))) {
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I want you to go around the city center and find some c...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, I want you to go around the city center and find some customers. Bring them to the door and give the bouncer a nod so he knows they're yours. See you in an hour."`);
    scene.actions([
      { label: 'Look for customers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('You spend an hour searching for customers in the city center.');
    scene.actions([
      { label: 'Return to Erik', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    if (((st as any).pcs_apprnc ?? 0) > (Math.floor(Math.random() * 41) + 80)) {
      qspCall(st, 'money', 'earn', 300);
      // TODO-QSP: dynamic text: 'You exceeded Erik''s expectations and found a lot of customers. He pays you ' +...
      scene.text('You exceeded Erik\'s expectations and found a lot of customers. He pays you \' + $func(\'money\', \'string_profit\', 300) + \'.');
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        qspCall(st, 'money', 'earn', 200);
        // TODO-QSP: dynamic text: 'Erik seems fairly happy and pays you ' + $func('money', 'string_profit', 200) +...
        scene.text('Erik seems fairly happy and pays you \' + $func(\'money\', \'string_profit\', 200) + \'.');
      } else {
        qspCall(st, 'money', 'earn', 100);
        // TODO-QSP: dynamic text: 'You hardly found anyone. Erik doesn''t seem happy, but he pays you ' + $func('m...
        scene.text('You hardly found anyone. Erik doesn\'t seem happy, but he pays you \' + $func(\'money\', \'string_profit\', 100) + \' for your efforts.');
      }
    }
    if (((st as any).hour ?? 0) < 1  ||  ((st as any).hour ?? 0) >= 18) {
      scene.actions([
        { label: 'Get another job from Erik', goto: ['city_nightclub', 'work'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the dance floor', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).clubr ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I want you to go around the club getting people to try ...
      scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, I want you to go around the club getting people to try and hopefully switch to these drinks. You can't go wrong here, just smile and give out free drinks."`);
      scene.text('"No need to hold back since the suppliers are paying. I\'ll see you back here in an hour."');
      scene.actions([
        { label: 'Get to work', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/club6.jpg');
    scene.text('You spend an hour giving away unpleasant drinks.');
    scene.actions([
      { label: 'Return to Erik', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 200);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/nightclub/club11.jpg');
    // TODO-QSP: dynamic text: 'You hand Erik the empty bottles and he gives you ' + $func('money', 'string_pro...
    scene.text('You hand Erik the empty bottles and he gives you \' + $func(\'money\', \'string_profit\', 200) + \'.');
    if (((st as any).hour ?? 0) < 1  ||  ((st as any).hour ?? 0) >= 18) {
      scene.actions([
        { label: 'Get another job from Erik', goto: ['city_nightclub', 'work'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the dance floor', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).clubr ?? 0) === 2) {
        scene.text('"We\'re short a dancer, so get in that cage there and dance. If you put on a good show, you get a bonus."');
        scene.actions([
          { label: 'Get in the cage', handler: (st: GameState) => {
    if (((st as any).pcs_inhib ?? 0) < 60) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'exp_gain', 'danc', 0);
    scene.img('images/locations/city/citycenter/nightclub/club12.jpg');
    if (((st as any).pcs_danc ?? 0) > (Math.floor(Math.random() * 71) + 30)) {
      qspCall(st, 'money', 'earn', 300);
      scene.text('You put on a great show, getting a lot of attention and drawing people up to dance.');
      // TODO-QSP: dynamic text: 'Erik is very happy and pays you ' + $func('money', 'string_profit', 300) + '.'
      scene.text('Erik is very happy and pays you \' + $func(\'money\', \'string_profit\', 300) + \'.');
    } else {
      qspCall(st, 'money', 'earn', 200);
      scene.text('You try hard, but you\'re mostly ignored by the customers.');
      // TODO-QSP: dynamic text: 'Erik thanks you for helping and pays you ' + $func('money', 'string_profit', 20...
      scene.text('Erik thanks you for helping and pays you \' + $func(\'money\', \'string_profit\', 200) + \', but doesn\'t mention your dancing.');
    }
    qspCall(st, 'stat', '');
    if (((st as any).hour ?? 0) < 1  ||  ((st as any).hour ?? 0) >= 18) {
      scene.actions([
        { label: 'Get another job from Erik', goto: ['city_nightclub', 'work'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the dance floor', goto: ['city_nightclub', 'inside'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'inside':
      enterInside(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'dance_guy':
      enterDanceGuy(s, scene);
      break;
    case 'dance_couple':
      enterDanceCouple(s, scene);
      break;
    case 'bar':
      enterBar(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'bar0':
      enterBar0(s, scene);
      break;
    case 'bar1':
      enterBar1(s, scene);
      break;
    case 'lezbsort':
      enterLezbsort(s, scene);
      break;
    case 'lezbsort1':
      enterLezbsort1(s, scene);
      break;
    case 'lezbsort2':
      enterLezbsort2(s, scene);
      break;
    case 'private_rooms':
      enterPrivateRooms(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_nightclub: LocationDef = {
  name: 'city_nightclub',
  title: 'Nightclub',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
