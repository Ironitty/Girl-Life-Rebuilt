import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLiterature(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 14) + 1);
    if (((s as any).scooltiperand ?? 0) === 1) {
      scene.img('images/characters/shared/headshots_main/big4.jpg');
      scene.text('During a rare moment of quietness, you take the opportunity to stretch and look around the room. Your attention settles on Igor, who is working quietly by himself, which is an odd sight as he\'s usually attached to Dimka\'s hip. As you continue to watch him, it dawns on you that, without his popular friend around, no one really wants to talk or hang out with him. Maybe those rumors of Dimka being his only friend are true?');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        scene.img('images/characters/shared/headshots_main/big4.jpg');
        scene.text('"What\'s wrong, Igor? Why don\'t you call my friend a slut like you and Dimka did yesterday?!"');
        scene.text('You look up to see Lizaveta and her friends surrounding Igor like wolves cornering their prey. Even from where you\'re sitting, you can see how tense and rigid his body is as he keeps his head hung low, doing his best to ignore them by focusing on his work, but Lizaveta demands his full attention. Before he can react, she snatches the paper out from under his pen and holds it above his head.');
        scene.text('"Dimka is the only reason you\'re considered popular!" she hisses before leaning in closer. "If it weren\'t for him, you\'d be nothing but a cum dump for all the boys in the school. I\'m sure you\'d love it, especially if that meant you\'d get fucked by Dimka."');
        scene.text('Igor looks up and locks eyes with you.');
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Defend Igor', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Defend Igor', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A4', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A140', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
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
        scene.actions([
          { label: 'Say nothing and look away', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You quickly look away and spend the rest of class trying to avoid eye contact with Igor.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Join in', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A4', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"It is pretty weird how he always follows Dimka around," you chime in.');
    scene.text('Lizaveta is quick to agree, and together with the other girls, you continue to mock him until Ms. Braakman finally steps in to put an end to it.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
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
          if (((s as any).scooltiperand ?? 0) === 4) {
            qspCall(s, 'mood', 'lower', 'small');
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
              ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Ms. Braakman poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
              } else {
                if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                  qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
                  scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
                } else {
                  if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                    qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                    scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Ms. Braakman having no idea why as she tries to shout for order.');
                  }
                }
              }
            } else {
              if (((s as any).pantyworntype ?? 0) !== 'none') {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 4) + 1));
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
            }
          } else {
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
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
                scene.text('Ms. Braakman has the class working in pairs today, so everyone has their desks pushed together, side by side with their partner\'s. You\'ve been paired with Roman who, as usual, isn\'t doing any of the work, scribbling crudely drawn pictures in his notebook instead.');
                scene.actions([
                  { label: 'Get to work', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/literature/events/roman_touch.mp4');
    scene.text('As you work, you feel his leg brush against yours. You think nothing of it at first, assuming it was just an accident, but then you feel his hand on your knee before it slowly moves up to your thigh. You look over at him, but he\'s still scribbling in his notebook as if nothing is happening.');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push his hand away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push his hand away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-2));
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
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    (st as any).pcs_horny = 0;
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    qspCall(st, 'stat', '');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/pavlovsk/school/classroom/literature/events/heavy_petting.mp4');
      scene.text('You spread your legs for him, and without hesitation, Roman\'s hand dips between your legs, his fingers trailing along your inner thigh until he\'s pressing against your pussy through your panties. You shiver with anticipation as he teasingly traces a finger along the outline of your lips. Slowly, he begins massaging circles around your clit, and in the heat of the moment, you let out a soft moan that catches the attention of the girl sitting a few feet away. You quickly drape your arm over your lap and lean forward to obscure her view. You give her a reassuring smile and hope she\'ll leave it at that, but she continues to stare, convinced that something is happening.');
      scene.text('"Don\'t worry, I\'m--" Your words get caught in your throat as Roman starts rubbing your sensitive button even harder. "I-I\'m fine…" you finally manage to say and the girl gives you one last look before slowly turning around, hopefully none the wiser.');
      scene.text(`"Something wrong, ${((st as any).pcs_nickname ?? '')}?" Roman asks and you glance over at the gopnik to find him smiling wickedly at you. Without warning, he slides your panties aside and plunges two fingers into your wet pussy. Stifling a gasp, you can only nod as he crooks his fingers slightly, finding your sweet spot with ease. Biting your lip, you begin to rock yourself on his hand while his thumb teases your clit. You don't know when you closed your eyes, but when you open them again you notice Roman watching you intently, an amused smirk on his face as you continue to fuck yourself on his fingers.`);
      scene.text('You soon feel your body tense up as the waves of your orgasm wash over you. You ride out the pleasure in silence until it finally passes, leaving you light-headed and dizzy. You look over at Roman and find him admiring his fingers, wet and shining with your juices.');
      scene.text('"Well?" he asks, and you realize that he needs to clean them off. Readjusting your soaked panties, you get up to get a tissue, but Roman laughs and shakes his head. Without warning, he uses your skirt to clean up. "This\'ll do."');
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/literature/events/heavy_petting.mp4');
      scene.text('You spread your legs for him, and without hesitation, Roman\'s hand dips between your legs, his fingers trailing along your inner thigh until he\'s pressing against your bare pussy. You shiver with anticipation as he teasingly traces a finger along your lips. Slowly, he begins massaging circles around your clit, and in the heat of the moment, you let out a soft moan that catches the attention of the girl sitting a few feet away. You quickly drape your arm over your lap and lean forward to obscure her view. You give her a reassuring smile and hope she\'ll leave it at that, but she continues to stare, convinced that something is happening.');
      scene.text('"Don\'t worry, I\'m--" Your words get caught in your throat as Roman starts rubbing your sensitive button even harder. "I-I\'m fine…" You finally manage to say and the girl gives you one last look before slowly turning around, hopefully none the wiser.');
      scene.text(`"Something wrong, ${((st as any).pcs_nickname ?? '')}?" Roman asks and you glance over at the gopnik to find him smiling wickedly at you. Without warning, he plunges two fingers into your wet pussy. Stifling a gasp, you can only nod as he crooks his fingers slightly, finding your sweet spot with ease. You bite your lip as you begin to rock yourself on his hand while his thumb teases your clit. You don't know when you closed your eyes but when you open them again, you notice Roman watching you intently, an amused smirk on his face as you continue to fuck yourself on his fingers.`);
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
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/literature/events/humpday.mp4');
                  scene.text(`You're standing at your desk when Anushka suddenly appears behind you, grinning wildly. "Guess what day it is today is, ${((s as any).pcs_nickname ?? '')}."`);
                  scene.text('Before you can react, she grabs you by the waist and pulls you close, your ass now pressed against her hips as she starts roughly thrusting against you. "It\'s hump day!"');
                  qspCall(s, 'willpower', 'exhib', 'resist');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Push her away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Push her away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-2));
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
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    scene.img('images/locations/pavlovsk/school/classroom/literature/events/humpday.mp4');
    scene.text('You smile and stick your ass out more, encouraging her to keep going. Before you know it, a few other students have gathered around to watch and laugh. Eventually, Arkadi takes out his phone and starts recording, which prompts a few other girls to squeeze into the frame and start humping each other.');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/characters/shared/headshots_main/big152.jpg');
                    scene.text('During class, you overhear Feofan excitedly telling a boy about the last convention he attended.');
                    scene.text('"Not to be rude, Feofan, but I don\'t really care," the boy replies.');
                    scene.text('"Just wait, I haven\'t gotten to the best part!" Feofan says before continuing.');
                    scene.text('You can\'t tell if he lacks self-awareness or is just really thick.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                      scene.text('You notice Roman keeps flicking Petka\'s ear whenever Ms. Braakman looks away. Poor Petka\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
                        scene.text('As you wait for the end of the lesson, you notice you\'re not the only one being a bit drowsy; Anushka is very close to falling asleep on her desk.');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/literature/lizondesk.jpg');
                          scene.text('At the end of class Ms. Braakman finishes the lesson with a few minutes before the bell and lets the class relax.');
                          scene.text('Lizaveta gets up to talk to Igor about some recent gossip she heard. As she does, she takes a seat on one of the empty desks, looking surprisingly sexy while doing so.');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 12) {
                            scene.img('images/locations/pavlovsk/school/classroom/literature/lizupskirt.jpg');
                            scene.text('Ms. Braakman announces a pop quiz and everyone groans.');
                            scene.text('You eventually finish your quiz and get up to turn it in; as you walk back to your desk, you notice Lizaveta is still working on her\'s. She seems so intent on it that she doesn\'t realize she has her legs slightly apart, giving you an up the skirt shot of her panties.');
                            qspCall(s, 'arousal', 'erotic', 5);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                            ]);
                          } else {
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
                              if (((s as any).scooltiperand ?? 0) === 14) {
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  scene.build();
}

function enterReading(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'class_activity_attributes', 'school', 'lit', ((s as any).pcs_prcptn ?? 0));
  qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 0));
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (3);
  scene.img('images/locations/pavlovsk/school/classroom/ask.jpg');
  scene.text('You raise your hand, and with a nod, Ms. Braakman lets you speak. You read the passage clearly without any mistakes, which earns you some praise.');
  scene.text(`"Very nice, Miss ${((s as any).pcs_lastname ?? '')}," Ms. Braakman says with a small smile before continuing on with the lesson.`);
  (s as any).scooltiperand = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).scooltiperand ?? 0) === 1) {
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text(`"Screw reading! ${((s as any).pcs_nickname ?? '')}'s mouth is better suited for sucking cock!" you overhear someone say behind you and turn around to see Petia staring back at you. Unashamed, a perverted smile spreads across his face and you get the feeling he's undressing you with his eyes.`);
    qspCall(s, 'willpower', 'bj', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him he\'s right', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him he\'s right', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 2);
    qspCall(st, 'willpower', 'bj', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    scene.text('"You\'re right, and I\'m pretty damn good at it too!" you say with a playful smile. A few nearby students overhear you and start whispering amongst themselves, the girls being quick to bash you and the guys eagerly wanting to put your skills to the test.');
    scene.text('Before you know it, the whole class is stealing glances at you, some looking disgusted, others lustful. You\'re sure that by the end of the day, the whole school will know about how proud you are of your cocksucking skills.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to fuck off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to fuck off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'npc_relationship', 'modify', 'A159', (-2));
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'stat', '');
    scene.text('"Fuck off you fat, disgusting pig!" you shout, jaw clenched and eyes narrowed. As if he had been slapped across the face, Petia\'s expression falls and is replaced by a mix of surprise and fear as he cowers slightly under your heated gaze.');
    scene.text('"I was just joking…" he says quietly while sinking back into his seat.');
    scene.text(`"Damn, ${((st as any).pcs_nickname ?? '')} isn't fucking around!" Anushka marvels while giving you a nod of approval.`);
    scene.text('"Just hit that fat piece of shit! Nobody\'s going to care," Roman comments as he turns to face Petia with a scowl.');
    scene.text('"When are you going to realize that <i>nobody. Fucking. Likes. You</i>, you smelly fucking cunt?" Arkadi adds, his lips curled back in disgust.');
    scene.text('Before you know it, the three gopniks have zeroed in on the outcast, giving him a verbal lashing he\'ll spend all day recovering from.');
    scene.actions([
      { label: 'Get back to work', handler: (st: GameState) => {
    scene.text('Leaving it to the gopniks to finish what you started, you get back to work.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Join in', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.text('You join the three gopniks and continue to mercilessly berate Petia until he\'s saved by Ms. Braakman telling everyone to get back to work.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Insult him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Insult him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (5);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.text('"You\'re too fat to even see your own dick, so what would you know about blowjobs besides being a pro at giving them?" you say with a mocking smile.');
    scene.text('There\'s a moment of stunned silence before laughter breaks out in the class. Watching Petia\'s face flush bright red as he struggles to defend himself fills you with a smug satisfaction.');
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}! I don't want to hear that kind of language in my class!" Ms. Braakman shouts, barely managing to speak above the noise of the class.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.text('Unable to respond, you turn around without confronting him. You hear him chuckle and mutter something incoherent under his breath, but he doesn\'t say anything else for the remainder of class. Replaying the encounter in your head, a part of you wonders if that was the right thing to do…');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Blush', handler: (st: GameState) => {
    scene.text('Your cheeks flush with heat at his words and you meekly look away, feeling his leering gaze burn into your neck. A few boys nearby snigger at his remark and some girls huff in disgust.');
    scene.text('As class continues and everyone\'s attention moves on, you wonder if your reaction might\'ve given the wrong impression…');
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 2) + 0));
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).scooltiperand ?? 0) === 2) {
      qspCall(s, 'mood', 'lower', 'small');
      scene.text('You\'ve just finished reading when you feel a paper ball bounce off the back of your head. You glance behind you, but can\'t find the culprit.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 3) {
        scene.text(`"Very nice work, Miss ${((s as any).pcs_lastname ?? '')}," Arkadi says mockingly, his voice a poor imitation of Ms. Braakman. You turn around to see him and Roman snickering.`);
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 4) {
          scene.text('You sigh with relief when no one follows up Ms. Braakman\'s compliment with a snide remark.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterGetphone(s: GameState, scene: SceneBuilder): void {
  (s as any).scooltiperand = (Math.floor(Math.random() * 2) + 1);
  if (((s as any).scooltiperand ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
    scene.text('With class over, you make your way to Ms. Braakman\'s desk to get your phone back. You stand there waiting for her to notice you, but she makes it a point to ignore you until you finally speak up and ask for your phone.');
    scene.text('"I\'ve been thinking and I realize that I can keep taking your phone away, but you won\'t learn a thing. Maybe I\'m being too lenient, maybe it\'s time I really start to punish students for misbehaving. What do you think?"');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Roll your eyes', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Roll your eyes', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/raven/angry.jpg');
    scene.text('"Whatever. Can I just have my phone back?" you moan, crossing your arms over your chest as you roll your eyes impatiently.');
    scene.text('Ms. Braakman\'s expression darkens as she stands from her seat, the sound of the chair scraping against the floor cutting through the silence like a knife. As she comes out from behind her desk, you notice she\'s holding something in her hand. It isn\'t until she\'s standing a few steps away that you realize it\'s the long wooden pointer she uses during class.');
    scene.text(`"I think that answers my question," she says, her voice low and oddly calm. "Turn around, ${((st as any).pcs_lastname ?? '')}."`);
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/pavlovsk/school/classroom/literature/punishment1.jpg');
      scene.text('Swallowing hard, you feel all your earlier arrogance disappear as you do as you\'re told and turn your back to her. No longer able to see what she\'s doing, your mind begins to race with ideas of what she plans to do to you. "Bend over in front of that desk," she orders and you obediently do so.');
      scene.text('"If only you behaved this well in class," she quips as you place your hands on the desk, leaning down only slightly so your ass doesn\'t stick out too much. Ms. Braakman is quick to notice this, and without hesitation, grabs you by the back of the neck and shoves your upper half down onto the desk, forcing you to present your ass to her. You wince as your cheek hits the hard surface, but Ms. Braakman doesn\'t seem to care as she flips your skirt up onto your back and pulls your panties down.');
      scene.text('At this point, you realize it may be too late to apologize, but you try anyway. "I\'m sorry, Ms. Braakman! I\'m really sorry!"');
      scene.text('"Of course you are," she coos, her voice soft and comforting. "But you still need to be punished," she snaps. Hearing this, you start to squirm nervously, but Ms. Braakman rests a warm hand on the small of your back to steady you. "For you, I think fifteen will be enough."');
      scene.text('Your mind blanks and you don\'t understand what she means until you feel the cold, thin length of her pointer tap your bare ass. "The less you move, the quicker this will go," she warns.');
      scene.actions([
        { label: 'Accept your punishment', handler: (st: GameState) => {
    qspCall(st, 'pain', '4', 'asscheeks', 'spank');
    scene.img('images/locations/pavlovsk/school/classroom/literature/punishment2.jpg');
    scene.text('You inhale sharply as you feel the sting from the first strike. You instinctively flinch away from the pain, but Ms. Braakman makes sure to pull you back before continuing. You try to convince yourself that it doesn\'t hurt as much after the first few hits, but it does little to comfort you as the pointer whistles through the air and connects with your reddened ass for a seventh time.');
    scene.text('By the end of the caning, you\'ve collapsed completely onto the desk, your sensitive flesh throbbing and covered with bright red welts. Ms. Braakman steps back to admire her work, a twisted smile spreading across her face as she listens to your muffled whimpers.');
    scene.text(`"Clean yourself up, ${((st as any).pcs_lastname ?? '')}. You don't want to be late to your next class," she says, her voice dripping with smug satisfaction as your phone is dropped onto the desk you're still bent over. You slowly stand up straight and use the back of your hand to wipe away the tears before carefully pulling up your panties. Grabbing your phone, you keep your head hung low as you inch your way to the door and down the hallway to your next class, trying your best to hide the pain.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/literature/punishment1.jpg');
      scene.text('Swallowing hard, you feel all your earlier arrogance disappear as you do as you\'re told and turn your back to her. No longer able to see what she\'s doing, your mind begins to race with ideas of what she plans to do to you. "Bend over in front of that desk." she orders and you obediently do so.');
      scene.text('"If only you behaved this well in class," she quips as you place your hands on the desk, leaning down only slightly so that your ass doesn\'t stick out too much. Ms. Braakman is quick to notice this, and without hesitation, grabs you by the back of the neck and shoves your upper half down onto the desk, forcing you to present your ass to her. You wince as your cheek hits the hard surface, but Ms. Braakman doesn\'t seem to care as she flips your skirt up onto your back. "Surprise, surprise. You\'re not wearing any panties," she scoffs.');
      scene.text('At this point, you realize it may be too late to apologize, but you try anyway. "I\'m sorry, Ms. Braakman! I\'m really sorry!"');
      scene.text('"Of course you are," she coos, her voice soft and comforting. "But you still need to be punished," she snaps. Hearing this, you start to squirm nervously, but Ms. Braakman rests a warm hand on the small of your back to steady you. "For you, I think fifteen will be enough."');
      scene.text('Your mind blanks and you don\'t understand what she means until you feel the cold, thin length of her pointer tap your bare ass. "The less you move, the quicker this will go," she warns.');
      scene.actions([
        { label: 'Accept your punishment', handler: (st: GameState) => {
    qspCall(st, 'pain', '4', 'asscheeks', 'spank');
    scene.img('images/locations/pavlovsk/school/classroom/literature/punishment2.jpg');
    scene.text('You inhale sharply as you feel the sting from the first strike. You instinctively flinch away from the pain, but Ms. Braakman makes sure to pull you back before continuing. You try to convince yourself that it doesn\'t hurt as much after the first few hits, but it does little to comfort you as the pointer whistles through the air and connects with your reddened ass for a seventh time.');
    scene.text('By the end of the caning, you\'ve collapsed completely onto the desk, your sensitive flesh throbbing and covered with bright red welts. Ms. Braakman steps back to admire her work, a twisted smile spreading across her face as she listens to your muffled whimpers.');
    scene.text(`"Clean yourself up fast, ${((st as any).pcs_lastname ?? '')}. You don't want to be late to your next class," she says, her voice dripping with smug satisfaction as your phone is dropped onto the desk you're still bent over. You slowly stand up straight and use the back of your hand to wipe away the tears before carefully pulling your skirt back down. Grabbing your phone, you keep your head hung low as you inch your way to the door and down the hallway to your next class, trying your best to hide the pain.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'pain', '2', 'cheeks', 'spank');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/literature/punishment1.jpg');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('"Hell no, I\'m not going to--" You\'re cut off as Ms. Braakman slaps you hard across your face. You look back at her in stunned silence as you cup your burning cheek.');
      scene.text('"I wasn\'t asking!" she warns, her lips curling into a scowl. "Now do as I said!"');
      scene.text('Your earlier arrogance quickly disappears as you stare into her cold, dark eyes and you quickly turn your back to her and await further instructions. "Bend over in front of that desk," she orders and you obediently do so.');
      scene.text('"If only you behaved this well in class," she quips as you place your hands on the desk, leaning down only slightly so your ass doesn\'t stick out too much. Ms. Braakman is quick to notice this, and without hesitation, grabs you by the back of the neck and shoves your upper half down onto the desk, forcing you to present your ass to her. You wince as your cheek hits the hard surface, but Ms. Braakman doesn\'t seem to care as she flips your skirt up onto your back and pulls your panties down.');
      scene.text('At this point, you realize it may be too late to apologize, but you try anyway. "I\'m sorry, Ms. Braakman! I\'m really sorry!"');
      scene.text('"Of course you are," she coos, her voice soft and comforting. "But you still need to be punished," she snaps. Hearing this, you start to squirm nervously, but Ms. Braakman rests a warm hand on the small of your back to steady you. "For you, I think fifteen will be enough."');
      scene.text('Your mind blanks and you don\'t understand what she means until you feel the cold, thin length of her pointer tap your bare ass. "The less you move, the quicker this will go," she warns.');
      scene.actions([
        { label: 'Accept your punishment', handler: (st: GameState) => {
    qspCall(st, 'pain', '4', 'asscheeks', 'spank');
    scene.img('images/locations/pavlovsk/school/classroom/literature/punishment2.jpg');
    scene.text('You inhale sharply as you feel the sting from the first strike. You instinctively flinch away from the pain, but Ms. Braakman makes sure to pull you back before continuing. You try to convince yourself that it doesn\'t hurt as much after the first few hits, but it does little to comfort you as the pointer whistles through the air and connects with your reddened ass for a seventh time.');
    scene.text('By the end of the caning, you\'ve collapsed completely onto the desk, your sensitive flesh throbbing and covered with bright red welts. Ms. Braakman steps back to admire her work, a twisted smile spreading across her face as she listens to your muffled whimpers.');
    scene.text(`"Clean yourself up, ${((st as any).pcs_lastname ?? '')}. You don't want to be late to your next class," she says, her voice dripping with smug satisfaction as your phone is dropped onto the desk you're still bent over. You slowly stand up straight and use the back of your hand to wipe away the tears before carefully pulling up your panties. Grabbing your phone, you keep your head hung low as you inch your way to the door and down the hallway to your next class, trying your best to hide the pain.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Hell no, I\'m not going to--" You\'re cut off as Ms. Braakman slaps you hard across your face. You look back at her in stunned silence as you cup your burning cheek.');
      scene.text('"I wasn\'t asking!" she warns, her lips curling into a scowl. "Now do as I said!"');
      scene.text('The arrogance you had early quickly disappears as you stare into her cold, dark eyes and you quickly turn your back to her and await further instructions. "Bend over in front of that desk," she orders and you obediently do so.');
      scene.text('"If only you behaved this well in class," she quips as you place your hands on the desk, leaning down only slightly so that your ass doesn\'t stick out too much. Ms. Braakman is quick to notice this, and without hesitation, grabs you by the back of the neck and shoves your upper half down onto the desk, forcing you to present your ass to her. You wince as your cheek hits the hard surface, but Ms. Braakman doesn\'t seem to care as she flips your skirt up onto your back. "Surprise, surprise. You\'re not wearing any panties," she scoffs.');
      scene.text('At this point, you realize it may be too late to apologize, but you try anyway. "I\'m sorry, Ms. Braakman! I\'m really sorry!"');
      scene.text('"Of course you are," she coos, her voice soft and comforting. "But you still need to be punished," she snaps. Hearing this, you start to squirm nervously, but Ms. Braakman rests a warm hand on the small of your back to steady you. "For you, I think fifteen will be enough."');
      scene.text('Your mind blanks and you don\'t understand what she means until you feel the cold, thin length of her pointer tap your bare ass. "The less you move, the quicker this will go," she warns.');
      scene.actions([
        { label: 'Accept your punishment', handler: (st: GameState) => {
    qspCall(st, 'pain', '4', 'asscheeks', 'spank');
    scene.img('images/locations/pavlovsk/school/classroom/literature/punishment2.jpg');
    scene.text('You inhale sharply as you feel the sting from the first strike. You instinctively flinch away from the pain, but Ms. Braakman makes sure to pull you back before continuing. You try to convince yourself that it doesn\'t hurt as much after the first few hits, but it does little to comfort you as the pointer whistles through the air and connects with your reddened ass for a seventh time.');
    scene.text('By the end of the caning, you\'ve collapsed completely onto the desk, your sensitive flesh throbbing and covered with bright red welts. Ms. Braakman steps back to admire her work, a twisted smile spreading across her face as she listens to your muffled whimpers.');
    scene.text(`"Clean yourself up fast, ${((st as any).pcs_lastname ?? '')}. You don't want to be late to your next class," she says, her voice dripping with smug satisfaction as your phone is dropped onto the desk you're still bent over. You slowly stand up straight and use the back of your hand to wipe away the tears before carefully pulling your skirt back down. Grabbing your phone, you keep your head hung low as you inch your way to the door and down the hallway to your next class, trying your best to hide the pain.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big137.jpg');
    scene.text('"I\'m really sorry, Ms. Braakman. I promise not to do it again," you reply.');
    scene.text('Ms. Braakman says nothing for what feels like an eternity until she finally lets out a heavy sigh. "Don\'t do it again," she says while holding your phone out.');
    scene.text('With a grateful smile, you take it and quickly make your way to the door before she can change her mind.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).scooltiperand ?? 0) === 2) {
      scene.text('With class over, you make your way to Ms. Braakman\'s desk to get your phone back. "Can I have my phone back?" you ask.');
      scene.text('Without a word, she tosses you the phone, barely looking up from the paper she\'s correcting. Looks like she\'s too busy to give you a lecture today.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  scene.build();
}

function enterEnglish(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 12) + 1);
    if (((s as any).scooltiperand ?? 0) === 1) {
      scene.img('images/characters/shared/headshots_main/big154.jpg');
      scene.text('During class, you overhear Radomir bragging to a group of girls about his musical talents, and they\'re hanging on his every word.');
      scene.text('"It\'s crazy that you\'re not signed to a company yet!" a girl says dreamily as the other girls sing a chorus of praise and agreement.');
      scene.text('Radomir scoffs and nods his head. "They need to get their shit together because they\'re missing out. I\'d make them millions!"');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/school/events/scoolrand_2.jpg');
        scene.text('Bella looks like she has it all figured out. Her grades are excellent, all the guys in school like her, and she doesn\'t have to answer to anyone. She\'s currently sitting back in a chair, giving herself a manicure.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/classroom/english/events/badlanguage.jpg');
          scene.text('Lena and Lera are hard at work trying to find interesting curse words to say in English, but they don\'t seem satisfied with anything they come up with. In an act of desperation, they turn to you for advice.');
          scene.text('You know a few interesting English words you could share, or you could play a trick on them. With how little they understand, they\'d never know.');
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Trick them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Trick them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'exp_gain', 'persuas', 10);
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A23', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/english/events/badlanguage.jpg');
    scene.text('"Sure, repeat after me: I\'m a worthless cock-sleeve who enjoys being a cum dump for all the boys in school."');
    scene.text('Lera and Lena seem surprised with how much you say, but you reassure them it\'s a really good insult; the worst of the worst. With a smile, they repeat the sentence, completely unaware of what they\'re actually saying.');
    scene.text('You glance over and see Albina smirking. To most people\'s surprise, she\'s rather fluent in English and seems pretty impressed with your deception.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Don\'t help them', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A21', (-1));
    scene.img('images/locations/pavlovsk/school/classroom/english/events/badlanguage.jpg');
    scene.text('"Yeah, I got nothing," you say. "Sorry."');
    scene.text('Lera and Lena don\'t seem happy and ignore you for the rest of the class.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Help them', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
    scene.img('images/locations/pavlovsk/school/classroom/english/events/badlanguage.jpg');
    scene.text('"Yeah, I got something..." you say with a dark smile. "Repeat after me: cock-juggling thunder cunt."');
    scene.text('Lera and Lena repeat the words a few times until they can say it with confidence. When they ask what the words mean, you explain it to them in Russian.');
    scene.text('"Holy shit, that\'s amazing! I can\'t wait to use it on some dickhead at the disco!" Lera laughs excitedly.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            if (((s as any).pcs_makeup ?? 0) > 1) {
              scene.img('images/characters/shared/headshots_main/big15.jpg');
              qspCall(s, 'mood', 'raise', 'tiny');
              scene.text('From over your shoulder, a folded piece of paper is thrown onto your desk. You glance behind you and see Vicky smiling back at you. Opening the note, it reads:');
              scene.text('"Hey, your makeup looks awesome! Katja shared some of her expert tips with me, so maybe one day my makeup will look as good as yours and hers!"');
              scene.text('You make sure to write back a thank you and hand the note back to her with a smile.');
              scene.actions([
                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
              ]);
            } else {
              scene.img('images/characters/shared/headshots_main/big15.jpg');
              scene.text('Vicky taps you on the shoulder and shows you a small makeup bag. "Want me to put some makeup on you? Katja showed me some tips last night and I\'m looking to try them out on someone," she asks. "Other than myself, that is!" she adds with a laugh.');
              scene.actions([
                { label: 'Decline', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A15', (-1));
    scene.img('images/locations/pavlovsk/school/classroom/english/events/badlanguage.jpg');
    scene.text('You apologize and decline her offer. She seems disappointed, but is quick to recover and ask another girl if she wants her makeup done.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
    (st as any).pcs_makeup = 2;
    scene.img('images/locations/pavlovsk/school/classroom/english/events/eavesdrop.jpg');
    scene.text('You nod your head and Vicky is quick to place herself in front of you. She\'s hesitant at first, but as she works she starts to gain confidence. She doesn\'t do anything too crazy, and when you look at yourself in her little pocket mirror, you\'re quite pleased with the freshly applied light makeup.');
    scene.text('"Wow, this looks really good! You\'re a natural," you tell her. Her face lights up and she gives you a quick hug before returning to her seat.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              scene.img('images/characters/shared/headshots_main/big141.jpg');
              scene.text('A group of girls are loudly mocking Veronika, calling her all sorts of names, in particular that she\'s a stuck-up bitch.');
              qspCall(s, 'willpower', 'misc', 'self', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Intervene', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Intervene', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A141', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    scene.text('"You\'re all just jealous that Veronika actually has a talent that isn\'t dick riding," you say with a smirk. "It must really scare you knowing that she\'s going to do something with her life, while the rest of you will end up pregnant before your 21st birthday by a deadbeat who\'ll see you as nothing more than a warm, wet hole he can stick his dick in."');
    scene.text('The girls and even Veronika stare at you in stunned silence. Did you go too far? You start to worry you did something wrong, but then you notice the smallest hint of a smile on Veronika\'s face.');
    scene.text(`"S-screw you, ${((st as any).pcs_nickname ?? '')}!" one of the girls stutters as she and her group quickly retreat with their tails between their legs.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Do nothing', handler: (st: GameState) => {
    // TODO-QSP: act 'Wait for the end of the lesson': gt 'gschool_lessons', ...
  } },
                { label: 'Mock her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A141', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    scene.img('images/characters/shared/headshots_main/big141.jpg');
    scene.text('You don\'t hesitate to join the other girls in mocking Veronika. She turns to glare at you, but other than that, she doesn\'t react to your or the other girl\'s insults. She really is an ice queen.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/english/belver.jpg');
                scene.text('Near the end of class, Bella pulls out a paper while Albina checks her makeup. They both seem pretty bored with class and have given up trying to pay attention.');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7) {
                  scene.img('images/locations/pavlovsk/school/classroom/english/lenaselfie1.jpg');
                  scene.text('You see Lena receiving and sending texts on her phone, looking as pleased as you\'ve eveer seen her as Lera seems to be sulking. Near the end of class, Lena sticks the phone between her legs before she pulls it back up and sends something to whoever she\'s texting.');
                  qspCall(s, 'arousal', 'erotic', 5);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/english/lenaselfie2.jpg');
    scene.text('She gets a reply almost at once and grins, then exchanges a few more texts before she turns around in her seat so people can\'t see what she\'s doing, though you still can. She pulls open her shirt and her bra to take a picture of her breasts.');
    scene.text('You don\'t know who it is, but she seems to be sexting with them. You wonder if Vitek knows about this...');
    qspCall(st, 'arousal', 'erotic_nudity', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/english/lenler.jpg');
                    scene.text('Ms. Braakman leaves near the end of class and tells everyone to study quietly. As soon as she\'s out the door, everyone starts talking or getting up.');
                    scene.text('Lena and Lera go up to sit on her desk while talking to Radomir. When Radomir starts flirting with Lena, she returns it in kind when Lera suddenly turns and kisses Lena on the lips in a long, slow and passionate kiss, which Lena returns.');
                    scene.text('Most of the other students hoot, holler and whistle encouragements at them as they keep making out until the bell rings.');
                    qspCall(s, 'arousal', 'voyeur', 5);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/english/lenlerbras.jpg');
                      scene.text('Lena, Lera and Radomir are chatting near the end of class. As he\'s bragging about some girl he banged recently, Lena and Lera exchange looks and then pull their shirts open to show off their bras.');
                      scene.text('This causes him to stammer in mid sentence as he gets distracted by the breasts neatly on display in front of him. After he stops talking, they laugh and pull their shirts closed, which causes him to grumble.');
                      qspCall(s, 'arousal', 'erotic', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
                        scene.img('images/locations/pavlovsk/school/classroom/english/leraeatme.jpg');
                        scene.text('You notice Lera squirming around in her seat during class and decide to see what\'s wrong.');
                        scene.text('"What\'s up?" you ask.');
                        scene.text('She glances at you and it seems like she\'s about to give you a sharp retort, but she closes her mouth and seems to really look at you. "Nothing you couldn\'t fix for me."');
                        scene.text('She sticks her tongue out between two of her fingers in the universal \'eat me\' sign. You can\'t help but blush a little as since Lera only ever seems to pay attention to Lena.');
                        scene.text('Before you can reply, Ms. Braakman clears her throat and gets you both looking forward again. She spends the rest the class keeping an eye on both of you.');
                        qspCall(s, 'arousal', 'erotic', 5);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
                          scene.img('images/locations/pavlovsk/school/classroom/english/lerapussy.jpg');
                          scene.text('You notice Lera squirming around in her seat during class and decide to see what\'s wrong. "What\'s up?" you ask.');
                          scene.text('She glances at you and it seems like she\'s about to give you a sharp retort, but she closes her mouth and seems to really look at you before the bell suddenly rings.');
                          scene.text('As everyone gets up and heads out of class, she turns to you. "Something you can fix for me, if you put that tongue to good use for a change."');
                          scene.text('She pulls up her skirt and pulls her panties aside to show you her clean shaven pussy. Before you can respond, Lena comes over and steps between the two of you, blocking your view. They exchange a few whispers and then leave class together.');
                          qspCall(s, 'arousal', 'erotic_nudity', 5);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          qspGoto(s, 'gschool_lessons', 'short_break');
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  scene.build();
}

function enterWorking(s: GameState, scene: SceneBuilder): void {
  (s as any).scooltiperand = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).scooltiperand ?? 0) === 1) {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Someone taps you on the shoulder and when you turn around, you see Radomir leaning towards you. "Hey, let me copy off you."');
    scene.text('It\'s more of a demand than a question, and judging by the cocky smirk on his face, he knows the difference and expects you to do as he says.');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
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
    qspCall(st, 'stat', '');
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'npc_relationship', 'modify', 'A154', (-1));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    scene.text('You frown and shake your head.');
    scene.text('"Seriously?" he asks, genuinely surprised by your refusal, which doesn\'t come as a surprise. He seems to think everyone is obsessed with him, especially the girls. His eyes narrow as he leans back in his seat. "Well, fuck you then!"');
    scene.text('You just shrug indifferently and get back to work.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hand over your work', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    scene.text('Sighing, you hand over your paper and his smile widens. "Thanks, babe. You\'re a lifesaver," he says with a wink.');
    scene.text('While you wait for him to finish copying, you take a small break and doodle in your notebook.');
    qspGoto(st, 'gschool_lessonsev3', 'help_radomir');
  } },
    ]);
  } else {
    if (((s as any).scooltiperand ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
      scene.text('You overhear Lena and Lera struggling with their English worksheet, getting more and more frustrated by the second.');
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Give them the wrong answers', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Give them the wrong answers', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
    if (((st as any).pcs_persuas ?? 0) >= 20) {
      qspCall(st, 'exp_gain', 'persuas', 10);
      qspCall(st, 'npc_relationship', 'modify', 'A20', (-2));
      qspCall(st, 'npc_relationship', 'modify', 'A21', (-2));
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
      scene.text('"I can help if you\'re having trouble," you suggest with a small smile.');
      scene.text('Lera and Lena exchange a wary look before nodding their heads. You then carefully feed them wrong answers and by the time you\'ve finished helping them, they\'re none the wiser.');
    } else {
      qspCall(st, 'exp_gain', 'persuas', 15);
      qspCall(st, 'npc_relationship', 'modify', 'A20', (-1));
      qspCall(st, 'npc_relationship', 'modify', 'A21', (-1));
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
      scene.text('"I can help if you\'re having trouble," you suggest with a small smile.');
      scene.text('Lera and Lena exchange a wary look before nodding their heads. You try to convince them that your wrong answers are right, but you\'re unable to fool them and they realize what you\'re trying to do.');
      scene.text('With some unsettlingly specific threats of violence against you, they scare you off.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Help them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
    if (((st as any).class ?? 0)?.['school_eng_grade'] >= 60) {
      qspCall(st, 'npc_relationship', 'modify', 'A20', 1);
      qspCall(st, 'npc_relationship', 'modify', 'A21', 1);
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
      scene.text('"I can help you if you want?" you offer.');
      scene.text('"Yeah, you\'ve got good grades, so you know all about this stuff," Lena says with a grin.');
      scene.text('With a smile, you start going through the problems with them. They still struggle with certain parts, but you easily break down the words and explain everything in a way that they can understand.');
      scene.text(`"Thanks ${((st as any).pcs_nickname ?? '')}. If it weren't for you, Lera would have never gotten this stuff right," Lena teases.`);
      scene.text('"Me?! You\'re the one that was having trouble!" Lera objects with a smile.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      qspCall(st, 'mood', 'lower', 'small');
      scene.text('"I can help you if you want?" you offer. They give each other a wary look before reluctantly nodding their heads.');
      scene.text('You start off confident, but you soon realize that you don\'t understand English any more than they do.');
      scene.text('"Are you kidding me? Don\'t offer to help if you don\'t know shit!" Lena snaps as she snatches her paper back from you.');
      scene.text('You laugh nervously and try to apologize, but Lera is having none of it and quickly fires back another insult.');
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
        { label: 'Ignore them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/literature/work.jpg');
    scene.text('You tell yourself it\'s better not to get involved with them and focus on your own work. Seconds later, you hear things starting to get heated between the two of them until they\'re outright arguing about who was right and who was wrong.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 3) {
        scene.img('images/characters/shared/headshots_main/big3.jpg');
        scene.text('"Hey, do you think you can help me? You seem to know what you\'re doing," Ivan whispers.');
        scene.text('He laughs nervously, clearly not used to asking for help like this.');
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Make up an excuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Make up an excuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A3', (-2));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('"Sorry, but I\'ve still got a lot to finish," you reply, pointing to your own work.');
    scene.text('Ivan\'s smile fades and he looks disappointed, but shrugs his shoulders and leaves you alone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Help him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A3', 1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You smile and nod your head as Ivan sighs in relief and makes room for you to pull up a seat next to him. His mistakes are easy to fix, so you end up finishing rather quickly.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        qspGoto(s, 'gschool_lessons', 'short_break');
      }
    }
  }
  scene.build();
}

function enterHelpRadomir(s: GameState, scene: SceneBuilder): void {
  (s as any).scooltiperand = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).scooltiperand ?? 0) === 1) {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
    scene.text('After a while, Radomir hands you back your paper. "Thanks babe," he says, once again winking at you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    if (((s as any).scooltiperand ?? 0) === 2) {
      scene.img('images/characters/shared/headshots_main/big154.jpg');
      qspCall(s, 'mood', 'lower', 'small');
      scene.text('Radomir has had your paper for a while, so you turn around to see what\'s taking him so long, but he\'s busy talking to someone behind him. Your paper is sitting on his desk, and it looks like he hasn\'t finished copying your answers.');
      scene.actions([
        { label: 'Take your work back', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', (-2));
    scene.text(`Fed up, you take your paper back. He doesn't notice at first, but when he finally turns back around and sees it's missing, he starts to look for it. "Hey ${((st as any).pcs_nickname ?? '')}, I think I lost your work."`);
    scene.text('"You didn\'t lose it. I took it back since you weren\'t doing anything with it," you reply.');
    scene.text('Hearing this, Radomir tries to explain that he\'d just turned round for a moment and asks you to give him another chance, but you refuse. Angry, he mutters something under his breath before leaving you alone.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Wait for him to finish', handler: (st: GameState) => {
    ((st as any).class = (st as any).class ?? {})['school_eng_weekly_grade_gain'] = ((st as any).class['school_eng_weekly_grade_gain'] ?? 0) - (10);
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    scene.text('You decide to give him a chance to finish, but it isn\'t until class is coming to an end that he\'s done and gets up to turn in his own work.');
    scene.text('"Thanks for letting me copy!" he says as he walks by.');
    scene.text('"Hey, where\'s my work?" you ask, but he just shrugs his shoulders.');
    scene.text('"I think someone else took it so they could copy from it?"');
    scene.text('Angry and panicking a little, you start to ask around for your paper, but no one knows where it is. In the end, you have nothing to turn in, which disappoints Ms. Braakman and earns you a failed grade in class today.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).scooltiperand ?? 0) === 3) {
        ((s as any).class = (s as any).class ?? {})['school_eng_weekly_grade_gain'] = ((s as any).class['school_eng_weekly_grade_gain'] ?? 0) - (10);
        qspCall(s, 'npc_relationship', 'modify', 'A154', 2);
        scene.img('images/characters/shared/headshots_main/big154.jpg');
        scene.text('Radomir taps you on the shoulder. "Hey, I think someone stole your paper," he says. You stare at him for a moment, unsure if this is some kind of joke or if he\'s telling the truth. "Yeah, I think it\'s gone. Damn… I didn\'t even get to finish copying. I wonder if Bella will let me borrow hers…"');
        scene.text('"Was it stolen? Or did you lose it?" you ask with a glare.');
        scene.text('He shrugs his shoulders again. "I might\'ve lost it. Just go get another sheet and start over," he says with a laugh as he gets up and makes his way over to Bella.');
        scene.text('Taking his advice, you quickly try to fill out another worksheet, but you only manage to get half of it done before class is over. Ms. Braakman isn\'t pleased and gives you a bad mark for today.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 4) {
          qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
          scene.img('images/characters/shared/headshots_main/big154.jpg');
          scene.text('"Hey, I noticed some of your answers were wrong, so I corrected them," Radomir says as he hands you back your paper. You give him a grateful smile and thank him. Lucky you!');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          qspGoto(s, 'gschool_lessons', 'short_break');
        }
      }
    }
  }
  scene.build();
}

function enterMusic(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    (s as any).scooltiperand = (Math.floor(Math.random() * 22) + 1);
    if (((s as any).scooltiperand ?? 0) === 1) {
      if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        qspCall(s, 'arousal', 'flash', (-5));
        scene.img('images/locations/pavlovsk/school/events/scoolrand_1.jpg');
        scene.text('As you move into the classroom, Katja runs up to you with a slight blush on her face. Before you know it, she gives you a deep kiss and pulls up your skirt to touch your ass. You return the kiss, not caring about the hooting and hollering in the background from your fellow classmates.');
        qspCall(s, 'arousal', 'foreplay', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMusic(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).scooltiperand ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/school/events/scoolrand_2.jpg');
        scene.text('Bella looks like she has it all figured out. Her grades are excellent, all the guys in school like her, and she doesn\'t have to answer to anyone. Currently she\'s sitting back in a chair, giving herself a manicure.');
        scene.actions([
          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        if (((s as any).scooltiperand ?? 0) === 3) {
          qspCall(s, 'mood', 'raise', 'small');
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/events/scoolrand_3.jpg');
          scene.text('As you walk into class, you see Valentin and Radomir have drawn a goofy scene on the blackboard, making it look like they\'re characters in a computer game. You share a laugh with them as you sit down; that certainly brightened your mood.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 4) {
            qspCall(s, 'mood', 'lower', 'small');
            qspCall(s, 'stat', '');
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
              ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mr. Vasilyev poses, you have to clean the blackboard, but accidentally drop the cloth used to wipe it clean. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thighs. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
              } else {
                if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                  qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
                  scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
                } else {
                  if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                    qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                    scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
                  }
                }
              }
            } else {
              if (((s as any).pantyworntype ?? 0) !== 'none') {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', 1);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
                scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
              } else {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', 2);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
                scene.text('Before you can answer the question Mr. Vasilyev poses you, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you aren\'t wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and pussy.');
                scene.text('Everyone but Mr. Vasilyev that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
              }
            }
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 5) {
              if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
                scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/classroom_showing_pussy.jpg');
                scene.text('Katja is sitting with both of her legs on her chair and is trying to draw your attention for some reason. When she notices you\'re watching, she quickly makes sure no one else is paying attention and spread her legs slightly, revealing her bare pussy to you. You bite your lip and give her an appreciative nod.');
                qspCall(s, 'arousal', 'erotic_nudity', (-5));
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMusic(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              if (((s as any).scooltiperand ?? 0) === 6) {
                scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
                scene.text('During class, you feel a hand slide around your side and grab one of your breasts. You squeak loudly and try to smack Radomir\'s hand away, but he jerks it away and all you manage to do is smack your breast.');
                scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? '')}?" Mr. Vasilyev asks and you glance around and notice everyone is staring at you as Radomir snickers behind you. Mr. Vasilyev looks at you curiously.`);
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A154', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Radomir is grabbing my breasts."');
    scene.text('Mr. Vasilyev gives Radomir a disapproving look. "Is this true?"');
    scene.text('Radomir denies it, but Mr. Vasilyev doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Slap Radomir', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Slap Radomir', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A154', (-3));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Vasilyev and turn around and slap Radomir with all your force. Radomir recoils, his hand going to his cheek as students start murmuring about what happened and some laugh.');
    scene.text(`Mr. Vasilyev's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname ?? '')}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Nothing is wrong', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    scene.text('You shake your head at Mr. Vasilyev, desperately wanting to turn around and strangle Radomir, but you don\'t dare with Mr. Vasilyev now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/boobg.mp4');
    scene.text('You squeak loudly as his fingers quickly pinch your sensitive nipple and your hand quickly flies to your breast to shield it from further attack.');
    scene.text(`"Is there a problem, Miss ${((st as any).pcs_lastname ?? '')}?" Mr. Vasilyev asks and you glance around and notice everyone is staring at you as Radomir snickers behind you.`);
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    qspCall(st, 'fame', 'pav', 'sex', 1);
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. It was a nice treat to keep class interesting.');
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism');
    if (((st as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Come get some more', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    scene.text('You bite your lip to silence the moan that wants to escape as you feel your molester\'s fingers give your nipple a quick pinch before retreating. After the hand is gone, you move your hand to the opposite side of your face, as if to scratch an itch and simultaneously glance over your shoulder until your eye is on Radomir, who groped you.');
    scene.text('You give him a smile out of the corner of your mouth as you wink and scoot your chair back. His eyes fill with surprise and excitement and a few seconds after you turn back to face Mr. Vasilyev, you feel his hand massaging your breast again.');
    qspCall(st, 'arousal', 'foreplay', 10, 'exhibitionism');
    scene.actions([
      { label: 'Enjoy more', handler: (st: GameState) => {
    scene.text('You spend the rest of class with Radomir\'s hand coming and going to squeeze your breast and tweak your nipple, still careful to make sure Mr. Vasilyev doesn\'t catch on.');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Enjoying the feeling of Radomir\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. The pencil you were using to take notes goes under your skirt and begins to prod and play with your hard clitoris through your quickly soaking panties.');
      scene.text('Eventually, you get bored of it and shift the fabric to the side to get access to your bare pussy and insert your two middle fingers. They easily slide between your wet lips and your breathing hitches slightly, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Radomir seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Radomir squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves and you feel Radomir\'s hand slide away before you see Mr. Vasilyev giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Radomir\'s hand playing with your breast as you sit satisfied in soaked panties and a small puddle of your own juices.');
    } else {
      qspCall(st, 'fame', 'pav', 'sex', 1);
      scene.text('Enjoying the feeling of Radomir\'s hand massaging your breast and his fingers tweaking your nipple, you decide to take advantage of the opportunity. The pencil you were using to take notes goes under your skirt and begins to prod and play with your already exposed clitoris, but your bare pussy is too tempting and you abandon the pencil for your two middle fingers. They easily slide between your wet lips and your breathing hitches, matching the rhythm of your pistoning fingers.');
      (st as any).orgasm_txt = 'Radomir seems to have caught on and starts to knead your breast and pull at your breast harder. In a moment of perfect coincidence, your pinch your clit right as Radomir squeezes your sensitive nipple and your knees fly together, your legs clenching hard in orgasm. You bite your lip hard as you ride out the waves and you feel Radomir\'s hand slide away just before you hear Mr. Vasilyev giving you a curious look. With confident eyes and a bright smile, you quickly fix your clothes and sit up in your seat.';
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'exhibitionism');
      qspCall(st, 'arousal', 'end');
      scene.text('You spend the rest of class with Radomir\'s hand playing with your breast as you sit satisfied in a small puddle of your own juices.');
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).scooltiperand ?? 0) === 7  &&  ((s as any).braworntype ?? 0) !== 'none') {
                  scene.img('images/locations/pavlovsk/school/classroom/brasnap.jpg');
                  scene.text('During class, you feel a hand grab and pull on your bra strap. Before you can turn or protest they let go, causing it to snap back painfully. You let out a little yelp and turn to glare at Lavrenti behind you.');
                  scene.text(`"Is there a problem, Miss ${((s as any).pcs_lastname ?? '')}?" Mr. Vasilyev asks and you glance around and notice everyone is staring at you as Lavrenti snickers behind you. Mr. Vasilyev looks at you accusingly.`);
                  qspCall(s, 'willpower', 'misc', 'self', 'medium');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Tell on him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Tell on him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = ((st as any).grupvalue[1] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = ((st as any).grupvalue[2] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (3);
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-5));
    scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
    scene.text('You straighten up. "Yes. Lavrenti is snapping my bra."');
    scene.text('Mr. Vasilyev gives Lavrenti a disapproving look. "Is this true?"');
    scene.text('Lavrenti denies it, but Mr. Vasilyev doesn\'t believe him and sends him to the principal\'s office.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  }
                  qspCall(s, 'willpower', 'misc', 'self', 'medium');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Slap Lavrenti', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Slap Lavrenti', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    scene.text('You ignore Mr. Vasilyev and turn around and slap Lavrenti with all your force. Lavrenti recoils, his hand going to his cheek. Students start murmuring about what happened, while some laugh.');
    scene.text(`Mr. Vasilyev's voice cuts through the noise. "That's enough of that, Miss ${((st as any).pcs_lastname ?? '')}! Go to the principal's office!"`);
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'principal'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Nothing is wrong', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    scene.text('You shake your head at Mr. Vasilyev, desperately wanting to turn around and strangle Lavrenti, but you don\'t dare with Mr. Vasilyev now keeping an eye on you.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/classroom/crash.mp4');
                    scene.text('There\'s a loud crashing sound from the back of the class and you, along with everyone else, turn to see that Petka is still sitting at his desk, but the desk is now laying on its side on the floor. The whole class bursts out laughing at him.');
                    scene.text('Petka, blushing, quickly gets out of the desk and gets it back upright before sitting back down in it. After making sure he\'s okay, Mr. Vasilyev gets the class back under control and finishes the lesson.');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                      scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image; opening it, you see a picture of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you delete the image.');
                      qspCall(s, 'arousal', 'erotic', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/classroom/flick.jpg');
                        scene.text('You notice Radomir keeps flicking Petka\'s ear when Mr. Vasilyev looks away. Poor Petka\'s ear is already bright red and he looks like he\'s on the verge of tears.');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                          scene.text('You hear a pained gasp, as do several others and glance over just in time to see Lavrenti letting go of Petka\'s underwear. He\'s pulled it half way up his back and you wince slightly at what looked like a painful wedgie.');
                          scene.actions([
                            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) <= 13) {
                            scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                            scene.text('As you arrive in class you look around and decide to sit next to…');
                            scene.actions([
                              { label: 'Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Katja. She stares at you in disbelief and starts blushing bright red before she gets up and hurries to sit next to her sister.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
        scene.text('You sit next to Katja and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Katja, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Radomir', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150  ||  ((st as any).grupTipe ?? 0) === 5) {
      scene.text('You sit next to Radomir, but he ignores your attempts to speak by saying that he only talks to girls he wants to fuck, making it clear that you aren\'t one of those girls.');
    } else {
      scene.text('You sit next to Radomir, but you don\'t get a chance to speak as he dominates the conversation about how amazing he and the band are and how he pulls all the hot chicks. He finishes by asking if you want to suck his dick.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Lavrenti', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lavrenti, who gives you a perverted smile and keeps asking if you want to suck his dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
        scene.text('You sit next to Lavrenti and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Lavrenti and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
          scene.text('You sit next to Lavrenti. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Valentin, who gives you a perverted smile and keeps asking if you want \'go for a ride\' with him. "And I don\'t mean on my bike, slut," he adds with a wink.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
        scene.text('You sit next to Valentin and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You\'re forced to sit next to Valentin and he immediately starts bullying you, eventually getting some of the other gopniks to join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
          scene.text('You sit next to Valentin. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Lariska', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lariska, who gleefully laughs at you. "Don\'t you have a big cock waiting for you in the bathroom, slut?"');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A13', 1);
        scene.text('You sit next to Lariska and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lariska, who giggles when you try talking to her. "Go and talk to Lesco. He\'s the only friend a loser like you will ever get. If you\'re lucky."');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A13', 1);
          scene.text('You sit next to Lariska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Lina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Lina, who loudly scoffs. "Don\'t you have to go and suck a dick somewhere, you massive whore?"');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A19', 1);
        scene.text('You sit next to Lina and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Lina, who scoffs loudly when you try talking to her. "Go and talk to Lesco. He\'s the only friend a loser like you will ever get. If you\'re lucky."');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A19', 1);
          scene.text('You sit next to Lina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Bella', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Bella, who makes no effort to hide her disgust. "You\'re such a washed up and desperate slut who\'ll do anything for a cock. How anyone here even tolerates you is beyond me."');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A22', 1);
        scene.text('You sit next to Bella and she begrudgingly engages you in a brief conversation that she quickly shuts down, deeming it to be too childish for her.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('Bella gives a disapproving look and makes no effort to hide her dislike of you. "How can you get to your age and not have at least one friend? You need to grow up."');
        } else {
          scene.text(`You sit next to Bella and she rolls her eyes. "What do you want, ${((st as any).pcs_nickname ?? '')}? I don't have time to sit here and talk to kids."`);
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              { label: 'Petka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Petka, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A6', 1);
        scene.text('You sit next to Petka and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Petka, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A6', 1);
          scene.text('You sit next to Petka. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 14) {
                              scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                              scene.text('The lesson takes a brief pause as one of the students asks Mr. Vasilyev a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                              scene.text('When you look back up, you notice Petka turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mr. Vasilyev walks by and pauses next to your desk for a moment before continuing on.');
                              scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Petka again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                              scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                              qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                scene.actions([
                                  { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A159', 1);
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Petka continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                ]);
                              }
                              scene.actions([
                                { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Petka\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 15) {
                                scene.img('images/locations/pavlovsk/school/classroom/music/beltongue.jpg');
                                scene.text('During class, you notice Bella sitting where it really shows off her legs well and you\'re not the only one to notice. Lavrenti is looking as well and when Bella notices him, she gets up, sticks her tongue out at him and walks to the other side of the class to take a seat over there.');
                                scene.actions([
                                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                ]);
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 16  &&  ((s as any).katjaQW ?? 0)?.['take_of_panties_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 5) {
                                  scene.img('images/locations/pavlovsk/school/classroom/music/katjapanties.jpg');
                                  scene.text('During class, you hear Katja say "Psstt." When you glance in her direction, she\'s turned in her seat so she\'s facing you, with her legs slightly spread. When she sees you looking, she pulls up her skirt to show off her panties with a grin, then quickly puts her skirt back in place and ignores you for the rest of class.');
                                  qspCall(s, 'arousal', 'erotic', 5);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                  ]);
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 17) {
                                    scene.img('images/locations/pavlovsk/school/classroom/music/larflute.jpg');
                                    scene.text('As Mr. Vasilyev is helping Petka, Lina and Lariska are talking about how to give a blowjob and they seem to disagree. After a few moments of heated but quiet debate, Lariska decides to show what she means on her flute. Afterwards, Lina comes around to her point of view and several of the guys watching also seem to agree with Lariska.');
                                    qspCall(s, 'arousal', 'erotic', 5);
                                    qspCall(s, 'arousal', 'end');
                                    scene.actions([
                                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                    ]);
                                  } else {
                                    if (((s as any).scooltiperand ?? 0) === 18) {
                                      scene.img('images/locations/pavlovsk/school/classroom/music/larlindance.jpg');
                                      scene.text('Near the end of class, Mr. Vasilyev lets the class play what they want and they try to play something catchy. Some are better than others. Lariska and Lina seem to think it\'s good enough as they get up and start dancing as Mr. Vasilyev just watches with a smile.');
                                      scene.actions([
                                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                      ]);
                                    } else {
                                      if (((s as any).scooltiperand ?? 0) === 20) {
                                        scene.img('images/locations/pavlovsk/school/classroom/music/larlinpiggy.jpg');
                                        scene.text('When the bell rings to end class and everyone starts to leave, Lina drops her books and Lariska uses the distraction to jump on her back. This causes Lina to fall on her hands and knees while Lariska starts talking to her like a horse, telling her to giddy up and such.');
                                        scene.actions([
                                          { label: 'Leave class', goto: ['gschool_lessons', 'short_break'] },
                                        ]);
                                      } else {
                                        qspCall(s, 'stat', '');
                                        scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                        scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                                        scene.actions([
                                          { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                          { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(st, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  scene.build();
}

function enterArt(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) > 0) {
    (s as any).school_event_hour = 1;
    while (true) {
      (s as any).scooltiperand = (Math.floor(Math.random() * 19) + 1);
      if (((s as any).scooltiperand ?? 0) === 1) {
        if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
          qspCall(s, 'arousal', 'flash', (-5));
          scene.img('images/locations/pavlovsk/school/events/scoolrand_1.jpg');
          scene.text('As you walk into the classroom, Katja runs up to you with a slight blush on her face. Before you know it, she gives you a deep kiss and pulls up your skirt to touch your ass. You return the kiss, not caring about the hooting and hollering in the background from your fellow classmates.');
          qspCall(s, 'arousal', 'foreplay', 2);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          break;
        }
      } else {
        if (((s as any).scooltiperand ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/school/events/scoolrand_2.jpg');
          scene.text('Irina looks like she has it all figured out. Her grades are excellent, all the guys in school like her, and she doesn\'t have to answer to anyone. She\'s currently sitting back in a chair, giving herself a manicure.');
          scene.actions([
            { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).scooltiperand ?? 0) === 3) {
            qspCall(s, 'mood', 'lower', 'small');
            qspCall(s, 'stat', '');
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 0  &&  (((s as any).cum_loc ?? 0)?.['vagina'] > 0  ||  ((s as any).cum_loc ?? 0)?.['anus'] > 0)) {
              ((s as any).pcs_memory = (s as any).pcs_memory ?? {})['school_no_panty_cum_flash'] = ((s as any).daystart ?? 0);
              scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
              scene.text('Before you can answer the question Mr. Vasilyev poses, you have to clean the blackboard, but accidentally drop the cloth. As you bend over to pick it up, you suddenly feel something <i>spurt</i> down your leg.');
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                scene.text('There are histling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so are both your holes leaking cum that\'s dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
              } else {
                if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                  qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 5) + 8));
                  scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from your pussy and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
                } else {
                  if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
                    qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 8) + 8));
                    scene.text('There are whistling and shouting sounds from the boys and whispers of intense disapproval from most of the girls behind you, and you realize that not only is your complete lack of panties on display for everyone to see, so is the cum leaking from between your ass cheeks and dribbling down your thigh. You quickly straighten up, but it\'s too late and the class explodes into chaos, Mr. Vasilyev having no idea why as he tries to shout for order.');
                  }
                }
              }
            } else {
              if (((s as any).pantyworntype ?? 0) !== 'none') {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', 1);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_1.jpg');
                scene.text('When you walk up to the blackboard to answer a question, you trip and fall. Somehow, you manage to fall in such a way that your skirt ends up on your back and the whole class can see your panty-clad ass. You quickly get up and straighten your clothes with a bright red face, trying to ignore the hollering from your classmates. You can tell that most of the guys and even a few girls definitely appreciated your show, even if it was involuntarily.');
              } else {
                qspCall(s, 'arousal', 'flash', (-5));
                qspCall(s, 'fame', 'pav', 'sex', 2);
                scene.img('images/locations/pavlovsk/school/events/scoolrand_4_2.jpg');
                scene.text('Before you can answer the question Mr. Vasilyev poses you, you have to clean the blackboard, but accidentally drop the cloth and totally forget that you aren\'t wearing panties. The whistling and shouting from the boys and murmurs of disapproval from most of the girls behind you tell you that everyone has a clear view of your bare ass and pussy.');
                scene.text('Everyone but Mr. Vasilyev that is, who has no clue why the class is so riled up and desperately tries to calm them down.');
              }
            }
            scene.actions([
              { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
            ]);
          } else {
            if (((s as any).scooltiperand ?? 0) === 4) {
              if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
                scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/classroom_showing_pussy.jpg');
                scene.text('Katja is sitting with both of her legs on her chair and is trying to draw your attention for some reason. When she notices you\'re watching, she quickly makes sure no one else is paying attention and spread her legs slightly, revealing her bare pussy to you. You bite your lip and give her an appreciative nod.');
                qspCall(s, 'arousal', 'erotic_nudity', (-5));
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                ]);
              } else {
                break;
              }
            } else {
              if (((s as any).scooltiperand ?? 0) === 5) {
                if (((s as any).npc_had_sex ?? 0)?.['A12']) {
                  scene.img('images/locations/pavlovsk/school/events/scoolrand_7.jpg');
                  scene.text('Julia looks fantastic today: the transparent blouse she\'s wearing does a very nice job of accenting her breasts to anyone willing to look her way. Just when you were wondering who she\'s so dressed up for, you notice her glancing your way and then quickly looking away when she realizes you spotted her, a deep blush forming on her cheeks. She keeps glancing at you for the rest of class.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  break;
                }
              } else {
                if (((s as any).scooltiperand ?? 0) === 6) {
                  scene.img('images/locations/pavlovsk/school/events/urok7.jpg');
                  scene.text('As you wait for the end of the lesson, you notice you\'re not the only one being a bit drowsy; Anushka is very close to falling asleep on her desk.');
                  scene.actions([
                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).scooltiperand ?? 0) === 7) {
                    scene.img('images/locations/pavlovsk/school/classroom/soniaflash.jpg');
                    scene.text('You hear some whispers and see some other students looking towards the back every time Mr. Vasilyev is not looking. You glance back and see Anushka flashing her breasts at Erast every time Mr. Vasilyev looks away, while the boys take pictures of her each time and keep encouraging her to show more.');
                    qspCall(s, 'arousal', 'erotic_nudity', 5);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                    ]);
                  } else {
                    if (((s as any).scooltiperand ?? 0) === 8  &&  ((s as any).bag ?? 0) === 1) {
                      scene.img('images/locations/pavlovsk/school/classroom/dickpic.jpg');
                      scene.text('You get an alert on your phone and pull it out of your purse before placing it in your lap. You glance down and see someone has sent you an image; opening it, you see a picture of someone\'s dick. You hear some snickering and look up to see who it was, but you can\'t tell where it came from. Unsure what to do and not wanting to be caught looking at it, you delete the image.');
                      qspCall(s, 'arousal', 'erotic', 5);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).scooltiperand ?? 0) === 9) {
                        scene.img('images/locations/pavlovsk/school/classroom/wedgieb.jpg');
                        scene.text('You hear a pained grasp, as do several others and glance over just in time to see Dan letting go of Petia\'s underwear. He\'s pulled his underwear half way up his back and you wince slightly at what looks like a painful wedgie.');
                        scene.actions([
                          { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                        ]);
                      } else {
                        if (((s as any).scooltiperand ?? 0) <= 11) {
                          scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
                          scene.text('As you arrive in class you look around and decide to sit next to…');
                          scene.actions([
                            { label: 'Erast', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Erast, who awkwardly shuffles in his seat and avoids looking at you. You can tell your reputation as the school bike is making him feel uncomfortable, but he\'s too polite to say anything.');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A150', 1);
        scene.text('You sit next to Erast and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Erast and he politely enages you in conversation before someone calls you out for trying to socialise with someone above your social standing and Erast grows quiet.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A146', 1);
          scene.text('You sit next to Erast. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Julia', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Julia. She avoids making eye contact with you and instead focuses on her coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A12', 1);
        scene.text('You sit next to Julia and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Julia, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A12', 1);
          scene.text('You sit next to Julia. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Katja, who stares at you in disbelief and starts blushing bright red before she gets up and hurries to sit next to her sister.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
        scene.text('You sit next to Katja and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Katja, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A14', 1);
          scene.text('You sit next to Katja. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Albina', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((st as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('You sit next to Albina, who gives you a pitiful look. "Still slutting it up?"');
      scene.text('You blush slightly. but just nod. She just shakes her head and tells you to be careful before turning away.');
    } else {
      if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
        scene.text('You sit next to Albina, who immediately looks you over before shaking her head in disgust. "Don\'t even think about it, cum rag."');
      } else {
        if (((st as any).grupTipe ?? 0) === 1  ||  ((st as any).grupTipe ?? 0) === 2) {
          qspCall(st, 'npc_relationship', 'modify', 'A23', 1);
          if (((st as any).npc_rel ?? 0)?.['A23'] >= 60) {
            scene.text('You sit next to Albina and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
          } else {
            if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
              scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone who cares!"');
              scene.text('"Bitch…" you mutter and she shoots you a piercing glare.');
            } else {
              scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
            }
          }
        } else {
          if (((st as any).grupTipe ?? 0) === 3) {
            qspCall(st, 'npc_relationship', 'modify', 'A23', 1);
            if (((st as any).npc_rel ?? 0)?.['A23'] >= 60) {
              scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
            } else {
              if (((st as any).npc_rel ?? 0)?.['A23'] <= 20) {
                scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone who cares, geek!"');
                scene.text('"Okay…" you mumble before walking away.');
              } else {
                scene.text('You sit next to Albina. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet. At least she spoke to you…');
              }
            }
          } else {
            if (((st as any).grupTipe ?? 0) === 4) {
              scene.text('You sit next to Albina, who rolls her eyes and scoffs at you. "Go bother someone else, junkie!"');
              scene.text('"Fucking cunt," you mutter and she shoots you a piercing glare.');
            } else {
              scene.text('You sit next to Albina, who gives you a pitiful look before turning away and ignoring you for the rest of the lesson.');
            }
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Anushka, who ignores you at first before mouthing "slut" at you and doing a motion with her hands where she pretends to be forcing your head down on her imaginary dick.');
    } else {
      if (((st as any).grupTipe ?? 0) === 4) {
        qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
        scene.text('You sit next to Anushka and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Anushka and she starts having fun with you, gleefully mocking you so much that the other gopniks join in.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
          scene.text('You sit next to Anuska. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Natasha', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Natasha, who avoids making eye contact with you and instead focuses on her coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A16', 1);
        scene.text('You sit next to Natasha and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Natasha, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A16', 1);
          scene.text('You sit next to Natasha. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Feofan', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Feofan, who looks at you in disgust and instead focuses on his coursework.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A152', 1);
        scene.text('You sit next to Feofan and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Feofan, but he ignores you and chooses to talk to other people or do his coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A152', 1);
          scene.text('You sit next to Feofan. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with him before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Svyatoslav', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Svyatoslav, who ignores you at first before getting your attention and pointing at the bulge in his pants while winking.');
      scene.text('"You know you want it, so come and get it slut," he whispers with a smile.');
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A8', 1);
        scene.text('You sit next to Svyatoslav and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Svyatoslav, who completely ignores you and talks to Vanya instead.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A8', 1);
          scene.text('You sit next to Svyatoslav. He\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with him where he flirts with you before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Vicky', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Vicky, who gives you a disgusted glare and walks away to sit with Vanya.');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
        scene.text('You sit next to Vicky and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Vicky, but she ignores you and instead talks to Vanya and her sister.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
          scene.text('You sit next to Vicky. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            { label: 'Zinaida', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/talkgirl3.jpg');
    qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text('You sit next to Zinaida, who avoids making eye contact with you and instead focuses on playing a game on her phone before class starts.');
    } else {
      if (((st as any).grupTipe ?? 0) === 3) {
        qspCall(st, 'npc_relationship', 'modify', 'A142', 'like');
        scene.text('You sit next to Zinaida and you spend most of the class talking quietly with each other, often getting stern looks from Mr. Vasilyev when you get a bit too loud. He clears his throat and hushes you a few times before he finally tells you to be quiet or he\'ll send you to the principal\'s office.');
      } else {
        if (((st as any).grupTipe ?? 0) === 5) {
          scene.text('You sit next to Zinaida, but she awkwardly ignores you and chooses to talk to other people or do her coursework.');
        } else {
          qspCall(st, 'npc_relationship', 'modify', 'A142', 'like');
          scene.text('You sit next to Zinaida. She\'s a little surprised that you chose to do so, but you\'re able to strike up a brief, if a little awkward, conversation with her before Mr. Vasilyev asks you to be quiet.');
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((s as any).scooltiperand ?? 0) === 12) {
                            scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
                            scene.text('The lesson takes a brief pause as one of the students asks Mr. Vasilyev a question about her paper. With nothing to do for the moment, you doodle lazily in the margin of your notebook.');
                            scene.text('When you look back up, you notice Feofan turning his head away. You don\'t think much of it at first, until you catch him a second time. Was he looking at you, or just in your direction? Even Mr. Vasilyev walks by and pauses next to your desk for a moment before continuing on.');
                            scene.text('Class resumes, and things return to normal, but part-way through the lesson, you look at Feofan again and find him staring at you. He\'s clearly not trying to make eye contact, however, or he would have noticed you looking back at him.');
                            scene.text('Following his gaze down, you spot what\'s caught his attention: your uniform has lost a button, which is giving him a good view of your cleavage.');
                            qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
                            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                              scene.actions([
                                { label: 'Ignore it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                              ]);
                            } else {
                              scene.actions([
                                { label: 'Ignore it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A152', 3);
    scene.img('images/locations/pavlovsk/school/classroom/open.jpg');
    scene.text('You let Feofan continue to gawk at you. You find yourself somewhat amused at how little it takes to completely enthrall some boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                              ]);
                            }
                            scene.actions([
                              { label: 'Pull your shirt closed', handler: (st: GameState) => {
    scene.text('You quickly grasp both sides of your blouse and pull them tightly together. Feofan\'s face turns red when he realizes he\'s been caught, and he immediately turns back to face the blackboard.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).scooltiperand ?? 0) === 13  &&  ((s as any).NatbelQW ?? 0)?.['panty_stuff_day'] !== ((s as any).daystart ?? 0)) {
                              scene.img('images/locations/pavlovsk/school/classroom/art/natpanties.jpg');
                              scene.text('Natasha asks Anushka if she can borrow a pencil as she seems to have lost hers. Anushka agrees and offers her one, but keeps pulling it slightly out of reach of Natasha, who keeps stretching forward to reach it. By the time Natasha grabs the pencil from Anushka, she has given everyone behind her a nice look at her panty-clad ass.');
                              qspCall(s, 'arousal', 'erotic', 5);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                              ]);
                            } else {
                              if (((s as any).scooltiperand ?? 0) === 14) {
                                scene.img('images/locations/pavlovsk/school/classroom/art/julnushalbvic1.jpg');
                                scene.text('Near the end of class, Mr. Vasilyev lets the class practice their own thing. Feofan pulls a fairly nice camera from his bag and starts taking pictures of his fellow students, which quickly gets the girls to pose in groups. At one point, he gets Julia, Anushka, Albina and Vicky to all pose together, but when he tries to take their picture, Anushka sticks her tongue out between her fingers in the universal \'eat me\' sign.');
                                scene.text('Feofan laughs it off. "Very funny Anushka, but I want to take a serious picture of you. so can you not stick your tongue out this time?"');
                                scene.text('Anushka\'s only reply is to roll her eyes at him.');
                                qspCall(s, 'arousal', 'erotic', 5);
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Next picture', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/art/julnushalbvic2.jpg');
    scene.text('As Feofan kneels to take their picture again, Mr. Vasilyev watches, looking pleased at Feofan\'s seriousness. Julia, Albina and Vicky pose seriously again while Anushka doesn\'t stick her tongue out this time, but instead lifts up the front of her skirt to show off her panties.');
    scene.text('Feofan blushes as Mr. Vasilyev speaks up. "That\'s enough of that, Miss Konstantinov."');
    scene.text('Anushka gives him an innocent look. "Why? Isn\'t this art class?"');
    scene.text('Mr. Vasilyev almost sighs as he responds. "Yes. it is art class, but that isn\'t appropriate and you know it."');
    scene.text('Anushka gives him a sweet smile and rattles off names of artists. "Is their work not appropriate art?"');
    scene.text('Mr. Vasilyev looks surprised by the question. "Those are some classic artists. Of course there\'s nothing wrong with their work."');
    scene.text('She then smiles, as if she expected that response. "Yes, but doesn\'t some of their work show nudity? I only showed my panties, so why is their work okay and this isn\'t?"');
    scene.text('Mr. Vasilyev gives a bone weary sigh and starts trying to explain why art can show many things, but not everything is appropriate for school. It seems to be a losing discussion and you\'re sure Anushka is just yanking his chain for the fun of it. The rest of the class quickly loses interest in the discussion and goes back to doing their own thing.');
    qspCall(st, 'arousal', 'erotic', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                ]);
                              } else {
                                if (((s as any).scooltiperand ?? 0) === 15) {
                                  scene.img('images/locations/pavlovsk/school/classroom/art/vickypanties.jpg');
                                  scene.text('You notice Erast paying special attention to Vicky today and it seems she\'s noticed as well. At one point, she turns to sit sideways in her desk and spreads her legs, causing her skirt to ride up until it gives Erast a very nice view of her panties. His eyes grow wide as she giggles, straightens her skirt back in place and turns back to the front of class.');
                                  qspCall(s, 'arousal', 'erotic', 5);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                  ]);
                                } else {
                                  if (((s as any).scooltiperand ?? 0) === 16) {
                                    scene.img('images/locations/pavlovsk/school/classroom/art/nushvic.jpg');
                                    scene.text('Near the end of class, when Mr. Vasilyev lets the class have some free time to experiment with their own artwork, some of the girls get together to gossip about boys. Vicky starts talking about a date her and Vanya recently went on, even going so far as to act out a little bit of it. At one point, she bends over and talks about how she was rubbing her butt against Vanya\'s crotch while dancing, but before she can say what Vanya did, Anushka steps up behind her, grabs her hips and starts dry humping her. "This is what he was wanting to do to you."');
                                    scene.text('She gets all the girls to crack up, most agreeing that is all any boys talk about.');
                                    qspCall(s, 'arousal', 'erotic', 5);
                                    qspCall(s, 'arousal', 'end');
                                    scene.actions([
                                      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                    ]);
                                  } else {
                                    if (((s as any).scooltiperand ?? 0) === 17) {
                                      scene.img('images/locations/pavlovsk/school/classroom/art/nushpanties1.jpg');
                                      scene.text('During one of Mr. Vasilyev\'s lectures about art history, you get a little bored and glace around. You notice Anushka sitting in her desk with one of her knees pulled up almost to her chest, with her foot on the chair. This gives gives anyone looking a very clear view of her panties.');
                                      qspCall(s, 'arousal', 'erotic', 5);
                                      qspCall(s, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Look away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/classart.jpg');
    scene.text('You quickly turn away and focus on paying attention to the rest of Mr. Vasilyev\'s lecture.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                        { label: 'Keep looking', handler: (st: GameState) => {
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.img('images/locations/pavlovsk/school/classroom/art/nushpanties2.jpg');
      scene.text('When she notices you staring, she gives you a little kissy face before reaching down to her panties and pulling them aside to show you her shaved pussy while smiling at you.');
      scene.text(`Before you can look away, you hear Mr. Vasilyev clear his throat. When you glance at him, he gives you a stern look. "Please pay attention, Miss ${((st as any).pcs_lastname ?? '')}. I know art history is a bit dry and boring, but this will be in your test."`);
      scene.text('You nod and he goes back to the lecture. When you glance back, you see that Anushka is now sitting normally.');
    } else {
      scene.img('images/locations/pavlovsk/school/classroom/art/nushpanties1.jpg');
      scene.text('When she notices you staring, she gives you a little smirk before turning her attention away from you. She apparently doesn\'t care if you look up her skirt at her panties.');
    }
    qspCall(st, 'arousal', 'erotic', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                                      ]);
                                    } else {
                                      qspCall(s, 'stat', '');
                                      scene.img('images/locations/pavlovsk/school/classroom/class1.jpg');
                                      scene.text('As you sit in class listening to the lesson, you hear some of your fellow students talking behind you.');
                                      scene.actions([
                                        { label: 'Ignore them and wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
                                        { label: 'Eavesdrop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/classroom/eavesdrop.jpg');
    qspCall(st, 'gschool_gossip', 'lesson');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
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
  } else {
    qspGoto(s, 'gschool_lessons', 'short_break');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'literature':
      enterLiterature(s, scene);
      break;
    case 'reading':
      enterReading(s, scene);
      break;
    case 'getphone':
      enterGetphone(s, scene);
      break;
    case 'english':
      enterEnglish(s, scene);
      break;
    case 'working':
      enterWorking(s, scene);
      break;
    case 'help_radomir':
      enterHelpRadomir(s, scene);
      break;
    case 'music':
      enterMusic(s, scene);
      break;
    case 'art':
      enterArt(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessonsev3: LocationDef = {
  name: 'gschool_lessonsev3',
  title: 'During a rare moment of quietness, you take the opportunity ',
  region: 'other',
  enter: enter,
};
