import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMartinSexPrep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).martinpos ?? 0) === 'cowgirl') {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl_rub.mp4');
  } else {
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/rev_cowgirl/rev_cowgirl_rub.mp4');
    } else {
      if (((s as any).martinpos ?? 0) === 'doggystyle') {
        scene.img('images/locations/city/industrial/bar/sex/bar/martin/doggystyle/doggystyle_rub.mp4');
      } else {
        if (((s as any).martinpos ?? 0) === 'missionary') {
          scene.img('images/locations/city/industrial/bar/sex/bar/martin/missionary/missionary_rub.mp4');
        } else {
          if (((s as any).martinpos ?? 0) === 'sideways') {
            scene.img('images/locations/city/industrial/bar/sex/bar/martin/sideways/sideways_rub.mp4');
          }
        }
      }
    }
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
    scene.text('Without delay, you climb on top of him, ' + ((((s as any).martinpos ?? 0) === 'rev_cowgirl') ? ('facing away from him') : ('face to face with him')) + `, his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock tantalizingly close to your wet pussy` + ((((s as any).martinpos ?? 0) === 'rev_cowgirl') ? (' and giving him a fantastic view of your ass') : ('')) + ' as you rub your slit along his length, sending ripples of pleasure through your body.');
  } else {
    if (((s as any).martinpos ?? 0) === 'doggystyle') {
      scene.text(`You bend over, giving Martin unrestricted access to your exposed pussy and a sexy view of your ${(((s as any).pc_desc ?? 0)?.['anus'] ?? '')} anus.`);
      scene.text('Martin smiles, clearly pleased with your shamelessness and urgency. He unceremoniously rids himself of his pants and comes up behind you, his erect penis so close to your wet folds you can feel the warmth it emanates. Not being able to see everything he does really turns you on.');
      scene.text(`To say that you are ready would be an understatement, which is probably the reason Martin… doesn't penetrate you. Instead, he rubs his dick up and down the length of your slit, spreading your juices all around your lips and teasing you with the tip of his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock until you are about ready to scream.`);
    } else {
      if (((s as any).martinpos ?? 0) === 'missionary') {
        scene.text('You get on your back and spread your legs, giving Martin a lovely view of your pussy and a smoldering \'come hither\' look.');
        scene.text('Martin smiles, clearly pleased with the urgency and horniness you\'re showing. He unceremoniously rids himself of his pants and comes up to you, his erect penis so close to your wet folds you can feel the warmth it emanates. Being face to face with him like this, nothing but air separating his dick from your wet hole, arouses you to no end.');
        scene.text(`It's painfully obvious how much you want him to fuck you, which is probably why Martin… doesn't penetrate you. Instead, he whips his dick against your slit, sending tiny shockwaves through your body each time he hits your clit and teasing you with the tip of his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock until you are about ready to scream.`);
      } else {
        if (((s as any).martinpos ?? 0) === 'sideways') {
          scene.text('You lie down on your side, pulling on your ass and thigh to expose your wet pussy to Martin and looking at him with unashamed want.');
          scene.text('Martin smiles, your urgency pleasing and arousing him. He unceremoniously rids himself of his pants and comes up to you, his erect penis so close to your wet folds you can feel the warmth it emanates.');
          scene.text(`To say that you are ready would be an understatement, but Martin doesn't seem to care because… he doesn't penetrate you. Instead, he flips you on your back, pushes your legs back and rubs the length of his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick along your slit. You reach down to push his cock against your ${(((s as any).pc_desc ?? 0)?.['pussy'] ?? '')} sex, increasing the friction of each thrust, both relishing and cursing this pleasurable torture.`);
        }
      }
    }
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('But before either of you can make another move, a nagging thought that\'s been floating around the back of your head pushes to the foreground of your mind: You are a virgin. Is Martin <i>really</i> the man you want to have your first time with? Not to mention all the risks involved if you didn\'t take all necessary precautions against pregnancy…');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) !== 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000  &&  ((s as any).ovulate ?? 0) > 0) {
      scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. And unless your count is off, today is a dangerous day to boot. You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', the condoms sitting in it materializing before your inner eye.' + ((((s as any).preziktype ?? 0) === 1) ? (' You usually prefer to have sex without condoms, but…') : (' ')));
    } else {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) !== 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
        scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. Today isn\'t really a dangerous day, but it might be better to be safe than sorry. And while Martin doesn\'t seem like the type who fucks random sluts, you can never be entirely sure of that, can you? You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', the condoms sitting in it materializing before your inner eye.' + ((((s as any).preziktype ?? 0) === 1) ? (' You usually prefer to have sex sans condoms, but…') : (' ')));
      } else {
        if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000  &&  ((s as any).ovulate ?? 0) > 0) {
          scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. And unless your count is off, today is a dangerous day to boot. You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', the sabotaged condoms sitting in it materializing before your inner eye. You could put one on Martin and get pregnant, and he would be none the wiser…');
        } else {
          if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 2  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
            scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. Today isn\'t really a dangerous day, so the odds of that are relatively small, but still… You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', the sabotaged condoms sitting in it materializing before your inner eye. You could put one on Martin and get pregnant, and he would be none the wiser…');
          } else {
            if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000  &&  ((s as any).ovulate ?? 0) > 0) {
              scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. And unless your count is off, today is a dangerous day to boot. You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', only to realize that you don\'t have any condoms anyway. You could stop this, of course… but then again, could you really, with his beautiful dick just inches from your pussy?');
            } else {
              if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
                scene.text('But before either of you can make another move, a simple, powerful thought crosses your mind: You could get pregnant. You take a tentative look at your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', only to realize that you don\'t have any condoms anyway. You could stop this, of course… but then again, could you really, with his beautiful dick just inches from your pussy?');
              } else {
                if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) !== 2) {
                  scene.text('But before either of you can make another move, your eyes come to rest on your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ' and you remember the condoms sitting inside it. Sure, you don\'t really need to use them since you can\'t get pregnant thanks to the birth control' + ((((s as any).tabletkishot ?? 0) > 0) ? (' shot') : (' pills')) + ', but it might be less of a mess if Martin wore one. Then again, it would also be a little less intense.');
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'arousal', 'foreplay', 1);
  (s as any).MartinPussyLick = undefined;
  qspCall(s, 'stat', '');
  if (((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl') {
    scene.actions([
      { label: 'Lower yourself onto his dick', goto: ['MartinSex2', 'MartinSexDyn'] },
    ]);
  } else {
    if (((s as any).martinpos ?? 0) === 'sideways'  ||  ((s as any).martinpos ?? 0) === 'doggystyle'  ||  ((s as any).martinpos ?? 0) === 'missionary') {
      scene.actions([
        { label: '"Fuck me, Martin"', goto: ['MartinSex2', 'MartinSexDyn'] },
      ]);
    }
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
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npc_relationship', 'modify', 'A216', (-1));
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'arousal', 'end');
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
  scene.build();
}

function enterMartinSexDyn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  if (((s as any).martinpos ?? 0) !== 'sideways') {
    (s as any).pic_rand = (Math.floor(Math.random() * 5) + 1);
  } else {
    (s as any).pic_rand = (Math.floor(Math.random() * 3) + 1);
  }
  if (((s as any).martinpos ?? 0) === 'cowgirl') {
    scene.img(`images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl${((s as any).pic_rand ?? '')}.jpg`);
  } else {
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.img(`images/locations/city/industrial/bar/sex/bar/martin/rev_cowgirl/rev_cowgirl${((s as any).pic_rand ?? '')}.jpg`);
    } else {
      if (((s as any).martinpos ?? 0) === 'doggystyle') {
        scene.img(`images/locations/city/industrial/bar/sex/bar/martin/doggystyle/doggy${((s as any).pic_rand ?? '')}.jpg`);
      } else {
        if (((s as any).martinpos ?? 0) === 'missionary') {
          scene.img(`images/locations/city/industrial/bar/sex/bar/martin/missionary/missionary${((s as any).pic_rand ?? '')}.jpg`);
        } else {
          if (((s as any).martinpos ?? 0) === 'sideways') {
            scene.img(`images/locations/city/industrial/bar/sex/bar/martin/sideways/sideways${((s as any).pic_rand ?? '')}.jpg`);
          }
        }
      }
    }
  }
  if (((s as any).MartinPrezik ?? 0) === 1) {
    scene.text('You reach into your ' + ((((s as any).bag ?? 0) > 0) ? ('purse') : ('pocket')) + ', quickly finding a condom.');
    scene.text('You decide that, if you\'re gonna ask, you might as well get it over with quickly - like ripping off a bandage, except the bandage is a condom and it\'s being put on.');
    scene.text('"Can we use this today?"');
    scene.text('His disappointment is clear as day. There\'s not a man in the world who likes to be asked that question, and right when the fun is about to start and he\'s inches away from his prize too. But after a second or two, he recovers, probably remembering that sex is, after all, still sex, rubber or not, and takes the condom from you, wrapping his shaft in latex with practiced ease.');
    if (((s as any).preziktype ?? 0) === 2) {
      scene.text('You could have just let him go bareback, of course; the condom is about as fit to catch sperm as a sieve, and has about as many holes in it, too.');
      scene.text('But… maybe he would have pulled out. Maybe he would have held himself back.');
      scene.text('With \'protection\' like this, he has no reason to. Before he knows it, he\'ll have filled your pussy with his cum, and that mental image makes you feel giddy with anticipation as you reach for his dick.');
    } else {
      if (((s as any).preziktype ?? 0) === 0  &&  ((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
        scene.text('You were tempted to just put him inside you. He was so tantalizingly close… but the prospect of getting pregnant was scary enough to hold you back.');
        scene.text('Sure, he could have pulled out, and he still can, but you know that the only way to make sure you don\'t get pregnant is to take the pill or use a condom, and lacking a hormonal solution, this is what you and your lover will have to put up with.');
        scene.text('You sigh inwardly and bite your lip when your mind wanders, revisiting the sight of his bare cock, tempting you… but you\'ve made your choice and almost defiantly reach for his rubber-wrapped cock.');
      } else {
        if ((!((s as any).preziktype ?? 0))) {
          scene.text('You could have just let him go bareback, of course. There\'s no way you could get pregnant right now, just no way…');
          scene.text('But when you think about his cum dripping out and running down your legs, going to the "bathroom" to clean yourself up, and still having the stuff drip out of you for at least another hour or two… You\'re just not in the mood for that.');
          scene.text('Sure, condoms make it feel a little muted, and you could just let him cum elsewhere - still can, but this way, all your options are on the table and you can just enjoy it without having to worry about a messy clean-up… unless that\'s what strikes your fancy when you\'re in the moment.');
        }
      }
    }
  }
  if (((s as any).martinpos ?? 0) === 'cowgirl') {
    scene.text('Your hand feels small around his cock as you hold him in place, teasingly rubbing him against your pussy lips a few times and shooting him a quick glance before impaling yourself on him.');
  } else {
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.text('Your hand feels small around his cock as you hold him in place, teasingly rubbing him against your pussy lips a few times and feeling his gaze on your ass before impaling yourself on him.');
    } else {
      if (((s as any).martinpos ?? 0) === 'doggystyle') {
        scene.text('Martin is all too happy to finally put an end to the teasing: He deftly guides the tip of his cock to your wet hole and enters you from behind, pushing his length deeper and deeper inside you with this first, slow stroke.');
      } else {
        if (((s as any).martinpos ?? 0) === 'missionary') {
          scene.text('Martin is all too happy to finally put an end to the teasing: He deftly guides the tip of his cock to your wet hole and enters you, face to face, pushing his length deeper and deeper inside you with this first, slow stroke.');
        } else {
          if (((s as any).martinpos ?? 0) === 'sideways') {
            scene.text('Martin is all too happy to finally put an end to the teasing: He flips you on your side again and deftly guides the tip of his cock to your wet hole and enters you, pushing his length deeper and deeper inside you with this first, slow stroke.');
          }
        }
      }
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-2));
    scene.text('The trickle of blood from your broken hymen doesn\'t escape his sharp eyes, though, and he brings your carnal act to a grinding halt.');
    scene.text(`"What…? ${((s as any).pcs_firstname ?? '')}, are you a virgin?!" He asks, aghast - he probably wouldn't have agreed to being intimate with you if he had known this.`);
    scene.text(`"<i>Was</i>," you correct proudly, "I <i>was</i> a virgin. Now I'm a woman." You can feel some pain from having his throbbing ${((s as any).dick_girth ?? '')} cock where that small membrane used to be, but while neither of you move, it's bearable.`);
    scene.text('You certainly don\'t want to stop, though - not halfway into your first time.');
    if ((((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl')) {
      scene.text('In fact, before Martin can get any ideas, like pulling out, you go back to impaling your pussy on your first proper cock, although you\'re not sure he\'s completely over the fact that he took your virginity.');
    } else {
      scene.text('In fact, you start moving against him again, showing him that you are fine. And really, all it took was a little bit of stimulation and reassurance to get him to move again, although you\'re not sure he\'s completely over the fact that he took your virginity.');
    }
  }
  if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)  &&  (((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl')) {
    scene.text('And it really does feel like you are impaling yourself: You aren\'t wide enough to accommodate a dick of Martin\'s size just like that and you groan in pain as you take more and more of him inside. Your wetness and arousal make it bearable and you don\'t want to stop, but it takes a little while until you have fully adapted to his size.');
    scene.text('With the pain slowly fading, you start moving up and down. Martin must have picked up on your discomfort, because he gently strokes your leg and doesn\'t make any attempt to speed things up until you yourself are ready for it. Soon, sooner than you expected, the pain is… no, not gone, but overtaken by that familiar, wonderful heat.');
  } else {
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)  &&  (((s as any).martinpos ?? 0) === 'doggystyle'  ||  ((s as any).martinpos ?? 0) === 'missionary'  ||  ((s as any).martinpos ?? 0) === 'sideways')) {
      scene.text('But despite his obvious restraint, there\'s no helping the fact that your pussy isn\'t wide enough to accommodate a dick of Martin\'s size just like that, and you groan in pain as he parts your inner walls. Your wetness and arousal make it bearable and you don\'t want him to stop, nor does he seem capable of it, now that he is finally inside you. Still, it takes a little while until you have fully adapted to his size.');
      scene.text('With the pain slowly fading, you start to relax and focus on the pleasant sensations he is giving you. When you open your eyes - which you had unconsciously screwed shut at the pain - and turn your head to face to him, you see Martin give you a comforting look, and you notice that he had slowed down almost to a stop. You give him a tender smile and move against him to show that you are fine. He picks up the pace again and soon, sooner than you expected, the pain is… no, not gone, but overtaken by that familiar, wonderful heat.');
    }
  }
  if (((s as any).tabletkishot ?? 0) < 1  &&  ((s as any).pillcon2 ?? 0) < 30000) {
    scene.text(`The thought that you could get pregnant is still present in the back of your head, now that Martin's dick is deep inside you, but you have long passed the point of no return. ${((s as any).OpenInnerThought ?? '')}I can always have him pull out, ${((s as any).CloseInnerThought ?? '')}you think to yourself and allow the thought to fade as you give in to the sensations that flood your senses.`);
  }
  if (((s as any).martinpos ?? 0) === 'cowgirl') {
    scene.text(`Feeling Martin's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock slowly move inside you as you lift yourself up and fall back down is incredible; the control you have over the situation makes it even more satisfying. You moan softly as you ever so slightly speed up your movements, looking at Martin from under hooded eyes and enjoying the sight of his slightly parted lips, or the intense look with which he focuses on your swaying breasts - he is completely under your spell.`);
  } else {
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.text(`Feeling Martin's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock slowly move inside you as you lift yourself up and fall back down is incredible; the control you have over the situation makes it even more satisfying. You moan softly as you ever so slightly speed up your movements. You look back over your shoulder and he seems completely focused on where the two of you are connected, watching with lustful intensity as your ass sways before him and you take his cock inside your wet hole again and again.`);
    } else {
      if (((s as any).martinpos ?? 0) === 'doggystyle') {
        scene.text(`Feeling Martin's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock move inside you as he enters you and withdraws is wonderful. You have little control over the situation, now that everything's said and done and the barkeeper is balls-deep inside you, and that is exactly what makes you moan so loud. You look back over your shoulder and he seems completely focused on where the two of you are connected, watching with lustful intensity as he shoves his cock inside your wet hole again and again, kneading your ass as he goes.`);
      } else {
        if (((s as any).martinpos ?? 0) === 'missionary') {
          scene.text(`Feeling Martin's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock move inside you as he enters you and withdraws is wonderful. You have little control over the situation, now that everything's said and done and the barkeeper is balls-deep inside you, and that is exactly what makes you moan so loud. You look up at him and find his eyes moving back and forth between your face, your swaying breasts and the pussy he's fucking. But the moment he notices your gaze, he leans down and kisses you passionately without missing a beat.`);
        } else {
          if (((s as any).martinpos ?? 0) === 'sideways') {
            scene.text(`Feeling Martin's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock move inside you as he enters you and withdraws is wonderful. You have little control over the situation, now that everything's said and done and the barkeeper is balls-deep inside you, and that is exactly what makes you moan so loud. You look up at him and find his eyes moving back and forth between your face, your swaying breasts and ass - you can see him and what he's doing to you and yet this position makes you feel wonderfully vulnerable and exposed.`);
          }
        }
      }
    }
  }
  (s as any).orgasm_txt = 'You only lasted a few minutes, that\'s how horny you were. You and Martin haven\'t even really had the time to get into a proper rhythm before you feel your orgasm build up and sweep you off your feet. You cum with loud moans, your insides quivering around Martin\'s cock as you buck against your lover and desperately try to keep up your movements. But you fail and have to stop after a few seconds because your legs feel like jelly. After a short break in Martin\'s arms, you start moving once again, shifting here and there to allow Martin to explore every inch of your now tightened pussy.';
  if (((s as any).martinpos ?? 0) === 'cowgirl'  ||  ((s as any).martinpos ?? 0) === 'rev_cowgirl') {
    qspCall(s, 'arousal', 'vaginal', 7, 'dom');
  } else {
    qspCall(s, 'arousal', 'vaginal', 7, 'sub');
  }
  (s as any).orgasm_txt = '';
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  if (((s as any).martinpos ?? 0) === 'rev_cowgirl'  ||  ((s as any).martinpos ?? 0) === 'doggystyle') {
    if (((s as any).martinpos ?? 0) === 'doggystyle') {
      scene.actions([
        { label: '"Fuck my ass, Martin"', goto: ['MartinSex2', 'MartinAnalDyn'] },
      ]);
    } else {
      if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
        scene.actions([
          { label: 'Lower your ass onto his dick', goto: ['MartinSex2', 'MartinAnalDyn'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    do {
      if (((st as any).martinpos ?? 0) !== 'sideways') {
        (st as any).pic_rand2 = (Math.floor(Math.random() * 5) + 1);
      } else {
        (st as any).pic_rand2 = (Math.floor(Math.random() * 2) + 4);
      }
      if (((st as any).martinpos ?? 0) === 'cowgirl'  ||  ((st as any).martinpos ?? 0) === 'rev_cowgirl') {
        if (((st as any).martinpos ?? 0) === 'cowgirl') {
          scene.img(`images/locations/city/industrial/bar/sex/bar/martin/cowgirl/cowgirl${((st as any).pic_rand2 ?? '')}.jpg`);
        } else {
          scene.img(`images/locations/city/industrial/bar/sex/bar/martin/rev_cowgirl/rev_cowgirl${((st as any).pic_rand2 ?? '')}.jpg`);
        }
        scene.text(`You are moving ever faster, trying to take Martin's wonderful cock deeper into your ${(((st as any).pc_desc ?? 0)?.['pussy'] ?? '')} pussy, fucking him harder, moaning louder as you go. It may have started off gently but there's no gentleness left to be found here anymore: You are riding this man in the middle of his bar, giving him a fantastic view of your ` + ((((st as any).martinpos ?? 0) === 'rev_cowgirl') ? ('ass') : ('tits')) + ' in the same spot some guys talked about their shitty jobs and marital problems a few hours ago.');
        scene.text('It only adds to the excitement of it all to know that this is a public place, even if nobody else is here right now.');
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
          scene.text('This idea, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to fuck the bartender right here in the center, with all of their eyes on you…');
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
        }
        (st as any).orgasm_txt = 'And it\'s this fantasy that sets you off, causing you to cry out in heat and your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy to quiver around Martin\'s cock as you imagine how strangers jerk off to your fucking. As you come down from your high, you feel like a pervert… but that\'s not a bad thing, right?';
        qspCall(st, 'arousal', 'vaginal', 3, 'exhibitionism');
        scene.text('Martin, who has been relatively passive so far, leaving you in control, shakes you out of your reverie when his hands move to your hips. No doubt he intends to take a little more initiative.');
        (st as any).orgasm_txt = 'Your sense of \' + iif(dominance > 20, \'control over\', \'submission to\') + \' Martin and the intense feeling of him moving inside your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy drive you ever closer to the edge until you can no longer take it. You cum loudly, shivering all over, your pussy massaging Martin\'s cock with its contractions as if it wanted to squeeze the cum out of him. The orgasm lasts for what feels like an eternity, but when it has passed\' + iif($martinpos = \'rev_cowgirl\', \' and you look back at him\', \') + \', Martin gives you a smug, self-satisfied look that makes you chuckle. You\'re not done with each other yet, though, and before long, you\'ve resumed your fast, hard rhythm.';
        scene.text('And you could have resisted him; surely you could have stayed in control. But the simple fact of the matter was that you didn\'t want to. You were on top of him, you had proven to yourself and to him that you could make him do what you want. And now, you <b>want</b> him to take charge of you again.');
        scene.text(`With no resistance from you, Martin grabs onto your hips and stops your movement, only the tip of his ${((st as any).dick_girth ?? '')} penis still inside your pussy. You want him inside you again, but he doesn't let you move, forcing you to look` + ((((st as any).martinpos ?? 0) === 'rev_cowgirl') ? (' over your shoulder') : ('')) + ' at your lover, feeling both aroused and vulnerable.');
        scene.text('"Do you want it?" He asks imperiously.');
        scene.text('"Yes, please," you pant.');
        scene.text('"Please what?"');
        scene.text('"Please fuck me with your hard cock again. I need it!"');
        scene.text(`That was all he wanted to hear. In the blink of an eye, Martin is balls-deep inside you again, his pelvis slamming into your ${(((st as any).pc_desc ?? 0)?.['pussy'] ?? '')} hole from below. You cannot move, his strong arms firmly holding you in place, and are helpless to let him fuck you from below.`);
        scene.text('And you are loving every second of it.');
        qspCall(st, 'arousal', 'vaginal', 8, 'sub');
        qspCall(st, 'stat', '');
      } else {
        if (((st as any).martinpos ?? 0) === 'doggystyle') {
          scene.img(`images/locations/city/industrial/bar/sex/bar/martin/doggystyle/doggy${((st as any).pic_rand2 ?? '')}.jpg`);
          scene.text('Martin is pounding you from behind like he\'s possessed. He may have started off gently but there\'s no gentleness left in him: Your lover is fucking you like a whore, right in the middle of his own establishment where only a few hours ago people were talking about their shitty jobs and martial problems.');
          scene.text('It only adds to the excitement of it all to know that this is a public place, even if nobody\'s here now.');
          if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
            scene.text('This idea, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to be fuck by the bartender right here in the center, with all of their eyes on you…');
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
          }
          (st as any).orgasm_txt = 'And it\'s this fantasy that sets you off, causing you to cry out in heat and your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy to quiver around Martin\'s cock as you imagine how strangers jerk off to your fucking. As you come down from your high, you feel like a pervert… but that\'s not a bad thing, right?';
          qspCall(st, 'arousal', 'vaginal', 3, 'exhibitionism');
          scene.text('Martin was firmly in control so far, but it seems like it\'s not enough for him: All of a sudden, you can feel his hand at your neck, grabbing you, forcing you to look at him and increasing both his leverage and sense of power over you.');
          (st as any).orgasm_txt = ((((st as any).dominance ?? 0) > 20) ? ('Wresting control from') : ('Submitting to')) + ' Martin and the intense feeling of him moving inside your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy drive you ever closer to the edge until you can no longer take it. You cum loudly, shivering all over, your pussy massaging Martin\'s cock with its contractions as if it wanted to squeeze the cum out of him as he fucks you. The orgasm lasts for what feels like an eternity and makes your legs feel like jelly, but when it has passed and you look back at him, Martin gives you a smug, self-satisfied look that makes you chuckle. You\'re not done with each other yet, though, and before long, you\'ve resumed your fast, hard rhythm.';
          scene.text('Sure, you could have resisted him, but… you choosing this position had already been a submission in and of itself. You <b>wanted</b> him to take charge of you, to fuck you however he wanted, treat you as he pleased. And the kinky side of you was curious about where he was going with this.');
          scene.text('Sensing no resistance from you, Martin tightens his grip and looks into your eyes. He has stopped moving at all, but he\'s not saying anything. All he does is look at you. Seconds pass, his cock deep inside you, throbbing and thick, but perfectly still… it\'s driving you crazy. You squirm against him, trying to wiggle and move, but all the accomplishes is make him hold you tighter.');
          scene.text('"What are you waiting for?" You moan in frustration.');
          scene.text('"For you to say those magic words."');
          scene.text('"Magic word? Please?"');
          scene.text('"No," he gives you a wolfish grin, "the other ones."');
          scene.text('Your aroused mind needs a moment to follow… but only a moment: "Please fuck me. Fuck me hard, Martin. I need you to fu-Aaah!" Your begging turns into a moan as your lover complies and goes from zero to balls-deep pounding in an instant. Any conscious thought is wiped from your mind as pure lust floods it and you let the wonderful sensations wash over you.');
          qspCall(st, 'arousal', 'vaginal', 8, 'sub');
          qspCall(st, 'stat', '');
        } else {
          if (((st as any).martinpos ?? 0) === 'missionary') {
            scene.img(`images/locations/city/industrial/bar/sex/bar/martin/missionary/missionary${((st as any).pic_rand2 ?? '')}.jpg`);
            scene.text(`Martin is giving your ${(((st as any).pc_desc ?? 0)?.['pubes'] ?? '')} pussy a good pounding and what few kisses he gives you are rough and demanding. He may have started off gently but there's no gentleness left in him: Your lover is fucking you possessively, right in the middle of his establishment where only a few hours ago people were talking about their shitty jobs and martial problems.`);
            scene.text('It only adds to the excitement of it all to know that this is a public place, even if nobody\'s here now.');
            if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
              scene.text('This idea, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to be fuck by the bartender right here in the center, with all of their eyes on you…');
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
            }
            (st as any).orgasm_txt = 'And it\'s this fantasy that sets you off, causing you to cry out in heat and your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy to quiver around Martin\'s cock as you imagine how strangers jerk off to your fucking. As you come down from your high, you feel like a pervert… but that\'s not a bad thing, right?';
            qspCall(st, 'arousal', 'vaginal', 3, 'exhibitionism');
            scene.text('Martin was firmly in control so far, but it seems like it\'s not enough to him: All of a sudden, you can feel his hand at your neck, grabbing you, forcing you to look at him and increasing both his leverage and sense of power over you.');
            (st as any).orgasm_txt = ((((st as any).dominance ?? 0) > 20) ? ('Wresting control from') : ('Submitting to')) + ' Martin and the intense feeling of him moving inside your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy drive you ever closer to the edge until you can no longer take it. You cum loudly, shivering all over, your pussy massaging Martin\'s cock with its contractions as if it wanted to squeeze the cum out of him as he fucks you. The orgasm lasts for what feels like an eternity, but when it has passed and you look up at him, Martin gives you a smug, self-satisfied look that makes you chuckle. You\'re not done with each other yet, though, and before long, you\'ve resumed your fast, hard rhythm.';
            scene.text('Sure, you could have resisted him, but… you choosing this position had already been a submission in and of itself. You <b>wanted</b> him to take charge of you, to fuck you any way he wanted, treat you as he pleased. And the kinky side of you was curious about where he was going with this.');
            scene.text('Sensing no resistance from you, Martin tightens his grip around your neck a little and looks into your eyes. He has stopped moving at all, but he\'s not saying anything. All he does is look at you. Seconds pass, his cock deep inside you, throbbing and thick, but perfectly still… it\'s driving you crazy. You squirm against him, trying to wiggle and move, but all the accomplishes is make him hold you tighter.');
            scene.text('"You love having me inside you, don\'t you?"');
            scene.text('"Yes," you respond breathlessly.');
            scene.text('"You want me to keep going?"');
            scene.text('"Yes."');
            scene.text('He starts moving again, each push sending shockwaves of lust through your body. You almost don\'t notice at first that it\'s a little harder to breathe than before.');
            scene.text('"You like it when I choke you like this?"');
            scene.text('"Yes," you whisper before you can even really think about it. And you really do. You don\'t know if it\'s because you\'re feeling so vulnerable or if less oxygen is making everything more intense, but each thrust feels better than the last and as Martin picks up the pace, you completely surrender to the onslaught of pleasure.');
            qspCall(st, 'arousal', 'vaginal', 8, 'sub');
            qspCall(st, 'stat', '');
          } else {
            if (((st as any).martinpos ?? 0) === 'sideways') {
              scene.img(`images/locations/city/industrial/bar/sex/bar/martin/sideways/sideways${((st as any).pic_rand2 ?? '')}.jpg`);
              scene.text('Martin has been slowly picking up the pace but he is clearly getting frustrated. You don\'t know if it\'s the position, personal preference or something else entirely, but when he pulls you to your feet, these questions are quickly swept aside:');
              scene.text(`In a few swift motions, he has lifted your ${(((st as any).pc_desc ?? 0)?.['legs'] ?? '')} leg and entered you again from behind, fucking you sideways… only standing up. All this may have started off gently but there's no gentleness left in him: Martin is fucking you possessively, right in the middle of his establishment where only a few hours ago, people were talking about their shitty jobs and martial problems.`);
              scene.text('It only adds to the excitement of it all to know that this is a public place, even if nobody\'s here now.');
              if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
                scene.text('This idea, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to be fuck by the bartender right here in the center, with all of their eyes on you…');
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
              }
              (st as any).orgasm_txt = 'And it\'s this fantasy that sets you off, causing you to cry out in heat and your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy to quiver around Martin\'s cock as you imagine how strangers jerk off to your fucking. As you come down from your high, you feel like a pervert… but that\'s not a bad thing, right?';
              qspCall(st, 'arousal', 'vaginal', 3, 'exhibitionism');
              scene.text('Martin was firmly in control so far, and his switch of position only served to emphasize that, but it seems like it\'s not enough to him: All of a sudden, you can feel one of his hands leave your hips and grab your neck, forcing you to look back at him and increasing both his leverage and sense of power over you.');
              (st as any).orgasm_txt = ((((st as any).dominance ?? 0) > 20) ? ('Wresting control from') : ('Submitting to')) + ' Martin and the intense feeling of him moving inside your ' + (((st as any).pc_desc ?? 0)?.['pussy']) + ' pussy drive you ever closer to the edge until you can no longer take it. You cum loudly, shivering all over, your pussy massaging Martin\'s cock with its contractions as if it wanted to squeeze the cum out of him as he fucks you. The orgasm lasts for what feels like an eternity and your legs feel so weak that Martin has to support you, but when it has passed and you look back at him, Martin gives you a smug, self-satisfied look that makes you chuckle. You\'re not done with each other yet, though, and before long, you\'ve resumed your fast, hard rhythm.';
              scene.text('Sure, you could have resisted him, but… you didn\'t resist when he put you on your feet. You didn\'t resist when he penetrated you again. You <b>wanted</b> him to take charge of you, to fuck you however he wanted, didn\'t you? So why start pretending otherwise now?');
              scene.text('When he senses no resistance, Martin tightens his grip. He has stopped moving at all, but he\'s not saying anything. All he does is look at you. Seconds pass, his cock deep inside you, throbbing and thick, but perfectly still… it\'s driving you crazy. You squirm against him, trying to wiggle and move, but all the accomplishes is make him hold you tighter.');
              scene.text('"What are you waiting for?" You moan in frustration.');
              scene.text('"Shhh…"');
              scene.text('"What? What is it?"');
              scene.text('"I was just thinking," he gives you a wolfish grin, "with your legs spread like this, you\'d be giving the patrons a good show."');
              scene.text('You shiver with arousal: So you weren\'t the only one who picked up on that idea. Martin is pretty adamant about keeping his bar free of sex when he can, but it seems that the fantasy turns him on as much as it did you.');
              scene.text('"But you are all mine now" is the last thing your hear before your ears are filled with your own moans - Martin seems intent on fucking you into counter. Any conscious thought is wiped from your mind as pure lust floods it and you let the wonderful sensations and erotic thoughts wash over you.');
              qspCall(st, 'arousal', 'vaginal', 8, 'sub');
              qspCall(st, 'stat', '');
            }
          }
        }
      }
      scene.text('Unsurprisingly, Martin cannot withstand this kind of pleasure for too long: After a few minutes of this, he groans your name and you know that he is about to cum.');
      qspCall(st, 'stat', '');
      (st as any).orgasm_txt = '';
      (st as any).pic_rand2 = undefined;
      scene.actions([
        { label: 'Let him cum in your mouth', goto: ['MartinSex2', 'MartinCumshot_Mouth'] },
        { label: 'Let him cum on your face', goto: ['MartinSex2', 'MartinCumshot_Face'] },
        { label: 'Let him cum on your tits', goto: ['MartinSex2', 'MartinCumshot_Tits'] },
        { label: 'Let him cum inside you', handler: (st: GameState) => {
    if (((st as any).MartinPrezik ?? 0) === 1) {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_prezik.jpg');
      scene.text('But you make no attempts to pull him out of you and after a few more moments, you feel Martin tense and his penis grow inside you even more; two or three seconds later, he groans and cums, filling the condom with his seed.');
      if (((st as any).preziktype ?? 0) === 2) {
        qspCall(st, 'cum_call', '', ((st as any).boy ?? 0), 1, 7);
      } else {
        qspCall(st, 'cum_call', '', ((st as any).boy ?? 0), 1, 3);
      }
    } else {
      if (((st as any).martinpos ?? 0) === 'cowgirl') {
        scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_cowgirl.mp4');
      } else {
        if (((st as any).martinpos ?? 0) === 'rev_cowgirl') {
          scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_rev_cowgirl.mp4');
        } else {
          if (((st as any).martinpos ?? 0) === 'doggystyle') {
            scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_doggy.mp4');
          } else {
            if (((st as any).martinpos ?? 0) === 'missionary') {
              scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_missionary.mp4');
            } else {
              if (((st as any).martinpos ?? 0) === 'sideways') {
                scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_sideways.mp4');
              }
            }
          }
        }
      }
      scene.text('But you make no attempts to pull him out of you and after a few more moments, you feel Martin tense and his penis grow inside you even more; two or three seconds later, he groans and cums, filling your pussy with hot sperm.');
      qspCall(st, 'cum_call', '', ((st as any).boy ?? 0), 1);
    }
    qspCall(st, 'stat', '');
    if (((st as any).martinpos ?? 0) === 'cowgirl') {
      scene.text('"Did you enjoy yourself?" You ask coquettishly, leaning forward onto his chest.');
      scene.text('Martin smiles up at you, and pulls you down to give you a kiss. "I think you know the answer."');
      scene.text(`"Perhaps…" You grin and lift yourself off, feeling his softening ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock slide out of your ${(((st as any).pc_desc ?? 0)?.['pussy'] ?? '')} pussy.`);
    } else {
      if (((st as any).martinpos ?? 0) === 'rev_cowgil') {
        scene.text('"Did you enjoy yourself?" You ask coquettishly, wiggling your butt as you look back over your shoulder.');
        scene.text('Martin smiles up at you, and gives your ass a resounding smack. "I think you know the answer."');
        scene.text(`"Perhaps…" You grin and lift yourself off, feeling his softening ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock slide out of your ${(((st as any).pc_desc ?? 0)?.['pussy'] ?? '')} pussy.`);
      } else {
        if (((st as any).martinpos ?? 0) === 'doggystyle') {
          scene.text('Martin is still catching his breath when you look at him over your shoulder and grin when you see the expression of bliss on his face.');
          scene.text(`"${((st as any).pcs_firstname ?? '')}, you are something else." Martin chuckles and pats your ass.`);
          scene.text('"So, I guess it was good for you."');
        } else {
          if (((st as any).martinpos ?? 0) === 'missionary') {
            scene.text('You pull Martin in for a tender kiss, enjoying the afterglow of all the sex and orgasming.');
            scene.text(`"${((st as any).pcs_firstname ?? '')}, you are something else." Martin chuckles and gives you another kiss.`);
            scene.text('"So, I guess it was good for you."');
          } else {
            if (((st as any).martinpos ?? 0) === 'sideways') {
              scene.text('Martin lets go of your leg and both your feet stand firmly on the ground again. You feel sore, but if every workout was like this, you wouldn\'t mind feeling sore every night.');
              scene.text(`"${((st as any).pcs_firstname ?? '')}, you are something else." Martin chuckles and pats your ass.`);
              scene.text('"So, I guess it was good for you."');
            }
          }
        }
        scene.text('"I don\'t think I\'m the only one who liked it, was I?" He leans in and whispers: "You like getting fucked hard, don\'t you?"');
        scene.text('"Yes," you admit, and for just a moment, you wonder if he would be up for another round.');
      }
    }
    if (((st as any).MartinPrezik ?? 0) === 1) {
      if (((st as any).sexcontra ?? 0) === 3) {
        scene.text('Martin pulls the condom off and ties it together at the end. It seems to have done its job admirably.');
      } else {
        if (((st as any).sexcontra ?? 0) === 4  &&  ((st as any).preziktype ?? 0) === 0  &&  ((st as any).tabletkishot ?? 0) < 1  &&  ((st as any).pillcon2 ?? 0) < 30000) {
          scene.text('"Shit, I think the condom broke," Martin curses under his breath. A shiver runs through you as you realize that, despite your precautions, you could just have been impregnated after all.');
        } else {
          if (((st as any).sexcontra ?? 0) === 4  &&  (!((st as any).preziktype ?? 0))) {
            scene.text('"Shit, I think the condom broke," Martin curses under his breath.');
            scene.text('"Don\'t worry," you say with a comforting smile, "I\'m on the pill."');
          } else {
            if (((st as any).sexcontra ?? 0) === 5  &&  ((st as any).preziktype ?? 0) === 0  &&  ((st as any).tabletkishot ?? 0) < 1  &&  ((st as any).pillcon2 ?? 0) < 30000) {
              scene.text('"Shit, I think the condom slipped off," Martin curses under his breath. A shiver runs through you as you realize that you have an used condom stuck inside you and could just have been impregnated after all.');
            } else {
              if (((st as any).sexcontra ?? 0) === 5  &&  (!((st as any).preziktype ?? 0))) {
                scene.text('"Shit, I think the condom slipped off," Martin curses under his breath.');
                scene.text(`"Don't worry," you say with a comforting smile, "I'm on the pill." ${((st as any).OpenInnerThought ?? '')}Still need to get that condom out of my vagina though, ${((st as any).CloseInnerThought ?? '')} you think to yourself.`);
              } else {
                if (((st as any).sexcontra ?? 0) === 7) {
                  scene.text('"Shit, I think the condom broke," Martin curses under his breath.');
                  scene.text('"Don\'t worry," you say with a comforting smile, "I\'m on the pill." It was a blatant lie, of course - you poked those holes into the condom and no hormone would get in the way of that sperm.');
                  scene.text('Whether you\'d actually get pregnant, though, was a different question entirely.');
                }
              }
            }
          }
        }
      }
    } else {
      if (((st as any).martinpos ?? 0) === 'cowgirl'  ||  ((st as any).martinpos ?? 0) === 'rev_cowgirl') {
        scene.text('You shiver when you feel the trickle of sperm dripping down on Martin and running down your thigh. He really filled you up good.');
      } else {
        scene.text('With your pussy filled with cum, Martin gives you a self-satisfied smile, then withdraws. In an instant, you can feel his ejaculate gush out of your well-fucked hole. Martin seems transfixed with the sight.');
        scene.text('You look ' + ((((st as any).martinpos ?? 0) === 'missionary') ? ('up at him') : ('back at him')) + ' and roll your eyes in mock-exasperation. "What is it with men and your fascination with your own sperm?"');
        scene.text('"Just admiring my work, corazón, that\'s all," Martin replies and ' + ((((st as any).martinpos ?? 0) === 'missionary') ? ('gives you a kiss that silences any further response.') : ('gives your butt a resounding slap.')));
      }
      if (((st as any).tabletkishot ?? 0) < 1  &&  ((st as any).pillcon2 ?? 0) < 30000) {
        scene.text('Odds are that you just got yourself pregnant, but your brain is still too preoccupied with the ebbing ripples of the pleasure that you experienced until a few short moments ago to really register what consequences this could have.');
      }
    }
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('It takes a little while, but eventually, both of you (and the bar) are somewhat clean and dressed again. You\'re not being quiet about it, either: The two of you chat and exchange innuendos as you go, intimate as always.');
    if (((st as any).MartinPrezik ?? 0) === 1  &&  ((st as any).sexcontra ?? 0) !== 3) {
      scene.text('The whole condom situation did leave a little of a sour aftertaste, though. Sure, Martin tries not to show that he\'s worried but you can tell that he\'s not as easygoing as usual, and the thought of being pregnant crosses your mind a little more than usual too.');
    }
    scene.text('With a final kiss and smile, you part, leaving Martin to finish his business at the bar for the night.');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npc_relationship', 'modify', 'A216', 1);
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'arousal', 'end');
    (st as any).MartinPrezik = undefined;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } while (((st as any).pic_rand ?? 0) === ((st as any).pic_rand2 ?? 0));
  } },
  ]);
  scene.build();
}

function enterMartinAnalDyn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  (s as any).pic_rand = (Math.floor(Math.random() * 3) + 1);
  scene.img(`images/locations/city/industrial/bar/sex/bar/martin/anal/anal_fore${((s as any).pic_rand ?? '')}.jpg`);
  if (((s as any).cycle ?? 0) === 0  ||  ((s as any).MartinPussyLick ?? 0) === 1) {
    if ((!((s as any).cycle ?? 0))) {
      scene.text('Since you are on your period, regular sex would be a pretty messy option, so you do what any good girl who\'s not an anal virgin would for her lover:');
      scene.text('You give Martin an innocent smile and say, "I\'m on my period right now. Would you like to put your hard cock in my ass instead?"');
    } else {
      scene.text('Martin has taken such good care of your pussy that you feel like rewarding him… or are you really just rewarding yourself with different experience? No matter, what you tell Martin remains the same:');
      scene.text('You give Martin an innocent smile and say, "I think you deserve a special treat tonight. Would you like to put your hard cock in my ass?"');
    }
    scene.text('"Yes, a thousand times yes," he replies, smiling.');
    scene.text('Any other day, you\'d have him to work up to it, fuck your pussy first, let him \'earn\' anal, but you really want to feel him in your puckered hole right now.');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.text('Giving Martin a saucy look, you quickly strip down, completely exposing yourself to the bartender. Now that you\'re dressed for the occasion, nothing\'s standing between you and a night to remember.');
      qspCall(s, 'outfit', 'strip_all');
    } else {
      scene.text('And your little show earlier not only removed all possible obstacles but got you and your lover all hot and bothered.');
    }
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.text('You tell Martin to lay down and get on top of him, facing away from him, his dick tantalizingly close to your nether holes.');
    } else {
      scene.text(`You bend over, wiggling your ass invitingly and spreading your cheeks a little to give Martin a good look at the ${((s as any).pcs_ass_txt ?? '')} hole he is about to fill.`);
    }
  } else {
    if (((s as any).MartinSurpAnal ?? 0) === 1) {
      scene.text('Your change of heart is a little sudden, no doubt, but when you tell Martin that you want him to fuck your ass instead, he doesn\'t look unhappy about it. After all, what man would refuse an offer like that?');
    } else {
      scene.text(`With your ${(((s as any).pc_desc ?? 0)?.['pussy'] ?? '')} pussy thoroughly plowed, you moan: "I want your hard cock in my ass right now!"`);
      scene.text('"You and me both, corazón," Martin murmurs as he pulls out.');
    }
  }
  if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
    scene.text('You take Martin\'s cock and gently slap it against your ass cheeks a couple of times, enjoying how hard Martin is at the prospect of penetrating your ass.');
  } else {
    scene.text('Martin rubs his cock against your ass, obviously liking what he sees. He gives your ass a soft smack, eliciting a surprised yelp from you.');
  }
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    if (((s as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.text('You grab the lube from your bag and put a generous amount on your puckered hole, Martin\'s finger and your own hand. Your hand quickly finds Martin\'s penis and you immediately start coating it in lubricant.');
      scene.text('Martin is more teasing, first rubbing against your asshole for a while before pushing inside. You don\'t know if it\'s his experience or the way his finger or, after a minute, finger<b>s</b> feel, but you find your free hand wandering down to your pussy and stroking it absentmindedly, enjoying the sensations from your ass.');
      scene.text('If you were wet before, you are sopping wet now, quivering with excitement and more than ready to take a dick up your ass, or so you hope.');
      scene.text(`It just so happens that the ${((s as any).dick_girth ?? '')} dick you've been stroking is ready for penetration.`);
    } else {
      scene.text('You grab the lube from your bag and put a generous amount on your puckered hole, Martin\'s finger and your own hand. Your hand quickly finds Martin\'s penis and you immediately start coating it in lubricant. Martin is more teasing, first rubbing against your asshole for a while before pushing inside.');
      scene.text('After two or three minutes, you are content with how slick Martin\'s dick is, but he is still driving his finger, now joined by a second one, in and out of your anus, and you are enjoying the sensation. You don\'t even notice how one of your hands wanders down between your legs and starts rubbing your clit. You can hear yourself moan, and you\'re getting sopping wet…');
      scene.text('Your mind is still trying to catch up with how a little lubrication turned into foreplay while Martin seems pleased with himself, though. "You like it when I play with your ass, huh?"');
      scene.text('Suffice to say, your ass is ready for anything… or so you hope.');
    }
  } else {
    if (((s as any).pcs_ass ?? 0) >= ((s as any).dick ?? 0)) {
      scene.text('That\'s when you realize that neither of you have any lube handy.');
      scene.text('But honestly, you\'re not too worried. Your asshole has already seen a bit of dick (rubber or otherwise) and while Martin isn\'t exactly small and might not fit perfectly, he is not going to break you by any <i>stretch</i> of imagination.');
      scene.text('Feeling almost like a pornstar, you put a little spit on your fingers and rub it around your asshole and the tip of his dick.');
      scene.text('Martin seems to notice that you\'re not worried because within seconds, his spit-covered finger has taken your finger\'s place at and, after a few minutes of prodding, inside your rear entrance while you keep jerking his cock.');
      scene.text('His free hand isn\'t idle, though, reaching around to rub your tits and stroke your pussy as he prepares your asshole.');
      scene.text('You are definitely ready for him now.');
    } else {
      scene.text('That\'s when you realize that neither of you have any lube handy.');
      scene.text('That alone might not have been a problem, but even through the rose-tinted glasses of horniness, you realize that his dick may well be too big for your poor butthole.');
      scene.text(`But you don't let that frighten you and try to lubricate your ass and the tip of his ${((s as any).dick_girth ?? '')} cock with a little bit of spit.`);
      scene.text('Martin seems to notice that you\'re a little worried because he not only does his spit-covered finger take your finger\'s place at and, after a few minutes of careful prodding, inside your rear entrance, but he also reaches around you and strokes your pussy to help you relax.');
      scene.text('You are enjoying what he\'s doing so much that it takes a minute or so before you remember to stroke the dick in your hand, getting him nice and hard for what you are about to do.');
    }
  }
  (s as any).orgasm_txt = 'But that will have to wait another minute or two, because Martin\'s fingers seem to know exactly which way they have to bend inside your ass, touching you in all the right places, and he\'s not letting up. It certainly wasn\'t your intention to cum during foreplay but your intentions mean very little now: Your anal orgasm hits like a truck and while it lasts, your ass clenches so hard around Martin\'s fingers that you could swear you heard him sigh with relief when you finally release them.';
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    qspCall(s, 'arousal', 'anal_finger', 5, 'lube');
    qspCall(s, 'arousal', 'hj', (-3));
    qspCall(s, 'arousal', 'masturbate', (-5));
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
  } else {
    qspCall(s, 'arousal', 'anal_finger', 5);
    qspCall(s, 'arousal', 'hj', (-3));
    qspCall(s, 'arousal', 'foreplay', (-5));
  }
  qspCall(s, 'stat', '');
  (s as any).orgasm_txt = '';
  scene.actions([
    { label: 'Time for anal', handler: (st: GameState) => {
    (st as any).MartinPussyLick = undefined;
    (st as any).MartinSurpAnal = undefined;
    (st as any).pic_rand = (Math.floor(Math.random() * 2) + 1);
    if (((st as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.img(`images/locations/city/industrial/bar/sex/bar/martin/anal/anal_rev${((st as any).pic_rand ?? '')}.jpg`);
    } else {
      scene.img(`images/locations/city/industrial/bar/sex/bar/martin/anal/anal_doggy${((st as any).pic_rand ?? '')}.jpg`);
    }
    if (((st as any).martinpos ?? 0) === 'rev_cowgirl') {
      if (((st as any).anal_slip ?? 0) > 0) {
        scene.text('With lubrication taken care off, you lower yourself onto Martin\'s dick, teasingly rubbing and tapping its tip against your rosebud a few times before straightening your back and pushing down.');
        if (((st as any).pcs_ass ?? 0) < ((st as any).dick ?? 0)) {
          scene.text('It\'s still a tight fit though, lubed up or not, so once the tip of his cock has made it past your sphincter, you move more sideways than up and down at first. Sure, you could have gone full pornstar and tried to take his dick inside your ass in one fell swoop, but odds are that would have hurt. A lot.');
          scene.text('Instead, you wiggle to and fro, ever so gentle pushing against Martin and inching along his cock with your ass, then rising again, enjoying the tingling sensation of him sliding out and the knowledge that you are in control, pleasuring him and yourself with your ass, cooing softly as you go.');
          scene.text('It takes a while like this, but after a few minutes of slow up-and-down, your butt cheeks meet his pelvis for the first time and you feel wonderfully full. Martin\'s groan causes you to look back at him and you grin when you see the expression on his face: It is one of pure bliss. The bartender seems completely overwhelmed by the fact that a young, beautiful woman is riding his dick with her ass.');
          scene.text(`${((st as any).OpenInnerThought ?? '')}You ain't seen nothing yet${((st as any).CloseInnerThought ?? '')}, you think to yourself and lift yourself up. This time, however, you push down faster. Up again and, encouraged by the lack of pain the first time around, you slam your ass down, slapping against Martin's hips as you take him balls-deep.`);
        } else {
          scene.text('Truth be told, even without the lube your asshole would have been wide enough to accommodate Martin\'s dick, but with the lube, you don\'t have to hold back: Feeling like a pornstar, you take his cock inside your ass and, without pausing, keep lowering yourself until you feel his hips against your ass cheeks.');
          scene.text('You feel incredibly full, and a single look over the shoulder confirms that Martin is no less pleased: He is looking at where you are connected, spell-bound by the sight of his cock hilted in your ass.');
          scene.text(`${((st as any).OpenInnerThought ?? '')}You ain't seen nothing yet${((st as any).CloseInnerThought ?? '')}, you think to yourself and lift yourself up. This time, however, you push down faster. Up again and, encouraged by the lack of pain the first time around, you slam your ass down, slapping against Martin's hips as you take him balls-deep again.`);
        }
      } else {
        if (((st as any).pcs_ass ?? 0) >= ((st as any).dick ?? 0)) {
          scene.text('With your ass as prepared as it\'ll ever be tonight, you lower yourself onto his cock. You have to move carefully, given the lack of proper lubrication, but given your anal experience, his size really is a non-issue. All it takes is a little bit of time and moaning until his cock is completely inside your ass, your cheeks resting against Martin\'s pelvis.');
          scene.text('You feel incredibly full, and a single look over the shoulder confirms that Martin is no less pleased: He is looking at where you are connected, spell-bound by the sight of his cock hilted in your ass.');
          scene.text(`${((st as any).OpenInnerThought ?? '')}You ain't seen nothing yet${((st as any).CloseInnerThought ?? '')}, you think to yourself and lift yourself up. This time, however, you push down faster. Up again and, encouraged by the lack of pain the first time around, you slam your ass down, slapping against Martin's hips as you take him balls-deep again.`);
        } else {
          qspGoto(st, 'MartinSex2', 'PainalDyn');
        }
      }
      scene.text('The room is soon filled with the sound of slapping and moaning as you ride Martin, fucking your ass on his dick fast and loud, enjoying yourself thoroughly.');
      (st as any).orgasm_txt = 'Feeling Martin\'s cock inside your ass while you\'re riding him is wonderful. Not only does your backdoor feel full in all the right ways, but you are in control of it all, the goddess of Martin\'s small universe of lust, and if you willed it, he could go to bed with blue balls or dream of the biggest orgasm he\'s ever had. The heady combination of power and that perfect friction his cock provides as you slide your ass up and down its length proves too much for you and you cum, hard.';
      qspCall(st, 'arousal', 'anal', 5, 'dom');
      qspCall(st, 'stat', '');
      (st as any).orgasm_txt = '';
    } else {
      if (((st as any).anal_slip ?? 0) > 0) {
        scene.text('You are definitely done with foreplay and wiggle your ass invitingly as you look back at your lover. Martin looks like he wants to make a remark about your impatience, but you are having none of it.');
        scene.text('"Shut up and fuck my ass already," you say, huskily, and spread your ass cheeks for him.');
        scene.text('He knows better than to leave a lady waiting. Martin pulls his fingers out and, with lubrication taken care off, rubs his cock up and down your slit and asshole a few times, a final tease to emphasize his position behind and over you, before he starts pushing forward.');
        if (((st as any).pcs_ass ?? 0) < ((st as any).dick ?? 0)) {
          scene.text('It\'s a tight fit though, lubed up or not, and Martin seems very concerned with not hurting you, so once the tip of his cock has made it past your sphincter, his movements slow down to a crawl, giving you time to adjust to the foreign object in your ass.');
          scene.text('Grateful but also a little impatient as you are, you ignore the pain of being stretched out like that as best you can and ever so gently push back against Martin, meeting his tentative thrusts, inching along his cock with your ass a little farther each time. The sensation of him sliding in and out more than makes up for the pain, and knowing that he can do what he wants with you, that he could stop being gentle and start punishing your ass at a moment\'s notice to pleasure himself with your ass, really turns you on and causes you to coo softly as you go.');
          scene.text('It takes a few minutes at this pace, but you are eventually rewarded with feeling your butt cheeks meet his pelvis for the first time, and you feel wonderfully full. Martin\'s groan causes you to look back at him again and you shiver with excitement when you see his expression: On the surface, all you see is a small smile, but his eyes are smoldering, ignited by the fact that he is balls-deep inside a young, beautiful woman\'s ass.');
          scene.text('You know that the time for gentleness has passed. Indeed, Martin pulls back, but this time, he meets your ass with a resounding smack and a soft moan escapes you. Encouraged by these sounds, Martin withdraws again and hilts himself into your ass again, his balls smacking against your pussy as you meet him halfway.');
        } else {
          scene.text('Truth be told, even without the lube your asshole would have been wide enough to accommodate Martin\'s dick, but with the lube, you don\'t have to hold back: When Martin stops moving after penetrating you, you, feeling like a pornstar, push back, enjoying the groan you hear from him and moaning a little yourself; you keep pushing, though, until you feel his hips against your ass cheeks.');
          scene.text('Your ass feels incredibly full, and a single look over the shoulder confirms that Martin is no less pleased: He is looking at where you are connected, spell-bound by the sight of his cock deep inside your ass and probably no less amazed that you took him inside in a single, slow thrust.');
          scene.text('After a start like that, you know that the time for gentleness has passed. Indeed, Martin pulls back, but this time, he meets your ass with a resounding smack and a soft moan escapes you. Encouraged by these sounds, Martin withdraws again and hilts himself into your ass again, his balls smacking against your pussy as you meet him halfway.');
        }
      } else {
        if (((st as any).pcs_ass ?? 0) >= ((st as any).dick ?? 0)) {
          scene.text('As much as you enjoyed the foreplay, you are about ready to move on to the main course. With your ass as ready as it\'ll ever be tonight, you tell Martin to stop teasing you and fill your hole.');
          scene.text('Who is he to deny a lady\'s request?');
          scene.text('He moves carefully, acutely aware that your ass is quite dry, but after the tip of his cock overcomes your sphincter with surprising ease, all it takes is a little bit of time and moaning until his cock is completely inside your ass, your cheeks resting against Martin\'s pelvis.');
          scene.text('Your ass feels incredibly full, and a single look over the shoulder confirms that Martin is no less pleased: He is looking at where you are connected, spell-bound by the sight of his cock deep inside your ass and probably no less amazed that you took him inside in a single, slow thrust.');
          scene.text('After a start like that, you know that the time for gentleness has passed. Indeed, Martin pulls back, but this time, he meets your ass with a resounding smack and a soft moan escapes you. Encouraged by these sounds, Martin withdraws again and hilts himself into your ass again, his balls smacking against your pussy as you meet him halfway.');
        } else {
          qspGoto(st, 'MartinSex2', 'PainalDyn');
        }
      }
      scene.text('The room is soon filled with the sound of slapping and moaning as Martin fucks your ass hard; you give him a run for his money, though, meeting his thrusts and fucking yourself on his dick, completely giving in to pleasure.');
      (st as any).orgasm_txt = 'Feeling Martin\'s cock inside your ass while he fucks you from behind turns you on immensely. It\'s one thing to be dominated, but to be in such a submissive position while getting fucked up the ass multiplies that sensation, and it\'s enough to drive you over the edge, moaning like a slut all through the climax.';
      qspCall(st, 'arousal', 'anal', 5, 'lube', 'sub');
      qspCall(st, 'stat', '');
      (st as any).orgasm_txt = '';
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_txt = ((((st as any).dominance ?? 0) > 20) ? ('Wresting control from') : ('Submitting to')) + ' Martin and the intense feeling of him filling your ass drive you ever closer to the edge until you can no longer take it. You cum loudly, shivering all over' + ((((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) ? (' as your mind basks in your exhibitionist fantasy') : ('')) + ', your ass clenching around and massaging Martin\'s cock with its contractions as if it wanted to squeeze the cum out of him as' + ((((st as any).martinpos ?? 0) === 'doggystyle') ? (' he fucks you') : (' you fuck him')) + '. Your anal orgasm lasts for what feels like an eternity, but when it has passed and you look back at him, Martin gives you a smug, self-satisfied look that makes you chuckle. You\'re not done with each other yet, though, and before long, you\'ve resumed your fast, hard rhythm.';
    if (((st as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/anal/anal_rev.mp4');
      scene.text('It amazes you how different anal sex feels from regular sex. Some people may find it disgusting or painful, but when your brain is wired up just right, it can be intense and oh-so-satisfying.');
      scene.text('The wonderful feeling of being on top, of deciding how and when you take that huge dick up your ass, adds to that sensation and you are losing yourself in the moment, not holding back a single loud moan, impaling yourself on Martin over and over and enjoying it thoroughly.');
      scene.text('Suddenly, you feel Martin\'s hands on your hips, and notice that he is using his newfound leverage to meet you with more force, thrusting up into your ass.');
      scene.text('You originally decided on this position because you wanted to be in control, wanted to be on top… but you cannot say that you really mind him taking a more active role in this.');
      scene.text(`Sensing no resistance, Martin tightens his grip and starts moving, pounding up into your ${(((st as any).pc_desc ?? 0)?.['anus'] ?? '')} ass, his balls slapping against your pussy lips every time. You can do little more than hold on for dear life, moving to meet him a little bit and moaning like a slut.`);
      scene.text('Being fucked from below, your lover proving that he is still the man of the house turns you on, plain and simple, and the fact that you are doing it in the middle of an empty bar, <b>his</b> empty bar, just makes it more exciting.');
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
        scene.text('This final thought, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to take the bartender\'s cock up your ass right here in the center, with all of their eyes on you…');
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      }
      qspCall(st, 'arousal', 'anal', 10);
    } else {
      scene.img('images/locations/city/industrial/bar/sex/bar/martin/anal/anal_doggy.mp4');
      scene.text('It amazes you how different anal sex feels from regular sex. Some people may find it disgusting or painful, but when your brain is wired up just right, it can be intense and oh-so-satisfying.');
      scene.text('Being bent over, having your strong, experienced lover stuff your asshole with his huge dick gives you a sense of helplessness that adds to that sensation, and you find yourself lost in the moment, not holding back a single loud moan, Martin filling your ass over and over and enjoying it thoroughly.');
      scene.text('Suddenly, you feel Martin\'s hand leave your hip and move up, up your back and grabbing you by the ' + ((((st as any).pcs_hairlng ?? 0) > 81) ? ('hair') : ('neck')) + ', thrusting into your ass with more force, hellbent on making you feel like his bitch.');
      scene.text('And, honestly, you love it. The way he grabs you doesn\'t really hurt, but something about it feels primal, a gesture and show of dominance that proves Martin to be a real man who will take what he wants, and your pussy and ass are tingling at that thought.');
      scene.text('As he fucks you, Martin tightens his grip on your ' + ((((st as any).pcs_hairlng ?? 0) > 81) ? ('hair') : ('neck')) + ' and growls: "Look at me." You don\'t really have a choice, so you turn your head submissively, looking over your shoulder. "What am I doing right now?" He asks.');
      scene.text('"You\'re fucking me," you moan, aroused by the power he has over you. "You\'re fucking my ass in the middle of your bar." As you say it, you are reminded of how public of a place this really is, despite being empty, and that alone is almost enough to make you cum.');
      if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  qspFunc(s, 'fetish', 'get_pref', 'exhibitionism') > 50) {
        scene.text('That final thought, and the memories of your previous exhibitionist acts manifest themselves in a small fantasy: You imagine what it would be like if the bar wasn\'t empty but bustling with people, what it might be like to take the bartender\'s cock up your ass right here in the center, with all of their eyes on you…');
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      }
      qspCall(st, 'arousal', 'anal', 10, 'sub');
    }
    scene.text('But nobody, not even your Latin lover, can resist the tightness of your ass forever, especially not when you two are fucking like rabbits, and when you sense a change in his movements, you know that he\'s very close to coming.');
    qspCall(st, 'stat', '');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Let him cum in your mouth', goto: ['MartinSex2', 'MartinCumshot_Mouth'] },
      { label: 'Let him cum on your face', goto: ['MartinSex2', 'MartinCumshot_Face'] },
      { label: 'Let him cum on your tits', goto: ['MartinSex2', 'MartinCumshot_Tits'] },
      { label: 'Let him cum in your ass', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_anal.jpg');
    scene.text('You could have taken his cum anywhere you wanted but, really, you have him right where you want him - deep inside your ass.');
    scene.text('You speed up your movements even more, panting "Cum for me, baby! Cum in my ass!" between thrusts. Your horny plea is too much for Martin and, with a final moan, he cums, shooting his load deep into your bowels.');
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    (st as any).orgasm_txt = 'The feeling of Martin\'s hot cum in your ass finally pushes you over the edge, turning your moans into screams as you twitch and contract around his hard cock, milking him dry with your tight hole.';
    qspCall(st, 'arousal', 'anal', 1);
    (st as any).orgasm_txt = '';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', goto: ['MartinSex2', 'MartinCleanup'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPainalDyn(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/anal/painal1.mp4');
  scene.text('Feeling as brave and well-lubricated as spit can ever make you, you grab Martin\'s cock, hold it against your anus and push against it.');
  scene.text('Unfortunately, anal with Martin is not as easy as slipping his dick inside your pussy. The more you try to put his dick in, the more it hurts. Your ass is obviously a little too tight and Martin must realize that too when more than one attempt at penetration results in you pulling away again.');
  scene.text('You could probably force it inside, but without lube, that\'s bound to be painful…');
  scene.text('Maybe you could finish Martin off with your mouth instead, if you\'re not feeling too horny or adventurous anymore tonight.');
  scene.text('Or… well, maybe you don\'t want to continue at all?');
  scene.actions([
    { label: 'Force his dick inside your ass', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/anal/painal2.mp4');
    if (((st as any).martinpos ?? 0) === 'rev_cowgirl') {
      scene.text('No, you don\'t want to quit, not now. Maybe it\'s because of the position you\'re in, just a bad angle for penetration, right? You climb off Martin and bend over in front of him. When you look back at him to give him an inviting look, you do feel a little intimidated by his size, though…');
      scene.text('Maybe this wasn\'t such a good idea after all?');
    }
    scene.text(((((st as any).martinpos ?? 0) === 'rev_cowgirl') ? ('But f') : ('F')) + `eeling both stubborn and horny, you think ${((st as any).OpenInnerThought ?? '')}fuck it, I can do this${((st as any).CloseInnerThought ?? '')}, literally, anally.`);
    scene.text('Trying to help move things along with a little more spit, you push against Martin\'s cock once more, ignoring the unpleasant sensations that go with it. You succeed, too: His cock slips inside your asshole.');
    if (qspFunc(s, 'fetish', 'get_pref', 'maso') >= 60) {
      scene.text('The only problem is that your butthole feels like somebody has given it the sandpaper treatment. It genuinely hurts and itches, but it\'s the pain, of all things, that makes you want to continue.');
      scene.text('You are slightly startled when you feel Martin\'s hand on your shoulder. You realize only now that you were muttering "Ow" under your breath over and over again.');
      scene.text('You know he is ready to stop, notice the concerned look he gives you when you look back at him, but you want more, more degradation, more pain, more of it all, because in ways you cannot fully understand, those very things are exciting you.');
      scene.text('So when Martin tries to pull back and out, you move with him, against him, keeping him from slipping out.');
      scene.text('"You really like it when it hurts, do you?"');
      scene.text('You don\'t answer him directly. You just keep moving your bottom back and forth along his cock, both dreading and savoring every bit of pain along the way.');
      scene.text('Well, most of it, anyway.');
      (st as any).orgasm_txt = 'no';
      qspCall(st, 'arousal', 'anal', 3, 'maso');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/bar/martin/anal/painal3.mp4');
    scene.text(`But as patient as Martin has proven so far, you eventually push him too far, your ${(((st as any).pc_desc ?? 0)?.['anus'] ?? '')} asshole too snug and arousing around him for him to stay idle.`);
    scene.text('Your lover starts moving on his own. At first, he is gentle, careful, only adding a tiny bit of extra sensation to your mutual experience, but with ever stroke, he loses his inhibitions and turns more and more into an animal, possessed by the need to destroy your ass and fill it with cum.');
    scene.text(`But he's not being inconsiderate: As soon as his pace quickens, he reaches around to your pussy, rubbing your clit as he drills your ${(((st as any).pc_desc ?? 0)?.['anus'] ?? '')} asshole, adding a more familiar note of lust to the sharp pain from your butt.`);
    scene.text('The conflicting sensations rack you, hurting and arousing and bewildering all at once.');
    scene.text('You cannot tell how long this maelstrom tosses to and fro, the pain getting stronger the longer you keep going. All you know is that, eventually, Martin hammers his cock into your ass with abandon and finally, loudly, fills your bowels with his sperm.');
    (st as any).orgasm_txt = 'Even though you were enjoying the pain, you didn\'t think you would actually orgasm. But the feeling of Martin\'s hot cum in your ass seems to flip a switch inside you, setting all the nerves in your ass on edge and flooding your brain with pleasure. You cum, your yelps of pain mixing with moans of pleasure as your mind goes blank.';
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'masturbate', 5);
    qspCall(st, 'arousal', 'anal', (-5), 'maso');
    (st as any).orgasm_txt = '';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get cleaned up', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('Now that it\'s over, you are starting to think that you\'re going to regret this.');
    scene.text('It takes a little while, but eventually, both of you (and the bar) are somewhat clean and dressed again, though it really hurts as you put on your panties and pants. You try to chat and exchange innuendos as always, and you really make it as obvious as you can that you liked what Martin did, that you enjoyed it… but you\'re not sure he can truly believe that when you wince every now and again, gingerly rubbing your butt and moving extra slow and careful to avoid any unnecessary pain.');
    scene.text('With a final kiss and \'see you soon\', you part, leaving Martin to finish his business at the bar for the night, sure that you\'ll be walking funny and having trouble sitting for a couple of days at least.');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npc_relationship', 'modify', 'A216', 1);
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('The only problem is that your butthole feels like somebody has given it the sandpaper treatment. It genuinely hurts and itches, and even though you really wanted to have anal sex with Martin a minute, you are not feeling in a super sexy mood anymore.');
      scene.text('You are slightly startled when you feel Martin\'s hand on your shoulder. You realize only now that you were muttering "Ow" under your breath over and over again.');
      scene.text('You give your lover an awkward look, but he doesn\'t say anything. He moves back slightly, withdrawing from your ass, and hugs you.');
      scene.text('His questions - "Do you need anything?", "Does it hurt much?" et cetera - only make you feel more awkward, but his genuine worry is endearing.');
      scene.text('After a few minutes, you say: "I\'m sorry I killed the mood. I could take care of you though."');
      scene.text('But he just shakes his head. "Don\'t worry about me, mi amor. I\'m fine. Let\'s get you cleaned, shall we?"');
      scene.text('You wonder if he\'s trying to be chivalrous, but he doesn\'t seem sulky or annoyed, not even disappointed about how this attempt at anal sex ended with him getting blue-balled. Either he is genuinely not feeling any of that or he is extremely good at hiding it; choosing to believe the former, you let Martin help you to your feet.');
      (st as any).minut = ((st as any).minut ?? 0) + 4;
      qspCall(st, 'pain', '2', 'asshole', 'tear');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (30);
      scene.actions([
        { label: 'Get cleaned up', goto: ['MartinSex2', 'MartinCleanup'] },
      ]);
    }
  } },
    { label: 'Get him off with your mouth', handler: (st: GameState) => {
    (st as any).MartinSexStop = 1;
  }, goto: ['MartinSex3', 'MartinBlowjob'] },
    { label: 'Stop and get dressed', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
    scene.text('It\'s strange how things go sometimes: One moment you are about to have your ass fucked, the next you are on your feet, collecting your clothes and putting them on. The thoughts that crossed your mind had killed the mood in an instant, even if your horniness is unchanged.');
    scene.text('Martin is completely baffled by your sudden change of heart, standing there as he is, naked and with a raging hard-on. "What\'s wrong, mi amor?"');
    scene.text('"I\'m sorry, I can\'t today," you say evasively.');
    scene.text('"Was it something I did?" His concern seems genuine but just about any man in his situation would try to save this situation.');
    scene.text('"No, it\'s not your fault," you reassure Martin, "I just… I remembered that I have to go, okay?"');
    scene.text('He doesn\'t seem convinced by your answer but faced with how urgently you are getting ready to leave, he only gives a sigh and nods.');
    scene.text('You feel bad for him - after all, you wouldn\'t exactly feel much better than him if he had just walked out on you in the middle of sex - but your mind is made up, so you give him a small consolation in the form of a tender little kiss and a whispered "see you soon" before you leave him to himself, regret and arousal haunting your every step.');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npc_relationship', 'modify', 'A216', (-1));
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMartinCumshot_Mouth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_mouth.mp4');
  if (((s as any).martinpos ?? 0) !== 'MartinBlowjob_dressed'  ||  ((s as any).martinpos ?? 0) !== 'MartinBlowjob_undressed') {
    scene.text('You quickly move off Martin\'s cock and get on your knees in front of him, taking his dick into your mouth and savoring the taste of yourself on your man as you get him off.');
  }
  scene.text('For a moment, you think about saying something dirty, like verbally asking him to cum in your mouth, but by the time this thought has manifested, Martin has already pulled out and complied with it, shooting his hot sperm into your open, waiting mouth.');
  scene.text('You wait like this for the second and third spurt, but then you take him right back into your mouth, sucking and licking him through his orgasm.');
  (s as any).orgasm_txt = 'The taste of Martin\'s hot cum on your tongue finally pushes you over the edge, causing you to moan around his cock as you keep pleasing him, both him and you completely taken off-guard by your oral orgasm.';
  qspCall(s, 'arousal', 'bj', 1);
  scene.text('When his ' + (((!((s as any).pcs_horny ?? 0))) ? ('and your orgasm have') : ('orgasm has')) + ' subsided, you release his softening dick from your mouth once more and show Martin his jizz on your tongue before swallowing it' + ((((s as any).trait_vars ?? 0)?.['cumeater'] === 1) ? (', savouring the taste you come to love as the thick liquid goes down your throat') : (' reluctantly, knowing that men love it when women do that')) + '. The smile he gives you as you show him your clean tongue is simply priceless.');
  (s as any).orgasm_txt = '';
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (5);
  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
  scene.actions([
    { label: 'Get cleaned up', goto: ['MartinSex2', 'MartinCleanup'] },
  ]);
  scene.build();
}

function enterMartinCumshot_Face(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_facial.mp4');
  if (((s as any).martinpos ?? 0) !== 'MartinBlowjob_dressed'  ||  ((s as any).martinpos ?? 0) !== 'MartinBlowjob_undressed') {
    scene.text('You quickly move off Martin\'s cock and get on your knees in front of him, taking his dick into your mouth and savoring the taste of yourself on your man as you help him finish.');
  }
  scene.text('He pulls out, about ready for the moneyshot.');
  scene.text('For a moment, you think about saying something dirty, like asking him to cum all over your face, but by the time this thought has manifested, Martin has already complied with it, shooting his hot sperm all over your cheek and forehead. You flinch a little, screwing your eyes shut as you feel his spurt hit you right at the corner of one of them, but you are acutely aware of how hot it feels, literally and figuratively, to have Martin\'s sperm run down your face.');
  scene.text('It takes a moment or three until Martin stops painting your face white, but when you tentatively open your eyes, you are met with a smile of self-satisfaction and adoration.');
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.actions([
    { label: 'Get cleaned up', goto: ['MartinSex2', 'MartinCleanup'] },
  ]);
  scene.build();
}

function enterMartinCumshot_Tits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A216');
  scene.img('images/locations/city/industrial/bar/sex/bar/martin/cumshot/cum_tits.mp4');
  if (((s as any).martinpos ?? 0) !== 'MartinBlowjob_dressed'  ||  ((s as any).martinpos ?? 0) !== 'MartinBlowjob_undressed') {
    scene.text('You quickly move off Martin\'s cock and get on your knees in front of him, stroking his dick as you point it at your bust and savoring the expression of bliss on your man\'s face.');
  }
  scene.text('"Go ahead", you whisper in your sultriest voice, "Cum all over my tits, baby."');
  scene.text('That\'s all the invitation Martin needs: With a final moan, the first hot jet of cum hits your breasts, soon followed by another, and another. By the time his cock stops twitching, your breast and chin are covered in sperm. Cleaning up is gonna take a while, but with a single look at Martin and the satisfied boyish grin the sight of you puts on his face, you know that it\'s worth it.');
  qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
  scene.actions([
    { label: 'Get cleaned up', goto: ['MartinSex2', 'MartinCleanup'] },
  ]);
  scene.build();
}

function enterMartinCleanup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/gettingdressed.mp4');
  scene.text('It takes a little while, but eventually, both of you (and the bar) are somewhat clean and dressed again. You\'re not being quiet about it, either: The two of you chat and exchange innuendos as you go, intimate as always.');
  scene.text('With a final kiss and smile, you part, leaving Martin to finish his business at the bar for the night.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A216', 1);
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave the bar', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'MartinSexPrep':
      enterMartinSexPrep(s, scene);
      break;
    case 'MartinSexDyn':
      enterMartinSexDyn(s, scene);
      break;
    case 'MartinAnalDyn':
      enterMartinAnalDyn(s, scene);
      break;
    case 'PainalDyn':
      enterPainalDyn(s, scene);
      break;
    case 'MartinCumshot_Mouth':
      enterMartinCumshot_Mouth(s, scene);
      break;
    case 'MartinCumshot_Face':
      enterMartinCumshot_Face(s, scene);
      break;
    case 'MartinCumshot_Tits':
      enterMartinCumshot_Tits(s, scene);
      break;
    case 'MartinCleanup':
      enterMartinCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MartinSex2: LocationDef = {
  name: 'MartinSex2',
  title: 'With your pussy thoroughly eaten out, you wet and ready for ',
  region: 'other',
  enter: enter,
};
