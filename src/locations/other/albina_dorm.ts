import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
      scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, but I have to go to work."`);
      scene.text('She opens her wardrobe and pulls out a skimpy looking outfit that she places in a bag before slinging it over her shoulder.');
      scene.text('"Maybe I\'ll come with you," you reply with a smile and she laughs.');
      // TODO-QSP: dynamic text: "You're not getting a friends discount. Not even at the bar," she jokes as you b...
      scene.text(`"You're not getting a friends discount. Not even at the bar," she jokes as you both head out of her room. "See you around, ${((s as any).pcs_nickname ?? 0)}," she says before heading to the elevator.`);
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but I have somewhere I need to be."
      scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, but I have somewhere I need to be."`);
      scene.text('She opens her wardrobe and stuffs something inside a bag that she then slings over her shoulder before hurrying you over to the door.');
      scene.text('"What\'s the rush about?" you ask, but she avoids answering.');
      scene.text('"No time to explain, I need to go now!"');
      scene.text('She rushes towards the elevator and gives you a quick wave as the doors close, leaving you alone and confused in the hallway.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
      ]);
    }
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
    // TODO-QSP: dynamic text: Albina glances at her phone and notices the time. "Sorry <<$pcs_nickname>>, but ...
    scene.text(`Albina glances at her phone and notices the time. "Sorry ${((s as any).pcs_nickname ?? 0)}, but I need to leave before I'm late for lunch with Mama."`);
    scene.text('You nod your head. "Sure. We\'ll talk some other time."');
    scene.text('She walks you out of her room and to the elevator. You take it down to the first floor and she bids you farewell before walking out.');
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 19) {
      if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 2) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
        // TODO-QSP: dynamic text: Albina texts someone on her phone before looking at you. "Sorry <<$pcs_nickname>...
        scene.text(`Albina texts someone on her phone before looking at you. "Sorry ${((s as any).pcs_nickname ?? 0)}, but I've been invited somewhere."`);
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
        scene.text(`Albina texts someone on her phone before looking at you. "Sorry ${((s as any).pcs_nickname ?? 0)}, but I need to… be somewhere else."`);
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
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
      // TODO-QSP: dynamic text: Albina glances at her phone and notices the time. "It's getting late, <<$pcs_nic...
      scene.text(`Albina glances at her phone and notices the time. "It's getting late, ${((s as any).pcs_nickname ?? 0)}. Time for you to go."`);
      scene.text('You nod your head. "Sure. We\'ll talk some other time."');
      scene.text('She walks you to the door and closes it behind you.');
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
        { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
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
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  }
  scene.build();
}

export const albina_dorm: LocationDef = {
  name: 'albina_dorm',
  title: 'Albina\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['Albina\'s dorm room is as tastefully decorated as you would imagine. Along the left of the room sits her well furnished and comfortable looking bed that contains storage space underneath. The wall above the bed is covered with framed pictures and other decorations. Since her roommate is absent, she is using the empty bed against the other wall as a dumping ground for various items.'],
  enter: enter,
};
