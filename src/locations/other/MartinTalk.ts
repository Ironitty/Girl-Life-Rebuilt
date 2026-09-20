import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/martintalk.jpg');
  if ((!((s as any).MartinTalkVar ?? 0))) {
    (s as any).MartinTalkVar = 1;
    // TODO-QSP: dynamic text: "Sure, <<$pcs_firstname>>, coming right up", Martin says and pours you your drin...
    scene.text(`"Sure, ${((s as any).pcs_firstname || '')}, coming right up", Martin says and pours you your drink.`);
    scene.text('"Thanks, Martin", you say and give him a friendly smile. "Do you mind if I ask you a question?"');
    scene.text('He raises an eyebrow but shrugs. "Shoot."');
    scene.text('"You\'re not originally from Russia, are you?"');
    scene.text('A grin cracks the rough surface of his face and lights it up in a way you would have thought impossible. "What gave me away? My skin color? My accent?"');
    scene.text('You shake your head apologetically. "Sorry, it was a dumb question."');
    scene.text('"Maybe", he agrees, "but you could always try making it less dumb."');
    scene.text('"Okay, uh…" It\'s strange how easily you sometimes forget how normal people talk. "Where are you from?"');
    scene.text('"Ever heard of a little place called \'Colombia\'?"');
    scene.text('"Um… Maybe?" You\'ve seen it written on a map somewhere, probably in one of the Americas, but your face gives away that, beyond knowing it\'s a country, you have no idea.');
    scene.text('"Well, let\'s just say that it\'s not a very nice country to live in, unless you are willing to sell your soul. But it\'s always warm and the women…" He shakes his head wistfully. "Ay-ay-ay, the women are hot and… \'passionate\'."');
    scene.text('"\'Passionate\'?"');
    scene.text('He chuckles. "They are quick to love, but just as quick to anger."');
    scene.text('You grin at his remark, but your mind lingers at what he said before that, and your curiosity quickly gets the better of you.');
    scene.text('"Did you do it?"');
    scene.text('"Did I do what?"');
    scene.text('You know that it\'s not exactly a smalltalk topic, but you\'ve already started asking the question, so you\'re gonna go through with it: "Did you sell your soul?"');
    scene.text('Martin is taken aback by your question at first, making you cringe in fear that you might have gone too far… but then he bursts into laughter. "That, mi amor, is a story for another day. Enjoy your drink before it gets warm."');
    scene.text('With that, he directs his attention at another visitor of the bar. You notice that you\'ve been holding your breath and release it now, glad you didn\'t piss him off. Watching Martin from afar, you nurse on your beverage until you find it empty.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } else {
    if (((s as any).MartinTalkVar ?? 0) === 1) {
      (s as any).MartinTalkVar = 2;
      // TODO-QSP: dynamic text: "Of course, <<$pcs_firstname>>," Martin says and hands you your poison of choice...
      scene.text(`"Of course, ${((s as any).pcs_firstname || '')}," Martin says and hands you your poison of choice.`);
      scene.text('"Thanks, Martin", you say with a smile. You hesitate for a moment, but the truth is that the barman has piqued your interest - he stands out of the sea of men you come across every day like a bottle of tequila in a Russian\'s liquor cabinet, and you cannot help be straightforward about it:');
      scene.text('"Can I ask you something?"');
      scene.text('Martin musters you for a long second before responding. "You wanna know why I\'m here in Russia, don\'t you?"');
      scene.text('You blush slightly. "Is it that obvious?"');
      scene.text('"Yes, it is, but I\'m in no mood to tell a girl who practically just walked into my bar my entire life\'s story." Martin\'s words and tone are surprisingly harsh, so you probably hit a sore spot.');
      scene.text('"Sorry, I didn\'t mean to pry." You quickly decide to drop the subject. "You just… stand out, you know?"');
      scene.text('His features soften, and he seems appeased by your words. "Yeah, I guess I do." He sighs. "I\'m sorry for snapping."');
      scene.text('You look at each other for a little longer, but it\'s awkward and neither of you really knows where to go from here.');
      scene.text('"Guess I better get back to work," he says, and you agree, glad that he broke the uncomfortable silence and leaves you to your beverage.');
      scene.text('Maybe you can satisfy your curiosity about him at a later date. If he talks to you at all, that is.');
      scene.actions([
        { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
      ]);
    } else {
      if (((s as any).MartinTalkVar ?? 0) === 2) {
        (s as any).MartinTalkVar = 3;
        scene.text('The barman gives you nod and before you know it, your drink sits on the counter.');
        scene.text('You awkwardly remember how things went last time, and in the spirit of not putting your foot in your mouth again quite so soon, you decide to ask him something that\'s less likely to make him snap at you.');
        scene.text('"So, uh… What do you think of Russia?"');
        scene.text('"Your politicians are corrupt, your booze is cheap, your girls are as pretty as they are easy…", he gives you a suggestive grin. "Feels just like home."');
        scene.text('"I\'m not easy", you protest quietly, more to yourself than to Martin, a little offended that he\'d just assume you are.');
        scene.text('"Oh, you\'re not? Then why are you in a rowdy bar like this, drinking alone?", he counters.');
        scene.text('"So, if I went to a club full of horny guys my age and drank there, you wouldn\'t think I\'m easy?"');
        scene.text('He shakes his head. "Most clubs I know are at least as seedy as my bar - same difference."');
        scene.text('"Well, maybe I\'m here because I like the atmosphere?"');
        scene.text('Martin raises both eyebrows at that. "I have built this place from nothing with my own two hands, know some of my regulars better than my brothers, love them like brothers too - but nobody comes here for the \'atmosphere\'. Not even me."');
        scene.text('You look around the bar. He has a point, you know that, and you didn\'t really think about what you said before you did, but you aren\'t just gonna sit here and let him call you a slut like that. This is a battle of wits, and as your eyes wander, you have an idea of how to maybe turn your spur-of-the-moment excuse into something deeper.');
        scene.text('"Your regulars come here to relax after a hard day, right?"');
        scene.text('"Yeah."');
        scene.text('"They come here to enjoy a drink and maybe to talk a bit. To you, to their friends, to whoever."');
        scene.text('"I guess," he agrees, unsure where you\'re going with this.');
        scene.text('"Well," you turn towards him again, "you keep them company, even if everything else that day is shitty. You are part of the atmosphere; maybe you don\'t give yourself enough credit."');
        scene.text('Martin opens his mouth to reply but then musters you quietly for a while. You enter a bit of staring contest with him and hold eye contact, but you have to blink. Still, when your gaze refocuses, a soft smile plays around the edges of his mouth.');
        scene.text('"You\'re a sly one, aren\'t you?" He sounds impressed.');
        scene.text('You raise the corner of your mouth. "I thought I was \'easy\'?"');
        scene.text('He bursts into laughter. "Maybe you are, maybe you aren\'t; but you are alright either way, corazón."');
        scene.text('With that, he leaves you to your drink. Minutes pass as you enjoy your beverage, only stopping when you find your glass empty.');
        scene.actions([
          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
        ]);
      } else {
        if (((s as any).MartinTalkVar ?? 0) === 3  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 20) {
          (s as any).MartinTalkVar = 4;
          scene.text('Martin nods, and seconds later, a drink sits in front of you.');
          scene.text('"Thank you."');
          scene.text('A few moments pass in silence as he looks at you and you look back. You turn your head here and there but Martin keeps looking at you as if he was waiting for something.');
          scene.text('"What?" You break the silence. "What\'s wrong? Do I have something on my face? Or are you gonna insult me again?"');
          scene.text('Martin looks mildly surprised. "It\'s been a while since you pestered me. Aren\'t you going to ask me questions to make me reveal me deepest, darkest secrets?"');
          scene.text('"Is that what you were waiting for?" You ask, amazed.');
          scene.text('"Yes, actually. After our last few chit chats, you must be bursting with curiosity. To be honest, I\'m surprised you haven\'t tried to ambush me while I close for the night."');
          scene.text('"Uh, okay…"');
          scene.text('You weren\'t prepared for that at all, but he\'s right: You DO have plenty of questions about him. "Why ar-"');
          scene.text('But you stop. You saw the corner of his mouth twitch. "You aren\'t gonna <b>answer</b> whatever question I ask you, would you?"');
          scene.text('"Oh no, of course not," he shakes his head with a sly grin, "we barely know each other."');
          scene.text('You can feel the anger in your gut - what kind of stupid game is this? "Then why did you even-," you start but his laughter drowns out the rest of the thought and… despite how frustrated you felt a second ago, you can\'t help it: You join him.');
          scene.text('As gruff and menacing as Martin looks and acts sometimes, it\'s good to know that he will pull your leg and laugh about just like anybody else. His shell may be hard but there\'s definitely more to him than that. You\'re not sure that his core is soft, but whatever it is, it\'s bound to be interesting. And as strange as this episode was, it feels like something changed, like, after chipping away at it for a while, you finally broke the ice.');
          scene.text('And armed with that knowledge and a newfound ease, you chat and joke with Martin a while longer before another patron demands his attention.');
          // TODO-QSP: $OpenInnerThought + 'Hm… Maybe I really should try and talk to him when he''s starting to clean up a...
          scene.actions([
            { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
          ]);
        } else {
          if (((s as any).MartinTalkVar ?? 0) === 4  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 28) {
            (s as any).MartinTalkVar = 5;
            scene.text('Martin wordlessly puts your usual drink in front of you, then examines you like he\'s seeing you for the first time.');
            scene.text('"You\'re skinny," he observes.');
            scene.text('"Excuse me?"');
            // TODO-QSP: dynamic text: You ' + iif($bodyVars['desc']='skinny', 'would call yourself skinny, too, but', ...
            scene.text('You \' + iif($bodyVars[\'desc\']=\'skinny\', \'would call yourself skinny, too, but\', \'see yourself as ' + ((s as any).bodyVars ?? 0)?.['desc'] ?? '' + ' rather than skinny, so\') + \' you don\'t really see why he would bring this up.');
            // TODO-QSP: dynamic text: "Are you eating right, <<$pcs_firstname>>?" He inquires, completely ignoring you...
            scene.text(`"Are you eating right, ${((s as any).pcs_firstname || '')}?" He inquires, completely ignoring your visible confusion.`);
            scene.text('"Uh… I guess. Wait, you didn\'t, by any chance, talk to my mother, did you?"');
            scene.text('"Hmm? Oh, no no no, mi amor, but I\'m sure she\'d agree that you could use a good meal every now and then - good meat, not the filth they sell you everywhere."');
            scene.text('He snorts indignantly and beckons you to lean in closer, lowering his voice conspiratorially.');
            scene.text('"Do you know the barbecue here, in the industrial area?"');
            scene.text('You try to think of a specific one, but given that there are at least two barbecues in this street alone… "There are many barbecues in the area."');
            scene.text('"The one by the lake, I mean. The one that\'s a little out of the way."');
            scene.text('"I guess?" You have no idea where he\'s going with this.');
            scene.text('"That\'s the one you should go to. The owners, Eugene and Angela, they are good people. Honest people. Give their place a visit sometime, you won\'t regret it. Their shashlik is exceptional."');
            scene.text('"Suuure," you say and watch Martin walk off.');
            scene.text('Either there was a point to this that you missed completely, or you really look <b>that</b> skinny to him.');
            scene.actions([
              { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
            ]);
          } else {
            if (((s as any).MartinTalkVar ?? 0) === 5) {
              (s as any).MartinTalkVar = 6;
              // TODO-QSP: dynamic text: "Sure, <<$pcs_firstname>>." Martin prepares a drink for you and puts it down in ...
              scene.text(`"Sure, ${((s as any).pcs_firstname || '')}." Martin prepares a drink for you and puts it down in front of you.`);
              scene.text('You smile gratefully and take a gulp. Seeing that Martin sizing you up again, you decide to take the initiative before he starts a conversation as weird as the last one: "So, uh… Are women in Colombia usually… chubby?"');
              scene.text('"Chubby?" He raises an eyebrow.');
              scene.text('"Yeah, you know… You said I was skinny, so I thought, maybe you are used to women having a lot of… curves."');
              scene.text('It seems to take him a moment to remember your last conversation. "Oh. Yes, I guess some women in Colombia tend to have broad hips. Well, most women I know from home are also fairly large in every other respect." He laughs.');
              scene.text('"And do you like that?"');
              scene.text('"What? When women are fat?"');
              scene.text('"… I was going to say \'large\', but… yeah. Do you find that attractive?"');
              scene.text('Martin makes a face. "Not really. I was always more of fan of women who stay in shape."');
              scene.text('It\'s not the answer you expected. "Wait, you told me that I was \'skinny\' and that I should \'eat right\'. And that the women in Colombia were hot and… quick to anger, or something…"');
              scene.text('"Passionate," he corrects.');
              scene.text('You stop him with a wave of your hand. "Same difference! Well, which is it? Do you like fat women or skinny ones?"');
              scene.text('"First of all: Eating right and overeating are two entirely different things, corazón. And I didn\'t mean that you were skinny as in \'too thin\', but that you could use a little more mass to work with."');
              scene.text('"Are you my bartender or my personal trainer?"');
              scene.text('"Martin musters you once more. "I can be both," he grins.');
              scene.text('"And do you find me attractive?" You ask innocently.');
              // TODO-QSP: dynamic text: "That''s for me to know and for you to find out, <<$pcs_nickname>>." With that, ...
              scene.text(`"That's for me to know and for you to find out, ${((s as any).pcs_nickname || '')}." With that, he turns and leaves you to drink and ponder his noncommittal answer.`);
              scene.actions([
                { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
              ]);
            } else {
              if (((s as any).MartinTalkVar ?? 0) === 6  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 35) {
                (s as any).MartinTalkVar = 7;
                // TODO-QSP: dynamic text: "Of course, <<$pcs_firstname>>," Martin says and prepares your poison of choice....
                scene.text(`"Of course, ${((s as any).pcs_firstname || '')}," Martin says and prepares your poison of choice. "Here you go."`);
                scene.text('You give him a friendly smile. "Thanks."');
                scene.text('"Just doing my job. Literally," he quips.');
                scene.text('Martin doesn\'t walk off as he often does - he seems to have a moment to talk.');
                scene.text('"You know… I\'ve been wondering: What <b>do</b> you do during the day?"');
                scene.text('"Would you believe me if I said that I just sit here, behind the bar, waiting until I can open it up again?"');
                scene.text('"No, of course not…" You respond a little too quickly.');
                scene.text('He gives you a long look. "That\'s exactly what you were thinking, wasn\'t it?"');
                scene.text('"… Maybe."');
                scene.text('He laughs. "I can assure you, I do leave this place every now and then. And no, I don\'t just do it to buy more booze."');
                scene.text('"Okay, but what do you do?"');
                scene.text('"Well, there is this book club I\'ve been going to, and I feed the homeless every Thursday." As he speaks, he props his massive, muscular arms up on the counter. "And, oh yeah, I collect flowers in the meadow," he finishes, his sarcasm now unmistakeable. "What do you think?"');
                scene.text('"I think that you are pulling my leg."');
                scene.text('He recoils in mock-shock. "That you would even <b>suggest</b> that! The insolence!"');
                scene.text('You grin at his antics, but your question is still to the point: "Do you do anything besides working out?"');
                // TODO-QSP: dynamic text: "This and that," he replies, now more serious. "I don''t know what you want to h...
                scene.text(`"This and that," he replies, now more serious. "I don't know what you want to hear, ${((s as any).pcs_firstname || '')}. I don't run a drug ring or strip club on the side, if that's what you want to know. Days pass pretty quickly, even when all you do is sleep, work out and go for a walk every now and then."`);
                scene.text('"You should share that thought at the next book club meeting," you comment dryly.');
                scene.text('"I\'d rather not. It would only disturb the other housewives," Martin retorts.');
                scene.text('You chuckle - it\'s strange how these conversations with Martin always take the most extraordinary turns. You know that he doesn\'t talk to his other regulars like this. Actually, from what you can tell, it seems like he\'s acting different with every one of them, adapting to their character, maybe even to their needs. You suggested it before to him, but now you are really starting to understand why they keep coming here, what they see in this place and its scary-looking owner.');
                scene.text('That thought is what makes you say: "If it\'s any consolation: I didn\'t think you were running anything bad. I think you\'d rather feed the homeless than sell them heroin."');
                scene.text('"Maybe I\'m just a good actor," he suggests.');
                scene.text('"Maybe," you concede, "or maybe there\'s actually a nice guy hiding under those muscles and tattoos."');
                scene.text('For a fraction of a second, it looks like he is going to say something, but instead he just gives you a warm smile and you respond in kind, before Martin has to go back to work, leaving you to enjoy your drink in peace.');
                scene.actions([
                  { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                ]);
              } else {
                if (((s as any).MartinTalkVar ?? 0) === 7) {
                  (s as any).MartinTalkVar = 8;
                  scene.text('Martin gives you a nod and before you know it, your beverage sits in front of you.');
                  scene.text('As you grab hold of the glass, the bartender gives you a long look. "So…"');
                  scene.text('"So…?"');
                  scene.text('"You\'ve been drilling me with questions about my private life," he observes, "and yet you have revealed very little about yourself to me. So, this time, <b>I</b> will be doing a little pestering."');
                  scene.text('"Oh," you make. It\'s not like you were hiding anything from him - you just never really gave him a chance to get a question in, you realize. "Sure, pester away."');
                  scene.text('"Let\'s start with what you asked me last time, then: What do <b>you</b> do when you are not sitting here, drinking my booze and enjoying my company?"');
                  if (((s as any).pcs_stren ?? 0) > 60  ||  ((s as any).pcs_agil ?? 0) > 60) {
                    scene.actions([
                      { label: 'Fitness training', handler: (st: GameState) => {
    (st as any).MartinHobby = 'fitness regime';
    scene.text('"I enjoy working out," you say with a grin and flex some muscles. "Doesn\'t it show?"');
    scene.text('Martin laughs. "Oh no, it does. You are a woman after my own heart."');
    scene.text('"That\'s good to know," you smile.');
    scene.text('"You train at the gym?"');
    scene.text('"I go to the gym sometime," you shrug, "but a lot of what I do I can do at home, when I have some a few hours to myself."');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                    scene.actions([
                      { label: 'Dancing', handler: (st: GameState) => {
    (st as any).MartinHobby = 'dance troupe';
    scene.text('"I\'m with a dance troupe. We do some shows every now and then, but it\'s not that big of a deal."');
    scene.text('"Sounds like a lot of work." Martin gives you an approving nod. "Takes a lot of discipline."');
    scene.text('"It is, and it does," you agree, "but it\'s really fulfilling to go on stage, do a routine and earn people\'s applause."');
    scene.text('"Ever thought about doing it professionally?" He asks.');
    scene.text('"I don\'t know. Maybe? Even when you\'re really good, there are so many people who are better, so I don\'t think it would be easy to make a living on dancing. But," you smile, "yeah, I guess I\'d like to be good enough to do it professionally."');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).runnerQW ?? 0)?.['pav_wins2'] > 0) {
                    scene.actions([
                      { label: 'Athletics', handler: (st: GameState) => {
    (st as any).MartinHobby = 'athletics training';
    scene.text('"I do some track and field. Something about running just speaks to me, I guess."');
    scene.text('"I know what you mean. I used to do some athletics too, when I was young. We used to call it \'running away\' back then, though," he chuckles.');
    scene.text('You roll your eyes at his awful joke. "Riiight, thank you for your support. And here I thought you\'d approve of anything sportive."');
    scene.text('"Oh, I do," he concurs. "I just never saw the appeal of dashes and marathons. And you didn\'t strike me as the competitive type."');
    scene.text('You shrug. "It\'s part of what I like about it, I guess, but… I don\'t know. It just feels right, in a way - the right mix of exhausting and satisfying."');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
                    scene.actions([
                      { label: 'Volleyball', handler: (st: GameState) => {
    (st as any).MartinHobby = 'latest volleyball game';
    scene.text('"I play volleyball in a team. It\'s a lot of fun, actually."');
    scene.text('Martin raises an eyebrow. "Volleyball? I thought that was only played on beaches, on holidays."');
    scene.text('"Oh no, it\'s actually kind of a big deal here in St. Petersburg. And in Russia, I guess. When you do it professionally, anyway."');
    scene.text('"And you do it professionally?"');
    scene.text('"Uh, well… I\'m in a team and… we don\'t lose every game. Does that count?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).pcs_sewng ?? 0) > 40) {
                    scene.actions([
                      { label: 'Sewing', handler: (st: GameState) => {
    (st as any).MartinHobby = 'best needlework';
    scene.text('"I\'ve picked up sewing as a hobby."');
    scene.text('Martin raises an eyebrow. "Sewing? Seriously?"');
    scene.text('"Yeah, I did. What\'s wrong with that?" You ask, irritated.');
    scene.text('"I\'m sorry." Martin puts up his hands defensively. "Nothing\'s wrong with that. I was just surprised, is all. You didn\'t strike me as the type who liked to sit down and make their own clothes."');
    scene.text('"Well, I guess I am," you say firmly.');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).chess_rank ?? 0) > 0) {
                    scene.actions([
                      { label: 'Chess', handler: (st: GameState) => {
    (st as any).MartinHobby = 'latest chess game';
    scene.text('"I like playing chess."');
    scene.text('"Ah, so you are a strategist at heart." Martin smiles. "It\'s a good game. Teaches you a lot about life."');
    scene.text('"Does it, now?" You give him a wry smile. "What part of it? The one where a horse tears down a tower?"');
    scene.text('He laughs. "That too. But I was more thinking of preparation: A good chess player anticipates all the moves his opponent can make before they have even thought of them. Preparation and good memory will get you far in life."');
    scene.text('"I guess you\'re right. But it\'s fun either way, and who knows: Maybe you can call me Galina Kasparova soon." You grin.');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).pcs_vokal ?? 0) > 40  ||  ((s as any).pcs_instrmusic ?? 0) > 40) {
                    scene.actions([
                      { label: 'Making Music', handler: (st: GameState) => {
    if (((st as any).pcs_vokal ?? 0) >= ((st as any).pcs_instrmusic ?? 0)) {
      (st as any).MartinHobby = 'singing exercises';
    } else {
      (st as any).MartinHobby = 'finger exercises';
    }
    // TODO-QSP: dynamic text: "I '+iif(pcs_vokal >= pcs_instrmusic, 'sing', 'play an instrument')+'."
    scene.text('"I ' + ((((st as any).pcs_vokal ?? 0) >= ((st as any).pcs_instrmusic ?? 0)) ? ('sing') : ('play an instrument')) + '."');
    // TODO-QSP: dynamic text: "No wonder, with ' + iif(pcs_vokal>=pcs_instrmusic, 'a voice', 'deft fingers') +...
    scene.text('"No wonder, with ' + ((((st as any).pcs_vokal ?? 0)>=((st as any).pcs_instrmusic ?? 0)) ? ('a voice') : ('deft fingers')) + ' like yours," Martin smiles.');
    scene.text('"Oh, stop it," you say, flattered by his compliment. "Would you like to, I don\'t know, hear something sometime?"');
    scene.text('Martin gives you a look of pure horror. "Oh god, please no."');
    scene.text('If looks could kill, Martin would drop dead on the spot. "You are such an asshole, you know?" But his laugh is infectious, and you cannot help but join him.');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).kickbox ?? 0)?.['sash'] > 0) {
                    scene.actions([
                      { label: 'Kickboxing', handler: (st: GameState) => {
    (st as any).MartinHobby = 'kickboxing training';
    scene.text('"I\'ve taken up martial arts. Kickboxing."');
    scene.text('Martin nods approvingly. "Good. A woman should know how to defend herself."');
    scene.text('"Yeah, that\'s part of the reason why I started with that," you agree.');
    scene.text('"But it\'s not the only one, I assume?"');
    scene.text('"Well, at first it was just fun learning how to beat the crap out of guys," you grin, "but it takes a lot of discipline and dedication, and there\'s always room for improvement. No matter how good you are, it stays a challenge, and I think I want or maybe even need that in my life."');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).pcs_photoskl ?? 0) > 40  ||  ((s as any).pcs_artskls ?? 0) > 40) {
                    scene.actions([
                      { label: 'Art', handler: (st: GameState) => {
    if (((st as any).pcs_artskls ?? 0) >= ((st as any).pcs_photoskl ?? 0)) {
      (st as any).MartinHobby = 'drawings and paintings';
    } else {
      (st as any).MartinHobby = 'photography';
    }
    // TODO-QSP: dynamic text: "I ' + iif(pcs_artskls >= pcs_photoskl, 'started drawing and painting', 'picked ...
    scene.text('"I ' + ((((st as any).pcs_artskls ?? 0) >= ((st as any).pcs_photoskl ?? 0)) ? ('started drawing and painting') : ('picked up photography')) + ' some time ago."');
    scene.text('"Ah, so you have the keen eye and talent of an artist," Martin smiles.');
    scene.text('"Well, I don\'t know if I have talent," you respond sheepishly.');
    scene.text('"Nonsense," Martin insists, "I\'m sure you are great. I couldn\'t do what you do."');
    scene.text('"Of course you could. It doesn\'t matter if you feel like you can or can\'t do it. I mean, I don\'t know if I\'m any good at it, but I really like the way it allows me to capture what I see and the way it feels, you know?" You look at your beverage, embarrassed. "God, just listen to me: I sound like one of those pretentious yuppies who glue two pieces of wood together and call it art."');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'A lot of things', handler: (st: GameState) => {
    (st as any).MartinHobby = 'dark secret hobbies';
    scene.text('"Oh, you know, a little bit of everything. Sometimes I work out, sometimes I do some dancing or running or play football, but there\'s nothing that I pursue zealously enough to call it a hobby."');
    scene.text('"Can\'t decide which one suits you best, huh?"');
    scene.text('"I guess? Maybe everything suits me just fine. Or perhaps I\'m just not interested in one thing in particular." You shrug. "I don\'t know."');
    scene.text('Martin shakes his head slightly. "I have to say, though, I am somewhat disappointed."');
    scene.text('You raise an eyebrow. "Why? Because I don\'t have any dark secret hobbies to share?"');
    scene.text('"Ah ah ah," Martin admonishes, "just because you didn\'t share them, corazón, doesn\'t mean you don\'t have any."');
    scene.text('"Alright, you caught me." You raise your hands in defeat. "<b>I</b> am the one who has been selling drugs to the homeless all along," you say dramatically.');
    scene.text('Martin laughs. "Well, that would make for a much better twist than me doing it, wouldn\'t it?"');
    scene.text('You size him up and nod emphatically. "Yeah, if this was an episode on a crime show, you\'d be devoted father of three the police suspect first because of he looks the part."');
    scene.text('"And what would you be? The murderous housewife? Or the overambitious new detective?"');
    scene.text('"Why not both?" You laugh, and Martin joins you.');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkHobby'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).MartinTalkVar ?? 0) === 8  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 42) {
                    (s as any).MartinTalkVar = 9;
                    scene.text('Martin nods and a few seconds later, a drink sits in front of you.');
                    scene.text('"Thank you," you say, giving the barman a grateful look. He responds with a friendly nod, but he seems a little more thoughtful than usual today.');
                    scene.text('You don\'t know if it\'s that contemplative aura of his or a question that you\'ve been subconsciously waiting to ask, but the question of questions is out before you even know it: "Do you believe in god, Martin?"');
                    scene.text('Strangely enough, Martin doesn\'t seem surprised by that question at all - maybe he was wondering about that himself.');
                    scene.text('"I used to," he admits after a moment. "I was brought up in the Catholic faith, at least. If you didn\'t say your prayer, you didn\'t get your supper." He smirks, but his eyes speak of fond memories.');
                    scene.text('"But you don\'t believe in that anymore?"');
                    scene.text('He shakes his head wordlessly. Instead, he does something you don\'t think you\'ve ever seen him do while the bar is open: He pours himself a glass of tequila and, after regarding it for a moment, slams it back.');
                    scene.text('It\'s fairly obvious that this is a sensitive topic, and you barely dare to raise your voice. "What happened?"');
                    scene.text('He sighs deeply; not at your question, you feel, but at his own answer: "Life happened, corazón. Life can make or break someone\'s faith. Me, I eventually figured that either there was no god or the filio di puta had a really twisted sense of humor and didn\'t deserve my faith." The bitterness in his voice is almost palpable.');
                    scene.actions([
                      { label: 'What happened to him?', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martintalk.jpg');
    scene.text('The question is burning under your nails: What could have brought this man to the other end of the world? But you realize that he has opened up to you in good faith, not because you pressed him for answer. He would only tell you as much as he wanted to, and pushing him would get you nowhere.');
    scene.text('So, you do what friends do: You try not to be an ass.');
    scene.text('"That bad?" You ask carefully.');
    scene.text('His face darkens. "You have no idea. There is no good god in Colombia." It\'s the first hint Martin has given you about his past since you met him, but beyond the obvious conclusion that something awful must have happened, you can\'t draw any conclusions, and he doesn\'t seem to want to linger there, either.');
    // TODO-QSP: dynamic text: "What about you, <<$pcs_firstname>>? Do you believe in some higher power?"
    scene.text(`"What about you, ${((st as any).pcs_firstname || '')}? Do you believe in some higher power?"`);
    if (((st as any).start_type ?? 0)?.['magic'] === 'nomagic') {
      scene.text('You ponder the question for a moment before you answer.');
      scene.text('"I\'m not sure, actually. I used to go to church more when I was younger. My parents would take me there, but I didn\'t really think about it, you know? I just went because I had to."');
      scene.text('You pause for a moment, still not sure what you believe.');
      scene.text('"Now… now there are times when I go to church and I don\'t really know why I went there, like I was looking for something more, something new, but it\'s not there. And sometimes," you smile awkwardly, "sometimes I walk around town, see something strange and amazing and I feel… good. Connected, somehow." You shrug. "So, am I religious? Am I crazy? You tell me."');
    } else {
      scene.text('"More than you can imagine," you murmur.');
      scene.text('For the first time since you discovered that magic exist, somebody who sees the world the way you used to is asking you about it - or, well, asking a question that confronts you with it. What are you gonna say?');
      scene.text('You couldn\'t possibly explain it all; even if you are allowed to, who would believe you? You wouldn\'t even believe yourself, if you\'re honest. Still, you feel the powerful urge to tell him something, anything, at least - it\'s been there since that fateful day, bottled up, and now there\'s finally someone who might listen:');
      scene.text('"I… I feel like- no, I <b>know</b> that there\'s something most people can\'t see, something that doesn\'t make any logical sense, and yet it is there, all around us, all the time, and it affects us in so many ways."');
      scene.text('You are struggling for words. It\'s all so clear in your head, but putting it in a way that doesn\'t get you admitted to an asylum is so hard.');
      scene.text('"I used to believe that the world is what everybody can see, smell, feel, and that\'s it. But I- I\'ve experienced something, something I can\'t…" You trail off and stop. You can hear yourself chuckle - you just can\'t help it. "I can\'t explain it, can\'t even describe it, but… but it changed everything for me." You smile awkwardly. "God, I must be sounding like a complete lunatic to you."');
    }
    scene.actions([
      { label: 'Raving lunacy', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martintalk.jpg');
    scene.text('Martin listens patiently, and when you finish, he gives you that same understanding look he always wears when one of his patrons gets something heavy off their chest.');
    scene.text('"Who am I to judge you?" He reaches out for your hand, takes it into his large one, and squeezes it gently. "If that\'s how you feel, that\'s how you feel; don\'t let somebody else take that away from you. I envy those who have faith in something, regardless of whether it\'s something they witness out on the street or something they see all around them. If it\'s real to you, that\'s enough."');
    scene.text('You can\'t help but smile at that, relieved that he didn\'t shun you. Relieved that he listened. "I have faith in you, you know."');
    scene.text('"In me?" He raises an eyebrow. "Maybe you don\'t know me enough, then."');
    scene.text('You shake your head. "You listen to people, in a way most people don\'t, and maybe can\'t. You talk to them, comfort them, show them that you care. There are plenty of assholes, but I <b>believe</b>", you stress the word with a smile, "that there are some good people. You may not always look \'good\', but I know that you are."');
    scene.text('"I don\'t know what you\'re talking about, girl - I look fantastic." Martin laughs.');
    scene.text('For a moment, you want to talk back, stop him from deflecting your heartfelt compliment like that, but then you just smile and hold your tongue because you notice that Martin hasn\'t let go of your hand and, after his laughter has subsided, he\'s giving you a smile full of gratitude.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).MartinTalkVar ?? 0) === 9  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 48) {
                      (s as any).MartinTalkVar = 10;
                      // TODO-QSP: dynamic text: "Here you go." Martin puts your drink in front of you before you''ve even proper...
                      scene.text('"Here you go." Martin puts your drink in front of you before you\'ve even properly come to rest on the stool. \' + $OpenInnerThought + \'When your bartender has your drink ready by the time you order it, maybe you\'ve been spending too much time in the bar,\' + $CloseInnerThought + \' you think to yourself.');
                      scene.text('"How are you doing today?" You ask.');
                      scene.text('Martin shrugs. "Same as always: You kill a man, you move on."');
                      scene.text('You laugh at his remark, but when he doesn\'t join in, you stop and look at him uncertainly. "You <b>are</b> joking, right?"');
                      scene.text('He gives you a mysterious smile but otherwise ignores the question. "How about you? Rough day at the office?" He pauses. "Wait, do you even work in an office?"');
                      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                        scene.actions([
                          { label: '"I\'m still going to school"', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/martintalk.jpg');
    scene.text('"No, actually, I\'m still going to school."');
    scene.text('You regret your words almost immediately when Martin\'s face darkens. "Still going to school, huh? What about you being 18?"');
    if (((st as any).pcs_persuas ?? 0) < 30) {
      qspCall(st, 'exp_gain', 'persuas', (Math.floor(Math.random() * 4) + 2));
      if (((st as any).age ?? 0) >= 18) {
        qspCall(st, 'npc_relationship', 'modify', 'A216', (-10));
        qspCall(st, 'mood', 'lower', (Math.floor(Math.random() * 3) + 3));
        // TODO-QSP: dynamic text: "I, uh… I''m <<age>> now," you stammer.
        scene.text(`"I, uh… I'm ${((st as any).age || '')} now," you stammer.`);
        scene.text('"You are <b>now</b>," he repeats. "So you weren\'t 18 when you first came here? You lied to my face?"');
        scene.text('He\'s clearly angry with you, but he seems to be more disappointed than angry.');
        scene.text('"I\'m sorry," you say quietly. You don\'t know what else you can say - there probably isn\'t anything you could add or explain that wouldn\'t make this worse.');
        scene.text('Martin slowly shakes his head, but then, just when you think he\'s gonna say something else, he just walks off to tend to another customer.');
        scene.text('You don\'t think you\'re off the hook - this definitely hurt your relationship with him. But it\'s probably a good sign that he didn\'t throw you out, so if you give him some space and keep your conversation with him light, you could probably recover from this.');
        scene.actions([
          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
        ]);
      } else {
        qspCall(st, 'npc_relationship', 'modify', 'A216', (-20));
        qspCall(st, 'mood', 'lower', (Math.floor(Math.random() * 4) + 3));
        (st as any).knowMartin = 2;
        (st as any).MartinLie = 1;
        scene.text('You open your mouth, but as soon as you do, as soon as you look at him, you know you wouldn\'t be able to lie convincingly. The cat\'s out of the bag.');
        scene.text('"So you aren\'t," the bartender deduces from your silence.');
        scene.text('You shake your head, feeling guilty about lying. You try and look at him, but you cannot bear the look of anger and betrayal in his eyes.');
        // TODO-QSP: dynamic text: "I thought you were better than this, <<$pcs_firstname>>." He''s not yelling, bu...
        scene.text(`"I thought you were better than this, ${((st as any).pcs_firstname || '')}." He's not yelling, but his words make you wince as if he did.`);
        scene.text('Finally, Martin shakes his head. "Get out."');
        scene.text('"What?" You are silently hoping you misunderstood, that you didn\'t screw up that badly.');
        scene.text('"Leave my bar," Martin repeats with unmistakeable clarity. "I don\'t want kids in here."');
        scene.text('"Martin, I-"');
        scene.text('But he cuts you off: "Get out and don\'t come back until you really are 18. I\'m not falling for fake passports anymore."');
        scene.text('With that, Martin snatches the drink in front of it and puts the glass down so violently that you can hear the glass crack - it\'s a miracle it didn\'t shatter.');
        scene.text('You give him a concerned look, but all you get in return is a cold stare.');
        scene.text('With no choice but to comply, you get up and leave the bar.');
        scene.text('This definitely could have gone better…');
        scene.actions([
          { label: 'Leave the bar', goto: ['city_industrial', ''] },
        ]);
      }
    } else {
      qspCall(st, 'exp_gain', 'persuas', (Math.floor(Math.random() * 3) + 4));
      qspCall(st, 'npc_relationship', 'modify', 'A216', (-2));
      qspCall(st, 'mood', 'lower', (Math.floor(Math.random() * 3) + 1));
      scene.text('"My parents sent me to school a year later than usual. Thought it\'d be good if I had more childhood," you say quickly.');
      // TODO-QSP: dynamic text: "I''m serious, <<$pcs_firstname>>: You haven''t been lying to me, have you?"
      scene.text(`"I'm serious, ${((st as any).pcs_firstname || '')}: You haven't been lying to me, have you?"`);
      scene.text('"No," you say, hoping he\'ll believe you, "no, I haven\'t."');
      scene.text('Martin still looks doubtful, carefully examining your face for signs of dishonesty, but after a few more moments of close scrutiny, he nods. "Alright, I\'ll give you the benefit of the doubt. But I don\'t like being lied to, so don\'t ever let me catch you lying."');
      scene.text('"I won\'t."');
      scene.text('Regardless of the rest, at least the last bit is definitely honest, and Martin seems satisfied with that. He gives you nod that\'s slightly more curt than usual, then walks off to serve another customer.');
      scene.text('You just about managed to save the situation, and you are pretty sure this could have gone A LOT worse, but Martin definitely needs a moment to cool it, and you are suddenly very grateful to have a drink in front of you and a moment to yourself.');
      scene.actions([
        { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
      ]);
    }
  } },
                        ]);
                      }
                      if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
                        scene.actions([
                          { label: '"I\'m a university student"', handler: (st: GameState) => {
    scene.text('"I\'m going to university," you say, your voice somewhere between pride and shame: Pride over the privilege of receiving a higher education, and shame in the face of thinking of yourself as \'privileged\' while talking to Martin, who you think didn\'t have that option… or did he?');
    scene.text('Your thoughts are unknown to Martin, though, and he grins. "So, you\'re that smart, huh?"');
    scene.text('"I sure hope so," you laugh. "It\'s not always easy keeping up, but I manage."');
    scene.text('"I guess that means you live in one of those dormitories near the uni?"');
    scene.text('"Yeah. Well, I\'ve got a room there, at least. I wouldn\'t call it living."');
    scene.text('"It can get pretty wild there during the weekend, I heard," Martin comments, "and drunk people can be unpredictable. You watch yourself, okay?"');
    scene.text('"I always do," you reply with a smile, touched by his concern.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).tanwork ?? 0) === 1) {
                        scene.actions([
                          { label: '"I\'m a maid"', handler: (st: GameState) => {
    scene.text('"I\'m working as a maid."');
    scene.text('"And here I thought that Russia was over feudalism," he says with a wry grin.');
    scene.text('"Oh, stop pretending - I know you\'re imagining me in a maid uniform right now. And yes, I am required to wear one while I clean up." You wink at him.');
    scene.text('"Maybe I did," Martin admits. "Do they treat you right, at least?"');
    scene.text('"Yeah, I\'m fine. The wife of my employer doesn\'t really like me… but the pay is good and I have more free time than I would have in most other jobs. Plus, the uniform is really cute."');
    scene.text('"I bet it\'s kinda skimpy," Martin presumes, sounding a tad dreamier than he probably intended to.');
    scene.text('You lean in close and whisper: "You have no idea."');
    scene.text('For a moment, Martin seems to be completely preoccupied with his imagination, but he manages to recover his focus. "So, uh… Where do you live?"');
    scene.text('"At my employers\' place, actually." Martin cocks his head inquisitively, and you nod. "Yeah, it\'s kinda weird and old-fashioned, I know. I felt like some prince\'s maid when he told me that I would be expected to sleep in my room in the apartment."');
    scene.text('"And did it get \'weird\'?" Martin asks carefully.');
    scene.text('"Like I said, I\'m fine," you placate him once again. "It makes sense. I gotta make breakfast and all that, and I have a big room to myself, AND the apartment is right in the city center, so, really, it\'s all I could ask for."');
    scene.text('"Well, as long as you\'re happy with it." Martin, however, doesn\'t sound very happy. Could he be jealous of Nicholas?');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).leonidSecretary ?? 0) > 0  ||  ((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed') {
                        scene.actions([
                          { label: '"I\'m a secretary"', handler: (st: GameState) => {
    scene.text('"I\'m working as a secretary."');
    scene.text('"Oh," he makes.');
    scene.text('"\'Oh\'?" You raise an eyebrow. "What do you mean by \'oh\'?"');
    scene.text('"Well, you didn\'t strike me as the secretary type."');
    scene.text('"And what type would that be?" You ask, feeling belligerent. "The type who gives their boss a blowjob under the table?"');
    scene.text('"I didn\'t mean that," Martin tries to mollify you. "Forget I said anything."');
    scene.text('There is a bit of an awkward silence after that, your own words echoing in your head.');
    scene.text('It\'s Martin who finally breaks it. "So, uh… How is your work?"');
    scene.text('You shrug. "Lots and lots of paperwork, and my boss can be hard on me sometime."');
    scene.text('You realize what you said the instant you look at Martin, who looks like he wants to comment on that. Thankfully, he holds his tongue and doesn\'t make the joke he must have had on his mind.');
    scene.text('"Well, everybody\'s gotta earn their salary somehow," he says instead, and you simply nod in response.');
    scene.text('With apparently nobody in the bar requiring his attention yet, and in an attempt to end this talk on a higher note, Martin presses on. "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed') {
                        scene.actions([
                          { label: '"I work in a factory"', handler: (st: GameState) => {
    scene.text('"I\'m working in a textile factory."');
    scene.text('Martin makes a face. "That can be ugly. I hope you\'re not working in the bad kind."');
    scene.text('"I wouldn\'t know how to tell the good from the bad, to be honest," you shrug.');
    scene.text('"Well, if you\'re so exhausted and hurting all over that you\'re lying in bed and wouldn\'t mind not waking up again, it\'s not the good kind," Martin explains helpfully, smirking as he does.');
    scene.text('"Thank you for clearing that up," you grin. "But no, it\'s not quite that bad. It could be better, of course, but I gotta earn my money somehow."');
    scene.text('Martin nods understandingly.');
    scene.text('With apparently nobody in the bar requiring his attention yet, he presses on. "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
                        scene.actions([
                          { label: '"I work as a waitress"', handler: (st: GameState) => {
    scene.text('"I am a waitress in a cafe."');
    scene.text('"That can be a nasty job," Martin looks around meaningfully. "Stressful, terrible working hours, touchy customers…"');
    scene.text('"You seem to be fending them off just fine," you chuckle.');
    scene.text('"If you break the hands of the first three guys who try to touch your butt, the rest of them learns quickly," he nods.');
    scene.text('"Words to live by."');
    scene.text('"Seriously though," Martin turns serious again, "how does that line of work suit you?"');
    scene.text('"It\'s not exactly the best job in the world, but it pays the bills. Barely."');
    scene.text('Martin nods understandingly.');
    scene.text('With apparently nobody in the bar requiring his attention yet, he presses on. "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed') {
                        scene.actions([
                          { label: '"I work in a clothing store"', handler: (st: GameState) => {
    scene.text('"I work in a clothing store."');
    scene.text('"Ah, so you work in fashion."');
    scene.text('"I… wouldn\'t call it that."');
    scene.text('"What else would you call selling clothes?"');
    scene.text('You look at him for a long moment, trying to find hints of sarcasm. You don\'t.');
    scene.text('"You have no idea what fashion even is, do you," you conclude.');
    scene.text('"Not a one," he admits proudly. "Anyway, how\'s that working out for you?"');
    scene.text('"It\'s not exactly the best job in the world, but it pays the bills. Barely."');
    scene.text('Martin nods understandingly.');
    scene.text('With apparently nobody in the bar requiring his attention yet, he presses on. "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).job_status ?? 0)?.['city_market_saleswoman'] === 'employed') {
                        scene.actions([
                          { label: '"I\'m working a market stand"', handler: (st: GameState) => {
    scene.text('"I work at a market stand in Pavlovsk."');
    scene.text('The bartender suddenly looks a lot less at ease. "How in the world did you end up working there?"');
    scene.text('"I stumbled over an ad for a market saleswoman, and I really needed a job."');
    scene.text('"Market stand, huh? What\'s your boss\' name?" He seems to be trying to sound casual, but he\'s not doing a particularly good job of it.');
    scene.text('"Arthur."');
    scene.text('He nods gravely. "Be careful around him and his buddies. They\'re a sleazy bunch."');
    scene.text('"I\'ll watch myself, don\'t worry."');
    scene.text('"You do that."');
    scene.text('You two fall silent after that, letting the somewhat gloomy turn this talk took sink in as you try to think of something to lighten the mood.');
    scene.text('With apparently nobody in the bar requiring his attention yet, Martin eventually asks: "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
                        scene.actions([
                          { label: '"I work at a strip club"', handler: (st: GameState) => {
    scene.text('You blush slightly, but decide to be honest with Martin: "I work in a strip club… as a stripper."');
    scene.text('Martin scrutinizes you for a moment. You half-expect him to get judgmental, and you don\'t know if you could even really blame him for it, but his expression softens. "We do what we gotta do to get by, right?"');
    scene.text('You sigh, relieved. "Yeah, I guess we do."');
    scene.text('"Do they treat you right, at least?"');
    scene.text('You break into a smile - the question is non-committal, but you think you can sense a hint of jealousy. "I\'m fine, don\'t worry about me."');
    scene.text('"Good. But be careful. Places like that can do nasty things to you."');
    scene.text('You two fall silent after that, letting your admission sink in and trying to find a topic that can lighten the mood a little.');
    scene.text('With apparently nobody in the bar requiring his attention yet, Martin eventually asks: "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      if (((s as any).fame ?? 0)?.['city_modelling'] > 30) {
                        scene.actions([
                          { label: 'Tell him you\'re a model', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 1));
    scene.text('"Well, I… I didn\'t want to say anything before, but I\'m… a model, kind of."');
    scene.text('The burly bartender gives you a long look, as if he was trying to remember something. "Right," he says slowly, "I knew I had seen your face somewhere recently."');
    scene.text('"And?" You ask, trying to hide your apprehension.');
    scene.text('"You looked great. Simple as that."');
    scene.text('"I didn\'t take you for a fashion guy," you smile. "Then again, I guess it wasn\'t the fashion picture you were looking at…"');
    scene.text('"Uh, I…" Martin seems flabbergasted by your conclusion, "I… stumbled over them, so to speak."');
    scene.text('You smile even more than before. "Did you now?"');
    scene.text('It is strangely flattering to know that Martin looked at nude pictures of you. Perhaps he was even jerking off to them… not that he\'d admit it.');
    scene.text('Martin looks around as if he were hoping for another patron to serve, but with apparently nobody in the bar requiring his attention yet, he seems hard-pressed to change the topic:');
    scene.text('"So, uh… where do you live?"');
    scene.text('You chuckle to yourself and decide to let him off the hook… for now.');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Give a non-committal answer', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A216', (-2));
    scene.text('"Oh, you know, this and that. Whatever covers the bills. I get by"');
    if (((st as any).fame ?? 0)?.['city_porn'] <= 30) {
      scene.text('"Is remaining mysterious part of the job description?"');
      scene.text('"You\'d like to know that, wouldn\'t you?" You tease.');
      scene.text('Martin chuckles. "Alright, you can have your secrets." But you can tell that he is a little disappointed you didn\'t tell him more about yourself.');
      scene.text('Still, he does what he can to hide that and give the conversation a new direction. "So, where do you live?"');
    } else {
      scene.text('"I know that you are… doing porn," Martin tells you quietly.');
      scene.text('Your face falls. You try to keep your cool, but you\'re feeling cold all of a sudden. Why is he bringing this up?');
      scene.text('His eyes trace the outline of your body underneath your clothes, and you suddenly feel very exposed, and in a way that\'s very different from screwing some guy in front of a camera.');
      scene.text('"How in the world did a young, pretty girl like you end up doing that?" He asks.');
      scene.text('You\'re not sure if he\'s genuinely interested in an answer or just hiding his disgust - or lechery - really well, but you respond: "I… well, I like exposing myself… and I like sex. And it pays really well. So, I thought…" You trail off.');
      scene.text('"You thought it would be easy money with no consequences?" He offers, his voice completely neutral. "That nobody you know would ever find out?"');
      scene.text('You slump your shoulders. He\'s not wrong. This line of work is a lot safer than, say, prostitution, but it\'s almost as likely to make you an outcast. "If you\'re gonna throw me out, just throw me out already."');
      scene.text('The burly bartender raises an eyebrow. "Who said anything about throwing you out?"');
      scene.text('"You\'re not going to?"');
      scene.text('"I can\'t say that I\'m not a little disappointed that-" He stops, as if he caught himself saying something stupid, "but I told you before: Who am I to judge? That\'s one of the smart things Jesus said."');
      scene.text('"I thought you didn\'t believe in god?" You can barely contain your relief.');
      scene.text('He gives you a careful smile. "Some girl I know told me that she believed in good people. So I figured, maybe he existed and was just a really good guy."');
      scene.text('His smile infects you too. "Yeah, maybe."');
      scene.text('Despite your relief, both of you fall silent for a while. It\'s a lot to process, after all, and the question that goes through your head - if Martin had been jerking off to your videos - is annoyingly persistent. But with apparently nobody in the bar requiring his attention yet, Martin eventually feels like continuing the conversation somehow:');
      scene.text('"So, where do you live?"');
    }
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                        { label: '"I don\'t have a job"', handler: (st: GameState) => {
    scene.text('"I\'m still trying to find the right thing for me," you say, fidgeting with your glass, almost certain about what he\'s going to respond.');
    scene.text('"Then what are you doing here, spending money on booze?" He confirms your expectation. He seems to be trying not to be judgmental but his tone has a scolding quality to it.');
    scene.text('But you simply shrug. "Would sitting at home, all by myself and stone sober, be better than here, in company and tipsy?" You nod towards some of the other patrons. "I bet I\'m not the only one here without a job."');
    scene.text('"You\'re a lot younger than most of them," Martin admonishes.');
    scene.text('"And I\'m a woman," you add the part he didn\'t speak out, "and having a young, drunk, unemployed woman in your bar is making you nervous."');
    scene.text('"Not you specifically but… Yeah, that too," he admits.');
    scene.text('"Well, here\'s to the spirit of equality," you raise your glass and take a gulp.');
    scene.text('With apparently nobody in the bar requiring his attention yet, Martin presses on. "So, where do you live?"');
    scene.actions([
      { label: 'Continue', goto: ['MartinTalk', 'MartinTalkApartment'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).MartinTalkVar ?? 0) === 10  &&  ((s as any).MartinSex ?? 0) === 1) {
                        (s as any).MartinTalkVar = 11;
                        // TODO-QSP: dynamic text: "Sure, <<$pcs_firstname>>." Martin prepares a drink for you and puts it down in ...
                        scene.text(`"Sure, ${((s as any).pcs_firstname || '')}." Martin prepares a drink for you and puts it down in front of you.`);
                        scene.text('You smile gratefully and take a gulp. Now that you are sitting here, right in front of him, it hits you all over again: You had sex with Martin!');
                        scene.text('Your lips curl into a grin as a cheesy line crosses your mind and you can\'t help but say it, just loud enough for the bartender to hear you: "Did you miss me, stud?"');
                        // TODO-QSP: dynamic text: Martin doesn''t smile back. He doesn''t look embarrassed either. "<<$pcs_firstna...
                        scene.text(`Martin doesn't smile back. He doesn't look embarrassed either. "${((s as any).pcs_firstname || '')}… We should talk."`);
                        // TODO-QSP: $OpenInnerThought + 'Uh oh… Sounds like he''s particularly grumpy today.' + $CloseInnerThought + ' N...
                        scene.text('"About what? Did one of the guys slip on…" You stop. There\'s a pensiveness in his eyes that confuses you. "About what?" You repeat.');
                        scene.text('"About this situation we\'re in, you and me," he almost whispers. "I wanted to make sure we\'re… how does that saying go? \'On the same page.\'"');
                        scene.text('"And what page would that be?" This conversation is starting to make you uncomfortable.');
                        scene.text('"That what happened between us was… amazing. And honestly, I would like to do it again, often. But it can\'t be more than casual sex."');
                        scene.text('That was unexpected. You honestly didn\'t put much thought into what \'this\' was, beyond the fact that you felt physically attracted to Martin, but it\'s in the nature of talks like this that they make you wonder…');
                        scene.text('"I don\'t get you, Martin," you say after mustering him for a few seconds. "Did some weird flirt guru in Colombia teach you that this is the best thing to say to a woman after you-"');
                        scene.text('"Shhh!" Martin makes, probably to make you talk more quietly, but all it does is irritate you more.');
                        scene.text('"And why would you even bring this up? Do I come off as clingy, cheap, as a gold digger or-"');
                        scene.text('"No." This time, Martin cuts you off, calm but insistent - it works significantly better than \'Shhh.\' "That\'s not why I wanted to talk. I\'ve been in situations before where it all began as good fun but my partners eventually wanted more than I could give them. And I don\'t want to make the mistake of giving you false hope, should you have any."');
                        scene.text('"So, just casual sex, no strings attached, and that\'s it." You feel stupid just repeating what he said, but you\'re not sure how to react.');
                        scene.text('"Yes," the bartender confirms. "It\'s up to you if you wanna continue or walk out and never see me again. I\'ll be here regardless, and my decision stands. I just thought I\'d tell you so it didn\'t come as a surprise someday."');
                        scene.text('"And when I have a boyfriend or something like that?"');
                        // TODO-QSP: dynamic text: "Then you go and be happy with that man. Or woman. Whichever you prefer. You are...
                        scene.text(`"Then you go and be happy with that man. Or woman. Whichever you prefer. You are a good friend, ${((s as any).pcs_firstname || '')}, and a beautiful, passionate woman. But I can't play a bigger role in your life than I already am."`);
                        scene.text('He leaves you to think about this conversation some more. You\'re not entirely sure how much this really hit you. Were you angrier about him bringing this up here, in public, and then trying to silence you, or about his \'rejection\'?');
                        scene.text('Do you have feelings for Martin beyond physical attraction?');
                        scene.text('Well, it doesn\'t really matter now. It\'s probably the best you could have hoped for: You have friend and experienced lover you can hook up with whenever you feel like it and who just told you that neither of you have to worry about the other\'s feelings too much.');
                        scene.text('After all, you weren\'t actually looking for a serious relationship with a man old enough to be your father, were you?');
                        scene.actions([
                          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                        ]);
                      } else {
                        if (((s as any).MartinTalkVar ?? 0) === 11  &&  ((s as any).MartinSex ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 64) {
                          (s as any).MartinTalkVar = 12;
                          // TODO-QSP: dynamic text: "Of course, <<$pcs_firstname>>," Martin says and hands you your poison of choice...
                          scene.text(`"Of course, ${((s as any).pcs_firstname || '')}," Martin says and hands you your poison of choice.`);
                          scene.text('"Thanks, Martin", you say with a smile and take a sip.');
                          scene.text('Martin smiles back and asks: "So, how do you feel about sex?"');
                          scene.text('You are so surprised by that question that most of the liquid you were swallowing takes a wrong turn somewhere along the way. This certainly wasn\'t what you expected him to ask you when you got out of bed this morning. Then again, neither did you expect to die in a bar, asphyxiated by your own drink.');
                          scene.text('Once you\'ve stopped choking on your beverage, you ask, still coughing: "Where the hell did that come from?"');
                          scene.text('Martin, who hasn\'t been very helpful during your brush with death, shrugs. "I thought our conversations have been getting a little too brainy lately, so I figured something a little more… physical was in order."');
                          scene.text('"Really?" You wheeze. "Whatever happened to \'a gentleman doesn\'t ask\', or however that saying goes?"');
                          scene.text('"\'A gentleman doesn\'t kiss and tell\'," he corrects and continues with a sly smile, "but it\'s been so long since the last kiss that I can barely recall it. And I never claimed to be a gentleman."');
                          scene.text('No, of course he didn\'t. "Oh, so you have no memory of being intimate with me?" You sigh dramatically. "That hurts, you know."');
                          scene.text('"How could I possibly forget that?" He speaks and looks at you with a sudden intensity that almost makes you blush. "I just wanted to know how you feel about it."');
                          // TODO-QSP: dynamic text: You give him a hint of a smile. "Trust me, if I didn''t like what we''re doing, ...
                          scene.text('You give him a hint of a smile. "Trust me, if I didn\'t like what we\'re doing, you\'d know. But for the record: I like sex.' + ((((s as any).stat ?? 0)?.['bj']>30) ? (' I like giving blowjobs.') : ('')) + ((((s as any).stat ?? 0)?.['anal']>30) ? (' I like anal.') : ('')) + ((qspFunc(s, 'fetish', 'get_pref', 'rough') > 30) ? (' I like it rough.') : ('')) + ((((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) ? (' I like exposing myself.') : ('')) + ((((s as any).stat ?? 0)?.['lesbian_count']>10) ? (' And I kinda like women, too.') : ('')) + ' But most importantly, I like having sex with you."');
                          scene.text('You lean forward, so close to Martin now that he can smell the alcohol on your breath. "Does that answer your questions?"');
                          scene.text('Baffled by your directness, Martin nods silently.');
                          scene.text('"Good," you say with an enticing smile. Then you point down the counter. "I think somebody\'s looking for your attention, Mr. Barman."');
                          scene.text('That seems to shake him from his reverie. Grumbling, Martin goes about his duty, walking a little more stiffly than you are used to seeing him.');
                          scene.text('You cannot outright see the effect of your words, but the telltale hints of it alone somehow make your drink taste better.');
                          scene.actions([
                            { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                          ]);
                        } else {
                          if (((s as any).MartinTalkVar ?? 0) === 12  &&  ((s as any).MartinSex ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A216'] >= 70) {
                            (s as any).MartinTalkVar = 13;
                            scene.text('Martin nods and a few seconds later, a drink sits in front of you.');
                            scene.text('"Thank you," you say. You already know what you want to ask Martin today, a topic you had brushed before: "Do you have a big family?"');
                            scene.text('"Two sisters in Colombia and a brother who went to the United States, living his dream. I hear he started making movies, loves playing bad guys." He laughs. "He looks a lot like me, too, so he\'s giving me a bad name."');
                            scene.text('Now that he mentions it, he <b>does</b> remind you of an actor. What was his name again?');
                            scene.text('Martin smiles and shakes his head. "Can you imagine? A guy like me in Hollywood?"');
                            scene.text('The warmth in his expression makes you forget about the actor. "Sounds like you and your siblings are close," you note, sharing his smile.');
                            scene.text('"Yeah, I guess we are. We don\'t talk much, but," he taps his chest, just above the heart, "in here, where it counts, we care about each other. Always have."');
                            if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).npc_rel ?? 0)?.['A33'] >= 50  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 50)) {
                              scene.text('"Yeah, I know what you mean," you nod, thinking of your own siblings. "No matter where they are, you always know that somebody\'s there for you."');
                              scene.text('"You have siblings?"');
                              // TODO-QSP: dynamic text: "An older sister and a younger brother", you nod. "My ' + iif(npc_rel['A33']>=np...
                              scene.text('"An older sister and a younger brother", you nod. "My ' + ((((s as any).npc_rel ?? 0)?.['A33']>=((s as any).npc_rel ?? 0)?.['A34']) ? ('sister') : ('brother')) + ' and I are really close, but I care about both of them."');
                              scene.text('"There\'s always a favorite sibling," he chuckles. "Usually the one who shared the most candy with you."');
                            } else {
                              if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
                                scene.text('"I wish I knew what that\'s like. I have siblings, but we\'re not very close."');
                                scene.text('"I was the same around your age," Martin admits, "but trust me: That can change quickly. Sometimes, the tiniest event can pull you closer together."');
                              } else {
                                scene.text('"I wish I knew what that\'s like."');
                                scene.text('"No siblings?"');
                                scene.text('You shrug. "My family and I aren\'t too close. Growing up, I wondered if they would even notice if I was gone. Hell, I don\'t know if anybody\'s even realized I-" You stop abruptly. Admittedly, you\'ve been wondering for a while what\'s been going on back home since you left, but as strong as the urge to confide in someone is, it would raise some really awkward questions.');
                                scene.text('Martin seems to understand though and doesn\'t press the issue.');
                              }
                            }
                            scene.text('"What about your parents?" You ask.');
                            scene.text('Martin smiles wistfully and shakes his head. "Long gone, corazón. Long gone."');
                            scene.text('You nod understandingly and, for a moment, both of you fall silent.');
                            scene.text('As your mind processes the wealth of new information, you think about his brother, the actor, again, trying to recall his name… and remember something else. "Wait, didn\'t you say you had \'brothers\'?"');
                            scene.text('"Did I?" Martin\'s expression darkens ever so slightly. "Yeah, I might have said that."');
                            scene.text('You\'ve seen him look like this before: You are wading into dangerous territory. "Should I not have asked?"');
                            scene.text('He shrugs, trying to play it down. You can sense that he doesn\'t like this topic at all, but he says: "It\'s fine. We were four brothers, always getting in trouble together. We were known all over town…"');
                            scene.text('Martin falls silent again, and you don\'t dare say something. It doesn\'t look like he\'s trying to find the right words, or like he doesn\'t want to continue - he seems lost in thought, as if he had simply forgotten he was talking to you.');
                            scene.text('Careful and a little worried, you reach for his hand. The moment you touch it, he snaps out of it, a bewildered look on him.');
                            scene.text('"Are you okay?" You ask.');
                            scene.text('"I\'m fine," he assures you, sounding anything but. "Enjoy your drink, mi amor."');
                            scene.text('With that, he turns around and, rather than serving patrons, retreats to wash some glasses and check the register, apparently needing some space to pull himself together again.');
                            scene.text('Whatever happened to his brothers seems to deeply trouble him.');
                            scene.actions([
                              { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                            ]);
                          } else {
                            if (((s as any).npc_rel ?? 0)?.['A216'] < 20) {
                              scene.text('As usual, Martin brings you your drink of choice. He seems to be in a talkative mood today, though, because he stays with you and strikes up a conversation.');
                              scene.text('Mind you, it\'s not a very deep one - after your first few attempts at smalltalk, you kinda feel like you have to tiptoe around subjects that may be sensitive, and despite you showing that you are quick on your feet and not one to take an insult lying down, he seems a little unsure about how to talk to you, too.');
                              scene.text('Still, you manage to keep it going for a while and by the time another patron wants to order something, you feel like you\'ve gotten to know each other a little better, even if you\'re still a ways away from becoming best friends.');
                              scene.actions([
                                { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                              ]);
                            } else {
                              if (((s as any).MartinSex ?? 0) === 1) {
                                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 2) + 0));
                                scene.text('As per usual, your favorite barman brings you your drink and, wouldn\'t you know it, lingers to spend a little time with you.');
                                scene.text('On the surface, your interactions seem like business as usual: You talk, you flirt, you challenge and insult each other, and you laugh together, as friends do.');
                                scene.text('But the fact that the two are having sex does changes a few things: The meaningful looks you give each other when somebody nearby makes a dirty joke; the wanton smile you share when one of you stares at the spot where you went at it last time; the way you linger when your hands or eyes meet.');
                                scene.text('Still, as per your unspoken agreement, you are not acting on that while Martin is working behind the bar - the fantasy of giving him a blowjob while he\'s pouring drinks has its appeal, but, the huge risk of getting caught aside, Martin has to move around too much for that to be practical.');
                                // TODO-QSP: dynamic text: So, when one of the regulars calls for Martin, you lick your <<$pc_desc[''lip si...
                                scene.text(`So, when one of the regulars calls for Martin, you lick your ${((s as any).pc_desc ?? 0)?.['lip size'] ?? ''} lips lasciviously and thank him for the drink in a low, sexy voice before Martin goes back to work, his walk a little funnier than before.`);
                                scene.actions([
                                  { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                                ]);
                              } else {
                                scene.text('As always, Martin brings you your beverage of choice. Rather than leave to look after his other patrons, though, he sticks around and the two of you chat for a while.');
                                // TODO-QSP: dynamic text: You keep the conversation light today, talking about how your respective day was...
                                scene.text('You keep the conversation light today, talking about how your respective day was, what has been going on in the bar and the area,\' + iif($MartinHobby!\', \' and, of course, your ' + ((s as any).MartinHobby || '') + ',\', \') + \' but really, these subjects are little more than a facade for subtle and not-so-subtle quips, hidden and open insults you try to outwit the other with, and the occasional suggestive remark, usually followed by roaring laughter.');
                                scene.text('Neither of you finds out anything mindblowing about the other, but you still feel like you and Martin know each other a little better now, your friendship with him growing stronger the more time you spend with him.');
                                scene.actions([
                                  { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
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
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMartinTalkHobby(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/martintalk.jpg');
  scene.text('"All that counts is that you enjoy doing it," Martin comments encouragingly. He seems to want to say or ask something else, but both of you notice something out of the corner of your eyes:');
  scene.text('A new patron is calling him over, so it looks like this heart-to-heart is coming to an end soon.');
  scene.text('You lean on the counter, giving Martin a coquettish look, as you sometimes do to tease him. "Did that one question already satisfy your curiosity about me?" You ask.');
  scene.text('Martin leans in close too, closer than he\'s been to you yet. His dark eyes and aged face look different from here: Behind the counter or when he has to step in somewhere in the bar, he looks like nothing can get to him, caring and friendly when he can be, strong and imposing when he has to be. Up close, however, he looks tired - full of life, and yet aged before his time. These thoughts are swiped away though when he whispers into your ear with his coarse but warm voice:');
  scene.text('"Not even remotely."');
  scene.text('You\'ve done some friendly flirting with Martin before, but something about the way he said this before turning to serve another customer made your belly tingle.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
  ]);
  scene.build();
}

function enterMartinTalkApartment(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/industrial/bar/martintalk.jpg');
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_apartment')) {
    scene.text('"Actually, I have a small apartment, on the other side of the park."');
    scene.text('"Well, it\'s good if you can afford it. Living on your own builds character."');
    scene.text('"Says the bachelor," you comment sarcastically.');
    scene.text('"Are you putting into doubt that I have character?" Martin asks, feigning indignation.');
    scene.text('"Oh no, I\'d never do that," you assure him, your tone still sarcastic.');
    scene.text('From the laughter that follows, the conversation quickly moves away from work and, as per usual, lasts until somebody requires a new drink, leaving you to finish your beverage alone.');
  } else {
    if (((s as any).tanwork ?? 0) === 1) {
      scene.text('"I live in the city center, actually."');
      scene.text('Martin\'s eyes go wide with surprise. "An apartment like that must be costing you a fortune!"');
      scene.text('"Well, it\'s not \'my\' apartment. I just live in a room in it. It\'s a bit complicated, but basically, I get to live in the city center, rent-free."');
      scene.text('Martin laughs. "Well, you definitely make it sound complicated. Good for you. But," he turns serious once more, "nothing like that is ever truly \'free\', so… be careful."');
      // TODO-QSP: $OpenInnerThought + 'He wouldn''t be Martin if he didn''t tell me to "watch out" at least once a day...
    } else {
      if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
        scene.text('"I have a room in one of the university dormitories, actually. I wouldn\'t call it \'living\', though."');
        scene.text('"Oh, so you\'re a student, too?"');
        scene.text('"Yeah, but that doesn\'t earn any money, and probably won\'t for some time, so…" You shrug.');
        scene.text('Martin nods understandingly. "I get it. At least you have a place to live near the center. Though it can get pretty wild there during the weekend, I heard," he comments, "and drunk people can be unpredictable. So, you watch yourself, okay?"');
        // TODO-QSP: $OpenInnerThought + 'He wouldn''t be Martin if he didn''t tell me to "watch out" at least once a day...
      } else {
        if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
          scene.text('"I still live with my parents, in Pavlovsk," you admit.');
          scene.text('"Oh, well, that can\'t be easy at your age."');
          scene.text('"Yeah, it… has some downsides. But my parents are cool, and money\'s tight, so…"');
          scene.text('Martin smiles. "You don\'t have to justify yourself. There are worse things than living with your parents. The train ride must suck, though."');
          scene.text('You sigh. "Yeah, it does. I\'ll get an apartment of my own as soon as I can. In the city, I hope."');
          scene.text('"You do that, corazón," Martin says, already a little distracted by a patron waving at him, and just like that, you\'re alone with your drink.');
        } else {
          scene.text('You do not want to talk about your current living situation, though. It\'s just too embarrassing to talk to him about it while you\'re sitting in his bar, so you have to make something up, and quick.');
          scene.text('"I, uh… I have an apartment. Not far from here, in fact."');
          scene.text('"Oh," he makes, "that must be unpleasant. I know how loud it can be."');
          scene.text('"Yeah, it\'s not very nice. But, you know… it\'s got four walls and a roof, and that\'s all that counts."');
          scene.text('"If it\'s that bad, maybe I could come by and help yo-"');
          scene.text('"No no, it\'s fine," you cut him off with a hint of panic in your voice. Realizing that, you add more calmly: "I\'ll be moving out soon, anyway."');
          scene.text('"Okay…" He says slowly, raising an eyebrow. Before he can make any further inquiries, a nearby patron calls for him, saving you from further embarrassment and giving you time to get your story straight, should he ask again.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'MartinTalkHobby':
      enterMartinTalkHobby(s, scene);
      break;
    case 'MartinTalkApartment':
      enterMartinTalkApartment(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MartinTalk: LocationDef = {
  name: 'MartinTalk',
  title: '"Thanks, Martin", you say and give him a friendly smile. "Do',
  region: 'other',
  locationType: 'public_indoors',
  description: ['"Thanks, Martin", you say and give him a friendly smile. "Do you mind if I ask you a question?"'],
  enter: enter,
};
