import { qspCall, qspGoto } from '../_shared/qspBridge';

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
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 1) {
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
    // TODO-QSP: dynamic text: Both of you enter the room and go to sit on the sofa. "Well <<$pcs_nickname>>, w...
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
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I''m not going to say anything about your peeking to anyone ...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, I'm not going to say anything about your peeking to anyone whatever happens. I should have locked the door so that is my fault, I was playing a game of risk. Knowing someone might open the door at any time it is thrilling and dangerous." She pauses. "You can come to visit me here on Mondays and Tuesdays at 20:00 if you decide you want to learn. We'll chit-chat a little and maybe come to some other arrangements in the future to satisfy your curiosity.".`);
    scene.text('"I\'m grateful Miss Igorevna, I will have to think about it."');
    // TODO-QSP: dynamic text: "I''m glad you came and please, call me Anna. Now I have things to do so you''ll...
    scene.text(`"I'm glad you came and please, call me Anna. Now I have things to do so you'll have to leave for now." Anna Igorevna leads you to the door. "See you soon ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'go away', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[0] ?? 0) === 2) {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob0.jpg');
    scene.text('You decide to visit Anna to chat about what you saw her doing in her hotel room, so you go to her floor and politely knock on the door.');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>> I''m glad you decide to continues our discussion, please c...
    scene.text(`"Hi ${((s as any).pcs_nickname ?? '')} I'm glad you decide to continues our discussion, please come in." You thank her and enter the room.`);
    scene.text('"You look great, Anna. Your dress suits you in a wonderful way." Anna directs you to a chair then sits opposite on the sofa.');
    // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>, it''s not everyday you receive such a compliment f...
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I saw nothing!', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['switch'] = ((st as any).AnnaQW['switch'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('Anna looks very serious, "I see you have been working on your spy skills, don\'t worry I am skilled at interrogation. I could beat the truth out of you if you wish"');
    scene.text('"What? I mean… I don\'t know what you did… it was none of my business!"');
    // TODO-QSP: dynamic text: "Hahaha, I''m joking <<$pcs_nickname>>, don''t worry. I don''t like to judge, an...
    scene.text(`"Hahaha, I'm joking ${((st as any).pcs_nickname ?? '')}, don't worry. I don't like to judge, and don't care if someone else judges me, so feel free to speak openly with me: what you saw is a lifestyle."`);
    scene.text('"And this lifestyle is…?"');
    scene.text('"The BDSM lifestyle. BDSM stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. It comes in many forms, and there are a lot of disciplines; possibilities are nearly endless. BDSM can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as a matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enter2a(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 3) {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    ((s as any).AnnaQW = (s as any).AnnaQW ?? {})['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy0.jpg');
    scene.text('You decide to visit Anna again, she did say you would be talking about fun stuff this time. You knock on the door which to your surprise the door is open.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come in I''m on the sofa."
    scene.text(`"${((s as any).pcs_nickname ?? '')}, come in I'm on the sofa."`);
    scene.text('"Hi Anna, I was passing and I… oh, erm…"');
    // TODO-QSP: dynamic text: "I hope you don''t mind <<$pcs_nickname>>, I''d like to let my body breathe a li...
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Wow! You got two really big boobs!', handler: (st: GameState) => {
    (st as any).annaToy = 2;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dom'] = ((st as any).AnnaQW['dom'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1b.jpg');
    scene.text('"Crap even the reduction surgery wasn\'t enough then, it\'s always the same."');
    scene.text('You are surprised by such candid talk about cosmetic surgery');
    // TODO-QSP: dynamic text: "Don''t mind me <<$pcs_nickname>>, the main thing is that you listen"
    scene.text(`"Don't mind me ${((st as any).pcs_nickname ?? '')}, the main thing is that you listen"`);
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Stare at her boobs', handler: (st: GameState) => {
    (st as any).annaToy = 3;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['switch'] = ((st as any).AnnaQW['switch'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1c.jpg');
    // TODO-QSP: dynamic text: [Snap snap] (She clicks her fingers) "<<$pcs_nickname>>, my eyes are up here, I ...
    scene.text(`[Snap snap] (She clicks her fingers) "${((st as any).pcs_nickname ?? '')}, my eyes are up here, I don't mind you looking at me but we don't have the whole day."`);
    scene.text('"Oh!…emmmh… yes…"');
    scene.text('"Do not worry the main thing is that you listen to me"');
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter3a(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    // TODO-QSP: dynamic text: Anna smiles, "Very astute <<$pcs_firstname>>, I am in my own time and sometimes ...
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
  // TODO-QSP: end
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
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you seem a little distracted… should I cover up?"
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
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 4) {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr0.jpg');
    // TODO-QSP: dynamic text: You knock at Anna''s room. "<<$pcs_nickname>> come in, the door is open!" You he...
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'She is the leader', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['sub'] = ((st as any).AnnaQW['sub'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr1.jpg');
    scene.text('"I understand you are the leader here."');
    scene.text('"The leader… hahaha… maybe a \'mentor\' but not a leader. I\'m not making any political movements. Anyway I\'ll give you few tips on fisting and the swing… they have a role in BDSM after all.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'A swing for fisting? Come on', handler: (st: GameState) => {
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['dom'] = ((st as any).AnnaQW['dom'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr1.jpg');
    scene.text('"You don\'t need a swing for fisting another woman."');
    scene.text('"You are right, but the usual fisting depends completely on the fister\'s decisions. Anyway I assume you know something about fisting but I\'ll go over it with you just to make sure."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4a(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    // TODO-QSP: dynamic text: I''m sorry if some of this is a bit scary <<$pcs_nickname>>, but I think that kn...
    scene.text(`I'm sorry if some of this is a bit scary ${((st as any).pcs_nickname ?? '')}, but I think that knowledge shouldn't be censored even when we don't like something. It can be hard to accept that someone may like a real extreme side of BDSM, but it's right for you to know that it exists and by understanding how it should be used you will be aware if you see it being misused everybody should be aware of that. One of the main things people in are community dois ensure that we are all safe. If I did something to you that you didn't like and wanted me to stop I would of course stop but if I did not, having someone else there to ensure I did protects you and me.`);
    scene.text('That is all the toys so now I can show you how one of them works if you like.');
    scene.actions([
      { label: 'Choose a toy for a demonstration', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).AnnaQW = (st as any).AnnaQW ?? {})['trust'] = ((st as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/ztoy.jpg');
    scene.text('Anna presents you some toys to choose from:');
    scene.text('<table border=1><tr><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027toys_paddle/u0027); return false;">Paddle</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027toys_vacuum/u0027); return false;">Vacuum cups</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027toys_wheel/u0027); return false;">Wattenburg wheel</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027toys_wand/u0027); return false;">Violet wand</a></td></tr>');
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
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 5) {
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
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> my dear! I''m totally fine now that you are here! I was waiti...
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
  if (Number((s as any).locArgs?.[0] ?? 0) === 6) {
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
    // TODO-QSP: dynamic text: She walks over to the woman, "As for you Jeanie, you''ve got another hour of thi...
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
    // TODO-QSP: dynamic text: "Hi, I''m <<$pcs_firstname>>" You say as introduction and think it might have be...
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
    // TODO-QSP: dynamic text: It doesn''t take long as the knots are so poorly tied. "Thank you <<$pcs_nicknam...
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
    scene.text('<table border=1><tr><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027restraints_rope/u0027); return false;">Ropes</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027restraints_harness/u0027); return false;">Harness</a></td>');
    scene.text('<td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027restraints_leash/u0027); return false;">Collar and leash</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027hotel_anna_gear/u0027, /u0027restraints_cuff/u0027); return false;">Cuffs</a></td></tr>');
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
  // TODO-QSP: dynamic text: Well <<$pcs_firstname>>, I wonder if you did this because you wanted to be punis...
  scene.text(`Well ${((s as any).pcs_firstname ?? '')}, I wonder if you did this because you wanted to be punished of if you simply don't listen. Either way I gave you fair warning so get on my knee. Now!"`);
  scene.text('Anna has sat down and Jeanie is standing right behind you, her breath on your neck. It doesn\'t look like you have a choice.');
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 7) {
    (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract19.jpg');
    scene.text('You knock at Anna\'s door for your weekly visit. "Hi Anna!"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> Move, move… it''s started!" You have no time to realize that ...
    scene.text(`"${((s as any).pcs_nickname ?? '')} Move, move… it's started!" You have no time to realize that you are dragged by Anna in the main room.`);
    scene.text('"Err… Hi Anna!"');
    // TODO-QSP: dynamic text: "Oh sorry! Hi <<$pcs_nickname>>, take a seat. I''m watching a film and its just ...
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
          // TODO-QSP: dynamic text: As you move toward Anna, Jeanie grabs your ' + iif(PCloSkirt > 0, 'skirt and pul...
          scene.text('As you move toward Anna, Jeanie grabs your ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('skirt and pulls it') : ('pants and pulls them')) + ' down, leaving you exposed.');
        }
      }
    } else {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3a.jpg');
      if ((!((st as any).PCloPanties ?? 0))) {
        if (((st as any).PCloDress ?? 0) === 1) {
          scene.text('As you move toward Anna, Jeanie grabs the hem of your dress and pulls it over your head leaving you in just your underwear.');
        } else {
          // TODO-QSP: dynamic text: As you move toward Anna, Jeanie grabs your ' + iif(PCloSkirt > 0, 'skirt and pul...
          scene.text('As you move toward Anna, Jeanie grabs your ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('skirt and pulls it') : ('pants and pulls them')) + ' down, leaving your panties exposed.');
        }
      }
    }
    scene.text('Anna lays you across her lap and starts spanking your butt, hard. After the first 5 she stops and says, "You have to count them Sweetie, or they don\'t count and I can\'t be smacking you all night."');
    scene.text('She resumes and you starting counting each strike hoping to end the humiliation and pain as quickly as you can.');
    qspCall(st, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(st, 'arousal', 'BDSM', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Endure', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3c.jpg');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Jeanie interrupts Anna and loudly states: "A smack must be on a bare butt." She proceeds to pull down your panties before Anna continues.');
    }
    scene.text('Eventually as you count to 30 Anna stops. "That\'s enough for now Sweetie. I hope you have learnt more about how our world works. You will need time to think about it I\'m sure."');
    qspCall(st, 'pain', '', 5, 'asscheeks', 'spank');
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
  // TODO-QSP: end
  if (Number((s as any).locArgs?.[0] ?? 0) === 8) {
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
  if (Number((s as any).locArgs?.[0] ?? 0) === 9) {
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
