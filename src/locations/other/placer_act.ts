import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'skverdin', '');
  qspCall(s, 'placer_man', '');
  if (((s as any).placerParameter ?? 0)?.['player_act'] === 0) {
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 18) + 18, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
    }
    // TODO-QSP: $npc_usedname[$boy] = $npc_nickname[$boy]
    if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 3) {
        scene.img('images/locations/pavlovsk/park/skver_znacom_1.jpg');
      } else {
        scene.img('images/locations/pavlovsk/park/gop/skver_znacom_3.jpg');
      }
      // TODO-QSP: dynamic text: You stop and look at the guy who approached you. You don't think you've ever see...
      scene.text(`You stop and look at the guy who approached you. You don't think you've ever seen him before. He introduces himself: "My name is ${((s as any).boydesc ?? 0)}."`);
      // TODO-QSP: 'You smile as you reply: "I''m <<$pcs_nickname>>."'+$text_mod
      // TODO-QSP: dynamic text: <<$boydesc>> invites you: "Pleased to meet you, <<$pcs_nickname>>! Would you lik...
      scene.text(`${((s as any).boydesc ?? 0)} invites you: "Pleased to meet you, ${((s as any).pcs_nickname ?? 0)}! Would you like to have a beer with me?"`);
      if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
        // TODO-QSP: dynamic text: <<$ev_name>> whispers to you: "I'm not so sure about this, <<$pcs_nickname>>! I ...
        scene.text(`${((s as any).ev_name ?? 0)} whispers to you: "I'm not so sure about this, ${((s as any).pcs_nickname ?? 0)}! I think we should go…"`);
      }
    } else {
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 3) {
        scene.img('images/locations/pavlovsk/park/skver_znacom_1.jpg');
      } else {
        scene.img('images/locations/pavlovsk/park/gop/skver_znacom_3.jpg');
      }
      // TODO-QSP: dynamic text: You stop and look at the guy who approached you. You don't think you've ever see...
      scene.text(`You stop and look at the guy who approached you. You don't think you've ever seen him before. He introduces himself: "My name is ${((s as any).boydesc ?? 0)}."`);
      // TODO-QSP: 'You smile as you reply: "I''m <<$pcs_nickname>>."'+$text_mod
      // TODO-QSP: dynamic text: <<$boydesc>> invites you: "Pleased to meet you, <<$pcs_nickname>>! Would you lik...
      scene.text(`${((s as any).boydesc ?? 0)} invites you: "Pleased to meet you, ${((s as any).pcs_nickname ?? 0)}! Would you like to have a beer with me?"`);
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1  &&  ((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
        // TODO-QSP: dynamic text: <<$ev_name>> whispers to you: "Who do you think he likes more, <<$pcs_nickname>>...
        scene.text(`${((s as any).ev_name ?? 0)} whispers to you: "Who do you think he likes more, ${((s as any).pcs_nickname ?? 0)}? You or me?"`);
      } else {
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
          // TODO-QSP: dynamic text: Vying for the guys' attention, you happily accept <<$boydesc>>'s invitation and ...
          scene.text(`Vying for the guys' attention, you happily accept ${((s as any).boydesc ?? 0)}'s invitation and introduce yourself to everyone.`);
          if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
            // TODO-QSP: dynamic text: <<$ev_name>> whispers to you: "They're cute, <<$pcs_nickname>>! Let's stay for a...
            scene.text(`${((s as any).ev_name ?? 0)} whispers to you: "They're cute, ${((s as any).pcs_nickname ?? 0)}! Let's stay for a while and see what happens?"`);
          }
        }
      }
    }
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
      // TODO-QSP: act 'Decline and leave': gt 'pav_park', 'start'
    }
    if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
      scene.actions([
        { label: 'Leave with your friend', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['friend_slut'] < 80) {
      scene.actions([{ label: 'Continue', goto: ['placer_end', ''] }]);
    }
    if (((s as any).placerParameter ?? 0)?.['friend_slut'] >= 80) {
      // TODO-QSP: dynamic text: <<$ev_name>> whispers to you: "Don't be such a bore, <<$pcs_nickname>>! I want t...
      scene.text(`${((s as any).ev_name ?? 0)} whispers to you: "Don't be such a bore, ${((s as any).pcs_nickname ?? 0)}! I want to stay, he's cute! Come on, stay with me and live a little!"`);
      qspCall(s, 'willpower', 'drink', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave your friend behind and go [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave your friend behind and go [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Drink some beer with them', handler: (st: GameState) => {
    // TODO-QSP: placerParameter['player_act'] = 1
    dynamicGoto(st, 'curloc');
  } },
        { label: 'Drag your friend away', goto: ['placer_end', ''] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink some beer', handler: (st: GameState) => {
    // TODO-QSP: placerParameter['player_act'] = 1
    dynamicGoto(st, 'curloc');
  } },
    ]);
  }
  if (((s as any).placerParameter ?? 0)?.['player_act'] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
    }
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
    }
    if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
    }
    if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
    }
    // TODO-QSP: dynamic text: You<<$textsub>> join the <<$placerStringParameter['text_someone']>> for some bee...
    scene.text(`You${((s as any).textsub ?? 0)} join the ${((s as any).placerStringParameter ?? 0)?.['text_someone']} for some beers, and go to a more secluded area of the park. ${((s as any).boydesc ?? 0)} pours beer into plastic cups and hands them out. The beer is nice and cold, and you${((s as any).textsub ?? 0)} have a chat with ${((s as any).boydesc ?? 0)} while the ${((s as any).textsub2 ?? 0)} mess around.`);
    if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
      if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
        if (((s as any).placerParameter ?? 0)?.['know_slut'] === 0) {
          // TODO-QSP: dynamic text: <<$boydesc>> excuses himself for a moment, and then surprises you when he comes ...
          scene.text(`${((s as any).boydesc ?? 0)} excuses himself for a moment, and then surprises you when he comes up to you from behind. He puts his arms around your waist while kissing your neck. The other guys are mostly ignoring you and are talking among one another, though you do see one or two jealous glances from them.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Kiss the guy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    // TODO-QSP: dynamic text: You kiss <<$boydesc>> on his lips and embrace him, and soon his hands are explor...
    scene.text(`You kiss ${((s as any).boydesc ?? 0)} on his lips and embrace him, and soon his hands are exploring your body. He whispers to you: "Come on, you cute little thing… let's go somewhere a bit more private" while he roughly kneads your ass through your clothes. His friends are watching you intently.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('The guys holler when they hear you agree… you guess they\'re just happy for their friend?');
    // TODO-QSP: dynamic text: <<$boydesc>> takes you by the hand, and you walk down the street with the group ...
    scene.text(`${((s as any).boydesc ?? 0)} takes you by the hand, and you walk down the street with the group of Gopniks. They lead you to a shabby house, and let you in.`);
    // TODO-QSP: dynamic text: The boys quickly clear the empty beer bottles from the table, and put out some v...
    scene.text(`The boys quickly clear the empty beer bottles from the table, and put out some vodka and snacks. The vodka is poured into glasses, and ${((s as any).boydesc ?? 0)} offers you one with a generous smile.`);
    scene.text('You slam it down, feeling a shiver run down your spine when you feel the vodka slide down towards your stomach. It doesn\'t taste particularly well, but you figure it would be rude to not accept their hospitality. You have a few bits of anchovies from a bowl while you talk to the guys. All of them are suddenly showing far more interest in you than before.');
    scene.actions([
      { label: 'Continue', goto: ['gopnik_house', 'start'] },
    ]);
  } },
    ]);
  } },
            { label: 'Ask him to stop touching you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You push <<$boydesc>>'s hands away from your body, and quietly whisper to him: "...
    scene.text(`You push ${((s as any).boydesc ?? 0)}'s hands away from your body, and quietly whisper to him: "Please, stop touching me like that! Do you treat all girls like this?"`);
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('One of his friends pulls out a bottle of vodka from his backpack, and says: "Come on guys, beer is for kids! Today we drink like men!"');
      scene.text('His friends cheer loudly, while another guy quickly runs off to gather some snacks and plastic cups, which the guy who brought the vodka forgot for some reason.');
      scene.text('Soon his friend returns with the cups, and the vodka is poured out into the plastic cups. When they hand out the cups, you notice that yours has a fair bit more vodka in it than the cups the guys get.');
      scene.actions([
        { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You smile at the guys and propose a toast: "To meeting new friends!"');
    scene.text('They happily toast with you. You eat some anchovies from a jar that someone brought, while you take sips of your vodka. It\'s the cheap kind, and it doesn\'t taste very good.');
    // TODO-QSP: dynamic text: When your cup is nearly empty, <<$boydesc>> generously pours more in your glass ...
    scene.text(`When your cup is nearly empty, ${((s as any).boydesc ?? 0)} generously pours more in your glass with a confident smile. The guys persuade you to keep drinking, saying how much they are enjoying you spending time with them.`);
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to drink more and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to drink more and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Keep drinking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You smile at them and bring the cup to your lips, slowly sipping it down. It still doesn\'t taste very good, but you\'re starting to care less as you become more and more drunk.');
    if (((s as any).alko ?? 0) < 6) {
      scene.text('The vodka has you feeling quite drunk, but you are still able to think. At a certain point in the conversation, you see the smiles on the Gopniks\' faces make place for rather greedy grins. Suddenly everyone\'s looking at you, ogling your body from top to bottom.');
      // TODO-QSP: dynamic text: A few of the guys approach you and pick you up, despite your meek protests. You'...
      scene.text(`A few of the guys approach you and pick you up, despite your meek protests. You're too drunk to really resist, and just let it happen. They carry you towards one of the old houses in the area, and help you down the stairs to the basement. While they carry you there, one of them hisses to you: "You've made use of our hospitality for long enough, ${((s as any).pcs_nickname ?? 0)}… it's time you do something for us in return."`);
      scene.text('You guess this is what they do with all the unlucky girls they meet in the park. The basement they guide you to smells horrible. The smell of sewage makes you sick to your stomach, while the guys push you down onto the sole mattress in the basement.');
    } else {
      if (((s as any).alko ?? 0) >= 6) {
        scene.text('You feel very dizzy, and your vision is a bit blurry now. Suddenly you feel a few strong hands on your arms, pulling you up. You try to ask them where they are taking you, but the guys just grin and tell you not to worry as they leave the park with you between them. You have no clue where they\'re taking you, but after a few minutes you\'re dumped onto a dirty mattress. The room you\'re in smells horrible, you begin to feel sick from the obnoxious sewage odour.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['podval_rape', ''] },
    ]);
  } },
    ]);
  } },
        { label: 'Leave', goto: ['pav_park', 'start'] },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        // TODO-QSP: dynamic text: One of the guys suggests: "Hey guys, we don't have to hang around in the park al...
        scene.text(`One of the guys suggests: "Hey guys, we don't have to hang around in the park all day! The house should be available right now, maybe we can show ${((s as any).pcs_nickname ?? 0)} around there and not have people stare us down all day!"`);
        scene.text('The guys all raise their cups and cheer, which you\'re pretty sure counts as a yes. The boys then all look at you expectantly, hoping you will come with them.');
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Mumble an excuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Mumble an excuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Go with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You\'re having a good time with them… why not? You nod at the guys and smile as you say: "Sounds like fun, guys! Let\'s go!"');
    scene.text('The guys leave the park with you in the middle of their group, happily chatting about everyday things while they guide you to a shabby old house. One of them produces a key, and you follow them inside.');
    scene.text('It\'s a rather poorly maintained house, but you don\'t want to be rude and take a seat on a chair while some of the guys are busy putting out some snacks and pouring vodka into glasses. You notice that your glass has a lot more vodka in it than the other guys get, but don\'t think much of it… maybe they\'re just trying to be nice?');
    scene.text('The boys drain their glasses quickly, and encourage you to do the same. You bravely follow their lead, and swallow down the vodka with one large gulp.');
    scene.actions([
      { label: 'Continue', goto: ['gopnik_house', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.text('One of the guys suggests: "Hey guys, there\'s no need for us to hang around in the park all day. I know a place where we can hang out and enjoy a drink in private!"');
        scene.text('After some debate, the guys agree to go there. From some of the stares your group has been getting while you enjoyed your drinks, you can\'t blame them. They all look at you expectantly, hoping you will come with them.');
        scene.actions([
          { label: 'Go with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You agree to join them, and the Gopniks happily guide you out of the park. You walk for a few minutes, until you stop in front of a shabby looking house. To your surprise, they don\'t open the door to the house, but walk around the back and open an unlocked trap door to a basement.');
    scene.actions([
      { label: 'Follow them into the basement', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You walk down the stairs after them, and enter the basement. It\'s dark, damp and smells of sewage. When someone flicks on a light, you see that the room holds little more than a soiled mattress and a lot of empty bottles.');
    scene.text('When you look at the Gopniks to ask what\'s going on, you cal tell that all friendliness is gone from their faces. Ohe of them splashes vodka into some glasses and hands you one: "Drink this, slut. You\'re going to need it."');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_mood = 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You refuse to accept the drink, hoping they will let you go. Of course, they have no intentions of doing so.');
    scene.text('The guy shrugs: "Suit yourself, slut. You\'re getting fucked either way."');
    scene.text('He takes the glass out of your hand, and two guys grab you by your shoulders and roughly push you down onto the mattress.');
    scene.actions([
      { label: 'Continue', goto: ['podval_rape', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink the vodka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('As soon as you gulp down the vodka, the guys laugh and you feel several hands firmly grasping your shoulders, guiding you towards the dirty mattress. Several of the boys instantly reach for their pants, and you see their erect cocks clearly despite the dim light in the room.');
    scene.actions([
      { label: 'Continue', goto: ['podval_rape', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_mood = 5;
    qspCall(s, 'stat', '');
    scene.text('Wait… what? This looks way too shady for you.');
    scene.text('You refuse to go down there, and thank the boys for the nice time in the park before you try to leave. However, as soon as you turn around, you feel several arms grabbing you from behind and dragging you down the stairs quite forcefully. The basement smells like sewage, and has little more than a dirty mattress in it. You feel quite stupid now; you\'re probably not the first girl who they took down here, and you fear you won\'t be the last.');
    scene.text('The guys roughly shove you down onto the mattress, and pull their erect cocks out of their pants. One of them snarls at you: "You\'re not going anywhere until you take care of us all, whore."');
    scene.actions([
      { label: 'Continue', goto: ['podval_rape', ''] },
    ]);
  } },
    ]);
  } },
          { label: 'Leave', goto: ['pav_park', 'start'] },
        ]);
      }
    }
  } },
          ]);
        } else {
          if (((s as any).placerParameter ?? 0)?.['know_slut'] === 1  &&  ((s as any).BjBeerQW ?? 0) > 1  &&  ((s as any).bjgangrand ?? 0) === 1) {
            // TODO-QSP: dynamic text: One of the guys suddenly laughs: "Wait a minute, I know her! That's <<$pcs_nickn...
            scene.text(`One of the guys suddenly laughs: "Wait a minute, I know her! That's ${((s as any).pcs_nickname ?? 0)}, everyone knows she's a ${((s as any).gnikname ?? 0)}. She gives guys blowjobs just to get a beer! My buddy showed me a video where they gave like three guys a blowjob, and then happily said hi to her mother with the cum still on her face!"`);
            scene.text('One of the other guys approaches you, and puts his hand on your chin while he takes a good look at your face. When he sees you flinch, he slaps you across the face quite hard. He orders you: "Don\'t move, bitch."');
            scene.text('You\'re too afraid to fight him, and just let him do what he wants while he runs his fingers over your lips and slips a finger inside your mouth, which you begin to suck on without even giving it any thought.');
            // TODO-QSP: dynamic text: He laughs: "I love a nice slut with a pretty face and <<$pc_desc['lips']>> lips....
            scene.text(`He laughs: "I love a nice slut with a pretty face and ${((s as any).pc_desc ?? 0)?.['lips']} lips. Fucking them in the mouth and watching them gag on my cock… I can see you're eager to get started. Soon enough, slut. Soon enough."`);
            scene.text('Two of them put their hands on your upper arms and shoulders, and roughly guide you towards the exit of the park: "Walk, slut. We\'ll go some place quiet, so you can earn your beer."');
            scene.actions([
              { label: 'Go "earn your beer"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('The guys have a firm grip on you as they guide you out of the park and towards a shabby looking house. You probably couldn\'t run away even if you wanted to, so you meekly let them guide you to a trap door at the back of the house. One of them quickly goes down to check, and then signals his friends: "We\'re clear. Bring her in, guys."');
    scene.text('The guys firmly pull you down the stairs, and push you down onto a dirty mattress as you enter the room. When you look around you notice there\'s nothing here besides the mattress, and a whole lot of empty booze bottles. They must use this place more often, and you wonder how many poor girls have already met a similar fate on this mattress before you.');
    scene.text('Several of the guys pull their pants down and expose their erect cocks, while one of them grins at you: "Well now, movie star! We know you\'re good at this, so we expect a top notch performance from you. If you don\'t satisfy us, we\'ll just have you stay a while longer while we think of something else you can do for us."');
    scene.actions([
      { label: 'Kneel down and open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/blowbang2.jpg');
    scene.text('You realize the only way you\'re getting out of this basement is by doing as they say, and you slowly get down to your knees. The guys see your resignation, and enthusiastically begin to rub their cocks against your cheeks, spreading their precum all over you. You close your lips around the closest one and diligently suck him off. After a while you really start to get into it, and reach out for two additional cocks to masturbate with your hands while your mouth is busy.');
    scene.text('You even exceed their expectations by taking two cocks in your mouth at the same time, doing your best to make them all cum as quick as possible. They tell you to look them in the eye as they shoot their warm loads all over your face one by one. One of them is particularly mean, aiming directly at your eye. His friends cheer when a spurt of cum lands directly in it.');
    (s as any).guy = ((s as any).guy ?? 0) + (((s as any).placerParameter ?? 0)?.['number_of_man']);
    (s as any).temp_time_elapsed = 30 / ((s as any).placerParameter ?? {})?.['number_of_man'];
    (s as any).i = 0;
    // TODO-QSP: :parkbj
    if (((s as any).i ?? 0) > 0) {
      qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 18) + 18, 0, 1);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), ((s as any).i ?? 0));
    }
    // TODO-QSP: gs 'arousal', 'bj', temp_time_elapsed, $npcID[i], 'sub', 'group', 'humiliation', 'gangbang'
    // TODO-QSP: gs 'arousal', 'hj', -temp_time_elapsed, $npcID[i], 'sub', 'group', 'humiliation', 'gangbang'
    // TODO-QSP: gs 'cum_call', iif(rand(0, 1)=0, 'mouth', 'face'), $npcID[i]
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < ((s as any).placerParameter ?? 0)?.['number_of_man']) {
      // TODO-QSP: jump 'parkbj'
    }
    (s as any).face_write = 1;
    (s as any).blowbangrand = Math.floor(Math.random() * 2) + 3;
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).minut = ((s as any).minut ?? 0) + (30 - ((s as any).temp_time_elapsed ?? 0) * ((s as any).placerParameter ?? {})?.['number_of_man']);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wipe the cum from your eye', handler: (st: GameState) => {
    scene.img(`images/shared/sex/dom/blowbang${((s as any).blowbangrand ?? 0)}.jpg`);
    scene.text('You wince, trying to wipe the cum from your eye. It stings quite badly, and you feel your eyes tearing up.');
    scene.text('The Gopniks don\'t care, and write some humiliating text on your forehead with a marker they found somewhere.');
    scene.text('One of them says: "We\'re doing you a favor, slut. This way, everyone will recognize you for what you are, and it will help you remember your place."');
    scene.text('You feel deeply humiliated, but are too embarrassed to contradict them. After a few more minutes of degrading talk, they finally let you leave the basement."');
    qspCall(s, 'cum_cleanup', 'external');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find your way back to the main streets', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).placerParameter ?? 0)?.['know_slut'] === 1) {
              // TODO-QSP: dynamic text: One of the guys tells you: "<<$pcs_nickname>>, we all know you're a <<$gnikname>...
              scene.text(`One of the guys tells you: "${((s as any).pcs_nickname ?? 0)}, we all know you're a ${((s as any).gnikname ?? 0)}". One of his friends pitches in: "In other words: we're going to some place quiet and we're going to fuck you. Cause trouble and we'll knock your teeth out. Understood?"`);
              scene.actions([
                { label: 'Go with the guys', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You meekly nod, knowing you can\'t stand up to all of them. Just doing what they want is probably your easiest way out of here.');
    scene.text('They guide you to a shabby house near the park, and guide you down into the basement below the house. Besides a dirty mattress and a lot of empty bottles, the basement is empty.');
    scene.text('Several of them already drop their pants, revealing their stiff cocks. One of them tells you: "You know why you\'re here, slut. Get to work."');
    scene.actions([
      { label: 'Squat before them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/blowbang.jpg');
    scene.text('You obediently squat before them, and take two cocks into your hands. You masturbate them slowly, spreading their precum over them as you close your lips around the first.');
    scene.text('You do your best to please them all as good as you can, and suck them off one by one like your life depended on it. For all you know, maybe it does.');
    scene.text('The guys don\'t last long at all, and cum all over your face one by one. Once the last guy is spent, they wave you off. One of them snorts: "Not bad, slut. I see your reputation is well deserved."');
    (s as any).guy = ((s as any).guy ?? 0) + (((s as any).placerParameter ?? 0)?.['number_of_man']);
    (s as any).temp_time_elapsed = 30 / ((s as any).placerParameter ?? {})?.['number_of_man'];
    (s as any).i = 0;
    // TODO-QSP: :parkbj2
    if (((s as any).i ?? 0) > 0) {
      qspCall(s, 'npcgeneratec', '', 0, 'Stranger', Math.floor(Math.random() * 18) + 18, 0, 1);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), ((s as any).i ?? 0));
    }
    // TODO-QSP: gs 'arousal', 'bj', temp_time_elapsed, $npcID[i], 'sub', 'group', 'humiliation'
    // TODO-QSP: gs 'arousal', 'hj', -temp_time_elapsed, $npcID[i], 'sub', 'group', 'humiliation'
    // TODO-QSP: gs 'cum_call', iif(rand(0, 1)=0, 'mouth', 'face'), $npcID[i]
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < ((s as any).placerParameter ?? 0)?.['number_of_man']) {
      // TODO-QSP: jump 'parkbj2'
    }
    (s as any).minut = ((s as any).minut ?? 0) + (30 - ((s as any).temp_time_elapsed ?? 0) * ((s as any).placerParameter ?? {})?.['number_of_man']);
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the basement and return to the park', goto: ['pav_park', 'start'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      } else {
        if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
          if (((s as any).placerParameter ?? 0)?.['know_slut'] === 0) {
            scene.text('You see one of the guys come behind to your friend, closing his arms around her in a bear grip as he kisses her neck. Another guy does the same to you, and kisses your neck quite aggressively while he has a tight grip on your waist.');
            qspCall(s, 'willpower', 'sex', 'resist', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Grab your friend and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Grab your friend and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You can't do this! You break free from the Gopniks and quickly take <<$ev_name>>...
    scene.text(`You can't do this! You break free from the Gopniks and quickly take ${((s as any).ev_name ?? 0)}'s hand. You drag her along as you walk away from the Gopniks. She's a bit reluctant to leave them at first, but trusts your judgment enough to follow you without objections.`);
    scene.actions([
      { label: 'Leave the park', goto: ['placer_end', ''] },
    ]);
  } },
              ]);
            }
            return;
            scene.actions([
              { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You kiss the guy passionately, and just try to enjoy him groping your body. In t...
    scene.text(`You kiss the guy passionately, and just try to enjoy him groping your body. In the corner of your eye you see ${((s as any).ev_name ?? 0)} receiving a similar treatment, several more guys gathering around the two of you. They're all pawing at your ass and boobs greedily, and suggest you go with them to their home for some more fun.`);
    qspCall(s, 'arousal', 'kiss', 5, 'group');
    qspCall(s, 'arousal', 'foreplay', (-5), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go with the guys', goto: ['placer_gop_orgy', ''] },
    ]);
  } },
            ]);
          }
          if (((s as any).placerParameter ?? 0)?.['know_slut'] === 1) {
            // TODO-QSP: dynamic text: One of the guys says: "<<$pcs_nickname>>, we all know you're a whore. If your li...
            scene.text(`One of the guys says: "${((s as any).pcs_nickname ?? 0)}, we all know you're a whore. If your little girlfriend is with you, we can only assume she is, too."`);
            scene.text('Another guy pitches in: "In other words: you and your girlfriend are going to entertain us at our place. If you\'re good enough, we\'ll let you go afterwards."');
            return;
            scene.actions([
              { label: 'Go with the guys', goto: ['placer_gop_orgy', ''] },
              { label: 'Try to leave with your friend', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You firmly tell the guys: "I don\'t think so guys, we\'re not going anywhere with you."');
    // TODO-QSP: dynamic text: Several of them surround <<$ev_name>>, and threaten you: "We weren't asking, bit...
    scene.text(`Several of them surround ${((s as any).ev_name ?? 0)}, and threaten you: "We weren't asking, bitch. Either you're coming with us to share the load, or your cute little friend here is going to have to satisfy all of us by herself. You probably won't see her again today in that case, we're going to need her services for quite a while if she has to do it all alone."`);
    // TODO-QSP: dynamic text: You can see <<$ev_name>>'s eyes widen, giving you a begging look. It's quite obv...
    scene.text(`You can see ${((s as any).ev_name ?? 0)}'s eyes widen, giving you a begging look. It's quite obvious she is feeling very intimidated, and really doesn't want to go with them by herself.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Talk them down and leave with your friend [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Talk them down and leave with your friend [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['placer_end', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go with the guys', goto: ['placer_gop_orgy', ''] },
    ]);
  } },
            ]);
          }
        }
      }
    }
    if (((s as any).placerParameter ?? 0)?.['recognize_status'] < 2) {
      (s as any).tiprand = Math.floor(Math.random() * 2) + 0;
      (s as any).tiploverand = Math.floor(Math.random() * 2) + 0;
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
        if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0  &&  ((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
          if (((s as any).placerParameter ?? 0)?.['slut_visual'] > 0) {
            scene.text('The guy comes up to you, and aggressively kisses you on your mouth.');
            scene.actions([
              { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('That came a bit out of the blue… but wow, he\'s a good kisser! You kiss the guy back enthusiastically.');
    scene.text('After a while he takes you by the hand, and leads you to some bushes. Before you know what\'s going on, he pulls down his pants. His erect cock comes jumping out, bouncing lightly. He looks at you with a meaningful look on his face, expecting you to service it.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'skverdin', 'd_park_placer_bj');
    scene.actions([
      { label: '"Hey, what are you doing!?"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You angrily exclaim: "Hey, are you crazy!? What\'s the meaning of this?"');
    // TODO-QSP: dynamic text: The guy just grins at you: "Everyone knows you're a whore, <<$pcs_nickname>>. We...
    scene.text(`The guy just grins at you: "Everyone knows you're a whore, ${((s as any).pcs_nickname ?? 0)}. We've all seen the video… it's way too late for you to start being a prude now. Come on, it'd only take a minute. What do you say?"`);
    qspCall(s, 'skverdin', 'd_park_placer_bj');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
      ]);
    }
  } },
      { label: '"Are you crazy? What if someone sees?"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You hiss angrily at the guy: "Are you crazy? What if someone sees us here?"');
    // TODO-QSP: dynamic text: The guy smiles: "Look around, <<$pcs_nickname>>! We're alone, we'll be fine!"
    scene.text(`The guy smiles: "Look around, ${((s as any).pcs_nickname ?? 0)}! We're alone, we'll be fine!"`);
    qspCall(s, 'skverdin', 'd_park_placer_bj');
    scene.actions([
      { label: '"Not here, sorry"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You look at the guy with disbelief and tell him: "Look… you\'re kind of cute, but there\'s no way I would do that in a public place like this."');
    scene.text('The guy still smiles, and offers: "Well… how about we go to my place then? No one will be able to see us there!"');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go to his place', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).tiperand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).tiperand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['fbHouse', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['fbDorm', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['fbGar', ''] }]);
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
            scene.text('The guy offers: "Hey babe… how about you and I go back to my place? I bet we could have some fun together, no one would disturb us…"');
            scene.actions([
              { label: 'Go to his place', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).tiperand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).tiperand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['fbHouse', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['fbDorm', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['fbGar', ''] }]);
    }
  } },
            ]);
          }
        } else {
          if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0  &&  ((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
            if ((!((s as any).tiploverand ?? 0))) {
              // TODO-QSP: dynamic text: You're having fun, drinking beers with your friend and the guy you just met. Aft...
              scene.text(`You're having fun, drinking beers with your friend and the guy you just met. After a while you realize that he is mostly just paying attention to you though, while pretending your friend ${((s as any).ev_name ?? 0)} isn't there.`);
              scene.actions([
                { label: 'Kiss the guy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc>> whispers in your ear: "Come on <<$pcs_nickname>>, let's go to my pl...
    scene.text(`${((s as any).boydesc ?? 0)} whispers in your ear: "Come on ${((s as any).pcs_nickname ?? 0)}, let's go to my place…"`);
    if (((s as any).placerParameter ?? 0)?.['friend_slut'] < 50  ||  (((s as any).placerParameter ?? 0)?.['friend_index'] === 14  &&  ((s as any).katjaQW ?? 0)?.['park_sex'] < (Math.floor(Math.random() * 2) + 1))) {
      // TODO-QSP: dynamic text: <<$ev_name>> seems to understand where this is going, and nods at you: "Okay, <<...
      scene.text(`${((s as any).ev_name ?? 0)} seems to understand where this is going, and nods at you: "Okay, ${((s as any).pcs_nickname ?? 0)}… I guess I should leave the two of you alone. I'll see you later?"`);
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave with your friend [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave with your friend [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Say goodbye and go with the guy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).tiperand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).tiperand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['fbHouse', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['fbDorm', ''] }]);
    }
    if (((s as any).tiperand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['fbGar', ''] }]);
    }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$ev_name>> smiles as she licks her lips: "He's cute, <<$pcs_nickname>>… take m...
      scene.text(`${((s as any).ev_name ?? 0)} smiles as she licks her lips: "He's cute, ${((s as any).pcs_nickname ?? 0)}… take me with you?"`);
      scene.actions([
        { label: 'Go to his apartment together', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['placer_house', ''] },
      ]);
    }
  } },
              ]);
            } else {
              if (((s as any).tiploverand ?? 0) === 1) {
                // TODO-QSP: dynamic text: You're having fun, drinking beers with your friend and the guy you just met. Aft...
                scene.text(`You're having fun, drinking beers with your friend and the guy you just met. After a while you realize that he is mostly just paying attention to ${((s as any).ev_name ?? 0)} though, while pretending you are not there.`);
                scene.actions([
                  { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['friend_slut'] < 30) {
      // TODO-QSP: dynamic text: <<$ev_name>> kisses the guy for a while, but when he whispers something to her s...
      scene.text(`${((s as any).ev_name ?? 0)} kisses the guy for a while, but when he whispers something to her she apologizes to him: "Sorry, ${((s as any).boydesc ?? 0)}… I can't just leave ${((s as any).pcs_nickname ?? 0)} hanging. We should be going."`);
      scene.actions([
        { label: 'Leave with your friend', goto: ['placer_end', ''] },
      ]);
    }
    if (((s as any).placerParameter ?? 0)?.['friend_slut'] >= 30  &&  ((s as any).placerParameter ?? 0)?.['friend_slut'] < 60) {
      // TODO-QSP: dynamic text: <<$ev_name>> kisses the guy, and he begins to grope her body. She quickly whispe...
      scene.text(`${((s as any).ev_name ?? 0)} kisses the guy, and he begins to grope her body. She quickly whispers something in his ear, and you see him nod. Then ${((s as any).ev_name ?? 0)} turns to you: "Sorry ${((s as any).pcs_nickname ?? 0)}, ${((s as any).boydesc ?? 0)} promised me he'd show me his cool rock collection. His apartment is small though, there'd be no room for the both of us… I'll see you later?"`);
      if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14) {
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (10);
        ((s as any).katjaQW ?? {})['horny'] = 0;
        if (((s as any).katjaQW ?? 0)?.['park_sex'] === 0) {
          ((s as any).katjaQW ?? {})['park_sex'] = 1;
        }
      }
      scene.actions([
        { label: 'Watch her leave with the stranger', goto: ['pav_park', 'start'] },
      ]);
    } else {
      if (((s as any).placerParameter ?? 0)?.['friend_slut'] >= 60) {
        // TODO-QSP: dynamic text: <<$ev_name>> kisses the guy, and he begins to grope her body. She quickly whispe...
        scene.text(`${((s as any).ev_name ?? 0)} kisses the guy, and he begins to grope her body. She quickly whispers something in his ear, and you see him nod. Then ${((s as any).ev_name ?? 0)} turns to you and asks innocently: "Hey ${((s as any).pcs_nickname ?? 0)}… ${((s as any).boydesc ?? 0)} asks if you want to come with us for some fun. What do you say?"`);
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse and tell her to have fun [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse and tell her to have fun [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_park', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Go to his apartment together', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['placer_house', ''] },
        ]);
      }
    }
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
          if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
            if (((s as any).placerParameter ?? 0)?.['slut_visual'] > 0) {
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
              }
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 2) {
              }
              // TODO-QSP: dynamic text: <<$boydesc>> comes up to you, and aggressively kisses you on your mouth while he...
              scene.text(`${((s as any).boydesc ?? 0)} comes up to you, and aggressively kisses you on your mouth while he hugs you. ${((s as any).textsub ?? 0)}.`);
              scene.actions([
                { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('His lips taste like the beer you\'ve both been drinking. You ease up against him and kiss him back, happy to surrender to him for just one moment. The guy feels your body relax and begins to grope your ass greedily, hoping he can get you to put out more.');
    // TODO-QSP: dynamic text: When you don't object, he pulls away and asks you: "Hey, <<$pcs_nickname>>… you'...
    scene.text(`When you don't object, he pulls away and asks you: "Hey, ${((s as any).pcs_nickname ?? 0)}… you're cute! We're staying in a hostel just minutes away from the park. Want to come party with us there?"`);
    scene.actions([
      { label: 'Go with the guys', handler: (st: GameState) => {
    if (((s as any).alko ?? 0) > 10) {
      (s as any).alko = 10;
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/sleep/drunk.jpg');
    // TODO-QSP: dynamic text: The guys cheer when you say you'll come with them, and <<$boydesc>> takes your h...
    scene.text(`The guys cheer when you say you'll come with them, and ${((s as any).boydesc ?? 0)} takes your hand while he guides you out of the park. You make a quick stop at a liquor store, so one of the guys can buy some booze for the party.`);
    // TODO-QSP: dynamic text: When you enter the hostel room, you see it has nothing but a few iron beds for f...
    scene.text(`When you enter the hostel room, you see it has nothing but a few iron beds for furniture. ${((s as any).boydesc ?? 0)} pulls you down onto a bed with him, and begins to make out with you again while another guy pours the booze into some glasses and hands everyone a glass.`);
    scene.text('The guys can stomach their alcohol a lot better than you, and before you know it you\'re absolutely hammered. They look like they\'re still feeling fine.');
    scene.text('Once they realize you\'re drunk enough for them to make their move, they begin tugging at your clothes and undress you on one of their beds. You\'re too drunk to tell them to stop, and just let it happen.');
    scene.actions([
      { label: 'Continue', goto: ['placer_sex', 'meet'] },
    ]);
  } },
    ]);
  } },
              ]);
            } else {
              // TODO-QSP: dynamic text: <<$boydesc>> comes up to you, and aggressively kisses you on your mouth while he...
              scene.text(`${((s as any).boydesc ?? 0)} comes up to you, and aggressively kisses you on your mouth while he hugs you.`);
              scene.text('His lips taste like the beer you\'ve both been drinking. You ease up against him and kiss him back, happy to surrender to him for just one moment. The guy feels your body relax and begins to grope your ass greedily, hoping he can get you to put out more.');
              // TODO-QSP: dynamic text: When you don't object, he pulls away and asks you: "Hey, <<$pcs_nickname>>… you'...
              scene.text(`When you don't object, he pulls away and asks you: "Hey, ${((s as any).pcs_nickname ?? 0)}… you're cute! We're staying in a hostel just minutes away from the park. Want to come party with us there?"`);
              scene.actions([
                { label: 'Go with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/sleep/drunk.jpg');
    // TODO-QSP: dynamic text: The guys cheer when you say you'll come with them, and <<$boydesc>> takes your h...
    scene.text(`The guys cheer when you say you'll come with them, and ${((s as any).boydesc ?? 0)} takes your hand while he guides you out of the park. The group makes a quick stop at a liquor store, so one of the guys can buy some booze for the party.`);
    // TODO-QSP: dynamic text: When you enter the hostel room, you see it has nothing but a few iron beds for f...
    scene.text(`When you enter the hostel room, you see it has nothing but a few iron beds for furniture. ${((s as any).boydesc ?? 0)} pulls you down onto a bed with him, and begins to make out with you again while another guy pours the booze into some glasses and hands everyone a glass.`);
    scene.text('The guys can stomach their alcohol a lot better than you, and before you know it you\'re absolutely hammered. They look like they\'re still feeling fine.');
    scene.text('Once they realize you\'re drunk enough for them to make their move, they begin to take off your clothes and undress you on one of their beds. You\'re too drunk to tell them to stop, and just let it happen.');
    scene.actions([
      { label: 'Continue', goto: ['placer_sex', 'meet'] },
    ]);
  } },
              ]);
            }
          } else {
            if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
              if (((s as any).placerParameter ?? 0)?.['slut_visual'] > 0) {
                scene.text('You see one of the guys come behind to your friend, closing his arms around her in a bear grip as he kisses her neck. Another guy does the same to you, and kisses your neck quite aggressively while he has a tight grip on your waist.');
                scene.actions([
                  { label: 'Kiss him', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You kiss the guy passionately, and just try to enjoy him groping your body. In t...
    scene.text(`You kiss the guy passionately, and just try to enjoy him groping your body. In the corner of your eye you see ${((s as any).ev_name ?? 0)} receiving a similar treatment, several more guys gathering around the two of you. They're all pawing at your ass and boobs greedily, and suggest you go with them to their home for some more fun. ${((s as any).boydesc ?? 0)} whispers in your ear: "Want to go to my place, babe? We can get some alone time there… or we can bring your friend along and all go there together?"`);
    scene.actions([
      { label: 'Bring your friend along and go to their place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['placer_house', ''] },
      { label: 'Go with him for some alone time, leaving your friend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['placer_house_one', ''] },
    ]);
  } },
                ]);
              } else {
                // TODO-QSP: dynamic text: You see one of the guys move up behind your friend, closing his arms around her ...
                scene.text(`You see one of the guys move up behind your friend, closing his arms around her in a bear grip as he kisses her neck. Another guy does the same to you, and kisses your neck quite aggressively while he has a tight grip on your waist. ${((s as any).boydesc ?? 0)} whispers in your ear: "Hey babe… how about you and your friend come back to my place? I bet we could have some fun together…"`);
                scene.actions([
                  { label: 'Go with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You leave the park with <<$ev_name>> and the guys, and chat with them while they...
    scene.text(`You leave the park with ${((s as any).ev_name ?? 0)} and the guys, and chat with them while they lead you to their apartment.`);
    scene.actions([
      { label: 'Continue', goto: ['placer_house', ''] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
      scene.actions([
        { label: 'Turn around and walk away', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).placerParameter ?? 0)?.['know_slut'] === 0) {
      if (((s as any).placerParameter ?? 0)?.['slut_visual'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
      }
      if (((s as any).placerParameter ?? 0)?.['slut_visual'] > 0) {
        if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
          // TODO-QSP: dynamic text: <<$boydesc>> disappointedly remarks: "We know you're a whore… why are you being ...
          scene.text(`${((s as any).boydesc ?? 0)} disappointedly remarks: "We know you're a whore… why are you being such a prude?"`);
          scene.text('You shrug at him and keep walking… that remark sure made your decision to leave a lot easier! What a jackass!');
          scene.actions([
            { label: 'Leave', goto: ['pav_park', 'start'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
        }
      }
    } else {
      if (((s as any).placerParameter ?? 0)?.['know_slut'] === 1) {
        if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
          scene.text('You shake your head and apologize: "Sorry boys… I have places to be. Maybe some other time" as you leave. You walk away in a brisk pace, and are gone before they can object.');
          scene.actions([
            { label: 'Return to the park', goto: ['pav_park', 'start'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
        }
      }
    }
  } },
      ]);
    } else {
      if (((s as any).placerParameter ?? 0)?.['friend_index'] > 0) {
        scene.actions([
          { label: 'Leave with your friend', goto: ['placer_end', ''] },
        ]);
      }
    }
  }
  scene.build();
}

export const placer_act: LocationDef = {
  name: 'placer_act',
  title: 'The guy comes up to you, and aggressively kisses you on your',
  region: 'other',
  description: ['The guy comes up to you, and aggressively kisses you on your mouth.'],
  enter: enter,
};
