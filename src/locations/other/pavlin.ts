import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  scene.text('You stand up, put your clothes back on and step out of the room.');
  // TODO-QSP: dynamic text: You go to the bar and see <<$npc_nickname['A217']>> sitting in a booth in the co...
  scene.text(`You go to the bar and see ${((s as any).npc_nickname ?? 0)?.['A217']} sitting in a booth in the corner.`);
  if (((s as any).pavprosmmf ?? 0) === 1) {
    // TODO-QSP: dynamic text: "They sure left with a big smile on their faces. Good job, <<$pcs_nickname>>," h...
    scene.text(`"They sure left with a big smile on their faces. Good job, ${((s as any).pcs_nickname ?? 0)}," he says as he hands you ${qspFunc(s, 'money', 'string_profit', 1200)}.`);
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
    ]);
  } else {
    if (((s as any).pavproslate ?? 0) === 1) {
      scene.text('"You\'re late," he frowns as he looks at his watch.');
      scene.text('"I-I just needed to clean up," you stammer, trying to placate him.');
      scene.text('He looks you over, noticing your messy hair and your lack of makeup.');
      // TODO-QSP: dynamic text: "Don't make a habit of it," he says as he hands you <<$func('money', 'string_pro...
      scene.text(`"Don't make a habit of it," he says as he hands you ${qspFunc(s, 'money', 'string_profit', 900)}.`);
      scene.actions([
        { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
      ]);
    } else {
      scene.text('He looks you over, noticing your messy hair and your smeared makeup.');
      // TODO-QSP: dynamic text: "You look like someone used your face to have a lot of fun," he says with a smir...
      scene.text(`"You look like someone used your face to have a lot of fun," he says with a smirk as he hands you ${qspFunc(s, 'money', 'string_profit', 900)}.`);
      scene.actions([
        { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
      ]);
    }
    if (((s as any).custangry ?? 0) === 1  &&  ((s as any).custleft ?? 0) === 0) {
      scene.actions([
        { label: 'Go to <<$npc_nickname[\'A217\']>>', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 6) + 0 === 0) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. H-He raped me. He even forced himself into my ass."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> stands up and leans over you. He looks furious. "That ...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} stands up and leans over you. He looks furious. "That was an important customer. He came here to complain about your behaviour. You had better learn to please your customers or there's going to be hell to pay!"`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you meekly hang your head. "I...
      scene.text(`Not wanting to suffer through another manhandling, you meekly hang your head. "I-I'm sorry, ${((s as any).npc_nickname ?? 0)?.['A217']}... I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight!"');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. H-He raped me. He even forced himself into my ass."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> looks furious as he stands up and marches out the door...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "That bastard didn\'t pay to fuck your ass. If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      qspCall(s, 'pavlin', 'getpaidpros');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).custangry ?? 0) === 0  &&  ((s as any).custleft ?? 0) === 1) {
        scene.actions([
          { label: 'Go to <<$npc_nickname[\'A217\']>>', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 6) + 0 === 0) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He threw me into the wall. So I started screaming and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> stands up and leans over you. He looks furious. "That ...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} stands up and leans over you. He looks furious. "That was an important customer. He came here to demand his money back. You had better learn to please your customers or there's going to be hell to pay." He hisses at you.`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you hang your head meekly and...
      scene.text(`Not wanting to suffer through another manhandling, you hang your head meekly and stammer: "I-I'm sorry ${((s as any).npc_nickname ?? 0)?.['A217']}. I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight."');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He threw me into the wall. So I started screaming and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> looks furious as he stands up and marches out the door...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      qspCall(s, 'pavlin', 'getpaidpros');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: He hands you <<$func('money', 'string_profit', 750)>>.
        scene.text(`He hands you ${qspFunc(s, 'money', 'string_profit', 750)}.`);
        scene.actions([
          { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
        ]);
      }
      scene.actions([
        { label: 'Go to <<$npc_nickname[\'A217\']>>', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 6) + 0 === 0) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. So I fought back and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> stands up and leans over you. He looks furious. "That ...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} stands up and leans over you. He looks furious. "That was an important customer. He came here to demand his money back. You had better learn to please your customers or there's going to be hell to pay!"`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you meekly hang your head. "I...
      scene.text(`Not wanting to suffer through another manhandling, you meekly hang your head. "I-I'm sorry, ${((s as any).npc_nickname ?? 0)?.['A217']}... I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight!"');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. So I fought back and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> looks furious as he stands up and marches out the door...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      qspCall(s, 'pavlin', 'getpaidpros');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const pavlin: LocationDef = {
  name: 'pavlin',
  title: 'You stand up, put your clothes back on and step out of the r',
  region: 'other',
  description: ['You stand up, put your clothes back on and step out of the room.'],
  enter: enter,
};
