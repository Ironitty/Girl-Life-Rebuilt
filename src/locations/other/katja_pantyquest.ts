import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['kitchen_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 'kitchen', 1);
  if ((((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 3  ||  (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 65))  &&  ((s as any).katjaQW ?? 0)?.['take_of_panties_day'] !== ((s as any).daystart ?? 0)) {
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting1.jpg');
    // TODO-QSP: dynamic text: 'You find Katja sitting alone in a chair. "Hi, ' + iif( katjaQW['couple'] = 0, '...
    scene.text('You find Katja sitting alone in a chair. "Hi, ' + ((((s as any).katjaQW ?? 0)?.['couple'] === 0) ? ('' + ((s as any).pcs_nickname ?? '') + '') : ('my love')) + '! What are you doing here?" Katja asks when she sees you.');
    // TODO-QSP: dynamic text: '"I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking ar...
    scene.text('"I ' + ((String((s as any).locArgs?.[1] ?? '') === 'from_room') ? ('came looking for you') : ('was just looking around')) + ', what are you doing?" you ask in return.');
    scene.text('"I\'m just waiting for my food to finish cooking," she says, pointing at the oven.');
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) >= 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing off your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your pussy.');
    }
    if (((st as any).katjaQW ?? 0)?.['slut'] < 30  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pu… You aren''t wear...
      scene.text(`"${((st as any).pcs_nickname ?? '')}! You can't just go around flashing your pu… You aren't wearing panties! What are you doing?! Put some on!" Katja exclaims in shock.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 50  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 2) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pussy. Put some pant...
        scene.text(`"${((st as any).pcs_nickname ?? '')}! You can't just go around flashing your pussy. Put some panties on!" Katja says, though she's clearly not really angry.`);
        scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
          // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
          scene.text(`"Stop it, ${((st as any).pcs_nickname ?? '')}! You should really put some panties on," Katja says, but she can't seem to keep her eyes from staring at your pussy.`);
          scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on," Katja say...
          scene.text(`"${((st as any).pcs_nickname ?? '')}, you naughty girl! You should put some panties on," Katja says, not at all convincingly, while her eyes devour your exposed pussy.`);
          scene.text('"I don\'t wear panties since it\'s much nicer not to wear them. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
        }
      }
    }
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0) {
      qspCall(st, 'arousal', 'erotic', (-2));
      qspCall(st, 'arousal', 'end');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties1.jpg');
      scene.text('Katja looks to see if anybody else is around. "I really shouldn\'t be doing this…" she says with some hesitation.');
      scene.text('"Come on, I showed you mine; it\'s only fair that you do it, too," you reply.');
      scene.text('She pulls up her skirt, spreads her legs, and shows off her red panties.');
      scene.text('"See, I\'m still wearing panties. Happy now?" she says with a sly smile.');
      scene.text('"Not really. You should NOT be wearing panties, that would make me happy," you tell her.');
      scene.text('"You wish! Only sluts like you walk around without panties," she shoots back, laughing with a glint in her eye before closing her legs and pulling down her skirt again.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 30) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting1.jpg');
        scene.text('"I\'m not some slut that goes around flashing my panties to everyone! Panties which, by the way, I am wearing," she says with a firm, yet still affectionate, tone.');
        scene.text('"Sorry I asked. But I do think that you could stand to loosen up a little," you reply.');
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 1;
        qspCall(st, 'arousal', 'erotic', (-2));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties1.jpg');
        scene.text('Katja looks to see if anybody else is around. "I don\'t know. We really shouldn\'t be doing such things…" she says.');
        scene.text('"Come on! I showed you mine, now it\'s only fair that you do it, too," you reply.');
        scene.text('She looks around one more time to make sure you are alone and then pulls up her skirt, spreads her legs, and shows off her red panties.');
        scene.text('"See, I\'m wearing panties. Happy now?" She smiles slyly before closing her legs and pulling her skirt down again.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 5  &&  ((s as any).katjaQW ?? 0)?.['take_of_panties_day'] !== ((s as any).daystart ?? 0)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting2.jpg');
      // TODO-QSP: dynamic text: 'You find Katja sitting alone at the dinner table. "Hi, ' + iif( katjaQW['couple...
      scene.text('You find Katja sitting alone at the dinner table. "Hi, ' + ((((s as any).katjaQW ?? 0)?.['couple'] === 0) ? ('' + ((s as any).pcs_nickname ?? '') + '') : ('my love')) + '! What are you doing here?" she asks when she sees you.');
      // TODO-QSP: dynamic text: '"I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking ar...
      scene.text('"I ' + ((String((s as any).locArgs?.[1] ?? '') === 'from_room') ? ('came looking for you') : ('was just looking around')) + '. What are you doing?" you ask back.');
      scene.text('"I\'m just waiting for my food to finish cooking," she answers, pointing at the oven.');
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) > 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing off your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your pussy.');
    }
    if (((st as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
      // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
      scene.text(`"Stop it, ${((st as any).pcs_nickname ?? '')}! You should really put some panties on," Katja says, though she can't seem to keep her eyes from staring at your pussy.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you respond as you cover your pussy again.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on!" Katja say...
      scene.text(`"${((st as any).pcs_nickname ?? '')}, you naughty girl! You should put some panties on!" Katja says, not at all convincingly, while her eyes devour your exposed pussy.`);
      scene.text('"I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you respond as you cover your pussy again.');
    }
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
      qspCall(st, 'arousal', 'erotic', (-2));
      qspCall(st, 'stat', '');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
      scene.text('Katja spreads her legs and hikes up her skirt, showing you her simple, white panties.');
      scene.text('"Why are you wearing panties again?" you ask.');
      scene.text('"Because I\'m not walking around without panties in public. I\'m a good girl, not a slut like some others," Katja says with a wink.');
      scene.actions([
        { label: 'Get her to remove her panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_taking_of_panties.jpg');
    if (((st as any).katjaQW ?? 0)?.['slut'] < 80) {
      scene.text('"Come oooon, Katja," you plead. "Take those off! You\'ve done it before!"');
      scene.text('She looks around for a moment before sighing. "Fine, you pervert."');
      scene.text('Then she gets up, turns her butt towards you, and slowly takes off her panties; pausing to look back at you just before her pussy is visible.');
      scene.text('"Happy now?" she asks after she\'s fully taken them off.');
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 5;
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
      scene.text('"I\'m getting really annoyed that I have to keep telling you to take off your panties. You have to learn that proper girls like us don\'t wear these to Uni," you say in a fake angry voice.');
      scene.text('She looks around and sighs. "Fine, you pervert."');
      scene.text('She gets up, turns her butt towards you, and slowly takes off her panties; pausing to look back at you just before her pussy is visible.');
      // TODO-QSP: dynamic text: 'After, she hands you her panties. "Here, ' + iif(lazarQW['your_prize_panties_ka...
      scene.text('After, she hands you her panties. "Here, ' + ((((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) ? ('you can have them') : ('another pair for your collection')) + ' since you insist that I have to be a slut; I don\'t need them anymore."');
      if (((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) {
        ((st as any).lazarQW = (st as any).lazarQW ?? {})['your_prize_panties_katja'] = 1;
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'arousal', 'erotic', (-2));
      qspCall(st, 'stat', '');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
      scene.text('Katja spreads her legs and hikes up her skirt, showing you her simple, white panties.');
      scene.text('"Happy now?" she asks.');
      scene.text('"You know I won\'t be happy until you take those off," you reply.');
      scene.text('"You are relentless!" Katja says.');
      scene.text('"You know I\'m not a quitter," you respond with a smirk.');
      scene.actions([
        { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_showing_panties2.jpg');
    scene.text('She looks around and slowly stands up. "You really want me to follow your slutty example?" she asks.');
    scene.text('"Yes, I do. It\'s so much nicer without panties, the breeze on your pussy is so liberating! You should really try it," you answer.');
    scene.actions([
      { label: 'Katja finally relents', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 4;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_sitting_taking_of_panties.jpg');
    scene.text('She gets up, turns her butt towards you, and slowly takes off her panties, pausing to look back at you just before her pussy is visible.');
    scene.text('"Happy now?" she says when they\'re completely off.');
    // TODO-QSP: dynamic text: '"Yes! This is going to be so much fun. Think about how thrilling it will to be ...
    scene.text('"Yes! This is going to be so much fun. Think about how thrilling it will to be careful so you don\'t give ' + ((((st as any).katjaQW ?? 0)?.['boy_block'] === 1) ? ('other girls') : ('boys')) + ' a peek of your pussy!" you enthusiastically chirp.');
    scene.text('"I\'m already regretting this…" Katja groans. But she doesn\'t look upset, nor does she make any move to put her panties back on.');
    scene.actions([
      { label: 'leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
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
    } else {
      if (((s as any).week ?? 0) < 4  &&  (((s as any).katjaQW ?? 0)?.['slut'] < 100  ||  ((s as any).hour ?? 0) < 18)) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing1.jpg');
        // TODO-QSP: dynamic text: 'You find Katja standing at the kitchen table. "Hi, ' + iif( katjaQW['couple'] =...
        scene.text('You find Katja standing at the kitchen table. "Hi, ' + ((((s as any).katjaQW ?? 0)?.['couple'] === 0) ? ('' + ((s as any).pcs_nickname ?? '') + '') : ('my love')) + '! What are you doing here?" Katja asks when she sees you.');
        // TODO-QSP: dynamic text: '"I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking ar...
        scene.text('"I ' + ((String((s as any).locArgs?.[1] ?? '') === 'from_room') ? ('came looking for you') : ('was just looking around')) + '. What are you doing?" you ask back.');
        scene.text('"I\'m staring to cook my dinner," she answers.');
      } else {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (2);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_with_drink.jpg');
        // TODO-QSP: dynamic text: 'You find Katja standing at the kitchen table drinking a glass of white wine. "H...
        scene.text('You find Katja standing at the kitchen table drinking a glass of white wine. "Hi, ' + ((((s as any).katjaQW ?? 0)?.['couple'] === 0) ? ('' + ((s as any).pcs_nickname ?? '') + '') : ('my love')) + '. What are you doing here?" Katja asks when she sees you.');
        // TODO-QSP: dynamic text: '"I ' + iif($ARGS[1] = 'from_room', 'came looking for you', 'was just looking ar...
        scene.text('"I ' + ((String((s as any).locArgs?.[1] ?? '') === 'from_room') ? ('came looking for you') : ('was just looking around')) + '. What are you doing?" you ask back.');
        scene.text('"I\'m just having a glass of wine before I start to cook my dinner," she answers.');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
          scene.text('"Why don\'t you have a glass with me?" she asks before looking for another glass.');
          scene.actions([
            { label: 'Drink a glass with Katja', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'wine', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_with_drink.jpg');
    scene.text('"I would love a glass of wine," you say, and she pours one for you. You spend some minutes drinking it while she continues her preparations for dinner.');
    if (((st as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((st as any).pantyworntype ?? 0) === 'none'  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['no_panties_day'] !== ((st as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) > 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt to show Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants to show Katja your pussy.');
    }
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_pantyquest', 'kitchen_show_pussy'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['take_of_panties_day'] === ((st as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Try to see if she still isn\'t wearing panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'arousal', 'erotic', (-5));
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_showing_pussy2.jpg');
    scene.text('You recall that you got Katja to take off her panties earlier today and wonder if she\'s still not wearing them. After all, she has changed her clothes since then.');
    scene.text('So you try to discreetly bend down to see up her skirt when she has her back to you.');
    scene.text('But she notices you. "No, I didn\'t put my panties back on, just like you asked. This is what you want to see, isn\'t it, you pervert?" she asks mockingly while she pulls up her skirt, showing you her naked behind.');
    scene.text('After a moment, she lets her skirt fall down. "That\'s enough for voyeurs like you," she adds before continuing with her cooking.');
    scene.actions([
      { label: 'Thank her for the wine and leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Thank her for the wine and leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
    ]);
  } },
          ]);
        }
      }
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) > 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt and showing Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants and showing Katja your bare pussy.');
    }
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_pantyquest', 'kitchen_show_pussy'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['take_of_panties_day'] === ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Try to see if she still isn\'t wearing panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'arousal', 'erotic', (-2));
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_showing_pussy2.jpg');
    scene.text('You recall that you got Katja to take off her panties earlier today and wonder if she\'s still not wearing them. After all, she has changed her clothes since then.');
    scene.text('So you try to discreetly bend down to see up her skirt when she has her back to you.');
    scene.text('But she notices you. "No, I didn\'t put my panties back on, just like you asked. This is what you want to see, isn\'t it, you pervert?" she asks mockingly while she pulls up her skirt, showing you her naked behind.');
    scene.text('After a moment, she lets her skirt fall down. "That\'s enough for voyeurs like you," she adds before continuing with her cooking.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
  ]);
  scene.build();
}

function enterKitchenShowPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'erotic', (-5));
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 5));
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
  scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/kitchen_standing_showing_pussy1.jpg');
  scene.text('"Your turn, Katja. Show me that you\'re not wearing panties," you demand.');
  // TODO-QSP: dynamic text: "Really, <<$pcs_nickname>>! This again? It''s like you don''t trust me," Katja s...
  scene.text(`"Really, ${((s as any).pcs_nickname ?? '')}! This again? It's like you don't trust me," Katja says, rolling her eyes.`);
  scene.text('Despite her objection, she hikes up her skirt and shows you her smoothly shaved pussy, not hidden by any panties.');
  scene.text('"I do trust you, it\'s just that-" you start saying but are promptly cut off.');
  scene.text('"You are a pervert that gets off on ogling innocent girls\' naked private parts," she says with a naughty glint in her eyes.');
  scene.text('She then lets her skirt fall and turns back to her cooking.');
  // TODO-QSP: end
  scene.actions([
    { label: 'leave', goto: ['uni_dorm', 'dorm_kitchen', 'second_floor'] },
  ]);
  scene.build();
}

function enterUniHallway(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['uni_hallway_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 'hallway', 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway.jpg');
  scene.text('You walk up to the redhead, who is sitting comfortably on a chair. She notices you and smiles.');
  scene.text('"What are you doing, Katja?" you ask.');
  scene.text('"Not much, just relaxing a little before moving on," she answers.');
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) > 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming, before pulling up your skirt to show Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants to show Katja your pussy.');
    }
    if (((st as any).katjaQW ?? 0)?.['slut'] < 30  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pu… You aren''t wear...
      scene.text(`"${((st as any).pcs_nickname ?? '')}! You can't just go around flashing your pu… You aren't wearing panties! What are you doing?! Put some on!" Katja exclaims in shock.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 50  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 2) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pussy. Put some pant...
        scene.text(`"${((st as any).pcs_nickname ?? '')}! You can't just go around flashing your pussy. Put some panties on!" Katja says, though she's clearly not really angry.`);
        scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond as you cover your pussy again.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
          // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
          scene.text(`"Stop it, ${((st as any).pcs_nickname ?? '')}! You should really put some panties on," Katja says, but she can't seem to keep her eyes from staring at your pussy.`);
          scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
        } else {
          if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
            // TODO-QSP: dynamic text: '"Very nice, <<$pcs_nickname>>. ' + iif( pcs_pubes > 3 , 'But you really need to...
            scene.text(`"Very nice, ${((st as any).pcs_nickname ?? '')}. ` + ((((st as any).pcs_pubes ?? 0) > 3) ? ('But you really need to shave that bush off') : ('Perfectly smooth, how a pussy should be')) + '," Katja says as her eyes devour your exposed pussy.');
          } else {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on," Katja say...
            scene.text(`"${((st as any).pcs_nickname ?? '')}, you naughty girl! You should put some panties on," Katja says, not at all convincingly, while her eyes devour your exposed pussy.`);
            scene.text('"I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you respond to her as you cover your pussy again.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0) {
      if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
        qspCall(st, 'arousal', 'erotic', (-5));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_naked_pussy.jpg');
        scene.text('Katja just puts her arms behind her head and spreads her legs without any hesitation, giving you a good look at her smoothly shaven pussy.');
        // TODO-QSP: dynamic text: '"See? It''s perfectly smooth, ' + iif( pcs_pubes > 3, 'like yours should be as ...
        scene.text('"See? It\'s perfectly smooth, ' + ((((st as any).pcs_pubes ?? 0) > 3) ? ('like yours should be as well') : ('like yours')) + ', and not hidden by any unnecessary layers of clothing," Katja says with a wink before closing her legs again.');
        qspCall(st, 'uni_lessons', 'schedule');
        scene.actions([
          { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
        ]);
      } else {
        if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
          qspCall(st, 'arousal', 'erotic', (-2));
          qspCall(st, 'stat', '');
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_standing_panties.jpg');
          scene.text('Katja stands up and moves her skirt away so that you can see her elegant panties.');
          scene.text('"Why are you wearing those again?" you ask.');
          scene.text('"Because you shouldn\'t go to class without panties. I\'m a good girl, not a slut like some others," Katja says with a wink.');
          scene.actions([
            { label: 'Have her take off her panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_taking_off_panties.jpg');
    if (((st as any).katjaQW ?? 0)?.['slut'] < 80) {
      scene.text('"Come ooooon, Katja," you plead. "Take those off! You done it before!"');
      scene.text('She looks around before sighing, "Fine, you pervert."');
      scene.text('Then she quickly reaches up under her skirt, pulls down her panties and puts them in her purse. "Happy now?"');
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 5;
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
      scene.text('"I\'m getting really annoyed that I have to keep telling you to take off your panties. You have to learn that proper girls like us don\'t wear these to Uni," you say in a fake angry voice.');
      scene.text('She looks around and sighs. "Fine, you pervert."');
      scene.text('She quick reaches up under her skirt and pulls down her panties.');
      // TODO-QSP: dynamic text: 'After, she hands you her panties. "Here, ' + iif(lazarQW['your_prize_panties_ka...
      scene.text('After, she hands you her panties. "Here, ' + ((((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) ? ('you can have them') : ('another pair for your collection')) + ' since you insist that I have to be a slut; I don\'t need them anymore."');
      if (((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) {
        ((st as any).lazarQW = (st as any).lazarQW ?? {})['your_prize_panties_katja'] = 1;
      }
    }
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
    ]);
  } },
          ]);
        } else {
          qspCall(st, 'arousal', 'erotic', (-2));
          qspCall(st, 'stat', '');
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_stitting_panties.jpg');
          scene.text('She looks around and when she\'s sure that nobody else can see, she spreads her legs and lifts her skirt so that you can see her elegant panties.');
          if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 3) {
            scene.text('"Happy now?" she asks.');
            scene.text('"You know I won\'t be happy until you take those panties off!" you reply.');
            scene.text('"I can\'t do that. Not here," Katja says.');
            scene.text('"Well, at least show me a liiiiiittle more," you plead, giving her your best puppy-eyes.');
            if (((st as any).katjaQW ?? 0)?.['slut'] >= 65) {
              scene.text('"You are relentless!" Katja says.');
              scene.text('"You know I\'m not a quitter," you chirp excitedly.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_standing_panties.jpg');
    scene.text('She looks around and stands up, still holding her skirt so you can see her panties. "You really want me to follow your slutty example?" she asks.');
    scene.text('"Yes, I do. It\'s so much nicer without panties; the breeze on your pussy is so liberating! You should really try it!" you answer.');
    scene.actions([
      { label: 'Katja finally relents', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 4;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_taking_off_panties.jpg');
    scene.text('She takes another look around, then quickly reaches up under her skirt and pulls down her panties. She stashes them in her purse. "Happy now?"');
    // TODO-QSP: dynamic text: '"Yes! This is going to be so much fun! Think about how thrilling it will be, kn...
    scene.text('"Yes! This is going to be so much fun! Think about how thrilling it will be, knowing if you\'re not careful that you might give ' + ((((st as any).katjaQW ?? 0)?.['boy_block'] === 1) ? ('other girls') : ('boys')) + ' a peek at your pussy!" you say enthusiastically.');
    scene.text('"I\'m already regretting this…" Katja groans. But she doesn\'t look upset, nor does she make any move to put her panties back on.');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              scene.text('"You know I can\'t do that. Not here. But I can give you a little sneak peek again," Katja says.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_showing_pussy.jpg');
    scene.text('She looks around again before pulling her panties slightly to the side, giving you a clear view of her smoothly shaved pussy.');
    scene.text('"Very nice!" you exclaim.');
    scene.text('"Ah, the sacrifices I have to make so a pervert like you is happy," she says jokingly.');
    scene.text('She puts them back on completely and lets her skirt fall back into place.');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
    ]);
  } },
              ]);
            }
          } else {
            if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 2  &&  ((st as any).katjaQW ?? 0)?.['slut'] >= 50) {
              scene.text('"Happy now?" she says, but she doesn\'t look nearly as nervous about someone suddenly turning up as she used to, so you take the chance to push her further.');
              scene.text('"Not really. I would be happy if you took those panties off completely," you reply.');
              scene.text('"I can\'t do that. Not here," Katja says.');
              scene.text('"Well, at least show me a liiiiiittle more," you plead, giving her your best puppy-eyes.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_showing_pussy.jpg');
    scene.text('She looks around very carefully, then pulls her panties slightly to the side, giving you a clear view of her smoothly shaved pussy.');
    scene.text('"Very nice!" you exclaim.');
    scene.text('"Stop acting like such a huge pervert. It\'s not like you haven\'t seen it before!" she says jokingly. She then puts them back on completely and lets her skirt fall back into place.');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
    ]);
  } },
              ]);
            } else {
              scene.text('"Happy now?" she says looking, around almost paranoid. You probably can\'t push her more for now, so you just nod and Katja gives you a big smile as she closes her legs and lets her skirt flutter back down.');
              qspCall(st, 'uni_lessons', 'schedule');
              scene.actions([
                { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
              ]);
            }
          }
        }
      }
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 30) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway.jpg');
        scene.text('"I\'m not some slut that goes around flashing my panties to everyone! Panties which, by the way, I am wearing," she says with a firm, yet still affectionate, tone.');
        scene.text('"Sorry I asked. But I do think that you could stand to loosen up a little…" you reply.');
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 1;
        qspCall(st, 'arousal', 'erotic', (-2));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_hallway_stitting_panties.jpg');
        scene.text('Katja looks around and when she\'s sure that nobody else can see you two, she says, "I don\'t know. We really shouldn\'t be doing such things…"');
        scene.text('"Come ooooon, I showed you mine. It\'s only fair that you do it, too," you reply.');
        scene.text('She looks around one more time to make sure you are alone, then puts down the leg she has on the chair so her legs are spread. Then, she hikes up her skirt so you can see her elegant panties.');
        scene.text('"See I\'m wearing panties, happy now?" she asks with a sly smile before closing her legs and pulling down her skirt again.');
      }
      qspCall(st, 'uni_lessons', 'schedule');
      scene.actions([
        { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'uni_lessons', 'schedule');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterUniExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['uni_hallway_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 'hallway', 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_exit.jpg');
  scene.text('You walk up to Katja, who is standing next to one of the side doors to the outside. As you approach, she looks to you and smiles.');
  scene.text('"What are you doing, Katja?" you ask.');
  scene.text('"Not much, just thinking about what to do next," she answers.');
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Show her you\'re not wearing panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_day'] = ((st as any).daystart ?? 0);
    if (((st as any).PCloSkirt ?? 0) > 1) {
      if (((st as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
      } else {
        scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
      }
      scene.text('You look around to see if anyone is coming before pulling up your skirt to show Katja your pussy from behind.');
    } else {
      scene.img(`images/pc/activities/flashing/pants/inside/pussy/hairy${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      scene.text('You look around to see if anyone is coming before pulling down your pants to show Katja your pussy.');
    }
    if (((st as any).katjaQW ?? 0)?.['slut'] < 50  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pussy; put some pant...
      scene.text(`"${((st as any).pcs_nickname ?? '')}! You can't just go around flashing your pussy; put some panties on!" Katja scolds, not really angry.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you demand as you cover your pussy again.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 100) {
        // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on," Katja says,...
        scene.text(`"Stop it, ${((st as any).pcs_nickname ?? '')}! You should really put some panties on," Katja says, though she can't seem to keep her eyes from staring at your pussy.`);
        scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you\'re wearing panties or not," you demand as you cover your pussy again.');
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on!" Katja say...
        scene.text(`"${((st as any).pcs_nickname ?? '')}, you naughty girl! You should put some panties on!" Katja says not at all convincingly while her eyes devour your exposed pussy.`);
        scene.text('"I don\'t wear panties since it\'s much nicer not to. Now show me if you\'re wearing panties or not," you demand as you cover your pussy again.');
      }
    }
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_exit_showing_panties.jpg');
    scene.text('Katja looks around to see if anybody can see the both of you. When she is sure that nobody can, she turns around, pulls up her skirt a little, and bends over to show you her panty-clad pussy from behind.');
    scene.text('"See? I\'m wearing panties, like any good girl should," she says in a mocking tone.');
    scene.text('"You are boring. There\'s no fun in being such a good girl," you say as she turns around towards you.');
    scene.actions([
      { label: 'See how she reacts', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 1) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 10));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 2;
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/uni_exit_showing_panties.jpg');
    scene.text('"Well, I\'m not a completely good girl. I\'m not wearing a bra," Katja says.');
    scene.text('"Let me see!" you whisper eagerly.');
    scene.text('Katja looks around once more before unbuttoning her shirt and pulling it open to give you a look of her firm C-cup breasts. You notice her nipples stiffening in the air.');
    scene.text('"Well, that\'s enough for you! Otherwise, you\'ll start drooling on the floor," she says and buttons up her shirt.');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'uni_lessons', 'schedule');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and move on', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterUni(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['uni_hallway_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 0  &&  ((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1) {
    if ((((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 2  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 50)  ||  (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 1  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 40)) {
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_pantyquest/u0027, /u0027uni_exit/u0027); return false;">Katja</a> standing next to one of the doors to the outside.');
    } else {
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_pantyquest/u0027, /u0027uni_hallway/u0027); return false;">Katja</a> sitting on a chair in a hallway.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoffeeHole(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'flash', 2);
  qspCall(s, 'stat', '');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_day'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_player_flashing.jpg');
  scene.text('You look around to check if anyone is watching you and Katja before spreading your legs so that your short skirt will give Katja a full view of your pussy.');
  scene.text('"Like what you see?" you say to Katja with a sly smile.');
  if (((s as any).katjaQW ?? 0)?.['slut'] < 30  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 0) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pu… You aren''t wear...
    scene.text(`"${((s as any).pcs_nickname ?? '')}! You can't just go around flashing your pu… You aren't wearing panties! What are you doing, put some panties on!" Katja says, very shocked.`);
    scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you demand as you close your legs, covering your pussy again.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 50  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 2) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You can''t just go around flashing your pussy. Put some pant...
      scene.text(`"${((s as any).pcs_nickname ?? '')}! You can't just go around flashing your pussy. Put some panties on!" Katja says, not really angry.`);
      scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you demand as you close your legs, covering your pussy again.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 100  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
        // TODO-QSP: dynamic text: "Stop it, <<$pcs_nickname>>! You should really put some panties on!" Katja says,...
        scene.text(`"Stop it, ${((s as any).pcs_nickname ?? '')}! You should really put some panties on!" Katja says, though she can't seem to keep her eyes from staring at your pussy.`);
        scene.text('"I flash who I want to, and I don\'t wear panties since it\'s much nicer not to. Now, show me if you wear panties or not," you demand as you close your legs, covering your pussy again.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
          // TODO-QSP: dynamic text: '"Very nice, <<$pcs_nickname>>. ' + iif( pcs_pubes > 3 , 'But you really need to...
          scene.text(`"Very nice, ${((s as any).pcs_nickname ?? '')}. ` + ((((s as any).pcs_pubes ?? 0) > 3) ? ('But you really need to shave that bush off') : ('Perfectly smooth, how a pussy should be')) + '," Katja says as her eyes devour your exposed pussy.');
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you naughty girl! You should put some panties on!" Katja say...
          scene.text(`"${((s as any).pcs_nickname ?? '')}, you naughty girl! You should put some panties on!" Katja says not at all convincingly while her eyes devour your exposed pussy.`);
          scene.text('"I don\'t wear panties since it\'s much nicer not to wear them. Now, show me if you wear panties or not," you demand as you close your legs, covering your pussy again.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0) {
      if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
        qspCall(st, 'arousal', 'erotic', (-5));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_naked_pussy.jpg');
        scene.text('She looks around to check if anyone else is looking your way before she gets up from her chair and bends over to hike up her skirt so that you can clearly see her pussy.');
        // TODO-QSP: dynamic text: '"See? It''s perfectly smooth, ' + iif( pcs_pubes > 3, 'like yours should be as ...
        scene.text('"See? It\'s perfectly smooth, ' + ((((st as any).pcs_pubes ?? 0) > 3) ? ('like yours should be as well') : ('like yours')) + ', and not hidden by any unnecessary layers of clothing," Katja says while looking back at you. She lets her skirt fall back down and sit downs, taking a sip of her tea.');
        scene.actions([
          { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
        ]);
      } else {
        if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
          qspCall(st, 'arousal', 'erotic', (-2));
          qspCall(st, 'stat', '');
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_showing_panties.jpg');
          scene.text('Katja looks around before lifting up the front of her skirt so you can see her panties.');
          scene.text('"Why are you wearing panties again?" you ask.');
          scene.text('"Because I don\'t want to risk some random pervert seeing my privates. I only show it to perverts I like," Katja says with a wink.');
          scene.actions([
            { label: 'Have her take off her panties', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_taking_off_panties.jpg');
    if (((st as any).katjaQW ?? 0)?.['slut'] < 80) {
      scene.text('"Come ooooon, Katja. Take those panties off! You\'ve done it before," you whine.');
      scene.text('She looks around, then sighs. "Fine, you pervert."');
      scene.text('She stands up and quickly reaches up under her skirt and pulls down her panties.');
      scene.text('"Happy now?" she asks as she sits down and places her underwear in her purse.');
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 5;
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
      scene.text('"I\'m getting annoyed that I have to keep telling you to take off your panties. You have to learn that proper girls like us don\'t wear panties when we go out," you say in a fake angry voice.');
      scene.text('She looks around and sighs. "Fine, you pervert."');
      scene.text('She stands up and quickly reaches up under her skirt and pulls down her panties.');
      // TODO-QSP: dynamic text: 'After, she hands you her panties. "Here, ' + iif(lazarQW['your_prize_panties_ka...
      scene.text('After, she hands you her panties. "Here, ' + ((((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) ? ('you can have them') : ('another pair for your collection')) + ' since you insist that I have to be a slut; I don\'t need them anymore."');
      if (((st as any).lazarQW ?? 0)?.['your_prize_panties_katja'] === 0) {
        ((st as any).lazarQW = (st as any).lazarQW ?? {})['your_prize_panties_katja'] = 1;
      }
    }
    scene.actions([
      { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
    ]);
  } },
          ]);
        } else {
          qspCall(st, 'arousal', 'erotic', (-2));
          qspCall(st, 'stat', '');
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_showing_panties.jpg');
          scene.text('Katja looks around and then lifts up the front of her skirt so you can see her panties.');
          if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 3) {
            scene.text('"Happy now?" she asks.');
            scene.text('"You know I won\'t be happy until you take those panties off!" you reply.');
            scene.text('"I can\'t do that. Not here," Katja says.');
            scene.text('"Well, at least show me a liiiiiittle more," you plead, giving her your best puppy-eyes.');
            if (((st as any).katjaQW ?? 0)?.['slut'] >= 65) {
              scene.text('"You are relentless!" Katja says.');
              scene.text('"You know I\'m not a quitter," you chirp excitedly.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_talking.jpg');
    scene.text('She lets her skirt fall, and moves her spoon to take another bite of her cake. She then turns to you and asks, "You really want me to follow your slutty example?"');
    scene.text('"Yes, I do. It\'s so much nicer without panties, the breeze on your pussy is so liberating! You should really try it!" you answer.');
    scene.actions([
      { label: 'Katja finally relents', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 4;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_taking_off_panties.jpg');
    scene.text('She looks around once more, then stands up and quickly reaches up under her skirt, which makes it rest on her butt, and pulls down her panties. Then, she puts them in her purse. "Happy now?" she says as she sits down');
    // TODO-QSP: dynamic text: '"Yes! This is going to be so much fun. Think about how thrilling it will be bei...
    scene.text('"Yes! This is going to be so much fun. Think about how thrilling it will be being careful so you don\'t give ' + ((((st as any).katjaQW ?? 0)?.['boy_block'] === 1) ? ('other girls') : ('boys')) + ' a peek of your pussy!" you say enthusiastically.');
    scene.text('"I\'m already regretting this…" Katja groans. But she does not look upset, nor does she make any move to put her panties back on as she sits down again.');
    scene.actions([
      { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              scene.text('"You know I can\'t do that. Not here. But I can give you a little sneak peek again." Katja says.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_showing_pussy.jpg');
    scene.text('She looks around again then lets her skirt fall so that you can still see her panties, and puts her right foot on the table, and with her left hand, pulls her panties to the side so you can see her smoothly shaved pussy.');
    scene.text('"Very nice!" you exclaim.');
    scene.text('"Ah, the sacrifices I have to make so a pervert like you is happy," she says jokingly.');
    // TODO-QSP: dynamic text: 'She then lets go of her panties, takes her leg down from the table before ' + i...
    scene.text('She then lets go of her panties, takes her leg down from the table before ' + ((((st as any).locat ?? 0)?.['A144'] === 9) ? ('Anushka') : ('the waitress')) + ' sees it and adjusts her skirt so that she\'s again a proper lady.');
    scene.actions([
      { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
    ]);
  } },
              ]);
            }
          } else {
            if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 2  &&  ((st as any).katjaQW ?? 0)?.['slut'] >= 50) {
              scene.text('"Happy now?" she says, but she doesn\'t look nearly as nervous about someone suddenly turning up as she used to, so you take the chance to push her further.');
              scene.text('"Not really. I would be happy if you took those off completely," you reply.');
              scene.text('"I can\'t do that. Not here." Katja says.');
              scene.text('"Well, at least show me a liiiiiittle more," you plead, giving her your best puppy-eyes.');
              scene.actions([
                { label: 'See what Katja does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 3;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_showing_pussy.jpg');
    scene.text('She looks around again then lets her skirt fall so that you can still see her panties, and puts her right foot on the table, and with her left hand, pulls her panties to the side so you can see her smoothly shaved pussy.');
    scene.text('"Very nice!" you exclaim.');
    scene.text('"Stop acting like such a huge pervert. It\'s not like you haven\'t seen it before!" she says jokingly.');
    // TODO-QSP: dynamic text: 'She then lets go of her panties, takes her leg down from the table before ' + i...
    scene.text('She then lets go of her panties, takes her leg down from the table before ' + ((((st as any).locat ?? 0)?.['A144'] === 9) ? ('Anushka') : ('the waitress')) + ' sees it and adjusts her skirt so that she\'s again a proper lady.');
    scene.actions([
      { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
    ]);
  } },
              ]);
            } else {
              scene.text('"Happy now?" she says looking, around almost paranoid. You probably can\'t push her more for now, so you just nod and Katja gives you a big smile as lets skirt fall down.');
              scene.actions([
                { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
              ]);
            }
          }
        }
      }
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 30) {
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_talking.jpg');
        scene.text('"I\'m not some slut that goes around flashing my panties. Which, by the way, I am wearing, of course," Katja says in a firm voice, but she does not look to be really angry.');
        scene.text('"Sorry I asked. But I do think that you could stand to loosen up a little…" you reply.');
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 1;
        qspCall(st, 'arousal', 'erotic', (-2));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
        scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_showing_panties.jpg');
        scene.text('Katja looks around and when she\'s sure that nobody else can see you two, she says, "I don\'t know. We really shouldn\'t be doing such things…"');
        scene.text('"Come ooooon, I showed you mine. It\'s only fair that you do it, too," you reply.');
        scene.text('She looks around one more time to make sure nobody is looking your way, and then lifts up the front of her skirt so that you can see her panties.');
        scene.text('"See, I\'m wearing panties. Happy now?" she asks with a sly smile before letting go of her skirt so it falls down and she is once again a proper lady.');
      }
      scene.actions([
        { label: 'Continue to chat', goto: ['katja_pantyquest', 'coffee_hole_after'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleAfter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/pantyquest/coffee_hole_talking.jpg');
  qspCall(s, 'katja_procedural', 'face_color');
  // TODO-QSP: $func('npc_reactions', 'general', 'A14')
  scene.text('You and Katja return to your coffee and continue to chat for a few minutes.');
  if (((s as any).locat ?? 0)?.['katja'] !== 30) {
    if (((s as any).locat ?? 0)?.['katja'] === 29) {
      // TODO-QSP: dynamic text: '"I need to go study. ' + iif($university['enrolled_in'] = 'teaching_studies' or...
      scene.text('"I need to go study. ' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies'  ||  ((s as any).katjaQW ?? 0)?.['QWstage'] > 0) ? ('Wanna join me?') : ('See you later!')) + '" she says as she packs her things and gets ready to leave.');
      if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies'  ||  ((s as any).katjaQW ?? 0)?.['QWstage'] > 0) {
        scene.actions([
          { label: 'Go to the library with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['katja_uni', 'library2'] },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
        scene.actions([
          { label: 'Try to convince her to do something else', goto: ['katja_chat', 'coffee_hole_have_fun'] },
        ]);
      }
      scene.actions([
        { label: 'Say goodbye and leave', goto: ['city_coffee_hole', 'inner'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 44) {
        scene.text('"I\'m done here. I want to go to the city mall to look at clothes," Katja says as she packs her things and gets ready to leave.');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0) {
          scene.actions([
            { label: 'Go with Katja to the city mall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['katja_city', 'metro'] },
          ]);
        }
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
          scene.actions([
            { label: 'Try to convince her to do something else', goto: ['katja_chat', 'coffee_hole_have_fun'] },
          ]);
        }
        scene.actions([
          { label: 'Say goodbye and Leave', goto: ['city_coffee_hole', 'inner'] },
        ]);
      } else {
        scene.text('"I\'m sorry. But I gotta run. I\'ll see you later," Katja says as she starts to pack up her books.');
      }
    }
  } else {
    scene.actions([
      { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['brunch_bought'] = 1
    qspCall(st, 'food_menu', '');
  } },
      { label: 'Continue talking', goto: ['katja_chat', 'coffee_hole_event'] },
      { label: 'Try to convince her to do something else', goto: ['katja_chat', 'coffee_hole_have_fun'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and get up', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'kitchen_show_pussy':
      enterKitchenShowPussy(s, scene);
      break;
    case 'uni_hallway':
      enterUniHallway(s, scene);
      break;
    case 'uni_exit':
      enterUniExit(s, scene);
      break;
    case 'uni':
      enterUni(s, scene);
      break;
    case 'coffee_hole':
      enterCoffeeHole(s, scene);
      break;
    case 'coffee_hole_after':
      enterCoffeeHoleAfter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_pantyquest: LocationDef = {
  name: 'katja_pantyquest',
  title: '"I\'m just waiting for my food to finish cooking," she says, ',
  region: 'other',
  enter: enter,
};
