import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'old_women_slutrep') {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
      scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
      scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. One of them comments on the way you are walking.');
      scene.text('"Look at the way she walks, swinging her hips." Another nods as she replies. "She should be ashamed! Of course, if she had a proper mother such behavior would have been beaten out of her." You are tempted to stop and say something, but you know it wouldn\'t change anything and would only make matters worse. They seem to lose interest in you, but you can\'t help but notice people are talking about your reputation. You should be more discreet if you want them to stop talking about you.');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
      scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. One of them makes a comment loud enough for you to hear.');
      scene.text('"She should be ashamed of herself, always dressing in tight skimpy clothes!" Another nods as she replies. "Or with how she flirts with every boy in town." You are tempted to stop and say something, but you know it wouldn\'t change anything and would only make matters worse. They seem to lose interest in you, but you can\'t help but notice people are talking about your growing reputation. You should be more discreet if you want them to stop talking about you.');
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
        scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. One of them makes a comment loud enough for you to hear.');
        scene.text('"She should be ashamed of herself, using her body to get boys to like her." Another nods as she replies. "Just wait. Soon enough, they will wise up and want nothing to do with her. They\'ll find proper young ladies to marry." You are tempted to stop and say something, but you know it wouldn\'t change anything and would only make matters worse. They seem to lose interest in you, but you can\'t help but notice people are talking about your reputation, which is only getting worse. You should be more discreet if you want people to stop talking about you.');
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
        scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. They all shake their heads and give you dirty looks.');
        scene.text('"She should be ashamed of herself." Another nods as she replies. "She needs to find herself a man before it\'s too late." The third one then chimes in. "If anyone would have her now." You are tempted to stop and say something, but you know it wouldn\'t change anything and would only make matters worse. They seem to lose interest in you, but you can\'t help but notice it seems like everyone is now aware of your tarnished reputation. You should be more discreet if you want people to stop talking about you.');
        if (((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
          scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. They all shake their heads and give you dirty looks.');
          scene.text('"You should be ashamed of yourself, you little whore." Another nods as she replies. "Don\'t waste your time with the likes of her." A few of them make a shooing motion towards you, obviously wanting you to move on. You are tempted to stop and say something, but you know it wouldn\'t change anything and would only make matters worse. They seem to keep talking about you, but you\'re too far away to hear them. Your reputation is in tatters, but maybe it isn\'t too late to redeem yourself.');
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/events/grandmothers_gossip\' + rand(1, 3) + \'.jpg');
          scene.text('You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. They all shake their heads and give you dirty looks.');
          scene.text('"Worse than her mother! And at her age!" Another nods as she replies. "I don\'t know about worse. I think you forget how bad her mother was at that age." They continue to talk about your mother. You know your mother\'s reputation, deserved or not, but there\'s little you can say in your own defense.');
        }
        scene.actions([
          { label: 'Keep going', goto: ['pav_complex', 'start'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'boys_slutrep') {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        qspCall(s, 'stat', '');
        if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
          scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
          scene.text('Two boys around your age are standing near the apartment doors.');
          scene.text('"Hey isn\'t that the girl Sergia was talking about?" you overhear one of them ask.');
          scene.text('"Yeah, but she\'s just a tease," his friend replies. They seem to lose interest in you, but you can\'t help but notice people are talking about your reputation. You should be more discreet if you want them to stop talking about you.');
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
          scene.text('Two boys around your age are standing near the apartment doors.');
          scene.text('"Hey isn\'t that the girl that will let you feel her up for a cigarette?" you overhear one of them ask.');
          scene.text('"Yeah, I heard she gave Dimitri a handjob behind the garages," his friend replies. They keep talking, but you\'re too far away to hear what they are saying. You can only assume it\'s still about you. It seems people are talking about your growing reputation. You should be more discreet if you want them to stop talking about you.');
          if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
            scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
            scene.text('Two boys around your age are standing near the apartment doors.');
            scene.text('"Hey, isn\'t that the slut that\'s always giving guys blowjobs behind the garages?" you overhear one of them ask.');
            scene.text('"Yeah that\'s her. Come on over here slut, I\'ve got a cock you can suck on right here!" He and his friend laugh as he grabs his crotch. You just ignore them and keep walking. It seems people are talking about your reputation, which is only getting worse. You should be more discreet if you want people to stop talking about you.');
          } else {
            scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
            scene.text('Two boys around your age are standing near the apartment doors.');
            scene.text('"Hey slut! Why don\'t you come over here? We\'ve got something for you," one of them hollers.');
            scene.text('"Yeah, we all know how much you love sucking dick!" They both laugh as you just keep walking, at least they don\'t follow you. It seems like everyone is now aware of your tarnished reputation. You should be more discreet if you want people to stop talking about you.');
            if (((s as any).fame ?? 0)?.['pav_slut'] < 300) {
              scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
              scene.text('Two boys around your age are standing near the apartment doors.');
              scene.text('"Hey whore! Come over here! We\'ve got something for you!" one of them hollers.');
              scene.text('"Yeah, we all know you love sucking dick more than anything in the world!" They both laugh as you keep walking, but they follow you and make more crude comments. You pass by a few other people that give you disgusted looks at the boys comments. Your reputation is in tatters, but maybe it isn\'t too late to redeem yourself.');
            } else {
              scene.img('images/locations/pavlovsk/resident/apartment/events/boys_gossip.jpg');
              scene.text('Two boys around your age are standing near the apartment doors.');
              scene.text('"I\'m surprised you can even walk with all the cocks that have fucked your dirty holes," one them says tauntingly as his friend laughs before joining in.');
              scene.text('"I wouldn\'t touch you with three condoms on. Who knows how many diseases you have, or how much old cum is still inside you!" They give you looks of utter disgust as you walk away. There is little you can say in your defense.');
            }
            scene.actions([
              { label: 'Keep going', goto: ['pav_complex', 'start'] },
              { label: 'Keep going', goto: ['pav_complex', 'start'] },
            ]);
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'girls_slutrep') {
            (s as any).minut = ((s as any).minut ?? 0) + 3;
            qspCall(s, 'stat', '');
            if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
              scene.img('images/locations/pavlovsk/resident/apartment/events/girls_gossip.jpg');
              scene.text('Three girls are sitting on one of the benches that dot the courtyard.');
              scene.text('You can\'t help but notice them looking in your direction. They start whispering and giggling to each other, followed by pointed looks in your direction. "Don\'t you have a cock to go and suck somewhere, slut?" They all start giggling again as you just sigh and continue on. It seems people are talking about your growing reputation. You should be more discreet if you want them to stop talking about you.');
            } else {
              scene.img('images/locations/pavlovsk/resident/apartment/events/girls_gossip.jpg');
              scene.text('Three girls are sitting on one of the benches that dot the courtyard. You overhear their conversation as you walk past.');
              scene.text('"Look, it doesn\'t taste that bad."The second one chimes in. "And you can just spit it out if you want."');
              scene.text('The third one just frowns. "I guess…" They spot you and giggle as they point.');
              scene.text('"You could always ask her. She loves swallowing cum and does it all the time!"');
              scene.text('They all laugh at you before returning to their conversation. You just sigh and continue on. It seems people are talking about your reputation, which is only getting worse. You should be more discreet if you want people to stop talking about you.');
              if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                scene.img('images/locations/pavlovsk/resident/apartment/events/girls_gossip.jpg');
                scene.text('Three girls are sitting on one of the benches that dot the courtyard.');
                scene.text('You can\'t help but notice them looking in your direction as they start whispering and giggling, followed by pointed looks in your direction. They notice you looking at them and one of them frowns. "What are you looking at slut? Mind your own business!" They all give you looks of utter disgust and go back to talking quietly to each other. You just sigh and continue on. It seems everyone is now aware of your tarnished reputation. You should be more discreet if you want people to stop talking about you.');
              } else {
                scene.img('images/locations/pavlovsk/resident/apartment/events/girls_gossip.jpg');
                scene.text('Three girls are sitting on one of the benches that dot the courtyard.');
                scene.text('You can\'t help but notice them looking in your direction as they start whispering and giggling, followed by pointed looks in your direction. One of them frowns when they notice you staring. "What are you looking at whore? Don\'t you have a bunch of boys waiting to gangbang you somewhere?" They all give you looks of utter disgust and go back to talking quietly to each other. You just sigh and continue on. Your reputation is in tatters, but maybe it isn\'t too late to redeem yourself.');
                if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
                  scene.img('images/locations/pavlovsk/resident/apartment/events/girls_gossip.jpg');
                  scene.text('Three girls are sitting on one of the benches that dot the courtyard. You can\'t help but notice them looking in your direction.');
                  scene.text('They start talking out loud, apparently not caring who hears them. "Well well, if it isn\'t the town bicycle!"');
                  scene.text('"Yeah, anyone can ride her as much as they want!" another chimes in. The last one just sneers at you.');
                  scene.text('"I wouldn\'t even touch a boy that has been with her. Who knows what kind of filthy diseases she gave him?!" They give you looks of utter disgust and go back to talking to each other and ignoring you. You just sigh and continue on. There is little you can say in your defense.');
                }
                scene.actions([
                  { label: 'Keep going', goto: ['pav_complex', 'start'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const gossips: LocationDef = {
  name: 'gossips',
  title: 'You overhear a group of old women talking while sitting on t',
  region: 'other',
  description: ['You overhear a group of old women talking while sitting on the benches. They often sit outside and gossip regardless of the weather. One of them comments on the way you are walking.'],
  enter: enter,
};
