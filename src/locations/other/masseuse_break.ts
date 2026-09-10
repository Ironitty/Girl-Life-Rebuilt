import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
  if (((s as any).masseuse ?? 0)?.['break'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).salon['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
    (s as any).masseuse['break'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('You\'re taking a break.');
  // TODO-QSP: dynamic text: There's a vending machine in the corner you can buy '+iif(func('money', 'can_aff...
  scene.text('There\'s a vending machine in the corner you can buy \'+iif(func(\'money\', \'can_afford\', 100, \'cash\'), \'<a href="exec:gs \'money\', \'pay\', 100, \'cash\' & gt \'food\', \'snack\'">snacks</a>\', \'snacks\' + $func(\'money\', \'get_cost_string\', 100, \'cash\'))+\' from and a fridge stocked with <a href="exec:gt \'beverage\', \'water\'">bottled water</a> and <a href="exec:gt \'beverage\', \'juice\'">juice</a> for masseuses to enjoy, as well as a <a href="exec:gt \'beverage\', \'coffee\'">coffee machine</a>.');
  if (Math.floor(Math.random() * 2) + 0 === 1) {
    if (((s as any).masseuse ?? 0)?.['meet_lei'] === 0) {
      scene.text('The only other person in here right now is <a href="exec:gt\'masseuse_break\',\'lei_talk\'">a small asian girl</a> taking duck face selfies on her phone.');
    } else {
      scene.text('Looks like <a href="exec:gt\'masseuse_break\',\'lei_talk\'">Lei</a> is also taking a break right now, taking duck face selfies on her phone again.');
    }
  } else {
    scene.text('No one else is here with you.');
  }
  if (((s as any).salon ?? 0)?.['work_minutes'] >= 235) {
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  }
  scene.build();
}

function enterBreakOver(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You head back to your room and buzz Xian.');
  scene.text('"Hey, I\'m done taking my break."');
  scene.text('"Okay, I\'ll tell you when the next client has requested you."');
  scene.actions([
    { label: 'Wait for a client', goto: ['masseuse_work', 'begin'] },
  ]);
  scene.build();
}

function enterLeiTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['meet_lei'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['masseuse_break', 'lei_talk2'] }]);
  }
  (s as any).masseuse['meet_lei'] = 1;
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('You slide around the table to talk to the girl.');
  // TODO-QSP: dynamic text: "Hey, I don't think we've met before," you say. "I'm <<$pcs_firstname>>."
  scene.text(`"Hey, I don't think we've met before," you say. "I'm ${((s as any).pcs_firstname ?? 0)}."`);
  scene.text('She puts down her phone to look at you.');
  scene.text('"I\'m Lei." Despite her looks, she speaks Russian flawlessly without even hint of an accent.');
  scene.actions([
    { label: '"Do you like working here?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"You like working here?" you ask, not sure what else to say.');
    scene.text('"I guess so," she replies. "Though it\'s not like I have a huge choice in the matter. Sort of a family business."');
    scene.text('"What?"');
    scene.text('"Yeah, my mom owns the place. Set up here a couple decades ago."');
    scene.actions([
      { label: '"Your mom set up a brothel?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"Your mom set up a brothel??"');
    scene.text('"Well, yeah. How else was a divorced Chinese immigrant going to make money in St. Petersburg? I mean, sure, she started out as just an \'exotic masseuse\' but you know it goes. One thing leads to another, your hand ends up on some guys\'s cock, next thing you know you\'re jerking him off. Next time he sees you he wants a little more and soon enough the neighborhood knows where to go for exotic poon."');
    scene.text('Her story is interrupted when her phone suddenly starts beeping.');
    scene.text('"Welp, my break time is up. Gotta go back to work. See you around sometime." And with that she gets up and leaves.');
    scene.text('Looking at the clock, you realize maybe it\'s time for you to get back to work too and also stand up.');
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  } },
      { label: '"Wow, that\'s… entrepreneurial…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"Wow, that\'s very… entrepreneurial of her…"');
    scene.text('"Mhmm. Not a bad way to make some money as a divorced Chinese immigrant woman. She did start out as a regular masseuse to be fair, but turns out everybody\'s got that yellow fever and you can charge a lot more for fucking than you can for foreplay. When you\'ve got daughters to feed, you just do what it takes I guess."');
    scene.text('Her story is interrupted when her phone suddenly starts beeping.');
    scene.text('"Welp, my break time is up. Gotta go back to work. See you around sometime." And with that she gets up and leaves.');
    scene.text('Looking at the clock, you realize maybe it\'s time for you to get back to work too and also stand up.');
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLeiTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('"Hey Lei, how\'s it going."');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>."
  scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('"Wanna hang?"');
  scene.text('"Sure."');
  scene.text('You start talking about stuff with her.');
  qspCall(s, 'masseuse_break', 'lei_talk3');
  scene.build();
}

function enterLeiTalk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['lei_fun'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Do anything fun lately?', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', 'lei_fun_talk');
  } },
    ]);
  }
  scene.actions([
    { label: 'Finish your break', goto: ['masseuse_break', 'lei_talk_end'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', 'lei_small_talk');
  } },
    { label: 'Ask about her', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', 'lei_talk_self');
  } },
    { label: 'Talk about her family', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', 'lei_talk_family');
  } },
  ]);
  scene.build();
}

function enterLeiSmallTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  // TODO-QSP: :lei_talk_loop1
  (s as any).masseuse['lei_talk'] = Math.floor(Math.random() * 6) + 1;
  if (((s as any).masseuse ?? 0)?.['lei_talk'] === 1) {
    if (((s as any).masseuse ?? 0)?.['lei_sisters'] < 1) {
      // TODO-QSP: jump 'lei_talk_loop1'
    }
    scene.text('"So you said you\'re a student at the university?"');
    scene.text('"Mhmm."');
    scene.text('"What are you studying?"');
    scene.text('"I\'m in the medical programme. I\'m gonna be a doctor."');
    scene.text('"Wow! That\'s ambitious."');
    scene.text('"Yeah, stereotypical too. Chinese girl studying to be a doctor. Classic right? Funniest part is that unlike the stereotype my mom isn\'t forcing me. I think she wouldn\'t mind if I worked as a whore for the rest of my life. She\'s seen firsthand how good the money is."');
  } else {
    if (((s as any).masseuse ?? 0)?.['lei_sisters'] >= 2) {
      if (((s as any).masseuse ?? 0)?.['lei_sisters'] < 3) {
        (s as any).masseuse['lei_sisters'] = 3;
      }
      scene.text('"You said your mom was an immigrant right?"');
      scene.text('"Yeah."');
      scene.text('"I have to say, your Russian is actually really good."');
      scene.text('"It\'s the only language I speak," Lei shrugs. "I\'m a natural born citizen."');
      scene.text('You hesitate. "Wait, you mean…"');
      scene.text('"Yup. I\'m half Russian, half Chinese. The product of a prostitute who failed to use birth control. My next four oldest sisters --well, half sisters I guess-- were conceived that way too. The rest were all born in China and came here with mom. That\'s why Xian has an accent and I don\'t."');
      scene.text('If Lei is bothered by the fact that she\'s a bastard daughter of a whore, she doesn\'t show it. She talks about her conception and half sisters very casually.');
    } else {
      // TODO-QSP: jump 'lei_talk_loop1'
    }
    if (((s as any).masseuse ?? 0)?.['lei_talk'] === 3) {
      if (((s as any).masseuse ?? 0)?.['lei_peek'] === 1) {
        scene.text('"By the way, I couldn\'t help but notice, you\'re very… loud when you\'re with customers. Do you really enjoy it that much?"');
        scene.text('"Nah, not really. Only the guys who work here are good enough to send me into a frenzy like that for reals. But mom makes us pay for them too. No freebies. Anyways, I just do it because I figure the clients love it. Men are shallow creatures. And having a little girl like me screaming how big their average-sized cock is really boosts their ego. Makes them more likely to leave a tip, or at least come back again later."');
      } else {
        // TODO-QSP: jump 'lei_talk_loop1'
      }
    } else {
      scene.text('"Do you prefer lace or cotton underwear?" Lei asks you. "I can never decide. Lace is a lot sexier but cotton is just way more comfortable."');
      if (((s as any).masseuse ?? 0)?.['lei_talk'] === 5) {
        scene.text('"The policy here is to always clean up after servicing a customer, but honestly you don\'t need to do it if they cum inside. Vaginas are weird, after you wipe you\'re still full of spunk anyways. God knows, sometimes I\'ll be in class hours after a shift and just feel something <i>gush</i> out into my panties. And it\'s definitely not the normal discharge."');
      } else {
        scene.text('"I just wish mom would let us keep water bottles in the rooms. I get so dehydrated waiting for the one break, but if I drink too much then I have to pee in the middle of a session. Some guys are into that but I sure as fuck am not."');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'break_over':
      enterBreakOver(s, scene);
      break;
    case 'lei_talk':
      enterLeiTalk(s, scene);
      break;
    case 'lei_talk2':
      enterLeiTalk2(s, scene);
      break;
    case 'lei_talk3':
      enterLeiTalk3(s, scene);
      break;
    case 'lei_small_talk':
      enterLeiSmallTalk(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const masseuse_break: LocationDef = {
  name: 'masseuse_break',
  title: 'You\'re taking a break.',
  region: 'other',
  description: ['You\'re taking a break.'],
  enter: enter,
};
