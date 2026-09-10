import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: !condom check, to skip just use 2
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    qspCall(s, 'dina', 'prezik');
    (s as any).protect = 1;
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
      (s as any).noprotect = 1;
      scene.text('You give the guy a sabotaged condom and he puts it on in silence.');
    } else {
      (s as any).sexcontra = 3;
      scene.text('You give the guy a condom and he puts it on in silence.');
    }
  }
  // TODO-QSP: !need $boy, dick and silavag
  (s as any).frost = 0;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('Menstrual blood slowly flows from your vagina, somewhat ruining the mood.');
  }
  if (((s as any).pcs_horny ?? 0) >= 80) {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (s as any).pcs_horny = 0;
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
      // TODO-QSP: dynamic text: You bite your <<$pc_desc['lips']>> lips in pain and tears flow down your face, <...
      scene.text(`You bite your ${((s as any).pc_desc ?? 0)?.['lips']} lips in pain and tears flow down your face, ${((s as any).boydesc ?? 0)} has torn your hymen with his ${((s as any).dick ?? 0)} centimeter dick. Your bloody pussy a reminder of your lost virginity.`);
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
      scene.text('As enjoyable as the sex may be, you are too worried about your bleeding to fully relax and can not orgasm.');
      (s as any).prinat = ((s as any).pcs_vag ?? 0) + (((s as any).pcs_horny ?? 0) / 10);
      if (((s as any).dick ?? 0) >= ((s as any).prinat ?? 0) * 2) {
        (s as any).orgazm = 0;
      } else {
        if ((!((s as any).silavag ?? 0))) {
          if (((s as any).pcs_horny ?? 0) >= 100) {
            (s as any).orgazm = 2;
          }
          if (((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).pcs_horny ?? 0) < 100) {
            (s as any).orgazm = 1;
          }
          if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_horny ?? 0) < 90) {
            (s as any).orgazm = 0;
          }
        } else {
          if (((s as any).pcs_horny ?? 0) >= 90) {
            (s as any).orgazm = 2;
          }
          if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_horny ?? 0) < 90) {
            (s as any).orgazm = 1;
          }
          if (((s as any).silavag ?? 0) === 2) {
            (s as any).orgazm = 2;
          }
          if (((s as any).dick ?? 0) <= ((s as any).prinat ?? 0)  &&  ((s as any).dick ?? 0) >= ((s as any).pcs_vag ?? 0)) {
            (s as any).orgazm = 2;
          } else {
            if ((!((s as any).silavag ?? 0))) {
              if (((s as any).pcs_horny ?? 0) >= 100) {
                (s as any).orgazm = 2;
              }
              if (((s as any).pcs_horny ?? 0) < 100) {
                (s as any).orgazm = 3;
              }
            } else {
              if (((s as any).pcs_horny ?? 0) >= 90) {
                (s as any).orgazm = 2;
              }
              if (((s as any).pcs_horny ?? 0) < 90) {
                (s as any).orgazm = 3;
              }
              if (((s as any).silavag ?? 0) === 2) {
                (s as any).orgazm = 2;
              }
            }
          }
          if ((!((s as any).orgazm ?? 0))) {
            if (((s as any).vgape ?? 0) < 2) {
              (s as any).vgape = 2;
            }
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
            qspCall(s, 'mood', 'lower', 'small');
            // TODO-QSP: dynamic text: You bite your lip in pain <<$boydesc>>s <<dick>> centimeter cock is too big and ...
            scene.text(`You bite your lip in pain ${((s as any).boydesc ?? 0)}s ${((s as any).dick ?? 0)} centimeter cock is too big and he has left you insides battered and bruised. You are moaning in pain and not pleasure. Your poor pussy.`);
          } else {
            qspCall(s, 'mood', 'raise', 'tiny');
            // TODO-QSP: dynamic text: You are startled by how much your pussy has been stretching by <<$boydesc>>. It ...
            scene.text(`You are startled by how much your pussy has been stretching by ${((s as any).boydesc ?? 0)}. It felt good when his ${((s as any).dick ?? 0)} centimeter dick was fucking your pussy. A pleasant warmth spread across your abdomen, but the strain of accommodating him denies you your release.`);
            if (((s as any).orgazm ?? 0) === 2) {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'tiny');
              (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
              (s as any).vaginalOrgasm = ((s as any).vaginalOrgasm ?? 0) + (1);
              // TODO-QSP: dynamic text: Right from the pleasant feeling of your pussy stretching to fit his dick, it has...
              scene.text(`Right from the pleasant feeling of your pussy stretching to fit his dick, it has felt so good having his ${((s as any).dick ?? 0)} centimeter dick fuck your pussy. The warmth that spread from your lower abdomen, has enveloped your entire body with hot, orgasmic waves. You scream with pleasure.`);
            } else {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              qspCall(s, 'mood', 'raise', 'tiny');
              // TODO-QSP: dynamic text: You felt from the moment his penis entered your pussy, that his <<dick>>cm dick ...
              scene.text(`You felt from the moment his penis entered your pussy, that his ${((s as any).dick ?? 0)}cm dick is just too small for your pussy and his best efforts are not doing it for you. There is some please to be gained, but you never reach the heights of an orgasm.`);
            }
          }
          if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)) {
            qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
          }
          (s as any).stat['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
          if (((s as any).protect ?? 0) < 2) {
            if ((Math.floor(Math.random() * 2) + 0) === 0  ||  ((s as any).pose ?? 0) === 3) {
              qspCall(s, 'cum_manage', '');
              // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm fill your pussy.
              scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm fill your pussy.`);
              if ((!((s as any).protect ?? 0))) {
                qspCall(s, 'mood', 'lower', 'medium');
                qspCall(s, 'cuminsidereact', '');
              }
            } else {
              if ((!((s as any).pose ?? 0))) {
                (s as any).spafinloc = 14;
                qspCall(s, 'cum_manage', '');
                // TODO-QSP: dynamic text: <<$boydesc>> groans and after pulling out his dick, he came on your stomach.
                scene.text(`${((s as any).boydesc ?? 0)} groans and after pulling out his dick, he came on your stomach.`);
              } else {
                (s as any).spafinloc = 4;
                qspCall(s, 'cum_manage', '');
                // TODO-QSP: dynamic text: <<$boydesc>> groans and after pulling out his dick, he came on your ass.
                scene.text(`${((s as any).boydesc ?? 0)} groans and after pulling out his dick, he came on your ass.`);
              }
            }
          } else {
            (s as any).protect = 0;
            // TODO-QSP: dynamic text: <<$boydesc>> groans and you realize that he came in the condom.
            scene.text(`${((s as any).boydesc ?? 0)} groans and you realize that he came in the condom.`);
            (s as any).prezrand = Math.floor(Math.random() * 101) + 0;
            if (((s as any).Sexcontra ?? 0) === 4) {
              // TODO-QSP: dynamic text: Pulling out of you and looking at his dick, <<$boydesc>> said "Hmm, condom burst...
              scene.text(`Pulling out of you and looking at his dick, ${((s as any).boydesc ?? 0)} said "Hmm, condom burst"`);
              (s as any).Sexcontra = 0;
            }
          }
          (s as any).protect = 0;
          (s as any).sexcontra = 0;
          (s as any).pose = 0;
          qspCall(s, 'dinSex', 'std_trigger');
        }
      }
    }
  }
  scene.build();
}

export const dinsexFX: LocationDef = {
  name: 'dinsexFX',
  title: 'You give the guy a sabotaged condom and he puts it on in sil',
  region: 'other',
  description: ['You give the guy a sabotaged condom and he puts it on in silence.'],
  enter: enter,
};
