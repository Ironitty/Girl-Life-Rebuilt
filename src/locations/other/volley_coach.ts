import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter___(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['coach_leave'] = ((s as any).daystart ?? 0);
  scene.build();
}

function enterCoachOffice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'volley_coach', 'coach_office');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/coach_office.jpg');
  // TODO-QSP: dynamic text: You enter the coach's office in which there are cups, balls, sports equipment, a...
  scene.text(`You enter the coach's office in which there are cups, balls, sports equipment, awards, and a desk where the coach sometimes sits and does paperwork. ${((s as any).npc_nickname ?? 0)?.['A69']} Nikolaevich does not only teach amateur volleyball but he also coaches a professional volleyball team.`);
  if (((s as any).vballVars ?? 0)?.['coach_leave'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Talk to coach', handler: (st: GameState) => {
    // TODO-QSP: vballVars['coach_leave'] = 0
  }, goto: ['volley_coach', 'coach_talk'] },
    ]);
  } else {
    scene.text('Coach has gone home for the day.');
  }
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterMassageRoom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  scene.text('You are in the back room of Coach Mikhail\'s office.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Your <a href="exec: gs \'volley_coach\', \'massage_redress\' & gs \'volley_coach\', \'massage_room\'">clothes</a> are in a pile on the floor next to the massage table.');
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    }
  } },
    { label: 'Take a shower', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
    } else {
      if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 0))) {
        scene.actions([{ label: 'Continue', goto: ['gdksport', 'shower'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterCoachTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A69');
  if (((s as any).npc_nickname ?? 0)?.['A69'] === '') {
    ((s as any).npc_nickname ?? {})['A69'] = 'Coach Mikhail';
    ((s as any).npc_usedname ?? {})['A69'] = 'Coach Mikhail';
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 0) {
    if (((s as any).npc_rel ?? 0)?.['A69'] <= 0) {
      ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_lastname ?? 0);
      // TODO-QSP: dynamic text: "Ugh, what do you want <<$pcs_lastname>>?"
      scene.text(`"Ugh, what do you want ${((s as any).pcs_lastname ?? 0)}?"`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A69'] < 20) {
        ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_lastname ?? 0);
        // TODO-QSP: dynamic text: "What do you want <<$pcs_lastname>>? I'm very busy with the team."
        scene.text(`"What do you want ${((s as any).pcs_lastname ?? 0)}? I'm very busy with the team."`);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A69'] < 40) {
          ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_lastname ?? 0);
          // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>?"
          scene.text(`"Yes, ${((s as any).pcs_lastname ?? 0)}?"`);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A69'] < 60) {
            ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_firstname ?? 0);
            // TODO-QSP: dynamic text: "Yes, <<$pcs_firstname>>?"
            scene.text(`"Yes, ${((s as any).pcs_firstname ?? 0)}?"`);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A69'] < 80) {
              ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_firstname ?? 0);
              // TODO-QSP: dynamic text: "What do you need, <<$pcs_firstname>>?"
              scene.text(`"What do you need, ${((s as any).pcs_firstname ?? 0)}?"`);
            } else {
              ((s as any).pcs_usedname ?? {})['A69'] = ((s as any).pcs_nickname ?? 0);
              // TODO-QSP: dynamic text: "What can I help you with, <<$pcs_nickname>>?"
              scene.text(`"What can I help you with, ${((s as any).pcs_nickname ?? 0)}?"`);
            }
          }
        }
      }
    }
  } else {
    if (((s as any).vballVars ?? 0)?.['coachsex'] > 0) {
      if (((s as any).vballVars ?? 0)?.['coachsex'] === 1) {
        // TODO-QSP: dynamic text: "Of course, <<$pcs_lastname>>.
        scene.text(`"Of course, ${((s as any).pcs_lastname ?? 0)}.`);
      } else {
        if (((s as any).vballVars ?? 0)?.['coachsex'] === 2) {
          // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>?"
          scene.text(`"Yes, ${((s as any).pcs_lastname ?? 0)}?"`);
        } else {
          if (((s as any).vballVars ?? 0)?.['coachsex'] === 3) {
            // TODO-QSP: dynamic text: "Yes, <<$pcs_firstname>>?"
            scene.text(`"Yes, ${((s as any).pcs_firstname ?? 0)}?"`);
          } else {
            if (((s as any).vballVars ?? 0)?.['coachsex'] === 4) {
              // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>?"
              scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}?"`);
            }
          }
        }
      }
    } else {
      if (((s as any).vballVars ?? 0)?.['coach_lust'] > 0) {
        if (((s as any).vballVars ?? 0)?.['coach_lust'] < 20) {
          scene.text('His attention flicker down towards your ass for a moment before coming back up to meet your eyes.');
        } else {
          if (((s as any).vballVars ?? 0)?.['coach_lust'] < 40) {
            scene.text('Sometimes you can see Coach Mikhail looking your body up and down.');
          } else {
            if (((s as any).vballVars ?? 0)?.['coach_lust'] < 60) {
              scene.text('Coach seems more interested in watching you practice than the other girls.');
            } else {
              if (((s as any).vballVars ?? 0)?.['coach_lust'] < 80) {
                scene.text('Coach sometimes makes lewd comments around you and you often catch him ogling your body.');
              } else {
                scene.text('Coach can\'t take his eyes of you and he keeps making sexual references in your presence.');
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "What is it <<$pcs_lastname>>? Did you need help with something?"
    scene.text(`"What is it ${((s as any).pcs_lastname ?? 0)}? Did you need help with something?"`);
  }
  qspCall(s, 'volley_coach', 'coach_talk_menu');
  scene.build();
}

function enterCoachTalkMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'volley_coach', 'join_team1');
  if (((s as any).npc_rel ?? 0)?.['A69'] < 60) {
    scene.actions([
      { label: 'Ask him about his personal life', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don't think that's any of your business <<$pcs_lastname>>."
    scene.text(`"I don't think that's any of your business ${((s as any).pcs_lastname ?? 0)}."`);
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
    ]);
  }
  if (((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['last_lovetalk']) {
    scene.actions([
      { label: 'Ask him what he loves about volleyball', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['last_lovetalk'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    if (((s as any).vballVars ?? 0)?.['coach_speak'] < 1) {
      ((s as any).vballVars ?? {})['coach_speak'] = 1;
    }
    // TODO-QSP: dynamic text: You decide to talk to him about the rumours that he played on the European champ...
    scene.text(`You decide to talk to him about the rumours that he played on the European championship winning team, but the subject seems to be painful. "${((s as any).pcs_lastname ?? 0)}, I won't dredge up the past just to satisfy your curiosity," he tells you.`);
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A69'] >= 60) {
    if (((s as any).vballVars ?? 0)?.['trainer_home'] === 0) {
      scene.actions([
        { label: 'Ask about where he lives', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['trainer_home'] = 1;
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('He lives in the residential district in a one bedroom apartment by himself.');
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
      ]);
    }
    if (((s as any).vballVars ?? 0)?.['coach_wife'] === 0) {
      scene.actions([
        { label: 'Ask him if he has a girlfriend', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    ((s as any).vballVars ?? {})['coach_wife'] = 1;
    scene.text('He tells you he has a wife he\'s separated from. They\'re still legally married, but they no longer live together or interact. You sense it\'s an uncomfortable subject for him.');
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
      ]);
    } else {
      if (((s as any).vballVars ?? 0)?.['coach_wife'] === 1  &&  ((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['ask_coach_wife']) {
        scene.actions([
          { label: 'Ask him about his wife', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['ask_coach_wife'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    if (((s as any).vballVars ?? 0)?.['coach_speak'] < 2) {
      ((s as any).vballVars ?? {})['coach_speak'] = 2;
    }
    ((s as any).vballVars ?? {})['coach_wife'] = 2;
    // TODO-QSP: dynamic text: Seeing that the subject upset Mikhail, you attempt to cheer him up. Chirping all...
    scene.text(`Seeing that the subject upset Mikhail, you attempt to cheer him up. Chirping all sorts of nonsense, you eventually ask about his wife. "${((s as any).pcs_lastname ?? 0)}, do you have nothing better to do than ask me about stuff that doesn't concern you?" You continue to pester him and say that you are very interested. He finally gives up and tells you a little more, though you can tell there is a lot he is still holding back.`);
    if (((s as any).pcs_horny ?? 0) > 80  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 50) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
      scene.text('"I\'m not afraid, and I doubt she is prettier than me," you retort, making Mikhail smile.');
    }
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
        ]);
      } else {
        if (((s as any).vballVars ?? 0)?.['coach_wife'] >= 2  &&  ((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['ask_coach_wife']) {
          scene.actions([
            { label: 'Ask him more about his wife', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['ask_coach_wife'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    if (((s as any).vballVars ?? 0)?.['coach_speak'] < 3) {
      ((s as any).vballVars ?? {})['coach_speak'] = 3;
    }
    scene.text('Studiously avoiding any mention of the European championship, you ask the coach to talk about volleyball. He tells you that being a competitive player means being focused. Responsible players do not go to dances and guzzle booze right before competitions. You were hoping to hear something actually interesting, but instead get a lecture and end up tuning him out.');
    if (((s as any).pcs_horny ?? 0) > 80  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 50) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
      scene.text('Quickly bored, you decide to interrupt his monologue with a bit of provocative action.');
      scene.actions([
        { label: 'Interrupt', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak2.jpg');
    // TODO-QSP: 'You go to the window and start playing with your hair, giving the coach ample opportunity to admire...
    scene.actions([
      { label: 'Say goodbye', goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).vballVars ?? 0)?.['coach_speak'] >= 3  &&  ((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['last_flirt']) {
    scene.actions([
      { label: 'Flirt with him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    ((s as any).vballVars ?? {})['last_flirt'] = ((s as any).daystart ?? 0);
    ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).vballVars ?? 0)?.['coach_speak'] < 4) {
      ((s as any).vballVars ?? {})['coach_speak'] = 4;
    }
    scene.text('Once again you decide to talk about volleyball with Mikhail. His eyes become a bit unfocused as he begins his story. "When we arrived at the competition, the USSR teams settled into the hotel. I was not small, 194 cm in height, but while waiting for the lift I was quite impressed by the team of our Soviet athletes standing nearby. I felt like a pygmy next to these monumental figures from the great sport. We all piled into the elevator and began to head up. On one of the middle floors the elevator stopped, and two puny Asians wearing coaches\' caps got on and begin enthusiastically speaking to each other, looking at our girls\' butts. When the elevator stopped and the women got off, one of the Asians playfully slaps the last one on the ass. Without turning around, and by pure reflex, she thrusts her elbow back, catching the Asian right between the eyes. There was a dull thud and the unfortunate guy falls unconscious, sliding down the rear wall of the elevator while his friend just laughed. The woman slowly turns her head and utters the immortal phrase: \'Oh, exotics wanted...\'"');
    // TODO-QSP: 'As the coach tells you this story, with its sexual overtones, you think,' + $OpenInnerThought + ' "...
    ((s as any).vballVars ?? {})['coach_tanga'] = 1;
    scene.actions([
      { label: 'Show him', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak4.jpg');
    scene.text('You pull on your shorts as if you were adjusting them, pulling them so hard that your pussy is clearly outlined in a camel-toe. From the way he stares at your crotch, you know your attempts to catch his interest were successful.');
    scene.text('"The ball is in your court, so watch carefully," you say with a mischievous smile. Mikhail, a bit confused, turns away.');
    // TODO-QSP: $OpenInnerThought + '"I''ll have to do something more to tease him, maybe not wear panties during ou...
    scene.actions([
      { label: 'Say goodbye', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).vballVars ?? 0)?.['coach_speak'] >= 4  &&  ((s as any).ShowerIvan ?? 0) >= 3  &&  ((s as any).centr ?? 0) === 0  &&  ((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['last_seduce']) {
    scene.actions([
      { label: 'Bring up Ivan', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['last_seduce'] = ((s as any).daystart ?? 0);
    qspCall(s, 'volley_coach', 'seduce_coach1');
  } },
    ]);
  }
  if (((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['last_ask_massage']) {
    scene.actions([
      { label: 'Ask him for a massage', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['last_ask_massage'] = ((s as any).daystart ?? 0);
    ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 1) {
      scene.text('"Hey Coach, I\'m feeling kind of stiff after practice. Could you maybe… give me a massage? Help work out the kinks in my muscles?"');
      if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 60) {
        ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
        scene.text('A hungry glint appears in his eyes and you can see him imagining his hands all over your body.');
        scene.text('"Yes… muscular health is… important… Why don\'t you come into the back here?" he says, gesturing towards a door at the back of his office. "I have a massage table back there. It\'ll be much more effective than in a chair."');
        scene.actions([
          { label: 'Chicken out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/coach_office.jpg');
    scene.text('You take a step towards him and hesitate.');
    scene.text('<i>Are you really going to do this?</i>');
    scene.text('"ActuallyIthinkImfineIllseeyouatpracticeCoach!"');
    scene.text('Spewing out a torrent of words, you rush out the door and slam it shut behind you.');
    scene.text('<i>What were you thinking?</i>');
    scene.actions([
      { label: 'Continue', goto: ['gdksport', 'start'] },
    ]);
  } },
          { label: 'Follow him', goto: ['volley_coach', 'massage_start'] },
        ]);
      } else {
        if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 30) {
          ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
          scene.text('You see his gaze roam up and down your body and for a moment, you think he might be considering it before he suddenly looks away.');
          // TODO-QSP: dynamic text: "No, you just need rest. Don't… bother me right now <<$pcs_lastname>>."
          scene.text(`"No, you just need rest. Don't… bother me right now ${((s as any).pcs_lastname ?? 0)}."`);
          scene.text('He immediately turns back towards whatever he was working on on his desk.');
          scene.text('<i>Ugh. So close,</i> you sigh internally as you leave his office.');
          scene.actions([
            { label: 'Continue', goto: ['gdksport', 'start'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "No <<$pcs_lastname>>, you just need rest. Go home. Don't bother me with this."
          scene.text(`"No ${((s as any).pcs_lastname ?? 0)}, you just need rest. Go home. Don't bother me with this."`);
          scene.text('He doesn\'t even give you another look as he continues looking at his stats.');
          scene.actions([
            { label: 'Continue', goto: ['gdksport', 'start'] },
          ]);
        }
      }
    } else {
      if (((s as any).vballVars ?? 0)?.['coachsex'] >= 1) {
        scene.text('"Hey Coach, I\'m feeling kind of… <i>stiff</i> after practice," you say suggestively. "Could you… give me another massage? Help work out the kinks in my muscles?"');
        scene.text('He motions for you to follow him into the back room.');
        scene.actions([
          { label: 'Continue', goto: ['volley_coach', 'massage_start'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).daystart ?? 0) > ((s as any).vballVars ?? 0)?.['last_relief']  &&  ((s as any).vballVars ?? 0)?.['coach_massage'] >= 3  &&  ((s as any).vballVars ?? 0)?.['coach_lust'] >= 60) {
    qspCall(s, 'volley_coach', 'relief_offer');
  }
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
    { label: 'Check on your stats', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['coachsex'] === 0) {
      ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (1);
      // TODO-QSP: dynamic text: Coach looks at you, "<<$pcs_lastname>>. Here's your stats, now go out there and ...
      scene.text(`Coach looks at you, "${((s as any).pcs_lastname ?? 0)}. Here's your stats, now go out there and work harder."`);
    } else {
      // TODO-QSP: dynamic text: Coach looks at you "Hey <<$pcs_nickname>>. Checking up on your stats?."
      scene.text(`Coach looks at you "Hey ${((s as any).pcs_nickname ?? 0)}. Checking up on your stats?."`);
    }
    // TODO-QSP: dynamic text: "Your volleyball skill is <<pcs_vball>>, the team has played <<vballVars['losses...
    scene.text(`"Your volleyball skill is ${((s as any).pcs_vball ?? 0)}, the team has played ${((s as any).vballVars ?? {})?.['losses'] + ((s as any).vballVars ?? {})?.['wins']} games: Won - ${((s as any).vballVars ?? 0)?.['wins']}, lost - ${((s as any).vballVars ?? 0)?.['losses']}."`);
  } },
  ]);
  scene.build();
}

function enterJoinTeam1(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'body_din', 'pregnancyVisibility')) {
    // TODO-QSP: exit
  }
  if (((s as any).daystart ?? 0) <= ((s as any).vballVars ?? 0)?.['ask_join_team']) {
    // TODO-QSP: exit
  }
  if (((s as any).vballVars ?? 0)?.['on_team'] === 0) {
    scene.actions([
      { label: 'Ask to join the team', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['ask_join_team'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    if (((s as any).pcs_vball ?? 0) < 35) {
      scene.text('You ask the coach about joining the team.');
      scene.text('"No," he says firmly and shakes his head. "You\'re just not good enough. Not even for the bench. Come back when you have some real skill."');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    } else {
      if (((s as any).pcs_vball ?? 0) < 45 - 2 * ((s as any).vballVars ?? 0)?.['coachsex']) {
        scene.text('You ask the coach about joining the team. After thinking for a minute, he says "I have a spot for a substitute, but I don\'t know if you have what it takes."');
        qspCall(s, 'willpower', 'misc', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Persuade him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Persuade him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A69'] >= 60) {
      ((s as any).vballVars ?? {})['on_team'] = 1;
      ((s as any).vballVars ?? {})['sub_player'] = 1;
      qspCall(s, 'calendar', 'add', 'volleyball_tournament');
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
      // TODO-QSP: dynamic text: You appeal to the coach and ask him to at least give you a chance to prove yours...
      scene.text(`You appeal to the coach and ask him to at least give you a chance to prove yourself. Since he likes you, he decides to give you a break. "Okay, ${((s as any).pcs_nickname ?? 0)}, I do have an opening for a sub. You're on the team as a substitute player.`);
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    } else {
      scene.text('You try to prove to the coach that he should let you on the team, but he counters all your arguments, denying you a place on the team.');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['gdksport', 'start'] },
        ]);
      } else {
        if (((s as any).pcs_vball ?? 0) < 60) {
          if (((s as any).vballVars ?? 0)?.['coachsex'] >= 3) {
            scene.text('You ask the coach about joining the team.');
            scene.text('"I might have some room on the bench for you…" he says slowly, pulling you close and giving your ass a firm squeeze.');
          } else {
            scene.text('You ask the coach about joining the team. He thinks for a minute, then says "You have good skills for an amateur, but you\'re still not good enough to start on the team. However, I have room for a substitute, and we can put you there. How does that sound?"');
          }
          scene.actions([
            { label: 'Leave', goto: ['gdksport', 'start'] },
            { label: 'Accept the substitute position', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
    ((s as any).vballVars ?? {})['on_team'] = 1;
    ((s as any).vballVars ?? {})['sub_player'] = 1;
    qspCall(s, 'calendar', 'add', 'volleyball_tournament');
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('You accept the substitute position and the coach nods his head in confirmation.');
    // TODO-QSP: dynamic text: "Okay, welcome to the team <<$pcs_lastname>>. Remember, tournament matches are o...
    scene.text(`"Okay, welcome to the team ${((s as any).pcs_lastname ?? 0)}. Remember, tournament matches are on Saturdays. Don't forget to show up!"`);
    scene.actions([
      { label: 'Leave', goto: ['volley_coach', 'coach_office'] },
    ]);
  } },
          ]);
        } else {
          scene.text('You ask the coach about joining the team and he offers you a starting position.');
          scene.actions([
            { label: 'Leave', goto: ['gdksport', 'start'] },
            { label: 'Accept the starter position', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (5);
    ((s as any).vballVars ?? {})['on_team'] = 1;
    ((s as any).vballVars ?? {})['sub_player'] = 0;
    qspCall(s, 'calendar', 'add', 'volleyball_tournament');
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('You happily accept, "Oh Mikhail! Thank you so much, I won\'t let you down." The coach grins at you and nods his head in confirmation.');
    // TODO-QSP: dynamic text: "Okay, welcome to the team <<$pcs_lastname>>. Remember, tournament matches are o...
    scene.text(`"Okay, welcome to the team ${((s as any).pcs_lastname ?? 0)}. Remember, tournament matches are on Saturdays. Don't forget to show up!"`);
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).vballVars ?? 0)?.['sub_player'] === 1  &&  ((s as any).pcs_vball ?? 0) >= 60) {
      scene.actions([
        { label: 'Ask about be a Starter', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['ask_join_team'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).vballVars ?? {})['sub_player'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener5.jpg');
    // TODO-QSP: dynamic text: Mikhail smiles at you, gives a thumbs up, and says, "<<$pcs_lastname>>, I want t...
    scene.text(`Mikhail smiles at you, gives a thumbs up, and says, "${((s as any).pcs_lastname ?? 0)}, I want to congratulate you, I think. I've decided to make you a first string regular. From now on, you'll be starting."`);
    scene.text('"But," he adds, shaking his finger at you admonishingly. "You still need to keep practicing, and less drinking!"');
    scene.text('You squeal happily and threw your arms around the Mikhail\'s neck. "Now we have them… I always… Yes we like…" The excitement of the unexpected announcement left you unable to speak and Mikhail just smiles at you and says "Go."');
    qspCall(s, 'volley_coach', 'coach_talk_menu');
  } },
      ]);
    }
  }
  scene.build();
}

function enterLariskaJoin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 0  &&  ((s as any).lariskaQW ?? 0)?.['join_team'] > 0) {
    scene.actions([
      { label: 'Try to get Lariska on the team', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('You and Lariska approach Coach Mikhail.');
    scene.text('"Hmm? What is it you two?" he grunts.');
    if (((s as any).lariskaQW ?? 0)?.['join_team'] === 1) {
      scene.text('"You should let Lariska on the team," you tell him. "She\'s talented and will work really hard! I\'m sure she\'ll end up as one of your star players!"');
      scene.text('"I\'m sure she looks that way to an amateur but she\'s not good enough for this team," Mikhail shakes his head.');
      scene.text('You and Lariska tried to persuade Mikhail to take Lariska, but he refuses to consider your arguments and chases you off.');
    } else {
      if (((s as any).lariskaQW ?? 0)?.['join_team'] === 2) {
        scene.text('"You should let Lariska on the team," you tell him. "She\'s talented and will work really hard! I\'m sure she\'ll end up as one of our star players!"');
        scene.text('"Players on the bench don\'t get to tell me how to fill my roster," Mikhail frowns.');
        qspCall(s, 'willpower', 'misc', 'force');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince Mikhail to let Lariska play [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You and Lariska tried to persuade ...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince Mikhail to let Lariska play [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['lariska_team'] = 1;
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A13', 20);
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Just give her a chance!" you plead. "She won\'t let you down, I promise."');
    scene.text('You manage to convince Mikhail to let Lariska join the team.');
    // TODO-QSP: dynamic text: When you came out of the coach's office, Lariska hugs you and says, "Thank you, ...
    scene.text(`When you came out of the coach's office, Lariska hugs you and says, "Thank you, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).lariskaQW ?? 0)?.['join_team'] === 3) {
          scene.text('"We want to play on the team," you tell him and Lariska nods firmly.');
          scene.text('"No." Coach Mikhail refuses you.');
          qspCall(s, 'willpower', 'misc', 'force', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Convince Mikhail to let both of you join the team [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You and Lariska tried to persuade ...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Convince Mikhail to let both of you join the team [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['on_team'] = 1;
    ((s as any).vballVars ?? {})['lariska_team'] = 1;
    qspCall(s, 'calendar', 'add', 'volleyball_tournament');
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A13', 20);
    if (((s as any).npc_rel ?? 0)?.['A69'] > 30) {
      qspCall(s, 'npc_relationship', 'set', 'A69', 30);
    }
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('You take an aggressive approach, and although he doesn\'t like it, you manage to convince Mikhail to let you both play.');
    // TODO-QSP: dynamic text: When you come out of the coach's office, Lariska hugs you and says, "Thank you, ...
    scene.text(`When you come out of the coach's office, Lariska hugs you and says, "Thank you, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
            ]);
          }
        } else {
          if (((s as any).lariskaQW ?? 0)?.['join_team'] === 4) {
            scene.text('"You should let Lariska on the team," you tell him. "She\'s talented and will work really hard! I\'m sure she\'ll end up as one of our star players!"');
            scene.text('"Just because you\'re on the team doesn\'t mean that you get to tell me what to do with the roster," Mikhail frowns. "That\'s <i>my</i> decision."');
            qspCall(s, 'willpower', 'misc', 'force');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Convince Mikhail to let Lariska play [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You tried to persuade Mikhail to t...
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Convince Mikhail to let Lariska play [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['lariska_team'] = 1;
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A13', 20);
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('You manage to convince Mikhail to let Lariska join the team.');
    // TODO-QSP: dynamic text: When you come out of the coach's office, Lariska hugs you and says, "Thank you, ...
    scene.text(`When you come out of the coach's office, Lariska hugs you and says, "Thank you, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
    ((s as any).lariskaQW ?? {})['join_team'] = 0;
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterMassageStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  qspCall(s, 'boystat', 'A69');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  // TODO-QSP: dynamic text: You follow <<$npc_nickname['A69']>> into the back of his office. It has a massag...
  scene.text(`You follow ${((s as any).npc_nickname ?? 0)?.['A69']} into the back of his office. It has a massage table on it as well as a multitude of medical supplies for various kinds of sports injuries.`);
  if (((s as any).vballVars ?? 0)?.['coach_lust'] < 60  &&  ((s as any).vballVars ?? 0)?.['coachsex'] < 2) {
    // TODO-QSP: dynamic text: "Lay down on the table <<$pcs_lastname>>," he says, turning away for a moment to...
    scene.text(`"Lay down on the table ${((s as any).pcs_lastname ?? 0)}," he says, turning away for a moment to get something.`);
    qspCall(s, 'volley_coach', 'normal_massage_start');
    qspCall(s, 'volley_coach', 'nude_massage_start2');
  } else {
    // TODO-QSP: dynamic text: "Take off your clothes and lay down on the table <<$pcs_lastname>>," he says, tu...
    scene.text(`"Take off your clothes and lay down on the table ${((s as any).pcs_lastname ?? 0)}," he says, turning away for a moment to get something.`);
    qspCall(s, 'volley_coach', 'nude_massage_start1');
  }
  scene.build();
}

function enterNormalMassageStart(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Lay down', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/before1.jpg');
    scene.text('You do as he says, laying face down on the table.');
    scene.text('He comes up behind you and you can feel his hands on your shoulders.');
    scene.text('"Just try and relax…"');
    qspCall(s, 'volley_coach', 'normal_massage1');
  } },
  ]);
  scene.build();
}

function enterNormalMassage1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Try to relax', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'massage', 20, 'no_orgasm_msg');
    ((s as any).vballVars ?? {})['coach_massage'] = (((s as any).vballVars ?? {})['coach_massage'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage1.jpg');
    if (((s as any).vballVars ?? 0)?.['coach_massage'] === 1) {
      scene.text('The next half hour is spent under the coach\'s ministrations.');
      scene.text('Involuntary gasps are drawn from you as he kneads his hands into your muscles. He knows exactly where to apply pressure, how to run his hand along your aching muscles. Your breath can\'t help but hitch from his touch, and you feel a deep warmth spreading from between your legs.');
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
        ((s as any).vballVars ?? {})['coach_mass_orgasm'] = (((s as any).vballVars ?? {})['coach_mass_orgasm'] ?? 0) + (1);
        scene.text('Despite the fact that it\'s just a massage you can\'t help but be aroused. Arousal builds to excitement, excitement turns to pure pleasure, and before you know it you\'re biting down hard on the towel beneath you, trying to keep from crying out as you shudder in orgasm.');
        // TODO-QSP: dynamic text: "Are you feeling okay <<$pcs_lastname>>? Something wrong?" You simply shake your...
        scene.text(`"Are you feeling okay ${((s as any).pcs_lastname ?? 0)}? Something wrong?" You simply shake your head in response, not trusting yourself to speak. Did he really make you come from just a massage?`);
      }
      scene.actions([
        { label: 'Finish', goto: ['volley_coach', 'cloth_massage_end'] },
      ]);
    } else {
      if (((s as any).vballVars ?? 0)?.['coach_massage'] <= 4) {
        qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg');
        scene.text('It\'s just as good as last time. You groan in pleasure as the coach\'s hands work through your sore muscles, gasping when he hits those perfect spots that can\'t help but turn you on.');
        // TODO-QSP: dynamic text: Through the process, you can't help but notice moments when <<$npc_nickname['A69...
        scene.text(`Through the process, you can't help but notice moments when ${((s as any).npc_nickname ?? 0)?.['A69']} takes advantage of the situation. When massaging your sides, his fingers press into your breasts. In addition to when he works his perfect pressure points, a gasp is elicited when he grabs a handful of ass on the way down to your legs. And this time he spends a lot more time massaging your thighs, especially on the inside. Makes you wonder if he notices your spreading wetness in return.`);
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          if (((s as any).vballVars ?? 0)?.['coach_mass_orgasm'] > 0) {
            scene.text('Eventually you can\'t take it anymore, and you find yourself orgasming under his touch. <i>Again</i>. Even as every muscle in your body clenches in your climax, he doesn\'t let up.');
            // TODO-QSP: dynamic text: "You're <i>very tight</i> <<$pcs_lastname>>. You should do more stretches before...
            scene.text(`"You're <i>very tight</i> ${((s as any).pcs_lastname ?? 0)}. You should do more stretches before and after practice, loosen your muscles up some more."`);
            scene.text('<i>How does he do this?</i>');
          } else {
            // TODO-QSP: dynamic text: Eventually you can't take it anymore, and you find yourself orgasming under his ...
            scene.text(`Eventually you can't take it anymore, and you find yourself orgasming under his touch. Again. Even as every muscle in your body clenches up again, he doesn't let up. "You're very <i>tight</i> ${((s as any).pcs_lastname ?? 0)}. You need to loosen up some more." Breathing slowly, you choose not to respond.`);
          }
          ((s as any).vballVars ?? {})['coach_mass_orgasm'] = (((s as any).vballVars ?? {})['coach_mass_orgasm'] ?? 0) + (1);
        }
        scene.actions([
          { label: 'Finish', goto: ['volley_coach', 'cloth_massage_end'] },
        ]);
      } else {
        if (((s as any).vballVars ?? 0)?.['coach_massage'] === 5) {
          scene.text('He\'s starting to get bolder now.');
          // TODO-QSP: dynamic text: <<$npc_nickname['A69']>>'s hands roam your body freely, openly and brazenly copp...
          scene.text(`${((s as any).npc_nickname ?? 0)?.['A69']}'s hands roam your body freely, openly and brazenly copping a feel of you wherever he pleases. He squeezes your breasts in handfuls. His hands spread your ass cheeks. His fingers freely rub your snatch.`);
          scene.text('You swear, half this "massage" is spent groping you instead. Not that it matters to you. It feels good.');
          scene.text('You allow your eyes to roll back as you relax into sensual bliss.');
          if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            scene.text('When your climax comes, you don\'t even try to hide it. It starts as soft grunts before becoming loud moans and then a gasping cry as you cum hard, your clit fingered through your pants as you ride out your orgasm.');
          }
          qspCall(s, 'arousal', 'foreplay', (-15));
          scene.actions([
            { label: 'Finish', goto: ['volley_coach', 'cloth_massage_end'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: <<$npc_nickname['A69']>>'s hands roam your body freely and you moan in response ...
          scene.text(`${((s as any).npc_nickname ?? 0)?.['A69']}'s hands roam your body freely and you moan in response to his touch. Half massage, half foreplay, you enjoy yourself while ${((s as any).npc_nickname ?? 0)?.['A69']} enjoys your body. Sore muscles are worked loose and erogenous zones are teased and played with. Through one way or another, you find yourself supremely relaxed.`);
          scene.text('You allow your eyes to roll back as you relax into sensual bliss.');
          qspCall(s, 'arousal', 'foreplay', (-15));
          scene.actions([
            { label: 'Finish', goto: ['volley_coach', 'cloth_massage_end'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterClothMassageEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  // TODO-QSP: dynamic text: "There, all done," <<$npc_nickname['A69']>> says, drawing his hands back.
  scene.text(`"There, all done," ${((s as any).npc_nickname ?? 0)?.['A69']} says, drawing his hands back.`);
  if (((s as any).vballVars ?? 0)?.['coach_massage'] === 1) {
    scene.text('You roll your shoulders and stretch, sighing in relief at your loosened muscles.');
  } else {
    if (((s as any).vballVars ?? 0)?.['coach_massage'] <= 4) {
      scene.text('You roll your shoulders and stretch, sighing in relief at your loosened muscles, rolling your hips in relaxed arousal.');
    } else {
      scene.text('You roll your shoulders and stretch, sighing in relief at your loosened muscles, making eye contact with him as you adjust your clothes around your breasts and tug on your waistband around your hips.');
    }
  }
  scene.text('"Feel better now?"');
  scene.actions([
    { label: 'Much better', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('"Much better," you say, stretching your arms behind your back so your breasts push out against your top, heavily emphasizing your stiff nipples. "Thanks for the massage Coach."');
    // TODO-QSP: dynamic text: "You're welcome <<$pcs_lastname>>. Now hit the showers."
    scene.text(`"You're welcome ${((s as any).pcs_lastname ?? 0)}. Now hit the showers."`);
    scene.actions([
      { label: 'Yes Coach', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gdksport', 'start'] },
      { label: 'Wanna join me?', handler: (st: GameState) => {
    scene.text('"Yes coach. Wanna come with?" you smirk heading towards the door.');
    if (((s as any).vballVars ?? 0)?.['coachsex'] >= 3) {
      // TODO-QSP: dynamic text: You yelp when you feel a hand fiercely slap across your ass, jumping on contact....
      scene.text(`You yelp when you feel a hand fiercely slap across your ass, jumping on contact. You glare back at ${((s as any).npc_nickname ?? 0)?.['A69']}. His expression is neutral but for a childish glint in his eye.`);
      // TODO-QSP: dynamic text: "I can play games too, <<$pcs_lastname>>."
      scene.text(`"I can play games too, ${((s as any).pcs_lastname ?? 0)}."`);
      scene.text('"It was worth a shot," before exiting out the door.');
    } else {
      scene.text('Looking back over your shoulder you can see his gaze roaming your body, obviously tempted by your offer.');
      // TODO-QSP: dynamic text: "Nobody likes a tease, <<$pcs_lastname>>," he sighs.
      scene.text(`"Nobody likes a tease, ${((s as any).pcs_lastname ?? 0)}," he sighs.`);
      scene.text('"The tightness in your pants say otherwise," you reply slyly, slipping out the door.');
    }
    scene.actions([
      { label: 'Continue', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMassageUndress(s: GameState, scene: SceneBuilder): void {
  ((s as any).lastwornclothingtype ?? {})['coach_mass'] = ((s as any).clothingworntype ?? 0);
  ((s as any).lastwornclothingnumber ?? {})['coach_mass'] = ((s as any).clothingwornnumber ?? 0);
  ((s as any).lastwornpantytype ?? {})['coach_mass'] = ((s as any).pantyworntype ?? 0);
  ((s as any).lastwornpantynumber ?? {})['coach_mass'] = ((s as any).pantywornnumber ?? 0);
  ((s as any).lastwornbratype ?? {})['coach_mass'] = ((s as any).braworntype ?? 0);
  ((s as any).lastwornbranumber ?? {})['coach_mass'] = ((s as any).brawornnumber ?? 0);
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'clothing', 'strip');
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    qspCall(s, 'bras', 'remove');
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    qspCall(s, 'panties', 'remove');
  }
  scene.build();
}

function enterMassageRedress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).lastwornpantytype ?? 0)?.['coach_mass'] !== 'none') {
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['coach_mass'], lastwornpantynumber['coach_mass']
  }
  if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).lastwornbratype ?? 0)?.['coach_mass'] !== 'none') {
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['coach_mass'], lastwornbranumber['coach_mass']
  }
  scene.build();
}

function enterNudeMassageStart1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take off your clothes', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['massage_react'] = 'relaxed';
    qspCall(s, 'volley_coach', 'massage_undress');
    scene.img('images/shared/sex/massage/before1.jpg');
    scene.text('You do as he says, taking off your clothes and laying belly down on the table.');
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'back_rub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeMassageStart2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take off your clothes first', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['massage_react'] = 'relaxed';
    qspCall(s, 'volley_coach', 'massage_undress');
    scene.img('images/shared/sex/undress/top1.mp4');
    scene.text('While his back is turned, you pull your top over your head and let it fall to the ground. Coach Mikhail turns back and freezes in shock as soon as he lays his eyes on your bare breasts.');
    // TODO-QSP: dynamic text: "W-what are you doing <<$pcs_lastname>>?" he stammers, belatedly turning his hea...
    scene.text(`"W-what are you doing ${((s as any).pcs_lastname ?? 0)}?" he stammers, belatedly turning his head away.`);
    scene.actions([
      { label: 'Act innocent', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/panties_off.mp4');
    // TODO-QSP: dynamic text: "What do you mean?" you ask, playing dumb, just before tucking your thumbs into ...
    scene.text('"What do you mean?" you ask, playing dumb, just before tucking your thumbs into your waistband and \' + iif($pantyworntype ! \'none\', \'pull down your pants and panties together in one smooth motion. \', \'pull down your pants in one smooth motion, revealing your lack of anything underneath. \') + \'"You told me to get on the table. Massages like these are usually done naked, aren\'t they?"');
    scene.text('Apparently unable to resist, his eyes turns turn back to take the ever so smallest peek. What he sees causes them to bulge. You look back innocently before casually climbing atop the table and closing your eyes.');
    scene.text('Several long moments pass in silence… before you hear him approach the table. You quietly smile with your eyes still shut as you feel his hands start spreading oil on your bare skin.');
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'back_rub'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeMassage1(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNudeMassage2(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBackRub(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['coachsex'] < 2) {
    ((s as any).vballVars ?? {})['coachsex'] = 2;
  }
  ((s as any).vballVars ?? {})['sex_pos'] = 'massage';
  scene.img('images/shared/sex/massage/body_massage2.mp4');
  ((s as any).vballVars ?? {})['coach_nude_massage'] = (((s as any).vballVars ?? {})['coach_nude_massage'] ?? 0) + (1);
  qspCall(s, 'arousal', 'massage', 15, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).vballVars ?? 0)?.['massage_react'] === 'relaxed') {
    scene.text('You groan softly as Coach Mikhail kneads his hands all the way up and down your back and across your arms. He knows exactly where to apply pressure, how to work the tension from your aching muscles, how to hit the spots that make your breath hitch. Your breath hitches under his touch and a deep warmth is spreading between your legs.');
  } else {
    if (((s as any).vballVars ?? 0)?.['massage_react'] === 'nervous') {
      scene.text('Butterflies fill your stomach as Coach Mikhail kneads his hands all the way up and down your back and across your arms. They stop at a point in your back, pressing down hard, the pressure increasing almost to pain. Your breath hitches, about to cry out when you feel a <i>pop</i> and all tension is suddenly released from you, an involuntary sigh released with it as his hands start roaming your body again.');
      scene.text('The fluttering in your stomach settles down and you become lost in mindless bliss and the deep warmth spreading between your legs.');
    }
  }
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'massage', 15, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 3) {
      if (((s as any).vballVars ?? 0)?.['coach_nude_massage'] === 1) {
        qspCall(s, 'volley_coach', 'full_body');
      } else {
        qspCall(s, 'volley_coach', 'inner_thigh');
      }
    } else {
      qspCall(s, 'volley_coach', 'pussy_touch');
    }
  } },
  ]);
  scene.build();
}

function enterFullBody(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['coach_nude_massage'] < 5) {
    qspCall(s, 'arousal', 'foreplay', (-15), 'no_orgasm_msg');
    qspCall(s, 'arousal', 'massage', 5, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/massage/body_massage3.mp4');
    scene.text('Coach continues the massage but his hands start going lower and lower.');
    scene.text('First, it\'s just your ass…');
    scene.text('"Need to loosen up those glutes," he says.');
    scene.text('Then it\'s the inside of your thighs…');
    scene.text('"Can\'t forget the hamstrings," he murmurs.');
    scene.text('Before you know it, his fingers are squeezing your pussy\'s lips from both sides, grazing along the edge of your asshole on the way back up. Any closer he\'d have his fingers in both holes.');
    scene.text('"It\'s important to make sure we get the <i>deep tissue</i> to properly release tension," he whispers softly. ');
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'nude_massage_end'] },
    ]);
  } else {
    qspCall(s, 'arousal', 'foreplay', (-15), 'no_orgasm_msg');
    qspCall(s, 'arousal', 'massage', 5, 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/massage/body_massage3.mp4');
    scene.text('It isn\'t long until his hands start wandering again, running up and down your back, taking big grabbing handfuls of your ass, teasing your pussy with his expert touch…');
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'inner_thigh'] },
    ]);
  }
  scene.build();
}

function enterInnerThigh(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg');
  qspCall(s, 'arousal', 'massage', 15, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/leg_rub1.mp4');
  scene.text('"Let\'s make sure we get your quads and hamstrings too," Coach Mikhail says, moving down below your hips. His hands knead into your thigh, making sure to work every part, including where your thighs meet your ass.');
  scene.text('"Never neglect your thighs," he murmurs. "When you play volleyball, you\'re constantly running and jumping, no matter what you do. However much you use your hands, it\'s nothing compared to what you do with your legs."');
  scene.text('His fingers come dangerously close to your pussy and it\'s all you can do to stifle a squeak as they brush past. The warmth within you has intensified into heat and you know without a doubt that you\'re getting wet. You can\'t help but wonder if he notices or if your juices are mixing and getting lost in the oils covering your body.');
  if (((s as any).vballVars ?? 0)?.['massage_react'] === 'relaxed') {
    scene.text('<i>Fuck-!</i> you think, biting down on your lip hard to keep from moaning. <i>He\'s so close-! It\'s such a tease-!</i>');
  } else {
    scene.text('<i>Is he doing this on purpose…?</i> you think, biting down on your lip hard to keep from moaning.');
  }
  scene.actions([
    { label: 'Continue', goto: ['volley_coach', 'pussy_touch'] },
  ]);
  scene.build();
}

function enterPussyTouch(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/massage/pussy_play4.mp4');
  qspCall(s, 'arousal', 'clit_finger', 5, 'no_orgasm_msg');
  qspCall(s, 'arousal', 'clit_finger', (-10), 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.text('All pretense is gone as Coach Mikhail is openly playing with your clit now. You squirm beneath his expert touch, moaning uncontrollably as he pushes all the right buttons to drive you crazy.');
  scene.text('<i>At this rate-!</i> you think, gasping silently. <i>I\'m gonna-!</i>');
  scene.actions([
    { label: 'Try not to come', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/finger_orgasm1.mp4');
    scene.text('<i>"Hnn-! Nngh-! Hngh-! NNNGH-!"</i>');
    qspCall(s, 'arousal', 'clit_finger', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['coachsex'] >= 4  ||  ((s as any).vballVars ?? 0)?.['coach_lust'] > 60) {
      qspCall(s, 'volley_coach', 'after_massage_bj1');
    } else {
      qspCall(s, 'volley_coach', 'orgasm_massage_end');
    }
  } },
    ]);
  } },
    { label: 'Let it loose', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/finger_orgasm1.mp4');
    scene.text('<i>"UUNNNGGHH~!"</i>');
    qspCall(s, 'arousal', 'clit_finger', 1);
    qspCall(s, 'stat', '');
    scene.text('By the time it ends you\'re a slobbering mess, taking wheezing gasps while drool runs over your lips to soak into the towel beneath you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['coachsex'] >= 4  ||  ((s as any).vballVars ?? 0)?.['coach_lust'] > 60) {
      qspCall(s, 'volley_coach', 'after_massage_bj1');
    } else {
      qspCall(s, 'volley_coach', 'orgasm_massage_end');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOrgasmMassageEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  scene.text('As you catch your breath, Coach Mikhail wipes his hands on a towel and tosses it into a bin.');
  // TODO-QSP: dynamic text: "That's it for today, <<$pcs_lastname>>," he grunts. "Hit the showers. I'll clea...
  scene.text(`"That's it for today, ${((s as any).pcs_lastname ?? 0)}," he grunts. "Hit the showers. I'll clean this up later."`);
  scene.text('With that, he leaves you naked and alone.');
  scene.actions([
    { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
  ]);
  scene.build();
}

function enterAfterMassageBj1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/massage/bj_start1.mp4');
  // TODO-QSP: dynamic text: "Surely you're not finished yet, are you <<$pcs_lastname>>?" Coach Mikhail asks,...
  scene.text(`"Surely you're not finished yet, are you ${((s as any).pcs_lastname ?? 0)}?" Coach Mikhail asks, smirking as he drops his trousers right to let his huge and fully erect cock flop down in front of your face. "You can keep going a little longer…"`);
  scene.actions([
    { label: 'Tiredly obey', handler: (st: GameState) => {
    scene.text('Your head is still swimming from the intense orgasm but you obey your coach, tiredly taking his cock in your hand to guide into your mouth.');
    qspCall(s, 'volley_coach', 'after_massage_bj2');
  } },
    { label: 'Enthusiastically obey', handler: (st: GameState) => {
    scene.text('Tired as you are, that orgasm only increased your appetite for more. Your pussy practically <i>aches</i> with desire. With hips squirming in uncontrollable arousal, you eagerly grab your coach\'s cock with your hand to guide it into your mouth.');
    qspCall(s, 'volley_coach', 'after_massage_bj2');
  } },
  ]);
  scene.build();
}

function enterAfterMassageBj2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Blow him', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['sex_pos'] = 'blowjob';
    qspCall(s, 'arousal', 'bj', 5, 'no_orgasm_msg');
    scene.img('images/shared/sex/massage/bj5.mp4');
    scene.text('You blow him.');
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 5  &&  ((s as any).vballVars ?? 0)?.['coach_lust'] < 80) {
      qspCall(s, 'volley_coach', 'after_massage_bj_cum1');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['volley_coach', 'massage_fuck_pre'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAfterMassageBjCum1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/facial2.mp4');
    scene.text('"I\'m gonna come-!"');
    scene.text('With no additional warning, Coach Mikhail pops his cock from your mouth and blows his load all over your face, groaning loudly as he does.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial40.jpg');
    scene.text('Your head hangs over the side of the massage table, panting with exhaustion, unable even to summon the energy to complain when Coach Mikhail unceremoniously wipes his cock with your hair.');
    // TODO-QSP: dynamic text: "Hit the showers <<$pcs_lastname>>," he says as finishes cleaning himself. Witho...
    scene.text(`"Hit the showers ${((s as any).pcs_lastname ?? 0)}," he says as finishes cleaning himself. Without another word, he gets dressed and leaves you lying on his massage table with his cum dripping down your face.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReliefOffer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Offer him some "relief" in return', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['last_relief'] = ((s as any).daystart ?? 0);
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    // TODO-QSP: dynamic text: "I feel great <<$npc_nickname['A69']>>. Maybe I could…" you step in close to him...
    scene.text(`"I feel great ${((s as any).npc_nickname ?? 0)?.['A69']}. Maybe I could…" you step in close to him, putting your hands on his chest. "… do something for you now…?"`);
    if (((s as any).vballVars ?? 0)?.['coachsex'] === 3) {
      qspCall(s, 'volley_coach', 'relief_handjob1');
      qspCall(s, 'volley_coach', 'relief_blowjob1');
    } else {
      if (((s as any).vballVars ?? 0)?.['coachsex'] >= 4) {
        qspCall(s, 'volley_coach', 'relief_handjob1');
        qspCall(s, 'volley_coach', 'relief_blowjob1');
      } else {
        if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A69'] >= 80) {
          scene.text('"Like what?"');
          qspCall(s, 'volley_coach', 'relief_handjob1');
          qspCall(s, 'volley_coach', 'relief_blowjob1');
        } else {
          if (((s as any).vballVars ?? 0)?.['coach_lust'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A69'] >= 80) {
            scene.text('You see him hesitate, seriously considering doing something with you. A moment later, he puts his hands on your shoulders and gently pushes you away.');
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>. We can't do this."
            scene.text(`"${((s as any).pcs_nickname ?? 0)}. We can't do this."`);
            scene.text('"Why not?"');
            scene.text('"We just… can\'t." He takes a further step away from you. "You need to go. Now."');
            scene.text('You sigh in dejection, moving out the door without another word.');
            scene.actions([
              { label: 'Leave', goto: ['gdksport', 'start'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "What are you doing <<$pcs_lastname>>?"
            scene.text(`"What are you doing ${((s as any).pcs_lastname ?? 0)}?"`);
            scene.actions([
              { label: 'Nothing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('"Nothing," you say innocently. "I just wondered if-"');
    // TODO-QSP: dynamic text: You're cut off when <<$npc_nickname['A69']>> abruptly pushes you back.
    scene.text(`You're cut off when ${((s as any).npc_nickname ?? 0)?.['A69']} abruptly pushes you back.`);
    // TODO-QSP: dynamic text: "Enough <<$pcs_lastname>>. Get out."
    scene.text(`"Enough ${((s as any).pcs_lastname ?? 0)}. Get out."`);
    scene.text('"But-"');
    scene.text('"<b>Out.</b>');
    scene.text('You sigh in dejection, moving out the door without another word.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
              { label: 'Paying you back for your massage', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('"I just really appreciated the massage," you say. "I want to pay you back for it. Maybe with-"');
    // TODO-QSP: dynamic text: You're cut off when <<$npc_nickname['A69']>> abruptly pushes you back.
    scene.text(`You're cut off when ${((s as any).npc_nickname ?? 0)?.['A69']} abruptly pushes you back.`);
    // TODO-QSP: dynamic text: "Enough <<$pcs_lastname>>. Get out."
    scene.text(`"Enough ${((s as any).pcs_lastname ?? 0)}. Get out."`);
    scene.text('"But-"');
    scene.text('"<b>Out.</b>');
    scene.text('You sigh in dejection, moving out the door without another word.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
              { label: 'Seducing you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    ((s as any).vballVars ?? {})['coach_lust'] = (((s as any).vballVars ?? {})['coach_lust'] ?? 0) + (20);
    scene.text('"Seducing you of course."');
    scene.text('You run your hands down his chest, biting your lip as you stare into his eyes, just before swiftly grabbing his crotch.');
    if (((s as any).vballVars ?? 0)?.['coach_lust'] < 60  ||  ((s as any).npc_rel ?? 0)?.['A69'] < 80) {
      qspCall(s, 'npc_relationship', 'modify', 'A69', (-15));
      scene.text('He immediately jerks back, shoving you away.');
      // TODO-QSP: dynamic text: "What the hell <<$pcs_lastname>>!"
      scene.text(`"What the hell ${((s as any).pcs_lastname ?? 0)}!"`);
      scene.text('"I told you what I was doing," you smile back. "I\'m sedu-"');
      scene.text('"ENOUGH!" he shouts, shocking you backwards.');
      // TODO-QSP: dynamic text: "You don't know what you're starting here. I'm a married man. You're <<age>>. Yo...
      scene.text(`"You don't know what you're starting here. I'm a married man. You're ${((s as any).age ?? 0)}. You can't do this. Now get out."`);
      scene.text('"But-"');
      scene.text('"OUT!"');
      scene.text('Taken aback by his anger, you shrink away and leave his office. You can only hope this hasn\'t damaged your relationship with him too much.');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    } else {
      scene.text('Mikhail\'s body tenses up but he doesn\'t move. It gives you a great opportunity to feel his rock hard erection beneath his clothes.');
      scene.text('"I want you," you whisper under your breath. "Don\'t you want me too?"');
      scene.text('"I… This is…" He hesitates.');
      qspCall(s, 'volley_coach', 'relief_handjob1');
      qspCall(s, 'volley_coach', 'relief_blowjob1');
    }
  } },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterReliefHandjob1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Pull out his cock', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 3) {
      ((s as any).vballVars ?? {})['coachsex'] = 3;
    }
    qspCall(s, 'arousal', 'kiss', 3);
    qspCall(s, 'arousal', 'hj', Math.floor(Math.random() * 3) + 3);
    ((s as any).vballVars ?? {})['sex_pos'] = 'handjob';
    scene.img('images/shared/sex/foreplay/standing.mp4');
    // TODO-QSP: dynamic text: You slip your hand into his waistband and draw out his <<dick>>cm cock. At the s...
    scene.text(`You slip your hand into his waistband and draw out his ${((s as any).dick ?? 0)}cm cock. At the same time, you lean into him, drawing a kiss from his lips. You slowly jerk up and down the length of his manhood while your tongues explore each other's mouths.`);
    scene.actions([
      { label: 'Keep jerking him off', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', 'A69', 1);
    scene.img('images/shared/sex/cum/handjob/hand0,1.mp4');
    scene.text('You keep jerking him off until you feel hot liquid spill all over your fingers, never for a moment breaking the kiss.');
    scene.text('Eventually his cock stops pulsing and you finally end the kiss, looking down at your sticky cum covered hand and the mess on the floor.');
    // TODO-QSP: dynamic text: "Feel better now?" you smile at <<$npc_nickname['A69']>>.
    scene.text(`"Feel better now?" you smile at ${((s as any).npc_nickname ?? 0)?.['A69']}.`);
    scene.text('"Much better…" he says, leaning down to kiss you one more time. Then he grabs your ass without warning, eliciting a gasp from you. "Now clean that up and get out of my office before somebody finds us like this."');
    qspCall(s, 'volley_coach', 'relief_handjob_cum');
  } },
      { label: 'Switch to your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('You suddenly break the kiss off, pulling away with a teasing smile.');
    scene.text('"For such a good coach, I don\'t think that I\'m doing a very good job at returning the favor. How about I do something better instead?" you say and kneel down before him…');
    qspCall(s, 'volley_coach', 'relief_blowjob2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReliefHandjobCum(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Clean up', handler: (st: GameState) => {
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('"Yes Coach," you grin.');
    scene.text('You quickly clean the cum up off the floor, wiping your hand with a tissue while you\'re at it. Once that\'s done, you move over to him and share one more kiss before quietly leaving his office.');
    scene.text('<i>Maybe this will be the start of something else…</i>');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    { label: 'Lick your hand clean', handler: (st: GameState) => {
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    ((s as any).stat ?? {})['swallow'] = (((s as any).stat ?? {})['swallow'] ?? 0) + (1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/lick_fingers.jpg');
    scene.text('"Yes Coach," you grin, staring at him while you lick the cum from your fingers. You don\'t break eye contact until every drop is gone. Afterwards, you take a nearby tissue and clean up the mess you made on the floor as well.');
    // TODO-QSP: dynamic text: Finally, you move over to <<$npc_nickname['A69']>> and give him one more gentle ...
    scene.text(`Finally, you move over to ${((s as any).npc_nickname ?? 0)?.['A69']} and give him one more gentle kiss before departing his office.`);
    scene.text('<i>Maybe this will be the start of something else…</i>');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReliefBlowjob1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Kneel down', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 4) {
      ((s as any).vballVars ?? {})['coachsex'] = 4;
    }
    ((s as any).vballVars ?? {})['sex_pos'] = 'blowjob';
    scene.img('images/shared/sex/blowjob/kotovbj2.mp4');
    // TODO-QSP: dynamic text: You kneel in front of <<$npc_nickname['A69']>>, pulling his pants with you on yo...
    scene.text(`You kneel in front of ${((s as any).npc_nickname ?? 0)?.['A69']}, pulling his pants with you on your way down to reveal a fully erect ${((s as any).dick ?? 0)}cm cock.`);
    qspCall(s, 'volley_coach', 'relief_blowjob2');
  } },
  ]);
  scene.build();
}

function enterReliefBlowjob2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Suck his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 8) + 3);
    ((s as any).vballVars ?? {})['sex_pos'] = 'blowjob';
    scene.img('images/shared/sex/blowjob/bj45.mp4');
    scene.text('You quickly get to work, working his shaft with your hand and mouth. The initial rigidity of his body begins to fade, as if you were sucking his tension and apprehension out through his cock. After several minutes of gently blowing him, he tenses up again, though you can imagine this time it\'s for different reasons.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum13.mp4');
    scene.text('Whatever you were planning on doing apparently doesn\'t factor into the equation as without warning, Coach Mikhail grabs your head and pulls you all the way down to the base of his cock.');
    scene.text('Thick salty liquid spurts into the back of your throat, flooding your mouth with so much you can feel it overflowing past your lips.');
    scene.text('Coach holds you there for a long time until his cock stops pulsating in your mouth and finally releases his grasp, allowing you to pull your head off his dick.');
    qspCall(s, 'volley_coach', 'bj_cum_mouth_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjCumMouthEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Spit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    // TODO-QSP: dynamic text: You turn your head, pursing your lips as you gather the cum to the front of your...
    scene.text(`You turn your head, pursing your lips as you gather the cum to the front of your mouth. But just before you spew it all out, ${((s as any).npc_nickname ?? 0)?.['A69']}'s hand gently but firmly cups your chin and tilts it up, turning your face back towards him.`);
    scene.text('"Now, now, now," he chides. "You\'re not allowed to do that. You\'re on the Swallows. Which means you have to live up to the team name. Now swallow."');
    scene.actions([
      { label: 'Swallow reluctantly', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/swallow6.mp4');
    scene.text('You swallow reluctantly.');
    scene.text('"Good girl," he smiles, gently caressing your cheek.');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_fuck_end'] },
    ]);
  } },
      { label: 'Swallow obediently', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('You swallow obediently.');
    scene.text('"Good girl," he smiles, gently caressing your cheek.');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_fuck_end'] },
    ]);
  } },
      { label: 'Swallow eagerly', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('You swallow happily.');
    scene.text('"Good girl," he smiles, gently caressing your cheek.');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_fuck_end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSeduceCoach1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak20.jpg');
  scene.text('"Coach, are you angry with me about Ivan? We aren\'t serious, he only cares about his competitions. Besides, I like you better." Mikhail tries to gather himself but only manages to stare at you and cough.');
  scene.text('You seize the initiative. "I wanted to ask you, do the coaches of the Junior volleyball teams get paid well? If so then I might also want to become a coach too. You have a car and you dress stylishly, but you, as a former international player and European championship winner, probably get paid extra."');
  scene.actions([
    { label: 'Humbly listen', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak20.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I will not be drawn into talking about the championship. And...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, I will not be drawn into talking about the championship. And no, coaches don't get paid a lot. I spend my Sunday mornings training rich women in the fitness center. One lesson there pays more than a month working as a coach in our town."`);
    // TODO-QSP: $OpenInnerThought + '"Didn''t get anything out of him there, <<$pcs_lastname>>. Although, the classe...
    ((s as any).npc_rel ?? {})['A69'] = (((s as any).npc_rel ?? {})['A69'] ?? 0) + (3);
    scene.text('Seeing Mikhail a little upset by your questions, you decide to cheer him up.');
    (s as any).ShowerIvan = 4;
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak8.jpg');
    scene.text('Wrapping your arms around Coach\'s neck, you surprise him by kissing him full on the lips. The coach stands still, dumbfounded. Deciding this was a success, you slip your hand into his pants...');
    scene.actions([
      { label: 'Grab his cock', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenerspeak9.jpg');
    scene.text('Without wasting time, you pull his stiff cock out of his pants, squeezing it, and sliding your hand up and down his shaft...');
    scene.actions([
      { label: 'Take him in your mouth', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).centr = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenerspeak10.jpg');
    scene.text('As soon as your lips wrap around his hard cock, Mikhail seems to panic and pushes your head away, hastily tucking his dick back into his pants.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, stop trying to molest me. I explained everything already, so...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, stop trying to molest me. I explained everything already, so be good. I can't allow this to happen, especially after what happened in the championship..." He abruptly breaks off and walks away.`);
    scene.text('You watch him walk with interest, while deciding that you need to go to the fitness center and try to learn something about this damned championship. Obviously something major happened there.');
    scene.actions([
      { label: 'Say goodbye', goto: ['gdksport', 'start'] },
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

function enterNudeMassageEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  scene.text('As you catch your breath, Coach Mikhail wipes his hands on a towel and tosses it into a bin.');
  // TODO-QSP: dynamic text: "That's it for today, <<$pcs_lastname>>," he grunts. "Hit the showers. I'll clea...
  scene.text(`"That's it for today, ${((s as any).pcs_lastname ?? 0)}," he grunts. "Hit the showers. I'll clean this up later."`);
  scene.text('With that, he leaves you naked and alone.');
  scene.actions([
    { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
  ]);
  scene.build();
}

function enterMassageFuckPre(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'blowjob') {
    scene.text('Coach Mikhail pops his cock from your mouth and undresses completely.');
  } else {
    scene.text('Coach Mikhail suddenly stops, and undresses completely.');
  }
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).vballVars ?? {})['condom_use'] = 1;
    scene.text('"Let\'s get to the main event," he murmurs, producing a condom wrapper as he mounts the table behind you.');
    qspCall(s, 'volley_coach', 'massage_condom_talk');
  } else {
    ((s as any).vballVars ?? {})['condom_use'] = 0;
    scene.text('"Let\'s get to the main event," he murmurs, mounting the table behind you.');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'miss_fuck_start');
  } },
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'doggy_fuck_start');
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'Tell him you\'re a virgin ("Wait!")', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'virgin_scared_start');
  } },
      { label: 'Tell him you\'re a virgin ("I want you")', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'virgin_want_start');
  } },
    ]);
  }
  scene.build();
}

function enterMassageCondomTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'He doesn\'t need it (you\'re on birth control)', handler: (st: GameState) => {
    ((s as any).vballVars ?? {})['condom_use'] = 0;
    ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"You don\'t have to use a rubber," you whisper. You give him your smokiest look and say, "<i>I\'m on birth control.</i>"');
    scene.text('Mikhail freezes.');
    scene.text('"You\'re serious?" he asks.');
    scene.text('"Dead serious," you smile back.');
    scene.text('"Really?" he asks again, seemingly in disbelief.');
    scene.actions([
      { label: 'Be amused', handler: (st: GameState) => {
    scene.text('"Check for yourself if you don\'t believe me," you smirk. "Pills are in my bag."');
    scene.text('Your coach actually does, scrounging through your things until he finds your popped pill cases. He looks back at you, grins, and tosses the condom over his shoulder. You grin back as he climbs back up on the table with you.');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
      { label: 'Get offended', handler: (st: GameState) => {
    scene.text('"Check for yourself if you don\'t believe me," you scowl. "I keep my birth control in my bag."');
    scene.text('Your coach actually does, scrounging through your things until he finds your popped pill cases. The fact that after everything he still won\'t take your word irks you so much you can practically feel a vein pop in your forehead. Though he doesn\'t seem to mind. He looks back at you grinning and tosses the condom over his shoulder as he climbs back up on the table with you.');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let him put it on', handler: (st: GameState) => {
    scene.text('Wait for him to put the condom on.');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
    { label: 'He doesn\'t need it (you don\'t mind)', handler: (st: GameState) => {
    scene.text('"You don\'t have to use a rubber," you smile sweetly. "I don\'t mind."');
    scene.text('"I mind," he grunts back, ignoring you and rolling it onto his cock. "I don\'t want to take chances."');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
    { label: 'He doesn\'t need it (you want it raw)', handler: (st: GameState) => {
    scene.text('"Don\'t put that on," you moan huskily. "I want you <i>raw inside me</i>."');
    scene.text('"Can\'t do it raw," he grunts back, ignoring your request and rolling the rubber onto his cock. "I don\'t take chances."');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
    { label: 'He doesn\'t need it (you trust him)', handler: (st: GameState) => {
    scene.text('"You don\'t have to use a rubber," you smile sweetly. "I trust you to pull out."');
    scene.text('"I don\'t," he grunts back, ignoring you and rolling it onto his cock. "I don\'t want to take chances."');
    qspCall(s, 'volley_coach', 'massage_fuck_start');
  } },
  ]);
  scene.build();
}

function enterVirginScaredStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/miss2.jpg');
  scene.text('"Wait!" you squeak as sudden bolt of fear shoots through your body. Coach Mikhail freezes in place, looking at you with concern and confusion. "I\'m… I uhh…" you stammer. "I\'ve never…"');
  scene.text('His eyes widen with realization.');
  scene.text('"Oh! I didn\'t… We don\'t have to…"');
  scene.actions([
    { label: 'Ask to stop', handler: (st: GameState) => {
    scene.text('"This has gotten too much for me," you say, a furious blush burning your cheeks. "Maybe we should…"');
    scene.text('"Yeah," Coach Mikhail agrees, gulping. He climbs down off the table and helps you down after him. The two of you proceed to get dressed together, an awkward silence filling the space between you.');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: '"I want to"', handler: (st: GameState) => {
    scene.text('"No, it\'s okay," you shake your head with a small smile. "We don\'t have to stop."');
    scene.text('"Are you sure?"');
    scene.text('"Mhm," you nod. "I want you to do it."');
    scene.text('Now sure that he has your consent, he spreads your legs and carefully lines himself up with your pussy.');
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'miss_virgin_start');
  } },
    ]);
  } },
    { label: '"Go slow"', handler: (st: GameState) => {
    scene.text('"No, it\'s okay," you shake your head with a small smile. "We don\'t have to stop."');
    scene.text('"Are you sure?"');
    scene.text('"Just go slow," you smile softly.');
    scene.text('Now sure that he has your consent, he spreads your legs and carefully lines himself up with your pussy.');
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'miss_virgin_start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginWantStart(s: GameState, scene: SceneBuilder): void {
  scene.text('"Wait," you murmur and Coach Mikhail freezes in place, looking at you with concern and confusion. Reassuring him with a gentle smile, you continue: "This is my first time."');
  scene.text('His eyes widen with realization.');
  scene.text('"Oh! I didn\'t… We don\'t have to…"');
  scene.text('"No," you shake your head. "I want this. I want <i>you</i>. Take my virginity."');
  scene.text('You spread your legs and let your smile widen with them. Coach can\'t help but smile back as he moves between your thighs and lines his cock up with your pussy.');
  scene.actions([
    { label: 'Lose your virginity', handler: (st: GameState) => {
    qspCall(st, 'volley_coach', 'miss_virgin_start');
  } },
  ]);
  scene.build();
}

function enterMassageFuckStart(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'volley_coach', 'miss_fuck_start');
    } else {
      qspCall(s, 'volley_coach', 'doggy_fuck_start');
    }
  } },
  ]);
  scene.build();
}

function enterMissVirginStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['sex_pos'] = 'miss';
  scene.img('images/shared/sex/vag/miss/enter1.mp4');
  scene.text('"Are you ready?" he whispers and you reply with a single silent nod.');
  scene.text('With that, he pushes himself into your folds. You feel your lips widen and stretch around his cock, which slides in smoothly, your pussy juices mixing with massage oils for more than enough lubricant. There is a brief moment of resistance where you feel him bump up against something inside of you but he doesn\'t stop and pushes through before you even have a chance to react, causing a sharp <i>tearing</i> sensation between your legs.');
  qspCall(s, 'arousal', 'vaginal', 5, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/enter2.mp4');
    scene.text('"Eep-!"');
    scene.text('The squeak of pain escapes your lips unbidden and you bite your lip hard to stop yourself from crying out more.');
    // TODO-QSP: dynamic text: "Sorry," Coach Mikhail mumbles, his apologetic smile blurring through the tears ...
    scene.text(`"Sorry," Coach Mikhail mumbles, his apologetic smile blurring through the tears filling the edges of your eyes. He keeps pushing in until the entirety of his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock is stuffed into your pussy.`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'miss_fuck1'] },
    ]);
  } },
    { label: 'Grunt', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/enter2.mp4');
    scene.text('"Hngh-!"');
    scene.text('A small grunt is the only sign of discomfort you allow to show at the loss of your virginity. Even as Coach Mikhail pushes the entirety of his huge cock inside, you keep your teeth clenched, determined to muscle through the pain.');
    // TODO-QSP: dynamic text: "That's a good girl, <<$pcs_lastname>>," he murmurs. "I knew you could handle it...
    scene.text(`"That's a good girl, ${((s as any).pcs_lastname ?? 0)}," he murmurs. "I knew you could handle it."`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'miss_fuck1'] },
    ]);
  } },
    { label: 'He\'s big!', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/enter2.mp4');
    scene.text('A gasp escapes your lips unbidden, not at the pain, but at the way your pussy <i>stretches</i> around his girth. How your lips feel like they are going to tear but just keep stretching instead, your whole body being skewered by his cock. That sensation is so foreign, so shocking, that the pain of losing your virginity is nothing but a backseat note in your mind.');
    scene.text('"Oh!" you gasp. "That\'s <i>big!</i>"');
    // TODO-QSP: dynamic text: "That's a good girl, <<$pcs_lastname>>," he murmurs. "I knew you could handle it...
    scene.text(`"That's a good girl, ${((s as any).pcs_lastname ?? 0)}," he murmurs. "I knew you could handle it."`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'miss_fuck1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyVirginStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['sex_pos'] = 'miss';
  scene.img('images/shared/sex/vag/doggy/enter1.mp4');
  scene.text('"Are you ready?" he whispers and you reply with a single silent nod.');
  scene.text('With that, he pushes himself into your folds. You feel your lips widen and stretch around his cock, which slides in smoothly, your pussy juices mixing with massage oils for more than enough lubricant. There is a brief moment of resistance where you feel him bump up against something inside of you but he doesn\'t stop and pushes through before you even have a chance to react, causing a sharp <i>tearing</i> sensation between your legs.');
  qspCall(s, 'arousal', 'vaginal', 5, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('The squeak of pain escapes your lips unbidden and you bite your lip hard to stop yourself from crying out more.');
    // TODO-QSP: dynamic text: "Sorry," Coach Mikhail mumbles, his apologetic smile blurring through the tears ...
    scene.text(`"Sorry," Coach Mikhail mumbles, his apologetic smile blurring through the tears filling the edges of your eyes. He keeps pushing in until the entirety of his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock is stuffed into your pussy.`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'doggy_fuck1'] },
    ]);
  } },
    { label: 'Grunt', handler: (st: GameState) => {
    scene.text('"Hngh-!"');
    scene.text('A small grunt is the only sign of discomfort you allow to show at the loss of your virginity. Even as Coach Mikhail pushes the entirety of his huge cock inside, you keep your teeth clenched, determined to muscle through the pain.');
    // TODO-QSP: dynamic text: "That's a good girl, <<$pcs_lastname>>," he murmurs. "I knew you could handle it...
    scene.text(`"That's a good girl, ${((s as any).pcs_lastname ?? 0)}," he murmurs. "I knew you could handle it."`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'doggy_fuck1'] },
    ]);
  } },
    { label: 'He\'s big!', handler: (st: GameState) => {
    scene.text('A gasp escapes your lips unbidden, not at the pain, but at the way your pussy <i>stretches</i> around his girth. How your lips feel like they are going to tear but just keep stretching instead, your whole body being skewered by his cock. That sensation is so foreign, so shocking, that the pain of losing your virginity is nothing but a backseat note in your mind.');
    scene.text('"Oh!" you gasp. "That\'s <i>big!</i>"');
    // TODO-QSP: dynamic text: "That's a good girl, <<$pcs_lastname>>," he murmurs. "I knew you could handle it...
    scene.text(`"That's a good girl, ${((s as any).pcs_lastname ?? 0)}," he murmurs. "I knew you could handle it."`);
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'doggy_fuck1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissFuckStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['sex_pos'] = 'miss';
  qspCall(s, 'arousal', 'vaginal', 5, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.img('images/shared/sex/vag/deflower.jpg');
    scene.text('Coach Mikhail spreads your legs and slams his cock into you with one hard thrust. The massage oil combined with your juices provide so much lubricant that even your virgin pussy provides no resistance as your hymen is torn. Your eyes tear up and blood leaks from your snatch.');
    // TODO-QSP: dynamic text: "What the-" <<$npc_usedname[$npcID]>> stops, looking shocked.
    scene.text(`"What the-" ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} stops, looking shocked.`);
    scene.text('"I was a virgin," you smile at him with watery eyes. "<i>Was</i> a virgin."');
  } else {
    scene.img('images/shared/sex/massage/miss4.mp4');
    scene.text('Coach Mikhail spreads your legs and slams his cock into you with one hard thrust. The massage oil combined with your pussy juices makes him slicker than oil as he slides in without any resistance, bumping up against your cervix and eliciting a gasp.');
  }
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', 'lube');
  scene.actions([
    { label: 'Continue', goto: ['volley_coach', 'miss_fuck1'] },
  ]);
  scene.build();
}

function enterMissFuck1(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['coach_orgasm'] = ((s as any).orgasm ?? 0);
  qspCall(s, 'arousal', 'vaginal', 10, 'no_orgasm_msg', 'rough');
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/massage/miss${Math.floor(Math.random() * 4) + 3}.mp4`);
  scene.text('The sound of slapping flesh fills the room, pressing you down into the table, putting the weight of his entire body into every thrust. He\'s doesn\'t just fuck you. He <i>pounds</i> you.');
  if (((s as any).vballVars ?? 0)?.['coach_orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('It\'s barely minutes before you find yourself squirming on his cock, moaning incoherently in orgasm.');
  }
  scene.actions([
    { label: 'Continue', goto: ['volley_coach', 'miss_cum1'] },
  ]);
  scene.build();
}

function enterMissCum1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    scene.text('Suddenly, he wraps his arms around you and shoves himself into you to the hilt. His cock quivers inside you and suddenly warmth floods your womb.');
    qspCall(s, 'volley_coach', 'miss_creampie_stride');
    qspCall(s, 'volley_coach', 'miss_cum_together');
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1, 'normal');
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      scene.text('Suddenly, he wraps his arms around you and shoves himself into you to the hilt. His cock quivers and you feel something pulsing, straining against the condom inside you.');
      qspCall(s, 'volley_coach', 'miss_creampie_stride');
      qspCall(s, 'volley_coach', 'miss_cum_together');
    } else {
      qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
      scene.img(`images/shared/sex/massage/facial${Math.floor(Math.random() * 2) + 1}.mp4`);
      // TODO-QSP: dynamic text: "Spread em!" <<$npc_usedname[$npcID]>> grunts and extricates himself from betwee...
      scene.text(`"Spread em!" ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts and extricates himself from between your legs. He scampers across the table and suddenly cums all over you, spattering your face, your tongue, and even your hair with his sticky white sperm.`);
      qspCall(s, 'volley_coach', 'facial_after1');
    }
  }
  scene.build();
}

function enterMissCreampieStride(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
      // TODO-QSP: dynamic text: After the initial surprise, you let yourself relax, riding out <<$npc_usedname[$...
      scene.text(`After the initial surprise, you let yourself relax, riding out ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s orgasm with his cock pulsing inside you. Eventually you feel his grip loosen up and you assume he's finished climaxing.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/shared/sex/massage/creampie${Math.floor(Math.random() * 2) + 5}.mp4`);
    // TODO-QSP: dynamic text: With a sigh of satisfaction, <<$npc_usedname[$npcID]>> lets his cock slip from y...
    scene.text(`With a sigh of satisfaction, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} lets his cock slip from your used pussy, a slurry of juice, massage oil, and cum trickling out after it.`);
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: After the initial surprise, you let yourself relax, riding out <<$npc_usedname[$...
      scene.text(`After the initial surprise, you let yourself relax, riding out ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s orgasm with his cock pulsing inside the rubber inside you. Eventually you feel his grip loosen up and you assume he's finished climaxing.`);
      if (((s as any).condom_break ?? 0) > 0) {
        qspCall(s, 'volley_coach', 'condom_break');
      } else {
        qspCall(s, 'volley_coach', 'massage_fuck_end');
      }
    }
  } },
  ]);
  scene.build();
}

function enterMissCumTogether(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Come together', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/miss_orgasm1.mp4');
    if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
        // TODO-QSP: dynamic text: The rush of heat sends a thrill through your body and despite your recent orgasm...
        scene.text(`The rush of heat sends a thrill through your body and despite your recent orgasm you find yourself coming again. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around his cock that fills you with cum.`);
      } else {
        // TODO-QSP: dynamic text: The rush of heat sends a thrill through your body and you find yourself suddenly...
        scene.text(`The rush of heat sends a thrill through your body and you find yourself suddenly coming. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around his cock filling you with cum.`);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/shared/sex/massage/creampie${Math.floor(Math.random() * 2) + 5}.mp4`);
    // TODO-QSP: dynamic text: With a sigh of satisfaction, <<$npc_usedname[$npcID]>> lets his cock slip from i...
    scene.text(`With a sigh of satisfaction, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} lets his cock slip from inside you. You can't help but shudder as you feel a slurry of juice, massage oil, and cum trickle out of your well-used pussy.`);
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
      ]);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
        // TODO-QSP: dynamic text: The pulses of his cock inside you send a thrill through your body and despite yo...
        scene.text(`The pulses of his cock inside you send a thrill through your body and despite your recent orgasm you find yourself coming again. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around the rubber being filled inside of you.`);
      } else {
        // TODO-QSP: dynamic text: The pulses of his cock inside you send a thrill through your body and you find y...
        scene.text(`The pulses of his cock inside you send a thrill through your body and you find yourself suddenly coming. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around the rubber being filled inside of you.`);
      }
      if (((s as any).condom_break ?? 0) > 0) {
        qspCall(s, 'volley_coach', 'condom_break');
      } else {
        qspCall(s, 'volley_coach', 'massage_fuck_end');
      }
    }
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
  } },
  ]);
  scene.build();
}

function enterDoggyFuckStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['sex_pos'] = 'miss';
  qspCall(s, 'arousal', 'vaginal', 5, 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.img('images/shared/sex/vag/doggy/blood2.jpg');
    scene.text('Coach Mikhail spreads your legs and slams his cock into you with one hard thrust. The massage oil combined with your pussy juices allows his entire length to slide in easily and you feel a sharp <i>rip</i> inside you as your hymen is torn.');
  } else {
    scene.img('images/shared/sex/massage/doggy4.mp4');
    scene.text('Coach Mikhail spreads your legs and slams his cock into you. The massage oil combined with your pussy juices allows his entire length to easily slide all the way to the hilt with just one thrust.');
  }
  scene.actions([
    { label: 'Continue', goto: ['volley_coach', 'doggy_fuck1'] },
  ]);
  scene.build();
}

function enterDoggyFuck1(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['coach_orgasm'] = ((s as any).orgasm ?? 0);
  qspCall(s, 'arousal', 'vaginal', 10, 'no_orgasm_msg', 'rough');
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img(`images/shared/sex/massage/doggy${Math.floor(Math.random() * 3) + 1}.mp4`);
    // TODO-QSP: dynamic text: The sudden insertion makes you gasp, head jerking up in the process. Before it c...
    scene.text(`The sudden insertion makes you gasp, head jerking up in the process. Before it can slump, a fist grabs your hair by the roots and yanks you back onto the cock ramming into you from behind. The sound of slapping flesh fills the room, you on your hands and knees, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} behind you putting the weight of his entire body into every thrust in an amazing display of balance and athleticism. He's doesn't just fuck you. He <i>pounds</i> you.`);
    if (((s as any).vballVars ?? 0)?.['coach_orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: It's barely minutes before you find yourself squirming on his cock, eyes rolling...
      scene.text(`It's barely minutes before you find yourself squirming on his cock, eyes rolling back in orgasm with your hair still wrapped in ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s fist.`);
    }
  } else {
    scene.img('images/shared/sex/massage/doggy4.mp4');
    // TODO-QSP: dynamic text: The sudden insertion makes you gasp, head jerking up in the process. The sound o...
    scene.text(`The sudden insertion makes you gasp, head jerking up in the process. The sound of slapping flesh fills the room, you on your hands and knees, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} behind you putting the weight of his entire body into every thrust in an amazing display of balance and athleticism. He's doesn't just fuck you. He <i>pounds</i> you.`);
    if (((s as any).vballVars ?? 0)?.['coach_orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('It\'s barely minutes before you find yourself squirming on his cock, moaning incoherently in orgasm, unable to stop your hips from moving even as you cum.');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['volley_coach', 'doggy_cum1'] },
  ]);
  scene.build();
}

function enterDoggyCum1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/vagcreampie/doggy3.mp4');
    // TODO-QSP: dynamic text: Suddenly, <<$npc_usedname[$npcID]>> shoves himself into you to the hilt. His coc...
    scene.text(`Suddenly, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} shoves himself into you to the hilt. His cock quivers inside you and suddenly warmth floods your womb.`);
    qspCall(s, 'volley_coach', 'doggy_creampie_stride');
    qspCall(s, 'volley_coach', 'doggy_cum_together');
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
      scene.img('images/shared/sex/cum/cum71.jpg');
      // TODO-QSP: dynamic text: Suddenly, <<$npc_usedname[$npcID]>> shoves himself into you to the hilt. His coc...
      scene.text(`Suddenly, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} shoves himself into you to the hilt. His cock quivers and you feel something pulsing, straining against the condom inside you.`);
      qspCall(s, 'volley_coach', 'doggy_creampie_stride');
      qspCall(s, 'volley_coach', 'doggy_cum_together');
    } else {
      qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
      scene.img('images/shared/sex/massage/facial2.mp4');
      // TODO-QSP: dynamic text: "I'm gonna cum!" <<$npc_usedname[$npcID]>> grunts and extricates himself from be...
      scene.text(`"I'm gonna cum!" ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts and extricates himself from behind you. He scampers across the table and you flip over just in time to see him suddenly cum all over you, spattering your face, your tongue, and even your hair with his sticky white sperm.`);
      qspCall(s, 'volley_coach', 'facial_after1');
    }
  }
  scene.build();
}

function enterDoggyCreampieStride(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
      scene.text('You take it in stride as he cums inside you.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/creampie2.mp4');
    scene.text('Coach pulls out and his cum leaks from inside you.');
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
      ]);
    } else {
      scene.text('You take it in stride as he cums in the condom inside you.');
      if (((s as any).condom_break ?? 0) > 0) {
        qspCall(s, 'volley_coach', 'condom_break');
      } else {
        qspCall(s, 'volley_coach', 'massage_fuck_end');
      }
    }
  } },
  ]);
  scene.build();
}

function enterDoggyCumTogether(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Come together', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/doggy_orgasm1.mp4');
    if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
      // TODO-QSP: dynamic text: The rush of heat sends a thrill through your body and despite your recent orgasm...
      scene.text(`The rush of heat sends a thrill through your body and despite your recent orgasm you find yourself coming again. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around his cock that fills you with cum.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
    // TODO-QSP: dynamic text: With a sigh of satisfaction, <<$npc_usedname[$npcID]>> lets his cock slip from i...
    scene.text(`With a sigh of satisfaction, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} lets his cock slip from inside you. You can't help but shudder as you feel a slurry of juice, massage oil, and cum trickle out of your well-used pussy.`);
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
      ]);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
        // TODO-QSP: dynamic text: The pulses of his cock inside you send a thrill through your body and despite yo...
        scene.text(`The pulses of his cock inside you send a thrill through your body and despite your recent orgasm you find yourself coming again. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around the rubber being filled inside of you.`);
      } else {
        // TODO-QSP: dynamic text: The pulses of his cock inside you send a thrill through your body and you find y...
        scene.text(`The pulses of his cock inside you send a thrill through your body and you find yourself suddenly coming. Coming <i>with</i> ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, pussy spasming around the rubber being filled inside of you.`);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).condom_break ?? 0) > 0) {
      qspCall(s, 'volley_coach', 'condom_break');
    } else {
      qspCall(s, 'volley_coach', 'massage_fuck_end');
    }
  } },
      ]);
    }
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
  } },
  ]);
  scene.build();
}

function enterFacialAfter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'volley_coach', 'catch_breath');
  qspCall(s, 'volley_coach', 'facial_lick_lips');
  qspCall(s, 'volley_coach', 'facial_clean_cock');
  scene.build();
}

function enterFacialAfter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'volley_coach', 'catch_breath');
  scene.build();
}

function enterFacialLickLips(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Lick your lips', handler: (st: GameState) => {
    scene.text('You lick your cum covered lips.');
    qspCall(s, 'volley_coach', 'facial_after2');
  } },
  ]);
  scene.build();
}

function enterFacialCleanCock(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Clean his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/facial3.mp4');
    if (((s as any).vballVars ?? 0)?.['condom_use'] === 0) {
      scene.text('You suck his cock, cleaning him of his cum and your juices.');
    } else {
      scene.text('You suck his cock, cleaning off his cum.');
    }
    qspCall(s, 'volley_coach', 'facial_after2');
  } },
  ]);
  scene.build();
}

function enterCondomBreak(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/3.jpg');
  } else {
    if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    }
  }
  if (((s as any).vballVars ?? 0)?.['coach_orgasm'] < ((s as any).orgasm ?? 0)) {
    // TODO-QSP: dynamic text: Your orgasm begins winding down, <<$npc_usedname[$npcID]>> moves to pull out of ...
    scene.text(`Your orgasm begins winding down, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} moves to pull out of you.`);
    scene.text('Just then, you feel a <i>pop</i> inside you and warmth flood your pussy.');
    scene.actions([
      { label: 'Come again', goto: ['volley_coach', 'condom_break_orgasm'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: Breathing hard, <<$npc_usedname[$npcID]>> moves to pull out of you.
    scene.text(`Breathing hard, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} moves to pull out of you.`);
    scene.actions([
      { label: 'Come', goto: ['volley_coach', 'condom_break_orgasm'] },
    ]);
  }
  scene.text('Just then, you feel a <i>pop</i> inside you and warmth flood your pussy.');
  scene.actions([
    { label: 'Shock', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
    } else {
      if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
      }
    }
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> feels something wrong too and both of you freeze in sh...
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} feels something wrong too and both of you freeze in shock.`);
    scene.text('"Did you-" you gasp.');
    scene.text('"Yeah," he says, making a choked sound.');
    scene.text('He pulls himself from your pussy and a white liquid trickles out after it, a ring of torn latex wrapped around his cock.');
    scene.text('The condom broke.');
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'condom_break_react'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCondomBreakOrgasm(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['condom_break_orgasm'] = ((s as any).daystart ?? 0);
  qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
  if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
  } else {
    if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
    }
  }
  if (((s as any).vballVars ?? 0)?.['coach_orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('You gasp in shock as euphoria explodes inside you again, following the warmth that fills your pussy and washes through your hips. Your pussy spasms, your body bucks, and an unknown amount of time passes before your orgasm fades, leaving you feeling lightheaded and dizzy.');
  } else {
    scene.text('You gasp in shock as euphoria explodes inside you, following the warmth that fills your pussy and washes through your hips. Your pussy spasms, your body bucks, and an unknown amount of time passes before your orgasm fades, leaving you feeling lightheaded and dizzy.');
  }
  scene.actions([
    { label: 'Recover', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['sex_pos'] === 'miss') {
      // TODO-QSP: dynamic text: Panting hard, you look down as <<$npc_usedname[$npcID]>> withdraws himself from ...
      scene.text(`Panting hard, you look down as ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} withdraws himself from your pussy and a white liquid trickles out after it, a ring of torn latex wrapped around his cock.`);
    } else {
      // TODO-QSP: dynamic text: Panting hard into the table, you feel <<$npc_usedname[$npcID]>> withdraw himself...
      scene.text(`Panting hard into the table, you feel ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} withdraw himself from your pussy and feel something <i>gush</i> out after it, running down your thigh and soaking into the towel beneath you.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['volley_coach', 'condom_break_react'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCondomBreakReact(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
  // TODO-QSP: dynamic text: "Well, shit," <<$npc_usedname[$npcID]>> sighs.
  scene.text(`"Well, shit," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} sighs.`);
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'Tell him you\'re on the <<$birth_control[\'type\']>>', handler: (st: GameState) => {
    ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "Don't worry," you say calmly. "I'm on the <<$birth_control['type']>>."
    scene.text(`"Don't worry," you say calmly. "I'm on the ${((s as any).birth_control ?? 0)?.['type']}."`);
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> freezes.
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} freezes.`);
    scene.text('"Seriously? Then why the fuck are we using rubbers?!"');
    scene.actions([
      { label: 'Finish up', goto: ['volley_coach', 'massage_fuck_end'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s safe today', handler: (st: GameState) => {
    scene.text('"Don\'t worry," you smile softly, trying to reassure him. "It\'s a safe day in my cycle. I won\'t get pregnant."');
    scene.text('He shakes his head.');
    scene.text('"I don\'t want to take chances."');
    qspCall(s, 'volley_coach', 'condom_break_pill1');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It <i>should</i> be safe today', handler: (st: GameState) => {
    scene.text('"Don\'t worry," you smile softly, trying to reassure him. "It\'s a very risky day in my cycle. I\'m pretty sure I won\'t get pregnant."');
    scene.text('He shakes his head.');
    scene.text('"I don\'t want to take chances."');
    qspCall(s, 'volley_coach', 'condom_break_pill1');
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.actions([
            { label: 'This is a very bad day (danger)', handler: (st: GameState) => {
    scene.text('You sit up, feeling pale as you watch the cum drain from your pussy.');
    if (((s as any).ovulate ?? 0) > 0) {
      scene.text('"I think I might be ovulating right now," you mumble anxiously.');
    } else {
      scene.text('"I think I might be ovulating soon," you mumble anxiously.');
    }
    scene.text('"Shit!" he swears again.');
    qspCall(s, 'volley_coach', 'condom_break_pill1');
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Stay calm', handler: (st: GameState) => {
    scene.text('You agree with the sentiment, but panicking won\'t do anything and carefully sit up, feeling his cum drain from your pussy.');
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'You have a morning after pill', handler: (st: GameState) => {
    scene.text('"It\'s okay," you say calmly. "I have a morning after pill."');
    // TODO-QSP: dynamic text: You dig through your discarded clothing until you find the small disposable cont...
    scene.text(`You dig through your discarded clothing until you find the small disposable container and pop the pill from its packaging. Before you can ask, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} hands you a sports drink and you smile, taking a long gulp to swallow the pill.`);
    qspCall(s, 'medical_din', 'morning_after_pill_function');
    scene.actions([
      { label: 'Finish up', goto: ['volley_coach', 'massage_fuck_end'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You\'ll buy a morning after pill', handler: (st: GameState) => {
    scene.text('"It\'s okay," you say calmly. "I\'ll get a morning after pill."');
    qspCall(s, 'volley_coach', 'condom_break_pill2');
  } },
        { label: 'Ask him for a morning after pill', handler: (st: GameState) => {
    scene.text('"You don\'t happen to have a morning after pill on you, do you?" you ask wryly.');
    scene.text('"No, but…"');
    qspCall(s, 'volley_coach', 'condom_break_pill2');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCondomBreakPill1(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['plan_b'] = ((s as any).daystart ?? 0);
  qspCall(s, 'money', 'earn', 800);
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> bends down, fishing through his discarded trousers loo...
  scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} bends down, fishing through his discarded trousers looking for his wallet and comes up with a wad of cash.`);
  scene.text('"Make sure you buy a morning after pill," he says, pressing it into your hand.');
  qspCall(s, 'volley_coach', 'condom_break_end');
  scene.build();
}

function enterCondomBreakPill2(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars ?? {})['plan_b'] = ((s as any).daystart ?? 0);
  qspCall(s, 'money', 'earn', 800);
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> bends down, fishing through his discarded trousers loo...
  scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} bends down, fishing through his discarded trousers looking for his wallet and comes up with a wad of cash.`);
  scene.text('"Here, this will cover the cost," he says, pressing it into your hand. "I don\'t want any excuses for why you don\'t buy one."');
  qspCall(s, 'volley_coach', 'condom_break_end');
  scene.build();
}

function enterCondomBreakEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'volley_coach', 'massage_redress');
  scene.actions([
    { label: 'Get dressed silently', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: It's suddenly a somber affair as the two of you get dressed silently, the broken...
    scene.text(`It's suddenly a somber affair as the two of you get dressed silently, the broken condom hanging in the air between you. ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} finishes first, as if trying to hurry away before his sperm can reach your womb.`);
    scene.text('"Don\'t forget that pill," he mumbles stiffly before quickly leaving, seeming ashamed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Get dressed with banter', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You try to lighten the mood with a few crude jokes and banter but <<$npc_usednam...
    scene.text(`You try to lighten the mood with a few crude jokes and banter but ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} clearly isn't into it, giving terse responses and dressing hurriedly.`);
    scene.text('"Don\'t forget that pill," he mumbles stiffly before quickly leaving, seeming ashamed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Kiss him goodbye', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: It's suddenly a somber affair as the two of you get dressed silently, the broken...
    scene.text(`It's suddenly a somber affair as the two of you get dressed silently, the broken condom hanging in the air between you. ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} finishes first and you try to kiss him as he heads towards the door but he shies away, stonewalling you.`);
    scene.text('"Don\'t forget that pill," he mumbles stiffly before quickly leaving, seeming ashamed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMassageFuckEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'volley_coach', 'catch_breath');
  qspCall(s, 'volley_coach', 'get_so_good');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'volley_coach', 'massage_redress');
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 6) {
      ((s as any).vballVars ?? {})['coachsex'] = 6;
    }
    scene.img('images/locations/pavlovsk/community/gym/volley_coach/massage_room.jpg');
    scene.text('You finish having sex.');
    scene.actions([
      { label: 'Get dressed silently', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('The two of you get dressed without another word to each other, content in comfortable silence.');
    // TODO-QSP: dynamic text: "Hit the showers <<$pcs_lastname>>."
    scene.text(`"Hit the showers ${((s as any).pcs_lastname ?? 0)}."`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
      { label: 'Get dressed with banter', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('The two of you get dressed passing crude jokes back and forth.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('"So do you fuck all your players like this?" you ask wryly.');
      scene.text('"Only the slutty ones," he grunts back.');
      scene.text('"Hey! I\'m not slutty!"');
      scene.text('"How else would you describe a girl who fucks her volleyball coach?"');
      scene.text('"Daddy issues."');
    }
    scene.text('You both grin at that, finishing pulling on the last of your clothing.');
    // TODO-QSP: dynamic text: "Time to hit the showers, <<$pcs_lastname>>," he says, giving you a heavy swat o...
    scene.text(`"Time to hit the showers, ${((s as any).pcs_lastname ?? 0)}," he says, giving you a heavy swat on the ass on his way out the door.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
      { label: 'Kiss him goodbye', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    scene.text('The two of you get dressed and you kiss him before he goes. As your lips part he gives you a heavy slap on the ass.');
    // TODO-QSP: dynamic text: "Hit the showers <<$pcs_lastname>>," he says, smirks and leaves.
    scene.text(`"Hit the showers ${((s as any).pcs_lastname ?? 0)}," he says, smirks and leaves.`);
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCatchBreath(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['catch_breath'] === 0) {
    scene.actions([
      { label: 'Catch your breath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).sex_ev ?? {})['catch_breath'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/massage/after2.jpg');
    scene.text('Finished fucking, you let your head slump back and hit the table, taking heaving breaths and legs falling limp over the side, feeling thoroughly worn out. Feeling <i>used</i>. But in a good way.');
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
    ]);
  }
  scene.build();
}

function enterGetSoGood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['get_so_good'] === 0) {
    scene.actions([
      { label: '"How\'d you get so good?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).sex_ev ?? {})['get_so_good'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      scene.text('"How did you get so good at that?" you ask, still lightheaded from your vaginal pounding.');
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 3) {
        scene.text('"How did you get so good at that?" you ask, still lightheaded from your multiple orgasms. You can\'t even count how many times you came.');
      } else {
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 2) {
          scene.text('"How did you get so good at that?" you ask, still lightheaded from your multiple orgasms. How many times did you come? You try to do the maths through the haze. Twice? Three times? <i>Damn.</i>');
        } else {
          if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 1) {
            scene.text('"How did you get so good at that?" you ask, still lightheaded from your multiple orgasms.');
          } else {
            if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
              scene.text('"How did you get so good at that?" you ask, still lightheaded from your orgasm.');
            }
          }
        }
      }
    }
    scene.text('"The same way you get good at volleyball," he smirks. "Lots of practice."');
    qspCall(s, 'volley_coach', 'massage_fuck_end');
  } },
    ]);
  }
  scene.build();
}

function enterComfortSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A69');
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/coach_office.jpg');
  scene.text('You lost. You still can\'t believe you lost.');
  scene.text('You walk in a daze, all the way to Coach Mikhail\'s office, silent the whole way until you close the door behind you.');
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 80) {
    // TODO-QSP: dynamic text: "<<$pcs_usedname[$npcID]>>," he starts, turning around in surprise. With the doo...
    scene.text(`"${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he starts, turning around in surprise. With the door closed and your coach right there, you can't hold it in anymore.`);
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_usedname[$npcID]>>," he says softly, moving towards you slowly. With the...
    scene.text(`"${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, moving towards you slowly. With the door closed and your coach right there, you can't hold it in anymore.`);
  }
  scene.text('You burst into tears.');
  scene.actions([
    { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'volley_coach', 'massage_undress');
    scene.img('images/shared/sex/undress/undress1.mp4');
    // TODO-QSP: dynamic text: You scream a wordless cry, burying your head into <<$npc_usedname[$npcID]>>'s ch...
    scene.text(`You scream a wordless cry, burying your head into ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s chest as he wraps his arms around you, clutching you tight. You cry and cry and cry and cry until something suddenly takes over and then suddenly your lips are on his. Your hands are on his belt. His hands are pulling off your top. And both of you frantically undress one another as you stumble into the massage room behind his office.`);
    scene.actions([
      { label: 'Fuck each other\'s brains out', handler: (st: GameState) => {
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npcStat', 'A69', 0, 'normal');
      ((s as any).vballVars ?? {})['condom_use'] = 1;
    } else {
      qspCall(s, 'npcStat', 'A69');
    }
    ((s as any).vballVars ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal', 30, 'no_orgasm_msg', 'rough');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img(`images/shared/sex/massage/miss${Math.floor(Math.random() * 3) + 3}.mp4`);
    } else {
      scene.img(`images/shared/sex/massage/miss${Math.floor(Math.random() * 3) + 3}.mp4`);
    }
    scene.text('The sex is passionate and wild. Time passes in a blur of bodies smashing together. Both of you wrestling each other into different positions. No love making. Just <i>hard fucking.</i>');
    qspCall(s, 'volley_coach', 'comfort_sex_cum1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterComfortSexCum1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 2) {
      // TODO-QSP: dynamic text: You can't count how many times you've come before <<$npc_usedname[$npcID]>> poun...
      scene.text(`You can't count how many times you've come before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 1) {
        // TODO-QSP: dynamic text: You've already come multiple times before <<$npc_usedname[$npcID]>> pounds his c...
        scene.text(`You've already come multiple times before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
      } else {
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: You've already come once by the time <<$npc_usedname[$npcID]>> pounds his cock i...
          scene.text(`You've already come once by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
        } else {
          // TODO-QSP: dynamic text: You have no idea how much time has gone by the time <<$npc_usedname[$npcID]>> po...
          scene.text(`You have no idea how much time has gone by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
        }
      }
    }
    scene.actions([
      { label: 'Come with him', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: Orgasm seizes you once more, barely able to breathe as you come with him, eyes r...
      scene.text(`Orgasm seizes you once more, barely able to breathe as you come with him, eyes rolling back in your head and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cum filling you up to overflowing.`);
    } else {
      // TODO-QSP: dynamic text: Orgasm seizes you, barely able to breathe as you come with him, eyes rolling bac...
      scene.text(`Orgasm seizes you, barely able to breathe as you come with him, eyes rolling back in your head and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cum filling you up to overflowing.`);
    }
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'comfort_sex_creampie'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 2) {
      // TODO-QSP: dynamic text: You can't count how many times you've come before <<$npc_usedname[$npcID]>> forc...
      scene.text(`You can't count how many times you've come before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 1) {
        // TODO-QSP: dynamic text: You've already come multiple times before <<$npc_usedname[$npcID]>> forcibly spr...
        scene.text(`You've already come multiple times before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
      } else {
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: You've already come once by the time before <<$npc_usedname[$npcID]>> forcibly s...
          scene.text(`You've already come once by the time before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
        } else {
          // TODO-QSP: dynamic text: You have no idea how much time has gone by the time <<$npc_usedname[$npcID]>> fo...
          scene.text(`You have no idea how much time has gone by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
        }
      }
    }
    scene.actions([
      { label: 'Take his facial', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
    scene.img(`images/shared/sex/massage/facial${Math.floor(Math.random() * 2) + 1}.mp4`);
    // TODO-QSP: dynamic text: It's with an animalistic fever that you open your mouth as wide as it can go as ...
    scene.text(`It's with an animalistic fever that you open your mouth as wide as it can go as ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} blasts his cum all over your face. Across your tongue. On your cheeks. Smeared into your hair.`);
    scene.text('When he\'s finally done, you collapse back onto the table.');
    qspCall(s, 'volley_coach', 'comfort_sex_end');
  } },
    ]);
  }
  scene.build();
}

function enterComfortSexCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/massage/creampie${Math.floor(Math.random() * 2) + 5}.mp4`);
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s cock slips from inside you, both of you breathing ha...
  scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock slips from inside you, both of you breathing hard as his spunk trickles out of your snatch.`);
  qspCall(s, 'volley_coach', 'comfort_sex_end');
  scene.build();
}

function enterComfortSexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.text('"Feel… better…?" he huffs.');
  scene.actions([
    { label: 'Not really', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Not… really…" you pant back. Despite the rough fucking, despite the orgasms, you still feel more frustrated than ever. Like this only made the itch of defeat worse.');
    } else {
      scene.text('"Not… really…" you pant back. Despite the rough fucking, you still feel more frustrated than ever. Like this only made the itch of defeat worse.');
    }
    // TODO-QSP: dynamic text: "That's losing for you," <<$npc_usedname[$npcID]>> grunts, hauling himself off t...
    scene.text(`"That's losing for you," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table. "It's bitter, it's frustrating, and hateful."`);
    scene.text('He pauses, pulling on his clothing.');
    // TODO-QSP: dynamic text: "But it makes you stronger too. Remember this loss, <<$pcs_usedname[$npcID]>>," ...
    scene.text(`"But it makes you stronger too. Remember this loss, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Don't forget it. And it might just let you win next time."`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'A little', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Maybe… a little…" you pant back. The sting of defeat is still there in your chest. But maybe it feels just a little softer than it did before. The orgasms certainly felt better.');
    } else {
      scene.text('"Maybe… a little…" you pant back. The sting of defeat is still there in your chest. But maybe it feels just a little softer than it did before.');
    }
    // TODO-QSP: dynamic text: "That's good," <<$npc_usedname[$npcID]>> grunts, hauling himself off the massage...
    scene.text(`"That's good," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table. "I wouldn't want you to be sad."`);
    scene.text('He pauses, pulling on his clothing.');
    // TODO-QSP: dynamic text: "But don't forget this either, <<$pcs_usedname[$npcID]>>," he says softly, cuppi...
    scene.text(`"But don't forget this either, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Remembering how losing feels might just push you to win the next time."`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Much better', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Much better…" you pant back, giving him a tired smile. The sting of defeat is still there in your chest. But it\'s much more bearable now. The orgasms really took the edge off.');
    } else {
      scene.text('"Much better…" you pant back, giving him a tired smile. The sting of defeat is still there in your chest. But it\'s much more bearable now. Getting your pussy pounded within an inch of its life really took the edge off.');
    }
    // TODO-QSP: dynamic text: "That's good," <<$npc_usedname[$npcID]>> grunts, hauling himself off the massage...
    scene.text(`"That's good," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table. "I wouldn't want you to be sad."`);
    scene.text('He pauses, pulling on his clothing.');
    // TODO-QSP: dynamic text: "But don't forget this either, <<$pcs_usedname[$npcID]>>," he says softly, cuppi...
    scene.text(`"But don't forget this either, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Remembering how losing feels might just push you to win the next time."`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Too tired to speak', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('Your only reply is a soft moan, barely coherent after the crying, the pounding, and the orgasms.');
    } else {
      scene.text('Your only reply is a soft moan, barely coherent after the crying and the pounding of your pussy.');
    }
    // TODO-QSP: dynamic text: "Figures," <<$npc_usedname[$npcID]>> grunts, hauling himself off the massage tab...
    scene.text(`"Figures," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table and pulling on his clothing.`);
    // TODO-QSP: dynamic text: "Rest up, <<$pcs_usedname[$npcID]>>," he says softly, cupping your cheek where y...
    scene.text(`"Rest up, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Rest up…"`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVictorySex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A69');
  qspCall(s, 'arousal', 'kiss', 2);
  scene.img('images/locations/pavlovsk/community/gym/volley_coach/coach_office.jpg');
  scene.text('You won! You won!! <i>You fucking won!</i>');
  // TODO-QSP: dynamic text: High on your victory, you barge into <<$npc_usedname[$npcID]>>'s office and leap...
  scene.text(`High on your victory, you barge into ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s office and leap onto him, shoving your tongue into his mouth. He hugs you back fiercely, slamming you into the wall as you wrap your legs around his waist.`);
  scene.text('The kiss is broken and for a single immeasurable second, you stare into each other\'s eyes.');
  scene.actions([
    { label: 'Clothes. Off.', handler: (st: GameState) => {
    qspCall(s, 'volley_coach', 'massage_undress');
    scene.img('images/shared/sex/undress/undress1.mp4');
    scene.text('And suddenly you\'re frantically undressing each another. Clothes fly off as you stumble into the massage room behind his office.');
    scene.actions([
      { label: 'Fuck each other\'s brains out', handler: (st: GameState) => {
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npcStat', 'A69', 0, 'normal');
      ((s as any).vballVars ?? {})['condom_use'] = 1;
    } else {
      qspCall(s, 'npcStat', 'A69');
    }
    ((s as any).vballVars ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    qspCall(s, 'arousal', 'vaginal', 30, 'no_orgasm_msg', 'rough');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img(`images/shared/sex/massage/miss${Math.floor(Math.random() * 3) + 3}.mp4`);
    } else {
      scene.img(`images/shared/sex/massage/miss${Math.floor(Math.random() * 3) + 3}.mp4`);
    }
    scene.text('The sex is passionate and wild. Time passes in a blur of bodies smashing together. Both of you wrestling each other into different positions. No love making. Just <i>hard fucking.</i>');
    qspCall(s, 'volley_coach', 'victory_sex_cum1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVictorySexCum1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 2) {
      // TODO-QSP: dynamic text: You can't count how many times you've come before <<$npc_usedname[$npcID]>> poun...
      scene.text(`You can't count how many times you've come before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 1) {
        // TODO-QSP: dynamic text: You've already come multiple times before <<$npc_usedname[$npcID]>> pounds his c...
        scene.text(`You've already come multiple times before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
      } else {
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: You've already come once by the time <<$npc_usedname[$npcID]>> pounds his cock i...
          scene.text(`You've already come once by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
        } else {
          // TODO-QSP: dynamic text: You have no idea how much time has gone by the time <<$npc_usedname[$npcID]>> po...
          scene.text(`You have no idea how much time has gone by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pounds his cock into your pussy one final time and you feel him empty his balls into you.`);
        }
      }
    }
    scene.actions([
      { label: 'Come with him', handler: (st: GameState) => {
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: Orgasm seizes you once more, barely able to breathe as you come with him, eyes r...
      scene.text(`Orgasm seizes you once more, barely able to breathe as you come with him, eyes rolling back in your head and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cum filling you up to overflowing.`);
    } else {
      // TODO-QSP: dynamic text: Orgasm seizes you, barely able to breathe as you come with him, eyes rolling bac...
      scene.text(`Orgasm seizes you, barely able to breathe as you come with him, eyes rolling back in your head and ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cum filling you up to overflowing.`);
    }
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'victory_sex_creampie'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 2) {
      // TODO-QSP: dynamic text: You can't count how many times you've come before <<$npc_usedname[$npcID]>> forc...
      scene.text(`You can't count how many times you've come before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
    } else {
      if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0) - 1) {
        // TODO-QSP: dynamic text: You've already come multiple times before <<$npc_usedname[$npcID]>> forcibly spr...
        scene.text(`You've already come multiple times before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
      } else {
        if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: You've already come once by the time before <<$npc_usedname[$npcID]>> forcibly s...
          scene.text(`You've already come once by the time before ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
        } else {
          // TODO-QSP: dynamic text: You have no idea how much time has gone by the time <<$npc_usedname[$npcID]>> fo...
          scene.text(`You have no idea how much time has gone by the time ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} forcibly spreads your legs and shoves his cock towards your face.`);
        }
      }
    }
    scene.actions([
      { label: 'Take his facial', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
    scene.img(`images/shared/sex/massage/facial${Math.floor(Math.random() * 2) + 1}.mp4`);
    // TODO-QSP: dynamic text: It's with an animalistic fever that you open your mouth as wide as it can go as ...
    scene.text(`It's with an animalistic fever that you open your mouth as wide as it can go as ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} blasts his cum all over your face. Across your tongue. On your cheeks. Smeared into your hair.`);
    scene.text('When he\'s finally done, you collapse back onto the table.');
    qspCall(s, 'volley_coach', 'victory_sex_end');
  } },
    ]);
  }
  scene.build();
}

function enterVictorySexCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/massage/creampie${Math.floor(Math.random() * 2) + 5}.mp4`);
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s cock slips from inside you, both of you breathing ha...
  scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock slips from inside you, both of you breathing hard as his spunk trickles out of your snatch.`);
  qspCall(s, 'volley_coach', 'victory_sex_react');
  scene.build();
}

function enterVictorySexReact(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Almost as good as winning', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: "That was… almost… as good as winning…" you pant, grinning at <<$npc_usedname[$n...
      scene.text(`"That was… almost… as good as winning…" you pant, grinning at ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, still dizzy with orgasm.`);
    } else {
      // TODO-QSP: dynamic text: "That was… almost… as good as winning…" you pant, grinning at <<$npc_usedname[$n...
      scene.text(`"That was… almost… as good as winning…" you pant, grinning at ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    }
    scene.text('"Well, I can\'t deny that," he grins, hauling himself off the massage table. "After all, it\'s the winning that makes you feel alive, makes you want to procreate."');
    qspCall(s, 'volley_coach', 'victory_sex_end');
  } },
    { label: 'Perfect way to end the day', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: "That… was a perfect end… to a perfect day…" you pant, grinning at <<$npc_usedna...
      scene.text(`"That… was a perfect end… to a perfect day…" you pant, grinning at ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}, still dizzy with orgasm.`);
    } else {
      // TODO-QSP: dynamic text: "That… was a perfect end… to a perfect day…" you pant, grinning at <<$npc_usedna...
      scene.text(`"That… was a perfect end… to a perfect day…" you pant, grinning at ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
    }
    scene.text('"Nothing quite like victory sex, is there?" he grins, hauling himself off the massage table. "After all, it\'s the winning that makes you feel alive, makes you want to procreate."');
    qspCall(s, 'volley_coach', 'victory_sex_end');
  } },
    { label: 'Much better', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Much better…" you pant back, giving him a tired smile. The sting of defeat is still there in your chest. But it\'s much more bearable now. The orgasms really took the edge off.');
    } else {
      scene.text('"Much better…" you pant back, giving him a tired smile. The sting of defeat is still there in your chest. But it\'s much more bearable now. Getting your pussy pounded within an inch of its life really took the edge off.');
    }
    // TODO-QSP: dynamic text: "That's good," <<$npc_usedname[$npcID]>> grunts, hauling himself off the massage...
    scene.text(`"That's good," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table. "I wouldn't want you to be sad."`);
    scene.text('He pauses, pulling on his clothing.');
    // TODO-QSP: dynamic text: "But don't forget this either, <<$pcs_usedname[$npcID]>>," he says softly, cuppi...
    scene.text(`"But don't forget this either, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Remembering how losing feels might just push you to win the next time."`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Too tired to speak', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after2.jpg');
    if (((s as any).vballVars ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('Your only reply is a soft moan, barely coherent after the crying, the pounding, and the orgasms.');
    } else {
      scene.text('Your only reply is a soft moan, barely coherent after the crying and the pounding of your pussy.');
    }
    // TODO-QSP: dynamic text: "Figures," <<$npc_usedname[$npcID]>> grunts, hauling himself off the massage tab...
    scene.text(`"Figures," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts, hauling himself off the massage table and pulling on his clothing.`);
    // TODO-QSP: dynamic text: "Rest up, <<$pcs_usedname[$npcID]>>," he says softly, cupping your cheek where y...
    scene.text(`"Rest up, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says softly, cupping your cheek where you lay on the table. "Rest up…"`);
    scene.text('With that, he departs, leaving you naked and alone to stew in sweat, cum, and tears…');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVictorySexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Sit up', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/after_sit1.jpg');
    scene.text('With great effort, you swing your legs over the side to sit up.');
    scene.text('"I don\'t know if I can walk after that," you giggle, clearly dick drunk. Or maybe it\'s still the feeling of winning. You can\'t be sure.');
    // TODO-QSP: dynamic text: "Well, you did a lot of jumping today too," <<$npc_usedname[$npcID]>> chuckles, ...
    scene.text(`"Well, you did a lot of jumping today too," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} chuckles, pulling on his clothes. "Stay there for a while. Rest. You earned it."`);
    scene.text('He gives you one final smile and leaves, closing the door behind him to leave you basking in victory.');
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
    { label: 'Stretch', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/stretch1.mp4');
    scene.text('Feeling strangely energized, you hop off the table and stretch your arms.');
    scene.text('"That felt great!" you sigh, feeling the muscles in your shoulders and thighs pop. "I feel totally refreshed!"');
    // TODO-QSP: dynamic text: "It's the endorphins," <<$npc_usedname[$npcID]>> chuckles, pulling on his clothe...
    scene.text(`"It's the endorphins," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} chuckles, pulling on his clothes. "Sexual pleasure combined with the thrill of victory tends to leave you feeling better than when you started."`);
    scene.text('He steps close, smiling softly.');
    // TODO-QSP: dynamic text: "You earned this, <<$pcs_usedname[$npcID]>>," he says warmly. He leaves, closing...
    scene.text(`"You earned this, ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he says warmly. He leaves, closing the door behind him to leave you basking in victory.`);
    scene.actions([
      { label: 'Finish', goto: ['volley_coach', 'massage_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoachWalkHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
  scene.text('Near your apartment, the coach stops and turns to you.');
  scene.actions([
    { label: 'Go inside', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '!!!':
      enter___(s, scene);
      break;
    case 'coach_office':
      enterCoachOffice(s, scene);
      break;
    case 'massage_room':
      enterMassageRoom(s, scene);
      break;
    case 'coach_talk':
      enterCoachTalk(s, scene);
      break;
    case 'coach_talk_menu':
      enterCoachTalkMenu(s, scene);
      break;
    case 'join_team1':
      enterJoinTeam1(s, scene);
      break;
    case 'lariska_join':
      enterLariskaJoin(s, scene);
      break;
    case 'massage_start':
      enterMassageStart(s, scene);
      break;
    case 'normal_massage_start':
      enterNormalMassageStart(s, scene);
      break;
    case 'normal_massage1':
      enterNormalMassage1(s, scene);
      break;
    case 'cloth_massage_end':
      enterClothMassageEnd(s, scene);
      break;
    case 'massage_undress':
      enterMassageUndress(s, scene);
      break;
    case 'massage_redress':
      enterMassageRedress(s, scene);
      break;
    case 'nude_massage_start1':
      enterNudeMassageStart1(s, scene);
      break;
    case 'nude_massage_start2':
      enterNudeMassageStart2(s, scene);
      break;
    case 'nude_massage1':
      enterNudeMassage1(s, scene);
      break;
    case 'nude_massage2':
      enterNudeMassage2(s, scene);
      break;
    case 'back_rub':
      enterBackRub(s, scene);
      break;
    case 'full_body':
      enterFullBody(s, scene);
      break;
    case 'inner_thigh':
      enterInnerThigh(s, scene);
      break;
    case 'pussy_touch':
      enterPussyTouch(s, scene);
      break;
    case 'orgasm_massage_end':
      enterOrgasmMassageEnd(s, scene);
      break;
    case 'after_massage_bj1':
      enterAfterMassageBj1(s, scene);
      break;
    case 'after_massage_bj2':
      enterAfterMassageBj2(s, scene);
      break;
    case 'after_massage_bj_cum1':
      enterAfterMassageBjCum1(s, scene);
      break;
    case 'relief_offer':
      enterReliefOffer(s, scene);
      break;
    case 'relief_handjob1':
      enterReliefHandjob1(s, scene);
      break;
    case 'relief_handjob_cum':
      enterReliefHandjobCum(s, scene);
      break;
    case 'relief_blowjob1':
      enterReliefBlowjob1(s, scene);
      break;
    case 'relief_blowjob2':
      enterReliefBlowjob2(s, scene);
      break;
    case 'bj_cum_mouth_end':
      enterBjCumMouthEnd(s, scene);
      break;
    case 'seduce_coach1':
      enterSeduceCoach1(s, scene);
      break;
    case 'nude_massage_end':
      enterNudeMassageEnd(s, scene);
      break;
    case 'massage_fuck_pre':
      enterMassageFuckPre(s, scene);
      break;
    case 'massage_condom_talk':
      enterMassageCondomTalk(s, scene);
      break;
    case 'virgin_scared_start':
      enterVirginScaredStart(s, scene);
      break;
    case 'virgin_want_start':
      enterVirginWantStart(s, scene);
      break;
    case 'massage_fuck_start':
      enterMassageFuckStart(s, scene);
      break;
    case 'miss_virgin_start':
      enterMissVirginStart(s, scene);
      break;
    case 'doggy_virgin_start':
      enterDoggyVirginStart(s, scene);
      break;
    case 'miss_fuck_start':
      enterMissFuckStart(s, scene);
      break;
    case 'miss_fuck1':
      enterMissFuck1(s, scene);
      break;
    case 'miss_cum1':
      enterMissCum1(s, scene);
      break;
    case 'miss_creampie_stride':
      enterMissCreampieStride(s, scene);
      break;
    case 'miss_cum_together':
      enterMissCumTogether(s, scene);
      break;
    case 'doggy_fuck_start':
      enterDoggyFuckStart(s, scene);
      break;
    case 'doggy_fuck1':
      enterDoggyFuck1(s, scene);
      break;
    case 'doggy_cum1':
      enterDoggyCum1(s, scene);
      break;
    case 'doggy_creampie_stride':
      enterDoggyCreampieStride(s, scene);
      break;
    case 'doggy_cum_together':
      enterDoggyCumTogether(s, scene);
      break;
    case 'facial_after1':
      enterFacialAfter1(s, scene);
      break;
    case 'facial_after2':
      enterFacialAfter2(s, scene);
      break;
    case 'facial_lick_lips':
      enterFacialLickLips(s, scene);
      break;
    case 'facial_clean_cock':
      enterFacialCleanCock(s, scene);
      break;
    case 'condom_break':
      enterCondomBreak(s, scene);
      break;
    case 'condom_break_orgasm':
      enterCondomBreakOrgasm(s, scene);
      break;
    case 'condom_break_react':
      enterCondomBreakReact(s, scene);
      break;
    case 'condom_break_pill1':
      enterCondomBreakPill1(s, scene);
      break;
    case 'condom_break_pill2':
      enterCondomBreakPill2(s, scene);
      break;
    case 'condom_break_end':
      enterCondomBreakEnd(s, scene);
      break;
    case 'massage_fuck_end':
      enterMassageFuckEnd(s, scene);
      break;
    case 'catch_breath':
      enterCatchBreath(s, scene);
      break;
    case 'get_so_good':
      enterGetSoGood(s, scene);
      break;
    case 'comfort_sex1':
      enterComfortSex1(s, scene);
      break;
    case 'comfort_sex_cum1':
      enterComfortSexCum1(s, scene);
      break;
    case 'comfort_sex_creampie':
      enterComfortSexCreampie(s, scene);
      break;
    case 'comfort_sex_end':
      enterComfortSexEnd(s, scene);
      break;
    case 'victory_sex1':
      enterVictorySex1(s, scene);
      break;
    case 'victory_sex_cum1':
      enterVictorySexCum1(s, scene);
      break;
    case 'victory_sex_creampie':
      enterVictorySexCreampie(s, scene);
      break;
    case 'victory_sex_react':
      enterVictorySexReact(s, scene);
      break;
    case 'victory_sex_end':
      enterVictorySexEnd(s, scene);
      break;
    case 'coach_walk_home':
      enterCoachWalkHome(s, scene);
      break;
    default:
      enter___(s, scene);
      break;
  }
}

export const volley_coach: LocationDef = {
  name: 'volley_coach',
  title: 'You\'ve run out of shampoo and will have to buy some more before you can wash yourself.',
  region: 'other',
  enter: enter,
};
