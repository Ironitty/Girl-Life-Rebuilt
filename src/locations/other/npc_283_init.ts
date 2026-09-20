import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExamInterview(s: GameState, scene: SceneBuilder): void {
  scene.text('You arrive at the ballet school and thread your way through the schools corridors to Rudolph\'s office. You look at your watch and notice you\'re a few minutes early. You look at the carved door in front of you and knock on it.');
  scene.text('“Wait,” a voice pre-emptively commands from a speaker in the wall leaving you to fidget as you wait. A few minutes later the voice comes through on the scratchy speaker. “Enter.”');
  scene.text('You push open the door and enter the richly appointed office. You look around and see Rudolph sitting at his desk with the sunlight casting a halo of light around him. You notice a chair in front of his desk and move towards it to sit down.');
  // TODO-QSP: dynamic text: “I did not give you permission to sit.”, Rudolph says in an icy cold voice witho...
  scene.text(`“I did not give you permission to sit.”, Rudolph says in an icy cold voice without looking up from the document he is reading. “${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, ${((s as any).age || '')} years old, lives in Pavlovsk. Your mother is ${((s as any).npc_firstname ?? 0)?.['A29'] ?? ''} ${((s as any).pcs_lastname || '')} who split from her husband after being caught having affairs. Yet despite being poor you aspired to be a ballerina, and despite all your efforts to get selected you showed a complete lack of commitment or skill.”`);
  scene.text('He finally looks up at you, “You may sit.”');
  scene.text('You sit down unsure what to say, and decide to remain silent. You feel alarmed at how much Rudolph knows about you.');
  scene.text('“Good you know when to stay quiet. Whether that is ignorance or luck remains to be seen.”');
  scene.text('You start to open your mouth in protest but he holds up his hand forestalling anything you were about to say.');
  // TODO-QSP: If $start_type['magic'] ! 'nomagic':
  scene.text('Before you react a net of dazzling light is cast at you binding your arms and legs to the chair sending a deep chill into your bones. “Well, well, well. Who would have thought the stupid bitch who touched Rikudo\'s toy would land in my lap. Now what am I to do with you.”');
  scene.text('You struggle in your bonds but it is futile.');
  scene.text('“Give her to me”, a chilling voice from behind you says. The voices\' tone paralyses you as they seep into your very bones.');
  // TODO-QSP: If func('pcs_has_attr', 'sex_virgin') = 1:
  scene.text('“No, you will leave her alone. I know you like your prey to be virgins but it is too soon to antagonise the council, and you know how much of a pain Reinhold is and it would be far too messy to cover up her rape.”');
  // TODO-QSP: Else
  scene.text('“Leave her alone, she has Reinhold\'s smell all over her. It is too early to antagonise the council. I know you like ravishing young girls but it would cause too many questions at this time. We also don\'t know what kind of power was imbued into that amulet.”');
  // TODO-QSP: End
  scene.text('“Fuck the council Rudolph, they are weak and effeminate, fallen far from the Elder council.”');
  scene.text('“Do not underestimate the Council, even as it is. They still hold a lot of artefacts and power and so far you have failed to acquire the least of them.”, there is an animalistic snarling behind you and you are blinded by a flash of light. ');
  scene.text('“Behave, I don\'t want to report you. You have been useful to me, but do not mistake that for anything else.”, the person behind you is panting as if in pain and unable to speak. You feel a pressure building in the air before it suddenly vanishes.');
  scene.text('“You will suffer for this Rudolph.”, you didn\'t think a voice could carry so much venom and animosity ');
  scene.text('“Be that as it may,” Rudolph ignoring the threat, “You have your tasks and I have mine, now go and leave this girl to me. Oh, and mark me well on this, you will not touch or appear to her beyond this room.”');
  scene.text('“Why?”');
  scene.text('“You do not need to know. There is more to play here than a stupid bitch finding an amulet. You have fought Rikudo before, there is too much to lose.” You hear the door behind you being slammed shut but oddly hushed as if was muffled by distance and then the absence of a presence you can\'t explain. ');
  scene.text('“Now where were we, ah yes. What to do about you, I can\'t have you running around causing more chaos. Not at this time. I suppose I have to keep you under my eye and that means you get to be a ballerina despite my judgement.”, you see him give you a warm smile that does not match his eyes. You shiver despite the binding, “Do not worry my pretty little thing, you will not remember what happens here.”, you look in fear as Rudolph looms above you and then darkness.');
  scene.text('You quickly step across the room to sit in the chair, despite the padding it is disquietingly uncomfortable. You try to find a comfortable sitting position and Rudolph looks up at you.');
  // TODO-QSP: dynamic text: “What are you doing, I told you sit and be quiet.” he snaps at you. You freeze i...
  scene.text(`“What are you doing, I told you sit and be quiet.” he snaps at you. You freeze in position and try to remain calm. “Now ${((s as any).pcs_nickname || '')}, what are we to do with you. You barely scraped a pass, but enough to warrant my time to see why you failed so badly despite your local reputation. If I didn't know your instructor I would have said you slept with them to get a place.”. Rudolph starts to tap the table in a beat you half-recognise and he ignores you whilst he gazes at a document.`);
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Speak up', handler: (st: GameState) => {
    scene.text('“Sir, I…”, Rudolph sharply looks up and glares at you, “Did I give you permission to speak?”. He holds up his hand forestalling any chance you have of rebutting him. “Never mind you can\'t even follow the most basic of instructions. I don\'t see why I should keep wasting my time with such an imbecilic girl.” He slams his hand on to the desk to emphasis the point and you jump at his show of anger.');
    scene.text('“Get out. Now.” He commands, as he steps around the table grabbing your arm to drag you out of the room and slamming the door behind him.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Stay silent', handler: (st: GameState) => {
    scene.text('His fingers continue their beat on the able top. “Good, it seems you do have some brains and discipline. Given the lack of both during your time here I worried you wouldn\'t have that much sense. I will give you another chance, but mark my words you will owe me for this opportunity and I will be watching everything you do. You may speak.”, Rudolph\'s cold authority in his voice sends a shiver down your spine, and you wonder what you will wind up having to pay for this opportunity.');
    scene.text('Rudolph continues to ignore you as his fingers continue its\' beat on the able top. “Good, it seems you do have some brains and discipline. Given the lack of both during your time here I worried you wouldn\'t have that much sense. I will give you another chance, but mark my words you will owe me for this opportunity and I will be watching everything you do. You may speak.”, Rudolph\'s cold authority in his voice sends a shiver down your spine, and you wonder what you will wind up having to pay for this opportunity.');
    scene.text('“What will I owe you sir?”');
    scene.text('“Whatever I decided, and whenever I decide. That is all you need to know.”');
  } },
    { label: 'Buy time to think', handler: (st: GameState) => {
    ((st as any).rudolphqw = (st as any).rudolphqw ?? {})['counter'] = ((st as any).daystart ?? 0) + 7;
    scene.text('“Can I have some time to think on this?”, Rudolph glares at you for a moment and then his expression changes to being more fatherly, “Despite my best judgement I will give you seven days to decide. You will report back to me here to give your choice otherwise I will assume you have chosen to disregard my generous offer. ”');
    scene.text('You can\'t help but notice that his fatherly smile and expression fail to reach his eyes leaving you with an uneasy feeling.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Accept his offer', handler: (st: GameState) => {
    ((st as any).rudolphqw = (st as any).rudolphqw ?? {})['path'] = 1;
    scene.text('You pause for a moment before replying, “I will not prostitute myself to be a ballerina if that\'s what you are asking.”');
    // TODO-QSP: dynamic text: Rudolph glares at you for a moment and then his expression changes to being more...
    scene.text(`Rudolph glares at you for a moment and then his expression changes to being more fatherly, “Do not worry ${((st as any).pcs_nickname || '')}, I will not lay a finger on you. I do not rape my pupils, and all my relationships have been consensual. However I still get to decide what you owe me and how you pay me back. Understand?” Something in his voice feels slightly threatening but you can't see what that could be.`);
    scene.text('You bow your head to look at your feet before deciding. “I agree to your terms Sir.”, You feel the weight of this decision bear down on you.');
    // TODO-QSP: dynamic text: “I am glad you see it my way. You may attend the classes and rehearsals but I wi...
    scene.text(`“I am glad you see it my way. You may attend the classes and rehearsals but I will withhold the privilege to perform at the winter performance.”, you start to speak, “Do not try me ${((st as any).pcs_nickname || '')}, you have already pushed my patience and you are walking on thin ice already. Now leave, I have other matters to attend to and you have wasted too much of my time. Remember I will be watching your training and your actions from now on.” His voice makes it clear that he owns you now as you leave the room with each heavy step.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'exam_interview':
      enterExamInterview(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc_283_init: LocationDef = {
  name: 'npc_283_init',
  title: 'You arrive at the ballet school and thread your way through ',
  region: 'other',
  enter: enter,
};
