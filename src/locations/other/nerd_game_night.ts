import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === ((s as any).week ?? 0)) {
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['game_day'] = ((s as any).daystart ?? 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetEndActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nerd_game_night_chat', 'set_leave_act');
  scene.actions([
{ label: 'Chat with someone', goto: ['nerd_game_night_chat', 'nerd_chat'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'themes', 'indoors');
  if (((s as any).nerd_game ?? 0)?.['stage'] === 0) {
    qspGoto(s, 'nerd_game_night', 'game_night1');
  } else {
    if (((s as any).nerd_game ?? 0)?.['stage'] === 1) {
      qspGoto(s, 'nerd_game_night', 'game_night2');
    } else {
      if (((s as any).nerd_game ?? 0)?.['stage'] === 2) {
        qspGoto(s, 'nerd_game_night', 'game_night3');
      } else {
        if (((s as any).nerd_game ?? 0)?.['stage'] === 3) {
          qspGoto(s, 'nerd_game_night', 'game_night4');
        } else {
          if (((s as any).nerd_game ?? 0)?.['stage'] === 4) {
            qspGoto(s, 'nerd_game_night', 'game_night5');
          } else {
            if (((s as any).nerd_game ?? 0)?.['stage'] === 5) {
              qspGoto(s, 'nerd_game_night', 'game_night6');
            } else {
              if (((s as any).nerd_game ?? 0)?.['stage'] === 6) {
                qspGoto(s, 'nerd_game_night', 'game_night7');
              } else {
                if (((s as any).nerd_game ?? 0)?.['stage'] === 7) {
                  qspGoto(s, 'nerd_game_night', 'game_night8');
                } else {
                  if (((s as any).nerd_game ?? 0)?.['stage'] === 8) {
                    qspGoto(s, 'nerd_game_night', 'game_night9');
                  } else {
                    if (((s as any).nerd_game ?? 0)?.['stage'] === 9) {
                      qspGoto(s, 'nerd_game_night', 'game_night10');
                    } else {
                      if (((s as any).nerd_game ?? 0)?.['stage'] === 10) {
                        qspGoto(s, 'nerd_game_night', 'game_night11');
                      } else {
                        if (((s as any).nerd_game ?? 0)?.['stage'] === 11) {
                          qspGoto(s, 'nerd_game_night', 'game_night12');
                        } else {
                          qspGoto(s, 'nerd_game_night', 'board_games');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInvite(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'exit') {
    scene.actions([
      { label: 'Continue down the hall', handler: (st: GameState) => {
    if (((st as any).temp_loc ?? 0) === 'morning') {
      // TODO-QSP: killvar 'temp_loc'
      qspGoto(st, 'gschool_lessons', 'morning');
    } else {
      if (((st as any).temp_loc ?? 0) === 'lunch') {
        // TODO-QSP: killvar 'temp_loc'
        qspGoto(st, 'gschool_events', 'leave_break_events2');
      } else {
        // TODO-QSP: killvar 'temp_loc'
        qspGoto(st, 'gschool_lessons', 'short_break');
      }
    }
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).temp_loc = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['lot'] = qspFunc(s, 'random', 'pick_from', 12, 13, 14, 23, 24, 34);
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    // TODO-QSP: dynamic text: You stop by your locker and Feofan walks over to you and smiles. "Hey <<$pcs_nic...
    scene.text(`You stop by your locker and Feofan walks over to you and smiles. "Hey ${((s as any).pcs_nickname ?? '')}, we do a weekly game night where we mostly play Dungeons and Dragons, but we sometimes play some board games. I was talking to the others and we were wondering if you'd like to join us on ${qspUntranslated(s, "weekName[val(mid(temp,1,1))]", { location: "nerd_game_night" })} or ${qspUntranslated(s, "weekName[val(mid(temp,2,1))]", { location: "nerd_game_night" })} if you're free then?"`);
    scene.actions([
      { label: 'Not interested <br> [+$func(\'wrap\', \'neg\', \'This will block th...]', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['invite_day'] = ((st as any).daystart ?? 0) + 7305;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You shake your head. "Sorry, but I\'m not interested in stuff like that. Thanks for the invite, though."');
    scene.text('He looks disappointed. "Oh… Okay. I get it. Well, I guess we\'ll see you around then…" he mumbles before walking away.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I have to study', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    // TODO-QSP: dynamic text: You shake your head. "Sorry, but I can''t this week. My <<$npc_nickname[''A29'']...
    scene.text(`You shake your head. "Sorry, but I can't this week. My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is on my ass about my grades and I'm going to have to put in extra studying this week."`);
    scene.text('He looks disappointed. "Parents, am I right? Uh yeah… Anyway, I\'ll let the others know. Maybe you can come next week? Talk to you later."');
    scene.text('He walks away before you can reply.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I\'m busy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You shake your head. "Sorry, but I can\'t this week. I\'ve already made plans for those days."');
    scene.text('He looks disappointed. "Oh… Okay. I guess you\'re turning into a popular girl, huh?" he says with a grin.');
    scene.text('You shake your head. "Very funny."');
    scene.text('He laughs a little. "Anyway, I\'ll let the others know. Maybe you can come next week? Talk to you later."');
    scene.text('He walks away before you can reply.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '', labelFn: (s: GameState) => String(qspUntranslated(s, "weekName[val(mid(nerd_game['lot'], 1, 1))]", { location: "nerd_game_night" }) ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['game_day'] = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + parseFloat((String(((st as any).nerd_game ?? 0)?.['lot']).slice((1)-1, ((1)-1)+(1))));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    // TODO-QSP: dynamic text: "Sure, I can make it on <<$weekName[val(mid(nerd_game[''lot''], 1, 1))]>>," you ...
    scene.text(`"Sure, I can make it on ${qspUntranslated(s, "weekName[val(mid(nerd_game['lot'], 1, 1))]", { location: "nerd_game_night" })}," you reply.`);
    // TODO-QSP: dynamic text: 'He looks excited. "Great! I''ll see you on <<$weekName[val(mid(nerd_game[''lot'...
    scene.text(`He looks excited. "Great! I'll see you on ${qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" })} at 20:00 in the library then! Be ready to get your nerd on, because we're going to rock it so hard!" he says with a cheesy wink and double finger point before walking away.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '', labelFn: (s: GameState) => String(qspUntranslated(s, "weekName[val(mid(nerd_game['lot'], 2, 1))]", { location: "nerd_game_night" }) ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['game_day'] = ((st as any).daystart ?? 0) - ((st as any).week ?? 0) + parseFloat((String(((st as any).nerd_game ?? 0)?.['lot']).slice((2)-1, ((2)-1)+(1))));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    // TODO-QSP: dynamic text: "Sure, I can make it on <<$weekName[val(mid(nerd_game[''lot''], 2, 1))]>>," you ...
    scene.text(`"Sure, I can make it on ${qspUntranslated(s, "weekName[val(mid(nerd_game['lot'], 2, 1))]", { location: "nerd_game_night" })}," you reply.`);
    // TODO-QSP: dynamic text: 'He looks excited. "Great! I''ll see you on <<$weekName[val(mid(nerd_game[''lot'...
    scene.text(`He looks excited. "Great! I'll see you on ${qspUntranslated(s, "weekName[val(mid(nerd_game['lot'], 2, 1))]", { location: "nerd_game_night" })} at 20:00 in the library then! Be ready to get your nerd on, because we're going to rock it so hard!" he says with a cheesy wink and double finger point before walking away.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGameNight1(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  if (((s as any).grupTipe ?? 0)?.['joined_nerds'] === 1) {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
    scene.text('Upon entering the room, everyone freezes and looks your way. You can feel the anxious gazes as you greet the group sitting around the table that has a large map spread across it, along with small figures, various papers and books, and lots and lots of dice.');
    // TODO-QSP: dynamic text: Just as you''re about to ask what they''re doing, Feofan speaks up. "Welcome to ...
    scene.text(`Just as you're about to ask what they're doing, Feofan speaks up. "Welcome to our little game night, ${((s as any).pcs_nickname ?? '')}! Please take a seat and I'll explain the rules to you."`);
    scene.text('The empty seat is next to Julia, who smiles warmly at you and scoots a little closer to help explain things to you.');
    scene.text('As you take your seat, Feofan tells you an incredible background story as he builds up the game world so you can be fully immersed. You\'re handed a character sheet and a pencil as he continues explaining what the game is all about.');
    scene.text('You hear a few sighs as Feofan passionately continues. "Why does it always end up like this? Let\'s get on with the game already!" Petka exclaims.');
    qspCall(s, 'nerd_game_night', 'group_rel_change', 'nerds', 1);
  } else {
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('Upon entering the Coffee Hole, you see that the nerds have claimed a set of couches sitting around a large coffee table in the back corner. As you make your way over to them, you notice Anushka working the counter. You can feel the anxious gazes as you greet the group sitting around the table, which has a large map spread across it, along with small figures, various papers and books, and lots and lots of dice.');
      // TODO-QSP: dynamic text: Just as you''re about to ask what they''re doing, Feofan speaks up. "Welcome to ...
      scene.text(`Just as you're about to ask what they're doing, Feofan speaks up. "Welcome to our little game night, ${((s as any).pcs_nickname ?? '')}! Please take a seat and I'll explain the rules to you."`);
      scene.text('The empty seat is next to Julia, who she smiles warmly at you and scoots a little closer to help explain things to you.');
      scene.text('As you take your seat, Feofan tells you an incredible background story as he builds up the game world so you can be fully immersed. You\'re handed a character sheet and a pencil as he continues explaining what the game is all about.');
      scene.text('You hear a few sighs as Feofan passionately continues. "Why does it always end up like this? Let\'s get on with the game already!" Petka exclaims.');
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
      scene.text('Upon entering the room, everyone freezes and looks your way before you\'re given warm smiles and waved over. Feofan is sitting at one end of the table with some type of screen partially obscuring him while Artem, Petka and Gerasim sit on one side of the table and Julia and Zinaida sit on the opposite side. A large map is spread across the table, along with small figures, various papers and books, and lots and lots of dice.');
      // TODO-QSP: dynamic text: Before you can ask anything Feofan speaks up, "Welcome to our little game night,...
      scene.text(`Before you can ask anything Feofan speaks up, "Welcome to our little game night, ${((s as any).pcs_nickname ?? '')}! Please take a seat and I'll explain the rules to you."`);
      scene.text('The empty seat is next to Julia, who smiles warmly at you and scoots a little closer to help explain things to you.');
      scene.text('As you take your seat, Feofan tells you an incredible background story as he builds up the game world so you can be fully immersed. You\'re handed a character sheet and a pencil as he continues explaining what the game is all about.');
      scene.text('You hear a few sighs as Feofan passionately continues. "Why does it always end up like this? Let\'s get on with the game already!" Petka exclaims.');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Introduction', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/character.jpg');
    scene.text('Feofan glances at Petka and sighs. "Anyway, I should tell you a little something about your fellow adventurers. Artem is playing a tall Dwarven male Fighter, well tall for a dwarf anyway. Gerasim is playing a surprisingly attractive half-orc male Ranger, Julia is playing a beautiful Human female Cleric of the Lady of Morning, Zinaida is playing a heavily scarred Human male Fighter and Petka <i>was</i> playing a Halfling male Rogue, but he got killed last game session and wants to try something different, so now he\'s a beautiful Half Elven female Wizard."');
    scene.text('You nod and continue listening as he explains what each of them can do. It sounds like they\'re mostly able to fight, heal, cast damaging spells or buff up the other characters, which makes sense from what little you know about the game.');
    scene.text('"So what the group could really use is a Rogue. I made one up for you to help you get started. She\'s a human Rogue who\'s quick and agile, but also beautiful and charismatic. This will help the group when dealing with social situations. Don\'t worry, she can fight too! Her ability is to sneak up to or around enemies and deliver devastating back stabs. So what do you think?"');
    scene.text('The whole group looks at you, waiting for your reply.');
    scene.actions([
      { label: 'Sounds like fun', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A153', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rogue.jpg');
    scene.text('You take the folder he has made. You look inside and find a character sheet with a small background for your character, along with a full color printed image of what you can only guess is what your character is supposed to look like. You can\'t help but smile at the amount of skin showing and how pretty the girl is. "Sure, sounds like a lot of fun. I can\'t wait, so let\'s get going!"');
    scene.actions([
      { label: 'Game on', goto: ['nerd_game_night', 'game_on'] },
    ]);
  } },
      { label: 'If that\'s what the group needs', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rogue.jpg');
    scene.text('You take the folder he has made. You look inside and find a character sheet with a small background for your character, along with a full color printed image of what you can only guess is what your character is supposed to look like. You cringe at the revealing clothes your character is wearing and wonder if you could get less revealing armor at some point. "Okay, if that\'s what the group needs. I\'m just learning and want to help as much as I can."');
    scene.text('You get some smiles of encouragement from the others. "Don\'t worry, you\'ll do great! It\'s really not that hard to learn, so let\'s get started!" Feofan says.');
    scene.actions([
      { label: 'Game on', goto: ['nerd_game_night', 'game_on'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGameOn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Feofan clears his throat. "Now then, the last time we stopped at the turn when Zinaida was supposed to make her move."');
  scene.text('Artem sighs deeply. "Do we need to have this discussion again? It\'s obvious that we should attack the dragon. She is our tank after all."');
  scene.text('Gerasim looks a little irritated. "We should buff the warrior first before taking on the dragon. It\'s a more sound strategy."');
  scene.text('Artem sighs again. "And if the dragon hears Julia casting, it will attack us first! We should attack now while we still have the element of surprise."');
  scene.text('The whole room erupts in a frenzy with everyone talking over each other to get their point across. Feofan tries to calm everyone down, but it\'s futile. After a while, they decide that they should vote on what to do next.');
  // TODO-QSP: dynamic text: "How about we let <<$pcs_nickname>> decide? She''s new and should be objective,"...
  scene.text(`"How about we let ${((s as any).pcs_nickname ?? '')} decide? She's new and should be objective," Artem suggests and the others nod approvingly.`);
  scene.text('You first ask what they mean by buffing and learn that it will make Zinaida\'s character tougher and able to take more damage.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Side with Artem', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A153', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You think about it for a few seconds before answering. "I think Artem is right. The element of surprise shouldn\'t be wasted."');
    scene.text('"See? I told you I was making sense!" Artem proudly proclaims. You notice Gerasim frowning and Zinaida doesn\'t seem too happy either, but Petka seems excited by your decision.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night', 'keep_playing_on1'] },
    ]);
  } },
    { label: 'Side with Gerasim', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A153', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big153.jpg');
    scene.text('You think about it for a few seconds before answering. "I think it\'s more important to make Zindaida\'s character as tough as we can, so she can survive the dragon\'s attack."');
    scene.text('"See? I told you I was making sense!" Gerasim proudly proclaims. Zinaida also seems to like your decision, as does Julia, while Artem shakes his head slightly and Petka sighs.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night', 'keep_playing_on1'] },
    ]);
  } },
    { label: 'Side with no one', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A153', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A2', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A153', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
    scene.text('You excuse yourself and explain that it wouldn\'t be fair for you to make this kind of decision since you\'re new and don\'t even know what they\'re talking about. "I mean… It\'s a dragon, right? Should we even be attacking it? Can we win?"');
    scene.text('They assure you that it\'s something the group can beat, but only if only they take it by surprise or are ready with buffs, which launches yet another heated debate. They go back and forth until Feofan demands they decide and they take a vote.');
    scene.text('Gerasim, Julia and Zinaida vote to buff up first while Artem and Petka vote to attack now. The two boys sigh and mutter about how it\'s going to be harder now as Julia\'s character starts buffing up Zinaida\'s character.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night', 'keep_playing_on1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKeepPlayingOn1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('The battle with the dragon begins and Feofan weaves a scary sounding battle as everyone takes turns taking an action. At one point, most of the group is down, with only Julia and Petka\'s characters still up. Julia is trying to heal Zinaida and Artem\'s characters, while Petka\'s sorceress is trying to cast a powerful spell.');
  scene.text('It looks like the dragon is about to finish them off, but you\'ve managed to sneak around behind it as it focuses on the rest of the party. At this point, you decide to try out the back stab ability Feofan told you about. "I want to back stab the dragon."');
  scene.text('Feofan looks surprised at first. "You have to be behi… Oh." He looks at the figures on the map and notices your rogue directly behind the dragon.');
  scene.text('"Yes!" Artem exclaims and several of the others acknowledge what you\'ve done, which makes you feel good about yourself, even if it is over a game.');
  // TODO-QSP: dynamic text: Feofan nods with a smile. "Okay then. Roll your attack, <<$pcs_nickname>>."
  scene.text(`Feofan nods with a smile. "Okay then. Roll your attack, ${((s as any).pcs_nickname ?? '')}."`);
  scene.actions([
{ label: 'Roll the dice', handler: (st: GameState) => {
    (st as any).temp = (Math.floor(Math.random() * 20) + 1);
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    if (((st as any).temp ?? 0) === 20) {
      qspCall(st, 'mood', 'raise', 'small');
      scene.text('You roll the dice and the 20 comes up. You hear a slight gasp go around the table, but aren\'t sure what happened as everyone but Feofan smiles. "You got a critical strike," he informs you. You think that\'s a good thing as you roll for damage.');
      // TODO-QSP: dynamic text: Feofan checks his notes, then double checks them. "As the dragon rears back to l...
      scene.text(`Feofan checks his notes, then double checks them. "As the dragon rears back to let loose it's fiery breath, ${((st as any).pcs_nickname ?? '')}'s rogue spots a weak point between two of it's scales. Lunging forward, she buries her sword into the dragon. It roars in pain and thrashes about tossing you aside, but you manage to land and roll safely, taking no damage. The dragon falls over and moves no more…"`);
      scene.text('The rest of the group cheers and congratulates you on killing the dragon, and you can\'t help but feel good about it.');
    } else {
      if (((st as any).temp ?? 0) >= 11) {
        qspCall(st, 'mood', 'raise', 'tiny');
        scene.text('You roll the dice and Feofan checks the numbers. "You managed to land a backstab on the dragon. Roll your damage." You think that\'s a good thing as you roll your dice damage.');
        // TODO-QSP: dynamic text: Feofan checks his notes. "As the dragon rears back to let lose it''s fiery breat...
        scene.text(`Feofan checks his notes. "As the dragon rears back to let lose it's fiery breath, ${((st as any).pcs_nickname ?? '')}'s rogue lunges forward, scoring a back stab on the dragon. It roars in pain and thrashes about tossing you aside, but you manage to land and roll safely, taking no damage. The dragon turns on you and tries to bite you…"`);
        scene.text('More dice are rolled and you manage to dodge the dragon. Your distraction allows Julia to heal both Zinaida and Artem and buys enough time for Petka to finish casting his sorceress\'s most powerful spell, which causes a great deal of damage. With combined attacks from the rest of the group, the dragon is finally defeated. The group congratulates you on landing a powerful hit and distracting the dragon, and you can\'t help but feel good about it.');
      } else {
        qspCall(st, 'mood', 'raise', 'tiny');
        scene.text('You roll the dice and Feofan checks the numbers. "Your weapon hits the dragon\'s scales, but fails to pierce them."');
        // TODO-QSP: dynamic text: Feofan checks his notes. "As the dragon rears back to let lose it''s fiery breat...
        scene.text(`Feofan checks his notes. "As the dragon rears back to let lose it's fiery breath, ${((st as any).pcs_nickname ?? '')}'s rogue lunges forward, but fails to damage the dragon. It then turns on you and tries to bite you…"`);
        scene.text('More dice are rolled and you manage to dodge the dragon. Your distraction allows Julia to heal both Zinaida and Artem and buys enough time for Petka to finish casting his sorceress\'s most powerful spell, which causes a great deal of damage. With combined attacks from the rest of the group, the dragon is finally defeated. The group congratulates you on distracting the dragon, and you can\'t help but feel good about it.');
      }
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish the game night', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('The dragon defeated, wounds are tended to and the lair is searched. Being the rogue, you do most of the searching and exploring of the large lair while the rest heal and recover from the fight. After a while, you get into the game as some of the rules become clearer and you\'re able to enjoy yourself.');
      scene.text('"Have fun killing the dragon, nerds?" The voice causes everyone to stop and look up to see Anushka watching with a teasing smile on her face.');
      scene.text('Feofan finally responds. "How did you…" he asks, a little confused.');
      scene.text('Anushka smiles. "How did I know you guys just pretended to kill a dragon? Because you\'re so fucking loud that I can hear you over at the counter! <i>Everyone</i> can hear you!"');
      scene.text('She indicates the rest of the coffee shop and a few of them start blushing.');
      scene.actions([
        { label: 'Look around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Feofan just grins at her. "Sorry! We can get carried away sometimes since it\'s really fun."');
    scene.text('She just scoffs. "I\'m sure… Anyway, you guys know the rules. You need to order something," she says while indicating to the clock on the wall. The others mutter and just about everyone orders something.');
    scene.text('As Anushka leaves with the order, Artem looks at you. "We have to order something every few hours. That\'s the deal we made with the owner to let us play here," he says with a shrug.');
    scene.text('Anushka returns a few minutes later and gives everyone their order. "It sounded like you kept that dragon focused on you so the rest could kill it," she tells Gerasim while handing him his order.');
    scene.text('He looks up at her and smiles. "It was a group effort."');
    scene.text('She just shakes her head slightly and continues serving. "Your Elven Ladyship," she says teasingly to Petka loud enough for everyone to hear, which causes him to blush. "Have fun, nerds. Just remember to clean up after yourselves."');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. The rest continue with their special banter and the discussions are quite intensive, forcing you to take small breaks.');
    scene.text('Feofan tries his best to be a good game leader, but sometimes even he can\'t keep his head cool and gets carried away as he passionately discusses the game world.');
    scene.text('The time quickly flies by before Feofan interrupts and stops the game as it\'s getting late and he has to get back to the dorm.');
    scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns during one of the encounters.');
    // TODO-QSP: dynamic text: As you''re about to leave, Feofan speaks up. "Don''t worry, we''ll continue this...
    scene.text(`As you're about to leave, Feofan speaks up. "Don't worry, we'll continue this story event next time." He then turns to you. "It was fun having you around, ${((st as any).pcs_nickname ?? '')}. I hope you had fun and will join us again next time."`);
    scene.text('The group then gather up their books and walk out of the shop. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('The dragon defeated, wounds are tended to and the lair is searched. Being the rogue, you do most of the searching and exploring of the large lair while the rest heal and recover from the fight. After a while, you get into the game as some of the rules become clearer and you\'re able to enjoy yourself. They continue with the special banter and the discussions are quite intensive, forcing you to take small breaks.');
      scene.text('Feofan tries his best to be a good game leader, but sometimes even he can\'t keep his head cool and gets carried away as he passionately discusses the game world.');
      scene.text('The time quickly flies by before Feofan interrupts and stops the game as it\'s getting late and he has to get home.');
      scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns during one of the encounters.');
      // TODO-QSP: dynamic text: As you''re about to leave, Feofan speaks up. "Don''t worry, we''ll continue this...
      scene.text(`As you're about to leave, Feofan speaks up. "Don't worry, we'll continue this story event next time." He then turns to you. "It was fun having you around, ${((st as any).pcs_nickname ?? '')}. I hope you had fun and will join us again next time."`);
      scene.text('The group then gather up their books and head out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGameNight2(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('You find the rest of your friends already present as you arrive. "Alright, settle down!" Feofan yells out as the group takes a seat around the game table. He has prepared the game table and the figurines are neatly placed over the board.');
  scene.text('"Does everyone remember where we left off the last time we played?" he inquires while looking around the table. Most of you nod confidently while some take a more careful approach. "We slayed the dragon, right?" Artem asks while looking around the room.');
  scene.text('"That\'s right!" Feofan replies as he starts handing out the character sheets. "Now then, you\'ve beaten the dragon and explored its lair, finding its gold and some trinkets. They say that the gold is cursed and your party might potentially suffer dire consequences…" Feofan shivers in his voice as he speaks.');
  scene.text('"Oh we\'re definitely taking the treasure!" Petka exclaims. "We need it to buy new gear in the village and I feel like it\'s worth the risk." Some of the group nod in agreement while others frown.');
  scene.text('"I don\'t think that\'s a smart idea," Julia speaks up. "Let\'s just take the trinkets and see what we can do with them. We\'ll probably be able to sell these for quite the profit…"');
  scene.text('Artem lets out a deep sigh. "Always going with these safe choices! Why not live it up a little?! The game is getting stale and I really want to feel overpowered for once!"');
  scene.text('The two of them bicker back and forth and get nowhere, causing Feofan step in to break it up. "You\'ll have to decide on what to do…"');
  scene.text('You all decide to do a vote and everyone starts voting on how to proceed. Gerasim can\'t make up his mind and decides that his character wouldn\'t vote. It\'s neck and neck and before you know it, you have the deciding vote. Everyone watches you, expecting a decisive vote.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Grab all the loot', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A12', 'dislike');
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['tookgold'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/treasure.jpg');
    scene.text('"Artem\'s right, let\'s take the gold. We can get a lot more gear and take on more powerful challenges. I vote that we grab all the loot and head towards the village." You\'re quite confident in your decision and the others abide by it.');
    scene.text('"That\'s settled then," Feofan proclaims. "You grab all the loot and head out of the cave, straight toward the village without a care as to what might await you…"');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night', 'keep_playing_on2'] },
    ]);
  } },
    { label: 'Just grab the trinkets', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/treasure.jpg');
    scene.text('"No, Julia is right. We shouldn\'t take the risk. If the gold really is cursed, then that sounds really bad." You look towards Julia and she nods in agreement.');
    scene.text('"This sucks so hard…" Artem mutters in disappointment and Petka nods in agreement.');
    scene.text('"The vote has been cast," Feofan proclaims. "You grab the trinkets and before you know it, you\'re leaving the cave. You turn and notice the gold still glimmering, ready to be grabbed…"');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night', 'keep_playing_on2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKeepPlayingOn2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/camp.jpg');
  scene.text('You continue walking towards the nearby village as Feofan vividly describes the areas that you pass through. You travel for several days, only stopping to eat and make camp at night. Feofan makes it sound both beautiful and grueling before he announces the group is less than a day from town, but night will fall before you can get there. He describes a clearing at the edge of a forest with a river of fresh water just beyond the trees.');
  scene.text('Gerasim makes a few rolls for survival. "I think it\'s best we stop for the night and camp, instead of pushing through the night."');
  scene.text('The group starts discussing if they should make a stop or try and press on through the night, eventually deciding that it would be safer to listen to the Ranger and stop for the night. As everyone starts setting up camp, you ask Feofan a question. "You said there was a river nearby, yes?"');
  scene.text('He nods. "Yes, you set up camp just at the edge of the trees. The river is just a short walk beyond them."');
  scene.text('Everyone is silent, not understanding why you\'re asking. "What? None of us have bathed in days! That\'s just gross! I thought we were role-playing; imagine what our characters smell like!"');
  scene.text('Everyone quickly agrees that it makes sense and that they never really thought about it until you brought it up. They also explain how they normally don\'t worry about stuff like that.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay in camp', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/camp.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('You decide that maybe that is a bit too much realism and decide to stay in camp, feeling a little embarrassed for suggesting it. The party soon has the camp set up and eats dinner.');
      scene.text('"If I was playing, I would have totally gone down to the river to bathe." The voice causes everyone to stop and look up to see Anushka watching with a teasing smile on her face.');
      scene.text('Feofan grins at her. "Well, if you ever want to join us, it\'s really fun."');
      scene.text('Several of the others look uncomfortable at Feofan offering to let Anushka play with them.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just giggles slightly. "I\'m sure, but I don\'t have the time. Anyway, you guys know the rules. You need to order something," she says while indicating the clock on the wall. Most of the others seem relieved when Anushka turns Feofan down and just about everyone orders something.');
    scene.text('Anushka returns a few minutes later and gives everyone their order. "It sounds like your character is some kind of wilderness master," she tells Gerasim when handing him his order.');
    scene.text('He looks up at her and smiles. "He\'s like Aragorn from Lord of the Rings."');
    scene.text('She nods slightly, apparently knowing who that is. "Oh, he is a hottie…" Gerasim blushes at her comment, but you can\'t help but feel there\'s more to it than it seems. Is she flirting with him?');
    scene.text('"So do you play a girl because you\'re curious what it\'s like to be fucked like one?" she asks Petka while serving him.');
    scene.text('He blushes bright red and stammers. "What?! No! I just… I mean…" He\'s totally flustered by her question and you notice Zinaida smiling slightly at the interaction.');
    scene.text('Petka\'s reaction makes Anushka grin, having gotten the reaction she was hoping for. "Well, have fun nerds. Just remember to clean up after yourselves."');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. The group banter back and forth as their characters talk about what they plan to spend their share of the treasure on before deciding the order of who is on watch during the night. After that, everyone takes their turn on watch as Petka receives a ribbing about what Anushka said about his choice of character.');
    scene.text('"We\'re out of time," Feofan announces and you and the group let out a sigh. "Don\'t worry, there are lots of adventures left to explore. We\'ll pick it up next time." The group then gather up their books and walk out of the shop. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You decide that maybe that is a bit too much realism and decide to stay in camp, feeling a little embarrassed for suggesting it. The party soon has the camp set up and eats dinner. The group banter back and forth as their characters talking about what they plan to spend their share of the treasure on, before deciding the order of who is on watch during the night. After that, everyone takes their turn on watch until morning.');
      scene.text('"We\'re out of time," Feofan announces and you and the group let out a sigh. "Don\'t worry, there are lots of adventures left to explore. We\'ll pick it up next time."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Go to the river and bathe', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/bathing.jpg');
    scene.text('You smile at their reactions. "Well, if we\'re supposed to pretend to be these characters, then I would desperately want to bathe and clean up if I was her. Okay, my character is going to go down to the river and take a bath." Feofan describes the beautiful river running through the forest and the sounds of the animals. You pick a nice spot, fairly close to the camp but far enough away to not be seen, and have your character strip naked and get ready to bathe in the river. You notice Petka pass Feofan a note, who reads it with a smile and asks you to roll some dice.');
    scene.text('Feofan pauses dramatically after your dice roll. "Just after you get undressed, you\'re about to wade into the river when you suddenly hear the snapping of a twig, like someone, or <i>something</i> is behind you. What do you do?"');
    scene.actions([
      { label: 'Grab your sword', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/bathing_confront.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('"I grab my sword and tell whoever is there to show themselves now," you reply.');
      scene.text('Petka sighs. "Sorry, I just wanted to check on you. I didn\'t mean to scare you."');
      // TODO-QSP: dynamic text: Feofan then describes how your character is standing naked in front of Petka''s ...
      scene.text(`Feofan then describes how your character is standing naked in front of Petka's with only her sword in hand. "${((st as any).pcs_nickname ?? '')}… Naked?" Petka blurts before blushing when he realizes what he said. "I-I meant her character!"`);
      scene.text('"What a perv. Can\'t you just stare at <i>real</i> naked girls online?" The voice causes everyone to stop and look up to see Anushka watching with a teasing smile on her face.');
      scene.text('Petka blushes bright red, looking like a little boy caught watching porn. "I… I…" he stammers, not knowing what to say.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just giggles and shakes her head. "Whatever, perv." She then addresses the rest of you. "Anyway, you guys know the rules. You need to order something," she says while indicating to the clock on the wall. There\'s a bit of muttering as most don\'t seem to like that she keeps interrupting them, but they still order something.');
    scene.text('Anushka returns a few minutes later and gives everyone their order. "Sounds like the half elf is feeling randy," she says to Gerasim while indicating Petka. "Bet you could bang her, if you tried."');
    scene.text('He looks up at her and blushes. "Maybe. I never really thought about it."');
    scene.text('She grins at his reply. "I bet she would love a big orc dick." She\'s talking to Gerasim, but looking at Petka. "Isn\'t that right?" Petka just blushes even more, and the others are starting to look a bit uncomfortable with all the sex talk.');
    scene.text('Feofan cuts in before it goes further. "Okay okay, if they want to pursue a relationship, they can. I wouldn\'t mind some more in depth role playing, but we\'re not going <i>that</i> far." This seems to calm everyone down as Anushka rolls her eyes and smirks.');
    scene.text('"See, this is why I could never play a game like this. You guys never want to role play the fun stuff." She walks away without waiting for a reply, but you notice Feofan watching her, seemingly thinking about what she just said.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. The party beds down for the night as you and the others keep teasing Petka.');
    // TODO-QSP: dynamic text: "We''re out of time," Feofan announces and you and the rest of the group let out...
    scene.text(`"We're out of time," Feofan announces and you and the rest of the group let out a sigh. "Don't worry, there are lots of adventures left to explore. We'll pick it up next time. Hopefully Petka will get to see ${((st as any).pcs_nickname ?? '')} naked again…" he says with a wink, which gets everyone laughing again as Petka blushes once more. The group then gather up their books and walk out of the shop. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"I grab my sword and tell whoever is there to show themselves now," you reply.');
      scene.text('Petka sighs. "Sorry, I just wanted to check on you. I didn\'t mean to scare you."');
      // TODO-QSP: dynamic text: Feofan then describes how your character is standing naked in front of Petka''s ...
      scene.text(`Feofan then describes how your character is standing naked in front of Petka's with only her sword in hand. "${((st as any).pcs_nickname ?? '')}… Naked?" Petka blurts before blushing when he realizes what he said. "I-I meant her character!"`);
      scene.text('The others start laughing. "Sure you did," they wink. "I didn\'t know you were such a perv, Petka!"');
      scene.text('The tension rises before easing up as the others tease Petka about his unfortunate choice of words. You tell him you\'re fine and to return to camp before you finish bathing, get dressed and head back yourself. After you do, the rest of the group follow your lead and one by one, their characters all go and bathe as well, apparently enjoying the more immersive role-playing you\'re doing.');
      scene.text('As the party beds down for the night, you and the others keep teasing Petka throughout the rest of the game as it nears the end.');
      // TODO-QSP: dynamic text: "We''re out of time," Feofan announces and you and the rest of the group let out...
      scene.text(`"We're out of time," Feofan announces and you and the rest of the group let out a sigh. "Don't worry, there are lots of adventures left to explore. We'll pick it up next time. Hopefully Petka will get to see ${((st as any).pcs_nickname ?? '')} naked again…" he says with a wink, which gets everyone laughing again as Petka blushes once more. The group then gather up their books and head out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGameNight3(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('Feofan has already set everything up as you walk in. There\'s a new map set on the table; it\'s of the village you\'re about to enter. Everyone runs over to see what\'s being set up.');
  scene.text('Feofan is clearly loving the attention. "Thanks, it took me several weeks to draw up the details and paint everything. Shall we get started?" You all quickly take a seat around the table as Feofan begins. "After you break camp and pack up, you make haste to the village. You enter the sleepy village around midday."');
  scene.text('He then describes the layout of the village, pointing out the blacksmith shop where you can upgrade your gear, the tavern where you can collect valuable information and the alchemist shop where you can buy potions. There\'s even a rumor of a brothel located somewhere within the village.');
  scene.text('You all sit in awe as Feofan explains further. As soon as he\'s finished, Artem takes over. "Let\'s find an inn. We need a base where we can rest at night." It doesn\'t take long before you find a nice inn that you settle into.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Settle in', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/village.jpg');
    scene.text('"Now that we\'re settled at the inn, it\'s time to take care of our mission here," Artem says and the group starts dividing up the different tasks.');
    if (((st as any).nerd_game ?? 0)?.['tookgold'] === 1) {
      // TODO-QSP: dynamic text: "We''ve got this extra gold so we can pick up new armors, weapons, potions and s...
      scene.text(`"We've got this extra gold so we can pick up new armors, weapons, potions and supplies," Artem explains and the rest of the group nods in agreement. "Then it's settled. We'll split up so we can finish our tasks quicker. I suggest that Zinaida and Julia go and pick up the potions, Petka and Gerasim can sell our trinkets and buy us some supplies from the local trader and ${((st as any).pcs_nickname ?? '')} and I will head over to the blacksmith to buy more gear."`);
      scene.text('After a short discussion, you all agree on the details and head out.');
      scene.actions([
        { label: 'Head to the blacksmith shop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/blacksmith_shop.jpg');
    scene.text('Upon entering the blacksmith shop, you hear the clanking of a hammer hitting heated iron. A tall man with broad shoulders is hammering away and not really paying attention to you. "Excuse me, sir!" Artem shouts, but the banging continues. "Sir!" Artem and Feofan continue roleplaying as the rest of you listen. "We would like to buy your finest wares!"');
    scene.text('The banging stops and the blacksmith looks up. He\'s got dark eyes and looks annoyed, as if you were bothering him. "Did you bring a fortune with you? Only royalty has the means to buy what I\'m offering."');
    scene.text('Artem looks confidently at him as he throws a bag of the gold taken from the dragon fight on the counter. "Will this suffice?"');
    scene.text('The blacksmith opens the bag and looks inside before throwing it back. "You can keep it. I know where you got this. It\'s cursed." He turns his back and starts hammering once again.');
    scene.text('The two of you look at each other dumbfounded. Nonetheless, you step outside and start talking to each other. "What should we do now? He won\'t accept the gold!" you ask Artem.');
    // TODO-QSP: dynamic text: "Easy. There''s a reason you were brought along, <<$pcs_nickname>>. Don''t you h...
    scene.text(`"Easy. There's a reason you were brought along, ${((st as any).pcs_nickname ?? '')}. Don't you have high charisma and social skills?" Artem asks. You quickly go through your character sheet and nod. "There we have it then. Head back inside and have him eat out of your hand."`);
    scene.actions([
      { label: 'Re-enter the blacksmith shop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/blacksmith.jpg');
    scene.text('You cautiously enter the blacksmith shop. "I\'m not interested in what you have to say, girl!" The familiar clanking sound starts all over again.');
    scene.text('"I-I…" you start hesitating, losing some of your composure as Feofan is a really good role-player. You suddenly feel a light nudge on your arm. "Say that you want to roll the dice for a persuasion check," Julia reminds you.');
    scene.text('You look towards Feofan. "I would like to roll the dice for a persuasion check!"');
    scene.text('"Are you sure about that?" Feofan teases, knowing you\'re not that experienced when it comes to role-playing. The others nod in encouragement. "Yes, I\'m sure!"');
    scene.text('Feofan smiles. "Great, then roll the dice!"');
    scene.actions([
      { label: 'Roll the dice', handler: (st: GameState) => {
    (st as any).temp = (Math.floor(Math.random() * 21) + 10);
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    if (((st as any).temp ?? 0) <= 18) {
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (2);
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'stat', '');
      scene.text('You roll the dice… and it\'s low. The group looks at you in disappointment.');
      scene.text('"Still not buying it, girl!" the blacksmith replies harshly. "Now leave, I have more important things to do!"');
      scene.text('You step outside. "I failed… He still refuses to accept the gold," you role-play.');
      // TODO-QSP: dynamic text: "Can''t say I''m not disappointed, but you did your best <<$pcs_nickname>>. Let'...
      scene.text(`"Can't say I'm not disappointed, but you did your best ${((st as any).pcs_nickname ?? '')}. Let's see if the others had better luck." The two of you walk away from the blacksmith shop without buying anything.`);
      scene.actions([
        { label: 'Meet up with the others', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('The whole group meets up and starts showing off what they got. "We didn\'t manage to buy anything either. No one wanted to accept our gold!" Julia exhales.');
      scene.text('"Yeah, we\'ll have to save the gold for another time. We\'ll surely come across <i>someone</i> who will accept it!" Artem exclaims while throwing an eye towards Feofan.');
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can always go find another adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "I found the brothel, if that\'s any consolation."');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('At this point, you notice Anushka watching you. You see Petka cringe and some of the others look annoyed as they realize why she\'s there.');
      scene.actions([
        { label: 'Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just grins as she looks at Gerasim. "Have you not given poor Princess Buttercup some orc dick yet?" She then turns her attention to Artem. "And you wonder why his character is looking for the brothel. I\'m sure they cater to all genders… Right?"');
    scene.text('Artem and Gerasim fail to hide their amused smiles, Zinaida and Julia look a little uncomfortable and Petka blushes as Feofan tries to keep things moving. "Uh… Yeah! Of course the brothel caters to everyone," he replies to Anushka, then glances at Petka. "Is that why you were checking?"');
    scene.text('Petka manages to turn even more red and shakes his head. "No! I just forgot I was playing a girl is all…" Anushka just snorts a laugh and even you have to admit that it was a lame excuse.');
    scene.text('Before it can go further, Anushka clears her throat and just pointedly looks at the clock. When she returns and gives everyone their order, she leans over to Gerasim. "You should just seduce Princess Buttercup and give her what she needs tonight." Gersim just smiles as Anushka walks away.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. Everyone starts laughing, disregarding that you haven\'t really achieved any of your goals. As your party sits at the local tavern, drinking and eating, they all engage in some role-playing banter.');
    scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('The whole group meets up and starts showing off what they got. "We didn\'t manage to buy anything either. No one wanted to accept our gold!" Julia exhales.');
      scene.text('"Yeah, we\'ll have to save the gold for another time. We\'ll surely come across <i>someone</i> that will accept it!" Artem exclaims while throwing an eye towards Feofan.');
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can always go find another adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "I found the brothel, if that\'s any consolation."');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('Everyone starts laughing, disregarding that you haven\'t really achieved any of your goals. As your party sits at the local tavern, drinking and eating, they all engage in some role-playing banter.');
      scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and head out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    } else {
      if (((st as any).temp ?? 0) > 18  &&  ((st as any).temp ?? 0) <= 26) {
        ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
        qspCall(st, 'mood', 'raise', 'tiny');
        qspCall(st, 'stat', '');
        scene.text('You roll the dice and hit the first target number Feofan stated, but not the higher one he said you need for complete success.');
        scene.text('The blacksmith angrily stares at you. "What do you want, girl?!"');
        scene.text('Feeling quite confident, you quickly reply. "We want to buy some equipment from you and I\'m pretty sure you could use some gold. I\'m sure we can work something out. Can you really say no to this?" You start playing with the gold pouch.');
        scene.text('There\'s a long silence before the blacksmith finally sighs. "Fine. I\'ll sell you my goods, but it\'ll cost you double."');
        scene.text('You tell him that you need to talk to your group before you leave the shop and quickly inform your comrades. "That means we can only buy either armor or weapons for everyone," Artem sighs. "Take the weapons. We\'ll need them more. A dead corpse won\'t fight back."');
        scene.text('You walk back into the shop and buy the weapons. You\'re paying a way higher price than you expected, but at least you managed to get some new gear.');
        scene.actions([
          { label: 'Meet up with the others', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('You meet up with a cheerful Julia and Zinaida. "Who knew that our usually quiet Zinaida was quite the sweet talker. She managed to get us some potions."');
      scene.text('"And we got new weapons!" Artem chimes in.');
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "To top it off, I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('At this point, you notice Anushka watching you. You see Petka cringe and some of the others look annoyed as they realize why she\'s there.');
      scene.actions([
        { label: 'Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just grins as she looks at Gerasim. "Have you not given poor Princess Buttercup some orc dick yet?" She then turns her attention to Artem. "And you wonder why his character is looking for the brothel. I\'m sure they cater to all genders… Right?"');
    scene.text('Artem and Gerasim fail to hide their amused smiles, Zinaida and Julia look a little uncomfortable and Petka blushes as Feofan tries to keep things moving. "Uh… Yeah! Of course the brothel caters to everyone," he replies to Anushka, then glances at Petka. "Is that why you were checking?"');
    scene.text('Petka manages to turn even more red and shakes his head. "No! I just forgot I was playing a girl is all…" Anushka just snorts a laugh and even you have to admit that it was a lame excuse.');
    scene.text('Before it can go further, Anushka clears her throat and just pointedly looks at the clock. When she returns and gives everyone their order, she leans over to Gerasim. "You should just seduce Princess Buttercup and give her what she needs tonight." Gersim just smiles as Anushka walks away.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. Everyone starts laughing, disregarding that you haven\'t really achieved any of your goals. As your party sits at the local tavern, drinking and eating, they all engage in some role-playing banter.');
    scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You meet up with a cheerful Julia and Zinaida. "Who knew that our usually quiet Zinaida was quite the sweet talker. She managed to get us some potions."');
      scene.text('"And we got new weapons!" Artem chimes in.');
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "To top it off, I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('Everyone starts laughing and you spend some time looking at the stuff you\'ve managed to acquire before your party heads to the local tavern, where they drink and eat. "I can\'t wait to see how all of this plays out!" someone comments before Feofan calls a stop for the day.');
      scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and head out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
        ]);
      } else {
        ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (5);
        qspCall(st, 'mood', 'raise', 'small');
        qspCall(st, 'stat', '');
        scene.text('You roll the dice and… jackpot! You\'ve managed to roll well above what you needed and look sneakily towards Feofan, clearing your throat before you start bargaining, charming the pants off the blacksmith. "Fine, fine! I\'ll let you buy all the equipment you need for the regular price with that damn gold!"');
        scene.text('Smiling, you point towards all the armor and weapons you want and manage to fully equip all your group members in better gear, calling in Artem to help you carry all the stuff. You thank the blacksmith and he mutters something under his breath.');
        scene.actions([
          { label: 'Meet up with the others', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('Julia and Zinaida are looking dejected. "We didn\'t manage to get rid of the gold. The shopkeeper wasn\'t having any of it…" They quickly turn ecstatic when they see all the goods you\'ve brought with you.');
      // TODO-QSP: dynamic text: "Maybe we should send <<$pcs_nickname>> to have a chat with the shopkeeper too."...
      scene.text(`"Maybe we should send ${((st as any).pcs_nickname ?? '')} to have a chat with the shopkeeper too." Several of them congratulate you as you all discuss the different armors and weapons you've managed to acquire.`);
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "And I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('At this point, you notice Anushka watching you. You see Petka cringe and some of the others look annoyed as they realize why she\'s there.');
      scene.actions([
        { label: 'Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just grins before looking at Gerasim. "Have you not given poor Princess Buttercup some orc dick yet?"');
    scene.text('Gerasim clears his throat. "Half orc."');
    scene.text('Anushka just gives Gerasim a "whatever" look before she turns to Artem. "And you wonder why his character is looking for the brothel. I\'m sure they cater to all genders… Right?"');
    scene.text('Artem and Gerasim fail to hide their amused smiles, Zinaida and Julia look a little uncomfortable and Petka blushes as Feofan tries to keep things moving. "Uh… Yeah! Of course the brothel caters to everyone," he replies to Anushka, then glances at Petka. "Is that why you were checking?"');
    scene.text('Petka manages to turn even more red and shakes his head. "No! I just forgot I was playing a girl is all…" Anushka just snorts a laugh and even you have to admit that it was a lame excuse.');
    scene.text('Before it can go further, Anushka clears her throat and just pointedly looks at the clock. When she returns and gives everyone their order, she leans over to Gerasim. "You should just seduce Princess Buttercup and give her what she needs tonight." Gersim just smiles as Anushka walks away.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. Everyone starts laughing, disregarding that you haven\'t really achieved any of your goals. As your party sits at the local tavern, drinking and eating, they all engage in some role-playing banter. Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Julia and Zinaida are looking dejected. "We didn\'t manage to get rid of the gold. The shopkeeper wasn\'t having any of it…" They quickly turn ecstatic when they see all the goods you\'ve brought with you.');
      // TODO-QSP: dynamic text: "Maybe we should send <<$pcs_nickname>> to have a chat with the shopkeeper too?"...
      scene.text(`"Maybe we should send ${((st as any).pcs_nickname ?? '')} to have a chat with the shopkeeper too?" Several of them congratulate you as you all discuss the different armors and weapons you've managed to acquire.`);
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "And I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('Everyone starts laughing and you spend some time looking at the stuff you\'ve managed to acquire before your party heads to the local tavern, where they drink and eat. "Good job everyone! I can\'t wait to see you use all these weapons at a later time," Feofan comments as it\'s time to stop for the day.');
      scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"All we\'ve got are these trinkets to sell. It won\'t be enough to buy new armor, weapons, potions <i>and</i> supplies…" Artem explains and the rest of the group nods in agreement.');
      scene.text('"We have that small stash of gold from our last adventure," Julia points out.');
      scene.text('"We agreed to keep that for an emergency!" Petka cries out.');
      scene.text('"What do you think this is?" Julia replies with a roll of her eyes.');
      // TODO-QSP: dynamic text: "Then it''s settled. We''ll split up so we can finish our tasks quicker. I sugge...
      scene.text(`"Then it's settled. We'll split up so we can finish our tasks quicker. I suggest that Zinaida and Julia go and pick up the potions, Petka and Gerasim can sell those trinkets and buy us some supplies from the local trader and ${((st as any).pcs_nickname ?? '')} and I will head over to the blacksmith so we can buy more gear."`);
      scene.text('After a short discussion, you all agree on the details and head out.');
      scene.actions([
        { label: 'Head to the blacksmith shop', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/blacksmith_shop.jpg');
    scene.text('Upon entering the blacksmith shop, you hear the clanking of a hammer hitting on heated iron. A tall man with broad shoulders is hammering away and not really paying attention to you. "Excuse me, sir!" Artem shouts, but the banging continues. "Sir!" Artem and Feofan continue roleplaying as the rest of you listen. "My good sir, we would like to see what wares you have to offer."');
    scene.text('The banging stops and the blacksmith looks up. He\'s got dark eyes and looks annoyed, as if you were bothering him. "Did you bring a fortune with you? Only royalty has the means to buy what I\'m offering."');
    scene.text('You\'re taken back a little by his bluntness, but you brush it off and look around his shop. "You\'ve got quite the quality gear here."');
    scene.text('"Thank you," he grunts. "You buying something or you\'re just out to waste my time?"');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/blacksmith.jpg');
    scene.text('"S-Sorry, we don\'t have much gold so…" Artem starts to explain.');
    scene.text('"I don\'t care!" The annoyed voice behind the counter is getting louder.');
    scene.text('Noticing Artem not getting anywhere, you decide to jump in. "Please sir, just give us a minute. We just need to decide on what to buy since we\'re on a limited budget."');
    scene.text('There is an awkward silence in the air before the blacksmith finally speaks up. "Talk it over and then call on me when you\'ve decided."');
    scene.text('"Thank you!" You turn to the others. "So what should we do? We have limited funds and it\'s really expensive here."');
    scene.text('"Get Zinaida and I some better weapons. It\'s all we can afford," Artem replies.');
    scene.actions([
      { label: 'Proceed to buy some gear', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/weaponsarmor.jpg');
    scene.text('You agree on buying a few weapons that will hopefully help out with your future endeavors. "No need to worry. My weapons are of the highest quality, and therefore the highest price."');
    scene.text('Now that you\'ve decided to buy something, the blacksmith has softened up a little. You even manage to have quite the conversation while Artem chooses the weapons. You thank him for everything and head out to meet the rest of the party.');
    scene.actions([
      { label: 'Meet up with the others', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('You meet the rest of the party and show off the goods to both some excitement and disappointment as you continue discussing what to do next.');
      scene.text('Julia and Zinaida are looking cheerful. "Who knew that our usually quiet Zinaida was quite the sweet talker? She managed to get us some potions!"');
      scene.text('"We got a few new weapons," Artem chimes in.');
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "To top it off, I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('At this point, you notice Anushka watching you. You see Petka cringe and some of the others look annoyed as they realize why she\'s there.');
      scene.actions([
        { label: 'Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just grins before looking at Gerasim. "Have you not given poor Princess Buttercup some orc dick yet?"');
    scene.text('Gerasim clears his throat. "Half orc."');
    scene.text('Anushka just gives Gerasim a "whatever" look before she turns to Artem. "And you wonder why his character is looking for the brothel. I\'m sure they cater to all genders… Right?"');
    scene.text('Artem and Gerasim fail to hide their amused smiles, Zinaida and Julia look a little uncomfortable and Petka blushes as Feofan tries to keep things moving. "Uh… Yeah! Of course the brothel caters to everyone," he replies to Anushka, then glances at Petka. "Is that why you were checking?"');
    scene.text('Petka manages to turn even more red and shakes his head. "No! I just forgot I was playing a girl is all…" Anushka just snorts a laugh and even you have to admit that it was a lame excuse.');
    scene.text('Before it can go further, Anushka clears her throat and just pointedly looks at the clock. When she returns and gives everyone their order, she leans over to Gerasim. "You should just seduce Princess Buttercup and give her what she needs tonight." Gerasim just smiles as Anushka walks away.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. Everyone starts laughing, disregarding that you haven\'t really achieved any of your goals. As your party sits at the local tavern, drinking and eating, they all engage in some role-playing banter. Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Julia and Zinaida are looking dejected. "We didn\'t manage to get rid of the gold. The shopkeeper wasn\'t having any of it…" They quickly turn ecstatic when they see all the goods you\'ve brought with you.');
      // TODO-QSP: dynamic text: "Maybe we should send <<$pcs_nickname>> to have a chat with the shopkeeper too?"...
      scene.text(`"Maybe we should send ${((st as any).pcs_nickname ?? '')} to have a chat with the shopkeeper too?" Several of them congratulate you as you all discuss the different armors and weapons you've managed to acquire.`);
      scene.text('"We sold the trinkets to the local trader and managed to buy enough supplies to last us a few weeks, so we can go on our next adventure," Gerasim adds.');
      scene.text('Petka jumps in excitedly. "And I found the brothel!"');
      scene.text('"Isn\'t your character a girl?" Artem asks.');
      scene.text('Petka blushes. "Yeah? So?"');
      scene.text('Artem laughs. "Why would she need a brothel?"');
      scene.text('Everyone starts laughing and you spend some time looking at the stuff you\'ve managed to acquire before your party heads to the local tavern, where they drink and eat. "Good job everyone! I can\'t wait to see you use all these weapons at a later time," Feofan comments as it\'s time to stop for the day.');
      scene.text('Shortly after that, the game night is over and you all help Feofan pack everything up before everyone gathers up their books and heads out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGameNight4(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 4;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated as the group can\'t wait to continue their adventures.');
  scene.text('Feofan begins describing the scene. "You spend an uneventful night at the inn, and at the early dawn you\'re all awoken by a roosters\' crow. You take some time to get ready and all meet up in front of the inn."');
  scene.text('"So what should we focus on today?" Petka asks.');
  scene.text('"It\'s adventure time! We really need to find a new quest today. We\'re low on funds, so we need to find an adventure that will sustain us for a while," Artem explains, taking the role of leader once again. "Don\'t worry, I\'m sure we\'ll overhear something interesting in the tavern."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head to the tavern', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/village.jpg');
    scene.text('You leave the inn and head towards the local tavern near the traders post.');
    scene.text('The village is quite empty and you don\'t see anyone running around. There seems to be some commotion happening inside the tavern as you approach.');
    scene.text('"You said that the barkeep didn\'t have any usable information, right?" Zinaida asks.');
    scene.text('Petka and Gerasim shake their heads. "No, he didn\'t want to tell us anything last night, other than about the brothel he also runs," Gerasim replies.');
    scene.text('"Maybe some of the patrons have some interesting information to tell us? Let\'s head inside; every other lead is dead anyway," Julia suggests.');
    scene.actions([
      { label: 'Enter the tavern', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/tavern.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('As you enter the tavern, the commotion settles down as everyone turns towards your group. You can cut the tension with a knife as the patrons watch to see what you, a group of armed strangers, will do next.');
      scene.text('"What the hell is this?!" Zinaida yells out. "Why are you all so tense? Didn\'t we have a great time yesterday?" she smirks.');
      scene.text('"L-Look, we don\'t want any trouble, you hear!" the barkeep yells from behind the counter.');
      scene.text('Julia tries to calm the barkeep. "Don\'t worry, we\'re not here to look for a fight! We\'re just looking for some information." She then turns to the rest of the group. "We should sit and order drinks so everyone relaxes. They\'ll be more likely to talk to us then."');
      scene.text('The rest all nod in agreement, so your characters all take a seat a table. You notice Feofan glance away from your group and smile before he starts to describe the tavern maid coming over to your table. You quickly realize he\'s describing what Anushka might look like dressed as a tavern maid, with the others soon catching on as well.');
      scene.text('When she arrives at the table, she pauses as she realizes you\'re all looking at her, with several of you giving her slightly amused smiles.');
      scene.actions([
        { label: 'Anushka the tavern wench', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She looks around at you, clearly wondering what all the looks are for before Feofan explains. "They just sat down in a tavern and I described the tavern wench coming over to take their drinks. As the game master, I\'ll have a soda."');
    scene.text('She just looks at him in confusion before Gerasim looks at her. "Get me a mug of ale, wench!" he says in his best orc voice before he blushes. "Really bring me a tea…" he says in his normal quiet voice and she suddenly seems to get it, rolling her eyes and shaking her head.');
    scene.text('Gerasim gives her his best puppy dog pleading eyes to play along and she sighs before smiling. To everyone\'s surprise, she starts playing along, even throwing in a bit of an accent. "Ale for the handsome half-orc. What about you, elf lass?" she asks Petka, who blushes once more.');
    scene.text('This is followed by her walking around getting each person\'s order and playing along. Some of them seem hesitant at first, but quickly get into it as well and seem to be enjoying the added immersion. You play along and order your drink from her, followed by Artem making his order last.');
    if (((st as any).anushkaQW ?? 0)?.['artem_dom'] >= 5) {
      scene.actions([
        { label: 'Wait for your order', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['artem_dom'] = ((st as any).anushkaQW['artem_dom'] ?? 0) + (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = ((st as any).artemQW['dom_nush_dnd'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Zinaida looks pretty shocked as Anushka leaves to prepare your order. "I can\'t believe she played along!"');
    scene.text('Gerasim clears his throat. "I\'ve been telling you guys she\'s not that bad once you get to know her."');
    scene.text('This quickly starts a debate, Gerasim firmly on the side that she isn\'t that bad, with Feofan appearing torn, but leaning towards her not being bad. The rest don\'t trust her or think she\'s going to play some prank on them to get back at them later. Before you can get into it too much, Feofan clears his throat and everyone glances up to see her returning with your order.');
    scene.text('Anushka starts serving everyone their orders, still playing up the tavern wench role to it\'s fullest. She serves Artem last, bending over to place his drink on the low coffee table. Artem reaches over and gives her ass a slap as soon as she sits the drink down. This causes her to yelp a little in surprise as she straightens up.');
    scene.text('"Yer a fine lass, wi\' such a class ass asweel!" Artem says in his terrible Scottish dwarven accent.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('The rest of the table watches in stunned silence at what Artem just did. Anushka gives Artem a slightly puzzled and annoyed look as he leans back with a smug look on his face, like he\'s daring her to say something. Anushka glances at you before she smiles, apparently willing to play along. "Thank you My\'lord. Will there be anything else?"');
    scene.text('"Nay. Now away wi\' ye and get your booty back tae the grind!" he says before giving her another smack on the ass.');
    scene.text('Anushka just gives him a backwards glance before she walks away. Everyone watches as she throws some extra sway into her stride.');
    scene.text('Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, Feofan turns and looks at Artem. "Dude, I can\'t believe you did that!"');
    scene.text('"I can\'t believe she didn\'t kick your ass right on the spot!" Petka chimes in.');
    // TODO-QSP: dynamic text: Zinaida shakes her head and looks very annoyed. "I can''t believe you would do t...
    scene.text(`Zinaida shakes her head and looks very annoyed. "I can't believe you would do that in front of ${((st as any).pcs_nickname ?? '')}. You know, your <i>girlfriend</i>!"`);
    scene.actions([
      { label: 'Tell her you don\'t mind', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    scene.text('You smile at her. "It\'s fine. We play around all the time. I know it doesn\'t mean anything."');
    scene.text('Most look thoughtful at your comment, while Zinaida frowns. "Well, if you\'re okay with it… I would <i>never</i> let <i>my</i> boyfriend do that…" she mutters so softly you can barely hear her as she looks at Feofan, who seems entirely oblivious.');
    // TODO-QSP: dynamic text: Artem looks very proud of himself. "She''s more bark than bite. After <<$pcs_nic...
    scene.text(`Artem looks very proud of himself. "She's more bark than bite. After ${((st as any).pcs_nickname ?? '')} and I started dating, we started hanging out and I realized she isn't that bad once you get to know her."`);
    scene.text('Petka glances at Anushka again. He seems a little jealous that Artem had the nerve to do that.');
    scene.text('Gerasim turns to the group. "See? That\'s what I have been telling you guys for years! We should ask her to join us again."');
    scene.text('Most are against the idea. "Even if we wanted to, she works on the days we play," Artem points out.');
    scene.text('Gerasim presses on. "We could switch days to one that she\'s off then. I mean if she said yes, that is…"');
    // TODO-QSP: dynamic text: Feofan and Artem seem open to the idea, but Julia, Petka and Zinaida are strongl...
    scene.text(`Feofan and Artem seem open to the idea, but Julia, Petka and Zinaida are strongly against it. Feofan then looks at you. "What do you think, ${((st as any).pcs_nickname ?? '')}? We're split three for and three against."`);
    scene.text('Even if you voted yes, you don\'t think she would agree, but then again you never thought she would play along like she just did…');
    scene.actions([
      { label: 'I\'ll ask', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('"I doubt she\'ll say yes, but you never know. I\'ll ask her next time we hang out."');
    scene.text('Feofan speaks up. "I think it could be fun. Text me with what she says."');
    scene.text('Julia, Petka and Zinaida look disappointed, while Artem gives you a reassuring smile and Gerasim looks happy.');
    scene.text('With that settled, you all get back into the game. "After a while, the patrons seems to have relaxed and forget about you," Feofan explains. "There are several patrons that catch your trained eyes. There\'s a beautiful woman sitting furthest away, almost hidden from the rest. She\'s dressed in all black, observing your group. Closest to the bar counter, you see a group of drunk and rowdy men in armor, talking loudly about some of the adventures they\'ve been on. Lastly, an old man, his face covered in scars, is enjoying his drink…"');
    scene.text('Someone nudges you. "Pick one and go talk to them." You look around in confusion. "Don\'t look so worried! You have the highest persuasion out of the whole group, so decide who to talk to and if anything happens, we have your back."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I won\'t ask', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('You shake your head. "Even if I asked her, she wouldn\'t agree. I know her well enough that any free time she has, she would rather go party than sit around playing a game."');
    scene.text('Artem speaks up. "I agree. While it might be fun, I just don\'t see her agreeing."');
    scene.text('Gerasim and Feofan look disappointed while the rest look relieved.');
    scene.text('With that settled you all get back into the game. "After a while, the patrons seems to have relaxed and forget about you," Feofan explains. "There are several patrons that catch your trained eyes. There\'s a beautiful woman sitting furthest away, almost hidden from the rest. She\'s dressed in all black, observing your group. Closest to the bar counter, you see a group of drunk and rowdy men in armor, talking loudly about some of the adventures they\'ve been on. Lastly, an old man, his face covered in scars, is enjoying his drink…"');
    scene.text('Someone nudges you. "Pick one and go talk to them." You look around in confusion. "Don\'t look so worried! You have the highest persuasion out of the whole group, so decide who to talk to and if anything happens, we have your back."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Tell Artem you didn\'t like it', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) - (2);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = (-1);
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    scene.text('You nod at her before looking at Artem. "I know we play around sometimes, but this is in public. You shouldn\'t do that."');
    scene.text('Everyone else decides now is a good time to look something up in a book or their character sheet to avoid the relationship discussion.');
    scene.text('Artem looks crestfallen and seems to shrink on the spot. You can see it was a big blow to his confidence. "Okay… Sorry…"');
    // TODO-QSP: dynamic text: He then turns back to the rest of the group. "She''s more bark than bite. After ...
    scene.text(`He then turns back to the rest of the group. "She's more bark than bite. After ${((st as any).pcs_nickname ?? '')} and I started dating, we started hanging out and I realized she isn't that bad once you get to know her."`);
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('With that settled, you all get back into the game. "After a while, the patrons seems to have relaxed and forget about you," Feofan explains. "There are several patrons that catch your trained eyes. There\'s a beautiful woman sitting furthest away, almost hidden from the rest. She\'s dressed in all black, observing your group. Closest to the bar counter, you see a group of drunk and rowdy men in armor, talking loudly about some of the adventures they\'ve been on. Lastly, an old man, his face covered in scars, is enjoying his drink…"');
    scene.text('Julia nudges you. "Pick one and go talk to them." You look around in confusion. "Don\'t look so worried! You have the highest persuasion out of the whole group, so decide who to talk to and if anything happens, we have your back."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    } else {
      scene.actions([
        { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Zinaida looks pretty shocked as Anushka leaves to prepare your order. "I can\'t believe she played along!"');
    scene.text('Gerasim clears his throat. "I\'ve been telling you guys, she\'s not that bad once you get to know her!"');
    scene.text('This quickly starts a debate, with Gerasim is firmly on the side that she isn\'t that bad, with Feofan appearing torn, but leaning towards her not being bad. The rest don\'t trust her or think she\'s going to play some prank on them to get back at them later. Before you can get into it too much, Feofan clears his throat and everyone glances up to see her returning with your order.');
    scene.text('Anushka starts serving everyone their orders, still playing up the tavern wench role to it\'s fullest. She serves Gerasim last, but before leaving she looks at him. "So what does your character look like?"');
    scene.text('Everyone looks a little surprised since she\'s never shown an interest in your game before.');
    scene.text('"Uh, well… He\'s large, almost two meters tall, and somewhat muscular, with a lean athletic build. He\'s also fairly attractive even with his half orc features, with very dark skin." He goes on to describe him and his weapons, armor and clothing in great detail.');
    scene.text('Anushka listens to every word before looking at Feofan. "What about this tavern wench I\'m playing? Tell me about her."');
    scene.text('Feofan grins from ear to ear. "She\'s the daughter of a local farmer, a middle child in a large family. She\'s fairly young and has dreams of a life outside this small town. She\'s also very pretty and has to fight off the attention of the local men wherever she goes."');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka hands the tray to Petka, who grabs it out of puzzled reaction more than anything else before she turns and sits in Gerasim\'s lap, running her hand up his chest as she looks him right in the eye. "Are you staying another night in town?"');
    scene.text('Gerasim seems surprised before he quickly gets into character. "Yes, but even if we weren\'t, I\'d stay another night for a pretty little thing like you."');
    scene.text('Anushka pours on the seductive girl charm and giggles. "I thought you\'d never ask…" She then plants a big kiss on his lips, which has all the other nerds staring. After breaking the kiss, she gets up. "I have to get back to work, but I\'ll see you tonight…"');
    scene.text('She then saunters off as everyone watches her walk away. Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, Gerasim turns to the group. "We should ask her to join again."');
    scene.text('Most are against the idea. "Even if we wanted to, she works on the days we play," Artem points out.');
    scene.text('Gerasim presses on. "We could switch days to one that she\'s off then. I mean if she said yes, that is…"');
    scene.text('Feofan seems open to the idea, but the rest are strongly against it. You just keep your opinion to yourself since they always vote. Even if you voted with Gerasim and Feofan, you\'d still be outnumbered.');
    scene.text('After the brief discussion, you all get back into the game. "After a while, the patrons seems to have relaxed and forget about you," Feofan explains. "There are several patrons that catch your trained eyes. There\'s a beautiful woman sitting furthest away, almost hidden from the rest. She\'s dressed in all black, observing your group. Closest to the bar counter, you see a group of drunk and rowdy men in armor, talking loudly about some of the adventures they\'ve been on. Lastly, an old man, his face covered in scars, is enjoying his drink…"');
    scene.text('Julia nudges you. "Pick one and go talk to them." You look around in confusion. "Don\'t look so worried! You have the highest persuasion out of the whole group, so decide who to talk to and if anything happens, we have your back."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('As you enter the tavern, the commotion settles down as everyone turns towards your group. You can cut the tension with a knife as the patrons watch to see what you, a group of armed strangers, will do next.');
      scene.text('"What the hell is this?!" Zinaida yells out. "Why are you all so tense? Didn\'t we have a great time yesterday?" she smirks.');
      scene.text('"L-Look, we don\'t want any trouble, you hear!" the barkeep yells from behind the counter.');
      scene.text('Julia tries to calm the barkeep. "Don\'t worry, we\'re not here to look for a fight! We\'re just looking for some information." She then turns to the rest of the group. "We should sit and order drinks so everyone relaxes. They\'ll be more likely to talk to us then."');
      scene.text('The rest all nod in agreement, so your characters all take a seat a table. Feofan describes the tavern maid coming over and taking your drinks.');
      scene.text('Feofan continues. "After a while, everyone seems to relax and forget about you. There are several patrons that catch your trained eyes. There\'s a beautiful woman sitting furthest away, almost hidden from the rest. She\'s dressed in all black, observing your group. Closest to the bar counter, you see a group of drunk and rowdy men in armor, talking loudly about some of the adventures they\'ve been on. Lastly, an old man, his face covered in scars, is enjoying his drink…"');
      scene.text('Someone nudges you. "Pick one and go talk to them." You look around in confusion. "Don\'t look so worried! You have the highest persuasion out of the whole group, so decide who to talk to and if anything happens, we have your back."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterThreeQuestsActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['tavernwoman'] === 0) {
    scene.actions([
      { label: 'Talk to the woman', goto: ['nerd_game_night', 'woman'] },
    ]);
  }
  if (((s as any).nerd_game ?? 0)?.['taverngroup'] === 0) {
    scene.actions([
      { label: 'Talk to the group of men', goto: ['nerd_game_night', 'group'] },
    ]);
  }
  if (((s as any).nerd_game ?? 0)?.['tavernman'] === 0) {
    scene.actions([
      { label: 'Talk to the old man', goto: ['nerd_game_night', 'oldman'] },
    ]);
  }
  if (((s as any).nerd_game ?? 0)?.['tavernwoman'] + ((s as any).nerd_game ?? 0)?.['taverngroup'] + ((s as any).nerd_game ?? 0)?.['tavernman'] > 0) {
    scene.actions([
      { label: 'Tell your party what you learned', goto: ['nerd_game_night', 'inform_them'] },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWoman(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['tavernwoman'] = 1;
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/tavernwoman.jpg');
  scene.text('You nod towards the woman dressed in black and start walking over to her. You can\'t make out anything but her pale skin and ruby red lips underneath her veil. "Can\'t you see I\'m mourning? I\'m in no mood to talk to anyone!"');
  scene.text('You\'re surprised by her bluntness. "Sorry, I don\'t want to be a bother…"');
  scene.text('"Then don\'t!" the woman scowls. "You should find someone you love before it\'s too late. Better to love than never to have felt it. I should know. I had the fairest man in this kingdom, but I threw it all away… I heard that the heartbreak killed him in the end and now there\'s a fortune in gold and other trinkets just sitting in that damned mansion!"');
  scene.text('You grow suspicious of her ulterior motives. "Why are you telling me this? If there is a fortune there, don\'t you want to keep it a secret? Or take it for yourself?"');
  scene.text('"I don\'t care anymore. I\'m too grief-stricken to ever return there, but if your path ever crosses it, then be sure to visit. It\'s quite secluded, and very beautiful."');
  scene.text('She goes on to describe the mansion and its location as you carefully listen.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterThreeQuestsActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/taverngroup.jpg');
  scene.text('As you approach the table, the rowdy men stop and look at you. "Is this the entertainment? Up for a good time, cutie?" They\'re clearly undressing you with their eyes. "Have you ever had sex with several men at once?" one asks and they all start laughing.');
  scene.text('You boldly stare at them. "So my friends and I…" You point over towards your group. "We overheard you talking about a treasure."');
  scene.text('The men start laughing. "Were you listening in on a private conversation? You\'re a bit cocky for a little squirt." One of the men spits next to your feet. "Listen here, let\'s not drag this out, we can share the information if you pay us."');
  scene.text('"And how can I trust that you\'re telling me the truth?" you ask.');
  scene.text('The man pulls out a pouch and throws it on the table. "See that? That\'s my share from the last treasure run we did. And believe me girl, we have plenty of treasure maps remaining."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Decide', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['taverngroup'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/taverngroup.jpg');
    scene.text('"I need to talk to my friends first. I\'ll be right back."');
    scene.text('As you turn your back, the men start hollering. "Did you see her ass?! I wouldn\'t mind getting my hands on that. I bet I could make her scream all night long." The men continue to be rowdy as they order another round.');
    scene.text('Feofan finishes by talking as one of the men. "Pay us the gold now and the information is yours or no deal."');
    // TODO-QSP: dynamic text: Feofan then looks at you. "Well <<$pcs_nickname>>, what are you going to do? Pay...
    scene.text(`Feofan then looks at you. "Well ${((st as any).pcs_nickname ?? '')}, what are you going to do? Pay them or…?"`);
    scene.text('You really want the information and think it\'s the right move for the group. "How much?"');
    scene.text('What seems to be the leader licks his lips and tells you the price he wants you to pay. He wants the last of the gold your party has. "No haggling, you understand girl?! That\'s the price, take it or leave it!"');
    // TODO-QSP: dynamic text: Several players all chime in suggesting you should pay, only to have Feofan inte...
    scene.text(`Several players all chime in suggesting you should pay, only to have Feofan interrupt them. "Okay, enough! Your characters aren't there. You sent ${((st as any).pcs_nickname ?? '')} up alone, so it's her choice." He then looks at you. "So what will it be?"`);
    scene.actions([
      { label: 'Pay up', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['acceptpay'] = 1;
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/taverngroup.jpg');
    scene.text('You look up, trying to read your co-players, but they\'re keeping true to what\'s playing out. "Alright, you\'ve got a deal!"');
    scene.text('He picks up one of the scrolls from his bag and throws it towards you. "There you have it, girl! Now hand over the gold!"');
    scene.text('You hand over the gold and quickly return to the group. The others cheer you on, pleased with your decision.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Decline', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) - (2);
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/taverngroup.jpg');
    scene.text('You shake your head. "That\'s way too much!"');
    scene.text('"Too bad then… Leave us alone, we\'re done here!" You can clearly tell that he\'s annoyed.');
    scene.text('The others sigh as you return to the group, discontent with your decision.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterThreeQuestsActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOldman(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['tavernman'] = 1;
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/tavernman.jpg');
  scene.text('You walk over to the old man and before you can even say a word, he turns to you. "Buy me a drink and I\'ll tell you a story."');
  scene.text('"Is that so?" You nod at the barkeep to pour another drink for the old man.');
  scene.text('After taking a sip, the old man starts telling you about when he was a young man. He was an adventurer like you, until he took an arrow to the knee. He starts telling you about some of the adventures he went on and how he fought everything from bandits to powerful mages, and even dragons. "Now for the story, girl."');
  scene.text('You take a seat as he starts. "Our last adventure started in this village. The crew and I had decided to go on one final adventure. There was a huge bounty on a powerful Necromancer who resided in an old castle hidden deep inside the forest and was said to be unkillable, so we decided to head out and slay him for the fame and fortune."');
  scene.text('He goes silent and his eyes blacken as he takes another sip. "We underestimated that bastard. Before we knew it, his monsters had killed half of us before we\'d even gotten near the castle… Anyway, we finally make it and we find ourselves standing face to face with the Necromancer himself."');
  scene.text('He takes another sip of his drink. "Just as we\'re about to attack, I get slashed across the face by some shadow creature…" He points to his scar. "Then all hell broke loose. I remember it all clear as day. The fighting, the screaming, my fallen brothers rising from the dead to fight for him… Even the shadows were alive. One by one, my friends fell dead around me until I was the last one standing. I ran for my life, only for one of my former men, the best archer for miles around, to shoot me in the knee. I have no idea what happened after that. I just kept running as fast as I could until I passed out…"');
  scene.text('"Where can I find this place, old man?" you curiously ask.');
  scene.text('"I wouldn\'t recommend going there, unless you want to end up like my crew…" the old man warns.');
  scene.text('You shake your head. "We\'re not afraid of anything!" You order another round and manage to pry out the information. After several more drinks loosen his tongue, he describes how to find the Necromancer\'s lair.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterThreeQuestsActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInformThem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['tavernwoman'] === 0  ||  ((s as any).nerd_game ?? 0)?.['taverngroup'] === 0  ||  ((s as any).nerd_game ?? 0)?.['tavernman'] === 0) {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    scene.text('You return to your party and tell them what you\'ve learned. Some are excited by what you\'ve discovered, while others are less interested.');
    scene.text('They discuss it for a few minutes while Feofan just watches. "Okay, go find out if there are any other options," Artems orders.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterThreeQuestsActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('You return to the group and tell them about the different adventures you\'ve discovered from the patrons of the tavern. They all listen attentively to what you have to say.');
    scene.text('"Well, I feel like we should go and bash that Necromancer\'s head in!" Artem suggests with a smile.');
    scene.text('"I\'m not too fond of that. I\'d rather see if there\'s any truth to that widow\'s mansion story," Julia counters.');
    scene.text('The arguing starts getting more intense as everyone tries to get their point across, the yelling getting louder and louder until Feofan gets fed up and slams the table. "Now that I have your attention! Since you can\'t decide what you should do, I suggest you have a vote on it!"');
    scene.text('There\'s a lot of loud moans. "I don\'t care how you feel about it! Vote!" Feofan commands.');
    scene.actions([
      { label: 'Vote to bash the Necromancer', handler: (st: GameState) => {
    qspCall(st, 'nerd_game_night', '');
  } },
      { label: 'Vote to go to the mansion', handler: (st: GameState) => {
    qspCall(st, 'nerd_game_night', '');
  } },
      { label: 'Vote to follow the information on the scroll', handler: (st: GameState) => {
    qspCall(st, 'nerd_game_night', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVoteMansion(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['mansion_adventure'] = 1;
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
  scene.text('Everyone takes turns voting while Feofan writes down the results. "Great, it seems like slightly more of you want to go to the mansion! Now that the vote is decided, I suggest we call it for the day and pick up it next time."');
  scene.text('"But we want to continue playing! We already know what adventure we\'re going on!" Gerasim sighs.');
  scene.text('Feofan stands firm. "That\'s it for today! Everyone needs to calm down as this discussion got way out of line!"');
  scene.text('With that, everyone helps pack everything up.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetEndActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterGameNight5(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated. The tension from last week seems to have dissolved and the group is ready for their next adventure.');
  scene.text('You role play your characters having spent their last night at the inn and going down to have breakfast before packing up all your gear to get ready to leave on your next adventure.');
  scene.text('"Freaking finally! Let\'s get out of this god-forsaken town and on to a new adventure!" Zinaida exclaims.');
  scene.text('"We just need to pack up and we\'re good to go!" Gerasim replies.');
  scene.text('The group quickly packs up everything from the rooms in the inn, pays for their stay and head outside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the inn', goto: ['nerd_game_night1', 'mansion_adventure_start'] },
  ]);
  scene.build();
}

function enterGameNight6(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 6;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated as the group can\'t wait to continue their adventures.');
  scene.text('Feofan has already set everything up as you walk in and you all quickly take a seat around the table as Feofan begins.');
  scene.text('"We pick up our adventure where we left off, having just defeated a group of undead who were under the control of dark magic…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start playing', goto: ['nerd_game_night1', 'mansion_interior4'] },
  ]);
  scene.build();
}

function enterGameNight7(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 7;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated as the group can\'t wait to continue their adventures.');
  scene.text('Feofan has already set everything up as you walk in and you all quickly take a seat around the table as Feofan begins.');
  scene.text('"We pick up our adventure where we left off. Having just confronted the succubus, she has transformed into her true demonic self in front of you…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start playing', goto: ['nerd_game_night1', 'succubus_fight'] },
  ]);
  scene.build();
}

function enterGameNight8(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 8;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('Feofan has already set everything up as you walk in, including the map of the town to which you\'re returning. Everyone compliments his work and excitedly discusses what might happen tonight.');
  scene.text('Feofan is clearly loving the attention. "Thanks. It took me several weeks to draw up the details and paint everything. Shall we get started?" You all quickly take a seat around the table as Feofan begins. "After you break camp and pack up, you make haste to the town. You enter the sleepy town around midday."');
  scene.text('He then describes the layout of the town again, reminding all of you where everything is. The blacksmith shop where you can upgrade your gear, the tavern where you can collect valuable information, and the alchemist shop where you can buy potions. There\'s even a rumor of a brothel located somewhere within the town.');
  scene.text('As soon as he\'s finished, Artem takes over. "Let\'s go back to the inn again. It worked well as our base of operations last time."');
  scene.text('It doesn\'t take long before you find yourself back in the same inn. "Okay everyone, go put your gear away and let\'s meet back down here afterwards to discuss our plans," Artem says once you have rented some rooms.');
  scene.text('Everyone goes up to their room to put their gear away before coming back down. Artem then explains the plans and gives everyone tasks.');
  scene.text('"Once everyone is done, let\'s meet back here to celebrate and get a hearty meal."');
  scene.text('With that, the group splits up. Some go to sell their loot and others go to replenish their supplies while you\'re sent out to check on rumors of any new adventures.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Search for more adventures', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You spend a lot of time going around the town asking all the locals about the various rumors they\'ve heard. After several in game hours, you end up returning to the inn to find the rest of the group waiting for you. You inform them the only adventures you could find is the same ones you heard about last time. There are a few grumbles among the players, as they were obviously hoping that Feofan had created some more adventures to give them more choices, but after a while you all agree on where to head next.');
    scene.text('"Now let\'s celebrate the destruction of the succubus!" Artem proclaims, eagerly getting into character.');
    scene.text('Something she said before she died bothers you, though. "What did she mean when she said we won this time?"');
    scene.text('Before Artem can answer, Feofan speaks up. "She was a demon. Demons can\'t be killed on the material plane, which is where you guys currently are. They are from the Abyssal plane and when they\'re killed here, they\'re just sent back \'home\'. It\'s hard for them to cross planes, but not impossible, especially if a wizard or other magical being were to try and summon one."');
    scene.text('You nod at his explanation, happy to have learned something new about the game. With that out of the way, everyone gets back into character again.');
    scene.actions([
      { label: 'Get back into character', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('Feofan starts describing the inn and those inside of it, as well as what foods and drinks they have. You see him glance to his side and smile as he describes the same tavern wench as last time heading over to your table. You look over and see Anushka approaching, Feofan clearly gearing up to try and rope her into playing along as the tavern wench again.');
      scene.text('Several of the others notice as well and exchange glances.');
      scene.text('Once she arrives at the table, Feofan speaks up. "The tavern wench comes over to your table to take your order…"');
      scene.text('Anushka looks at him, then at everyone else before she sighs slightly and rolls her eyes. She then smiles and puts on the accent she used last time she played along.');
      scene.actions([
        { label: 'Anushka the tavern wench', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka in her fake accent, while pretending to be a tavern wench says. "I see you survived your latest adventure! You\'re so brave going out and facing such monsters. That deserves a round on the house, so what can I get all of you?"');
    scene.text('Everyone gets excited thinking she means it for real, but one look from her quickly dashes that hope.');
    scene.text('Feofan is the first one to speak up. "Just a soda."');
    scene.text('Gerasim looks at her. "Get me a mug of ale, wench!" he says in his best orc voice. "Really bring me a tea…" he says in his normal quiet voice and she suddenly seems to get it, rolling her eyes and shaking her head.');
    scene.text('"Ale for the handsome half-orc," she says with a wink.');
    scene.text('You\'re honestly unsure if she\'s winking at Gerasim or if the tavern wench she\'s pretending to be is winking at his character.');
    scene.text('"What about you, elf lass?" she asks Petka, who blushes once more.');
    scene.text('This is followed by her walking around getting each person\'s order and playing along. Some of them seem hesitant at first, but quickly get into it and seem to be enjoying the added immersion. You play along and order your drink from her, followed by Artem making his order last.');
    if (((st as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((st as any).artemQW ?? 0)?.['dom_nush_dnd'] === 0) {
      scene.actions([
        { label: 'Wait for your order', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['artem_dom'] = ((st as any).anushkaQW['artem_dom'] ?? 0) + (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = ((st as any).artemQW['dom_nush_dnd'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Zinaida shakes her head slightly. "I still can\'t believe she plays along!"');
    scene.text('Gerasim clears his throat. "Like I said…"');
    scene.text('Zinaida interrupts him. "I know… I know… but it was just last year she was bullying us at school. It\'s just so weird to not be bullied by her now."');
    scene.text('Gerasim shrugs slightly. "She\'s older, plus she\'s not hanging out with the gopniks anymore. I think this is how she always was and she was just hanging out with a bad crowd before."');
    scene.text('It looks like another debate about her is about to start, as many of the them still hold grudges about being bullied by her back in school.');
    scene.text('Before it can really get going, Feofan chimes in. "I agree with Gerasim. We all sometimes do stuff to fit in, so let\'s just accept she isn\'t the same and have fun, okay?"');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest. She serves Artem last, bending over to place his drink on the low coffee table.');
    scene.text('He reaches over and gives her ass a slap as soon as she sits the drink down, causing her to yelp a little in surprise as she straightens up.');
    scene.text('"Yer a fine lass, wi\' such a class ass asweel!" he says in his terrible Scottish dwarven accent.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('The rest of the table watches in stunned silence as Anushka gives Artem a slightly puzzled and annoyed stare as he leans back with a smug look on his face, like he\'s daring her to say something.');
    scene.text('Anushka glances at you before she smiles, apparently willing to play along. "Thank you My\'lord. Will there be anything else?"');
    scene.text('"Nay. Now away wi\' ye and get your booty back tae the grind!" he says before giving her another smack on the ass.');
    scene.text('Anushka just gives him a backwards glance before she walks away. Everyone watches as she throws some extra sway into her stride.');
    scene.text('Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, Feofan turns and looks at Artem. "Dude, I can\'t believe you did that!"');
    scene.text('"I can\'t believe she didn\'t kick your ass right on the spot!" Petka chimes in.');
    // TODO-QSP: dynamic text: Zinaida shakes her head and looks very annoyed. "I can''t believe you would do t...
    scene.text(`Zinaida shakes her head and looks very annoyed. "I can't believe you would do that in front of ${((st as any).pcs_nickname ?? '')}. You know, your <i>girlfriend</i>!"`);
    scene.actions([
      { label: 'Tell her you don\'t mind', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    scene.text('You smile at her. "It\'s fine. We play around all the time. I know it doesn\'t mean anything."');
    scene.text('Most look thoughtful at your comment, while Zinaida frowns. "Well, if you\'re okay with it… I would <i>never</i> let <i>my</i> boyfriend do that…" she mutters so softly you can barely hear her as she looks at Feofan, who seems entirely oblivious.');
    // TODO-QSP: dynamic text: Artem looks very proud of himself. "She''s more bark than bite. After <<$pcs_nic...
    scene.text(`Artem looks very proud of himself. "She's more bark than bite. After ${((st as any).pcs_nickname ?? '')} and I started dating, we started hanging out and I realized she isn't that bad once you get to know her."`);
    scene.text('Petka glances at Anushka again. He seems a little jealous that Artem had the nerve to do that.');
    scene.text('Gerasim turns to the group. "See? That\'s what I\'ve been telling you guys for years! We should ask her to join us again."');
    scene.text('Most are against the idea. "Even if we wanted to, she works on the days we play," Artem points out.');
    scene.text('Gerasim presses on. "We could switch days to one that she\'s off then. I mean if she said yes, that is…"');
    // TODO-QSP: dynamic text: Feofan and Artem seem open to the idea, but Julia, Petka and Zinaida are strongl...
    scene.text(`Feofan and Artem seem open to the idea, but Julia, Petka and Zinaida are strongly against it. Feofan then looks at you. "What do you think, ${((st as any).pcs_nickname ?? '')}? We're split three for and three against."`);
    scene.text('Even if you voted yes, you don\'t think she would agree, but then again you never thought she would play along like she just did…');
    scene.actions([
      { label: 'I\'ll ask', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('"I doubt she\'ll say yes, but you never know. I\'ll ask her next time we hang out."');
    scene.text('Feofan speaks up. "I think it could be fun. Text me with what she says."');
    scene.text('Julia, Petka and Zinaida look disappointed, while Artem gives you a reassuring smile and Gerasim looks happy.');
    scene.text('With that settled you all get back into the game. Feofan clears his throat to get everyone\'s attention again.');
    scene.text('You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
    ]);
  } },
      { label: 'I won\'t ask', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('You shake your head. "Even if I asked her, she wouldn\'t agree. I know her well enough that any free time she has, she would rather go party than sit around playing a game."');
    scene.text('Artem speaks up. "I agree. While it might be fun, I just don\'t see her agreeing."');
    scene.text('Gerasim and Feofan look disappointed while the rest look relieved.');
    scene.text('With that settled, you all get back into the game. Feofan clears his throat to get everyone\'s attention again.');
    scene.text('You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
    ]);
  } },
    ]);
  } },
      { label: 'Tell Artem you didn\'t like it', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) - (2);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = (-2);
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    scene.text('You nod at her before looking at Artem. "I know we play around sometimes, but this is in public. You shouldn\'t do that."');
    scene.text('Everyone else decides now is a good time to look something up in their character sheet to avoid the relationship discussion.');
    scene.text('Artem looks crestfallen and seems to shrink on the spot. You can see it was a big blow to his confidence. "Okay… Sorry…"');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once the discussion is over Feofan clears his throat to get everyone\'s attention again.');
    scene.text('You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
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
    } else {
      if (((st as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((st as any).artemQW ?? 0)?.['dom_nush_dnd'] === 1) {
        scene.actions([
          { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Zinaida shakes her head slightly. "I still can\'t believe she plays along!"');
    scene.text('Gerasim clears his throat. "Like I said…"');
    scene.text('Zinaida interrupts him. "I know… I know, but it wasn\'t that long ago that she was bullying us back in school. It\'s just so weird to not be bullied by her now."');
    scene.text('Gerasim shrugs slightly. "She\'s older, plus she\'s not hanging out with the gopniks anymore. I think this is how she always was and she was just hanging out with a bad crowd before."');
    scene.text('It looks like another debate about her is about to start, as many of the them still hold grudges about being bullied by her back in school.');
    scene.text('Before it can really get going, Feofan chimes in. "I agree with Gerasim. We all sometimes do stuff to fit in, so let\'s just accept she isn\'t the same and have fun, okay?"');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest.');
    scene.text('Serving Artem second to last, he reaches over and gives her ass a slap again as soon as she sits his drink down, but leaves his hand on her ass this time, squeezing it as he talks.');
    scene.text('"Yer a fine lass, wi\' a fine firm ass asweel!" he says in his terrible Scottish dwarven accent.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = ((st as any).artemQW['dom_nush_dnd'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('The rest of the table watches in surprise as Anushka stays bent over, letting him feel her up while glancing back at him over her shoulder. Artem just gives her a smug look, like he\'s daring her to say something. Anushka glances at you before she smiles, apparently willing to play along. "Thank you My\'lord. Will there be anything else?"');
    scene.text('Artem gives her ass a gentle pat this time. "Yea, be a good lass and go on and serve me friend."');
    scene.text('As she straightens up and starts to walk away to serve Gerasim, he gives her ass another slap.');
    scene.text('Anushka just gives him a backwards glance before she walks over to serve Gerasim. As she bends over to put his drink down, you notice the exchange of a glance between Artem and Gerasim. Artem nods firmly at him and nods slightly in return before he reaches over and gives Anushka\'s ass a squeeze.');
    scene.text('Anushka glances at Gerasim with a bemused smile. "Is there anything… else… you would like?" she asks in a husky sultry tone. Her mannerism and tone leave no doubt what else she\'s offering Gerasim\'s half orc.');
    scene.text('Just about everyone at the table blushes a little, Gerasim most of all as he lets his hand fall away as she stands up. He shakes his head as he stammers. "No… no… thank you."');
    scene.text('With a smirk, she turns and walks back towards the counter. Everyone watches as she throws some extra sway into her stride.');
    scene.text('Zinaida shakes her head and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once she\'s gone, Feofan clears his throat to get everyone\'s attention again. You all fall back into character, talking like you\'re celebrating before Artem speaks to Gerasim. "Ye\' should have made a move on the lass. We all know you fancy her."');
    scene.text('Gerasim, now more comfortable without Anushka\'s ass in his hand, shrugs a little. "Not all human woman are into half orcs, regardless of how we look…" After a moment, he thinks and continues. "Maybe next time."');
    scene.text('After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Zinaida shakes her head slightly. "I still can\'t believe she plays along!"');
    scene.text('Gerasim clears his throat. "Like I said…"');
    scene.text('Zinaida interrupts him. "I know… I know, but it was just last year she was bullying us back in school. It\'s just so weird to not be bullied by her now."');
    scene.text('Gerasim shrugs slightly. "She\'s older, plus she\'s not hanging out with the gopniks anymore. I think this is how she always was and she was just hanging out with a bad crowd before."');
    scene.text('It looks like another debate about her is about to start, as many of the them still hold grudges about being bullied by her back in school.');
    scene.text('Before it can really get going, Feofan chimes in. "I agree with Gerasim. We all sometimes do stuff to fit in, so let\'s just accept she isn\'t the same and have fun, okay?"');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest. Once she finishes, she saunters off as everyone watches her walk away.');
    scene.text('Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once she\'s gone, Feofan clears his throat to get everyone\'s attention again. You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.text('Feofan starts describing the inn and those inside of it, as well as what foods and drinks they have. You see him glance to his side and smile as he describes the same tavern wench as last time heading over to your table. Your group orders food and drink, once they eat their fill the stay up late into the night drinking and talking about their latest adventure.');
      scene.actions([
        { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNextWeek(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
  scene.text('Feofan pauses and waits for the talk to die down before saying. "Having defeated the succubus that leaves you with only two choices now. The Necromancer or following the information on the scroll. So what will it be?"');
  scene.text('"Well, I feel like we should go and bash that Necromancer\'s head in!" Artem suggests with a smile.');
  scene.text('"I think we should follow information on the scroll, it is suppose to be a treasure map," Petka counters.');
  scene.text('The arguing starts getting more intense as everyone tries to get their point across, the yelling getting louder and louder until Feofan gets fed up and slams the table. "Now that I have your attention! Since you can\'t decide what you should do, I suggest you have a vote on it!"');
  scene.text('There\'s a lot of loud moans. "I don\'t care how you feel about it! Vote!" Feofan commands.');
  scene.actions([
{ label: 'Vote to bash the Necromancer', handler: (st: GameState) => {
    qspCall(st, 'nerd_game_night', '');
  } },
{ label: 'Vote to follow the information on the scroll', handler: (st: GameState) => {
    qspCall(st, 'nerd_game_night', '');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVoteNecromancer(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['mansion_adventure'] = 1;
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/party.jpg');
  scene.text('Everyone takes turns voting while Feofan writes down the results. "Great, it seems like slightly more of you want to go to deal with the Necromancer! Now that the vote is decided, I suggest we call it for the day and pick up it next time."');
  scene.text('"But we want to continue playing! We already know what adventure we\'re going on!" Gerasim sighs.');
  scene.text('Feofan stands firm. "That\'s it for today! Everyone needs to calm down as this discussion got way out of line!"');
  scene.text('With that, everyone helps pack everything up.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetEndActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGameNight9(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 9;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated. The tension from last week seems to have dissolved and the group is ready for their next adventure.');
  scene.text('You role play your characters having spent their last night at the inn and going down to have breakfast before packing up all your gear to get ready to leave on your next adventure.');
  scene.text('"I can\'t wait to get out of town and back on the road again, off to another new adventure!" Zinaida exclaims.');
  scene.text('"We just need grab a few more supplies and we\'re good to go!" Gerasim replies.');
  scene.text('The group quickly packs up everything from the rooms in the inn, pays for their stay and head outside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the inn', goto: ['nerd_game_night1', 'necromancer_adventure_start'] },
  ]);
  scene.build();
}

function enterGameNight10(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 10;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated as the group can\'t wait to continue their adventures.');
  scene.text('Feofan has already set everything up as you walk in and you all quickly take a seat around the table as Feofan begins.');
  // TODO-QSP: dynamic text: "We pick up our adventure where we left off, having just arrived at the strongho...
  scene.text(`"We pick up our adventure where we left off, having just arrived at the stronghold with ${((s as any).pcs_nickname ?? '')} Rogue about to cross the drawbridge…"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Start playing', goto: ['nerd_game_night1', 'necromancer_stronghold_gatehouse'] },
  ]);
  scene.build();
}

function enterGameNight11(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 11;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('As you arrive, you notice that the atmosphere is quite elated as the group can\'t wait to continue their adventures.');
  scene.text('Feofan has already set everything up as you walk in and you all quickly take a seat around the table as Feofan begins.');
  scene.text('"We pick up our adventure where we left off. Having just defeated the Death Knight and found the entrance to the crypt…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start playing', goto: ['nerd_game_night1', 'necromancer_fight'] },
  ]);
  scene.build();
}

function enterGameNight12(s: GameState, scene: SceneBuilder): void {
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['stage'] = 12;
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  scene.text('Feofan has already set everything up as you walk in, including the map of the town to which you\'re returning too again. Feofan says as everyone sits down. "Shall we get started?" You all quickly take a seat around the table as Feofan begins. "After you break camp and pack up, you make haste to the town. You enter the sleepy town around midday."');
  scene.text('He then describes the layout of the town again, reminding all of you where everything is. The blacksmith shop where you can upgrade your gear, the tavern where you can collect valuable information, and the alchemist shop where you can buy potions. Even the brothel your group found last time they stayed in town.');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((s as any).artemQW ?? 0)?.['dom_nush_dnd'] >= 1) {
    scene.text('As soon as he\'s finished, Artem takes over. "Let\'s go back to the inn again. It worked well as our base of operations last time. Not to mention our favorite tavern wench works there." He says with a grin and wink to Gerasim, who hesitates a moment but then nods and smiles back. Everyone notices and seems curious what that was about, but Artem keeps talking.');
  } else {
    scene.text('As soon as he\'s finished, Artem takes over. "Let\'s go back to the inn again. It worked well as our base of operations last time."');
  }
  scene.text('It doesn\'t take long before you find yourself back in the same inn. "Okay everyone, go put your gear away and let\'s meet back down here afterwards to discuss our plans," Artem says once you have rented some rooms.');
  scene.text('Everyone goes up to their room to put their gear away before coming back down. Artem then explains the plans and gives everyone tasks.');
  scene.text('"Once everyone is done, let\'s meet back here to celebrate and get a hearty meal."');
  scene.text('With that, the group splits up. Some go to sell their loot and others go to replenish their supplies while you\'re sent out to check on rumors of any new adventures.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Search for more adventures', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You spend a lot of time going around the town asking all the locals about the various rumors they\'ve heard. After several in game hours, you end up returning to the inn to find the rest of the group waiting for you. You inform them the only adventures you could find is the same ones you heard about last time. There are a few grumbles among the players, as they were obviously hoping that Feofan had created some more adventures to give them more choices, but after a while you all agree on where to head next.');
    scene.text('"Now let\'s celebrate the destruction of the Necromancer!" Artem proclaims, eagerly getting into character.');
    scene.actions([
      { label: 'Get back into character', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/tavern_wench.jpg');
      scene.text('Feofan starts describing the inn and those inside of it, as well as what foods and drinks they have. You see him glance to his side and smile as he describes the same tavern wench as last time heading over to your table. You look over and see Anushka approaching, Feofan clearly gearing up to try and rope her into playing along as the tavern wench again. This time he holds up a drawing of a wench that looks similar to Anushka dressed up in sexy wench outfit. "I asked Zinaida to draw this for me, since she is becoming a reoccurring NPC." He says with a smile, Zinaida smiles at the praise but it faults some when Feofan mentions Anushka becoming a reoccurring NPC.');
      scene.text('Several of the others notice as well and exchange glances.');
      scene.text('Once she arrives at the table, Feofan speaks up. "The tavern wench comes over to your table to take your order…"');
      scene.text('Anushka just launches right into the part with no eye roll or anything, if you didn\'t know any better you would think she is starting to enjoy the little role playing she is doing.');
      scene.actions([
        { label: 'Anushka the tavern wench', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka in her fake accent, while pretending to be a tavern wench says. "I see you survived your latest adventure yet again! You\'re so brave going out and facing such monsters. That deserves a round on the house, so what can I get all of you?"');
    scene.text('Everyone gets excited thinking she means it for real, but one look from her quickly dashes that hope.');
    scene.text('Feofan is the first one to speak up. "Just a soda."');
    scene.text('Gerasim looks at her. "Get me a mug of ale, wench!" he says in his best orc voice. "Really bring me a tea…" he says in his normal quiet voice.');
    scene.text('"The finest ale for the handsome half-orc," she says with a wink.');
    scene.text('You\'re honestly unsure if she\'s winking at Gerasim or if the tavern wench she\'s pretending to be is winking at his character.');
    scene.text('"What about you, elf lass?" she asks Petka, who blushes once more.');
    scene.text('This is followed by her walking around getting each person\'s order and playing along. Only Zinaida still hesitants at first, but plays it out, the rest seem to be enjoying the added immersion of role playing with Anushka. You play along and order your drink from her, followed by Artem making his order last.');
    if (((st as any).artemQW ?? 0)?.['dom_nush_dnd'] - 1) {
      scene.actions([
        { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Petka says. "When she plays along she is kinda fun!" Everyone but Zinaida seems to murmur their agreement they are enjoying it as well.');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest. She serves Artem last, bending over to place his drink on the low coffee table.');
    scene.text('He looks away unlike last time, perhaps you came down to hard on him, as he just plays along a bit but doesn\'t do anything like last time. Once she finishes, she saunters off as everyone watches her walk away.');
    scene.text('Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once she\'s gone, Feofan clears his throat to get everyone\'s attention again. You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week1'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((st as any).artemQW ?? 0)?.['dom_nush_dnd'] >= 1) {
        scene.actions([
          { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Petka says. "When she plays along she is kinda fun!" Everyone but Zinaida seems to murmur their agreement they are enjoying it as well.');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest.');
    scene.text('Serving Artem second to last, he reaches over and gives her ass a slap again as soon as she sits his drink down, but leaves his hand on her ass this time, squeezing it as he talks.');
    scene.text('"Yer a fine lass, wi\' a fine firm ass asweel!" he says in his terrible Scottish dwarven accent.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['dom_nush_dnd'] = ((st as any).artemQW['dom_nush_dnd'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('The rest of the table watches in surprise as Anushka stays bent over, letting him feel her up while glancing back at him over her shoulder. Artem just gives her a smug look, like he\'s daring her to say something. Anushka glances at you before she smiles, apparently willing to play along. "Thank you My\'lord. Will there be anything else?"');
    scene.text('Artem gives her ass a gentle pat this time. "Yea, be a good lass and go on and serve me half-orc friend something special... if you know what I mean." Then he slaps her hard on the ass, cause her to slightly yelp and jump from it, which only makes Artem laugh.');
    scene.text('Anushka just gives him a backwards glance before she walks over to serve Gerasim. As she bends over to put his drink down, you notice the exchange of a glance between Artem and Gerasim. Artem nods firmly at him and nods slightly in return before he reaches over and gives Anushka\'s ass a squeeze.');
    scene.text('Anushka glances at Gerasim with a bemused smile. "Is there anything… else… you would like?" she asks in a husky sultry tone. Her mannerism and tone leave no doubt what else she\'s offering Gerasim\'s half orc.');
    scene.text('Just about everyone at the table blushes a little, Gerasim then swallows visible and calms himself before he says. "Yes, I would like you to accompany me to my room."');
    scene.actions([
      { label: 'Watch them have fun.', handler: (st: GameState) => {
    (st as any).orc_bj = 1;
    scene.img('images/locations/city/island/coffe_hole/half_orc_bj.jpg');
    scene.text('Anushka is quiet a moment before she looks surprisingly demure, "I would like that my lord."');
    scene.text('Gerasim looking kinda excited likely more than he should be, tells Feofan. "I will take her up to my room."');
    scene.text('Feofan nods with a grin as she says. "You take her up to your room to do what adults do."');
    scene.text('Which everyone seems to expect is the end of it, but before anyone can say something more Anushka speaks up. "I let him lead me to his room, once we arrive and he closes the door behind us, we kiss passionately. Once the kiss is broken, I drop to my knees and undo his pants, until I pull his dick free." She thing goes on to graphically describe her tavern wench alter ego giving Gerasim\'s half-orc ranger a blowjob.');
    scene.text('You notice the boys are a little uncomfortable but also very turned on, Gerasim seems torn between turned on and mortified with embarrassment, while Julia looks mildly disgusted and Zinaida looks disgusted and annoyed.');
    scene.text('Zinaida finally interupts when no one else speaks up, after Anushka describes Gerasim\'s half-orc cumming in her mouth. "Do we have to listen to this? Isn\'t this something we can just leave to the imagination?"');
    scene.text('That seems to break the spell, Anushka smirks and looks at Zinaida. "What jealous?"');
    scene.text('Zinaida looks more embarrassed as well as mad, before she can say something though, Feofan intervenes. "Uh while we are glad you are having fun Nush, maybe you guys can save that for phone texts or something, just let me know ... in a rough outline." He quickly adds when he realize some might think he wanted details. "What happens between your characters."');
    scene.text('Gerasim stammers a bit, obviously not sure what to say. "Yeah... uh... um... yeah ok... we can do that..."');
    scene.text('With a smirk, Anushka turns and walks back towards the counter. Everyone watches as she throws some extra sway into her stride.');
    scene.text('Zinaida shakes her head in disgust and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once she\'s gone, Feofan clears his throat to get everyone\'s attention again. You all fall back into character, talking like you\'re celebrating before Artem speaks. "Lucky half-orc maybe I will try my luck next time." He says with a playful wink to you, that you don\'t think anyone noticed or if they did, you don\'t think they got the full meaning behind it. Zinaida shakes her head in annoyance at the comment.');
    scene.text('After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Wait for your order', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/coffee_hole/waiting_table.jpg');
    scene.text('Petka says. "When she plays along she is kinda fun!" Everyone but Zinaida seems to murmur their agreement they are enjoying it as well.');
    scene.text('Before anyone can say more, Anushka returns with the tray of drinks and starts placing them on the low coffee table, still playing up the tavern wench role to it\'s fullest. Once she finishes, she saunters off as everyone watches her walk away.');
    scene.text('Zinaida just snorts and Julia\'s gaze lingers a little longer before she too looks away, but the boys all watch her until she\'s back behind the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once she\'s gone, Feofan clears his throat to get everyone\'s attention again. You all fall back into character, talking like you\'re celebrating. After many hours and many drinks, the characters retire to their rooms.');
    scene.text('"That\'s it for now," Feofan explains and you all check the time to see that it\'s time to end.');
    scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and characters away.');
    scene.actions([
      { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week1'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('Feofan starts describing the inn and those inside of it, as well as what foods and drinks they have. You see him glance to his side and smile as he describes the same tavern wench as last time heading over to your table. Your group orders food and drink, once they eat their fill the stay up late into the night drinking and talking about their latest adventure.');
      scene.actions([
        { label: 'So what about next week?', goto: ['nerd_game_night', 'next_week1'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNextWeek1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
  scene.text('Feofan chokes up a little. "I-I haven\'t had time to finish the story. I didn\'t know which one you would pick until last week and it takes me weeks to write the adventure and prepare the maps and stuff. It\'ll take some time…"');
  scene.text('The group immediately starts moaning and complaining about his lack of forward planning.');
  scene.text('"Great! Just when it got good, we need to stop! You\'re aware that we play this game mostly for the adventures, right?" Artem scoffs.');
  scene.text('"I know!" Feofan quickly replies. "That\'s why I\'m stopping it now. I need time to prepare as well as I did for the last adventure, so you\'ll get the most out of it. You don\'t want a half assed adventure, do you?"');
  scene.text('You feel more disappointed than you expected, and wonder what you\'ll do in the meantime. "What about next week? Are we not playing?" you ask, and the others nod in agreement.');
  scene.text('Feofan holds up his hand. "I\'ve got it covered! I recently acquired a few board games I think we\'ll like. We can play those instead as I work on finishing the adventure."');
  scene.text('There are a few grumbles, but the group seems curious. Zinaida even gets excited about one of the games he names, exclaiming it\'s one she\'s been wanting to try for a while. You all put your things away and spend the time chatting about the board games before moving onto the latest films, TV shows and books. With that everyone helps pack everything up.');
  if (((s as any).orc_bj ?? 0) === 1) {
    scene.text('As everyone stops to talk for a few minutes before heading out, Artem grabs you by the arm and leans in to whisper. "Stay here with me until everyone else leaves. I want to have a little fun with our little pet bitch." Leaving you no doubt he wants to have sex with Anushka.');
    scene.actions([
      { label: 'Can\'t stay', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('You shake your head no, "Sorry can\'t stay but you are welcome to have fun."');
    scene.text('He frowns a bit but nods. "Ok well you be safe walking home then." As you both get up he gives you a kiss, as you head for the door he heads over to the counter where Anushka is.');
    scene.actions([
      { label: 'Leave the Coffee Hole', goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Stay with him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/island/coffe_hole/npcs/nush_counter.jpg');
    scene.text('You smile to him and nod, if you had a guess the little role playing she did with Gerasim got Artem really going and now he wants to do the real thing. "Sure we can stay and have some fun with her, if you want."');
    scene.text('He gives you a hug. "Your the best." Then he leads you up to the counter where she is working.');
    scene.actions([
      { label: 'Go to the counter with Artem', goto: ['artem_nush_sex_uni', 'nerd_game_orc_bj'] },
    ]);
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetEndActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBoardGames(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/board1.jpg');
  if (((s as any).loc ?? 0) === 'city_coffee_hole') {
    if (((s as any).nerd_game ?? 0)?.['boardgames'] === 0) {
      scene.text('Walking into the Coffee Hole, you don\'t really know what to expect as you see the group gathered around their table.');
      scene.text('You take a seat and notice several board game boxes on the table. "Are we playing all of these today?"');
      scene.text('Feofan shakes his head. "No, I just wanted to show you all the collection that I managed to get my hands on. Some games will take several weeks to complete and some will only take a few hours."');
      scene.text('You take a look at the selection while the others comment about what game they\'re mostly anticipating to play.');
      scene.text('Before you know it, the game board is out and Feofan starts explaining the rules.');
    } else {
      scene.text('You quickly enter the Coffee Hole, not wanting to be late, and see the group gathered around their table.');
      scene.text('You all take a look at the board games Feofan brought and there\'s a small argument on which game you should play until a vote is held to select one.');
      scene.text('Before you know it, the game board is out and Feofan starts explaining the rules.');
    }
  } else {
    if (((s as any).nerd_game ?? 0)?.['boardgames'] === 0) {
      scene.text('Walking up to the library, you don\'t really know what to expect as you enter and see the group gathered around their table.');
      scene.text('You take a seat and notice several board game boxes on the table. "Are we playing all of these today?"');
      scene.text('Feofan shakes his head. "No, I just wanted to show you all the collection that I managed to get my hands on. Some games will take several weeks to complete and some will only take a few hours."');
      scene.text('You take a look at the selection while the others comment about what game they\'re mostly anticipating to play.');
      scene.text('Before you know it, the game board is out and Feofan starts explaining the rules.');
    } else {
      scene.text('You quickly run up the stairs into the usual library room, not wanting to be late. You enter the room and see the group gathered around their table.');
      scene.text('You all take a look at the board games Feofan brought and there\'s a small argument on which game you should play until a vote is held to select one.');
      scene.text('Before you know it, the game board is out and Feofan starts explaining the rules.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start playing', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/board1.jpg');
    if (((st as any).loc ?? 0) === 'city_coffee_hole') {
      scene.text('Once Feofan finishes explaining the rules and everyone is done asking questions, you start playing the game. Despite the occasional argument over rules, you all end up enjoying yourselves. As the game goes on, it remains close and there\'s no way to say who\'s going to win.');
      scene.text('At this point, you notice Anushka watching you. A few of others look annoyed as they realize why she\'s there.');
      scene.actions([
        { label: 'Anushka says', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    if (((st as any).nerd_game ?? 0)?.['boardgames'] === 0) {
      scene.text('She looks over the board. "This looks different that what you guys were playing before."');
      scene.text('Feofan grins. "Yes, this is a board game. We were playing Dungeons and Dragons, which is a table top RPG, but I need a break to work on the next adventure…" He trails off when he sees her bored expression.');
      scene.text('"I didn\'t ask, nor do I care. You guys know why I\'m here."');
      scene.text('There\'s a resigned sigh as mostly everyone orders something and she returns a few minutes later. You can\'t help but notice the boys checking out her ass as she walks away. Once Anushka is gone, you all get back into the game.');
    } else {
      scene.text('She looks over the board. "Yet another new game I take it?"');
      scene.text('Feofan grins. "Good eye! Yes, this is a different board game from last time. In fact it plays completely different…" He trails off when he sees her bored expression.');
      scene.text('"Uh-huh, I\'m sure it does. Anyway, you guys know why I\'m here."');
      scene.text('There\'s a resigned sigh as mostly everyone orders something and she returns a few minutes later. You can\'t help but notice the boys checking out her ass as she walks away. Once Anushka is gone, you all get back into the game.');
    }
    scene.actions([
      { label: 'Finish up', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['boardgames'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/board1.jpg');
    scene.text('You continue playing with even more laughter and before you know it the game is over for the night. You all praise Feofan for picking a really good game.');
    scene.text('Feofan responds as expected - haughty. "Ye, with little faith in me. Told you I would fix everything."');
    scene.text('You all pile on him before clearing up. Once you pack everything up, you walk out of the shop. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Once Feofan finishes explaining the rules and everyone is done asking questions, you start playing the game. Despite the occasional argument over rules, you all end up enjoying yourselves. As the game goes on, it remains close and there\'s no way to say who\'s going to win.');
      scene.actions([
        { label: 'Finish up', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['boardgames'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/board1.jpg');
    scene.text('You continue playing with even more laughter and before you know it the game is over for the night. You all praise Feofan for picking a really good game.');
    scene.text('Feofan responds as expected - haughty. "Ye, with little faith in me. Told you I would fix everything."');
    scene.text('You all pile on him before clearing up. Once you pack everything up, you head out. Julia and Zinaida leave together, as do Artem and Petka. Gerasim and Feofan each leave on their own.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGameInviteSmsSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).nerd_game ?? 0)?.['stage'] > 0  ||  (Math.floor(Math.random() * (((s as any).npc_rel ?? 0)?.['A152'] - 80 + 1)) + (80)) > 95)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Add SMS']; enterSummerInviteSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).yearstart ?? 0) >= 2  &&  ((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === 0  &&  (((s as any).nerd_game ?? 0)?.['stage'] > 0  ||  (Math.floor(Math.random() * (((s as any).npc_rel ?? 0)?.['A152'] - 80 + 1)) + (80)) > 95)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Add SMS']; enterSummer2InviteSms(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'A152');
  // TODO-QSP: end
  scene.build();
}

function enterFirstText(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A152')", { location: "nerd_game_night" });
  if (((s as any).temp_pos ?? 0) === -1  ||  ((s as any).contactAnon ?? 0)?.[String((s as any).temp_pos ?? 0)] === 1) {
    qspCall(s, 'telefon', 'AddContact', 'A152', 'images/characters/shared/headshots_main/big152.jpg', 0);
  }
  ((s as any).nerd_game = (s as any).nerd_game ?? {})['first_SMS_received'] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterSummerInviteSms(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'Add SMS') {
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['lot'] = qspFunc(s, 'random', 'pick_from', 12, 13, 14, 23, 24, 34);
  }
  (s as any).temp_start_text = '';
  if (((s as any).nerd_game ?? 0)?.['first_SMS_received'] === 0) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hey ' + ((s as any).pcs_nickname ?? 0) + ' this is Feofan. We do a weekly game night, mostly playing Dungeons and Dragons and board games. I was talking to the others and we were wondering if you would like to join us? We have a few nights free this week and were wondering which one works best for you. We can do it either on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" }) + ' or ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],2,1))]", { location: "nerd_game_night" }) + '.';
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hey ' + ((s as any).pcs_nickname ?? 0) + ', would you like to join us for our weekly game night? We have a few nights free this week and were wondering which one works best for you. We can do it either on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" }) + ' or ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],2,1))]", { location: "nerd_game_night" }) + '.';
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ca1'] = '' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" }) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a1'] = 'Sure, I can make it on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" }) + '.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a2'] = ':-) Great! I\'ll see you on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],1,1))]", { location: "nerd_game_night" }) + ' at \'+func(\'time\', \'get_time_string\', 20, 0)+\' in the library then! Be ready to get your nerd on, because we\'re going to rock it so hard!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cb1'] = '' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],2,1))]", { location: "nerd_game_night" }) + '';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b1'] = 'Sure, I can make it on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],2,1))]", { location: "nerd_game_night" }) + '.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = ':-) Great! I\'ll see you on ' + qspUntranslated(s, "weekName[val(mid(nerd_game['lot'],2,1))]", { location: "nerd_game_night" }) + ' at \'+func(\'time\', \'get_time_string\', 20, 0)+\' in the library then! Be ready to get your nerd on, because we\'re going to rock it so hard!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cc1'] = 'Not this week';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c1'] = 'Sorry I don\'t have time this week, but next week I should be able too.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = ':-( Oh… okay yeah I get it. Guess we\'ll see you next week.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cd1'] = 'Not interested';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cd2'] = qspFunc(s, 'wrap', 'neg', 'This ends the D&D Campaign - Forever');
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d2'] = 'Sorry, but I\'m just not interested in stuff like that. Thanks for the invite though.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d3'] = ':-( Oh… okay yeah I get it. Guess we\'ll see you around.';
  if (String((s as any).locArgs?.[1] ?? '') === 'Add SMS') {
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'SMStext_builder', 'start');
    qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['0']);
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['ca1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_a');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cb1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_b');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cc1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_c');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cd1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_d');
    qspCall(s, 'SMStext_builder', 'add_sms', 'A152');
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (((s as any).nerd_game ?? 0)?.['first_SMS_received'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstText(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'Choice_a') {
    qspCall(s, 'SMStext_builder', 'start');
    qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['a1']);
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['game_day'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + parseFloat((String(((s as any).nerd_game ?? 0)?.['lot']).slice((1)-1, ((1)-1)+(1))));
    qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['a2']);
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'Choice_b') {
      qspCall(s, 'SMStext_builder', 'start');
      qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['b1']);
      qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
      ((s as any).nerd_game = (s as any).nerd_game ?? {})['game_day'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + parseFloat((String(((s as any).nerd_game ?? 0)?.['lot']).slice((2)-1, ((2)-1)+(1))));
      qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['b2']);
      qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
      qspCall(s, 'SMStext_builder', 'end');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'Choice_c') {
        qspCall(s, 'SMStext_builder', 'start');
        qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['c1']);
        qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
        qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['c2']);
        qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
        qspCall(s, 'SMStext_builder', 'end');
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'Choice_d') {
          qspCall(s, 'SMStext_builder', 'start');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['ca1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_a');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cb1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_b');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cc1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_c');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cd2'], 'nerd_game_night', 'summer_invite_sms', 'Choice_d1');
          qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
          qspCall(s, 'SMStext_builder', 'end');
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'Choice_d1') {
            qspCall(s, 'SMStext_builder', 'start');
            qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['d2']);
            qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
            ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0) + 7305;
            qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['d3']);
            qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
            qspCall(s, 'SMStext_builder', 'end');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSummer2InviteSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['first_SMS_received'] === 0) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hey ' + ((s as any).pcs_nickname ?? 0) + ' this is Feofan. We are doing our weekly game night at the Coffee Hole, coffee shop now. We will mostly be playing Dungeons and Dragons and board games. I was talking to the others and we were wondering if you were going to keep playing with us? We have a few nights free this week and were wondering which night works best for you. We can do it either on Tuesday or Thursday.';
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hey ' + ((s as any).pcs_nickname ?? 0) + ', would you like to join us for our weekly game night at the Coffee Hole? We have a few nights free this week and were wondering which night works best for you. We can do it either on Tuesday or Thursday.';
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ca1'] = 'Tuesday';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a1'] = 'Sure, I can make it on Tuesday.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a2'] = ':-) Great! I\'ll see you on Tuesday at ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + ' at the Coffee Hole then! Be ready to get your nerd on, because we\'re going to rock it so hard!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cb1'] = 'Thursday';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b1'] = 'Sure, I can make it on Thursday.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b2'] = ':-) Great! I\'ll see you on Thursday at ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + ' at the Coffee Hole then! Be ready to get your nerd on, because we\'re going to rock it so hard!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cc1'] = 'Not this week';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c1'] = 'Sorry I don\'t have time this week, but next week I should be able too.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c2'] = ':-( Oh… Okay, yeah I get it. Guess we\'ll see you next week.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cd1'] = 'Not interested';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cd2'] = qspFunc(s, 'wrap', 'neg', 'This ends the D&D Campaign - Forever');
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d2'] = 'Sorry, but I\'m just not interested in stuff like that. Thanks for the invite though.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d3'] = ':-( Oh… okay yeah I get it. Guess we\'ll see you around.';
  if (String((s as any).locArgs?.[1] ?? '') === 'Add SMS') {
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'SMStext_builder', 'start');
    qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['0']);
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['ca1'], 'nerd_game_night', 'summer2_invite_sms', 'Choice_a');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cb1'], 'nerd_game_night', 'summer2_invite_sms', 'Choice_b');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cc1'], 'nerd_game_night', 'summer2_invite_sms', 'Choice_c');
    qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cd1'], 'nerd_game_night', 'summer2_invite_sms', 'Choice_d');
    qspCall(s, 'SMStext_builder', 'add_sms', 'A152');
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (((s as any).nerd_game ?? 0)?.['first_SMS_received'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstText(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'Choice_a') {
    qspCall(s, 'SMStext_builder', 'start');
    qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['a1']);
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['fixed_uni_day'] = 2;
    qspCall(s, 'calendar', 'remove', 'nerd_game_night_event');
    qspCall(s, 'calendar', 'add', 'nerd_game_night_event');
    qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['a2']);
    qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'Choice_b') {
      qspCall(s, 'SMStext_builder', 'start');
      qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['b1']);
      qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
      ((s as any).nerd_game = (s as any).nerd_game ?? {})['fixed_uni_day'] = 4;
      qspCall(s, 'calendar', 'remove', 'nerd_game_night_event');
      qspCall(s, 'calendar', 'add', 'nerd_game_night_event');
      qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['b2']);
      qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
      qspCall(s, 'SMStext_builder', 'end');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'Choice_c') {
        qspCall(s, 'SMStext_builder', 'start');
        qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['c1']);
        qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
        qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['c2']);
        qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
        qspCall(s, 'SMStext_builder', 'end');
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'Choice_d') {
          qspCall(s, 'SMStext_builder', 'start');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['ca1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_a');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cb1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_b');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cc1'], 'nerd_game_night', 'summer_invite_sms', 'Choice_c');
          qspCall(s, 'SMStext_builder', 'add_reply', ((s as any).SMSTree ?? 0)?.['cd2'], 'nerd_game_night', 'summer_invite_sms', 'Choice_d1');
          qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
          qspCall(s, 'SMStext_builder', 'end');
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'Choice_d1') {
            qspCall(s, 'SMStext_builder', 'start');
            qspCall(s, 'SMStext_builder', 'send', ((s as any).SMSTree ?? 0)?.['d2']);
            qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
            ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0) + 7305;
            qspCall(s, 'SMStext_builder', 'receive', ((s as any).SMSTree ?? 0)?.['d3']);
            qspCall(s, 'SMStext_builder', 'show_sms', ((s as any).locArgs?.[2] ?? 0));
            qspCall(s, 'SMStext_builder', 'end');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInviteUni(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'exit') {
    qspCall(s, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).temp_loc = ((s as any).locArgs?.[1] ?? 0);
    (s as any).temp = qspFunc(s, 'random', 'pick_from', 12, 13, 14, 23, 24, 34);
    ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    // TODO-QSP: dynamic text: As you leave your last class of the day, Feofan walks over to you and smiles. "H...
    scene.text(`As you leave your last class of the day, Feofan walks over to you and smiles. "Hey ${((s as any).pcs_nickname ?? '')}, we do a weekly game night where we mostly play Dungeons and Dragons, but we sometimes play some board games. I was talking to the others and we were wondering if you would like to join us? We have a few nights free this week and were wondering which one works best for you. We can do it either on Tuesday or Thursday evening."`);
    scene.actions([
      { label: 'Not interested <br> [+$func(\'wrap\', \'neg\', \'This will block th...]', handler: (st: GameState) => {
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['invite_day'] = ((st as any).daystart ?? 0) + 7305;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You shake your head. "Sorry, but I\'m not interested in stuff like that. Thanks for the invite, though."');
    scene.text('He looks disappointed. "Oh… Okay, yeah I get it. Well, I guess we\'ll see you around…" he mumbles before walking away.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInviteUni(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I have to study', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You shake your head. "Sorry, but I can\'t this week. These classes are killing me and I\'m going to have to put in extra studying this week."');
    scene.text('He looks disappointed. "Oh… Okay, yeah I understand. If you ever get a handle on your class let me know… Anyway, I\'ll go let the others know and maybe you can come next week? Talk to you later." He walks away before you can reply.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInviteUni(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I\'m busy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You shake your head. "Sorry, but I can\'t this week. I already made plans for those days."');
    scene.text('He looks disappointed. "Oh… Okay. I guess you\'re turning into a popular girl, huh?" he says with a grin.');
    scene.text('You shake your head. "Very funny."');
    scene.text('He laughs a little. "Anyway, I\'ll let the others know and maybe you can come next week? Talk to you later." He walks away before you can reply.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInviteUni(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Tuesday', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['fixed_uni_day'] = 2;
    qspCall(st, 'calendar', 'remove', 'nerd_game_night_event');
    qspCall(st, 'calendar', 'add', 'nerd_game_night_event');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('"Sure, I can make it on Tuesday," you reply.');
    // TODO-QSP: dynamic text: 'He looks excited. "Great! I''ll see you on Tuesday at '+func('time', 'get_time_...
    scene.text('He looks excited. "Great! I\'ll see you on Tuesday at 18:00 at the Coffee Hole then! Be ready to get your nerd on, because we\'re going to rock it so hard!" he says with a cheesy wink and double finger point before walking away.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Thursday', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).nerd_game = (st as any).nerd_game ?? {})['fixed_uni_day'] = 4;
    qspCall(st, 'calendar', 'remove', 'nerd_game_night_event');
    qspCall(st, 'calendar', 'add', 'nerd_game_night_event');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('"Sure, I can make it on Thursday," you reply.');
    // TODO-QSP: dynamic text: 'He looks excited. "Great! I''ll see you on Thursday at '+func('time', 'get_time...
    scene.text('He looks excited. "Great! I\'ll see you on Thursday at 18:00 at the Coffee Hole then! Be ready to get your nerd on, because we\'re going to rock it so hard!" he says with a cheesy wink and double finger point before walking away.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'exit']; enterInvite(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCrashGamenightUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
  qspCall(s, 'stat', '');
  qspCall(s, 'nerd_game_night', 'set_leave_act');
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((((s as any).hour ?? 0)-22) * 60 + (((s as any).minut ?? 0)-30) < 0)) {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('As you walk over to their table, everyone freezes and looks your way. When they see you, they relax and go back to playing their game.');
      // TODO-QSP: dynamic text: As you''re about to ask what they''re doing, Feofan speaks up. "Hey <<$pcs_nickn...
      scene.text(`As you're about to ask what they're doing, Feofan speaks up. "Hey ${((s as any).pcs_nickname ?? '')}! We're almost done, but it's not too late to join."`);
      scene.text('You smile and shake your head. "I just wanted to talk to one of you is all."');
      // TODO-QSP: dynamic text: 'They all exchange looks and then look back at you as Feofan nods. "Okay. Can it...
      scene.text('They all exchange looks and then look back at you as Feofan nods. "Okay. Can it wait until we finish at 23:00?"');
      scene.text('You sigh and check the time.');
    } else {
      scene.text('As you walk over to their table, everyone freezes and looks your way. You can feel the anxious looks from the group sitting around a table that has all sorts of geeky stuff spread across it.');
      scene.text('As you\'re about to ask what they\'re doing, Feofan speaks up. "Can we help you?"');
      scene.text('You smile to reassure them that you\'re not here to mess with them. "I just wanted to talk to one of you is all."');
      // TODO-QSP: dynamic text: 'They all exchange looks and then look back at you, Feofan being the one to spea...
      scene.text('They all exchange looks and then look back at you, Feofan being the one to speak up again. "Can it wait until we finish at 23:00?"');
      scene.text('You sigh and check the time.');
    }
    scene.actions([
      { label: 'Wait for game to end', handler: (st: GameState) => {
    (st as any).minut = (22-((st as any).hour ?? 0)) * 60 + 30;
  }, goto: ['nerd_game_night_chat', 'nerd_chat'] },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('Upon entering the room, everyone freezes and looks your way. When they see you, they relax and continue putting away their game materials.');
      // TODO-QSP: dynamic text: As you''re about to ask what they''re doing, Feofan speaks up. "Hey <<$pcs_nickn...
      scene.text(`As you're about to ask what they're doing, Feofan speaks up. "Hey ${((s as any).pcs_nickname ?? '')}! We're done for the night, but you can always join us another time?"`);
      scene.text('You smile and shake your head. "I just wanted to talk to one of you is all."');
      scene.text('They all exchange looks and then look back at you as Feofan nods. "Oh. Okay…" You can tell they\'re all wondering who it is you came to speak with.');
    } else {
      scene.text('As you walk over to their table, everyone freezes and looks your way. You can feel the anxious looks from the group standing around a table packing up all their geeky stuff.');
      scene.text('As you\'re about to ask what they\'re doing, Feofan speaks up. "Can we help you?"');
      scene.text('You smile to reassure them that you\'re not here to mess with them. "I just wanted to talk to one of you is all."');
      scene.text('They all exchange looks and then look back at you, Feofan being the one to speak up again. "Oh. Okay…" You can tell they\'re all wondering who it is you came to speak with.');
    }
    scene.actions([
      { label: 'Chat with someone', goto: ['nerd_game_night_chat', 'nerd_chat'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'set_end_acts':
      enterSetEndActs(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    case 'invite':
      enterInvite(s, scene);
      break;
    case 'game_night1':
      enterGameNight1(s, scene);
      break;
    case 'game_on':
      enterGameOn(s, scene);
      break;
    case 'keep_playing_on1':
      enterKeepPlayingOn1(s, scene);
      break;
    case 'game_night2':
      enterGameNight2(s, scene);
      break;
    case 'keep_playing_on2':
      enterKeepPlayingOn2(s, scene);
      break;
    case 'game_night3':
      enterGameNight3(s, scene);
      break;
    case 'game_night4':
      enterGameNight4(s, scene);
      break;
    case 'three_quests_acts':
      enterThreeQuestsActs(s, scene);
      break;
    case 'woman':
      enterWoman(s, scene);
      break;
    case 'group':
      enterGroup(s, scene);
      break;
    case 'oldman':
      enterOldman(s, scene);
      break;
    case 'inform_them':
      enterInformThem(s, scene);
      break;
    case 'vote_mansion':
      enterVoteMansion(s, scene);
      break;
    case 'game_night5':
      enterGameNight5(s, scene);
      break;
    case 'game_night6':
      enterGameNight6(s, scene);
      break;
    case 'game_night7':
      enterGameNight7(s, scene);
      break;
    case 'game_night8':
      enterGameNight8(s, scene);
      break;
    case 'next_week':
      enterNextWeek(s, scene);
      break;
    case 'vote_necromancer':
      enterVoteNecromancer(s, scene);
      break;
    case 'game_night9':
      enterGameNight9(s, scene);
      break;
    case 'game_night10':
      enterGameNight10(s, scene);
      break;
    case 'game_night11':
      enterGameNight11(s, scene);
      break;
    case 'game_night12':
      enterGameNight12(s, scene);
      break;
    case 'next_week1':
      enterNextWeek1(s, scene);
      break;
    case 'board_games':
      enterBoardGames(s, scene);
      break;
    case 'game_invite_sms_switch':
      enterGameInviteSmsSwitch(s, scene);
      break;
    case 'first_text':
      enterFirstText(s, scene);
      break;
    case 'summer_invite_sms':
      enterSummerInviteSms(s, scene);
      break;
    case 'summer2_invite_sms':
      enterSummer2InviteSms(s, scene);
      break;
    case 'invite_uni':
      enterInviteUni(s, scene);
      break;
    case 'crash_gamenight_uni':
      enterCrashGamenightUni(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nerd_game_night: LocationDef = {
  name: 'nerd_game_night',
  title: 'This will block this story arc.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
