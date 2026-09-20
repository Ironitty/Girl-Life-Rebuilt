import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAnushroom(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  (s as any).music_loop = 1;
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'anushroom');
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom.jpg');
  scene.text('The room is surprisingly clean, more so than any other room in the apartment. The walls are covered with pictures and posters of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027the_pretty_reckless/u0027); return false;">bands</a> or famous models, girls and guys, while the room is skillfully decorated with various strings of coloured lights. In the center of the room, beneath the window, is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027bed/u0027); return false;">bed</a> with a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027night_stand/u0027); return false;">nightstand</a> beside it.');
  scene.text('Against the opposite wall are a small computer desk, a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027computer/u0027); return false;">laptop</a> and a chair. Next to the desk is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027nushdresser/u0027); return false;">dresser</a> with a decent sized flatscreen TV sitting on top of it. On the other side of the desk is a bookshelf with a relatively large collection of books. Hanging on the wall next to the shelves is an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027guitar/u0027); return false;">acoustic guitar</a> with an electric guitar right beside it. A skateboard is also leaning against one of the other walls next to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027nushcloset/u0027); return false;">closet door</a>, along with some rollerblades in the corner.');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    scene.text('<br>Anushka is lying on the bed, a mysterious smirk playing around her lips as she looks at you.');
    scene.actions([
      { label: 'Let\'s check on your brother', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 3;
  }, goto: ['anushaptbr', 'brotherroom'] },
      { label: 'Talk to Anushka', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anushkachat', 'chat'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Anushka\'s room', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

function enterThePrettyReckless(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'the_pretty_reckless');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/the_pretty_reckless_poster.jpg');
  scene.text('You look over the bands\' posters; most posters are of bands with a few models, and the only band with more than one poster is The Pretty Reckless. The poster that seems to be most prominently displayed in her room is one of the lead singers for The Pretty Reckless, lying naked on a stone coffin. The poster right next to it is similar, but without the band name and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anush_bedroom/u0027, /u0027taylor_momsen/u0027); return false;">Taylor\'s</a> breasts on full display.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
  ]);
  scene.build();
}

function enterTaylorMomsen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'taylor_momsen');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/taylor_poster.jpg');
  scene.text('There\'s a crease in the middle of the poster like it came folded up inside something. It looks like Anushka made a lot of effort to get rid of the crease, but you can still see it. Perhaps she really loves the band or has a crush on the lead singer? Knowing Anushka, it\'s likely both.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
  ]);
  scene.build();
}

function enterNushdresser(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'nushdresser');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushdresser.jpg');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    scene.text('One drawer seems to be filled entirely with makeup. You see dozens of lipsticks, blushes, eyeliners, eye shadows and foundations inside it. Most of it matches her more alternative emo look she typically sports. Still, you spy a few more natural and mainstream colours among them. A couple of the other drawers contain folded pants, and one seems to be nothing but socks. Another one is stuffed full of bras, while the final one seems to be her panty drawer, which also contains several of her dildos. You notice her watching you snoop and close the drawers.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } else {
    scene.text('One drawer seems to be filled entirely with makeup. You see dozens of lipsticks, blushes, eyeliners, eye shadows and foundations inside. Most of it matches her more alternative emo look she typically sports. Still, you spy a few more natural and mainstream colours among them. A couple of the other drawers contain folded pants, and one seems to be nothing but socks. Another is stuffed full of bras. The final drawer appears to be her panty drawer, which also contains several of her dildos. With no one around, you do a little digging and find a little box. Inside it is a baggy of white power, several small bags of different kinds of pills, a baggy of pot and some rolling papers.');
    scene.text('You also find some papers shoved along the side of the drawer. They appear to be some of her recent tests and homework assignments. You\'re surprised to discover that she\'s getting good grades; these are easily good enough for her to attend most universities. Despite fucking around during class, she takes her coursework seriously.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNushcloset(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'nushcloset');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom.jpg');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    scene.text('The closet is crammed with a staggering amount of clothes. There are boots and shoes stuffed everywhere on the floor and on the top shelf. Most of the clothes fit her alt emo/punk look she typically sports, but you spot a few more mainstream pieces. There are even a few sun dresses and the like hanging from the rod within. On the inside of the closet door, you see a full-length mirror. You glance over to see Anushka watching you. She doesn\'t seem to mind that you are snooping in her closet.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Ask to try on some clothes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy1.jpg');
    if (((st as any).pcs_bmi ?? 0) < 25) {
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      if (((st as any).pcs_bmi ?? 0) < 16) {
        scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
        // TODO-QSP: dynamic text: Anushka smiles and nods. "Sure, let''s do it." She gets up to join you at the cl...
        scene.text(`Anushka smiles and nods. "Sure, let's do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Unfortunately, her clothes don't fit well at all. In fact, they hang off your body, Anushka is a petite girl, but you're so skinny that even her clothes just hang off you. "Jesus ${((st as any).pcs_nickname || '')}, you need to eat something! Do you have some sort of eating disorder or something?" she asks as you check yourself out in the mirror on the door.`);
        scene.text('You shake your head, but do you? You know Anushka is petite, some might say on the skinny side, yet her clothes are too big. Seeing your reflection in the mirror while standing side by side with her, your exceptionally skinny build really stands out. She has curves in all the right places while all you have are bones protruding from under your skin. You both quickly give up on trying on her clothes since they don\'t look good on you.');
        scene.actions([
          { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      } else {
        if (((st as any).pcs_bmi ?? 0) < 19) {
          scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
          scene.text('Anushka smiles and nods. "Sure, let\'s do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Her clothes don\'t fit perfectly, just enough to give you an idea of what you might look like if you bought similar clothes in your size.');
          scene.text('"A little loose, and it doesn\'t help you\'re taller than me. You might want to add a couple of kilos; guys like girls with a little more curves," she says as you check yourself out in the mirror on the door. You look at your reflection next to hers, and she has a point. She has curves in all the right places while you look a little boyish standing next to her due to your skinny build. It\'s still fun trying on new clothes with her.');
          scene.actions([
            { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
            { label: 'Try on more clothes', goto: ['anush_bedroom', 'more_clothes'] },
          ]);
        } else {
          scene.text('"Wow, you have so many outfits. Can I try some on?" you ask her.');
          scene.text('Anushka smiles and nods. "Sure, let\'s do it." She gets up to join you at the closet and pulls out different outfits. She picks the ones that she apparently thinks will work best for you. Her clothes don\'t fit perfectly since you\'re taller than her, but other than that, they fit you pretty well and look good on you.');
          // TODO-QSP: dynamic text: As you check yourself out in the mirror on the door, she steps up next to you, s...
          scene.text(`As you check yourself out in the mirror on the door, she steps up next to you, showing both of your reflections. "Looking good, ${((st as any).pcs_nickname || '')}."`);
          scene.actions([
            { label: 'Try on more clothes', goto: ['anush_bedroom', 'more_clothes'] },
          ]);
        }
      }
    } else {
      if (((st as any).pcs_bmi ?? 0) < 30) {
        if (((st as any).pcs_mood ?? 0) > 10) {
          qspCall(st, 'mood', 'lower', 'small');
        }
        (st as any).minut = ((st as any).minut ?? 0) + 10;
        qspCall(st, 'stat', '');
        scene.text('"Can we try on some of your clothes and see how we look in them?" you ask her.');
        scene.text('Anushka hesitates as she looks you over, then smiles faintly. "I\'m not sure I have anything that will fit you… I might have something you can squeeze into." You can tell by her tone of voice and body language she\'s trying to be kind, but the message is clear, despite her not saying it.');
        scene.text('She gets up and joins you at the closet. She starts pulling out different outfits, most of which she discards. Finally, she pulls out a couple of clothes, and you notice all of them are baggy style clothes you\'ve never seen her wearing. You take them and try to put them on, but unfortunately, even her most oversized clothes are too small for you. You can squeeze into some of them, but you struggle to zip them up, and you can see your skin rolling over the side of the clothes in spots that are just too tight for you.');
        scene.text('When you try on a pair of cargo shorts, one of the buttons pops off and bounces across the floor, causing you to blush heavily. "Sorry, I… I shouldn\'t have tried to wear these. I can buy you a new pair or get this button fixed."');
        // TODO-QSP: dynamic text: She shakes her head and giggles slightly. "Don''t worry about it. I didn''t real...
        scene.text(`She shakes her head and giggles slightly. "Don't worry about it. I didn't really like those shorts anyways." You sigh at the fact you're just too big to wear her clothes and put your own clothes back on. She glances at you while grinning. "Maybe you should lay off the sweets, ${((st as any).pcs_nickname || '')}," she says teasingly while poking you in the side.`);
        scene.text('"Hey, just because I\'m not as skinny as a rail doesn\'t mean the boys don\'t come running. I got myself a nice bubble butt, unlike your flat ass!" you reply, teasing her back for being skinny. The two of you laugh and put her clothes back away as you talk about where she gets her clothes from.');
        scene.actions([
          { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      } else {
        if (((st as any).pcs_mood ?? 0) > 10) {
          qspCall(st, 'mood', 'lower', 'medium');
        }
        (st as any).minut = ((st as any).minut ?? 0) + 10;
        qspCall(st, 'stat', '');
        scene.text('"Can we try on some of your clothes and see how we look in them?" you ask her.');
        scene.text('Anushka looks like a deer in headlights. "Uhh…" You get the feeling she doesn\'t know what or how to say something, and she finally smiles slightly. "Sorry girl, but I don\'t think even my largest baggy clothes will fit your fat ass!" she says in a teasing tone, but her words still sting.');
        scene.text('She gets up and joins you at the closet. She starts pulling out different outfits, almost all of which she discards. Finally, she pulls out a summer dress you\'ve never seen her in, likely because it looks far too big for her. "Here, you can try this, but I don\'t think it\'ll fit. That thing hangs off me like a tent."');
        scene.text('You take the dress and change out of your clothes. You try and get the dress on, but it won\'t go over your breasts. After a bit of struggling, it\'s obvious the thing isn\'t going to fit, no matter how badly you want to try it on.');
        // TODO-QSP: dynamic text: You sigh at the fact you''re just too big to wear her clothes and put your own c...
        scene.text(`You sigh at the fact you're just too big to wear her clothes and put your own clothes back on. She glances at you while grinning. "Maybe you should try eating some veggies now and again and lay off the sweets, ${((st as any).pcs_nickname || '')}. The veggies won't kill you, I promise," she says teasingly.`);
        scene.text('"Hey, just because I\'m not as skinny as a rail…" You trail off and force a smile; you know she\'s not trying to be mean, but her words still hurt. Instead of trying on her clothes, you end up talking about where she gets them.');
        scene.actions([
          { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      }
    }
  } },
    ]);
  } else {
    scene.text('The closet is crammed with a staggering amount of clothes. There are boots and shoes stuffed everywhere on the floor and on the top shelf. Most of the clothes fit her alt emo/punk look she typically sports, but you spot a few more mainstream pieces. On the inside of the closet door, you see a full-length mirror.');
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Try on some clothes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksimshow.jpg');
    if (((st as any).pcs_bmi ?? 0) < 16) {
      if (((st as any).pcs_mood ?? 0) > 10) {
        qspCall(st, 'mood', 'lower', 'small');
      }
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      scene.text('You start trying on some of Anushka\'s clothes, but quickly realize that you\'re way too skinny to wear them. She\'s a pretty petite girl and her clothes just hang off you. You know Anushka is beautiful, but looking at yourself in the mirror with her clothes hanging off you, you wonder if you\'re too skinny. You sigh and start putting the clothes back where you found them.');
    } else {
      if (((st as any).pcs_bmi ?? 0) < 19) {
        qspCall(st, 'mood', 'raise', 'tiny');
        (st as any).minut = ((st as any).minut ?? 0) + 30;
        scene.text('You spend the next half hour trying on a variety of Anushka\'s clothes. Most of them fit well enough to give you a good idea of what you might look like if you bought similar clothes and you have a lot of fun trying them on, although you do wonder how she can afford them. Does the band really make this much money? Once you\'re done, you start putting the clothes back where you found them.');
      } else {
        if (((st as any).pcs_bmi ?? 0) < 25) {
          qspCall(st, 'mood', 'raise', 'tiny');
          (st as any).minut = ((st as any).minut ?? 0) + 30;
          scene.text('You spend the next half hour trying on a variety of Anushka\'s clothes. Most of them fit you pretty well and you have a lot of fun trying them on, although you do wonder how she can afford them. Does the band really make this much money? Once you\'re done, you start putting the clothes back where you found them.');
        } else {
          if (((st as any).pcs_bmi ?? 0) < 30) {
            if (((st as any).pcs_mood ?? 0) > 10) {
              qspCall(st, 'mood', 'lower', 'small');
            }
            (st as any).minut = ((st as any).minut ?? 0) + 5;
            scene.text('You look through her clothes and attempt to try on several outfits, but even her largest, loosest clothes are just too small for you to wear. You try on a pair of loose cargo shorts that you manage to get over your hips, but as you\'re trying to button them up, one of the buttons pops loose and goes rolling across the floor. You sigh, quickly take them off, and start putting the clothes back where you found them.');
          } else {
            if (((st as any).pcs_mood ?? 0) > 10) {
              qspCall(st, 'mood', 'lower', 'medium');
            }
            (st as any).minut = ((st as any).minut ?? 0) + 5;
            scene.text('You look through her clothes and attempt to try on several outfits, but even her largest, loosest clothes are just too small for you to wear. You try on a pair of loose cargo shorts, but you can\'t even get them past your knees. You sigh and start putting the clothes back where you found them.');
          }
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoreClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'more_clothes');
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy2.jpg');
  scene.text('The two of you keep trying on different outfits and checking yourselves out in the mirror while giggling and commenting on each other\'s clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'These jeans are tight', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy3.jpg');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('She hands you a pair of jeans while smirking at you. "I would say you need to ditch your panties, but you seem to be going commando already."');
      scene.text('She pulls her panties off and you go to grab one of the pairs of jeans when…');
    } else {
      scene.text('She hands you a pair of jeans. "You\'ll need to lose your panties since these are so tight you\'ll have panty lines if you don\'t."');
      scene.text('Trusting her judgment, you take your panties off. You go to grab one of the pairs of jeans when…');
    }
    scene.actions([
      { label: 'Caught', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy4.jpg');
    scene.text('Anushka suddenly yells "Oh my god, you little pervert!" and covers herself quickly. You turn to see Maksim peeking through the door and instinctively cover yourself. Anushka grabs a shoe and throws it at the door, but Maksim takes off running just before the shoe hits the door frame. Anushka takes off across her room, yanking the door open and running out of her room stark naked, chasing him while screaming at him. You debate following them, but you\'re naked. Maybe you should put on some clothes first…');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] >= 3) {
      scene.actions([
        { label: 'Chase naked', goto: ['anush_bedroom', 'chase_naked'] },
      ]);
    } else {
      qspCall(st, 'willpower', 'exhib', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Chase naked', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Chase naked', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'anush_bedroom', 'chase_naked');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Get dressed quickly', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy5.jpg');
    scene.text('You grab the loose dress you had just been wearing and quickly throw it on before chasing after them.');
    scene.text('You can hear Maksim yelling as he runs away. "Help! She\'s going to kill me!"');
    scene.text('You enter the hallway just in time to see Maksim run into the living room, closely followed by a naked Anushka. "Come back here, you little pervert!" she screams loudly.');
    scene.text('Just as they both disappear into the living room, you hear Eduard\'s voice. "What the hell is going on?" You arrive just in time to see Maksim cowering in the corner with his dad staring at him while Anushka is standing just behind her dad, completely naked.');
    scene.actions([
      { label: 'Facing the music', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('"She\'s trying to kill me!" a panicking Maksim replies.');
    scene.text('Eduard turns to Anushka. "Just what the hell…" He never finishes his sentence. Instead, he immediately turns his head away and puts his hand in front of his eyes. "God dammit, Anushka, put some clothes on!" he bellows.');
    scene.text('He then turns his attention to Maksim. "Boy, were you spying on your sister and her friend again?" he asks sternly.');
    scene.text('"No!" he squeaks out.');
    scene.text('Anushka starts to say something, but Eduard turns towards you while shielding his eyes from Anushka. "Was he spying on you?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy5.jpg');
    scene.text('You nod your head. "Yes, we were trying on clothes when we noticed him spying on us."');
    // TODO-QSP: dynamic text: Eduard visibly shakes with what you think is anger and embarrassment. "I''m sorr...
    scene.text(`Eduard visibly shakes with what you think is anger and embarrassment. "I'm sorry, ${((st as any).pcs_nickname || '')}. I thought I taught these boys better than this."`);
    scene.text('Anushka chimes in. "See? I told you!"');
    scene.text('He turns towards her, seemingly having forgotten she was naked. "God dammit, Anushka! Go to your room and put some clothes on for crying out loud!"');
    scene.text('He turns back towards Maksim. "Come on boy, we\'re going for a walk… again." Maksim visibly swallows and looks scared. He doesn\'t move at first until his dad stops and glares at him. He quickly catches up, and they walk out of the apartment together.');
    // TODO-QSP: dynamic text: Anushka just stands naked until they both walk out the door, and Eduard closes i...
    scene.text(`Anushka just stands naked until they both walk out the door, and Eduard closes it behind them. Then she turns and heads back to her room. "Fucking little pervert. I'm sorry that you had to deal with that, ${((st as any).pcs_nickname || '')}."`);
    scene.text('You follow her to her room, and you both get dressed again. "It\'s not your fault. Boys will be boys."');
    scene.actions([
      { label: 'Get dressed', goto: ['anush_bedroom', 'anushroom'] },
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

function enterChaseNaked(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy6.jpg');
  scene.text('You take off after the two of them stark naked as well.');
  scene.text('You can hear Maksim yelling as he runs away. "Help! She\'s going to kill me!"');
  scene.text('You enter the hallway a few steps behind Anushka while she chases Maksim. "Come back here, you little pervert!" she screams loudly.');
  scene.text('Maksim runs into the living room with you and Anushka gaining on him; he runs past his dad, who turns towards Maksim. "What the hell is going on?" he asks Maksim, who is cowering in the corner.');
  scene.text('"She\'s trying to kill me!" a panicking Maksim replies.');
  scene.text('Eduard turns to the two of you. "Just what the hell…" He never finishes his sentence. Instead, he immediately turns his head away and puts his hand in front of his eyes. "God dammit! The two of you need to put some clothes on right now!" he bellows.');
  // TODO-QSP: end
  scene.actions([
    { label: 'The look', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy6.jpg');
    scene.text('He then turns his attention to Maksim. "Boy, were you spying on your sister and her friend again?" he asks sternly.');
    scene.text('"No!" he squeaks out');
    scene.text('Anushka starts to say something, but Eduard turns towards you, having forgotten you were naked… or maybe just wanting a second look. He stops with his mouth open like he\'s about to say something, and you see his eyes roaming over your naked body before Anushka interrupts him. "DAD! Stop staring at my friend!"');
    scene.text('This startles him back to reality, and he quickly looks away. "I wasn\'t! I mean… Sorry, I didn\'t mean to." He turns while covering his eyes. "Was he spying on you?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/maksimspy6.jpg');
    scene.text('"Yes, we were trying on clothes when we noticed him spying on us," you reply.');
    // TODO-QSP: dynamic text: Eduard visibly shakes with what you think is anger and embarrassment. "I''m sorr...
    scene.text(`Eduard visibly shakes with what you think is anger and embarrassment. "I'm sorry, ${((st as any).pcs_firstname || '')}. I thought I taught these boys better than this."`);
    scene.text('Anushka chimes in. "See? I told you!"');
    scene.text('He turns towards her and instantly regrets it. "God dammit, both of you go and put some clothes on for crying out loud!" You notice his gaze lingers on you for a second, or maybe it was your imagination.');
    scene.text('He turns back towards Maksim. "Come on boy, we\'re going for a walk… again." Maksim visibly swallows and looks scared. He doesn\'t move at first until his dad stops and glares at him. He quickly catches up, and they walk out of the apartment together.');
    // TODO-QSP: dynamic text: Anushka turns and heads back to her room. "Fucking little pervert. I''m sorry th...
    scene.text(`Anushka turns and heads back to her room. "Fucking little pervert. I'm sorry that you had to deal with that, ${((st as any).pcs_nickname || '')}."`);
    scene.text('You follow her to her room, and you both get dressed again. "It\'s not your fault. Boys will be boys."');
    scene.actions([
      { label: 'Get dressed', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNightStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like', 1, 'nighstand');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/snoop.jpg');
    scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. There are a few mostly empty prescription bottles, a small baggy of blue pills, marijuana and a couple of rolled joints. You also notice a pair of scissors, razor blades, rolling papers, a lighter, a pack of cigarettes, condoms, lotion, lube, a vibrator, a dildo, a butt plug and even a strap-on harness.');
    scene.text('"See anything you like?" Anushka asks you in a teasing tone.');
    scene.actions([
      { label: 'Uh no', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushdrawer.jpg');
    scene.text('You blush slightly and shake your head before closing the drawer, which just causes her to smirk in amusement.');
    scene.actions([
      { label: 'Close the drawer', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      { label: 'Strap-on', goto: ['anushkaev1', 'strapon1'] },
      { label: 'Butt plug', goto: ['anushkaev3', 'buttplug'] },
      { label: 'Joint', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/take_joint.jpg');
    scene.text('You pull out one of the joints and hold it up. "Yeah, I like this…"');
    scene.text('She laughs. "Yeah, me too. Wanna get high?"');
    scene.text('You smile at her and nod. "What do you think? I grabbed it, didn\'t I?"');
    scene.text('She flips you off for your snarky comeback. "Fuck you, bitch. Here, hand it over." You hand over the joint as she takes a lighter off the nightstand and lights it up, taking a long slow drag off it before handing it back to you.');
    scene.actions([
      { label: 'Take a drag', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'drugs', 'joint', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/get_high.jpg');
    scene.text('You take the joint from her and take a hit off it as you sit on the bed next to her. The two of you discuss various topics as you hand the joint back and forth, taking turns taking hits. Before too long, the joint is gone, and you feel pretty high.');
    scene.actions([
      { label: 'Chill out', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anushkachat', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushdrawer.jpg');
    scene.text('You decide to snoop, so you open the nightstand\'s drawer to peek inside. There are a few mostly empty prescription bottles, a small baggy of blue pills, marijuana and a couple of rolled joints. You also notice a pair of scissors, razor blades, rolling papers, a lighter, a pack of cigarettes, condoms, lotion, lube, a vibrator, a dildo, a butt plug and even a strap-on harness.');
    scene.text('You\'re not really surprised by the number of sex toys Anushka has, considering her relaxed attitude towards sex and sexuality. However, you decide it would be rude to play with them without her permission, so you close the drawer.');
    scene.actions([
      { label: 'Close the drawer', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Take joint', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['joints'] = ((st as any).mc_inventory['joints'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/take_joint.jpg');
    scene.text('You decide to take one of the joints. Surely she won\'t mind that you took just one? You take it out and look at it before placing it in your purse for later and closing the drawer.');
    scene.actions([
      { label: 'Close the drawer', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AnushkaLoc ?? 0) === 2  &&  ((s as any).anushkaQW ?? 0)?.['computer_use'] === 0) {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['computer_use'] = 1;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/laptop.jpg');
    scene.text('You point towards her laptop. "You\'re so lucky to have your own computer."');
    scene.text('"I bought it with some of the money I made from our gigs, plus some modeling work I did in the city. Other than using it to write songs, look up the music and play some games, I mostly just look up porn when I\'m horny and want to masturbate. I get so fucking turned on watching it that it gets to the point that I just can\'t resist playing with myself."');
    scene.text('You\'re amazed at how blunt she is. It\'s like the most normal thing in the world for her to openly talk about her sex life. You don\'t know if you could ever just openly tell someone that you watch porn and masturbate. "I wish I was as open and confident as you are; to just say and do things like that."');
    scene.text('She grins at that and apparently finds it amusing. "Well, we can watch porn together if you want? It\'s really not that big of a deal."');
    scene.text('You blush at the thought of watching porn with someone else, but there is some appeal. You think for a second, and you remember her mentioning that she earned money by modeling…');
    if (((s as any).anushkaQW ?? 0)?.['model'] === 0) {
      scene.actions([
        { label: 'Ask about modeling', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['model'] = 1;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((st as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('You perk up at the mention of modeling to earn money towards a lovely laptop like she has. "I didn\'t know you modeled as well?"');
      scene.text('She nods. "Yeah it pays pretty well, so you model too?" You nod yes and soon the two of you are talking about the varies modeling gigs you have done and you have discovered you both work for the same modeling agency.');
      scene.actions([
        { label: 'Do something else', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['model_referral'] = 1;
      scene.text('You perk up at the mention of modeling to earn money towards a lovely laptop like she has. "Does modeling really pay that well?"');
      scene.text('She nods. "Sort of… If you\'re willing to do nude modeling, you can make a lot in a short amount of time. Are you interested?" she asks while arching a shapely eyebrow.');
      scene.text('"Nude?" you silently ask yourself. Still, it might be worth considering if it pays that much. "I don\'t know… Maybe… How would I get started? Is there a modeling agency or something?"');
      scene.text('She grins at your reply. "Yes, it\'s located in the city center." She then explains precisely where it is and to let the photographer know she sent you.');
      if (((st as any).fakepassport ?? 0) !== 1) {
        scene.actions([
          { label: 'Underaged?', handler: (st: GameState) => {
    (st as any).fakepassport = 2;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('A thought then occurs to you. You\'re underaged, and so is Anushka. It\'s not legal to model nude when you\'re under 18. "Wait a second, how did you get past the age check?"');
    scene.text('She laughs. "Sometimes, I forget that not everyone has a fake ID. It\'s pretty easy to pick one up, though." She tells you about a printing shop in the Red Light District that sells fake passports. "Once you have one, you won\'t have any problems signing up as a model."');
    scene.actions([
      { label: 'Thanks', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Thanks', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    }
  } },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Agree to watch porn', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Agree to watch porn', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'anush_bedroom', 'agreeporn');
  } },
      ]);
    }
    scene.actions([
      { label: 'Find something else to look at', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } else {
    if (((s as any).anushkaQW ?? 0)?.['computer_use'] > 0  &&  ((s as any).AnushkaLoc ?? 0) === 2) {
      scene.text('You look at the computer, then at Anushka. You can\'t help but think about all the porn she watches on it. You bite your lower lip as your mind conjures images to go with that thought. At that exact moment, Anushka meets your look… and breaks into a wide smile. "You\'re thinking about watching porn, aren\'t you?"');
      scene.actions([
        { label: 'Deny it', handler: (st: GameState) => {
    scene.text('You shake your head, both to disperse the images that threaten to overwhelm you and as a response to Anushka\'s lewd question. "No… I… Uh… I just remembered something I had to look up on the internet."');
    scene.text('Anushka chuckles. "Sure you did," she says teasingly but doesn\'t press you further.');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
        { label: 'Admit it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('Given how open she is about everything, you don\'t feel it\'s necessary to lie to her about it, so you nod in reply. "Yeah, I guess I am."');
    scene.text('Anushka\'s smile broadens, and lust flares up in her eyes. "If you want… We could watch some together?"');
    qspCall(st, 'willpower', 'misc', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Agree to watch porn', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Agree to watch porn', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'anush_bedroom', 'agreeporn');
  } },
      ]);
    }
    scene.actions([
      { label: 'You don\'t want to', handler: (st: GameState) => {
    scene.text('As appealing as watching porn sounds, you\'re not in the mood to watch it with her. At least not right now.');
    scene.text('"Nah, I\'d really rather do something else," you say.');
    scene.text('Anushka just shrugs. "Alright, that\'s cool." She seems to be rubbing her legs together, though - maybe even the idea of watching porn with you got her a little worked up.');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).anushkaQW ?? 0)?.['computer_use'] > 0  &&  ((s as any).AnushkaLoc ?? 0) !== 2) {
        qspCall(s, 'npcStat', 'A144');
        scene.text('You decide to use Anushka\'s computer. You\'re sure she wouldn\'t mind.');
        qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
        scene.actions([
          { label: 'Turn the computer off', goto: ['anush_bedroom', 'anushroom'] },
          { label: 'Go online', goto: ['komp', 'start'] },
          { label: 'Check out her porn', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/usecomp.jpg');
    scene.text('You take a seat in front of the computer. "Maybe I should look at what kind of porn Anushka likes to watch? She won\'t mind, right?" you think to yourself.');
    scene.text('You start the computer up. It loads much faster than what you are used to, so it must be a pretty high-end laptop. Once it\'s done loading, you click on the internet browser and look through her browsing history and bookmarks.');
    scene.text('You see that she\'s watched videos from all kinds of porn sites. There\'s a lot of public exhibitionist porn featuring various sex acts. There is some boy-girl stuff, a lot of it rough sex and/or anal, and there is a fair bit of interracial porn and a lot of lesbian sex, especially with strap-ons. You feel yourself getting aroused as you keep browsing.');
    qspCall(st, 'arousal', 'porn', 10);
    if ((!((st as any).AnushkaLoc ?? 0))) {
      scene.actions([
        { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushcmast.mp4');
    scene.text('While browsing her vast list of pornos, you find one you like, lean back in the chair and start masturbating. Before long, you completely forget that you are in Anushka\'s bedroom, masturbating to porn on her laptop.');
    qspCall(st, 'arousal', 'porn', 10);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushcmast.mp4');
    scene.text('You keep rubbing your clit… you can feel your climax building… building… You can feel yourself going higher and higher while riding the orgasmic wave of pleasure.');
    (st as any).temp = (Math.floor(Math.random() * 4) + 0);
    if ((!((st as any).temp ?? 0))) {
      scene.text('Just before you\'re about to explode, you hear someone snickering. Your heart leaps to your throat, pounding with fear as you turn your head to see Maksim standing in the doorway. He\'s watching you with the door wide open. Your blood runs cold, and you quickly rip your hand from between your legs and pull your clothes back in place as you yell at him. "Get out of here, you little pervert!"');
      scene.text('He points and laughs at you. "You were jerking off to porn!"');
      scene.text('You\'re in no mood to correct him that girls don\'t jerk off as you get up from the chair. "Get out of here or I\'ll tell Anushka!" He quickly bolts out the door and down the hall as you close the door behind him, but the mood is completely ruined now.');
      scene.actions([
        { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      if (((st as any).temp ?? 0) === 1) {
        (st as any).AnushkaLoc = 2;
        scene.text('You\'re so caught up in what you\'re doing that you don\'t hear the door opening or someone walking in behind you. You practically jump out of the chair in shock when you feel a pair of arms wrap around your shoulders and start fondling your breasts. You turn around to see… Anushka rolling with laughter.');
        scene.text('You give her a dirty look, making her laugh even more. "You almost scared me to death! That really wasn\'t funny!" There is very little real heat in your voice as you\'re so embarrassed to have been caught masturbating. "Sorry about—" you start to say, but she waves you to stop.');
        if (((st as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('"It\'s fine. I don\'t care if you masturbate in my room while you wait for me. If you\'re that horny, I could always help you out with it…" she says while licking her upper lip.');
          scene.actions([
            { label: 'No thanks', handler: (st: GameState) => {
    scene.text('You shake your head. "Thanks, but you scared the mood right out of me. Uhm… How about we just change the subject?" She laughs, but doesn\'t seem to mind you turning her down as she flops down on her bed.');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
            { label: 'Sure', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les1.jpg');
    scene.text('You smile at Anushka and move closer. You fold your arms around her body and give her a long passionate kiss, which gets you right back into the mood. The two of you start stumbling over to her bed, falling, then crawling onto it as your hands roam and caress each other\'s bodies.');
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    scene.actions([
      { label: 'Undress her', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les2.jpg');
    scene.text('Once in bed, you waste no time pulling her clothes off, and she returns the favor and starts to remove your clothes as well. It would go much faster if the two of you weren\'t also passionately kissing while caressing each other\'s bodies. Regardless, you\'re soon both naked.');
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    scene.actions([
      { label: 'Get pleasured', goto: ['anushkaev3', 'getpleasured'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('"It\'s fine. I don\'t care if you masturbate in my room while you wait for me. Just make sure to clean up after yourself," she says while she flops onto her bed, which only makes you blush more.');
          scene.actions([
            { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
          ]);
        }
      } else {
        scene.text('You lean back in the chair and spread your legs wider apart as you feel your climax approaching. You turn and bury your mouth into your shoulder to stop yourself from screaming as your orgasm rocks your body. It takes you a few seconds to recover once it\'s over before you straighten everything up and wonder what you can do next to kill some time.');
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Turn the computer off', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>Anushka\'s Room</b></center>');
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/laptop.jpg');
        scene.text('You\'re not sure you should be using her computer when she isn\'t here without her permission, so you decide to leave it alone.');
        scene.actions([
          { label: 'Return', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAgreeporn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/watchporn.jpg');
  scene.text('She grins, then connects the TV to the laptop to start playing some lesbian porn. You can\'t help but notice the porno is about two teenage girls having a sleepover in one of their bedrooms. They talk for a bit, but as the conversation continues, it quickly leads to them having sex.');
  scene.text('You feel yourself getting really aroused from watching the porno. You glance at Anushka, seeing her hand in her panties and her pants around her knees while masturbating with you sitting right beside her. You\'re stunned at her apparent easiness in the situation and quickly look away. At first, you try pretending she isn\'t playing with herself, but you can\'t help sneaking the occasional peek at her. It seems like she\'s having fun. If she doesn\'t think anything is wrong with it, then it\'s probably not a big deal to her.');
  qspCall(s, 'arousal', 'porn', 10);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'exhib', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Masturbate as well', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Masturbate as well', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/dualmast.mp4');
    scene.text('"Fuck it," you think to yourself. The video has turned you on, and she clearly doesn\'t think it\'s a big deal to masturbate in front of you. With that thought, you start masturbating as well. You find it hard to get into it, knowing she\'s right next to you, but after a while, you start to relax and get more comfortable with the situation. You glance over at Anushka, who\'s looking at you with a massive grin on her face, clearly enjoying that the two of you are playing with yourselves together. At this point, neither of you is really watching the porno anymore. Instead, you just lay back on the bed side by side while looking at each other as you masturbate.');
    scene.text('Sometime later, you feel Anushka speed up next to you. Her soft moans suddenly get louder before she starts shuddering in orgasm. This is just enough to get you right to the edge, and you quicken your own pace as a result. Within seconds, a huge orgasm rocks your body that completely overwhelms your senses. By the time you fully recover, Anushka has already turned off the porno and is smiling at you with her pants back up. She nods towards the door. "I don\'t know about you, but I could use a snack. Come on, let\'s go raid the kitchen." She heads out of her room, waving for you to follow and acting like everything is completely normal. You get up to follow her out.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Follow her', goto: ['anushapt', 'snack'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just watch', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/watchporn.jpg');
    scene.text('As the two of you continue to watch the porno, you do your best to ignore that Anushka is masturbating right next to you. Long before the video is over, her breathing gets faster and she starts moaning - softly at first, then louder and louder until she arches her back in a shuddering orgasm. After giving herself a few seconds to come down from her little pleasure high, she pulls her pants back up, gets off the bed and turns the porno off. She then turns to look you in the eye. "I don\'t know about you, but I could use a snack. Come on, let\'s go raid the kitchen." She heads out of her room, waving for you to follow her. You\'re not sure what else to do, so you get up to follow along behind her.');
    qspCall(st, 'arousal', 'porn', 10, 'lesbian');
    qspCall(st, 'stat', '');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Follow her', goto: ['anushapt', 'snack'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/guitar.jpg');
    scene.text('You check out the two guitars hanging on the wall. One of them is an acoustic guitar that looks pretty old but well cared for. The other is what looks like a relatively new, costly electric guitar.');
    if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 0) {
      scene.actions([
        { label: 'Would you play me something?', handler: (st: GameState) => {
    scene.text('"I\'ve heard you\'re pretty good. Would you mind playing me something?" you ask.');
    scene.text('[Note to player: If your sound is off or you do not have the sound pack installed, I suggest you look up and read the lyrics of the songs]');
    scene.actions([
      { label: 'Wait for her', goto: ['anush_bedroom', 'nush_guitar'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).anushkaQW ?? 0)?.['guitar_play'] >= 1) {
        if (((s as any).instrmusic_lvl ?? 0) < 75) {
          scene.actions([
            { label: 'Would you teach me how to play?', goto: ['anush_bedroom', 'nush_guitar_teach'] },
          ]);
        }
        scene.actions([
          { label: 'Would you play something again?', handler: (st: GameState) => {
    scene.text('"Would you play me another song?" you ask and Anushka smiles.');
    scene.text('[Note to player: If your sound is off or you do not have the sound pack installed, I suggest you look up and read the lyrics of the songs]');
    scene.actions([
      { label: 'Wait for her', goto: ['anush_bedroom', 'nush_guitar'] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
      scene.actions([
        { label: 'Can we play together?', goto: ['anush_bedroom', 'nush_guitar_play_together'] },
      ]);
    }
    scene.actions([
      { label: 'Look at something else', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Ask about the old guitar', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/guitar.jpg');
    scene.text('While the acoustic guitar is in great shape, it looks as old or older than Anushka herself and doesn\'t look all that expensive. It makes you wonder why she has it when the electric one is obviously new and more costly. "So what\'s up with this old guitar?" you ask.');
    scene.text('She smiles. "It\'s my dad\'s, or at least it was. When I was little, he used to play all the time, and that\'s where my love of music started. One day, I don\'t know why, he just stopped playing…" She shrugs slightly. "Anyway, when I got a little older, I took it and started teaching myself to play. He found me playing it and taught me a few things to help me with the basics. After I had stuck with it for a few months, he gave me his old guitar. I spent a lot of time playing it and teaching myself how to play."');
    scene.actions([
      { label: 'Look at something else', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Keep checking out the guitars', goto: ['anush_bedroom', 'guitar'] },
    ]);
  } },
      { label: 'Ask how long it took to learn to play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/guitar.jpg');
    scene.text('"How long did it take you to learn to play?" you ask.');
    scene.text('She shakes her head. "I still have a lot to learn, but it took me years to get as good as I am now. It\'s easy to learn the basics, but hard to master." The two of you talk about how much time she\'s practiced over the years.');
    scene.actions([
      { label: 'Look at something else', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Keep checking out the guitars', goto: ['anush_bedroom', 'guitar'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/guitar.jpg');
    scene.text('You check out the two guitars. One of them is an acoustic guitar that looks relatively old but well cared for. The other is an electric guitar that looks much newer and more expensive.');
    if (((s as any).instrmusic_lvl ?? 0) < 5) {
      scene.actions([
        { label: 'Pretend to play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/play_guitar.jpg');
    scene.text('You decide to live out one of your fantasies. You\'ve always wanted to play the guitar, so you grab hold of the guitar and pretend to play, putting on a show as if you were a real rock star. After a while, you need to catch your breath. Playing was a lot harder than you thought.');
    scene.actions([
      { label: 'Put the guitar back', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Look at something else', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Try to play it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/play_guitar.jpg');
    if (((st as any).pcs_instrmusic ?? 0) < 20  ||  ((st as any).instrmusic_lvl ?? 0) < 10) {
      qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 2) + 0));
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      qspCall(st, 'pain', '', 1, 'fingers', 'ache');
      qspCall(st, 'stat', '');
      scene.text('You gently brush your fingers over the strings. The feeling of the coarse strings against them is exhilarating. You come up with a song you want to try to play and start to work your magic…');
      scene.text('Unfortunately, playing the guitar is a lot harder than it looks. It takes you several minutes to hit the right notes and several more to play even the tiny first fraction of the song without making a mistake. The strings cut into your tender, uncalloused fingertips and you eventually decide to stop.');
      scene.text('You realize now that learning how to play the guitar can be a frustrating, painful experience, yet you can\'t help but gently stroke the guitar once more before putting it back on its stand. You look forward to trying to play again.');
      scene.actions([
        { label: 'Put the guitar back', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      if (((st as any).pcs_instrmusic ?? 0) < 40) {
        qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 0));
        qspCall(st, 'mood', 'raise', 'tiny');
        (st as any).minut = ((st as any).minut ?? 0) + 20;
        scene.text('You gently brush your fingers over the strings and slowly pick at them before you start playing a song you recently started learning. Unfortunately, you still have a lot to learn - it takes you several minutes to hit the right notes and several more to play even a tiny bit of the song without making a mistake. Still, you\'re better than you used to be, and after about twenty minutes, you decide to stop.');
        // TODO-QSP: dynamic text: <<$OpenInnerThought>>"Maybe Anushka will be willing to help me out and teach me ...
        scene.text(`${((st as any).OpenInnerThought || '')}"Maybe Anushka will be willing to help me out and teach me how to play?"${((st as any).CloseInnerThought || '')} you muse as you place the instrument back on its stand.`);
        scene.actions([
          { label: 'Put the guitar back', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      } else {
        if (((st as any).pcs_instrmusic ?? 0) < 60) {
          qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 4) + 0));
          qspCall(st, 'mood', 'raise', 'tiny');
          (st as any).minut = ((st as any).minut ?? 0) + 20;
          scene.text('You gently brush your fingers over the strings and slowly pick at them before you start playing a song you recently started learning. You keep making small mistakes here and there, but you\'re slowly but steadily getting the piece down. After about twenty minutes, you decide you\'ve messed around with the guitar enough.');
          // TODO-QSP: dynamic text: <<$OpenInnerThought>>"Maybe Anushka will be willing to help me out and teach me ...
          scene.text(`${((st as any).OpenInnerThought || '')}"Maybe Anushka will be willing to help me out and teach me how to play?"${((st as any).CloseInnerThought || '')} you muse as you place the instrument back on its stand.`);
          scene.actions([
            { label: 'Put the guitar back', goto: ['anush_bedroom', 'anushroom'] },
          ]);
        } else {
          qspCall(st, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 5) + 1));
          qspCall(st, 'mood', 'raise', 'tiny');
          (st as any).minut = ((st as any).minut ?? 0) + 20;
          scene.text('You pick up the guitar, run your hand along the neck and play a few chords, then flick your hair back and start playing the latest song you\'ve learned before switching to another piece. Your fingers dance gracefully over the strings, and you spend about twenty minutes just having fun playing songs.');
          if (((st as any).ml_guitar ?? 0)?.['hasguitar'] >= 1) {
            // TODO-QSP: dynamic text: <<$OpenInnerThought>>"Maybe I should come over with my guitar someday and see if...
            scene.text(`${((st as any).OpenInnerThought || '')}"Maybe I should come over with my guitar someday and see if Nush wants to play together?"${((st as any).CloseInnerThought || '')} you muse as you place the instrument back on its stand.`);
          }
          scene.actions([
            { label: 'Put the guitar back', goto: ['anush_bedroom', 'anushroom'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'bed');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  if (((s as any).AnushkaLoc ?? 0) === 2) {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('Anushka sits on her bed and waves for you to sit next to her. You quickly jump up on the bed next to her.');
    if (((s as any).anushkaQW ?? 0)?.['guitar_play'] >= 1  &&  ((s as any).instrmusic_lvl ?? 0) < 75) {
      scene.actions([
        { label: 'Would you teach me how to play?', goto: ['anush_bedroom', 'nush_guitar_teach'] },
      ]);
    }
    if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
      scene.actions([
        { label: 'Can we play together?', goto: ['anush_bedroom', 'nush_guitar_play_together'] },
      ]);
    }
    scene.actions([
      { label: 'Get out of the bed', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Chat', goto: ['anushkachat', 'chat'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom.jpg');
    scene.text('You lie down on her bed and roll over, taking a deep breath to find the pillow smells just like her. There\'s not much to do without Anushka, and you start feeling bored, wishing Anushka was here.');
    scene.actions([
      { label: 'Get out of the bed', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNushGuitar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anush_bedroom', 'nush_guitar');
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['guitar_day'] === ((s as any).daystart ?? 0)) {
    scene.text('She shakes her head slightly. "I already played you a song. Let\'s do something else." She then sees your disappointment. "Don\'t worry, I\'ll play for you again, just not right now. I love that you\'re such a fan though. Want me to sign your tits?" she asks in a snarky tone.');
    scene.text('You grab a pillow off the bed and hit her with it. "Ha ha, very funny. I just like listening to you is all."');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } else {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_day'] = ((s as any).daystart ?? 0);
    (s as any).music_loop = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 0) {
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      }
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
      scene.text('Anushka\'s eyes brighten up as you ask her. She reaches over and grabs the acoustic guitar, strumming a few bars to check it\'s still in tune. "I\'ll play you the very first song I ever learned. It\'s one of my dad\'s favorites." She starts playing and then singing the song. It takes you a moment to recognize that she\'s playing and singing \'Wanted Dead or Alive\' by Bon Jovi.');
      scene.text('You\'re impressed with her talent. She\'s a good singer, better than some people you\'ve heard on the radio, but is an even better guitar player. As she ends her song, you clap your hands. "Wow, I\'ve heard you\'re good, but I didn\'t know that you were this good!"');
      scene.text('She blushes at your compliment. "Thanks. I work hard at it, so it\'s nice to be appreciated for it," she replies as she gets up and puts her guitar back in its place.');
      scene.text('You smile at her. "So, that\'s your dad\'s favourite song? He taught you?"');
      scene.text('She nods. "Yeah, he\'s the one that taught me how to play when I was younger, and yeah, he loves that song. It reminds him of his youth and how he felt back then… You know, before he got old." You talk for a few minutes about other songs he likes.');
      scene.actions([
        { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 1) {
        if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        }
        ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
        scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else." She strums the guitar and checks to ensure it\'s still in tune. "This is another song my dad taught me. It\'s \'Behind Blue Eyes\' by The Who."');
        scene.text('She plays and sings just as well as before. When she ends her song, you clap your hands and praise her. "Another great song. You really are good at this."');
        scene.text('"Thanks. After I learned this one, I guess that\'s when my dad knew I was serious about playing. That\'s when he gave me this," she says, patting the guitar. "It used to be his. He got it when he was only fifteen and kept it all these years…" She looks down at the guitar and smiles softly at the memories, one of the few times you\'ve see her softer side. "And now it\'s mine." By how she says that and holds the guitar when she puts it back in its place, you can tell the old guitar means a lot to her.');
        scene.actions([
          { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
        ]);
      } else {
        if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 2) {
          if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
          }
          ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
          scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This is a lot more our generation." She strums the guitar and checks to ensure it\'s still in tune. "This is the first song Rad and I worked on learning together. It\'s \'Make Me Wanna Die\' by The Pretty Reckless. It\'s also when my obsession, and girl crush, with Taylor, started."');
          scene.text('She motions to the band poster on her wall. She starts playing and singing the new song; it still has that rock feel like the others, but is more modern.');
          scene.text('She plays and sings just as well as before. When she ends her song, you clap your hands and praise her. "Another great song. You really are good at this."');
          scene.text('"Thanks. After I started hanging out with Rad and we started playing together, this was the first song we learned together." She shakes her head slightly and snorts a laugh. "He thought it was perfect for us, capturing how we felt. I suppose, in the end, he was right." You cock your head slightly at her response. Having heard the lyrics, you can\'t help but wonder exactly what she means by that.');
          scene.actions([
            { label: 'Say nothing as she puts the guitar back', goto: ['anush_bedroom', 'anushroom'] },
            { label: 'Ask what she meant', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"What do you mean by that?" you ask, the curiosity of wanting to know too much for you to let it go.');
    scene.text('"What?" she asks, having been lost in thought.');
    scene.text('"What you just said, about how he thought it was perfect for you guys and in the end, you guess he was right?" You don\'t know if she was just being obtuse or evasive.');
    scene.text('She turns silent, making you think she was being evasive and knew precisely what you meant before she sighs. "Rad thinks I was a good girl playing a bad girl and that he corrupted me and made me fall in love with him and life. So to him, the song was always about that. He saw himself as the seductive charmer that drew me in."');
    scene.text('She shrugs. "I suppose there\'s a tiny bit of truth to that, but I was already well on my way to being a wild rocker chick by that point. He might have sped me into who I always was going to be, but he didn\'t make me." She stops, but you know there\'s more to it. You\'re not sure she wants to talk about it though.');
    scene.actions([
      { label: 'Let it go', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Press it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You nod. "So he wasn\'t right, not in the way he thinks?"');
    scene.text('She just looks at you before sighing loudly. You can tell she\'s running out of patience for this topic, and really doesn\'t like talking about it. "Pretty much. He was my first love after all, and… things didn\'t end well, even if we\'re now friends… Anyway, I don\'t want to talk about this." Her tone and body language say that if you keep pressing, you\'re going to piss her off, so you drop it. She puts the guitar back in place while you look around at something else to do or talk about.');
    scene.actions([
      { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 3) {
            if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
            }
            ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
            qspCall(s, 'stat', '');
            scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This is the second song Rad and I worked on together." She strums the guitar and checks to ensure it\'s still in tune. "This is also the song I played for the band that got me in. Val loved it and wanted me in right away. It\'s \'Going to Hell\' by The Pretty Reckless."');
            scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Another great song. You really are good at this."');
            scene.text('"Thanks. You could say this is the song that got me started on my music career," she says while smiling fondly.');
            scene.text('"Well, we owe the song a lot because you\'re going to be a great rock star someday," you tell her, which makes her grin. She puts the guitar back in its place as you talk about her future music career.');
            scene.actions([
              { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
            ]);
          } else {
            if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 4) {
              if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
              }
              ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
              qspCall(s, 'stat', '');
              scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
              scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This one I learned shortly after seeing the uncensored music video for it." She strums the guitar and checks to ensure it\'s still in tune. "It\'s \'Heaven Knows\' by The Pretty Reckless."');
              scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Another great song. You really are good at this."');
              scene.text('"Thanks. I still remember the first time I watched the music video for this." She bites her lower lip, clearly getting a little turned on thinking about it. "When Taylor pulled off her robe and flashed her naked body… Oh man, that was so fucking hot. I can\'t lie; I\'ve rubbed one out more times than I care to remember thinking about that scene while staring at that poster," she says while indicating The Pretty Reckless poster on her wall.');
              scene.text('You giggle and glance at the poster. You could see Anushka rubbing one out while looking at the poster. Thinking about her rubbing one out, laying on the bed she\'s now on, is starting to make you a little horny. You shake your head to banish the thought and change the subject while she puts the guitar back in its place, talking about her future music career.');
              scene.actions([
                { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
              ]);
            } else {
              if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 5) {
                if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
                }
                ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
                qspCall(s, 'stat', '');
                scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
                scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This is another one I learned shortly after we started secondary school and how things started to change with how everyone saw each other." She strums the guitar and checks to ensure it\'s still in tune. "It\'s \'What\'s Up\' by the 4 Non Blondes."');
                scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Another great song. You really are good at this."');
                scene.text('"Thanks. It\'s not my normal kind of music, but sometimes I need to play or listen to something different, you know?" she says as she puts the guitar back in its place.');
                scene.text('You nod in agreement. "Yeah, totally. Sometimes I listen to stuff I normally don\'t listen to as well." You end up talking about some more out-of-the-normal stuff you\'ve both listened to recently. She has a surprisingly wide range of tastes in music, from pop, rock and hip-hop to some blues and classical.');
                scene.actions([
                  { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
                ]);
              } else {
                if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 6) {
                  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
                  }
                  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
                  scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This is another one I learned shortly after we started going to secondary school, with how the boys started treating us differently and how the girls started acting in response to what the boys did." She strums the guitar and checks to ensure it\'s still in tune. "It\'s \'Try\' by Colbie Caillat."');
                  scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Great as always. I agree; at some point, things just changed."');
                  scene.text('"Thanks. It\'s not my normal kind of music either, but… I was just so frustrated by how the girls seemed to all become obsessed with making the boys like them. Though I suppose I shouldn\'t talk too much, considering Rad and me back in the day," she says as she puts the guitar back in its place.');
                  scene.text('You nod in agreement. "Yeah, totally. It can be exhausting." You end up talking about what\'s expected of young women and what boys expect from them, along with society.');
                  scene.actions([
                    { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
                  ]);
                } else {
                  if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 7) {
                    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
                    }
                    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
                    scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else." She strums the guitar and checks to ensure it\'s still in tune. "It\'s \'Numb\' by Linkin Park."');
                    scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Great as always."');
                    scene.text('"Thanks," she says as she puts the guitar back in its place.');
                    scene.text('You notice that she had always told you when and why she learned a song, which makes you curious why she didn\'t this time. You guess it has something to do with Radomir. You could ask her or just let it go.');
                    scene.actions([
                      { label: 'Say nothing as she puts the guitar back', goto: ['anush_bedroom', 'anushroom'] },
                      { label: 'Ask why she learned it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Normally, you tell me what or who made you learn a song, so how about this one?" you ask, the curiosity of wanting to know too much for you to let go.');
    scene.text('You can tell by her expression she was expecting you to ask this or something like it. "A few weeks ago, it came on while I was listening to the radio. It just… encapsulated how I was feeling that day."');
    scene.text('Knowing what you do and what you\'ve heard, you can guess who was making her feel that way. You know she hates talking about her and Radomir, but maybe it wasn\'t him… Still, should you push the issue or just drop it? You can tell she isn\'t thrilled talking about it.');
    scene.actions([
      { label: 'Let it go', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Press it', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You nod. "We all have those days, but what, or who, was making you feel that way that day?" you ask.');
    scene.text('She gives you a somewhat sour look, then sighs loudly, leaving little doubt in your mind. "I don\'t know why you\'re even asking. We both know you\'re already thinking you know who it is," she says, and her tone and body language say that if you keep pressing, you\'re just going to piss her off, so you drop it. Besides, her response confirmed it was something Radomir did. She puts the guitar back in place while you look around at something else to do or talk about.');
    scene.actions([
      { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).anushkaQW ?? 0)?.['guitar_play'] === 8) {
                      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
                      }
                      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['guitar_play'] = ((s as any).anushkaQW['guitar_play'] ?? 0) + (1);
                      qspCall(s, 'stat', '');
                      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
                      scene.text('She reaches over and grabs the acoustic guitar. "Sure, I\'ll play you something else. This is one I\'ve been working on recently. Ever since Dimka approached us about playing at the end-of-school party he plans to throw, we\'ve been working on a playlist for it. This got me thinking, I should do a song dedicated to most of my fellow classmates, the judgmental hypocrite assholes they are." She strums the guitar and checks to ensure it\'s still in tune. "It\'s \'Whore\' by In This Moment."');
                      scene.text('She starts playing and singing the new song, playing and singing just as well as before. When she ends her piece, you clap your hands and praise her. "Great as always. Is that how you feel about most of our classmates?"');
                      scene.text('"Thanks." She then giggles. "Yeah, most of them think I\'m a slut while trying to sleep with me, while most of them are having sex with several people while wishing they could fuck even more. They\'re just afraid of what others might say or think of them if they lived how they wanted, yet all too quickly tear each other down for doing exactly what they wish they could do." She goes on a rant, then stops and grins.');
                      scene.text('"Anyway… Yeah, that\'s exactly how I feel about most of them. Someday most of them will be buying my albums and bragging to their friends about how they went to school with me, yet tomorrow at school, they\'ll call me a slut and talk about me behind my back," she says as she puts the guitar back in its place.');
                      scene.text('You nod slightly and wonder if it ever gets to her. What she just said sounds like it bothers her at least a little. "Yeah, I imagine you\'re right." You talk for a few minutes about how several of your classmates sleep around but are quick to slap the slut label on any girl caught doing it.');
                      scene.actions([
                        { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
                      ]);
                    } else {
                      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
                      }
                      qspCall(s, 'stat', '');
                      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushplay.jpg');
                      scene.text('She grabs the acoustic guitar. "Sure, I\'ll play one of the songs again. Let\'s see which one I feel like playing today." She starts playing and singing one of the songs she\'s already played for you.');
                      scene.text('She plays and sings just as well as before and when she ends her song, you clap your hands and praise her. "Just as great as the first time you played it. You really are good at this."');
                      scene.text('She beams at your compliment. "Thanks. I work hard at it, so it\'s nice to be appreciated for it," she replies as she gets up and puts her guitar back in its place.');
                      scene.actions([
                        { label: 'Continue', goto: ['anush_bedroom', 'anushroom'] },
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 1) {
      scene.text('Music is turned off.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNushGuitarTeach(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'anush_bedroom';
  (s as any).menu_arg = 'nush_guitar_teach';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You sit down on the bed next to Anushka and look at her. "Can you teach me how to play the guitar?"');
  if (((s as any).anushkaQW ?? 0)?.['knows_guitar'] === 1) {
    scene.text('She smiles back at you. "Have you been practicing?"');
    scene.text('You nod. "Of course. I\'ve been practicing what you showed me last time."');
    scene.text('She smiles. "Okay then, how good do you feel you are now?"');
    if (((s as any).instrmusic_lvl ?? 0) < 20) {
      scene.text('You look down from her gaze while blushing. "Pretty bad. I don\'t really have any clue what I\'m doing."');
      scene.text('She laughs. "I can teach you some more basics, but you must practice them at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
      scene.actions([
        { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
      ]);
    } else {
      if (((s as any).instrmusic_lvl ?? 0) < 40) {
        scene.text('You blush under her gaze. "So-so. I know what I\'m doing, but I still make many mistakes."');
        scene.text('She laughs. "I can show you some more stuff, but you must practice them at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
        scene.actions([
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      } else {
        scene.text('You return her smile. "Not bad. I\'m not as good as you, at least not yet, but I can play a few songs pretty well."');
        scene.text('She nods. "Great. We can work on more advanced stuff today, but you must practice them at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
        scene.actions([
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      }
    }
  } else {
    if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
      scene.text('She smiles back at you. "Sure, I see you already have your own guitar, so that\'s good." She seems to be considering it. "So how good are you so far?"');
      if (((s as any).instrmusic_lvl ?? 0) < 20) {
        scene.text('You look down from her gaze while blushing. "Pretty bad. I don\'t really have any clue what I\'m doing."');
        scene.text('She laughs. "It\'s okay. We all need to start somewhere. I can teach you some basic things to get started, but you\'ll need to practice them at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
        scene.actions([
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      } else {
        if (((s as any).instrmusic_lvl ?? 0) < 40) {
          scene.text('You blush under her gaze. "So-so. I know what I\'m doing, but I still make many mistakes."');
          scene.text('She laughs. "It\'s okay. It sounds like you know the basics, so I can show you how to play better, but you\'ll need to practice at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
          scene.actions([
            { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
          ]);
        } else {
          scene.text('You return her smile. "Not bad. I\'m not as good as you, at least not yet, but I can play a few songs pretty well."');
          scene.text('She nods. "Great. It sounds like we can dive right into the deep end. I can show you some stuff, but you must practice it at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
          scene.actions([
            { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
          ]);
        }
      }
    } else {
      scene.text('She smiles back at you. "Sure, but before we start, do you own your own guitar?"');
      if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You smile and nod your head. "Yes, I do. It\'s at home, though."');
    scene.text('She smiles back at you. "Okay, that\'s good. I can teach you with mine. So, how good are you so far?"');
    if (((st as any).instrmusic_lvl ?? 0) < 20) {
      scene.text('You look down from her gaze while blushing. "Pretty bad. I don\'t really have any clue what I\'m doing."');
      scene.text('She laughs. "It\'s okay. We all need to start somewhere. I can teach you some basic things to get started, but you\'ll need to practice them at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
      scene.actions([
        { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
      ]);
    } else {
      if (((st as any).instrmusic_lvl ?? 0) < 40) {
        scene.text('You blush under her gaze. "So-so. I know what I\'m doing, but I still make many mistakes."');
        scene.text('She laughs. "It\'s okay. It sounds like you know the basics, so I can show you how to play better, but you\'ll need to practice at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
        scene.actions([
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      } else {
        scene.text('You return her smile. "Not bad. I\'m not as good as you, at least not yet, but I can play a few songs pretty well."');
        scene.text('She nods. "Great. It sounds like we can dive right into the deep end. I can show you some stuff, but you must practice it at home," she says as she gets up and takes the acoustic guitar off the wall before returning to bed.');
        scene.actions([
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      }
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You shake your head. "No, I just thought I could play on yours?" you tell her.');
    scene.text('She shakes her head. "Oh, you can, but it won\'t do you any good. To learn, you need to practice on your own. If you\'re serious about learning, buy one and I\'ll teach you."');
    scene.text('You sigh. You\'ll need to save up and buy a guitar if you\'re serious about this…');
    scene.actions([
      { label: 'Find something else to do', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGuitarLesson(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'anush_bedroom';
  (s as any).menu_arg = 'guitar_lesson';
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['knows_guitar'] = 1;
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['sveta_love'] = ((s as any).anushkaQW['sveta_love'] ?? 0) + (1);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/teach_guitar1.jpg');
  scene.text('She hands you the guitar and scoots around behind you. You sit with her legs on each side of your hips, and you can feel her inner thighs pressing against your hips. She leans close behind you, and you can feel her breasts against your back as she reaches around you to place her hands on yours. Leaning forward, her face is right next to yours, and you realize this is a very intimate feeling. You can feel the heat from her body against yours, and can smell lavender from the shampoo she uses on her hair.');
  if (((s as any).pcs_instrmusic ?? 0) < 20  ||  ((s as any).instrmusic_lvl ?? 0) < 10) {
    scene.text('You try and focus on what she\'s showing you and telling you, but her being this close is pretty distracting. You try to do what she says, but not to a significant effect. You can play a few notes, but stringing them together is more challenging than you thought. Her hands touch yours often, helping you with finger placement. Finally, after about half an hour, Anushka stops and slides away from you, the warmth from her body suddenly so noticeable. She takes the guitar from you. "Okay, that\'s enough for today. You need to practice a lot when you get home," she says as she takes the guitar back over and hangs it on the wall, after which she comes back to sit on the bed with you.');
    scene.actions([
      { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
    ]);
  } else {
    if (((s as any).pcs_instrmusic ?? 0) < 40) {
      scene.text('You try and focus on what she\'s showing you and telling you, but her being this close is pretty distracting. You can play all the chords and string them together as long as there are no sudden changes. Those still trip you up, and she will correct your hand placement. Finally, after about half an hour, Anushka stops and slides away from you, her body\'s warmth suddenly so noticeable. She takes the guitar from you. "Okay, that\'s enough for today. Not bad, but you have a long way to go," she says as she takes the guitar back over and hangs it on the wall, after which she comes back to sit on the bed with you.');
      scene.actions([
        { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
        { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
      ]);
    } else {
      scene.text('You try and focus on what she\'s showing you and telling you, but her being this close is pretty distracting. You can play some somewhat complicated songs and rarely make a mistake. When you do, you quickly correct it yourself, and she mostly just sits close with her face close to yours - she even brushes your hair back behind your ear. After about half an hour, Anushka stops and slides away from you, her body\'s warmth suddenly so noticeable. She takes the guitar from you. "Okay, that\'s enough for today. You did really well." She kisses your cheek in a gentle, almost friendly way, yet it still feels pretty intimate. Pulling away from you, she takes the guitar back over and hangs it on the wall, after which she comes back over to sit on the bed with you.');
      scene.actions([
        { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
        { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNushGuitarPlayTogether(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'anush_bedroom';
  (s as any).menu_arg = 'nush_guitar_play_together';
  qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/teach_guitar2.jpg');
  scene.text('"Hey, want to play together?" you ask.');
  scene.text('She smiles. "Yeah, sure." She gets up and gets her guitar off the wall while you sit on the bed and get yours ready. When she comes back, she sits next to you, and you discuss what to play until you find a song you both know and start playing.');
  if (((s as any).instrmusic_lvl ?? 0) < 10  ||  ((s as any).pcs_instrmusic ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You can\'t keep up with her and keep making mistakes, so she quickly stops playing and reaches over to stop you. "How can I put this nicely…" She pauses, then smiles at you. "You fucking suck. Do you even know how to play?"');
    scene.text('You don\'t know how to respond to that. "I\'m learning," you meekly reply.');
    scene.text('She shakes her head. "You\'ve got a long way to go then. You need to practice getting the basics down before trying to play something. When you get better, we can try again. I can show you a few things if you want?"');
    scene.actions([
      { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
      { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
    ]);
  } else {
    if (((s as any).pcs_instrmusic ?? 0) < 40) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.text('You can\'t keep up with her and make a few mistakes. After a few minutes, she reaches over to stop you. "Stop, just stop. How can I put this nicely…" She pauses, then smiles at you. "You\'re not very good. You\'ve got most of the basics down, but you\'re a long way from being ready to jam."');
      scene.text('You sigh. You know you weren\'t playing that well, but you were still having fun. "I\'m getting better!"');
      scene.text('"You still need a lot of practice first. I can also show you a few things if you want?"');
      scene.actions([
        { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
        { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
        { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
      ]);
    } else {
      if (((s as any).pcs_instrmusic ?? 0) < 60) {
        (s as any).minut = ((s as any).minut ?? 0) + 20;
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('You make the occasional mistake a few times and have a little trouble keeping up with her, but you play together for about twenty minutes before she stops. "Not bad. You still need a fair amount of polish, but you\'re getting there," she says with a smile.');
        scene.text('You return her smile. "Thanks. I\'ve been working on it a lot."');
        scene.text('"You still need a fair bit of practice. I can show you a few things if you want?"');
        scene.actions([
          { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
          { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
          { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
        ]);
      } else {
        if (((s as any).pcs_instrmusic ?? 0) < 80) {
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          qspCall(s, 'mood', 'raise', 'tiny');
          scene.text('You don\'t make any mistakes and don\'t have any trouble keeping up with her. She\'s still better than you, but you\'re not that far behind her in skill. You play together for about half an hour before she stops. "Pretty good. Before you know it, you\'ll be as good as I am," she says with a smile.');
          scene.text('You return her smile. "Thanks. I\'ve been working on it a lot."');
          scene.text('"It takes a lot of practice to get this good and stay good. I play for an hour almost every day, not counting when I practice with the boys. I had fun and would like to do it again if you want. There\'s not much I can teach you, but there is a few things if you\'re interested?"');
          scene.actions([
            { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
            { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
            { label: 'Get a lesson', goto: ['anush_bedroom', 'guitar_lesson'] },
          ]);
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 60;
          qspCall(s, 'mood', 'raise', 'small');
          // TODO-QSP: dynamic text: You don''t make any mistakes and don''t have any trouble keeping up with her. In...
          scene.text(`You don't make any mistakes and don't have any trouble keeping up with her. In fact, you feel confident that you outplayed her. You play together for about an hour before she stops. "Damn ${((s as any).pcs_nickname || '')}, I think you're better than I am!" she says with a smile.`);
          scene.text('You return her smile. "Thanks. I\'ve been working hard on trying to master it."');
          scene.text('"Well, it sounds like it was time well spent. I had fun and think we should totally do this again." The two of you talk about your different styles of practicing and any tips or tricks you learned along the way that might help each other.');
          scene.actions([
            { label: 'Get off the bed', goto: ['anush_bedroom', 'anushroom'] },
            { label: 'Chat to her', goto: ['anushkachat', 'chat'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
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
    case 'more_clothes':
      enterMoreClothes(s, scene);
      break;
    case 'chase_naked':
      enterChaseNaked(s, scene);
      break;
    case 'night_stand':
      enterNightStand(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'agreeporn':
      enterAgreeporn(s, scene);
      break;
    case 'guitar':
      enterGuitar(s, scene);
      break;
    case 'bed':
      enterBed(s, scene);
      break;
    case 'nush_guitar':
      enterNushGuitar(s, scene);
      break;
    case 'nush_guitar_teach':
      enterNushGuitarTeach(s, scene);
      break;
    case 'guitar_lesson':
      enterGuitarLesson(s, scene);
      break;
    case 'nush_guitar_play_together':
      enterNushGuitarPlayTogether(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anush_bedroom: LocationDef = {
  name: 'anush_bedroom',
  title: 'Anushka\'s Room',
  region: 'other',
  locclass: 'bedr',
  enter: enter,
};
