import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetLeaveAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.actions([{ label: 'Continue', goto: ['city_coffee_hole', 'inner'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_commcenter', ''] }]);
    }
  } },
  ]);
  scene.build();
}

function enterNerdChat(s: GameState, scene: SceneBuilder): void {
  scene.text('Feofan, Artem, Petka, Gerasim, Zinaida and Julia have finished packing up their stuff and are getting ready to head out, giving you a chance to talk to one of them before they leave.');
  scene.text('<center><b>Chat</b></center>');
  scene.text('<center><table><tr><td colspan = 6>The nerds are gathered around the table</td></tr>');
  scene.text('<tr>');
  scene.img('images/characters/shared/headshots_main/152.jpg');
  scene.img('images/characters/shared/headshots_main/2.jpg');
  scene.img('images/characters/shared/headshots_main/6.jpg');
  scene.img('images/characters/shared/headshots_main/153.jpg');
  scene.img('images/characters/shared/headshots_main/142.jpg');
  scene.img('images/characters/shared/headshots_main/12.jpg');
  scene.text('</tr></table></center>');
  scene.build();
}

function enterArtem(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.text('Artem smiles at you as you both stand up. "Did you have fun tonight, sweetheart?"');
    scene.text('You nod and talk about the game, getting a little mushy on each other as the others try and ignore your antics.');
    scene.text('After a while, almost everyone has said their goodbyes and left, but Petka pauses, obviously expecting to go with Artem. He then notices you and says goodbye before leaving as well. Artem starts heading for the door after giving you a quick kiss.');
    if (((s as any).loc ?? 0) === 'city_coffee_hole'  &&  ((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      scene.text('You look over and see Anushka clearing away a table and wonder if Artem might want to hang around and wait for her to get off work.');
      scene.actions([
        { label: 'Wait for Anushka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).max ?? 0)(0, (23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0)));
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You stop him before he makes it to the door. "Let\'s wait for Anushka to get off work."');
    scene.text('He stops and looks over at her, then at you. "If you want. I can hang out for a bit."');
    scene.text('The two of you take a seat on one of the couches and wait for Anushka to finish up work.');
    scene.text('Once everyone else has left and it\'s just the three of you, she looks at you in confusion. "Uh… You guys know we\'re closing, right? Time to go."');
    scene.text('You nod. "We know. We were waiting until you close up. I thought we could hang out and walk you home?"');
    scene.text('She looks a little surprised before she shrugs. "Sure. Give me a few minutes."');
    scene.text('You just nod and you and Artem chat for a few more minutes until she finishes up. Once she locks the door to the shop, the three of you start walking in the direction of her apartment building.');
    scene.actions([
      { label: 'Leave together', goto: ['artem_nush_sex_uni', 'nerd_game_night_walk'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A2'] <= 20) {
      scene.text('When he sees you walking over, he gives you a disgusted look. "Get away from me, you disgusting slut!" he says as he leaves.');
    } else {
      scene.text('You try talking to Artem, but it\'s a very one-sided conversation with you doing all of the talking until he finally speaks up. "I don\'t want to sound rude, but we\'re not really friends so I\'m not sure why you\'d want to talk to me," he says quietly. "Anyway, I need to get home."');
      scene.text('He quickly gathers his stuff up and leaves.');
      scene.text('You try talking to Artem, but it\'s a very one-sided conversation with you doing all of the talking until he finally speaks up. "I don\'t want to sound rude, but I need to get home."');
      scene.text('You can tell he\'s trying to be nice, but obviously doesn\'t want to be seen talking to you in front of his fellow nerds.');
    }
    if (((s as any).grupTipe ?? 0) === 3) {
      if (((s as any).npc_rel ?? 0)?.['A2'] <= 20) {
        scene.text('Artem isn\'t really interested in talking to you, but you insist and try to keep up a conversation until he finally stops you. "Hey, I\'ve gotta go… I need to be home before it gets too late. I guess I\'ll see you later?" he says halfheartedly with an awkward laugh.');
      } else {
        // TODO-QSP: dynamic text: "Oh hey, <<$pcs_nickname>>," he says with a sheepish smile. You talk to him, mos...
        scene.text(`"Oh hey, ${((s as any).pcs_nickname ?? 0)}," he says with a sheepish smile. You talk to him, mostly asking him about the game he just played; he seems to really enjoy it and talks about it for some time.`);
        if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] === 0) {
          (s as any).artemQW['knows_dorm_room_number'] = 1;
          scene.text('You greet Artem with a smile and make a point to ask him how the game was. With a shy smile, he tells you in great detail how the game went; he seems to have really enjoyed himself. Just before he leaves, he tells you he\'s living on the second floor of the university dorm building and that you should come and visit him sometime.');
        } else {
          scene.text('You greet Artem with a smile and make a point to ask him how the game was. With a shy smile, he tells you in great detail how the game went; he seems to have really enjoyed himself.');
        }
        if (((s as any).npc_rel ?? 0)?.['A2'] <= 20) {
          scene.text('You try talking to Artem, but it\'s a very one-sided conversation with you doing all of the talking until he finally speaks up. "I don\'t want to sound rude, but we\'re not really friends so I\'m not sure why you\'d want to talk to me," he says quietly. "Anyway, I need to get home."');
          scene.text('He quickly gathers his stuff up and leaves.');
        } else {
          // TODO-QSP: dynamic text: "Oh hey, <<$pcs_nickname>>," he says with a sheepish smile. You talk to him, mos...
          scene.text(`"Oh hey, ${((s as any).pcs_nickname ?? 0)}," he says with a sheepish smile. You talk to him, mostly asking him about the game he just played; he seems to really enjoy it and talks about it for some time.`);
          if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] === 0) {
            (s as any).artemQW['knows_dorm_room_number'] = 1;
            // TODO-QSP: dynamic text: "Oh hey, <<$pcs_nickname>>," he says with a sheepish smile. You talk to him, mos...
            scene.text(`"Oh hey, ${((s as any).pcs_nickname ?? 0)}," he says with a sheepish smile. You talk to him, mostly asking him about the game he just played; he seems to really enjoy it and tells you in great detail how the game went. Just before he leaves, he tells you he's living on the second floor of the university dorm building and that you should come and visit him sometime.`);
          } else {
            // TODO-QSP: dynamic text: "Oh hey, <<$pcs_nickname>>," he says with a sheepish smile. You talk to him, mos...
            scene.text(`"Oh hey, ${((s as any).pcs_nickname ?? 0)}," he says with a sheepish smile. You talk to him, mostly asking him about the game he just played; he seems to really enjoy it and tells you in great detail how the game went.`);
          }
          qspCall(s, 'nerd_game_night_chat', 'set_leave_act');
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_leave_act':
      enterSetLeaveAct(s, scene);
      break;
    case 'nerd_chat':
      enterNerdChat(s, scene);
      break;
    case 'artem':
      enterArtem(s, scene);
      break;
    default:
      enterSetLeaveAct(s, scene);
      break;
  }
}

export const nerd_game_night_chat: LocationDef = {
  name: 'nerd_game_night_chat',
  title: 'Chat',
  region: 'other',
  enter: enter,
};
