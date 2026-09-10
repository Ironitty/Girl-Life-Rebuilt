import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0) {
    scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek4'] }]);
  }
  (s as any).motherQW['bathroom_dildos'] = ((s as any).vanrPar_suction_dildo ?? 0);
  if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 0) {
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  } else {
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
    scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek2'] }]);
    if (((s as any).motherQW ?? 0)?.['dildo_caught'] >= 2) {
      (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek3'] }]);
    }
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. It sounds like your mother. You run to the door just as it opens and you see her there.');
    // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>! What happe-"
    scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}! What happe-"`);
    if (((s as any).vanrPar_suction_dildo ?? 0) === 1) {
      scene.text('She cuts you off by holding up a dildo in front of your face.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>. <b>What is this doing in the bathroom</b>?"
      scene.text(`"${((s as any).pcs_firstname ?? 0)}. <b>What is this doing in the bathroom</b>?"`);
      if (((s as any).pcs_inhib ?? 0) > 30) {
        scene.actions([
          { label: '"It\'s my dildo"', handler: (st: GameState) => {
    (s as any).dildo_ownership = 1;
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s my dildo?" you nonchalantly reply.');
    scene.text('"What do you think you\'re doing with something like this?! It\'s improper for a young lady your age! Not to mention if Kolka or your father saw this stuck inside the bathtub! You\'ll ruin your brother\'s innocence! Vladimir would have a heart attack! And you\'ll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.');
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
        ]);
      }
      scene.actions([
        { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! I don\'t know where it came from!" It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it, but as long as you deny it maybe you can get away with it? "Maybe it\'s An-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
        { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! It must be Anya\'s!" you protest, trying to throw your sister under the bus. "She-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
      ]);
    } else {
      scene.text('She cuts you off by holding up a pair of dildos in front of your face.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>. <b>What are these doing in the bathroom?</b>"
      scene.text(`"${((s as any).pcs_firstname ?? 0)}. <b>What are these doing in the bathroom?</b>"`);
      if (((s as any).pcs_inhib ?? 0) > 30) {
        scene.actions([
          { label: '"They\'re my dildos"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re my dildos?" you nonchalantly reply, not even bothering to hide it.');
    scene.text('"What do you think you\'re doing with things like these?! They\'re improper for a young lady your age! Not to mention if Kolka or your father saw these! Stuck all over the bathtub and the walls! You\'ll ruin your brother\'s innocence! Vladimir would have a heart attack! And you\'ll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.');
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
          { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re not mine! I don\'t know where they came from!" It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it, but as long as you deny it maybe you can get away with it? "Maybe they\'re An-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know they're...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know they're yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
          { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re not mine! They must be Anya\'s!" you protest, trying to throw your sister under the bus. "She-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know they're...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know they're yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const mother_sextalk: LocationDef = {
  name: 'mother_sextalk',
  title: 'You\'re walking down the hall when you suddenly hear a shriek',
  region: 'other',
  enter: enter,
};
