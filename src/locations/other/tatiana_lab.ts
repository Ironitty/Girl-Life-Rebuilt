import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'start');
  if (((s as any).locArgs?.[1] ?? 0) !== 'no_time') {
    (s as any).minut = ((s as any).minut ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Myrkov Investigative Agency.</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('The Myrkov Investigative Agency is the front for Tatiana\'s laboratory and business in St Petersburg. It also provides a safe haven for council members when needed. You look at around the room and see a haphazard mishmash of modern scientific equipment and magical paraphernalia. On the walls are strange runes that sometimes flicker with a strange internal light causing Tatiana briefly to glance at them.');
  if (((s as any).tatiana_spell_reminder ?? 0) < 14) {
    (s as any).tatiana_spell_reminder = 14;
  }
  if (((s as any).tatiana_succubus_reminder ?? 0) < 14) {
    (s as any).tatiana_succubus_reminder = 14;
  }
  if (((s as any).tatiana_mission_reminder ?? 0) < 14) {
    (s as any).tatiana_mission_reminder = 14;
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    if ((!((s as any).sucbypass ?? 0))) {
      if (((s as any).sucpcinfo ?? 0) < 2) {
        scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'suctraining'] }]);
      } else {
        if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3  &&  ((s as any).sctrainprep ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'suctraining'] }]);
        }
      }
    } else {
      (s as any).sucbypass = 0;
    }
  }
  if (((s as any).judosparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Gustav, mutant - power over 9000)', handler: (st: GameState) => {
    (s as any).judosparday = ((s as any).daystart ?? 0);
    qspCall(s, 'npcStat', 'A175');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'gustav');
  }, goto: ['fight', 'start'] },
    ]);
  }
  if (((s as any).tatianasparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Tatiana, magician - body magic)', handler: (st: GameState) => {
    (s as any).tatianasparday = ((s as any).daystart ?? 0);
    qspCall(s, 'npcStat', 'A176');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'tatiana');
  }, goto: ['fight', 'start'] },
    ]);
  }
  (s as any).TatianaMissionTotal = 3;
  if (((s as any).tobiQW ?? 0) > 0  &&  ((s as any).TatianaMissionDay ?? 0) + 30 < ((s as any).daystart ?? 0)  &&  ((s as any).TatianaMissionQW ?? 0) < ((s as any).TatianaMissionTotal ?? 0)) {
    scene.text('You have a feeling Tatiana might want to talk to you about something…');
    scene.actions([
      { label: 'Ask Tatiana what she wants', goto: ['tatiana_lab', 'missions'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Train with Gustav', goto: ['tatiana_lab', 'Gustav'] },
    { label: 'Talk with Tatiana', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterGustav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'Gustav');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Gustav</b></center>');
  scene.img('images/characters/city/jugo/jugopre.jpg');
  scene.text('Gustav is sitting on floor and staring off into space.');
  if (((s as any).gustavday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pcs_energy ?? 0) >= 20) {
    scene.actions([
      { label: 'Develop strength (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'stren');
  } },
      { label: 'Develop agility (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'agil');
  } },
      { label: 'Develop reactions (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'react');
  } },
      { label: 'Develop endurance (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'vital');
  } },
    ]);
  } else {
    if (((s as any).gustavday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Develop strength (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Develop agility (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Develop reactions (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Develop endurance (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterGustavDevelop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 60, ((s as any).locArgs?.[1] ?? 0));
  (s as any).gustavday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('You do exercises under the guidance of Gustav.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['tatiana_lab', 'Gustav'] },
  ]);
  scene.build();
}

function enterBodyModActuate(s: GameState, scene: SceneBuilder): void {
  (s as any).bodyModMana = qspUntranslated(s, "ARGS[1]", { location: "tatiana_lab" });
  (s as any).bodyModTime = qspUntranslated(s, "ARGS[2]", { location: "tatiana_lab" });
  (s as any).bodyModVal = qspUntranslated(s, "ARGS[4]", { location: "tatiana_lab" });
  if (((s as any).pcs_mana ?? 0) >= ((s as any).bodyModMana ?? 0)) {
    // TODO-QSP: dynamic "<<$bodyModStat>> = <<bodyModVal>>"
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (((s as any).bodyModMana ?? 0));
    qspCall(s, 'arousal', 'flash', (-30));
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).bodyModTime ?? 0));
    ((s as any).pain ?? {})[String((s as any).bodyModPain ?? 0)] = 100;
    qspCall(s, 'body', 'UpdateBodyMeasurement');
    qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
    qspCall(s, 'body', 'Update_Appearance');
    qspCall(s, 'body', 'UpdateBodyImage');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'tatiana_lab', 'BodyModded', $bodyModType, $bodyModDesc
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodyModValues(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'hair_color') {
    (s as any).bodyModMana = 500;
    (s as any).bodyModTime = 60;
    ((s as any).bodyModDesc ?? {})[0] = 'black';
    ((s as any).bodymodValue ?? {})[0] = 0;
    ((s as any).bodyModDesc ?? {})[1] = 'brown';
    ((s as any).bodymodValue ?? {})[1] = 1;
    ((s as any).bodyModDesc ?? {})[2] = 'red';
    ((s as any).bodymodValue ?? {})[2] = 2;
    ((s as any).bodyModDesc ?? {})[3] = 'blonde';
    ((s as any).bodymodValue ?? {})[3] = 3;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'hair_length') {
      (s as any).bodyModMana = 200;
      (s as any).bodyModTime = 120;
      ((s as any).bodyModDesc ?? {})[0] = 'extremely short';
      ((s as any).bodymodValue ?? {})[0] = 5;
      ((s as any).bodyModDesc ?? {})[1] = 'pixie-cut';
      ((s as any).bodymodValue ?? {})[1] = 31;
      ((s as any).bodyModDesc ?? {})[2] = 'medium';
      ((s as any).bodymodValue ?? {})[2] = 81;
      ((s as any).bodyModDesc ?? {})[3] = 'shoulder-length';
      ((s as any).bodymodValue ?? {})[3] = 161;
      ((s as any).bodyModDesc ?? {})[4] = 'long';
      ((s as any).bodymodValue ?? {})[4] = 261;
      ((s as any).bodyModDesc ?? {})[5] = 'very long';
      ((s as any).bodymodValue ?? {})[5] = 401;
      ((s as any).bodyModDesc ?? {})[6] = 'extremely long';
      ((s as any).bodymodValue ?? {})[6] = 601;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'eye_color') {
        (s as any).bodyModMana = 300;
        (s as any).bodyModTime = 120;
        ((s as any).bodyModDesc ?? {})[0] = 'brown';
        ((s as any).bodymodValue ?? {})[0] = 0;
        ((s as any).bodyModDesc ?? {})[1] = 'grey';
        ((s as any).bodymodValue ?? {})[1] = 1;
        ((s as any).bodyModDesc ?? {})[2] = 'green';
        ((s as any).bodymodValue ?? {})[2] = 2;
        ((s as any).bodyModDesc ?? {})[3] = 'blue';
        ((s as any).bodymodValue ?? {})[3] = 3;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'eye_lashes') {
          (s as any).bodyModMana = 100;
          (s as any).bodyModTime = 30;
          ((s as any).bodyModDesc ?? {})[0] = 'short';
          ((s as any).bodymodValue ?? {})[0] = 0;
          ((s as any).bodyModDesc ?? {})[1] = 'average';
          ((s as any).bodymodValue ?? {})[1] = 1;
          ((s as any).bodyModDesc ?? {})[2] = 'long';
          ((s as any).bodymodValue ?? {})[2] = 2;
          ((s as any).bodyModDesc ?? {})[3] = 'lavish';
          ((s as any).bodymodValue ?? {})[3] = 3;
          ((s as any).bodyModDesc ?? {})[4] = 'show-stealing';
          ((s as any).bodymodValue ?? {})[4] = 4;
          ((s as any).bodyModDesc ?? {})[5] = 'long, jewel-dusted';
          ((s as any).bodymodValue ?? {})[5] = 5;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'lip_size') {
            (s as any).bodyModMana = 300;
            (s as any).bodyModTime = 120;
            ((s as any).bodyModDesc ?? {})[0] = 'thin';
            ((s as any).bodymodValue ?? {})[0] = 0;
            ((s as any).bodyModDesc ?? {})[1] = 'normal';
            ((s as any).bodymodValue ?? {})[1] = 1;
            ((s as any).bodyModDesc ?? {})[2] = 'plump';
            ((s as any).bodymodValue ?? {})[2] = 2;
            ((s as any).bodyModDesc ?? {})[3] = 'pouty';
            ((s as any).bodymodValue ?? {})[3] = 3;
            ((s as any).bodyModDesc ?? {})[4] = 'pillowy';
            ((s as any).bodymodValue ?? {})[4] = 4;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'breast_size') {
              (s as any).bodyModMana = 1000;
              (s as any).bodyModTime = 240;
              ((s as any).bodyModDesc ?? {})[0] = 'AA';
              ((s as any).bodymodValue ?? {})[0] = 3 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[1] = 'A';
              ((s as any).bodymodValue ?? {})[1] = 8 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[2] = 'B';
              ((s as any).bodymodValue ?? {})[2] = 13 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[3] = 'C';
              ((s as any).bodymodValue ?? {})[3] = 18 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[4] = 'D';
              ((s as any).bodymodValue ?? {})[4] = 23 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[5] = 'E';
              ((s as any).bodymodValue ?? {})[5] = 28 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[6] = 'F';
              ((s as any).bodymodValue ?? {})[6] = 33 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[7] = 'G';
              ((s as any).bodymodValue ?? {})[7] = 38 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[8] = 'H';
              ((s as any).bodymodValue ?? {})[8] = 43 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[9] = 'I';
              ((s as any).bodymodValue ?? {})[9] = 48 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[10] = 'J';
              ((s as any).bodymodValue ?? {})[10] = 53 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
              ((s as any).bodyModDesc ?? {})[11] = 'K';
              ((s as any).bodymodValue ?? {})[11] = 58 - (((s as any).pcs_cupsize ?? 0) - ((s as any).bodyVars ?? {})?.['bust_magic']);
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'skin') {
                (s as any).bodyModMana = 1000;
                (s as any).bodyModTime = 240;
                ((s as any).bodyModDesc ?? {})[0] = 'clear';
                ((s as any).bodymodValue ?? {})[0] = 1000;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'virgin') {
                  (s as any).bodyModMana = 1000;
                  (s as any).bodyModTime = 120;
                  ((s as any).bodyModDesc ?? {})[0] = 'renewed';
                  ((s as any).bodymodValue ?? {})[0] = 20;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'silicone') {
                    (s as any).bodyModMana = 1000;
                    (s as any).bodyModTime = 240;
                    ((s as any).bodyModDesc ?? {})[0] = 'natural again';
                    ((s as any).bodymodValue ?? {})[0] = 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterListBuilder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'tatiana_lab', 'BodyModValues', ((s as any).locArgs?.[1] ?? 0));
  if (Object.keys((s as any).bodyModDesc ?? {}).length > 0) {
  }
  if (Object.keys((s as any).bodyModDesc ?? {}).length > 0) {
    (s as any).i = 0;
    // TODO-QSP: :BodyModLoop
    (s as any).bodymodValueX = ((s as any).bodymodValue ?? 0)?.[String((s as any).i ?? 0)];
    // TODO-QSP: $ListStr += "<a href=""EXEC:gs 'tatiana_lab', 'BodyModActuate', <<bodyModMana>>, <<bodyModTime>>, '<...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).bodyModDesc ?? {}).length) {
      // TODO-QSP: $ListStr += '<br>'
      // TODO-QSP: jump 'BodyModLoop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodyModded(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: "You feel a bit drained and tingly all over. You look in the mirror."
  // TODO-QSP: "Your <<$ARGS[1]>> is now <<$ARGS[2]>>."
  // TODO-QSP: """Thanks Tatiana!"""
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank you', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterTatiana(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'Tatiana');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tatiana</b></center>');
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  scene.text('Tatiana is always studying something.');
  if (((s as any).succubusflag ?? 0) === 1) {
    if (((s as any).tatisucsex ?? 0) > 0  &&  ((s as any).sucinfoday ?? 0) !== 0  &&  ((s as any).sucinfoday ?? 0) <= ((s as any).daystart ?? 0)) {
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>!
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}!`);
      scene.text('"I\'ve gotten some more information about Succubae!"');
      if (((s as any).sucpcinfo ?? 0) === 4  &&  ((s as any).succublvl ?? 0) >= 2) {
        scene.text('"I heard from one of my mage contacts, in Sydney, Australia of all places, and he passed on some more details."');
        (s as any).sucpcinfo = 5;
        (s as any).sucinfoday = ((s as any).daystart ?? 0) + 10 + (Math.floor(Math.random() * 8) + 0);
        return;
        scene.actions([
          { label: 'Ask her to tell you', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', 'tatianaask', 1
  } },
        ]);
      } else {
        if (((s as any).sucpcinfo ?? 0) === 5) {
          scene.text('"I heard from an old friend of mine who is now living in Morocco and also has a Succubus for a lover. She said that after they had been together for some time, they discovered that with her help, her Succubus lover learned something new."');
          (s as any).sucpcinfo = 6;
          (s as any).sucinfoday = ((s as any).daystart ?? 0) + 17 + (Math.floor(Math.random() * 8) + 0);
          return;
          scene.actions([
            { label: 'Ask her to tell you', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', 'tatianaask', 2
  } },
          ]);
        } else {
          if (((s as any).sucpcinfo ?? 0) === 6) {
            scene.text('"I heard from one of my contacts. He\'s living in Las Vegas in America, which, apparently, is the Succubus capital of North America, and he passed along two pieces of information."');
            (s as any).sucpcinfo = 7;
            (s as any).sucinfoday = ((s as any).daystart ?? 0) + 9000000;
            return;
            scene.actions([
              { label: 'Ask her to tell you', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', 'tatianaask', 3
  } },
            ]);
          }
        }
      }
    }
    if (((s as any).tatisucsex ?? 0) !== 0  &&  ((s as any).tatisucsexask ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: act 'Ask if she wants to have sex': tatianasucsexask = daystart
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'Tatianasucsexask'] }]);
    }
    if (((s as any).sucpcinfo ?? 0) >= 4) {
      // TODO-QSP: act 'Ask her about Succubae': gt 'tatiana_lab', 'Tatianasuctalk'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0) {
    scene.actions([
      { label: 'Ask for help with your appearance', handler: (st: GameState) => {
    scene.text('"Tatiana, I\'m having problems with my body image. I\'m not happy and was hoping that you might be able to help me."');
    scene.text('"It\'s possible, but I will have to draw on your magical energy. It will cost some of your mana to perform a spell."');
    scene.text('"Also, this will be painful. The magic will force your flesh into new shapes."');
    // TODO-QSP: <table CELLPADDING = '5'>
    // TODO-QSP: <tr>
    // TODO-QSP: <td VALIGN='top'><<$SkinTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$VirginTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$SiliconeTab>></td>
    // TODO-QSP: </tr>
    // TODO-QSP: <tr>
    // TODO-QSP: <td VALIGN='top'><<$HairColorTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$EyeColorTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$BreastTab>></td>
    // TODO-QSP: </tr>
    // TODO-QSP: <tr>
    // TODO-QSP: <td VALIGN='top'><<$HairLengthTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$EyeLashTab>></td>
    // TODO-QSP: <td VALIGN='top'><<$LipTab>></td>
    // TODO-QSP: </tr>
    // TODO-QSP: </table>
    // TODO-QSP: </center>"
    scene.actions([
      { label: 'No, no, I\'ve changed my mind. Thank you.', goto: ['tatiana_lab', 'Tatiana'] },
      { label: 'Restore your body to its original shape', handler: (st: GameState) => {
    scene.text('"Tatiana, I\'m having problems with my body image. I\'m not happy and was hoping that you might be able to help me."');
    scene.text('"It\'s possible, but I will have to draw on your magical energy. It will cost 40 mana to perform a reset spell.');
    scene.text('This will reduce excess fat, growth of body parts and high levels of silicone, moving you closer to your original body shape.');
    scene.text('Do you wish to try this spell?');
    if (((s as any).pcs_mana ?? 0) >= 40) {
      scene.actions([
        { label: 'That sounds great, let\'s do it!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).dounspell = 1;
    (s as any).dounsplkil = 2;
    qspCall(s, 'body', 'hardreset');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tatiana/magiclook.jpg');
    scene.text('Tatiana lowers her glasses and stares deeply into your eyes. It feels like time just stops being a thing and you are floating.');
    scene.text('It seems very soon afterwards when you snap back to reality, but the big clock on the lab wall tells you it\'s been 30 minutes.');
    scene.text('Your body has changed much as Tatiana said it would, and she is already busy checking nothing went wrong.');
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No, no, I\'ve changed my mind. Thank you.', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).BurgerQW ?? 0)?.['IlyQWTatianaHelp'] === 1  &&  ((s as any).poverKAR ?? 0) === 0  &&  (!((s as any).softKAR ?? 0))) {
    scene.actions([
      { label: 'Ask Tatiana for help with Ivan', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You explain the situation and ask Tatiana for assistance. Tatiana says thoughtfully, "It doesn\'t sound like there is any physical evidence of Ivan\'s guilt, so you need a confession. I think it would be possible to capture and interrogate him. Or, you and I could try a more cunning approach to get the truth out of him. Either way, you need to capture it all on video."');
    scene.actions([
      { label: 'Military solution', handler: (st: GameState) => {
    (s as any).poverKAR = 1;
    qspCall(s, 'stat', '');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You decide to get Ivan to admit what he\'s done by force. Tatiana tells you to go to Ivan\'s apartment. There you will meet with Gustav, who will help resolve the issue. She stresses that you keep an eye on him in case he starts getting distraught. Apparently when he does, he turns into a monster.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
      { label: 'Trick him', handler: (st: GameState) => {
    (s as any).softKAR = 1;
    qspCall(s, 'stat', '');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('You decide to trick Ivan into admitting what he\'s done. Tatiana tells you to go to Ivan\'s apartment and that she will meet you there.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).poverKAR ?? 0) === 2) {
      scene.actions([
        { label: 'Approach Tatiana about the attack on Ivan\'s apartment', handler: (st: GameState) => {
    (s as any).poverKAR = 3;
    qspCall(s, 'stat', '');
    scene.text('You come to Tatiana, and she sighs. "Yes, you failed. That bullet Gustav caught in his head made his strength go up to the next level, almost invulnerable but deprived of his mind. That\'s why he couldn\'t stop himself from killing Ivan before you could get a confession out of him. There are pluses. The cops think it was just a gas explosion for one, so you probably don\'t need to worry about much of an investigation. But now you are going to have to pay the debt if you don\'t want to go to jail. "');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).Tatianaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Develop your intelligence (1:00)', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 4) + 3);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).Tatianaday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('You study with Tatiana developing your intellect.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
      { label: 'Develop your inner spirit (1:00)', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 4) + 3);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).Tatianaday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('You meditate with Tatiana improving your spirituality.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'spellList', 'teacherActions', '$basicSpells', 'tatiana_lab', 'Tatiana');
  qspCall(s, 'spellList', 'teacherActions', '$healSpells', 'tatiana_lab', 'Tatiana');
  if (((s as any).tat_lesson_number ?? 0) <= 8  &&  ((s as any).pcs_mana ?? 0) >= 1000) {
    scene.actions([
      { label: 'Are there other spells you can teach me? (1:00)', goto: ['tatiana_lab', 'teach'] },
    ]);
  }
  if (((s as any).pcs_magik ?? 0) >= 5  &&  (!((s as any).spellavtoklon ?? 0))) {
    scene.actions([
      { label: 'Learn technique preparation (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).spellavtoklon = 1;
    qspCall(s, 'stat', '');
    scene.text('You learn the technique preparation. This technique allows you to enter into battle with three clones already created.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_magik ?? 0) >= 6  &&  (!((s as any).spellbefshild ?? 0))) {
    scene.actions([
      { label: 'Learn technique pre-shield (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).spellbefshild = 1;
    qspCall(s, 'stat', '');
    scene.text('You learn the technique pre-shield. This technique allows you to enter into battle with a magical shield protecting you against physical attacks.');
    scene.actions([
      { label: 'Leave', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    if (((s as any).sucpcinfo ?? 0) >= 4  &&  ((s as any).sucskill ?? 0) < 1) {
      scene.actions([
        { label: 'Learn to monitor your Succubus Energies (may take some time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).sucskill = 1;
    qspCall(s, 'stat', '');
    scene.text('You spend 30 minutes meditating with Tatiana in a light link with you as she shows you how to tell what your Succubus energy levels are.');
    scene.text('You open your eyes and look at Tatiana sitting across from you.');
    scene.text('She is flushed, breathing hard, and her nipples are showing clearly through her blouse.');
    if (1 + (((s as any).succublvl ?? 0) * 2) + ((s as any).tatisucsex ?? 0) < 20  &&  (Math.floor(Math.random() * 101) + 0) < 90) {
      scene.text('After a moment, she gives herself a shake and pulls herself together before saying, "There you go!"');
      scene.text('She then stands up and goes back to her studying.');
      scene.actions([
        { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'suctrainsex'] }]);
    }
  } },
      ]);
    } else {
      if (((s as any).sucpcinfo ?? 0) >= 5  &&  ((s as any).sucskill ?? 0) < 2) {
        scene.actions([
          { label: 'Learn to increase your energy storage (may take some time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You settle into a meditative state and link with Tatiana.');
    if (((s as any).succhungry ?? 0) > -2) {
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: After a few minutes, you feel Tatiana break the link and say, "<<$pcs_nickname>>...
      scene.text(`After a few minutes, you feel Tatiana break the link and say, "${((s as any).pcs_nickname ?? 0)}, you need to build up <i>two</i> days of reserve before we do this training."`);
      scene.text('She then stands up and goes back to her studying.');
      return;
      scene.actions([
        { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 55;
    qspCall(s, 'stat', '');
    (s as any).sucskill = 2;
    scene.text('Tatiana shows you how to build a storage reservoir that draws the excess energy in before your body uses it.');
    scene.text('Once you\'re finished, Tatiana is again showing clear signs of arousal, and she says, "You know, touching your power is a really, <i>really</i>, intense experience!"');
    scene.text('She then closes her eyes and visibly tries to get ahold of herself.');
    if (((s as any).tatisucsex ?? 0) >= 20  ||  (Math.floor(Math.random() * 100) + 1) < 95) {
      scene.text('After several moments, she pulls herself together, opens her eyes, smiles at you, and says, "There, I knew I could do it!"');
      scene.text('She then stands up and goes back to her studying.');
      scene.actions([
        { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    } else {
      scene.text('Then her eyes snap open, and you feel arousal suddenly flooding the link!');
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'suctrainsex'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3) {
          if ((!((s as any).sctrainprep ?? 0))) {
            scene.actions([
              { label: 'Ask her about the preparations and training [+$func(\'money\', \'get_cost_string\', 5000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('You ask her what\'s involved in the training and preparations.');
      scene.text('She spends some time explaining the technical details of what you need to do during the "ritual", then says,');
      // TODO-QSP: dynamic text: "The preparations will take 7 days, I'll need <<$func('money', 'string_price', 3...
      scene.text(`"The preparations will take 7 days, I'll need ${qspFunc(s, 'money', 'string_price', 3000)} to modify one of my devices to pull in free sexual energy from the adult businesses around here and another ${qspFunc(s, 'money', 'string_price', 2000)} to make several potions we'll need, one of which is going to temporarily make me into a sexual energy "battery" and the others are so we can do the ritual without hurting ourselves.`);
      scene.text('"Once I start, you\'ll have 2 days to tell me to abort, after that I will have started building up the charge. We would not be able stop ourselves, and premature sex could kill us, so I\'ll be putting up a barrier to keep you out until 7 days have passed, and I\'ll set it not to let you through unless you have 3 days of reserves and 100 units of stored energy.');
      // TODO-QSP: dynamic text: "Once I've built up to a full charge, I'll only be able to hold it for a day, af...
      scene.text(`"Once I've built up to a full charge, I'll only be able to hold it for a day, after that I'll have to release it. The "battery" potion itself as well as the materials for it will not keep, so abort after I start or fail to show up on time and ${qspFunc(s, 'money', 'string_price', 2000)} will have been wasted.`);
      scene.text('"So, do you want me to start the preparations?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    qspCall(s, 'money', 'pay', 5000);
    (s as any).sctrainprep = 1;
    (s as any).tatisucsexday = ((s as any).daystart ?? 0) + 7;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Ok, I'll get started! Be here next <<$weekName>> with 3 days of reserves and 10...
    scene.text(`"Ok, I'll get started! Be here next ${((s as any).weekName ?? 0)} with 3 days of reserves and 100 units of stored energy."`);
    if (((s as any).tatisucsex ?? 0) > 0) {
      scene.text('She then pulls you in for a quick kiss before adding, "Now get out of here, I can\'t have you distracting me!"');
    } else {
      scene.text('She then surprises you with a peck on the cheek before adding, "Now get out of here, I can\'t have you distracting me!"');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        { label: 'Not Yet', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    }
  } },
            ]);
          } else {
            if (((s as any).sctrainprep ?? 0) === -1) {
              scene.actions([
                { label: 'Ask her to redo the preparations [+$func(\'money\', \'get_cost_string\', 2000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: Are you sure? The same things from before apply; 2 days to abort, the barrier, 3...
      scene.text(`Are you sure? The same things from before apply; 2 days to abort, the barrier, 3 days of reserves and 100 units of stored energy, 8 to 10 hours once I'm fully charged… Another ${qspFunc(s, 'money', 'string_price', 2000)} wasted. Are you <i>really</i> sure?`);
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 2000);
    (s as any).sctrainprep = 1;
    (s as any).tatisucsexday = ((s as any).daystart ?? 0) + 7;
    // TODO-QSP: dynamic text: "Ok, I'll get started! Be here next <<$weekName>> with 3 days of reserves and 10...
    scene.text(`"Ok, I'll get started! Be here next ${((s as any).weekName ?? 0)} with 3 days of reserves and 100 units of stored energy."`);
    scene.text('"Now get out of here, I can\'t have you distracting me!"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        { label: 'Not Yet', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    }
  } },
              ]);
            }
          }
        } else {
          if (((s as any).sucpcinfo ?? 0) >= 7  &&  ((s as any).sucskill ?? 0) < 4  &&  ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1  &&  ((s as any).sucexcess ?? 0) >= 100) {
            scene.actions([
              { label: 'Ask Tatiana about the accommodation training', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Tatiana asks, "Are you ready to do the accommodation training?"');
    scene.actions([
      { label: 'Yes, I\'m ready. (can take a lot of time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mast/dildo.jpg');
    scene.text('She walks you through everything you need to do while leading you to the couch.');
    scene.text('Once there, as you are stripping, so is she! At your look, she says, "What? I don\'t want to tear my clothes if one of us slips."');
    scene.text('You settle onto the couch then work a massive dildo into your snatch. After working the dildo for a bit, with Tatiana in a light link guiding you, you switch to your ass. You work there for a while before switching back. You continue this way for nearly two hours, concentrating so hard you only have two orgasms, before you feel your body responding as it should. A quick test and you’re done.');
    (s as any).sucskill = 4;
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (100);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    scene.text('As you\'re finishing, you notice Tatiana has her eyes closed and is visibly trying to get ahold of herself.');
    if (((s as any).tatisucsexday ?? 0) < ((s as any).daystart ?? 0)  ||  (Math.floor(Math.random() * 100) + 1) > 95) {
      scene.text('Then her eyes snap open, and you feel arousal suddenly flooding the link!');
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'suctrainsex'] }]);
    } else {
      scene.text('After several moments, she pulls herself together, opens her eyes, smiles at you, and says, "There, I knew I could do it!"');
      scene.text('She then stands up and goes back to her studying.');
      scene.actions([
        { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
      ]);
    }
  } },
    ]);
  } },
      { label: 'Not Yet', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).AlexandriaQW ?? 0) <=2  &&  ((s as any).pfilmNO ?? 0) === 1) {
    scene.actions([
      { label: 'Tell Tatiana that you can\'t finish the Aphrodite job.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AlexandriaQW = 3;
    qspCall(s, 'stat', '');
    scene.text('"Tatiana, I have a problem. It seems that I\'ve been blacklisted and can\'t enter the Aphrodite building."');
    scene.text('She tilts her head and seems to think the problem over, but it looks like she isn\'t too worried by this revelation.');
    // TODO-QSP: dynamic text: "Hmm, that complicates the job somewhat, <<$pcs_nickname>>. It seems that the cu...
    scene.text(`"Hmm, that complicates the job somewhat, ${((s as any).pcs_nickname ?? 0)}. It seems that the curse is only active during operating hours, so sneaking back in during the night isn't an option."`);
    scene.text('"So… I need to sneak back in there during daylight hours?"');
    // TODO-QSP: dynamic text: Tatiana just snorts. "Don't worry, <<$pcs_nickname>>, I have Gustav for those so...
    scene.text(`Tatiana just snorts. "Don't worry, ${((s as any).pcs_nickname ?? 0)}, I have Gustav for those sorts of jobs. No, I was thinking of an <i>alternative.</i>" She gives you a look that makes you shiver, then continues, "I know a way to help you infiltrate the place so you can look for the item in question. When the moment feels right, go to the Aphrodite building and give me a call. But remember, only when it's open."`);
    scene.text('Saying this, Tatiana turns towards her studies, leaving you to your own devices.');
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  }
  if (((s as any).AlexandriaQW ?? 0) ===4  ||  ((s as any).AlexandriaQW ?? 0) ===5) {
    scene.actions([
      { label: 'Tell Tatiana about the Aphrodite job.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/photo.jpg');
    scene.text('It is time to tell Tatiana about your experience in Aphrodite. You head over to her and begin to explain everything, beginning with how you snooped around the agency and continuing with how you met her double. When you reach the part where you met Aleksei, Tatiana quickly walks towards a cabinet and pulls out an old photo, showing it to you. The image, taken in black and white, shows an armed Aleksei.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you sure that you met this woman? Blonde? Bossy? Tall?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, are you sure that you met this woman? Blonde? Bossy? Tall?"`);
    scene.text('"Yes, I am pretty sure. Is that bad?"');
    // TODO-QSP: dynamic text: Tatiana pinches the bridge of her nose and sighs. "Yeah, <<$pcs_nickname>>, it's...
    scene.text(`Tatiana pinches the bridge of her nose and sighs. "Yeah, ${((s as any).pcs_nickname ?? 0)}, it's pretty bad. Aleksei… Well, Alexandria, is an ex-councilor and probably one of the most powerful electric wizards in the world. Remember how The Amulet of Power isn't supposed to end up in the hands of a woman? Well, she was looking for a form to obtain it, the back alleys word is that the quest made her magic <i>quirky</i>, and that beautiful blonde hair is the consequence of a simple scare."`);
    scene.text('"So… Pretty bad?"');
    // TODO-QSP: dynamic text: "You have no idea <<$pcs_nickname>>." Tatiana sighs. "Look, we are talking here ...
    scene.text(`"You have no idea ${((s as any).pcs_nickname ?? 0)}." Tatiana sighs. "Look, we are talking here of a <i>centuries</i> old mindset, the one that yearns for the times where cannibalizing non-magical children was fashionable to recharge your energies. Do yourself a favor, just lie down and let Reinhold take care of this."`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Okay, Tatiana, and what do I get out of this job?"', handler: (st: GameState) => {
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('Tatiana gives you a half-smile, and you understand that she isn\'t going to pay you for the Aphrodite job.');
    if (((s as any).AlexandriaQW ?? 0) ===4) {
      qspCall(s, 'money', 'earn', 5000);
      // TODO-QSP: dynamic text: However, at that moment, to everyone's surprise, Gustav sneaks up to your side a...
      scene.text(`However, at that moment, to everyone's surprise, Gustav sneaks up to your side and grabs your hand, placing a roll of bills on it. "Take this, ${((s as any).pcs_nickname ?? 0)}. You succeeded in beating Tatiana's double, and if not for Alex, the film would be here."`);
      if (((s as any).pfilmNO ?? 0) === 1) {
        scene.text('Gustav just stands there staring at a flabbergasted Tatiana who, after a beat, simply shrugs. "Okay, Gustav, don\'t suggest that I am scrimpy or anything… Jeez…"');
      } else {
        // TODO-QSP: dynamic text: Gustav just stands there staring at a flabbergasted Tatiana who, after a beat, s...
        scene.text(`Gustav just stands there staring at a flabbergasted Tatiana who, after a beat, simply shrugs. "Okay, Gustav, don't suggest that I am scrimpy or anything… Jeez. I was going to speak to some of the people in the agency on her behalf, but now… Okay, fine. ${((s as any).pcs_nickname ?? 0)}, I will do it anyway."`);
        qspCall(s, 'fame', 'city', 'modelling', 10);
      }
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you've failed to bring me the film. Instead, it has ended up...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, you've failed to bring me the film. Instead, it has ended up in the hands of a powerful magician, who may be planning to use it against us."`);
      if (((s as any).pfilmNO ?? 0) === 1) {
        scene.text('You open your mouth to protest that it isn\'t your fault, but one look at Tatiana\'s face tells you that she\'s already made up her mind… Fuck!');
      } else {
        qspCall(s, 'fame', 'city', 'modelling', 10);
        scene.text('You open your mouth to protest that it isn\'t your fault, but before you can, Tatiana raises her hands consolingly.');
        // TODO-QSP: dynamic text: "Don't worry, <<$pcs_nickname>>, you're not going to leave empty-handed. I'm goi...
        scene.text(`"Don't worry, ${((s as any).pcs_nickname ?? 0)}, you're not going to leave empty-handed. I'm going to speak to some of the people in the agency on your behalf. It'll be good for your modelling career."`);
      }
    }
    (s as any).AlexandriaQW = 6;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Tatiana returns to her job, and before you can ask any more questions, Gustav grabs your arm to take you away.');
    // TODO-QSP: dynamic text: As you walk, he presses a post-it into your hand. "Take this, <<$pcs_nickname>>....
    scene.text(`As you walk, he presses a post-it into your hand. "Take this, ${((s as any).pcs_nickname ?? 0)}. Now you can meet Alex."`);
    scene.text('"What? How? Why?" You ask, more than a little confused.');
    scene.text('After a moment of silence, the mutant shrugs. "I\'m good at finding people. I knew that a powerful wizard had made his home in Saint Petersburg, and after overhearing what you said, I put two-and-two together. The rest is complicated. I think that Alex just wanted to talk. Messing with The Council isn\'t on anyone\'s agenda, and now that Reinhold is involved, you\'re less likely to be in danger."');
    scene.text('You look at the post-it. Scrawled on it are directions to a place in the suburbs. To reach it, you must take the metro. There is a station nearby, but are you going to go and meet Alex?');
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterTeach(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).tatiana_teach_escalation ?? 0))) {
    scene.img('images/characters/city/tatiana/sex-machines.jpg');
    scene.text('A suddenly excited Tatiana grabs your hand and pulls you towards an adjacent, half-hidden room. Inside is some kind of workshop/storeroom with boxes, tools and odd-looking items shoved into shelves, whose order is soon turned upside down as Tatiana begins to throw all kinds of things over a bed, where some half-finished machine lies undisturbed.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, a quick recap." She then picks some of the tools and si...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, a quick recap." She then picks some of the tools and sits in the bed cross-legged, her hands extending towards the machine. "The Talisman has filled you with mana, making you something like a living battery. This mana is liberated when you orgasm, reinforcing your magical power. Is everything clear?"`);
    scene.text('She stops to see if you are following her explanation, and when you gesture for her to continue, Tatiana restarts hammering the poor <i>whatever</i> that thing is.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, remember when I asked for your help in my investigations? We...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, remember when I asked for your help in my investigations? Well, during your first… ehm… surge, you didn't absorb all the energy, and the leftovers burned the magic tripwire I left to watch over you, traveled back towards me and slapped my beautiful ass. To be blunt, I want those leftovers! And for that, we are going to use this!"`);
    scene.text('The <i>machine</i> is now complete. It looks like some sort of… saddle-like sex machine? Tatiana doesn\'t stop and takes some other similar… dildo-equipped power tools from a shadowy corner were some boxes with the name <i>Fucking Machine</i> scrawled on them lay open.');
    scene.actions([
      { label: 'WTF?', handler: (st: GameState) => {
    scene.img('images/characters/city/tatiana/talisman.jpg');
    scene.text('"I guess that you want some explanation, correct? First: They are clean, I didn\'t have time to enjoy them; Two: If you want some, try Dildopolis in the red light district; Three: No, I didn\'t buy them, Gustav said that they are a <i>prize of war</i> but didn\'t elaborate. Four: Catch this!"');
    scene.text('Tatiana throws a little greenish item at you which you catch without a problem. It is a piece of pottery that sends a shiver up your hand and triggers a memory of… The Talisman of Power. It is a part of it.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, this is what I want you to do. Pick your favorite one, ...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, this is what I want you to do. Pick your favorite one, use it and I will cast this modified sex ritual. The original was supposed to let a couple share their mana, but my version will substitute the partner for a sex machine, so when you orgasm and your body is flooded by the mana, the excess that is supposed to go to your partner will be absorbed by the fragment. Any questions?"`);
    scene.text('"Ehm, several. Why is this so complicated? I mean… can\'t you just tap on me, instead of using THAT?"');
    // TODO-QSP: dynamic text: "Yes and no <<$pcs_nickname>>. Tapping on your mana reserves isn't really diffic...
    scene.text(`"Yes and no ${((s as any).pcs_nickname ?? 0)}. Tapping on your mana reserves isn't really difficult, but the surge ones? They will burn me like a cinder, that's why I need the fragment. It somehow conserves some mana-battery properties, letting this little ritual channel the excess energy towards it for later use. That is the deal, you get some magical training and I get some nice mana. So, are you ready for a ride?"`);
    scene.actions([
      { label: '"I think I will pass for now"', handler: (st: GameState) => {
    (st as any).tatiana_teach_escalation = ((st as any).tatiana_teach_escalation ?? 0) + (1);
  }, goto: ['tatiana_lab', 'start'] },
      { label: '"Let\'s see"', goto: ['tatiana_lab', 'teach_strip'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'teach_strip'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTeachStrip(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).tat_lesson_number ?? 0))) {
    (s as any).tat_lesson_number = 1;
  }
  scene.img('images/locations/pavlovsk/trainstation/bimbo.strip6.mp4');
  if (((s as any).pcs_inhib ?? 0) < 35) {
    scene.text('You squirm and blush under Tatiana\'s nonchalant aptitude as she helps you undress to do what is essentially a magical peep show. Only the fact that she seems fully focused on the magical ritual, and the only guy that can peek not only isn\'t in the room, but doesn\'t appear interested in anything you two are going to do, lets you struggle towards fulfilling your deal with Tatiana.');
  } else {
    scene.text('With Tatiana\'s help, you quickly remove your clothes and wait patiently as she concentrates on the magical ritual. You even partake in sexy small talk to see if Gustav peeks, but he doesn\'t appear interested in anything you two are going to do. After a few minutes have passed to let the magic condensate in the room, you are ready to fulfill your deal with Tatiana.');
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((s as any).tatiana_teach_escalation ?? 0) <= 2) {
    scene.actions([
      { label: 'The saddle-looking one(No penetration)', goto: ['tatiana_lab', 'saddle'] },
    ]);
  }
  if (((s as any).tatiana_teach_escalation ?? 0) <= 4) {
    scene.actions([
      { label: 'One of the dildoed power-tools(Anal)', goto: ['tatiana_lab', 'teach_dildo_anal'] },
      { label: 'One of the dildoed power-tools(Vaginal)', goto: ['tatiana_lab', 'teach_dildo_vag'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Why choose only one?(????)', goto: ['tatiana_lab', 'teach_full'] },
    { label: '"I think I will pass for now"', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterSaddle(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tatiana/sex/riding.jpg');
  if (((s as any).pcs_horny ?? 0) > 50) {
    scene.text('As you approach the saddle-sex-machine, you can appreciate the amused smile on Tatiana\'s face as the blush in your cheeks and the heaving in your chest show, without doubt, the arousal that is wetting your pussy. Maybe it\'s an exhibitionist streak, or something else, but you\'re pretty sure that you aren\'t doing this just for another of Tatiana\'s lessons.');
  } else {
    scene.text('As you approach the saddle-sex-machine, Tatiana, concentrating on the ritual and without looking at you, passes you a KY Jelly bottle that you proceed to use in your pussy, the fresh substance sending shivers up your body as you concentrate on the task at hand.');
  }
  scene.text('Finally, psyched up, you smear some lube over the small dildo-like protrusions in the riding-machine, and with care, squat over them. It only takes a few seconds for the rubber ridges to slide into your vagina. A rubbery and sticky sensation extends across your outer and inner lips, caressing your clit without a total penetration.');
  scene.text('Sighing slightly at the sensation, you reach for the controller, and after a moment and with a soft "BRRRR" the machine comes alive, stimulating in only one move all of your pussy. You close your eyes as soft moans escape your mouth.');
  scene.text('You barely manage to stay over the machine. Your sweaty hands grab the controller, and push it for more power, steadily increasing the vibration as your voice and the machine sound compete to fill the room with their chorus.');
  scene.text('Finally, the controller slips from your clenching fingers as your magical climax triggers, taking your breath and self-control away and sending wave after wave of magically enhanced pleasure pulsing through your body.');
  qspCall(s, 'arousal', 'vaginal_vibe', 30, 'no_orgasm_msg', 'self');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for a lesson', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((s as any).tatiana_teach_escalation ?? 0) < 2) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        (s as any).tatiana_teach_escalation = ((s as any).tatiana_teach_escalation ?? 0) + (1);
      }
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'lesson<<tat_lesson_number>>'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'Escalation1'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterEscalation1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tatiana/tatiana.jpg');
  scene.text('You stretch over the bed, happy in the magical afterglow and waiting for Tatiana to explain her lesson, but this time she seems distracted, walking from one side of the room to the other as she magically examines the pottery fragment. She even shakes it, as if trying to hear something.');
  scene.text('"Is something wrong Tatiana?"');
  // TODO-QSP: dynamic text: She looks at you, her gaze lost into thinking "Yes <<$pcs_nickname>>. I am not s...
  scene.text(`She looks at you, her gaze lost into thinking "Yes ${((s as any).pcs_nickname ?? 0)}. I am not sure why, but the ritual has failed to drain the excess mana. This complicates the situation."`);
  scene.text('"So…" You begin asking, signaling towards the machine by your side "Are we going to continue using these?"');
  scene.text('Tatiana stops looking in your direction, her gaze returning to focus on the fragment as a smile creeps onto her face.');
  scene.text('"Don\'t worry my student, your role hasn\'t ended, we just need to raise the bar. So, what tool do you choose?"');
  scene.text('Saying this, Tatiana begins to push the power-tool-looking machines towards you.');
  // TODO-QSP: end
  scene.actions([
    { label: '"I think I will pass for now"', goto: ['tatiana_lab', 'start'] },
    { label: 'One of the dildoed power-tools(Anal)', goto: ['tatiana_lab', 'teach_dildo_anal'] },
    { label: 'One of the dildoed power-tools(Vaginal)', goto: ['tatiana_lab', 'teach_dildo_vag'] },
    { label: 'Why choose only one?(????)', goto: ['tatiana_lab', 'teach_dildo_vag', 'teach_full'] },
  ]);
  scene.build();
}

function enterTeachDildoAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tatiana_teach_escalation ?? 0) < 2) {
    (s as any).tatiana_teach_escalation = 2;
  }
  qspCall(s, 'npcStat', 'D3');
  qspCall(s, 'arousal', 'auto_lube', 'anal', 'self');
  qspCall(s, 'arousal', 'anal_dildo', 30, 'self');
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/tatiana/sex/ass.jpg');
  if ((!((s as any).pcs_ass ?? 0))) {
    scene.text('Grabbing a KY Jelly bottle, you meekly observe the piston-powered sex machine that calmy seems to wait for your virgin anus and ask yourself why you are doing this. Are you so desperate for magical knowledge?');
    scene.text('Gathering your courage, you smear some lubricant onto your fingers and proceed to lube the dildo before with a sigh of discomfort, you push two fingers into your tight asshole, the sensation failing to relax the unspoiled aperture.');
    scene.text('You then kneel and, grabbing the ass-breaker, slowly push it up your virgin ass, fighting against your natural resistance at the intrusion and feeling your anus constraining at the sensation, a feeling that makes you groan loudly.');
  } else {
    if (((s as any).pcs_ass ?? 0) < 15) {
      scene.text('Grabbing a KY Jelly bottle, you observe the piston-powered sex machine that calmy seems to wait for your anus. You smear some lubricant onto your fingers and proceed to lube the dildo before, with a sigh, you push two fingers into your asshole, the sensation somewhat relaxing the aperture.');
      scene.text('You then kneel and grab the ass-breaker, pushing it up your ass while trying to relax your hole, feeling the flesh wrap around the sensation, a feeling that makes you groan at the forceful intrusion.');
    } else {
      scene.text('Grabbing a KY Jelly bottle, you observe the piston-powered sex machine that calmy seems to wait for your well-used anus with arousal as you ask yourself if you\'re doing this for the magical knowledge or simply because you <i>want</i> to…');
      scene.text('You quickly smear some lubricant onto your fingers and proceed to lube the dildo before, with a moan of pleasure, you push two fingers into your asshole, massaging your innards with a sensation that makes you moan in arousal.');
      scene.text('You then kneel and grab the ass-breaker, pushing it up your ass, your innards welcoming it as a feeling that seems to fill some undetermined <i>hole</i> in your soul makes your heart rate skyrocket.');
    }
  }
  scene.text('With the power-tool firmly inserted up your ass, there is only a thing to do. You grab the control and activate the fucking machine. There is a mechanical "BRRR" and the device begins to pound your innards, making you clench your teeth in between moans and grunts.');
  scene.text('You put a sticky hand between your thighs and proceed to play with your cunt, your clit throbbing at the power-dildo rhythm, making you lose your breath. Under the ritual\'s influence, your growing arousal pushes against your magical core.');
  scene.text('Finally, in a magical explosion, an orgasmic bliss surges through your body, making you crumble under the sex machine\'s onslaught as mana starts flowing around the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for a lesson', handler: (st: GameState) => {
    if (((s as any).tatiana_teach_escalation ?? 0) < 4) {
      (s as any).tatiana_teach_escalation = ((s as any).tatiana_teach_escalation ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'lesson<<tat_lesson_number>>'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'Escalation2'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterTeachDildoVag(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tatiana_teach_escalation ?? 0) < 2) {
    (s as any).tatiana_teach_escalation = 2;
  }
  qspCall(s, 'npcStat', 'D3');
  qspCall(s, 'arousal', 'auto_lube', 'vag', 'self');
  qspCall(s, 'arousal', 'vaginal_dildo', 30, 'self');
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/tatiana/sex/vag.jpg');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Grabbing a KY Jelly bottle, you meekly observe the piston-powered sex machine that calmy seems to await your virgin pussy. You ask yourself why you are doing this. Are you so desperate for magical knowledge?');
    scene.text('Gathering your courage, you smear some lubricant onto your fingers and proceed to lube the dildo before, with a shiver at the sensation, begin to caress your lower lips, a pair of shy fingers spreading the lube into your unspoiled aperture.');
    scene.text('You then kneel and grab the pussy-breaker, pushing it into your virgin cunt. There is a barely perceptible sting as your hymen is torn, a feeling that makes you groan.');
  } else {
    if (((s as any).pcs_vag ?? 0) < 15) {
      scene.text('Grabbing a KY Jelly bottle, you observe the piston-powered sex machine that calmy seems to await your pussy. You smear some lubricant onto your fingers and proceed to lube the dildo before, with a sigh, you begin to caress your lower lips, a pair of fingers spreading the lube into your cunt.');
      scene.text('You then kneel and grab the pussy-breaker, pushing it into your cunt as you try to relax, feeling the flesh relenting at the size of the dildo, a feeling that makes you groan.');
    } else {
      scene.text('Grabbing a KY Jelly bottle, you observe the piston-powered sex machine that calmy seems to await your well-used pussy with arousal. You ask yourself if you\'re doing this for the magical knowledge, or because you <i>want</i> to…');
      scene.text('You smear some lubricant onto your fingers and proceed to lube the dildo before, with a sigh of pleasure, you begin to caress your lower lips, a pair of fingers spreading the lube into your cunt, massaging your vagina with a sensation that makes you moan with arousal.');
      scene.text('You then kneel and grab the pussy-breaker, pushing it deep into your cunt, your pussy welcoming it as a feeling that seems to fill some undetermined <i>hole</i> in your soul and makes your heart rate skyrocket.');
    }
  }
  scene.text('With the power-tool firmly inserted into your cunt, there is only a thing to do. You grab the control and activate the fucking machine. There is a mechanical "BRRR" and the device begins to pound your pussy, making you clench your teeth in between moans and grunts.');
  scene.text('You put a sticky hand between your thighs and proceed to play with your throbbing clit, trying to follow the power-dildo rhythm, making you lose your breath. Under the ritual\'s influence, your growing arousal pushes against your magical core.');
  scene.text('Finally, in a magical explosion, an orgasmic bliss surges through your body, making you crumble under the sex machine\'s onslaught as mana starts flowing around the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for a lesson', handler: (st: GameState) => {
    if (((s as any).tatiana_teach_escalation ?? 0) < 4) {
      (s as any).tatiana_teach_escalation = ((s as any).tatiana_teach_escalation ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'lesson<<tat_lesson_number>>'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'Escalation2'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterEscalation2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tatiana/tatiana.jpg');
  scene.text('You sigh contentedly as the mana is liberated by your core and spreads through your body, a feeling of elation filling your mind as your magical power is pushed beyond its limit.');
  scene.text('"Uh… That is interesting." Tatiana mumbles, taking you away from your reverie. She is cross-legged on the floor ignoring you, her attention fully focused on the talisman fragment.');
  scene.text('"Let me guess. It didn\'t work?"');
  scene.text('She looks at you for a moment before returning to her magical musing, then, laying down on the floor in thought before sitting up and snapping her fingers in your direction.');
  // TODO-QSP: dynamic text: "No <<$pcs_nickname>>, it's actually worked perfectly, <i>too<i> perfectly. It s...
  scene.text(`"No ${((s as any).pcs_nickname ?? 0)}, it's actually worked perfectly, <i>too<i> perfectly. It seems that the mana influx has reactivated the no-woman limitation, so this little piece of pretty garbage has locked me out of the wonderful mana inside."`);
  scene.text('She gets up with a jump and proceeds to grab all the fucking machines, placing them within your reach.');
  scene.text('"Fortunately, we can break that limitation with a sensory overload, so… Ready to give the show of your life?"');
  scene.text('You look at the smiling Tatiana, the talisman and the sex machines, the realization forming in your mind that Tatiana wants you to use <i>all</i> of them.');
  // TODO-QSP: end
  scene.actions([
    { label: '"I think I will pass for now"', goto: ['tatiana_lab', 'start'] },
    { label: 'The show must go on', goto: ['tatiana_lab', 'teach_full'] },
  ]);
  scene.build();
}

function enterTeachFull(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tatiana_teach_escalation ?? 0) < 4) {
    (s as any).tatiana_teach_escalation = 4;
  }
  qspCall(s, 'arousal', 'auto_lube', 'anal', 'self');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tatiana/sex/f1.jpg');
  scene.text('You bend over a yoga mat and wait as Tatiana puts on a pair of surgical gloves with a "SNAP!", the sound making you turn to look at her smiling face as she begins to smear KY Jelly over one of the powered-up-foot-long-faux-phalluses. Is she trying to arouse or scare you? She then stops and turns towards your ass.');
  scene.text('Tatiana\'s experienced hands then begin to delicately, but without hesitation, push a smeared finger into your anus. You sigh, not in pleasure, but in relaxation as the massage begins, distending the closely guarded orifice.');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, let the fun begin!"
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, let the fun begin!"`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_anal_virgin')) {
    scene.text('Your breath is cut short as Tatiana pushes something rubbery and sticky against your dirtiest of places. You tense it in reflex, and heave between clenched teeth as she unrelentingly pushes the dildo beyond the guarded entrance, fighting against the natural order of things, eliciting grunts of discomfort from you as the thing fills your innards.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, you can look!"
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, you can look!"`);
    scene.text('Turning back, you can appreciate the half-buried dildo sticking out from your no-longer-virgin cornhole, the pulsing on your innards trying to expel the uncomfortable intruder, and making you weirdly conscientious where the item is buried. You then freeze as an evilly smirking Tatiana begins to caress the other power-dildo.');
  } else {
    if (((s as any).pcs_ass ?? 0) < 15) {
      scene.text('Your breath is cut short as Tatiana pushes something rubbery and sticky against your dirtiest of places. You try to relax the muscles, letting the dildo push into your anus without problems, but it\'s too big, and the next few minutes turn into a struggle between you and Tatiana as she tries to bury the sex toy without hurting your innards.');
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, you can look!"
      scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, you can look!"`);
      scene.text('Turning back, you can appreciate the half-buried dildo sticking out from your cornhole, a sigh of relief escaping your mouth as your innards seem to have accepted the intruder without too much suffering. You then freeze as an evilly smirking Tatiana begins to caress the other power-dildo.');
    } else {
      scene.text('You roll your eyes at Tatiana\'s antics and wait with trepidation for the coming penetration. The push of something rubbery and sticky against your dirtiest of places makes you moan in satisfaction. The dildo, unrelenting, pushes beyond the entrance, towards your welcoming innards as a sense of completeness extends through your body.');
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, you can look!"
      scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, you can look!"`);
      scene.text('Turning back, you can appreciate the half-buried dildo sticking out from your cornhole, the pulsing of your innards sending shivers of pleasure, making time go slow as you wait for the power to be turned on. However, an evilly smirking Tatiana begins to caress the other power-dildo.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'auto_lube', 'vag', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tatiana/sex/f2.jpg');
    scene.text('Immobilized thanks to the big rubber gimmick firmly jammed into your asshole, you can only observe as Tatiana begins to give a slick handjob to the other power-dildo. A shiver runs down your spine as you contemplate the size of the thing that is going to go up your pussy.');
    scene.text('As you mull over this, something brush your pussy\'s lips. Fortunately, it isn\'t the rubbery monstrosity, but Tatiana\'s fingers, which begin to spread lubricant all over your cunt, sending pleasant waves up your body, and eliciting some moans from your throat as she takes your head away from the coming onslaught.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('She pushes the synthetic member against your tight, but very sticky twat, making you grit your teeth at the piercing sensation breaking through your cramped innards, compressed thanks to the other latex intruder up your ass.');
      scene.text('There is a barely perceptible sting as your hymen is torn as Tatiana unrelentingly pushes the phallic simulacrum into your pussy, making you push your head against the mat between moans, grunts and short breaths until she stops.');
    } else {
      if (((s as any).pcs_vag ?? 0) < 15) {
        scene.text('She pushes the synthetic member against your tight, but very sticky twat, making you moan in pleasure as the dildo passes your yielding lowers lips. Sadly, the sex toy\'s enormous girth makes you wince and grit your teeth as it stretches your vagina\'s delicate walls.');
        scene.text('Sweat runs over your brow as Tatiana unrelentingly pushes the phallic simulacrum up your vagina, making you push your head against the mat between moans, grunts and short breaths until she stops.');
      } else {
        scene.text('"Oh please Tatiana! What are you waiting for?!"');
        scene.text('Somewhat frustrated at Tatiana\'s parsimony, you put a hand between your thighs and open your lower lips and she, understanding the message, doesn\'t waste any more time with the synthetic member, pushing it against your wet, sticky twat.');
        scene.text('"Yes!" you moan between gritted teeth as she unrelentingly pushes the phallic simulacrum up your vagina, making you push your head against the mat between moans, grunts and short breaths until she stops.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'D3');
    qspCall(s, 'arousal', 'vaginal_dildo', 30, 'self');
    qspCall(s, 'arousal', 'anal_dildo', (-30), 'self');
    qspCall(s, 'arousal', 'dildo_suck', (-30), 'self');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/tatiana/sex/f3.jpg');
    if ((!((s as any).pcs_throat ?? 0))) {
      scene.text('With another loud "SNAP!", Tatiana throws away the pair of gloves and kneels by your side. One of her hands grabs the back of your head and the other guides the last power-dildo towards your mouth, pushing it beyond your lips.');
      scene.text('You try to take the painfully big dildo into your mouth, but as it reaches your throat, you begin coughing, and Tatiana removes the jawbreaker.');
      // TODO-QSP: dynamic text: "Easy <<$pcs_nickname>>! Just… play with it. Let's leave the deepthroating for <...
      scene.text(`"Easy ${((s as any).pcs_nickname ?? 0)}! Just… play with it. Let's leave the deepthroating for <i>professionals</i>."`);
      scene.text('She keeps the dildo in front of your face and turns it on. It begins lightly slap your face as you try to lick the shaft, but this is only a distraction, as Tatiana pushes the fucking machines\' controls before you, and with a devilish smile, turns all of them on.');
    } else {
      if (((s as any).pcs_throat ?? 0) < 15) {
        scene.text('With another "SNAP!", Tatiana throws away the pair of gloves and kneels by your side. One of her hands grabs the back of your head and the other guides the last power-dildo towards your mouth, pushing it beyond your lips.');
        // TODO-QSP: dynamic text: You try to take the painfully big dildo into your mouth, but is an ordeal as the...
        scene.text(`You try to take the painfully big dildo into your mouth, but is an ordeal as the jawbreaker repeatedly triggers your gag reflex, but even then, you somehow chain a series of sucks and licks. "Easy ${((s as any).pcs_nickname ?? 0)}! Just… play with it. I haven't even turned it on!"`);
        scene.text('Then, with evil parsimony, she turns it on and you begin to struggle to suck the animated sex toy as it pistons in and out of your mouth, but this is only a distraction, as Tatiana pushes the fucking machines\' controls before you, and with a devilish smile, turns all of them on.');
      } else {
        scene.text('With another loud "SNAP!", Tatiana throws away the pair of gloves and kneels by your side. One of her hands grabs the back of your head and the other guides the last power-dildo towards your mouth, pushing it beyond your lips.');
        // TODO-QSP: dynamic text: You take the big dildo into your mouth with ease, making Tatiana raise a brow. "...
        scene.text(`You take the big dildo into your mouth with ease, making Tatiana raise a brow. "Easy ${((s as any).pcs_nickname ?? 0)}! Just… play with it. This isn't a competition."`);
        scene.text('Then, with the dildo firmly in your mouth, she turns it on and it begins pistoning down your throat, but this is only a distraction, as Tatiana pushes the fucking machines\' controls before you, and with a devilish smile, turns all of them on.');
      }
    }
    scene.text('With a series of mechanical sounds, the piston-powered dildos begin to pound your innards, making you moan and grunt in both joy and distress as Tatiana carefully adjusts the power settings so she maximizes the pleasure and minimises the pain. The sensations are… extreme as your body tries to adapt to the constant assault.');
    scene.text('Your arousal grows little by little as your holes are pounded, Tatiana\'s magic quickly feeding into your mana and putting your nerves on fire, inducing intensities that <i>mundane</i> sex can\'t match, making your mind lose focus as something warm grows in your core.');
    scene.text('Finally, there is a sexual climax that makes you scream in delight as your magical core liberates your mana, causing it to course through your nerves, eliciting wave after wave of orgasmic bliss and causing you to collapse on the mat in a heaving mess.');
    scene.actions([
      { label: 'Time for a lesson', goto: ['tatiana_lab', 'lesson<<tat_lesson_number>>'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLesson1(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('As you recover your breath, a more than a little giddy Tatiana falls beside you.');
  scene.text('"Okay, now comes a long-winded lesson about what spells and techniques are! Let\'s see… The old geezers in The Council like to say that they are the armor, tools and weapons of the wizard. Acts of will that have taken shape thanks to years of learning in musty libraries! Yeah, pretty poetic for something that a five-year-old can improvise."');
  scene.text('She pauses for a moment, playing with the talisman\'s fragment with a dopey smile before continuing.');
  scene.text('"It doesn\'t matter what the old guard wants you to believe, spells are just mnemonic tricks that use words, gestures and all that corny paraphernalia that covers our arts to <i>somehow</i> center our minds to <i>somehow</i> channel mana, to <i>somehow</i> cheat the cosmos. Techniques are spells that <i>somehow</i> can be trained until made instinctive beyond any ritual, but remember my student, beyond any methodology, what matters is our volition, passions and drive to reshape the world."');
  scene.text('You take a few minutes to digest Tatiana\'s information "So, you\'re saying that I can… em… do anything by only wishing it?" Tatiana give you a conspiratorial smile in reply.');
  scene.text('"Exactly! Of course, I admit that it isn\'t as easy as just wishing for something. We wizards have spent millennia perfecting a methodology to ease the process in the form of spells, but at best, that is an <i>if you do this, this happens</i> situation. Your willpower is the true drive behind spellcasting and you will soon discover that beyond using rituals for training, the most basic effects can be implemented just as a reflex action, with more powerful magic getting easier as you grow in power and experience. And now for the fun part!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
    qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
    scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
    scene.text('Tatiana gets up with a jump and begins to slowly move her hands in a series of complex gestures accompanied with some weird words, and soon, rolling mist begins to fall through her fingers, quickly obscuring the vision in the room.');
    // TODO-QSP: dynamic text: "Spooky isn't it? This is Fog <<$pcs_nickname>>, one of the most venerable and s...
    scene.text(`"Spooky isn't it? This is Fog ${((s as any).pcs_nickname ?? 0)}, one of the most venerable and simple spells. It's a favorite of the High Sidhe that used it in ancient ages for that <i>other wordly</i> scenery in their holdings. Today - thanks to The Veil - it has fallen into disuse, but it's useful for a quick and dirty combat distraction."`);
    scene.text('Tatiana dissolves the spell and makes a gesture for you to follow her to the lab, where she turns on a bunsen burner and proceeds to extend her hand over it, letting the flame burn the skin of her hand as the smell of burned flesh drifts through the lab.');
    // TODO-QSP: dynamic text: "Impressed <<$pcs_nickname>>? This is called… Pain Block! Yes, it sounds uncreat...
    scene.text(`"Impressed ${((s as any).pcs_nickname ?? 0)}? This is called… Pain Block! Yes, it sounds uncreative, but you'll find that most spells have fairly simple names, but beyond that little tidbit, this spell is one of the most useful out there, because beyond its mundane practicality to stop all pain sensation, it will do it <i>without eliminating the touch sense OR get you groogy</i>. Unfortunately, it can't be used in combat to eliminate systemic shock, but you can't have everything… <i>yet</i>."`);
    scene.text('After saying this, Tatiana finally withdraws her hand, which has been burned down to the bone, and concentrates. The flesh quickly begins to regrow around her hand.');
    // TODO-QSP: dynamic text: "How do you heal wounds? That's something for the next lesson <<$pcs_nickname>>....
    scene.text(`"How do you heal wounds? That's something for the next lesson ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLesson2(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('Juggling the talisman\'s fragment between her fingers, Tatiana seems ready for your next lesson, and without missing a beat, she shows you some new magical passes that causes a second Tatiana to appear.');
  // TODO-QSP: dynamic text: "Neat trick, isn't it <<$pcs_nickname>>? Now look at this!"
  scene.text(`"Neat trick, isn't it ${((s as any).pcs_nickname ?? 0)}? Now look at this!"`);
  scene.text('The cheerful pair then do some coordinated dance moves before one of them bops your nose and disappears. Was that an illusion? You haven\'t sensed anything beyond a magical tingle.');
  scene.text('"This is a combat illusion called Clone. It will duplicate your moves, but will only stay within a few meters of you. With some luck, it will take a hit meant for you. And now to the fun part!"');
  scene.text('Tatiana picks up a knife from one of the shelves and without hesitation or pain, makes a deep cut along her palm. Blood begins to pour from the wound before suddenly stopping as Tatiana passes her other hand over the now quickly closing wound.');
  scene.text('"Ta-da! This is the Cure Wounds spell, and a personal favorite of magicians around the world! I\'m going to skip over how it uses your manamorphic patron to reconstitute your biological template, at least until you have a fifteen years apprenticeship under your belt. This is the most basic of the <i>common</i> healing spells, and like most have a limitation. You can\'t use it during combat and it can\'t be used on other beings. Its power is somewhat limited, as it\'s designed to heal scrapes and superficial wounds, the sort of things that are fixed with a visit to the doctor, but with enough mana, you can use it repeatedly to recover from truly grievous wounds. However, it will not heal long term damage, diseases or <i>cosmetic</i> changes. Beyond that, well… it\'s better if you experiment a little on your own to learn all the minutia. That will be all for now. This is the end of this lesson."');
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson3(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('After your <i>show</i>, a blushing Tatiana looks at you, her lips quivering as she seems to struggle to speak. It\'s strange, as Tatiana has never been affected by your <i>performances</i>. Maybe you have broken her resistance? That seems to be the case as she moves her hand towards your chin. She caresses you and whispers, and suddenly your muscles fight to move.');
  // TODO-QSP: dynamic text: "This is your fault <<$pcs_nickname>>! All that shiny mana! All that beautiful… ...
  scene.text(`"This is your fault ${((s as any).pcs_nickname ?? 0)}! All that shiny mana! All that beautiful… you! I'm not going to let Reinhold, The Council or anyone else put their hands on you! You are mine and mine alone, and I know! I know that you will eventually learn to love me as much as I love you!"`);
  scene.text('You stand there, the strength sapped away from you as Tatiana leans in to kiss you, only to back away, her sudden <i>stalking creep mode</i> forgotten, and the sluggishness dissipating from your body.');
  scene.text('"What the hell Tatiana?! Why did you do that??!"');
  scene.text('Seriousness creeps back into her voice as she answers your questions. "A demonstration of the weak and underappreciated Stun, your new combat spell, and the sort of things the wrong class of sexual deviant or <i>you</i> can do when your rival is affected. After this little window into the Dark side, I am going to teach you your next healing spell, Greater Cure Wounds. You will forgive me if I don\'t demonstrate, as this spell, even with the same limitations that Cure Wounds has, is powerful enough to bring you back to peak health from little magical hazards like… full body third-grade burns caused by magical fireballs. That is all for now, but I think I will teach you more specialized healing spells next time."');
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson4(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('Tatiana doesn\'t waste any time and begins to cast Fog, so the workshop is filled with wispy ribbons of mist.');
  // TODO-QSP: dynamic text: "This, <<$pcs_nickname>>, is Gust of Wind. The companion to the venerable Fog, a...
  scene.text(`"This, ${((s as any).pcs_nickname ?? 0)}, is Gust of Wind. The companion to the venerable Fog, and responsible for those creepy cold winds that scare the kids that get too close to my little hideout. Beyond that, its primary use in this age is to dispel Fog in a combat situation, as it lacks the power to do much beyond blowing the leaves."`);
  scene.text('As she is saying this, the mist disintegrates as a wave of gentle wind extends from the redheaded sorceress.');
  // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>, with that we finally end with the Fog/Gust Of Wind bin...
  scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}, with that we finally end with the Fog/Gust Of Wind binomial and can begin something more interesting, like the useful… Ta-Da! Cure Disease! Another vital part of the all-times favorite healing arts. This spell will cleanse you of most common diseases and will even act as a low-level painkiller, but also has the standard limitations of the <i>common</i> healing spells, such as only being used outside of combat. As an additional advertence, this isn't a get-out-of-the-hospital-free card. It's pretty good for things like STDs or the flu, but, like Cure Wounds, it will only treat things that can easily be dealt with by a visit to the local clinic."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson5(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('Tatiana doesn\'t wait for you to recover before placing a folder into your hands. Inside it is several photocopies full of magic theory for a spell, accompanied with photos showing hand gestures and a DVD.');
  scene.text('"The old geezers will scream bloody murder if they see this <i>disrespect</i>, but, hey, they aren\'t here! Those files will help you learn the more advanced Multi Clone spell. There isn\'t a great mystery about it. It\'s a combat spell that creates four clones of you that copy your movements and will disappear if touched, taking any hits meant for you."');
  scene.text('You observe the files, and can\'t negate that something is wrong with the presentation. However, Tatiana doesn\'t seem bothered and continues talking.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> we are reaching the point where I can't teach you anything el...
  scene.text(`"${((s as any).pcs_nickname ?? 0)} we are reaching the point where I can't teach you anything else, but this little spell here is going to be awesome. This is called Heal, your first and probably last combat healing spell. Yes. you can treat your - and only yours - wounds when somebody is trying to kill you! However, don't get cocky. This spell is less mana intense than Cure Wounds, but it isn't a substitute for that one, so if you aren't in a life-or-death situation choose the latter.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson6(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('Without paying attention to your recovering form, Tatiana begins to rummage through the stands until she picks up a screwdriver and returns to your side. She kneels, extends her left hand over the floor and slams the screwdriver down. There is a loud crack and you feel a subtle mana explosion as the tool fails to hurt her, but with determination, Tatiana continues her assault, until two more tries later, the tool manages to impale the offending hand.');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, I was tired of explaining without demonstartions, and t...
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, I was tired of explaining without demonstartions, and this way I can demonstrate two spells. The first one is Energy Shield, a combat spell, and your last line of defense if everything else fails. Unfortunately, it has two flaws - first: It is ablative, which means that will lose efficiency as it absorbs damage, and - two: It is designed for use against low-impact attacks, like punches and the occasional melee weapon, but anything more potent will shred it. So don't try to go against bullets."`);
  scene.text('You watch as Tatiana pulls out the screwdriver, leaving an ugly wound that pours blood onto the floor, only to stop as the wound begins to slowly heal.');
  // TODO-QSP: dynamic text: "This is the last healing spell that I am going to teach you <<$pcs_nickname>>. ...
  scene.text(`"This is the last healing spell that I am going to teach you ${((s as any).pcs_nickname ?? 0)}. It's called Regeneration, and it will heal you for two hours with a mana cost similar to Heal. Its healing is a little random, better than Cure Wounds, but switching urgency for time. Beyond that, it has the standard limitations of being a no-combat personal spell. This is the limit of the <i>common</i> healing spells. Beyond this point, most of them fall inside specialized healing arts or my Body-Modding Art."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson7(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('After your last <i>peep show</i>, Tatiana gives you an old leather-bound folder that contains instructions for a new spell. What catches your attention are the series of carefully manuscripted notes that radiate a faint magical aura. There is even the soft smell of… dahlias?');
  // TODO-QSP: dynamic text: "Yeah, I know <<$pcs_nickname>>… pretty. These are the sort of things that our e...
  scene.text(`"Yeah, I know ${((s as any).pcs_nickname ?? 0)}… pretty. These are the sort of things that our elders do with their free time. They don't seem to realize that the printing press is a thing, but let's continue with your training."`);
  scene.text('"These notes show your new combat spell, Haste. Want to dodge bullets or run at supersonic speed? Sorry, but forget about it. That magic is possible, but it\'s heavily specialized, costly and will break the disbelief that The Veil enforces. This spell will indeed enhance your reaction time to the human upper limit, and if you take your time to train, beyond, but it isn\'t so blatant to let you catch bullets with your hands. At least without a lot of luck and some magical protection to evade them."');
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterLesson8(s: GameState, scene: SceneBuilder): void {
  (s as any).tat_lesson_number = ((s as any).tat_lesson_number ?? 0) + (1);
  qspCall(s, 'spellList', 'addAvailableSpells', 'basicSpells');
  qspCall(s, 'spellList', 'addAvailableSpells', 'healSpells');
  scene.img('images/characters/city/tatiana/Tatianalesson.jpg');
  scene.text('Tatiana looks a little off, with a distant gaze, thinking about something as you recover from your last <i>ride</i>. It takes you to loudly cough to take her away from that reverie, and make her pay attention to your naked, kneeling form.');
  // TODO-QSP: dynamic text: "Hm? Sorry <<$pcs_nickname>>. I was just… you know thinking in ways to continue ...
  scene.text(`"Hm? Sorry ${((s as any).pcs_nickname ?? 0)}. I was just… you know thinking in ways to continue milking your mana, but… I remember that I have this little thing called <i>morality</i>, and a deal to respect… Damn!"`);
  scene.text('She then sighs dramatically, smiles and turn towards you.');
  // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, this is the last lesson. I am not qualified to teach yo...
  scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, this is the last lesson. I am not qualified to teach you any more magic as those spells in the Body-Modding Art are just too advanced for a neophyte like you. Maybe I will teach you later down the line, but not now. So, what will my last lesson be?"`);
  scene.text('Tatiana then passes you a notebook with a lot of biological-magical information about… you? It\'s all written in a precise and clear way, with theories and speculations about your potential, including managing a new spell called… Berserker Rage?');
  // TODO-QSP: dynamic text: "If you want to know <<$pcs_nickname>>, that is a peek into the thesis that I am...
  scene.text(`"If you want to know ${((s as any).pcs_nickname ?? 0)}, that is a peek into the thesis that I am writing about your nature and that spell? Well, it's a <i>common</i> combat spell that will enhance your agility, strength and endurance to the human limit for two hours, and with training, beyond. You must understand that the name isn't a misnomer, and you are one of the few lucky ones that can use it without losing their mind. So, there you go!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'End of lesson', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterTatianasuctalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tatiana</b></center>');
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if (((s as any).sucpcinfo ?? 0) < 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('As you both settle onto the couch, Tatiana turns to you and says, "Ok, tell me what happened."');
    scene.text('You spend the next 15 minutes telling her about the Fairy, the odd dream, ');
    if (((s as any).succubusQW ?? 0) < 11) {
      scene.text('and the energy you let loose the other night.');
    } else {
      if (((s as any).succubusQW ?? 0) === 11) {
        scene.text('the energy you let loose the other night, and the feeling you get when you\'ve had sex.');
      } else {
        scene.text('the energy you let loose the other night, the feeling you get when you\'ve had sex, and the reaction you had to almost being raped.');
      }
    }
    scene.text('');
    scene.text('She thinks about it for a moment and then says, "Well, I have a couple of ideas, but no sense guessing when I can just magically examine you."');
    scene.text('She hops up and says, "Get undressed and lie down on the couch."');
    (s as any).sucpcinfo = 2;
    return;
    scene.actions([
      { label: 'Undress and lie down', goto: ['succubus', 'tatianaask'] },
    ]);
  }
  if (((s as any).tatisucsex ?? 0) === 0  &&  ((s as any).tatisucsexask ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Ask Tatiana if she wants to try Succubus Sex': tatisucsexask = daystart
    scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'Tatianasucsexask'] }]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her to repeat what she knows about Succubae', goto: ['succubus', 'tatianaask'] },
    { label: 'Ask her if she has learned anything new about Succubae', handler: (st: GameState) => {
    if (((s as any).sucinfoday ?? 0) !== 0  &&  ((s as any).sucinfoday ?? 0) <= ((s as any).daystart ?? 0)) {
      if (((s as any).sucpcinfo ?? 0) === 4  &&  ((s as any).succublvl ?? 0) >= 2) {
        scene.text('"Actually, I have gotten some more information about Succubae."');
        scene.text('"I heard from one of my mage contacts, in Sydney, Australia of all places, and he passed on some more details."');
        (s as any).sucpcinfo = 5;
        (s as any).sucinfoday = ((s as any).daystart ?? 0) + 10 + (Math.floor(Math.random() * 8) + 0);
        scene.actions([
          { label: 'Ask her to tell you', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', 'tatianaask', 1
  } },
        ]);
      } else {
        if (((s as any).sucpcinfo ?? 0) === 5) {
          scene.text('"Actually, I have gotten some more information about Succubae."');
          scene.text('"I heard from an old friend of mine who is now living in Morocco and actually has a Succubus for a lover. She said that after they had been together for some time, they discovered that, with her help, her Succubus lover learned something new."');
          (s as any).sucpcinfo = 6;
          (s as any).sucinfoday = ((s as any).daystart ?? 0) + 10 + (Math.floor(Math.random() * 8) + 0);
          scene.actions([
            { label: 'Ask her to tell you', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', 'tatianaask', 2
  } },
          ]);
        } else {
          scene.text('No, I haven\'t.');
          scene.actions([
            { label: 'Continue', goto: ['tatiana_lab', 'Tatianasuctalk'] },
          ]);
        }
      }
    } else {
      scene.text('No, I haven\'t.');
      scene.actions([
        { label: 'Continue', goto: ['tatiana_lab', 'Tatianasuctalk'] },
      ]);
    }
  } },
    { label: 'Change topics', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterTatianasucsexask(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tatiana</b></center>');
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if ((!((s as any).tatisucsex ?? 0))) {
    if (((s as any).TatianaSex ?? 0) === 1) {
      scene.text('You give Tatiana what you hope is a "come hither" smile and ask,');
      scene.text('"So, you want to give Succubus sex a try?"');
    } else {
      scene.text('You give Tatiana a shy smile and ask,');
      scene.text('"Do you want to try Succubus sex?"');
    }
  } else {
    scene.text('You give Tatiana a bright smile and ask,');
    scene.text('Hey Tatiana, you up for some Succubus Sex?');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'She answers:', handler: (st: GameState) => {
    if ((!((s as any).tatisucsex ?? 0))) {
      scene.text('She gives you a wide eyed look before saying,');
      if (((s as any).succublvl ?? 0) + ((s as any).TatianaSex ?? 0) < (Math.floor(Math.random() * 7) + 0)) {
        // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_firstname>>, I just don't have the time now."
        scene.text(`"I'm sorry, ${((s as any).pcs_firstname ?? 0)}, I just don't have the time now."`);
        scene.actions([
          { label: 'Move on to something else', goto: ['tatiana_lab', 'Tatiana'] },
        ]);
      } else {
        scene.text('"I would love to!", with a wide smile.');
        scene.text('She leads you over to the couch, and you both strip.');
        scene.actions([
          { label: 'Proceed', goto: ['succubus', 'tatianasex'] },
        ]);
      }
    } else {
      if (((s as any).tatisucsexday ?? 0) <= ((s as any).daystart ?? 0)) {
        if (1 + (((s as any).succublvl ?? 0) * 2) + ((s as any).tatisucsex ?? 0) < (Math.floor(Math.random() * 20) + 1)) {
          // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>, I just don't have the time now."
          scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}, I just don't have the time now."`);
          scene.actions([
            { label: 'Move on to something else', goto: ['tatiana_lab', 'Tatiana'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: She gives you a "come hither" smile and says, "I would love to, <<$pcs_nickname>...
          scene.text(`She gives you a "come hither" smile and says, "I would love to, ${((s as any).pcs_nickname ?? 0)}!"`);
          scene.text('You both head toward the couch, stripping as you go.');
          scene.text('Once there, you both sit down facing each other, and she looks at you in anticipation.');
          scene.actions([
            { label: 'Proceed', goto: ['succubus', 'tatianasex'] },
          ]);
        }
      } else {
        if (((s as any).tatisucsexday ?? 0) - ((s as any).daystart ?? 0) > 1) {
        }
        scene.text('She looks at you with a sad smile and says,');
        // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>, I need at least <<tatisucsexday - daystart>> more...
        scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}, I need at least ${((s as any).tatisucsexday ?? 0) - ((s as any).daystart ?? 0)} more ${((s as any).scsextmp ?? 0)}."`);
        scene.actions([
          { label: 'Move on to something else', goto: ['tatiana_lab', 'Tatiana'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterTatianasexreject(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Tatiana</b></center>');
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if (((s as any).scpopt ?? 0) === 2) {
    scene.text('I\'m sorry, Tatiana, I just don\'t have the time right now.');
    (s as any).scpopt = 0;
    // TODO-QSP: killvar 'sclocrt'
    // TODO-QSP: killvar 'scargrt'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterSuctrainsex(s: GameState, scene: SceneBuilder): void {
  scene.text('She suddenly lunges at you and starts kissing you! You\'re so surprised it takes you a bit to respond, and before you can do anything, she is nibbling your ear and whispering, "Let it go…"');
  qspCall(s, 'npcStat', 'A176');
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_horny ?? 0) >= 100) {
    scene.text('You\'re so shocked at this you suddenly feel a powerful orgasm rush through you, causing you to cry out even as it rushes down the link to Tatiana, giving her a powerful orgasm as well!');
    scene.text('Then, you feel your control slip…');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'tatianasex'] },
    ]);
  } else {
    (s as any).scfwon = 2;
    (s as any).scpopt = 1;
    // TODO-QSP: dynamic text: You only have moments to decide, do you give in and let <<$sucself1>> go or do y...
    scene.text(`You only have moments to decide, do you give in and let ${((s as any).sucself1 ?? 0)} go or do you reign it in?`);
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'tatianasex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSuctraining(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sucpcinfo ?? 0) < 2) {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Tatiana</b></center>');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('The moment you walk into her lab, Tatiana\'s head jerks up and she hurries over to you.');
    scene.text('She stares at you for several seconds, then demands, "What the hell happened to you!?!?"');
    scene.text('You start to answer her when she holds up her hand and says, "Wait, come sit on the couch and tell me."');
    scene.text('She turns away from you and walks toward the couch.');
    return;
    scene.actions([
      { label: 'Follow her', goto: ['tatiana_lab', 'Tatianasuctalk'] },
    ]);
  } else {
    if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3  &&  ((s as any).sctrainprep ?? 0) === 1) {
      if (((s as any).tatisucsexday ?? 0) > ((s as any).daystart ?? 0)  &&  ((s as any).tatisucsexday ?? 0) - 5 >= ((s as any).daystart ?? 0)) {
        qspCall(s, 'stat', '');
        scene.text('<center><b>Tatiana</b></center>');
        scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
        scene.text('You attempt to enter Tatiana\'s lab, but an invisible barrier stops you. Tatiana apparently heard you as she rushes over and says, "What\'s wrong? Do we need to cancel?"');
        return;
        scene.actions([
          { label: 'Yes, I need to cancel', handler: (st: GameState) => {
    scene.text('"Are you sure?"');
    scene.actions([
      { label: 'Yes, I\'m sure', handler: (st: GameState) => {
    if (((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0) + 7) {
      (s as any).sctrainprep = 0;
      qspCall(s, 'money', 'earn', 5000);
      // TODO-QSP: dynamic text: "Ok, good thing I hadn't bought anything yet." and she hands you back the <<$fun...
      scene.text(`"Ok, good thing I hadn't bought anything yet." and she hands you back the ${qspFunc(s, 'money', 'string_profit', 5000)} before going back to her studying.`);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 3;
      (s as any).sctrainprep = (-1);
      scene.text('"Ok, I\'ll dump the "battery" potion."');
      scene.text('With that, she walks over to her workbench and dumps the contents of several beakers into a barrel that flairs with magic as she does so.');
    }
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'start'] },
    ]);
  } },
      { label: 'No, never mind continue your preparations', handler: (st: GameState) => {
    scene.text('She gives a small shake of her head and says, "Then get out of here, I can\'t have you distracting me!"');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
          { label: 'No…', handler: (st: GameState) => {
    scene.text('You say, "No, I just wanted to see you."');
    // TODO-QSP: dynamic text: She answers, "That's sweet, but I can't have you distracting me, come back all c...
    scene.text(`She answers, "That's sweet, but I can't have you distracting me, come back all charged up in ${((s as any).tatisucsexday ?? 0) - ((s as any).daystart ?? 0)} days!"`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  }, goto: ['city_center', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).tatisucsexday ?? 0) > ((s as any).daystart ?? 0)  &&  ((s as any).tatisucsexday ?? 0) - 5 < ((s as any).daystart ?? 0)) {
          if (((s as any).tatisucsexday ?? 0) - ((s as any).daystart ?? 0) > 1) {
          }
          // TODO-QSP: dynamic text: You attempt to enter Tatiana's lab, but an invisible barrier stops you. Tatiana ...
          scene.text(`You attempt to enter Tatiana's lab, but an invisible barrier stops you. Tatiana apparently heard you as she shouts from across the lab, "I've already taken the first potion, so I can't come anywhere near you, come back all charged up in ${((s as any).tatisucsexday ?? 0) - ((s as any).daystart ?? 0)} ${((s as any).scsextmp ?? 0)}!"`);
          return;
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  }, goto: ['city_center', ''] },
          ]);
        } else {
          if (((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0)  ||  ((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0) - 1) {
            qspCall(s, 'stat', '');
            scene.text('<center><b>Tatiana</b></center>');
            scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
            scene.text('The instant you walk into the lab, Tatiana\'s head snaps up and she stares hard at you as you approach the barrier.');
            if (((s as any).sucexcess ?? 0) >= 100  &&  ((s as any).succhungry ?? 0) < -2) {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              scene.text('As you step through the barrier, Tatiana seems to teleport to you and start kissing you.');
              scene.text('She then starts pulling you toward her workbench while saying between kisses, "Thank (kiss) goodness (kiss) you\'re (kiss) here (kiss) and ready (kiss)! You wouldn\'t (kiss) believe (kiss) how (kiss) <i><b>horny</b></i> (kiss) carrying (kiss) all this (kiss) sexual (kiss) energy (kiss) has made me!"');
              scene.text('She suddenly turns away from you, and you realize that you have reached her workbench. She grabs two smallish vials off the top, pops the tops off both, and hands you one, saying, "Drink this," before downing the other.');
              scene.text('It tastes like strawberry syrup.');
              scene.text('This time you\'re ready when Tatiana lunges at you, and you resume kissing as you lead her toward the couch while she is stripping both your clothes off and you feel a large amount of your stored energy being released into your body.');
              scene.text('Once there, you both sit down facing each other. She looks at you with burning lust and says, "Do it!"');
              return;
              scene.actions([
                { label: 'Proceed', goto: ['succubus', 'tatianasex'] },
              ]);
            } else {
              if (((s as any).sucexcess ?? 0) < 100  &&  ((s as any).succhungry ?? 0) > -2  &&  ((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0)) {
                scene.text('She then says, "Damn! You don\'t have enough reserve <i>or</i> stored energy! Run over to the Park and find some robbers or something, then get back here tomorrow!"');
              } else {
                if (((s as any).succhungry ?? 0) > -2  &&  ((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0)) {
                  scene.text('She then says, Damn! You don\'t have enough reserve energy! Run over to the Park and find some robbers or something, then get back here tomorrow!');
                } else {
                  if (((s as any).succhungry ?? 0) > -2  &&  ((s as any).tatisucsexday ?? 0) === ((s as any).daystart ?? 0) - 1) {
                    scene.text('She then says, "Damn! You don\'t have enough reserve energy and there isn\'t enough time for you to build it up." She then sighs and says, "Go ahead and take off, I need to bleed this energy off safely."');
                    (s as any).sctrainprep = (-1);
                  } else {
                    scene.text('She then says, "Damn! You don\'t have enough stored energy! Run over to the Park and find some robbers or something, then get back here!"');
                  }
                }
              }
            }
            return;
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
            ]);
          } else {
            scene.text('The barrier is down when you get to the lab, and Tatiana calls from across the room, "You\'re too late, I had to release the energy, and we\'ll need to start over."');
            (s as any).sctrainprep = (-1);
            return;
            scene.actions([
              { label: 'Continue', goto: ['tatiana_lab', 'start'] },
            ]);
          }
        }
      }
    }
  }
  (s as any).sucbypass = 1;
  scene.actions([{ label: 'Continue', goto: ['tatiana_lab', 'start', 'no_time'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMissions(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Tatiana</b></center>');
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
  if ((!((s as any).TatianaMissionQW ?? 0))) {
    (s as any).TatianaMissionQW = 1;
    (s as any).TatianaMissionDay = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Tatiana looks up from the pile of files she always seems to be sifting through w...
    scene.text(`Tatiana looks up from the pile of files she always seems to be sifting through when she notices you. "${((s as any).pcs_firstname ?? 0)}, finally! I've been waiting for you. We need to talk."`);
    scene.text('"What about?"');
    scene.text('"Well, you\'ve had some time to acclimate yourself to your new situation and to process everything Reinhold and I told you, so," she smiles, "it\'s time we started your actual training."');
    scene.text('You feel a rush of excitement going through you, and images of shooting fireballs from your hands and parting the sea come before your inner eye. "Great!" You exclaim. "I\'m so ready for that."');
    scene.text('Tatiana probably guessed what you were thinking, because she chuckles and placates, "That doesn\'t mean we\'re gonna teach you super-powerful spells. At least not yet." She gives the words a moment to take effect; your enthusiasm for her plans, figuratively throbbing and erect a second ago, shrivels and goes limp by the time she continues. "This part of your training is the most important: You will actually put your skills, senses and knowledge into practice."');
    scene.text('The last bit rouses your interest once more. "Into practice? You mean like doing missions for the council?"');
    scene.text('"Well, the council\'s kinda responsible for the big leagues, which is way more than you could handle yet. But long-term, yes." Her tone takes on a mocking quality. "Once Reinhold thinks you\'re ready, I\'m sure he\'ll swoop in, take credit for all the progress you have made thanks to me and swamp you with dangerous adventures. That\'d be just like the old bastard." Tatiana sees the uncertainty with which you look at her, grins and shakes her head, confirming that it was all in good humor.');
    scene.actions([
      { label: 'What kind of missions?', handler: (st: GameState) => {
    scene.text('"So," you struggle to imagine what to expect, "what would these missions be like?"');
    scene.text('"Nothing dangerous," Tatiana reassures you, "at least not while you are still learning the basics." She walks over to a pile of folders and holds one up. "It\'d be more along the lines of finding out why somebody\'s dog has two tails or," she holds up another folder, "investigating strange sounds people hear coming from their cellar."');
    scene.text('You blankly stare at her for a few seconds, expecting Tatiana to chuckle and reveal her explanation as a joke once more, but she doesn\'t. "That… sounds like-"');
    scene.text('"Bullshit?" She offers helpfully.');
    scene.text('"Conspiracy crap, ghost stories and all that," is what you choose to say instead.');
    scene.text('Tatiana nods understandingly. "Yeah, it does. But remember, normal people don\'t see magic for what it is."');
    scene.text('"Right," you remember, "little green men and poltergeists."');
    scene.text('Tatiana smiles as you quote her and nods. "And some of those things really turn out to have magical causes: The dog with two tails had been experimented on by one of us, so it was practically bursting with magic. As for the voices…" her smile turns lewd, "those were just some tenants having some extramarital fun away from prying eyes, regularly and loudly."');
    scene.actions([
      { label: 'Why are we doing this?', handler: (st: GameState) => {
    scene.text('You feel your face heating up slightly at the thought. Something about this is bothering you, though. "But… why would we even look into this? I mean, it sounds interesting enough, but is there a reason behind it?"');
    scene.text('Tatiana shrugs. "Well, you <i>could</i> go and get some ancient tomes, lock yourself into an ivory tower and spend half a century or something reading about magic, like most of the old farts on the council do. <b>OR</b>," she spreads her arms to point towards her many files and books on one hand and the exit on the other, "you could just cover the basics and then go out and experience magic first-hand, like I do."');
    scene.text('You stare at the heaps and piles of paper incredulously - they are a multiple of everything you\'ve read in your entire life! "Those are the basics?!"');
    scene.text('"Yep," she laughs, "if you wanna really understand how magic works and why it does this at one time and that at another, you gotta get some reading done. Trust me, if there was any way around it, I would have found it. But magic makes the reading easier and quicker, and it\'s sooo worth it. The things you can do once you grasp what energies the universe holds are incredible. And I\'ve only just scratched the surface."');
    scene.text('"What do you mean by \'energies of the universe\'? I thought you said that magic only exists in living things, like plants and animals."');
    scene.text('"Did I?" She looks thoughtful but shrugs again. "Well, it\'s a little complicated, but to put it simply: when scientists speak of \'dark matter\' and \'dark energy\', then, in reality, they are trying to explain the magic in this plane of existence and all the others, like demons and the magic that exists in their \'dimension\' or whatever you\'d wanna call it. But," she waves her hand as if to shoo away a pesky fly, "you don\'t have to concern yourself with that right now. When the time comes, Reinhold can explain it to you in more detail - hell, considering that he\'s your mentor, I\'ve done an awful lot of explaining already… Now, let\'s go!"');
    scene.text('With that, Tatiana turns towards the exit once more and beckons you to follow.');
    scene.text('"Go where?" You ask.');
    scene.text('"To the magic!" She answers cryptically.');
    scene.actions([
      { label: 'Go to the magic (?)', goto: ['tatiana_missions', 'intro'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "Hey <<$pcs_firstname>>, are you up for a magical adventure?" Tatiana asks with ...
      scene.text(`"Hey ${((s as any).pcs_firstname ?? 0)}, are you up for a magical adventure?" Tatiana asks with a grin.`);
      scene.actions([
        { label: 'Always', goto: ['tatiana_missions', 'start'] },
        { label: 'Not right now', goto: ['tatiana_lab', 'start'] },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, glad you're here." Tatiana smiles at you. "What do you...
        scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}, glad you're here." Tatiana smiles at you. "What do you say? Feel ready for a mission?"`);
        scene.actions([
          { label: 'Sure, let\'s do this', goto: ['tatiana_missions', 'start'] },
          { label: 'Not right now', goto: ['tatiana_lab', 'start'] },
        ]);
      } else {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>." Tatiana looks at you expectantly. "Would you like to ...
        scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}." Tatiana looks at you expectantly. "Would you like to do an investigation?"`);
        scene.actions([
          { label: 'Gladly', goto: ['tatiana_missions', 'start'] },
          { label: 'Not right now', goto: ['tatiana_lab', 'start'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStage_SMS(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    // TODO-QSP: exit
  }
  if (((s as any).tatiana_spell_reminder ?? 0) > 0) {
    (s as any).tatiana_spell_reminder = ((s as any).tatiana_spell_reminder ?? 0) - (1);
  }
  if (((s as any).tatiana_succubus_reminder ?? 0) > 0) {
    (s as any).tatiana_succubus_reminder = ((s as any).tatiana_succubus_reminder ?? 0) - (1);
  }
  if (((s as any).tatiana_mission_reminder ?? 0) > 0) {
    (s as any).tatiana_mission_reminder = ((s as any).tatiana_mission_reminder ?? 0) - (1);
  }
  if (((s as any).tatiana_spell_reminder ?? 0) !== 0  &&  ((s as any).tatiana_succubus_reminder ?? 0) !== 0  &&  ((s as any).tatiana_mission_reminder ?? 0) !== 0) {
    return;
  }
  (s as any).result = qspFunc(s, 'tatiana_lab', 'SMS_conditions');
  if (((s as any).result ?? 0) > 0) {
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A176') : -1) < 0) {
      qspCall(s, 'telefon', 'AddContact', 'A176', 'icon_na', 1);
    }
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'A176', "gs 'tatiana_lab', 'Add SMS', <<result>>", "totminut > <<t...
  }
  // TODO-QSP: end
  scene.build();
}

function enterSMSConditions(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).tatiana_spell_reminder ?? 0))) {
    if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellavtoklon ?? 0) === 0  &&  (!((s as any).spellbefshild ?? 0))) {
      (s as any).result = 3;
    } else {
      if (((s as any).pcs_magik ?? 0) >= 6  &&  (!((s as any).spellbefshild ?? 0))) {
        (s as any).result = 2;
      } else {
        if (((s as any).pcs_magik ?? 0) >= 5  &&  (!((s as any).spellavtoklon ?? 0))) {
          (s as any).result = 1;
        }
      }
    }
  }
  if ((!((s as any).tatiana_succubus_reminder ?? 0))) {
    if (((s as any).succubusflag ?? 0) === 1  &&  (!((s as any).sucbypass ?? 0))) {
      if (((s as any).sucpcinfo ?? 0) < 2) {
        (s as any).result = ((s as any).result ?? 0) + (10);
      } else {
        if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3  &&  ((s as any).sctrainprep ?? 0) === 1) {
          (s as any).result = ((s as any).result ?? 0) + (20);
        } else {
          if (((s as any).tatisucsex ?? 0) > 0  &&  ((s as any).sucinfoday ?? 0) !== 0  &&  ((s as any).sucinfoday ?? 0) <= ((s as any).daystart ?? 0)) {
            (s as any).result = ((s as any).result ?? 0) + (30);
          }
        }
      }
    }
  }
  if ((!((s as any).tatiana_mission_reminder ?? 0))) {
    if (((s as any).TatianaMissionQW ?? 0) > 1  &&  ((s as any).tobiQW ?? 0) > 0  &&  ((s as any).TatianaMissionDay ?? 0) + 30 < ((s as any).daystart ?? 0)  &&  ((s as any).TatianaMissionQW ?? 0) < ((s as any).TatianaMissionTotal ?? 0)) {
      (s as any).result = ((s as any).result ?? 0) + (100);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddSMS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'A176');
  ((s as any).SMSTree ?? {})['0'] = 'It\'s Tatiana, I need you to swing by the lab';
  ((s as any).SMSTree ?? {})['a1'] = 'There is a spell I think you would want to learn';
  ((s as any).SMSTree ?? {})['a2'] = 'There are some spells I think you would want to learn';
  ((s as any).SMSTree ?? {})['b'] = 'We should talk about your succubus issue';
  ((s as any).SMSTree ?? {})['c'] = 'I have a mission for you';
  ((s as any).SMSTree ?? {})['q'] = 'Add Tatiana to your contacts';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  if (((s as any).locArgs?.[1] ?? 0) % 10 === 3) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['a2']
    (s as any).tatiana_spell_reminder = 21;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) % 10 > 0) {
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['a1']
      (s as any).tatiana_spell_reminder = 21;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) / 10 % 10 > 0) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['b']
    (s as any).tatiana_succubus_reminder = 21;
  }
  if (((s as any).locArgs?.[1] ?? 0) / 100 % 10 > 0) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['c']
    (s as any).tatiana_mission_reminder = 21;
  }
  if (((s as any).contactAnon ?? 0)[(Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A176') : -1)] === 1) {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['q'], 'tatiana_lab', 'add_contact'
  }
  qspCall(s, 'SMStext_builder', 'add_sms', 'A176');
  qspCall(s, 'SMStext_builder', 'end');
  if (((s as any).locArgs?.[1] ?? 0) % 10 > 0) {
    (s as any).tatiana_spell_reminder = 21;
  }
  if (((s as any).locArgs?.[1] ?? 0) / 10 % 10 > 0) {
    (s as any).tatiana_succubus_reminder = 21;
  }
  if (((s as any).locArgs?.[1] ?? 0) / 100 % 10 > 0) {
    (s as any).tatiana_mission_reminder = 21;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddContact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).contactAnon ?? 0)[(Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A176') : -1)] === 1) {
    qspCall(s, 'telefon', 'AddContact', 'A176', 'images/characters/city/tatiana/magiclook.jpg', 0);
  }
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[1]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Gustav':
      enterGustav(s, scene);
      break;
    case 'GustavDevelop':
      enterGustavDevelop(s, scene);
      break;
    case 'BodyModActuate':
      enterBodyModActuate(s, scene);
      break;
    case 'BodyModValues':
      enterBodyModValues(s, scene);
      break;
    case 'ListBuilder':
      enterListBuilder(s, scene);
      break;
    case 'BodyModded':
      enterBodyModded(s, scene);
      break;
    case 'Tatiana':
      enterTatiana(s, scene);
      break;
    case 'teach':
      enterTeach(s, scene);
      break;
    case 'teach_strip':
      enterTeachStrip(s, scene);
      break;
    case 'saddle':
      enterSaddle(s, scene);
      break;
    case 'Escalation1':
      enterEscalation1(s, scene);
      break;
    case 'teach_dildo_anal':
      enterTeachDildoAnal(s, scene);
      break;
    case 'teach_dildo_vag':
      enterTeachDildoVag(s, scene);
      break;
    case 'Escalation2':
      enterEscalation2(s, scene);
      break;
    case 'teach_full':
      enterTeachFull(s, scene);
      break;
    case 'lesson1':
      enterLesson1(s, scene);
      break;
    case 'lesson2':
      enterLesson2(s, scene);
      break;
    case 'lesson3':
      enterLesson3(s, scene);
      break;
    case 'lesson4':
      enterLesson4(s, scene);
      break;
    case 'lesson5':
      enterLesson5(s, scene);
      break;
    case 'lesson6':
      enterLesson6(s, scene);
      break;
    case 'lesson7':
      enterLesson7(s, scene);
      break;
    case 'lesson8':
      enterLesson8(s, scene);
      break;
    case 'Tatianasuctalk':
      enterTatianasuctalk(s, scene);
      break;
    case 'Tatianasucsexask':
      enterTatianasucsexask(s, scene);
      break;
    case 'Tatianasexreject':
      enterTatianasexreject(s, scene);
      break;
    case 'suctrainsex':
      enterSuctrainsex(s, scene);
      break;
    case 'suctraining':
      enterSuctraining(s, scene);
      break;
    case 'missions':
      enterMissions(s, scene);
      break;
    case 'stage_SMS':
      enterStage_SMS(s, scene);
      break;
    case 'SMS_conditions':
      enterSMSConditions(s, scene);
      break;
    case 'Add SMS':
      enterAddSMS(s, scene);
      break;
    case 'add_contact':
      enterAddContact(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const tatiana_lab: LocationDef = {
  name: 'tatiana_lab',
  title: 'Myrkov Investigative Agency.',
  region: 'other',
  enter: enter,
};
