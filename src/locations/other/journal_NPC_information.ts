// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRelationship(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_rel = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') === 'm') {
    if (((s as any).temp_npc_rel ?? 0) >= 80) {
      scene.text('He really likes you and considers you one of his best friends.');
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 50) {
        scene.text('He really likes you and considers you to be one of his friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) <= 20) {
          scene.text('He really dislikes you, maybe even hates you. Either way, he can\'t stand you.');
        } else {
          scene.text('You are acquaintances with him, but he doesn\'t seem to care much about you either way.');
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'f') {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('She really likes you and considers you one of her best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('She really likes you and considers you to be one of her friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('She really dislikes you, maybe even hates you. Either way, she can\'t stand you.');
          } else {
            scene.text('You are acquaintances with her, but she doesn\'t seem to care much about you either way.');
          }
        }
      }
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('They really like you and considers you one of their best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('They really like you and considers you to be one of their friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('They really dislikes you, maybe even hates you. Either way, they can\'t stand you.');
          } else {
            scene.text('You are acquaintances with them, but they don\'t seem to care much about you either way.');
          }
        }
      }
    }
  }
  (s as any).temp_npc_rel = undefined;
  scene.build();
}

function enterPast_Relationship(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_rel = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') === 'm') {
    if (((s as any).temp_npc_rel ?? 0) >= 80) {
      scene.text('He really liked you and considered you one of his best friends.');
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 50) {
        scene.text('He liked you and considered you to be one of his friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) <= 20) {
          scene.text('He really disliked you, maybe even hated you. Either way, he couldn\'t stand you.');
        } else {
          scene.text('You were acquaintances with him, but he didn\'t seem to care much about you either way.');
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'f') {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('She really liked you and considered you one of her best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('She liked you and considered you to be one of her friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('She really disliked you, maybe even hated you. Either way, she couldn\'t stand you.');
          } else {
            scene.text('You were acquaintances with her, but she didn\'t seem to care much about you either way.');
          }
        }
      }
    } else {
      if (((s as any).temp_npc_rel ?? 0) >= 80) {
        scene.text('They really liked you and considered you one of their best friends.');
      } else {
        if (((s as any).temp_npc_rel ?? 0) >= 50) {
          scene.text('They liked you and considered you to be one of their friends.');
        } else {
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('They really disliked you, maybe even hated you. Either way, they couldn\'t stand you.');
          } else {
            scene.text('You were acquaintances with them, but they didn\'t seem to care much about you either way.');
          }
        }
      }
    }
  }
  (s as any).temp_npc_rel = undefined;
  scene.build();
}

function enterA28(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/28.jpg');
  scene.text('<center>Vladimir (Stepfather)</center>');
  scene.text('Your stepfather is a greying, slightly flabby man who works as a truck driver. Your mother divorced your biological father and married Vladimir when you were less than a year old. One year after being married, your parents welcomed your little brother Kolka, Vladimir\'s first born child. Kolka is his only child that you know of. When not working, your stepfather can often be found working on his cars in the garage. He gets some time alone to watch TV on Monday evenings.');
  scene.build();
}

function enterA29(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/29.jpg');
  scene.text('<center>Natasha (Mother)</center>');
  scene.text('Your mother was born in Gadukino. She is still quite young and attractive, but you have done the math and know she had Anya when she was only sixteen years old. Your grandmother died in child birth with your mother and your grandfather was killed a few years later in the Afghanistan war. She works at the cafe near the train station.');
  scene.build();
}

function enterA30(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/30.jpg');
  scene.text('<center>Lyudmila Knavs (Aunt)</center>');
  scene.text('Your mother\'s older sister, who works at the local pharmacy and has a live in boyfriend called Olu whom she met while traveling. He is an African man, which has caused more than a few rumors and sour looks at your aunt. Your aunt doesn\'t seem to care though, and if anything, seems to enjoy flaunting her boyfriend in front of others.');
  scene.build();
}

function enterA31(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/32.jpg');
  scene.text('<center>Elena Knavs (Great Grandmother)</center>');
  scene.text('Your great grandma is extremely old and almost never leaves the house. Most of the time, she just sits on her bed watching TV or slowly cleans the house. Having raised your mother and aunt Luda, she is like a grandmother to you and a mother to your mother. She has raised two generations of children and is now content with the peace and quiet of the village.');
  scene.build();
}

function enterA32(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/31.jpg');
  scene.text('<center>Zlatek Knavs (Great Grandfather)</center>');
  scene.text('Your great grandfather is a grumpy old man who is always complaining about the village elders and how they have neglected the village to the point where it is now barely fit to live in. He can walk, but requires a cane, so doesn\'t leave the house unless he has to. Your mother and aunt were raised by your great grandparents.');
  scene.build();
}

function enterA33(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/33.jpg');
  scene.text('<center>Anya (Sister)</center>');
  scene.text('Anya is your older sister, two years your senior, but she still lives at home and shares a bedroom with you. She chose to work at the local supermarket instead of going to university like your mother wanted and spends most of her free time either partying, hanging out with her friends or with her boyfriend Roma.');
  scene.build();
}

function enterA34(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/34.jpg');
  scene.text('<center>Kolka (Brother)</center>');
  scene.text('Kolka is your younger brother, born about a year after you. While you share the same mother, Kolka\'s father is your stepfather. He is a student at the same school as you and enjoys football. When he is not playing football or doing homework, he spends much of his free time hanging out with his friends.');
  scene.build();
}

function enterA35(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/35.jpg');
  scene.text('<center>Mikhail Kuznetsov (Father)</center>');
  scene.text('You\'ve never seen your biological father since your parents divorced, so you have no real memory of him.');
  scene.build();
}

function enterA54(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/54.jpg');
  scene.text('<center>Mikhail "Misha"</center>');
  scene.text('Your neighbor\'s name is Mikhail, but everyone calls him "Uncle Misha". He lives in the apartment across the hall from you, but your mother always forbade you from talking to him by warning you that he used to be a local crime lord and that you shouldn\'t get involved with him. However, he has always been polite and nice to you. He is close friends with your stepfather, but both have been evasive about how they met and became friends.');
  scene.build();
}

function enterA55(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/55.jpg');
  scene.text('<center>Oluuosegun "Olu" Maina</center>');
  scene.text('You don\'t know much about your aunt\'s live-in boyfriend, only that he is from Africa and doesn\'t speak Russian very well. He\'s a very large and muscular man and you know many people in the area that find it disgraceful that your aunt lives with him.');
  scene.build();
}

function enterA112(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/112.jpg');
  scene.text('<center>Sergey Shulgin</center>');
  scene.text('Sergey lives in the same building as you with his son, your childhood friend Vasily. He has gray hair and a small beer belly, but is still hearty looking. His wife, Vasily\'s mother, left when Vasily was young. He has been close friends with your stepfather and mother for as long as you can remember. Oddly enough, he never re-married after being abandoned by his ex-wife.');
  scene.build();
}

function enterA60(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/60.jpg');
  scene.text('<center>Miroslava Maximova</center>');
  scene.build();
}

function enterA63(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/63.jpg');
  scene.text('<center>Mitka Ruslanov</center>');
  scene.build();
}

function enterA61(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/61.jpg');
  scene.text('<center>Kolyamba Rostislav</center>');
  scene.build();
}

function enterA62(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/62.jpg');
  scene.text('<center>Vasyan Makarovich</center>');
  scene.build();
}

function enterA64(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/64.jpg');
  scene.text('<center>Afanasiy Maximov</center>');
  scene.build();
}

function enterA65(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/65.jpg');
  scene.text('<center>Vtialiy Maximov</center>');
  scene.build();
}

function enterA221(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/221.jpg');
  scene.text('<center>Grigory Chekov</center>');
  scene.build();
}

function enterA172(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/172.jpg');
  scene.text('<center>Andrei Saveliev</center>');
  scene.build();
}

function enterA173(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/173.jpg');
  scene.text('<center>Igor Danilovich</center>');
  scene.build();
}

function enterA174(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/174.jpg');
  scene.text('<center>Sergei Kirillov</center>');
  scene.build();
}

function enterA1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/1.jpg');
  scene.text('<center>Dimka Nosov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Dimka Nosov is a cute guy and all the girls adore him. Considered the coolest kid in school, he comes from a fairly wealthy family and is always dressed in expensive stylish clothes. He throws some epic parties that everyone that is anyone tries to get invited to, with even kids from Pushkin sometimes attending. He is the king of the school and everyone wants to either be his friend or hang out with him.');
    } else {
      scene.text('Dimka Nosov is a cute guy and all the girls adore him. Considered the coolest kid in school, the guys tend to either befriend him or loath him. He comes from a fairly wealthy family and is always dressed in expensive stylish clothes. Since Lavrenti started hanging out with the gopniks, Dimka is now even king of the parties. Despite his pleasant smile and friendly demeanor, there are rumors saying he is a sadist bastard that always gets what he wants. He seems to love verbally tormenting the nerds and outcasts when given the chance.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Dimka Nosov is a cute guy and all the girls adore him. He comes from a fairly wealthy family and is always dressed in expensive stylish clothes. He even threw some epic parties back in Pavlovsk that everyone tried to attend. He was the king of the school and everyone wanted to either be his friend or hang out with him, but now he is just a freshman in a totally new environment, though he seems to be doing almost as well as he used to back in school.');
      } else {
        scene.text('Dimka Nosov is a cute guy and all the girls adore him. He was considered the coolest kid in school and the guys tended to either befriend him or loath him. He comes from a fairly wealthy family and is always dressed in expensive stylish clothes. After Lavrenti started hanging out with the gopniks, Dimka became the king of the parties. Despite his pleasant smile and friendly demeanor, there were rumors saying he is a sadist bastard that always gets what he wants. He seems to love verbally tormenting those he considers lesser than him when given the chance.');
      }
      scene.text('He is getting a business degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A1']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/4.jpg');
  scene.text('<center>Igor Kruglov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Igor Kruglov is Dimka\'s best friend and whenever you see one of them, the other is usually not too far away. With a small stature, high pitched voice and pretty face, many consider him to be very feminine. Normally a boy like him would be mocked but his friendship with Dimka, the most popular boy in school, shields him from such abuse. Many wonder about their friendship as they seem to have always been friends; some would even say that Igor is overly attached to Dimka. Other than Dimka, Igor doesn\'t seem to have any other close friends.');
    } else {
      scene.text('Igor Kruglov is Dimka\'s best friend and whenever you see one of them, the other is usually not too far away. With a small stature, high pitched voice and pretty face, many consider him to be very feminine. Many wonder why the cool kids keep him around, but Dimka\'s pull with the other cool kids seems to be enough. Many wonder about their friendship as they seem to have always been friends; some would even say that Igor is overly attached to Dimka. Other than Dimka, Igor doesn\'t seem to have any other close friends.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Igor Kruglov is Dimka\'s best friend and whenever you seen one of them, the other is usually not too far away. With a small stature, high pitched voice and pretty face, many considered him to be very feminine. Normally a boy like him would be mocked but his friendship with Dimka, the most popular boy in school, shielded him from such abuse. Many wonder about their friendship as they seem to have always been friends. Some would even say that Igor is overly attached to Dimka. Other than Dimka, Igor didn\'t seem to have any other close friends.');
      } else {
        scene.text('Igor Kruglov is Dimka\'s best friend and whenever you seen one of them, the other is usually not too far away. With a small stature, high pitched voice and pretty face, many considered him to be very feminine. Many wondered why the cool kids kept him around, but Dimka\'s pull with the other cool kids seemed to be enough. Many wonder about their friendship as they seemed to have always been friends. Some would even say that Igor is overly attached to Dimka. Other than Dimka, Igor didn\'t seem to have any other close friends.');
      }
      scene.text('He is getting a teaching degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A4']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA14(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/14.jpg');
  scene.text('<center>Ekaterina "Katja" Meynold</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Katja Meynold is an attractive and petite girl, a redhead with a keen interest in fashion and cosmetics. She and her twin sister, Vicky, are like two sides of the same coin. As a quiet and sensible girl, Katja is shy and intelligent, but can also be impulsive at times. She is an avid reader and can sometimes be found discussing books with the nerds, but is more often than not found at the disco with her sister.');
    } else {
      scene.text('Katja Meynold is an attractive and petite girl, a redhead with a keen interest in fashion and cosmetics. She and her twin sister, Vicky, are like two sides of the same coin. As a quiet and sensible girl, Katja is shy and intelligent, but is an avid reader and can sometimes be found discussing books with the nerds. She can often be found at the disco with her sister.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Katja Meynold is an attractive and petite girl, a redhead with a keen interest in fashion and cosmetics. She and her twin sister, Vicky, are like two sides of the same coin. As a quiet and sensible girl, Katja is shy and intelligent, but can also be impulsive at times. She is an avid reader and could sometimes be found discussing books with the nerds, but more often than not could be found at the disco with her sister.');
      } else {
        scene.text('Katja Meynold is an attractive and petite girl, a redhead with a keen interest in fashion and cosmetics. She and her twin sister, Vicky, are like two sides of the same coin. As a quiet and sensible girl, Katja is shy and intelligent, she is an avid reader and could sometimes be found discussing books with the nerds, but more often than not could be found at the disco with her sister.');
      }
      scene.text('She is getting a teaching degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A14']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA15(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/15.jpg');
  scene.text('<center>Viktoriya "Vicky" Meynold</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Vicky Meynold is the opposite of her sister. On one side a smart ass and on the other a cheerful girl. She is very sociable, being friends with many of the students in school and is considered to be one of the most popular girls in school. With a passionate love for dancing, Vicky can often be found at the disco with her sister and boyfriend Vanya. A good humored girl, she loves bright and crazy colored clothing. As a child, she took gymnastic lessons and as a result has excellent flexibility and tries out for many of the sports, especially cheerleading. A bit flighty and unpredictable, you never know what thoughts she will come up with next. Logic and reason were never her strong suit as she lives by her emotions and feelings, making decisions from her heart rather than her head. Despite her unpredictable nature, her liveliness and spontaneity make her fun to hang out with.');
    } else {
      scene.text('Vicky Meynold is the opposite of her sister. On one side a smart ass and on the other a cheerful girl. She is very sociable, being friends with many of the students in school and is considered to be one of the most popular girls in school. With a passionate love for dancing, Vicky can often be found at the disco with her sister and good friend Vanya. A good humored girl, she loves bright and crazy colored clothing. She is a member of the cheerleaders and sometimes tries out for other sports. A bit flighty and unpredictable, you never know what thoughts she will come up with next. Logic and reason were never her strong suit as she lives by her emotions and feelings, making decisions from her heart rather than her head. Despite her unpredictable nature, her liveliness and spontaneity make her fun to hang out with.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Vicky Meynold is the opposite of her sister. On one side a smart ass and on the other a cheerful girl. She is very sociable, being friends with many of the students at school and was considered to be one of the most popular girls. With a passionate love for dancing, Vicky was often found at the disco with her sister and boyfriend Vanya. A good humored girl, she loves bright and crazy colored clothing. As a child, she took gymnastic lessons and as a result has excellent flexibility and tried out for many of the sports, especially cheerleading. A bit flighty and unpredictable, you never know what thoughts she will come up with next. Logic and reason were never her strong suit as she lives by her emotions and feelings, making decisions from her heart rather than her head. Despite her flighty and unpredictable nature, her liveliness and spontaneity make her fun to hang out with.');
      } else {
        scene.text('Vicky Meynold is the opposite of her sister. On one side a smart ass and on the other a cheerful girl. She is very sociable, being friends with many of the students at school and was considered to be one of the most popular girls. With a passionate love for dancing, Vicky could often be found at the disco with her sister and good friend Vanya. A good humored girl, she loves bright and crazy colored clothing. She was one of the cheerleaders and even sometimes tries out for sports. A bit flighty and unpredictable, you never know what thoughts she will come up with next. Logic and reason were never her strong suit as she lives by her emotions and feelings, making decisions from her heart rather than her head. Despite her flighty and unpredictable nature, her liveliness and spontaneity make her fun to hang out with.');
      }
      scene.text('She is getting a science degree at the University.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A15']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA17(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/17.jpg');
  scene.text('<center>Irina Devyatova</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Irina Devyatova is a tall and pretty girl. She knows it and takes full advantage of it, using her looks to sweet talk boys and teachers alike to get her way. She has a very arrogant and haughty personality hidden behind her sweet smile. She is the queen of what is in fashion and often berates those she deems to have no sense of style, more than once driving other girls to tears. She is often the center of attention when the popular kids hang out. When needed, she often sweet talks the jocks and gopniks into doing her dirty work, making them think they have a chance with her and then laughing at them behind their back.');
    } else {
      scene.text('Irina Devyatova is a tall and pretty girl. She knows it and takes full advantage of it, using her looks to sweet talk boys and teachers alike to get her way. She has a very arrogant and haughty personality hidden behind her sweet smile. She is the queen of what is in fashion and often berates those she deems to have no sense of style, more than once driving other girls to tears. When needed, she often sweet talks the jocks and gopniks into doing her dirty work.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Irina Devyatova is a tall and pretty girl who knows it and takes full advantage of it, using her looks to get her way. She has a very arrogant and haughty personality hidden behind her sweet smile and considers herself to be the queen of what is in fashion, often berating those she deems to have no sense of style, often driving other girls to tears. When needed, she often sweet talks boys into doing her dirty work, making them think they have a chance with her and then laughing at them behind their back.');
      } else {
        scene.text('Irina Devyatova is a tall and pretty girl who knows it and takes full advantage of it, using her looks to sweet talk boys and professors alike to get her way. She has a very arrogant and haughty personality hidden behind her sweet smile and considers herself to the queen of what is in fashion, often berating those she deems to have no sense of style, often driving other girls to tears. When needed, she often sweet talks boys into doing her dirty work.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A17']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA22(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/22.jpg');
  scene.text('<center>Elžbieta "Bella" Artamonov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Bella Artamonov is the most beautiful girl in school and knows it, which makes her come off as arrogant. You don\'t know her very well since she doesn\'t want to deal with "kids". She seems to consider herself an adult already and the rest of her classmates as being beneath her, too young and childish for her to be around. You\'ve heard some rumors about her only hanging around with people much older than herself.');
    } else {
      scene.text('Bella Artamonov is the most beautiful girl in school and knows it, which makes her come off like a self centered bitch. You don\'t know her at all since she doesn\'t want to deal with "kids", especially those with no sense of style. She seems to consider herself an adult already and the rest of her classmates as being beneath her, too young and childish for her to be around. You\'ve heard some rumors about her only hanging around with people much older than herself.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Bella Artamonov was the most beautiful girl in school and knew it, which made her come off as arrogant. You don\'t know her very well since she didn\'t want to deal with "kids". She seemed to consider herself an adult already and the rest of her classmates as being beneath her, too young and childish for her to be around. There were even rumors about her only hanging around with people much older than herself. Now that she\'s at the university, she seems much happier, like she finally feels like she\'s around others like herself.');
      } else {
        scene.text('Bella Artamonov was the most beautiful girl in school and knew it, which made her come off as a self centered bitch. You don\'t know her at all since she didn\'t want to deal with "kids", especially those with no sense of style. She seemed to consider herself an adult already and the rest of her classmates as being beneath her, too young and childish for her to be around. There were even rumors about her only hanging around with people much older than herself.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A22']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA25(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/25.jpg');
  scene.text('<center>Sonia Ivanko</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 1) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Sonia Ivanko is an ordinary girl and doesn\'t stand out much, other than her sense of fashion. Despite her lack of money or variety of clothing, she has an amazing sense of style, able to pull off many great looks and earning the envy of many other girls at school. Pretty, smart, cheerful and sociable, Sonia loves to party and is rarely in a bad mood. She even has grades nearly as good as most of the nerds.');
        scene.text('She lives with her mother in a small apartment after her father left some time ago. Her mother is a nervous, hysterical and scandalous woman who, when not at work in the garment factory, is often out drinking and flirting with men. She often dreams of having a better life away from her mother, one filled with luxury and sophistication.');
      } else {
        scene.text('Sonia Ivanko is an ordinary girl and doesn\'t stand out much, other than her sense of fashion. Despite her lack of money or variety of clothing, she has an amazing sense of style, able to pull off many great looks and earning the envy of many other girls at school. Pretty, smart, cheerful and sociable, Sonia loves to party and is rarely in a bad mood. She even has grades nearly as good as most of the nerds.');
        scene.text('She lives with her mother in a small apartment after her father left some time ago. There are rumors about her mother being a hysterical and scandalous woman who, when not at work in the garment factory, is often out drinking and flirting with men.');
      }
    } else {
      if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
        scene.text('After a series of slutty incidents that crescendoed at the dance where she got way too drunk, gave Vitek and his buddies a simultaneous blowjob and returned with her face covered in their cum, Sonia\'s reputation has been in shambles. Most of the girls give her the silent treatment, pretending she doesn\'t exist, while the guys treat her like a cheap whore and regularly ask (or sometimes even demand) sex from her, knowing she doesn\'t have the strength to refuse. Many say she has embraced being a cheap slut, happily letting anyone use her, while others say she has started to prostitute herself.');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Sonia Ivanko is an ordinary girl and doesn\'t stand out much, other than her sense of fashion. Despite her lack of money or variety of clothing, she has an amazing sense of style, able to pull off many great looks and earning the envy of many other girls at school. Pretty, smart, cheerful and sociable, Sonia loves to have fun and is rarely in a bad mood. She even had grades nearly as good as most of the nerds.');
        scene.text('After a series of slutty incidents that crescendoed at the dance where she got way too drunk, gave Vitek and his buddies a simultaneous blowjob and returned with her face covered in their cum, Sonia\'s reputation is in shambles. Even at university, most of the girls give her the silent treatment while the guys still treat her like a cheap whore and regularly ask (or sometimes even demand) sex from her.');
      } else {
        scene.text('Sonia Ivanko is an ordinary girl and doesn\'t stand out much, other than her sense of fashion. Despite her lack of money or variety of clothing, she has an amazing sense of style, many of the other popular girls seem jealous of her sense of style. Pretty, smart, cheerful and sociable, Sonia loves to have fun and is rarely in a bad mood. She even had grades nearly as good as most of the nerds.');
        scene.text('After a series of slutty incidents that crescendoed at the dance where she got way too drunk, gave Vitek and his buddies a simultaneous blowjob and returned with her face covered in their cum, Sonia\'s reputation has been in shambles. Even at university, most of the girls give her the silent treatment while the guys still treat her like a cheap whore and regularly ask (or sometimes even demand) sex from her.');
      }
      scene.text('She is getting a fashion degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A25']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA139(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/139.jpg');
  scene.text('<center>Stanislava "Stasya" Pavlov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Stasya Pavlov is a complete bitch to those she considers beneath her, which is the nerds, outcasts, gopniks and even some of the cool kids and jocks. Now that her boyfriend Andrey hangs around with Marcus more than her, she has become jealous of all the time Andrey and Marcus spend together without her, but never says anything about it around them. Instead, she seems to take out her anger on everyone around her, especially the nerds and the outcasts, or complains to her friends Irina and Lizaveta.');
    } else {
      scene.text('Stasya Pavlov is a complete bitch, and always has been one, but now that her boyfriend Andrey hangs around with Marcus more than her, she has become a lot worse. She doesn\'t care for Marcus at all, but never says anything around him or Andrey. Instead, she seems to take out her anger on everyone around her, especially the nerds and the outcasts.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Stasya Pavlov is a complete bitch to those she considers beneath her, which was pretty much everyone, even some of the cool kids and jocks. When her boyfriend Andrey started hanging around with Marcus more than her, she became jealous of all the time Andrey and Marcus spend together without her, but never said anything around Marcus or Andrey. Instead, she took out her anger on everyone around her, especially the nerds and the outcasts, or complained to her friends Irina and Lizaveta.');
      } else {
        scene.text('Stasya Pavlov is a complete bitch, and always has been one, but ever since her boyfriend Andrey started hanging around with Marcus more than her, she became a lot worse. She doesn\'t care for Marcus at all, but never said anything around Marcus or Andrey. Instead, she seemed to take out her anger on everyone around her, especially the nerds and the outcasts.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A139']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA140(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/140.jpg');
  scene.text('<center>Yelizaveta "Lizaveta" Petrov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Lizaveta Petrov wants to know everyone\'s secrets, but is completely incapable of keeping them. Extremely nosy, she is the first to arrive at the scene of any commotion, eager to pry into the details. She is pretty and willing to use her looks to sweet talk boys into sharing any juicy gossip. If you want to know anything about anyone, she is the one to ask. Luckily, she seems more interested in collecting and sharing gossip than using it for her own gain. Though pretty much everyone has respect for what she knows, the few times she has really gone after someone, she has destroyed their status and reputation among their peers. She is often found with Irina and Stasya.');
    } else {
      scene.text('Lizaveta Petrov wants to know everyone\'s secrets, but is completely incapable of keeping them. Extremely nosy, she is the first to arrive at the scene of any commotion, eager to pry into the details. She is pretty and most boys seem torn. They are attracted to her, but are afraid she will tell everyone everything about them and their whole life becomes public knowledge.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Lizaveta Petrov wants to know everyone\'s secrets, but is completely incapable of keeping them. Extremely nosy, she is the first to arrive at the scene of any commotion, eager to pry into the details. She is pretty and willing to use her looks to sweet talk boys into sharing any juicy gossip. If you want to know anything about anyone, she is the one to ask. Luckily, she seems more interested in collecting and sharing gossip than using it for her own gain.');
      } else {
        scene.text('Lizaveta Petrov wants to know everyone\'s secrets, but is completely incapable of keeping them. Extremely nosy, she is the first to arrive at the scene of any commotion, eager to pry into the details. She is pretty and most boys seem torn. They are attracted to her, but are afraid she will tell everyone everything about them and their whole life becomes public knowledge.');
      }
      scene.text('She is getting a psychology degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A140']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA146(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/146.jpg');
  scene.text('<center>Marcus Larson</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Marcus Larson is an African American exchange student who arrived at the school last year and opted to stay for a second year. He does well in school, is a good athlete and seems to really enjoy Russia. He has an eye for Russian girls, always going on about how they are much more beautiful than the girls back home and is a decent looking guy himself which, combined with his exotic looks, accent, athletic ability and different views, has made him popular with the cool kids and jocks. He is friendly and outgoing and if he wasn\'t such close friends with Andrey, he would have likely been a jock instead, as he seems to get along with them even more than most of the cool kids.');
    } else {
      scene.text('Marcus Larson is an African American exchange student who arrived at the school last year and opted to stay for a second year. He does well in school, is a good athlete and seems to really enjoy Russia. He has an eye for Russian girls, always going on about how they are much more beautiful than the girls back home and is a decent looking guy himself which, combined with his exotic looks, accent, athletic ability and different views, has made him popular with the cool kids and jocks. Those same traits and especially his skin color has made him just as unpopular with most of the gopniks, who go out of their way to mess with him or make racist comments. He is friendly and outgoing, and stays with Andrey\'s family, whom he has become close friends with.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Marcus Larson is an African American exchange student who opted to stay for a second year. He did well in school, is a good athlete and seems to really enjoy Russia. He has an eye for Russian girls, always going on about how they are much more beautiful than the girls back home and is a decent looking guy himself which, combined with his exotic looks, accent, athletic ability and different views, made him popular with the cool kids and jocks. He is friendly and outgoing and if he wasn\'t such close friends with Andrey, he would have likely been a jock instead, as he seemed to get along with them even more than most of the cool kids.');
      } else {
        scene.text('Marcus Larson is an African American exchange student who arrived at the Pavlovsk school last year and opted to stay for a second year. He does well in Pavlovsk school, is a good athlete and seems to really enjoy Russia. He has an eye for Russian girls, always going on about how they are much more beautiful than the girls back home and is a decent looking guy himself which, combined with his exotic looks, accent, athletic ability and different views, has made him popular with the cool kids and jocks. Those same traits and especially his skin color made him just as unpopular with most of the gopniks, who went out of their way to mess with him or make racist comments. He is friendly and outgoing, and stays with Andrey\'s family, whom he has become close friends with.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A146']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA147(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/147.jpg');
  scene.text('<center>Andrey Aleksandrov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Andrey Aleksandrov was a late bloomer among the boys. He was small for his age and a bit goofy looking and shy, but his status was boosted when he started dating Staysa. When he did finally grow into his body, he got a lot better looking and more confident. His family recently took part in the exchange student program and were less than happy when the student they sent was an African American, but Andrey didn\'t mind and welcomed Marcus right away. He and Marcus quickly became friends and he tends to use Marcus\' rising popularity to boost his own and in the process, spends a lot less time with Stasya. The school nurse is his aunt.');
    } else {
      scene.text('Andrey Aleksandrov was a late bloomer among the boys. He was small for his age and a bit goofy looking and shy, but despite that he and Staysa started dating. When he did finally grow into his body, he got a lot better looking and now more than a few girls are jealous that Staysa snagged him up. His family recently took part in the exchange student program and rumor is they were less than happy when the student they sent was an African American, but Andrey doesn\'t seem to mind. He and Marcus quickly became friends and he tends to use Marcus\' rising popularity to boost his own and in the process, spends a lot less time with Stasya. The school nurse is his aunt.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('Andrey Aleksandrov was a late bloomer among the boys. Small for his age and a bit goofy looking and shy, his status was boosted when he started dating Staysa. When he did finally grow into his body, he got a lot better looking and more confident. His family took part in the exchange student program and were less than happy when the student they sent was an African American, but Andrey didn\'t mind and welcomed Marcus right away. He and Marcus quickly became friends and he tended to use Marcus\' rising popularity to boost his own and in the process, spent a lot less time with Stasya.');
      } else {
        scene.text('Andrey Aleksandrov was a late bloomer among the boys. Small for his age and a bit goofy looking and shy, his status was boosted when he started dating Staysa. When he did finally grow into his body, he got a lot better looking and more confident. His family took part in the exchange student program and were less than happy when the student they sent was an African American, but Andrey didn\'t mind and welcomed Marcus right away. He and Marcus quickly became friends and he tended to use Marcus\' rising popularity to boost his own and in the process, spent a lot less time with Stasya.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A147']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA148(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/148.jpg');
  scene.text('<center>Mefodiy Utkin</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 1) {
      scene.text('Mefodiy Utkin is reasonably intelligent, with middle-of-the-road grades. He is fairly average looking, but possesses a good sense of humor and comedic timing. He isn\'t too popular, just popular enough to hang among the cool kids, who like his humor. He seems to enjoy mocking or making jokes at the gopniks expense, often in ways they don\'t always understand.');
    } else {
      scene.text('Mefodiy Utkin is reasonably intelligent, with middle-of-the-road grades. He is fairly average looking, but possesses a good sense of humor and timing. He isn\'t too popular, just popular enough to hang among the cool kids, who like his humor.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A148']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Mefodiy Utkin was reasonably intelligent, with middle-of-the-road grades. He was fairly average looking, but possessed a good sense of humor and timing. He wasn\'t too popular, just popular enough to hang among the cool kids, who liked his humor.');
      scene.text('He just packed up and left right after graduation. Rumors are he is traveling around Europe.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A148']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/3.jpg');
  scene.text('<center>Ivan Prokhorov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Ivan Prokhorov is a talented athlete who is able to succeed in any sport he takes part in. He is mostly into boxing and running and spends a lot of training and is regularly away competing. Despite being considered very good looking by the girls in school, he isn\'t very sociable and, other than when he is training, tends to be at home taking care of his siblings while his mother works two jobs. He occasionally hangs out with Fedor and on rare occasions shows up at the disco or some of the jock parties. He is calm and collected by nature, some might even say apathetic.');
    } else {
      scene.text('Ivan Prokhorov is a talented athlete who is able to succeed in any sport he takes part in. He is mostly into boxing and running and spends a lot of training and is regularly away competing. Despite being considered very good looking by the girls in school, he isn\'t very sociable and, other than when he is training, tends to keep to himself, although he occasionally hangs out with Fedor. He is calm and collected by nature, some might even say apathetic.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A3']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Ivan Prokhorov is a talented athlete who was able to succeed in any sport he took part in. He is mostly into boxing and running and was considered to be very good looking by the girls in school. He spends a lot of time training and is regularly away competing. He wasn\'t very sociable and, other than when he is training, tended to keep to himself, although he occasionally hung out with Fedor. He was calm and collected by nature, some might even say apathetic.');
      scene.text('He stayed in Pavlovsk to work and support his family, though he does go to the city to train in boxing and has started boxing professionally.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A3']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/5.jpg');
  scene.text('<center>Fyodor "Fedor" Kozlov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('Fedor Kozlov is a decent athlete. He often trains with his good friend Ivan, but lacks Ivan\'s level of natural talent. He is on all the school\'s sports teams and goes to the community center to train in boxing with Ivan. He is decent looking and often is seen chasing Ivan\'s leftovers.');
      } else {
        scene.text('Fedor Kozlov is a decent athlete. He often trains with his good friend Ivan, but lacks Ivan\'s level of talent. He is a member of all the school\'s sports teams. He is decent looking and often is seen chasing Ivan\'s leftovers.');
      }
    } else {
      if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
        scene.text('Ever since Fedor gave Vasily a blowjob outside the school in front of everyone, he has been an outcast. Fedor claims he was forced and had no choice, but most people think he actually wanted to do it. Many of the boys mock him and even his former friend Ivan ignores him. The girls are nearly as bad, as many of them make fun of him as well. Fedor now mostly keeps to himself and tries to avoid the other students.');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A5']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
        scene.text('Fedor Kozlov is a decent athlete. He often trained with his good friend Ivan, but lacked Ivan\'s level of talent. He was a member of all the school\'s sports teams. He was decent looking and could often be seen chasing Ivan\'s leftovers.');
      } else {
        if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
          scene.text('Ever since Fedor gave Vasily a blowjob outside the school in front of everyone, he has been an outcast. Fedor claimed he was forced and had no choice, but most people thought he actually wanted to do it. Many of the boys mocked him and even his former friend Ivan ignored him. The girls were nearly as bad, as many of them made fun of him as well. Fedor has kept mostly himself and tried to avoid the other students.');
        }
      }
      scene.text('He stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A3']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/8.jpg');
  scene.text('<center>Svyatoslav Voinov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Svyatoslav Voinov is an athletic guy with a very competitive spirit, perhaps the most competitive of the boys. Unfortunately for him, he is not as good of an athlete as Lazar or Ivan and almost always comes in third. He is on every one of the school\'s sports teams and runs track, often competing with Ivan to be the fastest. His other focus is football, where he competes with Lazar to be the best player on the team. He\'s always trying to one up Ivan or Lazar, but rarely manages to beat either of them at anything.');
    } else {
      scene.text('Svyatoslav Voinov is an athletic guy with a very competitive spirit, always engaged in sports one way or another. He\'s always trying to one up Ivan or Lazar, but rarely manages to beat either of them at anything.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A8']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Svyatoslav Voinov is an athletic guy with a very competitive spirit. He ran track and often competed with Ivan to be the fastest boy at school. His other focus was football, as well as many other sports the school offered. He was always trying to one up Ivan or Lazar, but rarely managed to beat either of them at anything.');
      scene.text('He left Pavlovsk to attend a university in Moscow.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A8']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA13(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/13.jpg');
  scene.text('<center>Lariska Gruzdeva</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
        scene.text('Lariska is an athletic girl who is highly insecure, being very dependent on other people\'s opinions of her. Christina used to control her, but ever since you got the upper hand on Christina, Lariska has been a lot more energetic. She has a sparkle in her eyes, and is almost always in a good mood.');
      } else {
        scene.text('Lariska is a very athletic girl, with an exceptional talent for volleyball. However, she has a very weak personality and is very dependent on other people\'s opinions of her. She spends most of her time trying to appease others, especially Christina, whom she considers to be her best friend and can often be seen following her around school.');
      }
    } else {
      if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
        scene.text('Christina used to control her, but ever since you got the upper hand on Christina, Lariska has been a lot more energetic and friendly. She now almost never bullies others in school, though she will join in if some of her fellow jocks start bullying someone. She seems to enjoy playing sports even more than before.');
      } else {
        scene.text('Lariska is a very athletic girl, who is one of the best players on the girls volleyball team. She follows Christina around like a puppy, often doing her bidding and helping Christina bully the other girls and even some of the boys in school.');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
          scene.text('Lariska is an athletic girl who is highly insecure, being very dependent on other people\'s opinions of her. Christina used to control her, but ever since you got the upper hand on Christina, Lariska has been a lot more energetic. She has a sparkle in her eyes, and is almost always in a good mood.');
        } else {
          scene.text('Lariska is a very athletic girl, with an exceptional talent for volleyball. However, she has a very weak personality and is very dependent on other people\'s opinions of her. She spends most of her time trying to appease others, especially Christina, whom she considered to be her best friend and could often be seen following her around school.');
        }
      } else {
        if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
          scene.text('Christina used to control her, but ever since you got the upper hand on Christina, Lariska has been a lot more energetic and friendly. She almost never bullied others at school, though she still joined in if some of her fellow jocks started bullying someone. She seems to enjoy playing sports even more than before.');
        } else {
          scene.text('Lariska is a very athletic girl, who is one of the best players on the girls volleyball team. She followed Christina around like a puppy, often doing her bidding and helping Christina bully the other girls and even some of the boys in school.');
        }
      }
      scene.text('She is getting a nursing degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A13']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA18(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/18.jpg');
  scene.text('<center>Christina Zvereva</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Christina is one of the school\'s best athletes and is the most athletic girl you know. She is very muscular and is a surprisingly skilled fighter, not afraid to start a fight with any of the other girls in school and even some of the boys. She has leadership abilities that, together with her tenacity and intelligence, make her a dominant presence wherever she goes. She is, however, a bully to most of the non-jock girls in school, and enjoys verbally, emotionally and physically tormenting them. She seems to utterly hate you in particular and goes out of her way to torment you when she can.');
    } else {
      scene.text('Christina is one of the school\'s best athletes and is the most athletic girl you know. She is very muscular and rumored to be a good fighter, not afraid to start a fight with any of the other girls in school or even some of the boys. She has leadership abilities that, together with her tenacity and intelligence, make her a dominant presence wherever she goes. She is, however, a bully to most of the non-jock girls in school, and enjoys verbally, emotionally and physically bullying them. She seems to utterly hate you in particular and goes out of her way to torment you when she can.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('Christina was one of the school\'s best athletes and is the most athletic girl you know. She is very muscular and a surprisingly skilled fighter, not afraid to start a fight with any of the other girls at school or even some of the boys. She has leadership abilities that, together with her tenacity and intelligence, make her a dominant presence wherever she goes. She was, however, a bully to most of the non-jock girls in school, verbally, emotionally, and physically tormenting them while tending to dominate most of the other girl jocks. She also seemed to utterly hate you in particular and went out of her way to torment you when she could, a hatred that has carried over into university.');
      } else {
        scene.text('Christina was one of the school\'s best athletes and is the most athletic girl you know. She is very muscular and rumored to be a good fighter, not afraid to start a fight with any of the other girls at school or even some of the boys. She has leadership abilities that, together with her tenacity and intelligence, make her a dominant presence wherever she goes. She was, however, a bully to most of the non-jock girls in school, verbally, emotionally, and physically tormenting the other girls. She also seemed to utterly hate you in particular and went out of her way to torment you when she could, a hatred that has carried over to university.');
      }
      scene.text('She is getting a teaching degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA19(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/19.jpg');
  scene.text('<center>Avelina "Lina" Starov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Lina Starov is a mediocre athlete. While she looks like Christina\'s friend, the right term would be lapdog. She usually does anything Christina wants her to do, as if she doesn\'t have a mind of her own. She is a very pretty girl and if she would think for herself, she would be a lot more popular as most of the other students find her doormat personality off putting.');
    } else {
      scene.text('Lina Starov is a mediocre athlete. While she looks like Christina\'s friend, the right term would be lapdog. She usually does anything Christina wants her to do, often helping her bully others or following her around telling her how great she is. She is a very pretty girl and if she would think for herself, she would be a lot more popular.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('Lina Starov is a mediocre athlete. While she looked like Christina\'s friend, the right term would be Christina\'s lapdog. She usually did anything Christina wanted her to do, as if she didn\'t have a mind of her own. She is a very pretty girl and if she would have thought for herself, she would have been a lot more popular since most of the jocks found her doormat personality off putting.');
      } else {
        scene.text('Lina Starov is a mediocre athlete. While she looked like Christina\'s friend, the right term would be Christina\'s lapdog. She usually did anything Christina wanted her to do, often helping her bully others or following her around telling her how great she is. She is a very pretty girl and if she would have thought for herself, she would have been a lot more popular.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A19']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA23(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/23.jpg');
  scene.text('<center>Albina Barlovskaya</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Albina Barlovskaya comes from a wealthy background and is considered to be one of the most attractive girls in school. A gifted dancer and leader of the cheerleaders at school, she is trying to conduct herself properly as her father is trying to become the town mayor, but she is well known for her short temper and is intimidating if angered, despite her rather petite size. She leads a dance troupe that only the prettiest and best dancers are allowed to join, which comes before all other sports or even hanging out with her fellow jocks. There are several rumors about her going around school, but nobody dares mention them in front of her out of fear of incurring her wrath.');
    } else {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Albina Barlovskaya comes from a wealthy background and is considered to be one of the most attractive girls in school. She is a gifted dancer and cheerleader who is trying to conduct herself properly as her father is trying to become the town mayor, but she is well known for her short temper and is intimidating if angered, despite her rather petite size. She leads a dance troupe that only the prettiest and best dancers are allowed to join. There are several rumors about her going around school, but nobody dares mention them in front of her out of fear of incurring her wrath. She seems to have a particular hatred towards you and your fellow gopniks.');
      } else {
        scene.text('Albina Barlovskaya comes from a wealthy background and is considered to be one of the most attractive girls in school. She is a gifted dancer and cheerleader who is trying to conduct herself properly as her father is trying to become the town mayor, but she is well known for her short temper and is intimidating if angered, despite her rather petite size. She leads a dance troupe that only the prettiest and best dancers are allowed to join. There are several rumors about her going around school, but nobody dares mention them in front of her out of fear of incurring her wrath.');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Albina Barlovskaya comes from a wealthy background and was considered to be one of the most attractive girls in school. She is a gifted dancer and was the leader of the school cheerleaders who was well known for her short and intimidating temper, despite her rather petite size. She also led a dance troupe that only the prettiest and best dancers were allowed to join, but it was disbanded shortly after her father was arrested. There were several rumors about her going around school, but nobody dared mention them in front of her out of fear of incurring her wrath.');
      scene.text('She is getting a nursing degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    scene.text('She considers you more than just a good friend, trusting you more than anyone else.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
      scene.text('She really likes you and enjoys your company.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
        scene.text('She really dislikes you, maybe even hates you, and makes this point well known to you.');
      } else {
        scene.text('You are acquaintances with her, but she doesn\'t seem to care much about you either way.');
      }
    }
  }
  scene.build();
}

function enterA141(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/141.jpg');
  scene.text('<center>Veronika "Ronnie" Sokolov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Veronika Sokolov is sometimes called the "Ice Queen" behind her back for two reasons. One is that she is a very talented ice skater; there is even talk about how she might compete in the next winter Olympics. The other is because she often comes across as cold and indifferent and never lets anyone get close to her. You know that isn\'t true; she can be nice or even sweet at times, she\'s just hyper focused on her skating and rarely has any free time between school and training. She comes from one of the wealthier families in Pavlovsk.');
    } else {
      scene.text('Veronika Sokolov is called the "Ice Queen" by her fellow students behind her back for two reasons. One is that she is a very talented ice skater; there is even talk about how she might compete in the next winter Olympics. The other is because she is cold and indifferent and never lets anyone get close to her. She comes from one of the wealthier families in Pavlovsk.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A141']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Veronika Sokolov was called the "Ice Queen" by her fellow students behind her back for two reasons. One is that she was a very talented ice skater, while the other is because she was cold and indifferent and never let anyone get close to her. She came from one of the wealthier families in Pavlovsk.');
      scene.text('She left to join the Russian Olympic skating team.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A141']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA149(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/149.jpg');
  scene.text('<center>Lazar Pajari</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Lazar Pajari is the school football star and the best athlete in school. He is a central midfielder and the football team captain. He excels in several sports, but his passion is football, at least when he\'s not chasing after girls or, more often than not, being chased by them, whom he happily lets catch him. His status and good looks make him desirable among the girls and he is often seen with several different ones. He has even been seen hanging out with Albina, who mostly ignores the boys in school. Ivan is his biggest competition in sports. While Lazar is the over all better athlete, Ivan is far more focused on boxing than other sports.');
    } else {
      scene.text('Lazar Pajari is the school football star and the best athlete in school. He is a central midfielder and the football team captain. He excels in several sports, but his passion is football, at least when he\'s not chasing after girls or, more often than not, being chased by them, whom he happily lets catch him. His status and good looks make him desirable among the girls and he is often seen with several different ones. Ivan is his biggest competition in sports. While Lazar is the over all better athlete, Ivan is far more focused on boxing than other sports.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('Lazar Pajari was the school\'s football star and best athlete. The former team captain, he is now a midfielder on the university team. He excels in several sports, but his passion is football, at least when he is not chasing after girls or, more often than not, being chased by them, whom he happily lets catch him. His status and good looks make him desirable among the girls and he is often seen with several different ones. He has even been seen hanging out with Albina, who mostly ignored the boys at school.');
      } else {
        scene.text('Lazar Pajari was the school\'s football star and best athlete. The former team captain, he is now a midfielder on the university team. He excels in several sports, but his passion is football, at least when he is not chasing after girls or, more often than not, being chased by them, whom he happily lets catch him. His status and good looks make him desirable among the girls and he is often seen with several different ones.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A149']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA150(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/150.jpg');
  scene.text('<center>Erast Vagin</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Erast Vagin is a huge boy, nearly two meters tall, and is very strong. He is not a looker or even clever, though anyone that has played sports with him knows he\'s not as dumb as he looks; he just seems to have little interest in learning anything outside of sports. He is always polite and a little shy, especially around girls. He often defends girls from being bullied by the other boys, not afraid to stand up to several gopniks at once. However, when he is playing sports he puts his all into winning and nothing else. He is an average athlete and relies on his size and strength to win the day for him. Other than playing sports, he sometimes boxes with Ivan.');
    } else {
      scene.text('Erast Vagin is a huge boy, nearly two meters tall, and is very strong. He is not a looker or even clever, but is always polite and a little shy, especially around girls. He often defends girls from being bullied by the other boys, not afraid to stand up to several gopniks at once. Most of the girls are nice to him because of it, though a few of them love to tease him and make him blush. No one that has seem him play sports would mistake him for a big teddy bear, as he can be ferocious when he chooses to be. He is an average athlete and relies on his size and strength to win the day for him. Other than playing sports, he sometimes boxes with Ivan.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A150']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Erast Vagin was a huge boy, nearly two meters tall, and was very strong. He wasn\'t a looker or even clever, but was always polite and a little shy, especially around girls. He often defended girls from being bullied by the other boys, not afraid to stand up to several gopniks at once. Most of the girls were nice to him because of it, though a few of them loved to tease him and make him blush. No one that seen him play sports would mistake him for a big teddy bear, as he could be ferocious when he chose to be. He was an average athlete and relied on his size and strength to win the day for him. Other than playing sports, he sometimes boxed with Ivan.');
      scene.text('He stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A150']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA165(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/165.jpg');
  scene.text('<center>Vanya Yanka</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Vanya Yanka is a goofy little jock who often plays jokes on his teammates and annoys the coaches. He never goes too far with his jokes and is a good morale booster, so everyone likes him. Despite his easy going attitude, he is a better athlete than most would suspect. When he\'s not training or competing, he spends most of his free time hanging out with Vicky and Katja. He is popular with the girls at school, but only seems to have eyes for Vicky, whom he is dating.');
    } else {
      scene.text('Vanya Yanka is a goofy little jock who often plays jokes at school, even during class. He never goes too far with his jokes, so everyone except the nerds, who tend to be the butt of his jokes, like him. When he\'s not training or competing, he spends most of his free time hanging out with Vicky and Katja. He is popular with the girls at school, but only seems to have eyes for Vicky, whom he is dating.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('Vanya Yanka was a little goofy jock, playing jokes on his teammates and annoying the coaches. He never went too far with his jokes and was a good morale booster, so everyone liked him. Despite his easy going attitude, he was a better athlete than most would suspect. When he wasn\'t training or competing, he spent most of his free time hanging out with Vicky and Katja. He was popular with the girls at school, but only seemed to have eyes for Vicky, whom he is dating.');
      } else {
        scene.text('Vanya Yanka was a little goofy jock who often played jokes at school, even during class. He never went too far with his jokes, so everyone except the nerds, who tended to be the butt of his jokes, liked him. When he wasn\'t training or competing, he spent most of his free time hanging out with Vicky and Katja. He was popular with the girls at school, but only seemed to have eyes for Vicky, whom he is dating.');
      }
      scene.text('He is getting a teaching degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A165']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/2.jpg');
  scene.text('<center>Artem Chebotarev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Artem Chebotarev lives in the same apartment building as you. He is a typical geek, but one could easily be deceived by his looks as he is actually not that bad looking. He does very well in school and is popular with the other geeks, not to mention that, thanks to his looks and good grades, he has befriended a lot of jocks as he is also their tutor outside of school. He is always at D&D night and tends to assume the role of party leader while playing. He is close friends with Petka, but otherwise tries to keep a low profile at school, especially around the cool kids and gopniks.');
    } else {
      scene.text('Artem Chebotarev lives in the same apartment building as you. He is a typical geek, but one could easily be deceived by his looks as he is actually not that bad looking. He does very well in school and is popular with the other geeks, not to mention that, thanks to his looks and good grades, he has befriended a lot of jocks as he is also their tutor outside of school. He otherwise tries to keep a low profile at school, especially around the cool kids and gopniks.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Artem Chebotarev lived in the same apartment building as you. He is a typical geek, but one could easily be deceived by his looks as he is actually not that bad looking. He did very well in school and was popular with the other geeks, not to mention that, thanks to his looks and good grades, he befriended a lot of jocks as he was their tutor outside of school. He is always at D&D night and tends to assume the role of party leader while playing. He is close friends with Petka, but otherwise tried to keep a low profile at school, especially around the cool kids and gopniks.');
      } else {
        scene.text('Artem Chebotarev lived in the same apartment building as you. He is a typical geek, but one could easily be deceived by his looks as he is actually not that bad looking. He did very well in school and was popular with the other geeks, not to mention that, thanks to his looks and good grades, he befriended a lot of jocks as he was their tutor outside of school. He otherwise tried to keep a low profile at school, especially around the cool kids and gopniks.');
      }
      scene.text('He is getting a science degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A2']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/6.jpg');
  scene.text('<center>Petka Klyuyev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Petka Klyuyev is a nerd who usually doesn\'t interact with other students, preferring to only talk to his fellow nerds and mostly spends his time reading. He\'s good friends with Artem and you can usually hear them recommending what to read to each other. He is another of the regulars at the D&D game night. He does very well in school and has been known to sometimes tutor others.');
    } else {
      scene.text('Petka Klyuyev is a nerd who usually doesn\'t interact with other people, mostly spending his time reading. He\'s good friends with Artem and you can usually hear them recommending what to read to each other. He does very well in school and has been known to tutor others. However, he is afraid of his own shadow and is thus an easy target for bullying; other students are known to steal his homework with little effort.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Petka Klyuyev was a nerd who usually didn\'t interact with other students, preferring to only talk to his fellow nerds and mostly spent his time reading. He\'s good friends with Artem and you could usually hear them recommending what to read to each other. He is another of the regulars at the D&D game night. He did very well in school and was known to tutor others.');
      } else {
        scene.text('Petka Klyuyev was a nerd who usually didn\'t interact with other people, mostly spending his time reading. He\'s good friends with Artem and you could usually hear them recommending what to read to each other. He did very well in school and was known to tutor others sometimes. However, he is afraid of his own shadow and was thus an easy target for bullying; other students were known to steal his homework with little effort.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A6']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA12(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/12.jpg');
  scene.text('<center>Julia Milov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Julia is a diligent and silent girl. She\'s very nerdy and doesn\'t really have any friends other than her fellow nerds. She used to be best friends with Natasha, but they had a falling out and she now hangs out with Zinaida, whom she spends a lot of time with. She seems to like keeping to herself, but has sometimes been caught eyeing the other girls while they are changing after gym lessons, likely jealous of them.');
    } else {
      scene.text('Julia is a diligent and silent girl. She\'s very nerdy and doesn\'t really have any friends other than her fellow nerds. She seems to like keeping to herself, but has sometimes been caught eyeing the other girls while they are changing after gym lessons, likely jealous of them.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Julia is a diligent and silent girl. She\'s very nerdy and didn\'t really have any friends other than her fellow nerds. She seemed to like keeping to herself, but was sometimes caught eyeing the other girls while they were changing after gym lessons, likely jealous of them.');
      } else {
        scene.text('Julia is a diligent and silent girl. She\'s very nerdy and didn\'t really have any friends other than her fellow nerds. She seems to like keeping to herself, but was sometimes caught eyeing the other girls while they were changing after gym lessons, likely jealous of them.');
      }
      scene.text('She is getting a science degree at the University.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A12']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA16(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/16.jpg');
  scene.text('<center>Natasha Belova</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Natasha is an excellent student and one of the smartest people in your school. Even though you both live in the same building, her parents are very poor and it shows as Natasha is always dressed in second-hand clothes and can never afford to do anything fun. As a result, she doesn\'t have many friends as most of the other girls shun her or mock her poor clothing. She and Julia used to be best friends, but they recently had a falling out. She rarely attends gaming night or other such events. All of you know is that she dreams of being one of the popular girls and has been seen attending the disco trying to befriend them.');
    } else {
      scene.text('Natasha is an excellent student and one of the smartest people in your school. Even though you both live in the same building, her parents are very poor and it shows as Natasha is always dressed in second-hand clothes and can never afford to do anything fun. As a result, she doesn\'t have many friends as most of the other girls shun her or mock her poor clothing. She doesn\'t even seem to get along with her fellow nerds that much.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Natasha was an excellent student and one of the smartest people in school. Even though you both lived in the same building, her parents are very poor and it showed as Natasha was always dressed in second-hand clothes and could never afford to do anything fun. As a result, she didn\'t have many friends as most of the other girls shunned her or mocked her poor clothing. She rarely attended gaming night or other such events, attending the disco to try and befriend the popular girls instead.');
      } else {
        scene.text('Natasha was an excellent student and one of the smartest people in school. Even though you both lived in the same building, her parents are very poor and it showed as Natasha was always dressed in second-hand clothes and could never afford to do anything fun. As a result, she didn\'t have many friends as most of the other girls shunned her or mocked her poor clothing. She didn\'t even seem to get along with her fellow nerds that much.');
      }
      scene.text('She is getting a fashion degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A16']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA142(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/142.jpg');
  scene.text('<center>Zinaida "Zina" Alkaev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Zinaida Alkaev is a mousey girl who is very plain looking. She never wears makeup, dresses in baggy clothes and barely bothers to brush her hair. She mostly keeps to herself, although she is great at video games and knows all about fantasy, sci-fi, superheroes and other important things. She is always at the D&D game night and loves getting into role playing her character more than most. She always seems eager to attend events when Feofan is present and has recently started hanging out with Julia. The boys seem to love that she knows as much as they do and can beat most of them at the games they play.');
    } else {
      scene.text('Zinaida Alkaev is a mousey girl who is very plain looking. She never wears makeup, dresses in baggy clothes and barely bothers to brush her hair. She mostly keeps to herself playing various games on her phone, although she is fairly popular with the male nerds for reasons unknown to everyone else. She seems to be a complete loner unless she is around her fellow nerds.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Zinaida Alkaev is a mousey girl who is very plain looking. She never wears makeup, dresses in baggy clothes and barely bothers to brush her hair. She mostly kept to herself playing various games on her phone, although she is great at video games and knows all about fantasy, sci-fi, superheroes and other important things. She is always at the D&D game night and loves getting into role playing her character more than most. The boys seemed to love that she knows as much as they do about that stuff and can beat most of them at the games they play.');
      } else {
        scene.text('Zinaida Alkaev is a mousey girl who is very plain looking. She never wears makeup, dresses in baggy clothes and barely bothers to brush her hair. She mostly kept to herself playing various games on her phone, although she was fairly popular with the male nerds for reasons unknown to everyone else. She seemed to be a complete loner unless she was around her fellow nerds.');
      }
      scene.text('She is getting a programing degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A142']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA151(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/151.jpg');
  scene.text('<center>Evgeny Kuznetsov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Evgeny Kuznetsov is the school chess champion and you can always find him at the chess club at the community center. He is shy and very intelligent, but has not shown any interest in girls, or anyone else for that matter. The other nerds often try and get him interested in their activities but it rarely works, although they do support him when he plays competitive chess. His family has confirmed he does indeed have autism.');
    } else {
      scene.text('Evgeny Kuznetsov is the school chess champion and you can always find him at the chess club at the community center. He is shy and very intelligent, but has not shown any interest in girls, or anyone else for that matter. No one would be surprised if he has mild autism.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A151']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Evgeny Kuznetsov was the Pavlovsk school chess champion and you could always find him at the chess club at the community center. He was shy and very intelligent, but didn\'t show any interest in girls, or anyone else for that matter. No one would be surprised if he had mild autism.');
      scene.text('He left to attend the university in Moscow.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A151']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA152(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/152.jpg');
  scene.text('<center>Feofan Krupin</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Feofan Krupin is heavily into science fiction, fantasy and the like. He has a serious love for superheroes and loves talking about them, their movies and comic books all the time. He also has a collection of cosplay outfits of all the most famous superheroes. He does well in school, but not as well as most would expect. He is the most outgoing of the nerds and is not afraid to talk to the other students, even flirting with girls that are way out of his league. He is the Game Master for the weekly game night and often invites others over to play games at his house.');
    } else {
      scene.text('Feofan Krupin is heavily into science fiction, fantasy and the like. He has a serious love for superheroes and loves talking about them, their movies and comic books all the time. He also has a collection of cosplay outfits of all the most famous superheroes. He does well in school, but not as well as most would expect. He is a nerd\'s nerd, but isn\'t bad looking for one. He is the most outgoing of the nerds and is not afraid to talk to the other students, even flirting with girls that are way out of his league. Rumor is that he runs some silly game night for the other nerds, which has earned him the nickname "King of the Nerds".');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Feofan Krupin is heavily into science fiction, fantasy and the like. He has a serious love for superheroes and loves talking about them, their movies and comic books all the time. He also has a collection of cosplay outfits of all the most famous superheroes. He did well in school, but not as well as most would have expected. He was the most outgoing of the nerds and wasn\'t afraid to talk to the other students, even flirting with girls that were way out of his league. He is the Game Master for the weekly game night and often invites others over to play games at his house.');
      } else {
        scene.text('Feofan Krupin is heavily into science fiction, fantasy and the like. He has a serious love for superheroes and loves talking about them, their movies and comic books all the time. He also has a collection of cosplay outfits of all the most famous superheroes. He did well in school, but not as well as most would have expected. He is a nerd\'s nerd, but isn\'t bad looking for one. He was the most outgoing of the nerds and wasn\'t afraid to talk to the other students, even flirting with girls that were way out of his league. Rumor is that he runs some silly game night for the other nerds, which has earned him the nickname "King of the Nerds."');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A152']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA153(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/153.jpg');
  scene.text('<center>Gerasim Vasilyev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Gerasim Vasilyev was confined to a wheelchair after an early childhood accident. He is friendly to everyone, even if most don\'t return the favor. He is well accepted by his fellow nerds and, surprisingly, a few of the jocks and even Anushka, who has been seen defending him from her fellow gopniks. When asked, he tends to be vague about it, saying they just get along. No one seems to know exactly why she likes him, but the rest see him as an easy target to bully and/or force him to do their homework.');
    } else {
      scene.text('Gerasim Vasilyev was confined to a wheelchair after an early childhood accident. He is friendly to everyone, even if most don\'t return the favor. He is well accepted by his fellow nerds and, surprisingly, a few of the jocks and even Anushka, who has been seen defending him from her fellow gopniks. No one seems to know exactly why she likes him, but the rest see him as an easy target to bully and/or force him to do their homework.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Gerasim Vasilyev was confined to a wheelchair after an early childhood accident. He was friendly to everyone, even if most didn\'t return the favor. He was well accepted by his fellow nerds and, surprisingly, a few of the jocks and even Anushka, who was often seen defending him from her fellow gopniks. No one seems to know exactly why she liked him, but the rest seen him as an easy target to bully and/or force him to do their homework.');
      } else {
        scene.text('Gerasim Vasilyev was confined to a wheelchair after an early childhood accident. He was friendly to everyone, even if most didn\'t return the favor. He was well accepted by his fellow nerds and, surprisingly, a few of the jocks and even Anushka, who was often seen defending him from her fellow gopniks. No one seems to know exactly why she liked him, but the rest seen him as an easy target to bully and/or force him to do their homework.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A153']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA240(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/240.jpg');
  scene.text('<center>Natalia "Nat" Pavlova</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    scene.text('Natalia is a very smart, but weak willed girl. She constantly struggles to maintain friendships, but her friendly attitude and eagerness to help others prevents her from being an outcast, despite her not being overly attractive. She is rarely seen hanging out with anyone and fiercely guards a notebook she likes to keep private, never letting anyone read or even touch it.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A240']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Natalia was a very smart, but weak willed girl. She constantly struggled to maintain friendships, but her good looks and eagerness to help others prevented her from being an outcast. Despite this, she was rarely seen hanging out with anyone. She also fiercely guarded a notebook she liked to keep private, never letting anyone read or even touch it.');
      scene.text('She left to attend the university in Moscow.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A240']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/9.jpg');
  scene.text('<center>Vitek Kotov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Vitek Kotov is an aggressive and strong guy who considers himself to be a "gangsta". He is very loud, obnoxious, and not very attractive. Lena is his twin sister, whom he is overly protective of, which has caused more than a fair share of drama. He is the leader of the local gopniks and the rest of the troublemakers tend to respect him. As such, he is the most feared boy in school; even some adults are afraid of him. He is involved with the local organized crime, selling and running drugs for them.');
    } else {
      scene.text('Vitek Kotov is an aggressive and strong guy who considers himself to be a "gangsta". He is very loud, obnoxious, and not very attractive. Lena is his twin sister, whom he is overly protective of, which has caused more than a fair share of drama. He is the leader of the local gopniks and as such is the most feared boy in school. Even some adults are afraid of him. He is rumored to be involved with the local organized crime selling drugs.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A9']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Vitek Kotov was an aggressive and strong guy who considered himself to be a "gangsta". He was very loud, obnoxious, and not very attractive. Lena was his twin sister, whom he was overly protective of, which has caused more than a fair share of drama. He was the leader of the local gopniks and as such was the most feared boy in school. Even some adults were afraid of him. He was even rumored to be involved with the local organized crime selling drugs.');
      scene.text('He stayed in Pavlovsk and got more involved with Vadim Bely.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A9']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterA10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/10.jpg');
  scene.text('<center>Dan Ryzhov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Dan Ryzhov is a tall and skinny guy who has nothing but disdain and contempt for anyone who isn\'t not a gopnik, even feeling that way about some of the gopniks. He is well known, even by gopnik standards, to have no respect for girls and is very stubborn, never letting an argument be. He\'s best friends with Vitek and Vasily, and is considered to be the smartest of the bunch, which most people don\'t consider to be that much of a feat. He is the one that takes Vitek\'s ideas and turns them into plans.');
    } else {
      scene.text('Dan Ryzhov is a tall and skinny guy whose body language screams his disdain and contempt for others. A very stubborn guy who will never let an argument be, he\'s best friends with Vitek and Vasily and is considered to be the smartest of the bunch, which most people don\'t consider to be that much of a feat.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A10']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Dan Ryzhov was a tall and skinny guy whose body language screamed his disdain and contempt for others. He was a very stubborn guy who would never let an argument be and was best friends with Vitek and Vasily. He was considered to be the smartest of the bunch, which most didn\'t consider to be that much of a feat.');
      scene.text('He stayed in Pavlovsk, still hanging out with Vitek.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A10']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/11.jpg');
  scene.text('<center>Vasily Shulgin</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Also known as Shulga, Vasily is always hanging out with Dan and Vitek since they are his best friends. He\'s considered the physically weakest one of the bunch, but is a bit of a prankster and is always making the others laugh, which makes him popular with the gopniks. He was raised by his father after his mother left when he was still an infant and you were good friends when you were younger. As you both drifted towards the gopniks as you grew up, you have remained friends.');
    } else {
      scene.text('Also known as Shulga, Vasily is always hanging out with Dan and Vitek since they are his best friends. He\'s considered the physically weakest one of the bunch, but is a bit of a prankster and is always making the others laugh, which makes him popular with the gopniks. He was raised by his father after his mother left when he was still an infant and you were good friends when you were younger, but have somewhat drifted apart as you grew up.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A11']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Also known as Shulga, Vasily was always hanging out with Dan and Vitek since they were his best friends. He was considered the physically weakest one of the bunch, but was a bit of a prankster and was always making the others laugh, which made him popular with the gopniks. He was raised by his father after his mother left when he was still an infant.');
      scene.text('He stayed in Pavlovsk, still hanging out with Vitek.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A11']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA20(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/20.jpg');
  scene.text('<center>Yalena "Lena" Kotova</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Lena Kotov is Vitek\'s twin sister. Just like her brother, she is one of the local gopniks. She has a chip on her shoulder, so she can be aggressive and unpredictable. She\'s best friends with Lera and they can often be found together smoking in the school\'s restrooms or hanging out after school. Due to her brother scaring off boys, she can sometimes be found making out with Lera. Katyusha has said the only reason Lena is a gopnik is because of her brother.');
    } else {
      scene.text('Lena Kotov is Vitek\'s twin sister. Just like her brother, she is one of the local gopniks. She often bullies the nerds and outcasts, even targeting some of the jocks and cool kids at times. She\'s best friends with Lera and they can often be found together smoking in the school\'s restrooms or hanging out after school.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A20']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Lena Kotov was Vitek\'s twin sister. Just like her brother, she was one of the local gopniks. She often bullied the nerds and outcasts, even targeting some of the jocks and cool kids at times. She was best friends with Lera and they could often be found together smoking in the school\'s restrooms or hanging out after school.');
      scene.text('She stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A20']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA21(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/21.jpg');
  scene.text('<center>Valeria "Lera" Tsarev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Lera Tsarev comes from a poor family. Her father is one of the teachers at school and her cousin Lesco recently moved in with them and attends the same school. She often picks on him and the other outcasts at school, where she hangs out with the gopniks in your class and is liked by most of them. She\'s best friends with Lena and they can often be found together, smoking in the school\'s restrooms or hanging out after school. She is protective of Lena and always follows her lead. Just about all the gopniks are convinced she is a lesbian since it\'s well known that she and Lena hook up fairly regularly and she has been seen making eyes at some of the other pretty gopnik girls. Katyusha seems disgusted by Lera and dislikes her, almost as much as she dislikes Anushka.');
    } else {
      scene.text('Lera Tsarev comes from a poor family. Her father works at the school as a teacher and her cousin Lesco recently moved in with them and attends the same school. She often picks on him and the other outcasts at school, where she hangs out with the gopniks in your class and is liked by them. She\'s best friends with Lena and they can often be found together, smoking in the school\'s restrooms or hanging out after school. She is protective of Lena and always takes her lead. It is rumored that she is a lesbian and is in love with Lena.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A21']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Lera Tsarev came from a poor family. Her father works at the school as a teacher. After her cousin Lesco moved in with them, she often picked on him and the other outcasts at school. She often hung out with the gopniks in your class and was liked by them. She was best friends with Lena and they could often be found together, smoking in the school\'s restrooms or hanging out after school. She was protective of Lena and always took her lead. It was rumored that she is a lesbian and was in love with Lena.');
      scene.text('She stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A21']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA24(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/24.jpg');
  scene.text('<center>Pauline Sebagotulina</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Pauline Sebagotulina is a bit of a wild child, which makes her very unpredictable. She is a bit of a tomboy and mostly hangs out with the gopnik boys since she doesn\'t seem to have a lot of respect for the other gopnik girls, except Katyusha. No one dares to mess with her because she\'s been in more fights than anyone else. She and Katyusha can sometimes be found sparring together and starting fights with others.');
    } else {
      scene.text('Pauline Sebagotulina is a bit of a wild child, which makes her very unpredictable. She often hangs out with the gopniks in your class and is liked by them. No one dares to mess with her because she\'s been in more fights than anyone else. She and Katyusha can sometimes be found sparring together and starting fights with others.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A24']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Pauline Sebagotulina was a bit of a wild child, which made her very unpredictable. She often hung out with the gopniks in your class and was liked by them. No one dared to mess with her because she was in more fights than anyone else. She and Katyusha could sometimes be found sparring together and starting fights with others.');
      scene.text('She stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A24']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA143(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/143.jpg');
  scene.text('<center>Alyona Zima</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Alyona Zima is a hardcore troublemaker. She lives to cause trouble and jumps into any trouble she can find. She can often be found drinking alcohol, and is drunk more often than not. The only person she seems to spend a lot of time around is Anushka, although she occasionally hangs out with the boys from the band or Lena and Lera. It is well known that she carries a knife with her everywhere she goes and isn\'t afraid to use it. She comes from a troubled family as her parents are alcoholic drug addicts. Her father is well known as a bad guy and a bully.');
    } else {
      scene.text('Alyona Zima is a hardcore troublemaker. She lives to cause trouble and jumps into any trouble she can find. She can often be found drinking alcohol, and is drunk more often than not. The only person she seems to spend a lot of time around is Anushka, although she occasionally hangs out with the boys from the band or Lena and Lera. It is well known that she carries a knife with her everywhere she goes, which causes others to give her a wide berth. Rumor is her mother is a drug addict and her father is an alcoholic bully. Most people view her as the apple that didn\'t fall far from the tree.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A143']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Alyona Zima was a hardcore troublemaker. She lived to cause trouble and jumped into any trouble she can find. She could often be found drinking alcohol, and was drunk more often than not. The only person she seemed to spend a lot of time around was Anushka, although she occasionally hung out with the boys from the band or Lena and Lera. It was well known that she carried a knife with her everywhere she went, which caused others to give her a wide berth. Rumor is her mother is a drug addict and her father is an alcoholic bully. Most people viewed her as the apple that didn\'t fall far from the tree.');
      scene.text('She moved to the city and moved in with the boys from the band.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A143']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA144(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/144.jpg');
  scene.text('<center>Anushka "Nush" Konstantinov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Anushka Konstantinov is the lead guitarist and backup vocalist in Radomir\'s band. She and the band often use her good looks to their advantage. She is very adventurous and is very open about her bisexuality. She often teases the boys and even some of the girls at school and is a bit of an exhibitionist. Her main goal in life seems to just be having fun, but she does surprisingly well in school. She doesn\'t seem to be hung up on social standing and seems willing to hang out with or pick on everyone equally, with the exception of Gerasim, whom she has been seen protecting from being bullied, even from the other gopniks. While she has a bit of a reputation as a slut, the reality is that while most of the guys try to get in her panties, few succeed, though she loves making them all think they have a chance.');
    } else {
      scene.text('Anushka Konstantinov is the lead guitarist and backup vocalist in Radomir\'s band. She and the band often use her good looks to their advantage. She is very adventurous and is not shy about her bisexuality. She often teases the boys and even some of the girls at school and is a bit of an exhibitionist. Her main goal in life seems to just be having fun and she likes getting into and causing trouble. She doesn\'t seem to be hung up on social standing and seems willing to hang out with or pick on everyone equally, with the exception of Gerasim, whom she has been seen protecting from being bullied, even from the other gopniks. She has a reputation for being a slut and most wonder why she isn\'t an outcast. A popular rumor is that she is the gopniks\' personal slut and lets all the guys fuck her.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Anushka Konstantinov is the lead guitarist and part time vocalist in Radomir\'s band. She and the band often use her good looks to their advantage. She is very adventurous and is very open about her bisexuality, often teasing boys and girls alike. She is also a bit of an exhibitionist and her main goal in life seems to just be having fun. She did surprisingly well at school, enough to get a scholarship into the university, despite the fact she seemed to like getting into and causing trouble more than studying.');
        scene.text('She doesn\'t seem to be hung up on social standing and seems willing to hang out with or pick on everyone equally. While she had a bit of a reputation as a slut, the reality is most of the guys tried to get in her panties, but few succeeded. She and Radomir used to date, but broke up a little over a year ago. Rumor is that they both cheated on each other.');
      } else {
        scene.text('Anushka Konstantinov is the lead guitarist and part time vocalist in Radomir\'s band. She and the band often use her good looks to their advantage. She is very adventurous and is not shy about her bisexuality, often teasing boys and girls alike. She is also a bit of an exhibitionist and her main goal in life seems to just be having fun. She seemed to like getting into and causing trouble, yet somehow did well enough in school to get into the university.');
        scene.text('She doesn\'t seem to be hung up on social standing and seems willing to hang out with or pick on everyone equally. She had a reputation for being a slut and most wonder why she wasn\'t an outcast. A popular rumor was that she was the gopniks personal slut and let all the guys fuck her. She and Radomir used to date, with many rumors surrounding their break-up.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A144']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA145(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/145.jpg');
  scene.text('<center>Katyusha Maksimov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Katyusha Maksimov is the least attractive girl in school. Her face and body are too masculine, she tends to dress like a boy and never shaves her arm pits or legs. She only seems to care about two things; booze and fighting. She gets her booze by either stealing it or hanging out with the boys. When she "plays" with the boys, it only goes as far as she wants it. While the boys are afraid of Lena\'s brother, she prefers fighting the boys herself, which has left them with a healthy respect for her.');
      scene.text('Regardless of the weather, she practices Sambo in the park every day before school. She often taunts or makes fun of the boxers by claiming "boxing is for pussies" and that real fighters fight without rules. She doesn\'t see herself as a gopnik, but other people consider her one. This doesn\'t bother her because she only cares about the opinion of the people whom earn her respect, which is really hard to do. She mostly hangs out with Arkadi, Roman and Pauline since she has no respect at all for the other gopnik girls, often wondering why they are even allowed to hang out with them.');
    } else {
      scene.text('Katyusha Maksimov is the least attractive girl in school. Her face and body are too masculine, she tends to dress like a boy and never shaves her arm pits or legs. She only seems to care about two things; booze and fighting. Regardless of the weather, she practices Sambo in the park every day before school. She often taunts or makes fun of the boxers by claiming "boxing is for pussies" and that real fighters fight without rules. She doesn\'t see herself as a gopnik, but other people consider her one.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A145']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Katyusha Maksimov was the least attractive girl in school. Her face and body were too masculine and she tended to dress like a boy while never shaving her arm pits or legs. She only seemed to care about two things; booze and fighting. Regardless of the weather, she practiced Sambo in the park every day before school, often taunting or making fun of the boxers by claiming "boxing is for pussies" and that real fighters fight without rules. She didn\'t see herself as a gopnik, but other people considered her one.');
      scene.text('Shortly after graduation, she moved away without telling anyone where she was going. Rumors are she joined the army.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A145']), 'f']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA154(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/154.jpg');
  scene.text('<center>Radomir Popov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Radomir Popov is the lead singer, backup guitarist and leader of a local underground rock/punk band named Pizdá Reydery (Pussy Raiders). He has a great deal of raw talent and is convinced the band is going to become mega stars. In fact, he already acts like they\'re more famous then they are and can thus be arrogant to almost everybody. Some girls adore him because they think he\'s cool or are just groupies that latch onto his limited fame, but he is more than happy to use his small amount of fame to let him use as many girls as he can, as often as he can. He seems to think girls only exist to provide him with sexual gratification.');
    } else {
      scene.text('Radomir Popov is the lead singer, backup guitarist and leader of a local underground rock/punk band named Pizdá Reydery (Pussy Raiders). They are considered fairly talented, but he is more or less an asshole who thinks he should already be a star and thus can be arrogant to almost everybody. Some girls adore him because they think he\'s cool or are just groupies that latch onto his limited fame, but he is more than happy to use his small amount of fame to let him use as many girls as he can, as often as he can. He seems to think girls only exist to provide him with sexual gratification.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A154']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Radomir Popov is the lead singer, backup guitarist and leader of a local underground rock/punk band named Pizdá Reydery (Pussy Raiders). They were considered fairly talented, but he was more or less an asshole who thinks he should already be a star. He could thus be arrogant to almost everybody. Some girls adored him because they think he was cool or were just groupies that latched onto his limited fame, but he was more than happy to use his small amount of fame to let him use as many girls as he can, as often as he can. He seemed to think girls only exist to provide him with sexual gratification. He used to date Anushka, but they broke up over a year ago.');
      scene.text('He and the rest of the band and Alyona rented a place in the city, near the university.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A154']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA155(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/155.jpg');
  scene.text('<center>Lavrenti Romanov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Lavrenti Romanov comes from a wealthy family, an only child with parents that are rarely around. He used to be one of the cool kids, but his attitude abruptly changed when Dimka fucked his girlfriend at the time and they had it out in school where Lavrenti beat Dimka badly, which earned him the respect of the gopniks. Since the fight, he has been hanging with the gopniks and starting to become mean and violent. However, he is more of a follower; the other gopniks tolerate him while he uses his money to supply them with alcohol and drugs, sometimes throwing parties at his house when his parents are away.');
    } else {
      scene.text('Lavrenti Romanov comes from a wealthy family, an only child with parents that are rarely around. He used to be one of the cool kids, but his attitude abruptly changed last year. He became mean and violent, which resulted in him and Dimika having a major falling out. Since the fight, he has been hanging with the gopniks. However, he is more of a follower; the gopniks seem to tolerate him while using him for his money.');
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Lavrenti Romanov comes from a wealthy family. He is an only child with parents that are rarely around. He used to be one of the cool kids, but his attitude abruptly changed when Dimka fucked his girlfriend at the time and they had it out in school where Lavrenti beat Dimka badly, which earned him the respect of the gopniks. After the fight, he started hanging out with the gopniks and became mean and violent. However, he was more of a follower; the other gopniks tolerated him while he used his money to supply them with alcohol and drugs, sometimes throwing parties at his house when his parents were away. He kept his grades up enough to get into the university, which many found surprising.');
      } else {
        scene.text('Lavrenti Romanov comes from a wealthy family. He is an only child with parents that are rarely around. He used to be one of the cool kids, but his attitude abruptly changed a few years ago. He became mean and violent, which resulted in him and Dimika having a major falling out, where he ended up beating Dimka up at school. Since the fight, he started hanging out with the gopniks. However, he is more of a follower; the gopniks seemed to tolerate him while using him for his money. He kept his grades up enough to get into the university, which many found surprising.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A155']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA156(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/156.jpg');
  scene.text('<center>Arkadi Fyodorov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Arkadi Fyodorov is the drummer in Radomir\'s band. His family recently moved from Saint Petersburg to Pavlovsk. He was held back a year at some point, so is a year older than his fellow students. He is very violent when angry, especially with anyone outside the gopniks. When not hanging out with the band, he is often found hanging out with Roman since they both love getting into fights. He is also not shy about reminding everyone how much harder the city is and how lame Pavlovsk is. He often encourages the rest of the band to practice more.');
    } else {
      scene.text('Arkadi Fyodorov is the drummer in Radomir\'s band. His family recently moved from Saint Petersburg to Pavlovsk. He was held back a year at some point, so is a year older than his fellow students. He is very violent when angry, especially with anyone outside the gopniks. He is also not shy about reminding everyone how much harder the city is and how lame Pavlovsk is.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A156']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Arkadi Fyodorov is the drummer in Radomir\'s band. His family moved from Saint Petersburg to Pavlovsk. He was held back a year at some point, so was a year older than his fellow students. He was very violent when angry, especially with anyone outside the gopniks. He was also not shy about reminding everyone how much harder the city is and how lame Pavlovsk was.');
      scene.text('He and the rest of the band and Alyona rented a place in the city, near the university.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A156']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA157(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/157.jpg');
  scene.text('<center>Roman Yakovlev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Roman Yakovlev is an absolute psychopath and everyone but Vitek seems to be afraid of him. Despite his small size, he is muscular. He\'ll start fights out of boredom and has no problems fighting dirty. He enjoys being especially cruel or sadistic to his victims, once smashing a bottle over a guy\'s head and stabbing him in the face with it, simply because he said the guy looked at him funny. He always has a snide remark and is not afraid to speak back to the teachers or other adults. He\'s not doing great at school because he doesn\'t care, but the other gopniks find his attitude amusing and seem to like that he\'s always getting them into fights.');
    } else {
      scene.text('Roman Yakovlev is an absolute psychopath and just about everyone is afraid of him. He\'s one of the smaller students, but he is always causing trouble. He\'ll start fights out of boredom, knowing that the other gopniks will have his back. He enjoys being especially cruel or sadistic to his victims, once smashing a bottle over a guy\'s head and stabbing him in the face with it, simply because he said the guy looked at him funny. He always has a snide remark and is not afraid to speak back to the teachers or other adults. He\'s not doing great at school because he doesn\'t care, but the other gopniks find his attitude amusing and seem to like that he\'s always getting them into funny situations.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A157']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Roman Yakovlev was an absolute psychopath and just about everyone was afraid of him. He was one of the smaller students, but he was always causing trouble. He would start fights out of boredom, knowing that the other gopniks would have his back. He enjoyed being especially cruel or sadistic to his victims. He once smashed a bottle over a guy\'s head and then stabbed him in the face with it, simply because he said the guy looked at him funny. He always had a snide remark and wasn\'t afraid to speak back to the teachers or other adults. He didn\'t do great at school because he didn\'t care, but the other gopniks found his attitude amusing and seemed to like that he was always getting them into funny situations.');
      scene.text('He stayed in Pavlovsk.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A157']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA158(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/158.jpg');
  scene.text('<center>Valentin Bogdanov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Valentin Bogdanov is the bassist in Radomir\'s band and the nicest guy in the band. However, this doesn\'t stop him from using his small amount of fame to seduce and use girls, he is just rarely a dick about it. He and Radomir were the two that first started the band, and his goal is to make enough cash to buy an old American motorbike and ride it across the country. He can often be found hanging out with Anushka\'s dad, working on his motorcycle when he\'s not hanging out with the band or practicing with his bass guitar.');
    } else {
      scene.text('Valentin Bogdanov is the bassist in Radomir\'s band and the nicest guy in the band. However, this doesn\'t stop him from using his small amount of fame to use girls. He is just rarely a dick about it. His goal is to make enough cash from the band to buy an old American motorbike and ride it across the country. He can often be found hanging out with Anushka\'s dad, working on his motorcycle when he\'s not hanging out with the band.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A158']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Valentin Bogdanov is the bassist in Radomir\'s band and the nicest guy in the band. However, this didn\'t stop him from using his small amount of fame to use girls. He was just rarely a dick about it. His goal was to make enough cash from the band to buy an old American motorbike and ride it across the country. He could often be found hanging out with Anushka\'s dad, working on his motorcycle when he wasn\'t hanging out with the band.');
      scene.text('He and the rest of the band and Alyona rented a place in the city, near the university.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A158']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA189(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/189.jpg');
  scene.text('<center>Nikolai Volkov</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('Niko Volkov is clever, confident and well spoken, but is also short tempered. When he\'s not drinking and partying, he is hanging out with Lavrenti, with many saying that he only spends time with Lavrenti for his money. His family used to be fairly wealthy but fell on hard times, their once grand house falling into disrepair.');
    } else {
      scene.text('Niko Volkov is clever, but short tempered. When he\'s not drinking and partying, he is hanging out with Lavrenti, with many saying that he only spends time with Lavrenti for his money. He always seems confident and well spoken, but can sometimes come off as paranoid and unstable.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A189']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Niko Volkov was clever, but short tempered. When he wasn\'t drinking and partying, he was hanging out with Lavrenti, with many saying that he only spent time with Lavrenti for his money. He always seemed confident and well spoken, but could sometimes come off as paranoid and unstable.');
      scene.text('He disappeared just after graduation and no one has seen him since.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A189']), 'm']; enterPast_Relationship(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  scene.build();
}

function enterA7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/7.jpg');
  scene.text('<center>Lesco Tsarev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    scene.text('Everyone bullies Lesco about anything and everything. The nephew of Mr. Tsarev and the cousin of Lera, he has been residing with his uncle after his mother abandoned him for a week on one of her drug binges. He is very ugly and not very sociable. He always seems be sad and just wants to be left alone.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Everyone bullied Lesco about anything and everything. The nephew of Mr. Tsarev and the cousin of Lera, he had been residing with his uncle after his mother abandoned him for a week on one of her drug binges. He is very ugly and not very sociable. He always seems be sad and just wants to be left alone.');
      scene.text('He is getting a teaching degree at the university.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A7']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA159(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/159.jpg');
  scene.text('<center>Petia Alkaev</center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'gschool') {
    scene.text('Petia Alkaev is the class mooch, constantly asking others for food, money and cigarettes. He can\'t take a hint and doesn\'t know the meaning of "personal space", which is made worse by the fact that he seems to be unaware of what soap is. He is an unattractive, overweight loser who makes girls uncomfortable by repeatedly hitting on them, but no matter how many beatdowns he suffers or how many cruel pranks are pulled on him, he never seems to learn his lesson.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'uni') {
      scene.text('Petia Alkaev was the class mooch, constantly asking others for food, money and cigarettes. He couldn\'t take a hint and didn\'t know the meaning of "personal space", which was made worse by the fact that he seems to be unaware of what soap is. He was and still is an unattractive, overweight loser who makes girls uncomfortable by repeatedly hitting on them, but no matter how many beatdowns he suffered or how many cruel pranks were pulled on him, he never seemed to learn his lesson.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'city') {
        scene.text('');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A159']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA77(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/77.jpg');
  scene.text('<center>Tryndin Maximovich</center>');
  scene.text('Tryndin lives in apartment 37 in the residential area of the city and attends the city university.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A77']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA82(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/82.jpg');
  scene.text('<center>Djibril Maina</center>');
  scene.text('Djibril is from Africa. He is the nephew of Oluuosegun, your aunt\'s boyfriend, and lives in the student dorms. He is studying for a business degree.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A82']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA83(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/83.jpg');
  scene.text('<center>Goshi Sidorov</center>');
  scene.text('Goshi has lived in Saint Petersburg his whole life and comes from a well off family; not rich, but not wanting for things. He is used to always getting his way. His mother is a stay at home mom and his dad is a business man. He is going to the university to follow in his father\'s footsteps by getting a business degree.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A83']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA84(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/84.jpg');
  scene.text('<center>Kendra Abiodun</center>');
  scene.text('Kendra is from South Africa and attends the university in Saint Petersburg. She is well known to have a dominant personality, often trying to dominate those around her. Some believe she is a racist as she seems to especially love dominating white students that attend the university. She is studying for a business degree.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A84']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA220(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/220.jpg');
  scene.text('<center>Vika Kirilova</center>');
  scene.text('Vika lives in the dorms and attends the city university. She comes from a town in a truly remote part of Russia. Her family is poor, yet she seems to always have money.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A220']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA242(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Lebogang "Lebo" Kayode</center>');
  scene.text('Djibril\'s closest friend, who is also from Africa. They live on the same floor in the dorm.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A242']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA243(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Ermias Okeke</center>');
  scene.text('Ermias is Lebogang\'s dorm roommate and friend. He is also from Africa.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A243']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA244(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Farai Ihejirika</center>');
  scene.text('Farai is Djibril\'s roommate at the university. He is also from Africa.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A244']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA245(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Haruna Babatunde</center>');
  scene.text('Haruna is close friends with Djibril, having met in their freshman year. He lives on the same floor of the dorms, and is also from Africa.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A245']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA246(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Arendse Idowu</center>');
  scene.text('Arendse is Haruna\'s roommate and friend. They live in the same dorm room and both attend the university. He is also from Africa.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A246']), 'm']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA247(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/247.jpg');
  scene.text('<center>Liliya Lyubimova</center>');
  scene.text('Liliya is a very attractive and rather tall girl. Nobody knows too much about her other than that she is a true tease. She finds amusement in teasing the boys by flashing them or just looking seductively. She refuses any advances made towards her and doesn\'t let anybody to touch or even try to flirt with her. Those who attempt to do so end up receiving a slap or some emasculating comeback line.');
  scene.text('She is getting a teaching degree at the university.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A247']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA267(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/267.jpg');
  scene.text('<center>Amelia "Mia" Radimova</center>');
  scene.text('The elder of the identical twins studying nursing at the university. She and Yana are inseparable and are seen almost everywhere together. Like her younger sister, she enjoys playing pranks on her professors and classmates and causing confusion about who is actually who. Her parents are divorced, but her father pays for her tuition. There is a rumor spreading across campus claiming that he is a porn star.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A267']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA268(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/267.jpg');
  scene.text('<center>Yuliana "Yana" Radimova</center>');
  scene.text('The younger of the identical twins studying nursing at the university. She and Mia are inseparable and are seen almost everywhere together. Like her older sister, she enjoys playing pranks on her professors and classmates and causing confusion about who is actually who. Her parents are divorced, but her father pays for her tuition. There is a rumor spreading across campus claiming that he is a porn star.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).npc_rel ?? 0)?.['A268']), 'f']; enterRelationship(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterA26(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/26.jpg');
  scene.text('<center>Anatoly E. Tsarev</center>');
  scene.text('Anatoly Tsarev is the school\'s math teacher. He\'s a stern teacher who always demands the best out of his students. His daughter, Lera, is a gopnik who is also in your class. He\'s married to Vera, who works at the train station as a ticket saleswoman and as a cleaner in the garment factory. There are rumors that since Lesco, his nephew, has come to live with them, his marriage has been on the rocks.');
  scene.build();
}

function enterA69(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/69.jpg');
  scene.text('<center>Mikhail Nikolaevich</center>');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('Mikhail Nikolaevich is the school\'s assistant P.E. teacher and the coach of both the Pavlovsk girls volleyball team and the football team. He is almost as bad as Mr. Pavlovich with how he treats the students, except he almost worships the best of the jocks by always talking and laughing with them.');
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Mikhail Nikolaevich is the school\'s assistant P.E. teacher and the coach of both the Pavlovsk girls volleyball team and the football team. He was heading towards the big leagues as a footballer and almost became a pro himself, but an injury shattered those dreams. He knows how to push you to get the most of yourself, because he\'s enormously competitive. He always wants to win no matter what. If you want to be a part of the squad, you\'ll have to put in work one way or another.');
    } else {
      scene.text('Mikhail Nikolaevich is the school\'s assistant P.E. teacher and the coach of both the Pavlovsk girls volleyball team and the football team. Some say he almost went pro in some sport, but hurt himself or something and now he tries to live through the glory of his students.');
    }
  }
  scene.build();
}

function enterA128(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/128.jpg');
  scene.text('<center>Makar Vasilyev</center>');
  scene.text('Makar Vasilyev is the school\'s music, art and drama teacher. He is always warm and friendly to all of his students, even those not in his class. He always smiles and will always take the time to listen or help out the students. He is well liked by most of them.');
  scene.build();
}

function enterA129(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/129.jpg');
  scene.text('<center>Serafim Ivanov</center>');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('Serafim Ivanov is the school\'s science and computer science teacher. He\'s a former student of the school that returned to the town after college. He is a no-nonsense teacher that is known to pile on the homework, have many pop quizzes, and is brutal when it comes to his grading. This is to push his students to their greatest potential. He always has time to answer questions or help out if a student has trouble as long as they put in the effort. Many of the other students complain about how he picks on them, but the truth is he only accepts the best from his students and has no sympathy for those that refuse to put in the work.');
  } else {
    scene.text('Serafim Ivanov is the school\'s science and computer science teacher. He\'s a former student of the school that returned to the town after college. He is a no-nonsense, bitter teacher that is known to pile on the homework, have many pop quizzes, and is brutal when it comes to his grading. He is also known to be unfair, giving the nerds a free pass with homework and quizzes, which he never does with the other cliques. He seems to take delight in catching the cool kids, jocks and gopniks out by ridiculing them on how little they know.');
  }
  scene.build();
}

function enterA130(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/130.jpg');
  scene.text('<center>Ilya Yenotin</center>');
  scene.text('Ilya Yenotin is the school\'s literature, language and your homeroom teacher. He does his best at keeping everyone happy, but is disliked by most of the students simply because he comes off as fake. You can often see him running down the halls chasing gopniks, trying to get them to attend class.');
  scene.build();
}

function enterA131(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/131.jpg');
  scene.text('<center>Viktor Pavlovich</center>');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('Viktor Pavlovich is the school\'s P.E. teacher and the coach for the basketball and track teams. He looks like a former weight lifter, having a muscular build with massive upper body strength. He keeps a black painted paddle he calls the "Black Widow" hanging from a wall in his office. He is tough on anyone that isn\'t athletically gifted and often yells at those lacking any athletic ability to the point of bringing them to tears. He is one of the meanest, if not the meanest, teacher in school.');
  } else {
    scene.text('Viktor Pavlovich is the school\'s P.E. teacher and the coach for the basketball and track teams. He looks like a former weight lifter, having a muscular build with massive upper body strength. He keeps a black painted paddle he calls the "Black Widow" hanging from a wall his office. He likes to use it on students, especially female students. He is single and rumored to be a player. You\'ve often seen him with different women around town.');
  }
  scene.build();
}

function enterA132(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/132.jpg');
  scene.text('<center>Ruslan Kuznetsov</center>');
  scene.text('Ruslan Kuznetsov is the school\'s special ed, career advisor and shop teacher. He is also the assistant Headmaster. He is one of the few teachers that\'s passionate about his job and really believes that he can impact on the students future, but he is mostly ignored by everyone, even his colleagues. This has recently seen him start becoming bitter.');
  scene.build();
}

function enterA133(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/133.jpg');
  scene.text('<center>Rolan Matveev</center>');
  if (((s as any).grupTipe ?? 0) === 1) {
    scene.text('Rolan Matveev is the school\'s janitor and handyman. He is quiet and rarely interacts with the students. There is a rumor going around that he got caught rummaging through the girls lockers stealing their panties, while other people say he stalks the girls and photographs them. Regardless if the rumors are true or not, you and the other girls have caught him staring at you when he doesn\'t think you\'re watching and will quickly look away.');
  } else {
    scene.text('Rolan Matveev is the school\'s janitor and handyman. He is quiet and rarely interacts with the students. There is a rumor going around that he got caught rummaging through the girls lockers stealing their panties, while other people say he stalks the girls and photographs them. Regardless if the rumors are true or not, everyone agrees he looks and acts creepy.');
  }
  scene.build();
}

function enterA134(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/134.jpg');
  scene.text('<center>Aleksandrina Volkov</center>');
  scene.text('Aleksandrina Volkov is the school\'s new headmistress. An attractive woman in her mid to late thirties who always dresses well, she was recently brought in to improve the school results after the school was falling behind in the national test scores. She has a reputation for being a strict, but fair disciplinarian. She also comes off as cold and distant to the students.');
  scene.build();
}

function enterA135(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/135.jpg');
  scene.text('<center>Yeva Sokoloff</center>');
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.text('Yeva Sokoloff is the school\'s geography and history teacher. She is the oldest teacher at school and likes to think she is tough, often giving those in her class a hard look. It\'s funny coming from someone that looks like the little old lady in the market. She is quick to send you to the Headmistress if you misbehave too much.');
  } else {
    scene.text('Yeva Sokoloff is the school\'s geography and history teacher. She is the oldest teacher at school and has a very firm no-nonsense teaching style, but can also be very kind and motherly to students that work hard and behave.');
  }
  scene.build();
}

function enterA137(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/137.jpg');
  scene.text('<center>Raven Braakman</center>');
  scene.text('Raven Braakman is the school\'s social sciences and English teacher. Originally from South Africa, she married a Russian man and moved to Pavlovsk, though her husband later died in a car accident. She has a strict teaching style and accepts only the best out of her students, though it\'s rumored that she is a bit of a party goer in her free time.');
  scene.build();
}

function enterA138(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/138.jpg');
  scene.text('<center>Arina Orlov</center>');
  scene.text('Arina Orlov is the school\'s biology and health teacher. She is the youngest teacher at school, having just finished college and this is her first job. She is a bit shy and mousey, which causes many of the students to ignore her during class. She\'s not much older than her students and is very cute, which causes the boys to sometimes pay extra special attention to her during class.');
  scene.build();
}

function enterA136(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/136.jpg');
  scene.text('<center>Olga Aleksandrov</center>');
  scene.text('Olga Aleksandrov is the school\'s nurse, having transferred to your school at the start of the year. All the boys have fallen head over heels over this true beauty, describing her as slim and stacked; the ideal woman.');
  scene.build();
}

function enterA254(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Klim Kovalyov</center>');
  scene.text('Klim is the professor of General Education. He is young and in good shape, with most girls finding him very attractive. He dresses casually and is very friendly with his students, known to let them get away with a lot and join in with the horsing around and joke telling during lectures. He is rumored to be single.');
  scene.build();
}

function enterA255(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Grigorii Pasternak</center>');
  scene.text('Grigorii is the professor of Teaching Methods. He is an older stoic man who dresses well and gets on with things, expecting his students to give their full attention during his lectures. He is happy to help any of his students by answering questions and helping anyone who is in trouble or struggling in his class. He is married and has teenage children.');
  scene.build();
}

function enterA256(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Selena Kovalchuk</center>');
  scene.text('Selena is the professor of Learning Theories. She is in her forties and dresses well, but is extremely nerdy, often talking at length about the latest sci-fi, fantasy, supernatural and superhero TV shows, films and comics. Some say she even attends conventions and cosplay events. She\'s married with a young daughter; her husband is a lecturer in a different department.');
  scene.build();
}

function enterA269(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Raina Marinova</center>');
  scene.text('Raina is the professor of Anatomy and Physiology. Young and attractive, she isn\'t much older than the students she teaches and tries to make her lessons fun and enjoyable. However, she is a bit of a gossip and enjoys talking about both her colleagues and other students during her lectures. There is a popular rumor on campus that she is having an affair with one of the married male professors.');
  scene.build();
}

function enterA270(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Olena Kudelina</center>');
  scene.text('Olena is the professor of Patient Care. A woman past her prime, she has a chip on her shoulder about her now former husband cheating on her with a younger woman and is thus extremely bitter towards both her students and her younger colleagues. She takes particular pleasure in ridiculing and belittling students who don\'t live up to her high standards.');
  scene.build();
}

function enterA271(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Nikita Borisov</center>');
  scene.text('Nikita is the professor who teaches the more mundane nursing subjects. An attractive, but shy and somewhat nerdy man, he makes no effort to make his boring lectures interesting and has a habit of speaking at length and in excessive detail. His students often take advantage of his meek personality to amuse themselves or get away with things.');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Relationship':
      enterRelationship(s, scene);
      break;
    case 'Past_Relationship':
      enterPast_Relationship(s, scene);
      break;
    case 'A28':
      enterA28(s, scene);
      break;
    case 'A29':
      enterA29(s, scene);
      break;
    case 'A30':
      enterA30(s, scene);
      break;
    case 'A31':
      enterA31(s, scene);
      break;
    case 'A32':
      enterA32(s, scene);
      break;
    case 'A33':
      enterA33(s, scene);
      break;
    case 'A34':
      enterA34(s, scene);
      break;
    case 'A35':
      enterA35(s, scene);
      break;
    case 'A54':
      enterA54(s, scene);
      break;
    case 'A55':
      enterA55(s, scene);
      break;
    case 'A112':
      enterA112(s, scene);
      break;
    case 'A60':
      enterA60(s, scene);
      break;
    case 'A63':
      enterA63(s, scene);
      break;
    case 'A61':
      enterA61(s, scene);
      break;
    case 'A62':
      enterA62(s, scene);
      break;
    case 'A64':
      enterA64(s, scene);
      break;
    case 'A65':
      enterA65(s, scene);
      break;
    case 'A221':
      enterA221(s, scene);
      break;
    case 'A172':
      enterA172(s, scene);
      break;
    case 'A173':
      enterA173(s, scene);
      break;
    case 'A174':
      enterA174(s, scene);
      break;
    case 'A1':
      enterA1(s, scene);
      break;
    case 'A4':
      enterA4(s, scene);
      break;
    case 'A14':
      enterA14(s, scene);
      break;
    case 'A15':
      enterA15(s, scene);
      break;
    case 'A17':
      enterA17(s, scene);
      break;
    case 'A22':
      enterA22(s, scene);
      break;
    case 'A25':
      enterA25(s, scene);
      break;
    case 'A139':
      enterA139(s, scene);
      break;
    case 'A140':
      enterA140(s, scene);
      break;
    case 'A146':
      enterA146(s, scene);
      break;
    case 'A147':
      enterA147(s, scene);
      break;
    case 'A148':
      enterA148(s, scene);
      break;
    case 'A3':
      enterA3(s, scene);
      break;
    case 'A5':
      enterA5(s, scene);
      break;
    case 'A8':
      enterA8(s, scene);
      break;
    case 'A13':
      enterA13(s, scene);
      break;
    case 'A18':
      enterA18(s, scene);
      break;
    case 'A19':
      enterA19(s, scene);
      break;
    case 'A23':
      enterA23(s, scene);
      break;
    case 'A141':
      enterA141(s, scene);
      break;
    case 'A149':
      enterA149(s, scene);
      break;
    case 'A150':
      enterA150(s, scene);
      break;
    case 'A165':
      enterA165(s, scene);
      break;
    case 'A2':
      enterA2(s, scene);
      break;
    case 'A6':
      enterA6(s, scene);
      break;
    case 'A12':
      enterA12(s, scene);
      break;
    case 'A16':
      enterA16(s, scene);
      break;
    case 'A142':
      enterA142(s, scene);
      break;
    case 'A151':
      enterA151(s, scene);
      break;
    case 'A152':
      enterA152(s, scene);
      break;
    case 'A153':
      enterA153(s, scene);
      break;
    case 'A240':
      enterA240(s, scene);
      break;
    case 'A9':
      enterA9(s, scene);
      break;
    case 'A10':
      enterA10(s, scene);
      break;
    case 'A11':
      enterA11(s, scene);
      break;
    case 'A20':
      enterA20(s, scene);
      break;
    case 'A21':
      enterA21(s, scene);
      break;
    case 'A24':
      enterA24(s, scene);
      break;
    case 'A143':
      enterA143(s, scene);
      break;
    case 'A144':
      enterA144(s, scene);
      break;
    case 'A145':
      enterA145(s, scene);
      break;
    case 'A154':
      enterA154(s, scene);
      break;
    case 'A155':
      enterA155(s, scene);
      break;
    case 'A156':
      enterA156(s, scene);
      break;
    case 'A157':
      enterA157(s, scene);
      break;
    case 'A158':
      enterA158(s, scene);
      break;
    case 'A189':
      enterA189(s, scene);
      break;
    case 'A7':
      enterA7(s, scene);
      break;
    case 'A159':
      enterA159(s, scene);
      break;
    case 'A77':
      enterA77(s, scene);
      break;
    case 'A82':
      enterA82(s, scene);
      break;
    case 'A83':
      enterA83(s, scene);
      break;
    case 'A84':
      enterA84(s, scene);
      break;
    case 'A220':
      enterA220(s, scene);
      break;
    case 'A242':
      enterA242(s, scene);
      break;
    case 'A243':
      enterA243(s, scene);
      break;
    case 'A244':
      enterA244(s, scene);
      break;
    case 'A245':
      enterA245(s, scene);
      break;
    case 'A246':
      enterA246(s, scene);
      break;
    case 'A247':
      enterA247(s, scene);
      break;
    case 'A267':
      enterA267(s, scene);
      break;
    case 'A268':
      enterA268(s, scene);
      break;
    case 'A26':
      enterA26(s, scene);
      break;
    case 'A69':
      enterA69(s, scene);
      break;
    case 'A128':
      enterA128(s, scene);
      break;
    case 'A129':
      enterA129(s, scene);
      break;
    case 'A130':
      enterA130(s, scene);
      break;
    case 'A131':
      enterA131(s, scene);
      break;
    case 'A132':
      enterA132(s, scene);
      break;
    case 'A133':
      enterA133(s, scene);
      break;
    case 'A134':
      enterA134(s, scene);
      break;
    case 'A135':
      enterA135(s, scene);
      break;
    case 'A137':
      enterA137(s, scene);
      break;
    case 'A138':
      enterA138(s, scene);
      break;
    case 'A136':
      enterA136(s, scene);
      break;
    case 'A254':
      enterA254(s, scene);
      break;
    case 'A255':
      enterA255(s, scene);
      break;
    case 'A256':
      enterA256(s, scene);
      break;
    case 'A269':
      enterA269(s, scene);
      break;
    case 'A270':
      enterA270(s, scene);
      break;
    case 'A271':
      enterA271(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const journal_NPC_information: LocationDef = {
  name: 'journal_NPC_information',
  title: 'He really likes you and considers you one of his best friend',
  region: 'other',
  enter: enter,
};
