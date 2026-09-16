import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['RideDaystart'] = ((s as any).daystart ?? 0) + (Math.floor(Math.random() * 4) + 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
  scene.text('A car suddenly pulls up next to you and a man wearing a suit and hat steps out. "Captain Chernov, Federal Security Service," he says and pulls out his badge.');
  scene.text('"What? Am I under arrest?" you ask in panicked surprise, but he just ignores you and continues.');
  // TODO-QSP: dynamic text: "You are <<$pcs_firstname>> <<$pcs_lastname>>, correct? Please come and sit in m...
  scene.text(`"You are ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, correct? Please come and sit in my car. We need to have a little chat."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Speak with Chernov', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
    scene.text('He opens the back door and motions for you to step inside. You notice he\'s holstering a gun under his jacket and so decide to listen to him. You climb inside and he slides in after you, closing the door behind him. A second man sits silently behind the wheel as Chernov turns to you.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you are a member of the front that was pretending to be...
    scene.text(`"Miss ${((s as any).pcs_lastname || '')}, you are a member of the front that was pretending to be Miss Barlovskaya's dance entourage. These criminal activities are about to be put on hold permanently, with or without your collaboration."`);
    scene.text('You freeze, your body stiff with worry as you wonder what he\'s about to do.');
    scene.text('"Our little talk here is quite important. This investigation will soon be the talk of the town, but I can keep your name out of it."');
    scene.actions([
      { label: 'Protest', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
    scene.text('"Albina didn\'t whore me out!" you protest.');
    scene.text('"This goes far beyond young Miss Barlovskaya," he replies. "All you have to do is give me your testimony stating that you were forced into an illegal prostitution ring. You don\'t have to worry about your friend. We\'ll keep her safe from any consequences."');
    scene.text('He pauses and gives you time to think before continuing.');
    scene.text('"I already have an anonymous source giving me all the evidence I need, but your testimony will still help the case. Your name will be kept secret, of course."');
    if (((s as any).pcs_intel ?? 0) >= 70) {
      scene.actions([
        { label: 'Ask why the Security Service is involved', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
    scene.text('"What\'s the big deal anyway? What\'s so important about all this that the Security Service are involved?" you ask, causing Chernov to raise a brow.');
    scene.text('"You\'re a smart girl, huh? You know that slimeball Boris Barlovskay? He wishes to become the mayor, but we don\'t want the corrupt scumbag running the town in the interests of the criminal syndicates he\'s been associated with over the years. The only problem was that we\'ve never able to prove that he was dirty - until now."');
    // TODO-QSP: dynamic text: He places a hand gently on your shoulder. "We're finally going to put him behind...
    scene.text(`He places a hand gently on your shoulder. "We're finally going to put him behind bars where he belongs, but we could use your help, Miss ${((s as any).pcs_lastname || '')}, however small it seems."`);
    scene.actions([
      { label: 'Write a statement', goto: ['albina_election_events', 'give_statement'] },
      { label: 'Refuse', goto: ['albina_election_events', 'refuse_statement'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Write a statement', goto: ['albina_election_events', 'give_statement'] },
      { label: 'Refuse', goto: ['albina_election_events', 'refuse_statement'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGiveStatement(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Chernov'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
  scene.text('You agree to write a statement and Chernov nods.');
  scene.text('"You\'re a smart girl. Just sign here," he says and hands you a pen and paper. Reading the paper, you see that it has a pre-printed statement on it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/misc/signature.jpg');
    scene.text('You quickly scribble a signature at the bottom and he lets you go without a fuss.');
    // TODO-QSP: dynamic text: "You've really helped us here, Miss <<$pcs_lastname>>. Thank you."
    scene.text(`"You've really helped us here, Miss ${((s as any).pcs_lastname || '')}. Thank you."`);
    scene.text('He motions for you to leave the car and it drives away as soon as you close the door.');
    scene.actions([
      { label: 'Call Albina', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Friends'] = 1;
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['StarletsShutDown'] = 1;
    qspCall(s, 'calendar', 'pack', 'remove', 'starlets');
    (s as any).starlets_missed = 0;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/phone/calling_outdoor.jpg');
    scene.text('You quickly dial Albina\'s number and, in a panic, tell her what happened. She calms you down and asks if you told them anything.');
    scene.text('"I… I did. I told them everything, but they told me that you\'d be left out of it! I didn\'t have a choice, Albina! I\'m sorry!"');
    scene.text('"Oh. Well, thanks for telling me."');
    scene.text('<i>Click.</i> The line goes dead.');
    scene.text('You look down at your phone and see that she hung up. Despite Chernov\'s promise, it feels like you sold Albina out. Yet, just before she hung up, it sounded like she might have been… <i>happy?</i>');
    scene.text('Did she <i>want</i> you to tell Chernov everything? The whole encounter has left you feeling bewildered and confused.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRefuseStatement(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
  scene.text('You\'re reluctant, but Chernov keeps trying.');
  scene.text('"Look, I know you\'re scared right now, but do you really not want to help stop this illegal exploitation of you and your friends? I <i>promise</i> that nothing will happen to Albina."');
  if (((s as any).pcs_intel ?? 0) >= 70) {
    scene.actions([
      { label: 'Why should I give you information?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
    scene.text('"If you already have everything you need, then why do you need my testimony?" you ask.');
    scene.text('"To be honest, we don\'t. Like I said, we\'ve got more than enough, but a statement from you would still help us out and guarantee our success."');
    scene.text('"And what about Albina? Have you questioned her?"');
    scene.text('"We have other arrangements for her," is all he says in reply.');
    scene.actions([
      { label: 'Write a statement', goto: ['albina_election_events', 'give_statement'] },
      { label: 'Refuse again', goto: ['albina_election_events', 'refuse_statement2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Write a statement', goto: ['albina_election_events', 'give_statement'] },
    { label: 'Refuse again', goto: ['albina_election_events', 'refuse_statement2'] },
  ]);
  scene.build();
}

function enterRefuseStatement2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Chernov'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/chernov.jpg');
  scene.text('While a part of you wants to help, you don\'t trust him and refuse.');
  scene.text('He sighs in resignation. "I can\'t force you, but just know that you could have really helped your friend out here."');
  scene.text('He motions for you to get out of the car and it drives away as soon as you close the door.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Call Albina', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Friends'] = 1;
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['StarletsShutDown'] = 1;
    qspCall(s, 'calendar', 'pack', 'remove', 'starlets');
    (s as any).starlets_missed = 0;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/phone/calling_outdoor.jpg');
    scene.text('You quickly dial Albina\'s number and, in a panic, tell her what happened. She calms you down and asks if you told them anything.');
    scene.text('"What?! No! I\'d never sell you out like that!"');
    scene.text('"Oh. Well, thanks for telling me."');
    scene.text('<i>Click.</i> The line goes dead.');
    scene.text('You look down at your phone and see that she hung up. Despite Chernov\'s promise, it feels like you were about to sell Albina out. Yet, just before she hung up, it sounded like she might have been… disappointed?');
    scene.text('Did she <i>want</i> you to tell Chernov? The whole encounter has left you feeling bewildered and confused.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'give_statement':
      enterGiveStatement(s, scene);
      break;
    case 'refuse_statement':
      enterRefuseStatement(s, scene);
      break;
    case 'refuse_statement2':
      enterRefuseStatement2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_election_events: LocationDef = {
  name: 'albina_election_events',
  title: 'A car suddenly pulls up next to you and a man wearing a suit',
  region: 'other',
  enter: enter,
};
