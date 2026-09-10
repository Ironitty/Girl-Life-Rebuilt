import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).martinpos ?? 0) === 'cowgirl') {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl_rub.mp4');
  } else {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/rev_cowgirl/rev_cowgirl_rub.mp4');
    if (((s as any).martinpos ?? 0) === 'doggystyle') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/doggystyle/doggystyle_rub.mp4');
    } else {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/missionary/missionary_rub.mp4');
      if (((s as any).martinpos ?? 0) === 'sideways') {
        scene.img('images/locations/city/industrial/bar/sex/bar/martin/sideways/sideways_rub.mp4');
      }
      if (((s as any).MartinPussyLick ?? 0) === 1) {
        scene.text('With your pussy thoroughly eaten out, you wet and ready for the real thing.');
      } else {
        scene.text('You could certainly tease Martin more, arouse him and yourself until the slightest touch could set you off, but you want his hard dick inside you and you want it <b>now</b>.');
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.text('Giving Martin a saucy look, you quickly strip down, completely exposing yourself to the bartender. Now that you\'re dressed for the occasion, nothing\'s standing between you and a night to remember.');
        qspCall(s, 'outfit', 'strip_all');
      } else {
        scene.text('And your little show earlier not only removed all possible obstacles but got you and your lover all hot and bothered.');
      }
      if (((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl') {
        scene.text('"Lie down," you say, sounding a little more forceful than you really wanted to, "I want to ride you."');
        scene.text('Martin smiles. "If you insist." He unceremoniously rids himself of his pants and lies down quickly, knowing better than to argue with a horny woman.');
        // TODO-QSP: dynamic text: Without delay, you climb on top of him, ' + iif($martinpos = 'rev_cowgirl', 'fac...
        scene.text(`Without delay, you climb on top of him, ' + iif($martinpos = 'rev_cowgirl', 'facing away from him', 'face to face with him') + ', his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock tantalizingly close to your wet pussy' + iif($martinpos = 'rev_cowgirl', ' and giving him a fantastic view of your ass', ') + ' as you rub your slit along his length, sending ripples of pleasure through your body.`);
      } else {
        // TODO-QSP: dynamic text: You bend over, giving Martin unrestricted access to your exposed pussy and a sex...
        scene.text(`You bend over, giving Martin unrestricted access to your exposed pussy and a sexy view of your ${((s as any).pc_desc ?? 0)?.['anus']} anus.`);
        scene.text('Martin smiles, clearly pleased with your shamelessness and urgency. He unceremoniously rids himself of his pants and comes up behind you, his erect penis so close to your wet folds you can feel the warmth it emanates. Not being able to see everything he does really turns you on.');
        // TODO-QSP: dynamic text: To say that you are ready would be an understatement, which is probably the reas...
        scene.text(`To say that you are ready would be an understatement, which is probably the reason Martin… doesn't penetrate you. Instead, he rubs his dick up and down the length of your slit, spreading your juices all around your lips and teasing you with the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock until you are about ready to scream.`);
        if (((s as any).martinpos ?? 0) === 'missionary') {
          scene.text('You get on your back and spread your legs, giving Martin a lovely view of your pussy and a smoldering \'come hither\' look.');
          scene.text('Martin smiles, clearly pleased with the urgency and horniness you\'re showing. He unceremoniously rids himself of his pants and comes up to you, his erect penis so close to your wet folds you can feel the warmth it emanates. Being face to face with him like this, nothing but air separating his dick from your wet hole, arouses you to no end.');
          // TODO-QSP: dynamic text: It's painfully obvious how much you want him to fuck you, which is probably why ...
          scene.text(`It's painfully obvious how much you want him to fuck you, which is probably why Martin… doesn't penetrate you. Instead, he whips his dick against your slit, sending tiny shockwaves through your body each time he hits your clit and teasing you with the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock until you are about ready to scream.`);
        } else {
          scene.text('You lie down on your side, pulling on your ass and thigh to expose your wet pussy to Martin and looking at him with unashamed want.');
          scene.text('Martin smiles, your urgency pleasing and arousing him. He unceremoniously rids himself of his pants and comes up to you, his erect penis so close to your wet folds you can feel the warmth it emanates.');
          // TODO-QSP: dynamic text: To say that you are ready would be an understatement, but Martin doesn't seem to...
          scene.text(`To say that you are ready would be an understatement, but Martin doesn't seem to care because… he doesn't penetrate you. Instead, he flips you on your back, pushes your legs back and rubs the length of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick along your slit. You reach down to push his cock against your ${((s as any).pc_desc ?? 0)?.['pussy']} sex, increasing the friction of each thrust, both relishing and cursing this pleasurable torture.`);
        }
        if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
          scene.text('But before either of you can make another move, a nagging thought that\'s been floating around the back of your head pushes to the foreground of your mind: You are a virgin. Is Martin <i>really</i> the man you want to have your first time with? Not to mention all the risks involved if you didn\'t take all necessary precautions against pregnancy…');
        } else {
          // TODO-QSP: 'But before either of you can make another move, a simple, powerful thought crosses your mind: You c...
          if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) !== 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
            // TODO-QSP: 'But before either of you can make another move, a simple, powerful thought crosses your mind: You c...
          } else {
            // TODO-QSP: dynamic text: But before either of you can make another move, a simple, powerful thought cross...
            scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. And unless your count is off, today is a dangerous day to boot. You take a tentative look at your \' + iif(bag > 0, \'purse\', \'pocket\') + \', the sabotaged condoms sitting in it materializing before your inner eye. You could put one on Martin and get pregnant, and he would be none the wiser…');
            if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
              // TODO-QSP: dynamic text: But before either of you can make another move, a simple, powerful thought cross...
              scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. Today isn\'t really a dangerous day, so the odds of that are relatively small, but still… You take a tentative look at your \' + iif(bag > 0, \'purse\', \'pocket\') + \', the sabotaged condoms sitting in it materializing before your inner eye. You could put one on Martin and get pregnant, and he would be none the wiser…');
            } else {
              // TODO-QSP: dynamic text: But before either of you can make another move, a simple, powerful thought cross...
              scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. And unless your count is off, today is a dangerous day to boot. You take a tentative look at your \' + iif(bag > 0, \'purse\', \'pocket\') + \', only to realize that you don\'t have any condoms anyway. You could stop this, of course… but then again, could you really, with his beautiful dick just inches from your pussy?');
              if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
                // TODO-QSP: dynamic text: But before either of you can make another move, a simple, powerful thought cross...
                scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. You take a tentative look at your \' + iif(bag > 0, \'purse\', \'pocket\') + \', only to realize that you don\'t have any condoms anyway. You could stop this, of course… but then again, could you really, with his beautiful dick just inches from your pussy?');
              } else {
                // TODO-QSP: dynamic text: But before either of you can make another move, your eyes come to rest on your '...
                scene.text('But before either of you can make another move, your eyes come to rest on your \' + iif(bag > 0, \'purse\', \'pocket\') + \' and you remember the condoms sitting inside it. Sure, you don\'t really need to use them since you can\'t get pregnant thanks to the birth control\' + iif(tabletkishot > 0, \' shot\', \' pills\') + \', but it might be less of a mess if Martin wore one. Then again, it would also be a little less intense.');
              }
              qspCall(s, 'arousal', 'foreplay', 1);
              qspCall(s, 'stat', '');
              if (((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl') {
                scene.actions([
                  { label: 'Lower yourself onto his dick', goto: ['MartinSex2', 'MartinSexDyn'] },
                ]);
              } else {
                scene.actions([
                  { label: '"Fuck me, Martin"', goto: ['MartinSex2', 'MartinSexDyn'] },
                ]);
              }
              scene.actions([
                { label: 'Stop and get dressed', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('It\'s strange how things go sometimes: One moment you are about to have your pussy fucked, the next you are on your feet, collecting your clothes and putting them on. The thoughts that crossed your mind had killed the mood in an instant, even if your horniness is unchanged.');
    scene.text('Martin is completely baffled by your sudden change of heart, standing there as he is, naked and with a raging hard-on. "What\'s wrong, mi amor?"');
    scene.text('"I\'m sorry, I can\'t today," you say evasively.');
    scene.text('"Was it something I did?" His concern seems genuine but just about any man in his situation would try to save this situation.');
    scene.text('"No, it\'s not your fault," you reassure Martin, "I just… I remembered that I have to go, okay?"');
    scene.text('He doesn\'t seem convinced by your answer but faced with how urgently you are getting ready to leave, he only gives a sigh and nods.');
    scene.text('You feel bad for him - after all, you wouldn\'t exactly feel much better than him if he had just walked out on you in the middle of sex - but your mind is made up, so you give him a small consolation in the form of a tender little kiss and a whispered "see you soon" before you leave him to himself, regret and arousal haunting your every step.');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-1));
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
                { label: 'Get him off with your mouth', handler: (st: GameState) => {
    (st as any).MartinSexStop = 1;
  }, goto: ['MartinSex3', 'MartinBlowjob'] },
                { label: 'Have anal sex instead', handler: (st: GameState) => {
    (st as any).MartinSurpAnal = 1;
  }, goto: ['MartinSex2', 'MartinAnalDyn'] },
                { label: 'Ask Martin to wear a condom', handler: (st: GameState) => {
    (st as any).MartinPrezik = 1;
  }, goto: ['MartinSex2', 'MartinSexDyn'] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const MartinSex2: LocationDef = {
  name: 'MartinSex2',
  region: 'other',
  enter: enter,
};
