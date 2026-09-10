import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).gopstop = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Police station</b></center>');
  scene.img('images/locations/city/industrial/police/a1.jpg');
  scene.text('The doorbell rings, and you open the door like any other person would. You\'re a bit surprised to see a neatly dressed girl standing in the doorway.');
  // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>!" she says, with a disdainful look in her eyes.
  scene.text(`"Hello, ${((s as any).pcs_nickname ?? 0)}!" she says, with a disdainful look in her eyes.`);
  scene.text('"Uhh… hello. Do I know you?" you ask.');
  scene.text('"No, but I know you", she smiles mysteriously. Then she suddenly snaps a handcuff around your wrist. As she cuffs your other wrist, she laughs: "And I have a feeling you will get to know me soon enough!"');
  scene.text('"Wait, what\'s happening?!" you ask, more intently.');
  scene.text('"The arrest of a fool, is what!" she smirks. Two uniformed men show up behind her, roughly grabbing you by the shoulders. They lead you into a waiting car outside, and the four of you drive to the local police station.');
  scene.text('As she guides you into an office, she laughs: "Here\'s our little criminal!"');
  scene.text('An important looking man looks at you for a second and shrugs: "Nice work. Take care of it yourself, will you? I\'m still working on this other case.');
  scene.text('He exits the office, leaving you alone with her.');
  scene.text('"Time to confess, love," she orders you, pressing some buttons on a video camera. She\'s taping your conversation with her.');
  scene.text('"Confess what!? I didn\'t do anything wrong!" you reply.');
  scene.text('"You\'re an idiot, you know that?" she says calmly. "We know you helped those other criminals rob people in the park. Mobile phones, money… you looted everything you could get your hands on! So very close to your own home, too! How stupid are you!? Confess, or you\'ll only make things worse for yourself! I want names of who helped you rob people, I want to know where you dropped off your stolen goods, and anything else you know about them!"');
  scene.text('With your hands still cuffed in front of you, you can\'t resist whatever she has in mind. You frantically think about your options: you could confess, but your taped confession could very well get you in trouble if they found out you snitched! On the other hand… what the hell is this woman going to do to you!? No one knows you\'re here… they could lock you up, and no one would miss you!');
  scene.text('When you still say nothing, she presses some buttons on the interrogation camera and grabs you by the hair. "Let me give you an impression of what happens if you don\'t confess, you whore! Get down on your knees right now!"');
  qspCall(s, 'willpower', 'crime', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep your mouth shut [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep your mouth shut', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/police/sex/a2.jpg');
    scene.text('"I don\'t know what you\'re talking about", you declare with a stern face, even though it\'s obvious you\'re lying.');
    scene.text('"Then you\'re an idiot. Do you have any idea what happens with pretty girls like you in prison?" she says, and forces you to your knees. "Being some butch chick\'s prison bitch, licking her pussy hole every day? If the guards don\'t get a turn, too…"');
    scene.text('Without any warning, she grabs your hair and forces your face against her groin, rubbing your mouth against her pussy lips repeatedly.');
    scene.text('When she sees you wince, she growls: "You think that\'s bad, bitch? My pussy is clearly clean, and neatly groomed! What do you they\'ll look like in prison? Hairy, dirty, haven\'t been washed in weeks… if you think mine is bad, I washed it a few hours ago!"');
    scene.text('You can\'t object that the picture she\'s painting sounds bad but then again, what would happen if you confess? The prospect of being raped by a dozen Gopniks and then left for dead in a ditch scares you even more!');
    scene.text('"I-I don\'t know what you\'re talking about…" you tell her a bit hesitantly.');
    scene.text('The girl pulls her panties to the side, and then uses her nightstick to pull your head towards her snatch again. "Lick."');
    scene.text('When you hesitate, she uses the baton to lock your mouth against her pussy and hisses: "I said lick, criminal!"');
    scene.text('As you begin to lick, she moans: "Oh yeah! They\'re going to love you in there! Enjoy it, it\'s the last clean pussy your mouth is going to be on! Unless you confess, you\'ll be spending the rest of your life like this! And face it: a bitch like you won\'t last a month…"');
    scene.text('She pulls your head back by your hair again and threatens: "Final chance. Confess, or else."');
    qspCall(s, 'arousal', 'cuni_give', 30, 'lesbian', 'rough', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Police Officer', Math.floor(Math.random() * 11) + 25);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/city/industrial/police/sex/a3.jpg');
    scene.text('When you refuse again, she angrily swoops all the items off the desk. "Take off your clothes, scum", she hisses as she unlocks your cuffs off and threatens to beat you with her baton.');
    scene.text('Once you\'re naked, she cuffs you again and orders you to lie down on the table, undressing as well. After taking her clothes off, she climbs on top of you and sits on your face, forcing you to lick her.');
    scene.text('She smothers you between her thighs, nearly making you suffocate! "If you want to keep breathing, you better learn to get really good with your mouth!" she grins. "Welcome to your new life…"');
    scene.text('After a few minutes of her barely letting you breathe, you hear the door to the office open and close. You want to look up and see who it is, but the girl is still sitting on your face with her full weight.');
    scene.text('Someone\'s raising your legs! A few seconds later, you feel something squeezing against your anus. You manage to struggle your legs free once, but the two of them overpower you and hold you in place.');
    scene.text('Something cold is being squeezed onto your anus, and you feel a slippery finger sliding inside you. Then a second, and a third. Meanwhile, the girl is still grinding her pussy against your face, all the more eager.');
    scene.text('A minute later you feel something bigger being pushed past your sphincter, and you hear a man groan. It must be the police chief from earlier.');
    scene.text('He pays no heed to your discomfort and begins to fuck your ass furiously. You try to struggle, but it\'s useless. The girl tightly grabs your cuffed wrists and presses them against your chest, while the man grabs your ankles firmly. The two of them have complete control over your body.');
    scene.text('"This is only the beginning, scum!" the girl threatens you, when the man pulls out. "I can make sure the inmates have strap-ons to use on you, and give them round-the-clock access to your cell. Is that what you want!?"');
    scene.text('You wince but tell her: "If you do, give them a bigger strap-on than that… I barely felt that one!" A complete lie, and you can barely hide your pain.');
    scene.text('"Bitch!" she cries out. "Send her to prison, now!"');
    scene.text('"Wait, I\'m not done yet", the man says. The two of them force you back down on the desk and he thrusts his cock roughly inside you again, insulted by your comment on his size. He pounds his hips against yours furiously, and finally cums in your ass a few minutes later.');
    scene.text('After he straightens his clothes, he undoes your handcuffs and lets you get dressed again. At that point the girl turns off the camera - it turns out that she let it run the whole time!');
    qspCall(s, 'arousal', 'cuni_give', (-30), 'lesbian', 'rough', 'bound');
    qspCall(s, 'arousal', 'anal', 30, 'rough');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'anus', 'Police Officer');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Be brought to a prison cell', goto: ['kamera', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Confess everything', handler: (st: GameState) => {
    (s as any).gopdeath = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 180;
    (s as any).vsehsdaladay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.text('You nod: "Okay, okay! I\'ll confess, if it gets me out of trouble!"');
    scene.text('The girl gives you a pleased nod and reassures you that you\'ll be fully pardoned, as long as you tell her what she wants to know. Then she presses a few buttons on the camera and begins to ask you questions.');
    scene.text('You answer all of them. How many of them there were, their names, what you did with the stolen goods… you even mention random things you overheard, when you were just chatting with the Gopniks! Anything she might be interested in, anything that might get you out of here!');
    scene.text('You\'re released after your confession, but your days may be numbered. Once the Gopniks find out you ratted them out, who knows what they\'ll do to you…');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the police station', goto: ['city_industrial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const police: LocationDef = {
  name: 'police',
  title: '<center><b>Police station</b></center>',
  region: 'other',
  description: ['The doorbell rings, and you open the door like any other person would. You\'re a bit surprised to see a neatly dressed girl standing in the doorway.'],
  enter: enter,
};
