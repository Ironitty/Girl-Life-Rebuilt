import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter1stDocumentary(s: GameState, scene: SceneBuilder): void {
  (s as any).foto['documentary'] = 0;
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('You step out of the room and almost run head first into one of the managers.');
  scene.text('"Woah!" you say, jumping back. "What are you doing?"');
  // TODO-QSP: dynamic text: "Oh <<$model['firstname']>>, glad I caught you before you wandered off somewhere...
  scene.text(`"Oh ${((s as any).model ?? 0)?.['firstname']}, glad I caught you before you wandered off somewhere else in the studio. I was just going to see if anyone else showed up today. We're looking for volunteers to participate in some interviews for a documentary."`);
  scene.text('"Documentary?" you ask. "What about?"');
  scene.text('"There\'s some people here today who are making a film about models, their lives, and about working here. They want to capture girls working here in their usual working environment so you wouldn\'t be dressing up or anything, just interviewed as in the studio approved dress code."');
  scene.text('<i>You mean naked…</i> you think to yourself.');
  scene.text('"They\'re paying the equivalent of a two hour nude shoot for every model that participates. Do you want in?"');
  if (((s as any).modelfoto ?? 0)?.['nip'] < 1) {
    scene.actions([
      { label: 'No way! I\'ve never been naked on camera before!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"No way! I\'ve never been naked on camera before!"');
    scene.text('"Oh, yeah that\'s right. Sure you don\'t want this to be your first time?"');
    scene.text('"They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. It could give your popularity as a model a big boost."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 45) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      } else {
        if (((s as any).pcs_inhib ?? 0) < 60) {
          qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
        } else {
          (s as any).will_cost = 0;
        }
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check."');
    scene.text('With that, he pays you no more mind and ducks past into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If it\'s really that good for my profile…"');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks, not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehh, no thanks. The pay sounds nice, but I\'m just not interested."');
    scene.text('"You sure? They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. It could give your popularity as a model a big boost."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 45) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      } else {
        if (((s as any).pcs_inhib ?? 0) < 60) {
          qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
        } else {
          (s as any).will_cost = 0;
        }
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check. Not like it\'s the agency is the one paying anything," he laughs, ducking into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If it\'s really that good for my profile…"');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
    ]);
  } },
    { label: 'No thanks, I\'m here to model', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehh, no thanks. I\'m here to model, not do interviews."');
    scene.text('"You sure? They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. Exposure is important for a model too."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 45) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      } else {
        if (((s as any).pcs_inhib ?? 0) < 60) {
          qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
        } else {
          (s as any).will_cost = 0;
        }
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check. Not like it\'s the agency is the one paying anything," he laughs, ducking into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If you really think it\'ll help my career."');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
    ]);
  } },
    { label: 'Sure, I\'ll take part', handler: (st: GameState) => {
    (s as any).specialjob7 = 0;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure, I\'ll take part," you say.');
    // TODO-QSP: dynamic text: "Alright, just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright, just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day."`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDocumentary_1(s: GameState, scene: SceneBuilder): void {
  (s as any).foto['documentary_timer'] = ((s as any).modelfoto ?? {})?.['shoots'] + 10;
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You head over to where you were directed and see a group of people standing around several video cameras set up with lights shining on an empty set.');
  scene.text('Walking over to them you say, "Hi, I\'m one of the models who volunteered to be interviewed. Is this the right place?"');
  scene.text('"Sure is," a woman with a notepad says. "We just got done with the last girl, why don\'t you just jump in now."');
  scene.actions([
    { label: 'Stand on set', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 2);
    (s as any).foto_documentary['question_1'] = ((s as any).model ?? 0)?.['type'];
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('They put you in the middle of the set and spend a few minutes getting the lighting right and fiddling with camera settings. Then the woman who spoke to you before calls out to you.');
    scene.text('"Okay, we\'re all set. Ready?"');
    scene.text('You nod.');
    scene.text('"Okay, first question then. What\'s your name, how old are you, and what is your job?"');
    scene.actions([
      { label: 'I\'m <<$model[\'firstname\']>>', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    if (((s as any).foto_documentary ?? 0)?.['question_1'] === 'artistic nude'  ||  ((s as any).foto_documentary ?? 0)?.['question_1'] === 'erotic') {
      // TODO-QSP: dynamic text: "My name is <<$model['firstname']>>. I'm <<model['age']>> years old, and I'm an ...
      scene.text(`"My name is ${((s as any).model ?? 0)?.['firstname']}. I'm ${((s as any).model ?? 0)?.['age']} years old, and I'm an ${((s as any).foto_documentary ?? 0)?.['question_1']} model at Aphrodite photography."`);
    } else {
      // TODO-QSP: dynamic text: "My name is <<$model['firstname']>>. I'm <<model['age']>> years old, and I'm a '...
      scene.text(`"My name is ${((s as any).model ?? 0)?.['firstname']}. I'm ${((s as any).model ?? 0)?.['age']} years old, and I'm a ' + iif($foto_documentary['question_1'] = ', ', '${((s as any).foto_documentary ?? 0)?.['question_1']} ') + 'model at Aphrodite photography."`);
    }
    qspCall(s, 'foto_model_documentary', 'documentary_2');
  } },
      { label: 'I\'m <<$model[\'nickname\']>>', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    if (((s as any).foto_documentary ?? 0)?.['question_1'] === 'artistic nude'  ||  ((s as any).foto_documentary ?? 0)?.['question_1'] === 'erotic') {
      // TODO-QSP: dynamic text: "My name is <<$model['firstname']>>, but my friends call me <<$model['nickname']...
      scene.text(`"My name is ${((s as any).model ?? 0)?.['firstname']}, but my friends call me ${((s as any).model ?? 0)?.['nickname']}. I'm ${((s as any).model ?? 0)?.['age']} years old, and I'm an ${((s as any).foto_documentary ?? 0)?.['question_1']} model at Aphrodite photography."`);
    } else {
      // TODO-QSP: dynamic text: "My name is <<$model['firstname']>>, but my friends call me <<$model['nickname']...
      scene.text(`"My name is ${((s as any).model ?? 0)?.['firstname']}, but my friends call me ${((s as any).model ?? 0)?.['nickname']}. I'm ${((s as any).model ?? 0)?.['age']} years old, and I'm a ' + iif($foto_documentary['question_1'] = ', ', '${((s as any).foto_documentary ?? 0)?.['question_1']} ') + 'model at Aphrodite photography."`);
    }
    qspCall(s, 'foto_model_documentary', 'documentary_2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDocumentary_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"Why did you decide to become a model?"');
  if (((s as any).pcs_inhib ?? 0) < 20  ||  ((s as any).studio_inhib ?? 0) > 0) {
    scene.actions([
      { label: 'To build confidence', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'build_confidence';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    if (((s as any).pcs_inhib ?? 0) < 20) {
      scene.text('"I wanted to build up my confidence," you explain shyly. "I\'m not very confident in my… my body… I hoped that modelling would make me more…"');
      scene.text('"Confident?" the interviewer suggests.');
      scene.text('"Uhh, yeah," you blush in return.');
    } else {
      scene.text('"I wanted to build up my confidence," you explain. "When I started here, I wasn\'t very comfortable with showing off my body. I might even go so far to say I was shy about it. And I thought modelling might be a way to push myself and my limits."');
    }
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    scene.actions([
      { label: 'It turns me on', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'exhibitionism';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"Because it turns me on!"');
    scene.text('The interviewer pauses for a moment.');
    scene.text('"Because it… turns you on?" she asks, seemingly a little surprised at your response.');
    scene.text('"Yeah," you grin. "Knowing that other people are out there looking at my naked body is just… <i>exciting!</i> They could be jerking off to pictures of me right now. I get wet just thinking about it!"');
    scene.text('"Ahh. I see." She clears her throat.');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    ]);
  }
  scene.actions([
    { label: 'I thought it seemed fun', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'fun';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I just thought it seemed like fun," you giggle. "You know, dressing up in clothes, striking poses, people taking pictures. It sounded interesting, so I thought I\'d give it a try."');
    scene.text('"No big special reason, just wanted to enjoy yourself?"');
    scene.text('"Pretty much, yeah."');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    { label: 'I\'ve always wanted to be a model', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'career';
    scene.img('images/locations/city/citycenter/photo/special/interview/9.mp4');
    scene.text('"I think I actually always wanted to be a model," you say. "It seemed… glamorous. You see supermodels in the magazines you read when you\'re growing up and you see how beautiful they look and the clothes they\'re wearing and you just kinda naturally wish you were them. Then you grow up a little more and you see they\'re wealthy, and they\'re famous, and that they\'ve practically got it all! Who wouldn\'t want to be one?"');
    scene.text('"So you would say that this was sort of your dream job?"');
    scene.text('"Yeah, I\'d say that."');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    { label: 'I just wanted some extra cash', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'extra_cash';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"To be honest, I\'m really just here to make some money," you say. "It doesn\'t take up too much time per week and the pay\'s pretty good, so it\'s a pretty easy way of getting some extra cash in your pocket."');
    scene.text('"Ahh, so you aren\'t that passionate about modelling, it\'s just something you do to get by, is that right?"');
    scene.text('"Well, more like I wanted to be able to buy nice things."');
    scene.text('You laugh and the interviewer laughs with you.');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    { label: 'I was desperate and needed money', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'desperation';
    scene.img('images/locations/city/citycenter/photo/special/interview/11.mp4');
    scene.text('"To be honest, I was really desperate and needed the money," you say. "I was seriously in need at the time so it didn\'t really matter what I did, I just needed fast cash. I heard about this place and that they paid well depending on the kind of work you did so I signed up."');
    scene.text('"Ahh, so you aren\'t that passionate about modelling, it\'s just something you do to get by, is that right?"');
    scene.text('"Yeah, pretty much that."');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
    { label: 'I love attention', handler: (st: GameState) => {
    (s as any).foto_documentary['question_2'] = 'attention';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I love the attention!" you smile. "I like it when people notice me. Maybe I\'m a little narcissistic but it\'s thrilling for me to see my own face on the cover of a magazine or to hear people talking about me. I just like being seen."');
    scene.text('"So you became a model because you\'re an attention seeker?"');
    scene.text('"Exactly!"');
    qspCall(s, 'foto_model_documentary', 'documentary_3');
  } },
  ]);
  scene.build();
}

function enterDocumentary_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"So, would you say that this is something you\'re actively pursuing as a career? Why or why not?"');
  scene.actions([
    { label: 'This is just temporary', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'temporary';
    scene.img('images/locations/city/citycenter/photo/special/interview/11.mp4');
    scene.text('"I don\'t think so," you say. "It\'s been good working here but I don\'t think I could ever make a career out of it. It\'s just not what I want out of life, you know?"');
    scene.text('The interviewer nods understandingly.');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
    { label: 'I want to be the number one model in the city', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'number_one_model';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"I want to be the number one model in the city," you say confidently.');
    scene.text('"Wow! High reaching goals huh? Just about the prestige or is personal achievement?"');
    scene.actions([
      { label: 'Prestige', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3.2'] = 'prestige';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Prestige. I want this to be the thing that I\'m known for decades from now."');
    scene.text('"You want your own Wankepidia page?" the interviewer smiles at you.');
    scene.text('"Yeah," you smile back. "That\'s exactly what I want."');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
      { label: 'Personal reasons', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3.2'] = 'personal_reasons';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"Personal I suppose. I guess I just want to prove it to myself that I can do it. If I can become the number one model in the city, maybe I can do anything."');
    scene.text('The interviewer nods understandingly.');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
    ]);
  } },
    { label: 'No, I hate dieting', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'hate_diet';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"No," you say. "I hate dieting too much."');
    scene.text('The interviewer lets out a bark of laugher.');
    scene.text('"Calorie counting isn\'t for you?"');
    scene.actions([
      { label: 'No!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"No!" you laugh with her. "I don\'t know how some of these other girls do it. They work out regularly, eat only celery and yogurt to keep flat tummies, and all I can think about is the next time I can eat something with melted cheese on it!"');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
    ]);
  } },
    { label: 'As long as it pays the bills', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'pays_the_bills';
    scene.img('images/locations/city/citycenter/photo/special/interview/7.mp4');
    scene.text('"I wouldn\'t say no I suppose. I\'ll keep working here as long as it keeps paying the bills or I find something better I guess."');
    scene.text('The interviewer nods understandingly.');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
    { label: 'Yes! I love this job!', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'love_modelling';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"Yes!" you say. "I love this job! I could do this for the rest of my life! Or as long as I\'m young and pretty and they\'ll let me stay," you laugh.');
    scene.text('The interviewer smiles at your genuine excitement.');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
    { label: 'I\'m not sure yet', handler: (st: GameState) => {
    (s as any).foto_documentary['question_3'] = 'not_sure';
    scene.img('images/locations/city/citycenter/photo/special/interview/2.mp4');
    scene.text('"I don\'t know…" you say, rubbing your chin. "It\'s not bad working here, but I don\'t know if it\'s something I want to keep doing for the rest of my life. I guess I\'m still thinking about it."');
    scene.text('The interviewer nods understandingly.');
    qspCall(s, 'foto_model_documentary', 'documentary_4');
  } },
  ]);
  scene.build();
}

function enterDocumentary_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"How confident would you say you are in your body? Has your confidence changed since you started working here?"');
  if (((s as any).pcs_inhib ?? 0) < 40) {
    scene.actions([
      { label: 'I\'m actually really shy', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'shy';
    scene.img('images/locations/city/citycenter/photo/special/interview/4.mp4');
    scene.text('"I\'m actually really quite shy," you say. "I get easily embarrassed by showing my body off."');
    scene.text('"But you\'re a model! You\'re talking to us completely naked without any problems."');
    scene.text('"I wouldn\'t say without <i>any</i> problems," you giggle nervously, face turning red. "I\'m good at willpowering my way through things that are embarrassing. I can deal with it in the moment but it\'s still really embarrassing."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
    ]);
  }
  scene.actions([
    { label: 'It used to be worse but I\'m still a little shy', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'little_shy';
    scene.img('images/locations/city/citycenter/photo/special/interview/3.mp4');
    scene.text('"It used to be a lot worse," you start off. "I\'m definitely not as shy about my body as I used to be but it can still be embarrassing from time to time. Working here has certainly changed the way I think about myself though."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
    { label: 'I used to be shy but now I\'m not', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'formerly_shy';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"I used to be shy, but I\'ve moved past that now," you smile to yourself. "At the beginning I would cringe when the camera came out. And the idea of anybody seeing my boobs was hard to deal with. I used to put my hands over them when I came out of the locker rooms. It\'s almost weird to think back on those times. I can\'t imagine being embarrassed by somebody looking at me now."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
    { label: 'I haven\'t been shy since I was little', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'childhood_shy';
    scene.img('images/locations/city/citycenter/photo/special/interview/3.mp4');
    scene.text('"It\'s been a long time since I was shy," you say, thinking back. "I don\'t think I\'ve been embarrassed about the way that I look since I was a little girl, way before I started working here. By the time I was a teenager I was already comfortable in my own skin. Working here hasn\'t really changed that."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
    { label: 'I\'ve never been shy', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'never_shy';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I\'ve never been shy," you laugh. "Never really cared what anyone else thought of my body or the way I looked. I am who I\'ve always been and I love that about myself."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
    { label: 'I\'m fucking hot and I know it', handler: (st: GameState) => {
    (s as any).foto_documentary['question_4'] = 'fucking_hot';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"Look, I am fucking <i>hot</i> and I know it," you say. "I knew it before I was a model and I definitely know it now that I am one."');
    qspCall(s, 'foto_model_documentary', 'documentary_5');
  } },
  ]);
  scene.build();
}

function enterDocumentary_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"This actually leads into our next question. We understand that Aphrodite has a strict dress code policy here. How do you feel about it? Do you think it has helped you as a model?"');
  if (((s as any).studio_inhib ?? 0) > 0) {
    scene.actions([
      { label: 'I got used to it eventually', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'got_used_to_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I wasn\'t really comfortable with it when I first joined but I got used to it after a while," you say. "At this point it\'s just kind of automatic, I don\'t even really think about it anymore. I just come to work and get undressed."');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
      { label: 'I think it really helped me', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'helpful_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"I think it actually really helped," you say. "I was so shy when I started working here. I was embarrassed by the idea of people seeing my body, of being naked in front of others. But after a while, you\'re kind of forced to become accustomed to it. When I started to realize that people weren\'t staring and girls weren\'t judging me, my inhibitions began to fade away. And based on how the other models acted, I started to see that confidence was sexy. The dress code was a big part of that. Wear nothing but your own skin for hours on end and you\'ll be surprised how quickly you get comfortable with it."');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    ]);
  }
  scene.actions([
    { label: 'It sucks', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'dislike_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"It sucks!" you complain. "Having to be naked all the time is uncomfortable and weird. Why can\'t we just wear clothes like normal and change in and out of the stuff they want us to? I don\'t think it helps at all, just makes being around the studio more awkward."');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    { label: 'It\'s really embarrassing', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'embarrassing_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"It\'s really embarrassing," you say. "As I said before, I can be kind of shy about my body, so having to be naked all the time except when you\'re doing a shoot is really uncomfortable for me. Everything is on display all the time and when people talk to me I just want to cover up."');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    { label: 'I\'m not very comfortable with it', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'not_comfortable_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"I\'m not very comfortable with it," you start. "First of all, everything is just on display all the time except when you\'re doing clothing shoots. So that by itself is a little discomforting. But also it\'s not physically very comfortable either. If you haven\'t noticed they keep it pretty cold in here. They said it has something to do with balancing temperature because of all the heat from the lights, but when I\'m just walking around the studio my nipples are always freezing."');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    { label: 'I don\'t really mind it', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'dont_mind_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"I don\'t really mind it," you say. "It is what it is. Other places have work uniforms, why not here?"');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    { label: 'I love it!', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'love_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I love it! Society cares so much about being \'proper\' and not being \'indecent\', but I don\'t feel that way about myself. I like my body and I like being naked. So having that as a work uniform here is great!"');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
    { label: 'I think it promotes camaraderie', handler: (st: GameState) => {
    (s as any).foto_documentary['question_5'] = 'comrade_dresscode';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I think it actually helps build camaraderie between the models," you say. "You know, whatever our background, wherever we came from, whatever reason we have for being here, we\'re all women at the end of the day. And being forced to be yourself—completely yourself without even a scrap of clothing to hide behind—really causes you to be genuine with each other. It\'s a sort of intimacy, but not like a sexual one. In some ways I feel like it created a sisterhood here. Like that one movie, except we would have a different name. \'The Sisterhood Without Pants,\' maybe," you laugh.');
    qspCall(s, 'foto_model_documentary', 'documentary_6');
  } },
  ]);
  scene.build();
}

function enterDocumentary_6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"Okay, now for some questions about your life outside the studio. What\'s a hobby of yours?"');
  scene.actions([
    { label: 'Reading', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'reading';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"I like to read. There\'s nothing more relaxing to me than a good book."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'Sports', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'sports';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I love sports!"');
    scene.text('"So you\'re an athletic girl?"');
    scene.text('"Oh yeah! I always feel better when my body is in motion. Nothing like working up a good sweat."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'Dancing', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'dancing';
    scene.img('images/locations/city/citycenter/photo/special/interview/5.mp4');
    scene.text('"I like to dance. It feels good when I let my body flow to music, whether choreographed or just on the spot."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'Martial arts', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'martial_arts';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"I do some martial arts. Something about it calms me, gives me purpose. Plus, it\'s always good for a girl like me to be able to fight, if you know what I mean," you smile wryly.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'I\'m a foodie', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'foodie';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"It\'s a little embarrassing being a model and all… but I\'m a real foodie," you say. "I love trying new and different kinds of food, seeing what unexpected combinations work surprisingly well together. That\'s what makes life worth living.');
    if (((s as any).foto_documentary ?? 0)?.['question_3'] === 'hate_diet') {
      scene.text('"I guess this must be why you hate dieting so much," the interviewer laughs.');
      scene.text('"Seriously!"');
    }
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'Going clubbing', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'clubbing';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I like going clubbing," you say. "Go out with the girls, maybe meet a guy, buy drinks and have good times! Best way to spend a Saturday night!"');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    { label: 'Having sex (clean answer)', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'sex_clean';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"Actually… one of my favorite things to do is have sex." The interviewer\'s mouth drops with a smile at the candid nature of your answer.');
    scene.text('You smile back. "It feels good, makes me feel sexy, and after a really good roll in the hay it leaves me with a spring my step. It\'s what I like the most in life, does that count as a hobby?"');
    scene.text('"Sure does," the interviewer replies. "Can\'t say I disagree with you either. Just curious though, do you prefer hook ups like with strangers? Or sex in a stable relationship like with a boyfriend?"');
    if (((s as any).husID ?? 0) !== '') {
      scene.actions([
        { label: 'With my husband', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"With my husband actually," you say. "I\'m married. Nothing is better than making love to him."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      ]);
    } else {
      if (((s as any).wifID ?? 0) !== '') {
        scene.actions([
          { label: 'With my wife', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"With my wife actually," you say. "I\'m married. Nothing is better than making love to her."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
        ]);
      }
    }
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'With <b>my</b> boyfriend', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"With my boyfriend," you say. "He just knows my body so well! Spending the time investing in a relationship is the only way to get that." She nods at your sage advice.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      ]);
    }
    scene.actions([
      { label: 'Hook ups', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Hook ups. I like meeting a guy and sleeping with him on the first date. It\'s fun seeing the differences between guys and what they\'re good at. Is that slutty?" you laugh.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'With <b>a</b> boyfriend', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/9.mp4');
    scene.text('"I would say… with a boyfriend. I\'m single for the moment, but spending the time to let someone get to know you and what turns you on really is the best. You\'ll never get that kind of satisfaction randomly sleeping around." She nods at your sage advice.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'Why not girlfriends?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Why not girlfriends?" you smile with a twinkle in your eye. "Who said I liked sleeping with men the most?"');
    scene.text('The interviewer meets your eyes and blushes deeply before clearing her throat and flipping to the next page of her clipboard.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'Group sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/4.mp4');
    scene.text('"My favorite is actually with multiple partners," you say shyly. The interviewer gives you a <i>very</i> interested look. "Let\'s just say that one set of body parts is not enough for me to feel satisfied…"');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    ]);
  } },
    { label: 'Having sex (slutty answer)', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'sex_slutty';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"Fucking!" you giggle. The interviewer pauses a moment.');
    scene.text('"Excuse me?"');
    scene.text('"Fucking! You know, sex. I <i>love</i> having sex. Just that feeling of a cock inside you is, mmph! Definitely my favorite hobby!"');
    scene.text('"Ah, okayyy," she replies. "And out of curiosity, do you prefer your sex in hook ups or in stable relationships like with a boyfriend?"');
    if (((s as any).husID ?? 0) !== '') {
      scene.actions([
        { label: 'With my husband', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"With my husband actually," you say. "I\'m married. I love getting fucked by him. He knows every centimeter of my body, nobody knows how to make me cum like he does."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      ]);
    } else {
      if (((s as any).wifID ?? 0) !== '') {
        scene.actions([
          { label: 'With my wife', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"With my wife actually," you say. "I\'m married. I love getting fucked by her. She knows every centimeter of my body, nobody knows how to make me cum like she does."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
        ]);
      }
    }
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'With <b>my</b> boyfriend', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"With my boyfriend," you say. "He just knows my body so well! I never feel better than I do after he fucks me."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      ]);
    }
    scene.actions([
      { label: 'Hook ups', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    // TODO-QSP: dynamic text: "Hook ups. I <i>always</i> fuck on the first date and I like having sex with new...
    scene.text(`"Hook ups. I <i>always</i> fuck on the first date and I like having sex with new people. It's almost like a game for me, seeing how many guys I can sleep with." you laugh. "Right now my record's at ${((s as any).guy ?? 0)+((s as any).temp ?? 0)}."`);
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'With <b>a</b> boyfriend', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I would say… with a boyfriend. I\'m single for the moment, which is a bit of a problem, but there\'s nothing better than getting fucked by a guy who knows every part of your body. Unfortunately, most guys don\'t have that information instinctively. It takes time for them to really learn how to make you cum."');
    scene.text('She nods with eyebrows raised, as if surprised by your answer.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'Why not girlfriends?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Why not girlfriends?" you smile with a twinkle in your eye. "I like eating pussy just as much as I like getting eaten."');
    scene.text('The interviewer blushes deeply, clearing her throat and flipping to the next page of her clipboard.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: 'Group sex', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"My favorite is actually group sex," you giggle. The interviewer\'s jaw drops.');
    scene.text('"It\'s more fun when I get to use more holes," you grin.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    ]);
  } },
    { label: 'Masturbating', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'masturbation_hobby';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate…');
    scene.actions([
      { label: '… in my room', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate in my room. Just me, my fingers, and plenty of orgasms." Her jaw drops.');
    scene.text('"What can I say?" you shrug. "It\'s… relaxing…"');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: '… with my dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate with my dildo. Just me, a rubber dick, and plenty of orgasms. Her jaw drops.');
    scene.text('"What can I say?" you shrug. "It\'s… relaxing…"');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: '… in the shower', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate in the shower. The combination of the steam and a good pulsing showerhead is a girl\'s best friend," you say with a smirk.');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: '… in the bath', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate in the tub. It can be hard to do but if you can get your hips underneath the faucet…" you bite your lip. "Well… let\'s just say it hits all the right spots…"');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
      { label: '… with my shower dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I actually really like masturbating," you giggle.');
    scene.text('"Sorry…?" The interviewer asks, eyes wide.');
    scene.text('"Masturbating! Honestly, my interests are pretty all over the place so I don\'t know if any of those really classify as hobbies, but the one thing I do all the time is masturbate with my shower dildo. Nice steamy room, hot water, a showerhead to use for vibrations, a nice rubber dick to fill me up, oh man. I could spend hours in there."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
    ]);
  } },
    { label: 'Nothing in particular', handler: (st: GameState) => {
    (s as any).foto_documentary['question_6'] = 'no_hobbies';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I… I don\'t actually have any hobbies in particular."');
    scene.text('"Really? No hobbies at all?"');
    scene.text('"Not really," you shrug. "I guess I just… get by at the moment."');
    qspCall(s, 'foto_model_documentary', 'documentary_7');
  } },
  ]);
  scene.build();
}

function enterDocumentary_7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"What is your ideal date?"');
  scene.actions([
    { label: 'A quiet night in', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'quiet_night';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"My ideal date is… a quiet night in. Nothing fancy, just a nice cooked meal or maybe some takeout, a bit of wine maybe, some cuddling on the couch, just time spent being comfortable and relaxed with another person. That kind of feeling, isn\'t that what romance is all about?"');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
    { label: 'Something fun with lots of activities', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'activity_based';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"My ideal date is something with a lot of activities involved. I really like having fun and having stuff to do, so… like playing games at a carnival, or a day at the beach, or going through a haunted house or an escape room type of thing. That\'s the kind of stuff I\'d want to do if somebody asked me out on a date."');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
    { label: 'Dinner and a movie', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'dinner_and_movie';
    scene.img('images/locations/city/citycenter/photo/special/interview/9.mp4');
    scene.text('"My ideal date is probably… dinner and a movie. It\'s a little cliche, but I like it. You know? A bit of time chatting and eating together and then some time to just hang out watching something, maybe holding hands during it. It gives us stuff to talk about too, you know?"');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
    { label: 'A long walk with scenery', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'long_walk';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"My ideal date is basically just a long walk. Somewhere nice like the park or along a lake, just someplace peaceful with beautiful scenery. We could talk quietly, hold hands while we walk, just <i>be</i> with each other."');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
    { label: 'Something thrilling', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'thrilling_date';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I would love to do something thrilling on a date. Like roller coaster rides at an amusement park or jetskiing on the lake or even skydiving out of a plane! I love experiencing that rush and being able to share that with another person only makes it that much more special."');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
    { label: 'A romantic evening that ends in sex', handler: (st: GameState) => {
    (s as any).foto_documentary['question_7'] = 'romantic_sex';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I think for me, my ideal date is a romantic evening that ends with great sex. The sex is a big part of it, sure, but without the build up it\'s nothing. A fancy restaurant in expensive clothing, wine and chocolates, starring at each other and taking in how beautiful the other person looks. All of these things just building, building, building our desire. And at the end of the night, when we\'re at our limit, that\'s when we let our inhibitions go. Hands get handsy, tongues get invasive, and every touch becomes passionate and expressive. And after we\'re done we can bask in the afterglow of the evening and in each other\'s presence," you smile.');
    scene.text('"<i>Just</i> those things?" the interviewer smiles back.');
    scene.text('"And… in the afterglow of our orgasms too," you admit.');
    qspCall(s, 'foto_model_documentary', 'documentary_8');
  } },
  ]);
  scene.build();
}

function enterDocumentary_8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"For our next question, do you have any guilty pleasures?"');
  scene.actions([
    { label: 'Eating things I shouldn\'t', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'junk_food';
    scene.img('images/locations/city/citycenter/photo/special/interview/3.mp4');
    scene.text('"My guilty pleasure is eating things that I really shouldn\'t be. Whether that be excessive amounts of chocolate or an extra scoop of ice cream or an entire bag of crisps, sometimes it\'s so tempting I can\'t help but give in. And I feel really bad about it after because I know I need to maintain my figure but it\'s <i>so</i> satisfying in the moment."');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    { label: 'Day drinking', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'day_drinking';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I have this bad habit where I like to drink during the day sometimes. Like, I know I shouldn\'t because it\'s probably messing up my liver and affecting the way I interact with people, but sometimes, I just need some alcohol to be able to kick back and relax. So I\'d say that\'s my guilty pleasure."');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    { label: 'Binge watching', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'binge_watching';
    scene.img('images/locations/city/citycenter/photo/special/interview/5.mp4');
    scene.text('"I\'d have to say my guilty pleasure is binge watching TV series. It\'s so bad because I\'ll just lose hours and hours of time but when that \'play next\' button is right there, I need to know what happens next! I lose whole weekends doing that!"');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    { label: 'Steamy romance novels', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'romance_novels';
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/4.mp4');
    scene.text('"I like reading romance novels," you confess. "The hot and steamy kind. They\'re distracting for me sometimes, but I find them very… exciting…"');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
      { label: 'Open', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I like reading sexy romance novels," you giggle. "I know they\'re not realistic and fantastical, but once I start I can\'t put it down until the climax." You add a wink to that last part.');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    ]);
  } },
    { label: 'Bad romcoms', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'bad_romcoms';
    scene.img('images/locations/city/citycenter/photo/special/interview/4.mp4');
    scene.text('"My guilty pleasure is bad romantic comedies. I know they\'re cheesy, I know that the problems could be solved if the characters just listened to each other, but I can\'t help myself. They\'re just so cute!"');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    { label: 'Social media', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'social_media';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"My guilty pleasure has to be social media. One minute I\'m saying I\'m just going to take a quick scroll through Twatter, next thing I know I\'ve been reading the feeds for an hour. It\'s a huge time sink and a huge problem for productivity."');
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
    { label: 'Sleeping in', handler: (st: GameState) => {
    (s as any).foto_documentary['question_8'] = 'sleeping_in';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    // TODO-QSP: dynamic text: "I'd say that my guilty pleasure is having a lie in. There's so much that needs ...
    scene.text(`"I'd say that my guilty pleasure is having a lie in. There's so much that needs to get done during the day, but sometimes I can't help but whack the off button on my alarm clock and curl back up under my covers, wake up at noon instead of ${((s as any).alarmVars ?? 0)?.['timerH']}. It feels good to sleep in, but I always regret it when I realize how much stuff I could have gotten done if I had just gotten up when I was supposed to."`);
    qspCall(s, 'foto_model_documentary', 'documentary_9');
  } },
  ]);
  scene.build();
}

function enterDocumentary_9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"What do you wear to bed?"');
  scene.actions([
    { label: 'Underwear', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'underwear_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"Just my usual underwear. Some panties and a bra. Maybe it\'s a little weird to wear a bra to bed, but it\'s just comfortable for me.');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'Panties', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'panties_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Just a pair of panties. I get hot at night so I don\'t wear PJ\'s but keeping my panties on keeps anything leaking out during the night and staining the sheets."');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'I sleep naked', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'naked_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"I sleep naked," you say. "Au naturel. Is there any better way to sleep than just your skin and your covers?"');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'Negligee', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'negligee_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I wear a negligee when I sleep. It\'s sexy, it\'s classy, and if I need to get up for anything (or anyone) I\'m still presentable."');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'A big t-shirt and panties', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'shirt_panties_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/8.mp4');
    scene.text('"Oh, just a big t-shirt and a pair of panties. My boobs have get cold so having an extra layer on under the covers is nice."');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'Just a big t-shirt', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'big_shirt_bed';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Just an oversized t-shirt usually. I have a favorite night shirt that I wear, it\'s soft and roomy and it\'s comfortable to sleep in."');
    scene.text('"Just that?"');
    scene.text('"Just that. Panties are too hot for my hips. I like to feel the breeze," you smirk.');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
    { label: 'Pajamas', handler: (st: GameState) => {
    (s as any).foto_documentary['question_9'] = 'pajamas';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Pajamas!" you say. "They\'re warm and cozy, I love cuddling up in my bed with PJ\'s on."');
    qspCall(s, 'foto_model_documentary', 'documentary_10');
  } },
  ]);
  scene.build();
}

function enterDocumentary_10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('"What\'s your ideal morning?"');
  scene.actions([
    { label: 'Early morning with exercise', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'exercise_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('"I like to get up early," you say. "There\'s just something motivating about getting an early start to the day. After that I do some exercises. Some yoga, some body weight exercises, maybe go for a run or something like that. Just something that starts off my day active and right. Then a nice hot shower and I\'m ready for the day."');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Early morning to do chores', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'chores_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/12.mp4');
    scene.text('"I like to get up early and do my chores."');
    scene.text('"Your ideal morning is doing chores?"');
    scene.text('"It\'s just a matter of maintaining structure and routine in my life. It keeps my life orderly. Making sure the laundry is pressed and my bed is made and the dishes are clean, it all puts my mind at ease. So I like doing it. And it gives me momentum to do everything else I need to accomplish later. By starting with chores, I make everything else a little easier."');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Early morning with a light breakfast', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'breakfast_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"Getting an early start is important to me. Making sure my body is ready for the day you know? So I like to get up early and have a light breakfast, some scrambled eggs or maybe a salad. Nothing too heavy that will weigh me down, just give me energy for the rest of morning."');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Anything involving coffee', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'coffee_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"My ideal morning is anything that involves coffee. You give me a cup of coffee when I wake up, I will marry you."');
    scene.text('The interviewer smiles as she writes something down in her notes and you get the feeling she\'s a kindred spirit in this regard.');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Anything involving coffee (slightly crude/slutty)', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'crude_coffee_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('"My ideal morning is anything that involves coffee. Seriously, I will suck you off if you bring me a cup of coffee in bed."');
    scene.text('The interviewer suppresses a smile as she writes something down with eyebrows upraised. You get the feeling she knows what you mean but is a bit surprised by your choice of words.');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Sleeping in followed by brunch', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'brunch_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/3.mp4');
    scene.text('"My ideal morning is one where I get to sleep in late, have a nice lazy morning, and then have brunch at the end of it. Like pancakes with jam or maybe an omelette or smoked salmon and cream cheese, oh! Or french toast and an egg quiche. If I could start every day like that I would be <i>sooooo</i> happy."');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
    { label: 'Wakeup sex', handler: (st: GameState) => {
    (s as any).foto_documentary['question_10'] = 'wakeup_sex_morning';
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('"My ideal morning starts with sex," you say. "Nothing to get your day going like a good orgasm right? If I wake up and somebody\'s balls deep in me, that day is already a good day."');
    scene.text('"Ahuh… Funny, someone else said something similar…" the interviewer says flipping back on her clipboard a few pages.');
    qspCall(s, 'foto_model_documentary', 'documentary_11');
  } },
  ]);
  scene.build();
}

function enterDocumentary_11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Early morning with exercise', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 1;
    scene.img('images/locations/city/citycenter/photo/special/interview/10.mp4');
    scene.text('');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: 'Early morning to do chores', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 2;
    scene.img('images/locations/city/citycenter/photo/special/interview/7.mp4');
    scene.text('"');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: 'Early morning with a light breakfast', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 3;
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: 'Anything involving coffee', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 4;
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: 'Anything involving coffee (slightly crude/slutty)', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 5;
    scene.img('images/locations/city/citycenter/photo/special/interview/6.mp4');
    scene.text('');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: 'Sleeping in followed by brunch', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 6;
    scene.img('images/locations/city/citycenter/photo/special/interview/3.mp4');
    scene.text('');
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
    { label: '', handler: (st: GameState) => {
    (s as any).foto_documentary['question_11'] = 7;
    scene.img('images/locations/city/citycenter/photo/special/interview/1.mp4');
    scene.text('');
    // TODO-QSP: end !}
    scene.actions([
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
      { label: 'Finish interview', goto: ['foto_model_documentary', '1st_documentary_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1st_documentary':
      enter1stDocumentary(s, scene);
      break;
    case 'documentary_1':
      enterDocumentary_1(s, scene);
      break;
    case 'documentary_2':
      enterDocumentary_2(s, scene);
      break;
    case 'documentary_3':
      enterDocumentary_3(s, scene);
      break;
    case 'documentary_4':
      enterDocumentary_4(s, scene);
      break;
    case 'documentary_5':
      enterDocumentary_5(s, scene);
      break;
    case 'documentary_6':
      enterDocumentary_6(s, scene);
      break;
    case 'documentary_7':
      enterDocumentary_7(s, scene);
      break;
    case 'documentary_8':
      enterDocumentary_8(s, scene);
      break;
    case 'documentary_9':
      enterDocumentary_9(s, scene);
      break;
    case 'documentary_10':
      enterDocumentary_10(s, scene);
      break;
    case 'documentary_11':
      enterDocumentary_11(s, scene);
      break;
    default:
      enter1stDocumentary(s, scene);
      break;
  }
}

export const foto_model_documentary: LocationDef = {
  name: 'foto_model_documentary',
  title: 'You step out of the room and almost run head first into one ',
  region: 'other',
  description: ['You step out of the room and almost run head first into one of the managers.'],
  enter: enter,
};
