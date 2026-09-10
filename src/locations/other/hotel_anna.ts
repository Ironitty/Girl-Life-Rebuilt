import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorevnaBDSM ?? 0) === 5) {
    // TODO-QSP: gt 'hotel_anna', 1
  } else {
    // TODO-QSP: gt 'hotel_anna', 2
    if (((s as any).IgorevnaBDSM ?? 0) === 7) {
      // TODO-QSP: gt 'hotel_anna', 3
    } else {
      // TODO-QSP: gt 'hotel_anna', 4
      if (((s as any).IgorevnaBDSM ?? 0) === 9) {
        // TODO-QSP: gt 'hotel_anna', 5
      } else {
        // TODO-QSP: gt 'hotel_anna', 6
        if (((s as any).IgorevnaBDSM ?? 0) === 11) {
          // TODO-QSP: gt 'hotel_anna', 7
        } else {
          // TODO-QSP: gt 'hotel_anna', 8
          if (((s as any).IgorevnaBDSM ?? 0) === 13) {
            // TODO-QSP: gt 'hotel_anna', 9
          } else {
            // TODO-QSP: gt 'hotel_anna', 10
          }
        }
        if (((s as any).ARGS ?? 0)[0] === 1) {
          (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.img('images/characters/pavlovsk/resident/Anna/annacorridor1.jpg');
          scene.text('You decide to check for Anna Igorevna. You think it\'s the better option, there\'s no harm in visiting her and you don\'t want to be disrespectful, especially if not doing so lead her to say something to Mr. Leonidovich. You reach the floor and to your surprise Anna Igorevna seems to waiting for you.');
          scene.text('"I\'m glad you\'ve decide to come. Please come in, we can chat on the sofa."');
          scene.actions([
            { label: 'Enter', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    // TODO-QSP: dynamic text: Both of you enter the room and go to sit on the sofa. "Well <<$pcs_nickname>>, w...
    scene.text(`Both of you enter the room and go to sit on the sofa. "Well ${((s as any).pcs_nickname ?? 0)}, we shouldn't be disturbed… or peeped." She says with a little smile.`);
    scene.text('Feebly you respond, "I-i want to apologise, it was wrong of me to peep on you like that. I\'m here to say you that I won\'t do that again."');
    scene.text('She peers straight at you, it feels like if she\'s scanning through your soul. "As I said I usually encourage curiosity, but you need to know the limit of your skills. I mean: Would you be able to hack the KGB\'s servers without being able to turn on a computer? But that\'s not the point, I didn\'t want to help you in becoming a spy."');
    scene.text('She\'s got a point, you are far from being a secret agent, and this is not the reason for you to be here of course. "Let me ask a question: Did you like what you saw?" She ask without any embarrassment.');
    scene.text('You don\'t know how you should answer, but it seems she\'s not interested in reporting you. "Well I don\'t know. I know a little about sex, but this is some kind of next level shit."');
    scene.actions([
      { label: 'Did I just say shit to Lariska\'s mom?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro2.jpg');
    scene.text('Ignoring your language Anna replies "Next level… an interesting definition. Still you didn\'t answer my question." She continues to scan you and fiddles with her hair.');
    scene.text('"Say, are you interested in knowing something more about what you have seen? I\'m not suggesting taking part or anything, just some chit-chat about the \'next level shit\'"');
    scene.text('"I-i.." You stammer a little taken aback… did she ask if you want to learn more about what she was doing?');
    scene.text('"No need to answer now. Come visit me if you are interested. I\'m sure it is something new for you so I understand your concern, and I assure it will be a simple chit-chat. Do you know for example that what you have seen is more common than you think? You can learn something useful maybe I have some tips for your spying hobby too." She smiles.');
    scene.text('Did she say shit? "I don\'t know. It\'s a lot to take in. I was worried about my job and now you are talking about teaching me about… Whatever this all is."');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I'm not going to say anything about your peeking to anyone w...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I'm not going to say anything about your peeking to anyone whatever happens. I should have locked the door so that is my fault, I was playing a game of risk. Knowing someone might open the door at any time it is thrilling and dangerous." She pauses. "You can come to visit me here on Mondays and Tuesdays at ' + func('time', 'get_time_string', 20, 0) + ' if you decide you want to learn. We'll chit-chat a little and maybe come to some other arrangements in the future to satisfy your curiosity.".`);
    scene.text('"I\'m grateful Miss Igorevna, I will have to think about it."');
    // TODO-QSP: dynamic text: "I'm glad you came and please, call me Anna. Now I have things to do so you'll h...
    scene.text(`"I'm glad you came and please, call me Anna. Now I have things to do so you'll have to leave for now." Anna Igorevna leads you to the door. "See you soon ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'go away', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).ARGS ?? 0)[0] === 2) {
          (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob0.jpg');
          scene.text('You decide to visit Anna to chat about what you saw her doing in her hotel room, so you go to her floor and politely knock on the door.');
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>> I'm glad you decide to continues our discussion, please co...
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)} I'm glad you decide to continues our discussion, please come in." You thank her and enter the room.`);
          scene.text('"You look great, Anna. Your dress suits you in a wonderful way." Anna directs you to a chair then sits opposite on the sofa.');
          // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>, it's not everyday you receive such a compliment fr...
          scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}, it's not everyday you receive such a compliment from another woman. Anyway, I'm sorry to have pushed you a little last time, but being peeped on several times has made me suspect you may be interested in what you have seen."`);
          scene.text('"Oh, I don\'t know you said we can have a chit-chat."');
          scene.text('"Are you sure you aren\'t curious, maybe a little bit? Or maybe you have some little questions you were never be able to ask?"');
          scene.text('"Well…"');
          scene.text('"Let me try another approach, what do you think you have seen?"');
          scene.actions([
            { label: 'A-a sado service?', handler: (st: GameState) => {
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('You wait for her reaction. She tries not to but breaks out in a huge smile close to laughing "Wow! To be so innocent again. No, i\'m not convinced you know what that even is. I don\'t do this for money. Sometimes I will sell my services, that\'s true, but that can be very limiting. You have to stick to what you have agreed in the price and cannot always stop people from doing what they want. This is a Lifestyle for me and for my community, we willingly do what we like."');
    scene.text('"And this lifestyle is…?"');
    scene.text('"The BDSM lifestyle. BDSM stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. It comes in many forms, and there are a lot of disciplines; possibilities are nearly endless. BDSM can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as a matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    qspCall(s, 'hotel_anna', '2a');
  } },
            { label: 'A perverted game?', handler: (st: GameState) => {
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('You wait for her reaction. "A typical vanilla answer. Ok, I\'ll shine some light in the darkness: You saw a Lifestyle. I won\'t hide that it can be scary but just because society is telling you it isn\'t natural, does not mean it is not natural to you."');
    scene.text('"I don\'t mean to be rude but most of the people I know would see this as some kind of perversion."');
    scene.text('"Mmmm… What do you know about BDSM?"');
    scene.text('"The things you have done in this room…"');
    scene.text('"Sort of, but this is very reductive. BDSM is a popular acronym, it stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. Those activities are obviously a part of it but not even close to the whole. It\'s a lifestyle, and there\'s no need to fulfil all of the criteria for you to be considered a BDSM practitioner; also a lot of "vanilla" activities are actually BDSM practices. It can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as the matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    qspCall(s, 'hotel_anna', '2a');
  } },
            { label: 'I saw nothing!', handler: (st: GameState) => {
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('Anna looks very serious, "I see you have been working on your spy skills, don\'t worry I am skilled at interrogation. I could beat the truth out of you if you wish"');
    scene.text('"What? I mean… I don\'t know what you did… it was none of my business!"');
    // TODO-QSP: dynamic text: "Hahaha, I'm joking <<$pcs_nickname>>, don't worry. I don't like to judge, and d...
    scene.text(`"Hahaha, I'm joking ${((s as any).pcs_nickname ?? 0)}, don't worry. I don't like to judge, and don't care if someone else judges me, so feel free to speak openly with me: what you saw is a lifestyle."`);
    scene.text('"And this lifestyle is…?"');
    scene.text('"The BDSM lifestyle. BDSM stands for: Bondage, Domination or Discipline, Submission or Sadism and Masochism. It comes in many forms, and there are a lot of disciplines; possibilities are nearly endless. BDSM can be both fictional and practical, mental and physical. From an erotic spanking or a vanilla roleplay, from giving or accepting verbal commands or a simple dirty talk, through to a complex and intense full session. Limits are discussed and although they may be pushed, hard limits are never overstepped; as a matter of fact if something goes wrong we use a "safe word", usually "Red" to stop immediately. In short, we look out for each other."');
    qspCall(s, 'hotel_anna', '2a');
  } },
          ]);
        }
        if (((s as any).ARGS ?? 0)[0] === 3) {
          (s as any).IgorevnaBDSM = ((s as any).IgorevnaBDSM ?? 0) + (1);
          (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy0.jpg');
          scene.text('You decide to visit Anna again, she did say you would be talking about fun stuff this time. You knock on the door which to your surprise the door is open.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come in I'm on the sofa."
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, come in I'm on the sofa."`);
          scene.text('"Hi Anna, I was passing and I… oh, erm…"');
          // TODO-QSP: dynamic text: "I hope you don't mind <<$pcs_nickname>>, I'd like to let my body breathe a litt...
          scene.text(`"I hope you don't mind ${((s as any).pcs_nickname ?? 0)}, I'd like to let my body breathe a little, all day wearing the same tight dress starts to feel a bit claustrophobic, please take a seat. I want to show you some toys I've brought to cover a number of activities in my lifestyle."`);
          scene.actions([
            { label: 'Cover your eyes', handler: (st: GameState) => {
    (s as any).annaToy = 1;
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1a.jpg');
    scene.text('"I-I\'m sorry… A-Anna… I cannot look."');
    scene.text('"Seriously? You saw me naked! OK, fine I\'ll cover a little, my puppies will stay in place. It\'s better for you to focus on the session. Anna covers herself up a little.');
    scene.text('"Good, let\'s start then. In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod trying to not look at her body.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    qspCall(s, 'hotel_anna', '3a');
  } },
            { label: 'Wow! You got two really big boobs!', handler: (st: GameState) => {
    (s as any).annaToy = 2;
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1b.jpg');
    scene.text('"Crap even the reduction surgery wasn\'t enough then, it\'s always the same."');
    scene.text('You are surprised by such candid talk about cosmetic surgery');
    // TODO-QSP: dynamic text: "Don't mind me <<$pcs_nickname>>, the main thing is that you listen"
    scene.text(`"Don't mind me ${((s as any).pcs_nickname ?? 0)}, the main thing is that you listen"`);
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    qspCall(s, 'hotel_anna', '3a');
  } },
            { label: 'Stare at her boobs', handler: (st: GameState) => {
    (s as any).annaToy = 3;
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy1c.jpg');
    // TODO-QSP: dynamic text: [Snap snap] (She clicks her fingers) "<<$pcs_nickname>>, my eyes are up here, I ...
    scene.text(`[Snap snap] (She clicks her fingers) "${((s as any).pcs_nickname ?? 0)}, my eyes are up here, I don't mind you looking at me but we don't have the whole day."`);
    scene.text('"Oh!…emmmh… yes…"');
    scene.text('"Do not worry the main thing is that you listen to me"');
    scene.text('"In BDSM we use a lot of furniture, some are fixed, some not and some are semi-fixed. I cannot bring fixed furniture for obvious reasons, so we only have furniture that is not fixed and toys. Today we\'ll look at some toys, next time furniture and restraining. The toys i\'m showing you today can be used alone or with other toys. Some toys are for pain and pleasure in general, but others can be used to increase the sensations experienced during sexual acts. I can demonstrate one with you but wait until the end before you decide if you want a demonstration, first I\'ll show you the items then you can make an informed choice, shall we start?" You nod.');
    scene.text('Oh! About drugs, they are strictly forbidden due to the nature of BDSM itself, we cannot trust our judgement or that of someone else if they are pissed or stoned it could be dangerous and it can damage the relationship, which would undermine everything. That\'s not to say those in a BDSM relationship cannot drink or do drugs, only that they should not be whipping each other when they do."');
    qspCall(s, 'hotel_anna', '3a');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const hotel_anna: LocationDef = {
  name: 'hotel_anna',
  title: '"Wait <<$pcs_nickname>>, i didn\'t finished. Since it seems you have a clear preference, i\'d like to give you some option to chose, anyway you could see and chose directly next time. So basically you can chose between a man, a woman or to delay your choice to our next encounter: but in that last case, with all the probability, i will not able to call an external performer and so all the route will be avaible and it will be between me and you… hehehe."',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
