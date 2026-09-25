import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterArtem(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  if ((Math.floor(Math.random() * 8) + 1) === 1  &&  ((s as any).artem_twoweek_block ?? 0) + 10 <= ((s as any).daystart ?? 0)) {
    (s as any).artem_twoweek_block = ((s as any).daystart ?? 0);
    scene.text('Just as you\'re about to head over to Artem, the gopniks come crowding into the classroom. Making snide remarks, they push and shove the nerds and outcasts around as they spread out.');
    scene.text('Dan seems to zero in on Artem, knocking a book out of his hand before shoving him and laughing when Artem tries to pick it up.');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] < 10) {
      scene.text('Artem just cowers before him and takes the abuse, Lena, Lera and Anushka joining in as the other gopniks focus on their own targets. The four of them mock Artem\'s taste in music, movies and that he plays Dungeons and Dragons, though they never use the name of the game.');
      scene.text('He tries to defend himself a few times, but the mocking only gets worse. Dan mostly just laughs as the girls taking over the heavy lifting of bullying him.');
      scene.text('This goes on for the rest of the break, not allowing you to talk to anyone today.');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['artem_dom'] < 20) {
        scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
        scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man? You want to fucking go then?!"');
        scene.text('Daring Artem to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
        if (((s as any).anushkaQW ?? 0)?.['artem_dom'] < 10  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 0) {
          scene.text('"Maybe he thinks he\'s a knight or something from that fantasy world they like to play in?" Anushka chimes in, which gets a lot of laughs from the others.');
          scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Do you think you\'re some fantasy knight or some shit?"');
          scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face. He looks like he\'s about going to start swinging when someone loudly clears their throat and everyone turns to see Mr Pavlovich.');
          scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
          scene.text('Dan shakes his head. "No, we were just messing around."');
          scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
          scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts.');
          scene.text('"This isn\'t over, nerd…" Dan whispers at Artem before he follows the rest out.');
          scene.text('Mr Pavlovich watches them all leave before leaving himself.');
          scene.actions([
            { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 10  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 0) {
            scene.text('"Maybe he thinks he\'s a knight or something from that fantasy world they like to play in?" Anushka chimes in, which gets a lot of laughs from the others.');
            scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Do you think you\'re some fantasy knight or some shit?"');
            scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face. He looks like he\'s about going to start swinging when someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
            scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
            scene.text('Dan shakes his head. "No, we were just messing around."');
            scene.actions([
              { label: 'Watch how it ends', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big131.jpg');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, likely testing Mr. Pavlovich\'s limit for as long as she can.');
    scene.text('Mr. Pavlovich watches all the gopniks leave before leaving himself. Right after he leaves, Artem glances at you while tilting his head to the side, as if you should follow him.');
    scene.text('He\'s obviously planning something, and you feel the need to tag along and make sure he isn\'t going to get himself in trouble.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 1) {
              scene.text('Anushka chimes in, while Dan looks to her as she starts talking. "I don\'t think he respects or fears the gopniks anymore," Anushka chimes in. "Maybe he thinks he\'s better than us?"');
              scene.text('You can\'t help but notice her slightly cheeky tone and the smirk on her face as she looks right at Artem, as if trying to get under his skin.');
              scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Do you think you\'re better than us or something? Maybe I should kick your ass right here and find out?"');
              scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face. He looks like he\'s about going to start swinging when someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
              scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
              scene.text('Dan shakes his head. "No, we were just messing around."');
              scene.actions([
                { label: 'Watch how it ends', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big131.jpg');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance before walking past Mr. Pavlovich, who in turn follows her out.');
    scene.text('Artem then glances at you with a smile while tilting his head to the side, as if you should follow him.');
    scene.text('He\'s obviously planning something, and you feel the need to tag along and make sure he isn\'t going to get himself in trouble.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 2) {
                scene.text('Anushka walks up and hip checks Dan out of the way.');
                scene.text('"Hey! What the fuck, Nush?" he grumbles.');
                scene.text('Anushka then grabs Artem by the crotch. By his wince of pain, she seems to have a hold of his balls. This causes all the boys present to wince as she turns to talk to Dan.');
                scene.text('"I was just checking to see if he finally grew some balls." She then shakes her head. "Nope. Still feels like a pussy to me."');
                scene.text('The other gopniks all laugh as you notice the smirk on her face as she looks right at Artem, as if trying to get under his skin.');
                scene.text('Dan laughs and moves to stand next to Artem. "I bet that was the first time a girl has ever grabbed <i>your</i> crotch, loser. So is it true? Have you got no dick? Just a little bitch pussy?"');
                scene.actions([
                  { label: 'Watch how it ends', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big131.jpg');
    scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face, looking like he wants Artem to give him an excuse to get violent. Someone then loudly clears their throat and everyone turns to see Mr. Pavlovich.');
    scene.text('"Is there a problem here?" he asks as Anushka quickly lets go of Artem.');
    scene.text('Dan takes a step away from Artem. "No, we were just messing around."');
    scene.text('Mr Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance before walking past Mr. Pavlovich, who in turn follows her out.');
    scene.text('Artem then glances at you with a smile while tilting his head to the side, as if you should follow him. You have a pretty good idea of what he\'s planning.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] >= 3) {
                  scene.text('Anushka walks up and hip checks Dan out of the way.');
                  scene.text('"Fuck, Nush! Again?!" he scowls.');
                  scene.text('Anushka then grabs Artem by the crotch again. Seeing the redness creep up on Artem\'s cheeks and the movement of her hand, you\'re pretty sure she grabbed his dick this time and is rubbing it, but everyone else doesn\'t seem to notice and think she\'s grabbed him by the balls again.');
                  scene.text('Once more, all the boys react with a wince as she turns to talk to Dan. "Still nothing," she smirks before she turns to look Artem right in the eye. "Still nothing but a pussy!"');
                  scene.text('This causes the gopniks to laugh as you notice the smirk on her face.');
                  scene.actions([
                    { label: 'Watch what happens next', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('Dan laughs and moves to stand next to Artem. "I bet he goes home to jerk off while thinking about you grabbing his crotch, Nush. Isn\'t that right, nerd?"');
    scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face; he just looks down and nods in agreement with what Dan just said before someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
    scene.text('"Is there a problem here?" he asks as Anushka quickly lets go of Artem. When she does, you notice the slight bulge in his pants. You don\'t think anyone else seems to have noticed since they\'re now all focused on Mr. Pavlovich.');
    scene.text('Dan takes a step away from Artem. "No, we were just messing around."');
    scene.text('Mr Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance and swaying her hips as she walks past Mr. Pavlovich, who in turn follows her out.');
    scene.text('Artem then glances at you with a smile while tilting his head to the side, as if you should follow him. He\'s obviously planning to get some more payback on Anushka and you need to see what he does next.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      } else {
        if (((s as any).anushkaQW ?? 0)?.['artem_dom'] < 10  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 0) {
          scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
          scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man?"');
          scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
          scene.text('"Maybe he doesn\'t think he\'s a pussy anymore," Anushka chimes in. "Maybe he thinks he\'s a man now?"');
          scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Did your balls finally drop or something?"');
          scene.text('Artem shoves Dan back, but just as it look like they\'re about to fight, someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
          scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
          scene.text('Dan shakes his head. "No, we were just messing around."');
          scene.text('Mr Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go find something else to do," he says in a way that means he isn\'t asking.');
          scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts.');
          scene.text('"This isn\'t over, nerd…" Dan whispers at Artem before he follows the rest out.');
          scene.text('Mr. Pavlovich watches all the gopniks leave before leaving himself.');
          scene.actions([
            { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 10  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 0) {
            scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
            scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man? You want to fucking go then?!"');
            scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
            scene.text('"Maybe he doesn\'t think he\'s a pussy anymore," Anushka chimes in. "Maybe he thinks he\'s a man now?"');
            scene.text('Dan smirks and then turns back to Artem and shoves him again. "Is that it, loser? Did your balls finally drop or something?"');
            scene.text('Artem shoves Dan back, but just as it look like they\'re about to fight, someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
            scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
            scene.text('Dan shakes his head. "No, we were just messing around."');
            scene.actions([
              { label: 'Watch how it ends', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, likely testing Mr. Pavlovich\'s limit for as long as she can.');
    scene.text('Mr. Pavlovich watches all the gopniks leave before leaving himself. Artem then glances at you while tilting his head to the side, as if you should follow him.');
    scene.text('He\'s obviously planning something, and you feel the need to tag along and make sure he isn\'t going to get himself in trouble.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 1) {
              scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
              scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man You want to fucking go then?!"');
              scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
              scene.text('"I don\'t think he respects or fears the gopniks anymore," Anushka chimes in. "Maybe he thinks he\'s better than us?"');
              scene.text('You can\'t help but notice her slightly cheeky tone and the smirk on her face as she looks right at Artem, as if trying to get under his skin.');
              scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Do you think you\'re better than us or something? Maybe I should kick your ass right here and find out?"');
              scene.text('Artem doesn\'t back down and stares right back at Dan, who gets right up in Artem\'s face before someone loudly clears their throat. Everyone turns to see Mr. Pavlovich.');
              scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
              scene.text('Dan shakes his head. "No, we were just messing around."');
              scene.actions([
                { label: 'Watch how it ends', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance before walking past Mr. Pavlovich, who in turn follows her out.');
    scene.text('Artem then glances at you with a smile while tilting his head to the side, as if you should follow him. He\'s obviously planning something, and you feel the need to tag along and make sure he isn\'t going to get himself in trouble.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 2) {
                scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
                scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man? You want to fucking go then?!"');
                scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
                scene.text('Artem responds to Dan\'s insult. "Bigger than yours." A few people chuckle and Dan looks around to see who it might be before turning back to Artem with his jaw clenched.');
                scene.text('He looks like he\'s about to start swinging when Anushka walks up and hip checks Dan out of the way.');
                scene.text('She then grabs Artem by the crotch. By his wince of pain, she seems to have a hold of his balls. This causes all the boys to wince as she turns her head to talk to Dan.');
                scene.text('"There is a little something there," she smirks before she looks Artem right in the eye. "By the feel of it, Igor might not have the smallest dick in school after all."');
                scene.text('Dan laughs and moves to stand next to Artem. "Damn, that dude must have a tiny ass thing! You sure it\'s not just a clit like Igor\'s?"');
                scene.text('Anushka smirks at Dan. "Well you would know, wouldn\'t you? You guys all shower together after gym class after all."');
                scene.text('Dan looks confused for a second before it registers in his head. "How the fuck would I know?! I don\'t look at other guys junk in the shower!"');
                scene.text('She cocks her head slightly. "Then how do you know Igor\'s is so tiny?"');
                scene.text('The other gopniks howl with laughter as Dan blushes; even some of the nerds and outcasts smile or snicker quietly.');
                scene.actions([
                  { label: 'Enjoy the show.', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('"What?! I… Because you girls all said it!"');
    scene.text('His sputtering response in surprise at this being turned around on him only makes others laugh more.');
    scene.text('Anushka shurgs. "I was only asking. Since you said Igor was so tiny, I figured you must know." She says with it with such an innocent tone that you almost think she means it.');
    scene.text('Dan looks pissed and his anger is less pointed at Artem and more at Anushka. "Fuck you, Nush!"');
    scene.text('Her other hand suddenly snakes out and grabs Dan by the balls "In your dreams, baby, only in your dreams…"');
    scene.text('Artem is amused by this turn of events, which gets Dan\'s attention again. "What the fuck are you smiling at, faggot?!"');
    scene.text('Artem grabs Dan\'s arms to pry them off him, but just as it looks like it might come to blows, someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
    scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
    scene.text('Dan takes a step away from Artem. "No, we were just messing around."');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance before walking past Mr. Pavlovich with a bit of extra sway in her hips. Mr. Pavlovich shakes his head slightly and walks out.');
    scene.text('Right after he leaves, Artem glances at you with a smile while tilting his head to the side, as if you should follow him. Having a pretty good idea what he\'s planning, you decide to follow him and see what he does.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] >= 3) {
                  scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
                  scene.text('Dan shoves him hard against the wall in response. "You want to go again, little man?!"');
                  scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
                  scene.text('Anushka walks up and hip checks Dan out of the way before she grabs Artem by the crotch. Seeing the redness creep up on his cheeks and the movement of her hand, you\'re pretty sure she grabbed his dick and is rubbing it. Everybody else doesn\'t seem to notice and think she\'s grabbed him by the balls to squeeze them.');
                  scene.text('She turns her head to talk to Dan while still holding Artem\'s cock in her hand. "Just checking to see if his dick got bigger yet." Then she turns to look Artem right in the eye. "Nope, still fucking as tiny as ever." You notice the smirk on her face as she keeps rubbing his dick through his pants.');
                  scene.text('Dan laughs and moves to stand next to Artem. "I bet he goes home to jerk off while thinking about you grabbing his crotch. Isn\'t that right, nerd?"');
                  scene.text('Artem smiles at Dan. "At least a girl wants to grab my crotch."');
                  scene.actions([
                    { label: 'Enjoy the show.', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('The laughs are at Dan\'s expense this time, who pulls back his arm like he\'s going to hit Artem, but stops as someone loudly clears their throat. Everyone turns to see Mr. Pavlovich.');
    scene.text('"Is there a problem here?" he asks as Anushka quickly lets go of Artem. When she does, you can\'t help but notice the slight bulge in his pants. You don\'t think anyone else seems to have noticed since they\'re now all focused on Mr. Pavlovich.');
    scene.text('Dan takes a step away from Artem as he says. "No we was just messing around."');
    scene.text('Mr. Pavlovich glances at Artem, who nods in agreement. "I see. Well why don\'t you all go and find something else to do," he says in a way that means he isn\'t asking.');
    scene.text('The gopniks all grumble, but start filing out of the room, much to the relief of the nerds and outcasts. Anushka is the last one to leave, giving Artem a smirking glance before walking past Mr. Pavlovich, who just shakes his head and heads out as well.');
    scene.text('Right after he leaves, Artem glances at you with a smile while tilting his head to the side, as if you should follow him. He\'s obviously planning to get some more payback on Anushka and you decide to see what he does next.');
    scene.actions([
      { label: 'Follow Artem', goto: ['artem_nush_sex', 'artem_chase_nush'] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).artemQW ?? 0)?.['confidence'] === 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
      scene.text('Artem notices you walking over and quickly grabs an empty chair and makes room for you to sit next to him. "I was worried we wouldn\'t see each other today."');
      scene.text('He jokes, but you can tell there\'s a part of him that was being sincere.');
      scene.text('He isn\'t one for public affection, but he still can\'t go without some kind of physical contact with you, which leaves him sitting close enough to you that your legs bump and rub against each other under the table as you talk.');
      scene.text(qspFunc(s, 'npc_reactions', 'general', 'A2'));
    } else {
      if (((s as any).npc_rel ?? 0)?.['A2'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
        if (((s as any).grupTipe ?? 0) === 3) {
          scene.text(`"There you are, ${((s as any).pcs_nickname ?? '')}! How's it going? I figured we can get a head-start on Yenotin's lesson while we talk?"`);
          scene.text('He moves the textbook towards you so you can look at it. While you work, Artem keeps up a lively conversation, talking about a range of different topics.');
        } else {
          scene.text('"Hey, Artem, how\'s it going?" you ask while taking a seat at a desk across from him. His desk is covered with worksheets and a stack of textbooks.');
          scene.text(`"Oh hey ${((s as any).pcs_nickname ?? '')}. I'm just putting together a study guide," he tells you with a smile while continuing to write in his notebook. As you watch him work, you realize that he's writing quite a lot, far more than is needed for one person.`);
          scene.text('"What are you writing all that for?" you ask.');
          scene.text('"Well, I tutor a lot of the jocks, so it\'s mostly for them, but I also help some of the popular ones too."');
          scene.text('"Are you <i>actually</i> tutoring them or are they just making you do their homework for them?" you ask suspiciously with a raised brow.');
          scene.text('Artem chuckles sheepishly, a bit flustered by the question. "The jocks aren\'t too bad, but the others… Well, they need all the help they can get and I\'m happy to help if I can," he replies before quickly changing the subject.');
          scene.text('You decide not to push it and just keep him company while he works.');
        }
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A2'));
      } else {
        if (((s as any).npc_rel ?? 0)?.['A2'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
          qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
          if (((s as any).grupTipe ?? 0) === 3) {
            scene.text('You try to chat to Artem, but he doesn\'t seem all that interested in the conversation. His answers are short and he doesn\'t even bother to stop writing in his notebook as you talk.');
          } else {
            scene.text(`"Sorry ${((s as any).pcs_nickname ?? '')}, but why are you talking to me? We're not exactly friends you know…" he asks weakly.`);
            scene.text('He\'s careful not to offend you, but it\'s clear he\'s hesitant to talk to you.');
          }
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A2'));
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
            scene.text('When he sees you walking over, he gives you a disgusted look.');
            scene.text('"Get away from me, you disgusting slut!" he says as he moves away from you.');
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
            scene.text('You strike up a conversation with Artem. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A2'));
          }
        }
      }
    }
  }
  if (((s as any).artemLernQW ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A2'] > 20) {
    scene.actions([
      { label: 'Ask for help studying', handler: (st: GameState) => {
    (st as any).artemLernQW = 1;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
      scene.text('You approach Artem and explain how you\'re struggling in school and could really use his help studying.');
      scene.text('He looks around. "I\'ve been hearing some pretty bad rumors about you. So long as you don\'t tell anyone, you can come by my place after school and we can do our homework together."');
    } else {
      scene.text('You approach Artem and explain how you\'re struggling in school and could really use his help studying.');
      scene.text('He\'s a bit surprised. "What…? You want my help? I thought you were doing great in school, but if you need my help then I would be happy to assist. Meet me at my place if you want to do homework together."');
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big6.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 175) {
    if (((s as any).npc_rel ?? 0)?.['A6'] >= 70) {
      scene.text(`He smiles sheepishly as he puts his book down. "Oh hey ${((s as any).pcs_nickname ?? '')}. Did you say something? I don't think I heard you."`);
      scene.text('You shake your head. "Not yet. I just wanted to say hi is all."');
      scene.text('He nods. "Oh yeah… Um… Hi? I\'m real sorry about… You know…" he says while looking around. You know exactly what he means.');
      scene.text('You nod. "Thanks. It\'s my cross to bear."');
      scene.text('He smiles and nods before looking back down at his book. "This book is crazy interesting!"');
      scene.text('From this point on, he doesn\'t ignore you, but mostly pays attention to his book. You know he\'s afraid of what will happen if he\'s seen talking to you.');
      scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
    } else {
      if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
        scene.text('When he sees you walking over, he gives you a disgusted look.');
        scene.text('"Get away from me, you disgusting slut!" he says as he moves away from you.');
      } else {
        scene.text(`"Oh hey ${((s as any).pcs_nickname ?? '')}. Did you say something?" He smiles tightly at you as he puts his book down. Before you can even respond, he continues. "This book is crazy interesting!"`);
        scene.text('From this point on, he doesn\'t ignore you, but mostly pays attention to his book. You know he\'s afraid of what will happen if he\'s seen talking to you.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A6'] >= 60) {
        scene.text(`"Oh hey ${((s as any).pcs_nickname ?? '')}. Did you say something? I don't think I heard you." He smiles sheepishly as he puts his book down. "This book is crazy interesting!"`);
        scene.text('Before you know it, he\'s going on and on about all the interesting characters, plot holes and themes in the book.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
      } else {
        if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
          if (((s as any).grupTipe ?? 0) === 2) {
            scene.text('When you approach him, he gives you a fearful look. "Please don\'t…"');
            scene.text('You smile at him. "Please don\'t what?"');
            scene.text('He sighs. "Pick on me. Isn\'t that why you\'re here?"');
            scene.text('You shake your head. "I\'m not going to pick on you, I just wanted to say hi."');
            scene.text('You talk to him and he responds, but you can tell he\'s expecting you to do something at any moment.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
          } else {
            scene.text('You try talking to Petka, but it\'s very one-sided with you doing all the talking until he finally speaks up.');
            scene.text('"I don\'t want to sound rude, but we\'re not really friends, so I\'m not sure why you\'d want to talk to me," he says quietly. "Anyway, I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
          }
        } else {
          scene.text('You strike up a conversation with Petka. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A6'] >= 50) {
          scene.text(`"You really have to read this book, ${((s as any).pcs_nickname ?? '')}! I'm pretty sure it's one you'd enjoy!" he says excitedly.`);
          scene.text('He starts telling you about an interesting part he just read, but stops himself with a laugh. "Don\'t worry, I won\'t spoil it for you!"');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
        } else {
          if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
            scene.text('"Can we talk later? I really want to finish this chapter before class starts," he says, only briefly looking up from his book to address you before burying his nose right back into it.');
          } else {
            scene.text(`"You really have to read this book, ${((s as any).pcs_nickname ?? '')}!" he says excitedly.`);
            scene.text('He starts telling you about an interesting part he just read, but stops himself with a laugh. "Don\'t worry, I won\'t spoil it for you in case you want to read it for yourself."');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          if (((s as any).npc_rel ?? 0)?.['A6'] >= 70) {
            scene.text('You walk up and take a seat next to Petka, who gives you a smile.');
            scene.text('You talk for a bit before he stops you. "I… don\'t mean to be rude, but I\'m always surprised that you\'re a gopnik."');
            scene.text('You give him an amused look. "Why\'s that?"');
            scene.text('He looks around. "You\'re not like most of them. You\'re… nice."');
            scene.text('You laugh and shrug. "What can I say? I have a soft spot for nerds."');
            scene.text('This makes him smile and you keep talking until the bell rings.');
          } else {
            scene.text('When you approach him, he gives you a fearful look. "Please don\'t…"');
            scene.text('You smile at him. "Please don\'t what?"');
            scene.text('He sighs. "Pick on me. Isn\'t that why you\'re here?"');
            scene.text('You shake your head. "I\'m not going to pick on you, I just wanted to say hi."');
            scene.text('You talk to him and he responds, but you can tell he\'s expecting you to do something at any moment.');
          }
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
        } else {
          if (((s as any).npc_rel ?? 0)?.['A6'] >= 70) {
            scene.text(`He smiles sheepishly as he puts his book down. "Oh hey ${((s as any).pcs_nickname ?? '')}. Did you say something? I don't think I heard you."`);
            scene.text('You shake your head. "Not yet. I just wanted to say hi is all."');
            scene.text('He nods. "Oh yeah… Um… Hi? I\'m real sorry about… You know…" he says while looking around. You know he means about you being an outcast.');
            scene.text('You nod. "Thanks. It\'s my cross to bear."');
            scene.text('He smiles and nods before looking back down at his book. "This book is crazy interesting!"');
            scene.text('From this point on, he doesn\'t ignore you, but mostly pays attention to his book. You know he\'s afraid of what will happen if he\'s seen talking to you.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
          } else {
            if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
              scene.text('When he sees you walking over, he gives you an annoyed look.');
              scene.text('"Please don\'t bother me. I\'m busy," he says as he moves away from you.');
            } else {
              scene.text(`"Oh hey ${((s as any).pcs_nickname ?? '')}. Did you say something?" He smiles tightly at you as he puts his book down. Before you can even respond, he continues. "This book is crazy interesting!"`);
              scene.text('From this point on, he doesn\'t exactly ignore you, but mostly pays attention to the book. You know he\'s afraid of what will happen if he\'s seen talking to you.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A6'));
            }
          }
        }
      }
    }
  }
  if (((s as any).petkasub ?? 0) >= 1) {
    scene.actions([
      { label: 'Remind him you own him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A6', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big6.jpg');
    if (((st as any).petkasub ?? 0) > 10) {
      scene.text('Just before he gets up, you grab his arm and lean in close to whisper in his ear. "Just remember that I own your ass. Literally. Speaking of which, how does it feel?"');
      scene.text('You see him blush bright red and he looks around, afraid someone might have overheard. "Not so loud! Someone might hear you!"');
      scene.text('You scoff at his reaction. "Please, we both know you love it when I fuck you in the ass with my big cock! There\'s no denying it."');
      scene.text('He blushes even more. "Okay… Yeah I do, but I don\'t want everyone to know!"');
      scene.text('You smile at him. "Don\'t worry. No one will find out so long as I can take you whenever I want…" you tell him in a teasing tone before getting up and heading to your next class.');
    } else {
      scene.text('Just before he gets up, you grab his arm and lean in close to whisper in his ear. "Just remember that I own your ass. Literally. Speaking of which, how does it feel?"');
      scene.text('You see him blush bright red and he looks around, afraid someone might have overheard. "Please! I learned my lesson!"');
      scene.text('You scoff at his reaction. "<i>Please</i>, we both know you liked it. Besides, a deal\'s a deal."');
      scene.text('You then get up and head to your next class.');
    }
    scene.actions([
      { label: 'Go to your next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterJulia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big12.jpg');
  if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 175  &&  ((s as any).juliaQW ?? 0)?.['slut_chat'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A12'] >= 40) {
    if (((s as any).juliaQW ?? 0)?.['study_unlocked'] === 0) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['study_unlocked'] = 1;
    }
    ((s as any).juliaQW = (s as any).juliaQW ?? {})['slut_chat'] = 1;
    scene.img('images/characters/shared/headshots_main/12.jpg');
    scene.text(`As you approach the nerds, Julia takes hold of your elbow and leans in close to you. "${((s as any).pcs_nickname ?? '')}, I want to have a quick chat with you - in private please."`);
    scene.text('She walks out of the classroom, leaving you wondering what she wants, but Julia has always been kind to you, so you decide to follow her and find out what she wants.');
    scene.text('Julia leads you away from your classmates so you\'re not overheard.');
    scene.text(`"Sorry for the subterfuge ${((s as any).pcs_nickname ?? '')}, but I wanted a quick word with you. I hope that's okay?"`);
    scene.text('You nod in agreement and she continues. "I\'m not really sure how to put this… Umm…" She keeps looking down and not meeting your eyes, clearly both nervous and embarrassed.');
    scene.text('You decide to prompt her as she\'s obviously struggling with what she wants to say. "What you have to say can\'t be any worse than what I get called every day, so please just say it."');
    scene.actions([
      { label: 'Wait for her reply', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/12.jpg');
    scene.text(`With a sad smile, Julia answers you. "Okay ${((st as any).pcs_nickname ?? '')}, here goes… Look, I've always liked you, but I'm quite shy so haven't had the courage to approach you before. However, I can't stand by any longer and see you in all this pain without at least offering my help… That's if you want it?"`);
    scene.text('After a short pause, you reply. "Sorry, but I don\'t understand what you\'re offering?"');
    scene.text('She takes a deep breath and continues. "Well… I\'d like to help you… So if you need help with your homework, or just need a friend, then come to my house and I\'ll be there for you. You just need to promise me that you won\'t say anything to anyone else, at least until your reputation has improved."');
    scene.text('"Thanks Julia. It\'s certainly something I\'ll consider," you reply with a smile.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).juliaQW ?? 0)?.['study_unlocked'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A12'] >= 60) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['study_unlocked'] = 1;
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 175) {
        scene.text('You approach Julia and explain how you\'re struggling in school and could really use her help studying. She obliquely comments on your damaged reputation at school, but agrees to help you anyway.');
        scene.text('She doesn\'t seem to care much either way as long as you don\'t tell anyone.');
      } else {
        scene.text('You approach Julia and explain how you\'re struggling in school and could really use her help studying.');
        scene.text(`She thinks it over for a second, but happily agrees. "Sure thing, ${((s as any).pcs_nickname ?? '')}. That could be fun!"`);
      }
      scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 175) {
        if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
          scene.text(`A thin smile appears on Julia's lips. "Hi ${((s as any).pcs_nickname ?? '')}." She chews her lip before releasing a sigh. "Look, don't take this the wrong way. I like you, but…"`);
          scene.text('A moment of awkward silence hangs in the air as Julia\'s eyes refuse to face you. "With your reputation… It might be better if you stayed away for a bit. Radomir…" she sighs. "I… don\'t want to give him more avenues to do something, you know?"');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
            scene.text(`Julia narrows her eyes. "${((s as any).pcs_nickname ?? '')}… Just stay away and don't talk to me, or Zina ever again."`);
          } else {
            scene.text(`Julia smiles sadly. "Look ${((s as any).pcs_nickname ?? '')}… It's not that I don't like you but… I need you to stay away. Please."`);
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
            if (((s as any).pcs_hotcat ?? 0) >= 6) {
              scene.text(`"Hello there, ${((s as any).pcs_nickname ?? '')}!" she snorts. "Well, uhm… I might like the prequels," she says, winking. "How are you doing? I hope Dimka isn't giving you trouble?" She steals a glance at her surroundings. "If you ask me, something about him seems… off," she says in a hushed voice. "I wouldn't trust him too much."`);
              scene.text('She chews the inside of her cheek. "Now, I suppose Katya and Vicky are probably giving you enough trouble with dresses, but… did you see the photographs in the latest D&G catalogue? The camera work in there… of course, I would have added some improvements, but not everyone can be perfect like me," she jokes. "And if we got, say, you as a model… we could sell anything. I mean, the best photographer and the best model around? We should just open a fashion brand."');
            } else {
              scene.text(`"Hello there, ${((s as any).pcs_nickname ?? '')}!" she snorts. "Well, uhm… I might like the prequels," she says with a wink. "How are you doing? I hope Dimka isn't giving you trouble?" She steals a glance at her surroundings. "If you ask me, something about him seems… off," she says in a hushed voice. "I wouldn't trust him too much."`);
              scene.text('She chews the inside of her cheek. "Now, I suppose Katya and Vicky are probably giving you enough trouble with dresses, but… did you see the photographs in the latest D&G catalogue? The camera work in there… of course, I would have added some improvements, but not everyone can be perfect like me," she jokes.');
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
              if (((s as any).pcs_hotcat ?? 0) >= 6) {
                scene.text(`"Oh. ${((s as any).pcs_nickname ?? '')}… What are you doing here? Not that I'm not happy to see you, but…" she frowns.`);
                scene.text('The conversation quickly becomes one-sided as she absent-mindedly answers the occasional question while focusing on her schoolwork, occasionally sending a glance your way.');
              } else {
                scene.text(`"Oh. ${((s as any).pcs_nickname ?? '')}… What are you doing here? Not that I'm not happy to see you, but…" she frowns.`);
                scene.text('The conversation quickly becomes one-sided as she absent-mindedly answers the occasional question while focusing on her schoolwork.');
              }
            } else {
              scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}! Great to see you. Say, did you see the photos of that latest G&M catalogue? The camera work feels off, like they hired a blind amateur. Or my brother… It's a similar level of skill, honestly," she says before pausing. "I'm joking. A blind person knows more about proper composition than Misha."`);
            }
          }
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
        } else {
          if (((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
              if (((s as any).pcs_hotcat ?? 0) >= 6) {
                scene.text(`Oh hey, ${((s as any).pcs_nickname ?? '')}! I saw you running through the park! I think that shooting photographs at something related to exercise could make for a good project. Maybe play around with shutter speeds… see balls in motions, girls in motion… just to show… movement. Say, when you do something, you need to call me!"`);
                scene.text('She chews the inside of her lip. "I like fit girls. As models!" she adds a little too quickly.');
              } else {
                scene.text(`Oh hey, ${((s as any).pcs_nickname ?? '')}! I saw you running through the park! I think that shooting photographs at something related to exercise could make for a good project. Maybe play around with shutter speeds… see balls in motions, girls in motion… just to show… movement. Say, when you do something, you need to call me!"`);
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
                scene.text('You try to talk to Julia, but the conversation quickly becomes one-sided. Her focus is lost in schoolwork as she absent-mindedly murmurs in agreement to anything you say.');
              } else {
                if (((s as any).pcs_hotcat ?? 0) >= 6) {
                  scene.text(`Julia breaks from her schoolwork and looks up. "Hello ${((s as any).pcs_nickname ?? '')}! Nice to see you! Say, I'm having trouble with Ivanov's Anatomy assignment… but, as a jock, uhm… could you model? I… need to see some muscles…" she starts, her cheeks reddening.`);
                } else {
                  scene.text(`Julia breaks from her schoolwork and looks up. "Hello ${((s as any).pcs_nickname ?? '')}! Nice to see you! So, uhm, right. Did you see that football game? Uhm, you know, Zenit against… uhm… I think it was Moscow? They did good, right?" she offers awkwardly.`);
                }
              }
            }
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
          } else {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
                if (((s as any).pcs_hotcat ?? 0) >= 6) {
                  scene.text('As you listen to Julia, you recall a time when she would just let others dominate the conversation. But with you, she speaks with an easy confidence, contributing more than usual. Today, you discuss lessons, game night with Zina and… photography.');
                  scene.text('"Right. So, I dislike photoshop. Not only do they lazily cut shapes out, but you can see a glaring difference in lighting, a lack of care, as evidenced by warped floorboards, overdone ratios…" she huffs. "It\'s almost like bad textures being implemented, both rely on care. Zin showed me one of those very cheap Unity games… They just took random assets from the store and threw them in. There\'s nothing artistic about it! Same with bad photoshops. You want care to create art. But with photography, sometimes natural is superior."');
                  scene.text('She smiles shyly. "I mean, why change something that already looks good and potentially mess it up?"');
                  if (((s as any).nerd_game ?? 0)?.['stage'] >= 1  &&  ((s as any).nerd_game ?? 0)?.['julia_talk_1'] === 0) {
                    ((s as any).nerd_game = (s as any).nerd_game ?? {})['julia_talk_1'] = 1;
                    scene.text(`Julia smiles. "Hey ${((s as any).pcs_nickname ?? '')}! So, what did you think of Feofan's game? I think it has potential, but I wonder how to progress…"`);
                  }
                } else {
                  scene.text('As you listen to Julia, you recall a time when she would just let others dominate the conversation. But with you, she speaks with an easy confidence, contributing more than usual. Today, you discuss lessons, game night with Zina and… photography. "Right. So, I dislike photoshop. Not only do they lazily cut shapes out, but you can see a glaring difference in lighting, a lack of care, as evidenced by warped floorboards, overdone ratios…" she huffs. "It\'s almost like bad textures being implemented, both rely on care. Zin showed me one of those very cheap Unity games… They just took random assets from the store and threw them in. There\'s nothing artistic about it! Same with bad photoshops. You want care to create art. But with photography, sometimes natural is superior."');
                  if (((s as any).nerd_game ?? 0)?.['stage'] >= 1  &&  ((s as any).nerd_game ?? 0)?.['julia_talk_1'] === 0) {
                    ((s as any).nerd_game = (s as any).nerd_game ?? {})['julia_talk_1'] = 1;
                    scene.text(`Julia smiles. "Hey ${((s as any).pcs_nickname ?? '')}! So, what did you think of Feofan's game? I think it has potential, but I wonder how to progress…"`);
                  }
                }
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
              } else {
                if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
                  if (((s as any).pcs_hotcat ?? 0) >= 6) {
                    scene.text('You try to talk to Julia, but the conversation quickly becomes one-sided. Her focus is lost in schoolwork as she absent-mindedly murmurs in agreement to anything you say, but you do manage to draw a few glances without breaking her concentration completely.');
                  } else {
                    scene.text('You try to talk to Julia, but the conversation quickly becomes one-sided. Her focus is lost in schoolwork as she absent-mindedly murmurs in agreement to anything you say.');
                  }
                } else {
                  if (((s as any).pcs_hotcat ?? 0) >= 6) {
                    scene.text(`You approach Julia and find her warming to your presence. "Hi ${((s as any).pcs_nickname ?? '')}! Nice to see you! Say, did you hear about Zina? She broke my record in Subway Surfers again!"`);
                    scene.text('She sticks her tongue out at her friend. Zina, sitting across the room with her phone capturing her full attention, doesn\'t notice her. "I did manage to beat her in Street Fighter, though."');
                    scene.text('You hear murmurs of cheating from around the room, eliciting a chuckle from Julia. "I suppose that might be because the game lacks a joystick. I\'m not too good with them," she muses, patting her chin as her mouth quirks into a small smirk.');
                  } else {
                    scene.text(`You approach Julia and find her warming to your presence. "Hi ${((s as any).pcs_nickname ?? '')}! Nice to see you! Say, did you hear about Zina? She broke my record in Subway Surfers again!"`);
                    scene.text('She sticks her tongue out at her friend. Zina, sitting across the room with her phone capturing her full attention, doesn\'t notice her. "I did manage to beat her in Street Fighter, though."');
                    scene.text('You hear murmurs of cheating from around the room, eliciting a chuckle from Julia.');
                  }
                }
              }
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
                  if (((s as any).pcs_hotcat ?? 0) >= 6) {
                    scene.text(`Upon seeing you, Julia puts her homework away and smiles. "Oh hey, ${((s as any).pcs_nickname ?? '')}! How nice to see you! What did you think of our last lesson? Math with Mr. Tsarev… works. Don't tell my dad I'm not the greatest fan of shop class. But art? Mr. Vasilyev might mean well, but… it lacks photography. There's so much about shot composition that can even be extended to drawing!"`);
                    scene.text('She looks away briefly, her face reddening. "I mean, I could show you a lot about composition if you were willing to model for me…"');
                  } else {
                    scene.text(`Upon seeing you, Julia puts her homework away and smiles. "Oh hey, ${((s as any).pcs_nickname ?? '')}! How nice to see you! What did you think of our last lesson? Math with Mr. Tsarev… works. Don't tell my dad I'm not the greatest fan of shop class. But art? Mr. Vasilyev might mean well, but… it lacks photography. There's so much about shot composition that can even be extended to drawing!"`);
                  }
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      scene.text('Julia barely manages a greeting, unable to meet your eyes. Her body tenses up in your presence. You could swear her eyes were on you though. Not your face. Rather, a bit… lower.');
                    } else {
                      scene.text('Julia barely manages a greeting, unable to meet your eyes. Her body tenses up in your presence.');
                    }
                  } else {
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      scene.text('Julia greets you anxiously. The two of you chat awkwardly as she distracts herself with schoolwork. From time to time, she looks up at you with a nervous smile before a sudden vulnerability overcomes you.');
                      scene.text('You look into her eyes and feel a deeper meaning behind them. Is she checking you out?');
                    } else {
                      scene.text('Julia greets you anxiously. The two of you chat awkwardly as she distracts herself with schoolwork. From time to time, she looks up at you with a nervous smile.');
                    }
                  }
                }
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
              } else {
                if (((s as any).npc_rel ?? 0)?.['A12'] >= 50) {
                  scene.text('Julia smiles. No longer the quiet girl you first met, she speaks with an easy confidence as two of you cover a wide range of topics, such as photography, video games, and surprisingly, motorbikes.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
                    if (((s as any).pcs_hotcat ?? 0) >= 6) {
                      scene.text('You try to talk to Julia, but the conversation quickly becomes one-sided. Her focus is lost in schoolwork as she absent-mindedly murmurs in agreement to anything you say, but you do manage to draw a few glances without breaking her concentration completely.');
                    } else {
                      scene.text('You try to talk to Julia, but the conversation quickly becomes one-sided. Her focus is lost in schoolwork as she absent-mindedly murmurs in agreement to anything you say.');
                    }
                  } else {
                    scene.text('Julia looks up from her schoolwork. You manage to steal some of her attention away from her books as the two of you chat efficiently and comfortably.');
                  }
                }
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A12'));
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Julia," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJuliaTampon(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Julia," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJuliaTampon(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Julia," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJuliaTampon(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Julia," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJuliaTampon(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterJuliaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big12.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Julia," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Julia," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A12'] > 40) {
      scene.text('"A tampon?" Julia blushes faintly as she reaches for her purse. "I don\'t have tampons, but I have some spare pads. Is that okay?"');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.text('"That\'s fine, it\'s an emergency after all. Thanks Julia."');
        scene.text('"You\'re welcome," she smiles as she hands you the pad.');
        scene.text('You thank her again and run off to the bathroom to go put it on.');
      }
    } else {
      scene.text('"A-a tampon?" Julia stutters as she blushes fiercely but reaches for her purse anyways. "I uhm, don\'t have any tampons. Is a pad okay?"');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.text('"That\'s fine, it\'s an emergency after all. Thanks Julia."');
        scene.text('"You\'re welcome," she mumbles, handing you the pad.');
        scene.text('You thank her again and run off to the bathroom to go put it on.');
      }
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      (s as any).isprokp = 1;
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.actions([
        { label: 'Uh…', handler: (st: GameState) => {
    scene.text('"Uh…"');
    scene.text('You hesitate as she holds out the pad for you, very conscious of the fact that you can\'t use a menstrual pad right now unless you can somehow get ahold of some underwear to go with it. Julia misinterprets your hesitation and her cheeks color with embarrassment, assuming that you\'re judging her for using pads.');
    scene.text('"That will be fine, thanks," you say with a false smile.');
    scene.text('"You\'re welcome," she mumbles, looking away as she hands you the pad.');
    scene.text('You awkwardly walk away to the bathroom where you do <i>not</i> put on a pad without underwear and still have a woman\'s issue to take care of.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'That\'s not going to work', handler: (st: GameState) => {
    scene.text('"Uhm… A pad\'s not going to work for me," you say.');
    scene.text('"Huh? Why not?" Julia looks confused.');
    scene.text('"You need panties to wear a pad," you reply with a wry smirk.');
    scene.text('"Uh… Uhm…" Her cheeks go bright red as she looks around nervously.');
    scene.text('"Thanks anyways," you say but unfortunately before you have a chance to ask someone else, the rest of the class starts filing back in.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A12'] > 20) {
      scene.text('"Yeah, I have one," Julia nods.');
      scene.text('She quickly digs into her purse and comes up with a pad for you');
      scene.text('"Thanks Julia."');
      scene.text('"You\'re welcome," she smiles back.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    } else {
      scene.text('Julia looks startled that you\'re asking her but nods hesitantly.');
      scene.text('"Y-yeah, I have one you can use…" She digs into her purse and comes up with a pad for you.');
      scene.text('"Thanks Julia."');
      scene.text('"You\'re welcome," she mumbles and you run off to the bathroom to go put the tampon in before class starts.');
    }
    (s as any).isprokp = 1;
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  scene.build();
}

function enterNatasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big16.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
      scene.text(`She looks up at you. "I'm sorry ${((s as any).pcs_nickname ?? '')}, but I can't associate with you until you improve your reputation."`);
      scene.text('She returns to what she was doing without waiting for an answer.');
    } else {
      scene.text('When she sees you walking over, she gives you a disgusted look.');
      scene.text('"Get away from me, you disgusting slut!" she says as she moves away from you.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('Natasha isn\'t really interested in talking to you, but you persist in trying to keep up a conversation.');
        scene.text('"Hey, I\'ve gotta go… do this thing. I guess I\'ll see you later?" she says halfheartedly.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A16'));
      } else {
        scene.text('"Why are you even talking to me? It\'s not like we\'re in the same social circle or something," she says with a suspicious look. "So, if you could just…"');
        scene.text('She drags the last part out, expecting you to catch her drift and leave.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A16'] < 50) {
        scene.text('You strike up a conversation with Natasha. She seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A16'));
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 3) {
            scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}! Have you seen this new makeup line coming out? It's expensive, but I <i>looove</i> the colors!" she says as she holds up the magazine ad for said makeup.`);
            scene.text('She talks about how she can\'t afford nice things like this and this ends up bringing her down. You quickly change the subject and start complimenting her on her sense of style and grades, reminding her she\'s a top student in school, which brings a smile to her face.');
          } else {
            scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}! Have you seen this new makeup line coming out? It's expensive, but I <i>looove</i> the colors!" she says as she holds up the magazine ad for said makeup.`);
            scene.text('She talks about how she still finds it difficult to afford nice things like this and this ends up bringing her down until you remind her that she\'s got rid of all her debts and now has some money. You also remind her that you can always help her out.');
            scene.text('She smiles at this, but you know that she doesn\'t want to keep relying on you, so you change the subject and start complimenting her on her sense of style and grades, reminding her that she\'s a top student in school, which brings the smile back to her face.');
          }
        } else {
          scene.text('Natasha greets you with a smile as you sit down beside her. The conversation is lighthearted as you talk about your day so far and what goes on in the apartment complex where you both live.');
        }
        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3  &&  ((s as any).NatbelQW ?? 0)?.['end_of_gschool_chat'] === 0) {
          if (((s as any).year ?? 0) === 2017  &&  (((s as any).month ?? 0) === 4  &&  ((s as any).day ?? 0) >= 26  ||  ((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) < 26)) {
            scene.text('"I want to talk to you. Could you drop by my place later?" Natasha asks.');
          }
        }
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A16'));
      }
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A16'] >= 60  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
    scene.actions([
      { label: 'Ask for help studying', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['QWstage'] = 1;
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('You approach Natasha and explain how you\'re struggling in school and could really use her help studying.');
    scene.text(`She thinks it over for a second, but happily agrees. "Sure thing, ${((st as any).pcs_nickname ?? '')}! That could be fun!"`);
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8  &&  ((s as any).NatbelQW ?? 0)?.['Debt'] > 0) {
      scene.actions([
        { label: 'Take her to the bathroom', handler: (st: GameState) => {
    scene.text('<center><b>Girls Bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
    scene.text('You grab Natasha by the hand and pull her along with you. "Come to the bathroom with me."');
    scene.text('She looks at you questioningly, but doesn\'t protest as you pull her into the bathroom and past a few girls using the mirrors. You take her into a stall with you and sit on the toilet before pulling down your panties and spreading your legs.');
    scene.text('"Down on your knees. Time to pay off a little debt."');
    scene.text('She looks a little shocked at first, but gets down on her knees and lowers her face to your crotch.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['Debt'] = ((st as any).NatbelQW['Debt'] ?? 0) - (500);
    qspCall(st, 'npcStat', 'A16');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A16'] = 1;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['lesbian'] = ((st as any).NatbelQW['lesbian'] ?? 0) + (1);
    (st as any).orgasm_or = 'yes';
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/school/Natschoolowe.jpg');
    scene.text('She immediately starts licking your clit and you bite your lip to try and stop yourself from moaning too loudly as you lean back and relax, letting Natasha pleasure you with her tongue.');
    scene.text('She\'s getting a lot better at this and if you\'re not mistaken, she\'s starting to like it.');
    scene.text('She starts using her fingers on you as well and is really getting into it as you start to pant and moan. Clamping a hand over your mouth to keep yourself from crying out, it doesn\'t take her long to bring you to a climax.');
    qspCall(st, 'arousal', 'cuni', (-10), 'lesbian', 'dom');
    scene.text('Your whole body shudders as the orgasm rocks your body and you grind your pussy against her face. Once the sensation passes, you look down and see Natasha smiling up at you, obviously pleased with herself.');
    scene.text('You lean down and give her a long, slow passionate kiss, tasting your pussy juices on her lips. A few seconds later, the bell rings and you both merrily hurry to class.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterEvgeny(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A151', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big151.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 175) {
    qspCall(s, 'npc_relationship', 'modify', 'A151', 'dislike');
    if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
      scene.text(`When you approach, you see him stare at you with a conflicted look. "Uh… Hey ${((s as any).pcs_nickname ?? '')}…" he says rather meekly.`);
      scene.text('He answers you when you talk to him, but tries his best to end the conversation as soon as possible. After ending the conversation awkwardly, Evgeny walks away from you quickly. You get the sense that he no longer feels comfortable around you.');
    } else {
      scene.text('As you attempt to approach him, Evegeny looks at you with visible revulsion.');
      scene.text('"Don\'t talk to me!" he snarls as he gets up and leaves.');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
        scene.text(`Evngey looks up at you and sees you approaching before going back to his chessboard. "Hey ${((s as any).pcs_nickname ?? '')}."`);
        scene.text('You have a delightful conversation while ignoring the odd looks your peers give you.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
      } else {
        if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
          scene.text('Evgeny looks at you in confusion. He cuts you off as you attempt to greet him.');
          scene.text('"Your friends aren\'t here and I\'m busy!" he retorts before going back to playing chess with himself.');
          scene.text('Any further attempts at conversation are ignored.');
        } else {
          scene.text('You sit next to Evgeny and attempt to have a conversation with him, but are unable to get anywhere. Eventually, you resign yourself to just watching him play chess against himself.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
          scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}." He holds out his hand, which you proceed to highfive. He then quickly goes back to his chessboard.`);
          scene.text('You have a somewhat engaging conversation as Evgeny is rather focused on his chess match against himself, both of you ignorant to the odd looks your peers give you.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
        } else {
          if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
            scene.text('As you approach, Evgeny looks at you with a frown.');
            scene.text('"I don\'t have time for you. I\'m busy!" he says dismissively before leaving.');
          } else {
            scene.text('You sit next to Evgeny and attempt to strike up a conversation, but he keeps shutting you down, so you just quietly watch him play chess against himself. At least he didn\'t tell you to go away this time.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
            scene.text('"In chess, you should be as cool as a cucumber," Evgeny says without you asking his opinion on the matter, causing you to laugh.');
            scene.text('You have a somewhat engaging conversation as Evgeny is rather focused on his chess match against himself, but go along with it nonetheless and silently watch him.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
          } else {
            if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
              scene.text('You strike up a conversation with Evgeny and he sighs and looks up from his chessboard.');
              scene.text('"Look, I don\'t want to be mean, but we aren\'t really friends and I\'m busy…"');
              scene.text('He goes back to his one man chess match and ignores any other attempts at conversation.');
            } else {
              scene.text('You strike up a conversation with Evgeny and he sighs before going back to his chess match, only responding to you with one or two words at most.');
              scene.text('Eventually, you both sit in silence as he continues to play chess against himself.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
              scene.text('You approach Evgeny and sit next to him as he plays chess against himself.');
              scene.text('"Hello," he meekly responds to your greeting and you have a somewhat one sided conversation.');
              scene.text('He seems to enjoy your company, but is still intimidated by you.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
                scene.text('As you approach Evgeny, he immediately packs up his chessboard. "I don\'t want any trouble!"');
                scene.text('He gets up and leaves in a hurry.');
              } else {
                scene.text('You sit next to Evgeny as he plays chess against himself.');
                scene.text('After a minute, he looks up at you and recoils. "Sorry, I didn\'t hear you sitting down."');
                scene.text('You attempt to strike up a conversation with him, but are unsuccessful. Eventually, you resign yourself to sitting in a somewhat tense silence.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A151'] >= 50) {
              scene.text('"In chess, you should be as cool as a cucumber," Evgeny says without you asking his opinion on the matter, causing you to laugh.');
              scene.text('You have a somewhat engaging conversation as Evgeny is rather focused on his chess match against himself, but go along with it nonetheless and silently watch him.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
                scene.text('"I really don\'t want to talk right now," Evgeny says abruptly.');
                scene.text('You\'re a bit shocked at how straightforward he is, but he refuses to look up from his chessboard, leaving you with no other option but to walk away.');
              } else {
                scene.text('You strike up a conversation with Evgeny. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A151'));
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A152', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big152.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
      scene.text(`"Can I help you, ${((s as any).pcs_nickname ?? '')}?" he asks while awkwardly trying to avoid letting you get too close to him.`);
      scene.text('"I just wanted to talk was all," you reply.');
      scene.text('He looks away from you and at his fellow nerds. "Maybe later? I\'m busy right now."');
      scene.text('You sigh and nod before walking away. You can hear the other nerds snickering at Feofan and what he meant by \'later\', causing him to awkwardly try and explain himself.');
    } else {
      scene.text('He slides away from you in his chair. "Stay away from me, slut! Aren\'t the gopniks waiting for you in the bathroom to have a go with you or something?"');
      scene.text('You sigh before walking away.');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, I was just thinking about how much you look like a character from one of my shows!" He shows you images of an attractive looking girl in a tight fitting outfit. "She gets kidnapped all the time and has to be rescued, but I think you could easily pull her off."`);
        scene.text('You give him a sly grin. "Oh so I\'m supposed to be kidnapped and tied up so you can come and rescue me?"');
        scene.text('He blushes bright red while looking awkwardly at the floor. "I didn\'t mean it like that…"');
        scene.text('You can\'t help but smile at his reaction before engaging him in another conversation.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
      } else {
        if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
          scene.text('"Sorry if this sounds rude, but why are you talking to me of all people? It\'s not like we\'re in the same social circle or anything…" he says with a suspicious look. "Listen. I\'m just busy at the moment, so…"');
          scene.text('He remains polite and tries to stay lighthearted, but he obviously doesn\'t want to talk with you.');
        } else {
          scene.text('You strike up a conversation with Feofan. He seems a bit hesitant at first, but quickly engages you in a rather one sided conversation about sci-fi, comic books and fantasy role play.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
          scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, I was just thinking about what great shape you're in and how you could easily do a cosplay!"`);
          scene.text('He goes on to describe and show you images of a heavily sexualized comic book character wearing a rather skimpy outfit.');
          scene.text('"What the fuck, Feofan?! You want me to parade myself around in <i>that</i>?"');
          scene.text('He looks dejectedly at the floor. "Sorry, I just thought that you would enjoy it was all…"');
          scene.text('You sigh and shake your head at him in disappointment before changing the subject.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
        } else {
          if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
            scene.text('"Sorry if this sounds rude, but why are you talking to me of all people? It\'s not like we\'re in the same social circle or anything…" he says with a suspicious look. "Listen. I\'m just busy at the moment, so…"');
            scene.text('He remains polite and tries to stay lighthearted, but he obviously doesn\'t want to talk with you.');
          } else {
            scene.text('You strike up a conversation with Feofan. He seems a bit hesitant at first, but quickly engages you in a rather one sided conversation about sci-fi, comic books and fantasy role play.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
            scene.text('"I can\'t believe this…" he mutters as you approach. "Someone on the forum said that Alien vs. Predator cross-over crap is the best in the series! Anyone with half a braincell knows the first two and last two movies are the only good ones!"');
            scene.text('He pauses for a second as he finishes reading his phone screen. "I can\'t read anymore of this blasphemy!" he finishes with a heavy sigh before he starts filling you in on his plans for the next game night.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
          } else {
            if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
              scene.text('He isn\'t really interested in talking to you, but you insist and try to keep up a conversation until he finally stops you. "Hey, I need to go… do this thing…"');
              scene.text('"I\'ll see you later then?" you ask with a small smile.');
              scene.text('"I guess so…" he halfheartedly replies with an awkward laugh before dashing off.');
            } else {
              scene.text('Feofan is busy on his phone when you approach, but flashes you a quick smile when he sees you. "There\'s this Star Trek convention going on, but it\'s out of town. I wish I could go…"');
              scene.text('He\'s clearly saddened by this, but gives you a dismissive shrug of his shoulders before going on to talk about other conventions he has attended.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
              scene.text('He smiles as you approach. "You know that you remind me of a character from a show that I watch? She kicks ass and everything, just like you!"');
              scene.text('You give him a confused stare. "Are you saying that I\'m like one of your dumb geeky characters?"');
              scene.text('He raises his hands in defense. "No, no! I\'m just saying you remind me of her is all!"');
              scene.text('You smile at his reaction before engaging him in another conversation.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
                scene.text('"Sorry if this sounds rude, but why are you talking to me of all people? It\'s not like we\'re in the same social circle or anything…" he says with a suspicious look. "Listen. I\'m just busy at the moment, so…"');
                scene.text('He remains polite and tries to stay lighthearted, but he obviously doesn\'t want to talk with you.');
              } else {
                scene.text('You strike up a conversation with Feofan. He seems a bit hesitant at first, but quickly engages you in a rather one sided conversation about sci-fi, comic books and fantasy role play.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A152'] >= 50) {
              scene.text('You approach Feofan and engage him in conversation.');
              scene.text('His fellow nerds give him dirty looks, but he ignores them and continues speaking with you, telling you about the latest convention he attended and what cosplay outfit he wore.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
                scene.text('"Why are you talking to me? It\'s not like we\'re in the same social circle. You\'re not even in one!"');
                scene.text('He makes no attempt to hide the fact that he doesn\'t want to talk to you.');
              } else {
                scene.text('You strike up a conversation with Feofan. He seems a bit hesitant at first, but quickly engages you in a rather one sided conversation about sci-fi, comic books and fantasy role play.');
                scene.text('His fellow nerds give him dirty looks, but he ignores them and continues speaking with you.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A152'));
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterGerasim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A153', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big153.jpg');
  if ((Math.floor(Math.random() * 10) + 1) === 1  &&  ((s as any).gerasim_month_block ?? 0) + 28 <= ((s as any).daystart ?? 0)) {
    (s as any).gerasim_month_block = ((s as any).daystart ?? 0);
    scene.text('Just as you\'re about to head over to Gerasim as he comes rolling into the classroom, you see Dan dart in behind him, grab onto the handles of his wheelchair and jerk it back so the front wheels come off the ground. Gerasim cries out in alarm, which makes Dan laugh.');
    scene.text('He lets it tip back on all four wheels, but doesn\'t let go and starts to violently shake the chair. Gerasim hangs onto the arms of the chair, trying to stop himself from falling out. "Dan! Please stop, I\'m about to fall!"');
    scene.text('The other nerds look on and you can tell several are thinking about saying something, but are too scared to do so.');
    scene.actions([
      { label: 'Say something', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A10', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You can\'t just stand by and do nothing.');
    scene.text('"Leave him alone, Dan!"');
    if (((st as any).fame ?? 0)?.['pav_slut'] > 250) {
      scene.text('Dan looks over at you and grins. "Why? You want to suck my dick instead, slut?"');
    } else {
      if (((st as any).grupTipe ?? 0) === 1) {
        scene.text('Dan looks over at you with a bemused smile. "What are you going to do if I don\'t, princess?"');
      } else {
        if (((st as any).grupTipe ?? 0) === 2) {
          scene.text('Dan looks over at you with a hard stare. "Come and stop me if you think you\'re tough enough!"');
        } else {
          if (((st as any).grupTipe ?? 0) === 3) {
            scene.text('Dan looks over at you with a dark smile, promising unpleasantness to you. "Unless you want to be next, then shut your face hole, nerd!"');
          } else {
            if (((st as any).grupTipe ?? 0) === 4) {
              scene.text('Dan looks over at you with an annoyed glare. "You too? What the fuck is it with you bitches and this cripple?"');
            } else {
              scene.text('Dan looks over at you with a dark smile, promising unpleasantness to you. "Shut up loser, or you\'re next in line!"');
            }
          }
        }
      }
    }
    scene.text('Before you can respond, Anushka walks up behind Dan and presses herself against his back. He starts to turn as Anushka reaches around and her hand goes to his crotch.');
    scene.text('She suddenly grabs it firmly and you hear Dan hiss before wincing in pain. "Fuck Nush, let go!"');
    scene.text('She smiles at him. "Let go of Gerasim first."');
    scene.text('He clenches his jaw. "I\'m not holding him…"');
    scene.text('He hisses in pain even more as you see her tighten her grip on his balls. "Don\'t get smart with me, Dan! You know what the fuck I mean!"');
    scene.text(`He lets go of Gerasim's wheelchair, who wheels away from them before looking back. "Thanks, Anushka." He then looks over at you with a grateful smile as well. "Thanks, ${((st as any).pcs_firstname ?? '')}."`);
    scene.text('"There! I let go, now you let go!" Dan says in an angry hiss.');
    scene.text('Anushka leans her face to the side of his, her lips next to his ear, saying something that you can\'t make it out and squeezing Dan\'s balls a little harder before letting go.');
    scene.text('Dan snorts. "If you wanted to grab my dick Nush, all you had to do was ask."');
    scene.text('She shakes her head at Dan, then gives Gerasim a friendly smile before flipping Dan off as she walks out, followed by Dan making some comment about any time she wants.');
    scene.actions([
      { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big153.jpg');
    scene.text('You walk over as the nerds gather around Gerasim. Several of them are asking if he\'s okay, followed by them wondering aloud why Anushka helped him. By the way they talk, it sounds like it\'s not uncommon for her to step in and help him.');
    scene.text('"Look, I\'m fine, Dan just scared me a little is all," he says, but blushes when pressed about Anushka helping him. "Look, she\'s not like the rest of them, okay?"');
    scene.text('The other nerds point out the times she\'s picked on them and Gerasim keeps insisting she isn\'t like the rest, but refuses to elaborate further on it.');
    scene.text('The conversation slowly turns into the nerds complaining about everyone but the outcasts picking on them. You never really get a chance to talk to Gerasim other than to say you\'re glad he\'s okay.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      { label: 'Just watch', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A153', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('At that moment, Anushka walks up behind Dan and presses herself against his back. Dan stops shaking the chair and starts to turn as Anushka reaches around and her hand go to his crotch.');
    scene.text('She suddenly grabs it firmly and you hear Dan hiss before wincing in pain. "Fuck Nush, let go!"');
    scene.text('She smiles at him. "Let go of Gerasim first."');
    scene.text('He clenches his jaw. "I\'m not holding him… "');
    scene.text('He hisses in pain even more as you see her tighten her grip on his balls. "Don\'t get smart with me, Dan! You know what the fuck I mean!"');
    scene.text('He quickly lets go of Gerasim\'s wheelchair, who wheels away from them before looking back. "Thanks, Anushka."');
    scene.text('"There! I let go, now you let go!" Dan says in an angry hiss.');
    scene.text('Anushka leans her face to the side of his, her lips next to his ear, saying something you can\'t make it out and squeezing Dan\'s balls a little harder before letting go.');
    scene.text('Dan snorts. "If you wanted to grab my dick Nush, all you had to do was ask."');
    scene.text('She shakes her head at Dan, then gives Gerasim a friendly smile before walking out, followed by Dan.');
    scene.actions([
      { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big153.jpg');
    scene.text('You walk over as the nerds gather around Gerasim. Several of them are asking if he\'s okay, followed by them wondering aloud why Anushka helped him. By the way they talk, it sounds like it\'s not uncommon for her to step in and help him.');
    scene.text('"Look, I\'m fine, Dan just scared me a little is all," he says, but blushes when pressed about Anushka helping him. "Look, she\'s not like the rest of them, okay?"');
    scene.text('The other nerds point out the times she\'s picked on them as Gerasim keeps insisting she isn\'t like the rest, but refuses to elaborate further on it.');
    scene.text('The conversation slowly turns into the nerds complaining about everyone but the outcasts picking on them. You never really get a chance to talk to Gerasim other than to say you\'re glad he\'s okay.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 175) {
      if (((s as any).npc_rel ?? 0)?.['A153'] >= 50) {
        scene.text('You try talking to Gerasim, but it\'s a very one-sided conversation with you doing all the talking until he finally speaks up.');
        scene.text('"I don\'t want to sound rude, but I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
        scene.text('You can tell he\'s trying to be nice, but obvious doesn\'t want to be seen talking to you, likely afraid of the attention you will bring from the bullies.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
          scene.text('When he sees you walking over, he gives you a disgusted look.');
          scene.text('"Get away from me, you disgusting slut!" he says as he moves away from you.');
        } else {
          scene.text('You try talking to Gerasim, but it\'s a very one-sided conversation with you doing all the talking until he finally speaks up.');
          scene.text('"I don\'t want to sound rude, but we\'re not really friends so I\'m not sure why you\'d want to talk to me…" he says quietly. "Anyway, I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A153'] >= 50) {
          scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}," he says with a sheepish smile. You watch him move the papers on his desk around nervously and realize he's doing someone else's homework.`);
          scene.text('"Yeah, I\'m a little busy, but I wouldn\'t mind the company while I work," he adds with a small laugh.');
          scene.text('The two of you proceed to chat while he does the work.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
        } else {
          if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
            scene.text('You try talking to Gerasim, but it\'s a very one-sided conversation with you doing all the talking until he finally speaks up.');
            scene.text('"I don\'t want to sound rude, but we\'re not really friends, so I\'m not sure why you\'d want to talk to me…" he says quietly. "Anyway, I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
          } else {
            scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}," he says with a sheepish smile. You watch him move the papers on his desk around nervously and realize he's doing someone else's homework. "I'm a little busy," he adds with a small laugh.`);
            scene.text('"Mind if I keep you company while you work?" you ask.');
            scene.text('He pauses for a moment before nodding. "Sure, I don\'t mind. I just need to make sure I get this done."');
            scene.text('The two of you talk for a while as you make sure not to disturb him too much so he can get the work done.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A153'] >= 50) {
            scene.text('You greet Gerasim with a smile and make a point to ask him how his day is going, subtly hinting to the fact that you know other students like to make him do their school work.');
            scene.text(`He shrugs his shoulders with a shy smile. "I'm fine," he says, his smile growing. "Thanks for worrying about me though, ${((s as any).pcs_nickname ?? '')}."`);
            scene.text('The two of you then chat as he does the work.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
          } else {
            if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
              scene.text('Gerasim isn\'t really interested in talking to you, but you insist and try to keep up a conversation until he finally stops you.');
              scene.text('"Hey, I\'ve gotta go… do this thing. I guess I\'ll see you later?" he says halfheartedly with an awkward laugh.');
            } else {
              scene.text('You strike up a conversation with Gerasim. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A153'] >= 50) {
              scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}, you're not going to pick on me are you?" he asks with a sheepish smile.`);
              scene.text('You think he\'s joking as you shake your head and watch him move the papers on his desk around nervously. You realize he\'s doing someone else\'s homework.');
              scene.text('"Yeah, I\'m a little busy, but I wouldn\'t mind the company while I work," he adds with a small laugh.');
              scene.text('The two of you proceed to chat as he does the work.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
                scene.text('You walk up to Gerasim, who gives you a fearful look, apparently expecting you to bully him.');
                scene.text('You smile at him. "Don\'t worry, I\'m not going to do anything, so just relax."');
                scene.text('You try talking to him, but it\'s a very one-sided conversation with you doing all the talking until he finally speaks up. "I don\'t want to sound rude, but we\'re not really friends so I\'m not sure why you\'d want to talk to me…" he says quietly. "Anyway, I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
              } else {
                scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}," he says with a sheepish smile. You watch him move the papers on his desk around nervously and realize he's doing someone else's homework. "I'm a little busy," he adds with a small laugh.`);
                scene.text('"Mind if I keep you company while you work?" you ask.');
                scene.text('He pauses for a moment before nodding. "Sure, I don\'t mind. I just need to make sure I get this done."');
                scene.text('The two of you talk for a while as you make sure not to disturb him too much so he can get the work done.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A153'] >= 50) {
              scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}," hesays with a sheepish smile. You watch him move the papers on his desk around nervously and realize he's doing someone else's homework.`);
              scene.text('"Yeah, I\'m a little busy, but I wouldn\'t mind the company while I work," he adds with a small laugh.');
              scene.text('The two of you proceed to chat as he does the work.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
            } else {
              if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
                scene.text('You try talking to Gerasim, but it\'s a very one-sided conversation with you doing all the talking until he finally speaks up.');
                scene.text('"I don\'t want to sound rude, but we\'re not really friends, so I\'m not sure why you\'d want to talk to me…" he says quietly. "Anyway, I\'ve got to finish this worksheet for class, so if you don\'t mind…"');
              } else {
                scene.text(`"Oh hello ${((s as any).pcs_nickname ?? '')}." Gerasim says with a sheepish smile. You watch him move the papers on his desk around nervously and you realize he's doing someone else's homework. "I'm a little busy," he adds with a small laugh.`);
                scene.text('"Mind if I keep you company while you work?" you ask.');
                scene.text('He pauses for a moment before sighing. "Just… I need to get this done so…"');
                scene.text('You can tell he\'s trying to politely tell you not to bother him, so you sit with him and only occasionally say something, which he responds to but never adds much more than that.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A153'));
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterZinaida(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big142.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 175) {
    if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
      scene.text('"Hey Zinaida, I\'m bored. Mind if I join and check out what you\'re playing?" you ask.');
      scene.text(`She looks up for a second and taps the spot on the desk next to her, indicating that you can sit there. "Sure ${((s as any).pcs_nickname ?? '')}, just hop on the desk. I'm trying to beat this level, but it's very hard."`);
      scene.text('You sit and watch her playing. When you look up, you see some of your classmates watching you together, wondering what you have in common or why you\'re even on speaking terms, taking your reputation into account.');
      scene.text('"Oh wow, you\'re really good!" you say when she sets a new high score. "You could earn a lot of money if you wanted to be a professional streamer," you tell her, half seriously, half jokingly.');
      scene.text('She looks at you and smiles. "You really think so? Sometimes I dream about it, but the truth is I don\'t think I could ever compete with most of them." You sense the lack of confidence and despair in her voice.');
      scene.text('"Come on, you\'re good! We must do something with your looks, though. Some of those who watch streamers are just nasty pervs who only like pretty girls. They care more about your tits than your gaming skill, trust me!" you say while trying to straighten her tangled hair.');
      scene.text('You go on talking about how she could improve her looks, giving her some tips about makeup and other techniques. You try to teach her something about flirting, too. When you hear the bell, you both sit back on your seat and wait for the teacher to arrive.');
      scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
    } else {
      if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
        scene.text('"Hey Zinaida! How\'s it going?" you ask when you notice her lost in her phone.');
        scene.text(`She doesn't even look at you. "Sorry ${((s as any).pcs_nickname ?? '')}, but I'm very busy with this now and I don't think we have anything to say each other anyway, considering we have two very different hobbies…"`);
        scene.text('Even though she tries not to be rude, you know exactly what she\'s referring to with her remark.');
        scene.text('When she notices you still standing there, she turns off the game, gets up and walks over to the other nerds in the classroom.');
        scene.text('"I just wanted to…" you start, but she\'s already gone and can\'t hear you. "… ask you something… It doesn\'t matter, I guess."');
        scene.text('As you still have a lot of time before the next lesson starts, you get up and refresh yourself.');
      } else {
        scene.text(`"Hello ${((s as any).pcs_nickname ?? '')}. Are you looking for something?" Zinaida asks when she sees you approaching her.`);
        scene.text('"No, not really. I just wanted to come and have a quick chat with you and see what you\'re doing on your phone," you reply.');
        scene.text('"Oh, okay… I\'m playing this game. I don\'t think you know it…" she says indifferently.');
        scene.text('When you\'re tired of standing, you sit next to her on the desk. She glances at you and moves back a little. She doesn\'t tell you to leave, but it\'s very clear she wouldn\'t like to be associated with you in any way.');
        scene.text('You watch her playing for a few minutes while occasionally asking about the game. She only shrugs or gives you a one-word answer.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
        scene.text('You don\'t want to bother her more, so you wish her good luck with the game and go back to your desk to wait for the next lesson.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, what's up?" she asks when you approach her.`);
        scene.text('"Hey Zinaida, I see you\'re playing again?" you reply as you hop on the desk and sit next to her.');
        scene.text('She moves back a little, making sure you both have enough room to sit comfortably. "Yeah… I\'m playing this game… I love it," she says with short pauses as she\'s trying to focus on the game while answering you. She lowers her phone so you can see the screen.');
        scene.text('"Sooo, what am I looking at?" you ask as you look at the screen and see different characters. Some of them are not even human. "Is it a fantasy game or something?"');
        scene.text('She pauses the game and starts to explain what it is. "It\'s a fantasy roleplaying game where you can choose a character and customize it as much as you want. Look, you can have different hair styles, clothes, accessories…"');
        scene.text('You start talking about the look of the character and she shows you the uncountable items that you can wear, from armor to weapons and clothes.');
        scene.text('"Oh look, if you match those ones, they will look pretty," you say and she nods and continues browsing some other matching items to that outfit. Although she\'s not into fashion at all, and she barely pays attention to her own appearance, you must admit she does it quite well in these games.');
        scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
        scene.text('You silent ponder your thought before you hear the bell ringing. "See you later, Zina!" you say as you go back to your own seat.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
          scene.text('It\'s one of the rare moments when Zinaida isn\'t playing on her phone and is talking to her fellow nerds. You think it could be a good chance to talk with her, so you approach her.');
          scene.text('"Hey guys, what are you talking about?"');
          scene.text(`"Oh, hey ${((s as any).pcs_nickname ?? '')}. Uhm, I'm sorry, but we're in the middle of a very important conversation," she says on a cold, indifferent tone.`);
          scene.text('You wait for a minute or so and hope they\'ll finish chatting shortly. When you realize they\'re so immersed in the conversation, you tap Zinaida\'s shoulder.');
          scene.text('She turns around immediately. "Sorry, but I told you we\'re busy here! Maybe you could just go and hang out with your own social group in the hallway?" With that, she turns back and starts talking to Feofan.');
          scene.text('You understand it was a sign that she isn\'t really interested in talking to you since she doesn\'t think you\'d have too much in common to talk about.');
        } else {
          scene.text('You see Zinaida talking to Artem and Gerasim about something and decide to approach her.');
          scene.text('"Hey Zinaida, I\'ve wanted to talk to you for a long time!" you say and grab her arm and pull her away from the boys.');
          scene.text(`She seems confused, but doesn't argue. "What's up ${((s as any).pcs_nickname ?? '')}?" she asks with an inquiring look.`);
          scene.text('"You\'re always on your phone, so you might know the solution for this problem," you reply as you take your phone out of your pocket and show her your social media accounts. "You see, there\'s things I would like to change, but I don\'t know how it works."');
          scene.text('"Yeah, I play a lot on my phone, but that doesn\'t mean…" she starts to say then looks around, hoping someone will intervene and save her from this conversation. "Fine, let me see…" she says when she realizes there\'s no way out.');
          scene.text('Although she\'s not happy about it, she helps you as much as she can. She\'s not even half done when you hear the bell and she gives your phone back. "You hear that? The teacher will be here any second, so next time maybe?"');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
          scene.text('You notice Zinaida playing on her phone at her desk and decide to approach her.');
          scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, I didn't expect you today. I thought you were busy with your new workout and everything. I'm happy you're here, though. I've wanted to show you this for a long time. Look, if I were able to improve a bit, I could beat the highest score!" she says as she shows you a game on her phone.`);
          scene.text('"Wow Zinaida, that\'s amazing It\'s true that I\'m quite busy with training, but it\'s important to find some time to take a break. Also I wanted to catch up with you."');
          scene.text('You start talking about your recent achievements and how important sport is before complaining about lazy people and how disappointing is that some people don\'t think physical education is an important lesson too.');
          scene.text('She listens to every word you say and nods whenever she agrees with you. You don\'t belong to the same social group and you have very different lifestyles, but despite all that, you get along very well. In fact, you both admire and acknowledge each other\'s competitive personalities.');
          scene.text('She starts talking about the latest games and complains about some players, especially about cheaters who destroy the game. You continue chatting about different topics until you hear the bell.');
          scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
          scene.text(`"Okay ${((s as any).pcs_nickname ?? '')}, it was really nice to talk, but the lesson is about to start so we should take our seats. Hopefully, we can talk more next time," she says with a smile on her face.`);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
            scene.text('You see Zinaida sitting at her desk and try to strike up a conversation with her. "Hey Zinaida, how\'re you doing?"');
            scene.text(`She looks up and you can tell by her facial expression that she doesn't really understand why you want to talk to her. "Hey ${((s as any).pcs_nickname ?? '')}. I'm fine…" she replies in confusion, unsure of what else to say.`);
            scene.text('"I saw you sitting here alone and thought we could talk?" you reply as you pull out a chair and sit next to her.');
            scene.text('"Maybe next time, if you don\'t mind. I just noticed Evgeny and there\'s something I wanted to talk about with him. It\'s… it\'s about chess… Yes, a new chess game." She stands up and heads towards Evgeny.');
            scene.text('You get the feeling that she made up a flimsy excuse so she didn\'t have to talk to you. As you still have a lot of time, you check the latest sport results on your phone before the next lesson starts.');
          } else {
            scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}," Zinaida greets you as you approach her.`);
            scene.text('"Hey, what\'s up? Is there any new sports games on your phone?" you ask as you sit next to her, although you know she rarely plays any such games since that\'s not her main interest.');
            scene.text('While you\'re not the best of friends and it\'s clear you\'re not her first choice to talk to, she doesn\'t mind chatting with you now and then.');
            scene.text('You start talking about different topics, but she mostly goes on about the latest games and the characters in them, while you talk about everything related to sport.');
            scene.text('You also talk about how sport is evolving today. Analytics is becoming more and more important, so maths and physics also play a role in the development of sport and individual performance. "That\'s so interesting! Who knew sports and maths could be connected?" she says.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
            scene.text('After spending a few more minutes talking, you hear the bell signaling that the break is over and the next lesson is about to start. "Thanks Zina, talk to you later!" you say as you find your seat.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
            scene.text('When the lesson is over, you start sorting your notes when you see Zinaida waving and approaching you with a huge smile.');
            scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, I hope you're free to talk? I've been looking forward to telling you about my latest scores in this game I'm playing," she says excitedly as she takes her phone out of her pocket.`);
            scene.text('As she\'s opening the app on her phone, you engage in an intense conversation, talking about things that you\'re both interested in. She mostly talks about video games and is always passionate about computers too.');
            scene.text('"These are my latest scores. What do you think?" she asks as she proudly shows you her phone.');
            scene.text('"Wow, those are impressive numbers Zina. I don\'t even know what to say!" you reply and see she\'s very satisfied and pleased with your acknowledgment.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
            scene.text('For the rest of the break, you talk about school, the role-playing evenings in the community center, books and everything that comes to your mind. At one point, she asks if you\'ve heard anything about why some boys whisper about her.');
            scene.text('"No, but don\'t even worry about it. It\'s probably nothing." You then hear the bell ringing and she goes to take her seat before the teacher arrives.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
              scene.text('As your lesson is over, you head over to Zinaida and greet her with a smile. "Hey Zina, what\'re you doing?"');
              scene.text('She\'s so busy looking at her phone that she doesn\'t even notice you standing next to her. Furthermore, she has her earphones in, so she can\'t hear you either.');
              scene.text('When you realize she won\'t notice you, you tap her shoulder and she looks up and takes her earphones out.');
              scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, sorry I didn't notice you. Is there anything important?" she asks, clearly hoping that she can get back to playing on her phone.`);
              scene.text('"No. I just wanted to say hi and ask if you\'re okay," you reply. She just nods, indicating that everything\'s fine before plugging her earphones back in and continuing what she was doing.');
            } else {
              scene.text('You\'re leaving the classroom when you notice Zinaida sitting on the desk and decide to approach her. "Hi Zinaida, what are you doing?"');
              scene.text('She\'s currently busy with her phone. Although you can\'t tell which one it is, it\'s clear she\'s playing some kind of game.');
              scene.text(`She barely looks up from her phone. "Oh sorry ${((s as any).pcs_nickname ?? '')}, I hardly noticed you. I'm trying to set a new record in this game. It's amazing and completely captivating!" she says passionately as she taps the screen. "You should try it out one day!"`);
              scene.text('You sit on the desk next to her and watch her playing for a while. She\'s very talented and you try to ask her about the game with little success as she\'s completely immersed in it and only gives you short answers.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
              scene.text('Time passes quickly as you watch her playing before you hear the bell signaling the end of the break. You find your seat and wait for the teacher to arrive.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
              scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}," Zinaida greets you as you approach. "How are you today? You look tired to be honest," she says while looking you up and down, wondering what kind of trouble you've gotten into this time.`);
              scene.text('"Oh yeah, you know how it is. Some party here, some mischief there. But you don\'t look fresh, either. Too much gaming, again?" you reply.');
              scene.text('"You know me," she says and starts talking about the games she\'s been playing recently. People might not understand how you two can have a civil conversation, but you actually like listening to her gaming stories. Maybe because you consider some of the characters cool and interesting. Some of them have similar personalities and you feel connected, somehow.');
              scene.text('"If only you could do that in real life, huh? To live your life and not care about anything. To cause troubles and get away with it."');
              scene.text(`"Uhm, I don't want to wake you up from dreaming ${((s as any).pcs_nickname ?? '')}, but you're actually living a life like that!" she says jokingly.`);
              scene.text('You give her a serious stare and try to pretend that you\'re offended, but burst into laughter. "Huh. Yeah, I guess you\'re right, smarty pants."');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
              scene.text(`After a few minutes, you hear the bell. "Time to go back to living that mousy life of yours ${((s as any).pcs_nickname ?? '')}," she says with a huge smile.`);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
                scene.text('You see Zinaida talking to her fellow nerds and decide to strike up a conversation with her. "Hey, what\'s up?"');
                scene.text('She continues talking to them and doesn\'t even look at you as you stand near her. You can\'t decide whether she\'s being arrogant or is just trying to avoid you.');
                scene.text('You get closer and greet her again. "Hey Zinaida, what\'s up?" This time, she realizes that you actually spoke to her and turns to you while trying to avoid looking you in the eye.');
                scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}. Sorry, I thought you were talking to someone else. I mean, why would you talk to me? We're not friends, not even in the same circle. Or, are you here to mock me, insult me and everything else?"`);
                scene.text('You raise your eyebrows, a little surprised. Your intention was only to talk to her. "What? No, I just wanted to talk."');
                scene.text('"Oh, okay.." she says and you can see that she\'s relieved. She pauses for a second and continues. "I need to check some of my notes so, I don\'t know, maybe another time, perhaps?" With that, she leaves you standing with the others.');
                scene.text('You still have plenty of time until the next lesson, so you pull out your phone and check if there\'s anything new from your favourite bands.');
              } else {
                scene.text('As you\'re leaving the classroom, you notice Zinaida sitting on the desk and decide to go to her.');
                scene.text('"Hey Zinaida, are you playing again?" you ask and hop on her desk. She looks up from her phone and nods.');
                scene.text('"Yeah, this is a new game. You might, I don\'t know, would you like to give it a try?" she asks, clearly confused as to why you\'re even interested in it.');
                scene.text('"Nah, I\'m not interested in games, but I hear the music when you play and I must admit, some of the songs are really cool. I just love listening to them. I might get to know a new song, you know?" you say and start whistling the song being played by the game.');
                scene.text('"Okay." she says and with that she is focusing on the game again.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
                scene.text('You watch her playing for a while, but soon get bored, so you get up and head for the stairs. "Well, maybe next time," you say as you leave.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A142'] >= 50) {
              scene.text(`When your lesson is over, you decide to talk to Zinaida, who is sitting at her desk. "Hey ${((s as any).pcs_nickname ?? '')}, what's up?" she asks as you approach.`);
              scene.text('"Hey Zina. I just wanted to come and talk to you, if you don\'t mind. I just don\'t want to spend the break alone," you say with a little sadness in your voice.');
              scene.text('"Yeah, I understand it very well," she says and pulls out a chair for you so you can sit next to her.');
              scene.text('You start talking about different topics, including video games, the daily life in Pavlovsk and of course, the school. Not to mention the constant mocking that both of you receive quite often.');
              scene.text('Soon, you realize that belonging to the nerds is not much better than being an outcast, as you\'re both the most common targets of bullying.');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
              scene.text('After spending some more time talking, you hear the bell ring and go back to your seat before the next lesson starts.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
                scene.text('"Hey Zinaida," you say as you approach her.');
                scene.text(`She's writing something in her notebook and doesn't even notice you at first until you get closer. "Oh hi ${((s as any).pcs_nickname ?? '')}. I'm sorry, but as you can see I'm busy with something."`);
                scene.text('"I was wondering if we could talk? I heard some things about this new video game and wanted to ask for your opinion."');
                scene.text('"As I said before, I\'m very busy right now, so sorry, but I don\'t have time to talk or anything. If you don\'t mind, please…" she replies as she turns away.');
                scene.text('You don\'t say a word. You just leave and give her space. You sit on a chair and start thinking about how cruel life as an outcast is if even Zinaida doesn\'t want to talk to you about video games. It\'s surprising how she\'d miss a chance to brag about her achievements.');
              } else {
                scene.text('As you get up and start looking around, you notice Zinaida sitting at her desk. "Hey Zinaida," you greet her as you approach.');
                scene.text(`"Oh, hi ${((s as any).pcs_nickname ?? '')}. How's it going?" she replies.`);
                scene.text('"Mind if we talk?" you ask as you sit on the chair next to her.');
                scene.text('She looks around the room and when she realizes all her group mates are busy doing something or talking to each other, she sighs. "Okay, I don\'t really have anything to do, so I guess we can talk…"');
                scene.text('You understand she\'s only available because she has nothing better to do, but you\'re glad you don\'t have to spend the break all alone at least.');
                scene.text('She soon starts talking about video games. It seems she doesn\'t mind who she\'s talking to as long as somebody listens. She tells you some interesting stories that happened to her, and complains about the prices of the games.');
                scene.text('"On the other hand, there are always free games to play…" she continues, but points out why free to play games can be more expensive than some of the most popular video games in the long run.');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A142'));
                scene.text('After continuing to talk for a few more minutes, she takes her notes out of her backpack. "We\'ll continue this next time, maybe. But for now, I\'d like to check my homework before the lesson starts. See you." With that, she turns to her desk and starts revising her homework.');
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterNatalia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A240', 'like');
  if (((s as any).NikoEv ?? 0) >= 17  &&  (!((s as any).VKNatFollowup ?? 0))) {
    (s as any).VKNatFollowup = 1;
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b><h4><font color=#00eaff>${'Natalia [Nat] Pavlova'}</font></h4></b></center>`);
  scene.img('images/characters/shared/headshots_main/big240.jpg');
  if (((s as any).VKAftermathEvent ?? 0) > 0  &&  (!((s as any).VKNatFollowup ?? 0))) {
    (s as any).VKNatFollowup = 1;
    scene.text(`You sit next to Natalia and she quickly turns to you with a warm smile. "${((s as any).pcs_nickname ?? '')}! It's so great to see you! I hope you're feeling better? You've been through so much."`);
    scene.text('You give her a forced smile as you reply. "I\'m fine Nat. Thanks for caring, though."');
    scene.text('Natalia\'s smile turns to a frown as she responds. "You\'re still having the nightmares, aren\'t you? My mother used to get a lot of nightmares when she was young, so she might know of some good ways to get rid of them."');
    scene.text('You place your hand on her shoulder. "Don\'t worry about me, Nat. I\'ll be fine." Natalia places her hand on yours, then nods before you get up and head back to class.');
  } else {
    if (((s as any).NikoEv ?? 0) >= 17  &&  ((s as any).VKNatFollowup ?? 0) === 1) {
      (s as any).VKNatFollowup = 2;
      scene.text(`You approach Natalia and her eyes immediately light up. "Hey ${((s as any).pcs_nickname ?? '')}! It's always good to see you. I hope things have been going better with Niko?"`);
      scene.text('You give her an approving nod. "Well if you ever need to talk about anything, then please stop by. I always look forward to chatting with you." You rub Natalia\'s shoulder as she gives you a warm smile before you get up to go to your next class.');
    } else {
      if (((s as any).nataliaQW ?? 0)?.['introduction'] === 0) {
        qspCall(s, 'natalia_pavlova', 'first_chat');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 175) {
          if (((s as any).npc_rel ?? 0)?.['A240'] <= 30) {
            scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Oh. Hey ${((s as any).pcs_nickname ?? '')}…" she says in a nervous voice.`);
            scene.text('"Hey Natalia, just thought I\'d come and say hello," you reply. "I see you\'re reading again. What\'s it about?"');
            scene.text('"It\'s called \'Anna Karenina\' by Leo Tolstoy. It\'s a famous book about a woman who loves a man that isn\'t her husband. It also explores her relationship with her son, to whom she\'s totally devoted."');
            scene.text('"Sounds interesting. I bet it won\'t end well, though," you reply with a smile.');
            scene.text('"Probably not. It\'s written by a Russian after all," she says before frowning. "Look, I don\'t want to be rude, but unless you clean up your act, I can\'t be seen talking to you. I don\'t want to get a bad reputation."');
            scene.text('She returns to reading her book without waiting for an answer.');
            scene.text('You turn away and wait for the next class. At least she didn\'t completely blank you, and she was polite, which made a nice change from the typical attitude you get from most of your classmates.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A240'] <= 40) {
              scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Oh. Hey ${((s as any).pcs_nickname ?? '')}…" she says in a nervous voice.`);
              scene.text('"Hey Natalia, I see you\'re reading again. What\'s this one about?"');
              scene.text('"It\'s called \'The Master and Margarita\' by Mikhail Bulgakov. It\'s quite a famous book with loads of magical stuff like cats riding on trams and money falling from the sky."');
              scene.text('"Well, we could all do with a bit of fantasy to take away our troubles," you say with a rueful smile.');
              scene.text(`"Umm… Yeah, I guess so." Natalia slightly lowers her already quiet voice. "I'm sorry ${((s as any).pcs_nickname ?? '')}, but I can't be associated with you unless you improve your reputation."`);
              scene.text('She returns to reading her book without waiting for an answer.');
              scene.text('You turn away and wait for the next class. Although you have a bad reputation, you could work on improving it in order to gain some friends.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A240'] <= 50) {
                scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Oh. Hey ${((s as any).pcs_nickname ?? '')}…" she says in a quiet voice.`);
                scene.text('"Hey Natalia. So what\'s this book about? Another romantic novel?" you ask with a smile.');
                scene.text('She looks back at you. "Yes, it is. It\'s another famous Russian love story, and one of the most famous short stories."');
                scene.text('"What\'s it called?" you ask.');
                scene.text('"\'The Lady With The Little Dog\' by Anton Chekhov. It\'s about Anna and Dmitri, who both have unhappy marriages. They\'re both on holiday in Yalta without their spouses and end up having an affair. Although their affair ends with the holiday, their feelings for each other remain."');
                scene.text('"Sounds sad," you reply.');
                scene.text(`"Yes, I guess it is." She looks up at you. "Look ${((s as any).pcs_nickname ?? '')}, it's not that I don't like you, but I can't associate with you unless you do something to improve your reputation."`);
                scene.text('She returns to reading her book without waiting for an answer.');
                scene.text('You turn away, and as and wait for the next class, you reflect on what she said.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A240'] <= 70) {
                  scene.text(`Natalia is sitting with the nerds, reading a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice.`);
                  scene.text('"Hey Nat," you say with a friendly smile. "So what book is this?"');
                  scene.text('She smiles. "This is one of the most famous Russian romantic novels. It was even awarded the Nobel prize in Literature."');
                  scene.text('"Oh? What\'s it called?"');
                  scene.text('"\'Doctor Zhivago\' by Boris Pasternak," she replies. "It\'s an epic story set during the Russian civil war."');
                  scene.text('"Well, this one won\'t end well then! Whoever heard of war being civil?" you reply.');
                  scene.text('"Well, in this story, Yuri, the doctor, loves his wife…"');
                  scene.text('"But I guess tragedy strikes?" you ask.');
                  scene.text('"He gets sent off to war and while at the front, he meets someone else and also falls in love with her. The book explores the torment he feels between his love for both of them."');
                  scene.text('"And what happens next?"');
                  scene.text(`"No, I'm not going to spoil it for you! You'll just have to read it yourself," she replies with a broad grin. "Sorry ${((s as any).pcs_nickname ?? '')}, but I have to go. I've probably already spent too long talking to you and want to avoid rumors about my reputation." She turns away without waiting for your reply.`);
                  scene.text('You reflect on what she just said. You still have a terrible reputation, but if you improve it, your school life may get more pleasant.');
                } else {
                  scene.text(`Natalia is sitting with the nerds, engrossed in a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice.`);
                  scene.text('"Hey Natalia," you reply with a friendly smile. "Let me guess. Another romantic novel that ends in some sort of tragedy?"');
                  scene.text('She gives you a short smile. "Unfortunately, you\'re only half right this time."');
                  scene.text('"Oh? So what\'s this one about?"');
                  scene.text('She giggles. "Well, this isn\'t a novel at all."');
                  scene.text('You\'re confused. "Eh? Surely not schoolwork? Did you fall behind or something?" you reply.');
                  scene.text('She laughs. "No! This is a book of poems by Marina Tsvetaeva."');
                  scene.text('"That is different then," you reply.');
                  scene.text('"Sort of…" she replies. "It still explores love, heartbreak and disappointment but has some lovely stuff where the poems explore fluttery feelings and infatuation. They also look at the differences between infatuation and love."');
                  scene.text('"Guess there\'s a big mixture of sad and happy stuff then?"');
                  scene.text(`"Yes. If you like that sort of thing, then it might be worth getting a copy; you can skip one of them if you don't like it too much." After a brief pause, she continues. "Look ${((s as any).pcs_nickname ?? '')}, I know you must be tired of me always telling you to improve your reputation, but you seem nice, and I just want to see you happy and not being bullied all the time."`);
                  scene.text('"Actually, it makes a nice change that someone actually cares and doesn\'t mock me. You\'re a good friend, Natalia."');
                  scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
                  scene.text('The bell then sounds, so you both head to the next class separately.');
                }
              }
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A240'] <= 30) {
            scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice.`);
            scene.text('"Hey Natalia, just thought I\'d come and say hello," you reply. "I see you\'re reading again. What\'s it about?"');
            scene.text('"Yes. It\'s a famous Russian love story."');
            scene.text('You smile. "Oh? Which one?"');
            scene.text('"Really? I didn\'t think anyone else was interested in this sort of thing…"');
            scene.text('"Yes, I\'d like to know. It\'s a way of getting to know you better," you reply.');
            scene.text('"It\'s called \'Anna Karenina\' by Leo Tolstoy. It\'s about a woman who loves a man that isn\'t her husband. It also explores her relationship with her son, to whom she\'s totally devoted."');
            scene.text('"Sounds interesting. I bet it won\'t end well, though," you reply with a smile.');
            scene.text('"Probably not. It\'s written by a Russian after all," she replies with a rueful smile.');
            scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
            scene.text('"I think I\'d best start heading to class. Bye for now," you say with a smile.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A240'] <= 40) {
              scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}…" she says in a quiet voice.`);
              scene.text('"Hey Natalia. So what\'s this book about?"');
              scene.text('"It\'s another famous Russian love story, but this one has loads of magical stuff, like cats riding on trams and money falling from the sky."');
              scene.text('You giggle. "Money falling from the sky? Shame that doesn\'t happen in real life!"');
              scene.text('Natalia giggles along with you. "In this story, Margarita\'s love for the master helps him as he\'s afraid of his own ideas, but she has to make a huge sacrifice so that his novel doesn\'t vanish and they can be safe, together forever."');
              scene.text('"So what\'s it called?" you ask.');
              scene.text('"It\'s called \'The Master and Margarita\' by Mikhail Bulgakov. It\'s quite a famous book. Have you read it?"');
              scene.text('"No, but it does sound interesting. I bet it won\'t end well though."');
              scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
              scene.text('The bell then sounds, so you start heading to class.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A240'] <= 50) {
                scene.text(`You see Natalia sitting with the nerds, reading a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice with a slight smile.`);
                scene.text('"Hey Natalia. So what\'s this book about? Another romantic novel?" you ask with a smile.');
                scene.text('She smiles back at you. "Yes, it is. It\'s another famous Russian love story, and one of the most famous short stories."');
                scene.text('"\'The Lady With The Little Dog\' by Anton Chekhov. It\'s about Anna and Dmitri, who both have unhappy marriages. They\'re both on holiday in Yalta without their spouses and end up having an affair. Although their affair ends with the holiday, their feelings for each other remain."');
                scene.text('"Sounds sad," you reply.');
                scene.text('"Yes, it is, but is it better for them to have experienced love knowing it was only fleeting, than none at all?"');
                scene.text('"Wow, that\'s a deep question," you reply.');
                scene.text('"Yeah, I don\'t know which would be worse."');
                scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
                scene.text('"Oh, there\'s the bell! We should get going to class."');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A240'] <= 70) {
                  scene.text(`Natalia is sitting with the nerds, reading a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice with a smile.`);
                  scene.text('"Hey Nat," you say with a friendly smile. "So what book is this?"');
                  scene.text('She smiles. "This is one of the most famous Russian romantic novels. It was even awarded the Nobel prize in Literature."');
                  scene.text('"Oh? What\'s it called?"');
                  scene.text('"\'Doctor Zhivago\' by Boris Pasternak," she replies. "It\'s an epic story set during the Russian civil war."');
                  scene.text('"Well, this one won\'t end well then! Whoever heard of war being civil?" you reply.');
                  scene.text('"Well, in this story, Yuri, the doctor, loves his wife…"');
                  scene.text('"But I guess tragedy strikes?" you ask.');
                  scene.text('"He gets sent off to war and while at the front, he meets someone else and also falls in love with her. The book explores the torment he feels between his love for both of them."');
                  scene.text('"And what happens next?"');
                  scene.text('"No, I\'m not going to spoil it for you! You\'ll just have to read it yourself," she replies with a broad grin.');
                  scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
                  scene.text('"Oh, there\'s the bell! We best head to class."');
                  scene.text('She grins at you and gives you a friendly wave as she heads to the next lesson.');
                } else {
                  scene.text(`Natalia is sitting with the nerds, engrossed in a book. She glances up when she notices you. "Hey ${((s as any).pcs_nickname ?? '')}," she says in a quiet voice.`);
                  scene.text('"Hey Natalia," you reply with a friendly smile. "Let me guess. Another romantic novel that ends in some sort of tragedy?"');
                  scene.text('She gives you a short smile. "Unfortunately, you\'re only half right this time."');
                  scene.text('"Oh? So what\'s this one about?"');
                  scene.text('She giggles. "Well, this isn\'t a novel at all."');
                  scene.text('You\'re confused. "Eh? Surely not schoolwork? Did you fall behind or something?" you reply.');
                  scene.text('She laughs. "No! This is a book of poems by Marina Tsvetaeva."');
                  scene.text('"That is different then," you reply.');
                  scene.text('"Sort of…" she replies. "It still explores love, heartbreak and disappointment but has some lovely stuff where the poems explore fluttery feelings and infatuation. They also look at the differences between infatuation and love."');
                  scene.text('"Guess there\'s a big mixture of sad and happy stuff then?"');
                  scene.text('"Yes. If you like that sort of thing, then it might be worth getting a copy; you can skip one of them if you don\'t like it too much." She pauses, then continues. "I sometimes go to the community center library on non-school days at lunchtime. If you fancy meeting me there sometime, that\'d be great."');
                  scene.text(qspFunc(s, 'npc_reactions', 'general', 'A240'));
                  scene.text('The bell then sounds, so you both head to the next class while still chatting.');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'artem':
      enterArtem(s, scene);
      break;
    case 'petka':
      enterPetka(s, scene);
      break;
    case 'julia':
      enterJulia(s, scene);
      break;
    case 'julia_tampon':
      enterJuliaTampon(s, scene);
      break;
    case 'natasha':
      enterNatasha(s, scene);
      break;
    case 'evgeny':
      enterEvgeny(s, scene);
      break;
    case 'feofan':
      enterFeofan(s, scene);
      break;
    case 'gerasim':
      enterGerasim(s, scene);
      break;
    case 'zinaida':
      enterZinaida(s, scene);
      break;
    case 'natalia':
      enterNatalia(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_nerd_chats: LocationDef = {
  name: 'gschool_nerd_chats',
  title: 'Girls Bathroom',
  region: 'other',
  enter: enter,
};
