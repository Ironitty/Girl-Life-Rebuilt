import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).SStip ?? 0))) {
    scene.img('images/characters/city/stas/sex/stas.jpg');
    scene.text('You enter your apartment and immediately the two of you start kissing. He pulls down your top to expose your breasts, beginning to fondle them as the two of you continue to kiss, and slowly pulls you into the bedroom.');
    qspCall(s, 'boyStat', 'A50');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go into the bedroom', handler: (st: GameState) => {
    scene.img('images/characters/city/stas/sex/pov.jpg');
    scene.text('On the way to the bedroom, he manages to take off most of your clothes. He pushes you down on the bed and begins to undress himself while he keeps kissing you.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    scene.img('images/characters/city/stas/sex/sex.jpg');
    scene.text('During the kissing, he manages to get all your clothes off, as well as his own. He pushes your legs up till your knees are pulled up against your chest. He rubs the tip of his dick against your pussy, which is already wet with desire. You moan and try to lift yourself up to take him inside of you, but he keeps teasing you by just rubbing the tip against your pussy.');
    qspCall(s, 'shortgs', 'undress');
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    // TODO-QSP: dynamic text: You feel like you almost can't take the teasing anymore when he fully pushes him...
    scene.text(`You feel like you almost can't take the teasing anymore when he fully pushes himself inside of you, his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick filling your pussy up. He gently fucks you, slowly working himself deeper into you while he continues to kiss you and kneed your breasts. You moan in deep pleasure as the two of you make love.`);
    qspCall(s, 'dinsex', 'vaginal_sex', 15, 'sub');
    (s as any).orgasm_or = 'yes';
    (s as any).orgasm_txt = '' + ((s as any).boydesc ?? 0) + ' groans, and you feel a jet of sperm spurt inside of your body, followed by several more.';
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cuminsidereact', '', ((s as any).boydesc ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Breathe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/pc/body/cum/creampie/cumpussy12.jpg');
    // TODO-QSP: dynamic text: Stas rolls off you, and you roll onto your side to rest your head on his chest. ...
    scene.text(`Stas rolls off you, and you roll onto your side to rest your head on his chest. You can feel his sperm leaking out of your pussy. He gives you a one-armed hug while his other hand strokes your hair, and he looks deep into your eyes with love in his eyes. Stas says apologetically, "I'm sorry, I came inside of you, couldn't resist." Then he rolls out of bed, getting up and starting to get dressed. "Well, I gotta go ${((s as any).pcs_nickname || '')}. I'll see you later, ok." With that, he gathers the rest of his stuff and heads out. You follow him to the door to see him out.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Close the door', goto: ['korr', ''] },
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

export const StasSex: LocationDef = {
  name: 'StasSex',
  title: 'You enter your apartment and immediately the two of you star',
  region: 'other',
  description: ['You enter your apartment and immediately the two of you start kissing. He pulls down your top to expose your breasts, beginning to fondle them as the two of you continue to kiss, and slowly pulls you into the bedroom.'],
  enter: enter,
};
