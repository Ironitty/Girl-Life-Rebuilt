import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).katjaQW['kitchen_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 'kitchen', 1);
  if ((((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 3  ||  (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 65))  &&  ((s as any).katjaQW ?? 0)?.['take_of_panties_day'] !== ((s as any).daystart ?? 0)) {
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting1.jpg');
    // TODO-QSP: dynamic text: You find Katja sitting alone in a chair. "Hi, ' + iif( katjaQW['couple'] = 0, '<...
    scene.text(`You find Katja sitting alone in a chair. "Hi, ' + iif( katjaQW['couple'] = 0, '${((s as any).pcs_nickname ?? 0)}', 'my love') + '! What are you doing here?" Katja asks when she sees you.`);
    // TODO-QSP: dynamic text: "I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking aro...
    scene.text('"I \' + iif($ARGS[1] = \'from_room\', \'came looking for you\', \'was just looking around\') + \', what are you doing?" you ask in return.');
    scene.text('"I\'m just waiting for my food to finish cooking," she says, pointing at the oven.');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
    (s as any).katjaQW['no_panties_day'] = ((s as any).daystart ?? 0);
    if (((s as any).PCloSkirt ?? 0) >= 1) {
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${Math.floor(Math.random() * 6) + 1}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing off your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${Math.floor(Math.random() * 3) + 1}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your pussy.');
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] < 30  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can't just go around flashing your pu… You aren't wearin...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! You can't just go around flashing your pu… You aren't wearing panties! What are you doing?! Put some on!" Katja exclaims in shock.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can't just go around flashing your pussy. Put some panti...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! You can't just go around flashing your pussy. Put some panties on!" Katja says, though she's clearly not really angry.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
      if (((s as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
        // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
        scene.text(`"Stop it, ${((s as any).pcs_nickname ?? 0)}! You should really put some panties on," Katja says, but she can't seem to keep her eyes from staring at your pussy.`);
        scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on," Katja say...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, you naughty girl! You should put some panties on," Katja says, not at all convincingly, while her eyes devour your exposed pussy.`);
        scene.text('"I don\'t wear panties since it\'s much nicer not to wear them. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
      }
      scene.actions([
        { label: 'Katja\'s turn', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0) {
      qspCall(s, 'arousal', 'erotic', (-2));
      qspCall(s, 'arousal', 'end');
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties1.jpg');
      scene.text('Katja looks to see if anybody else is around. "I really shouldn\'t be doing this…" she says with some hesitation.');
      scene.text('"Come on, I showed you mine; it\'s only fair that you do it, too," you reply.');
      scene.text('She pulls up her skirt, spreads her legs, and shows off her red panties.');
      scene.text('"See, I\'m still wearing panties. Happy now?" she says with a sly smile.');
      scene.text('"Not really. You should NOT be wearing panties, that would make me happy," you tell her.');
      scene.text('"You wish! Only sluts like you walk around without panties," she shoots back, laughing with a glint in her eye before closing her legs and pulling down her skirt again.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 30) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting1.jpg');
        scene.text('"I\'m not some slut that goes around flashing my panties to everyone! Panties which, by the way, I am wearing," she says with a firm, yet still affectionate, tone.');
        scene.text('"Sorry I asked. But I do think that you could stand to loosen up a little," you reply.');
      } else {
        (s as any).katjaQW['pantiesQWstage'] = 1;
        qspCall(s, 'arousal', 'erotic', (-2));
        qspCall(s, 'arousal', 'end');
        (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
        (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (4);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties1.jpg');
        scene.text('Katja looks to see if anybody else is around. "I don\'t know. We really shouldn\'t be doing such things…" she says.');
        scene.text('"Come on! I showed you mine, now it\'s only fair that you do it, too," you reply.');
        scene.text('She looks around one more time to make sure you are alone and then pulls up her skirt, spreads her legs, and shows off her red panties.');
        scene.text('"See, I\'m wearing panties. Happy now?" She smiles slyly before closing her legs and pulling her skirt down again.');
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting2.jpg');
      // TODO-QSP: dynamic text: You find Katja sitting alone at the dinner table. "Hi, ' + iif( katjaQW['couple'...
      scene.text(`You find Katja sitting alone at the dinner table. "Hi, ' + iif( katjaQW['couple'] = 0, '${((s as any).pcs_nickname ?? 0)}', 'my love') + '! What are you doing here?" she asks when she sees you.`);
      // TODO-QSP: dynamic text: "I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking aro...
      scene.text('"I \' + iif($ARGS[1] = \'from_room\', \'came looking for you\', \'was just looking around\') + \'. What are you doing?" you ask back.');
      scene.text('"I\'m just waiting for my food to finish cooking," she answers, pointing at the oven.');
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
    (s as any).katjaQW['no_panties_day'] = ((s as any).daystart ?? 0);
    if (((s as any).PCloSkirt ?? 0) > 1) {
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${Math.floor(Math.random() * 6) + 1}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing off your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${Math.floor(Math.random() * 3) + 1}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your pussy.');
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
      // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
      scene.text(`"Stop it, ${((s as any).pcs_nickname ?? 0)}! You should really put some panties on," Katja says, though she can't seem to keep her eyes from staring at your pussy.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you respond as you cover your pussy again.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on!" Katja say...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, you naughty girl! You should put some panties on!" Katja says, not at all convincingly, while her eyes devour your exposed pussy.`);
      scene.text('"I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you respond as you cover your pussy again.');
    }
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
      qspCall(s, 'arousal', 'erotic', (-2));
      qspCall(s, 'stat', '');
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
      scene.text('Katja spreads her legs and hikes up her skirt, showing you her simple, white panties.');
      scene.text('"Why are you wearing panties again?" you ask.');
      scene.text('"Because I\'m not walking around without panties in public. I\'m a good girl, not a slut like some others," Katja says with a wink.');
      scene.actions([
        { label: 'Get her to remove her panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'end');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_taking_of_panties.jpg');
    if (((s as any).katjaQW ?? 0)?.['slut'] < 80) {
      scene.text('"Come oooon, Katja," you plead. "Take those off! You\'ve done it before!"');
      scene.text('She looks around for a moment before sighing. "Fine, you pervert."');
      scene.text('Then she gets up, turns her butt towards you, and slowly takes off her panties; pausing to look back at you just before her pussy is visible.');
      scene.text('"Happy now?" she asks after she\'s fully taken them off.');
    } else {
      (s as any).katjaQW['pantiesQWstage'] = 5;
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (4);
      scene.text('"I\'m getting really annoyed that I have to keep telling you to take off your panties. You have to learn that proper girls like us don\'t wear these to Uni," you say in a fake angry voice.');
      scene.text('She looks around and sighs. "Fine, you pervert."');
      scene.text('She gets up, turns her butt towards you, and slowly takes off her panties; pausing to look back at you just before her pussy is visible.');
      // TODO-QSP: dynamic text: After, she hands you her panties. "Here, ' + iif(lazarQW['your_prize_panties_kat...
      scene.text('After, she hands you her panties. "Here, \' + iif(lazarQW[\'your_prize_panties_katja\'] = 0, \'you can have them\', \'another pair for your collection\') + \' since you insist that I have to be a slut; I don\'t need them anymore."');
      if (((s as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) {
        (s as any).lazarQW['your_prize_panties_katja'] = 1;
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'erotic', (-2));
      qspCall(s, 'stat', '');
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
      scene.text('Katja spreads her legs and hikes up her skirt, showing you her simple, white panties.');
      scene.text('"Happy now?" she asks.');
      scene.text('"You know I won\'t be happy until you take those off," you reply.');
      scene.text('"You are relentless!" Katja says.');
      scene.text('"You know I\'m not a quitter," you respond with a smirk.');
      scene.actions([
        { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
    scene.text('She looks around and slowly stands up. "You really want me to follow your slutty example?" she asks.');
    scene.text('"Yes, I do. It\'s so much nicer without panties, the breeze on your pussy is so liberating! You should really try it," you answer.');
    scene.actions([
      { label: 'Katja finally relents', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'end');
    (s as any).katjaQW['pantiesQWstage'] = 4;
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_taking_of_panties.jpg');
    scene.text('She gets up, turns her butt towards you, and slowly takes off her panties, pausing to look back at you just before her pussy is visible.');
    scene.text('"Happy now?" she says when they\'re completely off.');
    // TODO-QSP: dynamic text: "Yes! This is going to be so much fun. Think about how thrilling it will to be c...
    scene.text('"Yes! This is going to be so much fun. Think about how thrilling it will to be careful so you don\'t give \' + iif(katjaQW[\'boy_block\'] = 1, \'other girls\', \'boys\') + \' a peek of your pussy!" you enthusiastically chirp.');
    scene.text('"I\'m already regretting this…" Katja groans. But she doesn\'t look upset, nor does she make any move to put her panties back on.');
    scene.actions([
      { label: 'leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).week ?? 0) < 4  &&  (((s as any).katjaQW ?? 0)?.['slut'] < 100  ||  ((s as any).hour ?? 0) < 18)) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing1.jpg');
        // TODO-QSP: dynamic text: You find Katja standing at the kitchen table. "Hi, ' + iif( katjaQW['couple'] = ...
        scene.text(`You find Katja standing at the kitchen table. "Hi, ' + iif( katjaQW['couple'] = 0, '${((s as any).pcs_nickname ?? 0)}', 'my love') + '! What are you doing here?" Katja asks when she sees you.`);
        // TODO-QSP: dynamic text: "I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking aro...
        scene.text('"I \' + iif($ARGS[1] = \'from_room\', \'came looking for you\', \'was just looking around\') + \'. What are you doing?" you ask back.');
        scene.text('"I\'m staring to cook my dinner," she answers.');
      } else {
        (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (2);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_with_drink.jpg');
        // TODO-QSP: dynamic text: You find Katja standing at the kitchen table drinking a glass of white wine. "Hi...
        scene.text(`You find Katja standing at the kitchen table drinking a glass of white wine. "Hi, ' + iif( katjaQW['couple'] = 0, '${((s as any).pcs_nickname ?? 0)}', 'my love') + '. What are you doing here?" Katja asks when she sees you.`);
        // TODO-QSP: dynamic text: "I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking aro...
        scene.text('"I \' + iif($ARGS[1] = \'from_room\', \'came looking for you\', \'was just looking around\') + \'. What are you doing?" you ask back.');
        scene.text('"I\'m just having a glass of wine before I start to cook my dinner," she answers.');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
          scene.text('"Why don\'t you have a glass with me?" she asks before looking for another glass.');
          scene.actions([
            { label: 'Drink a glass with Katja', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'wine', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_with_drink.jpg');
    scene.text('"I would love a glass of wine," you say, and she pours one for you. You spend some minutes drinking it while she continues her preparations for dinner.');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    (s as any).katjaQW['no_panties_day'] = ((s as any).daystart ?? 0);
    if (((s as any).PCloSkirt ?? 0) > 1) {
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${Math.floor(Math.random() * 6) + 1}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt to show Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${Math.floor(Math.random() * 3) + 1}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants to show Katja your pussy.');
    }
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_pantyquest', 'kitchen_show_pussy'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to see if she still isn\'t wearing panties', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'erotic', (-5));
    qspCall(s, 'arousal', 'end');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_showing_pussy2.jpg');
    scene.text('You recall that you got Katja to take off her panties earlier today and wonder if she\'s still not wearing them. After all, she has changed her clothes since then.');
    scene.text('So you try to discreetly bend down to see up her skirt when she has her back to you.');
    scene.text('But she notices you. "No, I didn\'t put my panties back on, just like you asked. This is what you want to see, isn\'t it, you pervert?" she asks mockingly while she pulls up her skirt, showing you her naked behind.');
    scene.text('After a moment, she lets her skirt fall down. "That\'s enough for voyeurs like you," she adds before continuing with her cooking.');
    scene.actions([
      { label: 'Thank her for the wine and leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Thank her for the wine and leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2);
    qspCall(s, 'stat', '');
    (s as any).katjaQW['no_panties_day'] = ((s as any).daystart ?? 0);
    if (((s as any).PCloSkirt ?? 0) > 1) {
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${Math.floor(Math.random() * 6) + 1}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${Math.floor(Math.random() * 3) + 1}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your bare pussy.');
    }
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_pantyquest', 'kitchen_show_pussy'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Try to see if she still isn\'t wearing panties', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'erotic', (-2));
    qspCall(s, 'arousal', 'end');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_showing_pussy2.jpg');
    scene.text('You recall that you got Katja to take off her panties earlier today and wonder if she\'s still not wearing them. After all, she has changed her clothes since then.');
    scene.text('So you try to discreetly bend down to see up her skirt when she has her back to you.');
    scene.text('But she notices you. "No, I didn\'t put my panties back on, just like you asked. This is what you want to see, isn\'t it, you pervert?" she asks mockingly while she pulls up her skirt, showing you her naked behind.');
    scene.text('After a moment, she lets her skirt fall down. "That\'s enough for voyeurs like you," she adds before continuing with her cooking.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', 'dorm_kitchen', 'second_floor'
  } },
    ]);
  }
  scene.build();
}

export const katja_pantyquest: LocationDef = {
  name: 'katja_pantyquest',
  title: '"I\'m just waiting for my food to finish cooking," she says, ',
  region: 'other',
  description: ['"I\'m just waiting for my food to finish cooking," she says, pointing at the oven.'],
  enter: enter,
};
