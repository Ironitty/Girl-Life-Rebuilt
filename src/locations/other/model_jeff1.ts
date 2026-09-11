import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterJeff_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).jeff ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_2'] }]);
  } else {
    if (((s as any).jeff ?? 0)?.['status'] > 2  &&  ((s as any).jeff ?? 0)?.['status'] < 5) {
      scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_3'] }]);
    } else {
      if (((s as any).jeff ?? 0)?.['status'] === 5) {
        scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_modelling'] }]);
      }
    }
  }
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/0.jpg');
  scene.text('Walking around the studio, you suddenly stop when you see a naked girl staring at you.');
  scene.text('<i>Is she a model here? Why is she staring at me like that…?</i>');
  scene.text('Seeing you notice her, she waves you over.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
    scene.text('"Hi! Are you the new model here?"');
    scene.text('"Yeah, I-" you start to say.');
    scene.text('"Welcome to our little family!" the girl says, interrupting you and suddenly jumping up and wrapping her arms around your neck.');
    scene.text('You can feel her puffy nipples against your skin and you can tell she\'s really not shy in the least about physical boundaries or personal space.');
    scene.text('"Ah-! Ahm… Thanks…" you say awkwardly when she lets you go. "I was just looking around, getting familiar with the studio."');
    scene.text('"How do you like it? I personally find it very busy… People don\'t want to play with me very often…" she says with a pouty face.');
    scene.actions([
      { label: '"I don\'t actually mind"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/2.jpg');
    scene.text('"I don\'t actually mind the busyness that much."');
    scene.text('"Well why not? Everyone should play more often! Well now, time for introductions! You go first!" she tells you.');
    scene.actions([
      { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/3.jpg');
    // TODO-QSP: dynamic text: "I'm <<$model['firstname']>>."
    scene.text(`"I'm ${((s as any).model ?? 0)?.['firstname']}."`);
    scene.text('"What a cute name!"');
    scene.text('<i>She\'s got quite a bubbly personality doesn\'t she?</i> you think to yourself before you realize she\'s still standing in silence, continuing to smile at you.');
    scene.text('"And your name is…?" you say awkwardly.');
    scene.text('"Oh! You can call me Jeff!" she says.');
    scene.actions([
      { label: '"Jeff…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
    scene.text('"Jeff…?" you ask.');
    scene.text('She nods and smiles. "That\'s what they call me here!"');
    scene.text('"That\'s your real name?"');
    scene.text('"Nope!" She keeps smiling.');
    scene.text('"Ahh, uh… Okay…" you say.');
    scene.text('All of sudden she seems to startle herself and squeaks. "Oh no! I totally forgot, I was supposed to be on set! Gotta run! It was nice meeting you!" you hear Jeff call back as she skips off towards the other side of the studio.');
    scene.text('<i>What a weird girl…</i>');
    ((s as any).jeff ?? {})['status'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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

function enterJeff_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/4.jpg');
  ((s as any).jeff ?? {})['status'] = 3;
  scene.text('As you walk past a set, you hear someone yell out from an armchair. "Hey there, cutie!"');
  scene.text('Looking over, you see Jeff smiling at you, sitting with her legs up and her neat little pussy on peeking out from between them. She must\'ve just finished a shoot.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hey!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"Hey Jeff. How are you? Why are you sitting here all alone?" you ask.');
    scene.text('"Just goofing off a bit!" Jeff answers. She leans in towards you and whispers, "I\'m supposed to be on set right now but I\'m playing hooky for a little while!"');
    scene.actions([
      { label: '"Isn\'t that bad?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/6.jpg');
    scene.text('"Isn\'t that bad?" you ask. "After all, they\'re paying you to be on set and do the job, aren\'t they?"');
    scene.text('"Oh I knowwwww! But why can\'t I have a bit of fun now and then?" She starts to kick her leg up and down playfully.');
    scene.text('Her carefree attitude is very interesting to you. You decide to ask her what she did before she was a model.');
    scene.text('"Before? Oh, I used to work for an escort service."');
    if ((!((s as any).anastasiasex ?? 0))) {
      scene.actions([
        { label: '"Think you could hook me up as an escort?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"An escort service?" you ask in surprise. "They still in business? I\'d love it if you gave me a recommendation there."');
    scene.text('"Hmmmmmmmm… Probably not, I don\'t work there anymore and they\'re kind of annoyed that I left. Especially because they keep seeing me in magazines. They know they really could have jacked up the price with me!"');
    scene.text('"Oh." You twist your mouth in disappointment.');
    scene.text('"Buuuut…"');
    scene.actions([
      { label: '???', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
    scene.text('Jeff leans in conspiratorily to whisper to you.');
    scene.text('"If you really want to give escorting a go… well… you know how you\'ve seen Anastasia doing <i>mmhmm-mmm-mmm-mhmmmm?</i>" She hums, wiggling her eyebrows at you in some kind of knowing look.');
    if (((s as any).anastasia ?? 0)?.['status'] < 1) {
      scene.text('"Who?" you ask in utter confusion of who she\'s talking about.');
      scene.text('"Oh you haven\'t met her yet? Go-lly, you need to spend more time slacking off and talking to other chicks like me. Oh well, once you meet her, just go talk to her and you\'ll figure it out after a while."');
      scene.actions([
        { label: '"I-,"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"I-," you try to respond before Jeff suddenly jumps up.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get paid! Bye <<$model[...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and then runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).anastasia ?? 0)?.['status'] < 4) {
        scene.text('"No…?" You feel very confused and don\'t really know what she\'s trying to get at.');
        scene.text('"Oh!" Jeff squeaks in surprise. "You haven\'t caught her yet? You must not be looking very hard! Oh well, you\'ll catch her eventually. Anyways, just try to talk to her and you\'ll understand."');
        scene.actions([
          { label: '"I-,"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"I-," you try to respond before Jeff suddenly jumps up.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get paid! Bye <<$model[...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and then runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"… you mean how she\'s sometimes fucking guys in the studio?" you whisper back.');
        scene.text('"Yup! Exactly! If you want to give escorting a go, try talk to her. I\'m sure you\'ll figure it out eventually."');
        scene.actions([
          { label: '"Anastasia is a hooker??"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/5.jpg');
    scene.text('"Oh yeah, hardcore. But you didn\'t hear it from me!"');
    scene.text('Jeff winks at you.');
    scene.actions([
      { label: 'Thanks Jeff!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Thanks for the advice Jeff!"');
    scene.text('"Nooooo problem!" she says before jumping out of her seat.');
    // TODO-QSP: dynamic text: "Anyways, gotta run! Got dirty pics to take and money to get for it! Bye <<$mode...
    scene.text(`"Anyways, gotta run! Got dirty pics to take and money to get for it! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and then runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"An… escort service…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"An… escort service…?" you ask tentatively.');
    scene.text('"Mhmmm! I needed some money to pay for my university tuition so I did some part time escorting."');
    scene.text('"So you would…"');
    scene.text('"Let old men use my innocent, nubile, teen body to fulfil their sexual fantasies for money? Sure! Sometimes they there weren\'t very nice though," she says putting on a pouty face. "It could be hard sometimes because of that, but I was a big girl so I powered through! Anyways, that\'s why I switched to modelling after a little while. They\'re much nicer here!"');
    scene.actions([
      { label: 'That\'s… good?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Yup! Being a model is a lot more fun."');
    scene.text('"What is it you said you were studying in university?"');
    scene.text('"Economy and management!" she says proudly.');
    scene.text('<i>This airhead? Economy and management?!</i>');
    // TODO-QSP: dynamic text: "Well, I guess I should go now. Gotta get paid! Bye <<$model['nickname']>>!" she...
    scene.text(`"Well, I guess I should go now. Gotta get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
      { label: '"An escort service?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"An escort service??" you ask in surprise.');
    scene.text('"Mhmmm! I needed some money to pay for my university tuition so I did some part time escorting."');
    scene.text('"So you would have sex with people for money?"');
    scene.text('"Yup! I\'d let them fulfil their every sexual fantasy! For some reason a lot of them liked this position," she says, putting her legs up in the air and flashing her pussy at you. "It paid the bills really well and even let me get a nice apartment in the residential area after I paid off my tuition for that year. Sometimes they weren\'t very nice though…" she says putting on a pouty face. "It could be hard sometimes because of that, but I was a big girl so I powered through! Anyways, that\'s why I switched to modelling after a little while. They\'re much nicer here!"');
    scene.actions([
      { label: 'That\'s… good?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/8.jpg');
    scene.text('"Yup! Being a model is a lot more fun."');
    scene.text('"What is it you said you were studying in university?"');
    scene.text('"Economy and management!" she says proudly.');
    scene.text('<i>This airhead? Economy and management?!</i>');
    // TODO-QSP: dynamic text: "Well, I guess I should go now. Gotta get paid! Bye <<$model['nickname']>>!" she...
    scene.text(`"Well, I guess I should go now. Gotta get paid! Bye ${((s as any).model ?? 0)?.['nickname']}!" she says and runs off.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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

function enterJeff_3(s: GameState, scene: SceneBuilder): void {
  ((s as any).jeff ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  ((s as any).jeff ?? {})['grope'] = (((s as any).jeff ?? {})['grope'] ?? 0) + (1);
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/grope.jpg');
  scene.text('While walking through the studio, you suddenly feel someone\'s arms wrap around your waist and two soft breasts press into your back.');
  scene.text('Before you can say anything you jump in surprise as you feel the person\'s hands fly up your body and slap against your breasts to give them a firm squeeze.');
  scene.text('"Hiiiii cutie!" you hear a voice squeak out.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Oh-! Hi!!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
    scene.text('A bit startled, you turn around to see Jeff\'s cheerful face.');
    // TODO-QSP: dynamic text: "<<$model['nickname']>>! Hang out with me!"
    scene.text(`"${((s as any).model ?? 0)?.['nickname']}! Hang out with me!"`);
    scene.actions([
      { label: '"Busy right now"', handler: (st: GameState) => {
    scene.text('"Hey Jeff. Listen, I\'m a little busy right now, can we do this later?"');
    scene.text('"Sure! Sure! Catch you later cutie!" she says, changing her tune immediately. "Gotta work to earn! Gotta earn to eat! Gotta eat to live! Have fun!" she says before startling you again with a firm squeeze of your ass and skipping off.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: '"Sure"', handler: (st: GameState) => {
    scene.text('"Sure Jeff, I\'ve got a minute."');
    scene.text('"What\'cha want to talk about???" she asks.');
    scene.text('Wait, isn\'t she the one who wanted to talk in the first place?');
    scene.actions([
      { label: 'Chat', goto: ['model_jeff1', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
  if (((s as any).jeff ?? 0)?.['model_exp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask for modelling advice', handler: (st: GameState) => {
    ((s as any).jeff ?? {})['model_exp'] = ((s as any).daystart ?? 0);
    qspCall(s, 'exp_gain', 'mdlng', 1);
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/9.jpg');
    scene.text('"How to be a better model? Oh that\'s easy! Just have fun!" she says.');
    scene.text('<i>Typical answer from her… Couldn\'t have expected more I guess…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/10.jpg');
    scene.text('"Oh, and also, don\'t forget to get sexy with it! They love it when cute girls like us… <i>mmm-mmm-!</i> act like… <i>pfft-!</i> dirty sluts!" It seems like she\'s legitimately holding back laughter.');
    scene.text('<i>I guess she finds it funny…? Weird…</i>');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_jeff1', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).jeff ?? 0)?.['grope'] > 3) {
    scene.actions([
      { label: 'Ask her to stop groping you', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/12.jpg');
    scene.text('"Hey Jeff… You know how whenever you see me you come up behind me and grab my breasts?"');
    scene.text('"Yeah?" she says, smiling and completely oblivious to your awkward tone.');
    scene.text('"Yeah… Could you <i>not</i> do that? It makes me kind of uncomfortable…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/13.jpg');
    scene.text('She laughs and says, "Of course not silly! Boobies are meant to be grabbed!" she says kneading her own to make her point.');
    scene.text('You realize with a sinking feeling that you probably can\'t convince her…');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_jeff1', 'jeff_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going I\'ll see you later okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Chat', handler: (st: GameState) => {
    ((s as any).jeff ?? {})['convo'] = Math.floor(Math.random() * 5) + 1;
    if (((s as any).jeff ?? 0)?.['convo'] === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/15.jpg');
      scene.text('"So Jeff, have you seen any good movies lately?"');
      scene.text('"Oh no! I don\'t go to the movies. I hate them! They\'re so loud and unpleasant! My poor ears can\'t handle them!" she whines while putting her hands over her ears even though it is perfectly quiet right now.');
      ((s as any).jeff ?? {})['movies'] = 1;
    } else {
      if (((s as any).jeff ?? 0)?.['convo'] === 2) {
        scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/16.jpg');
        scene.text('"Hey Jeff, do you know any good places to eat around here?"');
        scene.text('"Hmmmm nooooo, not reaaaally. I mostly eat at the university\'s cafeteria. They won\'t let you in unless you\'re a student though."');
        scene.text('<i>Well, enrolling in a university just for food doesn\'t seem like a viable option…</i>');
      } else {
        if (((s as any).jeff ?? 0)?.['convo'] === 3) {
          scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/9.jpg');
          scene.text('"Hey Jeff, how do keep your modelling figure while you\'re going to school and working here at the same time?"');
          scene.text('"Cupcakes!"');
          scene.actions([
            { label: '"Excuse me…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/17.jpg');
    scene.text('"And candy! And chocolate! And-"');
    scene.text('"Wait Jeff! What are you talking about? You eat cupcakes and chocolate to maintain your figure??"');
    scene.text('"Hmm?? I thought you were asking me what my favorite things to eat are?"');
    scene.text('"…"');
    scene.actions([
      { label: 'Keep chatting', goto: ['model_jeff1', 'jeff_chat'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).jeff ?? 0)?.['convo'] === 4) {
            scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/14.jpg');
            scene.text('"So what do you do for fun Jeff?"');
            scene.text('"I like to dancing at the local nightclub. They won\'t let you in unless you\'re wearing the right kind of clothing and makeup, but you\'re a model so getting that stuff should be easy. You should come with me sometime!"');
            scene.text('"Haha! Okay, maybe I will!"');
            scene.text('"It\'ll be fun! The bartenders there are really nice! They always give me free shots when I show them my titties!"');
            scene.text('"…"');
            if (((s as any).jeff ?? 0)?.['movies'] === 1) {
              scene.text('<i>Wait, didn\'t she say that she hates going to the movies because they\'re loud? How can she go to a nightclub with pounding music then???</i>');
            }
          } else {
            if (((s as any).jeff ?? 0)?.['convo'] === 5) {
              scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/18.jpg');
              scene.text('"Say… Jeff… What kind of grades are you getting at the university?"');
              scene.text('"My grades?" She tilts her head curiously. "I have a 4.9 average. Why do you ask?"');
              scene.text('Your jaw drops as you hear her near perfect grading scores. She continues to stare at you, wondering why you\'re acting so strange. You only snap out of it when you have to slap her hands away for honking your boobs.');
              scene.text('"Oh! So these <i>are</i> your reset buttons!"');
              scene.actions([
                { label: 'Keep chatting', goto: ['model_jeff1', 'jeff_chat'] },
              ]);
            }
          }
        }
      }
    }
  } },
    { label: 'Talk about sex', goto: ['model_jeff1', 'jeff_sex_talk'] },
  ]);
  scene.build();
}

function enterJeffSexTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
  scene.text('"Oooooh! A bit of girl talk? Sure thing! Whatcha wanna talk about?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going I\'ll see you later okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about something else', goto: ['model_jeff1', 'jeff_chat'] },
    { label: '"What\'s your favorite position?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/13.jpg');
    scene.text('"Favorite position? Hmmm… Not sure I have one. I don\'t really mind whatever way he wants to do it. I like having my boobies grabbed but you can do that from pretty much any position. Doggy, starfish, cowgirl, sandwich, Eiffel Tower, reverse cowgirl-"');
    scene.text('She goes on continuing to name positions for a while.');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"What\'s your favorite sexual experience?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
    scene.text('"Definitely the time I fucked my bio professor."');
    scene.text('"You fucked your professor?"');
    scene.text('"Oh yeah, I fuck any professor I think I can get away with. Really easy way to bump up your grades. Older guys always have their specific fetishes and my bio professor has a bit of an oral fixation with nipples. The first time we hooked up, I came three times before he even put it in me! That man has a mouth that was <i>made</i> to suck on titties."');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"Do you have a boyfriend?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
    scene.text('"Boyfriend? Nah, I\'m too young to get tied down by a man. Not literally though. That used to happen a lot."');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"Do you like girls?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/11.jpg');
    scene.text('"Like? Or \'like\' like? Or like in bed? Hmm. I guess I\'d say, yes, no I swing both ways, and yes! Girls are fun more fun than guys, but only a dick can satisfy that urge you get for a good pounding, but guys don\'t have boobs. And boobs are the best part about girls!"');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: '"What\'s your sex life at home like?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/11.jpg');
    scene.text('"Well, I\'m still at uni so there\'s definitely a lot of boys around campus but I never bring anybody home cause I don\'t want them to know where I live. I try to hook up with strangers at the nightclub instead! It\'s always really fun trying to sneak out the morning after. I wonder if when they wake up and can\'t find a trace of me that they think they might have fucked a ghost!"');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: 'How do you feel about blowjobs?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/21.jpg');
    scene.text('"I don\'t mind giving head. Blowjobs are fine. I prefer getting eaten out though. That\'s why any time a boy asks for a blowjob I ask him if he wants to 69 instead. Even better are 69\'s with girls though. Ever tried it before?" She asks her question innocently but her eyes twinkle mischeviously at you.');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
    { label: 'Have you ever been in an orgy?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/20.jpg');
    scene.text('"A couple times. I was at this party once and some of the girls were playing strip beer pong with the guys. One of the girls added on a blowjob as an extra bet and a lot of the other guys started getting real handsie after she lost. Devolved pretty quickly from there. I don\'t know if I like it all that much though. It gets annoying when you\'re bouncing on someone\'s cock on the sofa and when you turn around you realize he\'s been grabbing someone else\'s tits instead of yours. The time everyone started fucking in the hot tub was more fun."');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffSexAdvice(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/22.jpg');
  scene.text('"Oh ho ho, looking to impress somebody?" Well, what do you need help with?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"Hey Jeff, I gotta get going I\'ll see you later okay?"');
    scene.text('"Okay! Okay! See you later hot stuff!" she says, giving you a big hug so your breasts mush together before skipping off on her own.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: 'Talk about something else', goto: ['model_jeff1', 'jeff_chat'] },
    { label: 'Advice about blowjobs', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/23.jpg');
    scene.text('"Huhh? You want advice about giving head? What\'s so hard to understand? You put it in your mouth, you suck it like a lollipop, and swallow the cream when it comes out at the end. Next!"');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/7.jpg');
    scene.text('"What, regular old pussy pounding? If you\'re looking for advice about that, how about you try mixing up the positions? Ever tried this one?" she asks as she puts her legs together and puts them up in the air. "I love this one because you can squeeze your legs and make your pussy tighten up on his dick. It\'s so funny watching them try not to cum! Although it\'s less funny if they actually do and you haven\'t gotten off yet…"');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about anal', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/23.jpg');
    scene.text('"Anal? Ugh, I hate anal. It\'s just so uncomfortable and you need to have lube and all that. Ew. I avoid it if I can help it. I\'ll basically only allow it if there\'s more than two guys. And really I\'m only doing it to be polite. If there\'s three dicks and three holes but you won\'t let them use one, someone\'s going to feel pretty hurt only getting a handjob while the other two get sucked and fucked."');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_advice'] },
    ]);
  } },
    { label: 'Advice about group sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/18.jpg');
    scene.text('"Group sex? You mean like gangbangs and stuff? Well I don\'t do it too much recreationally but back when I was still escorting, the dirty old guys loved it so it would be semi regular. Best advice I can give is just to try relax as much as possible and let them do their thing on you. There could be like, five dicks in or around you! That\'s too many directions. Just relax your body, let them lead. They\'ll end up fucking you in whatever direction they want, no need for you to focus on anything but enjoyment. Oh, and put someone\'s hands on your titties! Makes them more focused about what they\'re doing."');
    scene.actions([
      { label: 'Continue', goto: ['model_jeff1', 'jeff_sex_advice'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJeffModelling(s: GameState, scene: SceneBuilder): void {
  ((s as any).jeff ?? {})['busy_cooldown_day'] = ((s as any).daystart ?? 0);
  ((s as any).jeff ?? {})['busy_cooldown'] = ((s as any).hour ?? 0) + 2;
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You\'re looking for Jeff when you hear her voice coming from one of the sets.');
  ((s as any).jeff ?? {})['status'] = Math.floor(Math.random() * 3) + 3;
  ((s as any).jeff ?? {})['model'] = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).jeff ?? 0)?.['model'] === 1) {
      scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy.jpg');
      scene.text('"Whooo! Yipee!"');
      scene.text('You find her in the middle of a photoshoot and she\'s jumping up and down on the bed kicking her legs and striking poses mid air.');
      scene.text('The photographer seems really excited saying, "Yes! I love that Jeff! Do you think you can do that again but get your leg higher so we can get a better look at your pussy?"');
      scene.text('"Sure thing boss! <i>Hyaaa!<i/>"');
      scene.text('<i>I guess she\'s busy modelling right now. I\'ll come find her again later.</i>');
      scene.actions([
        { label: 'Leave', goto: ['foto', 'studio'] },
      ]);
    } else {
      if (((s as any).jeff ?? 0)?.['model'] === 2) {
        scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy2.jpg');
        scene.text('You find her in the middle of a shoot, the photographers playing with the lighting around her.');
        scene.text('She looks pretty bored but you can\'t interrupt now even if they\'re just doing lighting stuff and decide to come back later.');
        scene.actions([
          { label: 'Leave', goto: ['foto', 'studio'] },
        ]);
      } else {
        if (((s as any).jeff ?? 0)?.['model'] === 3) {
          scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/busy3.jpg');
          scene.text('You find her in the middle of a photoshoot bantering with the photographers.');
          scene.text('"God, I wish I could just go clubbing like this sometimes. I\'d get arrested if I tried but it would be the easiest pickups in the world! Could you imagine? Just spread my legs like this and be like, \'Hey bebeee! U lik sum fuk?\' I\'d be in a cab to his place in 2 minutes or the bathroom in 1, getting my brains fucked out."');
          scene.text('The photographers laugh, taking pictures of her even while she goofs off and you decide not to interrupt the shoot.');
          scene.actions([
            { label: 'Leave', goto: ['foto', 'studio'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'jeff_1':
      enterJeff_1(s, scene);
      break;
    case 'jeff_2':
      enterJeff_2(s, scene);
      break;
    case 'jeff_3':
      enterJeff_3(s, scene);
      break;
    case 'jeff_chat':
      enterJeffChat(s, scene);
      break;
    case 'jeff_sex_talk':
      enterJeffSexTalk(s, scene);
      break;
    case 'jeff_sex_advice':
      enterJeffSexAdvice(s, scene);
      break;
    case 'jeff_modelling':
      enterJeffModelling(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const model_jeff1: LocationDef = {
  name: 'model_jeff1',
  title: 'Walking around the studio, you suddenly stop when you see a ',
  region: 'other',
  enter: enter,
};
