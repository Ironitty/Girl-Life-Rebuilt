import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandma.jpg');
  scene.text('Your grandma is extremely old and seldom leaves the house. Most of the time, she sits on her bed watching TV or slowly cleans.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Grandma looks a little shocked, but it\'s nothing she hasn\'t seen before.');
    scene.text('"Go put some clothes on, dear. You\'ll give your poor grandpa a heart attack if he sees you."');
    scene.actions([
{ label: 'Maybe you should get dressed before talking to her', goto: ['gp_elene', 'return'] },
]);
    return;
  }
  if (((s as any).grigory_flower ?? 0) > 0  &&  ((s as any).grigory_flower ?? 0) < 10) {
    scene.actions([
      { label: 'Talk to her about the flowers', goto: ['grigory', 'flower4'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportChoresActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetRandomChoreAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetTalkActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her alone', goto: ['gp_elene', 'return'] },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A31_loc'] !== 'gad_gphouse') {
    dynamicGoto(s, (((s as any).locat ?? {}))['A31_loc'], (((s as any).locat ?? {}))['A31_arg']);
  } else {
    if (((s as any).locat ?? 0)?.['A31_arg'] === 'gp_room') {
      qspGoto(s, 'gad_gphouse', 'main');
    } else {
      // TODO-QSP: gt 'gad_gphouse', $locat['A31_arg']
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetTalkActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['talked_about_gadukino'] === 0) {
    scene.actions([
      { label: 'Ask about the village (0:10)', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['talked_about_gadukino'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You sit next to grandma, eager to have her tell you more about the village.');
    // TODO-QSP: dynamic text: "Don''t you remember <<$pcs_nickname>>? You''ve visited us many times," said gra...
    scene.text(`"Don't you remember ${((st as any).pcs_nickname || '')}? You've visited us many times," said grandma.`);
    scene.text('"The last time I visited here, I was really young. Of course, I remember some of the houses, but the clearest memory I have is going swimming with Mitka," you reply.');
    scene.text('"And look how big you\'ve become! Just look at you." grandma smiled.');
    scene.text('She begins telling you about the village.');
    scene.text('"The village is small, as you know. You\'ll probably find Mitya by the river or the beach where you can go swimming and sunbathe. There are still some fishermen here in the village. If you want to go fishing, ask around after Stepan, he\'ll lend you a fishing rod."');
    scene.text('"Nothing is interesting in the village itself. Oh yes… I just remembered… recently, a new family moved in, a single parent with his daughter. Could you imagine someone new moving in? The girl is about your age. Her father works in the city, and from the rumors I\'ve heard, he\'s hardly here because his work forces him to stay in the city most of the time. You\'ll probably meet her while you take a walk in the village."');
    scene.text('"In the outskirts of the village is the field where the cattle graze and the forest beyond the field. You\'ll usually find our local hunter Andrei in the forest. He often brings his friends to hunt, who often stay there for days. They say he built a hut somewhere in the forest. So, if you meet Andrei and his friends out there, don\'t be afraid. If you want to go to the forest, ask grandfather first."');
    scene.text('"If you like running, you can take a run on the road leading into the forest. Or you can take a ride on our old bike. I\'m pretty sure the bike is in the shed. Make sure to look for it if you\'re interested. And if you want to watch your figure, go to the garden, and have some fruit. It\'s as healthy as the diet meals you\'re eating, if not healthier."');
    scene.text('"That\'s about it, my dear granddaughter. Now run along, don\'t bother me anymore. My soap opera "Santa Barbara" is about to begin. I don\'t want to miss a second of it."');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  if (24 * (((s as any).daystart ?? 0) - ((s as any).grandmaQW ?? 0)?.['last_day_talked']) + (((s as any).hour ?? 0) - ((s as any).grandmaQW ?? 0)?.['last_hour_talked']) >= 3) {
    scene.actions([
      { label: 'Chat with your grandmother (0:10)', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['last_hour_talked'] = ((st as any).hour ?? 0);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['last_day_talked'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You spend some time talking with your grandmother. She\'s sometimes challenging to understand. Her nearly toothless mouth makes the pronunciation of words difficult for her. But most of what she says boils down to the same thing, life is much more fun when you\'re young!');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  if (((s as any).grandmaQW ?? 0)?.['last_day_asked_for_story'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask her to tell you a story (0:20)', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['last_day_asked_for_story'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 6) + 10));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big32.jpg');
    scene.text('She mumbles something when you ask your grandmother to tell you a story. Nevertheless, after a brief second or two, she decides on a story to share with you today and begins to talk slowly.');
    (st as any).temp = (Math.floor(Math.random() * 8) + 0);
    if ((!((st as any).temp ?? 0))) {
      scene.text('"There was this one time my parents allowed me to stay at my friend\'s home for the night. During the night, a lot of snow fell… and we heard a soft knock on the door!" she says in an ominous voice.');
      scene.text('"We listened more closely but could only hear the wind whistling through the trees… so we decided to go back to sleep. Then we heard the knocking again!"');
      scene.text('""We dashed to the window but couldn\'t see anything other than snow. Finally, the knocking became more persistent, and the voice of a small girl begged us to open the door! My friend and I moved to the middle of the room, tightly hugging one another… we were terrified!"');
      scene.text('"The knocking continued into the morning, even when the blizzard stopped. It sounded like someone was panicking, but when we told her parents in the morning, they didn\'t believe us. When we went outside… there were no tracks on the snow! As if it never happened!"');
      scene.text('"We never heard the voice or the knocking again after that, but I still feel bad for not going downstairs to answer the door. What if some girl was actually there, begging for our help? I hope she\'s okay…"');
    } else {
      if (((st as any).temp ?? 0) === 1) {
        scene.text('"I had a friend when I was younger," she says in an ominous voice. "Her husband died at her house. He was a drunken bastard. He got drunk one day and died of alcohol poisoning in the very same house."');
        scene.text('"One day, she came home from work, and the floorboards suddenly started creaking! And through the glass panes in the hallway door, she could see the silhouette of a man. It looked remarkably like her late husband!"');
        // TODO-QSP: dynamic text: "She was terrified! She quickly left her house and only returned when I promised...
        scene.text(`"She was terrified! She quickly left her house and only returned when I promised to go with her… but of course, we found nothing. Do you believe in ghosts, ${((st as any).pcs_nickname || '')}? Because ever since then, I do…"`);
      } else {
        if (((st as any).temp ?? 0) === 2) {
          scene.text('"I wasn\'t born in Gadukino. I grew up in a different village", your grandmother begins. "This is a true story, by the way!"');
          scene.text('"When I was still a little girl, one of our neighbours died. Then, less than two weeks later, one of his brothers died too! And as the legend goes, death comes in threes…"');
          scene.text('"His one surviving sister was terrified. She was a friend, but her parents wouldn\'t let her leave the house."');
          scene.text('"It was well into the winter then, and people could only go to other towns by sleigh. So for forty days, they waited… just when they were about to accept that the legend might not be true, they found one of her relatives. Dead. Muzhik, I believe his name was, was found frozen solid, basically a block of ice! He\'d tried to attend his cousin\'s funeral, but it cost him his life!"');
          // TODO-QSP: dynamic text: "Death is not to be trifled with, <<$pcs_nickname>>… her parents were smart to h...
          scene.text(`"Death is not to be trifled with, ${((st as any).pcs_nickname || '')}… her parents were smart to hide her. Otherwise, she might've died instead!"`);
        } else {
          if (((st as any).temp ?? 0) === 3) {
            scene.text('"This really happened!" your grandmother reassures you. "When I was young, your age… it was just after the war. Then, no one believed in superstition or anything like that. Those were tough times. All anyone cared about was how to get their next meal on the table for their family."');
            scene.text('"We all went to bed, but our cat kept meowing at me! It just wouldn\'t let me sleep for hours and hours!"');
            scene.text('"When I finally caught some sleep and woke up the next morning, my father was beside my bed. He said when he cleaned out the furnace of ashes, he found the remains of our dead cat in there!"');
            scene.text('You see her eyes tear up. "No one knew how she got there… no one noticed anything! Except for me. To this day, I believe she was trying to warn me, asking for my help…"');
            scene.text('Your grandmother shrugs, wiping a tear from her eye. You reassuringly put your hand on her knee but don\'t know what to say to comfort her.');
          } else {
            if (((st as any).temp ?? 0) === 4) {
              scene.text('"I will tell you a story about an event in the village where I was brought up. One day a woman from a place far up in the northern Soviet Union moved to our village."');
              scene.text('"The woman lived alone with this gorgeous dog. It was a white colour, quite large and quiet as a mouse. But, the dog died after a while, and the woman didn\'t want to bury it."');
              scene.text('"She always said it\'s a shame to throw away the pelt since it was so furry. So she thought about what she could make of this pelt. After a while, she decided to make a fur collar of the pelt."');
              scene.text('"It took about two months, and she got really sick… I, among others, visited her, and everything looked fine at first glance. But as soon as I closed the door, she started acting erratic and hallucinating. These were the characteristics of rabies. Unfortunately, since she was living alone, no one noticed it before it was too late to save her life…"');
            } else {
              if (((st as any).temp ?? 0) === 5) {
                scene.text('"One evening during the Christmas holidays in my younger days, I was hanging out with my girlfriends in the kitchen. But, of course, it was my school friends, so we were always up to some mischief."');
                scene.text('"We were home alone, and one of my friends persuaded us to do a séance. She tells us that a fortune-teller had explained how one could summon a spirit. So we lit some candles and began chanting for the spirits to show themselves."');
                scene.text('"I managed to summon the profile of a male figure. He was holding something resembling a bouquet of flowers. My second friend summoned a kettle-looking object, while my last friend managed to summon an infant, which frightened us."');
                scene.text('"Not being discouraged, we decided to try again, excited by what we would manage to summon this time. This time I summoned a large steamer. My second friend didn\'t summon anything special, but my third friend summoned the same infant again. The difference this time was that the infant was in a stroller."');
                scene.text('"We ended the séance and went back to doing ordinary stuff. Suddenly we heard a knock on the door, the young man from the séance. He pulled out a beautiful bouquet of roses and gave them to me. I asked him what the reason was, but he just answered that he felt he should deliver flowers to a girl in this village. After that, I got the chills because I remembered the man with a bouquet of flowers from the séance."');
                scene.text('"The most interesting thing that happened was a few months after our séance, my friend that summoned the baby got pregnant. And by the end of the year, she had a baby by age 15. So beware, when you meet a fortune-teller, you never know what might happen…"');
              } else {
                if (((st as any).temp ?? 0) === 6) {
                  scene.text('"I remember sitting down as we are right now," your grandma starts, but suddenly as if she remembered something, she sadly sighs. "There are no more matches…"');
                  scene.text('You look at her perplexed, questioning what she\'s talking about. "We do have matches in the kitchen, or if you want, I can run over to the store to buy some."');
                  // TODO-QSP: dynamic text: "You don''t get it, <<$pcs_nickname>>. The matches today are not as good as thos...
                  scene.text(`"You don't get it, ${((st as any).pcs_nickname || '')}. The matches today are not as good as those made long ago. I miss those matches we had during the Great Patriotic War before they had to move the factory to the far east… Those matches were magical, not like this crap we have now… Ugh…"`);
                } else {
                  if (((st as any).temp ?? 0) === 7) {
                    scene.text('"One day, my mother, rest her soul, sent us four siblings out to the forest for berry gathering", your grandma begins. "We took our berry collectors and headed out. We reached the forest entrance quickly and decided that it would be best to split up to complete the task faster. Since we were familiar with the area, we all dispersed to our cherished spots and began gathering berries."');
                    scene.text('"My favourite spot was a plot surrounded by dense bushes, and in the middle of the plot, there was a huge stump. It was a great spot, and as I approached, I noticed a vast number of ripe strawberries. I rejoiced over the thought that I would gather more than my brothers, slowly gathering the berries and putting them in my berry collector. Then, suddenly, I hear some rustling behind the bushes. I turn towards the sound, but I\'m met with silence. I didn\'t notice anyone, but I still couldn\'t get rid of the eerie feeling."');
                    // TODO-QSP: dynamic text: "I shook off the eerie feeling and returned to gathering strawberries again. All...
                    scene.text(`"I shook off the eerie feeling and returned to gathering strawberries again. All of a sudden, I get this strange feeling… I look up, and I see a person squatting on the stump. He's completely still and just stares at me. I got terrified and ran away, screaming and crying towards my brothers. They tried to stop and calm me down, but I kept running. My brothers started running after me, trying to keep up. I could hear my oldest brother shouting to run towards the kolkhoz. You see ${((st as any).pcs_firstname || '')}, a long time ago we had central collective farms called kolkhoz."`);
                    scene.text('"We were lucky that the farms were close to the forest and didn\'t have to run through the woods for long. I kept looking back to see if this person was following us, but there was no sign of him. We knew we were safe when we saw the brigade\'s farmers. My brothers and I ran to the foreman and explained what had happened. He immediately grabbed the phone and called someone. The other farmers reassured us that we were safe now. After we had calmed down, we got sent home. Our mother met us at home. She fed us and comforted me."');
                    scene.text('"The following day, we were informed that some people found dismantled railroad rails not far from the train station Ratomka. Apparently, it was done by the man I encountered in the forest. I didn\'t know it then, but before the war, our area was prone to sabotage by infiltrators. Staying hidden was easy, as the territory is covered by forest, stretching to the border."');
                    scene.text('"Ever since that day, the fear I experienced never disappeared, as I\'ve felt it throughout my life. I\'ll carry on this fear for the remaining days of my life…"');
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Thank her for the story', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetRandomChoreAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) !== ((s as any).grandmaQW ?? 0)?.['last_day_helped']) {
    scene.actions([
      { label: 'Offer to help out', handler: (st: GameState) => {
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['last_day_helped'] = ((st as any).daystart ?? 0);
    (st as any).frost = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/grandmahelp.jpg');
    scene.text('You ask your grandmother if there is anything you could help out with. Your grandmother turns to you and says:');
    if (((st as any).month ?? 0) <= 4  ||  ((st as any).month ?? 0) >= 10) {
      ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 7) + 0);
    } else {
      if (((st as any).month ?? 0) === 5) {
        ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 10) + 0);
      } else {
        if (((st as any).month ?? 0) >= 6  &&  ((st as any).month ?? 0) <= 9) {
          ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_type'] = (Math.floor(Math.random() * 15) + 0);
        }
      }
    }
    if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 0) {
      qspGoto(st, 'gp_elene', 'chore_cleanfloor');
    } else {
      if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 1) {
        qspGoto(st, 'gp_elene', 'chore_washclothes');
      } else {
        if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 2  &&  ((st as any).hour ?? 0) < 9  &&  ((st as any).hour ?? 0) > 20) {
          qspGoto(st, 'gp_elene', 'chore_milkcows');
        } else {
          if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 3) {
            qspGoto(st, 'gp_elene', 'chore_groceries');
          } else {
            if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 4  &&  ((st as any).boletus_stored ?? 0) >= 5) {
              qspGoto(st, 'gp_elene', 'chore_can_mushrooms');
            } else {
              if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 5  &&  ((st as any).bilberry_stored ?? 0) >= 5) {
                qspGoto(st, 'gp_elene', 'chore_can_berries');
              } else {
                if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 6  &&  ((st as any).grandmaQW ?? 0)?.['chore_harvest_done'] === 1) {
                  qspGoto(st, 'gp_elene', 'chore_can_veggies');
                } else {
                  if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 7) {
                    qspGoto(st, 'gp_elene', 'chore_feedchickens');
                  } else {
                    if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 8  &&  ((st as any).sunWeather ?? 0) === 1) {
                      qspGoto(st, 'gp_elene', 'chore_checkplants');
                    } else {
                      if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 9  &&  ((st as any).sunWeather ?? 0) === 1) {
                        qspGoto(st, 'gp_elene', 'chore_waterplants');
                      } else {
                        if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 10  &&  ((st as any).sunWeather ?? 0) === 1  &&  ((st as any).month ?? 0) >= 6  &&  ((st as any).month ?? 0) <= 9) {
                          qspGoto(st, 'gp_elene', 'chore_harvest_switch');
                        } else {
                          if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 11  &&  ((st as any).boletus_stored ?? 0) <= 18) {
                            qspGoto(st, 'gp_elene', 'chore_gathermushrooms');
                          } else {
                            if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 12  &&  ((st as any).bilberry_stored ?? 0) <= 18) {
                              qspGoto(st, 'gp_elene', 'chore_gatherberries');
                            } else {
                              if (((st as any).grandmaQW ?? 0)?.['chore_type'] === 13  &&  ((((st as any).boletus_stored ?? 0) + ((st as any).bilberry_stored ?? 0)) <= 16)) {
                                qspGoto(st, 'gp_elene', 'chore_gatherboth');
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
        }
      }
    }
    // TODO-QSP: dynamic text: "There is nothing to do today, <<$pcs_nickname>>. Take the day off.
    scene.text(`"There is nothing to do today, ${((st as any).pcs_nickname || '')}. Take the day off.`);
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreHarvestSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) === 7) {
    qspGoto(s, 'gp_elene', 'chore_collectstrawberries');
  } else {
    if (((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 9) {
      qspGoto(s, 'gp_elene', 'chore_collectfruit');
    } else {
      if (((s as any).month ?? 0) === 6) {
        qspGoto(s, 'gp_elene', 'chore_harvestgarden');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetReportChoresActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanMushroomsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanBerriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanVeggiesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportCleanfloorAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportWashclothesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportMilkcowAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGroceriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportFeedchickensAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportCheckplantsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportWaterplantsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportCollectstrawberriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportCollectfruitAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportHarvestgardenAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGathermushroomsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGatherberriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetReportGatherbothAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCheckForChores(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'livingroom') {
    if (((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 1) {
      scene.actions([
        { label: 'Clean the floor for Grandma (1:00)', goto: ['gp_elene', 'event_cleanfloor'] },
      ]);
    }
    if (((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 1) {
      scene.actions([
        { label: 'Wash Grandpa\'s clothes for Grandma (1:00)', goto: ['gp_elene', 'event_washclothes'] },
      ]);
    }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'garden') {
      if (((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 1) {
        scene.actions([
          { label: 'Work in the garden (3:00)', goto: ['gp_elene', 'event_checkplants'] },
        ]);
      }
      if (((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 1) {
        scene.actions([
          { label: 'Water the plants (1:00)', goto: ['gp_elene', 'event_waterplants'] },
        ]);
      }
      if (((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 1) {
        scene.actions([
          { label: 'Harvest (3:00)', goto: ['gp_elene', 'event_harvestgarden'] },
        ]);
      }
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'chickens') {
        if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 1) {
          scene.actions([
            { label: 'Feed the chickens', goto: ['gp_elene', 'event_feedchickens'] },
          ]);
        }
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'strawberry') {
          if (((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 1) {
            scene.actions([
              { label: 'Collect strawberries (3:00)', goto: ['gp_elene', 'event_collectstrawberries'] },
            ]);
          }
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'fruit_garden') {
            if (((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 1) {
              scene.actions([
                { label: 'Collect fruit (3:00)', goto: ['gp_elene', 'event_collectfruit'] },
              ]);
            }
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'cow') {
              if (((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 1) {
                scene.actions([
                  { label: 'Milk the cow (0:30)', goto: ['gp_elene', 'event_milkcow'] },
                ]);
              }
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 'store') {
                if (((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 1) {
                  scene.actions([
                    { label: 'Gather the things on Grandma\'s list (0:30)', goto: ['gp_elene', 'event_groceries'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCleanfloor(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "There is always something to do, <<$pcs_nickname>>. I''ve gotten quite old, and...
  scene.text(`"There is always something to do, ${((s as any).pcs_nickname || '')}. I've gotten quite old, and my strength is not what it used to be. Could you help me out by cleaning the floor?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_clean_floor'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it soon', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and start cleaning (1:00)', goto: ['gp_elene', 'event_cleanfloor'] },
  ]);
  scene.build();
}

function enterEventCleanfloor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_clean_floor'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/washfloor.jpg');
  scene.text('You grab a bucket and a rag, get down on your knees and begin scrubbing the floor. Within the hour, the floor shines, and you are satisfied with your work. You put the cleaning supplies into a corner and continue your day.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandma: clean floor', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'start'] },
    { label: 'Return back to your grandmother', goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportCleanfloorAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 2) {
    scene.actions([
      { label: 'Tell her you cleaned the floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_clean_floor'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"Grandma, the floors are all clean!" you say proudly.');
    scene.text('"Thank you, child," your grandmother says, "You have saved my hands and knees a great deal of aching."');
    scene.text('You give her a warm smile and continue on with your day.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreWashclothes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Of course, <<$pcs_nickname>>, you can help me wash your grandfather''s dirty cl...
  scene.text(`"Of course, ${((s as any).pcs_nickname || '')}, you can help me wash your grandfather's dirty clothes?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_wash_clothes'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will wash them in a little bit', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and start washing (1:00)', goto: ['gp_elene', 'event_washclothes'] },
  ]);
  scene.build();
}

function enterEventWashclothes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_wash_clothes'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/washclothes1.jpg');
  scene.text('You pick up your grandfather\'s dirty clothes and take them with you outside, where you soak them in the metal basin for an hour.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hang the laundry', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/washclothes2.jpg');
    scene.text('Once done with the washing, you walk to the clothesline, where you carefully hang the clothes to dry.');
    qspCall(st, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandma: wash clothes', 7);
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
      { label: 'Return back to your grandmother', goto: ['gp_elene', 'talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportWashclothesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 2) {
    scene.actions([
      { label: 'Tell her you washed the clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_wash_clothes'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"Grandma, I finished washing Grandpa\'s dirty clothes," you tell her.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. I have no idea how that man gets so dirty!"
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}. I have no idea how that man gets so dirty!"`);
    scene.text('You and your grandmother share a laugh, and you give her a hug before moving on.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreMilkcows(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, go to the barn and milk the cows."
  scene.text(`"${((s as any).pcs_nickname || '')}, go to the barn and milk the cows."`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_milk_cow'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it in a bit', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the barn (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You walk over to the barn where the cows are kept.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpbarn', 'cow'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventMilkcow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_milk_cow'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/milk_cow.jpg');
  scene.text('You start milking Dawn, improving each time you do it.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandma: milk cow', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpbarn', 'cow'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportMilkcowAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 2) {
    scene.actions([
      { label: 'Tell her you milked the cow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_milk_cow'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"Grandma, I milked Dawn and put the milk away," you tell her.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. She''s such a sweet thing, isn''t she?" your gran...
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}. She's such a sweet thing, isn't she?" your grandmother asks fondly.`);
    scene.text('"Um, yes, she is very nice for a cow," you smile. "She\'s the nicest cow I know."');
    scene.text('Grandma nods sagely at that, and you grin and continue on with your day.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGroceries(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Oh yes, <<$pcs_nickname>>. I was going to go down to the store today to buy som...
  scene.text(`"Oh yes, ${((s as any).pcs_nickname || '')}. I was going to go down to the store today to buy some groceries, but my knees are aching. Do you think you could go down there and get them for me? I have a list of what we need, and the grocer will come by later to collect the money."`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_groceries'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will go to the store later', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the store (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/gp_dacha/izba.jpg');
    scene.text('Your grandmother shuffles around, looking for her list for a few minutes, finally finding it and giving it to you. You grab a basket and set out for the store.');
    scene.actions([
      { label: 'Continue', goto: ['gad_store', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventGroceries(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_groceries'] = 2;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['help_amount'] = ((s as any).grandmaQW['help_amount'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/market.jpg');
  scene.text('You take out the list Grandma gave you and begin browsing the shelves for the items she needs. Finally, after about half an hour, you have gotten everything on the list.');
  scene.text('You take your basket of goods to the teller and explain that you are getting these things for your grandmother.');
  scene.text('"Of course! Go ahead and take these on home to her. Tell her I will be by this evening to pick up her payment. I know it\'s hard for her to get out anymore…"');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandma: groceries', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gadukino', ''] },
    { label: 'Thank him and take the groceries back to your grandmother (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportGroceriesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 2) {
    scene.actions([
      { label: 'Give her the groceries', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_groceries'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You show Grandma your sacks of groceries and tell her the grocer will be by later.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. He''s a nice young man. I''ve known him since he ...
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}. He's a nice young man. I've known him since he was a child, you know."`);
    scene.text('"Yes, he\'s very nice," you say, "but where do you want me to put this stuff?"');
    scene.text('"Oh yes, yes," she says as if she forgot you were standing there with arms full of groceries. "Just put them in the kitchen, little one. I will put them away in a minute."');
    scene.text('You lug the bags into the kitchen and heft them on the table before returning to Grandma.');
    scene.text('"Anything else you need, Grandma?" you ask.');
    // TODO-QSP: dynamic text: "No, that is all, <<$pcs_nickname>>," she says and gives you a gentle pat on the...
    scene.text(`"No, that is all, ${((st as any).pcs_nickname || '')}," she says and gives you a gentle pat on the back.`);
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCanMushrooms(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "I need to get some of these mushrooms canned, <<$pcs_nickname>>, so we can stor...
  scene.text(`"I need to get some of these mushrooms canned, ${((s as any).pcs_nickname || '')}, so we can store them. Can you please help me prepare them?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_mushrooms'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanMushroomsAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will help her in a little while', goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetHelpCanMushroomsAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] === 1) {
    scene.actions([
      { label: 'Help Grandma can mushrooms (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/cleaning_mushrooms.jpg');
    scene.text('You tell Grandma you are ready to help her can mushrooms now.');
    scene.text('She smiles and gives you a basket of mushrooms. You spend a while cleaning them, washing them, and cutting them up in preparation for canning.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/canning.jpg');
    scene.text('Once they are prepared, you help put them in glass jars. Once they are ready, Grandma places the jars in her canner and boils them for an hour.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_can_mushrooms'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (2);
    scene.img('images/locations/gadukino/village/canned_mushrooms.jpg');
    scene.text('Finally, you help Grandma take them out of the canner and set them aside to cool.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," she says. "It is important to save food up for t...
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}," she says. "It is important to save food up for the hard winter months. Sure, now you can walk to the store and get whatever you want, but it wasn't always that way!"`);
    scene.actions([
      { label: 'Finish', goto: ['gp_elene', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCanBerries(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "It is time to can these berries, <<$pcs_nickname>>. Can you please help me? My ...
  scene.text(`"It is time to can these berries, ${((s as any).pcs_nickname || '')}. Can you please help me? My fingers aren't as spry as they used to be."`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_berries'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanBerriesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will help her in a little while', goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetHelpCanBerriesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_can_berries'] === 1) {
    scene.actions([
      { label: 'Help Grandma can berries (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/cleaning_berries.jpg');
    scene.text('Grandma gives you a basket of berries, and you spend a while cleaning them, removing stems, and picking out any shrivelled or bad ones.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/canning.jpg');
    scene.text('Once they are prepared, you help pour them into glass jars. Once they are ready, Grandma places the jars in her canner and boils them for an hour.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_can_berries'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/canned_berries.jpg');
    scene.text('Finally, you help Grandma take them out of the canner and set them aside to cool.');
    scene.text('"There, now we will have berries for the winter," she says. "I think your grandfather could live off of these berries alone! He will be very grateful that you helped me."');
    scene.actions([
      { label: 'Finish', goto: ['gp_elene', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCanVeggies(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "We have had good luck with the garden this year, <<$pcs_nickname>>. But now we ...
  scene.text(`"We have had good luck with the garden this year, ${((s as any).pcs_nickname || '')}. But now we need to can these vegetables before they spoil. Can you help me, please?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_veggies'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetHelpCanVeggiesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will help her in a little while', goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetHelpCanVeggiesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_can_veggies'] === 1) {
    scene.actions([
      { label: 'Help Grandma can veggies (3:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 75;
    qspCall(st, 'stat', '');
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_harvest_done'] = 0;
    scene.img('images/locations/gadukino/village/cleaning_veggies.jpg');
    scene.text('You and Grandma spend some time sorting out all the vegetables from the garden. Once they are sorted, you begin cleaning them, cutting them up, removing stems and leaves, and preparing them for canning.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 90;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/canning.jpg');
    scene.text('It is a tedious process, but eventually, you finish and help Grandma put them all in jars. Then, you stand by while she boils the jars, helping her remove them from the canner when needed and replacing them with others.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_can_veggies'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    scene.img('images/locations/gadukino/village/canned_veggies.jpg');
    scene.text('Finally, you help Grandma take the last jars out of the canner and set them aside to cool.');
    // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, if you know how to can your own food, you can surv...
    scene.text(`"You know, ${((st as any).pcs_nickname || '')}, if you know how to can your own food, you can survive years of poor harvests," she says.`);
    scene.text('"Your grandfather and I had many hard times when we were younger, but saving our crops when we could, kept us from starving to death in the bad times. You would do well to remember that, young lady!"');
    scene.actions([
      { label: 'Finish', goto: ['gp_elene', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreFeedchickens(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Of course, <<$pcs_nickname>>. Would you be kind and feed the chickens?"
  scene.text(`"Of course, ${((s as any).pcs_nickname || '')}. Would you be kind and feed the chickens?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_feed_chickens'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it in a little while', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the yard (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/feed_chickens.jpg');
    scene.text('You take the grain mix for the chickens and walk to the yard.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'chickens'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventFeedchickens(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_feed_chickens'] = 2;
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 4) + 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/chickens2.jpg');
  scene.text('You decide to feed the chickens. You pick up a bucket full of bird\'s seed and grain mix and toss it on the ground. They immediately rush over and start to greedily eat. You watch them for a bit before you go about your business.');
  qspCall(s, 'archetypes', 'gain', 'prude', 'tiny', 'Helping grandma: feed chickens', 7);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'start'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportFeedchickensAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 2) {
    scene.actions([
      { label: 'Tell her you fed the chickens', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_feed_chickens'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"I fed the chickens, Grandma," you tell her.');
    // TODO-QSP: dynamic text: "Good, thank you, <<$pcs_nickname>>," she says. "A fat chicken is a happy chicke...
    scene.text(`"Good, thank you, ${((st as any).pcs_nickname || '')}," she says. "A fat chicken is a happy chicken, and happy chickens lay the best eggs."`);
    scene.text('She nods to herself as if she has said something sagacious.');
    scene.text('"Um, well, I\'m happy to help, Grandma," you say and hug her quickly.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCheckplants(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, can you please go work in the garden?"
  scene.text(`"${((s as any).pcs_nickname || '')}, can you please go work in the garden?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_work_in_garden'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will get to it later', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the garden (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You go to the garden.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'garden'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventCheckplants(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'sweat', 'add', 10);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_work_in_garden'] = 2;
  qspCall(s, 'exp_gain', 'stren', 1);
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 7) + 3));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/work_garden' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
  scene.text('You spend some time doing some gardening.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'garden'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportCheckplantsAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 2) {
    scene.actions([
      { label: 'Tell her you worked in the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_work_in_garden'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"I finished working in the garden, Grandma."');
    // TODO-QSP: dynamic text: "Good, thank you, <<$pcs_nickname>>," she says. "Did you pull out all the weeds?...
    scene.text(`"Good, thank you, ${((st as any).pcs_nickname || '')}," she says. "Did you pull out all the weeds?"`);
    scene.text('"Yes, I did," you say, "and I watered all the plants and checked for pests and everything."');
    // TODO-QSP: dynamic text: "Good, good," she nods. "It is crucial to take care of your garden, <<$pcs_nickn...
    scene.text(`"Good, good," she nods. "It is crucial to take care of your garden, ${((st as any).pcs_nickname || '')}. It is how we provide for ourselves when no one else will."`);
    scene.text('You nod at her advice, and she smiles.');
    scene.text('"You know, you remind me very much of your mother," she says. "She and Luda always talked about the garden when they were your age."');
    if (((st as any).npc_QW ?? 0)?.['A29'] < 2) {
      scene.text('"Really?" you ask, trying to picture your mother working in the old garden.');
      scene.text('"Oh yes, yes," Grandma says. "Your mother especially. Natasha would say, \'Luda, Luda, I have to go to the garden,\' and Luda would say, \'But sister, you were just in the garden yesterday!"');
      scene.text('She purses her lips and continues, "She wasn\'t very good at gardening, I\'m afraid. As much time as she seemed to spend there, I would still find weeds and pests all the time."');
    } else {
      // TODO-QSP: dynamic text: You struggle to contain your laughter. "Oh yeah, <<$npc_nickname[''A29'']>> has ...
      scene.text(`You struggle to contain your laughter. "Oh yeah, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} has told me all about the 'garden', Grandma. Like mother, like daughter, I guess!"`);
      scene.text('Grandma nods. "Yes, I suppose that is true. She wasn\'t much of a gardener though - I always found weeds and pests, no matter how much time she spent there."');
    }
    // TODO-QSP: dynamic text: You grin, thinking of how <<$npc_nickname[''A29'']>> must have been at your age.
    scene.text(`You grin, thinking of how ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} must have been at your age.`);
    // TODO-QSP: dynamic text: "Anyway," she continues, "thank you for doing that for me, <<$pcs_nickname>>. My...
    scene.text(`"Anyway," she continues, "thank you for doing that for me, ${((st as any).pcs_nickname || '')}. My old bones complain when I do it."`);
    scene.text('She gives you a peck on the cheek and sends you on your way.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreWaterplants(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Dear <<$pcs_nickname>>, could you go and water the plants in the garden?"
  scene.text(`"Dear ${((s as any).pcs_nickname || '')}, could you go and water the plants in the garden?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_water_garden'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it after a while', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the garden (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You bring a watering can along with you to the garden.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'garden'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventWaterplants(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_water_garden'] = 2;
  qspCall(s, 'exp_gain', 'vital', 1);
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 4) + 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/water_garden.jpg');
  scene.text('You spend an hour watering the garden.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'garden'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportWaterplantsAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 2) {
    scene.actions([
      { label: 'Tell her you watered the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_water_garden'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('"I watered all the plants in the garden, Grandma," you tell her.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," she says. "A healthy plant is always thirsty. So...
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}," she says. "A healthy plant is always thirsty. So you should have some water, too, if you want to be a healthy girl."`);
    scene.text('"Maybe I will. Is there anything else you need?"');
    scene.text('"No, sweet child. That is enough for today," she says and gives you a gentle pat on the arm.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCollectstrawberries(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> dear, the strawberries are ripe for picking. Could you go ove...
  scene.text(`"${((s as any).pcs_nickname || '')} dear, the strawberries are ripe for picking. Could you go over to the plot and pick them today?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_strawberries'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it in a little bit', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the strawberry plot (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You bring a basket with you and walk to the strawberry plot in the garden.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'strawberry'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventCollectstrawberries(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'sweat', 'add', 10);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_strawberries'] = 2;
  qspCall(s, 'exp_gain', 'agil', 1);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 7) + 3));
  qspCall(s, 'stat', '');
  if ((!((s as any).PCloSkirt ?? 0))) {
    scene.img('images/locations/gadukino/village/collect_strawberries.jpg');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/gadukino/village/collect_strawberries_ski.jpg');
    } else {
      scene.img('images/locations/gadukino/village/collect_strawberries_tanga.jpg');
    }
  }
  scene.text('You wander through the plot for several hours, collecting ripe strawberries and placing them in the basket.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'strawberry'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportCollectstrawberriesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 2) {
    scene.actions([
      { label: 'Give her the strawberries you picked', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_collect_strawberries'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You walk up to Grandma and give her the basket of strawberries.');
    scene.text('"I picked all the strawberries I could find, Grandma," you say.');
    // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>," she exclaims, "don''t these just look wonderful? They a...
    scene.text(`"Oh, ${((st as any).pcs_nickname || '')}," she exclaims, "don't these just look wonderful? They are plump and juicy this year."`);
    scene.text('You smile and say, "They taste pretty good too!"');
    scene.text('Your grandmother gives you a rueful look and says, "I don\'t remember asking you to eat the strawberries, child."');
    scene.text('She cannot hold the charade, though, and breaks into a smile. "I never could resist eating a few fresh off the plant either."');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreCollectfruit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> dear, the fruits are ripe, and it is time to start collecting...
  scene.text(`"${((s as any).pcs_nickname || '')} dear, the fruits are ripe, and it is time to start collecting them. Could you go and do it today?"`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_fruit'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it in a little bit', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the orchard (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You bring a basket with you and walk to the fruit garden.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'fruit_garden'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventCollectfruit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'sweat', 'add', 10);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_fruit'] = 2;
  qspCall(s, 'exp_gain', 'agil', 1);
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 7) + 3));
  qspCall(s, 'stat', '');
  if ((!((s as any).PCloSkirt ?? 0))) {
    scene.img('images/locations/gadukino/village/fruit_collect.jpg');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/locations/gadukino/village/fruit_collect_ski.jpg');
    } else {
      scene.img('images/locations/gadukino/village/fruit_collect_tanga.jpg');
    }
  }
  scene.text('You walk around the orchard and pick the ripe fruit hanging from the trees.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'fruit_garden'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportCollectfruitAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 2) {
    scene.actions([
      { label: 'Give her the fruit you collected', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_collect_fruit'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You walk up to Grandma and give her the basket of fruit.');
    scene.text('"I gathered all the fruits I could reach," you say.');
    // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>," she says. "I cannot reach or bend like I used to...
    scene.text(`"Thank you, ${((st as any).pcs_nickname || '')}," she says. "I cannot reach or bend like I used to, so you have done me a great favor."`);
    scene.text('You smile and hug your grandmother and go on about your day.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreHarvestgarden(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>> dear, could you go to the garden today? It''s time to collect...
  scene.text(`"${((s as any).pcs_nickname || '')} dear, could you go to the garden today? It's time to collect the harvest."`);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_harvest_garden'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will do it in a little bit', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the garden (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/go_yard.jpg');
    scene.text('You bring the harvest tools with you and go over to the garden.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'garden'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEventHarvestgarden(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'sweat', 'add', 10);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_harvest_garden'] = 2;
  qspCall(s, 'exp_gain', 'stren', 1);
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'hndiwrk', (Math.floor(Math.random() * 7) + 3));
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/harvest_garden' + (Math.floor(Math.random() * 5) + 1) + '.jpg');
  scene.text('You spend a few hours harvesting vegetables in the garden.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['gad_gpyard', 'garden'] },
    { label: 'Return back to your grandmother', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gp_elene', 'talk'] },
  ]);
  scene.build();
}

function enterSetReportHarvestgardenAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 2) {
    scene.actions([
      { label: 'Give her the vegetables from the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_harvest_garden'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_harvest_done'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You bring the baskets of vegetables from the garden into the kitchen and set them on the table, then go back to your grandmother.');
    scene.text('"I think I got everything I could out of the garden, Grandma," you tell her. "There was so much!"');
    scene.text('"Yes, child," she says. "We have been blessed with a healthy garden this year. But, unfortunately, there were many times in the past we were not so lucky."');
    scene.text('Your smile falters a bit, unsure of how to take that.');
    // TODO-QSP: dynamic text: "Oh, don''t worry yourself, little <<$pcs_nickname>>," she says, cupping your ch...
    scene.text(`"Oh, don't worry yourself, little ${((st as any).pcs_nickname || '')}," she says, cupping your cheek with her hand. "Forgive an old woman of her thoughtful ways. We are lucky to have such a kind granddaughter to help us bring in the harvest."`);
    scene.text('You place your youthful hand over her wizened old one and smile at her. "I am happy to help, Grandma. Is there anything else you need?"');
    scene.text('"No, child, you have done more than your fair share today. Of course, soon, we will have to preserve these vegetables to keep them from spoiling, but for now, you can rest."');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGathermushrooms(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 1;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_mushroom_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, it''s mushroom season. Would you mind going into the forest ...
  scene.text(`"${((s as any).pcs_nickname || '')}, it's mushroom season. Would you mind going into the forest to pick some for us?"`);
  scene.text('"How much do we need, Grandma?" you ask.');
  // TODO-QSP: dynamic text: "Oh, I would say you should be able to find at least <<grandmaQW[''chore_mushroo...
  scene.text(`"Oh, I would say you should be able to find at least ${((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kilos," Grandma replies.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will go get some soon', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You decide that now is as good a time as any to do it. You grab a basket and head out, walking to the forest.');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGathermushroomsAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] === 2  &&  ((s as any).boletus ?? 0) >= ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give Grandma the mushrooms she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['disappointment'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You bring the basket of mushrooms to your grandmother and say, "Grandma, here are the mushrooms you wanted!"');
    scene.text('She takes them from you. "Thank you, my sweet girl. Better late than never. I hope you were OK in the forest. They will have to go down in the root cellar until we are ready to can them."');
    scene.text('"Do you think that will be enough?"');
    scene.text('She laughs. "Oh, with your grandfather around, it is never enough!"');
    scene.text('"I can get more if you want me to."');
    scene.text('"No need for that, little one," she clucks. "You\'ve done enough for now."');
    scene.text('You give her a quick hug in response and carry on.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give Grandma the mushrooms she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You bring the basket of mushrooms to your grandmother and say, "Grandma, here are the mushrooms you wanted!"');
    scene.text('She smiles and takes them from you. "Thank you, my sweet girl. They will have to go down in the root cellar until we are ready to can them."');
    scene.text('"Do you think that will be enough?"');
    scene.text('She laughs. "Oh, with your grandfather around, it is never enough!"');
    scene.text('"I can get more if you want me to."');
    scene.text('"No need for that, little one," she clucks. "You\'ve done enough for one day."');
    scene.text('You give her a quick hug in response and carry on.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGatherberries(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_berries'] = 1;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_berry_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, the wild berries are ripe for picking. We should gather them...
  scene.text(`"${((s as any).pcs_nickname || '')}, the wild berries are ripe for picking. We should gather them now while we can."`);
  scene.text('"How much do you want, Grandma?" you ask.');
  // TODO-QSP: dynamic text: "<<grandmaQW[''chore_berry_quantity'']>> kilos will be a good start," Grandma re...
  scene.text(`"${((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kilos will be a good start," Grandma replies.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will go get some soon', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You decide now is as good a time as any to do it. So you grab a basket and head out, walking to the forest.');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGatherberriesAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] === 2  &&  ((s as any).bilberry ?? 0) >= ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give Grandma the berries she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_berries'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['disappointment'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You walk over to Grandma and set the heavy basket of berries on the ground next to her.');
    scene.text('"Grandma, I got all the berries!"');
    // TODO-QSP: dynamic text: "Oh, thank you, <<$pcs_nickname>>," Grandma replied. "Those look fine if a littl...
    scene.text(`"Oh, thank you, ${((st as any).pcs_nickname || '')}," Grandma replied. "Those look fine if a little late. They will have to go down in the root cellar until we are ready to can them."`);
    scene.text('You heft the basket up and carry it into the kitchen. Then, walking back to Grandma, you ask, "Do you think that will be enough for the winter?"');
    scene.text('"Oh no, dear," your Grandma says, "the winter is long and cold, and you must gather as much as you can while you can."');
    scene.text('Seeing the dismayed look on your face, she adds, "But that is enough for today! I know it is harder work than it seems. You can rest now, child."');
    scene.text('Relieved, you give your grandmother a peck on the cheek and move on.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give Grandma the berries she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_berries'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You walk over to Grandma and set the heavy basket of berries on the ground next to her.');
    scene.text('"Grandma, I got all the berries!"');
    // TODO-QSP: dynamic text: "Oh, thank you, <<$pcs_nickname>>," Grandma replied. "Those look perfect. They w...
    scene.text(`"Oh, thank you, ${((st as any).pcs_nickname || '')}," Grandma replied. "Those look perfect. They will have to go down in the root cellar until we are ready to can them."`);
    scene.text('You heft the basket up and carry it into the kitchen. Then, walking back over to Grandma, you ask, "Do you think that will be enough for the winter?"');
    scene.text('"Oh no, dear," your Grandma says, "the winter is long and cold, and you must gather as much as you can while you can."');
    scene.text('Seeing the dismayed look on your face, she adds, "But that is enough for today! I know it is harder work than it seems. You can rest now, child."');
    scene.text('Relieved, you give your grandmother a peck on the cheek and move on.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoreGatherboth(s: GameState, scene: SceneBuilder): void {
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_both'] = 1;
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_mushroom_quantity'] = (Math.floor(Math.random() * 2) + 1);
  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_berry_quantity'] = (Math.floor(Math.random() * 2) + 1);
  // TODO-QSP: dynamic text: "This is the time of year that the forest provides us with its gifts, <<$pcs_nic...
  scene.text(`"This is the time of year that the forest provides us with its gifts, ${((s as any).pcs_nickname || '')}. Can you go and harvest some mushrooms and berries for us?"`);
  scene.text('"How much of each should I get?" you ask.');
  // TODO-QSP: dynamic text: "If you could, try to find <<grandmaQW[''chore_mushroom_quantity'']>> kilos of m...
  scene.text(`"If you could, try to find ${((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] ?? ''} kilos of mushrooms and ${((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] ?? ''} kilos of berries," Grandma replies. "It is important to stock up while we can."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you will go get some soon', goto: ['gp_elene', 'talk'] },
    { label: 'Agree and go to the forest (1:00)', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
    scene.text('You decide now is as good a time as any to do it. So you grab a basket and head out, walking to the forest.');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
      { label: 'Continue', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetReportGatherbothAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_gather_both'] === 2  &&  ((s as any).boletus ?? 0) >= ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']  &&  ((s as any).bilberry ?? 0) >= ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity']  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
      scene.actions([
        { label: 'Give Grandma the mushrooms and berries she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (1);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_berries'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_both'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['disappointment'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You bring your basket, heavy with mushrooms and berries from the forest, over to your grandmother.');
    scene.text('"Grandma, here are the mushrooms and berries, just like you asked!"');
    // TODO-QSP: dynamic text: "Oh, thank you, <<$pcs_nickname>>. I was starting to think you had forgotten abo...
    scene.text(`"Oh, thank you, ${((st as any).pcs_nickname || '')}. I was starting to think you had forgotten about me. They will have to go down in the root cellar until we are ready to can them," your Grandma replied.`);
    scene.text('"Do I need to go out on another run, or do you think that\'s enough?"');
    scene.text('"Well, little one," your Grandma says, "There is a difference between enough and enough for today."');
    scene.text('"Oh…" you say, unsure what to make of her response.');
    scene.text('She smiles gently and pats your head. "You\'ve done enough for today, child."');
    scene.text('You smile back awkwardly, still unsure, but give your Grandma a smooch on the cheek and go on with your day.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give Grandma the mushrooms and berries she asked for', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).boletus = ((st as any).boletus ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (((st as any).grandmaQW ?? 0)?.['chore_berry_quantity']);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['help_amount'] = ((st as any).grandmaQW['help_amount'] ?? 0) + (3);
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_berries'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_both'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
    ((st as any).grandmaQW = (st as any).grandmaQW ?? {})['disappointment'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You bring your basket, heavy with mushrooms and berries from the forest, over to your grandmother.');
    scene.text('"Grandma, here are the mushrooms and berries, just like you asked!"');
    // TODO-QSP: dynamic text: "Oh, thank you very much, <<$pcs_nickname>>. They will have to go down in the ro...
    scene.text(`"Oh, thank you very much, ${((st as any).pcs_nickname || '')}. They will have to go down in the root cellar until we are ready to can them," your Grandma replied.`);
    scene.text('"Do I need to go out on another run, or do you think that\'s enough?"');
    scene.text('"Well, little one," your Grandma says, "There is a difference between enough and enough for today."');
    scene.text('"Oh…" you say, unsure what to make of her response.');
    scene.text('She smiles gently and pats your head. "You\'ve done enough for today, child."');
    scene.text('You smile back awkwardly, still unsure, but give your Grandma a smooch on the cheek and go on with your day.');
    scene.actions([
      { label: 'Continue', goto: ['gp_elene', 'talk'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 1) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would clean the floors in her house today.</b>');
  } else {
    if (((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 2) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You cleaned the floors for Grandma - you should let her know that it is done.</b>');
    } else {
      if (((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would wash clothes for her today.</b>');
      } else {
        if (((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 2) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You washed clothes for Grandma - you should let her know that it is done.</b>');
        } else {
          if (((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 1) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would milk the cow in the barn for her today.</b>');
          } else {
            if (((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You milked the cow for Grandma - you should let her know that it is done.</b>');
            } else {
              if (((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 1) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would go get groceries for her today.</b>');
              } else {
                if (((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 2) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You got the groceries for Grandma - you should go give them to her.</b>');
                } else {
                  if (((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would help her can mushrooms today.</b>');
                  } else {
                    if (((s as any).grandmaQW ?? 0)?.['chore_can_berries'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would help her can berries today.</b>');
                    } else {
                      if (((s as any).grandmaQW ?? 0)?.['can_veggies'] === 1) {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would help her can vegetables today.</b>');
                      } else {
                        if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 1) {
                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would feed the chickens for her today.</b>');
                        } else {
                          if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 2) {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You fed the chickens for Grandma - you should let her know that it is done.</b>');
                          } else {
                            if (((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 1) {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would work in the garden today.</b>');
                            } else {
                              if (((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 2) {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You worked in the garden for Grandma - you should let her know that it is done.</b>');
                              } else {
                                if (((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 1) {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would water the plants in the garden today.</b>');
                                } else {
                                  if (((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 2) {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You watered the plants in the garden for Grandma - you should let her know that it is done.</b>');
                                  } else {
                                    if (((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 1) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would pick strawberries from the garden for her today.</b>');
                                    } else {
                                      if (((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 2) {
                                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You picked strawberries for Grandma - you should give them to her.</b>');
                                      } else {
                                        if (((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 1) {
                                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would collect fruit from the garden for her today.</b>');
                                        } else {
                                          if (((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 2) {
                                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You collected fruit for Grandma - you should give them to her.</b>');
                                          } else {
                                            if (((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 1) {
                                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would harvest vegetables from the garden for her today.</b>');
                                            } else {
                                              if (((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 2) {
                                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You harvested vegetables for Grandma - you should give them to her.</b>');
                                              } else {
                                                if (((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] < 3) {
                                                  if (((s as any).boletus ?? 0) < ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']) {
                                                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 1;
                                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would pick ' + ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms for her today.</b>');
                                                  } else {
                                                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 2;
                                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms that Grandma asked for - you should give them to her.</b>');
                                                  }
                                                } else {
                                                  if (((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] < 3) {
                                                    if (((s as any).bilberry ?? 0) < ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity']) {
                                                      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_berries'] = 1;
                                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would pick ' + ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries for her today.</b>');
                                                    } else {
                                                      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_berries'] = 2;
                                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries that Grandma asked for - you should give them to her.</b>');
                                                    }
                                                  } else {
                                                    if (((s as any).grandmaQW ?? 0)?.['chore_gather_both'] > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_gather_both'] < 3) {
                                                      if (((s as any).bilberry ?? 0) < ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity']  ||  ((s as any).boletus ?? 0) < ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity']) {
                                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_both'] = 1;
                                                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You promised Grandma you would pick ' + ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms and ' + ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries for her today.</b>');
                                                      } else {
                                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_both'] = 2;
                                                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['gadukino'] = ((s as any).stat_texts['gadukino'] ?? 0) + ('<br><b>You have picked the ' + ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] + ' kg of mushrooms and ' + ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] + ' kg of berries that Grandma asked for - you should give them to her.</b>');
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
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'set_talk_acts':
      enterSetTalkActs(s, scene);
      break;
    case 'get_random_chore_act':
      enterGetRandomChoreAct(s, scene);
      break;
    case 'chore_harvest_switch':
      enterChoreHarvestSwitch(s, scene);
      break;
    case 'set_report_chores_acts':
      enterSetReportChoresActs(s, scene);
      break;
    case 'check_for_chores':
      enterCheckForChores(s, scene);
      break;
    case 'chore_cleanfloor':
      enterChoreCleanfloor(s, scene);
      break;
    case 'event_cleanfloor':
      enterEventCleanfloor(s, scene);
      break;
    case 'set_report_cleanfloor_act':
      enterSetReportCleanfloorAct(s, scene);
      break;
    case 'chore_washclothes':
      enterChoreWashclothes(s, scene);
      break;
    case 'event_washclothes':
      enterEventWashclothes(s, scene);
      break;
    case 'set_report_washclothes_act':
      enterSetReportWashclothesAct(s, scene);
      break;
    case 'chore_milkcows':
      enterChoreMilkcows(s, scene);
      break;
    case 'event_milkcow':
      enterEventMilkcow(s, scene);
      break;
    case 'set_report_milkcow_act':
      enterSetReportMilkcowAct(s, scene);
      break;
    case 'chore_groceries':
      enterChoreGroceries(s, scene);
      break;
    case 'event_groceries':
      enterEventGroceries(s, scene);
      break;
    case 'set_report_groceries_act':
      enterSetReportGroceriesAct(s, scene);
      break;
    case 'chore_can_mushrooms':
      enterChoreCanMushrooms(s, scene);
      break;
    case 'set_help_can_mushrooms_act':
      enterSetHelpCanMushroomsAct(s, scene);
      break;
    case 'chore_can_berries':
      enterChoreCanBerries(s, scene);
      break;
    case 'set_help_can_berries_act':
      enterSetHelpCanBerriesAct(s, scene);
      break;
    case 'chore_can_veggies':
      enterChoreCanVeggies(s, scene);
      break;
    case 'set_help_can_veggies_act':
      enterSetHelpCanVeggiesAct(s, scene);
      break;
    case 'chore_feedchickens':
      enterChoreFeedchickens(s, scene);
      break;
    case 'event_feedchickens':
      enterEventFeedchickens(s, scene);
      break;
    case 'set_report_feedchickens_act':
      enterSetReportFeedchickensAct(s, scene);
      break;
    case 'chore_checkplants':
      enterChoreCheckplants(s, scene);
      break;
    case 'event_checkplants':
      enterEventCheckplants(s, scene);
      break;
    case 'set_report_checkplants_act':
      enterSetReportCheckplantsAct(s, scene);
      break;
    case 'chore_waterplants':
      enterChoreWaterplants(s, scene);
      break;
    case 'event_waterplants':
      enterEventWaterplants(s, scene);
      break;
    case 'set_report_waterplants_act':
      enterSetReportWaterplantsAct(s, scene);
      break;
    case 'chore_collectstrawberries':
      enterChoreCollectstrawberries(s, scene);
      break;
    case 'event_collectstrawberries':
      enterEventCollectstrawberries(s, scene);
      break;
    case 'set_report_collectstrawberries_act':
      enterSetReportCollectstrawberriesAct(s, scene);
      break;
    case 'chore_collectfruit':
      enterChoreCollectfruit(s, scene);
      break;
    case 'event_collectfruit':
      enterEventCollectfruit(s, scene);
      break;
    case 'set_report_collectfruit_act':
      enterSetReportCollectfruitAct(s, scene);
      break;
    case 'chore_harvestgarden':
      enterChoreHarvestgarden(s, scene);
      break;
    case 'event_harvestgarden':
      enterEventHarvestgarden(s, scene);
      break;
    case 'set_report_harvestgarden_act':
      enterSetReportHarvestgardenAct(s, scene);
      break;
    case 'chore_gathermushrooms':
      enterChoreGathermushrooms(s, scene);
      break;
    case 'set_report_gathermushrooms_act':
      enterSetReportGathermushroomsAct(s, scene);
      break;
    case 'chore_gatherberries':
      enterChoreGatherberries(s, scene);
      break;
    case 'set_report_gatherberries_act':
      enterSetReportGatherberriesAct(s, scene);
      break;
    case 'chore_gatherboth':
      enterChoreGatherboth(s, scene);
      break;
    case 'set_report_gatherboth_act':
      enterSetReportGatherbothAct(s, scene);
      break;
    case 'stat_display':
      enterStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gp_elene: LocationDef = {
  name: 'gp_elene',
  title: 'Your grandma is extremely old and seldom leaves the house. M',
  region: 'other',
  enter: enter,
};
