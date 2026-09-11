import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInitiation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/events/gopnikinvite/lenameet.jpg');
  scene.text('You meet Lena by the apartment garages and find her and Lera already there, squatting and smoking while they wait for you. When you get close, Lena stands up. "You ready little bunny?" Before you can even answer, she starts off down the street with Lera in tow, talking as she goes. "We\'re going to that little liquor store in town."');
  scene.text('You follow them, not sure what to say. You know this is likely going to be a test of some sort to join them, you\'re just not sure what it is.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Go to the store', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('Lena stops at the corner of the building and leans against it. "Okay, here\'s the plan. Lera and I will go in first and distract the owner, then you follow us in and grab some bottles of vodka and make your way out. We\'ll follow shortly after you leave. Got it?" She gives you a hard stare to make sure you understand what you\'re supposed to do while Lera gives you a skeptical look, obviously not believing you can or will do it.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', goto: ['gopnik_initiation', 'agreesteal'] },
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('You shake your head. "You want me to steal? I can\'t do that."');
    scene.text('Lena turns red with anger. "Then why the fuck are you wasting our time? If you weren\'t serious about joining us, then you shouldn\'t have said you would!" She takes a deep breath. "You going to do this or not?"');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', goto: ['gopnik_initiation', 'agreesteal'] },
      { label: 'Offer to be a distraction', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('You notice them exchanging looks and you know you\'re about to blow your chance to join the gopniks, but you don\'t want to steal. Your mother would kill you if you got caught. Maybe you can help out in some other way? "What if I was the distraction while you guys stole the stuff?"');
    scene.text('Lera rolls her eyes. "Pussy!"');
    scene.text('Lena frowns while looking at you intently. "Fine, but if you want to be one of us, then you\'re going to have to loosen up more. And I don\'t mean that chasm you call a pussy. This is what we do, so next time you\'re doing it, got it?"');
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Got it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('You\'re still not sure about stealing, but at least you don\'t have to do it for now. Lena starts laying out the plan as you listen carefully.');
    scene.text('"Okay Bunny, you and Lera go inside. You stay with her and follow her lead, got it? No questions asked, just fucking do it. Then I\'ll come in and move to the back. Once you guys have everyone distracted, I\'ll grab the vodka and head out. Once I\'m out, you guys follow. Got it?"');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstorein.jpg');
    scene.text('You nod and follow Lera inside. She walks up to a rack of cigarettes by the cash register and starts looking at them. You follow her lead and do the same. A few seconds later, you see Lena walk in out of the corner of your eye and head towards the back. You then suddenly feel a hand on your chin twisting you around to face Lera, who leans in to kiss you.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go with it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/distraction.mp4');
    scene.text('Your lips meet and you begin kissing each other as you feel her hands roaming over your body. She\'s actually a surprisingly good kisser and you\'re really getting into it yourself. You lose yourself in the kiss before she suddenly breaks it and you realize that Lena has left.');
    scene.text('Lera grabs your hand and leads you towards the door as you manage to throw a quick glance at the guy behind the counter. "We need to go. At least we won\'t need any condoms!" she says with a giggle as she pulls you out the door and the two of you rush around the side of the building to find Lena with two bottles of vodka. Lena slips them in her bag and starts running. "Let\'s go bitches! We got a party to get to!"');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the party', goto: ['gopnik_initiation', 'gopnik party'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('You shake your head. "I can\'t steal stuff! I\'m not going to do it."');
    scene.text('Lena shoves you. "Then stop wasting our fucking time and get lost, bitch!" You know you\'re about to lose all standing with the gopniks.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Walk away', goto: ['gopnik_initiation', 'walkoff'] },
      { label: 'Ask if there\'s something else you can do', goto: ['gopnik_initiation', 'somethingelse'] },
    ]);
  } },
    ]);
  } },
      { label: 'Walk away', goto: ['gopnik_initiation', 'walkoff'] },
      { label: 'Ask if there\'s something else you can do', goto: ['gopnik_initiation', 'somethingelse'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalkoff(s: GameState, scene: SceneBuilder): void {
  (s as any).grupvalue[4] = Math.floor(Math.random() * 51) + 600;
  (s as any).old_grupvalue[4] = qspUntranslated(s, "grupvalue[4]", { location: "gopnik_initiation" });
  qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', (-10));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
  scene.text('You shake your head again. "Sorry I wasted your time then." With that, you walk away while Lena and Lera shout out all kind of names at you. You know you\'ve made a target of yourself to the gopniks, but you\'re no thief. You don\'t even know why you thought joining them was a good idea in the first place.');
  scene.actions([
    { label: 'Leave the gang', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterSomethingelse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
  scene.text('You know you\'re about to blow your chance to be a gopnik and you\'re feeling desperate now. "Maybe there\'s something else I can do? Some other way to be useful to you guys?"');
  scene.text('Lena gives you a once over while Lera gets a devious look on her face as she leans over and whispers something to Lena, who listens and laughs before nodding. "Okay slut, you want in that bad? Are you willing to do anything for the gopniks to become one of us?"');
  scene.text('You nod your head and she crosses her arms and gives you a look of slight disdain. "Fine. You can be the group bitch. We\'ll take you to the party and you have to do anything anyone tells you. If I tell you to lick my boots, then you will lick my fucking boots. If one of the guys tells you to suck his dick, then you suck his dick. If the guys decide to pull a train on you, then you let them. Got it? You still want in that badly?" Lera is grinning like a wolf as they wait for your reply.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Yes, I\'ll do anything', goto: ['gopnik_initiation', 'doanything'] },
    { label: 'No', goto: ['gopnik_initiation', 'noslut'] },
  ]);
  scene.build();
}

function enterAgreesteal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstorein.jpg');
  scene.text('You nod your head as you grin at them. "Let\'s go get some booze, bitches!"');
  scene.text('Lena snorts a slight laugh and Lera smiles a little before they head inside. You wait a few minutes then follow them in.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Wait for the distraction', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/distraction.mp4');
    scene.text('You make your way towards the back while keeping an eye on Lena and Lera, who are standing near the checkout and are making out. Lera seems to be really into it, pulling Lena back in for further kisses while her hands roam all over Lena\'s body. The only other customer and the man behind the counter are both staring at them, giving you a chance to grab what you need.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Steal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/steal.jpg');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (50);
    qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', 5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).LenaDis = 1;
    (s as any).LeraDis = 1;
    if (((s as any).bag ?? 0) === 1) {
      scene.text('You grab a bottle of the most expensive vodka on the shelf and stuff it into your purse before grabbing another and doing the same. You take a look around to make sure no one is watching before you make your way to the door. You can feel your heart pounding in your chest as you walk up to the doors and push them open, expecting someone to yell that you\'re stealing at any moment. Once outside, you rush around the side of the building and wait for your accomplices. A few seconds later, Lena and Lera join you and you show them the bottles.');
    } else {
      if (((s as any).coatworntype ?? 0) !== 'none'  &&  ((s as any).temper ?? 0) < 0) {
        scene.text('You grab a bottle of the most expensive vodka on the shelf and hide it under your coat before grabbing another and doing the same. You take a look around to make sure no one is watching before you make your way to the door. You can feel your heart pounding in your chest as you walk up to the doors and push them open, expecting someone to yell that you\'re stealing at any moment. Once outside, you rush around the side of the building and wait for your accomplices. A few seconds later, Lena and Lera join you and you show them the bottles.');
      } else {
        scene.text('You grab a bottle of the most expensive vodka on the shelf and hide it under your top before grabbing another and doing the same. You take a look around to make sure no one is watching before you make your way to the door. You can feel your heart pounding in your chest as you walk up to the doors and push them open, expecting someone to yell that you\'re stealing at any moment. Once outside, you rush around the side of the building and wait for your accomplices. A few seconds later, Lena and Lera join you and you show them the bottles.');
      }
    }
    scene.text('With a huge grin on her face, Lena starts to take off. "Come on, they\'ll waiting for us by now." With that, she takes off running with you and Lera following behind.');
    scene.actions([
      { label: 'Go to the party', goto: ['gopnik_initiation', 'gopnik party'] },
    ]);
  } },
    ]);
  } },
    { label: 'Change your mind', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('Your heart is pounding so hard it feels like it\'s going to burst out of your chest. You look around and decide that you can\'t do this, so you turn and walk outside. A few minutes later, Lena and Lera join you and look you over, obviously trying to see where you\'ve hidden the bottles. You blush slightly and look down. "Sorry, but I couldn\'t do it."');
    scene.text('Lena turns red with rage and pushes you up against the side of the building. "Are you fucking kidding me? You fucking useless bitch, why are you even here if all you\'re going to do is waste our time?! I should beat your fucking ass!" She looks around and notices some people are watching before she looks back at you. "You\'re fucking lucky, bitch! Stay the fuck away from us from now on or I\'ll give you an epic ass beating." With that, she turns and leaves as Lera smirks at you before following.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stay silent', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('You stay silent and watch them walk away. You know you just painted a target on your back, but you couldn\'t bring yourself to steal. Sighing, you walk back to the street.');
    (s as any).grupvalue[4] = Math.floor(Math.random() * 51) + 600;
    (s as any).old_grupvalue[4] = qspUntranslated(s, "grupvalue[4]", { location: "gopnik_initiation" });
    qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', (-10));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the gang', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Beg for another chance', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
    scene.text('As they start to walk away, you catch up to them. "Wait! Please, give me another chance."');
    scene.text('Lera pushes you away while Lena laughs. "You had your chance and you blew it."');
    scene.text('You\'re feeling desperate. "Please! I\'ll do anything!" you beg.');
    scene.text('They stop and turn to look at you again. Lena gives you a once over while Lera gets a devious look on her face as she leans over and whispers something to Lena, who listens and laughs before nodding. "Okay slut, you want in that bad? Are you willing to do anything for the gopniks to become one of us?"');
    scene.text('You nod your head and she crosses her arms and gives you a look of slight disdain. "Fine. You can be the group bitch. We\'ll take you to the party and you have to do anything anyone tells you. If I tell you to lick my boots, then you will lick my fucking boots. If one of the guys tells you to suck his dick, then you suck his dick. If the guys decide to pull a train on you, then you let them. Got it? You still want in that badly?" Lera is grinning like a wolf as they wait for your reply.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes, I\'ll do anything', goto: ['gopnik_initiation', 'doanything'] },
      { label: 'No', goto: ['gopnik_initiation', 'noslut'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoanything(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
  scene.text('You nod your head. "Okay, I\'ll do anything! I\'ll be anything you guys want me to be."');
  scene.text('They exchange looks and Lena shrugs and turns to Lera. "You were right." She then looks back at you. "Well? Come on then, slut." With that, she turns and leads you toward the party as she texts on her phone.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Go to the party', goto: ['gopnik_initiation', 'gopnik slut'] },
  ]);
  scene.build();
}

function enterNoslut(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/events/gopnikinvite/liqstoreout.jpg');
  scene.text('You shake your head. "I\'m not a slut."');
  scene.text('They turn around and start walking away again. "Then fuck you bitch!" You know you\'re a target for the gopniks now, but it\'s better than being their personal slut. You turn and make your way back to the street.');
  (s as any).grupvalue[4] = Math.floor(Math.random() * 51) + 600;
  (s as any).old_grupvalue[4] = qspUntranslated(s, "grupvalue[4]", { location: "gopnik_initiation" });
  qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', (-10));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave the gang', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterGopnikParty(s: GameState, scene: SceneBuilder): void {
  (s as any).grupvalue[1] = 0;
  (s as any).grupvalue[2] = 0;
  (s as any).grupvalue[3] = 0;
  if (((s as any).grupTipe ?? 0) === 1) {
    (s as any).grupvalue[1] = Math.floor(Math.random() * 101) + 500;
  }
  if (((s as any).grupTipe ?? 0) === 2) {
    (s as any).grupvalue[2] = Math.floor(Math.random() * 101) + 500;
  }
  if (((s as any).grupTipe ?? 0) === 3) {
    (s as any).grupvalue[3] = Math.floor(Math.random() * 101) + 500;
  }
  (s as any).old_grupvalue[1] = qspUntranslated(s, "grupvalue[1]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[2] = qspUntranslated(s, "grupvalue[2]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[3] = qspUntranslated(s, "grupvalue[3]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[4] = qspUntranslated(s, "grupvalue[4]", { location: "gopnik_initiation" });
  (s as any).grupTipe = 4;
  (s as any).grupTipe['joined_gopnik'] = 1;
  qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', 10);
  scene.img('images/locations/pavlovsk/school/oldschool/hall.jpg');
  scene.text('You follow Lena and Lera, who talk the whole way about how you did such a good job. Upon arriving at the old school, Lena and Lera slip through the busted front door and down the main hallway to see Vitek, who is waiting in the old school offices with the rest of the gopniks.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Join the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/main.jpg');
    scene.text('You walk into the main office and spot some old furniture placed in the middle of the room.');
    scene.text('Lena tells you to wait at the entrance while she approaches the group that\'s occupying the sofas. After a little while, she returns with Vitek, both of them grinning.');
    scene.text('"I heard you had something for me," Vitek eyes you.');
    scene.text('Lera gives you a subtle nudge and you quickly reveal the bottles. Vitek looks pleased as he invites you over to join the others.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/party.jpg');
    scene.text('You happily walk over to the rest of the group. When they see that Vitek is carrying several bottles of vodka with him, they begin to yell and holler.');
    scene.text('"Didn\'t I promise you all that I would deliver? Never doubt me again!" he proudly proclaims.');
    // TODO-QSP: dynamic text: Lena quickly chimes in. "Well, it's all thanks to our new friend, <<$pcs_nicknam...
    scene.text(`Lena quickly chimes in. "Well, it's all thanks to our new friend, ${((s as any).pcs_nickname ?? 0)}. She really proved herself today."`);
    scene.text('The rest of the group all cheer as they impatiently wait for the bottles to get opened. "Tell us how you managed to pull this one off," some of them ask.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell them the story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/party.jpg');
    scene.text('You begin telling them about the plan that Lena and Lera cooked up. On how the two of you would distract the store clerk while the third would quickly walk in and out.');
    if (((s as any).LenaDis ?? 0) === 1  &&  ((s as any).LeraDis ?? 0) === 1) {
      scene.text('"So we decided that Lena and Lera would be the distraction while I was supposed to grab some bottles, so in they went and I followed shortly thereafter. I walked passed them and as soon as I reached the liquor, they started making out in front of the clerk." The boys start to cheer as Lena and Lera blush a little.');
      scene.text('After everyone settles down, you continue. "While they\'re making out, I easily take a couple of bottles and then simply walk out without anyone noticing me."');
      scene.text('Excited by your story, Vitek cracks open a bottle and offers you a drink. "You\'ve earned the right to have the first drink."');
      scene.actions([
        { label: 'Drink', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/drinkvodka.jpg');
    scene.text('You take a sip from the cup and immediately feel your throat burn. You begin coughing as the others start laughing. "Not much of a drinker, eh?"');
    scene.text('As it quietens down, everyone goes back to what they were doing and you\'re free to explore the grounds.');
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start exploring', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"So we decided that Lera and I would be the distraction while Lena was supposed to grab some bottles, so in we go and Lera and I stop in front of the clerk…" You take a dramatic pause. "And Lera leans in and starts making out with me!" The boys start to cheer as you blush a little.');
      // TODO-QSP: dynamic text: As everyone cheers, Lera chimes in. "<<$pcs_nickname>> is really a good kisser. ...
      scene.text(`As everyone cheers, Lera chimes in. "${((s as any).pcs_nickname ?? 0)} is really a good kisser. Just wanted the information to be out there in case," she winks at you.`);
      scene.text('Excited by your story, Vitek cracks open a bottle and offers you a drink. "Since you\'re new here, have the first drink."');
      scene.actions([
        { label: 'Drink', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/drinkvodka.jpg');
    scene.text('You take a sip from the cup and immediately feel your throat burn. You begin coughing as the others start laughing. "Not much of a drinker, eh?"');
    scene.text('As it quietens down, everyone goes back to what they were doing and you\'re free to explore the grounds.');
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start exploring', goto: ['gopnik_initiation', 'explore'] },
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

function enterExplore(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/party.jpg');
  scene.text('Once your story has been told and everyone has taken a drink or more of the vodka, the large crowd disperses and smaller groups have formed instead. <a href="exec:gt \'gopnik_initiation\', \'tVitek\'">Vitek</a> and <a href="exec:gt \'gopnik_initiation\', \'tLavrenti\'">Lavrenti</a> are discussing something, while <a href="exec:gt \'gopnik_initiation\', \'tDan\'">Dan</a> is sitting on the sofa with a drink in his hand carefully listening to the discussion.');
  scene.text('You can see <a href="exec:gt \'gopnik_initiation\', \'Niko\'">Niko</a> leaning against a wall, chatting with Roman. <a href="exec:gt \'gopnik_initiation\', \'tVasily\'">Vasily</a> is standing nearby pouring himself a drink. <a href="exec:gt \'gopnik_initiation\', \'tLena\'">Lena</a> and <a href="exec:gt \'gopnik_initiation\', \'tLera\'">Lera</a> are standing a little farther away talking to each other while <a href="exec:gt \'gopnik_initiation\', \'tPauline\'">Pauline</a> is standing by the window smoking a cigarette.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    { label: 'Go to the old principal\'s office', goto: ['gopnik_initiation', 'office'] },
    { label: 'Go to the old teacher\'s lounge', goto: ['gopnik_initiation', 'lounge'] },
  ]);
  scene.build();
}

function enterTVitek(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  scene.text('As you approach Vitek, he stops talking to Lavrenti and turns to you. "Good job on fixing the booze! You, my sister and Lera make a good team. I look forward to see what more fun things you girls get into."');
  scene.text('"Thanks! Hopefully it\'ll be something as fun as this little adventure," you confidently answer.');
  scene.text('"I\'m sure my sister will find something exciting for you to do. She always does something stupid and I have to come to her rescue."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Does that happen a lot?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('"Does she really run into trouble a lot?" you ask.');
    scene.text('Vitek scoffs. "How much time do you have? There are many stories about me having to save my sister. She thinks she\'s tough, but I know better."');
    scene.text('"I bet some of those stories are really juicy," you reply.');
    scene.text('Vitek begins to laugh loudly with his other friends following suit. "You\'re fun. I\'m glad my sister persuaded me to give you a chance."');
    scene.text('You smile and continue making small talk with him.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'explore'] },
      { label: 'Be flirty', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('"I\'m sure you can show me a fun time," you say teasingly.');
    scene.text('Vitek turns to his friends. "Did you hear that boys? No whore can resist me." As he turns back, he suddenly lunges towards you and begins grabbing your ass.');
    scene.text('You quickly react and push him away as he begins to laugh. "Look at that, boys. This little kitty cat has claws. You better be careful what you ask for."');
    scene.text('The rest of the guys are grinning as you quickly move away from them. As you\'re moving away from them, you hear Vitek yell out to you. "If you ever want a round two, then come see me."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTDan(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big10.jpg');
  scene.text('As you walk past Dan, you overhear him comment on how he would have gotten the booze. "I\'m fairly sure I would\'ve been able to get more booze than the girls. Their approach was completely whack!"');
  scene.text('Something strikes a nerve in you and you feel the urge to confront him, but you\'re also new to the gopniks. Maybe you should just let it go…');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ignore him', goto: ['gopnik_initiation', 'explore'] },
    { label: 'What was wrong with our approach?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('"How would\'ve you done it?" you ask in an annoyed tone.');
    scene.text('Dan grins, seemingly having expected you to react in that way. "Well, let me explain why. Having two girls make out in front of a man is the oldest trick in the book. There\'s no finesse to it. It lacks originality."');
    scene.text('He\'s really getting under your skin and all you want to do is punch his smug little face.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'How would you have done it?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You\'re quite annoyed by his implications. "How would you have done it instead, smartass?"');
    scene.text('"Well…" he stops and thinks for a moment. "If I were in your shoes, I would\'ve used one of you and flirted with the man at the counter. That way two of you would have been able to grab twice as many bottles."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'That\'s actually pretty smart', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You\'re a bit surprised that he was able to come up with something better. "I\'ve got to give you, that\'s a pretty good idea."');
    scene.text('Dan grins. "See? I told you that I had a superior idea. Now you know that you shouldn\'t question me the next time."');
    scene.text('Even if you don\'t want to acknowledge him, you admit defeat as you nod and quickly move away from him.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
      { label: 'I don\'t think so', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You begin to scornfully laugh. "<i>That\'s</i> your bright idea? That\'s so stupid! Do you think the guy behind the counter was the only person in the store? Was one of us suppose to flirt with all of them at once? Yeah, that\'s not suspicious at all." you say as you roll your eyes. "The only way to pull it off was the way we did it."');
    scene.text('Dan frowns at you. "You left that part out, you little slut."');
    scene.text('You laugh. "Well I didn\'t think I needed to point out the obvious."');
    scene.text('You can hear Lavrenti and Vasily laughing before Vasily rubs salt in the wound. "She has a point, Dan. I\'ve never seen that place empty." Dan turns and gives Vasily a dirty look before turning it on you, but he doesn\'t say anything more.');
    scene.text('You stick out your tongue as you move away from him, feeling very satisfied that you managed to put Dan in his place. You know you scored some points with some of them, even if it pissed off Dan, but he\'ll get over it.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTVasily(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big11.jpg');
  scene.text('You approach Vasily as he\'s pouring himself a drink. He\'s quite tipsy and is having a hard time pouring the liquor into the cup.');
  scene.text('"Do you need some help?" you ask him.');
  // TODO-QSP: dynamic text: Looking at you, he mumbles something incomprehensible and then wraps his arm aro...
  scene.text(`Looking at you, he mumbles something incomprehensible and then wraps his arm around your shoulder. "Want to have some fun, ${((s as any).pcs_nickname ?? 0)}?"`);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'What do you have in mind', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('You\'re intrigued by his question. "What do you have in mind?"');
    scene.text('He gives you a sneaky smile. "Watch this."');
    scene.text('He stumbles towards Lavrenti, sneaks up behind him and pulls down his pants.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Laugh', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/pantsed.jpg');
    scene.text('Everyone starts laughing at Lavrenti, including you. Lavrenti is blushing and you can see his eyes tear up as Vasily runs back to you with a huge grin on his face. "Did you like that?"');
    scene.text('You nod. "That was great! I can\'t believe you did that."');
    scene.text('"You wanted to see something fun, didn\'t you?" he confidently answers.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
      { label: 'Don\'t laugh', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('Everyone starts laughing at Lavrenti while you stand in dismay. Lavrenti is blushing and you can see his eyes tear up as you yell at Vasily. "What the hell is wrong with you?!"');
    scene.text('Vasily shrugs his shoulders and tries to deflect. "What? You said you wanted some fun."');
    scene.text('"Yeah, but not at someone else\'s expense. That was a low blow, even for you."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTLavrenti(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big155.jpg');
  scene.text('You approach Lavrenti, who\'s discussing something with Vitek. "The girls really grabbed the good stuff!"');
  scene.text('"Thanks," you answer. "It got a little hairy, but we managed to handle it."');
  scene.text('Lavrenti laughs. "I can understand that. Either way, it was nice to have someone else provide the booze this time."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Oh?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You tilt your head. "Really? Why\'s that?"');
    scene.text('Lavrenti smiles. "I\'m the richest here, so they usually use me as their personal bank. At any rate, it\'s better than being some friendless loser."');
    scene.text('"Sounds a bit sad," you reply, "If they were your real friends, they wouldn\'t do that to you."');
    scene.text('Lavrenti raises his hands. "It\'s not like that. We have lots of fun, so I don\'t really mind."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'I still feel…', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You continue to push the topic and just as you\'re about to say something, Lavrenti cuts you off. "I told you it\'s okay! So just drop it!" he says in an annoyed tone.');
    scene.text('"I-I\'m sorry! I didn\'t want to upset you!" you quickly apologize.');
    scene.text('"Don\'t worry. These people are my friends now. After the falling out, they were the only one that took me in."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'What happened?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Why\'s that?" you curiously ask.');
    scene.text('"You know that Dimka and I had a falling out, and that it was pretty ugly. Dimka ruined my reputation with most of the school and it got me outcast, but I proved myself to these guys and they took me in. I know they mostly tolerate me because my family is rich, but I don\'t care. They at least have my back when push comes to shove."');
    scene.text('You smile. "As long you don\'t mind and are happy, then who am I to judge?" you reply. "It was great talking to you, but I need to go."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTLena(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big20.jpg');
  scene.text('You approach Lena and Lera and ask Lera if you can speak with Lena. Lera happily nods and moves away while Lena smiles at you.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Thank her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"I just wanted to thank you for giving me the chance to show the group that I\'m worthy," you say.');
    // TODO-QSP: dynamic text: "Don't be silly <<$pcs_nickname>>, there's no need for that. You did good and pr...
    scene.text(`"Don't be silly ${((s as any).pcs_nickname ?? 0)}, there's no need for that. You did good and proved yourself," she replies.`);
    scene.text('You can\'t help but smile. "You\'re going to make me blush."');
    scene.text('Lena smiles back. "I\'m sure everyone will make you feel welcome. You\'re the hero of the day after all."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"You\'re making me blush now…" you reply.');
    scene.text('"Just be yourself and don\'t worry about anything. If anyone is bothering you, come talk to me and I\'ll take care of it, okay?" Lena smiles.');
    scene.text('"I\'ll keep that in mind," you tell her.');
    scene.text('"The guys can be pretty rowdy sometimes, so you better be careful." she adds.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In what way?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('"In what way?" you worringly ask her.');
    scene.text('"Well, they can be pretty hands on when it comes to sex. Luckily, or rather unluckily, I have Vitek \'protecting\' me. So don\'t be surprised if someone makes a move on you and won\'t take no for an answer."');
    scene.text('You begin getting cold feet. "Maybe this group isn\'t for me…"');
    scene.text('Lena begins shaking her head. "No, no, no. I\'m just saying that you might have to force them to back down. Do what you need to, even if it means kicking them in the balls. Eventually, they\'ll learn how far they can push you. Just don\'t let them push you further than you want to go."');
    scene.text('You thank her for the advice and give her a hug before moving away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTLera(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big21.jpg');
  scene.text('You approach Lena and Lera and ask Lena if you can speak with Lera. Lena happily nods and moves away while Lera smiles at you.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'I had fun today', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('You tell her that you had a lot of fun and thank her for giving you the opportunity to prove yourself.');
    // TODO-QSP: dynamic text: "Don't be silly <<$pcs_nickname>>, it was fun helping! You proved you belong her...
    scene.text(`"Don't be silly ${((s as any).pcs_nickname ?? 0)}, it was fun helping! You proved you belong here today," she replies.`);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A21'] > 20) {
      scene.actions([
        { label: 'Talk about the kiss', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"It was pretty wild kissing like that," you tell her.');
    // TODO-QSP: dynamic text: Lera shrugs her shoulders. "It's not the first time Lena and I pulled something ...
    scene.text(`Lera shrugs her shoulders. "It's not the first time Lena and I pulled something like that off. We mostly do it to tease the guys as it makes them go crazy. You're not a bad kisser ${((s as any).pcs_nickname ?? 0)}. Hopefully it wasn't the last time we do that…" she slyly winks at you.`);
    scene.text('You start blushing as Lera laughs. "Relax, we tease each other all the time. It\'s what we do. You\'ll get used to it." she teases you.');
    scene.text('You mumble something and quickly move away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Talk about her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"You\'re pretty brave doing all these crazy things," you tell her.');
    scene.text('"Why\'s that?" she asks curiously.');
    scene.text('"Your father is a teacher at the school, so he\'s well known. Aren\'t you afraid he might find out what you\'re up to?" you ask.');
    scene.text('She tilts her head. "Nothing to worry about. He\'s always busy with work, so I get away pretty much with murder," she smiles.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell a joke', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"Good to know. If I ever need to put a hit on anyone, I know who to call." you jokingly say.');
    scene.text('Lera begins to loudly laugh. "Good one! Who knew we have a comedian joining us?"');
    scene.text('You continue to joke around for a while and you\'re still not able to stop laughing as you\'re moving away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A21', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
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

function enterTPauline(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big24.jpg');
  scene.text('You approach Pauline as she angrily turns towards you. "What the fuck what you want?!"');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] >= 20) {
    scene.text('Surprised by her reaction, you lower your gaze. "I saw you were having a smoke and I wanted to ask if I could have one?"');
    scene.text('Pauline sighs and hands over a pack of cigarettes.');
    scene.actions([
      { label: 'Thank her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('You gladly grab hold of the pack and take out a cigarette before lighting it and inhaling deeply. You feel the smoke fill your lungs as you breathe out.');
    scene.text('Pauline observes you for a while. "You really needed one, eh?"');
    scene.text('You nod. "Every time I have something to drink, I just get this urge for a cigarette."');
    scene.text('"I know the feeling. I usually always get that feeling after kicking someone\'s ass," she replies.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'drugs', 'smoke');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sounds like a bad habit', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('"Both of those things sound like a bad habit," you jokingly say.');
    scene.text('A smile appears on her face. "Heh, true. I should kick them both to the curb, but I don\'t want to live like a prude. Nothing beats kicking someone\'s ass, that feeling is even better than having sex."');
    scene.text('"Well, you\'ve got quite the reputation. You even have the boys scared of messing with you."');
    scene.text('An angry glare appears on her face.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Did I say something wrong?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('The lack of reaction makes you uneasy. "I\'m sorry, did I offend you in some way?"');
    scene.text('Pauline continues glaring at you before she starts laughing. "I can\'t keep it up anymore. Did I scare you? I wanted to see how you would react."');
    scene.text('You start laughing. "Yeah, you had me scared. I didn\'t know what I should do."');
    // TODO-QSP: dynamic text: "No need to worry. You're all good <<$pcs_nickname>>," she says between fits of ...
    scene.text(`"No need to worry. You're all good ${((s as any).pcs_nickname ?? 0)}," she says between fits of laughter.`);
    scene.text('You keep talking while you finish your cigarette.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('Surprised by her reaction, you bend your head down and quietly tell her, "I didn\'t mean to disturb you, I just wanted to hang out for a while. You just seemed lonely."');
    scene.text('"Well I\'m not I just want to be left alone, understand?" she sharply replies.');
    scene.actions([
      { label: 'Walk away', goto: ['gopnik_initiation', 'explore'] },
      { label: 'What a bitch', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('"Sheesh, no need to be such a bitch…" you tell her, having forgotten that Pauline has a short fuse.');
    scene.text('Without any hesitation, she gets up in your face. "What did you call me, whore?!"');
    scene.text('Realizing what you\'ve done, you quickly backtrack before you get your ass beaten.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'I was joking', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('Your lips tremble. "I\'m sorry, I was just joking."');
    scene.text('Pauline spits in front of you. "You haven\'t earned that right. Just because you stole some bottles of vodka doesn\'t make you one of us. The others might let you think that, but you\'ve got a long way to go before you\'re one of us. Get lost before I beat your ass, bitch."');
    scene.text('Dejected, you apologize again before moving away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
      { label: 'Double down', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('"You heard what I was said!" you confidently reply.');
    scene.text('Pauline smirks. "You know what, both of us have had a drink or two and I don\'t want to ruin the buzz, so I\'ll let you off the hook this time. I won\'t be as forgiving next time, though."');
    scene.text('Feeling you played your hand correctly, you let out a relieving sigh.');
    scene.text('"I\'ve got to give it to you, you\'ve got some balls. I didn\'t think you had it in you," she commends you.');
    scene.text('You nod approvingly before moving away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterNiko(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><b><h4><font color=#E400FF><<"Nikolai [Niko] Volkov">></font></h4></b></...
  scene.text(`<center><b><h4><font color=#E400FF>${'Nikolai [Niko] Volkov'}</font></h4></b></center>`);
  qspCall(s, 'stat', '');
  if ((!((s as any).NikoGOPParty ?? 0))) {
    (s as any).NikoGOPParty = 1;
    if (((s as any).NikoFightDay ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).NikoPayback ?? 0) > 0) {
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/bruised2.jpg');
      scene.text('Niko slowly turns to you as you approach. "What? Did you come here to gloat? Why don\'t you just celebrate somewhere else?" Before you can say anything, Niko grabs two vodka bottles and walks to the other side of the room.');
    } else {
      if (((s as any).NikoPayback ?? 0) > 0) {
        scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
        scene.text('Niko quickly turns to you as you approach. "So the little slut decides to join the tough guys, huh? You must enjoy being treated like the whore you are, right? Because you\'ll never truly be an equal here. I\'ll make sure of it." He then presses a bottle of vodka against the table and slams his hand down on it, popping the top off before leaning back and taking a swig. Realizing that he has nothing more to say, you cautiously walk away.');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) >= 5  &&  ((s as any).NikoEv ?? 0) > 0) {
          qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
          scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
          // TODO-QSP: dynamic text: Niko slowly turns to you as you approach. "Hey <<$pcs_nickname>>, how are you en...
          scene.text(`Niko slowly turns to you as you approach. "Hey ${((s as any).pcs_nickname ?? 0)}, how are you enjoying the party?" You give him a smile as he reaches out for your hand and guides you towards the seat next to him. He wraps his arm around your neck before kissing up your neck and pressing a bottle of vodka against the table, slamming his hand down on it to pop the top off before handing it to you.`);
          scene.actions([
            { label: 'Have a drink', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/caress.mp4');
    scene.text('As you begin drinking, a few drops run down your chin and drip onto your shirt. Niko leans forward and begins licking the vodka off your neck while caressing your breasts as you continue drinking. After you finish the vodka, you place the bottle down just as Niko gives you a passionate kiss. "How about we slip away for some private time…" Dan then accidentally knocks over an open bottle, causing some vodka to spill on Niko\'s leg. "Watch what you\'re doing you fucking shithead!" Niko shouts and Dan flips him off before they both begin shoving each other. You quietly slip away, not wanting to get involved.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).NikoIntro ?? 0) > 0) {
            scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
            // TODO-QSP: dynamic text: Niko slowly turns to you as you approach. "Hello there, <<$pcs_firstname>>. Welc...
            scene.text(`Niko slowly turns to you as you approach. "Hello there, ${((s as any).pcs_firstname ?? 0)}. Welcome to the party. Here, have a drink." He presses a bottle of vodka against the table and slams his hand down on it, popping the top off before handing it to you.`);
            qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
            scene.actions([
              { label: 'Have a drink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('As you begin drinking, a few drops run down your chin and drip onto your shirt. Niko quickly grabs a napkin and begins slowly wiping the drops off your shirt. "Careful there, we wouldn\'t want to ruin that lovely shirt you\'re wearing."');
    scene.text('You pause drinking to give him a light smile. "Charmer, are we?"');
    scene.text('"Only for one as beautiful as you," he replies and you shake your head before getting up and saying "Well maybe we can do this again sometime."');
    scene.text('He gives you a wink. "I look forward to it."');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
            ]);
          } else {
            qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
            scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
            // TODO-QSP: dynamic text: Niko slowly turns to you as you approach. "Hello there. <<$pcs_firstname>>, righ...
            scene.text(`Niko slowly turns to you as you approach. "Hello there. ${((s as any).pcs_firstname ?? 0)}, right? Welcome to the party. Here, have a drink." He presses a bottle of vodka against the table and slams his hand down on it, popping the top off before handing it to you.`);
            scene.actions([
              { label: 'Have a drink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('As you begin drinking, a few drops run down your chin and drip onto your shirt. Niko quickly grabs a napkin and begins slowly wiping the drops off your shirt. "Careful there, we wouldn\'t want to ruin that lovely shirt you\'re wearing."');
    scene.text('You pause drinking to give him a light smile. "Charmer, are we?"');
    scene.text('"Only for one as beautiful as you," he replies and you shake your head before getting up and saying "Well maybe we can do this again sometime."');
    scene.text('He gives you a wink. "I look forward to it."');
    scene.actions([
      { label: 'Head back', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } else {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/brother/upset.jpg');
    scene.text('Niko seems to be resting while having a smoke. It\'s probably best not to disturb him.');
  }
  if ((!((s as any).NikoGOPParty ?? 0))) {
    scene.actions([
      { label: 'Wave and walk away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  } else {
    scene.actions([
      { label: 'Walk away', goto: ['gopnik_initiation', 'explore'] },
    ]);
  }
  scene.build();
}

function enterOffice(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/oldschool/princoff.jpg');
  scene.text('You open the door to the old principal\'s office. It seems to have been completely emptied out as you can\'t spot anything inside and there\'s no light beyond the moonlight coming through some of the boarded up windows.');
  scene.text('You then hear some noises coming from inside. You jump back a little before you gather some courage and stick your head back in.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: '"Anyone in here?"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/princoff.jpg');
    scene.text('You gather some courage, clear your throat and ask if anyone is in the room. At first there\'s nothing, then you suddenly hear movement again.');
    scene.text('Frightened, you say "Show yourself or I\'ll go and get my friends and they\'ll beat your ass!"');
    scene.text('You can hear some soft breathing before a male voice speaks up. "Is that so? Go get them, I\'m not afraid of any of them. Tell you what. Why don\'t you join me? I\'m sure we could have some fun in the dark."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the others', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-1));
  }, goto: ['gopnik_initiation', 'explore'] },
      { label: 'Try to make out the figure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/princoff.jpg');
    scene.text('Before answering back, you stop and listen, trying to figure out where this mysterious figure is standing.');
    scene.text('"Don\'t bother with that!" he says. "I\'ll let you see me when I decide it\'s time."');
    scene.text('By now you\'re screaming on the inside that you should run away and get your friends, but you decide to keep your cool and instead interrupt him. "I don\'t have time for this. I\'m heading back and getting my friends!"');
    scene.text('There\'s silence again before you hear laughter. "Fine fine, wait…" You hear footsteps approach the lit part of the room.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'See who it is', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You squint your eyes as the shadowy figure approaches you. It\'s Roman.');
    scene.text('He stands there with a stupid grin, pleased with himself that he was able to frighten you. "Can\'t wait to tell the others about this! Or do you want to run and get your big bad friends that will teach me a lesson?" he winks.');
    scene.text('You begin to blush. "What were you doing in here alone?"');
    scene.text('"You looked fucking good tonight, so I went away to rub one out," he answers while laughing.');
    scene.text('You\'re not sure what to say to that. "Oh… Okay, sorry to have bothered you then."');
    scene.text('He laughs again. "The real reason I\'m here is that Vasily was pissing me off and I was about to cave his face in. Vitek always gets upset when I do that, so I came in here to cool off."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Oh', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"I didn\'t know that. Sorry to bother you." you answer.');
    scene.text('"It\'s okay. You distracted me, but then I thought I would play a little prank on you to see if you could take it," he answers while smiling.');
    scene.text('"At first, I didn\'t know how to react. What if you were someone else? I would\'ve freaked out!" you seriously answer.');
    scene.text('Roman begins to laugh loudly. "It was your lucky day then! You stood your ground though. That\'s impressive. Most other girls would\'ve run away. I thought you would be a pussy, but you\'re pretty cool actually."');
    scene.text('"Thanks, I guess." you answer, "Well, I should head back to the others."');
    scene.text('Roman nods. "Sure thing. I\'ll be somewhere around here, walking around."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A157', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the main office', goto: ['gopnik_initiation', 'explore'] },
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

function enterLounge(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/oldschool/teachloung.jpg');
  scene.text('Upon entering the teachers lounge, you are struck by the strong scent of marijuana. It\'s so strong that you think you already have a contact buzz. Through the smoky haze, you see <a href="exec:gt \'gopnik_initiation\', \'tRadomir\'">Radomir</a> intensely explaining something to <a href="exec:gt \'gopnik_initiation\', \'tValentin\'">Valentin</a> and <a href="exec:gt \'gopnik_initiation\', \'tArkadi\'">Arkadi</a> by a makeshift table as they\'re pouring themselves a drink.');
  scene.text('<a href="exec:gt \'gopnik_initiation\', \'tAnushka\'">Anushka</a> and <a href="exec:gt \'gopnik_initiation\', \'tAlyona\'">Alyona</a> are sitting on a sofa looking spaced out while passing a joint back and forth. <a href="exec:gt \'gopnik_initiation\', \'tEkaterina\'">Katyusha</a> is standing in one of the corners by herself, deep in her own thoughts.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return to the main office', goto: ['gopnik_initiation', 'explore'] },
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterTRadomir(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  scene.text('As you walk past Radomir, you hear him telling a story to the guys. "You should\'ve seen this hottie I hooked up with this last weekend after our gig. I had her sucking my cock within minutes."');
  scene.text('The guys feed his ego by giving him encouraging nods and chuckles. When he sees you, he points and says "And here we have my next \'conquest\'. She\'s probably good in bed. What do you think guys?"');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).npc_had_sex ?? 0)?.['A154']) {
    scene.actions([
      { label: 'We already did', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You roll your eyes at him. "We already did, remember? Cutting class in the bathroom?"');
    scene.text('He looks at you long and hard like he\'s trying to remember. "Oh yeah… Yeah, you were a fine piece of ass. I remember now. Well damn, and here I thought I was going to get a new piece of pussy." He sighs and turns back to the guys looking disappointed and doesn\'t even glance back at you as he continues his graphic story to the guys.');
    scene.text('Mildly annoyed, you walk away.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Maybe', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You look him up and down. "Yeah, maybe. Or maybe not."');
    scene.text('He steps over and wraps his arm around your waist before pulling you in close. "Maybe always means yes."');
    scene.text('You turn towards him and put your hand on his chest, biting your lip as you look up at him and shove him away. "Like I said, maybe. But not tonight." You turn and walk away as you hear Valentin and Arkadi laughing.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    { label: 'Not that kind of girl', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You look at him with a confused stare. "Sorry, but I\'m not that kind of girl."');
    scene.text('Radomir burst out in laughter. "They all say that at first, but we all know that you\'ll be on your back screaming my name soon enough. Look at the people you\'re hanging out with here. They all have one thing in mind and that\'s fucking the new girl."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Is that so?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You look around before answering. "Hmm interesting. Too bad you would be the last one in line."');
    scene.text('Radomir scoffs. "This little kitty\'s got some spunk in her. I\'m not too worried though, you\'ll come around and beg me to give you a real good fuck."');
    scene.text('You cross your arms, a little irritated now. "Hell would freeze over before I have sex with you."');
    scene.text('"Funny enough that\'s what the other girls said, but in the end who wouldn\'t want to have sex with a rock star like me?"');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Answer him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('"Excuse me, but I need to go and throw up," you answer.');
    // TODO-QSP: dynamic text: "Don't play hard to get <<$pcs_nickname>>. Go and ask the other girls here about...
    scene.text(`"Don't play hard to get ${((s as any).pcs_nickname ?? 0)}. Go and ask the other girls here about how good of a fuck I am," he confidently replies.`);
    scene.text('"Yeah, I\'m not going to do that, you creep. As a matter of fact, I don\'t want to partake in this conversation anymore," you angrily say.');
    // TODO-QSP: dynamic text: He yells out as you turn around and walk away from him. "I'll be seeing you agai...
    scene.text(`He yells out as you turn around and walk away from him. "I'll be seeing you again soon ${((s as any).pcs_nickname ?? 0)}, but next time I would prefer seeing you without a single thread on you."`);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTValentin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  // TODO-QSP: dynamic text: You approach Valentin and he smiles and greets you. "Hi <<$pcs_nickname>>. Are y...
  scene.text(`You approach Valentin and he smiles and greets you. "Hi ${((s as any).pcs_nickname ?? 0)}. Are you enjoying yourself?"`);
  scene.text('You smile back at him. "Hi Valentin. Yeah, it\'s been pretty fun so far."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 1) {
    scene.actions([
      { label: 'How\'s the work on the motorcycle going?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You\'re curious how the work on his bike is progressing. "Last time I saw you, you were working hard on your motorcycle."');
    scene.text('He lets out a nervous laugh. "Well, I\'ve hit a snag and Eduard\'s been busy as of late, so I\'m waiting on him to help me out."');
    scene.text('"I hope you manage to get past the issue," you reply as Valentin begins to ramble about his motorcycle. "Hopefully I\'ll be done soon so I can finally go for a ride. I can\'t take not having my baby around."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Maybe you\'ll invite me for a ride?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"Maybe I can come along for a ride after you\'ve finished." you say teasingly.');
    scene.text('"Sure thing! I would love to take you on a ride someday," he happily answers.');
    scene.text('"She means your bike, not your dick!" Radomir jokes.');
    scene.text('Valentin shakes his head slightly. "Like she would ride anything of yours."');
    scene.text('You ignore Radomir\'s comment and interject before they keep going. "It\'s a deal then. I should be on my way now. Don\'t forget about your promise," you tell him as you move away.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Boast', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"I\'m pretty happy that we were able to pull it off. I wasn\'t too sure we would at first, but in the end it felt pretty good hearing the roars from the people when I pulled out the bottles," you tell him.');
    scene.text('He chuckles. "Yeah, it was a nice change of pace. Usually they make me go and get the booze as I look older than everyone else."');
    scene.text('"Must be annoying," you reply.');
    scene.text('"Not really. I don\'t mind, plus adults take me more seriously since most of them think I\'m in my twenties," he says.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'I would mind', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"I would mind," you say. "I\'m not trying to stir up anything here, but the others are just using you."');
    scene.text('"Maybe, but with my rugged manly looks and fake ID, I can get into places I usually wouldn\'t be able to enter, so it has its advantages too," he replies. "Besides, you\'ll quickly learn that everyone uses everyone sometimes. We all use each other and help each other, because at the end of the day all we have is each other and we stand up for each other."');
    scene.text('"I guess so…" you reply.');
    scene.text('He laughs a little. "Yeah, not to mention it helps me pick up college chicks and older women who are lot more experienced, with huge sexual appetites."');
    scene.text('You roll your eyes slightly. "I think that\'s enough for now…" you cut him off. "I\'ll be seeing you around," you say as you move away from him.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterTArkadi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big156.jpg');
  scene.text('You notice Arkadi doesn\'t seem to be all that happy as he listens to Radomir. You approach him, wanting to cheer him up. "What\'s up, Arkadi?"');
  scene.text('Arkadi looks at you and spits on the side. "Nothing much. Just another boring day here in Pavlovsk. Man, this place sucks monkey balls."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Don\'t say that', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('Trying to cheer him up, you say "Look, I know you just moved here and it\'s not like in the city, but I\'m sure…"');
    scene.text('Arkadi cuts you off. "I see what you\'re trying to do and it\'s not going to work. This place sucks and nothing here can compare to the city."');
    scene.text('"What\'s missing?" you ask as you\'re genuinely curious as to what he means.');
    scene.text('ArkadI thinks about it before finally answering. "Freedom to do whatever. Every day here is the same. In the city, there was always something different happening."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'All this talk about the city', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"Isn\'t there anything you like here?" you ask.');
    scene.text('He shrugs. "It\'s nice playing with the band, but I wish we were doing it in the city. I can\'t wait until school is over and we can all move to the city."');
    scene.text('You sigh. "All this talk about the city. You know if you focused on what is here, maybe you could make things better here?"');
    scene.text('"You\'re right. I shouldn\'t think too much about it. It\'s just that I miss my friends back in the city. They\'re quite the rowdy bunch."');
    scene.text('"They sound like fun," you say. "It would be fun to meet them."');
    scene.text('"I\'m sure they would like that too," he replies. "Who knows, if an opportunity presents itself, I might take you to meet them someday."');
    scene.text('"Really?" you smile. "I would like that. It would be fun meeting your old friends too," you say as he nods approvingly. You chat for a while longer before you decide it\'s time to move on.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTAnushka(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  // TODO-QSP: dynamic text: You sit on the sofa next to Anushka, who gives you a huge grin. "Hey <<$pcs_nick...
  scene.text(`You sit on the sofa next to Anushka, who gives you a huge grin. "Hey ${((s as any).pcs_nickname ?? 0)}, what have you been up to?" You notice a blunt that's been placed on the table.`);
  scene.text('You shrug your shoulders. "Nothing much. Been talking to people, having fun."');
  scene.text('"Good, I hope none of the guys tried to hump your leg. They can be a pain in the ass sometimes," she says.');
  scene.text('"No, no, they\'ve all been very welcoming," you answer as you eye the blunt again.');
  scene.text('"I see that you\'ve been eyeing that blunt for a while now. Want a smoke?" she asks as she looks in the direction of the blunt.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/smokemakeout.jpg');
    scene.text('You shake your head. "No, I\'m not in the mood for that. I was just surprised there was anything left."');
    scene.text('Anushka smiles, and if to prove you right, lights it up and takes a long drag before she grabs Alyona and they kiss or share smoke, or a bit of both."');
    scene.text('Feeling a bit awkward watching it, you decide to leave. "Well, I should go mingle. You girls have fun." You\'re not sure if they heard you or even care.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/smoking.jpg');
    scene.text('You happily nod your head and Anushka smiles and reaches for the blunt. She wraps her lips around it, lights it and inhales the smoke. As she exhales, she passes it over to you.');
    scene.text('You excitingly grab hold of the blunt and repeat what Anushka did. You inhale the smoke deeply and can feel your lungs fill up with smoke. You can almost instantly feel the weed kick in as you start to feel a bit light-headed.');
    scene.text('You pass it to Alyona, who also inhales deep and shotguns the smoke to Anushka. After a while, you begin to relax and start talking about nothing and everything with Anushka and Alyona. You\'re laughing almost all the time and sometimes you\'re even having a hard time to catch a breath.');
    // TODO-QSP: dynamic text: Anushka then gets your attention. "Let me show you something fun, <<$pcs_nicknam...
    scene.text(`Anushka then gets your attention. "Let me show you something fun, ${((s as any).pcs_nickname ?? 0)}!"`);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 1);
    (s as any).narkweed = ((s as any).narkweed ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sounds interesting', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/smokekiss.jpg');
    scene.text('You nod, intrigued by what Anushka wants to show you.');
    scene.text('Anushka takes a hit of the blunt and holds the smoke in her mouth while she signals you to approach her. As you come closer, she immediately presses her lips onto yours and opens her mouth, exhaling while you begin to suck the smoke in.');
    scene.text('You feel your lungs fill up with smoke again as your lips are still pressed together. Once there\'s no more smoke to exhale, Anushka pulls her head back with a smile. "Did you like it?"');
    scene.text('You nod. "Yeah, that was amazing…" you reply. You sit spaced out for a while as Alyona and Anushka trade smoke and by the look of it, tongues. A little later, you feel the need to get up and move around.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTAlyona(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/nushaly.jpg');
  scene.text('You sit on the sofa next to Alyona while Anushka smiles at you and takes another long hit of the joint she\'s smoking. "So I\'ve heard about that little adventure of yours earlier today. Must\'ve been exciting."');
  scene.text('You nod. "Yeah, it was fun. It was a pretty wild thing to do."');
  scene.text('"I would\'ve gone in and knocked the clerk out to be honest," Alyona looks at you seriously. "He wouldn\'t dare to report it. Think about it. A man getting beaten up by a girl? The police would have laughed at him."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'That\'s a bit too violent for me', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('You\'re taken back a little by Alyona\'s statement. "Yeah if I tried that, he would have likely beat my ass."');
    scene.text('She laughs. "I guess so… Your way works as well." She goes silent for a minute as if she\'s thinking about something before she looks up and says "I need to tell Lena that we need to do a bigger score next time."');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'You should ask Lena', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('You try to encourage Alyona. "You should tell her. I\'m sure she would be up for a bigger score."');
    scene.text('Alyona beams. "Yeah, maybe I should. It would be more exciting than waiting around for it."');
    scene.text('"Yeah, I don\'t think there\'s a reason why she should say no… I mean as long as you don\'t go and knock anyone down," you wink.');
    scene.text('Alyona begins to laugh and the two of you sit on the sofa and chat for a while before you get up and move away from her.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTEkaterina(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big145.jpg');
  scene.text('Seeing Katyusha standing by herself, you walk over. "Is everything okay?" you ask as you approach.');
  scene.text('Katyusha looks your way and nods. "Yeah, I was just thinking about this poor quality vodka you brought back with you."');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Is that so?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big145.jpg');
    scene.text('You\'re a bit surprised by her brashness. "W-We did our best to grab what we could. This was the best stuff the shop had," you answer.');
    scene.text('Katyusha looks coldly at you. "Don\'t get me wrong, it\'s enough to get drunk on, but it tastes like horse piss."');
    scene.text('"Do you know what trouble we went through to get hold of it?" you unsettlingly answer.');
    scene.text('"Yeah, I heard the story. Couple of girls making out while another steals it. Yeah, sound terrifying…" she answers nonchalantly.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave her alone', goto: ['gopnik_initiation', 'lounge'] },
      { label: 'Why don\'t you bring it the next time?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big145.jpg');
    scene.text('Against your better judgment, you decide to press on. "Well next time, you can bring the liquor and the rest of us can decide if it\'s good enough."');
    scene.text('Katyusha shrugs her shoulders. "Sure, my father has lots of it at home and I\'m sure he doesn\'t even notice when I take some."');
    scene.text('"I look forward to it," you sourly answer.');
    scene.text('"Either way, it\'s enough to get drunk, so it will suffice this time," she continues as she takes a drink.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Thanks, I guess', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big145.jpg');
    scene.text('"Hmmph. It still sounds like you\'re really condescending," you tell her.');
    scene.text('Katyusha begins to smile. "Oh, you must\'ve misunderstood me. I\'m quite pleased. There\'s booze here and the guys are fine too. They aren\'t lookers, but they\'ll do."');
    scene.text('You relax a little and the two of you chat for a while.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A145', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['gopnik_initiation', 'lounge'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGopnikSlut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).gopnik_slut = 1;
  (s as any).grupvalue[1] = 0;
  (s as any).grupvalue[2] = 0;
  (s as any).grupvalue[3] = 0;
  if (((s as any).grupTipe ?? 0) === 1) {
    (s as any).grupvalue[1] = Math.floor(Math.random() * 101) + 500;
  }
  if (((s as any).grupTipe ?? 0) === 2) {
    (s as any).grupvalue[2] = Math.floor(Math.random() * 101) + 500;
  }
  if (((s as any).grupTipe ?? 0) === 3) {
    (s as any).grupvalue[3] = Math.floor(Math.random() * 101) + 500;
  }
  (s as any).old_grupvalue[1] = qspUntranslated(s, "grupvalue[1]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[2] = qspUntranslated(s, "grupvalue[2]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[3] = qspUntranslated(s, "grupvalue[3]", { location: "gopnik_initiation" });
  (s as any).old_grupvalue[4] = qspUntranslated(s, "grupvalue[4]", { location: "gopnik_initiation" });
  (s as any).grupTipe = 4;
  qspCall(s, 'gopnik_initiation', 'group_rel_change', 'gopniks', 5);
  scene.img('images/locations/pavlovsk/school/oldschool/hall.jpg');
  scene.text('You follow Lena and Lera, who don\'t really talk to you. You get the feeling you might have made a mistake, but you agreed to be the party slut and you\'re not sure they would even let you back out now. Once you\'re at the old school, they slip through the busted front door and head down the main hallway that leads to the old offices and teacher\'s lounge.');
  scene.actions([
    { label: 'Join the party', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/main.jpg');
    scene.text('As you get closer, you can already hear music playing and people talking loudly. Once inside, you see all the gopniks from school, along with a few you don\'t know. Some are from the other year\'s class and others look like they\'ve already graduated or dropped out. Many of them cast hungry eyes on you and you\'re even less sure about this, but you also know it\'s too late to change your mind.');
    scene.text('Lena walks over to Vitek while Lera motions for you to stop. It seems the gopniks have been busy. Several of the windows have been busted out and covered with boards and graffiti covers the walls, a large potbellied stove is near one of the boarded up windows and several tables in various styles and conditions litter the room, along with a motley crew of chairs and even a few old couches. Candles seem to be the main source of light, while an old boombox plays music. Doors lead off to other parts of the building.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Party favor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/1.jpg');
    scene.text('As you look around, you notice Vitek giving you a hard stare, Lena seemingly having filled him in on your unwillinginess to steal and your deal to still join. He doesn\'t look remotely pleased as he walks over to you and roughly grabs a handful of your hair. He pushes you forward, guiding you painfully by your hair as he talks. At some point, someone cuts the music and his voice carries clearly around the room.');
    // TODO-QSP: dynamic text: "It seems little <<$pcs_nickname>> here is too good to steal or even help steal....
    scene.text(`"It seems little ${((s as any).pcs_nickname ?? 0)} here is too good to steal or even help steal." You hear a chorus of booing, hisses and threats.`);
    qspCall(s, 'pain', '', 2, 'hair', 'twist');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In position', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/2.jpg');
    // TODO-QSP: dynamic text: He painfully pushes you up against the largest and sturdiest of the tables, then...
    scene.text(`He painfully pushes you up against the largest and sturdiest of the tables, then lifts you by your hair, forcing you to crawl up on the table. Once on the table, he makes you get down on your hands and knees before he turns to address the crowd. "I know, I know. I wondered why my sister brought her as well, but it turns out that while our little ${((s as any).pcs_nickname ?? 0)} might not want to be one of us, she is willing to show us all a good time. She has offered herself up to be the party slut, if we will take her in. We can do any and everything we want to her. So what do you say guys?"`);
    scene.text('There\'s an awkward silence before the guys roar with approval. You overhear a number of crude comments that you wish you hadn\'t.');
    qspCall(s, 'pain', '', 2, 'hair', 'twist');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The rules', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/3.jpg');
    scene.text('Vitek laughs loudly. "The ayes have it." He walks around behind you and roughly rips at your clothes until your ass and pussy are on fully display to the whole room before he moves back around and grabs you hard by the neck, choking you as he does. His grip is so tight that you can hardly breathe as he leans in close to you and whispers in your ear.');
    scene.text('"Okay slut, here\'s the rules. You\'re our personal fuck doll that will happily do anything we like, and will like it and not complain or I\'ll make this a living nightmare for you. Understand?" You nod your head, unable to speak as your eyes begin to water. He grins at you. "Good girl."');
    qspCall(s, 'pain', '', 2, 'neck', 'bind');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Display', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/4.jpg');
    scene.text('He lets go of you and walks away. The music starts back up, plastic cups are passed around and drinks are shared. You stay as you are as the party continues around you, your ass and pussy on full display. It seems most are not paying a lot of attention to you, at least not yet. Someone occasionally takes a look or slaps your ass, but you\'re mostly ignored. Maybe this won\'t be so bad after all.');
    qspCall(s, 'arousal', 'flash', 5, 'group', 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'arousal', 'flash', (-5), 'group', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Learning your place', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A9');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/5.jpg');
    scene.text('Of course, that\'s Lena when comes over holding a cane. She takes a few practice swings with it as Lera removes your top. Lena moves around behind you and you feel a stinging sensation on your ass as she strikes you, which makes you yelp out loud, eliciting laughs from those around you. Lena spanks you several more times before Lera wants a turn, which eventually results in most of the girls coming over to take a turn as well. Before long, your ass is red and stinging.');
    scene.text('As the girls take turns spanking you, Vitek jumps up on the table and pulls his dick out of his pants before he roughly grabs you hair and shoves his dick down your throat. He starts fucking your face, barely letting up enough for you to breathe while the girls keep spanking you.');
    qspCall(s, 'arousal', 'foreplay', 10, ((s as any).npcID ?? 0), 'group', 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'arousal', 'bj', (-10), ((s as any).npcID ?? 0), 'group', 'rough', 'sub', 'humiliation', 'deepthroat');
    qspCall(s, 'pain', '', 10, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Getting you loose', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A20', 'a');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/6.jpg');
    scene.text('Vitek doesn\'t even try and hold back. He quickly blows his load down your throat, giving you no choice but to swallow it. With that done, he tucks his dick back in his pants and jumps off the table. The girls have stopped spanking you, but you feel fingers rubbing against your slit as Lena says "We need to get you wet and loosened up." She then slides a few of her fingers inside you before she shoves her whole hand up into your pussy and starts fisting you.');
    qspCall(s, 'arousal', 'vaginal_fist', 5, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'lesbian', 'exhibitionism');
    qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Full display', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/7.jpg');
    scene.text('After several minutes of fisting you, Lena pulls her hand out before she and Lera grab the rest of your clothes and completely strip you naked. Pulling you off the table, they lead you over to a pillar where they push your back to it. "Stay right here, bunny. Don\'t move," Lera says with a laugh before they both walk away to get another drink.');
    scene.text('You stand in place completely naked as some people check you out and others laugh. One of them even takes his phone out and takes some pictures of you. Others join in and everyone is eventually taking pictures of you.');
    qspCall(s, 'arousal', 'foreplay', 10, ((s as any).npcID1 ?? 0), 'group', 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The boys', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/8.jpg');
    scene.text('Once they get bored taking your picture, a few of the guys come over and start fondling your naked body. One of them pinches your nipple hard before they start taking turns roughly fingering your pussy, squeezing your tits and pinching your nipples. After a while, you\'ve lost track of how many guys have manhandled you.');
    (s as any).temp_i = 0;
    // TODO-QSP: :guys_manhandling_loop
    qspCall(s, 'npcgeneratec', '', 0, 'A guy from the disco', Math.floor(Math.random() * 4) + 17, 1, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 2);
    // TODO-QSP: gs 'arousal', 'vaginal_finger', 1, $npcID[1+temp_i], 'group', 'rough', 'sub', 'humiliation', 'exhibi...
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < 5) {
      // TODO-QSP: jump 'guys_manhandling_loop'
    }
    qspCall(s, 'pain', '', 5, 'nipples', 'pinch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lena', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/9.jpg');
    scene.text('Lena comes back over and drives the guys off. "My turn boys." She reaches down and pinches your clit hard before she alternates between rubbing your clit, slipping her finger into you to finger bang you and pinching your clit. The switching between pleasure and pain is maddening.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'lesbian', 'exhibitionism');
    qspCall(s, 'pain', '', 5, 'clitoris', 'pinch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lera', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A21', 'b');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/10.jpg');
    scene.text('Once Lena gets bored with you, Lera takes a turn. She rubs your clit and really starts to get you turned on before she starts finger banging you while she sucks on your nipples. She then bites your nipples as she keeps finger banging you.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, ((s as any).npcID2 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'lesbian', 'exhibitionism');
    qspCall(s, 'pain', '', 5, 'bite', 'pinch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your back', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A157', 'c');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/11.jpg');
    scene.text('"Enough already, I want to fuck her." Roman pushes Lera aside, who shoves him back. Roman in turn shoves her harder, almost knocking her to the floor. For a moment, you think a fight might break out before Vitek\'s voice cuts through. "Enough you two!"');
    scene.text('Roman then drags you over to the table again and pushes you down on it. As you lay on your back, he raises your legs and spreads them apart before you feel his cock plunge deep into your pussy as another cock is shoved into your mouth. Before long, there is a line of guys taking turns fucking your pussy or your mouth. You can\'t even keep up with who is fucking you.');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID3 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'exhibitionism');
    // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[rand(1, 5)], 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'de...
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Flipped over', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11', 'd');
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/12.jpg');
    scene.text('You see Vasily approaching and he takes one look at you before he roughly grabs you and flips you over onto your stomach so you\'re bent over the table. "I don\'t want to look at the slut\'s face. Now this is the view every bitch should show you." He plunges his dick into your pussy and starts pounding away while another cock is shoved in your mouth and it\'s back to the guys standing in line taking turns.');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID4 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'exhibitionism');
    // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[rand(1, 5)], 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'de...
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Vitek\'s claim', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/13.jpg');
    scene.text('The non-stop gangbang is suddenly interrupted as Vitek\'s voice cuts through. "All right back off, I\'m ready for round two." The other guys stop and make space for him. He moves up behind you and rubs his dick against your asshole before he shoves his cock up your ass.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 10, ((s as any).npcID ?? 0), 'group', 'rough', 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'pain', '', 5, 'asshole', 'tear');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal train', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/14.jpg');
    scene.text('Sometime later, Vitek pulls out and walks around the table. "Next!" Before he even finishes saying it, you feel another cock being shoved up your ass. As the next guy starts pounding your ass, Vitek holds you by the hair and jerks off on your face, coating your face with his cum.');
    qspCall(s, 'arousal', 'anal', 15, ((s as any).npcID ?? 0), 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'exhibitionism');
    // TODO-QSP: gs 'arousal', 'anal', 5, $npcID[rand(1, 5)], 'group', 'rough', 'sub', 'humiliation', 'gangbang', 'ex...
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum dumpster', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/15.jpg');
    scene.text('Most of the guys seem to be having trouble holding out much longer, so you are dragged off the table and forced to kneel by Lena, who slaps you across the face. "Open your mouth and stick out your tongue, slut! You\'re going to play cum dumpster." The guys line up and take turns blowing their loads over your face. Some can\'t wait and cum on the table instead.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'exhibitionism');
    // TODO-QSP: gs 'cum_call', 'face', $npcID[1]
    // TODO-QSP: gs 'cum_call', 'face', $npcID[2]
    // TODO-QSP: gs 'cum_call', 'face', $npcID[3]
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/slut/16.jpg');
    scene.text('Once the last guy has finished, Lena grabs you again. She pulls you over to the table and makes you lick up every last drop of cum from it.');
    scene.text('By the time you finish licking the table clean, you notice just about everyone has left and it\'s just you, Lena and Lera left. "You got what you wanted, slut. I hope you\'re happy, because this is your new life." Lena tells you.');
    scene.text('"Look at the bright side, bunny. At least you\'re only the gopniks slut. At least for now," she adds with a laugh. The two then leave you to clean yourself up and try and salavage your ripped clothes. You do your best to get dressed again before leaving yourself, wondering if you just make the biggest mistake of your life.');
    qspCall(s, 'fame', 'pav', 'sex', 25);
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0), 'group', 'rough', 'sub', 'humiliation', 'exhibitionism');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID[4]
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $npcID[5]
    qspCall(s, 'cum_cleanup', '', 4);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
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
  const arg = s.locArg;
  switch (arg) {
    case 'initiation':
      enterInitiation(s, scene);
      break;
    case 'walkoff':
      enterWalkoff(s, scene);
      break;
    case 'somethingelse':
      enterSomethingelse(s, scene);
      break;
    case 'agreesteal':
      enterAgreesteal(s, scene);
      break;
    case 'doanything':
      enterDoanything(s, scene);
      break;
    case 'noslut':
      enterNoslut(s, scene);
      break;
    case 'gopnik party':
      enterGopnikParty(s, scene);
      break;
    case 'explore':
      enterExplore(s, scene);
      break;
    case 'tVitek':
      enterTVitek(s, scene);
      break;
    case 'tDan':
      enterTDan(s, scene);
      break;
    case 'tVasily':
      enterTVasily(s, scene);
      break;
    case 'tLavrenti':
      enterTLavrenti(s, scene);
      break;
    case 'tLena':
      enterTLena(s, scene);
      break;
    case 'tLera':
      enterTLera(s, scene);
      break;
    case 'tPauline':
      enterTPauline(s, scene);
      break;
    case 'Niko':
      enterNiko(s, scene);
      break;
    case 'office':
      enterOffice(s, scene);
      break;
    case 'lounge':
      enterLounge(s, scene);
      break;
    case 'tRadomir':
      enterTRadomir(s, scene);
      break;
    case 'tValentin':
      enterTValentin(s, scene);
      break;
    case 'tArkadi':
      enterTArkadi(s, scene);
      break;
    case 'tAnushka':
      enterTAnushka(s, scene);
      break;
    case 'tAlyona':
      enterTAlyona(s, scene);
      break;
    case 'tEkaterina':
      enterTEkaterina(s, scene);
      break;
    case 'gopnik slut':
      enterGopnikSlut(s, scene);
      break;
    default:
      enterInitiation(s, scene);
      break;
  }
}

export const gopnik_initiation: LocationDef = {
  name: 'gopnik_initiation',
  title: 'You meet Lena by the apartment garages and find her and Lera',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You meet Lena by the apartment garages and find her and Lera already there, squatting and smoking while they wait for you. When you get close, Lena stands up. "You ready little bunny?" Before you can even answer, she starts off down the street with Lera in tow, talking as she goes. "We\'re going to that little liquor store in town."'],
  enter: enter,
};
