import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A112'] < 10) {
    scene.text('You don\'t really know Sergey at all.');
  }
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 10  &&  ((s as any).npc_rel ?? 0)?.['A112'] < 20) {
    scene.text('You know some things about Sergey, but your relationship is still a bit tenuous.');
  }
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A112'] < 30) {
    scene.text('You get along alright with Sergey, though there\'s still a lot you don\'t know about him.');
  }
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 30  &&  ((s as any).npc_rel ?? 0)?.['A112'] < 50) {
    scene.text('Sergey doesn\'t mind your company, and likes to talk with you when he\'s not busy.');
  }
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A112'] < 80) {
    scene.text('You have a friendly relationship with Sergey, and he enjoys spending time with you.');
  }
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 80) {
    scene.text('You have an excellent relationship with Sergey, and you\'re always welcome in his home.');
  }
  scene.text('');
  // TODO-QSP: end
  scene.build();
}

function enterTv(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'Serge_Shulgin';
  (s as any).menu_arg = 'tv';
  qspCall(s, 'boyStat', 'A112');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).sergebazar_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sergebazar_count = 10;
  }
  scene.img('images/characters/shared/headshots_main/big112.jpg');
  scene.text('Sergey Borisovich, born in 1967. His hair is gray by now, and he has a small beer belly, but in your eyes, he still looks good for his age. His then-wife divorced him a long time ago and he has been single ever since, raising Vasily by himself.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRep(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel ?? 0)?.['A112'] > 30) {
    scene.actions([
      { label: 'Lie down next to him and watch TV together', goto: ['Serge_Shulgin', 'hide', 'serge_tv'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'hallway'] },
    { label: 'Chat with Sergey', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).sergebazar_day = ((st as any).daystart ?? 0);
    (st as any).sergebazar_count = ((st as any).sergebazar_count ?? 0) - (1);
    if (((st as any).sergebazar_count ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A112', 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
    scene.text('Sergey is relaxing on his bed, watching some TV.');
    if (((st as any).npc_rel ?? 0)?.['A112'] < 30) {
      scene.text('You sit down on a chair in his bedroom.\' else \'You signal for Sergey to scooch over and lie down on the bed next to him.');
    }
    if (((st as any).sergebazar_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Sergey seems a tad annoyed when he says: "Not now, <<$pcs_nickname>>! Sorry, but...
      scene.text(`Sergey seems a tad annoyed when he says: "Not now, ${((st as any).pcs_nickname ?? '')}! Sorry, but this important match just started and I really want to watch it."`);
    } else {
      if (((st as any).npc_rel ?? 0)?.['A112'] <= 50) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'serge_textb']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
      if (((st as any).npc_rel ?? 0)?.['A112'] > 50) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'serge_textb2']; enterHide(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['Serge_Shulgin', 'tv'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/serge/sleep.jpg');
  scene.text('Sergey is sound asleep.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
    { label: 'Wake him up', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Sergey rubs his eyes, a bit irritated that you woke him up: "What do you want, <...
    scene.text(`Sergey rubs his eyes, a bit irritated that you woke him up: "What do you want, ${((st as any).pcs_nickname ?? '')}? You really shouldn't be waking me up, I need my sleep!"`);
    scene.text('You bite your lip, feeling bad for waking him up. You ask him: "Sorry, uncle Sergey. Would you mind if I take a nap with you?"');
    if (((st as any).npc_rel ?? 0)?.['A112'] < 50) {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'npc_relationship', 'modify', 'A112', (-1));
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: He snorts: "Do I look like an idiot, <<$pcs_nickname>>? I''d never hear the end ...
      scene.text(`He snorts: "Do I look like an idiot, ${((st as any).pcs_nickname ?? '')}? I'd never hear the end of it! Just go home!"`);
      scene.actions([
        { label: 'Leave him alone', goto: ['vasilyhome', 'hallway'] },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      qspCall(st, 'stat', '');
      scene.text('He sighs and wordlessly moves over to one side of the bed, offering you the other half while he clutches his pillow.');
      if (((st as any).pcs_horny ?? 0) > 30  &&  ((st as any).mesec ?? 0) <= 0) {
        scene.actions([
          { label: 'Try to seduce Sergey', goto: ['Serge_Shulgin', 'hide', 'sleep_prstsex'] },
        ]);
      }
      scene.actions([
        { label: 'Sleep with Sergey', handler: (st: GameState) => {
    scene.text('You get comfortable in Sergey\'s bed, and sleep for a few hours.');
    qspCall(st, 'npc_relationship', 'modify', 'A112', 1);
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.actions([
      { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHide(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'serge_tv') {
    if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) >= 23) {
      qspCall(s, 'stat', '');
      scene.text('It\'s too late, you would awaken Sergey if you turn the TV on!');
      scene.actions([
        { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'stat', '');
      if ((Math.floor(Math.random() * 100) + 1) > 10) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'serge_tv_rand']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: '<center><video autoplay loop width="748" height="540" src="images/locations/pav...
        scene.text('<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvrekl' + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center> Ugh, commercials…');
      }
      if (((s as any).npc_rel ?? 0)?.['A112'] > 50) {
        scene.actions([
          { label: 'Switch to the porn channel', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop width="748" height="540" src="images/locations/pav...
    scene.text('<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvporn' + (Math.floor(Math.random() * 5) + 1) + '.mp4"></video></center>');
    scene.text('You switch to the porn channel and put the remote away. Sergey is a bit surprised you would want to watch this, but says nothing.');
    if (((st as any).pcs_horny ?? 0) > 30) {
      scene.text('You feel Sergey\'s body shifting a lot during a particularly rough part of the porn scene, and he\'s awkwardly covering his groin with his hands. The large bulge in his pants gives away his obvious erection anyway.');
    }
    qspCall(st, 'arousal', 'porn', 10);
    qspCall(st, 'arousal', 'end');
    if (((st as any).pcs_horny ?? 0) > 30  &&  ((st as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Try to seduce Sergey', goto: ['Serge_Shulgin', 'hide', 'sleep_prstsex'] },
      ]);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
        { label: 'Change the channel', goto: ['Serge_Shulgin', 'hide', 'serge_tv'] },
      ]);
    }
    // TODO-QSP: end & !! --- serge_tv ---
    if (String((s as any).locArgs?.[1] ?? '') === 'sleep_prstsex') {
      // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/vert/dr` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
      scene.text('You idly rub your hands over your body, occasionally touching his groin or chest to make sure you have his attention. When you let out a soft moan, you can feel him stirring next to you in the bed; he\'s definitely paying attention to you now! You secretly smile to yourself: he\'s such a typical guy… all you have to do is rub your tits and ass a little, and there\'s no way he can resist your charms!');
      qspCall(s, 'arousal', 'foreplay', 5);
      qspCall(s, 'stat', '');
      if (((s as any).npc_rel ?? 0)?.['A112'] < 70) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'Serge_Shulgin', '');
  } },
        ]);
      } else {
        if (((s as any).serge_sleep_sex_count ?? 0) <= 0) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'Serge_Shulgin', '');
  } },
          ]);
        } else {
          if (((s as any).pcs_horny ?? 0) < 50) {
            scene.actions([
              { label: 'Suggest you could make him feel good', goto: ['Serge_Shulgin', 'hide', 'sleep_nameksex_oral'] },
            ]);
          } else {
            if (((s as any).pcs_horny ?? 0) < 75) {
              scene.actions([
                { label: 'Suggest you could make him feel good', goto: ['Serge_Shulgin', 'hide', 'sleep_nameksex_rought'] },
              ]);
            } else {
              scene.actions([
                { label: 'Beg him to make you feel good', goto: ['Serge_Shulgin', 'hide', 'sleep_nameksex_lick'] },
              ]);
            }
          }
        }
      }
      // TODO-QSP: end & !! --- sleep_prstsex ---
      if (String((s as any).locArgs?.[1] ?? '') === 'sleep_nameksex_otkaz') {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: Sergey lets out a frustrated sigh, and scolds you: "<<$pcs_nickname>>, I have im...
        scene.text(`Sergey lets out a frustrated sigh, and scolds you: "${((s as any).pcs_nickname ?? '')}, I have important things to do tomorrow morning! Don't bother me, I need my sleep! Leave me alone!"`);
        // TODO-QSP: end & !! --- sleep_nameksex_otkaz ---
        if (String((s as any).locArgs?.[1] ?? '') === 'serge_sleep_sex_perebor') {
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: Sergey laughs when he feels your hand on his groin again: "<<$pcs_nickname>>, I'...
          scene.text(`Sergey laughs when he feels your hand on his groin again: "${((s as any).pcs_nickname ?? '')}, I'm no young guy any more! My stamina isn't what it used to be… if I were still young I would've been all over you, but you've completely drained me for today! I just want to sleep… maybe some other time?"`);
          // TODO-QSP: end & !! --- serge_sleep_sex_perebor ---
          if (String((s as any).locArgs?.[1] ?? '') === 'sleep_nameksex_oral') {
            (s as any).serge_sleep_sex_day = ((s as any).daystart ?? 0);
            (s as any).serge_sleep_sex_count = ((s as any).serge_sleep_sex_count ?? 0) - (1);
            (s as any).minut = ((s as any).minut ?? 0) + 2;
            (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
            ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/vert/pr1.mp4');
            scene.text('"I bet I could make you feel good, uncle Sergey… would you like that?" you whisper in his ear, with a devious smile on your face.');
            scene.text('He doesn\'t reply, but the burning desire in his eyes betrays him: he wants you badly. To drive your point home you press your tongue against your cheek hinting what you could do for him, if only he would let you…');
            // TODO-QSP: end & !! --- sleep_nameksex_oral ---
            if (String((s as any).locArgs?.[1] ?? '') === 'sleep_nameksex_rought') {
              (s as any).serge_sleep_sex_day = ((s as any).daystart ?? 0);
              (s as any).serge_sleep_sex_count = ((s as any).serge_sleep_sex_count ?? 0) - (1);
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
              ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
              qspCall(s, 'stat', '');
              scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/vert/pr1.mp4');
              scene.text('"I bet I could make you feel good, uncle Sergey… would you like that?" you whisper in his ear, with a devious smile on your face.');
              scene.text('He doesn\'t reply, but the burning desire in his eyes betrays him: he wants you badly. To drive your point home you press your tongue against your cheek hinting what you could do for him, if only he would let you…');
              // TODO-QSP: end & !! --- sleep_nameksex_rought ---
              if (String((s as any).locArgs?.[1] ?? '') === 'sleep_nameksex_lick') {
                (s as any).serge_sleep_sex_day = ((s as any).daystart ?? 0);
                (s as any).serge_sleep_sex_count = ((s as any).serge_sleep_sex_count ?? 0) - (1);
                (s as any).minut = ((s as any).minut ?? 0) + 2;
                (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
                ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
                qspCall(s, 'stat', '');
                scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/vert/pr2.mp4');
                scene.text('"I bet you could make me feel good, uncle Sergey… I\'m so horny! Could you help me out, pretty please?" you whisper in his ear, with a devious smile on your face.');
                scene.text('He doesn\'t reply, but the burning desire in his eyes betrays him: he wants you badly.');
                // TODO-QSP: end & !! --- sleep_nameksex_lick ---
                if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_oral_event1') {
                  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/oral` + (Math.floor(Math.random() * 5) + 6) + '.mp4"></video></center>');
                  // TODO-QSP: dynamic text: You giggle when Sergey reaches for his pants, with a slightly defeated look on h...
                  scene.text(`You giggle when Sergey reaches for his pants, with a slightly defeated look on his face. He really wanted to resist your charms, but he failed. You lick your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} when he pulls his dick out and looks at you expectantly.`);
                  scene.text('"Thank you, uncle Sergey," you whisper to him. You tentatively reach for his cock, lightly rubbing and squeezing it with your delicate fingers. Wow, he really does have a magnificent cock…');
                  scene.text('You squeal with delight when a large bead of precum forms on the head, and you quickly close your lips around his penis to prevent it from falling to the ground. When you begin to bob your head up and down obediently, Sergey relaxes and just smiles down at you, content to let you do your thing for now.');
                  scene.text('You know it\'s probably just a matter of time before he becomes more involved though; you know Sergey fairly well, and he\'s very dominant and demanding, especially towards women.');
                  // TODO-QSP: dynamic text: He grunts in his deep voice: "So… you''re turning out to be quite the little slu...
                  scene.text(`He grunts in his deep voice: "So… you're turning out to be quite the little slut, isn't that right ${((s as any).pcs_nickname ?? '')}? Must run in the family…"`);
                  scene.text('When you try to pull away to answer, he puts his hands behind your head and pushes his cock back into your mouth, shaking his head: "No, no. It was a rhetorical question, dear… just keep sucking."');
                  qspCall(s, 'boyStat', 'A112');
                  qspCall(s, 'arousal', 'bj', 5, 'sub');
                  qspCall(s, 'stat', '');
                  // TODO-QSP: end & !! --- sleep_sex_oral_event1 ---
                  if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_oral_event2') {
                    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/oral` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
                    scene.text('Sergey smirks at you confidently and says: "Feeling slutty today, aren\'t we? Very well, you may. Go ahead, undress me first."');
                    scene.text('Even though this was your idea, you\'re a bit taken aback by how fast he turned the tables on you. You were supposed to be teasing him, he wasn\'t supposed to be telling you what to do! Still, it\'s too late to back down now.');
                    scene.text('With a slightly trembling hand, you take off his clothes. When Sergey is naked, he grins: "Very good. You may suck my dick now. For a little while, anyway. I\'m going to fuck you in a few minutes." With a wink, he adds: "Unless you can get me off with your mouth before then, of course!"');
                    scene.text('Is he… challenging you? If so, challenge accepted! Forgetting all about your nerves, you quickly take his cock in your hand and begin to jerk him off already as you guide it to your mouth. You try every trick you know to try and get him to shoot his load in your mouth.');
                    // TODO-QSP: dynamic text: However, after a few minutes, he grabs onto your hair and gently but firmly pull...
                    scene.text(`However, after a few minutes, he grabs onto your hair and gently but firmly pulls your head backward. "Time's up, ${((s as any).pcs_nickname ?? '')}. Lie down on the bed."`);
                    qspCall(s, 'arousal', 'bj', 5, 'sub');
                    qspCall(s, 'stat', '');
                    // TODO-QSP: end & !! --- sleep_sex_oral_event2 ---
                    if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_oral_event3') {
                      // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/69-` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
                      scene.text('Without saying a word, you turn around and hover your bare pussy over his face before you lower your hips confidently. You feel his tongue greedily licking you almost immediately… it\'s working, he wants you!');
                      scene.text('You weren\'t lying when you said you wanted to suck his dick, though. You immediately get to work, planting kisses all the way down his shaft. When you reach his balls, you begin to suck on them; first the right, then the left… at one point, you even had both of them in your mouth at once!');
                      scene.text('Sergey, as it turns out, is pretty great at giving oral too, and he guides his tongue from your clitoris all the way to your anus, and everywhere in between. Sometimes he thrusts his tongue inside your vagina, sometimes he sucks on your soft pink lips. After a while, he begins to use his fingers too, slipping one finger inside your pussy and one inside your ass, fucking them both while he keeps licking you.');
                      scene.text('It feels great! For a moment, you forget all about what you were doing and just moan and squirm on his face while he pleases you.');
                      scene.text('When he realizes your mind has started to wander, the thrusts of his cock against your lips become more insistent, and you automatically open your mouth. He keeps going though, and ends up mostly fucking your mouth while you don\'t do very much anymore, too distracted by the pleasure you\'re getting at the same time.');
                      qspCall(s, 'arousal', 'bj', 5, 'sub');
                      qspCall(s, 'stat', '');
                      // TODO-QSP: end & !! --- sleep_sex_oral_event3 ---
                      if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_lick_event1') {
                        // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                        scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/lick` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
                        scene.text('Sergey spreads your legs and immediately buries his face between them, licking your wet cunt with long, firm strokes. He pays extra attention to your clitoris, lashing it with his tongue over and over.');
                        scene.text('The sensation is too much! You try to squirm away from him, but Sergey firmly holds your hips in place and keeps teasing your sensitive mound with an amused smirk.');
                        scene.text('Then he switches to thrusting his tongue inside your pussy. It also feels great, but not as intense as before, and you settle into a sweet rhythm of gently grinding your hips against his mouth while he pleases you.');
                        scene.text('After a while, you grow restless. You want to do something too! "Uncle Sergey, let me suck your cock… please!" you whisper between your moans.');
                        qspCall(s, 'arousal', 'cuni', 5, 'dom');
                        qspCall(s, 'stat', '');
                        // TODO-QSP: end & !! --- serge_tv ---
                        if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_rought_event1') {
                          // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                          scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
                          // TODO-QSP: dynamic text: Suddenly Sergey firmly grabs a fistful of your <<$pcs_haircolor>> hair and bring...
                          scene.text(`Suddenly Sergey firmly grabs a fistful of your ${((s as any).pcs_haircolor ?? '')} hair and brings your face close to his. He says in a menacing voice: "So, you want to be a slut? I'll treat you like a slut!"`);
                          scene.text('You squeak in surprise as he directs your head towards his groin, pulling you roughly by the hair until you give in and follow his lead more readily. You close your lips around his erection in a reflex, and struggle to take it all in when he forces most of his cock down your throat already in the very first thrust. A few thrusts later, the head of his dick is firmly lodged down your throat while your lower lip rubs against his shaved balls.');
                          scene.text('Sergey groans softly as he uses you like a sex doll, forcing his cock into your mouth over and over. Thick strands of saliva run down your chin as you do your best to just take it, trying to suppress your gag reflex when he rams his cock down your throat once more. Sergey is not even giving you any chance to object anyway, and uses you as he sees fit.');
                          qspCall(s, 'boyStat', 'A112');
                          qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
                          qspCall(s, 'stat', '');
                          // TODO-QSP: end & !! --- sleep_sex_rought_event1 ---
                          if (String((s as any).locArgs?.[1] ?? '') === 'sleep_sex_rought_event2') {
                            // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
                            scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
                            scene.text('Without any preliminaries, he undresses and thrusts his erect penis towards your face. With a serious face he says: "You want to make me feel good? Go ahead, slut. Suck."');
                            scene.text('You give him a sweet smile and open your mouth, but suddenly feel his hand behind your neck. With nowhere to go, you can\'t resist as he shoves the whole length of his cock into your mouth.');
                            scene.text('When he realizes you\'re not resisting, he lets up a bit and relaxes his grip. You dutifully suck him off as good as you can, trying to keep doing what he made you do. Your chin is covered in spit after a few minutes, and some of it drips down to your boobs. You pay it no heed, and fully focus on servicing Sergey.');
                            scene.text('He does notice, and rubs it out all over your boobs and pincles your nipples, encouraging you to keep sucking him off like a good girl.');
                            qspCall(s, 'boyStat', 'A112');
                            qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
                            qspCall(s, 'stat', '');
                            // TODO-QSP: end & !! --- sleep_sex_rought_event2 ---
                            if (String((s as any).locArgs?.[1] ?? '') === 'serge_textb') {
                              (s as any).serge_textb = (Math.floor(Math.random() * 7) + 0);
                              if ((!((s as any).serge_textb ?? 0))) {
                                (s as any).temp_txt = 'When you ask about Vasily\'s mother, Sergey shrugs: "It\'s a short story, really. I met Vasily\'s mother at my graduation party. We all got drunk and she and I had some fun. When she turned out to be pregnant, we got married. We didn\'t have much of a say in the matter, that\'s just how it worked back then. Shulga was born a few months after that. We tried to make it work, but she got bored and left me a year later when she got offered a job abroad, leaving Shulga with me. I haven\'t heard from her since. It\'s fine, though… me and him managed just fine, without her."';
                              }
                              if (((s as any).serge_textb ?? 0) === 1) {
                                (s as any).temp_txt = 'You spend fifteen minutes talking to Sergey about everyday things.';
                              }
                              if (((s as any).serge_textb ?? 0) === 2) {
                                (s as any).temp_txt = 'When you ask Sergey what he does for a living, he smiles and says: "I work in a factory where we produce bricks. I work the day shift, from ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 15, 0) + ', five days a week. I\'m a foreman there, managing the laborers and keeping an eye on the machinery. Of course I pitch in as well, when the men need help. It\'s dusty, hard work, and it doesn\'t pay well, but it\'s work worth doing!"';
                              }
                              if (((s as any).serge_textb ?? 0) === 3) {
                                (s as any).temp_txt = 'When you ask about his relationship with his son, Sergey shrugs and says in a tired voice: "Eh. We do okay, given the circumstances. He\'s… changed, though. He\'s rather difficult to handle nowadays. For the last year or so, he has shown no interest in school and he stays out until late every day, doing God knows what. I\'m just not sure how to get through to him any more."';
                              }
                              if (((s as any).serge_textb ?? 0) === 4) {
                                (s as any).temp_txt = 'Sergey tells you a funny story.';
                              }
                              if (((s as any).serge_textb ?? 0) === 5) {
                                (s as any).temp_txt = 'Sergey is actually a pretty smart guy, and you listen to him for fifteen minutes while he tells you anecdotes about his past.';
                              }
                              if (((s as any).serge_textb ?? 0) === 6) {
                                (s as any).temp_txt = 'You try to talk to Sergey about clothes, but he\'s not all that interested. The only thing he can contribute is that there is a tailor at the garment factory, who adjusted some ill-fitting jeans for him a while ago.';
                              }
                              // TODO-QSP: dynamic text: <<$temp_txt>>
                              scene.text(`${((s as any).temp_txt ?? '')}`);
                              // TODO-QSP: end & !! --- serge_textb ---
                              if (String((s as any).locArgs?.[1] ?? '') === 'serge_textb2') {
                                (s as any).serge_textb2 = (Math.floor(Math.random() * 6) + 0);
                                if ((!((s as any).serge_textb2 ?? 0))) {
                                  (s as any).temp_txt2 = 'Sergey tells you a dirty joke.';
                                }
                                if (((s as any).serge_textb2 ?? 0) === 1) {
                                  (s as any).temp_txt2 = 'Sergey tells you a dirty story.';
                                }
                                if (((s as any).serge_textb2 ?? 0) === 2) {
                                  (s as any).temp_txt2 = 'Sergey tells you a funny story. It\'s loaded with sexual innuendos and double entendres.';
                                }
                                if (((s as any).serge_textb2 ?? 0) === 3) {
                                  (s as any).temp_txt2 = 'Sergey tells you a dirty joke: A businessman needs to do a large investment, buying a new fax machine for the office. He calls in his secretary and says: "Maria, I have ' + qspFunc(s, 'money', 'format', 10000) + ', minus taxes… what do you think I can get for that?" The secretary blushes as she begins to unbutton her shirt, and replies: "For ' + qspFunc(s, 'money', 'format', 10000) + '? Everything but my earrings!"';
                                }
                                if (((s as any).serge_textb2 ?? 0) === 4) {
                                  (s as any).temp_txt2 = 'You\'re lying on Sergey\'s bed relaxing, while he tells you another vulgar anecdote.';
                                }
                                if (((s as any).serge_textb2 ?? 0) === 5) {
                                  (s as any).temp_txt2 = 'You have a nice chat with Sergey for fifteen minutes.';
                                }
                                // TODO-QSP: dynamic text: <<$temp_txt2>>
                                scene.text(`${((s as any).temp_txt2 ?? '')}`);
                                // TODO-QSP: end & !! --- serge_textb2 ---
                                if (String((s as any).locArgs?.[1] ?? '') === 'serge_tv_rand') {
                                  (s as any).temp_rand = (Math.floor(Math.random() * 12) + 0);
                                  if ((!((s as any).temp_rand ?? 0))) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvdance.mp4"></video></center>The TV currently shows a new music video, where mostly undressed girls shake their butts lewdly.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 1) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="750" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo1.mp4"></video></center>The TV currently shows a documentary about animals.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 2) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="746" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo2.mp4"></video></center>The TV currently shows a documentary about the world.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 3) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="746" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo3.mp4"></video></center>The TV currently shows a documentary about nature.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 4) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo4.mp4"></video></center>The TV currently shows a documentary film about the ocean.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 5) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="750" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino1.mp4"></video></center>The TV currently shows a popular Soviet comedy show.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 6) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="746" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino2.mp4"></video></center>The TV currently shows an imported blockbuster movie.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 7) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="772" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino3.mp4"></video></center>The TV currently shows an old western movie.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 8) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult1.mp4"></video></center>The TV currently shows a new foreign cartoon. Luckily the audio is still in Russian!';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 9) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="746" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult2.mp4"></video></center>The TV currently shows an old cartoon.';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 10) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport1.mp4"></video></center>The TV currently shows reruns of the latest UFC fight. How barbaric…';
                                  }
                                  if (((s as any).temp_rand ?? 0) === 11) {
                                    (s as any).serge_tv_rand = '<center><video autoplay loop width="746" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport2.mp4"></video></center>The TV currently shows a football match. You\'re fairly sure it\'s not live.';
                                  }
                                  // TODO-QSP: dynamic text: <<$serge_tv_rand>>
                                  scene.text(`${((s as any).serge_tv_rand ?? '')}`);
                                  // TODO-QSP: end & !! --- serge_tv_rand ---
                                  // TODO-QSP: end & !! --- hide ---
                                }
                              }
                            }
                            scene.actions([
                              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
    scene.text('You want more than that! You stand up and defiantly look Sergey in the eyes while you take off your clothes one piece at a time, offering him a sweet smile when you\'re completely naked. Your impressive breasts with protruding nipples have his full attention, and gently move up and down with your breathing.');
    // TODO-QSP: dynamic text: "You''re such a horny little minx, <<$pcs_nickname>>! Do you think this is norma...
    scene.text(`"You're such a horny little minx, ${((st as any).pcs_nickname ?? '')}! Do you think this is normal, teasing older men with your naked body like that?" Sergey asks intently, quickly closing the distance between you and him.`);
    scene.text('"Maybe not, uncle Sergey, but don\'t you want to fuck me? Don\'t you want to fuck my young little pussy and make me do whatever you want me to do?" you taunt him in a sweet voice, slightly spreading your legs for him while you talk.');
    scene.text('Sergey laughs and pushes you down onto the bed, making you shriek with laughter as you fly through the air. He immediately pounces on top of you and grunts: "That\'s exactly what I\'m going to do!"');
    scene.text('Sergey thrusts his cock to the hilt inside your wet pussy, making you cry out at the sudden intrusion. Ouch, it hurts if he\'s so rough with you!');
    scene.text('"Uncle Sergey, pl-aaaah!" you try to ask him to go slower, but get cut off when he fucks you violently. You silently scold yourself for telling Sergey to do whatever he wants to you… you weren\'t expecting this!');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog` + (Math.floor(Math.random() * 12) + 1) + '.mp4"></video></center>');
    scene.text('While you\'re lying on his bad, panting and mewling underneath him, Sergey suddenly gets up and flips you over with one fell swoop. He puts his arms underneath your body, making you sit on your hands and knees.');
    scene.text('He immediately brings his cock back to your welcoming pussy and slams it all the way back in, and begins to fuck you from behind. Every once in a while he lands a hard slap on your buttocks, making you yelp with pain.');
    // TODO-QSP: dynamic text: "I love the way you squeeze your vaginal walls around my cock whenever I slap yo...
    scene.text(`"I love the way you squeeze your vaginal walls around my cock whenever I slap you, ${((st as any).pcs_nickname ?? '')}! You're such a good little whore!" Sergey grins proudly, right before landing several ringing slaps on your exposed butt.`);
    scene.text('"Uncle Sergey, please slow down! You-aaaahh!!" you try again, but he interrupts your train of thought by slapping and fucking you even harder.');
    // TODO-QSP: dynamic text: "Shut up, <<$pcs_nickname>>. You should''ve thought of that before you came in h...
    scene.text(`"Shut up, ${((st as any).pcs_nickname ?? '')}. You should've thought of that before you came in here, acting like a whore! You wanted me to make you do whatever I want, did you not?" he sternly reminds you, not letting up.`);
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    // TODO-QSP: dynamic text: After a few more minutes of rough sex, Sergey stands up and grabs a fistful of y...
    scene.text(`After a few more minutes of rough sex, Sergey stands up and grabs a fistful of your ${((st as any).pcs_haircolor ?? '')} hair, guiding you to the ground before him. Despite still being slightly out of breath, you automatically close your lips around his cock and suck him off enthusiastically, like any good little slut would.`);
    scene.text('"Look at me", Sergey orders. When you do, he smirks and lets go of your hair, and lets you bob your head up and down. That defeated look in your eyes, the way you obediently closed your lips around his cock without him even having to tell you to… he has you exactly where he wants you. It\'s not easy to keep looking him in the eye and suck him off at the same time, but you do your best.');
    scene.text('"You like having a hard dick to suck on! Don\'t you, whore?" he smiles benevolently. When you try to pull back so you can answer, he puts his hand behind your head and keeps you there: "I didn\'t say you could stop! Just blink if it\'s true."');
    scene.text('With a deep red hue of shame on your cheeks you flutter your eyelashes at him. He\'s right! You\'ve been a good girl for most of your life, but this… this feels so much better!');
    scene.text('Exactly at that moment, Sergey groans loudly and a powerful jet of his sperm hits the back of your mouth. After a few spurts he pulls his dick out, and deposits the rest all over your embarrassed face. "That\'s a nice look for you, slut! I reckon I\'ll be seeing you like that more often…" he laughs, and he lets his tired body crash down onto his bed. Then he directs his attention back at the TV, no longer paying any attention to you.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                            ]);
                          }
                          scene.actions([
                            { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog` + (Math.floor(Math.random() * 12) + 1) + '.mp4"></video></center>');
    scene.text('"Get down on the bed with your back to me and spread your legs. I\'m going to fuck you now", Sergey says matter-of-factly. He looks at your face amusedly, while you gasp for breath and wipe the worst of the saliva off your chin. He\'s way too rough with you! Nevertheless, if this is how he treats you when you comply, you don\'t want to know what he\'s like when you don\'t!');
    scene.text('You meekly get down on your hands and knees and look back at him, just a tad scared of him.');
    scene.text('"Don\'t look at me like that, slut. You knew what you were getting into when you got into my bed", he snarls. "Now spread your legs!"');
    scene.text('You spread your legs further, your cheeks burning with shame. Here you are, on the bed of this older man you tried to seduce, offering yourself like a bitch when he tells you to. And yet, you feel a tinge of desire as well!');
    scene.text('Before you know it, Sergey is between your legs and intently rubs the head of his cock against your tender pussy lips. Then he pushes down firmly, sinking it into you.');
    // TODO-QSP: dynamic text: His cock is fairly large, and you squeal when he shoves it in further and furthe...
    scene.text(`His cock is fairly large, and you squeal when he shoves it in further and further despite your discomfort. "You're beautiful when you're suffering, ${((st as any).pcs_nickname ?? '')}", he grunts, and begins to fuck you.`);
    scene.text('You bite down on your lip to stifle your groans, but can\'t stay quiet when Sergey picks up the pace more and more and hammers his large cock inside your cunt. Your boobs bounce helplessly whenever his hips meet yours, and you cry out and mewl with every thrust.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
    scene.text('Sergey suddenly pulls out of you and orders: "Turn around."');
    scene.text('You catch your breath again and take your time doing as he says, trembling at the thought of what happens next.');
    scene.text('Sergey roughly pulls your legs apart and buries two fingers inside your wet snatch, fingering you. Hoarse moans escape your lips when he does, and to your shame you have to admit - this is starting to feel good!');
    scene.text('He recognizes that look in your eyes as well, and you feel embarrassed. He must think you\'re some cheap slut!');
    scene.text('Next he slides his dick in and begins to fucks you again, just as roughly as before. You groan loudly, but not from pain or humiliation… it\'s lust and pleasure! Your legs are spread wide and Sergey\'s hand is over your throat, lightly squeezing you while he fucks you hard. Not enough to make you feel scared, but definitely enough to understand that you belong to this man for now, and he will do whatever he wants with you before you leave this room.');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
    scene.text('"Uncle Sergey… please… more…" you moan weakly, unable to help yourself.');
    scene.text('Sergey laughs and shakes his head: "Some other day, slut. I\'m too close to last longer now, come here!"');
    scene.text('He pulls you up by your hair again and guides your face to his cock, almost immediately blasting his load all over your face. He groans loudly when he orgasms, and you\'d swear you can actually see his balls contract a bit when the jets of jizz come out.');
    scene.text('"Lick!" he orders you, and you obediently lick the remains off his cock before he finally lets go of your hair. He gives you a dismissive but satisfied nod and returns to watching TV, no longer interested in you.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                          ]);
                        }
                        scene.actions([
                          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/oral` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
    scene.text('His erect cock was already dangling out of his pants, and you gently close your fingers around it when he brings it closer to you. It\'s so rigid and firm… so masculine… you can\'t wait to close your lips around it!');
    scene.text('You feel it throb between your fingers as you caress it all over, also running your fingers over his balls and pulling his foreskin back to expose the head.');
    // TODO-QSP: dynamic text: When you close your <<$pc_desc[''lips'']>> lips around the head of his cock, you...
    scene.text(`When you close your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips around the head of his cock, you feel Sergey's body shudder with delight - he was clearly looking forward to this as much as you were!`);
    scene.text('Not about to let him down, you do your best to give him the best blowjob he\'s ever had. You sometimes let it slide out of your mouth to lick across the whole length of his shaft but always quickly take it back in. You manage to take in just over half his length easily.');
    // TODO-QSP: dynamic text: "Do you think you can take it all, <<$pcs_nickname>>?" he asks. You never take h...
    scene.text(`"Do you think you can take it all, ${((st as any).pcs_nickname ?? '')}?" he asks. You never take his cock out of your mouth but nod, while you look him in the eye. "Go ahead, try", he encourages you.`);
    scene.text('You push your head forward, forcing yourself to take more and more of his length down your throat. It\'s not easy but from the proud grin Sergey is giving you, you know you must be doing a great job! The room is filled with the sounds of you lewdly gagging and slurping on his cock, and Sergey lovingly brushes your hair with his hand when you come up for air again. "You\'re such a sweet little slut, I won\'t last long if you keep that up!"');
    qspCall(st, 'boyStat', 'A112');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/dog` + (Math.floor(Math.random() * 11) + 1) + '.mp4"></video></center>');
    scene.text('You don\'t want him to finish already! You quickly get onto the bed on your hands and knees and wiggle your ass at him seductively.');
    scene.text('Sergey positions the head of his dick against your wet folds and immediately drives his whole length inside you.');
    scene.text('You cry out in surprise and grab a few handfuls of his bed sheets, while Sergey begins to pound you from behind. You feel ecstatic! You want him badly!');
    scene.text('You feel like you\'re slowly losing your mind when Sergey softly kisses and bites your neck. He\'s tender with you on the one hand, but at the same time fucking your wet cunt mercilessly from behind, sometimes slapping your ass cheeks.');
    // TODO-QSP: dynamic text: With one hand wrapped around your throat, he grunts: "<<$pcs_nickname>>, you''re...
    scene.text(`With one hand wrapped around your throat, he grunts: "${((st as any).pcs_nickname ?? '')}, you're wonderful…" and gently kisses your neck again.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/miss` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
    scene.text('Then Sergey pulls away for you and tells you to roll over and lie on your back. You quickly do as he says and part your labia with your fingertips, inviting him to thrust his dick back in you.');
    scene.text('Sergey quickly enters you again and begins to fuck you in a slow but steady pace. You\'re so wet, your pussy is making sopping sounds every time he slams his cock inside you! Unable to control yourself, you automatically match his thrusts and bump your hips forward to take him deeper inside you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cow` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    // TODO-QSP: dynamic text: Sergey then wearily flops down onto the bed and gasps: "Damn… you''re wearing me...
    scene.text(`Sergey then wearily flops down onto the bed and gasps: "Damn… you're wearing me out, ${((st as any).pcs_nickname ?? '')}! How about you ride me for a while?"`);
    scene.text('You eagerly mount Sergey and guide his cock back into your pussy, giving him a sweet wink and a kiss on his cheek as you do.');
    scene.text('In full control of the tempo now, you can decide exactly how fast and how deep you take his cock inside you! Sergey absent-mindedly massages your boobs and sometimes pinches your nipples while you skewer yourself onto his stiff rod over and over, trying out new techniques and squeezing your vaginal walls tightly.');
    scene.text('When Sergey\'s breathing becomes shorter and raspier, you realize he must be close to his orgasm! You don\'t want him to cum inside you though…');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
    scene.text('You quickly stand up and kneel down next to the bed, aiming his cock at your face. Mere seconds later he erupts, shooting several ropes of his hot sperm all over your face. You smile happily at Sergey and try to catch it inside your mouth, licking some of the remnants off the head of his dick when he\'s finally done.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
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
                        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/dog` + (Math.floor(Math.random() * 3) + 10) + '.mp4"></video></center>');
    scene.text('Then Sergey stops and just relaxes on the bed. What is he doing!?');
    scene.text('He notices your nervous fidgeting and smirks: "What\'s wrong, slut? Do you need me to fuck you?"');
    scene.text('"Yes, yes!" you groan insistently.');
    scene.text('"Beg for it. Beg for me to fuck you in the ass, and I\'ll do it," he grins.');
    scene.text('"Please, uncle Sergey! Please fuck me, I\'m begging you!" you plead. You left out the part about your ass on purpose, but he caught that. He\'s just lying there with an amused look on his face, waiting for you to say it.');
    scene.text('"Please… fuck my ass, uncle Sergey," you whisper.');
    scene.text('"Are you sure you\'re ready?" he smiles. "Actually, don\'t answer that. Just show me."');
    scene.text('You turn around obediently and stick out your ass, and he immediately gets up and puts his hands on you. "Hmm, already warmed up a bit, but it could use some more…" he ponders before he spits on your anus a few times and fingers you for a little while.');
    scene.text('Then he pushes you down onto the bed and mounts you from behind, guiding his cock to your puckered sphincter. You silently thank him for the extra preparations; it\'s not all that painful when he enters you.');
    scene.text('You can tell that he got quite worked up over making you beg, and he immediately begins to pound your ass enthusiastically. You shout and cry, but at this point, he no longer cares about your feelings. He did his part in preparing you; now he\'s reaping his rewards.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/miss` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
    scene.text('Then suddenly he pulls out of you, lifts you up, and puts you down on your back. He immediately leans over your body and begins to kiss you everywhere. He\'s kissing your breasts, your hands, your stomach, your hips… you moan softly, thoroughly confused by the sudden change of course. One minute he was fucking your ass like he owned it, and now… he\'s pampering you?');
    scene.text('You begin to come to your senses again, just as Sergey kisses you full on your mouth while he leads his cock to your wet pussy lips. He gently presses his cock against them, guiding himself inside you. You have to fight back the urge to start bucking your hips against him, understanding that he\'s trying to please you as well as himself.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'kiss', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cow` + (Math.floor(Math.random() * 3) + 4) + '.mp4"></video></center>');
    scene.text('After fucking you caringly for a few minutes, he rolls off you and lies on his back next to you. He gives you a peck on your cheek and whispers: "If you want to fuck me on your terms, now is your chance… it\'s all yours."');
    scene.text('You eagerly nod and mount him, quickly guiding his cock back to the entrance of your pussy. It feels quite slick from your juices already. Slowly grinding your hips against his pelvis, you begin to ride Sergey. Slowly and gently… you\'re going to savor this moment, you tell yourself.');
    scene.text('Your breasts dangle in front of Sergey\'s face as you ride him, and he puts an arm around your body to pull you towards him. He takes one of your nipples in his mouth and softly bites it while you ride him. Meanwhile, his hands found their way to your buttocks, and slowly but surely Sergey demands more control again, guiding your buttocks up and down while you ride him.');
    scene.text('You were already quite close to orgasming, and his sudden thrusts push you over the edge, making your whole body tremble. You cry out loud and feel your body go limp, resting on his chest while you try to catch your breath.');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Your pussy convulsing around his cock, paired with your trembling body, makes Sergey realize perfectly well you\'re orgasming. He simply embraces you while he lets you ride it out, planting a gentle kiss on your forehead.';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
    scene.text('Wow, that felt so good! You had no idea Sergey could be such a gentleman.');
    scene.text('When Sergey is also close to orgasming, you quickly get off him and lick his cock slowly, tasting yourself on his dick. Mmmm, delicious as always…');
    scene.text('It doesn\'t take long for Sergey to cum, shooting his load all over your face like he likes to do. When he\'s finished, you smile at him with his cum still all over your face, and whisper: "Thank you, uncle Sergey… that was amazing!"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
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
                      { label: 'Lie down on the bed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/miss` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
    scene.text('Sergey has you spread your legs wide, and rams nearly the full length of his dick inside you in one fluent motion. Instinctively, you wrap your legs around his hips, which he sees as an encouragement to get even deeper inside you.');
    scene.text('You wrap your arms around his strong torso as well, and let him hammer away at your pussy. Then you squeal: he\'s biting your earlobe!');
    scene.text('Your boobs are squished between your body and his, as Sergey rests his body on top of yours and focuses everything on fucking your cunt as hard as he can. Despite his size, it\'s not uncomfortable at all… it feels heavenly! Sergey gets it, this is how you fuck a woman!');
    scene.text('You moan and mewl in pleasure, not even caring if anyone can hear you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/dog` + (Math.floor(Math.random() * 11) + 1) + '.mp4"></video></center>');
    scene.text('Then Sergey pulls out of you and deftly flips you over, making you sit on your hands and knees on the bed. He immediately slides his cock back inside your by now very wet slit, and has a satisfied grin on his face when he notices how readily your pussy accepts him.');
    // TODO-QSP: dynamic text: "You like this, don''t you, <<$pcs_nickname>>? You like it when a real man treat...
    scene.text(`"You like this, don't you, ${((st as any).pcs_nickname ?? '')}? You like it when a real man treats you like a slut, that's why you kept teasing me," he growls in your ear while he begins to fuck you again, just as intensely as before.`);
    scene.text('You just slam your hips back against his as a response, not wanting to say it out loud… but yes. This is why you kept teasing him.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
    scene.text('When he\'s about to cum, you quickly drop to your knees before him and take the full length of his cock down your throat, trying to please Sergey to the best of your abilities.');
    // TODO-QSP: dynamic text: Sergey laughs and strokes your <<$pcs_haircolor>> hair gently, amazed by how eag...
    scene.text(`Sergey laughs and strokes your ${((st as any).pcs_haircolor ?? '')} hair gently, amazed by how eager you suddenly are. After he lets you suck him for a little while, he suddenly pulls out and his dick erupts over your face, shooting hot ropes of semen all over you.`);
    // TODO-QSP: dynamic text: Then he suddenly looks exhausted, and he lets himself fall back down onto his be...
    scene.text(`Then he suddenly looks exhausted, and he lets himself fall back down onto his bed. When you want to join him, he smiles at you and points at his chin, saying: "You're a bit dirty here, ${((st as any).pcs_nickname ?? '')}. Maybe you should go wash up before you come back to bed." With a grin he adds: "I'll save some room for you. You're a sweet girl, I like having you near me…"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/dog` + (Math.floor(Math.random() * 11) + 1) + '.mp4"></video></center>');
    scene.text('After you suck him off for a few minutes, you decide you want more. You pull away from him and get on your hands and knees, wagging your ass at him teasingly. Sergey is a bit taken aback at first, not expecting that from you. He quickly recovers though and grins: "So… you want to get fucked, girl?"');
    scene.text('"Yes, uncle Sergey," you reply in a sweet voice. "I want to get fucked… by you."');
    scene.text('"You know I don\'t play nice. Are you sure that\'s what you want?" Sergey demands.');
    scene.text('When you bite your lip lewdly and nod, Sergey wordlessly guides his cock to your cunt. He slowly penetrates you until most of his length is in.');
    scene.text('He takes it easy on you at first, but soon forgets about your comfort and fucks you harder and rougher, pulling your hair back and slapping your ass while he\'s railing you with the full length of his cock. You moan and cry loudly, not caring if anyone can hear it. Wow, he wasn\'t kidding when he said he doesn\'t play nice…');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cow8.mp4');
    // TODO-QSP: dynamic text: Sergey grabs you in his arms and turns you over, holding you over his chest in h...
    scene.text(`Sergey grabs you in his arms and turns you over, holding you over his chest in his strong arms. "You're going to get the fucking of a lifetime, ${((st as any).pcs_nickname ?? '')}! I hope you're ready," he grins.`);
    scene.text('You meekly nod and help him by guiding his erection back inside you, and he begins to fuck your pussy furiously. You can feel his hot breath on your back… he sounds so manly!');
    scene.text('Suddenly you cry out when you feel a stinging pain in your ass; his cock must\'ve slipped out of you and entered the wrong hole!');
    scene.text('If Sergey noticed, he\'s definitely doing a good job of hiding it since he just keeps fucking you like he has the whole time. Ouch, he\'s stretching you out so much!');
    scene.text('Still, being in this position, being used by Sergey as a fucktoy is hot! You can\'t help but feel aroused despite the rough assfucking you\'re getting, and before you know it you\'re actually not feeling the pain as readily anymore. It\'s still there, but… not as bad. In a way, it actually hurts really good!');
    scene.text('You\'re very loud now, crying and moaning like a whore while you let Sergey use you as he sees fit. You didn\'t think getting fucked in your ass like this could feel good… but it does!');
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/cum` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
    scene.text('Suddenly Sergey pulls out of you and pushes you off him to the side.');
    scene.text('"I don\'t want to get anyone pregnant, so the only way I cum after having sex is on a woman\'s face. Better safe than sorry," he grins.');
    scene.text('You were about to mention that you can\'t get pregnant from anal sex either when Sergey puts you down on your knees before him and begins to jerk off furiously. You wince when you were moving down to the ground, and you notice a naughty glimmer in his eyes; he definitely knew he was fucking your ass! That bastard!');
    // TODO-QSP: dynamic text: Within seconds, his hot jizz lands all over your face, while he roars like a lio...
    scene.text(`Within seconds, his hot jizz lands all over your face, while he roars like a lion. "Oh yea… that's a good little slut! You're a good fuck, ${((st as any).pcs_nickname ?? '')}," Sergey praises you when he's finished. "Go on, clean yourself up. You're not getting back in bed like that."`);
    scene.text('You wince when you get up. Wow… he really wasn\'t kidding when he said he wasn\'t going to be nice!');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Continue', goto: ['Serge_Shulgin', 'hide', 'sleep_sex_lick_event1'] },
                ]);
              }
              scene.actions([
                { label: 'Continue', goto: ['Serge_Shulgin', 'hide', 'sleep_sex_rought_event' + qspUntranslated(s, "rand(1", { location: "Serge_Shulgin" }), 'qspUntranslated(s, "2)", { location: "Serge_Shulgin" })'] },
              ]);
            }
            scene.actions([
              { label: 'Continue', goto: ['Serge_Shulgin', 'hide', 'sleep_sex_oral_event' + qspUntranslated(s, "rand(1", { location: "Serge_Shulgin" }), 'qspUntranslated(s, "3)", { location: "Serge_Shulgin" })'] },
            ]);
          }
          scene.actions([
            { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
          ]);
        }
        scene.actions([
          { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).serge_sleep_sex_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).serge_sleep_sex_count = 2;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'rep':
      enterRep(s, scene);
      break;
    case 'tv':
      enterTv(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'hide':
      enterHide(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Serge_Shulgin: LocationDef = {
  name: 'Serge_Shulgin',
  title: 'You don\'t really know Sergey at all.',
  region: 'other',
  enter: enter,
};
