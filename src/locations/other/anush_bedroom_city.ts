import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAnushroom(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 1;
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom_city', 'anushroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom.jpg');
  scene.text('The room is clean, even more so than her room back in Pavlovsk, it reminds you a lot of her old room, a few new posters, slightly bigger and looks a little more adult but otherwise pretty much the same. The walls are covered with pictures and posters of <a href="exec:gt \'anush_bedroom_city\',\'the_pretty_reckless\'">bands</a> or famous models, girls and guys, while the room is skillfully decorated with various strings of coloured lights. In the center of the room, beneath the window, is a <a href="exec:gt \'anush_bedroom_city\',\'bed\'">bed</a> with a small <a href="exec:gt \'anush_bedroom_city\',\'night_stand\'">nightstand</a> beside it.');
  scene.text('Against the opposite wall are a small computer desk, a <a href="exec:gt \'anush_bedroom_city\',\'computer\'">laptop</a> and a chair. Next to the desk is a <a href="exec:gt \'anush_bedroom_city\',\'nushdresser\'">dresser</a> with a decent sized flatscreen TV sitting on top of it. On the other side of the desk is a bookshelf with a relatively large collection of books. Hanging on the wall next to the shelves is an <a href="exec:gt \'anush_bedroom_city\',\'guitar\'">acoustic guitar</a> with an electric guitar right beside it. A skateboard is also leaning against one of the other walls next to the <a href="exec:gt \'anush_bedroom_city\',\'nushcloset\'">closet door</a>, along with some rollerblades in the corner.');
  if (((s as any).locat ?? 0)?.['A144'] === 2) {
    if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 1) {
      (s as any).anushkaCityQW['first_visit'] = 2;
    }
    scene.text('<br>Anushka is lying on the bed, a mysterious smirk playing around her lips as she looks at you.');
    scene.actions([
      { label: 'Talk to Anushka', handler: (st: GameState) => {
    // TODO-QSP: locat['A144'] = 2
  }, goto: ['anushkachat_city', 'chat'] },
    ]);
  }
  scene.actions([
    { label: 'Leave Anushka\'s room', goto: ['anushapt_city', 'hallway'] },
  ]);
  scene.build();
}

function enterThePrettyReckless(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom_city', 'the_pretty_reckless');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/the_pretty_reckless_poster.jpg');
  scene.text('You look over the bands\' posters; most posters are of bands with a few models, and the only band with more than one poster is The Pretty Reckless. The poster that seems to be most prominently displayed in her room is one of the lead singers for The Pretty Reckless, lying naked on a stone coffin. The poster right next to it is similar, but without the band name and <a href="exec:gt \'anush_bedroom_city\',\'taylor_momsen\'">Taylor\'s</a> breasts on full display.');
  scene.actions([
    { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
  ]);
  scene.build();
}

function enterTaylorMomsen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom_city', 'taylor_momsen');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/taylor_poster.jpg');
  scene.text('There\'s a crease in the middle of the poster like it came folded up inside something. It looks like Anushka made a lot of effort to get rid of the crease, but you can still see it. Perhaps she really loves the band or has a crush on the lead singer? Knowing Anushka, it\'s likely both.');
  scene.actions([
    { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
  ]);
  scene.build();
}

function enterNushdresser(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom_city', 'nushdresser');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushdresser.jpg');
  if (((s as any).locat ?? 0)?.['A144'] === 2) {
    scene.text('One drawer seems to be filled entirely with makeup. You see dozens of lipsticks, blushes, eyeliners, eye shadows and foundations inside it. Most of it matches her more alternative emo look she typically sports. Still, you spy a few more natural and mainstream colours among them. A couple of the other drawers contain folded pants, and one seems to be nothing but socks. Another one is stuffed full of bras, while the final one seems to be her panty drawer, which also contains several of her dildos. You notice her watching you snoop and close the drawers.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } else {
    scene.text('One drawer seems to be filled entirely with makeup. You see dozens of lipsticks, blushes, eyeliners, eye shadows and foundations inside. Most of it matches her more alternative emo look she typically sports. Still, you spy a few more natural and mainstream colors among them. A couple of the other drawers contain folded pants, and one seems to be nothing but socks. Another is stuffed full of bras. The final drawer appears to be her panty drawer, which also contains several of her dildos. With no one around, you do a little digging and find a little box. Inside it is a baggy of white power, several small bags of different kinds of pills, a baggy of pot and some rolling papers.');
    scene.text('You also find some of her University papers, she is getting well above average grades in her university classes it seems.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  }
  scene.build();
}

function enterNushcloset(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom_city', 'nushcloset');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom.jpg');
  if (((s as any).locat ?? 0)?.['A144'] === 2) {
    scene.text('The closet is crammed with a staggering amount of clothes. There are boots and shoes stuffed everywhere on the floor and on the top shelf. Most of the clothes fit her alt emo/punk look she typically sports, but you spot a few more mainstream pieces. There are even a few sun dresses and the like hanging from the rod within. On the inside of the closet door, you see a full-length mirror. You glance over to see Anushka watching you. She doesn\'t seem to mind that you are snooping in her closet.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Ask to try on some clothes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy1.jpg');
    if (((s as any).pcs_bmi ?? 0) < 25) {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      if (((s as any).pcs_bmi ?? 0) < 16) {
        scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
        // TODO-QSP: dynamic text: Anushka smiles and nods. "Sure, let's do it." She gets up to join you at the clo...
        scene.text(`Anushka smiles and nods. "Sure, let's do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Unfortunately, her clothes don't fit well at all. In fact, they hang off your body, Anushka is a petite girl, but you're so skinny that even her clothes just hang off you. "Jesus ${((s as any).pcs_nickname ?? 0)}, you need to eat something! Do you have some sort of eating disorder or something?" she asks as you check yourself out in the mirror on the door.`);
        scene.text('You shake your head, but do you? You know Anushka is petite, some might say on the skinny side, yet her clothes are too big. Seeing your reflection in the mirror while standing side by side with her, your exceptionally skinny build really stands out. She has curves in all the right places while all you have are bones protruding from under your skin. You both quickly give up on trying on her clothes since they don\'t look good on you.');
        scene.actions([
          { label: 'Stop trying on clothes', goto: ['anush_bedroom_city', 'anushroom'] },
        ]);
      } else {
        scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
        scene.text('Anushka smiles and nods. "Sure, let\'s do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Her clothes don\'t fit perfectly, just enough to give you an idea of what you might look like if you bought similar clothes in your size.');
        scene.text('"A little loose, and it doesn\'t help you\'re taller than me. You might want to add a couple of kilos; guys like girls with a little more curves," she says as you check yourself out in the mirror on the door. You look at your reflection next to hers, and she has a point. She has curves in all the right places while you look a little boyish standing next to her due to your skinny build. It\'s still fun trying on new clothes with her.');
        scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
        scene.text('Anushka smiles and nods. "Sure, let\'s do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Her clothes don\'t fit perfectly since you\'re taller than her, but other than that, they fit you pretty well and look good on you.');
        // TODO-QSP: dynamic text: As you check yourself out in the mirror on the door, she steps up next to you, s...
        scene.text(`As you check yourself out in the mirror on the door, she steps up next to you, showing both of your reflections. "Looking good, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.actions([
          { label: 'Stop trying on clothes', goto: ['anush_bedroom_city', 'anushroom'] },
          { label: 'Stop trying on clothes', goto: ['anush_bedroom_city', 'anushroom'] },
        ]);
      }
    } else {
      if (((s as any).pcs_mood ?? 0) > 10) {
        qspCall(s, 'mood', 'lower', 'small');
      }
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.text('"Can we try on some of your clothes and see how we look in them?" you ask her.');
      scene.text('Anushka hesitates as she looks you over, then smiles faintly. "I\'m not sure I have anything that will fit you… I might have something you can squeeze into." You can tell by her tone of voice and body language she\'s trying to be kind, but the message is clear, despite her not saying it.');
      scene.text('She gets up and joins you at the closet. She starts pulling out different outfits, most of which she discards. Finally, she pulls out a couple of clothes, and you notice all of them are baggy style clothes you\'ve never seen her wearing. You take them and try to put them on, but unfortunately, even her most oversized clothes are too small for you. You can squeeze into some of them, but you struggle to zip them up, and you can see your skin rolling over the side of the clothes in spots that are just too tight for you.');
      scene.text('When you try on a pair of cargo shorts, one of the buttons pops off and bounces across the floor, causing you to blush heavily. "Sorry, I… I shouldn\'t have tried to wear these. I can buy you a new pair or get this button fixed."');
      // TODO-QSP: dynamic text: She shakes her head and giggles slightly. "Don't worry about it. I didn't really...
      scene.text(`She shakes her head and giggles slightly. "Don't worry about it. I didn't really like those shorts anyways." You sigh at the fact you're just too big to wear her clothes and put your own clothes back on. She glances at you while grinning. "Maybe you should lay off the sweets, ${((s as any).pcs_nickname ?? 0)}," she says teasingly while poking you in the side.`);
      scene.text('"Hey, just because I\'m not as skinny as a rail doesn\'t mean the boys don\'t come running. I got myself a nice bubble butt, unlike your flat ass!" you reply, teasing her back for being skinny. The two of you laugh and put her clothes back away as you talk about where she gets her clothes from.');
      if (((s as any).pcs_mood ?? 0) > 10) {
        qspCall(s, 'mood', 'lower', 'medium');
      }
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.text('"Can we try on some of your clothes and see how we look in them?" you ask her.');
      scene.text('Anushka looks like a deer in headlights. "Uhh…" You get the feeling she doesn\'t know what or how to say something, and she finally smiles slightly. "Sorry girl, but I don\'t think even my largest baggy clothes will fit your fat ass!" she says in a teasing tone, but her words still sting.');
      scene.text('She gets up and joins you at the closet. She starts pulling out different outfits, almost all of which she discards. Finally, she pulls out a summer dress you\'ve never seen her in, likely because it looks far too big for her. "Here, you can try this, but I don\'t think it\'ll fit. That thing hangs off me like a tent."');
      scene.text('You take the dress and change out of your clothes. You try and get the dress on, but it won\'t go over your breasts. After a bit of struggling, it\'s obvious the thing isn\'t going to fit, no matter how badly you want to try it on.');
      // TODO-QSP: dynamic text: You sigh at the fact you're just too big to wear her clothes and put your own cl...
      scene.text(`You sigh at the fact you're just too big to wear her clothes and put your own clothes back on. She glances at you while grinning. "Maybe you should try eating some veggies now and again and lay off the sweets, ${((s as any).pcs_nickname ?? 0)}. The veggies won't kill you, I promise," she says teasingly.`);
      scene.text('"Hey, just because I\'m not as skinny as a rail…" You trail off and force a smile; you know she\'s not trying to be mean, but her words still hurt. Instead of trying on her clothes, you end up talking about where she gets them.');
      scene.actions([
        { label: 'Stop trying on clothes', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Stop trying on clothes', goto: ['anush_bedroom_city', 'anushroom'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('The closet is crammed with a staggering amount of clothes. There are boots and shoes stuffed everywhere on the floor and on the top shelf. Most of the clothes fit her alt emo/punk look she typically sports, but you spot a few more mainstream pieces. On the inside of the closet door, you see a full-length mirror.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Try on some clothes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksimshow.jpg');
    if (((s as any).pcs_bmi ?? 0) < 16) {
      if (((s as any).pcs_mood ?? 0) > 10) {
        qspCall(s, 'mood', 'lower', 'small');
      }
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('You start trying on some of Anushka\'s clothes, but quickly realize that you\'re way too skinny to wear them. She\'s a pretty petite girl and her clothes just hang off you. You know Anushka is beautiful, but looking at yourself in the mirror with her clothes hanging off you, you wonder if you\'re too skinny. You sigh and start putting the clothes back where you found them.');
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.text('You spend the next half hour trying on a variety of Anushka\'s clothes. Most of them fit well enough to give you a good idea of what you might look like if you bought similar clothes and you have a lot of fun trying them on, although you do wonder how she can afford them. Does the band really make this much money? Once you\'re done, you start putting the clothes back where you found them.');
      if (((s as any).pcs_bmi ?? 0) < 25) {
        qspCall(s, 'mood', 'raise', 'tiny');
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        scene.text('You spend the next half hour trying on a variety of Anushka\'s clothes. Most of them fit you pretty well and you have a lot of fun trying them on, although you do wonder how she can afford them. Does the band really make this much money? Once you\'re done, you start putting the clothes back where you found them.');
      } else {
        if (((s as any).pcs_mood ?? 0) > 10) {
          qspCall(s, 'mood', 'lower', 'small');
        }
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.text('You look through her clothes and attempt to try on several outfits, but even her largest, loosest clothes are just too small for you to wear. You try on a pair of loose cargo shorts that you manage to get over your hips, but as you\'re trying to button them up, one of the buttons pops loose and goes rolling across the floor. You sigh, quickly take them off, and start putting the clothes back where you found them.');
        if (((s as any).pcs_mood ?? 0) > 10) {
          qspCall(s, 'mood', 'lower', 'medium');
        }
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.text('You look through her clothes and attempt to try on several outfits, but even her largest, loosest clothes are just too small for you to wear. You try on a pair of loose cargo shorts, but you can\'t even get them past your knees. You sigh and start putting the clothes back where you found them.');
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Find something else to do', goto: ['anush_bedroom_city', 'anushroom'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'anushroom':
      enterAnushroom(s, scene);
      break;
    case 'the_pretty_reckless':
      enterThePrettyReckless(s, scene);
      break;
    case 'taylor_momsen':
      enterTaylorMomsen(s, scene);
      break;
    case 'nushdresser':
      enterNushdresser(s, scene);
      break;
    case 'nushcloset':
      enterNushcloset(s, scene);
      break;
    default:
      enterAnushroom(s, scene);
      break;
  }
}

export const anush_bedroom_city: LocationDef = {
  name: 'anush_bedroom_city',
  title: 'Anushka\'s Room',
  region: 'other',
  locclass: 'bedr',
  enter: enter,
};
