import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWatercooler(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'watercooler');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (Math.floor(Math.random() * 4) + 1 === 1) {
    scene.img('images/locations/pavlovsk/school/building/watercoolergossip.jpg');
    scene.text('You stop at the water cooler to get a drink. Several nearby students are gossiping with each other about a variety of topics.');
    qspCall(s, 'gschool_gossip', 'mixed');
  } else {
    scene.img('images/locations/pavlovsk/school/building/watercooler.jpg');
    scene.text('You stop at the water cooler to get a drink, but no one else is around.');
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).breaktype ?? 0) === 'long') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'break'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
  } },
    { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(s, 'beverage', 'water_stats');
    scene.text('<br>You drink some water.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).breaktype ?? 0) === 'long') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'break'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoysRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'boys_restroom');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('The restroom is empty.');
  qspCall(s, 'gschool_break', 'restroom_actions');
  if (Math.floor(Math.random() * 3) + 0 === 2) {
    scene.actions([{ label: 'Continue', goto: ['gschool_break', 'boys_restroom_events'] }]);
  }
  scene.build();
}

function enterGirlsRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'girls_restroom');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
  scene.text('The restroom is empty.');
  qspCall(s, 'gschool_break', 'restroom_actions');
  if (Math.floor(Math.random() * 3) + 0 === 2) {
    scene.actions([{ label: 'Continue', goto: ['gschool_break', 'girls_restroom_events'] }]);
  }
  scene.build();
}

function enterRestroomActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_van', 'pblc_pee');
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 5) + 0 === 0) {
      scene.actions([{ label: 'Continue', goto: ['gschool_break', 'smoke2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_break', 'smoke1'] }]);
    }
  } },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan', 'no_prost');
  scene.actions([
    { label: 'Leave the restroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).breaktype ?? 0) === 'long') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'break'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
  } },
    { label: 'Use the mirrors', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterGirlsRestroomEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'girls_restroom');
  qspCall(s, 'stat', '');
  (s as any).girls_event_rand = Math.floor(Math.random() * 22) + 1;
  if (((s as any).girls_event_rand ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/school/lunch/sex/teacher1.mp4');
    scene.text('You walk into the girls bathroom and begin washing your hands when you hear a strange noise coming from the last stall. You sneak over to it, and find the stall door partially open.');
    scene.text('Peering inside, you see Mr. Kuznetsov standing next to the toilet with his hand on the back of Miss Orlov\'s head as she sucks him off. Her head bobs up and down his glistening cock, strands of saliva and likely precum hanging from her mouth.');
    scene.text('She is sitting on the toilet with her skirt pulled up and her panties down around her ankles as she vigorously rubs her clit.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/teacher2.mp4');
    scene.text('After sucking his dick for several minutes, they change positions. Mr. Kuznetsov sits on the toilet before Miss Orlov straddles his lap. You duck back a moment to make sure you aren\'t seen before you risk taking another peek.');
    scene.text('She\'s riding him hard, taking his cock deep into her as he reaches around and fondles her breasts. Her juices glisten on his dick each time she rises before slamming back down again.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave before you\'re caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
      { label: 'Continue to watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/teacher3.mp4');
    scene.text('Several minutes pass before he lifts her off and they switch positions again. She stands on one side of the toilet slightly bent over, her face and hands pressed against the side of the stall as he lines up his dick and slowly pushes it into her ass, eliciting a moan from both of them.');
    scene.text('"Fuck Arina, your ass is so fucking tight!" he grunts before he starts thrusting.');
    scene.text('He starts slowly going faster and harder, her breasts bouncing in rhythm with each thrust. From the sounds of their moaning, you can tell they\'re both getting close to orgasm, so you decide it\'s time to leave before you get caught.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave before you\'re caught', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/occupied.jpg');
    scene.text('You head into the girls bathroom and find the gopnik girls hanging out. One is in each of the stalls, standing on the toilets so they can look over the top of the doors. You can tell they\'re being bitches and blocking any of the other girls from using the toilets. Luckily, you just need to wash your hands, so you\'re not bothered by it.');
    scene.text('Lera spots you and smiles. "Occupied! You\'ll have to wait."');
    scene.text('You know it\'s pointless to reply, so you just shrug, finish washing your hands, and head back outside.');
    if (((s as any).girls_event_rand ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/school/lunch/pose.jpg');
      scene.text('You head into the girls bathroom. Inside, you find Christina laying across several of the sinks in a somewhat sexy pose as Lina snaps pictures of her with her phone. After taking a picture, Lina shows it to Christina.');
      scene.text('"Not good enough! It needs to be perfect! When he sees it, his dick needs to get so hard it rips his pants!"');
      scene.text('As you leave, you wonder who Christina wants to send such a photo to since you haven\'t heard about her dating anyone.');
      qspCall(s, 'gschool_break', 'restroom_actions');
    } else {
      scene.img('images/locations/pavlovsk/school/lunch/sisters.jpg');
      // TODO-QSP: dynamic text: As you walk into the girls bathroom, Katja grabs you and drags you over against ...
      scene.text(`As you walk into the girls bathroom, Katja grabs you and drags you over against the wall. "Come on ${((s as any).pcs_nickname ?? 0)}, pose for a photo with us."`);
      scene.text('She pulls you in close on her right side and wraps one of her legs halfway around you as you hold it. Vicky wraps an arm and almost a leg around Katja from the left and the three of you do your best to strike several sexy poses as Lizaveta takes your picture.');
      scene.text('After several such pictures, the Meynold sisters each kiss you on the cheek before hurrying out. Lizaveta is a bit slower, and gives you a knowing smile before leaving as well. You wonder just what Lizaveta knows and, being the gossip that she is, who else does as you finish your business.');
      qspCall(s, 'gschool_break', 'restroom_actions');
      if (((s as any).girls_event_rand ?? 0) <= 10) {
        scene.img('images/locations/pavlovsk/school/bathroom/girlsgossip\'+rand(1, 2)+\'.jpg');
        scene.text('When you enter the restroom, you find a group of girls clustered together chatting about the latest gossip or whatever has caught their interest of late.');
        scene.text('As you go about your business, you overhear them saying;');
        qspCall(s, 'gschool_gossip', 'mixed');
        qspCall(s, 'gschool_break', 'restroom_actions');
      } else {
        scene.img('images/locations/pavlovsk/school/bathroom/girlspose\'+rand(1, 2)+\'.jpg');
        scene.text('When you enter the restroom, you see a group of girls clustered together taking turns posing as a group while one girl takes their picture. They do this over and over until every girl has her picture taken in a group and they all like the pictures.');
        qspCall(s, 'gschool_break', 'restroom_actions');
        if (((s as any).girls_event_rand ?? 0) === 12) {
          scene.img('images/locations/pavlovsk/school/bathroom/gopniks.jpg');
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('As you enter the restroom, you see Pauline, Lena and Lera hanging around the stalls, chatting and tormenting some of the other girls. You exchange smiles with them as you go about your business.');
          } else {
            scene.text('As you enter the restroom, you see Pauline, Lena and Lera hanging around the stalls, chatting and tormenting some of the other girls. As you go about your business, they start taunting you as well, but you know better than to say anything.');
            scene.text('You do your best to ignore them as you go about your business.');
          }
          qspCall(s, 'gschool_break', 'restroom_actions');
        } else {
          scene.img('images/locations/pavlovsk/school/bathroom/seemypanties.jpg');
          scene.text('As you enter the restroom, you see Anushka on her way out. She pauses long enough to pull up her skirt and show off her panties. "Do you think these are cute?"');
          scene.text('Not even fazed by her anymore, you just nod. "Yes, very cute."');
          scene.text('With that, she drops her skirt and leaves the restroom while you go about your business.');
          qspCall(s, 'arousal', 'erotic', 2);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'gschool_break', 'restroom_actions');
          if (((s as any).girls_event_rand ?? 0) === 14) {
            scene.img('images/locations/pavlovsk/school/bathroom/showass\'+rand(1, 2)+\'.jpg');
            scene.text('As you enter the restroom, you see three girls, one of them taking a picture of the other two. After a few pictures, the two having their pictures taken turn and raise their skirts to show their panty-clad asses to the third girl, who laughs and keeps taking their picture.');
            scene.text('They keep this up as you go about your business.');
            qspCall(s, 'arousal', 'erotic', 2);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'gschool_break', 'restroom_actions');
          } else {
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/school/bathroom/sweettalk1.jpg');
            if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches you as you come in, then bites her lower lip.');
              scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
              scene.text('She shakes her head. "No. That bitch Lera got me all worked up and then got herself in trouble, leaving me here with blue balls! How about you help me out with this little problem?"');
              scene.actions([
                { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sweettalk1.jpg');
    scene.text('You shake your head. "I can\'t help you out with that, but, um… Good luck!"');
    scene.text('She snorts and gives you a dirty look, so you do your best to ignore her and go about your business.');
    qspCall(s, 'gschool_break', 'restroom_actions');
  } },
                { label: 'Help her out', goto: ['gschool_break', 'lena_gop'] },
              ]);
            } else {
              scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches you as you come in, then narrows her eyes a little.');
              scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
              scene.text('She gives you an evil little smile. "That bitch Lera got me all worked up and then got herself in trouble, leaving me here with blue balls! Why don\'t you come over here and eat my pussy like a good little girl?"');
              qspCall(s, 'willpower', 'sex', 'resist');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You shake your head. "What?! No! I\'m not going to eat your pussy!"');
    scene.text('She takes a step towards you. "You better, if you know what\'s good for you."');
    scene.text('You know these gopnik girls are dangerous. Most of them like to fight for fun, and many of them carry knives.');
    scene.text('You\'re not sure how serious she is, but you\'re far enough away that you can just dash out of the restroom. She might come after you later, though, so you could also just do what she wants and avoid any trouble.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make a run for it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make a run for it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('Taking your chance, you turn and run out the door.');
    scene.text('"You better run far, bitch!" you hear her call after you.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', goto: ['gschool_break', 'lena_dom'] },
    ]);
  } },
                ]);
              }
              if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 5) {
                scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches you come in, then narrows her eyes a little.');
                scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
                scene.text('She gives you an evil little smile. "That bitch Lera got me all worked up and then got herself in trouble, leaving me here with blue balls. So get over here, get on your knees and eat my pussy before I beat your ass and make you do it!" she snarls as she spreads her legs open.');
                qspCall(s, 'willpower', 'cuni', 'resist');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You shake your head. "What?! No! I\'m not going to eat your pussy!"');
    scene.text('She takes a step towards you. "Well then, I guess I\'m going to work out my frustrations by kicking your face in."');
    scene.text('You know these gopnik girls are dangerous. Most of them like to fight for fun, and many of them carry knives.');
    scene.text('You\'re not sure how serious she is, but you\'re far enough away that you can just dash out of the restroom. She might come after you later, though, so you could also just do what she wants and avoid any trouble.');
    qspCall(s, 'willpower', 'cuni', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make a run for it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make a run for it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('Taking your chance, you turn and run out the door.');
    scene.text('"You can run, bitch, but I\'ll find you and kick your ass!" you hear her call after you.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', goto: ['gschool_break', 'lena_dom'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Submit', goto: ['gschool_break', 'lena_dom'] },
                ]);
              } else {
                scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches as you come in, then bites her lower lip.');
                scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
                scene.text('"Mind your own business, bitch!" she snarls.');
                scene.text('"I was just asking…" you reply, but she just ignores you and walks out.');
                qspCall(s, 'gschool_break', 'restroom_actions');
              }
              if (((s as any).girls_event_rand ?? 0) === 16  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).uniform_steal_day ?? 0) !== ((s as any).daystart ?? 0)) {
                qspCall(s, 'stat', '');
                scene.img('images/locations/pavlovsk/school/bathroom/girlspose1.jpg');
                if (((s as any).grupTipe ?? 0) === 4) {
                  scene.text('As you walk in, you see a group of gopnik girls standing around chatting. You know Lena, Lera, Pauline and Katyusha, but the others are from your brother\'s class.');
                  scene.text('They exchange causal greetings with you, but seem engrossed in their conversation.');
                  qspCall(s, 'gschool_break', 'restroom_actions');
                  scene.actions([
                    { label: 'Listen in', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/girlspose1.jpg');
    scene.text('You walk over to them to better hear what they\'re saying and quickly realize they\'re talking about a fight night. Apparently, they get together sometimes and fight each other for fun.');
    qspCall(s, 'gschool_break', 'restroom_actions');
  } },
                  ]);
                } else {
                  scene.text('As you walk in, you see a group of gopnik girls standing around chatting. It\'s obvious they\'re up to something as they turn as one to glare at you.');
                  scene.text('A chill run down your spine - you picked the wrong time to come to the bathroom. You know Lena, Lera, Pauline and Katyusha, but the others are from your brother\'s class.');
                  scene.text('Pauline takes a step towards you and in a menacing tone says "Leave. Now!" she snarls.');
                  scene.text('You know you should leave since you\'re no match for these girls, but you\'re also tired of the gopniks acting like they run the school.');
                  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Refuse', handler: (st: GameState) => {
    (s as any).uniform_steal_day = ((s as any).daystart ?? 0);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/girlspose1.jpg');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      scene.text('You decide to stand up to them. "No! I have as much right to be in this bathroom as you do. If you don\'t like it, then <i>you</i> leave!"');
      scene.text('Pauline gives you a dangerous smile. "Looks like this bitch needs to be taught a lesson. I say we beat the shit out of her, here and now!"');
      scene.text('Hearing that, you take a step back, but the other girls quickly surround you, giving you nowhere to go.');
      scene.text('As you start to look for a way to escape, Lena speaks up. "No. If we beat her now, the teachers will see the blood and bruises. We\'ll wait for her outside the school so no one asks any questions. Or help her."');
      scene.text('The other girls seem none to happy about waiting, but they understand the logic. For just a brief moment, you think you might have got a reprieve, even if only a temporary one before Lera steps up and grabs you by the hair.');
      scene.text('"Or we can teach her a lesson right now, and not leave any marks on her. At least none she\'ll show anyone. She needs to know what happens to little sluts that don\'t know their place! I\'ve got all the toys we need in my backpack…"');
      scene.text('Katyusha just shakes her head. "God, you\'re such a fucking dyke, Lera!"');
      scene.text('Lera lets go of you and steps towards Katyusha. "Fuck you, bitch!"');
      scene.text('As Katyusha steps towards Lera, Pauline gets between the two of them, dashing your hopes they might start fighting amongst themselves and allow you to escape. "Enough, both of you! Lera makes a good point though…"');
      scene.text('She looks at the rest of the girls. "So do we wait or teach her a lesson now?"');
      scene.text('After a brief exchange, they decide to do it now since they can always kick your ass later as well.');
      scene.actions([
        { label: 'Try to resist', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully1.jpg');
    scene.text('You try to pull away as they all start grabbing at you, but there are too many of them. Your only chance is to scream and hope someone hears you.');
    scene.text('Almost as if they can read your mind, Katyusha holds a knife up and places it against your cheek. "If you scream, I\'ll cut your face up so bad, not even your mother will recognize you!"');
    scene.text('You swallow hard - perhaps you should have left when you had the chance…');
    scene.text('Some roughly start pulling your clothes off, ripping them in the process, as the others grab toys, dildos and strapons out of Lera\'s pack. Once you\'re naked, they pull you down until you\'re laying on the floor, spread eagle and held in place.');
    scene.text('While one of the girls reaches over and smacks your pussy, one grabs your clit between her fingers and pinches it hard. You can\'t help but squeal in pain.');
    qspCall(s, 'pain', '', 3, 'clitoris', 'pinch');
    qspCall(s, 'arousal', 'foreplay', 2, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D2');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully2.jpg');
    scene.text('Several of the girls hold you down while Lera puts on one of the strapon harnesses with a rather large looking dildo attached.');
    scene.text('As she sits between your legs and scoots closer, she spits on your pussy and rubs the saliva around while grinning at you. "Some lubrication for you, slut."');
    // TODO-QSP: dynamic text: She then pushes the head of the dildo against your slit and shoves the <<dick>>c...
    scene.text(`She then pushes the head of the dildo against your slit and shoves the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo inside you before she grabs you by the thighs and pulls herself closer. As she fucks you with the dildo, the other girls make rude comments about how much you love it.`);
    qspCall(s, 'arousal', 'vaginal_strap', 2, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully3.jpg');
    scene.text('Lera gets frustrated at the position, complaining that she can\'t pound you, so she pulls out and stands up. "Get the slut up so I can piledrive this bitch!"');
    scene.text('The other girls lift your hips into the air, pulling your legs forward so your knees are almost against your shoulders as they hold your arms and legs in place.');
    scene.text('Once you\'re in a better position, Lera slides the dildo back inside your pussy and starts fucking you hard, making comments about how loose you are while the other girls laugh.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully4.jpg');
    scene.text('Lena puts on one of the large strapons and pushes Lera out of the way. "Let me show you how it\'s done."');
    // TODO-QSP: dynamic text: With that, she shoves the <<dick>>cm <<$dick_girth>> dildo into your pussy and, ...
    scene.text(`With that, she shoves the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into your pussy and, like Lera before her, starts hammering away at you. Unable to do anything, you just have to endure what the other girls are doing to you.`);
    scene.text('After a while, your cries start to get too loud, so someone covers your mouth to silence you.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 3, 'asshole', 'stretch');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully5.jpg');
    scene.text('Lena then pulls out. After a brief discussion, another girl, one of the younger ones, puts on the harness and lies down. "Come on slut, mount me."');
    // TODO-QSP: dynamic text: Not giving you a choice, the other girls pull you over to her and force you down...
    scene.text(`Not giving you a choice, the other girls pull you over to her and force you down onto the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo. A few of the other girls slap your ass hard to 'encourage' you.`);
    // TODO-QSP: dynamic text: Lera kneels down behind you and you feel her spit against your asshole. With onl...
    scene.text(`Lera kneels down behind you and you feel her spit against your asshole. With only a dribble of spit for lubrication, she shoves a ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo up your ass, the other girls adding their spit to the shaft of the dildo so it slides in a little easier.`);
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'arousal', 'anal_dildo', (-3), 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully6.jpg');
    scene.text('Pauline puts on the other harness before pulling the dildo out of your ass, much to your relief.');
    scene.text('"Give me that!" she barks. "If we\'re going to do this, then we should at least do it right!"');
    scene.text('Mounting the dildo to the harness, she kneels down behind you and shoves it back up your ass.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'arousal', 'anal_strap', (-3), 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully7.jpg');
    scene.text('The girl on the bottom finally has enough and pushes you off her dildo, but Pauline keeps fucking your ass as she slides out from under you.');
    scene.text('The other girls soon demand a turn, although none seem to want to use your pussy anymore. They all take turns wearing a strapon and fucking your ass.');
    qspCall(s, 'arousal', 'anal_strap', 10, 'humiliation', 'maso', 'gangbang', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'dispose');
    qspCall(s, 'underwear', 'dispose');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully8.jpg');
    scene.text('Your ass has been pounded so hard and so much it feels like it\'s on fire before they finally seem to get bored.');
    scene.text('Pauline reaches down and grabs you by the chin. "Next time we tell you to leave, you better fucking listen, slut!"');
    scene.text('With that, the girls leave, laughing and talking about you, but you\'re not paying attention. You crawl over into one of the stalls and curl up, waiting until you can no longer hear them.');
    scene.text('Once you\'re sure they\'re gone, you do your best to clean up, but that\'s when you notice they\'ve also stolen your clothes.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_break', 'naked_bathroom'] },
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
    } else {
      scene.text('You decide to stand up to them. "No! I have as much right to be in this bathroom as you do. If you don\'t like it, then <i>you</i> leave!"');
      scene.text('Pauline gives you a dangerous smile. "Looks like this bitch needs to be taught a lesson. I say we beat the shit out of her, here and now!"');
      scene.text('Hearing that, you take a step back, but the other girls quickly surround you, giving you nowhere to go.');
      scene.text('As you start to look for a way to escape, Lena speaks up. "No. If we beat her now, the teachers will see the blood and bruises. We\'ll wait for her outside the school so no one asks any questions. Or help her."');
      scene.text('The other girls seem none to happy about waiting, but they understand the logic. For just a brief moment, you think you might have got a reprieve, even if only a temporary one before Lera steps up and grabs you by the hair. "I don\'t care who sees her after we smash her fucking face in! We can teach her a lesson right now <i>and</i> beat her up later too!"');
      scene.text('After a brief exchange, the girls all agree with Lera\'s sadistic logic.');
      scene.actions([
        { label: 'Try to resist', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'dispose');
    qspCall(s, 'underwear', 'dispose');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/gbully8.jpg');
    scene.text('You try to pull away as they all start grabbing at you, but there are too many of them. Your only chance is to scream and hope someone hears you.');
    scene.text('Almost as if they can read minds, Katyusha holds a knife up and places it against your cheek. "If you scream, I\'ll cut your face up so bad, not even your own mother will recognize you!"');
    scene.text('You swallow hard, thinking you should have left when you had the chance…');
    scene.text('They all roughly start pulling your clothes off, ripping them as they do. Once stripped, they grab you by the hair and drag you over to one of the toilets.');
    scene.text('Easily overcoming your futile resistance, they proceed to dunk you, holding your head under the water until your lungs start to burn. When they finally let you up, you start coughing up toilet water.');
    scene.text('Laughing, they walk out of the bathroom with your clothes, leaving you naked on the floor.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_break', 'naked_bathroom'] },
    ]);
  } },
      ]);
    }
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                }
              } else {
                scene.actions([{ label: 'Continue', goto: ['gschool_break', 'girls_restroom'] }]);
              }
              scene.actions([
                { label: 'Agree', goto: ['gschool_break', 'lena_dom'] },
              ]);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'watercooler':
      enterWatercooler(s, scene);
      break;
    case 'boys_restroom':
      enterBoysRestroom(s, scene);
      break;
    case 'girls_restroom':
      enterGirlsRestroom(s, scene);
      break;
    case 'restroom_actions':
      enterRestroomActions(s, scene);
      break;
    case 'girls_restroom_events':
      enterGirlsRestroomEvents(s, scene);
      break;
    default:
      enterWatercooler(s, scene);
      break;
  }
}

export const gschool_break: LocationDef = {
  name: 'gschool_break',
  title: 'You stop at the water cooler to get a drink. Several nearby ',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'school_bathroom',
  description: ['You stop at the water cooler to get a drink. Several nearby students are gossiping with each other about a variety of topics.'],
  enter: enter,
};
