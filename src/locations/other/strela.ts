import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/strela1.jpg');
  scene.text('When you approach Fedor, he guides you to the group that just arrived at the school. You look around the group and recognize Vitek, Dan and Vasily. Most of the others have criminal tattoos and look quite intimidating; you recognize the fat older man to be Vadim Bely, a local crime lord, who motions for Fedor to come closer to him.');
  scene.text('"So… You\'re Fedor Kozlov? My dear friend Viktor here tells me you were very disrespectful to him." He nods over at Vitek. "You can\'t just go stealing other people\'s girls, Fedor. That\'s not how the world works."');
  scene.text('The guys circle in around the two of you, and even though no one pays you any attention, you feel very uncomfortable being here.');
  scene.text('Vadim continues. "Nevertheless, that\'s not why I\'m here. I know how girls can be. They change their mind all the time. You can sort that out amongst yourselves, but it gets personal when you\'re rude to Vitek. No one treats a friend of mine like that. Why didn\'t you show him some respect, Fedor?"');
  scene.text('Fedor is thoroughly intimidated. "But… They started it…" he mutters.');
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    (st as any).kotovVSkozlov = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    // TODO-QSP: dynamic text: Vadim nods. "So you don''t dispute it. Well kid, you''ll learn that if you''re r...
    scene.text('Vadim nods. "So you don\'t dispute it. Well kid, you\'ll learn that if you\'re rude to the wrong people, you get trouble. I\'ll give you one chance to pay for your mistakes. 30000₽, tomorrow. If you don\'t pay up, you lose fingers, one for every day you\'re late. Understood?"');
    scene.text('Fedor\'s face pales and tears form in his eyes. Vadim Bely is quite notorious in your region, and this wouldn\'t be the first time he\'s actually taken fingers from someone for missing payments.');
    scene.text('"Please sir!" he exclaims. "I don\'t have that kind of money! I\'m just a kid going to school!"');
    // TODO-QSP: dynamic text: Vadim shrugs. "You should''ve thought of that before you were disrespectful, ''k...
    scene.text('Vadim shrugs. "You should\'ve thought of that before you were disrespectful, \'kid going to school\'. That\'s really not my problem. 30000₽, tomorrow."');
    scene.text('At this point, a number of other students have noticed the commotion and wandered a little closer to get a better look at what\'s going on.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('Fedor is panicking now. "Sir, please!" he begs. "I can\'t get that amount of money!"');
    // TODO-QSP: dynamic text: Vasily grins. "Come on guys, the only way this kid could get ' + $func('money', ...
    scene.text('Vasily grins. "Come on guys, the only way this kid could get 30000₽ together is if his parents sold their house. Let\'s cut him a deal." He waits a moment to make sure he has everyone\'s attention before he continues. "How about this? He sucks my dick. Right here, right now. If he does, we\'re even."');
    scene.text('Vadim smirks and shakes his head as he looks at Dan and Vitek. "This guy… Unbelievable! Still, it\'s up to you. If you\'re okay with it, then I am too."');
    scene.text('Vitek shrugs. "I don\'t care."');
    // TODO-QSP: dynamic text: "Fine by me too," Dan adds. "Your call, Fedor. ' + $func('money', 'string_price'...
    scene.text('"Fine by me too," Dan adds. "Your call, Fedor. 30000₽ tomorrow or you suck Shulga\'s dick right now."');
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/events/dandick.jpg');
    scene.text('Vasily unbuttons his pants and pulls his dick out. A number of the students that stayed to watch keep doing so while a few leave, either in fear or disgust.');
    scene.text('Fedor face pales again. "But… I\'m not a faggot…" he stutters.');
    scene.text('"No one says you\'re a faggot, you\'re being offered a way out," Vasily says in a fake voice, as if trying to cheer Fedor up. "Either you suck my dick, go home and tell your parents to sell their house before tomorrow, or start losing fingers. Those are your only options. Do you even realize how much trouble you\'re in?"');
    scene.text('Fedor drops to his knees as he breaks down and cries. "Please! I don\'t have that kind of money… Vitek, I\'m sorry… Please…"');
    scene.text('Vadim looks at him indifferently. "This is taking too long! I have other places to be!"');
    scene.text('Vasily still uses his mocking supportive voice as he unbuttons his pants. "Wipe the snot from your face and make a decision. You have one minute. Don\'t be foolish. You can erase your debt within a few minutes."');
    scene.actions([
      { label: 'Pay the money for Fedor', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 30000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 30000, 'cash');
      (st as any).strelaQW = (-1);
      qspCall(st, 'npc_relationship', 'modify', 'A9', '-20');
      (st as any).FedorLuv = 100;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text(`<center><b>${'Vadim Bely'}</b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
      scene.text('You can\'t watch this anymore. "I\'ll give you the money!" you blurt out.');
      scene.text('Most of them seem to have forgotten you were even here as Vadim looks at you in confusion. "What? Why?"');
      scene.text('"This is just wrong! I can\'t let him do this to clear his debt," you say, disgusted by the proposition.');
      scene.text('Vadim sighs in exasperation. "Women… They just don\'t understand how the world works. Fine! Give me the money and we\'re even."');
      scene.text('He counts the money when you hand it over and gives you a pleased nod. He then turns to his henchmen. "It\'s all there. Alright guys, we\'re done here. Let\'s go."');
      scene.text('You watch the cars drive off before turning back to the guys. Vitek is clearly angry that his plan to get back at Fedor failed, but there\'s nothing he can do about it without getting on Vadim\'s bad side himself.');
      scene.text('He angrily turns to Dan and Vasily. "Come on guys, let\'s get out of here. I need a beer."');
      // TODO-QSP: dynamic text: As they leave, Fedor comes over to you. "Thank you, <<$pcs_firstname>>, thank yo...
      scene.text(`As they leave, Fedor comes over to you. "Thank you, ${((st as any).pcs_firstname || '')}, thank you! Thank you so much, you saved me! I'll pay you back, I promise! I can't pay it all at once, but I'll try to save up."`);
      scene.text('You assure him that\'s not necessary and get ready to leave the school grounds.');
      scene.actions([
        { label: 'Leave the school courtyard', goto: ['pav_residential', ''] },
      ]);
    }
  } },
      { label: 'Don\'t interfere', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A5', 50);
    ((st as any).npc_hotcat = (st as any).npc_hotcat ?? {})['A5'] = 6;
    ((st as any).npc_grupTipe = (st as any).npc_grupTipe ?? {})['A5'] = 5;
    (st as any).fedorKozlovQW = (-10);
    (st as any).FedorKozHome = 0;
    (st as any).fedormasha = 1;
    (st as any).strelaQW = (-2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/sex/vasfed1.jpg');
    // TODO-QSP: iif(func('money', 'can_afford', 30000), 'Even though you have enough money to pay off Fedor''s debt,...
    scene.text('Vasily laughs. "Careful. If I feel any teeth, I\'ll knock them out."');
    scene.text('One of the criminals who hadn\'t said anything so far shakes his head. "Fucking Vasily… What a nutbag! Never a dull moment with that guy."');
    scene.text('Vitek turns his head away in disgust while most of the students other than some of the gopniks have left by now. Dan pulls out his phone and starts filming, as do a few others. A few of the girls shout tips to Fedor on how to suck better.');
    scene.text('Vadim, observing all this with an amused face, grins and turns to his guys. "Alright lads, let\'s go. The boys can play with their toy in peace."');
    scene.text('Seconds later, the cars drive off while Fedor is still sucking Vasily\'s dick. Once Vadim has left, the students left approach closer. Some laugh, while others jeer or call Fedor a fag.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/sex/vasfed2.jpg');
    scene.text('Apparently not satisfied with how good a job Fedor is doing, Vasily grabs him by the back of the head and starts fucking his mouth, shoving his dick down Fedor\'s throat as he does. Several minutes go by before Vasily groans and begins to cum in Fedor\'s mouth. "Swallow it all, faggot. Don\'t miss a drop."');
    scene.text('Fedor does as he\'s told and keeps sucking Vasily\'s cock, swallowing his cum until Vasily finishes and pulls his dick out. "You suck cock better than most bitches, Fedor. You been sucking Ivan off all this time?" he asks with a laugh.');
    scene.text('Fedor moves to get up, wiping his mouth with the back of his hand as Vasily smirks. "So, cocksucker… What should we call you now? Fedor is a man\'s name, and you\'re no longer a man. You\'re a bitch. Your new name will be Masha. That suits a bitch like you much better. Ain\'t that right, cocksucker?"');
    scene.text('Too tired to fight, he just nods. Vasily continues, "We\'ll come get you when we want more. That\'s your place now, Masha. Understood? And knock it off with the deep voice. Bitches don\'t have deep voices."');
    scene.text('Fedor nods again, his resolve broken before Vasily spits in his face. "What\'s your name, bitch?"');
    scene.text('"Masha… My name is Masha…" Fedor mumbles in reply.');
    scene.text('With that, everyone starts wandering off, Vitek, Vasily and Dan go to their usual spot in the park to have some beers. Fedor sits on the ground by himself, trying to take it all in. He knows his life won\'t be the same after what happened today.');
    qspCall(st, 'arousal', 'voyeur_sex', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the school courtyard', goto: ['pav_residential', ''] },
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

export const strela: LocationDef = {
  name: 'strela',
  region: 'other',
  description: ['When you approach Fedor, he guides you to the group that just arrived at the school. You look around the group and recognize Vitek, Dan and Vasily. Most of the others have criminal tattoos and look quite intimidating; you recognize the fat older man to be Vadim Bely, a local crime lord, who motions for Fedor to come closer to him.'],
  enter: enter,
};
