// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).jeff ?? 0)?.['status'] === 2) {
    scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_2'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_3'] }]);
    if (((s as any).jeff ?? 0)?.['status'] === 5) {
      scene.actions([{ label: 'Continue', goto: ['model_jeff1', 'jeff_modelling'] }]);
    }
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/0.jpg');
    scene.text('Walking around the studio, you suddenly stop when you see a naked girl staring at you.');
    scene.text('<i>Is she a model here? Why is she staring at me like that…?</i>');
    scene.text('Seeing you notice her, she waves you over.');
    scene.actions([
      { label: 'Walk over', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/1.jpg');
    scene.text('"Hi! Are you the new model here?"');
    scene.text('"Yeah, I-" you start to say.');
    scene.text('"Welcome to our little family!" the girl says, interrupting you and suddenly jumping up and wrapping her arms around your neck.');
    scene.text('You can feel her puffy nipples against your skin and you can tell she\'s really not shy in the least about physical boundaries or personal space.');
    scene.text('"Ah-! Ahm… Thanks…" you say awkwardly when she lets you go. "I was just looking around, getting familiar with the studio."');
    scene.text('"How do you like it? I personally find it very busy… People don\'t want to play with me very often…" she says with a pouty face.');
    scene.actions([
      { label: '"I don\'t actually mind"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/2.jpg');
    scene.text('"I don\'t actually mind the busyness that much."');
    scene.text('"Well why not? Everyone should play more often! Well now, time for introductions! You go first!" she tells you.');
    scene.actions([
      { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/3.jpg');
    // TODO-QSP: dynamic text: "I'm <<$model['firstname']>>."
    scene.text(`"I'm ${((s as any).model ?? 0)?.['firstname']}."`);
    scene.text('"What a cute name!"');
    scene.text('<i>She\'s got quite a bubbly personality doesn\'t she?</i> you think to yourself before you realize she\'s still standing in silence, continuing to smile at you.');
    scene.text('"And your name is…?" you say awkwardly.');
    scene.text('"Oh! You can call me Jeff!" she says.');
    scene.actions([
      { label: '"Jeff…?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/portraits/jeff_m/talking/face.jpg');
    scene.text('"Jeff…?" you ask.');
    scene.text('She nods and smiles. "That\'s what they call me here!"');
    scene.text('"That\'s your real name?"');
    scene.text('"Nope!" She keeps smiling.');
    scene.text('"Ahh, uh… Okay…" you say.');
    scene.text('All of sudden she seems to startle herself and squeaks. "Oh no! I totally forgot, I was supposed to be on set! Gotta run! It was nice meeting you!" you hear Jeff call back as she skips off towards the other side of the studio.');
    scene.text('<i>What a weird girl…</i>');
    (s as any).jeff['status'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
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
  scene.build();
}

export const model_jeff1: LocationDef = {
  name: 'model_jeff1',
  title: 'As you walk past a set, you hear someone yell out from an ar',
  region: 'other',
  enter: enter,
};
