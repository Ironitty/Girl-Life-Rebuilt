import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'ermias_events', 'first_visit');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ermias\'s Dorm Room</b></center>');
  qspCall(s, 'npcStat', 'A243');
  (s as any).ErmiasQW['first_visit'] = 1;
  scene.img('images/locations/city/island/university/dorm/gosharoom/gosha_room.jpg');
  scene.text('The room is pretty standard looking other than the numerous posters of naked or scantily dressed white women on the walls. Two beds are over by the windows with a large desk between, while a couch sits against the bottom of one of the beds across from the door.');
  scene.text('"I hope you are comfortable here when we... get down to business..." he grins.');
  scene.text('You give him a puzzled stare and he smirks.');
  scene.text('"You did not think I asked you to come here just to chat? I plan on fucking as much white girl pussy as I can while I am here, yours included."');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
        scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        if (((s as any).pcs_throat ?? 0) <= 35) {
          scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
        } else {
          scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
          scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
        }
        scene.text('His cock grows even bigger and thicker in your mouth and your jaw is already aching after just a few seconds, so you pop it out of your mouth and smile up at him, drool dripping from your chin as you jerk him off with both hands.');
        scene.text('"Good girl. Now tell me how you want me to fuck your little white pussy, slut," he grins.');
        scene.text('You bite your lip and give him a flirty smile as you walk over and drop to your knees in front of him.');
        scene.text('Grabbing the waistband of his shorts, you slowly pull them down and expose his monstrous cock.');
        scene.text('"Someone\'s happy to see me..." you giggle.');
        scene.text('You start licking the thick tip before grabbing the shaft in your hand and taking it into your mouth.');
        if (((s as any).pcs_throat ?? 0) <= 10) {
          scene.text('Your inexperience at blowjobs means you\'re barely able to take more than the tip as you start sucking.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff his huge shaft into your mouth.');
        } else {
          scene.text('You relax your throat, but are only able to take a few inches of his huge shaft into your mouth before you start sucking.');
          scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
          if (((s as any).pcs_throat ?? 0) <= 35) {
            scene.text('You feel your throat loosen up a little, allowing him to slide a little deeper into your mouth before your gag reflex kicks in.');
            scene.text('"Oh yes! Keep going, slut!" he grunts as you obediently try to stuff more of his huge shaft into your mouth.');
          } else {
            scene.text('Your lack of gag reflex means you\'re able to take the thick tip down your throat, but his shaft is so long that you\'re taking only half of it into your mouth as you suck on it.');
            scene.text('Even he seems impressed by how much of his enormous cock that you\'re swallowing. "Remind me to fuck your throat one day, slut!"');
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
    (s as any).npc_had_sex['A243'] = 1;
    scene.img('images/shared/sex/vag/miss/africanmis1.mp4');
    scene.text('"Will you fuck me missionary style?" you ask.');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      scene.text('He gropes and squeezes your large breasts in his hands.');
      scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
        scene.text('He gropes and firmly spanks your ass with his hands.');
        scene.text('"I love a white girl with a big ass," he grins.');
      } else {
        scene.text('He looks over your naked body, but doesn\'t say anything.');
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
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
        scene.text('You gasp as he pushes further and stretches you to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that he still has a few inches left to insert.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    (s as any).npc_had_sex['A243'] = 1;
    scene.img('images/shared/sex/vag/doggy/africandoggy3.mp4');
    scene.text('"Will you fuck me doggystyle?" you ask.');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      scene.text('He gropes and squeezes your large breasts in his hands.');
      scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
        scene.text('He gropes and firmly spanks your ass with his hands.');
        scene.text('"I love a little white girl with a big ass," he grins.');
      } else {
        scene.text('He looks over your naked body, but doesn\'t say anything.');
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
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
        qspCall(s, 'arousal', 'vaginal', 5, 'lube', 'sub');
        qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
        qspCall(s, 'stat', '');
        scene.text('You gasp as he pushes further and stretches you to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance back and see that he still has a few inches left to insert.');
        scene.text('"White girl pussy is the best!" he grunts as he starts thrusting, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
    }
    scene.actions([
      { label: 'You want to ride him', handler: (st: GameState) => {
    (s as any).npc_had_sex['A243'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/africancowgirl3.mp4');
    scene.text('You slyly smile at him. "I want to ride you."');
    scene.text('He grins before he pulls you to your feet and swiftly has you undressed.');
    if (((s as any).tits ?? 0) >= 4  &&  qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
      scene.text('He squeezes one of your large breasts in his hand while squeezing and smacking your ass with the other.');
      scene.text('"Nice big tits <i>and</i> a great ass," he grins. "Rare to find both on the same girl."');
    } else {
      scene.text('He gropes and squeezes your large breasts in his hands.');
      scene.text('"Nice big tits like these are one of my favorite things about white girls," he grins.');
      if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
        scene.text('He gropes and firmly spanks your ass with his hands.');
        scene.text('"I love a white girl with a big ass," he grins.');
      } else {
        scene.text('He looks over your naked body, but doesn\'t say anything.');
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
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
        scene.text('You gasp as it stretches your pussy to what feels like the limit, causing a tinge of pain to shoot through your abdomen.');
        scene.text('"Oh <i>fuck</i>!" you cry out as you glance down and see that you still have a few inches left to go.');
        scene.text('"White girl pussy is the best!" he grunts as he grabs your hips and thrusts upwards, pushing himself deeper and stretching your pussy even further. "Always nice and tight for my big cock."');
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Keep going [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'vaginal', 10, 'lube', 'sub');
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
        scene.text('You moan loudly as you sink down and feel him bottom out inside you, stretching your pussy to what feels like the limit.');
        scene.text('"Fuck, I can feel it in my womb!" you cry out as your inner walls instinctively squeeze around his shaft.');
        scene.text('"White girl pussy is the best!" he grunts as he grabs your hips. "Always nice and tight for my big cock. Rare to find a white girl who can take me so deep, though."');
        scene.text('You start riding him and soon find the perfect pace, moaning loudly as you hammer yourself up and down on his monstrous cock. It stretches and fills your pussy in ways you could never have imagined and you soon feel an orgasm approaching.');
        scene.text('A few seconds later, you slam down on his cock once more and feel your inner walls clamp down around him, your vision going blurry as your whole body shudders in orgasm.');
        scene.text('You take a small breather before continuing. It doesn\'t take long before you recognize the usual grunts and know what awaits...');
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
  } },
    ]);
  } },
        ]);
      }
    }
  }
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
    default:
      enterFirstVisit(s, scene);
      break;
  }
}

export const ermias_events: LocationDef = {
  name: 'ermias_events',
  title: 'Ermias\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['The room is pretty standard looking other than the numerous posters of naked or scantily dressed white women on the walls. Two beds are over by the windows with a large desk between, while a couch sits against the bottom of one of the beds across from the door.'],
  enter: enter,
};
