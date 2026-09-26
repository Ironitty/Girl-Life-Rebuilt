import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).mirrorloc = 'mirror';
  qspCall(s, 'stat', '');
  if (((s as any).mirror_steam ?? 0) === ((s as any).hour ?? 0)  &&  (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'vanr'  ||  ((s as any).loc_arg ?? 0) === 'ybathroom'  ||  ((s as any).loc ?? 0) === 'city_house_res_bathr')) {
    qspGoto(s, 'mirror', 'steam');
  }
  (s as any).makeupLight = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You subtly apply some neutral tones, with a light application of makeup to bring out your natural beauty.';
  (s as any).makeupNatural = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You apply some mildly vibrant tones and colors of makeup to cover your minor imperfections and enhance your best features.';
  (s as any).makeupHeavy = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You apply some deeper, richer shades of makeup, thick enough to cover most imperfections, while drawing attention to your eyes and lips.';
  (s as any).makeupBimbo = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You apply a lot of everything nice and thick, mostly in pink and make yourself look like a bimbo.';
  (s as any).makeupGoth = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You apply a lot of everything nice and thick, mostly in white and make yourself look like a goth.';
  (s as any).makeupSmeared = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/2.jpg"></center>&nbsp;<br>You deliberately smear makeup across your face in a messy, smudged pattern.';
  if (((s as any).newstylemirror ?? 0) === 1) {
    ((s as any).serv = (s as any).serv ?? {})['avatar'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="' + qspFunc(s, '$face_image', '') + '"></center>';
    if (((s as any).cheatVars ?? 0)?.['auto_brush'] === 1  &&  (!((s as any).pcs_hairbsh ?? 0))) {
      qspGoto(s, 'mirror', 'brush');
    }
    if (((s as any).mc_inventory ?? 0)?.['scrunchies'] < 1) {
      (s as any).hscrunchw = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['kirbygrips'] < 1) {
      (s as any).hpingripw = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['scrunchies'] < 2) {
      (s as any).hpigtail = 0;
    }
    if (((s as any).pcs_hairbsh ?? 0) < 1) {
      ((s as any).serv = (s as any).serv ?? {})['hairbrush'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: xgt \u0027mirror\u0027, \u0027brush\u0027 */ return s; }); return false;"><img src="images/system/icons/action/hairbrush.png"></a>';
    } else {
      if (((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv = (s as any).serv ?? {})['ponytail'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/scrunchy.png"></a>';
          ((s as any).serv = (s as any).serv ?? {})['ponytail desc'] = 'As you have a scrunchy, you can arrange your hair into a <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">ponytail</a>. You have <b>' + (((s as any).mc_inventory ?? 0)?.['scrunchies']) + '</b> scrunchies left.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          ((s as any).serv = (s as any).serv ?? {})['bun'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/clips_pins_grips.png"></a>';
          ((s as any).serv = (s as any).serv ?? {})['bun desc'] = 'You have several clips, pins and grips for you hair. Hence, you can <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">updo your hair</a>. You have <b>' + (((s as any).mc_inventory ?? 0)?.['kirbygrips']) + '</b> hair accessories at your disposal.';
        }
        if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
          if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
            ((s as any).serv = (s as any).serv ?? {})['pigtails'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 1; s.hscrunchw = 2; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/hair_ties.png"></a>';
            ((s as any).serv = (s as any).serv ?? {})['pigtails desc'] = 'You can use two hair ties to make yourself some <a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 1; s.hscrunchw = 2; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">pigtails</a>.';
          }
          if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
            ((s as any).serv = (s as any).serv ?? {})['braid'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = 15; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/braiding.png"></a>';
            ((s as any).serv = (s as any).serv ?? {})['braid desc'] = 'You can spend ' + ((s as any).pcs_hairlng ?? 0)/10 + ' minutes <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = 15; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">braiding</a> your hair, just the way your sister taught you.';
          }
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      ((s as any).serv = (s as any).serv ?? {})['ponytail'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/ponytail.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['ponytail desc'] = 'Remove the <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">scrunchie</a> to get rid of the ponytail.';
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      ((s as any).serv = (s as any).serv ?? {})['pigtails'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 0; s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/pigtails.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['pigtails desc'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 0; s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">Remove</a> your scrunchies and let your hair flow free again.';
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      ((s as any).serv = (s as any).serv ?? {})['bun'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/bun.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['bun desc'] = 'Let your hair <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">flow free</a>.';
    }
    if (((s as any).hbraids ?? 0) > 0) {
      ((s as any).serv = (s as any).serv ?? {})['braid'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/braid.png"></a>';
      ((s as any).serv = (s as any).serv ?? {})['braid desc'] = 'Take ' + ((s as any).hbraids ?? 0)*2+((s as any).pcs_hairlng ?? 0)/50 + ' minutes removing your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">braid</a>.';
    }
    ((s as any).serv = (s as any).serv ?? {})['back'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027fin\u0027); return false;"><img src="images/system/icons/action/back.png"></a>';
    if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['lipbalm'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027applyLipbalm\u0027 & act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/lipbalm.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['falselashes'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027applyLashesplain\u0027 & act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/falselashes.png"></a>';
    }
    if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
      ((s as any).serv = (s as any).serv ?? {})['minklashes'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cla */ /* TODO-QSP: act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027applyLashesmink\u0027 & act \u0027View results\u0027:gt \u0027mirror\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/action/minklashes.png"></a>';
    }
    if (((s as any).pcs_makeup ?? 0) === ((s as any).makeup ?? 0)?.['base']  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
      (s as any).serv4 = '\n*clr & cla\n\'<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/pc/activities/routine/1.jpg"></center>\'\n\'You consider for a moment which look you want to go for.\'\n*nl\nact \'Change your mind\': gt \'mirror\', \'start\'\nif pcs_makeup < 2 and mc_inventory[\'cosmetics\'] >= 1:\nact \'Light make-up\':\n*clr & cla\nminut += 3\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 1\npcs_makeup = 2\n\'' + ((s as any).makeupLight ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\nif pcs_makeup < 3 and mc_inventory[\'cosmetics\'] >= 2:\nact \'Vibrant make-up\':\n*clr & cla\nminut += 5\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 2\npcs_makeup = 3\n\'' + ((s as any).makeupNatural ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\nif mc_inventory[\'cosmetics\'] >= 3:\nif pcs_makeup < 4:\nact \'Thick make-up\':\n*clr & cla\nminut += 10\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 3\nvidageday -= 1\npcs_makeup = 4\n\'' + ((s as any).makeupHeavy ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\nif pcs_makeup < 6:\nact \'Bimbo make-up\':\n*clr & cla\nminut += 10\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 3\nvidageday -= 1\npcs_makeup = 6\n\'' + ((s as any).makeupBimbo ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\nif pcs_makeup < 6:\nact \'Goth make-up\':\n*clr & cla\nminut += 10\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 3\nvidageday -= 1\npcs_makeup = 7\n\'' + ((s as any).makeupGoth ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\nact \'Smeared make-up\':\n*clr & cla\nminut += 5\ngs \'exp_gain\', \'makupskl\', rand(1,3)\nmc_inventory[\'cosmetics\'] -= 3\npcs_makeup = 0\n\'' + ((s as any).makeupSmeared ?? 0) + '\'\nact \'Continue\': gt \'mirror\', \'start\'\nend\nend\n';
      ((s as any).serv = (s as any).serv ?? {})['makeup'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $serv4 */ return s; }); return false;"><img src="images/system/icons/action/makeup.png"></a>';
    }
    scene.text(`<center><table align=center cellspacing=0 cellpadding=0><tr><td align=center colspan=15>${(((s as any).serv ?? 0)?.['avatar'] ?? '')}</td></tr><tr><td colspan=15><hr></td></tr><tr><td align=center>${(((s as any).serv ?? 0)?.['falselashes'] ?? '')}</td>  <td align=center>${(((s as any).serv ?? 0)?.['minklashes'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['lipbalm'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['makeup'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['ponytail'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['bun'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['pigtails'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['braid'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['hairbrush'] ?? '')}</td><td align=center>${(((s as any).serv ?? 0)?.['back'] ?? '')}</td></tr></table></center>`);
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9) {
        scene.text('In the mirror, you see a strange woman\'s face looking back at you that exactly copies all your actions. You can hardly accept the idea that this is now you.');
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29) {
          scene.text('In the mirror you see a woman\'s face to which you have become accustomed to. But sometimes, you get the feel that this is not your face.');
        }
      }
    }
    scene.text(`${((s as any).pcs_apprnc_text ?? '')}`);
    scene.text(`${((s as any).hair ?? '')}`);
    scene.text(`${(((s as any).pc_descFull ?? 0)?.['makeup'] ?? '')}. You have ` + ((((s as any).pcs_eyesize ?? 0) > 1) ? ('' + (((s as any).pc_desc ?? 0)?.['eye size'] ?? '') + ' ') : ('')) + `${(((s as any).pc_desc ?? 0)?.['eye colour'] ?? '')} eyes ${((s as any).pcs_lashes_txt ?? '')}.`);
    if (((s as any).glass ?? 0) > 0) {
      scene.text(`You are wearing ${(((s as any).pc_descWordy ?? 0)?.['vision'] ?? '')}.`);
    }
    scene.text(String((s as any).pcs_teeth_txt ?? ''));
    scene.text(`${(((s as any).pc_descFull ?? 0)?.['skin'] ?? '')}`);
    if (((s as any).curly ?? 0) > 0  &&  (!((s as any).defcurly ?? 0))) {
      ((s as any).serv = (s as any).serv ?? {})['hhair'] = 'Your curly hair will last for another <b>' + ((s as any).curly ?? 0) + '</b> days.';
    }
    if (((s as any).straight ?? 0) > 0  &&  ((s as any).defcurly ?? 0) === 1) {
      ((s as any).serv = (s as any).serv ?? {})['hhair'] = 'Your straightened hair will last for another <b>' + ((s as any).straight ?? 0) + '</b> days.';
    }
    if (((s as any).hbraids ?? 0) > 0) {
      ((s as any).serv = (s as any).serv ?? {})['hbraids'] = 'Your braided hair will last for another <b>' + ((s as any).hbraids ?? 0) + '</b> days.';
    }
    if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
      if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
        ((s as any).serv = (s as any).serv ?? {})['hdye'] = 'Your hair dye is beginning to fade and your roots are showing.';
      }
      if ((!((s as any).dyefade ?? 0))) {
        ((s as any).serv = (s as any).serv ?? {})['hdye'] = 'Your hair dye has faded and looks terrible.';
      }
    }
    if (((s as any).serv ?? 0)?.['hhair'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['hhair'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['hbraids'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['hbraids'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['hdye'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['hdye'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['ponytail desc'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['ponytail desc'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['bun desc'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['bun desc'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['pigtails desc'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['pigtails desc'] ?? '')}`);
    }
    if (((s as any).serv ?? 0)?.['braid desc'] !== '') {
      scene.text(`${(((s as any).serv ?? 0)?.['braid desc'] ?? '')}`);
    }
  } else {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9) {
        scene.text('In the mirror, you see a strange woman\'s face looking back at you that exactly copies all your actions. You can hardly accept the idea that this is now you.');
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29) {
          scene.text('In the mirror you see a woman\'s face to which you have become accustomed to. But sometimes, you get the feel that this is not your face.');
        }
      }
    }
    scene.text(`${((s as any).pcs_apprnc_text ?? '')}`);
    scene.text(`${((s as any).hair ?? '')}`);
    scene.text(`${(((s as any).pc_descFull ?? 0)?.['makeup'] ?? '')}. Your ` + ((((s as any).pcs_eyesize ?? 0) > 1) ? ('' + (((s as any).pc_desc ?? 0)?.['eye size'] ?? '') + ' ') : ('')) + `eyes are ${(((s as any).pc_desc ?? 0)?.['eye colour'] ?? '')} ${((s as any).pcs_lashes_txt ?? '')}.`);
    if (((s as any).glass ?? 0) > 0) {
      scene.text(`You are wearing ${(((s as any).pc_descWordy ?? 0)?.['vision'] ?? '')}.`);
    }
    scene.text(`You have ${((s as any).pcs_lipbalm_str ?? '')} ${(((s as any).pc_desc ?? 0)?.['lip size'] ?? '')} lips.`);
    scene.text(String((s as any).pcs_teeth_txt ?? ''));
    scene.text(`${(((s as any).pc_descFull ?? 0)?.['skin'] ?? '')}`);
    if (((s as any).curly ?? 0) > 0  &&  (!((s as any).defcurly ?? 0))) {
      scene.text(`<br>Your curly hair will last for another ${((s as any).curly ?? '')} days.`);
    }
    if (((s as any).straight ?? 0) > 0  &&  ((s as any).defcurly ?? 0) === 1) {
      scene.text(`<br>Your straightened hair will last for another ${((s as any).straight ?? '')} days.`);
    }
    if (((s as any).hbraids ?? 0) > 0) {
      scene.text(`<br>Your braided hair will last for another ${((s as any).hbraids ?? '')} days.`);
    }
    if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
      if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
        scene.text('<br>Your hair dye is beginning to fade and your roots are showing.');
      }
      if ((!((s as any).dyefade ?? 0))) {
        scene.text('<br>Your hair dye has faded and looks terrible.');
      }
    }
    if (((s as any).cheatVars ?? 0)?.['auto_brush'] === 1  &&  (!((s as any).pcs_hairbsh ?? 0))) {
      qspGoto(s, 'mirror', 'brush');
    }
    if (((s as any).mc_inventory ?? 0)?.['scrunchies'] < 1) {
      (s as any).hscrunchw = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['kirbygrips'] < 1) {
      (s as any).hpingripw = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['scrunchies'] < 2) {
      (s as any).hpigtail = 0;
    }
    if (((s as any).pcs_hairbsh ?? 0) > 0  &&  ((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
      if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        scene.text(`As you have a scrunchy, you can arrange your hair into a <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">ponytail</a>. You have ${(((s as any).mc_inventory ?? 0)?.['scrunchies'] ?? '')} scrunchies left.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        scene.text(`You have several clips, pins and grips for you hair. Hence, you can <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 1; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">updo your hair</a>. You have ${(((s as any).mc_inventory ?? 0)?.['kirbygrips'] ?? '')} hair accessories at your disposal.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          scene.text('You can use two hair ties to make yourself some <a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 1; s.hscrunchw = 2; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">pigtails</a>.');
        }
        if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
          scene.text(`You can spend ${((s as any).pcs_hairlng ?? '')/10} minutes <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = 15; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braiding</a> your hair, just the way your sister taught you.`);
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      scene.text('Remove the <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">scrunchie</a> to get rid of the ponytail.');
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 0; s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">Remove</a> your scrunchies and let your hair flow free again.');
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      scene.text('Let your hair <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">flow free</a>.');
    }
    if (((s as any).hbraids ?? 0) > 0) {
      scene.text(`Take ${((s as any).hbraids ?? '')*2+((s as any).pcs_hairlng ?? '')/50} minutes removing your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = 0; return s; }); window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">braid</a>.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0) {
    scene.text(`l ' | Lip gloss: ${(((s as any).mc_inventory ?? 0)?.['lipbalm'] ?? '')}'`);
  } else {
    scene.text('l \' You have no lip gloss left.\'');
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0) {
    scene.text(`l ' | Mink lashes: ${(((s as any).mc_inventory ?? 0)?.['eyelash_mink'] ?? '')}'`);
  } else {
    scene.text('l \' You have no mink lashes left.\'');
  }
  if (((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  if (((s as any).pcs_makeup ?? 0) === ((s as any).makeup ?? 0)?.['base']  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
    scene.actions([
      { label: 'Apply makeup', handler: (st: GameState) => {
    scene.img('images/pc/activities/routine/1.jpg');
    scene.text('You consider for a moment which look you want to go for.');
    if (((st as any).pcs_makeup ?? 0) < 2  &&  ((st as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
      scene.actions([
        { label: 'Light make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (1);
    (st as any).pcs_makeup = 2;
    scene.text(`${((st as any).makeupLight ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).pcs_makeup ?? 0) < 3  &&  ((st as any).mc_inventory ?? 0)?.['cosmetics'] > 1) {
      scene.actions([
        { label: 'Vibrant make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (2);
    (st as any).pcs_makeup = 3;
    scene.text(`${((st as any).makeupNatural ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).mc_inventory ?? 0)?.['cosmetics'] > 2) {
      if (((st as any).pcs_makeup ?? 0) < 4) {
        scene.actions([
          { label: 'Thick make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (3);
    (st as any).vidageday = ((st as any).vidageday ?? 0) - (1);
    (st as any).pcs_makeup = 4;
    scene.text(`${((st as any).makeupHeavy ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((st as any).pcs_makeup ?? 0) < 6) {
        scene.actions([
          { label: 'Bimbo make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (3);
    (st as any).vidageday = ((st as any).vidageday ?? 0) - (1);
    (st as any).pcs_makeup = 6;
    scene.text(`${((st as any).makeupBimbo ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      if (((st as any).pcs_makeup ?? 0) < 6) {
        scene.actions([
          { label: 'Goth make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (3);
    (st as any).vidageday = ((st as any).vidageday ?? 0) - (1);
    (st as any).pcs_makeup = 7;
    scene.text(`${((st as any).makeupGoth ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Smeared make-up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'makupskl', (Math.floor(Math.random() * 3) + 1));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) - (3);
    (st as any).pcs_makeup = 0;
    scene.text(`${((st as any).makeupSmeared ?? '')}`);
    scene.actions([
      { label: 'Continue', goto: ['mirror', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Change your mind', goto: ['mirror', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] <= 0) {
      scene.text('You don\'t have any cosmetics to apply.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
    scene.actions([
      { label: 'Apply lip balm', handler: (st: GameState) => {
    qspCall(st, 'mirror', 'applyLipbalm');
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', '');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
    scene.actions([
      { label: 'Apply false lashes', handler: (st: GameState) => {
    qspCall(st, 'mirror', 'applyLashesplain');
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', '');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] > 0  &&  ((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).lashextensionstyle ?? 0) <= 0) {
    scene.actions([
      { label: 'Apply mink lashes', handler: (st: GameState) => {
    qspCall(st, 'mirror', 'applyLashesmink');
    scene.actions([
      { label: 'View results', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', '');
  } },
    ]);
  } },
    ]);
  }
  (s as any).temp_routine_index = 1;
  (s as any).temp_max_cosmetic_routines = qspFunc(s, 'mirror', 'get_max_cosmetic_routines');
  do {
    (s as any).temp_routine_name = (((s as any).makeup ?? 0)?.['routine_' + String(((s as any).temp_routine_index ?? 0)) + '_name']);
    if (((s as any).makeup ?? 0)['routine_' + (((s as any).temp_routine_index ?? 0))] !== '') {
      qspCall(s, 'mirror', 'routine_description', ((s as any).temp_routine_index ?? 0));
      if (qspFunc(s, 'mirror', 'routine_check', ((s as any).temp_routine_index ?? 0))) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Apply ' + String(((s as any).temp_routine_name ?? '') ?? ''), handler: (st: GameState) => {
    qspGoto(st, 'mirror', 'works_routine', '' + ((st as any).temp_routine_index ?? 0) + '');
  } },
        ]);
      }
    }
    (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
    qspCall(s, 'stat', '');
    (s as any).serv = undefined;
    (s as any).temp_routine_index = undefined;
    (s as any).temp_max_cosmetic_routines = undefined;
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((((s as any).newstylemirror ?? 0)) ? ('Change to the old style mirror') : ('Change to the new style mirror')) ?? ''), handler: (st: GameState) => {
    (st as any).newstylemirror = ((((st as any).newstylemirror ?? 0)) ? (0) : (1));
  }, goto: ['mirror', 'start'] },
    ]);
  } while (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0));
  scene.actions([
    { label: 'Move away from the mirror', goto: ['mirror', 'fin'] },
    { label: 'Manage your custom make-up routines', handler: (st: GameState) => {
    qspCall(st, 'mirror', '');
  } },
  ]);
  scene.build();
}

function enterGetMaxCosmeticRoutines(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 4;
  scene.build();
}

function enterRoutineManage(s: GameState, scene: SceneBuilder): void {
  scene.text('Select make-up level');
  scene.text('iif(makeupSetting = 0,  \' none,\',    \'<a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">none</a>,\')');
  scene.text('iif(makeupSetting = 1,  \' light,\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">light</a>,\')');
  scene.text('iif(makeupSetting = 2,  \' vibrant,\',  \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 2; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">vibrant</a>,\')');
  scene.text('iif(makeupSetting = 3,  \' thick,\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 3; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">thick</a>,\')');
  scene.text('iif(makeupSetting = 4,  \' smeared,\',  \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 4; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">smeared</a>,\')');
  scene.text('iif(makeupSetting = 5,  \' bimbo\',    \' <a href="#" onclick="window.__gameStore.setState((s) => { s.makeupSetting = 5; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">bimbo</a>\')');
  scene.text('Choose if you will use lipbalm');
  scene.text('iif(cust_lipbalm = 0, \'no,\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.cust_lipbalm = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">no</a>,\')');
  scene.text('Choose lash options');
  scene.text('iif(custlashes = 0, \'none,\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.custlashes = 0; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">none</a>,\')');
  scene.text('iif(custlashes = 1, \' fake,\', \' <a href="#" onclick="window.__gameStore.setState((s) => { s.custlashes = 1; return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027routine_manage\u0027); return false;">fake</a>,\')');
  (s as any).routine = String(((s as any).makeupSetting ?? 0)) + String(((s as any).cust_lipbalm ?? 0)) + String(((s as any).custlashes ?? 0));
  (s as any).temp_routine_index = 0;
  (s as any).temp_max_cosmetic_routines = qspFunc(s, 'mirror', 'get_max_cosmetic_routines');
  do {
    (s as any).temp_routine_index = ((s as any).temp_routine_index ?? 0) + (1);
    scene.actions([
      { label: 'Save routine', handler: (st: GameState) => {
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_makeup'] = ((st as any).makeupSetting ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_lipbalm'] = ((st as any).cust_lipbalm ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_lashes'] = ((st as any).custlashes ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0))] = ((st as any).routine ?? 0);
    ((st as any).makeup = (st as any).makeup ?? {})['routine_' + String(((st as any).temp_routine_index ?? 0)) + '_name'] = 'routine ' + ((st as any).temp_routine_index ?? 0) + '';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRoutineManage(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } while (((s as any).temp_routine_index ?? 0) <= ((s as any).temp_max_cosmetic_routines ?? 0)  &&  ((s as any).makeup ?? 0)['routine_' + (((s as any).temp_routine_index ?? 0))] !== '');
  scene.actions([
    { label: 'Exit', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'get_max_cosmetic_routines':
      enterGetMaxCosmeticRoutines(s, scene);
      break;
    case 'routine_manage':
      enterRoutineManage(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mirror: LocationDef = {
  name: 'mirror',
  title: 'In the mirror, you see a strange woman\'s face looking back a',
  region: 'other',
  enter: enter,
};
