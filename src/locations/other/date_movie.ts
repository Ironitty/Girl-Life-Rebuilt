import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['ticket_cost'] = 100;
  qspCall(s, 'date_movie', 'init');
  if (((s as any).region ?? 0) === 'pav') {
    ((s as any).date_ev ?? {})['loc'] = 'pav_cinema';
    ((s as any).date_ev ?? {})['cinema_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "date_movie" }) + ' src="images/locations/pavlovsk/park/theater/kinoteatr.jpg"></center>';
    scene.actions([{ label: 'Continue', goto: ['date_movie', 'pav_cinema'] }]);
  } else {
    if (((s as any).region ?? 0) === 'city') {
      ((s as any).date_ev ?? {})['loc'] = 'city_cinema';
      ((s as any).date_ev ?? {})['cinema_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "date_movie" }) + ' src="images/locations/shared/cinema/theaterbuy.jpg"></center>';
      scene.actions([{ label: 'Continue', goto: ['date_movie', 'city_cinema'] }]);
    }
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['at_home'] = 0;
  ((s as any).date_ev ?? {})['type'] = 'cinema_date';
  // TODO-QSP: $date_ev[''] = 'cinema_date'
  ((s as any).date_ev ?? {})['activity_count'] = (((s as any).date_ev ?? {})['activity_count'] ?? 0) + (1);
  qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
  scene.build();
}

function enterPavCinema(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  // TODO-QSP: dynamic text: You walk with <<$npcdesc>> to the cinema in the park to see what's playing.
  scene.text(`You walk with ${((s as any).npcdesc ?? 0)} to the cinema in the park to see what's playing.`);
  (s as any).temp_rand = Math.floor(Math.random() * 20) + 0;
  if (((s as any).temp_rand ?? 0) < 10) {
    ((s as any).date_ev ?? {})['film_suggest'] = 'superhero';
    scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest generic superhero movie.');
  } else {
    if (((s as any).temp_rand ?? 0) < 15) {
      ((s as any).date_ev ?? {})['film_suggest'] = 'action';
      scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest blockbuster action flick.');
    } else {
      if (((s as any).temp_rand ?? 0) === 15) {
        ((s as any).date_ev ?? {})['film_suggest'] = 'comedy';
        scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today.');
      } else {
        if (((s as any).temp_rand ?? 0) === 16) {
          ((s as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
          scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today. Looks raunchy and vulgar though, the kind of movie with lots of nudity and crude sex jokes.');
        } else {
          if (((s as any).temp_rand ?? 0) === 17) {
            ((s as any).date_ev ?? {})['film_suggest'] = 'horror';
            scene.text('It\'s so small that there\'s only one screen showing the same movie all day. But instead of the usual superhero movie, it looks like there\'s a horror film on today.');
          } else {
            if (((s as any).temp_rand ?? 0) === 18) {
              ((s as any).date_ev ?? {})['film_suggest'] = 'drama';
              scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s an award winning drama playing today.');
            } else {
              ((s as any).date_ev ?? {})['film_suggest'] = 'romance';
              scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s a romance movie on today.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: xgt 'date_movie', 'what_to_watch_pav'
  scene.build();
}

function enterWhatToWatchPav(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask <<$npcdesc>> what he thinks', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Well?" you ask, turning to look at <<$npcdesc>>. "Feel like watching that?"
    scene.text(`"Well?" you ask, turning to look at ${((s as any).npcdesc ?? 0)}. "Feel like watching that?"`);
    if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'movie_date') {
      // TODO-QSP: dynamic text: "I've heard really good things about it," <<$npcdesc>> says, excitement sparklin...
      scene.text(`"I've heard really good things about it," ${((s as any).npcdesc ?? 0)} says, excitement sparkling in his eyes. "Let's go buy tickets."`);
      // TODO-QSP: dynamic text: Following his lead, you go up to the counter where a bored teenager tells you it...
      scene.text(`Following his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_movie', 'buy_tickets'
  } },
      ]);
    } else {
      if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).date_ev ?? 0)?.['film_suggest']) {
        scene.text('The type of movie playing is the type he likes');
        scene.text('"Let\'s watch it."');
        // TODO-QSP: dynamic text: Following his lead, you go up to the counter where a bored teenager tells you it...
        scene.text(`Following his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
        scene.actions([
          { label: 'Buy tickets', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_movie', 'buy_tickets'
  } },
        ]);
      } else {
        if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          if ((!(Math.floor(Math.random() * 1) + 0))) {
            // TODO-QSP: dynamic text: "We're already here, we might as well," <<$npcdesc>> shrugs and moves forward to...
            scene.text(`"We're already here, we might as well," ${((s as any).npcdesc ?? 0)} shrugs and moves forward to buy tickets. You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_movie', 'buy_tickets'
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Looks kind of boring," <<$npcdesc>> shrugs. "Let's go do something else."
            scene.text(`"Looks kind of boring," ${((s as any).npcdesc ?? 0)} shrugs. "Let's go do something else."`);
            scene.text('"What should we do instead?" you ask.');
          }
        } else {
          scene.text('He shrugs. "I don\'t know. What do you think?"');
          qspCall(s, 'date_funcs', 'alternate_plans');
          scene.actions([
            { label: 'Sounds fun (watch movie)', handler: (st: GameState) => {
    scene.text('"Sounds like fun," you smile. "Let\'s just watch it!"');
    // TODO-QSP: dynamic text: The two of you go up to the counter where a bored teenager tells you its <<$func...
    scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
    qspCall(s, 'date_movie', 'ticket_menu');
  } },
            { label: 'You\'re already here (watch movie)', handler: (st: GameState) => {
    scene.text('"We\'re already here," you sigh. "Let\'s just watch it I guess."');
    // TODO-QSP: dynamic text: The two of you go up to the counter where a bored teenager tells you its <<$func...
    scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
    qspCall(s, 'date_movie', 'ticket_menu');
  } },
          ]);
        }
      }
    }
  } },
    { label: 'I wanted to see this!', handler: (st: GameState) => {
    scene.text('"I wanted to see this!" you say.');
    if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'movie_date') {
      scene.text('"Sure, I\'ll watch anything, I love movies."');
      // TODO-QSP: dynamic text: The two of you go up to the counter where a bored teenager tells you its <<$func...
      scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
      qspCall(s, 'date_movie', 'ticket_menu');
    } else {
      if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).date_ev ?? 0)?.['film_suggest']) {
        scene.text('"Me too."');
        // TODO-QSP: dynamic text: The two of you go up to the counter where a bored teenager tells you its <<$func...
        scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
        qspCall(s, 'date_movie', 'ticket_menu');
      } else {
        if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          if ((!(Math.floor(Math.random() * 1) + 0))) {
            // TODO-QSP: dynamic text: "We're already here, we might as well," <<$npcdesc>> shrugs and moves forward to...
            scene.text(`"We're already here, we might as well," ${((s as any).npcdesc ?? 0)} shrugs and moves forward to buy tickets. You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_movie', 'buy_tickets'
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Looks kind of boring," <<$npcdesc>> shrugs. "Let's go do something else."
            scene.text(`"Looks kind of boring," ${((s as any).npcdesc ?? 0)} shrugs. "Let's go do something else."`);
            scene.text('"What should we do instead?" you ask.');
          }
        } else {
          scene.text('"Sure, this is fine I guess," he says.');
          qspCall(s, 'date_movie', 'ticket_menu');
        }
      }
    }
  } },
    { label: 'Sounds boring', handler: (st: GameState) => {
    if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'comedy') {
      scene.text('"Ugh, sounds boring," you moan. ');
    } else {
      if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'raunchy_comedy') {
        scene.text('"Ugh, sounds boring," you moan. ');
      } else {
        if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'horror') {
          scene.text('"Ugh, sounds boring," you moan. ');
        } else {
          if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'drama') {
            scene.text('"Ugh, sounds boring," you moan. ');
          } else {
            if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'romance') {
              scene.text('"Ugh, sounds boring," you moan. ');
            } else {
              if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'superhero') {
                scene.text('"Ugh, sounds boring," you moan. ');
              } else {
                if (((s as any).date_ev ?? 0)?.['film_suggest'] === 'action') {
                  scene.text('"Ugh, sounds boring," you moan. ');
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).date_ev ?? 0)?.['film_suggest']) {
      scene.text('"Come on, you\'ll like it," he says and insists you see it anyways.');
      qspCall(s, 'willpower', 'misc', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Insist you do something else [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Insist you do something else [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('Event text');
    scene.actions([
      { label: 'Next action', handler: (st: GameState) => {
    // TODO-QSP: gt 'farawayistan' !}
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Follow him to the ticket counter', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You follow his lead, you go up to the counter where a bored teenager tells you i...
    scene.text(`You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['ticket_cost'])} per ticket.`);
    qspCall(s, 'date_movie', 'ticket_menu');
  } },
      ]);
    } else {
      scene.text('"Well… wanna do something else then?"');
      qspCall(s, 'date_funcs', 'alternate_plans');
      scene.actions([
        { label: 'Too much trouble (watch movie)', handler: (st: GameState) => {
    scene.text('"We\'re already here," you sigh. "Let\'s just watch it I guess."');
    qspCall(s, 'date_movie', 'ticket_menu');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCityCinema(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  // TODO-QSP: dynamic text: You walk with <<$npcdesc>> to the cinema in the park to see what's playing.
  scene.text(`You walk with ${((s as any).npcdesc ?? 0)} to the cinema in the park to see what's playing.`);
  scene.text('There is a variety of films of many different genres.');
  qspCall(s, 'date_movie', 'suggest_film1');
  scene.actions([
    { label: 'Ask <<$npcdesc>> what he wants', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Well?" you ask, turning to look at <<$npcdesc>>. "What do you think we should w...
    scene.text(`"Well?" you ask, turning to look at ${((s as any).npcdesc ?? 0)}. "What do you think we should watch?"`);
    if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'action'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 6) + 1) === 1)) {
      ((s as any).date_ev ?? {})['film_suggest'] = 'action';
      scene.text('"Let\'s watch the action movie."');
    } else {
      if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'horror'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 5) + 1) === 1)) {
        ((s as any).date_ev ?? {})['film_suggest'] = 'horror';
        scene.text('"Let\'s watch the horror movie."');
      } else {
        if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'raunchy_comedy'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 4) + 1) === 1)) {
          ((s as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
          scene.text('"Let\'s watch the comedy movie."');
        } else {
          if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'comedy'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 3) + 1) === 1)) {
            ((s as any).date_ev ?? {})['film_suggest'] = 'comedy';
            scene.text('"Let\'s watch the comedy movie."');
          } else {
            if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'drama'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1)) {
              ((s as any).date_ev ?? {})['film_suggest'] = 'drama';
              scene.text('"Let\'s watch the drama."');
            } else {
              if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'romance'  ||  (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
                ((s as any).date_ev ?? {})['film_suggest'] = 'romance';
                scene.text('"Let\'s watch the romance."');
              } else {
                if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                  scene.text('"I\'ll watch whatever you want to watch."');
                } else {
                  scene.text('He shrugs. "I don\'t know. What do you think?"');
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'date_movie', 'boy_film_suggest_react ');
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== '') {
      scene.actions([
        { label: 'Something else', handler: (st: GameState) => {
    scene.text('You want to watch something else');
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'action') {
      scene.actions([
        { label: 'Let\'s watch the action film', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'action_movie';
    scene.text('"How about that one instead?" you say, pointing at the action movie.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'horror') {
      scene.actions([
        { label: 'Horror', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'horror_movie';
    scene.text('"How about that one instead?" you say, pointing at the horror movie.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'comedy') {
      scene.actions([
        { label: 'Comedy', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'comedy_movie';
    scene.text('"How about that one instead?" you say, pointing at the comedy.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'raunchy_comedy') {
      scene.actions([
        { label: 'Raunchy comedy', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'raunchy_movie';
    scene.text('"How about that one instead?" you say, pointing at the raunchy looking comedy.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'drama') {
      scene.actions([
        { label: 'Drama', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'drama_movie';
    scene.text('"How about that one instead?" you say, pointing at the drama.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['film_suggest'] !== 'romance') {
      scene.actions([
        { label: 'Romance', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest2'] = 'romance_movie';
    scene.text('"How about that one instead?" you say, pointing at the romance.');
    qspCall(s, 'date_movie', 'suggest_film3');
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    { label: 'Do something else', handler: (st: GameState) => {
    scene.text('Now that you\'re here and looking over all the movies, you realize you really don\'t feel like sitting in a theater for the next two hours watching something.');
    // TODO-QSP: dynamic text: "Do you wanna do something else?" you ask <<$npcdesc>>.
    scene.text(`"Do you wanna do something else?" you ask ${((s as any).npcdesc ?? 0)}.`);
    scene.text('"Like what?"');
    qspCall(s, 'date_funcs', 'alternate_plans');
  } },
  ]);
  scene.build();
}

function enterSuggestFilm1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Let\'s watch the action film', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'action';
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
    { label: 'Horror', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'horror';
    scene.text('"Let\'s watch the horror movie."');
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
    { label: 'Comedy', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'comedy';
    scene.text('"Let\'s watch the comedy movie."');
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
    { label: 'Raunchy comedy', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
    scene.text('"Let\'s watch the comedy movie."');
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
    { label: 'Drama', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'drama';
    scene.text('"Let\'s watch the drama."');
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
    { label: 'Romance', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_suggest'] = 'romance';
    scene.text('"Let\'s watch the romance."');
    // TODO-QSP: xgt 'date_movie', 'suggest_film2'
  } },
  ]);
  scene.build();
}

function enterSuggestFilm2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).date_var ?? 0)?.['film_suggest']) {
    ((s as any).date_ev ?? {})['film_decide'] = ((s as any).date_ev ?? 0)?.['film_suggest'];
    scene.text('The type of movie playing is the type he likes');
    scene.text('"Let\'s watch it."');
    qspCall(s, 'date_movie', 'ticket_menu');
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).date_var ?? 0)?.['film_suggest']) {
      // TODO-QSP: dynamic text: <<$npcdesc>> shakes his head.
      scene.text(`${((s as any).npcdesc ?? 0)} shakes his head.`);
      if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'action') {
        scene.text('"What about that one instead?" he says, pointing at the action film.');
      } else {
        if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'horror') {
          scene.text('"What about that one instead?" he says, pointing at the horror film.');
        } else {
          if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'comedy') {
            scene.text('"What about that one instead?" he says, pointing at a comedy.');
          } else {
            if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'raunchy_comedy') {
              scene.text('"What about that one instead?" he says, pointing at a raunchy looking comedy.');
            } else {
              if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'drama') {
                scene.text('"What about that one instead?" he says, pointing at a drama.');
              } else {
                if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === 'romance') {
                  scene.text('"What about that one instead?" he says, pointing at a romantic looking flick.');
                }
              }
            }
          }
        }
      }
      qspCall(s, 'date_movie', 'boy_film_suggest_react ');
    } else {
      ((s as any).date_ev ?? {})['film_decide'] = ((s as any).date_ev ?? 0)?.['film_suggest'];
      scene.text('He\'s fine with whatever you want.');
      scene.text('"Let\'s watch it."');
      qspCall(s, 'date_movie', 'ticket_menu');
    }
  }
  scene.build();
}

function enterSuggestFilm3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: dynamic text: "Why'd you ask what I wanted if you just wanted to watch that one anyways?" <<$n...
    scene.text(`"Why'd you ask what I wanted if you just wanted to watch that one anyways?" ${((s as any).npcdesc ?? 0)} grumbles but follows you to get in line to buy tickets anyways.`);
  } else {
    scene.text('"Sure, that sounds good too," he says and the two of you get in line together.');
  }
  ((s as any).date_ev ?? {})['film_decide'] = ((s as any).date_ev ?? 0)?.['film_suggest2'];
  qspCall(s, 'date_movie', 'ticket_menu');
  scene.build();
}

function enterBoyFilmSuggestReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['film_suggest'] !== '') {
    scene.actions([
      { label: 'You want to watch your movie', handler: (st: GameState) => {
    scene.text('"I don\'t wanna watch that!" you moan. "Let\'s watch the other one instead!"');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('He argues with you.');
      scene.actions([
        { label: 'Fight about it', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_fight'] = 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: $date_ev['cinema_pic']
    scene.text('You fight about it.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] < 2  &&  (Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_persuas ?? 0)) {
      scene.text('"<i>Fine!</i>" he snaps. "We\'ll watch your movie!"');
    } else {
      scene.actions([
        { label: 'Give in', handler: (st: GameState) => {
    scene.text('"Alright fine," you grumble. "We\'ll watch yours."');
    qspCall(s, 'date_movie', 'ticket_menu');
  } },
      ]);
    }
  } },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
      scene.text('He concedes to watching your movie.');
      qspCall(s, 'date_movie', 'ticket_menu');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['film_decide'] = ((s as any).date_ev ?? 0)?.['film_suggest'];
    scene.text('"Okay, let\'s watch that."');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).date_ev ?? {})['npc_ticket_buy'] = 1;
      scene.text('"I\'ll go buy the tickets," he smiles.');
      scene.actions([
        { label: 'Go with him', goto: ['date_movie', 'buy_tickets'] },
        { label: 'I\'ll buy the snacks', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['pc_snack_buy'] = 1;
    scene.text('"Then I\'ll get the popcorn," you smile back.');
    scene.actions([
      { label: 'Go to the snack counter', goto: ['date_movie', 'snack_counter'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'date_movie', 'ticket_menu');
    }
  } },
    ]);
  }
  scene.build();
}

function enterTicketMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['split_ticket'] === 1  ||  ((s as any).date_ev ?? 0)?.['npc_ticket_buy'] === 1  ||  ((s as any).date_ev ?? 0)?.['pc_ticket_buy'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['date_movie', 'buy_tickets'] }]);
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'date_movie', 'asked_to_pay_start');
    } else {
      scene.actions([
        { label: 'Split the cost', goto: ['date_movie', 'split_cost'] },
        { label: 'Offer to buy the tickets', goto: ['date_movie', 'split_cost'] },
        { label: 'Ask him to buy the tickets', handler: (st: GameState) => {
    scene.text('"Can you buy the tickets?" you ask.');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).date_ev ?? {})['split_ticket'] = 1;
      scene.text('"No way, pay for yourself."');
      scene.actions([
        { label: 'Buy your ticket', goto: ['date_movie', 'buy_tickets'] },
      ]);
    } else {
      ((s as any).date_ev ?? {})['npc_ticket_buy'] = 1;
      scene.text('"Sure."');
      scene.actions([
        { label: 'Go to the ticket counter', goto: ['date_movie', 'buy_tickets'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterSplitCost(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  scene.text('"Wanna split it?" you ask.');
  scene.text('"Sure."');
  ((s as any).date_ev ?? {})['split_ticket'] = 1;
  scene.actions([
    { label: 'Buy tickets', goto: ['date_movie', 'buy_tickets'] },
  ]);
  scene.build();
}

function enterOfferToPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  scene.text('"I\'ll pay for it," you smile.');
  if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).date_ev ?? {})['npc_ticket_buy'] = 1;
    scene.text('"No, let me," he insists.');
  } else {
    ((s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    scene.text('"Wow, that\'s so nice of you," he says.');
  }
  scene.actions([
    { label: 'Ticket counter', goto: ['date_movie', 'buy_tickets'] },
  ]);
  scene.build();
}

function enterAskedToPayStart(s: GameState, scene: SceneBuilder): void {
  scene.text('He asks you to buy the tickets.');
  qspCall(s, 'date_movie', 'asked_to_pay');
  scene.actions([
    { label: 'Why me?', handler: (st: GameState) => {
    scene.text('"Why me?"');
    qspCall(s, 'date_movie', 'asked_to_pay');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"I\'ll pay you back, promise!"');
    } else {
      scene.text('"I\'m kinda strapped for cash at the moment," he says with a guilty smile. "Pay you back later?"');
      if (((s as any).he_invited_pc ?? 0) === 1) {
        scene.actions([
          { label: '<i>You</i> invited <i>me</i>!', handler: (st: GameState) => {
    scene.text('"What the hell?" you frown. "You asked <i>me</i> to go out! And you don\'t have any money?"');
    scene.text('He shrugs and his smile becomes a grin.');
    qspCall(s, 'date_movie', 'asked_to_pay');
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterAskedToPay(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['wants_pc_pay'] = 1;
  if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['ticket_cost']) === 1) {
    if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      scene.actions([
        { label: 'Your treat', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    scene.text('"You don\'t have to pay me back for anything," you smile. "It\'s my treat."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay for both', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      ((s as any).npc_money_owed ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_money_owed ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (((s as any).date_ev ?? 0)?.['ticket_cost']);
    }
    scene.text('"Okay," you smirk. "I\'ll get you this time."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      { label: 'Pay for both (exasperated)', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      ((s as any).npc_money_owed ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_money_owed ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (((s as any).date_ev ?? 0)?.['ticket_cost']);
    }
    scene.text('"Ugh, fine."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      { label: 'No money (lie)', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['no_money'] = 1;
    scene.text('"Can\'t. Don\'t have any money," you say.');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No money', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['no_money'] = 1;
    if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Well, I don\'t have any money either," you say awkwardly.');
      scene.text('"So… what should we do…?"');
      qspCall(s, 'date_funcs', 'alternate_plans');
    } else {
      scene.text('"Can\'t. Don\'t have any money," you say.');
      scene.text('He complains and agrees to buy the tickets.');
      ((s as any).date_ev ?? {})['npc_ticket_buy'] = 1;
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuyTickets(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  ((s as any).date_ev ?? {})['film_decide'] = ((s as any).date_ev ?? 0)?.['film_suggest'];
  if (((s as any).date_ev ?? 0)?.['split_ticket'] === 1) {
    // TODO-QSP: dynamic text: You get in line with <<$npcdesc>> and buy tickets.
    scene.text(`You get in line with ${((s as any).npcdesc ?? 0)} and buy tickets.`);
    ((s as any).date_ev ?? {})['pay_cost'] = ((s as any).date_ev ?? 0)?.['ticket_cost'];
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_payment'
  } else {
    if (((s as any).date_ev ?? 0)?.['npc_ticket_buy'] === 1) {
      // TODO-QSP: dynamic text: You get in line with <<$npcdesc>> as he buys tickets for both of you.
      scene.text(`You get in line with ${((s as any).npcdesc ?? 0)} as he buys tickets for both of you.`);
      // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
    } else {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['ticket_cost'] * 2) === 1) {
        ((s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
        scene.text('You buy tickets for the movie.');
        ((s as any).date_ev ?? {})['pay_cost'] = ((s as any).date_ev ?? {})?.['ticket_cost'] * 2;
        // TODO-QSP: xgt 'date_movie', 'buy_tickets_payment'
      } else {
        scene.text('You buy tickets for the movie.');
        scene.text('Sorry I can`t, I only have money for my ticket.');
        // TODO-QSP: dynamic text: You get in line with <<$npcdesc>> and buy tickets.
        scene.text(`You get in line with ${((s as any).npcdesc ?? 0)} and buy tickets.`);
        ((s as any).date_ev ?? {})['pay_cost'] = ((s as any).date_ev ?? 0)?.['ticket_cost'];
        // TODO-QSP: xgt 'date_movie', 'buy_tickets_payment'
      }
    }
  }
  scene.build();
}

function enterBuyTicketsPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).money ?? 0) < ((s as any).date_ev ?? 0)?.['pay_cost']  &&  ((s as any).karta ?? 0) < ((s as any).date_ev ?? 0)?.['pay_cost']) {
    scene.actions([
      { label: 'Oops you can\'t pay', goto: ['date_movie', 'no_money_tickets'] },
    ]);
  }
  scene.actions([
    { label: 'Pay [+$func(\'money\', \'get_cost_string\', date_e...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['pay_cost']) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', date_ev['pay_cost']
      ((s as any).date_ev ?? {})['total_cost'] = (((s as any).date_ev ?? {})['total_cost'] ?? 0) + (((s as any).date_ev ?? 0)?.['pay_cost']);
      ((s as any).date_ev ?? {})['pay_cost'] = 0;
      scene.text('You pay for the tickets.');
      // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
    }
  } },
  ]);
  scene.build();
}

function enterNoMoneyTickets(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['cinema_pic']
  scene.text('As you go up to pay for the tickets you realize… you actually can\'t.');
  scene.text('You are too broke to afford this.');
  if (((s as any).date_ev ?? 0)?.['pc_ticket_buy'] === 1) {
    scene.text('"Erm… I know I said I\'d pay but… I kinda can\'t right now…"');
  } else {
    scene.text('"Erm… I just realized I don\'t have enough money for a ticket…"');
  }
  if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('"Oh. Uhm. Well… I don\'t really have money for a ticket either…"');
    scene.text('An awkward silence lapses between you.');
    qspCall(s, 'date_funcs', 'alternate_plans');
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Are you fucking kidding me? Well I don\'t have money either! So what are we gonna do?"');
      qspCall(s, 'date_funcs', 'alternate_plans');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> scowls at you.
        scene.text(`${((s as any).npcdesc ?? 0)} scowls at you.`);
        scene.text('"Are you fucking kidding me?"');
        scene.actions([
          { label: 'Ask him to pay (sweetly)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Could you pay for it?" you ask, batting your eyelashes at him. "Please please pretty please?"');
    scene.text('"I can\'t believe you right now," he grumbles but pays anyways.');
    // TODO-QSP: xgt 'date_movie', 'no_money_tickets_selfish'
  } },
        ]);
      } else {
        if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "Don't worry about it," <<$npcdesc>> smiles. "I'll take care of it."
          scene.text(`"Don't worry about it," ${((s as any).npcdesc ?? 0)} smiles. "I'll take care of it."`);
        }
      }
    }
  }
  scene.build();
}

function enterNoMoneyTicketsBoyPay(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    scene.text('"You\'re so sweet!"');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter.');
    } else {
      scene.text('You grab onto his arm and hug it tight as you move off from the counter.');
    }
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
    { label: 'You\'ll make it up to him', handler: (st: GameState) => {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"You\'re so sweet!" Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter, chirping happily, "I\'ll make it up to you, I promise."');
    } else {
      scene.text('"You\'re so sweet!" You grab onto his arm and hug it tight as you move off from the counter, chirping happily, "I\'ll make it up to you, I promise."');
    }
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  ||  ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] > (Math.floor(Math.random() * 6) + 5)) {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        // TODO-QSP: dynamic text: "Oh yeah?" <<$npcdesc>>'s attention suddenly seems more focused on you as he gri...
        scene.text(`"Oh yeah?" ${((s as any).npcdesc ?? 0)}'s attention suddenly seems more focused on you as he grins wickedly. "Think you could… give me a blowjob later as payment?"`);
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
          // TODO-QSP: dynamic text: "Oh yeah?" <<$npcdesc>>'s attention suddenly seems more focused on you as he gri...
          scene.text(`"Oh yeah?" ${((s as any).npcdesc ?? 0)}'s attention suddenly seems more focused on you as he grins wickedly. "How about after this you let me fuck your ass?"`);
        } else {
          // TODO-QSP: dynamic text: "Oh yeah?" <<$npcdesc>>'s attention suddenly seems more focused on you as he gri...
          scene.text(`"Oh yeah?" ${((s as any).npcdesc ?? 0)}'s attention suddenly seems more focused on you as he grins wickedly. "How about after we head back to my place to let you 'make it up to me?'"`);
        }
      }
      scene.actions([
        { label: 'I didn\'t mean it like that!', handler: (st: GameState) => {
    // TODO-QSP: $date_ev['cinema_pic']
    scene.text('"I didn\'t mean it like that!"');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
      // TODO-QSP: dynamic text: <<$npcdesc>>'s scowl returns. "Then what's the point?!"
      scene.text(`${((s as any).npcdesc ?? 0)}'s scowl returns. "Then what's the point?!"`);
    } else {
      scene.text('"Oh. Well, I\'m sure we can think of something…"');
    }
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
        { label: 'Sure thing', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $date_ev['cinema_pic']
    scene.text('"Sure thing," you smile at him. "Anything to make my guy happy."');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
        { label: 'Lead him on', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $date_ev['cinema_pic']
    scene.text('"Sure thing," you smile at him. "Anything to make my guy happy."');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    scene.text('<i>Boys are so easy to deal with,</i> you think, mentally rolling your eyes.');
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
      ]);
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Hrmph. Whatever," he mumbles unhappily.');
      } else {
        if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Seriously, you don\'t have to do anything."');
        } else {
          scene.text('"Maybe you can pay for the next one," he replies pleasantly.');
        }
      }
      // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
    }
  } },
    { label: 'You\'ll make it up to him (sex)', handler: (st: GameState) => {
    scene.text('"You\'re so sweet!"');
    scene.text('Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter.');
    scene.actions([
      { label: 'With a blowjob', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"I\'ll give you the best blowjob of your life later," you whisper in his ear.');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
      { label: 'With sex', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"I\'ll let you do whatever you want to me later," you whisper in his ear.');
    scene.text('"<i>Whatever</i> I want?" he grins back, putting his arm around you.');
    // TODO-QSP: xgt 'date_movie', 'buy_tickets_end'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBuyTicketsEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['cinema_snacks'] === 0) {
    if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).date_ev ?? 0)?.['pc_ticket_buy'] === 1) {
      scene.text('He asks you to buy snacks too.');
      scene.actions([
        { label: 'Okay', handler: (st: GameState) => {
    scene.text('"Okay," you say sweetly.');
    scene.actions([
      { label: 'Go to the snack counter', goto: ['date_movie', 'snack_counter'] },
    ]);
  } },
        { label: 'Unbelievable', handler: (st: GameState) => {
    scene.text('"Seriously?!"');
    scene.actions([
      { label: 'No way', handler: (st: GameState) => {
    scene.text('"Not a chance. Let\'s go see the movie."');
    scene.actions([
      { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
    ]);
  } },
      { label: 'Fine', handler: (st: GameState) => {
    scene.text('"Ugh, fine."');
    scene.actions([
      { label: 'Go to the snack counter', goto: ['date_movie', 'snack_counter'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Let\'s get snacks', handler: (st: GameState) => {
    scene.text('"Let\'s get snacks too," you suggest.');
    scene.actions([
      { label: 'Go to the snack counter', goto: ['date_movie', 'snack_counter'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
  ]);
  scene.build();
}

function enterSnackCounter(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['cinema_snacks'] = 1;
  scene.img('images/locations/shared/cinema/snack_bar.jpg');
  scene.text('It\'s the place you buy popcorn and sweets.');
  qspCall(s, 'date_movie', 'snack_menu');
  scene.build();
}

function enterSnackMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_movie', 'buy_snacks');
  if (((s as any).date_ev ?? 0)?.['popcorn_buy'] === 0) {
    scene.actions([
      { label: 'Popcorn [+$func(\'money\', \'get_cost_string\', date_e...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).date_ev ?? {})['popcorn_buy'] = 1;
      ((s as any).date_ev ?? {})['snack_cost'] = (((s as any).date_ev ?? {})['snack_cost'] ?? 0) + (200);
      scene.text('You ask for popcorn.');
      qspCall(s, 'date_movie', 'snack_menu');
    }
  } },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['soda_buy'] === 0) {
    scene.actions([
      { label: 'Soda [+$func(\'money\', \'get_cost_string\', date_e...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).date_ev ?? {})['soda_buy'] = 1;
      ((s as any).date_ev ?? {})['snack_cost'] = (((s as any).date_ev ?? {})['snack_cost'] ?? 0) + (200);
      scene.text('You ask for soda.');
      qspCall(s, 'date_movie', 'snack_menu');
    }
  } },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['candy_buy'] === 0) {
    scene.actions([
      { label: 'Candy [+$func(\'money\', \'get_cost_string\', date_e...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).date_ev ?? {})['candy_buy'] = 1;
      ((s as any).date_ev ?? {})['snack_cost'] = (((s as any).date_ev ?? {})['snack_cost'] ?? 0) + (200);
      scene.text('You ask for candy.');
      qspCall(s, 'date_movie', 'snack_menu');
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuySnacks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['pc_snack_buy'] === 1) {
    qspCall(s, 'date_movie', 'buy_snacks_payment');
  } else {
    if (((s as any).date_ev ?? 0)?.['no_money'] === 0) {
      scene.actions([
        { label: 'Offer to pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('"Let me pay for it," you say."');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('He says no and insists he pays for it instead.');
      scene.actions([
        { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
      ]);
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"You really don\'t have to," he says. "Let me pay."');
          scene.actions([
            { label: 'Let him pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('He pays.');
    scene.actions([
      { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('"You really don\'t have to," he says. "Let\'s just split it instead."');
          scene.actions([
            { label: 'Split the cost', handler: (st: GameState) => {
    // TODO-QSP: date_ev['snack_cost'] /= 2
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('You split the cost of the snacks.');
    // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
  } },
          ]);
        }
        scene.actions([
          { label: 'Insist you pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    // TODO-QSP: 'You insist and pay for the food' + iif(date_ev['soda_buy'] > 0, ' and drinks.', '.')
    // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
  } },
        ]);
      } else {
        scene.text('"Okay," he says.');
        scene.text('He lets you pay.');
        // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
      }
    }
  } },
        { label: 'Split the cost', handler: (st: GameState) => {
    scene.text('"Let\'s both pay half," you suggest.');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] <= 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).date_ev ?? {})['npc_snack_buy'] = 1;
      scene.text('He says no and insists he pays for it instead.');
      scene.actions([
        { label: 'Let him pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('He pays.');
    scene.actions([
      { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
    ]);
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"You really don\'t have to," he says. "Let me pay."');
        scene.actions([
          { label: 'Let him pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('He pays.');
    scene.actions([
      { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: date_ev['snack_cost'] /= 2
        scene.text('"Okay, that sounds fine," he says.');
        scene.text('You split the cost of the snacks.');
        // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
      }
      scene.actions([
        { label: 'Insist you pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    // TODO-QSP: 'You insist and pay for the food' + iif(date_ev['soda_buy'] > 0, ' and drinks.', '.')
    // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask him to pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('"Can you pay?" you ask.');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1)) {
      ((s as any).date_ev ?? {})['npc_snack_buy'] = 1;
      scene.text('"Sure," he says.');
      scene.text('He pays for it.');
      scene.actions([
        { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
      ]);
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        ((s as any).date_ev ?? {})['npc_snack_buy'] = 1;
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
        scene.text('He complains and pays for it.');
        scene.actions([
          { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
        ]);
      } else {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          ((s as any).date_ev ?? {})['npc_snack_buy'] = 1;
          scene.text('"Sure," he says and pays for it.');
          scene.actions([
            { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
          ]);
        } else {
          (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
          if ((!((s as any).temp_rand ?? 0))) {
            // TODO-QSP: date_ev['snack_cost'] /= 2
            scene.text('"Can we split it?" he asks. "I\'m a little light on cash."');
            // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
          } else {
            if (((s as any).temp_rand ?? 0) === 1) {
              scene.text('"I\'m a little light on cash," he says sheepishly.');
              // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
            } else {
              ((s as any).date_ev ?? {})['npc_snack_buy'] = 1;
              scene.text('"Okay," he says.');
              scene.actions([
                { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
              ]);
            }
          }
        }
        scene.text('"Okay," he says.');
        scene.text('He lets you pay.');
        // TODO-QSP: xgt 'date_movie', 'buy_snacks_payment'
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuySnacksPayment(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Pay [+$func(\'money\', \'get_cost_string\', date_e...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['snack_cost']) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', date_ev['snack_cost']
      ((s as any).date_ev ?? {})['total_cost'] = (((s as any).date_ev ?? {})['total_cost'] ?? 0) + (((s as any).date_ev ?? 0)?.['snack_cost']);
      scene.text('You pay for the snacks.');
      scene.actions([
        { label: 'Go see the movie', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie1...
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWatchActionMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Action film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterWatchSuperheroMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Superhero film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterWatchHorrorMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Horror film begins.');
  scene.text('Jumpscare');
  scene.actions([
    { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You scream.');
    // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  } },
    { label: 'Grab <<$npcdesc>>', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    // TODO-QSP: dynamic text: You scream and grab <<$npcdesc>>'s arm.
    scene.text(`You scream and grab ${((s as any).npcdesc ?? 0)}'s arm.`);
    // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  } },
  ]);
  scene.build();
}

function enterWatchRaunchyComedyMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('Raunchy comedy film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterWatchComedyMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('Comedy film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterWatchDramaMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('Drama film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterWatchRomanceMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('Romance film begins.');
  // TODO-QSP: xgt 'date_movie', 'movie_interlude'
  scene.build();
}

function enterMovieInterlude(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  (Math.floor(Math.random() * 11) + 0) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    // TODO-QSP: dynamic text: <<$npcdesc>> whispers in your ear.
    scene.text(`${((s as any).npcdesc ?? 0)} whispers in your ear.`);
    // TODO-QSP: dynamic text: "<i>Hey <<$npc_pcspetname[$npcID]>>…</i>" You hear the sound of a zipper and a q...
    scene.text(`"<i>Hey ${((s as any).npc_pcspetname ?? 0)?.[String((s as any).npcID ?? 0)]}…</i>" You hear the sound of a zipper and a quick glance reveals that he's pulled his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} dick out. "<i>Suck me off…</i>"`);
    scene.actions([
      { label: 'Shush him', handler: (st: GameState) => {
    scene.text('"<i>Shhh!</i>" you hiss. "I\'m trying to watch the movie!"');
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).cinema_bj_last_time ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"That\'s not what you said last time," he snickers, ignoring your complaints, and tries to pull your head towards his lap.');
      } else {
        scene.text('"Come on! It\'ll be hot!" he says, ignoring your complaints, trying to pull your head towards his lap.');
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Stop it!"');
    // TODO-QSP: dynamic text: You swat <<$npcdesc>>, finally forcing him to retreat with a grumble.
    scene.text(`You swat ${((s as any).npcdesc ?? 0)}, finally forcing him to retreat with a grumble.`);
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie2...
  } },
    ]);
  } },
        { label: 'Acquiesce', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['theater_frisky'] = 'reluctant';
    scene.text('"Ugh, fine," you sigh, rolling your eyes and bend over to wrap your lips around his cock.');
    qspCall(s, 'date_movie', 'theater_bj_menu');
  } },
      ]);
    } else {
      scene.text('"Come on!" he says, ignoring your complaints, and tries to pull your hand towards his lap.');
      // TODO-QSP: end !}
      scene.actions([
        { label: 'Acquiesce', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['theater_frisky'] = 'reluctant';
    scene.text('"Ugh, fine," you sigh, rolling your eyes and bend over to wrap your lips around his cock.');
    qspCall(s, 'date_movie', 'theater_hj1');
  } },
      ]);
    }
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Hmph. Fine," he grumbles, tucking his meat back into his pants and zipping up.');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_movie', 'watch_<<$date_ev[''film_decide'']>>_movie2...
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'date_movie', 'keep_watching');
  qspCall(s, 'date_movie', 'bored_watching');
  qspCall(s, 'date_movie', 'reach_cock');
  scene.actions([
    { label: 'Great idea', handler: (st: GameState) => {
    scene.text('You grin in the dark and eagerly bend over to wrap your lips around his cock.');
    // TODO-QSP: xgt 'date_movie', 'theater_bj_menu'
  } },
    { label: 'Sigh and comply', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['theater_frisky'] = 'reluctant';
    scene.text('You don\'t quite manage to stifle the sigh that rises up from inside you, but you don\'t want to make a fuss out of this. Without a word, you bend over to suck his dick like he wants.');
    // TODO-QSP: xgt 'date_movie', 'theater_bj_menu'
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
    case 'init':
      enterInit(s, scene);
      break;
    case 'pav_cinema':
      enterPavCinema(s, scene);
      break;
    case 'what_to_watch_pav':
      enterWhatToWatchPav(s, scene);
      break;
    case 'city_cinema':
      enterCityCinema(s, scene);
      break;
    case 'suggest_film1':
      enterSuggestFilm1(s, scene);
      break;
    case 'suggest_film2':
      enterSuggestFilm2(s, scene);
      break;
    case 'suggest_film3':
      enterSuggestFilm3(s, scene);
      break;
    case 'boy_film_suggest_react ':
      enterBoyFilmSuggestReact(s, scene);
      break;
    case 'ticket_menu':
      enterTicketMenu(s, scene);
      break;
    case 'split_cost':
      enterSplitCost(s, scene);
      break;
    case 'offer_to_pay':
      enterOfferToPay(s, scene);
      break;
    case 'asked_to_pay_start':
      enterAskedToPayStart(s, scene);
      break;
    case 'asked_to_pay':
      enterAskedToPay(s, scene);
      break;
    case 'buy_tickets':
      enterBuyTickets(s, scene);
      break;
    case 'buy_tickets_payment':
      enterBuyTicketsPayment(s, scene);
      break;
    case 'no_money_tickets':
      enterNoMoneyTickets(s, scene);
      break;
    case 'no_money_tickets_boy_pay':
      enterNoMoneyTicketsBoyPay(s, scene);
      break;
    case 'buy_tickets_end':
      enterBuyTicketsEnd(s, scene);
      break;
    case 'snack_counter':
      enterSnackCounter(s, scene);
      break;
    case 'snack_menu':
      enterSnackMenu(s, scene);
      break;
    case 'buy_snacks':
      enterBuySnacks(s, scene);
      break;
    case 'buy_snacks_payment':
      enterBuySnacksPayment(s, scene);
      break;
    case 'watch_action_movie1':
      enterWatchActionMovie1(s, scene);
      break;
    case 'watch_superhero_movie1':
      enterWatchSuperheroMovie1(s, scene);
      break;
    case 'watch_horror_movie1':
      enterWatchHorrorMovie1(s, scene);
      break;
    case 'watch_raunchy_comedy_movie1':
      enterWatchRaunchyComedyMovie1(s, scene);
      break;
    case 'watch_comedy_movie1':
      enterWatchComedyMovie1(s, scene);
      break;
    case 'watch_drama_movie1':
      enterWatchDramaMovie1(s, scene);
      break;
    case 'watch_romance_movie1':
      enterWatchRomanceMovie1(s, scene);
      break;
    case 'movie_interlude':
      enterMovieInterlude(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const date_movie: LocationDef = {
  name: 'date_movie',
  title: 'You are too broke to afford this.',
  region: 'other',
  enter: enter,
};
