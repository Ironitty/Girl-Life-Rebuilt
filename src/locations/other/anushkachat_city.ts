import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  if ((Math.floor(Math.random() * 10) + 1) === 1  &&  ((s as any).anushkaQW ?? 0)?.['dreams'] < 3  &&  ((s as any).anushkaQW ?? 0)?.['dreams_daystart'] > ((s as any).daystart ?? 0) + 7) {
    ((s as any).anushkaQW ?? {})['dreams_daystart'] = ((s as any).daystart ?? 0);
    scene.actions([{ label: 'Continue', goto: ['anushka_dreams', 'dreams'] }]);
  } else {
    scene.text('The two of you sit on her bed and talk about a variety of topics.');
    if (((s as any).anushkaQW ?? 0)?.['rad_date'] === 1) {
      scene.actions([
        { label: 'Ask about her dating Radomir', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"You and Rad use to date, huh?" you ask her.');
    scene.text('She sighs and looks at you for a moment, so you can tell this isn\'t something she is too keen on talking about. "Yeah, when I was young and dumb. I started hanging out with them right after they started their band. Val told me him and Rad starting a band and he invited me to come and listen to them."');
    scene.text('You just nod as she continues. "Anyway, they were kind of crap honestly, since they could barely play while the lyrics were awful. They mostly just did covers to practice with back then." She pauses for a moment, as if remembering what it was like. "Even back then, Rad was a decent singer, a bit on the raw, but you could hear the natural talent. He used to look at me with that look. It was the one that boys would give you when they really want you. Back then it felt amazing to be looked at that way, but now I know what that look really means…" she finishes with a frown.');
    scene.text('You prod her a little. "What happened next?"');
    scene.text('"Well he was already a bit of a bad boy even then, plus he was the lead singer of a band, which was hot. He paid attention to me in the way young girls want guys to pay attention to them," she says with a laugh and shakes her head. "God, I was so stupid back then. When he asked me out, I agreed and we started dating. I ended up becoming their number one fan."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('She sighs. "At first, everything was great, because I already knew how to play guitar myself. We talked about that and I helped by teaching him what I knew from my dad. He taught me what he knew and we both got better. I also helped him write original songs for the band. In time, I asked him if I could join, so he let me try out. Rad and Val agreed. Shithead didn\'t." She notices the look on your face and adds "He was the band\'s previous drummer. He was a real asshole."');
    scene.text('You get curious. "How was he an asshole? I mean other than not wanting you in the band?" you ask.');
    scene.text('"It\'s hard to explain, but he was always harping about me being in the band and that Rad spent too much time with me. It was like he was against us from the start, but him trying to split us up it only made our relationship grow stronger," she replies, but seems a bit unsure of how to express herself.');
    scene.text('You nod. "Okay, so being in the band caused you guys to break up?"');
    scene.text('She gives you a confused stare. "What? No! At first, things were better than ever between Rad and me."');
    scene.text('"What happened then?" you press her.');
    scene.text('She sighs loudly and you can tell that she\'s starting to get annoyed talking about it. "We actually started to make a name for ourselves. I just don\'t mean with the local kids, but we started playing at some parties. At the time we just got free booze, drugs and got to hang out with older kids. We even played at some of the underground parties as an opening act."');
    scene.actions([
      { label: 'Go on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('She frowns at you as you prod her even more. "That\'s when it started. Suddenly, I had guys hitting on me all the time, even guys many years older than me. They had never paid me any attention before. The girls were doing the same with the boys, but I didn\'t care. Rad and I were together."');
    scene.text('You can tell she\'s starting to get visibly upset, but not angry. It\'s like she might actually be on the verge of crying. She takes a deep, calming breath to get herself back under control and her vulnerable moment passes. "It happened after one of the underground parties we played at. After we were done, we joined in with the dancing and partying. I noticed Rad wasn\'t anywhere to be seen, so I went to look for him… Yeah, I found him fucking some other chick." Now she seems to be angry. "We fought, and he said he was sorry and wouldn\'t do it anymore, so I forgave him. God, I was so fucking stupid!" she says harshly.');
    scene.text('"However, he didn\'t stop. I caught him several more times with different sluts, but I always kept forgiving him and taking him back. Then the fucking asshole had the nerve to fucking dump <i>me</i>, saying it was \'best for the band\'," She goes quiet while looking sad.');
    scene.text('"In the end, he was right. We never should have dated and should have broken up sooner. It was a good PR move for the band if we were both single, to create the fantasy of our fans having a chance with us. It took me a while to come to that realization," she says while shaking her head.');
    scene.actions([
      { label: 'Then what?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"We fought all the fucking time, but Val convinced me to stay in the bad and Rad wanted me to stay too. However, it made Shithead leave, which is the best thing to come out of Rad and myself dating because then we found Arkadi."');
    scene.text('You\'re a little confused. "Why are you still hooking up if you guys broke up?"');
    scene.text('She shrugs. "I got over it. I forgave him, but we were both young and stupid. Now we\'re just friends and he\'s still a good fuck, so why not?" she says with a smile, but you\'re unconvinced. She changes the subject to a song she recently heard, obviously not wanting to talk about it any further.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1) {
      scene.actions([
        { label: 'Ask about her hooking up with Radomir', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['rad_date'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"What\'s the deal with you and Rad? Are you guys serious or something?" you ask her.');
    scene.text('She stares at you, puzzled. "What are you talking about?"');
    scene.text('You smile at her, knowing that she\'s having sex with him. "Well, you guys are hooking up, but is that it or is there something more?"');
    scene.text('She shakes her head. "Where did you hear that? Never mind, it doesn\'t matter. No, we\'re just friends who occasionally fuck is all."');
    scene.text('You get the feeling she\'s holding something back. "There\'s nothing serious then? No chance of you guys becoming a couple?"');
    scene.text('Her smile completely disappears and you feel like you\'ve struck a nerve. "No." She pauses for a moment before continuing. "We used to date, but things didn\'t work out and we ended up breaking up."');
    scene.text('You get the feeling she really doesn\'t want to talk about it, but you\'re also now curious about what happened.');
    if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1  &&  ((s as any).anushkaQW ?? 0)?.['valspy'] === 1) {
      scene.text('You also wonder if the reason she doesn\'t want to talk about it is because she\'s sleeping with both Radomir and Valentin. Does that cause problems with the band?');
      scene.actions([
        { label: 'Problems in the band', goto: ['anushkachat_city', 'radval'] },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['valspy'] === 1) {
      scene.actions([
        { label: 'Ask about her hooking up with Valentin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"What\'s the deal with you and Val? Are you guys serious or something?" you ask her.');
    scene.text('She stares at you, puzzled. "What are you talking about?"');
    scene.text('You smile at her, knowing she\'s having sex with him. "Well, you guys are hooking up, but is that it or is there something more?"');
    scene.text('She shakes her head, but smiles at the question. "No, we\'re just friends who occasionally fuck is all."');
    scene.text('"So nothing serious then? Why just hook up? I mean he is okay looking…" you comment.');
    scene.text('She giggles at that. "One, he\'s just fun to hang out with. Two, he has a huge dick. He always leaves my pussy and ass aching, but in a good way…" she says with a grin while pretending she\'s holding a massive dick. You both laugh and she tells you about some of the times when she and Val have hooked up.');
    if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1  &&  ((s as any).anushkaQW ?? 0)?.['valspy'] ===1) {
      scene.text('After that, you can\'t help but wonder if her sleeping with both Radomir and Valentin causes problems with the band.');
      scene.actions([
        { label: 'Problems in the band', goto: ['anushkachat_city', 'radval'] },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['marspy'] === 1) {
      scene.actions([
        { label: 'Ask about her hooking up with Marcus', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['marspyknow'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"What\'s the deal with you and Marcus? I didn\'t know you guys were friends let alone… you know…" you say to her.');
    scene.text('She arches a slender brow. "What do you mean?"');
    scene.text('You smile at her, knowing she\'s having sex with him. "Well, you guys are hooking up right? Is it something more serious?" you ask.');
    scene.text('She shakes her head. "Where did you hear that? Never mind because it doesn\'t matter. We\'re not friends.. not really. He\'s… okay, I guess…"');
    scene.text('You\'re confused by her response. "Why are you hooking up if you\'re not friends?"');
    scene.text('She laughs. "Because it\'s taboo and you know how people are. He\'s black… and American. Either would be enough for people to think it\'s wrong, but both just makes it doubly taboo. That makes it fucking hot. Not to mention he has a huge fucking dick."');
    scene.text('You nod. "Is it just because he has a big dick and is black?"');
    scene.text('She shrugs slightly. "Yeah, pretty much. I mean just thinking about getting ploughed by his big black cock is making me horny…" she says with a laugh, but you can tell she really is starting to get aroused.');
    scene.text('You laugh. "Okay, okay. I get it. Big black dicks are what makes you horny."');
    scene.text('She shakes her head slightly. "It\'s not just that, or I should say only that. It\'s also about everyone saying it\'s wrong. It\'s the same reason that I like fucking other chicks or getting naked. Breaking the rules and rubbing it in their narrow minded faces is a huge turn on. I mean fuck what society thinks or wants us to think or how to act. The more people tell me good girls shouldn\'t do this or that, the more I want to fucking do it. I say break all the fucking rules and live free."');
    scene.text('You only nod at that. You know Anushka is a bit of an anarchist at heart, so it\'s not a surprise breaking social norms turns her on.');
    if (((s as any).OluQW ?? 0)?.['sex'] === 1  &&  ((s as any).OluQW ?? 0)?.['nush_inv'] === 0) {
      scene.actions([
        { label: 'Tell her about Olu', goto: ['anushkachat_city', 'tell_about_olu'] },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).OluQW ?? 0)?.['sex'] === 1  &&  ((s as any).OluQW ?? 0)?.['tell'] === 0) {
      scene.actions([
        { label: 'Tell her about Olu', goto: ['anushkachat_city', 'tell_about_olu'] },
      ]);
    }
    if (((s as any).npc_had_sex ?? 0)?.['A82']  &&  ((s as any).DjibrilQW ?? 0)?.['invite'] === 0  &&  ((s as any).DjibrilQW ?? 0)?.['tell'] === 0) {
      if (((s as any).OluQW ?? 0)?.['tell'] === 1) {
        scene.actions([
          { label: 'Tell her about Djibril', goto: ['anushkachat_city', 'tell_about_djibril'] },
        ]);
      } else {
        scene.actions([
          { label: 'Tell her about Djibril', goto: ['anushkachat_city', 'tell_about_djibril1'] },
        ]);
      }
    }
    if (((s as any).DjibrilQW ?? 0)?.['tell'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
      scene.actions([
        { label: 'Invite to see Djibril', goto: ['anushkachat_city', 'invite_djibril'] },
      ]);
    }
    if (((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['tell'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 1) {
      scene.actions([
        { label: 'Tell her about Djibril gangbang', goto: ['anushkachat_city', 'tell_about_djibril_gangbang'] },
      ]);
    }
    if (((s as any).DjibrilQW ?? 0)?.['tell'] === 2  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] < 2) {
      scene.actions([
        { label: 'Invite to Djibril gangbang', goto: ['anushkachat_city', 'invite_djibril_gangbang'] },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['dolls'] < 2) {
      scene.actions([
        { label: 'Ask where she buys her clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You notice the clothes scattered around her room. Some are hanging up, others are draped over chairs while a few are lying on the floor. They\'re all of a similar style and you\'re curious where she gets them. "Hey Nush, where do you buy your clothes? Online?"');
    scene.text('"Dolls, well Patchwork Dolls to be exact. It\'s not that far from here, nor from the University campus." She proceeds to tell you how to find the place.');
    if (((s as any).anushkaQW ?? 0)?.['dolls'] === 0) {
      ((s as any).anushkaQW ?? {})['dolls'] = 2;
      scene.text('"If you stop by, tell Savva or Viola that I said they still owe me a round from the last time."');
    } else {
      ((s as any).anushkaQW ?? {})['dolls'] = 2;
      scene.text('You tell her you\'ve been there before and she smiles. "Next time you\'re there, tell them that they still owe me a round."');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['guitar_play'] >= 1) {
      scene.actions([
        { label: 'Would you play something again?', goto: ['anush_bedroom_city', 'nush_guitar'] },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['about_alyona'] === 0) {
      scene.actions([
        { label: 'Ask about Alyona', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['about_alyona'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"So what happened to Alyona after graduation? I havn\'t seen her, is she still living in Pavlovsk?" you ask curiously.');
    scene.text('She shakes her head. "No she moved out as soon as she could. She rented some crap hole apartment here in the city, she comes over sometimes and I go see her sometimes. But with school, work, the band, I just don\'t have that much free time to hang out as much as we use to." The two of you talk a bit more about her, seems she is working at some restaurant right now to make ends meet with no real plans for the future.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['model'] >= 1) {
      scene.actions([
        { label: 'Ask about modeling', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['model_referral'] = 1;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      scene.text('Knowing she\'s a model, you decide to ask her about it. "I was in the city killing time between photo shoots and saw your photo album at Aphrodite… I didn\'t know you modeled as well."');
      scene.text('She nods. "Yeah it pays pretty well, so you model too?" You nod yes and soon the two of you are talking about the varies modeling gigs you have done and you have discovered you both work for the same modeling agency.');
      scene.actions([
        { label: 'Do something else', goto: ['anush_bedroom_city', 'anushroom'] },
      ]);
    } else {
      ((s as any).anushkaQW ?? {})['model_referral'] = 1;
      scene.text('Knowing she\'s a model, you decide to ask her about it. "I was in the city and saw your photo album at Aphrodite…"');
      scene.text('She laughs. "Did you like what you saw?" she asks rather lewdly and nudges you in the side.');
      scene.text('You shake your head, but she has a nice laptop and a lot of clothes, as well as tattoos. None of these are cheap. "Does modeling pay well?"');
      scene.text('She nods. "Sort of… I mean, if you\'re willing to do nude modeling, you can make a lot of money in a short amount of time. Are you interested?" she asks while arching a shapely eyebrow.');
      scene.text('"Nude?" you silently ask yourself. Still, if it pays that much then it might be worth considering. "I don\'t know… Maybe… How would I get started? Do I just walk in and tell them I want to be a model or something?"');
      scene.text('She grins at you. "Yeah, pretty much. It helps if you have a portfolio already, but just tell them I sent you. Oh, and make sure you have ID showing you\'re old enough."');
      if (((s as any).fakepassport ?? 0) !== 1) {
        scene.actions([
          { label: 'Underaged?', handler: (st: GameState) => {
    (s as any).fakepassport = 2;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('A thought then occurs to you. You\'re underaged, and so is Anushka. It\'s not legal to model in the nude when you\'re under 18. "Wait a second, how did you get past the age check?"');
    scene.text('She laughs. "Sometimes I forget that not everyone has a fake passport. It\'s pretty easy to pick one up though." She tells you about a printing shop in the Red Light District that sells fake passports. "Once you have one, you won\'t have any problems signing up as a model."');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    }
  } },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).anushkaQW ?? 0)?.['kiss'] <= 0) {
      ((s as any).anushkaQW ?? {})['kiss'] = 1;
    } else {
      ((s as any).anushkaQW ?? {})['kiss'] = (((s as any).anushkaQW ?? {})['kiss'] ?? 0) + (1);
    }
    ((s as any).anushkaQW ?? {})['kiss_day'] = ((s as any).daystart ?? 0);
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/brtkiss.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('You look at her as you sit side by side. Maybe for too long, or maybe she just senses it, since she turns her head to look at you. Her face is not that far from yours and you can\'t help it; she\'s so damn pretty! You lean over to give her a kiss, a kiss she fully returns. The two of you kiss for a bit, but you are not sure she wants to do more yet or not. Perhaps you should press on or maybe you should wait and try some other time for more.');
      qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
      qspCall(s, 'stat', '');
      if (((s as any).anushkaQW ?? 0)?.['kiss'] > 5) {
        scene.actions([
          { label: 'Make out', handler: (st: GameState) => {
    ((s as any).anushkaQW ?? {})['sveta_love'] = (((s as any).anushkaQW ?? {})['sveta_love'] ?? 0) + (1);
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/brtmakeout.jpg');
    scene.text('She wraps her arms around your neck and pulls you in close. The two of you are soon kissing passionately, the kisses full of eager lust and urgent need as you feel yourself getting more and more aroused.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop making out', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'hate');
    scene.text('You pull away before things go too far and catch your breath. You see her slightly confused look and you feel a little bad about it. "Sorry, I got carried away. Can we just go back to talking?"');
    scene.text('She frowns. "Yeah, whatever." You don\'t blame her for her reaction since you did just give her the girl equivalent of blue balls.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Peeking', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les1.jpg');
    scene.text('She breaks the kiss and uses one of her hands to pull down your top to expose your breasts, taking a long hard look at them. "You have nice tits." You can\'t help it, but just the way she says it in the moment makes you giggle.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Undress her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les2.jpg');
    scene.text('You don\'t waste any time and start pulling her clothes off as she returns the favor and starts removing your clothes as well. It would go a lot faster if the two of you weren\'t also passionately kissing and caressing each other\'s bodies. Regardless, you\'re soon both naked.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get pleasured', handler: (st: GameState) => {
    // TODO-QSP: gt 'anushkaev3', 'getpleasured', 'city'
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Stop kissing and talk more', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['anushkachat_city', 'chat'] },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).photographyEv ?? 0) === 2  &&  ((s as any).portfolio_people ?? 0)[5] === 0) {
      scene.actions([
        { label: 'Ask to take a photo', goto: ['anushkachat_city', 'photo_chat'] },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['photoshoot'] >= 1  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Ask to do a photoshoot', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You pull out your camera. "So how about we go do that photoshoot now?"');
    scene.text('She giggles. "Alright, let\'s do this." You get up and follow her as she leads you out of her room, and out of her apartment.');
    scene.actions([
      { label: 'Go do photoshoot', goto: ['anushkachat_city', 'photoshoot'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['nush3some_ask'] === 2) {
      scene.actions([
        { label: 'Talk about Artem threesome', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((s as any).artemQW ?? 0)?.['nush3some'] === 0) {
      ((s as any).artemQW ?? {})['nush3some'] = 1;
      scene.text('You glance over at her. "I talked to Artem about a threesome and… he\'s up for it."');
      scene.text('She giggles. "Of course he is. Boys are so predictable."');
      scene.text('You briefly consider telling her how the conversation really went, but decide against it. She might tease Artem about it and you\'d like your boyfriend and friend get along, so you just agree with her and the two of you start talking about possible days and times.');
    } else {
      scene.text('You glance over at her. "I\'ve been thinking. Are you sure you\'re up for a threesome with Artem?"');
      scene.text('She give you a puzzled stare. "Are you changing your mind or something?"');
      scene.text('You shake your head. "No, just making sure you haven\'t is all."');
      scene.text('She gives you a strange look and shakes her head slightly. "Whatever. Just call me when you guys want to do it and I\'ll swing by if I\'m not busy."');
      scene.text('You briefly consider telling her how the conversation really went, but decide against it. She might tease Artem about it and you\'d like your boyfriend and friend get along, so you just agree with her and the two of you start talking about possible days and times.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['nush3some'] === 2) {
      scene.actions([
        { label: 'Bring Artem threesome up again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2  ||  ((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      ((s as any).artemQW ?? {})['nush3some'] = 3;
      scene.text('You glance over at her. "I talked to Artem about having another threesome and… he wants to do it again."');
      scene.text('She giggles softly. "Yeah, I bet he does." She looks thoughtful for a moment. "I have to admit he really surprised me. He was way better than I was expecting and there was something about a nerd using me for his pleasure that was kind of a turn on."');
      scene.text('You giggle. "I know, right? Him getting all rough and dominant was a big turn on for me too."');
      scene.text('She glances at you and looks you right in the eye. "Are you up for this?"');
      scene.text('You nod. "Yeah. Like I said, we talked about it and we\'d both like to do it again if you\'re willing."');
      scene.text('She smiles at you. "Sure. Why not?"');
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 1) {
      ((s as any).artemQW ?? {})['nush3some'] = 3;
      scene.text('You glance over at her. "I talked to Artem about having another threesome and… he wants to do it again."');
      scene.text('She giggles softly. "Yeah, I bet he does." She looks thoughtful for a moment. "I have to admit he wasn\'t bad, not as bad as I was expecting anyway."');
      scene.text('She glances at you and looks you right in the eye. "Are you up for this?"');
      scene.text('You nod. "Yeah. Like I said, we talked about it and we\'d both like to do it again if you\'re willing."');
      scene.text('She looks at you before she sighs and nods. "For you I will."');
      scene.text('You smile at her. "Thanks. You won\'t regret it, I promise."');
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    } else {
      scene.text('You glance over at her. "I talked to Artem about having another threesome and… he wants to do it again."');
      scene.text('She rolls her eyes slightly. "Yeah, I bet he does. Look no offense, but your boyfriend isn\'t very good at fucking." She quickly continues before you can inject. "He might be great for you, but I like it rough. I like to fuck and you know how I feel about people that won\'t stand up for themselves. Sorry, but I\'m just not interested."');
      qspCall(s, 'willpower', 'sex', 'force', 'easy');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You frown, but aren\'t too surprised that she\'s so reluctant. "I know it wasn\'t what you\'re into, but we talked and he understands now, so how about you give him another chance? For me? Please?" You give her your best puppy dog eyes.');
    scene.text('She rolls her eyes, then sighs and shoves your shoulder. "Fine! One more chance, but just for you. You better work with him more before you call me over, though."');
    scene.text('You nod your head. "I promise."');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drop it', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You frown, but nod. You knew this would be a bit of a long shot, but it appears that she was more disappointed than you thought.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      scene.actions([
        { label: 'Talk about Artem dominating her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You look over at her and decide to bring up how Artem dominated her. "I\'ve been wondering how you feel after Artem put you in your place."');
    scene.text('She smirks at you. "I have to admit, it was kind of hot. I honestly didn\'t think he had it in him. When he started to crowd me, I realized how tall he\'d become. In my head, he was still that short, skinny nerd, but he towered over me. He\'s really sprouted up."');
    scene.text('You laugh since she\'s a bit on the short side, but you get what she means. "So how do you feel about a <i>neeerd</i> making a bad ass chick like you his bitch?"');
    scene.text('She laughs. "It was hot. I like it when guys get all forceful. Him being a nerd just made it extra hot. I\'m up for another go, at least for now."');
    scene.text('You arch a brow. "For now?"');
    scene.text('She shrugs. "Yeah, it\'s fun but I think the novelty will wear off eventually. Maybe I should start looking at other nerds instead of just focusing on bad boys and jocks all the time?"');
    scene.text('You both laugh and talk about some of the nerd boys and what you think of them.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('The two of you chat about a variety of things, mostly school, music, clothes and what has been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      { label: 'Ask about the band', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).gopnikbandQW ?? {})['practice_invite_city'] = 1;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('The two of you sit close to each other. "I\'ve heard a lot about your band. Most people tell me that you\'re really good."');
    scene.text('"I guess so. Of course we\'re good because most of the lyrics are written by me," she replies nonchalantly and you roll your eyes.');
    scene.text('"I\'d really like to watch you play sometime. Are you doing any gigs soon?" you ask.');
    scene.text('"That would be great because we usually have lots of fun at the gigs. They\'re so energetic, especially when the crowd gets going. The after parties are also a lot of fun too, especially if you like to party. Yeah, you should definitely come by. I\'m sure you wouldn\'t regret it. You could also come to one of our practice sessions if you just want to hear us play and hang out."');
    scene.text('You nod. "Where do you practice?"');
    scene.text('She laughs. "When we got this apartment, we made sure there was an open garage spot as well. We set up in there sortly like we did back in Pav, in fact we moved all the stuff from there here, so it really looks almost exactly the same." She explains roughly where it is and you find it and that it happens on Wednesday nights again.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Ask about the boys in the band', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You sit next to Anushka and eagerly ask her about the band members. "Can you tell me about the others in the band? I really want to know more about them."');
    scene.text('"Well, there\'s Radomir. He thinks he\'s god\'s gift to everything and all the girls think he\'s the shit; there\'s always some slut hanging off him. My mother has a hard-on for him and wants me to marry him or some shit, but fuck that. Even if I wanted to get married, he isn\'t someone I would even consider. He started the band with Val and is a pretty good singer, plays guitar pretty well, and does a decent job writing some of our music. He does have a gift for giving people what they want and getting us noticed by people, I\'ll give him that."');
    scene.text('"Then we have Arkadi. He\'s a great drummer and is always trying to keep us focused on the music, which can get annoying at times, but he can be fun and is usually up for whatever you want to do. He\'s got a serious temper though, and can cause shit to go sideways fast if you aren\'t too careful. I\'m glad he\'s with us though, since the band would probably have split up by now if it wasn\'t for him. Yeah, he\'s a loose cannon at times, but I enjoy his company. Plus he\'s a great hard fuck, especially if you piss him off first…" she says with a wink and a grin.');
    scene.text('"Finally, there\'s Valentin. He plays a mean bass and has been with the band from the start. He\'s pretty laid back and a lot of fun to hang out with, but takes the business side of things seriously. When we do gigs, Rad schmoozes the client, then Val steps in to handle the details to work out a good deal for us. On the plus side, he\'s got a really big dick," she says with a laugh.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Ask about her being a free-spirit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"How did you get so free-spirited and not worry about being seen naked?" you ask.');
    scene.text('"I don\'t really know. I\'ve always felt different than everybody else. It\'s been like this as far back as I can remember. I used to just love the sensation of the wind or the warmth of the sun on my bare skin. As I got older and discovered my sexuality, I started to enjoy showing off my body. I\'d watch most guys along with more than a few girls checking me out. It\'s quite uplifting to be getting all the looks, so I get fucking turned on by that."');
    scene.text('You sit in silence, wondering if you should dare to talk to her about sex. "I don\'t mean to pry, but I\'ve heard some rumors about your sexuality…"');
    scene.text('"What do you mean?" she asks.');
    scene.text('"Well, some people say you like guys, but sometimes hook up with girls. Others say you like girls, but sometimes hook up with guys." You try to not imply that she\'s a slut, which is what many seem to think.');
    scene.text('She shrugs. "Honestly, I don\'t really care. If I like someone and I find them attractive, then I want to fuck them. I mean sex is great; it feels amazing, and it\'s something you can share with other people, so why not have sex with anyone you like and find attractive?"');
    scene.text('You open your mouth to respond when you realize that she makes a valid point.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Ask about her family', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You decide to ask her about her family. "Now that you have moved out, do you stay in touch with them?"');
    scene.text('"I try and call once a week sometimes I do. I typically stop by once a month or two to see them. I am actually getting along better with my brothers now that I moved out. Maksim moved into my old room and they both seem happier and think I am cooler for living in the big city." She says with a laugh. "My dad worries even more, he stops by at least once a month to check up on us." She shrugs a bit, but notice she doesn\'t mention her mom at all.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Ask about the future', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('"Now that you are here in the city and out of school, what\'s the plan?" you ask.');
    scene.text('She looks at you with a smile. "Get my degree at the University while working at the Coffee Hole, and practice with the band, do more gigs. Then party when I manage to have the time, that is about it."');
    scene.text('Before you can say something she asks you "What about you? What are your plans for the future?"');
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((s as any).home ?? 0)?.['current'] === 'university_dorm') {
      scene.text('"I\'m not sure, but I guess I have a few options," you tell her.');
      scene.text('She nods. "Well, you should decide before you get stuck in this crappy little town married to some asshole whose kids you\'re popping out every few years. Not judging you, unless that\'s what you want. I\'m just saying…"');
      scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment') {
        scene.text('"I\'m not sure, but I guess I have a few options, for right now. Work and make ends meet." you tell her.');
        scene.text('She nods. "Well, you should see about doing something more, going to the University or getting some form of certification or something or you might end up married to some asshole whose kids you\'re popping out every few years. Not judging you, unless that\'s what you want. I\'m just saying…"');
        scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
      } else {
        scene.text('"I\'m not sure, but I guess I have a few options," you tell her.');
        scene.text('She nods. "Well, you should decide before you get stuck in this crappy little town married to some asshole whose kids you\'re popping out every few years. Not judging you, unless that\'s what you want. I\'m just saying…"');
        scene.text('You\'re not sure what more to say about it, so you decide to change the subject.');
      }
    }
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Studying at the university', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You get a bit excited. "I\'m studying at the University."');
    scene.text('The two of you talk about the classes you are both taking, it seems she is getting a business degree of all things, while minoring in Music and taking a lot of electives.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'Get married', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You sigh in a way only hopeless romantics do. "Hopefully I can find that special someone and get married soon."');
    scene.text('She gives you a somewhat skeptical look before shrugging. "Well, best of luck with that."');
    scene.text('You\'re not sure what more to say on the topic.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask if she has someone special yet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You know she\'s seeing some guys and girls, but you\'re not sure if you should even ask, even if you\'re curious. "Do you have a boyfriend? Or a girlfriend?"');
    scene.text('She shakes her head. "Nope, I\'m not really looking. I\'m young and carefree. I plan to, as they say, sow my wild oats while I can. I\'m not against the idea mind you. If that right person came along and just blew me away, then I would likely consider it." She pauses for a second and gives you a wicked grin. "Why do you ask? Are you wanting to fill that <i>slot?</i>"');
    scene.text('The way she says it makes you blush. She leaves no doubt about what she means and she makes it sound so dirty while being exciting at the same time.');
    if (((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).fedorKozlovQW ?? 0)  ||  ((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['anushkachat_city', 'boyfriend_chat'] },
      ]);
    }
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    if (((s as any).anushkaQW ?? 0)?.['kiss_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).anushkaQW ?? {})['kiss_day'] = ((s as any).daystart ?? 0);
      ((s as any).anushkaQW ?? {})['kiss'] = (((s as any).anushkaQW ?? {})['kiss'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/brtkiss.jpg');
    scene.text('You feel put on the spot since that\'s not what you meant. Or maybe subconsciously you do mean it, which is why you asked. Either way, a part of you would really like to be Anushka\'s girlfriend. "I guess… maybe. I have been thinking about it a little…"');
    scene.text('With your eyes downcast, you don\'t see her reaction and you\'re not sure you want to know it. However, you feel her place a finger under your chin so you\'re looking at her. Her face is mere inches from yours and you can feel her breath on your face. You\'re looking into her eyes when the two of you suddenly start kissing. A long, deep passionate kiss with just a hint of lust to it. You don\'t know if you kissed her or she kissed you, but it sure is amazing.');
    scene.text('Finally, the kiss ends and she leans back and sucks on her lower lip while looking at you before she gives you a smirking smile. "Like I said, I\'m not looking, but I\'m not against it. Let\'s just see where the ride takes us." Before things can go further, she just changes the subject to a movie she apparently watched recently.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head because this conversation really went off the rails and is not at all what you meant. "No, I mean I like you, but not like that. Not that…" She reaches up and places a finger over your lips to stop you from going on. She seems amused by your response.');
    scene.text('"It\'s fine. I\'m just yanking your chain. I like things just as how they are too."');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
      { label: 'Snacks', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You bite your lip, unsure if you should ask. It might seem rude, but you could really use a snack right now. "Hey Nush, do you have anything to snack on, or even a drink?"');
    scene.text('She looks a little surprised, as well as a bit abashed, which is a new look on her. "Yeah sorry, I didn\'t think about it. Feel free to just grab something if you want in the future, but come on."');
    scene.actions([
      { label: 'Follow her', goto: ['anushapt_city', 'snack'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPhotoChat(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['photoshoot'] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('You climb off the bed and grab your camera from your purse. "Hey, do you mind if I take your photo for my portfolio?" you ask.');
  scene.text('She grins and lies back, stretching in a suggestive way. "You want me to model for you?"');
  scene.text('You can\'t help but grin at her antics. "Yes. I need the practice and I think you would make a great model."');
  scene.text('She giggles. "Sure, but only if you send me copies for my modeling portfolio."');
  if (((s as any).anushkaQW ?? 0)?.['model'] >= 1) {
    scene.text('You nod. "Deal."');
  } else {
    ((s as any).anushkaQW ?? {})['model'] = 1;
    scene.text('You do a bit of a double take. "Wait, what? Your modeling portfolio?"');
    scene.text('She giggles at your reaction. "Yeah, I model at a place called Aphrodite in the city."');
    scene.text('You\'re a little surprised that you hadn\'t heard about this until now. "Oh. Uh yeah, sure I can do that."');
  }
  scene.actions([
    { label: 'Take out your camera', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.text('You pull out your camera, but before you can take her picture, she interrupts you. "You mean <i>now</i>?"');
      scene.text('You look up at her, confused. "Uh yeah, why?"');
      scene.text('She shakes her head. "This really isn\'t the best place. Outside with natural light would be better, since we don\'t have any studio lighting."');
      scene.text('You pause. She has a point and does model, so she would know a thing or two about it. "Oh… Yeah okay, that makes sense." You glance at the time and notice it\'s still light outside. "Well let\'s go while we still have light."');
      scene.text('She giggles. "Alright, let\'s do this." You get up and follow her as she leads you out of her room and out of the apartment.');
      scene.actions([
        { label: 'Do photoshoot', goto: ['anushkachat_city', 'photoshoot'] },
      ]);
    } else {
      scene.text('You pull out your camera, but before you can take her picture, she interrupts you. "You mean <i>now</i>?"');
      scene.text('You look up at her, confused. "Uh yeah, why?"');
      scene.text('She shakes her head. "This really isn\'t the best place. Outside with natural light would be better, since we don\'t have any studio lighting."');
      scene.text('You pause. She has a point and does model, so she would know a thing or two about it. "Oh… Yeah okay, that makes sense." You glance at the time and notice that it\'s too late.');
      scene.text('She smiles at you. "Don\'t worry. Just come over one day when it\'s still light outside and we can do it then."');
      scene.text('You nod and put your camera away. "Okay, sounds good."');
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBoyfriendChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell her.');
    // TODO-QSP: dynamic text: She looks at you, concerned. "<<$pcs_nickname>>, he's bad news and I don't mean ...
    scene.text(`She looks at you, concerned. "${((s as any).pcs_nickname ?? 0)}, he's bad news and I don't mean in the 'fun bad boy' sort of way. I mean he isn't what he seems." Noticing your facial expression from bad mouthing your boyfriend, she holds up her hand. "Hey, it's your life so do what you want. Just… just be careful with him."`);
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Fedor', handler: (st: GameState) => {
    if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('"Fedor," you tell her.');
      scene.text('She arches a slender brow. "Fedor? Are you serious? After he sucked Vasily\'s dick in front of the whole school?"');
      scene.text('You frown at her. You expected her to be more understanding. "He didn\'t have a choice! Those criminals were going to take everything from his family since he couldn\'t pay them. He\'s not gay!"');
      scene.text('She holds up her hands. "I didn\'t say he was gay. I don\'t care if he\'s gay or bisexual or whatever. I was… Never mind, just forget it. If he makes you happy, then I\'m happy for you."');
      scene.text('You nod, accepting her apology of sorts and you both let the topic drop.');
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
        scene.text('"Fedor," you tell her.');
        scene.text('She arches a slender brow. "Fedor? Really? Come on now, if you were going to date a jock why not go for one of the better athletes like Lazar or Ivan? I mean <b>Fedor</b>? He\'s like an Ivan-lite," she says with a giggle.');
        scene.text('You\'re mad at her for talking smack about your boyfriend, but she can\'t keep a straight face and you realize that she\'s just yanking your chain. "Yeah, I like him. He\'s sweet."');
        // TODO-QSP: dynamic text: She snorts. "Yeah sure he is… Uh-huh. Be honest <<$pcs_nickname>>, it's because ...
        scene.text(`She snorts. "Yeah sure he is… Uh-huh. Be honest ${((s as any).pcs_nickname ?? 0)}, it's because he has a really big dick, isn't it?" she asks with a grin while pretending to hold a really big imaginary dick between her legs.`);
        scene.text('You roll your eyes. "I just like him, okay?" As you think about it, you bite your lip and add "Well, maybe it is pretty big…"');
        scene.text('She laughs. "I knew it! Hmm, you think he\'d be up for a threesome?" she asks as she winks and makes a kissy face at you.');
        scene.actions([
          { label: 'Maybe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).anushkaQW ?? {})['fedor_3some'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You blush slightly. "Let me think about it, then I\'ll talk to him. I\'ll let you know."');
    scene.text('She laughs at that. "He\'s a guy. They all want to fuck two girls at once, but sure, let me know." You roll your eyes at her comment, even if it was true and decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
          { label: 'I\'ll ask him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).anushkaQW ?? {})['fedor_3some'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You can\'t help but grin. You think about it and it does sound fun. "Sure. I\'ll ask him and see what he thinks. It could be fun," you tell her.');
    scene.text('She giggles. "Sex is always fun, unless you\'re doing it wrong. Anyway, I\'m sure if you ask nicely he will agree. He is a guy after all."');
    scene.text('You shake your head. "Yeah, most likely. I\'ll let you know what he says."');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
          { label: 'No, I don\'t think so', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head. "Sorry, but he\'s all mine," you tell her with a grin.');
    scene.text('She makes a tsking sound. "Too bad. If you change your mind, then let me know." You\'re not sure what else to say, so you change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
        ]);
      } else {
        scene.text('She arches a slender brow. "Fedor? Really? Come on now, if you were going to date a jock why not go for one of the better athletes like Lazar or Ivan? I mean, <b>Fedor</b>? He\'s like an Ivan-lite," she says with a giggle.');
        scene.text('You\'re mad at her for talking smack about your boyfriend, but she can\'t keep a straight face and you realize she\'s just yanking your chain. "Yeah, I like him. He\'s sweet."');
        // TODO-QSP: dynamic text: She snorts. "Yeah sure he is… Uh-huh. Be honest <<$pcs_nickname>>, it's because ...
        scene.text(`She snorts. "Yeah sure he is… Uh-huh. Be honest ${((s as any).pcs_nickname ?? 0)}, it's because he has a really big dick, isn't it?" she says with a grin while pretending to hold a really big imaginary dick between her legs.`);
        scene.text('You roll your eyes. "I just like him, okay?" Thinking about it, you bite your lip and add "Well, maybe it is pretty big…"');
        // TODO-QSP: dynamic text: She laughs. "I knew it!" She grabs her pillow and starts pretending to hump it d...
        scene.text(`She laughs. "I knew it!" She grabs her pillow and starts pretending to hump it doggystyle while talking in a gruff voice trying to sound like Fedor. "Yeah, take my big dick ${((s as any).pcs_nickname ?? 0)}! Take it!" She switches to a girly voice and tries to sound like you. "Yes… yes… Fedor fuck me with your big dick… YES!" She bursts out laughing and you can't help but to join in.`);
        scene.actions([
          { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
          { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.actions([
      { label: 'Artem', handler: (st: GameState) => {
    if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
      scene.text('"Artem," you tell her.');
      scene.text('She arches a slender brow. "Artem? The nerd?" She seems to consider it for a moment. "Well, I guess he is kind of cute and I bet you have him totally pussy whipped to do whatever you want. Yeah okay, I can see the appeal," she says with a giggle.');
      scene.text('You shake your head at her comment. "He\'s sweet and really nice to me."');
      scene.text('She snorts. "Yeah, I\'m sure he is, but the real question is - Is he any good at fucking?"');
      scene.text('You roll your eyes at her. "There\'s more to life than just sex you know!" Seeing the look on her face you add, "Okay yeah, he\'s pretty good at it… Good enough anyway."');
      scene.text('She grins. "Oh \'good enough\', huh? I\'m sure that\'s a ringing endorsement that strokes his ego," she says while pretending to stroke her imaginary dick. "Hmm, well maybe I should find out for myself. Do you think he\'d be up for a threesome?" she asks as she winks and makes a kissy face at you.');
      scene.actions([
        { label: 'Maybe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    ((s as any).artemQW ?? {})['nush3some_ask'] = 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You blush slightly. "Let me think about it and talk to him. We\'ll see, but I\'ll let you know if we do."');
    scene.text('She laughs. "He\'s a guy. They all want to fuck two girls at once, but sure, let me know." You roll your eyes at her comment, even if it was true and decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
        { label: 'I\'ll ask him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    ((s as any).artemQW ?? {})['nush3some_ask'] = 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You can\'t help but grin. You think about it and it does sound fun. "Sure. I\'ll ask him and see what he thinks. He\'s kind of shy though, so I don\'t know what he\'ll say," you tell her.');
    scene.text('She giggles. "He\'s a boy and all boys want to fuck as much as they can. Having sex with two girls at once is like the most common fantasy they all have, and I doubt he\'s any different. Besides, maybe I can teach him a new trick or two for you?" she says in a teasing tone with a wink.');
    scene.text('You shake your head. "I doubt that, but I\'ll ask him."');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
        { label: 'No, I don\'t think so', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You shake your head. "Sorry, but he\'s all mine," you tell her with a grin.');
    scene.text('She makes a tsking sound. "Too bad. If you change your mind, then let me know." You\'re not sure what else to say to that, so you change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"You do know I have a boyfriend." you tell her.');
      scene.text('She grins at you. "Right. Who are you dating again?"');
      scene.text('"Artem," you tell her.');
      scene.text('She arches a slender brow. "Artem? The nerd?" She seems to consider it for a moment. "Well, I guess he is kind of cute and I bet you have him totally pussy whipped to do whatever you want. Yeah okay, I can see the appeal," she says with a giggle.');
      scene.text('You shake your head at her comment. "He\'s sweet and really nice to me."');
      scene.text('She snorts. "Yeah, I\'m sure he is… So do you guys dress up and pretend to be elves or something when you fuck?"');
      scene.text('You roll your eyes. "What? Why would you ask that?"');
      scene.text('She grins. "You know that game all the nerds play? D&D, or something like that?"');
      scene.text('You shake your head. "No, we don\'t, because we make love."');
      scene.text('She makes a face like she\'s about to be sick and you shove her slightly. "Cut it out." With that, you both laugh before you talk about some of the dates you and Artem have been on.');
      scene.actions([
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
      ]);
    }
  } },
    ]);
  }
  (s as any).i = 0;
  // TODO-QSP: :lover_looop
  if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
      // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''anushkachat_city'', ''tell_about_generic...
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'lover_looop'
  }
  scene.build();
}

function enterTellAboutGenericBoyfriend(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('"I have a boyfriend you know," you tell her.');
  scene.text('She grins at you. "Right. Who are you dating again?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>," you tell her.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}," you tell her.`);
  scene.text('"Who?" she asks as she cocks her head slightly.');
  scene.text('You shake your head slightly. "You\'ve never met him. I just met him."');
  scene.text('She smiles. "Just some guy you met, huh?"');
  scene.text('You laugh, then tell her about him.');
  scene.actions([
    { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  // TODO-QSP: dynamic text: You sigh in a way only those in love can sigh. "Hopefully <<$ARGS[1]>> and I can...
  scene.text(`You sigh in a way only those in love can sigh. "Hopefully ${((s as any).locArgs?.[1] ?? 0)} and I can get married soon."`);
  scene.text('She gives you a somewhat skeptical look before shrugging. "Well, best of luck with that."');
  scene.text('You\'re not sure what more to say on the topic.');
  scene.actions([
    { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
    { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
  ]);
  scene.build();
}

function enterRadval(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('You pause for a moment, not sure if you should ask, but decide to anyway. "You\'re sleeping with both Rad and Val, right?" You already know the answer, but ask to be polite.');
  scene.text('She gives you a slightly confused look. "Yeah, why?"');
  scene.text('You give her a friendly smile. "Well, I was just wondering if it causes problems? Like, do they get jealous of each other or something?"');
  scene.text('She glares at you before she bursts out laughing. "Are you fucking kidding me? Guys don\'t give a shit as long as they get a turn. Most guys I know would pimp out their girlfriend for a pack of smokes."');
  scene.actions([
    { label: 'Not all guys', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You frown. "Okay, but not all of them are like that. There are some guys that are sweet."');
    scene.text('She looks at you dumbfounded, but softens. "Okay sure, some guys like the ugly ones or the ones lacking confidence. They might be sweet, but only because they fear not getting any pussy."');
    scene.text('You\'re a bit surprised by how jaded she is, but it explains a lot.');
    scene.text('She shrugs. "Every guy that talks to you or tries to get to know you will eventually try to fuck you. Okay, maybe not the gay guys, but they don\'t count. Tell me that I\'m wrong."');
    scene.text('You open your mouth to deny it, but she has a point. Pretty much all of them do eventually try and screw you sooner or later. "Yeah, but that doesn\'t mean they don\'t care." You\'re unsure if you believe that.');
    scene.text('She gives you a smirk. "Maybe, but my personal experience and what I\'ve seen and heard from other girls says that, deep down, all guys are that way. Why do you even care?" she asks.');
    scene.text('You shrug. "I was just worried it might break up the band or cause problems."');
    scene.text('She smiles and shakes her head. "Don\'t worry about that. It has no effect on the band." You think she\'s wrong, but don\'t think you can change her mind, so you let it drop.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    { label: 'Maybe', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('You frown and think about it. Maybe she has a point after all. "Okay maybe, but guys are still pretty territorial."');
    scene.text('She shrugs. "Yeah, some are, like Vitek. I could see him fucking around, but being pissed if his \'girlfriend\' was with other guys because he thinks he owns her. It would be like some other guy taking his car without asking."');
    scene.text('You shrug back. "You don\'t think they\'re the same and might cause problem with the band?"');
    scene.text('She smiles and shakes her head. "No, they\'re cool and we all have an understanding. We\'re friends with benefits, but that\'s it. Don\'t worry about it since it has no effect on the band." You think she\'s wrong, but don\'t think you can change her mind, so you let it drop.');
    scene.actions([
      { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTellAboutOlu(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).OluQW ?? {})['tell'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  if (((s as any).anushkaQW ?? 0)?.['marspyknow'] === 1) {
    scene.text('You smile as you look at her, which perks her interest. "Well… I\'m kind of seeing a black guy too…" you tell her and her eyebrow arches in curiosity. "Really? Who?"');
  } else {
    scene.text('You smile as you look at her, which perks her interest. "Well… I\'m kind of seeing a black guy…" you tell her and her eyebrow arches in curiosity. "Really? Who?"');
  }
  scene.text('You describe Olu to her and mention he lives in your building. She nods, apparently knowing who you mean. "Yeah, I think I\'ve use to see him around Pavlovsk. So he lives in your building, huh? How did you meet? He looks a little old for you."');
  scene.text('"Well… he\'s my aunt\'s boyfriend," you tell her and she gives you a shocked look. "Oh my god! Does your aunt know?"');
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You nod. "Yeah. In fact, it was her idea," you add with a laugh.');
    scene.text('She has an even more shocked expression on her face. "And I thought my family was weird…" she says while shaking her head in disbelief.');
    scene.text('"Well, Olu wants to have sex all the time. I mean he has an <i>insane</i> sex drive," you tell her and she snorts. "So a typical guy?"');
    scene.text('You smile at her comment. "No, I mean he would be happy having sex <i>twenty four seven</i>." You see the look on her face, which just makes you laugh. "Okay, okay but he has a really big dick too. I mean <i>really</i> big," you tell her and hold your hands far apart to show how long he is before wrapping your hands together to show how thick he is.');
    scene.text('Her eyes grow wide and she bites her lower lip. "Is he really that big? I don\'t even know if that would fit inside me! He\'s even bigger than Val!" she says jokingly.');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You nod your head. "Yeah, he really is that massive and he loves fucking girls in the ass. That\'s why my aunt needed a break."');
    scene.text('She laughs. "Yeah, I bet! I\'ve never seen one that big in real life, only in porn. My god, that\'s crazy to think about…"');
    if (((s as any).npc_had_sex ?? 0)?.['A82']  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 0) {
      scene.actions([
        { label: 'Tell her about Djibril', goto: ['anushkachat_city', 'tell_about_djibril'] },
      ]);
    }
    scene.actions([
      { label: 'Tell her about your experiences with Olu', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You tell her the story of your first time with Olu and what it was like. She presses you for details, obviously finding the story a big turn on, then shares her stories of Valentin, the biggest guy she has been with. You pass the time swapping stories and giggling about your sex lives.');
    if (((s as any).npc_had_sex ?? 0)?.['A82']  &&  ((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 0) {
      scene.actions([
        { label: 'Tell her about Djibril', goto: ['anushkachat_city', 'tell_about_djibril'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTellAboutDjibril(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).DjibrilQW ?? {})['tell'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You smile as you look at her, which perks her interest. "Remember when I told you about Olu?" you ask and she nods while arching a brow.');
  scene.text('"Well he has a nephew at the university in the city," you tell her, dragging it out.');
  scene.text('She shoves you slightly. "Spill already! What about him?"');
  scene.text('You shove her back slightly and grin. "Well I had sex with him too. He isn\'t as big as his uncle, but let\'s just say, big dicks run in the family."');
  scene.text('She bites her lower lip. "Damn, black college boy with a big dick? Come on, dish with the details!"');
  scene.actions([
    { label: 'Tell her about sex with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You tell her about hooking up with him in his uncle\'s taxi and she asks a few questions. You get pretty graphic and fairly worked up by your story and you can tell she does too.');
    scene.text('"Afterwards, he invites me to come visit him in his dorm room…" you tell her with a sly smile.');
    scene.text('She grins. "Well… Have you?"');
    if (((s as any).DjibrilQW ?? 0)?.['dorm_sex'] === 1) {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You nod your head. "Yeah, I did…"');
    scene.text('"And…? Don\'t leave me hanging."');
    scene.text('You laugh and blush. "We hung out for a little while and then we started kissing…"');
    scene.text('She looks like she\'s about to strangle you as you keep trailing off. "And then?"');
    scene.text('You get into some pretty graphic details as you tell your story and are feeling more than a little turned on; by the looks of things, she is as well. Maybe you could invite her to come with you to his dorm room one time?');
    if (((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
      scene.actions([
        { label: 'Ask her if she wants join in', goto: ['anushkachat_city', 'invite_djibril'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A82']) {
      scene.text('You shake your head. "No, not yet. I want to… I think."');
      scene.text('She rolls her eyes. "You think? You already hooked up with him. Next time you\'re feeling the itch, go to his dorm room and let him fuck your brains out."');
      scene.text('You nod. "Yeah, I think I will." A thought then occurs to you; maybe you could invite her to come with you?');
    } else {
      scene.text('You shake your head. "No, not yet. I want to… I think."');
      scene.text('She rolls her eyes. "You think? You find him attractive don\'t you?" You nod your head. "Then what is there to think about? Next time you\'re feeling the itch, go to his dorm room and let him scratch it for you."');
      scene.text('You nod. "Yeah, I think I will…"');
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTellAboutDjibril1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).DjibrilQW ?? {})['tell'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You smile as you look at her, which perks her interest. "Remember when I told you about Olu, my aunt\'s boyfriend?" you ask and she nods while arching a brow slightly.');
  scene.text('"Well he has a nephew at the university in the city," you tell her, dragging it out.');
  scene.text('She shoves you slightly. "Spill already! What about him?"');
  scene.text('You shove her back slightly and grin. "Well I had sex with him and he has one of the biggest dicks I\'ve ever seen! I mean <i>massive<i>." You hold up your hands to show her roughly how big it is.');
  scene.text('She bites her lower lip. "Damn, black college boy with a huge dick! Come on, dish with the details!"');
  scene.actions([
    { label: 'Tell her about sex with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You tell her about hooking up with him in his uncle\'s taxi and she asks a few questions. You get pretty graphic and fairly worked up by your story and you can tell she does too.');
    scene.text('"Afterwards, he gave me an open invitation to come visit him in his dorm room…" you tell her with a sly smile.');
    scene.text('She grins. "Well… Have you?"');
    if (((s as any).DjibrilQW ?? 0)?.['dorm_sex'] === 1) {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You nod your head. "Yeah, I did…"');
    scene.text('"And…? Don\'t leave me hanging."');
    scene.text('You laugh and blush. "We hung out for a little while and then we started kissing…"');
    scene.text('She looks like she\'s about to strangle you as you keep trailing off. "And then?"');
    scene.text('You get into some pretty graphic details as you tell your story and are feeling more than a little turned on; by the looks of things, she is as well. Maybe you could invite her to come with you to his dorm room one time?');
    if (((s as any).DjibrilQW ?? 0)?.['nush_inv'] === 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
      scene.actions([
        { label: 'Ask her if she wants join in', goto: ['anushkachat_city', 'invite_djibril'] },
      ]);
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A82']) {
      scene.text('You shake your head. "No, not yet. I want to… I think."');
      scene.text('She rolls her eyes. "You think? You already hooked up with him. Next time you\'re feeling the itch, go to his dorm room and let him fuck your brains out."');
      scene.text('You nod. "Yeah, I think I will." A thought then occurs to you; maybe you could invite her to come with you?');
    } else {
      scene.text('You shake your head. "No, not yet. I want to… I think."');
      scene.text('She rolls her eyes. "You think? You find him attractive don\'t you?" You nod your head. "Then what is there to think about? Next time you\'re feeling the itch, go to his dorm room and let him scratch it for you."');
      scene.text('You nod. "Yeah, I think I will…"');
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInviteDjibril(s: GameState, scene: SceneBuilder): void {
  ((s as any).DjibrilQW ?? {})['nush_inv'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You give her a wide grin. "I was thinking, if you want to come, we can go see Djibril at his dorm room together…"');
  scene.text('She nods. "Okay, yeah. Hanging out with a college boy at the dorms sounds like fun. Maybe I can find a cute guy\'s dick to ride while we\'re there," she says with a laugh.');
  scene.text('You laugh. "I\'m sure they\'ll be lining up to stick it in you."');
  scene.text('The two of you continue talking for some time about college boys and sex. After a while, the conversation finally ends.');
  scene.actions([
    { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
    { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
  ]);
  scene.build();
}

function enterTellAboutDjibrilGangbang(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).DjibrilQW ?? {})['tell'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You smile as you look at her, which perks her interest. "Remember when I told you about Djibril?" you ask and she nods while arching a brow slightly.');
  scene.text('When you don\'t immediately start talking, she shoves you slightly. "Spill already! What about him? You guys hooking up regular like?"');
  scene.text('You shove her back slightly and grin. "Well a bunch of his black friends came over while I was in his dorm room.."');
  scene.text('She bites her lower lip. "So what did you do? Did you fuck all of them?"');
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
    scene.text('You nod your head. "Yeah, I did…"');
    scene.text('"And…? Don\'t leave me hanging."');
    scene.text('You laugh and blush. "It was amazing…"');
    scene.text('She looks like she\'s about to strangle you as you keep trailing off. "Details, slut! Details!"');
    scene.text('"Well they all fucked me, well as many as could at one time. The rest took turns."');
    scene.text('She gives a look of mock surprise. "Oh my god, you dirty fucking slut! So how was it?" She\'s grinning as she asks.');
    scene.text('You get into some pretty graphic details as you tell your story and are feeling more than a little turned on; by the looks of things, she is as well. Maybe you could invite her to join in next time?');
    if (((s as any).npc_had_sex ?? 0)?.['A144']) {
      // TODO-QSP: act 'Ask her if she wants join in': gt 'anushkachat_city', 'invite_djibril_gangbang'
    }
    scene.actions([
      { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
      { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterInviteDjibrilGangbang(s: GameState, scene: SceneBuilder): void {
  ((s as any).DjibrilQW ?? {})['nush_inv'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  scene.text('You give her a wide grin. "I was thinking, if you want to come, we can go see Djibril at the dorm together, and he can call his friends over to… meet us… if you want."');
  scene.text('She bites her lip and seems to be thinking about it as she grins widely. "Okay, yeah. Getting fucked by a bunch of black guys sounds like a blast," she says with a laugh.');
  scene.text('You laugh. "I\'m sure they\'ll be lining up to stick it in you."');
  scene.text('The two of you go on talking for some time about boys, sex and even going to college. After a while, the conversation finally ends.');
  scene.actions([
    { label: 'Hang out in her room', goto: ['anush_bedroom_city', 'anushroom'] },
    { label: 'Talk about something else', goto: ['anushkachat_city', 'chat'] },
  ]);
  scene.build();
}

function enterPhotoshoot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  if (((s as any).anushkaQW ?? 0)?.['photoshoot'] === 1) {
    scene.text('You shake your head when you realize you can\'t think of a good place to take a photo of her. "I don\'t know what I was thinking! I can\'t think of a good location, can you?"');
    scene.text('She thinks for a second before grinning. "Yeah, this building has a fire escape we can use. Fairly private and undisturbed."');
    scene.text('You grin back. "That sounds great, lead on." She giggles and leads you down the hall to the window. She opens it and you both crawl outside onto the fire escape.');
    scene.actions([
      { label: 'Start photoshoot', goto: ['anushkachat_city', 'photoshoot1'] },
    ]);
  } else {
    scene.text('You shake your head when you realize you can\'t think of a good place to take a photo of her. "I don\'t know what I was thinking! I can\'t think of a good location, can you?"');
    scene.text('She thinks for a second before shrugging. "No, not really."');
    scene.actions([
      { label: 'Go back to her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You laugh at the situation. You were excited to take some photos, but didn\'t come up with any ideas on what kind of photos you actually wanted to take. "Let\'s forget about this for now and go back to your room."');
    scene.text('She shrugs. "Okay."');
    scene.actions([
      { label: 'Back', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      { label: 'I should go', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You laugh at the situation. You were excited to take photos, but didn\'t come up with any ideas on what kind of photos you actually wanted to take. "Let\'s forget about this for now. I should probably get going anyway, I\'m not thinking clearly right now."');
    scene.text('She raises a shapely brow at you. "Ooookay… You sure you\'re okay?"');
    scene.text('You laugh at her response and nod. "Yeah, I\'m just tired and not really thinking things through. See you later?"');
    scene.text('She nods. "Sure, see you later." You exchange hugs before you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPhotoshoot1(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW ?? {})['photoshoot'] = (((s as any).anushkaQW ?? {})['photoshoot'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose1.jpg');
  scene.text('Once out on the fire escape, you find a spot on the other side of the landing and pull your camera out. You start snapping photos of her standing on the fire escape landing.');
  scene.actions([
    { label: 'Spice this up', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose2.jpg');
    scene.text('You want more and you know she loves showing off. "Come on famous model, let\'s do something a little more risqué!" Anushka reaches up under her skirt, pulls her panties off and tosses them at you. You snap a few more photos as she leans forward, making her skirt ride up. At this angle you can just see her pussy, but keep shooting.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep taking photos', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose3.jpg');
    scene.text('She turns sideways towards you and squats down, with her legs slightly apart. At this angle you can\'t see anything other than her teasing smile. "Okay, now turn towards me," you tell her.');
    scene.actions([
      { label: 'She turns', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose4.jpg');
    scene.text('She moves close to the wall and turns to face you before squatting down again and pulling her skirt down between her legs. You snap a few more photos and shake your head at her teasing. Normally she loves flaunting her body, but now that you\'re trying to do a serious photoshoot, she\'s acting shy. "Ha ha, Nush. Come on, show me the goods girl. You know you want to…"');
    scene.actions([
      { label: 'Keep taking photos', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose5.jpg');
    scene.text('She leans forward and pulls her tank top down and to the sides, exposing her perfectly round and firm tits. "That\'s it, work the camera for me Nush!" You both hear a wolf whistle from somewhere below, but you both ignore it.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Working the camera', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose6.jpg');
    scene.text('She puts her tank top back in place and spreads her legs wide, giving you a full few of her pussy. After some suggestions on poses, she moves to the outside corner of the fire escape to give you a better view of city behind her as you keep taking photos. "That\'s it girl, give the camera some love."');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move again', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose7.jpg');
    scene.text('Following your instructions to move again, she moves back next to the building for a few shoots and teases you by pulling on her tank top, just shy of showing off her nipples. "Okay, back to the other side. I want to get the town in the background." There\'s a catcall from below, but you\'re unsure if it\'s the same person from before.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moving back', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose8.jpg');
    scene.text('Moving back, she squats again and spreads her legs wide to give you a perfect view of her shaved pussy. After you take a few more photos, she pulls her tank top down again. "Nice, nice. But how about you lose the top?" you tell her as you keep taking photos.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Losing the shirt', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose9.jpg');
    scene.text('She pulls off her tank top and tosses it at you. It lands on and covers your camera and face. You pull it off and toss it aside to find her sitting with her back against the rail, on the outer corner of the fire escape. Her legs are spread wide, showing off her pussy and breasts. Only her tennis shoes and skirt bunched up around her waist remain. "That\'s it," you tell her and take several more photos. There are a few hoots and lewd comments directed at you from below.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Final photos', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 2) + 1);
    ((s as any).portfolio_people ?? {})[5] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/photography/foto/people/5.jpg');
    scene.text('She sits in a variety of poses, some fully exposed and others not before you finally you think you have it. She\'s sitting on the outside of the fire escape, her knees together and ankles crossed with her arms wrapped around her knees, her nudity almost completely covered by her own body. Yet she looks so happy and alive, with a bustling city behind her. It\'s the perfect image for your portfolio.');
    scene.text('With the image taken, you lower the camera. "Thanks Nush, that was amazing. You were right; this was perfect with all the natural light and city in the background. You can get dressed now."');
    scene.text('She gets up and pulls her skirt back down. "My pleasure, I love modeling almost as much as I love my music." This elicits more yells from below to take it all off. You both glance down and see a group of gopniks leaning against a wall, drinking beers and staring up at you.');
    scene.text('Anushka leans over the railing, giving the boys an even better view of her tits as she flips them off with both hands. "Take a good long look boys, so you can go home and jerk off to the memory," she teases before grabbing her crotch. "Because that\'s as close as you\'re ever going to get to this!" Her remark causes the boys to yell back with crude comments, which only makes her laugh.');
    scene.text('You put your camera away and she gets dressed as you ignore the boys. "Let\'s get out of here," you tell her.');
    scene.text('She smiles at you and sticks her hand over the railing one last time to flip the boys off before you climb back in the window. "So we going back to my place?"');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You nod. "Sure, sounds good." The two of you walk back to her apartment talking about the photo shoot and laughing at the boys.');
    scene.actions([
      { label: 'Back', goto: ['anush_bedroom_city', 'anushroom'] },
    ]);
  } },
      { label: 'I should go', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "No, I should really get going. I need to go through these and pick out the perfect picture, which won\'t be easy with my amazing model."');
    scene.text('She laughs and bumps you with her hip as you walk down the hall to the stairs. "Alright bitch, I\'ll see you later."');
    scene.text('"Later," you reply as she heads into her apartment and you head out of the building.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'photo_chat':
      enterPhotoChat(s, scene);
      break;
    case 'boyfriend_chat':
      enterBoyfriendChat(s, scene);
      break;
    case 'tell_about_generic_boyfriend':
      enterTellAboutGenericBoyfriend(s, scene);
      break;
    case 'telling_marrige_dreams':
      enterTellingMarrigeDreams(s, scene);
      break;
    case 'radval':
      enterRadval(s, scene);
      break;
    case 'tell_about_olu':
      enterTellAboutOlu(s, scene);
      break;
    case 'tell_about_djibril':
      enterTellAboutDjibril(s, scene);
      break;
    case 'tell_about_djibril1':
      enterTellAboutDjibril1(s, scene);
      break;
    case 'invite_djibril':
      enterInviteDjibril(s, scene);
      break;
    case 'tell_about_djibril_gangbang':
      enterTellAboutDjibrilGangbang(s, scene);
      break;
    case 'invite_djibril_gangbang':
      enterInviteDjibrilGangbang(s, scene);
      break;
    case 'photoshoot':
      enterPhotoshoot(s, scene);
      break;
    case 'photoshoot1':
      enterPhotoshoot1(s, scene);
      break;
    default:
      enterChat(s, scene);
      break;
  }
}

export const anushkachat_city: LocationDef = {
  name: 'anushkachat_city',
  title: 'Anushka\'s Room',
  region: 'other',
  enter: enter,
};
