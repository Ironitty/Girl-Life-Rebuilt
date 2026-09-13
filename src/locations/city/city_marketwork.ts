import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Marketplace</b></center>');
  scene.img('images/locations/city/residential/market/rinok.jpg');
  scene.text('You stand at your clothes stall waiting for customers.');
  // TODO-QSP: dynamic text: You have sold <<rinvesh>> items and taken <<$func('money', 'string_profit', rinm...
  scene.text(`You have sold ${((s as any).rinvesh ?? 0)} items and taken ${qspFunc(s, 'money', 'string_profit', ((s as any).rinmon ?? 0))} in cash.`);
  // TODO-QSP: dynamic text: The average price on the market is <<prodpayum>>.
  scene.text(`The average price on the market is ${((s as any).prodpayum ?? 0)}.`);
  if (((s as any).hour ?? 0) === 14) {
    scene.text('Arthur comes up to you and you start to calculate how much you should give him.');
    return;
    scene.actions([
      { label: 'Give money to Arthur', handler: (st: GameState) => {
    (s as any).rinart = ((s as any).rinvesh ?? 0) * 1000;
    (s as any).rinmon = ((s as any).rinmon ?? 0) - (((s as any).rinart ?? 0));
    qspCall(s, 'money', 'earn', ((s as any).rinmon ?? 0), 'cash');
    qspCall(s, 'jobs', 'clock', 'city_market_saleswoman');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You give Arthur <<rinart>> per sold <<rinvesh>> items.
    scene.text(`You give Arthur ${((s as any).rinart ?? 0)} per sold ${((s as any).rinvesh ?? 0)} items.`);
    // TODO-QSP: dynamic text: You have earned ' + $func('money', 'string_profit', rinmon) + ' today.
    scene.text('You have earned \' + $func(\'money\', \'string_profit\', rinmon) + \' today.');
    (s as any).rinmon = 0;
    (s as any).rinvesh = 0;
    if (((s as any).rinart ?? 0) < ((s as any).arturplan ?? 0)) {
      (s as any).arturnoo = ((s as any).arturnoo ?? 0) + (1);
      // TODO-QSP: dynamic text: This is bad, <<$pcs_nickname>>. You haven't made enough money. You'll completely...
      scene.text(`This is bad, ${((s as any).pcs_nickname ?? 0)}. You haven't made enough money. You'll completely ruin me!`);
    } else {
      (s as any).arturyes = ((s as any).arturyes ?? 0) + (1);
      // TODO-QSP: dynamic text: Well done <<$pcs_nickname>>, good job today.
      scene.text(`Well done ${((s as any).pcs_nickname ?? 0)}, good job today.`);
    }
    if (((s as any).arturnoo ?? 0) > ((s as any).arturyes ?? 0)) {
      (s as any).arturnoo = ((s as any).arturnoo ?? 0) - ((s as any).arturyes ?? 0);
      (s as any).arturyes = 0;
    }
    if (((s as any).arturyes ?? 0) > ((s as any).arturnoo ?? 0)) {
      (s as any).arturyes = ((s as any).arturyes ?? 0) - ((s as any).arturnoo ?? 0);
      (s as any).arturnoo = 0;
    }
    if (((s as any).arturnoo ?? 0) === ((s as any).arturyes ?? 0)) {
      (s as any).arturnoo = 0;
      (s as any).arturyes = 0;
    }
    if (((s as any).arturnoo ?? 0) > 10) {
      (s as any).arturnoo = 0;
      qspCall(s, 'jobs', 'set_fired', 'city_market_saleswoman');
      scene.text('You\'re fucking useless! Here\'s your papers. I don\'t want to see you again!');
      return;
      scene.actions([
        { label: 'Leave', goto: ['city_residential', ''] },
      ]);
    }
    if (((s as any).pcs_apprnc ?? 0) < (Math.floor(Math.random() * 400) + 0)) {
      scene.actions([
        { label: 'Leave work', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).palevorin ?? 0) <= 1  ||  ((s as any).palevorin ?? 0) === 3) {
        if ((!((s as any).palevorin ?? 0))) {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you and I have not met properly. Come into the warehouse...
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, you and I have not met properly. Come into the warehouse. We can have a drink and a bite to eat while we get acquainted."`);
        } else {
          if (((s as any).palevorin ?? 0) === 1) {
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, want to come to the warehouse again?"
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, want to come to the warehouse again?"`);
          } else {
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Come into the warehouse and have a drink with me." He wa...
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. Come into the warehouse and have a drink with me." He walks right up to you and slaps you on the ass.`);
          }
        }
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You start making excuses and Arthur frowns. "Hey, don\'t insult me! Your stall is filthy, just look at all this dust and dirt! I should fine you, but if you\'re nice, I\'ll let you off.');
    scene.actions([
      { label: 'Go to the warehouse', goto: ['city_marketsex', 'the_beginning'] },
      { label: 'No', handler: (st: GameState) => {
    (s as any).arturplan = ((s as any).arturplan ?? 0) + (1000);
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1) {
      qspCall(s, 'money', 'pay', 1000, 'cash');
      // TODO-QSP: dynamic text: "Your stall is filthy! I'm fining you ' + $func('money', 'string_price', 1000) +...
      scene.text('"Your stall is filthy! I\'m fining you \' + $func(\'money\', \'string_price\', 1000) + \'." You hand over the money and Arthur quickly snatches it.');
    } else {
      scene.text('Go with him before it gets worse.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
          { label: 'Go with him', goto: ['city_marketsex', 'the_beginning'] },
        ]);
      } else {
        if (((s as any).palevorin ?? 0) === 2) {
          scene.text('Arthur walks into the stall behind you carrying some boxes. He places them down and walks up behind you, giving your ass a slap and squeeze. "I\'m glad you turned Abdul and Hassan down. I like having you all to myself."');
          scene.text('You turn your head to look at him and smile. "I like that too, but maybe you can lock the door first from now on?"');
          scene.text('He laughs and nods. "Of course of course, anything for you my sweet. If you wish for the door to be locked, the door will be locked. Why don\'t we go and make sure it works first…"');
          scene.actions([
            { label: 'Go with Arthur', handler: (st: GameState) => {
    (st as any).palevorin = 3;
  }, goto: ['city_marketsex', 'the_beginning'] },
          ]);
        } else {
          if (((s as any).palevorin ?? 0) === 4) {
            scene.text('Arthur walks into the stall behind you carrying some boxes. He places them down and walks up behind you, giving your ass a slap and squeeze with one hand while the other snakes around and roughly grabs your breast as he whispers in your ear. "So, you like cock? I didn\'t think you were a little slut but that\'s okay, I like dirty sluts."');
            scene.text('He cuts you off before you can protest. "No it\'s good, I can use this. Now let\'s go to the warehouse so I can fuck you."');
            qspCall(s, 'willpower', 'sex', 'resist', 'hard');
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
    qspCall(s, 'stat', '');
    scene.text('You shake your head and pull out of his grasp. "I\'m not a slut and I\'m sure as hell not going with you!"');
    scene.text('You see the anger flare up in his eyes. "So you think you\'re too good for me whore? I gave you a job and treated you well. Then you fucked those two and now I\'m not good enough?" He shakes his head. "Get your ass in the warehouse <i>now</i> or you\'re fired and I\'ll tell Abdul and Hassan they are free to tell everyone about how you greedily took their cocks like the little slut you are."');
    scene.text('You\'re shocked at this level of anger and the ultimatum. You are unsure of what to do…');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Get fired [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get fired [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'cheeks', 'slap');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No, I won\'t go with you."');
    scene.text('Before you notice him raising his hand, you feel the burning sensation on your cheek as he slaps you. "Then get out of here whore! You\'re fired and I don\'t want to see you back here!" He pushes you out from behind his stall, loud enough that many people are looking in your direction to what\'s going on.');
    scene.text('You walk away in shame while rubbing your stinging cheek.');
    if ((!((s as any).rinslut ?? 0))) {
      (s as any).rinslut = 1;
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to warehouse', handler: (st: GameState) => {
    (st as any).palevorin = 5;
  }, goto: ['city_marketsex', 'sex'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Go with him ', handler: (st: GameState) => {
    (st as any).palevorin = 5;
  }, goto: ['city_marketsex', 'sex'] },
            ]);
          } else {
            if (((s as any).palevorin ?? 0) === 5) {
              (s as any).sexgrouprand = Math.floor(Math.random() * 2) + 0;
              if (((s as any).sexgrouprand ?? 0) === 1) {
                scene.text('Arthur walks up and slaps your ass hard before grabbing you roughly by the arm. "Hey bitch, how would you like to make some extra money? My friends need company."');
                scene.actions([
                  { label: 'Go with him', goto: ['city_marketsex', 'group'] },
                ]);
              } else {
                scene.text('Arthur walks up and slaps your ass hard before grabbing you roughly by the arm. "Get your fucking ass in the warehouse, bitch."');
                scene.actions([
                  { label: 'Go with him', goto: ['city_marketsex', 'sex'] },
                ]);
              }
              qspCall(s, 'willpower', 'sex', 'resist', 'hard');
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
    qspCall(s, 'stat', '');
    scene.text('You start making excuses and Arthur frowns. "Don\'t insult me you little fucking slut! I was there. I know what a cock loving whore you are. Now get your fucking ass in the warehouse or the whole town will know about you!"');
    if (((s as any).sexgrouprand ?? 0) === 1) {
      scene.actions([
        { label: 'Go to warehouse', goto: ['city_marketsex', 'group'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to warehouse', goto: ['city_marketsex', 'sex'] },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).arturnoo = 0;
    qspCall(s, 'jobs', 'set_fired', 'city_market_saleswoman');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if ((!((s as any).rinslut ?? 0))) {
      (s as any).rinslut = 1;
    }
    if (((s as any).repa ?? 0) < 6) {
      (s as any).repa = 6;
    }
    scene.text('"Then fuck you, you little fucking whore! You\'re fired and by tomorrow the whole town will know what a cock loving whore you are!"');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
                ]);
              }
            } else {
              scene.actions([
                { label: 'Leave work', goto: ['city_residential', ''] },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 14) {
      (s as any).rintakrand = Math.floor(Math.random() * 6) + 0;
      (s as any).talkrand = Math.floor(Math.random() * 3) + 0;
      if (((s as any).hour ?? 0) === 9) {
        if ((!((s as any).rintakrand ?? 0))) {
          scene.actions([
            { label: 'Watch Hassan and Nadia', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('"You will sell more today, and to the rich ladies. I need the money, Nadia."');
    }
    if (((s as any).talkrand ?? 0) === 1) {
      scene.text('Hassan opens trunks and puts clothes on the counter.');
    }
    if (((s as any).talkrand ?? 0) >= 2) {
      scene.text('Hassan drags trunks to his stall.');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).rintakrand ?? 0) === 1) {
            scene.actions([
              { label: 'Watch Abdul and Anna', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('"We\'re fucked, you can\'t sell anything!" Abdul shouts at Anna. "No wonder! You give me this rotten shit to sell! Nobody wants it!" she retorts.');
    }
    if (((s as any).talkrand ?? 0) === 1) {
      scene.text('Abdul slaps Anna\'s ass, but she pretends that nothing happened.');
    }
    if (((s as any).talkrand ?? 0) >= 2) {
      scene.text('Abdul drags trunks to his stall.');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).rintakrand ?? 0) === 2) {
              scene.actions([
                { label: 'Watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('They continue to talk, but you don\'t know the language and can\'t understand what they\'re saying.');
    }
    if (((s as any).talkrand ?? 0) === 1) {
      scene.text('They ignore you and discuss what sounds like clothes prices.');
    }
    if (((s as any).talkrand ?? 0) >= 2) {
      scene.text('Abdul looks at you. "Look at that girl. She looks like a good fuck." Hassan looks you over and nods in agreement.');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).rintakrand ?? 0) === 3) {
                scene.actions([
                  { label: 'Chat with the girls', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('Anna tells you that her skirt needed altering and that there is a great tailor\'s shop nearby.');
    } else {
      scene.text('Nadia tells you how some pervert molested her on the subway by rubbing his dick on her ass.');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).rintakrand ?? 0) === 4) {
                  scene.actions([
                    { label: 'Watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('They continue to talk, but you don\'t know the language and can\'t understand what they\'re saying.');
    }
    if (((s as any).talkrand ?? 0) === 1) {
      scene.text('They ignore you and discuss what sounds like clothes prices.');
    }
    if (((s as any).talkrand ?? 0) >= 2) {
      scene.text('Abdul looks at you. "Nice looking girl you got there. You fucking her?"');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).rintakrand ?? 0) >= 5) {
                    scene.actions([
                      { label: 'View the Armenians', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('They continue to talk, but you don\'t know the language and can\'t understand what they\'re saying.');
    }
    if (((s as any).talkrand ?? 0) === 1) {
      scene.text('They ignore you and discuss what sounds like clothes prices.');
    }
    if (((s as any).talkrand ?? 0) >= 2) {
      scene.text('Abdul looks at you. "Pretty little girl you have there. Can I have her?"');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                    ]);
                  }
                }
              }
            }
          }
        }
        // TODO-QSP: dynamic text: <<$rintak>>
        scene.text(`${((s as any).rintak ?? 0)}`);
      } else {
        if (((s as any).hour ?? 0) === 10) {
          if ((!((s as any).rintakrand ?? 0))) {
            scene.actions([
              { label: 'Watch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('"Nadia, why do you refuse? Come and have some wine."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).rintakrand ?? 0) === 1) {
              scene.actions([
                { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia sits her crossword down and willingly gossips with you.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).rintakrand ?? 0) === 2) {
                scene.actions([
                  { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).rintakrand ?? 0) === 3) {
                  scene.actions([
                    { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anna is happy to chat with you about pretty much anything.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).rintakrand ?? 0) === 4) {
                    scene.actions([
                      { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anna frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).rintakrand ?? 0) >= 5) {
                      scene.actions([
                        { label: 'Chat with Anna and Aunt Katya', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).tetaKataQW = ((s as any).tetaKataQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Aunt Katya is talking about her pies and Anna complains that it\'s because of her pies that her ass is twice as big as it was.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                      ]);
                    }
                  }
                }
              }
            }
          }
          // TODO-QSP: dynamic text: <<$rintak>>
          scene.text(`${((s as any).rintak ?? 0)}`);
        } else {
          if (((s as any).hour ?? 0) === 11) {
            if ((!((s as any).rintakrand ?? 0))) {
              scene.actions([
                { label: 'Look at Nadia and Armenians', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('The Armenians seem to be trying to persuade Nadia to have sex with them.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).rintakrand ?? 0) === 1) {
                scene.actions([
                  { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia finishes her cake and chats with you.');
    if (((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] === 0) {
      if (!(s as any).job_hiring_step) (s as any).job_hiring_step = {}; (s as any).job_hiring_step['city_office_cleaner'] = 1;
      scene.text('Nadia tells you about an office building not too far away that is looking for a cleaner.');
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).rintakrand ?? 0) === 2) {
                  scene.actions([
                    { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).rintakrand ?? 0) === 3) {
                    scene.actions([
                      { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anna is happy to chat with you about pretty much anything.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).rintakrand ?? 0) === 4) {
                      scene.actions([
                        { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anya frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).rintakrand ?? 0) >= 5) {
                        scene.actions([
                          { label: 'Look at Nadia and Armenians', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('The Armenians seem to be trying to persuade Nadia to have sex with them.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                        ]);
                      }
                    }
                  }
                }
              }
            }
            // TODO-QSP: dynamic text: <<$rintak>>
            scene.text(`${((s as any).rintak ?? 0)}`);
          } else {
            if (((s as any).hour ?? 0) === 12) {
              if ((!((s as any).rintakrand ?? 0))) {
                scene.actions([
                  { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia shies away from talking in front of Hassan.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).rintakrand ?? 0) === 1) {
                  scene.actions([
                    { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).rintakrand ?? 0) === 2) {
                    scene.actions([
                      { label: 'Chat with the girls', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if ((!((s as any).talkrand ?? 0))) {
      scene.text('Anna tells you that her friend used to clean an office building not far from here and that they are looking for a new cleaner if you need to make some extra cash.');
      if (((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] === 0) {
        if (!(s as any).job_hiring_step) (s as any).job_hiring_step = {}; (s as any).job_hiring_step['city_office_cleaner'] = 1;
      }
    } else {
      if (((s as any).talkrand ?? 0) === 1) {
        scene.text('Nadia tells you how some pervert molested her on the subway by rubbing his dick on her ass.');
      }
    }
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).rintakrand ?? 0) === 3) {
                      scene.actions([
                        { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anna frowns at you. "Shoo, no distractions! I have customers."');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).rintakrand ?? 0) === 4) {
                        scene.actions([
                          { label: 'Chat with Anna', handler: (st: GameState) => {
    (s as any).annaQW = ((s as any).annaQW ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Anna happily chats with you about pretty much anything.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).rintakrand ?? 0) >= 5) {
                          scene.actions([
                            { label: 'Chat with Nadia', handler: (st: GameState) => {
    (s as any).NadiaQW = ((s as any).NadiaQW ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Nadia is glad for the distraction and has fun chatting with you.');
    scene.actions([
      { label: 'Go back to work', goto: ['city_marketwork', 'start'] },
    ]);
  } },
                          ]);
                        }
                      }
                    }
                  }
                }
              }
              // TODO-QSP: dynamic text: <<$rintak>>
              scene.text(`${((s as any).rintak ?? 0)}`);
            } else {
              if (((s as any).hour ?? 0) === 13) {
                if ((!((s as any).rintakrand ?? 0))) {
                } else {
                  if (((s as any).rintakrand ?? 0) === 1) {
                  } else {
                    if (((s as any).rintakrand ?? 0) === 2) {
                    } else {
                      if (((s as any).rintakrand ?? 0) === 3) {
                      } else {
                        if (((s as any).rintakrand ?? 0) === 4) {
                        }
                      }
                    }
                  }
                }
                // TODO-QSP: dynamic text: <<$rintak>>
                scene.text(`${((s as any).rintak ?? 0)}`);
              }
            }
          }
        }
      }
      (s as any).pokrand = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).pokrand ?? 0))) {
        (s as any).pokupatel = 0;
        scene.text('');
        scene.text('Aunt Katya pushes her trolley through the market carrying cakes and coffee.');
      } else {
        (s as any).pokupatel = 1;
        (s as any).poktiprand = Math.floor(Math.random() * 8) + 0;
        if ((!((s as any).poktiprand ?? 0))) {
          (s as any).pokti = 1;
        }
        if (((s as any).poktiprand ?? 0) === 1) {
          (s as any).pokti = 2;
        }
        if (((s as any).poktiprand ?? 0) === 2) {
          (s as any).pokti = 3;
        }
        if (((s as any).poktiprand ?? 0) === 3) {
          (s as any).pokti = 1;
        }
        if (((s as any).poktiprand ?? 0) === 4) {
          (s as any).pokti = 2;
        }
        if (((s as any).poktiprand ?? 0) === 5) {
          (s as any).pokti = 3;
        }
        if (((s as any).poktiprand ?? 0) === 6) {
          (s as any).pokti = 0;
        }
        if (((s as any).poktiprand ?? 0) === 7) {
          (s as any).pokti = 0;
        }
      }
      // TODO-QSP: dynamic text: <b><<$pokup>></b>
      scene.text(`<b>${((s as any).pokup ?? 0)}</b>`);
      if (((s as any).pokupatel ?? 0) === 1) {
        scene.actions([
          { label: 'How can I help you?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pokvnirand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).pokvnirand ?? 0))) {
      // TODO-QSP: dynamic text: <<$poktip>> examines your wares with little interest.
      scene.text(`${((s as any).poktip ?? 0)} examines your wares with little interest.`);
    } else {
      if (((s as any).pokvnirand ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$poktip>> looks through your wares with interest.
        scene.text(`${((s as any).poktip ?? 0)} looks through your wares with interest.`);
      } else {
        if (((s as any).pokvnirand ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$poktip>> picks up an item.
          scene.text(`${((s as any).poktip ?? 0)} picks up an item.`);
        }
      }
    }
    scene.actions([
      { label: 'Now this is very fashionable', handler: (st: GameState) => {
    (s as any).tipred = 3;
    qspCall(s, 'city_marketwork', 'answerrin');
  } },
      { label: 'This item is very high quality and reliable', handler: (st: GameState) => {
    (s as any).tipred = 1;
    qspCall(s, 'city_marketwork', 'answerrin');
  } },
      { label: 'You\'ll find this very reasonable', handler: (st: GameState) => {
    (s as any).tipred = 0;
    qspCall(s, 'city_marketwork', 'answerrin');
  } },
      { label: 'That is so you', handler: (st: GameState) => {
    (s as any).tipred = 2;
    qspCall(s, 'city_marketwork', 'answerrin');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Laze around (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  }, goto: ['city_marketwork', 'start'] },
        { label: 'Buy a snack (0:15) [+$func(\'money\', \'get_cost_string\', 200, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).tetaKataQW = ((s as any).tetaKataQW ?? 0) + (1);
      qspCall(s, 'money', 'pay', 200, 'cash');
      qspCall(s, 'kit_din', '');
      qspCall(s, 'food', 'snack');
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnswerrin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tipred ?? 0) === ((s as any).pokti ?? 0)) {
    scene.text('');
    if ((!((s as any).pokvnirand ?? 0))) {
      (s as any).pokpay = Math.floor(Math.random() * 201) + 1000;
    } else {
      if (((s as any).pokvnirand ?? 0) === 1) {
        (s as any).pokpay = Math.floor(Math.random() * 201) + 1100;
      } else {
        if (((s as any).pokvnirand ?? 0) === 2) {
          (s as any).pokpay = Math.floor(Math.random() * 201) + 1300;
        }
      }
    }
    // TODO-QSP: dynamic text: <<$poktip>> asks you for a price.
    scene.text(`${((s as any).poktip ?? 0)} asks you for a price.`);
    qspCall(s, 'city_marketwork', 'tellprice');
  } else {
    // TODO-QSP: dynamic text: <<$poktip>> puts the item back and leaves.
    scene.text(`${((s as any).poktip ?? 0)} puts the item back and leaves.`);
    scene.actions([
      { label: 'Further', goto: ['city_marketwork', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTellprice(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Name the price', handler: (st: GameState) => {
    (s as any).prodpay = 0;
    if (((s as any).prodpay ?? 0) < 1000) {
      (s as any).prodpay = ((s as any).prodpayum ?? 0);
    }
    (s as any).poknorand = (Math.floor(Math.random() * (100 + ((s as any).pcs_apprnc ?? 0)/4 - 1 + 1)) + (1));
    // TODO-QSP: dynamic text: "<<$func('money', 'string_profit', prodpay)>>." you tell them.
    scene.text(`"${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0))}." you tell them.`);
    if (((s as any).prodpay ?? 0) <= ((s as any).pokpay ?? 0)) {
      if (((s as any).poknorand ?? 0) >= 10) {
        (s as any).rinmon = ((s as any).rinmon ?? 0) + (((s as any).prodpay ?? 0));
        (s as any).rinvesh = ((s as any).rinvesh ?? 0) + (1);
        // TODO-QSP: dynamic text: The customer takes the item and pays <<$func('money', 'string_profit', prodpay)>...
        scene.text(`The customer takes the item and pays ${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0))}.`);
        scene.actions([
          { label: 'Sell it', goto: ['city_marketwork', 'start'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: The customer twirls the clothing in their hands. "<<$func('money', 'string_profi...
        scene.text(`The customer twirls the clothing in their hands. "${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0))} is too expensive."`);
        qspCall(s, 'city_marketwork', 'haggling');
      }
    } else {
      if (((s as any).prodpay ?? 0) > ((s as any).pokpay ?? 0)  &&  ((s as any).prodpay ?? 0) <= ((s as any).pokpay ?? 0) + 100) {
        if (((s as any).poknorand ?? 0) >= 10) {
          // TODO-QSP: dynamic text: The customer twirls clothing in their hands. "<<$func('money', 'string_profit', ...
          scene.text(`The customer twirls clothing in their hands. "${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0))} is too expensive."`);
          qspCall(s, 'city_marketwork', 'haggling');
        } else {
          scene.text('They put the item back and leaves');
          scene.actions([
            { label: 'Return', goto: ['city_marketwork', 'start'] },
          ]);
        }
      } else {
        if (((s as any).prodpay ?? 0) > ((s as any).pokpay ?? 0) + 100) {
          scene.text('The customer puts the item back and leaves.');
          scene.actions([
            { label: 'Return', goto: ['city_marketwork', 'start'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterHaggling(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prodpay ?? 0) >= 1100) {
    scene.actions([
      { label: 'Reduce the price by <<$func(\'money\', \'string_profit\', 100)>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You have reduced the price by <<$func('money', 'string_profit', 100)>>.
    scene.text(`You have reduced the price by ${qspFunc(s, 'money', 'string_profit', 100)}.`);
    (s as any).poknorand = (Math.floor(Math.random() * (100 + ((s as any).pcs_apprnc ?? 0)/4 - 1 + 1)) + (1));
    if (((s as any).poknorand ?? 0) >= 10) {
      (s as any).rinmon = ((s as any).rinmon ?? 0) + (((s as any).prodpay ?? 0) - 100);
      (s as any).rinvesh = ((s as any).rinvesh ?? 0) + (1);
      // TODO-QSP: dynamic text: The customer takes the item and pays <<$func('money', 'string_profit', prodpay -...
      scene.text(`The customer takes the item and pays ${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0) - 100)}`);
    } else {
      scene.text('The customer puts the item back and leaves.');
    }
    scene.actions([
      { label: 'Haggle', goto: ['city_marketwork', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).prodpay ?? 0) >= 1050) {
      scene.actions([
        { label: 'Reduce the price by <<$func(\'money\', \'string_profit\', 50)>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You have reduced the price by <<$func('money', 'string_profit', 50)>>.
    scene.text(`You have reduced the price by ${qspFunc(s, 'money', 'string_profit', 50)}.`);
    (s as any).poknorand = (Math.floor(Math.random() * (100 + ((s as any).pcs_apprnc ?? 0)/4 - 1 + 1)) + (1));
    if (((s as any).poknorand ?? 0) >= 30) {
      (s as any).rinmon = ((s as any).rinmon ?? 0) + (((s as any).prodpay ?? 0) - 50);
      (s as any).rinvesh = ((s as any).rinvesh ?? 0) + (1);
      // TODO-QSP: dynamic text: The customer takes the item and pays <<$func('money', 'string_profit', prodpay -...
      scene.text(`The customer takes the item and pays ${qspFunc(s, 'money', 'string_profit', ((s as any).prodpay ?? 0) - 50)}`);
    } else {
      scene.text('The customer puts the item back and leaves.');
    }
    scene.actions([
      { label: 'Haggle', goto: ['city_marketwork', 'start'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the item back', goto: ['city_marketwork', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'answerrin':
      enterAnswerrin(s, scene);
      break;
    case 'tellprice':
      enterTellprice(s, scene);
      break;
    case 'haggling':
      enterHaggling(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_marketwork: LocationDef = {
  name: 'city_marketwork',
  title: 'Marketplace',
  region: 'city',
  locationType: 'event_outdoors',
  enter: enter,
};
