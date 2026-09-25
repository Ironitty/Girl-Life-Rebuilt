import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  (s as any).stallionQ = 4;
  scene.text('You enter the men\'s restroom. It appears empty. You move into a stall and sit down. As you relieve yourself, you hear chuckling in the next stall.');
  scene.text(`After a second, you hear a strange man's voice. "${((s as any).pcs_nickname ?? '')}. My ${((s as any).pcs_nickname ?? '')}. Show me more of that cute vagina of yours."`);
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Confront the strange man', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Confront the strange man', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    scene.text('You jump out of your stall and move to open the other one, but it opens before you reach it. Out of it comes a naked middle aged man.');
    scene.text(`"I've been watching you, ${((st as any).pcs_nickname ?? '')} ${((st as any).pcs_lastname ?? '')}. You think it's a coincidence you are here? I've been planning things out. Preparing.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Run away', handler: (st: GameState) => {
    scene.text('You quickly sort yourself out and get out of the stall. You try the bathroom door. It\'s locked. There is no handle, and the lock is just a keyhole.');
    scene.text('"It\'s no use. You are trapped," The strange man says.');
    scene.text('A naked middle aged man exits the other stall and walks towards you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFight(s: GameState, scene: SceneBuilder): void {
  scene.text('The strange man laughs. "You think I\'m a pushover? I\'ve trained in Soo Bahk Do and Krav Maga. Fighting me is futile. Give up now."');
  scene.actions([
    { label: 'Give up', goto: ['stallion', 'rape'] },
    { label: 'Fight', handler: (st: GameState) => {
    (st as any).nameV = 'Naked Man';
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'stallion');
    qspGoto(st, 'fight', 'start');
  } },
  ]);
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/vag.jpg');
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  scene.text('The man pushes you down, and you fall on your ass. He advances towards you, grabs a hold of your clothes and rips them open. He falls on top of you. You feel his hot breath against your face as he ruthlessly grabs your arms. You feel his penis poking you in the leg.');
  scene.text(`"So you know what's coming next, don't you my little ${((s as any).pcs_nickname ?? '')}?"`);
  if (((s as any).pcs_horny ?? 0) < 30) {
    scene.text('You feel his cock stab you in your unprepared vagina, not even the slightest slowed down by the lack of lubrication. It\'s rough and raw, pulling at your skin and pressing against your sensitive flesh painfully. You can\'t help but cry out.');
  } else {
    if (((s as any).pcs_horny ?? 0) < 50) {
      scene.text('You feel his cock stab you in the vagina. It\'s not very well lubricated, and it rubs painfully against your sensitive flesh as it penetrates you.');
    } else {
      if (((s as any).pcs_horny ?? 0) < 70) {
        scene.text('You feel his cock stab you in the vagina. It slides into your lubricated entryway, penetrating you.');
      } else {
        scene.text('You feel his hard cock push against your wet vagina, easily entering you.');
      }
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('It brings tears to your eyes as he painfully rips your hymen, taking your virginity.');
  }
  qspCall(s, 'arousal', 'vaginal', 30, 'rough', 'sub');
  qspCall(s, 'stat', '');
  scene.text('You feel his hot breath against your ear as he continues to thrust into your body. "You know what they call me? Stallion. They call me that because when I ejaculate into a bitch, she ends up pregnant. I\'ve already knocked up eleven girls. You\'re gonna be number twelve."');
  (s as any).stallionQ = 5;
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (!((s as any).broodcurse ?? 0))) {
    (s as any).broodcurse = 1;
    if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
      scene.text('You feel a tingling in your body. You are pretty sure it is something Stallion has done to you.');
    } else {
      if (((s as any).pcs_magik ?? 0) < 3) {
        scene.text(`"Is that magic I feel in you, ${((s as any).pcs_nickname ?? '')}? It's not going to protect you. I have some magic of my own."`);
        scene.text('You feel a tingling in your body as he does something to you.');
      } else {
        if (((s as any).pcs_magik ?? 0) < 7) {
          scene.text(`"Don't think I don't feel the magic in you, ${((s as any).pcs_nickname ?? '')}. It's not going to protect you. I have some magic of my own."`);
          scene.text('You feel a tingling in your body as he works some fertility magic upon you.');
        } else {
          scene.text(`"Your magic is strong, ${((s as any).pcs_nickname ?? '')}, but it is not going to protect you. Mine is much stronger."`);
          scene.text('You feel a tingling in your body. He places a powerful enchantment on you, increasing your fertility and binding your life force to the fruit of your womb. You realize with horror that he has practically guaranteed all sexual encounters will result in pregnancy in the future. Furthermore, your life is now tied to your womb. An abortion will result in your death.');
        }
      }
    }
    scene.actions([
      { label: 'What have you done to me?', handler: (st: GameState) => {
    scene.text(`"I have given you a gift, sweet ${((st as any).pcs_nickname ?? '')}. I have turned you into a broodmare," he replies as he continues to repeatedly thrust into you.`);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Beg for mercy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Beg for mercy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    if (((st as any).kid ?? 0) <= 0  &&  ((st as any).age ?? 0) < 18) {
      scene.text('You beg and plead with him to not impregnate you, informing him that you are too young to be a mother.');
    } else {
      if (((st as any).money ?? 0) < 1000  &&  ((st as any).age ?? 0) > 18) {
        scene.text('You beg and plead with him to not impregnate you, informing him that you cannot afford to be a mother.');
      } else {
        if (((st as any).broodcurse ?? 0) === 1) {
          scene.text('You beg and plead for Stallion to lift the curse and release you.');
        } else {
          scene.text('You beg and plead with him to not impregnate you, informing him that you are not ready to be a mother.');
        }
      }
    }
    if ((!((st as any).broodcurse ?? 0))) {
      scene.text('Stallion smiles as you plead for him not to cum inside you.');
      scene.text('"I\'m sure you\'ll manage to bear my child just fine," he says as he continues to thrust into you.');
    } else {
      scene.text('Stallion smiles. "I\'m not lifting the curse. You should accept your fate. It will be easier on you in the long run."');
    }
    scene.actions([
      { label: 'Continue', goto: ['stallion', 'finish'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'skill_base', 'stren', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Struggle', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Struggle', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'skill_base', 'stren', 'resist', 'medium');
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.text('You attempt to throw him off you, but he is able to resist your efforts.');
    scene.text('"Tightening up like that makes it feel so good," he says as he continues to thrust into you.');
    scene.actions([
      { label: 'Continue', goto: ['stallion', 'finish'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t respond', handler: (st: GameState) => {
    scene.text('You turn your head away from him, willing your mind to drift away from this unpleasant experience as he uses your body for his own ends.');
    scene.actions([
      { label: 'Continue', goto: ['stallion', 'finish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/body/cum/creampie/cumpussy3.jpg');
  scene.text('Stallion moans, "I\'m cumming!"');
  scene.text('He twitches on top of you, and you feel him fill you with his seed.');
  scene.text(`"Give birth to a cute baby for me, ${((s as any).pcs_nickname ?? '')}. But don't you dare kill it. You won't survive it long. Ta ta!" He says, pulling out.`);
  scene.actions([
    { label: 'Continue', goto: ['stallion', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('You notice a syringe sticking out of your thigh. You start to feel woozy. As you black out, your last thought is, where did he even keep it?');
  (s as any).sexspecpot = 60000;
  (s as any).sexvolume = 70;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Awaken', goto: ['stallion', 'awaken'] },
  ]);
  scene.build();
}

function enterAwaken(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 160;
  scene.text('You come to several hours later lying on the cold bathroom floor. Your clothing is folded neatly in a pile nearby.');
  if (((s as any).bag ?? 0) > 0) {
    scene.text('Your handbag is sitting on top of the clothing. You check it for missing items.');
    if (((s as any).money ?? 0) > 0) {
      scene.text(`You have ${qspFunc(s, 'money', 'format_balance', 'cash')}.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
      scene.text('All your condoms are missing.');
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
      scene.text('All your birth control pills are missing.');
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = 0;
      (s as any).tabletkioddk = 0;
    }
  }
  if ((!((s as any).broodcurse ?? 0))) {
    (s as any).temp = 'you\'ll get another visit from me';
  } else {
    (s as any).temp = 'my magic will kill you';
  }
  if (((s as any).stallionQ ?? 0) === 4) {
    ((s as any).temp = (s as any).temp ?? {})[1] = 'I am called Stallion, and you have become my victim. I am called Stallion because I impregnate those whom I target. Today, that was you. ';
    (s as any).stallionQ = 5;
  }
  scene.text(`There is a note next to your clothing. '${(((s as any).temp ?? 0)?.[1] ?? '')}You were a pretty good fuck. I'll be keeping my eye on you. I look forward to see you growing large with my baby. If you go get an abortion to stop it, ${((s as any).temp ?? '')}. Go to the cops if you want, you'll never stop me. The door is unlocked, you can leave now. -Stallion`);
  (s as any).temp = undefined;
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'boyStat', 'A117');
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 0;
  (s as any).sexcontra = 0;
  (s as any).protect = 0;
  (s as any).dick = 14;
  (s as any).silavag = 2;
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'fight':
      enterFight(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'awaken':
      enterAwaken(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stallion: LocationDef = {
  name: 'stallion',
  title: 'You enter the men\'s restroom. It appears empty. You move int',
  region: 'other',
  enter: enter,
};
