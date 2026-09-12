import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sex/kwlake2/kwlake1.jpg');
  scene.text('While you\'re walking along the beach, Kat notices a man sitting by himself.');
  scene.text('"Let\'s tease him for a while!" Kat suggests, pointing at the guy.');
  scene.actions([
    { label: '"Nah, let\'s keep walking"', goto: ['Nudelake', ''] },
    { label: '"Alright!"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A219', 'adore');
    qspCall(s, 'npcStat', 'A219');
    scene.img('images/locations/city/residential/lake/sex/kwlake2/kwlake2.jpg');
    scene.text('You smile at Kat\'s mysterious look and follow her lead, sitting down near him. Kat immediately pulls you in for a kiss, and slowly rubs your wet slit while the two of you make out.');
    scene.text('The man watches the two of you intently, and you notice a bulge forming in his groin.');
    // TODO-QSP: dynamic text: "Look at him!" Kat moans into your mouth between kisses. "Don't you want him to ...
    scene.text(`"Look at him!" Kat moans into your mouth between kisses. "Don't you want him to fuck you, ${((s as any).pcs_nickname ?? 0)}? Because I know I do…"`);
    qspCall(s, 'arousal', 'kiss', (-5), 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'foreplay', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'That\'s enough! Leave before this gets out of hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'That\'s enough! Leave before this gets out of hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['Nudelake', ''] },
      ]);
    }
    scene.actions([
      { label: 'Invite the man to join you', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Unknown guy', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npc_relationship', 'modify', 'A219', 'adore');
    scene.img('images/locations/city/residential/lake/sex/kwlake2/kwlake3.jpg');
    scene.text('When you nod, Kat smiles at you and whispers: "Ask him over, come on!"');
    scene.text('She begins to lick your pussy in plain view of the man, while she keeps encouraging you to invite him.');
    scene.text('You beckon the man to come closer. He quickly jumps up and runs over to you, his penis bobbing up and down as he goes.');
    scene.text('He eagerly thrusts his hips towards your face as he kneels next to you, and you close your lips around his erect penis without a second thought.');
    scene.text('Kat coos with delight, and rewards you by licking your snatch even more intently.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'bj', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
    scene.img('images/locations/city/residential/lake/sex/kwlake2/kwlake4.jpg');
    scene.text('After a few minutes the man pulls away from you. He makes you lie down on the sand, so he can fuck you.');
    scene.text('Kat is all for the idea and encourages you to do what he says. Meanwhile the man helps you down and brings his cock to your snatch, penetrating you with one fierce thrust.');
    scene.text('He begins to fuck you rather roughly, but Kat gives you no opportunity to complain and immediately grinds her wet snatch against your mouth.');
    scene.text('You lick her obediently, and it doesn\'t take long for her to moan loudly and grind her hips against your mouth, barely giving you a chance to breathe. She\'s orgasming!');
    scene.text('You keep licking her cunt and lap up her juices, while this stranger pounds your pussy enthusiastically.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/kwlake2/kwlake5.jpg');
    scene.text('When the man is close to his orgasm, he pulls his cock out of you and stands up. As he guides his dick to your mouth, Kat immediately takes his place between your legs and caresses your clit with her tongue.');
    scene.text('You can barely hold yourself from smothering Kat as you ride her face, getting very close to your own orgasm as well. At that moment, the man demands your full attention again shoves his cock back into your mouth. Mere seconds later, he fills your mouth with his sperm while Kat licks you to an amazing orgasm.');
    scene.text('After you recover, you kiss Kat on the mouth, sharing the stranger\'s sperm with her.');
    scene.text('She gives you another light kiss on the cheek when you\'re finished dressing again, and whispers: "It\'s fun, having a friend who enjoys sex as much as I do…"');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'Unknown guy');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish your walk', goto: ['Nudelake', ''] },
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

export const Kwlake2: LocationDef = {
  name: 'Kwlake2',
  title: 'While you\'re walking along the beach, Kat notices a man sitt',
  region: 'other',
  description: ['While you\'re walking along the beach, Kat notices a man sitting by himself.'],
  enter: enter,
};
