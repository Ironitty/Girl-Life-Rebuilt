import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStripShowStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).strip_club = (s as any).strip_club ?? {})['cust_boos'] = 0;
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = 0;
  ((s as any).strip_club = (s as any).strip_club ?? {})['dancing_rounds'] = 3;
  ((s as any).strip_club = (s as any).strip_club ?? {})['bra_type'] = ((s as any).braworntype ?? 0);
  ((s as any).strip_club = (s as any).strip_club ?? {})['bra_number'] = ((s as any).brawornnumber ?? 0);
  ((s as any).strip_club = (s as any).strip_club ?? {})['panty_type'] = ((s as any).pantyworntype ?? 0);
  ((s as any).strip_club = (s as any).strip_club ?? {})['panty_number'] = ((s as any).pantywornnumber ?? 0);
  ((s as any).strip_club = (s as any).strip_club ?? {})['clothing_type'] = ((s as any).clothingworntype ?? 0);
  ((s as any).strip_club = (s as any).strip_club ?? {})['clothing_number'] = ((s as any).clothingwornnumber ?? 0);
  (s as any).countmoney = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stage</b></center>');
  scene.img('images/locations/city/redlight/stripclub/stripclub_stage.jpg');
  scene.text('The music starts blaring as the DJ announces you to the crowd.');
  scene.text(`"Give it up for... ${((s as any).pcs_strippername ?? '')}!!!"`);
  scene.text('It\'s now or never. You take a deep breath and strut out onto the stage.');
  qspCall(s, 'jobs', 'clock', 'city_strip_stripper');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterStripHub2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterStripShowEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).strip_club ?? 0)?.['bra_type'] !== '') {
    qspCall(s, 'bras', 'wear', (((s as any).strip_club ?? 0)?.['bra_type']), (((s as any).strip_club ?? 0)?.['bra_number']));
  }
  if (((s as any).strip_club ?? 0)?.['panty_type'] !== '') {
    qspCall(s, 'panties', 'wear', (((s as any).strip_club ?? 0)?.['panty_type']), (((s as any).strip_club ?? 0)?.['panty_number']));
  }
  if (((s as any).strip_club ?? 0)?.['clothing_type'] !== '') {
    qspCall(s, 'clothing', 'wear', (((s as any).strip_club ?? 0)?.['clothing_type']), (((s as any).strip_club ?? 0)?.['clothing_number']));
  }
  qspGoto(s, 'stwork', 'start');
  scene.build();
}

function enterStripHub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stage</b></center>');
  scene.img('images/locations/city/redlight/stripclub/stripclub_stage.jpg');
  if (((s as any).strip_club ?? 0)?.['strip_tips'] < 10) {
    (s as any).pubhot = 'booing you. "Get this stupid cow off the stage!" you hear someone shout.';
  } else {
    if (((s as any).strip_club ?? 0)?.['strip_tips'] < 20) {
      (s as any).pubhot = 'clearly showing discontent with your dancing. They want you off the stage as quickly as possible.';
    } else {
      if (((s as any).strip_club ?? 0)?.['strip_tips'] < 30) {
        (s as any).pubhot = 'clearly looking bored. They drink and talk among themselves while ignoring you.';
      } else {
        if (((s as any).strip_club ?? 0)?.['strip_tips'] < 60) {
          (s as any).pubhot = 'who sometimes look at you, smiling and enjoying the performance.';
        } else {
          if (((s as any).strip_club ?? 0)?.['strip_tips'] < 70) {
            (s as any).pubhot = 'watching you with genuine interest while conversing with each other over their drinks.';
          } else {
            if (((s as any).strip_club ?? 0)?.['strip_tips'] < 80) {
              (s as any).pubhot = 'with their attention focused entirely on you.';
            } else {
              if (((s as any).strip_club ?? 0)?.['strip_tips'] < 90) {
                (s as any).pubhot = 'with strained faces and sweat beading on their foreheads, their arousal clearly showing.';
              } else {
                (s as any).pubhot = 'who are completely indulged in you, cheering and waving money at you trying to get your attention.';
              }
            }
          }
        }
      }
    }
  }
  scene.text(`There are men sitting in front of the stage ${((s as any).pubhot ?? '')}`);
  (s as any).pubhot = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripHub2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterStripHub2(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    if (((s as any).fame ?? 0)?.['city_stripping'] < 50) {
      scene.text('There are men sitting in front of the stage, mostly talking amongst themselves.');
    } else {
      if (((s as any).fame ?? 0)?.['city_stripping'] < 200) {
        scene.text('There are men sitting in front of the stage. Some are chatting and others are waiting to see you dance.');
      } else {
        if (((s as any).fame ?? 0)?.['city_stripping'] < 500) {
          scene.text('There are men sitting in front of the stage waiting to see you dance.');
        } else {
          if (((s as any).fame ?? 0)?.['city_stripping'] < 1000) {
            scene.text('There are men sitting in front of the stage, eagerly waiting for your show to start.');
          } else {
            scene.text('There are men sitting in front of the stage, cheering as soon as your name is announced. Some stand to applaud while chanting your name and whistling.');
          }
        }
      }
    }
  }
  if ((((s as any).hour ?? 0) > 2  ||  ((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) > 45)  &&  (((s as any).hour ?? 0) < 17  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 30))) {
    (s as any).pcs_hairbsh = 0;
    ((s as any).strip_club = (s as any).strip_club ?? {})['total_stripshows'] = ((s as any).strip_club['total_stripshows'] ?? 0) + (1);
    scene.text('Your shift is over for tonight. Time to head home.');
  } else {
    if (((s as any).strip_club ?? 0)?.['dancing_rounds'] === 3) {
      (s as any).lapdance = 0;
    }
    if (((s as any).strip_club ?? 0)?.['dancing_rounds'] > 0) {
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Dance on the pole in your clothes', goto: ['stwork2', 'dance_clothed'] },
          { label: 'Strip out of your outfit', goto: ['stwork2', 'strip_clothes'] },
        ]);
      } else {
        if ((((s as any).braworntype ?? 0) !== 'none'  ||  ((s as any).PCloBra ?? 0) === 1)  &&  (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1)) {
          scene.actions([
            { label: 'Dance around the pole in your underwear', goto: ['stwork2', 'pole_underwear'] },
          ]);
        }
        if (((s as any).braworntype ?? 0) !== 'none'  ||  ((s as any).PCloBra ?? 0) === 1) {
          if (((s as any).pantyworntype ?? 0) !== 'none') {
            scene.actions([
              { label: 'Take off your bra', goto: ['stwork2', 'strip_bra'] },
            ]);
          } else {
            scene.actions([
              { label: 'Discard your bra and dance nude', goto: ['stwork2', 'dance_nude'] },
            ]);
          }
        } else {
          if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1) {
            scene.actions([
              { label: 'Dance around the pole in your panties', goto: ['stwork2', 'pole_underwear'] },
              { label: 'Take off your panties', goto: ['stwork2', 'strip_panties'] },
            ]);
          } else {
            scene.actions([
              { label: 'Dance nude', goto: ['stwork2', 'dance_nude'] },
            ]);
          }
        }
      }
    } else {
      scene.text('Your time is up and the music stops.');
      if (((s as any).strip_club ?? 0)?.['strip_tips'] >= 60) {
        scene.text('The men cheer and clap as you gather your clothes and tips before heading back stage.');
      } else {
        scene.text('The men don\'t even appear to notice and you gather your clothes in silence before heading back stage.');
      }
      qspCall(s, 'sweat', 'add', 5);
      (s as any).pcs_hairbsh = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['total_stripshows'] = ((s as any).strip_club['total_stripshows'] ?? 0) + (1);
      if (((s as any).strip_club ?? 0)?.['strip_tips'] >= 150) {
        if ((Math.floor(Math.random() * 100) + 0) < 25) {
          if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 0) {
            scene.text('As you enter the back stage area, a security guard approaches and tells you that Sasha wants to see you in his office. Now.');
            scene.actions([
              { label: 'Go to his office', goto: ['stwork2', 'manager_bonus'] },
            ]);
          } else {
            scene.text('As you enter the back stage area, a security guard approaches and tells you that Sasha wants to see you in his office again.');
            scene.text('You know what he wants, but do you want to do it?');
            scene.actions([
              { label: 'Go to his office', goto: ['stwork2', 'manager_bonus'] },
              { label: 'Turn him down', goto: ['stwork2', 'strip_show_end'] },
            ]);
          }
        } else {
          scene.text('As you enter the back stage area, a security guard approaches and tells you that you have a customer requesting a private show.');
          scene.actions([
            { label: 'Perform a private dance', handler: (st: GameState) => {
    ((st as any).strip_club = (st as any).strip_club ?? {})['lapdance_chance'] = 0;
    qspGoto(st, 'stwork2', 'privatdance');
  } },
            { label: 'Turn the request down', goto: ['stwork2', 'strip_show_end'] },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave the stage', goto: ['stwork2', 'strip_show_end'] },
  ]);
  scene.build();
}

function enterSetCustomerMood(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_overweight', 'body_bmi_obese')) {
    if ((Math.floor(Math.random() * 101) + 0) >= 60) {
      ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
      ((s as any).strip_club = (s as any).strip_club ?? {})['cust_angry'] = 1;
      ((s as any).strip_club = (s as any).strip_club ?? {})['cust_boos'] = ((s as any).strip_club['cust_boos'] ?? 0) + (1);
      ((s as any).strip_club = (s as any).strip_club ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
      if (((s as any).strip_club ?? 0)?.['rand'] === 0) {
        scene.text('You overhear some of the customers sitting next to the stage.');
        scene.text('"Look at her fat hanging out. Her gut and ass are shaking like jelly!"');
      } else {
        if (((s as any).strip_club ?? 0)?.['rand'] === 1) {
          scene.text('You overhear some of the customers sitting next to the stage.');
          scene.text('"What a cow. Someone should roll her off the stage."');
        } else {
          if (((s as any).strip_club ?? 0)?.['rand'] === 2) {
            scene.text('You overhear some of the customers sitting next to the stage.');
            scene.text('"They should get this fat bitch off the stage and bring on a better looking stripper."');
          } else {
            scene.text('You overhear some of the customers sitting next to the stage.');
            scene.text('"Looks like they cater to your tastes too. What was that last fat bitch called again? She weighed more than you, and this girl weighs as much as you two combined!"');
          }
        }
      }
    } else {
      ((s as any).strip_club = (s as any).strip_club ?? {})['cust_angry'] = 0;
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('A few customers are catcalling.');
        scene.text('"Get those fat titties out!" one of them yells.');
      } else {
        scene.text('A few customers are catcalling.');
        scene.text('"Show us some flesh!" one of them yells.');
      }
    }
  } else {
    ((s as any).strip_club = (s as any).strip_club ?? {})['cust_angry'] = 0;
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('Several customers are catcalling. They want to see more.');
      scene.text('"Get those tits out!" one of them yells.');
    } else {
      scene.text('Most of the crowd seems to like what they\'re seeing.');
      scene.text('"Show us some more flesh!" one of them yells out.');
    }
  }
  scene.build();
}

function enterSetCustomerMoodPole(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_overweight', 'body_bmi_obese')) {
    ((s as any).strip_club = (s as any).strip_club ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
    if (((s as any).strip_club ?? 0)?.['rand'] < 25) {
      scene.text('Performing another trick on the pole, you can\'t support your weight and fall flat on your face as the crowd laughs.');
      scene.text('"Hey hippopotamus, stomp back to the swamp where you came from!"');
      ((s as any).strip_club = (s as any).strip_club ?? {})['cust_boos'] = ((s as any).strip_club['cust_boos'] ?? 0) + (1);
      ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) - (40);
      if ((Math.floor(Math.random() * 101) + 0) >= 75) {
        (s as any).fingal = ((s as any).fingal ?? 0) + ((Math.floor(Math.random() * 4) + 2));
        qspCall(s, 'pain', '4', 'cheeks', 'Slam');
        qspCall(s, 'stat', '');
        scene.text('As you fall, you hit the floor hard and feel a bruise forming on your face.');
      }
    } else {
      if (((s as any).strip_club ?? 0)?.['rand'] < 50) {
        ((s as any).strip_club = (s as any).strip_club ?? {})['cust_boos'] = ((s as any).strip_club['cust_boos'] ?? 0) + (1);
        ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) - ((Math.floor(Math.random() * 16) + 15));
        scene.text('You overhear some of the customers sitting next to the stage.');
        scene.text('"Look at her fat hanging out. Her gut and ass are shaking like jelly!"');
      }
    }
  }
  scene.build();
}

function enterDanceClothed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancero ?? 0) - ((s as any).pcs_dancero ?? 0) + 1)) + (((s as any).pcs_dancero ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_clothed1.jpg');
  scene.text('You dance seductively around the pole at the center of the stage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMood(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('The men are starting to call for you to strip, so you\'d better give them what they want.');
  scene.actions([
    { label: 'Strip out of your outfit', goto: ['stwork2', 'strip_clothes'] },
  ]);
  scene.build();
}

function enterStripClothes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancero ?? 0) - ((s as any).pcs_dancero ?? 0) + 1)) + (((s as any).pcs_dancero ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_clothed1.jpg');
  scene.text('You start moving seductively around the pole at the center of the stage.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMood(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Take off your top', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/sveta_clothed2.jpg');
    if (((st as any).strip_club ?? 0)?.['cust_angry'] === 0) {
      qspCall(st, 'mood', 'raise', 'tiny');
      scene.text('Urged on by the audience, you take off your top and let it drop to the stage while you keep teasing them.');
    } else {
      qspCall(st, 'mood', 'lower', 'tiny');
      scene.text('Ignoring the comments from the audience, you take off your top and let it drop to the stage while you keep teasing them.');
    }
    if (((st as any).PCloSkirt ?? 0) > 0) {
      (st as any).temp_bottom_desc = 'skirt';
      ((st as any).temp_bottom_desc = (st as any).temp_bottom_desc ?? {})[1] = 'it';
    } else {
      (st as any).temp_bottom_desc = 'pants';
      ((st as any).temp_bottom_desc = (st as any).temp_bottom_desc ?? {})[1] = 'them';
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take off your ' + String(((st as any).temp_bottom_desc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'clothing', 'strip');
    scene.img('images/locations/city/redlight/stripclub/sveta_clothed3.jpg');
    if (((st as any).strip_club ?? 0)?.['cust_angry'] === 0) {
      qspCall(st, 'mood', 'raise', 'tiny');
      scene.text(`The positive responses make you smile as you unzip your ${((st as any).temp_bottom_desc ?? '')} and let ${(((st as any).temp_bottom_desc ?? 0)?.[1] ?? '')} drop to your ankles before kicking ${(((st as any).temp_bottom_desc ?? 0)?.[1] ?? '')} off and looking several customers straight in the eye as you roll around on the stage in your underwear. Some of them throw some bills your way, so you make sure to some extra attention to them.`);
    } else {
      qspCall(st, 'mood', 'lower', 'tiny');
      scene.text(`The negative comments make you feel a bit uncomfortable as you unzip your ${((st as any).temp_bottom_desc ?? '')} and let ${(((st as any).temp_bottom_desc ?? 0)?.[1] ?? '')} drop to your ankles before kicking ${(((st as any).temp_bottom_desc ?? 0)?.[1] ?? '')} off, looking several customers straight in the eye as you roll around on the stage in your underwear.`);
    }
    (st as any).temp_bottom_desc = undefined;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['stwork2', 'strip_hub'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStripBra(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 2) + 1));
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancero ?? 0) - ((s as any).pcs_dancero ?? 0) + 1)) + (((s as any).pcs_dancero ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_show1.jpg');
  scene.text('You start moving seductively around the pole in the center of the stage wearing just your underwear.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMood(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Take off your bra', handler: (st: GameState) => {
    qspCall(st, 'bras', 'remove');
    scene.img('images/locations/city/redlight/stripclub/sveta_show2.jpg');
    if (((st as any).strip_club ?? 0)?.['cust_angry'] === 0) {
      qspCall(st, 'mood', 'raise', 'tiny');
      scene.text('Urged on by the audience, you slowly take off your bra and let it drop to the stage as you keep teasing them.');
      scene.text('The men in the first row go wild, shouting "Show your pussy! Show your pussy!"');
    } else {
      qspCall(st, 'mood', 'lower', 'tiny');
      scene.text('Ignoring the comments from the audience, you slowly take off your bra and let it drop to the stage while you keep teasing them.');
      scene.text('All you can hear is mockery as you try to ignore them and continue your act. The cutting remarks keep coming however, and you\'re soon close to tears.');
    }
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['stwork2', 'strip_hub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStripPanties(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancero ?? 0) - ((s as any).pcs_dancero ?? 0) + 1)) + (((s as any).pcs_dancero ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_show3.jpg');
  scene.text('You dance seductively in just your panties, teasing the crowd.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMood(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Strip out of your panties', handler: (st: GameState) => {
    qspCall(st, 'panties', 'remove');
    scene.img('images/locations/city/redlight/stripclub/sveta_show4.jpg');
    if (((st as any).strip_club ?? 0)?.['cust_angry'] === 0) {
      qspCall(st, 'mood', 'raise', 'tiny');
      scene.text('The positive responses make you smile even broader as you playfully drop your panties to your ankles before kicking them off. You look several customers straight in the eye as you do and some of them throw some bills your way, so you make sure to pay some extra attention to them.');
    } else {
      qspCall(st, 'mood', 'lower', 'tiny');
      scene.text('The negative comments make you feel a bit uncomfortable as you playfully drop your panties to your ankles before kicking them off. You look several customers straight in the eye as you do so.');
    }
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['stwork2', 'strip_hub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDanceNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancero ?? 0) - ((s as any).pcs_dancero ?? 0) + 1)) + (((s as any).pcs_dancero ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_show5.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMood(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).strip_club ?? 0)?.['cust_boos'] < 2) {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('The men in the first row go wild seeing you dance nude, shouting out their approval. Several of them are tipping generously.');
    scene.text('You dance as seductively as you can, trying to spread your attention over the audience, but paying extra attention to the ones who give you more money.');
    scene.text('When the music starts winding down, you collect your tips and pick up your clothes, blowing a few kisses to your audience before going backstage.');
    qspCall(s, 'arousal', 'striptease', 5);
    qspCall(s, 'arousal', 'end');
    ((s as any).strip_club = (s as any).strip_club ?? {})['lapdance_chance'] = 1;
    (s as any).pcs_hairbsh = 0;
    ((s as any).strip_club = (s as any).strip_club ?? {})['total_stripshows'] = ((s as any).strip_club['total_stripshows'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the stage', goto: ['stwork2', 'strip_show_end'] },
    ]);
  } else {
    scene.img('images/locations/city/redlight/stripclub/sveta_show5.jpg');
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('Even being completely naked doesn\'t seem to get any positive responses.');
    scene.text('All you can hear is mockery as you try to continue your act, the cutting remarks soon bringing you close to tears.');
    scene.text('Before the music even stops, you start collecting your meager tips and clothes and flee backstage.');
    qspCall(s, 'arousal', 'striptease', 5);
    qspCall(s, 'arousal', 'end');
    ((s as any).strip_club = (s as any).strip_club ?? {})['lapdance_chance'] = 0;
    (s as any).pcs_hairbsh = 0;
    ((s as any).strip_club = (s as any).strip_club ?? {})['total_stripshows'] = ((s as any).strip_club['total_stripshows'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the stage', goto: ['stwork2', 'strip_show_end'] },
    ]);
  }
  scene.build();
}

function enterPoleUnderwear(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).strip_club = (s as any).strip_club ?? {})['dancing_rounds'] = ((s as any).strip_club['dancing_rounds'] ?? 0) - (1);
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (2);
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'exp_gain', 'dancpol', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancpol ?? 0) - ((s as any).pcs_dancpol ?? 0) + 1)) + (((s as any).pcs_dancpol ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/pole_panties.jpg');
  scene.text('You grab hold of the pole and acrobatically slide around it in your underwear.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMoodPole(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', goto: ['stwork2', 'strip_hub'] },
  ]);
  scene.build();
}

function enterPolePanties(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).strip_club = (s as any).strip_club ?? {})['dancing_rounds'] = ((s as any).strip_club['dancing_rounds'] ?? 0) - (1);
  qspCall(s, 'sweat', 'add', 5);
  (s as any).fat = ((s as any).fat ?? 0) - (2);
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'exp_gain', 'dancpol', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'fame', 'city', 'stripping', (Math.floor(Math.random() * 2) + 1));
  ((s as any).strip_club = (s as any).strip_club ?? {})['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + ((Math.floor(Math.random() * (5 * ((s as any).pcs_dancpol ?? 0) - ((s as any).pcs_dancpol ?? 0) + 1)) + (((s as any).pcs_dancpol ?? 0))));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/pole_topless.jpg');
  scene.text('You grab hold of the pole and acrobatically slide around it in your panties.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetCustomerMoodPole(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Continue', goto: ['stwork2', 'strip_hub'] },
  ]);
  scene.build();
}

function enterManagerBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A292');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  scene.text('The security guard ushers you into Sasha\'s office before closing the door behind you. Sasha smiles at you as he sits behind his desk.');
  if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 0) {
    scene.text(`"I heard that you've had a pretty good night, ${((s as any).pcs_strippername ?? '')}. How about a little bonus to top it off?" he asks.`);
    scene.text('"What kind of bonus?" you ask while raising an eyebrow.');
    scene.text('He grins. "Here\'s the deal. Every week, I choose a girl who earns a bonus. Emphasis on <i>earns</i>..."');
    scene.text('"Let me guess. You want me to have sex with you?" you retort and he snorts.');
    scene.text('"<i>No,</i>" he scowls. "Like I said when I hired you, this place is <i>not</i> a brothel. What I\'m going to pay you to do is suck my dick, which is no different from what you do out there with customers. Now are you interested or am I going to have to call in someone who wants that money?"');
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 2);
    scene.img('images/shared/sex/blowjob/bimbo.knees5.jpg');
    scene.text('"Okay, I\'ll do it. How much is this bonus?" you ask.');
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 1000)}," he replies while motioning you over to him.`);
    scene.text(`You nod before you walk over and kneel in front of him as he unzips his pants and pulls his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock out.`);
    scene.text('"Get to work," he orders while snapping his fingers.');
    scene.text('You obediently take his fat, veiny cock into your mouth, feeling it grow hard as you take it into your throat and work it with your tongue. "That\'s it, keep going..." he says softly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).strip_club = (st as any).strip_club ?? {})['manager_bonus'] = 1;
    qspCall(st, 'stat', '');
    if (((st as any).tits ?? 0) >= 4) {
      scene.img('images/locations/city/redlight/studio_porn/sex/titfuck.mp4');
      scene.text('A few seconds later, he roughly pulls you off his cock and scowls down at you. "Put those nice tits to good use."');
      scene.text(`You nod and undress your top half, exposing your ${(((st as any).pc_descWordy ?? 0)?.['breast'] ?? '')} to a grinning Sasha. You then obediently wrap your breasts around his warm, twitching cock and start titfucking him while continuing to suck on the head.`);
      scene.text('A few minutes later, he finally reaches climax and grunts loudly as cum spurts out of his dick and splatters over your breasts. You release your grip on his dick and sit back on your knees as Sasha looks down at you.');
      scene.text(`"Good job ${((st as any).pcs_nickname ?? '')}, you more than earned this," he says as he counts out a wad of cash and hands it to you. "Keep up the good work and there will be more bonuses in the future."`);
      scene.text('You just smile at him and get up to clean yourself up before taking the money. After counting it, Sasha sends you on your way with a slap on the ass. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry to the dressing room.');
      qspCall(st, 'arousal', 'bj', (-2));
      qspCall(st, 'arousal', 'titjob', (-2));
      qspCall(st, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'money', 'earn', 1000);
      qspCall(st, 'stat', '');
    } else {
      scene.img('images/shared/sex/cum/mouth/cum13.jpg');
      scene.text('You spend the next few minutes sucking his dick, listening to him moan before he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      scene.text('When he finally finishes and releases his grip on your head, allowing you pull yourself off of his cock, you gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as you slowly jerk his slowly softening cock in your hand.');
      scene.text(`"Good job ${((st as any).pcs_strippername ?? '')}, you more than earned this," he says as he counts out a wad of cash and hands it to you. "Keep up the good work and there will be more bonuses in the future."`);
      scene.text('You just smile at him before getting up and taking the money. After counting it, Sasha sends you on your way with a slap on the ass. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry to the dressing room.');
      qspCall(st, 'arousal', 'bj', (-2));
      qspCall(st, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'money', 'earn', 1000);
      qspCall(st, 'stat', '');
    }
    scene.actions([
      { label: 'Return to the dressing room', goto: ['stwork2', 'strip_show_end'] },
    ]);
  } },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You shake your head and storm back out into the hallway without saying a word, ignoring the security guard on your way back to the dressing room.');
    scene.actions([
      { label: 'Return to the dressing room', goto: ['stwork2', 'strip_show_end'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/shared/sex/blowjob/bimbo.knees5.jpg');
    scene.text('"Interested in a little bonus, are we?" he asks rhetorically with a grin before snapping his fingers and pointing to his crotch.');
    scene.text(`You obediently walk over and kneel in front of him before unzipping his pants and taking his already rock hard ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock into your mouth.`);
    scene.text('"Eager today, aren\'t we?" he laughs as you start sucking.');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('Just as you\'re getting into it, you hear a knock at the door and freeze as Sasha looks down at you. "Don\'t stop," he orders before telling the person to enter.');
      scene.text('A man walks into the room and stops in front of the desk. There\'s no hiding the fact that you\'re under here, you just hope he doesn\'t recognise you.');
      scene.text('You push the thoughts to the back of your mind and resume sucking Sasha\'s dick, trying your best to keep the noise down as the two men converse for what feels like an eternity before the man finally leaves.');
      scene.text('The distraction gone, you\'re able to refocus your efforts, the room filled with the obscene sounds of you gagging and slurping on his cock until he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      qspCall(s, 'arousal', 'bj', 5);
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 1000);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum13.jpg');
    scene.text('He finally finishes and releases his grip on your head, allowing you pull yourself off of his cock. You gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as he counts your money.');
    scene.text(`"Nice work, ${((st as any).pcs_strippername ?? '')}. Good to see you aren't afraid of performing in front of an audience. Maybe a career in porn is in your future?"`);
    scene.text('You just smile at him before getting up and taking the money. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to the dressing room.');
    scene.actions([
      { label: 'Return to the dressing room', goto: ['stwork2', 'strip_show_end'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You really get into it and passionately suck his dick, listening to him moaning softly as the obscene sounds of you gagging and slurping on his cock echo around the room.');
      scene.text('After a few minutes, he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      qspCall(s, 'arousal', 'bj', 5);
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 1000);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum13.jpg');
    scene.text('He finally finishes and releases his grip on your head, allowing you pull yourself off of his cock. You gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as he counts your money.');
    scene.text(`"Nice work, ${((st as any).pcs_strippername ?? '')}. It's nice to see young girls with a good work ethic," he laughs.`);
    scene.text('You just smile at him before getting up and taking the money. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to the dressing room.');
    scene.actions([
      { label: 'Return to the dressing room', goto: ['stwork2', 'strip_show_end'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterPrivatdance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'jobs', 'clock', 'city_strip_stripper');
  qspCall(s, 'money', 'earn', 400);
  qspCall(s, 'arousal', 'foreplay', 10);
  qspCall(s, 'stat', '');
  ((s as any).strip_club = (s as any).strip_club ?? {})['rand'] = (Math.floor(Math.random() * 26) + 0);
  if (((s as any).strip_club ?? 0)?.['rand'] === 0) {
    qspGoto(s, 'stwork2', 'pr1');
  } else {
    if (((s as any).strip_club ?? 0)?.['rand'] === 1) {
      qspGoto(s, 'stwork2', 'pr2');
    } else {
      if (((s as any).strip_club ?? 0)?.['rand'] === 2) {
        qspGoto(s, 'stwork2', 'pr3');
      } else {
        if (((s as any).strip_club ?? 0)?.['rand'] === 3) {
          qspGoto(s, 'stwork2', 'pr4');
        } else {
          if (((s as any).strip_club ?? 0)?.['rand'] === 4) {
            qspGoto(s, 'stwork2', 'pr5');
          } else {
            if (((s as any).strip_club ?? 0)?.['rand'] === 5) {
              qspGoto(s, 'stwork2', 'pr6');
            } else {
              if (((s as any).strip_club ?? 0)?.['rand'] === 6) {
                qspGoto(s, 'stwork2', 'pr7');
              } else {
                if (((s as any).strip_club ?? 0)?.['rand'] === 7) {
                  qspGoto(s, 'stwork2', 'pr8');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.img('images/locations/city/redlight/stripclub/privatstrip.jpg');
  scene.text('You escort your customer to one of the private rooms, where you put on some music before telling him to sit and enjoy the show.');
  scene.text('You then spend half an hour showing off your lap dancing skills while slowly peeling off your clothing. Every time you grind against him, you feel his rock hard cock straining against his pants.');
  scene.text('When you finish your dance, your customer looks just as flustered as he does happy.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPr1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/private_dance1.jpg');
  scene.text('You\'re dancing for a bachelor party that are set up in one of the private rooms. They\'re all quite drunk and rowdy, one of the men slapping the waitress on the ass as she places their drinks on the table. She takes the wad of cash he hands her and quickly scurries out of the room.');
  scene.text('The men cheer when they see you and start crowding around you while offering you wads of cash. "Hey Sergey, your stripper is here!"');
  scene.text('The groom to be looks at you with a drunken smile. "Show us what you\'ve got, girl!"');
  scene.text('Music starts playing as the lights dim and you seductively walk over to the pole in the room.');
  scene.actions([
    { label: 'Dance on the pole', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_pole.mp4');
    scene.text('You climb onto the pole and start erotically dancing on it, his friends drunkenly hollering and catcalling as you smile at them.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_pole1.mp4');
    scene.text('Now warmed up, you slowly expose your breasts as you continue dancing on the pole. You\'re soon stripped down to just your panties as you smile at the groom.');
    scene.actions([
      { label: 'Give him a lap dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_grind.mp4');
    scene.text('You climb off the pole and seductively walk over to the groom, his friends cheering as you climb into his lap. You can feel his rock hard cock bulging beneath you.');
    scene.text('You spend a few minutes rocking your hips and grinding against him before you stand and wiggle your ass in his face. It takes all his willpower for him not to spank you before you slowly bend over and teasingly tug at your panties before you wiggle out of them, the room erupting in cheers as your panties drop to your ankles.');
    scene.text('After this, you climb back into his lap and start grinding your naked body against him, the bulge in his crotch now at straining point as sweat beads on his forehead.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_grind.mp4');
    scene.text('You continue to rock your hips and grind against him while shaking your breasts in his face until the music stops, his friends giving him approving, if somewhat jealous, nods and smiles as you finish your performance.');
    scene.text('"I\'m so glad I let you guys talk me into coming to the city tonight! This is the perfect last night of freedom!" he says with a huge grin.');
    scene.text('"It was the least we could do! Gotta remind you of what you\'ll be giving up with that ball and chain going around your leg next week!" his friend cackles.');
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/private_room.jpg');
    scene.text('One of the men looks at his watch and tells the others that their time is up. As you climb off your client\'s lap and gather your clothes, the man approaches you.');
    scene.text(`"Great show, girl. So great in fact, that you left our friend rather 'tensed up'. If we pay you an extra ${qspFunc(s, 'money', 'string_profit', 2000)}, would you give him a 'happy ending' to his night?" he asks loud enough for everyone to hear. The groom gives you a drunk smile.`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 2000);
    scene.img('images/locations/city/redlight/stripclub/private_bj.mp4');
    scene.text('You agree and the groom\'s friends all leave while giving him fist bumps and knowing smiles.');
    scene.text('Once they\'re gone, you approach the man and smile. "Let\'s see what I\'m dealing with here..." you whisper seductively as you run your hand over his crotch.');
    scene.text('You unbutton his pants and pull his rock hard cock out before slowly jerking it in your hand. "My, my! Someone enjoyed the show!" you giggle as you get on your knees in front of him.');
    scene.text('You take his shaft into your mouth and start sucking while bobbing your head up and down. He\'s so close that it only takes a few seconds for him to reach climax. He holds your head down and lets out a loud grunt as his cum spurts into your throat, forcing you to swallow it before he lets you go.');
    scene.text('You sit up and choke down the last of his cum as he stands up and pats you on the head. "That was amazing! Shame I won\'t feel those lips wrapped around my cock again."');
    scene.text('He heads out of the room as you collect the rubles sitting on the table, along with your clothing, and head to the dressing room to clean yourself up.');
    qspCall(st, 'arousal', 'hj', 2);
    qspCall(st, 'arousal', 'bj', (-2));
    qspCall(st, 'cum_call', 'mouth_swallow', 'Private dance client', 0, 0, 10000, 40);
    qspCall(st, 'arousal', 'end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/fuckyou_underwear.jpg');
    scene.text('You shake your head as you start getting dressed. "This is a strip club, not a fucking brothel! Go rent him a whore off the corner if he needs his dick sucked!"');
    scene.text('"Whatever, bitch. Enjoy your dirty slut money. Shaking your tits and ass is the only thing you\'re good for!" he huffs and you flip him off before collecting your clothing and heading back to the dressing room.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
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

function enterPr2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/private_grind.mp4');
  scene.text(`The man you're dancing for is mesmerized by you and you feel his rock hard cock straining in his pants as you grind against him. After a while, he asks if he can cum on your face for ${qspFunc(s, 'money', 'string_profit', 1000)}.`);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You refuse and kick him out before heading back to the dressing room.');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'money', 'earn', 1000);
    qspCall(st, 'stat', '');
    qspCall(st, 'npcgeneratec', '0', 'Private dance client', (Math.floor(Math.random() * 36) + 20));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('You nod and get on your knees as the client pulls his cock out and starts jerking it. After a few seconds, he loudly grunts and you close your eyes before spurts of warm cum start splattering across your face. It drips down your chin as he squeezes the last few drops onto your forehead.');
    scene.text('You wipe the cum from your eyes as he puts his cock away and places your payment on the table before leaving. You gather up your clothes and wipe your face as best as you can as you hurry to the dressing room to clean up.');
    qspCall(st, 'cum_call', 'face', 'Private dance client', 0, 0, 10000, 40);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPr3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/locations/city/redlight/stripclub/private_dance3.jpg');
  scene.text(`It's a bit different dancing for a woman. It's not often you have the pleasure of doing it, so you're feeling a bit more frisky than usual. As you finish the dance, she gives you a kiss, and you start making out. She then stops and offers you ${qspFunc(s, 'money', 'string_profit', 1000)} to eat her out.`);
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You refuse and kick her out before heading back to the dressing room.');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    ((st as any).stat = (st as any).stat ?? {})['lesbian_count'] = ((st as any).stat['lesbian_count'] ?? 0) + (1);
    qspCall(st, 'money', 'earn', 1000);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/lesbian/ukuni11.jpg');
    scene.text('You nod and get on your knees in front of the woman as she undresses her lower half and sits back in the chair before spreading her legs. You move in and start tracing your tongue along her pussy lips before moving up to her clit.');
    scene.text('You spend a few minutes teasing her sensitive bud before she clamps her hand over her mouth and lets out a muffled cry as she climaxes and a small amount of her juices squirt over your face.');
    scene.text('Once she recovers, she dresses herself and leaves your payment on the table before walking out. You gather up your clothes and head to the dressing room to clean up.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPr4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'money', 'earn', 500);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/private_grind.mp4');
  scene.text('You enter one of the private rooms where your customer is waiting. He looks extremely nervous and is fidgeting in his chair.');
  scene.text('You smile and approach him. "Any special requests?" you ask in your most seductive voice.');
  scene.text('The man looks at you as you start to strip, struggling to get his words out. "N-no, please. P-please keep your clothes o-on..." he stammers.');
  scene.text('You\'re taken aback for a second, but he continues, his courage seemingly building as he presents a handful of rubles in his clenched fist.');
  scene.text('"C-could you just... g-grind on me? With your clothes on?" he inquires, a bead of sweat rolling down his forehead.');
  scene.text('"Just sit back and try to relax," you understandingly reply. It\'s a simple enough request, albeit keeping your clothes on is a bit strange for a \'strip\' club.');
  scene.text('The next few minutes go by rather quickly for your customer, as your simple grinding seemingly makes him climax in his pants. He groans and vibrates under you, but he obeys the club rules and never lays a hand on you as you rock your hips and grind against his bulge.');
  scene.text('As the dance ends, you climb off him and stand before him, noticing the huge wet spot on the front of his pants.');
  scene.text('He gives you every last bill from his wallet and thanks you profusely, telling you multiple times that he\'ll never forget you.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPr5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/private_double.mp4');
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).locat ?? 0)?.['A23'] === 22  &&  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
    scene.text('You approach the private room where your client is waiting and hear two voices behind the door. As you enter, Albina greets you at the door.');
    scene.text('"This guy\'s going to be a pain in the fucking ass..." she whispers as you step inside. Behind her, an overweight patron in a suit claps his hands excitedly. "Ah! She\'s here! Now we can really get the party started!"');
    scene.text('Albina rolls her eyes before strutting over to the man and thrusting her bubble butt in his face. "You think you can handle both of us?" she asks, barely making any effort to hide the the fact that she clearly finds him unattractive.');
    scene.text('"Oh, I can! My wallet is fatter than that juicy ass of yours, girl!" he bellows, tucking a few bills into her g-string with a hearty laugh before smacking her on the ass.');
    scene.text('"No fucking touching!" she scoffs in disgust and smacks his hand away.');
    scene.text('You join Albina and you both start dancing and stripping to the music, trying to look sexy and alluring for the man, all while touching him as little as possible.');
    scene.text('He smells like sweat, cigarettes and booze, and makes continuous lewd comments about your bodies. A security guard also has to step in multiple times during the dance to remind him that he\'s not allowed to touch you. Sometimes this job feels really gross...');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('You approach the private room where your client is waiting and hear two voices behind the door. As you enter, your fellow stripper greets you with a chirpy smile.');
    if (((s as any).strip_club ?? 0)?.['jade_intro'] === 0) {
      scene.text('"Hi!" she beams as she bounces up to you, causing her large breasts to jiggle. "You ready to totally rock this guy\'s world with me? He\'s <i>sooo nice</i>! He gives me <i>ssoooo</i> much money just for being <i>me</i>!"');
      scene.text('"Really? I wonder why...?" you reply, but she\'s too dimwitted to pick up on your sarcasm.');
    } else {
      scene.text('"Hey Jade!" you say with a smile and she bounces up to you, causing her fake breasts to jiggle.');
      scene.text(`"Hi ${((s as any).pcs_strippername ?? '')}! I'm <i>soooo</i> happy that we get to dance together! This man is <i>sooo nice</i>! He gives me <i>ssoooo</i> much money just for being <i>me</i>!"`);
      scene.text('"Really? I wonder why...?" you reply, knowing she\'s too dimwitted to pick up on your sarcasm.');
    }
    scene.text('Glancing behind her, you see an overweight patron in a suit clapping his hands excitedly. "Ah! She\'s here! Now we can really get the party started!"');
    scene.text('You watch as Jade bounces up to the man and pushes her large, fake breasts in his face. "Do you like my boobies?" she asks with a beaming smile, entirely oblivious to the client\'s overly perverted nature.');
    scene.text('"Oh, I do! Shake those \'boobies\' for me and I\'ll give you all the money in my wallet!" he bellows before stuffing a wad of cash into her cleavage with a hearty laugh.');
    scene.text('The music starts playing and you try to look sexy and alluring for the man, all while touching him as little as possible.');
    scene.text('He smells like sweat, cigarettes and booze, and makes continuous lewd comments about your bodies, which a smiling Jade happily accepts as compliments. A security guard has to step in multiple times during the dance to remind him that he\'s not allowed to touch you.');
    scene.text('This job is really gross sometimes...');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterPr6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'money', 'earn', 2000);
  scene.img('images/locations/city/redlight/stripclub/private_dance6.mp4');
  scene.text('Your client is sitting alone in the largest of the private rooms, a room where private group parties are normally held. Instead, it\'s just you and him in a big empty space tonight, an echo chamber full of nothing but loud music, club lighting and a bit of shared loneliness between two strangers.');
  scene.text('The patron doesn\'t say much as you grind against him, but he watches you intently. With no special requests given, you run through a typical dance routine, slinking and sliding your naked body over him as alluringly as possible. Once your time is up, he gives you a smile and stands up before leaving the room.');
  scene.text('After he closes the door behind him and you gather your things, a security guard cracks open the door and hands you a wad of cash. "This is from your client. You must have made a good impression since he wouldn\'t shut up about you. Nice work."');
  scene.text('Despite working in such a dark and sometimes depraved place, you walk back to the dressing room with your head up a little higher than before, feeling good about a job well done.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPr7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/locations/city/redlight/stripclub/private_pole.mp4');
  scene.text('You meet your patron in one of the private rooms with a more lush setting than many of the others. Red velvet curtains and mirrors line the walls, and multiple poles surround the outskirts of the room, allowing for many girls to serve many customers at once. Tonight though, it\'s just you and one other man.');
  scene.text('You feel relatively safe knowing there\'s a security guard right outside the door, but the way the man\'s eyes pierce your own makes your heart race. There\'s definitely more than meets the eye with him.');
  scene.text('Still, you\'re here to do a job, and you start dancing for him as seductively as possible. After a few minutes, he tosses a handful of bills at you. "Let\'s see some skin, girl!" he exclaims.');
  scene.actions([
    { label: 'Show him some skin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/stripclub/private_pole1.mp4');
    scene.text('You expose your breasts as you sway and rock seductively around the pole, occasionally giving him a small smile and leaning in his direction. You then arch your back, giving him a full view of your ass.');
    scene.text('"Like what you see?" you coo in his direction. His bulge is clearly visible now, even more so as he lewdly rubs it while watching you.');
    scene.text('"I do, and I want more. How much to get you over here to take care of this with that pretty little mouth of yours?"');
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 500);
    scene.img('images/locations/city/redlight/stripclub/private_room.jpg');
    scene.text('"Sorry, no touching. House rules."');
    scene.text('Your customer huffs and nods, tossing a few more bills at your feet and downing the remainder of his drink.');
    scene.text('"Yeah yeah, I get it. See you around, girl."');
    scene.text('You fix your outfit and collect your earnings from the floor, watching from the corner of your eye as the man stumbles out of the door. A few minutes later, the security guard peeks in and gives you the "all clear" sign, allowing you to head back to the dressing room.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Private dance client', (Math.floor(Math.random() * 16) + 25));
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0));
    qspCall(st, 'money', 'earn', 2000);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_bj.mp4');
    scene.text('You look at the customer. He\'s a bit older, but seems decent enough. And he smells washed, unlike some of the guys who roll through the club.');
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 2000)}," you reply and bite your lip seductively.`);
    scene.text('"This better be one hell of a blowjob!" he says before tossing the money at you. He quickly stands and tugs his pants down, his thick, veiny cock springing free in the process. He\'s already rock hard from your striptease, and per your agreement, it\'s inside your mouth within seconds.');
    scene.text('His fat cock fills every inch of space between your lips, and just taking it inside causes the swollen tip to press into the entrance of your throat as you start sucking and bobbing your head up and down.');
    scene.text('After just a few minutes, the man\'s entire body tenses and, without warning, he cums down your throat, not even giving you a chance to pull his cock out of your mouth.');
    scene.text('The man grunts as he holds your head in place, unloading every single drop of his hot, viscous cum into your mouth. When he finally releases you, you sputter and choke on his thick load while gasping for breath. Before you can even yell at him for not giving you any warning, he\'s re-dressed himself and ducked out of the door.');
    scene.text('"Could have warned me, asshole..." you mumble to yourself while gathering your things and heading back to the dressing room.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrivatdanceEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPr8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/locations/city/redlight/stripclub/private_grind.mp4');
  if (((s as any).film ?? 0) > 0) {
    scene.text('You meet your patron in one of the private rooms and are surprised to see that it\'s a co-worker... of sorts. You recognise him as one of the talent scouts from the porn studio who you\'ve seen a few times while at the studio.');
    scene.text(`"Oh. Hello ${((s as any).pfname ?? '')}," he smiles. "Or do you prefer ${((s as any).pcs_strippername ?? '')} when working here?"`);
    scene.text('You give him a flirty smile as you seductively walk over to him. "Any special requests?"');
    scene.text('He grins. "A few, but I\'m not allowed to film you."');
    scene.text('The music starts playing and you dance and grind on the man for the next few minutes.');
    scene.text('Once you finish, he smiles and hands you a stack of rubles.');
    scene.text('"Great show. You earned this," he says before he leaves the room.');
    scene.text('You pocket the cash before gathering your things and heading back to the dressing room.');
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).strip_club ?? 0)?.['porn_scout'] === 0  &&  (!((s as any).film ?? 0))) {
      scene.text('You meet your patron in one of the private rooms, a middle aged man who looks very happy to see you. You give him a flirty smile as you seductively walk over to him.');
      scene.text('As you dance and grind on him, you can\'t help but feel like he\'s analysing you under his grin.');
      scene.text('Once you finish your dance, the man nods, seemingly in satisfaction.');
      scene.text('"You really know how to tease a man with your body. Interested in a little career change?"');
      scene.text('You cock your head and he pulls a business card out of his wallet, along with a large stack of rubles.');
      scene.text('"I\'m a talent scout for an... agency in the city. Come to the listed address if you\'re interested. There\'s also a bonus in there for putting on such a good show."');
      scene.text('You give him a flirty smile as he leaves before looking at the card.');
      if ((!((s as any).pornstudio ?? 0))) {
        scene.text('Written on it is the name and address for... a porn studio? It seems to be located near by the club.');
      }
      if (((s as any).pornstudio ?? 0) === 1) {
        scene.text('Written on it is the name and address of the porn studio that\'s located nearby.');
      }
      scene.text('You pocket the cash and card before gathering your things and heading back to the dressing room.');
      qspCall(s, 'money', 'earn', 1000);
      if ((!((s as any).pornstudio ?? 0))) {
        (s as any).pornstudio = 1;
      }
      ((s as any).strip_club = (s as any).strip_club ?? {})['porn_scout'] = 1;
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).strip_club ?? 0)?.['porn_scout'] === 1  &&  ((s as any).strip_club ?? 0)?.['porn_scout_pickup'] === 0  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)) {
        scene.text('You meet your patron in one of the private rooms, the "talent" scout who offered you a job doing porn. You give him a flirty smile as you seductively walk over to him.');
        scene.text('"Nice to see you again," he grins.');
        scene.text('The music starts playing and you dance and grind on the man for the next few minutes.');
        scene.text('"Another great show, girl," he says before he smiles at you. "I don\'t know if you took me up on my earlier offer, but I have another one for you if you\'re interested?"');
        scene.text('You cock your head and he grins. "I\'m a... hands on talent scout. I like to give prospective models a personal... "test run" to see how well they take to being filmed."');
        scene.text('"So you\'re saying you want me to film a porno with you, even if I have no interest in being a porn star?" you ask.');
        scene.text(`He frowns. "I know you might be reluctant to do it, and for good reason, but I'll pay you, let's call it 'hazard pay.'. How does ${qspFunc(s, 'money', 'string_profit', 6000)} sound? That's over 10 times what you just made for shaking your ass for me."`);
        qspCall(s, 'willpower', 'sex', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'money', 'earn', 1000);
    ((st as any).strip_club = (st as any).strip_club ?? {})['porn_scout_pickup'] = (-1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_room.jpg');
    scene.text('"Sorry, but I\'m not interested," you reply.');
    scene.text('He hides his disappoinment well. "Well, I can\'t say I didn\'t try. Here\'s an extra bonus for putting on another good show," he says before he leaves the room.');
    scene.text('You pocket the cash before gathering your things and heading back to the dressing room.');
  } },
          ]);
        }
        scene.actions([
          { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 2000);
    ((st as any).strip_club = (st as any).strip_club ?? {})['porn_scout_pickup'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/private_room.jpg');
    scene.text('That\'s quite the pay day for one small video, even if it is <i>very</i> risky. "Okay, when do you want to do it?" you ask.');
    scene.text('"I need to set some things up first," he replies. "Swing by room 309 at the hotel in the city center tomorrow, let\'s say at 2pm. In the meantime, here\'s a bonus not just for the dance, but for what\'s to come as well."');
    scene.text('He leaves the room with a happy grin as you pocket the cash before gathering your things and heading back to the dressing room.');
  } },
        ]);
      } else {
        scene.text('You meet your patron in one of the private rooms, the "talent" scout who offered you a job doing porn. You give him a flirty smile as you seductively walk over to him.');
        scene.text('"Nice to see you again," he grins.');
        if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] === 2) {
          scene.text('"The video turned out well," he adds. "You were even better on camera than I thought."');
        }
        scene.text('The music starts playing and you dance and grind on the man for the next few minutes.');
        scene.text('Once you finish, he smiles and hands you a stack of rubles.');
        scene.text('"Another great show, girl. You earned this," he says before he leaves the room.');
        scene.text('You pocket the cash before gathering your things and heading back to the dressing room.');
        qspCall(s, 'money', 'earn', 500);
        qspCall(s, 'stat', '');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivatdanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPrivatdanceEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) < 30) {
    qspCall(s, 'sweat', 'add', 10);
  }
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 0;
  (s as any).fat = ((s as any).fat ?? 0) - (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'exp_gain', 'dancero', (Math.floor(Math.random() * 3) + 2));
  ((s as any).strip_club = (s as any).strip_club ?? {})['total_stripshows'] = ((s as any).strip_club['total_stripshows'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return to the dressing room', goto: ['stwork2', 'strip_show_end'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'strip_show_start':
      enterStripShowStart(s, scene);
      break;
    case 'strip_show_end':
      enterStripShowEnd(s, scene);
      break;
    case 'strip_hub':
      enterStripHub(s, scene);
      break;
    case 'strip_hub2':
      enterStripHub2(s, scene);
      break;
    case 'set_customer_mood':
      enterSetCustomerMood(s, scene);
      break;
    case 'set_customer_mood_pole':
      enterSetCustomerMoodPole(s, scene);
      break;
    case 'dance_clothed':
      enterDanceClothed(s, scene);
      break;
    case 'strip_clothes':
      enterStripClothes(s, scene);
      break;
    case 'strip_bra':
      enterStripBra(s, scene);
      break;
    case 'strip_panties':
      enterStripPanties(s, scene);
      break;
    case 'dance_nude':
      enterDanceNude(s, scene);
      break;
    case 'pole_underwear':
      enterPoleUnderwear(s, scene);
      break;
    case 'pole_panties':
      enterPolePanties(s, scene);
      break;
    case 'manager_bonus':
      enterManagerBonus(s, scene);
      break;
    case 'privatdance':
      enterPrivatdance(s, scene);
      break;
    case 'pr1':
      enterPr1(s, scene);
      break;
    case 'pr2':
      enterPr2(s, scene);
      break;
    case 'pr3':
      enterPr3(s, scene);
      break;
    case 'pr4':
      enterPr4(s, scene);
      break;
    case 'pr5':
      enterPr5(s, scene);
      break;
    case 'pr6':
      enterPr6(s, scene);
      break;
    case 'pr7':
      enterPr7(s, scene);
      break;
    case 'pr8':
      enterPr8(s, scene);
      break;
    case 'privatdance_end':
      enterPrivatdanceEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stwork2: LocationDef = {
  name: 'stwork2',
  title: 'Stage',
  region: 'other',
  enter: enter,
};
