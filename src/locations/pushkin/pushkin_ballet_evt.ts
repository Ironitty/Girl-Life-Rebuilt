import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['letter'] !== 1  &&  ((s as any).balletqw ?? 0)?.['blocker'] !== 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your Mother, Natasha Lebedev</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," your mother calls your name, getting your attention. You''v...
    scene.text(`"${((s as any).pcs_nickname || '')}," your mother calls your name, getting your attention. You've received a letter from the school, and she hands it over to you.`);
    // TODO-QSP: dynamic text: You take the letter from your <<$npc_nickname[''A29'']>>, and your hands start s...
    scene.text(`You take the letter from your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, and your hands start shaking when you see the sender's stamp. You look up.`);
    // TODO-QSP: dynamic text: "Open it, <<$pcs_nickname>>," she encourages you excitedly.
    scene.text(`"Open it, ${((s as any).pcs_nickname || '')}," she encourages you excitedly.`);
    scene.actions([
      { label: 'Open Letter', handler: (st: GameState) => {
    scene.img('images/shared/mail/letter_open3.jpg');
    scene.text('You quickly grab a knife from the counter to open the letter and start to read the contents.');
    scene.text('You skim through the letter to find the information you were hoping for, and let out a scream as you find the paragraph that has awarded you a grant and a spot at the Pushkin Ballet summer school.');
    // TODO-QSP: dynamic text: "Did you get the place, <<$pcs_nickname>>?" your <<$npc_nickname[''A29'']>> asks...
    scene.text(`"Did you get the place, ${((st as any).pcs_nickname || '')}?" your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} asks.`);
    scene.text('"Yes, I\'ve been accepted into the summer ballet school and I have awarded a full grant to cover all the accommodations," you proudly announce.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> pulls you into her arms. "I knew you could do it...
    scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} pulls you into her arms. "I knew you could do it, ${((st as any).pcs_nickname || '')}. Well done!"`);
    scene.text('Hearing the commotion, your stepdad and brother step into the kitchen and ask, "What\'s with all the racket?" You excitedly tell your family the news. "Well done, sis," your brother tells you. Your stepfather gives you a proud smile.');
    // TODO-QSP: dynamic text: "When do you go?" your <<$npc_nickname[''A29'']>> asks.
    scene.text(`"When do you go?" your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} asks.`);
    scene.text('"The first week of July. I\'ve got to catch the school bus from the community center on Sunday, the 3rd of July between 1600 and 1700." You look through the other information, providing details on what you need to pack and other relevant course information.');
    scene.text('<font color="red">Caution! The Ballet School content is <B>on hold</B> and incomplete. Enrolling may cause you to miss out on other time-sensitive content.</font>');
    if (((st as any).letter_delay ?? 0) === 0  ||  ((st as any).daystart ?? 0) >= ((st as any).letter_delay ?? 0) + 7) {
      scene.actions([
        { label: 'Accept the opportunity', handler: (st: GameState) => {
    ((st as any).balletqw = (st as any).balletqw ?? {})['letter'] = 1;
    qspGoto(st, 'kuhrPar', '');
  } },
      ]);
    }
    if ((!((st as any).letter_delay ?? 0))) {
      scene.actions([
        { label: 'Think about the opportunity', handler: (st: GameState) => {
    (st as any).letter_delay = ((st as any).daystart ?? 0);
    qspGoto(st, 'kuhrpar', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Reject the opportunity', handler: (st: GameState) => {
    qspCall(st, 'pushkin_ballet_init', 'cleanup_var');
    ((st as any).balletqw = (st as any).balletqw ?? {})['blocker'] = 1;
    qspGoto(st, 'kuhrpar', '');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).balletqw ?? 0)?.['school'] > 1  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/shared/mail/letter_open3.jpg');
    scene.text('You look at the envelope with a sense of déjà vu when you see the school\'s branding. Then, you sit down at the kitchen table and open it.');
    if (((s as any).balletqw ?? 0)?.['school'] === 5) {
      scene.text('You read and reread the contents, trying to make sense of them. You can\'t believe the news. You jubilantly punch the air and let out a cry of joy.');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> picks up the letter you dropped and reads it. "Y...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} picks up the letter you dropped and reads it. "You've done it, ${((s as any).pcs_nickname || '')}. You're in. I'm proud of you, daughter." It's a rare moment between you and your mother.`);
      // TODO-QSP: dynamic text: "You''ve got to be at the School at 0900 next Sunday for induction. There will b...
      scene.text(`"You've got to be at the School at 0900 next Sunday for induction. There will be a bus waiting at the community center, or you can find the way to the school on your own," your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} says, still reading the contents.`);
      scene.text('You take the letter, and inside there are more documents and forms for you to apply for your Ballet scholarship and funding. It also lists accredited suppliers to provide the necessary clothing and equipment.');
      // TODO-QSP: dynamic text: You get back up, still trying to let the news sink in, and your <<$npc_nickname[...
      scene.text(`You get back up, still trying to let the news sink in, and your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} gives you a big hug and a kiss on the cheek."`);
      // TODO-QSP: dynamic text: "You''ve made it, <<$pcs_nickname>>. All that hard work has paid off." your <<$n...
      scene.text(`"You've made it, ${((s as any).pcs_nickname || '')}. All that hard work has paid off." your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} says proudly.`);
      // TODO-QSP: dynamic text: "No, <<$npc_nickname[''A29'']>>, it''s only the first step but it''s an importan...
      scene.text(`"No, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, it's only the first step but it's an important one" you muse to yourself.`);
      // TODO-QSP: $balletqw['final_report']
    }
    if (((s as any).balletqw ?? 0)?.['school'] === 4) {
      scene.text('You read and reread the contents, trying to make sense of them. You can\'t believe the news. You toss the letter on the table feeling slightly dejected after all the work you\'ve put in that you only just passed.');
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> picks up the letter you tossed down and reads it...
      scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} picks up the letter you tossed down and reads it. "You've done it, ${((s as any).pcs_nickname || '')}. You're in. I'm proud of you, daughter." It's a rare moment between you and your mother.`);
      // TODO-QSP: dynamic text: "You''ve got to be at the School at 0900 next Sunday for induction. There will b...
      scene.text(`"You've got to be at the School at 0900 next Sunday for induction. There will be a bus waiting at the community center, or you can find the way to the school on your own," your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} says, still reading the contents.`);
      scene.text('You take the letter, and inside the envelope there are more documents and forms for you to apply for alternative grants and support programs. It also lists accredited suppliers to provide the necessary clothing and equipment.');
      // TODO-QSP: dynamic text: You get back up, still trying to let the news sink in, and your <<$npc_nickname[...
      scene.text(`You get back up, still trying to let the news sink in, and your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} gives you a big hug and a kiss on the cheek."`);
      // TODO-QSP: dynamic text: "You''ve made it, <<$pcs_nickname>>. All that hard work has paid off." your <<$n...
      scene.text(`"You've made it, ${((s as any).pcs_nickname || '')}. All that hard work has paid off." your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} says proudly.`);
      // TODO-QSP: dynamic text: "No, <<$npc_nickname[''A29'']>>, it''s only the first step but it''s an importan...
      scene.text(`"No, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, it's only the first step but it's an important one" you muse to yourself wondering how you are going to pay for the school.`);
      // TODO-QSP: $balletqw['final_report']
    }
    if (((s as any).balletqw ?? 0)?.['school'] === 3) {
    }
    if (((s as any).balletqw ?? 0)?.['school'] <= 1) {
      // TODO-QSP: $balletqw['final_report']
    }
    qspCall(s, 'array', 'remove_element', 'balletqw', 'letter');
    qspCall(s, 'array', 'remove_element', 'balletqw', 'final_report');
    scene.actions([
      { label: 'Continue your day.', handler: (st: GameState) => {
    // TODO-QSP: act 'Continue': gt 'kuhrPar'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckStarletsEvt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer'  &&  ((s as any).starlets_on ?? 0) === 1  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1  &&  ((s as any).daystart ?? 0) <= 185  &&  ((s as any).hour ?? 0) >= 15) {
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Tell Albina about the letter', goto: ['pushkin_ballet_evt', 'starlets'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStarlets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['letter'] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A23'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A23'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    // TODO-QSP: dynamic text: "Albina, I need to have a talk with you." She turns towards you with a frown, "W...
    scene.text(`"Albina, I need to have a talk with you." She turns towards you with a frown, "What's wrong, ${((s as any).pcs_nickname || '')}." You wince at her frosty tone; you know she's a hard taskmaster with an even sharper tongue.`);
    scene.text('"I want to thank yo…", Albina cuts in, "What is it, you haven\'t been knocked up or want to quit, do you?", she demands impatiently.');
    scene.text('"No, no", you hastily reply holding up your hands, "Nothing like that! It\'s just that I\'ve been accepted into the Pushkin Ballet School for assessment."');
    scene.text('Albina looks at you for a long moment then gives one of her rare smiles, "That\'s great and all, but what does that mean for Starlets?"');
    scene.text('"I need to attend their residential school for a week, so I will not be able attend your training for Starlets and I\'m not sure what is going to happen after the week is over."');
    scene.text('Albina stands staring at you with a frown, "Fine. I know you\'ve worked hard for this, ", she pauses, "but don\'t expect to get back into the Starlets when you\'re finished. I need 100% commitment from my dancers. When do you leave?"');
    scene.text('"I\'ll be leaving in the first weekend in July. Thank you for being understanding," you say with a sigh of relief, realizing you had been holding your breath. You\'re relieved that Albina hasn\'t started one of her famous tirades against you.');
    scene.text('As you are about to leave Albina calls out, "Good luck!" before turning back to her dancers.');
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['StarletsJoined'] = (-1);
    qspCall(s, 'calendar', 'pack', 'remove', 'starlets');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPregnant(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDancebreak(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterResEvents(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'introductions') {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You enter the communal area and are greeted by a gaggle of excited girls who imm...
    scene.text(`You enter the communal area and are greeted by a gaggle of excited girls who immediately call out and surround you. You spot a small group sitting down to take a selfie, as well as Madame ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''} watching over the proceedings.`);
    (s as any).i_ballet = 274;
    (s as any).i_npc_end = 282;
    (s as any).grid_count = 0;
    (s as any).grid_text = '<center><table cellspacing="3">';
    // TODO-QSP: :jmp_ballet_intro
    // TODO-QSP: $grid_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>><tr><td align="center"><a href="exec: ...
    (s as any).grid_count = ((s as any).grid_count ?? 0) + (1);
    if (((s as any).grid_count ?? 0) === 5) {
      // TODO-QSP: $grid_text += '</tr><tr>'
      (s as any).grid_count = 0;
    }
    (s as any).i_ballet = ((s as any).i_ballet ?? 0) + (1);
    if (((s as any).i_ballet ?? 0) <= ((s as any).i_npc_end ?? 0)) {
      // TODO-QSP: jump 'jmp_ballet_intro'
    }
    // TODO-QSP: $grid_text += '</table></center>'
    // TODO-QSP: dynamic text: <<$grid_text>>
    scene.text(`${((s as any).grid_text || '')}`);
    ((s as any).balletqw = (s as any).balletqw ?? {})['res_mg'] = 1;
    scene.actions([
      { label: 'Leave communal room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_res', 'hallway'] },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'kitchen_birthday') {
    ((s as any).birthday_party = (s as any).birthday_party ?? {})['events'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_img_path ?? 0)?.['A279'] ?? ''}/279.jpg`);
    // TODO-QSP: dynamic text: You step into the kitchen, looking for something to eat, and see <<$npc_firstnam...
    scene.text(`You step into the kitchen, looking for something to eat, and see ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} organizing the food for the party. A delightful aroma wafts from the oven.`);
    // TODO-QSP: dynamic text: "Do you need any help, <<$npc_firstname[''A279'']>>?" you ask.
    scene.text(`"Do you need any help, ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}?" you ask.`);
    // TODO-QSP: dynamic text: "No, <<$pcs_nickname>>, all''s fine. I''m just finishing off the last of the foo...
    scene.text(`"No, ${((s as any).pcs_nickname || '')}, all's fine. I'm just finishing off the last of the food to be baked."`);
    scene.text('"Gasha is going to be overwhelmed with all this! Have you asked everyone to come?" you inquire.');
    // TODO-QSP: dynamic text: "Yeah, well, everyone except <<$npc_firstname[''A276'']>>. I''ve asked my mum to...
    scene.text(`"Yeah, well, everyone except ${((s as any).npc_firstname ?? 0)?.['A276'] ?? ''}. I've asked my mum to keep an eye on her tonight. It'd be like her to do something spiteful."`);
    scene.text('"Why doesn\'t she get kicked out? We were told to be on our best behaviour when we arrived here."');
    scene.text('"Contacts and money, sadly. She comes from one of the unmentionable families."');
    scene.text('"Oh," you reply, realizing that this is a touchy topic. You start to collect plates and glasses to take through to the communal area.');
    scene.actions([
      { label: 'Help out', handler: (st: GameState) => {
    // TODO-QSP: gt 'pushkin_ballet_evt', 'res_events', 'birthday' , 'prep'
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'birthday') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'card') {
      ((s as any).birthday_party = (s as any).birthday_party ?? {})['events'] = 1;
      scene.img('images/locations/pushkin/ballet_residence/gasha_card.jpg');
      // TODO-QSP: dynamic text: You enter the halls after classes, and <<$npc_firstname[''A279'']>> sees you, gr...
      scene.text(`You enter the halls after classes, and ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} sees you, grabbing your arm and looking around. "${((s as any).pcs_nickname || '')}, do you have a moment?"`);
      scene.text('"Sure?" you reply.');
      // TODO-QSP: dynamic text: "It''s <<$npc_firstname[''A280'']>>''s birthday today, and I''ve got her a card....
      scene.text(`"It's ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}'s birthday today, and I've got her a card. Can you sign it, please, to cheer her up?"`);
      // TODO-QSP: dynamic text: "No problem, <<$npc_firstname[''A279'']>>. What''s wrong with her?"
      scene.text(`"No problem, ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}. What's wrong with her?"`);
      scene.text('"She\'s not used to city life and adapting to this school is challenging. She\'s homesick, not being there for her birthday. My mother is baking a cake for her, and I\'m about to prepare some buffet food in the kitchen for a little party later."');
      scene.text('"Where is she? She can\'t possibly not notice all of this bustle."');
      // TODO-QSP: dynamic text: "Don''t worry about it. <<$npc_firstname[''A277'']>> is taking her out to Pushki...
      scene.text(`"Don't worry about it. ${((s as any).npc_firstname ?? 0)?.['A277'] ?? ''} is taking her out to Pushkin under the pretense of showing her the local sights."`);
      // TODO-QSP: dynamic text: You raise your eyebrow; <<$npc_firstname[''A277'']>> would have been the last pe...
      scene.text(`You raise your eyebrow; ${((s as any).npc_firstname ?? 0)?.['A277'] ?? ''} would have been the last person you'd have thought would help, being so introverted and rarely saying anything. "Yes, she surprised me as well when I asked her. She's also looking forward to the surprise party planned."`);
      // TODO-QSP: dynamic text: <<$npc_firstname[''A279'']>> hands you the card and a pen to sign, and you quick...
      scene.text(`${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} hands you the card and a pen to sign, and you quickly scribble your wishes and name into it. You briefly consider putting some cash in it as a present.`);
      scene.actions([
        { label: 'Gift', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).birthday_party = (st as any).birthday_party ?? {})['events'] = 2;
      scene.img(`${((st as any).npc_img_path ?? 0)?.['A279'] ?? ''}/279.jpg`);
      qspCall(st, 'money', 'pay', 500);
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'npc_relationship', 'modify', 'A279', 'like');
      qspCall(st, 'npc_relationship', 'modify', 'A280', 'like');
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: You dig out your purse and put ' + $func('money', 'string_price', 500) + ' insid...
      scene.text(`You dig out your purse and put 500₽ inside the card, and hand it back to ${((st as any).npc_firstname ?? 0)?.['A279'] ?? ''}. She notices you've put something inside and opens the card to find the money.`);
      // TODO-QSP: dynamic text: "Why <<$pcs_nickname>>? I''m aware your parents are poor, and I didn''t expect y...
      scene.text(`"Why ${((st as any).pcs_nickname || '')}? I'm aware your parents are poor, and I didn't expect you to give her a gift," she says with a surprised voice.`);
      // TODO-QSP: dynamic text: "It''s fine, <<$npc_firstname[''A279'']>>. Tell her to buy a treat to cheer hers...
      scene.text(`"It's fine, ${((st as any).npc_firstname ?? 0)?.['A279'] ?? ''}. Tell her to buy a treat to cheer herself up. Just don't mention it's from me, please. How do you know I'm from a poor family?" you ask, frowning.`);
      scene.text('"She\'ll love the gift, and I know because my mother is given a list of students to help out if they don\'t have the necessary items, whether it\'s tampons, makeup, or other essentials. She\'s here to support them."');
      scene.text('"The school tries to think of everything, doesn\'t it?"');
      scene.text('"It tries. It helped me adapt to the life here when my mother got the job. The first year was brutally tough at the local school with the kids bullying me for being a villager. The ballet school became my refuge."');
      scene.text('"This is why you\'re organizing the party?"');
      // TODO-QSP: dynamic text: "Yes, I want to cheer her up, and your present is going to go a long way toward ...
      scene.text('"Yes, I want to cheer her up, and your present is going to go a long way toward showing how welcome she is here. I need to get on with preparing the food, but let me say thank you so much for this." With that, she gives you a quick hug and a warm smile, then hurries away to the kitchen. As she leaves, she shouts out, "Remember the communal room at 18:30. Don\'t miss it!", she shouts."');
      scene.actions([
        { label: 'Follow her into the kitchen', goto: ['pushkin_ballet_evt', 'res_events', 'kitchen_birthday'] },
        { label: 'Return to the hallway', goto: ['pushkin_ballet_res', 'hallway'] },
      ]);
    }
  } },
        { label: 'Hand card back', handler: (st: GameState) => {
    ((st as any).birthday_party = (st as any).birthday_party ?? {})['events'] = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img(`${((st as any).npc_img_path ?? 0)?.['A279'] ?? ''}/279.jpg`);
    // TODO-QSP: dynamic text: You hand the card back to <<$npc_firstname[''A279'']>> after signing it, and she...
    scene.text(`You hand the card back to ${((st as any).npc_firstname ?? 0)?.['A279'] ?? ''} after signing it, and she looks at you. "Thank you, ${((st as any).pcs_nickname || '')}, hopefully this helps her feel welcome here. She's been struggling to cope with being away from home for the first time."`);
    // TODO-QSP: dynamic text: "Think nothing of it, <<$npc_firstname[''A279'']>>. If it makes her feel better,...
    scene.text(`"Think nothing of it, ${((st as any).npc_firstname ?? 0)?.['A279'] ?? ''}. If it makes her feel better, that's great," you say.`);
    // TODO-QSP: dynamic text: "Yeah, look, I need to start cooking the food for tonight. Will you come to the ...
    scene.text('"Yeah, look, I need to start cooking the food for tonight. Will you come to the communal room after 18:30?" You nod your head in a non-committal way as she leaves.');
    scene.actions([
      { label: 'Return to the hallway', goto: ['pushkin_ballet_res', 'hallway'] },
    ]);
  } },
      ]);
    } else {
      if (Number((s as any).locArgs?.[2] ?? 0) === 'prep') {
        ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Communal Room';
        scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/communal.jpg');
        qspCall(s, 'core_library', 'stage_title');
        (s as any).minut = ((s as any).minut ?? 0) + 20;
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: You help <<$npc_firstname[''A279'']>> with the plates and glasses in the common ...
        scene.text(`You help ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} with the plates and glasses in the common room giving you a chance to gossip with her. "How was your village life when you grew up?"`);
        // TODO-QSP: dynamic text: <<$npc_firstname[''A279'']>> looks at you for a moment pausing to gather her tho...
        scene.text(`${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} looks at you for a moment pausing to gather her thoughts. "It was tough, our father never returned from the war and the Russian Government was supposed to help us but instead we got nothing. We was just a poor family in a small backwater village and whatever compensation we was due to probably stolen by a corrupt official."`);
        // TODO-QSP: dynamic text: "Sorry hear that <<$npc_firstname[''A279'']>>", <<$npc_firstname[''A279'']>> hol...
        scene.text(`"Sorry hear that ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}", ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} holds up her hand up, "I don't need sympathy ${((s as any).pcs_nickname || '')}, I learned to deal with this years ago, like many here dancing is our refuge and passion in our lives. I barely knew my father and mother never found anyone else even here in the city"`);
        // TODO-QSP: dynamic text: "You sound wistful?", <<$npc_firstname[''A279'']>> looks at you sharply, and giv...
        scene.text(`"You sound wistful?", ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} looks at you sharply, and gives a small laugh, "Mother would kill me if I tried to be a matchmaker her, all the dancers come through here are her children. They more than make up for the lack of a husband in her life, and it allows her to guide and help them in whatever way she can." `);
        // TODO-QSP: dynamic text: "She''s our mother hen then?", <<$npc_firstname[''A279'']>> giggles, "Whatever y...
        scene.text(`"She's our mother hen then?", ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} giggles, "Whatever you do ${((s as any).pcs_nickname || '')}, never and I mean never say that in front of mother."`);
        // TODO-QSP: dynamic text: <<$npc_firstname[''A279'']>> vanishes into the kitchen to get more food and item...
        scene.text(`${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} vanishes into the kitchen to get more food and items for the upcoming party leaving you wondering what she meant but you shake your head as you follow her to continue setting out things for the upcoming party.`);
        scene.actions([
          { label: 'Leave room', goto: ['pushkin_ballet_res', 'hallway'] },
        ]);
      } else {
        if (Number((s as any).locArgs?.[2] ?? 0) === 'party') {
          ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Communal Room';
          scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/gasha_birthday.jpg');
          qspCall(s, 'core_library', 'stage_title');
          (s as any).minut = ((s as any).minut ?? 0) + 90;
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: You enter the room, and you are grabbed by the arm by <<$npc_firstname[''A279'']...
          scene.text(`You enter the room, and you are grabbed by the arm by ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} and dragged to the side. She puts a finger to her lips to tell you stay quiet you look around see the girls for your own class with you as ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} slips out of the room. A few minutes later she is leading ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} with her hands covering her eyes.`);
          // TODO-QSP: dynamic text: “What''s going on <<$npc_firstname[''A279'']>>?” <<$npc_firstname[''A280'']>> so...
          scene.text(`“What's going on ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}?” ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} sounds nervous.`);
          // TODO-QSP: dynamic text: “It''s a little something for you podruzhka.”, she lifts her hands away from <<$...
          scene.text(`“It's a little something for you podruzhka.”, she lifts her hands away from ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}'s eyes and ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} lets out a gasp of surprise and tries to turn to escape out of the room. `);
          // TODO-QSP: dynamic text: “Stay <<$npc_firstname[''A280'']>>, we''re here to celebrate your birthday with ...
          scene.text(`“Stay ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}, we're here to celebrate your birthday with you.” You see tears forming around her eyes and ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} gives her a hug to hide them from the rest of the girls.`);
          // TODO-QSP: dynamic text: “Thank you…," you hear her murmur into <<$npc_firstname[''A279'']>>''s shoulder....
          scene.text(`“Thank you…," you hear her murmur into ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}'s shoulder. After a few moments, she composes herself and turns to face her classmates. “Thank you all for coming,” she calls out, before coming around to give all the girls a hug as a thank you. `);
          // TODO-QSP: dynamic text: “Thank you <<$pcs_nickname>> for being here”, <<$npc_firstname[''A280'']>> says ...
          scene.text(`“Thank you ${((s as any).pcs_nickname || '')} for being here”, ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} says as she hugs you.`);
          scene.text('“Can\'t miss the excuse for a party can we?”, you say jokingly.');
          scene.text('“No, and this is amazing. Did you help?”');
          // TODO-QSP: dynamic text: “A little but most of it''s <<$npc_firstname[''A279'']>>''s handiwork, I think s...
          scene.text(`“A little but most of it's ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}'s handiwork, I think she's been planning this for weeks to surprise you.”`);
          // TODO-QSP: dynamic text: “She succeeded, she''s even got some of my favourite snacks.” She blushes and lo...
          scene.text(`“She succeeded, she's even got some of my favourite snacks.” She blushes and looks guilty as she mentions this, looking at the Medovik cake taking centre stage, “${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} is an amazing baker and confectionist. She's even made some zefir, some pryaniki from a family secret recipe, and if you're wanting to keep calories down, there's one of her favourites: postila.” `);
          // TODO-QSP: dynamic text: You watch with amusement as you see <<$npc_firstname[''A280'']>> itching to try ...
          scene.text(`You watch with amusement as you see ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} itching to try each of the treats. You guide her across, eager to try them all yourself. `);
          // TODO-QSP: dynamic text: “See, I told you they were delicious!” <<$npc_firstname[''A280'']>> says with a ...
          scene.text(`“See, I told you they were delicious!” ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} says with a grin, and you see the girls all gathering around the food.`);
          // TODO-QSP: dynamic text: “Yes, and I suspect that <<$npc_firstname[''A284'']>> is going to burn all the c...
          scene.text(`“Yes, and I suspect that ${((s as any).npc_firstname ?? 0)?.['A284'] ?? ''} is going to burn all the calories off with her lessons this week,” you hear ${((s as any).npc_firstname ?? 0)?.['A278'] ?? ''} say as she tries some of ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}'s baking. “Well I know who's got a career as a baker after this if she doesn't make it this week.” She ribs ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}, who bursts out laughing in agreement. “Sure, and I'll get you to model for me.”`);
          scene.text('“Anytime, as long you pay me in cakes!” The banter continues between them for a bit as you wander off to talk to the other girls.');
          scene.actions([
            { label: 'Leave party', handler: (st: GameState) => {
    // TODO-QSP: birthday_party['events'] = 5
  }, goto: ['pushkin_ballet_res', 'hallway'] },
          ]);
        } else {
          scene.text('<center><b>Debug:</b></center>');
        }
      }
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'homesick') {
    // TODO-QSP: dynamic text: You enter the communal area and see <<$npc_firstname[''A280'']>> holding a textb...
    scene.text(`You enter the communal area and see ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} holding a textbook with a sad expression. "Hello ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}, everything okay?" you ask.`);
    // TODO-QSP: dynamic text: She looks up to you from the book, "I''m okay, <<$pcs_nickname>>, I''m just not ...
    scene.text(`She looks up to you from the book, "I'm okay, ${((s as any).pcs_nickname || '')}, I'm just not used to being away from home or being in the city."`);
    // TODO-QSP: dynamic text: "You''re a friend of <<$npc_firstname[''A279'']>>?" you ask her, trying to distr...
    scene.text(`"You're a friend of ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}?" you ask her, trying to distract her.`);
    scene.text('"Yeah, we grew up in the same village and attended the same school until a few years ago when her mother got a job here. We\'ve kept in touch, but it\'s been difficult, being stuck in the village."');
    scene.text('"I know what village life is like," you pause to remember your time in Gadukino, "I spent my summers in Gadukino with my grandparents."');
    // TODO-QSP: dynamic text: <<$npc_firstname[''A280'']>> looks at you with more interest, and you start to g...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} looks at you with more interest, and you start to gossip and trade stories about your lives in rural Russia. After a while, she's laughing at your own escapades and local mishaps.`);
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>, for telling me your stories and cheering me up. I...
    scene.text(`"Thank you, ${((s as any).pcs_nickname || '')}, for telling me your stories and cheering me up. I'm glad I'm not the only one!" Gasha says with a broad grin on her face.`);
    // TODO-QSP: dynamic text: "Anytime, <<$npc_firstname[''A280'']>>, if you''re feeling down, let me know."
    scene.text(`"Anytime, ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}, if you're feeling down, let me know."`);
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'tanis_bully') {
    scene.text('WIP - tbc');
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'tanis_gasha') {
    scene.text('WIP - tbc');
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'tanis_showdown') {
    scene.text('WIP - tbc');
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'kima_gossip') {
    scene.text('WIP - tbc');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarreExercise(s: GameState, scene: SceneBuilder): void {
  ((s as any).ballet_homework = (s as any).ballet_homework ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_homework[String((s as any).week ?? 0)] ?? 0) + (1);
  ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['homework'] = ((s as any).ballet_grade_score['homework'] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)]);
  qspCall(s, 'exercise', 'tier1', 30, 'agil', 'stren');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/ballet_residence/residence_barre_single.jpg');
  scene.text('You leave your bedroom and head to the exercise room. You see some barres already set up for use and spend the next while performing some light stretching exercises and practicing your forms.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterIntro_274(s: GameState, scene: SceneBuilder): void {
  ((s as any).mayaqw = (s as any).mayaqw ?? {})['path'] = 1;
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A274'] ?? ''}/274-1.jpg`);
  // TODO-QSP: dynamic text: You walk over to a tall willowly blonde girl, "Hi I''m <<$pcs_nickname>>". The g...
  scene.text(`You walk over to a tall willowly blonde girl, "Hi I'm ${((s as any).pcs_nickname || '')}". The girl gives you a warm smile, "I'm ${((s as any).npc_firstname ?? 0)?.['A274'] ?? ''} pleased to meet you. Where you from?" 'Pavlosk' you reply, 'Yourself?'`);
  // TODO-QSP: dynamic text: "I live Pushkin now but from Moscow originally.", <<$npc_firstname[''A274'']>> r...
  scene.text(`"I live Pushkin now but from Moscow originally.", ${((s as any).npc_firstname ?? 0)?.['A274'] ?? ''} replles before another girl jumps in taking her attention.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_275(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A275'] ?? ''}/275.jpg`);
  // TODO-QSP: dynamic text: You notice girl writing in a small book. She notices you looking at it, and make...
  scene.text(`You notice girl writing in a small book. She notices you looking at it, and makes a small attempt to try and avoid you. "Yes?", she asks, "I'm just introducing myself, ${((s as any).pcs_nickname || '')}". "Ah you're the dancer from Pavlovsk." she said, looking at you critically. `);
  scene.text('"Yes, how did you know?", you ask puzzled but before she ignores you and goes back to writing in the book.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_276(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A276'] ?? ''}/276.jpg`);
  // TODO-QSP: dynamic text: Glancing around the room you spot another girl and quickly approach her, "Hi I''...
  scene.text(`Glancing around the room you spot another girl and quickly approach her, "Hi I'm ${((s as any).pcs_nickname || '')}". The girl gives you a wary look, "Hello, I suppose I should introduce myself since it is obvious you don't know me. I'm ${((s as any).npc_firstname ?? 0)?.['A276'] ?? ''}. I am one of the best dancers in Russia.", she looks at you coldly, expecting you to know her. Seeing your blank look, she looks disdainfully at you before walking off.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_277(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A277'] ?? ''}/277.jpg`);
  scene.text('As you turn from your last conversation you glance toward the entrance to the communal room and notice a young girl nervously watching girls having fun. ');
  scene.text('As you approach you notice she starts to look at the door more frequently and you think she is about to bolt from the room. You hold up your hands to try and calm her and give what you hope is a warm smile.');
  // TODO-QSP: dynamic text: "I''m <<$pcs_nickname>>, are you alright?", you ask concerned about her behaviou...
  scene.text(`"I'm ${((s as any).pcs_nickname || '')}, are you alright?", you ask concerned about her behaviour.`);
  // TODO-QSP: dynamic text: "I am <<$npc_firstname[''A277'']>>.", her answer is short and abrupt in a quiet ...
  scene.text(`"I am ${((s as any).npc_firstname ?? 0)?.['A277'] ?? ''}.", her answer is short and abrupt in a quiet voice you barely hear over the noise in the room.`);
  scene.text('"Are you looking forward to the classes this week?", you ask trying to engage her more.');
  // TODO-QSP: dynamic text: She frowns at you, her eyes betraying her nervousness. "Yes, I suppose I am. Tha...
  scene.text(`She frowns at you, her eyes betraying her nervousness. "Yes, I suppose I am. Thank you for your concern.", and as she says this she bolts from the room leaving you standing there dumbfounded. Then a few moments later you see Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} quickly follow her out of the room.`);
  // TODO-QSP: dynamic text: You briefly think about following them to see what is wrong with <<$npc_firstnam...
  scene.text(`You briefly think about following them to see what is wrong with ${((s as any).npc_firstname ?? 0)?.['A277'] ?? ''} but instead decide to give her privacy.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_278(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A278'] ?? ''}/278.jpg`);
  scene.text('A gap appears in the crowd of girls and you spot a tall, stunningly beautiful girl at the drinks table and you make your way over to her.');
  // TODO-QSP: dynamic text: "Hi!", you call out as you approach her, "I''m <<$pcs_nickname>>"
  scene.text(`"Hi!", you call out as you approach her, "I'm ${((s as any).pcs_nickname || '')}"`);
  // TODO-QSP: dynamic text: The girl gives you a warm smile as she gracefully turns, her eyes sparkle as she...
  scene.text(`The girl gives you a warm smile as she gracefully turns, her eyes sparkle as she greets you in a warm and entrancing voice, "Hi I'm ${((s as any).pcs_nickname || '')}", I'm ${((s as any).npc_firstname ?? 0)?.['A278'] ?? ''}. Such a pleasure to meet you.`);
  scene.text('"Are you one of the students?", you ask noting she\'s older than the rest of the students before biting back your words.');
  // TODO-QSP: dynamic text: "Don''t worry <<$pcs_nickname>>, I am used to that reaction.", she gives you a s...
  scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, I am used to that reaction.", she gives you a smile to reassure you, "I am a late bloomer as it were, and I've been studying as a Thespian performer and I have been invited to this class to expand my abilities."`);
  scene.text('"You\'re an actress? Wow, have you starred in any roles?", you ask her excitedly.');
  scene.text('"Several, mostly Shakespearian roles as that is my love.", she closes her eyes briefly lost in her memories, "I enjoy playing Titania in A Midsummer Night\'s Dream"');
  scene.text('"Titania, Why?"');
  scene.text('"Because she is subject to a cruel joke, but throughout all the play she remains steadfast to her beliefs and has a deep inner strength much like my faith in God. She has many admirable qualities despite being married to a fool and an idiot."');
  scene.text('"I have been an actress since I was four and have performed in several shows. I was forced into ballet by my parents because they smelt money.", she frowns at that, "But here I am gossiping about myself what about you?"');
  scene.text('"I\'ve always wanted to be a ballerina, but it\' been difficult. My school had evening classes that I have been taking and they gave me other opportunities to perform and train in the local community centre."');
  // TODO-QSP: dynamic text: "So this is a great opportunity for you <<$pcs_nickname>>? I wish you all the be...
  scene.text(`"So this is a great opportunity for you ${((s as any).pcs_nickname || '')}? I wish you all the best. Don't fear of any competition from me, I'm more interested in pursuing my career as an actress then a ballerina. I want to become famous and go to Hollywood."`);
  scene.text('"Then why are you here?" You ask confused."');
  // TODO-QSP: dynamic text: "My agent said it would be a great experience for an upcoming role about a balle...
  scene.text(`"My agent said it would be a great experience for an upcoming role about a ballerina. Oh, Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} is staring at us. I think we need to be more sociable!", she takes your hand gracefully, "I know what it is like to struggle ${((s as any).pcs_nickname || '')}, and by the will of God, I really do wish you all the best and you achieve your dreams."`);
  // TODO-QSP: dynamic text: "With this <<$npc_firstname[''A278'']>> leaves you at the table staring after he...
  scene.text(`"With this ${((s as any).npc_firstname ?? 0)?.['A278'] ?? ''} leaves you at the table staring after her as she navigates her way through the crowd being socialable, you can't help but wonder at how effortlessly she manages to captivate the people she speaks to.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_279(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A279'] ?? ''}/279.jpg`);
  // TODO-QSP: dynamic text: You see a girl talking animatedly to Madam <<$npc_lastname[''A284'']>> as you ap...
  scene.text(`You see a girl talking animatedly to Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} as you approach them, Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} looks at you sharply before she leaves the girl with a glare.`);
  // TODO-QSP: dynamic text: "Hello, you must be <<$pcs_nickname>>", she says with a cheeky grin."
  scene.text(`"Hello, you must be ${((s as any).pcs_nickname || '')}", she says with a cheeky grin."`);
  scene.text('"Yes, how did you know?"');
  // TODO-QSP: dynamic text: "It''s not really a secret at the school that people are saying you''re the next...
  scene.text(`"It's not really a secret at the school that people are saying you're the next upcoming prodigy of Pavlovsk and the first in ages to attend here. You're quite the subject of the school gossip but I am being so remiss I'm ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}"`);
  // TODO-QSP: dynamic text: "I''m being spoken about?", you reply surprised at being recognised, "I saw you ...
  scene.text(`"I'm being spoken about?", you reply surprised at being recognised, "I saw you talking to Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''}, hope you're not in trouble?" `);
  // TODO-QSP: dynamic text: "No, nothing of the sort.", she sighs, "Just one of those things", she says with...
  scene.text(`"No, nothing of the sort.", she sighs, "Just one of those things", she says with a grimace, "Howvever, I do wish you well and gain one of the sponsored positions this year. If you need help anytime talk to Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''}, and she will do what she can to help you."`);
  // TODO-QSP: dynamic text: "Thank you, I will keeep that in mind. Madam <<$npc_lastname[''A284'']>> seems i...
  scene.text(`"Thank you, I will keeep that in mind. Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} seems intimidating."`);
  // TODO-QSP: dynamic text: "More than you realise <<$pcs_nickname>>", more than you realise.", She gives a ...
  scene.text(`"More than you realise ${((s as any).pcs_nickname || '')}", more than you realise.", She gives a small laugh, "however I can't monopolise all your time tonight, we need to meet the other girls! She gives you friendly laugh and another cheeky grin as she twirls into the crowd leaving you in bewilderment staring after her.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_280(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A280'] ?? ''}/280.jpg`);
  // TODO-QSP: dynamic text: You see a young girl sitting alone in the corner and make your way through the c...
  scene.text(`You see a young girl sitting alone in the corner and make your way through the crowd to where she is sitting. She looks up at you, surprised that you approached her and looks at you quizzically. "Did ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} ask you to talk to me?"`);
  // TODO-QSP: dynamic text: "No", you reply, "just saw you alone and wanted to meet you. I''m <<$pcs_nicknam...
  scene.text(`"No", you reply, "just saw you alone and wanted to meet you. I'm ${((s as any).pcs_nickname || '')}", the girl gives you a shy smile, "I'm ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} pleased to meet you!"`);
  scene.text('"Likewise, are you looking forward to this week?", you ask.');
  // TODO-QSP: dynamic text: "Not really, but I have <<$npc_firstname[''A279'']>> supporting me." She looks a...
  scene.text(`"Not really, but I have ${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''} supporting me." She looks across to the room at one of the other girls."`);
  // TODO-QSP: dynamic text: "<<$npc_firstname[''A279'']>>?", you ask.
  scene.text(`"${((s as any).npc_firstname ?? 0)?.['A279'] ?? ''}?", you ask.`);
  // TODO-QSP: dynamic text: "Yeah, <<$npc_firstname[''A286'']>>''s daughter. You didn''t know?
  scene.text(`"Yeah, ${((s as any).npc_firstname ?? 0)?.['A286'] ?? ''}'s daughter. You didn't know?`);
  scene.text('"No, I can barely remember who\'s who tonight."');
  // TODO-QSP: dynamic text: "<<$npc_firstname[''A280'']>> gives another of her shy smiles, "I know what you ...
  scene.text(`"${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} gives another of her shy smiles, "I know what you mean.", she looks around the room at all the girls gathered at the meet and greet.`);
  scene.text('"It\'s been nice to meet you, and I wish you all the best for this week", as you take your leave.');
  // TODO-QSP: dynamic text: "Likewise <<$pcs_nickname>>, I hope we get a chance to dance together."
  scene.text(`"Likewise ${((s as any).pcs_nickname || '')}, I hope we get a chance to dance together."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_281(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A281'] ?? ''}/281.jpg`);
  // TODO-QSP: dynamic text: In the corner of the room you see a pair of twins bickering with each other. Ove...
  scene.text(`In the corner of the room you see a pair of twins bickering with each other. Over the clamour of the room you can't hear what is being said. As you start to move closer to see what the commotion is, a voice says "I wouldn't interfere with the ${((s as any).npc_lastname ?? 0)?.['A281'] ?? ''} twins". You turn around to see who spoke, but then you notice Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} walking over to them and you decide to stay away. `);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterIntro_282(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A282'] ?? ''}/282.jpg`);
  // TODO-QSP: dynamic text: In the corner of the room you see a pair of twins bickering with each other. Ove...
  scene.text(`In the corner of the room you see a pair of twins bickering with each other. Over the clamour of the room you can't hear what is being said. As you start to move closer to see what the commotion is, a voice says "I wouldn't interfere with the ${((s as any).npc_lastname ?? 0)?.['A281'] ?? ''} twins". You turn round to see who spoke, but then you notice Madam ${((s as any).npc_lastname ?? 0)?.['A284'] ?? ''} walking over to them and you decide to stay away. `);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pushkin_ballet_evt', 'res_events', 'introductions'] },
  ]);
  scene.build();
}

function enterFirstperformance(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterPerformances(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSocialnight(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRudolphqw(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterResEventsArray(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '0') {
    ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'The Chess Match';
    scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_events/chess.jpg');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You enter the communal room you see the twins <<$npc_firstname[''A281'']>> and <...
    scene.text(`You enter the communal room you see the twins ${((s as any).npc_firstname ?? 0)?.['A281'] ?? ''} and ${((s as any).npc_firstname ?? 0)?.['A282'] ?? ''} sitting in the corner intently staring at a chess board. You notice the game has just started and a few of the other residents had settled down to watch them.`);
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === '1') {
      ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'TV Night';
      scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_events/chess.jpg');
      // TODO-QSP: dynamic text: You enter the common room and see <<$npc_firstname[''A280'']>> relaxing in front...
      scene.text(`You enter the common room and see ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} relaxing in front of the TV watching a ballet rehearsal. She is nibbling a small plate of fruit pieces and looks towards you as you enter.`);
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === '2') {
        scene.text('You enter the Conservatory and see some girls practicing the various ballet forms and stretches. At the back is a pair of girls from another class performing barre exercises.');
        // TODO-QSP: dynamic text: Hi, you come to join us?", one of the girls asks, whilst the other girl says, "S...
        scene.text(`Hi, you come to join us?", one of the girls asks, whilst the other girl says, "She's in ${((s as any).npc_firstname ?? 0)?.['A286'] ?? ''}'s class", her eyes light up, "can you help teach us? We'd love to learn from you!"`);
        scene.actions([
          { label: 'Practice with the girls', handler: (st: GameState) => {
    ((st as any).ballet_homework = (st as any).ballet_homework ?? {})[String((st as any).week ?? 0)] = ((st as any).ballet_homework[String((st as any).week ?? 0)] ?? 0) + (1);
    ((st as any).ballet_grade_score = (st as any).ballet_grade_score ?? {})['homework'] = ((st as any).ballet_grade_score['homework'] ?? 0) + (((st as any).ballet_homework ?? 0)?.[String((st as any).week ?? 0)]);
    qspCall(st, 'exercise', 'tier1', 60, 'agil', 'stren');
    scene.text('You spend an hour helping the girls through the various forms, giving tips and advice. At the end of it they thank you ethuastically for your time and teaching.');
    // TODO-QSP: dynamic text: You feel teaching the girls has deepened your own understanding and appreciation...
    scene.text(`You feel teaching the girls has deepened your own understanding and appreciation for ${((st as any).npc_firstname ?? 0)?.['A286'] ?? ''}'s own abilities.`);
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  } },
          { label: 'Decline to help', handler: (st: GameState) => {
    scene.text('Sorry, I was looking for someone do you know where <random name> is?');
    scene.text('The girls shake their heads disappointed that you couldn\'t help them.');
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  } },
        ]);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === '3') {
          scene.text('WIP - tbc');
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === '4') {
            ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'TV Night';
            // TODO-QSP: dynamic text: You enter the communal room and see <<$npc_firstname[''A280'']>> at her favorite...
            scene.text(`You enter the communal room and see ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} at her favorite place watching TV. She looks at you nervously as you enter and you ask if you could join her.`);
            scene.text('"Are you going to bully me too?", she asks, her voice trembling..');
            // TODO-QSP: dynamic text: "No why?", you ask. <<$npc_firstname[''A280'']>> looks nervously at the door, "S...
            scene.text(`"No why?", you ask. ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} looks nervously at the door, "She was here, calling me a fat hippo that can't dance.", ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} looks as if she's about to break down in tears.`);
            // TODO-QSP: dynamic text: "Let me guess, <<$npc_firstname[''A276'']>>?", <<$npc_firstname[''A280'']>> nods...
            scene.text(`"Let me guess, ${((s as any).npc_firstname ?? 0)?.['A276'] ?? ''}?", ${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''} nods fearful to name her in case she summons her back. "Why don't you go to ${((s as any).npc_firstname ?? 0)?.['A286'] ?? ''}? She'll help."`);
            // TODO-QSP: dynamic text: <<$npc_firstname[''A280'']>>''s eyes open even wider, "Are you crazy? She''ll ju...
            scene.text(`${((s as any).npc_firstname ?? 0)?.['A280'] ?? ''}'s eyes open even wider, "Are you crazy? She'll just make my life a living hell. I just want to pass this course and get out of here."`);
            // TODO-QSP: dynamic text: "You can''t let her get away with this, She''ll just get worse and bully someone...
            scene.text(`"You can't let her get away with this, She'll just get worse and bully someone else", you say, "Please ${((s as any).pcs_nickname || '')}, don't make this worse for me."`);
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Support ' + String(((s as any).npc_firstname ?? 0)?.['A280'] ?? '' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A280', 'like');
    ((st as any).npc_trust = (st as any).npc_trust ?? {})['A280'] = ((st as any).npc_trust['A280'] ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.text('"Okay, but I\'m not willing to let this rest.", you say your voice tinged with anger.');
    // TODO-QSP: dynamic text: You grab a blanket to cover yourself and settle down to watch TV beside. After a...
    scene.text(`You grab a blanket to cover yourself and settle down to watch TV beside. After a moment ${((st as any).npc_firstname ?? 0)?.['A280'] ?? ''} shivers a bit and you pull your blanket up over her. This seems to help relax her and you sit in comfortable silence enjoying the show.`);
    // TODO-QSP: dynamic text: When the show finishes, you get up to leave. <<$npc_firstname[''A280'']>> stirs ...
    scene.text(`When the show finishes, you get up to leave. ${((st as any).npc_firstname ?? 0)?.['A280'] ?? ''} stirs from her position and looks at you but doesn't say anything, but you can tell she appreciated your company.`);
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  } },
              { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npc_firstname ?? 0)?.['A280'] ?? '' ?? '') + ' handle it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A280', 'dislike');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "If you''re sure, but promise me that''ll you talk to <<$npc_firstname[''A286'']...
    scene.text(`"If you're sure, but promise me that'll you talk to ${((st as any).npc_firstname ?? 0)?.['A286'] ?? ''} if it gets out of hand?", ${((st as any).npc_firstname ?? 0)?.['A280'] ?? ''} nods too fearful to say anything else.`);
    // TODO-QSP: dynamic text: You leave the room still uncertain if you should leave the matter to <<$npc_firs...
    scene.text(`You leave the room still uncertain if you should leave the matter to ${((st as any).npc_firstname ?? 0)?.['A280'] ?? ''} or if you should go and see ${((st as any).npc_firstname ?? 0)?.['A286'] ?? ''}.`);
    scene.actions([
      { label: 'Leave room', goto: ['pushkin_ballet_res', 'communal_area'] },
    ]);
  } },
            ]);
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === '5') {
              scene.text('WIP - tbc');
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === '6') {
                scene.text('WIP - tbc');
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === '7') {
                  scene.text('WIP - tbc');
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === '8') {
                    scene.text('WIP - tbc');
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === '9') {
                      scene.text('WIP - tbc');
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

function enterJournal(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Introit</h4></center>');
  if (((s as any).balletqw ?? 0)?.['letter'] !== 1  &&  ((s as any).balletqw ?? 0)?.['school'] < 1) {
    scene.text('You have been a ballerina since a child and you have excelled in your dance class. Your name was put forward by your dance teacher to the yearly entrance assessments for the Pushkin Ballet School which are being held during the summer and you are hoping for an invitation to the prestigious Pushkin Ballet Academy to fulfil your dream of being a ballerina.');
  }
  if (((s as any).balletqw ?? 0)?.['letter'] === 1  &&  ((s as any).balletqw ?? 0)?.['school'] < 1  &&  ((s as any).balletqw ?? 0)?.['final_report'] === '') {
    scene.text('You have accepted the invitation to the Pushkin Ballet Academy. Transport is provided to all students to the week-long course from the Pavlosk Community Center. ');
    scene.text('Departure: Sunday, 3rd July between 1600 and 1700.');
    scene.text('Ensure you have sufficient toiletries, make up and to work on your appearance, physical and dance skills prior to attending as these will be graded. Note this is a residential school in Pushkin and has strict rules about your conduct and attendance. Please ensure you have concluded any unfinished business before departing.');
  }
  if (((s as any).balletqw ?? 0)?.['school'] >= 1  ||  ((s as any).balletqw ?? 0)?.['final_report'] !== '') {
    scene.text('<center><h4>Act 1: Dreaming of stars.</h4></center>');
  }
  if (((s as any).balletqw ?? 0)?.['school'] === 0  &&  ((s as any).balletqw ?? 0)?.['final_report'] !== '') {
    scene.text('You failed to make the grade at the Pushkin Ballet Academy. There may be other opportunities if you want to achieve your ambition of being a ballerina, but not this year. <b>This is the end of the Pushkin Ballet questline for now.</b>');
  } else {
    if (((s as any).balletqw ?? 0)?.['school'] === 1) {
      scene.text('Your performance and discipline at the Pushkin Ballet Academy were a disgrace. You have not been granted a place, nor will you be invited back. <b>This is the end of the Pushkin Ballet questline for now.</b>');
    } else {
      if (((s as any).balletqw ?? 0)?.['school'] === 2) {
        scene.text('You were accepted into the school without any noticeable distinction. <b>This is the end of the Pushkin Ballet questline for now.</b>');
      } else {
        if (((s as any).balletqw ?? 0)?.['school'] === 3) {
          scene.text('You brokered a deal with Randolph to get accepted into the school. <b>This is the end of the Pushkin Ballet questline for now.</b>');
        } else {
          if (((s as any).balletqw ?? 0)?.['school'] === 4) {
            scene.text('Maya helped you get into the Pushkin Ballet School by pulling some strings. <b>This is the end of the Pushkin Ballet questline for now.</b>');
          } else {
            if (((s as any).balletqw ?? 0)?.['school'] === 5) {
              scene.text('Congratulations, you excelled in the examination, you were one of the best ballerinas of this year\'s intake. <b>This is the end of the Pushkin Ballet questline for now.</b>');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'letter':
      enterLetter(s, scene);
      break;
    case 'check_starlets_evt':
      enterCheckStarletsEvt(s, scene);
      break;
    case 'starlets':
      enterStarlets(s, scene);
      break;
    case 'pregnant':
      enterPregnant(s, scene);
      break;
    case 'dancebreak':
      enterDancebreak(s, scene);
      break;
    case 'res_events':
      enterResEvents(s, scene);
      break;
    case 'barre_exercise':
      enterBarreExercise(s, scene);
      break;
    case 'intro_274':
      enterIntro_274(s, scene);
      break;
    case 'intro_275':
      enterIntro_275(s, scene);
      break;
    case 'intro_276':
      enterIntro_276(s, scene);
      break;
    case 'intro_277':
      enterIntro_277(s, scene);
      break;
    case 'intro_278':
      enterIntro_278(s, scene);
      break;
    case 'intro_279':
      enterIntro_279(s, scene);
      break;
    case 'intro_280':
      enterIntro_280(s, scene);
      break;
    case 'intro_281':
      enterIntro_281(s, scene);
      break;
    case 'intro_282':
      enterIntro_282(s, scene);
      break;
    case 'firstperformance':
      enterFirstperformance(s, scene);
      break;
    case 'performances':
      enterPerformances(s, scene);
      break;
    case 'socialnight':
      enterSocialnight(s, scene);
      break;
    case 'rudolphqw':
      enterRudolphqw(s, scene);
      break;
    case 'res_events_array':
      enterResEventsArray(s, scene);
      break;
    case 'journal':
      enterJournal(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pushkin_ballet_evt: LocationDef = {
  name: 'pushkin_ballet_evt',
  title: 'Your Mother, Natasha Lebedev',
  region: 'pushkin',
  enter: enter,
};
