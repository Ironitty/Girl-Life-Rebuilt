import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWatercooler(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'watercooler');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
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
      if (((s as any).breaktype ?? 0) === 'first') {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
      }
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
      if (((s as any).breaktype ?? 0) === 'first') {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
      }
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
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
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
  if ((Math.floor(Math.random() * 3) + 0) === 2) {
    scene.actions([{ label: 'Continue', goto: ['gschool_break', 'girls_restroom_events'] }]);
  }
  scene.build();
}

function enterRestroomActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_van', 'pblc_pee');
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
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
      if (((s as any).breaktype ?? 0) === 'first') {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
      }
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
    if (((s as any).girls_event_rand ?? 0) === 2) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/lunch/occupied.jpg');
      scene.text('You head into the girls bathroom and find the gopnik girls hanging out. One is in each of the stalls, standing on the toilets so they can look over the top of the doors. You can tell they\'re being bitches and blocking any of the other girls from using the toilets. Luckily, you just need to wash your hands, so you\'re not bothered by it.');
      scene.text('Lera spots you and smiles. "Occupied! You\'ll have to wait."');
      scene.text('You know it\'s pointless to reply, so you just shrug, finish washing your hands, and head back outside.');
      scene.actions([
        { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).girls_event_rand ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/school/lunch/pose.jpg');
        scene.text('You head into the girls bathroom. Inside, you find Christina laying across several of the sinks in a somewhat sexy pose as Lina snaps pictures of her with her phone. After taking a picture, Lina shows it to Christina.');
        scene.text('"Not good enough! It needs to be perfect! When he sees it, his dick needs to get so hard it rips his pants!"');
        scene.text('As you leave, you wonder who Christina wants to send such a photo to since you haven\'t heard about her dating anyone.');
        qspCall(s, 'gschool_break', 'restroom_actions');
      } else {
        if (((s as any).girls_event_rand ?? 0) === 4  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A15'] >= 60  &&  (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 0)) {
          scene.img('images/locations/pavlovsk/school/lunch/sisters.jpg');
          // TODO-QSP: dynamic text: As you walk into the girls bathroom, Katja grabs you and drags you over against ...
          scene.text(`As you walk into the girls bathroom, Katja grabs you and drags you over against the wall. "Come on ${((s as any).pcs_nickname ?? 0)}, pose for a photo with us."`);
          scene.text('She pulls you in close on her right side and wraps one of her legs halfway around you as you hold it. Vicky wraps an arm and almost a leg around Katja from the left and the three of you do your best to strike several sexy poses as Lizaveta takes your picture.');
          scene.text('After several such pictures, the Meynold sisters each kiss you on the cheek before hurrying out. Lizaveta is a bit slower, and gives you a knowing smile before leaving as well. You wonder just what Lizaveta knows and, being the gossip that she is, who else does as you finish your business.');
          qspCall(s, 'gschool_break', 'restroom_actions');
        } else {
          if (((s as any).girls_event_rand ?? 0) <= 10) {
            scene.img('images/locations/pavlovsk/school/bathroom/girlsgossip\'+rand(1, 2)+\'.jpg');
            scene.text('When you enter the restroom, you find a group of girls clustered together chatting about the latest gossip or whatever has caught their interest of late.');
            scene.text('As you go about your business, you overhear them saying;');
            qspCall(s, 'gschool_gossip', 'mixed');
            qspCall(s, 'gschool_break', 'restroom_actions');
          } else {
            if (((s as any).girls_event_rand ?? 0) === 11) {
              scene.img('images/locations/pavlovsk/school/bathroom/girlspose\'+rand(1, 2)+\'.jpg');
              scene.text('When you enter the restroom, you see a group of girls clustered together taking turns posing as a group while one girl takes their picture. They do this over and over until every girl has her picture taken in a group and they all like the pictures.');
              qspCall(s, 'gschool_break', 'restroom_actions');
            } else {
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
                if (((s as any).girls_event_rand ?? 0) === 13) {
                  scene.img('images/locations/pavlovsk/school/bathroom/seemypanties.jpg');
                  scene.text('As you enter the restroom, you see Anushka on her way out. She pauses long enough to pull up her skirt and show off her panties. "Do you think these are cute?"');
                  scene.text('Not even fazed by her anymore, you just nod. "Yes, very cute."');
                  scene.text('With that, she drops her skirt and leaves the restroom while you go about your business.');
                  qspCall(s, 'arousal', 'erotic', 2);
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'gschool_break', 'restroom_actions');
                } else {
                  if (((s as any).girls_event_rand ?? 0) === 14) {
                    scene.img('images/locations/pavlovsk/school/bathroom/showass\'+rand(1, 2)+\'.jpg');
                    scene.text('As you enter the restroom, you see three girls, one of them taking a picture of the other two. After a few pictures, the two having their pictures taken turn and raise their skirts to show their panty-clad asses to the third girl, who laughs and keeps taking their picture.');
                    scene.text('They keep this up as you go about your business.');
                    qspCall(s, 'arousal', 'erotic', 2);
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'gschool_break', 'restroom_actions');
                  } else {
                    if (((s as any).girls_event_rand ?? 0) === 15  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
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
                        if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
                          scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches you as you come in, then narrows her eyes a little.');
                          scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
                          scene.text('She gives you an evil little smile. "That bitch Lera got me all worked up and then got herself in trouble, leaving me here with blue balls! Why don\'t you come over here and eat my pussy like a good little girl?"');
                          qspCall(s, 'willpower', 'sex', 'resist');
                          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                            scene.actions([
                              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                            ]);
                          } else {
                            scene.actions([
                              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make a run for it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
                          scene.actions([
                            { label: 'Agree', goto: ['gschool_break', 'lena_dom'] },
                          ]);
                        } else {
                          if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 5) {
                            scene.text('As you enter the bathroom, you see Lena standing in the corner. She watches you come in, then narrows her eyes a little.');
                            scene.text('"You okay, Lena?" you ask. "You\'re looking a bit flushed."');
                            scene.text('She gives you an evil little smile. "That bitch Lera got me all worked up and then got herself in trouble, leaving me here with blue balls. So get over here, get on your knees and eat my pussy before I beat your ass and make you do it!" she snarls as she spreads her legs open.');
                            qspCall(s, 'willpower', 'cuni', 'resist');
                            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                              scene.actions([
                                { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                              ]);
                            } else {
                              scene.actions([
                                { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make a run for it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
                        }
                      }
                    } else {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                            ]);
                          } else {
                            scene.actions([
                              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
  scene.build();
}

function enterBoysRestroomEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_break', 'boys_restroom');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  (s as any).boys_event_rand = 0;
  if (((s as any).boys_event_rand ?? 0) <= 2) {
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You enter the boys bathroom and see several boys using the urinals or sinks. A few of them are also standing by the windows, smoking. When they notice you, some get embarrassed or seem amused.');
    scene.text('One of the boys from your brother\'s class tries to confront you. "What are you doing in here? This is the boy\'s restroom."');
    scene.actions([
      { label: 'Rush out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You blush slightly, not knowing what to say before you turn around and rush out.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Stay', handler: (st: GameState) => {
    scene.text('You glance at him as you walk over to the sinks.');
    scene.text('"I just need to use the mirror. It\'s not like it\'s hurting you," you tell him as you take a look at yourself in the mirror, checking your hair and makeup.');
    qspCall(s, 'gschool_break', 'restroom_actions');
  } },
    ]);
  } else {
    if (((s as any).boys_event_rand ?? 0) === 3  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 3) {
      if (((s as any).soniaQW ?? 0)?.['slut'] === 3) {
        (s as any).soniasexrand = 1;
      } else {
        if (((s as any).soniaQW ?? 0)?.['slut'] === 4) {
          (s as any).soniasexrand = Math.floor(Math.random() * 2) + 1;
        } else {
          if (((s as any).soniaQW ?? 0)?.['slut'] === 5) {
            (s as any).soniasexrand = Math.floor(Math.random() * 3) + 1;
          }
        }
      }
      if (((s as any).soniaQW ?? 0)?.['sextime'] >= 3  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 3) {
        (s as any).soniaQW['slut'] = 4;
        (s as any).soniaQW['sextime'] = 0;
      } else {
        if (((s as any).soniaQW ?? 0)?.['sextime'] >= 5  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 4) {
          (s as any).soniaQW['slut'] = 5;
          (s as any).soniaQW['sextime'] = 0;
        }
      }
      if (((s as any).soniasexrand ?? 0) === 1) {
        if (((s as any).soniaQW ?? 0)?.['slut'] < 5) {
          (s as any).soniaQW['sextime'] = ((s as any).soniaQW['sextime'] ?? 0) + (1);
        }
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/bathroom/sex/soniabj.mp4');
        scene.text('You go to the boys restroom and see Sonia on her knees with a cock in her mouth, enthusiastically deepthroating a boy you\'ve never seen before.');
        qspCall(s, 'arousal', 'voyeur_sex', 5);
        qspCall(s, 'stat', '');
        if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
          scene.actions([
            { label: '"What a fucking slut!"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', (-5));
    scene.img('images/locations/pavlovsk/school/bathroom/sex/soniabj.mp4');
    scene.text('Undaunted in the face of such shameless debauchery, you continue with your business and go straight to the sink.');
    scene.text('As you lather your hands in soap, you turn to face them. "God, you\'re such a fucking slut, Sonia! Do your knees have calluses on them?"');
    scene.text('Sonia does her best to ignore your barbs and keeps sucking the boy\'s cock. Drying your hands off, you walk over to him and lean on the wall next to him before pushing Sonia\'s head forward until you hear her gagging on his cock.');
    scene.text('You then glance at the boy. "You\'d think she\'d be used to this after all the dicks she\'s sucked. You should get yourself checked out at the clinic after this - who knows how many diseases she has!"');
    scene.text('The boy nods, only half paying attention to what you\'re saying as you let go of Sonia\'s head and start to move out of the bathroom.');
    scene.text('"I\'ll let the rest of the boys know you\'re open for business as usual!" you call back as you hear the boy groan loudly and presumably ejaculate down her throat.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/soniabj.mp4');
    scene.text('Embarrassed, you decide to give Sonia the privacy she sought in the bathroom to begin with and leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/soniabj.mp4');
    scene.text('You close the door quick enough that they don\'t notice you were there, but leave it open a crack and continue to peek through.');
    scene.text('You watch as Sonia works his cock with a vigor you\'ve never seen before. After another minute, the boy grabs her by the hair and pulls her towards him while thrusting his hips forward.');
    scene.text('After violently shaking for a few seconds, he pulls back with a gasp as long strands of cum splatter onto the floor, unable to be contained by her mouth or caught by her hands.');
    scene.text('The boy then pulls her head towards him again and pokes her in the cheek with his dick. "Come on, slut. Finish the job and clean me up!"');
    scene.text('Sonia obediently starts licking his cock clean. Deciding you don\'t want to get caught spying on them after they\'re done, you close the door and move away.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Greet them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 3);
    scene.img('images/locations/pavlovsk/school/bathroom/sex/soniabj.mp4');
    scene.text('Undaunted in the face of such shameless debauchery, you continue with your business and go straight to the sink.');
    scene.text('As you lather your hands in soap, you turn to face them. "Hey Sonia, having fun down there?"');
    scene.text('Sonia bobs her head up and down a bit more, as if nodding while humming a rough "Mhmm!" at you that\'s mostly blocked by the cock in her mouth.');
    scene.text('Drying your hands off, you walk over to the boy and lean on the wall next to him while gently putting your hand on the back of Sonia\'s head and assisting the forward movement of her blowjob.');
    scene.text('"She\'s really giving it her all today, isn\'t she?" you remark to the boy. "This is a special treat! Don\'t waste it!" you continue as you let go of Sonia\'s head and head to the door.');
    scene.text('"I\'ll see you in class later, Sonia!" you call back as you hear the boy groan loudly and presumably ejaculate down her throat.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).soniasexrand ?? 0) === 2) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
          if (((s as any).soniaQW ?? 0)?.['slut'] < 5) {
            (s as any).soniaQW['sextime'] = ((s as any).soniaQW['sextime'] ?? 0) + (1);
          }
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.school1,\'+rand(0, 3)+\'.jpg');
          scene.text('When you enter the restroom, you see Sonia bent over with her skirt hiked up and her panties around her ankles, getting fucked from behind by some guy you\'ve never seen before.');
          scene.text('She\'s moaning like a whore and seems to really be enjoying the pounding the boy is giving her. Neither of them seem to have noticed you yet.');
          qspCall(s, 'arousal', 'voyeur_sex', 5);
          qspCall(s, 'stat', '');
          if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
            scene.actions([
              { label: '"What a fucking slut!"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', (-5));
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.school1,\'+rand(0, 3)+\'.jpg');
    scene.text('Undaunted in the face of such shameless debauchery, you continue with your business and go straight to the sink.');
    scene.text('As you lather your hands in soap, you turn to face them. "God, you\'re such a fucking slut, Sonia! I\'d be surprised if he can even feel anything with how loose you must be after every guy in town has had a turn with your pussy!"');
    scene.text('Sonia does her best to ignore your barbs as she keeps letting the boy fuck her. Drying your hands off, you walk over to them and reach down to grab her ass cheeks before spreading them apart.');
    scene.text('You then glance at the boy. "You should fuck her ass instead. It might be a little tighter."');
    scene.text('He looks at you for only a moment, but smiles and seems to like the idea. He pulls his dick out of her pussy and shoves it deep into her ass, Sonia crying out a little in pain as he starts roughly fucking her ass.');
    scene.text('The boy moans loudly, clearly enjoying the new hole he\'s fucking. As you head for the door, you turn back and look at him.');
    scene.text('"You should get yourself checked out at the clinic after this - who knows what diseases she has." You then turn your attention to Sonia. "I\'ll let the rest of the boys know you\'re open for business as usual!"');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue your break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.school1,\'+rand(0, 3)+\'.jpg');
    scene.text('Embarrassed, you decide to give Sonia the privacy she sought in the bathroom to begin with and leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 1, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.school1,\'+rand(0, 3)+\'.jpg');
    scene.text('You close the door quick enough that they don\'t notice you were there, but leave it open just a crack and continue to peer through.');
    scene.text('You watch as the boy pounds Sonia for all he\'s worth. After another minute, he grabs her by the hair and pulls her head back towards him while thrusting his hips forward vigorously. After a few more minutes, he pulls back and violently shakes for a few seconds as his cock pulses, sending long strands of cum spattering all over her ass.');
    scene.text('Deciding you would rather not be caught spying on them, you close the door and move away.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Greet them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A25', 3);
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.school1,\'+rand(0, 3)+\'.jpg');
    scene.text('Undaunted in the face of such shameless debauchery, you continue with your business and go straight to the sink.');
    scene.text('As  you lather your hands in soap, you turn to face them. "Hey Sonia! Having fun there?"');
    scene.text('Sonia rocks back into him, fucking him as much as he\'s fucking her. "Oh god yes, I\'m loving it!"');
    scene.text('Drying your hands off, you walk over to the boy and lean on the wall next to him. "Are you going to let him fuck your ass too? Or is he unworthy of that special treat?"');
    scene.text('She looks back over her shoulder at the two of you. "He can fuck my ass if he wants…"');
    scene.text('His eyes light up and he wastes no time pulling his dick out of her pussy and shoving it up her ass. They both moan in delight as he does.');
    scene.text('"This is a special treat! Don\'t waste it!" you say to the boy as he pounds her ass. "I\'ll see you in class, Sonia!" you shout back as you leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue your break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).soniasexrand ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/school/events/afterschool/sonialeash.jpg');
            scene.text('When you enter the restroom you see Sonia surrounded by several of the gopniks.');
            scene.text('Dan holds a leash that\'s attached to a collar around Sonia\'s neck. "Come on, you fucking slut! Show us what a good little bitch you are!" he barks and jerks on the collar, making her crawl across the floor on her hands and knees.');
            scene.text('The other guys slap her ass and pull her hair - one even pulls up her skirt, showing off her panty-clad ass as she crawls along.');
            scene.text('"You\'re ours now. Isn\'t that right, <i>whore</i>?" Dan says with a smirk.');
            scene.text('Sonia, apparently content to play along, nods her head and happily agrees before Vasily walks up to her and pulls out his dick. "Open your mouth then, slut."');
            scene.text('Sonia barely gets her mouth open before Vasily shoves his cock in her mouth and she starts sucking.');
            qspCall(s, 'arousal', 'voyeur_sex', 5, 'unknown');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
              { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.orgy0,0.jpg');
    scene.text('Sonia deepthroats Vasily as the other guys pull their cocks out and she starts jerking them off in turn. Before long, she switches which cock she\'s sucking, changing them fairly often.');
    scene.text('Sometimes, an impatient tug on the leash tells her to switch cocks when she\'s been sucking on one for too long. Part of you wants to leave them to their fun, but another wants to keep watching…');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the restroom', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.orgy.pre0,0.jpg');
    scene.text('The guys not currently getting their dick sucked or jerked off start stripping her while waiting for their turn.');
    scene.text('Before long, she\'s been stripped completely naked and they order her to sit on her knees and open her mouth. She sits back with an open mouth, waiting for the guys to give her their cum as they take turns jerking off in her mouth. With them almost finished, you know it\'s time for you to leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).boys_event_rand ?? 0) === 4) {
        scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
        if (((s as any).pcs_hotcat ?? 0) < 6) {
          scene.text('As you enter the boys room, you see Andrey standing at the urinal taking a piss. He glances back and scowls when he spots you. "What the fuck are you doing in here? Get the fuck out!"');
          scene.text('You blush and hurry out before someone else sees you.');
          scene.actions([
            { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          scene.text('As you enter the boys room, you see Andrey standing at the urinal taking a piss. He glances back and frowns when he spots you.');
          scene.text('"What the fuck?! Did you come hoping to catch a glimpse of my dick?" he asks as he shakes it and turns around to give you a view.');
          scene.text('You can\'t help but stare, but he quickly interrupts your thoughts. "Why don\'t you come over here and suck it?"');
          qspCall(s, 'arousal', 'erotic_nudity', 2, 'unknown');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'What about Stasya?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/dickout.jpg');
    scene.text('"What about your girlfriend?" you ask.');
    scene.text('He shrugs. "What about her? She\'s fine with me getting something on the side, so are you going to come over here and suck it or just stare at it all day?"');
    scene.text('Blushing at his comment, you\'re unsure what you should do…');
    qspCall(s, 'arousal', 'erotic_nudity', 2, 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A147');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey1.jpg');
    scene.text('You walk over to him and drop down to your knees before you take his flaccid dick in your mouth and start sucking on it.');
    // TODO-QSP: dynamic text: As he gets hard, your mouth quickly fills up with his <<dick>>cm <<$dick_girth>>...
    scene.text(`As he gets hard, your mouth quickly fills up with his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick. You use your hand to stroke it while you keep your lips wrapped tightly around the shaft and bob your head.`);
    scene.text('After several minutes, he makes you look up at him. "Turn around so I can fuck you."');
    qspCall(s, 'arousal', 'bj', 5, 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I want to be on top [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I want to be on top [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'boyStat', 'A147');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey2.jpg');
    scene.text('You get up and put your hand on his chest. "How about you lie down and let me ride you like the wild stallion you are?"');
    scene.text('He just grins and lies down on his back. You straddle him and grab his dick to line it up before you slowly let it slide inside you, moaning as you feel it stretch and fill your pussy.');
    scene.text('You slowly start riding him at first, but pick up speed.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey3.jpg');
    scene.text('Your legs soon start getting tired and, seemingly sensing this, he gets up and lifts you up with him. He then carries you over to one of the toilets and lays you down on it before he starts fucking you.');
    scene.text('It doesn\'t take too long before he starts groaning loudly. "I\'m about to cum!"');
    scene.text('"Cum on my face!" you quickly reply.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have him cum on your face', goto: ['gschool_break', 'andrey_cum'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey1.jpg');
    scene.text('You take his dick out of your mouth so you can reply. "I want to just suck you off…"');
    scene.text('He laughs. "Well if you want to taste my cum that bad, who am I to deny a girl her wish?"');
    scene.text('You take his dick back into your mouth and keep sucking. Between the use of your hand and mouth, it only takes a few minutes before he\'s groaning loudly and you can tell he\'s about to cum.');
    qspCall(s, 'arousal', 'bj', 5, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['gschool_break', 'andrey_cum'] },
    ]);
  } },
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A147');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey4.jpg');
    // TODO-QSP: dynamic text: You do as he says and turn around, presenting yourself to him. He wastes little ...
    scene.text(`You do as he says and turn around, presenting yourself to him. He wastes little time and steps up behind you to rub the tip against your slit before he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you, slowly pushing himself deep before he starts fucking you.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey5.jpg');
    scene.text('As he starts to groan louder, he grabs hold of your hips and really starts to hammer into you, his balls slapping against your clit with each powerful thrust.');
    scene.text('You have a bit of trouble keeping your balance and eventually have to put your hands against the wall to keep yourself steady.');
    scene.text('After a few minutes, he starts to groan. "Get on your knees, I\'m about to cum!"');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['gschool_break', 'andrey_cum'] },
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
      } else {
        if (((s as any).boys_event_rand ?? 0) === 5) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan1.jpg');
          if (((s as any).pcs_hotcat ?? 0) >= 6  ||  ((s as any).IvanShowerQW ?? 0) > 0) {
            // TODO-QSP: dynamic text: You walk into the boys room and see Ivan washing his hands at the sinks. He glan...
            scene.text(`You walk into the boys room and see Ivan washing his hands at the sinks. He glances up and smiles as you walk in. "Hey ${((s as any).pcs_nickname ?? 0)}. You lost or something?"`);
            scene.text('You blush a little. "Um no, I… I don\'t know why, but I just felt like checking out the boys room."');
            scene.text('He chuckles. "Are you sure that\'s all you wanted? Are you sure you weren\'t craving a cock up your ass? If so, I could totally help you out with that."');
            scene.text('You cock your head to one side and arch your brow. "You want me to just turn around and let you shove your dick up my ass?"');
            scene.text('"No, you can suck it a bit first to get it nice and wet so it slides in easier," he says with a confident grin.');
            qspCall(s, 'willpower', 'anal', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Decline his offer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Decline his offer [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan1.jpg');
    scene.text('You shake your head. "Uh, no thanks. I definitely didn\'t come here looking for that."');
    scene.text('He just shrugs. "Suit yourself, but if you change your mind just let me know. Catch you later."');
    qspCall(s, 'gschool_break', 'restroom_actions');
  } },
              ]);
            }
            scene.actions([
              { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan2.jpg');
    scene.text('You walk over to him, but as you start to get on your knees he stops you. "Take off your clothes first. I want to see you naked."');
    scene.text('You smile and do a little striptease for him before dropping down to your knees in front of him. By then he already has his cock out and it\'s already rock-hard, waiting for you.');
    scene.text('Opening your mouth, you let it slide between your lips and close them tightly around his shaft before you start bobbing your head up and down.');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan3.jpg');
    scene.text('You use your hand to stroke his shaft as you suck his dick, rolling your tongue around the head. You sometimes fondle his balls with your free hand as well.');
    scene.text('By the sound of it, he\'s really enjoying the attention you\'re giving him, but he reaches down and gently pulls your head back until his dick pops out of your mouth. "Okay, turn around. I want to fuck that tight little ass of yours."');
    qspCall(s, 'arousal', 'bj', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A3');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan4.jpg');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      scene.text('You get up and turn around, bending over in front of him.');
      scene.text('"Now there\'s a good girl," he chuckles as he twists your buttplug before gently easing it out and placing it next to the basin.');
      scene.text('He spits on your slightly stretched anus and rubs it in before he lines up his dick. There isn\'t much resistance as his cock slides in into your ass.');
      // TODO-QSP: dynamic text: He pauses when you tense up a little to let you adjust to his <<dick>>cm <<$dick...
      scene.text(`He pauses when you tense up a little to let you adjust to his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushing its way into your ass. He then slowly starts fucking you, going just a little deeper. It doesn't hurt too much.`);
    } else {
      scene.text('You get up and turn around, bending over in front of him. Once you do, he spits on your anus and rubs it in before he lines up his dick.');
      scene.text('You feel the head of his cock press against your puckered asshole and the pressure builds up until the head pops in and he pauses for a moment as you tense up before he gently slides his dick into your ass.');
      // TODO-QSP: dynamic text: He pauses when you tense up again to let you adjust to his <<dick>>cm <<$dick_gi...
      scene.text(`He pauses when you tense up again to let you adjust to his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushing its way into your ass. He then slowly starts fucking your ass, going just a little deeper. It doesn't hurt too much.`);
    }
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan5.jpg');
    scene.text('Once he finally works his way balls deep, you stop tensing up and he starts fucking your ass harder and faster. Before long, he\'s pounding you and the slapping of flesh against flesh echoes into the bathroom.');
    scene.text('Just as it\'s starting to hurt again, he suddenly pulls out.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 3);
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ivan6.jpg');
    scene.text('His cock barely leaves your gaping asshole before he moans loudly and you feel his warm cum splatter across your ass cheeks.');
    // TODO-QSP: dynamic text: After several more spurts, he leans forward and kisses the back of your neck. "Y...
    scene.text(`After several more spurts, he leans forward and kisses the back of your neck. "You're the best, ${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('He then steps away, pulls his pants up and puts his shirt back on. "Thanks for the fuck and all, but I need to get going. Talk to you later."');
    scene.text('He then walks out of the bathroom, leaving you to clean up alone.');
    qspCall(s, 'cum_call', 'butt', 'A3');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
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
            qspCall(s, 'stat', '');
            scene.img('images/characters/shared/headshots_main/big3.jpg');
            // TODO-QSP: dynamic text: You walk into the boys room and see Ivan washing his hands at the sinks. He glan...
            scene.text(`You walk into the boys room and see Ivan washing his hands at the sinks. He glances up and smiles as you walk in. "Hey ${((s as any).pcs_nickname ?? 0)}. You lost or something?"`);
            scene.text('You blush a little. "Um no, I… I don\'t know why, but I just felt like checking out the boys room."');
            scene.text('He chuckles. "Don\'t sweat it. I won\'t tell anyone," he says with a wink as he walks out.');
            qspCall(s, 'gschool_break', 'restroom_actions');
          }
        } else {
          if (((s as any).boys_event_rand ?? 0) === 6) {
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
            scene.text('You decide to avoid the catiness of the other girls and go into the boys bathroom instead. Peeking in, you don\'t see anyone inside, so you push the door open and walk in.');
            scene.text('You\'ve only taken a few steps when you hear a moaning sound coming from one of the stalls and spot a stall door that\'s partially open.');
            scene.actions([
              { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
              { label: 'Take a peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav1.jpg');
    scene.text('You peek through the partially open stall door and see Lavrenti standing to the side of the toilet while Alyona is sitting on the toilet with her legs apart, sucking Lavrenti\'s dick.');
    scene.text('Neither of them have noticed you yet.');
    qspCall(s, 'arousal', 'voyeur_sex', 1, 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push the stall door open [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push the stall door open [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav1.jpg');
    if (((s as any).grupTipe ?? 0) !== 5  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('You push the stall door open to get a better look. Lavrenti glances over and seems surprised to see you. Alyona also glances up, but doesn\'t stop sucking his dick.');
      scene.text('Lavrenti gives you a questioning look. "Do you need something? Or do you just want to watch?" he asks with a laugh.');
      qspCall(s, 'arousal', 'voyeur_sex', 2);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'I just want to watch', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav2.jpg');
    scene.text('You smile at them. "Oh, don\'t mind me. Just pretend I\'m not here. I thought I might be able to learn a thing or two."');
    scene.text('Lavrenti laughs a little. "Sure, whatever." He then turns his attention back to Alyona as she keeps sucking his dick.');
    scene.text('He reaches down and pulls her shirt open, exposing her perky breasts, which he fondles as she slurps on his cock.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav3.jpg');
    scene.text('A few minutes later, she stops and stands up before pushing on his shoulders. He takes the hint and gets down on his knees.');
    scene.text('With their positions now reversed, she lifts one leg up in the air and spreads her legs before he pulls her panties aside and starts lapping at her pussy. She quickly starts moaning at the attention his tongue is giving her clit.');
    qspCall(s, 'arousal', 'voyeur_sex', 3, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop watching', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav4.jpg');
    scene.text('Once her moans start getting loud and her breath starts to quicken, he stops and stands up. As he does, she hikes her skirt up and turns around before slightly bending over.');
    scene.text('He quickly lines up his cock and slides it into her pussy, both of them moaning before they start fucking like wild animals - you doubt they\'re even aware that you\'re still here.');
    scene.text('Before long, Alyona starts to cry out, sounding like she\'s having an orgasm.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop watching', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav5.jpg');
    scene.text('Lavrenti suddenly cries out moments later. "Fuck, I\'m about to bust my nut!"');
    scene.text('She turns as he pulls out and sits on the toilet. She barely sits down before he blows his load all over her breasts, heavily coating them with his cum.');
    scene.text('Once he\'s finished, he pulls his pants up and puts his cock away before stepping out of the stall and passing by you. "You should join us next time. The more the merrier after all."');
    scene.text('Before you can answer, Alyona steps out of the stall while cleaning the cum off her breasts. "Maybe she was unimpressed by your dick."');
    scene.text('He gives her a slightly surprised look at her comment. "Yeah well, you seemed eager enough."');
    scene.text('She rolls her eyes at him. "I was bored, horny and I couldn\'t find anyone else. So I made do."');
    scene.text('He flips her off in response. "Fuck you, bitch!"');
    scene.text('"You already did, or a pale imitation of fucking anyway…" she scornfully replies as she straightens her clothes.');
    scene.text('He looks like he\'s torn between being amused and being pissed off. "Oh please, you totally had an orgasm!" He glances at you. "You saw. She totally had an orgasm, right?"');
    scene.text('He then follows her out, their banter never abating and never giving you a chance to get in a word edgewise.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Can I join?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav1.jpg');
    scene.text('You bite your lower lip, feeling pretty aroused "Maybe I can join you guys, if you don\'t mind?"');
    scene.text('A huge grin appears on Lavrenti\'s face. "Fuck yeah, I love fucking two bitches at the same time!"');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I just want to suck your dick [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I just want to suck your dick [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav1.jpg');
    scene.text('You shake your head. "I just want to suck your dick, not fuck you."');
    scene.text('Alyona rolls her eyes and Lavrenti waves you away. "If you\'re not all in, then get lost!" He then forcefully closes the stall door, blocking your view.');
    scene.text('Knowing better than to try and spy again, you leave before things get worse.');
    scene.actions([
      { label: 'Continue your break', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Join them', goto: ['gschool_break', 'join_alylav'] },
    ]);
  } },
        { label: 'I can suck your dick better than her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A155', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A143', (-5));
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav2.jpg');
    scene.text('"I bet I could do a better job at sucking your dick than she can. Move over and let me show you how it\'s done," you say as you step into the stall with them.');
    scene.text('Lavrenti turns towards you so you can get access to his dick, which causes it to pop out of Alyona\'s mouth.');
    scene.text('Alyona gets up as this is happening. "Fuck you, slut!"');
    scene.text('Lavrenti looks at her. "Don\'t be like that. You can have another turn soon."');
    scene.text('She shoves you hard against the back of the stall. "Fuck both of you."');
    scene.text('She then storms out of the stall, leaving you to sit on the toilet. As you do, you find Lavrenti\'s cock in your face.');
    scene.text('You stroke the shaft of his dick while you suck on the head, bobbing your head up and down in motion with your hand as he pulls open your shirt to fondle your breasts.');
    scene.text('A few minutes pass where he moans and groans before speaking up. "Get up, I want to get that pussy of yours all wet so I can fuck it."');
    qspCall(s, 'arousal', 'bj', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just give him a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just give him a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav5.jpg');
    scene.text('You stop sucking his dick just long enough to reply, leaving your hand to keep stroking him as you do. "I just want to suck you off."');
    scene.text('You then go back to sucking his dick, unsure if he\'s disappointed or not.');
    scene.text('He starts playing with your breasts and nipples as you continue sucking his dick. Several minutes pass before he suddenly cries out. "Fuck, I\'m about to bust a nut!"');
    scene.text('He then pulls his dick out of your mouth and starts spurting hot steams of cum onto your breasts. Once he finishes, he pulls his pants up and steps out of the stall.');
    scene.text('"Not bad, but I\'m not sure if you\'re better than Alyona, though. I might need a few more \'demonstrations\' to make up my mind. Perhaps a side by side comparison would be best."');
    scene.text('It takes you a few minutes for you to straighten out your clothes. By the time you do, he\'s long gone.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'arousal', 'foreplay', (-5), 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav3.jpg');
    scene.text('You stand, hike up your skirt and spread your legs, lifting one up in the air. With this easy access, he quickly gets on his knees and starts lapping at your pussy, alternating between slipping his tongue inside your slit and sucking on your clit.');
    scene.text('It\'s just starting to feel really good when he stops. "Turn around. I want to fuck that pussy of yours."');
    qspCall(s, 'arousal', 'cuni', 2, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A155');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav4.jpg');
    // TODO-QSP: dynamic text: You barely have time to turn around before you feel the tip of his dick pushing ...
    scene.text(`You barely have time to turn around before you feel the tip of his dick pushing against your slit. His ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slides in your wet pussy fairly easily and he grabs hold of your hips and starts fucking you with a wild drive.`);
    scene.text('The slapping sound of flesh on flesh echoes into the bathroom as the two of you fuck wildly, and several minutes later he cries out. "Fuck, I\'m about to bust a nut!"');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his load', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav5.jpg');
    scene.text('He quickly pulls out of you and pushes you down, your ass barely hitting the toilet seat before hot steams of cum splatter your breasts. Once he finishes, he pulls his pants up and steps out of the stall.');
    scene.text('"Not bad, but I\'m not sure if you\'re better than Alyona, though. I might need a few more \'demonstrations\' to make up my mind. Perhaps a side-by-side comparison would be best."');
    scene.text('It takes you a few minutes for you to straighten out your clothes. By the time you do, he\'s long gone.');
    qspCall(s, 'cum_call', 'breasts', 'A155', 1);
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
      if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).pcs_hotcat ?? 0) <= 5) {
        scene.text('You push the stall door open to get a better look. Lavrenti glances over and seems surprised to see you. Alyona also glances up, but doesn\'t stop sucking Lavrenti\'s dick as he looks at you with a questioning look.');
        scene.text('"What the? Can\'t you see that we\'re busy here? Maybe if you took better care of yourself and didn\'t look like a cow, we might invite you to join us," he says with a laugh and Alyona seems to snicker, even with a mouth full of cock.');
        scene.text('"If you don\'t mind, fuck off!" he yells before he closes the stall door. Knowing better than to try and spy again, you leave before things get worse.');
        qspCall(s, 'arousal', 'voyeur_sex', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        qspCall(s, 'fame', 'pav', 'sex', 1);
        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (5);
        scene.text('You push the stall door open to get a better look. Lavrenti glances over and seems surprised to see you. Alyona also glances up and flips you off, but doesn\'t stop sucking Lavrenti\'s dick.');
        scene.text('Lavrenti gives you a dirty look. "What the fuck? Get lost, loser!" he shouts before he slams the stall door closed in your face.');
        scene.text('Knowing better than to try and spy again, you leave before things get worse.');
        qspCall(s, 'arousal', 'voyeur_sex', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Sneak away and leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['gschool_break', 'boys_restroom'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterAndreyCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A147', 3);
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/andrey6.jpg');
  scene.text('While on your knees with your mouth open, he jerks his cock until he starts grunting; some of his cum goes into your open mouth, but most of it splatters across your face.');
  // TODO-QSP: dynamic text: Once he finishes, he pulls his pants up and rebuttons his shirt. "I really neede...
  scene.text(`Once he finishes, he pulls his pants up and rebuttons his shirt. "I really needed that, ${((s as any).pcs_nickname ?? 0)}. You're such a cool chick."`);
  scene.text('"I enjoyed myself too," you reply as you get dressed.');
  scene.text('He nods and smiles. "See you later."');
  scene.text('He then walks out of the bathroom, leaving you to finish cleaning up.');
  qspCall(s, 'cum_call', 'face', 'A147');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterJoinAlylav(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A155', 2);
  qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
  (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A155');
  qspCall(s, 'npcStat', 'A143', 'a');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplesuck.jpg');
  scene.text('With their invite to join them, you walk into the stall and drop down to your knees. You watch as Alyona sucks his dick a little more before he pulls out of her mouth and turns towards you.');
  scene.text('You eagerly open your mouth and start sucking his cock while caressing his balls and stroking his shaft.');
  qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Turn around and get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplefuck.jpg');
    scene.text('As you\'re sucking Lavrenti\'s cock, he and Alyona undress you. Once you\'re undressed, she begins to undress herself as well as Lavrenti pulls out of your mouth.');
    // TODO-QSP: dynamic text: "Turn around so I can fuck your pussy, <<$pcs_nickname>>," he grins.
    scene.text(`"Turn around so I can fuck your pussy, ${((s as any).pcs_nickname ?? 0)}," he grins.`);
    // TODO-QSP: dynamic text: You get up and barely have time to turn around before you feel the tip of his di...
    scene.text(`You get up and barely have time to turn around before you feel the tip of his dick pushing against your slit and his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slides in your wet pussy.`);
    scene.text('He grabs hold of your hips and starts fucking you hard and rough, the slapping sound of flesh on flesh echoing in the bathroom as the two of you fuck wildly. Alyona rubs her clit as she watches the two of you fuck, and after a few minutes she speaks up.');
    scene.text('"Okay that\'s enough, I need to get fucked too."');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Alyona\'s turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/coupleturn.jpg');
    scene.text('Lavrenti hear speaking behind you. "Well, come on over here and take this cock then!"');
    scene.text('You glance back to see them kiss as he pulls out of you and you step aside to make room. He turns Alyona sideways, lifts up her leg and slides his cock right into her pussy. He proceeds to fuck her just as hard and rough as he was fucking you.');
    scene.text('She starts moaning and rubbing her clit as he does, apparently loving it. Several minutes pass before she cries out in orgasm. He grunts as he keeps fucking her through her orgasm.');
    scene.text('Once it passes, he pulls out of her. "Fuck I\'m about to bust a nut! Both of you get on your fucking knees!"');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Share the cum', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplecum.jpg');
    scene.text('As you drop to your knees, so does Alyona. With both of you kneeling side by side in front of Lavrenti, he jerks his cock before a large spurt of cum suddenly hits you in the chin. Several smaller spurts then land on your breasts and Alyona\'s face.');
    // TODO-QSP: dynamic text: When he finally finishes, he sighs loudly. "Fuck, that was amazing! We should re...
    scene.text(`When he finally finishes, he sighs loudly. "Fuck, that was amazing! We should really do this again, Alyona. You and ${((s as any).pcs_nickname ?? 0)} both have tight pussies."`);
    scene.text('"It was okay, I suppose," Alyona replies as you both start to get dressed and Lavrenti pulls up his pants. "Maybe if I get bored enough again…"');
    scene.text('Alyona cleans up and heads for the door, with Lavrenti following her out.');
    scene.text('"Oh please, you loved it and you know it!" he teases.');
    scene.text('"You wish!" she replies. "It was okay… ish."');
    scene.text('They continue to banter as they walk out and leave you behind.');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSmoke1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/school/bathroom/smoke${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You pull out your pack of cigarettes and fish one out. Placing it between your lips, you light the cigarette and take a long slow drag of it.');
  scene.text('You spend a few minutes smoking the cigarette before dropping the bud into the toilet.');
  scene.actions([
    { label: 'Continue your break', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSmoke2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo1.jpg');
  scene.text('You pull out your pack of cigarettes and fish one out. Placing it between your lips, you light the cigarette and take a long slow drag of it.');
  scene.text('You hear the other girls all leave, leaving you alone to enjoy your smoke.');
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy your smoke', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo2.jpg');
    scene.text('You then hear the bathroom door open, followed by footsteps. Before you can drop the cigarette in the toilet, Ms. Braakman walks over and catches you.');
    scene.actions([
      { label: 'Caught', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo3.jpg');
    scene.text('She stops in front of your stall, reaches in and pulls you out of the stall while wagging her finger at you.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you know the rules about smoking in school!"
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, you know the rules about smoking in school!"`);
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo3.jpg');
    scene.text('You swallow, not wanting to make things worse. "I\'m sorry, Ms. Braakman. I didn\'t think anyone would mind…" you plead while giving her your saddest look, hoping she\'ll let you off with just a warning.');
    scene.text('She takes the cigarette away from you and throws it in the toilet. "Very well. Don\'t let me catch you again, or I <i>will</i> report this to Ms. Volkov. This infraction will be added to your demerits. Now get out of here."');
    scene.text('You quickly hurry out of the bathroom.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Blow her off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo4.jpg');
    scene.text('You roll your eyes at her. "Fine, <i>whatever</i>, I won\'t smoke…" you say in a sarcastic and insincere tone.');
    scene.text('She pulls the cigarette out of your hand and drops it on the floor.');
    scene.text('"Don\'t talk to me like that, young lady!" she barks as she grabs you painfully by the hair and forces you down until you\'re looking at the cigarette as she grinds it under her shoe. "You will come with me and learn some respect!"');
    qspCall(s, 'pain', '', 1, 'hair', 'twist');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get pulled along', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo5.jpg');
    scene.text('She lets go of your hair, only to grab you by the ear and painfully twist it and pull you along. She drags you out of the restroom, down the hall, and into her currently empty classroom.');
    qspCall(s, 'pain', '', 2, 'ears', 'twist');
    scene.actions([
      { label: 'Learn some manners', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo6.jpg');
    scene.text('Once in her classroom, she takes hold of your hair once more and uses a meter stick to raise up your chin until you\'re looking her in the eyes. "You will learn some manners, young lady, one way or another!"');
    scene.actions([
      { label: 'Lesson one', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo7.jpg');
    scene.text('She turns you around and lifts your skirt. Still holding your hair with one hand, her other hand gives your ass cheeks a swift slap, followed by a few more, each one more stinging than the last.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lesson one - part two', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo8.jpg');
    scene.text('With her hand in your hair, she forces you to bend over her desk to give her easier access to spank you. She lands several more swats on your ass and it\'s starting to sting.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lesson two', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo9.jpg');
    scene.text('She finally stops and for a moment you think she\'s done, but then she grabs the meter stick off the desk and slaps it painfully hard across your ass.');
    scene.text('"Have you learned your lesson yet?!" she asks before smacking you again.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo10.jpg');
    scene.text('You snort a laugh. "You think a little spanking is going to set me on the straight and narrow? <i>Please</i>!"');
    scene.text('She pulls you back up and wraps one arm around your neck before pulling your shirt open.');
    scene.text('"So you think you\'re some tough bad girl, do you? Well let me show you what happens to bad little girls."');
    scene.actions([
      { label: 'On your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo11.jpg');
    scene.text('She forces you down to your knees and then your face, all the way against the dirty floor. Slipping out of her shoes, she uses one foot to press your cheek down against the floor as she spanks you with the meter stick.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean my toes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo12.jpg');
    scene.text('She reaches down and pulls you up into a kneeling position before she forces you to open your mouth and sticks her toes in your mouth.');
    scene.text('"You\'re not a bad little girl. You\'re just a dirty little girl. Now clean my feet."');
    scene.text('She makes you suck on her toes and lick both of her feet.');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 5  ||  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('She finally lets go of you and tosses you back your shirt. "Get dressed and get out before you make things worse for yourself."');
      scene.text('You gather up your shirt and walk out of the classroom. You button up your shirt with your ass still stinging.');
      scene.actions([
        { label: 'Leave the restroom', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.text('She pulls her feet away from you, while still holding you by the hair. "Have you had enough yet?"');
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Screw you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Screw you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo13.jpg');
    scene.text('"Screw you, bitch!" you defiantly yell and her nostrils flare as she gives you a hard glare.');
    scene.text('"What are you mouthing off at me for? I\'m not the one getting screwed here," she says as she takes off her skirt and pulls off her panties before forcing you to strip as well.');
    scene.text('Once you\'re naked, and still on your knees, she turns her ass towards you and grabs you by the hair, pulling you between her ass checks.');
    scene.text('She uses the meter stick to smack one of your breasts hard enough that it hurts. "Lick!"');
    scene.text('Not wanting to get smacked again, you start to lick her ass.');
    qspCall(s, 'arousal', 'rimming_give', 2, 'sub', 'humiliation');
    qspCall(s, 'pain', '', 1, 'breasts', 'slap');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo14.jpg');
    scene.text('After a few minutes, she pulls your face away from her ass and turns around. She puts one foot on her desk and spreads her legs wide, then pulls your face to her crotch and rubs your face against her pussy.');
    scene.text('"Lick it, you dirty little girl!"');
    scene.text('You start to lick her pussy.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo15.jpg');
    scene.text('She stops and leaves you alone for a minute to rummage in her desk drawer before pulling out a strap-on harness. She steps into the harness, pulls it up and tightens the straps in place before she grabs you by the hair and pulls your face over to the dildo. "Open your mouth."');
    scene.text('As soon as you do, she shoves the dildo into your mouth and starts fucking your throat.');
    qspCall(s, 'arousal', 'bj', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo16.jpg');
    // TODO-QSP: dynamic text: After gagging you a couple of times, she slides the dildo out of your mouth and ...
    scene.text(`After gagging you a couple of times, she slides the dildo out of your mouth and pulls you up into a standing position. She lifts you off your legs and guides the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into your pussy.`);
    scene.text('Between your own wetness and your slobber on the dildo, it slides in easily and she starts to fuck you with it.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Dirty little girl', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo17.jpg');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('Ms. Braakman pushes you down, bending you over her desk before she smacks your ass a few times ');
      scene.text('"Dirty little girl doesn\'t like wearing panties, does she?" she says before she starts fucking you with the strapon again.');
      scene.text('Several minutes go by until she finally stops, tired from the exertion.');
      scene.text('"Get your clothes and get out!" she demands and you quickly gather up your clothes and get dressed before leaving.');
    } else {
      scene.text('Ms. Braakman pushes you down, bending you over her desk. She reaches around and shoves your panties in your mouth before she starts fucking you with the strapon again.');
      scene.text('Several minutes go by until she finally stops, obviously tired from the exertion.');
      scene.text('"Get your clothes and get out!" she demands and you quickly pull your panties out of your mouth and gather up your clothes before getting dressed and leaving.');
    }
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
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
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo6.jpg');
    scene.text('You nod your head as best you can. "Yes Ms. Braakman, I\'m sorry!"');
    scene.text('She pulls you back up into a standing position and places the end of the meter stick just under your jaw.');
    scene.text('"That\'s better. Perhaps next time you will behave yourself. I will, of course, have to report this to Ms. Volkov. Now get out and behave!"');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
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
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/causmo6.jpg');
    scene.text('You nod your head as best you can. "Yes Ms. Braakman, I\'m sorry!"');
    scene.text('She pulls you back up into a standing position and places the end of the meter stick just under your jaw.');
    scene.text('"That\'s better. Perhaps next time you will behave yourself. I will, of course, have to report this to Ms. Volkov. Now get out of here and behave!"');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
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

function enterLenaGop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena1.jpg');
  scene.text('As you walk over and fall to your knees, Lena strips out of her school uniform before she half leans and half sits on the sinks with her legs spread. She then reaches out, grabs you by the hair and pulls your face into her crotch.');
  scene.text('As you start to lick her already wet pussy, she lets go and lets you pleasure her as you alternate between sliding your tongue inside her pussy, licking her clit and sucking on her clit.');
  scene.text('She moans loudly at your ministrations of her cunt. As she\'s really getting into it, you decide that it\'s your turn.');
  scene.text('You stop licking her and stand up. She looks at you, clearly confused until you start taking off your clothes.');
  scene.text('"Okay, my turn now. I\'ll help you if you help me." you tell her.');
  scene.text('She frowns slightly, but nods anyway.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get undressed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena2.jpg');
    scene.text('You take your clothes off and trade places with her. Taking a seat on the sink, you spread your legs wide to give her easy access before she gets down on her knees and starts licking your clit.');
    scene.text('She isn\'t very good at it and doesn\'t seem all that into it, which makes you wonder if Lera only pleasures Lena and never gets anything in return.');
    scene.text('Before you can puzzle it out, Lena stops, grabs her bag and pulls out a strapon. "Here, we can take turns using this."');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Only use it on her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena3.jpg');
    scene.text('You shake your head. "That\'s okay, but I can wear it and use it on you if you want?"');
    scene.text('She hands it to you. "Works for me."');
    scene.text('You take a few minutes to put the harness on and get it strapped in place. Once in place, you reach over and pull her head down to the dildo.');
    scene.text('"Best to make sure it\'s nice and wet first," you tell her as she starts sucking on the dildo.');
    scene.text('She doesn\'t suck on it for long before she stops and turns around, lifts one of her legs up and leans forward slightly, giving you access to fuck her pussy.');
    qspCall(s, 'arousal', 'foreplay', 2, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena5.jpg');
    scene.text('As you move up behind her, she reaches back and guides the dildo into her wet pussy. It slides in easily and she moans loudly as it does as you start thrusting into her slowly at first, but pick up speed the louder she moans.');
    scene.text('She starts to buck back against you, trying to take more of the dildo into her as she fucks herself, pushing in the full length of the dildo until she cries out and starts trembling as she has an intense orgasm.');
    // TODO-QSP: dynamic text: Once she stops trembling, she pulls away and starts to get cleaned up. You do th...
    scene.text(`Once she stops trembling, she pulls away and starts to get cleaned up. You do the same as you take off the strapon. "Thanks ${((s as any).pcs_nickname ?? 0)}, I needed that."`);
    scene.text('You smile at her. "Glad I could help you out."');
    scene.text('She can hear the humor in your voice and laughs a little. Once dressed, she takes the strapon from you and cleans it off in the sink before putting it back in her bag.');
    // TODO-QSP: dynamic text: "See you around, <<$pcs_nickname>>," she says as she heads out.
    scene.text(`"See you around, ${((s as any).pcs_nickname ?? 0)}," she says as she heads out.`);
    qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue your break', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Agree to take turns', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D2');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena4.jpg');
    scene.text('You nod your head. "Sounds good to me. Do you want to go first or should I?"');
    scene.text('She starts pulling on the harness. "I\'ll fuck you first, then you can fuck me."');
    scene.text('A few seconds later, she has the strapon tightly in place. "Okay, turn around and lift your leg up for me."');
    scene.text('You turn so your back is facing her and bend slightly forward before you lift up your leg to give her easy access to your pussy. You feel the tip of the dildo press against your pussy before it slides inside you.');
    scene.text('Once she has it as deep as it will go, she grabs onto your hips and starts to fuck you hard and fast. She seems to be really getting off on fucking you, although you can barely think about it as you feel your arousal rising like water against a dam.');
    scene.text('She fucks you really good and seems to have had more than a bit of practice at wearing one of these.');
    scene.text('After a few minutes, she abruptly stops fucking you, grabs you by the hair and pulls you around before bringing your face down to the strapon. "Suck my dick clean, bitch!"');
    qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena3.jpg');
    scene.text('You bend over at the waist and suck your own juices off the dildo. She lets you control how deep you take it, then thrusts her hips as you\'re going down, gagging you for a moment.');
    scene.text('She steps away as you look up at her. You can see she\'s aroused and amused as she takes the harness off before handing it to you. "Okay, my turn."');
    scene.text('You take the harness from her and strap it on yourself. As you do, she steps over to take your place, facing the wall.');
    qspCall(s, 'arousal', 'bj', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena5.jpg');
    scene.text('As you move up behind her, she reaches back and guides the dildo into her wet pussy. It slides in easily and she moans loudly as it does as you start thrusting into her slowly at first, but pick up speed the louder she moans.');
    scene.text('She starts to buck back against you, trying to take more of the dildo into her as she fucks herself, pushing in the full length of the dildo until she cries out and starts trembling as she has an intense orgasm.');
    // TODO-QSP: dynamic text: Once she stops trembling, she pulls away and starts to get cleaned up. You do th...
    scene.text(`Once she stops trembling, she pulls away and starts to get cleaned up. You do the same as you take off the strapon. "Thanks ${((s as any).pcs_nickname ?? 0)}, I needed that."`);
    scene.text('You smile at her. "Glad I could help you out."');
    scene.text('She can hear the humor in your voice and laughs a little. Once dressed, she takes the strapon from you and cleans it off in the sink before putting it back in her bag.');
    // TODO-QSP: dynamic text: "See you around, <<$pcs_nickname>>," she says as she heads out.
    scene.text(`"See you around, ${((s as any).pcs_nickname ?? 0)}," she says as she heads out.`);
    qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue your break', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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

function enterLenaDom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A20', 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena1.jpg');
  scene.text('As you walk over and fall to your knees, Lena strips out of her school uniform before she half leans and half sits on the sinks with her legs spread. She then reaches out, grabs you by the hair and pulls your face into her crotch.');
  scene.text('As you start to lick her already wet pussy, she lets go and lets you pleasure her as you alternate between sliding your tongue inside her pussy, licking her clit and sucking on her clit.');
  scene.text('She moans loudly at your ministrations of her cunt.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/bathroom/sex/girls/lena2.jpg');
    scene.text('She pulls herself up on the sink until she\'s sitting on it and spreads her legs wide. You follow her as she moves, your face staying in her crotch and eating her pussy.');
    scene.text('As she gets louder, she starts to grind her pussy against your face, smearing your face with her pussy juices. Your face and her crotch are soon completely covered in her juices as she trembles and rocks against you, orgasming hard.');
    scene.text('Once the trembling stops, she sighs loudly. "Lick me clean, slut!"');
    scene.text('You obey her and start licking her juices off her pussy.');
    scene.text('After you get her as clean as you can, she pushes you away, gets off the sink and starts to get dressed.');
    scene.text('As she finishes up, she turns to you. "I\'ll make sure to let the other girls know what an obedient little lesbian slut you are," she says with a laugh before walking out.');
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue your break', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNakedBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/nakede.jpg');
  scene.text('With all your clothes gone, all you have left is your purse. You could call someone, but who? Your mother wouldn\'t understand, you would be too ashamed to call your stepdad and your sister doesn\'t have a car. The bell rings for the next period and you wait a few more minutes until you can no longer hear anyone.');
  scene.text('You crack open the door, peek out and find the hallway looks empty. You can go to the headmistress - she might have a spare uniform you can use, but she might press you on what happened. Or you could leave the school to go home and get another uniform.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Go to the headmistress', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip5.jpg');
    scene.text('You decide it would be better to go see the headmistress than run halfway across Pavlovsk naked. You peek out one last time, and when you see no one present, you step out into the hallway, feeling yourself blushing heavily, but also a tingling sensation at the thrill of being naked in public.');
    scene.text('You put such thoughts aside and sneak through the halls, careful to avoid other people. At one point, you have to duck under the stairs to avoid being seen by Rolan, but you eventually make it to the office.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enter her office', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/principal/officenaked.jpg');
    scene.text('As you enter the office, Ms. Volkov looks up from her desk, a look of shocked surprise on her face as you stand in front of her naked before she gives you a stern look.');
    scene.text('"Just what do you think you\'re doing, young lady?! Tramping around the school naked is no way for a young girl to behave! Explain yourself immediately!" she sternly demands.');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell her a lie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell her a lie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/school/principal/officenaked.jpg');
    scene.text('You take a deep breath and decide it would only make things worse for you if you snitch. "It was stupid. I accidentally spilled a bottle of water all over my clothes, so I went to the bathroom to dry them with the hand dryer. While I waited, I went to use the toilet and when I came back, they were gone. I don\'t know what happened to them."');
    scene.text('Ms. Volkov frowns and her expression hardens ever so slightly. "If you don\'t tell me who\'s bullying you, I can\'t help. Don\'t think they will stop just because you didn\'t tell me who it was."');
    scene.text('You shake your head. "No one did this to me, at least no one I seen. I don\'t know what happened to my clothes. They just disappeared," you tell her, sticking to your story.');
    qspCall(s, 'gschool_break', 'naked_bathroom_end');
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her what happened', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (20);
    qspCall(s, 'npc_relationship', 'modify', 'A20', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A21', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A24', (-5));
    qspCall(s, 'npc_relationship', 'modify', 'A145', (-5));
    scene.img('images/locations/pavlovsk/school/principal/officenaked.jpg');
    scene.text('You take a deep breath and decide the girls need to be punished. "Some girls stripped me and stole my clothes."');
    scene.text('Ms. Volkov frowns at first, but her expression softens ever so slightly. "Names?"');
    scene.text('You tell her the names of the girls and she writes them down.');
    qspCall(s, 'gschool_break', 'naked_bathroom_end');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Go home', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip5.jpg');
    scene.text('You decide that it would be better to go home than to show up naked in front of the headmistress. You peek out one last time before stepping out into the hallway, feeling yourself blushing heavily, but also a tingling sensation at the thrill of being naked in public.');
    scene.text('You put such thoughts aside and sneak through the halls, careful to avoid other people. At one point, you have to duck under the stairs to avoid being seen by Rolan, but you eventually make it outside. You could try and sneak home - it will take longer, but hopefully no one will see you. Or you can just run home while trying to hide your face and hope that no one recognizes you.');
    scene.actions([
      { label: 'Continue', goto: ['home_events', 'go_home_naked_pre'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNakedBathroomEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('She sighs as she gets up and walks over to and opens a closet. She looks around in it for a minute before she pulls out a cheap, conservative-looking school uniform and hands it to you.');
  scene.text('"Here is a replacement uniform. Your parents will be sent the bill for it. Now get dressed and be on your way."');
  if (qspFunc(s, 'clothing', 'is_owned', 'gm_school', 25)) {
    scene.text('"I already have a spare one at home," you state. "Is it okay if I return this uniform tomorrow?"');
    // TODO-QSP: dynamic text: She nods. "Of course. However, you will have to pay <<$func('money', 'string_pri...
    scene.text(`She nods. "Of course. However, you will have to pay ${qspFunc(s, 'money', 'string_price', 200)} to have it professionally cleaned."`);
    if (qspFunc(s, 'money', 'can_afford', 200, 'cash')) {
      qspCall(s, 'money', 'pay', 200, 'cash');
      scene.text('"Sure, that\'s not a problem," you say and hand over the money.');
    }
    qspCall(s, 'clothing', 'wear', 'gm_school', 25, 'borrowed');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 2000, 'cash')) {
      qspCall(s, 'money', 'pay', 2000, 'cash');
      scene.text('You open your purse and pull out enough money to pay for the uniform - you would rather your mother not know about this.');
      scene.text('"Here, I have the money for it," you tell her as you hand over enough money. She raises an eyebrow, but says nothing as she takes the money from you.');
    }
    qspCall(s, 'clothing', 'add_item', 'gm_school', 25);
    qspCall(s, 'clothing', 'wear', 'gm_school', 25);
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave her office', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 14) {
      scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
  } },
  ]);
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
    case 'boys_restroom_events':
      enterBoysRestroomEvents(s, scene);
      break;
    case 'andrey_cum':
      enterAndreyCum(s, scene);
      break;
    case 'join_alylav':
      enterJoinAlylav(s, scene);
      break;
    case 'smoke1':
      enterSmoke1(s, scene);
      break;
    case 'smoke2':
      enterSmoke2(s, scene);
      break;
    case 'lena_gop':
      enterLenaGop(s, scene);
      break;
    case 'lena_dom':
      enterLenaDom(s, scene);
      break;
    case 'naked_bathroom':
      enterNakedBathroom(s, scene);
      break;
    case 'naked_bathroom_end':
      enterNakedBathroomEnd(s, scene);
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
