import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMansionAdventureStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Feofan weaves a tale of how your group travel to the location of the supposed mansion, which appears to be deep in a forest.');
  scene.text('"We should be careful…" Julia says. "There could be others out here looking for this house and the fortune inside it as well."');
  scene.text('Everyone but Petka and Artem nods in agreement.');
  scene.text('"I doubt it," Petka replies. "That \'grieving widow\' was probably lying and there\'s nothing out here but a few dusty skeletons in an old house. If there even is a house."');
  scene.text('"I agree," Artem adds. "Her story sounded way too good to be true. A ton of gold just sitting there, ripe for the taking? It\'s either a trap or someone else has beaten us to it long ago."');
  scene.text('"There must be <i>something</i> out here worth finding," Zinaida chimes in. "Why else would she tell us about this place? If we\'re careful and work together, then we\'ll be fine and might make a profit."');
  scene.actions([
    { label: 'Side with the girls', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You nod at Zinaida and Julia. "I agree. The way the woman spoke about this place made it seem almost magical. There\'s definitely <i>something</i> out here for us to find."');
    scene.text('The girls look happy as Artema and Petka sulk.');
    scene.text('"I\'m telling you guys that this is a trap!" Artem replies. "There\'s noth-"');
    scene.text('Feofan interrupts. "As you argue about whether the widow was being truthful or not, you\'re suddenly greeted the sight of a barefoot young woman, her clothes having seemingly been torn from her body and reduced to tiny scraps that barely cover her anymore. She\'s fleeing in terror and doesn\'t seem to notice any of you."');
    scene.text('"I gently get her attention and ask her what she\'s running from," Julia says.');
    scene.text('"The young woman doesn\'t respond to you," Feofan replies. "She just rambles about how she has to keep running and find somewhere to hide before \'they\' find her again. She dashes off into the tree line before you can say another word."');
    scene.text('"What was that about? Who was she so scared of and why was she running?" Artem asks.');
    scene.text('"I don\'t know," Julia replies. "Whatever the reason, she seemed outright terrified. Maybe she\'s a slave who escaped or something? I hope she doesn\'t run into any more trouble. There are plenty of dangerous creatures and bandits out here."');
    scene.text('"While you feel bad about leaving the poor girl to her fate, you all agree to press on in search of your destination," Feofan narrates. "After traveling even deeper into the forest, a large mansion suddenly appears before you, crows loudly cawing as they circle above. The mansion has long been forgotten about and is overgrown with old vines and trees. A small group of undead prowl the area."');
    scene.text('The undead prove easy to defeat and have a few valuables on them worth looting.');
    scene.text('"So that old hag <i>was</i> telling the truth then," Artem states.');
    scene.text('"Yeah," Petka replies. "Don\'t you guys think it\'s weird that this place even exists, and in the middle of a <i>forest</i>? I roll to check for any magical traps or anomalies."');
    scene.text('The others all nod their heads and quietly agree.');
    scene.actions([
      { label: 'See what Petka finds', goto: ['nerd_game_night1', 'mansion_entrance'] },
    ]);
  } },
    { label: 'Side with the boys', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A142', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You nod at Artem and Petka. "I agree. The way the woman spoke was suspicious. It was like she <i>wanted</i> people to come out here. It definitely sounds like a trap the more I think about it."');
    scene.text('The boys look happy as Julia and Zinaida shake their heads.');
    scene.text('"Why are you guys being such pussies?" Zinaida laughs. "Scared of a little widow woman popping out to offer you some tea?"');
    scene.text('Feofan interrupts. "As you argue about whether the widow was being truthful or not, you\'re suddenly greeted the sight of a barefoot young woman, her clothes having seemingly been torn from her body and reduced to tiny scraps that barely cover her anymore. She\'s fleeing in terror and doesn\'t seem to notice you."');
    scene.text('"I ask her who she is and why she\'s in such a state in the middle of a forest," Artem says.');
    scene.text('"The young woman doesn\'t respond to you," Feofan replies. "She just rambles about how she has to keep running and find somewhere to hide before \'they\' find her again. She dashes off into the tree line before you can say another word."');
    scene.text('"Well that was strange," Zinaida says. "I wonder what her problem was?"');
    scene.text('"She looked like pretty hot," Petka says. "Maybe she was a sex slave running from her master?"');
    scene.text('The group collectively groans, but Artem seems to somewhat agree. "As crude and tasteless as that thought was, he might have a point. I wouldn\'t put it past the bandits that infest this area to kidnap such a pretty girl for such a… purpose. Should we have done something to help her?"');
    scene.text('"You all ponder why the girl is out here and if you should have left her to her fate before you agree to press on in search of your destination," Feofan narrates. After traveling even deeper into the forest, a large mansion suddenly appears before you, crows loudly cawing as they circle above. The mansion has long been forgotten about and is overgrown with old vines and trees. A small group of undead prowl the area."');
    scene.text('The undead prove easy to defeat and have a few valuables on them worth looting.');
    scene.text('"So that old hag <i>was</i> telling the truth then," Artem states.');
    scene.text('"Yeah," Petka replies. "Don\'t you guys think it\'s weird that this place even exists, and in the middle of a <i>forest</i>? I roll to check for any magical traps or anomalies."');
    scene.text('The others all nod their heads and quietly agree.');
    scene.actions([
      { label: 'See what Petka finds', goto: ['nerd_game_night1', 'mansion_entrance'] },
    ]);
  } },
    { label: 'Side with no one', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You choose not to get involved and the four of them argue amongst themselves before Feofan interrupts them.');
    scene.text('"As you argue about whether the widow was being truthful or not, you\'re suddenly greeted the sight of a barefoot young woman, her clothes having seemingly been torn from her body and reduced to tiny scraps that barely cover her anymore. She\'s fleeing in terror and doesn\'t seem to notice you."');
    scene.text('"She\'s pretty much naked?" Petka asks. "I mean… I, uh… I ask her if she needs any help!"');
    scene.text('Feofan rolls his eyes. "The young woman doesn\'t respond to you. She just rambles about how she has to keep running and find somewhere to hide before \'they\' find her again. She dashes off into the tree line before you can say another word."');
    scene.text('"That was odd," Gerasim says. "I wonder what a young maiden like her was doing out in these parts?"');
    scene.text('"Running from something, or <i>someone</i> that scared her so much that she\'s not even aware of reality anymore," Julia replies. "We probably shouldn\'t have let her run off like that. She could run into some not so friendly people out here."');
    scene.text('"You all question what terrible thing befell the poor girl before you all agree to press on in search of your destination," Feofan narrates. After traveling even deeper into the forest, a large mansion suddenly appears before you, crows loudly cawing as they circle above. The mansion has long been forgotten about and is overgrown with old vines and trees. A small group of undead prowl the area."');
    scene.text('The undead prove easy to defeat and have a few valuables on them worth looting.');
    scene.text('"So that old hag <i>was</i> telling the truth then," Artem states.');
    scene.text('"Yeah," Petka replies. "Don\'t you guys think it\'s weird that this place even exists, and in the middle of a <i>forest</i>? I roll to check for any magical traps or anomalies."');
    scene.text('The others all nod their heads and quietly agree.');
    scene.actions([
      { label: 'See what Petka finds', goto: ['nerd_game_night1', 'mansion_entrance'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMansionEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  (s as any).temp = Math.floor(Math.random() * 20) + 1;
  if (((s as any).temp ?? 0) === 20) {
    ((s as any).nerd_game ?? {})['know_succubus_trap'] = 1;
    scene.text('Petka rolls the dice and the 20 comes up. He pumps his fist as Feofan continues narrating.');
    scene.text('"With your expert skills in magic, you\'re able to sense and remove the dark magic charm in place to reveal that the \'mansion\' is actually a large rocky cave nestled amongst rotten trees and sickly vines. You see a faint glow of light escaping from the mouth of the cave and realize that it\'s shaped like a human skull."');
    scene.text('"It seems like Artem and Petka were right," Gerasim says. "This place isn\'t what it appears to be, but we should still investigate that cave. There could be people who don\'t know the house is an illusion trapped inside there, possibly with the undead."');
    scene.text('"I agree, but this cave had dark magic cast over it. That woman in the tavern must have either been entirely delusional or she\'s more suspicious than we first thought. We should tread carefully," Artem says, appearing to take the leadership role.');
    scene.text('"If I ever see that bitch again, I\'ll kill her myself!" Zinaida replies, clearly annoyed at having been fooled.');
    scene.text('"I agree with Artem," Julia counters. "She might have fallen for the illusion here and thought there was something here that wasn\'t."');
    scene.text('"It doesn\'t matter now," Artem says. "We need to investigate this place. <i>Carefully</i>. It\'s not shaped like a damn skull for nothing!"');
    scene.text('"You all carefully venture forth inside, the cave somehow growing darker the further in you go despite the warm glow of the light still being visible," Feofan narrates.');
    scene.actions([
      { label: 'See what happens', goto: ['nerd_game_night1', 'mansion_interior1'] },
    ]);
  } else {
    if (((s as any).temp ?? 0) >= 11) {
      scene.text('Petka rolls the dice and scores high, but doesn\'t get the number he was hoping for. "Damn it!"');
      scene.text('"While you\'re able to sense the dark magic surrounding the mansion, it\'s too strong. You\'re not able to counter it and can only reveal that the house itself… is an illusion…" Feofan narrates.');
      scene.text('"An illusion?" Gerasim asks. "You mean the house in front of us <i>isn\'t actually there</i>?"');
      scene.text('"Yes," Zinaida replies. "It also means that the woman lied to us."');
      scene.text('"Not necessarily," Artem chimes in. "This magical charm could have fooled her into thinking there was something here that wasn\'t actually there. It <i>is</i> dark magic being guarded by the undead after all."');
      scene.text('"It doesn\'t really matter now," Julia says. "We should investigate what\'s going on here. This dark magic has likely claimed more than its fair share of victims and we should put an end to it."');
      scene.text('Artem nods. "This isn\'t exactly what I was expecting, but it\'s still worth checking out. Just be careful. This house isn\'t real, so there could be all sorts of charms and traps waiting for us on the other side of that door."');
      scene.text('"You all carefully venture forth inside, knowing that something sinister lies in wait on the other side of the door…" Feofan narrates.');
      scene.actions([
        { label: 'See what happens', goto: ['nerd_game_night1', 'mansion_interior2'] },
      ]);
    } else {
      scene.text('Petka rolls the dice, but scores poorly. "Damn it!" he scowls. "Another crap roll for me!"');
      scene.text('"You scan the area for any signs of magic, but don\'t sense anything. It appears to be what it is - a simple old house in the woods," Feofan narrates.');
      scene.text('"See?" Zinaida says. "Just a few undead who likely just stumbled into the area. There\'s nothing to worry about and the house is right where the woman said it would be. We just need to loot the treasure and be on our way."');
      scene.text('"I\'m not so sure…" Petka replies. "I still feel like something will go wrong. Or that this is just a waste of our time."');
      scene.text('"Weren\'t you and Artem complaining about us \'playing it too safe\'?" Julia asks accusingly. "Let\'s do what you wanted and take some risks!"');
      scene.text('Petka just sighs before he nods in agreement.');
      scene.text('"You all carefully venture into the house, not knowing what lies in wait on the other side of the door…" Feofan narrates.');
      scene.actions([
        { label: 'See what happens', goto: ['nerd_game_night1', 'mansion_interior2'] },
      ]);
    }
  }
  scene.build();
}

function enterMansionInterior1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('"As you reach the deepest part of the cave, you\'re greeted by what appears to be the lair of some sort of creature. The torches provide only the dimmest of light, but you\'re able to see a number of corpses and even more bones scattered around the cave floor. Some appear to be arranged in some sort of decorative manner," Feofan narrates.');
  scene.text('"Are these the remains of people who came before us or are they some sort of sick trophy display?" Julia asks as she inspects some of them.');
  scene.text('"I don\'t know, but we should-" Artem is about to reply before Feofan cuts him off.');
  scene.text('"As you discuss your grim discovery, a loud cry echoes through the walls," Feofan narrates. "Before you can react, you\'re suddenly besieged by another group of undead, who all slowly shuffle their way across the cave towards you."');
  scene.text('"<i>More</i> undead?! Are we up against a necromancer?!" Julia asks, roleplaying her character being shocked.');
  scene.text('Artem nods. "It looks like it, so let\'s be careful. We don\'t know what kind of necromancer is calling this place home."');
  scene.actions([
    { label: 'Fight the undead', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You all make swift work of the undead," Feofan narrates. "To your surprise, they fight with a level of determination and ferocity that you\'ve never seen any undead do before now."');
    scene.text('"Was it just me or were those undead freaks fighting for a reason instead of out of pure instinct?" Zinaida ponders aloud.');
    scene.text('"It was strange, yes," Gerasim replies. "It\'s almost as if they remembered what they died fighting for and were continuing to do so from beyond the grave."');
    scene.text('"As you question the bizarre display of undead intelligence you just witnessed, the eerie quiet of the cave is suddenly pierced by a loud scream of anguish," Feofan narrates.');
    scene.text('"That sounded close!" Julia states. "We should investigate. That might be someone in need of our help!"');
    scene.text('"I agree," Artem replies. "Let\'s hurry, but be on the lookout for any more undead or traps."');
    scene.actions([
      { label: 'Investigate', goto: ['nerd_game_night1', 'mansion_interior3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMansionInterior2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nerd_game ?? 0)?.['know_succubus_trap'] === 1) {
    // TODO-QSP: dynamic text: "Knowing the house is just an illusion, you're not entirely surprised when it di...
    scene.text(`"Knowing the house is just an illusion, you're not entirely surprised when it disappears and you suddenly find yourselves in a small stone room with no doors or windows," Feofan narrates. "${((s as any).pcs_nickname ?? 0)}, I need you to roll a perception check."`);
    (s as any).temp = Math.floor(Math.random() * 20) + 1;
    if (((s as any).temp ?? 0) === 20) {
      scene.text('You roll the dice and are pleased when the 20 shows up. Feofan checks his notes.');
      scene.text('"With your rogue\'s eagle eyes, you easily spot a small opening in the wall and quickly dodge out of the way, allowing a small arrow to whistle past you. Unfortunately, it finds another target and pierces into Julia\'s cleric. It appears to have an immediate effect."');
      scene.text('"What the hell was that?!" Petka asks. "Is there any more of those things?!"');
      scene.text('More dice are rolled and you discover that, while there are no more arrows, Julia has been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
      scene.text('"Just as you\'re about to give up hope, a secret door opens and Julia\'s cleric hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.');
    } else {
      if (((s as any).temp ?? 0) >= 11) {
        scene.text('You roll the dice and score high. Feofan checks his notes.');
        scene.text('"You hear the quiet click of a mechanism and are just about able to dodge a small arrow that whistles past just inches above your head. Unfortunately, it finds another target and pierces into Julia\'s cleric. It appears to have an immediate effect."');
        scene.text('"What the hell was that?!" Petka asks. "Is there any more of those things?!"');
        scene.text('More dice are rolled and you discover that, while there are no more arrows, Julia has been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
        scene.text('"Just as you\'re about to give up hope, a secret door opens and Julia\'s cleric hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.');
      } else {
        ((s as any).nerd_game ?? {})['lust_curse'] = 1;
        scene.text('You roll the dice, but score poorly. Feofan checks his notes.');
        scene.text('"Distracted by the trap you\'re caught in, you fail to notice the arrow launcher hidden in the wall and flinch as a small arrow pierces your armor. It has an immediate effect on you."');
        scene.text('"What the hell was that?" Petka asks. "Is there any more of those things?"');
        scene.text('More dice are rolled and you discover that, while there are no more arrows, you have been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
        // TODO-QSP: dynamic text: "Just as you're about to give up hope, a secret door opens and <<$pcs_nickname>>...
        scene.text(`"Just as you're about to give up hope, a secret door opens and ${((s as any).pcs_nickname ?? 0)}'s rogue hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.`);
      }
    }
    scene.actions([
      { label: 'Follow the tunnel', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You follow the tunnel and soon end up in a cavernous cave, where you\'re greeted by what appears to be the lair of some sort of creature. The torches provide only the dimmest of light, but you\'re able to see many bones scattered around the cave floor, with others arranged in some sort of decorative manner," Feofan narrates.');
    scene.text('"Are these the remains of people who came before us or are they some sort of sick trophy display?" Zinaida asks as she inspects some of them.');
    scene.text('"I don\'t know, but we should-" Artem is about to reply before Feofan cuts him off.');
    scene.text('"As you discuss your grim discovery, a loud cry echoes through the walls," Feofan narrates. "Before you can react, you\'re suddenly besieged by another group of undead, who all slowly shuffle their way across the cave towards you."');
    scene.text('"<i>More</i> undead freaks?! Is there a necromancer in this cave?" Zinaida asks.');
    scene.text('Artem nods. "It looks like it, so let\'s be careful. We don\'t know what kind of necromancer is calling this place home."');
    scene.actions([
      { label: 'Fight the undead', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You all make swift work of the undead," Feofan narrates. "To your surprise, they fight with a level of determination and ferocity that you\'ve never seen any undead do before now."');
    scene.text('"Was it just me or were those undead freaks fighting for a reason instead of out of pure instinct?" Zinaida ponders aloud.');
    scene.text('"It was strange, yes," Gerasim replies. "It\'s almost as if they remembered what they died fighting for and were continuing to do so from beyond the grave."');
    scene.text('"As you question the bizarre display of undead intelligence you just witnessed, the eerie quiet of the cave is suddenly pierced by a loud scream of anguish," Feofan narrates.');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      scene.text('"That sounded close!" Julia states. "We should investigate. That might be someone in need of our help!"');
      scene.text('"I agree," Artem replies. "Let\'s hurry, but be on the lookout for any more undead or traps."');
    } else {
      scene.text('"Was it me or did that sound close?" Petka asks. "Do you think we should help whoever that was?"');
      scene.text('"Yes," Artem replies. "Let\'s hurry, but be on the lookout for any more undead or traps."');
    }
    scene.actions([
      { label: 'Investigate', goto: ['nerd_game_night1', 'mansion_interior3'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('"You all carefully make your way into the house, but are surprised when it suddenly vanishes before your eyes and you find yourselves in a small stone room with no doors or windows," Feofan narrates.');
    scene.text('"God damn it, Petka! You\'re supposed to counter magical charms like this!" Artem sighs in frustration.');
    // TODO-QSP: dynamic text: Petka is about to reply, but Feofan clears his throat. "I need <<$pcs_nickname>>...
    scene.text(`Petka is about to reply, but Feofan clears his throat. "I need ${((s as any).pcs_nickname ?? 0)} to roll a perception check."`);
    (s as any).temp = Math.floor(Math.random() * 20) + 1;
    if (((s as any).temp ?? 0) === 20) {
      scene.text('You roll the dice and are pleased when the 20 shows up. Feofan checks his notes.');
      scene.text('"With your rogue\'s eagle eyes, you easily spot a small opening in the wall and quickly dodge out of the way, allowing a small arrow to whistle past you. Unfortunately, it finds another target and pierces into Julia\'s cleric. It appears to have an immediate effect."');
      scene.text('"What the hell was that?!" Petka asks. "Is there any more of those things?!"');
      scene.text('More dice are rolled and you discover that, while there are no more arrows, Julia has been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
      scene.text('"Just as you\'re about to give up hope, a secret door opens and Julia\'s cleric hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.');
    } else {
      if (((s as any).temp ?? 0) >= 11) {
        scene.text('You roll the dice and score high. Feofan checks his notes.');
        scene.text('"You hear the quiet click of a mechanism and are just about able to dodge a small arrow that whistles past just inches above your head. Unfortunately, it finds another target and pierces into Julia\'s cleric. It appears to have an immediate effect."');
        scene.text('"What the hell was that?!" Petka asks. "Is there any more of those things?!"');
        scene.text('More dice are rolled and you discover that, while there are no more arrows, Julia has been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
        scene.text('"Just as you\'re about to give up hope, a secret door opens and Julia\'s cleric hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.');
      } else {
        ((s as any).nerd_game ?? {})['lust_curse'] = 1;
        scene.text('You roll the dice, but score poorly. Feofan checks his notes.');
        scene.text('"Distracted by the trap you\'re caught in, you fail to notice the arrow launcher hidden in the wall and flinch as a small arrow pierces your armor. It has an immediate effect on you."');
        scene.text('"What the hell was that?" Petka asks. "Is there any more of those things?"');
        scene.text('More dice are rolled and you discover that, while there are no more arrows, you have been cursed with insatiable lust and will thus be weaker in any upcoming fights. There also doesn\'t appear to be any way out of the room in which you are trapped.');
        // TODO-QSP: dynamic text: "Just as you're about to give up hope, a secret door opens and <<$pcs_nickname>>...
        scene.text(`"Just as you're about to give up hope, a secret door opens and ${((s as any).pcs_nickname ?? 0)}'s rogue hears a voice compelling her to follow the tunnel in front of her," Feofan narrates.`);
      }
    }
    scene.actions([
      { label: 'Follow the tunnel', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You follow the tunnel and soon end up in a cavernous cave, where you\'re greeted by what appears to be a hidden lair of some sort. The torches provide only the faintest amount of light, but you\'re able to see many bones scattered around the cave floor, with others arranged in some sort of decorative manner," Feofan narrates.');
    scene.text('"Are these the remains of people who came before us or are they some sort of sick trophy display?" Zinaida asks as she inspects some of them.');
    scene.text('"I don\'t know, but we should-" Artem is about to reply before Feofan cuts him off.');
    scene.text('"As you discuss your grim discovery, a loud cry echoes through the walls," Feofan narrates. "Before you can react, you\'re suddenly besieged by another group of undead, who all slowly shuffle their way across the cave towards you."');
    scene.text('"<i>More</i> undead freaks?! Is there a necromancer in this cave?" Zinaida asks.');
    scene.text('Artem nods. "It looks like it, so let\'s be careful. We don\'t know what kind of necromancer is calling this place home."');
    scene.actions([
      { label: 'Fight the undead', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You all make swift work of the undead," Feofan narrates. "To your surprise, they fight with a level of determination and ferocity that you\'ve never seen any undead do before now."');
    scene.text('"Was it just me or were those undead freaks fighting for a reason instead of out of pure instict?" Zinaida ponders aloud.');
    scene.text('"It was strange, yes," Gerasim replies. "It\'s almost as if they remembered what they died fighting for and were continuing to do so from beyond the grave."');
    scene.text('"As you question the bizarre display of undead intelligence you just witnessed, the eerie quiet of the cave is suddenly pierced by a loud scream of anguish," Feofan narrates.');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      scene.text('"That sounded close!" Julia states. "We should investigate. That might be someone in need of our help!"');
      scene.text('"I agree," Artem replies. "Let\'s hurry, but be on the lookout for any more undead or traps."');
    } else {
      scene.text('"Was it me or did that sound close?" Petka asks. "Do you think we should help whoever that was?"');
      scene.text('"Yes," Artem replies. "Let\'s hurry, but be on the lookout for any more undead or traps."');
    }
    scene.actions([
      { label: 'Investigate', goto: ['nerd_game_night1', 'mansion_interior3'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterMansionInterior3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('"As you venture further into the cave, you can hear the cries echoing over and over, but they never become any louder or closer. It soon becomes apparent that you\'re somehow travelling in circles," Feofan narrates.');
  scene.text('"Damn this foul dark magic! How do we break out of this loop?" Artems asks, roleplaying his character\'s frustration.');
  // TODO-QSP: iif(nerd_game['lust_curse'] = 1, '"<<$pcs_nickname>>''s rogue', '"Julia''s cleric') + ' suddenly hea...
  scene.text('"We need to let this magic guide us if we want to get out of here," Gerasim replies.');
  // TODO-QSP: dynamic text: "But it's <i>dark magic</i>!" Artem retorts. "Just look at what it's done to ' +...
  scene.text(`"But it's <i>dark magic</i>!" Artem retorts. "Just look at what it's done to ' + iif(nerd_game['lust_curse'] = 1, '${((s as any).pcs_nickname ?? 0)}!', 'Julia!') + ' This voice clearly intends to lure us into a trap!"`);
  scene.text('"Look around us! We\'re already in the trap!" Gerasim points out. "The only way we\'re getting out of here is to let her follow the voice."');
  scene.text('Artem sighs before he reluctantly nods.');
  scene.actions([
    { label: 'Follow the voice', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      // TODO-QSP: dynamic text: "You all stand aside and allow <<$pcs_nickname>> to follow the voice," Feofan na...
      scene.text(`"You all stand aside and allow ${((s as any).pcs_nickname ?? 0)} to follow the voice," Feofan narrates. "Stumbling through the dimly lit cave, she leads you all to a previously hidden area where you find about half a dozen men also stumbling around in what appears to be some sort of trance. To your surprise, they're all naked and are begging to be allowed to please their mistress."`);
      scene.text('"There\'s n- naked <i>men</i> here?" Petka asks, receiving a loud groan from the group in return.');
      scene.text('Feofan rolls his eyes. "Yes. Does that interest you?"');
      scene.text('A few of the group grin as Petka blushes in embarrassment.');
      scene.text('Both Petka and Julia roll their dice and their combined magical abilities are able to reveal that the men are under the cursed spell of a succubus\'s dark magic.');
      scene.text('"Let\'s try and avoid a fight here," Julia says. "These men are innocent victims of that foul creature. If we kill her, then we should break the spell she\'s placed on them. Just don\'t kill them!"');
      // TODO-QSP: dynamic text: "Just as Julia's cleric explains this discovery, <<$pcs_nickname>>'s rogue feels...
      scene.text(`"Just as Julia's cleric explains this discovery, ${((s as any).pcs_nickname ?? 0)}'s rogue feels a sudden pulse of lust course through her as the eyes of the people in front of you glow bright red," Feofan narrates.`);
      scene.text('"Must defend Mistress…" they all drone in unison as they turn to face you, grouping up to attack you.');
    } else {
      scene.text('"You all stand aside and allow Julia to follow the voice," Feofan narrates. "Stumbling through the dimly lit cave, she leads you all to a previously hidden area where you find about half a dozen men also stumbling around in what appears to to be some sort of trance. To your surprise, they\'re all naked and are begging to be allowed to please their mistress."');
      scene.text('"There\'s n- naked <i>men</i> here?" Petka asks, receiving a loud groan from the group in return.');
      scene.text('Feofan rolls his eyes. "Yes. Does that interest you?"');
      scene.text('A few of the group grin as Petka blushes in embarrassment.');
      scene.text('Petka rolls his dice and is able to reveal that the men are under the control of dark magic, but thanks to the curse affecting her, Julia fails her rolls and can\'t provide any further information.');
      scene.text('"I don\'t like this," Zinaida says cautiously. "This cave is flooded with dark magic and we don\'t know who\'s controlling it. There could be blood mages or even demons waiting for us up ahead."');
      scene.text('"Should we kill these men then?" Petka asks. "If they\'re just mindless puppets then-"');
      scene.text('"As you ponder how to proceed, Julia\'s cleric feels a sudden pulse of lust course through her as the eyes of the men in front of you all glow bright red," Feofan narrates.');
      scene.text('"Must defend Mistress…" they all drone in unison as they turn to face you, grouping up to attack you.');
    }
    scene.actions([
      { label: 'Prepare for a fight', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      scene.text('"I don\'t think that\'s going to be an option, Julia!" Artem explains.');
      scene.text('"Then try and knock them out! Remember that they\'re just innocent victims!" Julia replies.');
      scene.text('While the group tries to defeat the cursed men non-lethally, the dark magic that grips their minds is too strong and they make it a ferocious fight to the death as they defend their apparent mistress, forcing you to kill them and put them out of their misery. Throughout the fight, the effects of the lust curse grow stronger and gradually weaken your character further…');
      scene.text('"The last of the cursed victims falls dead before you and the cave grows eerily quiet. The cries of anguish you heard earlier have fallen silent…" Feofan says, his tone of voice setting up the perfect spooky atmosphere.');
      scene.text('Julia has her character say a prayer. "May the Morning Light forgive my sin as it embraces these innocent people in its warm embrace…"');
      scene.text('Zinaida\'s character comforts her. "It\'s not your fault. The succubus had full control of their minds and there was nothing we could have done to save them."');
      scene.text('"But it\'s my job to keep people like them safe from threats like this!" Julia retorts. "I failed them here, but I can still avenge them by cleansing the land of that foul beast! Let\'s quickly heal up and find her before she takes any more victims."');
    } else {
      scene.text('"Weapons ready, people!" Artem exclaims. "We don\'t know what kind of evil is at work here, but we have to defend ourselves against it!"');
      scene.text('"They look almost… ravenous or something," Petka points out. "I can\'t make out who or <i>what</i> is controlling their minds, though…"');
      scene.text('The group enters into a lengthy battle against the frenzied people, who ferociously fight to the death in the name of their apparent mistress and, if it weren\'t for Gerasim\'s excellent save, would have taken Artem\'s character out. Throughout the fight, the effects of the lust curse grow stronger and gradually weaken Julia\'s character further…');
      scene.text('"As the last of this strange group of men falls dead before you, the cave grows eerily quiet. The cries of anguish you heard earlier have fallen silent…" Feofan says, his tone of voice setting up the perfect spooky atmosphere.');
      scene.text('"Who the hell were those people?" Petka asks. "And who is this \'mistress\' they kept talking about?"');
      scene.text('"I don\'t know," Artem replies. "But I do know that their \'mistress\', whoever or whatever she is, is lying in wait for us up ahead. We should take a moment to heal and plan a strategy of attack."');
    }
    scene.actions([
      { label: 'Discuss with the group', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"All those hot, naked men throwing themselves at you and you just kill them all? I\'m disappointed, girls!"');
      scene.text('You all turn and see Anushka watching you with a grin on her face.');
      scene.text('"Oh hey, Nush," Feofan smiles. "You\'ve joined us at a difficult time for our group. That fight was pretty tough for them."');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka just looks bored. "I\'m sure it was. You almost made the game sound fun… until you started just killing them."');
    scene.text('Julia looks disgusted at the thought of what Anushka is suggesting. Zinaida looks annoyed, while Petka speaks up. "Maybe if they were hot naked girls."');
    scene.text('Anushka smirks at him. "Aren\'t you playing a girl? Most girls like hot guys…"');
    scene.text('He blushes while muttering something so quietly that no one can make out what he just said.');
    scene.text('"Anyway, you know why I\'m here," she says and indicates to the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order. "With all those naked men around, Princess there must be dying for your orc cock," she tells Gerasim when handing him his order.');
    scene.text('He looks up at her and smiles. "It was a pretty tough fight, but my guy\'s ready for anything!"');
    scene.text('She snorts at his choice of words. "I\'m sure he is. There\'s probably a horny woman or two in there waiting for you if Princess says no."');
    scene.text('Gerasim blushes at her comment, but you can\'t help but feel there\'s more to it than it seems. Is she flirting with him?');
    scene.text('"So were you hoping that your character could bang one of those naked men you were up against? Or are you finally ready for some big orc dick?" she asks Petka while serving him.');
    scene.text('He blushes bright red and stammers. "What?! No!" He\'s totally flustered by her question and you notice Zinaida smiling slightly at the interaction.');
    scene.text('Petka\'s reaction makes Anushka grin, having gotten the reaction she was hoping for. "Well, have fun nerds. Just remember to clean up after yourselves."');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka is gone, you all get back into the game. The group heals up and, after searching the area for any more enemies or traps, loot it for valuables before deciding to search the bodies for any clues.');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      scene.text('"As you search one of the bodies, you see a strange marking on their neck. It looks almost like a cattle branding, but it radiates with some kind of strange energy," Feofan tells you. "As you continue staring at it, it suddenly starts glowing and you feel yourself growing even more lustful. It\'s as if the marking can sense the curse flowing through you…"');
      scene.text('Julia succeeds on her dice roll and is able to explain that it\'s the unmistakable mark of a succubus and that the succubus must be very powerful if she had so many people under her control at once.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>> then hears the strange voice again, telling her that she's ev...
      scene.text(`"${((s as any).pcs_nickname ?? 0)} then hears the strange voice again, telling her that she's ever so close to finding her mistress and that she need only continue following the sound of her voice," Feofan adds.`);
    } else {
      scene.text('"As you search one of the bodies, you see a strange marking on their neck. It looks almost like a cattle branding," Feofan tells you.');
      scene.text('You decide to call Julia\'s character over to investigate and the marking suddenly starts glowing brightly as Julia\'s character enters some kind of hypnotic trance.');
      scene.text('"Are you okay, Julia?" Zinaida asks when the mark stops glowing and Julia\'s character snaps out of it. "What was that mark?"');
      scene.text('Julia rolls a dice check that fails. "I… I don\'t know. I can\'t remember!"');
      scene.text('"Whatever this magic is, it must have wiped her mind of any knowledge that would help us," Gerasim explains.');
      scene.text('"Julia then hears the strange voice again, telling her that she\'s ever so close to finding her mistress and that she need only continue following the sound of her voice," Feofan adds.');
    }
    scene.text('"And that\'s where we\'ll end it for now. We\'ll pick up this up next week," Feofan says.');
    scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
      scene.text('The group heals up and, after searching the area for any more enemies or traps, loot it for valuables before deciding to search the bodies for any clues.');
      if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
        scene.text('"As you search one of the bodies, you see a strange marking on their neck. It looks almost like a cattle branding, but it radiates with some kind of strange energy," Feofan tells you. "As you continue staring at it, it suddenly starts glowing and you feel yourself growing even more lustful. It\'s as if the marking can sense the curse flowing through you…"');
        scene.text('Julia succeeds on her dice roll and is able to explain that it\'s the unmistakable mark of a succubus and that the succubus must be very powerful if she had so many people under her control at once.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>> then hears the strange voice again, telling her that she's ev...
        scene.text(`"${((s as any).pcs_nickname ?? 0)} then hears the strange voice again, telling her that she's ever so close to finding her mistress and that she need only continue following the sound of her voice," Feofan adds.`);
      } else {
        scene.text('"As you search one of the bodies, you see a strange marking on their neck. It looks almost like a cattle branding," Feofan tells you.');
        scene.text('You decide to call Julia\'s character over to investigate and the marking suddenly starts glowing brightly as Julia\'s character enters some kind of hypnotic trance.');
        scene.text('"Are you okay, Julia?" Zinaida asks when the mark stops glowing and Julia\'s character snaps out of it. "What was that marking about?"');
        scene.text('Julia rolls a dice check that fails. "I… I don\'t know. I can\'t remember!"');
        scene.text('"Whatever this magic is, it must have wiped her mind of any knowledge that would help us," Gerasim explains.');
        scene.text('"Julia then hears the strange voice again, telling her that she\'s ever so close to finding her mistress and that she need only continue following the sound of her voice," Feofan adds.');
      }
      scene.text('"And that\'s where we\'ll end it for now. We\'ll pick this up next week," Feofan says.');
      scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
      qspCall(s, 'nerd_game_night', 'set_end_acts');
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMansionInterior4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  // TODO-QSP: dynamic text: "Okay, when we left off, you'd just finished battling a group of strange men who...
  scene.text(`"Okay, when we left off, you'd just finished battling a group of strange men who were under the control of dark magic. You had just healed up and looted the area when ' + iif(nerd_game['lust_curse'] = 1, '${((s as any).pcs_nickname ?? 0)}'s rogue', 'Julia's cleric') + ' started hearing the strange voice in her head again," Feofan explains.`);
  if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
    scene.text('"That\'s the voice of a succubus!" Julia points out. "Somewhere in this maze of a cave is a powerful lust demon waiting to take advantage of us!"');
    // TODO-QSP: dynamic text: "I know, but we have to keep doing what we're doing and let <<$pcs_nickname>> fo...
    scene.text(`"I know, but we have to keep doing what we're doing and let ${((s as any).pcs_nickname ?? 0)} follow her voice. It's a trap, but it's the only way we'll escape her lair," Gerasim replies.`);
    scene.text('Julia seems very hesitant, likely roleplaying her character, but reluctantly agrees.');
  } else {
    scene.text('"I know this is likely us being lured into a trap, but we have to keep doing what we were before and let Julia follow the voice. It\'s the only way we\'ll escape from this place," Gerasim says.');
    scene.text('"I don\'t like it, but I agree," Artem replies. "Whatever this dark magic is, we must put a stop to it, even if it means springing whatever trap we\'ve been lured into here."');
    scene.text('The others nod in reluctant agreement, still unsure of what threat you\'re actually facing and what dangers you might be walking into here.');
  }
  scene.actions([
    { label: 'Follow the voice', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>> follows the voice's commands and leads you all even deeper in...
      scene.text(`"${((s as any).pcs_nickname ?? 0)} follows the voice's commands and leads you all even deeper into the cave," Feofan narrates.`);
      scene.text('"How far does this cave go?" Petka asks. "I feel like we\'ve been following this tunnel forever!"');
      scene.text('"I don\'t know," Gerasim replies. "But it\'s almost like I can <i>feel</i> the pain and suffering that happened within these walls."');
      scene.text('"As you round yet another corner, you\'re confronted by the sight of a man on his knees, weeping over the corpse of a woman. They both look like bandits," Feofan narrates.');
      scene.text('"What happened here?" Artem asks.');
      scene.text('"A good question," Julia replies. "I\'ll see if I can get through to him."');
      scene.actions([
        { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('Julia rolls a successful magic check that allows her to calm the mind of the weeping man.');
    scene.text('"I… I… Where am I?" he asks while looking around in confusion.');
    scene.text('"Calm yourself, friend. Tell me who you are and why you\'re here. Did you come here to try and find something?" Julia replies.');
    scene.text('"Ye- yes. I\'m a fool. A desperate fool! Some wench in a tavern told me about this gold in an old house and how it was just there for the taking. I told my partner about how easy a job it would be and we came here."');
    scene.text('"Your partner? You mean <i>her</i>?" Zinaida asks.');
    scene.text('The man stares at the corpse on the ground. "Yes. Her name is, <i>was</i> Nyx. She\'s dead because of me…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"What do you mean?" Julia asks softly.');
    scene.text('"When we went into the house, it suddenly disappeared before our eyes and we ended up in this maze of a cave. That\'s when I heard this strange voice in my head and felt this sudden burning urge in my loins to.. to have my way with Nyx. She was powerless to stop me as I pinned her down and… defiled her. Over and over again… I don\'t know how long I went before I finally stopped and regained my senses. Hours? Days?"');
    scene.text('"Sounds like he was under the succubus\'s spell," Gerasim states. "But how did he escape her grasp on his mind? Did she let him go?"');
    scene.text('"That is indeed a good question," Julia replies. "The succubus seems to enjoy toying with her prey. I have no doubt that she has something more sinister in mind for this poor man than what she just put him through. We should hurry and find her before it\'s too late!"');
    scene.text('"What do we do with him?" Petka asks. "Come back and help him once we\'re done?"');
    scene.text('"Before you can react, the man suddenly pulls out his dagger and declares that he can\'t live with the shame of what he\'s done before he slashes his throat and drops dead on the floor," Feofan narrates.');
    scene.text('"Well, I guess that answers that question," Zinaida says. "This succubus must be screwed in the head if she made this man rape his friend <i>to death</i>."');
    scene.text('"Exactly. We don\'t know what other horrors she\'s capable of, so we should proceed cautiously," Julia states before she says a prayer for the dead.');
    // TODO-QSP: dynamic text: "Leaving the two corpses behind, you allow the voice to continue commanding <<$p...
    scene.text(`"Leaving the two corpses behind, you allow the voice to continue commanding ${((s as any).pcs_nickname ?? 0)}. After another lengthy walk through the dim tunnels, the cave suddenly widens out and becomes somewhat brighter," Feofan narrates.`);
    scene.actions([
      { label: 'Move further in', goto: ['nerd_game_night1', 'succubus_meeting'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Julia follows the voice\'s commands and leads you all even deeper into the cave," Feofan narrates.');
      scene.text('"How far does this cave go?" Petka asks. "I feel like we\'ve been following this tunnel forever!"');
      scene.text('"I don\'t know," Gerasim replies. "But it\'s almost like I can <i>feel</i> the pain and suffering that happened within these walls."');
      scene.text('"As you round yet another corner, you\'re confronted by the sight of a man on his knees, weeping over the corpse of a woman. They both look like bandits," Feofan narrates.');
      scene.text('"What happened here?" Artem asks.');
      scene.text('"I don\'t know, but I\'ll try to get some answers out of him," Zinaida replies.');
      scene.actions([
        { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You approach the man, but he doesn\'t respond and continues weeping," Feofan states.');
    scene.text('"Are you okay?" Zinaida asks. "What happened to you?"');
    scene.text('"The man gazes up at you and looks like he\'s about to say something when his eyes suddenly glow bright red," Feofan narrates.');
    scene.text('"Damn it, he\'s under the control of this dark magic as well!" Artem states.');
    scene.text('"Must defend Mistress!" the man drones as he stumbles to his feet and grabs the sword of his fallen comrade.');
    scene.actions([
      { label: 'Prepare for a fight', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"As he gains his footing, you see that he\'s a towering mass of muscle, the sword in his hand looking more like a dagger," Feofan narrates.');
    scene.text('"Look at the size of him!" Gerasim states. "He\'ll snap us like twigs!"');
    scene.text('"We\'ll have to outmaneuver him!" Artem replies.');
    scene.text('The battle begins and everyone plans their attacks, but Julia\'s character is affected by both the curse and the voice in her head, making her much weaker than normal.');
    (s as any).temp = Math.floor(Math.random() * 20) + 1;
    if (((s as any).temp ?? 0) === 20) {
      scene.text('Electing to sneak around behind the man to use your back stab ability, you roll the dice and are pleased when the 20 shows up. Feofan checks his notes.');
      scene.text('"With your rogue\'s stealth ability, you easily sneak around the man and quickly jump on his back before thrusting your daggers into him. It\'s a critical hit and he howls in pain before collapsing to the ground," he explains.');
    } else {
      if (((s as any).temp ?? 0) >= 11) {
        scene.text('Electing to sneak around behind the man to use your back stab ability, you roll the dice and score high. Feofan checks his notes.');
        scene.text('"With your rogue\'s stealth ability, you sneak around the man and jump on his back. However, before you can deal a blow with your daggers, the man tosses you over his shoulder and you fall to the floor," Feofan explains.');
        scene.text('Despite your failure, your attack distracts the man long enough for Zinaida to deal a killing blow.');
      } else {
        scene.text('Electing to sneak around behind the man to use your back stab ability, you roll the dice, but score poorly. Feofan checks his notes.');
        scene.text('"You sneak around behind the man, but when you attempt to jump on his back, he swiftly and effortlessly throws you aside, causing you to hit the ground hard," he explains.');
        scene.text('Petka uses the distraction to hit the man with a powerful spell, causing him to collapse to the ground.');
      }
    }
    scene.text('"I\'m… coming… Nyx… Forgive… me…" he whispers with his dying breath.');
    scene.text('"Nyx? Do you think that\'s… Her?" Petka asks while pointing out the corpse of the woman lying next to the man. "Do you think he killed her?"');
    scene.text('"I\'d say it\'s likely," Artem replies. "Given the size of him, she wouldn\'t have stood a chance. We need to find whoever\'s controlling these people and fast!"');
    scene.text('"Leaving the two corpses behind, you allow the voice to continue commanding Julia. After another lengthy walk through the dim tunnels, the cave suddenly widens out and becomes somewhat brighter," Feofan narrates.');
    scene.actions([
      { label: 'Move further in', goto: ['nerd_game_night1', 'succubus_meeting'] },
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

function enterSuccubusMeeting(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('"As you move further in to investigate, you\'re greeted by a bizarre sight," Feofan says with a small smile. "A beautiful, naked young woman with pale skin, large breasts and long, flowing blonde hair lounging atop a large, centrally placed rock, surrounded by naked men who are all kneeling in servitude.');
  scene.text('"She\'s… she\'s naked?!" Petka asks in shock. "I can see her boobs?"');
  scene.text('"Of course that\'s what you\'re taking away from this!" Gerasim replies. "I ask her what\'s going on."');
  // TODO-QSP: dynamic text: "The woman turns to you and snarls before climbing off the rock," Feofan replies...
  scene.text(`"The woman turns to you and snarls before climbing off the rock," Feofan replies. "${((s as any).pcs_nickname ?? 0)}'s character recognizes her instantly as the grieving woman from the tavern. Her pale skin and ruby red lips are unmistakable."`);
  scene.text('"I raise my weapon at her," you reply. "And ask why she lured us here."');
  if (((s as any).nerd_game ?? 0)?.['know_succubus_trap'] === 1) {
    scene.text('"I\'m always in need of fresh prey and the villages around here prove useful for luring desperate fools like you in with the promise of easy gold."');
    scene.text('"Who were those people back there?" Zinaida asks, sounding very cautious. "Are they from one of the villages?"');
    scene.text('"My latest conquest," she smugly grins. "There was one village who acted all morally superior to the likes of me, so I cursed all the men there with insatiable lust. They went mad and raped every woman they could lay their hands on, including me. Oh, it was <i>glorious</i>! Now they blindly serve me as mindless, brutish slaves. All those men you killed? Bandits, sellswords and villagers who were all so desperate for my approval and attention that they were willing to die for me."');
    scene.text('"<i>She\'s</i> the succubus!" Julia says and raises her weapon, seemingly role-playing her character growing angry. "What happened to those women?"');
    scene.text('The succubus shrugs. "Dead or running for their lives. You might have seen one on your way here, no? Pretty little thing was the most beautiful maiden in the village, at least until the men got their hands on her…"');
    scene.text('"I\'ll strike you down in the name of the light, you foul beast!" Julia replies. "And avenge every person in that village, as well as everyone you\'ve ever lured here!"');
    scene.text('She snarls as she approaches Julia\'s character. "Well aren\'t you a cute little thing? You would have made an ideal pet if you hadn\'t broken my illusion charm and made it past my trap. I\'ll leave <i>you</i> alive so I can slowly watch you break…"');
    scene.text('"She then transforms before you. Curled horns, bat like wings, and a long, arrowed tail all sprout from her body as her fingers transform into razor sharp claws," Feofans narrates. Something about the way Feofan describes her looks and mannerisms nags at you, like you should remember it…');
  } else {
    scene.text('"I\'m always in need of fresh prey and the villages around here prove useful for luring desperate fools like you in with the promise of easy gold."');
    scene.text('"Who were those people back there?" Zinaida asks, sounding very cautious. "Are they from one of the villages?"');
    scene.text('"My latest conquest," she smugly grins. "There was one village who acted all morally superior to the likes of me, so I cursed all the men there with insatiable lust. They went mad and raped every woman they could lay their hands on, including me. Oh, it was <i>glorious</i>! Now they blindly serve me as mindless, brutish slaves. All those men you killed? Bandits, sellswords and villagers who were all so desperate for my approval and attention that they were willing to die for me."');
    if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 0) {
      scene.text('"Julia\'s cleric then feels the effects of the curse growing even stronger," Feofan explains. "She feels the urge to listen to the voice\'s every command…"');
      scene.text('"It\'s been a while since the cursed arrows gifted me a new pet. You\'re a cute little thing. I\'ll be sure to leave you alive…" the woman says with an evil smirk.');
      scene.text('"Who are you?!" Artem asks in a demanding tone.');
      scene.text('"The woman transforms before you, curled horns and a long, arrowed tail sprouting from her body as her fingers transform into razor sharp claws," Feofans narrates.');
      scene.text('"I\'m your worst nightmare," she replies. "I\'ll make you wish you\'d never come here!" Something about the way Feofan describes her looks and mannerisms nags at you, like you should remember it…');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>'s rogue then feels the effects of the curse growing even stro...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}'s rogue then feels the effects of the curse growing even stronger," Feofan explains. "She feels the urge to listen to the voice's every command…"`);
      scene.text('"It\'s been a while since the cursed arrows gifted me a new pet. You\'re a cute little thing. I\'ll be sure to leave you alive…" the woman says with an evil smirk."');
      scene.text('"<i>She\'s</i> the succubus!" Julia replies and raises her weapon. "I\'ll strike you down in the name of the light, you foul beast!"');
      scene.text('"The woman transforms before you. Curled horns, bat like wings, and a long, arrowed tail all sprout from her body as her fingers transform into razor sharp claws," Feofans narrates. Something about the way Feofan describes her looks and mannerisms nags at you, like you should remember it…');
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"It sounds awfully like you\'ve based this sexy succubus upon a certain blonde bitch from school. Goes by Irina. Did someone get their heart broken?"');
      scene.text('You all turn and see Anushka watching you with a grin on her face as Feofan blushes. "Not at all! It\'s just a coincidence that she randomly got blonde hair!"');
      scene.text('Some of the others grin at Feofan\'s misfortune while the rest look uncomfortable. Now that Anushka said it, you realize why the succubus nagged at your memory. Her description and mannerisms do remind you of Irina.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('She just giggles slightly. "I\'m sure it was just a \'coincidence\', you little horndog! But I can\'t blame you. She was a total bitch who tried to control all the boys with her seductive ways to use how she wanted. Anyway, you guys know the rules. You need to order something," she says while indicating the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order. "It sounds like your character had to resist the charms of Not Irina," she tells Gerasim when handing him his order.');
    scene.text('He looks up at her and smiles. "Don\'t worry, he has a very strong mind. A wench like that couldn\'t charm him so easily."');
    scene.text('She nods slightly. "Just make sure he isn\'t <i>too</i> immune to the charms of pretty girls…"');
    scene.text('Gerasim blushes at her comment, but you can\'t help but feel there\'s more to it than it seems. Is she flirting with him or just teasing him?');
    scene.text('"So do you want Not Irina to fuck your girl character because you want to know what it\'s like?" she asks Petka while serving him.');
    scene.text('He blushes bright red and stammers. "What?! No! I mean…" He\'s totally flustered by her question and you notice Zinaida smiling slightly at the interaction.');
    scene.text('Petka\'s reaction makes Anushka grin, having gotten the reaction she was hoping for. "Well, have fun nerds. Just remember to clean up after yourselves."');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka has gone, you all get back into the game. Feofan decides to build some tension by leaving the game at the start of the battle.');
    scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/gamenight.jpg');
      scene.text('"Hold on a second," Julia says curiously. "Blonde with large breasts? Have you based this succubus upon <i>Irina</i>? Is this some kind of perverted fantasy of yours, Feofan?"');
      scene.text('The others grin as Feofan starts blushing.');
      scene.text('"Not at all! It\'s just a coincidence that she randomly got blonde hair!"');
      scene.text('"Right…" Julia replies, clearly not convinced. "I bet she has an ass like Albina\'s too!"');
      scene.text('The others start grinning and snickering as Feofan blushes even harder.');
      scene.text('"Enough!" he barks. "Her design is just a coincidence, end of story!"');
      scene.actions([
        { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once the grinning and snickering has calmed down, you all get back into the game. Feofan decides to build some tension by leaving the game at the start of the battle.');
    scene.text('You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterSuccubusFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
    scene.text('"Your foul magic won\'t save you, beast!" Julia states. "I\'ll strike you down and bring justice to all those you have harmed!"');
    // TODO-QSP: dynamic text: "The succubus smirks and accepts your challenge," Feofan replies. "However, she ...
    scene.text(`"The succubus smirks and accepts your challenge," Feofan replies. "However, she has a trick up her sleeve. ${((s as any).pcs_nickname ?? 0)}'s rogue feels the sudden urge to give in to the voice in her head and submit to the succubus's will. Roll a constitution check, please."`);
    (s as any).temp = Math.floor(Math.random() * 20) + 1;
    if (((s as any).temp ?? 0) === 20) {
      scene.text('You roll your dice and are pleased when the 20 shows up. Feofan checks his notes.');
      scene.text('"Despite the curse flowing through you and the temptation in the voice, you refuse to give in and successfully fight off the urges trying to overwhelm you. The succubus is disappointed."');
      scene.text('"You see? Your magic won\'t work on us. We\'ll never be your slaves!" Julia gloats.');
      scene.text('"We\'ll see about that once my boys are done with you!" the succubus snarls.');
    } else {
      if (((s as any).temp ?? 0) >= 11) {
        scene.text('You roll your dice and score high. Feofan checks his notes.');
        scene.text('"It\'s tough and mentally draining, but you fight off the urges trying to overwhelm you. However, the voice never stops and you have to keep fighting, affecting your ability to concentrate on the upcoming battle."');
        scene.text('"Your magic might be powerful, demon, but you\'ll never break us!" Julia proclaims triumphantly.');
        scene.text('"We\'ll see about that once my boys are done with you!" the succubus snarls.');
      } else {
        ((s as any).nerd_game ?? {})['sveta_slave'] = 1;
        scene.text('You roll the dice, but score poorly. Feofan checks his notes.');
        // TODO-QSP: dynamic text: "Despite her best efforts, the voice is victorious and takes control of <<$pcs_n...
        scene.text(`"Despite her best efforts, the voice is victorious and takes control of ${((s as any).pcs_nickname ?? 0)}'s mind. She obediently walks over and kneels at the feet of the smirking succubus, joining the other mindless slaves surrounding you."`);
        scene.text('"One down, four to go. I look forward to watching you all break. Or you could just give up and <i>die</i>," the succubus snarls.');
      }
    }
    scene.actions([
      { label: 'Battle the succubus', goto: ['nerd_game_night1', 'succubus_fight1'] },
    ]);
  } else {
    scene.text('"Whatever your plan is, it won\'t work!" Artem proclaims.');
    scene.text('"Yeah, we\'ll kill you where you stand!" Gerasim adds.');
    scene.text('"The succubus smirks and accepts your challenge," Feofan replies. "However, she has a trick up her sleeve. Julia\'s cleric feels the sudden urge to give in to the voice in her head and submit to the succubus\'s will. Roll a constitution check, please."');
    scene.text('Julia does so, but fails badly.');
    scene.text('"Despite her best efforts, the succubus takes control of her mind and she obediently walks over and kneels at the feet of the smirking succubus, joining the other mindless slaves surrounding you," Feofan narrates.');
    scene.text('"Damn it!" Zinaida exclaims. "We just lost one of our most powerful fighters!"');
    scene.text('"One down, four to go. I look forward to watching you all break. Or you could just give up and <i>die</i>," the succubus snarls.');
    scene.actions([
      { label: 'Battle the succubus', goto: ['nerd_game_night1', 'succubus_fight1'] },
    ]);
  }
  scene.build();
}

function enterSuccubusFight1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  if (((s as any).nerd_game ?? 0)?.['lust_curse'] === 1) {
    if (((s as any).nerd_game ?? 0)?.['sveta_slave'] === 1) {
      scene.text('"As the battle rages on around you, all you can do is obediently remain on your knees as the succubus overwhelms your mind with lustful thoughts and desires that you feel a powerful, overwhelming urge to satisfy," Feofan explains to you. "As time goes on, you also feel the desire to please your new Mistress."');
      // TODO-QSP: dynamic text: "We have to hurry and break the spell before we lose <<$pcs_nickname>> to her fo...
      scene.text(`"We have to hurry and break the spell before we lose ${((s as any).pcs_nickname ?? 0)} to her forever!" Gerasim exclaims.`);
      scene.text('You\'re forced to listen to the group battle both the succubus and her minions without you and are a little disappointed that you couldn\'t take part.');
      scene.text('"Your thoughts suddenly clear and you find yourself back in the cave, surrounded by corpses as you spot the wounded succubus, having returned to her human form, trying to crawl away from your teammates," Feofan says to you.');
    } else {
      // TODO-QSP: dynamic text: "As the battle commences, the succubus takes flight and watches as her horde of ...
      scene.text(`"As the battle commences, the succubus takes flight and watches as her horde of brainshwashed minions attack you," Feofan narrates. "As you prepare to fight them off, ${((s as any).pcs_nickname ?? 0)} still feels the urge to submit, but is able to fight it off and join the rest of the group in combat."`);
      scene.text('As you fight off the army of minions, the succubus suddenly swoops down and takes a swipe at Gerasim\'s ranger with her claws, causing him to take damage, but he counterattacks and is able to force the succubus to the ground to battle you on equal footing.');
      (s as any).temp = Math.floor(Math.random() * 20) + 1;
      if (((s as any).temp ?? 0) === 20) {
        scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice and are pleased when the 20 shows up. Feofan checks his notes.');
        scene.text('"Taking the opportunity, you lunge at the succubus and grab one of her wings before swinging your dagger. The succubus lets out a bloodcurdling scream of pain as you slice into her wing and tear it off," he narrates.');
        scene.text('Significantly weakened by your critical strike, the succubus soon falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
      } else {
        if (((s as any).temp ?? 0) >= 11) {
          scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice and score high. Feofan checks his notes.');
          scene.text('"Taking the opportunity, you lunge at the succubus and grab one of her wings before swinging your dagger. She cries out in pain as your blade plunges through her wing and sinks into her back," he narrates.');
          scene.text('Taking advantage of the distraction, the others launch their own attacks and pile on the damage. The succubus soon falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
        } else {
          scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice, but score poorly. Feofan checks his notes.');
          scene.text('"Taking the opportunity, you lunge at the succubus, but she hears you coming and spins around to slash at your face with her razor sharp claws. Your attempt to strike her fails and all you do is slash her arm," he narrates.');
          scene.text('Despite your failure, the others are able to pile on their own attacks until the succubus falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"Do you guys even know how loud you can get sometimes? That sexy demonic succubus must have been one hell of a final boss fight."');
      scene.text('You all turn and see Anushka watching you with a bemused smile on her face and most of the group start blushing. You look around the room and see more than a few people staring at you.');
      scene.text('"How do you know that she\'s the final boss?" Feofan asks with an amused smile of his own, the only one seemingly not fazed by everyone looking.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka starts to reply, then stops and looks confused for a moment as her smile disappears and she shakes her head. "Why <i>do</i> I know that? Fuck, I\'ve been spending way too much time with you nerds…" She sighs before she continues. "Anyway, you guys know the rules. You need to order something," she says while indicating the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order before walking away while muttering to herself about knowing far too much about the game you\'re playing.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka has gone, you all get back into the game.');
    scene.text('"Don\'t let her fool you. This show of weakness is just that - a show. She\'ll kill us all in the blink of an eye when we turn our backs," Julia states.');
    scene.text('"What do we do then?" Gerasim asks. "I\'m fairly certain that we can\'t kill a demon as powerful as her, even in her weakened state."');
    // TODO-QSP: dynamic text: "No, we can't, but we can destroy her physical form and thus banish her back to ...
    scene.text(`"No, we can't, but we can destroy her physical form and thus banish her back to the demonic realm from which she came from," Julia explains. "I say we let ${((s as any).pcs_nickname ?? 0)} deal the blow. It was her who suffered the most under her foul magic after all."`);
    scene.text('After a short discussion, the group all agree and await your response.');
    scene.actions([
      { label: 'Reluctantly do it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('Even though it\'s just a game, you don\'t feel comfortable that your character is about to execute someone.');
    scene.text('"You approach the heavily wounded succubus as she makes a desperate attempt to escape, reluctantly grab her and pull her head back before placing your dagger to her neck," Feofan narrates.');
    scene.text('"Wait, wait! There\'s something you need to know!" she exclaims.');
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You decide to hear her out, but keep your dagger at her neck. "What is it?! What do I need to know?!"');
    scene.text('"The women from the last village! They\'re here, they\'re here!"');
    scene.text('WHAT?!" Julia exclaims. "Where are they?! Tell me before I kill you myself, you wretched creature!"');
    scene.text('"Behind the fake wall over there," she says and Julia storms over before demanding that the charm be removed.');
    scene.text('"The succubus obliges and the wall disappears before you to reveal a group of terrifed women cowering in fear," Feofan narrates.');
    scene.text('"What the?" Zinaida asks in bewilderment, a sentiment shared by the others.');
    scene.text('Taking advantage of the distraction, the succubus swiftly slashes your leg with her claws and disappears before your eyes.');
    scene.text('"Damn it, the succubus got away!" Artem states in annoyance.');
    scene.text('"It doesn\'t matter," Julia replies. "We have to help these women."');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village1'] },
    ]);
  } },
      { label: 'Kill her', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['succubus_dead'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You don\'t listen to the creature\'s pleas and reluctantly slash your dagger across her throat, causing her lifeless corpse to fall to the floor as her blood soaks into her blonde hair," Feofan narrates.');
    scene.text('"Good riddance," Julia replies, seeming very happy. "Even if she will return one day, the world is a better place without foul creatures like that in it."');
    scene.text('"After looting her lair and finding little of any value, you all discuss your next move," Feofan narrates.');
    scene.text('"That village she stole those men from must be close by," Petka points out. "Should we check it for survivors or something?"');
    scene.text('"A surprisingly smart suggestion from you for once," Zinaida smirks. "I agree. If nothing else, there\'s probably some good loot there."');
    scene.text('"Leaving the blood soaked corpse of the succubus to rot, you all set off in search of the cursed village," Feofan narrates.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village2'] },
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
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('"Don\'t let her fool you. This show of weakness is just that - a show. She\'ll kill us all in the blink of an eye when we turn our backs," Julia states.');
      scene.text('"What do we do then?" Gerasim asks. "I\'m fairly certain that we can\'t kill a demon as powerful as her, even in her weakened state."');
      // TODO-QSP: dynamic text: "No, we can't, but we can destroy her physical form and thus banish her back to ...
      scene.text(`"No, we can't, but we can destroy her physical form and thus banish her back to the demonic realm from which she came from," Julia explains. "I say we let ${((s as any).pcs_nickname ?? 0)} deal the blow. It was her who suffered the most under her foul magic after all."`);
      scene.text('After a short discussion, the group all agree and await your response.');
      scene.actions([
        { label: 'Reluctantly do it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('Even though it\'s just a game, you don\'t feel comfortable that your character is about to execute someone.');
    scene.text('"You approach the heavily wounded succubus as she makes a desperate attempt to escape, reluctantly grab her and pull her head back before placing your dagger to her neck," Feofan narrates.');
    scene.text('"Wait, wait! There\'s something you need to know!" she exclaims.');
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You decide to hear her out, but keep your dagger at her neck. "What is it?! What do I need to know?!"');
    scene.text('"The women from the last village! They\'re here, they\'re here!"');
    scene.text('WHAT?!" Julia exclaims. "Where are they?! Tell me before I kill you myself, you wretched creature!"');
    scene.text('"Behind the fake wall over there," she says and Julia storms over before demanding that the charm be removed.');
    scene.text('"The succubus obliges and the wall disappears before you to reveal a group of terrifed women cowering in fear," Feofan narrates.');
    scene.text('"What the?" Zinaida asks in bewilderment, a sentiment shared by the others.');
    scene.text('Taking advantage of the distraction, the succubus swiftly slashes your leg with her claws and disappears before your eyes.');
    scene.text('"Damn it, the succubus got away!" Artem states in annoyance.');
    scene.text('"It doesn\'t matter," Julia replies. "We have to help these women."');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village1'] },
    ]);
  } },
      { label: 'Kill her', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['succubus_dead'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"You don\'t listen to the creature\'s pleas and reluctantly slash your dagger across her throat, causing her lifeless corpse to fall to the floor as her blood soaks into her blonde hair," Feofan narrates.');
    scene.text('"Good riddance," Julia replies, seeming very happy. "Even if she will return one day, the world is a better place without foul creatures like that in it."');
    scene.text('"After looting her lair and finding little of any value, you all discuss your next move," Feofan narrates.');
    scene.text('"That village she stole those men from must be close by," Petka points out. "Should we check it for survivors or something?"');
    scene.text('"A surprisingly smart suggestion from you for once," Zinaida smirks. "I agree. If nothing else, there\'s probably some good loot there."');
    scene.text('"Leaving the blood soaked corpse of the succubus to rot, you all set off in search of the cursed village," Feofan narrates.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('"As the battle commences, the succubus takes flight and watches as her horde of brainwashed minions attack you," Feofan narrates. "Julia, however, obediently remains on her knees as the succubus overwhelms her mind with lustful thoughts and desires that she feels a powerful, overwhelming urge to satisfy. As time goes on, she also feels the desire to please her new Mistress."');
    scene.text('"We have to hurry and break the spell before we lose Julia to her forever!" Gerasim exclaims.');
    scene.text('As you fight off the army of minions, the succubus suddenly swoops down and takes a swipe at Gerasim\'s ranger with her claws, causing him to take damage, but he counterattacks and is able to force the succubus to the ground to battle you on equal footing.');
    (s as any).temp = Math.floor(Math.random() * 20) + 1;
    if (((s as any).temp ?? 0) === 20) {
      scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice and are pleased when the 20 shows up. Feofan checks his notes.');
      scene.text('"Taking the opportunity, you lunge at the succubus and grab one of her wings before swinging your dagger. The succubus lets out a bloodcurdling scream of pain as you slice into her wing and tear it off," he narrates.');
      scene.text('Significantly weakened by your critical strike, the succubus soon falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
    } else {
      if (((s as any).temp ?? 0) >= 11) {
        scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice and score high. Feofan checks his notes.');
        scene.text('"Taking the opportunity, you lunge at the succubus and grab one of her wings before swinging your dagger. She cries out in pain as your blade plunges through her wing and sinks into her back," he narrates.');
        scene.text('Taking advantage of the distraction, the others launch their own attacks and pile on the damage. The succubus soon falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
      } else {
        scene.text('As the fight continues, you find yourself behind the succubus, her wings presenting an easy target. You roll the dice, but score poorly. Feofan checks his notes.');
        scene.text('"Taking the opportunity, you lunge at the succubus, but she hears you coming and spins around to slash at your face with her razor sharp claws. Your attempt to strike her fails and all you do is slash her arm," he narrates.');
        scene.text('Despite your failure, the others are able to pile on their own attacks until the succubus falls to the ground, bloodied and defeated as she makes a pathetic attempt to crawl away.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['succubus_dead'] = 1;
    qspCall(s, 'stat', '');
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"Do you guys even know how loud you can get sometimes? That sexy demonic succubus must have been one hell of a final boss fight."');
      scene.text('You all turn and see Anushka watching you with a bemused smile on her face and most of the group start blushing. You look around the room and see more than a few people staring at you.');
      scene.text('"How do you know that she\'s the final boss?" Feofan asks with an amused smile of his own, the only one seemingly not fazed by everyone looking.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka starts to reply, then stops and looks confused for a moment as her smile disappears and she shakes her head. "Why <i>do</i> I know that? Fuck, I\'ve been spending way too much time with you nerds…" She sighs before she continues. "Anyway, you guys know the rules. You need to order something," she says while indicating the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order before walking away while muttering to herself about knowing far too much about the game you\'re playing.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Once Anushka has gone, you all get back into the game.');
    scene.text('"With the succubus and her minions defeated, the spell on Julia is broken and she returns to her normal self," Feofan narrates.');
    scene.text('"Don\'t let her fool you. This show of weakness is just that - a show. She\'ll kill us all in the blink of an eye when we turn our backs," Julia states.');
    scene.text('"What do we do then?" Gerasim asks. "I\'m fairly certain that we can\'t kill a demon as powerful as her, even in her weakened state."');
    scene.text('"No, we can\'t, but we can destroy her physical form and thus banish her back to the demonic realm from which she came from," Julia explains. "I\'ll do it myself, in the name of the Morning Light!"');
    scene.text('The group all watch as Julia grabs a sword from a fallen minion and approaches the succubus.');
    scene.text('"Wait! Wait, there\'s -"');
    scene.text('"I don\'t let the foul beast try and weasel out of it," Julia coldly states. "I swiftly slash my blade across her throat."');
    scene.text('"Her lifeless corpse falls to the floor as her blood soaks into her blonde hair," Feofan narrates.');
    scene.text('"Good riddance," Julia replies, seeming very happy. "Even if she will return one day, the world is a better place without foul creatures like that in it."');
    scene.text('"After looting her lair and finding little of any value, you all discuss your next move," Feofan narrates.');
    scene.text('"That village she stole those men from must be close by," Petka points out. "Should we check it for survivors or something?"');
    scene.text('"A surprisingly smart suggestion from you for once," Zinaida smirks. "I agree. If nothing else, there\'s probably some good loot there."');
    scene.text('"Leaving the blood soaked corpse of the succubus to rot, you all set off in search of the cursed village," Feofan narrates.');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village2'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('"With the succubus and her minions defeated, the spell on Julia is broken and she returns to her normal self," Feofan narrates.');
      scene.text('"Don\'t let her fool you. This show of weakness is just that - a show. She\'ll kill us all in the blink of an eye when we turn our backs," Julia states.');
      scene.text('"What do we do then?" Gerasim asks. "I\'m fairly certain that we can\'t kill a demon as powerful as her, even in her weakened state."');
      scene.text('"No, we can\'t, but we can destroy her physical form and thus banish her back to the demonic realm from which she came from," Julia explains. "I\'ll do it myself, in the name of the Morning Light!"');
      scene.text('The group all watch as Julia grabs a sword from a fallen minion and approaches the succubus.');
      scene.text('"Wait! Wait, there\'s -"');
      scene.text('"I don\'t let the foul beast try and weasel out of it," Julia coldly states. "I swiftly slash my blade across her throat."');
      scene.text('"Her lifeless corpse falls to the floor as her blood soaks into her blonde hair," Feofan narrates.');
      scene.text('"Good riddance," Julia replies, seeming very happy. "Even if she will return one day, the world is a better place without foul creatures like that in it."');
      scene.text('"After looting her lair and finding little of any value, you all discuss your next move," Feofan narrates.');
      scene.text('"That village she stole those men from must be close by," Petka points out. "Should we check it for survivors or something?"');
      scene.text('"A surprisingly smart suggestion from you for once," Zinaida smirks. "I agree. If nothing else, there\'s probably some good loot there."');
      scene.text('"Leaving the blood soaked corpse of the succubus to rot, you all set off in search of the cursed village," Feofan narrates.');
      scene.actions([
        { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village2'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCursedVillage1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('"Leaving the cursed lair of the slain succubus behind, you all escort the women into the tree line, all of whom seem terrified that the cursed men will find them," Feofan narrates.');
  scene.text('"It\'s okay," Julia says. "They can\'t hurt you anymore."');
  scene.actions([
    { label: 'Be blunt', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A142', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"Yeah, we already killed them all, so they won\'t be following you any time soon," you add, which earns you a scornful reprisal from the rest of the group.');
    // TODO-QSP: dynamic text: "Was that really necessary, <<$pcs_nickname>>?" Julia scowls.
    scene.text(`"Was that really necessary, ${((s as any).pcs_nickname ?? 0)}?" Julia scowls.`);
    scene.text('"Yeah, they\'ve been through enough. You didn\'t have to be that direct," Artem adds.');
    scene.text('Zinaida and Gerasim also voice their disapproval at your poor choice of words while Petka remains silent, causing you to blush a little in embarrassment before Feofan continues.');
    scene.text('"Approaching the edge of the village, you all see first hand the gruesome evidence of what happened here," Feofan narrates. "The corpses of both men and women litter the streets, with signs of violence present almost everywhere you look."');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village1a'] },
    ]);
  } },
    { label: 'Be comforting', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A12', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A142', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"We\'ll keep you safe from anyone or anything that tries to hurt you," you say.');
    scene.text('"Rest assured, no harm will come to you," Artem adds.');
    scene.text('The rest of the group all nod in agreement and smile at you, making you feel good about what you said.');
    scene.text('"Approaching the edge of the village, you all see first hand the gruesome evidence of what happened here," Feofan narrates. "The corpses of both men and women litter the streets, with signs of violence present almost everywhere you look."');
    scene.actions([
      { label: 'Continue', goto: ['nerd_game_night1', 'cursed_village1a'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCursedVillage1a(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Gerasim chooses to inspect some of the men, who all bear the telltale marking of the succubus.');
  scene.text('"To your horror, the marking starts faintly glowing, but nothing else happens," Feofan narrates.');
  scene.text('"I knew we should have killed that beast when we had the chance!" Julia explains. "Wherever she disappeared to, she still has some level of control over her former thralls."');
  scene.text('"We should burn the bodies, just to be sure," Zinaida suggests.');
  scene.text('"I agree," Julia states. "I say a prayer for them, welcoming them into the embrace of the Morning Light. I can look after the women while you do that. They don\'t need to see this. "');
  scene.text('You then help gather and burn the bodies of both the men and the women, all of whom seem to have died very violent deaths.');
  scene.actions([
    { label: 'Burn the bodies', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You help Gerasim, Zinaida and Artem burn the bodies. Petka, meanwhile, helps Julia look after the women.');
    scene.text('"I don\'t think I even want to know what these women went through, all to amuse the whims of that evil creature," Artem mutters.');
    scene.text('"At least she can\'t hurt anyone else anymore," Gerasim replies.');
    scene.text('Artem nods and you offer your own opinion on the matter before you finish burning the last of the bodies.');
    scene.text('Julia then approaches you. "Is that it done? I\'ve been talking to the women and they don\'t want to stay here."');
    scene.text('"I don\'t blame them," Gerasim replies. "What\'s their plan?"');
    scene.text('"They intend to gather up whatever belongings they have left and flee into the mountains, where a hidden grove promises to keep them safe from the horrors they\'ve experienced," Feofan explains. "In time, they may feel safe enough to rejoin society."');
    scene.text('"Well, good luck to them I say. They deserve to be safe," Artem replies.');
    scene.text('"It sounds like they\'re as good as dead to me, but anywhere\'s safer than here I guess," Gerasim says.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"The women don\'t intend to leave you empty handed though," Feofan continues. "They tell you that their village was famed for the magnificent weapons and armor produced in their secluded forge and that you\'re free to take whatever you find there as a reward for rescuing them."');
    scene.text('"Oh, are they sure?" Petka pipes up. "I mean, we could use better weapons and armor, but… I don\'t know. It feels like we\'re accepting blood money from them or something…"');
    scene.text('Zinaida rolls a successful history check.');
    scene.text('"I\'ve heard of the wares produced by this village. They\'re of legendary quality and are highly sought after by both armies and sellswords alike. We would be fools not to accept such a gift, even under the circumstances."');
    scene.text('"Well… When you put it like that…" Petka replies.');
    scene.text('"You all agree to accept the generous reward and keep watch over the women as they pick through the ruins of their former home, gathering up anything of value before they tell you where you can find the forge. They then bid you all farewell and start their journey to hopeful safety," Feofan narrates.');
    scene.text('"We should head to this forge and then leave. There\'s not much left for us to do here," Artem states and the group all agree.');
    scene.actions([
      { label: 'Head to the forge', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['group_forge_gear'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"Arriving at the forge, you find it abandoned in the state it was in when the chaos descended. You half expect a blacksmith to just walk in and continue his work," Feofan explains.');
    scene.text('"This place is almost untouched," Gerasim says. "With the right people, they could continue the work here as if… you know, <i>that</i> never happened."');
    scene.text('"Let\'s look around and see what\'s been left behind," Artem says.');
    scene.text('You all search the forge and find weapons that are superior to your current gear before looking for any armor.');
    scene.text('"Artem, Gerasim and Zinadia all acquire new plate armor, while Julia and Petka find some light chainmail to wear under their robes. You, meanwhile, have a choice between two sets of leather armor.');
    scene.text('You\'re told that both options are good, but one set of armor has slightly better stats at the expense of being slightly more revealing.');
    scene.actions([
      { label: 'Take the weaker armor', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['sveta_modest_armor'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You roll your eyes. "Seriously, Feofan? Screw the better stats, I\'m not wearing that skimpy armor! How is armor that exposes my midriff even superior to begin with?" you firmly state.');
    scene.text('A somewhat flustered Feofan accepts your choice and you take the weaker, but more modest armor for your character. Julia and Zinadia give you nods of approval while Petka, unsurprisingly, seems very disappointed.');
    scene.text('"Is that everything?" Artem asks. "Then we should get back to the inn and rest up. Who knows what other adventures await us," he says and winks at Feofan.');
    scene.actions([
      { label: 'Return to base', goto: ['nerd_game_night1', 'end_of_adventure1'] },
    ]);
  } },
      { label: 'Take the skimpy armor', handler: (st: GameState) => {
    ((s as any).nerd_game ?? {})['sveta_skimpy_armor'] = 1;
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"I don\'t care if this armor makes me look like a tavern wench. I want those better stats," you firmly state.');
    scene.text('Feofan accepts your choice and you take the skimpier, but more powerful armor for your character. Julia and Zinadia both shake their heads in disapproval while Petka, unsurprisingly, seems very pleased with your choice.');
    scene.text('"Is that everything?" Artem asks. "Then we should get back to the inn and rest up. Who knows what other adventures await us," he says and winks at Feofan.');
    scene.actions([
      { label: 'Return to base', goto: ['nerd_game_night1', 'end_of_adventure1'] },
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

function enterCursedVillage2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('"Leaving the cursed lair of the slain succubus behind, you all trek through the forest in search of the village," Feofan narrates. "The trail of destruction makes it a simple task…"');
  scene.text('"Goddess, what did that foul creature do to these people?" Julia asks in shock.');
  scene.text('"I say we should have destroyed that lair somehow. Or just found a way to prevent people from getting in. Who knows what kind of dark magic is still active in that place, even if the succubus is dead," Artem replies.');
  scene.text('"There was no dark magic left," Petka replies. "Any trace of that succubus died with her."');
  scene.text('"Good," Julia bluntly states as you continue on your journey to the village.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"As you move clear of the forest, you spot a faint plume of smoke on the horizon. Even from here, you can see the signs of the chaos and devastation that overwhelmed this once quaint and picturesque little village," Feofan narrates.');
    scene.text('"Let\'s keep our guard up. We don\'t know who or what we\'ll find here," Artem states.');
    scene.text('"Death and suffering from the sounds of it," Zinaida replies.');
    scene.text('"There could still be women there, like that poor girl we saw earlier," Gerasim adds.');
    scene.text('The group all murmur in agreement and you continue your journey to the ruined village.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"Approaching the edge of the village, you all see first hand the gruesome evidence of what happened here," Feofan narrates. "The corpses of both men and women litter the streets, with signs of violence present almost everywhere you look."');
    scene.text('Gerasim chooses to inspect some of the men, who all bear the telltale marking of the slain succubus.');
    scene.text('"The marking is heavily faded, as if the magic behind it was weak and dissipating," Feofan explains.');
    scene.text('"Slaying that beast was the right choice," Gerasim says. "In her weakened state, she has no control over her former, uh, slaves, dead or alive."');
    scene.text('"We should still burn the bodies, just to be sure," Zinaida suggests.');
    scene.text('"I agree," Julia states. "If nothing else, it will prevent necromancers from taking advantage of them."');
    scene.actions([
      { label: 'Burn the bodies', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You help Gerasim and Artem gather and burn the bodies of both the men and the women, all of whom seem to have died very violent deaths.');
    scene.text('"I don\'t think I even want to know what these people went through, all to amuse the whims of that evil creature," Artem mutters.');
    scene.text('"Well at least we put them out of their misery and they can\'t hurt anyone else," Gerasim replies.');
    scene.text('Artem nods and you offer your own opinion on the matter before you finish burning the last of the bodies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('"So what now?" Artem asks. "There\'s nothing for us here and I doubt we\'ll find any survivors."');
    scene.text('Zinadia makes a successful history check.');
    scene.text('"I heard this particular village was famous for the wares it produced in its magnificent forge. Its location was a well guarded secret though, and only known by a select few villagers."');
    scene.text('"Well damn," Gerasim replies. "We could have used some better weapons or armor. The succubus punched right through mine."');
    scene.text('"Is that everything?" Artem asks. "Then we should get back to the inn and rest up. Who knows what other adventures await us," he says and winks at Feofan.');
    scene.actions([
      { label: 'Return to base', goto: ['nerd_game_night1', 'end_of_adventure1'] },
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

function enterEndOfAdventure1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('After gathering up the loot you found during the adventure and having done what you can for the village, the party sets off to head back to the town. Feofan narrates traveling for a day, with not much happening beyond a few of the others voicing their concern about the succubus, believing that you haven\'t seen the last of her.');
  scene.text('Once evening arrives you all make camp for the night. After tending to your wounds, making dinner and setting watches, Feofan announces that this is the end of the adventure and you all check the clock to see that it\'s time to end.');
  scene.text('Most of those present moan in disappointment, but everyone starts to put their dice and character sheets away.');
  qspCall(s, 'nerd_game_night', 'set_end_acts');
  return;
  scene.build();
}

function enterNecromancerAdventureStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Feofan weaves a tale of how your group travel to the location of the supposed Necromancers walled manor house, which appears to be in some forested hills, near a swamp.');
  scene.text('"We should be careful…" Julia says. "There could be undead around, we have no clue how many the Necromancer might have raised and just turned loose in the countryside to scare people away from his stronghold"');
  scene.text('Everyone nods in agreement. "Gerasim, maybe you should scout ahead, as your ranger is good at spotting stuff and staying hidden in the wilderness like this." Artem says.');
  scene.text('Gerasim smiles and nods. "Yeah ok," then turns to Feofan and tells him. "I am going to go ahead of the party a few hundred meters to scout ahead of them, keeping an eye out for dangers."');
  scene.text('Feofan rolls some dice behind his Dungeon Master Screen and says. "You move slowly all day as Gerasim\'s ranger scouts ahead but he finds nothing, not even local animals. But just before nightfall he finds a small chapel.');
  scene.text('Gerasim says. "I will wait near the chapel for the others to catch up.');
  scene.text('Feofan nods and makes another roll of dice which makes everyone nervously share glances, then he smiles. "The rest of the party shortly arrive, the rest of you find Gerasim\'s ranger standing not too far from a small, overgrown chapel of the Local Saint, Gwennifer the Sword. Julia, your cleric knows that this would be blessed ground. No undead would be able to enter here, so it would be a safe place for a long rest."');
  scene.actions([
    { label: 'Enter the chapel', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/necro_saint_chapel.jpg');
    scene.text('Feofan says. "All of you enter the chapel, it is fairly small but large enough for all of you to fit. It looks like no one has been here in many years, likely several decades or longer. The roof has some holes in it and the inside is mostly trashed."');
    scene.text('Artem frowns slightly, obviously having hoped for it to be in better shape. "We should search the place and make sure there are no hidden dangers before making camp." He says, everyone else nods in agreement. Which causes a lot of search rolls to be made by everyone.');
    scene.text('Julia winks at Feofan and says. "Isn\'t Saint Gwennifer the Sword the patron saint of sieges?"');
    scene.text('Feofan grins as he says. "Maybe. Roll against religion -use wisdom- with advantage." You realize that Julia is asking for a boon, and Feofan is allowing it based on her character\'s background. Julia rolls twice, taking the higher roll which is apparently good enough. As Feofan says "You do indeed remember reading about Saint Gwennifer the Sword, who is and always has been the patron saint of sieges." He makes a note.');
    scene.actions([
      { label: 'Searching', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    // TODO-QSP: dynamic text: Feofan next checks all your search results. "Most of you find nothing, except Zi...
    scene.text(`Feofan next checks all your search results. "Most of you find nothing, except Zinaida's fighter who rolled surprisingly well." Zinaida for her part smiles in pride at that. "Finds a hidden cache of scrolls behind a loose stone in the floor near the altar. While ${((s as any).pcs_nickname ?? 0)} finds a small hole in the back of the chapel, inside is an old cat. Now dead, it seems to have died of old age."`);
    scene.text('Julia especially looks sad at the mention of the dead cat and says. "I bury the cat with full rites!" Most of the rest of the group moan at this, but follow her outside where she digs a small hole and then buries the cat, blessing it to a happy afterlife. Feofan goes into a lot of detail on the rite, so much so that Petka and Artem start to get annoyed it is taking so long.');
    scene.text('Artem jumps in as soon as he can. "With the cat buried we will go back inside and set up camp. Petka, your wizard should check those scrolls."');
    scene.actions([
      { label: 'Back into the chapel', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"That\'s kinda fucked up to throw in a dead cat, at least the kitty got a good burial."');
      scene.text('You all turn and see Anushka watching you with a frown on her face.');
      scene.text('"Oh hey, Nush," Feofan smiles. "You\'ve joined us after they found a chapel to spend the night in before pushing on to the Necromancer\'s stronghold tomorrow."');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka just looks bored. "I\'m sure, anyways what was the point of the cat?"');
    scene.text('Feofan looks a bit panicked, like he doesn\'t know what to say about that. "I... I... it was to add some realism, sometimes things die and it is some foreshadowing about dealing with the dead and a necromancer." He finally says as he tries to justify himself.');
    scene.text('"Anyway, you know why I\'m here," she says and indicates to the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order. "So once you guys camp and everyone goes to sleep, you finally going to get you some of that orc cock?" she asks Petka when handing him his order, with a wink to Gerasim.');
    scene.text('He looks up at her and smiles. "If his wizard wants..." Gerasim says, starting to join in on the ongoing joke.');
    scene.text('Petka blushes bright red and stammers. "What?! No!" He\'s totally flustered by her question and you notice even Zinaida smiling slightly at the interaction, it seems the whole group is starting to become more relaxed and accepting of Anushka making her little comments.');
    scene.text('Petka\'s reaction makes Anushka grin, having gotten the reaction she was hoping for. "Well, have fun nerds. Just remember to clean up after yourselves."');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((s as any).artemQW ?? 0)?.['dom_nush_dnd'] >= 1) {
      scene.text('Artem leans over to get a more clear view of Anushka walking away. "Damn she has a nice butt, how those little black shorts just tightly cling to it." Zinaida rolls her eyes in disgust, while everyone turns to look and their eyes linger a bit on Anushka\'s butt as she walks away.');
      scene.text('Feofan adds. "Yeah she does." While Petka gets a lustful grin on his face and just nods a lot. Feofan\'s comment makes Zinaida frown and look a little mad even. Before you know it Anushka is back behind the counter and mostly out of view.');
      scene.actions([
        { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Feofan says. "You search the scrolls, most seemed to be ruined but a few still have usable spells left on them." He lists the spells and the rest of the group seem pretty excited by some of them.');
    scene.text('Then Artem frowns as he says, looking over the party supply sheet. "With how slow we travelled to get here, we didn\'t pack enough supplies." Then he looks up at Julia. "If only we were high enough a level for the cleric to cast Bread And Water."');
    scene.text('Julia frowns at that, as does Zinaida, while Petka nods in agreement. "Hey that\'s not my fault, maybe our party leader should have planned better." This starts a small argument before Feofan puts an end to it.');
    scene.text('"OK enough please. You have the supplies you bought, you will have to figure something else out." He adds with a smirk which makes you think he always knew this was going to happen.');
    scene.text('Julia raises a hand. "Wait. I am a specialty cleric. I can ask for a boon one time every adventure. I plead with the Patron Saint of Sieges to grant us a Heroes\' Dinner so that we can rest safe and sated."');
    scene.text('Feofan smiles and nods as he checks some notes. "Seeing that you are a devout cleric and willing to make an effort to both clean her shrine and help the needy, Saint Gwennifer the Sword heeds your plea for a Heroes\' Feast. Before you a small table laden with all sorts of food materializes out of the air and you all feel at peace as the holy magic settles over you."');
    scene.actions([
      { label: 'Have a feast', goto: ['nerd_game_night1', 'necromancer_chapel_feast'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('Feofan says. "You search the scrolls, most seemed to be ruined but a few still have usable spells left on them." He lists the spells and the rest of the group seem pretty excited by some of them.');
      scene.text('Then Artem frowns as he says, looking over the party supply sheet. "With how slow we travelled to get here, we didn\'t pack enough supplies." Then he looks up at Julia. "If only we were high enough a level for the cleric to cast Bread And Water."');
      scene.text('Julia frowns at that, as does Zinaida, while Petka nods in agreement. "Hey that\'s not my fault, maybe our party leader should have planned better." This starts a small argument before Feofan puts an end to it.');
      scene.text('"OK enough please. You have the supplies you bought, you will have to figure something else out." He adds with a smirk which makes you think he always knew this was going to happen.');
      scene.text('Julia raises a hand. "Wait. I am a specialty cleric. I can ask for a boon one time every adventure. I plead with the Patron Saint of Sieges to grant us a Heroes\' Dinner so that we can rest safe and sated."');
      scene.text('Feofan smiles and nods as he checks some notes. "Seeing that you are a devout cleric and willing to make an effort to both clean her shrine and help the needy, Saint Gwennifer the Sword heeds your plea for a Heroes\' Feast. Before you a small table laden with all sorts of food materializes out of the air and you all feel at peace as the holy magic settles over you."');
      scene.actions([
        { label: 'Have a feast', goto: ['nerd_game_night1', 'necromancer_chapel_feast'] },
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

function enterNecromancerChapelFeast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/heroes_feast.jpg');
  scene.text('You all partake of the heroes\' feast and then turn in for the night, each of you taking a watch during the night. Feofan makes a few rolls but reports that at least none of you notice anything happening during the night. "As you exit the chapel now into the morning light you can see a path from here that leads to an old stronghold with a moat off into the distance."');
  scene.text('Gerasim chimes in. "That must be the Necromancer\'s lair, I can\'t believe we didn\'t see it last night." He says as he looks at Feofan with a questioning look.');
  scene.text('Feofan shrugs. "In the fading light of the evening it seems you had all failed to notice it."');
  scene.text('Petka looks excited. "Maybe magic was masking it and the dawn light shows it through the magic, after all undead fear the dawn." Everyone exchanges looks and smiles a bit.');
  scene.text('Julia looks to Petka. "Good thinking, that is likely it. Which means we should hurry before the magic cloaks it again." With that all of you quickly hurry down the path to the stronghold, arriving just as the sun fully clears the horizon. It seems you made it in time as the stronghold is still there, but now somehow even in the sunlight looks dark and forbidding.');
  scene.actions([
    { label: 'Approach the stronghold', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/necromancer_stronghold.jpg');
    scene.text('Feofan looks up: "Please roll lore: history. Sveta, that is one of the skills. Add your skill and then roll the twenty sided dice, let me know what you get."');
    scene.text('Artem frowns: "Do thieves have lore history?"');
    scene.text('You check your character sheet: "I have it, probably to know about old places that are worth a, well: visit, for legendary treasures and the like."');
    scene.text('Gerasim shrugs: "Makes sense to me."');
    scene.text('Feofan bows: "Thank you. That is why I gave her the skill when I built the character. Also Zinaida, you can roll your history as well, having studied many of the wars." Zinaida beams a smile at Feofan and rolls as well, when you do.');
    scene.actions([
      { label: 'Make your roll.', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    scene.text('Zinaida rolls higher than you, so Feofan lets her get the knowledge. "You have talked with some old men about noble houses and their castles. You have checked the building plans where you could. This is a mansion built on the site of an old high motte: basically a moat, a palisade with a gate house and some side buildings at the feet of the mansion that is replacing the old keep. The side buildings are a well, a smithy, a barn and a stable. The hill with the keep has gotten a raised front where a two level building has been added to the keep: a hall and extended rooms for the master of the mansion."');
    scene.text('Zinaida draws a plan on her laptop: "Like this?"');
    scene.text('Feofan adds some corrections, then he nods: "Just like this." Zinaida turns the screen of her laptop to the rest of you, so you can all see.');
    scene.text('Smiling happily she explains terrain types and such. She points at the wall: "According to the reports from trappers and such: is the palisade intact, and the gatehouse? Is there a flight tunnel beginning at the well?"');
    scene.text('Feofan winks: "Roll luck." He looks at you: "House rule. The charisma of your character is your luck, and when things are possible but not set I sometimes allow such rolls."');
    scene.text('Zinaida rolls a "one". She pouts a bit at first, then she smiles again while Feofan tells her: "You have been told by utterly reliable witnesses that there is a kraken in the moat. Your party must avoid crossing the moat anywhere but the bridge in front of the gatehouse." Everyone groans and then laughs at how absurd it is, but a critical failure is often silly, as you have found.');
    scene.text('Artem looks at you: "Time for the thief to go open the gate for us, will you?" The others nod encouragingly.');
    scene.text('Just as you are about to say what you are going to do Feofan interrupts. "That is all for tonight, we will leave off on a cliffhanger." You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNecromancerStrongholdGatehouse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Feofan looks at you: "You are standing at the edge of the bridge that crosses the moat. Probably one that could have been raised once, but that has not worked for a long time, by how it looks now. On the other side a portcullis blocks the way still. What do you do?"');
  scene.text('Julia smiles hugely: "Like the gatehouse bridge in Unterdrückung, the Teutonic Order fort I was visiting last holidays. I can show you pictures." Feofan nods and puts a finger to his lips. Julia blushes and sits straight being quiet while you decide what to do.');
  scene.text('Since you pause a moment, Feofan winks at you: "Since you do NOT want to enter the moat with the kraken, and the moat is also REALLY dirty and stinks, you have no real choice but to cross the bridge."');
  scene.text('You nod at that. "Ok then I will try my best to sneak across the bridge."');
  scene.text('He smiles, "Well it is daylight and there is no cover, but go ahead and give me a stealth roll."');
  scene.actions([
    { label: 'Roll your stealth check', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    scene.text('You roll the dice and get a fairly average roll. Feofan looks, smiles, checks something, rolls some of his own dice before saying. "No one seems to react when you cross the bridge. Now you are standing in front of the gatehouse. You COULD scurry through the gate passage to the portcullis, but you see the openings in the gatehouse above the bridge, above where the guards can pour down hot pitch in case of attack. Or shoot intruders with crossbows. What do you do?" He points at you.');
    scene.text('You try to imagine the scene: "They need to have a window or something to see when guests rather than intruders arrive. They cannot throw burning pitch on guests, after all."');
    scene.text('Feofan nods. "There is what appears to be shuttered windows on the second level."');
    scene.text('You smile and the group gets excited. "I will climb up and go through the shutters."');
    scene.text('Feofan raises his eyebrow and grins: "Make a climbing roll please, against 16: it\'s difficult climbing here. If you fail, take one hit point of damage and make another climb roll."');
    scene.actions([
      { label: 'Roll your climb check', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    scene.text('You roll the dice and manage to just barely beat the number. Feofan nods and narrates: you manage to climb up and quietly force open one of the shutters, climbing inside. It is almost completely dark, and it takes a moment for your human eyes to adjust to the dim light to make anything out. Once they do, you can\'t find anything noteworthy but a door.');
    scene.text('You tell him. "I will sneak a peek out the door and if I see nothing I will go out and try to find my way down to the portcullis controls."');
    scene.text('He nods while the rest watch and listen. He describes you looking around and finding stairs down to the inner courtyard where you find the controls. They are surprisingly in good shape and well oiled, he notes, which puts everyone on edge. With that you use the crank to open the way for your fellow adventurers. Then Feofan goes back into group mode. It is your character, though, that notices the runes etched into the walls of the passage through the gatehouse.');
    scene.actions([
      { label: 'The runes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"Wait." You call out before the others can walk down the tunnel of the gatehouse. "There are some runes carved into the stones."');
      scene.text('Petka asks to check them out, he makes his roll and Feofan says. "These are wards. Probably an alert that triggers when a living being uses the passage."');
      scene.text('The group spends the rest of the time discussing whether to cast "Counterspell" as a ritual or just rush in. Julia leads the counterspell faction, Zinaida is all for rushing in. "That will draw the defenses out into the open."');
      scene.text('A voice cuts through the argument. "Counterspell, you always go with stealth. It is dumb to fight something head-on when you don\'t have to and don\'t even know what it might be."');
      scene.text('You all turn and see Anushka watching you.');
      scene.text('"Oh hey, Nush," Feofan smiles. "You know you could always join us if you wanted to." Everyone stops talking at once when Feofan just asks her to join the group, some looking like they are hoping she will say yes and some dreading it.');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka snorts a slight laugh and shakes her head. "No thanks, I don\'t have time. Between work, school and the band, it doesn\'t leave much free time."');
    scene.text('Feofan presses on. "It is only a few hours a week and if you can\'t make it we can always play a board game or have someone else run your character if you want. I promise it is a lot more fun than you think." He sounds pretty convincing and you are honestly not sure what she might say, but you imagine the answer is no.');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((s as any).artemQW ?? 0)?.['dom_nush_dnd'] >= 1) {
      scene.text('Before she responds Artem adds. "I think you should as well. You have gotten into playing the tavern wench and seem to enjoy it, this would just be more of the same. Plus you could even keep playing her, maybe she always wanted to be an adventurer and the next time we go back to town she can ask to join us, then you could play anything you want."');
    }
    scene.text('She actually looks thoughtful for a moment before shaking her head. "No thanks, and while I have to admit watching you guys these past few weeks has kind of changed my mind about this play pretend stuff, maybe it\'s more fun than I gave it credit for. It doesn\'t change the reality that I really just don\'t have time." Feofan starts to say more and she interrupts him. "I appreciate the offer but you guys play when I work, or you would have to play when I practice. Maybe some day, but not now." The last bit you think she just said to throw him a bone and make him drop it, because you saw how his face lit up at the possibility.');
    if (((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 5  &&  ((s as any).artemQW ?? 0)?.['dom_nush_dnd'] >= 1) {
      scene.text('Artem sighs, obviously having thought she might say yes. Then he looks right at her and in one of the most confident voices you have heard from him says. "We will talk about this later... in private." Anushka rolls her eyes slightly at that, while everyone else exchanges glances, noticing how Artem has slowly been starting to act differently.');
    }
    scene.text('Feofan nods. "Ok sure, I will hold you to that." He says with a wink.');
    scene.text('"Anyway, you know why I\'m here," she says and indicates to the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order, "Well, have fun nerds. Just remember to clean up after yourselves." then heads back to the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('Feofan says. "You search the scrolls, most seemed to be ruined but a few still have usable spells left on them." He lists the spells and the rest of the group seem pretty excited by some of them.');
    scene.text('Then Artem frowns as he says, looking over the party supply sheet. "With how slow we travelled to get here, we didn\'t pack enough supplies." Then he looks up at Julia. "If only we were high enough a level for the cleric to cast Bread And Water."');
    scene.text('Julia frowns at that, as does Zinaida, while Petka nods in agreement. "Hey that\'s not my fault, maybe our party leader should have planned better." This starts a small argument before Feofan puts an end to it.');
    scene.text('"OK enough please. You have the supplies you bought, you will have to figure something else out." He adds with a smirk which makes you think he always knew this was going to happen.');
    scene.text('Julia raises a hand. "Wait. I am a specialty cleric. I can ask for a boon one time every adventure. I plead with the Patron Saint of Sieges to grant us a Heroes\' Dinner so that we can rest safe and sated."');
    scene.text('Feofan smiles and nods as he checks some notes. "Seeing that you are a devout cleric and willing to make an effort to both clean her shrine and help the needy, Saint Gwennifer the Sword heeds your plea for a Heroes\' Feast. Before you a small table laden with all sorts of food materializes out of the air and you all feel at peace as the holy magic settles over you."');
    scene.actions([
      { label: 'Have a feast', goto: ['nerd_game_night1', 'necromancer_chapel_feast'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('"Wait." You call out before the others can walk down the tunnel of the gatehouse. "There are some runes carved into the stones."');
      scene.text('Petka asks to check them out, he makes his roll and Feofan says. "These are wards. Probably an alert that triggers when a living being uses the passage."');
      scene.text('The group spends the rest of the time discussing whether to cast "Counterspell" as a ritual or just rush in. Julia leads the counterspell faction, Zinaida is all for rushing in. "That will draw the defenses out into the open."');
      scene.actions([
        { label: 'Agree with the counterspell', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/ambush_undead.jpg');
    scene.text('You side with the counterspell. "I think we use stealth on our side, sneak in and draw them out in smaller groups to fight." You manage to help convince the rest. Petka\'s wizard uses her spells to counter the rune wards, allowing all of you to get inside. From there you start to explore the various buildings. In each you find a small group of undead which is mostly easy to dispatch in such small numbers. Finally with all the other buildings clear you are ready to enter the small keep.');
    scene.actions([
      { label: 'Enter the keep', goto: ['nerd_game_night1', 'necromancer_keep1'] },
    ]);
  } },
        { label: 'Agree to just charge in', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/undead_swarm.jpg');
    scene.text('You side with the rush in. "I think we should just rush in, that way they have to come to us." You manage to help convince the rest. Artem\'s dwarf leads the way through the wards. Almost at once undead start pouring in from every building. As you battle them you start to regret your decision as the group almost gets overwhelmed. Finally the last of the undead fall, but before you can heal up the doors to the keep burst open and a Death Knight comes out and attacks at once.');
    scene.actions([
      { label: 'Fight the Death Knight', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/death_knight.jpg');
    scene.text('As you all scramble to meet this next threat, he plunges his sword into the ground while purple magic flows through it. The magic snakes across the ground, reanimating several of the undead you had just killed. Everyone moans in despair at this but, having no choice, you are forced to fight this new threat along with some of the ones you had already killed. You battle the Death Knight and undead, and it starts to look like you might lose when Petka remembers the scrolls you had found in the chapel. With those you manage to just barely win, at the cost of all the scrolls you found.');
    scene.text('Artem says "Damn, we might need those to fight the Necromancer but I guess there is nothing we can do about it now. We should search all the other buildings before heading into the keep itself." The rest agree as you start to explore the various buildings. In each you find the buildings now completely empty with no enemies and nothing of note worth taking. Finally with all the other buildings clear you are ready to enter the small keep.');
    scene.actions([
      { label: 'Enter the keep', goto: ['nerd_game_night1', 'necromancer_keep2'] },
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

function enterNecromancerKeep1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/death_knight.jpg');
  scene.text('As you enter you look around at the large chamber. It seems much of the inside of the keep has collapsed, which was not apparent from the outside. On the raised throne sits an undead knight. Just as Artem is about to warn everyone Feofan interrupts. "Just then the knight stands up and plunges his sword into the ground. Purple magic pulses down the blade into the ground, the magic snakes around to the various bodies inside the room and they begin to rise as well. You find you are surrounded now."');
  scene.text('Artem says. "Shit, get ready, this is going to be a hard fight." You battle the Death Knight and undead, and it starts to look like you might lose when Petka remembers the scrolls you had found in the chapel. With those you manage to just barely win, at the cost of all the scrolls you found.');
  scene.text('Artem says "Damn, we might need those to fight the Necromancer but I guess there is nothing we can do about it now. We should search if there is anything of value. I admit this wasn\'t the Necromancer I was expecting to find."');
  return;
  scene.actions([
    { label: 'Search the keep', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You all make your rolls to search the place. You manage to find a secret door that opens up to a set of stairs that go down underground. Julia speaks up. "We should check everything else first and then take a short rest before we head down there." Everyone agrees but you don\'t find anything else of note.');
    scene.text('Zinaida speaks up. "Well, let\'s head down then, there isn\'t anything else to find."');
    scene.text('Just then Feofan interrupts. "That is all for tonight, we will leave it here." You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
  ]);
  scene.build();
}

function enterNecromancerKeep2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('As you enter you look around at the large chamber. It seems much of the inside of the keep has collapsed, which was not apparent from the outside. The only part of the keep that looks fully intact is a raised platform with a throne sitting on it.');
  scene.text('Artem says. "We should search if there is anything of value. I admit this wasn\'t the Necromancer I was expecting to find."');
  scene.text('You all make your rolls to search the place. You manage to find a secret door that opens up to a set of stairs that go down underground. Julia speaks up. "We should check everything else first and then take a short rest before we head down there." Everyone agrees but you don\'t find anything else of note.');
  scene.text('Zinaida speaks up. "Well, let\'s head down then, there isn\'t anything else to find."');
  scene.text('Just then Feofan interrupts. "That is all for tonight, we will leave it here." You hear a disappointing sigh go through the room as everybody stops and closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
  qspCall(s, 'nerd_game_night', 'set_end_acts');
  return;
  scene.build();
}

function enterNecromancerFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('Julia is the first to speak up. "We should head down into the crypt and make sure there is no other evil here." Feofan describes you heading down into the secret crypt only to find a mausoleum of the family that once ruled here. "Other than their graves there seems to be nothing more of interest." Feofan explains before adding. "The mansion and keep are somewhat of a letdown, empty and fallen into ruin, but you have defeated the Death Knight that ruled here. The Death Knight that you destroyed last session was the last heir of the castle lords, it would seem."');
  scene.text('Gerasim asks. "What do we know about this family?"');
  scene.text('Feofan smiles at that. "Ok everyone give me a History or Nobles Lore check."');
  scene.actions([
    { label: 'Roll your dice', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/rollingdice.jpg');
    scene.text('Everyone rolls but you come up with a natural twenty on the die, which is a critical success. "I rolled a natural 20." You tell Feofan.');
    scene.text('Everyone gets very excited knowing you are about to find out pretty much everything important about this place. Several cheer at your roll and give you praise before everyone settles down to listen to Feofan explain. "You remember that the local lords, a couple of centuries ago, had a court magician. That is unusual because the local lords were not really rich or important enough for such a luxury. The peasants did NOT like that court magician, and you remember reading a passage in the temple annals. The local cleric back then was worried about rumors that the court magician was really after something hidden down beneath the old keep." Feofan becomes somber: "You know what to look for. It should be easier to find now that the keep is a ruin. The court wizard needed quite a while to find it, according to the temple annals. \'Follow the Black Toad.\'"');
    scene.actions([
      { label: 'Search the mausoleum', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'city_coffee_hole') {
      scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
      scene.text('"I doubt it will be as fun as following the White Rabbit."');
      scene.text('You all turn and see Anushka watching you with a bemused smile on her face.');
      scene.text('"Oh hey, Nush," Feofan smiles. "You\'ve read Alice in Wonderland?"');
      scene.actions([
        { label: 'Wait to hear what Anushka says', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
    scene.text('Anushka nods slightly. "Yeah, when I was a kid. Gerasim and I used to read together actually." Everyone looks at Gerasim who seems unfazed. It seems this is the first anyone has heard they hung out as kids.');
    scene.text('Feofan doesn\'t seem to mind. "What other books have you read?" He asks her.');
    scene.text('Anushka just shakes her head slightly at the question. "Lots. Anyway, you know why I\'m here," she says and indicates to the clock on the wall.');
    scene.text('Just about everyone orders something and Anushka returns a few minutes later and gives everyone their order, "Well, have fun nerds. Just remember to clean up after yourselves." then heads back to the counter.');
    scene.actions([
      { label: 'Back to the game', handler: (st: GameState) => {
    scene.img('images/locations/city/island/coffe_hole/nerd_game_night.jpg');
    scene.text('You all search the mausoleum for a black toad ...and find it: a small carving on what appears to be the oldest grave here. With a routine roll your thief finds and disarms the trap. Petka\'s wizard finds a ward which he uses a counterspell on to remove it. With those removed you find yet another secret door with a very old rough stone staircase, and then you start to climb down.');
    scene.text('Further and further DOWN... You pass by a level of graves, like those of the original workers and servants from long ago, hewn into the walls. Empty, all of them. Zinaida nods: "Right. That is where the undead in the woods have come from. The ancestors of the last castle lord." The party proceeds further down.');
    scene.text('Gerasim frowns: "I check my torch to see whether it burns well. I do not want us to suffocate from lack of oxygen."');
    scene.text('Feofan nods: "Noted. The torch flame is normal and shows no sign of either a strong draft or lack of oxygen."');
    scene.actions([
      { label: 'Keep going down', goto: ['nerd_game_night1', 'necromancer_cave'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
      scene.text('You all search the mausoleum for a black toad ...and find it: a small carving on what appears to be the oldest grave here. With a routine roll your thief finds and disarms the trap. Petka\'s wizard finds a ward which he uses a counterspell on to remove it. With those removed you find yet another secret door with a very old rough stone staircase, and then you start to climb down.');
      scene.text('Further and further DOWN... You pass by a level of graves, like those of the original workers and servants from long ago, hewn into the walls. Empty, all of them. Zinaida nods: "Right. That is where the undead in the woods have come from. The ancestors of the last castle lord." The party proceeds further down.');
      scene.text('Gerasim frowns: "I check my torch to see whether it burns well. I do not want us to suffocate from lack of oxygen."');
      scene.text('Feofan nods: "Noted. The torch flame is normal and shows no sign of either a strong draft or lack of oxygen."');
      scene.actions([
        { label: 'Keep going down', goto: ['nerd_game_night1', 'necromancer_cave'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNecromancerCave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
  scene.text('The party reaches a third level of old graves below ground, with long stairs downward between them. Zinaida counts on her fingers: "We are some eighty meters down right now by my estimate, below the crypt which was at least five meters down already."');
  scene.text('Artem frowns. "It doesn\'t matter, we only have one way to go, so let\'s keep going down."');
  scene.text('Feofan tells you: "You go down another flight of rough stone stairs, but this one opens up into a large natural cave, illuminated by some greenish light from cave mushrooms. The cave is long, with a low ceiling: fifty meters wide at the widest part, one hundred and twenty meters long at the longest point, some ten meters high. Probably formed by a natural cistern of a subterranean river that has dried up since then. The staircase ends near the southeastern end of the cave, and in the north end you can see a dais where a man-like creature is standing, chanting from a huge old tome."');
  scene.actions([
    { label: 'The Necromancer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/necromancer.jpg');
    scene.text('Feofan keeps talking: "The necromancer hears you and turns around to face you. He stares at Julia\'s cleric as he says YOU?! It cannot be YOU! My master KILLED you! I have seen it! How did you come back from the void?!" Everyone including Julia seems shocked by this.');
    scene.text('Everyone but Feofan looks right at her and she shrugs. "I don\'t know, it must be something Feofan has tied to my character\'s past."');
    scene.text('Artem shrugs. "We will have to talk about this later."');
    scene.text('Before he can say more Feofan smacks the table. "Roll Initiative!" Everyone starts rolling dice as the Necromancer starts casting spells, summoning things of shadow to fight for him and raising even more dead. Artem, Zinaida, and Gerasim try to fight their way past the creatures while Petka\'s wizard casts spells and Julia starts turning the undead as best she can. You try your best to join in and take your attacks of opportunity when you can.');
    scene.text('By the end, Petka\'s wizard and Zinaida\'s fighter are down but not dead, by the time you finally defeat the Necromancer.');
    scene.actions([
      { label: 'Search the cave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/library/events/nerd_game/playing.jpg');
    scene.text('You first help your friends get healed up enough, then you start to search the cave. You find a fair bit of gold and a number of magic items, though most are evil and you dare not use them. After a quick discussion it is decided to leave the cave. You travel back to the chapel where you make camp in its safety once more. In the morning with more healing you are much better off and start on the long journey back to the town, which for now is starting to feel like home.');
    scene.text('It is here that Feofan says. "That is all for tonight, we will leave it here." This time everyone expected it, and since this is the end of the adventure no one seems overly upset at stopping for once, as everyone closes their handbooks. The group is still buzzing and you chat for some time about the twists and turns you\'ve encountered so far.');
    qspCall(s, 'nerd_game_night', 'set_end_acts');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mansion_adventure_start':
      enterMansionAdventureStart(s, scene);
      break;
    case 'mansion_entrance':
      enterMansionEntrance(s, scene);
      break;
    case 'mansion_interior1':
      enterMansionInterior1(s, scene);
      break;
    case 'mansion_interior2':
      enterMansionInterior2(s, scene);
      break;
    case 'mansion_interior3':
      enterMansionInterior3(s, scene);
      break;
    case 'mansion_interior4':
      enterMansionInterior4(s, scene);
      break;
    case 'succubus_meeting':
      enterSuccubusMeeting(s, scene);
      break;
    case 'succubus_fight':
      enterSuccubusFight(s, scene);
      break;
    case 'succubus_fight1':
      enterSuccubusFight1(s, scene);
      break;
    case 'cursed_village1':
      enterCursedVillage1(s, scene);
      break;
    case 'cursed_village1a':
      enterCursedVillage1a(s, scene);
      break;
    case 'cursed_village2':
      enterCursedVillage2(s, scene);
      break;
    case 'end_of_adventure1':
      enterEndOfAdventure1(s, scene);
      break;
    case 'necromancer_adventure_start':
      enterNecromancerAdventureStart(s, scene);
      break;
    case 'necromancer_chapel_feast':
      enterNecromancerChapelFeast(s, scene);
      break;
    case 'necromancer_stronghold_gatehouse':
      enterNecromancerStrongholdGatehouse(s, scene);
      break;
    case 'necromancer_keep1':
      enterNecromancerKeep1(s, scene);
      break;
    case 'necromancer_keep2':
      enterNecromancerKeep2(s, scene);
      break;
    case 'necromancer_fight':
      enterNecromancerFight(s, scene);
      break;
    case 'necromancer_cave':
      enterNecromancerCave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nerd_game_night1: LocationDef = {
  name: 'nerd_game_night1',
  title: 'Feofan weaves a tale of how your group travel to the locatio',
  region: 'other',
  enter: enter,
};
