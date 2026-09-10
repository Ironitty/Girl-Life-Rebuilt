import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
        scene.text('"Maybe he thinks he\'s a knight or something from that fantasy world they like to play in?" Anushka chimes in, which gets a lot of laughs from the others.');
        scene.text('Dan smirks before he shoves Artem again. "Is that it, loser? Do you think you\'re some fantasy knight or some shit?"');
        scene.text('Artem\'s courage seems to leave him as Dan gets right up in his face. He looks like he\'s about going to start swinging when someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
        scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
        scene.text('Dan shakes his head. "No, we were just messing around."');
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
          scene.text('Anushka walks up and hip checks Dan out of the way.');
          scene.text('"Hey! What the fuck, Nush?" he grumbles.');
          scene.text('Anushka then grabs Artem by the crotch. By his wince of pain, she seems to have a hold of his balls. This causes all the boys present to wince as she turns to talk to Dan.');
          scene.text('"I was just checking to see if he finally grew some balls." She then shakes her head. "Nope. Still feels like a pussy to me."');
          scene.text('The other gopniks all laugh as you notice the smirk on her face as she looks right at Artem, as if trying to get under his skin.');
          scene.text('Dan laughs and moves to stand next to Artem. "I bet that was the first time a girl has ever grabbed <i>your</i> crotch, loser. So is it true? Have you got no dick? Just a little bitch pussy?"');
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
            scene.text('Artem pushes Dan back just enough that he can retrieve his book.');
            scene.text('Dan shoves him hard against the wall in response. "You finally grow a set of balls, little man? You want to fucking go then?!"');
            scene.text('Daring him to push him again, several of the other gopniks join in mocking Artem, who now is the center of their attention.');
            scene.text('"Maybe he doesn\'t think he\'s a pussy anymore," Anushka chimes in. "Maybe he thinks he\'s a man now?"');
            scene.text('Dan smirks and then turns back to Artem and shoves him again. "Is that it, loser? Did your balls finally drop or something?"');
            scene.text('Artem shoves Dan back, but just as it look like they\'re about to fight, someone loudly clears their throat and everyone turns to see Mr. Pavlovich.');
            scene.text('"Is there a problem here?" he asks as Dan quickly lets go of Artem.');
            scene.text('Dan shakes his head. "No, we were just messing around."');
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
            }
            if (((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).artemQW ?? 0)?.['confidence'] === 20) {
              qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
              scene.text('Artem notices you walking over and quickly grabs an empty chair and makes room for you to sit next to him. "I was worried we wouldn\'t see each other today."');
              scene.text('He jokes, but you can tell there\'s a part of him that was being sincere.');
              scene.text('He isn\'t one for public affection, but he still can\'t go without some kind of physical contact with you, which leaves him sitting close enough to you that your legs bump and rub against each other under the table as you talk.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A2')
            } else {
              qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
              if (((s as any).grupTipe ?? 0) === 3) {
                // TODO-QSP: dynamic text: "There you are, <<$pcs_nickname>>! How's it going? I figured we can get a head-s...
                scene.text(`"There you are, ${((s as any).pcs_nickname ?? 0)}! How's it going? I figured we can get a head-start on Yenotin's lesson while we talk?"`);
                scene.text('He moves the textbook towards you so you can look at it. While you work, Artem keeps up a lively conversation, talking about a range of different topics.');
              } else {
                scene.text('"Hey, Artem, how\'s it going?" you ask while taking a seat at a desk across from him. His desk is covered with worksheets and a stack of textbooks.');
                // TODO-QSP: dynamic text: "Oh hey <<$pcs_nickname>>. I'm just putting together a study guide," he tells yo...
                scene.text(`"Oh hey ${((s as any).pcs_nickname ?? 0)}. I'm just putting together a study guide," he tells you with a smile while continuing to write in his notebook. As you watch him work, you realize that he's writing quite a lot, far more than is needed for one person.`);
                scene.text('"What are you writing all that for?" you ask.');
                scene.text('"Well, I tutor a lot of the jocks, so it\'s mostly for them, but I also help some of the popular ones too."');
                scene.text('"Are you <i>actually</i> tutoring them or are they just making you do their homework for them?" you ask suspiciously with a raised brow.');
                scene.text('Artem chuckles sheepishly, a bit flustered by the question. "The jocks aren\'t too bad, but the others… Well, they need all the help they can get and I\'m happy to help if I can," he replies before quickly changing the subject.');
                scene.text('You decide not to push it and just keep him company while he works.');
              }
              // TODO-QSP: $func('npc_reactions', 'general', 'A2')
              if (((s as any).npc_rel ?? 0)?.['A2'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200) {
                qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
                if (((s as any).grupTipe ?? 0) === 3) {
                  scene.text('You try to chat to Artem, but he doesn\'t seem all that interested in the conversation. His answers are short and he doesn\'t even bother to stop writing in his notebook as you talk.');
                } else {
                  // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but why are you talking to me? We're not exactly frien...
                  scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, but why are you talking to me? We're not exactly friends you know…" he asks weakly.`);
                  scene.text('He\'s careful not to offend you, but it\'s clear he\'s hesitant to talk to you.');
                }
                // TODO-QSP: $func('npc_reactions', 'general', 'A2')
              } else {
                scene.text('When he sees you walking over, he gives you a disgusted look.');
                scene.text('"Get away from me, you disgusting slut!" he says as he moves away from you.');
                qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
                scene.text('You strike up a conversation with Artem. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A2')
              }
              if (((s as any).artemLernQW ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A2'] > 20) {
                scene.actions([
                  { label: 'Ask for help studying', handler: (st: GameState) => {
    (s as any).artemLernQW = 1;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
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
            }
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
          }
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
        }
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
      }
    }
  }
  scene.build();
}

export const gschool_nerd_chats: LocationDef = {
  name: 'gschool_nerd_chats',
  title: 'Girls Bathroom',
  region: 'other',
  description: ['Just as you\'re about to head over to Artem, the gopniks come crowding into the classroom. Making snide remarks, they push and shove the nerds and outcasts around as they spread out.'],
  enter: enter,
};
