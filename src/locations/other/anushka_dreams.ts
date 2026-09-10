import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Dream</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
  scene.text('As the two of you sit on her bed and talk about a variety of topics, she suddenly stops, her eyes widen and you can tell she just remembered something she thought was important. She grabs your thigh with her hand. "Oh my god, I totally forgot I hadn\'t told you about this dream I had the other night."');
  scene.actions([
    { label: 'Ask to hear about the dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('A little surprised by her reaction, it makes you curious. "What was the dream about?"');
    scene.text('She shrugs a bit. "It was weird, I have been having a lot of weird dreams lately." Then she pauses a moment as if to consider why she might be having a lot of weird dreams.');
    if (((s as any).anushkaQW ?? 0)?.['dreams'] === 0) {
      scene.actions([
        { label: 'Listen to her dream', goto: ['anushka_dreams', 'dream1'] },
      ]);
    } else {
      if (((s as any).anushkaQW ?? 0)?.['dreams'] === 2) {
        scene.actions([
          { label: 'Listen to her third dream', goto: ['anushka_dreams', 'dream3'] },
        ]);
      }
      scene.actions([
        { label: 'Listen to her next dream', goto: ['anushka_dreams', 'dream2'] },
      ]);
    }
    scene.actions([
      { label: 'Ignore her dream', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Dream</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/bedroomtalk.jpg');
    scene.text('Even though she seems kinda excited about her dream, you really don\'t care and have no real desire to know what other people dream about. "Oh, yeah I get weird dreams sometimes too." Then you change the subject to something you saw online, she either wasn\'t that interested in talking about her dream or she gets that you have no interest and doesn\'t mention it again.');
    if (((s as any).region ?? 0) === 'pav') {
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom', 'anushroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep talking', goto: ['anushkachat_city', 'chat'] },
        { label: 'Stop talking', goto: ['anush_bedroom_city', 'anushroom'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const anushka_dreams: LocationDef = {
  name: 'anushka_dreams',
  title: 'Anushka\'s Dream',
  region: 'other',
  description: ['As the two of you sit on her bed and talk about a variety of topics, she suddenly stops, her eyes widen and you can tell she just remembered something she thought was important. She grabs your thigh with her hand. "Oh my god, I totally forgot I hadn\'t told you about this dream I had the other night."'],
  enter: enter,
};
