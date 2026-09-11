import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).pcs_dom ?? 0) > 20) {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/undressdom_bjtease.mp4');
      if (((s as any).MartinPussyLick ?? 0) === 1) {
        scene.text('After Martin has pleased you so diligently, it\'s only fair that you do the same for him.');
      } else {
        scene.text('Teasing Martin was fun, but rather than being a merciless cock tease, you\'d like him to see you as a generous sex goddess, or at least a girl who isn\'t afraid to put her mouth where the money shot comes from (or however that saying goes).');
        scene.text('Feeling Martin\'s eyes on your more or less naked body, you get up and move up to him, swaying your hips as you go. He is about as manly as they come, but there is no doubt right now that you are the one in control of this situation. The passionate kiss you give Martin only emphasizes that power, another tease on top of all the ones he already had to endure. But his patience will be rewarded, you\'ll make sure of that.');
      }
      // TODO-QSP: dynamic text: You undo his fly as you kiss him, liberating his <<dick>>cm <<$dick_girth>> cock...
      scene.text(`You undo his fly as you kiss him, liberating his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock, rock-hard from the show you put on for him. With a wicked smile, you get down on your knees. He seems even bigger now that you're face to face with him, and you're only just getting to know him. You give its tips a few measured licks to gauge Martin's reaction, closely observing his face.`);
      scene.text('Martin wears a mask of strained stoicism - he has caught on and seems to have no intention of letting you monopolize the control.');
      // TODO-QSP: $OpenInnerThought + 'If that''s how you want to play it…' + $CloseInnerThought
      // TODO-QSP: dynamic text: You close your eyes and take the head inside your mouth and slowly pull it out a...
      scene.text(`You close your eyes and take the head inside your mouth and slowly pull it out again, paying special attention that your ${((s as any).pc_descWordy ?? 0)?.['lips']} lips massage every spot of it; and to top off your performance, you give a soft lascivious moan, just loud enough to sound involuntary.`);
      scene.text('This time, when you look up to him, you see that Martin has dropped all pretense of equilibrium. If you hadn\'t shown him that you were in charge right now, you\'re sure he would have already grabbed your head and started fucking your mouth.');
      // TODO-QSP: dynamic text: "Come on. Suck it like you mean it, <<$pcs_firstname>>," he growls instead.
      scene.text(`"Come on. Suck it like you mean it, ${((s as any).pcs_firstname ?? 0)}," he growls instead.`);
    } else {
      if (((s as any).MartinConvinceBJ ?? 0) === 1) {
        (s as any).pic_rand = Math.floor(Math.random() * 2) + 1;
        scene.img(`images/locations/city/industrial/bar/sex/bar/martin/blowjob/martinconvincebj${((s as any).pic_rand ?? 0)}.jpg`);
        scene.text('Honestly, you are tired of talking, of subtle hints, of waiting for Martin to notice what you\'re getting at. You want him, plain and simple, and you are confident and just slutty enough to chose the easy way to get him.');
        // TODO-QSP: dynamic text: Without another, you take a step back and bare your <<$pc_desc['breast']>> breas...
        scene.text(`Without another, you take a step back and bare your ${((s as any).pc_desc ?? 0)?.['breast']} breasts to the bartender. Ignoring the sounds he makes, you immediately take the next step and reveal your ${((s as any).pc_desc ?? 0)?.['pubes']} pussy as well before you as much as take a glance at him.`);
        scene.text('The look of utter amazement he gives you is priceless, but you are not done yet, not in the slightest.');
        if (((s as any).pic_rand ?? 0) === 1) {
          scene.text('Before he can recover from that first blow, you are already kneeling in front of him, undoing his pants.');
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>," Martin begins, but as you release his hardening <<dick>>cm...
          scene.text(`"${((s as any).pcs_firstname ?? 0)}," Martin begins, but as you release his hardening ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock from its prison, you shoot a short glance up at him and see that his resistance is barely deserving of the name.`);
        } else {
          scene.text('Before he can recover from that first blow, you have already pushed him back to sit on a stool as you bend over his zipper.');
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>," Martin begins, but as you release his hardening <<dick>>cm...
          scene.text(`"${((s as any).pcs_firstname ?? 0)}," Martin begins, but as you release his hardening ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock from its prison, you doubt that he's actually going to resist you when he's only an inch away from your mouth.`);
        }
        // TODO-QSP: dynamic text: He says your name again, more urgent, but whatever he intended to say next turns...
        scene.text(`He says your name again, more urgent, but whatever he intended to say next turns into a groan as the tip of your ${((s as any).pc_desc ?? 0)?.['tongue']} tongue meets the tip of his dick for the first time and enthusiastically explores it.`);
        scene.text('Whatever thoughts or doubts he might have had didn\'t survive that first contact, that much is clear. The longer you play with his dick, the more he relaxes his body and hardens between your lips. He\'s given himself up to your licks and kisses, to your perfect little torture, and you doubt he\'ll be able to go back to keeping his distance after you are done with him…');
      } else {
        scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/dressdom_bjtease.mp4');
        scene.text('Sure, you could talk to Martin, explore this strange relationship on an intellectual level and all that, but if you\'re honest with yourself, you\'d rather suck his dick right now, so why pretend otherwise? You\'ll have plenty of time to talk another day.');
        // TODO-QSP: dynamic text: You give Martin a lingering kiss, wiping any conscious thought from his mind, th...
        scene.text(`You give Martin a lingering kiss, wiping any conscious thought from his mind, then slowly get down on your knees. Every man knows what that means, no matter where they were born. You look up at Martin, smiling seductively as you're opening his fly and freeing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick from its textile prison.`);
        scene.text('Taking his cock into your hand, you can feel the heat emanating from it, can see it growing to its full size before your eyes. It\'s a wondrous sight… but not so much so that it would make you forget what you intended to do.');
        scene.text('The key is to tease before you please: You lick the tip, kiss it, take a little of it inside your mouth, then most of it… but you do so delicately and quickly, doing barely more than brushing against his cock with your lips and retreating immediately, only to start all over again.');
        scene.text('At the end of each \'cycle\', you look up at him, gauging his reaction. It\'s a torture alright, but judging by his closed eyes and low groans, he would gladly submit himself to it any day.');
      }
    }
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    // TODO-QSP: else !}
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/undresssub_bjtease.mp4');
      if (((s as any).MartinPussyLick ?? 0) === 1) {
        scene.text('After Martin has pleased you so diligently, it\'s only fair that you do the same for him.');
      } else {
        scene.text('Teasing Martin was fun, but rather than being a merciless cock tease, you\'d like him to see you as a generous sex goddess, or at least a girl who isn\'t afraid to put her mouth where the money shot comes from (or however that saying goes).');
        scene.text('Feeling Martin\'s eyes on your more or less naked body, you get up and move up to him, swaying your hips as you go. The strange thing is how the situation changes as you cross that short distance: Out of his reach, you were the undisputed queen of this bar and master of his destiny - but now, a few steps closer, you seem to have crossed a mystical barrier into his domain, and in it, you are subject to his will.');
      }
      scene.text('The kiss you give him is demure, compared to your performance mere seconds ago - it is his passion that heats it up and cements his reign. Sex goddess or not, you are his to take now.');
      scene.text('And when Martin pushes you down, the thought of resistance doesn\'t even cross your mind.');
      // TODO-QSP: dynamic text: You undo his fly, liberating his <<dick>>cm <<$dick_girth>> cock, rock-hard from...
      scene.text(`You undo his fly, liberating his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock, rock-hard from the show you put on for him. You feel drawn to it, mesmerized by his display of manliness, but strangely enough, the hand you feel at the back of your head seems to hold you back rather than push you down.`);
      scene.text('He wants you to take it slowly, tease him a little bit more… or has he sensed your impatience and is it really him that\'s teasing <b>you</b>?');
      // TODO-QSP: dynamic text: Whichever it is, you submit, grasping his cock at its base and sticking out your...
      scene.text(`Whichever it is, you submit, grasping his cock at its base and sticking out your ${((s as any).pc_desc ?? 0)?.['tongue']} tongue, licking around the head of his dick like pleasing Martin was your only concern in life.`);
      // TODO-QSP: dynamic text: How long you lose yourself in this task, how long he withstands the temptation o...
      scene.text(`How long you lose yourself in this task, how long he withstands the temptation of fucking your mouth you don't know. What you <b>do</b> know is that, suddenly, his grip on your ${((s as any).pc_desc ?? 0)?.['hair length']} ${((s as any).pcs_haircolor ?? 0)} hair tightens.`);
      // TODO-QSP: dynamic text: "Go on. Suck it like you mean it, <<$pcs_firstname>>," he commands.
      scene.text(`"Go on. Suck it like you mean it, ${((s as any).pcs_firstname ?? 0)}," he commands.`);
    } else {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/blowjob/dresssub_bjtease.mp4');
      scene.text('Sure, you and Martin could talk and explore this strange relationship on an intellectual level and all that, but if you\'re honest with yourself, you\'d rather suck his dick right now, and the look in Martin\'s eyes tells you that he feels the same way.');
      scene.text('You approach Martin for a \'chaste little kiss\' that quickly ends up in a chaste little French kissing and groping, but after only a few seconds of that, you can feel his hand on your shoulder, pushing you down on your knees. And you know exactly what he\'s trying to tell you.');
      // TODO-QSP: dynamic text: You look up at Martin, smiling devotedly as you're opening his fly and freeing h...
      scene.text(`You look up at Martin, smiling devotedly as you're opening his fly and freeing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick from its textile prison. You could feel in charge if it wasn't for his hand at the back of your head, it's weight reassuring in a way but leaving no doubt as to who is giving the orders.`);
      scene.text('Taking his cock into your hand, you can feel the heat emanating from it, can see it growing to its full size before your eyes. It\'s a wondrous sight… but not so much so that it would make you forget what Martin wants you to do.');
      // TODO-QSP: dynamic text: Sensing no pressure from Martin, you conclude that he wants you to surprise and ...
      scene.text(`Sensing no pressure from Martin, you conclude that he wants you to surprise and tease him, so rather than crudely plunging him into your ${((s as any).pc_desc ?? 0)?.['throat']} throat, you take it slow, give his cock lingering strokes and tasting the underside of the tip, then teasingly moving the your tongue around the head.`);
      scene.text('You look up at Martin and find him watching you intently, a shiver running through him when your eyes meet - it must be turning him on immensely to have a girl submissively look up at him while she\'s licking his cock.');
    }
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).cycle ?? 0) === 0  &&  ((s as any).anal ?? 0) > 0) {
      scene.actions([
        { label: 'Let Martin fuck your ass (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
        { label: 'Ride Martin with your ass (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
      ]);
    } else {
      scene.actions([
        { label: 'Lie down for him (On your back)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'missionary'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
        { label: 'Bend over (From behind)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'doggystyle'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
        { label: 'Lie on your side (Sideways)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'sideways'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
        { label: 'Tell Martin you wanna ride him (Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
        { label: 'Tell Martin you wanna ride him (<b>Reverse</b> Cowgirl)', handler: (st: GameState) => {
    // TODO-QSP: $martinpos = 'rev_cowgirl'
  }, goto: ['MartinSex2', 'MartinSexPrep'] },
      ]);
    }
    scene.actions([
      { label: 'No more teasing - Blow him', goto: ['MartinSex3', 'MartinBlowjob'] },
    ]);
  }
  scene.build();
}

export const MartinSex3: LocationDef = {
  name: 'MartinSex3',
  title: 'After Martin has pleased you so diligently, it\'s only fair t',
  region: 'other',
  description: ['After Martin has pleased you so diligently, it\'s only fair that you do the same for him.'],
  enter: enter,
};
