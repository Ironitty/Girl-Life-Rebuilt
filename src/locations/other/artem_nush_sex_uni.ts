import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A144', 'a');
  (s as any).artemQW['nushart_oral'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('He just nods and you talk about how things will go before you hear a knock at the door. Artem gets up and answers it, and you see Anushka standing in the hallway. He stands aside to let her in, slapping her hard on the ass as he does, causing her to jump and yelp slightly in surprise. "Someone\'s feeling feisty today I see," she says aa she looks back at him, then looks at you with a grin as she moves over to sit next to you. Artem closes the door and locks it.');
  if (((s as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
    (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    scene.text('As he turns around, he nods and gives her a confident smile. "Why wouldn\'t I be? I owned your ass and we all know it. Now the bad girl is back for more nerd dick."');
    scene.text('She looks up at him and bites her lower lip. "You think so?" While her tone has a bit of a bite to it, you don\'t buy it. Artem is right and you can see by the look on his face that he knows it too.');
    scene.text('He grins. "I know so. Deep down, we both know you like being treated like a dirty slut and the thought of some nerd you used to bully treating you like his little cum slut has you all wet. You can\'t wait to be humiliated by a nerd while he fucks you. Tell me I\'m wrong."');
    scene.text('She\'s speechless; the shock of just how different he\'s acting seems to be too much for her to process. When she doesn\'t reply, he confidently walks over, leans forward and runs his hand up her skirt. You see her stiffen and gasp slightly when his hand disappears up her skirt. "Just what I suspected," he grins. "You\'re soaking wet already." When he pulls his hand out of her skirt, he pulls her panties off and tosses them aside. Even you\'re a little surprised by how dominant he\'s being, but you figure this is good for him.');
    scene.text('You watch as he grabs her skirt and unbuttons it before yanking it off. He then pulls off her shirt and then her bra. She never once complains or acts like she\'s not into it. In fact, she mostly bites her lower lip and occasionally giggles. He then forces her to kneel on the floor, completely exposed and naked in front of him as he starts to unbutton his pants. "Open your mouth," he orders.');
    qspCall(s, 'arousal', 'voyeur', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', goto: ['artem_nush_sex_uni', 'anushka_3some1_dom_bj'] },
    ]);
  } else {
    scene.text('As he turns around, he nods and gives her a confident smile. "I knew you\'d be back. When I\'m done with you, you\'ll know your ass was completely owned by a nerd. That a nerd made you his bitch and fucked you for his pleasure."');
    scene.text('She looks up at him and bites her lower lip. "I… Almost believe you…"');
    scene.text('He confidently walks over and grabs her by the chin, then lowers his face down so they\'re looking eye to eye. "Seeing is believing. I figured girls like you get off on being treated like dirty little sluts, so I\'m going to give you exactly what you want."');
    scene.text('He lets go of her and sits down between the two of you before he gives you a look and smiles. You give him a proud smile. "Now both of you strip and make out while I watch," he orders.');
    scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
    qspCall(s, 'arousal', 'kiss', 2, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 1) {
      scene.text('As he turns around, he nods and gives her a confident smile. "I promised myself that if I ever got another chance to fuck you, that I was going to fuck your ass raw."');
      scene.text('She looks up at him and bites her lower lip. "That\'s a bold claim."');
      scene.text('He confidently walks over and forces himself between the two of you. "It\'ll be a fact soon enough. Now I want both of you to strip and make out while I watch."');
      scene.text('Anushka doesn\'t say anything as she starts stripping down to her underwear. You do the same and the two of you are soon making out while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
      qspCall(s, 'arousal', 'kiss', 2, 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
      ]);
    } else {
      scene.text('As he turns around, he nods and gives her a confident smile. "That\'s right, and I\'m not going to hold back on you this time."');
      scene.text('She looks around the room and you can see her smirking. "Promises, promises…"');
      scene.text('He takes a deep breath before he walks over and sits between the two of you. "I think the two of you should strip and makeout while I watch."');
      scene.text('Anushka grins at his comment. "Well look at you, all bossy and confident. I like it." She starts stripping down to her underwear and you do the same. The two of you are soon making out as you strip while Artem watches. After a few minutes of this, you turn and kiss Artem as Anushka pulls down her panties and bends over, inviting one of you to eat her out. Artem grabs you by the hair and forces your face into Anushka\'s crotch from behind.');
      qspCall(s, 'arousal', 'kiss', 2);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
      ]);
    }
    scene.actions([
      { label: 'Eat her out', goto: ['artem_nush_sex_uni', 'anushka_3some1_oral2'] },
    ]);
  }
  scene.build();
}

export const artem_nush_sex_uni: LocationDef = {
  name: 'artem_nush_sex_uni',
  title: 'He just nods and you talk about how things will go before yo',
  region: 'other',
  description: ['He just nods and you talk about how things will go before you hear a knock at the door. Artem gets up and answers it, and you see Anushka standing in the hallway. He stands aside to let her in, slapping her hard on the ass as he does, causing her to jump and yelp slightly in surprise. "Someone\'s feeling feisty today I see," she says aa she looks back at him, then looks at you with a grin as she moves over to sit next to you. Artem closes the door and locks it.'],
  enter: enter,
};
