import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Math.floor(Math.random() * 6) + 0 > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = Math.floor(Math.random() * 14) + 1;
    if (((s as any).scooltiperand ?? 0) === 1) {
      scene.img('images/characters/shared/headshots_main/big4.jpg');
      scene.text('During a rare moment of quietness, you take the opportunity to stretch and look around the room. Your attention settles on Igor, who is working quietly by himself, which is an odd sight as he\'s usually attached to Dimka\'s hip. As you continue to watch him, it dawns on you that, without his popular friend around, no one really wants to talk or hang out with him. Maybe those rumors of Dimka being his only friend are true?');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big4.jpg');
      scene.text('"What\'s wrong, Igor? Why don\'t you call my friend a slut like you and Dimka did yesterday?!"');
      scene.text('You look up to see Lizaveta and her friends surrounding Igor like wolves cornering their prey. Even from where you\'re sitting, you can see how tense and rigid his body is as he keeps his head hung low, doing his best to ignore them by focusing on his work, but Lizaveta demands his full attention. Before he can react, she snatches the paper out from under his pen and holds it above his head.');
      scene.text('"Dimka is the only reason you\'re considered popular!" she hisses before leaning in closer. "If it weren\'t for him, you\'d be nothing but a cum dump for all the boys in the school. I\'m sure you\'d love it, especially if that meant you\'d get fucked by Dimka."');
      scene.text('Igor looks up and locks eyes with you.');
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Defend Igor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Defend Igor', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A4', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A140', (-1));
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    scene.img('images/characters/shared/headshots_main/big140.jpg');
    scene.text('"You\'ve made your point, Lizaveta," you sigh. "Just leave him alone."');
    scene.text('"Are you really defending him right now?" She shoots you a disgusted look. "Someone told me that they heard Dimka and Igor call my friend a slut!"');
    scene.text('You shrug your shoulders. "That just sounds like your usual \'he said, she said\' gossip. If you or your friend weren\'t there to hear them say it, then you don\'t know if it\'s true."');
    scene.text('Lizaveta\'s eyes narrow. "Are you calling me a liar?" Unsurprisingly, she\'s somehow made this about herself.');
    scene.text('"No, I\'m just saying you can\'t believe everything you hear," you reply. "Haven\'t you had people accuse you of saying or doing something that you never did?"');
    scene.text('Lizaveta is silent for a long time before her expression softens slightly. "Whatever," she mutters in defeat.');
    scene.text('You think she\'s going to leave it at that, but she gives Igor one last look of disgust as she slams his paper back on his desk before finally walking back to her seat, her group of girls trailing behind her. With them gone, Igor takes a deep breath and relaxes into his seat. "Thanks," he silently mouthes to you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
      if (((s as any).scooltiperand ?? 0) === 3) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/classroom/literature/events/notepass.jpg');
        scene.text('During class, you\'re passed a note. When you open it, you\'re greeted with a crudely drawn picture of a woman with a cock face fucking another woman. There\'s an arrow pointing to the woman with the cock that reads "Principal Aleksandrina", while the other woman is labeled "Ms. Braakman".');
        scene.text('You hear stifled laughter from behind you as you read the words "Pass it along" under the picture. With a smile, you do just that and sneakily pass it along to another student.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        qspCall(s, 'mood', 'lower', 'small');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
          (s as any).pcs_memory['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
          scene.text('Before you can answer the question Ms. Braakman poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
          } else {
            qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 5) + 8);
            scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
            if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 8) + 8);
              scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
            }
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
              scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              qspCall(s, 'arousal', 'flash', (-5));
              qspCall(s, 'fame', 'pav', 'sex', 1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Ms. Braakman poses you, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you aren\'t wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and pussy.');
              scene.text('Everyone but Ms. Braakman that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            }
            if (((s as any).scooltiperand ?? 0) === 5) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
              qspCall(s, 'stat', '');
              scene.img('images/locations/pavlovsk/school/events/boysex_tualet.jpg');
              scene.text('You\'re making your way to the trash bin to throw something away when you feel a rough hand grope your ass. Surprised, you jump and let out a tiny squeak. Looking back, you see Arkadi winking at you.');
              qspCall(s, 'arousal', 'foreplay', 2);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
              scene.text('Ms. Braakman has the class working in pairs today, so everyone has their desks pushed together, side by side with their partner\'s. You\'ve been paired with Roman who, as usual, isn\'t doing any of the work, scribbling crudely drawn pictures in his notebook instead.');
              if (((s as any).scooltiperand ?? 0) === 7) {
                scene.img('images/locations/pavlovsk/school/classroom/literature/events/humpday.mp4');
                // TODO-QSP: dynamic text: You're standing at your desk when Anushka suddenly appears behind you, grinning ...
                scene.text(`You're standing at your desk when Anushka suddenly appears behind you, grinning wildly. "Guess what day it is today is, ${((s as any).pcs_nickname ?? 0)}."`);
                scene.text('Before you can react, she grabs you by the waist and pulls you close, your ass now pressed against her hips as she starts roughly thrusting against you. "It\'s hump day!"');
                qspCall(s, 'willpower', 'exhib', 'resist');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Push her away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Push her away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', (-2));
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('Unamused, you push her off you.');
    scene.text('"I was only fucking around! Christ, you\'re no fun," she says with a scowl.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Go along with it', handler: (st: GameState) => {
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/locations/pavlovsk/school/classroom/literature/events/humpday.mp4');
    scene.text('You smile and stick your ass out more, encouraging her to keep going. Before you know it, a few other students have gathered around to watch and laugh. Eventually, Arkadi takes out his phone and starts recording, which prompts a few other girls to squeeze into the frame and start humping each other.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                scene.img('images/characters/shared/headshots_main/big152.jpg');
                scene.text('During class, you overhear Feofan excitedly telling a boy about the last convention he attended.');
                scene.text('"Not to be rude, Feofan, but I don\'t really care," the boy replies.');
                scene.text('"Just wait, I haven\'t gotten to the best part!" Feofan says before continuing.');
                scene.text('You can\'t tell if he lacks self-awareness or is just really thick.');
                if (((s as any).scooltiperand ?? 0) === 9) {
                  scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                  scene.text('You notice Roman keeps flicking Petka\'s ear whenever Ms. Braakman looks away. Poor Petka\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
                  scene.text('As you wait for the end of the lesson, you notice you\'re not the only one being a bit drowsy; Anushka is very close to falling asleep on her desk.');
                  if (((s as any).scooltiperand ?? 0) === 11) {
                    scene.img('images/locations/pavlovsk/school/classroom/literature/lizondesk.jpg');
                    scene.text('At the end of class Ms. Braakman finishes the lesson with a few minutes before the bell and lets the class relax.');
                    scene.text('Lizaveta gets up to talk to Igor about some recent gossip she heard. As she does, she takes a seat on one of the empty desks, looking surprisingly sexy while doing so.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    scene.img('images/locations/pavlovsk/school/classroom/literature/lizupskirt.jpg');
                    scene.text('Ms. Braakman announces a pop quiz and everyone groans.');
                    scene.text('You eventually finish your quiz and get up to turn it in; as you walk back to your desk, you notice Lizaveta is still working on her\'s. She seems so intent on it that she doesn\'t realize she has her legs slightly apart, giving you an up the skirt shot of her panties.');
                    qspCall(s, 'arousal', 'erotic', 5);
                    qspCall(s, 'arousal', 'end');
                    if (((s as any).scooltiperand ?? 0) === 13) {
                      scene.img('images/locations/pavlovsk/school/classroom/literature/nushliftskirt.jpg');
                      scene.text('As the bell rings and class ends, everyone gets up and starts to leave.');
                      scene.text('"God damn, I need a pick me up," Radomir says and Anushka, apparently having heard him, lifts her skirt up, showing off her panty clad ass as Radomir laughs. "I can always count on you to make school fun, Nush."');
                      scene.text('Several other students check out Anushka\'s ass as well as everyone leaves.');
                      qspCall(s, 'arousal', 'erotic', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      scene.img('images/locations/pavlovsk/school/classroom/literature/romliz.jpg');
                      scene.text('Ms. Braakman drones on about some obscure book that no one cares about, but she swears should be considered one of the great works of art, and you find yourself getting bored. You notice you\'re not the only one; almost everyone in class has a glazed over look in their eyes. Radomir takes it upon himself to liven things up, though.');
                      scene.text('He grabs Lizaveta\'s skirt and lifts it up, showing off an expensive looking lacy thong. This gets the attention of several students while Lizaveta fights with him to get her skirt pulled back down.');
                      scene.text('When Ms. Braakman asks what\'s going on, Radomir lets go of her skirt and leans back, acting innocent. Lizaveta, still blushing, says nothing is wrong and Ms. Braakman continues on with her boring lecture.');
                      qspCall(s, 'arousal', 'erotic', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    }
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                }
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              }
              scene.actions([
                { label: 'Get to work', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/literature/events/roman_touch.mp4');
    scene.text('As you work, you feel his leg brush against yours. You think nothing of it at first, assuming it was just an accident, but then you feel his hand on your knee before it slowly moves up to your thigh. You look over at him, but he\'s still scribbling in his notebook as if nothing is happening.');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push his hand away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push his hand away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A157', (-2));
    scene.img('images/locations/pavlovsk/school/classroom/literature/events/rejection.jpg');
    scene.text('Knowing how aggressive he can be, you gently push his hand away and hope that doesn\'t provoke him. From the corner of your eye, you catch him glaring at you, his eyes narrowed and jaw clenched in anger.');
    scene.text('You prepare yourself for what he\'s going to say, but to your surprise, he just goes back to drawing in his notebook and keeps his hands to himself.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'fame', 'pav', 'sex', 1);
    (s as any).pcs_horny = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A157', 1);
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/pavlovsk/school/classroom/literature/events/heavy_petting.mp4');
      scene.text('You spread your legs for him, and without hesitation, Roman\'s hand dips between your legs, his fingers trailing along your inner thigh until he\'s pressing against your pussy through your panties. You shiver with anticipation as he teasingly traces a finger along the outline of your lips. Slowly, he begins massaging circles around your clit, and in the heat of the moment, you let out a soft moan that catches the attention of the girl sitting a few feet away. You quickly drape your arm over your lap and lean forward to obscure her view. You give her a reassuring smile and hope she\'ll leave it at that, but she continues to stare, convinced that something is happening.');
      scene.text('"Don\'t worry, I\'m--" Your words get caught in your throat as Roman starts rubbing your sensitive button even harder. "I-I\'m fine…" you finally manage to say and the girl gives you one last look before slowly turning around, hopefully none the wiser.');
      // TODO-QSP: dynamic text: "Something wrong, <<$pcs_nickname>>?" Roman asks and you glance over at the gopn...
      scene.text(`"Something wrong, ${((s as any).pcs_nickname ?? 0)}?" Roman asks and you glance over at the gopnik to find him smiling wickedly at you. Without warning, he slides your panties aside and plunges two fingers into your wet pussy. Stifling a gasp, you can only nod as he crooks his fingers slightly, finding your sweet spot with ease. Biting your lip, you begin to rock yourself on his hand while his thumb teases your clit. You don't know when you closed your eyes, but when you open them again you notice Roman watching you intently, an amused smirk on his face as you continue to fuck yourself on his fingers.`);
      scene.text('You soon feel your body tense up as the waves of your orgasm wash over you. You ride out the pleasure in silence until it finally passes, leaving you light-headed and dizzy. You look over at Roman and find him admiring his fingers, wet and shining with your juices.');
      scene.text('"Well?" he asks, and you realize that he needs to clean them off. Readjusting your soaked panties, you get up to get a tissue, but Roman laughs and shakes his head. Without warning, he uses your skirt to clean up. "This\'ll do."');
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/literature/events/heavy_petting.mp4');
      scene.text('You spread your legs for him, and without hesitation, Roman\'s hand dips between your legs, his fingers trailing along your inner thigh until he\'s pressing against your bare pussy. You shiver with anticipation as he teasingly traces a finger along your lips. Slowly, he begins massaging circles around your clit, and in the heat of the moment, you let out a soft moan that catches the attention of the girl sitting a few feet away. You quickly drape your arm over your lap and lean forward to obscure her view. You give her a reassuring smile and hope she\'ll leave it at that, but she continues to stare, convinced that something is happening.');
      scene.text('"Don\'t worry, I\'m--" Your words get caught in your throat as Roman starts rubbing your sensitive button even harder. "I-I\'m fine…" You finally manage to say and the girl gives you one last look before slowly turning around, hopefully none the wiser.');
      // TODO-QSP: dynamic text: "Something wrong, <<$pcs_nickname>>?" Roman asks and you glance over at the gopn...
      scene.text(`"Something wrong, ${((s as any).pcs_nickname ?? 0)}?" Roman asks and you glance over at the gopnik to find him smiling wickedly at you. Without warning, he plunges two fingers into your wet pussy. Stifling a gasp, you can only nod as he crooks his fingers slightly, finding your sweet spot with ease. You bite your lip as you begin to rock yourself on his hand while his thumb teases your clit. You don't know when you closed your eyes but when you open them again, you notice Roman watching you intently, an amused smirk on his face as you continue to fuck yourself on his fingers.`);
      scene.text('You soon feel your body tense up as the waves of your orgasm wash over you. You ride out the pleasure in silence until it finally passes, leaving you light-headed and dizzy. You look over at Roman and find him admiring his fingers, wet and shining with your juices.');
      scene.text('"Well?" he asks, and you realize that he needs to clean them off. Readjusting your uniform, you get up to get a tissue, but Roman laughs and shakes his head. Without warning, he uses your skirt to clean up. "This\'ll do."');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
      scene.actions([
        { label: 'Say nothing and look away', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', (-1));
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You quickly look away and spend the rest of class trying to avoid eye contact with Igor.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Join in', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', (-3));
    qspCall(s, 'npc_relationship', 'modify', 'A140', 1);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"It is pretty weird how he always follows Dimka around," you chime in.');
    scene.text('Lizaveta is quick to agree, and together with the other girls, you continue to mock him until Ms. Braakman finally steps in to put an end to it.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const gschool_lessonsev3: LocationDef = {
  name: 'gschool_lessonsev3',
  title: 'During a rare moment of quietness, you take the opportunity ',
  region: 'other',
  description: ['During a rare moment of quietness, you take the opportunity to stretch and look around the room. Your attention settles on Igor, who is working quietly by himself, which is an odd sight as he\'s usually attached to Dimka\'s hip. As you continue to watch him, it dawns on you that, without his popular friend around, no one really wants to talk or hang out with him. Maybe those rumors of Dimka being his only friend are true?'],
  enter: enter,
};
