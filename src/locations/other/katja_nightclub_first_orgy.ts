import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFirstOrgyInvite(s: GameState, scene: SceneBuilder): void {
  (s as any).katjaQW['first_orgy_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_invite.jpg');
  scene.text('Just as you\'re about to reach the bar, you hear a voice speaking to you. "How about you lovely ladies have all the drinks you want tonight for free?"');
  scene.text('You turn around and see a pretty handsome young man with large tattoos on his forearms. "Ah, I got your attention! My friend Oleg just sold his start up for like one billion, so he bought one of the side bars for the evening."');
  scene.text('"Sounds great, but we\'ve been drinking for a couple of hours now and want to dance. Three guys is not the best setup for that, though, so I was wondering if you graceful creatures would honor us with a dance? Just your presence would lighten up our small party. And, as I said, we have our own bar where you can take anything you want," he explains to you and Katja.');
  if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100) {
    // TODO-QSP: dynamic text: "That sounds like a good idea, does it not, <<$pcs_nickname>>?" Katja quickly re...
    scene.text(`"That sounds like a good idea, does it not, ${((s as any).pcs_nickname ?? 0)}?" Katja quickly replies, looking at you pleadingly with her big eyes.`);
    scene.actions([
      { label: 'Agree', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
      { label: 'Say you don\'t want to', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I don\'t really think it\'s a good idea, Katja," you reply.');
    scene.text('"Why not?" she pouts, not sounding satisfied with your answer.');
    scene.text('"I don\'t have a good feeling about him. He gives me the creeps," you whisper. "I think we\'re better off not going with him."');
    scene.text('"I don\'t get it. He seems like a perfect gentleman to me," Katja whispers back, not keeping her voice very low. You\'re pretty sure that he heard her loud and clear.');
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to let him go [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to let him go', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'A14', 'modify', 'hate');
    qspCall(s, 'stat', '');
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
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'A14', 'modify', 'love');
    qspCall(s, 'stat', '');
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
    scene.text('"We can join him if you want. It would certainly save us some money," Katja says, clearly indicating that the decision is up to you.');
    // TODO-QSP: dynamic text: "I don't think that's a good idea, <<$pcs_nickname>>. I would rather just contin...
    scene.text(`"I don't think that's a good idea, ${((s as any).pcs_nickname ?? 0)}. I would rather just continue the evening with just the two of us," Katja says, clearly stating her opinion.`);
    scene.actions([
      { label: 'Accept the offer', goto: ['katja_nightclub_first_orgy', 'after_acceptance'] },
      { label: 'Say you don\'t want to', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
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
      { label: 'Try to convince her to change her mind', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Come on Katja, don\'t say no to free drinks! We aren\'t all rich," you reply before you lean in and whisper in her ear. "Don\'t you also think that he\'s hot?"');
    scene.text('"Well, he may be good looking, but I don\'t get good vibes from him. I\'m pretty sure he expects something in return for the free drinks," she whispers back.');
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to join [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to join', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'A14', 'modify', 'hate');
    qspCall(s, 'stat', '');
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
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'A14', 'modify', 'love');
    qspCall(s, 'stat', '');
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
    qspCall(s, 'stat', '');
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
  scene.build();
}

function enterAfterAcceptance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'tatoo_guy', Math.floor(Math.random() * 8) + 23, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a', 'none');
  (s as any).katja_first_orgy_temp['first_orgy_name_tatoo_guy'] = 'Savin';
  qspCall(s, 'npcgeneratec', '', 0, 'bald_guy', Math.floor(Math.random() * 9) + 27, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b', 'none');
  (s as any).katja_first_orgy_temp['first_orgy_name_bald_guy'] = 'Oleg';
  qspCall(s, 'npcgeneratec', '', 0, 'green_shirt_guy', Math.floor(Math.random() * 8) + 23, 4);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'c', 'none');
  (s as any).katja_first_orgy_temp['first_orgy_name_green_shirt_guy'] = 'Ilya';
  qspCall(s, 'npcStat', 'A144', 'd');
  qspCall(s, 'npcgeneratec', '', 1, 'first_black_girl', Math.floor(Math.random() * 5) + 18, 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'f', 'none');
  qspCall(s, 'npcgeneratec', '', 1, 'second_black_girl', Math.floor(Math.random() * 5) + 18, 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'g', 'none');
  (s as any).katja_first_orgy_temp['first_orgy_name_white_dress'] = 'Inna';
  (s as any).katja_first_orgy_temp['first_orgy_name_brown_dress'] = 'Yustina';
  (s as any).katja_first_orgy_temp['first_orgy_name_curly'] = 'Lyubov';
  (s as any).katja_first_orgy_temp['first_orgy_name_short_blond_hair'] = 'Uliana';
  (s as any).katja_first_orgy_temp['first_orgy_name_third_black_girl'] = 'Zandile';
  (s as any).katja_first_orgy_temp['first_orgy_name_wavey'] = 'Sashura';
  (s as any).katja_first_orgy_temp['first_orgy_name_second_black_girl'] = 'Leticia';
  (s as any).katja_first_orgy_temp['first_orgy_name_long_blond_hair'] = 'Agnessa';
  (s as any).katja_first_orgy_temp['first_orgy_name_first_black_girl'] = 'Aminata';
  (s as any).katja_first_orgy_temp['first_orgy_name_boob_window'] = 'Radinka';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_pre_party_wait.jpg');
  scene.text('They guy leads you through the crowd of the club to the entrance to one of the side rooms where a broad shouldered bouncer keeps people out.');
  scene.text('A group of girls are standing waiting beside him, all of them young and hot. You think you recognize some of them from the university.');
  // TODO-QSP: dynamic text: "Here we are. I'm <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> by the...
  scene.text(`"Here we are. I'm ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} by the way," the guy that picked you up says with a smile.`);
  // TODO-QSP: dynamic text: "I'm Katja, and this is <<$pcs_nickname>>," Katja replies.
  scene.text(`"I'm Katja, and this is ${((s as any).pcs_nickname ?? 0)}," Katja replies.`);
  // TODO-QSP: dynamic text: "We just need to wait - oh here he comes! This is <<$katja_first_orgy_temp['firs...
  scene.text(`"We just need to wait - oh here he comes! This is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']}," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} says, introducing a guy in a green shirt arriving with some more girls; among them is your former classmate, Anushka.`);
  scene.text('"I see I\'m not the only one looking for a good time and some free booze," Anushka grins.');
  scene.text('"Hello Anushka, nice seeing you," Katja replies.');
  scene.text('"Nush, everyone calls me Nush. Except my <i>mother</i>," Anushka replies, saying mother with such disdain that everyone that hears it takes note.');
  scene.text('"Okay, Nush, I\'ll remember that," Katja replies.');
  // TODO-QSP: dynamic text: Before you can exchange more pleasantries, <<$katja_first_orgy_temp['first_orgy_...
  scene.text(`Before you can exchange more pleasantries, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} gets everyone's attention. "Everybody needs to wear an armband to gain entry, so come up to me one at a time so we can get them on quickly."`);
  scene.actions([
    { label: 'Get your armband', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_nush_pre_party.jpg');
    scene.text('"I was a little skeptical, but free booze is free booze, and looking at the guy that picked you up, I can see why the two of you joined," Anushka says while simulating giving a blowjob.');
    if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
    } else {
      scene.text('"I don\'t know what you\'re talking about," Katja replies defensively. "We just thought that getting some free drinks and a quiet place to enjoy them was a good idea."');
      scene.text('Anushka visibly rolls her eyes. "Sure, Princess. And here I thought you might have loosened up a little and stopped being a prude."');
      scene.text('"I\'m not a prude!" Katja snaps back. "I\'m just not a slut like some other girls."');
      scene.text('"Come on, no fighting. We\'re here to have fun," you try to reason.');
      scene.text('"But is it the kind of fun that Little Miss Prude here will appreciate?" Anushka replies. "Look at who they\'ve invited. These horndogs are clearly hoping that the free booze will loosen some of these girls up so they can fuck them."');
      if (((s as any).katjaQW ?? 0)?.['slut'] < 120  ||  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] < 2) {
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
      scene.text('"What do you mean?" Katja asks, clearly ignoring the barbs thrown her way.');
      scene.text('"Look at the girls they\'ve chosen," Anushka replies. "All young and super hot. And look."');
      // TODO-QSP: dynamic text: She points at two black girls both wearing pink dresses. "That's <<$katja_first_...
      scene.text(`She points at two black girls both wearing pink dresses. "That's ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}, the biggest sluts from the eighth floor of your dorm building. I <i>guarantee</i> that they'll both be riding at least one of these guys before the night is over."`);
      if (((s as any).katjaQW ?? 0)?.['know_as_dorm_slut'] > 0) {
      } else {
        scene.text('"Whoa, I mean..." Katja replies, seemingly a little taken aback.');
        scene.text('"Don\'t worry, your prudishness is not in danger. You haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..." Anushka says with a smirk and a wink.');
        if (((s as any).katjaQW ?? 0)?.['slut'] < 120  ||  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 3  ||  ((s as any).katjaQW ?? 0)?.['park_sex'] < 2) {
          scene.text('"Now that you say it, I <i>have</i> heard things about them, but surely they\'ll just get the men to take them home with them?" Katja replies.');
          scene.text('"Don\'t worry, your prudishness is not in danger. You haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..." Anushka says with a smirk and a wink.');
        } else {
          scene.text('"Sure, they\'re sluts, but the men seem decent enough," Katja replies. "And if they\'re stupid enough to be dragged to the toilets to fuck those whores, then it\'s their loss. It won\'t affect the party for the rest of us."');
          scene.text('Anushka arches an eyebrow slightly and is silent a moment, as if thinking about something. "Well well well... maybe you <i>are</i> a bit more fun than I thought..." she says before slightly hipping checking Katja in a playful manner. "Just remember; you haven\'t agreed to anything by joining, so just say no to anything that you don\'t want to do, but do remember to say yes to the things you <i>do</i> want..."');
          scene.text('"Get your mind out of the gutter, Nush!" Katja retorts. "I\'m plenty fun and I know very well how to have a good time. I just don\'t broadcast it for all of the world to see like some others."');
        }
        scene.text('While you\'ve been talking, the other girls have gotten their armbands and the three of you are last. Once your armbands are on your wrists, the bouncer opens the door and leads you into the side room.');
        scene.actions([
          { label: 'Follow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_greetings.jpg');
    // TODO-QSP: dynamic text: You follow <<$katja_first_orgy_temp['first_orgy_name_tatoo_guy']>> into the side...
    scene.text(`You follow ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} into the side room where you see a bar with no bartender, and a couple of leather couches situated around a small dance floor. Music is coming out of several speakers, but it's not as loud as in the club proper, so you can talk without shouting.`);
    // TODO-QSP: dynamic text: You spot a bald guy, seemingly in his early thirties and wearing glasses, as he ...
    scene.text(`You spot a bald guy, seemingly in his early thirties and wearing glasses, as he gets up to greet ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']}.`);
    // TODO-QSP: dynamic text: "We brought some dance partners," <<$katja_first_orgy_temp['first_orgy_name_tato...
    scene.text(`"We brought some dance partners," ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_tatoo_guy']} says to him before he turns around to you. "This here is ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}. He just sold his start up for billions, which we're celebrating tonight. Come and say hello to him."`);
    // TODO-QSP: dynamic text: Katja makes sure that you pay attention to the names of the other girls as you a...
    scene.text(`Katja makes sure that you pay attention to the names of the other girls as you all take turns introducing yourselves to ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']}.`);
    // TODO-QSP: dynamic text: You notice that several of the girls flirt quite heavily with him, <<$katja_firs...
    scene.text(`You notice that several of the girls flirt quite heavily with him, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_first_black_girl']} and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} in particular coming on pretty strong.`);
    scene.actions([
      { label: 'Your turn to greet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/orgy/first_orgy_group_picture.jpg');
    // TODO-QSP: dynamic text: Katja is the last girl to greet <<$katja_first_orgy_temp['first_orgy_name_bald_g...
    scene.text(`Katja is the last girl to greet ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} as ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} comes up and takes out his phone.`);
    scene.text('"Why don\'t we start with a picture to remember the evening?"');
    // TODO-QSP: dynamic text: You all gather up for the picture, <<$katja_first_orgy_temp['first_orgy_name_sec...
    scene.text(`You all gather up for the picture, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']} moving in between Katja and ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} to basically shove her ass into his crotch. Katja doesn't seem sure if she should move or not, but when ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_third_black_girl']} plants her hands on her hips, she stays still.`);
    // TODO-QSP: dynamic text: "Okay, ready? 3... 2... 1..." <<$katja_first_orgy_temp['first_orgy_name_green_sh...
    scene.text(`"Okay, ready? 3... 2... 1..." ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} calls.`);
    // TODO-QSP: dynamic text: As he does, <<$katja_first_orgy_temp['first_orgy_name_bald_guy']>> places his ha...
    scene.text(`As he does, ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_bald_guy']} places his hands on ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_second_black_girl']}'s ass, who doesn't seem to mind and instead drags Katja closer and starts to make out with her. Katja, seemingly acting on instinct, reciprocates the kiss.`);
    scene.text('You also notice Anushka hike her skirt up enough so the bottom of her ass will be visible in the picture. You don\'t see any panties and wonder if she\'s even wearing any.');
    // TODO-QSP: dynamic text: "That's a wrap, thanks. Now enjoy the free drinks and let's get partying!" <<$ka...
    scene.text(`"That's a wrap, thanks. Now enjoy the free drinks and let's get partying!" ${((s as any).katja_first_orgy_temp ?? 0)?.['first_orgy_name_green_shirt_guy']} shouts, and the group breaks up to either start dancing or head for the bar.`);
    scene.actions([
      { label: 'Get a drink', goto: ['katja_nightclub_first_orgy', 'first_orgy_drink'] },
      { label: 'Dance', goto: ['katja_nightclub_first_orgy', 'first_orgy_dance'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_orgy_invite':
      enterFirstOrgyInvite(s, scene);
      break;
    case 'after_acceptance':
      enterAfterAcceptance(s, scene);
      break;
    default:
      enterFirstOrgyInvite(s, scene);
      break;
  }
}

export const katja_nightclub_first_orgy: LocationDef = {
  name: 'katja_nightclub_first_orgy',
  title: 'Just as you\'re about to reach the bar, you hear a voice spea',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['Just as you\'re about to reach the bar, you hear a voice speaking to you. "How about you lovely ladies have all the drinks you want tonight for free?"'],
  enter: enter,
};
