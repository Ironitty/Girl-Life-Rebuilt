import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ermias_events', 'first_visit');
  (s as any).locclass = 'livingr';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ermias\'s Dorm Room</b></center>');
  qspCall(s, 'npcStat', 'A243');
  ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['first_visit'] = 1;
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('The room is pretty standard looking other than the numerous posters of naked or scantily dressed white women on the walls. Two beds are over by the windows with a large desk between, while a couch sits against the bottom of one of the beds across from the door.');
  scene.text('"I hope you are comfortable here when we... get down to business..." he grins.');
  scene.text('You give him a puzzled stare and he smirks.');
  scene.text('"You did not think I asked you to come here just to chat? I plan on fucking as much white girl pussy as I can while I am here, yours included."');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A243', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Something about his attitude puts you off and you don\'t feel like doing this anymore, so you pretend to check your phone.');
    scene.text('"Sorry, but something\'s just come up and I need to go. I\'ll come back another time."');
    scene.text('"Okay," he shrugs, clearly disappointed as he walks you to the door and shows you out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go along with it', goto: ['ermias_events', 'first_time_sex'] },
  ]);
  scene.build();
}

function enterFirstTimeSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  ||  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
    scene.img('images/characters/shared/headshots_main/big243.jpg');
    scene.text('You bite your lip, imagining what could happen before you suddenly snap back to reality. "I\'m a virgin, though..."');
    scene.text('He frowns. "Why did you not say so? I am too big for you for your first time. You should try a white boy first. Their cocks are... more your size."');
    scene.text('A smile then appears on his face. "Unless you want to just suck my big cock?"');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"I should go," you say and he nods.');
    scene.text('"I understand," he says as he walks you to the door and shows you out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get on your knees', goto: ['ermias_events', 'blowjob'] },
    ]);
  } else {
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    if (((s as any).ErmiasQW ?? 0)?.['dorm_bj'] === 0) {
      scene.text('You bite your lip, imagining what could happen before you snap back to reality. You give him a flirty smile before you drop to your knees in front of him, the huge bulge in his shorts catching your eye.');
      scene.text('You grab the waistband of his shorts and slowly pull them down. You gasp and your eyes widen at the sight of his monstrous cock springing free. He\'s not even fully erect yet and it\'s already as long and thick as your forearm.');
      scene.text('"Oh my god..." you whisper.');
      scene.text('"Like what you see?" he says with a hint of smugness. "I had a white girl who was so shocked that she actually measured it. 28cm once she got me fully hard."');
      scene.text('Still in awe at the size of his massive cock, you start licking the thick tip before wrapping your lips around it and taking it into your mouth.');
      if (((s as any).pcs_throat ?? 0) <= 10) {
        scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 25) {
          scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          if (((s as any).pcs_throat ?? 0) <= 35) {
            scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
            scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
          } else {
            scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
            scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
          }
        }
      }
      scene.text('His cock grows even bigger and thicker in your mouth and your jaw is already aching after just a few seconds, so you pop it out of your mouth and smile up at him, drool dripping from your chin as you jerk him off with both hands.');
      scene.text('"Good girl. Now tell me how you want me to fuck your little white pussy, slut," he grins.');
    } else {
      scene.text('You bite your lip and give him a flirty smile as you walk over and drop to your knees in front of him.');
      scene.text('Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
      scene.text('"Someone\'s happy to see me..." you giggle.');
      scene.text('You start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth.');
      if (((s as any).pcs_throat ?? 0) <= 10) {
        scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 25) {
          scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          if (((s as any).pcs_throat ?? 0) <= 35) {
            scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
            scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
          } else {
            scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
            scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
          }
        }
      }
      scene.text('Your jaw starts aching after a few minutes, so you pop his massive cock out of your mouth and smile up at him while jerking him off with both hands.');
      scene.text('"Good girl. Now tell me how you want me to fuck your little white pussy this time, slut," he grins.');
    }
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'hj', (-2), 'sub');
    qspCall(s, 'pain', '', 2, 'jaw', 'ache');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Missionary style', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A243'] = 1;
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('"Will you fuck me missionary style?" you ask.');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('He gropes and squeezes your large breasts in his hands.');
        scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
          scene.text('He gropes and firmly spanks your ass with his hands.');
          scene.text('"I love a white girl with a big ass," he grins.');
        } else {
          scene.text('He looks over your naked body, but doesn\'t say anything.');
        }
      }
    }
    scene.text('He then pushes you down on his bed before he grabs a bottle of lube from a drawer on the desk and applies some to his cock. He then climbs on top of you and grinds the thick tip of his cock against your slit before he slowly pushes it inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
      qspCall(s, 'pain', '', 7, 'vaginal', 'stretch');
      qspCall(s, 'stat', '');
      scene.text('You gasp loudly and wince in pain as it stretches you to what feels like the limit.');
      scene.text('"Fuck, oh <i>FUCK!</i>" you cry out as you glance down and see that barely half of his monstrous cock is inside you.');
      scene.text('"Oh, you are tight! I will go slow for you," he grunts before he slowly starts fucking you at his current depth.');
      scene.text('After only a few minutes, it feels like he might actually tear your pussy in half!');
      qspCall(s, 'willpower', 'sex', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('You grit your teeth and continue to endure it. Thankfully, the pain slowly dulls and gives way to pleasure as you moan softly with each thrust of his cock.');
    scene.text('You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm, your body shuddering as waves of pleasure wash over you.');
    scene.text('Ermias grins and gives you a small breather before he applies some more lube to his cock and continues fucking you, his groans telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You weakly wrap your legs around his back. Taking this as consent, he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('The pain soon becomes unbearable and you have to ask him to stop. He nods and slowly pulls out of you, a throbbing pain pulsing through your pussy as you clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
        scene.text('You gasp as he pushes further and stretches you to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that he still has a few inches left to insert.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('Your pussy being stretched is still a little painful, but you manage to endure it and are able to keep going.');
    scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
    scene.text('He does just that and your inner walls suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
    scene.text('He gives you a small breather before he continues fucking you, his groans telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You weakly wrap your legs around his back. Taking this as consent, he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('Despite the pleasure, the stretching of your pussy soon becomes too much and you have to ask him to stop. He nods and slowly pulls out of you, a throbbing pain pulsing through your pussy as you clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting. "Always nice and tight for my big cock. Rare to find a white girl who can take me so easily, though."');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and you suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('He gives you a small breather before he continues fucking you even harder, the bed squeaking beneath you with each thrust as you moan loudly. He in turn starts groaning, telling you he\'s close himself.');
        scene.actions([
          { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You weakly wrap your legs around his back. Taking this as consent, he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
          { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
      { label: 'Doggystyle', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A243'] = 1;
    scene.img('images/shared/sex/vag/doggy/africandoggy3.mp4');
    scene.text('"Will you fuck me doggystyle?" you ask.');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('He gropes and squeezes your large breasts in his hands.');
        scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
          scene.text('He gropes and firmly spanks your ass with his hands.');
          scene.text('"I love a little white girl with a big ass," he grins.');
        } else {
          scene.text('He looks over your naked body, but doesn\'t say anything.');
        }
      }
    }
    scene.text('He then pushes you down on his bed on all fours before he grabs a bottle of lube from a drawer on the desk and applies some to his cock.');
    scene.text('He then moves in behind you and grinds the thick tip of his cock against your slit before he slowly pushes it inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
      qspCall(s, 'pain', '', 7, 'vaginal', 'stretch');
      qspCall(s, 'stat', '');
      scene.text('You gasp loudly and wince in pain as it stretches you to what feels like the limit.');
      scene.text('"Fuck, oh <i>FUCK!</i>" you cry out as you glance back and realize that you\'re taking barely half of his monstrous cock inside you.');
      scene.text('"Oh, you are tight! I will go slow for you," he grunts before he grabs your hips and slowly starts fucking you at his current depth.');
      scene.text('After only a few minutes, it feels like he might actually tear your pussy in half!');
      qspCall(s, 'willpower', 'sex', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('You grit your teeth and continue to endure it. Thankfully, the pain slowly dulls and gives way to pleasure as you moan softly with each thrust of his cock.');
    scene.text('You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm, your body shuddering as waves of pleasure wash over you.');
    scene.text('Ermias gives you a small breather and a smack on the ass before he applies some more lube to his cock and continues fucking you, his groans telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. Your legs give out and you collapse on the bed, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('The pain soon becomes unbearable and you have to ask him to stop. He nods and slowly pulls out of you, a throbbing pain pulsing through your pussy as you collapse on the bed and clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You gasp as he pushes further and stretches you to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance back and see that he still has a few inches left to insert.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('Your pussy being stretched is still a little painful, but you manage to endure it and are able to keep going.');
    scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
    scene.text('He does just that and your inner walls suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
    scene.text('He gives you a small breather and a smack on the ass before he continues fucking you, his groans telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. Your legs give out and you collapse on the bed, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('The pain soon becomes unbearable and you have to ask him to stop. He nods and slowly pulls out of you, a throbbing pain pulsing through your pussy as you collapse on the bed and clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting. "Always nice and tight for my big cock. Rare to find a white girl who can take me so deep, though."');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and you suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm. Your legs grow weak and you almost collapse, but Ermias grips you tightly by the hips.');
        scene.text('He gives you a small breather and a smack on the ass before he continues fucking you even harder, his hips smacking against your ass with each thrust as you moan loudly. He in turn starts groaning, telling you he\'s close himself.');
        scene.actions([
          { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. Your legs give out and you collapse on the bed, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'You want to ride him', handler: (st: GameState) => {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A243'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You slyly smile at him. "I want to ride you."');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('He gropes and squeezes your large breasts in his hands.');
        scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
          scene.text('He gropes and firmly spanks your ass with his hands.');
          scene.text('"I love a white girl with a big ass," he grins.');
        } else {
          scene.text('He looks over your naked body, but doesn\'t say anything.');
        }
      }
    }
    scene.text('He then grabs a bottle of lube from his desk drawer, applying some to his cock before he flops down on his bed and pulls you on top of him.');
    scene.text('You grin as you mount him, taking hold of his slick shaft and guiding it to your slit before slowly lowering yourself down onto his massive cock.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      scene.text('You gasp loudly and wince in pain as it stretches you to what feels like the limit.');
      scene.text('"Fuck, oh <i>FUCK!</i>" you cry out as you glance down and realize that you\'re taking barely half of his monstrous cock inside you.');
      scene.text('"Oh, you are tight!" he grunts. "I will let you go slow."');
      qspCall(s, 'willpower', 'sex', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('You grit your teeth and endure it, soon finding the perfect pace as the pain slowly dulls and gives way to pleasure as you moan softly.');
    scene.text('You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm, Ermias holding you steady as your body shudders in pleasure.');
    scene.text('You smile at him and take a small breather before continuing. It doesn\'t take long before you recognize the usual grunts and know what awaits...');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan, continuing to ride him before he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. You climb off of him and flop down on the bed, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('Despite being in control, the pain soon becomes unbearable and you have to stop. You slowly pull yourself off of him, a throbbing pain pulsing through your pussy as you clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        scene.text('You gasp as it stretches your pussy to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that you still have a few inches left to go.');
        scene.text('"White girl pussy is the best!" he grunts as he grabs your hips and thrusts upwards, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('It\'s a little painful as you start riding him, but soon find the perfect pace, moaning loudly as you bounce up and down on his massive cock.');
    scene.text('You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock and Ermias holds you steady as your body shudders in orgasm.');
    scene.text('You take a small breather before continuing. It doesn\'t take long before you recognize the usual grunts and know what awaits...');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. Your legs give out and you collapse on the bed, your pussy suddenly feeling very empty as thick blobs of cum ooze out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as waves of pleasure continue to wash over you.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Keep fucking me and you will never go back to a white boy."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Tap out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('Despite being in control, the pain soon becomes unbearable and you have to stop. You slowly pull yourself off of him, a throbbing pain pulsing through your pussy as you clutch at your abdomen.');
    scene.text('"I guess I am a little big for you," he says. "Maybe we should stop here? You can just suck my cock if you want?"');
    scene.text('You nod and slowly get down on your knees before taking his cock into your mouth and sucking it while using your hand to jerk him off at the same time.');
    scene.text('A few minutes later, he groans loudly and you quickly pull yourself off of his cock before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('When he finally finishes, you suck on the tip and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You grin up at him as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('"Sorry I had to tap out," you pant. "Your cock is just <i>so</i> fucking big I thought you would rip me in two!"');
    scene.text('"It is okay," he grins. "Your little white pussy will soon get used to being fucked by my big black cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I did have fun," you say. "Even if I did wimp out near the end."');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. Once you get used to my big black cock, you will never look at white boy cock the same way."');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('You moan loudly as you sink down and feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"White girl pussy is the best!" he grunts as he grabs your hips. "Always nice and tight for my big cock. Rare to find a white girl who can take me so deep, though."');
        scene.text('You start riding him and soon find the perfect pace, moaning loudly as you hammer yourself up and down on his monstrous cock. It stretches and fills your pussy in ways you could never have imagined and you soon feel an orgasm approaching.');
        scene.text('A few seconds later, you slam down on his cock once more and feel your inner walls clamp down around him, your vision going blurry as your whole body shudders in orgasm.');
        scene.text('You take a small breather before continuing. It doesn\'t take long before you recognize the usual grunts and know what awaits...');
        scene.actions([
          { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you, continuing to ride his massive cock as his grunts become more frequent.');
    scene.text('You keep riding him until he grabs your hips and thrusts upwards. You feel his cock twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('Once he\'s finished, you lift yourself off of him and roll over onto the bed next to him.');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum dribble out of your pussy.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. And you were really living up to the name there when you were bouncing up and down on my cock!"');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
          { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('You continue riding him until his grunts become more frequent and you quickly pull yourself off of him. Rolling off the bed and onto your knees, Ermias stands above you jerking his cock.');
    scene.text('A few seconds later, spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"That... That was... amazing!" you pant as thick blobs of cum drip from your chin and land on your breast.');
    scene.text('He chuckles. "You white sluts are all the same. You love getting fucked by a <i>real</i> cock."');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had a great time," you say.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin.');
    scene.text('"Bunny?" you ask with a questioning smile.');
    scene.text('"You know, snow bunny," he explains. "White girls who love getting pounded by big black cocks. And you were really living up to the name there when you were bouncing up and down on my cock!"');
    scene.text('"Oh," you reply as you finish getting dressed and he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVisit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ermias_events', 'visit');
  (s as any).locclass = 'livingr';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'npcStat', 'A243');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big243.jpg');
  if (((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
    scene.text('He grins as you strip down in front of him. "So is your little white pussy ready for me or do you just want to suck my cock?"');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A243', (-1));
    qspCall(s, 'stat', '');
    scene.text('Doubt overwhelms you and you pretend to check your phone before you put your clothes back on.');
    scene.text('"Sorry, but I need to go," you say and he nods.');
    scene.text('"I understand," he says as he walks you to the door and shows you out. "If you do not want to do it, then you do not need to keep coming back."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).stat ?? 0)?.['vaginal'] !== 0) {
      scene.actions([
        { label: 'Fuck him', goto: ['ermias_events', 'first_time_sex'] },
      ]);
    }
    scene.actions([
      { label: 'Suck his dick', goto: ['ermias_events', 'blowjob'] },
    ]);
  } else {
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).pcs_throat ?? 0) >= 25) {
      if (((s as any).ErmiasQW ?? 0)?.['throatfuck'] === 0) {
        scene.text('"Welcome back. I was thinking of doing something different today, bunny," he grins as you strip down in front of him.');
        scene.text('You gaze down and see the huge bulge of his massive cock straining against his shorts as you remove the last of your clothes. "Oh? And what was that?"');
        if (((s as any).pcs_throat ?? 0) > 35) {
          scene.text('He grins. "You can swallow my cock like no other little white slut can. I want to fuck your throat today."');
        } else {
          scene.text('He grins. "You are pretty good at sucking my cock. I want to try fucking your throat today."');
        }
        qspCall(s, 'willpower', 'bj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"Sorry, but I don\'t feel like doing that," you reply. "Can we just fuck?"');
    scene.text('"Sure," he shrugs, clearly a little disappointed, but happy to fuck you anyway.');
    scene.actions([
      { label: 'Get on your knees', goto: ['ermias_events', 'sex'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree', goto: ['ermias_events', 'throat_fuck'] },
        ]);
      } else {
        scene.text('"Welcome back, bunny. What do you say to letting me fuck your slutty little throat again?" he grins.');
        qspCall(s, 'willpower', 'bj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"Not today, Ermias," you reply. "Let\'s just fuck instead."');
    scene.text('"Sure," he shrugs, clearly a little disappointed, but happy to fuck you anyway.');
    scene.actions([
      { label: 'Get on your knees', goto: ['ermias_events', 'sex'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree', goto: ['ermias_events', 'throat_fuck'] },
        ]);
      }
    } else {
      scene.text('"Welcome back. Ready to hop on my big black cock again, bunny?" he grins as you strip down in front of him.');
      scene.text('You gaze down and see the huge bulge of his massive cock straining against his shorts as you remove the last of your clothes.');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Change your mind and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A243', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You suddenly don\'t feel like doing this anymore, so you pretend to check your phone before you put your clothes back on.');
    scene.text('"Sorry, but something has just come up and I need to go. I\'ll come back another time."');
    scene.text('"Oh. Okay," he shrugs, clearly disappointed as he walks you to the door and shows you out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      }
      (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
      if ((!((s as any).temp_rand ?? 0))) {
        scene.actions([
          { label: 'Get on your knees', goto: ['ermias_events', 'threesome_start'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) < 3  &&  ((s as any).npc_had_sex ?? 0)?.['A243'] === 1  &&  ((s as any).ErmiasQW ?? 0)?.['filmed'] === 0) {
          scene.actions([
            { label: 'Get on your knees', goto: ['ermias_events', 'filmed_start'] },
          ]);
        } else {
          scene.actions([
            { label: 'Get on your knees', goto: ['ermias_events', 'sex'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/africanblowjob2.mp4');
  if (((s as any).locArgs?.[1] ?? 0) === 'skip_bj') {
    scene.text('You answer by taking a bit more of his cock into your mouth as you continue sucking it.');
    scene.text('"Oh yes! Keep going, slut!" he grunts as you slurp and gag on his huge shaft while trying to stuff even more of it into your mouth.');
    scene.text('Your jaw starts aching after a few minutes, so you pop his massive cock out of your mouth and smile up at him while jerking him off.');
    scene.text('"Now tell me how you want me to fuck your little white pussy this time, slut," he grins.');
  } else {
    scene.text('You bite your lip and give him a flirty smile as you walk over and drop to your knees in front of him.');
    scene.text('Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
    scene.text('"Someone\'s happy to see me..." you giggle.');
    scene.text('You start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth.');
    if (((s as any).pcs_throat ?? 0) <= 10) {
      scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 25) {
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
      }
    }
    scene.text('Your jaw starts aching after a few minutes, so you pop his massive cock out of your mouth and smile up at him while jerking him off.');
    scene.text('"Now tell me how you want me to fuck your little white pussy this time, slut," he grins.');
  }
  qspCall(s, 'arousal', 'bj', 2, 'sub');
  qspCall(s, 'arousal', 'hj', (-2), 'sub');
  qspCall(s, 'pain', '', 2, 'jaw', 'ache');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_ass ?? 0) > 10) {
    scene.actions([
      { label: 'Fuck my ass', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 4, 'anus', 'stretch');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/mis/africananalmis3.mp4');
    scene.text('You slyly smile before flopping down on his bed and pulling your legs up to your chest. "I want you to fuck my ass this time."');
    scene.text('He smiles and grabs a bottle of lube from his desk drawer, applying some to his cock before he walks over to you. He squirts some more of the liquid onto his fingers and you gasp when you feel him working it into your asshole.');
    scene.text('Once he has you ready, you feel the thick head of his cock pressing against your asshole.');
    scene.text('The pressure slowly builds until your ass suddenly stretches out and his dick pops into you, causing you to groan in pain as it stretches your anus.');
    scene.text('"AAAHHHH, FUCK!!!" you cry out as he pushes himself a little deeper.');
    scene.text('"I love a white girl who is extra slutty," he grins. "And nothing says slutty like taking my big black cock in your tight little white ass!"');
    scene.text('He then grabs your legs and starts thrusting, driving his massive cock into your ass and stretching you wide as you reach down and start rubbing your clit, causing you to moan as pain and pleasure come together.');
    scene.text('You don\'t know how long he fucks you until he starts grunting, telling you he\'s close.');
    qspCall(s, 'arousal', 'anal', 15, 'lube', 'sub');
    qspCall(s, 'arousal', 'clit_finger', (-15), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/analcreampie/doggy_drip2.mp4');
    scene.text('After a few more minutes, his thrusts become more rapid. You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your ass.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. You roll up onto your knees and spread your ass as a thick blob of cum loudly spurts out of your stretched asshole, followed by several more.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 3;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 4, 'asshole', 'stretch');
    (s as any).agape = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as pain shoots through your anus.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I loved filling your tight little white ass with my cum."');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Missionary style', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('"Want to fuck me missionary this time?" you ask.');
    scene.text('He pulls you to your feet and pushes you down on his bed. You spread your legs and watch as he grabs a bottle of lube from a drawer on the desk and applies some to his cock before he climbs on top of you.');
    scene.text('He then grinds the thick tip of his cock against your slit before he slowly slides it inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
      qspCall(s, 'stat', '');
      scene.text('You gasp loudly and wince in pain as his massive cock stretches you out. While it\'s not as painful as the first time, your pussy is still not used to such a massive insertion.');
      scene.text('"Your little white pussy is just as tight as last time! I will go slow for you again," he grunts before he slowly starts fucking you at his current depth.');
      scene.text('The pain dulls and gives way to pleasure as you moan softly with each thrust of his cock. You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm.');
      scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'pain', '', 3, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You gasp as he pushes deeper and stretches you further, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that he still has a few inches left to insert.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting, pushing himself deeper.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and your inner walls suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
      } else {
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you, stretching your pussy wide.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting, the bed squeaking beneath you as he rams his massive cock into your pussy.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and you suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
      }
    }
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You giggle as you straddle him and guide his massive, slick shaft back into your pussy, causing you to moan as it stretches you out.');
    scene.text('"That is it," he grunts. "Ride my big black cock, you little white slut!"');
    scene.text('You ride him for only a few minutes before you have another explosive orgasm, barely able to keep yourself steady as your body shudders in pleasure.');
    scene.text('Ermias doesn\'t even wait for it to pass, smacking your ass and thrusting into your still sensitive pussy as he grunts and groans, telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('His thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You keep riding him until he grabs your hips and thrusts upwards. You feel his cock twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once he\'s finished, you lift yourself off of him and roll over onto the bed next to him, panting as thick blobs of cum spurt out of your pussy.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love filling your tight white pussy with my cum."');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('He starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You sit on your knees panting as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love covering your cute little face with my cum. You white sluts always look like a work of art when I am done with you!"');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Doggystyle', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/africandoggy3.mp4');
    scene.text('"Want to fuck me doggystyle this time?" you ask.');
    scene.text('He pulls you to your feet and pushes you down on his bed on all fours. He then grabs a bottle of lube from a drawer on the desk and applies some to his cock before he moves in behind you.');
    scene.text('You feel him grinding the thick tip of his cock against your slit before he slowly slides it inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
      qspCall(s, 'stat', '');
      scene.text('You gasp loudly and wince in pain as his massive cock stretches you out. While it\'s not as painful as the first time, your pussy is still not used to such a massive insertion.');
      scene.text('"Your little white pussy is just as tight as last time! I will go slow for you again," he grunts before he slowly starts fucking you at his current depth.');
      scene.text('The pain dulls and gives way to pleasure as you moan softly with each thrust of his cock. You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm.');
      scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'pain', '', 3, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You gasp as he pushes further and stretches your pussy, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance back.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting, pushing himself deeper.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and your inner walls suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
      } else {
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and you suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm. Your legs grow weak and you almost collapse, but Ermias grips you tightly by the hips.');
        scene.text('Once your orgasm passes, he suddenly pulls out and applies some more lube to his cock before he flops down next to you and pulls you on top of him.');
      }
    }
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You giggle as you straddle him and guide his massive, slick shaft back into your pussy, causing you to moan as it stretches you out.');
    scene.text('"That is it," he grunts. "Ride my big black cock, you little white slut!"');
    scene.text('You ride him for only a few minutes before you have another explosive orgasm, barely able to keep yourself steady as your body shudders in pleasure.');
    scene.text('Ermias doesn\'t even wait for it to pass, smacking your ass and thrusting into your still sensitive pussy as he grunts and groans, telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip_doggy1.mp4');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid, but you\'re enjoying yourself too much. You don\'t care if he cums inside you, you don\'t want him to stop for even a second.');
    scene.text('You just pant and moan as he thrusts hard and you feel his massive cock suddenly starts twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. Your legs give out and you collapse on the bed, your pussy suddenly feeling very empty as thick blobs of cum spurt out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You just lie on the bed for a few minutes as your body continues to shudder in pleasure.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love filling your tight white pussy with my cum."');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('After a few minutes, he starts grunting as his thrusts become more rapid.');
    scene.text('"P-pull out..." you manage to say in between your moans, your mind still fuzzy.');
    scene.text('He quickly pulls out and drags you off the bed, getting you down on your knees in front of him as he jerks his cock. A few seconds later, he groans loudly and spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You sit on your knees panting as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love covering your cute little face with my cum. You white sluts always look like a work of art when I am done with you!"');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
    { label: 'You want to ride him', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You slyly smile at him. "I want to ride you this time."');
    scene.text('He smiles and grabs a bottle of lube from his desk drawer, applying some to his cock before he flops down on his bed.');
    scene.text('You grin as you mount him, taking hold of his slick shaft and guiding it to your slit before slowly lowering yourself down onto his massive cock.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
      qspCall(s, 'stat', '');
      scene.text('You gasp loudly and wince in pain as his massive cock stretches you out. While it\'s not as painful as the first time, your pussy is still not used to such a massive insertion.');
      scene.text('"Oh, you are still tight!" he grunts. "I will let you go slow."');
      scene.text('You start riding him and soon find the perfect pace, the pain dulling and giving way to pleasure as you moan softly. You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm.');
      scene.text('Once it passes, you stop to take a small breather.');
      scene.text('"I did not say you could stop, slut!" he barks as he smacks your ass. "Keep going."');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'pain', '', 3, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You gasp as it stretches your pussy, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that you still have a few inches left to go.');
        scene.text('"White girl pussy is the best!" he grunts as he grabs your hips and thrusts upwards, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        scene.text('You start riding him and soon find the perfect pace, moaning loudly as you bounce up and down on his massive cock. You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock and your body shudders in orgasm.');
        scene.text('Once it passes, you stop to take a small breather.');
        scene.text('"I did not say you could stop, slut!" he barks as he smacks your ass. "Keep going."');
      } else {
        scene.text('You moan loudly as you sink down and feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he grabs your hips.');
        scene.text('You start riding him and soon find the perfect pace, moaning loudly as you hammer yourself up and down on his monstrous cock. It stretches and fills your pussy in ways you could never have imagined and you soon feel an orgasm approaching.');
        scene.text('A few seconds later, you slam down on his cock once more and feel your inner walls clamp down around him, your vision going blurry as your whole body shudders in orgasm.');
        scene.text('Once it passes, you stop to take a small breather.');
        scene.text('"I did not say you could stop, slut!" he barks as he smacks your ass. "Keep going."');
      }
    }
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue riding him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You glance down at him as you start riding him again, deciding to go a little faster this time.');
    scene.text('"That is it," he grunts. "Ride my big black cock, you little white slut!"');
    scene.text('You ride him for only a few minutes before you have another explosive orgasm, barely able to keep yourself steady as your body shudders in pleasure.');
    scene.text('Ermias doesn\'t even wait for it to pass, smacking your ass and thrusting into your still sensitive pussy as he grunts and groans, telling you he\'s close himself.');
    scene.actions([
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.text('You\'re enjoying yourself so much that you don\'t even care if he cums inside you. You grip your thighs around his waist and continue bouncing on his cock as his grunts become more frequent.');
    scene.text('You keep riding him until he grabs your hips and thrusts upwards. You feel his cock twitching inside you as spurt after spurt of thick, warm cum starts filling your pussy.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/drip2.mp4');
    scene.text('Once he\'s finished, you lift yourself off of him and roll over onto the bed next to him, panting as thick blobs of cum spurt out of your pussy.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love filling your tight white pussy with my cum."');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('You continue riding him until his grunts become more frequent and you quickly pull yourself off of him. Rolling off the bed and onto your knees, Ermias stands above you jerking his cock.');
    scene.text('A few seconds later, spurt after spurt of warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (50);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You sit on your knees panting as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"I had fun again," you smile.');
    scene.text('"Me too, bunny," he replies as he watches you with a satisfied grin. "I love covering your cute little face with my cum. You white sluts always look like a work of art when I am done with you!"');
    scene.text('Once you finish getting dressed, he walks you to the door.');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ErmiasQW ?? 0)?.['dorm_bj'] === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A243'] === 0) {
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('You bite your lip, imagining what could happen before you snap back to reality. You give him a flirty smile as you drop to your knees in front of him, the huge bulge in his shorts catching your eye.');
    scene.text('You grab the waistband of his shorts and slowly pull them down. You gasp and your eyes widen at the sight of his monstrous cock springing free. He\'s not even fully erect yet and it\'s already as long and thick as your forearm.');
    scene.text('"Oh my god..." you whisper.');
    scene.text('"Like what you see?" he says with a hint of smugness. "I had a white girl who was so shocked that she actually measured it. 28cm once she got me fully hard."');
    scene.text('Still in awe at the size of his massive cock, you start licking the thick tip before wrapping your lips around it and taking it into your mouth.');
    if (((s as any).pcs_throat ?? 0) <= 10) {
      scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 25) {
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
      }
    }
    scene.text('His cock grows even bigger and thicker in your mouth and your jaw is already aching after just a few seconds, so you pop it out of your mouth and smile up at him while jerking him off with both hands.');
    scene.text('"Tired already?" he grins. "You are going to have to do better than that."');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'hj', (-2), 'sub');
    qspCall(s, 'pain', '', 2, 'jaw', 'ache');
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['dorm_bj'] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'hj', (-10), 'sub');
    scene.img('images/shared/sex/blowjob/africanblowjob2.mp4');
    scene.text('You grin and remove your top before taking his massive cock back into your mouth.');
    scene.text('Despite your jaw starting to hurt again, you slurp and gag on his huge shaft while trying to stuff as much of it as you can into your mouth, causing him to groan loudly.');
    scene.text('After a few seconds, your jaw is aching once more and you have to remove his cock again. You smile up at him while jerking his now drool coated dick in your hands, ropes of your saliva running from your mouth to his shaft.');
    scene.text('Settling into a steady rhythm of alternating between sucking, licking and jerking his huge cock, you\'re not sure how long you spend on your knees pleasuring him before he starts grunting.');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('Pulling back so only the head remains in your mouth, you keep sucking until he suddenly pulls out of your mouth and starts jerking his cock.');
    scene.text('You barely have time to close your eyes before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 2, 'jaw', 'ache');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film5.jpg');
    scene.text('You remain on your knees, smiling up at him as blobs of cum drip from your chin and land on your breasts.');
    scene.text('He offers you some wipes to clean yourself before you put your top back on, your jaw still aching.');
    scene.text('"That was fun!" you smile.');
    scene.text('"You are telling me!" he replies as he watches you with a satisfied grin. "I love it when white sluts worship my cock like that."');
    scene.text('"I look forward to next time," he says as he walks you to the door. He firmly pats you on the ass before closing the door behind you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/shared/sex/blowjob/africanblowjob3.mp4');
    scene.text('You bite your lip and give him a flirty smile as you walk over and drop to your knees in front of him.');
    scene.text('Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
    scene.text('"Someone\'s happy to see me..." you giggle.');
    scene.text('You start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth.');
    if (((s as any).pcs_throat ?? 0) <= 10) {
      scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 25) {
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
      }
    }
    scene.text('Your jaw starts aching after a few minutes, so you pop it out of your mouth and smile up at him while jerking him off with both hands.');
    scene.text('"Tired already?" he grins. "You are going to have to do better than that."');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'hj', (-2), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'hj', (-10), 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/africanblowjob2.mp4');
    scene.text('You grin and remove your top before taking his massive cock back into your mouth.');
    scene.text('Despite your jaw starting to hurt again, you slurp and gag on his huge shaft while trying to stuff even more of it into your mouth, causing him to groan loudly.');
    scene.text('After a few seconds, your jaw is aching once more and you have to remove his cock again. You smile up at him while jerking his now drool coated dick in your hands, ropes of your saliva running from your mouth to his shaft.');
    scene.text('Settling into a rhythm of alternating between sucking, licking and jerking his huge cock, you\'re not sure how long you spend on your knees pleasuring him before he starts grunting.');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('Pulling back so only the head remains in your mouth, you keep sucking until he suddenly pulls out of your mouth and starts jerking his cock.');
    scene.text('A few seconds later, spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'jaw', 'ache');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You remain on your knees as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('He offers you some wipes to clean yourself before you pull your top back on, your jaw still aching.');
    scene.text('"That was fun!" you smile.');
    scene.text('"You are telling me!" he replies as he watches you with a satisfied grin. "I love it when white sluts worship my cock like that, but I love coating their faces with my cum even more. You always look like works of art when I am done with you!"');
    scene.text('"I look forward to next time," he says as he walks you to the door. He firmly pats you on the ass before closing the door behind you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThreesomeStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/africanblowjob2.mp4');
  scene.text('You bite your lip and give him a flirty smile as you walk over and drop to your knees in front of him.');
  scene.text('Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
  scene.text('"Someone\'s happy to see me..." you giggle.');
  scene.text('You start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth. Relaxing your throat, you\'re able to take a few inches into your mouth and start sucking.');
  scene.text('"Oh yes! Keep going, slut!" he grunts as you slurp and gag on his huge shaft while trying to stuff even more of it into your mouth.');
  if (((s as any).ErmiasQW ?? 0)?.['lebo_threesome'] === 0) {
    scene.text('You\'re so busy sucking his dick that you don\'t even hear the door opening.');
    scene.text('"Lebogang?!" Ermias exclaims. "What are you doing back so early?"');
    scene.text('You pop Ermias\'s cock out of your mouth and look at the floor as you feel yourself starting to blush.');
    scene.text('"That doesn\'t matter," Lebogang replies. "Mind sharing your... latest conquest?"');
    // TODO-QSP: dynamic text: Ermias looks down at you. "That is up to <<$pcs_nickname>>. Do you want another ...
    scene.text(`Ermias looks down at you. "That is up to ${((s as any).pcs_nickname || '')}. Do you want another big cock to suck on as I fuck your little white pussy?"`);
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A242', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A243', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Something about their attitude puts you off and you don\'t feel like doing this anymore, so you pretend to check your phone.');
    scene.text('"Sorry, but something has just come up and I need to go. I\'ll come back another time," you tell them as you pull your clothes back on.');
    scene.text('"Oh..." Lebogang replies, clearly disappointed.');
    scene.text('Ermias sighs and pulls his shorts back up before he walks you to the door and shows you out.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', goto: ['ermias_events', 'threesome'] },
    ]);
  } else {
    scene.text('After a few seconds, he grins down at you. "Do you want me to call Lebogang back for more fun?"');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You pop his cock out of your mouth and gaze up at him. "No, just the two of us is fine."');
    scene.text('He grins before you take his cock back into your mouth.');
    scene.text('"I did not want to share anyway. I just wanted to be nice to my friend."');
    scene.actions([
      { label: 'Continue', goto: ['ermias_events', 'sex', 'skip_bj'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', goto: ['ermias_events', 'threesome1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThreesome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A242', 5);
  qspCall(s, 'npc_relationship', 'modify', 'A243', 5);
  qspCall(s, 'npcStat', 'A243');
  qspCall(s, 'npcStat', 'A242', 'a');
  scene.img('images/shared/sex/mmf/blackthreesome1.jpg');
  scene.text('You grin up at them. "Sure! That sounds like fun!"');
  scene.text('They both smile as Lebogang walks over and pulls his pants down, exposing his cock. It\'s not as long or as thick as Ermias\'s, but is still pretty big.');
  scene.text('You take it into your mouth and start sucking as you jerk Ermias\'s cock, which is coated in your drool. After a few minutes, you switch around and start sucking Ermias\'s dick again.');
  scene.text('You continue switching between the two until Ermias stops you. "Enough of this. Time to fuck your little white pussy, slut!"');
  qspCall(s, 'arousal', 'bj', ((s as any).npcID1 ?? 0), 5);
  qspCall(s, 'arousal', 'bj', ((s as any).npcID ?? 0), (-5));
  qspCall(s, 'arousal', 'hj', ((s as any).npcID1 ?? 0), (-5));
  qspCall(s, 'arousal', 'hj', ((s as any).npcID ?? 0), (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', ((s as any).npcID ?? 0), 5);
    qspCall(s, 'arousal', 'bj', ((s as any).npcID1 ?? 0), (-5));
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
    } else {
      if (((s as any).pcs_vag ?? 0) <= 25) {
        qspCall(s, 'pain', '', 3, 'vaginal', 'stretch');
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mmf/blackthreesome2.jpg');
    scene.text('He pulls you up and bends you over on the couch as Lebogang sits next to you. You start sucking his dick as you feel Ermias push his massive cock into your pussy, causing you to let out a muffled moan as it stretches you wide.');
    scene.text('"I love white girl pussy!" he grunts as he starts thrusting, forcing you down further on Lebogang\'s dick and causing you to choke slightly.');
    scene.text('You spend the next few minutes gagging and slurping on Lebogang\'s dick as Ermias eagerly fucks your pussy, both men grunting and moaning before Lebogang speaks up.');
    scene.text('"Let me have a turn with that pussy now."');
    scene.actions([
      { label: 'Swap', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', ((s as any).npcID1 ?? 0), 5);
    qspCall(s, 'arousal', 'bj', ((s as any).npcID ?? 0), (-5));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mmf/blackthreesome3.jpg');
    scene.text('You pop Lebogang\'s cock out of your mouth as you feel Ermias pulling out of you. Lebogang then pulls you into his lap and guides his cock into your pussy.');
    scene.text('He starts pawing at your ass as you ride him. Ermias, meanwhile, walks around and shoves his cock into your mouth, giving you a taste of your pussy juices as you start sucking it.');
    scene.text('"You weren\'t wrong about this pussy!" Lebogang grunts as he forces you down further on your dick before lifting you up and slamming you back down. At the same time, Ermias pushes his cock into your throat, causing you to gag before he withdraws, only to force it back in seconds later.');
    scene.text('They continue doing this until they both start grunting and saying that they\'re close.');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('Lebogang quickly lifts you off of his dick before Ermias drags you over to the middle of the room and forces you down on your knees.');
    scene.text('The two of them then stand on either side of you as they jerk their cocks. You happily smile up at them before sticking your tongue out for them.');
    scene.text('Lebogang cums first, aiming his cock at your open mouth before spurts of cum splatter over your tongue and chin.');
    scene.text('Ermias follows soon after; while some of it lands on your tongue, he plasters your face with spurt after spurt of thick cum, covering you entirely.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['lebo_threesome'] = 1;
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You swallow the cum in your mouth, but remain on your knees as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Ermias offers you some wipes to clean yourself as he and Lebogang converse in their native language, but it\'s plainly obvious that they\'re talking about you.');
    scene.text('"That was fun!" you smile as you wipe the last of the cum from your face and start getting dressed.');
    scene.text('"You are telling me!" Ermias replies as he watches you with a satisfied grin. "I love it when white girls worship my cock like that, but I love coating their faces with my cum even more. You always look like works of art when I am done!"');
    scene.text('Lebogang nods. "Yeah, you were a pretty good fuck."');
    scene.text('"I look forward to next time," Ermias says as he walks you to the door. He firmly pats you on the ass before closing the door behind you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterThreesome1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A243');
  qspCall(s, 'npcStat', 'A242', 'a');
  scene.img('images/shared/sex/mmf/blackthreesome1.jpg');
  scene.text('You pop Ermias\'s cock out of your mouth and grin up at him.');
  scene.text('"Sure! That sounds like fun!"');
  scene.text('He smiles and grabs his phone. A few minutes later, Lebogang enters the room and grins as he walks over and pulls his pants down, exposing his cock.');
  scene.text('You take it into your mouth and start sucking as you jerk Ermias\'s cock, which is coated in your drool. After a few minutes, you switch around and start sucking Ermias\'s dick again.');
  scene.text('You continue switching between the two until Ermias stops you. "Enough of this. Time to fuck your little white pussy, slut."');
  qspCall(s, 'arousal', 'bj', ((s as any).npcID1 ?? 0), 5);
  qspCall(s, 'arousal', 'bj', ((s as any).npcID ?? 0), (-5));
  qspCall(s, 'arousal', 'hj', ((s as any).npcID1 ?? 0), (-5));
  qspCall(s, 'arousal', 'hj', ((s as any).npcID ?? 0), (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', ((s as any).npcID ?? 0), 5);
    qspCall(s, 'arousal', 'bj', ((s as any).npcID1 ?? 0), (-5));
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
    } else {
      if (((s as any).pcs_vag ?? 0) <= 25) {
        qspCall(s, 'pain', '', 3, 'vaginal', 'stretch');
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mmf/blackthreesome2.jpg');
    scene.text('He pulls you up and bends you over on the couch as Lebogang sits next to you. You start sucking his dick as you feel Ermias push his massive cock into your pussy, causing you to let out a muffled moan as it stretches you wide.');
    scene.text('"I love white girl pussy!" he grunts as he starts thrusting, forcing you down further on Lebogang\'s dick and causing you to choke slightly.');
    scene.text('You spend the next few minutes gagging and slurping on Lebogang\'s dick as Ermias eagerly fucks your pussy, both men grunting and moaning before Lebogang speaks up.');
    scene.text('"Let me have a turn with that pussy now."');
    scene.actions([
      { label: 'Swap', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', ((s as any).npcID1 ?? 0), 5);
    qspCall(s, 'arousal', 'bj', ((s as any).npcID ?? 0), (-5));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/mmf/blackthreesome3.jpg');
    scene.text('You pop Lebogang\'s cock out of your mouth as you feel Ermias pulling out of you. Lebogang then pulls you into his lap and guides his cock into your pussy.');
    scene.text('He starts pawing at your ass as you ride him. Ermias, meanwhile, walks around and shoves his cock into your mouth, giving you a taste of your pussy juices as you start sucking it.');
    scene.text('Lebogang forces you down further on your dick before lifting you up and slamming you back down. At the same time, Ermias pushes his cock into your throat, causing you to gag before he withdraws, only to force it back in seconds later.');
    scene.text('They continue doing this until they both start grunting and saying that they\'re close.');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial41.jpg');
    scene.text('Lebogang quickly lifts you off of his dick before Ermias drags you over to the middle of the room and forces you down on your knees.');
    scene.text('The two of them then stand on either side of you as they jerk their cocks. You happily smile up at them before sticking your tongue out for them.');
    scene.text('Lebogang cums first, aiming his cock at your open mouth before spurts of cum splatter over your tongue and chin.');
    scene.text('Ermias follows soon after; while some of it lands on your tongue, he plasters your face with spurt after spurt of thick cum, covering you entirely.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You swallow the cum in your mouth, but remain on your knees as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Ermias offers you some wipes to clean yourself as he and Lebogang converse in their native language, but it\'s plainly obvious that they\'re talking about you.');
    scene.text('"I had fun boys, but I need to get going," you smile as you wipe the last of the cum from your face and start getting dressed.');
    scene.text('"Fucking you felt just as good as last time," Lebogang replies. "You have a nice tight pussy."');
    scene.text('"Not when I am done fucking it!" Ermias says with a grin. "I look forward to next time," he adds as he walks you to the door.');
    scene.text('He firmly pats you on the ass before closing the door behind you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterFilmedStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('"Is it okay if I can film you this time? Not for anything bad. I just want something I can watch when you are not here," he grins.');
  scene.text('"You\'re going to fuck with me that nice big cock of yours, but you want something to jerk off to later?" you smirk.');
  scene.text('"Something like that," he replies with a laugh. "So is that a yes or no, bunny?"');
  if (((s as any).tits ?? 0) >= 4) {
    scene.actions([
      { label: 'Agree', goto: ['ermias_events', 'filmed_titfuck'] },
    ]);
  } else {
    scene.actions([
      { label: 'Agree', goto: ['ermias_events', 'filmed_blowjob'] },
    ]);
  }
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('"Sorry, but I don\'t feel comfortable doing that," you reply.');
    scene.text('"Of course. Sorry for offending you," he says. "Did you want to have some fun without the camera then?"');
    scene.actions([
      { label: 'Get on your knees', goto: ['ermias_events', 'sex'] },
      { label: 'Apologize and leave', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A243', (-2));
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"Sorry, but I\'m just going to go..." you reply.');
    scene.text('"Of course," he says before showing you to the door.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFilmedBlowjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 5);
  qspCall(s, 'npcStat', 'A243');
  scene.img('images/characters/city/university/boy/ermias/sex/film1.jpg');
  scene.text('You bite your lip and give him a flirty smile as you strip down. "Sure... That sounds like fun."');
  scene.text('You then walk over and drop to your knees in front of him as he pulls out his phone and starts filming you. Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
  scene.text('"Someone\'s happy to see me..." you giggle before you gaze up at his phone while posing next to his cock.');
  scene.text('He grins down at you as you start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth.');
  if (((s as any).pcs_throat ?? 0) <= 10) {
    scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
    scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth, well aware that you\'re being filmed.');
  } else {
    if (((s as any).pcs_throat ?? 0) <= 25) {
      scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 35) {
        scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
      } else {
        scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
        scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
      }
    }
  }
  scene.text('Your jaw starts aching after a few minutes, so you pop it out of your mouth and smile up at him while jerking him off with both hands.');
  scene.text('"Tired already?" he grins. "You are going to have to do better than that."');
  qspCall(s, 'arousal', 'bj', 2, 'sub');
  qspCall(s, 'arousal', 'hj', (-2), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'hj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film2.jpg');
    scene.text('You grin and seductively lead Ermias over to his bed, having him lie on his back before you crawl between his legs and take his massive cock back into your mouth.');
    scene.text('Despite your jaw starting to hurt again, you slurp and gag on his huge shaft while trying to stuff even more of it into your mouth, causing him to groan loudly.');
    scene.text('After a few seconds, your jaw is aching once more and you have to remove his cock again. You smile up at him while jerking his now drool coated dick in your hands, ropes of your saliva running from your mouth to his shaft.');
    scene.text('Settling into a rhythm of alternating between sucking, licking and jerking his huge cock, all while trying your best to look as sexy as you can for his camera.');
    scene.text('"Time to fuck your little white pussy now, bunny," he grins as you come up for air once more.');
    scene.actions([
      { label: 'Get on all fours', goto: ['ermias_events', 'filmed_sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFilmedTitfuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A243', 5);
  qspCall(s, 'npcStat', 'A243');
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('You bite your lip and give him a flirty smile as you strip down. "Sure... That sounds like fun."');
  scene.text('You\'re about to drop to your knees when he stops you. "There is... something I want to do first."');
  scene.text('"Oh?" you ask with a curious gaze. "And what\'s that?"');
  scene.text('"I have wanted to fuck your nice big tits ever since I laid my eyes on them. Now seems like a good time."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'titjob', 3);
    qspCall(s, 'arousal', 'breasts', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film6.mp4');
    scene.text('You ponder it for a few seconds before you decide. "Okay, that sounds like fun, but only if I get to suck it afterwards."');
    scene.text('"Deal!" he says and pulls his shorts down as you lie back on his bed.');
    scene.text('Before he joins you, he grabs a bottle from a drawer and squirts some of the liquid inside onto your breasts before he records himself massaging it in, making them slick and shiny.');
    scene.text('Once he\'s done, he slides his massive cock between your oiled breasts. You tease the camera a little by jiggling your breasts before squeezing them together and letting him grind between them.');
    scene.text('The room is then filled with the wet squishing sound of Ermias\' cock sliding between your slick breasts as you smile up at his phone.');
    scene.text('"Dream come true..." he whispers before he slides his cock out from between your breasts and smiles down at you. "Ready to suck it now, bunny?"');
    scene.text('You just bite your lip and nod in response while teasing the camera again by jiggling your breasts.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film2.jpg');
    scene.text('He flops down on his back next to you and films you as you seductively crawl between his legs before taking his massive cock into your mouth.');
    if (((s as any).pcs_throat ?? 0) <= 10) {
      scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth, well aware that you\'re being filmed.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 25) {
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
      }
    }
    scene.text('Your jaw starts aching after a few minutes, so you pop it out of your mouth and smile up at him while jerking him off with both hands.');
    scene.text('"Time to fuck your little white pussy now, bunny," he grins.');
    scene.actions([
      { label: 'Get on all fours', goto: ['ermias_events', 'filmed_sex'] },
    ]);
  } },
    ]);
  } },
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film2.jpg');
    scene.text('"Maybe I can just suck your dick instead?" you reply.');
    scene.text('He looks a little disappointed, but nods. "Okay bunny. Come here then."');
    scene.text('He flops down on his back next to you and films you as you seductively crawl between his legs before taking his massive cock into your mouth.');
    if (((s as any).pcs_throat ?? 0) <= 10) {
      scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
      scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth, well aware that you\'re being filmed.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 25) {
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
      } else {
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth, well aware that you\'re being filmed.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
      }
    }
    scene.text('Your jaw starts aching after a few minutes, so you pop it out of your mouth and smile up at him while jerking him off with both hands.');
    scene.text('"Time to fuck your little white pussy now, bunny," he grins.');
    scene.actions([
      { label: 'Get on all fours', goto: ['ermias_events', 'filmed_sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFilmedSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('You\'re about to get into position when a thought suddenly enters your head...');
  if (((s as any).pcs_ass ?? 0) > 10) {
    scene.actions([
      { label: 'Ask if he wants to fuck your ass instead', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'lube', 'sub');
    qspCall(s, 'pain', '', 4, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/mis/africananalmis3.mp4');
    scene.text('"If you\'re really looking for something to watch later, then why not fuck my tight little ass with that big cock of yours?" you ask teasingly while biting your lip.');
    scene.text('He grins and smacks your ass before telling you to get on your back. You obediently lie back on his bed and let him film you spreading your ass cheeks, exposing your asshole to his camera before he grabs a bottle of lube from a drawer on the desk and applies some to his cock.');
    scene.text('He then pulls over a chair and balances his phone on it so it\'s facing you before he moves in and massages some lube into your asshole. You instinctively tense up when you feel the thick head of his cock pressing against it, but slowly relax and grunt a little when it suddenly pops into you.');
    scene.text('"Oh <i>damn</i>, is this nice and tight!" he groans as he slowly starts fucking your ass, a mix of pain and pleasure shooting through you with each thrust.');
    scene.text('You feel your ass gradually loosen as Ermias picks up his pace, grunting and groaning as he thrusts as deep as he can before he suddenly pulls out, your stretched and gaping asshole left feeling empty.');
    scene.text('"You seem loose enough now, bunny," he grunts. "Turn over so I can give your ass a good pounding."');
    scene.actions([
      { label: 'Flip over', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'lube', 'sub');
    qspCall(s, 'pain', '', 2, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/africandoggy1.mp4');
    scene.text('You sit up and roll over onto your stomach before Ermias pulls you over so you\'re bent over the edge of the bed with your ass in the air.');
    scene.text('You grunt when his cock stretches your ass once more, but he doesn\'t hold back this time. Lifting his leg to get better access, he starts ramming his cock almost balls deep up your ass, his balls slapping against your pussy with each powerful thrust.');
    scene.text('You want to rub your clit to add some pleasure, but he pins your arms to the bed and all you can do is grunt and groan as he pounds your asshole.');
    scene.actions([
      { label: 'Anal creampie', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'A243', 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/analcreampie/doggy_drip2.mp4');
    scene.text('After a few minutes, the pain is about to become unbearable when he thrusts hard and your ass is suddenly flooded with spurt after spurt of thick, warm cum.');
    scene.text('When he finally finishes, he thrusts one final time before pulling out. You then spread your ass as a thick blob of cum loudly spurts out of your stretched asshole, followed by several more.');
    scene.text('"Such a dirty little slut," he pants before he smacks you on the ass. "Good bunny."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).cumspclnt = 3;
    qspCall(s, 'cum_cleanup', '');
    (s as any).agape = 3;
    qspCall(s, 'arousal', 'end');
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['filmed'] = 1;
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['filmed_anal'] = 1;
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing through your ass.');
    scene.text('"That was fun, bunny," he replies as he watches you with a satisfied grin. "I love fucking a white girl in the ass, but I loved it even more since you let me film me doing it."');
    scene.text('"You promise to keep it private?" you ask as you finish getting dressed. "I don\'t want to hear anyone on campus talking about it."');
    scene.text('"Nobody will know," he replies with a smile as he walks you to the door. "It will be our little secret."');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him fuck your pussy', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film3.jpg');
    scene.text('You turn around and get on all fours, wiggling your ass for him as he grabs a bottle of lube from a drawer on the desk and applies some to his cock before he moves in behind you.');
    scene.text('You glance back and spread your ass, exposing your assshole to the camera before you feel him grinding the thick tip of his cock against your slit and he slowly slides it inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      scene.text('You gasp loudly and wince in pain as it stretches your pussy wide.');
      scene.text('"Fuck, oh <i>FUCK!</i>" you cry out as you glance back and realize that you\'re taking barely half of his monstrous cock inside you.');
      scene.text('"Your little white pussy is <i>tight<i>!" he grunts before he slowly starts fucking you at his current depth.');
      scene.text('The pain dulls and eventually gives way to pleasure as you moan softly with each thrust of his cock.');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        scene.text('You gasp as he pushes deep and stretches you to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance back and see that he still has a few inches left to insert.');
        scene.text('"Damn, your little white pussy feels good!" he grunts as he starts thrusting, pushing himself deeper.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust.');
      } else {
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"Damn, your little white pussy feels good!" he grunts as he starts thrusting.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust.');
      }
    }
    scene.text('During one of his thrusts, his cock slips out of you and slides up between your ass cheeks, slick with your pussy juices.');
    scene.actions([
      { label: 'Get on your back', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film5.jpg');
    scene.text('"Want to fuck me missionary this time?" you ask teasingly as you wiggle your ass at him before flopping down on your back and spreading your legs.');
    scene.text('He grins and quickly moves into position, grinding the thick tip of his slick cock against your wet slit before he slowly slides it back inside you.');
    if (((s as any).pcs_vag ?? 0) < 20) {
      scene.text('You gasp loudly and wince in pain as it once again stretches your pussy to the point that you feel like he might tear you in two.');
      scene.text('"Fuck, oh <i>FUCK!</i>" you cry out as you glance down and see that barely half of his monstrous cock is inside you.');
      scene.text('"I will go slow for you again," he grunts before he slowly starts fucking you at his current depth.');
      scene.text('The pain dulls and gives way to pleasure as you moan softly with each thrust of his cock. You don\'t know how long passes before your inner walls suddenly clamp down around his massive cock as you orgasm.');
      scene.text('He gives you a small breather before he continues fucking you.');
    } else {
      if (((s as any).pcs_vag ?? 0) >= 20  &&  ((s as any).pcs_vag ?? 0) < 25) {
        scene.text('You gasp as he pushes deeper this time and stretches you even further, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that he still has a few inches left to insert.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting, pushing himself deeper.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, his massive cock stretching your pussy with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and your inner walls suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('He gives you a small breather before he continues fucking you.');
      } else {
        scene.text('You moan loudly as he pushes deep and you feel him bottom out inside you again, stretching your pussy wide.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"Your little white pussy feels just as good as last time!" he grunts as he starts thrusting.');
        scene.text('Your mind becomes fuzzy as you\'re overwhelmed with pleasure, the thick head of his massive cock pressing against your cervix with each thrust. You don\'t know how long passes before you suddenly feel an orgasm approaching, but you let him know by almost screaming out that he should continue fucking you just like that.');
        scene.text('He does just that and you suddenly clamp down around his massive cock, your vision blurring as your body starts convulsing in orgasm.');
        scene.text('He gives you a small breather before he continues fucking you even harder, the bed squeaking beneath you with each thrust as you moan loudly.');
      }
    }
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
    scene.text('He fucks you for a few more minutes before he grunts and thrusts deep.');
    scene.text('"Almost there myself, but I want you to be a good bunny and ride my cock first," he says as he lies back on the bed and makes room for you between his legs.');
    scene.actions([
      { label: 'Straddle him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/film4.mp4');
    scene.text('You seductively crawl over and back your ass up to him before grinding yourself against his thick, slick shaft.');
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('You feel his hand roaming over your ass. "Damn, is that one fine looking white ass!"');
      scene.text('You then see him reaching over for something before you suddenly feel a cold liquid running down your ass before Ermias massages it in.');
      scene.text('"This oil makes your sexy ass look even better, bunny!" he says before he spanks you. "Time to go for a ride now."');
      scene.text('You lift yourself up and lower yourself down, his slick cock easily sliding into your wet pussy before you start riding him.');
      if (((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
        scene.text('After starting out slow, you take him a little deeper with each thrust unil he\'s as deep as you can comfortably go.');
        scene.text('"I think you can take a bit more, bunny," he says between grunts of pleasure.');
        scene.text('Your pussy does feel a little looser from the constant stretching, so you brace yourself on your hands before taking him deeper, a sharp pain suddenly pulsing through your abdomen as his cock stretches you further and abruptly collides with your cervix.');
        scene.text('You take it slow, allowing your pussy to get used to his cock before you pick up your pace, your oiled ass jiggling and loudly slapping against his thighs as you eventually take him balls deep into your pussy.');
        scene.text('"That does feel good!" Ermias groans. "Good job, bunny. Ride that cock!"');
      } else {
        scene.text('Your pussy is already feeling a little loose from the constant stretching, so you brace yourself on your hands before you start slamming yourself down on his slick cock, your oiled ass jiggling and loudly slapping against his thighs as you take him balls deep into your pussy.');
        scene.text('"Damn, what a fucking view!" he says between grunts of pleasure. "I think I might be in heaven! Ride that fucking cock, bunny!"');
      }
    } else {
      if (((s as any).pcs_vag ?? 0) < 25) {
        qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
        scene.text('After starting out slow, you take him a little deeper with each thrust unil he\'s as deep as you can comfortably go.');
        scene.text('"I think you can take a bit more, bunny," he says between grunts of pleasure.');
        scene.text('Your pussy does feel a little looser from the constant stretching, so you brace yourself on your hands before taking him deeper, a sharp pain suddenly pulsing through your abdomen as his cock stretches you further and abruptly collides with your cervix.');
        scene.text('You take it slow, allowing your pussy to get used to his cock before you pick up your pace, eventually taking him balls deep into your pussy.');
        scene.text('"That does feel good!" Ermias groans. "Good job, bunny. Ride that cock!"');
      } else {
        scene.text('Your pussy is already feeling a little loose from the constant stretching, so you brace yourself on your hands before you start slamming yourself down on his slick cock, taking him balls deep into your pussy.');
        scene.text('"Damn, what a fucking view!" he says between grunts of pleasure. "I think I might be in heaven! Ride that fucking cock, bunny!"');
      }
    }
    scene.text('You continue passionately riding him until he suddenly pushes you off of his cock, your pussy suddenly feeling very empty as he tells you to get down on your knees.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'A243', 1);
    scene.img('images/characters/city/university/boy/ermias/sex/film6.jpg');
    scene.text('You quickly slide off the bed and get down on your knees as Ermias starts jerking his cock, barely having time to close your eyes before spurt after spurt of thick, warm cum splatters over your face, covering you entirely.');
    scene.text('Once he finally finishes, you suck on the tip of his cock and are rewarded with a final spurt of cum on your tongue.');
    scene.text('You make a show of playing with the cum plastering your face before Ermias turns his phone around and films himself smiling before he stops recording and puts his phone away.');
    scene.text('"Okay bunny, that is enough."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 3, 'cervix', 'ache');
    ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['filmed'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You sit on your knees panting as thick blobs of cum drip from your chin and land on your breasts.');
    scene.text('Once you recover, he offers you some wipes to clean yourself before you slowly get dressed, your legs weak as you feel a dull pain pulsing in your abdomen.');
    scene.text('"That was fun, bunny," he replies as he watches you with a satisfied grin. "I love covering your cute little face with my cum, but I loved it even more since you let me film me doing it this time."');
    scene.text('"You promise to keep it private?" you ask as you finish getting dressed. "I don\'t want to hear anyone on campus talking about it."');
    scene.text('"Nobody will know," he replies with a smile as he walks you to the door. "It will be our little secret."');
    scene.text('"Until next time, bunny," he says and firmly pats you on the ass before closing the door.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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

function enterThroatFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/africanblowjob6.mp4');
  scene.text('Ermias sits on the edge of his bed and you seductively crawl over to him, obediently licking the length of his shaft before taking it into your mouth.');
  scene.text('He moans in pleasure as you take it as deep as you can before start bobbing your head and sucking.');
  scene.text('After a few seconds, he suddenly places his hand on the back of your head and pushes you down.');
  if (((s as any).pcs_throat ?? 0) > 35) {
    scene.text('Your lack of gag reflex means that his massive cock slides down your throat rather easily, causing him to grunt loudly in pleasure as his thick shaft twitches in pleasure.');
    scene.text('You effortlessly hold his cock in your throat, gazing up at him to see equal parts bewilderment and joy on his face.');
    scene.text('He then grabs you by the hair and roughly pulls you off of his cock. "What a sluttly little bunny whore. So eager to please..."');
    scene.text('Seemingly satisfied, he lets you go back to sucking his dick at a more reasonable depth.');
  } else {
    scene.text('You gag as his thick shaft slides down your throat, but he holds you in place for a few seconds before he lets you come up for air.');
    scene.text('"It seems like little bunny here needs more practice sucking black cock," he grins as you gasp for breath. "Do not worry. I will let you practice on me."');
    scene.text('He doesn\'t say anything else and lets you go back to sucking his dick at a more reasonable depth.');
  }
  scene.text('You don\'t know how long this lasts before he pulls you off of his cock again.');
  scene.text('"Good girl," he says. "Now suck my balls like a good little slut."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his balls', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/ball_licking.mp4');
    scene.text('You wipe your chin before you obediently do as he commands, jerking him off while licking and sucking on his balls, rolling them around in your mouth as you gaze up at him.');
    scene.text('He grins down at you approvingly. "Good girl. Keep going."');
    scene.text('After a few more minutes of this, he motions for you to stop as he stands up and turns to face the bed.');
    scene.text('"I am going to fuck your throat properly now, and you are going to be a good little white slut and take all of my big black cock down your slutty throat. Understand?"');
    scene.text('You just nod your head before he grabs you by the hair.');
    scene.actions([
      { label: 'Deepthroat him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A243', 1);
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/ermias/sex/facefuck.mp4');
    scene.text('You barely have time to open your mouth before he forces his cock inside.');
    scene.text('Placing his foot on the bed for leverage, he then thrusts forwards, ramming his massive cock down your throat.');
    if (((s as any).pcs_throat ?? 0) > 35) {
      if (((s as any).ErmiasQW ?? 0)?.['throatfuck'] === 0) {
        scene.text('You relax your well trained throat and the thick head of his cock easily slides down, followed by his equally thick shaft.');
        scene.text('"Oh god, <i>yes</i>!" he moans. "Take my cock, you little white slut!"');
        scene.text('He thrusts deeper, but your lack of gag reflex causes barely any reaction.');
        if ((!((s as any).pcs_makeup ?? 0))) {
          scene.text('Your makeup, however, is another story. It starts running down your face, all but ruined.');
        }
      } else {
        scene.text('You grab onto the back of his legs and pull yourself forwards, allowing the thick shaft of his cock to slide down your well trained throat.');
        scene.text('"Eager to choke on my big black cock again, are we?" he chuckles. "Go on then, you little white slut. Take it!"');
        scene.text('He thrusts deep, but just like last time, your lack of gag reflex causes barely any reaction.');
        if ((!((s as any).pcs_makeup ?? 0))) {
          scene.text('Your makeup, however, is another story. It starts running down your face, all but ruined.');
        }
      }
      scene.text('You lose track of how much time passes as he vigourously fucks your throat, but your jaw is starting to ache and you think you\'re in danger of choking on the drool collecting in your mouth when he suddenly starts grunting.');
    } else {
      if (((s as any).ErmiasQW ?? 0)?.['throatfuck'] === 0) {
        scene.text('There\'s a bit of resistance as it slides into your throat, but you manage to take it.');
        scene.text('"Take it deeper, you little white slut!" he groans as he grabs the back of your head.');
        if ((!((s as any).pcs_makeup ?? 0))) {
          scene.text('You feel your makeup start running down your cheeks as you gag on his cock.');
        }
      } else {
        scene.text('Much like last time, there\'s resistance as his massive cock slides into your throat, but he holds you in place and forces you to take it.');
        scene.text('"Just like that, slut!" he grunts. Choke on my big black cock!"');
        if ((!((s as any).pcs_makeup ?? 0))) {
          scene.text('You feel your makeup start running down your cheeks as you gag on his cock.');
        }
      }
      scene.text('You don\'t know how long passes, forced to choke and gag on his massive cock as he vigourously fucks your throat. You think you might actually pass out when he suddenly starts grunting.');
    }
    scene.text('"Going to cum in your slutty throat, bunny!" he says before he pulls his cock out just a little and you feel spurts of thick warm cum shooting into your throat as he twitches in your mouth.');
    scene.text('You start instinctively gulping it down to avoid choking, but it keeps coming for a few more seconds before he finally stops and pulls out, causing a mix of cum and drool to spill out of your mouth and start dribbling down your chin as you gasp for air.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'pain', '', 4, 'throat', 'ache');
    qspCall(s, 'pain', '', 3, 'jaw', 'ache');
    (s as any).pcs_makeup = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
    scene.text('You feel a slight ache in your throat and jaw as you sit on your knees in front of Ermias, panting for breath with tears and snot running down your face and drool dripping from your chin as his equally drool covered cock hangs in front of you.');
    if (((s as any).ErmiasQW ?? 0)?.['throatfuck'] === 0) {
      ((s as any).ErmiasQW = (s as any).ErmiasQW ?? {})['throatfuck'] = 1;
      scene.text('Ermias sighs loudly. "Oh god, that felt even better than I thought it would! I cannot wait to do it again, bunny!"');
      scene.text('You happily grin up at him as you wipe your chin. "I can\'t wait!"');
      scene.text('He smiles before offering you some wipes to clean your face. Once you\'re dressed, he walks you to the door and sends you on your way with a firm pat on the ass.');
      scene.actions([
        { label: 'Continue', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    } else {
      scene.text('Ermias sighs happily. "You never fail to disappoint me, bunny. That was one hell of a throat fucking! The others need to get in line and have a turn with you!"');
      scene.text('You don\'t say anything in reply to his comment before he offers you some wipes to clean your face. Once you\'re dressed, he walks you to the door and sends you on your way with a firm pat on the ass.');
      scene.text('"Until next time, bunny."');
      scene.actions([
        { label: 'Continue', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    }
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
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'first_time_sex':
      enterFirstTimeSex(s, scene);
      break;
    case 'visit':
      enterVisit(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'threesome_start':
      enterThreesomeStart(s, scene);
      break;
    case 'threesome':
      enterThreesome(s, scene);
      break;
    case 'threesome1':
      enterThreesome1(s, scene);
      break;
    case 'filmed_start':
      enterFilmedStart(s, scene);
      break;
    case 'filmed_blowjob':
      enterFilmedBlowjob(s, scene);
      break;
    case 'filmed_titfuck':
      enterFilmedTitfuck(s, scene);
      break;
    case 'filmed_sex':
      enterFilmedSex(s, scene);
      break;
    case 'throat_fuck':
      enterThroatFuck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ermias_events: LocationDef = {
  name: 'ermias_events',
  title: 'Ermias\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
