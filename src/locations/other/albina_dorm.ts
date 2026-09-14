import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albina_dorm', 'start');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Albina\'s Dorm Room</b></center>');
  scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
  scene.text('Albina\'s dorm room is as tastefully decorated as you would imagine. Along the left of the room sits her well furnished and comfortable looking bed that contains storage space underneath. The wall above the bed is covered with framed pictures and other decorations. Since her roommate is absent, she is using the empty bed against the other wall as a dumping ground for various items.');
  scene.text('A desk next to her bed houses a large amount of makeup, as well as her laptop and study materials. A whiteboard above the desk has multiple notes and reminders scribbled on it.');
  scene.text('On the other side of the room is a wardrobe and dresser containing her sizeable collection of clothes, with just enough room left to squeeze in her TV and games console.');
  if ((((s as any).week ?? 0) === 5  &&  (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) > 30))  ||  (((s as any).week ?? 0) === 6  &&  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) > 30))) {
    if (((s as any).AlbinaQW ?? 0)?.['know_stripper'] === 1) {
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but I have to go to work."
      scene.text(`"Sorry ${((s as any).pcs_nickname || '')}, but I have to go to work."`);
      scene.text('She opens her wardrobe and pulls out a skimpy looking outfit that she places in a bag before slinging it over her shoulder.');
      scene.text('"Maybe I\'ll come with you," you reply with a smile and she laughs.');
      // TODO-QSP: dynamic text: "You're not getting a friends discount. Not even at the bar," she jokes as you b...
      scene.text(`"You're not getting a friends discount. Not even at the bar," she jokes as you both head out of her room. "See you around, ${((s as any).pcs_nickname || '')}," she says before heading to the elevator.`);
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but I have somewhere I need to be."
      scene.text(`"Sorry ${((s as any).pcs_nickname || '')}, but I have somewhere I need to be."`);
      scene.text('She opens her wardrobe and stuffs something inside a bag that she then slings over her shoulder before hurrying you over to the door.');
      scene.text('"What\'s the rush about?" you ask, but she avoids answering.');
      scene.text('"No time to explain, I need to go now!"');
      scene.text('She rushes towards the elevator and gives you a quick wave as the doors close, leaving you alone and confused in the hallway.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
      ]);
    }
  } else {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) === 13) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
      // TODO-QSP: dynamic text: Albina glances at her phone and notices the time. "Sorry <<$pcs_nickname>>, but ...
      scene.text(`Albina glances at her phone and notices the time. "Sorry ${((s as any).pcs_nickname || '')}, but I need to leave before I'm late for lunch with Mama."`);
      scene.text('You nod your head. "Sure. We\'ll talk some other time."');
      scene.text('She walks you out of her room and to the elevator. You take it down to the first floor and she bids you farewell before walking out.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 19) {
        if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
          // TODO-QSP: dynamic text: Albina texts someone on her phone before looking at you. "Sorry <<$pcs_nickname>...
          scene.text(`Albina texts someone on her phone before looking at you. "Sorry ${((s as any).pcs_nickname || '')}, but I've been invited somewhere."`);
          scene.text('"Where?" you ask.');
          scene.text('She smiles. "If you need to know, I\'m going on a booty call."');
          scene.text('"With Ermias?" you ask with a smile.');
          scene.text('"I do have other guys I hook up with you know…" she replies.');
          scene.text('"Yeah, but how many of them are black guys with massive dicks who live on the floor above you?" you grin.');
          scene.text('She playfully smacks you with a pillow. "Bitch!"');
          scene.text('You just laugh and give her a hug before heading for the door. As you leave, you hear her phone ping and see her taking a very provocative selfie with her tongue hanging out in response. It seems she\'s sexting before she heads out.');
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: Albina texts someone on her phone before looking at you. "Sorry <<$pcs_nickname>...
          scene.text(`Albina texts someone on her phone before looking at you. "Sorry ${((s as any).pcs_nickname || '')}, but I need to… be somewhere else."`);
          scene.text('You look back at her. "Where?"');
          scene.text('She smiles. "I\'m going on a booty call."');
          scene.text('"Oh? Who with?" you ask.');
          scene.text('"I\'m not giving names, but there\'s a chance that they live in this very dorm, but also that they don\'t…" she teases.');
          if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
            // TODO-QSP: dynamic text: You haven't asked her about it yet, but you wonder if she's hooking up with '+ii...
            scene.text('You haven\'t asked her about it yet, but you wonder if she\'s hooking up with \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'that black guy you saw her with\')+\' again.');
            scene.text('Deciding now isn\'t the time to ask, you just laugh and give her a hug before heading for the door. As you leave, you hear her phone ping and see her taking a very provocative selfie with her tongue hanging out in response. It seems she\'s sexting before she heads out.');
          } else {
            scene.text('You just laugh and give her a hug before heading for the door. As you leave, you hear her phone ping and see her taking a very provocative selfie with her tongue hanging out in response. It seems she\'s sexting before she heads out.');
          }
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
          ]);
        }
      } else {
        if (((s as any).hour ?? 0) >= 22) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
          // TODO-QSP: dynamic text: Albina glances at her phone and notices the time. "It's getting late, <<$pcs_nic...
          scene.text(`Albina glances at her phone and notices the time. "It's getting late, ${((s as any).pcs_nickname || '')}. Time for you to go."`);
          scene.text('You nod your head. "Sure. We\'ll talk some other time."');
          scene.text('She walks you to the door and closes it behind you.');
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
          ]);
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
            scene.actions([
              { label: 'Ask her about the black guy', goto: ['albina_chat', 'black_guy'] },
            ]);
          }
          if (((s as any).AlbinaQW ?? 0)?.['saw_club_bj'] === 1) {
            scene.actions([
              { label: 'Ask her about what you saw at the club', goto: ['albina_chat', 'club_bj'] },
            ]);
          }
          if (((s as any).artemQW ?? 0)?.['alb3some_ask'] === 1) {
            scene.actions([
              { label: 'Ask her about a threesome with Artem', goto: ['albina_chat', 'artem_threesome'] },
            ]);
          }
          if (((s as any).artemQW ?? 0)?.['alb3some_again'] === 1) {
            scene.actions([
              { label: 'Ask about another threesome with Artem', goto: ['albina_chat', 'artem_threesome1'] },
            ]);
          }
          scene.actions([
            { label: 'Chat with Albina', goto: ['albina_chat', 'chat'] },
            { label: 'Talk about video games', goto: ['albina_dorm', 'game'] },
            { label: 'Talk about clothes', goto: ['albina_dorm', 'dressing'] },
            { label: 'Leave her room', handler: (st: GameState) => {
    scene.text('You bid Albina farewell and leave her room, closing the door behind you.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'seventh_floor'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstRoomVisit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['first_room_visit'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
  scene.text('You\'re not surprised to find that Albina\'s dorm room is as tastefully decorated as you would imagine. Along the left of the room sits a lofted bed that you\'re fairly certain isn\'t university standard given that it looks nothing like the empty bed on the other side of the room.');
  scene.text('"Does your roommate not live with you?" you ask.');
  scene.text('She shrugs. "I\'ve never met her, whoever she is. I was told by one of the other girls on this floor that she lives with her boyfriend in the city and only rents this room to keep her parents off her back. It\'s pretty cool having the full room to myself if I\'m honest. Not having to share means I can do pretty much whatever the hell I want."');
  scene.text('You nod, feeling somewhat jealous at her unique living arrangement as you take in the rest of her room. The wall above her bed is covered with framed pictures and other decorations, and a desk next to her bed houses a large amount of makeup, as well as her laptop and study materials. A whiteboard above the desk has multiple notes and reminders scribbled on it.');
  scene.text('On the other side of the room is a wardrobe and dresser containing her sizeable collection of clothes, with just enough room left to squeeze in her TV and games console.');
  scene.text('Overall, the room reminds you of her old bedroom back in the mansion in Pavlovsk, only with extra flair.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something to do', goto: ['albina_dorm', 'start'] },
  ]);
  scene.build();
}

function enterDressing(s: GameState, scene: SceneBuilder): void {
  scene.text('You and Albina open her wardrobe and begin digging into her various clothes.');
  scene.text('As you rummage around, you\'re amazed by how many different clothes she owns. While not as vast as the collection she keeps at home, her wardrobe is still filled with dresses, skirts, leggings, jeans and other expensive-looking clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try on some clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/dressing.jpg');
    scene.text('The two of you end up spending half an hour trying on various different outfits.');
    scene.actions([
      { label: 'Finish', goto: ['albina_dorm', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterYoga(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['saw_dorm_yoga'] === 0) {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['saw_dorm_yoga'] = 1;
    scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
    scene.text('She stands aside to let you enter her room before closing the door behind you. When you turn around to greet her, you\'re surprised to see that she\'s completely naked.');
    scene.text('Your gaze can\'t help but glance down at her tight body, her toned muscles swollen from exertion as beads of sweat cover her skin and run down her breasts. Looking behind you, you spot a pile of damp clothes dumped in a pile on the floor.');
    scene.text('"Like what you see?" she asks teasingly while stretching, thrusting her perky breasts towards you.');
    scene.text('"Do you always do yoga naked in your room?" you ask.');
    scene.text('"Yes?" she shrugs. "I have privacy here and working out naked is far more effective."');
    scene.text('She wipes herself down with a towel and tosses it aside before dressing herself in fresh clothes.');
    scene.text('"Was there anything you were wanting to do?" she asks as she flops down on her bed and invites you to join her.');
    scene.actions([
      { label: 'Sit next to her', goto: ['albina_dorm', 'start'] },
    ]);
  } else {
    scene.img('images/pc/activities/excercises/yoga_nude.jpg');
    scene.text('She stands aside to let you enter her room before closing the door and strolling past you.');
    scene.text('"I just need to finish my last pose, then I\'ll be with you."');
    scene.text('You watch as she gets down on the floor and splits her legs while bracing herself with her hands. You can hear her exhale softly as her muscles visibly contract, then relax.');
    scene.text('"Would you believe that I\'ve had sex in this position before?" she casually blurts out. "Now <i>that</i> was a workout!"');
    scene.text('She holds the pose for a few seconds before she relaxes and pulls herself to her feet. She then wipes herself down with a towel and tosses it aside before dressing herself in fresh clothes.');
    scene.text('"Was there anything you were wanting to do?" she asks as she flops down on her bed and invites you to join her.');
    scene.actions([
      { label: 'Sit next to her', goto: ['albina_dorm', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('You look at the TV and games console sitting in the corner of the room. A row of various Tekken and Mortal Kombat games sit underneath them.');
  scene.text('"I wish I could afford a console…" you mumble.');
  scene.text('She smiles at you. "You want to play a few games?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You shake your head. "Not right now, thanks. I just noticed them is all. Maybe some other time."');
    scene.text('She shrugs. "Sure. If you ever want to play, all you have to do is ask."');
    scene.actions([
      { label: 'Do something else', goto: ['albina_dorm', 'start'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['gamebet'] === 0) {
      scene.text('You and Albina sit in front of the TV after picking one of the games. You play while chatting about various things and trash-talking each other. However, neither of you are giving your full attention to the game. Instead, you\'re just having fun together.');
      scene.actions([
        { label: 'Finish playing', goto: ['albina_dorm', 'start'] },
        { label: 'Keep playing', goto: ['albina_dorm', 'playgame'] },
      ]);
    } else {
      scene.text('You and Albina sit in front of the TV after picking one of the games. She turns towards you and gives you a grin.');
      scene.text('"Feel like putting your ass on the line and betting again?"');
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse the bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-1));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "Not this time."');
    scene.text('She\'s clearly a little disappointed, but turns her attention back to the game. "You\'re so going to lose!" she laughs.');
    scene.text('You play some games for a while, although things are a little awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself." You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'seventh_floor'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept the bet', goto: ['albina_dorm', 'game_bet'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPlaygame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
  scene.text('The two of you keep playing while trash-talking and even bumping each other to try and screw each other up. Still, neither of you are taking it seriously. Instead, you mostly just laugh at the silly mistakes you both make while only partially paying attention to the game.');
  if (((s as any).hotcat ?? 0) < 5) {
    scene.text('Albina turns to you. "So, want to lose again?"');
    scene.text('You shove her gently. "Oh please! I was winning!"');
    scene.actions([
      { label: 'Finish playing', goto: ['albina_dorm', 'start'] },
      { label: 'Keep playing', goto: ['albina_dorm', 'playgame'] },
    ]);
  } else {
    scene.text('Once you finish the game, Albina turns to you instead of starting another one. "How about we see who actually <i>is</i> the better gamer?" she asks with a confident smile.');
    scene.text('You laugh and nod. "Sure, but you\'re so going down!"');
    scene.text('She laughs in response. "You\'re that sure? How about we make it a bit more interesting then?"');
    scene.text('You arch your brow curiously. "What do you have in mind?"');
    scene.text('She grins at you and walks over to her dresser. She rummages around in it before pulling out a strapon harness with a large black dildo attached. "The winner gets to use this on the loser… However. They. Want," she says with a smirk.');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse the bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse the bet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-2));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "Uhhh… I\'m really not interested in doing that."');
    scene.text('Albina puts the strapon away, and you can tell she\'s a little disappointed as she comes back over and sits down beside you again. "You\'re so going to lose!" she laughs.');
    scene.text('You continue to play games for a while, although things are awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself."');
    scene.text('You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'seventh_floor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept the bet', goto: ['albinahome', 'game_bet'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGameBet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['gamebet'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
  scene.text('You smile. "You\'re on. You\'re so going to get fucked!"');
  scene.text('Albina laughs as she tosses the strapon and a bottle of lube on the bed before she sits back beside you and picks her controller up. "<i>Please</i>! You\'re so going to lose!"');
  scene.text('She starts the game, and you both fall silent, your focus only on winning.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Play until someone wins', handler: (st: GameState) => {
    (s as any).gameresult = (Math.floor(Math.random() * 100) + 1) + ((s as any).pcs_gaming ?? 0);
    if (((s as any).gameresult ?? 0) >= 150) {
      (s as any).albplay = 3;
    } else {
      if (((s as any).gameresult ?? 0) >= 100) {
        (s as any).albplay = 2;
      } else {
        if (((s as any).gameresult ?? 0) >= 75) {
          (s as any).albplay = 1;
        } else {
          (s as any).albplay = 0;
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    if (((s as any).albplay ?? 0) === 3) {
      scene.text('She doesn\'t even come close to beating you. Before the game can end, she lets out an exacerbated sigh and tosses her controller down in defeat, knowing she has no chance.');
      scene.text('You give her a gloating smirk as you both undress and grin as you slide the harness on.');
      scene.actions([
        { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
      ]);
    } else {
      if (((s as any).albplay ?? 0) === 2) {
        scene.text('It\'s close, but in the end, you just manage to win the game.');
        scene.text('"Yes!" you exclaim triumphantly before you both undress, grinning as you slide the harness on.');
        scene.actions([
          { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
        ]);
      } else {
        if (((s as any).albplay ?? 0) === 1) {
          scene.text('Although you try your best, Albina proves a worthy opponent and barely defeats you.');
          // TODO-QSP: dynamic text: "You're my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Alb...
          scene.text(`"You're my bitch now, ${((s as any).pcs_nickname || '')}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
          scene.actions([
            { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
          ]);
        } else {
          if ((!((s as any).albplay ?? 0))) {
            scene.text('Although you try your best, Albina simply outplays you at every turn. You stand no chance, and she easily beats you.');
            // TODO-QSP: dynamic text: "You're my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Alb...
            scene.text(`"You're my bitch now, ${((s as any).pcs_nickname || '')}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
            scene.actions([
              { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
            ]);
          }
        }
      }
    }
  } },
    { label: 'Throw the game', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    scene.text('You\'re not sure why, but part of you <i>wants</i> her to use the strap-on on you, so you purposefully lose the game.');
    // TODO-QSP: dynamic text: Albina looks at you suspiciously with a raised brow before smiling. "You're my b...
    scene.text(`Albina looks at you suspiciously with a raised brow before smiling. "You're my bitch now, ${((s as any).pcs_nickname || '')}!"`);
    scene.text('You both undress and Albina slides the harness on with a smirk on her face.');
    scene.actions([
      { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaNotHereErmiasStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) !== ((s as any).AlbinaQW ?? 0)?.['not_dorm_sms_day']) {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['not_dorm_sms_day'] = ((s as any).daystart ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinaNotHereErmias_SMS(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
      scene.text('You send her a text, but get no reply. You wonder if she\'s upstairs with Ermias right now.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 1) {
        scene.text('You send her a text, but get no reply. You wonder if she\'s upstairs with that black guy…');
      } else {
        scene.text('You get no reply when you text her and have no idea where she could be at this time.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaNotHereErmias_SMS(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_dorm" });
  if (((s as any).temp_index ?? 0) < 0) {
    qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
  } else {
    if (((s as any).contactAnon ?? 0)?.[String((s as any).temp_index ?? 0)] !== 0) {
      if (!(s as any).contactAnon) (s as any).contactAnon = {}; (s as any).contactAnon[String((s as any).temp_index ?? 0)] = 0;
    }
  }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', 'Hey, I\'m at your room, where are you?');
  qspCall(s, 'SMStext_builder', 'add_sms', 'A23', 1);
  (s as any).temp_SMSID = qspFunc(s, 'SMStext_builder', 'get_sms_id');
  qspCall(s, 'SMStext_builder', 'show_sms_from_id', ((s as any).temp_SMSID ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['SMSID'] = ((s as any).temp_SMSID ?? 0);
      // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'A23', "gs 'albina_dorm', 'albina_not_here_ermias_SMS_response'", ...
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaNotHereErmias_SMSResponse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'A23');
  qspCall(s, 'SMStext_builder', 'start');
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
    qspCall(s, 'SMStext_builder', 'receive', 'Bit busy right now');
    qspCall(s, 'SMStext_builder', 'send', 'Doing what?');
    qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/albina/selfies/sex_selfie.jpg');
    qspCall(s, 'SMStext_builder', 'receive', 'About to get my guts rearranged by a certain big black cock 8=====D');
    qspCall(s, 'SMStext_builder', 'send', 'Slut!');
    qspCall(s, 'SMStext_builder', 'send', 'Keeping the thong on for him? Kinky');
    qspCall(s, 'SMStext_builder', 'receive', 'I might let him snap it off XD');
    qspCall(s, 'SMStext_builder', 'receive', 'Gotta go! Wish my pussy luck!');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      qspCall(s, 'SMStext_builder', 'receive', qspUntranslated(s, "\"<<npc_usedname['A23']>> is a little busy right now\"", { location: "albina_dorm" }));
      qspCall(s, 'SMStext_builder', 'send', 'Who is this?');
      // TODO-QSP: gs 'SMStext_builder', 'receive', "A friend. Like I said, she is busy"
      qspCall(s, 'SMStext_builder', 'send', 'Doing what?');
      qspCall(s, 'SMStext_builder', 'receive', 'Having fun');
      qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/albina/selfies/bbc_selfie1.jpg');
      qspCall(s, 'SMStext_builder', 'receive', 'See?');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        qspCall(s, 'SMStext_builder', 'receive', qspUntranslated(s, "\"<<npc_usedname['A23']>> cannot use her phone right now\"", { location: "albina_dorm" }));
        qspCall(s, 'SMStext_builder', 'send', 'What? Who is this?');
        // TODO-QSP: gs 'SMStext_builder', 'receive', "A friend. Like I said, she cannot talk right now"
        qspCall(s, 'SMStext_builder', 'send', 'What do you mean?');
        qspCall(s, 'SMStext_builder', 'receive', 'She is using her mouth for other things right now');
        qspCall(s, 'SMStext_builder', 'receive_img', 'images/characters/pavlovsk/school/girl/albina/selfies/bbc_selfie2.jpg');
      } else {
        qspCall(s, 'SMStext_builder', 'receive', qspUntranslated(s, "\"<<npc_usedname['A23']>> cannot come to the phone right now\"", { location: "albina_dorm" }));
        qspCall(s, 'SMStext_builder', 'send', 'What? Who is this?');
        // TODO-QSP: gs 'SMStext_builder', 'receive', "A friend. Like I said, she is busy right now"
        qspCall(s, 'SMStext_builder', 'send', 'Doing what?');
        qspCall(s, 'SMStext_builder', 'receive_video', 'images/characters/pavlovsk/school/girl/albina/selfies/bbc_selfie3.mp4');
        qspCall(s, 'SMStext_builder', 'receive', 'She is busy showing me how tight her little white pussy is');
      }
    }
  }
  if (qspFunc(s, 'SMStext_builder', 'check_if_sms_exists_from_id', ((s as any).AlbinaQW ?? 0)?.['SMSID'])) {
    // TODO-QSP: gs 'SMStext_builder', 'update_sms_from_id', AlbinaQW['SMSID'], 'set_unread'
  } else {
    qspCall(s, 'SMStext_builder', 'add_sms', 'A23');
  }
  qspCall(s, 'SMStext_builder', 'end');
  qspCall(s, 'array', 'remove_element', 'AlbinaQW', 'SMSID');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'first_room_visit':
      enterFirstRoomVisit(s, scene);
      break;
    case 'dressing':
      enterDressing(s, scene);
      break;
    case 'yoga':
      enterYoga(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    case 'playgame':
      enterPlaygame(s, scene);
      break;
    case 'game_bet':
      enterGameBet(s, scene);
      break;
    case 'albina_not_here_ermias_start':
      enterAlbinaNotHereErmiasStart(s, scene);
      break;
    case 'albina_not_here_ermias_SMS':
      enterAlbinaNotHereErmias_SMS(s, scene);
      break;
    case 'albina_not_here_ermias_SMS_response':
      enterAlbinaNotHereErmias_SMSResponse(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_dorm: LocationDef = {
  name: 'albina_dorm',
  title: 'Albina\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
