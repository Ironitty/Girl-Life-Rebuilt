// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_notes ?? 0)[String((s as any).locArgs?.[0] ?? '')] !== '') {
    (s as any).result = (((s as any).npc_notes ?? 0)?.[((s as any).locArgs?.[0] ?? 0)] ?? 0);
    return;
  } else {
    if (((s as any).npc_notes ?? 0)['A' + String((s as any).locArgs?.[0] ?? '')] !== '') {
      (s as any).result = (((s as any).npc_notes ?? 0)?.['A' + ((s as any).locArgs?.[0] ?? 0)] ?? 0);
      return;
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A1'  ||  String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).result = 'Dimka Nosov is a cute guy and all the girls adore him, he is considered the coolest kid in school. The guys tend to either befriend him or loath him. He comes from a fairly wealthy family, and is always dressed in expensive stylish clothes. Despite his pleasant smile and friendly demeanor, there are rumors saying he is a sadist bastard that always gets what he wants.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A2'  ||  String((s as any).locArgs?.[0] ?? '') === 2) {
    (s as any).result = 'Artem Chebotarev is a typical geek but one could easily be deceived by his looks as he is actually not that bad looking. He does very well in school and is popular with the other geeks, not to mention that thanks to his looks he has befriended a lot of jocks as he is also their tutor outside of school.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A3'  ||  String((s as any).locArgs?.[0] ?? '') === 3) {
    (s as any).result = 'Ivan Prokhorov is a talented athlete who is able to succeed in any sport he takes part of. He is mostly into boxing and running at this time and is considered to be very good looking by the girls in school. He spends a lot of time training and regularly is away competing. He isn\'t very sociable and, other than when he is training, tends to keep to himself, a true lone wolf. He is calm and collected by nature, some might even say apathetic.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A4'  ||  String((s as any).locArgs?.[0] ?? '') === 4) {
    (s as any).result = 'Igor Kruglov is Dimka\'s best friends and whenever you see one of them the other is usually not too far away. With a small stature, high pitched voice, and pretty face many consider him to be very feminine. Normally a boy like him would be mocked but his friendship with Dimka, the most popular boy in school, shields him from such abuse. Many wonder about their friendship as Igor follows Dimka around so often and they seem to have always been friends. Some would even say that Igor is overly attached to Dimka. Other than Dimka though Igor doesn\'t seem to have any other close friends.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A5'  ||  String((s as any).locArgs?.[0] ?? '') === 5) {
    if (((s as any).fedormasha ?? 0) === 1) {
      (s as any).result = 'Ever since Fedor gave Vasily a blowjob in the school courtyard, everyone calls him Masha.';
    } else {
      (s as any).result = 'Fedor Kozlov is a decent athlete. He often trains with his good friend Ivan, but lacks the level of talent that Ivan does have. He is decent looking and often is seen chasing Ivan\'s leftovers.';
    }
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A6'  ||  String((s as any).locArgs?.[0] ?? '') === 6) {
    (s as any).result = 'Petka Klyuyev is a nerd who usually doesn\'t interact with other people, he mostly spends his time reading. He\'s good friends with Artem and you can usually hear them recommending what to read to each other.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A7'  ||  String((s as any).locArgs?.[0] ?? '') === 7) {
    (s as any).result = 'Everyone at school always bullies Lesco about anything and everything. He is the nephew of Mr. Tsarev and cousin of Lera. He resides with the Tsarev\'s after his mother abandoned him for a week on one of her drug binges.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A8'  ||  String((s as any).locArgs?.[0] ?? '') === 8) {
    (s as any).result = 'Svyatoslav Voinov is an athletic guy with a very competitive spirit. He is always engaged in sports one way or another. He runs track and often competes with Ivan to be the fastest boy at school. His other focus is football as well as many other sports the school offers. He\'s always trying to one up Ivan but rarely manages to beat him at anything.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A9'  ||  String((s as any).locArgs?.[0] ?? '') === 9) {
    (s as any).result = 'Vitek Kotov is an aggressive and strong guy, who considers himself a gangsta. He is very loud, obnoxious and not very attractive. Lena is his twin-sister, whom he is overly protective of and that has caused more than a fair share of drama. He is the local leader of the Gopniks and as such is the most feared boy in school. Even some adults are afraid of him. He is even rumored to be involved with the local organized crime selling drugs.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A10'  ||  String((s as any).locArgs?.[0] ?? '') === 10) {
    (s as any).result = 'Dan Ryzhov is a tall and skinny guy, whose body language screams his disdain and contempt for others. He\'s a very stubborn guy who will never let an argument be. He\'s best friends with Vitek and Vasily, and is considered to be the smartest one of the bunch. Though most consider that to not be much of a feat.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A11'  ||  String((s as any).locArgs?.[0] ?? '') === 11) {
    (s as any).result = 'Vasily is always hanging out with Dan and Vitek, who are his best friends. His nickname is Shulga. He\'s physically considered the weakest one of the bunch, but is a bit of a prankster and is always making the other ones laugh. He was raised just by his father, after his mother left when he was still an infant.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A12'  ||  String((s as any).locArgs?.[0] ?? '') === 12) {
    (s as any).result = 'Julia is a diligent and silent girl. She\'s very nerdy, and doesn\'t really have any friends in school. She seems to like keeping to herself, but has sometimes been caught eyeing the other girls while they changing after the gym lessons.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A13'  ||  String((s as any).locArgs?.[0] ?? '') === 13) {
    if (((s as any).christinaQW ?? 0)?.['subpath'] === 2) {
      (s as any).result = 'Lariska is an athletic girl with a weak personality: she\'s very dependent on other people\'s opinions of her. Christina controls her every move, and ever since your fight with Christina, she seems even more down than usual. Even though Mikhail Nikolayevich sees a lot of potential in her, she\'s afraid to go pro.';
    } else {
      if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1) {
        (s as any).result = 'Lariska is an athletic girl, but she is very dependent on other people\'s opinions. Lariska has changed a lot; she has a sparkle in her eyes, and is almost always in a good mood. After joining the team, she quickly got into playing and is now one of the best players.';
      } else {
        (s as any).result = 'Lariska is a very athletic girl, with an exceptional talent for volleyball. She has a very weak personality though, and is very dependent on other people\'s opinions of her. Her best friend is Christina and one can often see Lariska chasing after Christina.';
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A14'  ||  String((s as any).locArgs?.[0] ?? '') === 14) {
    (s as any).result = 'Katja Meynold is a very attractive and petite girl; a redhead with a special interest in fashion and cosmetics. She and her twin sister, Vicky, are like two sides of the same coin. As a quiet and sensible girl, Katja is shy and intelligent, but at times can also be impulsive. She can often be found at the disco with her sister.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A15'  ||  String((s as any).locArgs?.[0] ?? '') === 15) {
    (s as any).result = 'Vicky Meynold is the opposite of her sister, on one side a smart ass and on the other a cheerful girl. She is very sociable, being friends with many of the students in school and is considered to be one of the most popular girls in school. With a passionate love for dancing, Vicky can often be found at the disco with her sister and good friend Vanya Yanka. A good humored girl she loves bright and crazy colored clothing. As a child she took gymnastics and as a result has excellent flexibility. A bit flighty and unpredictable, you never know what thoughts she will come up with next. Logic and reason were never her strong suit as she lives by her emotions and feelings, making decisions from her heart rather than her head more often than not. Despite her flighty and unpredictable nature her liveliness and spontaneity make her fun to hang out with.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A16'  ||  String((s as any).locArgs?.[0] ?? '') === 16) {
    (s as any).result = 'Natasha is an excellent student and one of the smartest people in your school. Even though you are living in the same building, her parents are very poor, and it shows as Natasha is always dressed in second-hand clothes and can never afford to do anything fun. As a result, she doesn\'t have many friends, as most of the other girls shun her or mock her poor clothing.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A17'  ||  String((s as any).locArgs?.[0] ?? '') === 17) {
    (s as any).result = 'Inna Devyatova is a tall and pretty girl, she knows it and takes full advantage of it. She has a very arrogant and haughty personality hidden behind her sweet smile. She often makes the boys do her dirty work.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A18'  ||  String((s as any).locArgs?.[0] ?? '') === 18) {
    if (((s as any).christinaQW ?? 0)?.['subpath'] === 2) {
      (s as any).result = 'Christina is a tall and strong girl. She\'s one of the best athletes your school has to offer. Her leadership skills, combined with her intelligence and tenacity make her a very serious threat to anyone who would challenge her. Unfortunately, you challenged her and lost, and now she owns you.';
    } else {
      (s as any).result = 'Christina is one of your school\'s best athletes, and is the strongest girl you know. She has leadership abilities that, together with her tenacity and intelligence, make her having a dominant presence wherever she goes. She is also more than a bit of a bully to most of the other girls in school.';
    }
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A19'  ||  String((s as any).locArgs?.[0] ?? '') === 19) {
    (s as any).result = 'Lina Starov is a mediocre athlete. She\'s sort of Christina\'s friend… but not really, the right term you would use is Christina\'s lapdog. She usually does anything Christina wants her to do as if she doesn\'t have a mind of her own.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A20'  ||  String((s as any).locArgs?.[0] ?? '') === 20) {
    (s as any).result = 'Lena Kotov is Vitek\'s twin sister. Just like her brother, she is one of the local Gopniks. With a chip on her shoulder, she can be aggressive and unpredictable. She\'s best friends with Lera, and they can often be found together smoking in the school\'s restrooms during school, or hanging out together after school.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A21'  ||  String((s as any).locArgs?.[0] ?? '') === 21) {
    (s as any).result = 'Lera Tsarev comes from a poor family, her father works at the school as a teacher. She often hangs out with the Gopniks in your class and is liked by them. She\'s best friends with Lena, and they can often be found together smoking in the school\'s restrooms, or hanging out together after school. She is protective of Lena and always takes Lena\'s lead.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A22'  ||  String((s as any).locArgs?.[0] ?? '') === 22) {
    (s as any).result = 'Bella Artamonov is a beautiful girl that is really arrogant. You don\'t know her very well as she doesn\'t want to deal with "kids". She seems to consider herself an adult already and the rest of her classmates are beneath her, as being to young and childish. You\'ve heard some rumors about her only hanging around older people.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A23'  ||  String((s as any).locArgs?.[0] ?? '') === 23) {
    (s as any).result = 'Albina Barlovskaya comes from a wealthy family. She always does her best to look and dress well, she is considered to have the best sense of style in school. She is also an excellent dancer. Always conducting herself properly as her father is trying to become the town mayor. Image is everything is probably Albina\'s motto.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A24'  ||  String((s as any).locArgs?.[0] ?? '') === 24) {
    (s as any).result = 'Pauline Sebagotulina is a bit of a wild child making her very unpredictable. She often hangs out with the Gopniks in your class and is liked by them. No one dares to mess with her cause she\'s been in more fights than anyone else.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A25'  ||  String((s as any).locArgs?.[0] ?? '') === 25) {
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
      (s as any).result = 'Ever since Sonia inadvertently got way too drunk and gave five guys including Vitek and his buddies a simultaneous blowjob near the disco, her reputation has been in shambles. The girls in her class all give her the silent treatment, pretending she does not exist. Meanwhile all the guys treat her like a cheap whore and regularly ask (or sometimes even demand) sex from her, knowing she doesn\'t have the strength to say no.';
    } else {
      (s as any).result = 'Sonia Ivanko is an ordinary girl and doesn\'t stand out much. A pretty, smart, and sociable girl Sonia loves to party and is rarely in a bad mood. She lives with her mother in a small apartment after her father left some time ago. Her mother is a nervous, hysterical, and scandalous woman who, when not at work in the Garment Factory, is often out drinking and flirting with men.<b>';
      // TODO-QSP: $result += 'Despite the gloomy atmosphere and constant scandals at home Sonia grew up to be a kind, ...
    }
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A26'  ||  String((s as any).locArgs?.[0] ?? '') === 26) {
    (s as any).result = 'Anatoly Tsarev is the school\'s math teacher. He\'s a stern teacher, who always demands the best out of his students. His daughter Lera is in your class. He\'s married to Vera, who works at the train station as a ticket saleswoman and as a cleaner in the garment factory. There are rumors that since Lesco came to live with them, his marriage has been on the rocks.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A27'  ||  String((s as any).locArgs?.[0] ?? '') === 27) {
    (s as any).result = 'The mother of Lera';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A28'  ||  String((s as any).locArgs?.[0] ?? '') === 28) {
    (s as any).result = 'Your stepfather is a greying, slightly flabby man working as a truck driver. Your mother divorced your biological father and married Vladimir when you were only one year old. You\'ve never seen your biological father since their divorce, and as such you have no real memory of him.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A29'  ||  String((s as any).locArgs?.[0] ?? '') === 29) {
    (s as any).result = 'Your mother Natasha';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A30'  ||  String((s as any).locArgs?.[0] ?? '') === 30) {
    (s as any).result = 'Your mother\'s sister, Lyudmila Knavs';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A31'  ||  String((s as any).locArgs?.[0] ?? '') === 31) {
    (s as any).result = 'Your Great Grandmother from your Mother\'s Father\'s side.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A32'  ||  String((s as any).locArgs?.[0] ?? '') === 32) {
    (s as any).result = 'Your Great Grandfather from your Mother\'s Father\'s side.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A33'  ||  String((s as any).locArgs?.[0] ?? '') === 33) {
    (s as any).result = 'Your older sister';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A34'  ||  String((s as any).locArgs?.[0] ?? '') === 34) {
    (s as any).result = 'Your Brother';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A35'  ||  String((s as any).locArgs?.[0] ?? '') === 35) {
    (s as any).result = 'A Truckdriver';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A36'  ||  String((s as any).locArgs?.[0] ?? '') === 36) {
    (s as any).result = 'A saleswoman at the Boutique';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A37'  ||  String((s as any).locArgs?.[0] ?? '') === 37) {
    (s as any).result = 'A girl met outside of the Boutique';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A38'  ||  String((s as any).locArgs?.[0] ?? '') === 38) {
    (s as any).result = 'An Office Worker';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A39'  ||  String((s as any).locArgs?.[0] ?? '') === 39) {
    (s as any).result = 'Cleaning Job Security Guard';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A41'  ||  String((s as any).locArgs?.[0] ?? '') === 41) {
    (s as any).result = 'Owner of the Roadhouse Cafe.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A42'  ||  String((s as any).locArgs?.[0] ?? '') === 42) {
    (s as any).result = 'Fabiyan Pankratov\'s nephew.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A43'  ||  String((s as any).locArgs?.[0] ?? '') === 43) {
    (s as any).result = 'Dishwasher at the roadhouse cafe.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A46'  ||  String((s as any).locArgs?.[0] ?? '') === 46) {
    (s as any).result = 'Rapist at the lake';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A50'  ||  String((s as any).locArgs?.[0] ?? '') === 50) {
    (s as any).result = 'Supermarket Manager';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A53'  ||  String((s as any).locArgs?.[0] ?? '') === 53) {
    (s as any).result = 'Joe the Plumber';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A54'  ||  String((s as any).locArgs?.[0] ?? '') === 54) {
    (s as any).result = 'Local Crime Lord';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A56'  ||  String((s as any).locArgs?.[0] ?? '') === 56) {
    (s as any).result = 'Your Sister\'s Boyfriend. Brother to Katja and Viktoriya.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A57'  ||  String((s as any).locArgs?.[0] ?? '') === 57) {
    (s as any).result = 'A good friend of your older sister, he throws parties almost every weekend.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A58'  ||  String((s as any).locArgs?.[0] ?? '') === 58) {
    (s as any).result = 'Your Brother\'s Friend.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A59'  ||  String((s as any).locArgs?.[0] ?? '') === 59) {
    (s as any).result = 'Your brother\'s friend.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A60'  ||  String((s as any).locArgs?.[0] ?? '') === 60) {
    (s as any).result = 'Girl from Gadukino. Daughter of Afanasiy';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A61'  ||  String((s as any).locArgs?.[0] ?? '') === 61) {
    (s as any).result = 'Boy from Gadukino';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A62'  ||  String((s as any).locArgs?.[0] ?? '') === 62) {
    (s as any).result = 'Boy from Gadukino';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A63'  ||  String((s as any).locArgs?.[0] ?? '') === 63) {
    (s as any).result = 'He is barely older than you, you remember him from your childhood. You both used to swim in the local river together.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A64'  ||  String((s as any).locArgs?.[0] ?? '') === 64) {
    (s as any).result = 'Mira\'s Father';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A65'  ||  String((s as any).locArgs?.[0] ?? '') === 65) {
    (s as any).result = 'Mira\'s Brother';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A68'  ||  String((s as any).locArgs?.[0] ?? '') === 68) {
    (s as any).result = 'The gynocologist in Pavlovsk';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A69'  ||  String((s as any).locArgs?.[0] ?? '') === 69) {
    (s as any).result = 'Mikhail Nikolaevich is the coach of the Pavlovsk girls volleyball team. Was heading towards the big leagues and almost became a pro himself but an injury shattered those dreams. A bit harsh sometimes because he\'s enormously competitive, always wanting to win no matter what. If you want to be a part of the squad you\'ll have to put in work one way or another.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A70'  ||  String((s as any).locArgs?.[0] ?? '') === 70) {
    (s as any).result = 'Pavlovsk police officer Captain Katalkin';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A71'  ||  String((s as any).locArgs?.[0] ?? '') === 71) {
    (s as any).result = 'A Pavlovsk police officer.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A72'  ||  String((s as any).locArgs?.[0] ?? '') === 72) {
    (s as any).result = 'A Pavlovsk police officer.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A73'  ||  String((s as any).locArgs?.[0] ?? '') === 73) {
    (s as any).result = 'An entrepreneur who owns market stalls in several locations.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A74'  ||  String((s as any).locArgs?.[0] ?? '') === 74) {
    (s as any).result = 'Director of the Burger Bistro';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A75'  ||  String((s as any).locArgs?.[0] ?? '') === 75) {
    (s as any).result = 'Assistant Manager at the Burger Bistro, son of the owner.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A76'  ||  String((s as any).locArgs?.[0] ?? '') === 76) {
    (s as any).result = 'Manager at the Burger Bistro';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A77'  ||  String((s as any).locArgs?.[0] ?? '') === 77) {
    (s as any).result = 'Lives in apartment 37 in the Residential area of the City and attends the city University.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A78'  ||  String((s as any).locArgs?.[0] ?? '') === 78) {
    (s as any).result = 'Personnel Manager of the Burger Bistro.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A79'  ||  String((s as any).locArgs?.[0] ?? '') === 79) {
    (s as any).result = 'Coworker at the Burger Bistro.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A80'  ||  String((s as any).locArgs?.[0] ?? '') === 80) {
    (s as any).result = 'Wife of Anatoly Borisovich.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A81'  ||  String((s as any).locArgs?.[0] ?? '') === 81) {
    (s as any).result = 'Your vocal class instructor who is the DJ from the Disco.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A82'  ||  String((s as any).locArgs?.[0] ?? '') === 82) {
    (s as any).result = 'African University Student, attend the Saint Petersburg University. He is the nephew of Oluuosegun and lives in the student dorms.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A83'  ||  String((s as any).locArgs?.[0] ?? '') === 83) {
    (s as any).result = 'Goshi has live in Saint Petersburg his whole life, he comes from a well off family, not rich but not wanting for things. He is use to always getting his way. His mother is a stay at home mom and his dad is a business man. He is going to the University to follow in his fathers footsteps.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A84'  ||  String((s as any).locArgs?.[0] ?? '') === 84) {
    (s as any).result = 'Kendra is from South Africa and attends the University in Saint Petersburg now. She is well known to have a dominate personality, she often tries to dominate those around her. Some believe she is a racist as she seems to especially love dominate white students that attend the university.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A85'  ||  String((s as any).locArgs?.[0] ?? '') === 85) {
    (s as any).result = 'A black handyman from the office.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A86'  ||  String((s as any).locArgs?.[0] ?? '') === 86) {
    (s as any).result = 'A businessman whose house you clean.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A87'  ||  String((s as any).locArgs?.[0] ?? '') === 87) {
    (s as any).result = 'Cleaning Job Boss';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A88'  ||  String((s as any).locArgs?.[0] ?? '') === 88) {
    (s as any).result = 'Owner of the Disco. A large bellied bald man.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A89'  ||  String((s as any).locArgs?.[0] ?? '') === 89) {
    (s as any).result = 'A dickgirl whom is the barmaid at the barbeque by the lake. She has one testicle in her sack, the other having ascended to become an ovary. Sister of Angela.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A90'  ||  String((s as any).locArgs?.[0] ?? '') === 90) {
    (s as any).result = 'Sister of Eugene, works as a cook at the barbecue by the lake.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A91'  ||  String((s as any).locArgs?.[0] ?? '') === 91) {
    (s as any).result = 'Owns a market stall next to Arthur.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A92'  ||  String((s as any).locArgs?.[0] ?? '') === 92) {
    (s as any).result = 'Owns a market stall next to Arthur.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A93'  ||  String((s as any).locArgs?.[0] ?? '') === 93) {
    (s as any).result = 'Bar Waitress at the Residential Area Cafe.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A94'  ||  String((s as any).locArgs?.[0] ?? '') === 94) {
    (s as any).result = 'Saleswoman of Hassan\'s Stall in the Residential Area marketplace.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A95'  ||  String((s as any).locArgs?.[0] ?? '') === 95) {
    (s as any).result = 'Saleswoman of Abdul\'s Stall';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A96'  ||  String((s as any).locArgs?.[0] ?? '') === 96) {
    (s as any).result = 'A woman who sells pies in the residential area marketplace';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A97'  ||  String((s as any).locArgs?.[0] ?? '') === 97) {
    (s as any).result = 'A Sexually aggressive caucasian from the Residential Area marketplace.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A98'  ||  String((s as any).locArgs?.[0] ?? '') === 98) {
    (s as any).result = 'A Sexually aggressive caucasian from the Residential Area marketplace.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A99'  ||  String((s as any).locArgs?.[0] ?? '') === 99) {
    (s as any).result = 'A Sexually aggressive caucasian from the Residential Area marketplace.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A101'  ||  String((s as any).locArgs?.[0] ?? '') === 101) {
    (s as any).result = 'Store Manager of Pussy Cats';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A102'  ||  String((s as any).locArgs?.[0] ?? '') === 102) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A103'  ||  String((s as any).locArgs?.[0] ?? '') === 103) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A104'  ||  String((s as any).locArgs?.[0] ?? '') === 104) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A105'  ||  String((s as any).locArgs?.[0] ?? '') === 105) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A106'  ||  String((s as any).locArgs?.[0] ?? '') === 106) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A107'  ||  String((s as any).locArgs?.[0] ?? '') === 107) {
    (s as any).result = 'A Gopnik';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A109'  ||  String((s as any).locArgs?.[0] ?? '') === 109) {
    (s as any).result = 'Vladimir\'s asian Driver. Crazy and a master of racing.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A112'  ||  String((s as any).locArgs?.[0] ?? '') === 112) {
    (s as any).result = 'gray hair and a small beer belly, but still hearty looking. Father of Vasily.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A113'  ||  String((s as any).locArgs?.[0] ?? '') === 113) {
    (s as any).result = 'He looks truly intimidating, his entire body covered in criminal gang tattoos. He\'s the local crime lord of Pavlovsk.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A114'  ||  String((s as any).locArgs?.[0] ?? '') === 114) {
    (s as any).result = 'Vadim Bely\'s younger brother. Covered in gang tattoos much like his brother.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A115'  ||  String((s as any).locArgs?.[0] ?? '') === 115) {
    (s as any).result = 'One of Vadim Bely\'s henchmen.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A116'  ||  String((s as any).locArgs?.[0] ?? '') === 116) {
    (s as any).result = 'One of Vadim Bely\'s henchmen.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A118'  ||  String((s as any).locArgs?.[0] ?? '') === 118) {
    (s as any).result = 'Albina\'s father. He is a wealthy local businessman who is seeking election as mayor of Pavlovsk, but there are rumors that he is actually in league with various criminal gangs.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A119'  ||  String((s as any).locArgs?.[0] ?? '') === 119) {
    (s as any).result = 'The owner of the cafe where your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ' works.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A121'  ||  String((s as any).locArgs?.[0] ?? '') === 121) {
    (s as any).result = 'The Man from the park bench.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A122'  ||  String((s as any).locArgs?.[0] ?? '') === 122) {
    (s as any).result = 'Boy from the Stairwell';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A123'  ||  String((s as any).locArgs?.[0] ?? '') === 123) {
    (s as any).result = 'Boy from the Stairwell';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A124'  ||  String((s as any).locArgs?.[0] ?? '') === 124) {
    (s as any).result = 'Boy from the Stairwell';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A125'  ||  String((s as any).locArgs?.[0] ?? '') === 125) {
    (s as any).result = 'Boy from the Stairwell';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A126'  ||  String((s as any).locArgs?.[0] ?? '') === 126) {
    (s as any).result = 'Boy from the Stairwell';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A127'  ||  String((s as any).locArgs?.[0] ?? '') === 127) {
    (s as any).result = 'Shulyov Ivanko is Sonia\'s older step brother, his father marrying her mother when they were both only a few years old. His step mother even changed her and Sonia\'s last name to match his father\'s.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A128'  ||  String((s as any).locArgs?.[0] ?? '') === 128) {
    (s as any).result = 'Makar Vasilyev is the school\'s music, art, and drama teacher. He is always warm and friendly to all of his students and even those not in his class. He always smiles and will always take the time to listen or help out the students. He is well liked by most of the students.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A129'  ||  String((s as any).locArgs?.[0] ?? '') === 129) {
    (s as any).result = 'Serafim Ivanov is the school\'s science and computer Science teacher. A former student of the school that returned to the town after college. He is a no nonsense, bitter teacher, who is known to pile on the homework, have many pop quizzes and is brutal when it comes to his grading. He is also known to be unfair, he gives the nerds a free pass with homework or even quizzes, that he never would do with another student group. He seems to take delight when he catches one of the cool kids, jocks or Gopniks out, ridiculing them on how little they know.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A130'  ||  String((s as any).locArgs?.[0] ?? '') === 130) {
    (s as any).result = 'Ilya Yenotin is the school\'s literature, language and your homeroom teacher. Does his best at keeping everyone happy but is unliked by most of the class, simply because he\'s comes off as fake. You can often see him running down the halls chasing down the Gopniks, trying getting them to attend class.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A131'  ||  String((s as any).locArgs?.[0] ?? '') === 131) {
    (s as any).result = 'Viktor Pavlovich is the school\'s P.E. teacher. He looks like a former weight lifter, having a power build with a massive upper body strength. He keeps a black painted paddle he calls the \'Black Widow\' hanging from his office. He likes to use it on students, especially female students. He is single, and rumored to be a player. You\'ve often seen him with different women around town.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A132'  ||  String((s as any).locArgs?.[0] ?? '') === 132) {
    (s as any).result = 'Ruslan Kuznetsov is the school\'s special ed, career advisor and shop teacher. Is one of the few teachers that\'s passionate about his job. He really believes that he can impact on the students future but is mostly ignored by everyone even his colleagues. Which recently has seen him start becoming bitter.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A133'  ||  String((s as any).locArgs?.[0] ?? '') === 133) {
    (s as any).result = 'Rolan Matveev is the school\'s janitor and handyman. He is quiet and rarely interacts with the students. There is a rumor going around that he got caught as he was rummaging through the girls lockers stealing their panties, while others say he stalks the girls and photographs them. Regardless if the rumors are true or not, everyone agree\'s he looks and acts creepy.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A134'  ||  String((s as any).locArgs?.[0] ?? '') === 134) {
    (s as any).result = 'Aleksandrina Volkov is the school\'s new headmistress. An attractive woman in her mid to late thirties, who always dresses well. She was recently brought in to improve the school results after the school was falling behind in the national test scores. She has a reputation for being a strict disciplinarian, but fair. She also comes off as cold and distant to the students.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A135'  ||  String((s as any).locArgs?.[0] ?? '') === 135) {
    (s as any).result = 'Yeva Sokoloff is the school\'s geography and history teacher. She is the oldest teacher at school and has a very firm no nonsense teaching style, but can also be very kind and motherly to students that work hard and behave.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A136'  ||  String((s as any).locArgs?.[0] ?? '') === 136) {
    (s as any).result = 'Olga Aleksandrov is the school\'s nurse. Miss Aleksandrov just transferred to your school at the start of the year. All the boys have fallen head over heel over this true beauty. The boys describe her as slim and stacked, the ideal woman.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A137'  ||  String((s as any).locArgs?.[0] ?? '') === 137) {
    (s as any).result = 'Raven Braakman is the school\'s social sciences and English teacher. She is from South Africa, she married a Russian man and moved to Pavlovsk, a few years ago her husband died in a car accident. She has a strict teacher style, accepting only the best out of her students. It is rumored she is a bit of a party goer in her free time.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A138'  ||  String((s as any).locArgs?.[0] ?? '') === 138) {
    (s as any).result = 'Arina Orlov is the school\'s biology and health teacher. She is the youngest teacher at school, having just finished college and this is her first job. She is a bit shy and mousey, which makes many of the students to ignore her during class, she has a bit of a problem controlling her classes. She\'s not much older than her students and very cute as well, which causes the boys to pay extra special attention to her.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A139'  ||  String((s as any).locArgs?.[0] ?? '') === 139) {
    (s as any).result = 'Stasya Pavlov is a complete bitch, and always has been one, but now that her boyfriend Andrey seems to hanging around the new exchange student Marcus more than her, she has become a lot worse. She doesn\'t care for Marcus at all, but never says anything around Marcus or Andrey. Instead she seems to take out her anger on everyone around her, but especially the nerds and the outcasts.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A140'  ||  String((s as any).locArgs?.[0] ?? '') === 140) {
    (s as any).result = 'Lizaveta Petrov wants to know everyone\'s secrets, but is completely incapable of keeping them. Extremely nosy, and is the first to arrive at the scene of any commotion, eager to pry into the details. Not unattractive, but most boys avoid her since they don\'t want everything they do to become public knowledge.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A141'  ||  String((s as any).locArgs?.[0] ?? '') === 141) {
    (s as any).result = 'Veronika Sokolov is called the ice queen by her fellow students behind her back, for a couple of reasons. One of the reasons is that she is very talented ice skater, there is even talk about she might compete in the next winter Olympics. The other reason is because she is cold and indifferent. She never lets anyone get close to her. She comes from a rich family.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A142'  ||  String((s as any).locArgs?.[0] ?? '') === 142) {
    (s as any).result = 'Zinaida Alkaev is a mousey girl who is very plain looking. She never wears makeup, dresses in baggy clothes and barely bothers to brush her hair. She mostly keeps to herself, playing various games on her phone, although she is fairly popular with the nerd boys, for reasons unknown to everyone else.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A143'  ||  String((s as any).locArgs?.[0] ?? '') === 143) {
    (s as any).result = 'Alyona Zima is a hardcore troublemaker, she lives to cause trouble or jumps into any trouble she can find. She comes from a fucked up family, her parents are alcoholics and drug addicts, most view her as the apple that didn\'t fall far from the tree. Knowing this the teachers don\'t even bother to try and help her out anymore.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A144'  ||  String((s as any).locArgs?.[0] ?? '') === 144) {
    (s as any).result = 'Anushka Konstantinov is the lead guitarist in Radomir\'s band. She has very strong political views, which she shares in her anarchist lyrics that she writes for the band. She has strong if untrained vocal ability as well, doing some of the singing. She is pretty dominant and can be cruel but not sadistic like some of the other Gopniks. She is very adventurous and not shy about her bisexuality, she is also a bit of an exhibitionist.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A145'  ||  String((s as any).locArgs?.[0] ?? '') === 145) {
    (s as any).result = 'Katyusha Maksimov is pretty athletic, she is not pretty, her face and body are too masculine for that, it doesn\'t help she doesn\'t even try to look feminine at all. She only seems to care about two things, booze and fighting. She gets the booze in any way she can, stealing or smooching from the boys in exchange for favors. Or she buys it from her considerable "war chest" (her father is an army Colonel that is rarely around). When she "plays" with the boys, it only goes as far as she wants it. She is the only girl other than Lena who can do that, but while the boys are afraid of Lena\'s brother, Katyusha prefers fighting the boys herself. She practices Sambo in the park every day before school, regardless of weather. She often taunts or makes fun of the boxers, claiming boxing is for pussies, real fighters fight without rules. She doesn\'t see herself as a gopnik, it\'s others that consider her one. This doesn\'t bother her because she only cares about the opinion of the people whom earn her respect. Which is really hard to do.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A146'  ||  String((s as any).locArgs?.[0] ?? '') === 146) {
    (s as any).result = 'Marcus Larson is an African American exchange student. He does well in school and is fairly athletic. He seems to really enjoy Russia and has an eye for Russian girls, always going on about how they are so much more beautiful, than the girls back home. He is a decent looking guy, combined with his exotic looks, accent, athletic ability, and different views has made him pretty popular with the cool kids and jocks. He is friendly and outgoing, he stays with Andrey\'s family, whom he has become close friends with.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A147'  ||  String((s as any).locArgs?.[0] ?? '') === 147) {
    (s as any).result = 'Andrey Aleksandrov family took part in the exchange student program. Rumor is they were less than happy when the student they sent was an African American, but Andrey doesn\'t seem to mind. He and Marcus quickly became friends, he tends to use Marcus popularity to boost his own and in the process spend a lot less time with his long time girl friend Stasya. The school nurse is his aunt.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A148'  ||  String((s as any).locArgs?.[0] ?? '') === 148) {
    (s as any).result = 'Mefodiy Utkin is reasonably intelligent, with middle-of-the-road grades. Fairly average looking, but possess a good sense of humor and timing. He isn\'t to popular, just popular enough to hang among the cool kids, who like his humor.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A149'  ||  String((s as any).locArgs?.[0] ?? '') === 149) {
    (s as any).result = 'Lazar Pajari is the school football star. He is a central midfielder and team captain. He excels in other sports as well, but his passion is football, least when he is not chasing girls or more often being chased by girls, whom he happily lets catch him. His status make him desirable among the girls and he is often seen with different girls.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A150'  ||  String((s as any).locArgs?.[0] ?? '') === 150) {
    (s as any).result = 'Erast Vagin is a huge boy, he is not a looker or even clever, but is always polite and a little shy. When he is playing sports he changes into a demon, always fighting and is often sent off. He is the most popular kid during the ice hockey season and is often found sparring with Ivan.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A151'  ||  String((s as any).locArgs?.[0] ?? '') === 151) {
    (s as any).result = 'Evgeny Kuznetsov is the school chess champion, and you can always find him at the chess club. He is shy and very intelligent, not showing any interest in girls or anyone else really. No one would be surprised if he has mild autism.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A152'  ||  String((s as any).locArgs?.[0] ?? '') === 152) {
    (s as any).result = 'Feofan Krupin is heavily into science fiction, fantasy, and the like. He is constantly planning on going to some convention and is always wearing a costume. He has a serious love for super heroes and is talking about them, their movies and comic books all the time, not to mention his collection of cosplay outfits of all the most famous super heroes. He does well in school, but not as well as most would expect. He is a nerd\'s nerd but not bad looking in a somewhat effeminate manner.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A153'  ||  String((s as any).locArgs?.[0] ?? '') === 153) {
    (s as any).result = 'Gerasim Vasilyev is confined to a wheelchair, from an early childhood accident. He is kind and nice to everyone, even if most don\'t return the favor. He is well accepted by his fellow nerds and surprisingly a few of the jocks. Most of the rest see him as an easy target to bully and/or force him to do their homework.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A154'  ||  String((s as any).locArgs?.[0] ?? '') === 154) {
    (s as any).result = 'Radomir Popov is the lead singer of a local underground rock/punk band. He is more or less an asshole, thinking he should already be a star, thus being arrogant to almost everybody. Some of the girls obviously adore him, because they think he is cool or are just groupies, latching onto his limited fame. He is more than happy to use his mini fame to let him use as many girls as he can, as often as he can.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A155'  ||  String((s as any).locArgs?.[0] ?? '') === 155) {
    (s as any).result = 'Lavrenti Romanov comes from a wealthy family, an only child with parents that are rarely around. He used to be one of the cool kids, but his attitude abruptly changed last year. He became mean and violent, which lead to him and Dimika having a major falling out at the same time, since the fight he started hanging with the Gopniks. He is more of a follower, and the Gopniks like using his money, while tolerating him.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A156'  ||  String((s as any).locArgs?.[0] ?? '') === 156) {
    (s as any).result = 'Arkadi Fyodorov is the drummer in Radomir\'s band. His family recently moved from the city, to Pavlovsk, he was also held back a year. He is very violent, especially with anyone outside the Gopniks. He is also not shy about reminding everyone how much harder the city is and how lame Pavlovsk is.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A157'  ||  String((s as any).locArgs?.[0] ?? '') === 157) {
    (s as any).result = 'Roman Yakovlev is a psychopath, he\'s one of the smaller kids, but is always causing trouble. He\'ll start fights knowing that the other Gopniks will have his back. He always has a snide remark and is not afraid to speak back to the teachers and other adults. Not doing great at school, not that he cares. The other gopnik\'s find his attitude amusing and seem to like that he\'s always getting them into funny situations.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A158'  ||  String((s as any).locArgs?.[0] ?? '') === 158) {
    (s as any).result = 'Valentin Bogdanov is the bassist in Radomir\'s band, he the nicest guy in the band. This still doesn\'t stop him from using his mini fame with the girls, to use them in return, it is just he is rarely a dick about it. He is popular with the Gopniks because of the band and because he easily looks old enough to buy beer. His goal is to make enough cash from the band to buy an old American motor bike and ride across the country.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A159'  ||  String((s as any).locArgs?.[0] ?? '') === 159) {
    (s as any).result = 'Petia Alkaev is the class mooch, constantly asking others for food, money and cigarettes. He can\'t take a hint and doesn\'t know the meaning of "personal space", which is made worse by the fact that he seems to be unaware of what soap is. He is an unattractive, overweight loser who makes girls uncomfortable by repeatedly hitting on them, but no matter how many beatdowns he suffers or how many cruel pranks are pulled on him, he never seems to learn his lesson.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A160'  ||  String((s as any).locArgs?.[0] ?? '') === 160) {
    (s as any).result = 'Dimka\'s Father. He seems like a nice guy.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A161'  ||  String((s as any).locArgs?.[0] ?? '') === 161) {
    (s as any).result = 'Nicholas\'s Friend.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A162'  ||  String((s as any).locArgs?.[0] ?? '') === 162) {
    (s as any).result = 'Mistress\'s Driver';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A165'  ||  String((s as any).locArgs?.[0] ?? '') === 165) {
    (s as any).result = 'Vanya Yanka is a little goofy jock, playing jokes on his teammates and annoying the coaches. He never goes too far with his jokes and is a good moral booster so most everyone likes him and despite his easy going attitude is a better athlete than most would suspect. When he\'s not training or competing, he spends most of his free time hanging out with Vicky and Katja. Vanya is also popular with the girls at school but only seems to have eyes for Vicky.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A166'  ||  String((s as any).locArgs?.[0] ?? '') === 166) {
    (s as any).result = 'Father Kirill is a kindly man that entered the church as a young man and became a priest. Now in his fifties, he serves the people of Pavlovsk. Not one to feed into the gossip or judge those around him, he keeps an open heart and mind, believing everyone deserves forgiveness and a chance to repent for their sins. He is a good listener, well known for giving sound advice to help people resolve their problems. Even some that don\'t regularly attend church seek him out for advice.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A167'  ||  String((s as any).locArgs?.[0] ?? '') === 167) {
    (s as any).result = '"Maintenance operative"';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A168'  ||  String((s as any).locArgs?.[0] ?? '') === 168) {
    (s as any).result = 'A giant stone Statue of a demon.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A169'  ||  String((s as any).locArgs?.[0] ?? '') === 169) {
    (s as any).result = 'He was a man in his forties, average height, a pretty strong constitution, short dark hair, nose slightly hooked.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A170'  ||  String((s as any).locArgs?.[0] ?? '') === 170) {
    (s as any).result = 'Dima\'s Friend.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A171'  ||  String((s as any).locArgs?.[0] ?? '') === 171) {
    (s as any).result = 'A fisherman in Gadukino.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A172'  ||  String((s as any).locArgs?.[0] ?? '') === 172) {
    (s as any).result = 'A hunter in Gadukino.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A173'  ||  String((s as any).locArgs?.[0] ?? '') === 173) {
    (s as any).result = 'A hunter in Gadukino.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A174'  ||  String((s as any).locArgs?.[0] ?? '') === 174) {
    (s as any).result = 'A hunter in Gadukino.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A175'  ||  String((s as any).locArgs?.[0] ?? '') === 175) {
    (s as any).result = 'Tracker and bodyguard';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A176'  ||  String((s as any).locArgs?.[0] ?? '') === 176) {
    (s as any).result = 'Young mage and private investigator';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A177'  ||  String((s as any).locArgs?.[0] ?? '') === 177) {
    (s as any).result = 'Rude fisherman from the lake.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A178'  ||  String((s as any).locArgs?.[0] ?? '') === 178) {
    (s as any).result = 'A woman who looks at you with a twinkle in her eye.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A179'  ||  String((s as any).locArgs?.[0] ?? '') === 179) {
    (s as any).result = 'CEO of the Office of Engineering companies';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A180'  ||  String((s as any).locArgs?.[0] ?? '') === 180) {
    (s as any).result = 'Scorpion.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A181'  ||  String((s as any).locArgs?.[0] ?? '') === 181) {
    (s as any).result = 'Cashier at the sexshop.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A182'  ||  String((s as any).locArgs?.[0] ?? '') === 182) {
    (s as any).result = 'Conan.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A183'  ||  String((s as any).locArgs?.[0] ?? '') === 183) {
    (s as any).result = 'Hidan.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A184'  ||  String((s as any).locArgs?.[0] ?? '') === 184) {
    (s as any).result = 'The college Botany and Chemistry teacher. She\'s a little shy.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A185'  ||  String((s as any).locArgs?.[0] ?? '') === 185) {
    (s as any).result = 'An invalid.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A186'  ||  String((s as any).locArgs?.[0] ?? '') === 186) {
    (s as any).result = 'Dr. Pavlov appears to be a few years over sixty, slightly overweight, but still fit. He still looks charming, but in a grandfatherly way. His hair, or what is left of it is gray, but thinning. He usually wears a dress shirt and sharply ironed pants, with dress shoes. He is always helpful and has a lot of patience, which likely had been helpful to raising five children.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A187'  ||  String((s as any).locArgs?.[0] ?? '') === 187) {
    (s as any).result = 'Erotic model';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A188'  ||  String((s as any).locArgs?.[0] ?? '') === 188) {
    (s as any).result = 'Bely\'s cousin';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A189'  ||  String((s as any).locArgs?.[0] ?? '') === 189) {
    (s as any).result = 'Nikolai Volkov is suave and clever but always finds ways of getting into trouble. When he is not drinking and partying then he is hanging out with Roman Yakovlev. Many students say that he only keeps Roman around as his own personal attack dog. Niko always seems confident, well spoken and knows how to get what he wants but when angered, Niko can become erratic and unstable.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A190'  ||  String((s as any).locArgs?.[0] ?? '') === 190) {
    (s as any).result = 'Yurik Volkov is a burly biker, who spends most of his time customizing, upgrading and tuning his motorcycle when he is not on the road. He is the older brother of Nikolai Volkov. Yurik is 5 years older then Niko, and tries his best to advise, and provide a future for his brother even though Niko continuously pushes him away, still blaming him for their sister\'s death.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A191'  ||  String((s as any).locArgs?.[0] ?? '') === 191) {
    (s as any).result = 'Your classmate Natasha\'s mother, Isabella Belova.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A192'  ||  String((s as any).locArgs?.[0] ?? '') === 192) {
    (s as any).result = 'High dining exhibitionist';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A193'  ||  String((s as any).locArgs?.[0] ?? '') === 193) {
    (s as any).result = 'A former steel plant worker who is almost two meters tall and built like a tank. Divorced with twin teenage daughters, he started doing porn a few years ago to save up money for their university studies, but chose to stay since it earned him far more money than any other job could offer.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A194'  ||  String((s as any).locArgs?.[0] ?? '') === 194) {
    (s as any).result = 'Sergei is smooth and charming when filming, but is a complete asshole off camera. He is so passionate about anal sex that the studio have given him his own video series about fucking girls in the ass.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A195'  ||  String((s as any).locArgs?.[0] ?? '') === 195) {
    (s as any).result = 'In his early 50s, Egor is by far the oldest actor at the porn studio. Paid to fuck hot girls all day long, he likes to proudly boast about this to anyone who listens.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A196'  ||  String((s as any).locArgs?.[0] ?? '') === 196) {
    (s as any).result = 'Ignat signed up for both the pussy and the money. He lives near the university and often pretends to be a student so he can hook up with girls and bring them back to his place to film himself having sex with them. He then sells this footage to the studio.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A197'  ||  String((s as any).locArgs?.[0] ?? '') === 197) {
    (s as any).result = 'Simeon worked as a clerk at a store in a small town before he quit and traveled to the city looking for something new. By chance, he met and bedded Julianna Slavenka, one of the studio\'s top actresses, who recommended that he try porn since he appeared to be inexhaustible in bed, capable of fucking for hours on end without rest.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A198'  ||  String((s as any).locArgs?.[0] ?? '') === 198) {
    (s as any).result = 'Vasya and his sister Roza have been in the porn business ever since they inherited a large amount of debt from their parents. He dropped his job as car salesman and started doing porn, as well as anything else that might get him money fast.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A199'  ||  String((s as any).locArgs?.[0] ?? '') === 199) {
    (s as any).result = 'An aspiring middle aged actor who has been stuck doing porn for years, with only the occasional low budget commercial to his name. He\'s not entirely enthusastic about his job, but it pays the bills and his acting background makes him rather convincing on camera.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A200'  ||  String((s as any).locArgs?.[0] ?? '') === 200) {
    (s as any).result = 'Danek is a high functioning drug addict, but has so far managed to keep it a secret. He does porn to buy the expensive stuff, because everything else is just "poison" to him. He is always "sober" on set, but regularly shoots up afterwards.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A201'  ||  String((s as any).locArgs?.[0] ?? '') === 201) {
    (s as any).result = 'Pepik is a true exhibitionist, and enjoys doing porn. He does not do relationships, but likes to brag about having at least six children from six different women. This is likely a lie to shape his public image, since he always has plenty of money and is never seen around any children.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A202'  ||  String((s as any).locArgs?.[0] ?? '') === 202) {
    (s as any).result = 'Oleg was a soldier until he was dishonorably discharged after falling asleep on guard duty while drunk. He is still an alcoholic, but in the porn business being slightly drunk is not really an issue. His short temper is the bigger problem.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A203'  ||  String((s as any).locArgs?.[0] ?? '') === 203) {
    (s as any).result = 'Roza and her older brother Vasya are both in the porn business, "agreeing" to do it after she was raped for late repayment of her debt. She dropped out of university where she was learning to be a doctor to do porn, hoping to get the debt hunters off her back as soon as she can.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A204'  ||  String((s as any).locArgs?.[0] ?? '') === 204) {
    (s as any).result = 'Savva is a high-spirited, optimistic boy who works at an alternative clothing store called Patchwork Dolls. Due to him being openly gay, he is often harassed, most notably by gopniks. Despite the physical and verbal abuse thrown his way, he remains proud of who he is, and wants to see everyone else be proud of who they are too, especially if they\'re gay, lesbian, transgender, etc. His personal motto is "What hurts you today, makes you stronger tomorrow."';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A205'  ||  String((s as any).locArgs?.[0] ?? '') === 205) {
    (s as any).result = 'Viola looks like your typical emo or alternative girl. Her hair is often colored and she has a number of tattoos and piercings. She is in her late teens or early twenties and has been working at the Patchwork Dolls store for the past few years. She spends almost all her time on Vasilyevsky Island, claiming it is the most enlightened area in Russia.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A206'  ||  String((s as any).locArgs?.[0] ?? '') === 206) {
    (s as any).result = 'Currently the most famous nude model in St. Petersburg. She tries to be motherly to the other models and help them in their careers and in life. Also uses her reputation to prostitute herself for more money.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A207'  ||  String((s as any).locArgs?.[0] ?? '') === 207) {
    (s as any).result = 'A part time pornstar, part time model, she\'s very cheerful and friendly. Sex seems to exude from every facet of her life.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A208'  ||  String((s as any).locArgs?.[0] ?? '') === 208) {
    (s as any).result = 'A girl who grew up sexy and she knows it. She is often very bitchy to other models because she is focused on furthering her career and surpassing Anastasia to become the most famous model and she thinks everyone else is getting in her way.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A209'  ||  String((s as any).locArgs?.[0] ?? '') === 209) {
    (s as any).result = 'Cuddly girl who\'s like a teddy bear. Huge airhead but is strangely very good at her schoolwork and very knowledgeable about sex from history working as an escort.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A210'  ||  String((s as any).locArgs?.[0] ?? '') === 210) {
    (s as any).result = 'A veteran model who is incredibly professional but wishes she could find a nice man to marry so she can be a mother.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A211'  ||  String((s as any).locArgs?.[0] ?? '') === 211) {
    (s as any).result = 'Very casual person who is very natural. She models part time, focusing more on being a pornstar and camgirl.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A212'  ||  String((s as any).locArgs?.[0] ?? '') === 212) {
    (s as any).result = 'A language and culture university student using modelling to pay her way through school. Friendly, but sometimes easily stressed out trying to balance modelling with schoolwork with keeping it a secret from the people in the university. Even more secret, she might actually get off on the idea that people who know her might see these lewd pictures of her.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A213'  ||  String((s as any).locArgs?.[0] ?? '') === 213) {
    (s as any).result = 'A farm girl who grew up in Gadukino before she got tired of it and jumped head first into the big city life by doing nude modelling. Has become very accustomed to being nude to the point that she takes some level of joy in it, although not like that of an exhibitionist. She thinks she\'s straight but she\'s actually bisexual and doesn\'t know it.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A214'  ||  String((s as any).locArgs?.[0] ?? '') === 214) {
    (s as any).result = 'An actress with a wild spirit. Free and unpredictable, she\'s very artistic and is the reason she got into modelling. For her it\'s a bit more of a hobby since she gets paid enough for doing movies and stuff.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A215'  ||  String((s as any).locArgs?.[0] ?? '') === 215) {
    (s as any).result = 'Just another random model who isn\'t very famous. She is very nonchalant, not particularly social, mostly there for the money, not really looking for a career or anything, doesn\'t interact with others very much as a result.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A216'  ||  String((s as any).locArgs?.[0] ?? '') === 216) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A217'  ||  String((s as any).locArgs?.[0] ?? '') === 217) {
    (s as any).result = 'Varsonofy Krestovoz is a small time gangster who makes his money by whoring out vulnerable women in Pavlovsk. Few people know his name as he is usually called Pavlin (the Peacock).';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A218'  ||  String((s as any).locArgs?.[0] ?? '') === 218) {
    (s as any).result = 'A girl you met at the city gym.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A219'  ||  String((s as any).locArgs?.[0] ?? '') === 219) {
    (s as any).result = 'A girl you met at the city lake.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A220'  ||  String((s as any).locArgs?.[0] ?? '') === 220) {
    (s as any).result = 'Vika goes to the local university. She comes from a town in a truly remote part of Russia and her family is poor, so she pays for her studies by working in a brothel in the city center.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A221'  ||  String((s as any).locArgs?.[0] ?? '') === 221) {
    (s as any).result = 'Grigory is a farmhand who has worked on your grandparents land for many years.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A222'  ||  String((s as any).locArgs?.[0] ?? '') === 222) {
    (s as any).result = 'A director in the Russian film industry. He is mostly known for his horror movies with gratuitous amounts of unnecessary female nudity and sex.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A223'  ||  String((s as any).locArgs?.[0] ?? '') === 223) {
    (s as any).result = 'A producer in the Russian film industry. He works often with SMTV and makes new age television shows like Unashamed, Cauflornication, and You\'re The Best.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A224'  ||  String((s as any).locArgs?.[0] ?? '') === 224) {
    (s as any).result = 'A television producer and director in St. Petersburg. He is known for making teen situation comedy shows for various networks, often with nubile female leads. These include but are not limited to <i>iKaterina</i>, <i>Saved by Your Balls</i>, and <i>Draco and Iosef</i>.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A225'  ||  String((s as any).locArgs?.[0] ?? '') === 225) {
    (s as any).result = 'Ilyich Chendev is a television producer who produces all the majority of the new and original ground breaking drama shows such as <i>Wanton Women</i>, <i>The Tarasovs</i>, and <i>Broken Badness</i>.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A226'  ||  String((s as any).locArgs?.[0] ?? '') === 226) {
    (s as any).result = 'Arseni is a movie producer who is considered the blockbuster film maker of Russia.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A227'  ||  String((s as any).locArgs?.[0] ?? '') === 227) {
    (s as any).result = 'One of the two showrunners of the incredibly popular mature fantasy series <i>Game of Whores</i>.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A228'  ||  String((s as any).locArgs?.[0] ?? '') === 228) {
    (s as any).result = 'One of the two showrunners of the incredibly popular mature fantasy series <i>Game of Whores</i>.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A229'  ||  String((s as any).locArgs?.[0] ?? '') === 229) {
    (s as any).result = 'Andrei Yankovsky is the twin brother of Leonid Yankovsky. The two of them work together in the Russian film industry to create exciting sci-fi movies.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A230'  ||  String((s as any).locArgs?.[0] ?? '') === 230) {
    (s as any).result = 'Leonid Yankovsky is the twin brother of Andrei Yankovsky. The two of them work together in the Russian film industry to create exciting sci-fi movies.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A232'  ||  String((s as any).locArgs?.[0] ?? '') === 232) {
    (s as any).result = 'Wife of Nicholas and mother of Tanya';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A233'  ||  String((s as any).locArgs?.[0] ?? '') === 233) {
    (s as any).result = 'Bodyguard of Gala Polyakov';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A234'  ||  String((s as any).locArgs?.[0] ?? '') === 234) {
    (s as any).result = 'An American student on a gap year who is doing porn to fund her current lifestyle. She\'s considered a \'forbidden fruit\' by her male co-stars, but is unpopular amongst the female stars.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A235'  ||  String((s as any).locArgs?.[0] ?? '') === 235) {
    (s as any).result = 'A popular veteran porn star in her late twenties. She\'s one of the oldest girls at the studio and is past her prime, surrounded by fresher, younger talent. As a result, she is rather bitter and hostile to her co-stars and is looking for a way out of the industry.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A236'  ||  String((s as any).locArgs?.[0] ?? '') === 236) {
    (s as any).result = 'An up and coming porn starlet in her early 20s. Since she\'s rather fresh talent, she\'s popular with casting directors and gets nearly all the best roles. This has massively inflated her ego, so she is rather arrogant and self absorbed.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A237'  ||  String((s as any).locArgs?.[0] ?? '') === 237) {
    (s as any).result = 'A sex obessed teen who, against her parents wishes, went into porn instead of attending university. Always eager to get on camera, her young age and attractive appearance gives her a lot of age play roles and makes her extremely popular with her male co-stars.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A238'  ||  String((s as any).locArgs?.[0] ?? '') === 238) {
    (s as any).result = 'Artem\'s mother, who works at the community center library as the librarian. She met her husband when they both attended Pavlovsk Secondary School and started dating. They also both attended the university in Saint Petersburg and after graduating, got married and moved back to Pavlovsk when her husband Masharin was offered a job at the Palace as an office administrator. Soon after, she got pregnant with Artem and now hopes her son will have the same kind of happy life she and her husband had. She hopes he meets a nice smart girl he can settle down with to give her some grandchildren.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A239'  ||  String((s as any).locArgs?.[0] ?? '') === 239) {
    (s as any).result = 'Artem\'s father works at the Palace tourism office as their office administrator, head of their IT department. He met his wife when they were both still in Secondary school in Pavlovsk and they started dating. They kept dating through college when they both attended the University in Saint Petersburg. After college, Masharin got the offer to work at the Palace tourism office in the IT department, so they moved back to Pavlovsk. Soon after Artem was born and they have had a happy and wonderful life. Now he and his wife are hoping Artem meets a nice girl and can have the same kind of experience they did.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A240'  ||  String((s as any).locArgs?.[0] ?? '') === 240) {
    (s as any).result = 'Natalia is a very smart, but weak willed girl. She constantly struggles to maintain friendships, but her friendly attitude and eagerness to help others prevents her from being an outcast, despite being a little chubby and not overly attractive. She is rarely seen hanging out with anyone. She fiercely guards a notebook she likes to keep private, never letting anyone read or even touch it.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A241'  ||  String((s as any).locArgs?.[0] ?? '') === 241) {
    (s as any).result = 'Chic who was a guy with stick up his ass.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A242'  ||  String((s as any).locArgs?.[0] ?? '') === 242) {
    (s as any).result = 'Djibril\'s best friend, who is also from Africa. He also attends the university, living on the same floor of the dorm.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A243'  ||  String((s as any).locArgs?.[0] ?? '') === 243) {
    (s as any).result = 'Ermias is Lebogang\'s dorm roommate and friend. He is also from Africa.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A244'  ||  String((s as any).locArgs?.[0] ?? '') === 244) {
    (s as any).result = 'Djibril\'s roommate at the university dorms. He is also from Africa.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A245'  ||  String((s as any).locArgs?.[0] ?? '') === 245) {
    (s as any).result = 'Haruna is close friends with Djibril, having met in their freshmen year. He lives on the same floor of the dorms, and is also from Africa.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A246'  ||  String((s as any).locArgs?.[0] ?? '') === 246) {
    (s as any).result = 'Arendse is Haruna\'s roommate and friend. They live in the same dorm room and both attend the university. He is also from Africa.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A247'  ||  String((s as any).locArgs?.[0] ?? '') === 247) {
    (s as any).result = 'Liliya is a very attractive and rather tall girl. Nobody knows really too much about her other than that she is a true tease. She finds amusement and fun teasing the boys with flashing her privates -usually naked- or just looking seductively. She refuses any advances made by the boys and she doesn\'t let anybody to touch her or even try to flirt her. Usually those attempts end with a slap or some emasculating comeback lines.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A248'  ||  String((s as any).locArgs?.[0] ?? '') === 248) {
    (s as any).result = 'Silvestr is one of Christina\'s older brothers. The black sheep of the family, he was often a disappointment to his hard-working parents. He taught his little sister to fight at a young age, but they aren\'t that close these days.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A249'  ||  String((s as any).locArgs?.[0] ?? '') === 249) {
    (s as any).result = 'A man that ' + ((s as any).pcs_firstname ?? 0) + ' met at the gas station. You know nothing about him except that he is dressed like a business man.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A250'  ||  String((s as any).locArgs?.[0] ?? '') === 250) {
    (s as any).result = 'A fat and ugly man that ' + ((s as any).pcs_firstname ?? 0) + ' met at the gas station. His car is always a mess.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A251'  ||  String((s as any).locArgs?.[0] ?? '') === 251) {
    (s as any).result = 'A man that ' + ((s as any).pcs_firstname ?? 0) + ' met at the gas station. A homeless man who can often be found dumpster diving, it\'s likely that he hasn\'t washed in months or even years.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A252'  ||  String((s as any).locArgs?.[0] ?? '') === 252) {
    (s as any).result = 'An older man that ' + ((s as any).pcs_firstname ?? 0) + ' met at the gas station. The first time they met, he was arguing with his wife.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A253'  ||  String((s as any).locArgs?.[0] ?? '') === 253) {
    (s as any).result = 'Diane is Rex\'s older sister. She is going to University to be a teacher. She is the studious type and can often be found in the university library, despite a more wild past than one would think when meeting her.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A254'  ||  String((s as any).locArgs?.[0] ?? '') === 254) {
    (s as any).result = 'Klim is the professor of General Education for teaching. A young professor in his late twenties or early thirties, he is in good shape and most girls find him very attractive. He dresses casually and is very friendly with his students, known to let people get away with a lot and join in with the horsing around in class or telling jokes during his lectures. He is rumored to be single.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A255'  ||  String((s as any).locArgs?.[0] ?? '') === 255) {
    (s as any).result = 'Grigorii is the professor of Teaching Methods for teaching. An older stoic man, he dresses well and expects everyone to give their full attention to him during his lectures. He is happy to help any of his students, answering questions or even spending some time helping out students that are in trouble or struggling in his class. He has a wife and teenage children.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A256'  ||  String((s as any).locArgs?.[0] ?? '') === 256) {
    (s as any).result = 'Selena is the professor of Learning Theories for teaching. She is in her forties and dresses well, but is extremely nerdy, often talking at length about the latest sci-fi, fantasy, supernatural and superhero TV shows, films and comics. Some say she even attends conventions and cosplay events. She\'s married with a young daughter; her husband is a lecturer in a different department.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A257'  ||  String((s as any).locArgs?.[0] ?? '') === 257) {
    (s as any).result = 'The mother of Vicky and Katja Meynold.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A258'  ||  String((s as any).locArgs?.[0] ?? '') === 258) {
    (s as any).result = 'Anya\'s friend and classmate from school. She is a small girl that loves to party.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A259'  ||  String((s as any).locArgs?.[0] ?? '') === 259) {
    (s as any).result = 'Anya\'s friend and classmate from school. She is a ditzy girl that loves to party.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A260'  ||  String((s as any).locArgs?.[0] ?? '') === 260) {
    (s as any).result = 'Katja\'s university roommate. From a small town in the middle of nowhere, she came to the city to study nursing.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A261'  ||  String((s as any).locArgs?.[0] ?? '') === 261) {
    (s as any).result = 'Sofia\'s boyfriend who is also from the same town. He is studying law at the university.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A262'  ||  String((s as any).locArgs?.[0] ?? '') === 262) {
    (s as any).result = 'Proprietor of the Hookah Lounge.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A263'  ||  String((s as any).locArgs?.[0] ?? '') === 263) {
    (s as any).result = 'Ksenya doesn\'t use her last name anymore since she doesn\'t like or trust her father. She is of Chinese decent as her mother was a mail-order bride for her father, but her mother left him after she was born. She owns her own shop that sells exhibitionist clothing and has been called a tease due to her sheer clothing and flashing habits.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A264'  ||  String((s as any).locArgs?.[0] ?? '') === 264) {
    (s as any).result = 'Yakov is a fitness-focused sports enthusiast with blond hair and a tanned complexion.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A265'  ||  String((s as any).locArgs?.[0] ?? '') === 265) {
    (s as any).result = 'Nestor is a gopnik with a reputation for being rude and aggressive. His motto seems to be "the younger, the better," which can be concerning. He has a tough demeanor, with dark hair and dark skin, giving off an intimidating presence.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A266'  ||  String((s as any).locArgs?.[0] ?? '') === 266) {
    (s as any).result = 'Oleg is a shy, young-looking guy with thick glasses, a slim frame, and very pale skin.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A267'  ||  String((s as any).locArgs?.[0] ?? '') === 267) {
    (s as any).result = 'The elder of the identical twins studying nursing at the university. She and Yana are inseparable and are seen almost everywhere together. Like her younger sister, she enjoys playing pranks on her professors and classmates and causing confusion about who is actually who. Her parents are divorced, but her father pays for her tuition. There is a rumor spreading across campus claiming that he is a porn actor.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A268'  ||  String((s as any).locArgs?.[0] ?? '') === 268) {
    (s as any).result = 'The younger of the identical twins studying nursing at the university. She and Mia are inseparable and are seen almost everywhere together. Like her older sister, she enjoys playing pranks on her professors and classmates and causing confusion about who is actually who. Her parents are divorced, but her father pays for her tuition. There is a rumor spreading across campus claiming that he is a porn actor.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A269'  ||  String((s as any).locArgs?.[0] ?? '') === 269) {
    (s as any).result = 'Raina is the professor of Anatomy and Physiology. Young and attractive, she isn\'t much older than the students she teaches and tries to make her lessons fun and enjoyable. However, she is a bit of a gossip and enjoys talking about both her colleagues and other students during her lectures. There is a popular rumor on campus that she is having an affair with one of the married male professors.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A270'  ||  String((s as any).locArgs?.[0] ?? '') === 270) {
    (s as any).result = 'Olena is the professor of Patient Care. A woman past her prime, she has a chip on her shoulder about her now former husband cheating on her with a younger woman and is thus extremely bitter towards both her students and her younger colleagues. She takes particular pleasure in ridiculing and belittling students who don\'t live up to her high standards.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A271'  ||  String((s as any).locArgs?.[0] ?? '') === 271) {
    (s as any).result = 'Nikita is the professor who teaches the more mundane nursing subjects. An attractive, but shy and somewhat nerdy man, he makes no effort to make his boring lectures interesting and has a habit of speaking at length and in excessive detail. His students often take advantage of his meek personality to amuse themselves or disrupt his classes.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A272'  ||  String((s as any).locArgs?.[0] ?? '') === 272) {
    (s as any).result = 'Radomir\'s father. A fit and attractive man in his early forties, he believes that women only exist to provide sexual pleasure to men and that no man should ever be tied to a single woman. He believes it is natural for men to cheat on their wives or girlfriends and has passed his views down to his two sons. He works at one of the factories in the city.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A273'  ||  String((s as any).locArgs?.[0] ?? '') === 273) {
    (s as any).result = 'Radomir\'s older brother, a fit and attractive young man in his early twenties. He was the captain of the Pavlovsk school\'s football team and the top athlete, for which he won several awards. Afterwards, he went to the university, but screwed around and flunked out. He then moved back home and got a job in the same factory as his father.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A274'  ||  String((s as any).locArgs?.[0] ?? '') === 274) {
    (s as any).result = 'Maya is the daughter of Anitchka. A freelance coryphée, she was encouraged to dance from a young age until she was nine, when she started doing gymnastics. This changed when she was eleven, when her mother became ill and she was asked to carry on the family tradition. Maya is a naturally gifted dancer and after six years is tipped to become one of Russia\'s leading stars in the future.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A275'  ||  String((s as any).locArgs?.[0] ?? '') === 275) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A276'  ||  String((s as any).locArgs?.[0] ?? '') === 276) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A277'  ||  String((s as any).locArgs?.[0] ?? '') === 277) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A278'  ||  String((s as any).locArgs?.[0] ?? '') === 278) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A279'  ||  String((s as any).locArgs?.[0] ?? '') === 279) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A280'  ||  String((s as any).locArgs?.[0] ?? '') === 280) {
    (s as any).result = 'The youngest in the class at 15 and a close friend of Nikita as they grew up in the same village. Nikita and Galina are often seen in each other\'s company in the local coffee shop and are rarely seen alone, leading to rumours. She\'s a bit of a foodie and love sweets things, which conflicts with keeping in shape for her dance career.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A281'  ||  String((s as any).locArgs?.[0] ?? '') === 281) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A282'  ||  String((s as any).locArgs?.[0] ?? '') === 282) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A283'  ||  String((s as any).locArgs?.[0] ?? '') === 283) {
    (s as any).result = 'Rudolf is a charming and handsome man who was on course to become one of Russia\'s best ballet dancers until a stage accident cut short his career. He now works at the dance school as an instructor, agent and a board member. Many rumours about his life have swirled around him over the years, but none have ever been proven.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A284'  ||  String((s as any).locArgs?.[0] ?? '') === 284) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A285'  ||  String((s as any).locArgs?.[0] ?? '') === 285) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A286'  ||  String((s as any).locArgs?.[0] ?? '') === 286) {
    (s as any).result = '';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A289'  ||  String((s as any).locArgs?.[0] ?? '') === 289) {
    (s as any).result = 'Mistress of Ballet for the Mariinsky Theatre in St Petersburg';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A290'  ||  String((s as any).locArgs?.[0] ?? '') === 290) {
    (s as any).result = 'Daniil is a clerk at the Nerdvana store';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A291'  ||  String((s as any).locArgs?.[0] ?? '') === 291) {
    (s as any).result = 'Kira is a clerk at the Nerdvana store';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A292'  ||  String((s as any).locArgs?.[0] ?? '') === 292) {
    (s as any).result = 'The owner and manager of the Golden Girls strip club. He\'s rumored to be involved in many illegal businesses, including drugs, prostitution and human trafficking.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A293'  ||  String((s as any).locArgs?.[0] ?? '') === 293) {
    (s as any).result = 'One of the bouncers at the strip club. Often assigned to guard the stripper\'s entrance, he enjoys flirting with and hooking up with the girls.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A294'  ||  String((s as any).locArgs?.[0] ?? '') === 294) {
    (s as any).result = 'A somewhat attractive lifeguard who works at the Pavlovsk swimming pool, he considers the best part of his job to be checking out pretty girls in their bikinis and flirting with them.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A295'  ||  String((s as any).locArgs?.[0] ?? '') === 295) {
    (s as any).result = 'Sultan Maskaev. Shadow was his fight name. He used to be a promising boxer, they said he was going to be world champion. But that never happened.';
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'A296'  ||  String((s as any).locArgs?.[0] ?? '') === 296) {
    (s as any).result = 'A rather petite girl in her early twenties, Kira has recently returned to shooting porn after quitting her initial porn career after only a few weeks back when she was 18. She is very secretive about her reasons for doing so.';
    return;
  }
  (s as any).result = 'Error: No NPC ID provided for NPC_Notes.';
  // TODO-QSP: --- npc_notes ---------------------------------
  scene.build();
}

export const npc_notes: LocationDef = {
  name: 'npc_notes',
  region: 'other',
  enter: enter,
};
