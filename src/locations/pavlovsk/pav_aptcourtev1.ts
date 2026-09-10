import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
  scene.text('You follow her inside, but not seeing her, you stop and listen a moment.');
  scene.text('She shrugs a little. "Not much. You?" The two of you briefly chat before she interrupts you. "Look, I need to get going. See you around." She then heads upstairs, obviously not in the mood to talk.');
  scene.actions([
    { label: 'Leave', goto: ['pav_complex', 'start'] },
    { label: 'Go look for her', handler: (st: GameState) => {
    scene.text('You follow her inside, but not seeing her, you start to head upstairs. You then hear her below you. "Hey, you following me?"');
    scene.text('You\'re not sure what to say. "Sort of. I was just curious what you were up to."');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60  &&  ((s as any).npc_had_sex ?? 0)?.['A144']  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('She gives you a small amused smile. "So you\'re stalking me, huh? Look I know I\'m hot, so I can hardly blame you."');
      scene.text('You shake your head. "No! I was just curious… Never mind." Before you can turn away, she suddenly grabs your hand.');
      scene.text('"Relax, I was just yanking your chain. I was just going to sit here on the stairs if you want to join me?" she asks. You nod in return and then the two of you walk down to the flight of stairs that go down to the basement where the boiler room and other stuff is, where you are unlikely to be disturbed, as you go about half way down the final flight of stairs she stops and takes a seat on the stairs.');
      scene.actions([
        { label: 'Leave', goto: ['pav_complex', 'start'] },
        { label: 'Join her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/kiss.jpg');
    scene.text('You sit next to her and the two of you start chatting about what\'s been going on lately in your lives. Just as you were telling her about something your sister did, she leaned over and kissed you. You\'re briefly taken aback.');
    qspCall(s, 'willpower', 'sex', 'self', 'medium');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
      qspCall(s, 'willpower', 'pay', 'self');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
      scene.text('You pull back and break the kiss. "Uh sorry, I don\'t want to make out or anything."');
      scene.text('She shrugs slightly and the two of you start talking again, but things seem a bit awkward. Before long, you both stop saying much before she says she needs to get going and heads out, leaving you behind.');
      scene.actions([
        { label: 'Stop the kiss [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
        { label: 'Leave', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Stop the kiss', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } },
        { label: 'Get lost in the moment', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/kiss.jpg');
    scene.text('You return the kiss and soon your hands are roaming all over each other\'s bodies. Before long, she starts pulling her clothes off and encouraging you to do the same.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify', 'A144', (-1));
      qspCall(s, 'willpower', 'pay', 'resist');
      qspCall(s, 'arousal', 'end');
      scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/hey.jpg');
      scene.text('You break the kiss and pull back from her. "Uh sorry, but this is too public."');
      scene.text('She rolls her eyes slightly. "Yeah, whatever. I should get going." She gets up and straightens her clothes before she heads upstairs, leaving you behind.');
      scene.actions([
        { label: 'This is going too far [+$func(\'willpower\', \'get_willcost_string\'...]' }, // TODO-QSP: empty action body
        { label: 'Leave', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'This is going too far', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } },
        { label: 'Undress', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/undress.jpg');
    scene.text('You start peeling your clothes off as she removes her clothes. Before either of you are fully naked, she grabs you by the hair and pulls your face over to her pussy.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/eather.jpg');
    scene.text('Your tongue darts out and licks at her clit before working its way down her pussy, which is soaking wet already. She moans loudly in pleasure while grinding her pussy against your face, leaving your face wet with her juices. Several minutes go by before she reaches over and pulls a small dildo out of her purse. You take it from her hand before turning her around and bending her over.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Dildo her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/dildoher.jpg');
    scene.text('You slide the dildo in her soaking wet pussy, eliciting even louder moans from her as she rocks back against your hand, taking as much of the dildo into her as she can. Several minute go by before she finally begins to shake all over and orgasms. You dildo fuck her pussy through her orgasm and once it passes, she steps away and takes the dildo from you. "Your turn."');
    qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dildoed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/getdildo.jpg');
    scene.text('She kneels down in front of you and spreads your legs, encouraging you to place one foot on the railing. She then leans her face between your legs and starts to lap at your clit and tongue fuck your pussy.');
    scene.text('Once she has you good and wet, she slides the dildo inside you and starts fucking you. Soft and slow at first, but goes faster and harder the louder you moan.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'exhibitionism');
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/complex/finish.jpg');
    scene.text('Several minutes pass before she encourages you to turn around as she keeps plunging the dildo into your increasingly wet pussy.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'lesbian', 'exhibitionism');
    scene.text('You\'re suddenly interrupted by the sound of an old woman\'s voice, who sounds like she is near the top of the stairs. "Oh my god, is someone being attacked? Are you alright dear? What\'s going on?"');
    scene.text('You and Anushka both stop and quickly get dressed. You\'re just pulling on the last of your clothes when an old woman comes round the landing looking at the two of you. She looks confused at first before she scoffs in disgust and heads back upstairs.');
    scene.text('You both burst out laughing before heading up yourself. Just as you reach the next landing, Anushka stops. "Look, I need to go do something. Talk later?" Without waiting for a reply, she takes the steps a couple at a time as she hurries up them, still giggling at what happened.');
    scene.text('Never a dull moment you suppose, but you have other things you can do too. With that, you head back out to the courtyard.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
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
  } },
    { label: 'Leave', goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

export const pav_aptcourtev1: LocationDef = {
  name: 'pav_aptcourtev1',
  title: 'You follow her inside, but not seeing her, you stop and list',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You follow her inside, but not seeing her, you stop and listen a moment.'],
  enter: enter,
};
