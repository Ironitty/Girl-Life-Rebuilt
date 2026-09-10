import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'police_station', 'start');
  scene.text('<center><b>Police Station Entrance</b></center>');
  scene.img('images/locations/city/citycenter/police/cityext.jpg');
  scene.text('The St. Petersburg police station has definitely seen better days, but continues to stand the test of time. While not as large as other police stations, it still strikes fear into any criminal that passes through its doors.');
  scene.actions([
    { label: 'Return to the city center', goto: ['city_center', ''] },
    { label: 'Go to the reception desk', goto: ['police_station', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'police_station', 'reception');
  scene.img('images/locations/city/citycenter/police/cityrec.jpg');
  scene.text('Upon entering the station, you\'re welcomed by a reception desk. The officers sitting here are protected by thick glass and you see several monitors and computers keeping an eye on everything that\'s happening inside and outside the building.');
  if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).daystart ?? 0) < ((s as any).rape_day ?? 0) + 2) {
    // TODO-QSP: act 'Report a rape': gt 'police_station', 'rape_report'
  }
  qspCall(s, 'blackmailer', 'set_police_act');
  scene.actions([
    { label: 'Return to the center', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterRapeReport(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/police/cityrec.jpg');
  scene.text('One step after another, you trudge through town until you suddenly find yourself standing inside the police station. On the other side of a plexiglass reception, you can see several officers milling about, though none pay attention to you. Stepping up to the window, you pick up the phone and hear a buzzer sound on the other side. One of the officers picks it up without hesitation and looks at you.');
  scene.text('"Can I help you?"');
  scene.text('"I- I\'d like t-to report a r-rape…" you stammer out.');
  scene.text('The officer nods, but his expression doesn\'t change in the slightest. "Someone will come out to meet you. Follow them and they\'ll take your statement in the back."');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('As promised, someone comes out and takes you into their office space behind. You sit down at a shoddy looking desk and the officer takes his place on the other side of it.');
    scene.text('"Alright ma\'am, tell me what happened to you."');
    scene.text('You explain to the officer as best as you can what happened to you while he takes notes. How you were randomly attacked, how you were violated.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('"And where did the attack occur?"');
    if (((s as any).loc ?? 0) === 'city_center') {
      scene.text('"Here, i-in the city center. But he pulled me away. I… I don\'t remember how far…"');
    } else {
      scene.text('"In th-the residential district. But he pulled me away. I… I don\'t remember how far…"');
      if (((s as any).loc ?? 0) === 'city_industrial') {
        scene.text('"In th-the industrial district. But he pulled me away. I… I don\'t remember how far…"');
      } else {
        scene.text('"On th-the island, Vasilyevsky Island. But he pulled me away. I… I don\'t remember how far…"');
        if (((s as any).loc ?? 0) === 'city_park') {
          scene.text('"In th-the park. But he pulled me away. I… I don\'t remember how far…"');
        }
        scene.text('"Can you describe what he looked like?"');
        scene.text('The blood drains from your face. "I… I-!"');
        scene.text('"Anything about him will be helpful. Height? Build? Hair color? Eye color?"');
        scene.actions([
          { label: 'I… can\'t…', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('"He was… I don\'t remember how tall he was… And… he was wearing a nondescript hoody. I couldn\'t tell what his body type was… And-! And… I don\'t know what he looks like… he was behind me during… the event…"');
    scene.text('The officer doesn\'t say anything, but you see him slightly shake his head. You realize that the information you gave him is going to be of little to no use at all. A rape in town and nothing else to go off of? You might as well have told him a pigeon did it.');
    scene.text('For a moment, you wonder how many other girls like you have sat at this desk filing a report just like this one only for it to go nowhere. You wonder if any of them were been raped by the same man who raped you…');
    if (((s as any).cumsumvag ?? 0)+((s as any).cumsumass ?? 0) > 0) {
      scene.actions([
        { label: 'Can I get a rape kit?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cubicle.jpg');
    scene.text('"C-can I get a… a rape kit…?" you mumble.');
    scene.text('The officer nods at you and pulls a small box out of a drawer in his desk. "If you just come this way ma\'am."');
    scene.text('The two of you get up and he leads you through the office area to the bathroom where he hands you the box. Looking down at it, you read the label on it.');
    scene.text('<i><b>SEXUAL ASSAULT EVIDENCE COLLECTION KIT</b></i>');
    scene.text('You take it from him, cradling it in your hands. "This will let you catch him, right?"');
    scene.text('The officer shrugs in return. "It depends. DNA evidence is only useful if we can match it to the person it came from."');
    scene.text('"So you\'re saying this might not do anything?"');
    scene.text('He shrugs again. "It\'s better than nothing."');
    scene.actions([
      { label: 'Use the rape kit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityext.jpg');
    scene.text('Closing the bathroom door, you open the kit and swab your insides, feeling humiliated and disgusted when it comes back covered in semen. Packaging it up, you re-open the door and hand the evidence to the officer.');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you alone with your thoughts and memories of your rape…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you so very alone…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'rape_report':
      enterRapeReport(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const police_station: LocationDef = {
  name: 'police_station',
  title: 'Police Station Entrance',
  region: 'other',
  description: ['The St. Petersburg police station has definitely seen better days, but continues to stand the test of time. While not as large as other police stations, it still strikes fear into any criminal that passes through its doors.'],
  enter: enter,
};
