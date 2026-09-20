import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'buklinik', 'start');
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Mercy clinic</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli.jpg');
  scene.text('A well-known homeless shelter in a run-down building. Looking above the entrance you can see a sign saying, Mercy Clinic.');
  scene.text('There is a note by the entrance.');
  // TODO-QSP: dynamic text: Working hours: '+func('time', 'get_time_string', 9, 0)+' to '+func('time', 'get_...
  scene.text('Working hours: 9:00 to 17:00');
  (s as any).temp = (Math.floor(Math.random() * 10) + 0);
  if ((!((s as any).temp ?? 0))) {
    scene.text('Surprisingly, there is no one around the shelter…');
  }
  if (((s as any).temp ?? 0) === 1) {
    scene.text('A man is walking up and down a path, screaming profanities…');
  }
  if (((s as any).temp ?? 0) === 2) {
    scene.text('A homeless person is trying to get into the shelter…');
  }
  if (((s as any).temp ?? 0) === 3) {
    scene.text('An older man is standing outside the shelter…');
  }
  if (((s as any).temp ?? 0) === 4) {
    scene.text('There is a woman standing outside the shelter trying to console her crying child…');
  }
  if (((s as any).temp ?? 0) === 5) {
    scene.text('A bruised woman stands near the entrance having a smoke…');
  }
  if (((s as any).temp ?? 0) === 6) {
    scene.text('A woman is crying, arguing on the phone, probably with her husband…');
  }
  if (((s as any).temp ?? 0) === 7) {
    scene.text('A couple are loudly arguing if they want to stay at the shelter tonight…');
  }
  if (((s as any).temp ?? 0) === 8) {
    scene.text('A young woman is sitting on a bench right next to the shelter with tears in her eyes…');
  }
  if (((s as any).temp ?? 0) === 9) {
    scene.text('A crowd of homeless people have huddled together trying to see if there are any available beds…');
  }
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18) {
    scene.actions([
      { label: 'Enter the shelter', goto: ['buklinik', 'holl'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterHoll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'buklinik', 'holl');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Entrance</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_holl.jpg');
  scene.text('The interior is even worse than the exterior, the paint on the wall is falling off and hasn\'t been repainted for quite a while. There are some lights working but not all of them and there is this weird smell that you can\'t really pinpoint what it is.');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).bumtolik ?? 0) >= 5) {
    scene.text('You can volunteer here on the weekends.');
  } else {
    if (((s as any).bumtolik ?? 0) > 4) {
      scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027sklad/u0027); return false;">storage</a> room is locked.');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027registr3/u0027); return false;">office</a> door is right by the entrance.');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('Opposite the office door you see the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027olga2/u0027); return false;">accountants\'</a> office door sign.');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('Furthest down the corridor, are the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027shower/u0027); return false;">showers</a>.');
    }
    if (((s as any).bumtolik ?? 0) === 6) {
      scene.text('There are several doors leading into the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027spal/u0027); return false;">dormitory</a>.');
    }
    if (((s as any).bumtolik ?? 0) > 6) {
      scene.text('I shouldn\'t interact with the people staying there right now…');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027stol/u0027); return false;">canteen</a> is located opposite the dormitories.');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('Behind a solid wooden door is the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027sec/u0027); return false;">Managers\'</a> office.');
    }
    if (((s as any).bumtolik ?? 0) > 5) {
      scene.text('The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik/u0027, /u0027dir/u0027); return false;">coordinators\'</a> office is next to the canteen.');
    }
  }
  if ((((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).bumtolik ?? 0) === 0)  ||  ((s as any).bumtolik ?? 0) === 4) {
    scene.actions([
      { label: 'Volunteer', goto: ['buklinik', 'registr'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterRegistr(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Counter</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_reg.jpg');
  scene.text('As you approach the counter there are two women chatting with each other, and laughing.');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).bumtolik ?? 0) < 5) {
    // TODO-QSP: dynamic text: You clear you throat, "Hello, my name is <<$pcs_firstname>>, I found a note that...
    scene.text(`You clear you throat, "Hello, my name is ${((s as any).pcs_firstname || '')}, I found a note that you were looking for volunteers…"`);
    scene.text('One of the women cheerfully replies, "Welcome to our little humble shelter. As you\'ve probably noticed the place is run down and we\'re really in need of some volunteers." They point further down the corridor, "What you see here is just a small part of the operation that we provide. We also help out with the elderly and the less fortunate outside the shelter."');
    scene.text('Nodding, "I\'m not afraid to get dirty and I\'m sure that I\'ll manage fine…"');
    scene.text('The woman behind the counter continues, "In addition, since I assume that you are still in high school, the law states that you can only volunteer outside school hours, or during the weekends."');
  } else {
    // TODO-QSP: dynamic text: You clear your throat, "Hello, my name is <<$pcs_firstname>>, I met a girl named...
    scene.text(`You clear your throat, "Hello, my name is ${((s as any).pcs_firstname || '')}, I met a girl named Olga who said that you were in need of volunteers. I would like to sign up…"`);
    scene.text('The woman rushes over, "Hello! We are very pleased to have you here. Just be aware, the work is hard and ungrateful, what you see here is just a small part of it, also help out with the elderly and the less fortunate outside the shelter."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I have to think about it', goto: ['city_industrial', ''] },
    { label: 'Accept', goto: ['buklinik', 'registr2'] },
  ]);
  scene.build();
}

function enterRegistr2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).bumtolik = 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Counter</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_reg.jpg');
  scene.text('You smile, "I think I can handle it. What\'s next?');
  scene.text('The woman lets out a sigh of relief, "I am happy to hear that. Fill out this form. We give all our volunteers documentation that they\'ve worked here in case of you need it as a future reference.');
  scene.text('You take some time to fill out the form and hand it back to the woman.');
  scene.text('The woman skims through it, "Great, you see the first door on the right down the corridor, you should find Olga there, tell her that the reception sent you and she\'ll show you around.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue down the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterRegistr3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Counter</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_reg.jpg');
  scene.text('You usually find either Karina or Regina sitting by the counter, welcoming either the volunteers or people that are in need of help.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue down the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterSklad(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Storage room</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_sklad.jpg');
  scene.text('The storage room is filled with all sort of things. From clothing, food, to children toys and even a medicine box in case of need. There is a note next to the medicine box, <i>keep locked at all times!!!</i>');
  scene.text('You see several people sorting through the stuff, trying to make sense what goes where.');
  if (((s as any).bumtolik ?? 0) === 5) {
    scene.actions([
      { label: 'Look for Olga', goto: ['buklinik', 'olga'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back to the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterOlga(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Olga</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_olga.jpg');
  if (((s as any).bumtolik ?? 0) === 5) {
    // TODO-QSP: dynamic text: You manage to find Olga and walk up to her, "Hi Olga! I don''t know if you remem...
    scene.text(`You manage to find Olga and walk up to her, "Hi Olga! I don't know if you remember me, it's ${((s as any).pcs_nickname || '')}. You told me about this place and that you were looking volunteers and I decided to see if I could help out. The women at the reception told me that I would find you here."`);
    // TODO-QSP: dynamic text: Olga looks at you, "<<$pcs_nickname>>…, good afternoon! Glad to have you on boar...
    scene.text(`Olga looks at you, "${((s as any).pcs_nickname || '')}…, good afternoon! Glad to have you on board! Well as you can see we are swamped so any help is very welcome!" Smiling, she continues, "Since you got sent here that means I'll be your mentor, feel free to ask me whenever you have a question."`);
    scene.text('You nod, "I will do that!"');
    scene.text('Olga, still smiling, "Good, lets start off with a tour. If we start off here, the storage room. Every donation we receive ends up here and gets sorted depending on where they need to end up. Next up the managers\' office!"');
    scene.actions([
      { label: 'Visit the managers office', goto: ['buklinik', 'sec'] },
    ]);
  } else {
    scene.text('You look around, "Is there someone named Olga here?!"');
    scene.text('A woman looks up, "Right here, honey! And who might you be?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>" you answer, "The woman at the counter told me to find you."
    scene.text(`"${((s as any).pcs_nickname || '')}" you answer, "The woman at the counter told me to find you."`);
    scene.text('Olga crosses her arms, "Is that so?! They are keen on sending everyone to me. Well, nothing to worry about, and since you were looking specifically for me, you\'re a new volunteer?"');
    scene.text('You nod.');
    scene.text('Olga smiles, "Good, well, lets start off with a tour. If we start off here, the storage room. Every donation we receive ends up here and gets sorted depending on where they need to end up. Next up the managers\' office!"');
    scene.actions([
      { label: 'Visit the managers office', goto: ['buklinik', 'sec'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSec(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Managers\' office</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_sec.jpg');
  if (((s as any).bumtolik ?? 0) === 5) {
    // TODO-QSP: dynamic text: Olga knocks on the door and walks right in, "<<$pcs_nickname>>, meet our office ...
    scene.text(`Olga knocks on the door and walks right in, "${((s as any).pcs_nickname || '')}, meet our office manager Jeanne. She is responsible for everything operational here. If you run into any issues take it up with her and she'll sort it out. Jeanne, this is ${((s as any).pcs_nickname || '')} and is our new volunteer."`);
    scene.text('Jeanne gives you a warm smile, "Welcome, I hope you won\'t mind the state of our shelter, it\'s a bit on the run down side. And I hope that Olga doesn\'t end up being a bad influence…" she teasingly looks at Olga.');
    // TODO-QSP: dynamic text: Before you''re able to say anything Olga chimes in, "See, <<$pcs_nickname>> this...
    scene.text(`Before you're able to say anything Olga chimes in, "See, ${((s as any).pcs_nickname || '')} this is the thanks I get for recruiting volunteers. It's clear we're not welcome here so let us move on…"`);
    scene.text('You manage to give a friendly nod before the two of you leave the office, "Next stop, the coordinators\' office!"');
    scene.actions([
      { label: 'Head to the coordinator', goto: ['buklinik', 'dir'] },
    ]);
  } else {
    if (((s as any).bumtolik ?? 0) > 5) {
      // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>! Is there anything I can help you with?"
      scene.text(`"Hello, ${((s as any).pcs_nickname || '')}! Is there anything I can help you with?"`);
      scene.actions([
        { label: 'Head back to the corridor', goto: ['buklinik', 'holl'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDir(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Coordinators\' office</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_dir.jpg');
  if (((s as any).bumtolik ?? 0) === 5) {
    scene.text('Olga barges in without even knocking, "And this is our head coordinator Vera…"');
    scene.text('Vera sighs, "Again Olga?! Haven\'t I told you to knock when you\'re about to enter the and I told you, just call me Vera."');
    scene.text('Olga brushes her off, "Yeah, yeah…" turning to you, "Vera is not only the head coordinator, but also the mastermind behind everything. She is one of the founders of the organization."');
    // TODO-QSP: dynamic text: You politely greet her, "My name is <<$pcs_nickname>> and I''ll do my best to he...
    scene.text(`You politely greet her, "My name is ${((s as any).pcs_nickname || '')} and I'll do my best to help everyone out!"`);
    scene.text('Vera smiles, "Glad to hear that you\'re excited! You\'ve probably heard that we could use all the hands we can get hold of."');
    scene.text('The three of you chat for a while and after a while Olga pushes you to continue on with the tour…');
    scene.actions([
      { label: 'Continue the tour', goto: ['buklinik', 'olga2'] },
    ]);
  } else {
    if (((s as any).bumtolik ?? 0) > 5) {
      // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>! Is there anything I can help you with?"
      scene.text(`"Hello, ${((s as any).pcs_nickname || '')}! Is there anything I can help you with?"`);
      scene.actions([
        { label: 'Head back to the corridor', goto: ['buklinik', 'holl'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Showers</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_show.jpg');
  scene.text('The showers are mixed. There\'s a note put up by the staff:');
  scene.text('Men: Every even hour. Females stay out!!!');
  scene.text('Women: Every odd hour. Males stay out breaking this rule will get you kicked out!!!');
  scene.text('Note: Staff might enter during any hours!');
  scene.text('You shortly stay here as some people might take offense to you being there.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back to the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterStol(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Canteen</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_stol.jpg');
  scene.text('There\'s a large canteen with lots of tables and chairs with loads of space. This is probably the biggest room in the building.');
  scene.text('There is a sign by the entrance:');
  // TODO-QSP: dynamic text: Breakfast: '+func('time', 'get_time_string', 8, 0)+' - '+func('time', 'get_time_...
  scene.text('Breakfast: 8:00 - 9:30');
  // TODO-QSP: dynamic text: Dinner: '+func('time', 'get_time_string', 17, 0)+' - '+func('time', 'get_time_st...
  scene.text('Dinner: 17:00 - 19:00');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the canteen', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterSpal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Dormitory</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_spal.jpg');
  scene.text('A shared dormitory with plenty of beds filled with people from all walks of life. There are plenty of homeless alcoholics, vagrants and drug addicts. Mixed in with them are women with their children that have ran away from their abusive relationships.');
  scene.text('Within the dormitory there is a small unwritten divide as male population stick to one side while the women keep to the other.');
  if (((s as any).bumtolik ?? 0) === 6) {
    scene.actions([
      { label: 'Introduce yourself', goto: ['buklinik_event', 'pos1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the dormitory', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enterOlga2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Olga</b></center>');
  scene.img('images/locations/city/industrial/mercyclinic/bukli_olga.jpg');
  if (((s as any).bumtolik ?? 0) > 5) {
    // TODO-QSP: dynamic text: "Hello, <<$pcs_nickname>>! Is there anything I can help you with?"
    scene.text(`"Hello, ${((s as any).pcs_nickname || '')}! Is there anything I can help you with?"`);
  }
  if (((s as any).buklinikDay ?? 0) === ((s as any).daystart ?? 0)) {
    scene.text('"All the assignments are done for today. We can finally let our guard down…"');
  }
  if (((s as any).bumtolik ?? 0) >= 7  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I need your help in the <a href="exec:gt ''buklinik_event'',...
    scene.text(`"${((s as any).pcs_nickname || '')}, I need your help in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027pos6/u0027); return false;">canteen</a> today."`);
  }
  if (((s as any).bumtolik ?? 0) >= 8  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, here is the address to one the <a href="exec:gt ''buklinik_e...
    scene.text(`"${((s as any).pcs_nickname || '')}, here is the address to one the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027pos8/u0027); return false;">elderly gentlemen</a> we're helping out. Would you be so kind and help him out with some housework?`);
  }
  if (((s as any).bumtolik ?? 0) === 9  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I''ll need some help to persuade an alcoholic to stop wander...
    scene.text(`"${((s as any).pcs_nickname || '')}, I'll need some help to persuade an alcoholic to stop wandering the streets, and stay <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027pos9/u0027); return false;">here</a>."`);
  }
  if (((s as any).bumtolik ?? 0) === 10  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('"We need a babysitter for one very <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027event0/u0027); return false;">weird</a> man. Don\'t worry, he\'s totally harmless."');
  }
  if (((s as any).bumtolik ?? 0) === 11  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, would you be kind and visit <a href="exec:gt ''buklinik_even...
    scene.text(`"${((s as any).pcs_nickname || '')}, would you be kind and visit <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().0 ?? /u0027/u0027)); return false;">Michael</a>?"`);
  }
  if (((s as any).bumtolik ?? 0) === 12  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<a href="exec:gt ''buklinik_event'',''entrance'',1">Michael</a> is asking for y...
    scene.text(`"<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().1 ?? /u0027/u0027)); return false;">Michael</a> is asking for you, ${((s as any).pcs_nickname || '')}. You must've made some impression."`);
  }
  if (((s as any).bumtolik ?? 0) === 13  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, <a href="exec:gt ''buklinik_event'',''entrance'',2">Michael<...
    scene.text(`"${((s as any).pcs_nickname || '')}, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().2 ?? /u0027/u0027)); return false;">Michael</a> won't stop nagging us about you… Could you please visit him?"`);
  }
  if (((s as any).bumtolik ?? 0) === 14  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, <a href="exec:gt ''buklinik_event'',''entrance'',3">Michael<...
    scene.text(`"${((s as any).pcs_nickname || '')}, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().3 ?? /u0027/u0027)); return false;">Michael</a> is expecting you."`);
  }
  if (((s as any).bumtolik ?? 0) === 15  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('"Why the hell is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().4 ?? /u0027/u0027)); return false;">Michael</a> always asking for you?');
  }
  if (((s as any).bumtolik ?? 0) === 16  &&  ((s as any).week ?? 0) === 1  &&  ((s as any).buklinikDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('"Guess who is asking for you… You guessed it, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027buklinik_event/u0027, /u0027entrance/u0027, String(window.__gameStore.getState().5 ?? /u0027/u0027)); return false;">Michael</a>."');
  }
  if (((s as any).bumtolik ?? 0) === 5) {
    (s as any).bumtolik = 6;
    scene.text('Olga keeps showing you around, "Here we have the beds, showers and the canteen where clients eat for free. I think that would be all, ask away if I forgot something to show you. Oh yeah, you\'ve already met them, but the ones sitting at the reception are Regina and Karina. You\'ll run across other volunteers, but I\'ll let yourself get acquainted."');
    scene.text('You thank Olga for the tour as she quickly heads back to the storage room.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back to the corridor', goto: ['buklinik', 'holl'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'holl':
      enterHoll(s, scene);
      break;
    case 'registr':
      enterRegistr(s, scene);
      break;
    case 'registr2':
      enterRegistr2(s, scene);
      break;
    case 'registr3':
      enterRegistr3(s, scene);
      break;
    case 'sklad':
      enterSklad(s, scene);
      break;
    case 'olga':
      enterOlga(s, scene);
      break;
    case 'sec':
      enterSec(s, scene);
      break;
    case 'dir':
      enterDir(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'stol':
      enterStol(s, scene);
      break;
    case 'spal':
      enterSpal(s, scene);
      break;
    case 'olga2':
      enterOlga2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const buklinik: LocationDef = {
  name: 'buklinik',
  title: '<center><b>Mercy clinic</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
