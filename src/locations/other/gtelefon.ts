import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).boyinday = (s as any).boyinday ?? {})[String((s as any).numnpcboy ?? 0)] = ((s as any).daystart ?? 0);
  (s as any).Gcall = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.text('You pick up the phone, "Hello?"');
  if (((s as any).boyvstre ?? 0)?.[String((s as any).numnpcboy ?? 0)] > 0) {
    // TODO-QSP: dynamic text: A male voice on the phone says "Hi <<$pcs_nickname>>! It''s me, <<$nameBoyfrend[...
    scene.text(`A male voice on the phone says "Hi ${((s as any).pcs_nickname ?? '')}! It's me, ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpcboy ?? 0)] ?? '')}. Let's go for a walk somewhere."`);
  } else {
    // TODO-QSP: dynamic text: Through the phone, a male voice says "Hello, I''m looking for <<$pcs_nickname>>?...
    scene.text(`Through the phone, a male voice says "Hello, I'm looking for ${((s as any).pcs_nickname ?? '')}?"`);
    // TODO-QSP: dynamic text: You answer the caller that you are <<$pcs_nickname>>. The stranger sounds deligh...
    scene.text(`You answer the caller that you are ${((s as any).pcs_nickname ?? '')}. The stranger sounds delighted. "Hi! I'm ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpcboy ?? 0)] ?? '')}, we met the other day. Remember? Let's go for a walk."`);
  }
  if ((!((s as any).GvstreBoy ?? 0))) {
    scene.actions([
      { label: 'Meet me in the park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    (st as any).GvstreBoy = 1;
    ((st as any).GvstreBoyAfter = (st as any).GvstreBoyAfter ?? {})[String((st as any).numnpcboy ?? 0)] = 1;
    (st as any).SkverBoy = ((st as any).numnpcboy ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You agree to meet him in the park.');
    scene.actions([
      { label: 'Hang up', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Tell him you have no time today', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    if (((st as any).boyvstre ?? 0)?.[String((st as any).numnpcboy ?? 0)] === 0) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpcboy ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpcboy ?? 0)] ?? 0) - (10);
    }
    if (((st as any).boyvstre ?? 0)?.[String((st as any).numnpcboy ?? 0)] > 0) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpcboy ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpcboy ?? 0)] ?? 0) - (5);
    }
    qspCall(st, 'stat', '');
    scene.text('');
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpcboy ?? 0)] > 20) {
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpcboy]>> sounds upset. "I see. Well, maybe next time then."
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpcboy ?? 0)] ?? '')} sounds upset. "I see. Well, maybe next time then."`);
    } else {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpcboy ?? 0)] = 0;
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpcboy]>> sounds angry. "Whatever, screw you!" he said, and h...
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpcboy ?? 0)] ?? '')} sounds angry. "Whatever, screw you!" he said, and hung up immediately after. You don't think you'll hear from him again.`);
    }
    scene.actions([
      { label: 'Hang up', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const gtelefon: LocationDef = {
  name: 'gtelefon',
  title: 'You pick up the phone, "Hello?"',
  region: 'other',
  description: ['You pick up the phone, "Hello?"'],
  enter: enter,
};
