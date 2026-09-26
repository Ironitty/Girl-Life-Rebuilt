import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['ticket_cost'] = 100;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).region ?? 0) === 'pav') {
    ((s as any).date_ev = (s as any).date_ev ?? {})['loc'] = 'pav_cinema';
    ((s as any).date_ev = (s as any).date_ev ?? {})['cinema_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/park/theater/kinoteatr.jpg"></center>';
    qspGoto(s, 'date_movie', 'pav_cinema');
  } else {
    if (((s as any).region ?? 0) === 'city') {
      ((s as any).date_ev = (s as any).date_ev ?? {})['loc'] = 'city_cinema';
      ((s as any).date_ev = (s as any).date_ev ?? {})['cinema_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/shared/cinema/theaterbuy.jpg"></center>';
      qspGoto(s, 'date_movie', 'city_cinema');
    }
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['at_home'] = 0;
  ((s as any).date_ev = (s as any).date_ev ?? {})['type'] = 'cinema_date';
  ((s as any).date_ev = (s as any).date_ev ?? {})[''] = 'cinema_date';
  ((s as any).date_ev = (s as any).date_ev ?? {})['activity_count'] = ((s as any).date_ev['activity_count'] ?? 0) + (1);
  qspCall(s, 'npcStat', '$temp_npcID');
  scene.build();
}

function enterPavCinema(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  scene.text(`You walk with ${((s as any).npcdesc ?? '')} to the cinema in the park to see what's playing.`);
  (s as any).temp_rand = (Math.floor(Math.random() * 20) + 0);
  if (((s as any).temp_rand ?? 0) < 10) {
    ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'superhero';
    scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest generic superhero movie.');
  } else {
    if (((s as any).temp_rand ?? 0) < 15) {
      ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'action';
      scene.text('It\'s so small that there\'s only one screen showing the same movie all day. In this case, the latest blockbuster action flick.');
    } else {
      if (((s as any).temp_rand ?? 0) === 15) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'comedy';
        scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today.');
      } else {
        if (((s as any).temp_rand ?? 0) === 16) {
          ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
          scene.text('It\'s so small that there\'s only one screen showing the same movie all day. Surprisingly, it seems to be playing a comedy today. Looks raunchy and vulgar though, the kind of movie with lots of nudity and crude sex jokes.');
        } else {
          if (((s as any).temp_rand ?? 0) === 17) {
            ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'horror';
            scene.text('It\'s so small that there\'s only one screen showing the same movie all day. But instead of the usual superhero movie, it looks like there\'s a horror film on today.');
          } else {
            if (((s as any).temp_rand ?? 0) === 18) {
              ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'drama';
              scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s an award winning drama playing today.');
            } else {
              ((s as any).date_ev = (s as any).date_ev ?? {})['film_suggest'] = 'romance';
              scene.text('It\'s so small that there\'s only one screen showing the same movie all day. It looks like there\'s a romance movie on today.');
            }
          }
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  qspGoto(s, 'date_movie', 'what_to_watch_pav');
  scene.build();
}

function enterWhatToWatchPav(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' what he thinks', handler: (st: GameState) => {
    scene.text(`"Well?" you ask, turning to look at ${((st as any).npcdesc ?? '')}. "Feel like watching that?"`);
    if (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] === 'movie_date') {
      scene.text(`"I've heard really good things about it," ${((st as any).npcdesc ?? '')} says, excitement sparkling in his eyes. "Let's go buy tickets."`);
      scene.text(`Following his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
      scene.actions([
        { label: 'Continue', goto: ['date_movie', 'buy_tickets'] },
      ]);
    } else {
      if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).date_ev ?? 0)?.['film_suggest']) {
        scene.text('The type of movie playing is the type he likes');
        scene.text('"Let\'s watch it."');
        scene.text(`Following his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
        scene.actions([
          { label: 'Buy tickets', goto: ['date_movie', 'buy_tickets'] },
        ]);
      } else {
        if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          if ((!(Math.floor(Math.random() * 1) + 0))) {
            scene.text(`"We're already here, we might as well," ${((st as any).npcdesc ?? '')} shrugs and moves forward to buy tickets. You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
            scene.actions([
              { label: 'Continue', goto: ['date_movie', 'buy_tickets'] },
            ]);
          } else {
            scene.text(`"Looks kind of boring," ${((st as any).npcdesc ?? '')} shrugs. "Let's go do something else."`);
            scene.text('"What should we do instead?" you ask.');
          }
        } else {
          scene.text('He shrugs. "I don\'t know. What do you think?"');
          qspCall(st, 'date_funcs', 'alternate_plans');
          scene.actions([
            { label: 'Sounds fun (watch movie)', handler: (st: GameState) => {
    scene.text('"Sounds like fun," you smile. "Let\'s just watch it!"');
    scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            { label: 'You\'re already here (watch movie)', handler: (st: GameState) => {
    scene.text('"We\'re already here," you sigh. "Let\'s just watch it I guess."');
    scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    }
  } },
    { label: 'I wanted to see this!', handler: (st: GameState) => {
    scene.text('"I wanted to see this!" you say.');
    if (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] === 'movie_date') {
      scene.text('"Sure, I\'ll watch anything, I love movies."');
      scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).date_ev ?? 0)?.['film_suggest']) {
        scene.text('"Me too."');
        scene.text(`The two of you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          if ((!(Math.floor(Math.random() * 1) + 0))) {
            scene.text(`"We're already here, we might as well," ${((st as any).npcdesc ?? '')} shrugs and moves forward to buy tickets. You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
            scene.actions([
              { label: 'Continue', goto: ['date_movie', 'buy_tickets'] },
            ]);
          } else {
            scene.text(`"Looks kind of boring," ${((st as any).npcdesc ?? '')} shrugs. "Let's go do something else."`);
            scene.text('"What should we do instead?" you ask.');
          }
        } else {
          scene.text('"Sure, this is fine I guess," he says.');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
    { label: 'Sounds boring', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'comedy') {
      scene.text('"Ugh, sounds boring," you moan. ');
    } else {
      if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'raunchy_comedy') {
        scene.text('"Ugh, sounds boring," you moan. ');
      } else {
        if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'horror') {
          scene.text('"Ugh, sounds boring," you moan. ');
        } else {
          if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'drama') {
            scene.text('"Ugh, sounds boring," you moan. ');
          } else {
            if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'romance') {
              scene.text('"Ugh, sounds boring," you moan. ');
            } else {
              if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'superhero') {
                scene.text('"Ugh, sounds boring," you moan. ');
              } else {
                if (((st as any).date_ev ?? 0)?.['film_suggest'] === 'action') {
                  scene.text('"Ugh, sounds boring," you moan. ');
                }
              }
            }
          }
        }
      }
    }
    if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).date_ev ?? 0)?.['film_suggest']) {
      scene.text('"Come on, you\'ll like it," he says and insists you see it anyways.');
      qspCall(st, 'willpower', 'misc', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Insist you do something else', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Insist you do something else', handler: (st: GameState) => {
    alert('Placeholder until other date options are available. No willpower was reduced.');
  } },
        ]);
      }
      scene.actions([
        { label: 'Follow him to the ticket counter', handler: (st: GameState) => {
    scene.text(`You follow his lead, you go up to the counter where a bored teenager tells you its ${qspFunc(s, 'money', 'string_price', (((st as any).date_ev ?? 0)?.['ticket_cost'] ?? ''))} per ticket.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('"Well… wanna do something else then?"');
      qspCall(st, 'date_funcs', 'alternate_plans');
      scene.actions([
        { label: 'Too much trouble (watch movie)', handler: (st: GameState) => {
    scene.text('"We\'re already here," you sigh. "Let\'s just watch it I guess."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCityCinema(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  scene.text(`You walk with ${((s as any).npcdesc ?? '')} to the cinema in the park to see what's playing.`);
  scene.text('There is a variety of films of many different genres.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSuggestFilm1(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' what he wants', handler: (st: GameState) => {
    scene.text(`"Well?" you ask, turning to look at ${((st as any).npcdesc ?? '')}. "What do you think we should watch?"`);
    if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'action'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 6) + 1) === 1)) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'action';
      scene.text('"Let\'s watch the action movie."');
    } else {
      if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'horror'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 5) + 1) === 1)) {
        ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'horror';
        scene.text('"Let\'s watch the horror movie."');
      } else {
        if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'raunchy_comedy'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 4) + 1) === 1)) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
          scene.text('"Let\'s watch the comedy movie."');
        } else {
          if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'comedy'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 3) + 1) === 1)) {
            ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'comedy';
            scene.text('"Let\'s watch the comedy movie."');
          } else {
            if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'drama'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1)) {
              ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'drama';
              scene.text('"Let\'s watch the drama."');
            } else {
              if (((st as any).npc_fav_genre ?? 0)?.[String((st as any).npcID ?? 0)] === 'romance'  ||  (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] !== 'movie_date'  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
                ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'romance';
                scene.text('"Let\'s watch the romance."');
              } else {
                if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyFilmSuggestReact(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== '') {
      scene.actions([
        { label: 'Something else', handler: (st: GameState) => {
    scene.text('You want to watch something else');
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'action') {
      scene.actions([
        { label: 'Let\'s watch the action film', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'action_movie';
    scene.text('"How about that one instead?" you say, pointing at the action movie.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'horror') {
      scene.actions([
        { label: 'Horror', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'horror_movie';
    scene.text('"How about that one instead?" you say, pointing at the horror movie.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'comedy') {
      scene.actions([
        { label: 'Comedy', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'comedy_movie';
    scene.text('"How about that one instead?" you say, pointing at the comedy.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'raunchy_comedy') {
      scene.actions([
        { label: 'Raunchy comedy', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'raunchy_movie';
    scene.text('"How about that one instead?" you say, pointing at the raunchy looking comedy.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'drama') {
      scene.actions([
        { label: 'Drama', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'drama_movie';
    scene.text('"How about that one instead?" you say, pointing at the drama.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).date_ev ?? 0)?.['film_suggest'] !== 'romance') {
      scene.actions([
        { label: 'Romance', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest2'] = 'romance_movie';
    scene.text('"How about that one instead?" you say, pointing at the romance.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSuggestFilm3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    { label: 'Do something else', handler: (st: GameState) => {
    scene.text('Now that you\'re here and looking over all the movies, you realize you really don\'t feel like sitting in a theater for the next two hours watching something.');
    scene.text(`"Do you wanna do something else?" you ask ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Like what?"');
    qspCall(st, 'date_funcs', 'alternate_plans');
  } },
  ]);
  scene.build();
}

function enterSuggestFilm1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Let\'s watch the action film', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'action';
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
    { label: 'Horror', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'horror';
    scene.text('"Let\'s watch the horror movie."');
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
    { label: 'Comedy', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'comedy';
    scene.text('"Let\'s watch the comedy movie."');
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
    { label: 'Raunchy comedy', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'raunchy_comedy';
    scene.text('"Let\'s watch the comedy movie."');
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
    { label: 'Drama', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'drama';
    scene.text('"Let\'s watch the drama."');
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
    { label: 'Romance', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_suggest'] = 'romance';
    scene.text('"Let\'s watch the romance."');
    qspGoto(st, 'date_movie', 'suggest_film2');
  } },
  ]);
  scene.build();
}

function enterSuggestFilm2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).date_var ?? 0)?.['film_suggest']) {
    ((s as any).date_ev = (s as any).date_ev ?? {})['film_decide'] = (((s as any).date_ev ?? 0)?.['film_suggest']);
    scene.text('The type of movie playing is the type he likes');
    scene.text('"Let\'s watch it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTicketMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_fav_genre ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).date_var ?? 0)?.['film_suggest']) {
      scene.text(`${((s as any).npcdesc ?? '')} shakes his head.`);
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyFilmSuggestReact(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).date_ev = (s as any).date_ev ?? {})['film_decide'] = (((s as any).date_ev ?? 0)?.['film_suggest']);
      scene.text('He\'s fine with whatever you want.');
      scene.text('"Let\'s watch it."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTicketMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterSuggestFilm3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text(`"Why'd you ask what I wanted if you just wanted to watch that one anyways?" ${((s as any).npcdesc ?? '')} grumbles but follows you to get in line to buy tickets anyways.`);
  } else {
    scene.text('"Sure, that sounds good too," he says and the two of you get in line together.');
  }
  ((s as any).date_ev = (s as any).date_ev ?? {})['film_decide'] = (((s as any).date_ev ?? 0)?.['film_suggest2']);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTicketMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBoyFilmSuggestReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['film_suggest'] !== '') {
    scene.actions([
      { label: 'You want to watch your movie', handler: (st: GameState) => {
    scene.text('"I don\'t wanna watch that!" you moan. "Let\'s watch the other one instead!"');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('He argues with you.');
      scene.actions([
        { label: 'Fight about it', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_fight'] = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
    scene.text('You fight about it.');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] < 2  &&  (Math.floor(Math.random() * 100) + 1) < ((st as any).pcs_persuas ?? 0)) {
      scene.text('"<i>Fine!</i>" he snaps. "We\'ll watch your movie!"');
    } else {
      scene.actions([
        { label: 'Give in', handler: (st: GameState) => {
    scene.text('"Alright fine," you grumble. "We\'ll watch yours."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
      ]);
    } else {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      scene.text('He concedes to watching your movie.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['film_decide'] = (((st as any).date_ev ?? 0)?.['film_suggest']);
    scene.text('"Okay, let\'s watch that."');
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['npc_ticket_buy'] = 1;
      scene.text('"I\'ll go buy the tickets," he smiles.');
      scene.actions([
        { label: 'Go with him', goto: ['date_movie', 'buy_tickets'] },
        { label: 'I\'ll buy the snacks', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_snack_buy'] = 1;
    scene.text('"Then I\'ll get the popcorn," you smile back.');
    scene.actions([
      { label: 'Go to the snack counter', goto: ['date_movie', 'snack_counter'] },
    ]);
  } },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTicketMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  scene.build();
}

function enterTicketMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['split_ticket'] === 1  ||  ((s as any).date_ev ?? 0)?.['npc_ticket_buy'] === 1  ||  ((s as any).date_ev ?? 0)?.['pc_ticket_buy'] === 1) {
    qspGoto(s, 'date_movie', 'buy_tickets');
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskedToPayStart(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'Split the cost', goto: ['date_movie', 'split_cost'] },
        { label: 'Offer to buy the tickets', goto: ['date_movie', 'split_cost'] },
        { label: 'Ask him to buy the tickets', handler: (st: GameState) => {
    scene.text('"Can you buy the tickets?" you ask.');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['split_ticket'] = 1;
      scene.text('"No way, pay for yourself."');
      scene.actions([
        { label: 'Buy your ticket', goto: ['date_movie', 'buy_tickets'] },
      ]);
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['npc_ticket_buy'] = 1;
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
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  scene.text('"Wanna split it?" you ask.');
  scene.text('"Sure."');
  ((s as any).date_ev = (s as any).date_ev ?? {})['split_ticket'] = 1;
  scene.actions([
    { label: 'Buy tickets', goto: ['date_movie', 'buy_tickets'] },
  ]);
  scene.build();
}

function enterOfferToPay(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  scene.text('"I\'ll pay for it," you smile.');
  if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).date_ev = (s as any).date_ev ?? {})['npc_ticket_buy'] = 1;
    scene.text('"No, let me," he insists.');
  } else {
    ((s as any).date_ev = (s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    scene.text('"Wow, that\'s so nice of you," he says.');
  }
  scene.actions([
    { label: 'Ticket counter', goto: ['date_movie', 'buy_tickets'] },
  ]);
  scene.build();
}

function enterAskedToPayStart(s: GameState, scene: SceneBuilder): void {
  scene.text('He asks you to buy the tickets.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskedToPay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Why me?', handler: (st: GameState) => {
    scene.text('"Why me?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAskedToPay(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"I\'ll pay you back, promise!"');
    } else {
      scene.text('"I\'m kinda strapped for cash at the moment," he says with a guilty smile. "Pay you back later?"');
      if (((st as any).he_invited_pc ?? 0) === 1) {
        scene.actions([
          { label: '<i>You</i> invited <i>me</i>!', handler: (st: GameState) => {
    scene.text('"What the hell?" you frown. "You asked <i>me</i> to go out! And you don\'t have any money?"');
    scene.text('He shrugs and his smile becomes a grin.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAskedToPay(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterAskedToPay(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['wants_pc_pay'] = 1;
  if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['ticket_cost']) === 1) {
    if (((s as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      scene.actions([
        { label: 'Your treat', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    scene.text('"You don\'t have to pay me back for anything," you smile. "It\'s my treat."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay for both', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    if (((st as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      ((st as any).npc_money_owed = (st as any).npc_money_owed ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_money_owed[String((st as any).npcID ?? 0)] ?? 0) + ((((st as any).date_ev ?? 0)?.['ticket_cost']));
    }
    scene.text('"Okay," you smirk. "I\'ll get you this time."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      { label: 'Pay for both (exasperated)', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_ticket_buy'] = 1;
    if (((st as any).date_ev ?? 0)?.['wants_pc_pay'] === 1) {
      ((st as any).npc_money_owed = (st as any).npc_money_owed ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_money_owed[String((st as any).npcID ?? 0)] ?? 0) + ((((st as any).date_ev ?? 0)?.['ticket_cost']));
    }
    scene.text('"Ugh, fine."');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
      { label: 'No money (lie)', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['no_money'] = 1;
    scene.text('"Can\'t. Don\'t have any money," you say.');
    scene.actions([
      { label: 'Buy the tickets', goto: ['date_movie', 'buy_tickets'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No money', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['no_money'] = 1;
    if (((st as any).date_ev ?? 0)?.['wants_pc_pay'] === 1  &&  ((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"Well, I don\'t have any money either," you say awkwardly.');
      scene.text('"So… what should we do…?"');
      qspCall(st, 'date_funcs', 'alternate_plans');
    } else {
      scene.text('"Can\'t. Don\'t have any money," you say.');
      scene.text('He complains and agrees to buy the tickets.');
      ((st as any).date_ev = (st as any).date_ev ?? {})['npc_ticket_buy'] = 1;
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuyTickets(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  ((s as any).date_ev = (s as any).date_ev ?? {})['film_decide'] = (((s as any).date_ev ?? 0)?.['film_suggest']);
  if (((s as any).date_ev ?? 0)?.['split_ticket'] === 1) {
    scene.text(`You get in line with ${((s as any).npcdesc ?? '')} and buy tickets.`);
    ((s as any).date_ev = (s as any).date_ev ?? {})['pay_cost'] = (((s as any).date_ev ?? 0)?.['ticket_cost']);
    qspGoto(s, 'date_movie', 'buy_tickets_payment');
  } else {
    if (((s as any).date_ev ?? 0)?.['npc_ticket_buy'] === 1) {
      scene.text(`You get in line with ${((s as any).npcdesc ?? '')} as he buys tickets for both of you.`);
      qspGoto(s, 'date_movie', 'buy_tickets_end');
    } else {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['ticket_cost'] * 2) === 1) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['pc_ticket_buy'] = 1;
        scene.text('You buy tickets for the movie.');
        ((s as any).date_ev = (s as any).date_ev ?? {})['pay_cost'] = (((s as any).date_ev ?? {})?.['ticket_cost'] ?? 0) * 2;
        qspGoto(s, 'date_movie', 'buy_tickets_payment');
      } else {
        scene.text('You buy tickets for the movie.');
        scene.text('Sorry I can`t, I only have money for my ticket.');
        scene.text(`You get in line with ${((s as any).npcdesc ?? '')} and buy tickets.`);
        ((s as any).date_ev = (s as any).date_ev ?? {})['pay_cost'] = (((s as any).date_ev ?? 0)?.['ticket_cost']);
        qspGoto(s, 'date_movie', 'buy_tickets_payment');
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
    { label: 'Pay', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).date_ev ?? 0)?.['pay_cost']) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', (((st as any).date_ev ?? 0)?.['pay_cost']));
      ((st as any).date_ev = (st as any).date_ev ?? {})['total_cost'] = ((st as any).date_ev['total_cost'] ?? 0) + ((((st as any).date_ev ?? 0)?.['pay_cost']));
      ((st as any).date_ev = (st as any).date_ev ?? {})['pay_cost'] = 0;
      scene.text('You pay for the tickets.');
      qspGoto(st, 'date_movie', 'buy_tickets_end');
    }
  } },
  ]);
  scene.build();
}

function enterNoMoneyTickets(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
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
        scene.text(`${((s as any).npcdesc ?? '')} scowls at you.`);
        scene.text('"Are you fucking kidding me?"');
        scene.actions([
          { label: 'Ask him to pay (sweetly)', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.text('"Could you pay for it?" you ask, batting your eyelashes at him. "Please please pretty please?"');
    scene.text('"I can\'t believe you right now," he grumbles but pays anyways.');
    qspGoto(st, 'date_movie', 'no_money_tickets_selfish');
  } },
        ]);
      } else {
        if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text(`"Don't worry about it," ${((s as any).npcdesc ?? '')} smiles. "I'll take care of it."`);
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
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter.');
    } else {
      scene.text('You grab onto his arm and hug it tight as you move off from the counter.');
    }
    qspGoto(st, 'date_movie', 'buy_tickets_end');
  } },
    { label: 'You\'ll make it up to him', handler: (st: GameState) => {
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"You\'re so sweet!" Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter, chirping happily, "I\'ll make it up to you, I promise."');
    } else {
      scene.text('"You\'re so sweet!" You grab onto his arm and hug it tight as you move off from the counter, chirping happily, "I\'ll make it up to you, I promise."');
    }
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted'  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  ||  ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] > (Math.floor(Math.random() * 6) + 5)) {
      if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'blowjob') {
        scene.text(`"Oh yeah?" ${((st as any).npcdesc ?? '')}'s attention suddenly seems more focused on you as he grins wickedly. "Think you could… give me a blowjob later as payment?"`);
      } else {
        if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'anal') {
          scene.text(`"Oh yeah?" ${((st as any).npcdesc ?? '')}'s attention suddenly seems more focused on you as he grins wickedly. "How about after this you let me fuck your ass?"`);
        } else {
          scene.text(`"Oh yeah?" ${((st as any).npcdesc ?? '')}'s attention suddenly seems more focused on you as he grins wickedly. "How about after we head back to my place to let you 'make it up to me?'"`);
        }
      }
      scene.actions([
        { label: 'I didn\'t mean it like that!', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
    scene.text('"I didn\'t mean it like that!"');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      scene.text(`${((st as any).npcdesc ?? '')}'s scowl returns. "Then what's the point?!"`);
    } else {
      scene.text('"Oh. Well, I\'m sure we can think of something…"');
    }
    qspGoto(st, 'date_movie', 'buy_tickets_end');
  } },
        { label: 'Sure thing', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
    scene.text('"Sure thing," you smile at him. "Anything to make my guy happy."');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    qspGoto(st, 'date_movie', 'buy_tickets_end');
  } },
        { label: 'Lead him on', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
    scene.text('"Sure thing," you smile at him. "Anything to make my guy happy."');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    scene.text('<i>Boys are so easy to deal with,</i> you think, mentally rolling your eyes.');
    qspGoto(st, 'date_movie', 'buy_tickets_end');
  } },
      ]);
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Hrmph. Whatever," he mumbles unhappily.');
      } else {
        if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Seriously, you don\'t have to do anything."');
        } else {
          scene.text('"Maybe you can pay for the next one," he replies pleasantly.');
        }
      }
      qspGoto(st, 'date_movie', 'buy_tickets_end');
    }
  } },
    { label: 'You\'ll make it up to him (sex)', handler: (st: GameState) => {
    scene.text('"You\'re so sweet!"');
    scene.text('Ignoring his grousing, you grab onto his arm and hug it tight as you move off from the counter.');
    scene.actions([
      { label: 'With a blowjob', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"I\'ll give you the best blowjob of your life later," you whisper in his ear.');
    scene.text('"Now this is the kind of repayment I could enjoy," he grins back, putting his arm around you.');
    qspGoto(st, 'date_movie', 'buy_tickets_end');
  } },
      { label: 'With sex', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"I\'ll let you do whatever you want to me later," you whisper in his ear.');
    scene.text('"<i>Whatever</i> I want?" he grins back, putting his arm around you.');
    qspGoto(st, 'date_movie', 'buy_tickets_end');
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
      { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
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
    { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((s as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
  ]);
  scene.build();
}

function enterSnackCounter(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['cinema_snacks'] = 1;
  scene.img('images/locations/shared/cinema/snack_bar.jpg');
  scene.text('It\'s the place you buy popcorn and sweets.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSnackMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSnackMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuySnacks(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).date_ev ?? 0)?.['popcorn_buy'] === 0) {
    scene.actions([
      { label: 'Popcorn', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['popcorn_buy'] = 1;
      ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) + (200);
      scene.text('You ask for popcorn.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['soda_buy'] === 0) {
    scene.actions([
      { label: 'Soda', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['soda_buy'] = 1;
      ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) + (200);
      scene.text('You ask for soda.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['candy_buy'] === 0) {
    scene.actions([
      { label: 'Candy', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).date_ev ?? 0)?.['snack_cost'] + 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).date_ev = (st as any).date_ev ?? {})['candy_buy'] = 1;
      ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) + (200);
      scene.text('You ask for candy.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuySnacks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['pc_snack_buy'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuySnacksPayment(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).date_ev ?? 0)?.['no_money'] === 0) {
      scene.actions([
        { label: 'Offer to pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('"Let me pay for it," you say."');
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('He says no and insists he pays for it instead.');
      scene.actions([
        { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
      ]);
    } else {
      if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"You really don\'t have to," he says. "Let me pay."');
          scene.actions([
            { label: 'Let him pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('He pays.');
    scene.actions([
      { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"You really don\'t have to," he says. "Let\'s just split it instead."');
          scene.actions([
            { label: 'Split the cost', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) / (2);
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('You split the cost of the snacks.');
    qspGoto(st, 'date_movie', 'buy_snacks_payment');
  } },
          ]);
        }
        scene.actions([
          { label: 'Insist you pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('You insist and pay for the food' + ((((st as any).date_ev ?? 0)?.['soda_buy'] > 0) ? (' and drinks.') : ('.')));
    qspGoto(st, 'date_movie', 'buy_snacks_payment');
  } },
        ]);
      } else {
        scene.text('"Okay," he says.');
        scene.text('He lets you pay.');
        qspGoto(st, 'date_movie', 'buy_snacks_payment');
      }
    }
  } },
        { label: 'Split the cost', handler: (st: GameState) => {
    scene.text('"Let\'s both pay half," you suggest.');
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] <= 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['npc_snack_buy'] = 1;
      scene.text('He says no and insists he pays for it instead.');
      scene.actions([
        { label: 'Let him pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('He pays.');
    scene.actions([
      { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
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
      { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
    ]);
  } },
        ]);
      } else {
        ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) / (2);
        scene.text('"Okay, that sounds fine," he says.');
        scene.text('You split the cost of the snacks.');
        qspGoto(st, 'date_movie', 'buy_snacks_payment');
      }
      scene.actions([
        { label: 'Insist you pay', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/snack_bar.jpg');
    scene.text('You insist and pay for the food' + ((((st as any).date_ev ?? 0)?.['soda_buy'] > 0) ? (' and drinks.') : ('.')));
    qspGoto(st, 'date_movie', 'buy_snacks_payment');
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
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1)) {
      ((st as any).date_ev = (st as any).date_ev ?? {})['npc_snack_buy'] = 1;
      scene.text('"Sure," he says.');
      scene.text('He pays for it.');
      scene.actions([
        { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
      ]);
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).date_ev = (st as any).date_ev ?? {})['npc_snack_buy'] = 1;
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
        scene.text('He complains and pays for it.');
        scene.actions([
          { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
        ]);
      } else {
        if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          ((st as any).date_ev = (st as any).date_ev ?? {})['npc_snack_buy'] = 1;
          scene.text('"Sure," he says and pays for it.');
          scene.actions([
            { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
          ]);
        } else {
          (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
          if ((!((st as any).temp_rand ?? 0))) {
            ((st as any).date_ev = (st as any).date_ev ?? {})['snack_cost'] = ((st as any).date_ev['snack_cost'] ?? 0) / (2);
            scene.text('"Can we split it?" he asks. "I\'m a little light on cash."');
            qspGoto(st, 'date_movie', 'buy_snacks_payment');
          } else {
            if (((st as any).temp_rand ?? 0) === 1) {
              scene.text('"I\'m a little light on cash," he says sheepishly.');
              qspGoto(st, 'date_movie', 'buy_snacks_payment');
            } else {
              ((st as any).date_ev = (st as any).date_ev ?? {})['npc_snack_buy'] = 1;
              scene.text('"Okay," he says.');
              scene.actions([
                { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
              ]);
            }
          }
          (st as any).temp_rand = undefined;
        }
        scene.text('"Okay," he says.');
        scene.text('He lets you pay.');
        qspGoto(st, 'date_movie', 'buy_snacks_payment');
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterBuySnacksPayment(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Pay', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).date_ev ?? 0)?.['snack_cost']) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', (((st as any).date_ev ?? 0)?.['snack_cost']));
      ((st as any).date_ev = (st as any).date_ev ?? {})['total_cost'] = ((st as any).date_ev['total_cost'] ?? 0) + ((((st as any).date_ev ?? 0)?.['snack_cost']));
      scene.text('You pay for the snacks.');
      scene.actions([
        { label: 'Go see the movie', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie1'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWatchActionMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Action film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
  scene.build();
}

function enterWatchSuperheroMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Superhero film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
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
    qspGoto(st, 'date_movie', 'movie_interlude');
  } },
    { label: '', labelFn: (s: GameState) => 'Grab ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text(`You scream and grab ${((st as any).npcdesc ?? '')}'s arm.`);
    qspGoto(st, 'date_movie', 'movie_interlude');
  } },
  ]);
  scene.build();
}

function enterWatchRaunchyComedyMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('Raunchy comedy film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
  scene.build();
}

function enterWatchComedyMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('Comedy film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
  scene.build();
}

function enterWatchDramaMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('Drama film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
  scene.build();
}

function enterWatchRomanceMovie1(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/cinema/enjoy${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('Romance film begins.');
  qspGoto(s, 'date_movie', 'movie_interlude');
  scene.build();
}

function enterMovieInterlude(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] !== 'movie_date'  &&  (Math.floor(Math.random() * 11) + 0) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.text(`${((s as any).npcdesc ?? '')} whispers in your ear.`);
    scene.text(`"<i>Hey ${(((s as any).npc_pcspetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}…</i>" You hear the sound of a zipper and a quick glance reveals that he's pulled his ${(((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} dick out. "<i>Suck me off…</i>"`);
    scene.actions([
      { label: 'Shush him', handler: (st: GameState) => {
    scene.text('"<i>Shhh!</i>" you hiss. "I\'m trying to watch the movie!"');
    if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).cinema_bj_last_time ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"That\'s not what you said last time," he snickers, ignoring your complaints, and tries to pull your head towards his lap.');
      } else {
        scene.text('"Come on! It\'ll be hot!" he says, ignoring your complaints, trying to pull your head towards his lap.');
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.text('"Stop it!"');
    scene.text(`You swat ${((st as any).npcdesc ?? '')}, finally forcing him to retreat with a grumble.`);
    scene.actions([
      { label: 'Keep watching', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie2'] },
    ]);
  } },
        { label: 'Acquiesce', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['theater_frisky'] = 'reluctant';
    scene.text('"Ugh, fine," you sigh, rolling your eyes and bend over to wrap your lips around his cock.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTheaterBjMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      scene.text('"Hmph. Fine," he grumbles, tucking his meat back into his pants and zipping up.');
      scene.actions([
        { label: 'Keep watching', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie2'] },
      ]);
    }
  } },
      { label: 'Great idea', handler: (st: GameState) => {
    scene.text('You grin in the dark and eagerly bend over to wrap your lips around his cock.');
    qspGoto(st, 'date_movie', 'theater_bj_menu');
  } },
      { label: 'Sigh and comply', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['theater_frisky'] = 'reluctant';
    scene.text('You don\'t quite manage to stifle the sigh that rises up from inside you, but you don\'t want to make a fuss out of this. Without a word, you bend over to suck his dick like he wants.');
    qspGoto(st, 'date_movie', 'theater_bj_menu');
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKeepWatching(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoredWatching(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReachCock(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterKeepWatching(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.text('You keep watching the movie.');
    scene.actions([
      { label: 'Second half', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoredWatching(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You\'re bored', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['movie_bored'] = 1;
    scene.img('images/shared/romance/dates/cinema/bored1.jpg');
    scene.text('Sigh. So boring.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReachCock(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Second half', goto: ['date_movie', 'watch_' + String((((st as any).date_ev ?? {})['film_decide'])) + '_movie2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReachCock(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Reach for his cock (blow him)', handler: (st: GameState) => {
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You reach over and unzip his pants.');
    if (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] === 'movie_date') {
      scene.text('"Hey! What are you doing?" he asks, frantically looking back between you and the screen.');
      if ((Math.floor(Math.random() * 11) + 0) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
        scene.text('"What\'s it look like I\'m doing?" you ask, bending your head over his lap. With a quick tug, his cock springs free and you wrap your lips around it.');
        scene.text('"I- Nngh-! <i>Oh fuck</i>," he breathes. His body relaxes as you smile around his cock and start bobbing your head up and down.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTheaterBjMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"What\'s it look like I\'m doing?" you ask, bending your head over his lap.');
        scene.text('"Hey, cut it out," he scowls, pushing you back. "I\'m trying to watch!"');
        scene.text('You\'re disappointed.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((st as any).npc_risktaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_indiscreet ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Hey! What are you doing?" he asks, eyes alight and a growing smile on his face.');
      } else {
        scene.text('"Hey! What are you doing?" he asks, blushing as he looks around the theater at the other viewers.');
      }
      scene.text('"What\'s it look like I\'m doing?" you ask, bending your head over his lap. With a quick tug, his cock springs free and you wrap your lips around it.');
      scene.text('"I- Nngh-! <i>Oh fuck</i>," he breathes. As his body relaxes, you smile around his cock and start bobbing your head up and down.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTheaterBjMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterTheaterBjMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTheaterBjDistracted(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTheaterBjEnjoy(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'date_movie', 'theater_bj_sloppy');
  scene.build();
}

function enterTheaterBjDistracted(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Distracted by movie', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', (-10));
    ((st as any).date_ev = (st as any).date_ev ?? {})['cinema_bj'] = 1;
    scene.img('images/shared/sex/public/theater_bj2.mp4');
    if (((st as any).date_ev ?? 0)?.['theater_frisky'] === 'reluctant') {
      scene.text(`Whatever ${((st as any).npcdesc ?? '')} wants, you still want to see the movie too. You end up glancing sideways at the screen with one eye while you halfheartedly bob your head up and down ${((st as any).npcdesc ?? '')}'s cock.`);
    } else {
      scene.text(`Despite how it started, your attention starts getting drawn back to the movie. You end up glancing sideways at the screen with one eye while distractedly bobbing your head on ${((st as any).npcdesc ?? '')}'s cock.`);
    }
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Hey," he growls, grabbing your hair and pushing your lips down to his base. "Pay attention to what you\'re doing."');
      scene.actions([
        { label: 'Comply', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', (-10), 'sub');
    if (((st as any).sub ?? 0) > 10  ||  qspFunc(s, 'fetish', 'get_exp', 'sub') > 10) {
      scene.text('Heat blossoms between your legs as you choke on his cock, heart fluttering inside your chest from the rough and demeaning treatment, and your mouth starts to salivate almost as much as your pussy.');
    } else {
      scene.text(`With an internal grumble, you turn your attention away from the screen and towards blowing ${((st as any).npcdesc ?? '')}. You put effort into sucking, keeping your lips fastened around his shaft, going as deep as you can, and making sure to include plenty of tongue.`);
      scene.text('<i>Maybe he\'ll cum faster and I can get back to the movie,</i> you sigh.');
    }
    qspGoto(st, 'date_movie', 'theater_bj_cum_pre');
  } },
        { label: 'Fuck that\'s hot', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', (-10), 'sub');
    scene.text('Heat blossoms between your legs as you choke on his cock, heart fluttering inside your chest from the rough and demeaning treatment, and your mouth starts to salivate almost as much as your pussy.');
    scene.text('<i>Fuck this is so hot,</i> you think as your eyes roll back in your head and his cock pokes the back of your throat.');
    qspGoto(st, 'date_movie', 'theater_bj_cum_pre');
  } },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTheaterBjCumPre(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterTheaterBjEnjoy(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enjoy yourself', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', (-10));
    ((st as any).date_ev = (st as any).date_ev ?? {})['cinema_bj'] = 1;
    scene.img('images/shared/sex/public/theater_bj1.mp4');
    if (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] === 'movie_date') {
      scene.text(`${((st as any).npcdesc ?? '')} keeps watching the film while you suck his cock.`);
    } else {
      if (((st as any).date_ev ?? 0)?.['theater_frisky'] === 'reluctant') {
        scene.text(`Despite how it started, you soon find yourself getting more and more into it. The film fades into the background and your blowjob takes the forefront. The texture of ${((st as any).npcdesc ?? '')}'s foreskin, slipping up and down between your lips. The scent of him filling your nostrils. The salty taste of his cock on your tongue.`);
      } else {
        scene.text(`Both of you completely stop watching the film and turn all attention to you sucking his cock.  The texture of ${((st as any).npcdesc ?? '')}'s foreskin, slipping up and down between your lips. The scent of him filling your nostrils. The salty taste of his cock on your tongue.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTheaterBjCumPre(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterTheaterBjCumPre(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('He starts panting and writhing between your lips. His hips <i>buck</i> into your mouth. It isn\'t long before you feel him quickly tapping your head.');
    scene.text(`"${(((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}-! I'm gonna cum-!"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTheaterBjCumMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).date_ev = (s as any).date_ev ?? {})['surprise_throatpie'] = 1;
    scene.text('He starts panting and writhing between your lips. You keep it up for a few more minutes when his cock pulses and something spurts into your mouth without warning.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTheaterBjCumMouthMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterTheaterBjCumMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Let him finish in your mouth', goto: ['date_movie', 'theater_bj_cum_mouth'] },
    { label: 'Jerk him onto the floor', goto: ['date_movie', 'theater_bj_cum_floor'] },
  ]);
  scene.build();
}

function enterTheaterBjCumMouth(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/cum12.mp4');
  scene.text(`${((s as any).npcdesc ?? '')} cums in your mouth.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTheaterBjCumMouthMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterTheaterBjCumMouthMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['surprise_throatpie'] === 1) {
    scene.actions([
      { label: 'Choke in surprise', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You choke in surprise and end up hacking it up onto the floor.');
    scene.text('People stare.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Spit it on the floor', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You spit it out onto the floor.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Spit it in a napkin', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You spit it into a napkin.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Swallow it (sexy)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Swallow it (nowhere to put it)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('Not knowing what else to do with it, you swallow his load and you get back to watching the movie.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Spit it in his drink', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.img('images/locations/shared/cinema/theater_hall.jpg');
    scene.text('You spit it into his drink.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMovieInterludeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMovieInterludeEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['cinema_bj'] === 1) {
    scene.actions([
      { label: 'Skip the movie for sex?', handler: (st: GameState) => {
    scene.text('"Wanna get outta here?" you whisper, smirking as you wipe your thumb across your lips. "Go home and do… something else…?"');
    scene.text('"Fuck yeah," he whispers back and the two of you hurry out of the theater without bothering to find out the ending.');
    if ((((st as any).region ?? 0) === 'pav'  &&  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'pav_residential')  ||  (((st as any).region ?? 0) === 'city'  &&  (((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'pav_residential'  ||  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'uni_grounds'  ||  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'city_residential'  ||  ((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 'city_center'))) {
      scene.actions([
        { label: 'Go back to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'sex_ev_start', 'npc_home_start');
  } },
      ]);
    }
    if (((st as any).region ?? 0) === 'Sveta_home_region') {
      scene.actions([
        { label: 'Go back to your place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'sex_ev_start', 'pc_home_start');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Back to the movie', goto: ['date_movie', 'watch_' + String((((s as any).date_ev ?? {})['film_decide'])) + '_movie2'] },
  ]);
  scene.build();
}

function enterWatchActionMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Action film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchSuperheroMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Superhero film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchHorrorMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Horror film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchRaunchyComedyMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Raunchy film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchComedyMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Comedy film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchDramaMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Drama film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWatchRomanceMovie2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/cinema/theater_hall.jpg');
  scene.text('Romance film second half.');
  scene.actions([
    { label: 'Leave the theater', goto: ['date_movie', 'walk_out'] },
  ]);
  scene.build();
}

function enterWalkOut(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  scene.text(`You leave the theater talking with ${((s as any).npcdesc ?? '')}.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFilmTalkPc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Ask him what he thought about the movie', goto: ['date_movie', 'film_talk_boy'] },
  ]);
  scene.build();
}

function enterFilmTalkPc(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'That was nice', handler: (st: GameState) => {
    scene.text('"That was nice."');
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_opinion'] = 'nice';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFilmTalkBoy(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'That was okay', handler: (st: GameState) => {
    scene.text('"That was okay."');
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_opinion'] = 'okay';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFilmTalkBoy(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'That was boring', handler: (st: GameState) => {
    scene.text('"That was kinda boring."');
    ((st as any).date_ev = (st as any).date_ev ?? {})['pc_opinion'] = 'boring';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFilmTalkBoy(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFilmTalkBoy(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'date_ev', 'cinema_pic') || ''));
  if (((s as any).date_ev ?? 0)?.['npc_opinion'] !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'movie_date') {
      if (((s as any).date_ev ?? 0)?.['pc_opinion'] === 'nice') {
        scene.text('He agrees with you and goes on about what he liked and didn\'t like in detail.');
      } else {
        ((s as any).date_ev = (s as any).date_ev ?? {})['npc_opinion'] = 'fun';
        scene.text('He goes on about what he liked and didn\'t like in detail.');
      }
      scene.actions([
        { label: 'Listen intently', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('You listen to everything he says with interest.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Zone out', handler: (st: GameState) => {
    scene.text('You get bored listening to him drone on and end up totally zoning out.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Listen with half an ear', handler: (st: GameState) => {
    scene.text('You listen to everything he says with interest.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['npc_opinion'] = 'fun';
        scene.text('"It was fun."');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).date_ev = (s as any).date_ev ?? {})['npc_opinion'] = 'okay';
          scene.text('"It was okay."');
        } else {
          ((s as any).date_ev = (s as any).date_ev ?? {})['npc_opinion'] = 'boring';
          scene.text('"It was boring."');
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterDateEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDateEndStats(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'date_after', 'after_date');
  } },
  ]);
  scene.build();
}

function enterDateEndStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_count_cinema = (s as any).date_count_cinema ?? {})[String((s as any).npcID ?? 0)] = ((s as any).date_count_cinema[String((s as any).npcID ?? 0)] ?? 0) + (1);
  if (((s as any).date_ev ?? 0)?.['cinema_bj'] === 1) {
    ((s as any).cinema_bj = (s as any).cinema_bj ?? {})[String((s as any).npcID ?? 0)] = ((s as any).cinema_bj[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).cinema_bj_last_time = (s as any).cinema_bj_last_time ?? {})[String((s as any).npcID ?? 0)] = 1;
  } else {
    ((s as any).cinema_bj_last_time = (s as any).cinema_bj_last_time ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
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
    case 'keep_watching':
      enterKeepWatching(s, scene);
      break;
    case 'bored_watching':
      enterBoredWatching(s, scene);
      break;
    case 'reach_cock':
      enterReachCock(s, scene);
      break;
    case 'theater_bj_menu':
      enterTheaterBjMenu(s, scene);
      break;
    case 'theater_bj_distracted':
      enterTheaterBjDistracted(s, scene);
      break;
    case 'theater_bj_enjoy':
      enterTheaterBjEnjoy(s, scene);
      break;
    case 'theater_bj_cum_pre':
      enterTheaterBjCumPre(s, scene);
      break;
    case 'theater_bj_cum_menu':
      enterTheaterBjCumMenu(s, scene);
      break;
    case 'theater_bj_cum_mouth':
      enterTheaterBjCumMouth(s, scene);
      break;
    case 'theater_bj_cum_mouth_menu':
      enterTheaterBjCumMouthMenu(s, scene);
      break;
    case 'movie_interlude_end':
      enterMovieInterludeEnd(s, scene);
      break;
    case 'watch_action_movie2':
      enterWatchActionMovie2(s, scene);
      break;
    case 'watch_superhero_movie2':
      enterWatchSuperheroMovie2(s, scene);
      break;
    case 'watch_horror_movie2':
      enterWatchHorrorMovie2(s, scene);
      break;
    case 'watch_raunchy_comedy_movie2':
      enterWatchRaunchyComedyMovie2(s, scene);
      break;
    case 'watch_comedy_movie2':
      enterWatchComedyMovie2(s, scene);
      break;
    case 'watch_drama_movie2':
      enterWatchDramaMovie2(s, scene);
      break;
    case 'watch_romance_movie2':
      enterWatchRomanceMovie2(s, scene);
      break;
    case 'walk_out':
      enterWalkOut(s, scene);
      break;
    case 'film_talk_pc':
      enterFilmTalkPc(s, scene);
      break;
    case 'film_talk_boy':
      enterFilmTalkBoy(s, scene);
      break;
    case 'date_end':
      enterDateEnd(s, scene);
      break;
    case 'date_end_stats':
      enterDateEndStats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_movie: LocationDef = {
  name: 'date_movie',
  title: 'You are too broke to afford this.',
  region: 'other',
  enter: enter,
};
