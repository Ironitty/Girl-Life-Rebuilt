import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'furi', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/highway/furi.jpg');
  scene.text('A paved area next to the main road between St. Petersburg and Pavlovsk, which functions as a truck stop. There are a few lorries here, but you only see one driver. He\'s leaning against his truck, smoking a cigarette.');
  if (((s as any).trfatherQW ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about Mikhail Kuznetsov', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).trfatherQW = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_1.jpg');
    scene.text('"Hello sir! Can I ask you a question?" you ask the truck driver. When he shrugs, you continue: "Do you happen to know a man named Mikhail Kuznetsov? I\'m looking for him. He\'s a truck driver, like you!"');
    scene.text('The man ponders for a moment. He looks as if the name does ring a bell, but he can\'t remember exactly where from.');
    scene.text('"The name does sound familiar, I think I\'ve met him a few times", he nods. When he sees the hopeful look in your eyes, he continues:');
    scene.text('"There is a large warehouse terminal in St. Petersburg\'s industrial district, most truckers go by there on their travels. I bet someone there will be able to help you find him."');
    scene.text('"Thank you so much!" you shout gleefully, and you can barely stop yourself from jumping at the man to hug him.');
    scene.text('He laughs when he sees how happy you are, and says: "Glad I could help, girl. I should get back on the road… you take care! Tell Mikhail I said hi!"');
    scene.actions([
      { label: 'Let him get back to work', goto: ['furi', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Return to the road', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['road', ''] },
    { label: 'Try to get a lift', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/highway/furi.jpg');
    (s as any).furi_recog = Math.floor(Math.random() * 200) + 1;
    (s as any).furi_driver = Math.floor(Math.random() * 20) + 1;
    if ((!((s as any).nroad ?? 0))) {
      scene.text('"Excuse me, sir?" you ask the driver. "I need a ride, could you give me a lift?"');
      (s as any).furi_recog_city = Math.floor(Math.random() * 200) + 1;
    } else {
      if (((s as any).nroad ?? 0) === 10) {
        scene.text('"Excuse me, sir?" you ask the driver. "I need a ride, could you give me a lift?"');
        (s as any).furi_recog_gad = Math.floor(Math.random() * 200) + 1;
      } else {
        if (((s as any).nroad ?? 0) === 20) {
          (s as any).furi_recog_pav = Math.floor(Math.random() * 200) + 1;
          scene.text('"Excuse me, sir?" you ask the driver. "I need a ride, could you give me a lift?"');
        }
      }
    }
    if (((s as any).furibj ?? 0) < ((s as any).furi_recog ?? 0)) {
      scene.text('The truck driver gives you a knowing grin: "Ah, a hitchhiker? Of course I can, dear! But the real question is… how are you going to thank me if I do?"');
      scene.text('He walks over to you and puts his hand on your buttocks, not leaving any question as to what he wants from you.');
      scene.text('You quickly look around, but no other drivers are around to give you a ride instead; he\'s your only option right now.');
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
        ]);
      }
      scene.actions([
        { label: 'Tell him you\'ll suck him off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/highway/furi.jpg');
    scene.text('After you make sure no one else can hear you say it, you move your head closer to the driver and say: "How about I give you a blowjob?"');
    scene.text('The driver laughs and says: "Sounds good, I wouldn\'t mind some road head. Do you have a condom?"');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You nod: "Yes, I do."');
    scene.text('"Excellent… I love it when they come prepared", the driver smiles. He opens the door and invites you in: "Milady, after you!"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['furisex', '', '0'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Uhh… no?" you admit, which upsets the man.');
    scene.text('He shoos you away and says: "Do you think I\'m crazy? I get sluts like you in my truck all the time, I\'m not touching you without a condom! My wife would kill me if I came home with an STD!"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Try to persuade him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if ((((s as any).furiswallow ?? 0) / 10) >= ((s as any).furi_driver ?? 0)) {
      scene.text('"No! Wait! Please!" You panic and suddenly remember something and blurt it out. "Wait! I\'ve sucked you off without a condom before! Don\'t you remember? You didn\'t get an STD since then, so you know I\'m clean!"');
      scene.text('He squints at you trying to trigger his memory as you wait in anxiety.');
      scene.text('"Ohh… I thought you seemed familiar to me."');
      scene.text('"Right!" you say breathlessly. "So that means you\'ll take me, right?"');
      scene.text('"Well, you were pretty good last time. Hop in the truck and I\'ll get my dick out and we can trade favors again."');
    } else {
      scene.text('"Wait, please! Sir, you have to understand… I normally never do this! I\'m clean, I swear!" you beg him. "Please, I really need this lift!"');
      scene.text('The driver has another close look at you and sighs: "Damn you… you\'re too cute, how could I say no? Fine, get in the truck before I change my mind."');
    }
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: gt 'furisex', 100
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if ((((s as any).furibj ?? 0) / 10) >= ((s as any).furi_driver ?? 0)) {
        scene.text('As you start to walk over he glances up and grins at you.');
        if (((s as any).furibj ?? 0) < 50) {
          scene.text('"Well hello there little missy," he says with a smirk as he blows out a waft of cigarette smoke from his nose. "I remember you. Really enjoyed what you did for me last time I saw you. I\'d be willing to give you another lift if you\'re willing to do it again. So what do you say, need another ride?"');
        } else {
          if (((s as any).furibj ?? 0) < 100) {
            scene.text('"Oh, it\'s you again," he says with a smirk as he blows out a waft of cigarette smoke from his nose. "Need another ride?" he asks, adjusting his trousers suggestively.');
          } else {
            if (((s as any).furibj ?? 0) < 150) {
              scene.text('"Oh, it\'s road head girl," he says as he blows out a waft of cigarette smoke from his nose. "Need another ride?"');
              if (((s as any).furi ?? 0)?.['road_head_girl'] === 0) {
                ((s as any).furi ?? {})['road_head_girl'] = 1;
                scene.text('"Road head girl?" you say in confusion.');
                scene.text('"Yeah, it\'s what we call you out here."');
                scene.text('"We?"');
                scene.text('He laughs loudly. "Yeah, we! Haven\'t you realized? You must\'ve sucked off at least half the drivers out here! Those of us who have driven you before are always looking forward to the next time and the ones that haven\'t are praying every day for the chance to pick you up!"');
                scene.text('You frown. You\'re not sure if you like the fact that you\'re starting to become famous among truckers for this. Or the fact that you\'re nickname is "road head girl."');
                scene.text('"So did you want a ride today or what?"');
              }
            } else {
              if (((s as any).furibj ?? 0) < 200) {
                scene.text('"Lookie lookie! It\'s road head girl," he exclaims as he blows out a waft of cigarette smoke from his nose. "Was wondering if I might see you today. Need another ride?"');
              } else {
                scene.text('"Well hello again road head girl! Need another ride? The boys and I were wondering who was going to get you today."');
                if (((s as any).furibj ?? 0) === 200) {
                  scene.text('You recognize him almost immediately. You\'ve sucked him off for a ride before. Maybe several rides. Actually, you know that it\'s almost certainly a double digit number of times. Now that you think about it, you\'ve been doing this so much that you can\'t remember the last time you blew someone you didn\'t know for a ride on this road. You knew that you had been making the rounds and that a lot of truckers knew you by reputation, but is it possible you\'ve managed to suck off every driver in the area???');
                }
              }
            }
          }
        }
        qspCall(s, 'willpower', 'bj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/highway/furi.jpg');
    scene.text('"Uhh, sorry, not today. I was just passing by for… something…"');
    scene.text('"Oh." He seems more than a little disappointed and leans back on his truck, flicking away his burnt out cigarette and pulling out another.');
    scene.text('"Well," he says as he sparks the new one. "If you ever need a ride, just let me know."');
    scene.text('Nodding awkwardly, you retreat away from him and head back to the road.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['furi', ''] },
    ]);
  } },
          ]);
        }
        if (((s as any).furibj ?? 0) < 50) {
          scene.actions([
            { label: 'Nod meekly', handler: (st: GameState) => {
    scene.img('images/locations/highway/furi.jpg');
    scene.text('You nod meekly and his grin widens. Without saying anything, you step up to the passenger side and he flicks away his cigarette to climb into the driver\'s seat.');
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).furibj ?? 0) < 100) {
            scene.actions([
              { label: 'Another blowjob today?', handler: (st: GameState) => {
    scene.img('images/locations/highway/furi.jpg');
    scene.text('"Yup!" you say smiling and matter-of-fact-ly. "Care for another blowjob today?"');
    scene.text('He flicks his cigarette away and climbs into the driver\'s seat, you following into the passenger\'s.');
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Grin back', handler: (st: GameState) => {
    scene.img('images/pc/reactions/motion_hj.mp4');
    scene.text('"Yeah I do," you grin. "Is there anything I can do to make it up to you? Anything I can… help with?" you ask, miming an inappropriate motion.');
    scene.text('"There sure is. But with your mouth, not your hand," he says, climbing into the driver\'s seat.');
    scene.text('"Of course!" you smile, pulling yourself into the passenger\'s seat beside him. "Why would I use anything else?"');
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
            ]);
          }
        }
      } else {
        if (((s as any).furibj ?? 0) < 50) {
          scene.text('"I could… But that depends on how you\'re going to return the favor. Actually, wait a minute, you don\'t happen to be that girl who shows up by the road and sucks drivers off for a lift do you? We get a lot of girls who do that but not so many repeat customers and someone said she looked like you."');
          scene.actions([
            { label: 'Uhh…', handler: (st: GameState) => {
    scene.text('"Uhh…"');
    scene.text('The driver grins at you. "I guess that\'s a yes. So, are you still operating on that kind of payment basis?" he asks, opening up the passenger door and looking at you expectantly.');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
            { label: 'That\'s me!', handler: (st: GameState) => {
    scene.text('"That\'s me!" you say cheerfully.');
    scene.text('He grins. "I hoped it was you. I heard rumors but I\'ve always wanted to try you for myself."');
    scene.text('He opens up the passenger door and starts to make his way around to the driver\'s side.');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).furibj ?? 0) < 100) {
            scene.text('He continues to look at you for a moment squinting his eyes in semi-recognition.');
            scene.text('"Hmmm… Are you that girl who\'s been trading truckers blowjobs for lifts to and from the city?"');
            scene.actions([
              { label: 'Uhh…', handler: (st: GameState) => {
    scene.text('"Uhh…"');
    scene.text('The driver grins at you. "I guess that\'s a yes. So, are you still operating on that kind of payment basis?" he asks, opening up the passenger door and looking at you expectantly.');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
              { label: 'That\'s me!', handler: (st: GameState) => {
    scene.text('"That\'s me!" you say cheerfully.');
    scene.text('He grins. "I hoped it was you. I heard rumors but I\'ve always wanted to try you for myself."');
    scene.text('He opens up the passenger door and starts to make his way around to the driver\'s side.');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).furibj ?? 0) < 150) {
              scene.text('He continues to look at you for a moment longer before saying, "Maybe. Are you road head girl?"');
              if (((s as any).furibj ?? 0) === 100) {
                scene.text('"Road head girl?" you say in confusion.');
                scene.text('"Yeah. Someone who\'s always asking for lifts too and from the city and trades blowjobs for the ride. And she\'s supposed to look a lot like you…"');
                scene.text('"Do that many people really know me?"');
                scene.text('He grins widely at you. "Yeah. Truckers tend to talk a lot, part of the job. Based on what I hear you must\'ve sucked off at least half the drivers out here. Apparently not including me, though I\'d love to add to your scoreboard."');
                scene.text('You frown. You\'re not sure if you like the fact that you\'re starting to become famous among truckers for this. Or the fact that you\'re nickname is "road head girl."');
                scene.text('"So, planning on living up to your name today?" He opens up the passenger door for you and waits expectantly.');
                qspCall(s, 'willpower', 'bj', 'resist');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
                  ]);
                }
                scene.actions([
                  { label: 'Get into the truck', goto: ['furisex', '', '100'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Uhh…', handler: (st: GameState) => {
    scene.img('images/locations/highway/furi.jpg');
    scene.text('"Uhh…"');
    scene.text('The driver grins at you some more. "I guess that\'s a yes. So, road head for a ride. Is that a deal then?"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
                  { label: 'That\'s me!', handler: (st: GameState) => {
    scene.img('images/locations/highway/furi.jpg');
    scene.text('"That\'s me!" you say cheerfully.');
    scene.text('He smiles expectantly. "I was wondering when I\'d get my turn with you." He opens up the passenger door and waits beside it. "So, are you gonna get in?"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Get into the truck', goto: ['furisex', '', '100'] },
    ]);
  } },
                ]);
              }
            } else {
              scene.text('"You\'re road head girl right? I recognize you by the description of the other guys."');
              scene.text('"Willing to do the same for me as you did for them? Blowjob for a lift?" He opens up the passenger door for you and waits expectantly.');
              qspCall(s, 'willpower', 'bj', 'resist');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['furi', ''] },
                ]);
              }
              scene.actions([
                { label: 'Get into the truck', goto: ['furisex', '', '100'] },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const furi: LocationDef = {
  name: 'furi',
  title: 'A paved area next to the main road between St. Petersburg an',
  region: 'other',
  description: ['A paved area next to the main road between St. Petersburg and Pavlovsk, which functions as a truck stop. There are a few lorries here, but you only see one driver. He\'s leaning against his truck, smoking a cigarette.'],
  enter: enter,
};
