import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstOrgyInvite(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['first_orgy_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_invite.jpg');
  scene.text('Just as you\'re about to reach the bar, you hear a voice speaking to you. "How about you lovely ladies have all the drinks you want tonight for free?"');
  scene.text('You turn around and see a pretty handsome young man with large tattoos on his forearms. "Ah, I got your attention! My friend Oleg just sold his start up for like one billion, so he bought one of the side bars for the evening."');
  scene.text('"Sounds great, but we\'ve been drinking for a couple of hours now and want to dance. Three guys is not the best setup for that, though, so I was wondering if you graceful creatures would honor us with a dance? Just your presence would lighten up our small party. And, as I said, we have our own bar where you can take anything you want," he explains to you and Katja.');
  if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100) {
    // TODO-QSP: dynamic text: "That sounds like a good idea, does it not, <<$pcs_nickname>>?" Katja quickly re...
    scene.text(`"That sounds like a good idea, does it not, ${((s as any).pcs_nickname ?? '')}?" Katja quickly replies, looking at you pleadingly with her big eyes.`);
    scene.actions([
      { label: 'Agree', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
      { label: 'Say you don\'t want to', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I don\'t really think it\'s a good idea, Katja," you reply.');
    scene.text('"Why not?" she pouts, not sounding satisfied with your answer.');
    scene.text('"I don\'t have a good feeling about him. He gives me the creeps," you whisper. "I think we\'re better off not going with him."');
    scene.text('"I don\'t get it. He seems like a perfect gentleman to me," Katja whispers back, not keeping her voice very low. You\'re pretty sure that he heard her loud and clear.');
    qspCall(st, 'willpower', 'sex', 'force');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to let him go', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to let him go', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'A14', 'modify', 'hate');
    qspCall(st, 'stat', '');
    scene.text('"I\'m pretty sure this guy isn\'t going to just give us free drinks without getting <i>something</i> in return, and he seems like one of those guys that doesn\'t take no for an answer when he\'s horny," you explain to her while keeping your voice low so he can\'t hear you.');
    scene.text('"You\'re just being paranoid," Katja replies. "He seems perfectly harmless. I don\'t believe that he\'s some kind of sexual predator," she continues, keeping her voice down so he can\'t hear her.');
    scene.text('She then takes a long look at him before looking back at you. "But what do I know? You\'re the expert on creeps," she says.');
    scene.text('You can\'t tell if she\'s being sincere or sarcastic as she turns to the guy. "I\'m really sorry, but my friend reminded me that I had promised her that it would just be the two of us, so we have to say no to the free drinks."');
    scene.text('"I\'m sorry to hear that. Maybe some other time then," he replies, looking a little sad as he turns around and leaves.');
    scene.text('"Happy now? Let\'s get that drink," Katja says before heading to the bar without you. It\'s very clear that she\'s not happy with you.');
    scene.actions([
      { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in and join him', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(st, 'npc_relationship', 'A14', 'modify', 'love');
    qspCall(st, 'stat', '');
    scene.text('"Okay, have it your way, but if he molests you, it\'s on you. Don\'t say I didn\'t warn you," you say, trying to be serious without sounding too negative.');
    scene.text('"I\'m sure he wont do anything I don\'t want, and as you know I\'m perfectly capable of taking care of myself. I don\'t let people push me around," she tells you.');
    scene.text('While she\'s certainly right about being stubborn, you\'re not sure how well she would react if somebody tried to be physically forceful...');
    scene.text('As you\'re pondering this thought, Katja simply turns to the guy. "Don\'t pay any notice to my friend, she\'s just suspicious by nature. We\'re happy to join you, so lead the way to the free drinks!"');
    scene.actions([
      { label: 'Follow him', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 60) {
      scene.text('"We can join him if you want. It would certainly save us some money," Katja says, clearly indicating that the decision is up to you.');
      scene.actions([
        { label: 'Accept the offer', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
        { label: 'Say you don\'t want to', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I don\'t really think it\'s a good idea, Katja," you reply.');
    scene.text('"Why not?" she asks, clearly sounding like she want to know your reason.');
    scene.text('"I don\'t have a good feeling about him. He gives me the creeps," you whisper. "I think we\'re better off not going with him."');
    scene.text('"Well you are the expert on creeps. Sorry, that was rude, but you do have much more experience than me around strage men, so I trust your instincts," she whispers back.');
    scene.text('She then turns to the guy. "I\'m really sorry, but my friend and I would like to spend some time alone together, so we have to say no to the free drinks."');
    scene.text('"I\'m sorry to hear that. Maybe some other time then," he replies, looking a little sad as he turns around and leaves.');
    scene.text('"Too bad we have to pay for our drinks, but we should get some anyway," Katja says before heading to the bar.');
    scene.actions([
      { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I don''t think that''s a good idea, <<$pcs_nickname>>. I would rather just cont...
      scene.text(`"I don't think that's a good idea, ${((s as any).pcs_nickname ?? '')}. I would rather just continue the evening with just the two of us," Katja says, clearly stating her opinion.`);
      scene.actions([
        { label: 'Try to convince her to change her mind', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Come on Katja, don\'t say no to free drinks! We aren\'t all rich," you reply before you lean in and whisper in her ear. "Don\'t you also think that he\'s hot?"');
    scene.text('"Well, he may be good looking, but I don\'t get good vibes from him. I\'m pretty sure he expects something in return for the free drinks," she whispers back.');
    qspCall(st, 'willpower', 'sex', 'force');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to join', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to join', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(st, 'npc_relationship', 'A14', 'modify', 'hate');
    qspCall(st, 'stat', '');
    scene.text('"He seems perfectly harmless to me," you reply. "Sure, he might dream of getting a chance with hotties like the two of us, who wouldn\'t, but I\'m sure he\'ll take no for an answer. If not, I\'ll force him," you tell her, trying to act tough.');
    scene.text('"I don\'t know..." she awkwardly replies.');
    scene.text('"Tell you what. Let\'s just check it out, and if you feel unsafe, then we just leave immediately," you suggest.');
    scene.text('"Well... Okay. But if I say so, we leave without any complaint from you. Deal?" she says.');
    scene.text('"Deal," you agree before you turn back to the man and give him your answer. "My friend and I would love to join you and get some free drinks. Lead the way."');
    scene.actions([
      { label: 'Follow him', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t join him', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(st, 'npc_relationship', 'A14', 'modify', 'love');
    qspCall(st, 'stat', '');
    scene.text('You nod at Katja before turning back to the man. "I\'m really sorry, but my friend and I would like to spend some time alone together, so we have to say no to the free drinks."');
    scene.text('"I\'m sorry to hear that. Maybe some other time then," he replies, looking a little sad as he turns around and leaves.');
    scene.text('"Even though we now have to pay for our own drinks, we should still get some," Katja says before heading to the bar.');
    scene.actions([
      { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
    ]);
  } },
        { label: 'Say you also don\'t want to join him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Yeah, I think we should stick with just the two of us," you reply, then turn to the guy. "Sorry, but my friend and I want to have some time to ourselves. But thanks for the offer."');
    scene.text('"I\'m sorry to hear that. Maybe some other time then," he replies, looking a little sad as he turns around and leaves.');
    scene.text('"I did <i>not</i> get a good feeling from him," Katja says after he has left.');
    scene.text('"Me neither," you reply. "I got the distinct impression he wanted something in return for the free drinks."');
    scene.text('"Let\'s just get the drink we came here for," Katja says and turns towards the bar.');
    scene.actions([
      { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterAcceptance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'tatoo_guy', (Math.floor(Math.random() * 8) + 23), 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a', 'none');
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_tatoo_guy'] = 'Savin';
  qspCall(s, 'npcgeneratec', '', 0, 'bald_guy', (Math.floor(Math.random() * 9) + 27), 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b', 'none');
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_bald_guy'] = 'Oleg';
  qspCall(s, 'npcgeneratec', '', 0, 'green_shirt_guy', (Math.floor(Math.random() * 8) + 23), 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'c', 'none');
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_green_shirt_guy'] = 'Ilya';
  qspCall(s, 'npcStat', 'A144', 'd');
  qspCall(s, 'npcgeneratec', '', 1, 'first_black_girl', (Math.floor(Math.random() * 5) + 18), 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'f', 'none');
  qspCall(s, 'npcgeneratec', '', 1, 'second_black_girl', (Math.floor(Math.random() * 5) + 18), 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'g', 'none');
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_white_dress'] = 'Inna';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_brown_dress'] = 'Yustina';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_curly'] = 'Lyubov';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_short_blond_hair'] = 'Uliana';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_third_black_girl'] = 'Zandile';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_wavey'] = 'Sashura';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_second_black_girl'] = 'Leticia';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_long_blond_hair'] = 'Agnessa';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_first_black_girl'] = 'Aminata';
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_name_boob_window'] = 'Radinka';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_pre_party_wait.jpg');
  scene.text('They guy leads you through the crowd of the club to the entrance to one of the side rooms where a broad shouldered bouncer keeps people out.');
  scene.text('A group of girls are standing waiting beside him, all of them young and hot. You think you recognize some of them from the university.');
  // TODO-QSP: dynamic text: "Here we are. I''m <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> by ...
  scene.text(`"Here we are. I'm ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} by the way," the guy that picked you up says with a smile.`);
  // TODO-QSP: dynamic text: "I''m Katja, and this is <<$pcs_nickname>>," Katja replies.
  scene.text(`"I'm Katja, and this is ${((s as any).pcs_nickname ?? '')}," Katja replies.`);
  // TODO-QSP: dynamic text: "We just need to wait - oh here he comes! This is <<$katja_first_orgy_temp[''fir...
  scene.text(`"We just need to wait - oh here he comes! This is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} says, introducing a guy in a green shirt arriving with some more girls; among them is your former classmate, Anushka.`);
  scene.text('"I see I\'m not the only one looking for a good time and some free booze," Anushka grins.');
  scene.text('"Hello Anushka, nice seeing you," Katja replies.');
  scene.text('"Nush, everyone calls me Nush. Except my <i>mother</i>," Anushka replies, saying mother with such disdain that everyone that hears it takes note.');
  scene.text('"Okay, Nush, I\'ll remember that," Katja replies.');
  // TODO-QSP: dynamic text: Before you can exchange more pleasantries, <<$katja_first_orgy_temp[''first_orgy...
  scene.text(`Before you can exchange more pleasantries, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} gets everyone's attention. "Everybody needs to wear an armband to gain entry, so come up to me one at a time so we can get them on quickly."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get your armband', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_pre_party.jpg');
    scene.text('"I was a little skeptical, but free booze is free booze, and looking at the guy that picked you up, I can see why the two of you joined," Anushka says while simulating giving a blowjob.');
    if (((st as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 100) {
        scene.text('"I don\'t know what you\'re talking about," Katja replies defensively. "We just thought that getting some free drinks and a quiet place to enjoy them was a good idea."');
        scene.text('Anushka visibly rolls her eyes. "Sure, Princess. And here I thought you might have loosened up a little and stopped being a prude."');
        scene.text('"I\'m not a prude!" Katja snaps back. "I\'m just not a slut like some other girls."');
        scene.text('"Come on, no fighting. We\'re here to have fun," you try to reason.');
        scene.text('"But is it the kind of fun that Little Miss Prude here will appreciate?" Anushka replies. "Look at who they\'ve invited. These horndogs are clearly hoping that the free booze will loosen some of these girls up so they can fuck them."');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] < 120  ||  ((st as any).katjaQW ?? 0)?.['simultanous_boys'] < 3  ||  ((st as any).katjaQW ?? 0)?.['park_sex'] < 2) {
          scene.text('"Sure, he\'s good looking, but we\'re just here to drink and dance. We\'re not planning to have sex with anybody," Katja says defensively.');
          scene.text('Anushka visibly rolls her eyes. "Sure, Princess. And here I thought you might have loosened up a little and stopped being a prude."');
          scene.text('"I\'m not a prude!" Katja snaps back. "I\'m just not a slut like some other girls."');
          scene.text('"Come on, no fighting. We\'re here to have fun," you try to reason.');
          scene.text('"But is it the kind of fun that Little Miss Prude here will appreciate?" Anushka replies. "Look at who they\'ve invited. These horndogs are clearly hoping that the free booze will loosen some of these girls up so they can fuck them."');
        } else {
          scene.text('"Yeah, he\'s hot, but I\'m not the kind of person that just jumps on a random dick, unlike certain other girls," Katja replies.');
          scene.text('Anushka visibly rolls her eyes. "Sure, Princess. And here I thought you might have loosened up a little and stopped being a prude."');
          scene.text('"Having standards is not the same as being a prude!" Katja snaps back. "I don\'t compete in the competition about being the biggest slut, unlike other girls here."');
          scene.text('"Come on, no fighting. We\'re here to have fun," you try to reason.');
          scene.text('"But is it the kind of fun that Little Miss Prude here will appreciate?" Anushka replies. "Look at who they\'ve invited. These horndogs are clearly hoping that the free booze will loosen some of these girls up so they can fuck them."');
        }
      }
    }
    scene.text('"What do you mean?" Katja asks, clearly ignoring the barbs thrown her way.');
    scene.text('"Look at the girls they\'ve chosen," Anushka replies. "All young and super hot. And look."');
    // TODO-QSP: dynamic text: She points at two black girls both wearing pink dresses. "That''s <<$katja_first...
    scene.text(`She points at two black girls both wearing pink dresses. "That's ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}, the biggest sluts from the eighth floor of your dorm building. I <i>guarantee</i> that they'll both be riding at least one of these guys before the night is over."`);
    if (((st as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] < 100) {
        scene.text('"Whoa, I mean..." Katja replies, seemingly a little taken aback.');
        scene.text('"Don\'t worry, your prudishness is not in danger. You haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..." Anushka says with a smirk and a wink.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] < 120  ||  ((st as any).katjaQW ?? 0)?.['simultanous_boys'] < 3  ||  ((st as any).katjaQW ?? 0)?.['park_sex'] < 2) {
          scene.text('"Now that you say it, I <i>have</i> heard things about them, but surely they\'ll just get the men to take them home with them?" Katja replies.');
          scene.text('"Don\'t worry, your prudishness is not in danger. You haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..." Anushka says with a smirk and a wink.');
        } else {
          scene.text('"Sure, they\'re sluts, but the men seem decent enough," Katja replies. "And if they\'re stupid enough to be dragged to the toilets to fuck those whores, then it\'s their loss. It won\'t affect the party for the rest of us."');
          scene.text('Anushka arches an eyebrow slightly and is silent a moment, as if thinking about something. "Well well well... maybe you <i>are</i> a bit more fun than I thought..." she says before slightly hipping checking Katja in a playful manner. "Just remember; you haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..."');
          scene.text('"Get your mind out of the gutter, Nush!" Katja retorts. "I\'m plenty fun and I know very well how to have a good time. I just don\'t broadcast it for all of the world to see like some others."');
        }
      }
    }
    scene.text('While you\'ve been talking, the other girls have gotten their armbands and the three of you are last. Once your armbands are on your wrists, the bouncer opens the door and leads you into the side room.');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_greetings.jpg');
    // TODO-QSP: dynamic text: You follow <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> into the si...
    scene.text(`You follow ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} into the side room where you see a bar with no bartender, and a couple of leather couches situated around a small dance floor. Music is coming out of several speakers, but it's not as loud as in the club proper, so you can talk without shouting.`);
    // TODO-QSP: dynamic text: You spot a bald guy, seemingly in his early thirties and wearing glasses, as he ...
    scene.text(`You spot a bald guy, seemingly in his early thirties and wearing glasses, as he gets up to greet ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}.`);
    // TODO-QSP: dynamic text: "We brought some dance partners," <<$katja_first_orgy_temp[''first_orgy_name_tat...
    scene.text(`"We brought some dance partners," ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} says to him before he turns around to you. "This here is ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}. He just sold his start up for billions, which we're celebrating tonight. Come and say hello to him."`);
    // TODO-QSP: dynamic text: Katja makes sure that you pay attention to the names of the other girls as you a...
    scene.text(`Katja makes sure that you pay attention to the names of the other girls as you all take turns introducing yourselves to ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}.`);
    // TODO-QSP: dynamic text: You notice that several of the girls flirt quite heavily with him, <<$katja_firs...
    scene.text(`You notice that several of the girls flirt quite heavily with him, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} in particular coming on pretty strong.`);
    scene.actions([
      { label: 'Your turn to greet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_group_picture.jpg');
    // TODO-QSP: dynamic text: Katja is the last girl to greet <<$katja_first_orgy_temp[''first_orgy_name_bald_...
    scene.text(`Katja is the last girl to greet ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} as ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} comes up and takes out his phone.`);
    scene.text('"Why don\'t we start with a picture to remember the evening?"');
    // TODO-QSP: dynamic text: You all gather up for the picture, <<$katja_first_orgy_temp[''first_orgy_name_se...
    scene.text(`You all gather up for the picture, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} moving in between Katja and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} to basically shove her ass into his crotch. Katja doesn't seem sure if she should move or not, but when ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl'] ?? ''} plants her hands on her hips, she stays still.`);
    // TODO-QSP: dynamic text: "Okay, ready? 3... 2... 1..." <<$katja_first_orgy_temp[''first_orgy_name_green_s...
    scene.text(`"Okay, ready? 3... 2... 1..." ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} calls.`);
    // TODO-QSP: dynamic text: As he does, <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> places his ...
    scene.text(`As he does, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} places his hands on ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s ass, who doesn't seem to mind and instead drags Katja closer and starts to make out with her. Katja, seemingly acting on instinct, reciprocates the kiss.`);
    scene.text('You also notice Anushka hike her skirt up enough so the bottom of her ass will be visible in the picture. You don\'t see any panties and wonder if she\'s even wearing any.');
    // TODO-QSP: dynamic text: "That''s a wrap, thanks. Now enjoy the free drinks and let''s get partying!" <<$...
    scene.text(`"That's a wrap, thanks. Now enjoy the free drinks and let's get partying!" ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} shouts, and the group breaks up to either start dancing or head for the bar.`);
    scene.actions([
      { label: 'Get a drink', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink'] },
      { label: 'Dance', goto: ['katja_nightclub_first_orgy', 'first_orgy_dance'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 10) {
    qspGoto(s, 'katja_nightclub_first_orgy', 'first_orgy_escalation');
  } else {
    if (((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_boobs_free'] === 1)  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 8) {
      if (((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_boobs_free'] === 0) {
        ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_boobs_free'] = 1;
      }
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance9.jpg');
      scene.text('While you and Katja are still decent, several of the other girls are now dancing with their dresses pulled down, exposing their breasts.');
      // TODO-QSP: dynamic text: Even the timid <<$katja_first_orgy_temp[''first_orgy_name_white_dress'']>> has j...
      scene.text(`Even the timid ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} has joined in, but seems a little uncomfortable with the situation.`);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 6) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance8.jpg');
        scene.text('Both the girls and boys are getting more daring, with some of the girls pulling their dresses down and flashing their breasts before pulling them back up.');
        // TODO-QSP: dynamic text: When <<$katja_first_orgy_temp[''first_orgy_name_curly'']>> does it and leaves he...
        scene.text(`When ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly'] ?? ''} does it and leaves her breasts hanging out, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} moves behind her and starts to grope and squeeze them.`);
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 5) {
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance7.jpg');
          // TODO-QSP: dynamic text: As you and Katja dance with some of the other girls, <<$katja_first_orgy_temp[''...
          scene.text(`As you and Katja dance with some of the other girls, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_short_blond_hair'] ?? ''} suddenly pulls down her top, exposing her perky breasts.`);
          scene.text('"Go girl!" one of the other girls says as they all start cheering her on.');
        } else {
          if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 4) {
            scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance6.jpg');
            // TODO-QSP: dynamic text: While you and Katja are still dancing with the girls, the boys are getting more ...
            scene.text(`While you and Katja are still dancing with the girls, the boys are getting more into it. ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} still hasn't moved from the couch, but ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} has started dancing on top of him.`);
            // TODO-QSP: dynamic text: Her panties are exposed, and <<$katja_first_orgy_temp[''first_orgy_name_green_sh...
            scene.text(`Her panties are exposed, and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} is pulling on the strings to make them go up her ass crack.`);
            // TODO-QSP: dynamic text: On the couch next to them is Anushka, shaking her ass towards the dance floor wi...
            scene.text(`On the couch next to them is Anushka, shaking her ass towards the dance floor with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}'s hand on her hip.`);
            if (((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_nush_no_panties_see'] === 0) {
              ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_nush_no_panties_see'] = 1;
              scene.text('You can now clearly see that she\'s not wearing panties.');
            } else {
              scene.text('She doesn\'t seem to mind that everybody can see that she\'s not wearing panties.');
            }
          } else {
            if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 3) {
              scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance5.jpg');
              // TODO-QSP: dynamic text: The boys start getting into it a little more, <<$katja_first_orgy_temp[''first_o...
              scene.text(`The boys start getting into it a little more, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} dancing behind ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} as she dances with Katja.`);
              // TODO-QSP: dynamic text: He slowly pulls up <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'...
              scene.text(`He slowly pulls up ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s skirt, exposing her tiny G-string for everybody to see as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} starts grinding on him.`);
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 2) {
                scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance4.jpg');
                // TODO-QSP: dynamic text: Katja is dancing next to you with <<$katja_first_orgy_temp[''first_orgy_name_whi...
                scene.text(`Katja is dancing next to you with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''}. She seems to be a pretty timed girl, but Katja is anything but that tonight.`);
                // TODO-QSP: dynamic text: You watch as Katja dances in close and grabs <<$katja_first_orgy_temp[''first_or...
                scene.text(`You watch as Katja dances in close and grabs ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} by the neck before drawing her in for a kiss.`);
                // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_white_dress'']>> reciprocates the kis...
                scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} reciprocates the kiss and wraps her arms around Katja.`);
              } else {
                if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 1) {
                  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance3.jpg');
                  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> has started to get int...
                  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} has started to get into dancing with a few of the other girls, who are almost grinding him.`);
                  scene.text('The other two are still keeping back while you and the rest of the girls are dancing wildly.');
                } else {
                  if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_escalation'] > 0) {
                    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance2.jpg');
                    scene.text('You and the other girls are having fun on the dance floor, and some of them do some pretty daring moves.');
                    // TODO-QSP: dynamic text: The boys are still dancing timidly, while <<$katja_first_orgy_temp[''first_orgy_...
                    scene.text(`The boys are still dancing timidly, while ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} just sits on a couch looking at the girls.`);
                  } else {
                    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_dance1.jpg');
                    scene.text('You and Katja join the other girls on the dance floor and shake your bodies to the rhythm of the music.');
                    scene.text('Even though it was the men who wanted to dance, they\'re holding back, not really getting into it.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_escalation'] = ((s as any).katja_first_orgy_temp['first_orgy_escalation'] ?? 0) + (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get a drink', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink'] },
    { label: 'Continue to dance', goto: ['katja_nightclub_first_orgy', 'first_orgy_dance'] },
  ]);
  scene.build();
}

function enterFirstOrgyDrink(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_drink.jpg');
  scene.text('You and Katja walk to the bar where other girls are mixing drinks.');
  (s as any).loc = 'katja_nightclub_first_orgy';
  (s as any).loc_arg = 'first_orgy_drink2';
  qspCall(s, 'food_menu', 'no_image');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyDrink2(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclub';
  (s as any).loc_arg = 'bar';
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'bar';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_drink.jpg');
  // TODO-QSP: dynamic text: 'You mix your drink while Katja pours herself a glass of '+iif(rand(0,1), 'wine'...
  scene.text('You mix your drink while Katja pours herself a glass of ' + (((Math.floor(Math.random() * 2) + 0)) ? ('wine') : ('champagne')) + '.');
  scene.text('You then chat a little while you finish your drink.');
  if (((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_nush_no_panties_see'] === 0) {
    scene.text('You\'re still wondering if she\'s wearing panties or not.');
    scene.actions([
      { label: 'Approach Anushka', goto: ['katja_nightclub_first_orgy', 'first_orgy_check_nush'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance', goto: ['katja_nightclub_first_orgy', 'first_orgy_dance'] },
  ]);
  scene.build();
}

function enterFirstOrgyCheckNush(s: GameState, scene: SceneBuilder): void {
  ((s as any).katja_first_orgy_temp = (s as any).katja_first_orgy_temp ?? {})['first_orgy_nush_no_panties_see'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_panty_check1.jpg');
  scene.text('You walk over to Anushka, who is standing close to the bar drinking a Honey Trap.');
  scene.text('"What are you drinking, Nush?" Katja asks.');
  scene.text('You didn\'t even notice her following you as Anushka gives her a smile. "It\'s a Honey Trap." Her tone and body language makes it into a sexual innuendo, but before anyone has a chance to respond, she continues speaking as if she didn\'t do it on purpose. "It\'s made out of tequila, honey, lemon, juice and I think ginger. Kinda sweet and sticky, like me..."');
  scene.text('The last part she says in a teasing tone, more towards Katja than you.');
  if (((s as any).anushkaQW ?? 0)?.['sex'] > 0) {
    scene.text('"I just wanted to check, but I\'m pretty sure that you aren\'t wearing panties tonight, slut," you grin.');
    // TODO-QSP: dynamic text: 'Katja '+iif(katjaQW['slut'] < 100, 'is shocked by', 'laughs at')+' your comment...
    scene.text('Katja ' + ((((s as any).katjaQW ?? 0)?.['slut'] < 100) ? ('is shocked by') : ('laughs at')) + ' your comment.');
    scene.text('Anushka chuckles slightly and gives you a slight smirk. "If you want to see my pussy, then all you\'ve got to do is ask, bitch."');
    if (((s as any).katjaQW ?? 0)?.['slut'] < 100) {
      scene.text('She reaches down to hike up her skirt just enough to show off her pussy. "Why do you want to know anyway? You want a taste of my Honey Trap?" she asks with a wink, leaving no doubt in your mind what she means.');
      scene.text('"How about you, princess?" she asks Katja while holding up her drink, acting like she might have just meant her drink, but you don\'t think she did.');
    } else {
      scene.text('She reaches down to hike up her skirt just enough to show off her pussy. "Why do you want to know anyway? You want a taste of my Honey Trap?" she asks with a wink, leaving no doubt in your mind what she means.');
    }
  } else {
    scene.text('"So I noticed earlier when we took the picture that you pulled your skirt up, but I didn\'t see any panties. Is it because you aren\'t wearing any?" you ask with a grin.');
    scene.text('Anushka doesn\'t say anything before she turns around and pulls her skirt up, exposing the bottom of her very naked pussy.');
  }
  if (qspFunc(s, 'pcs_has_attr', 'clothes_exposed_pussy') + qspFunc(s, 'pcs_has_attr', 'clothes_exposed_panties') > 0) {
    scene.text('She pulls her skirt back into place before she turns back around. "I don\'t need to ask you, since you\'re clearly showing it off for everyone to see."');
  } else {
    scene.text('She then turns around. "Okay, your turn."');
    // TODO-QSP: dynamic text: 'You quickly look around, and when you''re sure nobody is looking, you pull your...
    scene.text('You quickly look around, and when you\'re sure nobody is looking, you pull your clothes aside and expose your ' + ((((s as any).pantyworntype ?? 0) === 'none') ? ('naked') : ('panty clad')) + ' pussy for a brief moment.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_panty_check2.jpg');
    scene.text('"Your turn now. Turn around," Anushka orders Katja, who does what she\'s told. "Now pull up your skirt."');
    scene.text('Katja looks a little perplexed, but does as she\'s told, exposing her very sexy G-string.');
    scene.text('"I expected you to be wearing panties, but <i>damn girl</i>! Those are much sexier than I was expecting from a prude like you!" Anushka comments.');
    scene.text('She gives Katja\'s ass a slap, which gets a slight yelp out of Katja before placing her hands on Katja\'s ass cheeks and pulling them apart to get a better view.');
    scene.text('"Damn girl, they barely cover your pussy! I\'m kind of impressed with how sexy you look in that thong. Maybe there\'s hope for you after all," she says as she lets go of Katja\'s ass.');
    if (((st as any).katjaQW ?? 0)?.['slut'] <= 100  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 5) {
      scene.text('Katja is getting very flustered and her cheeks are turning deep red, which makes Anushka laugh as she gets up.');
      scene.text('"This is going to be one hell of a party! Later!" she says, slapping Katja\'s ass one more time before heading to the dance floor.');
    } else {
      scene.text('"I know how to dress well, thank you!" Katja replies. "I only do it for the ones that are actually worthy of joining me it the bedroom though, not for the whole world to see."');
      scene.text('"Whatever," Anushka replies in an amused tone as she gets up. "This is going to be one hell of a party! Later!"');
      scene.text('She slaps Katja\'s ass one more time before heading to the dance floor.');
    }
    scene.actions([
      { label: 'Dance', goto: ['katja_nightclub_first_orgy', 'first_orgy_dance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyEscalation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_escalation.jpg');
  scene.text('Things are escalating around you. Most of the girls you are dancing with now have their dresses pulled down, proudly displaying their breasts as they jiggle to the rhythm of the music.');
  // TODO-QSP: dynamic text: This includes <<$katja_first_orgy_temp[''first_orgy_name_white_dress'']>>, who s...
  scene.text(`This includes ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''}, who seemed pretty timid earlier. You also notice ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} sitting on the couch behind the girls, his cock in the mouth of ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}.`);
  qspCall(s, 'willpower', 'orgy', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Find a guy and start the orgy ', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Find a guy and start the orgy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_player_takes_initiative');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Find Katja and leave', goto: ['katja_nightclub_first_orgy', 'first_orgy_leaving'] },
    { label: 'Observe what is happening', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe1'] },
  ]);
  scene.build();
}

function enterFirstOrgyLeaving(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You look around for Katja and find her standing in the middle of the dance floor, eyes wide open as she absorbs what\'s happening.');
  scene.text('You quickly walk over to her. "Seems Nush was right. This did turn much wilder that we expected, and I\'m not going to be part of it. Are you coming with me?"');
  if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100  ||  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
    // TODO-QSP: dynamic text: '"'+iif(katjaQW['simultanous_boys'] > 3 or katjaQW['park_sex'] >= 3, 'Well... We...
    scene.text('"' + ((((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) ? ('Well... We\'ve done some wild things ourselves, but this is still above anything that.') : ('This is definitely more than I expected, even when Nush suggested they were huge sluts. But sex so openly in public... That is new... ')) + ' So yeah.... Probably best if we leave..." she answers, but drags her answer out, as if she doesn\'t really want to leave.');
    scene.text('"You don\'t have to follow me. You can stay if you want," you tell her.');
    scene.text('She takes her time to answer. "Oh... No. If you\'re leaving, then I am too. I\'m not going to stay here like some slut getting fucked by complete strangers..."');
    scene.text('It seems like she might actually want to stay before she finally turns around. "Okay, let\'s get back to the club then."');
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you seen what''s going on? I don''t know what''s happen...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, have you seen what's going on? I don't know what's happening," Katja says, looking very shocked.`);
    scene.text('"The sluts have started the orgy, just like Nush predicted," you answer. "Why are you surprised at that?"');
    scene.text('"I didn\'t believe her!" she replies, almost panicking. "We definitely shouldn\'t be here!"');
    scene.text('"That\'s why I asked if you\'re coming with me," you reply.');
    scene.text('"Of course. Let\'s head out," she answers, but doesn\'t move as fast as her words would have led you to believe, like she\'s not sure if she actually wants to leave.');
  }
  scene.text('You both leave the private bar and head back to the club, where Katja smiles and drags you out onto the dance floor.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_nightclub', 'dance'] },
  ]);
  scene.build();
}

function enterFirstOrgyCumshot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'arousal', 'erotic_nudity', 2, 'orgy');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja26.jpg');
  scene.text('After maneuvering through the crowd of naked female bodies with your drink in hand, you arrive at an exciting sight.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstOrgyKatjaSixt2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You gulp down the last of your drink and find a place to put the empty glass down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to see what is going on', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja27.jpg');
    scene.text('As you make your way back through the crowd of girls who have gathered around one of the couches, you decide to stop and see what they\'re cheering about.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSeventh1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'See how it unfolds', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja28` + ((((st as any).katjaQW ?? 0)?.['horny']  >= 100) ? ('b') : ('a')) + '.jpg"></center>');
    scene.text('You chat a little with the girls, and get the feeling that the party will end soon since most of them expect the guys will leave after they cum.');
    scene.text('After a while, your focus turns back to the couch.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSeventh2(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> then pulls out of Katj...
    scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} then pulls out of Katja. "I'm going to cum! Get on the floor so I can paint your faces, girls."`);
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in'  ||  ((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative'  ||  ((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') {
      scene.actions([
        { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'bj', 1, ((st as any).dick1 ?? 0), 'orgy');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') ? ('first_orgy_join15') : ('first_orgy_initiative21')) + '.jpg"></center>');
    // TODO-QSP: dynamic text: 'Katja quickly gets down in front of him and you join her. <<$katja_first_orgy_t...
    scene.text(`Katja quickly gets down in front of him and you join her. ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''}, ` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') ? ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window'] ?? '' + '') : ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? '' + '')) + ' and ' + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') ? ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window'] ?? '' + '') : ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey'] ?? '' + '')) + ' also get on their knees beside you.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') {
      // TODO-QSP: dynamic text: '<<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> then sticks his cock ...
      scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} then sticks his cock in your face, and you ` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') ? ('suck on it') : ('lick his balls while ' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? '' + ' sucks it')) + '.');
      scene.text('You and the other girls then take turns sucking his dick, trying to get him to cum.');
    } else {
      // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> then sticks his cock i...
      scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} then sticks his cock in ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}'s face, who starts to suck on it.`);
      scene.text('You and the other girls then take turns sucking his dick, trying to get him to cum.');
    }
    scene.actions([
      { label: 'Cumshot', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative22.jpg');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1);
      qspCall(st, 'arousal', 'erotic_nudity', 1, 'orgy');
      // TODO-QSP: dynamic text: You finally get him to cum and <<$katja_first_orgy_temp[''first_orgy_name_tatoo_...
      scene.text(`You finally get him to cum and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} starts by shooting thick globs of cum on you and Katja's faces.`);
    } else {
      qspCall(st, 'arousal', 'erotic_nudity', 1, 'orgy');
      // TODO-QSP: dynamic text: You finally get him to cum and <<$katja_first_orgy_temp[''first_orgy_name_tatoo_...
      scene.text(`You finally get him to cum and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} starts by shooting thick globs of cum over Katja and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}'s faces.`);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'More cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative23.jpg');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
      // TODO-QSP: dynamic text: He then changes his aim and you feel a powerful spurt of cum hitting you in the ...
      scene.text(`He then changes his aim and you feel a powerful spurt of cum hitting you in the face before he also covers ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''}.`);
      // TODO-QSP: dynamic text: He then shoots his final spurts across <<$katja_first_orgy_temp[''first_orgy_nam...
      scene.text(`He then shoots his final spurts across ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey'] ?? ''}'s face, leaving all of you covered in his cum.`);
    } else {
      // TODO-QSP: dynamic text: He then changes his aim and paints <<$katja_first_orgy_temp[''first_orgy_name_fi...
      scene.text(`He then changes his aim and paints ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window'] ?? ''}'s faces with his cum.`);
      // TODO-QSP: dynamic text: 'He then aims his final spurts at you and '+iif($katjaQW['first_orgy'] = 'observ...
      scene.text('He then aims his final spurts at you and ' + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') ? ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? '' + '') : ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey'] ?? '' + '')) + ', leaving all of you covered in his cum.');
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? '' ?? '') + '\'s reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative24.jpg');
    // TODO-QSP: dynamic text: Once he''s finished, <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> l...
    scene.text(`Once he's finished, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} looks down at you and you gaze back up at him.`);
    scene.text('"That was the best orgasm I\'ve ever had!" he grins. "The sight of your faces covered in my cum is the prettiest sight I\'ve ever seen. You all made this one of the best nights of my life, so thanks!"');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      scene.actions([
        { label: 'Swap cum with Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 2, ((st as any).npcID4 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative25.jpg');
    // TODO-QSP: dynamic text: Katja turns her head towards you and the two of you start making out, sharing <<...
    scene.text(`Katja turns her head towards you and the two of you start making out, sharing ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}'s cum between you in the process.`);
    scene.text('After alternatively kissing and licking each other\'s faces for some time, you\'re both more or less clean of cum and get up from the floor.');
    scene.actions([
      { label: 'See how the last guy is doing', goto: ['katja_nightclub_first_orgy', 'first_orgy_watching_last_guy_cum'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') {
        scene.actions([
          { label: 'See Katja\'s reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 2, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative25.jpg');
    // TODO-QSP: dynamic text: You turn to see how Katja reacts and watch as she turns her head towards <<$katj...
    scene.text(`You turn to see how Katja reacts and watch as she turns her head towards ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}, who promptly starts to kiss Katja.`);
    // TODO-QSP: dynamic text: They make out for some time, sharing <<$katja_first_orgy_temp[''first_orgy_name_...
    scene.text(`They make out for some time, sharing ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}'s cum between them in the process.`);
    scene.text('You, meanwhile, get up from the floor and find something to clean the cum off your face.');
    scene.actions([
      { label: 'See how the last guy is doing', goto: ['katja_nightclub_first_orgy', 'first_orgy_watching_last_guy_cum'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Swap cum with ' + String(((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? '' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 2, ((st as any).npcID6 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_join16.jpg');
    // TODO-QSP: dynamic text: You turn your head towards <<$katja_first_orgy_temp[''first_orgy_name_first_blac...
    scene.text(`You turn your head towards ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and the two of you start making out, sharing ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}'s cum between you in the process.`);
    scene.text('After alternatively kissing and licking each other\'s faces for some time, you\'re both more or less clean of cum and get up from the floor.');
    scene.actions([
      { label: 'See how the last guy is doing', goto: ['katja_nightclub_first_orgy', 'first_orgy_watching_last_guy_cum'] },
    ]);
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
  } },
      ]);
    } else {
      scene.actions([
        { label: 'See how the girls react', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'bj', 1, ((st as any).dick1 ?? 0), 'orgy');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+nush_lick') ? ('first_orgy_join15') : ('first_orgy_initiative21')) + '.jpg"></center>');
    // TODO-QSP: dynamic text: 'Katja quickly gets down in front of him and is joined by <<$katja_first_orgy_te...
    scene.text(`Katja quickly gets down in front of him and is joined by ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''}, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window'] ?? ''}, ` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] !== 'observing+nush_lick') ? ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey'] ?? '' + ' ') : (' ')) + ` and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}.`);
    // TODO-QSP: dynamic text: '<<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> then sticks his cock ...
    scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} then sticks his cock in ` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+nush_lick') ? ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? '' + '\'s') : ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? '' + '\'s')) + ', who starts sucking it.');
    scene.text('The girls then all take turns sucking his dick, trying to get him to cum.');
    scene.actions([
      { label: 'Cumshot', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 1, 'orgy');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative22.jpg');
    // TODO-QSP: dynamic text: They finally get him to cum and <<$katja_first_orgy_temp[''first_orgy_name_tatoo...
    scene.text(`They finally get him to cum and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} starts by shooting thick globs of cum over Katja and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}'s faces.`);
    scene.actions([
      { label: 'More cum', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 1, 'orgy');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative23.jpg');
    // TODO-QSP: dynamic text: He then changes his aim and paints <<$katja_first_orgy_temp[''first_orgy_name_fi...
    scene.text(`He then changes his aim and paints ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_boob_window'] ?? ''}'s faces with his cum.`);
    // TODO-QSP: dynamic text: 'He then shoots his final spurts at <<$katja_first_orgy_temp[''first_orgy_name_b...
    scene.text(`He then shoots his final spurts at ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''} ` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+nush_lick') ? ('face') : ('' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? '' + ' and ' + ((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_wavey'] ?? '' + ' faces')) + ', leaving all of the girls covered in his cum.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? '' ?? '') + '\'s reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/` + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+nush_lick') ? ('first_orgy_initiative24') : ('first_orgy_initiative23')) + '.jpg"></center>');
    // TODO-QSP: dynamic text: Once he''s finished, <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> l...
    scene.text(`Once he's finished, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} looks down on the girls, who all gaze back up at him.`);
    scene.text('"That was the best orgasm I\'ve ever had!" he grins. "The sight of your faces covered in my cum is the prettiest sight I\'ve ever seen. You all made this one of the best nights of my life, so thanks!"');
    scene.actions([
      { label: 'See Katja\'s reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 2, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_initiative25.jpg');
    // TODO-QSP: dynamic text: You turn to see how Katja reacts and find her kissing <<$katja_first_orgy_temp['...
    scene.text(`You turn to see how Katja reacts and find her kissing ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_brown_dress'] ?? ''}.`);
    // TODO-QSP: dynamic text: They make out for some time, sharing <<$katja_first_orgy_temp[''first_orgy_name_...
    scene.text(`They make out for some time, sharing ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}'s cum between them in the process.`);
    scene.actions([
      { label: 'See how the last guy is doing', goto: ['katja_nightclub_first_orgy', 'first_orgy_watching_last_guy_cum'] },
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
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyDrinkAlone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/drinks/bardrinks.jpg');
  scene.text('You go to the bar and make yourself a drink.');
  (s as any).loc = 'katja_nightclub_first_orgy';
  (s as any).loc_arg = 'first_orgy_drink_alone2';
  (s as any).temp_loc_arg_1 = ((s as any).locArgs?.[1] ?? 0);
  qspCall(s, 'food_menu', 'no_image');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyDrinkAlone2(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclub';
  (s as any).loc_arg = 'bar';
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'bar';
  // TODO-QSP: $ARGS[1] = $temp_loc_arg_1
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/shared/drinks/bardrinks.jpg');
  scene.text('After you mix your drink, you take a sip of it while looking around.');
  if (((s as any).katjaQW ?? 0)?.['first_orgy'] !== 'observing') {
    scene.actions([
      { label: 'Quickly finish your drink and look for some action', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      if (String((st as any).locArgs?.[1] ?? '') === 'first') {
        qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued2');
      } else {
        if (String((st as any).locArgs?.[1] ?? '') === 'second') {
          qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6');
        } else {
          if (String((st as any).locArgs?.[1] ?? '') === 'third') {
            qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance2');
          } else {
            qspGoto(st, 'katja_nightclub_first_orgy', 'first_orgy_cumshot');
          }
        }
      }
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        if (String((st as any).locArgs?.[1] ?? '') === 'first') {
          qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_join2');
        } else {
          if (String((st as any).locArgs?.[1] ?? '') === 'second') {
            qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_join_dance');
          } else {
            if (String((st as any).locArgs?.[1] ?? '') === 'third') {
              qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_join10');
            } else {
              qspGoto(st, 'katja_nightclub_first_orgy', 'first_orgy_cumshot');
            }
          }
        }
      } else {
        qspGoto(st, 'katja_nightclub_first_orgy', 'first_orgy_cumshot');
      }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Quickly finish your drink and see what is going on', handler: (st: GameState) => {
    if (String((st as any).locArgs?.[1] ?? '') === 'first') {
      qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe2');
    } else {
      if (String((st as any).locArgs?.[1] ?? '') === 'second') {
        qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe6');
      } else {
        if (String((st as any).locArgs?.[1] ?? '') === 'third') {
          qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe8');
        } else {
          qspGoto(st, 'katja_nightclub_first_orgy', 'first_orgy_cumshot');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'See what Katja is doing', handler: (st: GameState) => {
    if (String((st as any).locArgs?.[1] ?? '') === 'first') {
      qspCall(st, 'arousal', 'erotic_nudity', 3);
      qspCall(st, 'stat', '');
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja4.jpg');
      scene.text('You take another sip of your drink and watch what\'s going on around you.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyFirstChangeOfPosition(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Continue to watch Katja while you finish your drink', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3, 'erotic_nudity');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja5.jpg');
    scene.text('You keep enjoying your drink and look back at what what Katja is doing.');
    qspCall(st, 'katja_nightclub_first_orgy', 'first_orgy_katja_getting_naked');
    scene.text('You decide that you\'ve watched enough of this for now.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] !== 'observing') {
      scene.actions([
        { label: 'Look for some action', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued2');
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_join2');
      }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'See what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe2'] },
      ]);
    }
  } },
      ]);
    } else {
      if (String((st as any).locArgs?.[1] ?? '') === 'second') {
        qspCall(st, 'arousal', 'erotic_nudity', 3);
        qspCall(st, 'stat', '');
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja13.jpg');
        scene.text('You sip your drink and watch what\'s going on around you.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaThird1(st, scene); (st as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Walk over to her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja14.jpg');
    scene.text('You take your drink and walk over to the couch where Katja is getting fucked.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaThirdTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('After making sure she\'s good, you finish your drink.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      scene.actions([
        { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.actions([
          { label: 'Find some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join7'] },
        ]);
      } else {
        scene.actions([
          { label: 'Back to watch the others', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe6'] },
        ]);
      }
    }
  } },
        ]);
      } else {
        if (String((st as any).locArgs?.[1] ?? '') === 'third') {
          qspCall(st, 'arousal', 'erotic_nudity', 3);
          qspCall(st, 'stat', '');
          scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja17.jpg');
          scene.text('You sip your drink and watch what\'s going on around you.');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaForth1(st, scene); (st as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'Talk with Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja18.jpg');
    scene.text('You take a sip of your drink and, glass in hand, go back towards the couches.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaForthTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You take a sip and repeat your question.');
    scene.actions([
      { label: 'Listen to her answer', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja19.jpg');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaForthTalk2(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You sip your drink while you watch your redheaded friend get pounded.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      scene.actions([
        { label: 'Go dance', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance2'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.actions([
          { label: 'Look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join10'] },
        ]);
      } else {
        scene.actions([
          { label: 'Look to see what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe8'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue to watch her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja20` + ((((st as any).katjaQW ?? 0)?.['horny'] >= 100) ? ('b') : ('a')) + '.jpg"></center>');
    scene.text('You continue to sip your drink while watching the sex show in front of you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaForth2(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You finish your drink and decide that the show is over. Time to do some more dancing.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      scene.actions([
        { label: 'Go dance', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued_dance2'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.actions([
          { label: 'Look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join10'] },
        ]);
      } else {
        scene.actions([
          { label: 'Look to see what else is going on', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe8'] },
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
          if (String((st as any).locArgs?.[1] ?? '') === 'fourth') {
            qspCall(st, 'arousal', 'erotic_nudity', 3);
            qspCall(st, 'stat', '');
            scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja_carry.jpg');
            scene.text('After you make your drink and take the first sip, you look for Katja.');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaCarry(st, scene); (st as any).locArgs = __savedLocArgs; }
            scene.text('You take another sip of your drink and walk back towards the action to see what happens.');
          }
        }
      }
    }
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] !== 'observing') {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
        if (String((st as any).locArgs?.[1] ?? '') === 'first') {
          scene.actions([
            { label: 'Finish your drink and look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued2'] },
          ]);
        } else {
          if (String((st as any).locArgs?.[1] ?? '') === 'second') {
            scene.actions([
              { label: 'Finish your drink and look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued6'] },
            ]);
          } else {
            if (String((st as any).locArgs?.[1] ?? '') === 'third') {
              scene.actions([
                { label: 'Finish your drink and look for some action', handler: (st: GameState) => {
    // TODO-QSP: act 'Go dance': gt 'katja_nightclub_first_orgy_sex', 'first_...
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Back to the party', goto: ['katja_nightclub_first_orgy', 'first_orgy_cumshot'] },
              ]);
            }
          }
        }
      } else {
        if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
          if (String((st as any).locArgs?.[1] ?? '') === 'first') {
            scene.actions([
              { label: 'Finish your drink and look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join2'] },
            ]);
          } else {
            if (String((st as any).locArgs?.[1] ?? '') === 'second') {
              scene.actions([
                { label: 'Finish your drink and look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join7'] },
              ]);
            } else {
              if (String((st as any).locArgs?.[1] ?? '') === 'third') {
                scene.actions([
                  { label: 'Look for some action', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join10'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Back to the party', goto: ['katja_nightclub_first_orgy', 'first_orgy_cumshot'] },
                ]);
              }
            }
          }
        } else {
          scene.actions([
            { label: 'Back to the party', goto: ['katja_nightclub_first_orgy', 'first_orgy_cumshot'] },
          ]);
        }
      }
    } else {
      scene.actions([
        { label: 'Quickly finish your drink and see what is going on', handler: (st: GameState) => {
    if (String((st as any).locArgs?.[1] ?? '') === 'first') {
      qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe2');
    } else {
      if (String((st as any).locArgs?.[1] ?? '') === 'second') {
        qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe6');
      } else {
        if (String((st as any).locArgs?.[1] ?? '') === 'third') {
          qspGoto(st, 'katja_nightclub_first_orgy_sex', 'first_orgy_observe8');
        } else {
          qspGoto(st, 'katja_nightclub_first_orgy', 'first_orgy_cumshot');
        }
      }
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterFirstOrgyDrinkNush(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_drink.jpg');
  scene.text('"Let\'s go get a drink," you suggest.');
  scene.text('She smiles. "Sure!"');
  (s as any).loc = 'katja_nightclub_first_orgy';
  (s as any).loc_arg = 'first_orgy_drink_nush2';
  qspCall(s, 'food_menu', 'no_image');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyDrinkNush2(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclub';
  (s as any).loc_arg = 'bar';
  (s as any).menu_loc = 'city_nightclub';
  (s as any).menu_arg = 'bar';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_drink.jpg');
  scene.text('As you get your drink, Anushka mixes herself a Honey Trap.');
  if (((s as any).anushkaQW ?? 0)?.['sex'] > 0) {
    if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID4 ?? 0), 'like');
      scene.text('"I knew you were a slut, but jumping on the first available dick is still a class above me," she laughs as she mixes her drink.');
      scene.text('"You\'re one to talk!" you retort. "You didn\'t even wear panties coming here and immediately put your pussy in my face at the first opportunity."');
      scene.text('"Oh please, like you don\'t love licking my pussy every chance you get!" she says with a smirk. "Besides, I wanted to get a little action and none of the guys were doing it for me," she adds with a slight shrug of her shoulders.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.text('"So... Enjoying the orgy so far? Tried any cock?" she asks.');
        scene.text('"I\'ve only tasted it so far, but I might try one later," you answer.');
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID4 ?? 0), 'dislike');
        scene.text('"So... Enjoying the orgy so far? Tried any cock?" she asks.');
        scene.text('"No. I\'m just observing. Not really something I\'m used to, unlike others," you answer.');
        scene.text('"So instead of having some slutty fun like the rest of us, you\'re just a perv that likes to watch others fuck? Got it. You should at least try licking some pussy," she replies with a wink.');
        scene.text('"Hey, I\'m not a pervert!" you snap back. "I\'m just not into these kinds of things."');
        scene.text('"Of course not. You just like to attend them and watch everyone else fuck," she says with a smirk.');
        scene.text('"Do you always have to be such a bitch?" you ask.');
        scene.text('"Whatever," she snorts with a roll of her eyes.');
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_sex'] >= 250  ||  ((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['city_sex'] >= 250) {
        scene.text('"So I get to see our famous class slut in action," she smiles as she mixes her drink. "I might be a bit of a slut, but jumping the first available cock is a step above me."');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 25  ||  ((s as any).fame ?? 0)?.['pav_sex'] >= 25  ||  ((s as any).fame ?? 0)?.['city_slut'] >= 25  ||  ((s as any).fame ?? 0)?.['city_sex'] >= 25) {
          scene.text('"I knew you weren\'t a prude, but <i>damn</i> are you even wilder than I thought!" she grins as she mixes her drink. "I might be a bit of a slut, but jumping on the first available cock is a step above me."');
        } else {
          scene.text('"Who knew that one of the class prudes is actually the biggest slut around?!" she laughs as she mixes her drink. "I might be a bit of a slut myself, but jumping on the first available cock is a step above me."');
        }
      }
      scene.text('"You\'re one to talk!" you retort. "You didn\'t even wear panties coming here and immediately put your pussy in my face at the first opportunity."');
      scene.text('"My pussy was getting wet and your face looked like a good seat. Not to mention you looked like you were eager to lick a little pussy, and it seems I was right..." she replies with a smirk.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 25  ||  ((s as any).fame ?? 0)?.['pav_sex'] >= 25  ||  ((s as any).fame ?? 0)?.['city_slut'] >= 25  ||  ((s as any).fame ?? 0)?.['city_sex'] >= 25) {
          scene.text('"So... Enjoying the orgy so far? Tried any cock?" she asks.');
          scene.text('"I\'ve only tasted it so far, but I might try one later," you answer.');
        } else {
          scene.text('"So how did a prude like you end up at an orgy?" she asks.');
          scene.text('"I\'m not a prude!" you retort. "I\'ve already given some blowjobs, and might try some more later."');
          scene.text('"Oh watch out world, she\'s given some blowjobs!" she giggles in some good natured ribbing.');
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID4 ?? 0), 'dislike');
        scene.text('"So... Enjoying the orgy so far? Tried any cock?" she asks.');
        scene.text('"No. I\'m just observing. Not really something I\'m used to, unlike others," you answer.');
        scene.text('"So instead of having some slutty fun like the rest of us, you\'re just a perv that likes to watch others fuck? Got it. You should at least try licking some pussy," she replies with a wink.');
        scene.text('"Hey, I\'m not a pervert!" you snap back. "I\'m just not into these kinds of things."');
        scene.text('"Of course not. You just like to attend them and watch everyone else fuck," she says with a smirk.');
        scene.text('"Do you always have to be such a bitch?" you ask.');
        scene.text('"Whatever," she snorts with a roll of her eyes.');
      }
    }
  }
  scene.text('"Have you tried any cock, Nush?" you ask.');
  scene.text('"Nope," she replies. "I think I\'ll stay with pussy tonight. None of the guys are really doing it for me, but there are some fine looking bitches with some sexy pussies here."');
  scene.text('She moves her tongue around in her drink as if she was licking pussy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around to see what Katja is doing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'arousal', 'erotic_nudity', 1, 'gangnbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja7.jpg');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSecond1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('Anushka\'s eyes follows yours to see what Katja is doing.');
    if (((st as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      scene.text('"Damn, who knew that Princess Katja was a closet slut? Straight from one cock to the next!" Anushka says, sounding a little impressed.');
      if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((st as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
        scene.text('"While I\'ve seen her do many wild things, this is something else, but I knew she had it in her," you reply.');
      } else {
        scene.text('"I know she\'s not a prude since I\'ve had quite a few sexual encounters with her, but this is still surprising to me," you reply.');
      }
    }
    scene.actions([
      { label: 'Continue to watch Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja8.jpg');
    scene.text('You continue to sip your drink while focusing on the show the redhead performs.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSecond2(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"Is she even aware of what\'s going on, or is she just completely zoned out and slutting it up?" Anushka asks, almost a little concerned.');
    scene.text('"She\'s usually very in control, but you\'re right; she does look a little spaced out," you reply. "Maybe I should check on her?"');
    scene.actions([
      { label: 'See if Katja is okay', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSecondTalk1(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"She seems fine, just a slut in need of a good fucking," Anushka says with a slight shrug.');
    scene.text('"Yeah, she\'s just extremely horny," you reply.');
    scene.text('"Let\'s continue watching the show then," she says with a grin.');
    scene.actions([
      { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (30);
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja10` + ((((st as any).katjaQW ?? 0)?.['horny'] >= 100) ? ('b') : ('a')) + '.jpg"></center>');
    scene.text('You and Anushka continue to sip your drinks while watching the redhead as if she was the star of a porn movie.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFirstOrgyKatjaSecond3(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      // TODO-QSP: dynamic text: "That was quite a show, but my drink is empty and I''m in need of some action my...
      scene.text(`"That was quite a show, but my drink is empty and I'm in need of some action myself," Anushka says. "See you later, ${((st as any).pcs_nickname ?? '')}."`);
      scene.actions([
        { label: 'Get some more cock', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued4'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.text('"That was quite a show, but my drink is empty and I\'m getting horny again, so why don\'t you use that skilled tongue on my pussy again?" Anushka asks and crawls up on the couch next to Katja.');
        scene.actions([
          { label: 'Go down on Anushka', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join4'] },
        ]);
      } else {
        scene.text('"That was quite a show, but my drink is empty and I\'m getting horny again. Seeing as you\'re no fun tonight, I\'ll find some other pussy."');
        scene.text('She gives you a look that seems like an invitation, but when you don\'t react, she walks away.');
        scene.actions([
          { label: 'See what she does', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe4'] },
        ]);
      }
    }
  } },
    ]);
  } },
      { label: 'Finish your drink with Nush', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 3, 'orgy');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_drink.jpg');
    scene.text('Katja seems fine, so you turn back to Nush "She\'s okay. I\'ll check on her later."');
    scene.text('You and Anushka continue to sip your drinks while watching what goes on around you.');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
      // TODO-QSP: dynamic text: "That was quite a show, but my drink is empty and I''m in need of some action my...
      scene.text(`"That was quite a show, but my drink is empty and I'm in need of some action myself," Anushka says. "See you later, ${((st as any).pcs_nickname ?? '')}."`);
      scene.actions([
        { label: 'Get some more cock', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_initiative_continued4'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in') {
        scene.text('"That was quite a show, but my drink is empty and I\'m getting horny again, so why don\'t you use that skilled tongue on my pussy again?" Anushka asks and crawls up on the couch next to Katja.');
        scene.actions([
          { label: 'Go down on Anushka', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_join4'] },
        ]);
      } else {
        scene.text('"That was quite a show, but my drink is empty and I\'m getting horny again. Seeing as you\'re no fun tonight, I\'ll find some other pussy," she says while giving you a look that seems like an invitation, but when you don\'t react, she walks away.');
        scene.actions([
          { label: 'See what she does', goto: ['katja_nightclub_first_orgy_sex', 'first_orgy_observe4'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyKatjaBeforeFuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  // TODO-QSP: dynamic text: You see Katja holding <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>>''...
  scene.text(`You see Katja holding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}'s hand as he fucks ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} from behind on one of the couches.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_guy'']>> is holding her h...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} is holding her hips with one hand while stroking his cock. It looks like he wants to put it in Katja, but you can't tell if she's ready for it or not.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaFirstPenetration(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_guy'']>> slowly aligns hi...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} slowly aligns his cock with Katja's pussy before he carefully pushes inside.`);
  scene.text('You see her look up, her expression somewhat confused, like she\'s not really comprehending what\'s going on, but then she makes a face of satisfaction and doesn\'t make any protests.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaFirst(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  // TODO-QSP: dynamic text: You look to see what Katja is doing and see her getting fucked from behind by <<...
  scene.text(`You look to see what Katja is doing and see her getting fucked from behind by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} while making out with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}.`);
  // TODO-QSP: dynamic text: She looks quite into it, fondling <<$katja_first_orgy_temp[''first_orgy_name_sec...
  scene.text(`She looks quite into it, fondling ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s breast while the guys fuck them in sync.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyFirstChangeOfPosition(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  // TODO-QSP: dynamic text: Katja is still fucking <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_gu...
  scene.text(`Katja is still fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}, but they have moved and she's now riding him with a pretty satisfied look on her face.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'']>> is fondling Ka...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} is fondling Katja's ass while being fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}.`);
  // TODO-QSP: end
  if (((s as any).locArgs ?? 0) === 'first_orgy_katja_getting_naked') {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'']>> has stopped fu...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} has stopped fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} to help Katja remove her dress as Katja continues to ride ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}'s cock.`);
  }
  scene.build();
}

function enterFirstOrgyKatjaFirstPotentialOrgasm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You find her riding <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_guy''...
  scene.text(`You find her riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}'s cock.`);
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    scene.text('She suddenly makes a face that you recognize as the one she makes when she\'s cumming.');
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
    ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    ((s as any).ktajaQW = (s as any).ktajaQW ?? {})['horny'] = 0;
  } else {
    scene.text('She looks pretty satisfied, but still has a puzzled look on her face, like she\'s not completely comprehending what\'s happening.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecond1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: You scan the room and notice Katja is once again on all fours on one of the couc...
  scene.text(`You scan the room and notice Katja is once again on all fours on one of the couches as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} lines his ${((s as any).dick_girth2 ?? '')} cock up with her wet slit.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecond2(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> pushes his cock all the...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} pushes his cock all the way into Katja's pussy in one swift movement and starts to pound her.`);
  scene.text('Her expression is still confused, but she looks extremely aroused at the same time. She then starts making the kind of noises she usually does when she\'s enjoying sex.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecondTalk1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 20));
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/katja/un...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_katja9` + ((((s as any).katjaQW ?? 0)?.['horny'] >= 30) ? ('a') : ('b')) + '.jpg"></center>');
  // TODO-QSP: dynamic text: You decide to check on her, even though she''s in the middle of being pounded by...
  scene.text(`You decide to check on her, even though she's in the middle of being pounded by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}.`);
  scene.text('"Are you feeling okay?" you shout over the sounds of the sex happening around you.');
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 70) {
    scene.text('She turns her head to face you.');
    scene.text('"Oh... Yes... I\'m good," she pants. "Ohhh! He\'s so big! Hitting me in... The right... place... Ahh! I think... I think....  Cumming.... Soon.... Ahh!!"');
    scene.text('She bites her lip to stop herself from screaming.');
  } else {
    scene.text('She turns her head to face you.');
    scene.text('"Okay... Yes... I\'m good," she pants. "Ohhh! He\'s so big! But I\'m... Fine... Ahh! Don\'t worry."');
    // TODO-QSP: dynamic text: She then turns her attention back to <<$katja_first_orgy_temp[''first_orgy_name_...
    scene.text(`She then turns her attention back to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} and the pounding she's receiving from him.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecond3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    // TODO-QSP: dynamic text: Just as <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> pushes hard and...
    scene.text(`Just as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} pushes hard and deep into Katja, she bends her back upwards and lets out a huge scream, which you know indicates that she just came very hard.`);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
    if (((s as any).KatjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    }
    ((s as any).ktajaQW = (s as any).ktajaQW ?? {})['horny'] = 0;
  } else {
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> is pushing his cock dee...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} is pushing his cock deep and hard into Katja's pussy in a steady rhythm, forcing her to bite her lip to stop herself from crying out.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecond4(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  // TODO-QSP: dynamic text: You look around and see Katja riding <<$katja_first_orgy_temp[''first_orgy_name_...
  scene.text(`You look around and see Katja riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} on a couch with a big smile on her face.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSecondTalk2(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  scene.text('"How are you doing, Katja?" you ask as you look over at your friend.');
  scene.text('"Great! Can\'t... Talk... Need to... Concentrate... Up down, up down..." she answers with a perplexed look on her face, like she\'s somewhere else and not really present in the moment with you.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaCarry(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  // TODO-QSP: dynamic text: You see her being carried by <<$katja_first_orgy_temp[''first_orgy_name_bald_guy...
  scene.text(`You see her being carried by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} as he's still fucking her, but some other girls block your view before you can see where they're going.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaTwerking(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
  // TODO-QSP: dynamic text: You find her up on the couch next to <<$katja_first_orgy_temp[''first_orgy_name_...
  scene.text(`You find her up on the couch next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''}, both of them trying to twerk in sync with the rhythm of the music.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaKissingBlackGirl(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
  // TODO-QSP: dynamic text: You see Katja making out with <<$katja_first_orgy_temp[''first_orgy_name_second_...
  scene.text(`You see Katja making out with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}. She must be a pretty good kisser since Katja seems to be eagerly returning the kiss.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaThird1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  // TODO-QSP: dynamic text: She is once again on all fours on one of the couches, being pounded from behind ...
  scene.text(`She is once again on all fours on one of the couches, being pounded from behind by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'']>> is on her back...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} is on her back next to them, getting fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaThirdTalk1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  scene.text('"Deciding to try all three guys?" you ask teasingly as you approach them.');
  scene.text('"What? Oh... Yeah. It just... Happened..." she answers over her heavy panting, enough for you to know she\'s not really clear about how it happened.');
  scene.text('"So who is best?" you shouts back.');
  scene.text('"They are all... GREAAA-!!!" she shouts back, her sentence abruptly being cut off by an extremely loud moan.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaThird2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: She is on her back, her hand on <<$katja_first_orgy_temp[''first_orgy_name_tatoo...
  scene.text(`She is on her back, her hand on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''}'s chest as he pounds her pussy fast and deep.`);
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 80) {
    scene.text('Her eyes are semi closed, like she\'s trying to not show them rolling around, and her lips are pressed together hard to prevent her announcing her coming orgasm.');
  } else {
    scene.text('Her eyes are closed and her breathing is not as fast as you would expect for a horny girl. It\'s almost as if she\'s exhausted from the fucking.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaThird3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: As <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> continues ramming h...
  scene.text(`As ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} continues ramming his cock in and out of her pussy, Katja can't suppresss her orgasm any longer and lets out an almost deafening scream, announcing to the entire room that she's cumming.`);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
  if (((s as any).KatjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
  }
  ((s as any).ktajaQW = (s as any).ktajaQW ?? {})['horny'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaForth1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: Through a sea of naked bodies you see the three men gathered around the same cou...
  scene.text(`Through a sea of naked bodies you see the three men gathered around the same couch, their cocks deep in the pussies of the three biggest sluts at the party; ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} and Katja!`);
  if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0  ||  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] >= 3) {
    scene.text('While you knew that Katja is secretly a wild girl, it\'s still a little surprising to see her acting like a cock hungry slut.');
  } else {
    scene.text('While you knew Katja is not the shy prudish girl some think she is, seeing her act like a cock hungry slut among strangers is still not something you had expected.');
  }
  // TODO-QSP: dynamic text: She looks like she''s enjoying herself, though, being pounded from behind by <<$...
  scene.text(`She looks like she's enjoying herself, though, being pounded from behind by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} while making out with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaForthTalk1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: You make your way towards Katja, but it take you a little longer than expected s...
  scene.text(`You make your way towards Katja, but it take you a little longer than expected since ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} has decided to move ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and she is now on her back between Katja and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}.`);
  scene.text('When you close to Katja, you shout to get her attention. "Are you having fun, Katja?!"');
  scene.text('She turns her head towards you. "Hu? Oh, it\'s you.... Did you... Ask something?"');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaForthTalk2(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  scene.text('"I asked if you\'re having fun," you explain.');
  scene.text('"Yes... I\'m having... A lot of... fun," she replies, her huge smile indicating that she\'s very much being sincere.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaForth2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    // TODO-QSP: dynamic text: Katja''s moans are getting louder, indicating that she is close to orgasm. Seems...
    scene.text(`Katja's moans are getting louder, indicating that she is close to orgasm. Seems like ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} also know this, so he lifts up her right leg so he can push his ${((s as any).dick2 ?? '')} cm ${((s as any).dick_girth2 ?? '')} cock deep into her pussy.`);
    scene.text('This pushes Katja over the edge and she cums with a huge scream.');
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
    if (((s as any).KatjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    }
    ((s as any).ktajaQW = (s as any).ktajaQW ?? {})['horny'] = 0;
  } else {
    // TODO-QSP: dynamic text: Katja moans softly while looking almost intimately at <<$katja_first_orgy_temp['...
    scene.text(`Katja moans softly while looking almost intimately at ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} as he fucks her from behind.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaFifth1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 20));
  // TODO-QSP: dynamic text: She''s back to fucking <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_gu...
  scene.text(`She's back to fucking ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''}, who has her on the back on one of the couches in a particularly uncomfortable looking position.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaFifth2(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 20));
  // TODO-QSP: dynamic text: <<$npc_usedname[''A144'']>> and <<$katja_first_orgy_temp[''first_orgy_name_white...
  scene.text(`${((s as any).npc_usedname ?? 0)?.['A144'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} are sitting on the couch, kissing from time to time, but that doesn't prevent ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} from moving Katja so that she's on top of ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} as he fucks her doggystyle.`);
  // TODO-QSP: dynamic text: The two girls don''t seem to mind, <<$katja_first_orgy_temp[''first_orgy_name_wh...
  scene.text(`The two girls don't seem to mind, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} even laughing about the situation. Katja, on the other hand, looks like she isn't really registering what's going on.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaFifth3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    // TODO-QSP: dynamic text: '<<$npc_usedname[''A144'']>> and <<$katja_first_orgy_temp[''first_orgy_name_whit...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A144'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} are still making out when Katja lets out a screaming roar above them, indicating that she's had ` + ((((s as any).katjaQW ?? 0)?.['orgsam_at_first_orgy_count'] > 0) ? ('yet another') : ('an')) + ' orgasm.');
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
    if (((s as any).KatjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    }
    ((s as any).ktajaQW = (s as any).ktajaQW ?? {})['horny'] = 0;
  } else {
    // TODO-QSP: dynamic text: <<$npc_usedname[''A144'']>> and <<$katja_first_orgy_temp[''first_orgy_name_white...
    scene.text(`${((s as any).npc_usedname ?? 0)?.['A144'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} are still making out as Katja leans on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} to steady herself from the pounding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} is giving her.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSixt1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
  // TODO-QSP: dynamic text: You see her riding <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>>''s <...
  scene.text(`You see her riding ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}'s ${((s as any).dick3 ?? '')} cm long ${((s as any).dick_girth3 ?? '')} cock reverse cowgirl.`);
  scene.text('The expression on her face looks happy, but somewhat tired. She still a little of the faraway look that she\'s had most of the evening.');
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSixtTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] + 10*((s as any).katjaQW ?? 0)?.['orgsam_at_first_orgy_count'] >= 70) {
    scene.text('"Still having fun?" you ask.');
    scene.text('"Lots!" she answers with a huge smile as she closes her eyes to savior the fucking.');
  } else {
    scene.text('"Still having fun?" you ask.');
    scene.text('"Oh. Yes, I\'m still having fun. How about you?" she answers as her face turns more serious.');
    scene.text('The fucking she\'s getting right now clearly doesn\'t seem to really get to her.');
    scene.text('"Sure, I\'m also having fun," you reply with a smile.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSixt2(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: Katja is still getting fucked by <<$katja_first_orgy_temp[''first_orgy_name_bald...
  scene.text(`Katja is still getting fucked by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}, who has her on her back on the arm of the couch.`);
  scene.text('Just as you spot them, he pulls out of her at the last second and cums over her pussy.');
  // TODO-QSP: dynamic text: Before you can do anything, <<$katja_first_orgy_temp[''first_orgy_name_second_bl...
  scene.text(`Before you can do anything, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} is eagerly licking it up as if she were starving.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSeventh1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> has sat down, looking v...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} has sat down, looking very satisfied as Katja and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} kneel at either side of him, taking turns to clean his cock.`);
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'']>> is getting ham...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} is getting hammered from behind by ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} has moved in to fuck Katja's pussy.`);
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyKatjaSeventh2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    // TODO-QSP: dynamic text: Katja pops <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>>''s cock out ...
    scene.text(`Katja pops ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''}'s cock out of her mouth as her screams announce another orgasm when ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} buries his cock deep in her pussy one last time.`);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgsam_at_first_orgy_count'] = ((s as any).katjaQW['orgsam_at_first_orgy_count'] ?? 0) + (1);
    if (((s as any).KatjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).KatjaQW = (s as any).KatjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    }
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  } else {
    // TODO-QSP: dynamic text: Katja is talking with <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> a...
    scene.text(`Katja is talking with ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} cleans his cock. She's gotten to a state where she barely notices ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} pounding her.`);
    scene.text('He himself seems more focused on his own upcoming orgasm than on pleasing Katja.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgyWatchingLastGuyCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_last_guy_cumming1.jpg');
  // TODO-QSP: dynamic text: You look around and see a group of girls gathered around a couch where <<$katja_...
  scene.text(`You look around and see a group of girls gathered around a couch where ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} has ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} on her back while ramming his cock into her pussy,`);
  // TODO-QSP: dynamic text: You approach and see Anushka on the floor next to <<$katja_first_orgy_temp[''fir...
  scene.text(`You approach and see Anushka on the floor next to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}, playing with one of her breasts with one hand while supporting her with the other.`);
  // TODO-QSP: dynamic text: Next to them are <<$katja_first_orgy_temp[''first_orgy_name_curly'']>>, <<$katja...
  scene.text(`Next to them are ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_curly'] ?? ''}, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_long_blond_hair'] ?? ''}, who are all watching the sex.`);
  // TODO-QSP: dynamic text: Behind the back of the couch is <<$katja_first_orgy_temp[''first_orgy_name_short...
  scene.text(`Behind the back of the couch is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_short_blond_hair'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl'] ?? ''}, the latter groping ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s other breast.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch him cum', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_last_guy_cumming2.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_green_shirt_guy'']>> suddenly pulls o...
    scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} suddenly pulls out of ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s pussy and walks up to her face while stroking it.`);
    scene.text('She opens her mouth, closes her eyes and sticks out her tongue, ready to have him cum in her mouth and on her face.');
    // TODO-QSP: dynamic text: After just a few strokes, <<$katja_first_orgy_temp[''first_orgy_name_green_shirt...
    scene.text(`After just a few strokes, ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} cums with so much force that his cum overshoots ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} and lands on the face of a very surprised ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''}.`);
    // TODO-QSP: dynamic text: He still has some more spurts in him, but they''re not as powerful and end up la...
    scene.text(`He still has some more spurts in him, but they're not as powerful and end up landing on ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}'s face or on the floor, only avoiding Anushka because she's quick enough to dodge the splatter.`);
    scene.actions([
      { label: 'See their reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_last_guy_cumming3.jpg');
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_white_dress'']>> looks very shocked, ...
    scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} looks very shocked, clearly not used to getting cum on her face as several of the other girls laugh.`);
    // TODO-QSP: dynamic text: "I''m sorry I couldn''t control it, but you girls have been so fantastic that I ...
    scene.text(`"I'm sorry I couldn't control it, but you girls have been so fantastic that I just couldn't hold it anymore!" ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} says.`);
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_second_black_girl'']>>  just looks at...
    scene.text(`${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''}  just looks at him with a slutty expression, Anushka still playing with her breast.`);
    // TODO-QSP: dynamic text: They then start to get up, one of the girls helping <<$katja_first_orgy_temp[''f...
    scene.text(`They then start to get up, one of the girls helping ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_white_dress'] ?? ''} to clean the cum from her face as her shock turns into laughter.`);
    scene.actions([
      { label: 'Get dressed', goto: ['katja_nightclub_first_orgy', 'first_orgy_get_dressed'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstOrgyGetDressed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  qspCall(s, 'cum_cleanup', '', 1);
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('With all the guys having cum, the party seems to be coming to an end. A couple of girls head to the bar to get some more drinks, but most start to get dressed.');
  // TODO-QSP: dynamic text: You help Katja clean up and get dressed. It''s clear she''s still in a sort of d...
  scene.text(`You help Katja clean up and get dressed. It's clear she's still in a sort of dreamlike state; when ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} tries to strike up a conversation with her, it's clear that she's not listening to what he's saying.`);
  if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in'  ||  ((s as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') {
    // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> notices this, so he ta...
    scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} notices this, so he talks to you instead.`);
    scene.text('"You were great, and so was your friend. Tell her that when she\'s back on planet Earth. Thanks for making it a wonderful evening," he says before moving on.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['first_orgy'] ===  'observing+nush_lick') {
      // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_tatoo_guy'']>> notices this, so he ta...
      scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy'] ?? ''} notices this, so he talks to you instead.`);
      scene.text('"Too bad you kept out of it until the last minute. I would have loved to give your pussy a try. At least I got to paint your face with my cum," he says before moving on.');
    }
  }
  // TODO-QSP: dynamic text: <<$katja_first_orgy_temp[''first_orgy_name_bald_guy'']>> doesn''t approach Katja...
  scene.text(`${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy'] ?? ''} doesn't approach Katja since ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl'] ?? ''} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} are still all over him.`);
  if (((s as any).katjaQW ?? 0)?.['first_orgy'] !== 'lesbian') {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['katja_slut'] = 1;
    scene.text('"Now the gold digging sluts will fight for his attention. Just wait for the claws to come out; it could be a fun cat fight to watch," you hear Anushka say from behind you.');
    if (((s as any).anushkaQW ?? 0)?.['sex'] > 0) {
      if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'observing') {
        // TODO-QSP: dynamic text: "I''m surprised you didn''t join the fun <<$pcs_nickname>>, but not as surprised...
        scene.text(`"I'm surprised you didn't join the fun ${((s as any).pcs_nickname ?? '')}, but not as surprised as I was to see what a big slut Katja is!" she continues.`);
      } else {
        // TODO-QSP: dynamic text: "I knew you were a huge slut <<$pcs_nickname>>, but Katja? Now there was a surpr...
        scene.text(`"I knew you were a huge slut ${((s as any).pcs_nickname ?? '')}, but Katja? Now there was a surprise!" she continues.`);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['first_orgy'] === 'observing') {
        // TODO-QSP: dynamic text: "Too bad you didn''t really join the fun, <<$pcs_nickname>>. At least you know h...
        scene.text(`"Too bad you didn't really join the fun, ${((s as any).pcs_nickname ?? '')}. At least you know how to have fun, Katja. It was quite a surprise to see what a big slut you are," she continues.`);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  ((s as any).fame ?? 0)?.['pav_sex'] >= 150  ||  ((s as any).fame ?? 0)?.['city_slut'] >= 150  ||  ((s as any).fame ?? 0)?.['city_sex'] >= 150) {
          // TODO-QSP: dynamic text: "I''ve heard that you were a huge slut <<$pcs_nickname>>, but Katja? Now there w...
          scene.text(`"I've heard that you were a huge slut ${((s as any).pcs_nickname ?? '')}, but Katja? Now there was a surprise!" she continues.`);
        } else {
          scene.text('"It was a surprise to see what big sluts you both are, especially you Katja. I guess I can\'t call you little princess anymore, huh?" she continues with a smirk.');
        }
      }
    }
    scene.text('Katja doesn\'t say anything, but her face turns completely red, which makes Anushka laugh.');
    scene.text('"Well, it\'s been fun partying with you, girls. We should do this again, but I need to get going. Later, sluts!" she says and leaves before you have time to say anything.');
  }
  scene.text('You and Katja put on the last of your clothes. With the way she\'s acting, going home is probably the best choice right now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', goto: ['katja_nightclub_first_orgy', 'first_orgy_walk_home'] },
  ]);
  scene.build();
}

function enterFirstOrgyWalkHome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['on_date'] = 1;
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
  scene.text('You walk through the club and get your coats, Katja just following you looking like she\'s in another world.');
  // TODO-QSP: dynamic text: 'As you start walking towards the metro, she still hasn''t said a word, but you ...
  scene.text('As you start walking towards the metro, she still hasn\'t said a word, but you notice that the ' + ((((s as any).temper ?? 0) < 15) ? ('cool air') : ('lack of noise')) + ' has changed her expression.');
  scene.text('She\'s still quiet, which is not like her usual self, but looks thoughtful, like she\'s complementing what happened.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her how she is', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('"You\'re not usually this quiet when we walk home," you comment.');
    scene.text('"Huh? I\'m just tired. I feel like I\'ve run a marathon..." she replies.');
    scene.text('"Yeah, who knew that sex could be that exhausting?" you quip.');
    scene.text('"Yeah, it really was.... Oh shit! What did I do?!" she exclaims.');
    scene.actions([
      { label: 'Try to help her remember', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('"What do you think you did?" you reply, trying not to sound judgmental.');
    scene.text('"I behaved like a complete slut that jumped on every dick put in front of me, like it was the only possible thing to do!" she replies, suddenly sounding much more animated.');
    scene.text('"Yeah? So what?" you reply.');
    scene.text('"So what? <i>So what</i>?! I\'m not a slut! I\'m not Sonia! Sorry, that wasn\'t nice..." she almost screams, sounding upset but catching herself talking ill about her former friend.');
    scene.text('"No really, what\'s the problem with having sex with several men, assuming that you did it freely?" you ask.');
    scene.text('"Have you seen how being known as a slut ruined Sonia\'s life? I don\'t want people to know me as a slut!" she replies somewhat angrily.');
    scene.text('"So you don\'t want people to know you as a strong sexual woman doing what she wants?" you ask.');
    scene.text('"No, I don\'t want to be known as a loose, easy girl who spreads her legs for everybody!" she replies, seeming to come somewhat down.');
    scene.text('"So don\'t," you shrug. "Don\'t let people take advantage of you. You\'re normally very good at deciding what you want."');
    scene.text('"No, I don\'t," she replies firmly. "But it\'s not that I\'m worried about. It\'s what people are going to <i>say</i> about me."');
    scene.actions([
      { label: 'Tell her not to care about what people say', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('"Not that you should care, but what are they going to say? That you participated in an orgy together? That will just implicate them as much as you," you reply.');
    scene.text('"But they didn\'t fuck three men for several hours straight. <i>I</i> did!" she replies.');
    scene.text('"I didn\'t see any camaras after the picture where we are all clothed, so it will just be their word against ours," you explain.');
    scene.text('"Believe me, anybody that was there will not be spreading any rumors about other people, since they will implicate themselves. That\'s also why people that were there will deny rumors spread by people that were not there" you continue.');
    scene.text('"What if Anushka says something? People wouldn\'t be surprised by that and might believe her," she says, clearly afraid.');
    scene.text('You shake your head. "She wouldn\'t. I\'s not her style. When have you ever heard her judging others for being openly sexual? Say what you want about her, but she isn\'t going to judge others for that."');
    scene.text('"I hope you\'re right. Anyway, what happened happened. I can\'t change that now, so no need to dwell on it. We\'ll just see how things turn out," she concludes, sounding more more like her usual self.');
    scene.actions([
      { label: 'Try to get to know why she acted the way she did', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('You feel that she has put her worries about her reputation aside, so you decide to ask her about what happened.');
    scene.text('"So, what got into you? I know we\'ve done some wild tings together, but I\'ve never seen you take initative like <i>that</i> before!" you grin.');
    // TODO-QSP: dynamic text: '"I don''t know, and that''s what scares me a little," she answers. "I was just ...
    scene.text('"I don\'t know, and that\'s what scares me a little," she answers. "I was just watching ' + ((((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative') ? ('you and ') : (' ')) + `${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl'] ?? ''} fucking, which was making me horny when ${((st as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy'] ?? ''} asked if he could fuck me, and I thought why not, at least for a little while? Maybe he would make me cum and I wouldn't be so horny for the rest of the party."`);
    scene.text('She sighs. "And then I just couldn\'t stop! It was like something else took over. Like pure instinct made me say yes whenever I was offered a new cock. <i>That\'s</i> what scares me; the feeling of not being in control."');
    scene.text('"So did somebody make you do something you didn\'t want to do? Are you afraid of getting abused?" you ask, a little nervous');
    scene.text('"No, it\'s not like that. I never agreed to anything that I didn\'t want to do. It\'s just that there was no thought behind my decisions," she replies.');
    scene.text('"You know me, I don\'t do anything rash, that\'s Vicky\'s way of doing things," she continues. "I usually think things through before I make any decisions. Yes, I know it sometimes makes me seem indecisive, but I prefer that to not knowing what I\'m doing. Tonight was the complete opposite. Tonight, I was my sister."');
    scene.text('"So that\'s what scares me. That I just acted without thinking about the consequences. That I lost control," she finishes.');
    scene.actions([
      { label: 'Ask how the sex was', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('You decide to move the conversation in a lighter direction.');
    scene.text('"So how was the sex?" you ask. Were they any good?"');
    if (((st as any).katjaQW ?? 0)?.['orgsam_at_first_orgy_count'] === 0) {
      scene.text('"They were good, but even with all the poundings I got, I somehow never actually got an orgasm. Maybe my lack of control also prevented me from getting off?" she answers.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['orgsam_at_first_orgy_count'] === 1) {
        scene.text('"They were good, but I only had the one orgasm. Maybe my lack of control also prevented me from getting off?" she answers.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['orgsam_at_first_orgy_count'] < 4) {
          scene.text('"They weere great!" she answers. "They had me cumming several times, so complaints there."');
        } else {
          scene.text('"They were fantastic!" she answers. "They had me cumming so many times! I\'ve never had so many orgasms in one night before!"');
        }
      }
    }
    scene.text('"My thoughts have nothing to do with regrets about the sex I had. I\'m just concerned about not knowing the consequences of my actions."');
    scene.actions([
      { label: 'Ask if she would do it again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (Math.min(10, Math.max(100-(((st as any).katjaQW ?? {})?.['slut'] ?? 0), 0)));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
    if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] < 3) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['simultanous_boys'] = 3;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['on_date'] = 1;
    if (((st as any).hour ?? 0) > 10) {
      ((st as any).locat = (st as any).locat ?? {})['katja_rand2'] = ((st as any).daystart ?? 0);
    } else {
      ((st as any).locat = (st as any).locat ?? {})['katja_rand3'] = ((st as any).daystart ?? 0) - 1;
    }
    ((st as any).locat = (st as any).locat ?? {})['katja_save2'] = 38;
    ((st as any).locat = (st as any).locat ?? {})['katja'] = ((st as any).locat ?? 0)?.['katja_save2'];
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/walking_home_at_night.jpg');
    scene.text('"So, if you liked it, is it something you would do again?" you ask.');
    scene.text('"If you\'re talking about losing control, then no. But if I\'m in control, then maybe. If I could do it without nasty rumors spreading," she answers and then seems to think about it for a minute.');
    scene.text('"If knowing that there would be no negative consequences, and that I would stay in control, then I could definitely see myself having another orgy, even if I barely know them."');
    if (((st as any).katjaQW ?? 0)?.['first_orgy'] === 'joining_in'  ||  ((st as any).katjaQW ?? 0)?.['first_orgy'] === 'taking_initiative'  ||  ((st as any).katjaQW ?? 0)?.['first_orgy'] === 'observing+dick') {
      scene.text('"But enough about me. What about you? How was your fucking?" she asks. "I did notice at least one cock in your pussy, but I didn\'t follow you closely. So how many did you fuck?"');
      scene.text('You start telling her about your experience, passing the time for the rest of the journey to the station.');
    } else {
      scene.text('"But enough about me. What about you?" she asks. "I didn\'t see you fucking anybody. Why did you not join in?"');
      scene.text('You explain why you avoided the men, passing the time for the rest of the journey to the station.');
    }
    scene.text('Before you know it, you have arrived at the metro station.');
    scene.actions([
      { label: 'Enter the station', goto: ['katja_city', 'metro'] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: !2026/01/02
  const arg = s.locArg;
  switch (arg) {
    case 'first_orgy_invite':
      enterFirstOrgyInvite(s, scene);
      break;
    case 'after_acceptance':
      enterAfterAcceptance(s, scene);
      break;
    case 'first_orgy_dance':
      enterFirstOrgyDance(s, scene);
      break;
    case 'first_orgy_drink':
      enterFirstOrgyDrink(s, scene);
      break;
    case 'first_orgy_drink2':
      enterFirstOrgyDrink2(s, scene);
      break;
    case 'first_orgy_check_nush':
      enterFirstOrgyCheckNush(s, scene);
      break;
    case 'first_orgy_escalation':
      enterFirstOrgyEscalation(s, scene);
      break;
    case 'first_orgy_leaving':
      enterFirstOrgyLeaving(s, scene);
      break;
    case 'first_orgy_cumshot':
      enterFirstOrgyCumshot(s, scene);
      break;
    case 'first_orgy_drink_alone':
      enterFirstOrgyDrinkAlone(s, scene);
      break;
    case 'first_orgy_drink_alone2':
      enterFirstOrgyDrinkAlone2(s, scene);
      break;
    case 'first_orgy_drink_nush':
      enterFirstOrgyDrinkNush(s, scene);
      break;
    case 'first_orgy_drink_nush2':
      enterFirstOrgyDrinkNush2(s, scene);
      break;
    case 'first_orgy_katja_before_fuck':
      enterFirstOrgyKatjaBeforeFuck(s, scene);
      break;
    case 'first_orgy_katja_first_penetration':
      enterFirstOrgyKatjaFirstPenetration(s, scene);
      break;
    case 'first_orgy_katja_first':
      enterFirstOrgyKatjaFirst(s, scene);
      break;
    case 'first_orgy_first_change_of_position':
      enterFirstOrgyFirstChangeOfPosition(s, scene);
      break;
    case 'first_orgy_katja_first_potential_orgasm':
      enterFirstOrgyKatjaFirstPotentialOrgasm(s, scene);
      break;
    case 'first_orgy_katja_second1':
      enterFirstOrgyKatjaSecond1(s, scene);
      break;
    case 'first_orgy_katja_second2':
      enterFirstOrgyKatjaSecond2(s, scene);
      break;
    case 'first_orgy_katja_second_talk1':
      enterFirstOrgyKatjaSecondTalk1(s, scene);
      break;
    case 'first_orgy_katja_second3':
      enterFirstOrgyKatjaSecond3(s, scene);
      break;
    case 'first_orgy_katja_second4':
      enterFirstOrgyKatjaSecond4(s, scene);
      break;
    case 'first_orgy_katja_second_talk2':
      enterFirstOrgyKatjaSecondTalk2(s, scene);
      break;
    case 'first_orgy_katja_carry':
      enterFirstOrgyKatjaCarry(s, scene);
      break;
    case 'first_orgy_katja_twerking':
      enterFirstOrgyKatjaTwerking(s, scene);
      break;
    case 'first_orgy_katja_kissing_black_girl':
      enterFirstOrgyKatjaKissingBlackGirl(s, scene);
      break;
    case 'first_orgy_katja_third1':
      enterFirstOrgyKatjaThird1(s, scene);
      break;
    case 'first_orgy_katja_third_talk1':
      enterFirstOrgyKatjaThirdTalk1(s, scene);
      break;
    case 'first_orgy_katja_third2':
      enterFirstOrgyKatjaThird2(s, scene);
      break;
    case 'first_orgy_katja_third3':
      enterFirstOrgyKatjaThird3(s, scene);
      break;
    case 'first_orgy_katja_forth1':
      enterFirstOrgyKatjaForth1(s, scene);
      break;
    case 'first_orgy_katja_forth_talk1':
      enterFirstOrgyKatjaForthTalk1(s, scene);
      break;
    case 'first_orgy_katja_forth_talk2':
      enterFirstOrgyKatjaForthTalk2(s, scene);
      break;
    case 'first_orgy_katja_forth2':
      enterFirstOrgyKatjaForth2(s, scene);
      break;
    case 'first_orgy_katja_fifth1':
      enterFirstOrgyKatjaFifth1(s, scene);
      break;
    case 'first_orgy_katja_fifth2':
      enterFirstOrgyKatjaFifth2(s, scene);
      break;
    case 'first_orgy_katja_fifth3':
      enterFirstOrgyKatjaFifth3(s, scene);
      break;
    case 'first_orgy_katja_sixt1':
      enterFirstOrgyKatjaSixt1(s, scene);
      break;
    case 'first_orgy_katja_sixt_talk1':
      enterFirstOrgyKatjaSixtTalk1(s, scene);
      break;
    case 'first_orgy_katja_sixt2':
      enterFirstOrgyKatjaSixt2(s, scene);
      break;
    case 'first_orgy_katja_seventh1':
      enterFirstOrgyKatjaSeventh1(s, scene);
      break;
    case 'first_orgy_katja_seventh2':
      enterFirstOrgyKatjaSeventh2(s, scene);
      break;
    case 'first_orgy_watching_last_guy_cum':
      enterFirstOrgyWatchingLastGuyCum(s, scene);
      break;
    case 'first_orgy_get_dressed':
      enterFirstOrgyGetDressed(s, scene);
      break;
    case 'first_orgy_walk_home':
      enterFirstOrgyWalkHome(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_nightclub_first_orgy: LocationDef = {
  name: 'katja_nightclub_first_orgy',
  title: 'Just as you\'re about to reach the bar, you hear a voice spea',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
