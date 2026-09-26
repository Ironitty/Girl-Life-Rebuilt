import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Radomir\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
  scene.text('You sit on the edge of his bed while he sits on his bean bag chair and talk about a variety of topics.');
  if (((s as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
    scene.actions([
      { label: 'Ask about him dating Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You decide to ask him about Anushka to get his side of the story. "So you and Nush used to date, right?"');
    scene.text('He nods. "Yeah, she used to come and listen to us play and we soon started dating. We were both fourteen."');
    scene.text('You listen to him and he seems to actually speak fondly of that time. "So she was your first girlfriend?"');
    scene.text('He shakes his head. "Nah, she was my second girlfriend, but I was her first boyfriend."');
    scene.text('Not a surprise considering how young they were. "So you were her first boyfriend then?"');
    scene.text('He nods and grins. "I was her first everything. First guy she gave a handjob to, my dick was the first one she sucked, I popped her cherry, and mine was the first dick in that sweet tight ass. I was her first in every Single. Way."');
    scene.text('Now he sounds more like the Radomir you know, all smug and proud of himself.');
    scene.actions([
      { label: 'So what happened?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You roll your eyes slightly at him bragging. "So what happened? Why did you break up?"');
    scene.text('He sighs. "It\'s complicated."');
    scene.text('You press him and smile. "Try me."');
    scene.text('He gives you a half laugh. "Okay, fine. Things were great until we started doing gigs, then everything changed."');
    scene.text('You cock your head slightly. "Changed how?"');
    scene.text('He pauses. "I started cheating on her." He actually seems sincere and it sounds like he has a bit of regret to his voice.');
    scene.text('Arching a brow, you press on. "So why did you cheat on her?"');
    scene.text('He shrugs. "Temptation. Once we started doing gigs, girls would flock to us after our shows. The first time this girl followed me into the mens room and pushed me into a stall, then just dropped to her knees, took out my dick and started sucking it. I\'m only human. It\'s hard to say no when girls start throwing themselves at you."');
    scene.text('You nod. He sounds like he actually regrets it, at least somewhat. "So that\'s when you broke up?"');
    scene.text('He shakes his head. "No, but it should have been. I should have broke up with her then." He shrugs. "But I didn\'t. I wanted to eat my cake and have it too. Sleep with all the girls I could, while having an amazing girlfriend at the same time."');
    scene.actions([
      { label: 'So she caught you cheating?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    if (((st as any).anushkaQW ?? 0)?.['rad_date'] < 2) {
      ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['rad_date'] = 2;
    }
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So she caught you cheating and that\'s when you broke up?" you ask.');
    scene.text('He shakes his head. "Nope, she forgave me… every time. At the time I really didn\'t get it, but I\'ve had time to reflect and now I realize just how in love with me she was."');
    scene.text('You nod. "So you cheated on her a lot?"');
    scene.text('He barks a surprised laugh and shakes his head. "You could say that. I think she caught me more than half a dozen times, but I cheated on her way more than that and never got caught."');
    scene.text('"Okay… If she kept forgiving you, then why did you guys break up?" you ask, almost curious as to what reason he\'ll give.');
    scene.text('"I broke up with her actually," he says rather matter-of-factly.');
    scene.text('"Why? I thought you \'wanted your cake and to eat it too\'?"');
    scene.text('He nods. "I did, at first." He pauses for a moment. "I did it because it was what was best. Best for the band, best for me, best for her. Her growing into the hottie she is and being single is great for the band! All our male fans want to fuck her and if they think they have even the slighest chance, then that\'s good for the band."');
    scene.text('He seems like he\'s about to say more, but doesn\'t.');
    scene.text('"Is that it?" you ask, knowing there\'s more.');
    scene.text('He sighs. "No. She was starting to get really clingy and would get pissed if a girl so much as looked at me or talked to one. It was making us fight all the time and I was getting tired of it."');
    scene.actions([
      { label: 'Can you blame her?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You snort a laugh. "Can you blame her? You proved she couldn\'t trust you around other girls."');
    scene.text('He just nods and looks solemn. "I know, and no I don\'t blame her. Not really."');
    scene.text('"So that\'s the whole story?"');
    scene.text('He nods. "Yeah, pretty much."');
    scene.actions([
      { label: 'Do you regret it?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('This was really not what you were expecting from him since he typically acts so cocky and uncaring. "Do you regret it?"');
    scene.text('He looks up at you. "What? Cheating on her or breaking up with her?"');
    scene.text('"Either. Both." you reply.');
    scene.text('He sits quietly for a few seconds before he finally responds. "Yes and no. I don\'t regret breaking up because I don\'t regret getting all the pussy I can… But I do regret breaking her heart…"');
    scene.text('He looks genuinely looks sad and sounds sincere. You think he might actually be telling the truth. Not sure what more to ask, you decide to change the topic.');
    scene.actions([
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
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
  if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1  ||  ((s as any).radomirQW ?? 0)?.['nush_sex'] === 1) {
    scene.actions([
      { label: 'Ask about him still hooking up with Anushka', handler: (st: GameState) => {
    if (((st as any).anushkaQW ?? 0)?.['rad_date'] === 0) {
      ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['rad_date'] = 1;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You decide to ask about him and Anushka still hooking up. "So even though you and Nush broke up, you still hook up?"');
    scene.text('He laughs and grins. "Fuck yeah! She\'s a hottie and we both love to fuck. Not to mention she\'s a dirty little slut that likes it hard and rough, just the way I like them."');
    scene.text('"So you like hot girls that are dirty little sluts?"');
    scene.text('He laughs. "What guy doesn\'t? Some might deny it, but we all love girls that are freaky in bed."');
    scene.text('You nod. "So it\'s just a casual thing then? Not afraid it\'ll cause issues in the band?"');
    scene.text('He nods to the first part of your question. "Yeah. I love pounding that sweet little ass of hers and she loves having her ass fucked, so it works out. We\'re just friends with benefits now. So no, no issues with the band."');
    scene.text('You don\'t know what more to ask about that, so you change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushkaQW ?? 0)?.['valspy'] === 1) {
    scene.actions([
      { label: 'Ask if he knows about Anushka and Valentin hooking up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You wonder if you should even bring this up, but your curiosity is more than you can handle. "Are you aware Val and Nush are smashing?"');
    scene.text('He laughs and nods. "Yeah, I know. She also hooks up with Arkadi sometimes too. It\'s all good."');
    scene.text('He doesn\'t seem like he cares. "So you really don\'t care that your friend is hooking up with your ex?"');
    scene.text('He shakes his head. "Why should I?. I tap that ass when I want and get all the pussy the rest of the time from our groupies, just like he does. Life\'s too short to worry about the little stuff, best to enjoy it and have fun."');
    scene.text('You note how much he sounds like Anushka at the end. They\'re a lot alike in many ways. Not sure what more to ask, you decide to change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushkaQW ?? 0)?.['marspy'] === 1) {
    scene.actions([
      { label: 'Ask if he knows about Anushka and Marcus hooking up', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['marspyknow'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You wonder if you should even bring this up, but your curiosity is more than you can handle. "Are you aware Marcus and Nush are smashing?"');
    scene.text('He looks surprised for a moment, but it passes. "The black guy from school?" He shakes his head, as if to clear it. "Of course. Who else would you be talking about? No, I didn\'t know, but can\'t say I\'m surprised."');
    scene.text('"You can\'t say you\'re surprised?" you ask.');
    scene.text('He shrugs. "She always was a freaky little slut, I know she liked to watch a lot of interracial porn, so it\'s not surprising that she would do it herself, especially since so many people are racist against that stuff. That\'s kind of her M.O. - flip off the establishment by doing exactly what they don\'t approve of. That\'s why most of us love hanging out with her."');
    scene.text('"So it doesn\'t bother you then?"');
    scene.text('He shakes his head. "If she wants to suck some black cock, or take some black dick up her tight little white ass, then that\'s up to her."');
    scene.text('It seems like he doesn\'t care and, not sure what more to ask, you decide to change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).radomirQW ?? 0)?.['had_sex'] === 1) {
    scene.actions([
      { label: 'Ask about threesome with Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    if (((st as any).radomirQW ?? 0)?.['nush3some'] === 0) {
      scene.text('You glance over at him. "Do you think Nush would be up for a threesome?"');
      scene.text('Radomir laughs. "Do you even have to ask? That girl loves to fuck. I\'ll ask her next time I see her, but I\'m sure she would down for it."');
    } else {
      scene.text('You glance over at him. "Want to call Nush and see if she wants to come over for another threesome?"');
      scene.text('He grins. "Fuck yeah."');
      scene.text('He pulls out his phone and starts to text.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('The two of you chat about a variety of things, mostly school, music, him and what\'s been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    ]);
  } },
    { label: 'Ask about the band', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).gopnikbandQW = (st as any).gopnikbandQW ?? {})['practice_invite'] = 1;
    qspCall(st, 'calendar', 'add', 'band_practice_event');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So how are things going with the band?" you ask.');
    scene.text('He grins. "Great, fantastic. Things could hardly be better with us still in school."');
    scene.text('"So no problems?"');
    scene.text('He shakes his head. "No problems. Everything\'s going great."');
    if (((st as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
      scene.text('"You should stop by and listen to us practice. We typically hang out, and have a little mini party afterwards, every Wednesday evening in one of the garages," he says before telling you which garage they practice in.');
    }
    scene.text('Not sure what more to ask, you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    { label: 'Ask about Valentin', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So how are things going with you and Val?" you ask.');
    scene.text('He shrugs. "Pretty good. We\'ve been friends since we were little, so he\'s one of my oldest friends, but sometimes… Sometimes…"');
    scene.text('Now you\'re curious. "Sometimes what?"');
    scene.text('He just shakes his head. "Sometimes he tries to act like a white knight, like he doesn\'t fuck bitches raw every chance he gets. He only does it to try and impress Nush, to make her think he\'s a \'good guy\'."');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Valentin has the hots for Anushka?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"I didn\'t know that Val had the hots for Nush…" you reply curiously.');
    scene.text('"Yeah, but he\'s too much of a pussy to admit it. I told him he could fuck her brains out all he wants, but we need her to be single. Too many of our fans, mostly guys but some of the bitches as well, want to fuck her brains out. They need to believe they have a shot." He smirks and shakes his head. "Hell with how big of slut she is, I imagine most of them do."');
    scene.actions([
      { label: 'Just let him talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You don\'t feel like getting into it with him, so you just let him keep going. He\'s soon talking about one of the after parties they had.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
      { label: 'Anushka is a slut?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So you think Nush is just a big slut? I\'m surprised you hang out with her then. I mean sluts are outcasts after all," you point out to him.');
    scene.text('He frowns. "Hey, I didn\'t say she was some worthless slut that won\'t stand up for herself. Who can respect someone like that? No, Nush loves to get fucked, but she won\'t just let any guy smash her and she\'ll knock a guy on his ass if he gets too hands on with her when she isn\'t in the mood. She decides who, when and where she fucks. Well other than me, of course. She\'s my personal fuck toy that I can use anytime, anywhere."');
    scene.text('You roll your eyes slightly, but he doesn\'t seem to notice as he goes back to telling you about the party they had.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about Arkadi', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what do you think of Arkadi?" you ask.');
    scene.text('"He\'s a great drummer and he\'s cool most of the time, but sometimes he gets on my nerves…"');
    scene.text('"What? Arkadi is great fun," you reply.');
    scene.text('"That\'s all a ruse so he can hook up with chicks." He stops and thinks for a second before continuing. "Don\'t get me wrong, he\'s a pretty cool guy most of the time."');
    scene.text('He again pauses and shakes his head. "He acts like he owns the band, however. Like he\'s the only one taking this shit seriously. Val and I were doing this shit years before he showed up and we want it just as bad as he does."');
    scene.text('"Must be great for the band dynamic as the two of you go back and forth then…" you reply.');
    scene.text('He snorts a laugh. "The rest know how it is. There wouldn\'t be a band without me, so it works out."');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    { label: 'Ask about Anushka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).radomirQW = (st as any).radomirQW ?? {})['nush_sex'] = 1;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what do you think of Nush?" you ask.');
    scene.text('"What can I say? She\'s the closest thing to a complete package as a girl can get. She\'s smart, funny, sexy, stands up for herself, great guitar player, amazing singer, beautiful as fuck, and she has an amazing ass that she happily lets guys fuck. If a guy was looking for a girl to settle down with, she would be the one… once she sows her wild oats a bit more of course."');
    scene.text('He says it in such a way that you actually believe he means every word of it.');
    scene.text('You think about it for a moment. "I guess, probably, yeah…"');
    scene.text('He shakes his head. "She has one of the finest asses I\'ve ever seen. No matter how many times I tear it up, it\'s always super tight." He glances at you. "Honestly, she\'s one of the best fucks I\'ve ever had, even if she does bitch about not using enough lube all the time."');
    if (((st as any).anushkaQW ?? 0)?.['rad_date'] >= 1) {
      scene.actions([
        { label: 'I heard you guys used to date', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"I heard you guys used to date. When did all of this happen?" you curiously ask.');
    scene.text('"A few years ago. She used to run around when we started the band and before long I had her wrapped around my finger and we hooked up. She fell head over heels for me." He starts grinning. "She\'s probably still in love with me, but she became too clingy, so I had to dump her ass. Besides, it\'s better for the band if the two hottest members are single."');
    scene.text('You gasp. "How could you treat her like that? I feel bad for her…"');
    scene.text('He shakes his head. "Why would you feel bad for her? She still gets a good fucking now and again and it\'s great for the band."');
    scene.actions([
      { label: 'Is that so?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('He looks around to make sure nobody can overhear what\'s being said. "She\'s well aware of the rules. We\'re still fuck buddies and I keep her on a short leash because I can use her whenever I want."');
    scene.text('"You\'re terrible, Rad!" you say dismissively.');
    scene.text('"Hey, it\'s the best for the band. How would it look if the two hottest band members were together? Listen, to be able to promote our band the best, we let her shine. She\'s hot, single and quite the slut, so of course we\'re going to use that." His eyes remain locked on you.');
    scene.text('"Well… I…" You\'re not sure what to say.');
    scene.text('"What?" He gives you a slightly confused stare, wondering why you\'re hesitating. "I give her a good fucking more than any other bitch, so what more could she want? Sure she complains that I\'m too rough sometimes, but like all bitches she loves it. Why else would she keep coming back for more?" he asks, seeming to actually believe what he\'s saying.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'So you guys hook up?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('He nods as if it couldn\'t be any more obvious. "Yeah, I plow that ass on a pretty regular basis."');
    scene.text('"I didn\'t know you guys were an item?" you reply.');
    scene.text('He laughs dismissively. "Fuck no, we just hook up. Nush is a total fucking slut, but it\'s like having a hot groupie that plays in the band. It\'s the best of both worlds, let me tell you."');
    scene.text('He then goes on to talk about their other regular groupies that he fucks.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Just let him talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You don\'t feel like getting into it with him, so you just let him keep going. He\'s soon talking about one of the after parties they had.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
      { label: 'Anushka is a slut?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"So you think Nush is just a big slut? I\'m surprised you hang out with her then. I mean sluts are outcasts after all," you point out to him.');
    scene.text('He frowns. "Hey, I didn\'t say she was some worthless slut that won\'t stand up for herself. Who can respect someone like that? No, Nush loves to get fucked, but she won\'t just let any guy bang her and she\'ll knock a guy on his ass if he gets too hands on with her when she isn\'t in the mood. She decides who, when and where she fucks. Well other than me of course. She\'s my personal fuck toy that I can use anytime, anywhere."');
    scene.text('You roll your eyes slightly, but he doesn\'t seem to notice as he goes back to telling you about the party they had.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about the future', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['Gerasim'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what are your plans for the future?" you ask.');
    scene.text('He just gives you a look like you just asked the stupid question anyone has ever asked in the history of the world. "I\'m going to be a rock star, what the hell else? We\'re still in school and already starting to become pretty famous. We have gigs fairly often and have almost half a million followers on YouTube already."');
    scene.text('You\'re a bit surprised you didn\'t know they had a Youtube channel or any social media. "Really? I didn\'t know that."');
    scene.text('He nods. "Yeah, we got a band Youtube channel, Assbook page, Tik Tok, Twitter and our own website where we list our gigs, upcoming tours and sell our music and merch."');
    scene.text('You again find yourself surprised. "You do all that?"');
    scene.text('"Some of it, but Gerasim done the website and store did for us," he replies.');
    scene.text('"You got a nerd to help you? What did you do? Bully him into helping?"');
    scene.text('He shakes his head. "No. Nush suggested we ask him, so we did and he agreed."');
    scene.text('You\'ve heard there was something going on with those two, but no one seems to know what. "Oh," you reply.');
    scene.text('Before you can say something else, he turns the question on you. "What about you?"');
    if (((st as any).rex_love ?? 0) === 1  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1  ||  ((st as any).kotovLoveQW ?? 0) === 1  ||  ((st as any).fedorKozlovQW ?? 0)  ||  ((st as any).NikoVolkovQW ?? 0) >= 5  ||  ((st as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      if (((st as any).rex_love ?? 0) === 1) {
        scene.actions([
          { label: 'Get married to Rex', goto: ['radchat', 'telling_marrige_dreams', 'Rex'] },
        ]);
      }
      if (((st as any).artemQW ?? 0)?.['bf'] === 1) {
        scene.actions([
          { label: 'Get married to Artem', goto: ['radchat', 'telling_marrige_dreams', 'Artem'] },
        ]);
      }
      if (((st as any).kotovLoveQW ?? 0) === 1) {
        scene.actions([
          { label: 'Get married to Vitek', goto: ['radchat', 'telling_marrige_dreams', 'Vitek'] },
        ]);
      }
      if (((st as any).fedorKozlovQW ?? 0) >= 5) {
        scene.actions([
          { label: 'Get married to Fedor', goto: ['radchat', 'telling_marrige_dreams', 'Fedor'] },
        ]);
      }
      if (((st as any).NikoVolkovQW ?? 0) >= 5) {
        scene.actions([
          { label: 'Get married to Niko', goto: ['radchat', 'telling_marrige_dreams', 'Niko'] },
        ]);
      }
      (st as any).i = 0;
      while (true) {
        if (((st as any).i ?? 0) < Object.keys((st as any).lover ?? {}).length) {
          (st as any).temp_npcid = (((st as any).lover ?? 0)?.[String((st as any).i ?? 0)] ?? 0);
          if (((st as any).npc_rel_type ?? 0)?.[String((st as any).temp_npcid ?? 0)] === 'boyfriend') {
            scene.text('act \'Get married to ' + (((st as any).npc_usedname ?? 0)?.[String(((st as any).temp_npcid ?? 0))]) + '\': gt \'radchat\', \'telling_marrige_dreams\', $npc_usedname["' + ((st as any).temp_npcid ?? 0) + '"]');
            scene.actions([
              { label: '', labelFn: (s: GameState) => String(qspUntranslated(s, "Get married to <<npc_usedname[\"<<temp_npcid>>\"]>>", { location: "radchat" }) ?? ''), handler: (st: GameState) => { qspGoto(st, 'radchat', 'telling_marrige_dreams', (((st as any).npc_usedname ?? 0)?.[String(((st as any).temp_npcid ?? 0))])); } },
            ]);
          }
          (st as any).i = ((st as any).i ?? 0) + (1);
          break;
        }
        (st as any).i = undefined;
      }
    } else {
      scene.actions([
        { label: 'Get married', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"I want to find the perfect guy, get married and have kids," you excitedly tell him.');
    scene.text('He rolls his eyes slightly. "Oh…"');
    scene.text('He then starts talking about how the band will get famous and what that will be like, clearly not interested in your plans of having a family.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You shake your head. "Honestly? I don\'t know yet. I guess I really havn\'t given it that much thought yet."');
    scene.text('He just shrugs and doesn\'t really say much about it before he starts talking about how great things will be when the band becomes famous. He seems to think they\'re only a few years away from that.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You nod your head. "I plan to go to the university and get a degree. Not sure what one yet, but something."');
    scene.text('He just shrugs and doesn\'t really say much about it before he starts talking about how great things will be when the band becomes famous. He seems to think they\'re only a few years away from that.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about his brother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what\'s the deal with your brother?" you ask.');
    scene.text('He sneers. "You mean Mr. Perfect? Captain of the football team, good looking, athletic, charming, perfect grades, why can\'t you be more like your other brother? You mean him?" He sounds bitter.');
    scene.text('You\'re a bit taken aback by his response. "Uh… Yeah?"');
    scene.text('He shrugs. "He\'s always been like that. He went to the university but flunked out, yet he\'s still the perfect one. He works at the local factory with my dad, yet it\'s still \'why can\'t you be more like your brother\'? Fucking douche."');
    scene.text('You\'re not sure what to say. "So I guess you guys don\'t really get along?"');
    scene.text('He shakes his head. "Never really did. He\'s almost seven years older than me, so we never hung out or did things brothers normally do. He\'s always treated me like his little brother that can\'t keep up. When I got older, he\'d try and fuck all the girls I brought home. Well, I\'ve got news for him. I\'ll soon be famous and he\'ll still be living with mom and dad. Then we\'ll see who should be more like who."');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
      { label: 'Did he fuck all your girls?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('He shakes his head. "Not from lack of trying, I admit he got a few of them, asshole. But once Nush really started to blossom, he tried so hard. She would tease him, then shut him down hard, some of the funniest shit I\'ve seen. He\'s still bitter about that, so don\'t be surprised if he tries to fuck you just because I brought you over."');
    scene.text('You\'re not sure how to respond to that. "Oh. Okay."');
    scene.text('You decide it might be best to just change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about his mother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what about your mother?" you ask.');
    scene.text('He looks confused. "What do you mean?"');
    scene.text('"You know the sweet boy and all that," you explain.');
    scene.text('He rolls his eyes. "Oh that. She seems unable to understand that I grew up. Maybe it\'s because my brother was never close with her since he was always dad\'s favorite. I don\'t know, but I do know it\'s getting old. I can\'t wait to move out of here when school is over."');
    scene.text('His mother still tries to baby him while he lives in his brother\'s shadow with a father that seem hung up on his sons getting laid. That explains a lot about him.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    { label: 'Ask about his father', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('"So what was that all about? How your dad talked about girls?" you ask.');
    scene.text('He shrugs. "Just how he\'s always been. About as far back as I can remember, he was saying stuff like that. It was just to my brother at first, but when I started showing interest in girls, he started saying the same thing to me."');
    scene.text('"Really? He didn\'t want you to have a girlfriend? I mean date Nush?"');
    scene.text('He smiles. "He liked her a lot at first and guess he still does, but after he found out I popped her cherry, he started asking me why I was still dating her, why I wasn\'t out picking up other girls and stuff."');
    scene.text('You blink in surprise. "Your dad wanted you to cheat on Nush?"');
    scene.text('He shakes his head. "No. Well, not really. He just thought I shouldn\'t be tied down to one girl and that I should find more girls to fuck." He then shrugs. "Maybe he did, at least a little. Once I did though, he was proud of me and encouraged me to break it off with Nush."');
    scene.text('"Why did he tell you to break up then?" you ask.');
    scene.text('"Because she would come over crying sometimes and we would fight. He said she was a distraction and things would be better for me and the band if we were both single. He was right after all."');
    scene.text('He doesn\'t seem to notice his dad encouraged him to cheat on his girlfriend and then dump her when she got upset about it, so you decide it might be best to just change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    { label: 'Ask if he has a girlfriend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You know he\'s hooking up with a lot of girls and you\'re not sure if you should even ask, even if you\'re curious. "Do you have a girlfriend?"');
    scene.text('He shakes her head. "Why would I? Bitches just throw themselves at me and once we make it big, even more will be dropping their panties for me. No, I plan to bang as many bitches as I can right now." He pauses for a second and gives you a smirk. "Why? Were you hoping I was single and looking?"');
    if (((st as any).rex_love ?? 0) === 1  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1  ||  ((st as any).kotovLoveQW ?? 0) === 1  ||  ((st as any).fedorKozlovQW ?? 0)  ||  ((st as any).NikoVolkovQW ?? 0) >= 5  ||  ((st as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', goto: ['radchat', 'boyfriend_chat'] },
      ]);
    }
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A154', 'like');
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('You feel put on the spot since that\'s not what you meant. Or maybe subconsciously you did mean it, which is why you asked. Either way, a part of you would really like to be Radomir\'s girlfriend. "I guess… I\'ve been thinking about it a little…"');
      scene.text('He looks smug. "Who could blame you? I\'m the complete package after all. Sorry, but I\'m flying solo for now."');
      scene.text('He gets up and walks over to sit next to you on the bed.');
      scene.actions([
        { label: 'Get up and stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Stay sitting and keep talking', goto: ['radchat', 'chat'] },
      ]);
    } else {
      scene.text('You feel put on the spot since that\'s not what you meant. Or maybe subconsciously you did mean it, which is why you asked. Either way, a part of you would really like to be Radomir\'s girlfriend. "I guess… I\'ve been thinking about it a little…"');
      scene.text('He looks smug. "Who could blame you? I\'m the complete package after all. Sorry, but I\'m flying solo for now. Good luck finding someone else."');
      scene.text('Not sure what to say, you decide to change the subject.');
      scene.actions([
        { label: 'Stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Keep talking', goto: ['radchat', 'chat'] },
      ]);
    }
  } },
      { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('<center><b>Radomir\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
    scene.text('You shake your head. This conversation really went off the rails and is not at all what you meant. "No, I was just curious is all."');
    scene.text('"Sure sure…" He gives you a wink like you\'re just saying that and really were hoping. You decide it\'s best to just change the topic.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriendChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
  scene.text('"I have a boyfriend you know," you tell him.');
  scene.text('He laughs. "So? Who are you dating again?"');
  if (((s as any).NikoVolkovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you tell him.');
    scene.text('He just nods. "He\'s a fun guy. I\'m sure he\'ll show you a great time."');
    scene.text('You talk a bit about Niko and find that Radomir seems to get along fine with him.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) >= 5) {
    scene.actions([
      { label: 'Fedor', handler: (st: GameState) => {
    if (((st as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
      scene.text('"Fedor," you tell him.');
      scene.text('"Fedor? Are you serious? After he sucked Vasily\'s dick in front of the whole school?"');
      scene.text('You frown at him, though you\'re not surprised. "He didn\'t have a choice! Those criminals were going to take everything from his family since he couldn\'t pay them. He\'s not gay!"');
      scene.text('He shakes his head and laughs. "Sucking another guy\'s dick makes you gay."');
      scene.text('You decide to drop it since he obviously won\'t understand.');
      scene.actions([
        { label: 'Stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Keep talking', goto: ['radchat', 'chat'] },
      ]);
    } else {
      scene.text('"Fedor," you tell him.');
      scene.text('"Fedor? Really? Why would you date <i>any</i> jock, let alone him?"');
      scene.text('You frown at him. "I like him. He\'s sweet."');
      scene.text('He snorts. "If you say so. Sounds like you just need to find a real man to me."');
      scene.text('You shake your head at his comment and change the subject.');
      scene.actions([
        { label: 'Stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Keep talking', goto: ['radchat', 'chat'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).kotovLoveQW ?? 0) === 1) {
    scene.actions([
      { label: 'Vitek', handler: (st: GameState) => {
    scene.text('"Vitek," you tell him.');
    scene.text('He just stares at you. "Really? So you like big dumb, not so good looking guys then, huh? That counts me out. Well, other than my big dick."');
    scene.text('You just shake your head and roll your eyes at his comment, but soon change the subject since he doesn\'t seem remotely interested in hearing about you and Vitek.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.actions([
      { label: 'Artem', handler: (st: GameState) => {
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Artem," you tell him.');
      scene.text('He busts out laughing. "Artem? The nerd?"');
      scene.text('You shake your head at his comment. "He\'s sweet and really nice to me."');
      scene.text('He snorts. "Yeah, I\'m sure he is. A fucking virgin too, unless you\'ve given it up to him." He looks at your face before he bursts out into laughter again. "Oh fuck, this is too good! Well good for him, getting himself some pussy."');
      scene.text('You roll your eyes at him. "There\'s more to life than just sex you know!"');
      scene.text('He just shakes his head. "Yeah, whatever. If you ever want a real man, you just let me know."');
      scene.text('You decide to change the subject.');
      scene.actions([
        { label: 'Stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Keep talking', goto: ['radchat', 'chat'] },
      ]);
    } else {
      scene.text('"Artem," you tell him.');
      scene.text('He busts out laughing. "Artem? The nerd?"');
      scene.text('You shake your head at his comment. "He\'s sweet and really nice to me."');
      scene.text('He snorts. "Yeah, I\'m sure he is. A fucking virgin too, unless you\'ve given it up to him." He looks at your face before he bursts out into laughter again. "Oh fuck, this is too good! Well good for him, getting himself some pussy."');
      scene.text('You roll your eyes at him. "There\'s more to life than just sex you know!"');
      scene.text('He just shakes his head. "Yeah, whatever. I suppose he\'s the best you can do."');
      scene.text('You decide to change the subject.');
      scene.actions([
        { label: 'Stop talking', goto: ['radapt', 'radroom'] },
        { label: 'Keep talking', goto: ['radchat', 'chat'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).rex_love ?? 0) === 1) {
    scene.actions([
      { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Rex," you tell him.');
    scene.text('He cocks his head slightly. "The guy that throws the parties all the time?"');
    scene.text('You nod. "Yeah, that\'s him."');
    scene.text('Now he seems curious. "How did you meet him? Isn\'t he a few years older than you?"');
    scene.text('You smile at him. "I was invited to his party," you tell him. "He\'s friends with my sister," you explain further. "She invited me to his party and that\'s where we met."');
    scene.text('You talk about the night you met him and your first date. You find out that Radomir has been to a few of Rex\'s parties himself. His brother sometimes attends and took him a few times, just like your sister took you.');
    scene.actions([
      { label: 'Stop talking', goto: ['radapt', 'radroom'] },
      { label: 'Keep talking', goto: ['radchat', 'chat'] },
    ]);
  } },
    ]);
  }
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      (s as any).temp_npcid = (((s as any).lover ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        scene.text('act \'' + (((s as any).npc_usedname ?? 0)?.[String(((s as any).temp_npcid ?? 0))]) + '\': gt \'radchat\', \'tell_about_generic_boyfriend\', $npc_usedname["' + ((s as any).temp_npcid ?? 0) + '"]');
        scene.actions([
          { label: '', labelFn: (s: GameState) => String((((s as any).npc_usedname ?? 0)?.[String(((s as any).temp_npcid ?? 0))] ?? '') ?? ''), handler: (st: GameState) => { qspGoto(st, 'radchat', 'tell_about_generic_boyfriend', (((st as any).npc_usedname ?? 0)?.[String(((st as any).temp_npcid ?? 0))])); } },
        ]);
      }
      (s as any).temp_npcid = undefined;
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    (s as any).i = undefined;
  }
  scene.build();
}

function enterTellAboutGenericBoyfriend(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
  scene.text('"I have a boyfriend you know," you tell him.');
  scene.text('"Right. Who are you dating again?" he asks.');
  scene.text(`"${((s as any).locArgs?.[1] ?? '')}," you tell him.`);
  scene.text('"Who?" he asks.');
  scene.text('You shake your head slightly. "You\'ve never met him. I just met him."');
  scene.text('"Just some guy you met, huh?" he smirks.');
  scene.text('You laugh and tell him about your boyfriend, but he quickly gets bored and changes the subject.');
  scene.actions([
    { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    { label: 'Keep talking', goto: ['radchat', 'chat'] },
  ]);
  scene.build();
}

function enterTellingMarrigeDreams(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('<center><b>Radomir\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/rads_room/rad_chat1.jpg');
  scene.text(`You sigh in a way only those in love can sigh. "Hopefully ${((s as any).locArgs?.[1] ?? '')} and I can get married soon."`);
  scene.text('He rolls his eyes. "So predictable."');
  scene.text('You briefly discuss why and he points out that that is what society expects of people, but they should live a little first.');
  scene.text('You\'re not sure what more to say on the topic, so change the subject.');
  scene.actions([
    { label: 'Stop talking', goto: ['radapt', 'radroom'] },
    { label: 'Keep talking', goto: ['radchat', 'chat'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'boyfriend_chat':
      enterBoyfriendChat(s, scene);
      break;
    case 'tell_about_generic_boyfriend':
      enterTellAboutGenericBoyfriend(s, scene);
      break;
    case 'telling_marrige_dreams':
      enterTellingMarrigeDreams(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const radchat: LocationDef = {
  name: 'radchat',
  title: 'Radomir\'s Room',
  region: 'other',
  enter: enter,
};
