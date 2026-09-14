import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAftermath(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A25'] >= 80) {
  }
  if (((s as any).npc_rel ?? 0)?.['A14'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A14', 90);
  }
  if (((s as any).npc_rel ?? 0)?.['A15'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A15', 90);
  }
  if (((s as any).npc_rel ?? 0)?.['A240'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A240', 90);
  }
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (45);
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'sweat', 'add', 5);
  (s as any).minut = ((s as any).minut ?? 0) + 270;
  (s as any).NikoAftermath = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  // TODO-QSP: dynamic text: You slowly open your eyes and see <<$VK_VikName>> playfully shaking your shoulde...
  scene.text(`You slowly open your eyes and see ${((s as any).VK_VikName || '')} playfully shaking your shoulder. "Hey there, sleepy head! Did you sleep well?"`);
  // TODO-QSP: dynamic text: You give <<$VK_VikName>> a warm smile. "I guess but… Where am I?"
  scene.text(`You give ${((s as any).VK_VikName || '')} a warm smile. "I guess but… Where am I?"`);
  scene.text('"After what happened at school, we couldn\'t just leave you there, so we brought you back to our place."');
  scene.text('You scratch your head. "We?"');
  // TODO-QSP: dynamic text: <<$VK_VikName>> smiles and turns to her left.
  scene.text(`${((s as any).VK_VikName || '')} smiles and turns to her left.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Look', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    scene.text('You turn to see Katja and Natalia sitting next to the bed. "I\'m so glad that you\'re okay! I was worried when you didn\'t wake up!" Katja says in a concerned voice.');
    scene.text('Natalia nods in agreement. "I cleaned your hair for you. It was… messy."');
    // TODO-QSP: dynamic text: You look around the room, then back at <<$VK_VikName>>. "Thank you all for helpi...
    scene.text(`You look around the room, then back at ${((s as any).VK_VikName || '')}. "Thank you all for helping me. I can't believe what happened in school wasn't a dream! I want it to be a dream, so bad…"`);
    scene.text('You can feel tears forming under your eyes as Katja hugs you. "I don\'t know what caused it, but we\'ll find a way to make things better. You didn\'t deserve what they did to you."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> places her hand on your shoulder. "There there, you'll be alrigh...
    scene.text(`${((s as any).VK_VikName || '')} places her hand on your shoulder. "There there, you'll be alright."`);
    // TODO-QSP: dynamic text: Natalia gives you a very supportive smile as she lightly squeezes your hand as K...
    scene.text(`Natalia gives you a very supportive smile as she lightly squeezes your hand as Katja sighs. "What's going at school these days? First Sonia and now ${((s as any).pcs_nickname || '')}. These boys are animals."`);
    // TODO-QSP: dynamic text: "What exactly happened, <<$pcs_nickname>>?" Natalia asks as she places her hand ...
    scene.text(`"What exactly happened, ${((s as any).pcs_nickname || '')}?" Natalia asks as she places her hand on your leg.`);
    scene.actions([
      { label: 'Tell them your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('You take a deep breath. "It all started when I met Nikolai. He…"');
    scene.text('Katja cuts you off. "Wait, do you mean that gopnik punk Niko? You should never have trusted that loser!"');
    scene.text('Natalia nods. "She\'s right. That boy is bad news. He\'s always lying to everyone. Even the other boys know not to trust him."');
    scene.actions([
      { label: 'Look at Katja', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Natalia.jpg');
    scene.text('You look up, surprised by their opinions of Niko. "But he treats me with such love and compassion. He always calls me his princess!"');
    // TODO-QSP: dynamic text: Katja places her arms around your neck. "Listen <<$pcs_nickname>>, you can go ou...
    scene.text(`Katja places her arms around your neck. "Listen ${((s as any).pcs_nickname || '')}, you can go out with whoever you want. I'm just concerned that he'll use you."`);
    scene.text('You lay back as you consider your options. "So how did you end up… naked at school?" Natalia asks.');
    scene.actions([
      { label: 'Return to your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('"Niko is always teaching me how to be more confident and daring. He tells me to do things that are very scary at first, but end up being very exciting. I don\'t know why it excites me so much, but I feel so alive when I\'m with Niko. He always makes me feel safe and he tells me…"');
    // TODO-QSP: dynamic text: Katja cuts you off again. "Makes you feel safe? Like how he kept you safe today?...
    scene.text(`Katja cuts you off again. "Makes you feel safe? Like how he kept you safe today?" You lower your head and remain silent for a few seconds before Katja continues. "I'm sorry ${((s as any).pcs_nickname || '')}, I just get so angry when I see good people getting used by assholes like him. Continue your story, please."`);
    scene.actions([
      { label: 'Continue your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/vicky.jpg');
    scene.text('You take a second before continuing. "He helps me find my confidence and break out of my safety bubble. I\'m always trying something new and facing my fears. I… I just don\'t know what to do without him. Niko always guides me in bettering myself and feeling so alive."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> places her hand on your shoulder. "If you really care for him, t...
    scene.text(`${((s as any).VK_VikName || '')} places her hand on your shoulder. "If you really care for him, then maybe you can work things out with him…"`);
    // TODO-QSP: dynamic text: Katja immediately cuts <<$VK_VikName>> off. "No! You need to dump that freak! Do...
    scene.text(`Katja immediately cuts ${((s as any).VK_VikName || '')} off. "No! You need to dump that freak! Do you really want to stay with a boy who stripped you down and let those gopnik punks… RAPE YOU!!!?"`);
    // TODO-QSP: dynamic text: Natalia tries to calm her. "We might not like him, but it's <<$pcs_nickname>>'s ...
    scene.text(`Natalia tries to calm her. "We might not like him, but it's ${((s as any).pcs_nickname || '')}'s decision and we can't control her. We can only give her our advice and hope that she makes the right decision… on her own."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
    scene.text('You lightly grip your hair as you respond. "I just… need to think about this for a while."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> stands up. "Well, you take all the time you need. If you need an...
    scene.text(`${((s as any).VK_VikName || '')} stands up. "Well, you take all the time you need. If you need anything, then don't be afraid to holler," she says in a cheerful tone before walking toward the door and motioning for the other girls to follow.`);
    scene.actions([
      { label: 'Watch <<$VK_VikName>> leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    scene.text('Katja stands up. "I\'m sorry that I\'ve been a bit stern, I just don\'t want to see what happened today repeat itself. When you finish resting, come see me okay? We can have a nice chat together. Don\'t worry, I won\'t lecture you again."');
    scene.text('"Come see me too, I\'d like to speak with you. Now get some rest," Natalia adds and the girls leave the room as you lay down and close your eyes…');
    scene.actions([
      { label: 'Rest', goto: ['NikoDreams', 'woods'] },
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

function enterAftermath2(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
  qspCall(s, 'sweat', 'add', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
  // TODO-QSP: dynamic text: You quickly jump up and see Katja with a concerned look on her face. "It's okay ...
  scene.text(`You quickly jump up and see Katja with a concerned look on her face. "It's okay ${((s as any).pcs_nickname || '')}. You were just having a bad dream."`);
  scene.text('You look around the room, trying to get your bearings before turning to Katja. "Thank you Katja, I hope these nightmare don\'t become a habit."');
  scene.text('Katja rubs your forehead. "Everything will be alright. You don\'t need to worry about anything right now. You\'re among friends. Remember that." You give her a smile and an approving nod and she returns the smile. "Now that\'s what I like to see, a fresh smile."');
  scene.text('You both giggle before Katja speaks again. "Vicky has something planned that she thinks we will all enjoy. It\'s hard to imagine what it is but who knows? It might be fun. Anyway, you should get yourself washed up. A nice relaxing bath can work wonders for the body and mind. You should also see Vicky when you have the chance. She\'ll be pleased to see you up."');
  if (((s as any).NataliaPavlovaQW ?? 0) >= 10) {
    scene.text('I know that Natalia will be excited to see that you\'re okay too. She was panicking over you. The two of you must be close."');
    scene.text('You nod. "I\'ll go see them. Thank you for your help." Katja smiles. "Don\'t mention it. I couldn\'t just leave you there." You give Katja an approving nod as you climb out of bed.');
  } else {
    scene.text('I\'m sure Natalia will be pleased to see that you\'re okay too. She seemed very worried about you. She obviously has a kind heart."');
    scene.text('You nod. "I\'ll go see them. Thank you for your help." Katja smiles. "Don\'t mention it. I couldn\'t just leave you there." You give Katja an approving nod as you climb out of bed.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/corridor.jpg');
  scene.text('Large and bright, this \'hallway\' stretches for quite a bit. You\'ve never seen anything like this before! There\'s a mirror covering half of one of the walls and you see the kitchen not too far away.');
  scene.text('There are stairs leading to the second floor. You can also see two doors with the signs \'Toilet\' and \'Bathroom\' attached to them.');
  if (((s as any).VKAftermathEvent ?? 0) === 2) {
    // TODO-QSP: dynamic text: You see <a href="exec:gt 'NikoMeyHome', 'vickychat3'"><<$VK_VikName>></a> leanin...
    scene.text(`You see <a href="exec:gt 'NikoMeyHome', 'vickychat3'">${((s as any).VK_VikName || '')}</a> leaning against the wall, playing a game on her phone.`);
  }
  if (((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKKatjaChat ?? 0) < 2  ||  ((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKNatChat ?? 0) < 2) {
    scene.actions([
      { label: 'Kitchen', goto: ['NikoMeyHome', 'vickychat3'] },
    ]);
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKKatjaChat ?? 0) === 2  &&  ((s as any).VKNatChat ?? 0) === 2) {
      scene.actions([
        { label: 'Kitchen', goto: ['NikoMeyHome', 'meal_time'] },
      ]);
    } else {
      scene.actions([
        { label: 'Kitchen', goto: ['NikoMeyHome', 'kitchen'] },
      ]);
    }
  }
  if (((s as any).VKMeyLock ?? 0) !== 2) {
    scene.actions([
      { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom_locked'] },
    ]);
  } else {
    if (((s as any).VKMeyLock ?? 0) === 2  &&  (!((s as any).VKHornet ?? 0))) {
      scene.actions([
        { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom_hornet'] },
      ]);
    } else {
      if (((s as any).VKVickyChat ?? 0) === 1) {
        scene.actions([
          { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom'] },
        ]);
      } else {
        if (((s as any).VKAftermathEvent ?? 0) > 0) {
          scene.actions([
            { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom'] },
          ]);
        }
      }
    }
  }
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKVickyChat ?? 0) < 4  ||  ((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKKatjaChat ?? 0) < 3  ||  ((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) < 3) {
    scene.actions([
      { label: 'Leave and go home', goto: ['NikoMeyHome', 'leaving'] },
    ]);
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 3) {
      scene.actions([
        { label: 'Leave and go home', goto: ['NikoMeyHome', 'vicky_goodbye'] },
      ]);
    }
  }
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
    scene.text('<font color=#ffae00>You can hear some loud music coming from Vicky\'s room.</font>');
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 10;
      (s as any).music_loop = 1;
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s room', goto: ['NikoMeyHome', 'katja_room'] },
    { label: 'Vicky\'s room', goto: ['NikoMeyHome', 'vicky_room'] },
    { label: 'Lounge', goto: ['NikoMeyHome', 'lounge'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 5;
      (s as any).music_loop = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/kitchen.jpg');
  scene.text('The sparkling clean kitchen is huge and luxurious, decorated in a minimalist high-tech style. An oval dining room table stands in the middle of the room while the appliances are all hidden.');
  if (((s as any).VKAftermathEvent ?? 0) < 2  &&  ((s as any).NikoAftermath ?? 0) === 1) {
    // TODO-QSP: dynamic text: <a href="exec:gt 'NikoMeyHome', 'vickychat'"><<$VK_VikName>></a> is standing by ...
    scene.text(`<a href="exec:gt 'NikoMeyHome', 'vickychat'">${((s as any).VK_VikName || '')}</a> is standing by the stove playing on her phone.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterLounge(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 5;
      (s as any).music_loop = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Lounge</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/hall.jpg');
  scene.text('A spacious room with a sofa and armchairs. A large TV hangs on the wall next to the bookcase and on the opposite side is a fireplace. There is access to a bright garden, overgrown with grapes.');
  if ((!((s as any).VKNatChat ?? 0))) {
    scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'nataliachat\'">Natalia</a> leaning against the fireplace. She appears lost in thought.');
  } else {
    if (((s as any).VKNatChat ?? 0) === 1  &&  (!((s as any).VKAftermathEvent ?? 0))) {
      scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'nataliachat\'">Natalia</a> leaning against the fireplace. She appears lost in thought.');
    } else {
      if (((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKNatChat ?? 0) === 1  ||  ((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) === 1) {
        scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'nataliachat2\'">Natalia</a> sitting on a chair near the window, staring out at the garden.');
      } else {
        if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) < 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKKatjaChat ?? 0) === 3) {
          scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'Katja and Natalia\'">Katja and Natalia</a> sitting on the couch chatting with each other.');
        } else {
          if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) === 4  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKKatjaChat ?? 0) === 3) {
            scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'Katja and Natalia 2\'">Katja and Natalia</a> sitting on the couch chatting with each other.');
          } else {
            if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) < 3  &&  ((s as any).NikoAftermath ?? 0) === 1) {
              scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'nataliachat3\'">Natalia</a> leaning against the fireplace as she runs her fingers through her hair.');
            } else {
              if (((s as any).VKNatChat ?? 0) === 4  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKKatjaChat ?? 0) < 3) {
                scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'nataliachat4\'">Natalia</a> leaning against the fireplace. She looks at you with a warm smile.');
              } else {
                if (((s as any).VKNatChat ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKKatjaChat ?? 0) === 3) {
                  scene.text('You see <a href="exec:gt \'NikoMeyHome\', \'katjachat4\'">Katja</a> sitting on the couch watching TV.');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterKatjaRoom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 5;
      (s as any).music_loop = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Katja\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/katya_room.jpg');
  scene.text('Katja\'s room feels like someone is living there temporarily and will soon move out. The stuff in the room is in perfect order, depicting the feeling of a "non-residential premise."');
  scene.text('There are numerous flowers in pots on the windowsill, there are pots hanging on the walls and there are even plants in pots on the floor, giving the room a greenhouse feeling.');
  scene.text('There is a computer desk in one of the corners, opposite the bed. In another corner is a hidden wardrobe. A well hidden bookshelf can be seen, but it is hard to spot because of the wildly overgrown plants.');
  if (((s as any).VKKatjaChat ?? 0) === 0  &&  ((s as any).NikoAftermath ?? 0) === 1) {
    scene.text('<a href="exec:gt \'NikoMeyHome\', \'katjachat\'">Katja</a> is standing in front of a mirror, checking herself out from different angles.');
  } else {
    if (((s as any).VKAftermathEvent ?? 0) < 2  &&  ((s as any).VKKatjaChat ?? 0) === 1  &&  ((s as any).NikoAftermath ?? 0) === 1) {
      scene.text('<a href="exec:gt \'NikoMeyHome\', \'katjachat\'">Katja</a> is standing in front of a mirror, tweezing her eyebrows while humming a soothing tune.');
    } else {
      if (((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKKatjaChat ?? 0) === 1  &&  ((s as any).NikoAftermath ?? 0) === 1) {
        scene.text('<a href="exec:gt \'NikoMeyHome\', \'katjachat2\'">Katja</a> is cleaning up her shoe closet.');
      } else {
        if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKKatjaChat ?? 0) === 2  &&  ((s as any).NikoAftermath ?? 0) === 1) {
          scene.text('<a href="exec:gt \'NikoMeyHome\', \'katjachat3\'">Katja</a> is lying in bed humming a sweet melody.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterVickyRoom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VKVickyChat ?? 0) === 4) {
    (s as any).music_loop = 0;
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        (s as any).volume = 20;
        (s as any).music_loop = 1;
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vicky\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_room.jpg');
  // TODO-QSP: dynamic text: <<$VK_VikName>>'s room is always a mess. It's clean, but everything is scattered...
  scene.text(`${((s as any).VK_VikName || '')}'s room is always a mess. It's clean, but everything is scattered all over the place. There are soft toys laying around in enormous quantities and all the walls are plastered with posters of pop stars and film actors.`);
  scene.text('There\'s a laptop on the table by the window, which accidentally brings a sense of orderliness. The room\'s centerpiece is the enormous bed, while a wardrobe sits next to it and there\'s a lone chair somewhere in the corner hidden under all the stuff.');
  if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
    // TODO-QSP: dynamic text: <a href="exec:gt 'NikoMeyHome', 'vickychat4'"><<$VK_VikName>></a> is dancing to ...
    scene.text(`<a href="exec:gt 'NikoMeyHome', 'vickychat4'">${((s as any).VK_VikName || '')}</a> is dancing to some music playing on her radio.`);
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 4) {
      // TODO-QSP: dynamic text: <a href="exec:gt 'NikoMeyHome', 'vickychat5'"><<$VK_VikName>></a> is lying face ...
      scene.text(`<a href="exec:gt 'NikoMeyHome', 'vickychat5'">${((s as any).VK_VikName || '')}</a> is lying face down in bed. She appears to be asleep.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterBathroomLocked(s: GameState, scene: SceneBuilder): void {
  (s as any).VKMeyLock = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/door.jpg');
  // TODO-QSP: 'You try to enter the bathroom, but the door is locked. ' + $OpenInnerThought + 'Hmm it''s locked. K...
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterBathroomHornet(s: GameState, scene: SceneBuilder): void {
  (s as any).VKHornet = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/Wasp.jpg');
  // TODO-QSP: dynamic text: As soon as you open the door, a huge wasp darts past you and flies into the kitc...
  scene.text(`As soon as you open the door, a huge wasp darts past you and flies into the kitchen. A few seconds later, you hear ${((s as any).VK_VikName || '')} screaming. "Ahh a hornet. DIE HORNET!!!" She then comes sprinting out of the kitchen with a rolling pin and starts swatting at the fleeing hornet. You can't help but giggle as you watch the whole ordeal. You shake your head before walking into the bathroom.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['NikoMeyHome', 'bathroom'] },
  ]);
  scene.build();
}

function enterMealTime(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).VKAftermathEvent = 3;
  if (((s as any).VKVickyChat ?? 0) < 3) {
    (s as any).VKVickyChat = 3;
  }
  if (((s as any).VKKatjaChat ?? 0) < 2) {
    (s as any).VKVickyChat = 2;
  }
  if (((s as any).VKNatChat ?? 0) < 2) {
    (s as any).VKVickyChat = 2;
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (25);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).water = ((s as any).water ?? 0) + (40);
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  (s as any).cumspclnt = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  // TODO-QSP: dynamic text: You walk into the kitchen as Katja and Natalia enter. You all take a seat at the...
  scene.text(`You walk into the kitchen as Katja and Natalia enter. You all take a seat at the table just as ${((s as any).VK_VikName || '')} approaches with a big chocolate cake. "Wow… that's a big cake. Are you sure we can even eat all that?" Katja comments.`);
  // TODO-QSP: dynamic text: <<$VK_VikName>> smiles. "Well whatever we don't eat, we can always pop in the fr...
  scene.text(`${((s as any).VK_VikName || '')} smiles. "Well whatever we don't eat, we can always pop in the fridge for later." She grabs a knife and starts cutting the cake into slices, placing them on plates and handing them out to each of you.`);
  scene.text('Natalia takes a big bite. "Thank you Vicky. This cake is so yummy!"');
  // TODO-QSP: dynamic text: <<$VK_VikName>> nods with a warm smile on her face. "I'm glad that you like them...
  scene.text(`${((s as any).VK_VikName || '')} nods with a warm smile on her face. "I'm glad that you like them. It took me freaking ages to get the batter right. Why is everyone else just staring? Eat up!" She flutters her arms and you and the girls laugh as you all spend the next few minutes eating cake and chatting about various topics.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish eating', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    // TODO-QSP: dynamic text: After you all finish eating as much cake as you can, Katja stands up. "This was ...
    scene.text(`After you all finish eating as much cake as you can, Katja stands up. "This was great, wasn't it? I know that I had a great time, but we should probably get ${((s as any).pcs_nickname || '')} and Nat back home before their parents start worrying. I need to quickly visit the ladies room. I won't be long." She walks out of the room as she waves at everyone.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/smile1.jpg');
    // TODO-QSP: dynamic text: Natalia gets up next. "We should get going, <<$pcs_nickname>>. Their mom should ...
    scene.text(`Natalia gets up next. "We should get going, ${((s as any).pcs_nickname || '')}. Their mom should be coming home soon and we'd only disturb her."`);
    // TODO-QSP: dynamic text: <<$VK_VikName>> nods as she responds. "I'll be waiting by the front door when yo...
    scene.text(`${((s as any).VK_VikName || '')} nods as she responds. "I'll be waiting by the front door when you're ready to go. Before you go, can you do me a favor and make sure that Katja doesn't use all my hair care products. I told her she can use some, but she just can't keep her hands off my things!"`);
    // TODO-QSP: dynamic text: "When you have a moment, please see me in the lounge. I have something I would l...
    scene.text(`"When you have a moment, please see me in the lounge. I have something I would like to ask you." Natalia adds and you nod at Natalia as she and ${((s as any).VK_VikName || '')} walk out of the kitchen.`);
    scene.actions([
      { label: 'Stand up', goto: ['NikoMeyHome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVickychat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  if (((s as any).VKVickyChat ?? 0) === 0  &&  (!((s as any).VKMeyLock ?? 0))) {
    // TODO-QSP: dynamic text: As you approach <<$VK_VikName>>, she looks up from her phone and flashes you a w...
    scene.text(`As you approach ${((s as any).VK_VikName || '')}, she looks up from her phone and flashes you a warm smile. "Hey ${((s as any).pcs_nickname || '')}, you're up! How have you been holding up? Everything has been so grim lately."`);
    // TODO-QSP: dynamic text: "Thank you <<$VK_VikName>>. I'm still really sore and kind of worried about my f...
    scene.text(`"Thank you ${((s as any).VK_VikName || '')}. I'm still really sore and kind of worried about my future. Do you think that there's any chance that I could undo what happened yesterday?"`);
    // TODO-QSP: dynamic text: <<$VK_VikName>> lightly places her hand on your arm. "Don't worry about that. Ka...
    scene.text(`${((s as any).VK_VikName || '')} lightly places her hand on your arm. "Don't worry about that. Kat and I are looking into it. Don't worry." She then playfully shakes you side to side while smiling.`);
    scene.text('You nod. "You\'re right, I should try to relax. I just don\'t know why Niko just… Left me… He must have gotten held up with something important and couldn\'t return in time to protect me. He might be looking for me right now."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> firmly grabs onto your shoulders. "Listen <<$pcs_nickname>>. I k...
    scene.text(`${((s as any).VK_VikName || '')} firmly grabs onto your shoulders. "Listen ${((s as any).pcs_nickname || '')}. I know that you must be feeling really frazzled after your ordeal, but you need to try and relax," she says in a cute, but stern voice.`);
    scene.text('You take a deep breath. "I just… Need help… I need Niko to save me, like he always does…" You can feel tears streaming down your cheeks.');
    scene.text('"Do you really care for Niko? Even after what happened?" she asks. You downcast your eyes as you silently nod.');
    scene.text('"Then maybe you and him could work things out. There is always hope."');
    scene.text('You look up at her. "So do you think that I should stay with Niko? Kat didn\'t seem to believe that."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> smiles. "There's nowhere to go but up from here, so if you feel ...
    scene.text(`${((s as any).VK_VikName || '')} smiles. "There's nowhere to go but up from here, so if you feel happy with Niko then stay with Niko. Seems simple enough."`);
    scene.text('You nod. "Well, I have a lot of thinking to do."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> gives you a playful smile. "Don't spend all day thinking or you'...
    scene.text(`${((s as any).VK_VikName || '')} gives you a playful smile. "Don't spend all day thinking or you'll have no time to start doing… And don't be so damn formal. You can call me Vicky!" She then returns to playing on her phone.`);
  } else {
    if ((!((s as any).VKVickyChat ?? 0))) {
      // TODO-QSP: dynamic text: As you approach <<$VK_VikName>>, she looks up from her phone and flashes you a w...
      scene.text(`As you approach ${((s as any).VK_VikName || '')}, she looks up from her phone and flashes you a warm smile. "Hey ${((s as any).pcs_nickname || '')}, you're up! How have you been holding up? Everything has been so grim lately."`);
      // TODO-QSP: dynamic text: "Thank you <<$VK_VikName>>. I'm still really sore and kind of worried about my f...
      scene.text(`"Thank you ${((s as any).VK_VikName || '')}. I'm still really sore and kind of worried about my future. Do you think that there's any chance that I could undo what happened yesterday?"`);
      // TODO-QSP: dynamic text: <<$VK_VikName>> lightly places her hand on your arm. "Don't worry about that. Ka...
      scene.text(`${((s as any).VK_VikName || '')} lightly places her hand on your arm. "Don't worry about that. Kat and I will handle that. Don't worry." She then playfully shakes you side to side while smiling.`);
      scene.text('You nod. "You\'re right, I should try to relax. I just don\'t know why Niko just… Left me… He must have gotten held up with something important and couldn\'t return in time to protect me. He might be looking for me right now."');
      // TODO-QSP: dynamic text: <<$VK_VikName>> firmly grabs onto your shoulders. "Listen <<$pcs_nickname>>, I k...
      scene.text(`${((s as any).VK_VikName || '')} firmly grabs onto your shoulders. "Listen ${((s as any).pcs_nickname || '')}, I know that you must be feeling really frazzled after your ordeal, but you need to try and relax," she says in a cute, but stern voice.`);
      scene.text('You take a deep breath. "I just… Need help… I need Niko to save me, like he always does…" You can feel tears streaming down your cheeks.');
      scene.text('"Do you really care for Niko? Even after what happened?" she asks. You downcast your eyes as you nod.');
      scene.text('"Then maybe you and him could work things out. There\'s always hope."');
      scene.text('You look up to her as you reply. "So do you think that I should stay with Niko? Kat didn\'t seem to believe that."');
      // TODO-QSP: dynamic text: <<$VK_VikName>> smiles. "There's nowhere to go but up from here, so if you feel ...
      scene.text(`${((s as any).VK_VikName || '')} smiles. "There's nowhere to go but up from here, so if you feel happy with Niko then stay with Niko. Seems simple enough."`);
      scene.text('You nod. "Well, I have a lot of thinking to do."');
      // TODO-QSP: dynamic text: <<$VK_VikName>> gives you a playful smile. "Don't spend all day thinking or you'...
      scene.text(`${((s as any).VK_VikName || '')} gives you a playful smile. "Don't spend all day thinking or you'll have no time to start doing." She then returns to playing on her phone.`);
    } else {
      // TODO-QSP: dynamic text: You walk up to <<$VK_VikName>> and she looks up to you. "Hey <<$pcs_nickname>>, ...
      scene.text(`You walk up to ${((s as any).VK_VikName || '')} and she looks up to you. "Hey ${((s as any).pcs_nickname || '')}, what's up? Have you checked on the other girls yet? They might have things to say and you can also jump into the bathroom for a quick bath before we all eat."`);
    }
  }
  if (((s as any).VKMeyLock ?? 0) === 1) {
    scene.actions([
      { label: 'Ask her for the key to the bathroom', handler: (st: GameState) => {
    if ((!((s as any).VKVickyChat ?? 0))) {
      (s as any).VKVickyChat = 1;
    }
    (s as any).VKMeyLock = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysurprised.jpg');
    // TODO-QSP: dynamic text: "Hey <<$VK_VikName>>, the bathroom's locked. Do you have the key for it?"
    scene.text(`"Hey ${((s as any).VK_VikName || '')}, the bathroom's locked. Do you have the key for it?"`);
    // TODO-QSP: dynamic text: <<$VK_VikName>> gives you a surprised look. "Who the hell locked it? Kaaaaattt… ...
    scene.text(`${((s as any).VK_VikName || '')} gives you a surprised look. "Who the hell locked it? Kaaaaattt… Where the hell is that spare key?" She turns to the nearby desk and recklessly fumbles through it, causing things to fall out as she continues searching. "It's gotta be around here somew… Wait!" She turns to the refrigerator and quickly grabs a vase on top of it. "There you are, you sneaky little snake." She tosses you the keys. "There you go. Have fun!" She then goes back to playing games on her phone.`);
    scene.actions([
      { label: 'Walk away', goto: ['NikoMeyHome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).VKVickyChat ?? 0) === 0  &&  (!((s as any).VKMeyLock ?? 0))) {
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    if ((!((s as any).VKVickyChat ?? 0))) {
      (s as any).VKVickyChat = 1;
    }
  }, goto: ['NikoMeyHome', 'kitchen'] },
    ]);
  } else {
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    if ((!((s as any).VKVickyChat ?? 0))) {
      (s as any).VKVickyChat = 1;
    }
  }, goto: ['NikoMeyHome', 'kitchen'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVickychat2(s: GameState, scene: SceneBuilder): void {
  (s as any).VKAftermathEvent = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickySmile2.jpg');
  // TODO-QSP: dynamic text: As you leave the bathroom, <<$VK_VikName>> walks out of the kitchen and flashes ...
  scene.text(`As you leave the bathroom, ${((s as any).VK_VikName || '')} walks out of the kitchen and flashes you a playful smile. "Hey ${((s as any).pcs_nickname || '')}! You look all cleaned up. I bet you're feeling right as rain now! I just finished baking us all something fun and sweet. You can get something to eat right now or help me fetch the girls. Your choice!"`);
  if (((s as any).VKKatjaBath ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$VK_VikName>> suddenly tilts her head and looks over your shoulder. "Kat, is t...
    scene.text(`${((s as any).VK_VikName || '')} suddenly tilts her head and looks over your shoulder. "Kat, is that you coming out of the bathroom that our good friend ${((s as any).pcs_nickname || '')} was just bathing herself in?"`);
    scene.text('Katja looks surprised and embarrassed. "Uhh, no… I wasn\'t doing anything…"');
    // TODO-QSP: dynamic text: <<$VK_VikName>> playfully laughs. "Not doing anything, huh? Then why were you tw...
    scene.text(`${((s as any).VK_VikName || '')} playfully laughs. "Not doing anything, huh? Then why were you two alone in there?"`);
    // TODO-QSP: dynamic text: Katja starts walking toward her room as <<$VK_VikName>> follows her. "Were you b...
    scene.text(`Katja starts walking toward her room as ${((s as any).VK_VikName || '')} follows her. "Were you both doing what I think you were? If so, then you've been a naughty girl Kat!"`);
    // TODO-QSP: dynamic text: Katja puts her hand in front of <<$VK_VikName>>'s face as <<$VK_VikName>> follow...
    scene.text(`Katja puts her hand in front of ${((s as any).VK_VikName || '')}'s face as ${((s as any).VK_VikName || '')} follows her to her room before Katja slams the door in her face. ${((s as any).VK_VikName || '')} giggles and leans against the wall while giving you an approving wink.`);
  } else {
    if (((s as any).VKKatBath ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$VK_VikName>> suddenly tilts her head and looks over your shoulder. "Kat, is t...
      scene.text(`${((s as any).VK_VikName || '')} suddenly tilts her head and looks over your shoulder. "Kat, is that you coming out of the bathroom that our good friend ${((s as any).pcs_nickname || '')} was just bathing herself in?"`);
      scene.text('Katja looks surprised and embarrassed. "Uhh, no… I was just, just checking on her is all!"');
      // TODO-QSP: dynamic text: <<$VK_VikName>> playfully laughs. "Checking on her, huh? What were you checking ...
      scene.text(`${((s as any).VK_VikName || '')} playfully laughs. "Checking on her, huh? What were you checking exactly?"`);
      // TODO-QSP: dynamic text: Katja starts walking toward her room as <<$VK_VikName>> follows her. "Were you b...
      scene.text(`Katja starts walking toward her room as ${((s as any).VK_VikName || '')} follows her. "Were you both doing what I think you were? If so, then you've been a naughty girl Kat!"`);
      // TODO-QSP: dynamic text: Katja ignores her as <<$VK_VikName>> follows her to her room before Katja slams ...
      scene.text(`Katja ignores her as ${((s as any).VK_VikName || '')} follows her to her room before Katja slams the door in her face. ${((s as any).VK_VikName || '')} giggles and leans against the wall while giving you an approving wink.`);
    } else {
      // TODO-QSP: dynamic text: <<$VK_VikName>> looks around. "Where on earth is that sister of mine? She better...
      scene.text(`${((s as any).VK_VikName || '')} looks around. "Where on earth is that sister of mine? She better not be touching my hair products again!" She walks towards Katja's room when Katja suddenly appears with one of her hair sprays. "Aha, caught you in the act!"`);
      // TODO-QSP: dynamic text: Katja quickly darts into her room as <<$VK_VikName>> follows, but Katja slams th...
      scene.text(`Katja quickly darts into her room as ${((s as any).VK_VikName || '')} follows, but Katja slams the door shut before ${((s as any).VK_VikName || '')} can reach it. ${((s as any).VK_VikName || '')} leans against wall and giggles. "Sisters… What can you do?"`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    if (((s as any).VKVickyChat ?? 0) === 1) {
      (s as any).VKVickyChat = 2;
    }
  }, goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterVickychat3(s: GameState, scene: SceneBuilder): void {
  (s as any).VKVickyChat = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/vicky.jpg');
  // TODO-QSP: dynamic text: You walk up to <<$VK_VikName>> and she looks up at you before putting her phone ...
  scene.text(`You walk up to ${((s as any).VK_VikName || '')} and she looks up at you before putting her phone away. "Hey ${((s as any).pcs_nickname || '')}. The cake is just about ready. Can you fetch the girls for me? Nat is in the lounge and Kat is in her room. Hmm, I just noticed that they have very similar nicknames, isn't that weird? Anyway go and get them and we can munch on some yum yums."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Fetch Natalia and Katja', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterVickychat4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  // TODO-QSP: dynamic text: You approach <<$VK_VikName>> as she's dancing. She turns and grabs you by the ha...
  scene.text(`You approach ${((s as any).VK_VikName || '')} as she's dancing. She turns and grabs you by the hand. "Don't just stand there! Join in and have some fun!" You start moving to the beat of the music, trying your best to stay in sync as ${((s as any).VK_VikName || '')} dances fast and loose, moving to her own beat. You continue dancing when ${((s as any).VK_VikName || '')} smiles at you.`);
  // TODO-QSP: dynamic text: "Life can be damn fun when you stop thinking about what everyone else wants and ...
  scene.text(`"Life can be damn fun when you stop thinking about what everyone else wants and focus on what you do. Everyone always wants to be normal, but being normal just leads to boring routines where you spend all of your time doing what you think others want you to do. Not enough people say "fuck that" and do what they want. Try not to be one of those people ${((s as any).pcs_nickname || '')}. Be what you want to be. Nothing else matters. Only you and whoever you decide to let in. Just be happy with what you want and who you are, okay?"`);
  // TODO-QSP: dynamic text: You nod your head and continue dancing as you ponder what <<$VK_VikName>> said. ...
  scene.text(`You nod your head and continue dancing as you ponder what ${((s as any).VK_VikName || '')} said. After a few more minutes of dancing, ${((s as any).VK_VikName || '')} starts breathing heavy as she grows tired. She then spins a few times before falling face first into her bed and not getting up. You walk over to her radio and turn it off so that she can get some sleep.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKVickyChat = 4;
  }, goto: ['NikoMeyHome', 'vicky_room'] },
  ]);
  scene.build();
}

function enterVickychat5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  scene.text('You approach Vicky, but she seems to be fast asleep. Not wanting to disturb her, you carefully walk out of the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterVickyReminder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/vicky.jpg');
  // TODO-QSP: dynamic text: As you approach the bathroom door, <<$VK_VikName>> turns to you. "Have you spoke...
  scene.text(`As you approach the bathroom door, ${((s as any).VK_VikName || '')} turns to you. "Have you spoken to Natalia and Kat yet? They were both worried about you and would love to see you up and about."`);
  scene.text('"Not yet, but I\'ll speak to them right now. I wouldn\'t want them to worry about me." You turn around and walk away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterLeaving(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('' + qspUntranslated(s, "func('face_image')>", { location: "NikoMeyHome" }) + '');
  // TODO-QSP: 'You approach the door. ' + $OpenInnerThought + 'I haven''t spoken to all the girls yet. Should I le...
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['NikoMeyHome', 'hallway'] },
    { label: 'Leave Meynold home', handler: (st: GameState) => {
    (st as any).VKMeyLeft = 1;
  }, goto: ['NikoMeyHome', 'vicky_goodbye'] },
  ]);
  scene.build();
}

function enterVickyGoodbye(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
    if (!(s as any).npc_grupTipe) (s as any).npc_grupTipe = {}; (s as any).npc_grupTipe['A189'] = 600;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vicky2.jpg');
  // TODO-QSP: dynamic text: You open the front door and walk out as <<$VK_VikName>> quickly comes running up...
  scene.text(`You open the front door and walk out as ${((s as any).VK_VikName || '')} quickly comes running up to you. "I hope you had a great time here. Remember that you always have friends here, okay? You don't need to be alone."`);
  scene.text('You give her an approving nod. "Thank you for everything. I owe you all so much."');
  // TODO-QSP: dynamic text: "Bah, you don't owe us anything." She then playfully whispers in your ear. "But ...
  scene.text(`"Bah, you don't owe us anything." She then playfully whispers in your ear. "But I won't argue if you wanted to get me a new phone." She then sticks out her tongue, making a goofy face. You giggle as ${((s as any).VK_VikName || '')} waves goodbye while closing the door.`);
  if (((s as any).VKNatChat ?? 0) === 4) {
    scene.actions([
      { label: 'Walk home with Natalia', handler: (st: GameState) => {
    (st as any).NikoAftermath = 0;
  }, goto: ['NikoMeyHome', 'natalia_walk'] },
    ]);
  } else {
    scene.actions([
      { label: 'Walk toward town', handler: (st: GameState) => {
    (st as any).NikoAftermath = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjachat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
  if (((s as any).VKKatjaChat ?? 0) < 1) {
    (s as any).pcs_makeup = 3;
    scene.text('As you approach Katja, she waves you over. You stand next to her before she walks around you while keeping her eyes on the mirror. "Let\'s gussy you up." She reaches into her hand bag and takes out her compact makeup case. She then pulls out her brush and begins applying some makeup on you. "Look at that pretty girl in the mirror. Isn\'t she lovely?"');
    scene.text('"I agree, she is pretty, but what about me?" you joke and Katja smirks as she places her fingertip on your nose.');
    scene.text('"I was referring to you, silly!" You both giggle. "So, how are you holding up?"');
    scene.text('"I have a lot to think about," you reply and Katja sighs.');
    scene.text('"Make sure that you take your time and think carefully about your future because one wrong decision can go a long way."');
  } else {
    scene.text('You approach Katja as she continues tweezing her eyebrows. "You should talk to Natalia and Vicky. You should also jump in the bath before Vicky hogs it."');
    scene.text('You nod as you walk toward the hallway.');
  }
  if (((s as any).VKKatjaChat ?? 0) < 1) {
    scene.actions([
      { label: 'Reply', handler: (st: GameState) => {
    (s as any).VKKatjaChat = 1;
    qspCall(s, 'stat', '');
    scene.img('' + qspUntranslated(s, "FUNC('face_image')>", { location: "NikoMeyHome" }) + '');
    if ((!((s as any).VKNatChat ?? 0))) {
      scene.text('"Tell me about it," you sarcastically reply and Katja lightly squeezes your shoulders.');
      scene.text('"No one can change who you are beside you. Remember that. Anyway, you should take a bath before Vicky decides to gussy herself in there. Trust me when I say you won\'t be able to use the bathroom anytime this century."');
      scene.text('You poke Katja in the arm. "Oh stop. I\'m sure she\'s not that bad."');
      scene.text('She giggles as she pulls out her tweezers and begins plucking her eyebrows. "Oh, by the way, Natalia wanted to speak to you. She seems very worried about you. She is such a sweet girl. It\'s a shame that she isn\'t more talkative in school."');
      scene.text('"I\'ll go speak with her." You give Katja a nod before stepping away.');
    } else {
      scene.text('"Tell me about it," you sarcastically reply and Katja lightly squeezes your shoulders.');
      scene.text('"No one can change who you are beside you. Remember that. Anyway, you should take a bath before Vicky decides to gussy herself in there. Trust me when I say you won\'t be able to use the bathroom anytime this century."');
      scene.text('You poke Katja in the arm. "Oh stop. I\'m sure she\'s not that bad."');
      scene.text('She giggles as she pulls out her tweezers and begins plucking her eyebrows. "Oh, by the way, Natalia wanted to speak to you. She seems very worried about you. She is such a sweet girl. It\'s a shame that she isn\'t more talkative in school."');
      scene.text('"It\'s alright, I already spoke with her," you reply and Katja gives you a nod.');
      scene.text('"Good. I hate seeing her worried like that, but you get washed up. You don\'t want to miss whatever Natalia has planned." You nod at Katja before stepping away.');
    }
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKKatjaChat = 1;
  }, goto: ['NikoMeyHome', 'katja_room'] },
    ]);
  } },
    ]);
  }
  if (((s as any).VKMeyLock ?? 0) === 1) {
    scene.actions([
      { label: 'Ask her for the key to the bathroom', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('"Hey Katja, the bathroom\'s locked. Do you have the key for it?"');
    scene.text('Katja gives you a surprised look. "Ohh uhh, I don\'t know. You should ask Vicky. She probably knows where the key is. Be careful going in there though." You give her a puzzled look. "You\'ll know what I mean."');
    scene.actions([
      { label: 'Walk away', goto: ['NikoMeyHome', 'katja_room'] },
    ]);
  } },
    ]);
  }
  if (((s as any).VKKatjaChat ?? 0) > 0) {
    scene.actions([
      { label: 'Walk away', goto: ['NikoMeyHome', 'katja_room'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjachat2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
  if (((s as any).VKKatjaChat ?? 0) < 2  &&  ((s as any).VKKatBath ?? 0) === 1  ||  ((s as any).VKKatjaChat ?? 0) < 2  &&  ((s as any).VKKatjaBath ?? 0) === 1) {
    scene.text('You walk up to Katja and she turns to you and smiles. "I hope that you enjoyed our time together." You give her a wink that she returns. "Also I hope that Vicky hasn\'t been making you nervous at all. She\'s a wild one and can never sit still for long."');
    scene.text('You lightly giggle. "Everything\'s been going great. I\'ve really been enjoying my time here."');
    scene.text('Katja places both her hands on your shoulders. "That\'s great. I wouldn\'t want to be known for being a terrible host."');
    scene.text('You both giggle before you continue. "Speaking of Vicky, she finished whatever she was cooking and wants us to head to the kitchen."');
    scene.text('Katja nods. "Sounds good. I have the munchies right now. See you there and don\'t worry if you\'re running late. I\'ll be sure to save you a plate." She then leaves the room.');
  } else {
    if (((s as any).VKKatjaChat ?? 0) < 2) {
      scene.text('You walk up to Katja and she turns to you and smiles. "All cleaned up I see. I hope that Vicky hasn\'t been making you nervous at all. She\'s a wild one and can never sit still for long."');
      scene.text('You lightly giggle. "Everything\'s been going great. I\'ve really been enjoying my time here."');
      scene.text('Katja places both her hands on your shoulders. "That\'s great. I wouldn\'t want to be known for being a terrible host."');
      scene.text('You both giggle before you continue. "Speaking of Vicky, she finished whatever she was cooking and wants us to head to the kitchen."');
      scene.text('Katja nods. "Sounds good. I have the munchies right now. See you there and don\'t worry if you are running late. I\'ll be sure to save you a plate." She then leaves the room.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKKatjaChat = 2;
  }, goto: ['NikoMeyHome', 'katja_room'] },
  ]);
  scene.build();
}

function enterKatjachat3(s: GameState, scene: SceneBuilder): void {
  (s as any).VKKatjaChat = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
  scene.text('You sit next to Katja and she turns to you. "I know that I said that I wouldn\'t lecture you, but that boy Niko is not what he seems. He doesn\'t care about you, he\'s just trying to use you. I\'m only telling you this because I care about you. Don\'t let this punk corrupt you."');
  // TODO-QSP: dynamic text: You look at your feet while you consider what she said and Katja pats your shoul...
  scene.text(`You look at your feet while you consider what she said and Katja pats your shoulder. "You can do better than him and don't let him trick you into believing otherwise. I just needed to tell you that before I left. Please stay safe ${((s as any).pcs_nickname || '')}. You're too good a girl to be used like that."`);
  scene.text('She gets up and waves goodbye as she walks out of the bedroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoMeyHome', 'katja_room'] },
  ]);
  scene.build();
}

function enterKatjachat4(s: GameState, scene: SceneBuilder): void {
  (s as any).VKKatjaChat = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
  // TODO-QSP: dynamic text: You sit next to Katja and she turns to you. "Hey <<$pcs_nickname>>, it was great...
  scene.text(`You sit next to Katja and she turns to you. "Hey ${((s as any).pcs_nickname || '')}, it was great having you here. Feel free to pay us another visit sometime." She winks at you before turning back to the TV screen.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['NikoMeyHome', 'lounge'] },
  ]);
  scene.build();
}

function enterKatjaAndNatalia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia4.jpg');
  // TODO-QSP: dynamic text: You sit next to Katja and Natalia and they both turn to you. "Hello again, <<$pc...
  scene.text(`You sit next to Katja and Natalia and they both turn to you. "Hello again, ${((s as any).pcs_nickname || '')}. Are you ready to go?" Katja asks.`);
  scene.text('"We can go whenever you want, but I just want to know if you would… Like to walk home with me?" Natalia adds.');
  scene.text('Katja giggles. "Awww. Are you gonna say no to that cute face?" Natalia lowers her head to hide the embarrassed smile and the light flushing of her cheeks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'I would love to', handler: (st: GameState) => {
    (s as any).VKNatChat = 4;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia3.jpg');
    // TODO-QSP: dynamic text: Natalia's eyes light up. "Great! Are you ready to head out now or would you like...
    scene.text(`Natalia's eyes light up. "Great! Are you ready to head out now or would you like to speak to ${((s as any).VK_VikName || '')} or Katja first?"`);
    scene.actions([
      { label: 'Stay to chat with <<$VK_VikName>> and Katja', goto: ['NikoMeyHome', 'lounge'] },
      { label: 'Leave with Natalia', handler: (st: GameState) => {
    (st as any).VKNatChat = 5;
  }, goto: ['NikoMeyHome', 'natalia_walk'] },
    ]);
  } },
    { label: 'I can\'t right now', handler: (st: GameState) => {
    (s as any).VKNatChat = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
    scene.text('"I would love to, but I have other places I need to be today. Maybe next time."');
    // TODO-QSP: dynamic text: Natalia lowers her head. "Okay, I guess… Just stay safe <<$pcs_nickname>>. I… I'...
    scene.text(`Natalia lowers her head. "Okay, I guess… Just stay safe ${((s as any).pcs_nickname || '')}. I… I'm concerned for you."`);
    scene.text('You smile. "That\'s really sweet Natalia, but I\'m fine."');
    // TODO-QSP: dynamic text: Natalia smiles back. "I'm glad to hear that. Goodbye <<$pcs_nickname>>."
    scene.text(`Natalia smiles back. "I'm glad to hear that. Goodbye ${((s as any).pcs_nickname || '')}."`);
    // TODO-QSP: dynamic text: She walks out of the house while giving both you and <<$VK_VikName>> a friendly ...
    scene.text(`She walks out of the house while giving both you and ${((s as any).VK_VikName || '')} a friendly smile.`);
    scene.actions([
      { label: 'Wave goodbye', goto: ['NikoMeyHome', 'lounge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatjaAndNatalia2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia4.jpg');
  if (((s as any).VKNatChat ?? 0) === 4) {
    scene.text('You approach Katja and Natalia and they both turn to you. "I hope you two aren\'t planning on living here because my sister is already as much as I can take on a daily basis," Katja says jokingly.');
    // TODO-QSP: dynamic text: Natalia giggles. "Are you ready to go, <<$pcs_nickname>>?
    scene.text(`Natalia giggles. "Are you ready to go, ${((s as any).pcs_nickname || '')}?`);
  } else {
    scene.text('You approach Katja and Natalia and they both turn to you. "I hope you two aren\'t planning on living here because my sister is already as much as I can take on a daily basis," Katja says jokingly.');
    scene.text('Natalia giggles. "I should really get going. See you all at school." She waves at you both as she leaves the room.');
  }
  if (((s as any).VKNatChat ?? 0) === 4) {
    scene.actions([
      { label: 'Leave with Natalia', handler: (st: GameState) => {
    (st as any).VKNatChat = 5;
  }, goto: ['NikoMeyHome', 'natalia_walk'] },
      { label: 'Not yet', goto: ['NikoMeyHome', 'lounge'] },
    ]);
  }
  if (((s as any).VKNatChat ?? 0) < 4) {
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKNatChat = (-1);
  }, goto: ['NikoMeyHome', 'lounge'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNataliachat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).VKNatChat ?? 0))) {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia3.jpg');
    // TODO-QSP: dynamic text: As soon as you approach, Natalia turns to you before flashing you a smile. "<<$p...
    scene.text(`As soon as you approach, Natalia turns to you before flashing you a smile. "${((s as any).pcs_nickname || '')}, you're up! How are you feeling?"`);
    scene.text('You return the smile. "I\'m feeling much better now, thanks. I hope I didn\'t worry you."');
    scene.text('Natalia giggles before replying. "I\'m just glad you\'re okay. I\'ve never seen anyone go through as much as you did today, but I\'m sure everything will work out in the end."');
    scene.text('"I can only hope." you reply.');
    scene.text('"Try not to let things get to you."');
    scene.text('You smile. "Don\'t worry, I won\'t."');
    scene.text('"Good, I\'ll always be around if you want to talk."');
    scene.text('"Thanks for everything you all have done for me. I shudder to think of what would have happened to me if you weren\'t around."');
    // TODO-QSP: dynamic text: Natalia gives you a warm smile. "You're very welcome. Now you should take a rela...
    scene.text(`Natalia gives you a warm smile. "You're very welcome. Now you should take a relaxing bath before ${((s as any).VK_VikName || '')} is finished cooking."`);
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKNatChat = 1;
  }, goto: ['NikoMeyHome', 'lounge'] },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
    scene.text('You approach Natalia and she smiles. "Is there something else you need?"');
    scene.text('"I just wanted to know where the bathroom is," you reply.');
    scene.text('Natalia points toward the end of the hallway. "The bathroom is at the end of the hall. It looks nice. A lot better than my bathroom."');
    scene.text('"Mine too." You both giggle before you walk back into the hallway.');
    scene.actions([
      { label: 'Walk away', goto: ['NikoMeyHome', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNataliachat2(s: GameState, scene: SceneBuilder): void {
  (s as any).VKNatChat = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
  // TODO-QSP: dynamic text: Natalia's eyes light up as you approach. "<<$pcs_nickname>>, you look great! Enj...
  scene.text(`Natalia's eyes light up as you approach. "${((s as any).pcs_nickname || '')}, you look great! Enjoy the bath?"`);
  scene.text('"I did, thanks. You look good yourself," you reply.');
  // TODO-QSP: dynamic text: Natalia lightly brushes her hair with her hand. "Umm… Thank you <<$pcs_nickname>...
  scene.text(`Natalia lightly brushes her hair with her hand. "Umm… Thank you ${((s as any).pcs_nickname || '')}. I… was wondering. Have you been having a good time so far?"`);
  scene.text('You smile. "I\'ve been having a wonderful time. Speaking of which, Vicky just finished making something for us to eat and we wouldn\'t want to start eating without you."');
  scene.text('Natalia happily nods. "Don\'t worry, I\'ll be right there. I\'m sure whatever Vicky made is going to be yummy!" She then walks out of the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wave goodbye', goto: ['NikoMeyHome', 'lounge'] },
  ]);
  scene.build();
}

function enterNataliachat3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
  scene.text('Natalia smiles as you approach. "How did you like the cupcakes? I found them very tasty."');
  // TODO-QSP: dynamic text: "They were super yummy! <<$VK_VikName>> could win a cooking contest. If we had t...
  scene.text(`"They were super yummy! ${((s as any).VK_VikName || '')} could win a cooking contest. If we had those, that is," you reply and Natalia giggles.`);
  scene.text('"We\'re leaving in a bit and I wanted to ask… Would you like to walk home with me?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'I would love to', handler: (st: GameState) => {
    (s as any).VKNatChat = 4;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia3.jpg');
    // TODO-QSP: dynamic text: Natalia's eyes light up. "Great! Are you ready to head out now or would you like...
    scene.text(`Natalia's eyes light up. "Great! Are you ready to head out now or would you like to speak to ${((s as any).VK_VikName || '')} or Katja first?"`);
    scene.actions([
      { label: 'Stay and chat with <<$VK_VikName>> and Katja', goto: ['NikoMeyHome', 'lounge'] },
      { label: 'Leave with Natalia', goto: ['NikoMeyHome', 'natalia_walk'] },
    ]);
  } },
    { label: 'I can\'t right now', handler: (st: GameState) => {
    (s as any).VKNatChat = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
    scene.text('"I would love to, but I have other places I need to be today. Maybe next time."');
    // TODO-QSP: dynamic text: Natalia lowers her head. "Okay, I guess… Just stay safe <<$pcs_nickname>>. I… I'...
    scene.text(`Natalia lowers her head. "Okay, I guess… Just stay safe ${((s as any).pcs_nickname || '')}. I… I'm concerned for you."`);
    scene.text('You smile. "That\'s really sweet Natalia, but I\'m fine."');
    // TODO-QSP: dynamic text: Natalia smiles back. "I'm glad to hear that. Goodbye <<$pcs_nickname>>." She the...
    scene.text(`Natalia smiles back. "I'm glad to hear that. Goodbye ${((s as any).pcs_nickname || '')}." She then walks out of the house while giving both you and ${((s as any).VK_VikName || '')} a friendly smile.`);
    scene.actions([
      { label: 'Wave goodbye', goto: ['NikoMeyHome', 'lounge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNataliaChat4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/lounge/natalia2.jpg');
  scene.text('You walk up to Natalia and she smiles. "Would you like to leave now?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave with Natalia', goto: ['NikoMeyHome', 'natalia_walk'] },
    { label: 'Not yet', goto: ['NikoMeyHome', 'lounge'] },
  ]);
  scene.build();
}

function enterNataliaWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).music_loop = 0;
  (s as any).NikoAftermath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vicky2.jpg');
  scene.text('You and Natalia start walking towards the front door.');
  // TODO-QSP: dynamic text: "Are you two ready to head out?" <<$VK_VikName>> asks and you both nod.
  scene.text(`"Are you two ready to head out?" ${((s as any).VK_VikName || '')} asks and you both nod.`);
  // TODO-QSP: dynamic text: <<$VK_VikName>> holds the door open for you and she leans forwards and whispers ...
  scene.text(`${((s as any).VK_VikName || '')} holds the door open for you and she leans forwards and whispers in your ear as you pass. "Don't forget what I said earlier. Whatever makes you happier is the path you should follow. What's the point of living a boring life?" She then gives you a wink as you and Natalia head into town.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue walking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/park/natalia1.jpg');
    scene.text('You and Natalia continue walking in silence until you reach the park. "Would you like to stop by the park?" Natalia asks.');
    scene.actions([
      { label: 'Sure', goto: ['NikoMeyHome', 'natalia_park'] },
      { label: 'It\'s getting late', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/sad1.jpg');
    scene.text('You shake your head. "No, it\'s getting late and I just want to go home."');
    scene.text('Natalia lowers her head. "Oh, okay then."');
    // TODO-QSP: dynamic text: You both walk home in silence and when you reach your door, Natalia gives you a ...
    scene.text(`You both walk home in silence and when you reach your door, Natalia gives you a hug. "Stay safe ${((s as any).pcs_nickname || '')}. And remember to do whatever you feel is right. Goodbye."`);
    scene.text('You wave goodbye to Natalia as she walks away.');
    scene.actions([
      { label: 'Enter your apartment', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNataliaPark(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natalia/love/park/sit.jpg');
  scene.text('You and Natalia walk through the park chatting until you sit on a bench. Natalia smiles. "What do you plan to do with Niko?"');
  scene.text('You sigh. "I don\'t know yet. I need to sleep on it."');
  scene.text('Natalia nods slowly. "I guess that\'s fair. I\'m just worried about you. No one can go through what you did and be unfazed."');
  scene.text('You nod as you reply. "Nothing will be the same, I know that, but I can still choose where I go from here."');
  scene.text('Natalia places her hand on your knee. "You don\'t need to be alone in this. If you ever need anything then you can always talk to me."');
  scene.text('You give Natalia a warm smile. "That\'s so sweet of you, but why do you care so much about what happens to me? I\'m no one special."');
  if (((s as any).SexTalkNatalia ?? 0) === 4  ||  ((s as any).NataliaPavlovaQW ?? 0) >= 10) {
    scene.text('"I… Uhm… Care for you. I…" Natalia remains silent for a few seconds as she rubs her arm while staring at the ground in front of her.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    (st as any).VKNataliaKiss = 1;
  }, goto: ['NikoMeyHome', 'natalia_kiss'] },
      { label: 'Change subject', goto: ['NikoMeyHome', 'natalia_park2'] },
    ]);
  } else {
    scene.text('"I just couldn\'t leave you like that. You looked so scared and helpless. I needed to help in any way I can." You place your hand on her knee. "Thank you Natalia. You saved me." Natalia\'s face grows red. "I didn\'t do it alone, but you\'re welcome." She gives you a meek smile.');
    scene.actions([
      { label: 'Continue talking', goto: ['NikoMeyHome', 'natalia_park2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNataliaPark2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big240.jpg');
  scene.text('You and Natalia continue chatting for a few minutes before she looks at her phone. "Wow, I can\'t believe it gotten so late! We should really get home."');
  // TODO-QSP: dynamic text: You both walk home and when you reach your door, Natalia gives you a hug. "Stay ...
  scene.text(`You both walk home and when you reach your door, Natalia gives you a hug. "Stay safe ${((s as any).pcs_nickname || '')}. And remember to follow your heart. Have a good night."`);
  scene.text('You wave goodbye to Natalia as she walks away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter your apartment', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterNataliaKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natalia/love/kiss1.mp4');
  scene.text('You place your hand on Natalia\'s cheek and gently pull her face to yours. You both share a passionate kiss for what feels like eternity. After you finish, you both stare into each other\'s eyes as you whisper at her. "Thank you for saving me Natalia. I\'ll never forget what you done for me."');
  scene.text('Natalia\'s face is very red. "I\'d do anything for you. You only need to ask."');
  scene.text('"You\'re so sweet, Natalia. I\'m so lucky to have you." Natalia gives you a trembling smile before she quickly darts forward, giving you another passionate kiss.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish kissing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/park/natalia1.jpg');
    scene.text('After a long passionate kiss, Natalia begins giggling playfully and checks her phone. "It\'s getting late. We should start heading home."');
    scene.text('You smile. "Sure, let\'s go."');
    // TODO-QSP: dynamic text: As you're walking home, Natalia wraps her fingers around yours and gives you an ...
    scene.text(`As you're walking home, Natalia wraps her fingers around yours and gives you an innocent smile before you arrive at your apartment. "Please stay safe ${((s as any).pcs_nickname || '')}, I care for you so much… Just remember to follow your heart and I'm sure that everything will work out for you. Have a good night."`);
    scene.text('She gives you a soft kiss before walking away while looking back at you with an innocent smile.');
    scene.actions([
      { label: 'Enter your apartment', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).VKVickyChat ?? 0) === 4) {
    (s as any).music_loop = 0;
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        (s as any).volume = 5;
        (s as any).music_loop = 1;
      }
    }
  }
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
  scene.text('A luxurious bathroom that looks like the five-star hotel bathrooms you read about in magazines.');
  if (((s as any).VKAftermathEvent ?? 0) === 0  &&  ((s as any).VKKatjaChat ?? 0) === 1  &&  ((((s as any).katjaQW ?? 0)?.['dom'] > 30  &&  ((s as any).npc_had_sex ?? 0)?.['A14'])  ||  ((s as any).NataliaPavlovaQW ?? 0) >= 10)) {
    scene.text('Above the beautiful vanity and sink is a huge mirror. You can feel a hand on your shoulder.');
  } else {
    scene.text('Above the beautiful vanity and sink is a huge <a href="exec:gt \'mirror\',\'start\'">mirror</a>.');
  }
  if (((s as any).VKAftermathEvent ?? 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['dom'] > 30  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).VKKatjaChat ?? 0) === 1) {
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    (st as any).VKAftermathEvent = 1;
  }, goto: ['NikoMeyHome', 'kat_bath'] },
    ]);
  } else {
    if (((s as any).VKAftermathEvent ?? 0) === 0  &&  ((s as any).NataliaPavlovaQW ?? 0) >= 20  &&  ((s as any).VKNatChat ?? 0) === 1) {
      scene.actions([
        { label: 'Turn around', handler: (st: GameState) => {
    (st as any).VKAftermathEvent = 1;
  }, goto: ['NikoMeyHome', 'natalia_bath'] },
      ]);
    } else {
      if ((!((s as any).VKAftermathEvent ?? 0))) {
        scene.actions([
          { label: 'Take a bath', handler: (st: GameState) => {
    (st as any).VKAftermathEvent = 1;
  }, goto: ['NikoMeyHome', 'bath'] },
        ]);
      } else {
        if (((s as any).VKAftermathEvent ?? 0) === 1) {
          scene.actions([
            { label: 'Leave', goto: ['NikoMeyHome', 'vickychat2'] },
          ]);
        } else {
          scene.actions([
            { label: 'Leave', goto: ['NikoMeyHome', 'hallway'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBath(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  scene.img('images/shared/home/bathroom/wash4.jpg');
  scene.text('You turn the water on and watch as the bathtub slowly fills. You look around the room, feeling rather lonely but nevertheless you wait for the tub to fill before carefully climbing into it and relaxing as the warm water soothes your aching body. After a few minutes, you begin slowly scrubbing yourself until you finally feel clean. You then rest for a few more seconds before you get up, dry yourself off and get dressed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['NikoMeyHome', 'bathroom'] },
  ]);
  scene.build();
}

function enterKatBath(s: GameState, scene: SceneBuilder): void {
  (s as any).VKKatBath = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
  // TODO-QSP: dynamic text: You turn around and see Katja staring at you. You freeze in place as she walks u...
  scene.text(`You turn around and see Katja staring at you. You freeze in place as she walks up to you and looks into your eyes. "Let's get you cleaned up, ${((s as any).pcs_nickname || '')}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Meekly nod', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('Katja unbuttons your shirt and pulls it up over your head, exposing your breasts. She then slowly runs her fingers over your nipples and lightly squeezes them before pulling them gently up and letting them go, causing your breasts to bounce.');
    scene.text('Her hands then reach downward as she slowly slides her thumbs down the waistband of your panties and pulls them all the way down before she kneels down to remove your socks. Once you\'re fully naked, Katja looks you over and slowly runs her finger over your pussy. She slides her finger in until she sees you flinch from the soreness you feel.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/1.mp4');
    scene.text('Realizing your pain, Katja quickly stops and whispers in your ear. "Get in the tub." You do as she says and climb into the tub as Katja undresses herself and joins you.');
    scene.text('She soaps up the sponge. "Sit up." You do as she says and she starts lathering your body with the soft sponge while being very careful not to put too much pressure on your sore spots.');
    scene.actions([
      { label: 'Let Katja rinse you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/2.mp4');
    scene.text('After Katja finishes rinsing off the soap, she grabs onto the back of your head and pulls you forward towards her nipple. You obediently start licking her nipple passionately while occasionally looking up to see her lightly biting her lip, obviously pleased at your performance. She then lightly grips your neck, gently pushing you off her before climbing on top of the side of the tub and spreading her legs, rubbing her pussy gently.');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/3.mp4');
    scene.text('You lean forward and start lightly licking her pussy as Katja leans back against the wall. You continue licking her pussy, gently at first before quickening your pace while occasionally looking up to see her tilting her head back and moaning. You can see her legs tensing up as you pleasure her.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/4.mp4');
    scene.text('As you continue licking Katja\'s pussy, you decide to slide one of your fingers inside her and do your best to please her with it. You brush her g-spot with the tip of your finger as she starts moaning louder. You look up to see her fidgeting as she moans out loud.');
    scene.actions([
      { label: 'Increase your pace', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/5.mp4');
    scene.text('You increase your pace before Katja suddenly slams her head back and her body begins to spasm as she experiences a powerful orgasm. Her moaning is erratic and her hands tightly clench around the shelf. You look up at her and watch her writhing in pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/6.mp4');
    // TODO-QSP: dynamic text: Katja rides through her orgasm and lays still for a few seconds, catching her br...
    scene.text(`Katja rides through her orgasm and lays still for a few seconds, catching her breath before looking into your eyes. "You did good ${((s as any).pcs_nickname || '')}… Really good." She then leans forward and places her hand on your cheek. "You're such a good girl, aren't you?" She then shares a soft passionate kiss with you for what feels like an eternity, an eternity that you welcome.`);
    scene.actions([
      { label: 'Finish the kiss', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    // TODO-QSP: dynamic text: After the long passionate kiss, Katja smiles. "Well… you should probably go see ...
    scene.text(`After the long passionate kiss, Katja smiles. "Well… you should probably go see Vicky. She'll see you out… and ${((s as any).pcs_nickname || '')}. Don't forget about what I told you. Niko is no good for you and please… take care of yourself. You are very important to me." You give Katja an approving nod as she climbs out of the tub and you both get dried and dressed.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoMeyHome', 'bathroom'] },
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
  } },
  ]);
  scene.build();
}

function enterNataliaBath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natalia/love/bedroom/hold.jpg');
  scene.text('');
  // TODO-QSP: end
  scene.actions([
    { label: '', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/bath.jpg');
    scene.text('');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/bath.jpg');
    scene.text('');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/bath.jpg');
    scene.text('');
    scene.actions([
      { label: '', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bathroom/bath.jpg');
    scene.text('');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoMeyHome', 'bathroom'] },
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

function enterKatjaBath(s: GameState, scene: SceneBuilder): void {
  (s as any).VKKatjaBath = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
  scene.text('You turn around and see Katja staring at you. She reaches out for you, but hesitates as you turn to her. You look into your eyes. "The water is ready. Jump in." You motion her to come closer.');
  // TODO-QSP: end
  scene.actions([
    { label: 'See what she does', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    scene.text('Katja starts unbuttoning your shirt and pulls it up over your head, exposing your breasts. She then slowly runs her fingers over your nipples and lightly squeezes them before pulling them gently up and letting them go, causing your breasts to bounce.');
    scene.text('Her hands then reach downward as she slowly slides her thumbs down the waist of your panties and pulls them all the way down before she kneels down to remove your socks. Once you\'re fully naked, Katja looks you over and slowly runs her finger over your pussy. She slides her finger in until she sees you flinch from the soreness you feel.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/1.mp4');
    scene.text('Realizing your pain, Katja quickly stops and whispers in your ear. "I\'m sorry! I just… I forgot."');
    scene.text('You softly stroke her cheek. "Take off your clothes and get in."');
    scene.text('Katja quickly undresses herself and joins you, soaping up the sponge. "Can you sit up please?" You nod and she starts lathering your body with the soft sponge while being very careful not to put too much pressure on your sore spots.');
    scene.actions([
      { label: 'Let Katja rinse you off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/2.mp4');
    scene.text('After Katja finishes rinsing off the soap, you grab onto the back of her head and pull her forward toward your nipple. She obediently starts licking your nipple passionately while occasionally looking up to see if you approve. You give her a nod and lightly grip her neck, gently pushing her off of you before climbing on top of the side of the tub and laying back, spreading your legs and gently rubbing your pussy.');
    scene.actions([
      { label: 'Let Katja lick your pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/3.mp4');
    scene.text('Katja leans forward and begins lightly licking your pussy as you lean back against the side of the tub. Katja continues licking your pussy, gently at first before quickening her pace while occasionally looking up to see your reaction, obviously wanting to please you. You reach down and stroke her cheek as she continues eating you out.');
    scene.actions([
      { label: 'See what she does', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/4.mp4');
    scene.text('Katja slowly slides one of her fingers into your pussy and does her best to please you with it. She brushes against your g-spot with the tip of her finger as you begin moaning louder. Katja looks up to you as you feel the pleasure building to an almost unsustainable amount and begin moaning loudly, feeling like you\'ll burst into an orgasm at any second.');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/5.mp4');
    scene.text('Katja notices your loud moaning and increases her pace, causing you to suddenly slam your head back. You feel your breath stop as waves of pleasure begin pulsing throughout your body. You lose all control as your body is filled with perfect ecstasy. You can hear yourself moaning loudly and feel your body spasming wildly while Katja remains latched onto your pussy, licking vigorously.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/6.mp4');
    scene.text('You ride through your orgasm and lay still for a few seconds, catching your breath before looking into Katja\'s eyes. "You did great Kat… Really good." She leans forward and places her hand on your chest. "You\'re such a good girl, aren\'t you?"');
    scene.text('You both share a soft passionate kiss for what feels like an eternity, an eternity that you welcome.');
    scene.actions([
      { label: 'Meekly nod', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    // TODO-QSP: dynamic text: After the long passionate kiss, Katja smiles. "Well… You should probably go see ...
    scene.text(`After the long passionate kiss, Katja smiles. "Well… You should probably go see Vicky. She'll see you out… And ${((s as any).pcs_nickname || '')}. Don't forget about what I told you. Niko is no good for you and please… take care of yourself. You're important to me." You give Katja an approving nod as she climbs out of the tub and you both get dried and dressed.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoMeyHome', 'bathroom'] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'aftermath':
      enterAftermath(s, scene);
      break;
    case 'aftermath2':
      enterAftermath2(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'lounge':
      enterLounge(s, scene);
      break;
    case 'katja_room':
      enterKatjaRoom(s, scene);
      break;
    case 'vicky_room':
      enterVickyRoom(s, scene);
      break;
    case 'bathroom_locked':
      enterBathroomLocked(s, scene);
      break;
    case 'bathroom_hornet':
      enterBathroomHornet(s, scene);
      break;
    case 'meal_time':
      enterMealTime(s, scene);
      break;
    case 'vickychat':
      enterVickychat(s, scene);
      break;
    case 'vickychat2':
      enterVickychat2(s, scene);
      break;
    case 'vickychat3':
      enterVickychat3(s, scene);
      break;
    case 'vickychat4':
      enterVickychat4(s, scene);
      break;
    case 'vickychat5':
      enterVickychat5(s, scene);
      break;
    case 'vicky_reminder':
      enterVickyReminder(s, scene);
      break;
    case 'leaving':
      enterLeaving(s, scene);
      break;
    case 'vicky_goodbye':
      enterVickyGoodbye(s, scene);
      break;
    case 'katjachat':
      enterKatjachat(s, scene);
      break;
    case 'katjachat2':
      enterKatjachat2(s, scene);
      break;
    case 'katjachat3':
      enterKatjachat3(s, scene);
      break;
    case 'katjachat4':
      enterKatjachat4(s, scene);
      break;
    case 'Katja and Natalia':
      enterKatjaAndNatalia(s, scene);
      break;
    case 'Katja and Natalia 2':
      enterKatjaAndNatalia2(s, scene);
      break;
    case 'nataliachat':
      enterNataliachat(s, scene);
      break;
    case 'nataliachat2':
      enterNataliachat2(s, scene);
      break;
    case 'nataliachat3':
      enterNataliachat3(s, scene);
      break;
    case 'Natalia Chat 4':
      enterNataliaChat4(s, scene);
      break;
    case 'natalia_walk':
      enterNataliaWalk(s, scene);
      break;
    case 'natalia_park':
      enterNataliaPark(s, scene);
      break;
    case 'natalia_park2':
      enterNataliaPark2(s, scene);
      break;
    case 'natalia_kiss':
      enterNataliaKiss(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'bath':
      enterBath(s, scene);
      break;
    case 'kat_bath':
      enterKatBath(s, scene);
      break;
    case 'natalia_bath':
      enterNataliaBath(s, scene);
      break;
    case 'katja_bath':
      enterKatjaBath(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoMeyHome: LocationDef = {
  name: 'NikoMeyHome',
  title: 'Hallway',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
