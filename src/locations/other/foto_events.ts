import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFame(s: GameState, scene: SceneBuilder): void {
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0))/2);
  // TODO-QSP: :reroll_1
  ((s as any).special_model = (s as any).special_model ?? {})['roll'] = 2000;
  ((s as any).special_skill_model = (s as any).special_skill_model ?? {})['roll'] = 2000;
  if (((s as any).first_fame_event ?? 0) < 1) {
    qspGoto(s, 'foto_events', 'topless1');
  } else {
    (s as any).mdlng_fame_event = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).mdlng_fame_event ?? 0) === 1  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
      qspGoto(s, 'foto_events', 'pool1');
    } else {
      if (((s as any).mdlng_fame_event ?? 0) === 2  &&  ((s as any).pcs_agil ?? 0) >= 40) {
        qspGoto(s, 'foto_events', 'tennis');
      } else {
        if (((s as any).mdlng_fame_event ?? 0) === 2  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
          qspGoto(s, 'foto_events', 'pool1');
        } else {
          if (((s as any).mdlng_fame_event ?? 0) === 3) {
            qspGoto(s, 'foto_events2', 'champagne1');
          } else {
            // TODO-QSP: jump 'reroll_1'
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSkill(s: GameState, scene: SceneBuilder): void {
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0)/2 * 10) + ((Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700) + ((s as any).pcs_apprnc ?? 0))/2);
  // TODO-QSP: :reroll_2
  ((s as any).special_model = (s as any).special_model ?? {})['roll'] = 2000;
  ((s as any).special_skill_model = (s as any).special_skill_model ?? {})['roll'] = 2000;
  (s as any).mdlng_skill_event = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).mdlng_skill_event ?? 0) === 1  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
    qspGoto(s, 'foto_events', 'topless2');
  } else {
    if (((s as any).mdlng_skill_event ?? 0) === 2  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
      qspGoto(s, 'foto_events', 'beach2');
    } else {
      if (((s as any).mdlng_skill_event ?? 0) === 3  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).daystage ?? 0) < 3) {
        qspGoto(s, 'foto_events', 'pool2');
      } else {
        if (((s as any).mdlng_skill_event ?? 0) === 4  &&  ((s as any).hour ?? 0) <= 18) {
          qspGoto(s, 'foto_events', 'runway2');
        } else {
          if (((s as any).mdlng_skill_event ?? 0) === 5) {
            qspGoto(s, 'foto_events', 'wet1');
          } else {
            // TODO-QSP: jump 'reroll_2'
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStudioStripTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/strip3.mp4');
  scene.text('After pulling off the rest of your clothes, you thumb your underwear for a moment before realizing that you can\'t strip all the way. You just don\'t have enough confidence in yourself. But you\'re still in your underwear right? You\'re new here, surely they\'ll understand won\'t they?');
  if (((s as any).braworntype ?? 0) === 'none') {
    scene.text('Still, feeling your nipples harden in the cool air, you cross your arms to cover them. You really wish you had worn a bra today…');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the main floor', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('No sooner do you take your third step out of the back room than you hear someone shouting at you.');
    scene.text('"Hey! What are you doing? Why are you still wearing your underwear?"');
    scene.actions([
      { label: 'Turn', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('Turning to the sound, you see a manager briskly walking towards you.');
    scene.text('"Well? Why are you still dressed? Take that off and put it in your locker before you come back out onto the floor."');
    scene.actions([
      { label: 'Blush and do as he says', handler: (st: GameState) => {
    (st as any).studio_strip_talk = 3;
    scene.img('images/locations/city/citycenter/photo/strip1.mp4');
    scene.text('Embarrassed that you were caught breaking the rules and scolded for it so quickly, you blush and stammer an apology, retreating into the back room to reluctantly change into your full birthday suit. So much for that. Guess you\'re just going to have to deal with your discomfort with nudity if you want to keep working here.');
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
      { label: 'Try to explain yourself', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Oh, well, it\'s just that I\'m new here," you say. "I\'m not really used to this whole \'dress code\' thing and I thought that maybe I could just wear my underwear for a little while and-"');
    scene.text('The manager holds up his hand to stop you, cutting you off mid sentence.');
    scene.text('"Nope. Sorry miss, rules are rules. If you want to work here then you have to wear the uniform. Now take off your underwear."');
    qspCall(st, 'willpower', 'exhib', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Plead', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Plead', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Oh please!" you cry. "I\'m just not ready for this. Maybe we can work something out? Can\'t I just do this for a little while to get used to working here? I just need a while to adjust. Please can\'t I do that?"');
    scene.text('"Hmmm…" The manager rubs his chin, considering your request. "Okay, I\'ll give you two weeks. But after that I expect to see you naked at all times unless you\'re doing a shoot. Do you understand?"');
    scene.text('You nod vigorously in response.');
    scene.text('"Okay, good. Remember: Two weeks. Work on it."');
    scene.text('As he walks away you sigh in relief. Two weeks isn\'t a lot, but at least you\'ll have a bit more time to get used to this whole "being naked" thing.');
    (st as any).studio_strip_talk = 1;
    (st as any).studio_underwear = ((st as any).daystart ?? 0) + 14;
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"Sorry…" you say, starting to head towards the back room again.');
    scene.text('"Hey, where are you going?" Confused, you turn back around.');
    scene.text('"What do you mean? You said to take it off so I\'m just…?" you gesture towards the back room with a shrug.');
    scene.text('"No," the manager replies. "I want to make sure you don\'t just walk in and wait till I leave and not change. Take it off here."');
    scene.actions([
      { label: 'Do as he says and strip', goto: ['foto_events', 'underwear_steal'] },
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

function enterStudioStripTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('You step out into the studio and you hear someone calling your name.');
  // TODO-QSP: dynamic text: "Hey! <<$model[''firstname'']>>! It''s been two weeks, what are you still doing ...
  scene.text(`"Hey! ${((s as any).model ?? 0)?.['firstname'] ?? ''}! It's been two weeks, what are you still doing in your underwear? We had a deal, now take that off. Right now!"`);
  if (((s as any).pcs_inhib ?? 0) < 30  &&  ((s as any).underwear ?? 0)?.['type'] !== 2) {
    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to bargain again', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to bargain again', handler: (st: GameState) => {
    (st as any).studio_strip_talk = 2;
    (st as any).studio_underwear = ((st as any).daystart ?? 0) + 7;
    if (((st as any).braworntype ?? 0) !== 'none') {
      scene.img('images/locations/city/citycenter/photo/strip1.mp4');
      scene.text('"No! Please!" you cry. "I\'m still not ready! I need more time! What if I just keep my panties for a little longer? Just go topless instead of full nude?"');
      qspCall(st, 'bras', 'remove');
      qspCall(st, 'stat', '');
      scene.text('In your desperation, you throw off your bra as fast as you can. You don\'t feel confident enough to be doing this but even this is better than having to take off your panties and show your pussy too. Once your bra is on the floor, the manager glances up and down, back and forth between your breasts and your increasingly red face.');
    } else {
      scene.img('images/locations/city/citycenter/photo/foto.jpg');
      scene.text('"No! Please!" you cry. "I\'m still not ready! I need more time! What if I just keep my panties for a little longer? Just go topless instead of full nude?"');
      scene.text('The manager looks at your already breasts with obvious confusion and resist the urge to cover them up with your hands with great difficulty.');
      scene.text('"But you\'re already topless."');
      scene.text('"Exactly!" you say, trying to cover yourself with excuses. "I, uhh, purposely didn\'t wear a bra today. I\'m still not ready but I took the initiative to help myself get more used to it. That has to count for something right?"');
    }
    scene.text('"Fine, fine," he grumbles. "I\'ll give you one more week. But that\'s it! At the end of this week I expect those panties to come off! Now get to work!"');
    scene.text('The manager turns around and walks away and you heave a sigh of relief at his departure. It\'s not exactly what you want, but you still have one more week now…');
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do as he says and strip', goto: ['foto_events', 'underwear_steal'] },
  ]);
  scene.build();
}

function enterStudioStripTalk3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('You step out into the studio and you hear shouting again.');
  scene.text('"What the fuck! It\'s been another week and you\'re still wearing panties!"');
  scene.text('Turning apprehensively, you see the same floor manager again stomping towards you.');
  // TODO-QSP: dynamic text: "I''ve had enough of this bullshit <<$model[''firstname'']>>. Now bend down and ...
  scene.text(`"I've had enough of this bullshit ${((s as any).model ?? 0)?.['firstname'] ?? ''}. Now bend down and take those panties off right this second!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Do as he says and strip', goto: ['foto_events', 'underwear_steal'] },
  ]);
  scene.build();
}

function enterUnderwearSteal(s: GameState, scene: SceneBuilder): void {
  (s as any).studio_strip_talk = 3;
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.img('images/locations/city/citycenter/photo/strip1.mp4');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      if (((s as any).underwear ?? 0)?.['type'] === 2) {
        scene.text('Blushing hard, you nervously do as he says. You peel your bodysuit down exposing your breasts, your face managing to burn even hotter when you have to pull it down your legs, exposing your pussy. Clutching your it to your body, you stand back up to see the manager holding out his hand.');
      } else {
        scene.text('Blushing hard, you nervously do as he says. As hot as your face feels from removing your bra in front of him and exposing your breasts, it somehow manages to burn even hotter when your panties come down after exposing your pussy. Clutching your underwear to your body, you stand back up to see the manager holding out his hand.');
      }
    } else {
      scene.text('You blush hard but do as he says. As you slide down your panties you have to admit to yourself that even if you aren\'t fully comfortable with this, you\'re also not shy enough to make it a big deal. You don\'t have any more excuses not to comply with the dress code. Picking your underwear back up, you turn towards the locker room but stop when you see the manager holding out his hand.');
    }
    scene.text('"What?"');
    scene.text('"Give me your underwear."');
    scene.text('"What?!"');
    if (((s as any).underwear ?? 0)?.['type'] === 2) {
      (s as any).studio_underwear_steal = 3;
      scene.text('"I don\'t want you changing back into this after I leave. You can collect it from me when you\'re ready to leave for the day, now give it to me." Reluctantly, you slowly extend your arm before he snatches the underwear from your grasp. "Thank you. And remember: unless you\'re doing a shoot, I\'m not going to see you wearing anything but your birthday suit in this studio again. Now get to work." ');
    } else {
      (s as any).studio_underwear_steal = 2;
      scene.text('"I don\'t want you changing back into this after I leave. You can collect it from me when you\'re ready to leave for the day, now give it to me." Reluctantly, you slowly extend your arm before he snatches your panties and bra from your grasp. "Thank you. And remember: unless you\'re doing a shoot, I\'m not going to see you wearing anything but your birthday suit in this studio again. Now get to work."');
    }
    scene.text('He walks away without a second glance at you, leaving you shivering naked in the middle of the studio.');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'studio'] },
    ]);
  } else {
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip2.mp4');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      scene.text('Blushing hard, you nervously do as he says, face burning hot as you slip your panties down around your legs, keenly aware of your now visible pussy. Clutching your underwear to your body, you stand back up to see the manager holding out his hand.');
    } else {
      scene.text('You blush hard but do as he says. As you slide down your panties you have to admit to yourself that even if you aren\'t fully comfortable with this, you\'re also not shy enough to make it a big deal. You don\'t have any more excuses not to comply with the dress code. Picking your underwear back up, you turn towards the locker room but stop when you see the manager holding out his hand.');
    }
    scene.text('"What?"');
    scene.text('"Give me your underwear."');
    scene.text('"What?!"');
    scene.text('"I don\'t want you changing back into this after I leave. You can collect it from me when you\'re ready to leave for the day, now give me your panties." Reluctantly, you slowly extend your arm before he snatches your panties from your grasp. "Thank you. And remember: unless you\'re doing a shoot, I\'m not going to see you wearing anything but your birthday suit in this studio again. Now get to work."');
    scene.text('He walks away without a second glance at you, leaving you shivering naked in the middle of the studio.');
    (s as any).studio_underwear_steal = 1;
    scene.actions([
      { label: 'Continue', goto: ['foto', 'studio'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterUnderwearSteal2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text('Walking through the studio you find the manager you\'re looking for. He sits at a desk flipping through a magazine that looks to be produced by the studio. Is that a new copy? Is he proof reading or something? Stepping up to him, you awkwardly clear your throat and he looks up at you.');
  scene.text('"Hey… It\'s me. I\'m here for, my… you know…"');
  scene.text('"Your… what?" He gives you a dry look. "I can\'t give you what you want if I don\'t know what it is."');
  if (((s as any).studio_underwear_steal ?? 0) === 1) {
    scene.text('"My… panties…" you force out with some effort, heat flushing through your face.');
  }
  if (((s as any).studio_underwear_steal ?? 0) >= 2) {
    scene.text('"My… underwear…" you force out with some effort, heat flushing through your face.');
  }
  scene.text('"Ahh, those!" he says, face brightening with false understanding. He reaches down behind his desk and pulls out your unmentionables, dangling them in front of you.');
  scene.text('"Thank you…" you mutter bashfully as you take your belongings back from him. Suddenly you realize that you got dressed without remembering you had to put these on anyways. The manager looks back at you noticing the same thing.');
  scene.text('"So, were you planning to put that back on now or were you planning on just carrying those home?"');
  if (((s as any).PCloSkirt ?? 0) > 0) {
    scene.text('You blush at the thought of walking home without panties in a skirt.');
    if (((s as any).studio_underwear_steal ?? 0) === 2) {
      scene.text('A bra is one thing but your panties…');
    }
    if (((s as any).studio_underwear_steal ?? 0) === 3) {
      scene.text('But it\'s a bodysuit… You\'d have to get completely undressed to put it back on…');
    }
    scene.text('But also, doing that here in front of him? He already forced you to undress, you suppose. Getting dressed can\'t be worse than that right?');
    if (((s as any).studio_underwear_steal ?? 0) <= 2) {
      scene.actions([
        { label: 'Just put your panties on under your skirt', handler: (st: GameState) => {
    qspCall(st, 'panties', 'wear');
    scene.img('images/locations/city/citycenter/photo/panties.mp4');
    scene.text('Well, you\'re wearing a skirt today right? It wouldn\'t be too difficult to just slip your panties on that way right?');
    if (((st as any).studio_underwear_steal ?? 0) === 2) {
      scene.text('Going home without a bra isn\'t nearly as bad as going home without your panties.');
    }
    scene.text('As you bend down you suddenly realize you were completely wrong. Putting your legs through your panties, you feel the manager leering at you as you pull them up around your legs. Despite having been nude in front of him, somehow pulling your panties up under your skirt is more shameful.');
    scene.text('After standing back up, you see the manager still looking at you expectantly.');
    scene.text('"What?"');
    scene.text('"Don\'t you have something to promise me?" he says, nodding at the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027img msg/u0027, /u0027images/locations/city/citycenter/photo/dress_code.jpg/u0027); return false;">sign</a> by the door.');
    scene.actions([
      { label: 'Make your promise', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('Sighing deeply, you stammer out what he wants you to say.');
    scene.text('"I promise that from now I will always be completely naked in the studio unless it\'s for a shoot."');
    scene.text('"Good. Feel free to go home now. Hope to see you again soon."');
    scene.text('With your underwear returned and safely covering your hips, you awkwardly make your exit.');
    (st as any).studio_underwear_steal = 0;
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the back room and re-dress', goto: ['foto_events', 're-dress'] },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('Your brain freezing in panic, you just walk away and leave the studio, blushing furiously at the cool air flowing between your legs under your skirt.');
    (st as any).studio_underwear_steal = 0;
    scene.actions([
      { label: 'Continue', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } else {
    scene.text('You\'re wearing pants today so if you wanted to put your panties back on you\'d have to take everything off again.');
    if (((s as any).studio_underwear_steal ?? 0) === 2) {
      scene.text('Not to mention taking your top off to put on your bra…');
    }
    if (((s as any).studio_underwear_steal ?? 0) === 3) {
      scene.text('But it\'s a bodysuit… You\'d have to get completely undressed to put it back on…');
    }
    scene.text('But also, doing that here in front of him? He already forced you to undress, you suppose. Getting dressed can\'t be worse than that right?');
    scene.actions([
      { label: 'Go to the back room and re-dress', goto: ['foto_events', 're-dress'] },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('Your brain freezing in panic, you just walk away and leave the studio, blushing furiously at the fabric of your pants rubbing raw against your uncovered pussy.');
    (st as any).studio_underwear_steal = 0;
    scene.actions([
      { label: 'Continue', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterReDress(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/misc/dress_1.mp4');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'underwear', 'wear');
  qspCall(s, 'stat', '');
  scene.text('Unable to do it in front of the manager, you go all the way back to the back room to completely undress and re-dress to get your underwear in place before leaving again. It takes a more time than you\'d like but it\'s at least less shameful than doing it in front of the manager…');
  (s as any).studio_underwear_steal = 0;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterCommercial(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).practice_session ?? 0))) {
    (s as any).model_job_week = ((s as any).model_job_week ?? 0) + (1);
    (s as any).model_week = (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7;
    ((s as any).modelfoto = (s as any).modelfoto ?? {})['shoots'] = ((s as any).modelfoto['shoots'] ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
    ((s as any).modelfoto = (s as any).modelfoto ?? {})['earnings'] = ((s as any).modelfoto['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
  } else {
    (s as any).practice_session = 0;
  }
  (s as any).commercial = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('As you wrap the shoot, a staffer at the studio walks up to you and grabs your attention.');
  // TODO-QSP: dynamic text: "Hey, <<$model[''firstname'']>>, I''m glad I caught you. Listen, we have a speci...
  scene.text(`"Hey, ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I'm glad I caught you. Listen, we have a special opportunity for you if you'd like to hear about it."`);
  // TODO-QSP: end
  scene.actions([
    { label: '"Special opportunity?"', handler: (st: GameState) => {
    scene.text('"Yeah. See, you\'ve been doing good work here. There are people who are really impressed with your ability to take direction and with the boldness and confidence you have in your body. With that in mind, word has been going around that they want one of our models to be the actress in their commercial. So, I thought I\'d ask you."');
    scene.actions([
      { label: '"A commercial? You mean I could become an actress?"', handler: (st: GameState) => {
    scene.text('"Yes, that\'s exactly what we\'re saying. This is an opportunity for you to start branching out your career from just modelling and into acting. Would you like to hear more about the job?"');
    scene.actions([
      { label: '"Sure, tell me about it"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"The job is for a big time network. The idea for the commercial is they need a pretty girl walking down the street with their logos CGI\'d over your breasts and between your thighs and passers-by having their attention drawn to you as you walk."');
    scene.actions([
      { label: '"That doesn\'t sound too difficult"', handler: (st: GameState) => {
    scene.text('"But there\'s a catch. See, the marketing team has determined that in order to get the right reactions from people going by, you can\'t just wear a strapless bikini. You\'re going to have to walk down the street completely naked. That being said, the studio is willing to pay you triple our usual nude modelling rate. Are you still willing to do the shoot?"');
    scene.actions([
      { label: '"Sure! I\'ve always wanted to be an actress!"', handler: (st: GameState) => {
    scene.text('"Sure!" you say. "I\'ve always wanted to be an actress, I just never thought I\'d get a chance like this. When do we shoot?"');
    if (((st as any).actress_stats ?? 0)?.['firstname'] === '') {
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['firstname'] = ((st as any).model ?? 0)?.['firstname'];
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['lastname'] = ((st as any).model ?? 0)?.['lastname'];
    }
    (st as any).casting = 3;
    if (((st as any).week ?? 0) >= 6) {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 13;
      // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
      scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be there next Saturday at 10:00, this is where they said they were going to set up the shoot."');
      scene.actions([
        { label: 'Thank him and go', goto: ['foto', 'studio'] },
      ]);
    } else {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 6;
      if (((st as any).week ?? 0) === 5) {
        // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
        scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here tomorrow at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
        scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here on Saturday at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      }
    }
  } },
      { label: '"Triple rate?! Hell yeah!"', handler: (st: GameState) => {
    (st as any).casting = 3;
    if (((st as any).actress_stats ?? 0)?.['firstname'] === '') {
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['firstname'] = ((st as any).model ?? 0)?.['firstname'];
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['lastname'] = ((st as any).model ?? 0)?.['lastname'];
    }
    scene.text('"Triple rate?! Hell yeah! Who cares about being naked in public when I\'m getting paid that much! I\'d let them gangbang me for that kind of money!"');
    scene.text('"I\'m sure they\'d be happy to arrange that with you some other time," he says with a shit eating grin.');
    scene.actions([
      { label: '"So when do we shoot?"', handler: (st: GameState) => {
    (st as any).casting = 3;
    if (((st as any).week ?? 0) >= 6) {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 13;
      // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
      scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here next Saturday at 10:00, this is where they said they were going to set up the shoot."');
      scene.actions([
        { label: 'Thank him and go', goto: ['foto', 'studio'] },
      ]);
    } else {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 6;
      if (((st as any).week ?? 0) === 5) {
        // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
        scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here tomorrow at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: He hands you a business card for the <b>Aurora Talent Agency</b> in the city cen...
        scene.text('He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here on Saturday at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      }
    }
  } },
    ]);
  } },
      { label: '"I have to be naked in public…?"', handler: (st: GameState) => {
    scene.text('You blush imagining being on the set in public on a busy street and embarrassedly ask,');
    scene.text('"I\'m going to have to walk down the street completely naked in broad daylight…?"');
    scene.text('"Yes, I\'m afraid so. The producers won\'t budge on this. I\'ve been promised that they aren\'t going to be broadcasting your uncensored body all over television though. So if you accept, you\'ll be guaranteed that at least. So, will you do it?"');
    scene.actions([
      { label: '"I guess so…"', handler: (st: GameState) => {
    scene.text('"I guess so," you say. "Since they\'re paying so much, it\'s hard to turn down. Besides, it might be worth it to break into acting, right?"');
    (st as any).casting = 3;
    if (((st as any).actress_stats ?? 0)?.['firstname'] === '') {
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['firstname'] = ((st as any).model ?? 0)?.['firstname'];
      ((st as any).actress_stats = (st as any).actress_stats ?? {})['lastname'] = ((st as any).model ?? 0)?.['lastname'];
    }
    if (((st as any).week ?? 0) >= 6) {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 13;
      // TODO-QSP: dynamic text: "If it means anything to you, I think you''re making the right choice for your c...
      scene.text('"If it means anything to you, I think you\'re making the right choice for your career." He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here next Saturday at 10:00, this is where they said they were going to set up the shoot."');
      scene.actions([
        { label: 'Thank him and go', goto: ['foto', 'studio'] },
      ]);
    } else {
      (st as any).SMTV_commercial = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + 6;
      if (((st as any).week ?? 0) === 5) {
        // TODO-QSP: dynamic text: "If it means anything to you, I think you''re making the right choice for your c...
        scene.text('"If it means anything to you, I think you\'re making the right choice for your career." He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here tomorrow at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "If it means anything to you, I think you''re making the right choice for your c...
        scene.text('"If it means anything to you, I think you\'re making the right choice for your career." He hands you a business card for the <b>Aurora Talent Agency</b> in the city center. "Be here on Saturday at 10:00, this is where they said they were going to set up the shoot."');
        scene.actions([
          { label: 'Thank him and go', goto: ['foto', 'studio'] },
        ]);
      }
    }
  } },
      { label: '"No, it\'s too much for me"', handler: (st: GameState) => {
    scene.text('"No," you say with some regret. "Even with all that money, that\'s not the kind of model or actress I want to be known for."');
    // TODO-QSP: dynamic text: "Ahh, well that''s a shame. Anyways, I''ll let you go now. See you later <<$mode...
    scene.text(`"Ahh, well that's a shame. Anyways, I'll let you go now. See you later ${((st as any).model ?? 0)?.['firstname'] ?? ''}"`);
    scene.actions([
      { label: 'Go back to modelling', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: '"No thanks, I\'m happy just being a model"', handler: (st: GameState) => {
    (st as any).commercial = 2;
    (st as any).casting = 1;
    scene.text('"Ahh, well that\'s a shame. Anyways, you\'re here today. Is there something you\'d like to work on?"');
    scene.actions([
      { label: 'Go back to modelling', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFashionPersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"I\'d like to do a catalogue shoot," you say.');
  if ((!((s as any).foto_persuade ?? 0))) {
    scene.text('The manager twists his mouth as he considers.');
    // TODO-QSP: dynamic text: "Listen, <<$model[''firstname'']>>, you''ve been here a while, you''ve done quit...
    scene.text(`"Listen, ${((s as any).model ?? 0)?.['firstname'] ?? ''}, you've been here a while, you've done quite a few catalogue jobs for us and your skills have really improved since you first started."`);
    scene.text('"Oh. Uhh, thanks."');
    scene.text('"Some of the staff around here have been talking and we really think that you\'re ready to up your game. How about we do a full fashion shoot instead of cataloguing swimsuits or dresses? You can make a bit more money doing a fashion shoot instead of a catalogue one."');
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.text('"You know, that offer to do a fashion shoot is still open you know. We really think you have what it takes! Want to give it a try?"');
    }
  }
  if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] > 0) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'d be more comfortable just sticking to the catalogues for now."');
    scene.text('"Oh. Okay…"');
    scene.text('The manager seems disappointed by your answer.');
    scene.text('"So clothing or swimsuits today?"');
    scene.actions([
      { label: 'Clothing', handler: (st: GameState) => {
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['catalog'] = ((st as any).modelfoto['catalog'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 4) + 2));
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'money', 'earn', 450);
    scene.img('images/locations/city/citycenter/photo/fashion3.mp4');
    scene.text('You spend two hours modelling for the online catalogs of retail clothing stores, wearing various different dresses but the same expression. It\'s boring but it still gets you paid.');
    // TODO-QSP: dynamic text: You receive <<$func(''money'', ''string_profit'', 450)>> for the job.
    scene.text(`You receive ${qspFunc(s, 'money', 'string_profit', 450)} for the job.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
      { label: 'Swimsuits', handler: (st: GameState) => {
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['catalog'] = ((st as any).modelfoto['catalog'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 4) + 2));
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'money', 'earn', 450);
    scene.img(`images/locations/city/citycenter/photo/bikini${(Math.floor(Math.random() * 3) + 3)}.mp4`);
    (st as any).bikinicatalog = ((st as any).bikinicatalog ?? 0) + (1);
    scene.text('You change in and out of various different bikinis, modelling them with the same pose and expression for use in online and department store catalogs.');
    // TODO-QSP: dynamic text: You receive <<$func(''money'', ''string_profit'', 450)>> for the job.
    scene.text(`You receive ${qspFunc(s, 'money', 'string_profit', 450)} for the job.`);
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).foto_persuade = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That sounds really good actually! I\'ll do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    scene.actions([
      { label: 'Do the fashion shoot', goto: ['foto_shoot', 'fashion'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLingeriePersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"I\'d like to do a fashion shoot," you say.');
  if ((!((s as any).foto_persuade ?? 0))) {
    // TODO-QSP: dynamic text: "By the way <<$model[''firstname'']>>, you''ve been here a while, you''ve done q...
    scene.text(`"By the way ${((s as any).model ?? 0)?.['firstname'] ?? ''}, you've been here a while, you've done quite a few fashion jobs for us and your work for us has been great!"`);
    scene.text('"Oh! Thanks!"');
    scene.text('"But we also think that you could take it a step farther, show off more of your beautiful body. How would you feel about doing a lingerie shoot? The exposure is about the same but the pay is a little bit better. What do you say?"');
  } else {
    if (((s as any).foto_persuade ?? 0) === 2) {
      // TODO-QSP: dynamic text: "By the way <<$model[''firstname'']>>, the staff have been talking again. You re...
      scene.text(`"By the way ${((s as any).model ?? 0)?.['firstname'] ?? ''}, the staff have been talking again. You remember how we originally had to ask you to give fashion shoots a try? We were thinking that it might be time for you to take another step and try out a lingerie shoot? The exposure is about the same but lingerie shoots pay a little bit more than fashion. What do you say? Give it a try?"`);
    } else {
      if (((s as any).foto_persuade ?? 0) === 1) {
        scene.text('"We can do a fashion shoot today if you like, but the studio would still really love to see you do that lingerie shoot. What do you say?"');
      }
    }
  }
  if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] > 0) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'ll keep on doing regular fashion shoots for now."');
    scene.text('"Oh. Okay…"');
    scene.actions([
      { label: 'Do the fashion shoot', goto: ['foto_shoot', 'fashion'] },
    ]);
  } },
    ]);
  }
  if (((s as any).foto_persuade ?? 0) === 2  &&  ((s as any).pcs_inhib ?? 0) < 20) {
    scene.actions([
      { label: 'I guess so', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… I guess it turned out well last time…"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    scene.actions([
      { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'lingerie'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).foto_persuade = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That sounds really good actually! I\'ll do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    scene.actions([
      { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'lingerie'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGlamourPersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if ((!((s as any).foto_persuade ?? 0))) {
    scene.text('The manager twists his mouth as he considers.');
    // TODO-QSP: dynamic text: "Listen, <<$model[''firstname'']>>, you''ve been here a while, you''ve done real...
    scene.text(`"Listen, ${((s as any).model ?? 0)?.['firstname'] ?? ''}, you've been here a while, you've done really great fashion work for us while modelling here."`);
    scene.text('"Oh! Thanks!"');
    scene.text('"But we also think that you could take it a step farther, show off more of your beautiful body. You\'ve never done a glamour shoot yet, what do you say to giving that a try?"');
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.text('"We can do a lingerie shoot today if you like, but the studio would still really love to see you do that glamour shoot. What do you say?"');
    } else {
      if (((s as any).foto_persuade ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, the staff have been talking again. We love your ...
        scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, the staff have been talking again. We love your lingerie stuff but we were wondering if you'd consider trying a glamour shoot today?"`);
      } else {
        if (((s as any).foto_persuade ?? 0) === 3) {
          scene.text('"Hey I\'m sorry to bother you like this again, but we would still really love to see you do that glamour shoot. What do you say? Willing to give it a try today?"');
        }
      }
    }
  }
  if (((s as any).foto_persuade ?? 0) === 3) {
    if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      } else {
        if (((s as any).foto ?? 0)?.['suborn'] > 0) {
          qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
        } else {
          (s as any).will_cost = 0;
        }
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'ll stick to the lingerie shoot today."');
    scene.text('"Oh. Okay."');
    scene.actions([
      { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'lingerie'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) < 45) {
      scene.actions([
        { label: 'I guess I could try it…', handler: (st: GameState) => {
    (st as any).foto_persuade = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could try it…"');
    // TODO-QSP: dynamic text: "Great! Thank you so much <<$model[''firstname'']>>! Just go to this set and we'...
    scene.text(`"Great! Thank you so much ${((st as any).model ?? 0)?.['firstname'] ?? ''}! Just go to this set and we'll set somebody up for you."`);
    scene.actions([
      { label: 'Do the transparent clothing shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes, I\'m ready', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"You know what? Yeah, I think I\'ll give it a try today. I think I\'m ready."');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and a photographer will be ready for you."');
    scene.actions([
      { label: 'Do the transparent clothing shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      } else {
        if (((s as any).foto ?? 0)?.['suborn'] > 0) {
          qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
        } else {
          (s as any).will_cost = 0;
        }
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'ll stick to the lingerie shoot today."');
    scene.text('"Oh. Okay…"');
    scene.actions([
      { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'lingerie'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'What kind of glamour shoot?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… maybe…" you say slowly. "What kind of shoot were you thinking?"');
    scene.text('"Well how about a fashion shoot with transparent clothing? You\'ve never shown your breasts before yet, have you?"');
    qspCall(st, 'willpower', 'skill', 'pcs_inhib', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No way!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No way!', handler: (st: GameState) => {
    scene.text('"What?! No way! I\'m not showing my breasts on camera!"');
    scene.text('"Oh, well, maybe that is actually a step too far right now. Well, what about just some sexy clothing? Something a little skimpy but not totally revealing? How does that sound?"');
    qspCall(st, 'willpower', 'skill', 'inhib', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    (st as any).foto_persuade = 3;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"No, I\'m not doing anything like that. I\'m just going to stick to my lingerie shoot today."');
    // TODO-QSP: dynamic text: "Oh, okay. That''s fine <<$model[''firstname'']>>. Maybe another time."
    scene.text(`"Oh, okay. That's fine ${((st as any).model ?? 0)?.['firstname'] ?? ''}. Maybe another time."`);
    scene.actions([
      { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'lingerie'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'That\'s not so bad…', handler: (st: GameState) => {
    (st as any).foto_persuade = 4;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That\'s not so bad I guess… I\'m already doing lingerie so that\'s not much of a difference."');
    // TODO-QSP: dynamic text: "Yes, exactly! Think of it just like that. Thanks for this <<$model[''firstname'...
    scene.text(`"Yes, exactly! Think of it just like that. Thanks for this ${((st as any).model ?? 0)?.['firstname'] ?? ''}. Just go to this set and we'll set somebody up for you."`);
    scene.actions([
      { label: 'Do the glamour shoot', goto: ['foto_shoot', 'sexy'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).foto_persuade ?? 0) === 2  &&  ((st as any).pcs_inhib ?? 0) < 45) {
      scene.actions([
        { label: 'I guess so', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… I guess it turned out well last time… I could give it a try…"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    scene.actions([
      { label: 'Do the transparent clothing shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).pcs_inhib ?? 0) < 45  ||  ((st as any).foto_persuade ?? 0) === 3) {
        scene.actions([
          { label: 'I guess I could try it…', handler: (st: GameState) => {
    (st as any).foto_persuade = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could try it…"');
    // TODO-QSP: dynamic text: "Great! Thank you so much <<$model[''firstname'']>>! Just go to this set and we'...
    scene.text(`"Great! Thank you so much ${((st as any).model ?? 0)?.['firstname'] ?? ''}! Just go to this set and we'll set somebody up for you."`);
    scene.actions([
      { label: 'Do the transparent clothing shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That sounds really good actually! I\'ll do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    scene.actions([
      { label: 'Do the transparent clothing shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransPersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if ((!((s as any).foto_persuade ?? 0))) {
    // TODO-QSP: dynamic text: "Hey, <<$model[''firstname'']>>, I just wanted to say, the studio has really bee...
    scene.text(`"Hey, ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I just wanted to say, the studio has really been loving your work lately."`);
    scene.text('"Oh! Thanks!"');
    scene.text('"But we also think that you could take it a step farther, be a bit bolder. You\'ve never done a transparent top shoot yet, what do you say to giving that a try?"');
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.text('"Hey, I know I asked before and we can do another basic glamour shoot today if you like, but the studio would still really love to see you do a transparent shoot. Do you think you might be up for it today?"');
    } else {
      if (((s as any).foto_persuade ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, the staff have been talking again. You remember ...
        scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, the staff have been talking again. You remember how we got you to upgrade from catalogue shoots to fashion shoots? We were thinking that it might be time for you to take another step and try doing some lingerie shoots? The exposure is about the same but lingerie shoots pay a little bit more than fashion. What do you say? Give it a try?"`);
      } else {
        if (((s as any).foto_persuade ?? 0) === 3) {
          scene.text('"Hey I\'m sorry to bother you like this again, but we would still really love to see you do a basic glamour shoot. What do you say? Willing to give it a try today?"');
        } else {
          if (((s as any).foto_persuade ?? 0) === 4) {
            // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, the staff have been talking again. I know I aske...
            scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, the staff have been talking again. I know I asked before, but I was wondering if you might be more comfortable now. Is it possible that you might consider doing a transparent clothing shoot today instead of a basic glamour one? No pressure if not, but I just wanted to check and see if you're ready."`);
          }
        }
      }
    }
  }
  if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] > 0) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'ll stick to the basic glamour shoot today."');
    scene.text('"Oh. Okay…"');
    scene.actions([
      { label: 'Do the glamour shoot', goto: ['foto_shoot', 'sexy'] },
    ]);
  } },
    ]);
  }
  if (((s as any).foto_persuade ?? 0) > 1  &&  ((s as any).foto_persuade ?? 0) < 4  &&  ((s as any).pcs_inhib ?? 0) < 45) {
    scene.actions([
      { label: 'I guess so', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… I guess it turned out well last time…"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the transparent shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).foto_persuade ?? 0) === 1  ||  ((s as any).foto_persuade ?? 0) === 4) {
      scene.actions([
        { label: 'I guess I could try', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… I guess I could give it a try…"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the transparent shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
        { label: 'Yes, I\'m ready', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"You know what? I think I <i>am</i> ready. I\'ll give it a try."');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and a photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the transparent shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That sounds really good actually! I\'ll do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the transparent shoot', goto: ['foto_shoot', 'transparent'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToplessPersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if ((!((s as any).foto_persuade ?? 0))) {
    // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, I just wanted to say, the studio has really been...
    scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I just wanted to say, the studio has really been loving your work lately."`);
    scene.text('"Oh! Thanks!"');
    scene.text('"But we also think that with your looks and your talent, you could take it a step farther, be a bit bolder. You\'ve never done a topless shoot before, have you? You\'ve already been doing the transparent stuff, what do you say to taking the whole thing off today?"');
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.text('"We can do another transparent shoot today if you like, but the studio would still really love to see you do a topless shoot. What do you say?"');
    } else {
      if (((s as any).foto_persuade ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, you seem to be doing really well with the transp...
        scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, you seem to be doing really well with the transparent shoots, just like we thought. I know that initially took some convincing, but we got here didn't we? Now, I was wondering if you'd like to try go a step further just like before and take the whole top off? You've never done a topless shoot and it isn't much different from what we're doing now. Our rates for topless shoots are better and you'll get a lot more exposure than what you're doing now. Want to try it?"`);
      }
    }
  }
  if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] > 0) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'ll stick to what I\'m doing for now."');
    scene.text('"Oh. Okay…"');
    if (((st as any).modelfoto ?? 0)?.['shoot_type'] === 'trans_ling') {
      scene.actions([
        { label: 'Do the lingerie shoot', goto: ['foto_shoot', 'trans_ling'] },
      ]);
    } else {
      scene.actions([
        { label: 'Do the transparent shoot', goto: ['foto_shoot', 'transparent'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).foto_persuade ?? 0) === 2  &&  ((s as any).pcs_inhib ?? 0) < 50) {
    scene.actions([
      { label: 'I guess so', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well… I guess you\'re right, it isn\'t that much different. I suppose I can give it a shot…"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the topless shoot', goto: ['foto_shoot', 'topless'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.actions([
        { label: 'Yes, I\'m ready', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"You know what? Yeah, I think I\'ll give it a try today. I think I <i>am</i> ready!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and a photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the topless shoot', goto: ['foto_shoot', 'topless'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"That sounds really good actually! Let\'s do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 2;
    scene.actions([
      { label: 'Do the topless shoot', goto: ['foto_shoot', 'topless'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNudePersuasion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if ((!((s as any).foto_persuade ?? 0))) {
    // TODO-QSP: dynamic text: "Hey, <<$model[''firstname'']>>, I just wanted to say, your work has been stunni...
    scene.text(`"Hey, ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I just wanted to say, your work has been stunning lately! Really fantastic!"`);
    scene.text('"Oh! Uhh, thanks!"');
    scene.text('"Your work is so great, we would love to show everything you\'ve got to offer. Now, feel free to say no, but what do you say to a full frontal nude shoot? I know it might be a little explicit, but the studio and our readers would love it. We\'re even willing to throw in a bonus and double your pay for your full nude debut. What do you say?"');
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Hey, that''s cool <<$model[''firstname'']>>. But I just want you to know that t...
      scene.text(`"Hey, that's cool ${((s as any).model ?? 0)?.['firstname'] ?? ''}. But I just want you to know that the studio's nude offer with bonus pay is still on the table if you want to do that instead."`);
    } else {
      if (((s as any).foto_persuade ?? 0) === 2) {
        // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, I''ve got a new offer from the studio for you. T...
        scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, I've got a new offer from the studio for you. They've really loved your willingness to try new things like with the past shoots and all and they wanted to know if you would like to step it up to the final level. Would you be willing to do a full frontal nude shoot with us? As a special bonus, the studio said they're willing to double your pay for your full debut. I have to say, this is a great offer. What do you think of it?"`);
      }
    }
  }
  if (((s as any).foto ?? 0)?.['suborn'] >= 5) {
    qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
  } else {
    if (((s as any).foto ?? 0)?.['suborn'] >= 3) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
    } else {
      if (((s as any).foto ?? 0)?.['suborn'] > 0) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).foto_persuade = 1;
    ((st as any).foto = (st as any).foto ?? {})['suborn'] = ((st as any).foto['suborn'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, that\'s really kind, but I think I\'ll stick to what I\'m doing for now."');
    scene.text('"Oh. Okay…"');
    if (((st as any).modelfoto ?? 0)?.['shoot_type'] === 'topless') {
      scene.actions([
        { label: 'Do the topless shoot', goto: ['foto_shoot', 'topless'] },
      ]);
    } else {
      if (((st as any).modelfoto ?? 0)?.['shoot_type'] === 'taste_nude') {
        scene.actions([
          { label: 'Do the tasteful nude shoot', goto: ['foto_shoot', 'tasteful'] },
        ]);
      } else {
        if (((st as any).modelfoto ?? 0)?.['shoot_type'] === 'top_nude') {
          scene.actions([
            { label: 'Do the topless nude shoot', goto: ['foto_shoot', 'topless_nude'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  if (((s as any).foto_persuade ?? 0) === 2  &&  ((s as any).pcs_inhib ?? 0) < 60) {
    scene.actions([
      { label: 'Wow! I… I guess I\'ll take it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Wow! That\'s a really amazing offer! I mean… well to be honest, I\'m not sure if I\'m ready for that but… I guess, I\'ll do it if the studio really believes in me so much."');
    scene.text('The manager smiles wide at you.');
    scene.text('"The special bonus doesn\'t hurt either," you smile back shyly.');
    scene.text('The manager laughs showing you his clipboard. "Go to this set here and everything is already set up for you."');
    (st as any).foto_persuade = 5;
    qspCall(st, 'foto_nude_debut', 'nude_debut_shave_start');
  } },
    ]);
  }
  if (((s as any).foto_persuade ?? 0) === 1  &&  ((s as any).pcs_inhib ?? 0) < 60) {
    scene.actions([
      { label: 'Well… I guess', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Well…" You mull it over a little bit more, still unsure of yourself. "I mean, I… I guess I can give it a try."');
    // TODO-QSP: dynamic text: The manager smiles wide at you. "Thank you so much for your courage <<$model[''f...
    scene.text(`The manager smiles wide at you. "Thank you so much for your courage ${((st as any).model ?? 0)?.['firstname'] ?? ''}."`);
    scene.text('"The special bonus doesn\'t hurt either," you smile back shyly.');
    scene.text('The manager laughs showing you his clipboard. "Go to this set here and everything is already set up for you."');
    (st as any).foto_persuade = 5;
    qspCall(st, 'foto_nude_debut', 'nude_debut_shave_start');
  } },
    ]);
  } else {
    if (((s as any).foto_persuade ?? 0) === 1) {
      scene.actions([
        { label: 'Yes, I\'m ready', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"You know what? I think I\'m ready to do it today! I\'ll do the nude shoot," you say, smiling. "And I\'ll take the bonus."');
    scene.text('The manager laughs showing you his clipboard. "Go to this set here and everything is already set up for you."');
    (st as any).foto_persuade = 5;
    qspCall(st, 'foto_nude_debut', 'nude_debut_shave_start');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wow! Yes!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Wow! That\'s a really amazing offer! That\'s so generous! Yes! I\'ll absolutely do it!"');
    scene.text('The manager smiles wide at you.');
    scene.text('"Great! Then go to this set here and the photographer will be ready for you."');
    (st as any).foto_persuade = 5;
    qspCall(st, 'foto_nude_debut', 'nude_debut_shave_start');
  } },
  ]);
  scene.build();
}

function enterSpecial(s: GameState, scene: SceneBuilder): void {
  (s as any).modelpay = (((s as any).pcs_mdlng ?? 0) / 2 * 25) + (qspFunc(s, 'shortgs', 'sqrt', Math.min(((s as any).fame ?? 0)?.['city_modelling'], 700)) * 50) + ((s as any).pcs_apprnc ?? 0);
  if (((s as any).specialmodelrequest ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).specialmodelrequest = ((s as any).daystart ?? 0);
    (s as any).specialjob1 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob2 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob3 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob4 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob5 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob6 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob7 = (Math.floor(Math.random() * 100) + 1);
    (s as any).specialjob8 = (Math.floor(Math.random() * 100) + 1);
  }
  scene.text('<center><b>Photographer</b></center>');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"I\'m looking for some more work, any special jobs still available today?"');
  if (((s as any).specialjob1 ?? 0) > 95  ||  ((s as any).specialjob2 ?? 0) > 95  ||  ((s as any).specialjob3 ?? 0) > 95  ||  ((s as any).specialjob4 ?? 0) > 95  ||  ((s as any).specialjob5 ?? 0) > 95  ||  ((s as any).specialjob6 ?? 0) > 95  ||  (((s as any).specialjob7 ?? 0) > 95  &&  ((s as any).fame ?? 0)?.['city_kickboxing'] >= 100  &&  ((s as any).pcs_inhib ?? 0) >= 45)  ||  (((s as any).specialjob8 ?? 0) > 95  &&  ((s as any).fame ?? 0)?.['city_running'] >= 100  &&  ((s as any).pcs_inhib ?? 0) >= 50  &&  ((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 9)) {
    scene.text('"Sure, we have a few today. Come take a look at the list, tell me if you\'re interested in doing something."');
    scene.actions([
      { label: 'Look at the list', goto: ['foto_events', 'list'] },
    ]);
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: "Sorry <<$model[''firstname'']>>, we don''t have anything today. Check in again ...
      scene.text(`"Sorry ${((s as any).model ?? 0)?.['firstname'] ?? ''}, we don't have anything today. Check in again tomorrow, maybe there'll be something for you."`);
    } else {
      // TODO-QSP: dynamic text: "Sorry <<$model[''firstname'']>>, we already assigned all the requests we had to...
      scene.text(`"Sorry ${((s as any).model ?? 0)?.['firstname'] ?? ''}, we already assigned all the requests we had today to other girls. Got none left for you. Check in again tomorrow, maybe there'll be something for you."`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the main floor', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterList(s: GameState, scene: SceneBuilder): void {
  if (((s as any).specialjob1 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027high_fashion/u0027); return false;">  High Fashion</a>');
  }
  if (((s as any).specialjob2 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027fine_art/u0027); return false;">  Fine Art Project(sex)</a>');
  }
  if (((s as any).specialjob3 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027modern_art/u0027); return false;">  Modern Art Project(69)</a>');
  }
  if (((s as any).specialjob4 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027aphrodite_advert/u0027); return false;">  Aphrodite Advert</a>');
  }
  if (((s as any).specialjob5 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027independent_art/u0027); return false;">  Independent Art Project</a>');
  }
  if (((s as any).specialjob6 ?? 0) > 95) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events/u0027, /u0027designer_wedding/u0027); return false;">  Designer Wedding Dress</a>');
  }
  if (((s as any).specialjob7 ?? 0) > 95  &&  ((s as any).fame ?? 0)?.['city_kickboxing'] >=100  &&  ((s as any).pcs_inhib ?? 0) >= 45) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_events2/u0027, /u0027kickboxing_documentary/u0027); return false;">Kickboxing documentary</a>');
  }
  if (((s as any).specialjob8 ?? 0) > 95  &&  ((s as any).fame ?? 0)?.['city_running'] >=100  &&  ((s as any).pcs_inhib ?? 0) >= 50  &&  ((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <=8) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: _field_documentary/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027foto_events2/u0027, /u0027track_&_field_documentary/u0027); return false;">Track & Field documentary</a>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Nothing interesting', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Hmm. Sorry, I don\'t think I want to do any of these today."');
    // TODO-QSP: dynamic text: "Alright, no problem <<$model[''firstname'']>>. See you later."
    scene.text(`"Alright, no problem ${((st as any).model ?? 0)?.['firstname'] ?? ''}. See you later."`);
    scene.text('You wave goodbye as you walk back to the main floor.');
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHighFashion(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"High fashion?" you ask. "What\'s this one about?"');
  scene.text('"Some fashion designer sent us some clothes, asked us to snap some pictures of someone wearing them to see if her ideas are on the right track. It\'s one of those things that only shows up at fashion shows that don\'t feature anything practical. I\'ve seen some of the pieces and let me tell you, they\'re definitely not suited for everyday use."');
  scene.text('"Hmmm…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob1 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! Go to set 14 and tell the photographer that you\'ve got the job. They\'ll dress you up there."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/special1.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).modelpayfin = 1800 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['pussy'] = ((st as any).modelfoto['pussy'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 2) + 1));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    scene.text('You spend the duration of the shoot changing in and out of designer bodices, corsets, and other tops, all of which conspicuously lack any kind of bottom, leaving your pussy exposed.');
    scene.text('Your manager was right. <i>Definitely</i> not suited for every day use.');
    // TODO-QSP: dynamic text: Two hours later, you''ve modelled and been photographed in every item of clothin...
    scene.text(`Two hours later, you've modelled and been photographed in every item of clothing requested by the client and are handed ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} in payment for the job.`);
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFineArt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Fine art?" you ask. "What\'s this one about?"');
  scene.text('"One of those famous modern artist people wants to use a model as reference for his \'erotic masterpiece.\' Says that he knows exactly what the subject of his next piece should be but he doesn\'t know what medium he wants it in. So your job would be to hold the position she wants with the male model she\'s bringing and we\'ll take photos while she sketches you. She\'s also said something about a sculpture so we\'re also setting up equipment to get a digital 3D model of you too. She\'s the real eccentric and crazy type, but the money\'s pretty good."');
  scene.text('"Hmmm…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob2 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! Go to set 32, the client is waiting for you there. Just tell him you\'re the model he\'ll be working with today and follow his instructions."');
    scene.actions([
      { label: 'Go to set 32', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You go to set 32 and find a short woman wearing a black turtleneck and a soft flat-crowned hat. Standing next to him is lean but muscular young man, who is naked like you and is the owner a large flaccid cock hanging between his legs.');
    scene.text('<i>Really? A beret? Talk about cliché.</i>');
    // TODO-QSP: dynamic text: Walking up to the woman, you introduce yourself. "Hello ma''am, I''m <<$model[''...
    scene.text(`Walking up to the woman, you introduce yourself. "Hello ma'am, I'm ${((st as any).model ?? 0)?.['firstname'] ?? ''}. I'll be your model for today."`);
    scene.text('"Ahh! Zer yu are! I haff been waiting for almost five minutes! Zis is almost unacceptable!" You\'re immediately taken aback by her words, both because of the clearly foreign accent and the rudeness that accompanies it.');
    scene.text('"I\'m sorry, I only jus-"');
    scene.text('"Enough talk! We vazte time! Quickly! Get on zis and kneel down!"');
    scene.actions([
      { label: 'Do as she says', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You step up onto a platform which is really a large mattress with a cover on it. Doing as she instructs, you get down onto your knees, leaning forward and supporting your weight with your hand. The young naked man kneels behind you and holds you by the shoulder, pressing his hips into yours. Despite being in such a sexual position, you feel the man\'s cock is still flaccid, hanging down and bouncing lightly between your thighs.');
    scene.text('The woman circles around you for several minutes, hand on her chin, judging your pose. She crawls onto the mattress beneath you, looking up between your legs at your pussy, her assistant\'s still flaccid cock pressing awkwardly against it. You blush at her straightforward nature, feeling a tingling between your legs where her gaze wanders.');
    scene.text('At the same time, you can\'t help but think to yourself, <i>Really? He\'s still soft after all this? I mean, damn! Kind of makes me feel bad about myself to be honest… Am I not hot enough to get a guy hard when his dick is practically rubbing up against my pussy?</i>');
    scene.text('"No!"');
    scene.text('The woman\'s shout snaps you back to attention, wondering what is wrong. "Zis is not good enough! Not passionate enough! I cannot produce mah mazterpiece like zis! I shall require full penetration! Alexhandar! Please put your penis inside her."');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'What?!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'What?!', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"What?!" you shriek.');
    scene.text('At the woman\'s command, you feel the man\'s cock immediately stiffen, going from flaccid to rock-hard and rubbing against your abdomen in two seconds flat. He starts to pull back and you feel his tip scraping backwards over the top of your stomach.');
    scene.actions([
      { label: 'Wait! Wait! Wait!', handler: (st: GameState) => {
    scene.text('"Wait! Wait! Wait!" you shout. Alexander pauses behind you, the tip of his member poised, hovering, right in front of the entrance to your pussy.');
    scene.text('Hands on her hips, the woman leans forward, frowning at you with obvious displeasure.');
    scene.text('"Vell? Vhat are we waiting for?"');
    scene.text('"You can\'t do this!"');
    scene.text('"And vhy not?"');
    if (((st as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.actions([
        { label: 'I\'m a virgin!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"I\'m a virgin! I\'ve never had sex before! I can\'t lose my virginity like this to some guy I\'ve never met before in the middle of some modelling job!"');
    scene.text('The woman\'s eyes widen as you say this.');
    scene.text('"You are a… virgin?" she asks, slowly');
    scene.text('"Yes! You understand now, right?"');
    scene.text('The woman begins laughing and jumping up and down with excitement. You stare at her in confusion, your mouth agape.');
    scene.text('"Yez! Yez! A virgin! That\'s what this piece was truly missing! Vhy did I not think of zis before? Yez! Zis is the key to my mazterpiece! I shall call it, \'Ze Final Flowher.\' No, vait, perhaps, \'Torn Petal.\' It iz perfhect!"');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Yell at her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Yell at her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"Hey…! HEY!!" you yell at her.');
    scene.text('She stops her maniacal laughing and finally looks back at you.');
    scene.text('"That\'s not the point! The point is that I don\'t want to lose my virginity right now!" The woman frowns at you, this time with disappointment.');
    scene.text('"And vhy not? Iz it becauze you have not found ze right man? Not to worry, Alexhandar iz great man. I know. He iz my zon. Zatisfies many girls. He vill-"');
    scene.text('"NOOOO!!!" you yell at her again to stop her ranting. "I\'m saying I don\'t want to lose my virginity right now and in this way! Besides, I didn\'t sign up for this! I thought I was just supposed to be posing as an art model, WITHOUT HAVING SEX WITH ANYONE!" you scream the last part, anticipating her objection that you can still be posing with a dick up your ass.');
    // TODO-QSP: dynamic text: She stares at you flatly. "Okay, how about zis? I vill pay you an extra <<$func(...
    scene.text(`She stares at you flatly. "Okay, how about zis? I vill pay you an extra ${qspFunc(s, 'money', 'string_profit', 30000)} on top of ze already agreed upon fee if you do zis for me. Not an inzignificant amount of money, but we muzt make zacrifices for great art! I vill zacrifice my money to you, if you zacrifice your virginity for me. Do ve have a deal?"`);
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, I\'m not losing my virginity', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, I\'m not losing my virginity', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).fine_art_deal = 3;
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"No," you say, standing firm. "I\'m not about to lose my virginity just for a modelling job. You\'ll have to make do with that, or get another model who\'s willing to <b>whore herself</b> out for your art."');
    scene.text('"Ugh," she rolls her eyes and waves her hand dismissively. "Vine, vine. I vill not take your virginity. Ve are vasting too much time. But Alexhandar, maintain your erection. I cannot have a flaccid penis in a piece that iz zat iz zupposed to exude <i>lust</i> and <i>eroticism!</i>"');
    scene.text('You breathe out a sigh of relief and resume the pose she wants, waiting for further instruction.');
    scene.actions([
      { label: 'Continue', goto: ['foto_events', 'fine_art2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take the deal', handler: (st: GameState) => {
    (st as any).fine_art_deal = 1;
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    // TODO-QSP: dynamic text: You gulp. <<$func(''money'', ''string_profit'', 30000)>>… That''s a lot of money...
    scene.text(`You gulp. ${qspFunc(s, 'money', 'string_profit', 30000)}… That's a lot of money…`);
    scene.text('"I\'ll take the deal."');
    scene.text('The woman grins widely.');
    scene.text('"Exzellent." She pulls you back into the posture she wants you in, and giving you new instructions, Alexander\'s cock still hovering outside your entrance. "Do not hide your feelingz. Let them bubble to ze top. Let your emotions be vizible and zelf-evident. But maintain ze posture and hold still, or ze 3D scanner vill not capture you accurately. You vill not be paid if I do not get vhat I am here for. Do you underztand?"');
    scene.text('You nod, swallowing one more time. The woman moves off to the side, and making sure all the equipment is set, she picks up a small device. Some kind of remote camera switch, you guess.');
    scene.text('"And… now!"');
    scene.actions([
      { label: '"AHH!!"', goto: ['foto_events', 'fine_art2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Resign yourself to your fate', handler: (st: GameState) => {
    (st as any).fine_art_deal = 2;
    scene.img('images/locations/city/citycenter/photo/special/art1.jpg');
    scene.text('You look on in horror with the realization that there is nothing you can do to convince this woman to change her mind. Her obsession with art is too great.');
    scene.text('She excitedly shouts instructions at you and her assistant.');
    scene.text('"Do not hide your feelingz! Let them bubble to ze top! Let your emotions be vizible and zelf-evident! But maintain ze posture and hold still, or ze 3D scanner vill not capture you accurately. Are ve ready? Good! Do it! Do it now Alexhandar!"');
    scene.text('And he thrusts his cock inside you.');
    scene.actions([
      { label: '"AHH!!"', goto: ['foto_events', 'fine_art2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'m not about to get fucked just because you asked', handler: (st: GameState) => {
    (st as any).fine_art_deal = 3;
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"Because I\'m not about to let some guy shove his dick in me just because you told him to!"');
    scene.text('The woman sniffs in indignation. "He iz not just \'zome man.\' He iz my zon. Very good man."');
    scene.text('"I don\'t care who he is, he\'s not putting his dick inside me! Either deal with that or get yourself a new model."');
    scene.text('"Ugh," she rolls her eyes and waves her hand dismissively. "Vine, vine. Ve are vasting too much time. But Alexhandar, maintain your erection. I cannot have a flaccid penis in a piece that iz zat iz zupposed to exude <i>lust</i> and <i>eroticism!</i>"');
    scene.text('You huff in annoyance, but the matter resolved, you resume the pose she wants and wait for further instruction.');
    scene.actions([
      { label: 'Continue', goto: ['foto_events', 'fine_art2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Say nothing, do as instructed', handler: (st: GameState) => {
    (st as any).fine_art_deal = 4;
    qspGoto(st, 'foto_events', 'fine_art2');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFineArt2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Alexander', 27);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).dick = 34;
  (s as any).modelpayfin = 2000 + (((s as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
  ((s as any).modelfoto = (s as any).modelfoto ?? {})['nip'] = ((s as any).modelfoto['nip'] ?? 0) + (1);
  ((s as any).modelfoto = (s as any).modelfoto ?? {})['topless'] = ((s as any).modelfoto['topless'] ?? 0) + (1);
  ((s as any).modelfoto = (s as any).modelfoto ?? {})['nude'] = ((s as any).modelfoto['nude'] ?? 0) + (1);
  ((s as any).modelfoto = (s as any).modelfoto ?? {})['pussy'] = ((s as any).modelfoto['pussy'] ?? 0) + (1);
  qspCall(s, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 11) + 10));
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'fame', 'city', 'modelling', 'medium');
  } else {
    qspCall(s, 'fame', 'city', 'modelling', 'small');
  }
  if (((s as any).fine_art_deal ?? 0) === 1  ||  ((s as any).fine_art_deal ?? 0) === 2) {
    qspCall(s, 'arousal', 'vaginal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/special/art1.jpg');
    scene.text('"AHH!!!"');
    scene.text('You shriek in pain as Alexander thrusts his enormous 34 cm cock inside you. Far too big for your virgin pussy, only about half of his length fits inside you. The woman shakes her head. ');
    scene.text('"No, no, Alexhandar. It iz no good like zat. All ze way inside." He immediately does as instructed, gripping your shoulder and he pulling you back while simultaneously pushing his hips forward. You gasp for breath, eyes watering, as he slowly drives the entire length of his cock inside your pussy centimeter by centimeter, stretching you to a breaking point. When his cock is fully enveloped and balls are brushing up against your clit, you hear the woman again.');
    scene.text('"Yez! Yez! Just like zat! Now hold zat pozition just like zat!" In the corner of your tear-blurred vision, you see her click the remote and a ring of cameras flash around you, snapping simultaneously. Then, a red laser begin to scan you from bottom to top. The scanner works at an excruciatingly slow pace. It takes all of your willpower not to cry out, quiver, or scream in pain. You bite down hard on your lip, tears streaming down your face as it the only facial expression you can bear to maintain without moving.');
    scene.text('The scan continues but at the edge of your hearing you can perceive a faint scratching sound. After a few minutes, you sink into despair when you realize that it\'s the sound of drawing. She expects you to hold this position, hold this monstrously huge cock in your pussy without flinching. You want to whimper but fearing retribution you just bite down on your lip harder.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    (st as any).model_week = (((st as any).daystart ?? 0) - ((st as any).week ?? 0)) / 7;
    if (((st as any).fine_art_deal ?? 0) === 1) {
      qspCall(st, 'money', 'earn', 30000);
      ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0) + 30000);
    }
    if (((st as any).art_resign ?? 0) === 1) {
      qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    }
    (st as any).minut = ((st as any).minut ?? 0) + 90;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/city/citycenter/photo/special/art1.jpg');
    scene.text('You spend the next ninety minutes holding the position for the artist woman. The scan finishes in the first 15 minutes but the client insists on her models continuing to stand stock still until her drawing is completed.');
    scene.text('"You cannot zubstitute a perzon for pictures once you have already begun with a living creature. Art iz about <i>life</i>. Without ze proper reference, you cannot truly capture life\'s essence." Alexander, the perfect model, literally allows you no wiggle room. His grip is like iron, holding you tight against him, maintaining his pose with perfect posture. Even his cock is unflinching, neither throbbing nor softening even for a single second. For all 90 minutes it maintains peak hardness, like a sword stabbing into you, threatening to tear you in half at any moment.');
    scene.text('Finally, she calls for a stop and allows you to be released from your position. You lean forward, easing yourself off of Alexander\'s enormous cock. Your pussy releases it with a pop and you feel hollow, an enormous aching void between your legs. You feel something leaking out and looking back, you see the red drops of your virgin blood, running down your thighs, staining the sheet beneath you. Alexander\'s cock is coated in it as well, glistening crimson. Looking to the side, you see the woman studying her drawing and looking back to a computer screen, comparing the two.');
    scene.text('"I think I shall make zis into a sculpture. This piece must be chiseled from marble to truly encapsulate ze glory of zis zubject!" She snaps her fingers twice and staff come out to begin collecting the equipment and putting it away. The woman herself walks over and reaches into her purse.');
    if (((st as any).fine_art_deal ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Zis is for ze job," she says, placing wad of <<$func(''money'', ''string_profit...
      scene.text(`"Zis is for ze job," she says, placing wad of ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} into your hand. "And zis, is for your contribution to art!" she says, placing in your other hand a large stack of bills equaling to ${qspFunc(s, 'money', 'string_profit', 30000)}. "Zis vill be a famous piece to go down in the history of ze world! Do not forget and take pride in your part of what began here today!"`);
    }
    if (((st as any).fine_art_deal ?? 0) === 2) {
      // TODO-QSP: dynamic text: "Zis is for ze job," she says, placing wad of <<$func(''money'', ''string_profit...
      scene.text(`"Zis is for ze job," she says, placing wad of ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} into your hand. "And be proud," she says, placing her other hand on your shoulder. "Zis vill be a famous piece to go down in the history of ze world! One day, vhen you see ze statue, remember and be proud of ze young woman whose loss of virtue vas immortalized in stone. Remember and <i>be proud.</i>"`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('As the people around you pack up the equipment and depart, the artist and Alexander disappearing with them, you stand there, feeling the throbbing ache between your legs and the blood still dripping down your thighs. While you stand, all you can do is stare at the stacks of cash you have been given; the money that bought your virginity. And while you stand and stare, you think to yourself…');
    scene.text('<i>Is this what my virginity was worth?</i>');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).fine_art_deal = 0;
    qspGoto(st, 'foto', 'studio');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fine_art_deal ?? 0) === 3) {
      ((s as any).modelfoto = (s as any).modelfoto ?? {})['shoots'] = ((s as any).modelfoto['shoots'] ?? 0) + (1);
      qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
      ((s as any).modelfoto = (s as any).modelfoto ?? {})['earnings'] = ((s as any).modelfoto['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
      (s as any).minut = ((s as any).minut ?? 0) + 90;
      scene.img('images/locations/city/citycenter/photo/special/art1.jpg');
      scene.text('You hold the position with Alexander, feeling his thick cock extending out under you, brushing against your thighs and stomach. The woman clicks a button and cameras flash all around you and the red line of scanners begin to slowly ascend your body from bottom to top. As the scanner moves, you see her sit down in front of an easel from the corner of your eye and begin to draw.');
      scene.text('90 minutes pass before she is finished sketching. When she is finished, she compares her sketch to a nearby computer screen, still trying to decide which form she wants her art to take. Shaking her head, she calls an end to the shoot and you are allowed to break from your position, stretching your stiff muscles.');
      // TODO-QSP: dynamic text: The woman steps forward, reaching into her purse to pull out <<$func(''money'', ...
      scene.text(`The woman steps forward, reaching into her purse to pull out ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin || ''))}, which she places in your hand.`);
      scene.text('"I am disappointed with your commitment," she says. "Great people should be willing to sacrifice for the sake of great art. I vish you vere one of those people." She shakes her head and walks away, snapping her fingers twice and causing her crew to start packing up equipment.');
      // TODO-QSP: dynamic text: You watch them leave, the money from the job in hand and your ' + iif(stat['thin...
      scene.text('You watch them leave, the money from the job in hand and your ' + ((((s as any).stat ?? 0)?.['think_virgin'] === 1) ? ('virginity') : ('dignity')) + ' still intact.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).fine_art_deal = 0;
    qspGoto(st, 'foto', 'studio');
  } },
      ]);
    } else {
      if (((s as any).fine_art_deal ?? 0) === 4) {
        qspCall(s, 'arousal', 'vaginal', 1);
        qspCall(s, 'stat', '');
        ((s as any).modelfoto = (s as any).modelfoto ?? {})['shoots'] = ((s as any).modelfoto['shoots'] ?? 0) + (1);
        // TODO-QSP: gs 'money', 'earn', modelpayfin + 2000
        ((s as any).modelfoto = (s as any).modelfoto ?? {})['earnings'] = ((s as any).modelfoto['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0) + 2000);
        (s as any).minut = ((s as any).minut ?? 0) + 90;
        scene.img('images/locations/city/citycenter/photo/special/art1.jpg');
        if (((s as any).pcs_vag ?? 0) <= 10) {
          // TODO-QSP: dynamic text: Alexander pushes himself inside you. You can''t help but release a small grunt o...
          scene.text(`Alexander pushes himself inside you. You can't help but release a small grunt of discomfort as his 34 cm cock stretches your ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy. It takes a few tries to get his exceptional length and girth all the way inside before settling back into the exact posture you were instructed to hold. The woman clicks a button and cameras flash all around you and the red line of scanners begin to slowly ascend your body from bottom to top. As the scanner moves, you see her sit down in front of an easel from the corner of your eye and begin to draw.`);
          scene.text('90 minutes pass before she is finished sketching, your pussy more than a little bit uncomfortable from being overstuffed with Alexander\'s enormous cock. When she is finished, she compares her sketch to a nearby computer screen, still trying to decide which form she wants her art to take. Clapping her hands, she calls an end to the shoot and you are allowed to break from your position, stretching your stiff muscles and sliding off of Alexander\'s cock. Its absence leaves you feeling quite empty.');
        } else {
          if (((s as any).pcs_vag ?? 0) > 10  &&  ((s as any).pcs_vag ?? 0) <= 15) {
            // TODO-QSP: dynamic text: Alexander pushes himself inside you. You exhale slowly, relaxing to accommodate ...
            scene.text(`Alexander pushes himself inside you. You exhale slowly, relaxing to accommodate the enormous 34 cm cock sliding your ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy. You give yourself a moment to adjust to his sizable length and girth before settling back into the exact posture you were instructed to hold. The woman clicks a button and cameras flash all around you and the red line of scanners begin to slowly ascend your body from bottom to top. As the scanner moves, you see her sit down in front of an easel from the corner of your eye and begin to draw.`);
            scene.text('90 minutes pass before she is finished sketching, your pussy snuggly filled by Alexander\'s cock for the duration. When she is finished, she compares her sketch to a nearby computer screen, still trying to decide which form she wants her art to take. Clapping her hands, she calls an end to the shoot and you are allowed to break from your position, stretching your stiff muscles and sliding off of Alexander\'s cock. Its absence leaves you feeling quite empty.');
          } else {
            if (((s as any).pcs_vag ?? 0) > 15  &&  ((s as any).pcs_vag ?? 0) <= 25) {
              // TODO-QSP: dynamic text: Alexander pushes himself inside you. You relax, letting the enormous 34 cm cock ...
              scene.text(`Alexander pushes himself inside you. You relax, letting the enormous 34 cm cock slide into your ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy with relative ease. You check your position, making sure you can feel his balls against your clit and that he's all the way inside before settling back into the exact posture you were instructed to hold. The woman clicks a button and cameras flash all around you and the red line of scanners begin to slowly ascend your body from bottom to top. As the scanner moves, you see her sit down in front of an easel from the corner of your eye and begin to draw.`);
              scene.text('90 minutes pass before she is finished sketching, your pussy comfortably filled by Alexander\'s cock for the duration. When she is finished, she compares her sketch to a nearby computer screen, still trying to decide which form she wants her art to take. Clapping her hands, she calls an end to the shoot and you are allowed to break from your position, stretching your stiff muscles and sliding off of Alexander\'s cock. Its absence leaves you feeling quite empty.');
            } else {
              // TODO-QSP: dynamic text: Alexander pushes himself inside you. His enormous 34 cm cock slides into you eas...
              scene.text(`Alexander pushes himself inside you. His enormous 34 cm cock slides into you easily, your ${((s as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy readily stretching to accommodate his sizable length and girth. You check your position, making sure you can feel his balls against your clit and that he's all the way inside before settling back into the exact posture you were instructed to hold. The woman clicks a button and cameras flash all around you and the red line of scanners begin to slowly ascend your body from bottom to top. As the scanner moves, you see her sit down in front of an easel from the corner of your eye and begin to draw.`);
              scene.text('90 minutes pass before she is finished sketching, your pussy satisfyingly filled by Alexander\'s cock for the duration. When she is finished, she compares her sketch to a nearby computer screen, still trying to decide which form she wants her art to take. Clapping her hands, she calls an end to the shoot and you are allowed to break from your position, stretching your stiff muscles and sliding off of Alexander\'s cock. Its absence leaves you feeling quite empty.');
            }
          }
        }
        // TODO-QSP: dynamic text: "Zis is for ze job," she says, placing wad of <<$func(''money'', ''string_profit...
        scene.text(`"Zis is for ze job," she says, placing wad of ${qspFunc(s, 'money', 'string_profit', ((s as any).modelpayfin || ''))} into your hand. "And zis, is for your contribution to art!," she says, placing another ${qspFunc(s, 'money', 'string_profit', 2000)} on top. "It iz always so much better to be able to work with models who do as instructed. Zo many do not understand ze nature of art. Take zis with my compliments." With that, she snaps her fingers twice and her crew immediately starts packing up equipment.`);
        if (((s as any).pcs_vag ?? 0) <= 10) {
          scene.text('You watch them leave, the money from the job in hand, feeling good about the day\'s work. Though your pussy is a bit sore.');
        } else {
          if (((s as any).pcs_vag ?? 0) <= 15) {
            scene.text('You watch them leave, the money from the job in hand, feeling good about the day\'s work. Though your pussy does feel a bit stretched now.');
          } else {
            if (((s as any).pcs_vag ?? 0) <= 25) {
              scene.text('You watch them leave, the money from the job in hand, feeling good about the day\'s work. Though your pussy does feel a bit empty now.');
            } else {
              scene.text('You watch them leave, the money from the job in hand, feeling good about the day\'s work. Though your pussy does feel a bit empty now. It\'s not often you get filled by such a magnificent cock.');
            }
          }
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).fine_art_deal = 0;
    qspGoto(st, 'foto', 'studio');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterModernArt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Modern art project?" you ask. "What\'s this one about?"');
  scene.text('"Some rich university student wants to use some of our girls as the subject of her art classes\' next exhibition. The way she worded included a lot of elaborate and confusing artsy nonsense words but to cut to the chase, she basically wants you and another girl to sixty-nine each other. You don\'t actually have to eat each other out for real obviously but fair warning that if you take the job, your face is going to be close to another girl\'s muff and someone else\'s is going to be close to yours."');
  scene.text('"Hmmm…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob3 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! Go to set 17. The client will meet you there."');
    scene.actions([
      { label: 'Go to set 17', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You go to set 17 as instructed and find a pretty teenage girl standing with one of the other models who works here. You can tell the first girl isn\'t a model here as she\'s still fully dressed in casual but expensive looking clothing, not the kind that anybody models here. As you approach, you hear her talking.');
    scene.text('"…\'s fine that they don\'t let you wear clothes here. I wouldn\'t either if I were surrounded by pretty girls all day. Give me something good to look at while I work, know what I\'m sayin\'? But damn! Would it kill them to turn up the heat in here? I mean, do you <i>see</i> my nips right now? They feel like could rip through my shirt at any moment! And yours look hard enough to take my eye out! But, oh em gee. I love your nails. Where did you get that polish? Oh! You\'re here!" she says, interrupting herself when she finally sees you coming. "Are you the other model I asked for?"');
    scene.text('"Yeah, that\'s me!"');
    scene.text('"Cool! Guess we\'ll get started then. Now, if the two of you could just get up on this platform together…"');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/art2.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 90;
    (st as any).modelpayfin = 2000 + (50+(Math.floor(Math.random() * 9) + 1)*(Math.floor(Math.random() * 8) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nude'] = ((st as any).modelfoto['nude'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 2) + 9));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    (st as any).modern_art_projet = 1;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    scene.text('The girl has you and the other model lie down on your sides and then wrap your legs your heads, both of you grabbing the other\'s foot with your hand in a way that allows you to perfectly mirror each other\'s position. At the client\'s insistence, you bury your face between the other girl\'s legs. The aroma of her sex fills your nostrils and you can feel her breath on your own pussy as well.');
    scene.text('"Cool!" the client squeals excitedly. "Now sit just like that and let me get my camera!"');
    scene.text('She starts moving about all around you, taking pictures from various angles and moving stands around, changing the lighting scheme. At one point, you hear a snapshot that sounds more like a phone sound effect than a DSLR and you think that she might have just taken a selfie on set with you. Other than that, the next hour and a half passes relatively uneventfully for you. But being stuck in a sexual position for so long takes its toll on you. The tingling of breathing on your pussy is tantalizing, and you feel an uncontrollable heat emanating from between your legs. Flushing with embarrassment, you hope the other model doesn\'t notice your arousal but judging by the glistening wetness on the pussy lips in front of you, you don\'t think that\'s very likely.');
    scene.text('The shoot finally ends and you and the other model untangle each other from one another, stretching to ease your cramped muscles. The two of you briefly share a look together, before blushing hard and both looking away.');
    scene.text('"Thanks guys! You two were great! I\'m like, totally gonna get an A from my professor for this." The shoot over, the client departs and you collect your money from the manager with the other model. Holding your cash, you glance at each other one more time before blushing again and both making excuses about needing to be elsewhere in the studio. This isn\'t something that\'s going to be forgotten any time soon…');
    // TODO-QSP: dynamic text: You earned <<$func(''money'', ''string_profit'', modelpayfin)>> for this job.
    scene.text(`You earned ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for this job.`);
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAphroditeAdvert(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Aphrodite Advert?" you ask. "Aphrodite like \'this studio\' Aphrodite?"');
  scene.text('"Actually, Aphrodite is just a modelling agency. Though most of you never leave the studio, Aphrodite\'s main business is renting you girls out to people who want young, beautiful models for their projects. This building and the non-models who work here are actually a distinct sub-entity. People pay us for access to our girls and then for a little extra, we offer them the studio as a location to shoot in as well. If they shoot in the studio, they can purchase a special add-on and we\'ll even provide a full camera crew. For such convenience, people rarely say no. Lets us make our money coming <i>and</i> going. Anyways, about the job, it\'s always good to keep updating our adverts to let potential clients know who\'s currently on staff. And since you girls pretty much <i>are</i> the business, we advertise by taking group pictures of you. Having only one model on a banner ad or billboard or poster is wasting space. Doesn\'t show the diverse options the agency has to offer. So we take group photos instead. Anyways, what do you think? Being featured in one of these ads is likely to increase your profile pretty well. People outside the city might even recognize you."');
  scene.text('"Hmmm…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob4 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! Go to set 23 and join the other girls. The head photographer will tell you what to do from there."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).modelpayfin = 1000;
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nude'] = ((st as any).modelfoto['nude'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 10) + 1));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'large');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    }
    scene.img('images/locations/city/citycenter/photo/special/group.jpg');
    scene.text('You go to the designated set and find the other girls waiting there, idling chatting to each other and gossiping. You join them and when the head photographer shows up, he begins to give you all instructions.');
    scene.text('The next two hours are spent being posed, positioned, and re-positioned into various arrangements and groupings, ensuring that the advertising department has a diverse set of options to work with.');
    scene.text('When the shoot ends, a manager calls for all you girls to line up, handing each of you an envelope of cash as you walk by him.');
    // TODO-QSP: dynamic text: You are paid <<$func(''money'', ''string_profit'', modelpayfin)>> for the job to...
    scene.text(`You are paid ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for the job today, which isn't very much as far as the usual payment goes at the studio. But the manager did tell you up front, this job doesn't pay out so much in money for you as it does for publicity.`);
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIndependentArt(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Independent art project?" you ask. "What\'s this one about?"');
  scene.text('"Some independent photographer wants to use some of our girls in some kind of fancy time or art piece or something like that, something he\'s been commissioned to do I think. Anyways, he wants to do the direction yourself so I don\'t know the nitty gritty details. As far as I know, it\'s mostly just you putting your hair up and wearing some kind of fancy dresses while he -I believe the request reads- \'elegantly poses\' you."');
  scene.text('"Hmmm…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob5 = 0;
    scene.text('"I\'d like to do this one."');
    scene.text('"Great! Go to set 8. The client will be waiting for you there with some other girls. Just do as he says and come see me for the payment after."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    (st as any).hpingripw = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    (st as any).modelpayfin = 1600 + (((st as any).modelpay ?? 0)) + (35*(Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 7) + 2));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    scene.img('images/locations/city/citycenter/photo/special/art3.jpg');
    scene.text('You go to the designated set where you find several other girls dressed in graceful and sophisticated clothing that is also completely sheer. At your approach, you are directed to put on one of these outfits yourself and get your hair done by the team of the makeup artists present.');
    // TODO-QSP: dynamic text: The next two hours after that are spent being posed quite elegantly, as promised...
    scene.text(`The next two hours after that are spent being posed quite elegantly, as promised by the request. The shoot ends and you go back to the manager who pays you ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for the job.`);
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDesignerWedding(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Designer wedding dress?" you ask. "We do this kind of work?"');
  scene.text('"When it\'s this kind of designer we do. It\'s another one of those high fashion type things, taking a look at the bridal fashion, looking to make it more dramatic, more exciting, more sexual. Anyways, bottom line, I wouldn\'t call this a \'dress.\' I\'d barely call it clothing actually. It\'s pretty much just gloves, stockings, and lingerie. I guess it\'s a little bit like a wedding dress in that it has a veil. Anyways, that\'s the request. Wear the stuff, show some skin, including pussy and tits (I don\'t know why), we take the pictures to send to her so she can share them with her designer friends. So, what do you say?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the list', goto: ['foto_events', 'list'] },
    { label: 'I\'d like to do this one', handler: (st: GameState) => {
    (st as any).specialjob6 = 0;
    scene.text('"Great! Go to set 12. The client will be waiting for you there with some other girls. Just do as he says and come see me for the payment after."');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    (st as any).modelpayfin = 1200 + (((st as any).modelpay ?? 0)) + (35*(Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['pussy'] = ((st as any).modelfoto['pussy'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 2));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    scene.img('images/locations/city/citycenter/photo/special/wedding.jpg');
    scene.text('You go to set 12 where you put on the "dress" which really <i>is</i> just stockings, gloves, and a veil. You and the photographer spend about an hour in a few poses, including a few that have pulled back the bra and panties before wrapping up.');
    // TODO-QSP: dynamic text: The shoot ends and you go back to the manager who pays you <<$func(''money'', ''...
    scene.text(`The shoot ends and you go back to the manager who pays you ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for the job.`);
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTopless1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.text('"I\'ve been looking for you."');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What\'s up?"');
    // TODO-QSP: dynamic text: "You''re starting to make a name for yourself around here <<$model[''firstname''...
    scene.text(`"You're starting to make a name for yourself around here ${((st as any).model ?? 0)?.['firstname'] ?? ''}. I'm here to talk to you about a special offer."`);
    if (((st as any).casting ?? 0) > 0  &&  (!((st as any).first_fame_event ?? 0))) {
      scene.text('"Special offer? Like another commercial?"');
      scene.text('"No, no. Not quite like that. We\'ve been getting a lot of positive feedback about your work. One of the higher ups in the studio asked us to put out a special issue that features exclusively you if you\'re up for it. We wanted to do something special so the plan is to do it outside the studio in a place with more natural light. It\'ll just be a topless shoot and will take a bit longer than usual to get there and set up, but we\'ll pay you for it in addition to your normal once a week contract. What do you say? Are you in?"');
      if ((!((st as any).first_fame_event ?? 0))) {
        (st as any).first_fame_event = 1;
      }
      qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: '"No thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '"No thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m happy just doing what I\'m doing if that\'s alright."');
    scene.text('"That\'s a shame. Well, maybe some other time then. I\'ll tell the producer you said no."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: '"Yeah! Let\'s do it!"', handler: (st: GameState) => {
    (st as any).first_fame_event = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yeah! Let\'s do it!" you say excitedly.');
    scene.text('"Great! Do your makeup and put your clothes back on, we\'ll leave as soon as you\'re ready.');
    scene.actions([
      { label: 'Continue', goto: ['foto_events', 'topless1.1'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"What kind of offer?"');
      scene.text('We\'ve been getting a lot of positive feedback from subscribers about your work so a producer asked us to put out a special issue that features exclusively you. We wanted to do something special so the plan is to do it outside the studio in a place with more natural light. It\'ll just be a topless shoot and will take a bit longer than usual to get there and set up, but we\'ll pay you for it in addition to your normal once a week contract. What do you say? Are you in?"');
      qspCall(st, 'willpower', 'exhib', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: '"No thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '"No thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m happy just doing what I\'m doing if that\'s alright."');
    scene.text('"That\'s a shame. Well, maybe some other time then. I\'ll tell the producer you said no."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: '"Yeah! Let\'s do it!"', handler: (st: GameState) => {
    (st as any).first_fame_event = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yeah! Let\'s do it!" you say excitedly.');
    scene.text('"Great! Do your makeup and put your clothes back on, we\'ll leave as soon as you\'re ready.');
    scene.actions([
      { label: 'Continue', goto: ['foto_events', 'topless1.1'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTopless1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 5;
  (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
  qspCall(s, 'outfit', 'restore', 'foto');
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/misc/dress_1.mp4');
  scene.text('You run to your makeup station and get your makeup straighted out before running back to the dressing room and throwing your clothes on.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/down.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.text('You hop in the van they have prepared and drive to a house with large windows. You get in the clothes they want you to and begin the photo shoot.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fame/fametopless1.mp4');
    scene.text('They have you start in an oversized hoodie, teasing the camera with your breasts until you finally pull it all the way off and bare your shoulders.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/fametopless2.mp4');
    scene.text('The photographer has you play with some of the pillows on the furniture and then in a moment of spontaneous glee you drop kick it across the room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/fametopless3.mp4');
    scene.text('Afterwards, you drop back down on the sofa, basking in the warmth of the sun.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/fametopless4.mp4');
    scene.text('To end the shoot, you wiggle around on your back, letting gravity do the work as your breasts jiggle enticingly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/fametopless5.mp4');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    scene.text('"Okay we\'re all done here," the photographer says. "Did you have fun?"');
    scene.text('You laugh hysterically for a moment and smile at him. You <i>did</i> have a lot of fun. "Even though I\'ve been a model for a little while, I\'m not sure I\'ve ever done anything like this."');
    scene.text('"Like what?" the photographer asks, confused.');
    scene.text('"Like this!" you laugh as you move your shoulders back and forth and make your breasts jiggle again.');
    scene.actions([
      { label: 'Finish up and go back', handler: (st: GameState) => {
    (st as any).modelpayfin = 2500 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    qspCall(st, 'outfit', 'restore', 'foto');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 8));
    qspCall(st, 'fame', 'city', 'modelling', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    // TODO-QSP: dynamic text: You get dressed again while they load everything back into the van and then you ...
    scene.text(`You get dressed again while they load everything back into the van and then you all drive back to the studio. They drop you on the curb with your pay of ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for today's work. You can see there's even a little extra!`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'city_center', '');
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

function enterPool1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.text('"I\'ve been looking for you."');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What\'s up?"');
    if (((st as any).fame ?? 0)?.['city_modelling'] < 100) {
      scene.text('"We\'ve been hearing good things about you lately. Even though you\'re pretty new to the industry, we keep hearing your name pop up. Must mean that you\'re starting to get recognized and asked for. So that being said, we\'d like to do an offsite shoot today to feature you in an upcoming special issue."');
    } else {
      if (((st as any).fame ?? 0)?.['city_modelling'] >= 100  &&  ((st as any).fame ?? 0)?.['city_modelling'] < 200) {
        scene.text('"You\'re really starting to make a name for yourself. We\'ve even had a few journalists come to the studio asking about you. So that being said, we\'d like to do an offsite shoot today so we can feature you in an upcoming special issue.""');
      } else {
        if (((st as any).fame ?? 0)?.['city_modelling'] >= 200) {
          scene.text('"I was hoping to get you for a shoot today. We have an upcoming special issue and we wanted you to feature in it so we can put your name on the cover to increase sales."');
        }
      }
    }
    scene.text('"What kind of shoot?"');
    if (((st as any).fame ?? 0)?.['city_modelling'] < 200) {
      scene.text('"A nude pool shoot with you and a few of the other name girls we have here. You\'ll all have equal part in it but you\'ll all also get your own exclusive sections within the spread. This won\'t count as your weekly shoot so you\'ll get paid for it and it\'s sure to give you a bump of fame as well. How about it?"');
    } else {
      if (((st as any).fame ?? 0)?.['city_modelling'] >= 200) {
        scene.text('"A nude pool shoot with you and a few rising girls. We\'re hoping that the people who read the issue for you will help get exposure to these other girls, increase their profile. Even so, it\'ll still be good publicity for you too. You\'ve been working with us long enough that you know the drill and you\'ll get paid for this. Are you in?"');
      }
    }
    if (((st as any).fame ?? 0)?.['city_modelling'] < 100) {
      qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: '"I\'m not interested in getting famous"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '"I\'m not interested in getting famous"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m not that interested in getting famous. I\'m really only in this for the money and I don\'t want my name being spread around too much."');
    scene.text('"Okay. I understand. Maybe next time."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
    }
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Sorry, I had other plans"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Sorry, I had other plans"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sorry, I was planning to do some other kinds of shoots today. I just don\'t want to today. Maybe next time?"');
    scene.text('"Okay, I understand. Maybe next time."');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"I\'d be happy to help"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I\'d be happy to feature in the special issue."');
    scene.text('"Okay, great! I\'ll be going ahead to set up but when you\'re ready you can get in the shuttle that\'s taking the other girls. I suspect when you get there we\'ll start shooting immediately so put your makeup on now."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.text('You go over to your station and touch up your makeup, make sure it\'s perfect. You see a few of the other girls who are participating in the shoot doing the same. Soon, everyone is ready and you all pile into a shuttle and drive to the shooting location.');
    scene.text('As promised, as soon as you all arrive, they\'re ready to start.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 180;
    (st as any).modelpayfin = 3000 + ((st as any).modelpay ?? 0) + (50*(Math.floor(Math.random() * 8) + 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nude'] = ((st as any).modelfoto['nude'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', 10);
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/citycenter/photo/fame/pool.mp4');
    scene.text('You spend various portions of the next few hours in and around the pool. Sometimes by yourself, sometimes with the other girls in the background. Eventually your portion of the shoot is over and you spend the rest of the time lazing on a chaise lounge while the other girls finish up. It\'s so comfortable, you couldn\'t care less when the photographers decide to snap a few more pictures of you and your invitingly exposed ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    // TODO-QSP: dynamic text: When it''s all over, the shuttle takes you and the other models back to the stud...
    scene.text(`When it's all over, the shuttle takes you and the other models back to the studio and drop you on the curb with your ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} earnings.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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

function enterTennis(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.text('"I\'ve been looking for you."');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What\'s up?"');
    if (((st as any).fame ?? 0)?.['city_modelling'] < 100) {
      scene.text('"You\'re pretty athletic right? We wanted a girl to help us with a sports issue. Your name has been coming up more and more often so we thought you\'d be a good choice."');
      scene.text('"What would I be doing? What sport?"');
      scene.text('"Tennis. We\'re doing a bit of video for this shoot and you\'d be doing tennis swings in slow motion. The thing is, we really do want someone who looks like they know what they\'re doing, so that\'s why we\'d like to have you over someone else. Think you\'re up for it? I think it would really increase your exposure and your profile."');
    } else {
      if (((st as any).fame ?? 0)?.['city_modelling'] >= 100) {
        scene.text('"You like tennis right? Some other magazines were talking about how much you liked the sport so we thought it\'d be good put out some special material featuring you doing some tennis swings. We\'re talking photography and video here. We think it\'d be good publicity for you. What do you think? Want to do it?"');
      }
    }
    if (((st as any).fame ?? 0)?.['city_modelling'] < 100) {
      qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: '"I\'m not actually that into tennis…"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '"I\'m not actually that into tennis…"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I\'m not actually that into tennis… I wouldn\'t really feel comfortable doing this."');
    scene.text('"Oh. Okay. Our mistake. Maybe we can do something else today."');
    scene.text('"Yeah. Maybe something else," you say as you walk into the main part of the studio with him.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
    }
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"I\'m not interested in getting famous"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Not today"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sorry, but I don\'t really want to do this today. I know you have to get the issue out so we can\'t really postpone it but maybe next issue?"');
    scene.text('"Yeah… Maybe next issue…"');
    scene.text('He seems really disappointed. You honestly feel kind of bad about it.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Sure, that sounds like fun"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure, that sounds like fun!"');
    scene.text('"Great!" he says. "If you go to your makeup station, we left you the stuff you need for the shoot. Meet at the white screen?"');
    scene.text('"Okay! See you there!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.text('You go over to your station and see what they left for you. You see sneakers and a skirt, a visor and a sweat band, and a racket. There is a noticeable lack of top or underwear. They didn\'t tell you this was going to be a topless shoot, but you guess you shouldn\'t be that surprised.');
    scene.text('You pull up the skirt and put on your makeup before heading over to the set.');
    scene.text('You do some practice swings while they\'re setting up a high speed camera to capture you in slow motion. Soon enough, they\'re ready to begin.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fame/tennis.mp4');
    scene.text('You give it your all and put in some vicious swings while one camera records and the other rapidly clicks.');
    scene.text('As you make your strokes, you feel your fluid and free-moving breasts follow through with them, reminding you why you usually wear a sports bra for this kind of thing.');
    scene.text('<i>And why they didn\'t give me one for this shoot…</i> you think to yourself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).modelpayfin = 2500 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    qspCall(st, 'exp_gain', 'mdlng', 8);
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    // TODO-QSP: dynamic text: Eventually the shoot is over and they thank you for agreeing to do the shoot for...
    scene.text(`Eventually the shoot is over and they thank you for agreeing to do the shoot for them. They thank you even more when they play it back in slow motion. After they're done time warp ogling your bouncing breasts, they pay you ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} and thank you one more time when they play the recordings back again.`);
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
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

function enterTopless2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.text('"I\'ve been looking for you."');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Are you free right now? We were going to do a sunny penthouse topless pool shoot off site but one of the girls who was scheduled for it cancelled on us. Wanted to know if you wanted to take her place? It\'ll be about 3 hours. You want in?"');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m happy with my schedule for today. You can ask one of the other girls."');
    // TODO-QSP: dynamic text: "Alright, I''ll see you around <<$model[''firstname'']>>."
    scene.text(`"Alright, I'll see you around ${((st as any).model ?? 0)?.['firstname'] ?? ''}."`);
    scene.text('You wave goodbye as he goes off to find another girl.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Sure, why not?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure, why not?"');
    scene.text('"Okay, great. Get changed and get ready, I\'ll meet you in the van."');
    scene.actions([
      { label: '"Alright, meet you there."', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
    scene.text('You head over to your makeup station to get yourself sorted out before getting changed and jumping in the van with the rest of the crew.');
    scene.text('When you get to the set, you strip down and get ready for the shoot.');
    scene.actions([
      { label: 'Do your job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    scene.img('images/locations/city/citycenter/photo/skill/skill_topless.mp4');
    scene.text('You spend two hours walking around, posing, and generally looking sexy for the camera on the sunny penthouse pool balcony.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).modelpayfin = 2000 + (((st as any).modelpay ?? 0) * 2) + (35*(Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    qspCall(st, 'fame', 'city', 'modelling', 'medium');
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 8));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('The shoot is over and you get dressed while the rest of the crew packs up. Since it looks like they\'ll be a while, you tell them you can just find you way back from here and you\'ll see them later.');
    // TODO-QSP: dynamic text: Just before you leave, a staff member comes over and pays you <<$func(''money'',...
    scene.text(`Just before you leave, a staff member comes over and pays you ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} for the day's work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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

function enterBeach2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, we''re looking for girls to do a topless beach s...
    scene.text(`"Hey ${((st as any).model ?? 0)?.['firstname'] ?? ''}, we're looking for girls to do a topless beach shoot today. It's a five hour job if you include the travel time but we'll pay you extra on top of what you'd normally get as a bit of compensation. So, do you want it?"`);
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m happy with my schedule for today. Five hours <i>is</i> kind of a long time."');
    scene.text('"Yeah, it\'s fine. Maybe next time."');
    scene.text('You wave goodbye as he goes off to find another girl.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Sure, sounds fun!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure, sounds fun!" you say. "After all, when else is a girl going to get paid to have some fun in the sun?"');
    scene.text('"Okay, I\'ll let the crew know you\'re in. I\'ll meet you in the car. Get your makeup on and everything, we\'ve got the stuff for you to wear for the shoot."');
    scene.actions([
      { label: 'Get ready and go', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/lake/lake2.jpg');
    scene.text('You do the works at your makeup station throw your clothes on and jump in the car which immediately speeds off to the lake.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'outfit', 'backup', 'foto');
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'clothing', 'wear', 'scandalicious_swimsuit', 40, 'borrowed');
    qspCall(st, 'stat', '');
    scene.text('While the crew sets up, you strip back down and trade your panties out for a bikini bottom before waiting on the crew to start.');
    scene.actions([
      { label: 'Start the shoot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 180;
    scene.img('images/locations/city/citycenter/photo/skill/skill_beach.mp4');
    scene.text('You have a great time spending the next three hours posing and playing in the water with your breasts exposed. There\'s one moment when a particularly big wave almost knocks your bottoms off and you end up mooning the crew for a couple seconds.');
    scene.text('As the sun is setting, the shoot is finally finished and you all get ready to pack up and leave.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).modelpayfin = 2500 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    // TODO-QSP: gs 'money', 'earn', modelpayfin + 1000
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0) + 1000);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    qspCall(st, 'fame', 'city', 'modelling', 'medium');
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 8));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'outfit', 'remove_backup', 'foto');
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('It\'s an hour later by the time you get back to the studio. The rest of the crew still has to unload but you\'re free to go as soon as you get paid.');
    // TODO-QSP: dynamic text: The one of the staff counts out your <<$func(''money'', ''string_profit'', model...
    scene.text(`The one of the staff counts out your ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} and you happily pocket it along with the additional ${qspFunc(s, 'money', 'string_profit', 1000)} you got as a bonus.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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

function enterPool2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, we were thinking about doing a topless pool shoo...
    scene.text(`"Hey ${((st as any).model ?? 0)?.['firstname'] ?? ''}, we were thinking about doing a topless pool shoot. It's offsite so it'll be an extra hour or two but it's also an extra payday if you want it. So? Do you want it?"`);
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"No thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer but I\'m happy with my schedule for today. Maybe next time."');
    scene.text('"Yeah, it\'s fine. I\'ll go ask Katherine. She\'s usually likes pool shoots."');
    scene.text('You point him in the direction of the last place you saw her.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Sure"', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
    scene.text('"Yeah sure, why not? Gimme a minute to get ready and I\'ll meet you in the car?"');
    scene.text('"Sounds good." He gives you the thumbs up and you both turn to get ready. As he walks out the door, you go to your station and make sure your makeup is right. Afterwards, you jump in the car and drive out to some fancy mansion with it\'s fancy stone pool and start the shoot.');
    scene.actions([
      { label: 'Do the shoot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    scene.img('images/locations/city/citycenter/photo/skill/skill_pool.mp4');
    scene.text('You spend two hours in and around the pool, dealing with and laughing about the struggles of water physics.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).modelpayfin = 2500 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    qspCall(st, 'fame', 'city', 'modelling', 'medium');
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 8));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['topless'] = ((st as any).modelfoto['topless'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/down.jpg');
    scene.text('After the shoot, they drop you back outside the studio while they unload.');
    // TODO-QSP: dynamic text: The photographer pays you out <<$func(''money'', ''string_profit'', modelpayfin)...
    scene.text(`The photographer pays you out ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} and once the money is in your hand, you're free to go.`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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

function enterRunway1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer running towards you, waving you over. You walk over to talk to him.');
    scene.actions([
      { label: '"What\'s up?"',  },
    ]);
  } },
  ]);
  scene.build();
}

function enterRunway2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer running towards you, waving you over. You walk over to talk to him.');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: Hey <<$model[''firstname'']>>, listen. We have an emergency situation and we''re...
    scene.text(`Hey ${((st as any).model ?? 0)?.['firstname'] ?? ''}, listen. We have an emergency situation and we're looking for whoever is available. A clothing studio we sometimes shoot for is having a fashion show tonight but for some reason something's gone wrong and they're missing models."`);
    scene.text('"Missing models?" you gasp. "You mean like they\'ve disappeared or something?"');
    // TODO-QSP: dynamic text: He looks confused for a second and says, "What? No! Just for whatever reason, th...
    scene.text('He looks confused for a second and says, "What? No! Just for whatever reason, they don\'t have enough models for tonight. I don\'t know if it\'s because some of them got sick or had an accident or if they just planned poorly and were supposed to have more than they hired. In any case, we need people to jump in tonight. It\'s going to be an all day thing though. We can\'t have anymore hiccups so if you agree you\'ll have to stay here until the show starts and then the show itself runs until 22:00 tonight. We know it\'s a big commitment so if you do we\'re willing to shell out a ton of money to make this work. We\'re talking a three grand bonus on top of your normal variety shoot rate. Can we count on you for tonight?"');
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"I\'m sorry, I can\'t be out that late"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I\'m sorry, I can\'t be out that late"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: "I''m really sorry but I have to say no. I can''t be out that late or my <<$npc_...
    scene.text(`"I'm really sorry but I have to say no. I can't be out that late or my ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}- er, for, uhh… reasons…"`);
    scene.text('"Yeah, yeah, it\'s fine, whatever," he says a bit more harshly than he needed to but you understand he\'s under a lot of stress right now so you let it pass. At that moment, Anasasia passes by and the photographer\'s attention is immediately diverted. "Anastasia! We need you! It\'s an emergency!"');
    scene.text('"Of course darling! What do you need?" As they frantically chatter away, you leave them be and go back to the main studio.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"I\'m sorry, I can\'t, I had plans for today"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I\'m sorry, I can\'t, I had plans for today"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I\'m really sorry but I have to say no. I had important plans for today and I can\'t miss it. I\'m <i>really</i> sorry!"');
    scene.text('"Yeah, yeah, it\'s fine, whatever," he says a bit more harshly than he needed to but you understand he\'s under a lot of stress right now so you let it pass. At that moment, Anasasia passes by and the photographer\'s attention is immediately diverted. "Anastasia! We need you! It\'s an emergency!"');
    scene.text('"Of course darling! What do you need?" As they frantically chatter away, you leave them be and go back to the main studio.');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Yes! Of course!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Yes of course I can be there! If the studio need me to be there, I\'m there."');
    scene.text('<i>The money doesn\'t hurt either…</i> you think to yourself.');
    scene.text('The photographer heaves a sigh of relief and says, "Great! Okay, stick around, I\'m going to see who else is around for me to round up, okay?" With that, he rushes off and you find a place to hang out until it all starts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/runway_waiting.mp4');
    scene.text('Eventually the photographer succeeds in rounding up as many models including girl who looks like it might have been her first day here when the photographer found her. You\'re all sat down on a line of chairs and told to wait for the studio to do your makeup and wardrobe.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 4;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    (st as any).hour = 19;
    scene.text('The runway crew shows up and immediately moves you to the makeup station to get your hair and everything done. They really shovel it on for this. A bit different to the subtle makeup you normally put on for modelling.');
    scene.text('They put you into the clothes that they\'ve decided you\'re going to be modelling and you wait for the show to begin.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    (st as any).modelpayfin = 500 + ((((st as any).fame ?? {})?.['city_modelling'] ?? 0) * 10) + (((st as any).modelpay ?? 0) * 3) + (50*(Math.floor(Math.random() * 8) + 0));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 3) + 8));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    ((st as any).model = (st as any).model ?? {})['runway_outfit'] = (Math.floor(Math.random() * 5) + 1);
    if (((st as any).model ?? 0)?.['runway_outfit'] === 1) {
      scene.img('images/locations/city/citycenter/photo/skill/runway/1.mp4');
      scene.text('As soon as they send you down the runway you realize something\'s gone wrong. The loose cleavage of the dress you\'re wearing is <i>too</i> loose. With the kind of purposeful steps you\'re taking and your breasts jiggling underneath, the fabric falls to the sides and your breasts are left completely exposed. You try your best to recover but the dress is just too loose and skimpy and no matter what you do your breasts end up coming loose.');
      scene.text('With nothing left to it and not wanting to make a big deal out of it and ruin the show, you put on your best model smile and just get through the rest of your walk.');
    } else {
      if (((st as any).model ?? 0)?.['runway_outfit'] === 2) {
        scene.img('images/locations/city/citycenter/photo/skill/runway/2.mp4');
        scene.text('One of the problems with being a model is that you don\'t get to actually choose the clothing you\'re going to wear.');
        scene.text('In this case, it\'s really nothing more than panties with a backless and transparent mesh top that completely exposes your breasts. You aren\'t sure what the intention of the designer was, but you know that modesty wasn\'t part of it. But you smile and show off the outfit and your body anyways, posing briefly before walking back.');
      } else {
        if (((st as any).model ?? 0)?.['runway_outfit'] === 3) {
          scene.img('images/locations/city/citycenter/photo/skill/runway/3.mp4');
          scene.text('The outfit you\'re dressed in is a leopard print jumpsuit will bellbottoms. The outrageous pattern aside, it doesn\'t show much skin and as a result, you find it easy to work your body to show off the outfit instead of your own assets. With a smile, a pose, and a wink, you get it done and begin your walk back.');
        } else {
          if (((st as any).model ?? 0)?.['runway_outfit'] === 4) {
            scene.img('images/locations/city/citycenter/photo/skill/runway/4.mp4');
            if (((st as any).tits ?? 0) >= 3) {
              scene.text('As you walk forward, you can\'t help but wonder whether the girl whom this outfit was designed for is a girl with small breasts. It\'s tight around your chest and you can feel it riding up with every step. In the short time it takes you to get to the end of the runway, the top has risen so much that your nipples are just barely hidden. Within a few steps on the way back you need to pull it back in place. But at least once the walk is finished you\'ll finally be able to let your sweater puppies free.');
            } else {
              if (((st as any).tits ?? 0) >= 2) {
                scene.text('As you walk forward, you can\'t help but wonder whether the girl whom this outfit was designed for is a girl with smaller breasts than you. Or maybe even a girl who is completely flat. Even around your humble bosom, you can feel the material straining against your chest and it rides up with every step you take forward. In the short time it takes you to get to the end of the runway, the top has risen so much that your nipples are just barely hidden. Within a few steps on the way back you need to pull it back in place. But at least once the walk is finished you\'ll finally be able to take this thing off and breathe normally again.');
              } else {
                scene.text('As you walk forward, you can\'t help but wonder what idiot designed this outfit. Even with your virtually flat chest, your body strains against the material. You can feel it riding up with every step you take forward. In the short time it takes you to get to the end of the runway, the top has risen so much that your nipples are just barely hidden. Within a few steps on the way back you need to pull it back in place. But at least once the walk is finished you\'ll finally be able to take this thing off and breathe normally again.');
              }
            }
          } else {
            if (((st as any).model ?? 0)?.['runway_outfit'] === 5) {
              scene.img('images/locations/city/citycenter/photo/skill/runway/5.mp4');
              scene.text('The outfit you\'re placed in really has you wondering again if fashion is really about art and style or if it\'s just about putting women in exposed situations.');
              scene.text('It\'s hard not to wonder when the outfit is nothing more than a pink swimsuit bottom with wide overall type straps that only exist to cover up your nipples.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).hour = ((st as any).hour ?? 0) + (1);
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).age ?? 0) < 18) {
      // TODO-QSP: dynamic text: Another hour later, the show is over, the clothes are taken back, and you''re le...
      scene.text(`Another hour later, the show is over, the clothes are taken back, and you're left naked in the studio, counting the ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} you've been paid and musing over the happenings of the night. Working the runway isn't too bad. But at the same time, this kind of thing has the tendency to circle around and you <i>really</i> hope nobody in Pavlovsk hears about this…`);
      scene.actions([
        { label: 'Back in the studio', goto: ['foto', 'studio'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Another hour later, the show is over and you''re left naked in the studio, count...
      scene.text(`Another hour later, the show is over and you're left naked in the studio, counting the ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} you've been paid and musing over the happenings of the night. Working the runway isn't too bad.`);
      scene.actions([
        { label: 'Back in the studio', goto: ['foto', 'studio'] },
      ]);
    }
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

function enterWet1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>!"
  scene.text(`"${((s as any).model ?? 0)?.['firstname'] ?? ''}!"`);
  scene.text('As you walk out of the room you hear someone call your name.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('As you turn you see a photographer walking towards you, waving you over. You walk over to talk to him.');
    scene.actions([
      { label: '"What\'s up?"', handler: (st: GameState) => {
    if (((st as any).modelfoto ?? 0)?.['wet_shoot'] === 1) {
      qspGoto(st, 'foto_events', 'wet2');
    }
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, we were thinking about doing a special shoot and...
    scene.text(`"Hey ${((st as any).model ?? 0)?.['firstname'] ?? ''}, we were thinking about doing a special shoot and since you've shown you're willing to go the extra mile around here, we hoped you might like to do it."`);
    scene.text('You regard him somewhat suspiciously as he never actually says what the shoot is.');
    scene.actions([
      { label: '"And the shoot is…?"', handler: (st: GameState) => {
    scene.text('"And the shoot is…?"');
    scene.text('He looks awkward like he doesn\'t know what to say for a moment until he finally explains, "Well, it\'s a normal full exposure shoot… we\'re just going to spray you with a hose while we do it. A lot of girls say no when we tell them what we\'re going to do because they find it unpleasant. So? How about it? We\'ll pay you for it and it won\'t count as your weekly job."');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Thanks but no thanks"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Thanks but no thanks"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks but no thanks. I don\'t want to get sprayed with a hose for two hours just for some extra money."');
    scene.text('"Yeah…" he sighs. "That\'s what I thought you\'d say. Dammit! Why won\'t any of the girls agree to this anymore?!"');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Sure! Why not?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure! Why not? I don\'t mind getting a little wet."');
    scene.text('"Really?" he perks up. "Wow! I didn\'t think you\'d actually say yes. Alright! Let\'s do it then!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.img('images/locations/city/citycenter/photo/special/wet/wet.mp4');
    scene.text('You put on your makeup and follow him over to the water proof set in the studio and spend the next two hours shrieking and giggling as you get blasted with water while photographed nude.');
    scene.text('He wasn\'t kidding! That water is cold!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/wet/wet1.jpg');
    (st as any).modelpayfin = 1000 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['pussy'] = ((st as any).modelfoto['pussy'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nude'] = ((st as any).modelfoto['nude'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['fullnude'] = ((st as any).modelfoto['fullnude'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['wet_shoot'] = 1;
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 2) + 9));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    // TODO-QSP: dynamic text: Eventually, the shoot is over and they leave you with chattering teeth, really h...
    scene.text(`Eventually, the shoot is over and they leave you with chattering teeth, really hard nipples and a dry wad of ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} in your shiving hands. But you have to admit photos do look pretty nice.`);
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
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

function enterWet2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  // TODO-QSP: dynamic text: "Hey <<$model[''firstname'']>>, we wanted to do another full exposure wet shoot....
  scene.text(`"Hey ${((s as any).model ?? 0)?.['firstname'] ?? ''}, we wanted to do another full exposure wet shoot. Since you were so accommodating last time, I thought I'd ask you again"`);
  scene.text('You regard him somewhat suspiciously as he never actually says what the shoot is.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No way!', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"No way!" You shiver just at the thought of it. "It was freezing cold last time! I\'m not doing that again!');
    scene.text('He sighs, muttering as he walks away. "They never come back the second time…"');
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
    ]);
  } },
    { label: '"Sure! Why not?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure! Why not?" you shrug. "Money\'s still the same, right?"');
    // TODO-QSP: dynamic text: "Yes!" He looks very pleased with himself for asking you. "Okay, go meet with th...
    scene.text(`"Yes!" He looks very pleased with himself for asking you. "Okay, go meet with the photographer at set ${(Math.floor(Math.random() * 99) + 1)}."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.img('images/locations/city/citycenter/photo/special/wet/wet.mp4');
    scene.text('You put on your makeup and head over to the water proof set in the studio and spend the next two hours shrieking and giggling as you get blasted with water while photographed nude.');
    scene.text('<i>Is this somehow colder than last time?</i> you wonder, as another icy splash sprays across you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/special/wet/wet1.jpg');
    (st as any).modelpayfin = 1000 + (((st as any).modelpay ?? 0) * 2) + (50*(Math.floor(Math.random() * 8) + 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['shoots'] = ((st as any).modelfoto['shoots'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nip'] = ((st as any).modelfoto['nip'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['pussy'] = ((st as any).modelfoto['pussy'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['nude'] = ((st as any).modelfoto['nude'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['fullnude'] = ((st as any).modelfoto['fullnude'] ?? 0) + (1);
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['wet_shoot'] = 1;
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    qspCall(st, 'exp_gain', 'mdlng', (Math.floor(Math.random() * 2) + 9));
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'fame', 'city', 'modelling', 'medium');
    } else {
      qspCall(st, 'fame', 'city', 'modelling', 'small');
    }
    qspCall(st, 'money', 'earn', ((st as any).modelpayfin ?? 0));
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['earnings'] = ((st as any).modelfoto['earnings'] ?? 0) + (((st as any).modelpayfin ?? 0));
    // TODO-QSP: dynamic text: Eventually, the shoot is over and they leave you with chattering teeth, really h...
    scene.text(`Eventually, the shoot is over and they leave you with chattering teeth, really hard nipples and a dry wad of ${qspFunc(s, 'money', 'string_profit', ((st as any).modelpayfin || ''))} in your shiving hands. But you have to admit photos do look pretty nice.`);
    scene.actions([
      { label: 'Back to the studio', goto: ['foto', 'studio'] },
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
    case 'fame':
      enterFame(s, scene);
      break;
    case 'skill':
      enterSkill(s, scene);
      break;
    case 'studio_strip_talk1':
      enterStudioStripTalk1(s, scene);
      break;
    case 'studio_strip_talk2':
      enterStudioStripTalk2(s, scene);
      break;
    case 'studio_strip_talk3':
      enterStudioStripTalk3(s, scene);
      break;
    case 'underwear_steal':
      enterUnderwearSteal(s, scene);
      break;
    case 'underwear_steal2':
      enterUnderwearSteal2(s, scene);
      break;
    case 're-dress':
      enterReDress(s, scene);
      break;
    case 'commercial':
      enterCommercial(s, scene);
      break;
    case 'fashion_persuasion':
      enterFashionPersuasion(s, scene);
      break;
    case 'lingerie_persuasion':
      enterLingeriePersuasion(s, scene);
      break;
    case 'glamour_persuasion':
      enterGlamourPersuasion(s, scene);
      break;
    case 'trans_persuasion':
      enterTransPersuasion(s, scene);
      break;
    case 'topless_persuasion':
      enterToplessPersuasion(s, scene);
      break;
    case 'nude_persuasion':
      enterNudePersuasion(s, scene);
      break;
    case 'special':
      enterSpecial(s, scene);
      break;
    case 'list':
      enterList(s, scene);
      break;
    case 'high_fashion':
      enterHighFashion(s, scene);
      break;
    case 'fine_art':
      enterFineArt(s, scene);
      break;
    case 'fine_art2':
      enterFineArt2(s, scene);
      break;
    case 'modern_art':
      enterModernArt(s, scene);
      break;
    case 'aphrodite_advert':
      enterAphroditeAdvert(s, scene);
      break;
    case 'independent_art':
      enterIndependentArt(s, scene);
      break;
    case 'designer_wedding':
      enterDesignerWedding(s, scene);
      break;
    case 'topless1':
      enterTopless1(s, scene);
      break;
    case 'topless1.1':
      enterTopless1_1(s, scene);
      break;
    case 'pool1':
      enterPool1(s, scene);
      break;
    case 'tennis':
      enterTennis(s, scene);
      break;
    case 'topless2':
      enterTopless2(s, scene);
      break;
    case 'beach2':
      enterBeach2(s, scene);
      break;
    case 'pool2':
      enterPool2(s, scene);
      break;
    case 'runway1':
      enterRunway1(s, scene);
      break;
    case 'runway2':
      enterRunway2(s, scene);
      break;
    case 'wet1':
      enterWet1(s, scene);
      break;
    case 'wet2':
      enterWet2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const foto_events: LocationDef = {
  name: 'foto_events',
  title: 'Photographer',
  region: 'other',
  enter: enter,
};
