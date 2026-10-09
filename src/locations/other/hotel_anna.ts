import { qspCall, qspGoto, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMeeting(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorevnaBDSM ?? 0) === 5) {
    qspGoto(s, 'hotel_anna', '1');
  } else {
    if (((s as any).IgorevnaBDSM ?? 0) === 6) {
      qspGoto(s, 'hotel_anna', '2');
    } else {
      if (((s as any).IgorevnaBDSM ?? 0) === 7) {
        qspGoto(s, 'hotel_anna', '3');
      } else {
        if (((s as any).IgorevnaBDSM ?? 0) === 8) {
          qspGoto(s, 'hotel_anna', '4');
        } else {
          if (((s as any).IgorevnaBDSM ?? 0) === 9) {
            qspGoto(s, 'hotel_anna', '5');
          } else {
            if (((s as any).IgorevnaBDSM ?? 0) === 10) {
              qspGoto(s, 'hotel_anna', '6');
            } else {
              if (((s as any).IgorevnaBDSM ?? 0) === 11) {
                qspGoto(s, 'hotel_anna', '7');
              } else {
                if (((s as any).IgorevnaBDSM ?? 0) === 12) {
                  qspGoto(s, 'hotel_anna', '8');
                } else {
                  if (((s as any).IgorevnaBDSM ?? 0) === 13) {
                    qspGoto(s, 'hotel_anna', '9');
                  } else {
                    if (((s as any).IgorevnaBDSM ?? 0) >= 14) {
                      qspGoto(s, 'hotel_anna', '10');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === '1') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/resident/Anna/annacorridor1.jpg');
    scene.text('You decide to check for Anna Igorevna. You think it\'s the better option, there\'s no harm in visiting her and you don\'t want to be disrespectful, especially if not doing so lead her to say something to Mr. Leonidovich. You reach the floor and to your surprise Anna Igorevna seems to waiting for you.');
    scene.text('"I\'m glad you\'ve decide to come. Please come in, we can chat on the sofa."');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text(`Both of you enter the room and go to sit on the sofa. "Well ${((st as any).pcs_nickname ?? '')}, we shouldn't be disturbed… or peeped." She says with a little smile.`);
    scene.text('Feebly you respond, "I-i want to apologise, it was wrong of me to peep on you like that. I\'m here to say you that I won\'t do that again."');
    scene.text('She peers straight at you, it feels like if she\'s scanning through your soul. "As I said I usually encourage curiosity, but you need to know the limit of your skills. I mean: Would you be able to hack the KGB\'s servers without being able to turn on a computer? But that\'s not the point, I didn\'t want to help you in becoming a spy."');
    scene.text('She\'s got a point, you are far from being a secret agent, and this is not the reason for you to be here of course. "Let me ask a question: Did you like what you saw?" She ask without any embarrassment.');
    scene.text('You don\'t know how you should answer, but it seems she\'s not interested in reporting you. "Well I don\'t know. I know a little about sex, but this is some kind of next level shit."');
    scene.actions([
      { label: 'Did I just say shit to Lariska\'s mom?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro2.jpg');
    scene.text('Ignoring your language Anna replies "Next level… an interesting definition. Still you didn\'t answer my question." She continues to scan you and fiddles with her hair.');
    scene.text('"Say, are you interested in knowing something more about what you have seen? I\'m not suggesting taking part or anything, just some chit-chat about the \'next level shit\'"');
    scene.text('"I-i.." You stammer a little taken aback… did she ask if you want to learn more about what she was doing?');
    scene.text('"No need to answer now. Come visit me if you are interested. I\'m sure it is something new for you so I understand your concern, and I assure it will be a simple chit-chat. Do you know for example that what you have seen is more common than you think? You can learn something useful maybe I have some tips for your spying hobby too." She smiles.');
    scene.text('Did she say shit? "I don\'t know. It\'s a lot to take in. I was worried about my job and now you are talking about teaching me about… Whatever this all is."');
    scene.text(`'"${((st as any).pcs_nickname ?? '')}, I'm not going to say anything about your peeking to anyone whatever happens. I should have locked the door so that is my fault, I was playing a game of risk. Knowing someone might open the door at any time it is thrilling and dangerous." She pauses. "You can come to visit me here on Mondays and Tuesdays at 20:00 if you decide you want to learn. We'll chit-chat a little and maybe come to some other arrangements in the future to satisfy your curiosity.".'`);
    scene.text('"I\'m grateful Miss Igorevna, I will have to think about it."');
    scene.text(`"I'm glad you came and please, call me Anna. Now I have things to do so you'll have to leave for now." Anna Igorevna leads you to the door. "See you soon ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'go away', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '2') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob0.jpg');
    scene.text('You decide to visit Anna to chat about what you saw her doing in her hotel room, so you go to her floor and politely knock on the door.');
    scene.text(`"Hi ${((s as any).pcs_nickname ?? '')} I'm glad you decide to continues our discussion, please come in." You thank her and enter the room.`);
    scene.text('"You look great, Anna. Your dress suits you in a wonderful way." Anna directs you to a chair then sits opposite on the sofa.');
    scene.text(`"Thank you ${((s as any).pcs_nickname ?? '')}, it's not everyday you receive such a compliment from another woman. Anyway, I'm sorry to have pushed you a little last time, but being peeped on several times has made me suspect you may be interested in what you have seen."`);
    scene.text('"Oh, I don\'t know you said we can have a chit-chat."');
    scene.text('"Are you sure you aren\'t curious, maybe a little bit? Or maybe you have some little questions you were never be able to ask?"');
    scene.text('"Well…"');
    scene.text('"Let me try another approach, what do you think you have seen?"');
    scene.actions([
      { label: 'A-a sado service?', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('You wait for her reaction. She tries not to but breaks out in a huge smile close to laughing "Wow! To be so innocent again. No, i\'m not convinced you know what that even is. I don\'t do this for money. Sometimes I will sell my services, that\'s true, but that can be very limiting. You have to stick to what you have agreed in the price and cannot always stop people from doing what they want. This is a Lifestyle for me and for my community, we willingly do what we like."');
    scene.text('"And this lifestyle is…?"');
    scene.text('"The BDSM lifestyle. BDSM stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. It comes in many forms, and there are a lot of disciplines; possibilities are nearly endless. BDSM can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as a matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A perverted game?', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dom'] = ((st as any).AnnaQW['dom'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('You wait for her reaction. "A typical vanilla answer. Ok, I\'ll shine some light in the darkness: You saw a Lifestyle. I won\'t hide that it can be scary but just because society is telling you it isn\'t natural, does not mean it is not natural to you."');
    scene.text('"I don\'t mean to be rude but most of the people I know would see this as some kind of perversion."');
    scene.text('"Mmmm… What do you know about BDSM?"');
    scene.text('"The things you have done in this room…"');
    scene.text('"Sort of, but this is very reductive. BDSM is a popular acronym, it stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. Those activities are obviously a part of it but not even close to the whole. It\'s a lifestyle, and there\'s no need to fulfil all of the criteria for you to be considered a BDSM practitioner; also a lot of "vanilla" activities are actually BDSM practices. It can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as the matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I saw nothing!', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['switch'] = ((st as any).AnnaQW['switch'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('Anna looks very serious, "I see you have been working on your spy skills, don\'t worry I am skilled at interrogation. I could beat the truth out of you if you wish"');
    scene.text('"What? I mean… I don\'t know what you did… it was none of my business!"');
    scene.text(`"Hahaha, I'm joking ${((st as any).pcs_nickname ?? '')}, don't worry. I don't like to judge, and don't care if someone else judges me, so feel free to speak openly with me: what you saw is a lifestyle."`);
    scene.text('"And this lifestyle is…?"');
    scene.text('"The BDSM lifestyle. BDSM stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. It comes in many forms, and there are a lot of disciplines; possibilities are nearly endless. BDSM can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as a matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enter2a(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === '3') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    ((s as any).AnnaQW = (s as any).AnnaQW ?? {})['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy0.jpg');
    scene.text('You decide to visit Anna again, she did say you would be talking about fun stuff this time. You knock on the door which to your surprise the door is open.');
    scene.text(`"${((s as any).pcs_nickname ?? '')}, come in I'm on the sofa."`);
    scene.text('"Hi Anna, I was passing and I… oh, erm…"');
    scene.text(`"I hope you don't mind ${((s as any).pcs_nickname ?? '')}, I'd like to let my body breathe a little, all day wearing the same tight dress starts to feel a bit claustrophobic, please take a seat. I want to show you some toys I've brought to cover a number of activities in my lifestyle."`);
    scene.actions([
      { label: 'Cover your eyes', handler: (st: GameState) => {
    (st as any).annaToy = 1;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1a.jpg');
    scene.text('"I-I\'m sorry… A-Anna… I cannot look."');
    scene.text('"Seriously? You saw me naked! OK, fine I\'ll cover a little, my puppies will stay in place. It\'s better for you to focus on the session. Anna covers herself up a little.');
    scene.text('"Good, let\'s start then. In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod trying to not look at her body.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Wow! You got two really big boobs!', handler: (st: GameState) => {
    (st as any).annaToy = 2;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dom'] = ((st as any).AnnaQW['dom'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1b.jpg');
    scene.text('"Crap even the reduction surgery wasn\'t enough then, it\'s always the same."');
    scene.text('You are surprised by such candid talk about cosmetic surgery');
    scene.text(`"Don't mind me ${((st as any).pcs_nickname ?? '')}, the main thing is that you listen"`);
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Stare at her boobs', handler: (st: GameState) => {
    (st as any).annaToy = 3;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['switch'] = ((st as any).AnnaQW['switch'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1c.jpg');
    scene.text(`[Snap snap] (She clicks her fingers) "${((st as any).pcs_nickname ?? '')}, my eyes are up here, I don't mind you looking at me but we don't have the whole day."`);
    scene.text('"Oh!…emmmh… yes…"');
    scene.text('"Do not worry the main thing is that you listen to me"');
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"Who decides who plays those games and which games you play?"');
    scene.text('"It is decided by us. We speak about Dominance and submission, a D/s relationship for short; this can be for any duration, for an hour or a lifetime, usually within negotiated limits. The relationship will guide the roles, the games we play, and the limits within those games. A submissive is an individual who consents to give up power to a Dominant; there are different levels of submission and Dominance, for example a submissive can be a coca-cola, a light sub who only obeys the easy stuff or only when he/she feels like it, or a slave engaged into a Master/slave relationship. What really matters is not the games or the nature of those games but the relationship itself. Both will benefit from a relationship if it\'s correctly built and supported. Just like any relationship, except for the sake of safety we set out rules first."');
    scene.actions([
      { label: 'Oh!…emmmh… ok', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"It\'s easy to imagine the Dom\'s benefit but subs have their own. I can simply tell you that a sub generally likes to be dominated, but there\'s something else; to live as a sub is to avoid having to make hard choices for example and the stress that comes from that. Of course some subs just really like pain, but every case is something unique with a little or a lot of many things. What is universally accepted in our lifestyle is that all the benefits increase according the relationship. This is not something you can have immediately, you have to feed it. Communication, levels/limits, safe words, preparation and after care are the tools which help you to build your BDSM relationship and they must be provided by both parties. You cannot achieve this goal if you don\'t completely trust your partner. Here comes the need some feel to declare their relationship in contracts, like a wedding; this is often for a proper M/s or Master/slave relationship. Even without this the agreement both parties reach through words can be seen as a verbal contract."');
    scene.actions([
      { label: '…a-a contract?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"Do not be surprised. It\'s like a wedding, a real wedding. The difference is in the details the parties agree on. For example, some real weddings can be made because they have had an unwanted child without an real feeling between those getting married. BDSM contracts cannot exist without mutual agreement.');
    scene.text('They are not legally enforceable of course as they limit the rights of one or both parties and actual slavery is not legal, nonetheless I can assure you that since it\'s a mutual agreement M/s contracts usually last longer than regular marriages, not to mention that breaking these contracts will end the mutual benefits.');
    scene.text('Usually these contracts are made between a Dom and a sub but that\'s not a general rule; they can involve switches too. A switch is a person who can both Top and bottom depending on the situation and their partner, they can be a Dom and a sub."');
    scene.text('"So you are a switch?"');
    scene.text(`Anna smiles, "Very astute ${((st as any).pcs_firstname ?? '')}, I am in my own time and sometimes professionally but my job now requires me to be Dominant. We will get to that in another chat our time is limited. Just remember both the sub and the Dom get pleasure from their roles and we'll talk about some more fun stuff next time."`);
    scene.text('Anna politely leads you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3a(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Focus', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2a.jpg');
    } else {
      if (((st as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2b.jpg');
      } else {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2c.jpg');
      }
    }
    scene.text('"We can divide the toys I\'ve brought into different categories: beating, flogging, sensation play, pleasure and edgeplay. As you can imagine pain has a great role in BDSM, here we have two example of typical toys that can bring you pain: a paddle and a riding crop. You can easily find those items but without them you can use alternatives.');
    scene.text('So paddle is typically used for spanking, but if you don\'t have one you can use your bare hand or the back of a hair brush. While crop is more specialist it can be found in a sex shop of course or somewhere you\'d buy horse riding equipment. They are used to whip across someone\'s butt and also intimate areas.');
    scene.text('We usually start with a warm up using some pain before intercourse as this allows the sex acts to last longer and builds the intensity, for this the riding crop is the most popular. Next we have some flogging tools, they are quite self explanatory. The martinet is the smallest whip we have with a very short handle and multiple tails, it gives great control and a spread of sensations compared to the riding crop which takes a bit of skill to use accurately and is very focused but can deliver a lot more pain."');
    if (((st as any).annaToy ?? 0) === 3) {
      scene.text(`${((st as any).pcs_nickname ?? '')}, you seem a little distracted… should I cover up?"`);
      scene.text('"Oh!…emmmh… no no… there\'s no need, you were talking about something to "warm up" if i\'m correct…"');
      scene.actions([
        { label: '(…Wow! "They" are… BIG… maybe warm too…)', goto: ['hotel_anna', '3b'] },
        { label: 'Focus…', handler: (st: GameState) => {
    (st as any).annaToy = 4;
  }, goto: ['hotel_anna', '3b'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['hotel_anna', '3b'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter3b(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).annaToy ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3a.jpg');
  } else {
    if (((s as any).annaToy ?? 0) === 2) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3b.jpg');
    } else {
      if (((s as any).annaToy ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3ca.jpg');
        scene.text('"Exactly! That means you were listen to me, good I can finally loosen my top. That leather dress leaves my poor breasts numb, I think it is a couple of sizes too small." Anna let\'s her top fall away completely.');
      } else {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3cb.jpg');
        scene.text('"Exactly! That means you were listen to me, good after a day in that tight leather dress even this gown feels restricting." Anna start to disrobe herself.');
      }
    }
  }
  scene.text('"After a good warm up we can move to some more serious toys like the quirt (or short whip). It\'s used during the main part of the session. It combines parts of both the crop and the martinet having a long handle and these falls that from the whip are which are quite short. Cowboys use them to hit cattle from their horses and they can cause a lot of pain so they must be used carefully.');
  scene.text('With a whip or none rigid implement the face and head are forbidden places to strike unless the eyes are covered, this is important these toys can be dangerous and we should never do something that could cause lasting harm to another.');
  scene.text('Back to the warm up phase this in itself can extremely intense and to aid that we have sensation play. The Wattenburg wheel and cupping can be part of that. Sensation play allows us to increase the perception of a good pain instead of a bad pain, I know that sounds strange but linking the pain to pleasure makes the pain feel like pleasure. These concepts are a bit advanced so maybe we\'ll cover it in more detail another time.');
  scene.text('We also have toys that can be used purely for sexual pleasure such as the butt plug or my Hitachi vibrator."');
  if (String((s as any).locArgs?.[0] ?? '') === '4') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr0.jpg');
    scene.text(`You knock at Anna's room. "${((s as any).pcs_nickname ?? '')} come in, the door is open!" You hear her shouting.`);
    scene.text('You reach the middle of the room before you see Anna playing on a swing.');
    scene.text('"You\'re lucky! A friend of mine just gave me a gift that\'s semifixed furniture and can be used as a toy and a restraint." She says leaning back and swinging almost like a child if it wasn\'t for her extremely revealing outfit.');
    scene.text('"You mean the swing?"');
    scene.text('"Exactly! It\'s a very particular swing… it\'s a \'fisting sling and swing.\'" She seems very proud of her new swing but you are looking at all the clips and straps and start to worry about how you will have to remember how to use them all picturing it all going wrong and Anna falling and hurting herself. "Unfortunately I cannot let use this yet, I have to test it and it\'s too complex for you at this stage. As semifixed furniture it has to be assembled in place and be tested." She swings as she says this and you start to think she just doesn\'t want to share her new toy with you.');
    scene.actions([
      { label: 'Test her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['switch'] = ((st as any).AnnaQW['switch'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr1.jpg');
    scene.text('"It seems to be working great, perhaps you should see if it works for someone else to make sure it is safe?"');
    scene.text('Are you asking to try it? I told you, you cannot, it has to be tested."');
    scene.text('It\'s clear you are not going to get to use it but you are still intrigued "OK, so how should it be used?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'She is the leader', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr1.jpg');
    scene.text('"I understand you are the leader here."');
    scene.text('"The leader… hahaha… maybe a \'mentor\' but not a leader. I\'m not making any political movements. Anyway I\'ll give you few tips on fisting and the swing… they have a role in BDSM after all.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A swing for fisting? Come on', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dom'] = ((st as any).AnnaQW['dom'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr1.jpg');
    scene.text('"You don\'t need a swing for fisting another woman."');
    scene.text('"You are right, but the usual fisting depends completely on the fister\'s decisions. Anyway I assume you know something about fisting but I\'ll go over it with you just to make sure."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4a.jpg');
    } else {
      if (((st as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4b.jpg');
      } else {
        if (((st as any).annaToy ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4ca.jpg');
        } else {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4cb.jpg');
        }
      }
    }
    scene.text('"Finally edgeplay, technically this refers to knife play, but it has come to mean anything \'on the edge\' or considered \'extreme\'. It is common in the M/s relationship, but not exclusive to it. Here we have needles for needle play: Sterilized needles which are inserted through the top layer of the skin. Every time an item is used in edgeplay and is not disposable it has to be sterilized with the right protocol, we don\'t want to be spreading diseases or causing infections.');
    scene.text('Then something not so bad, a set of Violet wands, they use electricity that can deliver a variety of sharp, cutting, or piercing type sensations. It\'s not strictly edgeplay but something you could use to get an understanding of edgeplay much more safely');
    scene.text(`I'm sorry if some of this is a bit scary ${((st as any).pcs_nickname ?? '')}, but I think that knowledge shouldn't be censored even when we don't like something. It can be hard to accept that someone may like a real extreme side of BDSM, but it's right for you to know that it exists and by understanding how it should be used you will be aware if you see it being misused everybody should be aware of that. One of the main things people in are community dois ensure that we are all safe. If I did something to you that you didn't like and wanted me to stop I would of course stop but if I did not, having someone else there to ensure I did protects you and me.`);
    scene.text('That is all the toys so now I can show you how one of them works if you like.');
    scene.actions([
      { label: 'Choose a toy for a demonstration', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/ztoy.jpg');
    scene.text('Anna presents you some toys to choose from:');
    scene.text('<table border=1><tr><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027toys_paddle\u0027); return false;">Paddle</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027toys_vacuum\u0027); return false;">Vacuum cups</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027toys_wheel\u0027); return false;">Wattenburg wheel</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027toys_wand\u0027); return false;">Violet wand</a></td></tr>');
    scene.actions([
      { label: 'go away', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4a.jpg');
    } else {
      if (((st as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4b.jpg');
      } else {
        if (((st as any).annaToy ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4ca.jpg');
        } else {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4cb.jpg');
        }
      }
    }
    scene.text('"I think it\'s time for me to leave"');
    scene.text('"Of course my dear, we can do this another time if you are ever interested." Anna leads you to the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4a(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well first of all you have to know that fisting is a common and highly pleasurable practice that has to be done in secure position. You need lubed gloves for inexperienced practitioners, those more advanced can start small and work up to it using the women\'s arousal and natural lubrication although anal fisting requires lube no matter how good you are.');
  scene.text('Now the swing\'s role, it allows the person being fisted to decide the deepness of the penetration giving them control that is otherwise entirely in the hands of the person fisting. It lets you control something that is usually controlled by another and that is a way to trigger new mental sensations.');
  scene.text('It is not cheap though. BDSM gear can cost a lot especially elaborate furniture. That is not a worry if you get it as a gift though" She smiles. "Now for the restriction part, the fisting swing can be used to pose a sub not without a need to fist them, the pose can be very exposing making them available for various sex acts or simply to be admired.');
  scene.text('OK enough about my fabulous new swing let\'s talk about restriction and again I ask you to wait until the end where I\'ll give you a choice for a demonstration."');
  if (String((s as any).locArgs?.[0] ?? '') === '5') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract00.jpg');
    scene.text('As you approach you hear talking from Anna\'s room. Maybe Anna forgot about your encounter or perhaps her client is very early? You don\'t want to upset one of her clients so you act like a guest and walk past her room thinking that it might be better to leave her for today when you over hear her conversation.');
    scene.text('"Don\'t worry I\'ll bring her back safe."');
    scene.text('"I\'m not worried about her health, just how long it would take her to recover."');
    scene.text('"Oh, don\'t be so dramatic. I told you what the client wanted and I\'ll make sure they stick to it, she\'ll be back to you good as new sweetie, now stop worrying and get out of here." You hear two kisses as they say goodbye.');
    scene.text('As the other woman leaves you recognise her, it\'s a friend of Anna\'s you have seen before.');
    scene.text('You act like you are searching for your door key outside another door until the woman has got in the lift and then make your way to Anna\'s door. "Anna, are you here?"');
    scene.text('"Don\'t stand here like a potato in the soil, come in!"');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract01.jpg');
    scene.text('"Hi Anna how are y… ooof." She squeezes you hard in a hug, her large breasts expanding all over your body smothering you and making it impossible to finish the sentence.');
    scene.text(`"${((st as any).pcs_nickname ?? '')} my dear! I'm totally fine now that you are here! I was waiting for you, well I wasn't alone but my guest knew I was waiting for someone, anyway tell me all about yourself. I miss our chit chat."`);
    scene.text('"Oh well I just got here, I saw your guest and thought you had a client so I was discreet, I have missed our chit chat too."');
    scene.text('"My dear, you are like a spy. My friend would have liked to meet you, but I\'m sure but that can wait." She muses before snapping back to her usual self.');
    scene.text('"Thanks to her a have a surprise for you, but not today, next time. It will really help and get a very insistent client to stop requesting something specific." She smiles.');
    scene.actions([
      { label: 'OK', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract02.jpg');
    scene.text('"Today\'s lesson: \'Practical lesbian sex!\'"');
    scene.text('"WHAT? Wait… we never spoke about that." You exclaim unsure how to process this huge escalation in your studies.');
    scene.text('"Oh! Not you. Sorry, I didn\'t think." She holds her hands up in apology. "You will be only a spectator for the sex. You\'ve always been one for peeping and this time you can actually learn something." She smiles at her little dig.');
    scene.text('"You see sex for those in our community is never about just sex, often the sex is a tool used to train or reinforce. You will be in the room, clearly visible and with full view of what is happening but no interaction allowed. That\'s the rule for this encounter and if you break that there will be a punishment."');
    scene.text('"A spectator huh?"');
    scene.text('"Exactly! You should wear something more suitable and there\'s not a lot of time before we start. Will you join me?"');
    scene.actions([
      { label: 'Join her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03a.jpg');
    scene.text('"Wonderful!" Anna starts stripping right in front of you. She seems pretty exited about this session, or maybe horny.');
    scene.text('"Erm…" You are not even sure what to say.');
    scene.text('"Of course, your clothes. Over there on the bed." She points towards two outfits laid out on the bed.');
    scene.actions([
      { label: 'Oh!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05a0.jpg');
    scene.text('There are two outfits on the bed, one is leather and the other rubber. They are otherwise quite normal dresses but th echoice of material makes it clear they are for a Dominant to wear.');
    scene.text('You look back at Anna who is putting on her own outfit which includes a tight corset. Right now it is only serving to make her exposed boobs look enormous.');
    scene.text('"Its OK to look sweetie, I like the attention but we don\'t have time now. Pick an outfit." She says then cups her breasts and makes a show of teasing you.');
    scene.actions([
      { label: 'Leather', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dress'] = 1;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    scene.img('images/pc/items/eroto/dress/49.jpg');
    scene.text('"My My! A classic one! You look stunning! Here let me help you a bit." Anna fusses about you getting the dress smoothed out and straight.');
    scene.text('"Thank you Anna, I\'m not used to wearing clothes like this."');
    scene.text('"You look perfect but my outfit is too tight, I\'ll switch to this red one and then this little black set for the sex."');
    scene.actions([
      { label: '"Why two outfits?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05a2.jpg');
    scene.text('As she is changing Anna explains: "The first comes with this hat and looks a bit like a military outfit, it is meant to show who is the boss. The second one is skimpy and sexual and let\'s the sub know we have moved on to the sex part."');
    scene.text('Once changed Anna starts to leave the room, "Come on sweetie. Our guest is in the next room."');
    scene.actions([
      { label: 'Follow Anna', goto: ['hotel_anna_sex', 'les_sex'] },
    ]);
  } },
    ]);
  } },
      { label: 'Rubber', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dress'] = 1;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    scene.img('images/pc/items/eroto/dress/12.jpg');
    scene.text('"You look stunning! Does the rubber bother you? Here let me help you a bit." Anna fusses about you getting the dress smoothed out and straight.');
    scene.text('"Thank you Anna, I\'m not used to wearing clothes like this."');
    scene.text('"You look perfect but my outfit is too tight, I\'ll switch to this red one and then this little black set for the sex."');
    scene.actions([
      { label: '"Why two outfits?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05a2.jpg');
    scene.text('As she is changing Anna explains: "The first comes with this hat and looks a bit like a military outfit, it is meant to show who is the boss. The second one is skimpy and sexual and let\'s the sub know we have moved on to the sex part."');
    scene.text('Once changed Anna starts to leave the room, "Come on sweetie. Our guest is in the next room."');
    scene.actions([
      { label: 'Follow Anna', goto: ['hotel_anna_sex', 'les_sex'] },
    ]);
  } },
    ]);
  } },
      { label: 'Don\'t change clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract04a.jpg');
    scene.text('"I\'m sorry Anna I can\'t"');
    scene.text('"That\'s OK, you can be shy for now but you will need to be more open if you want to complete your training."');
    scene.text('She picks up two more outfits from a case. "This one is a bit too tight, I\'ll get things started with this red one and change into this skimpy one for the sex."');
    scene.text('"Come on!" She shouts having changed into a tight red bodysuit far quicker than you thought possible.');
    scene.actions([
      { label: 'Follow Anna', goto: ['hotel_anna_sex', 'les_sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Politely decline', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('"I\'m sorry Anna, its a bit much for me." You do your best excuse to explain to Anna that you don\'t feel comfortable with this proposal.');
    scene.text('She seems to understand your apologies, and instead talks you through how the session would have gone.');
    scene.text('She explains about the order of a proper intercourse, and the different way to approach it with the same results. Also, she gives you some more tips about D/s relationship, the correct way to refer to each partner and the behaviour that has to be assumed within the relationship.');
    scene.text('She tells you that this is all she can teach you without a practical demonstration but since you didn\'t want to do it this ends your session and she has a client waiting so has to rush off.');
    scene.text('Anna doesn\'t waste the opportunity to tell you that she will miss you for this session, without letting you feel the weight of your decision: it seems this doesn\'t have an impact on your session and again she reassure you telling that you have to do what you are comfortable with. You quickly exchange your greeting and both of you return to their own things to do.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '6') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
    scene.text('Anna is waiting for you when you arrive: "Hello Sweetie!" She gives you a quick hug.');
    scene.text('"Last time was a bit intense for me to just spring on you without warning but I didn\'t know if I could set it up and when you\'d visit. I have to setup the other room for a special client, can you wait here for about 15 minutes?"');
    scene.text('You are getting free training so a 15 minute wait doesn\'t seem too bad.');
    scene.text('"Great, there\'s another girl in there, don\'t untie her. Or do, but then I will have to punish you." She flashes you a wicked smile before going to the next room.');
    scene.actions([
      { label: 'Enter the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract04b.jpg');
    scene.text('There is a woman bound and gagged on a chair in the room. A few weeks ago this would have been shocking to you but it\'s become a lot more normal now that you are training with Anna.');
    scene.text('The woman is tied in rope to restrict her movements, the knots are not great and look a bit rushed. She has gaffer tape across her mouth.');
    scene.text('You sit down as you study her situation, she murmurs trying to communicate.');
    if (((st as any).AnnaQW ?? 0)?.['dom'] > 1) {
      scene.actions([
        { label: 'Leave her taped up and wait for Anna', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b0b.jpg');
    scene.text('You sit and wait for Anna, trying to ignore the woman tied up on the chair near you, but you keep hearing a rustling sound coming from her direction.');
    scene.text('You look at the woman wriggling around trying to get comfortable.');
    scene.actions([
      { label: '"Stop moving!"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract04b.jpg');
    scene.text('You shout at her to stop moving and she sits back upright as she was when you entered and does not move again.');
    scene.text('You play around on your phone as you wait for Anna to get back from whatever she is doing next door.');
    scene.actions([
      { label: 'Finally', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
    scene.text('Anna returns, she looks to you and then to the woman, "Exactly as I left her, no punishment for you Sweetie."');
    scene.text(`She walks over to the woman, "As for you Jeanie, you've got another hour of this while I entertain my client. Maybe spend that time reconsidering betting against ${((st as any).pcs_firstname ?? '')} again?"`);
    scene.text('Anna is laughing, "Well you\'ve done well Sweetie but this little test was our session, I have to get to work so I will see you next time and we\'ll do something a bit more hands on."');
    scene.text('This was pretty disappointing but Anna has her ways and did seem very busy, you make your way to the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Move the tape away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b0a.jpg');
    scene.text('The tape was really stuck to her mouth and it takes a lot of force to remove. Slowly peeling it would probably be agony so you brace yourself and just rip it off.');
    scene.text('"Thank you Ma\'am." She doesn\'t seems to react to the pain but the red mark shows you it must be sore.');
    scene.text(`"Hi, I'm ${((st as any).pcs_firstname ?? '')}" You say as introduction and think it might have been polite to have done so before tearing gaffer tape off her face.`);
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b1b.jpg');
    scene.text('She carefully avoids to look directly in your eyes mostly with her eyes cast downward.');
    scene.text('After some time she speaks. "Ma\'am. I think I have a cramp in my arm, could you untie me so I can stretch it out?"');
    if (((st as any).AnnaQW ?? 0)?.['sub'] > 1) {
      scene.actions([
        { label: 'Free her', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b1c.jpg');
    scene.text('"Let me see what I can do, What\'s your name?", You ask as you work on the ropes trying to set her free.');
    scene.text(`It doesn't take long as the knots are so poorly tied. "Thank you ${((st as any).pcs_nickname ?? '')} this slut's name is Jeanine."`);
    scene.text('"Jeanine, what a beautiful name, how did you end up like this?"');
    scene.text('"Oh, I made a bet. I bet Anna I could get you in trouble. Didn\'t I Anna?"');
    scene.actions([
      { label: 'Turn around', goto: ['hotel_anna', 'spank'] },
    ]);
  } },
      ]);
    }
    if (((st as any).AnnaQW ?? 0)?.['dom'] > 1) {
      scene.actions([
        { label: 'Fix her bindings', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b1c.jpg');
    scene.text('Instead of doing as she asks you decide it\'d be a lot more comfortable if she was tied properly and re-do her bids correctly.');
    scene.text('"Oh, that is much better. Thank you ma\'am." Realising you had forgotten one thing, you reattach her tape gag and give her a kiss on her taped mouth.');
    scene.text('You sit and wait for Anna to return.');
    scene.actions([
      { label: 'Anna', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
    scene.text('"Sorry Sweetie, that took a little longer than I expected. Oh, you\'ve fixed her ropes. That\'s wonderful work and now Mistress Jeanie will have to stay tied up while I spend an hour with my client and regret betting against you."');
    scene.text('Anna laughs for some time, clearly finding her friend\'s misfortune far more amusing than you do. Perhaps they have some kind of rivalry?');
    scene.text('"As you might have guessed this was something of a test for you Sweetie and it could not have gone better. Now I have work to do, I look forward to our next session."');
    scene.text('Anna gives you a friendly kiss on the cheek as you pass her on your way to the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tape her mouth shut again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract05b1a.jpg');
    scene.text('"No, no. Please do…" You put the tape back on her mouth cutting her protest short and sit down to wait for Anna.');
    scene.text('"Babushka always tells me \'If you find a stray dog on a leash never let it free, you will never know\' " You quote to her. It is an odd saying but common enough to the area that she will understand.');
    scene.actions([
      { label: 'Finally', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
    scene.text('"Sorry Sweetie, that took a little longer than I expected. I hope Mistress Jeanie enjoyed your company as she will have to stay tied up while I spend an hour with my client and regret betting against you."');
    scene.text('Anna laughs for some time, clearly finding her friend\'s misfortune far more amusing than you do. Perhaps they have some kind of rivalry?');
    scene.text('"As you might have guessed this was something of a test for you Sweetie and you have passed. However I will have to fix those bindings as Jeanine must be uncomfortable. Now I have work to do, I look forward to our next session."');
    scene.text('You make your way to the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
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
  }
  scene.actions([
    { label: 'Focus', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr2.jpg');
    scene.text('I\'ll start with something really basic: ropes and tape. Restriction is meant to be both physical and mental within BDSM, we\'ll stick to the physical restriction for now as mental restraint is a more complex subject for another time.');
    scene.text('The basics of restriction is to limit movement. For this you can use ropes, tape, chains and cuffs securing the last two with padlocks and specialist items such as arm binders and straight jackets. There are other ways, just lying on top of someone or holding their arms or legs together will restrain someone.');
    scene.text('Anyway, physical restriction is not limited to preventing movement it can reduce it too. For this you could use very high heels, chains between arms and/or legs, special tight skirts (called hobble skirts), a leash like you\'d use on a pet or small spaces like a chest or cage. Anything that prevents someone from moving with the freedom they would otherwise have.');
    scene.text('These can be used in normal play or to discipline and training a sub and in that case you can also use something like this chastity belt. It\'s main purpose is to prevent sexual activities, not orgasms as you can see this chastity belt has a built in vibrator… "');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr3.jpg');
    scene.text('"An important aspect is what is called sensation play. As I said last time, warm-up increases both the duration and the sensation of a session; some restriction items can be used with the same purpose: here we have a double breast clamp, some suspension cuffs and a head harness with a blindfold and a gag. To be suspended or to lose sight during a session will increase the feeling, both for sex or pain.');
    scene.text('The breast clamp can increase the sensitivity of your boobs and ropes can be used to similar effect. Much like in some vanilla sex we use roleplay to create the right mood or environment, we go a little further with it and that\'s when something like this collar and leash come in.');
    scene.text('While it might seem self explanatory you as a restraint and to support the sub and Dom roles it is commonly used in what we call pet play: A form of role play in which one or more participants act like animals. Pet play can be very serious with the pets being treated as owned much like real pets, that is in the world of M/s relationships. Such pets will sometimes need to be tamed through discipline and training, but well cared for and behaved pets are extremely faithful making them perfect slaves."');
    scene.actions([
      { label: 'This would be a bad time to bark', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr4.jpg');
    scene.text('"As you have seen some items can have multiple purposes. Harnesses for example can be used as restriction item or as an outfit for both sub and Dom. A spreader bar can be used to teach a sub to expose their breast or pussy, or to be linked to various things to force the sub to hold a position.');
    scene.text('So \'Linking\' is simply the process of connecting one restraint to another or a fixed point so that it is connected to the floor, a wall or some furniture. Tying ropes is a fast way to do this but not as fast as padlocks. Tape can be used for the same purpose with some adjustments, but its fiddly and not as secure, it\'s mostly used to gagging, binding or mummification (an edgeplay where the whole body is wrapped around with film or tape leaving just nostrils or mouth to allow breathing).');
    scene.text('That\'s it for today unless you want a demonstration." Anna starts putting the more advanced items away.');
    scene.actions([
      { label: 'Choose something for a demonstration', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/zrestr.jpg');
    scene.text('A set of items stand in front of you');
    scene.text('<table border=1><tr><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027restraints_rope\u0027); return false;">Ropes</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027restraints_harness\u0027); return false;">Harness</a></td>');
    scene.text('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027restraints_leash\u0027); return false;">Collar and leash</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027hotel_anna_gear\u0027, \u0027restraints_cuff\u0027); return false;">Cuffs</a></td></tr>');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Skip the demo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr4.jpg');
    scene.text('"Thank you Anna but I should go."');
    scene.text('"Of course dear, if you\'ll forgive me getting in and out of this swing is a bit awkward so I won\'t walk you to the door."');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
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

function enterSpank(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
  scene.text('Anna is standing there looking at you holding the ropes you had just untied from Jeanie, if that is even her name.');
  scene.text(`Well ${((s as any).pcs_firstname ?? '')}, I wonder if you did this because you wanted to be punished of if you simply don't listen. Either way I gave you fair warning so get on my knee. Now!"`);
  scene.text('Anna has sat down and Jeanie is standing right behind you, her breath on your neck. It doesn\'t look like you have a choice.');
  if (String((s as any).locArgs?.[0] ?? '') === '7') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract19.jpg');
    scene.text('You knock at Anna\'s door for your weekly visit. "Hi Anna!"');
    scene.text(`"${((s as any).pcs_nickname ?? '')} Move, move… it's started!" You have no time to realize that you are dragged by Anna in the main room.`);
    scene.text('"Err… Hi Anna!"');
    scene.text(`"Oh sorry! Hi ${((s as any).pcs_nickname ?? '')}, take a seat. I'm watching a film and its just getting to the good bit, come in we can still talk."`);
    scene.text('"Awww, she\'s pretty but too much bush can\'t see anything." The scene is of a woman on the bed and a man slowly pulling her panties down showing her pubes but it cuts away before you see her pussy.');
    scene.text('Despite the scene and the genre of the film for that matter, it seems a "normal" evening between real friends. This feels really strange with Anna. "Is this a porno?"');
    scene.text('"A porno would be more realistic. No it\'s a "famous" American film about BDSM and I\'m quite happy I didn\'t pay for it. I\'ve had a busy few days and hoped we could just watch it as your lesson and I could just relax."');
    scene.text('"I know Sweetie, new plan. why don\'t you try on an outfit from these on the bed. I\'m trying to find something for a female friend and you can model them for me because this film is trash and will not teach you anything useful." She turns the TV off.');
    scene.actions([
      { label: 'Sure, sounds fun', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract16.jpg');
    scene.text('It\'s no quite what you expected, it seems to be a "normal" evening between friends for real. Maybe Anna has finished teaching you and the last lesson was your final test?');
    scene.text('Then you get to the bed and see the two options. "This friend of yours, she wouldn\'t happen to be a client?" You ask.');
    scene.text('Anna laughs, "You are very sharp Sweetie, I can get nothing past you."');
    scene.text('There are two leather dresses in front of you one is red the other black and they look heavy.');
    scene.actions([
      { label: 'Red hobble skirt', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    (st as any).hobble = 'red';
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/eroto/dress/4.jpg');
    scene.text('You choose the red one, it\'s difficult to get on as there is not zipper. There is some stretch to the material and you finally manage to pull it down over your body, your legs are strictly pulled together by the leather so that you cannot made wide strides. Despite the difficulty about wearing this dress it seems really classy, maybe it\'s a party dress.');
    scene.text('"You have to wear the gloves and collar with that." Calls Anna as she reclines on the couch.');
    scene.text('The gloves are a bit awkward to get on but look great, the collar reminds you about your lessons and submissive symbolism. "Is this a submissives\' dress?" You ask.');
    scene.text('"You have been paying attention haven\'t you Sweetie?" Well that\'s a yes then. "I\'m all ready."');
    scene.text('She explains that your dress it a cocktail dress but with a BDSM twist and the importance of clothing in the world of BDSM. How it signifies roles and sets the mood.');
    scene.text('"OK now Sweetie walk around the room let me get a good look and see how the outfit looks."');
    scene.actions([
      { label: 'Walk around the room', goto: ['hotel_anna', 'dresscontest'] },
    ]);
  } },
      { label: 'Black hobble skirt', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    (st as any).hobble = 'black';
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/eroto/dress/26.jpg');
    scene.text('You choose the black one, The skirt is tight but not too hard to get on. The top is more awkward as the sleeves are tight and you have to pull quite hard to get them over your arms, it zips up to be tight but you can still breathe easily. Your legs are restricted in their movement making it hard to walk normally. It seems classy despite being leather.');
    scene.text('"I feel like a Domme in this Anna" You call to her as she reclines on the couch.');
    scene.text('"You look like one in that outfit. In fact you look great Sweetie."');
    scene.text('She says that your outfit is a cocktail dress even though it is not strictly a dress, you have some doubts but don\'t argue. She also explains the importance of clothing in the world of BDSM, how it signifies roles and sets the mood.');
    scene.text('"OK now Sweetie walk around the room let me get a good look and see how the outfit looks."');
    scene.actions([
      { label: 'Walk around the room', goto: ['hotel_anna', 'dresscontest'] },
    ]);
  } },
    ]);
  } },
      { label: 'No thanks Anna, I\'m not here for a dress contest', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract10a.jpg');
    scene.text('"Of course not, you are here for our chit-chat. Wait a sec I\'ll get us both a drink"');
    scene.text('"I can help."');
    scene.text('"No way! You are my guest." She insists as she makes 2 cocktails. You don\'t see exactly what she puts in them except for a large measure of Vodka.');
    scene.text('The two of you sit and chat as she explains about presentation in the BDSM world and how important clothing is. She goes into great detail about restrictive clothing for submissives and how the outfits she is currently trying to decide upon are hobble dresses which make it harder to walk and about corsetry and exposure.');
    scene.text('"Like that stupid movie, if I had a pretty submissive like that I\'d make sure she was neatly groomed and naked as much as possible."');
    scene.text('This makes you curious and you ask her if she is gay.');
    scene.text('"Oh no, it is not that. I find pretty women attractive but I have a daughter and I had a lot of fun making her." She laughs at her own joke." In our community it is very common for sex and sexuality to be secondary to the activity. After all a woman can spit on you and whip your pussy just as well as (if not better than) a man."');
    scene.text('This makes sense of course but you are glad you are not trying to explain it to someone like your Mother.');
    scene.text('After sometime and a couple of drinks Anna once more ushers you out as her client is due to arrive.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Comply', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3b.jpg');
      if ((!((st as any).PCloPanties ?? 0))) {
        if (((st as any).PCloDress ?? 0) === 1) {
          scene.text('As you move toward Anna, Jeanie grabs the hem of your dress and pulls it over your head leaving you exposed.');
        } else {
          scene.text('As you move toward Anna, Jeanie grabs your ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('skirt and pulls it') : ('pants and pulls them')) + ' down, leaving you exposed.');
        }
      }
    } else {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3a.jpg');
      if ((!((st as any).PCloPanties ?? 0))) {
        if (((st as any).PCloDress ?? 0) === 1) {
          scene.text('As you move toward Anna, Jeanie grabs the hem of your dress and pulls it over your head leaving you in just your underwear.');
        } else {
          scene.text('As you move toward Anna, Jeanie grabs your ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('skirt and pulls it') : ('pants and pulls them')) + ' down, leaving your panties exposed.');
        }
      }
    }
    scene.text('Anna lays you across her lap and starts spanking your butt, hard. After the first 5 she stops and says, "You have to count them Sweetie, or they don\'t count and I can\'t be smacking you all night."');
    scene.text('She resumes and you starting counting each strike hoping to end the humiliation and pain as quickly as you can.');
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'arousal', 'BDSM', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Endure', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3c.jpg');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Jeanie interrupts Anna and loudly states: "A smack must be on a bare butt." She proceeds to pull down your panties before Anna continues.');
    }
    scene.text('Eventually as you count to 30 Anna stops. "That\'s enough for now Sweetie. I hope you have learnt more about how our world works. You will need time to think about it I\'m sure."');
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'arousal', 'BDSM', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.text('You get up and quickly re-dress, you butt really stings from the spanking. There is also some arousal building as a result and you realize Anna is correct it will take time to understand that mixed feeling.');
    scene.text('Anna guides you to the door: "I look forward to our next session Sweetie." She then gives you a gentle pat on the butt reminding you of the pain as you walk past her.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDresscontest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract17.jpg');
  scene.text('Tip top tip top tip top tip top. "Anna, how am I supposed to walk with this dress?"');
  scene.text('"Well… very slowly like you are now. OK, once more around the room and stop trying to rush."');
  scene.text('Tip top tip top tip top tip top. "That\'s it, much better. You know it enhances your figure pretty very well. Not that you need to enhance it."');
  scene.text('Anna is lying back on the couch and you\'re fairly sure you saw her hand where it shouldn\'t be."');
  if (((s as any).hobble ?? 0) === 'red') {
    scene.text('"The red one full of passion isn\'t it? I almost want put a leash on you and keep you for myself, but how could I keep you at home without Lariska getting upset?" Her smile let\'s you know she is joking with you');
  } else {
    scene.text('"That dress makes you look like professional Domme, I have to resist the urge to knee in front of you and await your instructions." She says joking but you do feel like you are more assertive than normal.');
  }
  (s as any).hobble = undefined;
  if (String((s as any).locArgs?.[0] ?? '') === '8') {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18a.jpg');
    scene.text('"Hi sweetie!" Anna greats you as you arrive. "Here wear this." She points to pink underwear and matching leather boots.');
    scene.text('"More dress up?" You ask');
    scene.text('"No, well, yes but its for the session I promised. You have to look the part, they paid for two dommes. Just put these on and follow my lead."');
    scene.text('This is a bit of a change from what you had been doing but having come this far you are not in a position to let Anna down.');
    scene.text('You get changed and Anaa does too, putting what you can only call a latex teacher\'s outfit. Somehow her boobs look even bigger in it than normal.');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'slaveM'] },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '9') {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
    scene.text('"Hi sweetie!" Anna smiles as she greets you. "Last time you did great and helped me out, I had hoped to do this session with you first though as women are generally easier to dominate."');
    scene.text('Anna is lying on the settee dressed as she was last time you visited, "So our client has a smoking fetish, if you\'re not a smoker don\'t inhale the smoke just wave the cigarette around and act like you do. That\'s what I do."');
    scene.text('"Where is this client?" You ask.');
    scene.text('"Tied up somewhere." Anna laughs at her own joke. "First we need to dress the part. I\'ll only be wearing an under breast corset, hope you don\'t mind me showing off the girls." She squeezes her tits to underscore her meaning.');
    scene.text('You only got yourself into all of this because you were trying to look at them and now they will be served up on a plate for you? "Sh-sh-sure." You stammer.');
    scene.text('"You dirty cow! I love it. Your outfit is over there and its plenty skimpy enough that I will get an eyeful too. There\'s an ugly blonde wig with it, you\'re going to have to wear that too." She points to a chair with a leather vest and latex panties, far too small to wear underwear underneath.');
    scene.text('As strip you peak at Anna who is facing away from you stripping off to get in her own outfit, at least she\'s not watching. You dress in the vest and panties and only just now register that Anna is <i>only</i> wearing a corset.');
    scene.text('"What do you think?" She says doing a twirl showing off her boobs, butt and pussy.');
    scene.text('You are too shocked to even reply, "That I will take as a compliment. Now come on sweetie we will be late if we wait for you to pick up the jaw off the floor."');
    scene.text('She grabs your hand and leads you to the next room where she meets her clients walking through the hotel corridor essentially naked. It\'s quite the thrill and you wonder if she\'s allowed to do something so outrageous.');
    scene.text('<font color = #ff0000>Developer note: This is last in this event chain for now</font>');
    qspCall(s, 'calendar', 'remove', 'anna_bdsm_session');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna_sex', 'slaveF'] },
    ]);
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapracttable.jpg');
    scene.text('Anna hold up a piece of paper with various pictures on it.');
    scene.text('"Sorry its such a crappy print out Sweetie, I do have some cards and charts to help you learn these things but nothing for dress code."');
    scene.text('"As you can see any type of outfit can be used for both sub or Domme, it is the subtle differences, attitude and accessories that make the difference."');
    scene.text('You look over the chart and it is mostly clear but… "I\'m not sure about the Status Dress"');
    scene.text('"Ahh, yeah the chart isn\'t great but it is for dresses that are not hobbling and still convey the BDSM role. Imagine she is still wearing those boots with a regular skirt."');
    scene.text('"Now that I\'ve seen you walk and know how the outfit looks. It\'s great by the way. For your lesson I want you to see how it restricts you, so try and do some stretches and such."');
    scene.actions([
      { label: 'Stretches', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18b.jpg');
    scene.text('As you try and do some stretches Anna is barely watching and seems to be playing with her breasts, this is quite distracting and erotic,');
    scene.text('"Err… Anna? Are you even watching?"');
    scene.text('"Oh yes Sweetie, you look great. I thought it would make for a change if I watched you seeing as you watched me so much"');
    scene.text('Realising that your attempts to stretch only served to show yourself off for her pleasure has you a bit conflicted. You did spy on her when she was doing all sorts of things but this is very different.');
    scene.text('"Don\'t be like that Sweetie, I\'m tired and horny so I\'m not as subtle as I could be but this is still a lesson you need to learn. Now take off that outfit, I\'m close."');
    scene.text('You can\' go home in her clothes and leave yours\' here, you have no choice. Anna has tricked you.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract13a.jpg');
    scene.text('You try to remove the hobble dress quickly but its not easy to do that and the more you struggle to go faster the hard to is to get out of.');
    scene.text('When finally naked you glace at Anna and recognise her \'O\' face. That you know it does prove her point about you watching her but you still feel like a piece of meat.');
    scene.text('You quickly dress again and turn to Anna with a pout on your face.');
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
    scene.text('Anna is positively glowing in post orgasmic joy.');
    scene.text('"That\'s much better than that stupid movie. My client will be here soon and they are always trying to tease an orgasm out of me. The longer I can resist the more they tip so I need to relieve myself first."');
    scene.text('"OK, but why use me like that without saying anything?"');
    scene.text('Anna thinks for a second before: "Honestly I hoped we could both watch that movie and get horny then masturbate. Most of my friends are in the scene and that sort of thing is normal for us. I can\'t teach you everything and not be that person."');
    scene.text('She continues, "The movie was shit so I changed the plan and being as I was already a bit horny my judgement might not have been great but you are very attractive and if you want to be a part of the scene people will masturbate to you. Sometimes as part of an act and sometimes as they watch and you perform, it is something that would have to be a part of your training."');
    scene.actions([
      { label: 'Sit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract11a.jpg');
    scene.text('You sit on the bed to take all this in and try to understand it. Anna leans forward alert and attentive once more.');
    scene.text('"I know Sweetie, it\'s a lot to process for one session. Next time I\'ll let you get a bit of revenge with some practical Domme experience, I have the perfect client to help with such lessons."');
    scene.text('You aren\'t sure if its just her post orgasm high or normal part of the training but that does seem tempting after today.');
    scene.text('She stands up and walks you to the door, "Until next time Sweetie, it\'ll be fun!"');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
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

function enterAnnaSubSession(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).AnnaQW = (s as any).AnnaQW ?? {})['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
  ((s as any).AnnaQW = (s as any).AnnaQW ?? {})['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
  (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub0.jpg');
  scene.text('You both go to change your dress; Anna requires you to wear like a school girl… She gave you a uniform with a short skirt, but you saw someting more daring for sure; it shouldn\'t be a problem after all. ' + qspFunc(s, 'wrap', 'accent', ' "…Uhhmff!…Sometimes i feel that i could use the lingerie to restrict!"') + '<br>' + qspFunc(s, 'wrap', 'v_neg', '"…Do you need any help?"') + qspFunc(s, 'wrap', 'accent', ' "…No thanks my dear… Ngghh!…Ahhh… there we are. Mmmm… i should speak with the Pav G&M owner… Anyway you could feel that today will be less than what you could expect, or even what you saw or done since today; that\'s because i want you to pass through an entire session from the beginning to the end, and I don\'t want any rush; we\'ll see what to do as we proceed. That said: are you ready? We\'ll start collaring you…"'));
  scene.actions([
    { label: '…', handler: (st: GameState) => {
      qspCall(st, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub1.jpg');
      scene.text('You are a bit reluctantly to have a collar on your neck; but it\'s part of the session and you shouldn\'t come back…' + qspFunc(st, 'wrap', 'accent', ' "A little scared? Do not worry, I cannot hurt those puppy eyes… hehehe. Also, remember that there\'s no real meaning if you don\'t look for it."') + ' Anna goes behind your back and wrap the collar on you. ');
      scene.actions([
        { label: '…', goto: ['hotel_anna', 'Anna_sub_session1'] },
      ]);
    } },
    { label: 'Offer your neck…', handler: (st: GameState) => {
      qspCall(st, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub1a.jpg');
      scene.text(qspFunc(st, 'wrap', 'accent', ' "Good girl, I see you enter the role. Of course it stays within the session, it has no real meaning if you aren\'t looking for it."') + ' You offer an easy access to your neck.');
      scene.actions([
        { label: '…', goto: ['hotel_anna', 'Anna_sub_session1'] },
      ]);
    } },
  ]);
}

function enterAnnaSubSession1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub2.jpg');
  scene.text(qspFunc(s, 'wrap', 'accent', ' "Collaring is a great sign of obedience; today we\'ll speak a little about obedience, and we\'ll pass to practical mainly, if you are willing of course. I don\'t have to remember that nothing has a meaning if you don\'t want."') + '<br>' + qspFunc(s, 'wrap', 'v_neg', '"O-ok.."') + '<br>' + qspFunc(s, 'wrap', 'accent', '"…Anyway, I want you to not being worried about not accomplished some task. Depending on yourself you could find something too much degrading, and I have no reason to let you feel some discomfort. "') + '<br>' + qspFunc(s, 'wrap', 'v_neg', '"T-thanks… I think…"') + '<br>' + qspFunc(s, 'wrap', 'accent', '"…Expecially, showing obedience, that if you accept within a BDSM relationship, has a deep meaning. And we\'ll start with that. Now: do you have something in mind that you could use to show me your obedience?"'));
  scene.actions([
    { label: 'Refuse…', handler: (st: GameState) => {
      qspCall(st, 'stat', '');
      (st as any).Anna_see_asub = ((st as any).Anna_see_asub ?? 0) - (1);
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub2.jpg');
      scene.text('You shake your head… ' + qspFunc(st, 'wrap', 'accent', '"…Ok. For example you could lower your body and kiss my feet. Feet have a great meaning too; subs put their life under the Dominant\'s feet. You can clearly see that there\'s a big meaning about subs; what you may not think as first is that it\'s a great responsibility for Dominant. Life is a delicate crystal, and NEVER, I said NEVER, Dominant should think about damaging it. That\'s a rule, and there\'s no deal on that."') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"I see… I think…"') + '<br>' + qspFunc(st, 'wrap', 'accent', '"Sssshhh!!!"') + '…Anna points her index to the ceiling…' + qspFunc(st, 'wrap', 'accent', '"Listen! Don\'t speak. That\'s a hand code for silence."') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"…"') + 'You nod<br>' + qspFunc(st, 'wrap', 'accent', '"Good. Now follow me."'));
      scene.actions([
        { label: '…', goto: ['hotel_anna', 'Anna_sub_session2'] },
      ]);
    } },
    { label: 'Show your obedience', handler: (st: GameState) => {
      qspCall(st, 'stat', '');
      ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub2a.jpg');
      scene.text('You had it… ' + qspFunc(st, 'wrap', 'accent', '"You are a good girl, that\'s a perfect sign of obedience. You have to know that feet have a great meaning too; subs put their life under the Dominant\'s feet. You can clearly see that there\'s a big meaning about subs; what you may not think as first is that it\'s a great responsibility for Dominant. Life is a delicate crystal, and NEVER, I said NEVER, Dominant should think about damaging it. That\'s a rule, and there\'s no deal on that."') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"I see… I think…"') + '<br>' + qspFunc(st, 'wrap', 'accent', '"Sssshhh!!!"') + '…Anna points her index to the ceiling…' + qspFunc(st, 'wrap', 'accent', '"Listen! Don\'t speak. That\'s a hand code for silence."') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"…"') + 'You nod<br>' + qspFunc(st, 'wrap', 'accent', '"Good. Now follow me."'));
      scene.actions([
        { label: '…', goto: ['hotel_anna', 'Anna_sub_session2'] },
      ]);
    } },
  ]);
}

function enterAnnaSubSession2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub3.jpg');
  scene.text('Anna puts her index into the ring of the collar… you have the reflex to put your hands on hers, but she scolds you immediately. ' + qspFunc(s, 'wrap', 'accent', ' "No!…Do not act if not asked. Put your hands, behind your back."') + ' You obey the order Anna gave you, mainly because she\'s joking with the collar and she\'s not pulling it. ' + qspFunc(s, 'wrap', 'accent', ' "The reflex you had shows me you are not willing to be dragged by your collar. That\'s why I didn\'t pull it: to let you get acquainted. Honestly I don\'t want to pull it, I\'d like you to stand up on your own."') + 'You start rising yourself…' + qspFunc(s, 'wrap', 'accent', '"…Without hands."') + '<br>' + qspFunc(s, 'wrap', 'v_neg', '"…But..how…"') + '<br>' + qspFunc(s, 'wrap', 'accent', '"Bend one knee and start rising… it will be natural after that. Don\'t worry… I\'ll follow your movements with my finger. And don\'t rush, I don\'t want you to fall."') + 'You nod and rise your body without your hands… it wasn\'t difficult after all. ');
  scene.actions([
    { label: '…', handler: (st: GameState) => {
      qspCall(st, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub3a.jpg');
      scene.text('Anna took a chair from the room…' + qspFunc(st, 'wrap', 'accent', '"Now bend over."') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"…"') + '<br>' + qspFunc(st, 'wrap', 'accent', '"See it wasn\'t difficult… was it?"') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"…It\'s the situation… I mean… I feel a little exposed."') + '<br>' + qspFunc(st, 'wrap', 'accent', '"That\'s great!"') + '<br>' + qspFunc(st, 'wrap', 'v_neg', '"W-what do you mean?"') + '<br>' + qspFunc(st, 'wrap', 'accent', '"Exposure was the think I had to speak about, and since you felt a little exposed I can skip that part. Ok… next… "') + 'Anna moves from the room and returns with a flogger immediately. ' + qspFunc(st, 'wrap', 'accent', '"Again: obedience. This is a flogger as you know; another great sign of obedience is to kiss it, to kiss the Discipline tool, to kiss it shows the respect subs have to have toward the Discipline and the time the Dominant spend for their education. Will you show me your obedience?"'));
      scene.actions([
        { label: 'Refuse', handler: (st2: GameState) => {
          qspCall(st2, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub4.jpg');
          scene.text(qspFunc(st2, 'wrap', 'accent', ' "…Understandable. In that case feel the flogger…"') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"WHAT?"') + '<br>' + qspFunc(st2, 'wrap', 'accent', ' "…that softly crawl on your back…"') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"…A-Anna… you scared me…"') + '<br>' + qspFunc(st2, 'wrap', 'accent', ' "…sweetie… I didn\'t finished the sentence. Ok, now the reminder spanking."') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"WHAT??? I heard well that time."') + '<br>' + qspFunc(st2, 'wrap', 'accent', '"It\'s symbolic ' + ((st2 as any).pcs_nickname ?? '') + ', it take care of things that could have been missed."') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"…w-we didn\'t speak about spanking…"') + '<br>' + qspFunc(st2, 'wrap', 'accent', '"Uhhmm… let me think. What about a game?"') + ' ');
          scene.actions([
            { label: '…?????…', goto: ['hotel_anna', 'table1'] },
          ]);
        } },
        { label: 'Show your obedience', handler: (st2: GameState) => {
          qspCall(st2, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub4a.jpg');
          scene.text(qspFunc(st2, 'wrap', 'accent', ' "Good girl. Ok, now the reminder spanking."') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"WHAT???"') + '<br>' + qspFunc(st2, 'wrap', 'accent', '"It\'s symbolic ' + ((st2 as any).pcs_nickname ?? '') + ', it takes care of things that could have been missed."') + '<br>' + qspFunc(st2, 'wrap', 'v_neg', '"…w-we didn\'t speak about spanking…"') + '<br>' + qspFunc(st2, 'wrap', 'accent', '"Uhhmm… let me think. What about a game?"'));
          scene.actions([
            { label: '…?????…', goto: ['hotel_anna', 'table1'] },
          ]);
        } },
      ]);
    } },
  ]);
}

function enterAnnaSubSession3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).Anna_mini_round ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub5.jpg');
    scene.text(qspFunc(s, 'wrap', 'accent', ' "…Well… it\'s your choice… Ok ' + ((s as any).pcs_nickname ?? '') + ', when you are ready put your belly on my knees. "') + ' You hope it won\'t last long, take a big breath and execute Anna\'s order.<br>' + qspFunc(s, 'wrap', 'v_neg', '"A-Anna… go easy… ok?"') + '<br>' + qspFunc(s, 'wrap', 'accent', ' "Pfff! There\'s no need you\'ll see. Ok, that\'s called OTK: over the knees… just for you to know."') + 'And Anna start… she\'s spanking you but her hit has no real strengh, you barely feel them. You were surprised or the shortness of the spanking, because Anna stop after few hits. <br>' + qspFunc(s, 'wrap', 'accent', '"Uhhmm… interesting…"') + ' Despite the tenderness and shortness, your butt became a little red… <br>' + qspFunc(s, 'wrap', 'v_neg', '"Is there something wrong?"') + '<br>' + qspFunc(s, 'wrap', 'accent', '"Well… you got a delicate skin… nothing incredible. Anyway, we can pass to the posing for the night, you won\'t stay there of course, i\'ll free you when done; you can chose: do you want to try something a little more realistic being naked, or do you prefer to stay dressed?"'));
    scene.actions([
      { label: '…I\'ve got no problems being naked…', goto: ['hotel_anna', 'Anna_sub_sessionN'] },
      { label: '…I prefer staying dressed if you don\'t mind…', goto: ['hotel_anna', 'Anna_sub_sessionD'] },
    ]);
  }
}

function enterAnnaSubSessionN(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub6.jpg');
  scene.text(qspFunc(s, 'wrap', 'accent', ' "…Good choice… you are a brave girl…"') + ' You undress and Anna guides you to the position.<br>' + qspFunc(s, 'wrap', 'v_neg', '"…A little cold…"') + '<br>' + qspFunc(s, 'wrap', 'accent', ' "…That\'s part of the game… you are exposed, vulnerable, and you are mine for the night…"'));
  scene.actions([
    { label: '…', goto: ['hotel_anna', 'Anna_sub_session3'] },
  ]);
}

function enterAnnaSubSessionD(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpracticend/sub/sub6a.jpg');
  scene.text(qspFunc(s, 'wrap', 'accent', ' "…Understandable… you are not ready yet…"') + ' You stay dressed and Anna guides you to the position.<br>' + qspFunc(s, 'wrap', 'v_neg', '"…Thank you…"') + '<br>' + qspFunc(s, 'wrap', 'accent', ' "…Don\'t thank me yet… the night is young…"'));
  scene.actions([
    { label: '…', goto: ['hotel_anna', 'Anna_sub_session3'] },
  ]);
}

function enterScanningPath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const statusdressB = (s as any).IgorevnaBDSM_statusdress_b ?? 0;
  const statusdressA = (s as any).IgorevnaBDSM_statusdress_a ?? 0;
  const freeJM = (s as any).IgorevnaBDSM_freeJM ?? 0;
  const nickname = (s as any).pcs_nickname ?? '';
  if (statusdressB === 1 && freeJM !== 3) {
    scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
    scene.text('class="wrap accent">"Wait ' + nickname + ', i didn\'t finished. Since it seems you have a clear preference, i\'d like to give you some option to chose, anyway you could see and chose directly next time. So basically you can chose between a man, a woman or to delay your choice to our next encounter: but in that last case, with all the probability, i will not able to call an external performer and so all the route will be avaible and it will be between me and you… hehehe."</class>');
    scene.actions([
      { label: 'Man', goto: ['hotel_anna', 'scanning_man'] },
      { label: 'Woman', goto: ['hotel_anna', 'scanning_woman'] },
      { label: "I'll see next time… I think i'm not ready for an external performer", goto: ['hotel_anna', 'scanning_next'] },
    ]);
  } else if (statusdressA === 1 && freeJM === 3) {
    scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18a.jpg"></center>');
    scene.text('class="wrap accent">"Wait ' + nickname + ', i didn\'t finished. Since it seems you have a clear preference, i want you to look at this… or you could decide next time we\'ll meet: in that case the work will not be avaible."</class>Anna pass you a piece of paper with something written on.\'\'Light worker sub protocol\'\': "This protocol is intended for coca cola worker subs and should be accomplished in every parts. Dom/Domme rules: Dom/Domme could ask to execute regular work that doesn\'t last for more than 2 hours; nudity and sexual intercourse are not allowed if not explicitely agree; underwear and proper sub dress are highly recommended as the use of basic gags, cuffs and chain to lock; proper way to address could be asked; insult and too much degrading words are forbidden. sub rules: sub cannot refuse to execute the work they were asked for as for proper way to address the Dom/Domme or recommended way to dress as they stay in the above setting specified in Dom/Domme section; any fail could result in punishment for the max time of 5 minutes. Recommended safe word: RED. Safe action: three stomp on the floor. This protocol could be signed or stay as a verbal agreement. Role: Dominant. Number of actor:… Role: submissive. Number of actor:…" Two space at the end of the paper allow to put the names of the actors.');
    scene.actions([
      { label: 'A… work?', goto: ['hotel_anna', 'scanning_work_intro'] },
    ]);
  } else {
    scene.text('…');
    scene.actions([
      { label: 'Continue', goto: ['hotel_anna', 'meeting'] },
    ]);
  }
}

function enterScanningMan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).IgorevnaBDSM_session_slaveM = 1;
  const qw = (s as any).AnnaQW ?? {};
  qw['dom'] = (qw['dom'] ?? 0) + 1;
  (s as any).AnnaQW = qw;
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"…Man uh? Generally speaking they are much more difficult to control expecially at the beginning, but do not worry: once you keep them at the balls they are marvelous. Anyway, we\'ll play easy with a loyal servant, so you have nothing to be worried about. Oh! And before you ask: no sex allowed. I forbid my pet to have sex this month… so… well, i\'m sure you can deal with that."</class><br>class="wrap v_neg">"…\'k…"</class><br>class="wrap accent">"Then it\'s settled. Ok let me lead you to the exit…"</class>');
  scene.actions([
    { label: 'Bye Anna', goto: ['pav_hotel', ''] },
  ]);
}

function enterScanningWoman(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).IgorevnaBDSM_session_slaveF = 1;
  const qw = (s as any).AnnaQW ?? {};
  qw['dom'] = (qw['dom'] ?? 0) + 1;
  (s as any).AnnaQW = qw;
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"…Woman uh? Generally speaking they are easier to control expecially at the beginning: but every rules have their own exception… hehehe. Anyway, we\'ll play easy with a loyal servant, so you have nothing to be worried about. Oh! And before you ask: no sex allowed. I forbid my pet to have sex this month… so… well, i\'m sure you can deal with that."</class><br>class="wrap v_neg">"…\'k…"</class><br>class="wrap accent">"Then it\'s settled. Ok let me lead you to the exit…"</class>');
  scene.actions([
    { label: 'Bye bye Anna', goto: ['pav_hotel', ''] },
  ]);
}

function enterScanningNext(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"Than, in that case it will be within me and you as i said. Do not worry too much about missing this chance, you\'ll see: it will be interesting whatever you\'ll decide to do, plus i will not lose the chance to give you the right tips if needed."</class><br>class="wrap v_neg">"…\'k…"</class><br>class="wrap accent">"Then it\'s settled. Ok let me lead you to the exit…"</class>');
  scene.actions([
    { label: 'Till next…', goto: ['pav_hotel', ''] },
  ]);
}

function enterScanningWorkIntro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"It\'s not a proper work, i have to do some stuff, and i could link that with a session with you. You\'ll eventually give me an help with the stuff i have to do: I think it\'s a good mix between real BDSM lifestyle, a pure session and a test to see your disposal to this word. It will give me a feedback on your willing to do BDSM stuff too, of course. But pay attention: work will not be avaible if you don\'t chose it right now; in that case i\'ll think about something else and all the route will be open. Even if you\'ll miss this good mix you\'ll be able to learn pretty good things with my tips… hehehe…"</class>');
  scene.actions([
    { label: 'Work', goto: ['hotel_anna', 'scanning_work'] },
    { label: "I-i'll see next time Anna… it sound… scary…", goto: ['hotel_anna', 'scanning_scary'] },
  ]);
}

function enterScanningWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).IgorevnaBDSM_session_librarian = 1;
  const qw = (s as any).AnnaQW ?? {};
  qw['sub'] = (qw['sub'] ?? 0) + 1;
  (s as any).AnnaQW = qw;
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"It will not be a big stuff, that\'s true, but knowing that you trust me enough to accept the work with me fill my heart of joy."</class><br>class="wrap v_neg">"Well..it\'s… i…think… i\'m safe with you…"</class><br>class="wrap accent">"Hehe… don\'t flatter me… you will make me blush. Just think to take this work seriously… a little punishment will wait for you otherwise… Or maybe you are looking for that… hehehe"</class>…Anna smiles…class="wrap accent">"Then it\'s settled, our verbal agreement will be sufficient, i\'m pretty sure of that. Let me lead to the exit"</class>');
  scene.actions([
    { label: 'S-see you… Anna…', goto: ['pav_hotel', ''] },
  ]);
}

function enterScanningScary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const qw = (s as any).AnnaQW ?? {};
  qw['switch'] = (qw['switch'] ?? 0) + 1;
  (s as any).AnnaQW = qw;
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg"></center>');
  scene.text('class="wrap accent">"Hehehe… that doesn\'t means we\'ll not have fun! Do not worry about missing this chance, you probably has to look better inside yourself and that\'s understandable, even auspicable to be honest."</class><br>class="wrap v_neg">"Thanks for your understanding Anna…"</class><br>class="wrap accent">"Hehe… don\'t flatter me… you will make me blush… hehehe"</class>…Anna smiles…class="wrap accent">"Then it\'s settled, we\'ll see next time… Let me lead to the exit"</class>');
  scene.actions([
    { label: 'See you… Anna…', goto: ['pav_hotel', ''] },
  ]);
}

function enterText(s: GameState, scene: SceneBuilder): void {
  const miniRound = (s as any).Anna_mini_round ?? 0;
  const poseRound = (s as any).Anna_pose_round ?? 0;
  let text = '';
  if (miniRound === 1) {
    if (poseRound === 1) text = 'bracelets';
    else if (poseRound === 2) text = 'ko lahr';
    else if (poseRound === 3) text = 'walk';
    else if (poseRound === 4) text = 'lotus';
    else if (poseRound === 5) text = 'expose';
    else if (poseRound === 6) text = 'prostrate';
    else if (poseRound === 7) text = 'she sleen';
    else if (poseRound === 8) text = 'sula y';
    else if (poseRound === 9) text = 'table';
  } else if (miniRound === 2) {
    if (poseRound === 1) text = 'wait';
    else if (poseRound === 2) text = 'hair';
    else if (poseRound === 3) text = 'leading';
    else if (poseRound === 4) text = 'sula s';
    else if (poseRound === 5) text = 'bara';
    else if (poseRound === 6) text = 'belly';
    else if (poseRound === 7) text = 'leasha';
    else if (poseRound === 8) text = 'inspection';
    else if (poseRound === 9) text = 'offer me';
  } else if (miniRound === 3) {
    if (poseRound === 1) text = 'PNP';
    else if (poseRound === 2) text = 'obedience';
    else if (poseRound === 3) text = 'rest';
    else if (poseRound === 4) text = 'egyptian';
    else if (poseRound === 5) text = "slaver's kiss";
    else if (poseRound === 6) text = 'frog';
    else if (poseRound === 7) text = 'penitent';
    else if (poseRound === 8) text = 'offer rock';
    else if (poseRound === 9) text = 'eagle';
  }
  (s as any).Minigame_text = text;
  scene.build();
}

function enterTable1(s: GameState, scene: SceneBuilder): void {
  (s as any).Anna_mini_round = 1;
  (s as any).Anna_round_score = 0;
  (s as any).Anna_pose_round = Math.floor(Math.random() * 9) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/table1.jpg"></center>');
  scene.text(
    'class="wrap v_neg">"W-what kind of game? And… what are the rules?…"</class><br>' +
    'class="wrap accent">"Pretty simple: three rounds. I\'ll show you a table with subs poses like this one, and you will try to execute the one i call for each round. If you score 3/3 you\'ll skip the reminding spanking; 2/3 it\'s like we didn\'t play at all, that means a reminder spanking; if less that 2/3 you will receive a little spanking according your score: it will not be a punishment spanking in any case… that\'s a promise. It\'s only a little game, but you have to be naked."</class>br>' +
    'class="wrap v_neg">"Naked? Why?…"</class>br>' +
    'class="wrap accent">"It will make things easy for you, also… if you fail a pose, you cannot say it was caused by the dress. What do you say?"</class>'
  );
  scene.text('look at the table one');
  scene.actions([
    { label: '…try your luck…', goto: ['hotel_anna', 'table1game'] },
    { label: '…but it could be worst…', goto: ['hotel_anna', 'Anna_sub_session3'] },
  ]);
}

function enterTable1game(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna', 'text');
  const poseName = (s as any).Minigame_text ?? '';
  scene.text('class="wrap accent center h4">"' + poseName + '"</class>');
  const icons = [
    [1, 'set1/1bracelets.jpg'], [2, 'set1/1braceletsno.jpg'],
    [3, 'set1/2collar.jpg'], [4, 'set1/2collarno.jpg'],
    [5, 'set1/3walk.jpg'], [6, 'set1/3walkno.jpg'],
    [7, 'set1/4lotus.jpg'], [8, 'set1/4lotusno.jpg'],
    [9, 'set1/5expose.jpg'], [10, 'set1/5exposeno.jpg'],
    [11, 'set1/6prostrate.jpg'], [12, 'set1/6prostrateno.jpg'],
    [13, 'set1/7she_sleen.jpg'], [14, 'set1/7she_sleenno.jpg'],
    [15, 'set1/8sulay.jpg'], [16, 'set1/8sulayno.jpg'],
    [17, 'set1/9table.jpg'], [18, 'set1/9tableno.jpg'],
    [19, 'set1/28mix0.jpg'], [20, 'set1/28mix1.jpg'],
    [21, 'set1/28mix2.jpg'], [22, 'set1/28mix3.jpg'],
    [23, 'set1/28mix4.jpg'], [70, '28mix17.jpg'],
  ] as const;
  let html = '';
  for (const [val, img] of icons) {
    const src = `images/characters/pavlovsk/resident/Anna/sessionpracticend/gameicons/${img}`;
    html += `<a href="#" onclick="window.__gameStore.setState((s) => { s.pose_table = ${val}; return s; }); window.__gameStore.getState().doGoto('hotel_anna', 'table2'); return false;"><img src="${src}"></a>    `;
  }
  scene.text(html);
  scene.build();
}

function enterTable2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const poseTable = (s as any).pose_table ?? 0;
  const poseRound = (s as any).Anna_pose_round ?? 0;
  scene.text(`<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/${poseTable}.jpg"></center>`);
  const correctMap: Record<number, number> = { 1: 1, 2: 3, 3: 5, 4: 7, 5: 9, 6: 11, 7: 13, 8: 15, 9: 17 };
  if (correctMap[poseRound] === poseTable) {
    (s as any).Anna_round_score = ((s as any).Anna_round_score ?? 0) + 1;
    scene.text('right');
  } else {
    scene.text('wrong');
  }
  scene.actions([
    {
      label: 'look the table',
      handler: (st) => {
        (st as any).Anna_mini_round = 2;
        (st as any).Anna_pose_round = Math.floor(Math.random() * 9) + 1;
      },
      goto: ['hotel_anna', 'table2_pre'],
    },
  ]);
}

function enterTable2Pre(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/table2.jpg"></center>');
  scene.actions([
    { label: 'play', goto: ['hotel_anna', 'table2game'] },
  ]);
}

function enterTable2game(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna', 'text');
  const poseName = (s as any).Minigame_text ?? '';
  scene.text('class="wrap accent center h4">"' + poseName + '"</class>');
  const icons = [
    [24, 'set2/10wait.jpg'], [25, 'set2/10waitno.jpg'],
    [26, 'set2/11hair.jpg'], [27, 'set2/11hairslut.jpg'],
    [28, 'set2/12leading.jpg'], [29, 'set2/12leadingslut.jpg'],
    [30, 'set2/13sula.jpg'], [31, 'set2/13sulaslut.jpg'],
    [32, 'set2/14bara.jpg'], [33, 'set2/14barano.jpg'],
    [34, 'set2/15belly.jpg'], [35, 'set2/15bellyno.jpg'],
    [36, 'set2/16leasha.jpg'], [37, 'set2/16leashano.jpg'],
    [38, 'set2/17inspection.jpg'], [39, 'set2/17inspectionno.jpg'],
    [40, 'set2/18offer.jpg'], [41, 'set2/18offerno.jpg'],
    [42, 'set2/28mix5.jpg'], [43, 'set2/28mix6.jpg'],
    [44, 'set2/28mix7.jpg'], [45, 'set2/28mix8.jpg'],
    [46, 'set2/28mix8.jpg'], [70, '28mix17.jpg'],
  ] as const;
  let html = '';
  for (const [val, img] of icons) {
    const src = `images/characters/pavlovsk/resident/Anna/sessionpracticend/gameicons/${img}`;
    html += `<a href="#" onclick="window.__gameStore.setState((s) => { s.pose_table = ${val}; return s; }); window.__gameStore.getState().doGoto('hotel_anna', 'table3'); return false;"><img src="${src}"></a>    `;
  }
  scene.text(html);
  scene.build();
}

function enterTable3Pre(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/table3.jpg"></center>');
  scene.actions([
    { label: 'play', goto: ['hotel_anna', 'table3game'] },
  ]);
}

function enterTable3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const poseTable = (s as any).pose_table ?? 0;
  const poseRound = (s as any).Anna_pose_round ?? 0;
  scene.text(`<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/${poseTable}.jpg"></center>`);
  const correctMap: Record<number, number> = { 1: 24, 2: 26, 3: 28, 4: 30, 5: 32, 6: 34, 7: 36, 8: 38, 9: 40 };
  if (correctMap[poseRound] === poseTable) {
    (s as any).Anna_round_score = ((s as any).Anna_round_score ?? 0) + 1;
    scene.text('right');
  } else {
    scene.text('wrong');
  }
  scene.actions([
    {
      label: 'look the table',
      handler: (st) => {
        (st as any).Anna_mini_round = 3;
        (st as any).Anna_pose_round = Math.floor(Math.random() * 9) + 1;
      },
      goto: ['hotel_anna', 'table3_pre'],
    },
  ]);
}

function enterTable3game(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna', 'text');
  const poseName = (s as any).Minigame_text ?? '';
  scene.text('class="wrap accent center h4">"' + poseName + '"</class>');
  const icons = [
    [47, 'set3/19pnp.jpg'], [48, 'set3/19pnpno.jpg'],
    [49, 'set3/20obedience.jpg'], [50, 'set3/20obedienceno.jpg'],
    [51, 'set3/21rest.jpg'], [52, 'set3/21restno.jpg'],
    [53, 'set3/22egyptian.jpg'], [54, 'set3/22egyptianno.jpg'],
    [55, 'set3/23slaverskiss.jpg'], [56, 'set3/23slaverskissno.jpg'],
    [57, 'set3/24frog.jpg'], [58, 'set3/24frogno.jpg'],
    [59, 'set3/25whipping.jpg'], [60, 'set3/25whippingno.jpg'],
    [61, 'set3/26offerrock.jpg'], [62, 'set3/26offerrockno.jpg'],
    [63, 'set3/27eagle.jpg'], [64, 'set3/27eagleno.jpg'],
    [65, 'set3/28mix10.jpg'], [66, 'set3/28mix11.jpg'],
    [67, 'set3/28mix12.jpg'], [68, 'set3/28mix13.jpg'],
    [69, 'set3/28mix14.jpg'], [70, '28mix17.jpg'],
  ] as const;
  let html = '';
  for (const [val, img] of icons) {
    const src = `images/characters/pavlovsk/resident/Anna/sessionpracticend/gameicons/${img}`;
    html += `<a href="#" onclick="window.__gameStore.setState((s) => { s.pose_table = ${val}; return s; }); window.__gameStore.getState().doGoto('hotel_anna', 'end'); return false;"><img src="${src}"></a>    `;
  }
  scene.text(html);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const poseTable = (s as any).pose_table ?? 0;
  const poseRound = (s as any).Anna_pose_round ?? 0;
  scene.text(`<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/game/${poseTable}.jpg"></center>`);
  const correctMap: Record<number, number> = { 1: 47, 2: 49, 3: 51, 4: 53, 5: 55, 6: 57, 7: 59, 8: 61, 9: 63 };
  if (correctMap[poseRound] === poseTable) {
    (s as any).Anna_round_score = ((s as any).Anna_round_score ?? 0) + 1;
    scene.text('right');
  } else {
    scene.text('wrong');
  }
  scene.actions([
    { label: 'test01', goto: ['hotel_anna', 'table1'] },
    { label: 'go away', goto: ['hotel_anna', 'Anna_sub_session3'] },
  ]);
}

function enter8Old(s: GameState, scene: SceneBuilder): void {
  const librarian = (s as any).IgorevnaBDSM_session_librarian ?? 0;
  const nickname = (s as any).pcs_nickname ?? '';
  const firstname = (s as any).pcs_firstname ?? '';
  if (librarian === 2) {
    scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg"></center>');
    scene.text('class="wrap v_neg">"Hi Anna…"</class><br>class="wrap accent">"' + nickname + '…"</class><br>class="wrap v_neg">"C-can i enter? … \' …shit! Am I the reason of her sight? It couldn\'t be something else… she\'s never been that way… I think it\'s worse than I thought…\' …"</class><br>Anna slowly opens the door, and make you the sign to enter… not more than: ' + 'class="wrap accent">"…take a seat."</class> comes out of her mouth; and you have no difficulties to understand the reason: you should be the one who speaks.');
    scene.actions([
      { label: '…', goto: ['hotel_anna_sex', 'Anna_path_choice'] },
    ]);
  } else if (librarian === 3) {
    scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/annahurt.jpg"></center>');
    scene.text('class="wrap v_neg">"Hi Anna…"</class><br>class="wrap accent">"' + firstname + '…"</class>Anna slowly opens the door, and gives you the sign to enter…');
    scene.actions([
      { label: '…', goto: ['hotel_anna_sex', 'Anna_path_choice'] },
    ]);
  } else {
    scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/electrapack.jpg"></center>');
    scene.text('Again, you see that woman…, you peep to see what\'s happening before going near to the door. "' + 'class="wrap accent"> "… the litter box should be… uhmmm… ask Candy for that… " ' + '… "…that means outside relief probably. Something else?… ". ' + 'class="wrap accent"> "…Yes… please… just don\'t return me a crazy sex maniacs as you always do… " ' + '"I\'ll see what I can do. No promise. Mmmm… it seems she\'s eating too much… she gain weight… ok then, if that\'s everything, we\'ll see in one or two weeks… oh and… Anna, preserve your stamina… just in case… hehehe.".' + 'class="wrap accent">"I knew it…"</class> The woman, left for the hallway, you take your time to assure she\'s no more on sight, then you knock at Anna\'s door…<br>You hear her…' + 'class="wrap accent"> Coming…!</class><br>' + 'class="wrap v_neg">…\' …probably Anna let her sleep for the night, she\'s going away with a bag; it seems they are close friends… \' … ' + ' You are lost in your thought… finally<br>' + 'class="wrap accent"> "' + nickname + '…come in!" ');
    scene.actions([
      { label: '…', goto: ['hotel_anna', '8_old_check'] },
    ]);
  }
}

function enter8OldCheck(s: GameState, scene: SceneBuilder): void {
  const slaveF = (s as any).IgorevnaBDSM_session_slaveF ?? 0;
  const slaveM = (s as any).IgorevnaBDSM_session_slaveM ?? 0;
  const librarian = (s as any).IgorevnaBDSM_session_librarian ?? 0;
  if (slaveF === 1 || slaveM === 1) {
    qspGoto(s, 'hotel_anna', '8_old_slave');
  } else if (librarian === 1) {
    qspGoto(s, 'hotel_anna', '8_old_librarian');
  } else {
    qspGoto(s, 'hotel_anna', '8_old_default');
  }
}

function enter8OldSlave(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0s.jpg"></center>');
  scene.text('Anna leads you to the main room; she\'s wearing only a fishnet without any lingerie on… it\'s becoming a habit for you to see her naked. You cannot avoid to stare at her body and you wonder if you will stay in the same shape with aging… <br>' + 'class="wrap accent"> "Oh… there\'s no need to thank poor Anna to prepare everything… really… it cost me nothing" ' + '<br>You realize you didn\'t say neither hello to Anna…' + 'class="wrap v_neg">"Sorry Anna… my bad… Hi! I\'m a little light head today… Thanks really for your efforts… I really shouldn\'t forgot my manners… "' + '<br>' + 'class="wrap accent">"Nah… I\'m joking. I hope I\'m the source of your distractions… hehehe…"</class> ');
  scene.actions([
    { label: '…', goto: ['hotel_anna', '8_old_slave2'] },
  ]);
}

function enter8OldSlave2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const slaveF = (s as any).IgorevnaBDSM_session_slaveF ?? 0;
  const slaveM = (s as any).IgorevnaBDSM_session_slaveM ?? 0;
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start1s.jpg"></center>');
  scene.text('class="wrap v_neg">"Well… it could reeaaaly help me to make the session with you…"</class><br>' + 'class="wrap accent">"…Nice attempt but: Nope. Not with a semi-serious session…"</class><br>' + 'class="wrap v_neg">… \'…and I cannot touch that forbidden fruit yet… \' …</class><br>' + 'class="wrap accent">"Don\'t give me those puppy eyes… never say never…"</class>');
  if (slaveF === 1) {
    scene.text('class="wrap v_neg">"Ok… then. Is Jeanine ready?"</class><br>' + '…"…Jeanine… is… busy at the moment. But there\'s nothing to be worried about: Verushka will play great, I assure you. She\'s ready; what about you? Shall we start?"');
    scene.actions([
      { label: "Let's start", goto: ['hotel_anna_sex', 'slaveF'] },
    ]);
  } else if (slaveM === 1) {
    scene.text('class="wrap v_neg">"Ok… then. Who\'s the "lucky" guy?"</class><br>' + 'class="wrap accent"> "…Well… it\'s quite useless to call it by name…"</class><br>' + 'class="wrap v_neg">"It?…"</class><br>' + 'class="wrap accent">"Yes "it". it\'s registred as Maxim Egorov at the civil registration… but it\'s more like a thing… a useless one to be honest. That means you can do anything to it, but not sex: that\'s a condition and there will be no deal about it."</class><br>' + 'class="wrap v_neg">"Never had this intention…"</class><br>' + 'class="wrap accent">"The we are ready… Shall we start?"</class>');
    scene.actions([
      { label: "Let's start", goto: ['hotel_anna_sex', 'slaveM'] },
    ]);
  }
}

function enter8OldLibrarian(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0l.jpg"></center>');
  scene.text('Anna leads you to the main room; she\'s wearing only a fishnet without any lingerie on… it\'s becoming a habit for you to see her naked. You cannot avoid to stare at her body and you wonder if you will stay in the same shape with aging… ' + 'class="wrap v_neg">"H-hi Anna…"</class> + \'. You suddenly remember your deal was to help Anna with her work… you don\'t know where this thing will lead you, and a little cold shake runs through your spine… <br>\' + \'class="wrap accent"> "Oh my dear! I\'m so happy to have you here. I\'ve got everything we\'ll need and more! They brought me even "The apocryphal Gor"…!" \' + \'<br>…You don\'t know what Anna is talking about and you don\'t care. Your only thoughts are focused on what she will expect from you now… no word comes out from your mouth.\'');
  scene.actions([
    { label: '…', goto: ['hotel_anna', '8_old_librarian2'] },
  ]);
}

function enter8OldLibrarian2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const nickname = (s as any).pcs_nickname ?? '';
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start1l.jpg"></center>');
  scene.text('Anna notices your worries…' + 'class="wrap accent">"…<' + nickname + '>…I know that sight on the eyes. That sight that cannot be seen because of your lowered head…"</class>She hit the point…<br>' + 'class="wrap v_neg">"N-no… no… it\'s ok…"</class><br>' + 'class="wrap accent">"Listen: you can stop it now if you want and make another choice. If something seems too hard for you, you can always use the safe word or the safe action. Honestly there\'s no need to be worried: just focus on the task I will give you and things will run smoothly."</class><br>' + 'class="wrap v_neg">"Maybe… you are right…"</class><br>Anna starts playing with her heel…' + 'class="wrap accent">"…or… you can decide to play the "bad girl" that need some correction… it\'s up to you at the end."</class><br>' + 'class="wrap v_neg">"…"</class> You don\'t want to follow Anna\'s last advice… do you?<br>' + 'class="wrap accent">"Ok if you decide to follow the deal we\'ll go straight to change into something more appropriate for our roleplay… ready?"</class>');
  scene.actions([
    { label: 'A… deal is a deal…', goto: ['hotel_anna_sex', 'librarian'] },
    { label: "I'd like to think better at my choice Anna…", goto: ['hotel_anna_sex', 'Anna_path_choice'] },
  ]);
}

function enter8OldDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0.jpg"></center>');
  scene.text('Anna leads you to the main room; she\'s wearing only a fishnet without any lingerie on… it\'s becoming a habit for you to see her naked. You cannot avoid to stare at her body and you wonder if you will stay in the same shape with aging… ' + 'class="wrap v_neg">"Hi Anna… you look… great… \' …and naked…\'…"</class><br>' + 'class="wrap accent"> "Thanks sweetie! But we are not here to make compliments… have you thought about today?"</class>');
  scene.actions([
    { label: 'Yes and no… could you remind me something?', goto: ['hotel_anna_sex', 'Anna_path_choice'] },
    { label: "Sorry Anna, I'm not ready for this…", goto: ['hotel_anna', '8_old_notready'] },
  ]);
}

function enter8OldNotReady(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><img src="images/characters/pavlovsk/resident/Anna/sessionpracticend/session_start0a.jpg"></center>');
  scene.text('class="wrap accent"> "Understandable. Well in that case we can only talk about how things are going in the world…" ' + ' Both you and Anna spend an hour speaking of various thing, sometimes the arguments drop on the BDSM but mostly it\'s unrelated to it… It seems that Anna couldn\'t teach you nothing more without practice… At the end she leads you to the exit letting you know she\'s avaible for further experimentation… ' + 'class="wrap accent"> "…and… if you want to return on our steps… feel free to pass anytime."</class> Then she give you two great kisses on your cheeck and you go on your own way…');
  scene.actions([
    { label: 'Thanks Anna, see you…', goto: ['pav_hotel', ''] },
  ]);
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'hotel_anna';
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  if (((s as any).IgorevnaBDSM ?? 0) > 13) {
    (s as any).IgorevnaBDSM = 13;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'meeting':
      enterMeeting(s, scene);
      break;
    case '2a':
      enter2a(s, scene);
      break;
    case '3a':
      enter3a(s, scene);
      break;
    case '3b':
      enter3b(s, scene);
      break;
    case '4a':
      enter4a(s, scene);
      break;
    case 'spank':
      enterSpank(s, scene);
      break;
    case 'dresscontest':
      enterDresscontest(s, scene);
      break;
    case 'Anna_sub_session':
      enterAnnaSubSession(s, scene);
      break;
    case 'Anna_sub_session1':
      enterAnnaSubSession1(s, scene);
      break;
    case 'Anna_sub_session2':
      enterAnnaSubSession2(s, scene);
      break;
    case 'Anna_sub_session3':
      enterAnnaSubSession3(s, scene);
      break;
    case 'Anna_sub_sessionN':
      enterAnnaSubSessionN(s, scene);
      break;
    case 'Anna_sub_sessionD':
      enterAnnaSubSessionD(s, scene);
      break;
    case 'scanning_path':
      enterScanningPath(s, scene);
      break;
    case 'scanning_man':
      enterScanningMan(s, scene);
      break;
    case 'scanning_woman':
      enterScanningWoman(s, scene);
      break;
    case 'scanning_next':
      enterScanningNext(s, scene);
      break;
    case 'scanning_work_intro':
      enterScanningWorkIntro(s, scene);
      break;
    case 'scanning_work':
      enterScanningWork(s, scene);
      break;
    case 'scanning_scary':
      enterScanningScary(s, scene);
      break;
    case 'text':
      enterText(s, scene);
      break;
    case 'table1':
      enterTable1(s, scene);
      break;
    case 'table1game':
      enterTable1game(s, scene);
      break;
    case 'table2':
      enterTable2(s, scene);
      break;
    case 'table2_pre':
      enterTable2Pre(s, scene);
      break;
    case 'table2game':
      enterTable2game(s, scene);
      break;
    case 'table3':
      enterTable3(s, scene);
      break;
    case 'table3_pre':
      enterTable3Pre(s, scene);
      break;
    case 'table3game':
      enterTable3game(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case '8_old':
      enter8Old(s, scene);
      break;
    case '8_old_check':
      enter8OldCheck(s, scene);
      break;
    case '8_old_slave':
      enter8OldSlave(s, scene);
      break;
    case '8_old_slave2':
      enter8OldSlave2(s, scene);
      break;
    case '8_old_librarian':
      enter8OldLibrarian(s, scene);
      break;
    case '8_old_librarian2':
      enter8OldLibrarian2(s, scene);
      break;
    case '8_old_default':
      enter8OldDefault(s, scene);
      break;
    case '8_old_notready':
      enter8OldNotReady(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hotel_anna: LocationDef = {
  name: 'hotel_anna',
  title: 'You decide to check for Anna Igorevna. You think it\'s the be',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
