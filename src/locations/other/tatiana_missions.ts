import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).TatianaCall = 0;
  if (((s as any).TatianaMissionQW ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['tatiana_missions', 'mission1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['tatiana_missions', 'mission2'] }]);
  }
  scene.build();
}

function enterPhoneIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).TatianaCall = 1;
  scene.text('"Hello?"');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, it's Tatiana," she greets you. "I need you to come by the l...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}, it's Tatiana," she greets you. "I need you to come by the lab. How soon can you be here?"`);
  scene.text('"The lab? Well, I- wait, when did I give you my cellphone number?"');
  scene.text('"You didn\'t," Tatiana says cheerfully, "but I\'m a PI <b>and</b> I can use magic, silly. Finding out your phone number is the easiest thing in the world for me. Anyway, when can you be here?"');
  scene.text('"I don\'t know," you respond, unwilling to commit until you know what this is about. "What\'s wrong?"');
  scene.text('"Nothing, don\'t worry. Just come by when you have the chance. There are some things we should talk about."');
  scene.text('And before you can question her further, she hangs up on you.');
  scene.text('Guess the only way to find out what she wants is to visit her lab.');
  scene.actions([
    { label: 'Finish the call', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPhoneMission(s: GameState, scene: SceneBuilder): void {
  (s as any).TatianaCall = 1;
  scene.text('"Hello?"');
  // TODO-QSP: dynamic text: "Hey <<$pcs_firstname>>," the young mage greets you. "Could you come by the lab ...
  scene.text(`"Hey ${((s as any).pcs_firstname ?? 0)}," the young mage greets you. "Could you come by the lab soon?"`);
  scene.text('"I don\'t know if I can make it today. Is it urgent?"');
  scene.text('"Not very, but sooner would be better than later."');
  scene.text('"Alright, I\'ll try to be there as soon as possible," you say, and after a brief goodbye, you hang up.');
  scene.actions([
    { label: 'Finish the call', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/city/citycenter/library/downlibw.jpg');
  } else {
    scene.img('images/locations/city/citycenter/library/downlib.jpg');
  }
  (s as any).MagicLibrary = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.text('You follow Tatiana out of the lab. Outside, you expect her to lead you to a garage to get her car, or to the metro, or to get in a taxi or even a bus, but no - the redhead leads you on foot through the streets of St. Petersburg.');
  scene.text('Again and again, you pass dark alleys, and each time you look down them, curious if they are your destination, but Tatiana sticks to the main roads and remains silent. You are more than a little confused when she leads you to a library and walks inside, but you follow her dutifully, wondering what she intends to show you.');
  scene.text('Finally, she stops. "We\'re here."');
  scene.text('You look around, assuming that you would see something strange and extraordinary, but you don\'t - you are simply standing in the middle of a large hall with dozens of bookcases and thousands of books. You didn\'t walk through a secret passage to get here, and you didn\'t see any fairies or demons on your way here either. Even if you didn\'t know about magic, you could have easily ended up here, and in fact you can see a young woman nearby who\'s holding a book on psychology in her arm and apparently looking for more literature on the subject.');
  scene.actions([
    { label: 'Where is the magic?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/library/downlibint.jpg');
    scene.text('"I don\'t see anything magical," you say, disappointed.');
    // TODO-QSP: dynamic text: "What did you expect, dragons?" Tatiana laughs. "The magic is all around you, <<...
    scene.text(`"What did you expect, dragons?" Tatiana laughs. "The magic is all around you, ${((s as any).pcs_firstname ?? 0)}. Most of the books in this part of the library are books on magic, ranging from magic theory and philosophical works to spellbooks on geomancy and shamanism. It's one of the biggest collections of its kind in this country, I've been told."`);
    scene.text('Your eyes go wide. You thought the literature at Tatiana\'s lab had been a lot, but it is like a drop of water compared to the lake in front of you. "And I\'m supposed to read all this?"');
    scene.text('"Well, not all of it. But this is where you can come to learn about magic, where you can learn what you need to know in order to be able to cast spells and all that," she explains.');
    scene.text('You take a moment to let that sink in. Only a short time ago, you had no idea magic existed, and now here you are, standing in the middle of a public library, and you realize that this knowledge was there all along, right under everybody\'s noses. And what knowledge it must be… "Can I read whatever I like?"');
    scene.text('"Sure, anything you want. There are no restrictions. None of it is barred from you."');
    scene.text('You sigh with relief - maybe you can skip some of the boring theory and get to learning real magic right away.');
    scene.actions([
      { label: 'Hurray for skipping the basics!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/library/mission/tatiana_lib.jpg');
    scene.text('"Here, how about you start with this," Tatiana suggests, offering you a book she randomly picked from the bookcase next to her.');
    scene.text('"What is it?"');
    scene.text('"It\'s," she takes a peek at the spine, "\'Advanced Pyromancy, or: How to get rid of pesky squirrels.\'"');
    scene.text('"… That\'s not what it says."');
    scene.text('"Hey, if you don\'t believe me, look for yourself."');
    scene.actions([
      { label: 'Look at the book', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/library/mission/book_pyromancy.jpg');
    scene.text('Tatiana extends her hand once more, and you take the book. It is warm to the touch, bound in red leather with cracks all over the surface - cracks that seem to be flickering, like you can peek at a fire behind them. But when you look at the book\'s spine, you have trouble making out the words there. Irritated by this, you open the book to a random page. The heavy parchment contains diagrams, hand-drawn images and hundreds of pages worth of text, you can see them… but their meaning seems to slip away every time you think you are getting ahold of it.');
    scene.text('"I can\'t read it," you say, defeated.');
    scene.text('"Of course you can\'t," Tatiana says understandingly, "you are not ready for this knowledge. I wasn\'t kidding when I said that I tried cutting corners with the reading: I <b>hate</b> reading; loathe it, really. Not the \'getting smarter\' part of it but the physical act of sitting down in dark libraries and sticking my nose into dusty scrolls and books. But," she points towards the rows upon rows of bookcases, packed with books all the way up to the ceiling, "I would hate it even more to let all this magic go to waste and to leave all of my potential untapped, just because I don\'t like how I have to acquire some of it."');
    scene.text('"You plan on reading all of it?"');
    scene.text('Tatiana shakes her head vehemently. "Fuck no, not if I can help it." After her exclamation, she carefully looks around, like she fears retribution for cursing, but then she continues, softer: "All the knowledge here comes from out there somewhere, and that\'s where I wanna find it. But if I have to choose between spending a decade trying to figure something out on my own, and reading a book on it, I\'m not gonna waste my time. Would you?"');
    scene.text('You grin. "Fuck no." You share a chuckle with her.');
    scene.actions([
      { label: 'Why can\'t I read this book?', handler: (st: GameState) => {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/city/citycenter/library/downlibw.jpg');
    } else {
      scene.img('images/locations/city/citycenter/library/downlib.jpg');
    }
    scene.text('When your look falls back on the book, a question takes form in your head. "Why can\'t I read it, though? It almost seemed to me like," you pause for a second because it sounds crazy to you, "like the letters were moving, like they were avoiding my looks."');
    // TODO-QSP: dynamic text: "Noticed that, didn't you? Yeah, I guess when I explained to you that magic is i...
    scene.text(`"Noticed that, didn't you? Yeah, I guess when I explained to you that magic is in all living things, maybe a better way to put it would have been: 'Magic IS a living thing.' I don't know what it is, whether your mind has to be prepared for it, or your magical power has to grow to the point where you can sync it with that in the books, or something else entirely. All I know is that you can't just grab any book and go nuts - you have to start with the basics and stick to them until you fully comprehend them; then, when you are ready, you'll be able to move to the next step." She sighs. "Learning takes time, ${((s as any).pcs_firstname ?? 0)}. If I could, I'd be all over books on how to shift the shapes of bodies on a whim, or create life from nothing, but the bottom-line is that you can only skip so many steps."`);
    scene.text('If what Tatiana said about how normal people perceive magic is true for these books too, then non-magical people would look at them and probably see books they weren\'t interested in, you conclude. "So, my only mission here is…?"');
    scene.text('"Reading," Tatiana says with a sympathetic smile. "Come here every now and then and read, learn, understand magic. I can teach you some basic spells to start off with, but only once you\'re ready."');
    scene.text('You slump your shoulders. "I guess that means no missions until I\'ve done some reading, huh?"');
    scene.text('"Oh no, there will still be \'missions\' for you, don\'t worry. Don\'t expect Reinhold to take you on any big journeys until you have learned some spells, though. I\'ll hold your hand and show you around a little bit, and once you\'ve gotten used to the drill and learned a little bit, you can help me out with my investigations, because, frankly," she sighs once more, "I don\'t have the time to look into everything myself."');
    scene.text('You chitchat a little more about cases Tatiana is working on as you walk out, and you also add Tatiana\'s number to your cellphone, but once outside, she says her goodbyes and leaves to "take care of something".');
    scene.actions([
      { label: 'Leave the library', goto: ['city_center', ''] },
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

function enterMission1(s: GameState, scene: SceneBuilder): void {
  (s as any).TatianaMissionQW = ((s as any).TatianaMissionQW ?? 0) + (1);
  (s as any).TatianaMissionDay = ((s as any).daystart ?? 0);
  scene.text('"Great!" Tatiana jumps up from her seat and starts walking towards the lab\'s exit. "Let\'s go!"');
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) > 19) {
      scene.img('images/locations/city/shared/trainstation/central_station_night.jpg');
    } else {
      scene.img('images/locations/city/shared/trainstation/central_station_day.jpg');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.text('This time, you don\'t walk far - she directs your steps towards the train station and inside where she buys two tickets for you.');
    scene.text('"Where are we going exactly?"');
    scene.text('"Pavlovsk," she replies, handing you your ticket.');
    scene.text('You raise an eyebrow. "What\'s in Pavlovsk that\'s worth looking at?"');
    scene.text('"You mean besides the bastion, the church, and the nice people?" she teases. You open your mouth to ask for a serious answer, but she preempts it: "Well, one of my contacts told me about a strange ball of light floating around the park, and I\'m positive what he saw was a fairy."');
    scene.actions([
      { label: 'A fairy, you say?', handler: (st: GameState) => {
    scene.img('images/locations/shared/train/ride3.jpg');
    if (((s as any).knowsfairy ?? 0) >= 1) {
      scene.text('"Oh, that one," you say, slightly disappointed. You expected something more exciting. "Yeah, I know her."');
      scene.text('"Do you now?" She seems genuinely surprised. "My my, you get around more than I expected. How did you manage to make her acquaintance?"');
      scene.text('"I just ran into her one night, and we got talking," you shrug. "Before I knew it, a couple hours had passed, and she flew off."');
      scene.text('"So she\'s one of the sociable ones," Tatiana muses. "I don\'t know why, but fairies usually avoid me."');
      scene.text('Her saying that reminds you of something: "Wait, how did your contact even see her? She told me that I was the only one who could see her and who she could talk to."');
      scene.text('"She\'s right, normal people can\'t see fairies at all. But all of us who are magically inclined can. Well, most of us can."');
      scene.text('"What do you mean, \'most of us?\'"');
      scene.text('"It might have something to do with a lack of imagination, or maybe it\'s some weird interaction between magic and our biology, but as far as I know, only female mages can see fairies, which might explain why she doesn\'t have anybody to talk to - that and what with Pavlovsk being a backwater."');
      scene.text('"Hey, I\'m from Pavlovsk," you pout.');
      scene.text('"And you turned out pretty well, considering," Tatiana grins.');
      scene.text('"How are we gonna find her, though? I thought she doesn\'t come out during the day at all."');
      scene.text('"Did you actually go looking for her during the day?"');
      scene.text('"Not really," you concede, "I first met her at night, so I thought…"');
      scene.text('"Well, most fairies don\'t like places that are lively, so she could be spending the day hours in the thicket, but fairies are a lot harder to see during the day, so odds are you could have simply been overlooking her."');
      scene.text('You give her a skeptical look as the train arrives in Pavlovsk.');
    } else {
      scene.text('"A fairy?" Your voice is quivering with excitement. "You mean like that Tinkerbell from Peter Pan?" The library and the secrets it holds weren\'t a bad start, but it pales in comparison to the prospect of seeing an actual magical creature.');
      scene.text('"Tatiana laughs at your description. "Yeah, Tinkerbell is fairly close to the original, though she\'s wearing way too much. They\'re usually very sociable. I don\'t know why but fairies usually avoid me…" she muses.');
      scene.text('"How come I haven\'t been hearing more about this? You\'d think that a mythical creature would be a pretty big deal."');
      scene.text('"Normal people can\'t see fairies at all," she explains, "but all of us who are magically inclined can. Well, most of us can."');
      scene.text('"What do you mean, \'most of us?\'"');
      scene.text('"It might have something to do with a lack of imagination, or maybe it\'s some weird interaction between magic and our physiology, but as far as I know, only female mages can see fairies, which might explain why no one\'s run into her before - that and what with Pavlovsk being a backwater."');
      scene.text('"Hey, I\'m from Pavlovsk," you pout.');
      scene.text('"And you turned out pretty well, considering," Tatiana grins.');
      scene.text('"So we\'re just gonna walk into the park and go looking for a fairy?"');
      scene.text('"Well, most fairies don\'t like places that are lively, so she could be spending the day hours in the thicket, but if we watch out for a floating ball of light, we might get lucky."');
      scene.text('You give her a skeptical look as the train arrives in Pavlovsk.');
    }
    scene.actions([
      { label: 'Get off the train and walk to the park', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===3  ||  ((s as any).month ?? 0)===4  ||  ((s as any).month ?? 0)===5) {
      if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=17) {
        scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      }
    } else {
      if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=19) {
        scene.img('images/locations/pavlovsk/park/skver.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      }
      if (((s as any).month ?? 0)===9  ||  ((s as any).month ?? 0)===10  ||  ((s as any).month ?? 0)===11) {
        if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=18) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
        }
      } else {
        if (((s as any).hour ?? 0)>=7  &&  ((s as any).hour ?? 0)<=16) {
          scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        }
      }
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      scene.text('The walk to the park takes a while, given the lack of public transportation in Pavlovsk, and it is boring to boot. To you, at least - Tatiana has an amused look on her face all along the way and seems to be silently laughing at anything that catches her eye in this "backwater".');
      scene.text('You see a few familiar faces along the way, mostly schoolmates of yours who give the woman next to you curious, in the case of the gopniks outright lustful looks. To your eternal gratitude, none of them stop you and the few who greet you are content with your saying that you\'re "in a hurry".');
      scene.text('The park is the same as always - the same people hang or stroll around. You look in all directions, but you cannot, for the life of you, make out anything even remotely resembling a fairy. "I don\'t see any fairy here."');
      scene.text('"What would I do without your keen observations?" Tatiana mocks.');
      scene.text('"So, what, would you like to go looking for her in the undergrowth?"');
      scene.text('"Sure. Don\'t tell me you\'re afraid of bushes?" With that, she walks off the path and into the thickest part of the thicket.');
      scene.actions([
        { label: 'Keep following her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('You could have done without a tour through the brambles - at the very least, she could have started looking for the fairy in the easier-to-traverse parts of the park - but you sigh and accept your fate as you follow the redhead.');
    scene.text('For a while, you just wander around aimlessly, always a few meters behind your mentor, always on the lookout for a glowing orb of light. In vain.');
    scene.text('"Are you sure she\'s here?" you ask.');
    scene.text('"Where else would she be?" Tatiana\'s voice responds from somewhere behind the next tree.');
    scene.text('"Maybe she\'s on vacation," you mutter sarcastically - and just then, you see it: At first it\'s just a bright glow, emanating from somewhere in the crown of said tree, then a ball of light, and then, as it comes closer, you can make out the creature at its center: A tiny, winged, naked woman, surrounded by light like a halo.');
    if (((s as any).knowsfairy ?? 0) === 1) {
      scene.text('"Hi," you say and awkwardly raise your hand.');
      scene.text('In the blink of an eye, the fairy is fluttering next to you. "Hello!" She says brightly. "So nice of you to visit me during the day!"');
      scene.text('"Yeah, my teacher heard that you lived in this park and wanted to see you, I guess," you explain.');
      scene.text('"See me?" she asks, hopefully.');
      scene.text('"That was the plan," a voice behind her states. Tatiana seems to have heard the exchange and backtracked, now standing next to the tree. "God, it\'s been years since I\'ve seen one of you."');
      scene.text('"You can see me!" the fairy exclaims, overjoyed, and flies around in excited circles. "And I thought there was only one human who I could talk to."');
      scene.text('"No, there are definitely more," Tatiana states, "but most of them don\'t stroll through this park all that often. Oh, I have so many questions!"');
      scene.text('And without paying you much mind, she launches into a dialogue with the fairy, who seems confused by most and can only answer about half of them, but that doesn\'t deter Tatiana any.');
    } else {
      scene.text('She gives you a curious look, and you respond in kind. "Uh, Tatiana?"');
      scene.text('The fairy flutters back and forth and you follow her with your eyes. "You can see me?" she asks uncertainly and in a very high-pitched voice.');
      scene.text('You nod, your eyes darting to where Tatiana went. Now that you\'re standing here, you realize that she didn\'t mention whether or not fairies are dangerous.');
      scene.text('"You can see me!" she shouts, overjoyed, and flies around in excited circles. "I didn\'t know if anybody could see me at all. None of the humans in the park ever saw me, even if I was right in front of them."');
      scene.text('Tatiana seems to have heard the exchange and backtracked, now standing next to the tree and examining the fairy. "God, it\'s been years since I\'ve seen one of you."');
      scene.text('"You can see me?!" she seems about ready to faint. "And here I thought I was lucky to find even one human to talk to!"');
      scene.text('"No, there are definitely more," Tatiana states, "but most of them don\'t stroll through this park all that often. Oh, I have so many questions!"');
      scene.text('And without paying you much mind, she launches into a dialogue with the fairy, who seems confused by most and can only answer about half of them, but that doesn\'t deter Tatiana any.');
    }
    scene.actions([
      { label: 'Try to follow the conversation', handler: (st: GameState) => {
    (s as any).knowsfairy = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.text('You try to follow what they\'re saying, you really do, but Tatiana\'s questions are about the nature of fairy magic, how their dust works and where they get it from, if and when their glow changes, how fairies choose their homes, how they procreate, and many, many more that you can either see little point to or that you quite literally have trouble understanding.');
    scene.text('About an hour passes like this, and you are starting to get tired of standing around doing nothing, but it would seem that Tatiana has also remembered that you\'re still there. Or maybe she\'s just tired of the fairy giving her vague and confused answers, there\'s really no telling which it is.');
    scene.text('Regardless of the \'why\', the redhead finally stops talking and looks at you. "I think those may be enough questions for one day; and certainly enough for our first joint encounter with a magical being, wouldn\'t you say?"');
    scene.text('You nod furiously, glad to finally be able to voice this. "Yes, it\'s high time we left."');
    scene.text('Despite her lack of interest in the questions Tatiana bombarded her with, the fairy seems disappointed. "You\'re leaving already?"');
    // TODO-QSP: dynamic text: "Don't worry, we'll definitely return," Tatiana promises. "Won't we, <<$pcs_firs...
    scene.text(`"Don't worry, we'll definitely return," Tatiana promises. "Won't we, ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.text('"Sure," you affirm - how could you say anything else when the fairy is looking at you with big eyes like that?');
    scene.text('"Great! Come here often, friend!" The fairy calls after you as you return to the main paths of the park. You cannot help but notice that she said \'friend\' rather than \'friends\' and was looking at you specifically. If Tatiana talked to every fairy like that, then it\'s no surprise that they\'d rather avoid her.');
    scene.actions([
      { label: 'Back from the wild', handler: (st: GameState) => {
    scene.text('It doesn\'t take too long before you have returned to civilization. Well out of the fairy\'s earshot, you finally pose the question that had been coursing through your head: "So, what was this visit about, besides you giving that fairy the third degree?"');
    scene.text('"Testing your patience, mostly." You expect to see one of her many grins to go with those words, but her face is completely blank.');
    scene.text('"So all of this was about having me stand there, not doing anything? We came all the way out here so you could waste my time?" you ask, a little upset.');
    scene.text('Tatiana shakes her head. "Not \'waste time\'. Just give you a glimpse at timelessness. Do you have any idea how old fairies can get?"');
    scene.text('Her question quenches your anger, and you shake your head.');
    scene.text('"Old. Several hundred years at least. And they spend all this time in nature, seeing the world from an entirely different perspective than us. And they spend it all surrounded by their own special magic without understanding how it works or where it comes from. What this fairy told me is exactly the same the others before her told me."');
    scene.text('"You asked her things you already knew?"');
    scene.text('"I asked her things I had several accounts on," she corrects. "Just because magic is, you know, \'magic\', that doesn\'t mean you can\'t approach it as a science: empirical evidence is the name of the game - it requires experiments and reviews of the theory, over and over and over."');
    scene.text('"So, you wanted to show me that I have to keep questioning everything and that I have to be patient sometimes?"');
    scene.text('Tatiana smiles; the look she gives you is warm, almost affectionate. "Not a bad conclusion for your first day out."');
    scene.text('"But why a lesson on patience? I thought we covered that subject in the library," you argue.');
    scene.text('"No, we didn\'t," Tatiana objects. "I <b>told</b> you that you had to be patient, I <b>showed</b> you that sometimes impatience won\'t get you anywhere, but that\'s not the same as teaching patience. I cannot teach you that. All I can do in that area is try to show you some things that might make you feel just humbled by time and magic enough to be patient when you have to be - but not so much that you won\'t go out and try to experience things for yourself. And encounters with fairies usually go much better than ones with dragons." She chuckles.');
    scene.text('You spend a few more minutes chatting before Tatiana receives a call. Her responses don\'t give away anything about what they\'re talking about, but when she ends it, she only tells you that she has to run, gives you a quick goodbye and hurries off, in the opposite directions from the train station.');
    scene.actions([
      { label: 'Guess that\'s the end of this trip', goto: ['pav_residential', ''] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'phone_intro':
      enterPhoneIntro(s, scene);
      break;
    case 'phone_mission':
      enterPhoneMission(s, scene);
      break;
    case 'intro':
      enterIntro(s, scene);
      break;
    case 'mission1':
      enterMission1(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const tatiana_missions: LocationDef = {
  name: 'tatiana_missions',
  title: 'Tatiana',
  region: 'other',
  enter: enter,
};
