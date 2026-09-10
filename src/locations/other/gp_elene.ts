import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandma.jpg');
  scene.text('Your grandma is extremely old and seldom leaves the house. Most of the time, she sits on her bed watching TV or slowly cleans.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Grandma looks a little shocked, but it\'s nothing she hasn\'t seen before.');
    scene.text('"Go put some clothes on, dear. You\'ll give your poor grandpa a heart attack if he sees you."');
    return;
    scene.actions([
      { label: 'Maybe you should get dressed before talking to her', goto: ['gp_elene', 'return'] },
    ]);
  }
  if (((s as any).grigory_flower ?? 0) > 0  &&  ((s as any).grigory_flower ?? 0) < 10) {
    // TODO-QSP: act 'Talk to her about the flowers': gt 'grigory', 'flower4'
  }
  qspCall(s, 'gp_elene', 'set_report_chores_acts');
  qspCall(s, 'gp_elene', 'get_random_chore_act');
  qspCall(s, 'gp_elene', 'set_talk_acts');
  scene.actions([
    { label: 'Leave her alone', goto: ['gp_elene', 'return'] },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A31_loc'] !== 'gad_gphouse') {
    // TODO-QSP: gt $locat['A31_loc'], $locat['A31_arg']
  } else {
    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
    // TODO-QSP: gt 'gad_gphouse', $locat['A31_arg']
  }
  scene.build();
}

function enterSetTalkActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['talked_about_gadukino'] === 0) {
    scene.actions([
      { label: 'Ask about the village (0:10)', handler: (st: GameState) => {
    (s as any).grandmaQW['talked_about_gadukino'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/grandparents/grandma.jpg');
    scene.text('You sit next to grandma, eager to have her tell you more about the village.');
    // TODO-QSP: dynamic text: "Don't you remember <<$pcs_nickname>>? You've visited us many times," said grand...
    scene.text(`"Don't you remember ${((s as any).pcs_nickname ?? 0)}? You've visited us many times," said grandma.`);
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
    (s as any).grandmaQW['last_hour_talked'] = ((s as any).hour ?? 0);
    (s as any).grandmaQW['last_day_talked'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'stat', '');
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
    (s as any).grandmaQW['last_day_asked_for_story'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big32.jpg');
    scene.text('She mumbles something when you ask your grandmother to tell you a story. Nevertheless, after a brief second or two, she decides on a story to share with you today and begins to talk slowly.');
    (s as any).temp = Math.floor(Math.random() * 8) + 0;
    if (((s as any).temp ?? 0) === 0) {
      scene.text('"There was this one time my parents allowed me to stay at my friend\'s home for the night. During the night, a lot of snow fell… and we heard a soft knock on the door!" she says in an ominous voice.');
      scene.text('"We listened more closely but could only hear the wind whistling through the trees… so we decided to go back to sleep. Then we heard the knocking again!"');
      scene.text('""We dashed to the window but couldn\'t see anything other than snow. Finally, the knocking became more persistent, and the voice of a small girl begged us to open the door! My friend and I moved to the middle of the room, tightly hugging one another… we were terrified!"');
      scene.text('"The knocking continued into the morning, even when the blizzard stopped. It sounded like someone was panicking, but when we told her parents in the morning, they didn\'t believe us. When we went outside… there were no tracks on the snow! As if it never happened!"');
      scene.text('"We never heard the voice or the knocking again after that, but I still feel bad for not going downstairs to answer the door. What if some girl was actually there, begging for our help? I hope she\'s okay…"');
    } else {
      scene.text('"I had a friend when I was younger," she says in an ominous voice. "Her husband died at her house. He was a drunken bastard. He got drunk one day and died of alcohol poisoning in the very same house."');
      scene.text('"One day, she came home from work, and the floorboards suddenly started creaking! And through the glass panes in the hallway door, she could see the silhouette of a man. It looked remarkably like her late husband!"');
      // TODO-QSP: dynamic text: "She was terrified! She quickly left her house and only returned when I promised...
      scene.text(`"She was terrified! She quickly left her house and only returned when I promised to go with her… but of course, we found nothing. Do you believe in ghosts, ${((s as any).pcs_nickname ?? 0)}? Because ever since then, I do…"`);
      if (((s as any).temp ?? 0) === 2) {
        scene.text('"I wasn\'t born in Gadukino. I grew up in a different village", your grandmother begins. "This is a true story, by the way!"');
        scene.text('"When I was still a little girl, one of our neighbours died. Then, less than two weeks later, one of his brothers died too! And as the legend goes, death comes in threes…"');
        scene.text('"His one surviving sister was terrified. She was a friend, but her parents wouldn\'t let her leave the house."');
        scene.text('"It was well into the winter then, and people could only go to other towns by sleigh. So for forty days, they waited… just when they were about to accept that the legend might not be true, they found one of her relatives. Dead. Muzhik, I believe his name was, was found frozen solid, basically a block of ice! He\'d tried to attend his cousin\'s funeral, but it cost him his life!"');
        // TODO-QSP: dynamic text: "Death is not to be trifled with, <<$pcs_nickname>>… her parents were smart to h...
        scene.text(`"Death is not to be trifled with, ${((s as any).pcs_nickname ?? 0)}… her parents were smart to hide her. Otherwise, she might've died instead!"`);
      } else {
        scene.text('"This really happened!" your grandmother reassures you. "When I was young, your age… it was just after the war. Then, no one believed in superstition or anything like that. Those were tough times. All anyone cared about was how to get their next meal on the table for their family."');
        scene.text('"We all went to bed, but our cat kept meowing at me! It just wouldn\'t let me sleep for hours and hours!"');
        scene.text('"When I finally caught some sleep and woke up the next morning, my father was beside my bed. He said when he cleaned out the furnace of ashes, he found the remains of our dead cat in there!"');
        scene.text('You see her eyes tear up. "No one knew how she got there… no one noticed anything! Except for me. To this day, I believe she was trying to warn me, asking for my help…"');
        scene.text('Your grandmother shrugs, wiping a tear from her eye. You reassuringly put your hand on her knee but don\'t know what to say to comfort her.');
        if (((s as any).temp ?? 0) === 4) {
          scene.text('"I will tell you a story about an event in the village where I was brought up. One day a woman from a place far up in the northern Soviet Union moved to our village."');
          scene.text('"The woman lived alone with this gorgeous dog. It was a white colour, quite large and quiet as a mouse. But, the dog died after a while, and the woman didn\'t want to bury it."');
          scene.text('"She always said it\'s a shame to throw away the pelt since it was so furry. So she thought about what she could make of this pelt. After a while, she decided to make a fur collar of the pelt."');
          scene.text('"It took about two months, and she got really sick… I, among others, visited her, and everything looked fine at first glance. But as soon as I closed the door, she started acting erratic and hallucinating. These were the characteristics of rabies. Unfortunately, since she was living alone, no one noticed it before it was too late to save her life…"');
        } else {
          scene.text('"One evening during the Christmas holidays in my younger days, I was hanging out with my girlfriends in the kitchen. But, of course, it was my school friends, so we were always up to some mischief."');
          scene.text('"We were home alone, and one of my friends persuaded us to do a séance. She tells us that a fortune-teller had explained how one could summon a spirit. So we lit some candles and began chanting for the spirits to show themselves."');
          scene.text('"I managed to summon the profile of a male figure. He was holding something resembling a bouquet of flowers. My second friend summoned a kettle-looking object, while my last friend managed to summon an infant, which frightened us."');
          scene.text('"Not being discouraged, we decided to try again, excited by what we would manage to summon this time. This time I summoned a large steamer. My second friend didn\'t summon anything special, but my third friend summoned the same infant again. The difference this time was that the infant was in a stroller."');
          scene.text('"We ended the séance and went back to doing ordinary stuff. Suddenly we heard a knock on the door, the young man from the séance. He pulled out a beautiful bouquet of roses and gave them to me. I asked him what the reason was, but he just answered that he felt he should deliver flowers to a girl in this village. After that, I got the chills because I remembered the man with a bouquet of flowers from the séance."');
          scene.text('"The most interesting thing that happened was a few months after our séance, my friend that summoned the baby got pregnant. And by the end of the year, she had a baby by age 15. So beware, when you meet a fortune-teller, you never know what might happen…"');
          if (((s as any).temp ?? 0) === 6) {
            scene.text('"I remember sitting down as we are right now," your grandma starts, but suddenly as if she remembered something, she sadly sighs. "There are no more matches…"');
            scene.text('You look at her perplexed, questioning what she\'s talking about. "We do have matches in the kitchen, or if you want, I can run over to the store to buy some."');
            // TODO-QSP: dynamic text: "You don't get it, <<$pcs_nickname>>. The matches today are not as good as those...
            scene.text(`"You don't get it, ${((s as any).pcs_nickname ?? 0)}. The matches today are not as good as those made long ago. I miss those matches we had during the Great Patriotic War before they had to move the factory to the far east… Those matches were magical, not like this crap we have now… Ugh…"`);
          } else {
            scene.text('"One day, my mother, rest her soul, sent us four siblings out to the forest for berry gathering", your grandma begins. "We took our berry collectors and headed out. We reached the forest entrance quickly and decided that it would be best to split up to complete the task faster. Since we were familiar with the area, we all dispersed to our cherished spots and began gathering berries."');
            scene.text('"My favourite spot was a plot surrounded by dense bushes, and in the middle of the plot, there was a huge stump. It was a great spot, and as I approached, I noticed a vast number of ripe strawberries. I rejoiced over the thought that I would gather more than my brothers, slowly gathering the berries and putting them in my berry collector. Then, suddenly, I hear some rustling behind the bushes. I turn towards the sound, but I\'m met with silence. I didn\'t notice anyone, but I still couldn\'t get rid of the eerie feeling."');
            // TODO-QSP: dynamic text: "I shook off the eerie feeling and returned to gathering strawberries again. All...
            scene.text(`"I shook off the eerie feeling and returned to gathering strawberries again. All of a sudden, I get this strange feeling… I look up, and I see a person squatting on the stump. He's completely still and just stares at me. I got terrified and ran away, screaming and crying towards my brothers. They tried to stop and calm me down, but I kept running. My brothers started running after me, trying to keep up. I could hear my oldest brother shouting to run towards the kolkhoz. You see ${((s as any).pcs_firstname ?? 0)}, a long time ago we had central collective farms called kolkhoz."`);
            scene.text('"We were lucky that the farms were close to the forest and didn\'t have to run through the woods for long. I kept looking back to see if this person was following us, but there was no sign of him. We knew we were safe when we saw the brigade\'s farmers. My brothers and I ran to the foreman and explained what had happened. He immediately grabbed the phone and called someone. The other farmers reassured us that we were safe now. After we had calmed down, we got sent home. Our mother met us at home. She fed us and comforted me."');
            scene.text('"The following day, we were informed that some people found dismantled railroad rails not far from the train station Ratomka. Apparently, it was done by the man I encountered in the forest. I didn\'t know it then, but before the war, our area was prone to sabotage by infiltrators. Staying hidden was easy, as the territory is covered by forest, stretching to the border."');
            scene.text('"Ever since that day, the fear I experienced never disappeared, as I\'ve felt it throughout my life. I\'ll carry on this fear for the remaining days of my life…"');
          }
          scene.actions([
            { label: 'Thank her for the story', goto: ['gp_elene', 'talk'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
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
    default:
      enterTalk(s, scene);
      break;
  }
}

export const gp_elene: LocationDef = {
  name: 'gp_elene',
  title: 'Your grandma is extremely old and seldom leaves the house. M',
  region: 'other',
  description: ['Your grandma is extremely old and seldom leaves the house. Most of the time, she sits on her bed watching TV or slowly cleans.'],
  enter: enter,
};
