import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: !2026/27/06
  scene.build();
}

function enterFirstOrgyObserve1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance10.jpg');
  scene.text('You continue to dance while observing what\'s happening around you. Most girls don\'t really seem to pay any attention to what\'s happening on the dance floor, where several of the girls have taken off their skirts and are dancing in their panties.');
  // TODO-QSP: dynamic text: Looking back at the couch where <<$katja_first_orgy_temp['first_orgy_name_second...
  scene.text(`Looking back at the couch where ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} are, you see that she's now on all fours in front of him as he rams his ${((s as any).dick2 ?? 0)} cm ${((s as any).dick_girth2 ?? 0)} cock into her.`);
  scene.text('Katja is still wearing her dress, but it\'s now hiked up so you can see her G-string as she walks over to you.');
  if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
    // TODO-QSP: dynamic text: "So Nush was right," she says. "<<$katja_first_orgy_temp['first_orgy_name_first_...
    scene.text(`"So Nush was right," she says. "${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} are huge sluts. We've barely started and they've already jumped on the cocks!"`);
    scene.text('"We\'ve done some wild things, but this is still a step above anything we\'ve ever done!" she continues.');
    scene.text('"Are you going to join them?" you ask.');
    scene.text('"I don\'t think so. Maybe... I\'m not sure. It does look hot," she answers.');
  } else {
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100) {
      // TODO-QSP: dynamic text: "Have you seen what's going, <<$pcs_nickname>>?" she asks
      scene.text(`"Have you seen what's going, ${((s as any).pcs_nickname ?? 0)}?" she asks`);
      scene.text('"Yes. The sluts are being slutty," you answer.');
      scene.text('"So what are we going to do?" she replies.');
      scene.text('"Whatever you want," you reply. "If you want to fuck one of the guys, go ahead, but you can also just continue to drink and dance."');
      scene.text('"I don\'t know... It looks hot, but... It makes you look like a slut. I don\'t know..." she answers, clearly excited enough to do it, but still having some internal resistance from thinking about her reputation.');
      scene.text('"Don\'t worry about what others think. Do what you want and screw the rest! Literally if you want," you wink.');
    } else {
      // TODO-QSP: dynamic text: "Have you seen what's going on, <<$pcs_nickname>>?" she asks, looking very shock...
      scene.text(`"Have you seen what's going on, ${((s as any).pcs_nickname ?? 0)}?" she asks, looking very shocked. "I don't know what's happening."`);
      scene.text('"The sluts have started the orgy, just like Nush predicted," you answer.');
      scene.text('"What are we going to do?!" she replies, almost panicking.');
      scene.text('"Whatever you want," you reply. "If you want to fuck one of the guys, go ahead, but you can also just continue to drink and dance."');
      scene.text('"No, I don\'t think so... I mean, I\'m not one to just have sex with strangers..... Also it makes you look like a slut," she answers, but looks a little excited at the idea.');
      scene.text('"Don\'t be afraid. Just go with the flow and let your lust guide you," you reply. "And if in doubt, do what I would do."');
    }
  }
  // TODO-QSP: dynamic text: "What are you going to do, <<$pcs_nickname>>? Are you going to fuck the guys?" s...
  scene.text(`"What are you going to do, ${((s as any).pcs_nickname ?? 0)}? Are you going to fuck the guys?" she asks.`);
  scene.actions([
    { label: 'Join in having sex with the guys', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['first_orgy'] = 'joining_in';
    qspCall(s, 'npcgeneratec', '', 1, 'brown_dress', Math.floor(Math.random() * 5) + 19, 4);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'e');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative1.jpg');
    scene.text('"Yeah, I\'m going to join the fun. In fact, I\'m going to see if one of the guys is available right now!" you reply.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_green_shirt_guy']>> is already occupie...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} is already occupied with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, who has hiked her skirt up to reveal that she's not wearing any panties.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> is dancing with <<$katja...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} is dancing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, who also has her skirt hiked up to reveal her panties.`);
    // TODO-QSP: dynamic text: You walk over to <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> and sta...
    scene.text(`You walk over to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} and start dancing with him alongside ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}.`);
    scene.text('Feeling a little daring, you start grinding against him and feel his rock hard cock straining against his pants.');
    scene.actions([
      { label: 'The touching starts', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'vaginal_finger', 2, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join1.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> continues to dance with ...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} continues to dance with you and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}.`);
    scene.text('When the positions have reversed and you are behind him, you decide to pull up his shirt a little, revealing his sexy six pack.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> starts exploring his m...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} starts exploring his muscles with her hands, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} starts groping you by putting his hand down your '+iif(PCloPants > 0, 'pants', 'skirt')+' and playing with your pussy.`);
    scene.actions([
      { label: 'Reciprocate his action', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'hj', 2, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'arousal', 'vaginal_finger', (-2), ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join2.jpg');
    // TODO-QSP: dynamic text: You decide to return the favor and put your hands down <<$katja_first_orgy_temp[...
    scene.text(`You decide to return the favor and put your hands down ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s pants to play with his ${((s as any).dick_girth1 ?? 0)} cock.`);
    // TODO-QSP: dynamic text: While the two of you are pleasuring each other, albeit very clumsily, <<$katja_f...
    scene.text(`While the two of you are pleasuring each other, albeit very clumsily, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} gets down in front of him and very slowly starts to open his pants.`);
    // TODO-QSP: dynamic text: She then pulls his pants down and you end up giving <<$katja_first_orgy_temp['fi...
    scene.text(`She then pulls his pants down and you end up giving ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} a handjob before you feel your hand suddenly being squished between his body and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s mouth.`);
    scene.actions([
      { label: 'Join <<$katja_first_orgy_temp[\'first_orgy_name_brown_dress\']>> in sucking his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join3.jpg');
    // TODO-QSP: 'You remove your hand from <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>>''s cock and mov...
    // TODO-QSP: dynamic text: You then dance around him and get down on your knees next to <<$katja_first_orgy...
    scene.text(`You then dance around him and get down on your knees next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}.`);
    // TODO-QSP: dynamic text: She then shares <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>'s <<dick...
    scene.text(`She then shares ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s ${((s as any).dick1 ?? 0)} cm long and ${((s as any).dick_girth1 ?? 0)} cock with you, and you take turns blowing him.`);
    // TODO-QSP: dynamic text: You notice <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> on her...
    scene.text(`You notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} on her knees next to you, giving ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} a blowjob.`);
    scene.actions([
      { label: 'Get pushed out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'foreplay_give', 2, ((s as any).npcID6 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join4.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_green_shirt_guy']>> moves over next to...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} moves over next to you, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} moves in closer to you.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> offers <<$katja_first_...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} offers ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, who takes it into her mouth and greedily starts sucking it.`);
    // TODO-QSP: dynamic text: Since <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> has taken his ba...
    scene.text(`Since ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} has taken his balls in her mouth, you're left with sucking on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}'s breasts.`);
    scene.actions([
      { label: 'Look around', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja1.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> clearly doesn't w...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} clearly doesn't want to share ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock, so you remove your mouth from her breast and look around.`);
    scene.text('You notice that almost everybody is completely naked, though Katja is still wearing her dress.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_before_fuck');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja2.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_penetration');
    // TODO-QSP: dynamic text: You lose sight of Katja as <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']...
    scene.text(`You lose sight of Katja as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} suddenly pulls ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} up and turns her over before ramming his cock into her wet slit.`);
    scene.actions([
      { label: 'Play with <<$katja_first_orgy_temp[\'first_orgy_name_brown_dress\']>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID5 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID5 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join5.jpg');
    // TODO-QSP: dynamic text: Having your man suddenly stolen from you, <<$katja_first_orgy_temp['first_orgy_n...
    scene.text(`Having your man suddenly stolen from you, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} turns to you and starts making out with you as you get up and slowly start stripping each other.`);
    // TODO-QSP: dynamic text: Once you're naked, you take <<$katja_first_orgy_temp['first_orgy_name_brown_dres...
    scene.text(`Once you're naked, you take ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s decently sized breasts into your mouth.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>, meanwhile, is hammering...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, meanwhile, is hammering ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, while Anushka leans over the couch to support herself as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} eats her out from behind.`);
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja3.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first');
    scene.text('Leaving her to it, you decide to look around for something else to do.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Look around for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join2'] },
    ]);
  } },
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Look around for some other action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join2'] },
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
  } },
    { label: 'Just continue watching', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['first_orgy'] = 'observing';
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe1.jpg');
    scene.text('"I\'ll just watch the show the others are putting on. Should be fun to see," you answer.');
    scene.text('"So you\'re not going to do anything?" she asks.');
    scene.text('"No, I don\'t think so, but that shouldn\'t hold you back from getting some dick if you want," you reply.');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100) {
      scene.text('"I think I\'ll stick to watching too. But it does look hot... I don\'t know. Maybe I should join?" she ponders as her face turns red.');
      scene.text('"If you\'re getting horny, then you should," you answer.');
      // TODO-QSP: dynamic text: "Maybe. We'll see..." she replies, her eyes drifting towards towards the couch w...
      scene.text(`"Maybe. We'll see..." she replies, her eyes drifting towards towards the couch where ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} is now riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} hard as Anushka shakes her ass next to them, her skirt hiked up so everybody can see she's not wearing panties.`);
    } else {
      scene.text('"What are you suggesting, that I should behave like these sluts? No way! What do you take me for? It\'s like you don\'t know me. I would never do something like this! Never..." she says, first sounding upset. but gets calmer as her face gets redder and her speaking slows down until it comes to a halt.');
      // TODO-QSP: dynamic text: You notice her eyes drifting towards the couch where <<$katja_first_orgy_temp['f...
      scene.text(`You notice her eyes drifting towards the couch where ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} is now riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} hard as Anushka shakes her ass next to them, her skirt hiked up so everybody can see she's not wearing panties.`);
      scene.text('You can see Katja fidgeting while rubbing her legs together, clearly getting very horny at the lewd display.');
    }
    scene.actions([
      { label: 'See where they take it', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['first_orgy'] = 'observing';
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe2.jpg');
    scene.text('The two of you continue to watch the display of depravity.');
    // TODO-QSP: dynamic text: After bouncing up and down on <<$katja_first_orgy_temp['first_orgy_name_bald_guy...
    scene.text(`After bouncing up and down on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}'s cock for a few minutes, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} climbs off of him and turns around before taking it into her mouth.`);
    // TODO-QSP: dynamic text: After a few seconds, she stops sucking <<$katja_first_orgy_temp['first_orgy_name...
    scene.text(`After a few seconds, she stops sucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}'s cock and grabs Anushka before pulling her down to her crotch. Anushka in turn starts eagerly eating her pussy.`);
    scene.text('You look at Katja, who seems completely mesmerized by what\'s going on.');
    scene.text('"Liking she show?" you ask, and only after a long pause does she react with a "huh", like she never even heard what you were asking.');
    scene.actions([
      { label: 'See what else is going on', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative4.jpg');
    scene.text('"I\'m going to see what the others are doing," you tell Katja, but don\'t get any reaction from her.');
    scene.text('"Huh? Oh... Okay," she replies after a long pause, but never takes her eyes off the people fucking in front of her.');
    // TODO-QSP: dynamic text: You leave your friend and look around. Nearby, you see <<$katja_first_orgy_temp[...
    scene.text(`You leave your friend and look around. Nearby, you see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} with his hands down ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}'s skirt as she grinds on him from behind.`);
    // TODO-QSP: dynamic text: In front of him is <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>>, wh...
    scene.text(`In front of him is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, who gets down on her knees and pulls out his ${((s as any).dick_girth1 ?? 0)} cock before taking it into her mouth.`);
    scene.actions([
      { label: 'Continue to watch them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join4.jpg');
    // TODO-QSP: dynamic text: As <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> sucks <<$katja_firs...
    scene.text(`As ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} sucks ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s dick, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} also gets down on her knees and joins her.`);
    // TODO-QSP: dynamic text: An almost completely naked <<$katja_first_orgy_temp['first_orgy_name_first_black...
    scene.text(`An almost completely naked ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} joins them, and the three hungrily share the cock for some time.`);
    scene.text('Looking around, you see that almost none of the girls have their breast covered.');
    // TODO-QSP: dynamic text: You then hear <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> say "Okay,...
    scene.text(`You then hear ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} say "Okay, I need to fuck one of you right now!"`);
    scene.actions([
      { label: 'Continue to watch them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe3.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> quickly gets up and be...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} quickly gets up and bends over the nearby couch, presenting her very wet pussy to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
    // TODO-QSP: dynamic text: He wastes no time and drives his <<dick1>> cm long <<$dick_girth1>> cock into he...
    scene.text(`He wastes no time and drives his ${((s as any).dick1 ?? 0)} cm long ${((s as any).dick_girth1 ?? 0)} cock into her waiting slit, causing her to let out a huge moan.`);
    // TODO-QSP: dynamic text: As he starts to fuck her, <<$katja_first_orgy_temp['first_orgy_name_boob_window'...
    scene.text(`As he starts to fuck her, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} gets up and moves away, while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} notices that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} is looking kind of jealous.`);
    scene.text('She crawls over to him and starts sucking his dick while getting rid of the rest of her clothes.');
    scene.actions([
      { label: 'Interrupted', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe4.jpg');
    // TODO-QSP: dynamic text: "Come <<$pcs_nickname>>, don't be such a bore," you hear <<$katja_first_orgy_tem...
    scene.text(`"Come ${((s as any).pcs_nickname ?? 0)}, don't be such a bore," you hear ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']} say. "Get rid of your '+iif(PCloDress = 0, 'shirt', 'dress')+'."`);
    // TODO-QSP: dynamic text: You turn and see her dancing with <<$katja_first_orgy_temp['first_orgy_name_shor...
    scene.text(`You turn and see her dancing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_short_blond_hair']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']}, all of them proudly displaying their naked breasts.`);
    // TODO-QSP: dynamic text: Seeing as almost everybody else is showing off their breasts, you remove your '+...
    scene.text(`Seeing as almost everybody else is showing off their breasts, you remove your '+iif(PCloDress = 0, 'shirt', 'dress')+iif($braworntype = 'none', ', ' and bra')+' and let your ${((s as any).pc_descWordy ?? 0)?.['breast']} sway free.`);
    scene.text('The girls all cheer you on and you spend some time dancing with them.');
    scene.actions([
      { label: 'See what happened before you were interrupted', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative8.jpg');
    scene.text('After spending some time dancing, you decide to look back at the the sex that was happening around you.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> has <<$katja_first_orgy_...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} has ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} on her back, hammering away at her pussy while Anushka sits on her face.`);
    scene.text('If you had to guess by Anushka\'s facial reaction and how her body is reacting, she is being eaten out with great skill.');
    // TODO-QSP: dynamic text: "Oh fuck! Just like that..." Anushka moans as she rides <<$katja_first_orgy_temp...
    scene.text(`"Oh fuck! Just like that..." Anushka moans as she rides ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s face.`);
    scene.text('After watching for a few more minutes, you remember that you came here with another friend...');
    scene.actions([
      { label: 'Find out what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja1.jpg');
    // TODO-QSP: dynamic text: You move back to the couch where <<$katja_first_orgy_temp['first_orgy_name_bald_...
    scene.text(`You move back to the couch where ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} was fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    scene.text('You weave your way through the sea of bodies and find they are all still there.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_before_fuck');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja2.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_penetration');
    scene.text('You\'re pretty stunned by the idea of your previously shy and timid friend acting like a complete slut.');
    scene.text('Seeing Katja getting fucked by a guy she doesn\'t know in public was not something you expected to see waking up this morning.');
    if (((s as any).katjaQW ?? 0)?.['first_time_in_nightclub'] === 0) {
      scene.text('You have been teaching her about exploring sexual pleasure and depravity, and now she has gone ahead and done something even you aren\'t willing to do.');
      scene.text('The student has overtaken the master.');
    } else {
      scene.text('Of course, you don\'t actually know what kinds of sexual shenanigans she has been getting up to before you started having sex with her.');
    }
    scene.actions([
      { label: 'Interrupted again', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe4.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'naked'  ||  (!((s as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, get rid of '+iif(PCloSkirt > 0, 'that skirt and your panties...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, get rid of '+iif(PCloSkirt > 0, 'that skirt and your panties', 'those '+iif(PCloPants > 0,'pants and panties', 'panties'))+' and be free like the rest of us," you hear from behind.`);
      // TODO-QSP: dynamic text: You turn and see <<$katja_first_orgy_temp['first_orgy_name_white_dress']>>, <<$k...
      scene.text(`You turn and see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_short_blond_hair']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']}, all of them completely naked.`);
      // TODO-QSP: dynamic text: Taking a quick look around, you see that, except for Katja and <<$katja_first_or...
      scene.text(`Taking a quick look around, you see that, except for Katja and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}, you are the only one wearing any clothes.`);
      scene.text('Not wanting to stand out, you remove the last of your clothes to the cheers of the girls.');
    } else {
      scene.text('"Great to see you naked like the rest of us. You go, girl!" you hear from behind.');
      // TODO-QSP: dynamic text: You turn and see <<$katja_first_orgy_temp['first_orgy_name_white_dress']>>, <<$k...
      scene.text(`You turn and see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_short_blond_hair']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']}, all of them as naked as you.`);
      // TODO-QSP: dynamic text: Taking a quick look around, you see that everybody minus Katja and <<$katja_firs...
      scene.text(`Taking a quick look around, you see that everybody minus Katja and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} are naked.`);
    }
    // TODO-QSP: dynamic text: You spend a little time talking to the girls, which mostly comes down to interro...
    scene.text(`You spend a little time talking to the girls, which mostly comes down to interrogating ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} about being fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
    scene.text('The girl sounds much more curious than condemning.');
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja3.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first');
    scene.text('Leaving her to it, you decide to look around for something else to do.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'See what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe2'] },
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

function enterFirstOrgyObserve2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join6.jpg');
  // TODO-QSP: dynamic text: You look around and see that Anushka is no longer being eaten out by <<$katja_fi...
  scene.text(`You look around and see that Anushka is no longer being eaten out by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}.`);
  // TODO-QSP: dynamic text: She is instead leaning on one of the decorative frames as <<$katja_first_orgy_te...
  scene.text(`She is instead leaning on one of the decorative frames as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} sucks her breast while driving her finger in and out of her wet pussy.`);
  scene.text('It doesn\'t take long before you hear Anushka cry out in orgasm, barely able to continue standing as her legs shake.');
  scene.actions([
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja6\'+iif(katjaQW[\'horny\'] >= 100, \'a\', \'b\')+\'.jpg');
    scene.text('You look around for Katja.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_potential_orgasm');
    // TODO-QSP: 'Seeing Katja '+iif(katjaQW['horny'] = 0, 'getting off', 'enjoying herself')+' makes you wonder how ...
    scene.actions([
      { label: 'Look at what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe3'] },
    ]);
  } },
    { label: 'Look at what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe3'] },
  ]);
  scene.build();
}

function enterFirstOrgyObserve3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe6.jpg');
  // TODO-QSP: dynamic text: Looking around, you see <<$katja_first_orgy_temp['first_orgy_name_first_black_gi...
  scene.text(`Looking around, you see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} on her back on one of the couches, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} using his arm to spread her legs while hammering her pussy with his ${((s as any).dick_girth1 ?? 0)} cock.`);
  scene.text('"Impressive! It\'s kind of making me horny again, and I just came," you suddenly hear someone say behind you.');
  // TODO-QSP: dynamic text: You turn and see Anushka smiling. "I need a drink before I find some other girl ...
  scene.text(`You turn and see Anushka smiling. "I need a drink before I find some other girl to get me off. Again. Why don't you join me, ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.actions([
    { label: 'Go for a drink with Anushka', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink_nush'] },
    { label: 'See what Katja is doing instead', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja7.jpg');
    scene.text('You let Anushka get her drink while you look around to see what your redheaded friend is doing.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second1');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja8.jpg');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
      scene.text('You continue to watch her, and while you\'ve seen her done some wild things, this is a step above what you\'ve seen her do before.');
    } else {
      scene.text('You continue to watch her, amazed at she how wild she\'s become. This is not something you imagined her doing when the night started.');
    }
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second2');
    scene.actions([
      { label: 'See if Katja is okay', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second_talk1');
    if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      scene.text('"Who knew the little strawberry princess was secretly a wild girl?" Anushka says as she reappears, drink in hand.');
      scene.text('You glance at her. "You don\'t approve?"');
      scene.text('She shakes her head. "No, nothing like that. I just find it a little hypocritical that she herself is enjoying what she would have called \'being a slut\' earlier."');
      scene.text('She raises her glass, as if toasting Katja before she takes a swig. "Good for her, getting over herself and learning to have some fun."');
      scene.text('Her tone makes it sound like she\'s proud.');
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
        scene.text('"While I\'ve seen her do many wild things, this is still something else, but I knew she was a party girl at heart," you reply.');
      } else {
        scene.text('"While I know she\'s not a prude and have had quite a few sexual encounters with her, this is still surprising even to me," you reply.');
      }
    }
    scene.actions([
      { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (30);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja10\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    scene.text('Anushka continues to sip her drink as you both continue watching Katja as if she was the star in a porn movie.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second3');
    scene.text('"This was quite the show, but my drink is empty and I\'m getting horny again. Seeing as you\'re no fun tonight, I\'ll find some other pussy."');
    scene.text('She gives you a look that seems like an invitation, but when you don\'t react, she walks away.');
    scene.actions([
      { label: 'See what she does', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe4'] },
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

function enterFirstOrgyObserve4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative10.jpg');
  // TODO-QSP: dynamic text: You notice how she confidently walks up to <<$katja_first_orgy_temp['first_orgy_...
  scene.text(`You notice how she confidently walks up to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} and leans and says something to her you can't hear.`);
  // TODO-QSP: dynamic text: She then moves backwards and sits on the back of a couch, spreading her legs whi...
  scene.text(`She then moves backwards and sits on the back of a couch, spreading her legs while beckoning for ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} to follow before pointing at her pussy.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_second_black_girl']>> obediently gets ...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} obediently gets down on all fours and starts licking her pussy.`);
  // TODO-QSP: dynamic text: "Oh fuck, that feels so good!" Anushka sighs, her moans of pleasure soon cut off...
  scene.text(`"Oh fuck, that feels so good!" Anushka sighs, her moans of pleasure soon cut off by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} coming up from behind.`);
  // TODO-QSP: dynamic text: As Anushka turns to look at who it is, <<$katja_first_orgy_temp['first_orgy_name...
  scene.text(`As Anushka turns to look at who it is, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} leans in and starts kissing her, which Anushka passionately returns.`);
  scene.actions([
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja11.jpg');
    scene.text('As one of your old classmates is engaging in a semi-public orgy in front of you, you wonder where the other is.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second4');
    scene.text('While she seems to be enjoying herself, you should probably check up on her.');
    scene.actions([
      { label: 'Go talk with Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja12.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second_talk2');
    scene.text('Seeing that she\'s doing more than okay, you decide to look around at what else is happening.');
    scene.actions([
      { label: 'See what else is happening', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe5'] },
    ]);
  } },
      { label: 'Ignore Katja and look around', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyObserve5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative_dance.jpg');
  scene.text('You turn away from your redheaded friend and look around. Most of the girls are just dancing around naked, as if that was the most natural thing to do, but it\'s clear from the expression on some of their faces, that this is actually pretty transgressive for them.');
  // TODO-QSP: dynamic text: Some, like <<$katja_first_orgy_temp['first_orgy_name_third_black_girl']>>, look ...
  scene.text(`Some, like ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']}, look like this is somewhat new to them, but quite not so far out from their previous experiences.`);
  // TODO-QSP: dynamic text: Others, like <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> dancing w...
  scene.text(`Others, like ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} dancing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']}, look like this is something they do every day,`);
  scene.actions([
    { label: 'See how Anushka is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join10.jpg');
    scene.text('Someone who is not bothered at all by being nude is Anushka, and you decide to see how she\'s doing.');
    // TODO-QSP: dynamic text: You walk back to the couch where you left her, and find her still there having h...
    scene.text(`You walk back to the couch where you left her, and find her still there having her pussy eaten by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    // TODO-QSP: dynamic text: You notice that <<$katja_first_orgy_temp['first_orgy_name_bald_guy']>> must have...
    scene.text(`You notice that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} must have finished fucking Katja, since he's now lining his cock up with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}'s pussy.`);
    scene.text('He then rams it into her in one hard movement, but, like a pro, she doesn\'t stop eating out Anushka.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> is riding <<$katj...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} is riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} next to them, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} is getting plowed doggystyle by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_twerking.jpg');
    // TODO-QSP: dynamic text: Since <<$katja_first_orgy_temp['first_orgy_name_bald_guy']>> is no longer fuckin...
    scene.text(`Since ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} is no longer fucking Katja, you wonder what she could possibly be doing...`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_twerking');
    // TODO-QSP: 'So she can have fun without a dick in her pussy... You were beginning to wonder just what kind of s...
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Go dancing', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe_dance'] },
    ]);
  } },
      { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Go dancing', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe_dance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyObserveDance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative_watch_twerking.jpg');
  scene.text('Most of the girls are just dancing around naked, having a good time without doing anything overtly sexual, so you join them and dance naked while you take a break from fucking.');
  // TODO-QSP: dynamic text: You notice Anushka and <<$katja_first_orgy_temp['first_orgy_name_second_black_gi...
  scene.text(`You notice Anushka and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} on all fours on the couch, twerking together.`);
  scene.actions([
    { label: 'Look for Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja13.jpg');
    scene.text('You look around and quickly spot your redheaded friend.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third1');
    scene.actions([
      { label: 'Walk over to her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja14.jpg');
    scene.text('You walk over to the couch where Katja is getting fucked.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third_talk1');
    scene.text('After making sure she\'s good, you decide to look for some action for yourself.');
    scene.actions([
      { label: 'Go back to watching the others', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe6'] },
    ]);
  } },
      { label: 'Go back to watching the others', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe6'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyObserve6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join12.jpg');
  scene.text('Leaving your redhead friend, you decide to look around for your other old schoolmate.');
  scene.text('You find her on sitting on one of the other couches, leaning back with her legs spread wide as yet another girl eats her pussy.');
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> is servicing her this ...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} is servicing her this time, making you wonder if she has the ability to get <i>any</i> girl to eat her out, just like that.`);
  scene.actions([
    { label: 'Go back to watching Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 20);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja15\'+iif(katjaQW[\'horny\'] >= 80, \'a\', \'b\')+\'.jpg');
    scene.text('You decide to switch back to watching Katja.');
    scene.text('It\'s almost as if she and Anushka are competing about who can be the biggest slut tonight.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third2');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 80) {
      scene.actions([
        { label: 'Watch her cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja16.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third3');
    scene.actions([
      { label: 'Watch some others', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe7'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Watch some others', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe7'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyObserve7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative14.jpg');
  scene.text('Leaving Katja, you look around to see what the others are doing.');
  scene.text('You\'re not surprised to see that the other main attraction for voyeurs is Anushka, yet again in the middle of two other girls.');
  // TODO-QSP: dynamic text: She's licking <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>>'s breast...
  scene.text(`She's licking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s breasts while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} is groping her left breast with one hand and fingering ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy with the other.`);
  scene.actions([
    { label: 'Look around again', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_making_out.jpg');
    scene.text('You turn away from the lesbian orgy and look around to see what else is going on.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_kissing_black_girl');
    scene.actions([
      { label: 'Return to the girls', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative16.jpg');
    // TODO-QSP: dynamic text: You look back at the three girls and notice that Anushka is gone, having been re...
    scene.text(`You look back at the three girls and notice that Anushka is gone, having been replaced by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, who is groping ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s breasts from behind.`);
    // TODO-QSP: dynamic text: As he does, his dick slides along her pussy and into <<$katja_first_orgy_temp['f...
    scene.text(`As he does, his dick slides along her pussy and into ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}'s mouth, who is down on her knees in front of them.`);
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Look to see what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe8'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyObserve8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative17.jpg');
  // TODO-QSP: dynamic text: You notice <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> and <<$katj...
  scene.text(`You notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} sitting on a couch talking; looks like some of the slutty girls are getting tired.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> then comes up to ...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} then comes up to them, and while you can't hear what she says, her intention is clear.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> starts fingering the b...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} starts fingering the black girl while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} looks on, and seems to be getting horny again.`);
  scene.actions([
    { label: 'See how Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja21.jpg');
    scene.text('You wonder if Katja is also getting tired, so you look around for her and quickly find that\'s not the case.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth1');
    scene.actions([
      { label: 'See what Anushka is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative20.jpg');
    scene.text('You look around for your other slutty old classmate to see if she\'s had enough sex yet, and she seems to have calmed down for the moment.');
    scene.text('She\'s sitting on a couch, licking her fingers on one hand while using the other to slowly play with her pussy.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> then sits down <<$katja_...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} then sits down ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} next to her, and her hand joins Anushka's in playing with Anushka's pussy.`);
    scene.actions([
      { label: 'Back to Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja22.jpg');
    scene.text('You return to Katja, but find that the scene has changed.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth2');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja23\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    scene.text('You decide to continue watching for a while.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth3');
    scene.text('You soon get bored and decide to go and dance.');
    scene.actions([
      { label: 'Go dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_naked_girls_dancing.jpg');
    scene.text('Finding naked girls who are dancing is no problem, and they let you join them as id this is the most natural thing to do.');
    scene.text('You let loose and shake your body to the rhythm of the music for some time.');
    scene.actions([
      { label: 'Check up on Katja again', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja24.jpg');
    scene.text('As you\'re dancing and having fun, you decide to look around for Katja once more.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_sixt1');
    scene.actions([
      { label: 'Go talk with Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja25\'+iif(katjaQW[\'horny\'] + 10*katjaQW[\'orgsam_at_first_orgy_count\'] >= 70, \'b\', \'a\')+\'.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_sixt_talk1');
    scene.text('Hearing you friend still having fun, you get back to dancing.');
    scene.actions([
      { label: 'Back to dancing', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe_dance2'] },
    ]);
  } },
      { label: 'Continue to dance', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe_dance2'] },
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

function enterFirstOrgyObserveDance2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join13.jpg');
  scene.text('As you turn away from Katja, you feel someone grab you by the arm.');
  // TODO-QSP: dynamic text: You turn and see Anushka grabbing you. "Time to stop being such a bore, <<$pcs_n...
  scene.text(`You turn and see Anushka grabbing you. "Time to stop being such a bore, ${((s as any).pcs_nickname ?? 0)}. Come with me."`);
  // TODO-QSP: dynamic text: She points to the sofa next to where Katja is still bouncing on <<$katja_first_o...
  scene.text(`She points to the sofa next to where Katja is still bouncing on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}'s cock.`);
  // TODO-QSP: dynamic text: You see <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> and <<$katja_f...
  scene.text(`You see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} upside down with their backs against the back of the couch, legs spread, and pussies on full display.`);
  // TODO-QSP: dynamic text: "Get up next to <<$katja_first_orgy_temp['first_orgy_name_second_black_girl']>>,...
  scene.text(`"Get up next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}," Anushka orders. "You're going to get your pussy licked."`);
  qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
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
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join14.jpg');
    scene.text('"No, I\'m fine. I\'m not interested in doing that," you tell her, her rolling of her eyes telling you she\'s disappointed.');
    if (((s as any).anushkaQW ?? 0)?.['sex'] > 0) {
      // TODO-QSP: dynamic text: "What happened to you, <<$pcs_nickname>>? You used to be fun! Whatever, I'll fin...
      scene.text(`"What happened to you, ${((s as any).pcs_nickname ?? 0)}? You used to be fun! Whatever, I'll find somebody else," she says and moves on.`);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  ((s as any).fame ?? 0)?.['city_slut'] >= 150) {
        scene.text('"So the rumors about you being a slut aren\'t true? Whatever, I\'ll find somebody else," she says and moves on.');
      } else {
        scene.text('"You\'re just as boring as everybody says you are. Whateverm I\'ll find somebody else," she says and moves on.');
      }
    }
    // TODO-QSP: dynamic text: You watch as she approaches <<$katja_first_orgy_temp['first_orgy_name_wavey']>>,...
    scene.text(`You watch as she approaches ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']}, who quickly agrees and gets on the couch.`);
    scene.actions([
      { label: 'Watch what happens', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative18.jpg');
    // TODO-QSP: dynamic text: Anushka starts by first giving a short lick to <<$katja_first_orgy_temp['first_o...
    scene.text(`Anushka starts by first giving a short lick to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']}, then spends a little longer on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}'s pussy.`);
    // TODO-QSP: dynamic text: As she moves on to <<$katja_first_orgy_temp['first_orgy_name_boob_window']>>, <<...
    scene.text(`As she moves on to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} seems to like the idea of a line of wet pussies; he quickly mounts ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} and plunges his cock into her pussy.`);
    scene.text('You watch the show for a few minutes, but start feeling a little self conscious watching others have sex, so you decide to get a drink instead.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Get on the couch', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    ((s as any).katjaQW ?? {})['first_orgy'] = 'observing+nush_lick';
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join14.jpg');
    scene.text('You do as she says as Anushka gets behind the couch and starts by giving each of your pussies a quick lick.');
    scene.text('"All of them are tasty," she grins. "I guess I need to do some more testing..."');
    // TODO-QSP: dynamic text: She then starts licking your pussy for a few minutes before she stops and moves ...
    scene.text(`She then starts licking your pussy for a few minutes before she stops and moves on to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    scene.actions([
      { label: 'Surprise', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe7.jpg');
    // TODO-QSP: dynamic text: Just as Anushka moves away, <<$katja_first_orgy_temp['first_orgy_name_green_shir...
    scene.text(`Just as Anushka moves away, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} replaces her as he crawls up on the couch.`);
    // TODO-QSP: dynamic text: "I need some of that juicy pussy if you don't mind," he laughs as he lines his <...
    scene.text(`"I need some of that juicy pussy if you don't mind," he laughs as he lines his ${((s as any).dick3 ?? 0)} cm long ${((s as any).dick_girth3 ?? 0)} cock up with your pussy.`);
    scene.actions([
      { label: 'Allow him to enter you', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID3 ?? 0), 'orgy');
    ((s as any).katjaQW ?? {})['first_orgy'] = 'observing+dick';
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe8.jpg');
    scene.text('"Yes, stuff my pussy with your big cock!" you smile, deciding it\'s time for you to get some dick for yourself.');
    scene.text('He grins and slowly lowers himself down, his cock slowly spreading your pussy as it slides inside you.');
    scene.text('He pushes himself balls deep and waits. "Are you feeling good? Can I start?"');
    scene.text('"I\'m fine," you answer with a nod.');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID3 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative18.jpg');
    // TODO-QSP: dynamic text: As <<$katja_first_orgy_temp['first_orgy_name_green_shirt_guy']>> starts fucking ...
    scene.text(`As ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} starts fucking you, you notice Anushka has moved on to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}.`);
    scene.text('You then lose the ability to concentrate on anything other than the cock sliding in and out of your pussy.');
    // TODO-QSP: dynamic text: After a few minutes, you feel <<$katja_first_orgy_temp['first_orgy_name_green_sh...
    scene.text(`After a few minutes, you feel ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} pull his cock out of you. "Sorry, but I can't continue in this position. It's too exhausting."`);
    scene.text('He then moves away before you can even suggest moving into another position. You look around at what else is happening:');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> has started fucking <<$k...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} has started fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}, Anushka is still eating ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}, and Katja is still riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}.`);
    scene.text('You then notice that you have suddenly gotten thirsty.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Stop him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_observe9.jpg');
    scene.text('"No. I don\'t want to fuck you," you tell him in a hard voice.');
    scene.text('"Okay, okay!" he replies and moves away from you.');
    // TODO-QSP: dynamic text: You get up from the couch to avoid somebody else misunderstanding what you want ...
    scene.text(`You get up from the couch to avoid somebody else misunderstanding what you want and look back and see that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} is now trying his luck with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    // TODO-QSP: dynamic text: Before he can get there, however, <<$katja_first_orgy_temp['first_orgy_name_tato...
    scene.text(`Before he can get there, however, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} jumps in and stuffs his cock in her pussy, not that she seems to mind.`);
    scene.text('After almost getting fucked against your will, you decide that you need a drink.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
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

function enterFirstOrgyJoin2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'arousal', 'foreplay_give', 1, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-1), ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join6.jpg');
  // TODO-QSP: dynamic text: You look around to see if any of the guys are available, but they're still fucki...
  scene.text(`You look around to see if any of the guys are available, but they're still fucking Katja, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}, so look for some girls to have fun with instead.`);
  scene.text('You notice that Anushka has moved away from the couches and is now standing nearby, watching the other girls either getting fucked by one of the guys or fucking each other. Since she looks horny and ready to go, you decide to approach her.');
  scene.text('"Hey Nush, how are you doing?" you ask.');
  scene.text('"Could be better," she replies. "All these bitches are too busy to lick my pussy, so why don\'t you be a good little girl and satisfy me?"');
  scene.text('She smiles as she places one foot on a couch cushion to give you easy access to her pussy. You put your mouth to her breast and start sucking on her nipple, which elicits a soft moan from her as you run your hand down her stomach, all the way to her pussy, which is soaking wet.');
  scene.text('You then slip your fingers into her warm wet pussy, causing her to moan even louder.');
  scene.actions([
    { label: 'Look at what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja6\'+iif(katjaQW[\'horny\'] >= 100, \'a\', \'b\')+\'.jpg');
    scene.text('You continue to finger bang Anushka\'s pussy, but remove your mouth from her breast to look around.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_potential_orgasm');
    // TODO-QSP: dynamic text: After seeing Katja '+iif(katjaQW['horny'] = 0, 'getting off', 'enjoying herself'...
    scene.text('After seeing Katja \'+iif(katjaQW[\'horny\'] = 0, \'getting off\', \'enjoying herself\')+\', you turn your attention back to Anushka\'s breast.');
    scene.actions([
      { label: 'Focus on Anushka', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join3'] },
    ]);
  } },
    { label: 'Focus on Anushka', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join3'] },
  ]);
  scene.build();
}

function enterFirstOrgyJoin3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-3), ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join6.jpg');
  scene.text('You give Anushka your complete attention, using your tongue on her nipples the best you can as you slide your fingers in and out of her pussy and rub her clit with the palm of your hand.');
  scene.text('After a few minutes, you have her shaking and crying out in pleasure as she grabs onto you to hold herself up.');
  scene.text('Once her orgasm has passed, you remove your fingers from her dripping wet pussy.');
  // TODO-QSP: dynamic text: "Thanks for the assist, <<$pcs_nickname>>. I really needed it," she grins before...
  scene.text(`"Thanks for the assist, ${((s as any).pcs_nickname ?? 0)}. I really needed it," she grins before she takes your wet fingers into her mouth and sucks her wetness off of them.`);
  scene.text('After a few minutes, she removes your fingers from her mouth and smiles. "Now I really need a drink."');
  scene.text('With that, she turns to walk over to the bar.');
  scene.actions([
    { label: 'Go for a drink with Anushka', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink_nush'] },
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja7.jpg');
    scene.text('You let Anushka go and look around to see what your redheaded friend is doing.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second1');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja8.jpg');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
      scene.text('You continue to watch her, and while you\'ve seen her done some wild things, this is still a step above what you\'ve seen her do before.');
    } else {
      scene.text('You continue to watch her, amazed to see how wild she has become. This is not something you imagined her doing when the night started.');
    }
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second2');
    scene.actions([
      { label: 'See if Katja is okay', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second_talk1');
    if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      scene.text('"Who knew that our little princess was such a big slut? Good for her," you suddenly hear Anushka say, toasting Katja as she takes a drink.');
      scene.text('Her tone makes it sound like she\'s proud.');
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
        scene.text('"While I\'ve seen her do many wild things, this is something else, but I knew she had it in her," you reply.');
      } else {
        scene.text('"While I know she\'s not a prude and have had quite a lot of sexual encounters with her, this is still surprising to me," you reply.');
      }
    }
    scene.actions([
      { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (30);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja10\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    scene.text('Anushka continues to sip her drink as you watch the redhead as if she was the star in a porn movie.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second3');
    scene.text('"This was quite the show, but my drink is empty and I\'m getting horny again," Anushka says as she kneels on the couch next to Katja. "You go, girl! You take that fat cock in that hot little pussy of yours!"');
    scene.text('She then leans forward with her legs spread, giving you a good view of her pussy from behind as she looks back over her shoulder at you. "Why don\'t you put that tongue of yours to good use?"');
    scene.actions([
      { label: 'Lick Anushka', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join4'] },
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

function enterFirstOrgyJoin4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join7.jpg');
  // TODO-QSP: dynamic text: You get on the couch behind Anushka and start eating her out from behind as <<$k...
  scene.text(`You get on the couch behind Anushka and start eating her out from behind as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} hammers his dick into Katja from behind and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} rides ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}'s cock.`);
  // TODO-QSP: dynamic text: "Fuck yeah, eat my pussy, <<$pcs_nickname>>!" Anushka moans as she leans over an...
  scene.text(`"Fuck yeah, eat my pussy, ${((s as any).pcs_nickname ?? 0)}!" Anushka moans as she leans over and places her face next to Katja's.`);
  scene.text('She grabs Katja by the chin with one hand and then passionately kisses her for a moment before letting go.');
  scene.text('"Fuck yeah! Take that cock, slut!" she says to Katja with a smile.');
  scene.actions([
    { label: 'Continue to go down on Anushka', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 2, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'arousal', 'vaginal_finger_give', 1, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join8.jpg');
    // TODO-QSP: dynamic text: As you continue to eat out Anushka, you feel some movement beside you and decide...
    scene.text(`As you continue to eat out Anushka, you feel some movement beside you and decide to use your fingers instead so you can look to your left, where you see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} is now sitting next you as Katja rides him cowgirl.`);
    // TODO-QSP: dynamic text: You also notice that in front of Anushka is <<$katja_first_orgy_temp['first_orgy...
    scene.text(`You also notice that in front of Anushka is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']} is now in front of Anushka as she kisses her, Anushka wholeheartedly responding to the kiss while playing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']} breasts.`);
    scene.text('You return to licking Anushka\'s pussy before you feel a hand gently pushing your head away.');
    // TODO-QSP: dynamic text: It's <<$katja_first_orgy_temp['first_orgy_name_curly']>>, she seems to want Anus...
    scene.text(`It's ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']}, she seems to want Anushka all to herself as the two of them continue to make out and their hands roam each other's bodies.`);
    scene.actions([
      { label: 'Talk with Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja12.jpg');
    // TODO-QSP: dynamic text: You get up from behind Anushka as she and <<$katja_first_orgy_temp['first_orgy_n...
    scene.text(`You get up from behind Anushka as she and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly']} start fingering each while continuing to make out.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second_talk2');
    scene.text('Becoming aroused at seeing Katja enjoying herself, you decide it\'s time for you to get some cock yourself.');
    scene.actions([
      { label: 'See if a boy is available', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join5'] },
    ]);
  } },
      { label: 'See if a boy is available', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyJoin5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join9.jpg');
  // TODO-QSP: dynamic text: You look around to see if one of the guys is available, and notice that <<$katja...
  scene.text(`You look around to see if one of the guys is available, and notice that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} guy is dancing with some girls who don't seem to want to give him any attention.`);
  // TODO-QSP: dynamic text: You walk over and join them, soon dancing close and turning around so that your ...
  scene.text(`You walk over and join them, soon dancing close and turning around so that your ${((s as any).pc_desc ?? 0)?.['butt']} butt grinds along his ${((s as any).dick_girth1 ?? 0)} dick.`);
  scene.text('"Why don\'t you give it some more attention?" you hear him ask. Instead of saying anything, you just turn around, get down on your knees and take his cock in your mouth.');
  scene.text('He enjoys your blowjob for a few minutes before he suddenly pulls you to your feet. "I can\'t wait anymore, I need to fuck your pussy!"');
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join10.jpg');
    // TODO-QSP: dynamic text: He then forcefully turns you around and shoves you down on a nearby couch next t...
    scene.text(`He then forcefully turns you around and shoves you down on a nearby couch next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, who is riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}'s cock.`);
    // TODO-QSP: dynamic text: You then feel <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>'s <<dick1>...
    scene.text(`You then feel ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s ${((s as any).dick1 ?? 0)} cm cock slam into your pussy before he starts fucking you hard.`);
    scene.text('After a few very hard thrusts, he eases up little and gets into a steady rhythm.');
    // TODO-QSP: dynamic text: You look around and see that <<$katja_first_orgy_temp['first_orgy_name_bald_guy'...
    scene.text(`You look around and see that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} is no longer fucking Katja. He is now sliding his cock into ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} as she eats out Anushka.`);
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_twerking.jpg');
    // TODO-QSP: dynamic text: As <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>'s pace has gotten ste...
    scene.text(`As ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s pace has gotten steady enough for you to look around for your redheaded friend.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_twerking');
    scene.actions([
      { label: 'Concentrate on being fucked', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join6'] },
    ]);
  } },
      { label: 'Concentrate on being fucked', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join6'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyJoin6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 4, ((s as any).npcID1 ?? 0), 'orgy', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join11.jpg');
  // TODO-QSP: dynamic text: You concentrate fully on the sensation of <<$katja_first_orgy_temp['first_orgy_n...
  scene.text(`You concentrate fully on the sensation of ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock sliding in and out of your very wet pussy.`);
  // TODO-QSP: dynamic text: The sensation is so good that you barely notice <<$katja_first_orgy_temp['first_...
  scene.text(`The sensation is so good that you barely notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} change their position in front of you.`);
  // TODO-QSP: dynamic text: After a few more minutes, <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>...
  scene.text(`After a few more minutes, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} has you cumming hard all over his stiff cock.`);
  scene.text('Seeing that you have cum, he withdraws his cock from your wet slit and moves away while you\'re still recovering from your orgasm.');
  scene.text('Once you\'ve come down, you look around for something to do.');
  scene.actions([
    { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    { label: 'Dance with some of the girls', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join_dance'] },
  ]);
  scene.build();
}

function enterFirstOrgyJoinDance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative_watch_twerking.jpg');
  scene.text('Most of the girls are just dancing around naked, having a good time without doing anything overtly sexual, so you join them and dance naked for a few minutes while you take a break from fucking.');
  // TODO-QSP: dynamic text: You notice Anushka is on all fours on a couch, twerking along with <<$katja_firs...
  scene.text(`You notice Anushka is on all fours on a couch, twerking along with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
  scene.actions([
    { label: 'Look for Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja13.jpg');
    scene.text('You look around and quickly spot your redheaded friend.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third1');
    scene.actions([
      { label: 'Walk over to her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja14.jpg');
    scene.text('You walk over to the couch where Katja is getting fucked.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third_talk1');
    scene.text('After making sure she\'s good, you decide to look for some action for yourself.');
    scene.actions([
      { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
    ]);
  } },
      { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join7'] },
    ]);
  } },
    { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join7'] },
  ]);
  scene.build();
}

function enterFirstOrgyJoin7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'foreplay_give', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative13.jpg');
  scene.text('Seeing that all the men have their cocks buried in other pussies, you look around for any girls that might interested in more than just dancing.');
  // TODO-QSP: dynamic text: You notice Anushka straddling the couch where Katja is getting fucked by <<$katj...
  scene.text(`You notice Anushka straddling the couch where Katja is getting fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, such that his fingers have good access to Anushka's pussy while she sucks on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s breast.`);
  // TODO-QSP: dynamic text: You walk over behind Anushka, past <<$katja_first_orgy_temp['first_orgy_name_fir...
  scene.text(`You walk over behind Anushka, past ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}'s cock.`);
  scene.text('"Need some extra hands, Nush?" you ask. Having her mouth full, she makes a short of strange sound which you take as a yes.');
  // TODO-QSP: dynamic text: "Please join us. The more the merrier," <<$katja_first_orgy_temp['first_orgy_nam...
  scene.text(`"Please join us. The more the merrier," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} smiles.`);
  // TODO-QSP: dynamic text: You grab Anushka's left breast with one hand and start kissing her back while re...
  scene.text(`You grab Anushka's left breast with one hand and start kissing her back while reaching around her and playing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy with the other.`);
  scene.actions([
    { label: 'Look at Katja getting fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja15\'+iif(katjaQW[\'horny\'] >= 80, \'a\', \'b\')+\'.jpg');
    // TODO-QSP: dynamic text: As you're fondling Anushka and <<$katja_first_orgy_temp['first_orgy_name_brown_d...
    scene.text(`As you're fondling Anushka and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, you stop to look down at your redhead friend next to you.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third2');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 80) {
      scene.actions([
        { label: 'Watch her cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 1, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-2), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-1), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja16.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third3');
    scene.text('After watching Katja orgasm, you concentrate on the girls you\'re servicing right now.');
    scene.actions([
      { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join8'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join8'] },
    ]);
  } },
    { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join8'] },
  ]);
  scene.build();
}

function enterFirstOrgyJoin8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'clit_finger_give', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'foreplay_give', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative14.jpg');
  // TODO-QSP: dynamic text: You focus your attention on <<$katja_first_orgy_temp['first_orgy_name_brown_dres...
  scene.text(`You focus your attention on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s drenched pussy while still fondling Anushka's breast.`);
  // TODO-QSP: dynamic text: You also start to plant kisses along Anushka's naked body, but after a while <<$...
  scene.text(`You also start to plant kisses along Anushka's naked body, but after a while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} comes over to you.`);
  scene.text('"Don\'t be greedy! Share," she says and pulls Anushka over to her, who goes willingly as they start to make out.');
  scene.text('You let go of Anushka since she has a new playfriend to play with, but as you do, you notice that Katja is no longer next to you.');
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>>'s pussy demands your a...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy demands your attention, though, so you get down on your knees in front of her to better service it.`);
  scene.actions([
    { label: 'Surprise', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative15.jpg');
    // TODO-QSP: dynamic text: You move close to <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>>'s pu...
    scene.text(`You move close to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy and start licking it when you notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} moving in behind ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}.`);
    // TODO-QSP: dynamic text: A cock then suddenly presses against your lips and you glance up to see <<$katja...
    scene.text(`A cock then suddenly presses against your lips and you glance up to see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} grinning down at you.`);
    // TODO-QSP: dynamic text: He then slides his dick back and forth along <<$katja_first_orgy_temp['first_org...
    scene.text(`He then slides his dick back and forth along ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s wet slit, hitting you in the face and making it hard for you to lick her pussy.`);
    scene.actions([
      { label: 'Take his cock in your mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative16.jpg');
    // TODO-QSP: dynamic text: Since you can't really lick <<$katja_first_orgy_temp['first_orgy_name_brown_dres...
    scene.text(`Since you can't really lick ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy properly, you might as well suck the cock.`);
    // TODO-QSP: dynamic text: "Lift her leg," you command, and <<$katja_first_orgy_temp['first_orgy_name_tatoo...
    scene.text(`"Lift her leg," you command, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} obeys, giving you full access to his cock, which you take into your mouth and start sucking.`);
    scene.text('After a few minutes, he pulls out of your mouth. "That was great, but I\'m going to fuck this pussy now."');
    scene.actions([
      { label: 'Leave them', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join9'] },
    ]);
  } },
      { label: 'Leave them', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join9'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyJoin9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_making_out.jpg');
  // TODO-QSP: dynamic text: As you get up, <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> slams his...
  scene.text(`As you get up, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} slams his hard cock into ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s pussy, causing her to squeak in pleasure before he starts fucking her hard.`);
  scene.text('You turn away as her moans turn into screams of pleasure. You look around to see what else is going on.');
  qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_kissing_black_girl');
  scene.actions([
    { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    { label: 'Look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join10'] },
  ]);
  scene.build();
}

function enterFirstOrgyJoin10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join12.jpg');
  // TODO-QSP: dynamic text: You look to see if any of the guys available, but instead see Anushka half layin...
  scene.text(`You look to see if any of the guys available, but instead see Anushka half laying, half sitting on the couch with her legs spread wide as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} stops eating her pussy and gets up looking a little unsteady before stumbling away.`);
  scene.text('"What the fuck, bitch?! Finish what you started!" Anushka calls after her, but she either doesn\'t hear or doesn\'t care as she keeps going.');
  scene.text('Anushka then turns towards you and smiles as she pats her pussy. "I really need to get off, some come over here and lick my pussy."');
  scene.text('As you look down at Anushka, you can see she\'s as equally horny as she is frustrated, so you take pity.');
  scene.text('"Okay, I\'ll give you the release you need," you tell her and she uses her hand to rub her clit as you in dive and start licking her pussy.');
  scene.actions([
    { label: 'Get her to cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join12.jpg');
    scene.text('You decide to show Anushka how good of a pussy licker you are, and use all the skill you have on her.');
    scene.text('It\'s clearly working as her moans and cries get louder as she squirms in pleasure.');
    scene.text('"Yes... YES! Fucking eat my pussy! Faster, yes!" she almost screams.');
    scene.text('After a few minutes of this, she moans even louder as her orgasm fast approaches.');
    scene.text('"Yes, yes, yeeeessss! I\'m cumming! I\'m - Ahh!" she cries out as her body starts shuddering in orgasm.');
    scene.actions([
      { label: 'Satisfied Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja21.jpg');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, that was just what I needed. You're a champion pussy ...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, that was just what I needed. You're a champion pussy eater!" she laughs after she has stopped panting.`);
    scene.text('"You\'re welcome," you reply. "Always happy to help."');
    scene.text('You then get up and look around, eventually spotting your redheaded friend.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth1');
    scene.text('You then start dancing a little with the other naked girls.');
    scene.actions([
      { label: 'Take a break', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative17.jpg');
    // TODO-QSP: dynamic text: Getting tired, you decide to sit down next to <<$katja_first_orgy_temp['first_or...
    scene.text(`Getting tired, you decide to sit down next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} is sitting next to you.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> then approaches w...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} then approaches with a smile on her face. "My pussy really need some attention. Care to help me?"`);
    // TODO-QSP: dynamic text: "Sure. Come here," <<$katja_first_orgy_temp['first_orgy_name_brown_dress']>> ans...
    scene.text(`"Sure. Come here," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']} answers and slides her fingers into ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}'s wet pussy.`);
    // TODO-QSP: dynamic text: You look on curiously for a few minutes until <<$katja_first_orgy_temp['first_or...
    scene.text(`You look on curiously for a few minutes until ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} lets out a scream as she cums on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}'s fingers.`);
    scene.actions([
      { label: 'Look around for Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja22.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> thanks <<$katja_f...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} thanks ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress']}, moves away and starts dancing again, so you decide to get up and look for Katja.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth2');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja23\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    scene.text('YOu continue to watch the redhead as you move through the naked girls and start dancing again.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth3');
    scene.actions([
      { label: 'Dance some more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_naked_girls_dancing.jpg');
    scene.text('You lose sight of your friend as the naked girls around you become more wild.');
    scene.text('You decide to let loose and join them, shaking your body to the rhythm for some time when you suddenly you feel somebody press tightly against your back.');
    scene.text('You feel small breasts pressed against your back as arms slide around your body, the hands working down almost to your clit, turning your head just enough to see that it\'s Anushka.');
    // TODO-QSP: dynamic text: "Come here, <<$pcs_nickname>>. It's time that I return the favor and do a little...
    scene.text(`"Come here, ${((s as any).pcs_nickname ?? 0)}. It's time that I return the favor and do a little pussy licking of my own..." she says as she starts to drag you away.`);
    scene.text('Anxious to get your pussy licked as well, you decide to follow her.');
    scene.actions([
      { label: 'See what Anushka has planned', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join13.jpg');
    scene.text('She drags you towards an empty couch. "Get down on the couch with your ass up."');
    scene.text('You get down on all fours and stick your ass in the air, but that\'s apparently not what she wants.');
    scene.text('"No, not like that! Your head should be down, your back against the backrest, and your ass in the air. Like this," she explains, and moves you around until she\'s satisfied.');
    scene.text('"Stay like this, I\'ll be right back," she says and moves away.');
    scene.actions([
      { label: 'Wait to see what is happening', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join14.jpg');
    // TODO-QSP: dynamic text: While you're waiting for Anushka to return, <<$katja_first_orgy_temp['first_orgy...
    scene.text(`While you're waiting for Anushka to return, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} sits down next to you and Katja mounts his dick reverse cowgirl style.`);
    // TODO-QSP: dynamic text: You watch your friend get fucked next to you until you notice <<$katja_first_org...
    scene.text(`You watch your friend get fucked next to you until you notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} get down on the couch next to you in the same position as yourself.`);
    scene.text('"Damn, that looks good! Three juicy pussies, all for me!" you hear Anushka loudly exclaim.');
    scene.actions([
      { label: 'Get eaten', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'clit_finger', (-1), ((s as any).npcID7 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative18.jpg');
    // TODO-QSP: dynamic text: Anushka starts by first giving <<$katja_first_orgy_temp['first_orgy_name_wavey']...
    scene.text(`Anushka starts by first giving ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']}'s pussy a quick lick, then spends a little longer on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    // TODO-QSP: dynamic text: As she moves onto you, you watch <<$katja_first_orgy_temp['first_orgy_name_green...
    scene.text(`As she moves onto you, you watch ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} mount ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} and slide his cock into her pussy.`);
    scene.text('You lose your concentration as Anushka masterfully starts to eat you out.');
    // TODO-QSP: dynamic text: After a few minutes, you suddenly feel a finger teasing your clit and look round...
    scene.text(`After a few minutes, you suddenly feel a finger teasing your clit and look round to see that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} did not want to be left out.`);
    // TODO-QSP: dynamic text: She has one hand on your clit and the other on <<$katja_first_orgy_temp['first_o...
    scene.text(`She has one hand on your clit and the other on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']}'s, who is still being fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}.`);
    scene.actions([
      { label: 'Get eaten', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID7 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative18.jpg');
    scene.text('The two girls working on your pussy really know what they\'re doing, and soon have you cumming with a huge orgasm.');
    // TODO-QSP: dynamic text: "There. I've repaid you," Anushka grins before she moves on to eat out <<$katja_...
    scene.text(`"There. I've repaid you," Anushka grins before she moves on to eat out ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
    // TODO-QSP: dynamic text: You awkwardly turn around and get up as you hear <<$katja_first_orgy_temp['first...
    scene.text(`You awkwardly turn around and get up as you hear ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} cumming from the fucking she's getting from ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}.`);
    scene.actions([
      { label: 'Talk with Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja25\'+iif(katjaQW[\'horny\'] + 10*katjaQW[\'orgsam_at_first_orgy_count\'] >= 70, \'b\', \'a\')+\'.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_sixt_talk1');
    scene.text('Hearing your friend still having fun, you notice how thirsty you are.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    ]);
  } },
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
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

function enterFirstOrgyPlayerTakesInitiative(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['first_orgy'] = 'taking_initiative';
  qspCall(s, 'npcgeneratec', '', 1, 'boob_window', Math.floor(Math.random() * 5) + 19, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'e');
  qspCall(s, 'arousal', 'foreplay', 2, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative1.jpg');
  scene.text('You decide that, since this is going to lead to an orgy anyway, why not be one of the girls that starts it?');
  // TODO-QSP: dynamic text: You look around and see that <<$katja_first_orgy_temp['first_orgy_name_green_shi...
  scene.text(`You look around and see that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} is already occupied with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, who has hiked her skirt up so everybody is aware that she's not wearing panties.`);
  if (((s as any).PCloPants ?? 0) > 0) {
    // TODO-QSP: dynamic text: You take your pants off and put them away before walking over to <<$katja_first_...
    scene.text(`You take your pants off and put them away before walking over to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
  } else {
    // TODO-QSP: dynamic text: You also hike you skirt up before walking over to <<$katja_first_orgy_temp['firs...
    scene.text(`You also hike you skirt up before walking over to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
  }
  // TODO-QSP: dynamic text: He's dancing with <<$katja_first_orgy_temp['first_orgy_name_boob_window']>>, who...
  scene.text(`He's dancing with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}, who is practically grinding him, so you decide to join by dancing so close behind him that his hands naturally come to rest on your naked thighs.`);
  scene.actions([
    { label: 'Grind on him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative2.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> continues to dance with ...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} continues to dance with you and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}, but it's more grinding than dancing, and he moves you to his front so he can better grab at your naked ass.`);
    scene.text('"Don\'t hold back," you tell him in your most seductive voice.');
    scene.actions([
      { label: 'Escalation', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative3.jpg');
    // TODO-QSP: dynamic text: He takes the initiative as his hands move to your chest before he starts sucking...
    scene.text(`He takes the initiative as his hands move to your chest before he starts sucking on your ${((s as any).pc_desc ?? 0)?.['breast']} breast.`);
    scene.actions([
      { label: 'Get his cock out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative4.jpg');
    scene.text('You push him away before you turn around and get down on your knees.');
    // TODO-QSP: dynamic text: As you do, <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>'s hand finds ...
    scene.text(`As you do, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s hand finds its way into ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}'s shorts.`);
    scene.text('You can clearly hear from her voice that he has found her clit and that he knows what to do with his hand.');
    // TODO-QSP: dynamic text: You then open his pants and pull them down so his <<dick1>> cm << $dick_girth1>>...
    scene.text(`You then open his pants and pull them down so his ${((s as any).dick1 ?? 0)} cm ${((s as any).dick_girth1 ?? 0)} cock pops out.`);
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative5.jpg');
    // TODO-QSP: dynamic text: You start sucking his cock, taking your time to enjoy it. As you're doing this, ...
    scene.text(`You start sucking his cock, taking your time to enjoy it. As you're doing this, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} gets down next to you and starts licking his balls.`);
    scene.text('You continue to blow him for some time before he stops you. "I want my cock in your pussy now!"');
    scene.actions([
      { label: 'Get on all fours', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative6.jpg');
    // TODO-QSP: dynamic text: You get up and move over to the nearest couch and get up on it on all fours, sti...
    scene.text(`You get up and move over to the nearest couch and get up on it on all fours, sticking your ass out. ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} follows you and slowly aligns his cock with your wet pussy.`);
    // TODO-QSP: dynamic text: You notice <<$katja_first_orgy_temp['first_orgy_name_green_shirt_guy']>> sitting...
    scene.text(`You notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} sitting next to you, his cock in ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}'s mouth as Anushka eats out ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']}.`);
    // TODO-QSP: dynamic text: You stop paying attention to what's going on around you as <<$katja_first_orgy_t...
    scene.text(`You stop paying attention to what's going on around you as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} rams his cock into you and starts fucking you.`);
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative7.jpg');
    // TODO-QSP: dynamic text: He fucks you hard as you hear Anushka cheering on you on and encouraging <<$katj...
    scene.text(`He fucks you hard as you hear Anushka cheering on you on and encouraging ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} to fuck you harder.`);
    // TODO-QSP: dynamic text: After a few minutes, <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> pul...
    scene.text(`After a few minutes, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} pulls out. "Let's change position. Lie down on the couch."`);
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_confused.jpg');
    scene.text('As you get up, you see a very surprised looking Katja standing next to you, her dress pulled up so that her G-strings is clearly visible.');
    scene.text('You look around and see that most of the girls are either naked or just wearing their panties, so Katja\'s look is practically conservative.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what are you doing?!" she asks, clearly not sure what to do ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, what are you doing?!" she asks, clearly not sure what to do with the situation.`);
    scene.text('"Just having fun," you answer. "You should do the same."');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
      scene.text('"You\'re right. This is no more crazy than what I\'ve done before. Why should I not fuck the hot guys?" she answers, but her resolve seems to fade as she\'s saying it.');
    } else {
      if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100) {
        scene.text('"Maybe. I don\'t know. It looks hot. But... It also makes you look like a slut. I don\'t know...." she answers, clearly excited enough to do it, but still having some internal resistance from thinking about her reputation.');
        scene.text('"Don\'t worry about what others think! Do what you want and screw the rest. Literally!" you answer.');
      } else {
        scene.text('"No, I don\'t thinks so... I mean I\'m not one to just have sex with strangers..... Also it makes you look like a slut. I\'m sorry," she answers, clearly not wanting to insult you, but looking very excited at the same time.');
        scene.text('"Don\'t be afraid. Just go with the flow and let your lust guide you. If in doubt, just do what I would do," you tell her.');
      }
    }
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> is clearly getting impat...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} is clearly getting impatient. Before you can hear Katja's response, he grabs you and places you on your back on the couch.`);
    scene.actions([
      { label: 'More fucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID4 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative8.jpg');
    // TODO-QSP: dynamic text: You move to to a comfortable position as <<$katja_first_orgy_temp['first_orgy_na...
    scene.text(`You move to to a comfortable position as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} slides his cock back inside you and starts fucking you again.`);
    // TODO-QSP: dynamic text: After a few minutes, you '+iif( anushkaQW['sex'] > 0, 'see', 'are surprised to s...
    scene.text('After a few minutes, you \'+iif( anushkaQW[\'sex\'] > 0, \'see\', \'are surprised to see\')+\' Anushka straddle your head, her pussy right above you. She lowers herself down until she\'s sitting on your face, the wetness from her pussy smearing against your lips.');
    // TODO-QSP: dynamic text: "Lick my pussy, <<$pcs_nickname>>!" she commands, and you do as you're told and ...
    scene.text(`"Lick my pussy, ${((s as any).pcs_nickname ?? 0)}!" she commands, and you do as you're told and start licking her pussy with all the skill you can muster.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja1.jpg');
    scene.text('After a few minutes, Anushka moves away and you\'re allowed to breathe again.');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> is still pounding you fa...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} is still pounding you fast, but you take your time to look around to see what's happening.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_before_fuck');
    scene.actions([
      { label: 'Concentrate on your own fucking', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued1'] },
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja2.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_penetration');
    // TODO-QSP: dynamic text: You lose sight of Katja as other people move in between you, and <<$katja_first_...
    scene.text(`You lose sight of Katja as other people move in between you, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s pounding is also getting faster, so concentrating on anything else is almost impossible.`);
    scene.actions([
      { label: 'Concentrate on your own fucking', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued1'] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative9.jpg');
  // TODO-QSP: dynamic text: You turn you head back to look at <<$katja_first_orgy_temp['first_orgy_name_tato...
  scene.text(`You turn you head back to look at ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, who is continuing to fuck you hard.`);
  scene.text('After a few more minutes, he pulls out. "I need a break, or I\'ll cum too soon. Need to try some of the other pussy that\'s available before that happens."');
  scene.text('He wanders off as you get up and look around. Almost all of the girls are naked now, so you decide get rid of the rest of your clothes.');
  scene.actions([
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja3.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first');
    scene.text('So you decide that she seems into it and look around for something else to do.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Look around for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued2'] },
    ]);
  } },
    { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    { label: 'Look around for some other action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued2'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 3);
  qspCall(s, 'arousal', 'foreplay_give', (-3));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative_dance.jpg');
  // TODO-QSP: dynamic text: You look around to see if any of the other guys are available, but they're fucki...
  scene.text(`You look around to see if any of the other guys are available, but they're fucking Katja, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
  // TODO-QSP: dynamic text: You look for some girls to have fun with instead, welcoming <<$katja_first_orgy_...
  scene.text(`You look for some girls to have fun with instead, welcoming ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']} to dance with you.`);
  scene.text('You dance with her for a few minutes, and while she\'s fine with some light touching, she won\'t let you near her pussy, so you decide to move on.');
  scene.actions([
    { label: 'Look at what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja6\'+iif(katjaQW[\'horny\'] >= 100, \'a\', \'b\')+\'.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_first_potential_orgasm');
    // TODO-QSP: dynamic text: Seeing Katja '+iif(katjaQW['horny'] = 0, 'getting off', 'enjoying herself')+' ha...
    scene.text('Seeing Katja \'+iif(katjaQW[\'horny\'] = 0, \'getting off\', \'enjoying herself\')+\' has you renew your effort to get some more action yourself.');
    scene.actions([
      { label: 'Try to get some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued3'] },
    ]);
  } },
    { label: 'See if there is somewhere else you can get some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued3'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID4 ?? 0), 'orgy');
  qspCall(s, 'arousal', 'foreplay_give', (-2), ((s as any).npcID4 ?? 0), 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative10.jpg');
  scene.text('You look around to see if there\'s anywhere or anyone for you to get involved with, but all the guys are still occupied.');
  // TODO-QSP: dynamic text: You notice that <<$katja_first_orgy_temp['first_orgy_name_bald_guy']>> is still ...
  scene.text(`You notice that ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} is still fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}, but now has her face buried in Anushka's pussy while being pounded from behind.`);
  scene.text('"Is she good, Anushka?" you ask as you walk over to them.');
  scene.text('"She\'s great! This bitch really knows to eat pussy! Never missing a beat even though she\'s being rammed hard like the slut she is," Anushka answers between moans of pleasure.');
  scene.text('She then stretches her neck as a sign that she wants to make out with you, so you lean down and meet her, your tongues intertwining as you start making out.');
  scene.text('For the next few minutes, your tongues do battle as you fondle Anushka\'s perky breasts.');
  // TODO-QSP: dynamic text: She then pulls away and cries out as she orgasms. At the same time, <<$katja_fir...
  scene.text(`She then pulls away and cries out as she orgasms. At the same time, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} also stops licking her and seems to also have an orgasm of her own.`);
  // TODO-QSP: dynamic text: After she comes down, Anushka climbs off the couch, clearly in need of a break. ...
  scene.text(`After she comes down, Anushka climbs off the couch, clearly in need of a break. ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} also pulls herself away from ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} and gets up.`);
  scene.actions([
    { label: 'Go for a drink with Anushka', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink_nush'] },
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja7.jpg');
    scene.text('You let Anushka go and look around to see what your redheaded friend is doing.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second1');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja8.jpg');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
      scene.text('You continue to watch her, and while you\'ve seen her done some wild things, this is still a step above what you\'ve seen her do before.');
    } else {
      scene.text('You continue to watch her, amazed at how she how wild she\'s become. This is not something you imagined her doing when the night started.');
    }
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second2');
    scene.actions([
      { label: 'See if Katja is okay', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second_talk1');
    if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      scene.text('"Who knew that our little princess was secretly such a big slut? Good for her," you suddenly hear Anushka say while toasting Katja as she takes a drink.');
      scene.text('Her tone makes it sound like she\'s proud.');
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
        scene.text('"While I\'ve seen her do many wild things, this is still something else, but I knew she had it in her," you reply.');
      } else {
        scene.text('"While I know she\'s not a prude and have had quite a lot of sexual encounters with her, this is still surprising to me," you reply.');
      }
    }
    scene.actions([
      { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (30);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja10\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    scene.text('Anushka continues to sip her drink as you both watch the redhead as if she was the star in a porn movie.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second3');
    scene.text('"This was quite the show, but my drink is empty and I\'m getting horny again. Wanna help me out?" she asks while giving you a look that seems like an invitation.');
    scene.text('"Not right now. I really need some more cock," you reply.');
    scene.text('"Your loss. I\'ll just find another willing mouth then..." she winks before leaving you.');
    scene.actions([
      { label: 'Get a dick', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued4'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Get a dick', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued4'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative11.jpg');
  // TODO-QSP: dynamic text: Looking around, you finally spot <<$katja_first_orgy_temp['first_orgy_name_tatoo...
  scene.text(`Looking around, you finally spot ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} stroking his cock and quickly walk over to him.`);
  scene.text('"Fancy some more of this tight pussy?" you ask him seductively.');
  scene.text('"Of course. Get on your back," he orders.');
  scene.text('You comply and lay down on the couch, spreading your legs as far as you can to give him full access to your wet pussy.');
  // TODO-QSP: dynamic text: He wastes no time and slams his <<dick_girth1>> cock into your pussy before he s...
  scene.text(`He wastes no time and slams his ${((s as any).dick_girth1 ?? 0)} cock into your pussy before he starts fucking you hard and steady.`);
  scene.actions([
    { label: 'See how Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'arousal', 'vaginal', (-1), 'erotic_nudity');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja11.jpg');
    // TODO-QSP: dynamic text: As <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> fucks you, you let yo...
    scene.text(`As ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} fucks you, you let your eyes wander to see what's going on around you.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_second4');
    // TODO-QSP: dynamic text: You turn your attention back to <<$katja_first_orgy_temp['first_orgy_name_tatoo_...
    scene.text(`You turn your attention back to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, who is slamming his cock deep into your pussy.`);
    scene.actions([
      { label: 'Concentrate on yourself', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued5'] },
    ]);
  } },
    { label: 'Concentrate on yourself', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued5'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative12.jpg');
  // TODO-QSP: dynamic text: You're enjoying the pounding you're getting from <<$katja_first_orgy_temp['first...
  scene.text(`You're enjoying the pounding you're getting from ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} when you suddenly feel a hand brushing your side as you hear loud moans next to you.`);
  // TODO-QSP: dynamic text: You look up and see <<$katja_first_orgy_temp['first_orgy_name_second_black_girl'...
  scene.text(`You look up and see ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} is on her back on the arm of the couch, being fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}.`);
  // TODO-QSP: dynamic text: For the next few minutes, the two of you seem to have a competition about who ca...
  scene.text(`For the next few minutes, the two of you seem to have a competition about who can moan the loudest when ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} suddenly pulls out.`);
  scene.text('"Need a break," he huffs and walks away, leaving you slowly sit up and look around.');
  scene.actions([
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_twerking.jpg');
    scene.text('You look around for your redheaded friend and quickly spot her.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_twerking');
    scene.text('After enjoying the show a little, you decide to do something else.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
      { label: 'Dance with some of the girls', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance'] },
    ]);
  } },
    { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    { label: 'Dance with some of the girls', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinuedDance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative_watch_twerking.jpg');
  scene.text('Most of the girls are just dancing around naked, having a good time without doing anything overtly sexual, so you join them and dance naked for a few minutes while you take a break from fucking.');
  // TODO-QSP: dynamic text: You notice Anushka is on all fours on the couch, twerking along with <<$katja_fi...
  scene.text(`You notice Anushka is on all fours on the couch, twerking along with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}.`);
  scene.actions([
    { label: 'Look for Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja13.jpg');
    scene.text('You look around and quickly spot your redheaded friend.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third1');
    scene.actions([
      { label: 'Walk over to her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja14.jpg');
    scene.text('You walk over to the couch where Katja is getting fucked.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third_talk1');
    scene.text('After making sure she\'s good, you decide to look for some action for yourself.');
    scene.actions([
      { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
    ]);
  } },
      { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
    ]);
  } },
    { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative13.jpg');
  scene.text('Seeing that all the men have their cocks buried in other pussies, you look around for some girls that seem interested in more than just dancing.');
  // TODO-QSP: dynamic text: You notice Anushka straddling the couch where Katja is getting fucked by <<$katj...
  scene.text(`You notice Anushka straddling the couch where Katja is getting fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}, such that his fingers have good access to Anushka's pussy while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} fondles her breasts from behind.`);
  // TODO-QSP: dynamic text: You walk over to Anushka, walking past <<$katja_first_orgy_temp['first_orgy_name...
  scene.text(`You walk over to Anushka, walking past ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}'s cock.`);
  scene.text('"Are they any good, Nush?" you ask.');
  scene.text('"They\'re great!" she replies with a smile. "Why don\'t you join in and find out for yourself?"');
  scene.text('You do as she says and your breasts end up so close to Anushka\'s face that she starts sucking on your nipples.');
  // TODO-QSP: dynamic text: At the same time, <<$katja_first_orgy_temp['first_orgy_name_boob_window']>>'s fr...
  scene.text(`At the same time, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}'s free hand reaches around Anushka and starts to expertly play with your pussy.`);
  scene.actions([
    { label: 'Look at Katja getting fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja15\'+iif(katjaQW[\'horny\'] >= 80, \'a\', \'b\')+\'.jpg');
    scene.text('You decide to look down at your redhead friend next to you.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third2');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 80) {
      scene.actions([
        { label: 'Watch her cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 1, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'clit_finger', (-2), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-1), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja16.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_third3');
    scene.text('After watching Katja orgasm, you decide to concentrate on your own pleasure.');
    scene.actions([
      { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued7'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued7'] },
    ]);
  } },
    { label: 'Focus on your own partners', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued7'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative14.jpg');
  // TODO-QSP: dynamic text: You turn your attention back to Anushka and <<$katja_first_orgy_temp['first_orgy...
  scene.text(`You turn your attention back to Anushka and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}.`);
  qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Anushka stops sucking your nipples and you feel <<$katja_first_orgy_temp['first_...
  scene.text(`Anushka stops sucking your nipples and you feel ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} remove her fingers from your pussy. As you look around, you see that Katja is no longer next to you.`);
  scene.actions([
    { label: '<<$katja_first_orgy_temp[\'first_orgy_name_tatoo_guy\']>> focuses on you', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID4 ?? 0), 'orgy', 'lesbian');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative15.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> moves behind you and gra...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} moves behind you and grabs you in such a way that his hard cock slides along your pussy.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> gets down on her knees...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} gets down on her knees in front of you and starts sucking his dick.`);
    scene.text('You can feel her hot breath on your clit as she does, increasing your excitement.');
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_making_out.jpg');
    // TODO-QSP: dynamic text: While <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> and <<$katja_fir...
    scene.text(`While ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} are playing around, you look around for your redheaded friend.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_kissing_black_girl');
    scene.text('Seeing that your friend seems to be enjoying herself, you return your focus to the people just in front of your pussy.');
    scene.actions([
      { label: 'Another penetration', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued8'] },
    ]);
  } },
      { label: 'Another penetration', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued8'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinued8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'cuni', (-3), ((s as any).npcID5 ?? 0), 'orgy', 'lesbian', 'no_orgasm_msg');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative16.jpg');
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> pops <<$katja_first_or...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} pops ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock out of her mouth. "Now it's nice and ready! Hold up her legs."`);
  // TODO-QSP: dynamic text: He does as commanded and and places his arm under your left leg and pulls op up ...
  scene.text(`He does as commanded and and places his arm under your left leg and pulls op up so that there is plenty of access to your pussy. ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} gives his cock a last lick before she stuffs it into your pussy.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> then lifts you up and do...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} then lifts you up and down on his cock as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} starts licking your clit.`);
  scene.text('They attack your pussy with great skill, and soon have your body shaking all over as you cum with an explosive orgasm.');
  // TODO-QSP: dynamic text: "I think she's had enough," <<$katja_first_orgy_temp['first_orgy_name_boob_windo...
  scene.text(`"I think she's had enough," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} says and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} withdraws his dick from your pussy and gently lets your leg down, making sure that you're stable.`);
  // TODO-QSP: dynamic text: He then moves away, <<$katja_first_orgy_temp['first_orgy_name_boob_window']>> ma...
  scene.text(`He then moves away, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} making sure you're steady on your feet before also looking for something else to do. You decide you need a break from sex.`);
  scene.actions([
    { label: 'Have a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    { label: 'Dance', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance2'] },
  ]);
  scene.build();
}

function enterFirstOrgyInitiativeContinuedDance2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_naked_girls_dancing.jpg');
  scene.text('Everybody at the party is now naked, but most of the girls just dance around with each other as they would be if they had clothes on.');
  scene.text('You decide to join some them, and just sway your naked body next to theirs for a few minutes.');
  scene.actions([
    { label: 'Continue to dance', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID4 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID6 ?? 0), 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja21.jpg');
    scene.text('As you\'re dancing around near one of the couches, Anushka suddenly grabs you and pulls you closer.');
    scene.text('As you turn towards her, she takes your breast into her mouth and starts sucking your nipple.');
    // TODO-QSP: dynamic text: You notice Katja next to her, on her back on the arm of the couch in an uncomfor...
    scene.text(`You notice Katja next to her, on her back on the arm of the couch in an uncomfortable looking position, getting fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}.`);
    scene.text('After a few minutes, Anushka pushes you away and winks. "Hope you enjoyed that."');
    // TODO-QSP: dynamic text: You continue to dance, <<$katja_first_orgy_temp['first_orgy_name_first_black_gir...
    scene.text(`You continue to dance, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} dancing close to you as you let her hands roam over your naked body in clearly sexual ways.`);
    scene.actions([
      { label: 'You need a break', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID6 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID6 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-3), ((s as any).npcID6 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative17.jpg');
    // TODO-QSP: dynamic text: After dancing some more with <<$katja_first_orgy_temp['first_orgy_name_first_bla...
    scene.text(`After dancing some more with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']}, you start getting tired.`);
    scene.text('"I need to take a break," you tell her.');
    scene.text('"Don\'t leave me hanging!" she replies. "I\'m so horny!"');
    scene.text('"Come here and I\'ll take care of you then..." you tell as you sit on a couch.');
    scene.text('She stands next to you and you go to work on her pussy with your fingers.');
    // TODO-QSP: dynamic text: After sliding your fingers along her pussy and playing with her clit, <<$katja_f...
    scene.text(`After sliding your fingers along her pussy and playing with her clit, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']} sitting next you watching, you give ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} an explosive orgasm as she squirts over your hands.`);
    // TODO-QSP: dynamic text: After <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> comes down,...
    scene.text(`After ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} comes down, she smiles as you lick your fingers. "Thank you. I really needed to get off properly. Fucking the guys is good, but they don't get you off in the way you just did!"`);
    scene.actions([
      { label: 'Look around for Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja22.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_first_black_girl']>> moves away and st...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} moves away and starts dancing  again, so you decide to get up and look for Katja.`);
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth2');
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 2, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 21) + 20);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja23\'+iif(katjaQW[\'horny\'] >= 100, \'b\', \'a\')+\'.jpg');
    // TODO-QSP: dynamic text: As you're standing around, <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']...
    scene.text(`As you're standing around, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} comes up to you and smiles.'`);
    // TODO-QSP: "Hey, how are you?" he asks.'
    scene.text('"Good," you reply. "How about you?"');
    scene.text('"Good, good. Had to take a break, but now I\'m ready again," he says, clearly indicating that he wants to have sex with you.');
    scene.text('"You think so?" you grin as you take his cock in your hand while checking to see how your friends are doing.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_fifth3');
    // TODO-QSP: dynamic text: "Come on, why don't you take it in your mouth?" <<$katja_first_orgy_temp['first_...
    scene.text(`"Come on, why don't you take it in your mouth?" ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} begs.`);
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative18.jpg');
    // TODO-QSP: dynamic text: You get down on your knees, take his <<$dick_girth1>> into your mouth, and start...
    scene.text(`You get down on your knees, take his ${((s as any).dick_girth1 ?? 0)} into your mouth, and start sucking it.`);
    // TODO-QSP: dynamic text: After a while, you look around and see that Anushka has <<$katja_first_orgy_temp...
    scene.text(`After a while, you look around and see that Anushka has ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window']}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} on a couch next to you, upside down with their backs against the back of the couch, legs spread, and pussies on full display.`);
    // TODO-QSP: dynamic text: She goes from one to the next, tasting their pussy. <<$katja_first_orgy_temp['fi...
    scene.text(`She goes from one to the next, tasting their pussy. ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} is next to her, stroking his cock as he watches.`);
    // TODO-QSP: dynamic text: He then goes to <<$katja_first_orgy_temp['first_orgy_name_wavey']>> and asks her...
    scene.text(`He then goes to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey']} and asks her something before he pushes his cock into her pussy and starts fucking her.`);
    scene.actions([
      { label: 'Get fucked again', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative19.jpg');
    // TODO-QSP: dynamic text: "Okay, I also need something, so get that cock in my pussy," you say as you remo...
    scene.text(`"Okay, I also need something, so get that cock in my pussy," you say as you remove ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock from your mouth.`);
    scene.text('"Fine. Get on your back then," he answers, and you move to the couch.');
    // TODO-QSP: dynamic text: You lay back and he soon has his <<dick1>> cm cock inside your pussy as he start...
    scene.text(`You lay back and he soon has his ${((s as any).dick1 ?? 0)} cm cock inside your pussy as he starts pounding you hard.`);
    scene.actions([
      { label: 'See what Katja is doing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'orgy');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja24.jpg');
    scene.text('You look around to see how Katja is doing.');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_sixt1');
    scene.actions([
      { label: 'Concentrate on getting fucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy_sex', 'first_orgy_initiative_...
  } },
    ]);
  } },
      { label: 'Concentrate on getting fucked', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued9'] },
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

function enterFirstOrgyInitiativeContinued9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 4, ((s as any).npcID1 ?? 0), 'orgy', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-2), ((s as any).npcID4 ?? 0), 'lesbian', 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative20.jpg');
  // TODO-QSP: dynamic text: You concentrate on <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>>'s coc...
  scene.text(`You concentrate on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}'s cock sliding in and out of your wet pussy before you feel a movement on the couch as somebody sits next to you.`);
  scene.text('You look up and see Anushka sucking on her fingers while her other hand is playing with her clit.');
  scene.text('You decide to help her out and add your hand to her very wet pussy. With your help, she soon has an orgasm, shaking all over as she does.');
  scene.text('At the same time, you can feel your own orgasm coming, and are soon crying out as you cum hard.');
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> can feel and see you cum...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} can feel and see you cumming, so he pulls out of you and leaves you alone.`);
  scene.text('When you finally come down from your orgasm, you get up from the couch.');
  if (((s as any).locArgs?.[1] ?? 0) === 'seen_katja') {
    scene.actions([
      { label: 'Talk with Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja25\'+iif(katjaQW[\'horny\'] + 10*katjaQW[\'orgsam_at_first_orgy_count\'] >= 70, \'b\', \'a\')+\'.jpg');
    qspCall(s, 'katja_nightclub_first_orgy', 'first_orgy_katja_sixt_talk1');
    scene.text('Hearing your friend still having fun, you notice how thirsty you are.');
    scene.actions([
      { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Get a drink', handler: (st: GameState) => {
    // TODO-QSP: gt 'katja_nightclub_first_orgy', 'first_orgy_drink_alone', '...
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_orgy_observe1':
      enterFirstOrgyObserve1(s, scene);
      break;
    case 'first_orgy_observe2':
      enterFirstOrgyObserve2(s, scene);
      break;
    case 'first_orgy_observe3':
      enterFirstOrgyObserve3(s, scene);
      break;
    case 'first_orgy_observe4':
      enterFirstOrgyObserve4(s, scene);
      break;
    case 'first_orgy_observe5':
      enterFirstOrgyObserve5(s, scene);
      break;
    case 'first_orgy_observe_dance':
      enterFirstOrgyObserveDance(s, scene);
      break;
    case 'first_orgy_observe6':
      enterFirstOrgyObserve6(s, scene);
      break;
    case 'first_orgy_observe7':
      enterFirstOrgyObserve7(s, scene);
      break;
    case 'first_orgy_observe8':
      enterFirstOrgyObserve8(s, scene);
      break;
    case 'first_orgy_observe_dance2':
      enterFirstOrgyObserveDance2(s, scene);
      break;
    case 'first_orgy_join2':
      enterFirstOrgyJoin2(s, scene);
      break;
    case 'first_orgy_join3':
      enterFirstOrgyJoin3(s, scene);
      break;
    case 'first_orgy_join4':
      enterFirstOrgyJoin4(s, scene);
      break;
    case 'first_orgy_join5':
      enterFirstOrgyJoin5(s, scene);
      break;
    case 'first_orgy_join6':
      enterFirstOrgyJoin6(s, scene);
      break;
    case 'first_orgy_join_dance':
      enterFirstOrgyJoinDance(s, scene);
      break;
    case 'first_orgy_join7':
      enterFirstOrgyJoin7(s, scene);
      break;
    case 'first_orgy_join8':
      enterFirstOrgyJoin8(s, scene);
      break;
    case 'first_orgy_join9':
      enterFirstOrgyJoin9(s, scene);
      break;
    case 'first_orgy_join10':
      enterFirstOrgyJoin10(s, scene);
      break;
    case 'first_orgy_player_takes_initiative':
      enterFirstOrgyPlayerTakesInitiative(s, scene);
      break;
    case 'first_orgy_initiative_continued1':
      enterFirstOrgyInitiativeContinued1(s, scene);
      break;
    case 'first_orgy_initiative_continued2':
      enterFirstOrgyInitiativeContinued2(s, scene);
      break;
    case 'first_orgy_initiative_continued3':
      enterFirstOrgyInitiativeContinued3(s, scene);
      break;
    case 'first_orgy_initiative_continued4':
      enterFirstOrgyInitiativeContinued4(s, scene);
      break;
    case 'first_orgy_initiative_continued5':
      enterFirstOrgyInitiativeContinued5(s, scene);
      break;
    case 'first_orgy_initiative_continued_dance':
      enterFirstOrgyInitiativeContinuedDance(s, scene);
      break;
    case 'first_orgy_initiative_continued6':
      enterFirstOrgyInitiativeContinued6(s, scene);
      break;
    case 'first_orgy_initiative_continued7':
      enterFirstOrgyInitiativeContinued7(s, scene);
      break;
    case 'first_orgy_initiative_continued8':
      enterFirstOrgyInitiativeContinued8(s, scene);
      break;
    case 'first_orgy_initiative_continued_dance2':
      enterFirstOrgyInitiativeContinuedDance2(s, scene);
      break;
    case 'first_orgy_initiative_continued9':
      enterFirstOrgyInitiativeContinued9(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_nightclub_first_orgy_sex: LocationDef = {
  name: 'katja_nightclub_first_orgy_sex',
  title: 'You continue to dance while observing what\'s happening aroun',
  region: 'other',
  enter: enter,
};
