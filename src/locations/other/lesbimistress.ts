import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mistressqwest ?? 0) > 12) {
    scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'gholefinish'] }]);
  } else {
    if (((s as any).mistressqwest ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'gholepunish'] }]);
    }
  }
  if (((s as any).mistresscontract ?? 0) <= ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'renewal'] }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/mistress.jpg');
    scene.text('Mistress looks at you expectantly and you look at her. You feel like it\'s a personal thing, that you\'re her inanimate sex-plaything, with which she is entitled to do whatever she pleases.');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub45.jpg');
    scene.text('You quickly remove your clothes and, as befits a well-bred slave, pose completely still in front of your mistress.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    if (((s as any).daystart ?? 0) > ((s as any).lesbiday ?? 0) + 7) {
      (s as any).lesbiday = ((s as any).daystart ?? 0);
      qspCall(s, 'sweat', 'add', 20);
      (s as any).spanked = 3;
      qspCall(s, 'mood', 'lower', 'min');
      qspCall(s, 'arousal', 'foreplay', 40, 'sub', 'maso');
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/natalya/sex/sub43.jpg');
      scene.text('Mistress stares at you blankly. "Get in position for a spanking, slave. I\'m going to teach you some manners!"');
      scene.text('She spends half an hour spanking you, occasionally commenting through gritted teeth about your bad behavior and lack of devotion. Once she finishes, she forces you to quickly get dressed before throwing you out the door.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      ]);
    } else {
      (s as any).lesbiday = ((s as any).daystart ?? 0);
      if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 0  &&  ((((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) < 300  &&  ((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) > 200)  ||  ((s as any).mistresscontract ?? 0) - ((s as any).daystart ?? 0) < 120)) {
        scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'BDSMEV'] }]);
      }
      if (((s as any).MistressObedience ?? 0) === 1) {
        if (100 - (Math.floor(Math.random() * 51) + 0) < ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          (s as any).MistressObedience = 2;
        }
      } else {
        if (((s as any).MistressObedience ?? 0) === 2) {
          if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
            (s as any).MistressObedience = 1;
          } else {
            if (100 - (Math.floor(Math.random() * 51) + 0) < ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
              (s as any).MistressObedience = 3;
            }
          }
        } else {
          if (((s as any).MistressObedience ?? 0) === 3) {
            if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
              (s as any).MistressObedience = 2;
            } else {
              if (100 - (Math.floor(Math.random() * 51) + 0) < ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                (s as any).MistressObedience = 4;
              }
            }
          } else {
            if (((s as any).MistressObedience ?? 0) === 4) {
              if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                (s as any).MistressObedience = 3;
              } else {
                if (100 - (Math.floor(Math.random() * 51) + 0) < ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  (s as any).MistressObedience = 5;
                }
              }
            } else {
              if (((s as any).MistressObedience ?? 0) === 5) {
                if ((Math.floor(Math.random() * 51) + 0) > ((s as any).MistressAdoration ?? 0)  &&  (!(Math.floor(Math.random() * 3) + 0))) {
                  (s as any).MistressObedience = 4;
                }
              }
            }
          }
        }
      }
      if (((s as any).MistressObedience ?? 0) <= 1) {
        // TODO-QSP: :mistsevere
        (s as any).i = Math.floor(Math.random() * 4) + 1;
        if (((s as any).mistsevere ?? 0)?.[String((s as any).i ?? 0)] === 1) {
          // TODO-QSP: jump 'mistsevere'
        }
        ((s as any).mistsevere ?? {})[String((s as any).i ?? 0)] = 1;
        scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'severe_<<i>>'] }]);
      } else {
        if (((s as any).MistressObedience ?? 0) === 2) {
          // TODO-QSP: :mistpunish
          (s as any).i = Math.floor(Math.random() * 6) + 1;
          if (((s as any).mistpunish ?? 0)?.[String((s as any).i ?? 0)] === 1) {
            // TODO-QSP: jump 'mistpunish'
          }
          ((s as any).mistpunish ?? {})[String((s as any).i ?? 0)] = 1;
          scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'punish_<<i>>'] }]);
        } else {
          if (((s as any).MistressObedience ?? 0) === 3) {
            // TODO-QSP: :mistneutral
            (s as any).i = Math.floor(Math.random() * 9) + 1;
            if (((s as any).mistneutral ?? 0)?.[String((s as any).i ?? 0)] === 1) {
              // TODO-QSP: jump 'mistneutral'
            }
            ((s as any).mistneutral ?? {})[String((s as any).i ?? 0)] = 1;
            scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'neutral_<<i>>'] }]);
          } else {
            if (((s as any).MistressObedience ?? 0) === 4) {
              // TODO-QSP: :misttreat
              (s as any).i = Math.floor(Math.random() * 4) + 1;
              if (((s as any).misttreat ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                // TODO-QSP: jump 'misttreat'
              }
              ((s as any).misttreat ?? {})[String((s as any).i ?? 0)] = 1;
              scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'treat_<<i>>'] }]);
            } else {
              if (((s as any).MistressObedience ?? 0) >= 5) {
                // TODO-QSP: :mistamazing
                (s as any).i = Math.floor(Math.random() * 3) + 1;
                if (((s as any).mistamazing ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                  // TODO-QSP: jump 'mistamazing'
                }
                ((s as any).mistamazing ?? {})[String((s as any).i ?? 0)] = 1;
                scene.actions([{ label: 'Continue', goto: ['lesbimistress', 'amazing_<<i>>'] }]);
              }
            }
          }
        }
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGholefinish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (2);
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('It\'s been a while since you went to see Mistress, but you finally serviced twelve cocks in the gloryhole like she demanded. You nervously step through the doorway, and find Mistress already waiting for you by the entrance.');
  scene.text('You meekly smile at her. "I umm… I did as you asked, Mistress…"');
  scene.text('"I know," she smiles proudly at you before laughing at your surprised expression. "What? You thought I wouldn\'t keep tabs on my precious slave?"');
  scene.text('She looks dreamily at you for a second. "Peter told me all about you. You\'re such a good girl!" she beams at you. "Come on, why don\'t you show your Mistress how much you love her?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show her', handler: (st: GameState) => {
    (s as any).mistressqwest = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub13.jpg');
    scene.text('You immediately drop to your knees and crawl towards Mistress. "Mistress, may I please lick your pussy to show you how much I love you?"');
    scene.text('She smiles sweetly at you and hikes up her skirt. "Yes you may, darling."');
    scene.text('Her pussy is soaked, and you eagerly service Mistress, who orgasms in no time at all before pushing you away.');
    scene.text('"You haven\'t lost your touch. That was amazing!" she gasps. "You may go now slave, but do come back soon. I have a lot of fun things planned for you!"');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGholepunish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (3);
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('Mistress looks surprised to see you when she opens the door, but allows you to enter. She raises her eyebrow. "Did you do what I asked?"');
  scene.text('You can\'t lie to your Mistress. You shake your head apologetically while you look at the ground, not daring to look her in the eye. "No, Mistress…" you whisper.');
  scene.text('She puts her hand under your chin and makes you look up, locking her piercing gaze onto your eyes. "Was I not clear?!" she snarls. "Why are you here, slave?"');
  scene.text('"I\'m sorry Mistress, I wi-" you sniffle, tears forming in your eyes.');
  scene.text('"You stupid whore!" she shouts and slaps you in the face. "I told you not to come back until you suck twelve cocks! Take off your damn clothes! I\'ll teach you a lesson you\'ll never forget!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'min');
    (s as any).pcs_health = 20;
    (s as any).spanked = ((s as any).spanked ?? 0) + (3);
    (s as any).spankedtime = ((s as any).totminut ?? 0);
    (s as any).fingal = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub44.jpg');
    scene.text('Mistress hasn\'t even lifted a finger yet, and you\'re already crying.');
    scene.text('Once you take off your clothes, Mistress grabs you roughly by the hair and throws you down on the floor, where she begins to whip you with a belt.');
    scene.text('She\'s not holding back at all. She keeps beating you, besides herself with rage as she mutters through her teeth about obedience and how she thought you were better than this.');
    scene.text('After half an hour, she\'s finally too tired to continue and tells you to get up.');
    scene.text('You\'ve been crying and screaming this whole time, and feel exhausted. Nevertheless, you try to get up to your feet as quickly as you can despite your shaky legs, and don\'t object when Mistress grabs you by the hair again and guides you back to the front door.');
    scene.text('"Get dressed and get out! Your assignment still stands. Do not disappoint me again!"');
    scene.text('Mistress walks off before you can say anything. You wallow in self-pity while you carefully put your clothes back on, wincing whenever the fabric touches one of the countless welts on your body.');
    qspCall(s, 'arousal', 'foreplay', 40, 'sub', 'maso');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSevere_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistsevere ?? {})[1] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 150;
  qspCall(s, 'mood', 'lower', 'min');
  if (((s as any).pcs_vag ?? 0) < 10) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    (s as any).vgape = 3;
    (s as any).pcs_horny = 0;
  } else {
    if (((s as any).pcs_vag ?? 0) < 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 3);
      (s as any).vgape = 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 20);
    } else {
      if (((s as any).pcs_vag ?? 0) < 30) {
        qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
        (s as any).vgape = 1;
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 31) + 20);
      }
    }
  }
  (s as any).MistressObedience = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub61.jpg');
  scene.text('Mistress orders you to lie down on the dining table as she pulls out some rope.');
  scene.text('She smiles at you as she skillfully binds you to the table, creating knots that many a professional would be jealous of. "I think you would make for a pretty vase."');
  scene.text('"A vase, Mistress?" you ask, unsure how that would work. Mistress is already coating a smooth vase with some lubricant while you ask.');
  scene.text('"Vases don\'t talk, slave. Don\'t make me gag you!"');
  scene.text('You catch yourself right before apologizing, and simply nod instead before Mistress gently inserts the vase inside your pussy, causing you to groan.');
  scene.text('Once the vase is firmly lodged in you, Mistress puts the flowers back in and happily nods.');
  if (((s as any).mistressknowfoto ?? 0) === 1) {
    scene.text('About an hour later, the doorbell rings and you hear voices coming from the hallway. "Really, Natalya? I know I asked you for those collars, but why did you insist I come pick them up right now? I was in the middle of something!"');
    scene.text('"Sorry. Please wait in the living room while I go fetch them for you, okay?" you hear Mistress respond.');
    scene.text('"Whatever. You\'re being weird," her friend replies.');
    scene.text('You see Masha enter the living room, who lets out an exasperated gasp, but nonetheless comes closer to inspect you. "Damn Natalya, bragging every chance she gets…" she mutters.');
    scene.text('You see her eyes widen even further when she seems to recognize you. "Wait, aren\'t you…"');
    scene.text('"Erm… Hello Madam…" you mutter.');
    scene.text('"Vases don\'t talk, slave!" she says dismissively, but keeps admiring your body.');
    scene.text('"I have them right here, Masha!" Mistress says as she enters the room with a paper bag in her hand. "Oh. I see you\'re admiring my vase?" she adds innocently.');
    scene.text('Masha can\'t help but laugh. "We all know you have a photo model for a slave, Natalya. No need to keep rubbing it in! Still, she looks lovely. Would you consider lending her to me at some point?"');
    scene.text('"I don\'t know, Masha…" Mistress replies. "I\'ve never shared my slave before. Maybe you can come over at some point, and we can enjoy her together? You know, to ease into that sort of thing?"');
    scene.text('"It\'s a date!" Masha laughs. "I\'d love to get my hands on her! Anyway, I really have to go. Thanks for these. Bye, slave!"');
    scene.text('After Mistress sees her friend out, she comes over and kisses your forehead. "Masha wants you so badly! She is so jealous! I have to think about her proposal, though…"');
    scene.text('She then returns to what she was doing, leaving you alone to think about what just happened.');
  }
  // TODO-QSP: nl
  scene.text('After you\'ve been bound for about two hours, Mistress comes back and carefully takes the vase out of your stretched pussy. She caresses it for a moment before untying you.');
  // TODO-QSP: dynamic text: "You looked beautiful, <<$pcs_nickname>>. I have the pictures to prove it," she ...
  scene.text(`"You looked beautiful, ${((s as any).pcs_nickname ?? 0)}. I have the pictures to prove it," she winks, indicating that you can go now.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed and leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterSevere_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistsevere ?? {})[2] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_ass ?? 0) < 10) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 4);
    (s as any).agape = 3;
  } else {
    if (((s as any).pcs_ass ?? 0) < 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
      (s as any).agape = 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    } else {
      if (((s as any).pcs_ass ?? 0) < 30) {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
        (s as any).agape = 1;
        (s as any).pcs_horny = 0;
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub68.jpg');
  scene.text('Mistress looks bored as you undress. You can tell she\'s not particularly in the mood to see you today.');
  scene.text('"Do you like my pedicure, slave?" she asks sternly.');
  scene.text('"It looks very nice, Mistress," you compliment her. "Your feet look lovely too."');
  scene.text('Mistress smiles deviously as soon as you mention it. "My feet, hmm? Excellent idea, slave!"');
  scene.text('She walks over to the living room, kicking off her heeled sandals on the way before she lets herself fall back onto the couch with an exhausted sigh, and raises one of her feet to your mouth.');
  scene.text('"Get on your back and service it, slave!" she orders. You wordlessly take her foot in your hands and guide it to your mouth, licking her foot tenderly and sucking on her toes. After a while, she changes foot and guides the foot you were licking before to your anus.');
  scene.text('She insistently wiggles her toe against your puckered sphincter, until it gives way and allows the intruder in. You groan as she keeps wiggling her foot around, feeling your anus stretch as Mistress attempts to shove more and more of her foot up your ass.');
  scene.text('You immediately begin to coat her other foot with saliva, knowing she\'s probably going to want to change it up a few times. Minutes later she does indeed. Even though it doesn\'t help much, it still feels a little less painful.');
  scene.text('Half an hour later, Mistress pulls her foot out and smirks at your widely gaping hole. You wince when she tests how far she can stretch it open with two fingers.');
  scene.text('"That\'s one well trained hole," she nods, satisfied with her own work. "You may now thank me for training you, slave. Make it quick, I don\'t have all day."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank her with your mouth', handler: (st: GameState) => {
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub74.jpg');
    scene.text('"Thank you, Mistress," you mutter meekly. You wince as you get up from the footstool.');
    scene.text('Mistress spreads her legs and grabs a magazine, scanning some of the articles in it. Meanwhile, you bite your lip and move your head to her crotch.');
    scene.text('You start dutifully licking her pussy, hoping to provoke a reaction from her. You slide two fingers into her pussy and teasingly massage her as you work away at her clit.');
    scene.text('Mistress tries to stay quiet, but within minutes you can hear some soft moans coming from behind the magazine. With a knowing smile, you double your efforts, and Mistress throws away the magazine in frustration and starts grinding your face against her pussy.');
    scene.text('"That\'s it, slave! Lick it! Make me cum!" she groans, and shakes violently when she orgasms. With a satisfied smile, she waves you off, indicating that you may leave.');
    scene.text('"Yes, Mistress. Thank you, Mistress…" you mutter before you walk away.');
    qspCall(s, 'arousal', 'cuni_give', 20, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSevere_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistsevere ?? {})[3] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).pcs_ass ?? 0) < 10) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 4);
    (s as any).agape = 3;
  } else {
    if (((s as any).pcs_ass ?? 0) < 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
      (s as any).agape = 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    } else {
      if (((s as any).pcs_ass ?? 0) < 30) {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
        (s as any).agape = 1;
        (s as any).pcs_horny = 0;
      }
    }
  }
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub71.jpg');
  scene.text('Mistress looks at you intently while holding a Magic Wand in her hand. "Do you know what this is, slave?"');
  scene.text('"Erm, a muscle massager?" you suggest. What you would give to see Mistress use that on herself…');
  scene.text('She laughs. "Technically true. In fact, I\'m going to use it on one muscle in particular today. Lean against the wall."');
  scene.text('You turn around and lean against the wall. "Any idea yet which muscle I was talking about, slave?" she asks sharply.');
  scene.text('"My anus, Mistress…" you reply with some defeat in your voice.');
  scene.text('"Correct," she smiles. "I\'ve never used it on someone\'s ass before and I want to see if it works. Who better to try on than you?"');
  scene.text('Over the next hour, Mistress teases your anus with the wand, and slowly prepares you with her fingers. Towards the end, she\'s confident that it will go in and sure enough, it does. She turns it on, on a slow setting.');
  scene.text('"And?" she asks, genuinely curious.');
  scene.text('You give it some thought. "Working it in felt okay, Mistress," you reply. "The vibrations are not very pleasant, though. It\'s too sensitive from the stretching."');
  scene.text('"I see. That\'s too bad. Well, at least now we know!" she smiles, and slowly takes it out of you.');
  if ((Math.floor(Math.random() * 4) + 0) < 2) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub74.jpg');
    scene.text('She smiles. "At least your ass got a good workout. For that, you may thank me."');
    scene.text('"Thank you, Mistress…" you mutter meekly. You wince as you walk over to her.');
    scene.text('Mistress spreads her legs and grabs a magazine, scanning some of the articles in it. Meanwhile, you bite your lip and move your head to her crotch.');
    scene.text('You start dutifully licking her pussy, hoping to provoke a reaction from her. You slide two fingers into her pussy and teasingly massage her as you work away at her clit.');
    scene.text('Mistress tries to stay quiet, but within minutes you can hear some soft moans coming from behind the magazine. With a knowing smile, you double your efforts, and Mistress throws away the magazine in frustration and starts grinding your face against her pussy.');
    scene.text('"That\'s it, slave! Lick it! Make me cum!" she groans, and shakes violently when she orgasms. With a satisfied smile, she waves you off, indicating that you may leave.');
    scene.text('"Yes, Mistress. Thank you, Mistress…" you mutter before you walk away.');
    qspCall(s, 'arousal', 'cuni_give', 20, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSevere_4(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistsevere ?? {})[4] = 1;
  if (((s as any).pcs_ass ?? 0) < 10) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
    (s as any).agape = 3;
  } else {
    if (((s as any).pcs_ass ?? 0) < 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
      (s as any).agape = 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 20);
    } else {
      if (((s as any).pcs_ass ?? 0) < 30) {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
        (s as any).agape = 1;
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 41) + 40);
      }
    }
  }
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (1);
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
  qspCall(s, 'stat', '');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.img('images/characters/city/natalya/sex/sub75.jpg');
    scene.text('"I\'m going to tie you up and fuck your ass silly. Sound good?" Mistress asks.');
    scene.text('"Erm…" you begin to reply, but you don\'t finish your answer when you see Mistress looking at you with a raised eyebrow. She wasn\'t actually asking you, merely telling you.');
    scene.text('"That would only get in the way," she mumbles when she sees your butt plug. She makes you kneel before her and deftly pulls it out.');
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub76.jpg');
    scene.text('Mistress binds you in a rather uncomfortable position on top of a large rug. When she\'s satisfied you\'re completely helpless, she grins and puts a gag in your mouth. "I want to enjoy my fucking in silence today. I know how loud you can get, slave…"');
    scene.text('She then takes her place between your legs and shoves her strap-on inside you. She then starts pounds your ass while softly spanking you with a cane.');
    scene.text('"I love the way you always moan when I fuck your ass, slave… I can never quite tell if you want me to go even harder or not. Do you? Do you want me to go harder?" she grins.');
    scene.text('You frantically shake your head and she slows down a little. After another minute, she stops entirely.');
    scene.text('"Alright," she concedes. "I guess we can call it a day. You look like you\'ve had enough and to be honest, I was getting rather bored with it anyway."');
    scene.text('She quickly unbinds you and allows you to leave.');
    qspCall(s, 'arousal', 'anal_strap', 20, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/characters/city/natalya/sex/sub76.jpg');
    scene.text('"I\'m going to tie you up and fuck your ass silly. Sound good?" Mistress asks.');
    scene.text('"Erm…" you begin to reply, but you don\'t finish your answer when you see Mistress looking at you with a raised eyebrow. She wasn\'t actually asking you, merely telling you.');
    scene.text('Mistress binds you in a rather uncomfortable position on top of a large rug. When she\'s satisfied you\'re completely helpless, she grins and puts a gag in your mouth. "I want to enjoy my fucking in silence today. I know how loud you can get, slave…"');
    scene.text('She then takes her place between your legs and shoves her strap-on inside you. She then starts pounds your ass while softly spanking you with a cane.');
    scene.text('"I love the way you always moan when I fuck your ass, slave… I can never quite tell if you want me to go even harder or not. Do you? Do you want me to go harder?" she grins.');
    scene.text('You frantically shake your head and she slows down a little. After another minute, she stops entirely.');
    scene.text('"Alright," she concedes. "I guess we can call it a day. You look like you\'ve had enough and to be honest, I was getting rather bored with it anyway."');
    qspCall(s, 'arousal', 'anal_strap', 20, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunish_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[1] = 1;
  qspCall(s, 'arousal', 'foreplay', 20, 'sub', 'lesbian', 'bound');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub52.jpg');
  scene.text('As you\'re undressing, you notice Mistress constantly looking at the clock.');
  scene.text('Once you\'re nude, she quickly puts you in a very simple rope harness and clicks a collar around your neck before attaching you to a leash. Her ropework is usually more elaborate than this, so she must be in a hurry.');
  scene.text('"Let\'s go for a walk, pet!" she orders, gently tapping her riding crop on your ass to indicate she\'s not very patient today.');
  scene.text('For the next ten minutes, you follow her around the apartment on your hands and knees, making sure you don\'t give her any reason to use the crop on you.');
  scene.text('After ten minutes, the phone rings. "Stay!" she orders as she drops the leash and crop and walks over to the phone. Once she\'s picked up the phone, she returns to you and motions how you should walk with the leash dragging behind you, holding the crop in her hand menacingly.');
  scene.text('She stays on the phone for the next twenty minutes, occasionally glancing down as she resumes walking you around her house. When she hangs up, she has you sit still in front of a street side window, exposing you to passers-by while she goes to put the phone away.');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.actions([
      { label: 'Stay where you are', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal_strap', 20, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub53.jpg');
    scene.text('She leaves the room for a few minutes before you suddenly hear her menacing voice behind you. "Have I ever fucked you in front of this window?"');
    scene.text('When you turn around, you see she\'s wearing her strap-on harness. The dildo in the harness is not quite as large as the one she uses when she wants to punish you, though.');
    scene.text('"N-no, Mistress…" you mutter. "B-but… Everyone can see us from down there!"');
    scene.text('"Exactly! Hands and knees, slave!" she orders. "Let\'s show the people of this city what a lovely little slut you are!"');
    scene.text('She starts roughly fucking your pussy with her strap-on, making you moan and beg for it. People from outside are starting to notice; Mistress left the window open! They can hear you!');
    scene.text('You immediately bite your lip and try to stay quiet, but it\'s too late. For the next twenty minutes, Mistress fucks your pussy and fingers your anus while the crowd slowly gets bigger and bigger.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('When you first feel your orgasm well up inside you, you try to postpone it as long as you can, but you eventually have to yield, and groan loudly as your whole body begins to shake.');
    }
    qspCall(s, 'stat', '');
    if (((s as any).mistressknowfoto ?? 0) === 1) {
      (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
      (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
      scene.text('"Do you think you were recognized by any of your fans, slave? Such a prestigious model, getting fucked like the submissive slut that she is by her Mistress…" she grins.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub6.jpg');
    scene.text('"My turn," Mistress says as she pulls her dildo out of you and gets up. She lets the harness slide down her hips and relaxes on the couch, spreading her legs widely.');
    scene.text('You gratefully lick her pussy, thankful that Mistress is letting you take care of her. She was already quite close to her orgasm, and you finish her off in no time at all.');
    // TODO-QSP: dynamic text: Once Mistress catches her breath, she leans over and kisses you on the cheek. "T...
    scene.text(`Once Mistress catches her breath, she leans over and kisses you on the cheek. "That was a lot of fun, ${((s as any).pcs_nickname ?? 0)}. Maybe I should show you off more often? You're way too pretty to hide in this apartment all the time…"`);
    qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Offer yourself to her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_horny = 0;
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub206.jpg');
    scene.text('"Mistress, maybe I co-" you try.');
    scene.text('"Shut up!" she yells. Before you can say anything, she presses a large ball gag into your mouth and locks some cuffs onto your wrists. "That should keep you quiet!" she snarks in a menacing voice. She makes you squat and then lean back on her glass table. "Don\'t make me attach those cuffs to something."');
    scene.text('"You will stay like this until I feel better, slave!", she scowls. "I hope you have no plans for the remainder of the day."');
    scene.text('You sit and squirm on the table, trying to ignore your aching muscles. Mistress walks by every now and then, but her mood is not improving.');
    scene.text('She makes you sit for so long that you end up really needing to pee. Knowing better than to ask her if you can go, you just try to hold it in as long as you can, but eventually have to yield, and have no choice but to empty your bladder all over the table.');
    // TODO-QSP: dynamic text: When Mistress next enters the room, she immediately sees what's happened and you...
    scene.text(`When Mistress next enters the room, she immediately sees what's happened and you can tell she actually feels bad. "I… You can go, ${((s as any).pcs_nickname ?? 0)}. I'm sorry. I'll clean this up. Just go…" she mutters.`);
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunish_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[2] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 150;
  (s as any).pcs_horny = 0;
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub54.jpg');
  scene.text('Mistress stops you when you reach for your clothes. "No time!" she snaps. "I have no time for you today, but since you\'re here…"');
  scene.text('She makes you lie down on a footstool and binds you tightly in a rather uncomfortable position without even letting you take your clothes off.');
  scene.text('"I should be back in a few hours,", she says before slamming the door shut. You lie on the stool for what feels like eternity in her empty apartment.');
  scene.text('When Mistress finally returns, she looks tired. "You\'re dismissed, slave," she says and unties you. "See yourself out, I\'m going to take a nap."');
  scene.text('As you try to rub the numbness out of your sore muscles, you watch Mistress go to her bedroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her apartment', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPunish_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[3] = 1;
  (s as any).temp_lesbimistress = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_lesbimistress ?? 0))) {
    scene.img('images/characters/city/natalya/sex/sub58.jpg');
    scene.text('"I want to play with your pussy, slave," Mistress says. The tone with which she says it makes you swallow nervously.');
    scene.text('"Of course, Mistress…" you reply and obediently drop to your hands and knees, wondering why she has no attributes nearby.');
    scene.text('You immediately find out why when she starts to impatiently push several fingers against your pussy lips, pushing them aside while she works her hand in very slowly. You meekly suffer through it when she goes a bit faster than you find comfortable.');
    scene.text('"So warm and welcoming… Why don\'t we do this more often, slave?" Mistress grins at you as she starts to fuck your pussy with her hand.');
    scene.text('"Aaaahh… I don\'t know Mist- aaaahhhh!" you scream, trying to reply as you\'re overwhelmed by the sensations.');
    qspCall(s, 'arousal', 'vaginal_fist', 20, 'sub', 'lesbian', 'rough');
    qspCall(s, 'stat', '');
  } else {
    scene.img('images/characters/city/natalya/sex/sub59.jpg');
    scene.text('"You know what, slave?" Mistress begins. "For the amount of time you spend naked between these walls, you don\'t get fucked nearly enough. Don\'t you want some nice cocks servicing your holes every now and then?"');
    scene.text('You\'re not sure how to respond. Is this a trick question?');
    scene.text('"Erm…" you reply carefully. "If it pleases you, Mistress?"');
    // TODO-QSP: dynamic text: "Relax, <<$pcs_nickname>>. You have permission to speak freely. Tell me, what wo...
    scene.text(`"Relax, ${((s as any).pcs_nickname ?? 0)}. You have permission to speak freely. Tell me, what would you like?" she asks, smiling reassuringly.`);
    scene.text('You bite your lip for a second. "I\'d like it if you fucked me more often, Mistress. If it doesn\'t get in the way of my training, that is."');
    scene.text('"Just me, huh?" she remarks. "Let\'s get started on that today. But don\'t forget, slave. When we fuck, we fuck on my terms."');
    scene.text('"Of course, Mistress," you nod obediently.');
    scene.text('She tells you to kneel next to a footstool while she gathers your attire for today.');
    scene.text('When she returns, she slips a ball gag into your mouth and slips a blindfold over your eyes before she puts you in a harness. It\'s very elaborate, connecting your cuffed wrists to the belt around your waist, while your elbows are locked behind your back. It also has a collar, straps just above your knees and your cuffed ankles are kept somewhat together with a wooden bar.');
    qspCall(s, 'arousal', 'foreplay', 20, 'sub', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
  }
  if ((!((s as any).temp_lesbimistress ?? 0))) {
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('You try to delay your orgasm for as long as you can, but you eventually have to yield. Moaning loudly, you have an intense orgasm while Mistress keeps fisting you with a satisfied grin on her face.');
      scene.text('"Thank you, Mistress! Thank you…" you groan, only slowly recovering.');
      scene.text('Mistress slowly pulls her hand out of your stretched pussy and wipes it off on your back. "Talk is cheap, slave. Show me how grateful you are!" she demands.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Thank her properly', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = 4;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub74.jpg');
    scene.text('When Mistress sits down on the couch, she barely has time to spread her legs. You\'re impatiently parting them, eager to show her how grateful you are.');
    scene.text('She seems to consider punishing you, but her objections slowly fade away when she feels your tongue darting over her pussy lips. You lick her to orgasm in no time at all.');
    // TODO-QSP: dynamic text: "Sit with me for a while, <<$pcs_nickname>>." You sit next to her and rest your ...
    scene.text(`"Sit with me for a while, ${((s as any).pcs_nickname ?? 0)}." You sit next to her and rest your head against her shoulder, happy to just cuddle with her for a while. Mistress smiles and softly strokes your hair as you sit in silence, simply enjoying each other's presence.`);
    scene.text('After a while, she motions for you to get up. "As much as I\'d like for you to stay, I have things to attend to. Maybe we can have an intimate evening soon, just the two of us…"');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
      (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
      scene.text('After some time, Mistress gets bored with fisting you and slaps your ass. "We should definitely do that more often! I nearly forgot how delightful your pussy is, slave."');
      scene.text('Having other matters to attend to, Mistress excuses herself while you get up and put your clothes back on in the hallway with a smile on your face.');
      qspCall(s, 'arousal', 'vaginal_fist', 15, 'sub', 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave her apartment', goto: ['city_residential', ''] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (3);
    (s as any).MistressObedience = 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub60.jpg');
    scene.text('Mistress teases you for a while before she slides the dildo inside you and starts fucking you with it.');
    scene.text('You groan into your gag, thoroughly enjoying the feeling of Mistress taking control over you. The fact that you\'re completely helpless in your current attire only adds to that.');
    qspCall(s, 'arousal', 'vaginal_strap', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('In no time at all, you\'re unable to withstand any longer and moan loudly, feeling your whole body shake under Mistress\' strap-on. You try to thank Mistress for granting you this orgasm, but the gag means you can only produce some unintelligible groaning.');
      qspCall(s, 'stat', '');
    } else {
      scene.text('Despite your arousal, you\'re unable to reach an orgasm as Mistress fucks you with her strap-on.');
      // TODO-QSP: dynamic text: She pulls out and strokes your hair, leaving your bonds on. "Are you sure this i...
      scene.text(`She pulls out and strokes your hair, leaving your bonds on. "Are you sure this is what you want, ${((s as any).pcs_nickname ?? 0)}? You didn't even orgasm…"`);
      qspCall(s, 'stat', '');
    }
    scene.text('');
    scene.text('When Mistress finishes undoing your ties, you can\'t resist the urge to kiss her. "I\'m sorry Mistress, but… I love you!" you mutter before kissing her on the lips, knowing full well how inappropriate it is.');
    scene.text('To your surprise, Mistress is not upset with you at all. She\'s fully aware of how inappropriate you are and how she\'s supposed to punish you, but she chooses not to. She kisses you back passionately, and holds you tight when you attempt to drop to your knees in a reflex to beg for her forgiveness.');
    // TODO-QSP: dynamic text: She forces your body against hers and kisses you on your lips again and, after h...
    scene.text(`She forces your body against hers and kisses you on your lips again and, after hesitating for a second, softly whispers. "I… I love you too, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Your heart melts when you hear her say that. You know she\'s been struggling to show tenderness towards you, fearing it would compromise her credibility as a domme. You must mean the world to her if she\'s willing to make herself so vulnerable.');
    qspCall(s, 'arousal', 'kiss', 10, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunish_4(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[4] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_horny = 0;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub66.jpg');
  // TODO-QSP: dynamic text: Mistress looks tired and clueless as to what she should do with you. "I'm really...
  scene.text(`Mistress looks tired and clueless as to what she should do with you. "I'm really tired. I just want to look at your ass, ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('"But of course, Mistress!" you smile at her, and climb on top of a cabinet before sticking out your ass. "How\'s this, Mistress?"');
  scene.text('"That\'s perfect, dear," she smiles weakly as she sits on the couch and grabs a magazine.');
  scene.text('Mistress spends a few minutes on the phone before browsing through her magazines. She occasionally glances your way, the adoration visible in her eyes.');
  scene.text('Fifteen minutes later, her friend Masha enters the apartment. "I got here as soon as I could, darling! What i-… Oh."');
  scene.text('You look behind you, watching Masha stare at your bare ass and exposed holes. Mistress has a wide grin on her face and can barely contain her laughter.');
  scene.text('"Seriously, Natalya!? We get it, you have a hot slave girl! You called me over just to rub it in my face!? I was genuinely worried!" Masha exclaims, unable to peel her eyes away from you as she scolds her friend.');
  scene.text('Mistress smiles weakly. "Relax, Masha. That\'s not why I called you over. Tea?"');
  scene.text('Masha sighs as she sits on the coach. "Might as well now that I\'m here. Say… Would you consider lending her to me for a day at some point?"');
  scene.text('Mistress nods, barely giving it any thought. "To you? Of course. She\'ll do whatever you want."');
  scene.text('Masha grins and licks her lips greedily, already looking forward to the day. After nearly two hours, Mistress says you can get up and leave for today.');
  scene.text('Masha smiles deviously as you move to the hallway. "See you soon, slave! I can\'t wait to get to know you…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed and leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPunish_5(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[5] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = 0;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) > 20) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
      (s as any).vidageday = ((s as any).vidageday ?? 0) - 1;
    }
    if (((s as any).analPlugIn ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 5);
    }
    if (((s as any).vibratorIN ?? 0) === 1) {
      (s as any).pcs_horny = 100;
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 3);
    }
    (s as any).MistressObedience = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub69.jpg');
    // TODO-QSP: dynamic text: Mistress yawns. "I was just about to go to sleep, <<$pcs_nickname>>, but I'm not...
    scene.text(`Mistress yawns. "I was just about to go to sleep, ${((s as any).pcs_nickname ?? 0)}, but I'm not cruel. You didn't come for nothing. Why don't you join me?"`);
    scene.text('"I\'d love to, Mistress!" you exclaim happily.');
    scene.text('She nods with a slight smirk on her face. "Excellent. Go brush your teeth and I\'ll find you something to wear."');
    scene.text('When you enter her bathroom, you find a new toothbrush waiting for you. Did Mistress prepare for you? You quickly brush your teeth and head to the bedroom.');
    scene.text('You look around the room, expecting to find a nightie on the bed or something. Instead, you find only some sheer stockings and a number of cuffs.');
    scene.text('Mistress smirks again when she sees your disappointed face. "What did you expect, slave? Did you forget your place?"');
    scene.text('You bite your lip and put the stockings on. "N-no, Mistress…" you mutter. "It\'s perfect. Thank you."');
    scene.text('You both know that\'s a lie, but she lets it slide with no objections.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 600;
    qspCall(s, 'stat', '');
    scene.text('Once you\'re on her bed, Mistress locks your ankles, elbows and wrists together. She crawls under the sheets, while she makes you stay above them.');
    scene.text('"Good night, slave," she whispers and kisses your forehead before turning off the lights.');
    scene.text('"Good night, Mistress," you reply, trying to cuddle up closer to her without getting inappropriate.');
    scene.text('Despite your confines, it actually doesn\'t take you long to fall asleep. Mistress wakes you the next morning by putting her hand on your shoulder; she\'s already wide awake and fully dressed.');
    scene.text('"That was nice, slave. I slept like a log," she says. "You\'re dismissed."');
    scene.text('"Yes, Mistress. Thank you," you reply, trying to hide your disappointment.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    (s as any).spank = ((s as any).spank ?? 0) + (1);
    qspCall(s, 'sweat', 'add', 20);
    (s as any).spanked = 3;
    (s as any).spankedtime = ((s as any).totminut ?? 0);
    (s as any).MistressObedience = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub70.jpg');
    scene.text('Without even letting you undress completely, Mistress drags you over to one of her fitness machines. "Bend over, slave! You\'re well due for some disciplining."');
    scene.text('You were hoping for something else today, but nevertheless obediently do as she says. Mistress begins to spank your bare ass with a wooden paddle.');
    scene.text('Twenty minutes in, the phone rings. "Try to keep it down, slave," she sighs as she stops for a second to answer the phone. She puts it on speaker and returns to you.');
    scene.text('"Hey Masha! What\'s up?" she asks as she spanks your ass again. You bite your lip, trying to stay quiet.');
    scene.text('"I was wondering if you were doing anything tomorrow night?" Masha\'s cheerful voice replies as Mistress spanks you again.');
    scene.text('"I\'d have to check," Mistress replies while spanking you harder. You cry out and are immediately punished with several more spanks.');
    scene.text('You hear Masha\'s voice. "Erm… Is this a bad time?"');
    scene.text('"Not at all! I\'m just training my slave. Slave, say hi to Masha!" she instructs.');
    scene.text('"Hello, Ma-aaaah! Hel- Aaaaaah!" you shout between spanks.');
    scene.text('"Uh. Hi dear…" Masha replies. You can hear her laughing.');
    scene.text('"I\'ll call you back in an hour, okay? I have a few things to do here," Mistress tells her friend.');
    scene.text('"Of course darling, I\'ll talk to you then," Masha replies and hangs up.');
    scene.text('Mistress lands a few more extra slaps before she puts the paddle away. You ignore the tears rolling down your cheeks and softly whimper while you wait to see what Mistress decides next.');
    // TODO-QSP: dynamic text: Mistress helps you up and offers you a tissue. "You took your spanking well, <<$...
    scene.text(`Mistress helps you up and offers you a tissue. "You took your spanking well, ${((s as any).pcs_nickname ?? 0)}. I'm proud of you," she winks. "You should go though, I have other things I need to attend to."`);
    qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'lesbian', 'maso');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunish_6(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistpunish ?? {})[6] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub213.jpg');
  scene.text('When you enter, you see a metal dildo mounted on a pole with a plateau underneath it.');
  // TODO-QSP: dynamic text: Mistress smirks at you. "You've been rather unruly, <<$pcs_nickname>>. However, ...
  scene.text(`Mistress smirks at you. "You've been rather unruly, ${((s as any).pcs_nickname ?? 0)}. However, I'll give you a chance to redeem yourself. Put those shoes on and step over here, please."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Do as she says', handler: (st: GameState) => {
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub214.jpg');
    scene.text('You step on top of the plateau with your pussy directly over the metal dildo.');
    scene.text('"Perfect! Just hold still," Mistress smiles. She takes the pole in her hand and moves the dildo upwards, lodging it firmly into your pussy. Once she\'s satisfied it won\'t go any further, she nods deviously and locks it in place.');
    scene.text('"Excellent. Show me your holes, slave!" she commands.');
    scene.text('She can barely contain her laughter as you expose your asshole to her with the cold metal dildo lodged uncomfortably inside your pussy. The shoes she made you put on certainly aren\'t helping.');
    scene.text('"Here\'s the rules of our little game today: as soon as you can step away from the platform without tipping it over, you\'re free to go. If you orgasm, you lose. Simple enough, right?" she smiles.');
    scene.text('That doesn\'t seem like much of a punishment. Easy peasy! "Thank you, Mistress…" you mutter.');
    scene.text('"Don\'t thank me just yet!" she laughs and pulls out her phone.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try to escape', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub215.jpg');
    scene.text('While you try to escape, Mistress calls her friend. "Masha! Are you busy? There\'s someone here I want you to see."');
    scene.text('After a few seconds, Mistress giggles. "Fifteen minutes is fine. I\'m not in that much of a rush. Alright, see you soon."');
    scene.text('When she hangs up the phone, she nods encouragingly at you. "You have fifteen minutes before Masha sees you like this, slave. Good luck."');
    scene.text('At this point, you begin to feel a bit uncomfortable; why is she so sure of herself? She even begins reading a magazine, occasionally looking up to enjoy your struggles.');
    scene.text('After a few attempts, you realize why; it\'s actually near impossible to get off this thing!');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep trying', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub216.jpg');
    scene.text('Despite your best efforts, there\'s no way you\'re getting off this dildo. The way you have to tiptoe in your high heeled boots makes it impossible for you to lift yourself off.');
    scene.text('Masha enters the apartment ten minutes later, nearly out of breath. "Am I still in time? Where is she!?" she gasps.');
    scene.text('"In here, Masha!" Mistress shouts before giving you a devious grin.');
    scene.text('"I came as fa- Oh my!" Masha gasps.');
    scene.text('"Umm… Hello, Madam…" you blush. You\'d try to cover yourself up, but you realize there\'s no point.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> has been a very bad slave recently. How do you like my one ba...
    scene.text(`"${((s as any).pcs_nickname ?? 0)} has been a very bad slave recently. How do you like my one bar prison?" Mistress grins at her friend, who is clearly a bit uncomfortable.`);
    scene.text('"That\'s erm… Very clever…" she mutters.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give up', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub217.jpg');
    scene.text('"Please sit! Would you like some wine?" Mistress offers generously.');
    scene.text('Rendered speechless, Masha simply nods and sits down, her eyes firmly locked on your body. "But… How?" she mutters finally.');
    // TODO-QSP: dynamic text: Mistress grins as she offers her friend a glass of wine. "Slaves need to be disc...
    scene.text(`Mistress grins as she offers her friend a glass of wine. "Slaves need to be disciplined when they misbehave, Masha. Instead of corporal punishment, I decided ${((s as any).pcs_nickname ?? 0)} should put up a little show for me today. And you, now that you're here. Feel free to invite your friends, ${((s as any).pcs_nickname ?? 0)} won't mind. Isn't that right, slave?"`);
    scene.text('"No Mistress…" you mutter obediently. You\'re just standing still now, trying to hide your shame. You slowly move your hips up and down on the metal rod and start fondling yourself without giving it any thought.');
    scene.text('Mistress idly waves a whip around and smirks at you. "Don\'t just stand there, slave! Keep trying! And remember, no getting yourself off!"');
    scene.text('"No, that\'s okay!", Masha quickly replies. She seems conflicted.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Try again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 16) + 15);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub218.jpg');
    scene.text('You let out a frustrated moan. This is going to be more difficult than you thought.');
    scene.text('Mistress and Masha slowly drink their wine while they catch up on current events. You can tell that Masha\'s mind isn\'t really with their conversation as she keeps looking at you with a certain hunger in her eyes.');
    scene.text('"Can I taste her?" she suddenly blurts out. "I want to taste her so badly! Look at her juices dripping!"');
    scene.text('Mistress gives Masha a benevolent nod. "Of course, dear. What\'s mine is yours! Just don\'t make her orgasm sinc that would undermine her punishment."');
    qspCall(s, 'arousal', 'vaginal_dildo', 15, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Masha taste you', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub219.jpg');
    scene.text('You sigh and turn your back towards the women watching you; if Mistress allows it, it\'s happening. At least this way you don\'t have to look her in the eye while she does it.');
    scene.text('Masha walks over to you and runs her finger over the steel dildo, near your slit. She coaxes a small moan out of you by rubbing her fingers over your pussy lips a bit longer than is needed, and then puts her finger in her mouth, sucking on it demonstratively.');
    scene.text('"Delicious… You\'re so lucky, Natalya. I don\'t know where you found her," she muses.');
    scene.text('Mistress nods. "Like I said, what\'s mine is yours. If you want to spend some time with her, just ask."');
    scene.text('Masha looks at her watch. "I can\'t, unfortunately," she replies with a hint of disappoint. "I have to go, but I\'d love to take you up on that!"');
    scene.text('"What do you think, slave? Would you like to spend some time with my friend?" Mistress asks.');
    qspCall(s, 'arousal', 'vaginal_dildo', 15, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'vaginal_finger', (-15), 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'vaginal', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'You\'d rather not [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You\'d rather not [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub220.jpg');
    scene.text('Even though she seems nice, you\'re not particularly interested in going out with her.');
    scene.text('"I\'m sorry Madam, but I belong to my Mistress," you mutter to Masha, not wanting to hurt her feelings.');
    scene.text('Masha nods understandingly, but looks a little dejected. "That\'s okay. I\'ll see you later, Natalya," she says softly before leaving in a hurry.');
    scene.text('Mistress looks at you, pondering for a second before she shrugs. "That\'s too bad. Masha is a sweetie. I think you really would\'ve hit it off together. Maybe think about it? It\'d make her really happy," she suggests. "You can step off the platform now. Just let it slide out of you."');
    scene.text('You do as she says and even though you have to squirm a little, you manage to finally release yourself.');
    qspCall(s, 'arousal', 'vaginal_dildo', 15, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Absolutely', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (2);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub220.jpg');
    scene.text('"That would be nice, Mistress," you nod.');
    scene.text('"It\'s a date!" Mistress grins.');
    scene.text('Even though you\'re the one naked with a dildo inside you, Masha is blushing even more than you right now.');
    scene.text('"Great! I have to go, but I\'ll talk to you later! Thanks for the wine!" she says before quickly making for the door and leaving.');
    // TODO-QSP: dynamic text: Mistress shakes her head, chuckling at Masha's embarrassed exit. "You'll have to...
    scene.text(`Mistress shakes her head, chuckling at Masha's embarrassed exit. "You'll have to excuse her, ${((s as any).pcs_nickname ?? 0)}. She can be a bit shy. You can step off the platform now. Just let it slide out of you."`);
    scene.text('You do as she says and even though you have to squirm a little, you manage to finally release yourself.');
    qspCall(s, 'arousal', 'vaginal_dildo', 15, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNeutral_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[1] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 150;
  qspCall(s, 'exp_gain', 'vital', Math.floor(Math.random() * 3) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub47.jpg');
  scene.text('Mistress smiles at you kindly. "You\'re really beautiful, slave. Do you know that?"');
  scene.text('"Thank you, Mistress…" you mutter.');
  scene.text('"I want you to look pretty for me today. And classy… like a piece of art!"');
  scene.text('You nod obediently. "Of course, Mistress. Anything to make you happy!"');
  scene.text('Mistress gently runs her hand over your cheek. "I know, girl… I know. How about you kneel down right here, I\'ll be right back."');
  scene.text('She comes back with a large potted plant and some rope. She binds your legs together first, then binds your hands to the flower pot and fixates it on top of your head. It\'s actually kind of heavy! To finish the look, she puts a bright red ball gag in your mouth.');
  scene.text('"Oh yes, you look very elegant!" she nods. "I have to take care of some things now, but don\'t go anywhere!"');
  // TODO-QSP: nl
  if (((s as any).fame ?? 0)?.['city_modelling'] >= 40  &&  ((s as any).pcs_apprnc ?? 0) >= 100  &&  (!((s as any).mistressknowfoto ?? 0))) {
    (s as any).mistressknowfoto = 1;
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (5);
    scene.text('About twenty minutes later, Mistress returns with a magazine in her hand. She has a surprised expression on her face.');
    scene.text('She holds the magazine in front of your face. On the image, you see… you! That\'s one of the photo shoots you did!');
    scene.text('"You sexy little minx! Why haven\'t you told me you\'re a model!? I thought you were just some regular girl toy!" Mistress exclaims with a proud grin on her face.');
    scene.text('"Wow… My sexy little slave, a model! A nude model, no less! Look at these photos. You look perfect!');
    scene.text('You\'re not really sure what to say, and just give her a meek smile around the ball gag as you hold the flower pot over your head.');
    scene.text('"This is fantastic! Wait until I tell all my friends that my precious little slave girl is a famous nude model! They\'ll be so jealous! I bet they don\'t have a famous model holding their flower pot! Take that, Irina! Your former Olympic athlete is nothing now! Hah!" she beams as she looks at you, besides herself with pride.');
    scene.text('She nods at you happily. "This is just great! Maybe we can go do some photoshoots that are a bit spicier at some point? Oh, you\'ve made me so happy! I\'ll have to get extra nice looking bondage gear! Showing you off will be so much fun!"');
    scene.text('She runs off again, all giddy with excitement.');
  }
  if ((Math.floor(Math.random() * 101) + 0) > ((s as any).pcs_vital ?? 0)) {
    scene.actions([
      { label: 'The pot grows heavy…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).spank ?? 0) >= 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 31) + 20);
    }
    if (((s as any).spank ?? 0) < 30) {
      (s as any).pcs_horny = 0;
    }
    (s as any).spank = ((s as any).spank ?? 0) + (1);
    (s as any).spanked = ((s as any).spanked ?? 0) + (2);
    (s as any).spankedtime = ((s as any).totminut ?? 0);
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (2);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub48.jpg');
    scene.text('You do your best to hold the pot over your head, but you\'re not strong enough. Your arms get tired and start to shake. Despite your best efforts, you\'re unable to hold the pot any longer and you moan into your gag destitutely as it loudly shatters on the floor.');
    scene.text('You hear the clacking of hells come from the next room and Mistress storms in. She sees the broken pot on the ground and looks at you sternly. "You know what this means, slave."');
    scene.text('You can\'t reply with the gag still in your mouth, so you just nod meekly while you give her an apologetic look.');
    scene.text('Mistress removes your binds and tells you to stand in the corner. As you do, you cry out as you feel a cane slap your ass. "Fifty, slave. Count them!"');
    scene.text('You dutifully count the slaps between cries. When Mistress finally delivers the last one, she tells you to sit in the corner and think about how you disappointed her.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    scene.text('Mistress eventually returns and removes the pot before undoing your binds.');
    scene.text('"You did well today," she whispers in your ear as she unfastens your ball gag.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNeutral_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[2] = 1;
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub49.jpg');
  scene.text('"Have I given your ass any attention lately, slave?" Mistress asks while holding a long but fairly slender dildo in her hand.');
  scene.text('"Not enough, Mistress…" you smile at her.');
  // TODO-QSP: dynamic text: Mistress laughs at your semi-taunt. "You're such a little minx, <<$pcs_nickname>...
  scene.text(`Mistress laughs at your semi-taunt. "You're such a little minx, ${((s as any).pcs_nickname ?? 0)}. But this is important! As a cute little slave, I must see to it that all of your holes are trained properly."`);
  scene.text('"I understand, Mistress. Perhaps you could help me train my hole right now?" you ask meekly, knowing that\'s what she wants to hear.');
  scene.text('She hands you the dildo. "You know what?" she grins. "I was going to do it, but you seem eager to prove yourself. How about I let you do the honours?"');
  scene.text('You wordlessly take the dildo out of her hands, and spread some lubricant on it before you guide it to your sphincter. Within minutes, you\'re pumping the dildo most of the way inside your asshole. "Ohh… Am I… doing it… right, Mistress? Aaahhh!"');
  scene.text('She has to do everything in her power to not rub one out right now while watching you. "Don\'t mock me, slave!" she smirks, but you can tell she\'s having a hard time keeping a straight face.');
  // TODO-QSP: dynamic text: After half an hour, she can't take it any more. "Very nice, <<$pcs_nickname>>. Y...
  scene.text(`After half an hour, she can't take it any more. "Very nice, ${((s as any).pcs_nickname ?? 0)}. You've convinced me! Now, stop teasing me with your body and give me what I want!" she groans and spreads her legs.`);
  qspCall(s, 'arousal', 'anal_dildo', 30, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her to orgasm', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub74.jpg');
    scene.text('"Of course, Mistress," you say in a lewd voice as you drop to your knees, eager to please her.');
    scene.text('Noticing you\'re doing exactly what she wants you to, she relaxes and throws her head back, waiting for your touch.');
    scene.text('You get between her legs, beginning by licking her wetness off her labia. When you notice Mistress\' eager moans and the thrusting of her hips towards your face, you realize she just wants to get off quickly.');
    scene.text('"Finger me while you lick me, slave!" she barks, and when you slide two fingers inside her she cums almost immediately. That might very well have been the most intense orgasm you ever saw Mistress have!');
    scene.text('You keep licking her after her orgasm subsides while you look her in the eye. You pull away for a second and smile at her obediently. "Did I please you, Mistress?" you ask before you move back in and continue to lick her.');
    scene.text('Mistress sighs softly, very satisfied indeed. "Your mouth was exquisite as always, slave. And so very obedient, too. I think I\'m going to take a little nap. See yourself out, okay?"');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'See yourself out', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'Tease her by taking it slow', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub6.jpg');
    scene.text('"Of course, Mistress," you say in a lewd voice. "If that\'s what you desire…"');
    scene.text('When you\'re not moving fast enough, she snaps. "Yes! I want it! Now get your mouth on my cunt and lick me!"');
    scene.text('You stop teasing her before taking it too far - she is your Mistress after all - and get between her legs, beginning by licking her wetness off her labia. You had intended to slowly work your way inwards, but Mistress is already on edge and roughly forces her pussy against your lips.');
    scene.text('"Finger me while you lick me, slave!" she barks, and when you slide two fingers inside her she cums almost immediately. That might very well have been the most intense orgasm you ever saw Mistress have!');
    scene.text('You keep licking her after her orgasm subsides, obediently licking her clean while you look her in the eye. You pull away for a second and have trouble hiding the smug grin on your face. "Did I please you, Mistress?" you ask before you move back in and continue to lick her.');
    scene.text('Mistress groans, too satisfied to punish you for teasing her for so long. "Your mouth was exquisite as always, slave. But don\'t think that I didn\'t notice your attitude! I\'ll punish you for that when you least expect it! I\'m going to take a little nap. See yourself out, okay?"');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'See yourself out', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNeutral_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[3] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub208.jpg');
  // TODO-QSP: dynamic text: Mistress looks stressed as she awkwardly rubs her shoulders. "Go to the living r...
  scene.text(`Mistress looks stressed as she awkwardly rubs her shoulders. "Go to the living room, ${((s as any).pcs_nickname ?? 0)}. I laid out some things for you to wear on the table. I'll be right there."`);
  scene.text('"Yes, Mistress," you nod. On the table you find… very little, actually. The hipster panties look cute, but the heavy duty blindfold catches your eye first and foremost. There\'s also a large ball gag, and a delicate studded collar. You were just putting on the ball gag when Mistress comes back into the room.');
  // TODO-QSP: dynamic text: She's wearing a business-like attire that still shows a lot of cleavage. "No tim...
  scene.text(`She's wearing a business-like attire that still shows a lot of cleavage. "No time for games today, ${((s as any).pcs_nickname ?? 0)}. I'm preparing for an important meeting. Nevertheless, you can help me get ready for it," she winks at you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Be a laptop holder', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    if (((s as any).mistressknowfoto ?? 0) === 1) {
      (s as any).MistressAdoration = 1;
    }
    (s as any).MistressObedience = 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub57.jpg');
    scene.text('When you look at her laptop, you see her opened e-mail account and recognize your name in the title for a lot of the e-mails. Is this meeting about you?!');
    scene.text('At this point, Mistress takes the laptop and makes you stick out your arms so you can hold it for her. Fortunately it\'s a light-weight model.');
    scene.text('"Don\'t be so nosy, slave!" she says sternly before she helps you put on the rest of your gear and tells where to kneel. She then secures the blindfold tightly behind your head and even puts a lock on it.');
    scene.text('You hear Mistress muttering as she rummages around "Hold it just a little bit higher, dear. That\'s it, perfect." You hear several clicks, like the clicks a camera would make.');
    scene.text('For the next two hours, Mistress works away as you act as her laptop stand before she takes the laptop out of your arms and helps you up, unlocking the blindfold and taking out your ball gag.');
    scene.text('"Thanks, darling. I have a good feeling about today. You being here really helped me get ready!" she smiles as she kisses you on the cheek.');
    scene.text('She puts the laptop in her bag and runs for the door. "I have to get going, but I\'ll make sure we have some fun next time. You deserve it! See yourself out, okay?"');
    scene.text('"Yes Mistress," you reply before you remove the collar and panties and put everything back the way you found it.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNeutral_4(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[4] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 150;
  (s as any).pcs_horny = 0;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
  (s as any).MistressObedience = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub62.jpg');
  scene.text('Mistress sighs. She looks tired, so you stop undressing. "You look tired, Mistress. Is there anything I can do to help you relax?"');
  scene.text('She nods. "Yes, I am rather tired. Maybe I should just relax for a while and read something?"');
  scene.text('You look at Mistress questioningly. "How does that involve me?"');
  scene.text('"I have a lot of leftover pantyhose. You could… model them for me while I read?" she smiles sarcastically.');
  scene.text('"Of course, Mistress," you nod. "Where are they?"');
  scene.text('Mistress chuckles. "All over you, soon enough."');
  scene.text('She binds you tightly and your entire body is soon covered in pantyhose. Mistress relaxes on the couch and reads her romantic novel while you sit quietly in front of her.');
  scene.text('After two hours, she gets up from the couch and unties you before tossing the pantyhose in the trash.');
  scene.text('"That was fun, but at the same time rather unnerving," she chuckles. "I felt like I was being watched by a bank robber while I was reading my novel!"');
  scene.text('You laugh while you rub some feeling back into your sore muscles before Mistress kisses you on your cheek. "Thanks. I needed that. See yourself out, will you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed and leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterNeutral_5(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[5] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_horny = 0;
  qspCall(s, 'sweat', 'add', 30);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub63.jpg');
  // TODO-QSP: dynamic text: "Check my bedroom, <<$pcs_nickname>>. You'll find your harness for today on the ...
  scene.text(`"Check my bedroom, ${((s as any).pcs_nickname ?? 0)}. You'll find your harness for today on the bed," Mistress says.`);
  scene.text('You quickly walk over to her bedroom and find the leather harness where she said you would. A few minutes later, she comes in and tightens the straps of the harness.');
  scene.text('"Mistress looks apologetic. "Unfortunately I\'m rather swamped today, but you could help by doing my dishes. Follow me."');
  scene.text('You follow Mistress into the kitchen on your hands and knees, where she puts her dirty dishes on the ground. "Make them shine."');
  scene.text('You remain on your knees licking the dishes clean until your tongue feels numb. When Mistress comes to check up on you, she looks at the dishes and shrugs, only moderately satisfied.');
  scene.text('She then extends one of her legs. "You may now thank me for giving your life purpose, slave."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her feet', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub67.jpg');
    scene.text('You kiss Mistress\' foot profusely. "Thank you Mistress for allowing me to clean your dirty dishes. Serving you gives me purpose. Thank you."');
    scene.text('Mistress bites her lip for a second. "Get up," she whispers. You swear you see a tear welling in the corner of her eye. She looks deeply touched by your continued devotion to her.');
    scene.text('You do as she says, and quietly stand there when she suddenly embraces you and kisses you.');
    // TODO-QSP: dynamic text: "You're so adorable, <<$pcs_nickname>>…" she whispers. "I'm so lucky to have fou...
    scene.text(`"You're so adorable, ${((s as any).pcs_nickname ?? 0)}…" she whispers. "I'm so lucky to have found you. Every time I try to test you, you do something like this and make me feel bad for pushing you so hard."`);
    scene.text('"Anything for you, Mistress!" you smile blissfully, returning her embrace. "You pushing me to my limits has made me what I am today. I owe it all to you!"');
    scene.text('"I\'d love to just relax with you, but I have to be somewhere in half an hour. But I promise: I\'ll take you out soon, and we\'ll have a good time together, okay?" she whispers.');
    scene.text('"That sounds lovely, Mistress. I can\'t wait!" you reply, kissing her on the cheek before going to the hallway to put your clothes back on.');
    qspCall(s, 'arousal', 'kiss', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNeutral_6(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[6] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_horny = 0;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) > 18) {
    scene.img('images/characters/city/natalya/sex/sub64.jpg');
    // TODO-QSP: dynamic text: Mistress grins at you mischievously. "I was just about to have dinner, <<$pcs_ni...
    scene.text(`Mistress grins at you mischievously. "I was just about to have dinner, ${((s as any).pcs_nickname ?? 0)}. Want to join me?"`);
    scene.text('"Of course, Mistress! That sounds delightful!" you exclaim.');
    scene.text('"Excellent. Get on the table please…" she smirks. You suddenly have a feeling this dinner will not go how you thought it would…');
    scene.text('Mistress uses a dark red rope she seems to have acquired for the occasion. She ties your wrists behind your back, and then continues to securely tie you to the table before she places some candles between your legs, and turns your mouth into a napkin holder.');
    scene.text('"I bet any dishwasher would love to clean this plate!" she jokes as she puts out her food. She eats slowly, savouring her meal. You can\'t help but notice her caressing your breasts every time she changes cutlery. When she finishes, she gives you a light peck on the lips before untying you.');
    scene.text('"Delicious…" she muses. "Time for you to go, slave."');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } else {
    scene.img('images/characters/city/natalya/sex/sub65.jpg');
    scene.text('Mistress smiles mysteriously, and gestures for you to keep undressing while she goes to collect some things. When she returns, she has some peculiar items in her hands.');
    scene.text('"I noticed you really enjoy our pet play," she grins. "I decided it\'s time to take that to the next level. Today you\'re going to be my little bitch!"');
    scene.text('She puts a collar around your neck; it\'s attached to a body harness that goes around your chest as well. She then puts some paw gloves on your hands before locking them in place. Finally, she places a mask on your face, making you look like a dog.');
    scene.text('You try to object. "Mistress, I re-"');
    scene.text('She immediately interrupts you in a stern voice. "Dogs don\'t talk, bitch!"');
    scene.text('You sigh, and bark in response. Mistress beams at you. "Good girl! Who\'s a good girl!" You bark again.');
    scene.text('For the next two hours, she trains you in being a good pet slave. She even plays fetch with you at one point.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNeutral_7(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[7] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).mistressqwest = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('Mistress greets you when you enter the hallway. She\'s wearing her everyday attire today. which you find odd. She has you undress before you follow her into the living room. "I\'m sorry Madam, this will only take a minute," she says, but not to you. She has another guest you failed to notice until now. It\'s a slightly older woman, fully dressed in leather. You\'re fairly sure you\'ve seen her before.');
  scene.text('When you meekly wave at the other woman, she gives you an amused smirk. She has definitely seen <i>you</i> before.');
  scene.text('Mistress waits impatiently until you assume a proper position befitting a slave before she continues. "So, slave… You remember the sex shop in the red light district, yes? Your little cocksucking adventure?" she asks, raising an eyebrow before she laughs. "People have been asking for you non-stop there, and Peter begged me to have you return. Business has never been better for him."');
  scene.text('You blush as Mistress praises you for sucking twenty dicks there in front of her guest. "He made me a good offer, so you\'re going back there. I told him you\'ll service twelve cocks this time. He begged for more, but I don\'t want to go without you for too long."');
  scene.text('Mistress continues undisturbed. "Same deal as before. Enter one of the booths there and service twelve dicks in the gloryhole. You can take as long as you need, but you\'re not welcome here until you finish your task. And you don\'t want to keep me waiting too long, do you?"');
  scene.text('You shake your head. "N-no Mistress! I\'ll do it! I\'ll do it as soon as I can."');
  scene.text('Mistress gives you a confident nod. "I know you\'ll make me proud, slave. Come, I\'ll let you out."');
  scene.text('"Good luck, slave!" the other woman grins as you walk by her on your way out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her apartment', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterNeutral_8(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[8] = 1;
  qspCall(s, 'exp_gain', 'vital', Math.floor(Math.random() * 2) + 0);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (2);
  (s as any).MistressObedience = 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub46.jpg');
  scene.text('Mistress hands you a delicate set of stockings. "You look very nice today, slave. Here, put these on. We\'re having visitors over today and I want you to look pretty for my friends!"');
  scene.text('You quickly slip your legs into the stockings, and can\'t stop running your fingers over the silky smooth material. She didn\'t cheap out on them.');
  scene.text('As you put them on, Mistress looks around the room, deciding where to put you before her eyes light up. "You\'re going to be my table. Get on your hands and knees! Quickly, they\'re almost here!"');
  scene.text('She places a sheet of glass on your back once she makes sure you\'re comfortable, and places some candles and a vase for decoration.');
  scene.text('Mistress chats happily with her friends when they arrive, though you can tell they\'re in awe by your humble display as they pretend to not look at you too much. Masha in particular seems very interested in you…');
  if (((s as any).mistressknowfoto ?? 0) === 1) {
    scene.text('After a few minutes, they all can\'t keep their eyes off you when they finally recognize you. A famous photo model willing to do anything their friend tells her to do! Anything! Mistress must have told them about your photo shoots and probably showed them the magazines too. For all you know, they\'re on the table right now!');
  }
  scene.text('After an hour and a half, Mistress decides she\'s done sharing you and tells her friends that she has a training session scheduled.');
  scene.text('"Did you see the looks on their faces!?" Mistress exclaims giddily as she helps you up. "They were so jealous! You were great!"');
  scene.text('She kisses your cheek tenderly, genuinely happy about sharing this moment with you.');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.actions([
      { label: 'She offers you a reward', handler: (st: GameState) => {
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub6.jpg');
    scene.text('You think the session is concluded and are just about to go to the hallway when Mistress suddenly grabs you by your nipples.');
    scene.text('"Where do you think you\'re going, slave?" she whispers in a sultry voice. "Don\'t you want your reward?"');
    scene.text('You silently bite your lip, knowing you want it but can\'t ask for it. Mistress grins when she sees your predicament and sits on the couch before spreading her legs widely for you.');
    // TODO-QSP: dynamic text: "You've earned it, <<$pcs_nickname>>. Make your Mistress feel good with that swe...
    scene.text(`"You've earned it, ${((s as any).pcs_nickname ?? 0)}. Make your Mistress feel good with that sweet tongue of yours!" she orders in a mocking voice, knowing full well that you don't need the encouragement.`);
    scene.text('You eagerly kneel down before her and start licking her pussy, which is drenched with her juices.');
    scene.text('You expertly lick her to orgasm, completely giving into her when she grinds her hips against your face. After Mistress has an earth-shattering orgasm, you kiss her feet lightly and only get up once she allows you.');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNeutral_9(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistneutral ?? {})[9] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub225.jpg');
  scene.text('"You\'re going to need some cuffs for today\'s activities, slave," Mistress says matter-of-factly. "Go put some on and present yourself."');
  scene.text('You enter her bedroom and pick out some cuffs to wear. Putting in some extra effort, you try to find a matching lingerie set. When you put the whole ensemble on, you nod to yourself in the mirror.');
  scene.text('Mistress can\'t help but chuckle when you enter the room and kneel down in front of her. "Very nice, slave. While I appreciate the gesture, we won\'t be needing that lingerie today. Go take it off and put your clothes back on. We\'re going out."');
  scene.text('You quickly put your clothes back on, struggling slightly to get them on because of the cuffs. When you\'re ready to go, Mistress tugs on your cuffs to make sure they\'re secure. "Very nice… They\'re going to love you!" she says dreamily.');
  scene.text('Wait, what!? Where are we going?" you ask, but she seems to be in a good enough mood to let you get away with it.');
  scene.text('"Out," she states. "I think we can make an extra stop on the way…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go out with Mistress', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'arousal', 'flashlite', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub226.jpg');
    scene.text('You get in Mistress\' car and look out the window as she drives you to your destination.');
    scene.text('After a few minutes, she parks near an entrance to the park. As far as you know this isn\'t a very popular area, and the park is mostly deserted.');
    scene.text('Mistress pulls you out of the car and guides you to a particular tree. "Undress," she orders. You notice some chains hanging from the tree.');
    scene.text('"This is actually a fairly well-known part of the park to some people. I\'m sure you\'ve noticed the chains by now. I can tell you that they\'re no coincidence," Mistress explains as you undress.');
    scene.text('Once you\'re almost nude she snaps your cuffs onto the chain, and hoists it up so your arms are stretched over your head. She then slips some thin panties onto you and pulls out a camera.');
    scene.text('"Someone I know has an interest in you," she says. "I need some photos to show him how far you are in your training. Give us a smile, dear!"');
    scene.text('You fake a smile for some of the photos, but you\'re not very happy about this. Mistress doesn\'t care, however, and just grins as she takes photos of you. "That reluctant look suits you well, slave. This\'ll look great in your scrapbook!" she snickers as she unties you. "Put your clothes back on. Time for our next stop."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 30, 'sub', 'exhibitionism');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 2);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub227.jpg');
    scene.text('Once you\'re dressed, you get back in the car and let Mistress take you where she wants to go. She parks somewhere in the city center and guides you to a back alley. She taps a door several times with her knuckles in an irregular pattern, and it swings open almost immediately.');
    scene.text('When you enter the building, it looks like a bar, but not just any ordinary bar. Bars don\'t normally have a large cage at the back…');
    scene.text('"Undress, slave," she says formally. Several guys are watching you intently, but you obey Mistress and do as she says.');
    scene.text('Once you\'re nude, Mistress chains you to a radiator and smiles happily. "You\'re going to look pretty for the patrons of this bar while I discuss business with someone. It shouldn\'t take much more than an hour. Don\'t worry, you\'re far from the first girl they\'ve seen like this, but your secret stays within these walls."');
    scene.text('She snaps a few more photos. "For your scrapbook!" she grins before stepping into a back room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'arousal', 'flash', 20, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub228.jpg');
    scene.text('Once Mistress leaves, you look at the patrons nervously, knowing you have absolutely no chance of getting out of here.');
    scene.text('For the next fifteen minutes, the patrons of the bar mostly ignore you, but you do get a few lingering stares. Everyone seems very much at ease with a nude girl chained to a radiator, as if it\'s the most normal thing in the world.');
    scene.text('You take a deep breath. Mistress wouldn\'t bring you here if this place wasn\'t safe. Right?');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'arousal', 'flash', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub229.jpg');
    scene.text('Just when you\'re starting to feel at ease, a man walks up to you. His eyes are scanning your body intently, greedily consuming every square inch of you.');
    scene.text('You nervously try to start a conversation. "Umm… Hi?"');
    scene.text('"Slaves don\'t talk unless they have permission to talk!" he remarks sharply. "Did you get permission, slave?"');
    scene.text('You meekly shake your head and he chuckles. "Didn\'t think so. Rookie mistake. Still, whoever owns you trained you well. I\'ll just have to wait here and see who comes to pick you up so I can see who to praise."');
    scene.text('Knowing you\'re not allowed to talk, you merely give the man a shrug, making him chuckle again. He studies your body again before he returns to the bar and orders another drink.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/natalya/sex/sub230.jpg');
    scene.text('You watch the clock intently, hoping Mistress will return soon. You\'re feeling nervous about the guys ogling your body every chance they get when another guy approaches you. He looks at you for a while before he strokes your hair gently. "Hey girl, you seem to be in a bit of a pickle. What brings you to a place like this?" he asks with a lewd grin.');
    scene.text('As soon as you flinch away from the man\'s touch, the bartender comes out from behind the bar and grabs him by the scruff of his neck.');
    scene.text('"No touching the slaves, Yevgeny! You should know that by now, damnit!" he shouts angrily as he tosses the guy out of the bar before he can make an apology.');
    scene.text('"Sorry about that," he smirks when he returns. "Yevgeny can be a bit handsy at times, but he\'ll have a long time to think about the mistake he just made."');
    scene.text('Soon after, Mistress returns and hears about what happened. She immediately unlocks you and allows you to put your clothes back on.');
    // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>! No one was supposed to touch you!" she says, genu...
    scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}! No one was supposed to touch you!" she says, genuinely feeling bad about the situation. "Come, I'll take you home. I have no more time right now, but I'll treat you to something nice next time."`);
    scene.actions([
      { label: 'Go back home', goto: ['city_residential', ''] },
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
  scene.build();
}

function enterTreat_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).misttreat ?? {})[1] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub50.jpg');
  scene.text('Mistress smiles at you like she often does, but it\'s a weak smile. Something must have got her down today. Still, you can tell she\'s happy to see you.');
  scene.text('"I could go for a snack, slave. How about you bake me some cookies?" she suggests.');
  scene.text('You enter her kitchen, still nude. You try and make a show out of preparing the dough, making your breasts and ass bounce as she watches you. Once you put the cookies in the oven, you stand in front of it awkwardly, having nothing left to do.');
  scene.text('"Erm… They\'ll be done in about ten minutes, Mistress. How may I serve you in the meantime?" you ask.');
  // TODO-QSP: dynamic text: Mistress nods her head idly and sits down with a sigh. "Entertain me, <<$pcs_nic...
  scene.text(`Mistress nods her head idly and sits down with a sigh. "Entertain me, ${((s as any).pcs_nickname ?? 0)}. Be creative."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 240;
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (2);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub205.jpg');
    scene.text('When you drop to your knees and try to get her to spread her legs, she pushes you away.');
    scene.text('"No, no, no! I said creative! Can\'t you see I\'m not in the mood for that!?" she barks at you. "Stupid slut! Stay there on your knees and don\'t move a muscle!"');
    scene.text('Mistress storms off while you bite your lip. She comes back holding an uncomfortable posture collar, a large ball gag and some wrist cuffs. She proceeds to lock you into those before dragging you by your hair to a corner of the living room.');
    scene.text('"You\'re not going anywhere! That was atrocious!" she snarks as she attaches your wrists to a metal ring on the wall. Your collar is locked onto a chain that goes through another ring, a lot higher up.');
    scene.text('It\'s not until a few minutes in that you realize the chain on the collar is forcing you keep your head up, making it impossible to get comfortable. Several hours later, Mistress finally comes to unlock you.');
    scene.text('"Don\'t take the gag out until you\'re fully clothed and ready to leave. I don\'t want to hear another word from you today," she tells you dismissively.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'Masturbate in front of her', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    scene.img('images/characters/city/natalya/sex/sub51.jpg');
    scene.text('Casting a quick glance around her kitchen, you grab a pan without a second thought. You drop to the ground and guide the handle to your pussy, slowly inserting it with a cute gasp.');
    scene.text('As you slowly thrust the pan handle inside you again and again, you make sure Mistress can hear your gasps and moans as you look at her intently.');
    qspCall(s, 'boyStat', 'd3');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'masturbate');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('Your world gets hazier as you become more intently focused on your imminent orgasm, only vaguely aware that Mistress is still watching you. When your orgasm hits you, you close your eyes and feel the shock rip through your body, making you spasm on the kitchen floor. While you take a second to catch your breath, you hear a slow clap and look up to see Mistress with a wide grin on her face.');
      qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'sub', 'masturbate');
      scene.text('The kitchen timer dings and you remove the pan handle from your pussy before getting up off the floor and walking over to the oven to get your cookies out.');
    } else {
      scene.text('After the ten minutes are up, the kitchen timer dings. You reluctantly let the pan handle slide out of your pussy and get up from the floor, moving over to the oven to get your cookies out.');
    }
    scene.text('As they cool off, you have a little chat with Mistress. You both try a cookie and you\'re happy with how they turned out. Mistress smiles at you benevolently, clearly in a better mood. You really lifted her spirits on a bad day.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTreat_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).misttreat ?? {})[2] = 1;
  qspCall(s, 'arousal', 'foreplay', 30, 'sub', 'bound');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub55.jpg');
  scene.text('"I got some new things for you," Mistress announces as she waits for you to get undressed. "I think you\'re going to like them. I know I will!"');
  scene.text('She guides you to the kitchen table, where a bunch of bondage equipment is laid out on a silver platter. There are several ball gags, some sets of matching cuffs and collars, a brand new leather harness that you think is custom made for you, a leather hood and a brand new riding crop to spank you.');
  scene.text('She begins with the easy-going items, having you test all the leather cuffs and collars first while softly spanking you with the crop. She also has you test the ball gags one by one to see which one you like best.');
  scene.text('To finish up, she locks your hands behind your back with a set of heavy metal cuffs and places a matching collar around your neck. The metal feels cold to the touch and very restrictive. She then makes you open your mouth to put your favourite ball gag in, but doesn\'t lock it in place.');
  scene.text('"What do you think?" she asks with a grin. You nod your head approvingly and look humbly into her eyes. She smiles and removes the items from you. "I knew you\'d like them! Now, how are you going to thank me for getting you these nice things to wear?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Offer to wear them longer', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (2);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub207.jpg');
    scene.text('Assuming you\'re allowed to speak, you spit out the ball gag. "I could wear them a while longer, Mistress? Maybe you could put the things you liked the most on me again?"');
    scene.text('Mistress grins. "Excellent idea! Let\'s see, which pieces do I want you to wear…"');
    scene.text('You\'re not too surprised when she reaches for the leather harness, but your heart sinks when she also grabs the hood that covers your head entirely. It has a built-in ball gag, and only two small holes so you can breathe through your nose.');
    scene.text('Nevertheless, you don\'t object and just let her put everything on you. When Mistress locks your wrists and elbows together behind your back, she chuckles. "Silly me… I went to all this trouble locking you up in front of a mirror! I didn\'t realize that you won\'t be able to admire your new treats! Just take it from me, darling: You look gorgeous!"');
    scene.text('Mistress leaves you like this for what feels like forever, and you\'re becoming a bit claustrophobic from your sensory deprivation.');
    scene.text('Nevertheless, Mistress is in an excellent mood when she takes off your hood and undoes your binds. You quickly look at the clock; two hours have passed since she put the hood on you. She gives you a light kiss on your forehead and smiles. "Thanks for that, dear, you looked fantastic in these! I have to compliment Cedric. He did a great job on your new gear!"');
    qspCall(s, 'arousal', 'foreplay', 15, 'sub', 'bound');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'Offer to thank her with your mouth', handler: (st: GameState) => {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (1);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub56.jpg');
    scene.text('You slide off the chair onto the floor and crawl to your Mistress, intending to lick her pussy like you usually do. However, she lets out a deep sigh and pushes your face away from her groin.');
    scene.text('"Not that, slave. I\'m not in the mood!" she sighs again. You obediently nod and kiss her feet instead. After fifteen minutes, Mistress grows bored and tells you to leave her alone.');
    scene.text('You frown as you put your clothes back on in the hallway. Did you do something wrong?');
    qspCall(s, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTreat_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).misttreat ?? {})[3] = 1;
  qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
  qspCall(s, 'arousal', 'rimming_give', 5, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub13.jpg');
  scene.text('Mistress grins hornily as she inspects you. "I have a special treat for you today, slave. I want you to lick me, and lick me good. Have you ever had the privilege of licking my ass before?"');
  scene.text('"Not that I can remember, Mistress…"');
  scene.text('She smiles before she leans over a bench and pulls up her skirt, exposing her holes to you.');
  scene.text('She grins threateningly. "Let\'s make it interesting: you have fifteen minutes starting… now. If you bring me to orgasm in time, then I\'ll reward you. If you fail, I\'ll punish you."');
  scene.text('You swallow nervously and drop to your knees behind her, focusing on licking her pussy where you know she\'s the most sensitive while also sliding your tongue over her anus every once in a while.');
  scene.text('"Five minutes remaining, slave!" she announces menacingly. You redouble your efforts, using every trick you know to try and get her off in time. Her cute sighs and moans tell you you\'re definitely on the right track…');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('When you suddenly feel her buttocks tremble against your chin, you know she\'s orgasming. Once her orgasm subsides, she pulls away from you and smiles. "Very good, slave. Now, I believe I promised you something…"');
    scene.actions([
      { label: 'Receive your reward', handler: (st: GameState) => {
    if (((s as any).pcs_ass ?? 0) < 30  &&  ((s as any).pcs_ass ?? 0) >= 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    if (((s as any).pcs_ass ?? 0) < 20  &&  ((s as any).pcs_ass ?? 0) >= 10) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    if (((s as any).pcs_ass ?? 0) < 10) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
    }
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = 3;
    qspCall(s, 'stat', '');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.img('images/characters/city/natalya/sex/sub75.jpg');
      scene.text('Mistress makes you bend over before her and your butt plug immediately catches her eye.');
      scene.text('She grins. "You horny minx! Is this a clue? I see how you want to be rewarded! Let\'s just get this out of the way first…"');
      scene.text('She grabs a firm hold of your plug and slowly pulls it out of your ass. She can\'t help but admire your gaping hole, gently rubbing her fingers over it while it closes very slowly.');
      scene.text('"Don\'t worry, slave," she whispers in your ear. "I\'ll be replacing that really soon…"');
      qspCall(s, 'arousal', 'anal_dildo', 15, 'sub', 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).analPlugIn = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub72.jpg');
    scene.text('Mistress comes back holding a long, but not overly thick dildo, which she holds in front of you. "Since you earned a reward, I\'ll even let you lube it up first."');
    scene.text('You close your lips around the dildo, deepthroating it a few times to spread more saliva over the surface. Once you\'re satisfied, you nod.');
    scene.text('"I hope you\'re ready…" she whispers in your ear as you feel the head pressing against your anus. She\'s surprisingly careful and gentle, making sure it\'s a pleasurable experience for you.');
    scene.text('While the fullness in your rectum makes you groan and sigh softly, Mistress\' other hand darts over your clitoris, gently stimulating you.');
    scene.text('Your orgasm is intense, making your legs wobble to the point where you can barely carry your own weight. Mistress smiles at you and kisses your forehead. "I hope you liked your reward, slave."');
    scene.text('You smile meekly at her. "Thank you, Mistress! That was the best orgasm I\'ve had in a long time!"');
    scene.text('She laughs. "Why so surprised? Just because you usually service me doesn\'t mean I don\'t know my way around a girl\'s body! Especially one I\'m as familiar with as yours… Oh, bend over for just one second!"');
    scene.text('You bend over and she rubs your butt plug against your anus for a second before shoving it back in. "There you go! You\'re ready to continue your day! See you soon, slave!"');
    qspCall(s, 'arousal', 'anal_dildo', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/city/natalya/sex/sub72.jpg');
      scene.text('Mistress produces a long, but not overly thick dildo, which she holds in front of you. "Since you earned a reward, I\'ll even let you lube it up first."');
      scene.text('You close your lips around the dildo, deepthroating it a few times to spread more saliva over the surface. Once you\'re satisfied, you nod.');
      scene.text('"I hope you\'re ready…" she whispers in your ear as you feel the head pressing against your anus. She\'s surprisingly careful and gentle, making sure it\'s a pleasurable experience for you.');
      scene.text('While the fullness in your rectum makes you groan and sigh softly, Mistress\' other hand darts over your clitoris, gently stimulating you.');
      scene.text('Your orgasm is intense, making your legs wobble to the point where you can barely carry your own weight. Mistress smiles at you and kisses your forehead. "I hope you liked your reward, slave."');
      scene.text('You smile meekly at her. "Thank you, Mistress! That was the best orgasm I\'ve had in a long time!"');
      scene.text('She laughs. "Why so surprised? Just because you usually service me doesn\'t mean I don\'t know my way around a girl\'s body! Especially one I\'m as familiar with as yours. See you soon, slave!"');
      qspCall(s, 'arousal', 'anal_dildo', 5, 'sub', 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You know she has to be close, but she pulls away from you. "Not good enough, slave!" she says sternly with a disappointed look in her eyes. "Get ready for your punishment."');
    scene.actions([
      { label: 'Receive your punishment', handler: (st: GameState) => {
    if (((s as any).pcs_ass ?? 0) < 30  &&  ((s as any).pcs_ass ?? 0) >= 20) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
      (s as any).agape = 2;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 20);
    }
    if (((s as any).pcs_ass ?? 0) < 20  &&  ((s as any).pcs_ass ?? 0) >= 10) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
      (s as any).agape = 3;
    }
    if (((s as any).pcs_ass ?? 0) < 10) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
      (s as any).agape = 3;
    }
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (2);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (2);
    qspCall(s, 'stat', '');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/subrefuse7plug.jpg');
      scene.text('Mistress makes you bend over before her and your butt plug immediately catches her eye.');
      scene.text('She smirks. "You\'re lucky, slave. I see you were preparing your ass for the punishment it\'s about to receive!"');
      scene.text('She wastes no time pulling the plug out of your ass, admiring your gape before she focuses on the task at hand. "By the time I\'m done with you, that little gape will be a distant memory…" she whispers in your ear.');
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Whimper and cry for forgiveness', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub73.jpg');
    scene.text('Mistress rams her large strap-on inside your ass and starts to brutally stretch your ass with it. She\'s paying absolutely no attention to your grunting, groaning and begging.');
    scene.text('"Mistress, please! It hurts!" you cry out, trying to bite through the pain.');
    scene.text('"That\'s why they call it \'punishment\', slave!" she snaps. "If you wanted to get your ass fucked in a nice and gentle way, you should\'ve tried harder. Now shut up!"');
    scene.text('She keeps pounding your ass until your anus is very sore and no longer closes by itself. Having fucked all the frustration out of her system, she stops and sighs deeply. "Go, slave. Before I change my mind!"');
    scene.text('You don\'t know how fast you scramble to your feet and head for the hallway.');
    qspCall(s, 'arousal', 'anal_strap', 10, 'sub', 'lesbian', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/city/natalya/sex/sub73.jpg');
      scene.text('Mistress rams her large strap-on inside your ass and starts to brutally stretch your ass with it. She\'s paying absolutely no attention to your grunting, groaning and begging.');
      scene.text('"Mistress, please! It hurts!" you cry out, trying to bite through the pain.');
      scene.text('"That\'s why they call it \'punishment\', slave!" she snaps. "If you wanted to get your ass fucked in a nice and gentle way, you should\'ve tried harder. Now shut up!"');
      scene.text('She keeps pounding your ass until your anus is very sore and no longer closes by itself. Having fucked all the frustration out of her system, she stops and sighs deeply. "Go, slave. Before I change my mind!"');
      scene.text('You don\'t know how fast you scramble to your feet and head for the hallway.');
      qspCall(s, 'arousal', 'anal_strap', 10, 'sub', 'lesbian', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTreat_4(s: GameState, scene: SceneBuilder): void {
  ((s as any).misttreat ?? {})[4] = 1;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
  (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (1);
  qspCall(s, 'stat', '');
  if ((!((s as any).analPlugIn ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/city/natalya/sex/sub79.jpg"></...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/city/natalya/sex/sub79.jpg"></center>`);
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/city/natalya/sex/sub78.jpg"></...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/city/natalya/sex/sub78.jpg"></center>`);
  }
  scene.text('Without saying a word, Mistress gets you on your hands and knees. She\'s wearing the large strap-on around her waist.');
  // TODO-QSP: dynamic text: As she slides it in, she finally says something with a smile of recognition on h...
  scene.text(`As she slides it in, she finally says something with a smile of recognition on her face. "Don't you just love how my strap-on stretches your pussy, ${((s as any).pcs_nickname ?? 0)}? You should see your face when I slide this inside you. You make this cute little oh-face!"`);
  scene.text('She starts roughly fucking your pussy. You feel nothing but pleasure as her large rubber cock invades you over and over.');
  qspCall(s, 'arousal', 'vaginal_strap', 40, 'sub', 'lesbian', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 100) {
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (1);
    scene.text('Despite not having permission, you can\'t hold back any longer and orgasm violently on Mistress\' cock. She scolds you and slaps your ass several times, but you don\'t care. That was well worth it!');
  }
  qspCall(s, 'stat', '');
  scene.text('After thirty minutes, Mistress pulls out in a business-like manner and runs her finger over the dildo before bringing it to her tongue.');
  scene.text('"Thank you, Mistress! Thank you… Thank you…" you mutter, unable to form a coherent sentence.');
  scene.text('Mistress smiles at you benevolently while she sucks on her finger. "You\'re welcome, slave. I\'m glad you liked your training. See yourself out, will you?"');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed and leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterAmazing_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistamazing ?? {})[1] = 1;
  qspCall(s, 'arousal', 'pee', 10, 'sub', 'humiliation', 'lesbian');
  qspCall(s, 'sweat', 'add', 30);
  (s as any).MistressObedience = 3;
  (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub80.jpg');
  scene.text('Mistress doesn\'t give you time to finish undressing, placing her hand on your shoulders and impatiently forcing you down');
  scene.text('You look at her questioningly, and immediately understand why when she moves her groin over your face and a trickle of urine escapes her pussy.');
  scene.text('Even though it\'s not something you\'re particularly fond of, you dutifully stay on your knees as she pees all over you, bringing a smile to her face.');
  scene.text('She nods proudly once she\'s finished. "Very good, slave. I shouldn\'t have doubted you," she says before she lets you finish undressing.');
  (s as any).temp_lesbimistress = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_lesbimistress ?? 0))) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub81.jpg');
    scene.text('Mistress guides you to her bedroom and takes a mask off a cabinet. It\'s the dildo mask. She locks the short dildo in your mouth, effectively gagging you as well as training you.');
    scene.text('You nod understandingly and move your head forward. Mistress winces slightly as she rests the tip of the dildo against her asshole.');
    scene.text('"Let me do this, okay?" she asks. She sounds rather nervous.');
    scene.text('For the next few minutes, Mistress gently bucks her hips, slowly letting the head of the dildo slide inside her ass. She re-applies lube every so often, a privilege you never get.');
    scene.text('"Okay, go slowly…" she whispers. You carefully start moving your head back and forth, gently fucking her ass with the dildo.');
    scene.text('Slowly but surely, you go a little faster when you realize Mistress can take it. She\'s idly rubbing her pussy and when she nears her orgasm, she starts bucking her hips against the dildo, taking it deeper in her ass until she violently cums, groaning loudly.');
    // TODO-QSP: dynamic text: Mistress pats your head and kisses you after she takes the mask off. "Thanks <<$...
    scene.text(`Mistress pats your head and kisses you after she takes the mask off. "Thanks ${((s as any).pcs_nickname ?? 0)}, that felt great! Remind me to treat you to something nice next time."`);
    scene.text('"You smile blissfully. "Happy to help, Mistress! Thank you for letting me assist you!"');
    qspCall(s, 'arousal', 'anal_dildo_give', 30, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_lesbimistress ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub82.jpg');
    // TODO-QSP: dynamic text: Mistress smiles at you and gets naked as well. "Let's just have some fun today, ...
    scene.text(`Mistress smiles at you and gets naked as well. "Let's just have some fun today, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She walks over to the couch, holding a long double dildo in her hand. She sits down and to your surprise, slides one end of it deep into her pussy.');
    scene.text('She curves the dildo upwards invitingly and gestures for you to come over. You eagerly move over to Mistress and squat over the dildo, slowly letting it sink inside your soaking pussy.');
    scene.text('You ride Mistress enthusiastically the room is soon filled with the sound of your combined moans. After a while, you feel some small droplets running down your body and realize that Mistress\' urine is still covering you! You should\'ve cleaned that up first!');
    scene.text('Mistress notices your distress and reassures you. "Relax! Consider me your lover right now. I just want you to keep fucking me!" You keep riding her until the both of you have a powerful simultaneous orgasm.');
    scene.text('You slowly get off her and, now that you have permission, do what you\'ve been wanting to do for a long time. You kiss her hard on the lips and embrace her.');
    scene.text('Mistress hugs you back and answers your kiss, but pulls free after a while. "Don\'t count on this becoming a regular thing, but… That was nice."');
    qspCall(s, 'arousal', 'vaginal_dildo', 30, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_lesbimistress ?? 0) === 2) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub83.jpg');
    scene.text('Mistress guides you to her bedroom and takes a mask off a cabinet. It\'s the dildo mask. She locks the short dildo in your mouth, effectively gagging you as well as training your mouth.');
    scene.text('"Give me all you\'ve got. Fuck me with that dildo!" she says as she gets on her knees and bends over, grabbing a Magic Wand to stimulate her clit.');
    scene.text('It takes you a minute to get used to the dildo flopping about in front of your face, but once you get the hang of aiming it, you fuck Mistress\' pussy as best you can.');
    scene.text('Mistress grins when she sees the realisation slowly dawn in your head: you can\'t fuck her that intensely with this thing.');
    scene.text('After a few minutes, your neck feels sore as you keep thrusting the dildo in and out of her, but it\'s not enough to really push Mistress to her limits. Nevertheless, combined with the stimulation on her clit, she reaches a mind shattering orgasm and pulls away from you, laughing when you keep thrusting the dildo in her as she\'s trying to regain her bearings.');
    scene.text('"You little minx! Well played!" she sighs happily, unlocking the harness gag. "That\'s all I need from you. You can get dressed now."');
    qspCall(s, 'arousal', 'vaginal_dildo_give', 15, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp_lesbimistress ?? 0) === 3) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub84.jpg');
    scene.text('Mistress puts on some latex gloves and tells you to get on all fours. When she notices your concerned look, she reassures you. "Don\'t worry, you\'ll like this. Trust me."');
    scene.text('You bite your lip and nod quietly, trying to relax. To your surprise, she only uses her fingers, caressing your anus and pussy before she slides two fingers in your ass and one in your pussy and starts stimulating your clit with her other hand.');
    scene.text('You moan lewdly, fully surrendering yourself to Mistress\' touch. Within minutes, she expertly fondles you to a powerful orgasm, and gently keeps pumping her fingers inside your holes until it fully subsides.');
    scene.text('She smiles at you benevolently while she takes off the gloves. "I told you would like it!"');
    qspCall(s, 'arousal', 'vaginal_finger', 20, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'anal_finger', (-20), 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Thank her with your mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub74.jpg');
    scene.text('You slide off the chair onto the floor and crawl to your Mistress, rubbing your nose against her pussy. "Just this once, I\'ll let you use your fingers too…" she moans.');
    scene.text('You immediately slide two fingers into her wet pussy and slowly fuck her as you lick her pussy, trying to savour the moment for as long as you can. Mistress doesn\'t even object, allowing you to take your time as you slowly bring her closer to orgasm.');
    scene.text('She soon cums and you feel her pussy walls contracting around your fingers as her squirt covers your hand. You lick your fingers after you pull them out.');
    // TODO-QSP: dynamic text: Mistress smiles weakly at you and runs her fingers through your hair. "That was ...
    scene.text(`Mistress smiles weakly at you and runs her fingers through your hair. "That was nice, ${((s as any).pcs_nickname ?? 0)}. It's fun to just let go and enjoy each other every once in a while…"`);
    qspCall(s, 'arousal', 'cuni_give', 25, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAmazing_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistamazing ?? {})[2] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub209.jpg');
  scene.text('Mistress smiles at you like she often does when she sees you, but you can tell she\'s tired.');
  // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, it's good to see you…" she says wearily, seemingly lost i...
  scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, it's good to see you…" she says wearily, seemingly lost in thought for a moment. You notice the whip in her hand and hear a soft whimpering in the corner of the room. You look over and see <a href="exec: VIEW 'images/characters/city/natalya/sex/sub210.jpg'">a girl</a> wearing the tattered remains of a maid uniform with countless whip marks covering her body.`);
  scene.text('You\'re about to say something when Mistress interrupts you. "Peter asked me to keep an eye on her. We exchange slaves from time to time and she\'s been horribly disobedient all day, so she has the welts to prove it. Say, you\'ve been good recently and I feel like getting out of the house for a while. How about I take you out for a drink?"');
  scene.text('"Really? I\'d love to!" you quickly reply.');
  scene.text('Mistress grins. "Of course, I\'d want people to know you belong to me. Since I\'m in such a good today, I\'ll only make you wear a collar. I bought one especially for this occasion."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 75;
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) - (5);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) - (3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub212.jpg');
    scene.text('"I don\'t know…" you hesitantly reply.');
    scene.text('Mistress sighs before slapping you in the face. "Stay here! And no talking with the other slave!" she hisses.');
    scene.text('She returns with a delicate piece of jewelry, which she holds in front of you. "This is the collar I got for today," she sighs with a disappointed look in her eyes. She tries to be firm, but fails to really keep her posture afloat.');
    scene.text('You bite your lip, feeling bad about disappointing her. She locks it around your neck anyway, and cuffs your hands together. She lazily attaches a chain from your collar to the cuffs, but is too distraught to even worry about locking you down further.');
    scene.text('"Just… Sit like this and think…" she mutters dejectedly.');
    scene.text('After an hour she returns and unlocks the handcuffs and collar before carefully putting it back into its box. "That\'s it for today. Just go."');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    (s as any).MistressObedience = 3;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub211.jpg');
    scene.text('When you agree, Mistress smiles happily. "Excellent! Let me go get it,", she says and leaves to get dressed. She comes back with a very thin silver collar, which she locks on your neck. It looks more like jewelry than a restraining device.');
    scene.text('"Exactly your size. You should probably go change. You seem a bit… underdressed for the occasion," she says and kisses your cheek softly. "Make it quick, they\'re saving a table for us."');
    scene.text('To your surprise, Mistress has a gala dress for you to put on as well. Once you approach the location you see why; she\'s not just taking you to some bar or terrace, you\'re going to a fancy château!');
    scene.text('Mistress orders two glasses of champagne and some macarons. You chat about all sorts of things and have a good time. She makes sure your glass is filled again as soon as it\'s empty.');
    scene.text('Most people in the château don\'t give your peculiar necklace another thought, but to her delight a few recognize it for the slave collar that it is and give Mistress a knowing nod.');
    scene.text('After an hour, Mistress decides the two of you should go back home. After you change back into your regular clothes, Mistress kisses your cheek softly again and embraces you.');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, I needed that. Sometimes it's nice to just let loose ...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, I needed that. Sometimes it's nice to just let loose and enjoy each other's company for a change. Don't get too comfortable though! Next time we'll get back to making you the best slavegirl this city has ever seen!" she grins evilly and smacks your ass. "I should check up on Lilia to make sure she's okay. See yourself out, will you?"`);
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAmazing_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).mistamazing ?? {})[3] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('"I feel like relaxing today. Let\'s go swimming!" Mistress says.');
  scene.text('"Mistress, could we stop by my apartment really quick? I didn\'t bring a bathing suit!" you reply.');
  scene.text('"All taken care of, dear. In fact, why don\'t you change into it now? You can wear it under your clothes while we go there" she says with that devious smile on her lips as she hands you a bag.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Put on the bathing suit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub221.jpg');
    scene.text('You frown when you unpack the bathing suit. It\'s made of a sturdy latex and doesn\'t look very comfortable. Then you notice the large dildo attached to the inside!');
    scene.text('With a sigh, you undress and slip into the bathing suit, holding the dildo away from your pussy for now. You look at Mistress hopefully, hoping she was just kidding about you actually wearing the suit, but she just laughs.');
    scene.text('"Go on, stick it in!" she grins. "There\'s no reason we can\'t combine fun with a bit of training as well!"');
    scene.actions([
      { label: 'Wear the suit properly', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub222.jpg');
    scene.text('You silently nod and slide the dildo inside you. It\'s fairly girthy, and your pussy feels fairly full with it lodged inside you.');
    scene.text('"Doesn\'t it feel great? I love that little oh-face you make when you put things in you!" Mistress grins before she gives you a soft kiss on the cheek. "Just to make sure…"');
    scene.text('The dildo suddenly begins to vibrate! You let out a shriek and awkwardly cross your legs as the vibrating stops.');
    scene.text('"Excellent. Let\'s go already! Try not to get off on the way there!" she smirks and throws the remote in her bag before she gestures for you to follow her.');
    qspCall(s, 'arousal', 'vaginal_vibe', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go swimming', handler: (st: GameState) => {
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
    if (((s as any).pcs_stren ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'stren', 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub223.jpg');
    scene.text('Mistress drives you to the pool, and the two of you enter the changing booths. She\'s in the booth next to you, probably smirking every time she hears you groan when she turns the dildo on again. When you both leave your booths, she has the remote in her hand and winks at you.');
    scene.text('"I better bring this with me. Don\'t worry, I won\'t turn it on while you\'re in the water. Wouldn\'t want you to drown while orgasming!" she grins.');
    scene.text('You spend an hour swimming in the pool. To your surprise, she doesn\'t use the remote at all. Then again, she doesn\'t need to: the friction of the dildo is enough to keep you on edge the whole time.');
    scene.text('You get out of the pool and relax on some pool chairs together, where Mistress suddenly puts the vibrator on full blast.');
    scene.text('You give her a begging look, hoping she\'ll turn it off again, but she doesn\'t.');
    scene.text('"Go ahead. I don\'t think anyone is watching," she whispers.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(s, 'arousal', 'vaginal_vibe', 75, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Orgasm loudly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (1);
    (s as any).MistressObedience = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub224.jpg');
    scene.text('Unable to hold yourself back any longer, your body begins to tremble. Without even realizing it, you moan and groan loudly, fully surrendering yourself to the amazing feelings the dildo is giving you.');
    qspCall(s, 'arousal', 'vaginal_vibe', (-5), 'sub');
    qspCall(s, 'arousal', 'end');
    scene.text('A few seconds later, Mistress coughs nervously and you open your eyes again; everyone\'s looking at you!');
    scene.text('"We, erm… We should get going…" Mistress whispers and the two of you get changed in a booth that can hold the two of you.');
    scene.text('"Show me the dildo," she orders.');
    scene.text('When you do, you\'re surprised to see her drop down to her knees before you, and take most of it inside her mouth.');
    scene.text('She pulls back again and licks her lips. "Mmm, tasty… We better get changed quickly and leave. I heard someone talk about calling the police!"');
    scene.text('The two of you quickly get dressed. When you leave the pool, Mistress kisses your cheek. "Do you want me to give you a ride home, or do you want to stay here?"');
    scene.actions([
      { label: 'Stay in the city center', goto: ['city_center', ''] },
      { label: 'Go back to the residential district with her', goto: ['city_residential', ''] },
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

function enterRenewal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: After you finish taking off your clothes, you assume your pose as always. Mistre...
  scene.text(`After you finish taking off your clothes, you assume your pose as always. Mistress nods benevolently, admiring your form for a second. "Follow me, ${((s as any).pcs_nickname ?? 0)}"`);
  scene.text('Mistress walks over to the table and sits on a dining chair while you sit on the floor in front of her.');
  if (((s as any).MistressAdoration ?? 0) >= 60) {
    // TODO-QSP: dynamic text: "You have become quite the obedient slave, <<$pcs_nickname>>. I often get compli...
    scene.text(`"You have become quite the obedient slave, ${((s as any).pcs_nickname ?? 0)}. I often get compliments on how well behaved you are."`);
    scene.text('"Thank you, Mistress," you smile.');
    scene.text('"I was looking through our paperwork the other day," she continues. "I noticed that our contract has expired. Would you like to renew it and serve me for another year?"');
  } else {
    if (((s as any).MistressAdoration ?? 0) > 30  &&  ((s as any).MistressAdoration ?? 0) <= 60) {
      scene.text('"I was looking through our paperwork the other day," she says. "I noticed that our contract has expired. Would you like to renew it and continue your training?"');
    } else {
      if (((s as any).MistressAdoration ?? 0) <= 30) {
        scene.text('"I was looking through our paperwork the other day," she says. "I noticed that our contract has expired."');
        scene.text('When you\'re about to say something, she interrupts you. "I\'m not finished! I have to say… I\'m not satisfied with your performance. Your obedience is very lacking. I\'m not sure if we should consider renewing it."');
      }
    }
  }
  if (((s as any).MistressAdoration ?? 0) >= 60) {
    scene.actions([
      { label: 'Renew your contract for a year', handler: (st: GameState) => {
    (s as any).mistresscontract = ((s as any).daystart ?? 0) + 365;
    (s as any).MistressObedience = 5;
    scene.text('You nod meekly, eager for the opportunity. "I would love to keep serving you, Mistress! Where do I sign?"');
    scene.text('Mistress hands you a few sheets of paper and you quickly browse through the contract; it\'s the exact same as before, the only thing that changed is the date.');
    scene.text('You sign the contract without hesitation, and offer it back to Mistress for safekeeping.');
    scene.text('Mistress lightly pats your head and strokes your hair in an almost endearing fashion while she checks everything. "Everything appears to be in order," she smiles. "Come on, let\'s go do something nice today. We should celebrate."');
    scene.actions([
      { label: 'Continue', goto: ['lesbimistress', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).MistressAdoration ?? 0) > 30  &&  ((s as any).MistressAdoration ?? 0) <= 60) {
      scene.actions([
        { label: 'Renew your contract for a year', handler: (st: GameState) => {
    (s as any).mistresscontract = ((s as any).daystart ?? 0) + 365;
    (s as any).MistressObedience = ((s as any).MistressObedience ?? 0) + (2);
    scene.text('You silently nod, realizing that there is still a lot Mistress could teach you. Besides, you\'ve grown to enjoy your visits and don\'t want them to stop.');
    scene.text('"I would, Mistress. Thank you for this opportunity."');
    scene.text('Mistress smiles at you benevolently, and takes the contract from you when you finish signing it. It\'s the exact same contract you signed before, only the dates changed.');
    scene.text('She quickly checks to see if you filled it out correctly, and gives you a satisfied nod when she sees you did.');
    scene.text('She then stands up and grabs you by the hair before playfully kissing your forehead. "Excellent. Come, slave, let\'s continue your training right now."');
    scene.actions([
      { label: 'Continue', goto: ['lesbimistress', 'start'] },
    ]);
  } },
        { label: 'Respectfully decline', handler: (st: GameState) => {
    (s as any).lesbiQW = (-1);
    scene.text('You knew this day would come soon, and had already given it some thought.');
    scene.text('It\'s difficult to bring up. You pause for a second, trying to find the right words, and say: "Erm, sorry Mistress, but… no. While I appreciate everything you have done, I don\'t think this is the lifestyle for me."');
    scene.text('Mistress is disappointed of course, but to your surprise she does not object.');
    scene.text('She simply sighs: "Get up, then. I had a feeling you would say no."');
    // TODO-QSP: dynamic text: When you get up to your feet, Mistress walks over to you and gives you a tender ...
    scene.text(`When you get up to your feet, Mistress walks over to you and gives you a tender kiss on your forehead. "Take care, ${((s as any).pcs_nickname ?? 0)}… maybe I'll see you again at the club one day."`);
    scene.actions([
      { label: 'Say goodbye to Mistress and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Beg her for another chance', handler: (st: GameState) => {
    (s as any).mistresscontract = ((s as any).daystart ?? 0) + 365;
    (s as any).MistressObedience = 2;
    scene.text('"Mistress, please!" you beg. "Please give me another chance, I promise I\'ll do better!"');
    scene.text('Mistress raises her eyebrow and gives you an amused smirk. "Oh, really?"');
    scene.text('You nod, looking at her with big, pleading eyes. "I promise, Mistress! Please don\'t give up on me!"');
    scene.text('"Well… I guess we can try for one more year, but I do expect improvement in your behaviour, and I expect it soon. This year will be very tough on you if you keep disappointing me. Do you understand?" she asks as she gives you the contract.');
    scene.text('"Yes, Mistress! Thank you, Mistress!", you mumble while quickly browsing the sheets. It\'s the exact same contract as last year, only the dates have changed.');
    scene.text('You sign the contract and hand it back to Mistress. She\'s still looking at you with that amused smirk on her face. "Alright, slave. Let\'s see how obedient you can be…"');
    scene.actions([
      { label: 'Continue', goto: ['lesbimistress', 'start'] },
    ]);
  } },
        { label: 'Agree to call it quits', handler: (st: GameState) => {
    (s as any).lesbiQW = (-1);
    scene.text('You have to agree when you hear Mistress\' reluctance; you\'re not so sure you want to keep doing this either.');
    scene.text('When you don\'t respond, Mistress decides for you. "Your silence says it all, dear. Get up."');
    scene.text('You do as she says, noticing how Mistress\' demeanour suddenly changed. It\'s as if she completely lost interest in you the moment you didn\'t speak up.');
    // TODO-QSP: dynamic text: You chat for a few more minutes, reminiscing of the good times of your service b...
    scene.text(`You chat for a few more minutes, reminiscing of the good times of your service before she walks you to the door. "I guess this is where we part ways. Take care, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Farewell, Mistress…" you mutter, feeling a little sad despite knowing it was the only choice.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBDSMEV(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 0) {
    // TODO-QSP: dynamic text: "Finish taking your clothes off and meet me in the kitchen, <<$pcs_nickname>>. W...
    scene.text(`"Finish taking your clothes off and meet me in the kitchen, ${((s as any).pcs_nickname ?? 0)}. We have to talk," Mistress orders before she walks away.`);
    scene.text('You get undressed as quickly as you can, not bothering to neatly fold your clothes like you normally do. Instead, you just dump them in a corner and hurry towards the kitchen.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/hosjaika.jpg');
    scene.text('When you enter the kitchen, you can tell that Mistress is quite tipsy. The mostly empty bottle of wine on the table confirms your suspicion. She sits down and pulls her leg up, unaware of the fact she\'s revealing her panties to you.');
    scene.text('"Get down on your knees!" she commands. When you kneel next to her chair, she pours some of the wine in a dog bowl and sets it on the floor in front of you. "Cheers!" she grins as she raises her glass.');
    scene.text('You humour her, and lap up some of the wine from the bowl. Mistress watches you happily, pouring herself another glass of wine as well.');
    scene.text('"I\'m sure you\'ve heard about the BDSM club I go to by now?"');
    scene.text('"Once or twice, Mistress…" you nod. "Don\'t some of your guests go there sometimes too?"');
    scene.text('She chuckles: "Indeed, they do. In fact, they were very impressed with what they\'ve seen of you. So much that one of them suggested I give you this."');
    scene.text('She offers you a black card. There\'s a three-dimensional glimmering logo on it, but no text at all. You look at her questioningly.');
    scene.text('"I think you\'d really like the club," she says. "Invitations to the club are not given out easily. It\'s very exclusive and high-class."');
    scene.text('Realizing that doesn\'t answer your question, she continues. "That card is an official invitation. The guards at the door will recognize it, and allow you access. What you do once you\'re in, is up to you."');
    scene.text('You lean down and take another sip of wine from the bowl, making Mistress chuckle. "Oh darling, they will <i>so</i> love you there…"');
    scene.text('"But there\'s no address on the card, Mistress. How would I find it?" you ask.');
    scene.text('"Fair point. Get dressed. I\'ll call a taxi that will take you there," she replies.');
    scene.text('You lick your lips, trying to clean the wine from your face. "Right now, Mistress?"');
    scene.text('"Right now," she nods. "Actually… Come here and give me a kiss first."');
    scene.text('You crawl over to Mistress and reach up, softly placing your lips against hers. She moans happily for a second before she signals for you to get dressed. "Make me proud, dear!" she shouts from the kitchen as you\'re putting your clothes on in the hallway.');
    qspCall(s, 'arousal', 'kiss', 5, 'sub', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the BDSM club', goto: ['bdsm_mansion', 'taxi'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMistvisit(s: GameState, scene: SceneBuilder): void {
  scene.text('The doorbell rings.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer it', handler: (st: GameState) => {
    scene.text('You approach the door and look through the peephole. Outside, you see the familiar female figure of your obviously drunk Mistress.');
    scene.text('"Open the door, you mischievous bitch! I know that you\'re home!" she angrily demands, looking through the peephole straight in your eye.');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ignore her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Open the door', handler: (st: GameState) => {
    (s as any).lesbiday = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/quarrel.jpg');
    scene.text('Crestfallen, you open the door, too scared to ignore your Mistress. Barely having crossed the threshold, she immediately grabs you firmly by the neck and forces you against the wall.');
    scene.text('What the fuck were you thinking, bitch?! That you could ignore your obligations and forget about your Mistress?! Now you\'ve forced me to come here and teach you some manners!');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'large');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (5);
    qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
    qspCall(s, 'pain', '', 3, 'breasts', 'spank');
    qspCall(s, 'pain', '', 3, 'pubic', 'spank');
    qspCall(s, 'pain', '', 3, 'feet', 'spank');
    qspCall(s, 'pain', '', 3, 'thighs', 'spank');
    qspCall(s, 'pain', '', 3, 'neck', 'spank');
    (s as any).fingal = 1;
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    if (qspFunc(s, 'money', 'can_afford', 100, 'desk') === 1) {
      qspCall(s, 'money', 'pay', 100, 'desk');
    } else {
      qspCall(s, 'money', 'set', 0, 'cash');
    }
    (s as any).paytomistress = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub44.jpg');
    scene.text('Mistress angrily rips off your clothes and starts to brutally spank you while screaming obscene curses at you. You howl and roll up on the floor in tears as she pays particular attention to your breasts, butt and feet.');
    scene.text('She snatches some of the cash you have on you before leaving, not even bothering to close the door.');
    scene.actions([
      { label: 'Close the door', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterMistmeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcStat', 'A128');
  qspCall(s, 'npcStat', 'A178', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/mistmeet.jpg');
  scene.text('As you\'re walking down the street, you suddenly bump into your Mistress. Seeing you, an evil grin suddenly appears on her lips and she quickly whispers something to her companion.');
  scene.text('After a moment, you find yourself sandwiched between them and Mistress exposes your breasts to passers-by.');
  scene.text('"I\'m not so easy to escape, am I bitch?!" she hisses in your ear.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/mistmeet1.jpg');
    scene.text('Mistress forces you to bend over in the middle of the street as her companion lifts your skirt, exposing your naked ass to everyone watching.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'exhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/mistmeet2.jpg');
    scene.text('Mistress grabs the thin fabric of your panties and forcefully pulls them up. Feeling your panties painfully digging into you, you have no choice but to follow her.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'exhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go for it', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/mistmeet3.jpg');
    scene.text('You try to fight back, but she clasps her hand over your mouth and continues to pull along. Her companion immediately moves behind you in case you try something else as Mistress leads you to an alley, where her companion forces you onto your knees.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    if ((!((s as any).mistmeets ?? 0))) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).lesbiday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/mistmeet4.jpg');
    scene.text('The man laughs as he pulls down his pants and Mistress slaps you a few times before tightly grabbing your head and forcing you to take his cock into your mouth. She grins as she forces you to suck the man\'s cock.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).mistmeets = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID ?? 0), 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/city/natalya/sex/mistmeet5.jpg');
    scene.text('After a few minutes, Mistress grabs your hair and pulls you off the man\'s cock. Having the opportunity to speak, you stutter as you beg for forgiveness, but she pulls a gag from her purse and stuffs it in your mouth before forcing you to lean against the wall and bend over. The man proceeds to unceremoniously penetrate your pussy and fuck you before he pulls out and cums over your face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).mistmeets = 1;
    qspCall(s, 'money', 'set', 0, 'cash');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/mistmeet6.jpg');
    scene.text('Mistress orders you to clean his cock with your tongue. After doing so, she orders you to squat on the ground, put your hands behind your head and wait in this position until they leave. You do as you\'re told, and as soon as they\'re out of sight, you start cleaning yourself up.');
    scene.actions([
      { label: 'Finish', goto: ['city_residential', ''] },
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
    case 'gholefinish':
      enterGholefinish(s, scene);
      break;
    case 'gholepunish':
      enterGholepunish(s, scene);
      break;
    case 'severe_1':
      enterSevere_1(s, scene);
      break;
    case 'severe_2':
      enterSevere_2(s, scene);
      break;
    case 'severe_3':
      enterSevere_3(s, scene);
      break;
    case 'severe_4':
      enterSevere_4(s, scene);
      break;
    case 'punish_1':
      enterPunish_1(s, scene);
      break;
    case 'punish_2':
      enterPunish_2(s, scene);
      break;
    case 'punish_3':
      enterPunish_3(s, scene);
      break;
    case 'punish_4':
      enterPunish_4(s, scene);
      break;
    case 'punish_5':
      enterPunish_5(s, scene);
      break;
    case 'punish_6':
      enterPunish_6(s, scene);
      break;
    case 'neutral_1':
      enterNeutral_1(s, scene);
      break;
    case 'neutral_2':
      enterNeutral_2(s, scene);
      break;
    case 'neutral_3':
      enterNeutral_3(s, scene);
      break;
    case 'neutral_4':
      enterNeutral_4(s, scene);
      break;
    case 'neutral_5':
      enterNeutral_5(s, scene);
      break;
    case 'neutral_6':
      enterNeutral_6(s, scene);
      break;
    case 'neutral_7':
      enterNeutral_7(s, scene);
      break;
    case 'neutral_8':
      enterNeutral_8(s, scene);
      break;
    case 'neutral_9':
      enterNeutral_9(s, scene);
      break;
    case 'treat_1':
      enterTreat_1(s, scene);
      break;
    case 'treat_2':
      enterTreat_2(s, scene);
      break;
    case 'treat_3':
      enterTreat_3(s, scene);
      break;
    case 'treat_4':
      enterTreat_4(s, scene);
      break;
    case 'amazing_1':
      enterAmazing_1(s, scene);
      break;
    case 'amazing_2':
      enterAmazing_2(s, scene);
      break;
    case 'amazing_3':
      enterAmazing_3(s, scene);
      break;
    case 'renewal':
      enterRenewal(s, scene);
      break;
    case 'BDSMEV':
      enterBDSMEV(s, scene);
      break;
    case 'mistvisit':
      enterMistvisit(s, scene);
      break;
    case 'mistmeet':
      enterMistmeet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lesbimistress: LocationDef = {
  name: 'lesbimistress',
  title: 'It\'s been a while since you went to see Mistress, but you fi',
  region: 'other',
  enter: enter,
};
